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
                    template: "<div #surface class=\"doc-panel\">\r\n  <gd-document class=\"gd-document\" *ngIf=\"document\" [mode]=\"false\" [file]=\"document\" gdScrollable gdRenderPrint\r\n    [htmlMode]=\"false\" (click)=\"setActivePage($event)\"></gd-document>\r\n\r\n  <gd-rename-modal #fieldNameModal [id]=\"'FieldNameModal'\" [title]=\"'Rename Field'\"\r\n    [promptText]=\"'Enter a new field name:'\" [acceptText]=\"'Save'\" (acceptEvent)=\"fieldNameModalAccept($event)\">\r\n  </gd-rename-modal>\r\n</div>",
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3VyZmFjZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ3JvdXBkb2NzLmV4YW1wbGVzLmFuZ3VsYXIvcGFyc2VyLyIsInNvdXJjZXMiOlsibGliL3N1cmZhY2Uvc3VyZmFjZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBaUIsU0FBUyxFQUFnQixVQUFVLEVBQWdCLEtBQUssRUFBcUIsU0FBUyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3RJLE9BQU8sRUFDTCwwQkFBMEIsRUFJMUIsOEJBQThCLEVBRTlCLFlBQVksRUFHWixLQUFLLEVBRUwsV0FBVyxFQUNaLE1BQU0sK0NBQStDLENBQUM7QUFDdkQsT0FBTyxFQUFFLG1CQUFtQixFQUFFLEtBQUssRUFBRSxJQUFJLEVBQXVDLE1BQU0sZUFBZSxDQUFDO0FBQ3RHLE9BQU8sRUFBRSxjQUFjLEVBQXlCLE1BQU0sMEJBQTBCLENBQUM7QUFDakYsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sd0NBQXdDLENBQUM7QUFFOUUsT0FBTyxLQUFLLE1BQU0sTUFBTSxRQUFRLENBQUM7QUFFakMsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBRXRELE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLDBCQUEwQixDQUFDOztJQUV6RCxDQUFDLEdBQUcsTUFBTTtBQUdoQjtJQXlJRSwwQkFDVSxhQUEyQixFQUMzQix3QkFBd0QsRUFDeEQsMEJBQXNELEVBQ3RELFlBQXlCLEVBQ3pCLGdCQUFpQyxFQUNqQyxvQkFBeUM7UUFObkQsaUJBbUJDO1FBbEJTLGtCQUFhLEdBQWIsYUFBYSxDQUFjO1FBQzNCLDZCQUF3QixHQUF4Qix3QkFBd0IsQ0FBZ0M7UUFDeEQsK0JBQTBCLEdBQTFCLDBCQUEwQixDQUE0QjtRQUN0RCxpQkFBWSxHQUFaLFlBQVksQ0FBYTtRQUN6QixxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQWlCO1FBQ2pDLHlCQUFvQixH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QyxJQUFJLENBQUMsdUJBQXVCLENBQUMsV0FBVyxFQUFFLENBQUM7U0FDNUM7SUFDSCxDQUFDO0lBQ0gsbUJBQUM7QUFBRCxDQUFDLEFBakJELElBaUJDOzs7SUFoQkMsc0NBQStCOztJQUMvQiwrQ0FBc0M7O0lBRTFCLDJCQUFlIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQWZ0ZXJWaWV3SW5pdCwgQ29tcG9uZW50LCBDb21wb25lbnRSZWYsIEVsZW1lbnRSZWYsIEhvc3RMaXN0ZW5lciwgSW5wdXQsIE9uRGVzdHJveSwgT25Jbml0LCBWaWV3Q2hpbGQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHtcclxuICBBZGREeW5hbWljQ29tcG9uZW50U2VydmljZSxcclxuICBDb21tb25Nb2RhbHMsXHJcbiAgRmlsZUNyZWRlbnRpYWxzLFxyXG4gIEZpbGVNb2RlbCwgRm9ybWF0dGluZyxcclxuICBIb3N0aW5nRHluYW1pY0NvbXBvbmVudFNlcnZpY2UsXHJcbiAgTG9nb0NvbXBvbmVudCxcclxuICBNb2RhbFNlcnZpY2UsXHJcbiAgTmF2aWdhdGVTZXJ2aWNlLCBQYWdlUHJlbG9hZFNlcnZpY2UsIFBhc3N3b3JkU2VydmljZSxcclxuICBUb3BUYWJBY3RpdmF0b3JTZXJ2aWNlLCBVcGxvYWRGaWxlc1NlcnZpY2UsXHJcbiAgVXRpbHMsXHJcbiAgV2luZG93U2VydmljZSxcclxuICBab29tU2VydmljZVxyXG59IGZyb20gXCJAZ3JvdXBkb2NzLmV4YW1wbGVzLmFuZ3VsYXIvY29tbW9uLWNvbXBvbmVudHNcIjtcclxuaW1wb3J0IHsgRG9jdW1lbnREZXNjcmlwdGlvbiwgUG9pbnQsIFNpemUsIFRlbXBsYXRlLCBUZW1wbGF0ZUlkLCBUZW1wbGF0ZUZpZWxkIH0gZnJvbSAnLi4vYXBwLW1vZGVscyc7XHJcbmltcG9ydCB7IEZpZWxkQ29tcG9uZW50LCBGaWVsZENvbnRleHRNZW51Q2xpY2sgfSBmcm9tIFwiLi4vZmllbGQvZmllbGQuY29tcG9uZW50XCI7XHJcbmltcG9ydCB7IFJlbmFtZU1vZGFsQ29tcG9uZW50IH0gZnJvbSAnLi4vcmVuYW1lLW1vZGFsL3JlbmFtZS1tb2RhbC5jb21wb25lbnQnO1xyXG5cclxuaW1wb3J0ICogYXMganF1ZXJ5IGZyb20gJ2pxdWVyeSc7XHJcbmltcG9ydCB7IFN1YnNjcmlwdGlvbiB9IGZyb20gJ3J4anMnO1xyXG5pbXBvcnQgeyBUZW1wbGF0ZVNlcnZpY2UgfSBmcm9tICcuLi90ZW1wbGF0ZS5zZXJ2aWNlJztcclxuaW1wb3J0IHsgZXZlbnROYW1lcyB9IGZyb20gJ3Byb2Nlc3MnO1xyXG5pbXBvcnQgeyBEb2N1bWVudFBhZ2VTZXJ2aWNlIH0gZnJvbSAnLi4vZG9jdW1lbnQtcGFnZS5zZXJ2aWNlJztcclxuXHJcbmNvbnN0ICQgPSBqcXVlcnk7XHJcblxyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdnZC1zdXJmYWNlJyxcclxuICB0ZW1wbGF0ZVVybDogJy4vc3VyZmFjZS5jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVVcmxzOiBbJy4vc3VyZmFjZS5jb21wb25lbnQubGVzcyddXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBTdXJmYWNlQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3ksIEFmdGVyVmlld0luaXQge1xyXG4gIHByaXZhdGUgX2RvY3VtZW50OiBEb2N1bWVudERlc2NyaXB0aW9uO1xyXG4gIHByaXZhdGUgX3RlbXBsYXRlOiBUZW1wbGF0ZTtcclxuICBwcml2YXRlIF96b29tOiBudW1iZXI7XHJcbiAgcHJpdmF0ZSBfZmllbGRBZGRlZFN1YnNjcmlwdGlvbjogU3Vic2NyaXB0aW9uO1xyXG4gIHByaXZhdGUgX2ZpZWxkUmVtb3ZlZFN1YnNjcmlwdGlvbjogU3Vic2NyaXB0aW9uO1xyXG4gIHByaXZhdGUgX2N1cnJlbnRUZW1wbGF0ZUNoYW5nZWRTdWJzY3JpcHRpb246IFN1YnNjcmlwdGlvbjtcclxuXHJcbiAgLy9wcml2YXRlIGZpZWxkQ29tcG9uZW50UmVmcyA9IG5ldyBNYXA8VGVtcGxhdGVGaWVsZCwgQ29tcG9uZW50UmVmPHt9Pj4oKTtcclxuXHJcbiAgcHJpdmF0ZSBmaWVsZFdyYXBwZXJzID0gbmV3IE1hcDxUZW1wbGF0ZUZpZWxkLCBGaWVsZFdyYXBwZXI+KCk7XHJcblxyXG5cclxuICBAVmlld0NoaWxkKCdmaWVsZE5hbWVNb2RhbCcsIHsgc3RhdGljOiB0cnVlIH0pIGZpZWxkTmFtZU1vZGFsOiBSZW5hbWVNb2RhbENvbXBvbmVudDtcclxuICBAVmlld0NoaWxkKCdzdXJmYWNlJywgeyBzdGF0aWM6IHRydWUgfSkgc3VyZmFjZTogRWxlbWVudFJlZjtcclxuXHJcbiAgQElucHV0KCkgc2V0IGRvY3VtZW50KGRvY3VtZW50OiBEb2N1bWVudERlc2NyaXB0aW9uKSB7XHJcbiAgICB0aGlzLl9kb2N1bWVudCA9IGRvY3VtZW50O1xyXG4gIH1cclxuXHJcbiAgZ2V0IGRvY3VtZW50KCkge1xyXG4gICAgcmV0dXJuIHRoaXMuX2RvY3VtZW50O1xyXG4gIH1cclxuXHJcbiAgZ2V0IHNjYWxlKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuX3pvb20gLyAxMDA7XHJcbiAgfVxyXG5cclxuICBhZGRGaWVsZChmaWVsZDogVGVtcGxhdGVGaWVsZCkge1xyXG4gICAgY29uc3QgZHluYW1pY0RpcmVjdGl2ZSA9IHRoaXMuaG9zdGluZ0NvbXBvbmVudHNTZXJ2aWNlLmZpbmQoZmllbGQucGFnZU51bWJlcik7XHJcbiAgICBpZiAoZHluYW1pY0RpcmVjdGl2ZSkge1xyXG5cclxuICAgICAgY29uc3Qgdmlld0NvbnRhaW5lclJlZiA9IGR5bmFtaWNEaXJlY3RpdmUudmlld0NvbnRhaW5lclJlZjtcclxuICAgICAgY29uc3QgZmllbGRDb21wb25lbnQgPSB0aGlzLmFkZER5bmFtaWNDb21wb25lbnRTZXJ2aWNlLmFkZER5bmFtaWNDb21wb25lbnQodmlld0NvbnRhaW5lclJlZiwgRmllbGRDb21wb25lbnQpO1xyXG5cclxuICAgICAgY29uc3Qgd3JhcHBlciA9IG5ldyBGaWVsZFdyYXBwZXIoZmllbGRDb21wb25lbnQpO1xyXG4gICAgICBjb25zdCBwYWdlTW9kZWwgPSB0aGlzLmRvY3VtZW50LnBhZ2VzLmZpbmQoZnVuY3Rpb24gKHApIHtcclxuICAgICAgICByZXR1cm4gcC5udW1iZXIgPT09IGZpZWxkLnBhZ2VOdW1iZXI7XHJcbiAgICAgIH0pO1xyXG4gICAgICB3cmFwcGVyLmZpZWxkQ29tcG9uZW50LnBhZ2VTaXplID0gbmV3IFNpemUocGFnZU1vZGVsLndpZHRoLCBwYWdlTW9kZWwuaGVpZ2h0KTtcclxuICAgICAgd3JhcHBlci5maWVsZENvbXBvbmVudC5maWVsZCA9IGZpZWxkO1xyXG4gICAgICB3cmFwcGVyLmNvbnRleHRNZW51U3Vic2NyaXB0aW9uID0gd3JhcHBlci5maWVsZENvbXBvbmVudC5jb250ZXh0TWVudUNsaWNrLnN1YnNjcmliZShldmVudCA9PiB0aGlzLmZpZWxkQ29udGV4dE1lbnVDbGljayhldmVudCkpO1xyXG5cclxuICAgICAgdGhpcy5maWVsZFdyYXBwZXJzLnNldChmaWVsZCwgd3JhcHBlcik7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBmaWVsZENvbnRleHRNZW51Q2xpY2soZXZlbnQ6IEZpZWxkQ29udGV4dE1lbnVDbGljaykge1xyXG4gICAgaWYgKGV2ZW50LmFjdGlvbiA9PT0gXCJyZW5hbWVcIikge1xyXG4gICAgICB0aGlzLmZpZWxkTmFtZU1vZGFsLm9wZXJhdGlvbklkID0gZXZlbnQuZmllbGROYW1lO1xyXG4gICAgICB0aGlzLmZpZWxkTmFtZU1vZGFsLmluaXRpYWxWYWx1ZSA9IGV2ZW50LmZpZWxkTmFtZTtcclxuICAgICAgdGhpcy5fbW9kYWxTZXJ2aWNlLm9wZW4oXCJGaWVsZE5hbWVNb2RhbFwiKTtcclxuXHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoZXZlbnQuYWN0aW9uID09PSBcInJlbW92ZVwiKSB7XHJcbiAgICAgIHRoaXMuX3RlbXBsYXRlLnJlbW92ZUZpZWxkQnlOYW1lKGV2ZW50LmZpZWxkTmFtZSk7XHJcblxyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBmaWVsZE5hbWVNb2RhbEFjY2VwdChldmVudCkge1xyXG4gICAgY29uc3Qgb2xkRmllbGROYW1lID0gZXZlbnQuaWQ7XHJcbiAgICBjb25zdCBuZXdGaWVsZE5hbWUgPSBldmVudC5uZXdWYWx1ZTtcclxuXHJcbiAgICBpZiAob2xkRmllbGROYW1lICE9PSBuZXdGaWVsZE5hbWUpIHtcclxuICAgICAgY29uc3QgZXhpc3RGaWVsZFdpdGhOYW1lID0gdGhpcy5fdGVtcGxhdGUuZ2V0RmllbGRCeU5hbWUobmV3RmllbGROYW1lKTtcclxuICAgICAgaWYgKGV4aXN0RmllbGRXaXRoTmFtZSkge1xyXG4gICAgICAgIHRoaXMuZmllbGROYW1lTW9kYWwuZXJyb3IgPSBcIkZpZWxkIHdpdGggdGhlIHNhbWUgbmFtZSBhbHJlYWR5IGV4aXN0c1wiO1xyXG4gICAgICAgIHJldHVybjtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHRoaXMuX21vZGFsU2VydmljZS5jbG9zZShcIkZpZWxkTmFtZU1vZGFsXCIpO1xyXG4gICAgY29uc3QgZmllbGQgPSB0aGlzLl90ZW1wbGF0ZS5nZXRGaWVsZEJ5TmFtZShvbGRGaWVsZE5hbWUpO1xyXG4gICAgaWYgKGZpZWxkKSB7XHJcbiAgICAgIGZpZWxkLm5hbWUgPSBuZXdGaWVsZE5hbWU7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICByZW1vdmVGaWVsZHMoKSB7XHJcbiAgICB0aGlzLmZpZWxkV3JhcHBlcnMuZm9yRWFjaCh3cmFwcGVyID0+IHtcclxuICAgICAgd3JhcHBlci5kZXN0cm95KCk7XHJcbiAgICB9KTtcclxuXHJcbiAgICB0aGlzLmZpZWxkV3JhcHBlcnMuY2xlYXIoKTtcclxuICB9XHJcblxyXG4gIHJlbW92ZUZpZWxkKGZpZWxkOiBUZW1wbGF0ZUZpZWxkKSB7XHJcbiAgICBjb25zdCB3cmFwcGVyID0gdGhpcy5maWVsZFdyYXBwZXJzLmdldChmaWVsZCk7XHJcbiAgICBpZiAod3JhcHBlcikge1xyXG4gICAgICB3cmFwcGVyLmRlc3Ryb3koKTtcclxuICAgIH1cclxuICAgIHRoaXMuZmllbGRXcmFwcGVycy5kZWxldGUoZmllbGQpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBnZXRDdXJyZW50UG9zaXRpb24ocG9zaXRpb24sIHBhZ2UpIHtcclxuICAgIGNvbnN0IHggPSAocG9zaXRpb24ueCAtIHBhZ2Uub2Zmc2V0KCkubGVmdCk7XHJcbiAgICBjb25zdCB5ID0gKHBvc2l0aW9uLnkgLSBwYWdlLm9mZnNldCgpLnRvcCk7XHJcbiAgICByZXR1cm4gbmV3IFBvaW50KHgsIHkpO1xyXG4gIH1cclxuXHJcbiAgLy8gQEhvc3RMaXN0ZW5lcignZG9jdW1lbnQ6bW91c2Vkb3duJywgWyckZXZlbnQnXSlcclxuICAvLyBvbk1vdXNlRG93bigkZXZlbnQ6IE1vdXNlRXZlbnQpIHtcclxuICAvLyAgIGNvbnN0IHBvcyA9IFV0aWxzLmdldE1vdXNlUG9zaXRpb24oJGV2ZW50KTtcclxuXHJcbiAgLy8gICBsZXQgZSA9IGRvY3VtZW50LmVsZW1lbnRGcm9tUG9pbnQocG9zLngsIHBvcy55KTtcclxuICAvLyB9XHJcblxyXG4gIG5nT25Jbml0KCk6IHZvaWQge1xyXG4gIH1cclxuXHJcbiAgbmdBZnRlclZpZXdJbml0KCk6IHZvaWQge1xyXG4gICAgdGhpcy51cGRhdGVBY3RpdmVQYWdlKCk7XHJcbiAgfVxyXG5cclxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcclxuICAgIGlmICh0aGlzLl9maWVsZEFkZGVkU3Vic2NyaXB0aW9uKSB7XHJcbiAgICAgIHRoaXMuX2ZpZWxkQWRkZWRTdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAodGhpcy5fZmllbGRSZW1vdmVkU3Vic2NyaXB0aW9uKSB7XHJcbiAgICAgIHRoaXMuX2ZpZWxkUmVtb3ZlZFN1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIGlmICh0aGlzLl9jdXJyZW50VGVtcGxhdGVDaGFuZ2VkU3Vic2NyaXB0aW9uKSB7XHJcbiAgICAgIHRoaXMuX2N1cnJlbnRUZW1wbGF0ZUNoYW5nZWRTdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgcHJpdmF0ZSBfbW9kYWxTZXJ2aWNlOiBNb2RhbFNlcnZpY2UsXHJcbiAgICBwcml2YXRlIGhvc3RpbmdDb21wb25lbnRzU2VydmljZTogSG9zdGluZ0R5bmFtaWNDb21wb25lbnRTZXJ2aWNlLFxyXG4gICAgcHJpdmF0ZSBhZGREeW5hbWljQ29tcG9uZW50U2VydmljZTogQWRkRHluYW1pY0NvbXBvbmVudFNlcnZpY2UsXHJcbiAgICBwcml2YXRlIF96b29tU2VydmljZTogWm9vbVNlcnZpY2UsXHJcbiAgICBwcml2YXRlIF90ZW1wbGF0ZVNlcnZpY2U6IFRlbXBsYXRlU2VydmljZSxcclxuICAgIHByaXZhdGUgX2RvY3VtZW50UGFnZVNlcnZpY2U6IERvY3VtZW50UGFnZVNlcnZpY2UpIHtcclxuXHJcbiAgICB0aGlzLl96b29tID0gX3pvb21TZXJ2aWNlLnpvb207XHJcbiAgICBfem9vbVNlcnZpY2Uuem9vbUNoYW5nZS5zdWJzY3JpYmUoKHpvb206IG51bWJlcikgPT4ge1xyXG4gICAgICB0aGlzLl96b29tID0gem9vbTtcclxuICAgIH0pO1xyXG5cclxuICAgIHRoaXMuX2N1cnJlbnRUZW1wbGF0ZUNoYW5nZWRTdWJzY3JpcHRpb24gPSBfdGVtcGxhdGVTZXJ2aWNlLmN1cnJlbnRUZW1wbGF0ZUNoYW5nZWRcclxuICAgICAgLnN1YnNjcmliZSh0ZW1wbGF0ZSA9PiB0aGlzLnNldFRlbXBsYXRlKHRlbXBsYXRlKSk7XHJcblxyXG4gICAgdGhpcy5zZXRUZW1wbGF0ZSh0aGlzLl90ZW1wbGF0ZVNlcnZpY2UuY3VycmVudFRlbXBsYXRlKTtcclxuXHJcbiAgICB0aGlzLl9kb2N1bWVudFBhZ2VTZXJ2aWNlLmFjdGl2ZVBhZ2VDaGFuZ2VkLnN1YnNjcmliZShfID0+IHRoaXMudXBkYXRlQWN0aXZlUGFnZSgpKTtcclxuICB9XHJcblxyXG4gIGRvdWJsZVRhcCgkZXZlbnQ6IFRvdWNoRXZlbnQpIHtcclxuICAgIC8vICAkZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICB9XHJcblxyXG4gIHNldEFjdGl2ZVBhZ2UoJGV2ZW50KSB7XHJcbiAgICAkZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICBjb25zdCBwb3NpdGlvbiA9IFV0aWxzLmdldE1vdXNlUG9zaXRpb24oJGV2ZW50KTtcclxuXHJcbiAgICBjb25zdCBlbGVtZW50cyA9IGRvY3VtZW50LmVsZW1lbnRzRnJvbVBvaW50KHBvc2l0aW9uLngsIHBvc2l0aW9uLnkpO1xyXG4gICAgY29uc3QgY3VycmVudFBhZ2UgPSBlbGVtZW50cy5maW5kKHggPT4geC5pZCAmJiB4LmlkLnN0YXJ0c1dpdGgoXCJwYWdlLVwiKSk7XHJcbiAgICBpZiAoY3VycmVudFBhZ2UpIHtcclxuICAgICAgdGhpcy5fZG9jdW1lbnRQYWdlU2VydmljZS5zZXRBY3RpdmVQYWdlKHBhcnNlSW50KGN1cnJlbnRQYWdlLmlkLnN1YnN0cmluZyhcInBhZ2UtXCIubGVuZ3RoKSwgMTApKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHByaXZhdGUgdXBkYXRlQWN0aXZlUGFnZSgpIHtcclxuICAgIGNvbnN0IGFjdGl2ZVBhZ2UgPSBcInBhZ2UtXCIgKyB0aGlzLl9kb2N1bWVudFBhZ2VTZXJ2aWNlLmFjdGl2ZVBhZ2U7XHJcblxyXG4gICAgY29uc3QgZWxlbWVudHMgPSB0aGlzLnN1cmZhY2UubmF0aXZlRWxlbWVudC5xdWVyeVNlbGVjdG9yQWxsKCdnZC1wYWdlJyk7XHJcbiAgICBlbGVtZW50cy5mb3JFYWNoKGVsZW1lbnQgPT4ge1xyXG4gICAgICBjb25zdCBjaGlsZCA9IChlbGVtZW50IGFzIEhUTUxFbGVtZW50KS5jaGlsZHJlblswXTtcclxuICAgICAgaWYgKGNoaWxkLmlkID09PSBhY3RpdmVQYWdlKSB7XHJcbiAgICAgICAgKGNoaWxkIGFzIEhUTUxFbGVtZW50KS5zdHlsZS5vcGFjaXR5ID0gJzEnO1xyXG4gICAgICAgIChjaGlsZCBhcyBIVE1MRWxlbWVudCkucGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50LnN0eWxlLmJhY2tncm91bmQgPSAnI0ZGRkZGRic7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgKGNoaWxkIGFzIEhUTUxFbGVtZW50KS5zdHlsZS5vcGFjaXR5ID0gJzAuNSc7XHJcbiAgICAgICAgKGNoaWxkIGFzIEhUTUxFbGVtZW50KS5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQuc3R5bGUuYmFja2dyb3VuZCA9ICcjNjg4Mjk2JztcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHNldFRlbXBsYXRlKHRlbXBsYXRlOiBUZW1wbGF0ZSkge1xyXG4gICAgdGhpcy5fdGVtcGxhdGUgPSB0ZW1wbGF0ZTtcclxuXHJcbiAgICBpZiAodGhpcy5fZmllbGRBZGRlZFN1YnNjcmlwdGlvbikge1xyXG4gICAgICB0aGlzLl9maWVsZEFkZGVkU3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHRoaXMuX2ZpZWxkUmVtb3ZlZFN1YnNjcmlwdGlvbikge1xyXG4gICAgICB0aGlzLl9maWVsZFJlbW92ZWRTdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoIXRoaXMuX3RlbXBsYXRlKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLl9maWVsZEFkZGVkU3Vic2NyaXB0aW9uID0gdGhpcy5fdGVtcGxhdGUuYWRkZWRGaWVsZC5zdWJzY3JpYmUoZmllbGQgPT4gdGhpcy5hZGRGaWVsZChmaWVsZCkpO1xyXG4gICAgdGhpcy5fZmllbGRSZW1vdmVkU3Vic2NyaXB0aW9uID0gdGhpcy5fdGVtcGxhdGUucmVtb3ZlZEZpZWxkLnN1YnNjcmliZShmaWVsZCA9PiB0aGlzLnJlbW92ZUZpZWxkKGZpZWxkKSk7XHJcblxyXG4gICAgdGhpcy5yZW1vdmVGaWVsZHMoKTtcclxuICAgIHRoaXMuX3RlbXBsYXRlID0gdGVtcGxhdGU7XHJcbiAgICB0aGlzLl90ZW1wbGF0ZS5maWVsZHMuZm9yRWFjaChmaWVsZCA9PiB7XHJcbiAgICAgIHRoaXMuYWRkRmllbGQoZmllbGQpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG59XHJcblxyXG5jbGFzcyBGaWVsZFdyYXBwZXIge1xyXG4gIGZpZWxkQ29tcG9uZW50OiBGaWVsZENvbXBvbmVudDtcclxuICBjb250ZXh0TWVudVN1YnNjcmlwdGlvbjogU3Vic2NyaXB0aW9uO1xyXG5cclxuICBjb25zdHJ1Y3RvcihwdWJsaWMgcmVmOiBhbnkpIHtcclxuICAgIHRoaXMuZmllbGRDb21wb25lbnQgPSA8RmllbGRDb21wb25lbnQ+cmVmLmluc3RhbmNlO1xyXG4gIH1cclxuXHJcbiAgZGVzdHJveSgpIHtcclxuICAgIGlmICh0aGlzLnJlZikge1xyXG4gICAgICB0aGlzLnJlZi5kZXN0cm95KCk7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHRoaXMuY29udGV4dE1lbnVTdWJzY3JpcHRpb24pIHtcclxuICAgICAgdGhpcy5jb250ZXh0TWVudVN1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpO1xyXG4gICAgfVxyXG4gIH1cclxufSJdfQ==