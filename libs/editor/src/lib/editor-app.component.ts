import {Component, AfterViewInit, OnInit, Renderer2} from '@angular/core';
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
  OnCloseService,
  SaveFile,
  SelectionService,
  EditHtmlService,
  RenderPrintService,
  WindowService,
  LoadingMaskService, Option, FileUtil
} from '@groupdocs.examples.angular/common-components';
import {EditorConfig} from "./editor-config";
import {EditorConfigService} from "./editor-config.service";
import * as jquery from 'jquery';
const $ = jquery;

@Component({
  selector: 'gd-editor-angular-root',
  templateUrl: './editor-app.component.html',
  styleUrls: ['./editor-app.component.less']
})
export class EditorAppComponent implements OnInit, AfterViewInit {
  title = 'editor';
  files: FileModel[] = [];
  file: FileDescription;
  editorConfig: EditorConfig;
  formatDisabled = !this.file;
  downloadDisabled = true;
  credentials: FileCredentials;
  browseFilesModal = CommonModals.BrowseFiles;
  isDesktop: boolean;
  formatting: Formatting = Formatting.default();
  fontSizeOptions = FormattingService.getFontSizeOptions();
  fontOptions = FormattingService.getFontOptions();
  bgColorPickerShow = false;
  colorPickerShow = false;
  active = false;
  public textBackup: string;
  pagesData = new Map<number, string>();
  private isIE = false;
  isLoading: boolean;
  fileWasDropped: false;
  selectFontShow = false;
  selectFontSizeShow = false;
  newFile = false;
  selectedPageNumber: number;

