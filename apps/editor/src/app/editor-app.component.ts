import {AfterViewInit, Component} from '@angular/core';
import {EditorService} from "./editor.service";
import {
  FileDescription,
  FileModel,
  ModalService,
  UploadFilesService,
  RenderPrintService,
  PasswordService,
  FileCredentials, CommonModals, NavigateService, PageModel, PagePreloadService
} from "@groupdocs-total-angular/common-components";
import {EditorConfig} from "./editor-config";
import {EditorConfigService} from "./editor-config.service";
import {WindowService} from "@groupdocs-total-angular/common-components";
import {FontsService} from "./fonts.service";

@Component({
  selector: 'gd-editor-angular-root',
  templateUrl: './editor-app.component.html',
  styleUrls: ['./editor-app.component.less']
})
export class EditorAppComponent implements AfterViewInit {
  title = 'editor';
  files: FileModel[] = [];
  file: FileDescription;
  editorConfig: EditorConfig;
  formatDisabled = !this.file;
  credentials: FileCredentials;
  browseFilesModal = CommonModals.BrowseFiles;
  createDocumentModal = CommonModals.CreateDocument;
  isDesktop: boolean;

  _pageWidth: number;
  _pageHeight: number;
  startTool: number;
  endTool: number;
  fonts;
  _font: string = "Arial";
  countPages: number = 0;

  constructor(private _editorService: EditorService,
              private _modalService: ModalService,
              configService: EditorConfigService,
              private _navigateService: NavigateService,
              uploadFilesService: UploadFilesService,
              private _renderPrintService: RenderPrintService,
              passwordService: PasswordService,
              private _windowService: WindowService,
              private _fontService: FontsService,
              pagePreloadService: PagePreloadService) {

    configService.updatedConfig.subscribe((editorConfig) => {
      this.editorConfig = editorConfig;
    });

    this.isDesktop = _windowService.isDesktop();
    _windowService.onResize.subscribe((w) => {
      this.isDesktop = _windowService.isDesktop();
    });

    this.fonts = this.fontOptions();

    pagePreloadService.checkPreload.subscribe((page: number) => {
      if (this.editorConfig.preloadPageCount != 0) {
      }
    });
  }

  get rewriteConfig(): boolean {
    return this.editorConfig ? this.editorConfig.rewrite : true;
  }

  get downloadConfig(): boolean {
    return this.editorConfig ? this.editorConfig.download : true;
  }

  get uploadConfig(): boolean {
    return this.editorConfig ? this.editorConfig.upload : true;
  }

  get printConfig(): boolean {
    return this.editorConfig ? this.editorConfig.print : true;
  }

  get browseConfig(): boolean {
    return this.editorConfig ? this.editorConfig.browse : true;
  }

  get enableRightClickConfig(): boolean {
    return this.editorConfig ? this.editorConfig.enableRightClick : true;
  }

  get pageSelectorConfig(): boolean {
    return this.editorConfig ? this.editorConfig.pageSelector : true;
  }

  get createNewFileConfig(): boolean {
    return this.editorConfig ? this.editorConfig.createNewFile : true;
  }

  openModal(id: string) {
    this._modalService.open(id);
  }

  closeModal(id: string) {
    this._modalService.close(id);
  }

  selectDir($event: string) {
    this._editorService.loadFiles($event).subscribe((files: FileModel[]) => this.files = files || []);
  }

  private ptToPx(pt: number) {
    //pt * 96 / 72 = px.
    return pt * 96 / 72;
  }

  onRightClick($event: MouseEvent) {
    return this.enableRightClickConfig;
  }

  isHidden(number: number) {
    return (number < this.startTool || number > this.endTool) ? 'none' : null;
  }

  fontOptions() {
    return FontsService.fontOptions();
  }

  set font(font: string) {
    this._font = font;
    this._fontService.changeFont(this._font);
  }

  get font() {
    return this._font;
  }

  selectFont($event: any) {
    this.font = $event;
  }

  createFile($fileName: string){
    this.file = new FileDescription();
    this.file.guid = $fileName;
    var page = new PageModel;
    page.width = 595;
    page.height = 842;
    page.data = '<!DOCTYPE HTML><html><head><meta http-equiv="content-type" content="text/html; charset=utf-8"></head><body><p>Enter your text here</p></body></html>';
    page.number = 1;
    page.editable = true;
    this.file.pages = [];
    this.file.pages.push(page);
    this._navigateService.countPages = 1;
    this._navigateService.currentPage = 1;
    this.countPages = 1;
    this._pageWidth = page.width = 595;
    this._pageHeight = page.height = 842;
    this._modalService.close(this.createDocumentModal);
  }

  ngAfterViewInit(): void {
  }

  selectFile($event: string, param2, browseFilesModal: string) {

  }

  upload($event: string) {

  }
}
