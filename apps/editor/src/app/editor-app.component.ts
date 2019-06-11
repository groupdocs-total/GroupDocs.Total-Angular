import {AfterViewInit, Component} from '@angular/core';
import {EditorService} from "./editor.service";
import {
  FileDescription,
  FileModel,
  ModalService,
  UploadFilesService,
  PasswordService,
  FileCredentials, CommonModals, PageModel} from "@groupdocs-total-angular/common-components";
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
  isDesktop: boolean;

  _pageWidth: number;
  _pageHeight: number;
  fonts;
  _font: string = "Arial";
  pageCount: number;

  constructor(private _editorService: EditorService,
              private _modalService: ModalService,
              configService: EditorConfigService,
              uploadFilesService: UploadFilesService,
              passwordService: PasswordService,
              private _windowService: WindowService,
              private _fontService: FontsService) {

    configService.updatedConfig.subscribe((editorConfig) => {
      this.editorConfig = editorConfig;
    });

    this.isDesktop = _windowService.isDesktop();
    _windowService.onResize.subscribe((w) => {
      this.isDesktop = _windowService.isDesktop();
    });

    this.fonts = this.fontOptions();
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

  createFile(){
    this.file = new FileDescription();
    var page = new PageModel;
    page.width = 595;
    page.height = 842;
    page.data = '<!DOCTYPE HTML><html><head><meta http-equiv="content-type" content="text/html; charset=utf-8"></head><body></body></html>';
    page.number = 1;
    page.editable = true;
    this.file.pages = [];
    this.file.pages.push(page);
    this.countPages = 1;
    this._pageWidth = page.width = 595;
    this._pageHeight = page.height = 842;
  }

  ngAfterViewInit(): void {
  }

  selectFile($event: string, password: string, modalId: string) {
    this.credentials = {guid: $event, password: password};
    this._editorService.loadFile(this.credentials).subscribe((file: FileDescription) => {
        this.file = file;
        this.formatDisabled = !this.file;
        if (file) {
          if (file.pages && file.pages[0]) {
            this._pageHeight = file.pages[0].height;
            this._pageWidth = file.pages[0].width;
          }
          this.pageCount = file.pages.length;
        }
      }
    );
    this.clearData();
    this._modalService.close(modalId);
  }

  private clearData() {
    if (!this.file || !this.file.pages) {
      return;
    }
    for (let page of this.file.pages) {
      page.data = null;
    }
  }

  upload($event: string) {

  }
}
