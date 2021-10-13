/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component } from '@angular/core';
import { SignatureService } from "./signature.service";
import { ModalService, UploadFilesService, NavigateService, PagePreloadService, ZoomService, RenderPrintService, FileUtil, PasswordService, CommonModals, HostingDynamicComponentService, AddDynamicComponentService, OnCloseService, ExceptionMessageService, WindowService, Utils, TabActivatorService, TopTabActivatorService } from "@groupdocs.examples.angular/common-components";
import { SignatureConfigService } from "./signature-config.service";
import { AddedSignature, DraggableSignature, Position, SignatureData, SignatureProps, SignatureType } from "./signature-models";
import { SelectSignatureService } from "./select-signature.service";
import { Signature } from "./signature/signature.component";
import { DragSignatureService } from "./drag-signature.service";
import { RemoveSignatureService } from "./remove-signature.service";
import { ActiveSignatureService } from "./active-signature.service";
import { SignaturesHolderService } from "./signatures-holder.service";
import 'hammerjs';
import { CopySignatureService } from "./copy-signature.service";
import * as jquery from 'jquery';
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
        this._zoom = 100;
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
        this.isDesktop = _windowService.isDesktop();
        _windowService.onResize.subscribe((/**
         * @param {?} w
         * @return {?}
         */
        (w) => {
            if (!_windowService.isMobile()) {
                this.isDesktop = _windowService.isDesktop();
                if (!this.isDesktop) {
                    this.refreshZoom();
                }
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
                comp.baseCopied = true;
                for (const page of this.file.pages) {
                    if (page.number !== compPage) {
                        /** @type {?} */
                        const sign = this.createDraggableSign(comp, copySign, page);
                        /** @type {?} */
                        const addedSignature = this.createAddedSignature(copySign, comp, page);
                        /** @type {?} */
                        const id = this.addSignatureComponent(addedSignature, sign, page, true);
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
                        if (comp.id !== copyChanges.id && (comp.copied || comp.baseCopied)) {
                            comp.data.width = copyChanges.width;
                            comp.data.height = copyChanges.height;
                            comp.data.position = copyChanges.position;
                            comp.data.props = copyChanges.props;
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
     * @private
     * @param {?} comp
     * @param {?} copySign
     * @param {?} page
     * @return {?}
     */
    createDraggableSign(comp, copySign, page) {
        /** @type {?} */
        const sign = new DraggableSignature();
        sign.type = comp.type;
        sign.guid = copySign.guid;
        sign.position = comp.position;
        sign.pageNumber = page.number;
        return sign;
    }
    /**
     * @private
     * @param {?} copySign
     * @param {?} comp
     * @param {?} page
     * @return {?}
     */
    createAddedSignature(copySign, comp, page) {
        /** @type {?} */
        const addedSignature = new AddedSignature();
        addedSignature.guid = copySign.guid;
        addedSignature.data = comp.data.data;
        if (comp.data.props) {
            addedSignature.props = comp.data.props;
        }
        addedSignature.width = comp.data.width;
        addedSignature.height = comp.data.height;
        addedSignature.number = page.number;
        return addedSignature;
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
     * @private
     * @param {?} pt
     * @return {?}
     */
    ptToPx(pt) {
        //pt * 96 / 72 = px.
        return pt * 96 / 72;
    }
    /**
     * @private
     * @return {?}
     */
    getFitToWidth() {
        // Images and Excel-related files receiving dimensions in px from server
        /** @type {?} */
        const pageWidth = this.ptToPx(this._pageWidth);
        /** @type {?} */
        const pageHeight = this.ptToPx(this._pageHeight);
        /** @type {?} */
        const offsetWidth = pageWidth ? pageWidth : window.innerWidth;
        return (pageHeight > pageWidth && Math.round(offsetWidth / window.innerWidth) < 2) ? 200 - Math.round(offsetWidth * 100 / window.innerWidth) : Math.round(window.innerWidth * 100 / offsetWidth);
    }
    /**
     * @param {?} zoom
     * @return {?}
     */
    set zoom(zoom) {
        this._zoom = zoom;
        this._zoomService.changeZoom(this._zoom);
    }
    /**
     * @return {?}
     */
    get zoom() {
        return this._zoom;
    }
    /**
     * @private
     * @return {?}
     */
    refreshZoom() {
        this.zoom = this._windowService.isDesktop() ? 100 : this.getFitToWidth();
    }
    /**
     * @return {?}
     */
    zoomIn() {
        if (this.formatDisabled)
            return;
        if (this._zoom < 490) {
            this.zoom = this._zoom + 10;
        }
    }
    /**
     * @return {?}
     */
    zoomOut() {
        if (this.formatDisabled)
            return;
        if (this._zoom > 30) {
            this.zoom = this._zoom - 10;
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
        return this.signatureConfig ? this.signatureConfig.zoom : true;
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
                if (!this.isDesktop && file.pages && file.pages[0]) {
                    this._pageHeight = file.pages[0].height;
                    this._pageWidth = file.pages[0].width;
                    this.refreshZoom();
                }
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
            const left = (position.x - $(documentPage).offset().left) / (this.zoom / 100);
            /** @type {?} */
            const top = (position.y - $(documentPage).offset().top) / (this.zoom / 100);
            /** @type {?} */
            const currentPosition = new Position(left, top);
            /** @type {?} */
            const sign = this._dragSignatureService.sign;
            if (sign) {
                /** @type {?} */
                const id = $(currentPage).parent().attr('id');
                if (id) {
                    /** @type {?} */
                    const split = id.split('-');
                    sign.pageNumber = split.length === 2 ? parseInt(split[1], 10) : sign.pageNumber;
                }
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
     * @param {?=} copied
     * @return {?}
     */
    addSignatureComponent(addedSignature, sign, page, copied = false) {
        /** @type {?} */
        const dynamicDirective = this._hostingComponentsService.find(page.number);
        if (dynamicDirective) {
            /** @type {?} */
            const viewContainerRef = dynamicDirective.viewContainerRef;
            /** @type {?} */
            const selectSignature = this._addDynamicComponentService.addDynamicComponent(viewContainerRef, Signature);
            /** @type {?} */
            const id = this.getNextId();
            while (addedSignature.width >= page.width || addedSignature.height >= page.height) {
                addedSignature.width = addedSignature.width / 2;
                addedSignature.height = addedSignature.height / 2;
            }
            ((/** @type {?} */ (selectSignature.instance))).id = id;
            ((/** @type {?} */ (selectSignature.instance))).copied = copied;
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
     * @return {?}
     */
    getNextId() {
        /** @type {?} */
        let maxId = 0;
        for (const annId of this.signatureComponents.keys()) {
            if (annId > maxId) {
                maxId = annId;
            }
        }
        /** @type {?} */
        const id = maxId + 1;
        return id;
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
        }
        else if (SignatureType.STAMP.id === $event) {
            this._modalService.open(CommonModals.DrawStampSignature);
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
     * @return {?}
     */
    prepareSignaturesData() {
        /** @type {?} */
        const signatures = [];
        for (const ids of this._signaturesHolderService.values()) {
            for (const id of ids) {
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
                if (SignatureType.DIGITAL.id === type) {
                    break;
                }
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
    /**
     * @param {?} signatureType
     * @return {?}
     */
    isFirstTab(signatureType) {
        if ((signatureType.id === SignatureType.TEXT.id) || (!this.isDesktop && signatureType.id === SignatureType.QR_CODE.id)) {
            return -1;
        }
        if ((signatureType.id === SignatureType.HAND.id) || (!this.isDesktop && signatureType.id === SignatureType.BAR_CODE.id)) {
            return 1;
        }
        return 0;
    }
    /**
     * @param {?} $event
     * @return {?}
     */
    onPan($event) {
        this._zoomService.changeZoom(this._zoom);
    }
}
SignatureAppComponent.decorators = [
    { type: Component, args: [{
                selector: 'gd-signature',
                template: "<gd-loading-mask [loadingMask]=\"isLoading\"></gd-loading-mask>\r\n<div class=\"wrapper\" (contextmenu)=\"onRightClick($event)\" (click)=\"hideAll($event)\">\r\n  <div class=\"signature-wrapper wrapper\">\r\n    <gd-tabbed-toolbars [logo]=\"'signature'\" [icon]=\"'pen-square'\">\r\n      <gd-tabs>\r\n        <gd-tab [tabTitle]=\"'File'\" [icon]=\"'folder-open'\" [id]=\"'1'\" [active]=\"true\">\r\n          <div id=\"files-tools\" class=\"toolbar-panel\">\r\n            <gd-button [icon]=\"'folder-open'\" [tooltip]=\"'Browse files'\" (click)=\"openModal(browseFilesModal)\"\r\n                       *ngIf=\"browseConfig\" [elementPosition]=\"-1\"></gd-button>\r\n\r\n            <gd-button [disabled]=\"formatDisabled\" [icon]=\"'download'\" [tooltip]=\"'Download'\"\r\n                       (click)=\"downloadFile()\" *ngIf=\"downloadConfig\"></gd-button>\r\n            <gd-button [disabled]=\"formatDisabled\" [icon]=\"'save'\" [tooltip]=\"'Save'\" (click)=\"sign()\"></gd-button>\r\n            <gd-button class=\"desktop-hide\" [disabled]=\"formatDisabled\" [icon]=\"'search-plus'\" [tooltip]=\"'Zoom In'\"\r\n            (click)=\"zoomIn()\" *ngIf=\"zoomConfig\"></gd-button>\r\n            <gd-button class=\"desktop-hide\" [disabled]=\"formatDisabled\" [icon]=\"'search-minus'\" [tooltip]=\"'Zoom Out'\"\r\n            (click)=\"zoomOut()\" *ngIf=\"zoomConfig\"></gd-button>\r\n          </div>\r\n        </gd-tab>\r\n        <gd-tab [tabTitle]=\"'Signatures'\" [icon]=\"'signature'\" [id]=\"'2'\">\r\n          <div class=\"toolbar-panel\">\r\n            <div *ngFor=\"let signatureType of signatureTypes\">\r\n              <gd-top-tab [disabled]=\"!file\" *ngIf=\"isVisible(signatureType.id)\"\r\n                          [icon]=\"signatureType.icon\" (activeTab)=\"activeTab($event)\"\r\n                          [id]=\"signatureType.id\" [tooltip]=\"signatureType.name\"\r\n                          [elementPosition]=\"isFirstTab(signatureType)\">\r\n              </gd-top-tab>\r\n            </div>\r\n          </div>\r\n        </gd-tab>\r\n        <gd-tab [tabTitle]=\"''\" [icon]=\"'qrcode'\" [id]=\"'3'\" *ngIf=\"!isDesktop && codesConfig()\">\r\n          <div class=\"toolbar-panel\">\r\n            <div *ngFor=\"let signatureType of signatureTypeCodes\">\r\n              <gd-top-tab [disabled]=\"!file\" *ngIf=\"getSignatureTypeConfig(signatureType.id)\"\r\n                          [icon]=\"signatureType.icon\" (activeTab)=\"activeTab($event)\"\r\n                          [id]=\"signatureType.id\" [tooltip]=\"signatureType.name\"\r\n                          [elementPosition]=\"isFirstTab(signatureType)\">\r\n              </gd-top-tab>\r\n            </div>\r\n          </div>\r\n        </gd-tab>\r\n      </gd-tabs>\r\n    </gd-tabbed-toolbars>\r\n    <gd-signature-left-panel *ngIf=\"activeSignatureTab\" [rewrite]=\"rewriteConfig\" (newSignatureEvent)=\"newSign($event)\"\r\n                             [isPdf]=\"isPdf()\" [id]=\"activeSignatureTab\">\r\n    </gd-signature-left-panel>\r\n    <div class=\"doc-panel\" *ngIf=\"file\">\r\n      <gd-document (drop)=\"dropSignature($event)\" (dragover)=\"dragOver($event)\" class=\"gd-document\" *ngIf=\"file\"\r\n                   [file]=\"file\" [mode]=\"htmlModeConfig\" gdScrollable\r\n                   [preloadPageCount]=\"preloadPageCountConfig\" gdRenderPrint [htmlMode]=\"htmlModeConfig\" (onpan)=\"onPan($event)\"></gd-document>\r\n    </div>\r\n\r\n    <gd-init-state [icon]=\"'signature'\" [text]=\"'Drop file here to upload'\" *ngIf=\"!file\"\r\n                   (fileDropped)=\"fileDropped($event)\">\r\n      Click\r\n      <fa-icon [icon]=\"['fas','folder-open']\"></fa-icon>\r\n      to open file<br>\r\n      Or drop file here\r\n    </gd-init-state>\r\n    <gd-hand-modal></gd-hand-modal>\r\n    <gd-stamp-modal></gd-stamp-modal>\r\n  </div>\r\n  <gd-browse-files-modal (urlForUpload)=\"upload($event)\" [files]=\"files\" (selectedDirectory)=\"selectDir($event)\"\r\n                         (selectedFileGuid)=\"selectFile($event, null, browseFilesModal)\"\r\n                         [uploadConfig]=\"uploadConfig\"></gd-browse-files-modal>\r\n\r\n  <gd-error-modal></gd-error-modal>\r\n  <gd-password-required></gd-password-required>\r\n  <gd-success-modal></gd-success-modal>\r\n</div>\r\n",
                styles: ["@import url(https://fonts.googleapis.com/css?family=Open+Sans&display=swap);:host *{font-family:'Open Sans',Arial,Helvetica,sans-serif}::ng-deep .page{position:relative}::ng-deep .gd-page-image{width:unset;height:unset}::ng-deep .top-panel{align-content:flex-start}.wrapper{-webkit-box-align:stretch;align-items:stretch;height:100%;width:100%;position:fixed;top:0;bottom:0;left:0;right:0}.doc-panel{display:-webkit-box;display:flex;height:inherit}.gd-document{width:100%;height:calc(100% - 90px)}.toolbar-panel{width:100%;display:-webkit-box;display:flex;-webkit-box-align:center;align-items:center}.signature-wrapper ::ng-deep .button{color:#3e4e5a!important}.signature-wrapper ::ng-deep .button .text{padding:0!important}.desktop-hide{display:none}@media (max-width:1037px){::ng-deep .logo ::ng-deep .icon{font-size:24px!important}::ng-deep .top-panel{height:120px!important}.desktop-hide{display:block}.gd-document{height:calc(100% - 120px)}::ng-deep .select{font-size:14px!important;min-width:60px!important}::ng-deep .gd-text-menu .button{margin:0 7px 0 0!important;font-size:14px!important}::ng-deep .format-select{margin:0 7px 0 0!important}::ng-deep .first-component{margin-left:15px!important}}"]
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
    { type: TopTabActivatorService },
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
    /** @type {?} */
    SignatureAppComponent.prototype._zoom;
    /** @type {?} */
    SignatureAppComponent.prototype._pageWidth;
    /** @type {?} */
    SignatureAppComponent.prototype._pageHeight;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2lnbmF0dXJlLWFwcC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ3JvdXBkb2NzLmV4YW1wbGVzLmFuZ3VsYXIvc2lnbmF0dXJlLyIsInNvdXJjZXMiOlsibGliL3NpZ25hdHVyZS1hcHAuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFrQyxNQUFNLGVBQWUsQ0FBQztBQUN6RSxPQUFPLEVBQUMsZ0JBQWdCLEVBQUMsTUFBTSxxQkFBcUIsQ0FBQztBQUNyRCxPQUFPLEVBR0wsWUFBWSxFQUNaLGtCQUFrQixFQUNsQixlQUFlLEVBQ2Ysa0JBQWtCLEVBRWxCLFdBQVcsRUFDWCxrQkFBa0IsRUFDbEIsUUFBUSxFQUNSLGVBQWUsRUFFZixZQUFZLEVBQ1osOEJBQThCLEVBQzlCLDBCQUEwQixFQUMxQixjQUFjLEVBQ2QsdUJBQXVCLEVBQ3ZCLGFBQWEsRUFDYixLQUFLLEVBQ0wsbUJBQW1CLEVBQ25CLHNCQUFzQixFQUN2QixNQUFNLCtDQUErQyxDQUFDO0FBRXZELE9BQU8sRUFBQyxzQkFBc0IsRUFBQyxNQUFNLDRCQUE0QixDQUFDO0FBQ2xFLE9BQU8sRUFDTCxjQUFjLEVBR2Qsa0JBQWtCLEVBQ2xCLFFBQVEsRUFDUixhQUFhLEVBQUUsY0FBYyxFQUM3QixhQUFhLEVBQ2QsTUFBTSxvQkFBb0IsQ0FBQztBQUM1QixPQUFPLEVBQUMsc0JBQXNCLEVBQUMsTUFBTSw0QkFBNEIsQ0FBQztBQUNsRSxPQUFPLEVBQUMsU0FBUyxFQUFDLE1BQU0saUNBQWlDLENBQUM7QUFDMUQsT0FBTyxFQUFDLG9CQUFvQixFQUFDLE1BQU0sMEJBQTBCLENBQUM7QUFDOUQsT0FBTyxFQUFDLHNCQUFzQixFQUFDLE1BQU0sNEJBQTRCLENBQUM7QUFDbEUsT0FBTyxFQUFDLHNCQUFzQixFQUFDLE1BQU0sNEJBQTRCLENBQUM7QUFDbEUsT0FBTyxFQUFDLHVCQUF1QixFQUFDLE1BQU0sNkJBQTZCLENBQUM7QUFDcEUsT0FBTyxVQUFVLENBQUM7QUFDbEIsT0FBTyxFQUFDLG9CQUFvQixFQUFDLE1BQU0sMEJBQTBCLENBQUM7QUFDOUQsT0FBTyxLQUFLLE1BQU0sTUFBTSxRQUFRLENBQUM7O01BRTNCLENBQUMsR0FBRyxNQUFNO0FBT2hCLE1BQU0sT0FBTyxxQkFBcUI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFpQ2hDLFlBQW9CLGlCQUFtQyxFQUNuQyxhQUEyQixFQUNuQyxhQUFxQyxFQUNyQyxrQkFBc0MsRUFDOUIsZ0JBQWlDLEVBQ2pDLFlBQXlCLEVBQ2pDLGtCQUFzQyxFQUM5QixtQkFBdUMsRUFDL0MsZUFBZ0MsRUFDeEIsY0FBNkIsRUFDN0IsdUJBQStDLEVBQy9DLDhCQUFzRCxFQUN0RCx5QkFBeUQsRUFDekQsMkJBQXVELEVBQ3ZELHFCQUEyQyxFQUMzQyxlQUErQixFQUN2QyxzQkFBOEMsRUFDdEMsdUJBQStDLEVBQy9DLGtCQUEyQyxFQUMzQyx3QkFBaUQsRUFDakQsb0JBQXlDLEVBQ2pELG9CQUEwQztRQXJCbEMsc0JBQWlCLEdBQWpCLGlCQUFpQixDQUFrQjtRQUNuQyxrQkFBYSxHQUFiLGFBQWEsQ0FBYztRQUczQixxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQWlCO1FBQ2pDLGlCQUFZLEdBQVosWUFBWSxDQUFhO1FBRXpCLHdCQUFtQixHQUFuQixtQkFBbUIsQ0FBb0I7UUFFdkMsbUJBQWMsR0FBZCxjQUFjLENBQWU7UUFDN0IsNEJBQXVCLEdBQXZCLHVCQUF1QixDQUF3QjtRQUMvQyxtQ0FBOEIsR0FBOUIsOEJBQThCLENBQXdCO1FBQ3RELDhCQUF5QixHQUF6Qix5QkFBeUIsQ0FBZ0M7UUFDekQsZ0NBQTJCLEdBQTNCLDJCQUEyQixDQUE0QjtRQUN2RCwwQkFBcUIsR0FBckIscUJBQXFCLENBQXNCO1FBQzNDLG9CQUFlLEdBQWYsZUFBZSxDQUFnQjtRQUUvQiw0QkFBdUIsR0FBdkIsdUJBQXVCLENBQXdCO1FBQy9DLHVCQUFrQixHQUFsQixrQkFBa0IsQ0FBeUI7UUFDM0MsNkJBQXdCLEdBQXhCLHdCQUF3QixDQUF5QjtRQUNqRCx5QkFBb0IsR0FBcEIsb0JBQW9CLENBQXFCO1FBcEQ3RCxVQUFLLEdBQUcsV0FBVyxDQUFDO1FBQ3BCLFVBQUssR0FBZ0IsRUFBRSxDQUFDO1FBR3hCLGVBQVUsR0FBRyxDQUFDLENBQUM7UUFDZixtQkFBYyxHQUFHLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQztRQUU1QixxQkFBZ0IsR0FBRyxZQUFZLENBQUMsV0FBVyxDQUFDO1FBRTVDLG1CQUFjLEdBQUc7WUFDZixhQUFhLENBQUMsSUFBSTtZQUNsQixhQUFhLENBQUMsS0FBSztZQUNuQixhQUFhLENBQUMsT0FBTztZQUNyQixhQUFhLENBQUMsT0FBTztZQUNyQixhQUFhLENBQUMsUUFBUTtZQUN0QixhQUFhLENBQUMsS0FBSztZQUNuQixhQUFhLENBQUMsSUFBSTtTQUNuQixDQUFDO1FBQ0YsdUJBQWtCLEdBQUc7WUFDbkIsYUFBYSxDQUFDLE9BQU87WUFDckIsYUFBYSxDQUFDLFFBQVE7U0FDdkIsQ0FBQztRQUVGLHdCQUFtQixHQUFHLElBQUksR0FBRyxFQUE2QixDQUFDO1FBRzNELG1CQUFjLEdBQUcsS0FBSyxDQUFDO1FBRXZCLFVBQUssR0FBRyxHQUFHLENBQUM7UUEyQlYsSUFBSSxDQUFDLG9CQUFvQixDQUFDLGVBQWUsQ0FBQyxTQUFTOzs7O1FBQUMsQ0FBQyxLQUFhLEVBQUUsRUFBRTtZQUNwRSxJQUFJLEtBQUssS0FBSyxHQUFHLEVBQUU7Z0JBQ2pCLElBQUksSUFBSSxDQUFDLGtCQUFrQixFQUFFO29CQUMzQixJQUFJLENBQUMsOEJBQThCLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDO2lCQUM5RTtnQkFDRCxJQUFJLENBQUMsa0JBQWtCLEdBQUcsSUFBSSxDQUFDO2FBQ2hDO1FBQ0gsQ0FBQyxFQUFDLENBQUM7UUFFSCxJQUFJLENBQUMsU0FBUyxHQUFHLGNBQWMsQ0FBQyxTQUFTLEVBQUUsQ0FBQztRQUM1QyxjQUFjLENBQUMsUUFBUSxDQUFDLFNBQVM7Ozs7UUFBQyxDQUFDLENBQUMsRUFBRSxFQUFFO1lBQ3RDLElBQUksQ0FBQyxjQUFjLENBQUMsUUFBUSxFQUFFLEVBQUU7Z0JBQzlCLElBQUksQ0FBQyxTQUFTLEdBQUcsY0FBYyxDQUFDLFNBQVMsRUFBRSxDQUFDO2dCQUM1QyxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRTtvQkFDbkIsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO2lCQUNwQjthQUNGO1FBQ0gsQ0FBQyxFQUFDLENBQUM7UUFFSCxvQkFBb0IsQ0FBQyxhQUFhLENBQUMsU0FBUzs7OztRQUFDLENBQUMsUUFBa0IsRUFBRSxFQUFFOztrQkFDNUQsWUFBWSxHQUFHLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQztZQUM5RCxJQUFJLFlBQVksRUFBRTs7O3NCQUVWLElBQUksR0FBRyxDQUFDLG1CQUFXLFlBQVksRUFBQSxDQUFDLENBQUMsUUFBUTs7c0JBQ3pDLFFBQVEsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU07Z0JBQ2pDLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDO2dCQUN2QixLQUFLLE1BQU0sSUFBSSxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFFO29CQUNsQyxJQUFJLElBQUksQ0FBQyxNQUFNLEtBQUssUUFBUSxFQUFFOzs4QkFDdEIsSUFBSSxHQUFHLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxJQUFJLEVBQUUsUUFBUSxFQUFFLElBQUksQ0FBQzs7OEJBQ3JELGNBQWMsR0FBRyxJQUFJLENBQUMsb0JBQW9CLENBQUMsUUFBUSxFQUFFLElBQUksRUFBRSxJQUFJLENBQUM7OzhCQUNoRSxFQUFFLEdBQUcsSUFBSSxDQUFDLHFCQUFxQixDQUFDLGNBQWMsRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksQ0FBQzt3QkFDdkUsSUFBSSxDQUFDLHdCQUF3QixDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLEVBQUUsQ0FBQyxDQUFDO3FCQUNwRDtpQkFDRjthQUNGO1FBQ0gsQ0FBQyxFQUFDLENBQUM7UUFFSCxvQkFBb0IsQ0FBQyxnQkFBZ0IsQ0FBQyxTQUFTOzs7O1FBQUMsQ0FBQyxXQUF3QixFQUFFLEVBQUU7O2tCQUNyRSxZQUFZLEdBQUcsSUFBSSxDQUFDLG1CQUFtQixDQUFDLEdBQUcsQ0FBQyxXQUFXLENBQUMsRUFBRSxDQUFDO1lBQ2pFLElBQUksWUFBWSxFQUFFOztzQkFDVixHQUFHLEdBQUcsSUFBSSxDQUFDLHdCQUF3QixDQUFDLEdBQUcsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDO2dCQUMvRCxLQUFLLE1BQU0sRUFBRSxJQUFJLEdBQUcsRUFBRTs7MEJBQ2QsT0FBTyxHQUFHLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDO29CQUNoRCxJQUFJLE9BQU8sRUFBRTs7OzhCQUVMLElBQUksR0FBRyxDQUFDLG1CQUFXLE9BQU8sRUFBQSxDQUFDLENBQUMsUUFBUTt3QkFDMUMsSUFBSSxJQUFJLENBQUMsRUFBRSxLQUFLLFdBQVcsQ0FBQyxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxJQUFJLElBQUksQ0FBQyxVQUFVLENBQUMsRUFBRTs0QkFDbEUsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLEdBQUcsV0FBVyxDQUFDLEtBQUssQ0FBQzs0QkFDcEMsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUcsV0FBVyxDQUFDLE1BQU0sQ0FBQzs0QkFDdEMsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLEdBQUcsV0FBVyxDQUFDLFFBQVEsQ0FBQzs0QkFDMUMsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLEdBQUcsV0FBVyxDQUFDLEtBQUssQ0FBQzt5QkFDckM7cUJBQ0Y7aUJBQ0Y7YUFDRjtRQUNILENBQUMsRUFBQyxDQUFDO1FBRUgsc0JBQXNCLENBQUMsZUFBZSxDQUFDLFNBQVM7Ozs7UUFBQyxDQUFDLEdBQWUsRUFBRSxFQUFFOztrQkFDN0QsR0FBRyxHQUFHLElBQUksQ0FBQyx3QkFBd0IsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQztZQUN2RCxLQUFLLE1BQU0sRUFBRSxJQUFJLEdBQUcsRUFBRTtnQkFDcEIsSUFBSSxHQUFHLENBQUMsSUFBSSxLQUFLLGFBQWEsQ0FBQyxPQUFPLENBQUMsRUFBRSxJQUFJLEdBQUcsQ0FBQyxFQUFFLEtBQUssRUFBRSxFQUFFOzswQkFDcEQsWUFBWSxHQUFHLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDO29CQUNyRCxJQUFJLFlBQVksRUFBRTt3QkFDaEIsWUFBWSxDQUFDLE9BQU8sRUFBRSxDQUFDO3FCQUN4QjtvQkFDRCxJQUFJLENBQUMsbUJBQW1CLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxDQUFDO29CQUNwQyxJQUFJLENBQUMsd0JBQXdCLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxJQUFJLEVBQUUsRUFBRSxDQUFDLENBQUM7aUJBQ3BEO2FBQ0Y7UUFDSCxDQUFDLEVBQUMsQ0FBQztRQUVILGFBQWEsQ0FBQyxhQUFhLENBQUMsU0FBUzs7OztRQUFDLENBQUMsZUFBZSxFQUFFLEVBQUU7WUFDeEQsSUFBSSxDQUFDLGVBQWUsR0FBRyxlQUFlLENBQUM7UUFDekMsQ0FBQyxFQUFDLENBQUM7UUFFSCxrQkFBa0IsQ0FBQyxhQUFhLENBQUMsU0FBUzs7OztRQUFDLENBQUMsT0FBTyxFQUFFLEVBQUU7WUFDckQsSUFBSSxPQUFPLEVBQUU7O29CQUNQLENBQVM7Z0JBQ2IsS0FBSyxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxPQUFPLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFO29CQUNuQyxJQUFJLENBQUMsaUJBQWlCLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxFQUFFLElBQUksQ0FBQyxhQUFhLEVBQUUsSUFBSSxDQUFDLENBQUMsU0FBUzs7OztvQkFBQyxDQUFDLEdBQW9CLEVBQUUsRUFBRTt3QkFDOUcsSUFBSSxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxHQUFHLENBQUMsSUFBSSxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxFQUFFLENBQUMsQ0FBQztvQkFDL0UsQ0FBQyxFQUFDLENBQUM7aUJBQ0o7YUFDRjtRQUNILENBQUMsRUFBQyxDQUFDO1FBRUgsa0JBQWtCLENBQUMsWUFBWSxDQUFDLFNBQVM7Ozs7UUFBQyxDQUFDLElBQVksRUFBRSxFQUFFO1lBQ3pELElBQUksSUFBSSxDQUFDLHNCQUFzQixLQUFLLENBQUMsRUFBRTtnQkFDckMsS0FBSyxJQUFJLENBQUMsR0FBRyxJQUFJLEVBQUUsQ0FBQyxHQUFHLElBQUksR0FBRyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUU7b0JBQ3BDLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLElBQUksSUFBSSxDQUFDLFVBQVUsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxJQUFJLEVBQUU7d0JBQ2pFLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO3FCQUN6QjtpQkFDRjthQUNGO1FBQ0gsQ0FBQyxFQUFDLENBQUM7UUFFSCxlQUFlLENBQUMsVUFBVSxDQUFDLFNBQVM7Ozs7UUFBQyxDQUFDLElBQVksRUFBRSxFQUFFO1lBQ3BELElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLEVBQUUsSUFBSSxFQUFFLFlBQVksQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO1FBQzlFLENBQUMsRUFBQyxDQUFDO1FBRUgsdUJBQXVCLENBQUMsZUFBZSxDQUFDLFNBQVM7Ozs7UUFBQyxDQUFDLElBQXdCLEVBQUUsRUFBRTtZQUM3RSxJQUFJLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQzdCLENBQUMsRUFBQyxDQUFDO1FBRUgsSUFBSSxDQUFDLFNBQVMsR0FBRyxjQUFjLENBQUMsU0FBUyxFQUFFLENBQUM7UUFDNUMsY0FBYyxDQUFDLFFBQVEsQ0FBQyxTQUFTOzs7O1FBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRTtZQUN0QyxJQUFJLENBQUMsU0FBUyxHQUFHLGNBQWMsQ0FBQyxTQUFTLEVBQUUsQ0FBQztRQUM5QyxDQUFDLEVBQUMsQ0FBQztJQUNMLENBQUM7Ozs7Ozs7O0lBRU8sbUJBQW1CLENBQUMsSUFBSSxFQUFFLFFBQWtCLEVBQUUsSUFBSTs7Y0FDbEQsSUFBSSxHQUFHLElBQUksa0JBQWtCLEVBQUU7UUFDckMsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDO1FBQ3RCLElBQUksQ0FBQyxJQUFJLEdBQUcsUUFBUSxDQUFDLElBQUksQ0FBQztRQUMxQixJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUM7UUFDOUIsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDO1FBQzlCLE9BQU8sSUFBSSxDQUFDO0lBQ2QsQ0FBQzs7Ozs7Ozs7SUFFTyxvQkFBb0IsQ0FBQyxRQUFrQixFQUFFLElBQUksRUFBRSxJQUFJOztjQUNuRCxjQUFjLEdBQUcsSUFBSSxjQUFjLEVBQUU7UUFDM0MsY0FBYyxDQUFDLElBQUksR0FBRyxRQUFRLENBQUMsSUFBSSxDQUFDO1FBQ3BDLGNBQWMsQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUM7UUFDckMsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssRUFBRTtZQUNuQixjQUFjLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDO1NBQ3hDO1FBQ0QsY0FBYyxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQztRQUN2QyxjQUFjLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDO1FBQ3pDLGNBQWMsQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQztRQUNwQyxPQUFPLGNBQWMsQ0FBQztJQUN4QixDQUFDOzs7O0lBRUQsUUFBUTtRQUNOLElBQUksSUFBSSxDQUFDLHFCQUFxQixFQUFFLEVBQUU7WUFDaEMsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUM7WUFDdEIsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMscUJBQXFCLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUM7U0FDdkQ7SUFDSCxDQUFDOzs7Ozs7SUFFTyxNQUFNLENBQUMsRUFBVTtRQUN2QixvQkFBb0I7UUFDcEIsT0FBTyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsQ0FBQztJQUN0QixDQUFDOzs7OztJQUVPLGFBQWE7OztjQUViLFNBQVMsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUM7O2NBQ3hDLFVBQVUsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUM7O2NBQzFDLFdBQVcsR0FBRyxTQUFTLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLFVBQVU7UUFFN0QsT0FBTyxDQUFDLFVBQVUsR0FBRyxTQUFTLElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxXQUFXLEdBQUcsTUFBTSxDQUFDLFVBQVUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxXQUFXLEdBQUcsR0FBRyxHQUFHLE1BQU0sQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsVUFBVSxHQUFHLEdBQUcsR0FBRyxXQUFXLENBQUMsQ0FBQztJQUNuTSxDQUFDOzs7OztJQUVELElBQUksSUFBSSxDQUFDLElBQUk7UUFDWCxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQztRQUNsQixJQUFJLENBQUMsWUFBWSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDM0MsQ0FBQzs7OztJQUVELElBQUksSUFBSTtRQUNOLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQztJQUNwQixDQUFDOzs7OztJQUVPLFdBQVc7UUFDakIsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsY0FBYyxDQUFDLFNBQVMsRUFBRSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQztJQUMzRSxDQUFDOzs7O0lBRUQsTUFBTTtRQUNKLElBQUksSUFBSSxDQUFDLGNBQWM7WUFDckIsT0FBTztRQUNULElBQUksSUFBSSxDQUFDLEtBQUssR0FBRyxHQUFHLEVBQUU7WUFDcEIsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsS0FBSyxHQUFHLEVBQUUsQ0FBQztTQUM3QjtJQUNILENBQUM7Ozs7SUFFRCxPQUFPO1FBQ0wsSUFBSSxJQUFJLENBQUMsY0FBYztZQUNyQixPQUFPO1FBQ1QsSUFBSSxJQUFJLENBQUMsS0FBSyxHQUFHLEVBQUUsRUFBRTtZQUNuQixJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxLQUFLLEdBQUcsRUFBRSxDQUFDO1NBQzdCO0lBQ0gsQ0FBQzs7OztJQUVELElBQUksYUFBYTtRQUNmLE9BQU8sSUFBSSxDQUFDLGVBQWUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQztJQUNwRSxDQUFDOzs7O0lBRUQsSUFBSSxVQUFVO1FBQ1osT0FBTyxJQUFJLENBQUMsZUFBZSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDO0lBQ2pFLENBQUM7Ozs7SUFFRCxJQUFJLGtCQUFrQjtRQUNwQixPQUFPLElBQUksQ0FBQyxlQUFlLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxlQUFlLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUM7SUFDekUsQ0FBQzs7OztJQUVELElBQUksc0JBQXNCO1FBQ3hCLE9BQU8sSUFBSSxDQUFDLGVBQWUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQzFFLENBQUM7Ozs7SUFFRCxJQUFJLGNBQWM7UUFDaEIsT0FBTyxJQUFJLENBQUMsZUFBZSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDO0lBQ3JFLENBQUM7Ozs7SUFFRCxJQUFJLHNCQUFzQjtRQUN4QixPQUFPLElBQUksQ0FBQyxlQUFlLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxlQUFlLENBQUMsZ0JBQWdCLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQztJQUM3RSxDQUFDOzs7O0lBRUQsSUFBSSxvQkFBb0I7UUFDdEIsT0FBTyxJQUFJLENBQUMsZUFBZSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDO0lBQzNFLENBQUM7Ozs7SUFFRCxJQUFJLFlBQVk7UUFDZCxPQUFPLElBQUksQ0FBQyxlQUFlLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxlQUFlLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUM7SUFDbkUsQ0FBQzs7Ozs7SUFFTyxxQkFBcUI7UUFDM0IsT0FBTyxJQUFJLENBQUMsZUFBZSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDLGVBQWUsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDO0lBQzFFLENBQUM7Ozs7SUFFRCxJQUFJLFdBQVc7UUFDYixPQUFPLElBQUksQ0FBQyxlQUFlLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxlQUFlLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUM7SUFDbEUsQ0FBQzs7OztJQUVELElBQUksWUFBWTtRQUNkLE9BQU8sSUFBSSxDQUFDLGVBQWUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQztJQUNuRSxDQUFDOzs7O0lBRUQsSUFBSSxjQUFjO1FBQ2hCLE9BQU8sS0FBSyxDQUFDO0lBQ2YsQ0FBQzs7OztJQUVELElBQUksc0JBQXNCO1FBQ3hCLE9BQU8sSUFBSSxDQUFDLGVBQWUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDO0lBQzdFLENBQUM7Ozs7SUFFRCxJQUFJLG1CQUFtQjtRQUNyQixPQUFPLElBQUksQ0FBQyxlQUFlLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxlQUFlLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUM7SUFDMUUsQ0FBQzs7OztJQUVELElBQUksb0JBQW9CO1FBQ3RCLE9BQU8sSUFBSSxDQUFDLGVBQWUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxjQUFjLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQztJQUMzRSxDQUFDOzs7O0lBRUQsSUFBSSxzQkFBc0I7UUFDeEIsT0FBTyxJQUFJLENBQUMsZUFBZSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDLGdCQUFnQixDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUM7SUFDN0UsQ0FBQzs7OztJQUVELElBQUkscUJBQXFCO1FBQ3ZCLE9BQU8sSUFBSSxDQUFDLGVBQWUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxlQUFlLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQztJQUM1RSxDQUFDOzs7O0lBRUQsSUFBSSxzQkFBc0I7UUFDeEIsT0FBTyxJQUFJLENBQUMsZUFBZSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDLGdCQUFnQixDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUM7SUFDN0UsQ0FBQzs7OztJQUVELElBQUksb0JBQW9CO1FBQ3RCLE9BQU8sSUFBSSxDQUFDLGVBQWUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxjQUFjLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQztJQUMzRSxDQUFDOzs7O0lBRUQsSUFBSSxtQkFBbUI7UUFDckIsT0FBTyxJQUFJLENBQUMsZUFBZSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDO0lBQzFFLENBQUM7Ozs7SUFFRCxJQUFJLFdBQVc7UUFDYixPQUFPLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxXQUFXLENBQUM7SUFDM0MsQ0FBQzs7Ozs7SUFFRCxTQUFTLENBQUMsRUFBVTtRQUNsQixJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQztJQUM5QixDQUFDOzs7OztJQUVELFVBQVUsQ0FBQyxFQUFVO1FBQ25CLElBQUksQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxDQUFDO0lBQy9CLENBQUM7Ozs7O0lBRUQsU0FBUyxDQUFDLE1BQWM7UUFDdEIsSUFBSSxDQUFDLGlCQUFpQixDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxTQUFTOzs7O1FBQUMsQ0FBQyxLQUFrQixFQUFFLEVBQUUsQ0FBQyxJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssSUFBSSxFQUFFLEVBQUMsQ0FBQztJQUN2RyxDQUFDOzs7Ozs7O0lBRUQsVUFBVSxDQUFDLE1BQWMsRUFBRSxRQUFnQixFQUFFLE9BQWU7UUFDMUQsSUFBSSxDQUFDLFdBQVcsR0FBRyxFQUFDLElBQUksRUFBRSxNQUFNLEVBQUUsUUFBUSxFQUFFLFFBQVEsRUFBQyxDQUFDO1FBQ3RELElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO1FBQ2pCLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDLFNBQVM7Ozs7UUFBQyxDQUFDLElBQXFCLEVBQUUsRUFBRTtZQUNsRixJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztZQUNqQixJQUFJLENBQUMsY0FBYyxHQUFHLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQztZQUNqQyxJQUFJLElBQUksRUFBRTtnQkFDUixJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsSUFBSSxJQUFJLENBQUMsS0FBSyxJQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLEVBQUU7b0JBQ2xELElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUM7b0JBQ3hDLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUM7b0JBQ3RDLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztpQkFDcEI7O3NCQUNLLGdCQUFnQixHQUFHLElBQUksQ0FBQyxzQkFBc0I7O3NCQUM5QyxVQUFVLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQ3JELElBQUksZ0JBQWdCLEdBQUcsQ0FBQyxFQUFFO29CQUN4QixJQUFJLENBQUMsWUFBWSxDQUFDLENBQUMsRUFBRSxnQkFBZ0IsR0FBRyxVQUFVLENBQUMsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztpQkFDckY7Z0JBQ0QsSUFBSSxDQUFDLGdCQUFnQixDQUFDLFVBQVUsR0FBRyxVQUFVLENBQUM7Z0JBQzlDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxXQUFXLEdBQUcsQ0FBQyxDQUFDO2dCQUN0QyxJQUFJLENBQUMsVUFBVSxHQUFHLFVBQVUsQ0FBQztnQkFDN0IsSUFBSSxDQUFDLGVBQWUsRUFBRSxDQUFDO2FBQ3hCO1FBQ0gsQ0FBQyxFQUNGLENBQUM7UUFDRixJQUFJLE9BQU8sRUFBRTtZQUNYLElBQUksQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1NBQ25DO1FBQ0QsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDO0lBQ25CLENBQUM7Ozs7OztJQUVELFlBQVksQ0FBQyxLQUFhLEVBQUUsR0FBVztRQUNyQyxLQUFLLElBQUksQ0FBQyxHQUFHLEtBQUssRUFBRSxDQUFDLElBQUksR0FBRyxFQUFFLENBQUMsRUFBRSxFQUFFO1lBQ2pDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDLENBQUMsQ0FBQyxTQUFTOzs7O1lBQUMsQ0FBQyxJQUFlLEVBQUUsRUFBRTtnQkFDakYsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQztZQUNoQyxDQUFDLEVBQUMsQ0FBQztTQUNKO0lBQ0gsQ0FBQzs7Ozs7SUFFRCxNQUFNLENBQUMsTUFBYztRQUNuQixJQUFJLENBQUMsaUJBQWlCLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRSxNQUFNLEVBQUUsSUFBSSxDQUFDLGFBQWEsRUFBRSxJQUFJLENBQUMsQ0FBQyxTQUFTOzs7UUFBQyxHQUFHLEVBQUU7WUFDbkYsSUFBSSxDQUFDLFNBQVMsQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUNyQixDQUFDLEVBQUMsQ0FBQztJQUNMLENBQUM7Ozs7SUFFRCxZQUFZO1FBQ1YsSUFBSSxJQUFJLENBQUMsY0FBYztZQUNyQixPQUFPO1FBQ1QsTUFBTSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLGlCQUFpQixDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQztJQUNsRixDQUFDOzs7OztJQUVPLFNBQVM7UUFDZixJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFFO1lBQ2xDLE9BQU87U0FDUjtRQUNELEtBQUssTUFBTSxJQUFJLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUU7WUFDbEMsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7U0FDbEI7SUFDSCxDQUFDOzs7OztJQUVELFlBQVksQ0FBQyxNQUFrQjtRQUM3QixPQUFPLElBQUksQ0FBQyxzQkFBc0IsQ0FBQztJQUNyQyxDQUFDOzs7OztJQUVELHNCQUFzQixDQUFDLEVBQVU7UUFDL0IsUUFBUSxFQUFFLEVBQUU7WUFDVixLQUFLLGFBQWEsQ0FBQyxJQUFJLENBQUMsRUFBRTtnQkFDeEIsT0FBTyxJQUFJLENBQUMsbUJBQW1CLENBQUM7WUFDbEMsS0FBSyxhQUFhLENBQUMsS0FBSyxDQUFDLEVBQUU7Z0JBQ3pCLE9BQU8sSUFBSSxDQUFDLG9CQUFvQixDQUFDO1lBQ25DLEtBQUssYUFBYSxDQUFDLE9BQU8sQ0FBQyxFQUFFO2dCQUMzQixPQUFPLElBQUksQ0FBQyxzQkFBc0IsQ0FBQztZQUNyQyxLQUFLLGFBQWEsQ0FBQyxPQUFPLENBQUMsRUFBRTtnQkFDM0IsT0FBTyxJQUFJLENBQUMscUJBQXFCLENBQUM7WUFDcEMsS0FBSyxhQUFhLENBQUMsUUFBUSxDQUFDLEVBQUU7Z0JBQzVCLE9BQU8sSUFBSSxDQUFDLHNCQUFzQixDQUFDO1lBQ3JDLEtBQUssYUFBYSxDQUFDLEtBQUssQ0FBQyxFQUFFO2dCQUN6QixPQUFPLElBQUksQ0FBQyxvQkFBb0IsQ0FBQztZQUNuQyxLQUFLLGFBQWEsQ0FBQyxJQUFJLENBQUMsRUFBRTtnQkFDeEIsT0FBTyxJQUFJLENBQUMsbUJBQW1CLENBQUM7U0FDbkM7SUFDSCxDQUFDOzs7OztJQUVELFFBQVEsQ0FBQyxNQUFpQjtRQUN4QixNQUFNLENBQUMsY0FBYyxFQUFFLENBQUM7UUFDeEIsTUFBTSxDQUFDLGVBQWUsRUFBRSxDQUFDO0lBQzNCLENBQUM7Ozs7O0lBRUQsYUFBYSxDQUFDLE1BQWlCO1FBQzdCLE1BQU0sQ0FBQyxjQUFjLEVBQUUsQ0FBQztRQUN4QixNQUFNLENBQUMsZUFBZSxFQUFFLENBQUM7O2NBQ25CLFFBQVEsR0FBRyxLQUFLLENBQUMsZ0JBQWdCLENBQUMsTUFBTSxDQUFDOztjQUV6QyxXQUFXLEdBQUcsUUFBUSxDQUFDLGdCQUFnQixDQUFDLFFBQVEsQ0FBQyxDQUFDLEVBQUUsUUFBUSxDQUFDLENBQUMsQ0FBQztRQUNyRSxJQUFJLFdBQVcsSUFBSSxDQUFDLENBQUMsV0FBVyxDQUFDLENBQUMsTUFBTSxFQUFFLENBQUMsTUFBTSxFQUFFLElBQUksQ0FBQyxDQUFDLFdBQVcsQ0FBQyxDQUFDLE1BQU0sRUFBRSxDQUFDLE1BQU0sRUFBRSxDQUFDLE1BQU0sRUFBRSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsRUFBRTs7a0JBQzNHLFlBQVksR0FBRyxDQUFDLENBQUMsV0FBVyxDQUFDLENBQUMsTUFBTSxFQUFFLENBQUMsTUFBTSxFQUFFLENBQUMsQ0FBQyxDQUFDOztrQkFDbEQsSUFBSSxHQUFHLENBQUMsUUFBUSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsWUFBWSxDQUFDLENBQUMsTUFBTSxFQUFFLENBQUMsSUFBSSxDQUFDLEdBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxHQUFDLEdBQUcsQ0FBQzs7a0JBQ25FLEdBQUcsR0FBRyxDQUFDLFFBQVEsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLFlBQVksQ0FBQyxDQUFDLE1BQU0sRUFBRSxDQUFDLEdBQUcsQ0FBQyxHQUFDLENBQUMsSUFBSSxDQUFDLElBQUksR0FBQyxHQUFHLENBQUM7O2tCQUNqRSxlQUFlLEdBQUcsSUFBSSxRQUFRLENBQUMsSUFBSSxFQUFFLEdBQUcsQ0FBQzs7a0JBQ3pDLElBQUksR0FBRyxJQUFJLENBQUMscUJBQXFCLENBQUMsSUFBSTtZQUM1QyxJQUFJLElBQUksRUFBRTs7c0JBQ0YsRUFBRSxHQUFHLENBQUMsQ0FBQyxXQUFXLENBQUMsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDO2dCQUM3QyxJQUFJLEVBQUUsRUFBRTs7MEJBQ0EsS0FBSyxHQUFHLEVBQUUsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDO29CQUMzQixJQUFJLENBQUMsVUFBVSxHQUFHLEtBQUssQ0FBQyxNQUFNLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDO2lCQUNqRjtnQkFDRCxJQUFJLENBQUMsUUFBUSxHQUFHLGVBQWUsQ0FBQztnQkFDaEMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsQ0FBQztnQkFDM0IsSUFBSSxDQUFDLHFCQUFxQixDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7YUFDeEM7U0FDRjtJQUNILENBQUM7Ozs7OztJQUVPLGVBQWUsQ0FBQyxJQUF3QjtRQUM5QyxJQUFJLElBQUksQ0FBQyxJQUFJLEtBQUssYUFBYSxDQUFDLE9BQU8sQ0FBQyxFQUFFLEVBQUU7O2tCQUNwQyxjQUFjLEdBQUcsSUFBSSxjQUFjLEVBQUU7WUFDM0MsY0FBYyxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDO1lBQ2hELGNBQWMsQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQztZQUNoQyxjQUFjLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUM7WUFDeEMsS0FBSyxNQUFNLElBQUksSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssRUFBRTs7c0JBQzVCLEVBQUUsR0FBRyxJQUFJLENBQUMscUJBQXFCLENBQUMsY0FBYyxFQUFFLElBQUksRUFBRSxJQUFJLENBQUM7Z0JBQ2pFLElBQUksQ0FBQyx3QkFBd0IsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxFQUFFLENBQUMsQ0FBQzthQUNwRDtZQUNELElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1NBQzFCO2FBQU07WUFDTCxJQUFJLENBQUMsaUJBQWlCLENBQUMsa0JBQWtCLENBQUMsSUFBSSxDQUFDLENBQUMsU0FBUzs7OztZQUFDLENBQUMsU0FBeUIsRUFBRSxFQUFFO2dCQUN0RixTQUFTLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUM7O3NCQUM3QixTQUFTLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSTs7OztnQkFBQyxVQUFVLENBQUM7b0JBQ2hELE9BQU8sQ0FBQyxDQUFDLE1BQU0sS0FBSyxJQUFJLENBQUMsVUFBVSxDQUFDO2dCQUN0QyxDQUFDLEVBQUM7O3NCQUNJLEVBQUUsR0FBRyxJQUFJLENBQUMscUJBQXFCLENBQUMsU0FBUyxFQUFFLElBQUksRUFBRSxTQUFTLENBQUM7Z0JBQ2pFLElBQUksQ0FBQyx3QkFBd0IsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxFQUFFLENBQUMsQ0FBQztnQkFDbkQsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDM0IsQ0FBQyxFQUFDLENBQUM7U0FDSjtJQUNILENBQUM7Ozs7Ozs7OztJQUVPLHFCQUFxQixDQUFDLGNBQThCLEVBQUUsSUFBd0IsRUFBRSxJQUFlLEVBQUUsU0FBa0IsS0FBSzs7Y0FDeEgsZ0JBQWdCLEdBQUcsSUFBSSxDQUFDLHlCQUF5QixDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDO1FBQ3pFLElBQUksZ0JBQWdCLEVBQUU7O2tCQUNkLGdCQUFnQixHQUFHLGdCQUFnQixDQUFDLGdCQUFnQjs7a0JBQ3BELGVBQWUsR0FBRyxJQUFJLENBQUMsMkJBQTJCLENBQUMsbUJBQW1CLENBQUMsZ0JBQWdCLEVBQUUsU0FBUyxDQUFDOztrQkFDbkcsRUFBRSxHQUFHLElBQUksQ0FBQyxTQUFTLEVBQUU7WUFDM0IsT0FBTyxjQUFjLENBQUMsS0FBSyxJQUFJLElBQUksQ0FBQyxLQUFLLElBQUksY0FBYyxDQUFDLE1BQU0sSUFBSSxJQUFJLENBQUMsTUFBTSxFQUFFO2dCQUNqRixjQUFjLENBQUMsS0FBSyxHQUFHLGNBQWMsQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDO2dCQUNoRCxjQUFjLENBQUMsTUFBTSxHQUFHLGNBQWMsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDO2FBQ25EO1lBQ0QsQ0FBQyxtQkFBVyxlQUFlLENBQUMsUUFBUSxFQUFBLENBQUMsQ0FBQyxFQUFFLEdBQUcsRUFBRSxDQUFDO1lBQzlDLENBQUMsbUJBQVcsZUFBZSxDQUFDLFFBQVEsRUFBQSxDQUFDLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQztZQUN0RCxDQUFDLG1CQUFXLGVBQWUsQ0FBQyxRQUFRLEVBQUEsQ0FBQyxDQUFDLElBQUksR0FBRyxjQUFjLENBQUM7WUFDNUQsQ0FBQyxtQkFBVyxlQUFlLENBQUMsUUFBUSxFQUFBLENBQUMsQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQztZQUMvRCxDQUFDLG1CQUFXLGVBQWUsQ0FBQyxRQUFRLEVBQUEsQ0FBQyxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDO1lBQ3ZELENBQUMsbUJBQVcsZUFBZSxDQUFDLFFBQVEsRUFBQSxDQUFDLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUM7WUFDN0QsQ0FBQyxtQkFBVyxlQUFlLENBQUMsUUFBUSxFQUFBLENBQUMsQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQztZQUMvRCxJQUFJLENBQUMsbUJBQW1CLENBQUMsR0FBRyxDQUFDLEVBQUUsRUFBRSxlQUFlLENBQUMsQ0FBQztZQUNsRCxJQUFJLENBQUMsdUJBQXVCLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1lBQzlDLE9BQU8sRUFBRSxDQUFDO1NBQ1g7UUFDRCxPQUFPLElBQUksQ0FBQztJQUNkLENBQUM7Ozs7O0lBRU8sU0FBUzs7WUFDWCxLQUFLLEdBQUcsQ0FBQztRQUNiLEtBQUssTUFBTSxLQUFLLElBQUksSUFBSSxDQUFDLG1CQUFtQixDQUFDLElBQUksRUFBRSxFQUFFO1lBQ25ELElBQUksS0FBSyxHQUFHLEtBQUssRUFBRTtnQkFDakIsS0FBSyxHQUFHLEtBQUssQ0FBQzthQUNmO1NBQ0Y7O2NBQ0ssRUFBRSxHQUFHLEtBQUssR0FBRyxDQUFDO1FBQ3BCLE9BQU8sRUFBRSxDQUFDO0lBQ1osQ0FBQzs7Ozs7O0lBRU8sUUFBUSxDQUFDLElBQVk7UUFDM0IsSUFBSSxDQUFDLDhCQUE4QixDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUM1RCxDQUFDOzs7OztJQUVELE9BQU8sQ0FBQyxNQUFNO1FBQ1osSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsYUFBYSxJQUFJLE1BQU0sQ0FBQyxNQUFNLENBQUMsYUFBYSxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUM7WUFDaEYsTUFBTSxDQUFDLE1BQU0sQ0FBQyxhQUFhLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxDQUFDLEtBQUssS0FBSyxRQUFRLENBQUM7WUFDbEUsQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLGFBQWE7Z0JBQzFCLE1BQU0sQ0FBQyxNQUFNLENBQUMsYUFBYSxDQUFDLGFBQWE7Z0JBQ3pDLE1BQU0sQ0FBQyxNQUFNLENBQUMsYUFBYSxDQUFDLGFBQWEsQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDO2dCQUM1RCxNQUFNLENBQUMsTUFBTSxDQUFDLGFBQWEsQ0FBQyxhQUFhLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxDQUFDLEtBQUssS0FBSyxRQUFRLENBQUM7WUFDbEYsQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLGFBQWE7Z0JBQzFCLE1BQU0sQ0FBQyxNQUFNLENBQUMsYUFBYSxDQUFDLGFBQWE7Z0JBQ3pDLE1BQU0sQ0FBQyxNQUFNLENBQUMsYUFBYSxDQUFDLGFBQWEsQ0FBQyxhQUFhO2dCQUN2RCxNQUFNLENBQUMsTUFBTSxDQUFDLGFBQWEsQ0FBQyxhQUFhLENBQUMsYUFBYSxDQUFDLGFBQWE7Z0JBQ3JFLE1BQU0sQ0FBQyxNQUFNLENBQUMsYUFBYSxDQUFDLGFBQWEsQ0FBQyxhQUFhLENBQUMsYUFBYSxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUM7Z0JBQ3hGLE1BQU0sQ0FBQyxNQUFNLENBQUMsYUFBYSxDQUFDLGFBQWEsQ0FBQyxhQUFhLENBQUMsYUFBYSxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsQ0FBQyxLQUFLLEtBQUssUUFBUSxDQUFDLEVBQUU7WUFFaEgsT0FBTztTQUNSO1FBQ0QsSUFBSSxDQUFDLGVBQWUsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDbkMsQ0FBQzs7Ozs7SUFFRCxPQUFPLENBQUMsTUFBYztRQUNwQixJQUFJLGFBQWEsQ0FBQyxJQUFJLENBQUMsRUFBRSxLQUFLLE1BQU0sRUFBRTtZQUNwQyxJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsaUJBQWlCLENBQUMsQ0FBQztTQUN6RDthQUFNLElBQUksYUFBYSxDQUFDLEtBQUssQ0FBQyxFQUFFLEtBQUssTUFBTSxFQUFFO1lBQzVDLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDO1NBQzFEO2FBQU0sSUFBSSxhQUFhLENBQUMsSUFBSSxDQUFDLEVBQUUsS0FBSyxNQUFNLEVBQUU7WUFDM0MsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO1lBQ25CLElBQUksQ0FBQyw4QkFBOEIsQ0FBQyxlQUFlLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQztTQUM1RTtJQUNILENBQUM7Ozs7O0lBRU8sV0FBVzs7Y0FDWCxTQUFTLEdBQUcsSUFBSSxjQUFjLEVBQUU7UUFDdEMsU0FBUyxDQUFDLEtBQUssR0FBRyxjQUFjLENBQUMsVUFBVSxFQUFFLENBQUM7UUFDOUMsU0FBUyxDQUFDLElBQUksR0FBRyxrQkFBa0IsQ0FBQyxJQUFJLENBQUM7O2NBQ25DLElBQUksR0FBRyxJQUFJLGtCQUFrQixFQUFFO1FBQ3JDLElBQUksQ0FBQyxJQUFJLEdBQUcsa0JBQWtCLENBQUMsSUFBSSxDQUFDO1FBQ3BDLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxRQUFRLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBQ25DLElBQUksQ0FBQyxJQUFJLEdBQUcsYUFBYSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUM7O2NBQzVCLFVBQVUsR0FBRyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsV0FBVztRQUNwRCxTQUFTLENBQUMsTUFBTSxHQUFHLFVBQVUsQ0FBQztRQUM5QixJQUFJLENBQUMsVUFBVSxHQUFHLFVBQVUsQ0FBQzs7Y0FDdkIsU0FBUyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUk7Ozs7UUFBQyxVQUFVLENBQUM7WUFDaEQsT0FBTyxDQUFDLENBQUMsTUFBTSxLQUFLLFVBQVUsQ0FBQztRQUNqQyxDQUFDLEVBQUM7O2NBQ0ksRUFBRSxHQUFHLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxTQUFTLEVBQUUsSUFBSSxFQUFFLFNBQVMsQ0FBQztRQUNqRSxJQUFJLENBQUMsd0JBQXdCLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsRUFBRSxDQUFDLENBQUM7SUFDckQsQ0FBQzs7OztJQUVELFdBQVc7UUFDVCxJQUFJLENBQUMsZUFBZSxFQUFFLENBQUM7SUFDekIsQ0FBQzs7Ozs7SUFFTyxlQUFlO1FBQ3JCLEtBQUssTUFBTSxZQUFZLElBQUksSUFBSSxDQUFDLG1CQUFtQixDQUFDLE1BQU0sRUFBRSxFQUFFO1lBQzVELFlBQVksQ0FBQyxPQUFPLEVBQUUsQ0FBQztTQUN4QjtRQUNELElBQUksQ0FBQyxtQkFBbUIsR0FBRyxJQUFJLEdBQUcsRUFBNkIsQ0FBQztRQUNoRSxJQUFJLENBQUMsd0JBQXdCLENBQUMsS0FBSyxFQUFFLENBQUM7SUFDeEMsQ0FBQzs7OztJQUVELElBQUk7O2NBQ0ksVUFBVSxHQUFHLElBQUksQ0FBQyxxQkFBcUIsRUFBRTtRQUMvQyxJQUFJLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLEVBQUUsVUFBVSxDQUFDLENBQUMsU0FBUzs7OztRQUFDLENBQUMsR0FBUSxFQUFFLEVBQUU7WUFDL0UsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLGdCQUFnQixDQUFDLENBQUM7WUFDdkQsSUFBSSxDQUFDLFVBQVUsQ0FBQyxHQUFHLENBQUMsSUFBSSxFQUFFLElBQUksRUFBRSxZQUFZLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztRQUNqRSxDQUFDLEVBQUMsQ0FBQztJQUNMLENBQUM7Ozs7SUFFTSxxQkFBcUI7O2NBQ3BCLFVBQVUsR0FBRyxFQUFFO1FBQ3JCLEtBQUssTUFBTSxHQUFHLElBQUksSUFBSSxDQUFDLHdCQUF3QixDQUFDLE1BQU0sRUFBRSxFQUFFO1lBQ3hELEtBQUssTUFBTSxFQUFFLElBQUksR0FBRyxFQUFFOztzQkFDZCxZQUFZLEdBQUcsSUFBSSxDQUFDLG1CQUFtQixDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUM7OztzQkFFL0MsSUFBSSxHQUFHLENBQUMsbUJBQVcsWUFBWSxFQUFBLENBQUMsQ0FBQyxRQUFROztzQkFDekMsSUFBSSxHQUFHLElBQUksQ0FBQyxJQUFJOztzQkFDaEIsUUFBUSxHQUFHLElBQUksQ0FBQyxRQUFROztzQkFDeEIsSUFBSSxHQUFHLElBQUksQ0FBQyxJQUFJO2dCQUV0QixJQUFJLGtCQUFrQixDQUFDLElBQUksS0FBSyxJQUFJLENBQUMsSUFBSSxFQUFFO29CQUN6QyxVQUFVLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxHQUFHLENBQUMsSUFBSSxFQUFFLElBQUksRUFBRSxRQUFRLENBQUMsQ0FBQyxDQUFDO2lCQUMxRDtnQkFFRCxJQUFJLGFBQWEsQ0FBQyxPQUFPLENBQUMsRUFBRSxLQUFLLElBQUksRUFBRTtvQkFDckMsTUFBTTtpQkFDUDthQUNGO1NBQ0Y7UUFDRCxPQUFPLFVBQVUsQ0FBQztJQUNwQixDQUFDOzs7O0lBRUQsS0FBSztRQUNILElBQUksSUFBSSxDQUFDLElBQUksRUFBRTtZQUNiLElBQUksUUFBUSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxLQUFLLENBQUMsQ0FBQyxNQUFNLEtBQUssMEJBQTBCLEVBQUU7Z0JBQzlFLE9BQU8sSUFBSSxDQUFDO2FBQ2I7U0FDRjtRQUNELE9BQU8sS0FBSyxDQUFDO0lBQ2YsQ0FBQzs7OztJQUVELFdBQVc7UUFDVCxPQUFPLElBQUksQ0FBQyxzQkFBc0IsQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLElBQUksQ0FBQyxzQkFBc0IsQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQyxDQUFDO0lBQ3pILENBQUM7Ozs7O0lBRUQsU0FBUyxDQUFDLEVBQVU7O2NBQ1osT0FBTyxHQUFHLEVBQUUsS0FBSyxhQUFhLENBQUMsUUFBUSxDQUFDLEVBQUUsSUFBSSxFQUFFLEtBQUssYUFBYSxDQUFDLE9BQU8sQ0FBQyxFQUFFO1FBQ25GLE9BQU8sSUFBSSxDQUFDLHNCQUFzQixDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsSUFBSSxPQUFPLENBQUMsQ0FBQztJQUN4RSxDQUFDOzs7OztJQUVELFNBQVMsQ0FBQyxNQUFjO1FBQ3RCLElBQUksQ0FBQyxrQkFBa0IsR0FBRyxNQUFNLENBQUM7SUFDbkMsQ0FBQzs7Ozs7SUFFRCxXQUFXLENBQUMsTUFBTTtRQUNoQixJQUFJLENBQUMsY0FBYyxHQUFHLE1BQU0sQ0FBQztJQUMvQixDQUFDOzs7OztJQUVELFVBQVUsQ0FBQyxhQUF3RTtRQUNqRixJQUFJLENBQUMsYUFBYSxDQUFDLEVBQUUsS0FBSyxhQUFhLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsU0FBUyxJQUFJLGFBQWEsQ0FBQyxFQUFFLEtBQUssYUFBYSxDQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUMsRUFBRTtZQUN0SCxPQUFPLENBQUMsQ0FBQyxDQUFDO1NBQ1g7UUFDRCxJQUFJLENBQUMsYUFBYSxDQUFDLEVBQUUsS0FBSyxhQUFhLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsU0FBUyxJQUFJLGFBQWEsQ0FBQyxFQUFFLEtBQUssYUFBYSxDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUMsRUFBRTtZQUN2SCxPQUFPLENBQUMsQ0FBQztTQUNWO1FBQ0QsT0FBTyxDQUFDLENBQUM7SUFDWCxDQUFDOzs7OztJQUVELEtBQUssQ0FBQyxNQUFNO1FBRVYsSUFBSSxDQUFDLFlBQVksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQzNDLENBQUM7OztZQXBvQkYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxjQUFjO2dCQUN4Qix1dUlBQTZDOzthQUU5Qzs7OztZQW5ETyxnQkFBZ0I7WUFJdEIsWUFBWTtZQXFCTixzQkFBc0I7WUFwQjVCLGtCQUFrQjtZQUNsQixlQUFlO1lBR2YsV0FBVztZQUZYLGtCQUFrQjtZQUdsQixrQkFBa0I7WUFFbEIsZUFBZTtZQU9mLGFBQWE7WUFnQlAsc0JBQXNCO1lBYjVCLHNCQUFzQjtZQVB0Qiw4QkFBOEI7WUFDOUIsMEJBQTBCO1lBcUJwQixvQkFBb0I7WUFwQjFCLGNBQWM7WUFxQlIsc0JBQXNCO1lBQ3RCLHNCQUFzQjtZQXJCNUIsdUJBQXVCO1lBc0JqQix1QkFBdUI7WUFuQjdCLG1CQUFtQjtZQXFCYixvQkFBb0I7Ozs7SUFXMUIsc0NBQW9COztJQUNwQixzQ0FBd0I7O0lBQ3hCLHFDQUFzQjs7SUFDdEIsZ0RBQWlDOztJQUNqQywyQ0FBZTs7SUFDZiwrQ0FBNEI7O0lBQzVCLDRDQUE2Qjs7SUFDN0IsaURBQTRDOztJQUM1QywwQ0FBbUI7O0lBQ25CLCtDQVFFOztJQUNGLG1EQUdFOztJQUVGLG9EQUEyRDs7SUFDM0QsbURBQTJCOztJQUMzQiwwQ0FBbUI7O0lBQ25CLCtDQUF1Qjs7SUFFdkIsc0NBQVk7O0lBQ1osMkNBQW1COztJQUNuQiw0Q0FBb0I7Ozs7O0lBRVIsa0RBQTJDOzs7OztJQUMzQyw4Q0FBbUM7Ozs7O0lBR25DLGlEQUF5Qzs7Ozs7SUFDekMsNkNBQWlDOzs7OztJQUVqQyxvREFBK0M7Ozs7O0lBRS9DLCtDQUFxQzs7Ozs7SUFDckMsd0RBQXVEOzs7OztJQUN2RCwrREFBOEQ7Ozs7O0lBQzlELDBEQUFpRTs7Ozs7SUFDakUsNERBQStEOzs7OztJQUMvRCxzREFBbUQ7Ozs7O0lBQ25ELGdEQUF1Qzs7Ozs7SUFFdkMsd0RBQXVEOzs7OztJQUN2RCxtREFBbUQ7Ozs7O0lBQ25ELHlEQUF5RDs7Ozs7SUFDekQscURBQWlEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIENvbXBvbmVudFJlZiwgT25EZXN0cm95LCBPbkluaXR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQge1NpZ25hdHVyZVNlcnZpY2V9IGZyb20gXCIuL3NpZ25hdHVyZS5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7XHJcbiAgRmlsZURlc2NyaXB0aW9uLFxyXG4gIEZpbGVNb2RlbCxcclxuICBNb2RhbFNlcnZpY2UsXHJcbiAgVXBsb2FkRmlsZXNTZXJ2aWNlLFxyXG4gIE5hdmlnYXRlU2VydmljZSxcclxuICBQYWdlUHJlbG9hZFNlcnZpY2UsXHJcbiAgUGFnZU1vZGVsLFxyXG4gIFpvb21TZXJ2aWNlLFxyXG4gIFJlbmRlclByaW50U2VydmljZSxcclxuICBGaWxlVXRpbCxcclxuICBQYXNzd29yZFNlcnZpY2UsXHJcbiAgRmlsZUNyZWRlbnRpYWxzLFxyXG4gIENvbW1vbk1vZGFscyxcclxuICBIb3N0aW5nRHluYW1pY0NvbXBvbmVudFNlcnZpY2UsXHJcbiAgQWRkRHluYW1pY0NvbXBvbmVudFNlcnZpY2UsXHJcbiAgT25DbG9zZVNlcnZpY2UsXHJcbiAgRXhjZXB0aW9uTWVzc2FnZVNlcnZpY2UsXHJcbiAgV2luZG93U2VydmljZSxcclxuICBVdGlscyxcclxuICBUYWJBY3RpdmF0b3JTZXJ2aWNlLFxyXG4gIFRvcFRhYkFjdGl2YXRvclNlcnZpY2VcclxufSBmcm9tIFwiQGdyb3VwZG9jcy5leGFtcGxlcy5hbmd1bGFyL2NvbW1vbi1jb21wb25lbnRzXCI7XHJcbmltcG9ydCB7U2lnbmF0dXJlQ29uZmlnfSBmcm9tIFwiLi9zaWduYXR1cmUtY29uZmlnXCI7XHJcbmltcG9ydCB7U2lnbmF0dXJlQ29uZmlnU2VydmljZX0gZnJvbSBcIi4vc2lnbmF0dXJlLWNvbmZpZy5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7XHJcbiAgQWRkZWRTaWduYXR1cmUsXHJcbiAgQ29weUNoYW5nZXMsXHJcbiAgQ29weVNpZ24sXHJcbiAgRHJhZ2dhYmxlU2lnbmF0dXJlLFxyXG4gIFBvc2l0aW9uLCBSZW1vdmVTaWduLFxyXG4gIFNpZ25hdHVyZURhdGEsIFNpZ25hdHVyZVByb3BzLFxyXG4gIFNpZ25hdHVyZVR5cGVcclxufSBmcm9tIFwiLi9zaWduYXR1cmUtbW9kZWxzXCI7XHJcbmltcG9ydCB7U2VsZWN0U2lnbmF0dXJlU2VydmljZX0gZnJvbSBcIi4vc2VsZWN0LXNpZ25hdHVyZS5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7U2lnbmF0dXJlfSBmcm9tIFwiLi9zaWduYXR1cmUvc2lnbmF0dXJlLmNvbXBvbmVudFwiO1xyXG5pbXBvcnQge0RyYWdTaWduYXR1cmVTZXJ2aWNlfSBmcm9tIFwiLi9kcmFnLXNpZ25hdHVyZS5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7UmVtb3ZlU2lnbmF0dXJlU2VydmljZX0gZnJvbSBcIi4vcmVtb3ZlLXNpZ25hdHVyZS5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7QWN0aXZlU2lnbmF0dXJlU2VydmljZX0gZnJvbSBcIi4vYWN0aXZlLXNpZ25hdHVyZS5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7U2lnbmF0dXJlc0hvbGRlclNlcnZpY2V9IGZyb20gXCIuL3NpZ25hdHVyZXMtaG9sZGVyLnNlcnZpY2VcIjtcclxuaW1wb3J0ICdoYW1tZXJqcyc7XHJcbmltcG9ydCB7Q29weVNpZ25hdHVyZVNlcnZpY2V9IGZyb20gXCIuL2NvcHktc2lnbmF0dXJlLnNlcnZpY2VcIjtcclxuaW1wb3J0ICogYXMganF1ZXJ5IGZyb20gJ2pxdWVyeSc7XHJcblxyXG5jb25zdCAkID0ganF1ZXJ5O1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdnZC1zaWduYXR1cmUnLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9zaWduYXR1cmUtYXBwLmNvbXBvbmVudC5odG1sJyxcclxuICBzdHlsZVVybHM6IFsnLi9zaWduYXR1cmUtYXBwLmNvbXBvbmVudC5sZXNzJ11cclxufSlcclxuZXhwb3J0IGNsYXNzIFNpZ25hdHVyZUFwcENvbXBvbmVudCBpbXBsZW1lbnRzIE9uRGVzdHJveSwgT25Jbml0IHtcclxuICB0aXRsZSA9ICdzaWduYXR1cmUnO1xyXG4gIGZpbGVzOiBGaWxlTW9kZWxbXSA9IFtdO1xyXG4gIGZpbGU6IEZpbGVEZXNjcmlwdGlvbjtcclxuICBzaWduYXR1cmVDb25maWc6IFNpZ25hdHVyZUNvbmZpZztcclxuICBjb3VudFBhZ2VzID0gMDtcclxuICBmb3JtYXREaXNhYmxlZCA9ICF0aGlzLmZpbGU7XHJcbiAgY3JlZGVudGlhbHM6IEZpbGVDcmVkZW50aWFscztcclxuICBicm93c2VGaWxlc01vZGFsID0gQ29tbW9uTW9kYWxzLkJyb3dzZUZpbGVzO1xyXG4gIGlzRGVza3RvcDogYm9vbGVhbjtcclxuICBzaWduYXR1cmVUeXBlcyA9IFtcclxuICAgIFNpZ25hdHVyZVR5cGUuVEVYVCxcclxuICAgIFNpZ25hdHVyZVR5cGUuSU1BR0UsXHJcbiAgICBTaWduYXR1cmVUeXBlLkRJR0lUQUwsXHJcbiAgICBTaWduYXR1cmVUeXBlLlFSX0NPREUsXHJcbiAgICBTaWduYXR1cmVUeXBlLkJBUl9DT0RFLFxyXG4gICAgU2lnbmF0dXJlVHlwZS5TVEFNUCxcclxuICAgIFNpZ25hdHVyZVR5cGUuSEFORCxcclxuICBdO1xyXG4gIHNpZ25hdHVyZVR5cGVDb2RlcyA9IFtcclxuICAgIFNpZ25hdHVyZVR5cGUuUVJfQ09ERSxcclxuICAgIFNpZ25hdHVyZVR5cGUuQkFSX0NPREUsXHJcbiAgXTtcclxuXHJcbiAgc2lnbmF0dXJlQ29tcG9uZW50cyA9IG5ldyBNYXA8bnVtYmVyLCBDb21wb25lbnRSZWY8YW55Pj4oKTtcclxuICBhY3RpdmVTaWduYXR1cmVUYWI6IHN0cmluZztcclxuICBpc0xvYWRpbmc6IGJvb2xlYW47XHJcbiAgZmlsZVdhc0Ryb3BwZWQgPSBmYWxzZTtcclxuXHJcbiAgX3pvb20gPSAxMDA7XHJcbiAgX3BhZ2VXaWR0aDogbnVtYmVyO1xyXG4gIF9wYWdlSGVpZ2h0OiBudW1iZXI7XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgX3NpZ25hdHVyZVNlcnZpY2U6IFNpZ25hdHVyZVNlcnZpY2UsXHJcbiAgICAgICAgICAgICAgcHJpdmF0ZSBfbW9kYWxTZXJ2aWNlOiBNb2RhbFNlcnZpY2UsXHJcbiAgICAgICAgICAgICAgY29uZmlnU2VydmljZTogU2lnbmF0dXJlQ29uZmlnU2VydmljZSxcclxuICAgICAgICAgICAgICB1cGxvYWRGaWxlc1NlcnZpY2U6IFVwbG9hZEZpbGVzU2VydmljZSxcclxuICAgICAgICAgICAgICBwcml2YXRlIF9uYXZpZ2F0ZVNlcnZpY2U6IE5hdmlnYXRlU2VydmljZSxcclxuICAgICAgICAgICAgICBwcml2YXRlIF96b29tU2VydmljZTogWm9vbVNlcnZpY2UsXHJcbiAgICAgICAgICAgICAgcGFnZVByZWxvYWRTZXJ2aWNlOiBQYWdlUHJlbG9hZFNlcnZpY2UsXHJcbiAgICAgICAgICAgICAgcHJpdmF0ZSBfcmVuZGVyUHJpbnRTZXJ2aWNlOiBSZW5kZXJQcmludFNlcnZpY2UsXHJcbiAgICAgICAgICAgICAgcGFzc3dvcmRTZXJ2aWNlOiBQYXNzd29yZFNlcnZpY2UsXHJcbiAgICAgICAgICAgICAgcHJpdmF0ZSBfd2luZG93U2VydmljZTogV2luZG93U2VydmljZSxcclxuICAgICAgICAgICAgICBwcml2YXRlIF9zZWxlY3RTaWduYXR1cmVTZXJ2aWNlOiBTZWxlY3RTaWduYXR1cmVTZXJ2aWNlLFxyXG4gICAgICAgICAgICAgIHByaXZhdGUgX3NpZ25hdHVyZVRhYkFjdGl2YXRpb25TZXJ2aWNlOiBUb3BUYWJBY3RpdmF0b3JTZXJ2aWNlLFxyXG4gICAgICAgICAgICAgIHByaXZhdGUgX2hvc3RpbmdDb21wb25lbnRzU2VydmljZTogSG9zdGluZ0R5bmFtaWNDb21wb25lbnRTZXJ2aWNlLFxyXG4gICAgICAgICAgICAgIHByaXZhdGUgX2FkZER5bmFtaWNDb21wb25lbnRTZXJ2aWNlOiBBZGREeW5hbWljQ29tcG9uZW50U2VydmljZSxcclxuICAgICAgICAgICAgICBwcml2YXRlIF9kcmFnU2lnbmF0dXJlU2VydmljZTogRHJhZ1NpZ25hdHVyZVNlcnZpY2UsXHJcbiAgICAgICAgICAgICAgcHJpdmF0ZSBfb25DbG9zZVNlcnZpY2U6IE9uQ2xvc2VTZXJ2aWNlLFxyXG4gICAgICAgICAgICAgIHJlbW92ZVNpZ25hdHVyZVNlcnZpY2U6IFJlbW92ZVNpZ25hdHVyZVNlcnZpY2UsXHJcbiAgICAgICAgICAgICAgcHJpdmF0ZSBfYWN0aXZlU2lnbmF0dXJlU2VydmljZTogQWN0aXZlU2lnbmF0dXJlU2VydmljZSxcclxuICAgICAgICAgICAgICBwcml2YXRlIF9leGNNZXNzYWdlU2VydmljZTogRXhjZXB0aW9uTWVzc2FnZVNlcnZpY2UsXHJcbiAgICAgICAgICAgICAgcHJpdmF0ZSBfc2lnbmF0dXJlc0hvbGRlclNlcnZpY2U6IFNpZ25hdHVyZXNIb2xkZXJTZXJ2aWNlLFxyXG4gICAgICAgICAgICAgIHByaXZhdGUgX3RhYkFjdGl2YXRvclNlcnZpY2U6IFRhYkFjdGl2YXRvclNlcnZpY2UsXHJcbiAgICAgICAgICAgICAgY29weVNpZ25hdHVyZVNlcnZpY2U6IENvcHlTaWduYXR1cmVTZXJ2aWNlKSB7XHJcblxyXG4gICAgdGhpcy5fdGFiQWN0aXZhdG9yU2VydmljZS5hY3RpdmVUYWJDaGFuZ2Uuc3Vic2NyaWJlKCh0YWJJZDogc3RyaW5nKSA9PiB7XHJcbiAgICAgIGlmICh0YWJJZCA9PT0gJzEnKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuYWN0aXZlU2lnbmF0dXJlVGFiKSB7XHJcbiAgICAgICAgICB0aGlzLl9zaWduYXR1cmVUYWJBY3RpdmF0aW9uU2VydmljZS5jaGFuZ2VBY3RpdmVUYWIodGhpcy5hY3RpdmVTaWduYXR1cmVUYWIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmFjdGl2ZVNpZ25hdHVyZVRhYiA9IG51bGw7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICAgIHRoaXMuaXNEZXNrdG9wID0gX3dpbmRvd1NlcnZpY2UuaXNEZXNrdG9wKCk7XHJcbiAgICBfd2luZG93U2VydmljZS5vblJlc2l6ZS5zdWJzY3JpYmUoKHcpID0+IHtcclxuICAgICAgaWYgKCFfd2luZG93U2VydmljZS5pc01vYmlsZSgpKSB7XHJcbiAgICAgICAgdGhpcy5pc0Rlc2t0b3AgPSBfd2luZG93U2VydmljZS5pc0Rlc2t0b3AoKTtcclxuICAgICAgICBpZiAoIXRoaXMuaXNEZXNrdG9wKSB7XHJcbiAgICAgICAgICB0aGlzLnJlZnJlc2hab29tKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9KTtcclxuXHJcbiAgICBjb3B5U2lnbmF0dXJlU2VydmljZS5jb3B5U2lnbmF0dXJlLnN1YnNjcmliZSgoY29weVNpZ246IENvcHlTaWduKSA9PiB7XHJcbiAgICAgIGNvbnN0IGNvbXBvbmVudFJlZiA9IHRoaXMuc2lnbmF0dXJlQ29tcG9uZW50cy5nZXQoY29weVNpZ24uaWQpO1xyXG4gICAgICBpZiAoY29tcG9uZW50UmVmKSB7XHJcbiAgICAgICAgLy8gQHRzLWlnbm9yZVxyXG4gICAgICAgIGNvbnN0IGNvbXAgPSAoPFNpZ25hdHVyZT5jb21wb25lbnRSZWYpLmluc3RhbmNlO1xyXG4gICAgICAgIGNvbnN0IGNvbXBQYWdlID0gY29tcC5kYXRhLm51bWJlcjtcclxuICAgICAgICBjb21wLmJhc2VDb3BpZWQgPSB0cnVlO1xyXG4gICAgICAgIGZvciAoY29uc3QgcGFnZSBvZiB0aGlzLmZpbGUucGFnZXMpIHtcclxuICAgICAgICAgIGlmIChwYWdlLm51bWJlciAhPT0gY29tcFBhZ2UpIHtcclxuICAgICAgICAgICAgY29uc3Qgc2lnbiA9IHRoaXMuY3JlYXRlRHJhZ2dhYmxlU2lnbihjb21wLCBjb3B5U2lnbiwgcGFnZSk7XHJcbiAgICAgICAgICAgIGNvbnN0IGFkZGVkU2lnbmF0dXJlID0gdGhpcy5jcmVhdGVBZGRlZFNpZ25hdHVyZShjb3B5U2lnbiwgY29tcCwgcGFnZSk7XHJcbiAgICAgICAgICAgIGNvbnN0IGlkID0gdGhpcy5hZGRTaWduYXR1cmVDb21wb25lbnQoYWRkZWRTaWduYXR1cmUsIHNpZ24sIHBhZ2UsIHRydWUpO1xyXG4gICAgICAgICAgICB0aGlzLl9zaWduYXR1cmVzSG9sZGVyU2VydmljZS5hZGRJZChzaWduLmd1aWQsIGlkKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICAgIGNvcHlTaWduYXR1cmVTZXJ2aWNlLmNoYW5nZXNTaWduYXR1cmUuc3Vic2NyaWJlKChjb3B5Q2hhbmdlczogQ29weUNoYW5nZXMpID0+IHtcclxuICAgICAgY29uc3QgY29tcG9uZW50UmVmID0gdGhpcy5zaWduYXR1cmVDb21wb25lbnRzLmdldChjb3B5Q2hhbmdlcy5pZCk7XHJcbiAgICAgIGlmIChjb21wb25lbnRSZWYpIHtcclxuICAgICAgICBjb25zdCBpZHMgPSB0aGlzLl9zaWduYXR1cmVzSG9sZGVyU2VydmljZS5nZXQoY29weUNoYW5nZXMuZ3VpZCk7XHJcbiAgICAgICAgZm9yIChjb25zdCBpZCBvZiBpZHMpIHtcclxuICAgICAgICAgIGNvbnN0IGNvbXBSZWYgPSB0aGlzLnNpZ25hdHVyZUNvbXBvbmVudHMuZ2V0KGlkKTtcclxuICAgICAgICAgIGlmIChjb21wUmVmKSB7XHJcbiAgICAgICAgICAgIC8vIEB0cy1pZ25vcmVcclxuICAgICAgICAgICAgY29uc3QgY29tcCA9ICg8U2lnbmF0dXJlPmNvbXBSZWYpLmluc3RhbmNlO1xyXG4gICAgICAgICAgICBpZiAoY29tcC5pZCAhPT0gY29weUNoYW5nZXMuaWQgJiYgKGNvbXAuY29waWVkIHx8IGNvbXAuYmFzZUNvcGllZCkpIHtcclxuICAgICAgICAgICAgICBjb21wLmRhdGEud2lkdGggPSBjb3B5Q2hhbmdlcy53aWR0aDtcclxuICAgICAgICAgICAgICBjb21wLmRhdGEuaGVpZ2h0ID0gY29weUNoYW5nZXMuaGVpZ2h0O1xyXG4gICAgICAgICAgICAgIGNvbXAuZGF0YS5wb3NpdGlvbiA9IGNvcHlDaGFuZ2VzLnBvc2l0aW9uO1xyXG4gICAgICAgICAgICAgIGNvbXAuZGF0YS5wcm9wcyA9IGNvcHlDaGFuZ2VzLnByb3BzO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9KTtcclxuXHJcbiAgICByZW1vdmVTaWduYXR1cmVTZXJ2aWNlLnJlbW92ZVNpZ25hdHVyZS5zdWJzY3JpYmUoKGRlbDogUmVtb3ZlU2lnbikgPT4ge1xyXG4gICAgICBjb25zdCBpZHMgPSB0aGlzLl9zaWduYXR1cmVzSG9sZGVyU2VydmljZS5nZXQoZGVsLmd1aWQpO1xyXG4gICAgICBmb3IgKGNvbnN0IGlkIG9mIGlkcykge1xyXG4gICAgICAgIGlmIChkZWwudHlwZSA9PT0gU2lnbmF0dXJlVHlwZS5ESUdJVEFMLmlkIHx8IGRlbC5pZCA9PT0gaWQpIHtcclxuICAgICAgICAgIGNvbnN0IGNvbXBvbmVudFJlZiA9IHRoaXMuc2lnbmF0dXJlQ29tcG9uZW50cy5nZXQoaWQpO1xyXG4gICAgICAgICAgaWYgKGNvbXBvbmVudFJlZikge1xyXG4gICAgICAgICAgICBjb21wb25lbnRSZWYuZGVzdHJveSgpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgdGhpcy5zaWduYXR1cmVDb21wb25lbnRzLmRlbGV0ZShpZCk7XHJcbiAgICAgICAgICB0aGlzLl9zaWduYXR1cmVzSG9sZGVyU2VydmljZS5yZW1vdmUoZGVsLmd1aWQsIGlkKTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICAgIGNvbmZpZ1NlcnZpY2UudXBkYXRlZENvbmZpZy5zdWJzY3JpYmUoKHNpZ25hdHVyZUNvbmZpZykgPT4ge1xyXG4gICAgICB0aGlzLnNpZ25hdHVyZUNvbmZpZyA9IHNpZ25hdHVyZUNvbmZpZztcclxuICAgIH0pO1xyXG5cclxuICAgIHVwbG9hZEZpbGVzU2VydmljZS51cGxvYWRzQ2hhbmdlLnN1YnNjcmliZSgodXBsb2FkcykgPT4ge1xyXG4gICAgICBpZiAodXBsb2Fkcykge1xyXG4gICAgICAgIGxldCBpOiBudW1iZXI7XHJcbiAgICAgICAgZm9yIChpID0gMDsgaSA8IHVwbG9hZHMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgIHRoaXMuX3NpZ25hdHVyZVNlcnZpY2UudXBsb2FkKHVwbG9hZHMuaXRlbShpKSwgJycsIHRoaXMucmV3cml0ZUNvbmZpZywgbnVsbCkuc3Vic2NyaWJlKChvYmo6IEZpbGVDcmVkZW50aWFscykgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLmZpbGVXYXNEcm9wcGVkID8gdGhpcy5zZWxlY3RGaWxlKG9iai5ndWlkLCAnJywgJycpIDogdGhpcy5zZWxlY3REaXIoJycpO1xyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9KTtcclxuXHJcbiAgICBwYWdlUHJlbG9hZFNlcnZpY2UuY2hlY2tQcmVsb2FkLnN1YnNjcmliZSgocGFnZTogbnVtYmVyKSA9PiB7XHJcbiAgICAgIGlmICh0aGlzLnByZWxvYWRQYWdlQ291bnRDb25maWcgIT09IDApIHtcclxuICAgICAgICBmb3IgKGxldCBpID0gcGFnZTsgaSA8IHBhZ2UgKyAyOyBpKyspIHtcclxuICAgICAgICAgIGlmIChpID4gMCAmJiBpIDw9IHRoaXMuY291bnRQYWdlcyAmJiAhdGhpcy5maWxlLnBhZ2VzW2kgLSAxXS5kYXRhKSB7XHJcbiAgICAgICAgICAgIHRoaXMucHJlbG9hZFBhZ2VzKGksIGkpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgcGFzc3dvcmRTZXJ2aWNlLnBhc3NDaGFuZ2Uuc3Vic2NyaWJlKChwYXNzOiBzdHJpbmcpID0+IHtcclxuICAgICAgdGhpcy5zZWxlY3RGaWxlKHRoaXMuY3JlZGVudGlhbHMuZ3VpZCwgcGFzcywgQ29tbW9uTW9kYWxzLlBhc3N3b3JkUmVxdWlyZWQpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgX3NlbGVjdFNpZ25hdHVyZVNlcnZpY2Uuc2VsZWN0U2lnbmF0dXJlLnN1YnNjcmliZSgoc2lnbjogRHJhZ2dhYmxlU2lnbmF0dXJlKSA9PiB7XHJcbiAgICAgIHRoaXMuc2VsZWN0U2lnbmF0dXJlKHNpZ24pO1xyXG4gICAgfSk7XHJcblxyXG4gICAgdGhpcy5pc0Rlc2t0b3AgPSBfd2luZG93U2VydmljZS5pc0Rlc2t0b3AoKTtcclxuICAgIF93aW5kb3dTZXJ2aWNlLm9uUmVzaXplLnN1YnNjcmliZSgodykgPT4ge1xyXG4gICAgICB0aGlzLmlzRGVza3RvcCA9IF93aW5kb3dTZXJ2aWNlLmlzRGVza3RvcCgpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGNyZWF0ZURyYWdnYWJsZVNpZ24oY29tcCwgY29weVNpZ246IENvcHlTaWduLCBwYWdlKSB7XHJcbiAgICBjb25zdCBzaWduID0gbmV3IERyYWdnYWJsZVNpZ25hdHVyZSgpO1xyXG4gICAgc2lnbi50eXBlID0gY29tcC50eXBlO1xyXG4gICAgc2lnbi5ndWlkID0gY29weVNpZ24uZ3VpZDtcclxuICAgIHNpZ24ucG9zaXRpb24gPSBjb21wLnBvc2l0aW9uO1xyXG4gICAgc2lnbi5wYWdlTnVtYmVyID0gcGFnZS5udW1iZXI7XHJcbiAgICByZXR1cm4gc2lnbjtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgY3JlYXRlQWRkZWRTaWduYXR1cmUoY29weVNpZ246IENvcHlTaWduLCBjb21wLCBwYWdlKSB7XHJcbiAgICBjb25zdCBhZGRlZFNpZ25hdHVyZSA9IG5ldyBBZGRlZFNpZ25hdHVyZSgpO1xyXG4gICAgYWRkZWRTaWduYXR1cmUuZ3VpZCA9IGNvcHlTaWduLmd1aWQ7XHJcbiAgICBhZGRlZFNpZ25hdHVyZS5kYXRhID0gY29tcC5kYXRhLmRhdGE7XHJcbiAgICBpZiAoY29tcC5kYXRhLnByb3BzKSB7XHJcbiAgICAgIGFkZGVkU2lnbmF0dXJlLnByb3BzID0gY29tcC5kYXRhLnByb3BzO1xyXG4gICAgfVxyXG4gICAgYWRkZWRTaWduYXR1cmUud2lkdGggPSBjb21wLmRhdGEud2lkdGg7XHJcbiAgICBhZGRlZFNpZ25hdHVyZS5oZWlnaHQgPSBjb21wLmRhdGEuaGVpZ2h0O1xyXG4gICAgYWRkZWRTaWduYXR1cmUubnVtYmVyID0gcGFnZS5udW1iZXI7XHJcbiAgICByZXR1cm4gYWRkZWRTaWduYXR1cmU7XHJcbiAgfVxyXG5cclxuICBuZ09uSW5pdCgpOiB2b2lkIHtcclxuICAgIGlmICh0aGlzLmRlZmF1bHREb2N1bWVudENvbmZpZygpKSB7XHJcbiAgICAgIHRoaXMuaXNMb2FkaW5nID0gdHJ1ZTtcclxuICAgICAgdGhpcy5zZWxlY3RGaWxlKHRoaXMuZGVmYXVsdERvY3VtZW50Q29uZmlnKCksIFwiXCIsIFwiXCIpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBwdFRvUHgocHQ6IG51bWJlcikge1xyXG4gICAgLy9wdCAqIDk2IC8gNzIgPSBweC5cclxuICAgIHJldHVybiBwdCAqIDk2IC8gNzI7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGdldEZpdFRvV2lkdGgoKSB7XHJcbiAgICAvLyBJbWFnZXMgYW5kIEV4Y2VsLXJlbGF0ZWQgZmlsZXMgcmVjZWl2aW5nIGRpbWVuc2lvbnMgaW4gcHggZnJvbSBzZXJ2ZXJcclxuICAgIGNvbnN0IHBhZ2VXaWR0aCA9IHRoaXMucHRUb1B4KHRoaXMuX3BhZ2VXaWR0aCk7XHJcbiAgICBjb25zdCBwYWdlSGVpZ2h0ID0gdGhpcy5wdFRvUHgodGhpcy5fcGFnZUhlaWdodCk7XHJcbiAgICBjb25zdCBvZmZzZXRXaWR0aCA9IHBhZ2VXaWR0aCA/IHBhZ2VXaWR0aCA6IHdpbmRvdy5pbm5lcldpZHRoO1xyXG5cclxuICAgIHJldHVybiAocGFnZUhlaWdodCA+IHBhZ2VXaWR0aCAmJiBNYXRoLnJvdW5kKG9mZnNldFdpZHRoIC8gd2luZG93LmlubmVyV2lkdGgpIDwgMikgPyAyMDAgLSBNYXRoLnJvdW5kKG9mZnNldFdpZHRoICogMTAwIC8gd2luZG93LmlubmVyV2lkdGgpIDogTWF0aC5yb3VuZCh3aW5kb3cuaW5uZXJXaWR0aCAqIDEwMCAvIG9mZnNldFdpZHRoKTtcclxuICB9XHJcblxyXG4gIHNldCB6b29tKHpvb20pIHtcclxuICAgIHRoaXMuX3pvb20gPSB6b29tO1xyXG4gICAgdGhpcy5fem9vbVNlcnZpY2UuY2hhbmdlWm9vbSh0aGlzLl96b29tKTtcclxuICB9XHJcblxyXG4gIGdldCB6b29tKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuX3pvb207XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHJlZnJlc2hab29tKCkge1xyXG4gICAgdGhpcy56b29tID0gdGhpcy5fd2luZG93U2VydmljZS5pc0Rlc2t0b3AoKSA/IDEwMCA6IHRoaXMuZ2V0Rml0VG9XaWR0aCgpO1xyXG4gIH1cclxuXHJcbiAgem9vbUluKCkge1xyXG4gICAgaWYgKHRoaXMuZm9ybWF0RGlzYWJsZWQpXHJcbiAgICAgIHJldHVybjtcclxuICAgIGlmICh0aGlzLl96b29tIDwgNDkwKSB7XHJcbiAgICAgIHRoaXMuem9vbSA9IHRoaXMuX3pvb20gKyAxMDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHpvb21PdXQoKSB7XHJcbiAgICBpZiAodGhpcy5mb3JtYXREaXNhYmxlZClcclxuICAgICAgcmV0dXJuO1xyXG4gICAgaWYgKHRoaXMuX3pvb20gPiAzMCkge1xyXG4gICAgICB0aGlzLnpvb20gPSB0aGlzLl96b29tIC0gMTA7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBnZXQgcmV3cml0ZUNvbmZpZygpOiBib29sZWFuIHtcclxuICAgIHJldHVybiB0aGlzLnNpZ25hdHVyZUNvbmZpZyA/IHRoaXMuc2lnbmF0dXJlQ29uZmlnLnJld3JpdGUgOiB0cnVlO1xyXG4gIH1cclxuXHJcbiAgZ2V0IHpvb21Db25maWcoKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gdGhpcy5zaWduYXR1cmVDb25maWcgPyB0aGlzLnNpZ25hdHVyZUNvbmZpZy56b29tIDogdHJ1ZTtcclxuICB9XHJcblxyXG4gIGdldCBwYWdlU2VsZWN0b3JDb25maWcoKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gdGhpcy5zaWduYXR1cmVDb25maWcgPyB0aGlzLnNpZ25hdHVyZUNvbmZpZy5wYWdlU2VsZWN0b3IgOiB0cnVlO1xyXG4gIH1cclxuXHJcbiAgZ2V0IHByZWxvYWRQYWdlQ291bnRDb25maWcoKTogbnVtYmVyIHtcclxuICAgIHJldHVybiB0aGlzLnNpZ25hdHVyZUNvbmZpZyA/IHRoaXMuc2lnbmF0dXJlQ29uZmlnLnByZWxvYWRQYWdlQ291bnQgOiAwO1xyXG4gIH1cclxuXHJcbiAgZ2V0IGRvd25sb2FkQ29uZmlnKCk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIHRoaXMuc2lnbmF0dXJlQ29uZmlnID8gdGhpcy5zaWduYXR1cmVDb25maWcuZG93bmxvYWQgOiB0cnVlO1xyXG4gIH1cclxuXHJcbiAgZ2V0IGRvd25sb2FkT3JpZ2luYWxDb25maWcoKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gdGhpcy5zaWduYXR1cmVDb25maWcgPyB0aGlzLnNpZ25hdHVyZUNvbmZpZy5kb3dubG9hZE9yaWdpbmFsIDogdHJ1ZTtcclxuICB9XHJcblxyXG4gIGdldCBkb3dubG9hZFNpbmdlZENvbmZpZygpOiBib29sZWFuIHtcclxuICAgIHJldHVybiB0aGlzLnNpZ25hdHVyZUNvbmZpZyA/IHRoaXMuc2lnbmF0dXJlQ29uZmlnLmRvd25sb2FkU2lnbmVkIDogdHJ1ZTtcclxuICB9XHJcblxyXG4gIGdldCB1cGxvYWRDb25maWcoKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gdGhpcy5zaWduYXR1cmVDb25maWcgPyB0aGlzLnNpZ25hdHVyZUNvbmZpZy51cGxvYWQgOiB0cnVlO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBkZWZhdWx0RG9jdW1lbnRDb25maWcoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5zaWduYXR1cmVDb25maWcgPyB0aGlzLnNpZ25hdHVyZUNvbmZpZy5kZWZhdWx0RG9jdW1lbnQgOiBcIlwiO1xyXG4gIH1cclxuXHJcbiAgZ2V0IHByaW50Q29uZmlnKCk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIHRoaXMuc2lnbmF0dXJlQ29uZmlnID8gdGhpcy5zaWduYXR1cmVDb25maWcucHJpbnQgOiB0cnVlO1xyXG4gIH1cclxuXHJcbiAgZ2V0IGJyb3dzZUNvbmZpZygpOiBib29sZWFuIHtcclxuICAgIHJldHVybiB0aGlzLnNpZ25hdHVyZUNvbmZpZyA/IHRoaXMuc2lnbmF0dXJlQ29uZmlnLmJyb3dzZSA6IHRydWU7XHJcbiAgfVxyXG5cclxuICBnZXQgaHRtbE1vZGVDb25maWcoKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gZmFsc2U7XHJcbiAgfVxyXG5cclxuICBnZXQgZW5hYmxlUmlnaHRDbGlja0NvbmZpZygpOiBib29sZWFuIHtcclxuICAgIHJldHVybiB0aGlzLnNpZ25hdHVyZUNvbmZpZyA/IHRoaXMuc2lnbmF0dXJlQ29uZmlnLmVuYWJsZVJpZ2h0Q2xpY2sgOiB0cnVlO1xyXG4gIH1cclxuXHJcbiAgZ2V0IHRleHRTaWduYXR1cmVDb25maWcoKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gdGhpcy5zaWduYXR1cmVDb25maWcgPyB0aGlzLnNpZ25hdHVyZUNvbmZpZy50ZXh0U2lnbmF0dXJlIDogdHJ1ZTtcclxuICB9XHJcblxyXG4gIGdldCBpbWFnZVNpZ25hdHVyZUNvbmZpZygpOiBib29sZWFuIHtcclxuICAgIHJldHVybiB0aGlzLnNpZ25hdHVyZUNvbmZpZyA/IHRoaXMuc2lnbmF0dXJlQ29uZmlnLmltYWdlU2lnbmF0dXJlIDogdHJ1ZTtcclxuICB9XHJcblxyXG4gIGdldCBkaWdpdGFsU2lnbmF0dXJlQ29uZmlnKCk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIHRoaXMuc2lnbmF0dXJlQ29uZmlnID8gdGhpcy5zaWduYXR1cmVDb25maWcuZGlnaXRhbFNpZ25hdHVyZSA6IHRydWU7XHJcbiAgfVxyXG5cclxuICBnZXQgcXJDb2RlU2lnbmF0dXJlQ29uZmlnKCk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIHRoaXMuc2lnbmF0dXJlQ29uZmlnID8gdGhpcy5zaWduYXR1cmVDb25maWcucXJDb2RlU2lnbmF0dXJlIDogdHJ1ZTtcclxuICB9XHJcblxyXG4gIGdldCBiYXJDb2RlU2lnbmF0dXJlQ29uZmlnKCk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIHRoaXMuc2lnbmF0dXJlQ29uZmlnID8gdGhpcy5zaWduYXR1cmVDb25maWcuYmFyQ29kZVNpZ25hdHVyZSA6IHRydWU7XHJcbiAgfVxyXG5cclxuICBnZXQgc3RhbXBTaWduYXR1cmVDb25maWcoKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gdGhpcy5zaWduYXR1cmVDb25maWcgPyB0aGlzLnNpZ25hdHVyZUNvbmZpZy5zdGFtcFNpZ25hdHVyZSA6IHRydWU7XHJcbiAgfVxyXG5cclxuICBnZXQgaGFuZFNpZ25hdHVyZUNvbmZpZygpOiBib29sZWFuIHtcclxuICAgIHJldHVybiB0aGlzLnNpZ25hdHVyZUNvbmZpZyA/IHRoaXMuc2lnbmF0dXJlQ29uZmlnLmhhbmRTaWduYXR1cmUgOiB0cnVlO1xyXG4gIH1cclxuXHJcbiAgZ2V0IGN1cnJlbnRQYWdlKCk6IG51bWJlciB7XHJcbiAgICByZXR1cm4gdGhpcy5fbmF2aWdhdGVTZXJ2aWNlLmN1cnJlbnRQYWdlO1xyXG4gIH1cclxuXHJcbiAgb3Blbk1vZGFsKGlkOiBzdHJpbmcpIHtcclxuICAgIHRoaXMuX21vZGFsU2VydmljZS5vcGVuKGlkKTtcclxuICB9XHJcblxyXG4gIGNsb3NlTW9kYWwoaWQ6IHN0cmluZykge1xyXG4gICAgdGhpcy5fbW9kYWxTZXJ2aWNlLmNsb3NlKGlkKTtcclxuICB9XHJcblxyXG4gIHNlbGVjdERpcigkZXZlbnQ6IHN0cmluZykge1xyXG4gICAgdGhpcy5fc2lnbmF0dXJlU2VydmljZS5sb2FkRmlsZXMoJGV2ZW50KS5zdWJzY3JpYmUoKGZpbGVzOiBGaWxlTW9kZWxbXSkgPT4gdGhpcy5maWxlcyA9IGZpbGVzIHx8IFtdKTtcclxuICB9XHJcblxyXG4gIHNlbGVjdEZpbGUoJGV2ZW50OiBzdHJpbmcsIHBhc3N3b3JkOiBzdHJpbmcsIG1vZGFsSWQ6IHN0cmluZykge1xyXG4gICAgdGhpcy5jcmVkZW50aWFscyA9IHtndWlkOiAkZXZlbnQsIHBhc3N3b3JkOiBwYXNzd29yZH07XHJcbiAgICB0aGlzLmZpbGUgPSBudWxsO1xyXG4gICAgdGhpcy5fc2lnbmF0dXJlU2VydmljZS5sb2FkRmlsZSh0aGlzLmNyZWRlbnRpYWxzKS5zdWJzY3JpYmUoKGZpbGU6IEZpbGVEZXNjcmlwdGlvbikgPT4ge1xyXG4gICAgICAgIHRoaXMuZmlsZSA9IGZpbGU7XHJcbiAgICAgICAgdGhpcy5mb3JtYXREaXNhYmxlZCA9ICF0aGlzLmZpbGU7XHJcbiAgICAgICAgaWYgKGZpbGUpIHtcclxuICAgICAgICAgIGlmICghdGhpcy5pc0Rlc2t0b3AgJiYgZmlsZS5wYWdlcyAmJiBmaWxlLnBhZ2VzWzBdKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX3BhZ2VIZWlnaHQgPSBmaWxlLnBhZ2VzWzBdLmhlaWdodDtcclxuICAgICAgICAgICAgdGhpcy5fcGFnZVdpZHRoID0gZmlsZS5wYWdlc1swXS53aWR0aDtcclxuICAgICAgICAgICAgdGhpcy5yZWZyZXNoWm9vbSgpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgY29uc3QgcHJlbG9hZFBhZ2VDb3VudCA9IHRoaXMucHJlbG9hZFBhZ2VDb3VudENvbmZpZztcclxuICAgICAgICAgIGNvbnN0IGNvdW50UGFnZXMgPSBmaWxlLnBhZ2VzID8gZmlsZS5wYWdlcy5sZW5ndGggOiAwO1xyXG4gICAgICAgICAgaWYgKHByZWxvYWRQYWdlQ291bnQgPiAwKSB7XHJcbiAgICAgICAgICAgIHRoaXMucHJlbG9hZFBhZ2VzKDEsIHByZWxvYWRQYWdlQ291bnQgPiBjb3VudFBhZ2VzID8gY291bnRQYWdlcyA6IHByZWxvYWRQYWdlQ291bnQpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgdGhpcy5fbmF2aWdhdGVTZXJ2aWNlLmNvdW50UGFnZXMgPSBjb3VudFBhZ2VzO1xyXG4gICAgICAgICAgdGhpcy5fbmF2aWdhdGVTZXJ2aWNlLmN1cnJlbnRQYWdlID0gMTtcclxuICAgICAgICAgIHRoaXMuY291bnRQYWdlcyA9IGNvdW50UGFnZXM7XHJcbiAgICAgICAgICB0aGlzLmNsZWFuU2lnbmF0dXJlcygpO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgKTtcclxuICAgIGlmIChtb2RhbElkKSB7XHJcbiAgICAgIHRoaXMuX21vZGFsU2VydmljZS5jbG9zZShtb2RhbElkKTtcclxuICAgIH1cclxuICAgIHRoaXMuY2xlYXJEYXRhKCk7XHJcbiAgfVxyXG5cclxuICBwcmVsb2FkUGFnZXMoc3RhcnQ6IG51bWJlciwgZW5kOiBudW1iZXIpIHtcclxuICAgIGZvciAobGV0IGkgPSBzdGFydDsgaSA8PSBlbmQ7IGkrKykge1xyXG4gICAgICB0aGlzLl9zaWduYXR1cmVTZXJ2aWNlLmxvYWRQYWdlKHRoaXMuY3JlZGVudGlhbHMsIGkpLnN1YnNjcmliZSgocGFnZTogUGFnZU1vZGVsKSA9PiB7XHJcbiAgICAgICAgdGhpcy5maWxlLnBhZ2VzW2kgLSAxXSA9IHBhZ2U7XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgdXBsb2FkKCRldmVudDogc3RyaW5nKSB7XHJcbiAgICB0aGlzLl9zaWduYXR1cmVTZXJ2aWNlLnVwbG9hZChudWxsLCAkZXZlbnQsIHRoaXMucmV3cml0ZUNvbmZpZywgbnVsbCkuc3Vic2NyaWJlKCgpID0+IHtcclxuICAgICAgdGhpcy5zZWxlY3REaXIoJycpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBkb3dubG9hZEZpbGUoKSB7XHJcbiAgICBpZiAodGhpcy5mb3JtYXREaXNhYmxlZClcclxuICAgICAgcmV0dXJuO1xyXG4gICAgd2luZG93LmxvY2F0aW9uLmFzc2lnbih0aGlzLl9zaWduYXR1cmVTZXJ2aWNlLmdldERvd25sb2FkVXJsKHRoaXMuY3JlZGVudGlhbHMpKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgY2xlYXJEYXRhKCkge1xyXG4gICAgaWYgKCF0aGlzLmZpbGUgfHwgIXRoaXMuZmlsZS5wYWdlcykge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBmb3IgKGNvbnN0IHBhZ2Ugb2YgdGhpcy5maWxlLnBhZ2VzKSB7XHJcbiAgICAgIHBhZ2UuZGF0YSA9IG51bGw7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBvblJpZ2h0Q2xpY2soJGV2ZW50OiBNb3VzZUV2ZW50KSB7XHJcbiAgICByZXR1cm4gdGhpcy5lbmFibGVSaWdodENsaWNrQ29uZmlnO1xyXG4gIH1cclxuXHJcbiAgZ2V0U2lnbmF0dXJlVHlwZUNvbmZpZyhpZDogc3RyaW5nKSB7XHJcbiAgICBzd2l0Y2ggKGlkKSB7XHJcbiAgICAgIGNhc2UgU2lnbmF0dXJlVHlwZS5URVhULmlkOlxyXG4gICAgICAgIHJldHVybiB0aGlzLnRleHRTaWduYXR1cmVDb25maWc7XHJcbiAgICAgIGNhc2UgU2lnbmF0dXJlVHlwZS5JTUFHRS5pZDpcclxuICAgICAgICByZXR1cm4gdGhpcy5pbWFnZVNpZ25hdHVyZUNvbmZpZztcclxuICAgICAgY2FzZSBTaWduYXR1cmVUeXBlLkRJR0lUQUwuaWQ6XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZGlnaXRhbFNpZ25hdHVyZUNvbmZpZztcclxuICAgICAgY2FzZSBTaWduYXR1cmVUeXBlLlFSX0NPREUuaWQ6XHJcbiAgICAgICAgcmV0dXJuIHRoaXMucXJDb2RlU2lnbmF0dXJlQ29uZmlnO1xyXG4gICAgICBjYXNlIFNpZ25hdHVyZVR5cGUuQkFSX0NPREUuaWQ6XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuYmFyQ29kZVNpZ25hdHVyZUNvbmZpZztcclxuICAgICAgY2FzZSBTaWduYXR1cmVUeXBlLlNUQU1QLmlkOlxyXG4gICAgICAgIHJldHVybiB0aGlzLnN0YW1wU2lnbmF0dXJlQ29uZmlnO1xyXG4gICAgICBjYXNlIFNpZ25hdHVyZVR5cGUuSEFORC5pZDpcclxuICAgICAgICByZXR1cm4gdGhpcy5oYW5kU2lnbmF0dXJlQ29uZmlnO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZHJhZ092ZXIoJGV2ZW50OiBEcmFnRXZlbnQpIHtcclxuICAgICRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgJGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gIH1cclxuXHJcbiAgZHJvcFNpZ25hdHVyZSgkZXZlbnQ6IERyYWdFdmVudCkge1xyXG4gICAgJGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAkZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICBjb25zdCBwb3NpdGlvbiA9IFV0aWxzLmdldE1vdXNlUG9zaXRpb24oJGV2ZW50KTtcclxuXHJcbiAgICBjb25zdCBjdXJyZW50UGFnZSA9IGRvY3VtZW50LmVsZW1lbnRGcm9tUG9pbnQocG9zaXRpb24ueCwgcG9zaXRpb24ueSk7XHJcbiAgICBpZiAoY3VycmVudFBhZ2UgJiYgJChjdXJyZW50UGFnZSkucGFyZW50KCkucGFyZW50KCkgJiYgJChjdXJyZW50UGFnZSkucGFyZW50KCkucGFyZW50KCkucGFyZW50KCkuaGFzQ2xhc3MoXCJwYWdlXCIpKSB7XHJcbiAgICAgIGNvbnN0IGRvY3VtZW50UGFnZSA9ICQoY3VycmVudFBhZ2UpLnBhcmVudCgpLnBhcmVudCgpWzBdO1xyXG4gICAgICBjb25zdCBsZWZ0ID0gKHBvc2l0aW9uLnggLSAkKGRvY3VtZW50UGFnZSkub2Zmc2V0KCkubGVmdCkvKHRoaXMuem9vbS8xMDApO1xyXG4gICAgICBjb25zdCB0b3AgPSAocG9zaXRpb24ueSAtICQoZG9jdW1lbnRQYWdlKS5vZmZzZXQoKS50b3ApLyh0aGlzLnpvb20vMTAwKTtcclxuICAgICAgY29uc3QgY3VycmVudFBvc2l0aW9uID0gbmV3IFBvc2l0aW9uKGxlZnQsIHRvcCk7XHJcbiAgICAgIGNvbnN0IHNpZ24gPSB0aGlzLl9kcmFnU2lnbmF0dXJlU2VydmljZS5zaWduO1xyXG4gICAgICBpZiAoc2lnbikge1xyXG4gICAgICAgIGNvbnN0IGlkID0gJChjdXJyZW50UGFnZSkucGFyZW50KCkuYXR0cignaWQnKTtcclxuICAgICAgICBpZiAoaWQpIHtcclxuICAgICAgICAgIGNvbnN0IHNwbGl0ID0gaWQuc3BsaXQoJy0nKTtcclxuICAgICAgICAgIHNpZ24ucGFnZU51bWJlciA9IHNwbGl0Lmxlbmd0aCA9PT0gMiA/IHBhcnNlSW50KHNwbGl0WzFdLCAxMCkgOiBzaWduLnBhZ2VOdW1iZXI7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHNpZ24ucG9zaXRpb24gPSBjdXJyZW50UG9zaXRpb247XHJcbiAgICAgICAgdGhpcy5zZWxlY3RTaWduYXR1cmUoc2lnbik7XHJcbiAgICAgICAgdGhpcy5fZHJhZ1NpZ25hdHVyZVNlcnZpY2Uuc2lnbiA9IG51bGw7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIHByaXZhdGUgc2VsZWN0U2lnbmF0dXJlKHNpZ246IERyYWdnYWJsZVNpZ25hdHVyZSkge1xyXG4gICAgaWYgKHNpZ24udHlwZSA9PT0gU2lnbmF0dXJlVHlwZS5ESUdJVEFMLmlkKSB7XHJcbiAgICAgIGNvbnN0IGFkZGVkU2lnbmF0dXJlID0gbmV3IEFkZGVkU2lnbmF0dXJlKCk7XHJcbiAgICAgIGFkZGVkU2lnbmF0dXJlLmRpZ2l0YWxQcm9wcyA9IHNpZ24uZGlnaXRhbFByb3BzO1xyXG4gICAgICBhZGRlZFNpZ25hdHVyZS5ndWlkID0gc2lnbi5ndWlkO1xyXG4gICAgICBhZGRlZFNpZ25hdHVyZS5udW1iZXIgPSBzaWduLnBhZ2VOdW1iZXI7XHJcbiAgICAgIGZvciAoY29uc3QgcGFnZSBvZiB0aGlzLmZpbGUucGFnZXMpIHtcclxuICAgICAgICBjb25zdCBpZCA9IHRoaXMuYWRkU2lnbmF0dXJlQ29tcG9uZW50KGFkZGVkU2lnbmF0dXJlLCBzaWduLCBwYWdlKTtcclxuICAgICAgICB0aGlzLl9zaWduYXR1cmVzSG9sZGVyU2VydmljZS5hZGRJZChzaWduLmd1aWQsIGlkKTtcclxuICAgICAgfVxyXG4gICAgICB0aGlzLmNsb3NlVGFiKHNpZ24udHlwZSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLl9zaWduYXR1cmVTZXJ2aWNlLmxvYWRTaWduYXR1cmVJbWFnZShzaWduKS5zdWJzY3JpYmUoKHNpZ25hdHVyZTogQWRkZWRTaWduYXR1cmUpID0+IHtcclxuICAgICAgICBzaWduYXR1cmUubnVtYmVyID0gc2lnbi5wYWdlTnVtYmVyO1xyXG4gICAgICAgIGNvbnN0IHBhZ2VNb2RlbCA9IHRoaXMuZmlsZS5wYWdlcy5maW5kKGZ1bmN0aW9uIChwKSB7XHJcbiAgICAgICAgICByZXR1cm4gcC5udW1iZXIgPT09IHNpZ24ucGFnZU51bWJlcjtcclxuICAgICAgICB9KTtcclxuICAgICAgICBjb25zdCBpZCA9IHRoaXMuYWRkU2lnbmF0dXJlQ29tcG9uZW50KHNpZ25hdHVyZSwgc2lnbiwgcGFnZU1vZGVsKTtcclxuICAgICAgICB0aGlzLl9zaWduYXR1cmVzSG9sZGVyU2VydmljZS5hZGRJZChzaWduLmd1aWQsIGlkKTtcclxuICAgICAgICB0aGlzLmNsb3NlVGFiKHNpZ24udHlwZSk7XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBhZGRTaWduYXR1cmVDb21wb25lbnQoYWRkZWRTaWduYXR1cmU6IEFkZGVkU2lnbmF0dXJlLCBzaWduOiBEcmFnZ2FibGVTaWduYXR1cmUsIHBhZ2U6IFBhZ2VNb2RlbCwgY29waWVkOiBib29sZWFuID0gZmFsc2UpIHtcclxuICAgIGNvbnN0IGR5bmFtaWNEaXJlY3RpdmUgPSB0aGlzLl9ob3N0aW5nQ29tcG9uZW50c1NlcnZpY2UuZmluZChwYWdlLm51bWJlcik7XHJcbiAgICBpZiAoZHluYW1pY0RpcmVjdGl2ZSkge1xyXG4gICAgICBjb25zdCB2aWV3Q29udGFpbmVyUmVmID0gZHluYW1pY0RpcmVjdGl2ZS52aWV3Q29udGFpbmVyUmVmO1xyXG4gICAgICBjb25zdCBzZWxlY3RTaWduYXR1cmUgPSB0aGlzLl9hZGREeW5hbWljQ29tcG9uZW50U2VydmljZS5hZGREeW5hbWljQ29tcG9uZW50KHZpZXdDb250YWluZXJSZWYsIFNpZ25hdHVyZSk7XHJcbiAgICAgIGNvbnN0IGlkID0gdGhpcy5nZXROZXh0SWQoKTtcclxuICAgICAgd2hpbGUgKGFkZGVkU2lnbmF0dXJlLndpZHRoID49IHBhZ2Uud2lkdGggfHwgYWRkZWRTaWduYXR1cmUuaGVpZ2h0ID49IHBhZ2UuaGVpZ2h0KSB7XHJcbiAgICAgICAgYWRkZWRTaWduYXR1cmUud2lkdGggPSBhZGRlZFNpZ25hdHVyZS53aWR0aCAvIDI7XHJcbiAgICAgICAgYWRkZWRTaWduYXR1cmUuaGVpZ2h0ID0gYWRkZWRTaWduYXR1cmUuaGVpZ2h0IC8gMjtcclxuICAgICAgfVxyXG4gICAgICAoPFNpZ25hdHVyZT5zZWxlY3RTaWduYXR1cmUuaW5zdGFuY2UpLmlkID0gaWQ7XHJcbiAgICAgICg8U2lnbmF0dXJlPnNlbGVjdFNpZ25hdHVyZS5pbnN0YW5jZSkuY29waWVkID0gY29waWVkO1xyXG4gICAgICAoPFNpZ25hdHVyZT5zZWxlY3RTaWduYXR1cmUuaW5zdGFuY2UpLmRhdGEgPSBhZGRlZFNpZ25hdHVyZTtcclxuICAgICAgKDxTaWduYXR1cmU+c2VsZWN0U2lnbmF0dXJlLmluc3RhbmNlKS5wb3NpdGlvbiA9IHNpZ24ucG9zaXRpb247XHJcbiAgICAgICg8U2lnbmF0dXJlPnNlbGVjdFNpZ25hdHVyZS5pbnN0YW5jZSkudHlwZSA9IHNpZ24udHlwZTtcclxuICAgICAgKDxTaWduYXR1cmU+c2VsZWN0U2lnbmF0dXJlLmluc3RhbmNlKS5wYWdlV2lkdGggPSBwYWdlLndpZHRoO1xyXG4gICAgICAoPFNpZ25hdHVyZT5zZWxlY3RTaWduYXR1cmUuaW5zdGFuY2UpLnBhZ2VIZWlnaHQgPSBwYWdlLmhlaWdodDtcclxuICAgICAgdGhpcy5zaWduYXR1cmVDb21wb25lbnRzLnNldChpZCwgc2VsZWN0U2lnbmF0dXJlKTtcclxuICAgICAgdGhpcy5fYWN0aXZlU2lnbmF0dXJlU2VydmljZS5jaGFuZ2VBY3RpdmUoaWQpO1xyXG4gICAgICByZXR1cm4gaWQ7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gbnVsbDtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgZ2V0TmV4dElkKCkge1xyXG4gICAgbGV0IG1heElkID0gMDtcclxuICAgIGZvciAoY29uc3QgYW5uSWQgb2YgdGhpcy5zaWduYXR1cmVDb21wb25lbnRzLmtleXMoKSkge1xyXG4gICAgICBpZiAoYW5uSWQgPiBtYXhJZCkge1xyXG4gICAgICAgIG1heElkID0gYW5uSWQ7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIGNvbnN0IGlkID0gbWF4SWQgKyAxO1xyXG4gICAgcmV0dXJuIGlkO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBjbG9zZVRhYih0eXBlOiBzdHJpbmcpIHtcclxuICAgIHRoaXMuX3NpZ25hdHVyZVRhYkFjdGl2YXRpb25TZXJ2aWNlLmNoYW5nZUFjdGl2ZVRhYih0eXBlKTtcclxuICB9XHJcblxyXG4gIGhpZGVBbGwoJGV2ZW50KSB7XHJcbiAgICBpZiAoKCRldmVudC50YXJnZXQucGFyZW50RWxlbWVudCAmJiAkZXZlbnQudGFyZ2V0LnBhcmVudEVsZW1lbnQuYXR0cmlidXRlc1snbmFtZSddICYmXHJcbiAgICAgICRldmVudC50YXJnZXQucGFyZW50RWxlbWVudC5hdHRyaWJ1dGVzWyduYW1lJ10udmFsdWUgPT09ICdidXR0b24nKSB8fFxyXG4gICAgICAoJGV2ZW50LnRhcmdldC5wYXJlbnRFbGVtZW50ICYmXHJcbiAgICAgICAgJGV2ZW50LnRhcmdldC5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQgJiZcclxuICAgICAgICAkZXZlbnQudGFyZ2V0LnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudC5hdHRyaWJ1dGVzWyduYW1lJ10gJiZcclxuICAgICAgICAkZXZlbnQudGFyZ2V0LnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudC5hdHRyaWJ1dGVzWyduYW1lJ10udmFsdWUgPT09ICdidXR0b24nKSB8fFxyXG4gICAgICAoJGV2ZW50LnRhcmdldC5wYXJlbnRFbGVtZW50ICYmXHJcbiAgICAgICAgJGV2ZW50LnRhcmdldC5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQgJiZcclxuICAgICAgICAkZXZlbnQudGFyZ2V0LnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50ICYmXHJcbiAgICAgICAgJGV2ZW50LnRhcmdldC5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50ICYmXHJcbiAgICAgICAgJGV2ZW50LnRhcmdldC5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50LmF0dHJpYnV0ZXNbJ25hbWUnXSAmJlxyXG4gICAgICAgICRldmVudC50YXJnZXQucGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudC5hdHRyaWJ1dGVzWyduYW1lJ10udmFsdWUgPT09ICdidXR0b24nKSkge1xyXG5cclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgdGhpcy5fb25DbG9zZVNlcnZpY2UuY2xvc2UodHJ1ZSk7XHJcbiAgfVxyXG5cclxuICBuZXdTaWduKCRldmVudDogc3RyaW5nKSB7XHJcbiAgICBpZiAoU2lnbmF0dXJlVHlwZS5IQU5ELmlkID09PSAkZXZlbnQpIHtcclxuICAgICAgdGhpcy5fbW9kYWxTZXJ2aWNlLm9wZW4oQ29tbW9uTW9kYWxzLkRyYXdIYW5kU2lnbmF0dXJlKTtcclxuICAgIH0gZWxzZSBpZiAoU2lnbmF0dXJlVHlwZS5TVEFNUC5pZCA9PT0gJGV2ZW50KSB7XHJcbiAgICAgIHRoaXMuX21vZGFsU2VydmljZS5vcGVuKENvbW1vbk1vZGFscy5EcmF3U3RhbXBTaWduYXR1cmUpO1xyXG4gICAgfSBlbHNlIGlmIChTaWduYXR1cmVUeXBlLlRFWFQuaWQgPT09ICRldmVudCkge1xyXG4gICAgICB0aGlzLmFkZFRleHRTaWduKCk7XHJcbiAgICAgIHRoaXMuX3NpZ25hdHVyZVRhYkFjdGl2YXRpb25TZXJ2aWNlLmNoYW5nZUFjdGl2ZVRhYihTaWduYXR1cmVUeXBlLlRFWFQuaWQpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBhZGRUZXh0U2lnbigpIHtcclxuICAgIGNvbnN0IHNpZ25hdHVyZSA9IG5ldyBBZGRlZFNpZ25hdHVyZSgpO1xyXG4gICAgc2lnbmF0dXJlLnByb3BzID0gU2lnbmF0dXJlUHJvcHMuZ2V0RGVmYXVsdCgpO1xyXG4gICAgc2lnbmF0dXJlLmd1aWQgPSBEcmFnZ2FibGVTaWduYXR1cmUuVEVNUDtcclxuICAgIGNvbnN0IHNpZ24gPSBuZXcgRHJhZ2dhYmxlU2lnbmF0dXJlKCk7XHJcbiAgICBzaWduLmd1aWQgPSBEcmFnZ2FibGVTaWduYXR1cmUuVEVNUDtcclxuICAgIHNpZ24ucG9zaXRpb24gPSBuZXcgUG9zaXRpb24oMCwgMCk7XHJcbiAgICBzaWduLnR5cGUgPSBTaWduYXR1cmVUeXBlLlRFWFQuaWQ7XHJcbiAgICBjb25zdCBwYWdlTnVtYmVyID0gdGhpcy5fbmF2aWdhdGVTZXJ2aWNlLmN1cnJlbnRQYWdlO1xyXG4gICAgc2lnbmF0dXJlLm51bWJlciA9IHBhZ2VOdW1iZXI7XHJcbiAgICBzaWduLnBhZ2VOdW1iZXIgPSBwYWdlTnVtYmVyO1xyXG4gICAgY29uc3QgcGFnZU1vZGVsID0gdGhpcy5maWxlLnBhZ2VzLmZpbmQoZnVuY3Rpb24gKHApIHtcclxuICAgICAgcmV0dXJuIHAubnVtYmVyID09PSBwYWdlTnVtYmVyO1xyXG4gICAgfSk7XHJcbiAgICBjb25zdCBpZCA9IHRoaXMuYWRkU2lnbmF0dXJlQ29tcG9uZW50KHNpZ25hdHVyZSwgc2lnbiwgcGFnZU1vZGVsKTtcclxuICAgIHRoaXMuX3NpZ25hdHVyZXNIb2xkZXJTZXJ2aWNlLmFkZElkKHNpZ24uZ3VpZCwgaWQpO1xyXG4gIH1cclxuXHJcbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XHJcbiAgICB0aGlzLmNsZWFuU2lnbmF0dXJlcygpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBjbGVhblNpZ25hdHVyZXMoKSB7XHJcbiAgICBmb3IgKGNvbnN0IGNvbXBvbmVudFJlZiBvZiB0aGlzLnNpZ25hdHVyZUNvbXBvbmVudHMudmFsdWVzKCkpIHtcclxuICAgICAgY29tcG9uZW50UmVmLmRlc3Ryb3koKTtcclxuICAgIH1cclxuICAgIHRoaXMuc2lnbmF0dXJlQ29tcG9uZW50cyA9IG5ldyBNYXA8bnVtYmVyLCBDb21wb25lbnRSZWY8YW55Pj4oKTtcclxuICAgIHRoaXMuX3NpZ25hdHVyZXNIb2xkZXJTZXJ2aWNlLmNsZWFyKCk7XHJcbiAgfVxyXG5cclxuICBzaWduKCkge1xyXG4gICAgY29uc3Qgc2lnbmF0dXJlcyA9IHRoaXMucHJlcGFyZVNpZ25hdHVyZXNEYXRhKCk7XHJcbiAgICB0aGlzLl9zaWduYXR1cmVTZXJ2aWNlLnNpZ24odGhpcy5jcmVkZW50aWFscywgc2lnbmF0dXJlcykuc3Vic2NyaWJlKChyZXQ6IGFueSkgPT4ge1xyXG4gICAgICB0aGlzLl9tb2RhbFNlcnZpY2Uub3BlbihDb21tb25Nb2RhbHMuT3BlcmF0aW9uU3VjY2Vzcyk7XHJcbiAgICAgIHRoaXMuc2VsZWN0RmlsZShyZXQuZ3VpZCwgbnVsbCwgQ29tbW9uTW9kYWxzLk9wZXJhdGlvblN1Y2Nlc3MpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgcHJlcGFyZVNpZ25hdHVyZXNEYXRhKCkge1xyXG4gICAgY29uc3Qgc2lnbmF0dXJlcyA9IFtdO1xyXG4gICAgZm9yIChjb25zdCBpZHMgb2YgdGhpcy5fc2lnbmF0dXJlc0hvbGRlclNlcnZpY2UudmFsdWVzKCkpIHtcclxuICAgICAgZm9yIChjb25zdCBpZCBvZiBpZHMpIHtcclxuICAgICAgICBjb25zdCBjb21wb25lbnRSZWYgPSB0aGlzLnNpZ25hdHVyZUNvbXBvbmVudHMuZ2V0KGlkKTtcclxuICAgICAgICAvLyBAdHMtaWdub3JlXHJcbiAgICAgICAgY29uc3Qgc2lnbiA9ICg8U2lnbmF0dXJlPmNvbXBvbmVudFJlZikuaW5zdGFuY2U7XHJcbiAgICAgICAgY29uc3QgZGF0YSA9IHNpZ24uZGF0YTtcclxuICAgICAgICBjb25zdCBwb3NpdGlvbiA9IHNpZ24ucG9zaXRpb247XHJcbiAgICAgICAgY29uc3QgdHlwZSA9IHNpZ24udHlwZTtcclxuXHJcbiAgICAgICAgaWYgKERyYWdnYWJsZVNpZ25hdHVyZS5URU1QICE9PSBkYXRhLmd1aWQpIHtcclxuICAgICAgICAgIHNpZ25hdHVyZXMucHVzaChTaWduYXR1cmVEYXRhLm1hcChkYXRhLCB0eXBlLCBwb3NpdGlvbikpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKFNpZ25hdHVyZVR5cGUuRElHSVRBTC5pZCA9PT0gdHlwZSkge1xyXG4gICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gc2lnbmF0dXJlcztcclxuICB9XHJcblxyXG4gIGlzUGRmKCkge1xyXG4gICAgaWYgKHRoaXMuZmlsZSkge1xyXG4gICAgICBpZiAoRmlsZVV0aWwuZmluZCh0aGlzLmZpbGUuZ3VpZCwgZmFsc2UpLmZvcm1hdCA9PT0gXCJQb3J0YWJsZSBEb2N1bWVudCBGb3JtYXRcIikge1xyXG4gICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gZmFsc2U7XHJcbiAgfVxyXG5cclxuICBjb2Rlc0NvbmZpZygpIHtcclxuICAgIHJldHVybiB0aGlzLmdldFNpZ25hdHVyZVR5cGVDb25maWcoU2lnbmF0dXJlVHlwZS5CQVJfQ09ERS5pZCkgfHwgdGhpcy5nZXRTaWduYXR1cmVUeXBlQ29uZmlnKFNpZ25hdHVyZVR5cGUuUVJfQ09ERS5pZCk7XHJcbiAgfVxyXG5cclxuICBpc1Zpc2libGUoaWQ6IHN0cmluZykge1xyXG4gICAgY29uc3Qgbm90Q29kZSA9IGlkICE9PSBTaWduYXR1cmVUeXBlLkJBUl9DT0RFLmlkICYmIGlkICE9PSBTaWduYXR1cmVUeXBlLlFSX0NPREUuaWQ7XHJcbiAgICByZXR1cm4gdGhpcy5nZXRTaWduYXR1cmVUeXBlQ29uZmlnKGlkKSAmJiAodGhpcy5pc0Rlc2t0b3AgfHwgbm90Q29kZSk7XHJcbiAgfVxyXG5cclxuICBhY3RpdmVUYWIoJGV2ZW50OiBzdHJpbmcpIHtcclxuICAgIHRoaXMuYWN0aXZlU2lnbmF0dXJlVGFiID0gJGV2ZW50O1xyXG4gIH1cclxuXHJcbiAgZmlsZURyb3BwZWQoJGV2ZW50KSB7XHJcbiAgICB0aGlzLmZpbGVXYXNEcm9wcGVkID0gJGV2ZW50O1xyXG4gIH1cclxuXHJcbiAgaXNGaXJzdFRhYihzaWduYXR1cmVUeXBlOiB7IG5hbWU6IHN0cmluZzsgaWNvbjogc3RyaW5nOyBpZDogc3RyaW5nOyB0aXRsZTogc3RyaW5nIH0pIHtcclxuICAgIGlmICgoc2lnbmF0dXJlVHlwZS5pZCA9PT0gU2lnbmF0dXJlVHlwZS5URVhULmlkKSB8fCAoIXRoaXMuaXNEZXNrdG9wICYmIHNpZ25hdHVyZVR5cGUuaWQgPT09IFNpZ25hdHVyZVR5cGUuUVJfQ09ERS5pZCkpIHtcclxuICAgICAgcmV0dXJuIC0xO1xyXG4gICAgfVxyXG4gICAgaWYgKChzaWduYXR1cmVUeXBlLmlkID09PSBTaWduYXR1cmVUeXBlLkhBTkQuaWQpIHx8ICghdGhpcy5pc0Rlc2t0b3AgJiYgc2lnbmF0dXJlVHlwZS5pZCA9PT0gU2lnbmF0dXJlVHlwZS5CQVJfQ09ERS5pZCkpIHtcclxuICAgICAgcmV0dXJuIDE7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gMDtcclxuICB9XHJcblxyXG4gIG9uUGFuKCRldmVudClcclxuICB7XHJcbiAgICB0aGlzLl96b29tU2VydmljZS5jaGFuZ2Vab29tKHRoaXMuX3pvb20pO1xyXG4gIH1cclxufVxyXG4iXX0=