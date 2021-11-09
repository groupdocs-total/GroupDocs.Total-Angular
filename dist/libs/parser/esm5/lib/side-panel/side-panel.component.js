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
var SidePanelComponent = /** @class */ (function () {
    function SidePanelComponent(_modalService, _parserService, _sourceFileService, _templateService, _utilsService, _placeholderService) {
        var _this = this;
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
        function (template) { return _this.currentTemplate = template; }));
        this._templateAddedSubscription = this._templateService.templateAddedSubject
            .subscribe((/**
         * @param {?} template
         * @return {?}
         */
        function (template) { return _this.templateIds.push(template); }));
        this._templateRemovedSubscription = this._templateService.templateRemovedSubject
            .subscribe((/**
         * @param {?} templateId
         * @return {?}
         */
        function (templateId) { return _this.removeTemplateId(templateId); }));
        this.currentTemplate = this._templateService.currentTemplate;
        this.templateIds = [];
        this._templateService.templateIds.forEach((/**
         * @param {?} element
         * @return {?}
         */
        function (element) {
            _this.templateIds.push(element);
        }));
    }
    Object.defineProperty(SidePanelComponent.prototype, "parseState", {
        get: /**
         * @return {?}
         */
        function () {
            return this._parseState;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SidePanelComponent.prototype, "currentTemplate", {
        get: /**
         * @return {?}
         */
        function () {
            return this._currentTemplate;
        },
        set: /**
         * @param {?} template
         * @return {?}
         */
        function (template) {
            var _this = this;
            if (this._currentTemplateModifiedSubscription) {
                this._currentTemplateModifiedSubscription.unsubscribe();
            }
            this._currentTemplate = template;
            this._currentTemplateModifiedSubscription = this._currentTemplate.modified
                .subscribe((/**
             * @param {?} t
             * @return {?}
             */
            function (t) { return _this.parseState.prompt = "Template was changed. Please parse data again."; }));
            this.parseState.prompt = "Press Parser to extract data by this template";
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    SidePanelComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        if (this._currentTemplateChangedSubscription) {
            this._currentTemplateChangedSubscription.unsubscribe();
        }
        if (this._templateAddedSubscription) {
            this._templateAddedSubscription.unsubscribe();
        }
        if (this._templateRemovedSubscription) {
            this._templateRemovedSubscription.unsubscribe();
        }
    };
    /**
     * @return {?}
     */
    SidePanelComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    /**
     * @return {?}
     */
    SidePanelComponent.prototype.manageTemplates = /**
     * @return {?}
     */
    function () {
        this.isDataMode = false;
        this.isTemplateMode = true;
    };
    /**
     * @param {?} templateId
     * @return {?}
     */
    SidePanelComponent.prototype.isCurrentTemplate = /**
     * @param {?} templateId
     * @return {?}
     */
    function (templateId) {
        return this.currentTemplate && this.currentTemplate.id === templateId.id;
    };
    /**
     * @param {?} templateId
     * @return {?}
     */
    SidePanelComponent.prototype.selectTemplateClick = /**
     * @param {?} templateId
     * @return {?}
     */
    function (templateId) {
        if (!templateId) {
            return;
        }
        this._templateService.selectTemplate(templateId);
        this.showData();
    };
    /**
     * @return {?}
     */
    SidePanelComponent.prototype.createTemplateClick = /**
     * @return {?}
     */
    function () {
        this._templateService.createTemplate();
    };
    /**
     * @param {?} templateId
     * @return {?}
     */
    SidePanelComponent.prototype.renameTemplateClick = /**
     * @param {?} templateId
     * @return {?}
     */
    function (templateId) {
        if (templateId && this.templateNameModal) {
            this.templateNameModal.operationId = templateId.id;
            this.templateNameModal.initialValue = templateId.name;
            this._modalService.open("TemplateNameModal");
        }
    };
    /**
     * @param {?} event
     * @return {?}
     */
    SidePanelComponent.prototype.templateNameModalAccept = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        /** @type {?} */
        var templateId = event.id;
        /** @type {?} */
        var templateName = event.newValue;
        try {
            this._templateService.renameTemplate({ id: templateId, name: templateName });
        }
        catch (error) {
            this.templateNameModal.error = error;
            return;
        }
        this._modalService.close("TemplateNameModal");
    };
    /**
     * @param {?} templateId
     * @return {?}
     */
    SidePanelComponent.prototype.removeTemplateClick = /**
     * @param {?} templateId
     * @return {?}
     */
    function (templateId) {
        if (this.templateRemoveModal) {
            this.templateRemoveModal.operationId = templateId.id;
            this.templateRemoveModal.promptText = "Remove template <b>" + templateId.name + "</b>?";
            this._modalService.open("TemplateRemoveModal");
        }
    };
    /**
     * @param {?} operationId
     * @return {?}
     */
    SidePanelComponent.prototype.templateRemoveModalAccept = /**
     * @param {?} operationId
     * @return {?}
     */
    function (operationId) {
        this._modalService.close("TemplateRemoveModal");
        this._templateService.removeTemplate({ id: operationId, name: "" });
    };
    /**
     * @param {?} templateId
     * @return {?}
     */
    SidePanelComponent.prototype.downloadTemplateClick = /**
     * @param {?} templateId
     * @return {?}
     */
    function (templateId) {
        /** @type {?} */
        var templateJson = this._templateService.serialize(templateId);
        /** @type {?} */
        var f = new File([templateJson], templateId.name + ".json", {
            type: "text/plain"
        });
        /** @type {?} */
        var fileUrl = window.URL.createObjectURL(f);
        /** @type {?} */
        var fileLink = document.createElement('a');
        fileLink.href = fileUrl;
        fileLink.download = f.name;
        fileLink.click();
        URL.revokeObjectURL(fileUrl);
    };
    /**
     * @param {?} event
     * @return {?}
     */
    SidePanelComponent.prototype.onFileSelected = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        var _this = this;
        /** @type {?} */
        var file = event.target.files[0];
        if (file) {
            /** @type {?} */
            var reader_1 = new FileReader();
            reader_1.readAsText(file);
            reader_1.onload = (/**
             * @param {?} x
             * @return {?}
             */
            function (x) {
                _this._templateService.deserialize(reader_1.result.toString());
                _this.uploadTemplate.nativeElement.value = null;
            });
        }
    };
    /**
     * @return {?}
     */
    SidePanelComponent.prototype.showData = /**
     * @return {?}
     */
    function () {
        this.isTemplateMode = false;
        this.isDataMode = true;
    };
    /**
     * @return {?}
     */
    SidePanelComponent.prototype.parse = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.parseState.execute();
        /** @type {?} */
        var state = this._placeholderService.startOperation("Parsing data...");
        /** @type {?} */
        var observer = {
            next: (/**
             * @param {?} response
             * @return {?}
             */
            function (response) {
                _this.parseState.result = response.data;
            }),
            error: (/**
             * @param {?} err
             * @return {?}
             */
            function (err) {
                _this.parseState.error = _this._parserService.getErrorMessage(err);
                state.error(err);
            }),
            complete: (/**
             * @return {?}
             */
            function () { return state.complete(); })
        };
        this._parserService.parseByTemplate(this._sourceFileService.sourceFile, null, this._templateService.currentTemplate).subscribe(observer);
    };
    /**
     * @return {?}
     */
    SidePanelComponent.prototype.downloadResultsAsCsv = /**
     * @return {?}
     */
    function () {
        if (!this.parseState.isCompleted || this.parseState.result.length === 0) {
            return;
        }
        /** @type {?} */
        var csv = this._utilsService.generateCsvForParseResults(this.parseState.result);
        /** @type {?} */
        var f = new File([csv], this.fileNameForCsv ? this.fileNameForCsv : this._sourceFileService.sourceFile.guid + "- data.csv", {
            type: "text/plain"
        });
        /** @type {?} */
        var fileUrl = window.URL.createObjectURL(f);
        /** @type {?} */
        var fileLink = document.createElement('a');
        fileLink.href = fileUrl;
        fileLink.download = f.name;
        fileLink.click();
        URL.revokeObjectURL(fileUrl);
    };
    /**
     * @param {?} obj
     * @return {?}
     */
    SidePanelComponent.prototype.isArray = /**
     * @param {?} obj
     * @return {?}
     */
    function (obj) {
        return Array.isArray(obj);
    };
    /**
     * @param {?} value
     * @return {?}
     */
    SidePanelComponent.prototype.showTableValue = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        /** @type {?} */
        var table = new TableValue(value);
        this.tableViewer.table = table;
        this._modalService.open("TableViewer");
    };
    /**
     * @private
     * @param {?} templateId
     * @return {?}
     */
    SidePanelComponent.prototype.removeTemplateId = /**
     * @private
     * @param {?} templateId
     * @return {?}
     */
    function (templateId) {
        for (var i = 0; i < this.templateIds.length; i++) {
            if (this.templateIds[i].id === templateId.id) {
                this.templateIds.splice(i, 1);
                return;
            }
        }
    };
    SidePanelComponent.decorators = [
        { type: Component, args: [{
                    selector: 'gd-parser-side-panel',
                    template: "<div class=\"side-panel\">\n    <input type=\"file\" #uploadTemplate (change)=\"onFileSelected($event)\" />\n\n    <div *ngIf=\"isDataMode\">\n        <div class=\"side-panel-title\">\n            <div>{{ currentTemplate?.name }}</div>\n            <div class=\"image-btn\" (click)=\"manageTemplates()\">\n                <fa-icon [icon]=\"'bars'\"></fa-icon>\n            </div>\n        </div>\n\n        <div class=\"side-panel-toolbar\">\n            <div class=\"image-btn\" (click)=\"createTemplateClick()\" title=\"Create a new template\">\n                <fa-icon [icon]=\"'file'\"></fa-icon>\n            </div>\n            <div class=\"image-btn\" (click)=\"uploadTemplate.click()\" title=\"Upload the existing template\">\n                <fa-icon [icon]=\"'upload'\"></fa-icon>\n            </div>\n\n            <div class=\"side-panel-toolbar-space\"></div>\n\n            <div class=\"image-btn\" (click)=\"renameTemplateClick(currentTemplate)\" title=\"Rename the current template\">\n                <fa-icon [icon]=\"'edit'\"></fa-icon>\n            </div>\n            <div class=\"image-btn\" *ngIf=\"currentTemplate?.isStored\" (click)=\"removeTemplateClick(currentTemplate)\"\n                title=\"Remove the current template\">\n                <fa-icon [icon]=\"'trash'\"></fa-icon>\n            </div>\n            <div class=\"image-btn\" *ngIf=\"currentTemplate?.isStored\" (click)=\"downloadTemplateClick(currentTemplate)\"\n                title=\"Download the current template\">\n                <fa-icon [icon]=\"'file-download'\"></fa-icon>\n            </div>\n        </div>\n\n        <div class=\"side-panel-content\" *ngIf=\"parseState.isProcessing\">\n            <div>Parsing data...</div>\n        </div>\n\n        <div class=\"side-panel-content\" *ngIf=\"parseState.isFailed\">\n            <div class=\"side-panel-content-text error-text\">Error occurs while parsing data.</div>\n            <div class=\"btn\" (click)=\"parse()\">Parse again</div>\n        </div>\n\n        <div class=\"side-panel-content\" *ngIf=\"parseState.isReadyToRun\">\n            <div class=\"side-panel-content-text\" [innerHTML]=\"parseState.prompt\"></div>\n            <div class=\"btn\" (click)=\"parse()\">Parse</div>\n        </div>\n\n        <div class=\"side-panel-content\" *ngIf=\"parseState.isCompleted && !(parseState.result?.length > 0)\">\n            <div class=\"side-panel-content-text\">\n                No data is extracted. Try to change the template.\n            </div>\n        </div>\n\n        <div class=\"data-panel\" *ngIf=\"parseState.result?.length > 0\">\n            <div class=\"side-panel-toolbar\">\n                <div class=\"btn\" (click)=\"downloadResultsAsCsv()\">Download as CSV</div>\n            </div>\n            <div class=\"data-item list-item\" *ngFor=\"let r of parseState.result\">\n                <div class=\"data-item-field\">{{ r.name }}</div>\n                <div class=\"data-item-value\" *ngIf=\"r.value && !isArray(r.value)\">{{ r.value }}</div>\n                <div class=\"data-item-value\" *ngIf=\"r.value && isArray(r.value)\">\n                    <div class=\"btn\" (click)=\"showTableValue(r.value)\">Show Table</div>\n                </div>\n            </div>\n        </div>\n    </div>\n\n    <div *ngIf=\"isTemplateMode\">\n        <div class=\"side-panel-title\">\n            <div>Manage Templates</div>\n            <div class=\"image-btn\" (click)=\"showData()\">\n                <fa-icon [icon]=\"'times'\"></fa-icon>\n            </div>\n        </div>\n        <div class=\"no-data-panel\" *ngIf=\"templateIds.length == 0\">\n            <div class=\"side-panel-content-text\">There are no templates. Try to create a new one or upload the existing\n                one.</div>\n        </div>\n\n        <div class=\"template-list\">\n            <div class=\"template-item list-item\" *ngFor=\"let t of templateIds\" (dblclick)=\"selectTemplateClick(t)\">\n                <div class=\"template-item-text\" [ngClass]=\"{'template-item-current': isCurrentTemplate(t)}\">{{ t?.name\n                    }} </div>\n                <div class=\"image-btn\" (click)=\"renameTemplateClick(t)\" title=\"Rename a template\">\n                    <fa-icon [icon]=\"'edit'\"></fa-icon>\n                </div>\n                <div class=\"image-btn\" (click)=\"downloadTemplateClick(t)\" title=\"Download a template\">\n                    <fa-icon [icon]=\"'file-download'\"></fa-icon>\n                </div>\n                <div class=\"image-btn\" (click)=\"removeTemplateClick(t)\" title=\"Remove a template\">\n                    <fa-icon [icon]=\"'trash'\"></fa-icon>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n\n<gd-rename-modal #templateNameModal [id]=\"'TemplateNameModal'\" [title]=\"'Rename Template'\"\n    [promptText]=\"'Enter a new template name:'\" [acceptText]=\"'Save'\" (acceptEvent)=\"templateNameModalAccept($event)\">\n</gd-rename-modal>\n<gd-confirmation-modal #templateRemoveModal [id]=\"'TemplateRemoveModal'\" [title]=\"'Remove Template'\"\n    [acceptText]=\"'Remove'\" (acceptEvent)=\"templateRemoveModalAccept($event)\">\n</gd-confirmation-modal>\n<gd-table-viewer #tableViewer></gd-table-viewer>",
                    styles: [".btn{padding:5px 20px;background-color:#25c2d4;cursor:pointer;color:#fff!important}.btn:hover{background-color:#688296;color:#ccd0d4!important}.image-btn{text-align:center;color:#fff;cursor:pointer;margin:1px}.image-btn:hover{color:#688296!important}.image-btn>fa-icon{padding:5px;font-size:16px}.list-item:nth-of-type(even){background-color:#f4f4f4}.list-item:hover{background-color:#e5e5e5}.list-item .image-btn,input{display:none}.list-item:hover .image-btn{display:block;color:#c4c4c4}.error-text{color:red}.side-panel{width:100%;height:100%}.side-panel>div{display:-webkit-box;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;flex-direction:column;height:100%}.side-panel-title{background-color:#25c2d4;color:#fff;display:-webkit-box;display:flex;-webkit-box-align:center;align-items:center;-webkit-box-pack:justify;justify-content:space-between;padding:10px}.side-panel-title>div{padding-left:5px}.side-panel-toolbar{display:-webkit-box;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;flex-direction:row;padding:10px}.side-panel-toolbar>div{color:#acacac}.side-panel-toolbar-space{margin-left:10px}.side-panel-content-text{padding:20px;text-align:center}.side-panel-content{display:-webkit-box;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;flex-direction:column;-webkit-box-align:center;align-items:center;-webkit-box-pack:center;justify-content:center;height:100%;width:100%}.data-panel{overflow-x:hidden;overflow-y:auto;display:-webkit-box;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;flex-direction:column;-webkit-box-align:center;align-items:center;-webkit-box-pack:stretch;justify-content:stretch;height:100%;width:100%}.data-item{display:-webkit-box;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;flex-direction:row;-webkit-box-align:center;align-items:center;-webkit-box-pack:stretch;justify-content:stretch;width:100%}.data-item>div{padding:10px}.data-item-field,.data-item-value{-webkit-box-flex:1;flex:1}.template-list{position:relative;overflow-x:hidden;overflow-y:auto}.template-item{display:-webkit-box;display:flex;-webkit-box-align:center;align-items:center;padding:5px;height:2em;cursor:pointer}.template-item-text{-webkit-box-flex:1;flex:1;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;padding:5px 15px}.template-item-current{font-weight:700}.template-item-btn>fa-icon{padding:5px;font-size:16px}"]
                }] }
    ];
    /** @nocollapse */
    SidePanelComponent.ctorParameters = function () { return [
        { type: ModalService },
        { type: ParserService },
        { type: SourceFileService },
        { type: TemplateService },
        { type: UtilsService },
        { type: PlaceholderService }
    ]; };
    SidePanelComponent.propDecorators = {
        fileNameForCsv: [{ type: Input }],
        templateNameModal: [{ type: ViewChild, args: ['templateNameModal', { static: true },] }],
        templateRemoveModal: [{ type: ViewChild, args: ['templateRemoveModal', { static: true },] }],
        uploadTemplate: [{ type: ViewChild, args: ['uploadTemplate', { static: true },] }],
        tableViewer: [{ type: ViewChild, args: ['tableViewer', { static: true },] }]
    };
    return SidePanelComponent;
}());
export { SidePanelComponent };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2lkZS1wYW5lbC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ3JvdXBkb2NzLmV4YW1wbGVzLmFuZ3VsYXIvcGFyc2VyLyIsInNvdXJjZXMiOlsibGliL3NpZGUtcGFuZWwvc2lkZS1wYW5lbC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQXFCLFNBQVMsRUFBRSxVQUFVLEVBQUUsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRTNGLE9BQU8sRUFBRSxjQUFjLEVBQXdDLFVBQVUsRUFBdUMsTUFBTSxlQUFlLENBQUM7QUFDdEksT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sd0NBQXdDLENBQUM7QUFDOUUsT0FBTyxFQUFFLDBCQUEwQixFQUFFLE1BQU0sb0RBQW9ELENBQUM7QUFFaEcsT0FBTyxFQU1MLFlBQVksRUFPYixNQUFNLCtDQUErQyxDQUFDO0FBRXZELE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUNsRCxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFFdEQsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDM0QsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGtCQUFrQixDQUFDO0FBQ2hELE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQzVELE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLHdDQUF3QyxDQUFDO0FBRTlFO0lBcUJFLDRCQUNVLGFBQTJCLEVBQzNCLGNBQTZCLEVBQzdCLGtCQUFxQyxFQUNyQyxnQkFBaUMsRUFDakMsYUFBMkIsRUFDM0IsbUJBQXVDO1FBTmpELGlCQXVCQztRQXRCUyxrQkFBYSxHQUFiLGFBQWEsQ0FBYztRQUMzQixtQkFBYyxHQUFkLGNBQWMsQ0FBZTtRQUM3Qix1QkFBa0IsR0FBbEIsa0JBQWtCLENBQW1CO1FBQ3JDLHFCQUFn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Q0FVTCxTQUFTLFNBQUMsbUJBQW1CLEVBQUUsRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFO3NDQUMvQyxTQUFTLFNBQUMscUJBQXFCLEVBQUUsRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFO2lDQUNqRCxTQUFTLFNBQUMsZ0JBQWdCLEVBQUUsRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFOzhCQUM1QyxTQUFTLFNBQUMsYUFBYSxFQUFFLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRTs7SUFrTzVDLHlCQUFDO0NBQUEsQUFyUEQsSUFxUEM7U0FoUFksa0JBQWtCOzs7SUFDN0IsNENBQWdDOzs7OztJQUVoQyxpRUFBMEQ7Ozs7O0lBQzFELHdEQUFpRDs7Ozs7SUFDakQsMERBQW1EOzs7OztJQUVuRCw4Q0FBbUM7Ozs7O0lBQ25DLGtFQUEyRDs7Ozs7SUFDM0QseUNBQTBEOztJQUUxRCwrQ0FBMEY7O0lBQzFGLGlEQUFvRzs7SUFDcEcsNENBQTBFOztJQUMxRSx5Q0FBOEU7O0lBMkI5RSx5Q0FBMEI7O0lBQzFCLDRDQUF3Qjs7SUFDeEIsd0NBQW9COzs7OztJQTFCbEIsMkNBQW1DOzs7OztJQUNuQyw0Q0FBcUM7Ozs7O0lBQ3JDLGdEQUE2Qzs7Ozs7SUFDN0MsOENBQXlDOzs7OztJQUN6QywyQ0FBbUM7Ozs7O0lBQ25DLGlEQUErQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25EZXN0cm95LCBPbkluaXQsIFZpZXdDaGlsZCwgRWxlbWVudFJlZiwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IERvbVNhbml0aXplciB9IGZyb20gJ0Bhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXInO1xuaW1wb3J0IHsgT3BlcmF0aW9uU3RhdGUsIFBhcnNlQnlUZW1wbGF0ZVJlc3BvbnNlLCBQYXJzZVJlc3VsdCwgVGFibGVWYWx1ZSwgVGVtcGxhdGUsIFRlbXBsYXRlRmllbGQsIFRlbXBsYXRlSWQgfSBmcm9tICcuLi9hcHAtbW9kZWxzJztcbmltcG9ydCB7IFJlbmFtZU1vZGFsQ29tcG9uZW50IH0gZnJvbSAnLi4vcmVuYW1lLW1vZGFsL3JlbmFtZS1tb2RhbC5jb21wb25lbnQnO1xuaW1wb3J0IHsgQ29uZmlybWF0aW9uTW9kYWxDb21wb25lbnQgfSBmcm9tICcuLi9jb25maXJtYXRpb24tbW9kYWwvY29uZmlybWF0aW9uLW1vZGFsLmNvbXBvbmVudCc7XG5cbmltcG9ydCB7XG4gIEFkZER5bmFtaWNDb21wb25lbnRTZXJ2aWNlLFxuICBDb21tb25Nb2RhbHMsXG4gIEZpbGVDcmVkZW50aWFscyxcbiAgRmlsZU1vZGVsLCBGb3JtYXR0aW5nLFxuICBIb3N0aW5nRHluYW1pY0NvbXBvbmVudFNlcnZpY2UsXG4gIE1vZGFsU2VydmljZSxcbiAgTmF2aWdhdGVTZXJ2aWNlLCBQYWdlUHJlbG9hZFNlcnZpY2UsIFBhc3N3b3JkU2VydmljZSxcbiAgVG9wVGFiQWN0aXZhdG9yU2VydmljZSwgVXBsb2FkRmlsZXNTZXJ2aWNlLFxuICBVdGlscyxcbiAgV2luZG93U2VydmljZSxcbiAgWm9vbVNlcnZpY2UsXG4gIEV4Y2VwdGlvbk1lc3NhZ2VTZXJ2aWNlXG59IGZyb20gXCJAZ3JvdXBkb2NzLmV4YW1wbGVzLmFuZ3VsYXIvY29tbW9uLWNvbXBvbmVudHNcIjtcblxuaW1wb3J0IHsgUGFyc2VyU2VydmljZSB9IGZyb20gJy4uL3BhcnNlci5zZXJ2aWNlJztcbmltcG9ydCB7IFRlbXBsYXRlU2VydmljZSB9IGZyb20gJy4uL3RlbXBsYXRlLnNlcnZpY2UnO1xuaW1wb3J0IHsgU3ViamVjdCwgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBTb3VyY2VGaWxlU2VydmljZSB9IGZyb20gJy4uL3NvdXJjZS1maWxlLnNlcnZpY2UnO1xuaW1wb3J0IHsgVXRpbHNTZXJ2aWNlIH0gZnJvbSAnLi4vdXRpbHMuc2VydmljZSc7XG5pbXBvcnQgeyBQbGFjZWhvbGRlclNlcnZpY2UgfSBmcm9tICcuLi9wbGFjZWhvbGRlci5zZXJ2aWNlJztcbmltcG9ydCB7IFRhYmxlVmlld2VyQ29tcG9uZW50IH0gZnJvbSAnLi4vdGFibGUtdmlld2VyL3RhYmxlLXZpZXdlci5jb21wb25lbnQnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdnZC1wYXJzZXItc2lkZS1wYW5lbCcsXG4gIHRlbXBsYXRlVXJsOiAnLi9zaWRlLXBhbmVsLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vc2lkZS1wYW5lbC5jb21wb25lbnQubGVzcyddXG59KVxuZXhwb3J0IGNsYXNzIFNpZGVQYW5lbENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcbiAgQElucHV0KCkgZmlsZU5hbWVGb3JDc3Y6IHN0cmluZztcbiAgXG4gIHByaXZhdGUgX2N1cnJlbnRUZW1wbGF0ZUNoYW5nZWRTdWJzY3JpcHRpb246IFN1YnNjcmlwdGlvbjtcbiAgcHJpdmF0ZSBfdGVtcGxhdGVBZGRlZFN1YnNjcmlwdGlvbjogU3Vic2NyaXB0aW9uO1xuICBwcml2YXRlIF90ZW1wbGF0ZVJlbW92ZWRTdWJzY3JpcHRpb246IFN1YnNjcmlwdGlvbjtcblxuICBwcml2YXRlIF9jdXJyZW50VGVtcGxhdGU6IFRlbXBsYXRlO1xuICBwcml2YXRlIF9jdXJyZW50VGVtcGxhdGVNb2RpZmllZFN1YnNjcmlwdGlvbjogU3Vic2NyaXB0aW9uO1xuICBwcml2YXRlIF9wYXJzZVN0YXRlID0gbmV3IE9wZXJhdGlvblN0YXRlPFBhcnNlUmVzdWx0W10+KCk7XG5cbiAgQFZpZXdDaGlsZCgndGVtcGxhdGVOYW1lTW9kYWwnLCB7IHN0YXRpYzogdHJ1ZSB9KSB0ZW1wbGF0ZU5hbWVNb2RhbDogUmVuYW1lTW9kYWxDb21wb25lbnQ7XG4gIEBWaWV3Q2hpbGQoJ3RlbXBsYXRlUmVtb3ZlTW9kYWwnLCB7IHN0YXRpYzogdHJ1ZSB9KSB0ZW1wbGF0ZVJlbW92ZU1vZGFsOiBDb25maXJtYXRpb25Nb2RhbENvbXBvbmVudDtcbiAgQFZpZXdDaGlsZCgndXBsb2FkVGVtcGxhdGUnLCB7IHN0YXRpYzogdHJ1ZSB9KSB1cGxvYWRUZW1wbGF0ZTogRWxlbWVudFJlZjtcbiAgQFZpZXdDaGlsZCgndGFibGVWaWV3ZXInLCB7IHN0YXRpYzogdHJ1ZSB9KSB0YWJsZVZpZXdlcjogVGFibGVWaWV3ZXJDb21wb25lbnQ7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBfbW9kYWxTZXJ2aWNlOiBNb2RhbFNlcnZpY2UsXG4gICAgcHJpdmF0ZSBfcGFyc2VyU2VydmljZTogUGFyc2VyU2VydmljZSxcbiAgICBwcml2YXRlIF9zb3VyY2VGaWxlU2VydmljZTogU291cmNlRmlsZVNlcnZpY2UsXG4gICAgcHJpdmF0ZSBfdGVtcGxhdGVTZXJ2aWNlOiBUZW1wbGF0ZVNlcnZpY2UsXG4gICAgcHJpdmF0ZSBfdXRpbHNTZXJ2aWNlOiBVdGlsc1NlcnZpY2UsXG4gICAgcHJpdmF0ZSBfcGxhY2Vob2xkZXJTZXJ2aWNlOiBQbGFjZWhvbGRlclNlcnZpY2UpIHtcblxuICAgIHRoaXMuaXNEYXRhTW9kZSA9IHRydWU7XG4gICAgdGhpcy5pc1RlbXBsYXRlTW9kZSA9IGZhbHNlO1xuXG4gICAgdGhpcy5fY3VycmVudFRlbXBsYXRlQ2hhbmdlZFN1YnNjcmlwdGlvbiA9IHRoaXMuX3RlbXBsYXRlU2VydmljZS5jdXJyZW50VGVtcGxhdGVDaGFuZ2VkXG4gICAgICAuc3Vic2NyaWJlKHRlbXBsYXRlID0+IHRoaXMuY3VycmVudFRlbXBsYXRlID0gdGVtcGxhdGUpO1xuICAgIHRoaXMuX3RlbXBsYXRlQWRkZWRTdWJzY3JpcHRpb24gPSB0aGlzLl90ZW1wbGF0ZVNlcnZpY2UudGVtcGxhdGVBZGRlZFN1YmplY3RcbiAgICAgIC5zdWJzY3JpYmUodGVtcGxhdGUgPT4gdGhpcy50ZW1wbGF0ZUlkcy5wdXNoKHRlbXBsYXRlKSk7XG4gICAgdGhpcy5fdGVtcGxhdGVSZW1vdmVkU3Vic2NyaXB0aW9uID0gdGhpcy5fdGVtcGxhdGVTZXJ2aWNlLnRlbXBsYXRlUmVtb3ZlZFN1YmplY3RcbiAgICAgIC5zdWJzY3JpYmUodGVtcGxhdGVJZCA9PiB0aGlzLnJlbW92ZVRlbXBsYXRlSWQodGVtcGxhdGVJZCkpO1xuXG4gICAgdGhpcy5jdXJyZW50VGVtcGxhdGUgPSB0aGlzLl90ZW1wbGF0ZVNlcnZpY2UuY3VycmVudFRlbXBsYXRlO1xuICAgIHRoaXMudGVtcGxhdGVJZHMgPSBbXTtcbiAgICB0aGlzLl90ZW1wbGF0ZVNlcnZpY2UudGVtcGxhdGVJZHMuZm9yRWFjaChlbGVtZW50ID0+IHtcbiAgICAgIHRoaXMudGVtcGxhdGVJZHMucHVzaChlbGVtZW50KTtcbiAgICB9KTtcbiAgfVxuXG4gIHRlbXBsYXRlSWRzOiBUZW1wbGF0ZUlkW107XG4gIGlzVGVtcGxhdGVNb2RlOiBib29sZWFuO1xuICBpc0RhdGFNb2RlOiBib29sZWFuO1xuXG4gIGdldCBwYXJzZVN0YXRlKCkge1xuICAgIHJldHVybiB0aGlzLl9wYXJzZVN0YXRlO1xuICB9XG5cbiAgZ2V0IGN1cnJlbnRUZW1wbGF0ZSgpIHtcbiAgICByZXR1cm4gdGhpcy5fY3VycmVudFRlbXBsYXRlO1xuICB9XG5cbiAgc2V0IGN1cnJlbnRUZW1wbGF0ZSh0ZW1wbGF0ZTogVGVtcGxhdGUpIHtcbiAgICBpZiAodGhpcy5fY3VycmVudFRlbXBsYXRlTW9kaWZpZWRTdWJzY3JpcHRpb24pIHtcbiAgICAgIHRoaXMuX2N1cnJlbnRUZW1wbGF0ZU1vZGlmaWVkU3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XG4gICAgfVxuXG4gICAgdGhpcy5fY3VycmVudFRlbXBsYXRlID0gdGVtcGxhdGU7XG4gICAgdGhpcy5fY3VycmVudFRlbXBsYXRlTW9kaWZpZWRTdWJzY3JpcHRpb24gPSB0aGlzLl9jdXJyZW50VGVtcGxhdGUubW9kaWZpZWRcbiAgICAgIC5zdWJzY3JpYmUodCA9PiB0aGlzLnBhcnNlU3RhdGUucHJvbXB0ID0gXCJUZW1wbGF0ZSB3YXMgY2hhbmdlZC4gUGxlYXNlIHBhcnNlIGRhdGEgYWdhaW4uXCIpO1xuXG4gICAgdGhpcy5wYXJzZVN0YXRlLnByb21wdCA9IFwiUHJlc3MgUGFyc2VyIHRvIGV4dHJhY3QgZGF0YSBieSB0aGlzIHRlbXBsYXRlXCI7XG4gIH1cblxuICBuZ09uRGVzdHJveSgpIHtcbiAgICBpZiAodGhpcy5fY3VycmVudFRlbXBsYXRlQ2hhbmdlZFN1YnNjcmlwdGlvbikge1xuICAgICAgdGhpcy5fY3VycmVudFRlbXBsYXRlQ2hhbmdlZFN1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpO1xuICAgIH1cblxuICAgIGlmICh0aGlzLl90ZW1wbGF0ZUFkZGVkU3Vic2NyaXB0aW9uKSB7XG4gICAgICB0aGlzLl90ZW1wbGF0ZUFkZGVkU3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuX3RlbXBsYXRlUmVtb3ZlZFN1YnNjcmlwdGlvbikge1xuICAgICAgdGhpcy5fdGVtcGxhdGVSZW1vdmVkU3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XG4gICAgfVxuICB9XG5cbiAgbmdPbkluaXQoKSB7XG4gIH1cblxuICBtYW5hZ2VUZW1wbGF0ZXMoKSB7XG4gICAgdGhpcy5pc0RhdGFNb2RlID0gZmFsc2U7XG4gICAgdGhpcy5pc1RlbXBsYXRlTW9kZSA9IHRydWU7XG4gIH1cblxuICBpc0N1cnJlbnRUZW1wbGF0ZSh0ZW1wbGF0ZUlkOiBUZW1wbGF0ZUlkKSB7XG4gICAgcmV0dXJuIHRoaXMuY3VycmVudFRlbXBsYXRlICYmIHRoaXMuY3VycmVudFRlbXBsYXRlLmlkID09PSB0ZW1wbGF0ZUlkLmlkO1xuICB9XG5cbiAgc2VsZWN0VGVtcGxhdGVDbGljayh0ZW1wbGF0ZUlkOiBUZW1wbGF0ZUlkKSB7XG4gICAgaWYgKCF0ZW1wbGF0ZUlkKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdGhpcy5fdGVtcGxhdGVTZXJ2aWNlLnNlbGVjdFRlbXBsYXRlKHRlbXBsYXRlSWQpO1xuICAgIHRoaXMuc2hvd0RhdGEoKTtcbiAgfVxuXG4gIGNyZWF0ZVRlbXBsYXRlQ2xpY2soKSB7XG4gICAgdGhpcy5fdGVtcGxhdGVTZXJ2aWNlLmNyZWF0ZVRlbXBsYXRlKCk7XG4gIH1cblxuICByZW5hbWVUZW1wbGF0ZUNsaWNrKHRlbXBsYXRlSWQ6IFRlbXBsYXRlSWQpIHtcbiAgICBpZiAodGVtcGxhdGVJZCAmJiB0aGlzLnRlbXBsYXRlTmFtZU1vZGFsKSB7XG4gICAgICB0aGlzLnRlbXBsYXRlTmFtZU1vZGFsLm9wZXJhdGlvbklkID0gdGVtcGxhdGVJZC5pZDtcbiAgICAgIHRoaXMudGVtcGxhdGVOYW1lTW9kYWwuaW5pdGlhbFZhbHVlID0gdGVtcGxhdGVJZC5uYW1lO1xuXG4gICAgICB0aGlzLl9tb2RhbFNlcnZpY2Uub3BlbihcIlRlbXBsYXRlTmFtZU1vZGFsXCIpO1xuICAgIH1cbiAgfVxuXG4gIHRlbXBsYXRlTmFtZU1vZGFsQWNjZXB0KGV2ZW50KSB7XG4gICAgY29uc3QgdGVtcGxhdGVJZCA9IGV2ZW50LmlkO1xuICAgIGNvbnN0IHRlbXBsYXRlTmFtZSA9IGV2ZW50Lm5ld1ZhbHVlO1xuXG4gICAgdHJ5IHtcbiAgICAgIHRoaXMuX3RlbXBsYXRlU2VydmljZS5yZW5hbWVUZW1wbGF0ZSh7IGlkOiB0ZW1wbGF0ZUlkLCBuYW1lOiB0ZW1wbGF0ZU5hbWUgfSk7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIHRoaXMudGVtcGxhdGVOYW1lTW9kYWwuZXJyb3IgPSBlcnJvcjtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0aGlzLl9tb2RhbFNlcnZpY2UuY2xvc2UoXCJUZW1wbGF0ZU5hbWVNb2RhbFwiKTtcbiAgfVxuXG4gIHJlbW92ZVRlbXBsYXRlQ2xpY2sodGVtcGxhdGVJZDogVGVtcGxhdGVJZCkge1xuICAgIGlmICh0aGlzLnRlbXBsYXRlUmVtb3ZlTW9kYWwpIHtcbiAgICAgIHRoaXMudGVtcGxhdGVSZW1vdmVNb2RhbC5vcGVyYXRpb25JZCA9IHRlbXBsYXRlSWQuaWQ7XG4gICAgICB0aGlzLnRlbXBsYXRlUmVtb3ZlTW9kYWwucHJvbXB0VGV4dCA9IFwiUmVtb3ZlIHRlbXBsYXRlIDxiPlwiICsgdGVtcGxhdGVJZC5uYW1lICsgXCI8L2I+P1wiO1xuXG4gICAgICB0aGlzLl9tb2RhbFNlcnZpY2Uub3BlbihcIlRlbXBsYXRlUmVtb3ZlTW9kYWxcIik7XG4gICAgfVxuICB9XG5cbiAgdGVtcGxhdGVSZW1vdmVNb2RhbEFjY2VwdChvcGVyYXRpb25JZDogc3RyaW5nKSB7XG4gICAgdGhpcy5fbW9kYWxTZXJ2aWNlLmNsb3NlKFwiVGVtcGxhdGVSZW1vdmVNb2RhbFwiKTtcbiAgICB0aGlzLl90ZW1wbGF0ZVNlcnZpY2UucmVtb3ZlVGVtcGxhdGUoeyBpZDogb3BlcmF0aW9uSWQsIG5hbWU6IFwiXCIgfSk7XG4gIH1cblxuICBkb3dubG9hZFRlbXBsYXRlQ2xpY2sodGVtcGxhdGVJZDogVGVtcGxhdGVJZCkge1xuICAgIGNvbnN0IHRlbXBsYXRlSnNvbiA9IHRoaXMuX3RlbXBsYXRlU2VydmljZS5zZXJpYWxpemUodGVtcGxhdGVJZCk7XG5cbiAgICBjb25zdCBmID0gbmV3IEZpbGUoW3RlbXBsYXRlSnNvbl0sIHRlbXBsYXRlSWQubmFtZSArIFwiLmpzb25cIiwge1xuICAgICAgdHlwZTogXCJ0ZXh0L3BsYWluXCJcbiAgICB9KTtcblxuICAgIGNvbnN0IGZpbGVVcmwgPSB3aW5kb3cuVVJMLmNyZWF0ZU9iamVjdFVSTChmKTtcblxuICAgIGNvbnN0IGZpbGVMaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xuICAgIGZpbGVMaW5rLmhyZWYgPSBmaWxlVXJsO1xuICAgIGZpbGVMaW5rLmRvd25sb2FkID0gZi5uYW1lO1xuICAgIGZpbGVMaW5rLmNsaWNrKCk7XG5cbiAgICBVUkwucmV2b2tlT2JqZWN0VVJMKGZpbGVVcmwpO1xuICB9XG5cbiAgb25GaWxlU2VsZWN0ZWQoZXZlbnQpIHtcbiAgICBjb25zdCBmaWxlOiBGaWxlID0gZXZlbnQudGFyZ2V0LmZpbGVzWzBdO1xuXG4gICAgaWYgKGZpbGUpIHtcbiAgICAgIGNvbnN0IHJlYWRlciA9IG5ldyBGaWxlUmVhZGVyKCk7XG5cbiAgICAgIHJlYWRlci5yZWFkQXNUZXh0KGZpbGUpO1xuICAgICAgcmVhZGVyLm9ubG9hZCA9IHggPT4ge1xuICAgICAgICB0aGlzLl90ZW1wbGF0ZVNlcnZpY2UuZGVzZXJpYWxpemUocmVhZGVyLnJlc3VsdC50b1N0cmluZygpKTtcbiAgICAgICAgdGhpcy51cGxvYWRUZW1wbGF0ZS5uYXRpdmVFbGVtZW50LnZhbHVlID0gbnVsbDtcbiAgICAgIH07XG4gICAgfVxuICB9XG5cbiAgc2hvd0RhdGEoKSB7XG4gICAgdGhpcy5pc1RlbXBsYXRlTW9kZSA9IGZhbHNlO1xuICAgIHRoaXMuaXNEYXRhTW9kZSA9IHRydWU7XG4gIH1cblxuICBwYXJzZSgpIHtcbiAgICB0aGlzLnBhcnNlU3RhdGUuZXhlY3V0ZSgpO1xuXG4gICAgY29uc3Qgc3RhdGUgPSB0aGlzLl9wbGFjZWhvbGRlclNlcnZpY2Uuc3RhcnRPcGVyYXRpb24oXCJQYXJzaW5nIGRhdGEuLi5cIik7XG5cbiAgICBjb25zdCBvYnNlcnZlciA9IHtcbiAgICAgIG5leHQ6IChyZXNwb25zZTogUGFyc2VCeVRlbXBsYXRlUmVzcG9uc2UpID0+IHtcbiAgICAgICAgdGhpcy5wYXJzZVN0YXRlLnJlc3VsdCA9IHJlc3BvbnNlLmRhdGE7XG4gICAgICB9LFxuICAgICAgZXJyb3I6IChlcnI6IGFueSkgPT4geyAgICAgICAgXG4gICAgICAgIHRoaXMucGFyc2VTdGF0ZS5lcnJvciA9IHRoaXMuX3BhcnNlclNlcnZpY2UuZ2V0RXJyb3JNZXNzYWdlKGVycik7XG4gICAgICAgIHN0YXRlLmVycm9yKGVycik7XG4gICAgICB9LFxuICAgICAgY29tcGxldGU6ICgpID0+IHN0YXRlLmNvbXBsZXRlKClcbiAgICB9O1xuXG4gICAgdGhpcy5fcGFyc2VyU2VydmljZS5wYXJzZUJ5VGVtcGxhdGUoXG4gICAgICB0aGlzLl9zb3VyY2VGaWxlU2VydmljZS5zb3VyY2VGaWxlLFxuICAgICAgbnVsbCxcbiAgICAgIHRoaXMuX3RlbXBsYXRlU2VydmljZS5jdXJyZW50VGVtcGxhdGVcbiAgICApLnN1YnNjcmliZShvYnNlcnZlcik7XG4gIH1cblxuICBkb3dubG9hZFJlc3VsdHNBc0NzdigpIHtcbiAgICBpZiAoIXRoaXMucGFyc2VTdGF0ZS5pc0NvbXBsZXRlZCB8fCB0aGlzLnBhcnNlU3RhdGUucmVzdWx0Lmxlbmd0aCA9PT0gMCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IGNzdiA9IHRoaXMuX3V0aWxzU2VydmljZS5nZW5lcmF0ZUNzdkZvclBhcnNlUmVzdWx0cyh0aGlzLnBhcnNlU3RhdGUucmVzdWx0KTtcblxuICAgIGNvbnN0IGYgPSBuZXcgRmlsZShbY3N2XSwgdGhpcy5maWxlTmFtZUZvckNzdiA/IHRoaXMuZmlsZU5hbWVGb3JDc3YgOiB0aGlzLl9zb3VyY2VGaWxlU2VydmljZS5zb3VyY2VGaWxlLmd1aWQgKyBcIi0gZGF0YS5jc3ZcIiwge1xuICAgICAgdHlwZTogXCJ0ZXh0L3BsYWluXCJcbiAgICB9KTtcblxuICAgIGNvbnN0IGZpbGVVcmwgPSB3aW5kb3cuVVJMLmNyZWF0ZU9iamVjdFVSTChmKTtcblxuICAgIGNvbnN0IGZpbGVMaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xuICAgIGZpbGVMaW5rLmhyZWYgPSBmaWxlVXJsO1xuICAgIGZpbGVMaW5rLmRvd25sb2FkID0gZi5uYW1lO1xuICAgIGZpbGVMaW5rLmNsaWNrKCk7XG5cbiAgICBVUkwucmV2b2tlT2JqZWN0VVJMKGZpbGVVcmwpO1xuICB9XG5cbiAgaXNBcnJheShvYmo6IGFueSkge1xuICAgIHJldHVybiBBcnJheS5pc0FycmF5KG9iailcbiAgfVxuXG4gIHNob3dUYWJsZVZhbHVlKHZhbHVlOiBhbnkpIHtcbiAgICBjb25zdCB0YWJsZSA9IG5ldyBUYWJsZVZhbHVlKHZhbHVlKTtcblxuICAgIHRoaXMudGFibGVWaWV3ZXIudGFibGUgPSB0YWJsZTtcbiAgICB0aGlzLl9tb2RhbFNlcnZpY2Uub3BlbihcIlRhYmxlVmlld2VyXCIpO1xuICB9XG5cbiAgcHJpdmF0ZSByZW1vdmVUZW1wbGF0ZUlkKHRlbXBsYXRlSWQ6IFRlbXBsYXRlSWQpIHtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMudGVtcGxhdGVJZHMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGlmICh0aGlzLnRlbXBsYXRlSWRzW2ldLmlkID09PSB0ZW1wbGF0ZUlkLmlkKSB7XG4gICAgICAgIHRoaXMudGVtcGxhdGVJZHMuc3BsaWNlKGksIDEpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgfVxuICB9XG59Il19