  constructor(private _editorService: EditorService,
              private _modalService: ModalService,
              configService: EditorConfigService,
              uploadFilesService: UploadFilesService,
              passwordService: PasswordService,
              private _windowService: WindowService,
              private _formattingService: FormattingService,
              private _backFormattingService: BackFormattingService,
              private _onCloseService: OnCloseService,
              private _selectionService: SelectionService,
              private _htmlService: EditHtmlService,
              private _renderPrintService: RenderPrintService,
              private _loadingMaskService: LoadingMaskService,
              private _renderer: Renderer2
  ) {
    this.isIE = /*@cc_on!@*/false || !!/(MSIE|Trident\/|Edge\/)/i.test(navigator.userAgent);
    configService.updatedConfig.subscribe((editorConfig) => {
      this.editorConfig = editorConfig;
    });

    uploadFilesService.uploadsChange.subscribe((uploads) => {
      if (uploads) {
        let i: number;
        for (i = 0; i < uploads.length; i++) {
          this._editorService.upload(uploads.item(i), '', this.editorConfig.rewrite).subscribe((obj: FileCredentials) => {
            this.fileWasDropped ? this.selectFile(obj.guid, '', '') : this.selectDir('');
          });
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

    this._backFormattingService.formatFontChange.subscribe((font: string) => {
      this.formatting.font = font;
    });

    this._backFormattingService.formatStrikeoutChange.subscribe((strikeout: boolean) => {
      this.formatting.strikeout = strikeout;
    });

    this._backFormattingService.formatAlignChange.subscribe((align: string) => {
      this.formatting.align = align;
    });

    this._backFormattingService.formatListChange.subscribe((list: string) => {
      this.formatting.list = list;
    });

    this._formattingService.formatBoldChange.subscribe((bold: boolean) => {
      this.formatting.bold = bold;
    });
    this._formattingService.formatItalicChange.subscribe((italic: boolean) => {
      this.formatting.italic = italic;
    });
    this._formattingService.formatUnderlineChange.subscribe((underline: boolean) => {
      this.formatting.underline = underline;
    });
    this._formattingService.formatColorChange.subscribe((color: string) => {
      this.formatting.color = color;
    });
    this._formattingService.formatBgColorChange.subscribe((bgcolor: string) => {
      this.formatting.bgColor = bgcolor;
    });
    this._formattingService.formatFontSizeChange.subscribe((fontSize: number) => {
      this.formatting.fontSize = fontSize;
    });

    this._formattingService.formatFontChange.subscribe((font: string) => {
      this.formatting.font = font;
    });

    this._formattingService.formatStrikeoutChange.subscribe((strikeout: boolean) => {
      this.formatting.strikeout = strikeout;
    });

    this._formattingService.formatAlignChange.subscribe((align: string) => {
      this.formatting.align = align;
    });

    this._formattingService.formatListChange.subscribe((list: string) => {
      this.formatting.list = list;
    });

    this._htmlService.htmlContent.subscribe((text: string) => {
      if (this.file && this.file.pages) {
        this.textBackup = text;
        if (this.ifPresentation()) {
          this.pagesData.set(this.selectedPageNumber - 1, text);
        }
      }
    });
  }

  ngOnInit() {
    if (this.editorConfig.defaultDocument !== ""){
      this.isLoading = true;
      this.selectFile(this.editorConfig.defaultDocument, "", "");
    }

    this.selectedPageNumber = 1;
  }

  ngAfterViewInit() {
    this._loadingMaskService
    .onLoadingChanged
    .subscribe((loading: boolean) => this.isLoading = loading);
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

  ifPresentation() {
    return this.file ? FileUtil.find(this.file.guid, false).format === "Microsoft PowerPoint" : false;
  }

  selectCurrentPage(pageNumber)
  {
    this.selectedPageNumber = pageNumber;
    if (this.ifPresentation() && this.pagesData.size > 0 && this.pagesData.get(pageNumber - 1)) {
      this.file.pages[pageNumber - 1].data = this.pagesData.get(pageNumber - 1);
    }
  }

  openModal(id: string) {
    if (this.file) {
      this.file.pages[0].editable = false;
    }
    this._modalService.open(id);
  }

  openSave() {
    if (!this.formatDisabled) {
      this.openModal(CommonModals.CreateDocument);
    }
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

  createFile() {
    this.newFile = true;
    this.file = new FileDescription();
    const page = new PageModel;
    page.width = 595;
    page.height = 842;
    page.data = '<!DOCTYPE HTML><html><head></head><body></body></html>';
    page.number = 1;
    page.editable = true;
    this.file.pages = [];
    this.file.pages.push(page);
    this.file.guid = "new document.docx";
    this.credentials = new FileCredentials("new document.docx", "");
    this.formatDisabled = false;
    this.downloadDisabled = true;
  }

  selectFile($event: string, password: string, modalId: string) {
    this.credentials = new FileCredentials($event, password);
    this._editorService.loadFile(this.credentials).subscribe((file: FileDescription) => {
        this.loadFile(file);
        const isIE = /*@cc_on!@*/false || !!/(MSIE|Trident\/|Edge\/)/i.test(navigator.userAgent);
        if(isIE) {
          const observer = new MutationObserver(function (mutations) {
            if($(".documentMainContent").length > 0 ){
              $(".documentMainContent").attr("contentEditable", "true");
              observer.disconnect();
            }
          });
          observer.observe(document, {attributes: false, childList: true, characterData: false, subtree: true});
        }
      }
    );
    this.clearData();
    this._modalService.close(modalId);
  }

  fileDropped($event){
    this.fileWasDropped = $event;
  }

  private loadFile(file: FileDescription) {
    this.file = file;
    if (this.file && this.file.pages[0]) {
      this.file.pages.forEach((page) => {
        page.editable = true;
        if (page.width === 0) page.width = this.ifPresentation() ? 960 : 595;
        if (page.height === 0) page.height = this.ifPresentation() ? 540 : 842;
      });
      if (this.pagesData.size === 0) {
        this.textBackup = this.file.pages[0].data;
      }
    }
    this.formatDisabled = !this.file;
    this.downloadDisabled = false;

    // adding listeners on inputs if present on existing page
    let count = 0;
    const timerId = setInterval(() => { 
      count++;
      const page = document.querySelectorAll('.page');
      if (page)
      {
        this.initControlsListeners();
        clearInterval(timerId);
      }
      if (count === 20) clearInterval();
    }, 100);
  }

  private initControlsListeners() {
    const inputs = document.querySelectorAll('input');
    inputs.forEach(input => {
      this._renderer.listen(input, 'keyup', (event) => {
        input.setAttribute('value', input.value);
      });
    });

    const selects = document.querySelectorAll('select');
    selects.forEach(select => {
      this._renderer.listen(select, 'change', (event) => {
        selects.forEach(s => {
          for (let i = s.options.length - 1; i >= 0; i--) {
            s.options[i].removeAttribute('selected');
          }
        });

        select.options[select.selectedIndex].setAttribute('selected', 'selected');
      });
    });
  }

  private clearData() {
    if (!this.file || !this.file.pages) {
      return;
    }
    for (const page of this.file.pages) {
      page.data = null;
    }
  }

  upload($event: string) {
    this._editorService.upload(null, $event, this.rewriteConfig).subscribe(() => {
      this.selectDir('');
    });
  }

  selectFontSize($event: Option) {
    if (this.formatDisabled)
      return;
    $(".gd-wrapper").off("keyup");
    if(this.isIE) {
      this._selectionService.restoreSelection();
      this._selectionService.captureSelection();
    }
    this._formattingService.changeFormatFontSize($event.value);
    $(".gd-wrapper").on("keyup", () => {
      const fontElements = document.getElementsByTagName("font");
      for (let i = 0, len = fontElements.length; i < len; ++i) {
        if (fontElements[i].getAttribute('size') === "7") {
          fontElements[i].removeAttribute("size");
          fontElements[i].style.fontSize = $event + "px";
        }
      }
    });
  }

  selectFont($event: Option) {
    if (this.formatDisabled)
      return;
    event.preventDefault();
    event.stopPropagation();
    if(this.isIE) {
      this._selectionService.restoreSelection();
      this._selectionService.captureSelection();
    }
    this._formattingService.changeFormatFont($event.value);
  }

  toggleColorPicker($event, bg: boolean) {
    $event.preventDefault();
    $event.stopPropagation();
    if (this.formatDisabled) {
      return;
    }
    if(this.isIE) {
      this._selectionService.restoreSelection();
      this._selectionService.captureSelection();
    }
    if (bg) {
      this.bgColorPickerShow = !this.bgColorPickerShow;
      this.colorPickerShow = false;
    } else {
      this.colorPickerShow = !this.colorPickerShow;
      this.bgColorPickerShow = false;
    }
  }

  toggleFontSelect($event, isFontName: boolean) {
    if (isFontName) {
      this.selectFontShow = !this.selectFontShow;
      this.selectFontSizeShow = false;
    } else {
      this.selectFontSizeShow = !this.selectFontSizeShow;
      this.selectFontShow = false;
    }
  }

  selectColor($event: string) {
    if(this.isIE) {
      this._selectionService.restoreSelection();
      this._selectionService.captureSelection();
    }
    if (this.bgColorPickerShow) {
      this.bgColorPickerShow = false;
      this._formattingService.changeFormatBgColor($event);
    } else {
      this.colorPickerShow = false;
      this._formattingService.changeFormatColor($event);
    }
  }

  toggleBold(event) {
    if (this.formatDisabled)
      return;
    event.preventDefault();
    event.stopPropagation();
    if(this.isIE) {
      this._selectionService.restoreSelection();
      this._selectionService.captureSelection();
    }
    this._formattingService.changeFormatBold(!this.formatting.bold);
  }

  toggleUndo() {
    if (this.formatDisabled)
      return;
    event.preventDefault();
    event.stopPropagation();
    this._formattingService.Undo();
  }

  toggleRedo() {
    if (this.formatDisabled)
      return;
    event.preventDefault();
    event.stopPropagation();
    this._formattingService.Redo();
  }

  toggleItalic(event) {
    if (this.formatDisabled)
      return;
    event.preventDefault();
    event.stopPropagation();
    if(this.isIE) {
      this._selectionService.restoreSelection();
      this._selectionService.captureSelection();
    }
    this._formattingService.changeFormatItalic(!this.formatting.italic);
  }

  toggleUnderline(event) {
    if (this.formatDisabled)
      return;
    event.preventDefault();
    event.stopPropagation();
    if(this.isIE) {
      this._selectionService.restoreSelection();
      this._selectionService.captureSelection();
    }
    this._formattingService.changeFormatUnderline(!this.formatting.underline);
  }

  hideAll($event) {
    if (($event.target.parentElement && $event.target.parentElement.attributes['name'] &&
      $event.target.parentElement.attributes['name'].value === 'button') ||
      ($event.target.parentElement.parentElement &&
      $event.target.parentElement.parentElement.attributes['name'] &&
      $event.target.parentElement.parentElement.attributes['name'].value === 'button')) {

      this._onCloseService.close(true);
      return;
    }
    this.colorPickerShow = false;
    this.bgColorPickerShow = false;
    this._onCloseService.close(true);

    // we try to save the changes on any click outside
    if (document.querySelectorAll('.gd-wrapper')[0]) {
      this.textBackup = document.querySelectorAll('.gd-wrapper')[0].innerHTML.toString();
    }
  }

  toggleStrikeout(event) {
    if (this.formatDisabled)
      return;
    event.preventDefault();
    event.stopPropagation();
    if(this.isIE) {
      this._selectionService.restoreSelection();
      this._selectionService.captureSelection();
    }
    this._formattingService.changeFormatStrikeout(!this.formatting.strikeout);
  }

  toggleAlign(align: string) {
    if (this.formatDisabled)
      return;
    event.preventDefault();
    event.stopPropagation();
    if (align === this.formatting.align) {
      align = 'full';
    }
    this._formattingService.changeFormatAlign(align);
    this.formatting.align = align;
  }

  toggleList(list: string) {
    if (this.formatDisabled)
      return;
    event.preventDefault();
    event.stopPropagation();

    if (list === this.formatting.list) {
      this.formatting.list = "";
      // to trigger changes in contentEditable
      this._formattingService.changeFormatList(list);
      // to clear the toggle status of the button only
      this._formattingService.changeFormatList("");
    } else {
      this.formatting.list = list;
      this._formattingService.changeFormatList(list);
    }
    if(this.isIE) {
      this._selectionService.restoreSelection();
      this._selectionService.captureSelection();
    }
  }

  downloadFile() {
    if (this.downloadDisabled)
      return;
    window.location.assign(this._editorService.getDownloadUrl(this.credentials));
  }

  save(){
    if (this.formatDisabled)
      return;
    if(this.credentials) {
      if (this.file.guid === "new document.docx") {
        this.openModal(CommonModals.CreateDocument);
      } else {
        this.saveFile(this.credentials);
      }
    }
  }

 saveFile(credentials: FileCredentials) {
    if (!this.file || !this.file.pages)
      return;

    this.textBackup = this.getPageWithRootTags(this.textBackup, credentials.guid);

    const saveFile = new SaveFile(credentials.guid, credentials.password, this.textBackup, this.selectedPageNumber - 1);
    this._editorService.save(saveFile).subscribe((loadFile: FileDescription) => {
      this.loadFile(loadFile);
      this.credentials = new FileCredentials(loadFile.guid, credentials.password);
      this._modalService.open(CommonModals.OperationSuccess);
    });
  }

  saveNewFile(credentials: FileCredentials) {
    if (!this.file || !this.file.pages)
    {
      return;
    }

    this.textBackup = this.getPageWithRootTags(this.textBackup, credentials.guid);

    const saveFile = new SaveFile(credentials.guid, credentials.password, this.textBackup, 0);
    this._editorService.create(saveFile).subscribe((loadFile: FileDescription) => {
      this.loadFile(loadFile);
      this.credentials = new FileCredentials(loadFile.guid, credentials.password);
      this._modalService.open(CommonModals.OperationSuccess);
      this.newFile = false;
    });
  }

  // Returns root-tags in the HTML-markup which previously were removed by innerHTML.
  getPageWithRootTags(data, guid) {
    const pptFormats = ["ppt", "pptx", "pptm", "pps", "ppsx", "ppsm", "pot", "potx", "potm", "odp", "otp"];
    let resultData = data;

    if (!data.startsWith("<html><head>") && !data.endsWith("</body></html>")) {
      resultData = "<html><head>" + data + "</body></html>";
    }
    
    if (this.newFile)
    {
      resultData = resultData.replace('<head>', '<head><meta http-equiv="content-type" content="text/html; charset=utf-8"></head><body>');
      if (pptFormats.includes(guid.split('.').pop()))
      {
        resultData = resultData.replace('<body>', '<body><div class="slide">');
      }
      else 
      {
        resultData = resultData.replace('<body>', '<body><div class="documentMainContent">');
      }

      resultData = resultData.replace('</body>', '</div></body>');
    }
    else 
    {
      // for Word files
      resultData = resultData.replace('<div class="documentMainContent">', '</head><body><div class="documentMainContent">');
      // for Presentations files
      resultData = resultData.replace('<div class="slide"', '</head><body><div class="slide"');
      // for Excel files
      resultData = resultData.replace('</style><table', '</style></head><body><table');
    }

    resultData = resultData.replace('<main class="documentMainContent">', '</head><body><main class="documentMainContent">');
    return resultData;
  }

  printFile() {
    if (this.formatDisabled)
      return;
    if(this.file.pages) {
      const page = new PageModel;
      page.width = 595;
      page.height = 842;
      // using of the replace is required to fix issue with padding for intire print content
      page.data = this.textBackup.replace('</style>', 'body { padding: 96px; } </style>');
      const printHtml = [page];
      this._renderPrintService.changePages(printHtml);
    }
  }

  onCloseModal($event) {
    if (this.file && $event) {
      if(this.isIE) {
        $(".documentMainContent").attr("contentEditable", "true");
      } else {
        this.file.pages[0].editable = true;
      }
      this._selectionService.restoreSelection();
    }
  }
}
