import { AfterViewInit, Component, ComponentRef, ElementRef, HostListener, Input, OnDestroy, OnInit, ViewChild } from '@angular/core';
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
import { DocumentDescription, Point, Size, Template, TemplateId, TemplateField } from '../app-models';
import { FieldComponent, FieldContextMenuClick } from "../field/field.component";
import { RenameModalComponent } from '../rename-modal/rename-modal.component';

import * as jquery from 'jquery';
import { Subscription } from 'rxjs';
import { TemplateService } from '../template.service';
import { eventNames } from 'process';
import { DocumentPageService } from '../document-page.service';

const $ = jquery;


@Component({
  selector: 'app-surface',
  templateUrl: './surface.component.html',
  styleUrls: ['./surface.component.less']
})
export class SurfaceComponent implements OnInit, OnDestroy, AfterViewInit {
  private _document: DocumentDescription;
  private _template: Template;
  private _zoom: number;
  private _fieldAddedSubscription: Subscription;
  private _fieldRemovedSubscription: Subscription;
  private _currentTemplateChangedSubscription: Subscription;

  //private fieldComponentRefs = new Map<TemplateField, ComponentRef<{}>>();

  private fieldWrappers = new Map<TemplateField, FieldWrapper>();


  @ViewChild('fieldNameModal', { static: true }) fieldNameModal: RenameModalComponent;
  @ViewChild('surface', { static: true }) surface: ElementRef;

  @Input() set document(document: DocumentDescription) {
    this._document = document;
  }

  get document() {
    return this._document;
  }

  get scale() {
    return this._zoom / 100;
  }

  addField(field: TemplateField) {
    const dynamicDirective = this.hostingComponentsService.find(field.pageNumber);
    if (dynamicDirective) {

      const viewContainerRef = dynamicDirective.viewContainerRef;
      const fieldComponent = this.addDynamicComponentService.addDynamicComponent(viewContainerRef, FieldComponent);

      var wrapper = new FieldWrapper(fieldComponent);
      const pageModel = this.document.pages.find(function (p) {
        return p.number === field.pageNumber;
      });
      wrapper.fieldComponent.pageSize = new Size(pageModel.width, pageModel.height);
      wrapper.fieldComponent.field = field;
      wrapper.contextMenuSubscription = wrapper.fieldComponent.contextMenuClick.subscribe(event => this.fieldContextMenuClick(event));

      this.fieldWrappers.set(field, wrapper);
    }
  }

  fieldContextMenuClick(event: FieldContextMenuClick) {
    if (event.action == "rename") {
      this.fieldNameModal.operationId = event.fieldName;
      this.fieldNameModal.initialValue = event.fieldName;
      this._modalService.open("FieldNameModal");

      return;
    }

    if (event.action == "remove") {
      this._template.removeFieldByName(event.fieldName);

      return;
    }
  }

  fieldNameModalAccept(event) {
    let oldFieldName = event.id;
    let newFieldName = event.newValue;

    if (oldFieldName != newFieldName) {
      let existFieldWithName = this._template.getFieldByName(newFieldName);
      if (existFieldWithName) {
        this.fieldNameModal.error = "Field with the same name already exists";
        return;
      }
    }

    this._modalService.close("FieldNameModal");
    let field = this._template.getFieldByName(oldFieldName);
    if (field) {
      field.name = newFieldName;
    }
  }

  removeFields() {
    this.fieldWrappers.forEach(wrapper => {
      wrapper.destroy();
    });

    this.fieldWrappers.clear();
  }

  removeField(field: TemplateField) {
    const wrapper = this.fieldWrappers.get(field);
    if (wrapper) {
      wrapper.destroy();
    }
    this.fieldWrappers.delete(field);
  }

  private getCurrentPosition(position, page) {
    const x = (position.x - page.offset().left);
    const y = (position.y - page.offset().top);
    return new Point(x, y);
  }

  // @HostListener('document:mousedown', ['$event'])
  // onMouseDown($event: MouseEvent) {
  //   const pos = Utils.getMousePosition($event);

  //   let e = document.elementFromPoint(pos.x, pos.y);
  // }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.updateActivePage();
  }

  ngOnDestroy(): void {
    if (this._fieldAddedSubscription) {
      this._fieldAddedSubscription.unsubscribe();
    }

    if (this._fieldRemovedSubscription) {
      this._fieldRemovedSubscription.unsubscribe();
    }

    if (this._currentTemplateChangedSubscription) {
      this._currentTemplateChangedSubscription.unsubscribe();
    }
  }

  constructor(
    private _modalService: ModalService,
    private hostingComponentsService: HostingDynamicComponentService,
    private addDynamicComponentService: AddDynamicComponentService,
    private _zoomService: ZoomService,
    private _templateService: TemplateService,
    private _documentPageService: DocumentPageService) {

    this._zoom = _zoomService.zoom;
    _zoomService.zoomChange.subscribe((zoom: number) => {
      this._zoom = zoom;
    });

    this._currentTemplateChangedSubscription = _templateService.currentTemplateChanged
      .subscribe(template => this.setTemplate(template));

    this.setTemplate(this._templateService.currentTemplate);

    this._documentPageService.activePageChanged.subscribe(_ => this.updateActivePage());
  }

  doubleTap($event: TouchEvent) {
    //  $event.preventDefault();
  }

  setActivePage($event) {
    $event.preventDefault();

    const position = Utils.getMousePosition($event);

    const elements = document.elementsFromPoint(position.x, position.y);
    const currentPage = elements.find(x => x.id && x.id.startsWith("page-"));
    if (currentPage) {
      this._documentPageService.setActivePage(parseInt(currentPage.id.substring("page-".length)));
    }
  }

  private updateActivePage() {
    const activePage = "page-" + this._documentPageService.activePage;

    const elements = this.surface.nativeElement.querySelectorAll('gd-page');
    elements.forEach(element => {
      let child = (element as HTMLElement).children[0];
      if (child.id == activePage) {
        (child as HTMLElement).style.opacity = '1';
        (child as HTMLElement).parentElement.parentElement.style.background = '#FFFFFF';
      } else {
        (child as HTMLElement).style.opacity = '0.5';
        (child as HTMLElement).parentElement.parentElement.style.background = '#688296';
      }
    });
  }

  private setTemplate(template: Template) {
    this._template = template;

    if (this._fieldAddedSubscription) {
      this._fieldAddedSubscription.unsubscribe();
    }

    if (this._fieldRemovedSubscription) {
      this._fieldRemovedSubscription.unsubscribe();
    }

    if (!this._template) {
      return;
    }

    this._fieldAddedSubscription = this._template.addedField.subscribe(field => this.addField(field));
    this._fieldRemovedSubscription = this._template.removedField.subscribe(field => this.removeField(field));

    this.removeFields();
    this._template = template;
    this._template.fields.forEach(field => {
      this.addField(field);
    });
  }
}

class FieldWrapper {
  fieldComponent: FieldComponent;
  contextMenuSubscription: Subscription;

  constructor(public ref: any) {
    this.fieldComponent = <FieldComponent>ref.instance;
  }

  destroy() {
    if (this.ref) {
      this.ref.destroy();
    }

    if (this.contextMenuSubscription) {
      this.contextMenuSubscription.unsubscribe();
    }
  }
}