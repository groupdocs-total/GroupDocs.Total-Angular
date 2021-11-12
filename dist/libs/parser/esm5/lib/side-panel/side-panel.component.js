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
     * @param {?} $event
     * @return {?}
     */
    SidePanelComponent.prototype.renameTemplateClick = /**
     * @param {?} templateId
     * @param {?} $event
     * @return {?}
     */
    function (templateId, $event) {
        $event.stopPropagation();
        $event.preventDefault();
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
     * @param {?} $event
     * @return {?}
     */
    SidePanelComponent.prototype.removeTemplateClick = /**
     * @param {?} templateId
     * @param {?} $event
     * @return {?}
     */
    function (templateId, $event) {
        $event.stopPropagation();
        $event.preventDefault();
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
     * @param {?} $event
     * @return {?}
     */
    SidePanelComponent.prototype.downloadTemplateClick = /**
     * @param {?} templateId
     * @param {?} $event
     * @return {?}
     */
    function (templateId, $event) {
        $event.stopPropagation();
        $event.preventDefault();
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
        var f = new File([csv], this.fileNameForCsv ? this.fileNameForCsv + " - data.csv" : this._sourceFileService.sourceFile.guid + " - data.csv", {
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
                    template: "<div class=\"side-panel\">\n    <input type=\"file\" #uploadTemplate (change)=\"onFileSelected($event)\" />\n\n    <div *ngIf=\"isDataMode\">\n        <div class=\"side-panel-title\">\n            <div>{{ currentTemplate?.name }}</div>\n            <div class=\"image-btn\" (click)=\"manageTemplates()\">\n                <fa-icon [icon]=\"'bars'\"></fa-icon>\n            </div>\n        </div>\n\n        <div class=\"side-panel-toolbar\">\n            <div class=\"image-btn\" (click)=\"createTemplateClick()\" title=\"Create a new template\">\n                <fa-icon [icon]=\"'file'\"></fa-icon>\n            </div>\n            <div class=\"image-btn\" (click)=\"uploadTemplate.click()\" title=\"Upload the existing template\">\n                <fa-icon [icon]=\"'upload'\"></fa-icon>\n            </div>\n\n            <div class=\"side-panel-toolbar-space\"></div>\n\n            <div class=\"image-btn\" (click)=\"renameTemplateClick(currentTemplate, $event)\" title=\"Rename the current template\">\n                <fa-icon [icon]=\"'edit'\"></fa-icon>\n            </div>\n            <div class=\"image-btn\" *ngIf=\"currentTemplate?.isStored\" (click)=\"removeTemplateClick(currentTemplate, $event)\"\n                title=\"Remove the current template\">\n                <fa-icon [icon]=\"'trash'\"></fa-icon>\n            </div>\n            <div class=\"image-btn\" *ngIf=\"currentTemplate?.isStored\" (click)=\"downloadTemplateClick(currentTemplate, $event)\"\n                title=\"Download the current template\">\n                <fa-icon [icon]=\"'file-download'\"></fa-icon>\n            </div>\n        </div>\n\n        <div class=\"side-panel-content\" *ngIf=\"parseState.isProcessing\">\n            <div>Parsing data...</div>\n        </div>\n\n        <div class=\"side-panel-content\" *ngIf=\"parseState.isFailed\">\n            <div class=\"side-panel-content-text error-text\">Error occurs while parsing data.</div>\n            <div class=\"btn\" (click)=\"parse()\">Parse again</div>\n        </div>\n\n        <div class=\"side-panel-content\" *ngIf=\"parseState.isReadyToRun\">\n            <div class=\"side-panel-content-text\" [innerHTML]=\"parseState.prompt\"></div>\n            <div class=\"btn\" (click)=\"parse()\">Parse</div>\n        </div>\n\n        <div class=\"side-panel-content\" *ngIf=\"parseState.isCompleted && !(parseState.result?.length > 0)\">\n            <div class=\"side-panel-content-text\">\n                No data is extracted. Try to change the template.\n            </div>\n        </div>\n\n        <div class=\"data-panel\" *ngIf=\"parseState.result?.length > 0\">\n            <div class=\"side-panel-toolbar\">\n                <div class=\"btn\" (click)=\"downloadResultsAsCsv()\">Download as CSV</div>\n            </div>\n            <div class=\"data-item list-item\" *ngFor=\"let r of parseState.result\">\n                <div class=\"data-item-field\">{{ r.name }}</div>\n                <div class=\"data-item-value\" *ngIf=\"r.value && !isArray(r.value)\">{{ r.value }}</div>\n                <div class=\"data-item-value\" *ngIf=\"r.value && isArray(r.value)\">\n                    <div class=\"btn\" (click)=\"showTableValue(r.value)\">Show Table</div>\n                </div>\n            </div>\n        </div>\n    </div>\n\n    <div *ngIf=\"isTemplateMode\">\n        <div class=\"side-panel-title\">\n            <div>Manage Templates</div>\n            <div class=\"image-btn\" (click)=\"showData()\">\n                <fa-icon [icon]=\"'times'\"></fa-icon>\n            </div>\n        </div>\n        <div class=\"no-data-panel\" *ngIf=\"templateIds.length == 0\">\n            <div class=\"side-panel-content-text\">There are no templates. Try to create a new one or upload the existing\n                one.</div>\n        </div>\n\n        <div class=\"template-list\">\n            <div class=\"template-item list-item\" *ngFor=\"let t of templateIds\" (click)=\"selectTemplateClick(t)\">\n                <div class=\"template-item-text\" [ngClass]=\"{'template-item-current': isCurrentTemplate(t)}\">{{ t?.name\n                    }} </div>\n                <div class=\"image-btn\" (click)=\"renameTemplateClick(t, $event)\" title=\"Rename a template\">\n                    <fa-icon [icon]=\"'edit'\"></fa-icon>\n                </div>\n                <div class=\"image-btn\" (click)=\"downloadTemplateClick(t, $event)\" title=\"Download a template\">\n                    <fa-icon [icon]=\"'file-download'\"></fa-icon>\n                </div>\n                <div class=\"image-btn\" (click)=\"removeTemplateClick(t, $event)\" title=\"Remove a template\">\n                    <fa-icon [icon]=\"'trash'\"></fa-icon>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n\n<gd-rename-modal #templateNameModal [id]=\"'TemplateNameModal'\" [title]=\"'Rename Template'\"\n    [promptText]=\"'Enter a new template name:'\" [acceptText]=\"'Save'\" (acceptEvent)=\"templateNameModalAccept($event)\">\n</gd-rename-modal>\n<gd-confirmation-modal #templateRemoveModal [id]=\"'TemplateRemoveModal'\" [title]=\"'Remove Template'\"\n    [acceptText]=\"'Remove'\" (acceptEvent)=\"templateRemoveModalAccept($event)\">\n</gd-confirmation-modal>\n<gd-table-viewer #tableViewer></gd-table-viewer>",
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2lkZS1wYW5lbC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ3JvdXBkb2NzLmV4YW1wbGVzLmFuZ3VsYXIvcGFyc2VyLyIsInNvdXJjZXMiOlsibGliL3NpZGUtcGFuZWwvc2lkZS1wYW5lbC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQXFCLFNBQVMsRUFBRSxVQUFVLEVBQUUsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRTNGLE9BQU8sRUFBRSxjQUFjLEVBQXdDLFVBQVUsRUFBdUMsTUFBTSxlQUFlLENBQUM7QUFDdEksT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sd0NBQXdDLENBQUM7QUFDOUUsT0FBTyxFQUFFLDBCQUEwQixFQUFFLE1BQU0sb0RBQW9ELENBQUM7QUFFaEcsT0FBTyxFQU1MLFlBQVksRUFPYixNQUFNLCtDQUErQyxDQUFDO0FBRXZELE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUNsRCxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFFdEQsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDM0QsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGtCQUFrQixDQUFDO0FBQ2hELE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQzVELE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLHdDQUF3QyxDQUFDO0FBRTlFO0lBcUJFLDRCQUNVLGFBQTJCLEVBQzNCLGNBQTZCLEVBQzdCLGtCQUFxQyxFQUNyQyxnQkFBaUMsRUFDakMsYUFBMkIsRUFDM0IsbUJBQXVDO1FBTmpELGlCQXVCQztRQXRCUyxrQkFBYSxHQUFiLGFBQWEsQ0FBYztRQUMzQixtQkFBYyxHQUFkLGNBQWMsQ0FBZTtRQUM3Qix1QkFBa0IsR0FBbEIsa0JBQWtCLENBQW1CO1FBQ3JDLHFCQUFn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LFdBQVcsQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO2dCQUM5QixPQUFPO2FBQ1I7U0FDRjtJQUNILENBQUM7O2dCQTFQRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLHNCQUFzQjtvQkFDaEMsZ3RLQUEwQzs7aUJBRTNDOzs7O2dCQXJCQyxZQUFZO2dCQVNMLGFBQWE7Z0JBR2IsaUJBQWlCO2dCQUZqQixlQUFlO2dCQUdmLFlBQVk7Z0JBQ1osa0JBQWtCOzs7aUNBU3hCLEtBQUs7b0NBVUwsU0FBUyxTQUFDLG1CQUFtQixFQUFFLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRTtzQ0FDL0MsU0FBUyxTQUFDLHFCQUFxQixFQUFFLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRTtpQ0FDakQsU0FBUyxTQUFDLGdCQUFnQixFQUFFLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRTs4QkFDNUMsU0FBUyxTQUFDLGFBQWEsRUFBRSxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUU7O0lBd081Qyx5QkFBQztDQUFBLEFBM1BELElBMlBDO1NBdFBZLGtCQUFrQjs7O0lBQzdCLDRDQUFnQzs7Ozs7SUFFaEMsaUVBQTBEOzs7OztJQUMxRCx3REFBaUQ7Ozs7O0lBQ2pELDBEQUFtRDs7Ozs7SUFFbkQsOENBQW1DOzs7OztJQUNuQyxrRUFBMkQ7Ozs7O0lBQzNELHlDQUEwRDs7SUFFMUQsK0NBQTBGOztJQUMxRixpREFBb0c7O0lBQ3BHLDRDQUEwRTs7SUFDMUUseUNBQThFOztJQTJCOUUseUNBQTBCOztJQUMxQiw0Q0FBd0I7O0lBQ3hCLHdDQUFvQjs7Ozs7SUExQmxCLDJDQUFtQzs7Ozs7SUFDbkMsNENBQXFDOzs7OztJQUNyQyxnREFBNkM7Ozs7O0lBQzdDLDhDQUF5Qzs7Ozs7SUFDekMsMkNBQW1DOzs7OztJQUNuQyxpREFBK0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uRGVzdHJveSwgT25Jbml0LCBWaWV3Q2hpbGQsIEVsZW1lbnRSZWYsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBEb21TYW5pdGl6ZXIgfSBmcm9tICdAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyJztcbmltcG9ydCB7IE9wZXJhdGlvblN0YXRlLCBQYXJzZUJ5VGVtcGxhdGVSZXNwb25zZSwgUGFyc2VSZXN1bHQsIFRhYmxlVmFsdWUsIFRlbXBsYXRlLCBUZW1wbGF0ZUZpZWxkLCBUZW1wbGF0ZUlkIH0gZnJvbSAnLi4vYXBwLW1vZGVscyc7XG5pbXBvcnQgeyBSZW5hbWVNb2RhbENvbXBvbmVudCB9IGZyb20gJy4uL3JlbmFtZS1tb2RhbC9yZW5hbWUtbW9kYWwuY29tcG9uZW50JztcbmltcG9ydCB7IENvbmZpcm1hdGlvbk1vZGFsQ29tcG9uZW50IH0gZnJvbSAnLi4vY29uZmlybWF0aW9uLW1vZGFsL2NvbmZpcm1hdGlvbi1tb2RhbC5jb21wb25lbnQnO1xuXG5pbXBvcnQge1xuICBBZGREeW5hbWljQ29tcG9uZW50U2VydmljZSxcbiAgQ29tbW9uTW9kYWxzLFxuICBGaWxlQ3JlZGVudGlhbHMsXG4gIEZpbGVNb2RlbCwgRm9ybWF0dGluZyxcbiAgSG9zdGluZ0R5bmFtaWNDb21wb25lbnRTZXJ2aWNlLFxuICBNb2RhbFNlcnZpY2UsXG4gIE5hdmlnYXRlU2VydmljZSwgUGFnZVByZWxvYWRTZXJ2aWNlLCBQYXNzd29yZFNlcnZpY2UsXG4gIFRvcFRhYkFjdGl2YXRvclNlcnZpY2UsIFVwbG9hZEZpbGVzU2VydmljZSxcbiAgVXRpbHMsXG4gIFdpbmRvd1NlcnZpY2UsXG4gIFpvb21TZXJ2aWNlLFxuICBFeGNlcHRpb25NZXNzYWdlU2VydmljZVxufSBmcm9tIFwiQGdyb3VwZG9jcy5leGFtcGxlcy5hbmd1bGFyL2NvbW1vbi1jb21wb25lbnRzXCI7XG5cbmltcG9ydCB7IFBhcnNlclNlcnZpY2UgfSBmcm9tICcuLi9wYXJzZXIuc2VydmljZSc7XG5pbXBvcnQgeyBUZW1wbGF0ZVNlcnZpY2UgfSBmcm9tICcuLi90ZW1wbGF0ZS5zZXJ2aWNlJztcbmltcG9ydCB7IFN1YmplY3QsIFN1YnNjcmlwdGlvbiB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgU291cmNlRmlsZVNlcnZpY2UgfSBmcm9tICcuLi9zb3VyY2UtZmlsZS5zZXJ2aWNlJztcbmltcG9ydCB7IFV0aWxzU2VydmljZSB9IGZyb20gJy4uL3V0aWxzLnNlcnZpY2UnO1xuaW1wb3J0IHsgUGxhY2Vob2xkZXJTZXJ2aWNlIH0gZnJvbSAnLi4vcGxhY2Vob2xkZXIuc2VydmljZSc7XG5pbXBvcnQgeyBUYWJsZVZpZXdlckNvbXBvbmVudCB9IGZyb20gJy4uL3RhYmxlLXZpZXdlci90YWJsZS12aWV3ZXIuY29tcG9uZW50JztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnZ2QtcGFyc2VyLXNpZGUtcGFuZWwnLFxuICB0ZW1wbGF0ZVVybDogJy4vc2lkZS1wYW5lbC5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL3NpZGUtcGFuZWwuY29tcG9uZW50Lmxlc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBTaWRlUGFuZWxDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XG4gIEBJbnB1dCgpIGZpbGVOYW1lRm9yQ3N2OiBzdHJpbmc7XG4gIFxuICBwcml2YXRlIF9jdXJyZW50VGVtcGxhdGVDaGFuZ2VkU3Vic2NyaXB0aW9uOiBTdWJzY3JpcHRpb247XG4gIHByaXZhdGUgX3RlbXBsYXRlQWRkZWRTdWJzY3JpcHRpb246IFN1YnNjcmlwdGlvbjtcbiAgcHJpdmF0ZSBfdGVtcGxhdGVSZW1vdmVkU3Vic2NyaXB0aW9uOiBTdWJzY3JpcHRpb247XG5cbiAgcHJpdmF0ZSBfY3VycmVudFRlbXBsYXRlOiBUZW1wbGF0ZTtcbiAgcHJpdmF0ZSBfY3VycmVudFRlbXBsYXRlTW9kaWZpZWRTdWJzY3JpcHRpb246IFN1YnNjcmlwdGlvbjtcbiAgcHJpdmF0ZSBfcGFyc2VTdGF0ZSA9IG5ldyBPcGVyYXRpb25TdGF0ZTxQYXJzZVJlc3VsdFtdPigpO1xuXG4gIEBWaWV3Q2hpbGQoJ3RlbXBsYXRlTmFtZU1vZGFsJywgeyBzdGF0aWM6IHRydWUgfSkgdGVtcGxhdGVOYW1lTW9kYWw6IFJlbmFtZU1vZGFsQ29tcG9uZW50O1xuICBAVmlld0NoaWxkKCd0ZW1wbGF0ZVJlbW92ZU1vZGFsJywgeyBzdGF0aWM6IHRydWUgfSkgdGVtcGxhdGVSZW1vdmVNb2RhbDogQ29uZmlybWF0aW9uTW9kYWxDb21wb25lbnQ7XG4gIEBWaWV3Q2hpbGQoJ3VwbG9hZFRlbXBsYXRlJywgeyBzdGF0aWM6IHRydWUgfSkgdXBsb2FkVGVtcGxhdGU6IEVsZW1lbnRSZWY7XG4gIEBWaWV3Q2hpbGQoJ3RhYmxlVmlld2VyJywgeyBzdGF0aWM6IHRydWUgfSkgdGFibGVWaWV3ZXI6IFRhYmxlVmlld2VyQ29tcG9uZW50O1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgX21vZGFsU2VydmljZTogTW9kYWxTZXJ2aWNlLFxuICAgIHByaXZhdGUgX3BhcnNlclNlcnZpY2U6IFBhcnNlclNlcnZpY2UsXG4gICAgcHJpdmF0ZSBfc291cmNlRmlsZVNlcnZpY2U6IFNvdXJjZUZpbGVTZXJ2aWNlLFxuICAgIHByaXZhdGUgX3RlbXBsYXRlU2VydmljZTogVGVtcGxhdGVTZXJ2aWNlLFxuICAgIHByaXZhdGUgX3V0aWxzU2VydmljZTogVXRpbHNTZXJ2aWNlLFxuICAgIHByaXZhdGUgX3BsYWNlaG9sZGVyU2VydmljZTogUGxhY2Vob2xkZXJTZXJ2aWNlKSB7XG5cbiAgICB0aGlzLmlzRGF0YU1vZGUgPSB0cnVlO1xuICAgIHRoaXMuaXNUZW1wbGF0ZU1vZGUgPSBmYWxzZTtcblxuICAgIHRoaXMuX2N1cnJlbnRUZW1wbGF0ZUNoYW5nZWRTdWJzY3JpcHRpb24gPSB0aGlzLl90ZW1wbGF0ZVNlcnZpY2UuY3VycmVudFRlbXBsYXRlQ2hhbmdlZFxuICAgICAgLnN1YnNjcmliZSh0ZW1wbGF0ZSA9PiB0aGlzLmN1cnJlbnRUZW1wbGF0ZSA9IHRlbXBsYXRlKTtcbiAgICB0aGlzLl90ZW1wbGF0ZUFkZGVkU3Vic2NyaXB0aW9uID0gdGhpcy5fdGVtcGxhdGVTZXJ2aWNlLnRlbXBsYXRlQWRkZWRTdWJqZWN0XG4gICAgICAuc3Vic2NyaWJlKHRlbXBsYXRlID0+IHRoaXMudGVtcGxhdGVJZHMucHVzaCh0ZW1wbGF0ZSkpO1xuICAgIHRoaXMuX3RlbXBsYXRlUmVtb3ZlZFN1YnNjcmlwdGlvbiA9IHRoaXMuX3RlbXBsYXRlU2VydmljZS50ZW1wbGF0ZVJlbW92ZWRTdWJqZWN0XG4gICAgICAuc3Vic2NyaWJlKHRlbXBsYXRlSWQgPT4gdGhpcy5yZW1vdmVUZW1wbGF0ZUlkKHRlbXBsYXRlSWQpKTtcblxuICAgIHRoaXMuY3VycmVudFRlbXBsYXRlID0gdGhpcy5fdGVtcGxhdGVTZXJ2aWNlLmN1cnJlbnRUZW1wbGF0ZTtcbiAgICB0aGlzLnRlbXBsYXRlSWRzID0gW107XG4gICAgdGhpcy5fdGVtcGxhdGVTZXJ2aWNlLnRlbXBsYXRlSWRzLmZvckVhY2goZWxlbWVudCA9PiB7XG4gICAgICB0aGlzLnRlbXBsYXRlSWRzLnB1c2goZWxlbWVudCk7XG4gICAgfSk7XG4gIH1cblxuICB0ZW1wbGF0ZUlkczogVGVtcGxhdGVJZFtdO1xuICBpc1RlbXBsYXRlTW9kZTogYm9vbGVhbjtcbiAgaXNEYXRhTW9kZTogYm9vbGVhbjtcblxuICBnZXQgcGFyc2VTdGF0ZSgpIHtcbiAgICByZXR1cm4gdGhpcy5fcGFyc2VTdGF0ZTtcbiAgfVxuXG4gIGdldCBjdXJyZW50VGVtcGxhdGUoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2N1cnJlbnRUZW1wbGF0ZTtcbiAgfVxuXG4gIHNldCBjdXJyZW50VGVtcGxhdGUodGVtcGxhdGU6IFRlbXBsYXRlKSB7XG4gICAgaWYgKHRoaXMuX2N1cnJlbnRUZW1wbGF0ZU1vZGlmaWVkU3Vic2NyaXB0aW9uKSB7XG4gICAgICB0aGlzLl9jdXJyZW50VGVtcGxhdGVNb2RpZmllZFN1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpO1xuICAgIH1cblxuICAgIHRoaXMuX2N1cnJlbnRUZW1wbGF0ZSA9IHRlbXBsYXRlO1xuICAgIHRoaXMuX2N1cnJlbnRUZW1wbGF0ZU1vZGlmaWVkU3Vic2NyaXB0aW9uID0gdGhpcy5fY3VycmVudFRlbXBsYXRlLm1vZGlmaWVkXG4gICAgICAuc3Vic2NyaWJlKHQgPT4gdGhpcy5wYXJzZVN0YXRlLnByb21wdCA9IFwiVGVtcGxhdGUgd2FzIGNoYW5nZWQuIFBsZWFzZSBwYXJzZSBkYXRhIGFnYWluLlwiKTtcblxuICAgIHRoaXMucGFyc2VTdGF0ZS5wcm9tcHQgPSBcIlByZXNzIFBhcnNlciB0byBleHRyYWN0IGRhdGEgYnkgdGhpcyB0ZW1wbGF0ZVwiO1xuICB9XG5cbiAgbmdPbkRlc3Ryb3koKSB7XG4gICAgaWYgKHRoaXMuX2N1cnJlbnRUZW1wbGF0ZUNoYW5nZWRTdWJzY3JpcHRpb24pIHtcbiAgICAgIHRoaXMuX2N1cnJlbnRUZW1wbGF0ZUNoYW5nZWRTdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5fdGVtcGxhdGVBZGRlZFN1YnNjcmlwdGlvbikge1xuICAgICAgdGhpcy5fdGVtcGxhdGVBZGRlZFN1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpO1xuICAgIH1cblxuICAgIGlmICh0aGlzLl90ZW1wbGF0ZVJlbW92ZWRTdWJzY3JpcHRpb24pIHtcbiAgICAgIHRoaXMuX3RlbXBsYXRlUmVtb3ZlZFN1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpO1xuICAgIH1cbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuICB9XG5cbiAgbWFuYWdlVGVtcGxhdGVzKCkge1xuICAgIHRoaXMuaXNEYXRhTW9kZSA9IGZhbHNlO1xuICAgIHRoaXMuaXNUZW1wbGF0ZU1vZGUgPSB0cnVlO1xuICB9XG5cbiAgaXNDdXJyZW50VGVtcGxhdGUodGVtcGxhdGVJZDogVGVtcGxhdGVJZCkge1xuICAgIHJldHVybiB0aGlzLmN1cnJlbnRUZW1wbGF0ZSAmJiB0aGlzLmN1cnJlbnRUZW1wbGF0ZS5pZCA9PT0gdGVtcGxhdGVJZC5pZDtcbiAgfVxuXG4gIHNlbGVjdFRlbXBsYXRlQ2xpY2sodGVtcGxhdGVJZDogVGVtcGxhdGVJZCkge1xuICAgIGlmICghdGVtcGxhdGVJZCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRoaXMuX3RlbXBsYXRlU2VydmljZS5zZWxlY3RUZW1wbGF0ZSh0ZW1wbGF0ZUlkKTtcbiAgICB0aGlzLnNob3dEYXRhKCk7XG4gIH1cblxuICBjcmVhdGVUZW1wbGF0ZUNsaWNrKCkge1xuICAgIHRoaXMuX3RlbXBsYXRlU2VydmljZS5jcmVhdGVUZW1wbGF0ZSgpO1xuICB9XG5cbiAgcmVuYW1lVGVtcGxhdGVDbGljayh0ZW1wbGF0ZUlkOiBUZW1wbGF0ZUlkLCAkZXZlbnQpIHtcbiAgICAkZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgJGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgaWYgKHRlbXBsYXRlSWQgJiYgdGhpcy50ZW1wbGF0ZU5hbWVNb2RhbCkge1xuICAgICAgdGhpcy50ZW1wbGF0ZU5hbWVNb2RhbC5vcGVyYXRpb25JZCA9IHRlbXBsYXRlSWQuaWQ7XG4gICAgICB0aGlzLnRlbXBsYXRlTmFtZU1vZGFsLmluaXRpYWxWYWx1ZSA9IHRlbXBsYXRlSWQubmFtZTtcblxuICAgICAgdGhpcy5fbW9kYWxTZXJ2aWNlLm9wZW4oXCJUZW1wbGF0ZU5hbWVNb2RhbFwiKTtcbiAgICB9XG4gIH1cblxuICB0ZW1wbGF0ZU5hbWVNb2RhbEFjY2VwdChldmVudCkge1xuICAgIGNvbnN0IHRlbXBsYXRlSWQgPSBldmVudC5pZDtcbiAgICBjb25zdCB0ZW1wbGF0ZU5hbWUgPSBldmVudC5uZXdWYWx1ZTtcblxuICAgIHRyeSB7XG4gICAgICB0aGlzLl90ZW1wbGF0ZVNlcnZpY2UucmVuYW1lVGVtcGxhdGUoeyBpZDogdGVtcGxhdGVJZCwgbmFtZTogdGVtcGxhdGVOYW1lIH0pO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICB0aGlzLnRlbXBsYXRlTmFtZU1vZGFsLmVycm9yID0gZXJyb3I7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdGhpcy5fbW9kYWxTZXJ2aWNlLmNsb3NlKFwiVGVtcGxhdGVOYW1lTW9kYWxcIik7XG4gIH1cblxuICByZW1vdmVUZW1wbGF0ZUNsaWNrKHRlbXBsYXRlSWQ6IFRlbXBsYXRlSWQsICRldmVudCkge1xuICAgICRldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAkZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICBpZiAodGhpcy50ZW1wbGF0ZVJlbW92ZU1vZGFsKSB7XG4gICAgICB0aGlzLnRlbXBsYXRlUmVtb3ZlTW9kYWwub3BlcmF0aW9uSWQgPSB0ZW1wbGF0ZUlkLmlkO1xuICAgICAgdGhpcy50ZW1wbGF0ZVJlbW92ZU1vZGFsLnByb21wdFRleHQgPSBcIlJlbW92ZSB0ZW1wbGF0ZSA8Yj5cIiArIHRlbXBsYXRlSWQubmFtZSArIFwiPC9iPj9cIjtcblxuICAgICAgdGhpcy5fbW9kYWxTZXJ2aWNlLm9wZW4oXCJUZW1wbGF0ZVJlbW92ZU1vZGFsXCIpO1xuICAgIH1cbiAgfVxuXG4gIHRlbXBsYXRlUmVtb3ZlTW9kYWxBY2NlcHQob3BlcmF0aW9uSWQ6IHN0cmluZykge1xuICAgIHRoaXMuX21vZGFsU2VydmljZS5jbG9zZShcIlRlbXBsYXRlUmVtb3ZlTW9kYWxcIik7XG4gICAgdGhpcy5fdGVtcGxhdGVTZXJ2aWNlLnJlbW92ZVRlbXBsYXRlKHsgaWQ6IG9wZXJhdGlvbklkLCBuYW1lOiBcIlwiIH0pO1xuICB9XG5cbiAgZG93bmxvYWRUZW1wbGF0ZUNsaWNrKHRlbXBsYXRlSWQ6IFRlbXBsYXRlSWQsICRldmVudCkge1xuICAgICRldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAkZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICBjb25zdCB0ZW1wbGF0ZUpzb24gPSB0aGlzLl90ZW1wbGF0ZVNlcnZpY2Uuc2VyaWFsaXplKHRlbXBsYXRlSWQpO1xuXG4gICAgY29uc3QgZiA9IG5ldyBGaWxlKFt0ZW1wbGF0ZUpzb25dLCB0ZW1wbGF0ZUlkLm5hbWUgKyBcIi5qc29uXCIsIHtcbiAgICAgIHR5cGU6IFwidGV4dC9wbGFpblwiXG4gICAgfSk7XG5cbiAgICBjb25zdCBmaWxlVXJsID0gd2luZG93LlVSTC5jcmVhdGVPYmplY3RVUkwoZik7XG5cbiAgICBjb25zdCBmaWxlTGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcbiAgICBmaWxlTGluay5ocmVmID0gZmlsZVVybDtcbiAgICBmaWxlTGluay5kb3dubG9hZCA9IGYubmFtZTtcbiAgICBmaWxlTGluay5jbGljaygpO1xuXG4gICAgVVJMLnJldm9rZU9iamVjdFVSTChmaWxlVXJsKTtcbiAgfVxuXG4gIG9uRmlsZVNlbGVjdGVkKGV2ZW50KSB7XG4gICAgY29uc3QgZmlsZTogRmlsZSA9IGV2ZW50LnRhcmdldC5maWxlc1swXTtcblxuICAgIGlmIChmaWxlKSB7XG4gICAgICBjb25zdCByZWFkZXIgPSBuZXcgRmlsZVJlYWRlcigpO1xuXG4gICAgICByZWFkZXIucmVhZEFzVGV4dChmaWxlKTtcbiAgICAgIHJlYWRlci5vbmxvYWQgPSB4ID0+IHtcbiAgICAgICAgdGhpcy5fdGVtcGxhdGVTZXJ2aWNlLmRlc2VyaWFsaXplKHJlYWRlci5yZXN1bHQudG9TdHJpbmcoKSk7XG4gICAgICAgIHRoaXMudXBsb2FkVGVtcGxhdGUubmF0aXZlRWxlbWVudC52YWx1ZSA9IG51bGw7XG4gICAgICB9O1xuICAgIH1cbiAgfVxuXG4gIHNob3dEYXRhKCkge1xuICAgIHRoaXMuaXNUZW1wbGF0ZU1vZGUgPSBmYWxzZTtcbiAgICB0aGlzLmlzRGF0YU1vZGUgPSB0cnVlO1xuICB9XG5cbiAgcGFyc2UoKSB7XG4gICAgdGhpcy5wYXJzZVN0YXRlLmV4ZWN1dGUoKTtcblxuICAgIGNvbnN0IHN0YXRlID0gdGhpcy5fcGxhY2Vob2xkZXJTZXJ2aWNlLnN0YXJ0T3BlcmF0aW9uKFwiUGFyc2luZyBkYXRhLi4uXCIpO1xuXG4gICAgY29uc3Qgb2JzZXJ2ZXIgPSB7XG4gICAgICBuZXh0OiAocmVzcG9uc2U6IFBhcnNlQnlUZW1wbGF0ZVJlc3BvbnNlKSA9PiB7XG4gICAgICAgIHRoaXMucGFyc2VTdGF0ZS5yZXN1bHQgPSByZXNwb25zZS5kYXRhO1xuICAgICAgfSxcbiAgICAgIGVycm9yOiAoZXJyOiBhbnkpID0+IHsgICAgICAgIFxuICAgICAgICB0aGlzLnBhcnNlU3RhdGUuZXJyb3IgPSB0aGlzLl9wYXJzZXJTZXJ2aWNlLmdldEVycm9yTWVzc2FnZShlcnIpO1xuICAgICAgICBzdGF0ZS5lcnJvcihlcnIpO1xuICAgICAgfSxcbiAgICAgIGNvbXBsZXRlOiAoKSA9PiBzdGF0ZS5jb21wbGV0ZSgpXG4gICAgfTtcblxuICAgIHRoaXMuX3BhcnNlclNlcnZpY2UucGFyc2VCeVRlbXBsYXRlKFxuICAgICAgdGhpcy5fc291cmNlRmlsZVNlcnZpY2Uuc291cmNlRmlsZSxcbiAgICAgIG51bGwsXG4gICAgICB0aGlzLl90ZW1wbGF0ZVNlcnZpY2UuY3VycmVudFRlbXBsYXRlXG4gICAgKS5zdWJzY3JpYmUob2JzZXJ2ZXIpO1xuICB9XG5cbiAgZG93bmxvYWRSZXN1bHRzQXNDc3YoKSB7XG4gICAgaWYgKCF0aGlzLnBhcnNlU3RhdGUuaXNDb21wbGV0ZWQgfHwgdGhpcy5wYXJzZVN0YXRlLnJlc3VsdC5sZW5ndGggPT09IDApIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCBjc3YgPSB0aGlzLl91dGlsc1NlcnZpY2UuZ2VuZXJhdGVDc3ZGb3JQYXJzZVJlc3VsdHModGhpcy5wYXJzZVN0YXRlLnJlc3VsdCk7XG5cbiAgICBjb25zdCBmID0gbmV3IEZpbGUoW2Nzdl0sIHRoaXMuZmlsZU5hbWVGb3JDc3YgPyB0aGlzLmZpbGVOYW1lRm9yQ3N2ICsgXCIgLSBkYXRhLmNzdlwiIDogdGhpcy5fc291cmNlRmlsZVNlcnZpY2Uuc291cmNlRmlsZS5ndWlkICsgXCIgLSBkYXRhLmNzdlwiLCB7XG4gICAgICB0eXBlOiBcInRleHQvcGxhaW5cIlxuICAgIH0pO1xuXG4gICAgY29uc3QgZmlsZVVybCA9IHdpbmRvdy5VUkwuY3JlYXRlT2JqZWN0VVJMKGYpO1xuXG4gICAgY29uc3QgZmlsZUxpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XG4gICAgZmlsZUxpbmsuaHJlZiA9IGZpbGVVcmw7XG4gICAgZmlsZUxpbmsuZG93bmxvYWQgPSBmLm5hbWU7XG4gICAgZmlsZUxpbmsuY2xpY2soKTtcblxuICAgIFVSTC5yZXZva2VPYmplY3RVUkwoZmlsZVVybCk7XG4gIH1cblxuICBpc0FycmF5KG9iajogYW55KSB7XG4gICAgcmV0dXJuIEFycmF5LmlzQXJyYXkob2JqKVxuICB9XG5cbiAgc2hvd1RhYmxlVmFsdWUodmFsdWU6IGFueSkge1xuICAgIGNvbnN0IHRhYmxlID0gbmV3IFRhYmxlVmFsdWUodmFsdWUpO1xuXG4gICAgdGhpcy50YWJsZVZpZXdlci50YWJsZSA9IHRhYmxlO1xuICAgIHRoaXMuX21vZGFsU2VydmljZS5vcGVuKFwiVGFibGVWaWV3ZXJcIik7XG4gIH1cblxuICBwcml2YXRlIHJlbW92ZVRlbXBsYXRlSWQodGVtcGxhdGVJZDogVGVtcGxhdGVJZCkge1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy50ZW1wbGF0ZUlkcy5sZW5ndGg7IGkrKykge1xuICAgICAgaWYgKHRoaXMudGVtcGxhdGVJZHNbaV0uaWQgPT09IHRlbXBsYXRlSWQuaWQpIHtcbiAgICAgICAgdGhpcy50ZW1wbGF0ZUlkcy5zcGxpY2UoaSwgMSk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn0iXX0=