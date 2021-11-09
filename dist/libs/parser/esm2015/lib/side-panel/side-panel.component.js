/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, ViewChild, ElementRef, Input } from '@angular/core';
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
        const f = new File([csv], this.fileNameForCsv ? this.fileNameForCsv : this._sourceFileService.sourceFile.guid + "- data.csv", {
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
    fileNameForCsv: [{ type: Input }],
    templateNameModal: [{ type: ViewChild, args: ['templateNameModal', { static: true },] }],
    templateRemoveModal: [{ type: ViewChild, args: ['templateRemoveModal', { static: true },] }],
    uploadTemplate: [{ type: ViewChild, args: ['uploadTemplate', { static: true },] }],
    tableViewer: [{ type: ViewChild, args: ['tableViewer', { static: true },] }]
};
if (false) {
    /** @type {?} */
    SidePanelComponent.prototype.fileNameForCsv;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2lkZS1wYW5lbC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ3JvdXBkb2NzLmV4YW1wbGVzLmFuZ3VsYXIvcGFyc2VyLyIsInNvdXJjZXMiOlsibGliL3NpZGUtcGFuZWwvc2lkZS1wYW5lbC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQXFCLFNBQVMsRUFBRSxVQUFVLEVBQUUsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRTNGLE9BQU8sRUFBRSxjQUFjLEVBQXdDLFVBQVUsRUFBdUMsTUFBTSxlQUFlLENBQUM7QUFDdEksT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sd0NBQXdDLENBQUM7QUFDOUUsT0FBTyxFQUFFLDBCQUEwQixFQUFFLE1BQU0sb0RBQW9ELENBQUM7QUFFaEcsT0FBTyxFQU1MLFlBQVksRUFPYixNQUFNLCtDQUErQyxDQUFDO0FBRXZELE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUNsRCxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFFdEQsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDM0QsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGtCQUFrQixDQUFDO0FBQ2hELE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQzVELE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLHdDQUF3QyxDQUFDO0FBTzlFLE1BQU0sT0FBTyxrQkFBa0I7Ozs7Ozs7OztJQWdCN0IsWUFDVSxhQUEyQixFQUMzQixjQUE2QixFQUM3QixrQkFBcUMsRUFDckMsZ0JBQWlDLEVBQ2pDLGFBQTJCLEVBQzNCLG1CQUF1QztRQUx2QyxrQkFBYSxHQUFiLGFBQWEsQ0FBYztRQUMzQixtQkFBYyxHQUFkLGNBQWMsQ0FBZTtRQUM3Qix1QkFBa0IsR0FBbEIsa0JBQWtCLENBQW1C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LGlFQUEwRDs7Ozs7SUFDMUQsd0RBQWlEOzs7OztJQUNqRCwwREFBbUQ7Ozs7O0lBRW5ELDhDQUFtQzs7Ozs7SUFDbkMsa0VBQTJEOzs7OztJQUMzRCx5Q0FBMEQ7O0lBRTFELCtDQUEwRjs7SUFDMUYsaURBQW9HOztJQUNwRyw0Q0FBMEU7O0lBQzFFLHlDQUE4RTs7SUEyQjlFLHlDQUEwQjs7SUFDMUIsNENBQXdCOztJQUN4Qix3Q0FBb0I7Ozs7O0lBMUJsQiwyQ0FBbUM7Ozs7O0lBQ25DLDRDQUFxQzs7Ozs7SUFDckMsZ0RBQTZDOzs7OztJQUM3Qyw4Q0FBeUM7Ozs7O0lBQ3pDLDJDQUFtQzs7Ozs7SUFDbkMsaURBQStDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkRlc3Ryb3ksIE9uSW5pdCwgVmlld0NoaWxkLCBFbGVtZW50UmVmLCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRG9tU2FuaXRpemVyIH0gZnJvbSAnQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3Nlcic7XG5pbXBvcnQgeyBPcGVyYXRpb25TdGF0ZSwgUGFyc2VCeVRlbXBsYXRlUmVzcG9uc2UsIFBhcnNlUmVzdWx0LCBUYWJsZVZhbHVlLCBUZW1wbGF0ZSwgVGVtcGxhdGVGaWVsZCwgVGVtcGxhdGVJZCB9IGZyb20gJy4uL2FwcC1tb2RlbHMnO1xuaW1wb3J0IHsgUmVuYW1lTW9kYWxDb21wb25lbnQgfSBmcm9tICcuLi9yZW5hbWUtbW9kYWwvcmVuYW1lLW1vZGFsLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBDb25maXJtYXRpb25Nb2RhbENvbXBvbmVudCB9IGZyb20gJy4uL2NvbmZpcm1hdGlvbi1tb2RhbC9jb25maXJtYXRpb24tbW9kYWwuY29tcG9uZW50JztcblxuaW1wb3J0IHtcbiAgQWRkRHluYW1pY0NvbXBvbmVudFNlcnZpY2UsXG4gIENvbW1vbk1vZGFscyxcbiAgRmlsZUNyZWRlbnRpYWxzLFxuICBGaWxlTW9kZWwsIEZvcm1hdHRpbmcsXG4gIEhvc3RpbmdEeW5hbWljQ29tcG9uZW50U2VydmljZSxcbiAgTW9kYWxTZXJ2aWNlLFxuICBOYXZpZ2F0ZVNlcnZpY2UsIFBhZ2VQcmVsb2FkU2VydmljZSwgUGFzc3dvcmRTZXJ2aWNlLFxuICBUb3BUYWJBY3RpdmF0b3JTZXJ2aWNlLCBVcGxvYWRGaWxlc1NlcnZpY2UsXG4gIFV0aWxzLFxuICBXaW5kb3dTZXJ2aWNlLFxuICBab29tU2VydmljZSxcbiAgRXhjZXB0aW9uTWVzc2FnZVNlcnZpY2Vcbn0gZnJvbSBcIkBncm91cGRvY3MuZXhhbXBsZXMuYW5ndWxhci9jb21tb24tY29tcG9uZW50c1wiO1xuXG5pbXBvcnQgeyBQYXJzZXJTZXJ2aWNlIH0gZnJvbSAnLi4vcGFyc2VyLnNlcnZpY2UnO1xuaW1wb3J0IHsgVGVtcGxhdGVTZXJ2aWNlIH0gZnJvbSAnLi4vdGVtcGxhdGUuc2VydmljZSc7XG5pbXBvcnQgeyBTdWJqZWN0LCBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IFNvdXJjZUZpbGVTZXJ2aWNlIH0gZnJvbSAnLi4vc291cmNlLWZpbGUuc2VydmljZSc7XG5pbXBvcnQgeyBVdGlsc1NlcnZpY2UgfSBmcm9tICcuLi91dGlscy5zZXJ2aWNlJztcbmltcG9ydCB7IFBsYWNlaG9sZGVyU2VydmljZSB9IGZyb20gJy4uL3BsYWNlaG9sZGVyLnNlcnZpY2UnO1xuaW1wb3J0IHsgVGFibGVWaWV3ZXJDb21wb25lbnQgfSBmcm9tICcuLi90YWJsZS12aWV3ZXIvdGFibGUtdmlld2VyLmNvbXBvbmVudCc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2dkLXBhcnNlci1zaWRlLXBhbmVsJyxcbiAgdGVtcGxhdGVVcmw6ICcuL3NpZGUtcGFuZWwuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9zaWRlLXBhbmVsLmNvbXBvbmVudC5sZXNzJ11cbn0pXG5leHBvcnQgY2xhc3MgU2lkZVBhbmVsQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xuICBASW5wdXQoKSBmaWxlTmFtZUZvckNzdjogc3RyaW5nO1xuICBcbiAgcHJpdmF0ZSBfY3VycmVudFRlbXBsYXRlQ2hhbmdlZFN1YnNjcmlwdGlvbjogU3Vic2NyaXB0aW9uO1xuICBwcml2YXRlIF90ZW1wbGF0ZUFkZGVkU3Vic2NyaXB0aW9uOiBTdWJzY3JpcHRpb247XG4gIHByaXZhdGUgX3RlbXBsYXRlUmVtb3ZlZFN1YnNjcmlwdGlvbjogU3Vic2NyaXB0aW9uO1xuXG4gIHByaXZhdGUgX2N1cnJlbnRUZW1wbGF0ZTogVGVtcGxhdGU7XG4gIHByaXZhdGUgX2N1cnJlbnRUZW1wbGF0ZU1vZGlmaWVkU3Vic2NyaXB0aW9uOiBTdWJzY3JpcHRpb247XG4gIHByaXZhdGUgX3BhcnNlU3RhdGUgPSBuZXcgT3BlcmF0aW9uU3RhdGU8UGFyc2VSZXN1bHRbXT4oKTtcblxuICBAVmlld0NoaWxkKCd0ZW1wbGF0ZU5hbWVNb2RhbCcsIHsgc3RhdGljOiB0cnVlIH0pIHRlbXBsYXRlTmFtZU1vZGFsOiBSZW5hbWVNb2RhbENvbXBvbmVudDtcbiAgQFZpZXdDaGlsZCgndGVtcGxhdGVSZW1vdmVNb2RhbCcsIHsgc3RhdGljOiB0cnVlIH0pIHRlbXBsYXRlUmVtb3ZlTW9kYWw6IENvbmZpcm1hdGlvbk1vZGFsQ29tcG9uZW50O1xuICBAVmlld0NoaWxkKCd1cGxvYWRUZW1wbGF0ZScsIHsgc3RhdGljOiB0cnVlIH0pIHVwbG9hZFRlbXBsYXRlOiBFbGVtZW50UmVmO1xuICBAVmlld0NoaWxkKCd0YWJsZVZpZXdlcicsIHsgc3RhdGljOiB0cnVlIH0pIHRhYmxlVmlld2VyOiBUYWJsZVZpZXdlckNvbXBvbmVudDtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIF9tb2RhbFNlcnZpY2U6IE1vZGFsU2VydmljZSxcbiAgICBwcml2YXRlIF9wYXJzZXJTZXJ2aWNlOiBQYXJzZXJTZXJ2aWNlLFxuICAgIHByaXZhdGUgX3NvdXJjZUZpbGVTZXJ2aWNlOiBTb3VyY2VGaWxlU2VydmljZSxcbiAgICBwcml2YXRlIF90ZW1wbGF0ZVNlcnZpY2U6IFRlbXBsYXRlU2VydmljZSxcbiAgICBwcml2YXRlIF91dGlsc1NlcnZpY2U6IFV0aWxzU2VydmljZSxcbiAgICBwcml2YXRlIF9wbGFjZWhvbGRlclNlcnZpY2U6IFBsYWNlaG9sZGVyU2VydmljZSkge1xuXG4gICAgdGhpcy5pc0RhdGFNb2RlID0gdHJ1ZTtcbiAgICB0aGlzLmlzVGVtcGxhdGVNb2RlID0gZmFsc2U7XG5cbiAgICB0aGlzLl9jdXJyZW50VGVtcGxhdGVDaGFuZ2VkU3Vic2NyaXB0aW9uID0gdGhpcy5fdGVtcGxhdGVTZXJ2aWNlLmN1cnJlbnRUZW1wbGF0ZUNoYW5nZWRcbiAgICAgIC5zdWJzY3JpYmUodGVtcGxhdGUgPT4gdGhpcy5jdXJyZW50VGVtcGxhdGUgPSB0ZW1wbGF0ZSk7XG4gICAgdGhpcy5fdGVtcGxhdGVBZGRlZFN1YnNjcmlwdGlvbiA9IHRoaXMuX3RlbXBsYXRlU2VydmljZS50ZW1wbGF0ZUFkZGVkU3ViamVjdFxuICAgICAgLnN1YnNjcmliZSh0ZW1wbGF0ZSA9PiB0aGlzLnRlbXBsYXRlSWRzLnB1c2godGVtcGxhdGUpKTtcbiAgICB0aGlzLl90ZW1wbGF0ZVJlbW92ZWRTdWJzY3JpcHRpb24gPSB0aGlzLl90ZW1wbGF0ZVNlcnZpY2UudGVtcGxhdGVSZW1vdmVkU3ViamVjdFxuICAgICAgLnN1YnNjcmliZSh0ZW1wbGF0ZUlkID0+IHRoaXMucmVtb3ZlVGVtcGxhdGVJZCh0ZW1wbGF0ZUlkKSk7XG5cbiAgICB0aGlzLmN1cnJlbnRUZW1wbGF0ZSA9IHRoaXMuX3RlbXBsYXRlU2VydmljZS5jdXJyZW50VGVtcGxhdGU7XG4gICAgdGhpcy50ZW1wbGF0ZUlkcyA9IFtdO1xuICAgIHRoaXMuX3RlbXBsYXRlU2VydmljZS50ZW1wbGF0ZUlkcy5mb3JFYWNoKGVsZW1lbnQgPT4ge1xuICAgICAgdGhpcy50ZW1wbGF0ZUlkcy5wdXNoKGVsZW1lbnQpO1xuICAgIH0pO1xuICB9XG5cbiAgdGVtcGxhdGVJZHM6IFRlbXBsYXRlSWRbXTtcbiAgaXNUZW1wbGF0ZU1vZGU6IGJvb2xlYW47XG4gIGlzRGF0YU1vZGU6IGJvb2xlYW47XG5cbiAgZ2V0IHBhcnNlU3RhdGUoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3BhcnNlU3RhdGU7XG4gIH1cblxuICBnZXQgY3VycmVudFRlbXBsYXRlKCkge1xuICAgIHJldHVybiB0aGlzLl9jdXJyZW50VGVtcGxhdGU7XG4gIH1cblxuICBzZXQgY3VycmVudFRlbXBsYXRlKHRlbXBsYXRlOiBUZW1wbGF0ZSkge1xuICAgIGlmICh0aGlzLl9jdXJyZW50VGVtcGxhdGVNb2RpZmllZFN1YnNjcmlwdGlvbikge1xuICAgICAgdGhpcy5fY3VycmVudFRlbXBsYXRlTW9kaWZpZWRTdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcbiAgICB9XG5cbiAgICB0aGlzLl9jdXJyZW50VGVtcGxhdGUgPSB0ZW1wbGF0ZTtcbiAgICB0aGlzLl9jdXJyZW50VGVtcGxhdGVNb2RpZmllZFN1YnNjcmlwdGlvbiA9IHRoaXMuX2N1cnJlbnRUZW1wbGF0ZS5tb2RpZmllZFxuICAgICAgLnN1YnNjcmliZSh0ID0+IHRoaXMucGFyc2VTdGF0ZS5wcm9tcHQgPSBcIlRlbXBsYXRlIHdhcyBjaGFuZ2VkLiBQbGVhc2UgcGFyc2UgZGF0YSBhZ2Fpbi5cIik7XG5cbiAgICB0aGlzLnBhcnNlU3RhdGUucHJvbXB0ID0gXCJQcmVzcyBQYXJzZXIgdG8gZXh0cmFjdCBkYXRhIGJ5IHRoaXMgdGVtcGxhdGVcIjtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCkge1xuICAgIGlmICh0aGlzLl9jdXJyZW50VGVtcGxhdGVDaGFuZ2VkU3Vic2NyaXB0aW9uKSB7XG4gICAgICB0aGlzLl9jdXJyZW50VGVtcGxhdGVDaGFuZ2VkU3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuX3RlbXBsYXRlQWRkZWRTdWJzY3JpcHRpb24pIHtcbiAgICAgIHRoaXMuX3RlbXBsYXRlQWRkZWRTdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5fdGVtcGxhdGVSZW1vdmVkU3Vic2NyaXB0aW9uKSB7XG4gICAgICB0aGlzLl90ZW1wbGF0ZVJlbW92ZWRTdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcbiAgICB9XG4gIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgfVxuXG4gIG1hbmFnZVRlbXBsYXRlcygpIHtcbiAgICB0aGlzLmlzRGF0YU1vZGUgPSBmYWxzZTtcbiAgICB0aGlzLmlzVGVtcGxhdGVNb2RlID0gdHJ1ZTtcbiAgfVxuXG4gIGlzQ3VycmVudFRlbXBsYXRlKHRlbXBsYXRlSWQ6IFRlbXBsYXRlSWQpIHtcbiAgICByZXR1cm4gdGhpcy5jdXJyZW50VGVtcGxhdGUgJiYgdGhpcy5jdXJyZW50VGVtcGxhdGUuaWQgPT09IHRlbXBsYXRlSWQuaWQ7XG4gIH1cblxuICBzZWxlY3RUZW1wbGF0ZUNsaWNrKHRlbXBsYXRlSWQ6IFRlbXBsYXRlSWQpIHtcbiAgICBpZiAoIXRlbXBsYXRlSWQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0aGlzLl90ZW1wbGF0ZVNlcnZpY2Uuc2VsZWN0VGVtcGxhdGUodGVtcGxhdGVJZCk7XG4gICAgdGhpcy5zaG93RGF0YSgpO1xuICB9XG5cbiAgY3JlYXRlVGVtcGxhdGVDbGljaygpIHtcbiAgICB0aGlzLl90ZW1wbGF0ZVNlcnZpY2UuY3JlYXRlVGVtcGxhdGUoKTtcbiAgfVxuXG4gIHJlbmFtZVRlbXBsYXRlQ2xpY2sodGVtcGxhdGVJZDogVGVtcGxhdGVJZCkge1xuICAgIGlmICh0ZW1wbGF0ZUlkICYmIHRoaXMudGVtcGxhdGVOYW1lTW9kYWwpIHtcbiAgICAgIHRoaXMudGVtcGxhdGVOYW1lTW9kYWwub3BlcmF0aW9uSWQgPSB0ZW1wbGF0ZUlkLmlkO1xuICAgICAgdGhpcy50ZW1wbGF0ZU5hbWVNb2RhbC5pbml0aWFsVmFsdWUgPSB0ZW1wbGF0ZUlkLm5hbWU7XG5cbiAgICAgIHRoaXMuX21vZGFsU2VydmljZS5vcGVuKFwiVGVtcGxhdGVOYW1lTW9kYWxcIik7XG4gICAgfVxuICB9XG5cbiAgdGVtcGxhdGVOYW1lTW9kYWxBY2NlcHQoZXZlbnQpIHtcbiAgICBjb25zdCB0ZW1wbGF0ZUlkID0gZXZlbnQuaWQ7XG4gICAgY29uc3QgdGVtcGxhdGVOYW1lID0gZXZlbnQubmV3VmFsdWU7XG5cbiAgICB0cnkge1xuICAgICAgdGhpcy5fdGVtcGxhdGVTZXJ2aWNlLnJlbmFtZVRlbXBsYXRlKHsgaWQ6IHRlbXBsYXRlSWQsIG5hbWU6IHRlbXBsYXRlTmFtZSB9KTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgdGhpcy50ZW1wbGF0ZU5hbWVNb2RhbC5lcnJvciA9IGVycm9yO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRoaXMuX21vZGFsU2VydmljZS5jbG9zZShcIlRlbXBsYXRlTmFtZU1vZGFsXCIpO1xuICB9XG5cbiAgcmVtb3ZlVGVtcGxhdGVDbGljayh0ZW1wbGF0ZUlkOiBUZW1wbGF0ZUlkKSB7XG4gICAgaWYgKHRoaXMudGVtcGxhdGVSZW1vdmVNb2RhbCkge1xuICAgICAgdGhpcy50ZW1wbGF0ZVJlbW92ZU1vZGFsLm9wZXJhdGlvbklkID0gdGVtcGxhdGVJZC5pZDtcbiAgICAgIHRoaXMudGVtcGxhdGVSZW1vdmVNb2RhbC5wcm9tcHRUZXh0ID0gXCJSZW1vdmUgdGVtcGxhdGUgPGI+XCIgKyB0ZW1wbGF0ZUlkLm5hbWUgKyBcIjwvYj4/XCI7XG5cbiAgICAgIHRoaXMuX21vZGFsU2VydmljZS5vcGVuKFwiVGVtcGxhdGVSZW1vdmVNb2RhbFwiKTtcbiAgICB9XG4gIH1cblxuICB0ZW1wbGF0ZVJlbW92ZU1vZGFsQWNjZXB0KG9wZXJhdGlvbklkOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9tb2RhbFNlcnZpY2UuY2xvc2UoXCJUZW1wbGF0ZVJlbW92ZU1vZGFsXCIpO1xuICAgIHRoaXMuX3RlbXBsYXRlU2VydmljZS5yZW1vdmVUZW1wbGF0ZSh7IGlkOiBvcGVyYXRpb25JZCwgbmFtZTogXCJcIiB9KTtcbiAgfVxuXG4gIGRvd25sb2FkVGVtcGxhdGVDbGljayh0ZW1wbGF0ZUlkOiBUZW1wbGF0ZUlkKSB7XG4gICAgY29uc3QgdGVtcGxhdGVKc29uID0gdGhpcy5fdGVtcGxhdGVTZXJ2aWNlLnNlcmlhbGl6ZSh0ZW1wbGF0ZUlkKTtcblxuICAgIGNvbnN0IGYgPSBuZXcgRmlsZShbdGVtcGxhdGVKc29uXSwgdGVtcGxhdGVJZC5uYW1lICsgXCIuanNvblwiLCB7XG4gICAgICB0eXBlOiBcInRleHQvcGxhaW5cIlxuICAgIH0pO1xuXG4gICAgY29uc3QgZmlsZVVybCA9IHdpbmRvdy5VUkwuY3JlYXRlT2JqZWN0VVJMKGYpO1xuXG4gICAgY29uc3QgZmlsZUxpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XG4gICAgZmlsZUxpbmsuaHJlZiA9IGZpbGVVcmw7XG4gICAgZmlsZUxpbmsuZG93bmxvYWQgPSBmLm5hbWU7XG4gICAgZmlsZUxpbmsuY2xpY2soKTtcblxuICAgIFVSTC5yZXZva2VPYmplY3RVUkwoZmlsZVVybCk7XG4gIH1cblxuICBvbkZpbGVTZWxlY3RlZChldmVudCkge1xuICAgIGNvbnN0IGZpbGU6IEZpbGUgPSBldmVudC50YXJnZXQuZmlsZXNbMF07XG5cbiAgICBpZiAoZmlsZSkge1xuICAgICAgY29uc3QgcmVhZGVyID0gbmV3IEZpbGVSZWFkZXIoKTtcblxuICAgICAgcmVhZGVyLnJlYWRBc1RleHQoZmlsZSk7XG4gICAgICByZWFkZXIub25sb2FkID0geCA9PiB7XG4gICAgICAgIHRoaXMuX3RlbXBsYXRlU2VydmljZS5kZXNlcmlhbGl6ZShyZWFkZXIucmVzdWx0LnRvU3RyaW5nKCkpO1xuICAgICAgICB0aGlzLnVwbG9hZFRlbXBsYXRlLm5hdGl2ZUVsZW1lbnQudmFsdWUgPSBudWxsO1xuICAgICAgfTtcbiAgICB9XG4gIH1cblxuICBzaG93RGF0YSgpIHtcbiAgICB0aGlzLmlzVGVtcGxhdGVNb2RlID0gZmFsc2U7XG4gICAgdGhpcy5pc0RhdGFNb2RlID0gdHJ1ZTtcbiAgfVxuXG4gIHBhcnNlKCkge1xuICAgIHRoaXMucGFyc2VTdGF0ZS5leGVjdXRlKCk7XG5cbiAgICBjb25zdCBzdGF0ZSA9IHRoaXMuX3BsYWNlaG9sZGVyU2VydmljZS5zdGFydE9wZXJhdGlvbihcIlBhcnNpbmcgZGF0YS4uLlwiKTtcblxuICAgIGNvbnN0IG9ic2VydmVyID0ge1xuICAgICAgbmV4dDogKHJlc3BvbnNlOiBQYXJzZUJ5VGVtcGxhdGVSZXNwb25zZSkgPT4ge1xuICAgICAgICB0aGlzLnBhcnNlU3RhdGUucmVzdWx0ID0gcmVzcG9uc2UuZGF0YTtcbiAgICAgIH0sXG4gICAgICBlcnJvcjogKGVycjogYW55KSA9PiB7ICAgICAgICBcbiAgICAgICAgdGhpcy5wYXJzZVN0YXRlLmVycm9yID0gdGhpcy5fcGFyc2VyU2VydmljZS5nZXRFcnJvck1lc3NhZ2UoZXJyKTtcbiAgICAgICAgc3RhdGUuZXJyb3IoZXJyKTtcbiAgICAgIH0sXG4gICAgICBjb21wbGV0ZTogKCkgPT4gc3RhdGUuY29tcGxldGUoKVxuICAgIH07XG5cbiAgICB0aGlzLl9wYXJzZXJTZXJ2aWNlLnBhcnNlQnlUZW1wbGF0ZShcbiAgICAgIHRoaXMuX3NvdXJjZUZpbGVTZXJ2aWNlLnNvdXJjZUZpbGUsXG4gICAgICBudWxsLFxuICAgICAgdGhpcy5fdGVtcGxhdGVTZXJ2aWNlLmN1cnJlbnRUZW1wbGF0ZVxuICAgICkuc3Vic2NyaWJlKG9ic2VydmVyKTtcbiAgfVxuXG4gIGRvd25sb2FkUmVzdWx0c0FzQ3N2KCkge1xuICAgIGlmICghdGhpcy5wYXJzZVN0YXRlLmlzQ29tcGxldGVkIHx8IHRoaXMucGFyc2VTdGF0ZS5yZXN1bHQubGVuZ3RoID09PSAwKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3QgY3N2ID0gdGhpcy5fdXRpbHNTZXJ2aWNlLmdlbmVyYXRlQ3N2Rm9yUGFyc2VSZXN1bHRzKHRoaXMucGFyc2VTdGF0ZS5yZXN1bHQpO1xuXG4gICAgY29uc3QgZiA9IG5ldyBGaWxlKFtjc3ZdLCB0aGlzLmZpbGVOYW1lRm9yQ3N2ID8gdGhpcy5maWxlTmFtZUZvckNzdiA6IHRoaXMuX3NvdXJjZUZpbGVTZXJ2aWNlLnNvdXJjZUZpbGUuZ3VpZCArIFwiLSBkYXRhLmNzdlwiLCB7XG4gICAgICB0eXBlOiBcInRleHQvcGxhaW5cIlxuICAgIH0pO1xuXG4gICAgY29uc3QgZmlsZVVybCA9IHdpbmRvdy5VUkwuY3JlYXRlT2JqZWN0VVJMKGYpO1xuXG4gICAgY29uc3QgZmlsZUxpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XG4gICAgZmlsZUxpbmsuaHJlZiA9IGZpbGVVcmw7XG4gICAgZmlsZUxpbmsuZG93bmxvYWQgPSBmLm5hbWU7XG4gICAgZmlsZUxpbmsuY2xpY2soKTtcblxuICAgIFVSTC5yZXZva2VPYmplY3RVUkwoZmlsZVVybCk7XG4gIH1cblxuICBpc0FycmF5KG9iajogYW55KSB7XG4gICAgcmV0dXJuIEFycmF5LmlzQXJyYXkob2JqKVxuICB9XG5cbiAgc2hvd1RhYmxlVmFsdWUodmFsdWU6IGFueSkge1xuICAgIGNvbnN0IHRhYmxlID0gbmV3IFRhYmxlVmFsdWUodmFsdWUpO1xuXG4gICAgdGhpcy50YWJsZVZpZXdlci50YWJsZSA9IHRhYmxlO1xuICAgIHRoaXMuX21vZGFsU2VydmljZS5vcGVuKFwiVGFibGVWaWV3ZXJcIik7XG4gIH1cblxuICBwcml2YXRlIHJlbW92ZVRlbXBsYXRlSWQodGVtcGxhdGVJZDogVGVtcGxhdGVJZCkge1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy50ZW1wbGF0ZUlkcy5sZW5ndGg7IGkrKykge1xuICAgICAgaWYgKHRoaXMudGVtcGxhdGVJZHNbaV0uaWQgPT09IHRlbXBsYXRlSWQuaWQpIHtcbiAgICAgICAgdGhpcy50ZW1wbGF0ZUlkcy5zcGxpY2UoaSwgMSk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn0iXX0=