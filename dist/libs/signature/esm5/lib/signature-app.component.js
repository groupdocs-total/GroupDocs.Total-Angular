/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
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
                /** @type {?} */
                var sign = new DraggableSignature();
                sign.type = comp.type;
                sign.guid = copySign.guid;
                sign.position = comp.position;
                /** @type {?} */
                var addedSignature = new AddedSignature();
                addedSignature.guid = copySign.guid;
                addedSignature.data = comp.data.data;
                if (comp.data.props) {
                    addedSignature.props = comp.data.props;
                }
                else {
                    addedSignature.width = comp.data.width;
                    addedSignature.height = comp.data.height;
                }
                try {
                    for (var _b = tslib_1.__values(_this.file.pages), _c = _b.next(); !_c.done; _c = _b.next()) {
                        var page = _c.value;
                        if (page.number !== compPage) {
                            addedSignature.number = page.number;
                            sign.pageNumber = page.number;
                            /** @type {?} */
                            var id = _this.addSignatureComponent(addedSignature, sign, page);
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
                            if (comp.id !== copyChanges.id) {
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
            return false;
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
            var left = position.x - $(documentPage).offset().left;
            /** @type {?} */
            var top_1 = position.y - $(documentPage).offset().top;
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
     * @return {?}
     */
    SignatureAppComponent.prototype.addSignatureComponent = /**
     * @private
     * @param {?} addedSignature
     * @param {?} sign
     * @param {?} page
     * @return {?}
     */
    function (addedSignature, sign, page) {
        /** @type {?} */
        var dynamicDirective = this._hostingComponentsService.find(page.number);
        if (dynamicDirective) {
            /** @type {?} */
            var viewContainerRef = dynamicDirective.viewContainerRef;
            /** @type {?} */
            var selectSignature = this._addDynamicComponentService.addDynamicComponent(viewContainerRef, Signature);
            /** @type {?} */
            var id = this.signatureComponents.size + 1;
            while (addedSignature.width >= page.width || addedSignature.height >= page.height) {
                addedSignature.width = addedSignature.width / 2;
                addedSignature.height = addedSignature.height / 2;
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
        var e_6, _a;
        try {
            for (var _b = tslib_1.__values(this.signatureComponents.values()), _c = _b.next(); !_c.done; _c = _b.next()) {
                var componentRef = _c.value;
                componentRef.destroy();
            }
        }
        catch (e_6_1) { e_6 = { error: e_6_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_6) throw e_6.error; }
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
     * @private
     * @return {?}
     */
    SignatureAppComponent.prototype.prepareSignaturesData = /**
     * @private
     * @return {?}
     */
    function () {
        var e_7, _a;
        /** @type {?} */
        var signatures = [];
        try {
            for (var _b = tslib_1.__values(this._signaturesHolderService.values()), _c = _b.next(); !_c.done; _c = _b.next()) {
                var ids = _c.value;
                /** @type {?} */
                var id = ids.pop();
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
            }
        }
        catch (e_7_1) { e_7 = { error: e_7_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_7) throw e_7.error; }
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
    SignatureAppComponent.decorators = [
        { type: Component, args: [{
                    selector: 'gd-signature',
                    template: "<gd-loading-mask [loadingMask]=\"isLoading\"></gd-loading-mask>\n<div class=\"wrapper\" (contextmenu)=\"onRightClick($event)\" (click)=\"hideAll($event)\">\n  <div class=\"signature-wrapper wrapper\">\n    <gd-tabbed-toolbars [logo]=\"'signature'\" [icon]=\"'pen-square'\">\n      <gd-tabs>\n        <gd-tab [tabTitle]=\"'File'\" [icon]=\"'folder-open'\" [id]=\"'1'\" [active]=\"true\">\n          <div id=\"files-tools\" class=\"toolbar-panel\">\n            <gd-button [icon]=\"'folder-open'\" [tooltip]=\"'Browse files'\" (click)=\"openModal(browseFilesModal)\"\n                       *ngIf=\"browseConfig\"></gd-button>\n\n            <gd-button [disabled]=\"formatDisabled\" [icon]=\"'download'\" [tooltip]=\"'Download'\"\n                       (click)=\"downloadFile()\" *ngIf=\"downloadConfig\"></gd-button>\n            <gd-button [disabled]=\"formatDisabled\" [icon]=\"'save'\" [tooltip]=\"'Save'\" (click)=\"sign()\"></gd-button>\n\n          </div>\n        </gd-tab>\n        <gd-tab [tabTitle]=\"'Signatures'\" [icon]=\"'signature'\" [id]=\"'2'\">\n          <div class=\"toolbar-panel\">\n            <div *ngFor=\"let signatureType of signatureTypes\">\n              <gd-signature-tab [disabled]=\"!file\" *ngIf=\"isVisible(signatureType.id)\"\n                                [icon]=\"signatureType.icon\" (activeTab)=\"activeTab($event)\"\n                                [id]=\"signatureType.id\" [tooltip]=\"signatureType.name\">\n              </gd-signature-tab>\n            </div>\n          </div>\n        </gd-tab>\n        <gd-tab [tabTitle]=\"''\" [icon]=\"'qrcode'\" [id]=\"'3'\" *ngIf=\"!isDesktop && codesConfig()\">\n          <div class=\"toolbar-panel\">\n            <div *ngFor=\"let signatureType of signatureTypeCodes\">\n              <gd-signature-tab [disabled]=\"!file\" *ngIf=\"getSignatureTypeConfig(signatureType.id)\"\n                                [icon]=\"signatureType.icon\" (activeTab)=\"activeTab($event)\"\n                                [id]=\"signatureType.id\" [tooltip]=\"signatureType.name\">\n              </gd-signature-tab>\n            </div>\n          </div>\n        </gd-tab>\n      </gd-tabs>\n    </gd-tabbed-toolbars>\n    <gd-signature-left-panel *ngIf=\"activeSignatureTab\" [rewrite]=\"rewriteConfig\" (newSignatureEvent)=\"newSign($event)\"\n                             [isPdf]=\"isPdf()\" [id]=\"activeSignatureTab\">\n    </gd-signature-left-panel>\n    <div class=\"doc-panel\" *ngIf=\"file\">\n      <gd-document (drop)=\"dropSignature($event)\" (dragover)=\"dragOver($event)\" class=\"gd-document\" *ngIf=\"file\"\n                   [file]=\"file\" [mode]=\"htmlModeConfig\" gdScrollable\n                   [preloadPageCount]=\"preloadPageCountConfig\" gdRenderPrint [htmlMode]=\"htmlModeConfig\"></gd-document>\n    </div>\n\n    <gd-init-state [icon]=\"'signature'\" [text]=\"'Drop file here to upload'\" *ngIf=\"!file\"\n                   (fileDropped)=\"fileDropped($event)\">\n      Click\n      <fa-icon [icon]=\"['fas','folder-open']\"></fa-icon>\n      to open file<br>\n      Or drop file here\n    </gd-init-state>\n    <gd-hand-modal></gd-hand-modal>\n    <gd-stamp-modal></gd-stamp-modal>\n  </div>\n  <gd-browse-files-modal (urlForUpload)=\"upload($event)\" [files]=\"files\" (selectedDirectory)=\"selectDir($event)\"\n                         (selectedFileGuid)=\"selectFile($event, null, browseFilesModal)\"\n                         [uploadConfig]=\"uploadConfig\"></gd-browse-files-modal>\n\n  <gd-error-modal></gd-error-modal>\n  <gd-password-required></gd-password-required>\n  <gd-success-modal></gd-success-modal>\n</div>\n",
                    styles: ["@import url(https://fonts.googleapis.com/css?family=Open+Sans&display=swap);:host *{font-family:'Open Sans',Arial,Helvetica,sans-serif}::ng-deep .page{position:relative}::ng-deep .gd-page-image{width:unset;height:unset}::ng-deep .top-panel{align-content:flex-start}.wrapper{align-items:stretch;height:100%;width:100%;position:fixed;top:0;bottom:0;left:0;right:0}.doc-panel{display:flex;height:inherit}.gd-document{width:100%;height:calc(100% - 90px)}.toolbar-panel{width:100%;display:flex;align-items:center}.signature-wrapper ::ng-deep .button{color:#3e4e5a!important}.signature-wrapper ::ng-deep .button .text{padding:0!important}@media (max-width:1037px){::ng-deep .panzoom{justify-content:unset!important}::ng-deep .logo ::ng-deep .icon{font-size:24px!important}::ng-deep .top-panel{height:120px!important}}"]
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2lnbmF0dXJlLWFwcC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ3JvdXBkb2NzLmV4YW1wbGVzLmFuZ3VsYXIvc2lnbmF0dXJlLyIsInNvdXJjZXMiOlsibGliL3NpZ25hdHVyZS1hcHAuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFDLFNBQVMsRUFBa0MsTUFBTSxlQUFlLENBQUM7QUFDekUsT0FBTyxFQUFDLGdCQUFnQixFQUFDLE1BQU0scUJBQXFCLENBQUM7QUFDckQsT0FBTyxFQUdMLFlBQVksRUFDWixrQkFBa0IsRUFDbEIsZUFBZSxFQUNmLGtCQUFrQixFQUVsQixXQUFXLEVBQ1gsa0JBQWtCLEVBQ2xCLFFBQVEsRUFDUixlQUFlLEVBRWYsWUFBWSxFQUNaLDhCQUE4QixFQUM5QiwwQkFBMEIsRUFDMUIsY0FBYyxFQUNkLHVCQUF1QixFQUN2QixhQUFhLEVBQ2IsS0FBSyxFQUNMLG1CQUFtQixFQUNwQixNQUFNLCtDQUErQyxDQUFDO0FBRXZELE9BQU8sRUFBQyxzQkFBc0IsRUFBQyxNQUFNLDRCQUE0QixDQUFDO0FBQ2xFLE9BQU8sRUFDTCxjQUFjLEVBR2Qsa0JBQWtCLEVBQ2xCLFFBQVEsRUFDUixhQUFhLEVBQUUsY0FBYyxFQUM3QixhQUFhLEVBQ2QsTUFBTSxvQkFBb0IsQ0FBQztBQUM1QixPQUFPLEVBQUMsc0JBQXNCLEVBQUMsTUFBTSw0QkFBNEIsQ0FBQztBQUNsRSxPQUFPLEVBQUMsU0FBUyxFQUFDLE1BQU0saUNBQWlDLENBQUM7QUFDMUQsT0FBTyxFQUFDLG9CQUFvQixFQUFDLE1BQU0sMEJBQTBCLENBQUM7QUFDOUQsT0FBTyxFQUFDLHNCQUFzQixFQUFDLE1BQU0sNEJBQTRCLENBQUM7QUFDbEUsT0FBTyxLQUFLLE1BQU0sTUFBTSxRQUFRLENBQUM7QUFDakMsT0FBTyxFQUFDLHNCQUFzQixFQUFDLE1BQU0sNEJBQTRCLENBQUM7QUFDbEUsT0FBTyxFQUFDLHVC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Qjs7SUFvaUI1Qiw0QkFBQztDQUFBLEFBaGlCRCxJQWdpQkM7U0EzaEJZLHFCQUFxQjs7O0lBQ2hDLHNDQUFvQjs7SUFDcEIsc0NBQXdCOztJQUN4QixxQ0FBc0I7O0lBQ3RCLGdEQUFpQzs7SUFDakMsMkNBQWU7O0lBQ2YsK0NBQTRCOztJQUM1Qiw0Q0FBNkI7O0lBQzdCLGlEQUE0Qzs7SUFDNUMsMENBQW1COztJQUNuQiwrQ0FRRTs7SUFDRixtREFHRTs7SUFFRixvREFBMkQ7O0lBQzNELG1EQUEyQjs7SUFDM0IsMENBQW1COztJQUNuQiwrQ0FBdUI7Ozs7O0lBRVgsa0RBQTJDOzs7OztJQUMzQyw4Q0FBbUM7Ozs7O0lBR25DLGlEQUF5Qzs7Ozs7SUFDekMsNkNBQWlDOzs7OztJQUVqQyxvREFBK0M7Ozs7O0lBRS9DLCtDQUFxQzs7Ozs7SUFDckMsd0RBQXVEOzs7OztJQUN2RCwrREFBb0U7Ozs7O0lBQ3BFLDBEQUFpRTs7Ozs7SUFDakUsNERBQStEOzs7OztJQUMvRCxzREFBbUQ7Ozs7O0lBQ25ELGdEQUF1Qzs7Ozs7SUFFdkMsd0RBQXVEOzs7OztJQUN2RCxtREFBbUQ7Ozs7O0lBQ25ELHlEQUF5RDs7Ozs7SUFDekQscURBQWlEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIENvbXBvbmVudFJlZiwgT25EZXN0cm95LCBPbkluaXR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtTaWduYXR1cmVTZXJ2aWNlfSBmcm9tIFwiLi9zaWduYXR1cmUuc2VydmljZVwiO1xuaW1wb3J0IHtcbiAgRmlsZURlc2NyaXB0aW9uLFxuICBGaWxlTW9kZWwsXG4gIE1vZGFsU2VydmljZSxcbiAgVXBsb2FkRmlsZXNTZXJ2aWNlLFxuICBOYXZpZ2F0ZVNlcnZpY2UsXG4gIFBhZ2VQcmVsb2FkU2VydmljZSxcbiAgUGFnZU1vZGVsLFxuICBab29tU2VydmljZSxcbiAgUmVuZGVyUHJpbnRTZXJ2aWNlLFxuICBGaWxlVXRpbCxcbiAgUGFzc3dvcmRTZXJ2aWNlLFxuICBGaWxlQ3JlZGVudGlhbHMsXG4gIENvbW1vbk1vZGFscyxcbiAgSG9zdGluZ0R5bmFtaWNDb21wb25lbnRTZXJ2aWNlLFxuICBBZGREeW5hbWljQ29tcG9uZW50U2VydmljZSxcbiAgT25DbG9zZVNlcnZpY2UsXG4gIEV4Y2VwdGlvbk1lc3NhZ2VTZXJ2aWNlLFxuICBXaW5kb3dTZXJ2aWNlLFxuICBVdGlscyxcbiAgVGFiQWN0aXZhdG9yU2VydmljZVxufSBmcm9tIFwiQGdyb3VwZG9jcy5leGFtcGxlcy5hbmd1bGFyL2NvbW1vbi1jb21wb25lbnRzXCI7XG5pbXBvcnQge1NpZ25hdHVyZUNvbmZpZ30gZnJvbSBcIi4vc2lnbmF0dXJlLWNvbmZpZ1wiO1xuaW1wb3J0IHtTaWduYXR1cmVDb25maWdTZXJ2aWNlfSBmcm9tIFwiLi9zaWduYXR1cmUtY29uZmlnLnNlcnZpY2VcIjtcbmltcG9ydCB7XG4gIEFkZGVkU2lnbmF0dXJlLFxuICBDb3B5Q2hhbmdlcyxcbiAgQ29weVNpZ24sXG4gIERyYWdnYWJsZVNpZ25hdHVyZSxcbiAgUG9zaXRpb24sIFJlbW92ZVNpZ24sXG4gIFNpZ25hdHVyZURhdGEsIFNpZ25hdHVyZVByb3BzLFxuICBTaWduYXR1cmVUeXBlXG59IGZyb20gXCIuL3NpZ25hdHVyZS1tb2RlbHNcIjtcbmltcG9ydCB7U2VsZWN0U2lnbmF0dXJlU2VydmljZX0gZnJvbSBcIi4vc2VsZWN0LXNpZ25hdHVyZS5zZXJ2aWNlXCI7XG5pbXBvcnQge1NpZ25hdHVyZX0gZnJvbSBcIi4vc2lnbmF0dXJlL3NpZ25hdHVyZS5jb21wb25lbnRcIjtcbmltcG9ydCB7RHJhZ1NpZ25hdHVyZVNlcnZpY2V9IGZyb20gXCIuL2RyYWctc2lnbmF0dXJlLnNlcnZpY2VcIjtcbmltcG9ydCB7UmVtb3ZlU2lnbmF0dXJlU2VydmljZX0gZnJvbSBcIi4vcmVtb3ZlLXNpZ25hdHVyZS5zZXJ2aWNlXCI7XG5pbXBvcnQgKiBhcyBqcXVlcnkgZnJvbSAnanF1ZXJ5JztcbmltcG9ydCB7QWN0aXZlU2lnbmF0dXJlU2VydmljZX0gZnJvbSBcIi4vYWN0aXZlLXNpZ25hdHVyZS5zZXJ2aWNlXCI7XG5pbXBvcnQge1NpZ25hdHVyZXNIb2xkZXJTZXJ2aWNlfSBmcm9tIFwiLi9zaWduYXR1cmVzLWhvbGRlci5zZXJ2aWNlXCI7XG5pbXBvcnQge1NpZ25hdHVyZVRhYkFjdGl2YXRvclNlcnZpY2V9IGZyb20gXCIuL3NpZ25hdHVyZS10YWItYWN0aXZhdG9yLnNlcnZpY2VcIjtcbmltcG9ydCAnaGFtbWVyanMnO1xuaW1wb3J0IHtDb3B5U2lnbmF0dXJlU2VydmljZX0gZnJvbSBcIi4vY29weS1zaWduYXR1cmUuc2VydmljZVwiO1xuXG5jb25zdCAkID0ganF1ZXJ5O1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdnZC1zaWduYXR1cmUnLFxuICB0ZW1wbGF0ZVVybDogJy4vc2lnbmF0dXJlLWFwcC5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL3NpZ25hdHVyZS1hcHAuY29tcG9uZW50Lmxlc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBTaWduYXR1cmVBcHBDb21wb25lbnQgaW1wbGVtZW50cyBPbkRlc3Ryb3ksIE9uSW5pdCB7XG4gIHRpdGxlID0gJ3NpZ25hdHVyZSc7XG4gIGZpbGVzOiBGaWxlTW9kZWxbXSA9IFtdO1xuICBmaWxlOiBGaWxlRGVzY3JpcHRpb247XG4gIHNpZ25hdHVyZUNvbmZpZzogU2lnbmF0dXJlQ29uZmlnO1xuICBjb3VudFBhZ2VzID0gMDtcbiAgZm9ybWF0RGlzYWJsZWQgPSAhdGhpcy5maWxlO1xuICBjcmVkZW50aWFsczogRmlsZUNyZWRlbnRpYWxzO1xuICBicm93c2VGaWxlc01vZGFsID0gQ29tbW9uTW9kYWxzLkJyb3dzZUZpbGVzO1xuICBpc0Rlc2t0b3A6IGJvb2xlYW47XG4gIHNpZ25hdHVyZVR5cGVzID0gW1xuICAgIFNpZ25hdHVyZVR5cGUuVEVYVCxcbiAgICBTaWduYXR1cmVUeXBlLklNQUdFLFxuICAgIFNpZ25hdHVyZVR5cGUuRElHSVRBTCxcbiAgICBTaWduYXR1cmVUeXBlLlFSX0NPREUsXG4gICAgU2lnbmF0dXJlVHlwZS5CQVJfQ09ERSxcbiAgICBTaWduYXR1cmVUeXBlLlNUQU1QLFxuICAgIFNpZ25hdHVyZVR5cGUuSEFORCxcbiAgXTtcbiAgc2lnbmF0dXJlVHlwZUNvZGVzID0gW1xuICAgIFNpZ25hdHVyZVR5cGUuUVJfQ09ERSxcbiAgICBTaWduYXR1cmVUeXBlLkJBUl9DT0RFLFxuICBdO1xuXG4gIHNpZ25hdHVyZUNvbXBvbmVudHMgPSBuZXcgTWFwPG51bWJlciwgQ29tcG9uZW50UmVmPGFueT4+KCk7XG4gIGFjdGl2ZVNpZ25hdHVyZVRhYjogc3RyaW5nO1xuICBpc0xvYWRpbmc6IGJvb2xlYW47XG4gIGZpbGVXYXNEcm9wcGVkID0gZmFsc2U7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBfc2lnbmF0dXJlU2VydmljZTogU2lnbmF0dXJlU2VydmljZSxcbiAgICAgICAgICAgICAgcHJpdmF0ZSBfbW9kYWxTZXJ2aWNlOiBNb2RhbFNlcnZpY2UsXG4gICAgICAgICAgICAgIGNvbmZpZ1NlcnZpY2U6IFNpZ25hdHVyZUNvbmZpZ1NlcnZpY2UsXG4gICAgICAgICAgICAgIHVwbG9hZEZpbGVzU2VydmljZTogVXBsb2FkRmlsZXNTZXJ2aWNlLFxuICAgICAgICAgICAgICBwcml2YXRlIF9uYXZpZ2F0ZVNlcnZpY2U6IE5hdmlnYXRlU2VydmljZSxcbiAgICAgICAgICAgICAgcHJpdmF0ZSBfem9vbVNlcnZpY2U6IFpvb21TZXJ2aWNlLFxuICAgICAgICAgICAgICBwYWdlUHJlbG9hZFNlcnZpY2U6IFBhZ2VQcmVsb2FkU2VydmljZSxcbiAgICAgICAgICAgICAgcHJpdmF0ZSBfcmVuZGVyUHJpbnRTZXJ2aWNlOiBSZW5kZXJQcmludFNlcnZpY2UsXG4gICAgICAgICAgICAgIHBhc3N3b3JkU2VydmljZTogUGFzc3dvcmRTZXJ2aWNlLFxuICAgICAgICAgICAgICBwcml2YXRlIF93aW5kb3dTZXJ2aWNlOiBXaW5kb3dTZXJ2aWNlLFxuICAgICAgICAgICAgICBwcml2YXRlIF9zZWxlY3RTaWduYXR1cmVTZXJ2aWNlOiBTZWxlY3RTaWduYXR1cmVTZXJ2aWNlLFxuICAgICAgICAgICAgICBwcml2YXRlIF9zaWduYXR1cmVUYWJBY3RpdmF0aW9uU2VydmljZTogU2lnbmF0dXJlVGFiQWN0aXZhdG9yU2VydmljZSxcbiAgICAgICAgICAgICAgcHJpdmF0ZSBfaG9zdGluZ0NvbXBvbmVudHNTZXJ2aWNlOiBIb3N0aW5nRHluYW1pY0NvbXBvbmVudFNlcnZpY2UsXG4gICAgICAgICAgICAgIHByaXZhdGUgX2FkZER5bmFtaWNDb21wb25lbnRTZXJ2aWNlOiBBZGREeW5hbWljQ29tcG9uZW50U2VydmljZSxcbiAgICAgICAgICAgICAgcHJpdmF0ZSBfZHJhZ1NpZ25hdHVyZVNlcnZpY2U6IERyYWdTaWduYXR1cmVTZXJ2aWNlLFxuICAgICAgICAgICAgICBwcml2YXRlIF9vbkNsb3NlU2VydmljZTogT25DbG9zZVNlcnZpY2UsXG4gICAgICAgICAgICAgIHJlbW92ZVNpZ25hdHVyZVNlcnZpY2U6IFJlbW92ZVNpZ25hdHVyZVNlcnZpY2UsXG4gICAgICAgICAgICAgIHByaXZhdGUgX2FjdGl2ZVNpZ25hdHVyZVNlcnZpY2U6IEFjdGl2ZVNpZ25hdHVyZVNlcnZpY2UsXG4gICAgICAgICAgICAgIHByaXZhdGUgX2V4Y01lc3NhZ2VTZXJ2aWNlOiBFeGNlcHRpb25NZXNzYWdlU2VydmljZSxcbiAgICAgICAgICAgICAgcHJpdmF0ZSBfc2lnbmF0dXJlc0hvbGRlclNlcnZpY2U6IFNpZ25hdHVyZXNIb2xkZXJTZXJ2aWNlLFxuICAgICAgICAgICAgICBwcml2YXRlIF90YWJBY3RpdmF0b3JTZXJ2aWNlOiBUYWJBY3RpdmF0b3JTZXJ2aWNlLFxuICAgICAgICAgICAgICBjb3B5U2lnbmF0dXJlU2VydmljZTogQ29weVNpZ25hdHVyZVNlcnZpY2UpIHtcblxuICAgIHRoaXMuX3RhYkFjdGl2YXRvclNlcnZpY2UuYWN0aXZlVGFiQ2hhbmdlLnN1YnNjcmliZSgodGFiSWQ6IHN0cmluZykgPT4ge1xuICAgICAgaWYgKHRhYklkID09PSAnMScpIHtcbiAgICAgICAgaWYgKHRoaXMuYWN0aXZlU2lnbmF0dXJlVGFiKSB7XG4gICAgICAgICAgdGhpcy5fc2lnbmF0dXJlVGFiQWN0aXZhdGlvblNlcnZpY2UuY2hhbmdlQWN0aXZlVGFiKHRoaXMuYWN0aXZlU2lnbmF0dXJlVGFiKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmFjdGl2ZVNpZ25hdHVyZVRhYiA9IG51bGw7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBjb3B5U2lnbmF0dXJlU2VydmljZS5jb3B5U2lnbmF0dXJlLnN1YnNjcmliZSgoY29weVNpZ246IENvcHlTaWduKSA9PiB7XG4gICAgICBjb25zdCBjb21wb25lbnRSZWYgPSB0aGlzLnNpZ25hdHVyZUNvbXBvbmVudHMuZ2V0KGNvcHlTaWduLmlkKTtcbiAgICAgIGlmIChjb21wb25lbnRSZWYpIHtcbiAgICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgICBjb25zdCBjb21wID0gKDxTaWduYXR1cmU+Y29tcG9uZW50UmVmKS5pbnN0YW5jZTtcbiAgICAgICAgY29uc3QgY29tcFBhZ2UgPSBjb21wLmRhdGEubnVtYmVyO1xuICAgICAgICBjb25zdCBzaWduID0gbmV3IERyYWdnYWJsZVNpZ25hdHVyZSgpO1xuICAgICAgICBzaWduLnR5cGUgPSBjb21wLnR5cGU7XG4gICAgICAgIHNpZ24uZ3VpZCA9IGNvcHlTaWduLmd1aWQ7XG4gICAgICAgIHNpZ24ucG9zaXRpb24gPSBjb21wLnBvc2l0aW9uO1xuICAgICAgICBjb25zdCBhZGRlZFNpZ25hdHVyZSA9IG5ldyBBZGRlZFNpZ25hdHVyZSgpO1xuICAgICAgICBhZGRlZFNpZ25hdHVyZS5ndWlkID0gY29weVNpZ24uZ3VpZDtcbiAgICAgICAgYWRkZWRTaWduYXR1cmUuZGF0YSA9IGNvbXAuZGF0YS5kYXRhO1xuICAgICAgICBpZiAoY29tcC5kYXRhLnByb3BzKSB7XG4gICAgICAgICAgYWRkZWRTaWduYXR1cmUucHJvcHMgPSBjb21wLmRhdGEucHJvcHM7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgYWRkZWRTaWduYXR1cmUud2lkdGggPSBjb21wLmRhdGEud2lkdGg7XG4gICAgICAgICAgYWRkZWRTaWduYXR1cmUuaGVpZ2h0ID0gY29tcC5kYXRhLmhlaWdodDtcbiAgICAgICAgfVxuICAgICAgICBmb3IgKGNvbnN0IHBhZ2Ugb2YgdGhpcy5maWxlLnBhZ2VzKSB7XG4gICAgICAgICAgaWYgKHBhZ2UubnVtYmVyICE9PSBjb21wUGFnZSkge1xuICAgICAgICAgICAgYWRkZWRTaWduYXR1cmUubnVtYmVyID0gcGFnZS5udW1iZXI7XG4gICAgICAgICAgICBzaWduLnBhZ2VOdW1iZXIgPSBwYWdlLm51bWJlcjtcbiAgICAgICAgICAgIGNvbnN0IGlkID0gdGhpcy5hZGRTaWduYXR1cmVDb21wb25lbnQoYWRkZWRTaWduYXR1cmUsIHNpZ24sIHBhZ2UpO1xuICAgICAgICAgICAgdGhpcy5fc2lnbmF0dXJlc0hvbGRlclNlcnZpY2UuYWRkSWQoc2lnbi5ndWlkLCBpZCk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBjb3B5U2lnbmF0dXJlU2VydmljZS5jaGFuZ2VzU2lnbmF0dXJlLnN1YnNjcmliZSgoY29weUNoYW5nZXM6IENvcHlDaGFuZ2VzKSA9PiB7XG4gICAgICBjb25zdCBjb21wb25lbnRSZWYgPSB0aGlzLnNpZ25hdHVyZUNvbXBvbmVudHMuZ2V0KGNvcHlDaGFuZ2VzLmlkKTtcbiAgICAgIGlmIChjb21wb25lbnRSZWYpIHtcbiAgICAgICAgY29uc3QgaWRzID0gdGhpcy5fc2lnbmF0dXJlc0hvbGRlclNlcnZpY2UuZ2V0KGNvcHlDaGFuZ2VzLmd1aWQpO1xuICAgICAgICBmb3IgKGNvbnN0IGlkIG9mIGlkcykge1xuICAgICAgICAgIGNvbnN0IGNvbXBSZWYgPSB0aGlzLnNpZ25hdHVyZUNvbXBvbmVudHMuZ2V0KGlkKTtcbiAgICAgICAgICBpZiAoY29tcFJlZikge1xuICAgICAgICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgICAgICAgY29uc3QgY29tcCA9ICg8U2lnbmF0dXJlPmNvbXBSZWYpLmluc3RhbmNlO1xuICAgICAgICAgICAgaWYgKGNvbXAuaWQgIT09IGNvcHlDaGFuZ2VzLmlkKSB7XG4gICAgICAgICAgICAgIGNvbXAuZGF0YS53aWR0aCA9IGNvcHlDaGFuZ2VzLndpZHRoO1xuICAgICAgICAgICAgICBjb21wLmRhdGEuaGVpZ2h0ID0gY29weUNoYW5nZXMuaGVpZ2h0O1xuICAgICAgICAgICAgICBjb21wLmRhdGEucG9zaXRpb24gPSBjb3B5Q2hhbmdlcy5wb3NpdGlvbjtcbiAgICAgICAgICAgICAgY29tcC5kYXRhLnByb3BzID0gY29weUNoYW5nZXMucHJvcHM7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICByZW1vdmVTaWduYXR1cmVTZXJ2aWNlLnJlbW92ZVNpZ25hdHVyZS5zdWJzY3JpYmUoKGRlbDogUmVtb3ZlU2lnbikgPT4ge1xuICAgICAgY29uc3QgaWRzID0gdGhpcy5fc2lnbmF0dXJlc0hvbGRlclNlcnZpY2UuZ2V0KGRlbC5ndWlkKTtcbiAgICAgIGZvciAoY29uc3QgaWQgb2YgaWRzKSB7XG4gICAgICAgIGlmIChkZWwudHlwZSA9PT0gU2lnbmF0dXJlVHlwZS5ESUdJVEFMLmlkIHx8IGRlbC5pZCA9PT0gaWQpIHtcbiAgICAgICAgICBjb25zdCBjb21wb25lbnRSZWYgPSB0aGlzLnNpZ25hdHVyZUNvbXBvbmVudHMuZ2V0KGlkKTtcbiAgICAgICAgICBpZiAoY29tcG9uZW50UmVmKSB7XG4gICAgICAgICAgICBjb21wb25lbnRSZWYuZGVzdHJveSgpO1xuICAgICAgICAgIH1cbiAgICAgICAgICB0aGlzLnNpZ25hdHVyZUNvbXBvbmVudHMuZGVsZXRlKGlkKTtcbiAgICAgICAgICB0aGlzLl9zaWduYXR1cmVzSG9sZGVyU2VydmljZS5yZW1vdmUoZGVsLmd1aWQsIGlkKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pO1xuXG4gICAgY29uZmlnU2VydmljZS51cGRhdGVkQ29uZmlnLnN1YnNjcmliZSgoc2lnbmF0dXJlQ29uZmlnKSA9PiB7XG4gICAgICB0aGlzLnNpZ25hdHVyZUNvbmZpZyA9IHNpZ25hdHVyZUNvbmZpZztcbiAgICB9KTtcblxuICAgIHVwbG9hZEZpbGVzU2VydmljZS51cGxvYWRzQ2hhbmdlLnN1YnNjcmliZSgodXBsb2FkcykgPT4ge1xuICAgICAgaWYgKHVwbG9hZHMpIHtcbiAgICAgICAgbGV0IGk6IG51bWJlcjtcbiAgICAgICAgZm9yIChpID0gMDsgaSA8IHVwbG9hZHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICB0aGlzLl9zaWduYXR1cmVTZXJ2aWNlLnVwbG9hZCh1cGxvYWRzLml0ZW0oaSksICcnLCB0aGlzLnJld3JpdGVDb25maWcsIG51bGwpLnN1YnNjcmliZSgob2JqOiBGaWxlQ3JlZGVudGlhbHMpID0+IHtcbiAgICAgICAgICAgIHRoaXMuZmlsZVdhc0Ryb3BwZWQgPyB0aGlzLnNlbGVjdEZpbGUob2JqLmd1aWQsICcnLCAnJykgOiB0aGlzLnNlbGVjdERpcignJyk7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHBhZ2VQcmVsb2FkU2VydmljZS5jaGVja1ByZWxvYWQuc3Vic2NyaWJlKChwYWdlOiBudW1iZXIpID0+IHtcbiAgICAgIGlmICh0aGlzLnByZWxvYWRQYWdlQ291bnRDb25maWcgIT09IDApIHtcbiAgICAgICAgZm9yIChsZXQgaSA9IHBhZ2U7IGkgPCBwYWdlICsgMjsgaSsrKSB7XG4gICAgICAgICAgaWYgKGkgPiAwICYmIGkgPD0gdGhpcy5jb3VudFBhZ2VzICYmICF0aGlzLmZpbGUucGFnZXNbaSAtIDFdLmRhdGEpIHtcbiAgICAgICAgICAgIHRoaXMucHJlbG9hZFBhZ2VzKGksIGkpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pO1xuXG4gICAgcGFzc3dvcmRTZXJ2aWNlLnBhc3NDaGFuZ2Uuc3Vic2NyaWJlKChwYXNzOiBzdHJpbmcpID0+IHtcbiAgICAgIHRoaXMuc2VsZWN0RmlsZSh0aGlzLmNyZWRlbnRpYWxzLmd1aWQsIHBhc3MsIENvbW1vbk1vZGFscy5QYXNzd29yZFJlcXVpcmVkKTtcbiAgICB9KTtcblxuICAgIF9zZWxlY3RTaWduYXR1cmVTZXJ2aWNlLnNlbGVjdFNpZ25hdHVyZS5zdWJzY3JpYmUoKHNpZ246IERyYWdnYWJsZVNpZ25hdHVyZSkgPT4ge1xuICAgICAgdGhpcy5zZWxlY3RTaWduYXR1cmUoc2lnbik7XG4gICAgfSk7XG5cbiAgICB0aGlzLmlzRGVza3RvcCA9IF93aW5kb3dTZXJ2aWNlLmlzRGVza3RvcCgpO1xuICAgIF93aW5kb3dTZXJ2aWNlLm9uUmVzaXplLnN1YnNjcmliZSgodykgPT4ge1xuICAgICAgdGhpcy5pc0Rlc2t0b3AgPSBfd2luZG93U2VydmljZS5pc0Rlc2t0b3AoKTtcbiAgICB9KTtcblxuICB9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuZGVmYXVsdERvY3VtZW50Q29uZmlnKCkpIHtcbiAgICAgIHRoaXMuaXNMb2FkaW5nID0gdHJ1ZTtcbiAgICAgIHRoaXMuc2VsZWN0RmlsZSh0aGlzLmRlZmF1bHREb2N1bWVudENvbmZpZygpLCBcIlwiLCBcIlwiKTtcbiAgICB9XG4gIH1cblxuICBnZXQgcmV3cml0ZUNvbmZpZygpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5zaWduYXR1cmVDb25maWcgPyB0aGlzLnNpZ25hdHVyZUNvbmZpZy5yZXdyaXRlIDogdHJ1ZTtcbiAgfVxuXG4gIGdldCB6b29tQ29uZmlnKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIGdldCBwYWdlU2VsZWN0b3JDb25maWcoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuc2lnbmF0dXJlQ29uZmlnID8gdGhpcy5zaWduYXR1cmVDb25maWcucGFnZVNlbGVjdG9yIDogdHJ1ZTtcbiAgfVxuXG4gIGdldCBwcmVsb2FkUGFnZUNvdW50Q29uZmlnKCk6IG51bWJlciB7XG4gICAgcmV0dXJuIHRoaXMuc2lnbmF0dXJlQ29uZmlnID8gdGhpcy5zaWduYXR1cmVDb25maWcucHJlbG9hZFBhZ2VDb3VudCA6IDA7XG4gIH1cblxuICBnZXQgZG93bmxvYWRDb25maWcoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuc2lnbmF0dXJlQ29uZmlnID8gdGhpcy5zaWduYXR1cmVDb25maWcuZG93bmxvYWQgOiB0cnVlO1xuICB9XG5cbiAgZ2V0IGRvd25sb2FkT3JpZ2luYWxDb25maWcoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuc2lnbmF0dXJlQ29uZmlnID8gdGhpcy5zaWduYXR1cmVDb25maWcuZG93bmxvYWRPcmlnaW5hbCA6IHRydWU7XG4gIH1cblxuICBnZXQgZG93bmxvYWRTaW5nZWRDb25maWcoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuc2lnbmF0dXJlQ29uZmlnID8gdGhpcy5zaWduYXR1cmVDb25maWcuZG93bmxvYWRTaWduZWQgOiB0cnVlO1xuICB9XG5cbiAgZ2V0IHVwbG9hZENvbmZpZygpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5zaWduYXR1cmVDb25maWcgPyB0aGlzLnNpZ25hdHVyZUNvbmZpZy51cGxvYWQgOiB0cnVlO1xuICB9XG5cbiAgcHJpdmF0ZSBkZWZhdWx0RG9jdW1lbnRDb25maWcoKSB7XG4gICAgcmV0dXJuIHRoaXMuc2lnbmF0dXJlQ29uZmlnID8gdGhpcy5zaWduYXR1cmVDb25maWcuZGVmYXVsdERvY3VtZW50IDogXCJcIjtcbiAgfVxuXG4gIGdldCBwcmludENvbmZpZygpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5zaWduYXR1cmVDb25maWcgPyB0aGlzLnNpZ25hdHVyZUNvbmZpZy5wcmludCA6IHRydWU7XG4gIH1cblxuICBnZXQgYnJvd3NlQ29uZmlnKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLnNpZ25hdHVyZUNvbmZpZyA/IHRoaXMuc2lnbmF0dXJlQ29uZmlnLmJyb3dzZSA6IHRydWU7XG4gIH1cblxuICBnZXQgaHRtbE1vZGVDb25maWcoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgZ2V0IGVuYWJsZVJpZ2h0Q2xpY2tDb25maWcoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuc2lnbmF0dXJlQ29uZmlnID8gdGhpcy5zaWduYXR1cmVDb25maWcuZW5hYmxlUmlnaHRDbGljayA6IHRydWU7XG4gIH1cblxuICBnZXQgdGV4dFNpZ25hdHVyZUNvbmZpZygpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5zaWduYXR1cmVDb25maWcgPyB0aGlzLnNpZ25hdHVyZUNvbmZpZy50ZXh0U2lnbmF0dXJlIDogdHJ1ZTtcbiAgfVxuXG4gIGdldCBpbWFnZVNpZ25hdHVyZUNvbmZpZygpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5zaWduYXR1cmVDb25maWcgPyB0aGlzLnNpZ25hdHVyZUNvbmZpZy5pbWFnZVNpZ25hdHVyZSA6IHRydWU7XG4gIH1cblxuICBnZXQgZGlnaXRhbFNpZ25hdHVyZUNvbmZpZygpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5zaWduYXR1cmVDb25maWcgPyB0aGlzLnNpZ25hdHVyZUNvbmZpZy5kaWdpdGFsU2lnbmF0dXJlIDogdHJ1ZTtcbiAgfVxuXG4gIGdldCBxckNvZGVTaWduYXR1cmVDb25maWcoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuc2lnbmF0dXJlQ29uZmlnID8gdGhpcy5zaWduYXR1cmVDb25maWcucXJDb2RlU2lnbmF0dXJlIDogdHJ1ZTtcbiAgfVxuXG4gIGdldCBiYXJDb2RlU2lnbmF0dXJlQ29uZmlnKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLnNpZ25hdHVyZUNvbmZpZyA/IHRoaXMuc2lnbmF0dXJlQ29uZmlnLmJhckNvZGVTaWduYXR1cmUgOiB0cnVlO1xuICB9XG5cbiAgZ2V0IHN0YW1wU2lnbmF0dXJlQ29uZmlnKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLnNpZ25hdHVyZUNvbmZpZyA/IHRoaXMuc2lnbmF0dXJlQ29uZmlnLnN0YW1wU2lnbmF0dXJlIDogdHJ1ZTtcbiAgfVxuXG4gIGdldCBoYW5kU2lnbmF0dXJlQ29uZmlnKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLnNpZ25hdHVyZUNvbmZpZyA/IHRoaXMuc2lnbmF0dXJlQ29uZmlnLmhhbmRTaWduYXR1cmUgOiB0cnVlO1xuICB9XG5cbiAgZ2V0IGN1cnJlbnRQYWdlKCk6IG51bWJlciB7XG4gICAgcmV0dXJuIHRoaXMuX25hdmlnYXRlU2VydmljZS5jdXJyZW50UGFnZTtcbiAgfVxuXG4gIG9wZW5Nb2RhbChpZDogc3RyaW5nKSB7XG4gICAgdGhpcy5fbW9kYWxTZXJ2aWNlLm9wZW4oaWQpO1xuICB9XG5cbiAgY2xvc2VNb2RhbChpZDogc3RyaW5nKSB7XG4gICAgdGhpcy5fbW9kYWxTZXJ2aWNlLmNsb3NlKGlkKTtcbiAgfVxuXG4gIHNlbGVjdERpcigkZXZlbnQ6IHN0cmluZykge1xuICAgIHRoaXMuX3NpZ25hdHVyZVNlcnZpY2UubG9hZEZpbGVzKCRldmVudCkuc3Vic2NyaWJlKChmaWxlczogRmlsZU1vZGVsW10pID0+IHRoaXMuZmlsZXMgPSBmaWxlcyB8fCBbXSk7XG4gIH1cblxuICBzZWxlY3RGaWxlKCRldmVudDogc3RyaW5nLCBwYXNzd29yZDogc3RyaW5nLCBtb2RhbElkOiBzdHJpbmcpIHtcbiAgICB0aGlzLmNyZWRlbnRpYWxzID0ge2d1aWQ6ICRldmVudCwgcGFzc3dvcmQ6IHBhc3N3b3JkfTtcbiAgICB0aGlzLmZpbGUgPSBudWxsO1xuICAgIHRoaXMuX3NpZ25hdHVyZVNlcnZpY2UubG9hZEZpbGUodGhpcy5jcmVkZW50aWFscykuc3Vic2NyaWJlKChmaWxlOiBGaWxlRGVzY3JpcHRpb24pID0+IHtcbiAgICAgICAgdGhpcy5maWxlID0gZmlsZTtcbiAgICAgICAgdGhpcy5mb3JtYXREaXNhYmxlZCA9ICF0aGlzLmZpbGU7XG4gICAgICAgIGlmIChmaWxlKSB7XG4gICAgICAgICAgY29uc3QgcHJlbG9hZFBhZ2VDb3VudCA9IHRoaXMucHJlbG9hZFBhZ2VDb3VudENvbmZpZztcbiAgICAgICAgICBjb25zdCBjb3VudFBhZ2VzID0gZmlsZS5wYWdlcyA/IGZpbGUucGFnZXMubGVuZ3RoIDogMDtcbiAgICAgICAgICBpZiAocHJlbG9hZFBhZ2VDb3VudCA+IDApIHtcbiAgICAgICAgICAgIHRoaXMucHJlbG9hZFBhZ2VzKDEsIHByZWxvYWRQYWdlQ291bnQgPiBjb3VudFBhZ2VzID8gY291bnRQYWdlcyA6IHByZWxvYWRQYWdlQ291bnQpO1xuICAgICAgICAgIH1cbiAgICAgICAgICB0aGlzLl9uYXZpZ2F0ZVNlcnZpY2UuY291bnRQYWdlcyA9IGNvdW50UGFnZXM7XG4gICAgICAgICAgdGhpcy5fbmF2aWdhdGVTZXJ2aWNlLmN1cnJlbnRQYWdlID0gMTtcbiAgICAgICAgICB0aGlzLmNvdW50UGFnZXMgPSBjb3VudFBhZ2VzO1xuICAgICAgICAgIHRoaXMuY2xlYW5TaWduYXR1cmVzKCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICApO1xuICAgIGlmIChtb2RhbElkKSB7XG4gICAgICB0aGlzLl9tb2RhbFNlcnZpY2UuY2xvc2UobW9kYWxJZCk7XG4gICAgfVxuICAgIHRoaXMuY2xlYXJEYXRhKCk7XG4gIH1cblxuICBwcmVsb2FkUGFnZXMoc3RhcnQ6IG51bWJlciwgZW5kOiBudW1iZXIpIHtcbiAgICBmb3IgKGxldCBpID0gc3RhcnQ7IGkgPD0gZW5kOyBpKyspIHtcbiAgICAgIHRoaXMuX3NpZ25hdHVyZVNlcnZpY2UubG9hZFBhZ2UodGhpcy5jcmVkZW50aWFscywgaSkuc3Vic2NyaWJlKChwYWdlOiBQYWdlTW9kZWwpID0+IHtcbiAgICAgICAgdGhpcy5maWxlLnBhZ2VzW2kgLSAxXSA9IHBhZ2U7XG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICB1cGxvYWQoJGV2ZW50OiBzdHJpbmcpIHtcbiAgICB0aGlzLl9zaWduYXR1cmVTZXJ2aWNlLnVwbG9hZChudWxsLCAkZXZlbnQsIHRoaXMucmV3cml0ZUNvbmZpZywgbnVsbCkuc3Vic2NyaWJlKCgpID0+IHtcbiAgICAgIHRoaXMuc2VsZWN0RGlyKCcnKTtcbiAgICB9KTtcbiAgfVxuXG4gIGRvd25sb2FkRmlsZSgpIHtcbiAgICBpZiAodGhpcy5mb3JtYXREaXNhYmxlZClcbiAgICAgIHJldHVybjtcbiAgICB3aW5kb3cubG9jYXRpb24uYXNzaWduKHRoaXMuX3NpZ25hdHVyZVNlcnZpY2UuZ2V0RG93bmxvYWRVcmwodGhpcy5jcmVkZW50aWFscykpO1xuICB9XG5cbiAgcHJpdmF0ZSBjbGVhckRhdGEoKSB7XG4gICAgaWYgKCF0aGlzLmZpbGUgfHwgIXRoaXMuZmlsZS5wYWdlcykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBmb3IgKGNvbnN0IHBhZ2Ugb2YgdGhpcy5maWxlLnBhZ2VzKSB7XG4gICAgICBwYWdlLmRhdGEgPSBudWxsO1xuICAgIH1cbiAgfVxuXG4gIG9uUmlnaHRDbGljaygkZXZlbnQ6IE1vdXNlRXZlbnQpIHtcbiAgICByZXR1cm4gdGhpcy5lbmFibGVSaWdodENsaWNrQ29uZmlnO1xuICB9XG5cbiAgZ2V0U2lnbmF0dXJlVHlwZUNvbmZpZyhpZDogc3RyaW5nKSB7XG4gICAgc3dpdGNoIChpZCkge1xuICAgICAgY2FzZSBTaWduYXR1cmVUeXBlLlRFWFQuaWQ6XG4gICAgICAgIHJldHVybiB0aGlzLnRleHRTaWduYXR1cmVDb25maWc7XG4gICAgICBjYXNlIFNpZ25hdHVyZVR5cGUuSU1BR0UuaWQ6XG4gICAgICAgIHJldHVybiB0aGlzLmltYWdlU2lnbmF0dXJlQ29uZmlnO1xuICAgICAgY2FzZSBTaWduYXR1cmVUeXBlLkRJR0lUQUwuaWQ6XG4gICAgICAgIHJldHVybiB0aGlzLmRpZ2l0YWxTaWduYXR1cmVDb25maWc7XG4gICAgICBjYXNlIFNpZ25hdHVyZVR5cGUuUVJfQ09ERS5pZDpcbiAgICAgICAgcmV0dXJuIHRoaXMucXJDb2RlU2lnbmF0dXJlQ29uZmlnO1xuICAgICAgY2FzZSBTaWduYXR1cmVUeXBlLkJBUl9DT0RFLmlkOlxuICAgICAgICByZXR1cm4gdGhpcy5iYXJDb2RlU2lnbmF0dXJlQ29uZmlnO1xuICAgICAgY2FzZSBTaWduYXR1cmVUeXBlLlNUQU1QLmlkOlxuICAgICAgICByZXR1cm4gdGhpcy5zdGFtcFNpZ25hdHVyZUNvbmZpZztcbiAgICAgIGNhc2UgU2lnbmF0dXJlVHlwZS5IQU5ELmlkOlxuICAgICAgICByZXR1cm4gdGhpcy5oYW5kU2lnbmF0dXJlQ29uZmlnO1xuICAgIH1cbiAgfVxuXG4gIGRyYWdPdmVyKCRldmVudDogRHJhZ0V2ZW50KSB7XG4gICAgJGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgJGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICB9XG5cbiAgZHJvcFNpZ25hdHVyZSgkZXZlbnQ6IERyYWdFdmVudCkge1xuICAgICRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICRldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICBjb25zdCBwb3NpdGlvbiA9IFV0aWxzLmdldE1vdXNlUG9zaXRpb24oJGV2ZW50KTtcblxuICAgIGNvbnN0IGN1cnJlbnRQYWdlID0gZG9jdW1lbnQuZWxlbWVudEZyb21Qb2ludChwb3NpdGlvbi54LCBwb3NpdGlvbi55KTtcbiAgICBpZiAoY3VycmVudFBhZ2UgJiYgJChjdXJyZW50UGFnZSkucGFyZW50KCkucGFyZW50KCkgJiYgJChjdXJyZW50UGFnZSkucGFyZW50KCkucGFyZW50KCkucGFyZW50KCkuaGFzQ2xhc3MoXCJwYWdlXCIpKSB7XG4gICAgICBjb25zdCBkb2N1bWVudFBhZ2UgPSAkKGN1cnJlbnRQYWdlKS5wYXJlbnQoKS5wYXJlbnQoKVswXTtcbiAgICAgIGNvbnN0IGxlZnQgPSBwb3NpdGlvbi54IC0gJChkb2N1bWVudFBhZ2UpLm9mZnNldCgpLmxlZnQ7XG4gICAgICBjb25zdCB0b3AgPSBwb3NpdGlvbi55IC0gJChkb2N1bWVudFBhZ2UpLm9mZnNldCgpLnRvcDtcbiAgICAgIGNvbnN0IGN1cnJlbnRQb3NpdGlvbiA9IG5ldyBQb3NpdGlvbihsZWZ0LCB0b3ApO1xuICAgICAgY29uc3Qgc2lnbiA9IHRoaXMuX2RyYWdTaWduYXR1cmVTZXJ2aWNlLnNpZ247XG4gICAgICBpZiAoc2lnbikge1xuICAgICAgICBjb25zdCBpZCA9ICQoY3VycmVudFBhZ2UpLnBhcmVudCgpLmF0dHIoJ2lkJyk7XG4gICAgICAgIGlmIChpZCkge1xuICAgICAgICAgIGNvbnN0IHNwbGl0ID0gaWQuc3BsaXQoJy0nKTtcbiAgICAgICAgICBzaWduLnBhZ2VOdW1iZXIgPSBzcGxpdC5sZW5ndGggPT09IDIgPyBwYXJzZUludChzcGxpdFsxXSwgMTApIDogc2lnbi5wYWdlTnVtYmVyO1xuICAgICAgICB9XG4gICAgICAgIHNpZ24ucG9zaXRpb24gPSBjdXJyZW50UG9zaXRpb247XG4gICAgICAgIHRoaXMuc2VsZWN0U2lnbmF0dXJlKHNpZ24pO1xuICAgICAgICB0aGlzLl9kcmFnU2lnbmF0dXJlU2VydmljZS5zaWduID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBwcml2YXRlIHNlbGVjdFNpZ25hdHVyZShzaWduOiBEcmFnZ2FibGVTaWduYXR1cmUpIHtcbiAgICBpZiAoc2lnbi50eXBlID09PSBTaWduYXR1cmVUeXBlLkRJR0lUQUwuaWQpIHtcbiAgICAgIGNvbnN0IGFkZGVkU2lnbmF0dXJlID0gbmV3IEFkZGVkU2lnbmF0dXJlKCk7XG4gICAgICBhZGRlZFNpZ25hdHVyZS5kaWdpdGFsUHJvcHMgPSBzaWduLmRpZ2l0YWxQcm9wcztcbiAgICAgIGFkZGVkU2lnbmF0dXJlLmd1aWQgPSBzaWduLmd1aWQ7XG4gICAgICBhZGRlZFNpZ25hdHVyZS5udW1iZXIgPSBzaWduLnBhZ2VOdW1iZXI7XG4gICAgICBmb3IgKGNvbnN0IHBhZ2Ugb2YgdGhpcy5maWxlLnBhZ2VzKSB7XG4gICAgICAgIGNvbnN0IGlkID0gdGhpcy5hZGRTaWduYXR1cmVDb21wb25lbnQoYWRkZWRTaWduYXR1cmUsIHNpZ24sIHBhZ2UpO1xuICAgICAgICB0aGlzLl9zaWduYXR1cmVzSG9sZGVyU2VydmljZS5hZGRJZChzaWduLmd1aWQsIGlkKTtcbiAgICAgIH1cbiAgICAgIHRoaXMuY2xvc2VUYWIoc2lnbi50eXBlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5fc2lnbmF0dXJlU2VydmljZS5sb2FkU2lnbmF0dXJlSW1hZ2Uoc2lnbikuc3Vic2NyaWJlKChzaWduYXR1cmU6IEFkZGVkU2lnbmF0dXJlKSA9PiB7XG4gICAgICAgIHNpZ25hdHVyZS5udW1iZXIgPSBzaWduLnBhZ2VOdW1iZXI7XG4gICAgICAgIGNvbnN0IHBhZ2VNb2RlbCA9IHRoaXMuZmlsZS5wYWdlcy5maW5kKGZ1bmN0aW9uIChwKSB7XG4gICAgICAgICAgcmV0dXJuIHAubnVtYmVyID09PSBzaWduLnBhZ2VOdW1iZXI7XG4gICAgICAgIH0pO1xuICAgICAgICBjb25zdCBpZCA9IHRoaXMuYWRkU2lnbmF0dXJlQ29tcG9uZW50KHNpZ25hdHVyZSwgc2lnbiwgcGFnZU1vZGVsKTtcbiAgICAgICAgdGhpcy5fc2lnbmF0dXJlc0hvbGRlclNlcnZpY2UuYWRkSWQoc2lnbi5ndWlkLCBpZCk7XG4gICAgICAgIHRoaXMuY2xvc2VUYWIoc2lnbi50eXBlKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgYWRkU2lnbmF0dXJlQ29tcG9uZW50KGFkZGVkU2lnbmF0dXJlOiBBZGRlZFNpZ25hdHVyZSwgc2lnbjogRHJhZ2dhYmxlU2lnbmF0dXJlLCBwYWdlOiBQYWdlTW9kZWwpIHtcbiAgICBjb25zdCBkeW5hbWljRGlyZWN0aXZlID0gdGhpcy5faG9zdGluZ0NvbXBvbmVudHNTZXJ2aWNlLmZpbmQocGFnZS5udW1iZXIpO1xuICAgIGlmIChkeW5hbWljRGlyZWN0aXZlKSB7XG4gICAgICBjb25zdCB2aWV3Q29udGFpbmVyUmVmID0gZHluYW1pY0RpcmVjdGl2ZS52aWV3Q29udGFpbmVyUmVmO1xuICAgICAgY29uc3Qgc2VsZWN0U2lnbmF0dXJlID0gdGhpcy5fYWRkRHluYW1pY0NvbXBvbmVudFNlcnZpY2UuYWRkRHluYW1pY0NvbXBvbmVudCh2aWV3Q29udGFpbmVyUmVmLCBTaWduYXR1cmUpO1xuICAgICAgY29uc3QgaWQgPSB0aGlzLnNpZ25hdHVyZUNvbXBvbmVudHMuc2l6ZSArIDE7XG4gICAgICB3aGlsZSAoYWRkZWRTaWduYXR1cmUud2lkdGggPj0gcGFnZS53aWR0aCB8fCBhZGRlZFNpZ25hdHVyZS5oZWlnaHQgPj0gcGFnZS5oZWlnaHQpIHtcbiAgICAgICAgYWRkZWRTaWduYXR1cmUud2lkdGggPSBhZGRlZFNpZ25hdHVyZS53aWR0aCAvIDI7XG4gICAgICAgIGFkZGVkU2lnbmF0dXJlLmhlaWdodCA9IGFkZGVkU2lnbmF0dXJlLmhlaWdodCAvIDI7XG4gICAgICB9XG4gICAgICAoPFNpZ25hdHVyZT5zZWxlY3RTaWduYXR1cmUuaW5zdGFuY2UpLmlkID0gaWQ7XG4gICAgICAoPFNpZ25hdHVyZT5zZWxlY3RTaWduYXR1cmUuaW5zdGFuY2UpLmRhdGEgPSBhZGRlZFNpZ25hdHVyZTtcbiAgICAgICg8U2lnbmF0dXJlPnNlbGVjdFNpZ25hdHVyZS5pbnN0YW5jZSkucG9zaXRpb24gPSBzaWduLnBvc2l0aW9uO1xuICAgICAgKDxTaWduYXR1cmU+c2VsZWN0U2lnbmF0dXJlLmluc3RhbmNlKS50eXBlID0gc2lnbi50eXBlO1xuICAgICAgKDxTaWduYXR1cmU+c2VsZWN0U2lnbmF0dXJlLmluc3RhbmNlKS5wYWdlV2lkdGggPSBwYWdlLndpZHRoO1xuICAgICAgKDxTaWduYXR1cmU+c2VsZWN0U2lnbmF0dXJlLmluc3RhbmNlKS5wYWdlSGVpZ2h0ID0gcGFnZS5oZWlnaHQ7XG4gICAgICB0aGlzLnNpZ25hdHVyZUNvbXBvbmVudHMuc2V0KGlkLCBzZWxlY3RTaWduYXR1cmUpO1xuICAgICAgdGhpcy5fYWN0aXZlU2lnbmF0dXJlU2VydmljZS5jaGFuZ2VBY3RpdmUoaWQpO1xuICAgICAgcmV0dXJuIGlkO1xuICAgIH1cbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIHByaXZhdGUgY2xvc2VUYWIodHlwZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fc2lnbmF0dXJlVGFiQWN0aXZhdGlvblNlcnZpY2UuY2hhbmdlQWN0aXZlVGFiKHR5cGUpO1xuICB9XG5cbiAgaGlkZUFsbCgkZXZlbnQpIHtcbiAgICBpZiAoKCRldmVudC50YXJnZXQucGFyZW50RWxlbWVudCAmJiAkZXZlbnQudGFyZ2V0LnBhcmVudEVsZW1lbnQuYXR0cmlidXRlc1snbmFtZSddICYmXG4gICAgICAkZXZlbnQudGFyZ2V0LnBhcmVudEVsZW1lbnQuYXR0cmlidXRlc1snbmFtZSddLnZhbHVlID09PSAnYnV0dG9uJykgfHxcbiAgICAgICgkZXZlbnQudGFyZ2V0LnBhcmVudEVsZW1lbnQgJiZcbiAgICAgICAgJGV2ZW50LnRhcmdldC5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQgJiZcbiAgICAgICAgJGV2ZW50LnRhcmdldC5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQuYXR0cmlidXRlc1snbmFtZSddICYmXG4gICAgICAgICRldmVudC50YXJnZXQucGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50LmF0dHJpYnV0ZXNbJ25hbWUnXS52YWx1ZSA9PT0gJ2J1dHRvbicpIHx8XG4gICAgICAoJGV2ZW50LnRhcmdldC5wYXJlbnRFbGVtZW50ICYmXG4gICAgICAgICRldmVudC50YXJnZXQucGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50ICYmXG4gICAgICAgICRldmVudC50YXJnZXQucGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQgJiZcbiAgICAgICAgJGV2ZW50LnRhcmdldC5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50ICYmXG4gICAgICAgICRldmVudC50YXJnZXQucGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudC5hdHRyaWJ1dGVzWyduYW1lJ10gJiZcbiAgICAgICAgJGV2ZW50LnRhcmdldC5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50LmF0dHJpYnV0ZXNbJ25hbWUnXS52YWx1ZSA9PT0gJ2J1dHRvbicpKSB7XG5cbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdGhpcy5fb25DbG9zZVNlcnZpY2UuY2xvc2UodHJ1ZSk7XG4gIH1cblxuICBuZXdTaWduKCRldmVudDogc3RyaW5nKSB7XG4gICAgaWYgKFNpZ25hdHVyZVR5cGUuSEFORC5pZCA9PT0gJGV2ZW50KSB7XG4gICAgICB0aGlzLl9tb2RhbFNlcnZpY2Uub3BlbihDb21tb25Nb2RhbHMuRHJhd0hhbmRTaWduYXR1cmUpO1xuICAgICAgdGhpcy5fc2lnbmF0dXJlVGFiQWN0aXZhdGlvblNlcnZpY2UuY2hhbmdlQWN0aXZlVGFiKFNpZ25hdHVyZVR5cGUuSEFORC5pZCk7XG4gICAgfSBlbHNlIGlmIChTaWduYXR1cmVUeXBlLlNUQU1QLmlkID09PSAkZXZlbnQpIHtcbiAgICAgIHRoaXMuX21vZGFsU2VydmljZS5vcGVuKENvbW1vbk1vZGFscy5EcmF3U3RhbXBTaWduYXR1cmUpO1xuICAgICAgdGhpcy5fc2lnbmF0dXJlVGFiQWN0aXZhdGlvblNlcnZpY2UuY2hhbmdlQWN0aXZlVGFiKFNpZ25hdHVyZVR5cGUuU1RBTVAuaWQpO1xuICAgIH0gZWxzZSBpZiAoU2lnbmF0dXJlVHlwZS5URVhULmlkID09PSAkZXZlbnQpIHtcbiAgICAgIHRoaXMuYWRkVGV4dFNpZ24oKTtcbiAgICAgIHRoaXMuX3NpZ25hdHVyZVRhYkFjdGl2YXRpb25TZXJ2aWNlLmNoYW5nZUFjdGl2ZVRhYihTaWduYXR1cmVUeXBlLlRFWFQuaWQpO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgYWRkVGV4dFNpZ24oKSB7XG4gICAgY29uc3Qgc2lnbmF0dXJlID0gbmV3IEFkZGVkU2lnbmF0dXJlKCk7XG4gICAgc2lnbmF0dXJlLnByb3BzID0gU2lnbmF0dXJlUHJvcHMuZ2V0RGVmYXVsdCgpO1xuICAgIHNpZ25hdHVyZS5ndWlkID0gRHJhZ2dhYmxlU2lnbmF0dXJlLlRFTVA7XG4gICAgY29uc3Qgc2lnbiA9IG5ldyBEcmFnZ2FibGVTaWduYXR1cmUoKTtcbiAgICBzaWduLmd1aWQgPSBEcmFnZ2FibGVTaWduYXR1cmUuVEVNUDtcbiAgICBzaWduLnBvc2l0aW9uID0gbmV3IFBvc2l0aW9uKDAsIDApO1xuICAgIHNpZ24udHlwZSA9IFNpZ25hdHVyZVR5cGUuVEVYVC5pZDtcbiAgICBjb25zdCBwYWdlTnVtYmVyID0gdGhpcy5fbmF2aWdhdGVTZXJ2aWNlLmN1cnJlbnRQYWdlO1xuICAgIHNpZ25hdHVyZS5udW1iZXIgPSBwYWdlTnVtYmVyO1xuICAgIHNpZ24ucGFnZU51bWJlciA9IHBhZ2VOdW1iZXI7XG4gICAgY29uc3QgcGFnZU1vZGVsID0gdGhpcy5maWxlLnBhZ2VzLmZpbmQoZnVuY3Rpb24gKHApIHtcbiAgICAgIHJldHVybiBwLm51bWJlciA9PT0gcGFnZU51bWJlcjtcbiAgICB9KTtcbiAgICBjb25zdCBpZCA9IHRoaXMuYWRkU2lnbmF0dXJlQ29tcG9uZW50KHNpZ25hdHVyZSwgc2lnbiwgcGFnZU1vZGVsKTtcbiAgICB0aGlzLl9zaWduYXR1cmVzSG9sZGVyU2VydmljZS5hZGRJZChzaWduLmd1aWQsIGlkKTtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgIHRoaXMuY2xlYW5TaWduYXR1cmVzKCk7XG4gIH1cblxuICBwcml2YXRlIGNsZWFuU2lnbmF0dXJlcygpIHtcbiAgICBmb3IgKGNvbnN0IGNvbXBvbmVudFJlZiBvZiB0aGlzLnNpZ25hdHVyZUNvbXBvbmVudHMudmFsdWVzKCkpIHtcbiAgICAgIGNvbXBvbmVudFJlZi5kZXN0cm95KCk7XG4gICAgfVxuICAgIHRoaXMuc2lnbmF0dXJlQ29tcG9uZW50cyA9IG5ldyBNYXA8bnVtYmVyLCBDb21wb25lbnRSZWY8YW55Pj4oKTtcbiAgICB0aGlzLl9zaWduYXR1cmVzSG9sZGVyU2VydmljZS5jbGVhcigpO1xuICB9XG5cbiAgc2lnbigpIHtcbiAgICBjb25zdCBzaWduYXR1cmVzID0gdGhpcy5wcmVwYXJlU2lnbmF0dXJlc0RhdGEoKTtcbiAgICB0aGlzLl9zaWduYXR1cmVTZXJ2aWNlLnNpZ24odGhpcy5jcmVkZW50aWFscywgc2lnbmF0dXJlcykuc3Vic2NyaWJlKChyZXQ6IGFueSkgPT4ge1xuICAgICAgdGhpcy5fbW9kYWxTZXJ2aWNlLm9wZW4oQ29tbW9uTW9kYWxzLk9wZXJhdGlvblN1Y2Nlc3MpO1xuICAgICAgdGhpcy5zZWxlY3RGaWxlKHJldC5ndWlkLCBudWxsLCBDb21tb25Nb2RhbHMuT3BlcmF0aW9uU3VjY2Vzcyk7XG4gICAgfSk7XG4gIH1cblxuICBwcml2YXRlIHByZXBhcmVTaWduYXR1cmVzRGF0YSgpIHtcbiAgICBjb25zdCBzaWduYXR1cmVzID0gW107XG4gICAgZm9yIChjb25zdCBpZHMgb2YgdGhpcy5fc2lnbmF0dXJlc0hvbGRlclNlcnZpY2UudmFsdWVzKCkpIHtcbiAgICAgIGNvbnN0IGlkID0gaWRzLnBvcCgpO1xuICAgICAgY29uc3QgY29tcG9uZW50UmVmID0gdGhpcy5zaWduYXR1cmVDb21wb25lbnRzLmdldChpZCk7XG4gICAgICAvLyBAdHMtaWdub3JlXG4gICAgICBjb25zdCBzaWduID0gKDxTaWduYXR1cmU+Y29tcG9uZW50UmVmKS5pbnN0YW5jZTtcbiAgICAgIGNvbnN0IGRhdGEgPSBzaWduLmRhdGE7XG4gICAgICBjb25zdCBwb3NpdGlvbiA9IHNpZ24ucG9zaXRpb247XG4gICAgICBjb25zdCB0eXBlID0gc2lnbi50eXBlO1xuXG4gICAgICBpZiAoRHJhZ2dhYmxlU2lnbmF0dXJlLlRFTVAgIT09IGRhdGEuZ3VpZCkge1xuICAgICAgICBzaWduYXR1cmVzLnB1c2goU2lnbmF0dXJlRGF0YS5tYXAoZGF0YSwgdHlwZSwgcG9zaXRpb24pKTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHNpZ25hdHVyZXM7XG4gIH1cblxuICBpc1BkZigpIHtcbiAgICBpZiAodGhpcy5maWxlKSB7XG4gICAgICBpZiAoRmlsZVV0aWwuZmluZCh0aGlzLmZpbGUuZ3VpZCwgZmFsc2UpLmZvcm1hdCA9PT0gXCJQb3J0YWJsZSBEb2N1bWVudCBGb3JtYXRcIikge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgY29kZXNDb25maWcoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U2lnbmF0dXJlVHlwZUNvbmZpZyhTaWduYXR1cmVUeXBlLkJBUl9DT0RFLmlkKSB8fCB0aGlzLmdldFNpZ25hdHVyZVR5cGVDb25maWcoU2lnbmF0dXJlVHlwZS5RUl9DT0RFLmlkKTtcbiAgfVxuXG4gIGlzVmlzaWJsZShpZDogc3RyaW5nKSB7XG4gICAgY29uc3Qgbm90Q29kZSA9IGlkICE9PSBTaWduYXR1cmVUeXBlLkJBUl9DT0RFLmlkICYmIGlkICE9PSBTaWduYXR1cmVUeXBlLlFSX0NPREUuaWQ7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U2lnbmF0dXJlVHlwZUNvbmZpZyhpZCkgJiYgKHRoaXMuaXNEZXNrdG9wIHx8IG5vdENvZGUpO1xuICB9XG5cbiAgYWN0aXZlVGFiKCRldmVudDogc3RyaW5nKSB7XG4gICAgdGhpcy5hY3RpdmVTaWduYXR1cmVUYWIgPSAkZXZlbnQ7XG4gIH1cblxuICBmaWxlRHJvcHBlZCgkZXZlbnQpIHtcbiAgICB0aGlzLmZpbGVXYXNEcm9wcGVkID0gJGV2ZW50O1xuICB9XG59XG4iXX0=