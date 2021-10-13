/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, ViewChild, ElementRef } from '@angular/core';
import { OperationState, TableValue } from '../app-models';
import { RenameModalComponent } from '../rename-modal/rename-modal.component';
import { ConfirmationModalComponent } from '../confirmation-modal/confirmation-modal.component';
import { ModalService } from "@groupdocs.examples.angular/common-components";
import { ParserService } from '../parser.service';
import { TemplateService } from '../template.service';
import { SourceFileService } from '../source-file.service';
import { UtilsService } from '../utils.service';
import { PlaceholderService } from '../placeholder.service';
import { TableViewerComponent } from '../table-viewer/table-viewer.component';
export class SidePanelComponent {
    /**
     * @param {?} _modalService
     * @param {?} _parserService
     * @param {?} _sourceFileService
     * @param {?} _templateService
     * @param {?} _utilsService
     * @param {?} _placeholderService
     */
    constructor(_modalService, _parserService, _sourceFileService, _templateService, _utilsService, _placeholderService) {
        this._modalService = _modalService;
        this._parserService = _parserService;
        this._sourceFileService = _sourceFileService;
        this._templateService = _templateService;
        this._utilsService = _utilsService;
        this._placeholderService = _placeholderService;
        this._parseState = new OperationState();
        this.isDataMode = true;
        this.isTemplateMode = false;
        this._currentTemplateChangedSubscription = this._templateService.currentTemplateChanged
            .subscribe((/**
         * @param {?} template
         * @return {?}
         */
        template => this.currentTemplate = template));
        this._templateAddedSubscription = this._templateService.templateAddedSubject
            .subscribe((/**
         * @param {?} template
         * @return {?}
         */
        template => this.templateIds.push(template)));
        this._templateRemovedSubscription = this._templateService.templateRemovedSubject
            .subscribe((/**
         * @param {?} templateId
         * @return {?}
         */
        templateId => this.removeTemplateId(templateId)));
        this.currentTemplate = this._templateService.currentTemplate;
        this.templateIds = [];
        this._templateService.templateIds.forEach((/**
         * @param {?} element
         * @return {?}
         */
        element => {
            this.templateIds.push(element);
        }));
    }
    /**
     * @return {?}
     */
    get parseState() {
        return this._parseState;
    }
    /**
     * @return {?}
     */
    get currentTemplate() {
        return this._currentTemplate;
    }
    /**
     * @param {?} template
     * @return {?}
     */
    set currentTemplate(template) {
        if (this._currentTemplateModifiedSubscription) {
            this._currentTemplateModifiedSubscription.unsubscribe();
        }
        this._currentTemplate = template;
        this._currentTemplateModifiedSubscription = this._currentTemplate.modified
            .subscribe((/**
         * @param {?} t
         * @return {?}
         */
        t => this.parseState.prompt = "Template was changed. Please parse data again."));
        this.parseState.prompt = "Press Parser to extract data by this template";
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        if (this._currentTemplateChangedSubscription) {
            this._currentTemplateChangedSubscription.unsubscribe();
        }
        if (this._templateAddedSubscription) {
            this._templateAddedSubscription.unsubscribe();
        }
        if (this._templateRemovedSubscription) {
            this._templateRemovedSubscription.unsubscribe();
        }
    }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
    /**
     * @return {?}
     */
    manageTemplates() {
        this.isDataMode = false;
        this.isTemplateMode = true;
    }
    /**
     * @param {?} templateId
     * @return {?}
     */
    isCurrentTemplate(templateId) {
        return this.currentTemplate && this.currentTemplate.id == templateId.id;
    }
    /**
     * @param {?} templateId
     * @return {?}
     */
    selectTemplateClick(templateId) {
        if (!templateId) {
            return;
        }
        this._templateService.selectTemplate(templateId);
        this.showData();
    }
    /**
     * @return {?}
     */
    createTemplateClick() {
        this._templateService.createTemplate();
    }
    /**
     * @param {?} templateId
     * @return {?}
     */
    renameTemplateClick(templateId) {
        if (templateId && this.templateNameModal) {
            this.templateNameModal.operationId = templateId.id;
            this.templateNameModal.initialValue = templateId.name;
            this._modalService.open("TemplateNameModal");
        }
    }
    /**
     * @param {?} event
     * @return {?}
     */
    templateNameModalAccept(event) {
        /** @type {?} */
        const templateId = event.id;
        /** @type {?} */
        const templateName = event.newValue;
        try {
            this._templateService.renameTemplate({ id: templateId, name: templateName });
        }
        catch (error) {
            this.templateNameModal.error = error;
            return;
        }
        this._modalService.close("TemplateNameModal");
    }
    /**
     * @param {?} templateId
     * @return {?}
     */
    removeTemplateClick(templateId) {
        if (this.templateRemoveModal) {
            this.templateRemoveModal.operationId = templateId.id;
            this.templateRemoveModal.promptText = "Remove template <b>" + templateId.name + "</b>?";
            this._modalService.open("TemplateRemoveModal");
        }
    }
    /**
     * @param {?} operationId
     * @return {?}
     */
    templateRemoveModalAccept(operationId) {
        this._modalService.close("TemplateRemoveModal");
        this._templateService.removeTemplate({ id: operationId, name: "" });
    }
    /**
     * @param {?} templateId
     * @return {?}
     */
    downloadTemplateClick(templateId) {
        /** @type {?} */
        const templateJson = this._templateService.serialize(templateId);
        /** @type {?} */
        const f = new File([templateJson], templateId.name + ".json", {
            type: "text/plain"
        });
        /** @type {?} */
        const fileUrl = window.URL.createObjectURL(f);
        /** @type {?} */
        let fileLink = document.createElement('a');
        fileLink.href = fileUrl;
        fileLink.download = f.name;
        fileLink.click();
        URL.revokeObjectURL(fileUrl);
    }
    /**
     * @param {?} event
     * @return {?}
     */
    onFileSelected(event) {
        /** @type {?} */
        const file = event.target.files[0];
        if (file) {
            /** @type {?} */
            let reader = new FileReader();
            reader.readAsText(file);
            reader.onload = (/**
             * @param {?} x
             * @return {?}
             */
            x => {
                this._templateService.deserialize(reader.result.toString());
                this.uploadTemplate.nativeElement.value = null;
            });
        }
    }
    /**
     * @return {?}
     */
    showData() {
        this.isTemplateMode = false;
        this.isDataMode = true;
    }
    /**
     * @return {?}
     */
    parse() {
        this.parseState.execute();
        /** @type {?} */
        let state = this._placeholderService.startOperation("Parsing data...");
        /** @type {?} */
        const observer = {
            next: (/**
             * @param {?} response
             * @return {?}
             */
            (response) => {
                this.parseState.result = response.data;
            }),
            error: (/**
             * @param {?} err
             * @return {?}
             */
            (err) => {
                this.parseState.error = this._parserService.getErrorMessage(err);
                state.error(err);
            }),
            complete: (/**
             * @return {?}
             */
            () => state.complete())
        };
        this._parserService.parseByTemplate(this._sourceFileService.sourceFile, null, this._templateService.currentTemplate).subscribe(observer);
    }
    /**
     * @return {?}
     */
    downloadResultsAsCsv() {
        if (!this.parseState.isCompleted || this.parseState.result.length == 0) {
            return;
        }
        /** @type {?} */
        const csv = this._utilsService.generateCsvForParseResults(this.parseState.result);
        /** @type {?} */
        let f = new File([csv], this._sourceFileService.sourceFile.guid + "- data.csv", {
            type: "text/plain"
        });
        /** @type {?} */
        const fileUrl = window.URL.createObjectURL(f);
        /** @type {?} */
        var fileLink = document.createElement('a');
        fileLink.href = fileUrl;
        fileLink.download = f.name;
        fileLink.click();
        URL.revokeObjectURL(fileUrl);
    }
    /**
     * @param {?} obj
     * @return {?}
     */
    isArray(obj) {
        return Array.isArray(obj);
    }
    /**
     * @param {?} value
     * @return {?}
     */
    showTableValue(value) {
        /** @type {?} */
        const table = new TableValue(value);
        this.tableViewer.table = table;
        this._modalService.open("TableViewer");
    }
    /**
     * @private
     * @param {?} templateId
     * @return {?}
     */
    removeTemplateId(templateId) {
        for (var i = 0; i < this.templateIds.length; i++) {
            if (this.templateIds[i].id == templateId.id) {
                this.templateIds.splice(i, 1);
                return;
            }
        }
    }
}
SidePanelComponent.decorators = [
    { type: Component, args: [{
                selector: 'app-side-panel',
                template: "<div class=\"side-panel\">\r\n    <input type=\"file\" #uploadTemplate (change)=\"onFileSelected($event)\" />\r\n\r\n    <div *ngIf=\"isDataMode\">\r\n        <div class=\"side-panel-title\">\r\n            <div>{{ currentTemplate?.name }}</div>\r\n            <div class=\"image-btn\" (click)=\"manageTemplates()\">\r\n                <fa-icon [icon]=\"'bars'\"></fa-icon>\r\n            </div>\r\n        </div>\r\n\r\n        <div class=\"side-panel-toolbar\">\r\n            <div class=\"image-btn\" (click)=\"createTemplateClick()\" title=\"Create a new template\">\r\n                <fa-icon [icon]=\"'file'\"></fa-icon>\r\n            </div>\r\n            <div class=\"image-btn\" (click)=\"uploadTemplate.click()\" title=\"Upload the existing template\">\r\n                <fa-icon [icon]=\"'upload'\"></fa-icon>\r\n            </div>\r\n\r\n            <div class=\"side-panel-toolbar-space\"></div>\r\n\r\n            <div class=\"image-btn\" (click)=\"renameTemplateClick(currentTemplate)\" title=\"Rename the current template\">\r\n                <fa-icon [icon]=\"'edit'\"></fa-icon>\r\n            </div>\r\n            <div class=\"image-btn\" *ngIf=\"currentTemplate?.isStored\" (click)=\"removeTemplateClick(currentTemplate)\"\r\n                title=\"Remove the current template\">\r\n                <fa-icon [icon]=\"'trash'\"></fa-icon>\r\n            </div>\r\n            <div class=\"image-btn\" *ngIf=\"currentTemplate?.isStored\" (click)=\"downloadTemplateClick(currentTemplate)\"\r\n                title=\"Download the current template\">\r\n                <fa-icon [icon]=\"'file-download'\"></fa-icon>\r\n            </div>\r\n        </div>\r\n\r\n        <div class=\"side-panel-content\" *ngIf=\"parseState.isProcessing\">\r\n            <div>Parsing data...</div>\r\n        </div>\r\n\r\n        <div class=\"side-panel-content\" *ngIf=\"parseState.isFailed\">\r\n            <div class=\"side-panel-content-text error-text\">Error occurs while parsing data.</div>\r\n            <div class=\"btn\" (click)=\"parse()\">Parse again</div>\r\n        </div>\r\n\r\n        <div class=\"side-panel-content\" *ngIf=\"parseState.isReadyToRun\">\r\n            <div class=\"side-panel-content-text\" [innerHTML]=\"parseState.prompt\"></div>\r\n            <div class=\"btn\" (click)=\"parse()\">Parse</div>\r\n        </div>\r\n\r\n        <div class=\"side-panel-content\" *ngIf=\"parseState.isCompleted && !(parseState.result?.length > 0)\">\r\n            <div class=\"side-panel-content-text\">\r\n                No data is extracted. Try to change the template.\r\n            </div>\r\n        </div>\r\n\r\n        <div class=\"data-panel\" *ngIf=\"parseState.result?.length > 0\">\r\n            <div class=\"side-panel-toolbar\">\r\n                <div class=\"btn\" (click)=\"downloadResultsAsCsv()\">Download as CSV</div>\r\n            </div>\r\n            <div class=\"data-item list-item\" *ngFor=\"let r of parseState.result\">\r\n                <div class=\"data-item-field\">{{ r.name }}</div>\r\n                <div class=\"data-item-value\" *ngIf=\"r.value && !isArray(r.value)\">{{ r.value }}</div>\r\n                <div class=\"data-item-value\" *ngIf=\"r.value && isArray(r.value)\">\r\n                    <div class=\"btn\" (click)=\"showTableValue(r.value)\">Show Table</div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n\r\n    <div *ngIf=\"isTemplateMode\">\r\n        <div class=\"side-panel-title\">\r\n            <div>Manage Templates</div>\r\n            <div class=\"image-btn\" (click)=\"showData()\">\r\n                <fa-icon [icon]=\"'times'\"></fa-icon>\r\n            </div>\r\n        </div>\r\n        <div class=\"no-data-panel\" *ngIf=\"templateIds.length == 0\">\r\n            <div class=\"side-panel-content-text\">There are no templates. Try to create a new one or upload the existing\r\n                one.</div>\r\n        </div>\r\n\r\n        <div class=\"template-list\">\r\n            <div class=\"template-item list-item\" *ngFor=\"let t of templateIds\" (dblclick)=\"selectTemplateClick(t)\">\r\n                <div class=\"template-item-text\" [ngClass]=\"{'template-item-current': isCurrentTemplate(t)}\">{{ t?.name\r\n                    }} </div>\r\n                <div class=\"image-btn\" (click)=\"renameTemplateClick(t)\" title=\"Rename a template\">\r\n                    <fa-icon [icon]=\"'edit'\"></fa-icon>\r\n                </div>\r\n                <div class=\"image-btn\" (click)=\"downloadTemplateClick(t)\" title=\"Download a template\">\r\n                    <fa-icon [icon]=\"'file-download'\"></fa-icon>\r\n                </div>\r\n                <div class=\"image-btn\" (click)=\"removeTemplateClick(t)\" title=\"Remove a template\">\r\n                    <fa-icon [icon]=\"'trash'\"></fa-icon>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n<app-rename-modal #templateNameModal [id]=\"'TemplateNameModal'\" [title]=\"'Rename Template'\"\r\n    [promptText]=\"'Enter a new template name:'\" [acceptText]=\"'Save'\" (acceptEvent)=\"templateNameModalAccept($event)\">\r\n</app-rename-modal>\r\n<app-confirmation-modal #templateRemoveModal [id]=\"'TemplateRemoveModal'\" [title]=\"'Remove Template'\"\r\n    [acceptText]=\"'Remove'\" (acceptEvent)=\"templateRemoveModalAccept($event)\">\r\n</app-confirmation-modal>\r\n<app-table-viewer #tableViewer></app-table-viewer>",
                styles: [".btn{padding:5px 20px;background-color:#25c2d4;cursor:pointer;color:#fff!important}.btn:hover{background-color:#688296;color:#ccd0d4!important}.image-btn{text-align:center;color:#fff;cursor:pointer;margin:1px}.image-btn:hover{color:#688296!important}.image-btn>fa-icon{padding:5px;font-size:16px}.list-item:nth-of-type(even){background-color:#f4f4f4}.list-item:hover{background-color:#e5e5e5}.list-item .image-btn,input{display:none}.list-item:hover .image-btn{display:block;color:#c4c4c4}.error-text{color:red}.side-panel{width:100%;height:100%}.side-panel>div{display:-webkit-box;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;flex-direction:column;height:100%}.side-panel-title{background-color:#25c2d4;color:#fff;display:-webkit-box;display:flex;-webkit-box-align:center;align-items:center;-webkit-box-pack:justify;justify-content:space-between;padding:10px}.side-panel-title>div{padding-left:5px}.side-panel-toolbar{display:-webkit-box;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;flex-direction:row;padding:10px}.side-panel-toolbar>div{color:#acacac}.side-panel-toolbar-space{margin-left:10px}.side-panel-content-text{padding:20px;text-align:center}.side-panel-content{display:-webkit-box;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;flex-direction:column;-webkit-box-align:center;align-items:center;-webkit-box-pack:center;justify-content:center;height:100%;width:100%}.data-panel{overflow-x:hidden;overflow-y:auto;display:-webkit-box;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;flex-direction:column;-webkit-box-align:center;align-items:center;-webkit-box-pack:stretch;justify-content:stretch;height:100%;width:100%}.data-item{display:-webkit-box;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;flex-direction:row;-webkit-box-align:center;align-items:center;-webkit-box-pack:stretch;justify-content:stretch;width:100%}.data-item>div{padding:10px}.data-item-field,.data-item-value{-webkit-box-flex:1;flex:1}.template-list{position:relative;overflow-x:hidden;overflow-y:auto}.template-item{display:-webkit-box;display:flex;-webkit-box-align:center;align-items:center;padding:5px;height:2em;cursor:pointer}.template-item-text{-webkit-box-flex:1;flex:1;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;padding:5px 15px}.template-item-current{font-weight:700}.template-item-btn>fa-icon{padding:5px;font-size:16px}"]
            }] }
];
/** @nocollapse */
SidePanelComponent.ctorParameters = () => [
    { type: ModalService },
    { type: ParserService },
    { type: SourceFileService },
    { type: TemplateService },
    { type: UtilsService },
    { type: PlaceholderService }
];
SidePanelComponent.propDecorators = {
    templateNameModal: [{ type: ViewChild, args: ['templateNameModal', { static: true },] }],
    templateRemoveModal: [{ type: ViewChild, args: ['templateRemoveModal', { static: true },] }],
    uploadTemplate: [{ type: ViewChild, args: ['uploadTemplate', { static: true },] }],
    tableViewer: [{ type: ViewChild, args: ['tableViewer', { static: true },] }]
};
if (false) {
    /**
     * @type {?}
     * @private
     */
    SidePanelComponent.prototype._currentTemplateChangedSubscription;
    /**
     * @type {?}
     * @private
     */
    SidePanelComponent.prototype._templateAddedSubscription;
    /**
     * @type {?}
     * @private
     */
    SidePanelComponent.prototype._templateRemovedSubscription;
    /**
     * @type {?}
     * @private
     */
    SidePanelComponent.prototype._currentTemplate;
    /**
     * @type {?}
     * @private
     */
    SidePanelComponent.prototype._currentTemplateModifiedSubscription;
    /**
     * @type {?}
     * @private
     */
    SidePanelComponent.prototype._parseState;
    /** @type {?} */
    SidePanelComponent.prototype.templateNameModal;
    /** @type {?} */
    SidePanelComponent.prototype.templateRemoveModal;
    /** @type {?} */
    SidePanelComponent.prototype.uploadTemplate;
    /** @type {?} */
    SidePanelComponent.prototype.tableViewer;
    /** @type {?} */
    SidePanelComponent.prototype.templateIds;
    /** @type {?} */
    SidePanelComponent.prototype.isTemplateMode;
    /** @type {?} */
    SidePanelComponent.prototype.isDataMode;
    /**
     * @type {?}
     * @private
     */
    SidePanelComponent.prototype._modalService;
    /**
     * @type {?}
     * @private
     */
    SidePanelComponent.prototype._parserService;
    /**
     * @type {?}
     * @private
     */
    SidePanelComponent.prototype._sourceFileService;
    /**
     * @type {?}
     * @private
     */
    SidePanelComponent.prototype._templateService;
    /**
     * @type {?}
     * @private
     */
    SidePanelComponent.prototype._utilsService;
    /**
     * @type {?}
     * @private
     */
    SidePanelComponent.prototype._placeholderService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2lkZS1wYW5lbC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ3JvdXBkb2NzLmV4YW1wbGVzLmFuZ3VsYXIvcGFyc2VyLyIsInNvdXJjZXMiOlsibGliL3NpZGUtcGFuZWwvc2lkZS1wYW5lbC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQXFCLFNBQVMsRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFcEYsT0FBTyxFQUFFLGNBQWMsRUFBd0MsVUFBVSxFQUF1QyxNQUFNLGVBQWUsQ0FBQztBQUN0SSxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSx3Q0FBd0MsQ0FBQztBQUM5RSxPQUFPLEVBQUUsMEJBQTBCLEVBQUUsTUFBTSxvREFBb0QsQ0FBQztBQUVoRyxPQUFPLEVBTUwsWUFBWSxFQU9iLE1BQU0sK0NBQStDLENBQUM7QUFFdkQsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBQ2xELE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUV0RCxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUMzRCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sa0JBQWtCLENBQUM7QUFDaEQsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDNUQsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sd0NBQXdDLENBQUM7QUFPOUUsTUFBTSxPQUFPLGtCQUFrQjs7Ozs7Ozs7O0lBZTdCLFlBQ1UsYUFBMkIsRUFDM0IsY0FBNkIsRUFDN0Isa0JBQXFDLEVBQ3JDLGdCQUFpQyxFQUNqQyxhQUEyQixFQUMzQixtQkFBdUM7UUFMdkMsa0JBQWEsR0FBYixhQUFhLENBQWM7UUFDM0IsbUJBQWMsR0FBZCxjQUFjLENBQWU7UUFDN0IsdUJBQWtCLEdBQWxCLGtCQUFrQixDQUFtQjtRQUNyQyxxQkFB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QUUxRCwrQ0FBMEY7O0lBQzFGLGlEQUFvRzs7SUFDcEcsNENBQTBFOztJQUMxRSx5Q0FBOEU7O0lBMkI5RSx5Q0FBMEI7O0lBQzFCLDRDQUF3Qjs7SUFDeEIsd0NBQW9COzs7OztJQTFCbEIsMkNBQW1DOzs7OztJQUNuQyw0Q0FBcUM7Ozs7O0lBQ3JDLGdEQUE2Qzs7Ozs7SUFDN0MsOENBQXlDOzs7OztJQUN6QywyQ0FBbUM7Ozs7O0lBQ25DLGlEQUErQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25EZXN0cm95LCBPbkluaXQsIFZpZXdDaGlsZCwgRWxlbWVudFJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBEb21TYW5pdGl6ZXIgfSBmcm9tICdAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyJztcclxuaW1wb3J0IHsgT3BlcmF0aW9uU3RhdGUsIFBhcnNlQnlUZW1wbGF0ZVJlc3BvbnNlLCBQYXJzZVJlc3VsdCwgVGFibGVWYWx1ZSwgVGVtcGxhdGUsIFRlbXBsYXRlRmllbGQsIFRlbXBsYXRlSWQgfSBmcm9tICcuLi9hcHAtbW9kZWxzJztcclxuaW1wb3J0IHsgUmVuYW1lTW9kYWxDb21wb25lbnQgfSBmcm9tICcuLi9yZW5hbWUtbW9kYWwvcmVuYW1lLW1vZGFsLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IENvbmZpcm1hdGlvbk1vZGFsQ29tcG9uZW50IH0gZnJvbSAnLi4vY29uZmlybWF0aW9uLW1vZGFsL2NvbmZpcm1hdGlvbi1tb2RhbC5jb21wb25lbnQnO1xyXG5cclxuaW1wb3J0IHtcclxuICBBZGREeW5hbWljQ29tcG9uZW50U2VydmljZSxcclxuICBDb21tb25Nb2RhbHMsXHJcbiAgRmlsZUNyZWRlbnRpYWxzLFxyXG4gIEZpbGVNb2RlbCwgRm9ybWF0dGluZyxcclxuICBIb3N0aW5nRHluYW1pY0NvbXBvbmVudFNlcnZpY2UsXHJcbiAgTW9kYWxTZXJ2aWNlLFxyXG4gIE5hdmlnYXRlU2VydmljZSwgUGFnZVByZWxvYWRTZXJ2aWNlLCBQYXNzd29yZFNlcnZpY2UsXHJcbiAgVG9wVGFiQWN0aXZhdG9yU2VydmljZSwgVXBsb2FkRmlsZXNTZXJ2aWNlLFxyXG4gIFV0aWxzLFxyXG4gIFdpbmRvd1NlcnZpY2UsXHJcbiAgWm9vbVNlcnZpY2UsXHJcbiAgRXhjZXB0aW9uTWVzc2FnZVNlcnZpY2VcclxufSBmcm9tIFwiQGdyb3VwZG9jcy5leGFtcGxlcy5hbmd1bGFyL2NvbW1vbi1jb21wb25lbnRzXCI7XHJcblxyXG5pbXBvcnQgeyBQYXJzZXJTZXJ2aWNlIH0gZnJvbSAnLi4vcGFyc2VyLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBUZW1wbGF0ZVNlcnZpY2UgfSBmcm9tICcuLi90ZW1wbGF0ZS5zZXJ2aWNlJztcclxuaW1wb3J0IHsgU3ViamVjdCwgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcyc7XHJcbmltcG9ydCB7IFNvdXJjZUZpbGVTZXJ2aWNlIH0gZnJvbSAnLi4vc291cmNlLWZpbGUuc2VydmljZSc7XHJcbmltcG9ydCB7IFV0aWxzU2VydmljZSB9IGZyb20gJy4uL3V0aWxzLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBQbGFjZWhvbGRlclNlcnZpY2UgfSBmcm9tICcuLi9wbGFjZWhvbGRlci5zZXJ2aWNlJztcclxuaW1wb3J0IHsgVGFibGVWaWV3ZXJDb21wb25lbnQgfSBmcm9tICcuLi90YWJsZS12aWV3ZXIvdGFibGUtdmlld2VyLmNvbXBvbmVudCc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2FwcC1zaWRlLXBhbmVsJyxcclxuICB0ZW1wbGF0ZVVybDogJy4vc2lkZS1wYW5lbC5jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVVcmxzOiBbJy4vc2lkZS1wYW5lbC5jb21wb25lbnQubGVzcyddXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBTaWRlUGFuZWxDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XHJcblxyXG4gIHByaXZhdGUgX2N1cnJlbnRUZW1wbGF0ZUNoYW5nZWRTdWJzY3JpcHRpb246IFN1YnNjcmlwdGlvbjtcclxuICBwcml2YXRlIF90ZW1wbGF0ZUFkZGVkU3Vic2NyaXB0aW9uOiBTdWJzY3JpcHRpb247XHJcbiAgcHJpdmF0ZSBfdGVtcGxhdGVSZW1vdmVkU3Vic2NyaXB0aW9uOiBTdWJzY3JpcHRpb247XHJcblxyXG4gIHByaXZhdGUgX2N1cnJlbnRUZW1wbGF0ZTogVGVtcGxhdGU7XHJcbiAgcHJpdmF0ZSBfY3VycmVudFRlbXBsYXRlTW9kaWZpZWRTdWJzY3JpcHRpb246IFN1YnNjcmlwdGlvbjtcclxuICBwcml2YXRlIF9wYXJzZVN0YXRlID0gbmV3IE9wZXJhdGlvblN0YXRlPFBhcnNlUmVzdWx0W10+KCk7XHJcblxyXG4gIEBWaWV3Q2hpbGQoJ3RlbXBsYXRlTmFtZU1vZGFsJywgeyBzdGF0aWM6IHRydWUgfSkgdGVtcGxhdGVOYW1lTW9kYWw6IFJlbmFtZU1vZGFsQ29tcG9uZW50O1xyXG4gIEBWaWV3Q2hpbGQoJ3RlbXBsYXRlUmVtb3ZlTW9kYWwnLCB7IHN0YXRpYzogdHJ1ZSB9KSB0ZW1wbGF0ZVJlbW92ZU1vZGFsOiBDb25maXJtYXRpb25Nb2RhbENvbXBvbmVudDtcclxuICBAVmlld0NoaWxkKCd1cGxvYWRUZW1wbGF0ZScsIHsgc3RhdGljOiB0cnVlIH0pIHVwbG9hZFRlbXBsYXRlOiBFbGVtZW50UmVmO1xyXG4gIEBWaWV3Q2hpbGQoJ3RhYmxlVmlld2VyJywgeyBzdGF0aWM6IHRydWUgfSkgdGFibGVWaWV3ZXI6IFRhYmxlVmlld2VyQ29tcG9uZW50O1xyXG5cclxuICBjb25zdHJ1Y3RvcihcclxuICAgIHByaXZhdGUgX21vZGFsU2VydmljZTogTW9kYWxTZXJ2aWNlLFxyXG4gICAgcHJpdmF0ZSBfcGFyc2VyU2VydmljZTogUGFyc2VyU2VydmljZSxcclxuICAgIHByaXZhdGUgX3NvdXJjZUZpbGVTZXJ2aWNlOiBTb3VyY2VGaWxlU2VydmljZSxcclxuICAgIHByaXZhdGUgX3RlbXBsYXRlU2VydmljZTogVGVtcGxhdGVTZXJ2aWNlLFxyXG4gICAgcHJpdmF0ZSBfdXRpbHNTZXJ2aWNlOiBVdGlsc1NlcnZpY2UsXHJcbiAgICBwcml2YXRlIF9wbGFjZWhvbGRlclNlcnZpY2U6IFBsYWNlaG9sZGVyU2VydmljZSkge1xyXG5cclxuICAgIHRoaXMuaXNEYXRhTW9kZSA9IHRydWU7XHJcbiAgICB0aGlzLmlzVGVtcGxhdGVNb2RlID0gZmFsc2U7XHJcblxyXG4gICAgdGhpcy5fY3VycmVudFRlbXBsYXRlQ2hhbmdlZFN1YnNjcmlwdGlvbiA9IHRoaXMuX3RlbXBsYXRlU2VydmljZS5jdXJyZW50VGVtcGxhdGVDaGFuZ2VkXHJcbiAgICAgIC5zdWJzY3JpYmUodGVtcGxhdGUgPT4gdGhpcy5jdXJyZW50VGVtcGxhdGUgPSB0ZW1wbGF0ZSk7XHJcbiAgICB0aGlzLl90ZW1wbGF0ZUFkZGVkU3Vic2NyaXB0aW9uID0gdGhpcy5fdGVtcGxhdGVTZXJ2aWNlLnRlbXBsYXRlQWRkZWRTdWJqZWN0XHJcbiAgICAgIC5zdWJzY3JpYmUodGVtcGxhdGUgPT4gdGhpcy50ZW1wbGF0ZUlkcy5wdXNoKHRlbXBsYXRlKSk7XHJcbiAgICB0aGlzLl90ZW1wbGF0ZVJlbW92ZWRTdWJzY3JpcHRpb24gPSB0aGlzLl90ZW1wbGF0ZVNlcnZpY2UudGVtcGxhdGVSZW1vdmVkU3ViamVjdFxyXG4gICAgICAuc3Vic2NyaWJlKHRlbXBsYXRlSWQgPT4gdGhpcy5yZW1vdmVUZW1wbGF0ZUlkKHRlbXBsYXRlSWQpKTtcclxuXHJcbiAgICB0aGlzLmN1cnJlbnRUZW1wbGF0ZSA9IHRoaXMuX3RlbXBsYXRlU2VydmljZS5jdXJyZW50VGVtcGxhdGU7XHJcbiAgICB0aGlzLnRlbXBsYXRlSWRzID0gW107XHJcbiAgICB0aGlzLl90ZW1wbGF0ZVNlcnZpY2UudGVtcGxhdGVJZHMuZm9yRWFjaChlbGVtZW50ID0+IHtcclxuICAgICAgdGhpcy50ZW1wbGF0ZUlkcy5wdXNoKGVsZW1lbnQpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICB0ZW1wbGF0ZUlkczogVGVtcGxhdGVJZFtdO1xyXG4gIGlzVGVtcGxhdGVNb2RlOiBib29sZWFuO1xyXG4gIGlzRGF0YU1vZGU6IGJvb2xlYW47XHJcblxyXG4gIGdldCBwYXJzZVN0YXRlKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuX3BhcnNlU3RhdGU7XHJcbiAgfVxyXG5cclxuICBnZXQgY3VycmVudFRlbXBsYXRlKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuX2N1cnJlbnRUZW1wbGF0ZTtcclxuICB9XHJcblxyXG4gIHNldCBjdXJyZW50VGVtcGxhdGUodGVtcGxhdGU6IFRlbXBsYXRlKSB7XHJcbiAgICBpZiAodGhpcy5fY3VycmVudFRlbXBsYXRlTW9kaWZpZWRTdWJzY3JpcHRpb24pIHtcclxuICAgICAgdGhpcy5fY3VycmVudFRlbXBsYXRlTW9kaWZpZWRTdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLl9jdXJyZW50VGVtcGxhdGUgPSB0ZW1wbGF0ZTtcclxuICAgIHRoaXMuX2N1cnJlbnRUZW1wbGF0ZU1vZGlmaWVkU3Vic2NyaXB0aW9uID0gdGhpcy5fY3VycmVudFRlbXBsYXRlLm1vZGlmaWVkXHJcbiAgICAgIC5zdWJzY3JpYmUodCA9PiB0aGlzLnBhcnNlU3RhdGUucHJvbXB0ID0gXCJUZW1wbGF0ZSB3YXMgY2hhbmdlZC4gUGxlYXNlIHBhcnNlIGRhdGEgYWdhaW4uXCIpO1xyXG5cclxuICAgIHRoaXMucGFyc2VTdGF0ZS5wcm9tcHQgPSBcIlByZXNzIFBhcnNlciB0byBleHRyYWN0IGRhdGEgYnkgdGhpcyB0ZW1wbGF0ZVwiO1xyXG4gIH1cclxuXHJcbiAgbmdPbkRlc3Ryb3koKSB7XHJcbiAgICBpZiAodGhpcy5fY3VycmVudFRlbXBsYXRlQ2hhbmdlZFN1YnNjcmlwdGlvbikge1xyXG4gICAgICB0aGlzLl9jdXJyZW50VGVtcGxhdGVDaGFuZ2VkU3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHRoaXMuX3RlbXBsYXRlQWRkZWRTdWJzY3JpcHRpb24pIHtcclxuICAgICAgdGhpcy5fdGVtcGxhdGVBZGRlZFN1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIGlmICh0aGlzLl90ZW1wbGF0ZVJlbW92ZWRTdWJzY3JpcHRpb24pIHtcclxuICAgICAgdGhpcy5fdGVtcGxhdGVSZW1vdmVkU3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBuZ09uSW5pdCgpIHtcclxuICB9XHJcblxyXG4gIG1hbmFnZVRlbXBsYXRlcygpIHtcclxuICAgIHRoaXMuaXNEYXRhTW9kZSA9IGZhbHNlO1xyXG4gICAgdGhpcy5pc1RlbXBsYXRlTW9kZSA9IHRydWU7XHJcbiAgfVxyXG5cclxuICBpc0N1cnJlbnRUZW1wbGF0ZSh0ZW1wbGF0ZUlkOiBUZW1wbGF0ZUlkKSB7XHJcbiAgICByZXR1cm4gdGhpcy5jdXJyZW50VGVtcGxhdGUgJiYgdGhpcy5jdXJyZW50VGVtcGxhdGUuaWQgPT0gdGVtcGxhdGVJZC5pZDtcclxuICB9XHJcblxyXG4gIHNlbGVjdFRlbXBsYXRlQ2xpY2sodGVtcGxhdGVJZDogVGVtcGxhdGVJZCkge1xyXG4gICAgaWYgKCF0ZW1wbGF0ZUlkKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLl90ZW1wbGF0ZVNlcnZpY2Uuc2VsZWN0VGVtcGxhdGUodGVtcGxhdGVJZCk7XHJcbiAgICB0aGlzLnNob3dEYXRhKCk7XHJcbiAgfVxyXG5cclxuICBjcmVhdGVUZW1wbGF0ZUNsaWNrKCkge1xyXG4gICAgdGhpcy5fdGVtcGxhdGVTZXJ2aWNlLmNyZWF0ZVRlbXBsYXRlKCk7XHJcbiAgfVxyXG5cclxuICByZW5hbWVUZW1wbGF0ZUNsaWNrKHRlbXBsYXRlSWQ6IFRlbXBsYXRlSWQpIHtcclxuICAgIGlmICh0ZW1wbGF0ZUlkICYmIHRoaXMudGVtcGxhdGVOYW1lTW9kYWwpIHtcclxuICAgICAgdGhpcy50ZW1wbGF0ZU5hbWVNb2RhbC5vcGVyYXRpb25JZCA9IHRlbXBsYXRlSWQuaWQ7XHJcbiAgICAgIHRoaXMudGVtcGxhdGVOYW1lTW9kYWwuaW5pdGlhbFZhbHVlID0gdGVtcGxhdGVJZC5uYW1lO1xyXG5cclxuICAgICAgdGhpcy5fbW9kYWxTZXJ2aWNlLm9wZW4oXCJUZW1wbGF0ZU5hbWVNb2RhbFwiKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHRlbXBsYXRlTmFtZU1vZGFsQWNjZXB0KGV2ZW50KSB7XHJcbiAgICBjb25zdCB0ZW1wbGF0ZUlkID0gZXZlbnQuaWQ7XHJcbiAgICBjb25zdCB0ZW1wbGF0ZU5hbWUgPSBldmVudC5uZXdWYWx1ZTtcclxuXHJcbiAgICB0cnkge1xyXG4gICAgICB0aGlzLl90ZW1wbGF0ZVNlcnZpY2UucmVuYW1lVGVtcGxhdGUoeyBpZDogdGVtcGxhdGVJZCwgbmFtZTogdGVtcGxhdGVOYW1lIH0pO1xyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgdGhpcy50ZW1wbGF0ZU5hbWVNb2RhbC5lcnJvciA9IGVycm9yO1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5fbW9kYWxTZXJ2aWNlLmNsb3NlKFwiVGVtcGxhdGVOYW1lTW9kYWxcIik7XHJcbiAgfVxyXG5cclxuICByZW1vdmVUZW1wbGF0ZUNsaWNrKHRlbXBsYXRlSWQ6IFRlbXBsYXRlSWQpIHtcclxuICAgIGlmICh0aGlzLnRlbXBsYXRlUmVtb3ZlTW9kYWwpIHtcclxuICAgICAgdGhpcy50ZW1wbGF0ZVJlbW92ZU1vZGFsLm9wZXJhdGlvbklkID0gdGVtcGxhdGVJZC5pZDtcclxuICAgICAgdGhpcy50ZW1wbGF0ZVJlbW92ZU1vZGFsLnByb21wdFRleHQgPSBcIlJlbW92ZSB0ZW1wbGF0ZSA8Yj5cIiArIHRlbXBsYXRlSWQubmFtZSArIFwiPC9iPj9cIjtcclxuXHJcbiAgICAgIHRoaXMuX21vZGFsU2VydmljZS5vcGVuKFwiVGVtcGxhdGVSZW1vdmVNb2RhbFwiKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHRlbXBsYXRlUmVtb3ZlTW9kYWxBY2NlcHQob3BlcmF0aW9uSWQ6IHN0cmluZykge1xyXG4gICAgdGhpcy5fbW9kYWxTZXJ2aWNlLmNsb3NlKFwiVGVtcGxhdGVSZW1vdmVNb2RhbFwiKTtcclxuICAgIHRoaXMuX3RlbXBsYXRlU2VydmljZS5yZW1vdmVUZW1wbGF0ZSh7IGlkOiBvcGVyYXRpb25JZCwgbmFtZTogXCJcIiB9KTtcclxuICB9XHJcblxyXG4gIGRvd25sb2FkVGVtcGxhdGVDbGljayh0ZW1wbGF0ZUlkOiBUZW1wbGF0ZUlkKSB7XHJcbiAgICBjb25zdCB0ZW1wbGF0ZUpzb24gPSB0aGlzLl90ZW1wbGF0ZVNlcnZpY2Uuc2VyaWFsaXplKHRlbXBsYXRlSWQpO1xyXG5cclxuICAgIGNvbnN0IGYgPSBuZXcgRmlsZShbdGVtcGxhdGVKc29uXSwgdGVtcGxhdGVJZC5uYW1lICsgXCIuanNvblwiLCB7XHJcbiAgICAgIHR5cGU6IFwidGV4dC9wbGFpblwiXHJcbiAgICB9KTtcclxuXHJcbiAgICBjb25zdCBmaWxlVXJsID0gd2luZG93LlVSTC5jcmVhdGVPYmplY3RVUkwoZik7XHJcblxyXG4gICAgbGV0IGZpbGVMaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xyXG4gICAgZmlsZUxpbmsuaHJlZiA9IGZpbGVVcmw7XHJcbiAgICBmaWxlTGluay5kb3dubG9hZCA9IGYubmFtZTtcclxuICAgIGZpbGVMaW5rLmNsaWNrKCk7XHJcblxyXG4gICAgVVJMLnJldm9rZU9iamVjdFVSTChmaWxlVXJsKTtcclxuICB9XHJcblxyXG4gIG9uRmlsZVNlbGVjdGVkKGV2ZW50KSB7XHJcbiAgICBjb25zdCBmaWxlOiBGaWxlID0gZXZlbnQudGFyZ2V0LmZpbGVzWzBdO1xyXG5cclxuICAgIGlmIChmaWxlKSB7XHJcbiAgICAgIGxldCByZWFkZXIgPSBuZXcgRmlsZVJlYWRlcigpO1xyXG5cclxuICAgICAgcmVhZGVyLnJlYWRBc1RleHQoZmlsZSk7XHJcbiAgICAgIHJlYWRlci5vbmxvYWQgPSB4ID0+IHtcclxuICAgICAgICB0aGlzLl90ZW1wbGF0ZVNlcnZpY2UuZGVzZXJpYWxpemUocmVhZGVyLnJlc3VsdC50b1N0cmluZygpKTtcclxuICAgICAgICB0aGlzLnVwbG9hZFRlbXBsYXRlLm5hdGl2ZUVsZW1lbnQudmFsdWUgPSBudWxsO1xyXG4gICAgICB9O1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgc2hvd0RhdGEoKSB7XHJcbiAgICB0aGlzLmlzVGVtcGxhdGVNb2RlID0gZmFsc2U7XHJcbiAgICB0aGlzLmlzRGF0YU1vZGUgPSB0cnVlO1xyXG4gIH1cclxuXHJcbiAgcGFyc2UoKSB7XHJcbiAgICB0aGlzLnBhcnNlU3RhdGUuZXhlY3V0ZSgpO1xyXG5cclxuICAgIGxldCBzdGF0ZSA9IHRoaXMuX3BsYWNlaG9sZGVyU2VydmljZS5zdGFydE9wZXJhdGlvbihcIlBhcnNpbmcgZGF0YS4uLlwiKTtcclxuXHJcbiAgICBjb25zdCBvYnNlcnZlciA9IHtcclxuICAgICAgbmV4dDogKHJlc3BvbnNlOiBQYXJzZUJ5VGVtcGxhdGVSZXNwb25zZSkgPT4ge1xyXG4gICAgICAgIHRoaXMucGFyc2VTdGF0ZS5yZXN1bHQgPSByZXNwb25zZS5kYXRhO1xyXG4gICAgICB9LFxyXG4gICAgICBlcnJvcjogKGVycjogYW55KSA9PiB7ICAgICAgICBcclxuICAgICAgICB0aGlzLnBhcnNlU3RhdGUuZXJyb3IgPSB0aGlzLl9wYXJzZXJTZXJ2aWNlLmdldEVycm9yTWVzc2FnZShlcnIpO1xyXG4gICAgICAgIHN0YXRlLmVycm9yKGVycik7XHJcbiAgICAgIH0sXHJcbiAgICAgIGNvbXBsZXRlOiAoKSA9PiBzdGF0ZS5jb21wbGV0ZSgpXHJcbiAgICB9O1xyXG5cclxuICAgIHRoaXMuX3BhcnNlclNlcnZpY2UucGFyc2VCeVRlbXBsYXRlKFxyXG4gICAgICB0aGlzLl9zb3VyY2VGaWxlU2VydmljZS5zb3VyY2VGaWxlLFxyXG4gICAgICBudWxsLFxyXG4gICAgICB0aGlzLl90ZW1wbGF0ZVNlcnZpY2UuY3VycmVudFRlbXBsYXRlXHJcbiAgICApLnN1YnNjcmliZShvYnNlcnZlcik7XHJcbiAgfVxyXG5cclxuICBkb3dubG9hZFJlc3VsdHNBc0NzdigpIHtcclxuICAgIGlmICghdGhpcy5wYXJzZVN0YXRlLmlzQ29tcGxldGVkIHx8IHRoaXMucGFyc2VTdGF0ZS5yZXN1bHQubGVuZ3RoID09IDApIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGNzdiA9IHRoaXMuX3V0aWxzU2VydmljZS5nZW5lcmF0ZUNzdkZvclBhcnNlUmVzdWx0cyh0aGlzLnBhcnNlU3RhdGUucmVzdWx0KTtcclxuXHJcbiAgICBsZXQgZiA9IG5ldyBGaWxlKFtjc3ZdLCB0aGlzLl9zb3VyY2VGaWxlU2VydmljZS5zb3VyY2VGaWxlLmd1aWQgKyBcIi0gZGF0YS5jc3ZcIiwge1xyXG4gICAgICB0eXBlOiBcInRleHQvcGxhaW5cIlxyXG4gICAgfSk7XHJcblxyXG4gICAgY29uc3QgZmlsZVVybCA9IHdpbmRvdy5VUkwuY3JlYXRlT2JqZWN0VVJMKGYpO1xyXG5cclxuICAgIHZhciBmaWxlTGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcclxuICAgIGZpbGVMaW5rLmhyZWYgPSBmaWxlVXJsO1xyXG4gICAgZmlsZUxpbmsuZG93bmxvYWQgPSBmLm5hbWU7XHJcbiAgICBmaWxlTGluay5jbGljaygpO1xyXG5cclxuICAgIFVSTC5yZXZva2VPYmplY3RVUkwoZmlsZVVybCk7XHJcbiAgfVxyXG5cclxuICBpc0FycmF5KG9iajogYW55KSB7XHJcbiAgICByZXR1cm4gQXJyYXkuaXNBcnJheShvYmopXHJcbiAgfVxyXG5cclxuICBzaG93VGFibGVWYWx1ZSh2YWx1ZTogYW55KSB7XHJcbiAgICBjb25zdCB0YWJsZSA9IG5ldyBUYWJsZVZhbHVlKHZhbHVlKTtcclxuXHJcbiAgICB0aGlzLnRhYmxlVmlld2VyLnRhYmxlID0gdGFibGU7XHJcbiAgICB0aGlzLl9tb2RhbFNlcnZpY2Uub3BlbihcIlRhYmxlVmlld2VyXCIpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSByZW1vdmVUZW1wbGF0ZUlkKHRlbXBsYXRlSWQ6IFRlbXBsYXRlSWQpIHtcclxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy50ZW1wbGF0ZUlkcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICBpZiAodGhpcy50ZW1wbGF0ZUlkc1tpXS5pZCA9PSB0ZW1wbGF0ZUlkLmlkKSB7XHJcbiAgICAgICAgdGhpcy50ZW1wbGF0ZUlkcy5zcGxpY2UoaSwgMSk7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59Il19