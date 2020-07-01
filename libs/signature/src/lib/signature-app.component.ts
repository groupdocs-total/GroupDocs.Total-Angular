import {Component, ComponentRef, OnDestroy, OnInit} from '@angular/core';
import {SignatureService} from "./signature.service";
import {
  FileDescription,
  FileModel,
  ModalService,
  UploadFilesService,
  NavigateService,
  PagePreloadService,
  PageModel,
  ZoomService,
  RenderPrintService,
  FileUtil,
  PasswordService,
  FileCredentials,
  CommonModals,
  HostingDynamicComponentService,
  AddDynamicComponentService,
  OnCloseService,
  ExceptionMessageService,
  WindowService,
  Utils,
  TabActivatorService,
  TopTabActivatorService
} from "@groupdocs.examples.angular/common-components";
import {SignatureConfig} from "./signature-config";
import {SignatureConfigService} from "./signature-config.service";
import {
  AddedSignature,
  CopyChanges,
  CopySign,
  DraggableSignature,
  Position, RemoveSign,
  SignatureData, SignatureProps,
  SignatureType
} from "./signature-models";
import {SelectSignatureService} from "./select-signature.service";
import {Signature} from "./signature/signature.component";
import {DragSignatureService} from "./drag-signature.service";
import {RemoveSignatureService} from "./remove-signature.service";
import {ActiveSignatureService} from "./active-signature.service";
import {SignaturesHolderService} from "./signatures-holder.service";
import 'hammerjs';
import {CopySignatureService} from "./copy-signature.service";
import * as jquery from 'jquery';

const $ = jquery;

@Component({
  selector: 'gd-signature',
  templateUrl: './signature-app.component.html',
  styleUrls: ['./signature-app.component.less']
})
export class SignatureAppComponent implements OnDestroy, OnInit {
  title = 'signature';
  files: FileModel[] = [];
  file: FileDescription;
  signatureConfig: SignatureConfig;
  countPages = 0;
  formatDisabled = !this.file;
  credentials: FileCredentials;
  browseFilesModal = CommonModals.BrowseFiles;
  isDesktop: boolean;
  signatureTypes = [
    SignatureType.TEXT,
    SignatureType.IMAGE,
    SignatureType.DIGITAL,
    SignatureType.QR_CODE,
    SignatureType.BAR_CODE,
    SignatureType.STAMP,
    SignatureType.HAND,
  ];
  signatureTypeCodes = [
    SignatureType.QR_CODE,
    SignatureType.BAR_CODE,
  ];

  signatureComponents = new Map<number, ComponentRef<any>>();
  activeSignatureTab: string;
  isLoading: boolean;
  fileWasDropped = false;

  _zoom = 100;
  _pageWidth: number;
  _pageHeight: number;

