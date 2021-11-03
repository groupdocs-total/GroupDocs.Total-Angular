import { Component, Input, OnInit } from '@angular/core';
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
  WindowService,
  ZoomService,
  ExceptionMessageService,
  LoadingMaskService
} from "@groupdocs.examples.angular/common-components";
import { DocumentDescription, DocumentDescriptionResponse, ParseResult, SourceFile, Template, TemplateField, TemplateFieldTypes, TemplateId } from './app-models';
import { ParserService } from './parser.service';
import { ParserConfig } from './parser-config';
import { TemplateService } from './template.service';
import { SourceFileService } from './source-file.service';
import { Subject } from 'rxjs';
import { PlaceholderService } from './placeholder.service';
import { stringify } from '@angular/compiler/src/util';
import { DocumentPageService } from './document-page.service';

@Component({
  selector: 'gd-app-parser',
  templateUrl: './parser-app.component.html',
  styleUrls: ['./parser-app.component.less']
})
export class ParserAppComponent implements OnInit {
  @Input() sourceFile: string;

  private readonly CREATE_FIELD_MODE = "createFieldMode";

  readonly browseFilesModal = CommonModals.BrowseFiles;

  private _document: DocumentDescription;
  template: Template;
  parserConfig: ParserConfig;
  filePassword: string;

  documentError: string = null;
  isApiAvaible = true;

  fileWasDropped = false;
  files: FileModel[] = [];
  parserService: ParserService;
  sourceFileService: SourceFileService;
  templateService: TemplateService;
  placeholderService: PlaceholderService;
  documentPageService: DocumentPageService;
  public credentials: FileCredentials;

  constructor(
    private _modalService: ModalService,
    parserService: ParserService,
    sourceFileService: SourceFileService,
    templateService: TemplateService,
    private _zoomService: ZoomService,
    private _navigateService: NavigateService,
    placeholderService: PlaceholderService,
    documentPageService: DocumentPageService,
    private _uploadFilesService: UploadFilesService,
    private _passwordService: PasswordService,
    windowService: WindowService) {

    this.parserService = parserService;
    this.sourceFileService = sourceFileService;
    this.templateService = templateService;
    this.placeholderService = placeholderService;
    this.documentPageService = documentPageService;

    windowService.onResize.subscribe((w) => {
      this.refreshZoom();
    });

    this.sourceFileService.sourceFileChanged.subscribe(sourceFile => this.loadDocumentDescription(sourceFile))

    this._uploadFilesService.uploadsChange.subscribe((uploads) => {
      if (uploads && uploads.length > 0) {
        this.parserService.upload(uploads.item(0), '', this.rewriteConfig).subscribe((obj: FileCredentials) => {
          this.fileWasDropped ? this.selectFile(obj.guid, '', '') : this.selectDir('');
        });
      }
    });

    this._passwordService.passChange.subscribe((pass: string) => {
      this.selectFile(this.sourceFileService.sourceFile.guid, pass, CommonModals.PasswordRequired);
    });
  }

  // Menu

  zoomIn() {
    const zoom = this._zoomService.zoom;

    if (zoom < 490) {
      this._zoomService.changeZoom(zoom + 10);
    }
  }

  zoomOut() {
    const zoom = this._zoomService.zoom;
    if (zoom > 30) {
      this._zoomService.changeZoom(zoom - 10);
    }
  }

  addFieldClick() {
    const template = this.templateService.currentTemplate;
    if (!template) {
      return;
    }

    const field = template.createField("Field");
    field.fieldType = TemplateFieldTypes.FIXED;
    field.pageNumber = this.documentPageService.activePage;
    template.addField(field);
  }

  addTableClick() {
    const template = this.templateService.currentTemplate;
    if (!template) {
      return;
    }

    const field = template.createField("Table");
    field.fieldType = TemplateFieldTypes.TABLE;
    field.pageNumber = this.documentPageService.activePage;
    template.addField(field);
  }

  // end of Menu

  isFileLoaded() {
    return !this.documentError && this.document;
  }

  openModal(id: string, fileShouldBeLoaded: boolean) {
    if (fileShouldBeLoaded && !this.isFileLoaded()) return;
    this._modalService.open(id);
  }

  selectDir($event: string) {
    this.parserService.loadFiles($event).subscribe((files: FileModel[]) => this.files = files || []);
  }

  upload($event: string) {
    this.parserService.upload(null, $event, this.rewriteConfig).subscribe(() => {
      this.selectDir('');
    });
  }

  fileDropped($event) {
    this.fileWasDropped = $event;
  }

  selectFile($event: string, password: string, modalId: string) {
    this.credentials = new FileCredentials($event, password);
    this.sourceFileService.sourceFile = new SourceFile($event, password);

    if (modalId) {
      this._modalService.close(modalId);
    }
  }

  get rewriteConfig(): boolean {
    return this.parserConfig ? this.parserConfig.rewrite : true;
  }

  get uploadConfig(): boolean {
    return this.parserConfig ? this.parserConfig.upload : true;
  }

  get browseConfig(): boolean {
    return this.parserConfig ? this.parserConfig.browse : true;
  }

  get returnUrl(): string {
    return localStorage.getItem("returnUrl");
  }

  ngOnInit(): void {
  }

  reloadCurrentPage() {
    window.location.reload();
  }

  private loadDocumentDescription(sourceFile: SourceFile) {
    this.isApiAvaible = true;
    this.documentError = null;
    this._document = null;

    const operationState = this.placeholderService.startOperation("Loading document...");

    const observer = {
      next: (response: DocumentDescription) => {
        this.documentPageService.setActivePage(1);
        this._document = response;

        operationState.complete();

        this.templateService.createTemplate();
        this.refreshZoom();

        this._navigateService.countPages = this.document.pages ? this.document.pages.length : 0;
        this._navigateService.currentPage = 1;
      },
      error: (err: any) => {
        this.documentError = this.parserService.getErrorMessage(err);
        operationState.error(err);
      },
      complete: () => operationState.complete()
    };

    this.parserService.loadDocumentDescription(sourceFile).subscribe(observer);
  }

  get document() {
    return this._document;
  }

  private refreshZoom() {
    this._zoomService.changeZoom(this.getFitToWidth());
  }

  private getFitToWidth() {
    if (!this.document) {
      return 100;
    }

    const surfaceWidth = window.innerWidth;

    // Images and Excel-related files receiving dimensions in px from server
    const pageWidth = this.ptToPx(this.document.pages[0].width);
    const pageHeight = this.ptToPx(this.document.pages[0].height);
    const offsetWidth = pageWidth ? pageWidth : surfaceWidth;

    return (pageHeight > pageWidth && Math.round(offsetWidth / surfaceWidth) < 2)
      ? 200 - Math.round(offsetWidth * 100 / surfaceWidth)
      : Math.round(surfaceWidth * 100 / offsetWidth);
  }

  private ptToPx(pt: number) {
    //pt * 96 / 72 = px.
    return pt * 96 / 72;
  }
}