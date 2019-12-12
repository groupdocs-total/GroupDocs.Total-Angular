import {Component, OnInit} from '@angular/core';
import {AnnotationConfig} from "./annotation-config";
import {AnnotationService} from "./annotation.service";
import {
  CommonModals,
  FileCredentials,
  FileDescription,
  FileModel,
  ModalService, NavigateService, PageModel, WindowService
} from "@groupdocs.examples.angular/common-components";
import {AnnotationType} from "./annotation-models";

@Component({
  selector: 'gd-annotation-app',
  templateUrl: './annotation-app.component.html',
  styleUrls: ['./annotation-app.component.less']
})
export class AnnotationAppComponent implements OnInit {
  title = 'annotation';
  files: FileModel[] = [];
  file: FileDescription;
  isLoading: boolean;
  annotationConfig: AnnotationConfig;
  browseFilesModal = CommonModals.BrowseFiles;
  formatDisabled = !this.file;
  credentials: FileCredentials;
  annotationTypes = [
    AnnotationType.TEXT,
    AnnotationType.TEXT_UNDERLINE,
    AnnotationType.TEXT_REDACTION,
    AnnotationType.TEXT_REPLACEMENT,
    AnnotationType.TEXT_STRIKEOUT,
    AnnotationType.POLYLINE,
    AnnotationType.ARROW,
    AnnotationType.DISTANCE,
    AnnotationType.AREA,
    AnnotationType.TEXT_FIELD,
    AnnotationType.WATERMARK,
    AnnotationType.POINT,
  ];
  isDesktop: boolean;
  annotationTypeFirst = [
    AnnotationType.TEXT,
    AnnotationType.TEXT_UNDERLINE,
    AnnotationType.TEXT_REDACTION,
    AnnotationType.TEXT_REPLACEMENT,
    AnnotationType.TEXT_STRIKEOUT,
  ];
  annotationTypeSecond = [
    AnnotationType.POLYLINE,
    AnnotationType.ARROW,
    AnnotationType.DISTANCE,
    AnnotationType.AREA,
    AnnotationType.POINT
  ];
  annotationTypeThird = [
    AnnotationType.TEXT_FIELD,
    AnnotationType.WATERMARK,
  ];
  countPages = 0;

  private activeAnnotationTab: string;
  private fileWasDropped = false;

  constructor(private _annotationService: AnnotationService,
              private _modalService: ModalService,
              private _navigateService: NavigateService,
              private _windowService: WindowService) {

    this.isDesktop = _windowService.isDesktop();
    _windowService.onResize.subscribe((w) => {
      this.isDesktop = _windowService.isDesktop();
    });
  }

  get rewriteConfig(): boolean {
    return this.annotationConfig ? this.annotationConfig.rewrite : true;
  }

  get zoomConfig(): boolean {
    return this.annotationConfig ? this.annotationConfig.zoom : false;
  }

  get pageSelectorConfig(): boolean {
    return this.annotationConfig ? this.annotationConfig.pageSelector : true;
  }

  get preloadPageCountConfig(): number {
    return this.annotationConfig ? this.annotationConfig.preloadPageCount : 0;
  }

  get downloadConfig(): boolean {
    return this.annotationConfig ? this.annotationConfig.download : true;
  }

  get downloadOriginalConfig(): boolean {
    return this.annotationConfig ? this.annotationConfig.downloadOriginal : true;
  }

  get downloadAnnotatedConfig(): boolean {
    return this.annotationConfig ? this.annotationConfig.downloadAnnotated : true;
  }

  get uploadConfig(): boolean {
    return this.annotationConfig ? this.annotationConfig.upload : true;
  }

  private defaultDocumentConfig() {
    return this.annotationConfig ? this.annotationConfig.defaultDocument : "";
  }

  get printConfig(): boolean {
    return this.annotationConfig ? this.annotationConfig.print : true;
  }

  get browseConfig(): boolean {
    return this.annotationConfig ? this.annotationConfig.browse : true;
  }

  get htmlModeConfig(): boolean {
    return false;
  }

  get enableRightClickConfig(): boolean {
    return this.annotationConfig ? this.annotationConfig.enableRightClick : true;
  }

  get textAnnotationConfig(): boolean {
    return this.annotationConfig ? this.annotationConfig.textAnnotation : true;
  }

  get areaAnnotationConfig(): boolean {
    return this.annotationConfig ? this.annotationConfig.areaAnnotation : true;
  }

  get pointAnnotationConfig(): boolean {
    return this.annotationConfig ? this.annotationConfig.pointAnnotation : true;
  }