  constructor(private _signatureService: SignatureService,
              private _modalService: ModalService,
              configService: SignatureConfigService,
              uploadFilesService: UploadFilesService,
              private _navigateService: NavigateService,
              private _zoomService: ZoomService,
              pagePreloadService: PagePreloadService,
              private _renderPrintService: RenderPrintService,
              passwordService: PasswordService,
              private _windowService: WindowService,
              private _selectSignatureService: SelectSignatureService,
              private _signatureTabActivationService: TopTabActivatorService,
              private _hostingComponentsService: HostingDynamicComponentService,
              private _addDynamicComponentService: AddDynamicComponentService,
              private _dragSignatureService: DragSignatureService,
              private _onCloseService: OnCloseService,
              removeSignatureService: RemoveSignatureService,
              private _activeSignatureService: ActiveSignatureService,
              private _excMessageService: ExceptionMessageService,
              private _signaturesHolderService: SignaturesHolderService,
              private _tabActivatorService: TabActivatorService,
              copySignatureService: CopySignatureService) {

    this._tabActivatorService.activeTabChange.subscribe((tabId: string) => {
      if (tabId === '1') {
        if (this.activeSignatureTab) {
          this._signatureTabActivationService.changeActiveTab(this.activeSignatureTab);
        }
        this.activeSignatureTab = null;
      }
    });

    this.isDesktop = _windowService.isDesktop();
    _windowService.onResize.subscribe((w) => {
      this.isDesktop = _windowService.isDesktop();
      if (!this.isDesktop) {
        this.refreshZoom();
      }
    });

    copySignatureService.copySignature.subscribe((copySign: CopySign) => {
      const componentRef = this.signatureComponents.get(copySign.id);
      if (componentRef) {
        // @ts-ignore
        const comp = (<Signature>componentRef).instance;
        const compPage = comp.data.number;
        comp.baseCopied = true;
        for (const page of this.file.pages) {
          if (page.number !== compPage) {
            const sign = this.createDraggableSign(comp, copySign, page);
            const addedSignature = this.createAddedSignature(copySign, comp, page);
            const id = this.addSignatureComponent(addedSignature, sign, page, true);
            this._signaturesHolderService.addId(sign.guid, id);
          }
        }
      }
    });

    copySignatureService.changesSignature.subscribe((copyChanges: CopyChanges) => {
      const componentRef = this.signatureComponents.get(copyChanges.id);
      if (componentRef) {
        const ids = this._signaturesHolderService.get(copyChanges.guid);
        for (const id of ids) {
          const compRef = this.signatureComponents.get(id);
          if (compRef) {
            // @ts-ignore
            const comp = (<Signature>compRef).instance;
            if (comp.id !== copyChanges.id && (comp.copied || comp.baseCopied)) {
              comp.data.width = copyChanges.width;
              comp.data.height = copyChanges.height;
              comp.data.position = copyChanges.position;
              comp.data.props = copyChanges.props;
            }
          }
        }
      }
    });

    removeSignatureService.removeSignature.subscribe((del: RemoveSign) => {
      const ids = this._signaturesHolderService.get(del.guid);
      for (const id of ids) {
        if (del.type === SignatureType.DIGITAL.id || del.id === id) {
          const componentRef = this.signatureComponents.get(id);
          if (componentRef) {
            componentRef.destroy();
          }
          this.signatureComponents.delete(id);
          this._signaturesHolderService.remove(del.guid, id);
        }
      }
    });

    configService.updatedConfig.subscribe((signatureConfig) => {
      this.signatureConfig = signatureConfig;
    });

    uploadFilesService.uploadsChange.subscribe((uploads) => {
      if (uploads) {
        let i: number;
        for (i = 0; i < uploads.length; i++) {
          this._signatureService.upload(uploads.item(i), '', this.rewriteConfig, null).subscribe((obj: FileCredentials) => {
            this.fileWasDropped ? this.selectFile(obj.guid, '', '') : this.selectDir('');
          });
        }
      }
    });

    pagePreloadService.checkPreload.subscribe((page: number) => {
      if (this.preloadPageCountConfig !== 0) {
        for (let i = page; i < page + 2; i++) {
          if (i > 0 && i <= this.countPages && !this.file.pages[i - 1].data) {
            this.preloadPages(i, i);
          }
        }
      }
    });

    passwordService.passChange.subscribe((pass: string) => {
      this.selectFile(this.credentials.guid, pass, CommonModals.PasswordRequired);
    });

    _selectSignatureService.selectSignature.subscribe((sign: DraggableSignature) => {
      this.selectSignature(sign);
    });

    this.isDesktop = _windowService.isDesktop();
    _windowService.onResize.subscribe((w) => {
      this.isDesktop = _windowService.isDesktop();
    });
  }

  private createDraggableSign(comp, copySign: CopySign, page) {
    const sign = new DraggableSignature();
    sign.type = comp.type;
    sign.guid = copySign.guid;
    sign.position = comp.position;
    sign.pageNumber = page.number;
    return sign;
  }

  private createAddedSignature(copySign: CopySign, comp, page) {
    const addedSignature = new AddedSignature();
    addedSignature.guid = copySign.guid;
    addedSignature.data = comp.data.data;
    if (comp.data.props) {
      addedSignature.props = comp.data.props;
    }
    addedSignature.width = comp.data.width;
    addedSignature.height = comp.data.height;
    addedSignature.number = page.number;
    return addedSignature;
  }

  ngOnInit(): void {
    if (this.defaultDocumentConfig()) {
      this.isLoading = true;
      this.selectFile(this.defaultDocumentConfig(), "", "");
    }
  }

  private ptToPx(pt: number) {
    //pt * 96 / 72 = px.
    return pt * 96 / 72;
  }

  private getFitToWidth() {
    // Images and Excel-related files receiving dimensions in px from server
    const pageWidth = this.ptToPx(this._pageWidth);
    const pageHeight = this.ptToPx(this._pageHeight);
    const offsetWidth = pageWidth ? pageWidth : window.innerWidth;

    return (pageHeight > pageWidth && Math.round(offsetWidth / window.innerWidth) < 2) ? 200 - Math.round(offsetWidth * 100 / window.innerWidth) : Math.round(window.innerWidth * 100 / offsetWidth);
  }

  set zoom(zoom) {
    this._zoom = zoom;
    this._zoomService.changeZoom(this._zoom);
  }

  get zoom() {
    return this._zoom;
  }

