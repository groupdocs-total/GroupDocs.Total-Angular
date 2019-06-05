import {AfterViewInit, Component} from '@angular/core';
import {EditorService} from "./editor.service";
import {
  FileDescription,
  FileModel,
  ModalService,
  UploadFilesService,
  NavigateService,
  PagePreloadService,
  PageModel,
  RenderPrintService,
  FileUtil,
  PasswordService,
  FileCredentials, CommonModals
} from "@groupdocs-total-angular/common-components";
import {EditorConfig} from "./editor-config";
import {EditorConfigService} from "./editor-config.service";
import {WindowService} from "@groupdocs-total-angular/common-components";

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
  startTool: number;
  endTool: number;
  options;

  constructor(private _editorService: EditorService,
              private _modalService: ModalService,
              configService: EditorConfigService,
              uploadFilesService: UploadFilesService,
              private _renderPrintService: RenderPrintService,
              passwordService: PasswordService,
              private _windowService: WindowService) {

    configService.updatedConfig.subscribe((editorConfig) => {
      this.editorConfig = editorConfig;
    });

    this.isDesktop = _windowService.isDesktop();
    _windowService.onResize.subscribe((w) => {
      this.isDesktop = _windowService.isDesktop();
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

  ngAfterViewInit(): void {
  }
}
