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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2lkZS1wYW5lbC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ3JvdXBkb2NzLmV4YW1wbGVzLmFuZ3VsYXIvcGFyc2VyLyIsInNvdXJjZXMiOlsibGliL3NpZGUtcGFuZWwvc2lkZS1wYW5lbC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQXFCLFNBQVMsRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFcEYsT0FBTyxFQUFFLGNBQWMsRUFBd0MsVUFBVSxFQUF1QyxNQUFNLGVBQWUsQ0FBQztBQUN0SSxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSx3Q0FBd0MsQ0FBQztBQUM5RSxPQUFPLEVBQUUsMEJBQTBCLEVBQUUsTUFBTSxvREFBb0QsQ0FBQztBQUVoRyxPQUFPLEVBTUwsWUFBWSxFQU9iLE1BQU0sK0NBQStDLENBQUM7QUFFdkQsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBQ2xELE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUV0RCxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUMzRCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sa0JBQWtCLENBQUM7QUFDaEQsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDNUQsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sd0NBQXdDLENBQUM7QUFFOUU7SUFvQkUsNEJBQ1UsYUFBMkIsRUFDM0IsY0FBNkIsRUFDN0Isa0JBQXFDLEVBQ3JDLGdCQUFpQyxFQUNqQyxhQUEyQixFQUMzQixtQkFBdUM7UUFOakQsaUJBdUJDO1FBdEJTLGtCQUFhLEdBQWIsYUFBYSxDQUFjO1FBQzNCLG1CQUFjLEdBQWQsY0FBYyxDQUFlO1FBQzdCLHVCQUFrQixHQUFsQixrQkFBa0IsQ0FBbUI7UUFDckMscUJBQWdCLEdBQWhCLGdC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LEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRTtpQ0FDakQsU0FBUyxTQUFDLGdCQUFnQixFQUFFLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRTs4QkFDNUMsU0FBUyxTQUFDLGFBQWEsRUFBRSxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUU7O0lBa081Qyx5QkFBQztDQUFBLEFBcFBELElBb1BDO1NBL09ZLGtCQUFrQjs7Ozs7O0lBRTdCLGlFQUEwRDs7Ozs7SUFDMUQsd0RBQWlEOzs7OztJQUNqRCwwREFBbUQ7Ozs7O0lBRW5ELDhDQUFtQzs7Ozs7SUFDbkMsa0VBQTJEOzs7OztJQUMzRCx5Q0FBMEQ7O0lBRTFELCtDQUEwRjs7SUFDMUYsaURBQW9HOztJQUNwRyw0Q0FBMEU7O0lBQzFFLHlDQUE4RTs7SUEyQjlFLHlDQUEwQjs7SUFDMUIsNENBQXdCOztJQUN4Qix3Q0FBb0I7Ozs7O0lBMUJsQiwyQ0FBbUM7Ozs7O0lBQ25DLDRDQUFxQzs7Ozs7SUFDckMsZ0RBQTZDOzs7OztJQUM3Qyw4Q0FBeUM7Ozs7O0lBQ3pDLDJDQUFtQzs7Ozs7SUFDbkMsaURBQStDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkRlc3Ryb3ksIE9uSW5pdCwgVmlld0NoaWxkLCBFbGVtZW50UmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBEb21TYW5pdGl6ZXIgfSBmcm9tICdAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyJztcbmltcG9ydCB7IE9wZXJhdGlvblN0YXRlLCBQYXJzZUJ5VGVtcGxhdGVSZXNwb25zZSwgUGFyc2VSZXN1bHQsIFRhYmxlVmFsdWUsIFRlbXBsYXRlLCBUZW1wbGF0ZUZpZWxkLCBUZW1wbGF0ZUlkIH0gZnJvbSAnLi4vYXBwLW1vZGVscyc7XG5pbXBvcnQgeyBSZW5hbWVNb2RhbENvbXBvbmVudCB9IGZyb20gJy4uL3JlbmFtZS1tb2RhbC9yZW5hbWUtbW9kYWwuY29tcG9uZW50JztcbmltcG9ydCB7IENvbmZpcm1hdGlvbk1vZGFsQ29tcG9uZW50IH0gZnJvbSAnLi4vY29uZmlybWF0aW9uLW1vZGFsL2NvbmZpcm1hdGlvbi1tb2RhbC5jb21wb25lbnQnO1xuXG5pbXBvcnQge1xuICBBZGREeW5hbWljQ29tcG9uZW50U2VydmljZSxcbiAgQ29tbW9uTW9kYWxzLFxuICBGaWxlQ3JlZGVudGlhbHMsXG4gIEZpbGVNb2RlbCwgRm9ybWF0dGluZyxcbiAgSG9zdGluZ0R5bmFtaWNDb21wb25lbnRTZXJ2aWNlLFxuICBNb2RhbFNlcnZpY2UsXG4gIE5hdmlnYXRlU2VydmljZSwgUGFnZVByZWxvYWRTZXJ2aWNlLCBQYXNzd29yZFNlcnZpY2UsXG4gIFRvcFRhYkFjdGl2YXRvclNlcnZpY2UsIFVwbG9hZEZpbGVzU2VydmljZSxcbiAgVXRpbHMsXG4gIFdpbmRvd1NlcnZpY2UsXG4gIFpvb21TZXJ2aWNlLFxuICBFeGNlcHRpb25NZXNzYWdlU2VydmljZVxufSBmcm9tIFwiQGdyb3VwZG9jcy5leGFtcGxlcy5hbmd1bGFyL2NvbW1vbi1jb21wb25lbnRzXCI7XG5cbmltcG9ydCB7IFBhcnNlclNlcnZpY2UgfSBmcm9tICcuLi9wYXJzZXIuc2VydmljZSc7XG5pbXBvcnQgeyBUZW1wbGF0ZVNlcnZpY2UgfSBmcm9tICcuLi90ZW1wbGF0ZS5zZXJ2aWNlJztcbmltcG9ydCB7IFN1YmplY3QsIFN1YnNjcmlwdGlvbiB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgU291cmNlRmlsZVNlcnZpY2UgfSBmcm9tICcuLi9zb3VyY2UtZmlsZS5zZXJ2aWNlJztcbmltcG9ydCB7IFV0aWxzU2VydmljZSB9IGZyb20gJy4uL3V0aWxzLnNlcnZpY2UnO1xuaW1wb3J0IHsgUGxhY2Vob2xkZXJTZXJ2aWNlIH0gZnJvbSAnLi4vcGxhY2Vob2xkZXIuc2VydmljZSc7XG5pbXBvcnQgeyBUYWJsZVZpZXdlckNvbXBvbmVudCB9IGZyb20gJy4uL3RhYmxlLXZpZXdlci90YWJsZS12aWV3ZXIuY29tcG9uZW50JztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnZ2QtcGFyc2VyLXNpZGUtcGFuZWwnLFxuICB0ZW1wbGF0ZVVybDogJy4vc2lkZS1wYW5lbC5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL3NpZGUtcGFuZWwuY29tcG9uZW50Lmxlc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBTaWRlUGFuZWxDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XG5cbiAgcHJpdmF0ZSBfY3VycmVudFRlbXBsYXRlQ2hhbmdlZFN1YnNjcmlwdGlvbjogU3Vic2NyaXB0aW9uO1xuICBwcml2YXRlIF90ZW1wbGF0ZUFkZGVkU3Vic2NyaXB0aW9uOiBTdWJzY3JpcHRpb247XG4gIHByaXZhdGUgX3RlbXBsYXRlUmVtb3ZlZFN1YnNjcmlwdGlvbjogU3Vic2NyaXB0aW9uO1xuXG4gIHByaXZhdGUgX2N1cnJlbnRUZW1wbGF0ZTogVGVtcGxhdGU7XG4gIHByaXZhdGUgX2N1cnJlbnRUZW1wbGF0ZU1vZGlmaWVkU3Vic2NyaXB0aW9uOiBTdWJzY3JpcHRpb247XG4gIHByaXZhdGUgX3BhcnNlU3RhdGUgPSBuZXcgT3BlcmF0aW9uU3RhdGU8UGFyc2VSZXN1bHRbXT4oKTtcblxuICBAVmlld0NoaWxkKCd0ZW1wbGF0ZU5hbWVNb2RhbCcsIHsgc3RhdGljOiB0cnVlIH0pIHRlbXBsYXRlTmFtZU1vZGFsOiBSZW5hbWVNb2RhbENvbXBvbmVudDtcbiAgQFZpZXdDaGlsZCgndGVtcGxhdGVSZW1vdmVNb2RhbCcsIHsgc3RhdGljOiB0cnVlIH0pIHRlbXBsYXRlUmVtb3ZlTW9kYWw6IENvbmZpcm1hdGlvbk1vZGFsQ29tcG9uZW50O1xuICBAVmlld0NoaWxkKCd1cGxvYWRUZW1wbGF0ZScsIHsgc3RhdGljOiB0cnVlIH0pIHVwbG9hZFRlbXBsYXRlOiBFbGVtZW50UmVmO1xuICBAVmlld0NoaWxkKCd0YWJsZVZpZXdlcicsIHsgc3RhdGljOiB0cnVlIH0pIHRhYmxlVmlld2VyOiBUYWJsZVZpZXdlckNvbXBvbmVudDtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIF9tb2RhbFNlcnZpY2U6IE1vZGFsU2VydmljZSxcbiAgICBwcml2YXRlIF9wYXJzZXJTZXJ2aWNlOiBQYXJzZXJTZXJ2aWNlLFxuICAgIHByaXZhdGUgX3NvdXJjZUZpbGVTZXJ2aWNlOiBTb3VyY2VGaWxlU2VydmljZSxcbiAgICBwcml2YXRlIF90ZW1wbGF0ZVNlcnZpY2U6IFRlbXBsYXRlU2VydmljZSxcbiAgICBwcml2YXRlIF91dGlsc1NlcnZpY2U6IFV0aWxzU2VydmljZSxcbiAgICBwcml2YXRlIF9wbGFjZWhvbGRlclNlcnZpY2U6IFBsYWNlaG9sZGVyU2VydmljZSkge1xuXG4gICAgdGhpcy5pc0RhdGFNb2RlID0gdHJ1ZTtcbiAgICB0aGlzLmlzVGVtcGxhdGVNb2RlID0gZmFsc2U7XG5cbiAgICB0aGlzLl9jdXJyZW50VGVtcGxhdGVDaGFuZ2VkU3Vic2NyaXB0aW9uID0gdGhpcy5fdGVtcGxhdGVTZXJ2aWNlLmN1cnJlbnRUZW1wbGF0ZUNoYW5nZWRcbiAgICAgIC5zdWJzY3JpYmUodGVtcGxhdGUgPT4gdGhpcy5jdXJyZW50VGVtcGxhdGUgPSB0ZW1wbGF0ZSk7XG4gICAgdGhpcy5fdGVtcGxhdGVBZGRlZFN1YnNjcmlwdGlvbiA9IHRoaXMuX3RlbXBsYXRlU2VydmljZS50ZW1wbGF0ZUFkZGVkU3ViamVjdFxuICAgICAgLnN1YnNjcmliZSh0ZW1wbGF0ZSA9PiB0aGlzLnRlbXBsYXRlSWRzLnB1c2godGVtcGxhdGUpKTtcbiAgICB0aGlzLl90ZW1wbGF0ZVJlbW92ZWRTdWJzY3JpcHRpb24gPSB0aGlzLl90ZW1wbGF0ZVNlcnZpY2UudGVtcGxhdGVSZW1vdmVkU3ViamVjdFxuICAgICAgLnN1YnNjcmliZSh0ZW1wbGF0ZUlkID0+IHRoaXMucmVtb3ZlVGVtcGxhdGVJZCh0ZW1wbGF0ZUlkKSk7XG5cbiAgICB0aGlzLmN1cnJlbnRUZW1wbGF0ZSA9IHRoaXMuX3RlbXBsYXRlU2VydmljZS5jdXJyZW50VGVtcGxhdGU7XG4gICAgdGhpcy50ZW1wbGF0ZUlkcyA9IFtdO1xuICAgIHRoaXMuX3RlbXBsYXRlU2VydmljZS50ZW1wbGF0ZUlkcy5mb3JFYWNoKGVsZW1lbnQgPT4ge1xuICAgICAgdGhpcy50ZW1wbGF0ZUlkcy5wdXNoKGVsZW1lbnQpO1xuICAgIH0pO1xuICB9XG5cbiAgdGVtcGxhdGVJZHM6IFRlbXBsYXRlSWRbXTtcbiAgaXNUZW1wbGF0ZU1vZGU6IGJvb2xlYW47XG4gIGlzRGF0YU1vZGU6IGJvb2xlYW47XG5cbiAgZ2V0IHBhcnNlU3RhdGUoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3BhcnNlU3RhdGU7XG4gIH1cblxuICBnZXQgY3VycmVudFRlbXBsYXRlKCkge1xuICAgIHJldHVybiB0aGlzLl9jdXJyZW50VGVtcGxhdGU7XG4gIH1cblxuICBzZXQgY3VycmVudFRlbXBsYXRlKHRlbXBsYXRlOiBUZW1wbGF0ZSkge1xuICAgIGlmICh0aGlzLl9jdXJyZW50VGVtcGxhdGVNb2RpZmllZFN1YnNjcmlwdGlvbikge1xuICAgICAgdGhpcy5fY3VycmVudFRlbXBsYXRlTW9kaWZpZWRTdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcbiAgICB9XG5cbiAgICB0aGlzLl9jdXJyZW50VGVtcGxhdGUgPSB0ZW1wbGF0ZTtcbiAgICB0aGlzLl9jdXJyZW50VGVtcGxhdGVNb2RpZmllZFN1YnNjcmlwdGlvbiA9IHRoaXMuX2N1cnJlbnRUZW1wbGF0ZS5tb2RpZmllZFxuICAgICAgLnN1YnNjcmliZSh0ID0+IHRoaXMucGFyc2VTdGF0ZS5wcm9tcHQgPSBcIlRlbXBsYXRlIHdhcyBjaGFuZ2VkLiBQbGVhc2UgcGFyc2UgZGF0YSBhZ2Fpbi5cIik7XG5cbiAgICB0aGlzLnBhcnNlU3RhdGUucHJvbXB0ID0gXCJQcmVzcyBQYXJzZXIgdG8gZXh0cmFjdCBkYXRhIGJ5IHRoaXMgdGVtcGxhdGVcIjtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCkge1xuICAgIGlmICh0aGlzLl9jdXJyZW50VGVtcGxhdGVDaGFuZ2VkU3Vic2NyaXB0aW9uKSB7XG4gICAgICB0aGlzLl9jdXJyZW50VGVtcGxhdGVDaGFuZ2VkU3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuX3RlbXBsYXRlQWRkZWRTdWJzY3JpcHRpb24pIHtcbiAgICAgIHRoaXMuX3RlbXBsYXRlQWRkZWRTdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5fdGVtcGxhdGVSZW1vdmVkU3Vic2NyaXB0aW9uKSB7XG4gICAgICB0aGlzLl90ZW1wbGF0ZVJlbW92ZWRTdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcbiAgICB9XG4gIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgfVxuXG4gIG1hbmFnZVRlbXBsYXRlcygpIHtcbiAgICB0aGlzLmlzRGF0YU1vZGUgPSBmYWxzZTtcbiAgICB0aGlzLmlzVGVtcGxhdGVNb2RlID0gdHJ1ZTtcbiAgfVxuXG4gIGlzQ3VycmVudFRlbXBsYXRlKHRlbXBsYXRlSWQ6IFRlbXBsYXRlSWQpIHtcbiAgICByZXR1cm4gdGhpcy5jdXJyZW50VGVtcGxhdGUgJiYgdGhpcy5jdXJyZW50VGVtcGxhdGUuaWQgPT09IHRlbXBsYXRlSWQuaWQ7XG4gIH1cblxuICBzZWxlY3RUZW1wbGF0ZUNsaWNrKHRlbXBsYXRlSWQ6IFRlbXBsYXRlSWQpIHtcbiAgICBpZiAoIXRlbXBsYXRlSWQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0aGlzLl90ZW1wbGF0ZVNlcnZpY2Uuc2VsZWN0VGVtcGxhdGUodGVtcGxhdGVJZCk7XG4gICAgdGhpcy5zaG93RGF0YSgpO1xuICB9XG5cbiAgY3JlYXRlVGVtcGxhdGVDbGljaygpIHtcbiAgICB0aGlzLl90ZW1wbGF0ZVNlcnZpY2UuY3JlYXRlVGVtcGxhdGUoKTtcbiAgfVxuXG4gIHJlbmFtZVRlbXBsYXRlQ2xpY2sodGVtcGxhdGVJZDogVGVtcGxhdGVJZCkge1xuICAgIGlmICh0ZW1wbGF0ZUlkICYmIHRoaXMudGVtcGxhdGVOYW1lTW9kYWwpIHtcbiAgICAgIHRoaXMudGVtcGxhdGVOYW1lTW9kYWwub3BlcmF0aW9uSWQgPSB0ZW1wbGF0ZUlkLmlkO1xuICAgICAgdGhpcy50ZW1wbGF0ZU5hbWVNb2RhbC5pbml0aWFsVmFsdWUgPSB0ZW1wbGF0ZUlkLm5hbWU7XG5cbiAgICAgIHRoaXMuX21vZGFsU2VydmljZS5vcGVuKFwiVGVtcGxhdGVOYW1lTW9kYWxcIik7XG4gICAgfVxuICB9XG5cbiAgdGVtcGxhdGVOYW1lTW9kYWxBY2NlcHQoZXZlbnQpIHtcbiAgICBjb25zdCB0ZW1wbGF0ZUlkID0gZXZlbnQuaWQ7XG4gICAgY29uc3QgdGVtcGxhdGVOYW1lID0gZXZlbnQubmV3VmFsdWU7XG5cbiAgICB0cnkge1xuICAgICAgdGhpcy5fdGVtcGxhdGVTZXJ2aWNlLnJlbmFtZVRlbXBsYXRlKHsgaWQ6IHRlbXBsYXRlSWQsIG5hbWU6IHRlbXBsYXRlTmFtZSB9KTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgdGhpcy50ZW1wbGF0ZU5hbWVNb2RhbC5lcnJvciA9IGVycm9yO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRoaXMuX21vZGFsU2VydmljZS5jbG9zZShcIlRlbXBsYXRlTmFtZU1vZGFsXCIpO1xuICB9XG5cbiAgcmVtb3ZlVGVtcGxhdGVDbGljayh0ZW1wbGF0ZUlkOiBUZW1wbGF0ZUlkKSB7XG4gICAgaWYgKHRoaXMudGVtcGxhdGVSZW1vdmVNb2RhbCkge1xuICAgICAgdGhpcy50ZW1wbGF0ZVJlbW92ZU1vZGFsLm9wZXJhdGlvbklkID0gdGVtcGxhdGVJZC5pZDtcbiAgICAgIHRoaXMudGVtcGxhdGVSZW1vdmVNb2RhbC5wcm9tcHRUZXh0ID0gXCJSZW1vdmUgdGVtcGxhdGUgPGI+XCIgKyB0ZW1wbGF0ZUlkLm5hbWUgKyBcIjwvYj4/XCI7XG5cbiAgICAgIHRoaXMuX21vZGFsU2VydmljZS5vcGVuKFwiVGVtcGxhdGVSZW1vdmVNb2RhbFwiKTtcbiAgICB9XG4gIH1cblxuICB0ZW1wbGF0ZVJlbW92ZU1vZGFsQWNjZXB0KG9wZXJhdGlvbklkOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9tb2RhbFNlcnZpY2UuY2xvc2UoXCJUZW1wbGF0ZVJlbW92ZU1vZGFsXCIpO1xuICAgIHRoaXMuX3RlbXBsYXRlU2VydmljZS5yZW1vdmVUZW1wbGF0ZSh7IGlkOiBvcGVyYXRpb25JZCwgbmFtZTogXCJcIiB9KTtcbiAgfVxuXG4gIGRvd25sb2FkVGVtcGxhdGVDbGljayh0ZW1wbGF0ZUlkOiBUZW1wbGF0ZUlkKSB7XG4gICAgY29uc3QgdGVtcGxhdGVKc29uID0gdGhpcy5fdGVtcGxhdGVTZXJ2aWNlLnNlcmlhbGl6ZSh0ZW1wbGF0ZUlkKTtcblxuICAgIGNvbnN0IGYgPSBuZXcgRmlsZShbdGVtcGxhdGVKc29uXSwgdGVtcGxhdGVJZC5uYW1lICsgXCIuanNvblwiLCB7XG4gICAgICB0eXBlOiBcInRleHQvcGxhaW5cIlxuICAgIH0pO1xuXG4gICAgY29uc3QgZmlsZVVybCA9IHdpbmRvdy5VUkwuY3JlYXRlT2JqZWN0VVJMKGYpO1xuXG4gICAgY29uc3QgZmlsZUxpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XG4gICAgZmlsZUxpbmsuaHJlZiA9IGZpbGVVcmw7XG4gICAgZmlsZUxpbmsuZG93bmxvYWQgPSBmLm5hbWU7XG4gICAgZmlsZUxpbmsuY2xpY2soKTtcblxuICAgIFVSTC5yZXZva2VPYmplY3RVUkwoZmlsZVVybCk7XG4gIH1cblxuICBvbkZpbGVTZWxlY3RlZChldmVudCkge1xuICAgIGNvbnN0IGZpbGU6IEZpbGUgPSBldmVudC50YXJnZXQuZmlsZXNbMF07XG5cbiAgICBpZiAoZmlsZSkge1xuICAgICAgY29uc3QgcmVhZGVyID0gbmV3IEZpbGVSZWFkZXIoKTtcblxuICAgICAgcmVhZGVyLnJlYWRBc1RleHQoZmlsZSk7XG4gICAgICByZWFkZXIub25sb2FkID0geCA9PiB7XG4gICAgICAgIHRoaXMuX3RlbXBsYXRlU2VydmljZS5kZXNlcmlhbGl6ZShyZWFkZXIucmVzdWx0LnRvU3RyaW5nKCkpO1xuICAgICAgICB0aGlzLnVwbG9hZFRlbXBsYXRlLm5hdGl2ZUVsZW1lbnQudmFsdWUgPSBudWxsO1xuICAgICAgfTtcbiAgICB9XG4gIH1cblxuICBzaG93RGF0YSgpIHtcbiAgICB0aGlzLmlzVGVtcGxhdGVNb2RlID0gZmFsc2U7XG4gICAgdGhpcy5pc0RhdGFNb2RlID0gdHJ1ZTtcbiAgfVxuXG4gIHBhcnNlKCkge1xuICAgIHRoaXMucGFyc2VTdGF0ZS5leGVjdXRlKCk7XG5cbiAgICBjb25zdCBzdGF0ZSA9IHRoaXMuX3BsYWNlaG9sZGVyU2VydmljZS5zdGFydE9wZXJhdGlvbihcIlBhcnNpbmcgZGF0YS4uLlwiKTtcblxuICAgIGNvbnN0IG9ic2VydmVyID0ge1xuICAgICAgbmV4dDogKHJlc3BvbnNlOiBQYXJzZUJ5VGVtcGxhdGVSZXNwb25zZSkgPT4ge1xuICAgICAgICB0aGlzLnBhcnNlU3RhdGUucmVzdWx0ID0gcmVzcG9uc2UuZGF0YTtcbiAgICAgIH0sXG4gICAgICBlcnJvcjogKGVycjogYW55KSA9PiB7ICAgICAgICBcbiAgICAgICAgdGhpcy5wYXJzZVN0YXRlLmVycm9yID0gdGhpcy5fcGFyc2VyU2VydmljZS5nZXRFcnJvck1lc3NhZ2UoZXJyKTtcbiAgICAgICAgc3RhdGUuZXJyb3IoZXJyKTtcbiAgICAgIH0sXG4gICAgICBjb21wbGV0ZTogKCkgPT4gc3RhdGUuY29tcGxldGUoKVxuICAgIH07XG5cbiAgICB0aGlzLl9wYXJzZXJTZXJ2aWNlLnBhcnNlQnlUZW1wbGF0ZShcbiAgICAgIHRoaXMuX3NvdXJjZUZpbGVTZXJ2aWNlLnNvdXJjZUZpbGUsXG4gICAgICBudWxsLFxuICAgICAgdGhpcy5fdGVtcGxhdGVTZXJ2aWNlLmN1cnJlbnRUZW1wbGF0ZVxuICAgICkuc3Vic2NyaWJlKG9ic2VydmVyKTtcbiAgfVxuXG4gIGRvd25sb2FkUmVzdWx0c0FzQ3N2KCkge1xuICAgIGlmICghdGhpcy5wYXJzZVN0YXRlLmlzQ29tcGxldGVkIHx8IHRoaXMucGFyc2VTdGF0ZS5yZXN1bHQubGVuZ3RoID09PSAwKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3QgY3N2ID0gdGhpcy5fdXRpbHNTZXJ2aWNlLmdlbmVyYXRlQ3N2Rm9yUGFyc2VSZXN1bHRzKHRoaXMucGFyc2VTdGF0ZS5yZXN1bHQpO1xuXG4gICAgY29uc3QgZiA9IG5ldyBGaWxlKFtjc3ZdLCB0aGlzLl9zb3VyY2VGaWxlU2VydmljZS5zb3VyY2VGaWxlLmd1aWQgKyBcIi0gZGF0YS5jc3ZcIiwge1xuICAgICAgdHlwZTogXCJ0ZXh0L3BsYWluXCJcbiAgICB9KTtcblxuICAgIGNvbnN0IGZpbGVVcmwgPSB3aW5kb3cuVVJMLmNyZWF0ZU9iamVjdFVSTChmKTtcblxuICAgIGNvbnN0IGZpbGVMaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xuICAgIGZpbGVMaW5rLmhyZWYgPSBmaWxlVXJsO1xuICAgIGZpbGVMaW5rLmRvd25sb2FkID0gZi5uYW1lO1xuICAgIGZpbGVMaW5rLmNsaWNrKCk7XG5cbiAgICBVUkwucmV2b2tlT2JqZWN0VVJMKGZpbGVVcmwpO1xuICB9XG5cbiAgaXNBcnJheShvYmo6IGFueSkge1xuICAgIHJldHVybiBBcnJheS5pc0FycmF5KG9iailcbiAgfVxuXG4gIHNob3dUYWJsZVZhbHVlKHZhbHVlOiBhbnkpIHtcbiAgICBjb25zdCB0YWJsZSA9IG5ldyBUYWJsZVZhbHVlKHZhbHVlKTtcblxuICAgIHRoaXMudGFibGVWaWV3ZXIudGFibGUgPSB0YWJsZTtcbiAgICB0aGlzLl9tb2RhbFNlcnZpY2Uub3BlbihcIlRhYmxlVmlld2VyXCIpO1xuICB9XG5cbiAgcHJpdmF0ZSByZW1vdmVUZW1wbGF0ZUlkKHRlbXBsYXRlSWQ6IFRlbXBsYXRlSWQpIHtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMudGVtcGxhdGVJZHMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGlmICh0aGlzLnRlbXBsYXRlSWRzW2ldLmlkID09PSB0ZW1wbGF0ZUlkLmlkKSB7XG4gICAgICAgIHRoaXMudGVtcGxhdGVJZHMuc3BsaWNlKGksIDEpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgfVxuICB9XG59Il19