  private refreshZoom() {
    this.zoom = this._windowService.isDesktop() ? 100 : this.getFitToWidth();
  }

  zoomIn() {
    if (this.formatDisabled)
      return;
    if (this._zoom < 490) {
      this.zoom = this._zoom + 10;
    }
  }

  zoomOut() {
    if (this.formatDisabled)
      return;
    if (this._zoom > 30) {
      this.zoom = this._zoom - 10;
    }
  }

  get rewriteConfig(): boolean {
    return this.signatureConfig ? this.signatureConfig.rewrite : true;
  }

  get zoomConfig(): boolean {
    return this.signatureConfig ? this.signatureConfig.zoom : true;
  }

  get pageSelectorConfig(): boolean {
    return this.signatureConfig ? this.signatureConfig.pageSelector : true;
  }

  get preloadPageCountConfig(): number {
    return this.signatureConfig ? this.signatureConfig.preloadPageCount : 0;
  }

  get downloadConfig(): boolean {
    return this.signatureConfig ? this.signatureConfig.download : true;
  }

  get downloadOriginalConfig(): boolean {
    return this.signatureConfig ? this.signatureConfig.downloadOriginal : true;
  }

  get downloadSingedConfig(): boolean {
    return this.signatureConfig ? this.signatureConfig.downloadSigned : true;
  }

  get uploadConfig(): boolean {
    return this.signatureConfig ? this.signatureConfig.upload : true;
  }

  private defaultDocumentConfig() {
    return this.signatureConfig ? this.signatureConfig.defaultDocument : "";
  }

  get printConfig(): boolean {
    return this.signatureConfig ? this.signatureConfig.print : true;
  }

  get browseConfig(): boolean {
    return this.signatureConfig ? this.signatureConfig.browse : true;
  }

  get htmlModeConfig(): boolean {
    return false;
  }

  get enableRightClickConfig(): boolean {
    return this.signatureConfig ? this.signatureConfig.enableRightClick : true;
  }

  get textSignatureConfig(): boolean {
    return this.signatureConfig ? this.signatureConfig.textSignature : true;
  }

  get imageSignatureConfig(): boolean {
    return this.signatureConfig ? this.signatureConfig.imageSignature : true;
  }

  get digitalSignatureConfig(): boolean {
    return this.signatureConfig ? this.signatureConfig.digitalSignature : true;
  }

  get qrCodeSignatureConfig(): boolean {
    return this.signatureConfig ? this.signatureConfig.qrCodeSignature : true;
  }

  get barCodeSignatureConfig(): boolean {
    return this.signatureConfig ? this.signatureConfig.barCodeSignature : true;
  }

  get stampSignatureConfig(): boolean {
    return this.signatureConfig ? this.signatureConfig.stampSignature : true;
  }

  get handSignatureConfig(): boolean {
    return this.signatureConfig ? this.signatureConfig.handSignature : true;
  }

  get currentPage(): number {
    return this._navigateService.currentPage;
  }

  openModal(id: string) {
    this._modalService.open(id);
  }

  closeModal(id: string) {
    this._modalService.close(id);
  }

  selectDir($event: string) {
    this._signatureService.loadFiles($event).subscribe((files: FileModel[]) => this.files = files || []);
  }

  selectFile($event: string, password: string, modalId: string) {
    this.credentials = {guid: $event, password: password};
    this.file = null;
    this._signatureService.loadFile(this.credentials).subscribe((file: FileDescription) => {
        this.file = file;
        this.formatDisabled = !this.file;
        if (file) {
          if (!this.isDesktop && file.pages && file.pages[0]) {
            this._pageHeight = file.pages[0].height;
            this._pageWidth = file.pages[0].width;
            this.refreshZoom();
          }
          const preloadPageCount = this.preloadPageCountConfig;
          const countPages = file.pages ? file.pages.length : 0;
          if (preloadPageCount > 0) {
            this.preloadPages(1, preloadPageCount > countPages ? countPages : preloadPageCount);
          }
          this._navigateService.countPages = countPages;
          this._navigateService.currentPage = 1;
          this.countPages = countPages;
          this.cleanSignatures();
        }
      }
    );
    if (modalId) {
      this._modalService.close(modalId);
    }
    this.clearData();
  }

  preloadPages(start: number, end: number) {
    for (let i = start; i <= end; i++) {
      this._signatureService.loadPage(this.credentials, i).subscribe((page: PageModel) => {
        this.file.pages[i - 1] = page;
      });
    }
  }

  upload($event: string) {
    this._signatureService.upload(null, $event, this.rewriteConfig, null).subscribe(() => {
      this.selectDir('');
    });
  }

