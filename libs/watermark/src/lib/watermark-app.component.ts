import {Component, ComponentRef, OnInit} from '@angular/core';
import {WatermarkConfig} from "./watermark-config";
import {WatermarkService} from "./watermark.service";
import {
  AddDynamicComponentService,
  CommonModals,
  FileCredentials,
  FileModel, Formatting,
  HostingDynamicComponentService,
  ModalService,
  NavigateService, PagePreloadService, PasswordService,
  TopTabActivatorService, UploadFilesService,
  Utils,
  WindowService
} from "@groupdocs.examples.angular/common-components";
import {
  WatermarkType,
  CommentWatermark,
  Position,
  RemoveWatermark,
  FileWatermarkDescription, PageWatermarkModel, WatermarkData, Dimension
} from "./watermark-models";
import {WatermarkComponent} from "./watermark/watermark.component";
import {ActiveWatermarkService} from "./active-watermark.service";
import * as jquery from 'jquery';
import {RemoveWatermarkService} from "./remove-watermark.service";

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
    WatermarkType.TEXT
  ];
  isDesktop: boolean;
  watermarkTypeFirst = [
    WatermarkType.TEXT
  ];
  countPages = 0;

  private activeWatermarkTab: string;
  private fileWasDropped = false;
  public watermarks = new Map<number, ComponentRef<any>>();
  private creatingWatermarkId: number;
  private activeWatermarkId: number;

  constructor(private _watermarkService: WatermarkService,
              private _modalService: ModalService,
              private _navigateService: NavigateService,
              private _tabActivatorService: TopTabActivatorService,
              private _hostingComponentsService: HostingDynamicComponentService,
              private _addDynamicComponentService: AddDynamicComponentService,
              private _activeWatermarkService: ActiveWatermarkService,
              private _removeWatermarkService: RemoveWatermarkService,
              uploadFilesService: UploadFilesService,
              pagePreloadService: PagePreloadService,
              passwordService: PasswordService,
              private _windowService: WindowService) {

    this._activeWatermarkService.activeChange.subscribe((id: number) => {
      if (this.activeWatermarkId !== id) {
        this.activeWatermarkId = id;
      }
    });

    this._removeWatermarkService.removeWatermark.subscribe((removeWatermark: RemoveWatermark) => {
      const componentRef = this.watermarks.get(removeWatermark.id);
      if (componentRef) {
        componentRef.destroy();
      }
      this.watermarks.delete(removeWatermark.id);
    });

    uploadFilesService.uploadsChange.subscribe((uploads) => {
      if (uploads) {
        let i: number;
        for (i = 0; i < uploads.length; i++) {
          this._watermarkService.upload(uploads.item(i), '', this.rewriteConfig).subscribe((obj: FileCredentials) => {
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

  ngOnInit() {
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
          const preloadPageCount = this.preloadPageCountConfig;
          const countPages = file.pages ? file.pages.length : 0;
          if (preloadPageCount > 0) {
            this.preloadPages(1, preloadPageCount > countPages ? countPages : preloadPageCount);
          } else {
            setTimeout(() => {
              for (const page of this.file.pages) {
                this.importWatermarks(page.watermarks ? page.watermarks : []);
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

  preloadPages(start: number, end: number) {
    for (let i = start; i <= end; i++) {
      this._watermarkService.loadPage(this.credentials, i).subscribe((page: PageWatermarkModel) => {
        this.file.pages[i - 1] = page;
        this.importWatermarks(page.watermarks ? page.watermarks : []);
      });
    }
  }

  private importWatermarks(watermarks: WatermarkData[]) {
    for (const watermark of watermarks) {
      const position = new Position(watermark.left, watermark.top);
      const id = this.addWatermarkComponent(watermark.pageNumber, position, watermark);
      this._activeWatermarkService.changeActive(id);
    }
  }

  upload($event: string) {
    this._watermarkService.upload(null, $event, this.rewriteConfig).subscribe(() => {
      this.selectDir('');
    });
  }

  downloadFile() {
    if (this.formatDisabled)
      return;
    window.location.assign(this._watermarkService.getDownloadUrl(this.credentials));
  }

  addWatermark() {
    const watermarksData = this.prepareWatermarksData();

    this._watermarkService.addWatermark(this.credentials, watermarksData, false).subscribe((ret: any) => {
      this._modalService.open(CommonModals.OperationSuccess);
      this.selectFile(ret.guid, null, CommonModals.OperationSuccess);
    });
  }

  public prepareWatermarksData(){
    const watermarksData = [];
    for (const watermark of this.watermarks.values()) {
      const watermarkData = (<WatermarkComponent>watermark.instance).getWatermarkData();
      watermarksData.push(watermarkData);
    }
    return watermarksData;
  }

  activeTab($event) {
    this.activeWatermarkTab = $event;
  }

  private getWatermarkTypeConfig(id: string) {
    switch (id) {
      case WatermarkType.TEXT.id:
        return this.textWatermarkConfig;
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
    for (const componentRef of this.watermarks.values()) {
      componentRef.destroy();
    }
    this.watermarks = new Map<number, ComponentRef<any>>();
  }

  private clearData() {
    if (!this.file || !this.file.pages) {
      return;
    }
    for (const page of this.file.pages) {
      page.data = null;
    }
  }

  createWatermark($event: MouseEvent) {
    $event.preventDefault();

    if (this.activeWatermarkTab) {
      const position = Utils.getMousePosition($event);

      const elements = document.elementsFromPoint(position.x, position.y);
      const currentPage = elements.find(x => x.id && x.id.startsWith("page-"));
      if (currentPage) {
        const documentPage = $(currentPage).parent().parent()[0];
        const currentPosition = this.getCurrentPosition(position, $(documentPage));
        const pageId = currentPage.id;
        let pageNumber = 1;
        if (pageId) {
          const split = pageId.split('-');
          pageNumber = split.length === 2 ? parseInt(split[1], 10) : pageNumber;
        }
        const id = this.addWatermarkComponent(pageNumber, currentPosition, null);
        this._activeWatermarkService.changeActive(id);
        this.creatingWatermarkId = id;
        this._tabActivatorService.changeActiveTab(null);
      }
    }
  }

  private addWatermarkComponent(pageNumber: number, currentPosition: Position, data: WatermarkData) {
    const dynamicDirective = this._hostingComponentsService.find(pageNumber);
    if (dynamicDirective) {
      const viewContainerRef = dynamicDirective.viewContainerRef;
      const watermarkComponent = this._addDynamicComponentService.addDynamicComponent(viewContainerRef, WatermarkComponent);
      const id = this.getNextId();
      (<WatermarkComponent>watermarkComponent.instance).id = id;
      (<WatermarkComponent>watermarkComponent.instance).position = currentPosition;
      (<WatermarkComponent>watermarkComponent.instance).pageNumber = pageNumber;
      if (data) {
        const dimension = new Dimension(data.width, data.height);
        const type = WatermarkType.getWatermarkType(data.type);
        const formatting = Formatting.default();
        formatting.fontSize = data.fontSize;
        if (data.fontColor) {
          formatting.color = "#" + data.fontColor.toString(16);
        }
        formatting.font = data.font;
        (<WatermarkComponent>watermarkComponent.instance).type = type ? type.id : data.type;
        (<WatermarkComponent>watermarkComponent.instance).dimension = dimension;
        (<WatermarkComponent>watermarkComponent.instance).textValue = data.text;
        if (formatting) {
          (<WatermarkComponent>watermarkComponent.instance).saveFormatting(formatting);
        }
      } else {
        (<WatermarkComponent>watermarkComponent.instance).type = this.activeWatermarkTab;
      }
      const pageModel = this.file.pages.find(function (p) {
        return p.number === pageNumber;
      });
      (<WatermarkComponent>watermarkComponent.instance).pageWidth = pageModel.width;
      (<WatermarkComponent>watermarkComponent.instance).pageHeight = pageModel.height;
      this.watermarks.set(id, watermarkComponent);
      return id;
    }
    return null;
  }

  resizingCreatingWatermark($event: MouseEvent) {
    $event.preventDefault();

    if (this.creatingWatermarkId) {
      const position = Utils.getMousePosition($event);
      const watermarkComponent = this.watermarks.get(this.creatingWatermarkId);
      const type = (<WatermarkComponent>watermarkComponent.instance).type;
      const pageNumber = (<WatermarkComponent>watermarkComponent.instance).pageNumber;
      const currentPosition = this.getCurrentPosition(position, $("#page-" + pageNumber));
      // if (type === WatermarkType.POLYLINE.id || type === WatermarkType.DISTANCE.id || type === WatermarkType.ARROW.id) {
      //   (<WatermarkComponent>watermarkComponent.instance).draw(currentPosition);
      // } else if (type !== WatermarkType.POINT.id) {
        (<WatermarkComponent>watermarkComponent.instance).calcDimensions(currentPosition);
      //}
    }
  }

  private getCurrentPosition(position, page) {
    const left = position.x - page.offset().left;
    const top = position.y - page.offset().top;
    return new Position(left, top);
  }

  finishCreatingWatermark($event: MouseEvent) {
    if (this.creatingWatermarkId) {
      this._activeWatermarkService.changeActive(this.creatingWatermarkId);
      this.creatingWatermarkId = null;
    }
  }

  private getNextId() {
    let maxId = 0;
    for (const annId of this.watermarks.keys()) {
      if (annId > maxId){
        maxId = annId;
      }
    }
    const id = maxId + 1;
    return id;
  }
}
