/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
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
var $ = jquery;
var SignatureAppComponent = /** @class */ (function () {
    function SignatureAppComponent(_signatureService, _modalService, configService, uploadFilesService, _navigateService, _zoomService, pagePreloadService, _renderPrintService, passwordService, _windowService, _selectSignatureService, _signatureTabActivationService, _hostingComponentsService, _addDynamicComponentService, _dragSignatureService, _onCloseService, removeSignatureService, _activeSignatureService, _excMessageService, _signaturesHolderService, _tabActivatorService, copySignatureService) {
        var _this = this;
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
        function (tabId) {
            if (tabId === '1') {
                if (_this.activeSignatureTab) {
                    _this._signatureTabActivationService.changeActiveTab(_this.activeSignatureTab);
                }
                _this.activeSignatureTab = null;
            }
        }));
        this.isDesktop = _windowService.isDesktop();
        _windowService.onResize.subscribe((/**
         * @param {?} w
         * @return {?}
         */
        function (w) {
            if (!_windowService.isMobile()) {
                _this.isDesktop = _windowService.isDesktop();
                if (!_this.isDesktop) {
                    _this.refreshZoom();
                }
            }
        }));
        copySignatureService.copySignature.subscribe((/**
         * @param {?} copySign
         * @return {?}
         */
        function (copySign) {
            var e_1, _a;
            /** @type {?} */
            var componentRef = _this.signatureComponents.get(copySign.id);
            if (componentRef) {
                // @ts-ignore
                /** @type {?} */
                var comp = ((/** @type {?} */ (componentRef))).instance;
                /** @type {?} */
                var compPage = comp.data.number;
                comp.baseCopied = true;
                try {
                    for (var _b = tslib_1.__values(_this.file.pages), _c = _b.next(); !_c.done; _c = _b.next()) {
                        var page = _c.value;
                        if (page.number !== compPage) {
                            /** @type {?} */
                            var sign = _this.createDraggableSign(comp, copySign, page);
                            /** @type {?} */
                            var addedSignature = _this.createAddedSignature(copySign, comp, page);
                            /** @type {?} */
                            var id = _this.addSignatureComponent(addedSignature, sign, page, true);
                            _this._signaturesHolderService.addId(sign.guid, id);
                        }
                    }
                }
                catch (e_1_1) { e_1 = { error: e_1_1 }; }
                finally {
                    try {
                        if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                    }
                    finally { if (e_1) throw e_1.error; }
                }
            }
        }));
        copySignatureService.changesSignature.subscribe((/**
         * @param {?} copyChanges
         * @return {?}
         */
        function (copyChanges) {
            var e_2, _a;
            /** @type {?} */
            var componentRef = _this.signatureComponents.get(copyChanges.id);
            if (componentRef) {
                /** @type {?} */
                var ids = _this._signaturesHolderService.get(copyChanges.guid);
                try {
                    for (var ids_1 = tslib_1.__values(ids), ids_1_1 = ids_1.next(); !ids_1_1.done; ids_1_1 = ids_1.next()) {
                        var id = ids_1_1.value;
                        /** @type {?} */
                        var compRef = _this.signatureComponents.get(id);
                        if (compRef) {
                            // @ts-ignore
                            /** @type {?} */
                            var comp = ((/** @type {?} */ (compRef))).instance;
                            if (comp.id !== copyChanges.id && (comp.copied || comp.baseCopied)) {
                                comp.data.width = copyChanges.width;
                                comp.data.height = copyChanges.height;
                                comp.data.position = copyChanges.position;
                                comp.data.props = copyChanges.props;
                            }
                        }
                    }
                }
                catch (e_2_1) { e_2 = { error: e_2_1 }; }
                finally {
                    try {
                        if (ids_1_1 && !ids_1_1.done && (_a = ids_1.return)) _a.call(ids_1);
                    }
                    finally { if (e_2) throw e_2.error; }
                }
            }
        }));
        removeSignatureService.removeSignature.subscribe((/**
         * @param {?} del
         * @return {?}
         */
        function (del) {
            var e_3, _a;
            /** @type {?} */
            var ids = _this._signaturesHolderService.get(del.guid);
            try {
                for (var ids_2 = tslib_1.__values(ids), ids_2_1 = ids_2.next(); !ids_2_1.done; ids_2_1 = ids_2.next()) {
                    var id = ids_2_1.value;
                    if (del.type === SignatureType.DIGITAL.id || del.id === id) {
                        /** @type {?} */
                        var componentRef = _this.signatureComponents.get(id);
                        if (componentRef) {
                            componentRef.destroy();
                        }
                        _this.signatureComponents.delete(id);
                        _this._signaturesHolderService.remove(del.guid, id);
                    }
                }
            }
            catch (e_3_1) { e_3 = { error: e_3_1 }; }
            finally {
                try {
                    if (ids_2_1 && !ids_2_1.done && (_a = ids_2.return)) _a.call(ids_2);
                }
                finally { if (e_3) throw e_3.error; }
            }
        }));
        configService.updatedConfig.subscribe((/**
         * @param {?} signatureConfig
         * @return {?}
         */
        function (signatureConfig) {
            _this.signatureConfig = signatureConfig;
        }));
        uploadFilesService.uploadsChange.subscribe((/**
         * @param {?} uploads
         * @return {?}
         */
        function (uploads) {
            if (uploads) {
                /** @type {?} */
                var i = void 0;
                for (i = 0; i < uploads.length; i++) {
                    _this._signatureService.upload(uploads.item(i), '', _this.rewriteConfig, null).subscribe((/**
                     * @param {?} obj
                     * @return {?}
                     */
                    function (obj) {
                        _this.fileWasDropped ? _this.selectFile(obj.guid, '', '') : _this.selectDir('');
                    }));
                }
            }
        }));
        pagePreloadService.checkPreload.subscribe((/**
         * @param {?} page
         * @return {?}
         */
        function (page) {
            if (_this.preloadPageCountConfig !== 0) {
                for (var i = page; i < page + 2; i++) {
                    if (i > 0 && i <= _this.countPages && !_this.file.pages[i - 1].data) {
                        _this.preloadPages(i, i);
                    }
                }
            }
        }));
        passwordService.passChange.subscribe((/**
         * @param {?} pass
         * @return {?}
         */
        function (pass) {
            _this.selectFile(_this.credentials.guid, pass, CommonModals.PasswordRequired);
        }));
        _selectSignatureService.selectSignature.subscribe((/**
         * @param {?} sign
         * @return {?}
         */
        function (sign) {
            _this.selectSignature(sign);
        }));
        this.isDesktop = _windowService.isDesktop();
        _windowService.onResize.subscribe((/**
         * @param {?} w
         * @return {?}
         */
        function (w) {
            _this.isDesktop = _windowService.isDesktop();
        }));
    }
    /**
     * @private
     * @param {?} comp
     * @param {?} copySign
     * @param {?} page
     * @return {?}
     */
    SignatureAppComponent.prototype.createDraggableSign = /**
     * @private
     * @param {?} comp
     * @param {?} copySign
     * @param {?} page
     * @return {?}
     */
    function (comp, copySign, page) {
        /** @type {?} */
        var sign = new DraggableSignature();
        sign.type = comp.type;
        sign.guid = copySign.guid;
        sign.position = comp.position;
        sign.pageNumber = page.number;
        return sign;
    };
    /**
     * @private
     * @param {?} copySign
     * @param {?} comp
     * @param {?} page
     * @return {?}
     */
    SignatureAppComponent.prototype.createAddedSignature = /**
     * @private
     * @param {?} copySign
     * @param {?} comp
     * @param {?} page
     * @return {?}
     */
    function (copySign, comp, page) {
        /** @type {?} */
        var addedSignature = new AddedSignature();
        addedSignature.guid = copySign.guid;
        addedSignature.data = comp.data.data;
        if (comp.data.props) {
            addedSignature.props = comp.data.props;
        }
        addedSignature.width = comp.data.width;
        addedSignature.height = comp.data.height;
        addedSignature.number = page.number;
        return addedSignature;
    };
    /**
     * @return {?}
     */
    SignatureAppComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        if (this.defaultDocumentConfig()) {
            this.isLoading = true;
            this.selectFile(this.defaultDocumentConfig(), "", "");
        }
    };
    /**
     * @private
     * @param {?} pt
     * @return {?}
     */
    SignatureAppComponent.prototype.ptToPx = /**
     * @private
     * @param {?} pt
     * @return {?}
     */
    function (pt) {
        //pt * 96 / 72 = px.
        return pt * 96 / 72;
    };
    /**
     * @private
     * @return {?}
     */
    SignatureAppComponent.prototype.getFitToWidth = /**
     * @private
     * @return {?}
     */
    function () {
        // Images and Excel-related files receiving dimensions in px from server
        /** @type {?} */
        var pageWidth = this.ptToPx(this._pageWidth);
        /** @type {?} */
        var pageHeight = this.ptToPx(this._pageHeight);
        /** @type {?} */
        var offsetWidth = pageWidth ? pageWidth : window.innerWidth;
        return (pageHeight > pageWidth && Math.round(offsetWidth / window.innerWidth) < 2) ? 200 - Math.round(offsetWidth * 100 / window.innerWidth) : Math.round(window.innerWidth * 100 / offsetWidth);
    };
    Object.defineProperty(SignatureAppComponent.prototype, "zoom", {
        get: /**
         * @return {?}
         */
        function () {
            return this._zoom;
        },
        set: /**
         * @param {?} zoom
         * @return {?}
         */
        function (zoom) {
            this._zoom = zoom;
            this._zoomService.changeZoom(this._zoom);
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @private
     * @return {?}
     */
    SignatureAppComponent.prototype.refreshZoom = /**
     * @private
     * @return {?}
     */
    function () {
        this.zoom = this._windowService.isDesktop() ? 100 : this.getFitToWidth();
    };
    /**
     * @return {?}
     */
    SignatureAppComponent.prototype.zoomIn = /**
     * @return {?}
     */
    function () {
        if (this.formatDisabled)
            return;
        if (this._zoom < 490) {
            this.zoom = this._zoom + 10;
        }
    };
    /**
     * @return {?}
     */
    SignatureAppComponent.prototype.zoomOut = /**
     * @return {?}
     */
    function () {
        if (this.formatDisabled)
            return;
        if (this._zoom > 30) {
            this.zoom = this._zoom - 10;
        }
    };
    Object.defineProperty(SignatureAppComponent.prototype, "rewriteConfig", {
        get: /**
         * @return {?}
         */
        function () {
            return this.signatureConfig ? this.signatureConfig.rewrite : true;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SignatureAppComponent.prototype, "zoomConfig", {
        get: /**
         * @return {?}
         */
        function () {
            return this.signatureConfig ? this.signatureConfig.zoom : true;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SignatureAppComponent.prototype, "pageSelectorConfig", {
        get: /**
         * @return {?}
         */
        function () {
            return this.signatureConfig ? this.signatureConfig.pageSelector : true;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SignatureAppComponent.prototype, "preloadPageCountConfig", {
        get: /**
         * @return {?}
         */
        function () {
            return this.signatureConfig ? this.signatureConfig.preloadPageCount : 0;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SignatureAppComponent.prototype, "downloadConfig", {
        get: /**
         * @return {?}
         */
        function () {
            return this.signatureConfig ? this.signatureConfig.download : true;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SignatureAppComponent.prototype, "downloadOriginalConfig", {
        get: /**
         * @return {?}
         */
        function () {
            return this.signatureConfig ? this.signatureConfig.downloadOriginal : true;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SignatureAppComponent.prototype, "downloadSingedConfig", {
        get: /**
         * @return {?}
         */
        function () {
            return this.signatureConfig ? this.signatureConfig.downloadSigned : true;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SignatureAppComponent.prototype, "uploadConfig", {
        get: /**
         * @return {?}
         */
        function () {
            return this.signatureConfig ? this.signatureConfig.upload : true;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @private
     * @return {?}
     */
    SignatureAppComponent.prototype.defaultDocumentConfig = /**
     * @private
     * @return {?}
     */
    function () {
        return this.signatureConfig ? this.signatureConfig.defaultDocument : "";
    };
    Object.defineProperty(SignatureAppComponent.prototype, "printConfig", {
        get: /**
         * @return {?}
         */
        function () {
            return this.signatureConfig ? this.signatureConfig.print : true;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SignatureAppComponent.prototype, "browseConfig", {
        get: /**
         * @return {?}
         */
        function () {
            return this.signatureConfig ? this.signatureConfig.browse : true;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SignatureAppComponent.prototype, "htmlModeConfig", {
        get: /**
         * @return {?}
         */
        function () {
            return false;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SignatureAppComponent.prototype, "enableRightClickConfig", {
        get: /**
         * @return {?}
         */
        function () {
            return this.signatureConfig ? this.signatureConfig.enableRightClick : true;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SignatureAppComponent.prototype, "textSignatureConfig", {
        get: /**
         * @return {?}
         */
        function () {
            return this.signatureConfig ? this.signatureConfig.textSignature : true;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SignatureAppComponent.prototype, "imageSignatureConfig", {
        get: /**
         * @return {?}
         */
        function () {
            return this.signatureConfig ? this.signatureConfig.imageSignature : true;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SignatureAppComponent.prototype, "digitalSignatureConfig", {
        get: /**
         * @return {?}
         */
        function () {
            return this.signatureConfig ? this.signatureConfig.digitalSignature : true;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SignatureAppComponent.prototype, "qrCodeSignatureConfig", {
        get: /**
         * @return {?}
         */
        function () {
            return this.signatureConfig ? this.signatureConfig.qrCodeSignature : true;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SignatureAppComponent.prototype, "barCodeSignatureConfig", {
        get: /**
         * @return {?}
         */
        function () {
            return this.signatureConfig ? this.signatureConfig.barCodeSignature : true;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SignatureAppComponent.prototype, "stampSignatureConfig", {
        get: /**
         * @return {?}
         */
        function () {
            return this.signatureConfig ? this.signatureConfig.stampSignature : true;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SignatureAppComponent.prototype, "handSignatureConfig", {
        get: /**
         * @return {?}
         */
        function () {
            return this.signatureConfig ? this.signatureConfig.handSignature : true;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SignatureAppComponent.prototype, "currentPage", {
        get: /**
         * @return {?}
         */
        function () {
            return this._navigateService.currentPage;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} id
     * @return {?}
     */
    SignatureAppComponent.prototype.openModal = /**
     * @param {?} id
     * @return {?}
     */
    function (id) {
        this._modalService.open(id);
    };
    /**
     * @param {?} id
     * @return {?}
     */
    SignatureAppComponent.prototype.closeModal = /**
     * @param {?} id
     * @return {?}
     */
    function (id) {
        this._modalService.close(id);
    };
    /**
     * @param {?} $event
     * @return {?}
     */
    SignatureAppComponent.prototype.selectDir = /**
     * @param {?} $event
     * @return {?}
     */
    function ($event) {
        var _this = this;
        this._signatureService.loadFiles($event).subscribe((/**
         * @param {?} files
         * @return {?}
         */
        function (files) { return _this.files = files || []; }));
    };
    /**
     * @param {?} $event
     * @param {?} password
     * @param {?} modalId
     * @return {?}
     */
    SignatureAppComponent.prototype.selectFile = /**
     * @param {?} $event
     * @param {?} password
     * @param {?} modalId
     * @return {?}
     */
    function ($event, password, modalId) {
        var _this = this;
        this.credentials = { guid: $event, password: password };
        this.file = null;
        this._signatureService.loadFile(this.credentials).subscribe((/**
         * @param {?} file
         * @return {?}
         */
        function (file) {
            _this.file = file;
            _this.formatDisabled = !_this.file;
            if (file) {
                if (!_this.isDesktop && file.pages && file.pages[0]) {
                    _this._pageHeight = file.pages[0].height;
                    _this._pageWidth = file.pages[0].width;
                    _this.refreshZoom();
                }
                /** @type {?} */
                var preloadPageCount = _this.preloadPageCountConfig;
                /** @type {?} */
                var countPages = file.pages ? file.pages.length : 0;
                if (preloadPageCount > 0) {
                    _this.preloadPages(1, preloadPageCount > countPages ? countPages : preloadPageCount);
                }
                _this._navigateService.countPages = countPages;
                _this._navigateService.currentPage = 1;
                _this.countPages = countPages;
                _this.cleanSignatures();
            }
        }));
        if (modalId) {
            this._modalService.close(modalId);
        }
        this.clearData();
    };
    /**
     * @param {?} start
     * @param {?} end
     * @return {?}
     */
    SignatureAppComponent.prototype.preloadPages = /**
     * @param {?} start
     * @param {?} end
     * @return {?}
     */
    function (start, end) {
        var _this = this;
        var _loop_1 = function (i) {
            this_1._signatureService.loadPage(this_1.credentials, i).subscribe((/**
             * @param {?} page
             * @return {?}
             */
            function (page) {
                _this.file.pages[i - 1] = page;
            }));
        };
        var this_1 = this;
        for (var i = start; i <= end; i++) {
            _loop_1(i);
        }
    };
    /**
     * @param {?} $event
     * @return {?}
     */
    SignatureAppComponent.prototype.upload = /**
     * @param {?} $event
     * @return {?}
     */
    function ($event) {
        var _this = this;
        this._signatureService.upload(null, $event, this.rewriteConfig, null).subscribe((/**
         * @return {?}
         */
        function () {
            _this.selectDir('');
        }));
    };
    /**
     * @return {?}
     */
    SignatureAppComponent.prototype.downloadFile = /**
     * @return {?}
     */
    function () {
        if (this.formatDisabled)
            return;
        window.location.assign(this._signatureService.getDownloadUrl(this.credentials));
    };
    /**
     * @private
     * @return {?}
     */
    SignatureAppComponent.prototype.clearData = /**
     * @private
     * @return {?}
     */
    function () {
        var e_4, _a;
        if (!this.file || !this.file.pages) {
            return;
        }
        try {
            for (var _b = tslib_1.__values(this.file.pages), _c = _b.next(); !_c.done; _c = _b.next()) {
                var page = _c.value;
                page.data = null;
            }
        }
        catch (e_4_1) { e_4 = { error: e_4_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_4) throw e_4.error; }
        }
    };
    /**
     * @param {?} $event
     * @return {?}
     */
    SignatureAppComponent.prototype.onRightClick = /**
     * @param {?} $event
     * @return {?}
     */
    function ($event) {
        return this.enableRightClickConfig;
    };
    /**
     * @param {?} id
     * @return {?}
     */
    SignatureAppComponent.prototype.getSignatureTypeConfig = /**
     * @param {?} id
     * @return {?}
     */
    function (id) {
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
    };
    /**
     * @param {?} $event
     * @return {?}
     */
    SignatureAppComponent.prototype.dragOver = /**
     * @param {?} $event
     * @return {?}
     */
    function ($event) {
        $event.preventDefault();
        $event.stopPropagation();
    };
    /**
     * @param {?} $event
     * @return {?}
     */
    SignatureAppComponent.prototype.dropSignature = /**
     * @param {?} $event
     * @return {?}
     */
    function ($event) {
        $event.preventDefault();
        $event.stopPropagation();
        /** @type {?} */
        var position = Utils.getMousePosition($event);
        /** @type {?} */
        var currentPage = document.elementFromPoint(position.x, position.y);
        if (currentPage && $(currentPage).parent().parent() && $(currentPage).parent().parent().parent().hasClass("page")) {
            /** @type {?} */
            var documentPage = $(currentPage).parent().parent()[0];
            /** @type {?} */
            var left = (position.x - $(documentPage).offset().left) / (this.zoom / 100);
            /** @type {?} */
            var top_1 = (position.y - $(documentPage).offset().top) / (this.zoom / 100);
            /** @type {?} */
            var currentPosition = new Position(left, top_1);
            /** @type {?} */
            var sign = this._dragSignatureService.sign;
            if (sign) {
                /** @type {?} */
                var id = $(currentPage).parent().attr('id');
                if (id) {
                    /** @type {?} */
                    var split = id.split('-');
                    sign.pageNumber = split.length === 2 ? parseInt(split[1], 10) : sign.pageNumber;
                }
                sign.position = currentPosition;
                this.selectSignature(sign);
                this._dragSignatureService.sign = null;
            }
        }
    };
    /**
     * @private
     * @param {?} sign
     * @return {?}
     */
    SignatureAppComponent.prototype.selectSignature = /**
     * @private
     * @param {?} sign
     * @return {?}
     */
    function (sign) {
        var _this = this;
        var e_5, _a;
        if (sign.type === SignatureType.DIGITAL.id) {
            /** @type {?} */
            var addedSignature = new AddedSignature();
            addedSignature.digitalProps = sign.digitalProps;
            addedSignature.guid = sign.guid;
            addedSignature.number = sign.pageNumber;
            try {
                for (var _b = tslib_1.__values(this.file.pages), _c = _b.next(); !_c.done; _c = _b.next()) {
                    var page = _c.value;
                    /** @type {?} */
                    var id = this.addSignatureComponent(addedSignature, sign, page);
                    this._signaturesHolderService.addId(sign.guid, id);
                }
            }
            catch (e_5_1) { e_5 = { error: e_5_1 }; }
            finally {
                try {
                    if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                }
                finally { if (e_5) throw e_5.error; }
            }
            this.closeTab(sign.type);
        }
        else {
            this._signatureService.loadSignatureImage(sign).subscribe((/**
             * @param {?} signature
             * @return {?}
             */
            function (signature) {
                signature.number = sign.pageNumber;
                /** @type {?} */
                var pageModel = _this.file.pages.find((/**
                 * @param {?} p
                 * @return {?}
                 */
                function (p) {
                    return p.number === sign.pageNumber;
                }));
                /** @type {?} */
                var id = _this.addSignatureComponent(signature, sign, pageModel);
                _this._signaturesHolderService.addId(sign.guid, id);
                _this.closeTab(sign.type);
            }));
        }
    };
    /**
     * @private
     * @param {?} addedSignature
     * @param {?} sign
     * @param {?} page
     * @param {?=} copied
     * @return {?}
     */
    SignatureAppComponent.prototype.addSignatureComponent = /**
     * @private
     * @param {?} addedSignature
     * @param {?} sign
     * @param {?} page
     * @param {?=} copied
     * @return {?}
     */
    function (addedSignature, sign, page, copied) {
        if (copied === void 0) { copied = false; }
        /** @type {?} */
        var dynamicDirective = this._hostingComponentsService.find(page.number);
        if (dynamicDirective) {
            /** @type {?} */
            var viewContainerRef = dynamicDirective.viewContainerRef;
            /** @type {?} */
            var selectSignature = this._addDynamicComponentService.addDynamicComponent(viewContainerRef, Signature);
            /** @type {?} */
            var id = this.getNextId();
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
    };
    /**
     * @private
     * @return {?}
     */
    SignatureAppComponent.prototype.getNextId = /**
     * @private
     * @return {?}
     */
    function () {
        var e_6, _a;
        /** @type {?} */
        var maxId = 0;
        try {
            for (var _b = tslib_1.__values(this.signatureComponents.keys()), _c = _b.next(); !_c.done; _c = _b.next()) {
                var annId = _c.value;
                if (annId > maxId) {
                    maxId = annId;
                }
            }
        }
        catch (e_6_1) { e_6 = { error: e_6_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_6) throw e_6.error; }
        }
        /** @type {?} */
        var id = maxId + 1;
        return id;
    };
    /**
     * @private
     * @param {?} type
     * @return {?}
     */
    SignatureAppComponent.prototype.closeTab = /**
     * @private
     * @param {?} type
     * @return {?}
     */
    function (type) {
        this._signatureTabActivationService.changeActiveTab(type);
    };
    /**
     * @param {?} $event
     * @return {?}
     */
    SignatureAppComponent.prototype.hideAll = /**
     * @param {?} $event
     * @return {?}
     */
    function ($event) {
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
    };
    /**
     * @param {?} $event
     * @return {?}
     */
    SignatureAppComponent.prototype.newSign = /**
     * @param {?} $event
     * @return {?}
     */
    function ($event) {
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
    };
    /**
     * @private
     * @return {?}
     */
    SignatureAppComponent.prototype.addTextSign = /**
     * @private
     * @return {?}
     */
    function () {
        /** @type {?} */
        var signature = new AddedSignature();
        signature.props = SignatureProps.getDefault();
        signature.guid = DraggableSignature.TEMP;
        /** @type {?} */
        var sign = new DraggableSignature();
        sign.guid = DraggableSignature.TEMP;
        sign.position = new Position(0, 0);
        sign.type = SignatureType.TEXT.id;
        /** @type {?} */
        var pageNumber = this._navigateService.currentPage;
        signature.number = pageNumber;
        sign.pageNumber = pageNumber;
        /** @type {?} */
        var pageModel = this.file.pages.find((/**
         * @param {?} p
         * @return {?}
         */
        function (p) {
            return p.number === pageNumber;
        }));
        /** @type {?} */
        var id = this.addSignatureComponent(signature, sign, pageModel);
        this._signaturesHolderService.addId(sign.guid, id);
    };
    /**
     * @return {?}
     */
    SignatureAppComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.cleanSignatures();
    };
    /**
     * @private
     * @return {?}
     */
    SignatureAppComponent.prototype.cleanSignatures = /**
     * @private
     * @return {?}
     */
    function () {
        var e_7, _a;
        try {
            for (var _b = tslib_1.__values(this.signatureComponents.values()), _c = _b.next(); !_c.done; _c = _b.next()) {
                var componentRef = _c.value;
                componentRef.destroy();
            }
        }
        catch (e_7_1) { e_7 = { error: e_7_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_7) throw e_7.error; }
        }
        this.signatureComponents = new Map();
        this._signaturesHolderService.clear();
    };
    /**
     * @return {?}
     */
    SignatureAppComponent.prototype.sign = /**
     * @return {?}
     */
    function () {
        var _this = this;
        /** @type {?} */
        var signatures = this.prepareSignaturesData();
        this._signatureService.sign(this.credentials, signatures).subscribe((/**
         * @param {?} ret
         * @return {?}
         */
        function (ret) {
            _this._modalService.open(CommonModals.OperationSuccess);
            _this.selectFile(ret.guid, null, CommonModals.OperationSuccess);
        }));
    };
    /**
     * @return {?}
     */
    SignatureAppComponent.prototype.prepareSignaturesData = /**
     * @return {?}
     */
    function () {
        var e_8, _a, e_9, _b;
        /** @type {?} */
        var signatures = [];
        try {
            for (var _c = tslib_1.__values(this._signaturesHolderService.values()), _d = _c.next(); !_d.done; _d = _c.next()) {
                var ids = _d.value;
                try {
                    for (var ids_3 = tslib_1.__values(ids), ids_3_1 = ids_3.next(); !ids_3_1.done; ids_3_1 = ids_3.next()) {
                        var id = ids_3_1.value;
                        /** @type {?} */
                        var componentRef = this.signatureComponents.get(id);
                        // @ts-ignore
                        /** @type {?} */
                        var sign = ((/** @type {?} */ (componentRef))).instance;
                        /** @type {?} */
                        var data = sign.data;
                        /** @type {?} */
                        var position = sign.position;
                        /** @type {?} */
                        var type = sign.type;
                        if (DraggableSignature.TEMP !== data.guid) {
                            signatures.push(SignatureData.map(data, type, position));
                        }
                        if (SignatureType.DIGITAL.id === type) {
                            break;
                        }
                    }
                }
                catch (e_9_1) { e_9 = { error: e_9_1 }; }
                finally {
                    try {
                        if (ids_3_1 && !ids_3_1.done && (_b = ids_3.return)) _b.call(ids_3);
                    }
                    finally { if (e_9) throw e_9.error; }
                }
            }
        }
        catch (e_8_1) { e_8 = { error: e_8_1 }; }
        finally {
            try {
                if (_d && !_d.done && (_a = _c.return)) _a.call(_c);
            }
            finally { if (e_8) throw e_8.error; }
        }
        return signatures;
    };
    /**
     * @return {?}
     */
    SignatureAppComponent.prototype.isPdf = /**
     * @return {?}
     */
    function () {
        if (this.file) {
            if (FileUtil.find(this.file.guid, false).format === "Portable Document Format") {
                return true;
            }
        }
        return false;
    };
    /**
     * @return {?}
     */
    SignatureAppComponent.prototype.codesConfig = /**
     * @return {?}
     */
    function () {
        return this.getSignatureTypeConfig(SignatureType.BAR_CODE.id) || this.getSignatureTypeConfig(SignatureType.QR_CODE.id);
    };
    /**
     * @param {?} id
     * @return {?}
     */
    SignatureAppComponent.prototype.isVisible = /**
     * @param {?} id
     * @return {?}
     */
    function (id) {
        /** @type {?} */
        var notCode = id !== SignatureType.BAR_CODE.id && id !== SignatureType.QR_CODE.id;
        return this.getSignatureTypeConfig(id) && (this.isDesktop || notCode);
    };
    /**
     * @param {?} $event
     * @return {?}
     */
    SignatureAppComponent.prototype.activeTab = /**
     * @param {?} $event
     * @return {?}
     */
    function ($event) {
        this.activeSignatureTab = $event;
    };
    /**
     * @param {?} $event
     * @return {?}
     */
    SignatureAppComponent.prototype.fileDropped = /**
     * @param {?} $event
     * @return {?}
     */
    function ($event) {
        this.fileWasDropped = $event;
    };
    /**
     * @param {?} signatureType
     * @return {?}
     */
    SignatureAppComponent.prototype.isFirstTab = /**
     * @param {?} signatureType
     * @return {?}
     */
    function (signatureType) {
        if ((signatureType.id === SignatureType.TEXT.id) || (!this.isDesktop && signatureType.id === SignatureType.QR_CODE.id)) {
            return -1;
        }
        if ((signatureType.id === SignatureType.HAND.id) || (!this.isDesktop && signatureType.id === SignatureType.BAR_CODE.id)) {
            return 1;
        }
        return 0;
    };
    /**
     * @param {?} $event
     * @return {?}
     */
    SignatureAppComponent.prototype.onPan = /**
     * @param {?} $event
     * @return {?}
     */
    function ($event) {
        this._zoomService.changeZoom(this._zoom);
    };
    SignatureAppComponent.decorators = [
        { type: Component, args: [{
                    selector: 'gd-signature',
                    template: "<gd-loading-mask [loadingMask]=\"isLoading\"></gd-loading-mask>\n<div class=\"wrapper\" (contextmenu)=\"onRightClick($event)\" (click)=\"hideAll($event)\">\n  <div class=\"signature-wrapper wrapper\">\n    <gd-tabbed-toolbars [logo]=\"'signature'\" [icon]=\"'pen-square'\">\n      <gd-tabs>\n        <gd-tab [tabTitle]=\"'File'\" [icon]=\"'folder-open'\" [id]=\"'1'\" [active]=\"true\">\n          <div id=\"files-tools\" class=\"toolbar-panel\">\n            <gd-button [icon]=\"'folder-open'\" [tooltip]=\"'Browse files'\" (click)=\"openModal(browseFilesModal)\"\n                       *ngIf=\"browseConfig\" [elementPosition]=\"-1\"></gd-button>\n\n            <gd-button [disabled]=\"formatDisabled\" [icon]=\"'download'\" [tooltip]=\"'Download'\"\n                       (click)=\"downloadFile()\" *ngIf=\"downloadConfig\"></gd-button>\n            <gd-button [disabled]=\"formatDisabled\" [icon]=\"'save'\" [tooltip]=\"'Save'\" (click)=\"sign()\"></gd-button>\n            <gd-button class=\"desktop-hide\" [disabled]=\"formatDisabled\" [icon]=\"'search-plus'\" [tooltip]=\"'Zoom In'\"\n            (click)=\"zoomIn()\" *ngIf=\"zoomConfig\"></gd-button>\n            <gd-button class=\"desktop-hide\" [disabled]=\"formatDisabled\" [icon]=\"'search-minus'\" [tooltip]=\"'Zoom Out'\"\n            (click)=\"zoomOut()\" *ngIf=\"zoomConfig\"></gd-button>\n          </div>\n        </gd-tab>\n        <gd-tab [tabTitle]=\"'Signatures'\" [icon]=\"'signature'\" [id]=\"'2'\">\n          <div class=\"toolbar-panel\">\n            <div *ngFor=\"let signatureType of signatureTypes\">\n              <gd-top-tab [disabled]=\"!file\" *ngIf=\"isVisible(signatureType.id)\"\n                          [icon]=\"signatureType.icon\" (activeTab)=\"activeTab($event)\"\n                          [id]=\"signatureType.id\" [tooltip]=\"signatureType.name\"\n                          [elementPosition]=\"isFirstTab(signatureType)\">\n              </gd-top-tab>\n            </div>\n          </div>\n        </gd-tab>\n        <gd-tab [tabTitle]=\"''\" [icon]=\"'qrcode'\" [id]=\"'3'\" *ngIf=\"!isDesktop && codesConfig()\">\n          <div class=\"toolbar-panel\">\n            <div *ngFor=\"let signatureType of signatureTypeCodes\">\n              <gd-top-tab [disabled]=\"!file\" *ngIf=\"getSignatureTypeConfig(signatureType.id)\"\n                          [icon]=\"signatureType.icon\" (activeTab)=\"activeTab($event)\"\n                          [id]=\"signatureType.id\" [tooltip]=\"signatureType.name\"\n                          [elementPosition]=\"isFirstTab(signatureType)\">\n              </gd-top-tab>\n            </div>\n          </div>\n        </gd-tab>\n      </gd-tabs>\n    </gd-tabbed-toolbars>\n    <gd-signature-left-panel *ngIf=\"activeSignatureTab\" [rewrite]=\"rewriteConfig\" (newSignatureEvent)=\"newSign($event)\"\n                             [isPdf]=\"isPdf()\" [id]=\"activeSignatureTab\">\n    </gd-signature-left-panel>\n    <div class=\"doc-panel\" *ngIf=\"file\">\n      <gd-document (drop)=\"dropSignature($event)\" (dragover)=\"dragOver($event)\" class=\"gd-document\" *ngIf=\"file\"\n                   [file]=\"file\" [mode]=\"htmlModeConfig\" gdScrollable\n                   [preloadPageCount]=\"preloadPageCountConfig\" gdRenderPrint [htmlMode]=\"htmlModeConfig\" (onpan)=\"onPan($event)\"></gd-document>\n    </div>\n\n    <gd-init-state [icon]=\"'signature'\" [text]=\"'Drop file here to upload'\" *ngIf=\"!file\"\n                   (fileDropped)=\"fileDropped($event)\">\n      Click\n      <fa-icon [icon]=\"['fas','folder-open']\"></fa-icon>\n      to open file<br>\n      Or drop file here\n    </gd-init-state>\n    <gd-hand-modal></gd-hand-modal>\n    <gd-stamp-modal></gd-stamp-modal>\n  </div>\n  <gd-browse-files-modal (urlForUpload)=\"upload($event)\" [files]=\"files\" (selectedDirectory)=\"selectDir($event)\"\n                         (selectedFileGuid)=\"selectFile($event, null, browseFilesModal)\"\n                         [uploadConfig]=\"uploadConfig\"></gd-browse-files-modal>\n\n  <gd-error-modal></gd-error-modal>\n  <gd-password-required></gd-password-required>\n  <gd-success-modal></gd-success-modal>\n</div>\n",
                    styles: ["@import url(https://fonts.googleapis.com/css?family=Open+Sans&display=swap);:host *{font-family:'Open Sans',Arial,Helvetica,sans-serif}::ng-deep .page{position:relative}::ng-deep .gd-page-image{width:unset;height:unset}::ng-deep .top-panel{align-content:flex-start}.wrapper{-webkit-box-align:stretch;align-items:stretch;height:100%;width:100%;position:fixed;top:0;bottom:0;left:0;right:0}.doc-panel{display:-webkit-box;display:flex;height:inherit}.gd-document{width:100%;height:calc(100% - 90px)}.toolbar-panel{width:100%;display:-webkit-box;display:flex;-webkit-box-align:center;align-items:center}.signature-wrapper ::ng-deep .button{color:#3e4e5a!important}.signature-wrapper ::ng-deep .button .text{padding:0!important}.desktop-hide{display:none}@media (max-width:1037px){::ng-deep .logo ::ng-deep .icon{font-size:24px!important}::ng-deep .top-panel{height:120px!important}.desktop-hide{display:block}.gd-document{height:calc(100% - 120px)}::ng-deep .select{font-size:14px!important;min-width:60px!important}::ng-deep .gd-text-menu .button{margin:0 7px 0 0!important;font-size:14px!important}::ng-deep .format-select{margin:0 7px 0 0!important}::ng-deep .first-component{margin-left:15px!important}}"]
                }] }
    ];
    /** @nocollapse */
    SignatureAppComponent.ctorParameters = function () { return [
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
    ]; };
    return SignatureAppComponent;
}());
export { SignatureAppComponent };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2lnbmF0dXJlLWFwcC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ3JvdXBkb2NzLmV4YW1wbGVzLmFuZ3VsYXIvc2lnbmF0dXJlLyIsInNvdXJjZXMiOlsibGliL3NpZ25hdHVyZS1hcHAuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFDLFNBQVMsRUFBa0MsTUFBTSxlQUFlLENBQUM7QUFDekUsT0FBTyxFQUFDLGdCQUFnQixFQUFDLE1BQU0scUJBQXFCLENBQUM7QUFDckQsT0FBTyxFQUdMLFlBQVksRUFDWixrQkFBa0IsRUFDbEIsZUFBZSxFQUNmLGtCQUFrQixFQUVsQixXQUFXLEVBQ1gsa0JBQWtCLEVBQ2xCLFFBQVEsRUFDUixlQUFlLEVBRWYsWUFBWSxFQUNaLDhCQUE4QixFQUM5QiwwQkFBMEIsRUFDMUIsY0FBYyxFQUNkLHVCQUF1QixFQUN2QixhQUFhLEVBQ2IsS0FBSyxFQUNMLG1CQUFtQixFQUNuQixzQkFBc0IsRUFDdkIsTUFBTSwrQ0FBK0MsQ0FBQztBQUV2RCxPQUFPLEVBQUMsc0JBQXNCLEVBQUMsTUFBTSw0QkFBNEIsQ0FBQztBQUNsRSxPQUFPLEVBQ0wsY0FBYyxFQUdkLGtCQUFrQixFQUNsQixRQUFRLEVBQ1IsYUFBYSxFQUFFLGNBQWMsRUFDN0IsYUFBYSxFQUNkLE1BQU0sb0JBQW9CLENBQUM7QUFDNUIsT0FBTyxFQUFDLHNCQUFzQixFQUFDLE1BQU0sNEJBQTRCLENBQUM7QUFDbEUsT0FBTyxFQUFDLFNBQVMsRUFBQyxNQUFNLGlDQUFpQyxDQUFDO0FBQzFELE9BQU8sRUFBQyxvQkFBb0IsRUFBQyxNQUFNLDBCQUEwQixDQUFDO0FBQzlELE9BQU8sRUFBQyxzQkFBc0IsRUFBQyxNQUFNLDRCQUE0QixDQUFDO0FBQ2xFLE9BQU8sRUFBQyxzQkFBc0IsRUFBQyxNQUFNLDRCQUE0QixDQUFDO0FBQ2xFLE9BQU8sRUFBQyx1QkFBdUIsRUFBQyxNQUFNLDZCQUE2QixD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QUMsYUFBYSxJQUFJLE1BQU0sQ0FBQyxNQUFNLENBQUMsYUFBYSxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUM7WUFDaEYsTUFBTSxDQUFDLE1BQU0sQ0FBQyxhQUFhLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxDQUFDLEtBQUssS0FBSyxRQUFRLENBQUM7WUFDbEUsQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLGFBQWE7Z0JBQzFCLE1BQU0sQ0FBQyxNQUFNLENBQUMsYUFBYSxDQUFDLGFBQWE7Z0JBQ3pDLE1BQU0sQ0FBQyxNQUFNLENBQUMsYUFBYSxDQUFDLGFBQWEsQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDO2dCQUM1RCxNQUFNLENBQUMsTUFBTSxDQUFDLGFBQWEsQ0FBQyxhQUFhLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxDQUFDLEtBQUssS0FBSyxRQUFRLENBQUM7WUFDbEYsQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLGFBQWE7Z0JBQzFCLE1BQU0sQ0FBQyxNQUFNLENBQUMsYUFBYSxDQUFDLGFBQWE7Z0JBQ3pDLE1BQU0sQ0FBQyxNQUFNLENBQUMsYUFBYSxDQUFDLGFBQWEsQ0FBQyxhQUFhO2dCQUN2RCxNQUFNLENBQUMsTUFBTSxDQUFDLGFBQWEsQ0FBQyxhQUFhLENBQUMsYUFBYSxDQUFDLGFBQWE7Z0JBQ3JFLE1BQU0sQ0FBQyxNQUFNLENBQUMsYUFBYSxDQUFDLGFBQWEsQ0FBQyxhQUFhLENBQUMsYUFBYSxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUM7Z0JBQ3hGLE1BQU0sQ0FBQyxNQUFNLENBQUMsYUFBYSxDQUFDLGFBQWEsQ0FBQyxhQUFhLENBQUMsYUFBYSxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsQ0FBQyxLQUFLLEtBQUssUUFBUSxDQUFDLEVBQUU7WUFFaEgsT0FBTztTQUNSO1FBQ0QsSUFBSSxDQUFDLGVBQWUsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDbkMsQ0FBQzs7Ozs7SUFFRCx1Q0FBTzs7OztJQUFQLFVBQVEsTUFBYztRQUNwQixJQUFJLGFB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QzNDLDhDQUFtQzs7Ozs7SUFHbkMsaURBQXlDOzs7OztJQUN6Qyw2Q0FBaUM7Ozs7O0lBRWpDLG9EQUErQzs7Ozs7SUFFL0MsK0NBQXFDOzs7OztJQUNyQyx3REFBdUQ7Ozs7O0lBQ3ZELCtEQUE4RDs7Ozs7SUFDOUQsMERBQWlFOzs7OztJQUNqRSw0REFBK0Q7Ozs7O0lBQy9ELHNEQUFtRDs7Ozs7SUFDbkQsZ0RBQXVDOzs7OztJQUV2Qyx3REFBdUQ7Ozs7O0lBQ3ZELG1EQUFtRDs7Ozs7SUFDbkQseURBQXlEOzs7OztJQUN6RCxxREFBaUQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgQ29tcG9uZW50UmVmLCBPbkRlc3Ryb3ksIE9uSW5pdH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge1NpZ25hdHVyZVNlcnZpY2V9IGZyb20gXCIuL3NpZ25hdHVyZS5zZXJ2aWNlXCI7XG5pbXBvcnQge1xuICBGaWxlRGVzY3JpcHRpb24sXG4gIEZpbGVNb2RlbCxcbiAgTW9kYWxTZXJ2aWNlLFxuICBVcGxvYWRGaWxlc1NlcnZpY2UsXG4gIE5hdmlnYXRlU2VydmljZSxcbiAgUGFnZVByZWxvYWRTZXJ2aWNlLFxuICBQYWdlTW9kZWwsXG4gIFpvb21TZXJ2aWNlLFxuICBSZW5kZXJQcmludFNlcnZpY2UsXG4gIEZpbGVVdGlsLFxuICBQYXNzd29yZFNlcnZpY2UsXG4gIEZpbGVDcmVkZW50aWFscyxcbiAgQ29tbW9uTW9kYWxzLFxuICBIb3N0aW5nRHluYW1pY0NvbXBvbmVudFNlcnZpY2UsXG4gIEFkZER5bmFtaWNDb21wb25lbnRTZXJ2aWNlLFxuICBPbkNsb3NlU2VydmljZSxcbiAgRXhjZXB0aW9uTWVzc2FnZVNlcnZpY2UsXG4gIFdpbmRvd1NlcnZpY2UsXG4gIFV0aWxzLFxuICBUYWJBY3RpdmF0b3JTZXJ2aWNlLFxuICBUb3BUYWJBY3RpdmF0b3JTZXJ2aWNlXG59IGZyb20gXCJAZ3JvdXBkb2NzLmV4YW1wbGVzLmFuZ3VsYXIvY29tbW9uLWNvbXBvbmVudHNcIjtcbmltcG9ydCB7U2lnbmF0dXJlQ29uZmlnfSBmcm9tIFwiLi9zaWduYXR1cmUtY29uZmlnXCI7XG5pbXBvcnQge1NpZ25hdHVyZUNvbmZpZ1NlcnZpY2V9IGZyb20gXCIuL3NpZ25hdHVyZS1jb25maWcuc2VydmljZVwiO1xuaW1wb3J0IHtcbiAgQWRkZWRTaWduYXR1cmUsXG4gIENvcHlDaGFuZ2VzLFxuICBDb3B5U2lnbixcbiAgRHJhZ2dhYmxlU2lnbmF0dXJlLFxuICBQb3NpdGlvbiwgUmVtb3ZlU2lnbixcbiAgU2lnbmF0dXJlRGF0YSwgU2lnbmF0dXJlUHJvcHMsXG4gIFNpZ25hdHVyZVR5cGVcbn0gZnJvbSBcIi4vc2lnbmF0dXJlLW1vZGVsc1wiO1xuaW1wb3J0IHtTZWxlY3RTaWduYXR1cmVTZXJ2aWNlfSBmcm9tIFwiLi9zZWxlY3Qtc2lnbmF0dXJlLnNlcnZpY2VcIjtcbmltcG9ydCB7U2lnbmF0dXJlfSBmcm9tIFwiLi9zaWduYXR1cmUvc2lnbmF0dXJlLmNvbXBvbmVudFwiO1xuaW1wb3J0IHtEcmFnU2lnbmF0dXJlU2VydmljZX0gZnJvbSBcIi4vZHJhZy1zaWduYXR1cmUuc2VydmljZVwiO1xuaW1wb3J0IHtSZW1vdmVTaWduYXR1cmVTZXJ2aWNlfSBmcm9tIFwiLi9yZW1vdmUtc2lnbmF0dXJlLnNlcnZpY2VcIjtcbmltcG9ydCB7QWN0aXZlU2lnbmF0dXJlU2VydmljZX0gZnJvbSBcIi4vYWN0aXZlLXNpZ25hdHVyZS5zZXJ2aWNlXCI7XG5pbXBvcnQge1NpZ25hdHVyZXNIb2xkZXJTZXJ2aWNlfSBmcm9tIFwiLi9zaWduYXR1cmVzLWhvbGRlci5zZXJ2aWNlXCI7XG5pbXBvcnQgJ2hhbW1lcmpzJztcbmltcG9ydCB7Q29weVNpZ25hdHVyZVNlcnZpY2V9IGZyb20gXCIuL2NvcHktc2lnbmF0dXJlLnNlcnZpY2VcIjtcbmltcG9ydCAqIGFzIGpxdWVyeSBmcm9tICdqcXVlcnknO1xuXG5jb25zdCAkID0ganF1ZXJ5O1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdnZC1zaWduYXR1cmUnLFxuICB0ZW1wbGF0ZVVybDogJy4vc2lnbmF0dXJlLWFwcC5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL3NpZ25hdHVyZS1hcHAuY29tcG9uZW50Lmxlc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBTaWduYXR1cmVBcHBDb21wb25lbnQgaW1wbGVtZW50cyBPbkRlc3Ryb3ksIE9uSW5pdCB7XG4gIHRpdGxlID0gJ3NpZ25hdHVyZSc7XG4gIGZpbGVzOiBGaWxlTW9kZWxbXSA9IFtdO1xuICBmaWxlOiBGaWxlRGVzY3JpcHRpb247XG4gIHNpZ25hdHVyZUNvbmZpZzogU2lnbmF0dXJlQ29uZmlnO1xuICBjb3VudFBhZ2VzID0gMDtcbiAgZm9ybWF0RGlzYWJsZWQgPSAhdGhpcy5maWxlO1xuICBjcmVkZW50aWFsczogRmlsZUNyZWRlbnRpYWxzO1xuICBicm93c2VGaWxlc01vZGFsID0gQ29tbW9uTW9kYWxzLkJyb3dzZUZpbGVzO1xuICBpc0Rlc2t0b3A6IGJvb2xlYW47XG4gIHNpZ25hdHVyZVR5cGVzID0gW1xuICAgIFNpZ25hdHVyZVR5cGUuVEVYVCxcbiAgICBTaWduYXR1cmVUeXBlLklNQUdFLFxuICAgIFNpZ25hdHVyZVR5cGUuRElHSVRBTCxcbiAgICBTaWduYXR1cmVUeXBlLlFSX0NPREUsXG4gICAgU2lnbmF0dXJlVHlwZS5CQVJfQ09ERSxcbiAgICBTaWduYXR1cmVUeXBlLlNUQU1QLFxuICAgIFNpZ25hdHVyZVR5cGUuSEFORCxcbiAgXTtcbiAgc2lnbmF0dXJlVHlwZUNvZGVzID0gW1xuICAgIFNpZ25hdHVyZVR5cGUuUVJfQ09ERSxcbiAgICBTaWduYXR1cmVUeXBlLkJBUl9DT0RFLFxuICBdO1xuXG4gIHNpZ25hdHVyZUNvbXBvbmVudHMgPSBuZXcgTWFwPG51bWJlciwgQ29tcG9uZW50UmVmPGFueT4+KCk7XG4gIGFjdGl2ZVNpZ25hdHVyZVRhYjogc3RyaW5nO1xuICBpc0xvYWRpbmc6IGJvb2xlYW47XG4gIGZpbGVXYXNEcm9wcGVkID0gZmFsc2U7XG5cbiAgX3pvb20gPSAxMDA7XG4gIF9wYWdlV2lkdGg6IG51bWJlcjtcbiAgX3BhZ2VIZWlnaHQ6IG51bWJlcjtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9zaWduYXR1cmVTZXJ2aWNlOiBTaWduYXR1cmVTZXJ2aWNlLFxuICAgICAgICAgICAgICBwcml2YXRlIF9tb2RhbFNlcnZpY2U6IE1vZGFsU2VydmljZSxcbiAgICAgICAgICAgICAgY29uZmlnU2VydmljZTogU2lnbmF0dXJlQ29uZmlnU2VydmljZSxcbiAgICAgICAgICAgICAgdXBsb2FkRmlsZXNTZXJ2aWNlOiBVcGxvYWRGaWxlc1NlcnZpY2UsXG4gICAgICAgICAgICAgIHByaXZhdGUgX25hdmlnYXRlU2VydmljZTogTmF2aWdhdGVTZXJ2aWNlLFxuICAgICAgICAgICAgICBwcml2YXRlIF96b29tU2VydmljZTogWm9vbVNlcnZpY2UsXG4gICAgICAgICAgICAgIHBhZ2VQcmVsb2FkU2VydmljZTogUGFnZVByZWxvYWRTZXJ2aWNlLFxuICAgICAgICAgICAgICBwcml2YXRlIF9yZW5kZXJQcmludFNlcnZpY2U6IFJlbmRlclByaW50U2VydmljZSxcbiAgICAgICAgICAgICAgcGFzc3dvcmRTZXJ2aWNlOiBQYXNzd29yZFNlcnZpY2UsXG4gICAgICAgICAgICAgIHByaXZhdGUgX3dpbmRvd1NlcnZpY2U6IFdpbmRvd1NlcnZpY2UsXG4gICAgICAgICAgICAgIHByaXZhdGUgX3NlbGVjdFNpZ25hdHVyZVNlcnZpY2U6IFNlbGVjdFNpZ25hdHVyZVNlcnZpY2UsXG4gICAgICAgICAgICAgIHByaXZhdGUgX3NpZ25hdHVyZVRhYkFjdGl2YXRpb25TZXJ2aWNlOiBUb3BUYWJBY3RpdmF0b3JTZXJ2aWNlLFxuICAgICAgICAgICAgICBwcml2YXRlIF9ob3N0aW5nQ29tcG9uZW50c1NlcnZpY2U6IEhvc3RpbmdEeW5hbWljQ29tcG9uZW50U2VydmljZSxcbiAgICAgICAgICAgICAgcHJpdmF0ZSBfYWRkRHluYW1pY0NvbXBvbmVudFNlcnZpY2U6IEFkZER5bmFtaWNDb21wb25lbnRTZXJ2aWNlLFxuICAgICAgICAgICAgICBwcml2YXRlIF9kcmFnU2lnbmF0dXJlU2VydmljZTogRHJhZ1NpZ25hdHVyZVNlcnZpY2UsXG4gICAgICAgICAgICAgIHByaXZhdGUgX29uQ2xvc2VTZXJ2aWNlOiBPbkNsb3NlU2VydmljZSxcbiAgICAgICAgICAgICAgcmVtb3ZlU2lnbmF0dXJlU2VydmljZTogUmVtb3ZlU2lnbmF0dXJlU2VydmljZSxcbiAgICAgICAgICAgICAgcHJpdmF0ZSBfYWN0aXZlU2lnbmF0dXJlU2VydmljZTogQWN0aXZlU2lnbmF0dXJlU2VydmljZSxcbiAgICAgICAgICAgICAgcHJpdmF0ZSBfZXhjTWVzc2FnZVNlcnZpY2U6IEV4Y2VwdGlvbk1lc3NhZ2VTZXJ2aWNlLFxuICAgICAgICAgICAgICBwcml2YXRlIF9zaWduYXR1cmVzSG9sZGVyU2VydmljZTogU2lnbmF0dXJlc0hvbGRlclNlcnZpY2UsXG4gICAgICAgICAgICAgIHByaXZhdGUgX3RhYkFjdGl2YXRvclNlcnZpY2U6IFRhYkFjdGl2YXRvclNlcnZpY2UsXG4gICAgICAgICAgICAgIGNvcHlTaWduYXR1cmVTZXJ2aWNlOiBDb3B5U2lnbmF0dXJlU2VydmljZSkge1xuXG4gICAgdGhpcy5fdGFiQWN0aXZhdG9yU2VydmljZS5hY3RpdmVUYWJDaGFuZ2Uuc3Vic2NyaWJlKCh0YWJJZDogc3RyaW5nKSA9PiB7XG4gICAgICBpZiAodGFiSWQgPT09ICcxJykge1xuICAgICAgICBpZiAodGhpcy5hY3RpdmVTaWduYXR1cmVUYWIpIHtcbiAgICAgICAgICB0aGlzLl9zaWduYXR1cmVUYWJBY3RpdmF0aW9uU2VydmljZS5jaGFuZ2VBY3RpdmVUYWIodGhpcy5hY3RpdmVTaWduYXR1cmVUYWIpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuYWN0aXZlU2lnbmF0dXJlVGFiID0gbnVsbDtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHRoaXMuaXNEZXNrdG9wID0gX3dpbmRvd1NlcnZpY2UuaXNEZXNrdG9wKCk7XG4gICAgX3dpbmRvd1NlcnZpY2Uub25SZXNpemUuc3Vic2NyaWJlKCh3KSA9PiB7XG4gICAgICBpZiAoIV93aW5kb3dTZXJ2aWNlLmlzTW9iaWxlKCkpIHtcbiAgICAgICAgdGhpcy5pc0Rlc2t0b3AgPSBfd2luZG93U2VydmljZS5pc0Rlc2t0b3AoKTtcbiAgICAgICAgaWYgKCF0aGlzLmlzRGVza3RvcCkge1xuICAgICAgICAgIHRoaXMucmVmcmVzaFpvb20oKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pO1xuXG4gICAgY29weVNpZ25hdHVyZVNlcnZpY2UuY29weVNpZ25hdHVyZS5zdWJzY3JpYmUoKGNvcHlTaWduOiBDb3B5U2lnbikgPT4ge1xuICAgICAgY29uc3QgY29tcG9uZW50UmVmID0gdGhpcy5zaWduYXR1cmVDb21wb25lbnRzLmdldChjb3B5U2lnbi5pZCk7XG4gICAgICBpZiAoY29tcG9uZW50UmVmKSB7XG4gICAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgICAgY29uc3QgY29tcCA9ICg8U2lnbmF0dXJlPmNvbXBvbmVudFJlZikuaW5zdGFuY2U7XG4gICAgICAgIGNvbnN0IGNvbXBQYWdlID0gY29tcC5kYXRhLm51bWJlcjtcbiAgICAgICAgY29tcC5iYXNlQ29waWVkID0gdHJ1ZTtcbiAgICAgICAgZm9yIChjb25zdCBwYWdlIG9mIHRoaXMuZmlsZS5wYWdlcykge1xuICAgICAgICAgIGlmIChwYWdlLm51bWJlciAhPT0gY29tcFBhZ2UpIHtcbiAgICAgICAgICAgIGNvbnN0IHNpZ24gPSB0aGlzLmNyZWF0ZURyYWdnYWJsZVNpZ24oY29tcCwgY29weVNpZ24sIHBhZ2UpO1xuICAgICAgICAgICAgY29uc3QgYWRkZWRTaWduYXR1cmUgPSB0aGlzLmNyZWF0ZUFkZGVkU2lnbmF0dXJlKGNvcHlTaWduLCBjb21wLCBwYWdlKTtcbiAgICAgICAgICAgIGNvbnN0IGlkID0gdGhpcy5hZGRTaWduYXR1cmVDb21wb25lbnQoYWRkZWRTaWduYXR1cmUsIHNpZ24sIHBhZ2UsIHRydWUpO1xuICAgICAgICAgICAgdGhpcy5fc2lnbmF0dXJlc0hvbGRlclNlcnZpY2UuYWRkSWQoc2lnbi5ndWlkLCBpZCk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBjb3B5U2lnbmF0dXJlU2VydmljZS5jaGFuZ2VzU2lnbmF0dXJlLnN1YnNjcmliZSgoY29weUNoYW5nZXM6IENvcHlDaGFuZ2VzKSA9PiB7XG4gICAgICBjb25zdCBjb21wb25lbnRSZWYgPSB0aGlzLnNpZ25hdHVyZUNvbXBvbmVudHMuZ2V0KGNvcHlDaGFuZ2VzLmlkKTtcbiAgICAgIGlmIChjb21wb25lbnRSZWYpIHtcbiAgICAgICAgY29uc3QgaWRzID0gdGhpcy5fc2lnbmF0dXJlc0hvbGRlclNlcnZpY2UuZ2V0KGNvcHlDaGFuZ2VzLmd1aWQpO1xuICAgICAgICBmb3IgKGNvbnN0IGlkIG9mIGlkcykge1xuICAgICAgICAgIGNvbnN0IGNvbXBSZWYgPSB0aGlzLnNpZ25hdHVyZUNvbXBvbmVudHMuZ2V0KGlkKTtcbiAgICAgICAgICBpZiAoY29tcFJlZikge1xuICAgICAgICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgICAgICAgY29uc3QgY29tcCA9ICg8U2lnbmF0dXJlPmNvbXBSZWYpLmluc3RhbmNlO1xuICAgICAgICAgICAgaWYgKGNvbXAuaWQgIT09IGNvcHlDaGFuZ2VzLmlkICYmIChjb21wLmNvcGllZCB8fCBjb21wLmJhc2VDb3BpZWQpKSB7XG4gICAgICAgICAgICAgIGNvbXAuZGF0YS53aWR0aCA9IGNvcHlDaGFuZ2VzLndpZHRoO1xuICAgICAgICAgICAgICBjb21wLmRhdGEuaGVpZ2h0ID0gY29weUNoYW5nZXMuaGVpZ2h0O1xuICAgICAgICAgICAgICBjb21wLmRhdGEucG9zaXRpb24gPSBjb3B5Q2hhbmdlcy5wb3NpdGlvbjtcbiAgICAgICAgICAgICAgY29tcC5kYXRhLnByb3BzID0gY29weUNoYW5nZXMucHJvcHM7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICByZW1vdmVTaWduYXR1cmVTZXJ2aWNlLnJlbW92ZVNpZ25hdHVyZS5zdWJzY3JpYmUoKGRlbDogUmVtb3ZlU2lnbikgPT4ge1xuICAgICAgY29uc3QgaWRzID0gdGhpcy5fc2lnbmF0dXJlc0hvbGRlclNlcnZpY2UuZ2V0KGRlbC5ndWlkKTtcbiAgICAgIGZvciAoY29uc3QgaWQgb2YgaWRzKSB7XG4gICAgICAgIGlmIChkZWwudHlwZSA9PT0gU2lnbmF0dXJlVHlwZS5ESUdJVEFMLmlkIHx8IGRlbC5pZCA9PT0gaWQpIHtcbiAgICAgICAgICBjb25zdCBjb21wb25lbnRSZWYgPSB0aGlzLnNpZ25hdHVyZUNvbXBvbmVudHMuZ2V0KGlkKTtcbiAgICAgICAgICBpZiAoY29tcG9uZW50UmVmKSB7XG4gICAgICAgICAgICBjb21wb25lbnRSZWYuZGVzdHJveSgpO1xuICAgICAgICAgIH1cbiAgICAgICAgICB0aGlzLnNpZ25hdHVyZUNvbXBvbmVudHMuZGVsZXRlKGlkKTtcbiAgICAgICAgICB0aGlzLl9zaWduYXR1cmVzSG9sZGVyU2VydmljZS5yZW1vdmUoZGVsLmd1aWQsIGlkKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pO1xuXG4gICAgY29uZmlnU2VydmljZS51cGRhdGVkQ29uZmlnLnN1YnNjcmliZSgoc2lnbmF0dXJlQ29uZmlnKSA9PiB7XG4gICAgICB0aGlzLnNpZ25hdHVyZUNvbmZpZyA9IHNpZ25hdHVyZUNvbmZpZztcbiAgICB9KTtcblxuICAgIHVwbG9hZEZpbGVzU2VydmljZS51cGxvYWRzQ2hhbmdlLnN1YnNjcmliZSgodXBsb2FkcykgPT4ge1xuICAgICAgaWYgKHVwbG9hZHMpIHtcbiAgICAgICAgbGV0IGk6IG51bWJlcjtcbiAgICAgICAgZm9yIChpID0gMDsgaSA8IHVwbG9hZHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICB0aGlzLl9zaWduYXR1cmVTZXJ2aWNlLnVwbG9hZCh1cGxvYWRzLml0ZW0oaSksICcnLCB0aGlzLnJld3JpdGVDb25maWcsIG51bGwpLnN1YnNjcmliZSgob2JqOiBGaWxlQ3JlZGVudGlhbHMpID0+IHtcbiAgICAgICAgICAgIHRoaXMuZmlsZVdhc0Ryb3BwZWQgPyB0aGlzLnNlbGVjdEZpbGUob2JqLmd1aWQsICcnLCAnJykgOiB0aGlzLnNlbGVjdERpcignJyk7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHBhZ2VQcmVsb2FkU2VydmljZS5jaGVja1ByZWxvYWQuc3Vic2NyaWJlKChwYWdlOiBudW1iZXIpID0+IHtcbiAgICAgIGlmICh0aGlzLnByZWxvYWRQYWdlQ291bnRDb25maWcgIT09IDApIHtcbiAgICAgICAgZm9yIChsZXQgaSA9IHBhZ2U7IGkgPCBwYWdlICsgMjsgaSsrKSB7XG4gICAgICAgICAgaWYgKGkgPiAwICYmIGkgPD0gdGhpcy5jb3VudFBhZ2VzICYmICF0aGlzLmZpbGUucGFnZXNbaSAtIDFdLmRhdGEpIHtcbiAgICAgICAgICAgIHRoaXMucHJlbG9hZFBhZ2VzKGksIGkpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pO1xuXG4gICAgcGFzc3dvcmRTZXJ2aWNlLnBhc3NDaGFuZ2Uuc3Vic2NyaWJlKChwYXNzOiBzdHJpbmcpID0+IHtcbiAgICAgIHRoaXMuc2VsZWN0RmlsZSh0aGlzLmNyZWRlbnRpYWxzLmd1aWQsIHBhc3MsIENvbW1vbk1vZGFscy5QYXNzd29yZFJlcXVpcmVkKTtcbiAgICB9KTtcblxuICAgIF9zZWxlY3RTaWduYXR1cmVTZXJ2aWNlLnNlbGVjdFNpZ25hdHVyZS5zdWJzY3JpYmUoKHNpZ246IERyYWdnYWJsZVNpZ25hdHVyZSkgPT4ge1xuICAgICAgdGhpcy5zZWxlY3RTaWduYXR1cmUoc2lnbik7XG4gICAgfSk7XG5cbiAgICB0aGlzLmlzRGVza3RvcCA9IF93aW5kb3dTZXJ2aWNlLmlzRGVza3RvcCgpO1xuICAgIF93aW5kb3dTZXJ2aWNlLm9uUmVzaXplLnN1YnNjcmliZSgodykgPT4ge1xuICAgICAgdGhpcy5pc0Rlc2t0b3AgPSBfd2luZG93U2VydmljZS5pc0Rlc2t0b3AoKTtcbiAgICB9KTtcbiAgfVxuXG4gIHByaXZhdGUgY3JlYXRlRHJhZ2dhYmxlU2lnbihjb21wLCBjb3B5U2lnbjogQ29weVNpZ24sIHBhZ2UpIHtcbiAgICBjb25zdCBzaWduID0gbmV3IERyYWdnYWJsZVNpZ25hdHVyZSgpO1xuICAgIHNpZ24udHlwZSA9IGNvbXAudHlwZTtcbiAgICBzaWduLmd1aWQgPSBjb3B5U2lnbi5ndWlkO1xuICAgIHNpZ24ucG9zaXRpb24gPSBjb21wLnBvc2l0aW9uO1xuICAgIHNpZ24ucGFnZU51bWJlciA9IHBhZ2UubnVtYmVyO1xuICAgIHJldHVybiBzaWduO1xuICB9XG5cbiAgcHJpdmF0ZSBjcmVhdGVBZGRlZFNpZ25hdHVyZShjb3B5U2lnbjogQ29weVNpZ24sIGNvbXAsIHBhZ2UpIHtcbiAgICBjb25zdCBhZGRlZFNpZ25hdHVyZSA9IG5ldyBBZGRlZFNpZ25hdHVyZSgpO1xuICAgIGFkZGVkU2lnbmF0dXJlLmd1aWQgPSBjb3B5U2lnbi5ndWlkO1xuICAgIGFkZGVkU2lnbmF0dXJlLmRhdGEgPSBjb21wLmRhdGEuZGF0YTtcbiAgICBpZiAoY29tcC5kYXRhLnByb3BzKSB7XG4gICAgICBhZGRlZFNpZ25hdHVyZS5wcm9wcyA9IGNvbXAuZGF0YS5wcm9wcztcbiAgICB9XG4gICAgYWRkZWRTaWduYXR1cmUud2lkdGggPSBjb21wLmRhdGEud2lkdGg7XG4gICAgYWRkZWRTaWduYXR1cmUuaGVpZ2h0ID0gY29tcC5kYXRhLmhlaWdodDtcbiAgICBhZGRlZFNpZ25hdHVyZS5udW1iZXIgPSBwYWdlLm51bWJlcjtcbiAgICByZXR1cm4gYWRkZWRTaWduYXR1cmU7XG4gIH1cblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5kZWZhdWx0RG9jdW1lbnRDb25maWcoKSkge1xuICAgICAgdGhpcy5pc0xvYWRpbmcgPSB0cnVlO1xuICAgICAgdGhpcy5zZWxlY3RGaWxlKHRoaXMuZGVmYXVsdERvY3VtZW50Q29uZmlnKCksIFwiXCIsIFwiXCIpO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgcHRUb1B4KHB0OiBudW1iZXIpIHtcbiAgICAvL3B0ICogOTYgLyA3MiA9IHB4LlxuICAgIHJldHVybiBwdCAqIDk2IC8gNzI7XG4gIH1cblxuICBwcml2YXRlIGdldEZpdFRvV2lkdGgoKSB7XG4gICAgLy8gSW1hZ2VzIGFuZCBFeGNlbC1yZWxhdGVkIGZpbGVzIHJlY2VpdmluZyBkaW1lbnNpb25zIGluIHB4IGZyb20gc2VydmVyXG4gICAgY29uc3QgcGFnZVdpZHRoID0gdGhpcy5wdFRvUHgodGhpcy5fcGFnZVdpZHRoKTtcbiAgICBjb25zdCBwYWdlSGVpZ2h0ID0gdGhpcy5wdFRvUHgodGhpcy5fcGFnZUhlaWdodCk7XG4gICAgY29uc3Qgb2Zmc2V0V2lkdGggPSBwYWdlV2lkdGggPyBwYWdlV2lkdGggOiB3aW5kb3cuaW5uZXJXaWR0aDtcblxuICAgIHJldHVybiAocGFnZUhlaWdodCA+IHBhZ2VXaWR0aCAmJiBNYXRoLnJvdW5kKG9mZnNldFdpZHRoIC8gd2luZG93LmlubmVyV2lkdGgpIDwgMikgPyAyMDAgLSBNYXRoLnJvdW5kKG9mZnNldFdpZHRoICogMTAwIC8gd2luZG93LmlubmVyV2lkdGgpIDogTWF0aC5yb3VuZCh3aW5kb3cuaW5uZXJXaWR0aCAqIDEwMCAvIG9mZnNldFdpZHRoKTtcbiAgfVxuXG4gIHNldCB6b29tKHpvb20pIHtcbiAgICB0aGlzLl96b29tID0gem9vbTtcbiAgICB0aGlzLl96b29tU2VydmljZS5jaGFuZ2Vab29tKHRoaXMuX3pvb20pO1xuICB9XG5cbiAgZ2V0IHpvb20oKSB7XG4gICAgcmV0dXJuIHRoaXMuX3pvb207XG4gIH1cblxuICBwcml2YXRlIHJlZnJlc2hab29tKCkge1xuICAgIHRoaXMuem9vbSA9IHRoaXMuX3dpbmRvd1NlcnZpY2UuaXNEZXNrdG9wKCkgPyAxMDAgOiB0aGlzLmdldEZpdFRvV2lkdGgoKTtcbiAgfVxuXG4gIHpvb21JbigpIHtcbiAgICBpZiAodGhpcy5mb3JtYXREaXNhYmxlZClcbiAgICAgIHJldHVybjtcbiAgICBpZiAodGhpcy5fem9vbSA8IDQ5MCkge1xuICAgICAgdGhpcy56b29tID0gdGhpcy5fem9vbSArIDEwO1xuICAgIH1cbiAgfVxuXG4gIHpvb21PdXQoKSB7XG4gICAgaWYgKHRoaXMuZm9ybWF0RGlzYWJsZWQpXG4gICAgICByZXR1cm47XG4gICAgaWYgKHRoaXMuX3pvb20gPiAzMCkge1xuICAgICAgdGhpcy56b29tID0gdGhpcy5fem9vbSAtIDEwO1xuICAgIH1cbiAgfVxuXG4gIGdldCByZXdyaXRlQ29uZmlnKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLnNpZ25hdHVyZUNvbmZpZyA/IHRoaXMuc2lnbmF0dXJlQ29uZmlnLnJld3JpdGUgOiB0cnVlO1xuICB9XG5cbiAgZ2V0IHpvb21Db25maWcoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuc2lnbmF0dXJlQ29uZmlnID8gdGhpcy5zaWduYXR1cmVDb25maWcuem9vbSA6IHRydWU7XG4gIH1cblxuICBnZXQgcGFnZVNlbGVjdG9yQ29uZmlnKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLnNpZ25hdHVyZUNvbmZpZyA/IHRoaXMuc2lnbmF0dXJlQ29uZmlnLnBhZ2VTZWxlY3RvciA6IHRydWU7XG4gIH1cblxuICBnZXQgcHJlbG9hZFBhZ2VDb3VudENvbmZpZygpOiBudW1iZXIge1xuICAgIHJldHVybiB0aGlzLnNpZ25hdHVyZUNvbmZpZyA/IHRoaXMuc2lnbmF0dXJlQ29uZmlnLnByZWxvYWRQYWdlQ291bnQgOiAwO1xuICB9XG5cbiAgZ2V0IGRvd25sb2FkQ29uZmlnKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLnNpZ25hdHVyZUNvbmZpZyA/IHRoaXMuc2lnbmF0dXJlQ29uZmlnLmRvd25sb2FkIDogdHJ1ZTtcbiAgfVxuXG4gIGdldCBkb3dubG9hZE9yaWdpbmFsQ29uZmlnKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLnNpZ25hdHVyZUNvbmZpZyA/IHRoaXMuc2lnbmF0dXJlQ29uZmlnLmRvd25sb2FkT3JpZ2luYWwgOiB0cnVlO1xuICB9XG5cbiAgZ2V0IGRvd25sb2FkU2luZ2VkQ29uZmlnKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLnNpZ25hdHVyZUNvbmZpZyA/IHRoaXMuc2lnbmF0dXJlQ29uZmlnLmRvd25sb2FkU2lnbmVkIDogdHJ1ZTtcbiAgfVxuXG4gIGdldCB1cGxvYWRDb25maWcoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuc2lnbmF0dXJlQ29uZmlnID8gdGhpcy5zaWduYXR1cmVDb25maWcudXBsb2FkIDogdHJ1ZTtcbiAgfVxuXG4gIHByaXZhdGUgZGVmYXVsdERvY3VtZW50Q29uZmlnKCkge1xuICAgIHJldHVybiB0aGlzLnNpZ25hdHVyZUNvbmZpZyA/IHRoaXMuc2lnbmF0dXJlQ29uZmlnLmRlZmF1bHREb2N1bWVudCA6IFwiXCI7XG4gIH1cblxuICBnZXQgcHJpbnRDb25maWcoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuc2lnbmF0dXJlQ29uZmlnID8gdGhpcy5zaWduYXR1cmVDb25maWcucHJpbnQgOiB0cnVlO1xuICB9XG5cbiAgZ2V0IGJyb3dzZUNvbmZpZygpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5zaWduYXR1cmVDb25maWcgPyB0aGlzLnNpZ25hdHVyZUNvbmZpZy5icm93c2UgOiB0cnVlO1xuICB9XG5cbiAgZ2V0IGh0bWxNb2RlQ29uZmlnKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIGdldCBlbmFibGVSaWdodENsaWNrQ29uZmlnKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLnNpZ25hdHVyZUNvbmZpZyA/IHRoaXMuc2lnbmF0dXJlQ29uZmlnLmVuYWJsZVJpZ2h0Q2xpY2sgOiB0cnVlO1xuICB9XG5cbiAgZ2V0IHRleHRTaWduYXR1cmVDb25maWcoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuc2lnbmF0dXJlQ29uZmlnID8gdGhpcy5zaWduYXR1cmVDb25maWcudGV4dFNpZ25hdHVyZSA6IHRydWU7XG4gIH1cblxuICBnZXQgaW1hZ2VTaWduYXR1cmVDb25maWcoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuc2lnbmF0dXJlQ29uZmlnID8gdGhpcy5zaWduYXR1cmVDb25maWcuaW1hZ2VTaWduYXR1cmUgOiB0cnVlO1xuICB9XG5cbiAgZ2V0IGRpZ2l0YWxTaWduYXR1cmVDb25maWcoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuc2lnbmF0dXJlQ29uZmlnID8gdGhpcy5zaWduYXR1cmVDb25maWcuZGlnaXRhbFNpZ25hdHVyZSA6IHRydWU7XG4gIH1cblxuICBnZXQgcXJDb2RlU2lnbmF0dXJlQ29uZmlnKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLnNpZ25hdHVyZUNvbmZpZyA/IHRoaXMuc2lnbmF0dXJlQ29uZmlnLnFyQ29kZVNpZ25hdHVyZSA6IHRydWU7XG4gIH1cblxuICBnZXQgYmFyQ29kZVNpZ25hdHVyZUNvbmZpZygpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5zaWduYXR1cmVDb25maWcgPyB0aGlzLnNpZ25hdHVyZUNvbmZpZy5iYXJDb2RlU2lnbmF0dXJlIDogdHJ1ZTtcbiAgfVxuXG4gIGdldCBzdGFtcFNpZ25hdHVyZUNvbmZpZygpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5zaWduYXR1cmVDb25maWcgPyB0aGlzLnNpZ25hdHVyZUNvbmZpZy5zdGFtcFNpZ25hdHVyZSA6IHRydWU7XG4gIH1cblxuICBnZXQgaGFuZFNpZ25hdHVyZUNvbmZpZygpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5zaWduYXR1cmVDb25maWcgPyB0aGlzLnNpZ25hdHVyZUNvbmZpZy5oYW5kU2lnbmF0dXJlIDogdHJ1ZTtcbiAgfVxuXG4gIGdldCBjdXJyZW50UGFnZSgpOiBudW1iZXIge1xuICAgIHJldHVybiB0aGlzLl9uYXZpZ2F0ZVNlcnZpY2UuY3VycmVudFBhZ2U7XG4gIH1cblxuICBvcGVuTW9kYWwoaWQ6IHN0cmluZykge1xuICAgIHRoaXMuX21vZGFsU2VydmljZS5vcGVuKGlkKTtcbiAgfVxuXG4gIGNsb3NlTW9kYWwoaWQ6IHN0cmluZykge1xuICAgIHRoaXMuX21vZGFsU2VydmljZS5jbG9zZShpZCk7XG4gIH1cblxuICBzZWxlY3REaXIoJGV2ZW50OiBzdHJpbmcpIHtcbiAgICB0aGlzLl9zaWduYXR1cmVTZXJ2aWNlLmxvYWRGaWxlcygkZXZlbnQpLnN1YnNjcmliZSgoZmlsZXM6IEZpbGVNb2RlbFtdKSA9PiB0aGlzLmZpbGVzID0gZmlsZXMgfHwgW10pO1xuICB9XG5cbiAgc2VsZWN0RmlsZSgkZXZlbnQ6IHN0cmluZywgcGFzc3dvcmQ6IHN0cmluZywgbW9kYWxJZDogc3RyaW5nKSB7XG4gICAgdGhpcy5jcmVkZW50aWFscyA9IHtndWlkOiAkZXZlbnQsIHBhc3N3b3JkOiBwYXNzd29yZH07XG4gICAgdGhpcy5maWxlID0gbnVsbDtcbiAgICB0aGlzLl9zaWduYXR1cmVTZXJ2aWNlLmxvYWRGaWxlKHRoaXMuY3JlZGVudGlhbHMpLnN1YnNjcmliZSgoZmlsZTogRmlsZURlc2NyaXB0aW9uKSA9PiB7XG4gICAgICAgIHRoaXMuZmlsZSA9IGZpbGU7XG4gICAgICAgIHRoaXMuZm9ybWF0RGlzYWJsZWQgPSAhdGhpcy5maWxlO1xuICAgICAgICBpZiAoZmlsZSkge1xuICAgICAgICAgIGlmICghdGhpcy5pc0Rlc2t0b3AgJiYgZmlsZS5wYWdlcyAmJiBmaWxlLnBhZ2VzWzBdKSB7XG4gICAgICAgICAgICB0aGlzLl9wYWdlSGVpZ2h0ID0gZmlsZS5wYWdlc1swXS5oZWlnaHQ7XG4gICAgICAgICAgICB0aGlzLl9wYWdlV2lkdGggPSBmaWxlLnBhZ2VzWzBdLndpZHRoO1xuICAgICAgICAgICAgdGhpcy5yZWZyZXNoWm9vbSgpO1xuICAgICAgICAgIH1cbiAgICAgICAgICBjb25zdCBwcmVsb2FkUGFnZUNvdW50ID0gdGhpcy5wcmVsb2FkUGFnZUNvdW50Q29uZmlnO1xuICAgICAgICAgIGNvbnN0IGNvdW50UGFnZXMgPSBmaWxlLnBhZ2VzID8gZmlsZS5wYWdlcy5sZW5ndGggOiAwO1xuICAgICAgICAgIGlmIChwcmVsb2FkUGFnZUNvdW50ID4gMCkge1xuICAgICAgICAgICAgdGhpcy5wcmVsb2FkUGFnZXMoMSwgcHJlbG9hZFBhZ2VDb3VudCA+IGNvdW50UGFnZXMgPyBjb3VudFBhZ2VzIDogcHJlbG9hZFBhZ2VDb3VudCk7XG4gICAgICAgICAgfVxuICAgICAgICAgIHRoaXMuX25hdmlnYXRlU2VydmljZS5jb3VudFBhZ2VzID0gY291bnRQYWdlcztcbiAgICAgICAgICB0aGlzLl9uYXZpZ2F0ZVNlcnZpY2UuY3VycmVudFBhZ2UgPSAxO1xuICAgICAgICAgIHRoaXMuY291bnRQYWdlcyA9IGNvdW50UGFnZXM7XG4gICAgICAgICAgdGhpcy5jbGVhblNpZ25hdHVyZXMoKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICk7XG4gICAgaWYgKG1vZGFsSWQpIHtcbiAgICAgIHRoaXMuX21vZGFsU2VydmljZS5jbG9zZShtb2RhbElkKTtcbiAgICB9XG4gICAgdGhpcy5jbGVhckRhdGEoKTtcbiAgfVxuXG4gIHByZWxvYWRQYWdlcyhzdGFydDogbnVtYmVyLCBlbmQ6IG51bWJlcikge1xuICAgIGZvciAobGV0IGkgPSBzdGFydDsgaSA8PSBlbmQ7IGkrKykge1xuICAgICAgdGhpcy5fc2lnbmF0dXJlU2VydmljZS5sb2FkUGFnZSh0aGlzLmNyZWRlbnRpYWxzLCBpKS5zdWJzY3JpYmUoKHBhZ2U6IFBhZ2VNb2RlbCkgPT4ge1xuICAgICAgICB0aGlzLmZpbGUucGFnZXNbaSAtIDFdID0gcGFnZTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIHVwbG9hZCgkZXZlbnQ6IHN0cmluZykge1xuICAgIHRoaXMuX3NpZ25hdHVyZVNlcnZpY2UudXBsb2FkKG51bGwsICRldmVudCwgdGhpcy5yZXdyaXRlQ29uZmlnLCBudWxsKS5zdWJzY3JpYmUoKCkgPT4ge1xuICAgICAgdGhpcy5zZWxlY3REaXIoJycpO1xuICAgIH0pO1xuICB9XG5cbiAgZG93bmxvYWRGaWxlKCkge1xuICAgIGlmICh0aGlzLmZvcm1hdERpc2FibGVkKVxuICAgICAgcmV0dXJuO1xuICAgIHdpbmRvdy5sb2NhdGlvbi5hc3NpZ24odGhpcy5fc2lnbmF0dXJlU2VydmljZS5nZXREb3dubG9hZFVybCh0aGlzLmNyZWRlbnRpYWxzKSk7XG4gIH1cblxuICBwcml2YXRlIGNsZWFyRGF0YSgpIHtcbiAgICBpZiAoIXRoaXMuZmlsZSB8fCAhdGhpcy5maWxlLnBhZ2VzKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGZvciAoY29uc3QgcGFnZSBvZiB0aGlzLmZpbGUucGFnZXMpIHtcbiAgICAgIHBhZ2UuZGF0YSA9IG51bGw7XG4gICAgfVxuICB9XG5cbiAgb25SaWdodENsaWNrKCRldmVudDogTW91c2VFdmVudCkge1xuICAgIHJldHVybiB0aGlzLmVuYWJsZVJpZ2h0Q2xpY2tDb25maWc7XG4gIH1cblxuICBnZXRTaWduYXR1cmVUeXBlQ29uZmlnKGlkOiBzdHJpbmcpIHtcbiAgICBzd2l0Y2ggKGlkKSB7XG4gICAgICBjYXNlIFNpZ25hdHVyZVR5cGUuVEVYVC5pZDpcbiAgICAgICAgcmV0dXJuIHRoaXMudGV4dFNpZ25hdHVyZUNvbmZpZztcbiAgICAgIGNhc2UgU2lnbmF0dXJlVHlwZS5JTUFHRS5pZDpcbiAgICAgICAgcmV0dXJuIHRoaXMuaW1hZ2VTaWduYXR1cmVDb25maWc7XG4gICAgICBjYXNlIFNpZ25hdHVyZVR5cGUuRElHSVRBTC5pZDpcbiAgICAgICAgcmV0dXJuIHRoaXMuZGlnaXRhbFNpZ25hdHVyZUNvbmZpZztcbiAgICAgIGNhc2UgU2lnbmF0dXJlVHlwZS5RUl9DT0RFLmlkOlxuICAgICAgICByZXR1cm4gdGhpcy5xckNvZGVTaWduYXR1cmVDb25maWc7XG4gICAgICBjYXNlIFNpZ25hdHVyZVR5cGUuQkFSX0NPREUuaWQ6XG4gICAgICAgIHJldHVybiB0aGlzLmJhckNvZGVTaWduYXR1cmVDb25maWc7XG4gICAgICBjYXNlIFNpZ25hdHVyZVR5cGUuU1RBTVAuaWQ6XG4gICAgICAgIHJldHVybiB0aGlzLnN0YW1wU2lnbmF0dXJlQ29uZmlnO1xuICAgICAgY2FzZSBTaWduYXR1cmVUeXBlLkhBTkQuaWQ6XG4gICAgICAgIHJldHVybiB0aGlzLmhhbmRTaWduYXR1cmVDb25maWc7XG4gICAgfVxuICB9XG5cbiAgZHJhZ092ZXIoJGV2ZW50OiBEcmFnRXZlbnQpIHtcbiAgICAkZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAkZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gIH1cblxuICBkcm9wU2lnbmF0dXJlKCRldmVudDogRHJhZ0V2ZW50KSB7XG4gICAgJGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgJGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgIGNvbnN0IHBvc2l0aW9uID0gVXRpbHMuZ2V0TW91c2VQb3NpdGlvbigkZXZlbnQpO1xuXG4gICAgY29uc3QgY3VycmVudFBhZ2UgPSBkb2N1bWVudC5lbGVtZW50RnJvbVBvaW50KHBvc2l0aW9uLngsIHBvc2l0aW9uLnkpO1xuICAgIGlmIChjdXJyZW50UGFnZSAmJiAkKGN1cnJlbnRQYWdlKS5wYXJlbnQoKS5wYXJlbnQoKSAmJiAkKGN1cnJlbnRQYWdlKS5wYXJlbnQoKS5wYXJlbnQoKS5wYXJlbnQoKS5oYXNDbGFzcyhcInBhZ2VcIikpIHtcbiAgICAgIGNvbnN0IGRvY3VtZW50UGFnZSA9ICQoY3VycmVudFBhZ2UpLnBhcmVudCgpLnBhcmVudCgpWzBdO1xuICAgICAgY29uc3QgbGVmdCA9IChwb3NpdGlvbi54IC0gJChkb2N1bWVudFBhZ2UpLm9mZnNldCgpLmxlZnQpLyh0aGlzLnpvb20vMTAwKTtcbiAgICAgIGNvbnN0IHRvcCA9IChwb3NpdGlvbi55IC0gJChkb2N1bWVudFBhZ2UpLm9mZnNldCgpLnRvcCkvKHRoaXMuem9vbS8xMDApO1xuICAgICAgY29uc3QgY3VycmVudFBvc2l0aW9uID0gbmV3IFBvc2l0aW9uKGxlZnQsIHRvcCk7XG4gICAgICBjb25zdCBzaWduID0gdGhpcy5fZHJhZ1NpZ25hdHVyZVNlcnZpY2Uuc2lnbjtcbiAgICAgIGlmIChzaWduKSB7XG4gICAgICAgIGNvbnN0IGlkID0gJChjdXJyZW50UGFnZSkucGFyZW50KCkuYXR0cignaWQnKTtcbiAgICAgICAgaWYgKGlkKSB7XG4gICAgICAgICAgY29uc3Qgc3BsaXQgPSBpZC5zcGxpdCgnLScpO1xuICAgICAgICAgIHNpZ24ucGFnZU51bWJlciA9IHNwbGl0Lmxlbmd0aCA9PT0gMiA/IHBhcnNlSW50KHNwbGl0WzFdLCAxMCkgOiBzaWduLnBhZ2VOdW1iZXI7XG4gICAgICAgIH1cbiAgICAgICAgc2lnbi5wb3NpdGlvbiA9IGN1cnJlbnRQb3NpdGlvbjtcbiAgICAgICAgdGhpcy5zZWxlY3RTaWduYXR1cmUoc2lnbik7XG4gICAgICAgIHRoaXMuX2RyYWdTaWduYXR1cmVTZXJ2aWNlLnNpZ24gPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgc2VsZWN0U2lnbmF0dXJlKHNpZ246IERyYWdnYWJsZVNpZ25hdHVyZSkge1xuICAgIGlmIChzaWduLnR5cGUgPT09IFNpZ25hdHVyZVR5cGUuRElHSVRBTC5pZCkge1xuICAgICAgY29uc3QgYWRkZWRTaWduYXR1cmUgPSBuZXcgQWRkZWRTaWduYXR1cmUoKTtcbiAgICAgIGFkZGVkU2lnbmF0dXJlLmRpZ2l0YWxQcm9wcyA9IHNpZ24uZGlnaXRhbFByb3BzO1xuICAgICAgYWRkZWRTaWduYXR1cmUuZ3VpZCA9IHNpZ24uZ3VpZDtcbiAgICAgIGFkZGVkU2lnbmF0dXJlLm51bWJlciA9IHNpZ24ucGFnZU51bWJlcjtcbiAgICAgIGZvciAoY29uc3QgcGFnZSBvZiB0aGlzLmZpbGUucGFnZXMpIHtcbiAgICAgICAgY29uc3QgaWQgPSB0aGlzLmFkZFNpZ25hdHVyZUNvbXBvbmVudChhZGRlZFNpZ25hdHVyZSwgc2lnbiwgcGFnZSk7XG4gICAgICAgIHRoaXMuX3NpZ25hdHVyZXNIb2xkZXJTZXJ2aWNlLmFkZElkKHNpZ24uZ3VpZCwgaWQpO1xuICAgICAgfVxuICAgICAgdGhpcy5jbG9zZVRhYihzaWduLnR5cGUpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLl9zaWduYXR1cmVTZXJ2aWNlLmxvYWRTaWduYXR1cmVJbWFnZShzaWduKS5zdWJzY3JpYmUoKHNpZ25hdHVyZTogQWRkZWRTaWduYXR1cmUpID0+IHtcbiAgICAgICAgc2lnbmF0dXJlLm51bWJlciA9IHNpZ24ucGFnZU51bWJlcjtcbiAgICAgICAgY29uc3QgcGFnZU1vZGVsID0gdGhpcy5maWxlLnBhZ2VzLmZpbmQoZnVuY3Rpb24gKHApIHtcbiAgICAgICAgICByZXR1cm4gcC5udW1iZXIgPT09IHNpZ24ucGFnZU51bWJlcjtcbiAgICAgICAgfSk7XG4gICAgICAgIGNvbnN0IGlkID0gdGhpcy5hZGRTaWduYXR1cmVDb21wb25lbnQoc2lnbmF0dXJlLCBzaWduLCBwYWdlTW9kZWwpO1xuICAgICAgICB0aGlzLl9zaWduYXR1cmVzSG9sZGVyU2VydmljZS5hZGRJZChzaWduLmd1aWQsIGlkKTtcbiAgICAgICAgdGhpcy5jbG9zZVRhYihzaWduLnR5cGUpO1xuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBhZGRTaWduYXR1cmVDb21wb25lbnQoYWRkZWRTaWduYXR1cmU6IEFkZGVkU2lnbmF0dXJlLCBzaWduOiBEcmFnZ2FibGVTaWduYXR1cmUsIHBhZ2U6IFBhZ2VNb2RlbCwgY29waWVkOiBib29sZWFuID0gZmFsc2UpIHtcbiAgICBjb25zdCBkeW5hbWljRGlyZWN0aXZlID0gdGhpcy5faG9zdGluZ0NvbXBvbmVudHNTZXJ2aWNlLmZpbmQocGFnZS5udW1iZXIpO1xuICAgIGlmIChkeW5hbWljRGlyZWN0aXZlKSB7XG4gICAgICBjb25zdCB2aWV3Q29udGFpbmVyUmVmID0gZHluYW1pY0RpcmVjdGl2ZS52aWV3Q29udGFpbmVyUmVmO1xuICAgICAgY29uc3Qgc2VsZWN0U2lnbmF0dXJlID0gdGhpcy5fYWRkRHluYW1pY0NvbXBvbmVudFNlcnZpY2UuYWRkRHluYW1pY0NvbXBvbmVudCh2aWV3Q29udGFpbmVyUmVmLCBTaWduYXR1cmUpO1xuICAgICAgY29uc3QgaWQgPSB0aGlzLmdldE5leHRJZCgpO1xuICAgICAgd2hpbGUgKGFkZGVkU2lnbmF0dXJlLndpZHRoID49IHBhZ2Uud2lkdGggfHwgYWRkZWRTaWduYXR1cmUuaGVpZ2h0ID49IHBhZ2UuaGVpZ2h0KSB7XG4gICAgICAgIGFkZGVkU2lnbmF0dXJlLndpZHRoID0gYWRkZWRTaWduYXR1cmUud2lkdGggLyAyO1xuICAgICAgICBhZGRlZFNpZ25hdHVyZS5oZWlnaHQgPSBhZGRlZFNpZ25hdHVyZS5oZWlnaHQgLyAyO1xuICAgICAgfVxuICAgICAgKDxTaWduYXR1cmU+c2VsZWN0U2lnbmF0dXJlLmluc3RhbmNlKS5pZCA9IGlkO1xuICAgICAgKDxTaWduYXR1cmU+c2VsZWN0U2lnbmF0dXJlLmluc3RhbmNlKS5jb3BpZWQgPSBjb3BpZWQ7XG4gICAgICAoPFNpZ25hdHVyZT5zZWxlY3RTaWduYXR1cmUuaW5zdGFuY2UpLmRhdGEgPSBhZGRlZFNpZ25hdHVyZTtcbiAgICAgICg8U2lnbmF0dXJlPnNlbGVjdFNpZ25hdHVyZS5pbnN0YW5jZSkucG9zaXRpb24gPSBzaWduLnBvc2l0aW9uO1xuICAgICAgKDxTaWduYXR1cmU+c2VsZWN0U2lnbmF0dXJlLmluc3RhbmNlKS50eXBlID0gc2lnbi50eXBlO1xuICAgICAgKDxTaWduYXR1cmU+c2VsZWN0U2lnbmF0dXJlLmluc3RhbmNlKS5wYWdlV2lkdGggPSBwYWdlLndpZHRoO1xuICAgICAgKDxTaWduYXR1cmU+c2VsZWN0U2lnbmF0dXJlLmluc3RhbmNlKS5wYWdlSGVpZ2h0ID0gcGFnZS5oZWlnaHQ7XG4gICAgICB0aGlzLnNpZ25hdHVyZUNvbXBvbmVudHMuc2V0KGlkLCBzZWxlY3RTaWduYXR1cmUpO1xuICAgICAgdGhpcy5fYWN0aXZlU2lnbmF0dXJlU2VydmljZS5jaGFuZ2VBY3RpdmUoaWQpO1xuICAgICAgcmV0dXJuIGlkO1xuICAgIH1cbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIHByaXZhdGUgZ2V0TmV4dElkKCkge1xuICAgIGxldCBtYXhJZCA9IDA7XG4gICAgZm9yIChjb25zdCBhbm5JZCBvZiB0aGlzLnNpZ25hdHVyZUNvbXBvbmVudHMua2V5cygpKSB7XG4gICAgICBpZiAoYW5uSWQgPiBtYXhJZCkge1xuICAgICAgICBtYXhJZCA9IGFubklkO1xuICAgICAgfVxuICAgIH1cbiAgICBjb25zdCBpZCA9IG1heElkICsgMTtcbiAgICByZXR1cm4gaWQ7XG4gIH1cblxuICBwcml2YXRlIGNsb3NlVGFiKHR5cGU6IHN0cmluZykge1xuICAgIHRoaXMuX3NpZ25hdHVyZVRhYkFjdGl2YXRpb25TZXJ2aWNlLmNoYW5nZUFjdGl2ZVRhYih0eXBlKTtcbiAgfVxuXG4gIGhpZGVBbGwoJGV2ZW50KSB7XG4gICAgaWYgKCgkZXZlbnQudGFyZ2V0LnBhcmVudEVsZW1lbnQgJiYgJGV2ZW50LnRhcmdldC5wYXJlbnRFbGVtZW50LmF0dHJpYnV0ZXNbJ25hbWUnXSAmJlxuICAgICAgJGV2ZW50LnRhcmdldC5wYXJlbnRFbGVtZW50LmF0dHJpYnV0ZXNbJ25hbWUnXS52YWx1ZSA9PT0gJ2J1dHRvbicpIHx8XG4gICAgICAoJGV2ZW50LnRhcmdldC5wYXJlbnRFbGVtZW50ICYmXG4gICAgICAgICRldmVudC50YXJnZXQucGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50ICYmXG4gICAgICAgICRldmVudC50YXJnZXQucGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50LmF0dHJpYnV0ZXNbJ25hbWUnXSAmJlxuICAgICAgICAkZXZlbnQudGFyZ2V0LnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudC5hdHRyaWJ1dGVzWyduYW1lJ10udmFsdWUgPT09ICdidXR0b24nKSB8fFxuICAgICAgKCRldmVudC50YXJnZXQucGFyZW50RWxlbWVudCAmJlxuICAgICAgICAkZXZlbnQudGFyZ2V0LnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudCAmJlxuICAgICAgICAkZXZlbnQudGFyZ2V0LnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50ICYmXG4gICAgICAgICRldmVudC50YXJnZXQucGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudCAmJlxuICAgICAgICAkZXZlbnQudGFyZ2V0LnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQuYXR0cmlidXRlc1snbmFtZSddICYmXG4gICAgICAgICRldmVudC50YXJnZXQucGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudC5hdHRyaWJ1dGVzWyduYW1lJ10udmFsdWUgPT09ICdidXR0b24nKSkge1xuXG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHRoaXMuX29uQ2xvc2VTZXJ2aWNlLmNsb3NlKHRydWUpO1xuICB9XG5cbiAgbmV3U2lnbigkZXZlbnQ6IHN0cmluZykge1xuICAgIGlmIChTaWduYXR1cmVUeXBlLkhBTkQuaWQgPT09ICRldmVudCkge1xuICAgICAgdGhpcy5fbW9kYWxTZXJ2aWNlLm9wZW4oQ29tbW9uTW9kYWxzLkRyYXdIYW5kU2lnbmF0dXJlKTtcbiAgICB9IGVsc2UgaWYgKFNpZ25hdHVyZVR5cGUuU1RBTVAuaWQgPT09ICRldmVudCkge1xuICAgICAgdGhpcy5fbW9kYWxTZXJ2aWNlLm9wZW4oQ29tbW9uTW9kYWxzLkRyYXdTdGFtcFNpZ25hdHVyZSk7XG4gICAgfSBlbHNlIGlmIChTaWduYXR1cmVUeXBlLlRFWFQuaWQgPT09ICRldmVudCkge1xuICAgICAgdGhpcy5hZGRUZXh0U2lnbigpO1xuICAgICAgdGhpcy5fc2lnbmF0dXJlVGFiQWN0aXZhdGlvblNlcnZpY2UuY2hhbmdlQWN0aXZlVGFiKFNpZ25hdHVyZVR5cGUuVEVYVC5pZCk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBhZGRUZXh0U2lnbigpIHtcbiAgICBjb25zdCBzaWduYXR1cmUgPSBuZXcgQWRkZWRTaWduYXR1cmUoKTtcbiAgICBzaWduYXR1cmUucHJvcHMgPSBTaWduYXR1cmVQcm9wcy5nZXREZWZhdWx0KCk7XG4gICAgc2lnbmF0dXJlLmd1aWQgPSBEcmFnZ2FibGVTaWduYXR1cmUuVEVNUDtcbiAgICBjb25zdCBzaWduID0gbmV3IERyYWdnYWJsZVNpZ25hdHVyZSgpO1xuICAgIHNpZ24uZ3VpZCA9IERyYWdnYWJsZVNpZ25hdHVyZS5URU1QO1xuICAgIHNpZ24ucG9zaXRpb24gPSBuZXcgUG9zaXRpb24oMCwgMCk7XG4gICAgc2lnbi50eXBlID0gU2lnbmF0dXJlVHlwZS5URVhULmlkO1xuICAgIGNvbnN0IHBhZ2VOdW1iZXIgPSB0aGlzLl9uYXZpZ2F0ZVNlcnZpY2UuY3VycmVudFBhZ2U7XG4gICAgc2lnbmF0dXJlLm51bWJlciA9IHBhZ2VOdW1iZXI7XG4gICAgc2lnbi5wYWdlTnVtYmVyID0gcGFnZU51bWJlcjtcbiAgICBjb25zdCBwYWdlTW9kZWwgPSB0aGlzLmZpbGUucGFnZXMuZmluZChmdW5jdGlvbiAocCkge1xuICAgICAgcmV0dXJuIHAubnVtYmVyID09PSBwYWdlTnVtYmVyO1xuICAgIH0pO1xuICAgIGNvbnN0IGlkID0gdGhpcy5hZGRTaWduYXR1cmVDb21wb25lbnQoc2lnbmF0dXJlLCBzaWduLCBwYWdlTW9kZWwpO1xuICAgIHRoaXMuX3NpZ25hdHVyZXNIb2xkZXJTZXJ2aWNlLmFkZElkKHNpZ24uZ3VpZCwgaWQpO1xuICB9XG5cbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgdGhpcy5jbGVhblNpZ25hdHVyZXMoKTtcbiAgfVxuXG4gIHByaXZhdGUgY2xlYW5TaWduYXR1cmVzKCkge1xuICAgIGZvciAoY29uc3QgY29tcG9uZW50UmVmIG9mIHRoaXMuc2lnbmF0dXJlQ29tcG9uZW50cy52YWx1ZXMoKSkge1xuICAgICAgY29tcG9uZW50UmVmLmRlc3Ryb3koKTtcbiAgICB9XG4gICAgdGhpcy5zaWduYXR1cmVDb21wb25lbnRzID0gbmV3IE1hcDxudW1iZXIsIENvbXBvbmVudFJlZjxhbnk+PigpO1xuICAgIHRoaXMuX3NpZ25hdHVyZXNIb2xkZXJTZXJ2aWNlLmNsZWFyKCk7XG4gIH1cblxuICBzaWduKCkge1xuICAgIGNvbnN0IHNpZ25hdHVyZXMgPSB0aGlzLnByZXBhcmVTaWduYXR1cmVzRGF0YSgpO1xuICAgIHRoaXMuX3NpZ25hdHVyZVNlcnZpY2Uuc2lnbih0aGlzLmNyZWRlbnRpYWxzLCBzaWduYXR1cmVzKS5zdWJzY3JpYmUoKHJldDogYW55KSA9PiB7XG4gICAgICB0aGlzLl9tb2RhbFNlcnZpY2Uub3BlbihDb21tb25Nb2RhbHMuT3BlcmF0aW9uU3VjY2Vzcyk7XG4gICAgICB0aGlzLnNlbGVjdEZpbGUocmV0Lmd1aWQsIG51bGwsIENvbW1vbk1vZGFscy5PcGVyYXRpb25TdWNjZXNzKTtcbiAgICB9KTtcbiAgfVxuXG4gIHB1YmxpYyBwcmVwYXJlU2lnbmF0dXJlc0RhdGEoKSB7XG4gICAgY29uc3Qgc2lnbmF0dXJlcyA9IFtdO1xuICAgIGZvciAoY29uc3QgaWRzIG9mIHRoaXMuX3NpZ25hdHVyZXNIb2xkZXJTZXJ2aWNlLnZhbHVlcygpKSB7XG4gICAgICBmb3IgKGNvbnN0IGlkIG9mIGlkcykge1xuICAgICAgICBjb25zdCBjb21wb25lbnRSZWYgPSB0aGlzLnNpZ25hdHVyZUNvbXBvbmVudHMuZ2V0KGlkKTtcbiAgICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgICBjb25zdCBzaWduID0gKDxTaWduYXR1cmU+Y29tcG9uZW50UmVmKS5pbnN0YW5jZTtcbiAgICAgICAgY29uc3QgZGF0YSA9IHNpZ24uZGF0YTtcbiAgICAgICAgY29uc3QgcG9zaXRpb24gPSBzaWduLnBvc2l0aW9uO1xuICAgICAgICBjb25zdCB0eXBlID0gc2lnbi50eXBlO1xuXG4gICAgICAgIGlmIChEcmFnZ2FibGVTaWduYXR1cmUuVEVNUCAhPT0gZGF0YS5ndWlkKSB7XG4gICAgICAgICAgc2lnbmF0dXJlcy5wdXNoKFNpZ25hdHVyZURhdGEubWFwKGRhdGEsIHR5cGUsIHBvc2l0aW9uKSk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoU2lnbmF0dXJlVHlwZS5ESUdJVEFMLmlkID09PSB0eXBlKSB7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHNpZ25hdHVyZXM7XG4gIH1cblxuICBpc1BkZigpIHtcbiAgICBpZiAodGhpcy5maWxlKSB7XG4gICAgICBpZiAoRmlsZVV0aWwuZmluZCh0aGlzLmZpbGUuZ3VpZCwgZmFsc2UpLmZvcm1hdCA9PT0gXCJQb3J0YWJsZSBEb2N1bWVudCBGb3JtYXRcIikge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgY29kZXNDb25maWcoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U2lnbmF0dXJlVHlwZUNvbmZpZyhTaWduYXR1cmVUeXBlLkJBUl9DT0RFLmlkKSB8fCB0aGlzLmdldFNpZ25hdHVyZVR5cGVDb25maWcoU2lnbmF0dXJlVHlwZS5RUl9DT0RFLmlkKTtcbiAgfVxuXG4gIGlzVmlzaWJsZShpZDogc3RyaW5nKSB7XG4gICAgY29uc3Qgbm90Q29kZSA9IGlkICE9PSBTaWduYXR1cmVUeXBlLkJBUl9DT0RFLmlkICYmIGlkICE9PSBTaWduYXR1cmVUeXBlLlFSX0NPREUuaWQ7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U2lnbmF0dXJlVHlwZUNvbmZpZyhpZCkgJiYgKHRoaXMuaXNEZXNrdG9wIHx8IG5vdENvZGUpO1xuICB9XG5cbiAgYWN0aXZlVGFiKCRldmVudDogc3RyaW5nKSB7XG4gICAgdGhpcy5hY3RpdmVTaWduYXR1cmVUYWIgPSAkZXZlbnQ7XG4gIH1cblxuICBmaWxlRHJvcHBlZCgkZXZlbnQpIHtcbiAgICB0aGlzLmZpbGVXYXNEcm9wcGVkID0gJGV2ZW50O1xuICB9XG5cbiAgaXNGaXJzdFRhYihzaWduYXR1cmVUeXBlOiB7IG5hbWU6IHN0cmluZzsgaWNvbjogc3RyaW5nOyBpZDogc3RyaW5nOyB0aXRsZTogc3RyaW5nIH0pIHtcbiAgICBpZiAoKHNpZ25hdHVyZVR5cGUuaWQgPT09IFNpZ25hdHVyZVR5cGUuVEVYVC5pZCkgfHwgKCF0aGlzLmlzRGVza3RvcCAmJiBzaWduYXR1cmVUeXBlLmlkID09PSBTaWduYXR1cmVUeXBlLlFSX0NPREUuaWQpKSB7XG4gICAgICByZXR1cm4gLTE7XG4gICAgfVxuICAgIGlmICgoc2lnbmF0dXJlVHlwZS5pZCA9PT0gU2lnbmF0dXJlVHlwZS5IQU5ELmlkKSB8fCAoIXRoaXMuaXNEZXNrdG9wICYmIHNpZ25hdHVyZVR5cGUuaWQgPT09IFNpZ25hdHVyZVR5cGUuQkFSX0NPREUuaWQpKSB7XG4gICAgICByZXR1cm4gMTtcbiAgICB9XG4gICAgcmV0dXJuIDA7XG4gIH1cblxuICBvblBhbigkZXZlbnQpXG4gIHtcbiAgICB0aGlzLl96b29tU2VydmljZS5jaGFuZ2Vab29tKHRoaXMuX3pvb20pO1xuICB9XG59XG4iXX0=