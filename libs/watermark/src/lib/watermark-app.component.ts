import {Component, ComponentRef, OnInit} from '@angular/core';
import {WatermarkConfig} from "./watermark-config";
import {WatermarkService} from "./watermark.service";
import {
  AddDynamicComponentService,
  CommonModals,
  FileCredentials,
  FileModel,
  HostingDynamicComponentService,
  ModalService,
  NavigateService, PagePreloadService, PasswordService,
  TopTabActivatorService, UploadFilesService,
  WindowService,
  FileUtil,
  PageModel,
  ZoomService,
  TabActivatorService,
  Utils
} from "@groupdocs.examples.angular/common-components";
import {
  WatermarkType,
  Position,
  RemoveWatermark,
  FileWatermarkDescription, PageWatermarkModel, WatermarkData, Dimension, DraggableWatermark, AddedWatermark, WatermarkModel, WatermarkProps
} from "./watermark-models";
import {WatermarkComponent} from "./watermark/watermark.component";
import {ActiveWatermarkService} from "./active-watermark.service";
import * as jquery from 'jquery';
import {RemoveWatermarkService} from "./remove-watermark.service";
import { SelectWatermarkService } from './select-watermark.service';
import { WatermarksHolderService } from './watermarks-holder.service';
import { DragWatermarkService } from './drag-watermark.service';

const $ = jquery;

@Component({
  selector: 'gd-watermark-app',
  templateUrl: './watermark-app.component.html',
  styleUrls: ['./watermark-app.component.less']
})
export class WatermarkAppComponent implements OnInit {
  title = 'watermark';
  files: FileModel[] = [];
  file: FileWatermarkDescription;
  isLoading: boolean;
  watermarkConfig: WatermarkConfig;
  browseFilesModal = CommonModals.BrowseFiles;
  formatDisabled = !this.file;
   public credentials: FileCredentials;
  watermarkTypes = [
    WatermarkType.TEXT,
    WatermarkType.IMAGE
  ];
  isDesktop: boolean;
  watermarkTypeFirst = [
    WatermarkType.TEXT
  ];
  countPages = 0;

  _zoom = 100;
  _pageWidth: number;
  _pageHeight: number;

  activeWatermarkTab: string;
  fileWasDropped = false;
  watermarkComponents = new Map<number, ComponentRef<any>>();

