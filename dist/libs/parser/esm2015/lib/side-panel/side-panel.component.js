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
        return this.currentTemplate && this.currentTemplate.id === templateId.id;
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
        const fileLink = document.createElement('a');
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
            const reader = new FileReader();
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
        const state = this._placeholderService.startOperation("Parsing data...");
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
        if (!this.parseState.isCompleted || this.parseState.result.length === 0) {
            return;
        }
        /** @type {?} */
        const csv = this._utilsService.generateCsvForParseResults(this.parseState.result);
        /** @type {?} */
        const f = new File([csv], this._sourceFileService.sourceFile.guid + "- data.csv", {
            type: "text/plain"
        });
        /** @type {?} */
        const fileUrl = window.URL.createObjectURL(f);
        /** @type {?} */
        const fileLink = document.createElement('a');
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
        for (let i = 0; i < this.templateIds.length; i++) {
            if (this.templateIds[i].id === templateId.id) {
                this.templateIds.splice(i, 1);
                return;
            }
        }
    }
}
SidePanelComponent.decorators = [
    { type: Component, args: [{
                selector: 'gd-parser-side-panel',
                template: "<div class=\"side-panel\">\n    <input type=\"file\" #uploadTemplate (change)=\"onFileSelected($event)\" />\n\n    <div *ngIf=\"isDataMode\">\n        <div class=\"side-panel-title\">\n            <div>{{ currentTemplate?.name }}</div>\n            <div class=\"image-btn\" (click)=\"manageTemplates()\">\n                <fa-icon [icon]=\"'bars'\"></fa-icon>\n            </div>\n        </div>\n\n        <div class=\"side-panel-toolbar\">\n            <div class=\"image-btn\" (click)=\"createTemplateClick()\" title=\"Create a new template\">\n                <fa-icon [icon]=\"'file'\"></fa-icon>\n            </div>\n            <div class=\"image-btn\" (click)=\"uploadTemplate.click()\" title=\"Upload the existing template\">\n                <fa-icon [icon]=\"'upload'\"></fa-icon>\n            </div>\n\n            <div class=\"side-panel-toolbar-space\"></div>\n\n            <div class=\"image-btn\" (click)=\"renameTemplateClick(currentTemplate)\" title=\"Rename the current template\">\n                <fa-icon [icon]=\"'edit'\"></fa-icon>\n            </div>\n            <div class=\"image-btn\" *ngIf=\"currentTemplate?.isStored\" (click)=\"removeTemplateClick(currentTemplate)\"\n                title=\"Remove the current template\">\n                <fa-icon [icon]=\"'trash'\"></fa-icon>\n            </div>\n            <div class=\"image-btn\" *ngIf=\"currentTemplate?.isStored\" (click)=\"downloadTemplateClick(currentTemplate)\"\n                title=\"Download the current template\">\n                <fa-icon [icon]=\"'file-download'\"></fa-icon>\n            </div>\n        </div>\n\n        <div class=\"side-panel-content\" *ngIf=\"parseState.isProcessing\">\n            <div>Parsing data...</div>\n        </div>\n\n        <div class=\"side-panel-content\" *ngIf=\"parseState.isFailed\">\n            <div class=\"side-panel-content-text error-text\">Error occurs while parsing data.</div>\n            <div class=\"btn\" (click)=\"parse()\">Parse again</div>\n        </div>\n\n        <div class=\"side-panel-content\" *ngIf=\"parseState.isReadyToRun\">\n            <div class=\"side-panel-content-text\" [innerHTML]=\"parseState.prompt\"></div>\n            <div class=\"btn\" (click)=\"parse()\">Parse</div>\n        </div>\n\n        <div class=\"side-panel-content\" *ngIf=\"parseState.isCompleted && !(parseState.result?.length > 0)\">\n            <div class=\"side-panel-content-text\">\n                No data is extracted. Try to change the template.\n            </div>\n        </div>\n\n        <div class=\"data-panel\" *ngIf=\"parseState.result?.length > 0\">\n            <div class=\"side-panel-toolbar\">\n                <div class=\"btn\" (click)=\"downloadResultsAsCsv()\">Download as CSV</div>\n            </div>\n            <div class=\"data-item list-item\" *ngFor=\"let r of parseState.result\">\n                <div class=\"data-item-field\">{{ r.name }}</div>\n                <div class=\"data-item-value\" *ngIf=\"r.value && !isArray(r.value)\">{{ r.value }}</div>\n                <div class=\"data-item-value\" *ngIf=\"r.value && isArray(r.value)\">\n                    <div class=\"btn\" (click)=\"showTableValue(r.value)\">Show Table</div>\n                </div>\n            </div>\n        </div>\n    </div>\n\n    <div *ngIf=\"isTemplateMode\">\n        <div class=\"side-panel-title\">\n            <div>Manage Templates</div>\n            <div class=\"image-btn\" (click)=\"showData()\">\n                <fa-icon [icon]=\"'times'\"></fa-icon>\n            </div>\n        </div>\n        <div class=\"no-data-panel\" *ngIf=\"templateIds.length == 0\">\n            <div class=\"side-panel-content-text\">There are no templates. Try to create a new one or upload the existing\n                one.</div>\n        </div>\n\n        <div class=\"template-list\">\n            <div class=\"template-item list-item\" *ngFor=\"let t of templateIds\" (dblclick)=\"selectTemplateClick(t)\">\n                <div class=\"template-item-text\" [ngClass]=\"{'template-item-current': isCurrentTemplate(t)}\">{{ t?.name\n                    }} </div>\n                <div class=\"image-btn\" (click)=\"renameTemplateClick(t)\" title=\"Rename a template\">\n                    <fa-icon [icon]=\"'edit'\"></fa-icon>\n                </div>\n                <div class=\"image-btn\" (click)=\"downloadTemplateClick(t)\" title=\"Download a template\">\n                    <fa-icon [icon]=\"'file-download'\"></fa-icon>\n                </div>\n                <div class=\"image-btn\" (click)=\"removeTemplateClick(t)\" title=\"Remove a template\">\n                    <fa-icon [icon]=\"'trash'\"></fa-icon>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n\n<gd-rename-modal #templateNameModal [id]=\"'TemplateNameModal'\" [title]=\"'Rename Template'\"\n    [promptText]=\"'Enter a new template name:'\" [acceptText]=\"'Save'\" (acceptEvent)=\"templateNameModalAccept($event)\">\n</gd-rename-modal>\n<gd-confirmation-modal #templateRemoveModal [id]=\"'TemplateRemoveModal'\" [title]=\"'Remove Template'\"\n    [acceptText]=\"'Remove'\" (acceptEvent)=\"templateRemoveModalAccept($event)\">\n</gd-confirmation-modal>\n<gd-table-viewer #tableViewer></gd-table-viewer>",
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2lkZS1wYW5lbC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ3JvdXBkb2NzLmV4YW1wbGVzLmFuZ3VsYXIvcGFyc2VyLyIsInNvdXJjZXMiOlsibGliL3NpZGUtcGFuZWwvc2lkZS1wYW5lbC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQXFCLFNBQVMsRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFcEYsT0FBTyxFQUFFLGNBQWMsRUFBd0MsVUFBVSxFQUF1QyxNQUFNLGVBQWUsQ0FBQztBQUN0SSxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSx3Q0FBd0MsQ0FBQztBQUM5RSxPQUFPLEVBQUUsMEJBQTBCLEVBQUUsTUFBTSxvREFBb0QsQ0FBQztBQUVoRyxPQUFPLEVBTUwsWUFBWSxFQU9iLE1BQU0sK0NBQStDLENBQUM7QUFFdkQsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBQ2xELE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUV0RCxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUMzRCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sa0JBQWtCLENBQUM7QUFDaEQsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDNUQsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sd0NBQXdDLENBQUM7QUFPOUUsTUFBTSxPQUFPLGtCQUFrQjs7Ozs7Ozs7O0lBZTdCLFlBQ1UsYUFBMkIsRUFDM0IsY0FBNkIsRUFDN0Isa0JBQXFDLEVBQ3JDLGdCQUFpQyxFQUNqQyxhQUEyQixFQUMzQixtQkFBdUM7UUFMdkMsa0JBQWEsR0FBYixhQUFhLENBQWM7UUFDM0IsbUJBQWMsR0FBZCxjQUFjLENBQWU7UUFDN0IsdUJBQWtCLEdBQWxCLGtCQUFrQixDQUFtQjtRQUNyQyxxQkFB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QUUxRCwrQ0FBMEY7O0lBQzFGLGlEQUFvRzs7SUFDcEcsNENBQTBFOztJQUMxRSx5Q0FBOEU7O0lBMkI5RSx5Q0FBMEI7O0lBQzFCLDRDQUF3Qjs7SUFDeEIsd0NBQW9COzs7OztJQTFCbEIsMkNBQW1DOzs7OztJQUNuQyw0Q0FBcUM7Ozs7O0lBQ3JDLGdEQUE2Qzs7Ozs7SUFDN0MsOENBQXlDOzs7OztJQUN6QywyQ0FBbUM7Ozs7O0lBQ25DLGlEQUErQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25EZXN0cm95LCBPbkluaXQsIFZpZXdDaGlsZCwgRWxlbWVudFJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRG9tU2FuaXRpemVyIH0gZnJvbSAnQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3Nlcic7XG5pbXBvcnQgeyBPcGVyYXRpb25TdGF0ZSwgUGFyc2VCeVRlbXBsYXRlUmVzcG9uc2UsIFBhcnNlUmVzdWx0LCBUYWJsZVZhbHVlLCBUZW1wbGF0ZSwgVGVtcGxhdGVGaWVsZCwgVGVtcGxhdGVJZCB9IGZyb20gJy4uL2FwcC1tb2RlbHMnO1xuaW1wb3J0IHsgUmVuYW1lTW9kYWxDb21wb25lbnQgfSBmcm9tICcuLi9yZW5hbWUtbW9kYWwvcmVuYW1lLW1vZGFsLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBDb25maXJtYXRpb25Nb2RhbENvbXBvbmVudCB9IGZyb20gJy4uL2NvbmZpcm1hdGlvbi1tb2RhbC9jb25maXJtYXRpb24tbW9kYWwuY29tcG9uZW50JztcblxuaW1wb3J0IHtcbiAgQWRkRHluYW1pY0NvbXBvbmVudFNlcnZpY2UsXG4gIENvbW1vbk1vZGFscyxcbiAgRmlsZUNyZWRlbnRpYWxzLFxuICBGaWxlTW9kZWwsIEZvcm1hdHRpbmcsXG4gIEhvc3RpbmdEeW5hbWljQ29tcG9uZW50U2VydmljZSxcbiAgTW9kYWxTZXJ2aWNlLFxuICBOYXZpZ2F0ZVNlcnZpY2UsIFBhZ2VQcmVsb2FkU2VydmljZSwgUGFzc3dvcmRTZXJ2aWNlLFxuICBUb3BUYWJBY3RpdmF0b3JTZXJ2aWNlLCBVcGxvYWRGaWxlc1NlcnZpY2UsXG4gIFV0aWxzLFxuICBXaW5kb3dTZXJ2aWNlLFxuICBab29tU2VydmljZSxcbiAgRXhjZXB0aW9uTWVzc2FnZVNlcnZpY2Vcbn0gZnJvbSBcIkBncm91cGRvY3MuZXhhbXBsZXMuYW5ndWxhci9jb21tb24tY29tcG9uZW50c1wiO1xuXG5pbXBvcnQgeyBQYXJzZXJTZXJ2aWNlIH0gZnJvbSAnLi4vcGFyc2VyLnNlcnZpY2UnO1xuaW1wb3J0IHsgVGVtcGxhdGVTZXJ2aWNlIH0gZnJvbSAnLi4vdGVtcGxhdGUuc2VydmljZSc7XG5pbXBvcnQgeyBTdWJqZWN0LCBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IFNvdXJjZUZpbGVTZXJ2aWNlIH0gZnJvbSAnLi4vc291cmNlLWZpbGUuc2VydmljZSc7XG5pbXBvcnQgeyBVdGlsc1NlcnZpY2UgfSBmcm9tICcuLi91dGlscy5zZXJ2aWNlJztcbmltcG9ydCB7IFBsYWNlaG9sZGVyU2VydmljZSB9IGZyb20gJy4uL3BsYWNlaG9sZGVyLnNlcnZpY2UnO1xuaW1wb3J0IHsgVGFibGVWaWV3ZXJDb21wb25lbnQgfSBmcm9tICcuLi90YWJsZS12aWV3ZXIvdGFibGUtdmlld2VyLmNvbXBvbmVudCc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2dkLXBhcnNlci1zaWRlLXBhbmVsJyxcbiAgdGVtcGxhdGVVcmw6ICcuL3NpZGUtcGFuZWwuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9zaWRlLXBhbmVsLmNvbXBvbmVudC5sZXNzJ11cbn0pXG5leHBvcnQgY2xhc3MgU2lkZVBhbmVsQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xuXG4gIHByaXZhdGUgX2N1cnJlbnRUZW1wbGF0ZUNoYW5nZWRTdWJzY3JpcHRpb246IFN1YnNjcmlwdGlvbjtcbiAgcHJpdmF0ZSBfdGVtcGxhdGVBZGRlZFN1YnNjcmlwdGlvbjogU3Vic2NyaXB0aW9uO1xuICBwcml2YXRlIF90ZW1wbGF0ZVJlbW92ZWRTdWJzY3JpcHRpb246IFN1YnNjcmlwdGlvbjtcblxuICBwcml2YXRlIF9jdXJyZW50VGVtcGxhdGU6IFRlbXBsYXRlO1xuICBwcml2YXRlIF9jdXJyZW50VGVtcGxhdGVNb2RpZmllZFN1YnNjcmlwdGlvbjogU3Vic2NyaXB0aW9uO1xuICBwcml2YXRlIF9wYXJzZVN0YXRlID0gbmV3IE9wZXJhdGlvblN0YXRlPFBhcnNlUmVzdWx0W10+KCk7XG5cbiAgQFZpZXdDaGlsZCgndGVtcGxhdGVOYW1lTW9kYWwnLCB7IHN0YXRpYzogdHJ1ZSB9KSB0ZW1wbGF0ZU5hbWVNb2RhbDogUmVuYW1lTW9kYWxDb21wb25lbnQ7XG4gIEBWaWV3Q2hpbGQoJ3RlbXBsYXRlUmVtb3ZlTW9kYWwnLCB7IHN0YXRpYzogdHJ1ZSB9KSB0ZW1wbGF0ZVJlbW92ZU1vZGFsOiBDb25maXJtYXRpb25Nb2RhbENvbXBvbmVudDtcbiAgQFZpZXdDaGlsZCgndXBsb2FkVGVtcGxhdGUnLCB7IHN0YXRpYzogdHJ1ZSB9KSB1cGxvYWRUZW1wbGF0ZTogRWxlbWVudFJlZjtcbiAgQFZpZXdDaGlsZCgndGFibGVWaWV3ZXInLCB7IHN0YXRpYzogdHJ1ZSB9KSB0YWJsZVZpZXdlcjogVGFibGVWaWV3ZXJDb21wb25lbnQ7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBfbW9kYWxTZXJ2aWNlOiBNb2RhbFNlcnZpY2UsXG4gICAgcHJpdmF0ZSBfcGFyc2VyU2VydmljZTogUGFyc2VyU2VydmljZSxcbiAgICBwcml2YXRlIF9zb3VyY2VGaWxlU2VydmljZTogU291cmNlRmlsZVNlcnZpY2UsXG4gICAgcHJpdmF0ZSBfdGVtcGxhdGVTZXJ2aWNlOiBUZW1wbGF0ZVNlcnZpY2UsXG4gICAgcHJpdmF0ZSBfdXRpbHNTZXJ2aWNlOiBVdGlsc1NlcnZpY2UsXG4gICAgcHJpdmF0ZSBfcGxhY2Vob2xkZXJTZXJ2aWNlOiBQbGFjZWhvbGRlclNlcnZpY2UpIHtcblxuICAgIHRoaXMuaXNEYXRhTW9kZSA9IHRydWU7XG4gICAgdGhpcy5pc1RlbXBsYXRlTW9kZSA9IGZhbHNlO1xuXG4gICAgdGhpcy5fY3VycmVudFRlbXBsYXRlQ2hhbmdlZFN1YnNjcmlwdGlvbiA9IHRoaXMuX3RlbXBsYXRlU2VydmljZS5jdXJyZW50VGVtcGxhdGVDaGFuZ2VkXG4gICAgICAuc3Vic2NyaWJlKHRlbXBsYXRlID0+IHRoaXMuY3VycmVudFRlbXBsYXRlID0gdGVtcGxhdGUpO1xuICAgIHRoaXMuX3RlbXBsYXRlQWRkZWRTdWJzY3JpcHRpb24gPSB0aGlzLl90ZW1wbGF0ZVNlcnZpY2UudGVtcGxhdGVBZGRlZFN1YmplY3RcbiAgICAgIC5zdWJzY3JpYmUodGVtcGxhdGUgPT4gdGhpcy50ZW1wbGF0ZUlkcy5wdXNoKHRlbXBsYXRlKSk7XG4gICAgdGhpcy5fdGVtcGxhdGVSZW1vdmVkU3Vic2NyaXB0aW9uID0gdGhpcy5fdGVtcGxhdGVTZXJ2aWNlLnRlbXBsYXRlUmVtb3ZlZFN1YmplY3RcbiAgICAgIC5zdWJzY3JpYmUodGVtcGxhdGVJZCA9PiB0aGlzLnJlbW92ZVRlbXBsYXRlSWQodGVtcGxhdGVJZCkpO1xuXG4gICAgdGhpcy5jdXJyZW50VGVtcGxhdGUgPSB0aGlzLl90ZW1wbGF0ZVNlcnZpY2UuY3VycmVudFRlbXBsYXRlO1xuICAgIHRoaXMudGVtcGxhdGVJZHMgPSBbXTtcbiAgICB0aGlzLl90ZW1wbGF0ZVNlcnZpY2UudGVtcGxhdGVJZHMuZm9yRWFjaChlbGVtZW50ID0+IHtcbiAgICAgIHRoaXMudGVtcGxhdGVJZHMucHVzaChlbGVtZW50KTtcbiAgICB9KTtcbiAgfVxuXG4gIHRlbXBsYXRlSWRzOiBUZW1wbGF0ZUlkW107XG4gIGlzVGVtcGxhdGVNb2RlOiBib29sZWFuO1xuICBpc0RhdGFNb2RlOiBib29sZWFuO1xuXG4gIGdldCBwYXJzZVN0YXRlKCkge1xuICAgIHJldHVybiB0aGlzLl9wYXJzZVN0YXRlO1xuICB9XG5cbiAgZ2V0IGN1cnJlbnRUZW1wbGF0ZSgpIHtcbiAgICByZXR1cm4gdGhpcy5fY3VycmVudFRlbXBsYXRlO1xuICB9XG5cbiAgc2V0IGN1cnJlbnRUZW1wbGF0ZSh0ZW1wbGF0ZTogVGVtcGxhdGUpIHtcbiAgICBpZiAodGhpcy5fY3VycmVudFRlbXBsYXRlTW9kaWZpZWRTdWJzY3JpcHRpb24pIHtcbiAgICAgIHRoaXMuX2N1cnJlbnRUZW1wbGF0ZU1vZGlmaWVkU3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XG4gICAgfVxuXG4gICAgdGhpcy5fY3VycmVudFRlbXBsYXRlID0gdGVtcGxhdGU7XG4gICAgdGhpcy5fY3VycmVudFRlbXBsYXRlTW9kaWZpZWRTdWJzY3JpcHRpb24gPSB0aGlzLl9jdXJyZW50VGVtcGxhdGUubW9kaWZpZWRcbiAgICAgIC5zdWJzY3JpYmUodCA9PiB0aGlzLnBhcnNlU3RhdGUucHJvbXB0ID0gXCJUZW1wbGF0ZSB3YXMgY2hhbmdlZC4gUGxlYXNlIHBhcnNlIGRhdGEgYWdhaW4uXCIpO1xuXG4gICAgdGhpcy5wYXJzZVN0YXRlLnByb21wdCA9IFwiUHJlc3MgUGFyc2VyIHRvIGV4dHJhY3QgZGF0YSBieSB0aGlzIHRlbXBsYXRlXCI7XG4gIH1cblxuICBuZ09uRGVzdHJveSgpIHtcbiAgICBpZiAodGhpcy5fY3VycmVudFRlbXBsYXRlQ2hhbmdlZFN1YnNjcmlwdGlvbikge1xuICAgICAgdGhpcy5fY3VycmVudFRlbXBsYXRlQ2hhbmdlZFN1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpO1xuICAgIH1cblxuICAgIGlmICh0aGlzLl90ZW1wbGF0ZUFkZGVkU3Vic2NyaXB0aW9uKSB7XG4gICAgICB0aGlzLl90ZW1wbGF0ZUFkZGVkU3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuX3RlbXBsYXRlUmVtb3ZlZFN1YnNjcmlwdGlvbikge1xuICAgICAgdGhpcy5fdGVtcGxhdGVSZW1vdmVkU3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XG4gICAgfVxuICB9XG5cbiAgbmdPbkluaXQoKSB7XG4gIH1cblxuICBtYW5hZ2VUZW1wbGF0ZXMoKSB7XG4gICAgdGhpcy5pc0RhdGFNb2RlID0gZmFsc2U7XG4gICAgdGhpcy5pc1RlbXBsYXRlTW9kZSA9IHRydWU7XG4gIH1cblxuICBpc0N1cnJlbnRUZW1wbGF0ZSh0ZW1wbGF0ZUlkOiBUZW1wbGF0ZUlkKSB7XG4gICAgcmV0dXJuIHRoaXMuY3VycmVudFRlbXBsYXRlICYmIHRoaXMuY3VycmVudFRlbXBsYXRlLmlkID09PSB0ZW1wbGF0ZUlkLmlkO1xuICB9XG5cbiAgc2VsZWN0VGVtcGxhdGVDbGljayh0ZW1wbGF0ZUlkOiBUZW1wbGF0ZUlkKSB7XG4gICAgaWYgKCF0ZW1wbGF0ZUlkKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdGhpcy5fdGVtcGxhdGVTZXJ2aWNlLnNlbGVjdFRlbXBsYXRlKHRlbXBsYXRlSWQpO1xuICAgIHRoaXMuc2hvd0RhdGEoKTtcbiAgfVxuXG4gIGNyZWF0ZVRlbXBsYXRlQ2xpY2soKSB7XG4gICAgdGhpcy5fdGVtcGxhdGVTZXJ2aWNlLmNyZWF0ZVRlbXBsYXRlKCk7XG4gIH1cblxuICByZW5hbWVUZW1wbGF0ZUNsaWNrKHRlbXBsYXRlSWQ6IFRlbXBsYXRlSWQpIHtcbiAgICBpZiAodGVtcGxhdGVJZCAmJiB0aGlzLnRlbXBsYXRlTmFtZU1vZGFsKSB7XG4gICAgICB0aGlzLnRlbXBsYXRlTmFtZU1vZGFsLm9wZXJhdGlvbklkID0gdGVtcGxhdGVJZC5pZDtcbiAgICAgIHRoaXMudGVtcGxhdGVOYW1lTW9kYWwuaW5pdGlhbFZhbHVlID0gdGVtcGxhdGVJZC5uYW1lO1xuXG4gICAgICB0aGlzLl9tb2RhbFNlcnZpY2Uub3BlbihcIlRlbXBsYXRlTmFtZU1vZGFsXCIpO1xuICAgIH1cbiAgfVxuXG4gIHRlbXBsYXRlTmFtZU1vZGFsQWNjZXB0KGV2ZW50KSB7XG4gICAgY29uc3QgdGVtcGxhdGVJZCA9IGV2ZW50LmlkO1xuICAgIGNvbnN0IHRlbXBsYXRlTmFtZSA9IGV2ZW50Lm5ld1ZhbHVlO1xuXG4gICAgdHJ5IHtcbiAgICAgIHRoaXMuX3RlbXBsYXRlU2VydmljZS5yZW5hbWVUZW1wbGF0ZSh7IGlkOiB0ZW1wbGF0ZUlkLCBuYW1lOiB0ZW1wbGF0ZU5hbWUgfSk7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIHRoaXMudGVtcGxhdGVOYW1lTW9kYWwuZXJyb3IgPSBlcnJvcjtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0aGlzLl9tb2RhbFNlcnZpY2UuY2xvc2UoXCJUZW1wbGF0ZU5hbWVNb2RhbFwiKTtcbiAgfVxuXG4gIHJlbW92ZVRlbXBsYXRlQ2xpY2sodGVtcGxhdGVJZDogVGVtcGxhdGVJZCkge1xuICAgIGlmICh0aGlzLnRlbXBsYXRlUmVtb3ZlTW9kYWwpIHtcbiAgICAgIHRoaXMudGVtcGxhdGVSZW1vdmVNb2RhbC5vcGVyYXRpb25JZCA9IHRlbXBsYXRlSWQuaWQ7XG4gICAgICB0aGlzLnRlbXBsYXRlUmVtb3ZlTW9kYWwucHJvbXB0VGV4dCA9IFwiUmVtb3ZlIHRlbXBsYXRlIDxiPlwiICsgdGVtcGxhdGVJZC5uYW1lICsgXCI8L2I+P1wiO1xuXG4gICAgICB0aGlzLl9tb2RhbFNlcnZpY2Uub3BlbihcIlRlbXBsYXRlUmVtb3ZlTW9kYWxcIik7XG4gICAgfVxuICB9XG5cbiAgdGVtcGxhdGVSZW1vdmVNb2RhbEFjY2VwdChvcGVyYXRpb25JZDogc3RyaW5nKSB7XG4gICAgdGhpcy5fbW9kYWxTZXJ2aWNlLmNsb3NlKFwiVGVtcGxhdGVSZW1vdmVNb2RhbFwiKTtcbiAgICB0aGlzLl90ZW1wbGF0ZVNlcnZpY2UucmVtb3ZlVGVtcGxhdGUoeyBpZDogb3BlcmF0aW9uSWQsIG5hbWU6IFwiXCIgfSk7XG4gIH1cblxuICBkb3dubG9hZFRlbXBsYXRlQ2xpY2sodGVtcGxhdGVJZDogVGVtcGxhdGVJZCkge1xuICAgIGNvbnN0IHRlbXBsYXRlSnNvbiA9IHRoaXMuX3RlbXBsYXRlU2VydmljZS5zZXJpYWxpemUodGVtcGxhdGVJZCk7XG5cbiAgICBjb25zdCBmID0gbmV3IEZpbGUoW3RlbXBsYXRlSnNvbl0sIHRlbXBsYXRlSWQubmFtZSArIFwiLmpzb25cIiwge1xuICAgICAgdHlwZTogXCJ0ZXh0L3BsYWluXCJcbiAgICB9KTtcblxuICAgIGNvbnN0IGZpbGVVcmwgPSB3aW5kb3cuVVJMLmNyZWF0ZU9iamVjdFVSTChmKTtcblxuICAgIGNvbnN0IGZpbGVMaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xuICAgIGZpbGVMaW5rLmhyZWYgPSBmaWxlVXJsO1xuICAgIGZpbGVMaW5rLmRvd25sb2FkID0gZi5uYW1lO1xuICAgIGZpbGVMaW5rLmNsaWNrKCk7XG5cbiAgICBVUkwucmV2b2tlT2JqZWN0VVJMKGZpbGVVcmwpO1xuICB9XG5cbiAgb25GaWxlU2VsZWN0ZWQoZXZlbnQpIHtcbiAgICBjb25zdCBmaWxlOiBGaWxlID0gZXZlbnQudGFyZ2V0LmZpbGVzWzBdO1xuXG4gICAgaWYgKGZpbGUpIHtcbiAgICAgIGNvbnN0IHJlYWRlciA9IG5ldyBGaWxlUmVhZGVyKCk7XG5cbiAgICAgIHJlYWRlci5yZWFkQXNUZXh0KGZpbGUpO1xuICAgICAgcmVhZGVyLm9ubG9hZCA9IHggPT4ge1xuICAgICAgICB0aGlzLl90ZW1wbGF0ZVNlcnZpY2UuZGVzZXJpYWxpemUocmVhZGVyLnJlc3VsdC50b1N0cmluZygpKTtcbiAgICAgICAgdGhpcy51cGxvYWRUZW1wbGF0ZS5uYXRpdmVFbGVtZW50LnZhbHVlID0gbnVsbDtcbiAgICAgIH07XG4gICAgfVxuICB9XG5cbiAgc2hvd0RhdGEoKSB7XG4gICAgdGhpcy5pc1RlbXBsYXRlTW9kZSA9IGZhbHNlO1xuICAgIHRoaXMuaXNEYXRhTW9kZSA9IHRydWU7XG4gIH1cblxuICBwYXJzZSgpIHtcbiAgICB0aGlzLnBhcnNlU3RhdGUuZXhlY3V0ZSgpO1xuXG4gICAgY29uc3Qgc3RhdGUgPSB0aGlzLl9wbGFjZWhvbGRlclNlcnZpY2Uuc3RhcnRPcGVyYXRpb24oXCJQYXJzaW5nIGRhdGEuLi5cIik7XG5cbiAgICBjb25zdCBvYnNlcnZlciA9IHtcbiAgICAgIG5leHQ6IChyZXNwb25zZTogUGFyc2VCeVRlbXBsYXRlUmVzcG9uc2UpID0+IHtcbiAgICAgICAgdGhpcy5wYXJzZVN0YXRlLnJlc3VsdCA9IHJlc3BvbnNlLmRhdGE7XG4gICAgICB9LFxuICAgICAgZXJyb3I6IChlcnI6IGFueSkgPT4geyAgICAgICAgXG4gICAgICAgIHRoaXMucGFyc2VTdGF0ZS5lcnJvciA9IHRoaXMuX3BhcnNlclNlcnZpY2UuZ2V0RXJyb3JNZXNzYWdlKGVycik7XG4gICAgICAgIHN0YXRlLmVycm9yKGVycik7XG4gICAgICB9LFxuICAgICAgY29tcGxldGU6ICgpID0+IHN0YXRlLmNvbXBsZXRlKClcbiAgICB9O1xuXG4gICAgdGhpcy5fcGFyc2VyU2VydmljZS5wYXJzZUJ5VGVtcGxhdGUoXG4gICAgICB0aGlzLl9zb3VyY2VGaWxlU2VydmljZS5zb3VyY2VGaWxlLFxuICAgICAgbnVsbCxcbiAgICAgIHRoaXMuX3RlbXBsYXRlU2VydmljZS5jdXJyZW50VGVtcGxhdGVcbiAgICApLnN1YnNjcmliZShvYnNlcnZlcik7XG4gIH1cblxuICBkb3dubG9hZFJlc3VsdHNBc0NzdigpIHtcbiAgICBpZiAoIXRoaXMucGFyc2VTdGF0ZS5pc0NvbXBsZXRlZCB8fCB0aGlzLnBhcnNlU3RhdGUucmVzdWx0Lmxlbmd0aCA9PT0gMCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IGNzdiA9IHRoaXMuX3V0aWxzU2VydmljZS5nZW5lcmF0ZUNzdkZvclBhcnNlUmVzdWx0cyh0aGlzLnBhcnNlU3RhdGUucmVzdWx0KTtcblxuICAgIGNvbnN0IGYgPSBuZXcgRmlsZShbY3N2XSwgdGhpcy5fc291cmNlRmlsZVNlcnZpY2Uuc291cmNlRmlsZS5ndWlkICsgXCItIGRhdGEuY3N2XCIsIHtcbiAgICAgIHR5cGU6IFwidGV4dC9wbGFpblwiXG4gICAgfSk7XG5cbiAgICBjb25zdCBmaWxlVXJsID0gd2luZG93LlVSTC5jcmVhdGVPYmplY3RVUkwoZik7XG5cbiAgICBjb25zdCBmaWxlTGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcbiAgICBmaWxlTGluay5ocmVmID0gZmlsZVVybDtcbiAgICBmaWxlTGluay5kb3dubG9hZCA9IGYubmFtZTtcbiAgICBmaWxlTGluay5jbGljaygpO1xuXG4gICAgVVJMLnJldm9rZU9iamVjdFVSTChmaWxlVXJsKTtcbiAgfVxuXG4gIGlzQXJyYXkob2JqOiBhbnkpIHtcbiAgICByZXR1cm4gQXJyYXkuaXNBcnJheShvYmopXG4gIH1cblxuICBzaG93VGFibGVWYWx1ZSh2YWx1ZTogYW55KSB7XG4gICAgY29uc3QgdGFibGUgPSBuZXcgVGFibGVWYWx1ZSh2YWx1ZSk7XG5cbiAgICB0aGlzLnRhYmxlVmlld2VyLnRhYmxlID0gdGFibGU7XG4gICAgdGhpcy5fbW9kYWxTZXJ2aWNlLm9wZW4oXCJUYWJsZVZpZXdlclwiKTtcbiAgfVxuXG4gIHByaXZhdGUgcmVtb3ZlVGVtcGxhdGVJZCh0ZW1wbGF0ZUlkOiBUZW1wbGF0ZUlkKSB7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnRlbXBsYXRlSWRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBpZiAodGhpcy50ZW1wbGF0ZUlkc1tpXS5pZCA9PT0gdGVtcGxhdGVJZC5pZCkge1xuICAgICAgICB0aGlzLnRlbXBsYXRlSWRzLnNwbGljZShpLCAxKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgIH1cbiAgfVxufSJdfQ==