  downloadFile() {
    if (this.formatDisabled)
      return;
    window.location.assign(this._signatureService.getDownloadUrl(this.credentials));
  }

  private clearData() {
    if (!this.file || !this.file.pages) {
      return;
    }
    for (const page of this.file.pages) {
      page.data = null;
    }
  }

  onRightClick($event: MouseEvent) {
    return this.enableRightClickConfig;
  }

  getSignatureTypeConfig(id: string) {
    switch (id) {
      case SignatureType.TEXT.id:
        return this.textSignatureConfig;
      case SignatureType.IMAGE.id:
        return this.imageSignatureConfig;
      case SignatureType.DIGITAL.id:
        return this.digitalSignatureConfig;
      case SignatureType.QR_CODE.id:
        return this.qrCodeSignatureConfig;
      case SignatureType.BAR_CODE.id:
        return this.barCodeSignatureConfig;
      case SignatureType.STAMP.id:
        return this.stampSignatureConfig;
      case SignatureType.HAND.id:
        return this.handSignatureConfig;
    }
  }

  dragOver($event: DragEvent) {
    $event.preventDefault();
    $event.stopPropagation();
  }

  dropSignature($event: DragEvent) {
    $event.preventDefault();
    $event.stopPropagation();
    const position = Utils.getMousePosition($event);

    const currentPage = document.elementFromPoint(position.x, position.y);
    if (currentPage && $(currentPage).parent().parent() && $(currentPage).parent().parent().parent().hasClass("page")) {
      const documentPage = $(currentPage).parent().parent()[0];
      const left = (position.x - $(documentPage).offset().left)/(this.zoom/100);
      const top = (position.y - $(documentPage).offset().top)/(this.zoom/100);
      const currentPosition = new Position(left, top);
      const sign = this._dragSignatureService.sign;
      if (sign) {
        const id = $(currentPage).parent().attr('id');
        if (id) {
          const split = id.split('-');
          sign.pageNumber = split.length === 2 ? parseInt(split[1], 10) : sign.pageNumber;
        }
        sign.position = currentPosition;
        this.selectSignature(sign);
        this._dragSignatureService.sign = null;
      }
    }
  }

  private selectSignature(sign: DraggableSignature) {
    if (sign.type === SignatureType.DIGITAL.id) {
      const addedSignature = new AddedSignature();
      addedSignature.digitalProps = sign.digitalProps;
      addedSignature.guid = sign.guid;
      addedSignature.number = sign.pageNumber;
      for (const page of this.file.pages) {
        const id = this.addSignatureComponent(addedSignature, sign, page);
        this._signaturesHolderService.addId(sign.guid, id);
      }
      this.closeTab(sign.type);
    } else {
      this._signatureService.loadSignatureImage(sign).subscribe((signature: AddedSignature) => {
        signature.number = sign.pageNumber;
        const pageModel = this.file.pages.find(function (p) {
          return p.number === sign.pageNumber;
        });
        const id = this.addSignatureComponent(signature, sign, pageModel);
        this._signaturesHolderService.addId(sign.guid, id);
        this.closeTab(sign.type);
      });
    }
  }

  private addSignatureComponent(addedSignature: AddedSignature, sign: DraggableSignature, page: PageModel, copied: boolean = false) {
    const dynamicDirective = this._hostingComponentsService.find(page.number);
    if (dynamicDirective) {
      const viewContainerRef = dynamicDirective.viewContainerRef;
      const selectSignature = this._addDynamicComponentService.addDynamicComponent(viewContainerRef, Signature);
      const id = this.getNextId();
      while (addedSignature.width >= page.width || addedSignature.height >= page.height) {
        addedSignature.width = addedSignature.width / 2;
        addedSignature.height = addedSignature.height / 2;
      }
      (<Signature>selectSignature.instance).id = id;
      (<Signature>selectSignature.instance).copied = copied;
      (<Signature>selectSignature.instance).data = addedSignature;
      (<Signature>selectSignature.instance).position = sign.position;
      (<Signature>selectSignature.instance).type = sign.type;
      (<Signature>selectSignature.instance).pageWidth = page.width;
      (<Signature>selectSignature.instance).pageHeight = page.height;
      this.signatureComponents.set(id, selectSignature);
      this._activeSignatureService.changeActive(id);
      return id;
    }
    return null;
  }

  private getNextId() {
    let maxId = 0;
    for (const annId of this.signatureComponents.keys()) {
      if (annId > maxId) {
        maxId = annId;
      }
    }
    const id = maxId + 1;
    return id;
  }

