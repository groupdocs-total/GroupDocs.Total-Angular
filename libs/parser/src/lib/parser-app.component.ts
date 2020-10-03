import { Component, OnInit } from '@angular/core';
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
  ZoomService
} from "@groupdocs.examples.angular/common-components";
import { FileDescription, Template, TemplateId } from './app-models';
import { ParserService } from './parser.service';
import { ParserConfig } from './parser-config';


@Component({
  selector: 'gd-app-parser',
  templateUrl: './parser-app.component.html',
  styleUrls: ['./parser-app.component.less']
})
export class ParserAppComponent implements OnInit {
  template: Template;
  parserConfig: ParserConfig;

  constructor(
    private _modalService: ModalService,
    private _parserService: ParserService,
    uploadFilesService: UploadFilesService) {

    uploadFilesService.uploadsChange.subscribe((uploads) => {
      if (uploads) {
        let i: number;
        for (i = 0; i < uploads.length; i++) {
          this._parserService.upload(uploads.item(i), '', this.rewriteConfig).subscribe((obj: FileCredentials) => {
            this.selectDir('');
          });
        }
      }
    });
  }

  ngOnInit(): void {
    this.createTemplate();
  }

  changeTemplateName(name: string) {
    if (name == this.template.name) {
      return;
    }

    this.template.name = name;
  }

  createTemplate() {
    this.template = new Template();
  }

  loadTemplate(id: TemplateId) {
    this.template = Template.load(id.id);
    this._modalService.close("gd-browse-templates");
  }

  selectTemplate() {
    this._modalService.open("gd-browse-templates");
  }

  deleteTemplate() {
    if (this.template.isStored()) {
      this._modalService.open("id-delete-template-modal");
    }
  }

  deleteTemplateById(id: TemplateId) {
    this._modalService.close("id-delete-template-modal");
    if (this.template.isStored()) {
      this.template.remove();
      this.createTemplate();
    }
  }

  // File Browser
  private _file: FileDescription;

  files: FileModel[] = [];
  credentials: FileCredentials;
  browseFilesModal = CommonModals.BrowseFiles;

  set file(file: FileDescription) {
    this._file = file;
    this.createTemplate();
  }

  get file() {
    return this._file;
  }

  get uploadConfig(): boolean {
    return this.parserConfig ? this.parserConfig.upload : true;
  }

  get browseConfig(): boolean {
    return this.parserConfig ? this.parserConfig.browse : true;
  }

  get rewriteConfig(): boolean {
    return this.parserConfig ? this.parserConfig.rewrite : true;
  }

  openModal(id: string) {
    this._modalService.open(id);
  }

  upload($event: string) {
    this._parserService.upload(null, $event, this.rewriteConfig).subscribe(() => {
      this.selectDir('');
    });
  }

  selectDir($event: string) {
    this._parserService.loadFiles($event).subscribe((files: FileModel[]) => this.files = files || []);
  }

  selectFile($event: string, password: string, modalId: string) {
    this.credentials = new FileCredentials($event, password);
    this.file = null;
    this._parserService.loadFile(this.credentials).subscribe((file: FileDescription) => {
      this.file = file;
    }
    );
    if (modalId) {
      this._modalService.close(modalId);
    }
  }
}
