import {AfterViewInit, Component} from '@angular/core';
import {EditorService} from "./editor.service";
import {
  FileDescription,
  FileModel,
  ModalService,
  UploadFilesService,
  PasswordService,
  FileCredentials,
  CommonModals,
  PageModel,
  FormattingService,
  Formatting,
  BackFormattingService,
  OnCloseService
} from "@groupdocs-total-angular/common-components";
import {EditorConfig} from "./editor-config";
import {EditorConfigService} from "./editor-config.service";
import {WindowService} from "@groupdocs-total-angular/common-components";
import {FontsService} from "./fonts.service";
import * as $ from 'jquery';

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

  fonts;
  _font: string = "Arial";
  pageCount: number = 0;
  formatting: Formatting = Formatting.DEFAULT;
  fontSizeOptions = FormattingService.getFontSizeOptions();
  bgColorPickerShow: boolean = false;
  colorPickerShow: boolean = false;
  active: boolean = false;

  constructor(private _editorService: EditorService,
              private _modalService: ModalService,
              configService: EditorConfigService,
              uploadFilesService: UploadFilesService,
              passwordService: PasswordService,
              private _windowService: WindowService,
              private _fontService: FontsService,
              private _formattingService: FormattingService,
              private _backFormattingService: BackFormattingService,
              private _onCloseService: OnCloseService) {

    configService.updatedConfig.subscribe((editorConfig) => {
      this.editorConfig = editorConfig;
    });

    uploadFilesService.uploadsChange.subscribe((uploads) => {
      if (uploads) {
        var i: number;
        for (i = 0; i < uploads.length; i++) {
          this._editorService.upload(uploads.item(i), '', this.editorConfig.rewrite).subscribe(() => {
            this.selectDir('');
          });
        }
      }
    });

    this.isDesktop = _windowService.isDesktop();
    _windowService.onResize.subscribe((w) => {
      this.isDesktop = _windowService.isDesktop();
    });

    this.fonts = this.fontOptions();

    this._backFormattingService.formatBoldChange.subscribe((bold: boolean) => {
      this.formatting.bold = bold;
    });
    this._backFormattingService.formatItalicChange.subscribe((italic: boolean) => {
      this.formatting.italic = italic;
    });
    this._backFormattingService.formatUnderlineChange.subscribe((underline: boolean) => {
      this.formatting.underline = underline;
    });
    this._backFormattingService.formatColorChange.subscribe((color: string) => {
      this.formatting.color = color;
    });
    this._backFormattingService.formatBgColorChange.subscribe((bgcolor: string) => {
      this.formatting.bgColor = bgcolor;
    });
    this._backFormattingService.formatFontSizeChange.subscribe((fontSize: number) => {
      this.formatting.fontSize = fontSize;
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

  createFile() {
    this.file = new FileDescription();
    var page = new PageModel;
    page.width = 595;
    page.height = 842;
    page.data = '<!DOCTYPE HTML><html><head><meta http-equiv="content-type" content="text/html; charset=utf-8"></head><body></body></html>';
    page.number = 1;
    page.editable = true;
    this.file.pages = [];
    this.file.pages.push(page);
    this.pageCount = 1;
    this.formatDisabled = false;
  }

  ngAfterViewInit(): void {
  }

  selectFile($event: string, password: string, modalId: string) {
    this.credentials = {guid: $event, password: password};
    this._editorService.loadFile(this.credentials).subscribe((file: FileDescription) => {
        this.file = file;
        if (this.file && this.file.pages[0]) {
          this.file.pages[0].editable = true;
          this.pageCount = this.file.pages.length;
        }
        this.formatDisabled = !this.file;
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
    this._editorService.upload(null, $event, this.rewriteConfig).subscribe(() => {
      this.selectDir('');
    });
  }

  selectFontSize($event: number) {
    $(".gd-wrapper").off("keyup");
    this._formattingService.changeFormatFontSize($event);
    $(".gd-wrapper").on("keyup", ()=> {
      var fontElements = document.getElementsByTagName("font");
      for (var i = 0, len = fontElements.length; i < len; ++i) {
        if (fontElements[i].size == "7") {
          fontElements[i].removeAttribute("size");
          fontElements[i].style.fontSize = $event + "px";
        }
      }
    });
  }

  toggleColorPicker(bg: boolean) {
    if (this.formatDisabled) {
      return;
    }
    if (bg) {
      this.bgColorPickerShow = !this.bgColorPickerShow;
      this.colorPickerShow = false;
    } else {
      this.colorPickerShow = !this.colorPickerShow;
      this.bgColorPickerShow = false;
    }
  }

  selectColor($event: string) {
    if (this.bgColorPickerShow) {
      this.bgColorPickerShow = false;
      this._formattingService.changeFormatBgColor($event);
    } else {
      this.colorPickerShow = false;
      this._formattingService.changeFormatColor($event);
    }
  }

  toggleBold(event) {
    event.preventDefault();
    event.stopPropagation();
    this._formattingService.changeFormatBold(!this.formatting.bold);
  }

  toggleUndo() {
    event.preventDefault();
    event.stopPropagation();
    this._formattingService.Undo();
  }

  toggleRedo() {
    event.preventDefault();
    event.stopPropagation();
    this._formattingService.Redo();
  }

  toggleItalic(event) {
    event.preventDefault();
    event.stopPropagation();
    this._formattingService.changeFormatItalic(!this.formatting.italic);
  }

  toggleUnderline(event) {
    event.preventDefault();
    event.stopPropagation();
    this._formattingService.changeFormatUnderline(!this.formatting.underline);
  }

  hideAll($event) {
    if (($event.target.parentElement && $event.target.parentElement.attributes['name'] &&
      $event.target.parentElement.attributes['name'].value == 'button') ||
      ($event.target.parentElement.parentElement &&
        $event.target.parentElement.parentElement.attributes['name'] &&
      $event.target.parentElement.parentElement.attributes['name'].value == 'button')) {

      this._onCloseService.close(true);
      return;
    }
    this.colorPickerShow = false;
    this.bgColorPickerShow = false;
    this._onCloseService.close(true);
  }

  checkState(name: string, $event: string) {
    switch (name){
      case "bold":
        this.formatting.bold = !this.formatting.bold;
        break;
      case"bgColor":
        this.formatting.bgColor = $event;
        break;
      case"color":
        this.formatting.color = $event;
        break;
      case "italic":
        this.formatting.italic = !this.formatting.italic;
        break;
      case "underline":
        this.formatting.underline = !this.formatting.underline;
        break;
    }
  }
}
