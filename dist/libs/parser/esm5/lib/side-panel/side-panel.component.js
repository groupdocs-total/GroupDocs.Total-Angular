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
        var f = new File([csv], this._sourceFileService.sourceFile.guid + "- data.csv", {
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
                    template: "<div class=\"side-panel\">\r\n    <input type=\"file\" #uploadTemplate (change)=\"onFileSelected($event)\" />\r\n\r\n    <div *ngIf=\"isDataMode\">\r\n        <div class=\"side-panel-title\">\r\n            <div>{{ currentTemplate?.name }}</div>\r\n            <div class=\"image-btn\" (click)=\"manageTemplates()\">\r\n                <fa-icon [icon]=\"'bars'\"></fa-icon>\r\n            </div>\r\n        </div>\r\n\r\n        <div class=\"side-panel-toolbar\">\r\n            <div class=\"image-btn\" (click)=\"createTemplateClick()\" title=\"Create a new template\">\r\n                <fa-icon [icon]=\"'file'\"></fa-icon>\r\n            </div>\r\n            <div class=\"image-btn\" (click)=\"uploadTemplate.click()\" title=\"Upload the existing template\">\r\n                <fa-icon [icon]=\"'upload'\"></fa-icon>\r\n            </div>\r\n\r\n            <div class=\"side-panel-toolbar-space\"></div>\r\n\r\n            <div class=\"image-btn\" (click)=\"renameTemplateClick(currentTemplate)\" title=\"Rename the current template\">\r\n                <fa-icon [icon]=\"'edit'\"></fa-icon>\r\n            </div>\r\n            <div class=\"image-btn\" *ngIf=\"currentTemplate?.isStored\" (click)=\"removeTemplateClick(currentTemplate)\"\r\n                title=\"Remove the current template\">\r\n                <fa-icon [icon]=\"'trash'\"></fa-icon>\r\n            </div>\r\n            <div class=\"image-btn\" *ngIf=\"currentTemplate?.isStored\" (click)=\"downloadTemplateClick(currentTemplate)\"\r\n                title=\"Download the current template\">\r\n                <fa-icon [icon]=\"'file-download'\"></fa-icon>\r\n            </div>\r\n        </div>\r\n\r\n        <div class=\"side-panel-content\" *ngIf=\"parseState.isProcessing\">\r\n            <div>Parsing data...</div>\r\n        </div>\r\n\r\n        <div class=\"side-panel-content\" *ngIf=\"parseState.isFailed\">\r\n            <div class=\"side-panel-content-text error-text\">Error occurs while parsing data.</div>\r\n            <div class=\"btn\" (click)=\"parse()\">Parse again</div>\r\n        </div>\r\n\r\n        <div class=\"side-panel-content\" *ngIf=\"parseState.isReadyToRun\">\r\n            <div class=\"side-panel-content-text\" [innerHTML]=\"parseState.prompt\"></div>\r\n            <div class=\"btn\" (click)=\"parse()\">Parse</div>\r\n        </div>\r\n\r\n        <div class=\"side-panel-content\" *ngIf=\"parseState.isCompleted && !(parseState.result?.length > 0)\">\r\n            <div class=\"side-panel-content-text\">\r\n                No data is extracted. Try to change the template.\r\n            </div>\r\n        </div>\r\n\r\n        <div class=\"data-panel\" *ngIf=\"parseState.result?.length > 0\">\r\n            <div class=\"side-panel-toolbar\">\r\n                <div class=\"btn\" (click)=\"downloadResultsAsCsv()\">Download as CSV</div>\r\n            </div>\r\n            <div class=\"data-item list-item\" *ngFor=\"let r of parseState.result\">\r\n                <div class=\"data-item-field\">{{ r.name }}</div>\r\n                <div class=\"data-item-value\" *ngIf=\"r.value && !isArray(r.value)\">{{ r.value }}</div>\r\n                <div class=\"data-item-value\" *ngIf=\"r.value && isArray(r.value)\">\r\n                    <div class=\"btn\" (click)=\"showTableValue(r.value)\">Show Table</div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n\r\n    <div *ngIf=\"isTemplateMode\">\r\n        <div class=\"side-panel-title\">\r\n            <div>Manage Templates</div>\r\n            <div class=\"image-btn\" (click)=\"showData()\">\r\n                <fa-icon [icon]=\"'times'\"></fa-icon>\r\n            </div>\r\n        </div>\r\n        <div class=\"no-data-panel\" *ngIf=\"templateIds.length == 0\">\r\n            <div class=\"side-panel-content-text\">There are no templates. Try to create a new one or upload the existing\r\n                one.</div>\r\n        </div>\r\n\r\n        <div class=\"template-list\">\r\n            <div class=\"template-item list-item\" *ngFor=\"let t of templateIds\" (dblclick)=\"selectTemplateClick(t)\">\r\n                <div class=\"template-item-text\" [ngClass]=\"{'template-item-current': isCurrentTemplate(t)}\">{{ t?.name\r\n                    }} </div>\r\n                <div class=\"image-btn\" (click)=\"renameTemplateClick(t)\" title=\"Rename a template\">\r\n                    <fa-icon [icon]=\"'edit'\"></fa-icon>\r\n                </div>\r\n                <div class=\"image-btn\" (click)=\"downloadTemplateClick(t)\" title=\"Download a template\">\r\n                    <fa-icon [icon]=\"'file-download'\"></fa-icon>\r\n                </div>\r\n                <div class=\"image-btn\" (click)=\"removeTemplateClick(t)\" title=\"Remove a template\">\r\n                    <fa-icon [icon]=\"'trash'\"></fa-icon>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n<gd-rename-modal #templateNameModal [id]=\"'TemplateNameModal'\" [title]=\"'Rename Template'\"\r\n    [promptText]=\"'Enter a new template name:'\" [acceptText]=\"'Save'\" (acceptEvent)=\"templateNameModalAccept($event)\">\r\n</gd-rename-modal>\r\n<gd-confirmation-modal #templateRemoveModal [id]=\"'TemplateRemoveModal'\" [title]=\"'Remove Template'\"\r\n    [acceptText]=\"'Remove'\" (acceptEvent)=\"templateRemoveModalAccept($event)\">\r\n</gd-confirmation-modal>\r\n<gd-table-viewer #tableViewer></gd-table-viewer>",
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
        templateNameModal: [{ type: ViewChild, args: ['templateNameModal', { static: true },] }],
        templateRemoveModal: [{ type: ViewChild, args: ['templateRemoveModal', { static: true },] }],
        uploadTemplate: [{ type: ViewChild, args: ['uploadTemplate', { static: true },] }],
        tableViewer: [{ type: ViewChild, args: ['tableViewer', { static: true },] }]
    };
    return SidePanelComponent;
}());
export { SidePanelComponent };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2lkZS1wYW5lbC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ3JvdXBkb2NzLmV4YW1wbGVzLmFuZ3VsYXIvcGFyc2VyLyIsInNvdXJjZXMiOlsibGliL3NpZGUtcGFuZWwvc2lkZS1wYW5lbC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQXFCLFNBQVMsRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFcEYsT0FBTyxFQUFFLGNBQWMsRUFBd0MsVUFBVSxFQUF1QyxNQUFNLGVBQWUsQ0FBQztBQUN0SSxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSx3Q0FBd0MsQ0FBQztBQUM5RSxPQUFPLEVBQUUsMEJBQTBCLEVBQUUsTUFBTSxvREFBb0QsQ0FBQztBQUVoRyxPQUFPLEVBTUwsWUFBWSxFQU9iLE1BQU0sK0NBQStDLENBQUM7QUFFdkQsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBQ2xELE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUV0RCxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUMzRCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sa0JBQWtCLENBQUM7QUFDaEQsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDNUQsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sd0NBQXdDLENBQUM7QUFFOUU7SUFvQkUsNEJBQ1UsYUFBMkIsRUFDM0IsY0FBNkIsRUFDN0Isa0JBQXFDLEVBQ3JDLGdCQUFpQyxFQUNqQyxhQUEyQixFQUMzQixtQkFBdUM7UUFOakQsaUJBdUJDO1FBdEJTLGtCQUFhLEdBQWIsYUFBYSxDQUFjO1FBQzNCLG1CQUFjLEdBQWQsY0FBYyxDQUFlO1FBQzdCLHVCQUFrQixHQUFsQixrQkFBa0IsQ0FBbUI7UUFDckMscUJBQWdCLEdBQWhCLGdC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LEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRTtpQ0FDakQsU0FBUyxTQUFDLGdCQUFnQixFQUFFLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRTs4QkFDNUMsU0FBUyxTQUFDLGFBQWEsRUFBRSxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUU7O0lBa081Qyx5QkFBQztDQUFBLEFBcFBELElBb1BDO1NBL09ZLGtCQUFrQjs7Ozs7O0lBRTdCLGlFQUEwRDs7Ozs7SUFDMUQsd0RBQWlEOzs7OztJQUNqRCwwREFBbUQ7Ozs7O0lBRW5ELDhDQUFtQzs7Ozs7SUFDbkMsa0VBQTJEOzs7OztJQUMzRCx5Q0FBMEQ7O0lBRTFELCtDQUEwRjs7SUFDMUYsaURBQW9HOztJQUNwRyw0Q0FBMEU7O0lBQzFFLHlDQUE4RTs7SUEyQjlFLHlDQUEwQjs7SUFDMUIsNENBQXdCOztJQUN4Qix3Q0FBb0I7Ozs7O0lBMUJsQiwyQ0FBbUM7Ozs7O0lBQ25DLDRDQUFxQzs7Ozs7SUFDckMsZ0RBQTZDOzs7OztJQUM3Qyw4Q0FBeUM7Ozs7O0lBQ3pDLDJDQUFtQzs7Ozs7SUFDbkMsaURBQStDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkRlc3Ryb3ksIE9uSW5pdCwgVmlld0NoaWxkLCBFbGVtZW50UmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IERvbVNhbml0aXplciB9IGZyb20gJ0Bhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXInO1xyXG5pbXBvcnQgeyBPcGVyYXRpb25TdGF0ZSwgUGFyc2VCeVRlbXBsYXRlUmVzcG9uc2UsIFBhcnNlUmVzdWx0LCBUYWJsZVZhbHVlLCBUZW1wbGF0ZSwgVGVtcGxhdGVGaWVsZCwgVGVtcGxhdGVJZCB9IGZyb20gJy4uL2FwcC1tb2RlbHMnO1xyXG5pbXBvcnQgeyBSZW5hbWVNb2RhbENvbXBvbmVudCB9IGZyb20gJy4uL3JlbmFtZS1tb2RhbC9yZW5hbWUtbW9kYWwuY29tcG9uZW50JztcclxuaW1wb3J0IHsgQ29uZmlybWF0aW9uTW9kYWxDb21wb25lbnQgfSBmcm9tICcuLi9jb25maXJtYXRpb24tbW9kYWwvY29uZmlybWF0aW9uLW1vZGFsLmNvbXBvbmVudCc7XHJcblxyXG5pbXBvcnQge1xyXG4gIEFkZER5bmFtaWNDb21wb25lbnRTZXJ2aWNlLFxyXG4gIENvbW1vbk1vZGFscyxcclxuICBGaWxlQ3JlZGVudGlhbHMsXHJcbiAgRmlsZU1vZGVsLCBGb3JtYXR0aW5nLFxyXG4gIEhvc3RpbmdEeW5hbWljQ29tcG9uZW50U2VydmljZSxcclxuICBNb2RhbFNlcnZpY2UsXHJcbiAgTmF2aWdhdGVTZXJ2aWNlLCBQYWdlUHJlbG9hZFNlcnZpY2UsIFBhc3N3b3JkU2VydmljZSxcclxuICBUb3BUYWJBY3RpdmF0b3JTZXJ2aWNlLCBVcGxvYWRGaWxlc1NlcnZpY2UsXHJcbiAgVXRpbHMsXHJcbiAgV2luZG93U2VydmljZSxcclxuICBab29tU2VydmljZSxcclxuICBFeGNlcHRpb25NZXNzYWdlU2VydmljZVxyXG59IGZyb20gXCJAZ3JvdXBkb2NzLmV4YW1wbGVzLmFuZ3VsYXIvY29tbW9uLWNvbXBvbmVudHNcIjtcclxuXHJcbmltcG9ydCB7IFBhcnNlclNlcnZpY2UgfSBmcm9tICcuLi9wYXJzZXIuc2VydmljZSc7XHJcbmltcG9ydCB7IFRlbXBsYXRlU2VydmljZSB9IGZyb20gJy4uL3RlbXBsYXRlLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBTdWJqZWN0LCBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzJztcclxuaW1wb3J0IHsgU291cmNlRmlsZVNlcnZpY2UgfSBmcm9tICcuLi9zb3VyY2UtZmlsZS5zZXJ2aWNlJztcclxuaW1wb3J0IHsgVXRpbHNTZXJ2aWNlIH0gZnJvbSAnLi4vdXRpbHMuc2VydmljZSc7XHJcbmltcG9ydCB7IFBsYWNlaG9sZGVyU2VydmljZSB9IGZyb20gJy4uL3BsYWNlaG9sZGVyLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBUYWJsZVZpZXdlckNvbXBvbmVudCB9IGZyb20gJy4uL3RhYmxlLXZpZXdlci90YWJsZS12aWV3ZXIuY29tcG9uZW50JztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnZ2QtcGFyc2VyLXNpZGUtcGFuZWwnLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9zaWRlLXBhbmVsLmNvbXBvbmVudC5odG1sJyxcclxuICBzdHlsZVVybHM6IFsnLi9zaWRlLXBhbmVsLmNvbXBvbmVudC5sZXNzJ11cclxufSlcclxuZXhwb3J0IGNsYXNzIFNpZGVQYW5lbENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcclxuXHJcbiAgcHJpdmF0ZSBfY3VycmVudFRlbXBsYXRlQ2hhbmdlZFN1YnNjcmlwdGlvbjogU3Vic2NyaXB0aW9uO1xyXG4gIHByaXZhdGUgX3RlbXBsYXRlQWRkZWRTdWJzY3JpcHRpb246IFN1YnNjcmlwdGlvbjtcclxuICBwcml2YXRlIF90ZW1wbGF0ZVJlbW92ZWRTdWJzY3JpcHRpb246IFN1YnNjcmlwdGlvbjtcclxuXHJcbiAgcHJpdmF0ZSBfY3VycmVudFRlbXBsYXRlOiBUZW1wbGF0ZTtcclxuICBwcml2YXRlIF9jdXJyZW50VGVtcGxhdGVNb2RpZmllZFN1YnNjcmlwdGlvbjogU3Vic2NyaXB0aW9uO1xyXG4gIHByaXZhdGUgX3BhcnNlU3RhdGUgPSBuZXcgT3BlcmF0aW9uU3RhdGU8UGFyc2VSZXN1bHRbXT4oKTtcclxuXHJcbiAgQFZpZXdDaGlsZCgndGVtcGxhdGVOYW1lTW9kYWwnLCB7IHN0YXRpYzogdHJ1ZSB9KSB0ZW1wbGF0ZU5hbWVNb2RhbDogUmVuYW1lTW9kYWxDb21wb25lbnQ7XHJcbiAgQFZpZXdDaGlsZCgndGVtcGxhdGVSZW1vdmVNb2RhbCcsIHsgc3RhdGljOiB0cnVlIH0pIHRlbXBsYXRlUmVtb3ZlTW9kYWw6IENvbmZpcm1hdGlvbk1vZGFsQ29tcG9uZW50O1xyXG4gIEBWaWV3Q2hpbGQoJ3VwbG9hZFRlbXBsYXRlJywgeyBzdGF0aWM6IHRydWUgfSkgdXBsb2FkVGVtcGxhdGU6IEVsZW1lbnRSZWY7XHJcbiAgQFZpZXdDaGlsZCgndGFibGVWaWV3ZXInLCB7IHN0YXRpYzogdHJ1ZSB9KSB0YWJsZVZpZXdlcjogVGFibGVWaWV3ZXJDb21wb25lbnQ7XHJcblxyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgcHJpdmF0ZSBfbW9kYWxTZXJ2aWNlOiBNb2RhbFNlcnZpY2UsXHJcbiAgICBwcml2YXRlIF9wYXJzZXJTZXJ2aWNlOiBQYXJzZXJTZXJ2aWNlLFxyXG4gICAgcHJpdmF0ZSBfc291cmNlRmlsZVNlcnZpY2U6IFNvdXJjZUZpbGVTZXJ2aWNlLFxyXG4gICAgcHJpdmF0ZSBfdGVtcGxhdGVTZXJ2aWNlOiBUZW1wbGF0ZVNlcnZpY2UsXHJcbiAgICBwcml2YXRlIF91dGlsc1NlcnZpY2U6IFV0aWxzU2VydmljZSxcclxuICAgIHByaXZhdGUgX3BsYWNlaG9sZGVyU2VydmljZTogUGxhY2Vob2xkZXJTZXJ2aWNlKSB7XHJcblxyXG4gICAgdGhpcy5pc0RhdGFNb2RlID0gdHJ1ZTtcclxuICAgIHRoaXMuaXNUZW1wbGF0ZU1vZGUgPSBmYWxzZTtcclxuXHJcbiAgICB0aGlzLl9jdXJyZW50VGVtcGxhdGVDaGFuZ2VkU3Vic2NyaXB0aW9uID0gdGhpcy5fdGVtcGxhdGVTZXJ2aWNlLmN1cnJlbnRUZW1wbGF0ZUNoYW5nZWRcclxuICAgICAgLnN1YnNjcmliZSh0ZW1wbGF0ZSA9PiB0aGlzLmN1cnJlbnRUZW1wbGF0ZSA9IHRlbXBsYXRlKTtcclxuICAgIHRoaXMuX3RlbXBsYXRlQWRkZWRTdWJzY3JpcHRpb24gPSB0aGlzLl90ZW1wbGF0ZVNlcnZpY2UudGVtcGxhdGVBZGRlZFN1YmplY3RcclxuICAgICAgLnN1YnNjcmliZSh0ZW1wbGF0ZSA9PiB0aGlzLnRlbXBsYXRlSWRzLnB1c2godGVtcGxhdGUpKTtcclxuICAgIHRoaXMuX3RlbXBsYXRlUmVtb3ZlZFN1YnNjcmlwdGlvbiA9IHRoaXMuX3RlbXBsYXRlU2VydmljZS50ZW1wbGF0ZVJlbW92ZWRTdWJqZWN0XHJcbiAgICAgIC5zdWJzY3JpYmUodGVtcGxhdGVJZCA9PiB0aGlzLnJlbW92ZVRlbXBsYXRlSWQodGVtcGxhdGVJZCkpO1xyXG5cclxuICAgIHRoaXMuY3VycmVudFRlbXBsYXRlID0gdGhpcy5fdGVtcGxhdGVTZXJ2aWNlLmN1cnJlbnRUZW1wbGF0ZTtcclxuICAgIHRoaXMudGVtcGxhdGVJZHMgPSBbXTtcclxuICAgIHRoaXMuX3RlbXBsYXRlU2VydmljZS50ZW1wbGF0ZUlkcy5mb3JFYWNoKGVsZW1lbnQgPT4ge1xyXG4gICAgICB0aGlzLnRlbXBsYXRlSWRzLnB1c2goZWxlbWVudCk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIHRlbXBsYXRlSWRzOiBUZW1wbGF0ZUlkW107XHJcbiAgaXNUZW1wbGF0ZU1vZGU6IGJvb2xlYW47XHJcbiAgaXNEYXRhTW9kZTogYm9vbGVhbjtcclxuXHJcbiAgZ2V0IHBhcnNlU3RhdGUoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5fcGFyc2VTdGF0ZTtcclxuICB9XHJcblxyXG4gIGdldCBjdXJyZW50VGVtcGxhdGUoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5fY3VycmVudFRlbXBsYXRlO1xyXG4gIH1cclxuXHJcbiAgc2V0IGN1cnJlbnRUZW1wbGF0ZSh0ZW1wbGF0ZTogVGVtcGxhdGUpIHtcclxuICAgIGlmICh0aGlzLl9jdXJyZW50VGVtcGxhdGVNb2RpZmllZFN1YnNjcmlwdGlvbikge1xyXG4gICAgICB0aGlzLl9jdXJyZW50VGVtcGxhdGVNb2RpZmllZFN1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMuX2N1cnJlbnRUZW1wbGF0ZSA9IHRlbXBsYXRlO1xyXG4gICAgdGhpcy5fY3VycmVudFRlbXBsYXRlTW9kaWZpZWRTdWJzY3JpcHRpb24gPSB0aGlzLl9jdXJyZW50VGVtcGxhdGUubW9kaWZpZWRcclxuICAgICAgLnN1YnNjcmliZSh0ID0+IHRoaXMucGFyc2VTdGF0ZS5wcm9tcHQgPSBcIlRlbXBsYXRlIHdhcyBjaGFuZ2VkLiBQbGVhc2UgcGFyc2UgZGF0YSBhZ2Fpbi5cIik7XHJcblxyXG4gICAgdGhpcy5wYXJzZVN0YXRlLnByb21wdCA9IFwiUHJlc3MgUGFyc2VyIHRvIGV4dHJhY3QgZGF0YSBieSB0aGlzIHRlbXBsYXRlXCI7XHJcbiAgfVxyXG5cclxuICBuZ09uRGVzdHJveSgpIHtcclxuICAgIGlmICh0aGlzLl9jdXJyZW50VGVtcGxhdGVDaGFuZ2VkU3Vic2NyaXB0aW9uKSB7XHJcbiAgICAgIHRoaXMuX2N1cnJlbnRUZW1wbGF0ZUNoYW5nZWRTdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAodGhpcy5fdGVtcGxhdGVBZGRlZFN1YnNjcmlwdGlvbikge1xyXG4gICAgICB0aGlzLl90ZW1wbGF0ZUFkZGVkU3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHRoaXMuX3RlbXBsYXRlUmVtb3ZlZFN1YnNjcmlwdGlvbikge1xyXG4gICAgICB0aGlzLl90ZW1wbGF0ZVJlbW92ZWRTdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIG5nT25Jbml0KCkge1xyXG4gIH1cclxuXHJcbiAgbWFuYWdlVGVtcGxhdGVzKCkge1xyXG4gICAgdGhpcy5pc0RhdGFNb2RlID0gZmFsc2U7XHJcbiAgICB0aGlzLmlzVGVtcGxhdGVNb2RlID0gdHJ1ZTtcclxuICB9XHJcblxyXG4gIGlzQ3VycmVudFRlbXBsYXRlKHRlbXBsYXRlSWQ6IFRlbXBsYXRlSWQpIHtcclxuICAgIHJldHVybiB0aGlzLmN1cnJlbnRUZW1wbGF0ZSAmJiB0aGlzLmN1cnJlbnRUZW1wbGF0ZS5pZCA9PT0gdGVtcGxhdGVJZC5pZDtcclxuICB9XHJcblxyXG4gIHNlbGVjdFRlbXBsYXRlQ2xpY2sodGVtcGxhdGVJZDogVGVtcGxhdGVJZCkge1xyXG4gICAgaWYgKCF0ZW1wbGF0ZUlkKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLl90ZW1wbGF0ZVNlcnZpY2Uuc2VsZWN0VGVtcGxhdGUodGVtcGxhdGVJZCk7XHJcbiAgICB0aGlzLnNob3dEYXRhKCk7XHJcbiAgfVxyXG5cclxuICBjcmVhdGVUZW1wbGF0ZUNsaWNrKCkge1xyXG4gICAgdGhpcy5fdGVtcGxhdGVTZXJ2aWNlLmNyZWF0ZVRlbXBsYXRlKCk7XHJcbiAgfVxyXG5cclxuICByZW5hbWVUZW1wbGF0ZUNsaWNrKHRlbXBsYXRlSWQ6IFRlbXBsYXRlSWQpIHtcclxuICAgIGlmICh0ZW1wbGF0ZUlkICYmIHRoaXMudGVtcGxhdGVOYW1lTW9kYWwpIHtcclxuICAgICAgdGhpcy50ZW1wbGF0ZU5hbWVNb2RhbC5vcGVyYXRpb25JZCA9IHRlbXBsYXRlSWQuaWQ7XHJcbiAgICAgIHRoaXMudGVtcGxhdGVOYW1lTW9kYWwuaW5pdGlhbFZhbHVlID0gdGVtcGxhdGVJZC5uYW1lO1xyXG5cclxuICAgICAgdGhpcy5fbW9kYWxTZXJ2aWNlLm9wZW4oXCJUZW1wbGF0ZU5hbWVNb2RhbFwiKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHRlbXBsYXRlTmFtZU1vZGFsQWNjZXB0KGV2ZW50KSB7XHJcbiAgICBjb25zdCB0ZW1wbGF0ZUlkID0gZXZlbnQuaWQ7XHJcbiAgICBjb25zdCB0ZW1wbGF0ZU5hbWUgPSBldmVudC5uZXdWYWx1ZTtcclxuXHJcbiAgICB0cnkge1xyXG4gICAgICB0aGlzLl90ZW1wbGF0ZVNlcnZpY2UucmVuYW1lVGVtcGxhdGUoeyBpZDogdGVtcGxhdGVJZCwgbmFtZTogdGVtcGxhdGVOYW1lIH0pO1xyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgdGhpcy50ZW1wbGF0ZU5hbWVNb2RhbC5lcnJvciA9IGVycm9yO1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5fbW9kYWxTZXJ2aWNlLmNsb3NlKFwiVGVtcGxhdGVOYW1lTW9kYWxcIik7XHJcbiAgfVxyXG5cclxuICByZW1vdmVUZW1wbGF0ZUNsaWNrKHRlbXBsYXRlSWQ6IFRlbXBsYXRlSWQpIHtcclxuICAgIGlmICh0aGlzLnRlbXBsYXRlUmVtb3ZlTW9kYWwpIHtcclxuICAgICAgdGhpcy50ZW1wbGF0ZVJlbW92ZU1vZGFsLm9wZXJhdGlvbklkID0gdGVtcGxhdGVJZC5pZDtcclxuICAgICAgdGhpcy50ZW1wbGF0ZVJlbW92ZU1vZGFsLnByb21wdFRleHQgPSBcIlJlbW92ZSB0ZW1wbGF0ZSA8Yj5cIiArIHRlbXBsYXRlSWQubmFtZSArIFwiPC9iPj9cIjtcclxuXHJcbiAgICAgIHRoaXMuX21vZGFsU2VydmljZS5vcGVuKFwiVGVtcGxhdGVSZW1vdmVNb2RhbFwiKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHRlbXBsYXRlUmVtb3ZlTW9kYWxBY2NlcHQob3BlcmF0aW9uSWQ6IHN0cmluZykge1xyXG4gICAgdGhpcy5fbW9kYWxTZXJ2aWNlLmNsb3NlKFwiVGVtcGxhdGVSZW1vdmVNb2RhbFwiKTtcclxuICAgIHRoaXMuX3RlbXBsYXRlU2VydmljZS5yZW1vdmVUZW1wbGF0ZSh7IGlkOiBvcGVyYXRpb25JZCwgbmFtZTogXCJcIiB9KTtcclxuICB9XHJcblxyXG4gIGRvd25sb2FkVGVtcGxhdGVDbGljayh0ZW1wbGF0ZUlkOiBUZW1wbGF0ZUlkKSB7XHJcbiAgICBjb25zdCB0ZW1wbGF0ZUpzb24gPSB0aGlzLl90ZW1wbGF0ZVNlcnZpY2Uuc2VyaWFsaXplKHRlbXBsYXRlSWQpO1xyXG5cclxuICAgIGNvbnN0IGYgPSBuZXcgRmlsZShbdGVtcGxhdGVKc29uXSwgdGVtcGxhdGVJZC5uYW1lICsgXCIuanNvblwiLCB7XHJcbiAgICAgIHR5cGU6IFwidGV4dC9wbGFpblwiXHJcbiAgICB9KTtcclxuXHJcbiAgICBjb25zdCBmaWxlVXJsID0gd2luZG93LlVSTC5jcmVhdGVPYmplY3RVUkwoZik7XHJcblxyXG4gICAgY29uc3QgZmlsZUxpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XHJcbiAgICBmaWxlTGluay5ocmVmID0gZmlsZVVybDtcclxuICAgIGZpbGVMaW5rLmRvd25sb2FkID0gZi5uYW1lO1xyXG4gICAgZmlsZUxpbmsuY2xpY2soKTtcclxuXHJcbiAgICBVUkwucmV2b2tlT2JqZWN0VVJMKGZpbGVVcmwpO1xyXG4gIH1cclxuXHJcbiAgb25GaWxlU2VsZWN0ZWQoZXZlbnQpIHtcclxuICAgIGNvbnN0IGZpbGU6IEZpbGUgPSBldmVudC50YXJnZXQuZmlsZXNbMF07XHJcblxyXG4gICAgaWYgKGZpbGUpIHtcclxuICAgICAgY29uc3QgcmVhZGVyID0gbmV3IEZpbGVSZWFkZXIoKTtcclxuXHJcbiAgICAgIHJlYWRlci5yZWFkQXNUZXh0KGZpbGUpO1xyXG4gICAgICByZWFkZXIub25sb2FkID0geCA9PiB7XHJcbiAgICAgICAgdGhpcy5fdGVtcGxhdGVTZXJ2aWNlLmRlc2VyaWFsaXplKHJlYWRlci5yZXN1bHQudG9TdHJpbmcoKSk7XHJcbiAgICAgICAgdGhpcy51cGxvYWRUZW1wbGF0ZS5uYXRpdmVFbGVtZW50LnZhbHVlID0gbnVsbDtcclxuICAgICAgfTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHNob3dEYXRhKCkge1xyXG4gICAgdGhpcy5pc1RlbXBsYXRlTW9kZSA9IGZhbHNlO1xyXG4gICAgdGhpcy5pc0RhdGFNb2RlID0gdHJ1ZTtcclxuICB9XHJcblxyXG4gIHBhcnNlKCkge1xyXG4gICAgdGhpcy5wYXJzZVN0YXRlLmV4ZWN1dGUoKTtcclxuXHJcbiAgICBjb25zdCBzdGF0ZSA9IHRoaXMuX3BsYWNlaG9sZGVyU2VydmljZS5zdGFydE9wZXJhdGlvbihcIlBhcnNpbmcgZGF0YS4uLlwiKTtcclxuXHJcbiAgICBjb25zdCBvYnNlcnZlciA9IHtcclxuICAgICAgbmV4dDogKHJlc3BvbnNlOiBQYXJzZUJ5VGVtcGxhdGVSZXNwb25zZSkgPT4ge1xyXG4gICAgICAgIHRoaXMucGFyc2VTdGF0ZS5yZXN1bHQgPSByZXNwb25zZS5kYXRhO1xyXG4gICAgICB9LFxyXG4gICAgICBlcnJvcjogKGVycjogYW55KSA9PiB7ICAgICAgICBcclxuICAgICAgICB0aGlzLnBhcnNlU3RhdGUuZXJyb3IgPSB0aGlzLl9wYXJzZXJTZXJ2aWNlLmdldEVycm9yTWVzc2FnZShlcnIpO1xyXG4gICAgICAgIHN0YXRlLmVycm9yKGVycik7XHJcbiAgICAgIH0sXHJcbiAgICAgIGNvbXBsZXRlOiAoKSA9PiBzdGF0ZS5jb21wbGV0ZSgpXHJcbiAgICB9O1xyXG5cclxuICAgIHRoaXMuX3BhcnNlclNlcnZpY2UucGFyc2VCeVRlbXBsYXRlKFxyXG4gICAgICB0aGlzLl9zb3VyY2VGaWxlU2VydmljZS5zb3VyY2VGaWxlLFxyXG4gICAgICBudWxsLFxyXG4gICAgICB0aGlzLl90ZW1wbGF0ZVNlcnZpY2UuY3VycmVudFRlbXBsYXRlXHJcbiAgICApLnN1YnNjcmliZShvYnNlcnZlcik7XHJcbiAgfVxyXG5cclxuICBkb3dubG9hZFJlc3VsdHNBc0NzdigpIHtcclxuICAgIGlmICghdGhpcy5wYXJzZVN0YXRlLmlzQ29tcGxldGVkIHx8IHRoaXMucGFyc2VTdGF0ZS5yZXN1bHQubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBjc3YgPSB0aGlzLl91dGlsc1NlcnZpY2UuZ2VuZXJhdGVDc3ZGb3JQYXJzZVJlc3VsdHModGhpcy5wYXJzZVN0YXRlLnJlc3VsdCk7XHJcblxyXG4gICAgY29uc3QgZiA9IG5ldyBGaWxlKFtjc3ZdLCB0aGlzLl9zb3VyY2VGaWxlU2VydmljZS5zb3VyY2VGaWxlLmd1aWQgKyBcIi0gZGF0YS5jc3ZcIiwge1xyXG4gICAgICB0eXBlOiBcInRleHQvcGxhaW5cIlxyXG4gICAgfSk7XHJcblxyXG4gICAgY29uc3QgZmlsZVVybCA9IHdpbmRvdy5VUkwuY3JlYXRlT2JqZWN0VVJMKGYpO1xyXG5cclxuICAgIGNvbnN0IGZpbGVMaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xyXG4gICAgZmlsZUxpbmsuaHJlZiA9IGZpbGVVcmw7XHJcbiAgICBmaWxlTGluay5kb3dubG9hZCA9IGYubmFtZTtcclxuICAgIGZpbGVMaW5rLmNsaWNrKCk7XHJcblxyXG4gICAgVVJMLnJldm9rZU9iamVjdFVSTChmaWxlVXJsKTtcclxuICB9XHJcblxyXG4gIGlzQXJyYXkob2JqOiBhbnkpIHtcclxuICAgIHJldHVybiBBcnJheS5pc0FycmF5KG9iailcclxuICB9XHJcblxyXG4gIHNob3dUYWJsZVZhbHVlKHZhbHVlOiBhbnkpIHtcclxuICAgIGNvbnN0IHRhYmxlID0gbmV3IFRhYmxlVmFsdWUodmFsdWUpO1xyXG5cclxuICAgIHRoaXMudGFibGVWaWV3ZXIudGFibGUgPSB0YWJsZTtcclxuICAgIHRoaXMuX21vZGFsU2VydmljZS5vcGVuKFwiVGFibGVWaWV3ZXJcIik7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHJlbW92ZVRlbXBsYXRlSWQodGVtcGxhdGVJZDogVGVtcGxhdGVJZCkge1xyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnRlbXBsYXRlSWRzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgIGlmICh0aGlzLnRlbXBsYXRlSWRzW2ldLmlkID09PSB0ZW1wbGF0ZUlkLmlkKSB7XHJcbiAgICAgICAgdGhpcy50ZW1wbGF0ZUlkcy5zcGxpY2UoaSwgMSk7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59Il19