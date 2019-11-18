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
                sign.type = comp.signatureType;
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
                    template: "<gd-loading-mask [loadingMask]=\"isLoading\"></gd-loading-mask>\n<div class=\"wrapper\" (contextmenu)=\"onRightClick($event)\" (click)=\"hideAll($event)\">\n  <gd-tabbed-toolbars [logo]=\"'signature'\" [icon]=\"'pen-square'\">\n    <gd-tabs>\n      <gd-tab [tabTitle]=\"'File'\" [icon]=\"'folder-open'\" [id]=\"'1'\" [active]=\"true\">\n        <div class=\"toolbar-panel\">\n          <gd-button [icon]=\"'folder-open'\" [tooltip]=\"'Browse files'\" (click)=\"openModal(browseFilesModal)\"\n                     *ngIf=\"browseConfig\"></gd-button>\n\n          <gd-button [disabled]=\"formatDisabled\" [icon]=\"'download'\" [tooltip]=\"'Download'\"\n                     (click)=\"downloadFile()\" *ngIf=\"downloadConfig\"></gd-button>\n          <gd-button [disabled]=\"formatDisabled\" [icon]=\"'save'\" [tooltip]=\"'Save'\" (click)=\"sign()\"></gd-button>\n\n        </div>\n      </gd-tab>\n      <gd-tab [tabTitle]=\"'Signatures'\" [icon]=\"'signature'\" [id]=\"'2'\">\n        <div class=\"toolbar-panel\">\n          <div *ngFor=\"let signatureType of signatureTypes\">\n            <gd-signature-tab [disabled]=\"!file\" *ngIf=\"isVisible(signatureType.id)\"\n                              [icon]=\"signatureType.icon\" (activeTab)=\"activeTab($event)\"\n                              [id]=\"signatureType.id\" [tooltip]=\"signatureType.name\">\n            </gd-signature-tab>\n          </div>\n        </div>\n      </gd-tab>\n      <gd-tab [tabTitle]=\"''\" [icon]=\"'qrcode'\" [id]=\"'3'\" *ngIf=\"!isDesktop && codesConfig()\">\n        <div class=\"toolbar-panel\">\n          <div *ngFor=\"let signatureType of signatureTypeCodes\">\n            <gd-signature-tab [disabled]=\"!file\" *ngIf=\"getSignatureTypeConfig(signatureType.id)\"\n                              [icon]=\"signatureType.icon\" (activeTab)=\"activeTab($event)\"\n                              [id]=\"signatureType.id\" [tooltip]=\"signatureType.name\">\n            </gd-signature-tab>\n          </div>\n        </div>\n      </gd-tab>\n    </gd-tabs>\n  </gd-tabbed-toolbars>\n  <gd-signature-left-panel *ngIf=\"activeSignatureTab\" [rewrite]=\"rewriteConfig\" (newSignatureEvent)=\"newSign($event)\"\n                           [isPdf]=\"isPdf()\" [id]=\"activeSignatureTab\">\n  </gd-signature-left-panel>\n  <div class=\"doc-panel\" *ngIf=\"file\">\n    <gd-document (drop)=\"dropSignature($event)\" (dragover)=\"dragOver($event)\" class=\"gd-document\" *ngIf=\"file\"\n                 [file]=\"file\" [mode]=\"htmlModeConfig\" gdScrollable\n                 [preloadPageCount]=\"preloadPageCountConfig\" gdRenderPrint [htmlMode]=\"htmlModeConfig\"></gd-document>\n  </div>\n\n  <gd-init-state [icon]=\"'signature'\" [text]=\"'Drop file here to upload'\" *ngIf=\"!file\" (fileDropped)=\"fileDropped($event)\">\n    Click <fa-icon [icon]=\"['fas','folder-open']\"></fa-icon> to open file<br>\n    Or drop file here\n  </gd-init-state>\n\n  <gd-browse-files-modal (urlForUpload)=\"upload($event)\" [files]=\"files\" (selectedDirectory)=\"selectDir($event)\"\n                         (selectedFileGuid)=\"selectFile($event, null, browseFilesModal)\"\n                         [uploadConfig]=\"uploadConfig\"></gd-browse-files-modal>\n\n  <gd-hand-modal></gd-hand-modal>\n  <gd-stamp-modal></gd-stamp-modal>\n  <gd-error-modal></gd-error-modal>\n  <gd-password-required></gd-password-required>\n  <gd-success-modal></gd-success-modal>\n</div>\n",
                    styles: ["@import url(https://fonts.googleapis.com/css?family=Open+Sans&display=swap);:host *{font-family:'Open Sans',Arial,Helvetica,sans-serif}::ng-deep .page{position:relative}::ng-deep .gd-page-image{width:unset;height:unset}::ng-deep .top-panel{align-content:flex-start}.wrapper{align-items:stretch;height:100%;width:100%;position:fixed;top:0;bottom:0;left:0;right:0}.doc-panel{display:flex;height:inherit}.gd-document{width:100%;height:calc(100% - 90px)}.toolbar-panel{width:100%;display:flex;align-items:center}::ng-deep .button{color:#3e4e5a!important}@media (max-width:1037px){::ng-deep .panzoom{justify-content:unset!important}::ng-deep .left-panel{width:100%!important;overflow:auto!important}::ng-deep .logo ::ng-deep .icon{font-size:24px!important}::ng-deep .top-panel{height:120px!important}}"]
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2lnbmF0dXJlLWFwcC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ3JvdXBkb2NzLmV4YW1wbGVzLmFuZ3VsYXIvc2lnbmF0dXJlLyIsInNvdXJjZXMiOlsibGliL3NpZ25hdHVyZS1hcHAuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFDLFNBQVMsRUFBa0MsTUFBTSxlQUFlLENBQUM7QUFDekUsT0FBTyxFQUFDLGdCQUFnQixFQUFDLE1BQU0scUJBQXFCLENBQUM7QUFDckQsT0FBTyxFQUdMLFlBQVksRUFDWixrQkFBa0IsRUFDbEIsZUFBZSxFQUNmLGtCQUFrQixFQUVsQixXQUFXLEVBQ1gsa0JBQWtCLEVBQ2xCLFFBQVEsRUFDUixlQUFlLEVBRWYsWUFBWSxFQUNaLDhCQUE4QixFQUM5QiwwQkFBMEIsRUFDMUIsY0FBYyxFQUNkLHVCQUF1QixFQUN2QixhQUFhLEVBQ2IsS0FBSyxFQUNMLG1CQUFtQixFQUNwQixNQUFNLCtDQUErQyxDQUFDO0FBRXZELE9BQU8sRUFBQyxzQkFBc0IsRUFBQyxNQUFNLDRCQUE0QixDQUFDO0FBQ2xFLE9BQU8sRUFDTCxjQUFjLEVBR2Qsa0JBQWtCLEVBQ2xCLFFBQVEsRUFDUixhQUFhLEVBQUUsY0FBYyxFQUM3QixhQUFhLEVBQ2QsTUFBTSxvQkFBb0IsQ0FBQztBQUM1QixPQUFPLEVBQUMsc0JBQXNCLEVBQUMsTUFBTSw0QkFBNEIsQ0FBQztBQUNsRSxPQUFPLEVBQUMsU0FBUyxFQUFDLE1BQU0saUNBQWlDLENBQUM7QUFDMUQsT0FBTyxFQUFDLG9CQUFvQixFQUFDLE1BQU0sMEJBQTBCLENBQUM7QUFDOUQsT0FBTyxFQUFDLHNCQUFzQixFQUFDLE1BQU0sNEJBQTRCLENBQUM7QUFDbEUsT0FBTyxLQUFLLE1BQU0sTUFBTSxRQUFRLENBQUM7QUFDakMsT0FBTyxFQUFDLHNCQUFzQixFQUFDLE1BQU0sNEJBQTRCLENBQUM7QUFDbEUsT0FBTyxFQUFDLHVC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OztJQUUvQywrQ0FBcUM7Ozs7O0lBQ3JDLHdEQUF1RDs7Ozs7SUFDdkQsK0RBQW9FOzs7OztJQUNwRSwwREFBaUU7Ozs7O0lBQ2pFLDREQUErRDs7Ozs7SUFDL0Qsc0RBQW1EOzs7OztJQUNuRCxnREFBdUM7Ozs7O0lBRXZDLHdEQUF1RDs7Ozs7SUFDdkQsbURBQW1EOzs7OztJQUNuRCx5REFBeUQ7Ozs7O0lBQ3pELHFEQUFpRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBDb21wb25lbnRSZWYsIE9uRGVzdHJveSwgT25Jbml0fSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7U2lnbmF0dXJlU2VydmljZX0gZnJvbSBcIi4vc2lnbmF0dXJlLnNlcnZpY2VcIjtcbmltcG9ydCB7XG4gIEZpbGVEZXNjcmlwdGlvbixcbiAgRmlsZU1vZGVsLFxuICBNb2RhbFNlcnZpY2UsXG4gIFVwbG9hZEZpbGVzU2VydmljZSxcbiAgTmF2aWdhdGVTZXJ2aWNlLFxuICBQYWdlUHJlbG9hZFNlcnZpY2UsXG4gIFBhZ2VNb2RlbCxcbiAgWm9vbVNlcnZpY2UsXG4gIFJlbmRlclByaW50U2VydmljZSxcbiAgRmlsZVV0aWwsXG4gIFBhc3N3b3JkU2VydmljZSxcbiAgRmlsZUNyZWRlbnRpYWxzLFxuICBDb21tb25Nb2RhbHMsXG4gIEhvc3RpbmdEeW5hbWljQ29tcG9uZW50U2VydmljZSxcbiAgQWRkRHluYW1pY0NvbXBvbmVudFNlcnZpY2UsXG4gIE9uQ2xvc2VTZXJ2aWNlLFxuICBFeGNlcHRpb25NZXNzYWdlU2VydmljZSxcbiAgV2luZG93U2VydmljZSxcbiAgVXRpbHMsXG4gIFRhYkFjdGl2YXRvclNlcnZpY2Vcbn0gZnJvbSBcIkBncm91cGRvY3MuZXhhbXBsZXMuYW5ndWxhci9jb21tb24tY29tcG9uZW50c1wiO1xuaW1wb3J0IHtTaWduYXR1cmVDb25maWd9IGZyb20gXCIuL3NpZ25hdHVyZS1jb25maWdcIjtcbmltcG9ydCB7U2lnbmF0dXJlQ29uZmlnU2VydmljZX0gZnJvbSBcIi4vc2lnbmF0dXJlLWNvbmZpZy5zZXJ2aWNlXCI7XG5pbXBvcnQge1xuICBBZGRlZFNpZ25hdHVyZSxcbiAgQ29weUNoYW5nZXMsXG4gIENvcHlTaWduLFxuICBEcmFnZ2FibGVTaWduYXR1cmUsXG4gIFBvc2l0aW9uLCBSZW1vdmVTaWduLFxuICBTaWduYXR1cmVEYXRhLCBTaWduYXR1cmVQcm9wcyxcbiAgU2lnbmF0dXJlVHlwZVxufSBmcm9tIFwiLi9zaWduYXR1cmUtbW9kZWxzXCI7XG5pbXBvcnQge1NlbGVjdFNpZ25hdHVyZVNlcnZpY2V9IGZyb20gXCIuL3NlbGVjdC1zaWduYXR1cmUuc2VydmljZVwiO1xuaW1wb3J0IHtTaWduYXR1cmV9IGZyb20gXCIuL3NpZ25hdHVyZS9zaWduYXR1cmUuY29tcG9uZW50XCI7XG5pbXBvcnQge0RyYWdTaWduYXR1cmVTZXJ2aWNlfSBmcm9tIFwiLi9kcmFnLXNpZ25hdHVyZS5zZXJ2aWNlXCI7XG5pbXBvcnQge1JlbW92ZVNpZ25hdHVyZVNlcnZpY2V9IGZyb20gXCIuL3JlbW92ZS1zaWduYXR1cmUuc2VydmljZVwiO1xuaW1wb3J0ICogYXMganF1ZXJ5IGZyb20gJ2pxdWVyeSc7XG5pbXBvcnQge0FjdGl2ZVNpZ25hdHVyZVNlcnZpY2V9IGZyb20gXCIuL2FjdGl2ZS1zaWduYXR1cmUuc2VydmljZVwiO1xuaW1wb3J0IHtTaWduYXR1cmVzSG9sZGVyU2VydmljZX0gZnJvbSBcIi4vc2lnbmF0dXJlcy1ob2xkZXIuc2VydmljZVwiO1xuaW1wb3J0IHtTaWduYXR1cmVUYWJBY3RpdmF0b3JTZXJ2aWNlfSBmcm9tIFwiLi9zaWduYXR1cmUtdGFiLWFjdGl2YXRvci5zZXJ2aWNlXCI7XG5pbXBvcnQgJ2hhbW1lcmpzJztcbmltcG9ydCB7Q29weVNpZ25hdHVyZVNlcnZpY2V9IGZyb20gXCIuL2NvcHktc2lnbmF0dXJlLnNlcnZpY2VcIjtcblxuY29uc3QgJCA9IGpxdWVyeTtcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnZ2Qtc2lnbmF0dXJlJyxcbiAgdGVtcGxhdGVVcmw6ICcuL3NpZ25hdHVyZS1hcHAuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9zaWduYXR1cmUtYXBwLmNvbXBvbmVudC5sZXNzJ11cbn0pXG5leHBvcnQgY2xhc3MgU2lnbmF0dXJlQXBwQ29tcG9uZW50IGltcGxlbWVudHMgT25EZXN0cm95LCBPbkluaXQge1xuICB0aXRsZSA9ICdzaWduYXR1cmUnO1xuICBmaWxlczogRmlsZU1vZGVsW10gPSBbXTtcbiAgZmlsZTogRmlsZURlc2NyaXB0aW9uO1xuICBzaWduYXR1cmVDb25maWc6IFNpZ25hdHVyZUNvbmZpZztcbiAgY291bnRQYWdlcyA9IDA7XG4gIGZvcm1hdERpc2FibGVkID0gIXRoaXMuZmlsZTtcbiAgY3JlZGVudGlhbHM6IEZpbGVDcmVkZW50aWFscztcbiAgYnJvd3NlRmlsZXNNb2RhbCA9IENvbW1vbk1vZGFscy5Ccm93c2VGaWxlcztcbiAgaXNEZXNrdG9wOiBib29sZWFuO1xuICBzaWduYXR1cmVUeXBlcyA9IFtcbiAgICBTaWduYXR1cmVUeXBlLlRFWFQsXG4gICAgU2lnbmF0dXJlVHlwZS5JTUFHRSxcbiAgICBTaWduYXR1cmVUeXBlLkRJR0lUQUwsXG4gICAgU2lnbmF0dXJlVHlwZS5RUl9DT0RFLFxuICAgIFNpZ25hdHVyZVR5cGUuQkFSX0NPREUsXG4gICAgU2lnbmF0dXJlVHlwZS5TVEFNUCxcbiAgICBTaWduYXR1cmVUeXBlLkhBTkQsXG4gIF07XG4gIHNpZ25hdHVyZVR5cGVDb2RlcyA9IFtcbiAgICBTaWduYXR1cmVUeXBlLlFSX0NPREUsXG4gICAgU2lnbmF0dXJlVHlwZS5CQVJfQ09ERSxcbiAgXTtcblxuICBzaWduYXR1cmVDb21wb25lbnRzID0gbmV3IE1hcDxudW1iZXIsIENvbXBvbmVudFJlZjxhbnk+PigpO1xuICBhY3RpdmVTaWduYXR1cmVUYWI6IHN0cmluZztcbiAgaXNMb2FkaW5nOiBib29sZWFuO1xuICBmaWxlV2FzRHJvcHBlZCA9IGZhbHNlO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgX3NpZ25hdHVyZVNlcnZpY2U6IFNpZ25hdHVyZVNlcnZpY2UsXG4gICAgICAgICAgICAgIHByaXZhdGUgX21vZGFsU2VydmljZTogTW9kYWxTZXJ2aWNlLFxuICAgICAgICAgICAgICBjb25maWdTZXJ2aWNlOiBTaWduYXR1cmVDb25maWdTZXJ2aWNlLFxuICAgICAgICAgICAgICB1cGxvYWRGaWxlc1NlcnZpY2U6IFVwbG9hZEZpbGVzU2VydmljZSxcbiAgICAgICAgICAgICAgcHJpdmF0ZSBfbmF2aWdhdGVTZXJ2aWNlOiBOYXZpZ2F0ZVNlcnZpY2UsXG4gICAgICAgICAgICAgIHByaXZhdGUgX3pvb21TZXJ2aWNlOiBab29tU2VydmljZSxcbiAgICAgICAgICAgICAgcGFnZVByZWxvYWRTZXJ2aWNlOiBQYWdlUHJlbG9hZFNlcnZpY2UsXG4gICAgICAgICAgICAgIHByaXZhdGUgX3JlbmRlclByaW50U2VydmljZTogUmVuZGVyUHJpbnRTZXJ2aWNlLFxuICAgICAgICAgICAgICBwYXNzd29yZFNlcnZpY2U6IFBhc3N3b3JkU2VydmljZSxcbiAgICAgICAgICAgICAgcHJpdmF0ZSBfd2luZG93U2VydmljZTogV2luZG93U2VydmljZSxcbiAgICAgICAgICAgICAgcHJpdmF0ZSBfc2VsZWN0U2lnbmF0dXJlU2VydmljZTogU2VsZWN0U2lnbmF0dXJlU2VydmljZSxcbiAgICAgICAgICAgICAgcHJpdmF0ZSBfc2lnbmF0dXJlVGFiQWN0aXZhdGlvblNlcnZpY2U6IFNpZ25hdHVyZVRhYkFjdGl2YXRvclNlcnZpY2UsXG4gICAgICAgICAgICAgIHByaXZhdGUgX2hvc3RpbmdDb21wb25lbnRzU2VydmljZTogSG9zdGluZ0R5bmFtaWNDb21wb25lbnRTZXJ2aWNlLFxuICAgICAgICAgICAgICBwcml2YXRlIF9hZGREeW5hbWljQ29tcG9uZW50U2VydmljZTogQWRkRHluYW1pY0NvbXBvbmVudFNlcnZpY2UsXG4gICAgICAgICAgICAgIHByaXZhdGUgX2RyYWdTaWduYXR1cmVTZXJ2aWNlOiBEcmFnU2lnbmF0dXJlU2VydmljZSxcbiAgICAgICAgICAgICAgcHJpdmF0ZSBfb25DbG9zZVNlcnZpY2U6IE9uQ2xvc2VTZXJ2aWNlLFxuICAgICAgICAgICAgICByZW1vdmVTaWduYXR1cmVTZXJ2aWNlOiBSZW1vdmVTaWduYXR1cmVTZXJ2aWNlLFxuICAgICAgICAgICAgICBwcml2YXRlIF9hY3RpdmVTaWduYXR1cmVTZXJ2aWNlOiBBY3RpdmVTaWduYXR1cmVTZXJ2aWNlLFxuICAgICAgICAgICAgICBwcml2YXRlIF9leGNNZXNzYWdlU2VydmljZTogRXhjZXB0aW9uTWVzc2FnZVNlcnZpY2UsXG4gICAgICAgICAgICAgIHByaXZhdGUgX3NpZ25hdHVyZXNIb2xkZXJTZXJ2aWNlOiBTaWduYXR1cmVzSG9sZGVyU2VydmljZSxcbiAgICAgICAgICAgICAgcHJpdmF0ZSBfdGFiQWN0aXZhdG9yU2VydmljZTogVGFiQWN0aXZhdG9yU2VydmljZSxcbiAgICAgICAgICAgICAgY29weVNpZ25hdHVyZVNlcnZpY2U6IENvcHlTaWduYXR1cmVTZXJ2aWNlKSB7XG5cbiAgICB0aGlzLl90YWJBY3RpdmF0b3JTZXJ2aWNlLmFjdGl2ZVRhYkNoYW5nZS5zdWJzY3JpYmUoKHRhYklkOiBzdHJpbmcpID0+IHtcbiAgICAgIGlmICh0YWJJZCA9PT0gJzEnKSB7XG4gICAgICAgIGlmICh0aGlzLmFjdGl2ZVNpZ25hdHVyZVRhYikge1xuICAgICAgICAgIHRoaXMuX3NpZ25hdHVyZVRhYkFjdGl2YXRpb25TZXJ2aWNlLmNoYW5nZUFjdGl2ZVRhYih0aGlzLmFjdGl2ZVNpZ25hdHVyZVRhYik7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5hY3RpdmVTaWduYXR1cmVUYWIgPSBudWxsO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgY29weVNpZ25hdHVyZVNlcnZpY2UuY29weVNpZ25hdHVyZS5zdWJzY3JpYmUoKGNvcHlTaWduOiBDb3B5U2lnbikgPT4ge1xuICAgICAgY29uc3QgY29tcG9uZW50UmVmID0gdGhpcy5zaWduYXR1cmVDb21wb25lbnRzLmdldChjb3B5U2lnbi5pZCk7XG4gICAgICBpZiAoY29tcG9uZW50UmVmKSB7XG4gICAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgICAgY29uc3QgY29tcCA9ICg8U2lnbmF0dXJlPmNvbXBvbmVudFJlZikuaW5zdGFuY2U7XG4gICAgICAgIGNvbnN0IGNvbXBQYWdlID0gY29tcC5kYXRhLm51bWJlcjtcbiAgICAgICAgY29uc3Qgc2lnbiA9IG5ldyBEcmFnZ2FibGVTaWduYXR1cmUoKTtcbiAgICAgICAgc2lnbi50eXBlID0gY29tcC5zaWduYXR1cmVUeXBlO1xuICAgICAgICBzaWduLmd1aWQgPSBjb3B5U2lnbi5ndWlkO1xuICAgICAgICBzaWduLnBvc2l0aW9uID0gY29tcC5wb3NpdGlvbjtcbiAgICAgICAgY29uc3QgYWRkZWRTaWduYXR1cmUgPSBuZXcgQWRkZWRTaWduYXR1cmUoKTtcbiAgICAgICAgYWRkZWRTaWduYXR1cmUuZ3VpZCA9IGNvcHlTaWduLmd1aWQ7XG4gICAgICAgIGFkZGVkU2lnbmF0dXJlLmRhdGEgPSBjb21wLmRhdGEuZGF0YTtcbiAgICAgICAgaWYgKGNvbXAuZGF0YS5wcm9wcykge1xuICAgICAgICAgIGFkZGVkU2lnbmF0dXJlLnByb3BzID0gY29tcC5kYXRhLnByb3BzO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGFkZGVkU2lnbmF0dXJlLndpZHRoID0gY29tcC5kYXRhLndpZHRoO1xuICAgICAgICAgIGFkZGVkU2lnbmF0dXJlLmhlaWdodCA9IGNvbXAuZGF0YS5oZWlnaHQ7XG4gICAgICAgIH1cbiAgICAgICAgZm9yIChjb25zdCBwYWdlIG9mIHRoaXMuZmlsZS5wYWdlcykge1xuICAgICAgICAgIGlmIChwYWdlLm51bWJlciAhPT0gY29tcFBhZ2UpIHtcbiAgICAgICAgICAgIGFkZGVkU2lnbmF0dXJlLm51bWJlciA9IHBhZ2UubnVtYmVyO1xuICAgICAgICAgICAgc2lnbi5wYWdlTnVtYmVyID0gcGFnZS5udW1iZXI7XG4gICAgICAgICAgICBjb25zdCBpZCA9IHRoaXMuYWRkU2lnbmF0dXJlQ29tcG9uZW50KGFkZGVkU2lnbmF0dXJlLCBzaWduLCBwYWdlKTtcbiAgICAgICAgICAgIHRoaXMuX3NpZ25hdHVyZXNIb2xkZXJTZXJ2aWNlLmFkZElkKHNpZ24uZ3VpZCwgaWQpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pO1xuXG4gICAgY29weVNpZ25hdHVyZVNlcnZpY2UuY2hhbmdlc1NpZ25hdHVyZS5zdWJzY3JpYmUoKGNvcHlDaGFuZ2VzOiBDb3B5Q2hhbmdlcykgPT4ge1xuICAgICAgY29uc3QgY29tcG9uZW50UmVmID0gdGhpcy5zaWduYXR1cmVDb21wb25lbnRzLmdldChjb3B5Q2hhbmdlcy5pZCk7XG4gICAgICBpZiAoY29tcG9uZW50UmVmKSB7XG4gICAgICAgIGNvbnN0IGlkcyA9IHRoaXMuX3NpZ25hdHVyZXNIb2xkZXJTZXJ2aWNlLmdldChjb3B5Q2hhbmdlcy5ndWlkKTtcbiAgICAgICAgZm9yIChjb25zdCBpZCBvZiBpZHMpIHtcbiAgICAgICAgICBjb25zdCBjb21wUmVmID0gdGhpcy5zaWduYXR1cmVDb21wb25lbnRzLmdldChpZCk7XG4gICAgICAgICAgaWYgKGNvbXBSZWYpIHtcbiAgICAgICAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgICAgICAgIGNvbnN0IGNvbXAgPSAoPFNpZ25hdHVyZT5jb21wUmVmKS5pbnN0YW5jZTtcbiAgICAgICAgICAgIGlmIChjb21wLmlkICE9PSBjb3B5Q2hhbmdlcy5pZCkge1xuICAgICAgICAgICAgICBjb21wLmRhdGEud2lkdGggPSBjb3B5Q2hhbmdlcy53aWR0aDtcbiAgICAgICAgICAgICAgY29tcC5kYXRhLmhlaWdodCA9IGNvcHlDaGFuZ2VzLmhlaWdodDtcbiAgICAgICAgICAgICAgY29tcC5kYXRhLnBvc2l0aW9uID0gY29weUNoYW5nZXMucG9zaXRpb247XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICByZW1vdmVTaWduYXR1cmVTZXJ2aWNlLnJlbW92ZVNpZ25hdHVyZS5zdWJzY3JpYmUoKGRlbDogUmVtb3ZlU2lnbikgPT4ge1xuICAgICAgY29uc3QgaWRzID0gdGhpcy5fc2lnbmF0dXJlc0hvbGRlclNlcnZpY2UuZ2V0KGRlbC5ndWlkKTtcbiAgICAgIGZvciAoY29uc3QgaWQgb2YgaWRzKSB7XG4gICAgICAgIGlmIChkZWwudHlwZSA9PT0gU2lnbmF0dXJlVHlwZS5ESUdJVEFMLmlkIHx8IGRlbC5pZCA9PT0gaWQpIHtcbiAgICAgICAgICBjb25zdCBjb21wb25lbnRSZWYgPSB0aGlzLnNpZ25hdHVyZUNvbXBvbmVudHMuZ2V0KGlkKTtcbiAgICAgICAgICBpZiAoY29tcG9uZW50UmVmKSB7XG4gICAgICAgICAgICBjb21wb25lbnRSZWYuZGVzdHJveSgpO1xuICAgICAgICAgIH1cbiAgICAgICAgICB0aGlzLnNpZ25hdHVyZUNvbXBvbmVudHMuZGVsZXRlKGlkKTtcbiAgICAgICAgICB0aGlzLl9zaWduYXR1cmVzSG9sZGVyU2VydmljZS5yZW1vdmUoZGVsLmd1aWQsIGlkKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pO1xuXG4gICAgY29uZmlnU2VydmljZS51cGRhdGVkQ29uZmlnLnN1YnNjcmliZSgoc2lnbmF0dXJlQ29uZmlnKSA9PiB7XG4gICAgICB0aGlzLnNpZ25hdHVyZUNvbmZpZyA9IHNpZ25hdHVyZUNvbmZpZztcbiAgICB9KTtcblxuICAgIHVwbG9hZEZpbGVzU2VydmljZS51cGxvYWRzQ2hhbmdlLnN1YnNjcmliZSgodXBsb2FkcykgPT4ge1xuICAgICAgaWYgKHVwbG9hZHMpIHtcbiAgICAgICAgbGV0IGk6IG51bWJlcjtcbiAgICAgICAgZm9yIChpID0gMDsgaSA8IHVwbG9hZHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICB0aGlzLl9zaWduYXR1cmVTZXJ2aWNlLnVwbG9hZCh1cGxvYWRzLml0ZW0oaSksICcnLCB0aGlzLnJld3JpdGVDb25maWcsIG51bGwpLnN1YnNjcmliZSgob2JqOiBGaWxlQ3JlZGVudGlhbHMpID0+IHtcbiAgICAgICAgICAgIHRoaXMuZmlsZVdhc0Ryb3BwZWQgPyB0aGlzLnNlbGVjdEZpbGUob2JqLmd1aWQsICcnLCAnJykgOiB0aGlzLnNlbGVjdERpcignJyk7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHBhZ2VQcmVsb2FkU2VydmljZS5jaGVja1ByZWxvYWQuc3Vic2NyaWJlKChwYWdlOiBudW1iZXIpID0+IHtcbiAgICAgIGlmICh0aGlzLnByZWxvYWRQYWdlQ291bnRDb25maWcgIT09IDApIHtcbiAgICAgICAgZm9yIChsZXQgaSA9IHBhZ2U7IGkgPCBwYWdlICsgMjsgaSsrKSB7XG4gICAgICAgICAgaWYgKGkgPiAwICYmIGkgPD0gdGhpcy5jb3VudFBhZ2VzICYmICF0aGlzLmZpbGUucGFnZXNbaSAtIDFdLmRhdGEpIHtcbiAgICAgICAgICAgIHRoaXMucHJlbG9hZFBhZ2VzKGksIGkpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pO1xuXG4gICAgcGFzc3dvcmRTZXJ2aWNlLnBhc3NDaGFuZ2Uuc3Vic2NyaWJlKChwYXNzOiBzdHJpbmcpID0+IHtcbiAgICAgIHRoaXMuc2VsZWN0RmlsZSh0aGlzLmNyZWRlbnRpYWxzLmd1aWQsIHBhc3MsIENvbW1vbk1vZGFscy5QYXNzd29yZFJlcXVpcmVkKTtcbiAgICB9KTtcblxuICAgIF9zZWxlY3RTaWduYXR1cmVTZXJ2aWNlLnNlbGVjdFNpZ25hdHVyZS5zdWJzY3JpYmUoKHNpZ246IERyYWdnYWJsZVNpZ25hdHVyZSkgPT4ge1xuICAgICAgdGhpcy5zZWxlY3RTaWduYXR1cmUoc2lnbik7XG4gICAgfSk7XG5cbiAgICB0aGlzLmlzRGVza3RvcCA9IF93aW5kb3dTZXJ2aWNlLmlzRGVza3RvcCgpO1xuICAgIF93aW5kb3dTZXJ2aWNlLm9uUmVzaXplLnN1YnNjcmliZSgodykgPT4ge1xuICAgICAgdGhpcy5pc0Rlc2t0b3AgPSBfd2luZG93U2VydmljZS5pc0Rlc2t0b3AoKTtcbiAgICB9KTtcblxuICB9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuZGVmYXVsdERvY3VtZW50Q29uZmlnKCkpIHtcbiAgICAgIHRoaXMuaXNMb2FkaW5nID0gdHJ1ZTtcbiAgICAgIHRoaXMuc2VsZWN0RmlsZSh0aGlzLmRlZmF1bHREb2N1bWVudENvbmZpZygpLCBcIlwiLCBcIlwiKTtcbiAgICB9XG4gIH1cblxuICBnZXQgcmV3cml0ZUNvbmZpZygpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5zaWduYXR1cmVDb25maWcgPyB0aGlzLnNpZ25hdHVyZUNvbmZpZy5yZXdyaXRlIDogdHJ1ZTtcbiAgfVxuXG4gIGdldCB6b29tQ29uZmlnKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIGdldCBwYWdlU2VsZWN0b3JDb25maWcoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuc2lnbmF0dXJlQ29uZmlnID8gdGhpcy5zaWduYXR1cmVDb25maWcucGFnZVNlbGVjdG9yIDogdHJ1ZTtcbiAgfVxuXG4gIGdldCBwcmVsb2FkUGFnZUNvdW50Q29uZmlnKCk6IG51bWJlciB7XG4gICAgcmV0dXJuIHRoaXMuc2lnbmF0dXJlQ29uZmlnID8gdGhpcy5zaWduYXR1cmVDb25maWcucHJlbG9hZFBhZ2VDb3VudCA6IDA7XG4gIH1cblxuICBnZXQgZG93bmxvYWRDb25maWcoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuc2lnbmF0dXJlQ29uZmlnID8gdGhpcy5zaWduYXR1cmVDb25maWcuZG93bmxvYWQgOiB0cnVlO1xuICB9XG5cbiAgZ2V0IGRvd25sb2FkT3JpZ2luYWxDb25maWcoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuc2lnbmF0dXJlQ29uZmlnID8gdGhpcy5zaWduYXR1cmVDb25maWcuZG93bmxvYWRPcmlnaW5hbCA6IHRydWU7XG4gIH1cblxuICBnZXQgZG93bmxvYWRTaW5nZWRDb25maWcoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuc2lnbmF0dXJlQ29uZmlnID8gdGhpcy5zaWduYXR1cmVDb25maWcuZG93bmxvYWRTaWduZWQgOiB0cnVlO1xuICB9XG5cbiAgZ2V0IHVwbG9hZENvbmZpZygpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5zaWduYXR1cmVDb25maWcgPyB0aGlzLnNpZ25hdHVyZUNvbmZpZy51cGxvYWQgOiB0cnVlO1xuICB9XG5cbiAgcHJpdmF0ZSBkZWZhdWx0RG9jdW1lbnRDb25maWcoKSB7XG4gICAgcmV0dXJuIHRoaXMuc2lnbmF0dXJlQ29uZmlnID8gdGhpcy5zaWduYXR1cmVDb25maWcuZGVmYXVsdERvY3VtZW50IDogXCJcIjtcbiAgfVxuXG4gIGdldCBwcmludENvbmZpZygpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5zaWduYXR1cmVDb25maWcgPyB0aGlzLnNpZ25hdHVyZUNvbmZpZy5wcmludCA6IHRydWU7XG4gIH1cblxuICBnZXQgYnJvd3NlQ29uZmlnKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLnNpZ25hdHVyZUNvbmZpZyA/IHRoaXMuc2lnbmF0dXJlQ29uZmlnLmJyb3dzZSA6IHRydWU7XG4gIH1cblxuICBnZXQgaHRtbE1vZGVDb25maWcoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgZ2V0IGVuYWJsZVJpZ2h0Q2xpY2tDb25maWcoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuc2lnbmF0dXJlQ29uZmlnID8gdGhpcy5zaWduYXR1cmVDb25maWcuZW5hYmxlUmlnaHRDbGljayA6IHRydWU7XG4gIH1cblxuICBnZXQgdGV4dFNpZ25hdHVyZUNvbmZpZygpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5zaWduYXR1cmVDb25maWcgPyB0aGlzLnNpZ25hdHVyZUNvbmZpZy50ZXh0U2lnbmF0dXJlIDogdHJ1ZTtcbiAgfVxuXG4gIGdldCBpbWFnZVNpZ25hdHVyZUNvbmZpZygpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5zaWduYXR1cmVDb25maWcgPyB0aGlzLnNpZ25hdHVyZUNvbmZpZy5pbWFnZVNpZ25hdHVyZSA6IHRydWU7XG4gIH1cblxuICBnZXQgZGlnaXRhbFNpZ25hdHVyZUNvbmZpZygpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5zaWduYXR1cmVDb25maWcgPyB0aGlzLnNpZ25hdHVyZUNvbmZpZy5kaWdpdGFsU2lnbmF0dXJlIDogdHJ1ZTtcbiAgfVxuXG4gIGdldCBxckNvZGVTaWduYXR1cmVDb25maWcoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuc2lnbmF0dXJlQ29uZmlnID8gdGhpcy5zaWduYXR1cmVDb25maWcucXJDb2RlU2lnbmF0dXJlIDogdHJ1ZTtcbiAgfVxuXG4gIGdldCBiYXJDb2RlU2lnbmF0dXJlQ29uZmlnKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLnNpZ25hdHVyZUNvbmZpZyA/IHRoaXMuc2lnbmF0dXJlQ29uZmlnLmJhckNvZGVTaWduYXR1cmUgOiB0cnVlO1xuICB9XG5cbiAgZ2V0IHN0YW1wU2lnbmF0dXJlQ29uZmlnKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLnNpZ25hdHVyZUNvbmZpZyA/IHRoaXMuc2lnbmF0dXJlQ29uZmlnLnN0YW1wU2lnbmF0dXJlIDogdHJ1ZTtcbiAgfVxuXG4gIGdldCBoYW5kU2lnbmF0dXJlQ29uZmlnKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLnNpZ25hdHVyZUNvbmZpZyA/IHRoaXMuc2lnbmF0dXJlQ29uZmlnLmhhbmRTaWduYXR1cmUgOiB0cnVlO1xuICB9XG5cbiAgZ2V0IGN1cnJlbnRQYWdlKCk6IG51bWJlciB7XG4gICAgcmV0dXJuIHRoaXMuX25hdmlnYXRlU2VydmljZS5jdXJyZW50UGFnZTtcbiAgfVxuXG4gIG9wZW5Nb2RhbChpZDogc3RyaW5nKSB7XG4gICAgdGhpcy5fbW9kYWxTZXJ2aWNlLm9wZW4oaWQpO1xuICB9XG5cbiAgY2xvc2VNb2RhbChpZDogc3RyaW5nKSB7XG4gICAgdGhpcy5fbW9kYWxTZXJ2aWNlLmNsb3NlKGlkKTtcbiAgfVxuXG4gIHNlbGVjdERpcigkZXZlbnQ6IHN0cmluZykge1xuICAgIHRoaXMuX3NpZ25hdHVyZVNlcnZpY2UubG9hZEZpbGVzKCRldmVudCkuc3Vic2NyaWJlKChmaWxlczogRmlsZU1vZGVsW10pID0+IHRoaXMuZmlsZXMgPSBmaWxlcyB8fCBbXSk7XG4gIH1cblxuICBzZWxlY3RGaWxlKCRldmVudDogc3RyaW5nLCBwYXNzd29yZDogc3RyaW5nLCBtb2RhbElkOiBzdHJpbmcpIHtcbiAgICB0aGlzLmNyZWRlbnRpYWxzID0ge2d1aWQ6ICRldmVudCwgcGFzc3dvcmQ6IHBhc3N3b3JkfTtcbiAgICB0aGlzLmZpbGUgPSBudWxsO1xuICAgIHRoaXMuX3NpZ25hdHVyZVNlcnZpY2UubG9hZEZpbGUodGhpcy5jcmVkZW50aWFscykuc3Vic2NyaWJlKChmaWxlOiBGaWxlRGVzY3JpcHRpb24pID0+IHtcbiAgICAgICAgdGhpcy5maWxlID0gZmlsZTtcbiAgICAgICAgdGhpcy5mb3JtYXREaXNhYmxlZCA9ICF0aGlzLmZpbGU7XG4gICAgICAgIGlmIChmaWxlKSB7XG4gICAgICAgICAgY29uc3QgcHJlbG9hZFBhZ2VDb3VudCA9IHRoaXMucHJlbG9hZFBhZ2VDb3VudENvbmZpZztcbiAgICAgICAgICBjb25zdCBjb3VudFBhZ2VzID0gZmlsZS5wYWdlcyA/IGZpbGUucGFnZXMubGVuZ3RoIDogMDtcbiAgICAgICAgICBpZiAocHJlbG9hZFBhZ2VDb3VudCA+IDApIHtcbiAgICAgICAgICAgIHRoaXMucHJlbG9hZFBhZ2VzKDEsIHByZWxvYWRQYWdlQ291bnQgPiBjb3VudFBhZ2VzID8gY291bnRQYWdlcyA6IHByZWxvYWRQYWdlQ291bnQpO1xuICAgICAgICAgIH1cbiAgICAgICAgICB0aGlzLl9uYXZpZ2F0ZVNlcnZpY2UuY291bnRQYWdlcyA9IGNvdW50UGFnZXM7XG4gICAgICAgICAgdGhpcy5fbmF2aWdhdGVTZXJ2aWNlLmN1cnJlbnRQYWdlID0gMTtcbiAgICAgICAgICB0aGlzLmNvdW50UGFnZXMgPSBjb3VudFBhZ2VzO1xuICAgICAgICAgIHRoaXMuY2xlYW5TaWduYXR1cmVzKCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICApO1xuICAgIGlmIChtb2RhbElkKSB7XG4gICAgICB0aGlzLl9tb2RhbFNlcnZpY2UuY2xvc2UobW9kYWxJZCk7XG4gICAgfVxuICAgIHRoaXMuY2xlYXJEYXRhKCk7XG4gIH1cblxuICBwcmVsb2FkUGFnZXMoc3RhcnQ6IG51bWJlciwgZW5kOiBudW1iZXIpIHtcbiAgICBmb3IgKGxldCBpID0gc3RhcnQ7IGkgPD0gZW5kOyBpKyspIHtcbiAgICAgIHRoaXMuX3NpZ25hdHVyZVNlcnZpY2UubG9hZFBhZ2UodGhpcy5jcmVkZW50aWFscywgaSkuc3Vic2NyaWJlKChwYWdlOiBQYWdlTW9kZWwpID0+IHtcbiAgICAgICAgdGhpcy5maWxlLnBhZ2VzW2kgLSAxXSA9IHBhZ2U7XG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICB1cGxvYWQoJGV2ZW50OiBzdHJpbmcpIHtcbiAgICB0aGlzLl9zaWduYXR1cmVTZXJ2aWNlLnVwbG9hZChudWxsLCAkZXZlbnQsIHRoaXMucmV3cml0ZUNvbmZpZywgbnVsbCkuc3Vic2NyaWJlKCgpID0+IHtcbiAgICAgIHRoaXMuc2VsZWN0RGlyKCcnKTtcbiAgICB9KTtcbiAgfVxuXG4gIGRvd25sb2FkRmlsZSgpIHtcbiAgICBpZiAodGhpcy5mb3JtYXREaXNhYmxlZClcbiAgICAgIHJldHVybjtcbiAgICB3aW5kb3cubG9jYXRpb24uYXNzaWduKHRoaXMuX3NpZ25hdHVyZVNlcnZpY2UuZ2V0RG93bmxvYWRVcmwodGhpcy5jcmVkZW50aWFscykpO1xuICB9XG5cbiAgcHJpdmF0ZSBjbGVhckRhdGEoKSB7XG4gICAgaWYgKCF0aGlzLmZpbGUgfHwgIXRoaXMuZmlsZS5wYWdlcykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBmb3IgKGNvbnN0IHBhZ2Ugb2YgdGhpcy5maWxlLnBhZ2VzKSB7XG4gICAgICBwYWdlLmRhdGEgPSBudWxsO1xuICAgIH1cbiAgfVxuXG4gIG9uUmlnaHRDbGljaygkZXZlbnQ6IE1vdXNlRXZlbnQpIHtcbiAgICByZXR1cm4gdGhpcy5lbmFibGVSaWdodENsaWNrQ29uZmlnO1xuICB9XG5cbiAgZ2V0U2lnbmF0dXJlVHlwZUNvbmZpZyhpZDogc3RyaW5nKSB7XG4gICAgc3dpdGNoIChpZCkge1xuICAgICAgY2FzZSBTaWduYXR1cmVUeXBlLlRFWFQuaWQ6XG4gICAgICAgIHJldHVybiB0aGlzLnRleHRTaWduYXR1cmVDb25maWc7XG4gICAgICBjYXNlIFNpZ25hdHVyZVR5cGUuSU1BR0UuaWQ6XG4gICAgICAgIHJldHVybiB0aGlzLmltYWdlU2lnbmF0dXJlQ29uZmlnO1xuICAgICAgY2FzZSBTaWduYXR1cmVUeXBlLkRJR0lUQUwuaWQ6XG4gICAgICAgIHJldHVybiB0aGlzLmRpZ2l0YWxTaWduYXR1cmVDb25maWc7XG4gICAgICBjYXNlIFNpZ25hdHVyZVR5cGUuUVJfQ09ERS5pZDpcbiAgICAgICAgcmV0dXJuIHRoaXMucXJDb2RlU2lnbmF0dXJlQ29uZmlnO1xuICAgICAgY2FzZSBTaWduYXR1cmVUeXBlLkJBUl9DT0RFLmlkOlxuICAgICAgICByZXR1cm4gdGhpcy5iYXJDb2RlU2lnbmF0dXJlQ29uZmlnO1xuICAgICAgY2FzZSBTaWduYXR1cmVUeXBlLlNUQU1QLmlkOlxuICAgICAgICByZXR1cm4gdGhpcy5zdGFtcFNpZ25hdHVyZUNvbmZpZztcbiAgICAgIGNhc2UgU2lnbmF0dXJlVHlwZS5IQU5ELmlkOlxuICAgICAgICByZXR1cm4gdGhpcy5oYW5kU2lnbmF0dXJlQ29uZmlnO1xuICAgIH1cbiAgfVxuXG4gIGRyYWdPdmVyKCRldmVudDogRHJhZ0V2ZW50KSB7XG4gICAgJGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgJGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICB9XG5cbiAgZHJvcFNpZ25hdHVyZSgkZXZlbnQ6IERyYWdFdmVudCkge1xuICAgICRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICRldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICBjb25zdCBwb3NpdGlvbiA9IFV0aWxzLmdldE1vdXNlUG9zaXRpb24oJGV2ZW50KTtcblxuICAgIGNvbnN0IGN1cnJlbnRQYWdlID0gZG9jdW1lbnQuZWxlbWVudEZyb21Qb2ludChwb3NpdGlvbi54LCBwb3NpdGlvbi55KTtcbiAgICBpZiAoY3VycmVudFBhZ2UgJiYgJChjdXJyZW50UGFnZSkucGFyZW50KCkucGFyZW50KCkgJiYgJChjdXJyZW50UGFnZSkucGFyZW50KCkucGFyZW50KCkucGFyZW50KCkuaGFzQ2xhc3MoXCJwYWdlXCIpKSB7XG4gICAgICBjb25zdCBkb2N1bWVudFBhZ2UgPSAkKGN1cnJlbnRQYWdlKS5wYXJlbnQoKS5wYXJlbnQoKVswXTtcbiAgICAgIGNvbnN0IGxlZnQgPSBwb3NpdGlvbi54IC0gJChkb2N1bWVudFBhZ2UpLm9mZnNldCgpLmxlZnQ7XG4gICAgICBjb25zdCB0b3AgPSBwb3NpdGlvbi55IC0gJChkb2N1bWVudFBhZ2UpLm9mZnNldCgpLnRvcDtcbiAgICAgIGNvbnN0IGN1cnJlbnRQb3NpdGlvbiA9IG5ldyBQb3NpdGlvbihsZWZ0LCB0b3ApO1xuICAgICAgY29uc3Qgc2lnbiA9IHRoaXMuX2RyYWdTaWduYXR1cmVTZXJ2aWNlLnNpZ247XG4gICAgICBpZiAoc2lnbikge1xuICAgICAgICBzaWduLnBvc2l0aW9uID0gY3VycmVudFBvc2l0aW9uO1xuICAgICAgICB0aGlzLnNlbGVjdFNpZ25hdHVyZShzaWduKTtcbiAgICAgICAgdGhpcy5fZHJhZ1NpZ25hdHVyZVNlcnZpY2Uuc2lnbiA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBzZWxlY3RTaWduYXR1cmUoc2lnbjogRHJhZ2dhYmxlU2lnbmF0dXJlKSB7XG4gICAgaWYgKHNpZ24udHlwZSA9PT0gU2lnbmF0dXJlVHlwZS5ESUdJVEFMLmlkKSB7XG4gICAgICBjb25zdCBhZGRlZFNpZ25hdHVyZSA9IG5ldyBBZGRlZFNpZ25hdHVyZSgpO1xuICAgICAgYWRkZWRTaWduYXR1cmUuZGlnaXRhbFByb3BzID0gc2lnbi5kaWdpdGFsUHJvcHM7XG4gICAgICBhZGRlZFNpZ25hdHVyZS5ndWlkID0gc2lnbi5ndWlkO1xuICAgICAgYWRkZWRTaWduYXR1cmUubnVtYmVyID0gc2lnbi5wYWdlTnVtYmVyO1xuICAgICAgZm9yIChjb25zdCBwYWdlIG9mIHRoaXMuZmlsZS5wYWdlcykge1xuICAgICAgICBjb25zdCBpZCA9IHRoaXMuYWRkU2lnbmF0dXJlQ29tcG9uZW50KGFkZGVkU2lnbmF0dXJlLCBzaWduLCBwYWdlKTtcbiAgICAgICAgdGhpcy5fc2lnbmF0dXJlc0hvbGRlclNlcnZpY2UuYWRkSWQoc2lnbi5ndWlkLCBpZCk7XG4gICAgICB9XG4gICAgICB0aGlzLmNsb3NlVGFiKHNpZ24udHlwZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuX3NpZ25hdHVyZVNlcnZpY2UubG9hZFNpZ25hdHVyZUltYWdlKHNpZ24pLnN1YnNjcmliZSgoc2lnbmF0dXJlOiBBZGRlZFNpZ25hdHVyZSkgPT4ge1xuICAgICAgICBzaWduYXR1cmUubnVtYmVyID0gc2lnbi5wYWdlTnVtYmVyO1xuICAgICAgICBjb25zdCBwYWdlTW9kZWwgPSB0aGlzLmZpbGUucGFnZXMuZmluZChmdW5jdGlvbiAocCkge1xuICAgICAgICAgIHJldHVybiBwLm51bWJlciA9PT0gc2lnbi5wYWdlTnVtYmVyO1xuICAgICAgICB9KTtcbiAgICAgICAgY29uc3QgaWQgPSB0aGlzLmFkZFNpZ25hdHVyZUNvbXBvbmVudChzaWduYXR1cmUsIHNpZ24sIHBhZ2VNb2RlbCk7XG4gICAgICAgIHRoaXMuX3NpZ25hdHVyZXNIb2xkZXJTZXJ2aWNlLmFkZElkKHNpZ24uZ3VpZCwgaWQpO1xuICAgICAgICB0aGlzLmNsb3NlVGFiKHNpZ24udHlwZSk7XG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIGFkZFNpZ25hdHVyZUNvbXBvbmVudChhZGRlZFNpZ25hdHVyZTogQWRkZWRTaWduYXR1cmUsIHNpZ246IERyYWdnYWJsZVNpZ25hdHVyZSwgcGFnZTogUGFnZU1vZGVsKSB7XG4gICAgY29uc3QgZHluYW1pY0RpcmVjdGl2ZSA9IHRoaXMuX2hvc3RpbmdDb21wb25lbnRzU2VydmljZS5maW5kKHBhZ2UubnVtYmVyKTtcbiAgICBpZiAoZHluYW1pY0RpcmVjdGl2ZSkge1xuICAgICAgY29uc3Qgdmlld0NvbnRhaW5lclJlZiA9IGR5bmFtaWNEaXJlY3RpdmUudmlld0NvbnRhaW5lclJlZjtcbiAgICAgIGNvbnN0IHNlbGVjdFNpZ25hdHVyZSA9IHRoaXMuX2FkZER5bmFtaWNDb21wb25lbnRTZXJ2aWNlLmFkZER5bmFtaWNDb21wb25lbnQodmlld0NvbnRhaW5lclJlZiwgU2lnbmF0dXJlKTtcbiAgICAgIGNvbnN0IGlkID0gdGhpcy5zaWduYXR1cmVDb21wb25lbnRzLnNpemUgKyAxO1xuICAgICAgaWYgKGFkZGVkU2lnbmF0dXJlLndpZHRoID49IHBhZ2Uud2lkdGgpIHtcbiAgICAgICAgYWRkZWRTaWduYXR1cmUud2lkdGggPSBwYWdlLndpZHRoIC8gMjtcbiAgICAgIH1cbiAgICAgIGlmIChhZGRlZFNpZ25hdHVyZS5oZWlnaHQgPj0gcGFnZS5oZWlnaHQpIHtcbiAgICAgICAgYWRkZWRTaWduYXR1cmUuaGVpZ2h0ID0gcGFnZS5oZWlnaHQgLyAyO1xuICAgICAgfVxuICAgICAgKDxTaWduYXR1cmU+c2VsZWN0U2lnbmF0dXJlLmluc3RhbmNlKS5pZCA9IGlkO1xuICAgICAgKDxTaWduYXR1cmU+c2VsZWN0U2lnbmF0dXJlLmluc3RhbmNlKS5kYXRhID0gYWRkZWRTaWduYXR1cmU7XG4gICAgICAoPFNpZ25hdHVyZT5zZWxlY3RTaWduYXR1cmUuaW5zdGFuY2UpLnBvc2l0aW9uID0gc2lnbi5wb3NpdGlvbjtcbiAgICAgICg8U2lnbmF0dXJlPnNlbGVjdFNpZ25hdHVyZS5pbnN0YW5jZSkudHlwZSA9IHNpZ24udHlwZTtcbiAgICAgICg8U2lnbmF0dXJlPnNlbGVjdFNpZ25hdHVyZS5pbnN0YW5jZSkucGFnZVdpZHRoID0gcGFnZS53aWR0aDtcbiAgICAgICg8U2lnbmF0dXJlPnNlbGVjdFNpZ25hdHVyZS5pbnN0YW5jZSkucGFnZUhlaWdodCA9IHBhZ2UuaGVpZ2h0O1xuICAgICAgdGhpcy5zaWduYXR1cmVDb21wb25lbnRzLnNldChpZCwgc2VsZWN0U2lnbmF0dXJlKTtcbiAgICAgIHRoaXMuX2FjdGl2ZVNpZ25hdHVyZVNlcnZpY2UuY2hhbmdlQWN0aXZlKGlkKTtcbiAgICAgIHJldHVybiBpZDtcbiAgICB9XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICBwcml2YXRlIGNsb3NlVGFiKHR5cGU6IHN0cmluZykge1xuICAgIHRoaXMuX3NpZ25hdHVyZVRhYkFjdGl2YXRpb25TZXJ2aWNlLmNoYW5nZUFjdGl2ZVRhYih0eXBlKTtcbiAgfVxuXG4gIGhpZGVBbGwoJGV2ZW50KSB7XG4gICAgaWYgKCgkZXZlbnQudGFyZ2V0LnBhcmVudEVsZW1lbnQgJiYgJGV2ZW50LnRhcmdldC5wYXJlbnRFbGVtZW50LmF0dHJpYnV0ZXNbJ25hbWUnXSAmJlxuICAgICAgJGV2ZW50LnRhcmdldC5wYXJlbnRFbGVtZW50LmF0dHJpYnV0ZXNbJ25hbWUnXS52YWx1ZSA9PT0gJ2J1dHRvbicpIHx8XG4gICAgICAoJGV2ZW50LnRhcmdldC5wYXJlbnRFbGVtZW50ICYmXG4gICAgICAgICRldmVudC50YXJnZXQucGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50ICYmXG4gICAgICAgICRldmVudC50YXJnZXQucGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50LmF0dHJpYnV0ZXNbJ25hbWUnXSAmJlxuICAgICAgICAkZXZlbnQudGFyZ2V0LnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudC5hdHRyaWJ1dGVzWyduYW1lJ10udmFsdWUgPT09ICdidXR0b24nKSB8fFxuICAgICAgKCRldmVudC50YXJnZXQucGFyZW50RWxlbWVudCAmJlxuICAgICAgICAkZXZlbnQudGFyZ2V0LnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudCAmJlxuICAgICAgICAkZXZlbnQudGFyZ2V0LnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50ICYmXG4gICAgICAgICRldmVudC50YXJnZXQucGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudCAmJlxuICAgICAgICAkZXZlbnQudGFyZ2V0LnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQuYXR0cmlidXRlc1snbmFtZSddICYmXG4gICAgICAgICRldmVudC50YXJnZXQucGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudC5hdHRyaWJ1dGVzWyduYW1lJ10udmFsdWUgPT09ICdidXR0b24nKSkge1xuXG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHRoaXMuX29uQ2xvc2VTZXJ2aWNlLmNsb3NlKHRydWUpO1xuICB9XG5cbiAgbmV3U2lnbigkZXZlbnQ6IHN0cmluZykge1xuICAgIGlmIChTaWduYXR1cmVUeXBlLkhBTkQuaWQgPT09ICRldmVudCkge1xuICAgICAgdGhpcy5fbW9kYWxTZXJ2aWNlLm9wZW4oQ29tbW9uTW9kYWxzLkRyYXdIYW5kU2lnbmF0dXJlKTtcbiAgICAgIHRoaXMuX3NpZ25hdHVyZVRhYkFjdGl2YXRpb25TZXJ2aWNlLmNoYW5nZUFjdGl2ZVRhYihTaWduYXR1cmVUeXBlLkhBTkQuaWQpO1xuICAgIH0gZWxzZSBpZiAoU2lnbmF0dXJlVHlwZS5TVEFNUC5pZCA9PT0gJGV2ZW50KSB7XG4gICAgICB0aGlzLl9tb2RhbFNlcnZpY2Uub3BlbihDb21tb25Nb2RhbHMuRHJhd1N0YW1wU2lnbmF0dXJlKTtcbiAgICAgIHRoaXMuX3NpZ25hdHVyZVRhYkFjdGl2YXRpb25TZXJ2aWNlLmNoYW5nZUFjdGl2ZVRhYihTaWduYXR1cmVUeXBlLlNUQU1QLmlkKTtcbiAgICB9IGVsc2UgaWYgKFNpZ25hdHVyZVR5cGUuVEVYVC5pZCA9PT0gJGV2ZW50KSB7XG4gICAgICB0aGlzLmFkZFRleHRTaWduKCk7XG4gICAgICB0aGlzLl9zaWduYXR1cmVUYWJBY3RpdmF0aW9uU2VydmljZS5jaGFuZ2VBY3RpdmVUYWIoU2lnbmF0dXJlVHlwZS5URVhULmlkKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIGFkZFRleHRTaWduKCkge1xuICAgIGNvbnN0IHNpZ25hdHVyZSA9IG5ldyBBZGRlZFNpZ25hdHVyZSgpO1xuICAgIHNpZ25hdHVyZS5wcm9wcyA9IFNpZ25hdHVyZVByb3BzLmdldERlZmF1bHQoKTtcbiAgICBzaWduYXR1cmUuZ3VpZCA9IERyYWdnYWJsZVNpZ25hdHVyZS5URU1QO1xuICAgIGNvbnN0IHNpZ24gPSBuZXcgRHJhZ2dhYmxlU2lnbmF0dXJlKCk7XG4gICAgc2lnbi5ndWlkID0gRHJhZ2dhYmxlU2lnbmF0dXJlLlRFTVA7XG4gICAgc2lnbi5wb3NpdGlvbiA9IG5ldyBQb3NpdGlvbigwLCAwKTtcbiAgICBzaWduLnR5cGUgPSBTaWduYXR1cmVUeXBlLlRFWFQuaWQ7XG4gICAgY29uc3QgcGFnZU51bWJlciA9IHRoaXMuX25hdmlnYXRlU2VydmljZS5jdXJyZW50UGFnZTtcbiAgICBzaWduYXR1cmUubnVtYmVyID0gcGFnZU51bWJlcjtcbiAgICBzaWduLnBhZ2VOdW1iZXIgPSBwYWdlTnVtYmVyO1xuICAgIGNvbnN0IHBhZ2VNb2RlbCA9IHRoaXMuZmlsZS5wYWdlcy5maW5kKGZ1bmN0aW9uIChwKSB7XG4gICAgICByZXR1cm4gcC5udW1iZXIgPT09IHBhZ2VOdW1iZXI7XG4gICAgfSk7XG4gICAgY29uc3QgaWQgPSB0aGlzLmFkZFNpZ25hdHVyZUNvbXBvbmVudChzaWduYXR1cmUsIHNpZ24sIHBhZ2VNb2RlbCk7XG4gICAgdGhpcy5fc2lnbmF0dXJlc0hvbGRlclNlcnZpY2UuYWRkSWQoc2lnbi5ndWlkLCBpZCk7XG4gIH1cblxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICB0aGlzLmNsZWFuU2lnbmF0dXJlcygpO1xuICB9XG5cbiAgcHJpdmF0ZSBjbGVhblNpZ25hdHVyZXMoKSB7XG4gICAgZm9yIChjb25zdCBjb21wb25lbnRSZWYgb2YgdGhpcy5zaWduYXR1cmVDb21wb25lbnRzLnZhbHVlcygpKSB7XG4gICAgICBjb21wb25lbnRSZWYuZGVzdHJveSgpO1xuICAgIH1cbiAgICB0aGlzLnNpZ25hdHVyZUNvbXBvbmVudHMgPSBuZXcgTWFwPG51bWJlciwgQ29tcG9uZW50UmVmPGFueT4+KCk7XG4gICAgdGhpcy5fc2lnbmF0dXJlc0hvbGRlclNlcnZpY2UuY2xlYXIoKTtcbiAgfVxuXG4gIHNpZ24oKSB7XG4gICAgY29uc3Qgc2lnbmF0dXJlcyA9IHRoaXMucHJlcGFyZVNpZ25hdHVyZXNEYXRhKCk7XG4gICAgdGhpcy5fc2lnbmF0dXJlU2VydmljZS5zaWduKHRoaXMuY3JlZGVudGlhbHMsIHNpZ25hdHVyZXMpLnN1YnNjcmliZSgocmV0OiBhbnkpID0+IHtcbiAgICAgIHRoaXMuX21vZGFsU2VydmljZS5vcGVuKENvbW1vbk1vZGFscy5PcGVyYXRpb25TdWNjZXNzKTtcbiAgICAgIHRoaXMuc2VsZWN0RmlsZShyZXQuZ3VpZCwgbnVsbCwgQ29tbW9uTW9kYWxzLk9wZXJhdGlvblN1Y2Nlc3MpO1xuICAgIH0pO1xuICB9XG5cbiAgcHJpdmF0ZSBwcmVwYXJlU2lnbmF0dXJlc0RhdGEoKSB7XG4gICAgY29uc3Qgc2lnbmF0dXJlcyA9IFtdO1xuICAgIGZvciAoY29uc3QgaWRzIG9mIHRoaXMuX3NpZ25hdHVyZXNIb2xkZXJTZXJ2aWNlLnZhbHVlcygpKSB7XG4gICAgICBjb25zdCBpZCA9IGlkcy5wb3AoKTtcbiAgICAgIGNvbnN0IGNvbXBvbmVudFJlZiA9IHRoaXMuc2lnbmF0dXJlQ29tcG9uZW50cy5nZXQoaWQpO1xuICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgY29uc3Qgc2lnbiA9ICg8U2lnbmF0dXJlPmNvbXBvbmVudFJlZikuaW5zdGFuY2U7XG4gICAgICBjb25zdCBkYXRhID0gc2lnbi5kYXRhO1xuICAgICAgY29uc3QgcG9zaXRpb24gPSBzaWduLnBvc2l0aW9uO1xuICAgICAgY29uc3QgdHlwZSA9IHNpZ24udHlwZTtcblxuICAgICAgaWYgKERyYWdnYWJsZVNpZ25hdHVyZS5URU1QICE9PSBkYXRhLmd1aWQpIHtcbiAgICAgICAgc2lnbmF0dXJlcy5wdXNoKFNpZ25hdHVyZURhdGEubWFwKGRhdGEsIHR5cGUsIHBvc2l0aW9uKSk7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBzaWduYXR1cmVzO1xuICB9XG5cbiAgaXNQZGYoKSB7XG4gICAgaWYgKHRoaXMuZmlsZSkge1xuICAgICAgaWYgKEZpbGVVdGlsLmZpbmQodGhpcy5maWxlLmd1aWQsIGZhbHNlKS5mb3JtYXQgPT09IFwiUG9ydGFibGUgRG9jdW1lbnQgRm9ybWF0XCIpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIGNvZGVzQ29uZmlnKCkge1xuICAgIHJldHVybiB0aGlzLmdldFNpZ25hdHVyZVR5cGVDb25maWcoU2lnbmF0dXJlVHlwZS5CQVJfQ09ERS5pZCkgfHwgdGhpcy5nZXRTaWduYXR1cmVUeXBlQ29uZmlnKFNpZ25hdHVyZVR5cGUuUVJfQ09ERS5pZCk7XG4gIH1cblxuICBpc1Zpc2libGUoaWQ6IHN0cmluZykge1xuICAgIGNvbnN0IG5vdENvZGUgPSBpZCAhPT0gU2lnbmF0dXJlVHlwZS5CQVJfQ09ERS5pZCAmJiBpZCAhPT0gU2lnbmF0dXJlVHlwZS5RUl9DT0RFLmlkO1xuICAgIHJldHVybiB0aGlzLmdldFNpZ25hdHVyZVR5cGVDb25maWcoaWQpICYmICh0aGlzLmlzRGVza3RvcCB8fCBub3RDb2RlKTtcbiAgfVxuXG4gIGFjdGl2ZVRhYigkZXZlbnQ6IHN0cmluZykge1xuICAgIHRoaXMuYWN0aXZlU2lnbmF0dXJlVGFiID0gJGV2ZW50O1xuICB9XG5cbiAgZmlsZURyb3BwZWQoJGV2ZW50KSB7XG4gICAgdGhpcy5maWxlV2FzRHJvcHBlZCA9ICRldmVudDtcbiAgfVxufVxuIl19