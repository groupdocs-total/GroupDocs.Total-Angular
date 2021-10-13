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
            var wrapper = new FieldWrapper(fieldComponent);
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
    /**
     * @param {?} event
     * @return {?}
     */
    fieldNameModalAccept(event) {
        /** @type {?} */
        let oldFieldName = event.id;
        /** @type {?} */
        let newFieldName = event.newValue;
        if (oldFieldName != newFieldName) {
            /** @type {?} */
            let existFieldWithName = this._template.getFieldByName(newFieldName);
            if (existFieldWithName) {
                this.fieldNameModal.error = "Field with the same name already exists";
                return;
            }
        }
        this._modalService.close("FieldNameModal");
        /** @type {?} */
        let field = this._template.getFieldByName(oldFieldName);
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
            this._documentPageService.setActivePage(parseInt(currentPage.id.substring("page-".length)));
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
            let child = ((/** @type {?} */ (element))).children[0];
            if (child.id == activePage) {
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
                selector: 'app-surface',
                template: "<div #surface class=\"doc-panel\">\r\n  <gd-document class=\"gd-document\" *ngIf=\"document\" [mode]=\"false\" [file]=\"document\" gdScrollable gdRenderPrint\r\n    [htmlMode]=\"false\" (click)=\"setActivePage($event)\"></gd-document>\r\n\r\n  <app-rename-modal #fieldNameModal [id]=\"'FieldNameModal'\" [title]=\"'Rename Field'\"\r\n    [promptText]=\"'Enter a new field name:'\" [acceptText]=\"'Save'\" (acceptEvent)=\"fieldNameModalAccept($event)\">\r\n  </app-rename-modal>\r\n</div>",
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3VyZmFjZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ3JvdXBkb2NzLmV4YW1wbGVzLmFuZ3VsYXIvcGFyc2VyLyIsInNvdXJjZXMiOlsibGliL3N1cmZhY2Uvc3VyZmFjZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBaUIsU0FBUyxFQUFnQixVQUFVLEVBQWdCLEtBQUssRUFBcUIsU0FBUyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3RJLE9BQU8sRUFDTCwwQkFBMEIsRUFJMUIsOEJBQThCLEVBRTlCLFlBQVksRUFHWixLQUFLLEVBRUwsV0FBVyxFQUNaLE1BQU0sK0NBQStDLENBQUM7QUFDdkQsT0FBTyxFQUFFLG1CQUFtQixFQUFFLEtBQUssRUFBRSxJQUFJLEVBQXVDLE1BQU0sZUFBZSxDQUFDO0FBQ3RHLE9BQU8sRUFBRSxjQUFjLEVBQXlCLE1BQU0sMEJBQTBCLENBQUM7QUFDakYsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sd0NBQXdDLENBQUM7QUFFOUUsT0FBTyxLQUFLLE1BQU0sTUFBTSxRQUFRLENBQUM7QUFFakMsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBRXRELE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLDBCQUEwQixDQUFDOztNQUV6RCxDQUFDLEdBQUcsTUFBTTtBQVFoQixNQUFNLE9BQU8sZ0JBQWdCOzs7Ozs7Ozs7SUFvSTNCLFlBQ1UsYUFBMkIsRUFDM0Isd0JBQXdELEVBQ3hELDBCQUFzRCxFQUN0RCxZQUF5QixFQUN6QixnQkFBaUMsRUFDakMsb0JBQXlDO1FBTHpDLGtCQUFhLEdBQWIsYUFBYSxDQUFjO1FBQzNCLDZCQUF3QixHQUF4Qix3QkFBd0IsQ0FBZ0M7UUFDeEQsK0JBQTBCLEdBQTFCLDBCQUEwQixDQUE0QjtRQUN0RCxpQkFBWSxHQUFaLFlBQVksQ0FBYTtRQUN6QixxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQWlCO1FB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QUFFO3NCQUM1QyxTQUFTLFNBQUMsU0FBUyxFQUFFLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRTt1QkFFckMsS0FBSzs7Ozs7OztJQWZOLHFDQUF1Qzs7Ozs7SUFDdkMscUNBQTRCOzs7OztJQUM1QixpQ0FBc0I7Ozs7O0lBQ3RCLG1EQUE4Qzs7Ozs7SUFDOUMscURBQWdEOzs7OztJQUNoRCwrREFBMEQ7Ozs7O0lBSTFELHlDQUErRDs7SUFHL0QsMENBQW9GOztJQUNwRixtQ0FBNEQ7Ozs7O0lBdUgxRCx5Q0FBbUM7Ozs7O0lBQ25DLG9EQUFnRTs7Ozs7SUFDaEUsc0RBQThEOzs7OztJQUM5RCx3Q0FBaUM7Ozs7O0lBQ2pDLDRDQUF5Qzs7Ozs7SUFDekMsZ0RBQWlEOztBQXlFckQsTUFBTSxZQUFZOzs7O0lBSWhCLFlBQW1CLEdBQVE7UUFBUixRQUFHLEdBQUgsR0FBRyxDQUFLO1FBQ3pCLElBQUksQ0FBQyxjQUFjLEdBQUcsbUJBQWdCLEdBQUcsQ0FBQyxRQUFRLEVBQUEsQ0FBQztJQUNyRCxDQUFDOzs7O0lBRUQsT0FBTztRQUNMLElBQUksSUFBSSxDQUFDLEdBQUcsRUFBRTtZQUNaLElBQUksQ0FBQyxHQUFHLENBQUMsT0FBTyxFQUFFLENBQUM7U0FDcEI7UUFFRCxJQUFJLElBQUksQ0FBQyx1QkFBdUIsRUFBRTtZQUNoQyxJQUFJLENBQUMsdUJBQXVCLENBQUMsV0FBVyxFQUFFLENBQUM7U0FDNUM7SUFDSCxDQUFDO0NBQ0Y7OztJQWhCQyxzQ0FBK0I7O0lBQy9CLCtDQUFzQzs7SUFFMUIsMkJBQWUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBZnRlclZpZXdJbml0LCBDb21wb25lbnQsIENvbXBvbmVudFJlZiwgRWxlbWVudFJlZiwgSG9zdExpc3RlbmVyLCBJbnB1dCwgT25EZXN0cm95LCBPbkluaXQsIFZpZXdDaGlsZCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQge1xyXG4gIEFkZER5bmFtaWNDb21wb25lbnRTZXJ2aWNlLFxyXG4gIENvbW1vbk1vZGFscyxcclxuICBGaWxlQ3JlZGVudGlhbHMsXHJcbiAgRmlsZU1vZGVsLCBGb3JtYXR0aW5nLFxyXG4gIEhvc3RpbmdEeW5hbWljQ29tcG9uZW50U2VydmljZSxcclxuICBMb2dvQ29tcG9uZW50LFxyXG4gIE1vZGFsU2VydmljZSxcclxuICBOYXZpZ2F0ZVNlcnZpY2UsIFBhZ2VQcmVsb2FkU2VydmljZSwgUGFzc3dvcmRTZXJ2aWNlLFxyXG4gIFRvcFRhYkFjdGl2YXRvclNlcnZpY2UsIFVwbG9hZEZpbGVzU2VydmljZSxcclxuICBVdGlscyxcclxuICBXaW5kb3dTZXJ2aWNlLFxyXG4gIFpvb21TZXJ2aWNlXHJcbn0gZnJvbSBcIkBncm91cGRvY3MuZXhhbXBsZXMuYW5ndWxhci9jb21tb24tY29tcG9uZW50c1wiO1xyXG5pbXBvcnQgeyBEb2N1bWVudERlc2NyaXB0aW9uLCBQb2ludCwgU2l6ZSwgVGVtcGxhdGUsIFRlbXBsYXRlSWQsIFRlbXBsYXRlRmllbGQgfSBmcm9tICcuLi9hcHAtbW9kZWxzJztcclxuaW1wb3J0IHsgRmllbGRDb21wb25lbnQsIEZpZWxkQ29udGV4dE1lbnVDbGljayB9IGZyb20gXCIuLi9maWVsZC9maWVsZC5jb21wb25lbnRcIjtcclxuaW1wb3J0IHsgUmVuYW1lTW9kYWxDb21wb25lbnQgfSBmcm9tICcuLi9yZW5hbWUtbW9kYWwvcmVuYW1lLW1vZGFsLmNvbXBvbmVudCc7XHJcblxyXG5pbXBvcnQgKiBhcyBqcXVlcnkgZnJvbSAnanF1ZXJ5JztcclxuaW1wb3J0IHsgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcyc7XHJcbmltcG9ydCB7IFRlbXBsYXRlU2VydmljZSB9IGZyb20gJy4uL3RlbXBsYXRlLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBldmVudE5hbWVzIH0gZnJvbSAncHJvY2Vzcyc7XHJcbmltcG9ydCB7IERvY3VtZW50UGFnZVNlcnZpY2UgfSBmcm9tICcuLi9kb2N1bWVudC1wYWdlLnNlcnZpY2UnO1xyXG5cclxuY29uc3QgJCA9IGpxdWVyeTtcclxuXHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2FwcC1zdXJmYWNlJyxcclxuICB0ZW1wbGF0ZVVybDogJy4vc3VyZmFjZS5jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVVcmxzOiBbJy4vc3VyZmFjZS5jb21wb25lbnQubGVzcyddXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBTdXJmYWNlQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3ksIEFmdGVyVmlld0luaXQge1xyXG4gIHByaXZhdGUgX2RvY3VtZW50OiBEb2N1bWVudERlc2NyaXB0aW9uO1xyXG4gIHByaXZhdGUgX3RlbXBsYXRlOiBUZW1wbGF0ZTtcclxuICBwcml2YXRlIF96b29tOiBudW1iZXI7XHJcbiAgcHJpdmF0ZSBfZmllbGRBZGRlZFN1YnNjcmlwdGlvbjogU3Vic2NyaXB0aW9uO1xyXG4gIHByaXZhdGUgX2ZpZWxkUmVtb3ZlZFN1YnNjcmlwdGlvbjogU3Vic2NyaXB0aW9uO1xyXG4gIHByaXZhdGUgX2N1cnJlbnRUZW1wbGF0ZUNoYW5nZWRTdWJzY3JpcHRpb246IFN1YnNjcmlwdGlvbjtcclxuXHJcbiAgLy9wcml2YXRlIGZpZWxkQ29tcG9uZW50UmVmcyA9IG5ldyBNYXA8VGVtcGxhdGVGaWVsZCwgQ29tcG9uZW50UmVmPHt9Pj4oKTtcclxuXHJcbiAgcHJpdmF0ZSBmaWVsZFdyYXBwZXJzID0gbmV3IE1hcDxUZW1wbGF0ZUZpZWxkLCBGaWVsZFdyYXBwZXI+KCk7XHJcblxyXG5cclxuICBAVmlld0NoaWxkKCdmaWVsZE5hbWVNb2RhbCcsIHsgc3RhdGljOiB0cnVlIH0pIGZpZWxkTmFtZU1vZGFsOiBSZW5hbWVNb2RhbENvbXBvbmVudDtcclxuICBAVmlld0NoaWxkKCdzdXJmYWNlJywgeyBzdGF0aWM6IHRydWUgfSkgc3VyZmFjZTogRWxlbWVudFJlZjtcclxuXHJcbiAgQElucHV0KCkgc2V0IGRvY3VtZW50KGRvY3VtZW50OiBEb2N1bWVudERlc2NyaXB0aW9uKSB7XHJcbiAgICB0aGlzLl9kb2N1bWVudCA9IGRvY3VtZW50O1xyXG4gIH1cclxuXHJcbiAgZ2V0IGRvY3VtZW50KCkge1xyXG4gICAgcmV0dXJuIHRoaXMuX2RvY3VtZW50O1xyXG4gIH1cclxuXHJcbiAgZ2V0IHNjYWxlKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuX3pvb20gLyAxMDA7XHJcbiAgfVxyXG5cclxuICBhZGRGaWVsZChmaWVsZDogVGVtcGxhdGVGaWVsZCkge1xyXG4gICAgY29uc3QgZHluYW1pY0RpcmVjdGl2ZSA9IHRoaXMuaG9zdGluZ0NvbXBvbmVudHNTZXJ2aWNlLmZpbmQoZmllbGQucGFnZU51bWJlcik7XHJcbiAgICBpZiAoZHluYW1pY0RpcmVjdGl2ZSkge1xyXG5cclxuICAgICAgY29uc3Qgdmlld0NvbnRhaW5lclJlZiA9IGR5bmFtaWNEaXJlY3RpdmUudmlld0NvbnRhaW5lclJlZjtcclxuICAgICAgY29uc3QgZmllbGRDb21wb25lbnQgPSB0aGlzLmFkZER5bmFtaWNDb21wb25lbnRTZXJ2aWNlLmFkZER5bmFtaWNDb21wb25lbnQodmlld0NvbnRhaW5lclJlZiwgRmllbGRDb21wb25lbnQpO1xyXG5cclxuICAgICAgdmFyIHdyYXBwZXIgPSBuZXcgRmllbGRXcmFwcGVyKGZpZWxkQ29tcG9uZW50KTtcclxuICAgICAgY29uc3QgcGFnZU1vZGVsID0gdGhpcy5kb2N1bWVudC5wYWdlcy5maW5kKGZ1bmN0aW9uIChwKSB7XHJcbiAgICAgICAgcmV0dXJuIHAubnVtYmVyID09PSBmaWVsZC5wYWdlTnVtYmVyO1xyXG4gICAgICB9KTtcclxuICAgICAgd3JhcHBlci5maWVsZENvbXBvbmVudC5wYWdlU2l6ZSA9IG5ldyBTaXplKHBhZ2VNb2RlbC53aWR0aCwgcGFnZU1vZGVsLmhlaWdodCk7XHJcbiAgICAgIHdyYXBwZXIuZmllbGRDb21wb25lbnQuZmllbGQgPSBmaWVsZDtcclxuICAgICAgd3JhcHBlci5jb250ZXh0TWVudVN1YnNjcmlwdGlvbiA9IHdyYXBwZXIuZmllbGRDb21wb25lbnQuY29udGV4dE1lbnVDbGljay5zdWJzY3JpYmUoZXZlbnQgPT4gdGhpcy5maWVsZENvbnRleHRNZW51Q2xpY2soZXZlbnQpKTtcclxuXHJcbiAgICAgIHRoaXMuZmllbGRXcmFwcGVycy5zZXQoZmllbGQsIHdyYXBwZXIpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZmllbGRDb250ZXh0TWVudUNsaWNrKGV2ZW50OiBGaWVsZENvbnRleHRNZW51Q2xpY2spIHtcclxuICAgIGlmIChldmVudC5hY3Rpb24gPT0gXCJyZW5hbWVcIikge1xyXG4gICAgICB0aGlzLmZpZWxkTmFtZU1vZGFsLm9wZXJhdGlvbklkID0gZXZlbnQuZmllbGROYW1lO1xyXG4gICAgICB0aGlzLmZpZWxkTmFtZU1vZGFsLmluaXRpYWxWYWx1ZSA9IGV2ZW50LmZpZWxkTmFtZTtcclxuICAgICAgdGhpcy5fbW9kYWxTZXJ2aWNlLm9wZW4oXCJGaWVsZE5hbWVNb2RhbFwiKTtcclxuXHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoZXZlbnQuYWN0aW9uID09IFwicmVtb3ZlXCIpIHtcclxuICAgICAgdGhpcy5fdGVtcGxhdGUucmVtb3ZlRmllbGRCeU5hbWUoZXZlbnQuZmllbGROYW1lKTtcclxuXHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGZpZWxkTmFtZU1vZGFsQWNjZXB0KGV2ZW50KSB7XHJcbiAgICBsZXQgb2xkRmllbGROYW1lID0gZXZlbnQuaWQ7XHJcbiAgICBsZXQgbmV3RmllbGROYW1lID0gZXZlbnQubmV3VmFsdWU7XHJcblxyXG4gICAgaWYgKG9sZEZpZWxkTmFtZSAhPSBuZXdGaWVsZE5hbWUpIHtcclxuICAgICAgbGV0IGV4aXN0RmllbGRXaXRoTmFtZSA9IHRoaXMuX3RlbXBsYXRlLmdldEZpZWxkQnlOYW1lKG5ld0ZpZWxkTmFtZSk7XHJcbiAgICAgIGlmIChleGlzdEZpZWxkV2l0aE5hbWUpIHtcclxuICAgICAgICB0aGlzLmZpZWxkTmFtZU1vZGFsLmVycm9yID0gXCJGaWVsZCB3aXRoIHRoZSBzYW1lIG5hbWUgYWxyZWFkeSBleGlzdHNcIjtcclxuICAgICAgICByZXR1cm47XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICB0aGlzLl9tb2RhbFNlcnZpY2UuY2xvc2UoXCJGaWVsZE5hbWVNb2RhbFwiKTtcclxuICAgIGxldCBmaWVsZCA9IHRoaXMuX3RlbXBsYXRlLmdldEZpZWxkQnlOYW1lKG9sZEZpZWxkTmFtZSk7XHJcbiAgICBpZiAoZmllbGQpIHtcclxuICAgICAgZmllbGQubmFtZSA9IG5ld0ZpZWxkTmFtZTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHJlbW92ZUZpZWxkcygpIHtcclxuICAgIHRoaXMuZmllbGRXcmFwcGVycy5mb3JFYWNoKHdyYXBwZXIgPT4ge1xyXG4gICAgICB3cmFwcGVyLmRlc3Ryb3koKTtcclxuICAgIH0pO1xyXG5cclxuICAgIHRoaXMuZmllbGRXcmFwcGVycy5jbGVhcigpO1xyXG4gIH1cclxuXHJcbiAgcmVtb3ZlRmllbGQoZmllbGQ6IFRlbXBsYXRlRmllbGQpIHtcclxuICAgIGNvbnN0IHdyYXBwZXIgPSB0aGlzLmZpZWxkV3JhcHBlcnMuZ2V0KGZpZWxkKTtcclxuICAgIGlmICh3cmFwcGVyKSB7XHJcbiAgICAgIHdyYXBwZXIuZGVzdHJveSgpO1xyXG4gICAgfVxyXG4gICAgdGhpcy5maWVsZFdyYXBwZXJzLmRlbGV0ZShmaWVsZCk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGdldEN1cnJlbnRQb3NpdGlvbihwb3NpdGlvbiwgcGFnZSkge1xyXG4gICAgY29uc3QgeCA9IChwb3NpdGlvbi54IC0gcGFnZS5vZmZzZXQoKS5sZWZ0KTtcclxuICAgIGNvbnN0IHkgPSAocG9zaXRpb24ueSAtIHBhZ2Uub2Zmc2V0KCkudG9wKTtcclxuICAgIHJldHVybiBuZXcgUG9pbnQoeCwgeSk7XHJcbiAgfVxyXG5cclxuICAvLyBASG9zdExpc3RlbmVyKCdkb2N1bWVudDptb3VzZWRvd24nLCBbJyRldmVudCddKVxyXG4gIC8vIG9uTW91c2VEb3duKCRldmVudDogTW91c2VFdmVudCkge1xyXG4gIC8vICAgY29uc3QgcG9zID0gVXRpbHMuZ2V0TW91c2VQb3NpdGlvbigkZXZlbnQpO1xyXG5cclxuICAvLyAgIGxldCBlID0gZG9jdW1lbnQuZWxlbWVudEZyb21Qb2ludChwb3MueCwgcG9zLnkpO1xyXG4gIC8vIH1cclxuXHJcbiAgbmdPbkluaXQoKTogdm9pZCB7XHJcbiAgfVxyXG5cclxuICBuZ0FmdGVyVmlld0luaXQoKTogdm9pZCB7XHJcbiAgICB0aGlzLnVwZGF0ZUFjdGl2ZVBhZ2UoKTtcclxuICB9XHJcblxyXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xyXG4gICAgaWYgKHRoaXMuX2ZpZWxkQWRkZWRTdWJzY3JpcHRpb24pIHtcclxuICAgICAgdGhpcy5fZmllbGRBZGRlZFN1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIGlmICh0aGlzLl9maWVsZFJlbW92ZWRTdWJzY3JpcHRpb24pIHtcclxuICAgICAgdGhpcy5fZmllbGRSZW1vdmVkU3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHRoaXMuX2N1cnJlbnRUZW1wbGF0ZUNoYW5nZWRTdWJzY3JpcHRpb24pIHtcclxuICAgICAgdGhpcy5fY3VycmVudFRlbXBsYXRlQ2hhbmdlZFN1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBwcml2YXRlIF9tb2RhbFNlcnZpY2U6IE1vZGFsU2VydmljZSxcclxuICAgIHByaXZhdGUgaG9zdGluZ0NvbXBvbmVudHNTZXJ2aWNlOiBIb3N0aW5nRHluYW1pY0NvbXBvbmVudFNlcnZpY2UsXHJcbiAgICBwcml2YXRlIGFkZER5bmFtaWNDb21wb25lbnRTZXJ2aWNlOiBBZGREeW5hbWljQ29tcG9uZW50U2VydmljZSxcclxuICAgIHByaXZhdGUgX3pvb21TZXJ2aWNlOiBab29tU2VydmljZSxcclxuICAgIHByaXZhdGUgX3RlbXBsYXRlU2VydmljZTogVGVtcGxhdGVTZXJ2aWNlLFxyXG4gICAgcHJpdmF0ZSBfZG9jdW1lbnRQYWdlU2VydmljZTogRG9jdW1lbnRQYWdlU2VydmljZSkge1xyXG5cclxuICAgIHRoaXMuX3pvb20gPSBfem9vbVNlcnZpY2Uuem9vbTtcclxuICAgIF96b29tU2VydmljZS56b29tQ2hhbmdlLnN1YnNjcmliZSgoem9vbTogbnVtYmVyKSA9PiB7XHJcbiAgICAgIHRoaXMuX3pvb20gPSB6b29tO1xyXG4gICAgfSk7XHJcblxyXG4gICAgdGhpcy5fY3VycmVudFRlbXBsYXRlQ2hhbmdlZFN1YnNjcmlwdGlvbiA9IF90ZW1wbGF0ZVNlcnZpY2UuY3VycmVudFRlbXBsYXRlQ2hhbmdlZFxyXG4gICAgICAuc3Vic2NyaWJlKHRlbXBsYXRlID0+IHRoaXMuc2V0VGVtcGxhdGUodGVtcGxhdGUpKTtcclxuXHJcbiAgICB0aGlzLnNldFRlbXBsYXRlKHRoaXMuX3RlbXBsYXRlU2VydmljZS5jdXJyZW50VGVtcGxhdGUpO1xyXG5cclxuICAgIHRoaXMuX2RvY3VtZW50UGFnZVNlcnZpY2UuYWN0aXZlUGFnZUNoYW5nZWQuc3Vic2NyaWJlKF8gPT4gdGhpcy51cGRhdGVBY3RpdmVQYWdlKCkpO1xyXG4gIH1cclxuXHJcbiAgZG91YmxlVGFwKCRldmVudDogVG91Y2hFdmVudCkge1xyXG4gICAgLy8gICRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gIH1cclxuXHJcbiAgc2V0QWN0aXZlUGFnZSgkZXZlbnQpIHtcclxuICAgICRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICAgIGNvbnN0IHBvc2l0aW9uID0gVXRpbHMuZ2V0TW91c2VQb3NpdGlvbigkZXZlbnQpO1xyXG5cclxuICAgIGNvbnN0IGVsZW1lbnRzID0gZG9jdW1lbnQuZWxlbWVudHNGcm9tUG9pbnQocG9zaXRpb24ueCwgcG9zaXRpb24ueSk7XHJcbiAgICBjb25zdCBjdXJyZW50UGFnZSA9IGVsZW1lbnRzLmZpbmQoeCA9PiB4LmlkICYmIHguaWQuc3RhcnRzV2l0aChcInBhZ2UtXCIpKTtcclxuICAgIGlmIChjdXJyZW50UGFnZSkge1xyXG4gICAgICB0aGlzLl9kb2N1bWVudFBhZ2VTZXJ2aWNlLnNldEFjdGl2ZVBhZ2UocGFyc2VJbnQoY3VycmVudFBhZ2UuaWQuc3Vic3RyaW5nKFwicGFnZS1cIi5sZW5ndGgpKSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHVwZGF0ZUFjdGl2ZVBhZ2UoKSB7XHJcbiAgICBjb25zdCBhY3RpdmVQYWdlID0gXCJwYWdlLVwiICsgdGhpcy5fZG9jdW1lbnRQYWdlU2VydmljZS5hY3RpdmVQYWdlO1xyXG5cclxuICAgIGNvbnN0IGVsZW1lbnRzID0gdGhpcy5zdXJmYWNlLm5hdGl2ZUVsZW1lbnQucXVlcnlTZWxlY3RvckFsbCgnZ2QtcGFnZScpO1xyXG4gICAgZWxlbWVudHMuZm9yRWFjaChlbGVtZW50ID0+IHtcclxuICAgICAgbGV0IGNoaWxkID0gKGVsZW1lbnQgYXMgSFRNTEVsZW1lbnQpLmNoaWxkcmVuWzBdO1xyXG4gICAgICBpZiAoY2hpbGQuaWQgPT0gYWN0aXZlUGFnZSkge1xyXG4gICAgICAgIChjaGlsZCBhcyBIVE1MRWxlbWVudCkuc3R5bGUub3BhY2l0eSA9ICcxJztcclxuICAgICAgICAoY2hpbGQgYXMgSFRNTEVsZW1lbnQpLnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudC5zdHlsZS5iYWNrZ3JvdW5kID0gJyNGRkZGRkYnO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIChjaGlsZCBhcyBIVE1MRWxlbWVudCkuc3R5bGUub3BhY2l0eSA9ICcwLjUnO1xyXG4gICAgICAgIChjaGlsZCBhcyBIVE1MRWxlbWVudCkucGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50LnN0eWxlLmJhY2tncm91bmQgPSAnIzY4ODI5Nic7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBzZXRUZW1wbGF0ZSh0ZW1wbGF0ZTogVGVtcGxhdGUpIHtcclxuICAgIHRoaXMuX3RlbXBsYXRlID0gdGVtcGxhdGU7XHJcblxyXG4gICAgaWYgKHRoaXMuX2ZpZWxkQWRkZWRTdWJzY3JpcHRpb24pIHtcclxuICAgICAgdGhpcy5fZmllbGRBZGRlZFN1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIGlmICh0aGlzLl9maWVsZFJlbW92ZWRTdWJzY3JpcHRpb24pIHtcclxuICAgICAgdGhpcy5fZmllbGRSZW1vdmVkU3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKCF0aGlzLl90ZW1wbGF0ZSkge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5fZmllbGRBZGRlZFN1YnNjcmlwdGlvbiA9IHRoaXMuX3RlbXBsYXRlLmFkZGVkRmllbGQuc3Vic2NyaWJlKGZpZWxkID0+IHRoaXMuYWRkRmllbGQoZmllbGQpKTtcclxuICAgIHRoaXMuX2ZpZWxkUmVtb3ZlZFN1YnNjcmlwdGlvbiA9IHRoaXMuX3RlbXBsYXRlLnJlbW92ZWRGaWVsZC5zdWJzY3JpYmUoZmllbGQgPT4gdGhpcy5yZW1vdmVGaWVsZChmaWVsZCkpO1xyXG5cclxuICAgIHRoaXMucmVtb3ZlRmllbGRzKCk7XHJcbiAgICB0aGlzLl90ZW1wbGF0ZSA9IHRlbXBsYXRlO1xyXG4gICAgdGhpcy5fdGVtcGxhdGUuZmllbGRzLmZvckVhY2goZmllbGQgPT4ge1xyXG4gICAgICB0aGlzLmFkZEZpZWxkKGZpZWxkKTtcclxuICAgIH0pO1xyXG4gIH1cclxufVxyXG5cclxuY2xhc3MgRmllbGRXcmFwcGVyIHtcclxuICBmaWVsZENvbXBvbmVudDogRmllbGRDb21wb25lbnQ7XHJcbiAgY29udGV4dE1lbnVTdWJzY3JpcHRpb246IFN1YnNjcmlwdGlvbjtcclxuXHJcbiAgY29uc3RydWN0b3IocHVibGljIHJlZjogYW55KSB7XHJcbiAgICB0aGlzLmZpZWxkQ29tcG9uZW50ID0gPEZpZWxkQ29tcG9uZW50PnJlZi5pbnN0YW5jZTtcclxuICB9XHJcblxyXG4gIGRlc3Ryb3koKSB7XHJcbiAgICBpZiAodGhpcy5yZWYpIHtcclxuICAgICAgdGhpcy5yZWYuZGVzdHJveSgpO1xyXG4gICAgfVxyXG5cclxuICAgIGlmICh0aGlzLmNvbnRleHRNZW51U3Vic2NyaXB0aW9uKSB7XHJcbiAgICAgIHRoaXMuY29udGV4dE1lbnVTdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcclxuICAgIH1cclxuICB9XHJcbn0iXX0=