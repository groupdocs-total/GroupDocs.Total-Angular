import {AfterViewInit, Component, OnInit} from '@angular/core';
import {MetadataService, MetadataFileDescription} from "./metadata.service";
import {
  FileDescription,
  FileModel,
  FilePropertyModel,
  FilePropertyCategory,
  ModalService,
  ZoomService,
  UploadFilesService,
  NavigateService,
  PagePreloadService,
  PageModel,
  PasswordService,
  FileCredentials, CommonModals, LoadingMaskService
} from "@groupdocs.examples.angular/common-components";
import {MetadataConfig} from "./metadata-config";
import {MetadataConfigService} from "./metadata-config.service";
import {WindowService} from "@groupdocs.examples.angular/common-components";
import { AccordionService } from './accordion.service';

@Component({
  selector: 'gd-metadata',
  templateUrl: './metadata-app.component.html',
  styleUrls: ['./metadata-app.component.less']
})

export class MetadataAppComponent implements OnInit, AfterViewInit {
  title = 'metadata';
  files: FileModel[] = [];
  file: FileDescription;
  metadataConfig: MetadataConfig;
  countPages = 0;
  formatDisabled = !this.file;
  credentials: FileCredentials;
  browseFilesModal = CommonModals.BrowseFiles;
  isLoading: boolean;

  _zoom = 100;
  _pageWidth: number;
  _pageHeight: number;
  options;
  fileWasDropped = false;
  buildInProperties: FilePropertyModel[];
  defaultProperties: FilePropertyModel[];
  addedProperty: FilePropertyModel;
  removedProperty: FilePropertyModel;
  filePropertiesNames: string[];
  disabled = false;
  isDesktop: boolean;
  showSidePanel = true;
  disabledProperties: string[] = ["generator", "producer", "creator"];

