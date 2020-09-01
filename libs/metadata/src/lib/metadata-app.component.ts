import {AfterViewInit, Component, OnInit} from '@angular/core';
import {MetadataService, MetadataFileDescription} from "./metadata.service";
import {
  FileDescription,
  FileModel,
  ModalService,
  ZoomService,
  UploadFilesService,
  NavigateService,
  PagePreloadService,
  PageModel,
  PasswordService,
  FileCredentials, CommonModals, LoadingMaskService
} from "@groupdocs.examples.angular/common-components";
import { MetadataConfig } from "./metadata-config";
import { MetadataConfigService } from "./metadata-config.service";
import { WindowService } from "@groupdocs.examples.angular/common-components";
import { RemovePropertyModel, PackageModel, PackageNames } from './metadata-models';

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

  previewZoom = 100;
  pageWidth: number;
  pageHeight: number;
  options;
  fileWasDropped = false;
  public packages: PackageModel[];
  disabled = false;
  isDesktop: boolean;
  showSidePanel = true;

  constructor(private metadataService: MetadataService,
              private modalService: ModalService,
              private configService: MetadataConfigService,
              private uploadFilesService: UploadFilesService,
              private navigateService: NavigateService,
              private zoomService: ZoomService,
              private pagePreloadService: PagePreloadService,
              private passwordService: PasswordService,
              private loadingMaskService: LoadingMaskService,
              private windowService: WindowService) {

  }

  ngOnInit() {
    this.isDesktop = this.windowService.isDesktop();
    this.windowService.onResize.subscribe((w) => {
      this.isDesktop = this.windowService.isDesktop();
      this.refreshZoom();
    });

    this.configService.updatedConfig.subscribe((metadataConfig) => {
      this.metadataConfig = metadataConfig;
    });

    this.uploadFilesService.uploadsChange.subscribe((uploads) => {
      if (uploads) {
        let i: number;
        for (i = 0; i < uploads.length; i++) {
          this.metadataService.upload(uploads.item(i), '', this.metadataConfig.rewrite).subscribe((obj: FileCredentials) => {
            this.fileWasDropped ? this.selectFile(obj.guid, '', '') : this.selectDir('');
          });
        }
      }
    });

    this.pagePreloadService.checkPreload.subscribe((page: number) => {
      if (this.metadataConfig.preloadPageCount !== 0) {
        for (let i = page; i < page + 2; i++) {
          if (i > 0 && i <= this.countPages && !this.file.pages[i - 1].data) {
            this.preloadPages(i, i);
          }
        }
      }
    });

    this.passwordService.passChange.subscribe((pass: string) => {
      this.selectFile(this.credentials.guid, pass, CommonModals.PasswordRequired);
    });

    if (this.metadataConfig.defaultDocument !== ""){
      this.isLoading = true;
      this.selectFile(this.metadataConfig.defaultDocument, "", "");
    }
  }

  ngAfterViewInit() {
    this.loadingMaskService
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
    this.modalService.open(id);
  }

  closeModal(id: string) {
    this.modalService.close(id);
  }

  selectDir($event: string) {
    this.metadataService.loadFiles($event).subscribe((files: FileModel[]) => this.files = files || []);
  }

  selectFile($event: string, password: string, modalId: string) {
    this.credentials = {guid: $event, password: password};
    this.file = null;
    this.metadataService.loadFile(this.credentials).subscribe((file: FileDescription) => {
        this.file = file;
        this.formatDisabled = !this.file;
        if (file) {
          if (file.pages && file.pages[0]) {
            this.pageHeight = file.pages[0].height;
            this.pageWidth = file.pages[0].width;
            this.options = this.zoomOptions();
            this.refreshZoom();
          }
          const preloadPageCount = this.metadataConfig.preloadPageCount;
          const countPages = file.pages ? file.pages.length : 0;
          if (preloadPageCount > 0) {
            this.preloadPages(1, preloadPageCount > countPages ? countPages : preloadPageCount);
          }
          this.navigateService.countPages = countPages;
          this.navigateService.currentPage = 1;
          this.countPages = countPages;

          this.loadProperties();
        }
      }
    );
    if (modalId) {
      this.modalService.close(modalId);
    }
    this.clearData();
  }

  preloadPages(start: number, end: number) {
    for (let i = start; i <= end; i++) {
      this.metadataService.loadPage(this.credentials, i).subscribe((page: PageModel) => {
        this.file.pages[i - 1] = page;
      });
    }
  }

  upload($event: string) {
    this.metadataService.upload(null, $event, this.rewriteConfig).subscribe(() => {
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
    const pageWidth = this.ptToPx(this.pageWidth);
    const pageHeight = this.ptToPx(this.pageHeight);
    const offsetWidth = pageWidth ? pageWidth : window.innerWidth;

    return (pageHeight > pageWidth && Math.round(offsetWidth / window.innerWidth) < 2) ? 200 - Math.round(offsetWidth * 100 / window.innerWidth) : Math.round(window.innerWidth * 100 / offsetWidth);
  }

  private getFitToHeight() {
    const pageWidth = this.ptToPx(this.pageWidth);
    const pageHeight = this.ptToPx(this.pageHeight);
    const windowHeight = (pageHeight > pageWidth) ? window.innerHeight - 100 : window.innerHeight + 100;
    const offsetHeight = pageHeight ? pageHeight : windowHeight;

    return (pageHeight > pageWidth) ? Math.round(windowHeight * 100 / offsetHeight) : Math.round(offsetHeight * 100 / windowHeight);
  }

  zoomOptions() {
    const width = this.getFitToWidth();
    const height = this.getFitToHeight();
    return this.zoomService.zoomOptions(width, height);
  }

  set zoom(zoom) {
    this.previewZoom = zoom;
    this.zoomService.changeZoom(this.previewZoom);
  }

  get zoom() {
    return this.previewZoom;
  }

  private refreshZoom() {
    this.zoom = this.windowService.isDesktop() ? 100 : this.getFitToWidth();
  }

  downloadFile() {
    if (this.formatDisabled)
      return;
    window.location.assign(this.metadataService.getDownloadUrl(this.credentials));
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
    return !this.file || this.disabled;
  }

  save() {
    if (!this.file || !this.file.pages) return;
    const savingFile = new MetadataFileDescription();
    savingFile.guid = this.file.guid;
    savingFile.password = this.credentials.password;
    savingFile.packages = this.packages
      .map(updatedPackage => { 
        return { id: updatedPackage.id, properties: updatedPackage.properties.filter(p => p.added || p.edited)}; 
      })
      .filter(updatedPackage => updatedPackage.properties.length > 0);

    if (savingFile.packages.length > 0)
    {
      this.metadataService.saveProperty(savingFile).subscribe((loadFile: FileDescription) => {
        this.loadProperties();
        this.disabled = false;
        this.modalService.open(CommonModals.OperationSuccess);
      });
    }
  }

  loadProperties() {
    this.metadataService.loadProperties(this.credentials).subscribe((packages: PackageModel[]) => {
      this.packages = packages;
    });

    if (!this.showSidePanel) {
      this.showSidePanel = true;
    }
  }

  hideSidePanel($event: Event) {
    this.showSidePanel = !this.showSidePanel;
  }

  removeProperty(propertyInfo: RemovePropertyModel) {
    if (this.file) {
      const metadataFile = new MetadataFileDescription();
      metadataFile.guid = this.file.guid;
      metadataFile.password = this.credentials.password;
      metadataFile.packages = [{id: propertyInfo.packageId, properties: [propertyInfo.property] }];
      this.metadataService.removeProperty(metadataFile).subscribe(() => {
        this.loadProperties();
        this.modalService.open(CommonModals.OperationSuccess);
      });
    }
  }

  getPackageName(packageInfo: PackageModel) {
    if (packageInfo.type in PackageNames) {
      return PackageNames[packageInfo.type];
    }
    return packageInfo.name;
  }
}