  get textStrikeoutAnnotationConfig(): boolean {
    return this.annotationConfig ? this.annotationConfig.textStrikeoutAnnotation : true;
  }

  get polylineAnnotationConfig(): boolean {
    return this.annotationConfig ? this.annotationConfig.polylineAnnotation : true;
  }

  get textFieldAnnotationConfig(): boolean {
    return this.annotationConfig ? this.annotationConfig.textFieldAnnotation : true;
  }

  get watermarkAnnotationConfig(): boolean {
    return this.annotationConfig ? this.annotationConfig.watermarkAnnotation : true;
  }

  get textReplacementAnnotationConfig(): boolean {
    return this.annotationConfig ? this.annotationConfig.textReplacementAnnotation : true;
  }

  get arrowAnnotationConfig(): boolean {
    return this.annotationConfig ? this.annotationConfig.arrowAnnotation : true;
  }

  get textRedactionAnnotationConfig(): boolean {
    return this.annotationConfig ? this.annotationConfig.textRedactionAnnotation : true;
  }

  get textUnderlineAnnotationConfig(): boolean {
    return this.annotationConfig ? this.annotationConfig.textUnderlineAnnotation : true;
  }

  get distanceAnnotationConfig(): boolean {
    return this.annotationConfig ? this.annotationConfig.distanceAnnotation : true;
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
    this._annotationService.loadFiles($event).subscribe((files: FileModel[]) => this.files = files || []);
  }

  selectFile($event: string, password: string, modalId: string) {
    this.credentials = {guid: $event, password: password};
    this.file = null;
    this._annotationService.loadFile(this.credentials).subscribe((file: FileDescription) => {
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
          this.cleanAnnotations();
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
      this._annotationService.loadPage(this.credentials, i).subscribe((page: PageModel) => {
        this.file.pages[i - 1] = page;
      });
    }
  }

  upload($event: string) {
    this._annotationService.upload(null, $event, this.rewriteConfig).subscribe(() => {
      this.selectDir('');
    });
  }

  onRightClick($event: MouseEvent) {
    return this.enableRightClickConfig;
  }

  downloadFile() {
    if (this.formatDisabled)
      return;
    window.location.assign(this._annotationService.getDownloadUrl(this.credentials));
  }

  annotate() {

  }

  isVisible(id: string) {
    return true;
  }

  activeTab($event) {
    this.activeAnnotationTab = $event;
  }

  codesConfigFirst() {
    return this.checkConfig(this.annotationTypeFirst);
  }

  codesConfigSecond() {
    return this.checkConfig(this.annotationTypeSecond);
  }

  private checkConfig(annotationList) {
    for (const annotationType of annotationList) {
      if (this.getAnnotationTypeConfig(annotationType.id)) {
        return true;
      }
    }
    return false;
  }

  codesConfigThird() {
    return this.getAnnotationTypeConfig(AnnotationType.TEXT_FIELD.id) && this.getAnnotationTypeConfig(AnnotationType.WATERMARK.id);
  }

  private getAnnotationTypeConfig(id: string) {
    switch (id) {
      case AnnotationType.TEXT.id:
        return this.textAnnotationConfig;
      case AnnotationType.AREA.id:
        return this.areaAnnotationConfig;
      case AnnotationType.POINT.id:
        return this.pointAnnotationConfig;
      case AnnotationType.TEXT_STRIKEOUT.id:
        return this.textStrikeoutAnnotationConfig;
      case AnnotationType.POLYLINE.id:
        return this.polylineAnnotationConfig;
      case AnnotationType.TEXT_FIELD.id:
        return this.textFieldAnnotationConfig;
      case AnnotationType.WATERMARK.id:
        return this.watermarkAnnotationConfig;
      case AnnotationType.TEXT_REPLACEMENT.id:
        return this.textReplacementAnnotationConfig;
      case AnnotationType.ARROW.id:
        return this.arrowAnnotationConfig;
      case AnnotationType.TEXT_REDACTION.id:
        return this.textRedactionAnnotationConfig;
      case AnnotationType.TEXT_UNDERLINE.id:
        return this.textUnderlineAnnotationConfig;
      case AnnotationType.DISTANCE.id:
        return this.distanceAnnotationConfig;
    }
  }

  fileDropped($event) {
    this.fileWasDropped = $event;
  }

  private cleanAnnotations() {

  }

  private clearData() {
    if (!this.file || !this.file.pages) {
      return;
    }
    for (const page of this.file.pages) {
      page.data = null;
    }
  }

}