  constructor(private _metadataService: MetadataService,
              private _modalService: ModalService,
              configService: MetadataConfigService,
              uploadFilesService: UploadFilesService,
              private _navigateService: NavigateService,
              private _zoomService: ZoomService,
              pagePreloadService: PagePreloadService,
              passwordService: PasswordService,
              private _loadingMaskService: LoadingMaskService,
              private _accrodionService: AccordionService,
              private _windowService: WindowService) {

    this.isDesktop = _windowService.isDesktop();
    _windowService.onResize.subscribe((w) => {
      this.isDesktop = _windowService.isDesktop();
      this.refreshZoom();
    });

    configService.updatedConfig.subscribe((metadataConfig) => {
      this.metadataConfig = metadataConfig;
    });

    uploadFilesService.uploadsChange.subscribe((uploads) => {
      if (uploads) {
        let i: number;
        for (i = 0; i < uploads.length; i++) {
          this._metadataService.upload(uploads.item(i), '', this.metadataConfig.rewrite).subscribe((obj: FileCredentials) => {
            this.fileWasDropped ? this.selectFile(obj.guid, '', '') : this.selectDir('');
          });
        }
      }
    });

    pagePreloadService.checkPreload.subscribe((page: number) => {
      if (this.metadataConfig.preloadPageCount !== 0) {
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

    _accrodionService.addedProperty.subscribe(addedProperty => {
      if (addedProperty) {
        this.addedProperty = addedProperty;
        const propObject = {
          original: addedProperty.original,
          name: "",
          value: "",
          category: 0,
          type: 1,
          selected: false,
          editing: false,
          disabled: false
        };
        if (this.buildInProperties) {
          this.buildInProperties.push(propObject);
        }
      }
    });

    _accrodionService.removedProperty.subscribe(removedProperty => {
      if (this.file) {
        const metadataFile = new MetadataFileDescription();
        metadataFile.guid = this.file.guid;
        metadataFile.properties = [removedProperty];
        this._metadataService.removeProperty(metadataFile).subscribe((loadFile: FileDescription) => {
          this.loadProperties();
          this._modalService.open(CommonModals.OperationSuccess);
        });
      }
    });
  }

  ngOnInit() {
    if (this.metadataConfig.defaultDocument !== ""){
      this.isLoading = true;
      this.selectFile(this.metadataConfig.defaultDocument, "", "");
    }
  }

  ngAfterViewInit() {
    this._loadingMaskService
    .onLoadingChanged
    .subscribe((loading: boolean) => this.isLoading = loading);

    this.refreshZoom();
  }

  get rewriteConfig(): boolean {
    return this.metadataConfig ? this.metadataConfig.rewrite : true;
  }

  get downloadConfig(): boolean {
    return this.metadataConfig ? this.metadataConfig.download : true;
  }

  get uploadConfig(): boolean {
    return this.metadataConfig ? this.metadataConfig.upload : true;
  }

  get browseConfig(): boolean {
    return this.metadataConfig ? this.metadataConfig.browse : true;
  }

  openModal(id: string) {
    this._modalService.open(id);
  }

  closeModal(id: string) {
    this._modalService.close(id);
  }

  selectDir($event: string) {
    this._metadataService.loadFiles($event).subscribe((files: FileModel[]) => this.files = files || []);
  }

  selectFile($event: string, password: string, modalId: string) {
    this.credentials = {guid: $event, password: password};
    this.file = null;
    this._metadataService.loadFile(this.credentials).subscribe((file: FileDescription) => {
        this.file = file;
        this.formatDisabled = !this.file;
        if (file) {
          if (file.pages && file.pages[0]) {
            this._pageHeight = file.pages[0].height;
            this._pageWidth = file.pages[0].width;
            this.options = this.zoomOptions();
            this.refreshZoom();
          }
          const preloadPageCount = this.metadataConfig.preloadPageCount;
          const countPages = file.pages ? file.pages.length : 0;
          if (preloadPageCount > 0) {
            this.preloadPages(1, preloadPageCount > countPages ? countPages : preloadPageCount);
          }
          this._navigateService.countPages = countPages;
          this._navigateService.currentPage = 1;
          this.countPages = countPages;

          this.loadProperties();
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
      this._metadataService.loadPage(this.credentials, i).subscribe((page: PageModel) => {
        this.file.pages[i - 1] = page;
      });
    }
  }

  upload($event: string) {
    this._metadataService.upload(null, $event, this.rewriteConfig).subscribe(() => {
      this.selectDir('');
    });
  }

  fileDropped($event){
    this.fileWasDropped = $event;
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

  private getFitToHeight() {
    const pageWidth = this.ptToPx(this._pageWidth);
    const pageHeight = this.ptToPx(this._pageHeight);
    const windowHeight = (pageHeight > pageWidth) ? window.innerHeight - 100 : window.innerHeight + 100;
    const offsetHeight = pageHeight ? pageHeight : windowHeight;

    return (pageHeight > pageWidth) ? Math.round(windowHeight * 100 / offsetHeight) : Math.round(offsetHeight * 100 / windowHeight);
  }

  zoomOptions() {
    const width = this.getFitToWidth();
    const height = this.getFitToHeight();
    return this._zoomService.zoomOptions(width, height);
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

  downloadFile() {
    if (this.formatDisabled)
      return;
    window.location.assign(this._metadataService.getDownloadUrl(this.credentials));
  }

  private clearData() {
    if (!this.file || !this.file.pages) {
      return;
    }
    for (const page of this.file.pages) {
      page.data = null;
    }
  }

  isDisabled() {
    return !this.file || this.disabled || (this.buildInProperties && this.buildInProperties.filter(p => p.original === false).length > 0);
  }

  save() {
    if (!this.file || !this.file.pages)
      return;
    const savingProperty = this.buildInProperties.filter(p => !p.original || p.editing);
    const savingFile = new MetadataFileDescription();
    savingFile.guid = this.file.guid;
    savingFile.properties = savingProperty;
    this._metadataService.saveProperty(savingFile).subscribe((loadFile: FileDescription) => {
      this.loadProperties();
      this.disabled = false;
      this._modalService.open(CommonModals.OperationSuccess);
    });
  }

  loadProperties() {
    this._metadataService.loadProperties(this.credentials).subscribe((fileProperties: FilePropertyModel[]) => {
      this.buildInProperties = fileProperties.filter(p => p.category === FilePropertyCategory.BuildIn);
      this.buildInProperties.forEach(p => 
        {
          if (this.disabledProperties.some(dp => dp === p.name.toLowerCase()))
          {
            p.disabled = true;
          }
        }
      );
      this.defaultProperties = fileProperties.filter(p => p.category === FilePropertyCategory.Default);

      this._metadataService.loadPropertiesNames(this.credentials).subscribe((filePropertiesNames: string[]) => {
        this.filePropertiesNames = filePropertiesNames;
      });
    });

    if (!this.showSidePanel) {
      this.showSidePanel = true;
    }
  }

  hideSidePanel($event: Event) {
    this.showSidePanel = !this.showSidePanel;
  }
}
