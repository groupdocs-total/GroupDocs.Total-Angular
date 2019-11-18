/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component } from '@angular/core';
import { SignatureService } from "./signature.service";
import { ModalService, UploadFilesService, NavigateService, PagePreloadService, ZoomService, RenderPrintService, FileUtil, PasswordService, CommonModals, HostingDynamicComponentService, AddDynamicComponentService, OnCloseService, ExceptionMessageService, WindowService, Utils, TabActivatorService } from "@groupdocs.examples.angular/common-components";
import { SignatureConfigService } from "./signature-config.service";
import { AddedSignature, DraggableSignature, Position, SignatureData, SignatureProps, SignatureType } from "./signature-models";
import { SelectSignatureService } from "./select-signature.service";
import { Signature } from "./signature/signature.component";
import { DragSignatureService } from "./drag-signature.service";
import { RemoveSignatureService } from "./remove-signature.service";
import * as jquery from 'jquery';
import { ActiveSignatureService } from "./active-signature.service";
import { SignaturesHolderService } from "./signatures-holder.service";
import { SignatureTabActivatorService } from "./signature-tab-activator.service";
import 'hammerjs';
import { CopySignatureService } from "./copy-signature.service";
/** @type {?} */
const $ = jquery;
export class SignatureAppComponent {
    /**
     * @param {?} _signatureService
     * @param {?} _modalService
     * @param {?} configService
     * @param {?} uploadFilesService
     * @param {?} _navigateService
     * @param {?} _zoomService
     * @param {?} pagePreloadService
     * @param {?} _renderPrintService
     * @param {?} passwordService
     * @param {?} _windowService
     * @param {?} _selectSignatureService
     * @param {?} _signatureTabActivationService
     * @param {?} _hostingComponentsService
     * @param {?} _addDynamicComponentService
     * @param {?} _dragSignatureService
     * @param {?} _onCloseService
     * @param {?} removeSignatureService
     * @param {?} _activeSignatureService
     * @param {?} _excMessageService
     * @param {?} _signaturesHolderService
     * @param {?} _tabActivatorService
     * @param {?} copySignatureService
     */
    constructor(_signatureService, _modalService, configService, uploadFilesService, _navigateService, _zoomService, pagePreloadService, _renderPrintService, passwordService, _windowService, _selectSignatureService, _signatureTabActivationService, _hostingComponentsService, _addDynamicComponentService, _dragSignatureService, _onCloseService, removeSignatureService, _activeSignatureService, _excMessageService, _signaturesHolderService, _tabActivatorService, copySignatureService) {
        this._signatureService = _signatureService;
        this._modalService = _modalService;
        this._navigateService = _navigateService;
        this._zoomService = _zoomService;
        this._renderPrintService = _renderPrintService;
        this._windowService = _windowService;
        this._selectSignatureService = _selectSignatureService;
        this._signatureTabActivationService = _signatureTabActivationService;
        this._hostingComponentsService = _hostingComponentsService;
        this._addDynamicComponentService = _addDynamicComponentService;
        this._dragSignatureService = _dragSignatureService;
        this._onCloseService = _onCloseService;
        this._activeSignatureService = _activeSignatureService;
        this._excMessageService = _excMessageService;
        this._signaturesHolderService = _signaturesHolderService;
        this._tabActivatorService = _tabActivatorService;
        this.title = 'signature';
        this.files = [];
        this.countPages = 0;
        this.formatDisabled = !this.file;
        this.browseFilesModal = CommonModals.BrowseFiles;
        this.signatureTypes = [
            SignatureType.TEXT,
            SignatureType.IMAGE,
            SignatureType.DIGITAL,
            SignatureType.QR_CODE,
            SignatureType.BAR_CODE,
            SignatureType.STAMP,
            SignatureType.HAND,
        ];
        this.signatureTypeCodes = [
            SignatureType.QR_CODE,
            SignatureType.BAR_CODE,
        ];
        this.signatureComponents = new Map();
        this.fileWasDropped = false;
        this._tabActivatorService.activeTabChange.subscribe((/**
         * @param {?} tabId
         * @return {?}
         */
        (tabId) => {
            if (tabId === '1') {
                if (this.activeSignatureTab) {
                    this._signatureTabActivationService.changeActiveTab(this.activeSignatureTab);
                }
                this.activeSignatureTab = null;
            }
        }));
        copySignatureService.copySignature.subscribe((/**
         * @param {?} copySign
         * @return {?}
         */
        (copySign) => {
            /** @type {?} */
            const componentRef = this.signatureComponents.get(copySign.id);
            if (componentRef) {
                // @ts-ignore
                /** @type {?} */
                const comp = ((/** @type {?} */ (componentRef))).instance;
                /** @type {?} */
                const compPage = comp.data.number;
                /** @type {?} */
                const sign = new DraggableSignature();
                sign.type = comp.signatureType;
                sign.guid = copySign.guid;
                sign.position = comp.position;
                /** @type {?} */
                const addedSignature = new AddedSignature();
                addedSignature.guid = copySign.guid;
                addedSignature.data = comp.data.data;
                if (comp.data.props) {
                    addedSignature.props = comp.data.props;
                }
                else {
                    addedSignature.width = comp.data.width;
                    addedSignature.height = comp.data.height;
                }
                for (const page of this.file.pages) {
                    if (page.number !== compPage) {
                        addedSignature.number = page.number;
                        sign.pageNumber = page.number;
                        /** @type {?} */
                        const id = this.addSignatureComponent(addedSignature, sign, page);
                        this._signaturesHolderService.addId(sign.guid, id);
                    }
                }
            }
        }));
        copySignatureService.changesSignature.subscribe((/**
         * @param {?} copyChanges
         * @return {?}
         */
        (copyChanges) => {
            /** @type {?} */
            const componentRef = this.signatureComponents.get(copyChanges.id);
            if (componentRef) {
                /** @type {?} */
                const ids = this._signaturesHolderService.get(copyChanges.guid);
                for (const id of ids) {
                    /** @type {?} */
                    const compRef = this.signatureComponents.get(id);
                    if (compRef) {
                        // @ts-ignore
                        /** @type {?} */
                        const comp = ((/** @type {?} */ (compRef))).instance;
                        if (comp.id !== copyChanges.id) {
                            comp.data.width = copyChanges.width;
                            comp.data.height = copyChanges.height;
                            comp.data.position = copyChanges.position;
                        }
                    }
                }
            }
        }));
        removeSignatureService.removeSignature.subscribe((/**
         * @param {?} del
         * @return {?}
         */
        (del) => {
            /** @type {?} */
            const ids = this._signaturesHolderService.get(del.guid);
            for (const id of ids) {
                if (del.type === SignatureType.DIGITAL.id || del.id === id) {
                    /** @type {?} */
                    const componentRef = this.signatureComponents.get(id);
                    if (componentRef) {
                        componentRef.destroy();
                    }
                    this.signatureComponents.delete(id);
                    this._signaturesHolderService.remove(del.guid, id);
                }
            }
        }));
        configService.updatedConfig.subscribe((/**
         * @param {?} signatureConfig
         * @return {?}
         */
        (signatureConfig) => {
            this.signatureConfig = signatureConfig;
        }));
        uploadFilesService.uploadsChange.subscribe((/**
         * @param {?} uploads
         * @return {?}
         */
        (uploads) => {
            if (uploads) {
                /** @type {?} */
                let i;
                for (i = 0; i < uploads.length; i++) {
                    this._signatureService.upload(uploads.item(i), '', this.rewriteConfig, null).subscribe((/**
                     * @param {?} obj
                     * @return {?}
                     */
                    (obj) => {
                        this.fileWasDropped ? this.selectFile(obj.guid, '', '') : this.selectDir('');
                    }));
                }
            }
        }));
        pagePreloadService.checkPreload.subscribe((/**
         * @param {?} page
         * @return {?}
         */
        (page) => {
            if (this.preloadPageCountConfig !== 0) {
                for (let i = page; i < page + 2; i++) {
                    if (i > 0 && i <= this.countPages && !this.file.pages[i - 1].data) {
                        this.preloadPages(i, i);
                    }
                }
            }
        }));
        passwordService.passChange.subscribe((/**
         * @param {?} pass
         * @return {?}
         */
        (pass) => {
            this.selectFile(this.credentials.guid, pass, CommonModals.PasswordRequired);
        }));
        _selectSignatureService.selectSignature.subscribe((/**
         * @param {?} sign
         * @return {?}
         */
        (sign) => {
            this.selectSignature(sign);
        }));
        this.isDesktop = _windowService.isDesktop();
        _windowService.onResize.subscribe((/**
         * @param {?} w
         * @return {?}
         */
        (w) => {
            this.isDesktop = _windowService.isDesktop();
        }));
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        if (this.defaultDocumentConfig()) {
            this.isLoading = true;
            this.selectFile(this.defaultDocumentConfig(), "", "");
        }
    }
    /**
     * @return {?}
     */
    get rewriteConfig() {
        return this.signatureConfig ? this.signatureConfig.rewrite : true;
    }
    /**
     * @return {?}
     */
    get zoomConfig() {
        return false;
    }
    /**
     * @return {?}
     */
    get pageSelectorConfig() {
        return this.signatureConfig ? this.signatureConfig.pageSelector : true;
    }
    /**
     * @return {?}
     */
    get preloadPageCountConfig() {
        return this.signatureConfig ? this.signatureConfig.preloadPageCount : 0;
    }
    /**
     * @return {?}
     */
    get downloadConfig() {
        return this.signatureConfig ? this.signatureConfig.download : true;
    }
    /**
     * @return {?}
     */
    get downloadOriginalConfig() {
        return this.signatureConfig ? this.signatureConfig.downloadOriginal : true;
    }
    /**
     * @return {?}
     */
    get downloadSingedConfig() {
        return this.signatureConfig ? this.signatureConfig.downloadSigned : true;
    }
    /**
     * @return {?}
     */
    get uploadConfig() {
        return this.signatureConfig ? this.signatureConfig.upload : true;
    }
    /**
     * @private
     * @return {?}
     */
    defaultDocumentConfig() {
        return this.signatureConfig ? this.signatureConfig.defaultDocument : "";
    }
    /**
     * @return {?}
     */
    get printConfig() {
        return this.signatureConfig ? this.signatureConfig.print : true;
    }
    /**
     * @return {?}
     */
    get browseConfig() {
        return this.signatureConfig ? this.signatureConfig.browse : true;
    }
    /**
     * @return {?}
     */
    get htmlModeConfig() {
        return false;
    }
    /**
     * @return {?}
     */
    get enableRightClickConfig() {
        return this.signatureConfig ? this.signatureConfig.enableRightClick : true;
    }
    /**
     * @return {?}
     */
    get textSignatureConfig() {
        return this.signatureConfig ? this.signatureConfig.textSignature : true;
    }
    /**
     * @return {?}
     */
    get imageSignatureConfig() {
        return this.signatureConfig ? this.signatureConfig.imageSignature : true;
    }
    /**
     * @return {?}
     */
    get digitalSignatureConfig() {
        return this.signatureConfig ? this.signatureConfig.digitalSignature : true;
    }
    /**
     * @return {?}
     */
    get qrCodeSignatureConfig() {
        return this.signatureConfig ? this.signatureConfig.qrCodeSignature : true;
    }
    /**
     * @return {?}
     */
    get barCodeSignatureConfig() {
        return this.signatureConfig ? this.signatureConfig.barCodeSignature : true;
    }
    /**
     * @return {?}
     */
    get stampSignatureConfig() {
        return this.signatureConfig ? this.signatureConfig.stampSignature : true;
    }
    /**
     * @return {?}
     */
    get handSignatureConfig() {
        return this.signatureConfig ? this.signatureConfig.handSignature : true;
    }
    /**
     * @return {?}
     */
    get currentPage() {
        return this._navigateService.currentPage;
    }
    /**
     * @param {?} id
     * @return {?}
     */
    openModal(id) {
        this._modalService.open(id);
    }
    /**
     * @param {?} id
     * @return {?}
     */
    closeModal(id) {
        this._modalService.close(id);
    }
    /**
     * @param {?} $event
     * @return {?}
     */
    selectDir($event) {
        this._signatureService.loadFiles($event).subscribe((/**
         * @param {?} files
         * @return {?}
         */
        (files) => this.files = files || []));
    }
    /**
     * @param {?} $event
     * @param {?} password
     * @param {?} modalId
     * @return {?}
     */
    selectFile($event, password, modalId) {
        this.credentials = { guid: $event, password: password };
        this.file = null;
        this._signatureService.loadFile(this.credentials).subscribe((/**
         * @param {?} file
         * @return {?}
         */
        (file) => {
            this.file = file;
            this.formatDisabled = !this.file;
            if (file) {
                /** @type {?} */
                const preloadPageCount = this.preloadPageCountConfig;
                /** @type {?} */
                const countPages = file.pages ? file.pages.length : 0;
                if (preloadPageCount > 0) {
                    this.preloadPages(1, preloadPageCount > countPages ? countPages : preloadPageCount);
                }
                this._navigateService.countPages = countPages;
                this._navigateService.currentPage = 1;
                this.countPages = countPages;
                this.cleanSignatures();
            }
        }));
        if (modalId) {
            this._modalService.close(modalId);
        }
        this.clearData();
    }
    /**
     * @param {?} start
     * @param {?} end
     * @return {?}
     */
    preloadPages(start, end) {
        for (let i = start; i <= end; i++) {
            this._signatureService.loadPage(this.credentials, i).subscribe((/**
             * @param {?} page
             * @return {?}
             */
            (page) => {
                this.file.pages[i - 1] = page;
            }));
        }
    }
    /**
     * @param {?} $event
     * @return {?}
     */
    upload($event) {
        this._signatureService.upload(null, $event, this.rewriteConfig, null).subscribe((/**
         * @return {?}
         */
        () => {
            this.selectDir('');
        }));
    }
    /**
     * @return {?}
     */
    downloadFile() {
        if (this.formatDisabled)
            return;
        window.location.assign(this._signatureService.getDownloadUrl(this.credentials));
    }
    /**
     * @private
     * @return {?}
     */
    clearData() {
        if (!this.file || !this.file.pages) {
            return;
        }
        for (const page of this.file.pages) {
            page.data = null;
        }
    }
    /**
     * @param {?} $event
     * @return {?}
     */
    onRightClick($event) {
        return this.enableRightClickConfig;
    }
    /**
     * @param {?} id
     * @return {?}
     */
    getSignatureTypeConfig(id) {
        switch (id) {
            case SignatureType.TEXT.id:
                return this.textSignatureConfig;
            case SignatureType.IMAGE.id:
                return this.imageSignatureConfig;
            case SignatureType.DIGITAL.id:
                return this.digitalSignatureConfig;
            case SignatureType.QR_CODE.id:
                return this.qrCodeSignatureConfig;
            case SignatureType.BAR_CODE.id:
                return this.barCodeSignatureConfig;
            case SignatureType.STAMP.id:
                return this.stampSignatureConfig;
            case SignatureType.HAND.id:
                return this.handSignatureConfig;
        }
    }
    /**
     * @param {?} $event
     * @return {?}
     */
    dragOver($event) {
        $event.preventDefault();
        $event.stopPropagation();
    }
    /**
     * @param {?} $event
     * @return {?}
     */
    dropSignature($event) {
        $event.preventDefault();
        $event.stopPropagation();
        /** @type {?} */
        const position = Utils.getMousePosition($event);
        /** @type {?} */
        const currentPage = document.elementFromPoint(position.x, position.y);
        if (currentPage && $(currentPage).parent().parent() && $(currentPage).parent().parent().parent().hasClass("page")) {
            /** @type {?} */
            const documentPage = $(currentPage).parent().parent()[0];
            /** @type {?} */
            const left = position.x - $(documentPage).offset().left;
            /** @type {?} */
            const top = position.y - $(documentPage).offset().top;
            /** @type {?} */
            const currentPosition = new Position(left, top);
            /** @type {?} */
            const sign = this._dragSignatureService.sign;
            if (sign) {
                sign.position = currentPosition;
                this.selectSignature(sign);
                this._dragSignatureService.sign = null;
            }
        }
    }
    /**
     * @private
     * @param {?} sign
     * @return {?}
     */
    selectSignature(sign) {
        if (sign.type === SignatureType.DIGITAL.id) {
            /** @type {?} */
            const addedSignature = new AddedSignature();
            addedSignature.digitalProps = sign.digitalProps;
            addedSignature.guid = sign.guid;
            addedSignature.number = sign.pageNumber;
            for (const page of this.file.pages) {
                /** @type {?} */
                const id = this.addSignatureComponent(addedSignature, sign, page);
                this._signaturesHolderService.addId(sign.guid, id);
            }
            this.closeTab(sign.type);
        }
        else {
            this._signatureService.loadSignatureImage(sign).subscribe((/**
             * @param {?} signature
             * @return {?}
             */
            (signature) => {
                signature.number = sign.pageNumber;
                /** @type {?} */
                const pageModel = this.file.pages.find((/**
                 * @param {?} p
                 * @return {?}
                 */
                function (p) {
                    return p.number === sign.pageNumber;
                }));
                /** @type {?} */
                const id = this.addSignatureComponent(signature, sign, pageModel);
                this._signaturesHolderService.addId(sign.guid, id);
                this.closeTab(sign.type);
            }));
        }
    }
    /**
     * @private
     * @param {?} addedSignature
     * @param {?} sign
     * @param {?} page
     * @return {?}
     */
    addSignatureComponent(addedSignature, sign, page) {
        /** @type {?} */
        const dynamicDirective = this._hostingComponentsService.find(page.number);
        if (dynamicDirective) {
            /** @type {?} */
            const viewContainerRef = dynamicDirective.viewContainerRef;
            /** @type {?} */
            const selectSignature = this._addDynamicComponentService.addDynamicComponent(viewContainerRef, Signature);
            /** @type {?} */
            const id = this.signatureComponents.size + 1;
            if (addedSignature.width >= page.width) {
                addedSignature.width = page.width / 2;
            }
            if (addedSignature.height >= page.height) {
                addedSignature.height = page.height / 2;
            }
            ((/** @type {?} */ (selectSignature.instance))).id = id;
            ((/** @type {?} */ (selectSignature.instance))).data = addedSignature;
            ((/** @type {?} */ (selectSignature.instance))).position = sign.position;
            ((/** @type {?} */ (selectSignature.instance))).type = sign.type;
            ((/** @type {?} */ (selectSignature.instance))).pageWidth = page.width;
            ((/** @type {?} */ (selectSignature.instance))).pageHeight = page.height;
            this.signatureComponents.set(id, selectSignature);
            this._activeSignatureService.changeActive(id);
            return id;
        }
        return null;
    }
    /**
     * @private
     * @param {?} type
     * @return {?}
     */
    closeTab(type) {
        this._signatureTabActivationService.changeActiveTab(type);
    }
    /**
     * @param {?} $event
     * @return {?}
     */
    hideAll($event) {
        if (($event.target.parentElement && $event.target.parentElement.attributes['name'] &&
            $event.target.parentElement.attributes['name'].value === 'button') ||
            ($event.target.parentElement &&
                $event.target.parentElement.parentElement &&
                $event.target.parentElement.parentElement.attributes['name'] &&
                $event.target.parentElement.parentElement.attributes['name'].value === 'button') ||
            ($event.target.parentElement &&
                $event.target.parentElement.parentElement &&
                $event.target.parentElement.parentElement.parentElement &&
                $event.target.parentElement.parentElement.parentElement.parentElement &&
                $event.target.parentElement.parentElement.parentElement.parentElement.attributes['name'] &&
                $event.target.parentElement.parentElement.parentElement.parentElement.attributes['name'].value === 'button')) {
            return;
        }
        this._onCloseService.close(true);
    }
    /**
     * @param {?} $event
     * @return {?}
     */
    newSign($event) {
        if (SignatureType.HAND.id === $event) {
            this._modalService.open(CommonModals.DrawHandSignature);
            this._signatureTabActivationService.changeActiveTab(SignatureType.HAND.id);
        }
        else if (SignatureType.STAMP.id === $event) {
            this._modalService.open(CommonModals.DrawStampSignature);
            this._signatureTabActivationService.changeActiveTab(SignatureType.STAMP.id);
        }
        else if (SignatureType.TEXT.id === $event) {
            this.addTextSign();
            this._signatureTabActivationService.changeActiveTab(SignatureType.TEXT.id);
        }
    }
    /**
     * @private
     * @return {?}
     */
    addTextSign() {
        /** @type {?} */
        const signature = new AddedSignature();
        signature.props = SignatureProps.getDefault();
        signature.guid = DraggableSignature.TEMP;
        /** @type {?} */
        const sign = new DraggableSignature();
        sign.guid = DraggableSignature.TEMP;
        sign.position = new Position(0, 0);
        sign.type = SignatureType.TEXT.id;
        /** @type {?} */
        const pageNumber = this._navigateService.currentPage;
        signature.number = pageNumber;
        sign.pageNumber = pageNumber;
        /** @type {?} */
        const pageModel = this.file.pages.find((/**
         * @param {?} p
         * @return {?}
         */
        function (p) {
            return p.number === pageNumber;
        }));
        /** @type {?} */
        const id = this.addSignatureComponent(signature, sign, pageModel);
        this._signaturesHolderService.addId(sign.guid, id);
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.cleanSignatures();
    }
    /**
     * @private
     * @return {?}
     */
    cleanSignatures() {
        for (const componentRef of this.signatureComponents.values()) {
            componentRef.destroy();
        }
        this.signatureComponents = new Map();
        this._signaturesHolderService.clear();
    }
    /**
     * @return {?}
     */
    sign() {
        /** @type {?} */
        const signatures = this.prepareSignaturesData();
        this._signatureService.sign(this.credentials, signatures).subscribe((/**
         * @param {?} ret
         * @return {?}
         */
        (ret) => {
            this._modalService.open(CommonModals.OperationSuccess);
            this.selectFile(ret.guid, null, CommonModals.OperationSuccess);
        }));
    }
    /**
     * @private
     * @return {?}
     */
    prepareSignaturesData() {
        /** @type {?} */
        const signatures = [];
        for (const ids of this._signaturesHolderService.values()) {
            /** @type {?} */
            const id = ids.pop();
            /** @type {?} */
            const componentRef = this.signatureComponents.get(id);
            // @ts-ignore
            /** @type {?} */
            const sign = ((/** @type {?} */ (componentRef))).instance;
            /** @type {?} */
            const data = sign.data;
            /** @type {?} */
            const position = sign.position;
            /** @type {?} */
            const type = sign.type;
            if (DraggableSignature.TEMP !== data.guid) {
                signatures.push(SignatureData.map(data, type, position));
            }
        }
        return signatures;
    }
    /**
     * @return {?}
     */
    isPdf() {
        if (this.file) {
            if (FileUtil.find(this.file.guid, false).format === "Portable Document Format") {
                return true;
            }
        }
        return false;
    }
    /**
     * @return {?}
     */
    codesConfig() {
        return this.getSignatureTypeConfig(SignatureType.BAR_CODE.id) || this.getSignatureTypeConfig(SignatureType.QR_CODE.id);
    }
    /**
     * @param {?} id
     * @return {?}
     */
    isVisible(id) {
        /** @type {?} */
        const notCode = id !== SignatureType.BAR_CODE.id && id !== SignatureType.QR_CODE.id;
        return this.getSignatureTypeConfig(id) && (this.isDesktop || notCode);
    }
    /**
     * @param {?} $event
     * @return {?}
     */
    activeTab($event) {
        this.activeSignatureTab = $event;
    }
    /**
     * @param {?} $event
     * @return {?}
     */
    fileDropped($event) {
        this.fileWasDropped = $event;
    }
}
SignatureAppComponent.decorators = [
    { type: Component, args: [{
                selector: 'gd-signature',
                template: "<gd-loading-mask [loadingMask]=\"isLoading\"></gd-loading-mask>\n<div class=\"wrapper\" (contextmenu)=\"onRightClick($event)\" (click)=\"hideAll($event)\">\n  <gd-tabbed-toolbars [logo]=\"'signature'\" [icon]=\"'pen-square'\">\n    <gd-tabs>\n      <gd-tab [tabTitle]=\"'File'\" [icon]=\"'folder-open'\" [id]=\"'1'\" [active]=\"true\">\n        <div class=\"toolbar-panel\">\n          <gd-button [icon]=\"'folder-open'\" [tooltip]=\"'Browse files'\" (click)=\"openModal(browseFilesModal)\"\n                     *ngIf=\"browseConfig\"></gd-button>\n\n          <gd-button [disabled]=\"formatDisabled\" [icon]=\"'download'\" [tooltip]=\"'Download'\"\n                     (click)=\"downloadFile()\" *ngIf=\"downloadConfig\"></gd-button>\n          <gd-button [disabled]=\"formatDisabled\" [icon]=\"'save'\" [tooltip]=\"'Save'\" (click)=\"sign()\"></gd-button>\n\n        </div>\n      </gd-tab>\n      <gd-tab [tabTitle]=\"'Signatures'\" [icon]=\"'signature'\" [id]=\"'2'\">\n        <div class=\"toolbar-panel\">\n          <div *ngFor=\"let signatureType of signatureTypes\">\n            <gd-signature-tab [disabled]=\"!file\" *ngIf=\"isVisible(signatureType.id)\"\n                              [icon]=\"signatureType.icon\" (activeTab)=\"activeTab($event)\"\n                              [id]=\"signatureType.id\" [tooltip]=\"signatureType.name\">\n            </gd-signature-tab>\n          </div>\n        </div>\n      </gd-tab>\n      <gd-tab [tabTitle]=\"''\" [icon]=\"'qrcode'\" [id]=\"'3'\" *ngIf=\"!isDesktop && codesConfig()\">\n        <div class=\"toolbar-panel\">\n          <div *ngFor=\"let signatureType of signatureTypeCodes\">\n            <gd-signature-tab [disabled]=\"!file\" *ngIf=\"getSignatureTypeConfig(signatureType.id)\"\n                              [icon]=\"signatureType.icon\" (activeTab)=\"activeTab($event)\"\n                              [id]=\"signatureType.id\" [tooltip]=\"signatureType.name\">\n            </gd-signature-tab>\n          </div>\n        </div>\n      </gd-tab>\n    </gd-tabs>\n  </gd-tabbed-toolbars>\n  <gd-signature-left-panel *ngIf=\"activeSignatureTab\" [rewrite]=\"rewriteConfig\" (newSignatureEvent)=\"newSign($event)\"\n                           [isPdf]=\"isPdf()\" [id]=\"activeSignatureTab\">\n  </gd-signature-left-panel>\n  <div class=\"doc-panel\" *ngIf=\"file\">\n    <gd-document (drop)=\"dropSignature($event)\" (dragover)=\"dragOver($event)\" class=\"gd-document\" *ngIf=\"file\"\n                 [file]=\"file\" [mode]=\"htmlModeConfig\" gdScrollable\n                 [preloadPageCount]=\"preloadPageCountConfig\" gdRenderPrint [htmlMode]=\"htmlModeConfig\"></gd-document>\n  </div>\n\n  <gd-init-state [icon]=\"'signature'\" [text]=\"'Drop file here to upload'\" *ngIf=\"!file\" (fileDropped)=\"fileDropped($event)\">\n    Click <fa-icon [icon]=\"['fas','folder-open']\"></fa-icon> to open file<br>\n    Or drop file here\n  </gd-init-state>\n\n  <gd-browse-files-modal (urlForUpload)=\"upload($event)\" [files]=\"files\" (selectedDirectory)=\"selectDir($event)\"\n                         (selectedFileGuid)=\"selectFile($event, null, browseFilesModal)\"\n                         [uploadConfig]=\"uploadConfig\"></gd-browse-files-modal>\n\n  <gd-hand-modal></gd-hand-modal>\n  <gd-stamp-modal></gd-stamp-modal>\n  <gd-error-modal></gd-error-modal>\n  <gd-password-required></gd-password-required>\n  <gd-success-modal></gd-success-modal>\n</div>\n",
                styles: ["@import url(https://fonts.googleapis.com/css?family=Open+Sans&display=swap);:host *{font-family:'Open Sans',Arial,Helvetica,sans-serif}::ng-deep .page{position:relative}::ng-deep .gd-page-image{width:unset;height:unset}::ng-deep .top-panel{align-content:flex-start}.wrapper{align-items:stretch;height:100%;width:100%;position:fixed;top:0;bottom:0;left:0;right:0}.doc-panel{display:flex;height:inherit}.gd-document{width:100%;height:calc(100% - 90px)}.toolbar-panel{width:100%;display:flex;align-items:center}::ng-deep .button{color:#3e4e5a!important}@media (max-width:1037px){::ng-deep .panzoom{justify-content:unset!important}::ng-deep .left-panel{width:100%!important;overflow:auto!important}::ng-deep .logo ::ng-deep .icon{font-size:24px!important}::ng-deep .top-panel{height:120px!important}}"]
            }] }
];
/** @nocollapse */
SignatureAppComponent.ctorParameters = () => [
    { type: SignatureService },
    { type: ModalService },
    { type: SignatureConfigService },
    { type: UploadFilesService },
    { type: NavigateService },
    { type: ZoomService },
    { type: PagePreloadService },
    { type: RenderPrintService },
    { type: PasswordService },
    { type: WindowService },
    { type: SelectSignatureService },
    { type: SignatureTabActivatorService },
    { type: HostingDynamicComponentService },
    { type: AddDynamicComponentService },
    { type: DragSignatureService },
    { type: OnCloseService },
    { type: RemoveSignatureService },
    { type: ActiveSignatureService },
    { type: ExceptionMessageService },
    { type: SignaturesHolderService },
    { type: TabActivatorService },
    { type: CopySignatureService }
];
if (false) {
    /** @type {?} */
    SignatureAppComponent.prototype.title;
    /** @type {?} */
    SignatureAppComponent.prototype.files;
    /** @type {?} */
    SignatureAppComponent.prototype.file;
    /** @type {?} */
    SignatureAppComponent.prototype.signatureConfig;
    /** @type {?} */
    SignatureAppComponent.prototype.countPages;
    /** @type {?} */
    SignatureAppComponent.prototype.formatDisabled;
    /** @type {?} */
    SignatureAppComponent.prototype.credentials;
    /** @type {?} */
    SignatureAppComponent.prototype.browseFilesModal;
    /** @type {?} */
    SignatureAppComponent.prototype.isDesktop;
    /** @type {?} */
    SignatureAppComponent.prototype.signatureTypes;
    /** @type {?} */
    SignatureAppComponent.prototype.signatureTypeCodes;
    /** @type {?} */
    SignatureAppComponent.prototype.signatureComponents;
    /** @type {?} */
    SignatureAppComponent.prototype.activeSignatureTab;
    /** @type {?} */
    SignatureAppComponent.prototype.isLoading;
    /** @type {?} */
    SignatureAppComponent.prototype.fileWasDropped;
    /**
     * @type {?}
     * @private
     */
    SignatureAppComponent.prototype._signatureService;
    /**
     * @type {?}
     * @private
     */
    SignatureAppComponent.prototype._modalService;
    /**
     * @type {?}
     * @private
     */
    SignatureAppComponent.prototype._navigateService;
    /**
     * @type {?}
     * @private
     */
    SignatureAppComponent.prototype._zoomService;
    /**
     * @type {?}
     * @private
     */
    SignatureAppComponent.prototype._renderPrintService;
    /**
     * @type {?}
     * @private
     */
    SignatureAppComponent.prototype._windowService;
    /**
     * @type {?}
     * @private
     */
    SignatureAppComponent.prototype._selectSignatureService;
    /**
     * @type {?}
     * @private
     */
    SignatureAppComponent.prototype._signatureTabActivationService;
    /**
     * @type {?}
     * @private
     */
    SignatureAppComponent.prototype._hostingComponentsService;
    /**
     * @type {?}
     * @private
     */
    SignatureAppComponent.prototype._addDynamicComponentService;
    /**
     * @type {?}
     * @private
     */
    SignatureAppComponent.prototype._dragSignatureService;
    /**
     * @type {?}
     * @private
     */
    SignatureAppComponent.prototype._onCloseService;
    /**
     * @type {?}
     * @private
     */
    SignatureAppComponent.prototype._activeSignatureService;
    /**
     * @type {?}
     * @private
     */
    SignatureAppComponent.prototype._excMessageService;
    /**
     * @type {?}
     * @private
     */
    SignatureAppComponent.prototype._signaturesHolderService;
    /**
     * @type {?}
     * @private
     */
    SignatureAppComponent.prototype._tabActivatorService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2lnbmF0dXJlLWFwcC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ3JvdXBkb2NzLmV4YW1wbGVzLmFuZ3VsYXIvc2lnbmF0dXJlLyIsInNvdXJjZXMiOlsibGliL3NpZ25hdHVyZS1hcHAuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFrQyxNQUFNLGVBQWUsQ0FBQztBQUN6RSxPQUFPLEVBQUMsZ0JBQWdCLEVBQUMsTUFBTSxxQkFBcUIsQ0FBQztBQUNyRCxPQUFPLEVBR0wsWUFBWSxFQUNaLGtCQUFrQixFQUNsQixlQUFlLEVBQ2Ysa0JBQWtCLEVBRWxCLFdBQVcsRUFDWCxrQkFBa0IsRUFDbEIsUUFBUSxFQUNSLGVBQWUsRUFFZixZQUFZLEVBQ1osOEJBQThCLEVBQzlCLDBCQUEwQixFQUMxQixjQUFjLEVBQ2QsdUJBQXVCLEVBQ3ZCLGFBQWEsRUFDYixLQUFLLEVBQ0wsbUJBQW1CLEVBQ3BCLE1BQU0sK0NBQStDLENBQUM7QUFFdkQsT0FBTyxFQUFDLHNCQUFzQixFQUFDLE1BQU0sNEJBQTRCLENBQUM7QUFDbEUsT0FBTyxFQUNMLGNBQWMsRUFHZCxrQkFBa0IsRUFDbEIsUUFBUSxFQUNSLGFBQWEsRUFBRSxjQUFjLEVBQzdCLGFBQWEsRUFDZCxNQUFNLG9CQUFvQixDQUFDO0FBQzVCLE9BQU8sRUFBQyxzQkFBc0IsRUFBQyxNQUFNLDRCQUE0QixDQUFDO0FBQ2xFLE9BQU8sRUFBQyxTQUFTLEVBQUMsTUFBTSxpQ0FBaUMsQ0FBQztBQUMxRCxPQUFPLEVBQUMsb0JBQW9CLEVBQUMsTUFBTSwwQkFBMEIsQ0FBQztBQUM5RCxPQUFPLEVBQUMsc0JBQXNCLEVBQUMsTUFBTSw0QkFBNEIsQ0FBQztBQUNsRSxPQUFPLEtBQUssTUFBTSxNQUFNLFFBQVEsQ0FBQztBQUNqQyxPQUFPLEVBQUMsc0JBQXNCLEVBQUMsTUFBTSw0QkFBNEIsQ0FBQztBQUNsRSxPQUFPLEVBQUMsdUJB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QUFtQzs7Ozs7SUFHbkMsaURBQXlDOzs7OztJQUN6Qyw2Q0FBaUM7Ozs7O0lBRWpDLG9EQUErQzs7Ozs7SUFFL0MsK0NBQXFDOzs7OztJQUNyQyx3REFBdUQ7Ozs7O0lBQ3ZELCtEQUFvRTs7Ozs7SUFDcEUsMERBQWlFOzs7OztJQUNqRSw0REFBK0Q7Ozs7O0lBQy9ELHNEQUFtRDs7Ozs7SUFDbkQsZ0RBQXVDOzs7OztJQUV2Qyx3REFBdUQ7Ozs7O0lBQ3ZELG1EQUFtRDs7Ozs7SUFDbkQseURBQXlEOzs7OztJQUN6RCxxREFBaUQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgQ29tcG9uZW50UmVmLCBPbkRlc3Ryb3ksIE9uSW5pdH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge1NpZ25hdHVyZVNlcnZpY2V9IGZyb20gXCIuL3NpZ25hdHVyZS5zZXJ2aWNlXCI7XG5pbXBvcnQge1xuICBGaWxlRGVzY3JpcHRpb24sXG4gIEZpbGVNb2RlbCxcbiAgTW9kYWxTZXJ2aWNlLFxuICBVcGxvYWRGaWxlc1NlcnZpY2UsXG4gIE5hdmlnYXRlU2VydmljZSxcbiAgUGFnZVByZWxvYWRTZXJ2aWNlLFxuICBQYWdlTW9kZWwsXG4gIFpvb21TZXJ2aWNlLFxuICBSZW5kZXJQcmludFNlcnZpY2UsXG4gIEZpbGVVdGlsLFxuICBQYXNzd29yZFNlcnZpY2UsXG4gIEZpbGVDcmVkZW50aWFscyxcbiAgQ29tbW9uTW9kYWxzLFxuICBIb3N0aW5nRHluYW1pY0NvbXBvbmVudFNlcnZpY2UsXG4gIEFkZER5bmFtaWNDb21wb25lbnRTZXJ2aWNlLFxuICBPbkNsb3NlU2VydmljZSxcbiAgRXhjZXB0aW9uTWVzc2FnZVNlcnZpY2UsXG4gIFdpbmRvd1NlcnZpY2UsXG4gIFV0aWxzLFxuICBUYWJBY3RpdmF0b3JTZXJ2aWNlXG59IGZyb20gXCJAZ3JvdXBkb2NzLmV4YW1wbGVzLmFuZ3VsYXIvY29tbW9uLWNvbXBvbmVudHNcIjtcbmltcG9ydCB7U2lnbmF0dXJlQ29uZmlnfSBmcm9tIFwiLi9zaWduYXR1cmUtY29uZmlnXCI7XG5pbXBvcnQge1NpZ25hdHVyZUNvbmZpZ1NlcnZpY2V9IGZyb20gXCIuL3NpZ25hdHVyZS1jb25maWcuc2VydmljZVwiO1xuaW1wb3J0IHtcbiAgQWRkZWRTaWduYXR1cmUsXG4gIENvcHlDaGFuZ2VzLFxuICBDb3B5U2lnbixcbiAgRHJhZ2dhYmxlU2lnbmF0dXJlLFxuICBQb3NpdGlvbiwgUmVtb3ZlU2lnbixcbiAgU2lnbmF0dXJlRGF0YSwgU2lnbmF0dXJlUHJvcHMsXG4gIFNpZ25hdHVyZVR5cGVcbn0gZnJvbSBcIi4vc2lnbmF0dXJlLW1vZGVsc1wiO1xuaW1wb3J0IHtTZWxlY3RTaWduYXR1cmVTZXJ2aWNlfSBmcm9tIFwiLi9zZWxlY3Qtc2lnbmF0dXJlLnNlcnZpY2VcIjtcbmltcG9ydCB7U2lnbmF0dXJlfSBmcm9tIFwiLi9zaWduYXR1cmUvc2lnbmF0dXJlLmNvbXBvbmVudFwiO1xuaW1wb3J0IHtEcmFnU2lnbmF0dXJlU2VydmljZX0gZnJvbSBcIi4vZHJhZy1zaWduYXR1cmUuc2VydmljZVwiO1xuaW1wb3J0IHtSZW1vdmVTaWduYXR1cmVTZXJ2aWNlfSBmcm9tIFwiLi9yZW1vdmUtc2lnbmF0dXJlLnNlcnZpY2VcIjtcbmltcG9ydCAqIGFzIGpxdWVyeSBmcm9tICdqcXVlcnknO1xuaW1wb3J0IHtBY3RpdmVTaWduYXR1cmVTZXJ2aWNlfSBmcm9tIFwiLi9hY3RpdmUtc2lnbmF0dXJlLnNlcnZpY2VcIjtcbmltcG9ydCB7U2lnbmF0dXJlc0hvbGRlclNlcnZpY2V9IGZyb20gXCIuL3NpZ25hdHVyZXMtaG9sZGVyLnNlcnZpY2VcIjtcbmltcG9ydCB7U2lnbmF0dXJlVGFiQWN0aXZhdG9yU2VydmljZX0gZnJvbSBcIi4vc2lnbmF0dXJlLXRhYi1hY3RpdmF0b3Iuc2VydmljZVwiO1xuaW1wb3J0ICdoYW1tZXJqcyc7XG5pbXBvcnQge0NvcHlTaWduYXR1cmVTZXJ2aWNlfSBmcm9tIFwiLi9jb3B5LXNpZ25hdHVyZS5zZXJ2aWNlXCI7XG5cbmNvbnN0ICQgPSBqcXVlcnk7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2dkLXNpZ25hdHVyZScsXG4gIHRlbXBsYXRlVXJsOiAnLi9zaWduYXR1cmUtYXBwLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vc2lnbmF0dXJlLWFwcC5jb21wb25lbnQubGVzcyddXG59KVxuZXhwb3J0IGNsYXNzIFNpZ25hdHVyZUFwcENvbXBvbmVudCBpbXBsZW1lbnRzIE9uRGVzdHJveSwgT25Jbml0IHtcbiAgdGl0bGUgPSAnc2lnbmF0dXJlJztcbiAgZmlsZXM6IEZpbGVNb2RlbFtdID0gW107XG4gIGZpbGU6IEZpbGVEZXNjcmlwdGlvbjtcbiAgc2lnbmF0dXJlQ29uZmlnOiBTaWduYXR1cmVDb25maWc7XG4gIGNvdW50UGFnZXMgPSAwO1xuICBmb3JtYXREaXNhYmxlZCA9ICF0aGlzLmZpbGU7XG4gIGNyZWRlbnRpYWxzOiBGaWxlQ3JlZGVudGlhbHM7XG4gIGJyb3dzZUZpbGVzTW9kYWwgPSBDb21tb25Nb2RhbHMuQnJvd3NlRmlsZXM7XG4gIGlzRGVza3RvcDogYm9vbGVhbjtcbiAgc2lnbmF0dXJlVHlwZXMgPSBbXG4gICAgU2lnbmF0dXJlVHlwZS5URVhULFxuICAgIFNpZ25hdHVyZVR5cGUuSU1BR0UsXG4gICAgU2lnbmF0dXJlVHlwZS5ESUdJVEFMLFxuICAgIFNpZ25hdHVyZVR5cGUuUVJfQ09ERSxcbiAgICBTaWduYXR1cmVUeXBlLkJBUl9DT0RFLFxuICAgIFNpZ25hdHVyZVR5cGUuU1RBTVAsXG4gICAgU2lnbmF0dXJlVHlwZS5IQU5ELFxuICBdO1xuICBzaWduYXR1cmVUeXBlQ29kZXMgPSBbXG4gICAgU2lnbmF0dXJlVHlwZS5RUl9DT0RFLFxuICAgIFNpZ25hdHVyZVR5cGUuQkFSX0NPREUsXG4gIF07XG5cbiAgc2lnbmF0dXJlQ29tcG9uZW50cyA9IG5ldyBNYXA8bnVtYmVyLCBDb21wb25lbnRSZWY8YW55Pj4oKTtcbiAgYWN0aXZlU2lnbmF0dXJlVGFiOiBzdHJpbmc7XG4gIGlzTG9hZGluZzogYm9vbGVhbjtcbiAgZmlsZVdhc0Ryb3BwZWQgPSBmYWxzZTtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9zaWduYXR1cmVTZXJ2aWNlOiBTaWduYXR1cmVTZXJ2aWNlLFxuICAgICAgICAgICAgICBwcml2YXRlIF9tb2RhbFNlcnZpY2U6IE1vZGFsU2VydmljZSxcbiAgICAgICAgICAgICAgY29uZmlnU2VydmljZTogU2lnbmF0dXJlQ29uZmlnU2VydmljZSxcbiAgICAgICAgICAgICAgdXBsb2FkRmlsZXNTZXJ2aWNlOiBVcGxvYWRGaWxlc1NlcnZpY2UsXG4gICAgICAgICAgICAgIHByaXZhdGUgX25hdmlnYXRlU2VydmljZTogTmF2aWdhdGVTZXJ2aWNlLFxuICAgICAgICAgICAgICBwcml2YXRlIF96b29tU2VydmljZTogWm9vbVNlcnZpY2UsXG4gICAgICAgICAgICAgIHBhZ2VQcmVsb2FkU2VydmljZTogUGFnZVByZWxvYWRTZXJ2aWNlLFxuICAgICAgICAgICAgICBwcml2YXRlIF9yZW5kZXJQcmludFNlcnZpY2U6IFJlbmRlclByaW50U2VydmljZSxcbiAgICAgICAgICAgICAgcGFzc3dvcmRTZXJ2aWNlOiBQYXNzd29yZFNlcnZpY2UsXG4gICAgICAgICAgICAgIHByaXZhdGUgX3dpbmRvd1NlcnZpY2U6IFdpbmRvd1NlcnZpY2UsXG4gICAgICAgICAgICAgIHByaXZhdGUgX3NlbGVjdFNpZ25hdHVyZVNlcnZpY2U6IFNlbGVjdFNpZ25hdHVyZVNlcnZpY2UsXG4gICAgICAgICAgICAgIHByaXZhdGUgX3NpZ25hdHVyZVRhYkFjdGl2YXRpb25TZXJ2aWNlOiBTaWduYXR1cmVUYWJBY3RpdmF0b3JTZXJ2aWNlLFxuICAgICAgICAgICAgICBwcml2YXRlIF9ob3N0aW5nQ29tcG9uZW50c1NlcnZpY2U6IEhvc3RpbmdEeW5hbWljQ29tcG9uZW50U2VydmljZSxcbiAgICAgICAgICAgICAgcHJpdmF0ZSBfYWRkRHluYW1pY0NvbXBvbmVudFNlcnZpY2U6IEFkZER5bmFtaWNDb21wb25lbnRTZXJ2aWNlLFxuICAgICAgICAgICAgICBwcml2YXRlIF9kcmFnU2lnbmF0dXJlU2VydmljZTogRHJhZ1NpZ25hdHVyZVNlcnZpY2UsXG4gICAgICAgICAgICAgIHByaXZhdGUgX29uQ2xvc2VTZXJ2aWNlOiBPbkNsb3NlU2VydmljZSxcbiAgICAgICAgICAgICAgcmVtb3ZlU2lnbmF0dXJlU2VydmljZTogUmVtb3ZlU2lnbmF0dXJlU2VydmljZSxcbiAgICAgICAgICAgICAgcHJpdmF0ZSBfYWN0aXZlU2lnbmF0dXJlU2VydmljZTogQWN0aXZlU2lnbmF0dXJlU2VydmljZSxcbiAgICAgICAgICAgICAgcHJpdmF0ZSBfZXhjTWVzc2FnZVNlcnZpY2U6IEV4Y2VwdGlvbk1lc3NhZ2VTZXJ2aWNlLFxuICAgICAgICAgICAgICBwcml2YXRlIF9zaWduYXR1cmVzSG9sZGVyU2VydmljZTogU2lnbmF0dXJlc0hvbGRlclNlcnZpY2UsXG4gICAgICAgICAgICAgIHByaXZhdGUgX3RhYkFjdGl2YXRvclNlcnZpY2U6IFRhYkFjdGl2YXRvclNlcnZpY2UsXG4gICAgICAgICAgICAgIGNvcHlTaWduYXR1cmVTZXJ2aWNlOiBDb3B5U2lnbmF0dXJlU2VydmljZSkge1xuXG4gICAgdGhpcy5fdGFiQWN0aXZhdG9yU2VydmljZS5hY3RpdmVUYWJDaGFuZ2Uuc3Vic2NyaWJlKCh0YWJJZDogc3RyaW5nKSA9PiB7XG4gICAgICBpZiAodGFiSWQgPT09ICcxJykge1xuICAgICAgICBpZiAodGhpcy5hY3RpdmVTaWduYXR1cmVUYWIpIHtcbiAgICAgICAgICB0aGlzLl9zaWduYXR1cmVUYWJBY3RpdmF0aW9uU2VydmljZS5jaGFuZ2VBY3RpdmVUYWIodGhpcy5hY3RpdmVTaWduYXR1cmVUYWIpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuYWN0aXZlU2lnbmF0dXJlVGFiID0gbnVsbDtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIGNvcHlTaWduYXR1cmVTZXJ2aWNlLmNvcHlTaWduYXR1cmUuc3Vic2NyaWJlKChjb3B5U2lnbjogQ29weVNpZ24pID0+IHtcbiAgICAgIGNvbnN0IGNvbXBvbmVudFJlZiA9IHRoaXMuc2lnbmF0dXJlQ29tcG9uZW50cy5nZXQoY29weVNpZ24uaWQpO1xuICAgICAgaWYgKGNvbXBvbmVudFJlZikge1xuICAgICAgICAvLyBAdHMtaWdub3JlXG4gICAgICAgIGNvbnN0IGNvbXAgPSAoPFNpZ25hdHVyZT5jb21wb25lbnRSZWYpLmluc3RhbmNlO1xuICAgICAgICBjb25zdCBjb21wUGFnZSA9IGNvbXAuZGF0YS5udW1iZXI7XG4gICAgICAgIGNvbnN0IHNpZ24gPSBuZXcgRHJhZ2dhYmxlU2lnbmF0dXJlKCk7XG4gICAgICAgIHNpZ24udHlwZSA9IGNvbXAuc2lnbmF0dXJlVHlwZTtcbiAgICAgICAgc2lnbi5ndWlkID0gY29weVNpZ24uZ3VpZDtcbiAgICAgICAgc2lnbi5wb3NpdGlvbiA9IGNvbXAucG9zaXRpb247XG4gICAgICAgIGNvbnN0IGFkZGVkU2lnbmF0dXJlID0gbmV3IEFkZGVkU2lnbmF0dXJlKCk7XG4gICAgICAgIGFkZGVkU2lnbmF0dXJlLmd1aWQgPSBjb3B5U2lnbi5ndWlkO1xuICAgICAgICBhZGRlZFNpZ25hdHVyZS5kYXRhID0gY29tcC5kYXRhLmRhdGE7XG4gICAgICAgIGlmIChjb21wLmRhdGEucHJvcHMpIHtcbiAgICAgICAgICBhZGRlZFNpZ25hdHVyZS5wcm9wcyA9IGNvbXAuZGF0YS5wcm9wcztcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBhZGRlZFNpZ25hdHVyZS53aWR0aCA9IGNvbXAuZGF0YS53aWR0aDtcbiAgICAgICAgICBhZGRlZFNpZ25hdHVyZS5oZWlnaHQgPSBjb21wLmRhdGEuaGVpZ2h0O1xuICAgICAgICB9XG4gICAgICAgIGZvciAoY29uc3QgcGFnZSBvZiB0aGlzLmZpbGUucGFnZXMpIHtcbiAgICAgICAgICBpZiAocGFnZS5udW1iZXIgIT09IGNvbXBQYWdlKSB7XG4gICAgICAgICAgICBhZGRlZFNpZ25hdHVyZS5udW1iZXIgPSBwYWdlLm51bWJlcjtcbiAgICAgICAgICAgIHNpZ24ucGFnZU51bWJlciA9IHBhZ2UubnVtYmVyO1xuICAgICAgICAgICAgY29uc3QgaWQgPSB0aGlzLmFkZFNpZ25hdHVyZUNvbXBvbmVudChhZGRlZFNpZ25hdHVyZSwgc2lnbiwgcGFnZSk7XG4gICAgICAgICAgICB0aGlzLl9zaWduYXR1cmVzSG9sZGVyU2VydmljZS5hZGRJZChzaWduLmd1aWQsIGlkKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KTtcblxuICAgIGNvcHlTaWduYXR1cmVTZXJ2aWNlLmNoYW5nZXNTaWduYXR1cmUuc3Vic2NyaWJlKChjb3B5Q2hhbmdlczogQ29weUNoYW5nZXMpID0+IHtcbiAgICAgIGNvbnN0IGNvbXBvbmVudFJlZiA9IHRoaXMuc2lnbmF0dXJlQ29tcG9uZW50cy5nZXQoY29weUNoYW5nZXMuaWQpO1xuICAgICAgaWYgKGNvbXBvbmVudFJlZikge1xuICAgICAgICBjb25zdCBpZHMgPSB0aGlzLl9zaWduYXR1cmVzSG9sZGVyU2VydmljZS5nZXQoY29weUNoYW5nZXMuZ3VpZCk7XG4gICAgICAgIGZvciAoY29uc3QgaWQgb2YgaWRzKSB7XG4gICAgICAgICAgY29uc3QgY29tcFJlZiA9IHRoaXMuc2lnbmF0dXJlQ29tcG9uZW50cy5nZXQoaWQpO1xuICAgICAgICAgIGlmIChjb21wUmVmKSB7XG4gICAgICAgICAgICAvLyBAdHMtaWdub3JlXG4gICAgICAgICAgICBjb25zdCBjb21wID0gKDxTaWduYXR1cmU+Y29tcFJlZikuaW5zdGFuY2U7XG4gICAgICAgICAgICBpZiAoY29tcC5pZCAhPT0gY29weUNoYW5nZXMuaWQpIHtcbiAgICAgICAgICAgICAgY29tcC5kYXRhLndpZHRoID0gY29weUNoYW5nZXMud2lkdGg7XG4gICAgICAgICAgICAgIGNvbXAuZGF0YS5oZWlnaHQgPSBjb3B5Q2hhbmdlcy5oZWlnaHQ7XG4gICAgICAgICAgICAgIGNvbXAuZGF0YS5wb3NpdGlvbiA9IGNvcHlDaGFuZ2VzLnBvc2l0aW9uO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pO1xuXG4gICAgcmVtb3ZlU2lnbmF0dXJlU2VydmljZS5yZW1vdmVTaWduYXR1cmUuc3Vic2NyaWJlKChkZWw6IFJlbW92ZVNpZ24pID0+IHtcbiAgICAgIGNvbnN0IGlkcyA9IHRoaXMuX3NpZ25hdHVyZXNIb2xkZXJTZXJ2aWNlLmdldChkZWwuZ3VpZCk7XG4gICAgICBmb3IgKGNvbnN0IGlkIG9mIGlkcykge1xuICAgICAgICBpZiAoZGVsLnR5cGUgPT09IFNpZ25hdHVyZVR5cGUuRElHSVRBTC5pZCB8fCBkZWwuaWQgPT09IGlkKSB7XG4gICAgICAgICAgY29uc3QgY29tcG9uZW50UmVmID0gdGhpcy5zaWduYXR1cmVDb21wb25lbnRzLmdldChpZCk7XG4gICAgICAgICAgaWYgKGNvbXBvbmVudFJlZikge1xuICAgICAgICAgICAgY29tcG9uZW50UmVmLmRlc3Ryb3koKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgdGhpcy5zaWduYXR1cmVDb21wb25lbnRzLmRlbGV0ZShpZCk7XG4gICAgICAgICAgdGhpcy5fc2lnbmF0dXJlc0hvbGRlclNlcnZpY2UucmVtb3ZlKGRlbC5ndWlkLCBpZCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KTtcblxuICAgIGNvbmZpZ1NlcnZpY2UudXBkYXRlZENvbmZpZy5zdWJzY3JpYmUoKHNpZ25hdHVyZUNvbmZpZykgPT4ge1xuICAgICAgdGhpcy5zaWduYXR1cmVDb25maWcgPSBzaWduYXR1cmVDb25maWc7XG4gICAgfSk7XG5cbiAgICB1cGxvYWRGaWxlc1NlcnZpY2UudXBsb2Fkc0NoYW5nZS5zdWJzY3JpYmUoKHVwbG9hZHMpID0+IHtcbiAgICAgIGlmICh1cGxvYWRzKSB7XG4gICAgICAgIGxldCBpOiBudW1iZXI7XG4gICAgICAgIGZvciAoaSA9IDA7IGkgPCB1cGxvYWRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgdGhpcy5fc2lnbmF0dXJlU2VydmljZS51cGxvYWQodXBsb2Fkcy5pdGVtKGkpLCAnJywgdGhpcy5yZXdyaXRlQ29uZmlnLCBudWxsKS5zdWJzY3JpYmUoKG9iajogRmlsZUNyZWRlbnRpYWxzKSA9PiB7XG4gICAgICAgICAgICB0aGlzLmZpbGVXYXNEcm9wcGVkID8gdGhpcy5zZWxlY3RGaWxlKG9iai5ndWlkLCAnJywgJycpIDogdGhpcy5zZWxlY3REaXIoJycpO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBwYWdlUHJlbG9hZFNlcnZpY2UuY2hlY2tQcmVsb2FkLnN1YnNjcmliZSgocGFnZTogbnVtYmVyKSA9PiB7XG4gICAgICBpZiAodGhpcy5wcmVsb2FkUGFnZUNvdW50Q29uZmlnICE9PSAwKSB7XG4gICAgICAgIGZvciAobGV0IGkgPSBwYWdlOyBpIDwgcGFnZSArIDI7IGkrKykge1xuICAgICAgICAgIGlmIChpID4gMCAmJiBpIDw9IHRoaXMuY291bnRQYWdlcyAmJiAhdGhpcy5maWxlLnBhZ2VzW2kgLSAxXS5kYXRhKSB7XG4gICAgICAgICAgICB0aGlzLnByZWxvYWRQYWdlcyhpLCBpKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHBhc3N3b3JkU2VydmljZS5wYXNzQ2hhbmdlLnN1YnNjcmliZSgocGFzczogc3RyaW5nKSA9PiB7XG4gICAgICB0aGlzLnNlbGVjdEZpbGUodGhpcy5jcmVkZW50aWFscy5ndWlkLCBwYXNzLCBDb21tb25Nb2RhbHMuUGFzc3dvcmRSZXF1aXJlZCk7XG4gICAgfSk7XG5cbiAgICBfc2VsZWN0U2lnbmF0dXJlU2VydmljZS5zZWxlY3RTaWduYXR1cmUuc3Vic2NyaWJlKChzaWduOiBEcmFnZ2FibGVTaWduYXR1cmUpID0+IHtcbiAgICAgIHRoaXMuc2VsZWN0U2lnbmF0dXJlKHNpZ24pO1xuICAgIH0pO1xuXG4gICAgdGhpcy5pc0Rlc2t0b3AgPSBfd2luZG93U2VydmljZS5pc0Rlc2t0b3AoKTtcbiAgICBfd2luZG93U2VydmljZS5vblJlc2l6ZS5zdWJzY3JpYmUoKHcpID0+IHtcbiAgICAgIHRoaXMuaXNEZXNrdG9wID0gX3dpbmRvd1NlcnZpY2UuaXNEZXNrdG9wKCk7XG4gICAgfSk7XG5cbiAgfVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIGlmICh0aGlzLmRlZmF1bHREb2N1bWVudENvbmZpZygpKSB7XG4gICAgICB0aGlzLmlzTG9hZGluZyA9IHRydWU7XG4gICAgICB0aGlzLnNlbGVjdEZpbGUodGhpcy5kZWZhdWx0RG9jdW1lbnRDb25maWcoKSwgXCJcIiwgXCJcIik7XG4gICAgfVxuICB9XG5cbiAgZ2V0IHJld3JpdGVDb25maWcoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuc2lnbmF0dXJlQ29uZmlnID8gdGhpcy5zaWduYXR1cmVDb25maWcucmV3cml0ZSA6IHRydWU7XG4gIH1cblxuICBnZXQgem9vbUNvbmZpZygpOiBib29sZWFuIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBnZXQgcGFnZVNlbGVjdG9yQ29uZmlnKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLnNpZ25hdHVyZUNvbmZpZyA/IHRoaXMuc2lnbmF0dXJlQ29uZmlnLnBhZ2VTZWxlY3RvciA6IHRydWU7XG4gIH1cblxuICBnZXQgcHJlbG9hZFBhZ2VDb3VudENvbmZpZygpOiBudW1iZXIge1xuICAgIHJldHVybiB0aGlzLnNpZ25hdHVyZUNvbmZpZyA/IHRoaXMuc2lnbmF0dXJlQ29uZmlnLnByZWxvYWRQYWdlQ291bnQgOiAwO1xuICB9XG5cbiAgZ2V0IGRvd25sb2FkQ29uZmlnKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLnNpZ25hdHVyZUNvbmZpZyA/IHRoaXMuc2lnbmF0dXJlQ29uZmlnLmRvd25sb2FkIDogdHJ1ZTtcbiAgfVxuXG4gIGdldCBkb3dubG9hZE9yaWdpbmFsQ29uZmlnKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLnNpZ25hdHVyZUNvbmZpZyA/IHRoaXMuc2lnbmF0dXJlQ29uZmlnLmRvd25sb2FkT3JpZ2luYWwgOiB0cnVlO1xuICB9XG5cbiAgZ2V0IGRvd25sb2FkU2luZ2VkQ29uZmlnKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLnNpZ25hdHVyZUNvbmZpZyA/IHRoaXMuc2lnbmF0dXJlQ29uZmlnLmRvd25sb2FkU2lnbmVkIDogdHJ1ZTtcbiAgfVxuXG4gIGdldCB1cGxvYWRDb25maWcoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuc2lnbmF0dXJlQ29uZmlnID8gdGhpcy5zaWduYXR1cmVDb25maWcudXBsb2FkIDogdHJ1ZTtcbiAgfVxuXG4gIHByaXZhdGUgZGVmYXVsdERvY3VtZW50Q29uZmlnKCkge1xuICAgIHJldHVybiB0aGlzLnNpZ25hdHVyZUNvbmZpZyA/IHRoaXMuc2lnbmF0dXJlQ29uZmlnLmRlZmF1bHREb2N1bWVudCA6IFwiXCI7XG4gIH1cblxuICBnZXQgcHJpbnRDb25maWcoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuc2lnbmF0dXJlQ29uZmlnID8gdGhpcy5zaWduYXR1cmVDb25maWcucHJpbnQgOiB0cnVlO1xuICB9XG5cbiAgZ2V0IGJyb3dzZUNvbmZpZygpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5zaWduYXR1cmVDb25maWcgPyB0aGlzLnNpZ25hdHVyZUNvbmZpZy5icm93c2UgOiB0cnVlO1xuICB9XG5cbiAgZ2V0IGh0bWxNb2RlQ29uZmlnKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIGdldCBlbmFibGVSaWdodENsaWNrQ29uZmlnKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLnNpZ25hdHVyZUNvbmZpZyA/IHRoaXMuc2lnbmF0dXJlQ29uZmlnLmVuYWJsZVJpZ2h0Q2xpY2sgOiB0cnVlO1xuICB9XG5cbiAgZ2V0IHRleHRTaWduYXR1cmVDb25maWcoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuc2lnbmF0dXJlQ29uZmlnID8gdGhpcy5zaWduYXR1cmVDb25maWcudGV4dFNpZ25hdHVyZSA6IHRydWU7XG4gIH1cblxuICBnZXQgaW1hZ2VTaWduYXR1cmVDb25maWcoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuc2lnbmF0dXJlQ29uZmlnID8gdGhpcy5zaWduYXR1cmVDb25maWcuaW1hZ2VTaWduYXR1cmUgOiB0cnVlO1xuICB9XG5cbiAgZ2V0IGRpZ2l0YWxTaWduYXR1cmVDb25maWcoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuc2lnbmF0dXJlQ29uZmlnID8gdGhpcy5zaWduYXR1cmVDb25maWcuZGlnaXRhbFNpZ25hdHVyZSA6IHRydWU7XG4gIH1cblxuICBnZXQgcXJDb2RlU2lnbmF0dXJlQ29uZmlnKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLnNpZ25hdHVyZUNvbmZpZyA/IHRoaXMuc2lnbmF0dXJlQ29uZmlnLnFyQ29kZVNpZ25hdHVyZSA6IHRydWU7XG4gIH1cblxuICBnZXQgYmFyQ29kZVNpZ25hdHVyZUNvbmZpZygpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5zaWduYXR1cmVDb25maWcgPyB0aGlzLnNpZ25hdHVyZUNvbmZpZy5iYXJDb2RlU2lnbmF0dXJlIDogdHJ1ZTtcbiAgfVxuXG4gIGdldCBzdGFtcFNpZ25hdHVyZUNvbmZpZygpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5zaWduYXR1cmVDb25maWcgPyB0aGlzLnNpZ25hdHVyZUNvbmZpZy5zdGFtcFNpZ25hdHVyZSA6IHRydWU7XG4gIH1cblxuICBnZXQgaGFuZFNpZ25hdHVyZUNvbmZpZygpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5zaWduYXR1cmVDb25maWcgPyB0aGlzLnNpZ25hdHVyZUNvbmZpZy5oYW5kU2lnbmF0dXJlIDogdHJ1ZTtcbiAgfVxuXG4gIGdldCBjdXJyZW50UGFnZSgpOiBudW1iZXIge1xuICAgIHJldHVybiB0aGlzLl9uYXZpZ2F0ZVNlcnZpY2UuY3VycmVudFBhZ2U7XG4gIH1cblxuICBvcGVuTW9kYWwoaWQ6IHN0cmluZykge1xuICAgIHRoaXMuX21vZGFsU2VydmljZS5vcGVuKGlkKTtcbiAgfVxuXG4gIGNsb3NlTW9kYWwoaWQ6IHN0cmluZykge1xuICAgIHRoaXMuX21vZGFsU2VydmljZS5jbG9zZShpZCk7XG4gIH1cblxuICBzZWxlY3REaXIoJGV2ZW50OiBzdHJpbmcpIHtcbiAgICB0aGlzLl9zaWduYXR1cmVTZXJ2aWNlLmxvYWRGaWxlcygkZXZlbnQpLnN1YnNjcmliZSgoZmlsZXM6IEZpbGVNb2RlbFtdKSA9PiB0aGlzLmZpbGVzID0gZmlsZXMgfHwgW10pO1xuICB9XG5cbiAgc2VsZWN0RmlsZSgkZXZlbnQ6IHN0cmluZywgcGFzc3dvcmQ6IHN0cmluZywgbW9kYWxJZDogc3RyaW5nKSB7XG4gICAgdGhpcy5jcmVkZW50aWFscyA9IHtndWlkOiAkZXZlbnQsIHBhc3N3b3JkOiBwYXNzd29yZH07XG4gICAgdGhpcy5maWxlID0gbnVsbDtcbiAgICB0aGlzLl9zaWduYXR1cmVTZXJ2aWNlLmxvYWRGaWxlKHRoaXMuY3JlZGVudGlhbHMpLnN1YnNjcmliZSgoZmlsZTogRmlsZURlc2NyaXB0aW9uKSA9PiB7XG4gICAgICAgIHRoaXMuZmlsZSA9IGZpbGU7XG4gICAgICAgIHRoaXMuZm9ybWF0RGlzYWJsZWQgPSAhdGhpcy5maWxlO1xuICAgICAgICBpZiAoZmlsZSkge1xuICAgICAgICAgIGNvbnN0IHByZWxvYWRQYWdlQ291bnQgPSB0aGlzLnByZWxvYWRQYWdlQ291bnRDb25maWc7XG4gICAgICAgICAgY29uc3QgY291bnRQYWdlcyA9IGZpbGUucGFnZXMgPyBmaWxlLnBhZ2VzLmxlbmd0aCA6IDA7XG4gICAgICAgICAgaWYgKHByZWxvYWRQYWdlQ291bnQgPiAwKSB7XG4gICAgICAgICAgICB0aGlzLnByZWxvYWRQYWdlcygxLCBwcmVsb2FkUGFnZUNvdW50ID4gY291bnRQYWdlcyA/IGNvdW50UGFnZXMgOiBwcmVsb2FkUGFnZUNvdW50KTtcbiAgICAgICAgICB9XG4gICAgICAgICAgdGhpcy5fbmF2aWdhdGVTZXJ2aWNlLmNvdW50UGFnZXMgPSBjb3VudFBhZ2VzO1xuICAgICAgICAgIHRoaXMuX25hdmlnYXRlU2VydmljZS5jdXJyZW50UGFnZSA9IDE7XG4gICAgICAgICAgdGhpcy5jb3VudFBhZ2VzID0gY291bnRQYWdlcztcbiAgICAgICAgICB0aGlzLmNsZWFuU2lnbmF0dXJlcygpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgKTtcbiAgICBpZiAobW9kYWxJZCkge1xuICAgICAgdGhpcy5fbW9kYWxTZXJ2aWNlLmNsb3NlKG1vZGFsSWQpO1xuICAgIH1cbiAgICB0aGlzLmNsZWFyRGF0YSgpO1xuICB9XG5cbiAgcHJlbG9hZFBhZ2VzKHN0YXJ0OiBudW1iZXIsIGVuZDogbnVtYmVyKSB7XG4gICAgZm9yIChsZXQgaSA9IHN0YXJ0OyBpIDw9IGVuZDsgaSsrKSB7XG4gICAgICB0aGlzLl9zaWduYXR1cmVTZXJ2aWNlLmxvYWRQYWdlKHRoaXMuY3JlZGVudGlhbHMsIGkpLnN1YnNjcmliZSgocGFnZTogUGFnZU1vZGVsKSA9PiB7XG4gICAgICAgIHRoaXMuZmlsZS5wYWdlc1tpIC0gMV0gPSBwYWdlO1xuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgdXBsb2FkKCRldmVudDogc3RyaW5nKSB7XG4gICAgdGhpcy5fc2lnbmF0dXJlU2VydmljZS51cGxvYWQobnVsbCwgJGV2ZW50LCB0aGlzLnJld3JpdGVDb25maWcsIG51bGwpLnN1YnNjcmliZSgoKSA9PiB7XG4gICAgICB0aGlzLnNlbGVjdERpcignJyk7XG4gICAgfSk7XG4gIH1cblxuICBkb3dubG9hZEZpbGUoKSB7XG4gICAgaWYgKHRoaXMuZm9ybWF0RGlzYWJsZWQpXG4gICAgICByZXR1cm47XG4gICAgd2luZG93LmxvY2F0aW9uLmFzc2lnbih0aGlzLl9zaWduYXR1cmVTZXJ2aWNlLmdldERvd25sb2FkVXJsKHRoaXMuY3JlZGVudGlhbHMpKTtcbiAgfVxuXG4gIHByaXZhdGUgY2xlYXJEYXRhKCkge1xuICAgIGlmICghdGhpcy5maWxlIHx8ICF0aGlzLmZpbGUucGFnZXMpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgZm9yIChjb25zdCBwYWdlIG9mIHRoaXMuZmlsZS5wYWdlcykge1xuICAgICAgcGFnZS5kYXRhID0gbnVsbDtcbiAgICB9XG4gIH1cblxuICBvblJpZ2h0Q2xpY2soJGV2ZW50OiBNb3VzZUV2ZW50KSB7XG4gICAgcmV0dXJuIHRoaXMuZW5hYmxlUmlnaHRDbGlja0NvbmZpZztcbiAgfVxuXG4gIGdldFNpZ25hdHVyZVR5cGVDb25maWcoaWQ6IHN0cmluZykge1xuICAgIHN3aXRjaCAoaWQpIHtcbiAgICAgIGNhc2UgU2lnbmF0dXJlVHlwZS5URVhULmlkOlxuICAgICAgICByZXR1cm4gdGhpcy50ZXh0U2lnbmF0dXJlQ29uZmlnO1xuICAgICAgY2FzZSBTaWduYXR1cmVUeXBlLklNQUdFLmlkOlxuICAgICAgICByZXR1cm4gdGhpcy5pbWFnZVNpZ25hdHVyZUNvbmZpZztcbiAgICAgIGNhc2UgU2lnbmF0dXJlVHlwZS5ESUdJVEFMLmlkOlxuICAgICAgICByZXR1cm4gdGhpcy5kaWdpdGFsU2lnbmF0dXJlQ29uZmlnO1xuICAgICAgY2FzZSBTaWduYXR1cmVUeXBlLlFSX0NPREUuaWQ6XG4gICAgICAgIHJldHVybiB0aGlzLnFyQ29kZVNpZ25hdHVyZUNvbmZpZztcbiAgICAgIGNhc2UgU2lnbmF0dXJlVHlwZS5CQVJfQ09ERS5pZDpcbiAgICAgICAgcmV0dXJuIHRoaXMuYmFyQ29kZVNpZ25hdHVyZUNvbmZpZztcbiAgICAgIGNhc2UgU2lnbmF0dXJlVHlwZS5TVEFNUC5pZDpcbiAgICAgICAgcmV0dXJuIHRoaXMuc3RhbXBTaWduYXR1cmVDb25maWc7XG4gICAgICBjYXNlIFNpZ25hdHVyZVR5cGUuSEFORC5pZDpcbiAgICAgICAgcmV0dXJuIHRoaXMuaGFuZFNpZ25hdHVyZUNvbmZpZztcbiAgICB9XG4gIH1cblxuICBkcmFnT3ZlcigkZXZlbnQ6IERyYWdFdmVudCkge1xuICAgICRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICRldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgfVxuXG4gIGRyb3BTaWduYXR1cmUoJGV2ZW50OiBEcmFnRXZlbnQpIHtcbiAgICAkZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAkZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgY29uc3QgcG9zaXRpb24gPSBVdGlscy5nZXRNb3VzZVBvc2l0aW9uKCRldmVudCk7XG5cbiAgICBjb25zdCBjdXJyZW50UGFnZSA9IGRvY3VtZW50LmVsZW1lbnRGcm9tUG9pbnQocG9zaXRpb24ueCwgcG9zaXRpb24ueSk7XG4gICAgaWYgKGN1cnJlbnRQYWdlICYmICQoY3VycmVudFBhZ2UpLnBhcmVudCgpLnBhcmVudCgpICYmICQoY3VycmVudFBhZ2UpLnBhcmVudCgpLnBhcmVudCgpLnBhcmVudCgpLmhhc0NsYXNzKFwicGFnZVwiKSkge1xuICAgICAgY29uc3QgZG9jdW1lbnRQYWdlID0gJChjdXJyZW50UGFnZSkucGFyZW50KCkucGFyZW50KClbMF07XG4gICAgICBjb25zdCBsZWZ0ID0gcG9zaXRpb24ueCAtICQoZG9jdW1lbnRQYWdlKS5vZmZzZXQoKS5sZWZ0O1xuICAgICAgY29uc3QgdG9wID0gcG9zaXRpb24ueSAtICQoZG9jdW1lbnRQYWdlKS5vZmZzZXQoKS50b3A7XG4gICAgICBjb25zdCBjdXJyZW50UG9zaXRpb24gPSBuZXcgUG9zaXRpb24obGVmdCwgdG9wKTtcbiAgICAgIGNvbnN0IHNpZ24gPSB0aGlzLl9kcmFnU2lnbmF0dXJlU2VydmljZS5zaWduO1xuICAgICAgaWYgKHNpZ24pIHtcbiAgICAgICAgc2lnbi5wb3NpdGlvbiA9IGN1cnJlbnRQb3NpdGlvbjtcbiAgICAgICAgdGhpcy5zZWxlY3RTaWduYXR1cmUoc2lnbik7XG4gICAgICAgIHRoaXMuX2RyYWdTaWduYXR1cmVTZXJ2aWNlLnNpZ24gPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgc2VsZWN0U2lnbmF0dXJlKHNpZ246IERyYWdnYWJsZVNpZ25hdHVyZSkge1xuICAgIGlmIChzaWduLnR5cGUgPT09IFNpZ25hdHVyZVR5cGUuRElHSVRBTC5pZCkge1xuICAgICAgY29uc3QgYWRkZWRTaWduYXR1cmUgPSBuZXcgQWRkZWRTaWduYXR1cmUoKTtcbiAgICAgIGFkZGVkU2lnbmF0dXJlLmRpZ2l0YWxQcm9wcyA9IHNpZ24uZGlnaXRhbFByb3BzO1xuICAgICAgYWRkZWRTaWduYXR1cmUuZ3VpZCA9IHNpZ24uZ3VpZDtcbiAgICAgIGFkZGVkU2lnbmF0dXJlLm51bWJlciA9IHNpZ24ucGFnZU51bWJlcjtcbiAgICAgIGZvciAoY29uc3QgcGFnZSBvZiB0aGlzLmZpbGUucGFnZXMpIHtcbiAgICAgICAgY29uc3QgaWQgPSB0aGlzLmFkZFNpZ25hdHVyZUNvbXBvbmVudChhZGRlZFNpZ25hdHVyZSwgc2lnbiwgcGFnZSk7XG4gICAgICAgIHRoaXMuX3NpZ25hdHVyZXNIb2xkZXJTZXJ2aWNlLmFkZElkKHNpZ24uZ3VpZCwgaWQpO1xuICAgICAgfVxuICAgICAgdGhpcy5jbG9zZVRhYihzaWduLnR5cGUpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLl9zaWduYXR1cmVTZXJ2aWNlLmxvYWRTaWduYXR1cmVJbWFnZShzaWduKS5zdWJzY3JpYmUoKHNpZ25hdHVyZTogQWRkZWRTaWduYXR1cmUpID0+IHtcbiAgICAgICAgc2lnbmF0dXJlLm51bWJlciA9IHNpZ24ucGFnZU51bWJlcjtcbiAgICAgICAgY29uc3QgcGFnZU1vZGVsID0gdGhpcy5maWxlLnBhZ2VzLmZpbmQoZnVuY3Rpb24gKHApIHtcbiAgICAgICAgICByZXR1cm4gcC5udW1iZXIgPT09IHNpZ24ucGFnZU51bWJlcjtcbiAgICAgICAgfSk7XG4gICAgICAgIGNvbnN0IGlkID0gdGhpcy5hZGRTaWduYXR1cmVDb21wb25lbnQoc2lnbmF0dXJlLCBzaWduLCBwYWdlTW9kZWwpO1xuICAgICAgICB0aGlzLl9zaWduYXR1cmVzSG9sZGVyU2VydmljZS5hZGRJZChzaWduLmd1aWQsIGlkKTtcbiAgICAgICAgdGhpcy5jbG9zZVRhYihzaWduLnR5cGUpO1xuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBhZGRTaWduYXR1cmVDb21wb25lbnQoYWRkZWRTaWduYXR1cmU6IEFkZGVkU2lnbmF0dXJlLCBzaWduOiBEcmFnZ2FibGVTaWduYXR1cmUsIHBhZ2U6IFBhZ2VNb2RlbCkge1xuICAgIGNvbnN0IGR5bmFtaWNEaXJlY3RpdmUgPSB0aGlzLl9ob3N0aW5nQ29tcG9uZW50c1NlcnZpY2UuZmluZChwYWdlLm51bWJlcik7XG4gICAgaWYgKGR5bmFtaWNEaXJlY3RpdmUpIHtcbiAgICAgIGNvbnN0IHZpZXdDb250YWluZXJSZWYgPSBkeW5hbWljRGlyZWN0aXZlLnZpZXdDb250YWluZXJSZWY7XG4gICAgICBjb25zdCBzZWxlY3RTaWduYXR1cmUgPSB0aGlzLl9hZGREeW5hbWljQ29tcG9uZW50U2VydmljZS5hZGREeW5hbWljQ29tcG9uZW50KHZpZXdDb250YWluZXJSZWYsIFNpZ25hdHVyZSk7XG4gICAgICBjb25zdCBpZCA9IHRoaXMuc2lnbmF0dXJlQ29tcG9uZW50cy5zaXplICsgMTtcbiAgICAgIGlmIChhZGRlZFNpZ25hdHVyZS53aWR0aCA+PSBwYWdlLndpZHRoKSB7XG4gICAgICAgIGFkZGVkU2lnbmF0dXJlLndpZHRoID0gcGFnZS53aWR0aCAvIDI7XG4gICAgICB9XG4gICAgICBpZiAoYWRkZWRTaWduYXR1cmUuaGVpZ2h0ID49IHBhZ2UuaGVpZ2h0KSB7XG4gICAgICAgIGFkZGVkU2lnbmF0dXJlLmhlaWdodCA9IHBhZ2UuaGVpZ2h0IC8gMjtcbiAgICAgIH1cbiAgICAgICg8U2lnbmF0dXJlPnNlbGVjdFNpZ25hdHVyZS5pbnN0YW5jZSkuaWQgPSBpZDtcbiAgICAgICg8U2lnbmF0dXJlPnNlbGVjdFNpZ25hdHVyZS5pbnN0YW5jZSkuZGF0YSA9IGFkZGVkU2lnbmF0dXJlO1xuICAgICAgKDxTaWduYXR1cmU+c2VsZWN0U2lnbmF0dXJlLmluc3RhbmNlKS5wb3NpdGlvbiA9IHNpZ24ucG9zaXRpb247XG4gICAgICAoPFNpZ25hdHVyZT5zZWxlY3RTaWduYXR1cmUuaW5zdGFuY2UpLnR5cGUgPSBzaWduLnR5cGU7XG4gICAgICAoPFNpZ25hdHVyZT5zZWxlY3RTaWduYXR1cmUuaW5zdGFuY2UpLnBhZ2VXaWR0aCA9IHBhZ2Uud2lkdGg7XG4gICAgICAoPFNpZ25hdHVyZT5zZWxlY3RTaWduYXR1cmUuaW5zdGFuY2UpLnBhZ2VIZWlnaHQgPSBwYWdlLmhlaWdodDtcbiAgICAgIHRoaXMuc2lnbmF0dXJlQ29tcG9uZW50cy5zZXQoaWQsIHNlbGVjdFNpZ25hdHVyZSk7XG4gICAgICB0aGlzLl9hY3RpdmVTaWduYXR1cmVTZXJ2aWNlLmNoYW5nZUFjdGl2ZShpZCk7XG4gICAgICByZXR1cm4gaWQ7XG4gICAgfVxuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgcHJpdmF0ZSBjbG9zZVRhYih0eXBlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9zaWduYXR1cmVUYWJBY3RpdmF0aW9uU2VydmljZS5jaGFuZ2VBY3RpdmVUYWIodHlwZSk7XG4gIH1cblxuICBoaWRlQWxsKCRldmVudCkge1xuICAgIGlmICgoJGV2ZW50LnRhcmdldC5wYXJlbnRFbGVtZW50ICYmICRldmVudC50YXJnZXQucGFyZW50RWxlbWVudC5hdHRyaWJ1dGVzWyduYW1lJ10gJiZcbiAgICAgICRldmVudC50YXJnZXQucGFyZW50RWxlbWVudC5hdHRyaWJ1dGVzWyduYW1lJ10udmFsdWUgPT09ICdidXR0b24nKSB8fFxuICAgICAgKCRldmVudC50YXJnZXQucGFyZW50RWxlbWVudCAmJlxuICAgICAgICAkZXZlbnQudGFyZ2V0LnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudCAmJlxuICAgICAgICAkZXZlbnQudGFyZ2V0LnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudC5hdHRyaWJ1dGVzWyduYW1lJ10gJiZcbiAgICAgICAgJGV2ZW50LnRhcmdldC5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQuYXR0cmlidXRlc1snbmFtZSddLnZhbHVlID09PSAnYnV0dG9uJykgfHxcbiAgICAgICgkZXZlbnQudGFyZ2V0LnBhcmVudEVsZW1lbnQgJiZcbiAgICAgICAgJGV2ZW50LnRhcmdldC5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQgJiZcbiAgICAgICAgJGV2ZW50LnRhcmdldC5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudCAmJlxuICAgICAgICAkZXZlbnQudGFyZ2V0LnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQgJiZcbiAgICAgICAgJGV2ZW50LnRhcmdldC5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50LmF0dHJpYnV0ZXNbJ25hbWUnXSAmJlxuICAgICAgICAkZXZlbnQudGFyZ2V0LnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQuYXR0cmlidXRlc1snbmFtZSddLnZhbHVlID09PSAnYnV0dG9uJykpIHtcblxuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB0aGlzLl9vbkNsb3NlU2VydmljZS5jbG9zZSh0cnVlKTtcbiAgfVxuXG4gIG5ld1NpZ24oJGV2ZW50OiBzdHJpbmcpIHtcbiAgICBpZiAoU2lnbmF0dXJlVHlwZS5IQU5ELmlkID09PSAkZXZlbnQpIHtcbiAgICAgIHRoaXMuX21vZGFsU2VydmljZS5vcGVuKENvbW1vbk1vZGFscy5EcmF3SGFuZFNpZ25hdHVyZSk7XG4gICAgICB0aGlzLl9zaWduYXR1cmVUYWJBY3RpdmF0aW9uU2VydmljZS5jaGFuZ2VBY3RpdmVUYWIoU2lnbmF0dXJlVHlwZS5IQU5ELmlkKTtcbiAgICB9IGVsc2UgaWYgKFNpZ25hdHVyZVR5cGUuU1RBTVAuaWQgPT09ICRldmVudCkge1xuICAgICAgdGhpcy5fbW9kYWxTZXJ2aWNlLm9wZW4oQ29tbW9uTW9kYWxzLkRyYXdTdGFtcFNpZ25hdHVyZSk7XG4gICAgICB0aGlzLl9zaWduYXR1cmVUYWJBY3RpdmF0aW9uU2VydmljZS5jaGFuZ2VBY3RpdmVUYWIoU2lnbmF0dXJlVHlwZS5TVEFNUC5pZCk7XG4gICAgfSBlbHNlIGlmIChTaWduYXR1cmVUeXBlLlRFWFQuaWQgPT09ICRldmVudCkge1xuICAgICAgdGhpcy5hZGRUZXh0U2lnbigpO1xuICAgICAgdGhpcy5fc2lnbmF0dXJlVGFiQWN0aXZhdGlvblNlcnZpY2UuY2hhbmdlQWN0aXZlVGFiKFNpZ25hdHVyZVR5cGUuVEVYVC5pZCk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBhZGRUZXh0U2lnbigpIHtcbiAgICBjb25zdCBzaWduYXR1cmUgPSBuZXcgQWRkZWRTaWduYXR1cmUoKTtcbiAgICBzaWduYXR1cmUucHJvcHMgPSBTaWduYXR1cmVQcm9wcy5nZXREZWZhdWx0KCk7XG4gICAgc2lnbmF0dXJlLmd1aWQgPSBEcmFnZ2FibGVTaWduYXR1cmUuVEVNUDtcbiAgICBjb25zdCBzaWduID0gbmV3IERyYWdnYWJsZVNpZ25hdHVyZSgpO1xuICAgIHNpZ24uZ3VpZCA9IERyYWdnYWJsZVNpZ25hdHVyZS5URU1QO1xuICAgIHNpZ24ucG9zaXRpb24gPSBuZXcgUG9zaXRpb24oMCwgMCk7XG4gICAgc2lnbi50eXBlID0gU2lnbmF0dXJlVHlwZS5URVhULmlkO1xuICAgIGNvbnN0IHBhZ2VOdW1iZXIgPSB0aGlzLl9uYXZpZ2F0ZVNlcnZpY2UuY3VycmVudFBhZ2U7XG4gICAgc2lnbmF0dXJlLm51bWJlciA9IHBhZ2VOdW1iZXI7XG4gICAgc2lnbi5wYWdlTnVtYmVyID0gcGFnZU51bWJlcjtcbiAgICBjb25zdCBwYWdlTW9kZWwgPSB0aGlzLmZpbGUucGFnZXMuZmluZChmdW5jdGlvbiAocCkge1xuICAgICAgcmV0dXJuIHAubnVtYmVyID09PSBwYWdlTnVtYmVyO1xuICAgIH0pO1xuICAgIGNvbnN0IGlkID0gdGhpcy5hZGRTaWduYXR1cmVDb21wb25lbnQoc2lnbmF0dXJlLCBzaWduLCBwYWdlTW9kZWwpO1xuICAgIHRoaXMuX3NpZ25hdHVyZXNIb2xkZXJTZXJ2aWNlLmFkZElkKHNpZ24uZ3VpZCwgaWQpO1xuICB9XG5cbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgdGhpcy5jbGVhblNpZ25hdHVyZXMoKTtcbiAgfVxuXG4gIHByaXZhdGUgY2xlYW5TaWduYXR1cmVzKCkge1xuICAgIGZvciAoY29uc3QgY29tcG9uZW50UmVmIG9mIHRoaXMuc2lnbmF0dXJlQ29tcG9uZW50cy52YWx1ZXMoKSkge1xuICAgICAgY29tcG9uZW50UmVmLmRlc3Ryb3koKTtcbiAgICB9XG4gICAgdGhpcy5zaWduYXR1cmVDb21wb25lbnRzID0gbmV3IE1hcDxudW1iZXIsIENvbXBvbmVudFJlZjxhbnk+PigpO1xuICAgIHRoaXMuX3NpZ25hdHVyZXNIb2xkZXJTZXJ2aWNlLmNsZWFyKCk7XG4gIH1cblxuICBzaWduKCkge1xuICAgIGNvbnN0IHNpZ25hdHVyZXMgPSB0aGlzLnByZXBhcmVTaWduYXR1cmVzRGF0YSgpO1xuICAgIHRoaXMuX3NpZ25hdHVyZVNlcnZpY2Uuc2lnbih0aGlzLmNyZWRlbnRpYWxzLCBzaWduYXR1cmVzKS5zdWJzY3JpYmUoKHJldDogYW55KSA9PiB7XG4gICAgICB0aGlzLl9tb2RhbFNlcnZpY2Uub3BlbihDb21tb25Nb2RhbHMuT3BlcmF0aW9uU3VjY2Vzcyk7XG4gICAgICB0aGlzLnNlbGVjdEZpbGUocmV0Lmd1aWQsIG51bGwsIENvbW1vbk1vZGFscy5PcGVyYXRpb25TdWNjZXNzKTtcbiAgICB9KTtcbiAgfVxuXG4gIHByaXZhdGUgcHJlcGFyZVNpZ25hdHVyZXNEYXRhKCkge1xuICAgIGNvbnN0IHNpZ25hdHVyZXMgPSBbXTtcbiAgICBmb3IgKGNvbnN0IGlkcyBvZiB0aGlzLl9zaWduYXR1cmVzSG9sZGVyU2VydmljZS52YWx1ZXMoKSkge1xuICAgICAgY29uc3QgaWQgPSBpZHMucG9wKCk7XG4gICAgICBjb25zdCBjb21wb25lbnRSZWYgPSB0aGlzLnNpZ25hdHVyZUNvbXBvbmVudHMuZ2V0KGlkKTtcbiAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgIGNvbnN0IHNpZ24gPSAoPFNpZ25hdHVyZT5jb21wb25lbnRSZWYpLmluc3RhbmNlO1xuICAgICAgY29uc3QgZGF0YSA9IHNpZ24uZGF0YTtcbiAgICAgIGNvbnN0IHBvc2l0aW9uID0gc2lnbi5wb3NpdGlvbjtcbiAgICAgIGNvbnN0IHR5cGUgPSBzaWduLnR5cGU7XG5cbiAgICAgIGlmIChEcmFnZ2FibGVTaWduYXR1cmUuVEVNUCAhPT0gZGF0YS5ndWlkKSB7XG4gICAgICAgIHNpZ25hdHVyZXMucHVzaChTaWduYXR1cmVEYXRhLm1hcChkYXRhLCB0eXBlLCBwb3NpdGlvbikpO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gc2lnbmF0dXJlcztcbiAgfVxuXG4gIGlzUGRmKCkge1xuICAgIGlmICh0aGlzLmZpbGUpIHtcbiAgICAgIGlmIChGaWxlVXRpbC5maW5kKHRoaXMuZmlsZS5ndWlkLCBmYWxzZSkuZm9ybWF0ID09PSBcIlBvcnRhYmxlIERvY3VtZW50IEZvcm1hdFwiKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBjb2Rlc0NvbmZpZygpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTaWduYXR1cmVUeXBlQ29uZmlnKFNpZ25hdHVyZVR5cGUuQkFSX0NPREUuaWQpIHx8IHRoaXMuZ2V0U2lnbmF0dXJlVHlwZUNvbmZpZyhTaWduYXR1cmVUeXBlLlFSX0NPREUuaWQpO1xuICB9XG5cbiAgaXNWaXNpYmxlKGlkOiBzdHJpbmcpIHtcbiAgICBjb25zdCBub3RDb2RlID0gaWQgIT09IFNpZ25hdHVyZVR5cGUuQkFSX0NPREUuaWQgJiYgaWQgIT09IFNpZ25hdHVyZVR5cGUuUVJfQ09ERS5pZDtcbiAgICByZXR1cm4gdGhpcy5nZXRTaWduYXR1cmVUeXBlQ29uZmlnKGlkKSAmJiAodGhpcy5pc0Rlc2t0b3AgfHwgbm90Q29kZSk7XG4gIH1cblxuICBhY3RpdmVUYWIoJGV2ZW50OiBzdHJpbmcpIHtcbiAgICB0aGlzLmFjdGl2ZVNpZ25hdHVyZVRhYiA9ICRldmVudDtcbiAgfVxuXG4gIGZpbGVEcm9wcGVkKCRldmVudCkge1xuICAgIHRoaXMuZmlsZVdhc0Ryb3BwZWQgPSAkZXZlbnQ7XG4gIH1cbn1cbiJdfQ==