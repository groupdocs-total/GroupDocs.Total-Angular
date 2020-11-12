import { Component, ComponentRef, Input, OnDestroy, OnInit } from '@angular/core';
import {
  AddDynamicComponentService,
  CommonModals,
  FileCredentials,
  FileModel, Formatting,
  HostingDynamicComponentService,
  LogoComponent,
  ModalService,
  NavigateService, PagePreloadService, PasswordService,
  TopTabActivatorService, UploadFilesService,
  Utils,
  WindowService,
  ZoomService
} from "@groupdocs.examples.angular/common-components";
import { FileDescription, Point, Size, Template, TemplateField } from '../app-models';
import { FieldComponent } from "../field/field.component";

import * as jquery from 'jquery';
import { Subscription } from 'rxjs';
import { ActiveFieldService } from '../active-field.service';

const $ = jquery;


@Component({
  selector: 'app-surface',
  templateUrl: './surface.component.html',
  styleUrls: ['./surface.component.less']
})
export class SurfaceComponent implements OnInit, OnDestroy {

  addMode: boolean = false;

  private _file: FileDescription;
  private _template: Template;
  private _zoom: number;
  private fieldAddedSubscription: Subscription;
  private fieldRemovedSubscription: Subscription;

  private fieldComponentRefs = new Map<TemplateField, ComponentRef<{}>>();

  @Input() set file(file: FileDescription) {
    this._file = file;
  }

  get file() {
    return this._file;
  }

  @Input() set template(template: Template) {
    this._template = template;

    if (this.fieldAddedSubscription) {
      this.fieldAddedSubscription.unsubscribe();
    }

    if (this.fieldRemovedSubscription) {
      this.fieldRemovedSubscription.unsubscribe();
    }

    this.fieldAddedSubscription = this._template.added.subscribe(field => this.addField(field));
    this.fieldRemovedSubscription = this._template.removed.subscribe(field => this.removeField(field));

    this.removeFields();
    this._template = template;
    this._template.getFields().forEach(field => {
      this.addField(field);
    });
  }

  get scale() {
    return this._zoom / 100;
  }

  addField(field: TemplateField) {
    const dynamicDirective = this.hostingComponentsService.find(field.pageNumber);
    if (dynamicDirective) {

      const viewContainerRef = dynamicDirective.viewContainerRef;
      const fieldComponent = this.addDynamicComponentService.addDynamicComponent(viewContainerRef, FieldComponent);

      (<FieldComponent>fieldComponent.instance).id = field.id;
      (<FieldComponent>fieldComponent.instance).field = field;

      const pageModel = this.file.pages.find(function (p) {
        return p.number === field.pageNumber;
      });
      (<FieldComponent>fieldComponent.instance).pageSize = new Size(pageModel.width, pageModel.height);

      this.fieldComponentRefs.set(field, fieldComponent);
    }
  }

  removeFields() {
    this.fieldComponentRefs.forEach(cRef => {
      cRef.destroy();
    });

    this.fieldComponentRefs.clear();
  }

  removeField(field: TemplateField) {
    const componentRef = this.fieldComponentRefs.get(field);
    if (componentRef) {
      componentRef.destroy();
    }
    this.fieldComponentRefs.delete(field);
  }

  createField($event: MouseEvent) {
    if (!$event.altKey) {
      return;
    }

    $event.preventDefault();

    const position = Utils.getMousePosition($event);

    const elements = document.elementsFromPoint(position.x, position.y);
    const currentPage = elements.find(x => x.id && x.id.startsWith("page-"));
    if (currentPage) {
      const documentPage = $(currentPage).parent().parent()[0];
      const currentPosition = this.getCurrentPosition(position, $(documentPage));
      const pageId = currentPage.id;
      let pageNumber = 1;
      if (pageId) {
        const split = pageId.split('-');
        pageNumber = split.length === 2 ? parseInt(split[1], 10) : pageNumber;
      }

      const field = this._template.createField();
      field.pageNumber = pageNumber;
      field.position = new Point(
        currentPosition.x / this.scale,        
        currentPosition.y / this.scale);

      this._template.addField(field);
    }
  }

  private getCurrentPosition(position, page) {
    const x = (position.x - page.offset().left);
    const y = (position.y - page.offset().top);
    return new Point(x, y);
  }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
    if (this.fieldAddedSubscription) {
      this.fieldAddedSubscription.unsubscribe();
    }

    if (this.fieldRemovedSubscription) {
      this.fieldRemovedSubscription.unsubscribe();
    }
  }

  constructor(
    private hostingComponentsService: HostingDynamicComponentService,
    private addDynamicComponentService: AddDynamicComponentService,
    private _zoomService: ZoomService) {

    this._zoom = _zoomService.zoom;
    _zoomService.zoomChange.subscribe((zoom: number) => {
      this._zoom = zoom;
    });
  }
}
