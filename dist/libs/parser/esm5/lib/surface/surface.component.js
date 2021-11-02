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
var $ = jquery;
var SurfaceComponent = /** @class */ (function () {
    function SurfaceComponent(_modalService, hostingComponentsService, addDynamicComponentService, _zoomService, _templateService, _documentPageService) {
        var _this = this;
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
        function (zoom) {
            _this._zoom = zoom;
        }));
        this._currentTemplateChangedSubscription = _templateService.currentTemplateChanged
            .subscribe((/**
         * @param {?} template
         * @return {?}
         */
        function (template) { return _this.setTemplate(template); }));
        this.setTemplate(this._templateService.currentTemplate);
        this._documentPageService.activePageChanged.subscribe((/**
         * @param {?} _
         * @return {?}
         */
        function (_) { return _this.updateActivePage(); }));
    }
    Object.defineProperty(SurfaceComponent.prototype, "document", {
        get: /**
         * @return {?}
         */
        function () {
            return this._document;
        },
        set: /**
         * @param {?} document
         * @return {?}
         */
        function (document) {
            this._document = document;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SurfaceComponent.prototype, "scale", {
        get: /**
         * @return {?}
         */
        function () {
            return this._zoom / 100;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} field
     * @return {?}
     */
    SurfaceComponent.prototype.addField = /**
     * @param {?} field
     * @return {?}
     */
    function (field) {
        var _this = this;
        /** @type {?} */
        var dynamicDirective = this.hostingComponentsService.find(field.pageNumber);
        if (dynamicDirective) {
            /** @type {?} */
            var viewContainerRef = dynamicDirective.viewContainerRef;
            /** @type {?} */
            var fieldComponent = this.addDynamicComponentService.addDynamicComponent(viewContainerRef, FieldComponent);
            /** @type {?} */
            var wrapper = new FieldWrapper(fieldComponent);
            /** @type {?} */
            var pageModel = this.document.pages.find((/**
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
            function (event) { return _this.fieldContextMenuClick(event); }));
            this.fieldWrappers.set(field, wrapper);
        }
    };
    /**
     * @param {?} event
     * @return {?}
     */
    SurfaceComponent.prototype.fieldContextMenuClick = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
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
    };
    /**
     * @param {?} event
     * @return {?}
     */
    SurfaceComponent.prototype.fieldNameModalAccept = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        /** @type {?} */
        var oldFieldName = event.id;
        /** @type {?} */
        var newFieldName = event.newValue;
        if (oldFieldName !== newFieldName) {
            /** @type {?} */
            var existFieldWithName = this._template.getFieldByName(newFieldName);
            if (existFieldWithName) {
                this.fieldNameModal.error = "Field with the same name already exists";
                return;
            }
        }
        this._modalService.close("FieldNameModal");
        /** @type {?} */
        var field = this._template.getFieldByName(oldFieldName);
        if (field) {
            field.name = newFieldName;
        }
    };
    /**
     * @return {?}
     */
    SurfaceComponent.prototype.removeFields = /**
     * @return {?}
     */
    function () {
        this.fieldWrappers.forEach((/**
         * @param {?} wrapper
         * @return {?}
         */
        function (wrapper) {
            wrapper.destroy();
        }));
        this.fieldWrappers.clear();
    };
    /**
     * @param {?} field
     * @return {?}
     */
    SurfaceComponent.prototype.removeField = /**
     * @param {?} field
     * @return {?}
     */
    function (field) {
        /** @type {?} */
        var wrapper = this.fieldWrappers.get(field);
        if (wrapper) {
            wrapper.destroy();
        }
        this.fieldWrappers.delete(field);
    };
    /**
     * @private
     * @param {?} position
     * @param {?} page
     * @return {?}
     */
    SurfaceComponent.prototype.getCurrentPosition = /**
     * @private
     * @param {?} position
     * @param {?} page
     * @return {?}
     */
    function (position, page) {
        /** @type {?} */
        var x = (position.x - page.offset().left);
        /** @type {?} */
        var y = (position.y - page.offset().top);
        return new Point(x, y);
    };
    // @HostListener('document:mousedown', ['$event'])
    // onMouseDown($event: MouseEvent) {
    //   const pos = Utils.getMousePosition($event);
    //   let e = document.elementFromPoint(pos.x, pos.y);
    // }
    // @HostListener('document:mousedown', ['$event'])
    // onMouseDown($event: MouseEvent) {
    //   const pos = Utils.getMousePosition($event);
    //   let e = document.elementFromPoint(pos.x, pos.y);
    // }
    /**
     * @return {?}
     */
    SurfaceComponent.prototype.ngOnInit = 
    // @HostListener('document:mousedown', ['$event'])
    // onMouseDown($event: MouseEvent) {
    //   const pos = Utils.getMousePosition($event);
    //   let e = document.elementFromPoint(pos.x, pos.y);
    // }
    /**
     * @return {?}
     */
    function () {
    };
    /**
     * @return {?}
     */
    SurfaceComponent.prototype.ngAfterViewInit = /**
     * @return {?}
     */
    function () {
        this.updateActivePage();
    };
    /**
     * @return {?}
     */
    SurfaceComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        if (this._fieldAddedSubscription) {
            this._fieldAddedSubscription.unsubscribe();
        }
        if (this._fieldRemovedSubscription) {
            this._fieldRemovedSubscription.unsubscribe();
        }
        if (this._currentTemplateChangedSubscription) {
            this._currentTemplateChangedSubscription.unsubscribe();
        }
    };
    /**
     * @param {?} $event
     * @return {?}
     */
    SurfaceComponent.prototype.doubleTap = /**
     * @param {?} $event
     * @return {?}
     */
    function ($event) {
        //  $event.preventDefault();
    };
    /**
     * @param {?} $event
     * @return {?}
     */
    SurfaceComponent.prototype.setActivePage = /**
     * @param {?} $event
     * @return {?}
     */
    function ($event) {
        $event.preventDefault();
        /** @type {?} */
        var position = Utils.getMousePosition($event);
        /** @type {?} */
        var elements = document.elementsFromPoint(position.x, position.y);
        /** @type {?} */
        var currentPage = elements.find((/**
         * @param {?} x
         * @return {?}
         */
        function (x) { return x.id && x.id.startsWith("page-"); }));
        if (currentPage) {
            this._documentPageService.setActivePage(parseInt(currentPage.id.substring("page-".length), 10));
        }
    };
    /**
     * @private
     * @return {?}
     */
    SurfaceComponent.prototype.updateActivePage = /**
     * @private
     * @return {?}
     */
    function () {
        /** @type {?} */
        var activePage = "page-" + this._documentPageService.activePage;
        /** @type {?} */
        var elements = this.surface.nativeElement.querySelectorAll('gd-page');
        elements.forEach((/**
         * @param {?} element
         * @return {?}
         */
        function (element) {
            /** @type {?} */
            var child = ((/** @type {?} */ (element))).children[0];
            if (child.id === activePage) {
                ((/** @type {?} */ (child))).style.opacity = '1';
                ((/** @type {?} */ (child))).parentElement.parentElement.style.background = '#FFFFFF';
            }
            else {
                ((/** @type {?} */ (child))).style.opacity = '0.5';
                ((/** @type {?} */ (child))).parentElement.parentElement.style.background = '#688296';
            }
        }));
    };
    /**
     * @private
     * @param {?} template
     * @return {?}
     */
    SurfaceComponent.prototype.setTemplate = /**
     * @private
     * @param {?} template
     * @return {?}
     */
    function (template) {
        var _this = this;
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
        function (field) { return _this.addField(field); }));
        this._fieldRemovedSubscription = this._template.removedField.subscribe((/**
         * @param {?} field
         * @return {?}
         */
        function (field) { return _this.removeField(field); }));
        this.removeFields();
        this._template = template;
        this._template.fields.forEach((/**
         * @param {?} field
         * @return {?}
         */
        function (field) {
            _this.addField(field);
        }));
    };
    SurfaceComponent.decorators = [
        { type: Component, args: [{
                    selector: 'gd-surface',
                    template: "<div #surface class=\"doc-panel\">\n  <gd-document class=\"gd-document\" *ngIf=\"document\" [mode]=\"false\" [file]=\"document\" gdScrollable gdRenderPrint\n    [htmlMode]=\"false\" (click)=\"setActivePage($event)\"></gd-document>\n\n  <gd-rename-modal #fieldNameModal [id]=\"'FieldNameModal'\" [title]=\"'Rename Field'\"\n    [promptText]=\"'Enter a new field name:'\" [acceptText]=\"'Save'\" (acceptEvent)=\"fieldNameModalAccept($event)\">\n  </gd-rename-modal>\n</div>",
                    styles: ["@import url(https://fonts.googleapis.com/css?family=Open+Sans&display=swap);.red{box-shadow:10px 5px 5px red}:host *{font-family:'Open Sans',Arial,Helvetica,sans-serif}::ng-deep .top-panel{align-content:flex-start}.gd-document{position:absolute;height:calc(100vh - 60px);width:calc(100vw - 300px);left:0;top:60px;right:-300px;overflow:auto}::ng-deep .panzoom{-webkit-box-pack:unset!important;justify-content:unset!important}::ng-deep .page{position:relative}::ng-deep .gd-page-image{width:unset;height:unset}"]
                }] }
    ];
    /** @nocollapse */
    SurfaceComponent.ctorParameters = function () { return [
        { type: ModalService },
        { type: HostingDynamicComponentService },
        { type: AddDynamicComponentService },
        { type: ZoomService },
        { type: TemplateService },
        { type: DocumentPageService }
    ]; };
    SurfaceComponent.propDecorators = {
        fieldNameModal: [{ type: ViewChild, args: ['fieldNameModal', { static: true },] }],
        surface: [{ type: ViewChild, args: ['surface', { static: true },] }],
        document: [{ type: Input }]
    };
    return SurfaceComponent;
}());
export { SurfaceComponent };
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
var FieldWrapper = /** @class */ (function () {
    function FieldWrapper(ref) {
        this.ref = ref;
        this.fieldComponent = (/** @type {?} */ (ref.instance));
    }
    /**
     * @return {?}
     */
    FieldWrapper.prototype.destroy = /**
     * @return {?}
     */
    function () {
        if (this.ref) {
            this.ref.destroy();
        }
        if (this.contextMenuSubscription) {
            this.contextMenuSubscription.unsubscribe();
        }
    };
    return FieldWrapper;
}());
if (false) {
    /** @type {?} */
    FieldWrapper.prototype.fieldComponent;
    /** @type {?} */
    FieldWrapper.prototype.contextMenuSubscription;
    /** @type {?} */
    FieldWrapper.prototype.ref;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3VyZmFjZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ3JvdXBkb2NzLmV4YW1wbGVzLmFuZ3VsYXIvcGFyc2VyLyIsInNvdXJjZXMiOlsibGliL3N1cmZhY2Uvc3VyZmFjZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBaUIsU0FBUyxFQUFnQixVQUFVLEVBQWdCLEtBQUssRUFBcUIsU0FBUyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3RJLE9BQU8sRUFDTCwwQkFBMEIsRUFJMUIsOEJBQThCLEVBRTlCLFlBQVksRUFHWixLQUFLLEVBRUwsV0FBVyxFQUNaLE1BQU0sK0NBQStDLENBQUM7QUFDdkQsT0FBTyxFQUFFLG1CQUFtQixFQUFFLEtBQUssRUFBRSxJQUFJLEVBQXVDLE1BQU0sZUFBZSxDQUFDO0FBQ3RHLE9BQU8sRUFBRSxjQUFjLEVBQXlCLE1BQU0sMEJBQTBCLENBQUM7QUFDakYsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sd0NBQXdDLENBQUM7QUFFOUUsT0FBTyxLQUFLLE1BQU0sTUFBTSxRQUFRLENBQUM7QUFFakMsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBRXRELE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLDBCQUEwQixDQUFDOztJQUV6RCxDQUFDLEdBQUcsTUFBTTtBQUdoQjtJQXlJRSwwQkFDVSxhQUEyQixFQUMzQix3QkFBd0QsRUFDeEQsMEJBQXNELEVBQ3RELFlBQXlCLEVBQ3pCLGdCQUFpQyxFQUNqQyxvQkFBeUM7UUFObkQsaUJBbUJDO1FBbEJTLGtCQUFhLEdBQWIsYUFBYSxDQUFjO1FBQzNCLDZCQUF3QixHQUF4Qix3QkFBd0IsQ0FBZ0M7UUFDeEQsK0JBQTBCLEdBQTFCLDBCQUEwQixDQUE0QjtRQUN0RCxpQkFBWSxHQUFaLFlBQVksQ0FBYTtRQUN6QixxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQWlCO1FBQ2pDLHlCQUFvQixH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QyxJQUFJLENBQUMsdUJBQXVCLENBQUMsV0FBVyxFQUFFLENBQUM7U0FDNUM7SUFDSCxDQUFDO0lBQ0gsbUJBQUM7QUFBRCxDQUFDLEFBakJELElBaUJDOzs7SUFoQkMsc0NBQStCOztJQUMvQiwrQ0FBc0M7O0lBRTFCLDJCQUFlIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQWZ0ZXJWaWV3SW5pdCwgQ29tcG9uZW50LCBDb21wb25lbnRSZWYsIEVsZW1lbnRSZWYsIEhvc3RMaXN0ZW5lciwgSW5wdXQsIE9uRGVzdHJveSwgT25Jbml0LCBWaWV3Q2hpbGQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7XG4gIEFkZER5bmFtaWNDb21wb25lbnRTZXJ2aWNlLFxuICBDb21tb25Nb2RhbHMsXG4gIEZpbGVDcmVkZW50aWFscyxcbiAgRmlsZU1vZGVsLCBGb3JtYXR0aW5nLFxuICBIb3N0aW5nRHluYW1pY0NvbXBvbmVudFNlcnZpY2UsXG4gIExvZ29Db21wb25lbnQsXG4gIE1vZGFsU2VydmljZSxcbiAgTmF2aWdhdGVTZXJ2aWNlLCBQYWdlUHJlbG9hZFNlcnZpY2UsIFBhc3N3b3JkU2VydmljZSxcbiAgVG9wVGFiQWN0aXZhdG9yU2VydmljZSwgVXBsb2FkRmlsZXNTZXJ2aWNlLFxuICBVdGlscyxcbiAgV2luZG93U2VydmljZSxcbiAgWm9vbVNlcnZpY2Vcbn0gZnJvbSBcIkBncm91cGRvY3MuZXhhbXBsZXMuYW5ndWxhci9jb21tb24tY29tcG9uZW50c1wiO1xuaW1wb3J0IHsgRG9jdW1lbnREZXNjcmlwdGlvbiwgUG9pbnQsIFNpemUsIFRlbXBsYXRlLCBUZW1wbGF0ZUlkLCBUZW1wbGF0ZUZpZWxkIH0gZnJvbSAnLi4vYXBwLW1vZGVscyc7XG5pbXBvcnQgeyBGaWVsZENvbXBvbmVudCwgRmllbGRDb250ZXh0TWVudUNsaWNrIH0gZnJvbSBcIi4uL2ZpZWxkL2ZpZWxkLmNvbXBvbmVudFwiO1xuaW1wb3J0IHsgUmVuYW1lTW9kYWxDb21wb25lbnQgfSBmcm9tICcuLi9yZW5hbWUtbW9kYWwvcmVuYW1lLW1vZGFsLmNvbXBvbmVudCc7XG5cbmltcG9ydCAqIGFzIGpxdWVyeSBmcm9tICdqcXVlcnknO1xuaW1wb3J0IHsgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBUZW1wbGF0ZVNlcnZpY2UgfSBmcm9tICcuLi90ZW1wbGF0ZS5zZXJ2aWNlJztcbmltcG9ydCB7IGV2ZW50TmFtZXMgfSBmcm9tICdwcm9jZXNzJztcbmltcG9ydCB7IERvY3VtZW50UGFnZVNlcnZpY2UgfSBmcm9tICcuLi9kb2N1bWVudC1wYWdlLnNlcnZpY2UnO1xuXG5jb25zdCAkID0ganF1ZXJ5O1xuXG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2dkLXN1cmZhY2UnLFxuICB0ZW1wbGF0ZVVybDogJy4vc3VyZmFjZS5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL3N1cmZhY2UuY29tcG9uZW50Lmxlc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBTdXJmYWNlQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3ksIEFmdGVyVmlld0luaXQge1xuICBwcml2YXRlIF9kb2N1bWVudDogRG9jdW1lbnREZXNjcmlwdGlvbjtcbiAgcHJpdmF0ZSBfdGVtcGxhdGU6IFRlbXBsYXRlO1xuICBwcml2YXRlIF96b29tOiBudW1iZXI7XG4gIHByaXZhdGUgX2ZpZWxkQWRkZWRTdWJzY3JpcHRpb246IFN1YnNjcmlwdGlvbjtcbiAgcHJpdmF0ZSBfZmllbGRSZW1vdmVkU3Vic2NyaXB0aW9uOiBTdWJzY3JpcHRpb247XG4gIHByaXZhdGUgX2N1cnJlbnRUZW1wbGF0ZUNoYW5nZWRTdWJzY3JpcHRpb246IFN1YnNjcmlwdGlvbjtcblxuICAvL3ByaXZhdGUgZmllbGRDb21wb25lbnRSZWZzID0gbmV3IE1hcDxUZW1wbGF0ZUZpZWxkLCBDb21wb25lbnRSZWY8e30+PigpO1xuXG4gIHByaXZhdGUgZmllbGRXcmFwcGVycyA9IG5ldyBNYXA8VGVtcGxhdGVGaWVsZCwgRmllbGRXcmFwcGVyPigpO1xuXG5cbiAgQFZpZXdDaGlsZCgnZmllbGROYW1lTW9kYWwnLCB7IHN0YXRpYzogdHJ1ZSB9KSBmaWVsZE5hbWVNb2RhbDogUmVuYW1lTW9kYWxDb21wb25lbnQ7XG4gIEBWaWV3Q2hpbGQoJ3N1cmZhY2UnLCB7IHN0YXRpYzogdHJ1ZSB9KSBzdXJmYWNlOiBFbGVtZW50UmVmO1xuXG4gIEBJbnB1dCgpIHNldCBkb2N1bWVudChkb2N1bWVudDogRG9jdW1lbnREZXNjcmlwdGlvbikge1xuICAgIHRoaXMuX2RvY3VtZW50ID0gZG9jdW1lbnQ7XG4gIH1cblxuICBnZXQgZG9jdW1lbnQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2RvY3VtZW50O1xuICB9XG5cbiAgZ2V0IHNjYWxlKCkge1xuICAgIHJldHVybiB0aGlzLl96b29tIC8gMTAwO1xuICB9XG5cbiAgYWRkRmllbGQoZmllbGQ6IFRlbXBsYXRlRmllbGQpIHtcbiAgICBjb25zdCBkeW5hbWljRGlyZWN0aXZlID0gdGhpcy5ob3N0aW5nQ29tcG9uZW50c1NlcnZpY2UuZmluZChmaWVsZC5wYWdlTnVtYmVyKTtcbiAgICBpZiAoZHluYW1pY0RpcmVjdGl2ZSkge1xuXG4gICAgICBjb25zdCB2aWV3Q29udGFpbmVyUmVmID0gZHluYW1pY0RpcmVjdGl2ZS52aWV3Q29udGFpbmVyUmVmO1xuICAgICAgY29uc3QgZmllbGRDb21wb25lbnQgPSB0aGlzLmFkZER5bmFtaWNDb21wb25lbnRTZXJ2aWNlLmFkZER5bmFtaWNDb21wb25lbnQodmlld0NvbnRhaW5lclJlZiwgRmllbGRDb21wb25lbnQpO1xuXG4gICAgICBjb25zdCB3cmFwcGVyID0gbmV3IEZpZWxkV3JhcHBlcihmaWVsZENvbXBvbmVudCk7XG4gICAgICBjb25zdCBwYWdlTW9kZWwgPSB0aGlzLmRvY3VtZW50LnBhZ2VzLmZpbmQoZnVuY3Rpb24gKHApIHtcbiAgICAgICAgcmV0dXJuIHAubnVtYmVyID09PSBmaWVsZC5wYWdlTnVtYmVyO1xuICAgICAgfSk7XG4gICAgICB3cmFwcGVyLmZpZWxkQ29tcG9uZW50LnBhZ2VTaXplID0gbmV3IFNpemUocGFnZU1vZGVsLndpZHRoLCBwYWdlTW9kZWwuaGVpZ2h0KTtcbiAgICAgIHdyYXBwZXIuZmllbGRDb21wb25lbnQuZmllbGQgPSBmaWVsZDtcbiAgICAgIHdyYXBwZXIuY29udGV4dE1lbnVTdWJzY3JpcHRpb24gPSB3cmFwcGVyLmZpZWxkQ29tcG9uZW50LmNvbnRleHRNZW51Q2xpY2suc3Vic2NyaWJlKGV2ZW50ID0+IHRoaXMuZmllbGRDb250ZXh0TWVudUNsaWNrKGV2ZW50KSk7XG5cbiAgICAgIHRoaXMuZmllbGRXcmFwcGVycy5zZXQoZmllbGQsIHdyYXBwZXIpO1xuICAgIH1cbiAgfVxuXG4gIGZpZWxkQ29udGV4dE1lbnVDbGljayhldmVudDogRmllbGRDb250ZXh0TWVudUNsaWNrKSB7XG4gICAgaWYgKGV2ZW50LmFjdGlvbiA9PT0gXCJyZW5hbWVcIikge1xuICAgICAgdGhpcy5maWVsZE5hbWVNb2RhbC5vcGVyYXRpb25JZCA9IGV2ZW50LmZpZWxkTmFtZTtcbiAgICAgIHRoaXMuZmllbGROYW1lTW9kYWwuaW5pdGlhbFZhbHVlID0gZXZlbnQuZmllbGROYW1lO1xuICAgICAgdGhpcy5fbW9kYWxTZXJ2aWNlLm9wZW4oXCJGaWVsZE5hbWVNb2RhbFwiKTtcblxuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmIChldmVudC5hY3Rpb24gPT09IFwicmVtb3ZlXCIpIHtcbiAgICAgIHRoaXMuX3RlbXBsYXRlLnJlbW92ZUZpZWxkQnlOYW1lKGV2ZW50LmZpZWxkTmFtZSk7XG5cbiAgICAgIHJldHVybjtcbiAgICB9XG4gIH1cblxuICBmaWVsZE5hbWVNb2RhbEFjY2VwdChldmVudCkge1xuICAgIGNvbnN0IG9sZEZpZWxkTmFtZSA9IGV2ZW50LmlkO1xuICAgIGNvbnN0IG5ld0ZpZWxkTmFtZSA9IGV2ZW50Lm5ld1ZhbHVlO1xuXG4gICAgaWYgKG9sZEZpZWxkTmFtZSAhPT0gbmV3RmllbGROYW1lKSB7XG4gICAgICBjb25zdCBleGlzdEZpZWxkV2l0aE5hbWUgPSB0aGlzLl90ZW1wbGF0ZS5nZXRGaWVsZEJ5TmFtZShuZXdGaWVsZE5hbWUpO1xuICAgICAgaWYgKGV4aXN0RmllbGRXaXRoTmFtZSkge1xuICAgICAgICB0aGlzLmZpZWxkTmFtZU1vZGFsLmVycm9yID0gXCJGaWVsZCB3aXRoIHRoZSBzYW1lIG5hbWUgYWxyZWFkeSBleGlzdHNcIjtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgIH1cblxuICAgIHRoaXMuX21vZGFsU2VydmljZS5jbG9zZShcIkZpZWxkTmFtZU1vZGFsXCIpO1xuICAgIGNvbnN0IGZpZWxkID0gdGhpcy5fdGVtcGxhdGUuZ2V0RmllbGRCeU5hbWUob2xkRmllbGROYW1lKTtcbiAgICBpZiAoZmllbGQpIHtcbiAgICAgIGZpZWxkLm5hbWUgPSBuZXdGaWVsZE5hbWU7XG4gICAgfVxuICB9XG5cbiAgcmVtb3ZlRmllbGRzKCkge1xuICAgIHRoaXMuZmllbGRXcmFwcGVycy5mb3JFYWNoKHdyYXBwZXIgPT4ge1xuICAgICAgd3JhcHBlci5kZXN0cm95KCk7XG4gICAgfSk7XG5cbiAgICB0aGlzLmZpZWxkV3JhcHBlcnMuY2xlYXIoKTtcbiAgfVxuXG4gIHJlbW92ZUZpZWxkKGZpZWxkOiBUZW1wbGF0ZUZpZWxkKSB7XG4gICAgY29uc3Qgd3JhcHBlciA9IHRoaXMuZmllbGRXcmFwcGVycy5nZXQoZmllbGQpO1xuICAgIGlmICh3cmFwcGVyKSB7XG4gICAgICB3cmFwcGVyLmRlc3Ryb3koKTtcbiAgICB9XG4gICAgdGhpcy5maWVsZFdyYXBwZXJzLmRlbGV0ZShmaWVsZCk7XG4gIH1cblxuICBwcml2YXRlIGdldEN1cnJlbnRQb3NpdGlvbihwb3NpdGlvbiwgcGFnZSkge1xuICAgIGNvbnN0IHggPSAocG9zaXRpb24ueCAtIHBhZ2Uub2Zmc2V0KCkubGVmdCk7XG4gICAgY29uc3QgeSA9IChwb3NpdGlvbi55IC0gcGFnZS5vZmZzZXQoKS50b3ApO1xuICAgIHJldHVybiBuZXcgUG9pbnQoeCwgeSk7XG4gIH1cblxuICAvLyBASG9zdExpc3RlbmVyKCdkb2N1bWVudDptb3VzZWRvd24nLCBbJyRldmVudCddKVxuICAvLyBvbk1vdXNlRG93bigkZXZlbnQ6IE1vdXNlRXZlbnQpIHtcbiAgLy8gICBjb25zdCBwb3MgPSBVdGlscy5nZXRNb3VzZVBvc2l0aW9uKCRldmVudCk7XG5cbiAgLy8gICBsZXQgZSA9IGRvY3VtZW50LmVsZW1lbnRGcm9tUG9pbnQocG9zLngsIHBvcy55KTtcbiAgLy8gfVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICB9XG5cbiAgbmdBZnRlclZpZXdJbml0KCk6IHZvaWQge1xuICAgIHRoaXMudXBkYXRlQWN0aXZlUGFnZSgpO1xuICB9XG5cbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuX2ZpZWxkQWRkZWRTdWJzY3JpcHRpb24pIHtcbiAgICAgIHRoaXMuX2ZpZWxkQWRkZWRTdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5fZmllbGRSZW1vdmVkU3Vic2NyaXB0aW9uKSB7XG4gICAgICB0aGlzLl9maWVsZFJlbW92ZWRTdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5fY3VycmVudFRlbXBsYXRlQ2hhbmdlZFN1YnNjcmlwdGlvbikge1xuICAgICAgdGhpcy5fY3VycmVudFRlbXBsYXRlQ2hhbmdlZFN1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpO1xuICAgIH1cbiAgfVxuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgX21vZGFsU2VydmljZTogTW9kYWxTZXJ2aWNlLFxuICAgIHByaXZhdGUgaG9zdGluZ0NvbXBvbmVudHNTZXJ2aWNlOiBIb3N0aW5nRHluYW1pY0NvbXBvbmVudFNlcnZpY2UsXG4gICAgcHJpdmF0ZSBhZGREeW5hbWljQ29tcG9uZW50U2VydmljZTogQWRkRHluYW1pY0NvbXBvbmVudFNlcnZpY2UsXG4gICAgcHJpdmF0ZSBfem9vbVNlcnZpY2U6IFpvb21TZXJ2aWNlLFxuICAgIHByaXZhdGUgX3RlbXBsYXRlU2VydmljZTogVGVtcGxhdGVTZXJ2aWNlLFxuICAgIHByaXZhdGUgX2RvY3VtZW50UGFnZVNlcnZpY2U6IERvY3VtZW50UGFnZVNlcnZpY2UpIHtcblxuICAgIHRoaXMuX3pvb20gPSBfem9vbVNlcnZpY2Uuem9vbTtcbiAgICBfem9vbVNlcnZpY2Uuem9vbUNoYW5nZS5zdWJzY3JpYmUoKHpvb206IG51bWJlcikgPT4ge1xuICAgICAgdGhpcy5fem9vbSA9IHpvb207XG4gICAgfSk7XG5cbiAgICB0aGlzLl9jdXJyZW50VGVtcGxhdGVDaGFuZ2VkU3Vic2NyaXB0aW9uID0gX3RlbXBsYXRlU2VydmljZS5jdXJyZW50VGVtcGxhdGVDaGFuZ2VkXG4gICAgICAuc3Vic2NyaWJlKHRlbXBsYXRlID0+IHRoaXMuc2V0VGVtcGxhdGUodGVtcGxhdGUpKTtcblxuICAgIHRoaXMuc2V0VGVtcGxhdGUodGhpcy5fdGVtcGxhdGVTZXJ2aWNlLmN1cnJlbnRUZW1wbGF0ZSk7XG5cbiAgICB0aGlzLl9kb2N1bWVudFBhZ2VTZXJ2aWNlLmFjdGl2ZVBhZ2VDaGFuZ2VkLnN1YnNjcmliZShfID0+IHRoaXMudXBkYXRlQWN0aXZlUGFnZSgpKTtcbiAgfVxuXG4gIGRvdWJsZVRhcCgkZXZlbnQ6IFRvdWNoRXZlbnQpIHtcbiAgICAvLyAgJGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gIH1cblxuICBzZXRBY3RpdmVQYWdlKCRldmVudCkge1xuICAgICRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgY29uc3QgcG9zaXRpb24gPSBVdGlscy5nZXRNb3VzZVBvc2l0aW9uKCRldmVudCk7XG5cbiAgICBjb25zdCBlbGVtZW50cyA9IGRvY3VtZW50LmVsZW1lbnRzRnJvbVBvaW50KHBvc2l0aW9uLngsIHBvc2l0aW9uLnkpO1xuICAgIGNvbnN0IGN1cnJlbnRQYWdlID0gZWxlbWVudHMuZmluZCh4ID0+IHguaWQgJiYgeC5pZC5zdGFydHNXaXRoKFwicGFnZS1cIikpO1xuICAgIGlmIChjdXJyZW50UGFnZSkge1xuICAgICAgdGhpcy5fZG9jdW1lbnRQYWdlU2VydmljZS5zZXRBY3RpdmVQYWdlKHBhcnNlSW50KGN1cnJlbnRQYWdlLmlkLnN1YnN0cmluZyhcInBhZ2UtXCIubGVuZ3RoKSwgMTApKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIHVwZGF0ZUFjdGl2ZVBhZ2UoKSB7XG4gICAgY29uc3QgYWN0aXZlUGFnZSA9IFwicGFnZS1cIiArIHRoaXMuX2RvY3VtZW50UGFnZVNlcnZpY2UuYWN0aXZlUGFnZTtcblxuICAgIGNvbnN0IGVsZW1lbnRzID0gdGhpcy5zdXJmYWNlLm5hdGl2ZUVsZW1lbnQucXVlcnlTZWxlY3RvckFsbCgnZ2QtcGFnZScpO1xuICAgIGVsZW1lbnRzLmZvckVhY2goZWxlbWVudCA9PiB7XG4gICAgICBjb25zdCBjaGlsZCA9IChlbGVtZW50IGFzIEhUTUxFbGVtZW50KS5jaGlsZHJlblswXTtcbiAgICAgIGlmIChjaGlsZC5pZCA9PT0gYWN0aXZlUGFnZSkge1xuICAgICAgICAoY2hpbGQgYXMgSFRNTEVsZW1lbnQpLnN0eWxlLm9wYWNpdHkgPSAnMSc7XG4gICAgICAgIChjaGlsZCBhcyBIVE1MRWxlbWVudCkucGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50LnN0eWxlLmJhY2tncm91bmQgPSAnI0ZGRkZGRic7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAoY2hpbGQgYXMgSFRNTEVsZW1lbnQpLnN0eWxlLm9wYWNpdHkgPSAnMC41JztcbiAgICAgICAgKGNoaWxkIGFzIEhUTUxFbGVtZW50KS5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQuc3R5bGUuYmFja2dyb3VuZCA9ICcjNjg4Mjk2JztcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIHByaXZhdGUgc2V0VGVtcGxhdGUodGVtcGxhdGU6IFRlbXBsYXRlKSB7XG4gICAgdGhpcy5fdGVtcGxhdGUgPSB0ZW1wbGF0ZTtcblxuICAgIGlmICh0aGlzLl9maWVsZEFkZGVkU3Vic2NyaXB0aW9uKSB7XG4gICAgICB0aGlzLl9maWVsZEFkZGVkU3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuX2ZpZWxkUmVtb3ZlZFN1YnNjcmlwdGlvbikge1xuICAgICAgdGhpcy5fZmllbGRSZW1vdmVkU3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XG4gICAgfVxuXG4gICAgaWYgKCF0aGlzLl90ZW1wbGF0ZSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRoaXMuX2ZpZWxkQWRkZWRTdWJzY3JpcHRpb24gPSB0aGlzLl90ZW1wbGF0ZS5hZGRlZEZpZWxkLnN1YnNjcmliZShmaWVsZCA9PiB0aGlzLmFkZEZpZWxkKGZpZWxkKSk7XG4gICAgdGhpcy5fZmllbGRSZW1vdmVkU3Vic2NyaXB0aW9uID0gdGhpcy5fdGVtcGxhdGUucmVtb3ZlZEZpZWxkLnN1YnNjcmliZShmaWVsZCA9PiB0aGlzLnJlbW92ZUZpZWxkKGZpZWxkKSk7XG5cbiAgICB0aGlzLnJlbW92ZUZpZWxkcygpO1xuICAgIHRoaXMuX3RlbXBsYXRlID0gdGVtcGxhdGU7XG4gICAgdGhpcy5fdGVtcGxhdGUuZmllbGRzLmZvckVhY2goZmllbGQgPT4ge1xuICAgICAgdGhpcy5hZGRGaWVsZChmaWVsZCk7XG4gICAgfSk7XG4gIH1cbn1cblxuY2xhc3MgRmllbGRXcmFwcGVyIHtcbiAgZmllbGRDb21wb25lbnQ6IEZpZWxkQ29tcG9uZW50O1xuICBjb250ZXh0TWVudVN1YnNjcmlwdGlvbjogU3Vic2NyaXB0aW9uO1xuXG4gIGNvbnN0cnVjdG9yKHB1YmxpYyByZWY6IGFueSkge1xuICAgIHRoaXMuZmllbGRDb21wb25lbnQgPSA8RmllbGRDb21wb25lbnQ+cmVmLmluc3RhbmNlO1xuICB9XG5cbiAgZGVzdHJveSgpIHtcbiAgICBpZiAodGhpcy5yZWYpIHtcbiAgICAgIHRoaXMucmVmLmRlc3Ryb3koKTtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5jb250ZXh0TWVudVN1YnNjcmlwdGlvbikge1xuICAgICAgdGhpcy5jb250ZXh0TWVudVN1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpO1xuICAgIH1cbiAgfVxufSJdfQ==