  constructor(private _watermarkService: WatermarkService,
              private _modalService: ModalService,
              private _navigateService: NavigateService,
              private _tabActivatorService: TabActivatorService,
              private _hostingComponentsService: HostingDynamicComponentService,
              private _addDynamicComponentService: AddDynamicComponentService,
              private _activeWatermarkService: ActiveWatermarkService,
              private _removeWatermarkService: RemoveWatermarkService,
              private _selectWatermarkService: SelectWatermarkService,
              private _watermarksHolderService: WatermarksHolderService,
              private _watermarkTabActivationService: TopTabActivatorService,
              private _dragWatermarkService: DragWatermarkService,
              private _zoomService: ZoomService,
              uploadFilesService: UploadFilesService,
              pagePreloadService: PagePreloadService,
              passwordService: PasswordService,
              private _windowService: WindowService) {

    this._tabActivatorService.activeTabChange.subscribe((tabId: string) => {
      if (tabId === '1') {
        if (this.activeWatermarkTab) {
          this._watermarkTabActivationService.changeActiveTab(this.activeWatermarkTab);
        }
        this.activeWatermarkTab = null;
      }
    });

    _removeWatermarkService.removeWatermark.subscribe((del: RemoveWatermark) => {
      const ids = this._watermarksHolderService.get(del.guid);
      for (const id of ids) {
        if (del.id === id) {
          const componentRef = this.watermarkComponents.get(id);
          if (componentRef) {
            componentRef.destroy();
          }
          this.watermarkComponents.delete(id);
          this._watermarksHolderService.remove(del.guid, id);
        }
      }
    });

    uploadFilesService.uploadsChange.subscribe((uploads) => {
      if (uploads) {
        let i: number;
        for (i = 0; i < uploads.length; i++) {
          this._watermarkService.upload(uploads.item(i), '', this.rewriteConfig, null).subscribe((obj: FileCredentials) => {
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

    this.isDesktop = _windowService.isDesktop();
    _windowService.onResize.subscribe((w) => {
      this.isDesktop = _windowService.isDesktop();
      if (!this.isDesktop) {
        this.refreshZoom();
      }
    });

    _selectWatermarkService.selectWatermark.subscribe((watermark: DraggableWatermark) => {
      this.selectWatermark(watermark);
    });
  }

  get rewriteConfig(): boolean {
    return this.watermarkConfig ? this.watermarkConfig.rewrite : true;
  }

  get preloadPageCountConfig(): number {
    return this.watermarkConfig ? this.watermarkConfig.preloadPageCount : 0;
  }

  get uploadConfig(): boolean {
    return this.watermarkConfig ? this.watermarkConfig.upload : true;
  }

  get browseConfig(): boolean {
    return this.watermarkConfig ? this.watermarkConfig.browse : true;
  }

  get htmlModeConfig(): boolean {
    return false;
  }

  get textWatermarkConfig(): boolean {
    return this.watermarkConfig ? this.watermarkConfig.textWatermark : true;
  }

  get imageWatermarkConfig(): boolean {
    return this.watermarkConfig ? this.watermarkConfig.imageWatermark : true;
  }

  get zoomConfig(): boolean {
    return this.watermarkConfig ? this.watermarkConfig.zoom : true;
  }

  ngOnInit() {
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

  openModal(id: string) {
    this._modalService.open(id);
  }

  closeModal(id: string) {
    this._modalService.close(id);
  }

  selectDir($event: string) {
    this._watermarkService.loadFiles($event).subscribe((files: FileModel[]) => this.files = files || []);
  }

  selectFile($event: string, password: string, modalId: string) {
    this.credentials = new FileCredentials($event, password);
    this.file = null;
    this._watermarkService.loadFile(this.credentials).subscribe((file: FileWatermarkDescription) => {
        this.cleanWatermarks();
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
          } else {
            setTimeout(() => {
              for (const page of this.file.pages) {
              }
            }, 100);
          }
          this._navigateService.countPages = countPages;
          this._navigateService.currentPage = 1;
          this.countPages = countPages;
        }
      }
    );
    if (modalId) {
      this._modalService.close(modalId);
    }
    this.clearData();
  }

  private selectWatermark(selectedWatermark: DraggableWatermark) {
      this._watermarkService.loadWatermarkImage(selectedWatermark).subscribe((watermark: AddedWatermark) => {
        watermark.number = selectedWatermark.pageNumber;
        const pageModel = this.file.pages.find(function (p) {
          return p.number === selectedWatermark.pageNumber;
        });
        const id = this.addWatermarkComponent(watermark, selectedWatermark, pageModel);  
        this._watermarksHolderService.addId(selectedWatermark.guid, id);
        this.closeTab(selectedWatermark.type);
      });
  }

  private closeTab(type: string) {
    this._watermarkTabActivationService.changeActiveTab(type);
  }

  preloadPages(start: number, end: number) {
    for (let i = start; i <= end; i++) {
      this._watermarkService.loadPage(this.credentials, i).subscribe((page: PageWatermarkModel) => {
        this.file.pages[i - 1] = page;
      });
    }
  }

  upload($event: string) {
    this._watermarkService.upload(null, $event, this.rewriteConfig, null).subscribe(() => {
      this.selectDir('');
    });
  }

  downloadFile() {
    if (this.formatDisabled)
      return;
    window.location.assign(this._watermarkService.getDownloadUrl(this.credentials));
  }

  saveWatermark() {
    const watermarksData = this.prepareWatermarksData();

    this._watermarkService.saveWatermark(this.credentials, watermarksData).subscribe((ret: any) => {
      this._modalService.open(CommonModals.OperationSuccess);
      this.selectFile(ret.guid, null, CommonModals.OperationSuccess);
    });
  }

  public prepareWatermarksData() {
    const watermarks = [];
    for (const ids of this._watermarksHolderService.values()) {
      for (const id of ids) {
        const componentRef = this.watermarkComponents.get(id);
        // @ts-ignore
        const watermark = (<WatermarkComponent>componentRef).instance;
        const data = watermark.data;
        const position = watermark.position;
        const type = watermark.type;

        if (DraggableWatermark.TEMP !== data.guid) {
          watermarks.push(WatermarkData.map(data, type, position));
        }
      }
    }
    return watermarks;
  }

  newWatermark($event: string) {
    if (WatermarkType.TEXT.id === $event) {
      this.addTextWatermark();
      this._watermarkTabActivationService.changeActiveTab(WatermarkType.TEXT.id);
    }
  }

  private addTextWatermark() {
    const addedWatermark = new AddedWatermark();
    addedWatermark.props = WatermarkProps.getDefault();
    addedWatermark.guid = DraggableWatermark.TEMP;

    const dragWatermark = new DraggableWatermark();
    dragWatermark.guid = DraggableWatermark.TEMP;
    dragWatermark.position = new Position(0, 0);
    dragWatermark.type = WatermarkType.TEXT.id;

    const pageNumber = this._navigateService.currentPage;
    addedWatermark.number = pageNumber;
    dragWatermark.pageNumber = pageNumber;

    const pageModel = this.file.pages.find(function (p) {
      return p.number === pageNumber;
    });

    const id = this.addWatermarkComponent(addedWatermark, dragWatermark, pageModel);
    this._watermarksHolderService.addId(dragWatermark.guid, id);
  }

  dropWatermark($event: DragEvent) {
    $event.preventDefault();
    $event.stopPropagation();
    const position = Utils.getMousePosition($event);

    const currentPage = document.elementFromPoint(position.x, position.y);
    if (currentPage && $(currentPage).parent().parent() && $(currentPage).parent().parent().parent().hasClass("page")) {
      const documentPage = $(currentPage).parent().parent()[0];
      const left = (position.x - $(documentPage).offset().left)/(this.zoom/100);
      const top = (position.y - $(documentPage).offset().top)/(this.zoom/100);
      const currentPosition = new Position(left, top);
      const watermark = this._dragWatermarkService.watermark;
      if (watermark) {
        const id = $(currentPage).parent().attr('id');
        if (id) {
          const split = id.split('-');
          watermark.pageNumber = split.length === 2 ? parseInt(split[1], 10) : watermark.pageNumber;
        }
        watermark.position = currentPosition;
        this.selectWatermark(watermark);
        this._dragWatermarkService.watermark = null;
      }
    }
  }

  dragOver($event: DragEvent) {
    $event.preventDefault();
    $event.stopPropagation();
  }

  activeTab($event) {
    this.activeWatermarkTab = $event;
  }

  private getWatermarkTypeConfig(id: string) {
    switch (id) {
      case WatermarkType.TEXT.id:
        return this.textWatermarkConfig;
      case WatermarkType.IMAGE.id:
        return this.imageWatermarkConfig;
    }
  }

  isVisible(id: string) {
    const supported = this.file;
    return this.getWatermarkTypeConfig(id) && supported;
  }

  fileDropped($event) {
    this.fileWasDropped = $event;
  }

  private cleanWatermarks() {
    for (const componentRef of this.watermarkComponents.values()) {
      componentRef.destroy();
    }
    this.watermarkComponents = new Map<number, ComponentRef<any>>();
    this._watermarksHolderService.clear();
  }

  private clearData() {
    if (!this.file || !this.file.pages) {
      return;
    }
    for (const page of this.file.pages) {
      page.data = null;
    }
  }

  onPan($event)
  {
    this._zoomService.changeZoom(this._zoom);
  }

  private addWatermarkComponent(addedWatermark: AddedWatermark, watermark: DraggableWatermark, page: PageModel, copied: boolean = false) {
    const dynamicDirective = this._hostingComponentsService.find(page.number);
    if (dynamicDirective) {
      const viewContainerRef = dynamicDirective.viewContainerRef;
      const selectWatermark = this._addDynamicComponentService.addDynamicComponent(viewContainerRef, WatermarkComponent);
      const id = this.getNextId();
      while (addedWatermark.width >= page.width || addedWatermark.height >= page.height) {
        addedWatermark.width = addedWatermark.width / 2;
        addedWatermark.height = addedWatermark.height / 2;
      }
      (<WatermarkComponent>selectWatermark.instance).id = id;
      (<WatermarkComponent>selectWatermark.instance).copied = copied;
      (<WatermarkComponent>selectWatermark.instance).data = addedWatermark;
      (<WatermarkComponent>selectWatermark.instance).position = watermark.position;
      (<WatermarkComponent>selectWatermark.instance).type = watermark.type;
      (<WatermarkComponent>selectWatermark.instance).pageWidth = page.width;
      (<WatermarkComponent>selectWatermark.instance).pageHeight = page.height;
      this.watermarkComponents.set(id, selectWatermark);
      this._activeWatermarkService.changeActive(id);
      return id;
    }
    return null;
  }

  private getNextId() {
    let maxId = 0;
    for (const annId of this.watermarkComponents.keys()) {
      if (annId > maxId){
        maxId = annId;
      }
    }
    const id = maxId + 1;
    return id;
  }

  isPdf() {
    if (this.file) {
      if (FileUtil.find(this.file.guid, false).format === "Portable Document Format") {
        return true;
      }
    }
    return false;
  }
}
