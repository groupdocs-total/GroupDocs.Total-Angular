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
        if (oldFieldName != newFieldName) {
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
            this._documentPageService.setActivePage(parseInt(currentPage.id.substring("page-".length)));
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
            if (child.id == activePage) {
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
                    selector: 'app-surface',
                    template: "<div #surface class=\"doc-panel\">\r\n  <gd-document class=\"gd-document\" *ngIf=\"document\" [mode]=\"false\" [file]=\"document\" gdScrollable gdRenderPrint\r\n    [htmlMode]=\"false\" (click)=\"setActivePage($event)\"></gd-document>\r\n\r\n  <app-rename-modal #fieldNameModal [id]=\"'FieldNameModal'\" [title]=\"'Rename Field'\"\r\n    [promptText]=\"'Enter a new field name:'\" [acceptText]=\"'Save'\" (acceptEvent)=\"fieldNameModalAccept($event)\">\r\n  </app-rename-modal>\r\n</div>",
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3VyZmFjZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ3JvdXBkb2NzLmV4YW1wbGVzLmFuZ3VsYXIvcGFyc2VyLyIsInNvdXJjZXMiOlsibGliL3N1cmZhY2Uvc3VyZmFjZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBaUIsU0FBUyxFQUFnQixVQUFVLEVBQWdCLEtBQUssRUFBcUIsU0FBUyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3RJLE9BQU8sRUFDTCwwQkFBMEIsRUFJMUIsOEJBQThCLEVBRTlCLFlBQVksRUFHWixLQUFLLEVBRUwsV0FBVyxFQUNaLE1BQU0sK0NBQStDLENBQUM7QUFDdkQsT0FBTyxFQUFFLG1CQUFtQixFQUFFLEtBQUssRUFBRSxJQUFJLEVBQXVDLE1BQU0sZUFBZSxDQUFDO0FBQ3RHLE9BQU8sRUFBRSxjQUFjLEVBQXlCLE1BQU0sMEJBQTBCLENBQUM7QUFDakYsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sd0NBQXdDLENBQUM7QUFFOUUsT0FBTyxLQUFLLE1BQU0sTUFBTSxRQUFRLENBQUM7QUFFakMsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBRXRELE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLDBCQUEwQixDQUFDOztJQUV6RCxDQUFDLEdBQUcsTUFBTTtBQUdoQjtJQXlJRSwwQkFDVSxhQUEyQixFQUMzQix3QkFBd0QsRUFDeEQsMEJBQXNELEVBQ3RELFlBQXlCLEVBQ3pCLGdCQUFpQyxFQUNqQyxvQkFBeUM7UUFObkQsaUJBbUJDO1FBbEJTLGtCQUFhLEdBQWIsYUFBYSxDQUFjO1FBQzNCLDZCQUF3QixHQUF4Qix3QkFBd0IsQ0FBZ0M7UUFDeEQsK0JBQTBCLEdBQTFCLDBCQUEwQixDQUE0QjtRQUN0RCxpQkFBWSxHQUFaLFlBQVksQ0FBYTtRQUN6QixxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQWlCO1FBQ2pDLHlCQUFvQixH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Qyx1QkFBdUIsQ0FBQyxXQUFXLEVBQUUsQ0FBQztTQUM1QztJQUNILENBQUM7SUFDSCxtQkFBQztBQUFELENBQUMsQUFqQkQsSUFpQkM7OztJQWhCQyxzQ0FBK0I7O0lBQy9CLCtDQUFzQzs7SUFFMUIsMkJBQWUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBZnRlclZpZXdJbml0LCBDb21wb25lbnQsIENvbXBvbmVudFJlZiwgRWxlbWVudFJlZiwgSG9zdExpc3RlbmVyLCBJbnB1dCwgT25EZXN0cm95LCBPbkluaXQsIFZpZXdDaGlsZCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQge1xyXG4gIEFkZER5bmFtaWNDb21wb25lbnRTZXJ2aWNlLFxyXG4gIENvbW1vbk1vZGFscyxcclxuICBGaWxlQ3JlZGVudGlhbHMsXHJcbiAgRmlsZU1vZGVsLCBGb3JtYXR0aW5nLFxyXG4gIEhvc3RpbmdEeW5hbWljQ29tcG9uZW50U2VydmljZSxcclxuICBMb2dvQ29tcG9uZW50LFxyXG4gIE1vZGFsU2VydmljZSxcclxuICBOYXZpZ2F0ZVNlcnZpY2UsIFBhZ2VQcmVsb2FkU2VydmljZSwgUGFzc3dvcmRTZXJ2aWNlLFxyXG4gIFRvcFRhYkFjdGl2YXRvclNlcnZpY2UsIFVwbG9hZEZpbGVzU2VydmljZSxcclxuICBVdGlscyxcclxuICBXaW5kb3dTZXJ2aWNlLFxyXG4gIFpvb21TZXJ2aWNlXHJcbn0gZnJvbSBcIkBncm91cGRvY3MuZXhhbXBsZXMuYW5ndWxhci9jb21tb24tY29tcG9uZW50c1wiO1xyXG5pbXBvcnQgeyBEb2N1bWVudERlc2NyaXB0aW9uLCBQb2ludCwgU2l6ZSwgVGVtcGxhdGUsIFRlbXBsYXRlSWQsIFRlbXBsYXRlRmllbGQgfSBmcm9tICcuLi9hcHAtbW9kZWxzJztcclxuaW1wb3J0IHsgRmllbGRDb21wb25lbnQsIEZpZWxkQ29udGV4dE1lbnVDbGljayB9IGZyb20gXCIuLi9maWVsZC9maWVsZC5jb21wb25lbnRcIjtcclxuaW1wb3J0IHsgUmVuYW1lTW9kYWxDb21wb25lbnQgfSBmcm9tICcuLi9yZW5hbWUtbW9kYWwvcmVuYW1lLW1vZGFsLmNvbXBvbmVudCc7XHJcblxyXG5pbXBvcnQgKiBhcyBqcXVlcnkgZnJvbSAnanF1ZXJ5JztcclxuaW1wb3J0IHsgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcyc7XHJcbmltcG9ydCB7IFRlbXBsYXRlU2VydmljZSB9IGZyb20gJy4uL3RlbXBsYXRlLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBldmVudE5hbWVzIH0gZnJvbSAncHJvY2Vzcyc7XHJcbmltcG9ydCB7IERvY3VtZW50UGFnZVNlcnZpY2UgfSBmcm9tICcuLi9kb2N1bWVudC1wYWdlLnNlcnZpY2UnO1xyXG5cclxuY29uc3QgJCA9IGpxdWVyeTtcclxuXHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2FwcC1zdXJmYWNlJyxcclxuICB0ZW1wbGF0ZVVybDogJy4vc3VyZmFjZS5jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVVcmxzOiBbJy4vc3VyZmFjZS5jb21wb25lbnQubGVzcyddXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBTdXJmYWNlQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3ksIEFmdGVyVmlld0luaXQge1xyXG4gIHByaXZhdGUgX2RvY3VtZW50OiBEb2N1bWVudERlc2NyaXB0aW9uO1xyXG4gIHByaXZhdGUgX3RlbXBsYXRlOiBUZW1wbGF0ZTtcclxuICBwcml2YXRlIF96b29tOiBudW1iZXI7XHJcbiAgcHJpdmF0ZSBfZmllbGRBZGRlZFN1YnNjcmlwdGlvbjogU3Vic2NyaXB0aW9uO1xyXG4gIHByaXZhdGUgX2ZpZWxkUmVtb3ZlZFN1YnNjcmlwdGlvbjogU3Vic2NyaXB0aW9uO1xyXG4gIHByaXZhdGUgX2N1cnJlbnRUZW1wbGF0ZUNoYW5nZWRTdWJzY3JpcHRpb246IFN1YnNjcmlwdGlvbjtcclxuXHJcbiAgLy9wcml2YXRlIGZpZWxkQ29tcG9uZW50UmVmcyA9IG5ldyBNYXA8VGVtcGxhdGVGaWVsZCwgQ29tcG9uZW50UmVmPHt9Pj4oKTtcclxuXHJcbiAgcHJpdmF0ZSBmaWVsZFdyYXBwZXJzID0gbmV3IE1hcDxUZW1wbGF0ZUZpZWxkLCBGaWVsZFdyYXBwZXI+KCk7XHJcblxyXG5cclxuICBAVmlld0NoaWxkKCdmaWVsZE5hbWVNb2RhbCcsIHsgc3RhdGljOiB0cnVlIH0pIGZpZWxkTmFtZU1vZGFsOiBSZW5hbWVNb2RhbENvbXBvbmVudDtcclxuICBAVmlld0NoaWxkKCdzdXJmYWNlJywgeyBzdGF0aWM6IHRydWUgfSkgc3VyZmFjZTogRWxlbWVudFJlZjtcclxuXHJcbiAgQElucHV0KCkgc2V0IGRvY3VtZW50KGRvY3VtZW50OiBEb2N1bWVudERlc2NyaXB0aW9uKSB7XHJcbiAgICB0aGlzLl9kb2N1bWVudCA9IGRvY3VtZW50O1xyXG4gIH1cclxuXHJcbiAgZ2V0IGRvY3VtZW50KCkge1xyXG4gICAgcmV0dXJuIHRoaXMuX2RvY3VtZW50O1xyXG4gIH1cclxuXHJcbiAgZ2V0IHNjYWxlKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuX3pvb20gLyAxMDA7XHJcbiAgfVxyXG5cclxuICBhZGRGaWVsZChmaWVsZDogVGVtcGxhdGVGaWVsZCkge1xyXG4gICAgY29uc3QgZHluYW1pY0RpcmVjdGl2ZSA9IHRoaXMuaG9zdGluZ0NvbXBvbmVudHNTZXJ2aWNlLmZpbmQoZmllbGQucGFnZU51bWJlcik7XHJcbiAgICBpZiAoZHluYW1pY0RpcmVjdGl2ZSkge1xyXG5cclxuICAgICAgY29uc3Qgdmlld0NvbnRhaW5lclJlZiA9IGR5bmFtaWNEaXJlY3RpdmUudmlld0NvbnRhaW5lclJlZjtcclxuICAgICAgY29uc3QgZmllbGRDb21wb25lbnQgPSB0aGlzLmFkZER5bmFtaWNDb21wb25lbnRTZXJ2aWNlLmFkZER5bmFtaWNDb21wb25lbnQodmlld0NvbnRhaW5lclJlZiwgRmllbGRDb21wb25lbnQpO1xyXG5cclxuICAgICAgdmFyIHdyYXBwZXIgPSBuZXcgRmllbGRXcmFwcGVyKGZpZWxkQ29tcG9uZW50KTtcclxuICAgICAgY29uc3QgcGFnZU1vZGVsID0gdGhpcy5kb2N1bWVudC5wYWdlcy5maW5kKGZ1bmN0aW9uIChwKSB7XHJcbiAgICAgICAgcmV0dXJuIHAubnVtYmVyID09PSBmaWVsZC5wYWdlTnVtYmVyO1xyXG4gICAgICB9KTtcclxuICAgICAgd3JhcHBlci5maWVsZENvbXBvbmVudC5wYWdlU2l6ZSA9IG5ldyBTaXplKHBhZ2VNb2RlbC53aWR0aCwgcGFnZU1vZGVsLmhlaWdodCk7XHJcbiAgICAgIHdyYXBwZXIuZmllbGRDb21wb25lbnQuZmllbGQgPSBmaWVsZDtcclxuICAgICAgd3JhcHBlci5jb250ZXh0TWVudVN1YnNjcmlwdGlvbiA9IHdyYXBwZXIuZmllbGRDb21wb25lbnQuY29udGV4dE1lbnVDbGljay5zdWJzY3JpYmUoZXZlbnQgPT4gdGhpcy5maWVsZENvbnRleHRNZW51Q2xpY2soZXZlbnQpKTtcclxuXHJcbiAgICAgIHRoaXMuZmllbGRXcmFwcGVycy5zZXQoZmllbGQsIHdyYXBwZXIpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZmllbGRDb250ZXh0TWVudUNsaWNrKGV2ZW50OiBGaWVsZENvbnRleHRNZW51Q2xpY2spIHtcclxuICAgIGlmIChldmVudC5hY3Rpb24gPT0gXCJyZW5hbWVcIikge1xyXG4gICAgICB0aGlzLmZpZWxkTmFtZU1vZGFsLm9wZXJhdGlvbklkID0gZXZlbnQuZmllbGROYW1lO1xyXG4gICAgICB0aGlzLmZpZWxkTmFtZU1vZGFsLmluaXRpYWxWYWx1ZSA9IGV2ZW50LmZpZWxkTmFtZTtcclxuICAgICAgdGhpcy5fbW9kYWxTZXJ2aWNlLm9wZW4oXCJGaWVsZE5hbWVNb2RhbFwiKTtcclxuXHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoZXZlbnQuYWN0aW9uID09IFwicmVtb3ZlXCIpIHtcclxuICAgICAgdGhpcy5fdGVtcGxhdGUucmVtb3ZlRmllbGRCeU5hbWUoZXZlbnQuZmllbGROYW1lKTtcclxuXHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGZpZWxkTmFtZU1vZGFsQWNjZXB0KGV2ZW50KSB7XHJcbiAgICBsZXQgb2xkRmllbGROYW1lID0gZXZlbnQuaWQ7XHJcbiAgICBsZXQgbmV3RmllbGROYW1lID0gZXZlbnQubmV3VmFsdWU7XHJcblxyXG4gICAgaWYgKG9sZEZpZWxkTmFtZSAhPSBuZXdGaWVsZE5hbWUpIHtcclxuICAgICAgbGV0IGV4aXN0RmllbGRXaXRoTmFtZSA9IHRoaXMuX3RlbXBsYXRlLmdldEZpZWxkQnlOYW1lKG5ld0ZpZWxkTmFtZSk7XHJcbiAgICAgIGlmIChleGlzdEZpZWxkV2l0aE5hbWUpIHtcclxuICAgICAgICB0aGlzLmZpZWxkTmFtZU1vZGFsLmVycm9yID0gXCJGaWVsZCB3aXRoIHRoZSBzYW1lIG5hbWUgYWxyZWFkeSBleGlzdHNcIjtcclxuICAgICAgICByZXR1cm47XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICB0aGlzLl9tb2RhbFNlcnZpY2UuY2xvc2UoXCJGaWVsZE5hbWVNb2RhbFwiKTtcclxuICAgIGxldCBmaWVsZCA9IHRoaXMuX3RlbXBsYXRlLmdldEZpZWxkQnlOYW1lKG9sZEZpZWxkTmFtZSk7XHJcbiAgICBpZiAoZmllbGQpIHtcclxuICAgICAgZmllbGQubmFtZSA9IG5ld0ZpZWxkTmFtZTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHJlbW92ZUZpZWxkcygpIHtcclxuICAgIHRoaXMuZmllbGRXcmFwcGVycy5mb3JFYWNoKHdyYXBwZXIgPT4ge1xyXG4gICAgICB3cmFwcGVyLmRlc3Ryb3koKTtcclxuICAgIH0pO1xyXG5cclxuICAgIHRoaXMuZmllbGRXcmFwcGVycy5jbGVhcigpO1xyXG4gIH1cclxuXHJcbiAgcmVtb3ZlRmllbGQoZmllbGQ6IFRlbXBsYXRlRmllbGQpIHtcclxuICAgIGNvbnN0IHdyYXBwZXIgPSB0aGlzLmZpZWxkV3JhcHBlcnMuZ2V0KGZpZWxkKTtcclxuICAgIGlmICh3cmFwcGVyKSB7XHJcbiAgICAgIHdyYXBwZXIuZGVzdHJveSgpO1xyXG4gICAgfVxyXG4gICAgdGhpcy5maWVsZFdyYXBwZXJzLmRlbGV0ZShmaWVsZCk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGdldEN1cnJlbnRQb3NpdGlvbihwb3NpdGlvbiwgcGFnZSkge1xyXG4gICAgY29uc3QgeCA9IChwb3NpdGlvbi54IC0gcGFnZS5vZmZzZXQoKS5sZWZ0KTtcclxuICAgIGNvbnN0IHkgPSAocG9zaXRpb24ueSAtIHBhZ2Uub2Zmc2V0KCkudG9wKTtcclxuICAgIHJldHVybiBuZXcgUG9pbnQoeCwgeSk7XHJcbiAgfVxyXG5cclxuICAvLyBASG9zdExpc3RlbmVyKCdkb2N1bWVudDptb3VzZWRvd24nLCBbJyRldmVudCddKVxyXG4gIC8vIG9uTW91c2VEb3duKCRldmVudDogTW91c2VFdmVudCkge1xyXG4gIC8vICAgY29uc3QgcG9zID0gVXRpbHMuZ2V0TW91c2VQb3NpdGlvbigkZXZlbnQpO1xyXG5cclxuICAvLyAgIGxldCBlID0gZG9jdW1lbnQuZWxlbWVudEZyb21Qb2ludChwb3MueCwgcG9zLnkpO1xyXG4gIC8vIH1cclxuXHJcbiAgbmdPbkluaXQoKTogdm9pZCB7XHJcbiAgfVxyXG5cclxuICBuZ0FmdGVyVmlld0luaXQoKTogdm9pZCB7XHJcbiAgICB0aGlzLnVwZGF0ZUFjdGl2ZVBhZ2UoKTtcclxuICB9XHJcblxyXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xyXG4gICAgaWYgKHRoaXMuX2ZpZWxkQWRkZWRTdWJzY3JpcHRpb24pIHtcclxuICAgICAgdGhpcy5fZmllbGRBZGRlZFN1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIGlmICh0aGlzLl9maWVsZFJlbW92ZWRTdWJzY3JpcHRpb24pIHtcclxuICAgICAgdGhpcy5fZmllbGRSZW1vdmVkU3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHRoaXMuX2N1cnJlbnRUZW1wbGF0ZUNoYW5nZWRTdWJzY3JpcHRpb24pIHtcclxuICAgICAgdGhpcy5fY3VycmVudFRlbXBsYXRlQ2hhbmdlZFN1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBwcml2YXRlIF9tb2RhbFNlcnZpY2U6IE1vZGFsU2VydmljZSxcclxuICAgIHByaXZhdGUgaG9zdGluZ0NvbXBvbmVudHNTZXJ2aWNlOiBIb3N0aW5nRHluYW1pY0NvbXBvbmVudFNlcnZpY2UsXHJcbiAgICBwcml2YXRlIGFkZER5bmFtaWNDb21wb25lbnRTZXJ2aWNlOiBBZGREeW5hbWljQ29tcG9uZW50U2VydmljZSxcclxuICAgIHByaXZhdGUgX3pvb21TZXJ2aWNlOiBab29tU2VydmljZSxcclxuICAgIHByaXZhdGUgX3RlbXBsYXRlU2VydmljZTogVGVtcGxhdGVTZXJ2aWNlLFxyXG4gICAgcHJpdmF0ZSBfZG9jdW1lbnRQYWdlU2VydmljZTogRG9jdW1lbnRQYWdlU2VydmljZSkge1xyXG5cclxuICAgIHRoaXMuX3pvb20gPSBfem9vbVNlcnZpY2Uuem9vbTtcclxuICAgIF96b29tU2VydmljZS56b29tQ2hhbmdlLnN1YnNjcmliZSgoem9vbTogbnVtYmVyKSA9PiB7XHJcbiAgICAgIHRoaXMuX3pvb20gPSB6b29tO1xyXG4gICAgfSk7XHJcblxyXG4gICAgdGhpcy5fY3VycmVudFRlbXBsYXRlQ2hhbmdlZFN1YnNjcmlwdGlvbiA9IF90ZW1wbGF0ZVNlcnZpY2UuY3VycmVudFRlbXBsYXRlQ2hhbmdlZFxyXG4gICAgICAuc3Vic2NyaWJlKHRlbXBsYXRlID0+IHRoaXMuc2V0VGVtcGxhdGUodGVtcGxhdGUpKTtcclxuXHJcbiAgICB0aGlzLnNldFRlbXBsYXRlKHRoaXMuX3RlbXBsYXRlU2VydmljZS5jdXJyZW50VGVtcGxhdGUpO1xyXG5cclxuICAgIHRoaXMuX2RvY3VtZW50UGFnZVNlcnZpY2UuYWN0aXZlUGFnZUNoYW5nZWQuc3Vic2NyaWJlKF8gPT4gdGhpcy51cGRhdGVBY3RpdmVQYWdlKCkpO1xyXG4gIH1cclxuXHJcbiAgZG91YmxlVGFwKCRldmVudDogVG91Y2hFdmVudCkge1xyXG4gICAgLy8gICRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gIH1cclxuXHJcbiAgc2V0QWN0aXZlUGFnZSgkZXZlbnQpIHtcclxuICAgICRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICAgIGNvbnN0IHBvc2l0aW9uID0gVXRpbHMuZ2V0TW91c2VQb3NpdGlvbigkZXZlbnQpO1xyXG5cclxuICAgIGNvbnN0IGVsZW1lbnRzID0gZG9jdW1lbnQuZWxlbWVudHNGcm9tUG9pbnQocG9zaXRpb24ueCwgcG9zaXRpb24ueSk7XHJcbiAgICBjb25zdCBjdXJyZW50UGFnZSA9IGVsZW1lbnRzLmZpbmQoeCA9PiB4LmlkICYmIHguaWQuc3RhcnRzV2l0aChcInBhZ2UtXCIpKTtcclxuICAgIGlmIChjdXJyZW50UGFnZSkge1xyXG4gICAgICB0aGlzLl9kb2N1bWVudFBhZ2VTZXJ2aWNlLnNldEFjdGl2ZVBhZ2UocGFyc2VJbnQoY3VycmVudFBhZ2UuaWQuc3Vic3RyaW5nKFwicGFnZS1cIi5sZW5ndGgpKSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHVwZGF0ZUFjdGl2ZVBhZ2UoKSB7XHJcbiAgICBjb25zdCBhY3RpdmVQYWdlID0gXCJwYWdlLVwiICsgdGhpcy5fZG9jdW1lbnRQYWdlU2VydmljZS5hY3RpdmVQYWdlO1xyXG5cclxuICAgIGNvbnN0IGVsZW1lbnRzID0gdGhpcy5zdXJmYWNlLm5hdGl2ZUVsZW1lbnQucXVlcnlTZWxlY3RvckFsbCgnZ2QtcGFnZScpO1xyXG4gICAgZWxlbWVudHMuZm9yRWFjaChlbGVtZW50ID0+IHtcclxuICAgICAgbGV0IGNoaWxkID0gKGVsZW1lbnQgYXMgSFRNTEVsZW1lbnQpLmNoaWxkcmVuWzBdO1xyXG4gICAgICBpZiAoY2hpbGQuaWQgPT0gYWN0aXZlUGFnZSkge1xyXG4gICAgICAgIChjaGlsZCBhcyBIVE1MRWxlbWVudCkuc3R5bGUub3BhY2l0eSA9ICcxJztcclxuICAgICAgICAoY2hpbGQgYXMgSFRNTEVsZW1lbnQpLnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudC5zdHlsZS5iYWNrZ3JvdW5kID0gJyNGRkZGRkYnO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIChjaGlsZCBhcyBIVE1MRWxlbWVudCkuc3R5bGUub3BhY2l0eSA9ICcwLjUnO1xyXG4gICAgICAgIChjaGlsZCBhcyBIVE1MRWxlbWVudCkucGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50LnN0eWxlLmJhY2tncm91bmQgPSAnIzY4ODI5Nic7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBzZXRUZW1wbGF0ZSh0ZW1wbGF0ZTogVGVtcGxhdGUpIHtcclxuICAgIHRoaXMuX3RlbXBsYXRlID0gdGVtcGxhdGU7XHJcblxyXG4gICAgaWYgKHRoaXMuX2ZpZWxkQWRkZWRTdWJzY3JpcHRpb24pIHtcclxuICAgICAgdGhpcy5fZmllbGRBZGRlZFN1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIGlmICh0aGlzLl9maWVsZFJlbW92ZWRTdWJzY3JpcHRpb24pIHtcclxuICAgICAgdGhpcy5fZmllbGRSZW1vdmVkU3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKCF0aGlzLl90ZW1wbGF0ZSkge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5fZmllbGRBZGRlZFN1YnNjcmlwdGlvbiA9IHRoaXMuX3RlbXBsYXRlLmFkZGVkRmllbGQuc3Vic2NyaWJlKGZpZWxkID0+IHRoaXMuYWRkRmllbGQoZmllbGQpKTtcclxuICAgIHRoaXMuX2ZpZWxkUmVtb3ZlZFN1YnNjcmlwdGlvbiA9IHRoaXMuX3RlbXBsYXRlLnJlbW92ZWRGaWVsZC5zdWJzY3JpYmUoZmllbGQgPT4gdGhpcy5yZW1vdmVGaWVsZChmaWVsZCkpO1xyXG5cclxuICAgIHRoaXMucmVtb3ZlRmllbGRzKCk7XHJcbiAgICB0aGlzLl90ZW1wbGF0ZSA9IHRlbXBsYXRlO1xyXG4gICAgdGhpcy5fdGVtcGxhdGUuZmllbGRzLmZvckVhY2goZmllbGQgPT4ge1xyXG4gICAgICB0aGlzLmFkZEZpZWxkKGZpZWxkKTtcclxuICAgIH0pO1xyXG4gIH1cclxufVxyXG5cclxuY2xhc3MgRmllbGRXcmFwcGVyIHtcclxuICBmaWVsZENvbXBvbmVudDogRmllbGRDb21wb25lbnQ7XHJcbiAgY29udGV4dE1lbnVTdWJzY3JpcHRpb246IFN1YnNjcmlwdGlvbjtcclxuXHJcbiAgY29uc3RydWN0b3IocHVibGljIHJlZjogYW55KSB7XHJcbiAgICB0aGlzLmZpZWxkQ29tcG9uZW50ID0gPEZpZWxkQ29tcG9uZW50PnJlZi5pbnN0YW5jZTtcclxuICB9XHJcblxyXG4gIGRlc3Ryb3koKSB7XHJcbiAgICBpZiAodGhpcy5yZWYpIHtcclxuICAgICAgdGhpcy5yZWYuZGVzdHJveSgpO1xyXG4gICAgfVxyXG5cclxuICAgIGlmICh0aGlzLmNvbnRleHRNZW51U3Vic2NyaXB0aW9uKSB7XHJcbiAgICAgIHRoaXMuY29udGV4dE1lbnVTdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcclxuICAgIH1cclxuICB9XHJcbn0iXX0=