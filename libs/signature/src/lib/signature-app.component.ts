import {AfterViewInit, Component, ComponentRef, OnDestroy} from '@angular/core';
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
  TabActivatorService,
  HostingDynamicComponentService,
  AddDynamicComponentService,
  OnCloseService,
  ExceptionMessageService,
  WindowService, Utils
} from "@groupdocs.examples.angular/common-components";
import {SignatureConfig} from "./signature-config";
import {SignatureConfigService} from "./signature-config.service";
import {
  AddedSignature,
  DraggableSignature,
  Position, RemoveSign,
  SignatureData,
  SignatureType
} from "./signature-models";
import {SelectSignatureService} from "./select-signature.service";
import {Signature} from "./signature/signature.component";
import {DragSignatureService} from "./drag-signature.service";
import {RemoveSignatureService} from "./remove-signature.service";
import * as jquery from 'jquery';
import {ActiveSignatureService} from "./active-signature.service";
import {SignaturesHolderService} from "./signatures-holder.service";

const $ = jquery;

@Component({
  selector: 'gd-signature',
  templateUrl: './signature-app.component.html',
  styleUrls: ['./signature-app.component.less']
})
export class SignatureAppComponent implements AfterViewInit, OnDestroy {
  title = 'signature';
  files: FileModel[] = [];
  file: FileDescription;
  signatureConfig: SignatureConfig;
  countPages = 0;
  formatDisabled = !this.file;
  credentials: FileCredentials;
  browseFilesModal = CommonModals.BrowseFiles;
  isDesktop: boolean;
  leftBarOpen = false;
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
  showNewHandSign = false;
  showNewStampSign = false;

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
              private _tabActivationService: TabActivatorService,
              private _hostingComponentsService: HostingDynamicComponentService,
              private _addDynamicComponentService: AddDynamicComponentService,
              private _dragSignatureService: DragSignatureService,
              private _onCloseService: OnCloseService,
              _removeSignature: RemoveSignatureService,
              private _activeSignatureService: ActiveSignatureService,
              private _excMessageService: ExceptionMessageService,
              private _signaturesHolderService: SignaturesHolderService) {

    _removeSignature.removeSignature.subscribe((del: RemoveSign) => {
      const ids = this._signaturesHolderService.get(del.guid);
      for (const id of ids) {
        if (del.type === SignatureType.DIGITAL.id || del.id === id) {
          const componentRef = this.signatureComponents.get(id);
          componentRef.destroy();
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
          this._signatureService.upload(uploads.item(i), '', this.rewriteConfig, null).subscribe(() => {
            this.selectDir('');
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

  get rewriteConfig(): boolean {
    return this.signatureConfig ? this.signatureConfig.rewrite : true;
  }

  get zoomConfig(): boolean {
    return false;
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
    this._signatureService.loadFile(this.credentials).subscribe((file: FileDescription) => {
        this.file = file;
        this.formatDisabled = !this.file;
        if (file) {
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

  ngAfterViewInit(): void {
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
      const left = position.x - $(documentPage).offset().left;
      const top = position.y - $(documentPage).offset().top;
      const currentPosition = new Position(left, top);
      const sign = this._dragSignatureService.sign;
      if (sign) {
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
        const id = this.addSignatureComponent(addedSignature, sign, page.number);
        this._signaturesHolderService.addId(sign.guid, id);
      }
      this.closeTab(sign.type);
    } else {
      this._signatureService.loadSignatureImage(sign).subscribe((signature: AddedSignature) => {
        signature.number = sign.pageNumber;
        const id = this.addSignatureComponent(signature, sign, sign.pageNumber);
        this._signaturesHolderService.addId(sign.guid, id);
        this.closeTab(sign.type);
      });
    }
  }

  private addSignatureComponent(addedSignature: AddedSignature, sign: DraggableSignature, pageNumber: number) {
    const dynamicDirective = this._hostingComponentsService.find(pageNumber);
    if (dynamicDirective) {
      const viewContainerRef = dynamicDirective.viewContainerRef;
      const selectSignature = this._addDynamicComponentService.addDynamicComponent(viewContainerRef, Signature);
      const id = this.signatureComponents.size + 1;
      (<Signature>selectSignature.instance).id = id;
      (<Signature>selectSignature.instance).data = addedSignature;
      (<Signature>selectSignature.instance).position = sign.position;
      (<Signature>selectSignature.instance).type = sign.type;
      this.signatureComponents.set(id, selectSignature);
      this._activeSignatureService.changeActive(id);
      return id;
    }
    return null;
  }

  private closeTab(type: string) {
    this._tabActivationService.changeActiveTab(type);
    if (!this.isDesktop) {
      this.leftBarOpen = false;
    }
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
      this.showNewHandSign = true;
      this._tabActivationService.changeActiveTab(SignatureType.HAND.id);
    } else if (SignatureType.STAMP.id === $event) {
      this.showNewStampSign = true;
      this._tabActivationService.changeActiveTab(SignatureType.STAMP.id);
    }
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

  private prepareSignaturesData() {
    const signatures = [];
    for (const ids of this._signaturesHolderService.values()) {
      const id = ids.pop();
      const componentRef = this.signatureComponents.get(id);
      // @ts-ignore
      const sign = (<Signature>componentRef).instance;
      const data = sign.data;
      const position = sign.position;
      const type = sign.type;

      signatures.push(SignatureData.map(data, type, position));
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
}
