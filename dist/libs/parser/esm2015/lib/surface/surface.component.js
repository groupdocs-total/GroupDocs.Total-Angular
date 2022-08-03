/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, ElementRef, Input, ViewChild } from '@angular/core';
import { AddDynamicComponentService, HostingDynamicComponentService, ModalService, Utils, ZoomService } from "@groupdocs.examples.angular/common-components";
import { DocumentDescription, Point, Size } from '../app-models';
import { FieldComponent } from "../field/field.component";
import { RenameModalComponent } from '../rename-modal/rename-modal.component';
import * as jquery from 'jquery';
import { TemplateService } from '../template.service';
import { DocumentPageService } from '../document-page.service';
/** @type {?} */
const $ = jquery;
export class SurfaceComponent {
    /**
     * @param {?} _modalService
     * @param {?} hostingComponentsService
     * @param {?} addDynamicComponentService
     * @param {?} _zoomService
     * @param {?} _templateService
     * @param {?} _documentPageService
     */
    constructor(_modalService, hostingComponentsService, addDynamicComponentService, _zoomService, _templateService, _documentPageService) {
        this._modalService = _modalService;
        this.hostingComponentsService = hostingComponentsService;
        this.addDynamicComponentService = addDynamicComponentService;
        this._zoomService = _zoomService;
        this._templateService = _templateService;
        this._documentPageService = _documentPageService;
        //private fieldComponentRefs = new Map<TemplateField, ComponentRef<{}>>();
        this.fieldWrappers = new Map();
        this._zoom = _zoomService.zoom;
        _zoomService.zoomChange.subscribe((/**
         * @param {?} zoom
         * @return {?}
         */
        (zoom) => {
            this._zoom = zoom;
        }));
        this._currentTemplateChangedSubscription = _templateService.currentTemplateChanged
            .subscribe((/**
         * @param {?} template
         * @return {?}
         */
        template => this.setTemplate(template)));
        this.setTemplate(this._templateService.currentTemplate);
        this._documentPageService.activePageChanged.subscribe((/**
         * @param {?} _
         * @return {?}
         */
        _ => this.updateActivePage()));
    }
    /**
     * @param {?} document
     * @return {?}
     */
    set document(document) {
        this._document = document;
    }
    /**
     * @return {?}
     */
    get document() {
        return this._document;
    }
    /**
     * @return {?}
     */
    get scale() {
        return this._zoom / 100;
    }
    /**
     * @param {?} field
     * @return {?}
     */
    addField(field) {
        /** @type {?} */
        const dynamicDirective = this.hostingComponentsService.find(field.pageNumber);
        if (dynamicDirective) {
            /** @type {?} */
            const viewContainerRef = dynamicDirective.viewContainerRef;
            /** @type {?} */
            const fieldComponent = this.addDynamicComponentService.addDynamicComponent(viewContainerRef, FieldComponent);
            /** @type {?} */
            const wrapper = new FieldWrapper(fieldComponent);
            /** @type {?} */
            const pageModel = this.document.pages.find((/**
             * @param {?} p
             * @return {?}
             */
            function (p) {
                return p.number === field.pageNumber;
            }));
            wrapper.fieldComponent.pageSize = new Size(pageModel.width, pageModel.height);
            wrapper.fieldComponent.field = field;
            wrapper.contextMenuSubscription = wrapper.fieldComponent.contextMenuClick.subscribe((/**
             * @param {?} event
             * @return {?}
             */
            event => this.fieldContextMenuClick(event)));
            this.fieldWrappers.set(field, wrapper);
        }
    }
    /**
     * @param {?} event
     * @return {?}
     */
    fieldContextMenuClick(event) {
        if (event.action === "rename") {
            this.fieldNameModal.operationId = event.fieldName;
            this.fieldNameModal.initialValue = event.fieldName;
            this._modalService.open("FieldNameModal");
            return;
        }
        if (event.action === "remove") {
            this._template.removeFieldByName(event.fieldName);
            return;
        }
    }
    /**
     * @param {?} event
     * @return {?}
     */
    fieldNameModalAccept(event) {
        /** @type {?} */
        const oldFieldName = event.id;
        /** @type {?} */
        const newFieldName = event.newValue;
        if (oldFieldName !== newFieldName) {
            /** @type {?} */
            const existFieldWithName = this._template.getFieldByName(newFieldName);
            if (existFieldWithName) {
                this.fieldNameModal.error = "Field with the same name already exists";
                return;
            }
        }
        this._modalService.close("FieldNameModal");
        /** @type {?} */
        const field = this._template.getFieldByName(oldFieldName);
        if (field) {
            field.name = newFieldName;
        }
    }
    /**
     * @return {?}
     */
    removeFields() {
        this.fieldWrappers.forEach((/**
         * @param {?} wrapper
         * @return {?}
         */
        wrapper => {
            wrapper.destroy();
        }));
        this.fieldWrappers.clear();
    }
    /**
     * @param {?} field
     * @return {?}
     */
    removeField(field) {
        /** @type {?} */
        const wrapper = this.fieldWrappers.get(field);
        if (wrapper) {
            wrapper.destroy();
        }
        this.fieldWrappers.delete(field);
    }
    /**
     * @private
     * @param {?} position
     * @param {?} page
     * @return {?}
     */
    getCurrentPosition(position, page) {
        /** @type {?} */
        const x = (position.x - page.offset().left);
        /** @type {?} */
        const y = (position.y - page.offset().top);
        return new Point(x, y);
    }
    // @HostListener('document:mousedown', ['$event'])
    // onMouseDown($event: MouseEvent) {
    //   const pos = Utils.getMousePosition($event);
    //   let e = document.elementFromPoint(pos.x, pos.y);
    // }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
        this.updateActivePage();
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
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
    /**
     * @param {?} $event
     * @return {?}
     */
    doubleTap($event) {
        //  $event.preventDefault();
    }
    /**
     * @param {?} $event
     * @return {?}
     */
    setActivePage($event) {
        $event.preventDefault();
        /** @type {?} */
        const position = Utils.getMousePosition($event);
        /** @type {?} */
        const elements = document.elementsFromPoint(position.x, position.y);
        /** @type {?} */
        const currentPage = elements.find((/**
         * @param {?} x
         * @return {?}
         */
        x => x.id && x.id.startsWith("page-")));
        if (currentPage) {
            this._documentPageService.setActivePage(parseInt(currentPage.id.substring("page-".length), 10));
        }
    }
    /**
     * @private
     * @return {?}
     */
    updateActivePage() {
        /** @type {?} */
        const activePage = "page-" + this._documentPageService.activePage;
        /** @type {?} */
        const elements = this.surface.nativeElement.querySelectorAll('gd-page');
        elements.forEach((/**
         * @param {?} element
         * @return {?}
         */
        element => {
            /** @type {?} */
            const child = ((/** @type {?} */ (element))).children[0];
            if (child.id === activePage) {
                ((/** @type {?} */ (child))).style.opacity = '1';
                ((/** @type {?} */ (child))).parentElement.parentElement.style.background = '#FFFFFF';
            }
            else {
                ((/** @type {?} */ (child))).style.opacity = '0.5';
                ((/** @type {?} */ (child))).parentElement.parentElement.style.background = '#688296';
            }
        }));
    }
    /**
     * @private
     * @param {?} template
     * @return {?}
     */
    setTemplate(template) {
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
        this._fieldAddedSubscription = this._template.addedField.subscribe((/**
         * @param {?} field
         * @return {?}
         */
        field => this.addField(field)));
        this._fieldRemovedSubscription = this._template.removedField.subscribe((/**
         * @param {?} field
         * @return {?}
         */
        field => this.removeField(field)));
        this.removeFields();
        this._template = template;
        this._template.fields.forEach((/**
         * @param {?} field
         * @return {?}
         */
        field => {
            this.addField(field);
        }));
    }
}
SurfaceComponent.decorators = [
    { type: Component, args: [{
                selector: 'gd-surface',
                template: "<div #surface class=\"doc-panel\">\n  <gd-document class=\"gd-document\" *ngIf=\"document\" [mode]=\"false\" [file]=\"document\" gdScrollable gdRenderPrint\n    [htmlMode]=\"false\" (click)=\"setActivePage($event)\"></gd-document>\n\n  <gd-rename-modal #fieldNameModal [id]=\"'FieldNameModal'\" [title]=\"'Rename Field'\"\n    [promptText]=\"'Enter a new field name:'\" [acceptText]=\"'Save'\" (acceptEvent)=\"fieldNameModalAccept($event)\">\n  </gd-rename-modal>\n</div>",
                styles: ["@import url(https://fonts.googleapis.com/css?family=Open+Sans&display=swap);.red{box-shadow:10px 5px 5px red}:host *{font-family:'Open Sans',Arial,Helvetica,sans-serif}::ng-deep .top-panel{align-content:flex-start}.gd-document{position:absolute;height:calc(100vh - 60px);width:calc(100vw - 300px);left:0;top:60px;right:-300px;overflow:auto}::ng-deep .panzoom{-webkit-box-pack:unset!important;justify-content:unset!important}::ng-deep .page{position:relative}::ng-deep .gd-page-image{width:unset;height:unset}"]
            }] }
];
/** @nocollapse */
SurfaceComponent.ctorParameters = () => [
    { type: ModalService },
    { type: HostingDynamicComponentService },
    { type: AddDynamicComponentService },
    { type: ZoomService },
    { type: TemplateService },
    { type: DocumentPageService }
];
SurfaceComponent.propDecorators = {
    fieldNameModal: [{ type: ViewChild, args: ['fieldNameModal', { static: true },] }],
    surface: [{ type: ViewChild, args: ['surface', { static: true },] }],
    document: [{ type: Input }]
};
if (false) {
    /**
     * @type {?}
     * @private
     */
    SurfaceComponent.prototype._document;
    /**
     * @type {?}
     * @private
     */
    SurfaceComponent.prototype._template;
    /**
     * @type {?}
     * @private
     */
    SurfaceComponent.prototype._zoom;
    /**
     * @type {?}
     * @private
     */
    SurfaceComponent.prototype._fieldAddedSubscription;
    /**
     * @type {?}
     * @private
     */
    SurfaceComponent.prototype._fieldRemovedSubscription;
    /**
     * @type {?}
     * @private
     */
    SurfaceComponent.prototype._currentTemplateChangedSubscription;
    /**
     * @type {?}
     * @private
     */
    SurfaceComponent.prototype.fieldWrappers;
    /** @type {?} */
    SurfaceComponent.prototype.fieldNameModal;
    /** @type {?} */
    SurfaceComponent.prototype.surface;
    /**
     * @type {?}
     * @private
     */
    SurfaceComponent.prototype._modalService;
    /**
     * @type {?}
     * @private
     */
    SurfaceComponent.prototype.hostingComponentsService;
    /**
     * @type {?}
     * @private
     */
    SurfaceComponent.prototype.addDynamicComponentService;
    /**
     * @type {?}
     * @private
     */
    SurfaceComponent.prototype._zoomService;
    /**
     * @type {?}
     * @private
     */
    SurfaceComponent.prototype._templateService;
    /**
     * @type {?}
     * @private
     */
    SurfaceComponent.prototype._documentPageService;
}
class FieldWrapper {
    /**
     * @param {?} ref
     */
    constructor(ref) {
        this.ref = ref;
        this.fieldComponent = (/** @type {?} */ (ref.instance));
    }
    /**
     * @return {?}
     */
    destroy() {
        if (this.ref) {
            this.ref.destroy();
        }
        if (this.contextMenuSubscription) {
            this.contextMenuSubscription.unsubscribe();
        }
    }
}
if (false) {
    /** @type {?} */
    FieldWrapper.prototype.fieldComponent;
    /** @type {?} */
    FieldWrapper.prototype.contextMenuSubscription;
    /** @type {?} */
    FieldWrapper.prototype.ref;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3VyZmFjZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ3JvdXBkb2NzLmV4YW1wbGVzLmFuZ3VsYXIvcGFyc2VyLyIsInNvdXJjZXMiOlsibGliL3N1cmZhY2Uvc3VyZmFjZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBaUIsU0FBUyxFQUFnQixVQUFVLEVBQWdCLEtBQUssRUFBcUIsU0FBUyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3RJLE9BQU8sRUFDTCwwQkFBMEIsRUFJMUIsOEJBQThCLEVBRTlCLFlBQVksRUFHWixLQUFLLEVBRUwsV0FBVyxFQUNaLE1BQU0sK0NBQStDLENBQUM7QUFDdkQsT0FBTyxFQUFFLG1CQUFtQixFQUFFLEtBQUssRUFBRSxJQUFJLEVBQXVDLE1BQU0sZUFBZSxDQUFDO0FBQ3RHLE9BQU8sRUFBRSxjQUFjLEVBQXlCLE1BQU0sMEJBQTBCLENBQUM7QUFDakYsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sd0NBQXdDLENBQUM7QUFFOUUsT0FBTyxLQUFLLE1BQU0sTUFBTSxRQUFRLENBQUM7QUFFakMsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBRXRELE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLDBCQUEwQixDQUFDOztNQUV6RCxDQUFDLEdBQUcsTUFBTTtBQVFoQixNQUFNLE9BQU8sZ0JBQWdCOzs7Ozs7Ozs7SUFvSTNCLFlBQ1UsYUFBMkIsRUFDM0Isd0JBQXdELEVBQ3hELDBCQUFzRCxFQUN0RCxZQUF5QixFQUN6QixnQkFBaUMsRUFDakMsb0JBQXlDO1FBTHpDLGtCQUFhLEdBQWIsYUFBYSxDQUFjO1FBQzNCLDZCQUF3QixHQUF4Qix3QkFBd0IsQ0FBZ0M7UUFDeEQsK0JBQTBCLEdBQTFCLDBCQUEwQixDQUE0QjtRQUN0RCxpQkFBWSxHQUFaLFlBQVksQ0FBYTtRQUN6QixxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQWlCO1FB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QUFFLElBQUksRUFBRTtzQkFDNUMsU0FBUyxTQUFDLFNBQVMsRUFBRSxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUU7dUJBRXJDLEtBQUs7Ozs7Ozs7SUFmTixxQ0FBdUM7Ozs7O0lBQ3ZDLHFDQUE0Qjs7Ozs7SUFDNUIsaUNBQXNCOzs7OztJQUN0QixtREFBOEM7Ozs7O0lBQzlDLHFEQUFnRDs7Ozs7SUFDaEQsK0RBQTBEOzs7OztJQUkxRCx5Q0FBK0Q7O0lBRy9ELDBDQUFvRjs7SUFDcEYsbUNBQTREOzs7OztJQXVIMUQseUNBQW1DOzs7OztJQUNuQyxvREFBZ0U7Ozs7O0lBQ2hFLHNEQUE4RDs7Ozs7SUFDOUQsd0NBQWlDOzs7OztJQUNqQyw0Q0FBeUM7Ozs7O0lBQ3pDLGdEQUFpRDs7QUF5RXJELE1BQU0sWUFBWTs7OztJQUloQixZQUFtQixHQUFRO1FBQVIsUUFBRyxHQUFILEdBQUcsQ0FBSztRQUN6QixJQUFJLENBQUMsY0FBYyxHQUFHLG1CQUFnQixHQUFHLENBQUMsUUFBUSxFQUFBLENBQUM7SUFDckQsQ0FBQzs7OztJQUVELE9BQU87UUFDTCxJQUFJLElBQUksQ0FBQyxHQUFHLEVBQUU7WUFDWixJQUFJLENBQUMsR0FBRyxDQUFDLE9BQU8sRUFBRSxDQUFDO1NBQ3BCO1FBRUQsSUFBSSxJQUFJLENBQUMsdUJBQXVCLEVBQUU7WUFDaEMsSUFBSSxDQUFDLHVCQUF1QixDQUFDLFdBQVcsRUFBRSxDQUFDO1NBQzVDO0lBQ0gsQ0FBQztDQUNGOzs7SUFoQkMsc0NBQStCOztJQUMvQiwrQ0FBc0M7O0lBRTFCLDJCQUFlIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQWZ0ZXJWaWV3SW5pdCwgQ29tcG9uZW50LCBDb21wb25lbnRSZWYsIEVsZW1lbnRSZWYsIEhvc3RMaXN0ZW5lciwgSW5wdXQsIE9uRGVzdHJveSwgT25Jbml0LCBWaWV3Q2hpbGQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7XG4gIEFkZER5bmFtaWNDb21wb25lbnRTZXJ2aWNlLFxuICBDb21tb25Nb2RhbHMsXG4gIEZpbGVDcmVkZW50aWFscyxcbiAgRmlsZU1vZGVsLCBGb3JtYXR0aW5nLFxuICBIb3N0aW5nRHluYW1pY0NvbXBvbmVudFNlcnZpY2UsXG4gIExvZ29Db21wb25lbnQsXG4gIE1vZGFsU2VydmljZSxcbiAgTmF2aWdhdGVTZXJ2aWNlLCBQYWdlUHJlbG9hZFNlcnZpY2UsIFBhc3N3b3JkU2VydmljZSxcbiAgVG9wVGFiQWN0aXZhdG9yU2VydmljZSwgVXBsb2FkRmlsZXNTZXJ2aWNlLFxuICBVdGlscyxcbiAgV2luZG93U2VydmljZSxcbiAgWm9vbVNlcnZpY2Vcbn0gZnJvbSBcIkBncm91cGRvY3MuZXhhbXBsZXMuYW5ndWxhci9jb21tb24tY29tcG9uZW50c1wiO1xuaW1wb3J0IHsgRG9jdW1lbnREZXNjcmlwdGlvbiwgUG9pbnQsIFNpemUsIFRlbXBsYXRlLCBUZW1wbGF0ZUlkLCBUZW1wbGF0ZUZpZWxkIH0gZnJvbSAnLi4vYXBwLW1vZGVscyc7XG5pbXBvcnQgeyBGaWVsZENvbXBvbmVudCwgRmllbGRDb250ZXh0TWVudUNsaWNrIH0gZnJvbSBcIi4uL2ZpZWxkL2ZpZWxkLmNvbXBvbmVudFwiO1xuaW1wb3J0IHsgUmVuYW1lTW9kYWxDb21wb25lbnQgfSBmcm9tICcuLi9yZW5hbWUtbW9kYWwvcmVuYW1lLW1vZGFsLmNvbXBvbmVudCc7XG5cbmltcG9ydCAqIGFzIGpxdWVyeSBmcm9tICdqcXVlcnknO1xuaW1wb3J0IHsgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBUZW1wbGF0ZVNlcnZpY2UgfSBmcm9tICcuLi90ZW1wbGF0ZS5zZXJ2aWNlJztcbmltcG9ydCB7IGV2ZW50TmFtZXMgfSBmcm9tICdwcm9jZXNzJztcbmltcG9ydCB7IERvY3VtZW50UGFnZVNlcnZpY2UgfSBmcm9tICcuLi9kb2N1bWVudC1wYWdlLnNlcnZpY2UnO1xuXG5jb25zdCAkID0ganF1ZXJ5O1xuXG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2dkLXN1cmZhY2UnLFxuICB0ZW1wbGF0ZVVybDogJy4vc3VyZmFjZS5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL3N1cmZhY2UuY29tcG9uZW50Lmxlc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBTdXJmYWNlQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3ksIEFmdGVyVmlld0luaXQge1xuICBwcml2YXRlIF9kb2N1bWVudDogRG9jdW1lbnREZXNjcmlwdGlvbjtcbiAgcHJpdmF0ZSBfdGVtcGxhdGU6IFRlbXBsYXRlO1xuICBwcml2YXRlIF96b29tOiBudW1iZXI7XG4gIHByaXZhdGUgX2ZpZWxkQWRkZWRTdWJzY3JpcHRpb246IFN1YnNjcmlwdGlvbjtcbiAgcHJpdmF0ZSBfZmllbGRSZW1vdmVkU3Vic2NyaXB0aW9uOiBTdWJzY3JpcHRpb247XG4gIHByaXZhdGUgX2N1cnJlbnRUZW1wbGF0ZUNoYW5nZWRTdWJzY3JpcHRpb246IFN1YnNjcmlwdGlvbjtcblxuICAvL3ByaXZhdGUgZmllbGRDb21wb25lbnRSZWZzID0gbmV3IE1hcDxUZW1wbGF0ZUZpZWxkLCBDb21wb25lbnRSZWY8e30+PigpO1xuXG4gIHByaXZhdGUgZmllbGRXcmFwcGVycyA9IG5ldyBNYXA8VGVtcGxhdGVGaWVsZCwgRmllbGRXcmFwcGVyPigpO1xuXG5cbiAgQFZpZXdDaGlsZCgnZmllbGROYW1lTW9kYWwnLCB7IHN0YXRpYzogdHJ1ZSB9KSBmaWVsZE5hbWVNb2RhbDogUmVuYW1lTW9kYWxDb21wb25lbnQ7XG4gIEBWaWV3Q2hpbGQoJ3N1cmZhY2UnLCB7IHN0YXRpYzogdHJ1ZSB9KSBzdXJmYWNlOiBFbGVtZW50UmVmO1xuXG4gIEBJbnB1dCgpIHNldCBkb2N1bWVudChkb2N1bWVudDogRG9jdW1lbnREZXNjcmlwdGlvbikge1xuICAgIHRoaXMuX2RvY3VtZW50ID0gZG9jdW1lbnQ7XG4gIH1cblxuICBnZXQgZG9jdW1lbnQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2RvY3VtZW50O1xuICB9XG5cbiAgZ2V0IHNjYWxlKCkge1xuICAgIHJldHVybiB0aGlzLl96b29tIC8gMTAwO1xuICB9XG5cbiAgYWRkRmllbGQoZmllbGQ6IFRlbXBsYXRlRmllbGQpIHtcbiAgICBjb25zdCBkeW5hbWljRGlyZWN0aXZlID0gdGhpcy5ob3N0aW5nQ29tcG9uZW50c1NlcnZpY2UuZmluZChmaWVsZC5wYWdlTnVtYmVyKTtcbiAgICBpZiAoZHluYW1pY0RpcmVjdGl2ZSkge1xuXG4gICAgICBjb25zdCB2aWV3Q29udGFpbmVyUmVmID0gZHluYW1pY0RpcmVjdGl2ZS52aWV3Q29udGFpbmVyUmVmO1xuICAgICAgY29uc3QgZmllbGRDb21wb25lbnQgPSB0aGlzLmFkZER5bmFtaWNDb21wb25lbnRTZXJ2aWNlLmFkZER5bmFtaWNDb21wb25lbnQodmlld0NvbnRhaW5lclJlZiwgRmllbGRDb21wb25lbnQpO1xuXG4gICAgICBjb25zdCB3cmFwcGVyID0gbmV3IEZpZWxkV3JhcHBlcihmaWVsZENvbXBvbmVudCk7XG4gICAgICBjb25zdCBwYWdlTW9kZWwgPSB0aGlzLmRvY3VtZW50LnBhZ2VzLmZpbmQoZnVuY3Rpb24gKHApIHtcbiAgICAgICAgcmV0dXJuIHAubnVtYmVyID09PSBmaWVsZC5wYWdlTnVtYmVyO1xuICAgICAgfSk7XG4gICAgICB3cmFwcGVyLmZpZWxkQ29tcG9uZW50LnBhZ2VTaXplID0gbmV3IFNpemUocGFnZU1vZGVsLndpZHRoLCBwYWdlTW9kZWwuaGVpZ2h0KTtcbiAgICAgIHdyYXBwZXIuZmllbGRDb21wb25lbnQuZmllbGQgPSBmaWVsZDtcbiAgICAgIHdyYXBwZXIuY29udGV4dE1lbnVTdWJzY3JpcHRpb24gPSB3cmFwcGVyLmZpZWxkQ29tcG9uZW50LmNvbnRleHRNZW51Q2xpY2suc3Vic2NyaWJlKGV2ZW50ID0+IHRoaXMuZmllbGRDb250ZXh0TWVudUNsaWNrKGV2ZW50KSk7XG5cbiAgICAgIHRoaXMuZmllbGRXcmFwcGVycy5zZXQoZmllbGQsIHdyYXBwZXIpO1xuICAgIH1cbiAgfVxuXG4gIGZpZWxkQ29udGV4dE1lbnVDbGljayhldmVudDogRmllbGRDb250ZXh0TWVudUNsaWNrKSB7XG4gICAgaWYgKGV2ZW50LmFjdGlvbiA9PT0gXCJyZW5hbWVcIikge1xuICAgICAgdGhpcy5maWVsZE5hbWVNb2RhbC5vcGVyYXRpb25JZCA9IGV2ZW50LmZpZWxkTmFtZTtcbiAgICAgIHRoaXMuZmllbGROYW1lTW9kYWwuaW5pdGlhbFZhbHVlID0gZXZlbnQuZmllbGROYW1lO1xuICAgICAgdGhpcy5fbW9kYWxTZXJ2aWNlLm9wZW4oXCJGaWVsZE5hbWVNb2RhbFwiKTtcblxuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmIChldmVudC5hY3Rpb24gPT09IFwicmVtb3ZlXCIpIHtcbiAgICAgIHRoaXMuX3RlbXBsYXRlLnJlbW92ZUZpZWxkQnlOYW1lKGV2ZW50LmZpZWxkTmFtZSk7XG5cbiAgICAgIHJldHVybjtcbiAgICB9XG4gIH1cblxuICBmaWVsZE5hbWVNb2RhbEFjY2VwdChldmVudCkge1xuICAgIGNvbnN0IG9sZEZpZWxkTmFtZSA9IGV2ZW50LmlkO1xuICAgIGNvbnN0IG5ld0ZpZWxkTmFtZSA9IGV2ZW50Lm5ld1ZhbHVlO1xuXG4gICAgaWYgKG9sZEZpZWxkTmFtZSAhPT0gbmV3RmllbGROYW1lKSB7XG4gICAgICBjb25zdCBleGlzdEZpZWxkV2l0aE5hbWUgPSB0aGlzLl90ZW1wbGF0ZS5nZXRGaWVsZEJ5TmFtZShuZXdGaWVsZE5hbWUpO1xuICAgICAgaWYgKGV4aXN0RmllbGRXaXRoTmFtZSkge1xuICAgICAgICB0aGlzLmZpZWxkTmFtZU1vZGFsLmVycm9yID0gXCJGaWVsZCB3aXRoIHRoZSBzYW1lIG5hbWUgYWxyZWFkeSBleGlzdHNcIjtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgIH1cblxuICAgIHRoaXMuX21vZGFsU2VydmljZS5jbG9zZShcIkZpZWxkTmFtZU1vZGFsXCIpO1xuICAgIGNvbnN0IGZpZWxkID0gdGhpcy5fdGVtcGxhdGUuZ2V0RmllbGRCeU5hbWUob2xkRmllbGROYW1lKTtcbiAgICBpZiAoZmllbGQpIHtcbiAgICAgIGZpZWxkLm5hbWUgPSBuZXdGaWVsZE5hbWU7XG4gICAgfVxuICB9XG5cbiAgcmVtb3ZlRmllbGRzKCkge1xuICAgIHRoaXMuZmllbGRXcmFwcGVycy5mb3JFYWNoKHdyYXBwZXIgPT4ge1xuICAgICAgd3JhcHBlci5kZXN0cm95KCk7XG4gICAgfSk7XG5cbiAgICB0aGlzLmZpZWxkV3JhcHBlcnMuY2xlYXIoKTtcbiAgfVxuXG4gIHJlbW92ZUZpZWxkKGZpZWxkOiBUZW1wbGF0ZUZpZWxkKSB7XG4gICAgY29uc3Qgd3JhcHBlciA9IHRoaXMuZmllbGRXcmFwcGVycy5nZXQoZmllbGQpO1xuICAgIGlmICh3cmFwcGVyKSB7XG4gICAgICB3cmFwcGVyLmRlc3Ryb3koKTtcbiAgICB9XG4gICAgdGhpcy5maWVsZFdyYXBwZXJzLmRlbGV0ZShmaWVsZCk7XG4gIH1cblxuICBwcml2YXRlIGdldEN1cnJlbnRQb3NpdGlvbihwb3NpdGlvbiwgcGFnZSkge1xuICAgIGNvbnN0IHggPSAocG9zaXRpb24ueCAtIHBhZ2Uub2Zmc2V0KCkubGVmdCk7XG4gICAgY29uc3QgeSA9IChwb3NpdGlvbi55IC0gcGFnZS5vZmZzZXQoKS50b3ApO1xuICAgIHJldHVybiBuZXcgUG9pbnQoeCwgeSk7XG4gIH1cblxuICAvLyBASG9zdExpc3RlbmVyKCdkb2N1bWVudDptb3VzZWRvd24nLCBbJyRldmVudCddKVxuICAvLyBvbk1vdXNlRG93bigkZXZlbnQ6IE1vdXNlRXZlbnQpIHtcbiAgLy8gICBjb25zdCBwb3MgPSBVdGlscy5nZXRNb3VzZVBvc2l0aW9uKCRldmVudCk7XG5cbiAgLy8gICBsZXQgZSA9IGRvY3VtZW50LmVsZW1lbnRGcm9tUG9pbnQocG9zLngsIHBvcy55KTtcbiAgLy8gfVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICB9XG5cbiAgbmdBZnRlclZpZXdJbml0KCk6IHZvaWQge1xuICAgIHRoaXMudXBkYXRlQWN0aXZlUGFnZSgpO1xuICB9XG5cbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuX2ZpZWxkQWRkZWRTdWJzY3JpcHRpb24pIHtcbiAgICAgIHRoaXMuX2ZpZWxkQWRkZWRTdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5fZmllbGRSZW1vdmVkU3Vic2NyaXB0aW9uKSB7XG4gICAgICB0aGlzLl9maWVsZFJlbW92ZWRTdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5fY3VycmVudFRlbXBsYXRlQ2hhbmdlZFN1YnNjcmlwdGlvbikge1xuICAgICAgdGhpcy5fY3VycmVudFRlbXBsYXRlQ2hhbmdlZFN1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpO1xuICAgIH1cbiAgfVxuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgX21vZGFsU2VydmljZTogTW9kYWxTZXJ2aWNlLFxuICAgIHByaXZhdGUgaG9zdGluZ0NvbXBvbmVudHNTZXJ2aWNlOiBIb3N0aW5nRHluYW1pY0NvbXBvbmVudFNlcnZpY2UsXG4gICAgcHJpdmF0ZSBhZGREeW5hbWljQ29tcG9uZW50U2VydmljZTogQWRkRHluYW1pY0NvbXBvbmVudFNlcnZpY2UsXG4gICAgcHJpdmF0ZSBfem9vbVNlcnZpY2U6IFpvb21TZXJ2aWNlLFxuICAgIHByaXZhdGUgX3RlbXBsYXRlU2VydmljZTogVGVtcGxhdGVTZXJ2aWNlLFxuICAgIHByaXZhdGUgX2RvY3VtZW50UGFnZVNlcnZpY2U6IERvY3VtZW50UGFnZVNlcnZpY2UpIHtcblxuICAgIHRoaXMuX3pvb20gPSBfem9vbVNlcnZpY2Uuem9vbTtcbiAgICBfem9vbVNlcnZpY2Uuem9vbUNoYW5nZS5zdWJzY3JpYmUoKHpvb206IG51bWJlcikgPT4ge1xuICAgICAgdGhpcy5fem9vbSA9IHpvb207XG4gICAgfSk7XG5cbiAgICB0aGlzLl9jdXJyZW50VGVtcGxhdGVDaGFuZ2VkU3Vic2NyaXB0aW9uID0gX3RlbXBsYXRlU2VydmljZS5jdXJyZW50VGVtcGxhdGVDaGFuZ2VkXG4gICAgICAuc3Vic2NyaWJlKHRlbXBsYXRlID0+IHRoaXMuc2V0VGVtcGxhdGUodGVtcGxhdGUpKTtcblxuICAgIHRoaXMuc2V0VGVtcGxhdGUodGhpcy5fdGVtcGxhdGVTZXJ2aWNlLmN1cnJlbnRUZW1wbGF0ZSk7XG5cbiAgICB0aGlzLl9kb2N1bWVudFBhZ2VTZXJ2aWNlLmFjdGl2ZVBhZ2VDaGFuZ2VkLnN1YnNjcmliZShfID0+IHRoaXMudXBkYXRlQWN0aXZlUGFnZSgpKTtcbiAgfVxuXG4gIGRvdWJsZVRhcCgkZXZlbnQ6IFRvdWNoRXZlbnQpIHtcbiAgICAvLyAgJGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gIH1cblxuICBzZXRBY3RpdmVQYWdlKCRldmVudCkge1xuICAgICRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgY29uc3QgcG9zaXRpb24gPSBVdGlscy5nZXRNb3VzZVBvc2l0aW9uKCRldmVudCk7XG5cbiAgICBjb25zdCBlbGVtZW50cyA9IGRvY3VtZW50LmVsZW1lbnRzRnJvbVBvaW50KHBvc2l0aW9uLngsIHBvc2l0aW9uLnkpO1xuICAgIGNvbnN0IGN1cnJlbnRQYWdlID0gZWxlbWVudHMuZmluZCh4ID0+IHguaWQgJiYgeC5pZC5zdGFydHNXaXRoKFwicGFnZS1cIikpO1xuICAgIGlmIChjdXJyZW50UGFnZSkge1xuICAgICAgdGhpcy5fZG9jdW1lbnRQYWdlU2VydmljZS5zZXRBY3RpdmVQYWdlKHBhcnNlSW50KGN1cnJlbnRQYWdlLmlkLnN1YnN0cmluZyhcInBhZ2UtXCIubGVuZ3RoKSwgMTApKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIHVwZGF0ZUFjdGl2ZVBhZ2UoKSB7XG4gICAgY29uc3QgYWN0aXZlUGFnZSA9IFwicGFnZS1cIiArIHRoaXMuX2RvY3VtZW50UGFnZVNlcnZpY2UuYWN0aXZlUGFnZTtcblxuICAgIGNvbnN0IGVsZW1lbnRzID0gdGhpcy5zdXJmYWNlLm5hdGl2ZUVsZW1lbnQucXVlcnlTZWxlY3RvckFsbCgnZ2QtcGFnZScpO1xuICAgIGVsZW1lbnRzLmZvckVhY2goZWxlbWVudCA9PiB7XG4gICAgICBjb25zdCBjaGlsZCA9IChlbGVtZW50IGFzIEhUTUxFbGVtZW50KS5jaGlsZHJlblswXTtcbiAgICAgIGlmIChjaGlsZC5pZCA9PT0gYWN0aXZlUGFnZSkge1xuICAgICAgICAoY2hpbGQgYXMgSFRNTEVsZW1lbnQpLnN0eWxlLm9wYWNpdHkgPSAnMSc7XG4gICAgICAgIChjaGlsZCBhcyBIVE1MRWxlbWVudCkucGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50LnN0eWxlLmJhY2tncm91bmQgPSAnI0ZGRkZGRic7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAoY2hpbGQgYXMgSFRNTEVsZW1lbnQpLnN0eWxlLm9wYWNpdHkgPSAnMC41JztcbiAgICAgICAgKGNoaWxkIGFzIEhUTUxFbGVtZW50KS5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQuc3R5bGUuYmFja2dyb3VuZCA9ICcjNjg4Mjk2JztcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIHByaXZhdGUgc2V0VGVtcGxhdGUodGVtcGxhdGU6IFRlbXBsYXRlKSB7XG4gICAgdGhpcy5fdGVtcGxhdGUgPSB0ZW1wbGF0ZTtcblxuICAgIGlmICh0aGlzLl9maWVsZEFkZGVkU3Vic2NyaXB0aW9uKSB7XG4gICAgICB0aGlzLl9maWVsZEFkZGVkU3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuX2ZpZWxkUmVtb3ZlZFN1YnNjcmlwdGlvbikge1xuICAgICAgdGhpcy5fZmllbGRSZW1vdmVkU3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XG4gICAgfVxuXG4gICAgaWYgKCF0aGlzLl90ZW1wbGF0ZSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRoaXMuX2ZpZWxkQWRkZWRTdWJzY3JpcHRpb24gPSB0aGlzLl90ZW1wbGF0ZS5hZGRlZEZpZWxkLnN1YnNjcmliZShmaWVsZCA9PiB0aGlzLmFkZEZpZWxkKGZpZWxkKSk7XG4gICAgdGhpcy5fZmllbGRSZW1vdmVkU3Vic2NyaXB0aW9uID0gdGhpcy5fdGVtcGxhdGUucmVtb3ZlZEZpZWxkLnN1YnNjcmliZShmaWVsZCA9PiB0aGlzLnJlbW92ZUZpZWxkKGZpZWxkKSk7XG5cbiAgICB0aGlzLnJlbW92ZUZpZWxkcygpO1xuICAgIHRoaXMuX3RlbXBsYXRlID0gdGVtcGxhdGU7XG4gICAgdGhpcy5fdGVtcGxhdGUuZmllbGRzLmZvckVhY2goZmllbGQgPT4ge1xuICAgICAgdGhpcy5hZGRGaWVsZChmaWVsZCk7XG4gICAgfSk7XG4gIH1cbn1cblxuY2xhc3MgRmllbGRXcmFwcGVyIHtcbiAgZmllbGRDb21wb25lbnQ6IEZpZWxkQ29tcG9uZW50O1xuICBjb250ZXh0TWVudVN1YnNjcmlwdGlvbjogU3Vic2NyaXB0aW9uO1xuXG4gIGNvbnN0cnVjdG9yKHB1YmxpYyByZWY6IGFueSkge1xuICAgIHRoaXMuZmllbGRDb21wb25lbnQgPSA8RmllbGRDb21wb25lbnQ+cmVmLmluc3RhbmNlO1xuICB9XG5cbiAgZGVzdHJveSgpIHtcbiAgICBpZiAodGhpcy5yZWYpIHtcbiAgICAgIHRoaXMucmVmLmRlc3Ryb3koKTtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5jb250ZXh0TWVudVN1YnNjcmlwdGlvbikge1xuICAgICAgdGhpcy5jb250ZXh0TWVudVN1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpO1xuICAgIH1cbiAgfVxufSJdfQ==