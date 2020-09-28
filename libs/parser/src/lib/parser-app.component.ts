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
import { Template, TemplateId } from './app-models';


@Component({
  selector: 'gd-app-parser',
  templateUrl: './parser-app.component.html',
  styleUrls: ['./parser-app.component.less']
})
export class ParserAppComponent implements OnInit {
  template: Template;

  constructor(private _modalService: ModalService) { 

    //this._modalService.add("gd-browse-templates");
  }

  ngOnInit(): void {
    this.template = new Template();
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


}
