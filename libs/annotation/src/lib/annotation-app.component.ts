import {Component, ComponentRef, OnInit} from '@angular/core';
import {AnnotationConfig} from "./annotation-config";
import {AnnotationService} from "./annotation.service";
import {
  AddDynamicComponentService,
  CommonModals,
  FileCredentials,
  FileDescription,
  FileModel,
  HostingDynamicComponentService,
  ModalService,
  NavigateService,
  PageModel,
  TopTabActivatorService,
  Utils,
  WindowService
} from "@groupdocs.examples.angular/common-components";
import {AnnotationType, CommentAnnotation, Position, RemoveAnnotation, Comment} from "./annotation-models";
import {AnnotationComponent} from "./annotation/annotation.component";
import {ActiveAnnotationService} from "./active-annotation.service";
import * as jquery from 'jquery';
import {RemoveAnnotationService} from "./remove-annotation.service";
import {CommentAnnotationService} from "./comment-annotation.service";

const $ = jquery;

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
    AnnotationType.TEXT_STRIKEOUT,
    AnnotationType.TEXT_UNDERLINE,
    AnnotationType.TEXT_REPLACEMENT,
    AnnotationType.TEXT_REDACTION,
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
  commentOpenedId: number;
  comments = new Map<number, Comment[]>();

  private activeAnnotationTab: string;
  private fileWasDropped = false;
  private annotations = new Map<number, ComponentRef<any>>();
  private creatingAnnotationId: number;
  private activeAnnotationId: number;

  constructor(private _annotationService: AnnotationService,
              private _modalService: ModalService,
              private _navigateService: NavigateService,
              private _tabActivatorService: TopTabActivatorService,
              private _hostingComponentsService: HostingDynamicComponentService,
              private _addDynamicComponentService: AddDynamicComponentService,
              private _activeAnnotationService: ActiveAnnotationService,
              private _removeAnnotationService: RemoveAnnotationService,
              private _commentAnnotationService: CommentAnnotationService,
              private _windowService: WindowService) {

    this._activeAnnotationService.activeChange.subscribe((id: number) => {
      if (this.activeAnnotationId !== id) {
        this.commentOpenedId = null;
        this.activeAnnotationId = id;
      }
    });

    this._commentAnnotationService.commentAnnotation.subscribe((commentAnnotation: CommentAnnotation) => {
      this.commentOpenedId = commentAnnotation.id;
      if (!this.comments.get(this.commentOpenedId)) {
        this.comments.set(this.commentOpenedId, []);
      }
    });

    this._commentAnnotationService.addCommentObserve.subscribe((comment: Comment) => {
      this.comments.get(this.commentOpenedId).push(comment);
    });

    this._removeAnnotationService.removeAnnotation.subscribe((removeAnnotation: RemoveAnnotation) => {
      const componentRef = this.annotations.get(removeAnnotation.id);
      if (componentRef) {
        componentRef.destroy();
      }
      this.annotations.delete(removeAnnotation.id);
    });

    this.isDesktop = _windowService.isDesktop();
    _windowService.onResize.subscribe((w) => {
      this.isDesktop = _windowService.isDesktop();
    });
  }

  getComments() {
    return this.comments.get(this.commentOpenedId);
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

  createAnnotation($event: MouseEvent) {
    $event.preventDefault();
    $event.stopPropagation();

    if (this.activeAnnotationTab) {
      const position = Utils.getMousePosition($event);

      const currentPage = document.elementFromPoint(position.x, position.y);
      if (currentPage && $(currentPage).parent().parent() && $(currentPage).parent().parent().parent().hasClass("page")) {
        const documentPage = $(currentPage).parent().parent()[0];
        const currentPosition = this.getCurrentPosition(position, $(documentPage));
        const id = $(currentPage).parent().attr('id');
        let pageNumber = 1;
        if (id) {
          const split = id.split('-');
          pageNumber = split.length === 2 ? parseInt(split[1], 10) : pageNumber;
        }
        this.addAnnotationComponent(pageNumber, currentPosition);
      }
    }
  }

  private addAnnotationComponent(pageNumber: number, currentPosition: Position) {
    const dynamicDirective = this._hostingComponentsService.find(pageNumber);
    if (dynamicDirective) {
      const viewContainerRef = dynamicDirective.viewContainerRef;
      const annotationComponent = this._addDynamicComponentService.addDynamicComponent(viewContainerRef, AnnotationComponent);
      const id = this.annotations.size + 1;
      (<AnnotationComponent>annotationComponent.instance).id = id;
      (<AnnotationComponent>annotationComponent.instance).position = currentPosition;
      (<AnnotationComponent>annotationComponent.instance).type = this.activeAnnotationTab;
      (<AnnotationComponent>annotationComponent.instance).pageNumber = pageNumber;
      const pageModel = this.file.pages.find(function (p) {
        return p.number === pageNumber;
      });
      (<AnnotationComponent>annotationComponent.instance).pageWidth = pageModel.width;
      (<AnnotationComponent>annotationComponent.instance).pageHeight = pageModel.height;
      this.annotations.set(id, annotationComponent);
      this._activeAnnotationService.changeActive(id);
      this.creatingAnnotationId = id;
      this._tabActivatorService.changeActiveTab(null);
      return id;
    }
    return null;
  }

  resizingCreatingAnnotation($event: MouseEvent) {
    $event.preventDefault();
    $event.stopPropagation();

    if (this.creatingAnnotationId) {
      const position = Utils.getMousePosition($event);
      const annotationComponent = this.annotations.get(this.creatingAnnotationId);
      const type = (<AnnotationComponent>annotationComponent.instance).type;
      const pageNumber = (<AnnotationComponent>annotationComponent.instance).pageNumber;
      const currentPosition = this.getCurrentPosition(position, $("#page-" + pageNumber));
      if (type === AnnotationType.POLYLINE.id || type === AnnotationType.DISTANCE.id || type === AnnotationType.ARROW.id) {
        (<AnnotationComponent>annotationComponent.instance).draw(currentPosition);
      } else {
        (<AnnotationComponent>annotationComponent.instance).calcDimensions(currentPosition);
      }
    }
  }

  private getCurrentPosition(position, page) {
    const left = position.x - page.offset().left;
    const top = position.y - page.offset().top;
    return new Position(left, top);
  }

  finishCreatingAnnotation($event: MouseEvent) {
    this.creatingAnnotationId = null;
  }

  closeComments() {
    this.commentOpenedId = null;
  }
}