  private closeTab(type: string) {
    this._signatureTabActivationService.changeActiveTab(type);
  }

  hideAll($event) {
    if (($event.target.parentElement && $event.target.parentElement.attributes['name'] &&
      $event.target.parentElement.attributes['name'].value === 'button') ||
      ($event.target.parentElement &&
        $event.target.parentElement.parentElement &&
        $event.target.parentElement.parentElement.attributes['name'] &&
        $event.target.parentElement.parentElement.attributes['name'].value === 'button') ||
      ($event.target.parentElement &&
        $event.target.parentElement.parentElement &&
        $event.target.parentElement.parentElement.parentElement &&
        $event.target.parentElement.parentElement.parentElement.parentElement &&
        $event.target.parentElement.parentElement.parentElement.parentElement.attributes['name'] &&
        $event.target.parentElement.parentElement.parentElement.parentElement.attributes['name'].value === 'button')) {

      return;
    }
    this._onCloseService.close(true);
  }

  newSign($event: string) {
    if (SignatureType.HAND.id === $event) {
      this._modalService.open(CommonModals.DrawHandSignature);
    } else if (SignatureType.STAMP.id === $event) {
      this._modalService.open(CommonModals.DrawStampSignature);
    } else if (SignatureType.TEXT.id === $event) {
      this.addTextSign();
      this._signatureTabActivationService.changeActiveTab(SignatureType.TEXT.id);
    }
  }

  private addTextSign() {
    const signature = new AddedSignature();
    signature.props = SignatureProps.getDefault();
    signature.guid = DraggableSignature.TEMP;
    const sign = new DraggableSignature();
    sign.guid = DraggableSignature.TEMP;
    sign.position = new Position(0, 0);
    sign.type = SignatureType.TEXT.id;
    const pageNumber = this._navigateService.currentPage;
    signature.number = pageNumber;
    sign.pageNumber = pageNumber;
    const pageModel = this.file.pages.find(function (p) {
      return p.number === pageNumber;
    });
    const id = this.addSignatureComponent(signature, sign, pageModel);
    this._signaturesHolderService.addId(sign.guid, id);
  }

  ngOnDestroy(): void {
    this.cleanSignatures();
  }

  private cleanSignatures() {
    for (const componentRef of this.signatureComponents.values()) {
      componentRef.destroy();
    }
    this.signatureComponents = new Map<number, ComponentRef<any>>();
    this._signaturesHolderService.clear();
  }

  sign() {
    const signatures = this.prepareSignaturesData();
    this._signatureService.sign(this.credentials, signatures).subscribe((ret: any) => {
      this._modalService.open(CommonModals.OperationSuccess);
      this.selectFile(ret.guid, null, CommonModals.OperationSuccess);
    });
  }

  public prepareSignaturesData() {
    const signatures = [];
    for (const ids of this._signaturesHolderService.values()) {
      for (const id of ids) {
        const componentRef = this.signatureComponents.get(id);
        // @ts-ignore
        const sign = (<Signature>componentRef).instance;
        const data = sign.data;
        const position = sign.position;
        const type = sign.type;

        if (DraggableSignature.TEMP !== data.guid) {
          signatures.push(SignatureData.map(data, type, position));
        }

        if (SignatureType.DIGITAL.id === type) {
          break;
        }
      }
    }
    return signatures;
  }

  isPdf() {
    if (this.file) {
      if (FileUtil.find(this.file.guid, false).format === "Portable Document Format") {
        return true;
      }
    }
    return false;
  }

  codesConfig() {
    return this.getSignatureTypeConfig(SignatureType.BAR_CODE.id) || this.getSignatureTypeConfig(SignatureType.QR_CODE.id);
  }

  isVisible(id: string) {
    const notCode = id !== SignatureType.BAR_CODE.id && id !== SignatureType.QR_CODE.id;
    return this.getSignatureTypeConfig(id) && (this.isDesktop || notCode);
  }

  activeTab($event: string) {
    this.activeSignatureTab = $event;
  }

  fileDropped($event) {
    this.fileWasDropped = $event;
  }

  isFirstTab(signatureType: { name: string; icon: string; id: string; title: string }) {
    if ((signatureType.id === SignatureType.TEXT.id) || (!this.isDesktop && signatureType.id === SignatureType.QR_CODE.id)) {
      return -1;
    }
    if ((signatureType.id === SignatureType.HAND.id) || (!this.isDesktop && signatureType.id === SignatureType.BAR_CODE.id)) {
      return 1;
    }
    return 0;
  }

  onPan($event)
  {
    this._zoomService.changeZoom(this._zoom);
  }
}
