(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "../../libs/common-components/src/index.ts":
/*!******************************************************************************************************!*\
  !*** /Users/pavelegorov/Documents/repos/GroupDocs.Total-Angular/libs/common-components/src/index.ts ***!
  \******************************************************************************************************/
/*! exports provided: CommonComponentsModule, Api, ConfigService, CommonModals, ModalService, PageModel, RotatedPage, FileCredentials, FileDescription, FileModel, HttpError, FileUtil, FileService, UploadFilesService, SanitizeHtmlPipe, SanitizeResourceHtmlPipe, SanitizeStylePipe, HighlightSearchPipe, NavigateService, PagePreloadService, ZoomService, RenderPrintService, ErrorInterceptorService, ExceptionMessageService, PasswordService, WindowService, ViewportService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _lib_common_components_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib/common-components.module */ "../../libs/common-components/src/lib/common-components.module.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CommonComponentsModule", function() { return _lib_common_components_module__WEBPACK_IMPORTED_MODULE_0__["CommonComponentsModule"]; });

/* harmony import */ var _lib_config_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lib/config.service */ "../../libs/common-components/src/lib/config.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Api", function() { return _lib_config_service__WEBPACK_IMPORTED_MODULE_1__["Api"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ConfigService", function() { return _lib_config_service__WEBPACK_IMPORTED_MODULE_1__["ConfigService"]; });

/* harmony import */ var _lib_modal_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./lib/modal.service */ "../../libs/common-components/src/lib/modal.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CommonModals", function() { return _lib_modal_service__WEBPACK_IMPORTED_MODULE_2__["CommonModals"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ModalService", function() { return _lib_modal_service__WEBPACK_IMPORTED_MODULE_2__["ModalService"]; });

/* harmony import */ var _lib_file_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./lib/file.service */ "../../libs/common-components/src/lib/file.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PageModel", function() { return _lib_file_service__WEBPACK_IMPORTED_MODULE_3__["PageModel"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RotatedPage", function() { return _lib_file_service__WEBPACK_IMPORTED_MODULE_3__["RotatedPage"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FileCredentials", function() { return _lib_file_service__WEBPACK_IMPORTED_MODULE_3__["FileCredentials"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FileDescription", function() { return _lib_file_service__WEBPACK_IMPORTED_MODULE_3__["FileDescription"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FileModel", function() { return _lib_file_service__WEBPACK_IMPORTED_MODULE_3__["FileModel"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "HttpError", function() { return _lib_file_service__WEBPACK_IMPORTED_MODULE_3__["HttpError"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FileUtil", function() { return _lib_file_service__WEBPACK_IMPORTED_MODULE_3__["FileUtil"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FileService", function() { return _lib_file_service__WEBPACK_IMPORTED_MODULE_3__["FileService"]; });

/* harmony import */ var _lib_upload_files_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./lib/upload-files.service */ "../../libs/common-components/src/lib/upload-files.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UploadFilesService", function() { return _lib_upload_files_service__WEBPACK_IMPORTED_MODULE_4__["UploadFilesService"]; });

/* harmony import */ var _lib_pipes__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./lib/pipes */ "../../libs/common-components/src/lib/pipes.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SanitizeHtmlPipe", function() { return _lib_pipes__WEBPACK_IMPORTED_MODULE_5__["SanitizeHtmlPipe"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SanitizeResourceHtmlPipe", function() { return _lib_pipes__WEBPACK_IMPORTED_MODULE_5__["SanitizeResourceHtmlPipe"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SanitizeStylePipe", function() { return _lib_pipes__WEBPACK_IMPORTED_MODULE_5__["SanitizeStylePipe"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "HighlightSearchPipe", function() { return _lib_pipes__WEBPACK_IMPORTED_MODULE_5__["HighlightSearchPipe"]; });

/* harmony import */ var _lib_navigate_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./lib/navigate.service */ "../../libs/common-components/src/lib/navigate.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NavigateService", function() { return _lib_navigate_service__WEBPACK_IMPORTED_MODULE_6__["NavigateService"]; });

/* harmony import */ var _lib_page_preload_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./lib/page-preload.service */ "../../libs/common-components/src/lib/page-preload.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PagePreloadService", function() { return _lib_page_preload_service__WEBPACK_IMPORTED_MODULE_7__["PagePreloadService"]; });

/* harmony import */ var _lib_zoom_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./lib/zoom.service */ "../../libs/common-components/src/lib/zoom.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ZoomService", function() { return _lib_zoom_service__WEBPACK_IMPORTED_MODULE_8__["ZoomService"]; });

/* harmony import */ var _lib_render_print_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./lib/render-print.service */ "../../libs/common-components/src/lib/render-print.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RenderPrintService", function() { return _lib_render_print_service__WEBPACK_IMPORTED_MODULE_9__["RenderPrintService"]; });

/* harmony import */ var _lib_error_interceptor_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./lib/error-interceptor.service */ "../../libs/common-components/src/lib/error-interceptor.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ErrorInterceptorService", function() { return _lib_error_interceptor_service__WEBPACK_IMPORTED_MODULE_10__["ErrorInterceptorService"]; });

/* harmony import */ var _lib_exception_message_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./lib/exception-message.service */ "../../libs/common-components/src/lib/exception-message.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ExceptionMessageService", function() { return _lib_exception_message_service__WEBPACK_IMPORTED_MODULE_11__["ExceptionMessageService"]; });

/* harmony import */ var _lib_password_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./lib/password.service */ "../../libs/common-components/src/lib/password.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PasswordService", function() { return _lib_password_service__WEBPACK_IMPORTED_MODULE_12__["PasswordService"]; });

/* harmony import */ var _lib_window_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./lib/window.service */ "../../libs/common-components/src/lib/window.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "WindowService", function() { return _lib_window_service__WEBPACK_IMPORTED_MODULE_13__["WindowService"]; });

/* harmony import */ var _lib_viewport_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./lib/viewport.service */ "../../libs/common-components/src/lib/viewport.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ViewportService", function() { return _lib_viewport_service__WEBPACK_IMPORTED_MODULE_14__["ViewportService"]; });


















/***/ }),

/***/ "../../libs/common-components/src/lib/browse-files-modal/browse-files-modal.component.html":
/*!******************************************************************************************************************************************************!*\
  !*** /Users/pavelegorov/Documents/repos/GroupDocs.Total-Angular/libs/common-components/src/lib/browse-files-modal/browse-files-modal.component.html ***!
  \******************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<gd-modal id=\"gd-browse-files\" [title]=\"'Open document'\" (visible)=\"refresh($event)\">\n  <section id=\"gd-browse-section\" gdDnd [isBackground]=\"false\" (open)=\"showUploadFile=$event\">\n    <div class=\"gd-dnd-wrap\" *ngIf=\"showUploadFile\">\n      <h2>Drag &amp; Drop your files here</h2>\n    </div>\n    <div class=\"upload-panel\" *ngIf=\"uploadConfig\">\n      <gd-choice-button [name]=\"'Upload file'\" [choices]=\"uploads\" [icon]=\"'upload'\"\n                        (selected)=\"selectUpload($event)\"></gd-choice-button>\n      <input id=\"gd-upload-input\" type=\"file\" multiple style=\"display: none;\" (change)=\"handleFileInput($event.target.files)\">\n      <div class=\"upload-url\" *ngIf=\"showUploadUrl\">\n        <input class=\"url-input\" #url (keyup.enter)=\"uploadUrl(url.value)\">\n        <div class=\"url-check\" (click)=\"uploadUrl(url.value)\">\n          <i fa [name]=\"'check'\"></i>\n        </div>\n      </div>\n    </div>\n    <div id=\"gd-modal-filebrowser\" class=\"gd-modal-table\">\n      <div class=\"list-files-header\">\n        <div class=\"header-name\">Document</div>\n        <div class=\"header-size\">Size</div>\n      </div>\n      <div class=\"list-files-body\">\n      <div class=\"go-up\" (click)=\"goUp()\">\n          <div class=\"go-up-icon\">\n            <i class=\"fa fa-level-up-alt\"></i>\n          </div>\n          <div class=\"go-up-dots\">...</div>\n      </div>\n      <div class=\"list-files-lines\" *ngFor=\"let file of files\" (click)=\"choose(file);\">\n        <div class=\"file-description\"><i fa [name]=\"getFormatIcon(file)\"></i>\n          <div class=\"file-name-format\">\n            <div class=\"file-name\">{{file?.name}}</div>\n            <div class=\"file-format\">{{getFormatName(file)}}</div>\n          </div>\n        </div>\n        <div class=\"file-size\">\n          {{getSize(file?.size)}}\n        </div>\n      </div>\n      </div>\n    </div>\n    <div id=\"gd-modal-spinner\" class=\"gd-modal-spinner\" *ngIf=\"showSpinner()\"><i\n      class=\"fa fa-circle-o-notch fa-spin\"></i> &nbsp;Loading... Please wait.\n    </div>\n  </section>\n</gd-modal>\n"

/***/ }),

/***/ "../../libs/common-components/src/lib/browse-files-modal/browse-files-modal.component.less":
/*!******************************************************************************************************************************************************!*\
  !*** /Users/pavelegorov/Documents/repos/GroupDocs.Total-Angular/libs/common-components/src/lib/browse-files-modal/browse-files-modal.component.less ***!
  \******************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".gd-modal-table {\n  width: 100%;\n  text-align: left;\n  padding-top: 20px;\n}\n.list-files-header {\n  color: #ACACAC;\n  font-size: 10px;\n  padding-left: 21px;\n}\n.header-size {\n  position: relative;\n  left: -24px;\n}\n.header-size,\n.file-size {\n  width: 10%;\n  color: #777777;\n}\n.file-size,\n.file-description {\n  font-size: 14px;\n  padding: 10px 6px;\n  margin-left: 12px;\n}\n.file-description {\n  cursor: pointer;\n  overflow: hidden;\n}\n.list-files-lines,\n.list-files-header {\n  display: flex;\n  width: 100%;\n  justify-content: space-between;\n}\n.gd-modal-spinner {\n  background-color: #ffffff;\n  width: 100%;\n  height: 20px;\n  text-align: center;\n  font-size: 16px;\n}\n.gd-cancel-button {\n  padding: 7px;\n  background: none;\n  width: 28px;\n  overflow: hidden;\n}\n.gd-cancel-button i {\n  font-size: 21px;\n}\n.gd-file-name {\n  white-space: nowrap;\n  overflow: hidden;\n  width: 100%;\n  text-overflow: ellipsis;\n}\n.go-up {\n  cursor: pointer;\n}\n.upload-panel {\n  display: flex;\n  position: relative;\n  left: 20px;\n}\n.file-description {\n  display: flex;\n}\n.file-description .fa-file-pdf {\n  color: #E21717;\n}\n.file-description .fa-file-word {\n  color: #6979B9;\n}\n.file-description .fa-file-powerpoint {\n  color: #E29417;\n}\n.file-description .fa-file-excel {\n  color: #3FA300;\n}\n.file-description .fa-file-image {\n  color: #E217DA;\n}\n.file-description .fa-file-text .fa-folder {\n  color: #5D6A75;\n}\n.file-description i {\n  font-size: 32px;\n}\n.go-up {\n  display: flex;\n  font-size: 16px;\n}\n.go-up-dots {\n  margin-left: 10px;\n  margin-top: 8px;\n  font-size: 20px;\n}\n.go-up-icon i {\n  padding: 8px;\n}\n.go-up-icon {\n  width: 30px;\n  height: 30px;\n  margin-left: 12px;\n}\n.file-name {\n  font-size: 16px;\n  color: #6E6E6E;\n}\n.file-name-format {\n  padding-left: 10px;\n}\n.file-format {\n  font-size: 10px;\n}\n.url-input {\n  width: 358px;\n  margin-left: 8px;\n  height: 27px;\n  border: 1px solid #25C2D4;\n}\n.url-check {\n  width: 31px;\n  height: 31px;\n  color: #FFFFFF;\n  font-size: 15px;\n  background-color: #25C2D4;\n}\n.url-check i {\n  padding: 8px;\n}\n.upload-url {\n  display: flex;\n}\n.list-files-lines {\n  border-top: 1px solid #ccc;\n}\n.gd-dnd-wrap {\n  border: 2px dashed #ccc;\n  background-color: #f8f8f8;\n  cursor: default;\n  position: absolute;\n  width: 983px;\n  height: 626px;\n  opacity: 0.9;\n  z-index: 1;\n  left: 20px;\n  display: flex;\n  text-align: center;\n  justify-content: center;\n}\n.gd-dnd-wrap h2 {\n  color: #959DA5;\n  font-size: 15px;\n  font-weight: 300;\n  margin-top: 50%;\n}\n@media (max-width: 1025px) {\n  .header-size,\n  .file-size {\n    width: 18%;\n  }\n  .gd-dnd-wrap {\n    width: 95%;\n  }\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9wYXZlbGVnb3Jvdi9Eb2N1bWVudHMvcmVwb3MvR3JvdXBEb2NzLlRvdGFsLUFuZ3VsYXIvbGlicy9jb21tb24tY29tcG9uZW50cy9zcmMvbGliL2Jyb3dzZS1maWxlcy1tb2RhbC9icm93c2UtZmlsZXMtbW9kYWwuY29tcG9uZW50Lmxlc3MiLCIuLi8uLi9saWJzL2NvbW1vbi1jb21wb25lbnRzL3NyYy9saWIvYnJvd3NlLWZpbGVzLW1vZGFsL2Jyb3dzZS1maWxlcy1tb2RhbC5jb21wb25lbnQubGVzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0FDQ0Y7QURFQTtFQUNFLGNBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7QUNBRjtBREdBO0VBQ0Usa0JBQUE7RUFDQSxXQUFBO0FDREY7QURJQTs7RUFDRSxVQUFBO0VBQ0EsY0FBQTtBQ0RGO0FESUE7O0VBQ0UsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7QUNERjtBRElBO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0FDRkY7QURLQTs7RUFDRSxhQUFBO0VBQ0EsV0FBQTtFQUNBLDhCQUFBO0FDRkY7QURLQTtFQUNFLHlCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7QUNIRjtBRE1BO0VBQ0UsWUFBQTtFQUNBLGdCQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0FDSkY7QURPQTtFQUNFLGVBQUE7QUNMRjtBRFFBO0VBQ0UsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLFdBQUE7RUFDQSx1QkFBQTtBQ05GO0FEU0E7RUFDRSxlQUFBO0FDUEY7QURVQTtFQUNFLGFBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7QUNSRjtBRFdBO0VBQ0UsYUFBQTtBQ1RGO0FEWUE7RUFDRSxjQUFBO0FDVkY7QURhQTtFQUNFLGNBQUE7QUNYRjtBRGNBO0VBQ0UsY0FBQTtBQ1pGO0FEZUE7RUFDRSxjQUFBO0FDYkY7QURnQkE7RUFDRSxjQUFBO0FDZEY7QURpQkE7RUFDRSxjQUFBO0FDZkY7QURrQkE7RUFDRSxlQUFBO0FDaEJGO0FEbUJBO0VBQ0UsYUFBQTtFQUNBLGVBQUE7QUNqQkY7QURvQkE7RUFDRSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxlQUFBO0FDbEJGO0FEcUJBO0VBQ0UsWUFBQTtBQ25CRjtBRHNCQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7QUNwQkY7QUR1QkE7RUFDRSxlQUFBO0VBQ0EsY0FBQTtBQ3JCRjtBRHdCQTtFQUNFLGtCQUFBO0FDdEJGO0FEeUJBO0VBQ0UsZUFBQTtBQ3ZCRjtBRDBCQTtFQUNFLFlBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7RUFDQSx5QkFBQTtBQ3hCRjtBRDJCQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7RUFDQSx5QkFBQTtBQ3pCRjtBRDRCQTtFQUNFLFlBQUE7QUMxQkY7QUQ2QkE7RUFDRSxhQUFBO0FDM0JGO0FEOEJBO0VBQ0UsMEJBQUE7QUM1QkY7QUQrQkE7RUFDRSx1QkFBQTtFQUNBLHlCQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxZQUFBO0VBQ0EsVUFBQTtFQUNBLFVBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSx1QkFBQTtBQzdCRjtBRGdDQTtFQUNFLGNBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0FDOUJGO0FEaUNBO0VBQ0U7O0lBQ0UsVUFBQTtFQzlCRjtFRGdDQTtJQUNFLFVBQUE7RUM5QkY7QUFDRiIsImZpbGUiOiIuLi8uLi9saWJzL2NvbW1vbi1jb21wb25lbnRzL3NyYy9saWIvYnJvd3NlLWZpbGVzLW1vZGFsL2Jyb3dzZS1maWxlcy1tb2RhbC5jb21wb25lbnQubGVzcyIsInNvdXJjZXNDb250ZW50IjpbIi5nZC1tb2RhbC10YWJsZSB7XG4gIHdpZHRoOiAxMDAlO1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBwYWRkaW5nLXRvcDogMjBweDtcbn1cblxuLmxpc3QtZmlsZXMtaGVhZGVyIHtcbiAgY29sb3I6ICNBQ0FDQUM7XG4gIGZvbnQtc2l6ZTogMTBweDtcbiAgcGFkZGluZy1sZWZ0OiAyMXB4O1xufVxuXG4uaGVhZGVyLXNpemUge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGxlZnQ6IC0yNHB4O1xufVxuXG4uaGVhZGVyLXNpemUsIC5maWxlLXNpemUge1xuICB3aWR0aDogMTAlO1xuICBjb2xvcjogIzc3Nzc3Nztcbn1cblxuLmZpbGUtc2l6ZSwgLmZpbGUtZGVzY3JpcHRpb24ge1xuICBmb250LXNpemU6IDE0cHg7XG4gIHBhZGRpbmc6IDEwcHggNnB4O1xuICBtYXJnaW4tbGVmdDogMTJweDtcbn1cblxuLmZpbGUtZGVzY3JpcHRpb24ge1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG5cbi5saXN0LWZpbGVzLWxpbmVzLCAubGlzdC1maWxlcy1oZWFkZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICB3aWR0aDogMTAwJTtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xufVxuXG4uZ2QtbW9kYWwtc3Bpbm5lciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDIwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1zaXplOiAxNnB4O1xufVxuXG4uZ2QtY2FuY2VsLWJ1dHRvbiB7XG4gIHBhZGRpbmc6IDdweDtcbiAgYmFja2dyb3VuZDogbm9uZTtcbiAgd2lkdGg6IDI4cHg7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG5cbi5nZC1jYW5jZWwtYnV0dG9uIGkge1xuICBmb250LXNpemU6IDIxcHg7XG59XG5cbi5nZC1maWxlLW5hbWUge1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB3aWR0aDogMTAwJTtcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG59XG5cbi5nby11cCB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLnVwbG9hZC1wYW5lbCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgbGVmdDogMjBweDtcbn1cblxuLmZpbGUtZGVzY3JpcHRpb24ge1xuICBkaXNwbGF5OiBmbGV4O1xufVxuXG4uZmlsZS1kZXNjcmlwdGlvbiAuZmEtZmlsZS1wZGYge1xuICBjb2xvcjogI0UyMTcxNztcbn1cblxuLmZpbGUtZGVzY3JpcHRpb24gLmZhLWZpbGUtd29yZCB7XG4gIGNvbG9yOiAjNjk3OUI5O1xufVxuXG4uZmlsZS1kZXNjcmlwdGlvbiAuZmEtZmlsZS1wb3dlcnBvaW50IHtcbiAgY29sb3I6ICNFMjk0MTc7XG59XG5cbi5maWxlLWRlc2NyaXB0aW9uIC5mYS1maWxlLWV4Y2VsIHtcbiAgY29sb3I6ICMzRkEzMDA7XG59XG5cbi5maWxlLWRlc2NyaXB0aW9uIC5mYS1maWxlLWltYWdlIHtcbiAgY29sb3I6ICNFMjE3REE7XG59XG5cbi5maWxlLWRlc2NyaXB0aW9uIC5mYS1maWxlLXRleHQgLmZhLWZvbGRlciB7XG4gIGNvbG9yOiAjNUQ2QTc1O1xufVxuXG4uZmlsZS1kZXNjcmlwdGlvbiBpIHtcbiAgZm9udC1zaXplOiAzMnB4O1xufVxuXG4uZ28tdXAge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmb250LXNpemU6IDE2cHg7XG59XG5cbi5nby11cC1kb3RzIHtcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4gIG1hcmdpbi10b3A6IDhweDtcbiAgZm9udC1zaXplOiAyMHB4O1xufVxuXG4uZ28tdXAtaWNvbiBpIHtcbiAgcGFkZGluZzogOHB4O1xufVxuXG4uZ28tdXAtaWNvbiB7XG4gIHdpZHRoOiAzMHB4O1xuICBoZWlnaHQ6IDMwcHg7XG4gIG1hcmdpbi1sZWZ0OiAxMnB4O1xufVxuXG4uZmlsZS1uYW1lIHtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBjb2xvcjogIzZFNkU2RTtcbn1cblxuLmZpbGUtbmFtZS1mb3JtYXQge1xuICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG59XG5cbi5maWxlLWZvcm1hdCB7XG4gIGZvbnQtc2l6ZTogMTBweDtcbn1cblxuLnVybC1pbnB1dCB7XG4gIHdpZHRoOiAzNThweDtcbiAgbWFyZ2luLWxlZnQ6IDhweDtcbiAgaGVpZ2h0OiAyN3B4O1xuICBib3JkZXI6IDFweCBzb2xpZCAjMjVDMkQ0O1xufVxuXG4udXJsLWNoZWNrIHtcbiAgd2lkdGg6IDMxcHg7XG4gIGhlaWdodDogMzFweDtcbiAgY29sb3I6ICNGRkZGRkY7XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzI1QzJENDtcbn1cblxuLnVybC1jaGVjayBpIHtcbiAgcGFkZGluZzogOHB4O1xufVxuXG4udXBsb2FkLXVybCB7XG4gIGRpc3BsYXk6IGZsZXg7XG59XG5cbi5saXN0LWZpbGVzLWxpbmVzIHtcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNjY2M7XG59XG5cbi5nZC1kbmQtd3JhcCB7XG4gIGJvcmRlcjogMnB4IGRhc2hlZCAjY2NjO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjhmOGY4O1xuICBjdXJzb3I6IGRlZmF1bHQ7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDk4M3B4O1xuICBoZWlnaHQ6IDYyNnB4O1xuICBvcGFjaXR5OiAwLjk7XG4gIHotaW5kZXg6IDE7XG4gIGxlZnQ6IDIwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbi5nZC1kbmQtd3JhcCBoMiB7XG4gIGNvbG9yOiAjOTU5REE1O1xuICBmb250LXNpemU6IDE1cHg7XG4gIGZvbnQtd2VpZ2h0OiAzMDA7XG4gIG1hcmdpbi10b3A6IDUwJTtcbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDEwMjVweCkge1xuICAuaGVhZGVyLXNpemUsIC5maWxlLXNpemUge1xuICAgIHdpZHRoOiAxOCU7XG4gIH1cbiAgLmdkLWRuZC13cmFwIHtcbiAgICB3aWR0aDogOTUlO1xuICB9XG59XG4iLCIuZ2QtbW9kYWwtdGFibGUge1xuICB3aWR0aDogMTAwJTtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgcGFkZGluZy10b3A6IDIwcHg7XG59XG4ubGlzdC1maWxlcy1oZWFkZXIge1xuICBjb2xvcjogI0FDQUNBQztcbiAgZm9udC1zaXplOiAxMHB4O1xuICBwYWRkaW5nLWxlZnQ6IDIxcHg7XG59XG4uaGVhZGVyLXNpemUge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGxlZnQ6IC0yNHB4O1xufVxuLmhlYWRlci1zaXplLFxuLmZpbGUtc2l6ZSB7XG4gIHdpZHRoOiAxMCU7XG4gIGNvbG9yOiAjNzc3Nzc3O1xufVxuLmZpbGUtc2l6ZSxcbi5maWxlLWRlc2NyaXB0aW9uIHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBwYWRkaW5nOiAxMHB4IDZweDtcbiAgbWFyZ2luLWxlZnQ6IDEycHg7XG59XG4uZmlsZS1kZXNjcmlwdGlvbiB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cbi5saXN0LWZpbGVzLWxpbmVzLFxuLmxpc3QtZmlsZXMtaGVhZGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgd2lkdGg6IDEwMCU7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcbn1cbi5nZC1tb2RhbC1zcGlubmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMjBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXNpemU6IDE2cHg7XG59XG4uZ2QtY2FuY2VsLWJ1dHRvbiB7XG4gIHBhZGRpbmc6IDdweDtcbiAgYmFja2dyb3VuZDogbm9uZTtcbiAgd2lkdGg6IDI4cHg7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG4uZ2QtY2FuY2VsLWJ1dHRvbiBpIHtcbiAgZm9udC1zaXplOiAyMXB4O1xufVxuLmdkLWZpbGUtbmFtZSB7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHdpZHRoOiAxMDAlO1xuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbn1cbi5nby11cCB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbi51cGxvYWQtcGFuZWwge1xuICBkaXNwbGF5OiBmbGV4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGxlZnQ6IDIwcHg7XG59XG4uZmlsZS1kZXNjcmlwdGlvbiB7XG4gIGRpc3BsYXk6IGZsZXg7XG59XG4uZmlsZS1kZXNjcmlwdGlvbiAuZmEtZmlsZS1wZGYge1xuICBjb2xvcjogI0UyMTcxNztcbn1cbi5maWxlLWRlc2NyaXB0aW9uIC5mYS1maWxlLXdvcmQge1xuICBjb2xvcjogIzY5NzlCOTtcbn1cbi5maWxlLWRlc2NyaXB0aW9uIC5mYS1maWxlLXBvd2VycG9pbnQge1xuICBjb2xvcjogI0UyOTQxNztcbn1cbi5maWxlLWRlc2NyaXB0aW9uIC5mYS1maWxlLWV4Y2VsIHtcbiAgY29sb3I6ICMzRkEzMDA7XG59XG4uZmlsZS1kZXNjcmlwdGlvbiAuZmEtZmlsZS1pbWFnZSB7XG4gIGNvbG9yOiAjRTIxN0RBO1xufVxuLmZpbGUtZGVzY3JpcHRpb24gLmZhLWZpbGUtdGV4dCAuZmEtZm9sZGVyIHtcbiAgY29sb3I6ICM1RDZBNzU7XG59XG4uZmlsZS1kZXNjcmlwdGlvbiBpIHtcbiAgZm9udC1zaXplOiAzMnB4O1xufVxuLmdvLXVwIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZm9udC1zaXplOiAxNnB4O1xufVxuLmdvLXVwLWRvdHMge1xuICBtYXJnaW4tbGVmdDogMTBweDtcbiAgbWFyZ2luLXRvcDogOHB4O1xuICBmb250LXNpemU6IDIwcHg7XG59XG4uZ28tdXAtaWNvbiBpIHtcbiAgcGFkZGluZzogOHB4O1xufVxuLmdvLXVwLWljb24ge1xuICB3aWR0aDogMzBweDtcbiAgaGVpZ2h0OiAzMHB4O1xuICBtYXJnaW4tbGVmdDogMTJweDtcbn1cbi5maWxlLW5hbWUge1xuICBmb250LXNpemU6IDE2cHg7XG4gIGNvbG9yOiAjNkU2RTZFO1xufVxuLmZpbGUtbmFtZS1mb3JtYXQge1xuICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG59XG4uZmlsZS1mb3JtYXQge1xuICBmb250LXNpemU6IDEwcHg7XG59XG4udXJsLWlucHV0IHtcbiAgd2lkdGg6IDM1OHB4O1xuICBtYXJnaW4tbGVmdDogOHB4O1xuICBoZWlnaHQ6IDI3cHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkICMyNUMyRDQ7XG59XG4udXJsLWNoZWNrIHtcbiAgd2lkdGg6IDMxcHg7XG4gIGhlaWdodDogMzFweDtcbiAgY29sb3I6ICNGRkZGRkY7XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzI1QzJENDtcbn1cbi51cmwtY2hlY2sgaSB7XG4gIHBhZGRpbmc6IDhweDtcbn1cbi51cGxvYWQtdXJsIHtcbiAgZGlzcGxheTogZmxleDtcbn1cbi5saXN0LWZpbGVzLWxpbmVzIHtcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNjY2M7XG59XG4uZ2QtZG5kLXdyYXAge1xuICBib3JkZXI6IDJweCBkYXNoZWQgI2NjYztcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y4ZjhmODtcbiAgY3Vyc29yOiBkZWZhdWx0O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiA5ODNweDtcbiAgaGVpZ2h0OiA2MjZweDtcbiAgb3BhY2l0eTogMC45O1xuICB6LWluZGV4OiAxO1xuICBsZWZ0OiAyMHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuLmdkLWRuZC13cmFwIGgyIHtcbiAgY29sb3I6ICM5NTlEQTU7XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgbWFyZ2luLXRvcDogNTAlO1xufVxuQG1lZGlhIChtYXgtd2lkdGg6IDEwMjVweCkge1xuICAuaGVhZGVyLXNpemUsXG4gIC5maWxlLXNpemUge1xuICAgIHdpZHRoOiAxOCU7XG4gIH1cbiAgLmdkLWRuZC13cmFwIHtcbiAgICB3aWR0aDogOTUlO1xuICB9XG59XG4iXX0= */"

/***/ }),

/***/ "../../libs/common-components/src/lib/browse-files-modal/browse-files-modal.component.ts":
/*!****************************************************************************************************************************************************!*\
  !*** /Users/pavelegorov/Documents/repos/GroupDocs.Total-Angular/libs/common-components/src/lib/browse-files-modal/browse-files-modal.component.ts ***!
  \****************************************************************************************************************************************************/
/*! exports provided: BrowseFilesModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BrowseFilesModalComponent", function() { return BrowseFilesModalComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _file_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../file.service */ "../../libs/common-components/src/lib/file.service.ts");
/* harmony import */ var _upload_files_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../upload-files.service */ "../../libs/common-components/src/lib/upload-files.service.ts");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! jquery */ "../../node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_4__);





var $ = jquery__WEBPACK_IMPORTED_MODULE_4__;
var upload_disc = 'Disc';
var upload_url = 'url';
var uploads_choices = [{ name: upload_disc, icon: 'hdd' }, { name: upload_url, icon: 'link' }];
var BrowseFilesModalComponent = /** @class */ (function () {
    function BrowseFilesModalComponent(_uploadService) {
        this._uploadService = _uploadService;
        this.uploads = uploads_choices;
        this.selectedFileGuid = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.selectedDirectory = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.urlForUpload = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.showUploadUrl = false;
        this.showUploadFile = false;
    }
    BrowseFilesModalComponent.prototype.ngOnInit = function () {
    };
    BrowseFilesModalComponent.prototype.getSize = function (size) {
        var mb = size / 1024 / 1024;
        if (mb > 1) {
            return (Math.round(mb * 100) / 100) + ' MB';
        }
        else {
            var kb = size / 1024;
            if (kb > 1) {
                return (Math.round(kb * 100) / 100) + ' KB';
            }
        }
        return size + ' Bytes';
    };
    BrowseFilesModalComponent.prototype.getFormatName = function (file) {
        return _file_service__WEBPACK_IMPORTED_MODULE_2__["FileUtil"].find(file.name, file.directory).format;
    };
    BrowseFilesModalComponent.prototype.getFormatIcon = function (file) {
        return _file_service__WEBPACK_IMPORTED_MODULE_2__["FileUtil"].find(file.name, file.directory).icon;
    };
    BrowseFilesModalComponent.prototype.choose = function (file) {
        this.selectedFile = file;
        if (file.directory) {
            this.selectedDirectory.emit(file.guid);
        }
        else {
            this.selectedFileGuid.emit(file.guid);
        }
    };
    BrowseFilesModalComponent.prototype.goUp = function () {
        if (this.selectedFile) {
            var guid = this.selectedFile.guid;
            if (guid.length > 0 && guid.indexOf('/') === -1) {
                guid = '';
            }
            else {
                guid = guid.replace(/\/[^\/]+\/?$/, '');
            }
            this.selectedDirectory.emit(guid);
        }
    };
    BrowseFilesModalComponent.prototype.selectUpload = function ($event) {
        if (upload_url === $event) {
            this.showUploadUrl = true;
        }
        else {
            this.showUploadUrl = false;
            $("#gd-upload-input").trigger('click');
        }
    };
    BrowseFilesModalComponent.prototype.refresh = function ($event) {
        if ($event) {
            this.files = null;
            this.selectedDirectory.emit('');
            this.showUploadUrl = false;
            this.selectedFile = null;
        }
    };
    BrowseFilesModalComponent.prototype.showSpinner = function () {
        return !this.files;
    };
    BrowseFilesModalComponent.prototype.uploadUrl = function (url) {
        if (url) {
            this.urlForUpload.emit(url);
            this.cleanUpload();
        }
    };
    BrowseFilesModalComponent.prototype.handleFileInput = function (files) {
        this._uploadService.changeFilesList(files);
    };
    BrowseFilesModalComponent.prototype.cleanUpload = function () {
        this.showUploadFile = false;
        this.showUploadUrl = false;
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], BrowseFilesModalComponent.prototype, "files", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], BrowseFilesModalComponent.prototype, "uploadConfig", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], BrowseFilesModalComponent.prototype, "selectedFileGuid", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], BrowseFilesModalComponent.prototype, "selectedDirectory", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], BrowseFilesModalComponent.prototype, "urlForUpload", void 0);
    BrowseFilesModalComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'gd-browse-files-modal',
            template: __webpack_require__(/*! ./browse-files-modal.component.html */ "../../libs/common-components/src/lib/browse-files-modal/browse-files-modal.component.html"),
            styles: [__webpack_require__(/*! ./browse-files-modal.component.less */ "../../libs/common-components/src/lib/browse-files-modal/browse-files-modal.component.less")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_upload_files_service__WEBPACK_IMPORTED_MODULE_3__["UploadFilesService"]])
    ], BrowseFilesModalComponent);
    return BrowseFilesModalComponent;
}());



/***/ }),

/***/ "../../libs/common-components/src/lib/button/button.component.html":
/*!******************************************************************************************************************************!*\
  !*** /Users/pavelegorov/Documents/repos/GroupDocs.Total-Angular/libs/common-components/src/lib/button/button.component.html ***!
  \******************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"button\" [ngClass]=\"className\" (mouseenter)=\"onHovering()\" (mouseleave)=\"onUnhovering()\" gdDisabledCursor [dis]=\"disabled\">\n  <i fa [name]=\"icon\"></i>\n  <gd-tooltip [text]=\"tooltip\" [show]=\"showToolTip\" *ngIf=\"tooltip\"></gd-tooltip>\n</div>\n"

/***/ }),

/***/ "../../libs/common-components/src/lib/button/button.component.less":
/*!******************************************************************************************************************************!*\
  !*** /Users/pavelegorov/Documents/repos/GroupDocs.Total-Angular/libs/common-components/src/lib/button/button.component.less ***!
  \******************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".button {\n  margin: 0px 15px;\n  font-size: 14px;\n  color: #959da5;\n  cursor: pointer;\n}\n@media (max-width: 1025px) {\n  .button {\n    font-size: 20px;\n    margin: 0px 20px;\n  }\n  .arrow-button {\n    margin: 5px;\n  }\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9wYXZlbGVnb3Jvdi9Eb2N1bWVudHMvcmVwb3MvR3JvdXBEb2NzLlRvdGFsLUFuZ3VsYXIvbGlicy9jb21tb24tY29tcG9uZW50cy9zcmMvbGliL2J1dHRvbi9idXR0b24uY29tcG9uZW50Lmxlc3MiLCIuLi8uLi9saWJzL2NvbW1vbi1jb21wb25lbnRzL3NyYy9saWIvYnV0dG9uL2J1dHRvbi5jb21wb25lbnQubGVzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0FDQ0Y7QURFQTtFQUNFO0lBQ0UsZUFBQTtJQUNBLGdCQUFBO0VDQUY7RURHQTtJQUNFLFdBQUE7RUNERjtBQUNGIiwiZmlsZSI6Ii4uLy4uL2xpYnMvY29tbW9uLWNvbXBvbmVudHMvc3JjL2xpYi9idXR0b24vYnV0dG9uLmNvbXBvbmVudC5sZXNzIiwic291cmNlc0NvbnRlbnQiOlsiLmJ1dHRvbiB7XG4gIG1hcmdpbjogMHB4IDE1cHg7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgY29sb3I6ICM5NTlkYTU7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDEwMjVweCkge1xuICAuYnV0dG9uIHtcbiAgICBmb250LXNpemU6IDIwcHg7XG4gICAgbWFyZ2luOiAwcHggMjBweDtcbiAgfVxuXG4gIC5hcnJvdy1idXR0b24ge1xuICAgIG1hcmdpbjogNXB4O1xuICB9XG59XG4iLCIuYnV0dG9uIHtcbiAgbWFyZ2luOiAwcHggMTVweDtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBjb2xvcjogIzk1OWRhNTtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuQG1lZGlhIChtYXgtd2lkdGg6IDEwMjVweCkge1xuICAuYnV0dG9uIHtcbiAgICBmb250LXNpemU6IDIwcHg7XG4gICAgbWFyZ2luOiAwcHggMjBweDtcbiAgfVxuICAuYXJyb3ctYnV0dG9uIHtcbiAgICBtYXJnaW46IDVweDtcbiAgfVxufVxuIl19 */"

/***/ }),

/***/ "../../libs/common-components/src/lib/button/button.component.ts":
/*!****************************************************************************************************************************!*\
  !*** /Users/pavelegorov/Documents/repos/GroupDocs.Total-Angular/libs/common-components/src/lib/button/button.component.ts ***!
  \****************************************************************************************************************************/
/*! exports provided: ButtonComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ButtonComponent", function() { return ButtonComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");


var ButtonComponent = /** @class */ (function () {
    function ButtonComponent() {
        this.disabled = false;
        this.showToolTip = false;
    }
    ButtonComponent.prototype.onHovering = function () {
        this.showToolTip = true;
    };
    ButtonComponent.prototype.onUnhovering = function () {
        this.showToolTip = false;
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], ButtonComponent.prototype, "disabled", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], ButtonComponent.prototype, "icon", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], ButtonComponent.prototype, "tooltip", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], ButtonComponent.prototype, "className", void 0);
    ButtonComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'gd-button',
            template: __webpack_require__(/*! ./button.component.html */ "../../libs/common-components/src/lib/button/button.component.html"),
            styles: [__webpack_require__(/*! ./button.component.less */ "../../libs/common-components/src/lib/button/button.component.less")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ButtonComponent);
    return ButtonComponent;
}());



/***/ }),

/***/ "../../libs/common-components/src/lib/choice-button/choice-button.component.html":
/*!********************************************************************************************************************************************!*\
  !*** /Users/pavelegorov/Documents/repos/GroupDocs.Total-Angular/libs/common-components/src/lib/choice-button/choice-button.component.html ***!
  \********************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"choice-button\">\n  <i fa [name]=\"icon\"></i>\n  <span class=\"button-name\">{{name}}</span>\n  <div class=\"down\">\n    <i fa [name]=\"'angle-down'\" (click)=\"openChoices()\"></i>\n  </div>\n  <div class=\"choices\" *ngIf=\"open\">\n    <div class=\"upload-from\">Upload from:</div>\n    <div class=\"choice\" *ngFor=\"let choice of choices\" (click)=\"select(choice.name)\">\n      <i fa [name]=\"choice.icon\"></i>\n      {{choice.name}}\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../libs/common-components/src/lib/choice-button/choice-button.component.less":
/*!********************************************************************************************************************************************!*\
  !*** /Users/pavelegorov/Documents/repos/GroupDocs.Total-Angular/libs/common-components/src/lib/choice-button/choice-button.component.less ***!
  \********************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".choice-button {\n  width: 137px;\n  height: 31px;\n  color: #FFF;\n  background-color: #25C2D4;\n  display: flex;\n}\n.choice-button i {\n  padding: 8px;\n  font-size: 15px;\n}\n.down {\n  cursor: pointer;\n  background-color: #1FA5B4;\n  width: 31px;\n  font-size: 10px;\n  display: flex;\n  justify-content: center;\n}\n.button-name {\n  font-size: 10px;\n  padding-top: 11px;\n  padding-right: 27px;\n}\n.choices {\n  color: #B2B8BD;\n  top: 33px;\n  left: 109px;\n  position: absolute;\n  padding: 5px;\n  margin: 0px;\n  background-color: #FFFFFF;\n  width: 80px;\n  border: 0;\n  border-radius: 0;\n  box-shadow: 0 0 6px #cccccc;\n}\n.choice {\n  cursor: pointer;\n  font-size: 12px;\n  padding: 3px;\n}\n.choice i {\n  color: #959DA5;\n}\n.upload-from {\n  font-size: 7px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9wYXZlbGVnb3Jvdi9Eb2N1bWVudHMvcmVwb3MvR3JvdXBEb2NzLlRvdGFsLUFuZ3VsYXIvbGlicy9jb21tb24tY29tcG9uZW50cy9zcmMvbGliL2Nob2ljZS1idXR0b24vY2hvaWNlLWJ1dHRvbi5jb21wb25lbnQubGVzcyIsIi4uLy4uL2xpYnMvY29tbW9uLWNvbXBvbmVudHMvc3JjL2xpYi9jaG9pY2UtYnV0dG9uL2Nob2ljZS1idXR0b24uY29tcG9uZW50Lmxlc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxZQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSx5QkFBQTtFQUNBLGFBQUE7QUNDRjtBREVBO0VBQ0UsWUFBQTtFQUNBLGVBQUE7QUNBRjtBREdBO0VBQ0UsZUFBQTtFQUNBLHlCQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7QUNERjtBRElBO0VBQ0UsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7QUNGRjtBREtBO0VBQ0UsY0FBQTtFQUNBLFNBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLHlCQUFBO0VBQ0EsV0FBQTtFQUNBLFNBQUE7RUFDQSxnQkFBQTtFQUNBLDJCQUFBO0FDSEY7QURNQTtFQUNFLGVBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtBQ0pGO0FET0E7RUFDRSxjQUFBO0FDTEY7QURRQTtFQUNFLGNBQUE7QUNORiIsImZpbGUiOiIuLi8uLi9saWJzL2NvbW1vbi1jb21wb25lbnRzL3NyYy9saWIvY2hvaWNlLWJ1dHRvbi9jaG9pY2UtYnV0dG9uLmNvbXBvbmVudC5sZXNzIiwic291cmNlc0NvbnRlbnQiOlsiLmNob2ljZS1idXR0b24ge1xuICB3aWR0aDogMTM3cHg7XG4gIGhlaWdodDogMzFweDtcbiAgY29sb3I6ICNGRkY7XG4gIGJhY2tncm91bmQtY29sb3I6ICMyNUMyRDQ7XG4gIGRpc3BsYXk6IGZsZXg7XG59XG5cbi5jaG9pY2UtYnV0dG9uIGkge1xuICBwYWRkaW5nOiA4cHg7XG4gIGZvbnQtc2l6ZTogMTVweDtcbn1cblxuLmRvd24ge1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGJhY2tncm91bmQtY29sb3I6ICMxRkE1QjQ7XG4gIHdpZHRoOiAzMXB4O1xuICBmb250LXNpemU6IDEwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG4uYnV0dG9uLW5hbWUge1xuICBmb250LXNpemU6IDEwcHg7XG4gIHBhZGRpbmctdG9wOiAxMXB4O1xuICBwYWRkaW5nLXJpZ2h0OiAyN3B4O1xufVxuXG4uY2hvaWNlcyB7XG4gIGNvbG9yOiAjQjJCOEJEO1xuICB0b3A6IDMzcHg7XG4gIGxlZnQ6IDEwOXB4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHBhZGRpbmc6IDVweDtcbiAgbWFyZ2luOiAwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNGRkZGRkY7XG4gIHdpZHRoOiA4MHB4O1xuICBib3JkZXI6IDA7XG4gIGJvcmRlci1yYWRpdXM6IDA7XG4gIGJveC1zaGFkb3c6IDAgMCA2cHggI2NjY2NjYztcbn1cblxuLmNob2ljZSB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBwYWRkaW5nOiAzcHg7XG59XG5cbi5jaG9pY2UgaSB7XG4gIGNvbG9yOiAjOTU5REE1O1xufVxuXG4udXBsb2FkLWZyb20ge1xuICBmb250LXNpemU6IDdweDtcbn1cbiIsIi5jaG9pY2UtYnV0dG9uIHtcbiAgd2lkdGg6IDEzN3B4O1xuICBoZWlnaHQ6IDMxcHg7XG4gIGNvbG9yOiAjRkZGO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjVDMkQ0O1xuICBkaXNwbGF5OiBmbGV4O1xufVxuLmNob2ljZS1idXR0b24gaSB7XG4gIHBhZGRpbmc6IDhweDtcbiAgZm9udC1zaXplOiAxNXB4O1xufVxuLmRvd24ge1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGJhY2tncm91bmQtY29sb3I6ICMxRkE1QjQ7XG4gIHdpZHRoOiAzMXB4O1xuICBmb250LXNpemU6IDEwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuLmJ1dHRvbi1uYW1lIHtcbiAgZm9udC1zaXplOiAxMHB4O1xuICBwYWRkaW5nLXRvcDogMTFweDtcbiAgcGFkZGluZy1yaWdodDogMjdweDtcbn1cbi5jaG9pY2VzIHtcbiAgY29sb3I6ICNCMkI4QkQ7XG4gIHRvcDogMzNweDtcbiAgbGVmdDogMTA5cHg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcGFkZGluZzogNXB4O1xuICBtYXJnaW46IDBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0ZGRkZGRjtcbiAgd2lkdGg6IDgwcHg7XG4gIGJvcmRlcjogMDtcbiAgYm9yZGVyLXJhZGl1czogMDtcbiAgYm94LXNoYWRvdzogMCAwIDZweCAjY2NjY2NjO1xufVxuLmNob2ljZSB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBwYWRkaW5nOiAzcHg7XG59XG4uY2hvaWNlIGkge1xuICBjb2xvcjogIzk1OURBNTtcbn1cbi51cGxvYWQtZnJvbSB7XG4gIGZvbnQtc2l6ZTogN3B4O1xufVxuIl19 */"

/***/ }),

/***/ "../../libs/common-components/src/lib/choice-button/choice-button.component.ts":
/*!******************************************************************************************************************************************!*\
  !*** /Users/pavelegorov/Documents/repos/GroupDocs.Total-Angular/libs/common-components/src/lib/choice-button/choice-button.component.ts ***!
  \******************************************************************************************************************************************/
/*! exports provided: ChoiceButtonComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChoiceButtonComponent", function() { return ChoiceButtonComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");


var ChoiceButtonComponent = /** @class */ (function () {
    function ChoiceButtonComponent() {
        this.selected = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.open = false;
    }
    ChoiceButtonComponent.prototype.ngOnInit = function () {
    };
    ChoiceButtonComponent.prototype.openChoices = function () {
        this.open = !this.open;
    };
    ChoiceButtonComponent.prototype.select = function (choice) {
        this.selected.emit(choice);
        this.open = false;
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], ChoiceButtonComponent.prototype, "name", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], ChoiceButtonComponent.prototype, "icon", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], ChoiceButtonComponent.prototype, "choices", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
    ], ChoiceButtonComponent.prototype, "selected", void 0);
    ChoiceButtonComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'gd-choice-button',
            template: __webpack_require__(/*! ./choice-button.component.html */ "../../libs/common-components/src/lib/choice-button/choice-button.component.html"),
            styles: [__webpack_require__(/*! ./choice-button.component.less */ "../../libs/common-components/src/lib/choice-button/choice-button.component.less")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ChoiceButtonComponent);
    return ChoiceButtonComponent;
}());



/***/ }),

/***/ "../../libs/common-components/src/lib/common-components.module.ts":
/*!*****************************************************************************************************************************!*\
  !*** /Users/pavelegorov/Documents/repos/GroupDocs.Total-Angular/libs/common-components/src/lib/common-components.module.ts ***!
  \*****************************************************************************************************************************/
/*! exports provided: CommonComponentsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommonComponentsModule", function() { return CommonComponentsModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _top_toolbar_top_toolbar_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./top-toolbar/top-toolbar.component */ "../../libs/common-components/src/lib/top-toolbar/top-toolbar.component.ts");
/* harmony import */ var _button_button_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./button/button.component */ "../../libs/common-components/src/lib/button/button.component.ts");
/* harmony import */ var _logo_logo_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./logo/logo.component */ "../../libs/common-components/src/lib/logo/logo.component.ts");
/* harmony import */ var _tooltip_tooltip_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./tooltip/tooltip.component */ "../../libs/common-components/src/lib/tooltip/tooltip.component.ts");
/* harmony import */ var angular2_fontawesome_angular2_fontawesome__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! angular2-fontawesome/angular2-fontawesome */ "../../node_modules/angular2-fontawesome/angular2-fontawesome.js");
/* harmony import */ var angular2_fontawesome_angular2_fontawesome__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(angular2_fontawesome_angular2_fontawesome__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _config_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./config.service */ "../../libs/common-components/src/lib/config.service.ts");
/* harmony import */ var _modal_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./modal.service */ "../../libs/common-components/src/lib/modal.service.ts");
/* harmony import */ var _modal_modal_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./modal/modal.component */ "../../libs/common-components/src/lib/modal/modal.component.ts");
/* harmony import */ var _browse_files_modal_browse_files_modal_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./browse-files-modal/browse-files-modal.component */ "../../libs/common-components/src/lib/browse-files-modal/browse-files-modal.component.ts");
/* harmony import */ var _file_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./file.service */ "../../libs/common-components/src/lib/file.service.ts");
/* harmony import */ var _document_document_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./document/document.component */ "../../libs/common-components/src/lib/document/document.component.ts");
/* harmony import */ var _page_page_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./page/page.component */ "../../libs/common-components/src/lib/page/page.component.ts");
/* harmony import */ var _pipes__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./pipes */ "../../libs/common-components/src/lib/pipes.ts");
/* harmony import */ var _choice_button_choice_button_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./choice-button/choice-button.component */ "../../libs/common-components/src/lib/choice-button/choice-button.component.ts");
/* harmony import */ var _upload_file_zone_upload_file_zone_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./upload-file-zone/upload-file-zone.component */ "../../libs/common-components/src/lib/upload-file-zone/upload-file-zone.component.ts");
/* harmony import */ var _upload_files_service__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./upload-files.service */ "../../libs/common-components/src/lib/upload-files.service.ts");
/* harmony import */ var _dnd_directive__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./dnd.directive */ "../../libs/common-components/src/lib/dnd.directive.ts");
/* harmony import */ var _scrollable_directive__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./scrollable.directive */ "../../libs/common-components/src/lib/scrollable.directive.ts");
/* harmony import */ var _navigate_service__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./navigate.service */ "../../libs/common-components/src/lib/navigate.service.ts");
/* harmony import */ var _page_preload_service__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./page-preload.service */ "../../libs/common-components/src/lib/page-preload.service.ts");
/* harmony import */ var _zoom_directive__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./zoom.directive */ "../../libs/common-components/src/lib/zoom.directive.ts");
/* harmony import */ var _zoom_service__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./zoom.service */ "../../libs/common-components/src/lib/zoom.service.ts");
/* harmony import */ var _select_select_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./select/select.component */ "../../libs/common-components/src/lib/select/select.component.ts");
/* harmony import */ var _disabled_cursor_directive__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./disabled-cursor.directive */ "../../libs/common-components/src/lib/disabled-cursor.directive.ts");
/* harmony import */ var _rotation_directive__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./rotation.directive */ "../../libs/common-components/src/lib/rotation.directive.ts");
/* harmony import */ var _init_state_init_state_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./init-state/init-state.component */ "../../libs/common-components/src/lib/init-state/init-state.component.ts");
/* harmony import */ var _render_print_service__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./render-print.service */ "../../libs/common-components/src/lib/render-print.service.ts");
/* harmony import */ var _render_print_directive__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./render-print.directive */ "../../libs/common-components/src/lib/render-print.directive.ts");
/* harmony import */ var _error_modal_error_modal_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./error-modal/error-modal.component */ "../../libs/common-components/src/lib/error-modal/error-modal.component.ts");
/* harmony import */ var _password_required_password_required_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./password-required/password-required.component */ "../../libs/common-components/src/lib/password-required/password-required.component.ts");
/* harmony import */ var _exception_message_service__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./exception-message.service */ "../../libs/common-components/src/lib/exception-message.service.ts");
/* harmony import */ var _password_service__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./password.service */ "../../libs/common-components/src/lib/password.service.ts");
/* harmony import */ var _error_interceptor_service__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./error-interceptor.service */ "../../libs/common-components/src/lib/error-interceptor.service.ts");
/* harmony import */ var _search_search_component__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./search/search.component */ "../../libs/common-components/src/lib/search/search.component.ts");
/* harmony import */ var _searchable_directive__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ./searchable.directive */ "../../libs/common-components/src/lib/searchable.directive.ts");
/* harmony import */ var _search_service__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ./search.service */ "../../libs/common-components/src/lib/search.service.ts");
/* harmony import */ var _window_service__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ./window.service */ "../../libs/common-components/src/lib/window.service.ts");
/* harmony import */ var _viewport_service__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! ./viewport.service */ "../../libs/common-components/src/lib/viewport.service.ts");









































var providers = [_config_service__WEBPACK_IMPORTED_MODULE_8__["ConfigService"],
    _config_service__WEBPACK_IMPORTED_MODULE_8__["Api"],
    _modal_service__WEBPACK_IMPORTED_MODULE_9__["ModalService"],
    _file_service__WEBPACK_IMPORTED_MODULE_12__["FileService"],
    _file_service__WEBPACK_IMPORTED_MODULE_12__["FileModel"],
    _file_service__WEBPACK_IMPORTED_MODULE_12__["FileUtil"],
    _pipes__WEBPACK_IMPORTED_MODULE_15__["SanitizeHtmlPipe"],
    _pipes__WEBPACK_IMPORTED_MODULE_15__["SanitizeResourceHtmlPipe"],
    _pipes__WEBPACK_IMPORTED_MODULE_15__["SanitizeStylePipe"],
    _pipes__WEBPACK_IMPORTED_MODULE_15__["HighlightSearchPipe"],
    _upload_files_service__WEBPACK_IMPORTED_MODULE_18__["UploadFilesService"],
    _render_print_service__WEBPACK_IMPORTED_MODULE_29__["RenderPrintService"],
    _navigate_service__WEBPACK_IMPORTED_MODULE_21__["NavigateService"],
    _page_preload_service__WEBPACK_IMPORTED_MODULE_22__["PagePreloadService"],
    _zoom_service__WEBPACK_IMPORTED_MODULE_24__["ZoomService"],
    _exception_message_service__WEBPACK_IMPORTED_MODULE_33__["ExceptionMessageService"],
    _password_service__WEBPACK_IMPORTED_MODULE_34__["PasswordService"],
    _error_interceptor_service__WEBPACK_IMPORTED_MODULE_35__["ErrorInterceptorService"],
    _search_service__WEBPACK_IMPORTED_MODULE_38__["SearchService"],
    _window_service__WEBPACK_IMPORTED_MODULE_39__["WindowService"],
    _viewport_service__WEBPACK_IMPORTED_MODULE_40__["ViewportService"]];
var CommonComponentsModule = /** @class */ (function () {
    function CommonComponentsModule() {
    }
    CommonComponentsModule_1 = CommonComponentsModule;
    CommonComponentsModule.forRoot = function () {
        return {
            ngModule: CommonComponentsModule_1,
            providers: providers
        };
    };
    var CommonComponentsModule_1;
    CommonComponentsModule = CommonComponentsModule_1 = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], angular2_fontawesome_angular2_fontawesome__WEBPACK_IMPORTED_MODULE_7__["Angular2FontawesomeModule"]],
            declarations: [
                _top_toolbar_top_toolbar_component__WEBPACK_IMPORTED_MODULE_3__["TopToolbarComponent"],
                _button_button_component__WEBPACK_IMPORTED_MODULE_4__["ButtonComponent"],
                _logo_logo_component__WEBPACK_IMPORTED_MODULE_5__["LogoComponent"],
                _tooltip_tooltip_component__WEBPACK_IMPORTED_MODULE_6__["TooltipComponent"],
                _modal_modal_component__WEBPACK_IMPORTED_MODULE_10__["ModalComponent"],
                _browse_files_modal_browse_files_modal_component__WEBPACK_IMPORTED_MODULE_11__["BrowseFilesModalComponent"],
                _document_document_component__WEBPACK_IMPORTED_MODULE_13__["DocumentComponent"],
                _page_page_component__WEBPACK_IMPORTED_MODULE_14__["PageComponent"],
                _pipes__WEBPACK_IMPORTED_MODULE_15__["SanitizeHtmlPipe"],
                _pipes__WEBPACK_IMPORTED_MODULE_15__["SanitizeResourceHtmlPipe"],
                _pipes__WEBPACK_IMPORTED_MODULE_15__["SanitizeStylePipe"],
                _pipes__WEBPACK_IMPORTED_MODULE_15__["HighlightSearchPipe"],
                _choice_button_choice_button_component__WEBPACK_IMPORTED_MODULE_16__["ChoiceButtonComponent"],
                _upload_file_zone_upload_file_zone_component__WEBPACK_IMPORTED_MODULE_17__["UploadFileZoneComponent"],
                _dnd_directive__WEBPACK_IMPORTED_MODULE_19__["DndDirective"],
                _scrollable_directive__WEBPACK_IMPORTED_MODULE_20__["ScrollableDirective"],
                _zoom_directive__WEBPACK_IMPORTED_MODULE_23__["ZoomDirective"],
                _select_select_component__WEBPACK_IMPORTED_MODULE_25__["SelectComponent"],
                _disabled_cursor_directive__WEBPACK_IMPORTED_MODULE_26__["DisabledCursorDirective"],
                _rotation_directive__WEBPACK_IMPORTED_MODULE_27__["RotationDirective"],
                _init_state_init_state_component__WEBPACK_IMPORTED_MODULE_28__["InitStateComponent"],
                _render_print_directive__WEBPACK_IMPORTED_MODULE_30__["RenderPrintDirective"],
                _error_modal_error_modal_component__WEBPACK_IMPORTED_MODULE_31__["ErrorModalComponent"],
                _password_required_password_required_component__WEBPACK_IMPORTED_MODULE_32__["PasswordRequiredComponent"],
                _search_search_component__WEBPACK_IMPORTED_MODULE_36__["SearchComponent"],
                _searchable_directive__WEBPACK_IMPORTED_MODULE_37__["SearchableDirective"],
            ],
            exports: [
                _top_toolbar_top_toolbar_component__WEBPACK_IMPORTED_MODULE_3__["TopToolbarComponent"],
                _button_button_component__WEBPACK_IMPORTED_MODULE_4__["ButtonComponent"],
                _logo_logo_component__WEBPACK_IMPORTED_MODULE_5__["LogoComponent"],
                _tooltip_tooltip_component__WEBPACK_IMPORTED_MODULE_6__["TooltipComponent"],
                _modal_modal_component__WEBPACK_IMPORTED_MODULE_10__["ModalComponent"],
                _browse_files_modal_browse_files_modal_component__WEBPACK_IMPORTED_MODULE_11__["BrowseFilesModalComponent"],
                _document_document_component__WEBPACK_IMPORTED_MODULE_13__["DocumentComponent"],
                _page_page_component__WEBPACK_IMPORTED_MODULE_14__["PageComponent"],
                _pipes__WEBPACK_IMPORTED_MODULE_15__["SanitizeResourceHtmlPipe"],
                _pipes__WEBPACK_IMPORTED_MODULE_15__["SanitizeStylePipe"],
                _pipes__WEBPACK_IMPORTED_MODULE_15__["HighlightSearchPipe"],
                _pipes__WEBPACK_IMPORTED_MODULE_15__["SanitizeHtmlPipe"],
                _choice_button_choice_button_component__WEBPACK_IMPORTED_MODULE_16__["ChoiceButtonComponent"],
                _upload_file_zone_upload_file_zone_component__WEBPACK_IMPORTED_MODULE_17__["UploadFileZoneComponent"],
                _scrollable_directive__WEBPACK_IMPORTED_MODULE_20__["ScrollableDirective"],
                _select_select_component__WEBPACK_IMPORTED_MODULE_25__["SelectComponent"],
                _rotation_directive__WEBPACK_IMPORTED_MODULE_27__["RotationDirective"],
                _init_state_init_state_component__WEBPACK_IMPORTED_MODULE_28__["InitStateComponent"],
                _render_print_directive__WEBPACK_IMPORTED_MODULE_30__["RenderPrintDirective"],
                _error_modal_error_modal_component__WEBPACK_IMPORTED_MODULE_31__["ErrorModalComponent"],
                _password_required_password_required_component__WEBPACK_IMPORTED_MODULE_32__["PasswordRequiredComponent"],
                _search_search_component__WEBPACK_IMPORTED_MODULE_36__["SearchComponent"],
                _searchable_directive__WEBPACK_IMPORTED_MODULE_37__["SearchableDirective"],
            ],
            providers: providers
        })
    ], CommonComponentsModule);
    return CommonComponentsModule;
}());



/***/ }),

/***/ "../../libs/common-components/src/lib/config.service.ts":
/*!*******************************************************************************************************************!*\
  !*** /Users/pavelegorov/Documents/repos/GroupDocs.Total-Angular/libs/common-components/src/lib/config.service.ts ***!
  \*******************************************************************************************************************/
/*! exports provided: Api, ConfigService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Api", function() { return Api; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfigService", function() { return ConfigService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "../../node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");



var Api = /** @class */ (function () {
    function Api() {
    }
    Api.VIEWER_APP = '/viewer';
    Api.DEFAULT_API_ENDPOINT = window.location.href;
    Api.LOAD_FILE_TREE = '/loadFileTree';
    Api.LOAD_CONFIG = '/loadConfig';
    Api.LOAD_DOCUMENT_DESCRIPTION = '/loadDocumentDescription';
    Api.LOAD_DOCUMENT_PAGE = '/loadDocumentPage';
    Api.ROTATE_DOCUMENT_PAGE = '/rotateDocumentPages';
    Api.UPLOAD_DOCUMENTS = '/uploadDocument';
    Api.DOWNLOAD_DOCUMENTS = '/downloadDocument';
    Api.LOAD_PRINT = '/loadPrint';
    Api.LOAD_PRINT_PDF = '/printPdf';
    Api.LOAD_THUMBNAILS = '/loadThumbnails';
    Api.httpOptionsJson = {
        headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
            'Content-Type': 'application/json',
        })
    };
    Api.httpOptionsJsonResponseTypeBlob = {
        headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
            'Content-Type': 'application/json',
        }),
        responseType: 'blob'
    };
    return Api;
}());

var ConfigService = /** @class */ (function () {
    function ConfigService() {
        this._apiEndpoint = Api.DEFAULT_API_ENDPOINT;
    }
    Object.defineProperty(ConfigService.prototype, "apiEndpoint", {
        set: function (url) {
            this._apiEndpoint = url;
        },
        enumerable: true,
        configurable: true
    });
    ConfigService.prototype.getConfigEndpoint = function (app) {
        return (this.getApiEndpoint().endsWith(app) ? this.getApiEndpoint() : this.getApiEndpoint() + app) + Api.LOAD_CONFIG;
    };
    ConfigService.prototype.getViewerApiEndpoint = function () {
        return this._apiEndpoint.trim().endsWith(Api.VIEWER_APP) ? this._apiEndpoint : this._apiEndpoint + Api.VIEWER_APP;
    };
    ConfigService.prototype.getApiEndpoint = function () {
        return this._apiEndpoint;
    };
    ConfigService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ConfigService);
    return ConfigService;
}());



/***/ }),

/***/ "../../libs/common-components/src/lib/disabled-cursor.directive.ts":
/*!******************************************************************************************************************************!*\
  !*** /Users/pavelegorov/Documents/repos/GroupDocs.Total-Angular/libs/common-components/src/lib/disabled-cursor.directive.ts ***!
  \******************************************************************************************************************************/
/*! exports provided: DisabledCursorDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DisabledCursorDirective", function() { return DisabledCursorDirective; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");


var DisabledCursorDirective = /** @class */ (function () {
    function DisabledCursorDirective() {
    }
    DisabledCursorDirective.prototype.updateCursor = function () {
        this.cursor = this.dis ? 'not-allowed' : 'pointer';
    };
    DisabledCursorDirective.prototype.ngOnInit = function () {
        this.updateCursor();
    };
    DisabledCursorDirective.prototype.ngOnChanges = function (changes) {
        this.updateCursor();
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)
    ], DisabledCursorDirective.prototype, "dis", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"])('style.cursor'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], DisabledCursorDirective.prototype, "cursor", void 0);
    DisabledCursorDirective = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
            selector: '[gdDisabledCursor]'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], DisabledCursorDirective);
    return DisabledCursorDirective;
}());



/***/ }),

/***/ "../../libs/common-components/src/lib/dnd.directive.ts":
/*!******************************************************************************************************************!*\
  !*** /Users/pavelegorov/Documents/repos/GroupDocs.Total-Angular/libs/common-components/src/lib/dnd.directive.ts ***!
  \******************************************************************************************************************/
/*! exports provided: DndDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DndDirective", function() { return DndDirective; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _upload_files_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./upload-files.service */ "../../libs/common-components/src/lib/upload-files.service.ts");



var DndDirective = /** @class */ (function () {
    function DndDirective(_uploadFilesService) {
        this._uploadFilesService = _uploadFilesService;
        this.close = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.open = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.isBackground = true;
        this.background = '#f8f8f8';
    }
    DndDirective.prototype.onDragOver = function (evt) {
        evt.preventDefault();
        evt.stopPropagation();
        if (this.isBackground) {
            this.background = '#999';
        }
        else {
            this.open.emit(true);
        }
    };
    DndDirective.prototype.onDragLeave = function (evt) {
        evt.preventDefault();
        evt.stopPropagation();
        if (this.isBackground) {
            this.background = '#f8f8f8';
        }
        else {
            // TODO: fix blinking
            //this.open.emit(false);
        }
    };
    DndDirective.prototype.onDrop = function (evt) {
        evt.preventDefault();
        evt.stopPropagation();
        var files = evt.dataTransfer.files;
        if (files.length > 0) {
            this.background = '#f8f8f8';
            this._uploadFilesService.changeFilesList(files);
            this.close.emit(true);
            this.open.emit(false);
        }
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], DndDirective.prototype, "close", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], DndDirective.prototype, "open", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], DndDirective.prototype, "isBackground", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"])('style.background'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], DndDirective.prototype, "background", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('dragover', ['$event']),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", void 0)
    ], DndDirective.prototype, "onDragOver", null);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('dragleave', ['$event']),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", void 0)
    ], DndDirective.prototype, "onDragLeave", null);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('drop', ['$event']),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", void 0)
    ], DndDirective.prototype, "onDrop", null);
    DndDirective = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
            selector: '[gdDnd]'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_upload_files_service__WEBPACK_IMPORTED_MODULE_2__["UploadFilesService"]])
    ], DndDirective);
    return DndDirective;
}());



/***/ }),

/***/ "../../libs/common-components/src/lib/document/document.component.html":
/*!**********************************************************************************************************************************!*\
  !*** /Users/pavelegorov/Documents/repos/GroupDocs.Total-Angular/libs/common-components/src/lib/document/document.component.html ***!
  \**********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"wait\" *ngIf=\"wait\">Please wait...</div>\n<div id=\"document\" class=\"document\" gdScrollable [onRefresh]=\"refreshView\">\n  <div class=\"panzoom\" gdZoom [zoomActive]=\"ifFirefox()\" gdSearchable>\n    <div [ngClass]=\"(ifFirefox() && zoom > 110) ? 'page gd-zoomed' : 'page'\" *ngFor=\"let page of file?.pages\" gdZoom [zoomActive]=\"!ifFirefox()\"\n         [style.width.pt]=\"ifPdf() ? page.width : 'unset'\"\n         [style.height.pt]=\"(ifPdf() || ifImage()) && ifChromeOrFirefox() ? page.height : 'unset'\" gdRotation\n         [angle]=\"page.angle\" [isHtmlMode]=\"mode\" [width]=\"page.width\" [height]=\"page.height\">\n      <gd-page [number]=\"page.number\" [data]=\"page.data\" [isHtml]=\"mode\" [angle]=\"page.angle\"\n               [width]=\"page.width\" [height]=\"page.height\"></gd-page>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../libs/common-components/src/lib/document/document.component.less":
/*!**********************************************************************************************************************************!*\
  !*** /Users/pavelegorov/Documents/repos/GroupDocs.Total-Angular/libs/common-components/src/lib/document/document.component.less ***!
  \**********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".document {\n  background-color: #e7e7e7;\n  width: 100%;\n  height: 100%;\n  overflow-x: hidden;\n  overflow-y: auto !important;\n  transition: all 0.4s;\n  padding: 0px;\n  margin: 0px;\n}\n.page {\n  display: inline-block;\n  background-color: #ffffff;\n  margin: 20px;\n  box-shadow: 0px 4px 12px -4px rgba(0, 0, 0, 0.38);\n  transition: all 0.3s;\n}\n.wait {\n  position: absolute;\n  top: 55px;\n  left: Calc(30%);\n}\n.panzoom {\n  -webkit-transform: none;\n          transform: none;\n  -webkit-backface-visibility: hidden;\n          backface-visibility: hidden;\n  -webkit-transform-origin: 50% 50% 0px;\n          transform-origin: 50% 50% 0px;\n  display: flex;\n  justify-content: center;\n  flex-wrap: wrap;\n}\n.gd-zoomed {\n  margin: 10px 98px;\n}\n@media (max-width: 1025px) {\n  .document {\n    overflow-x: auto !important;\n  }\n  .panzoom {\n    flex-direction: column;\n  }\n  .page {\n    min-width: unset !important;\n    min-height: unset !important;\n    margin: 5px 0px;\n  }\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9wYXZlbGVnb3Jvdi9Eb2N1bWVudHMvcmVwb3MvR3JvdXBEb2NzLlRvdGFsLUFuZ3VsYXIvbGlicy9jb21tb24tY29tcG9uZW50cy9zcmMvbGliL2RvY3VtZW50L2RvY3VtZW50LmNvbXBvbmVudC5sZXNzIiwiLi4vLi4vbGlicy9jb21tb24tY29tcG9uZW50cy9zcmMvbGliL2RvY3VtZW50L2RvY3VtZW50LmNvbXBvbmVudC5sZXNzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UseUJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsMkJBQUE7RUFDQSxvQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0FDQ0Y7QURFQTtFQUNFLHFCQUFBO0VBQ0EseUJBQUE7RUFDQSxZQUFBO0VBR0EsaURBQUE7RUFDQSxvQkFBQTtBQ0FGO0FER0E7RUFDRSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxlQUFBO0FDREY7QURJQTtFQUNFLHVCQUFBO1VBQUEsZUFBQTtFQUNBLG1DQUFBO1VBQUEsMkJBQUE7RUFDQSxxQ0FBQTtVQUFBLDZCQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsZUFBQTtBQ0ZGO0FES0E7RUFDRSxpQkFBQTtBQ0hGO0FETUE7RUFDRTtJQUNFLDJCQUFBO0VDSkY7RURPQTtJQUNFLHNCQUFBO0VDTEY7RURRQTtJQUNFLDJCQUFBO0lBQ0EsNEJBQUE7SUFDQSxlQUFBO0VDTkY7QUFDRiIsImZpbGUiOiIuLi8uLi9saWJzL2NvbW1vbi1jb21wb25lbnRzL3NyYy9saWIvZG9jdW1lbnQvZG9jdW1lbnQuY29tcG9uZW50Lmxlc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZG9jdW1lbnQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTdlN2U3O1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBvdmVyZmxvdy14OiBoaWRkZW47XG4gIG92ZXJmbG93LXk6IGF1dG8gIWltcG9ydGFudDtcbiAgdHJhbnNpdGlvbjogYWxsIDAuNHM7XG4gIHBhZGRpbmc6IDBweDtcbiAgbWFyZ2luOiAwcHg7XG59XG5cbi5wYWdlIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xuICBtYXJnaW46IDIwcHg7XG4gIC13ZWJraXQtYm94LXNoYWRvdzogMHB4IDRweCAxMnB4IC00cHggcmdiYSgwLCAwLCAwLCAwLjM4KTtcbiAgLW1vei1ib3gtc2hhZG93OiAwcHggNHB4IDEycHggLTRweCByZ2JhKDAsIDAsIDAsIDAuMzgpO1xuICBib3gtc2hhZG93OiAwcHggNHB4IDEycHggLTRweCByZ2JhKDAsIDAsIDAsIDAuMzgpO1xuICB0cmFuc2l0aW9uOiBhbGwgMC4zcztcbn1cblxuLndhaXQge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogNTVweDtcbiAgbGVmdDogQ2FsYyg1MCUgLSAyMHB4KTtcbn1cblxuLnBhbnpvb20ge1xuICB0cmFuc2Zvcm06IG5vbmU7XG4gIGJhY2tmYWNlLXZpc2liaWxpdHk6IGhpZGRlbjtcbiAgdHJhbnNmb3JtLW9yaWdpbjogNTAlIDUwJSAwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBmbGV4LXdyYXA6IHdyYXA7XG59XG5cbi5nZC16b29tZWQge1xuICBtYXJnaW46IDEwcHggOThweDtcbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDEwMjVweCkge1xuICAuZG9jdW1lbnQge1xuICAgIG92ZXJmbG93LXg6IGF1dG8gIWltcG9ydGFudDtcbiAgfVxuXG4gIC5wYW56b29tIHtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICB9XG5cbiAgLnBhZ2Uge1xuICAgIG1pbi13aWR0aDogdW5zZXQgIWltcG9ydGFudDtcbiAgICBtaW4taGVpZ2h0OiB1bnNldCAhaW1wb3J0YW50O1xuICAgIG1hcmdpbjogNXB4IDBweDtcbiAgfVxufVxuIiwiLmRvY3VtZW50IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2U3ZTdlNztcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgb3ZlcmZsb3cteDogaGlkZGVuO1xuICBvdmVyZmxvdy15OiBhdXRvICFpbXBvcnRhbnQ7XG4gIHRyYW5zaXRpb246IGFsbCAwLjRzO1xuICBwYWRkaW5nOiAwcHg7XG4gIG1hcmdpbjogMHB4O1xufVxuLnBhZ2Uge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XG4gIG1hcmdpbjogMjBweDtcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiAwcHggNHB4IDEycHggLTRweCByZ2JhKDAsIDAsIDAsIDAuMzgpO1xuICAtbW96LWJveC1zaGFkb3c6IDBweCA0cHggMTJweCAtNHB4IHJnYmEoMCwgMCwgMCwgMC4zOCk7XG4gIGJveC1zaGFkb3c6IDBweCA0cHggMTJweCAtNHB4IHJnYmEoMCwgMCwgMCwgMC4zOCk7XG4gIHRyYW5zaXRpb246IGFsbCAwLjNzO1xufVxuLndhaXQge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogNTVweDtcbiAgbGVmdDogQ2FsYygzMCUpO1xufVxuLnBhbnpvb20ge1xuICB0cmFuc2Zvcm06IG5vbmU7XG4gIGJhY2tmYWNlLXZpc2liaWxpdHk6IGhpZGRlbjtcbiAgdHJhbnNmb3JtLW9yaWdpbjogNTAlIDUwJSAwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBmbGV4LXdyYXA6IHdyYXA7XG59XG4uZ2Qtem9vbWVkIHtcbiAgbWFyZ2luOiAxMHB4IDk4cHg7XG59XG5AbWVkaWEgKG1heC13aWR0aDogMTAyNXB4KSB7XG4gIC5kb2N1bWVudCB7XG4gICAgb3ZlcmZsb3cteDogYXV0byAhaW1wb3J0YW50O1xuICB9XG4gIC5wYW56b29tIHtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICB9XG4gIC5wYWdlIHtcbiAgICBtaW4td2lkdGg6IHVuc2V0ICFpbXBvcnRhbnQ7XG4gICAgbWluLWhlaWdodDogdW5zZXQgIWltcG9ydGFudDtcbiAgICBtYXJnaW46IDVweCAwcHg7XG4gIH1cbn1cbiJdfQ== */"

/***/ }),

/***/ "../../libs/common-components/src/lib/document/document.component.ts":
/*!********************************************************************************************************************************!*\
  !*** /Users/pavelegorov/Documents/repos/GroupDocs.Total-Angular/libs/common-components/src/lib/document/document.component.ts ***!
  \********************************************************************************************************************************/
/*! exports provided: DocumentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DocumentComponent", function() { return DocumentComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _file_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../file.service */ "../../libs/common-components/src/lib/file.service.ts");
/* harmony import */ var _zoom_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../zoom.service */ "../../libs/common-components/src/lib/zoom.service.ts");




var DocumentComponent = /** @class */ (function () {
    function DocumentComponent(zoomService) {
        var _this = this;
        this.wait = false;
        zoomService.zoomChange.subscribe(function (val) {
            _this.zoom = val;
        });
    }
    DocumentComponent.prototype.ngOnInit = function () {
    };
    DocumentComponent.prototype.ifPdf = function () {
        return _file_service__WEBPACK_IMPORTED_MODULE_2__["FileUtil"].find(this.file.guid, false).format === "Portable Document Format";
    };
    DocumentComponent.prototype.ifImage = function () {
        return _file_service__WEBPACK_IMPORTED_MODULE_2__["FileUtil"].find(this.file.guid, false).format === "Joint Photographic Experts Group";
    };
    DocumentComponent.prototype.ngOnChanges = function (changes) {
        this.refreshView = !this.refreshView;
    };
    DocumentComponent.prototype.ifChromeOrFirefox = function () {
        return navigator.userAgent.toLowerCase().indexOf('chrome') > -1 || this.ifFirefox();
    };
    DocumentComponent.prototype.ifFirefox = function () {
        return navigator.userAgent.toLowerCase().indexOf('firefox') > -1;
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)
    ], DocumentComponent.prototype, "mode", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
    ], DocumentComponent.prototype, "preloadPageCount", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _file_service__WEBPACK_IMPORTED_MODULE_2__["FileDescription"])
    ], DocumentComponent.prototype, "file", void 0);
    DocumentComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'gd-document',
            template: __webpack_require__(/*! ./document.component.html */ "../../libs/common-components/src/lib/document/document.component.html"),
            styles: [__webpack_require__(/*! ./document.component.less */ "../../libs/common-components/src/lib/document/document.component.less")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_zoom_service__WEBPACK_IMPORTED_MODULE_3__["ZoomService"]])
    ], DocumentComponent);
    return DocumentComponent;
}());



/***/ }),

/***/ "../../libs/common-components/src/lib/error-interceptor.service.ts":
/*!******************************************************************************************************************************!*\
  !*** /Users/pavelegorov/Documents/repos/GroupDocs.Total-Angular/libs/common-components/src/lib/error-interceptor.service.ts ***!
  \******************************************************************************************************************************/
/*! exports provided: ErrorInterceptorService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorInterceptorService", function() { return ErrorInterceptorService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "../../node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "../../node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "../../node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _exception_message_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./exception-message.service */ "../../libs/common-components/src/lib/exception-message.service.ts");
/* harmony import */ var _file_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./file.service */ "../../libs/common-components/src/lib/file.service.ts");
/* harmony import */ var _modal_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./modal.service */ "../../libs/common-components/src/lib/modal.service.ts");








var ErrorInterceptorService = /** @class */ (function () {
    function ErrorInterceptorService(_modalService, _messageService) {
        this._modalService = _modalService;
        this._messageService = _messageService;
    }
    ErrorInterceptorService.prototype.intercept = function (req, next) {
        var _this = this;
        var logFormat = 'background: maroon; color: white';
        return next.handle(req)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (data) {
            return data;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(function (exception) {
            if (exception instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpErrorResponse"]) {
                switch (exception.status) {
                    case _file_service__WEBPACK_IMPORTED_MODULE_6__["HttpError"].BadRequest:
                        console.error('%c Bad Request 400', logFormat);
                        break;
                    case _file_service__WEBPACK_IMPORTED_MODULE_6__["HttpError"].Unauthorized:
                        console.error('%c Unauthorized 401', logFormat);
                        break;
                    case _file_service__WEBPACK_IMPORTED_MODULE_6__["HttpError"].NotFound:
                        console.error('%c Not Found 404', logFormat);
                        break;
                    case _file_service__WEBPACK_IMPORTED_MODULE_6__["HttpError"].TimeOut:
                        console.error('%c TimeOut 408', logFormat);
                        break;
                    case _file_service__WEBPACK_IMPORTED_MODULE_6__["HttpError"].InternalServerError:
                        console.error('%c big bad 500', logFormat);
                        _this._messageService.changeMessage(exception.error.message);
                        _this._modalService.open(_modal_service__WEBPACK_IMPORTED_MODULE_7__["CommonModals"].ErrorMessage);
                        break;
                    case _file_service__WEBPACK_IMPORTED_MODULE_6__["HttpError"].Forbidden:
                        console.error('%c Forbidden 403', logFormat);
                        _this._messageService.changeMessage(exception.error.message);
                        _this._modalService.open(_modal_service__WEBPACK_IMPORTED_MODULE_7__["CommonModals"].PasswordRequired);
                        break;
                }
            }
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])(exception);
        }));
    };
    ErrorInterceptorService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_modal_service__WEBPACK_IMPORTED_MODULE_7__["ModalService"], _exception_message_service__WEBPACK_IMPORTED_MODULE_5__["ExceptionMessageService"]])
    ], ErrorInterceptorService);
    return ErrorInterceptorService;
}());



/***/ }),

/***/ "../../libs/common-components/src/lib/error-modal/error-modal.component.html":
/*!****************************************************************************************************************************************!*\
  !*** /Users/pavelegorov/Documents/repos/GroupDocs.Total-Angular/libs/common-components/src/lib/error-modal/error-modal.component.html ***!
  \****************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<gd-modal id=\"gd-error-message\" [title]=\"'Error message'\">\n  <div class=\"gd-modal-error\">{{message ? message : 'Server is not available'}}</div>\n</gd-modal>\n"

/***/ }),

/***/ "../../libs/common-components/src/lib/error-modal/error-modal.component.less":
/*!****************************************************************************************************************************************!*\
  !*** /Users/pavelegorov/Documents/repos/GroupDocs.Total-Angular/libs/common-components/src/lib/error-modal/error-modal.component.less ***!
  \****************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".gd-modal-error {\n  position: absolute;\n  background-color: #ffffff;\n  font-size: 13px;\n  padding: 20px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9wYXZlbGVnb3Jvdi9Eb2N1bWVudHMvcmVwb3MvR3JvdXBEb2NzLlRvdGFsLUFuZ3VsYXIvbGlicy9jb21tb24tY29tcG9uZW50cy9zcmMvbGliL2Vycm9yLW1vZGFsL2Vycm9yLW1vZGFsLmNvbXBvbmVudC5sZXNzIiwiLi4vLi4vbGlicy9jb21tb24tY29tcG9uZW50cy9zcmMvbGliL2Vycm9yLW1vZGFsL2Vycm9yLW1vZGFsLmNvbXBvbmVudC5sZXNzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQUE7RUFDQSx5QkFBQTtFQUNBLGVBQUE7RUFDQSxhQUFBO0FDQ0YiLCJmaWxlIjoiLi4vLi4vbGlicy9jb21tb24tY29tcG9uZW50cy9zcmMvbGliL2Vycm9yLW1vZGFsL2Vycm9yLW1vZGFsLmNvbXBvbmVudC5sZXNzIiwic291cmNlc0NvbnRlbnQiOlsiLmdkLW1vZGFsLWVycm9yIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xuICBmb250LXNpemU6IDEzcHg7XG4gIHBhZGRpbmc6IDIwcHg7XG59XG4iLCIuZ2QtbW9kYWwtZXJyb3Ige1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgcGFkZGluZzogMjBweDtcbn1cbiJdfQ== */"

/***/ }),

/***/ "../../libs/common-components/src/lib/error-modal/error-modal.component.ts":
/*!**************************************************************************************************************************************!*\
  !*** /Users/pavelegorov/Documents/repos/GroupDocs.Total-Angular/libs/common-components/src/lib/error-modal/error-modal.component.ts ***!
  \**************************************************************************************************************************************/
/*! exports provided: ErrorModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorModalComponent", function() { return ErrorModalComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _exception_message_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../exception-message.service */ "../../libs/common-components/src/lib/exception-message.service.ts");



var ErrorModalComponent = /** @class */ (function () {
    function ErrorModalComponent(messageService) {
        var _this = this;
        messageService.messageChange.subscribe(function (message) { return _this.message = message; });
    }
    ErrorModalComponent.prototype.ngOnInit = function () {
    };
    ErrorModalComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'gd-error-modal',
            template: __webpack_require__(/*! ./error-modal.component.html */ "../../libs/common-components/src/lib/error-modal/error-modal.component.html"),
            styles: [__webpack_require__(/*! ./error-modal.component.less */ "../../libs/common-components/src/lib/error-modal/error-modal.component.less")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_exception_message_service__WEBPACK_IMPORTED_MODULE_2__["ExceptionMessageService"]])
    ], ErrorModalComponent);
    return ErrorModalComponent;
}());



/***/ }),

/***/ "../../libs/common-components/src/lib/exception-message.service.ts":
/*!******************************************************************************************************************************!*\
  !*** /Users/pavelegorov/Documents/repos/GroupDocs.Total-Angular/libs/common-components/src/lib/exception-message.service.ts ***!
  \******************************************************************************************************************************/
/*! exports provided: ExceptionMessageService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExceptionMessageService", function() { return ExceptionMessageService; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "../../node_modules/rxjs/_esm5/index.js");

var ExceptionMessageService = /** @class */ (function () {
    function ExceptionMessageService() {
        this._observer = new rxjs__WEBPACK_IMPORTED_MODULE_0__["BehaviorSubject"]('Server is not available');
        this._messageChange = this._observer.asObservable();
    }
    Object.defineProperty(ExceptionMessageService.prototype, "messageChange", {
        get: function () {
            return this._messageChange;
        },
        enumerable: true,
        configurable: true
    });
    ExceptionMessageService.prototype.changeMessage = function (message) {
        this._observer.next(message);
    };
    return ExceptionMessageService;
}());



/***/ }),

/***/ "../../libs/common-components/src/lib/file.service.ts":
/*!*****************************************************************************************************************!*\
  !*** /Users/pavelegorov/Documents/repos/GroupDocs.Total-Angular/libs/common-components/src/lib/file.service.ts ***!
  \*****************************************************************************************************************/
/*! exports provided: PageModel, RotatedPage, FileCredentials, FileDescription, FileModel, HttpError, FileUtil, FileService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageModel", function() { return PageModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RotatedPage", function() { return RotatedPage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FileCredentials", function() { return FileCredentials; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FileDescription", function() { return FileDescription; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FileModel", function() { return FileModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpError", function() { return HttpError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FileUtil", function() { return FileUtil; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FileService", function() { return FileService; });
var PageModel = /** @class */ (function () {
    function PageModel() {
    }
    return PageModel;
}());

var RotatedPage = /** @class */ (function () {
    function RotatedPage() {
    }
    return RotatedPage;
}());

var FileCredentials = /** @class */ (function () {
    function FileCredentials() {
    }
    return FileCredentials;
}());

var FileDescription = /** @class */ (function () {
    function FileDescription() {
        this.printAllowed = true;
    }
    return FileDescription;
}());

var FileModel = /** @class */ (function () {
    function FileModel() {
    }
    return FileModel;
}());

var HttpError = /** @class */ (function () {
    function HttpError() {
    }
    HttpError.BadRequest = 400;
    HttpError.Unauthorized = 401;
    HttpError.Forbidden = 403;
    HttpError.NotFound = 404;
    HttpError.TimeOut = 408;
    HttpError.Conflict = 409;
    HttpError.InternalServerError = 500;
    return HttpError;
}());

var FileUtil = /** @class */ (function () {
    function FileUtil() {
    }
    FileUtil.find = function (filename, isDirectory) {
        if (filename && !isDirectory) {
            var strings = filename.split('.');
            var name_1 = strings.pop().toLowerCase();
            if (typeof FileUtil.map[name_1] === "undefined") {
                return strings.length > 1 ? FileUtil.map['unknown'] : FileUtil.map['folder'];
            }
            else {
                return FileUtil.map[name_1];
            }
        }
        else {
            return FileUtil.map['folder'];
        }
    };
    FileUtil.map = {
        'folder': { 'format': '', 'icon': 'folder' },
        'pdf': { 'format': 'Portable Document Format', 'icon': 'file-pdf' },
        'doc': { 'format': 'Microsoft Word', 'icon': 'file-word' },
        'docx': { 'format': 'Microsoft Word', 'icon': 'file-word' },
        'docm': { 'format': 'Microsoft Word', 'icon': 'file-word' },
        'dot': { 'format': 'Microsoft Word', 'icon': 'file-word' },
        'dotx': { 'format': 'Microsoft Word', 'icon': 'file-word' },
        'dotm': { 'format': 'Microsoft Word', 'icon': 'file-word' },
        'xls': { 'format': 'Microsoft Excel', 'icon': 'file-excel' },
        'xlsx': { 'format': 'Microsoft Excel', 'icon': 'file-excel' },
        'xlsm': { 'format': 'Microsoft Excel', 'icon': 'file-excel' },
        'xlsb': { 'format': 'Microsoft Excel', 'icon': 'file-excel' },
        'ppt': { 'format': 'Microsoft PowerPoint', 'icon': 'file-powerpoint' },
        'pptx': { 'format': 'Microsoft PowerPoint', 'icon': 'file-powerpoint' },
        'pps': { 'format': 'Microsoft PowerPoint', 'icon': 'file-powerpoint' },
        'ppsx': { 'format': 'Microsoft PowerPoint', 'icon': 'file-powerpoint' },
        'vsd': { 'format': 'Microsoft Visio', 'icon': 'file-code' },
        'vdx': { 'format': 'Microsoft Visio', 'icon': 'file-code' },
        'vss': { 'format': 'Microsoft Visio', 'icon': 'file-code' },
        'vsx': { 'format': 'Microsoft Visio', 'icon': 'file-code' },
        'vst': { 'format': 'Microsoft Visio', 'icon': 'file-code' },
        'vtx': { 'format': 'Microsoft Visio', 'icon': 'file-code' },
        'vsdx': { 'format': 'Microsoft Visio', 'icon': 'file-code' },
        'vdw': { 'format': 'Microsoft Visio', 'icon': 'file-code' },
        'vstx': { 'format': 'Microsoft Visio', 'icon': 'file-code' },
        'vssx': { 'format': 'Microsoft Visio', 'icon': 'file-code' },
        'mpp': { 'format': 'Microsoft Project', 'icon': 'file-text' },
        'mpt': { 'format': 'Microsoft Project', 'icon': 'file-text' },
        'msg': { 'format': 'Microsoft Outlook', 'icon': 'file-text' },
        'eml': { 'format': 'Microsoft Outlook', 'icon': 'file-text' },
        'emlx': { 'format': 'Microsoft Outlook', 'icon': 'file-text' },
        'one': { 'format': 'Microsoft OneNote', 'icon': 'file-word' },
        'odt': { 'format': 'Open Document Text', 'icon': 'file-word' },
        'ott': { 'format': 'Open Document Text Template', 'icon': 'file-word' },
        'ods': { 'format': 'Open Document Spreadsheet', 'icon': 'file-excel' },
        'odp': { 'format': 'Open Document Presentation', 'icon': 'file-powerpoint' },
        'otp': { 'format': 'Open Document Presentation', 'icon': 'file-powerpoint' },
        'ots': { 'format': 'Open Document Presentation', 'icon': 'file-powerpoint' },
        'rtf': { 'format': 'Rich Text Format', 'icon': 'file-text' },
        'txt': { 'format': 'Plain Text File', 'icon': 'file-text' },
        'csv': { 'format': 'Comma-Separated Values', 'icon': 'file-excel' },
        'html': { 'format': 'HyperText Markup Language', 'icon': 'file-word' },
        'mht': { 'format': 'HyperText Markup Language', 'icon': 'file-word' },
        'mhtml': { 'format': 'HyperText Markup Language', 'icon': 'file-word' },
        'xml': { 'format': 'Extensible Markup Language', 'icon': 'file-word' },
        'xps': { 'format': 'XML Paper Specification', 'icon': 'file-word' },
        'dxf': { 'format': 'AutoCAD Drawing File Format', 'icon': 'file-image' },
        'dwg': { 'format': 'AutoCAD Drawing File Format', 'icon': 'file-image' },
        'bmp': { 'format': 'Bitmap Picture', 'icon': 'file-image' },
        'gif': { 'format': 'Graphics Interchange Format', 'icon': 'file-image' },
        'jpg': { 'format': 'Joint Photographic Experts Group', 'icon': 'file-image' },
        'jpe': { 'format': 'Joint Photographic Experts Group', 'icon': 'file-image' },
        'jpeg': { 'format': 'Joint Photographic Experts Group', 'icon': 'file-image' },
        'jfif': { 'format': 'Joint Photographic Experts Group', 'icon': 'file-image' },
        'png': { 'format': 'Portable Network Graphics', 'icon': 'file-image' },
        'tiff': { 'format': 'Tagged Image File Format', 'icon': 'file-photo' },
        'tif': { 'format': 'Tagged Image File Format', 'icon': 'file-photo' },
        'epub': { 'format': 'Electronic Publication', 'icon': 'file-pdf' },
        'ico': { 'format': 'Windows Icon', 'icon': 'file-image' },
        'webp': { 'format': 'Compressed Image', 'icon': 'file-image' },
        'mobi': { 'format': 'Mobipocket eBook', 'icon': 'file-pdf' },
        'tex': { 'format': 'LaTeX Source Document', 'icon': 'file-pdf' },
        'djvu': { 'format': 'Multi-Layer Raster Image', 'icon': 'file-text' },
        'unknown': { 'format': 'This format is not supported', 'icon': 'file' },
    };
    return FileUtil;
}());

var FileService = /** @class */ (function () {
    function FileService() {
    }
    return FileService;
}());



/***/ }),

/***/ "../../libs/common-components/src/lib/init-state/init-state.component.html":
/*!**************************************************************************************************************************************!*\
  !*** /Users/pavelegorov/Documents/repos/GroupDocs.Total-Angular/libs/common-components/src/lib/init-state/init-state.component.html ***!
  \**************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"wrapper\">\n  <i class=\"icon\" fa [name]=\"icon\"></i>\n  <span class=\"text\">{{text}}</span>\n  <span class=\"start\">Click <i fa [name]=\"'folder-open'\"></i> to open file</span>\n</div>\n"

/***/ }),

/***/ "../../libs/common-components/src/lib/init-state/init-state.component.less":
/*!**************************************************************************************************************************************!*\
  !*** /Users/pavelegorov/Documents/repos/GroupDocs.Total-Angular/libs/common-components/src/lib/init-state/init-state.component.less ***!
  \**************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".wrapper {\n  color: #959DA5;\n  background-color: #E7E7E7;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-content: center;\n  width: 100%;\n  height: 100%;\n}\n.icon {\n  font-size: 65px;\n  text-align: center;\n  margin-bottom: 38px;\n}\n.text,\n.start {\n  font-size: 15px;\n  text-align: center;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9wYXZlbGVnb3Jvdi9Eb2N1bWVudHMvcmVwb3MvR3JvdXBEb2NzLlRvdGFsLUFuZ3VsYXIvbGlicy9jb21tb24tY29tcG9uZW50cy9zcmMvbGliL2luaXQtc3RhdGUvaW5pdC1zdGF0ZS5jb21wb25lbnQubGVzcyIsIi4uLy4uL2xpYnMvY29tbW9uLWNvbXBvbmVudHMvc3JjL2xpYi9pbml0LXN0YXRlL2luaXQtc3RhdGUuY29tcG9uZW50Lmxlc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxjQUFBO0VBQ0EseUJBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSx1QkFBQTtFQUNBLHFCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUNDRjtBREVBO0VBQ0UsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7QUNBRjtBREdBOztFQUNFLGVBQUE7RUFDQSxrQkFBQTtBQ0FGIiwiZmlsZSI6Ii4uLy4uL2xpYnMvY29tbW9uLWNvbXBvbmVudHMvc3JjL2xpYi9pbml0LXN0YXRlL2luaXQtc3RhdGUuY29tcG9uZW50Lmxlc3MiLCJzb3VyY2VzQ29udGVudCI6WyIud3JhcHBlciB7XG4gIGNvbG9yOiAjOTU5REE1O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRTdFN0U3O1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24tY29udGVudDogY2VudGVyO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuXG4uaWNvbiB7XG4gIGZvbnQtc2l6ZTogNjVweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW4tYm90dG9tOiAzOHB4O1xufVxuXG4udGV4dCwgLnN0YXJ0IHtcbiAgZm9udC1zaXplOiAxNXB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4iLCIud3JhcHBlciB7XG4gIGNvbG9yOiAjOTU5REE1O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRTdFN0U3O1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24tY29udGVudDogY2VudGVyO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuLmljb24ge1xuICBmb250LXNpemU6IDY1cHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWFyZ2luLWJvdHRvbTogMzhweDtcbn1cbi50ZXh0LFxuLnN0YXJ0IHtcbiAgZm9udC1zaXplOiAxNXB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4iXX0= */"

/***/ }),

/***/ "../../libs/common-components/src/lib/init-state/init-state.component.ts":
/*!************************************************************************************************************************************!*\
  !*** /Users/pavelegorov/Documents/repos/GroupDocs.Total-Angular/libs/common-components/src/lib/init-state/init-state.component.ts ***!
  \************************************************************************************************************************************/
/*! exports provided: InitStateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InitStateComponent", function() { return InitStateComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");


var InitStateComponent = /** @class */ (function () {
    function InitStateComponent() {
    }
    InitStateComponent.prototype.ngOnInit = function () {
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], InitStateComponent.prototype, "icon", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], InitStateComponent.prototype, "text", void 0);
    InitStateComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'gd-init-state',
            template: __webpack_require__(/*! ./init-state.component.html */ "../../libs/common-components/src/lib/init-state/init-state.component.html"),
            styles: [__webpack_require__(/*! ./init-state.component.less */ "../../libs/common-components/src/lib/init-state/init-state.component.less")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], InitStateComponent);
    return InitStateComponent;
}());



/***/ }),

/***/ "../../libs/common-components/src/lib/logo/logo.component.html":
/*!**************************************************************************************************************************!*\
  !*** /Users/pavelegorov/Documents/repos/GroupDocs.Total-Angular/libs/common-components/src/lib/logo/logo.component.html ***!
  \**************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"gd-header-logo\" class=\"logo\">\n  <span class=\"logo-text\" [innerHTML]=\"logo\"></span>\n</div>\n\n"

/***/ }),

/***/ "../../libs/common-components/src/lib/logo/logo.component.less":
/*!**************************************************************************************************************************!*\
  !*** /Users/pavelegorov/Documents/repos/GroupDocs.Total-Angular/libs/common-components/src/lib/logo/logo.component.less ***!
  \**************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".logo {\n  background-color: #25c2d4;\n  height: 50px;\n  display: flex;\n  align-items: center;\n}\n.logo-text {\n  color: #FFFFFF;\n  font-size: 15px;\n  text-transform: uppercase;\n  margin: 0px 14px;\n}\n@media (max-width: 1025px) {\n  .logo {\n    height: 70px;\n  }\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9wYXZlbGVnb3Jvdi9Eb2N1bWVudHMvcmVwb3MvR3JvdXBEb2NzLlRvdGFsLUFuZ3VsYXIvbGlicy9jb21tb24tY29tcG9uZW50cy9zcmMvbGliL2xvZ28vbG9nby5jb21wb25lbnQubGVzcyIsIi4uLy4uL2xpYnMvY29tbW9uLWNvbXBvbmVudHMvc3JjL2xpYi9sb2dvL2xvZ28uY29tcG9uZW50Lmxlc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSx5QkFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7QUNDRjtBREVBO0VBQ0UsY0FBQTtFQUNBLGVBQUE7RUFDQSx5QkFBQTtFQUNBLGdCQUFBO0FDQUY7QURHQTtFQUNFO0lBQ0UsWUFBQTtFQ0RGO0FBQ0YiLCJmaWxlIjoiLi4vLi4vbGlicy9jb21tb24tY29tcG9uZW50cy9zcmMvbGliL2xvZ28vbG9nby5jb21wb25lbnQubGVzcyIsInNvdXJjZXNDb250ZW50IjpbIi5sb2dvIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzI1YzJkNDtcbiAgaGVpZ2h0OiA1MHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4ubG9nby10ZXh0IHtcbiAgY29sb3I6ICNGRkZGRkY7XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgbWFyZ2luOiAwcHggMTRweDtcbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDEwMjVweCkge1xuICAubG9nbyB7XG4gICAgaGVpZ2h0OiA3MHB4O1xuICB9XG59XG4iLCIubG9nbyB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMyNWMyZDQ7XG4gIGhlaWdodDogNTBweDtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbi5sb2dvLXRleHQge1xuICBjb2xvcjogI0ZGRkZGRjtcbiAgZm9udC1zaXplOiAxNXB4O1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBtYXJnaW46IDBweCAxNHB4O1xufVxuQG1lZGlhIChtYXgtd2lkdGg6IDEwMjVweCkge1xuICAubG9nbyB7XG4gICAgaGVpZ2h0OiA3MHB4O1xuICB9XG59XG4iXX0= */"

/***/ }),

/***/ "../../libs/common-components/src/lib/logo/logo.component.ts":
/*!************************************************************************************************************************!*\
  !*** /Users/pavelegorov/Documents/repos/GroupDocs.Total-Angular/libs/common-components/src/lib/logo/logo.component.ts ***!
  \************************************************************************************************************************/
/*! exports provided: LogoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogoComponent", function() { return LogoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");


var LogoComponent = /** @class */ (function () {
    function LogoComponent() {
    }
    LogoComponent.prototype.ngOnInit = function () {
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], LogoComponent.prototype, "logo", void 0);
    LogoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'gd-logo',
            template: __webpack_require__(/*! ./logo.component.html */ "../../libs/common-components/src/lib/logo/logo.component.html"),
            styles: [__webpack_require__(/*! ./logo.component.less */ "../../libs/common-components/src/lib/logo/logo.component.less")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], LogoComponent);
    return LogoComponent;
}());



/***/ }),

/***/ "../../libs/common-components/src/lib/modal.service.ts":
/*!******************************************************************************************************************!*\
  !*** /Users/pavelegorov/Documents/repos/GroupDocs.Total-Angular/libs/common-components/src/lib/modal.service.ts ***!
  \******************************************************************************************************************/
/*! exports provided: CommonModals, ModalService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommonModals", function() { return CommonModals; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalService", function() { return ModalService; });
var CommonModals = /** @class */ (function () {
    function CommonModals() {
    }
    CommonModals.PasswordRequired = "gd-password-required";
    CommonModals.ErrorMessage = "gd-error-message";
    CommonModals.BrowseFiles = "gd-browse-files";
    return CommonModals;
}());

var ModalService = /** @class */ (function () {
    function ModalService() {
        this.modals = [];
    }
    ModalService.prototype.add = function (modal) {
        this.modals.push(modal);
    };
    ModalService.prototype.remove = function (id) {
        this.modals = this.modals.filter(function (x) { return x.id !== id; });
    };
    ModalService.prototype.open = function (id) {
        var modal = this.modals.filter(function (x) { return x.id === id; })[0];
        modal.open();
    };
    ModalService.prototype.close = function (id) {
        var modal = this.modals.filter(function (x) { return x.id === id; })[0];
        modal.close();
    };
    return ModalService;
}());



/***/ }),

/***/ "../../libs/common-components/src/lib/modal/modal.component.html":
/*!****************************************************************************************************************************!*\
  !*** /Users/pavelegorov/Documents/repos/GroupDocs.Total-Angular/libs/common-components/src/lib/modal/modal.component.html ***!
  \****************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"gd-modal fade\" id=\"modalDialog\" (click)=\"onClose($event);\" *ngIf=\"visibility\">\n  <div class=\"gd-modal-dialog\">\n    <div class=\"gd-modal-content\" id=\"gd-modal-content\"> \n\n      <div class=\"gd-modal-header\"> \n        <div class=\"gd-modal-close\" (click)=\"close();\"><span>&times;</span></div>\n        <h4 class=\"gd-modal-title\">{{title}}</h4>\n        </div> \n\n      <div class=\"gd-modal-body\">\n        <ng-content></ng-content>\n        </div> \n\n      <div class=\"gd-modal-footer\"> \n\n        </div> \n      </div><!-- /.modal-content -->\n    </div><!-- /.modal-dialog --> \n  </div>\n\n"

/***/ }),

/***/ "../../libs/common-components/src/lib/modal/modal.component.less":
/*!****************************************************************************************************************************!*\
  !*** /Users/pavelegorov/Documents/repos/GroupDocs.Total-Angular/libs/common-components/src/lib/modal/modal.component.less ***!
  \****************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".gd-modal {\n  overflow: hidden;\n  position: fixed;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  z-index: 1050;\n  -webkit-overflow-scrolling: touch;\n  outline: 0;\n  background-color: rgba(0, 0, 0, 0.5);\n}\n.gd-modal-dialog {\n  box-shadow: #0005 0px 0px 10px;\n  position: absolute;\n  width: 1024px;\n  height: 728px;\n  top: calc(50% - 364px);\n  left: calc(50% - 512px);\n}\n.gd-modal-content {\n  background-color: #ffffff;\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n}\n.gd-modal-header {\n  padding: 1px 20px;\n  background-color: #3E4E5A;\n}\n.gd-modal-close {\n  position: absolute;\n  right: 20px;\n  top: 13px;\n  font-size: 21px;\n  cursor: pointer;\n  color: #959DA5;\n}\n.gd-modal-title {\n  font-size: 16px;\n  font-weight: 400;\n  padding-top: 16px;\n  padding-bottom: 16px;\n  margin: 0px;\n  color: #FFFFFF;\n}\n.gd-modal-body {\n  background-color: #ffffff;\n  padding: 20px 0;\n  overflow: hidden;\n  overflow-y: auto;\n  height: calc(100% - 75px);\n}\n.gd-modal-footer {\n  height: 25px;\n}\n.gd-modal-footer > .btn {\n  float: right;\n  margin: 20px 15px;\n  padding: 10px 20px;\n  cursor: pointer;\n  font-size: 12px;\n}\n@media (max-width: 1025px) {\n  .gd-modal-dialog {\n    width: 100%;\n    height: 100%;\n    top: 0;\n    left: 0;\n  }\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9wYXZlbGVnb3Jvdi9Eb2N1bWVudHMvcmVwb3MvR3JvdXBEb2NzLlRvdGFsLUFuZ3VsYXIvbGlicy9jb21tb24tY29tcG9uZW50cy9zcmMvbGliL21vZGFsL21vZGFsLmNvbXBvbmVudC5sZXNzIiwiLi4vLi4vbGlicy9jb21tb24tY29tcG9uZW50cy9zcmMvbGliL21vZGFsL21vZGFsLmNvbXBvbmVudC5sZXNzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsTUFBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0EsT0FBQTtFQUNBLGFBQUE7RUFDQSxpQ0FBQTtFQUNBLFVBQUE7RUFDQSxvQ0FBQTtBQ0NGO0FEQ0E7RUFDRSw4QkFBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLHVCQUFBO0FDQ0Y7QURDQTtFQUNFLHlCQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtBQ0NGO0FEQ0E7RUFDRSxpQkFBQTtFQUNBLHlCQUFBO0FDQ0Y7QURDQTtFQUNFLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFNBQUE7RUFDQSxlQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7QUNDRjtBRENBO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxvQkFBQTtFQUNBLFdBQUE7RUFDQSxjQUFBO0FDQ0Y7QURDQTtFQUNFLHlCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSx5QkFBQTtBQ0NGO0FEQ0E7RUFDRSxZQUFBO0FDQ0Y7QURDQTtFQUNFLFlBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGVBQUE7QUNDRjtBRENBO0VBQ0U7SUFDRSxXQUFBO0lBQ0EsWUFBQTtJQUNBLE1BQUE7SUFDQSxPQUFBO0VDQ0Y7QUFDRiIsImZpbGUiOiIuLi8uLi9saWJzL2NvbW1vbi1jb21wb25lbnRzL3NyYy9saWIvbW9kYWwvbW9kYWwuY29tcG9uZW50Lmxlc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZ2QtbW9kYWwge1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHRvcDogMDtcbiAgcmlnaHQ6IDA7XG4gIGJvdHRvbTogMDtcbiAgbGVmdDogMDtcbiAgei1pbmRleDogMTA1MDtcbiAgLXdlYmtpdC1vdmVyZmxvdy1zY3JvbGxpbmc6IHRvdWNoO1xuICBvdXRsaW5lOiAwO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsMCwwLDAuNSk7XG59XG4uZ2QtbW9kYWwtZGlhbG9nIHtcbiAgYm94LXNoYWRvdzogIzAwMDUgMHB4IDBweCAxMHB4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiAxMDI0cHg7XG4gIGhlaWdodDogNzI4cHg7XG4gIHRvcDogY2FsYyg1MCUgLSAzNjRweCk7XG4gIGxlZnQ6IGNhbGMoNTAlIC0gNTEycHgpO1xufVxuLmdkLW1vZGFsLWNvbnRlbnQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG4uZ2QtbW9kYWwtaGVhZGVyIHtcbiAgcGFkZGluZzogMXB4IDIwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICMzRTRFNUE7XG59XG4uZ2QtbW9kYWwtY2xvc2Uge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiAyMHB4O1xuICB0b3A6IDEzcHg7XG4gIGZvbnQtc2l6ZTogMjFweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBjb2xvcjogIzk1OURBNTtcbn1cbi5nZC1tb2RhbC10aXRsZSB7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgcGFkZGluZy10b3A6IDE2cHg7XG4gIHBhZGRpbmctYm90dG9tOiAxNnB4O1xuICBtYXJnaW46IDBweDtcbiAgY29sb3I6ICNGRkZGRkY7XG59XG4uZ2QtbW9kYWwtYm9keSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XG4gIHBhZGRpbmc6IDIwcHggMDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgb3ZlcmZsb3cteTogYXV0bztcbiAgaGVpZ2h0OiBjYWxjKDEwMCUgLSA3NXB4KTtcbn1cbi5nZC1tb2RhbC1mb290ZXIge1xuICBoZWlnaHQ6IDI1cHg7XG59XG4uZ2QtbW9kYWwtZm9vdGVyID4gLmJ0biB7XG4gIGZsb2F0OiByaWdodDtcbiAgbWFyZ2luOiAyMHB4IDE1cHg7XG4gIHBhZGRpbmc6IDEwcHggMjBweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBmb250LXNpemU6IDEycHg7XG59XG5AbWVkaWEgKG1heC13aWR0aDogMTAyNXB4KSB7XG4gIC5nZC1tb2RhbC1kaWFsb2cge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICB0b3A6IDA7XG4gICAgbGVmdDogMDtcbiAgfVxufVxuIiwiLmdkLW1vZGFsIHtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB0b3A6IDA7XG4gIHJpZ2h0OiAwO1xuICBib3R0b206IDA7XG4gIGxlZnQ6IDA7XG4gIHotaW5kZXg6IDEwNTA7XG4gIC13ZWJraXQtb3ZlcmZsb3ctc2Nyb2xsaW5nOiB0b3VjaDtcbiAgb3V0bGluZTogMDtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjUpO1xufVxuLmdkLW1vZGFsLWRpYWxvZyB7XG4gIGJveC1zaGFkb3c6ICMwMDA1IDBweCAwcHggMTBweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogMTAyNHB4O1xuICBoZWlnaHQ6IDcyOHB4O1xuICB0b3A6IGNhbGMoNTAlIC0gMzY0cHgpO1xuICBsZWZ0OiBjYWxjKDUwJSAtIDUxMnB4KTtcbn1cbi5nZC1tb2RhbC1jb250ZW50IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcbiAgaGVpZ2h0OiAxMDAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuLmdkLW1vZGFsLWhlYWRlciB7XG4gIHBhZGRpbmc6IDFweCAyMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjM0U0RTVBO1xufVxuLmdkLW1vZGFsLWNsb3NlIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogMjBweDtcbiAgdG9wOiAxM3B4O1xuICBmb250LXNpemU6IDIxcHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgY29sb3I6ICM5NTlEQTU7XG59XG4uZ2QtbW9kYWwtdGl0bGUge1xuICBmb250LXNpemU6IDE2cHg7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIHBhZGRpbmctdG9wOiAxNnB4O1xuICBwYWRkaW5nLWJvdHRvbTogMTZweDtcbiAgbWFyZ2luOiAwcHg7XG4gIGNvbG9yOiAjRkZGRkZGO1xufVxuLmdkLW1vZGFsLWJvZHkge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xuICBwYWRkaW5nOiAyMHB4IDA7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIG92ZXJmbG93LXk6IGF1dG87XG4gIGhlaWdodDogY2FsYygxMDAlIC0gNzVweCk7XG59XG4uZ2QtbW9kYWwtZm9vdGVyIHtcbiAgaGVpZ2h0OiAyNXB4O1xufVxuLmdkLW1vZGFsLWZvb3RlciA+IC5idG4ge1xuICBmbG9hdDogcmlnaHQ7XG4gIG1hcmdpbjogMjBweCAxNXB4O1xuICBwYWRkaW5nOiAxMHB4IDIwcHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgZm9udC1zaXplOiAxMnB4O1xufVxuQG1lZGlhIChtYXgtd2lkdGg6IDEwMjVweCkge1xuICAuZ2QtbW9kYWwtZGlhbG9nIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgdG9wOiAwO1xuICAgIGxlZnQ6IDA7XG4gIH1cbn1cbiJdfQ== */"

/***/ }),

/***/ "../../libs/common-components/src/lib/modal/modal.component.ts":
/*!**************************************************************************************************************************!*\
  !*** /Users/pavelegorov/Documents/repos/GroupDocs.Total-Angular/libs/common-components/src/lib/modal/modal.component.ts ***!
  \**************************************************************************************************************************/
/*! exports provided: ModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalComponent", function() { return ModalComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _modal_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../modal.service */ "../../libs/common-components/src/lib/modal.service.ts");



var ModalComponent = /** @class */ (function () {
    function ModalComponent(modalService, el) {
        this.modalService = modalService;
        this.visible = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.visibility = false;
        this.element = el.nativeElement;
    }
    ModalComponent.prototype.ngOnInit = function () {
        if (!this.id) {
            console.error('modal must have an id');
            return;
        }
        document.body.appendChild(this.element);
        this.modalService.add(this);
    };
    ModalComponent.prototype.ngOnDestroy = function () {
        this.modalService.remove(this.id);
        this.element.remove();
    };
    ModalComponent.prototype.open = function () {
        this.visibility = true;
        this.visible.emit(true);
    };
    ModalComponent.prototype.close = function () {
        this.visibility = false;
        this.visible.emit(false);
    };
    ModalComponent.prototype.onClose = function ($event) {
        if ($event && $event.target && $event.target.id === 'modalDialog') {
            this.close();
        }
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], ModalComponent.prototype, "id", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], ModalComponent.prototype, "title", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], ModalComponent.prototype, "visible", void 0);
    ModalComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'gd-modal',
            template: __webpack_require__(/*! ./modal.component.html */ "../../libs/common-components/src/lib/modal/modal.component.html"),
            styles: [__webpack_require__(/*! ./modal.component.less */ "../../libs/common-components/src/lib/modal/modal.component.less")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_modal_service__WEBPACK_IMPORTED_MODULE_2__["ModalService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]])
    ], ModalComponent);
    return ModalComponent;
}());



/***/ }),

/***/ "../../libs/common-components/src/lib/navigate.service.ts":
/*!*********************************************************************************************************************!*\
  !*** /Users/pavelegorov/Documents/repos/GroupDocs.Total-Angular/libs/common-components/src/lib/navigate.service.ts ***!
  \*********************************************************************************************************************/
/*! exports provided: NavigateService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavigateService", function() { return NavigateService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "../../node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _page_preload_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./page-preload.service */ "../../libs/common-components/src/lib/page-preload.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");




var NavigateService = /** @class */ (function () {
    function NavigateService(_pagePreloadService) {
        var _this = this;
        this._pagePreloadService = _pagePreloadService;
        this._currentPage = 0;
        this._countPages = 0;
        this._navigate = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Observable"](function (observer) {
            return _this._observer = observer;
        });
    }
    Object.defineProperty(NavigateService.prototype, "navigate", {
        get: function () {
            return this._navigate;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NavigateService.prototype, "countPages", {
        get: function () {
            return this._countPages;
        },
        set: function (value) {
            this._countPages = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NavigateService.prototype, "currentPage", {
        get: function () {
            return this._currentPage;
        },
        set: function (value) {
            this._currentPage = value;
        },
        enumerable: true,
        configurable: true
    });
    NavigateService.prototype.nextPage = function () {
        if (this._currentPage < this._countPages) {
            this._currentPage++;
            this.navigateTo(this._currentPage);
        }
    };
    NavigateService.prototype.prevPage = function () {
        if (this._currentPage > 1) {
            this._currentPage--;
            this.navigateTo(this._currentPage);
        }
    };
    NavigateService.prototype.toLastPage = function () {
        this._currentPage = this._countPages;
        this.navigateTo(this._currentPage);
    };
    NavigateService.prototype.toFirstPage = function () {
        this._currentPage = 1;
        this.navigateTo(this._currentPage);
    };
    NavigateService.prototype.navigateTo = function (page) {
        this.currentPage = page;
        this._pagePreloadService.changeLastPageInView(page);
        this._observer.next(page);
    };
    NavigateService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_page_preload_service__WEBPACK_IMPORTED_MODULE_2__["PagePreloadService"]])
    ], NavigateService);
    return NavigateService;
}());



/***/ }),

/***/ "../../libs/common-components/src/lib/page-preload.service.ts":
/*!*************************************************************************************************************************!*\
  !*** /Users/pavelegorov/Documents/repos/GroupDocs.Total-Angular/libs/common-components/src/lib/page-preload.service.ts ***!
  \*************************************************************************************************************************/
/*! exports provided: PagePreloadService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PagePreloadService", function() { return PagePreloadService; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "../../node_modules/rxjs/_esm5/index.js");

var PagePreloadService = /** @class */ (function () {
    function PagePreloadService() {
        var _this = this;
        this._checkPreload = new rxjs__WEBPACK_IMPORTED_MODULE_0__["Observable"](function (observer) {
            return _this._observer = observer;
        });
    }
    Object.defineProperty(PagePreloadService.prototype, "checkPreload", {
        get: function () {
            return this._checkPreload;
        },
        enumerable: true,
        configurable: true
    });
    PagePreloadService.prototype.changeLastPageInView = function (page) {
        this._observer.next(page);
    };
    return PagePreloadService;
}());



/***/ }),

/***/ "../../libs/common-components/src/lib/page/page.component.html":
/*!**************************************************************************************************************************!*\
  !*** /Users/pavelegorov/Documents/repos/GroupDocs.Total-Angular/libs/common-components/src/lib/page/page.component.html ***!
  \**************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"page-{{number}}\"\n     [style.min-width.px]=\"width\" [style.min-height.px]=\"height\">\n  <div class=\"gd-wrapper\" [innerHTML]=\"data | safeHtml\" *ngIf=\"data && isHtml\"></div>\n  <img class=\"gd-page-image\" [style.width.px]=\"width\" [style.height.px]=\"height\" [attr.src]=\"imgData | safeResourceHtml\"\n       alt=\"\"\n       *ngIf=\"data && !isHtml\">\n  <div class=\"gd-page-spinner\" *ngIf=\"!data\"><i class=\"fa fa-circle-o-notch fa-spin\"></i> &nbsp;Loading... Please wait.\n  </div>\n</div>\n"

/***/ }),

/***/ "../../libs/common-components/src/lib/page/page.component.less":
/*!**************************************************************************************************************************!*\
  !*** /Users/pavelegorov/Documents/repos/GroupDocs.Total-Angular/libs/common-components/src/lib/page/page.component.less ***!
  \**************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".gd-page-spinner {\n  margin-top: 150px;\n  text-align: center;\n}\n.gd-wrapper {\n  width: inherit;\n  height: inherit;\n}\n.gd-wrapper img {\n  width: inherit;\n}\n.gd-wrapper div {\n  width: 100%;\n}\n.gd-highlight {\n  background-color: yellow;\n}\n.gd-highlight-select {\n  background-color: #ff9b00;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9wYXZlbGVnb3Jvdi9Eb2N1bWVudHMvcmVwb3MvR3JvdXBEb2NzLlRvdGFsLUFuZ3VsYXIvbGlicy9jb21tb24tY29tcG9uZW50cy9zcmMvbGliL3BhZ2UvcGFnZS5jb21wb25lbnQubGVzcyIsIi4uLy4uL2xpYnMvY29tbW9uLWNvbXBvbmVudHMvc3JjL2xpYi9wYWdlL3BhZ2UuY29tcG9uZW50Lmxlc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxpQkFBQTtFQUNBLGtCQUFBO0FDQ0Y7QURFQTtFQUNFLGNBQUE7RUFDQSxlQUFBO0FDQUY7QURHQTtFQUNFLGNBQUE7QUNERjtBRElBO0VBQ0UsV0FBQTtBQ0ZGO0FES0E7RUFDRSx3QkFBQTtBQ0hGO0FETUE7RUFDRSx5QkFBQTtBQ0pGIiwiZmlsZSI6Ii4uLy4uL2xpYnMvY29tbW9uLWNvbXBvbmVudHMvc3JjL2xpYi9wYWdlL3BhZ2UuY29tcG9uZW50Lmxlc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZ2QtcGFnZS1zcGlubmVyIHtcbiAgbWFyZ2luLXRvcDogMTUwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmdkLXdyYXBwZXIge1xuICB3aWR0aDogaW5oZXJpdDtcbiAgaGVpZ2h0OiBpbmhlcml0O1xufVxuXG4uZ2Qtd3JhcHBlciBpbWcge1xuICB3aWR0aDogaW5oZXJpdDtcbn1cblxuLmdkLXdyYXBwZXIgZGl2IHtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5nZC1oaWdobGlnaHQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB5ZWxsb3c7XG59XG5cbi5nZC1oaWdobGlnaHQtc2VsZWN0IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmOWIwMDtcbn1cbiIsIi5nZC1wYWdlLXNwaW5uZXIge1xuICBtYXJnaW4tdG9wOiAxNTBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLmdkLXdyYXBwZXIge1xuICB3aWR0aDogaW5oZXJpdDtcbiAgaGVpZ2h0OiBpbmhlcml0O1xufVxuLmdkLXdyYXBwZXIgaW1nIHtcbiAgd2lkdGg6IGluaGVyaXQ7XG59XG4uZ2Qtd3JhcHBlciBkaXYge1xuICB3aWR0aDogMTAwJTtcbn1cbi5nZC1oaWdobGlnaHQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB5ZWxsb3c7XG59XG4uZ2QtaGlnaGxpZ2h0LXNlbGVjdCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZjliMDA7XG59XG4iXX0= */"

/***/ }),

/***/ "../../libs/common-components/src/lib/page/page.component.ts":
/*!************************************************************************************************************************!*\
  !*** /Users/pavelegorov/Documents/repos/GroupDocs.Total-Angular/libs/common-components/src/lib/page/page.component.ts ***!
  \************************************************************************************************************************/
/*! exports provided: PageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageComponent", function() { return PageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");


var PageComponent = /** @class */ (function () {
    function PageComponent() {
    }
    PageComponent.prototype.ngOnInit = function () {
    };
    PageComponent.prototype.ngOnChanges = function (changes) {
        var dataImagePngBase64 = 'data:image/png;base64,';
        this.imgData = dataImagePngBase64;
        if (!this.isHtml) {
            this.imgData += this.data;
        }
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
    ], PageComponent.prototype, "angle", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
    ], PageComponent.prototype, "width", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
    ], PageComponent.prototype, "height", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
    ], PageComponent.prototype, "number", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], PageComponent.prototype, "data", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)
    ], PageComponent.prototype, "isHtml", void 0);
    PageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'gd-page',
            template: __webpack_require__(/*! ./page.component.html */ "../../libs/common-components/src/lib/page/page.component.html"),
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
            styles: [__webpack_require__(/*! ./page.component.less */ "../../libs/common-components/src/lib/page/page.component.less")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], PageComponent);
    return PageComponent;
}());



/***/ }),

/***/ "../../libs/common-components/src/lib/password-required/password-required.component.html":
/*!****************************************************************************************************************************************************!*\
  !*** /Users/pavelegorov/Documents/repos/GroupDocs.Total-Angular/libs/common-components/src/lib/password-required/password-required.component.html ***!
  \****************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<gd-modal id=\"gd-password-required\" [title]=\"'Password required'\">\n  <section id=\"gd-password-section\" class=\"tab-slider-body\">\n    <div class=\"inner-addon left-addon btn gd-password-wrap\" id=\"gd-password-wrap\">\n      <input type=\"password\" class=\"form-control\" placeholder=\"Enter password\" #pass\n             (keyup.enter)=\"setPassword(pass.value)\">\n      <button class=\"btn btn-primary gd-password-submit\" (click)=\"setPassword(pass.value)\">Submit</button>\n      <span class=\"gd-password-error\">{{message}}</span>\n    </div>\n  </section>\n</gd-modal>\n"

/***/ }),

/***/ "../../libs/common-components/src/lib/password-required/password-required.component.less":
/*!****************************************************************************************************************************************************!*\
  !*** /Users/pavelegorov/Documents/repos/GroupDocs.Total-Angular/libs/common-components/src/lib/password-required/password-required.component.less ***!
  \****************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".gd-password-wrap {\n  position: relative;\n  margin-left: -18px;\n  margin-top: 118px;\n}\n.gd-password-wrap > input {\n  padding-left: 12px;\n  margin-left: 35px;\n  width: 454px;\n  height: 32px;\n  color: #585858;\n}\n.gd-password-submit {\n  position: absolute;\n  top: 0;\n  color: #fff;\n  background-color: #3e4d59;\n  padding: 7px 16px 6px;\n  font-size: 12px;\n  cursor: pointer;\n}\n.gd-password-error {\n  position: absolute;\n  top: 38px;\n  left: 35px;\n  color: #ff0000;\n}\n@media (max-width: 1025px) {\n  .gd-password-wrap > input {\n    width: 50%;\n  }\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9wYXZlbGVnb3Jvdi9Eb2N1bWVudHMvcmVwb3MvR3JvdXBEb2NzLlRvdGFsLUFuZ3VsYXIvbGlicy9jb21tb24tY29tcG9uZW50cy9zcmMvbGliL3Bhc3N3b3JkLXJlcXVpcmVkL3Bhc3N3b3JkLXJlcXVpcmVkLmNvbXBvbmVudC5sZXNzIiwiLi4vLi4vbGlicy9jb21tb24tY29tcG9uZW50cy9zcmMvbGliL3Bhc3N3b3JkLXJlcXVpcmVkL3Bhc3N3b3JkLXJlcXVpcmVkLmNvbXBvbmVudC5sZXNzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0FDQ0Y7QURFQTtFQUNFLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7QUNBRjtBREdBO0VBQ0Usa0JBQUE7RUFDQSxNQUFBO0VBQ0EsV0FBQTtFQUNBLHlCQUFBO0VBQ0EscUJBQUE7RUFDQSxlQUFBO0VBQ0EsZUFBQTtBQ0RGO0FESUE7RUFDRSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0VBQ0EsY0FBQTtBQ0ZGO0FES0E7RUFDRTtJQUNFLFVBQUE7RUNIRjtBQUNGIiwiZmlsZSI6Ii4uLy4uL2xpYnMvY29tbW9uLWNvbXBvbmVudHMvc3JjL2xpYi9wYXNzd29yZC1yZXF1aXJlZC9wYXNzd29yZC1yZXF1aXJlZC5jb21wb25lbnQubGVzcyIsInNvdXJjZXNDb250ZW50IjpbIi5nZC1wYXNzd29yZC13cmFwIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBtYXJnaW4tbGVmdDogLTE4cHg7XG4gIG1hcmdpbi10b3A6IDExOHB4O1xufVxuXG4uZ2QtcGFzc3dvcmQtd3JhcCA+IGlucHV0IHtcbiAgcGFkZGluZy1sZWZ0OiAxMnB4O1xuICBtYXJnaW4tbGVmdDogMzVweDtcbiAgd2lkdGg6IDQ1NHB4O1xuICBoZWlnaHQ6IDMycHg7XG4gIGNvbG9yOiAjNTg1ODU4O1xufVxuXG4uZ2QtcGFzc3dvcmQtc3VibWl0IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGNvbG9yOiAjZmZmO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjM2U0ZDU5O1xuICBwYWRkaW5nOiA3cHggMTZweCA2cHg7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4uZ2QtcGFzc3dvcmQtZXJyb3Ige1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMzhweDtcbiAgbGVmdDogMzVweDtcbiAgY29sb3I6ICNmZjAwMDA7XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiAxMDI1cHgpIHtcbiAgLmdkLXBhc3N3b3JkLXdyYXAgPiBpbnB1dCB7XG4gICAgd2lkdGg6IDUwJTtcbiAgfVxufVxuIiwiLmdkLXBhc3N3b3JkLXdyYXAge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG1hcmdpbi1sZWZ0OiAtMThweDtcbiAgbWFyZ2luLXRvcDogMTE4cHg7XG59XG4uZ2QtcGFzc3dvcmQtd3JhcCA+IGlucHV0IHtcbiAgcGFkZGluZy1sZWZ0OiAxMnB4O1xuICBtYXJnaW4tbGVmdDogMzVweDtcbiAgd2lkdGg6IDQ1NHB4O1xuICBoZWlnaHQ6IDMycHg7XG4gIGNvbG9yOiAjNTg1ODU4O1xufVxuLmdkLXBhc3N3b3JkLXN1Ym1pdCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICBjb2xvcjogI2ZmZjtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzNlNGQ1OTtcbiAgcGFkZGluZzogN3B4IDE2cHggNnB4O1xuICBmb250LXNpemU6IDEycHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbi5nZC1wYXNzd29yZC1lcnJvciB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAzOHB4O1xuICBsZWZ0OiAzNXB4O1xuICBjb2xvcjogI2ZmMDAwMDtcbn1cbkBtZWRpYSAobWF4LXdpZHRoOiAxMDI1cHgpIHtcbiAgLmdkLXBhc3N3b3JkLXdyYXAgPiBpbnB1dCB7XG4gICAgd2lkdGg6IDUwJTtcbiAgfVxufVxuIl19 */"

/***/ }),

/***/ "../../libs/common-components/src/lib/password-required/password-required.component.ts":
/*!**************************************************************************************************************************************************!*\
  !*** /Users/pavelegorov/Documents/repos/GroupDocs.Total-Angular/libs/common-components/src/lib/password-required/password-required.component.ts ***!
  \**************************************************************************************************************************************************/
/*! exports provided: PasswordRequiredComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PasswordRequiredComponent", function() { return PasswordRequiredComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _exception_message_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../exception-message.service */ "../../libs/common-components/src/lib/exception-message.service.ts");
/* harmony import */ var _password_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../password.service */ "../../libs/common-components/src/lib/password.service.ts");




var PasswordRequiredComponent = /** @class */ (function () {
    function PasswordRequiredComponent(messageService, _passwordService) {
        var _this = this;
        this._passwordService = _passwordService;
        messageService.messageChange.subscribe(function (message) { return _this.message = message; });
    }
    PasswordRequiredComponent.prototype.ngOnInit = function () {
    };
    PasswordRequiredComponent.prototype.setPassword = function (value) {
        this._passwordService.setPassword(value);
    };
    PasswordRequiredComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'gd-password-required',
            template: __webpack_require__(/*! ./password-required.component.html */ "../../libs/common-components/src/lib/password-required/password-required.component.html"),
            styles: [__webpack_require__(/*! ./password-required.component.less */ "../../libs/common-components/src/lib/password-required/password-required.component.less")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_exception_message_service__WEBPACK_IMPORTED_MODULE_2__["ExceptionMessageService"], _password_service__WEBPACK_IMPORTED_MODULE_3__["PasswordService"]])
    ], PasswordRequiredComponent);
    return PasswordRequiredComponent;
}());



/***/ }),

/***/ "../../libs/common-components/src/lib/password.service.ts":
/*!*********************************************************************************************************************!*\
  !*** /Users/pavelegorov/Documents/repos/GroupDocs.Total-Angular/libs/common-components/src/lib/password.service.ts ***!
  \*********************************************************************************************************************/
/*! exports provided: PasswordService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PasswordService", function() { return PasswordService; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "../../node_modules/rxjs/_esm5/index.js");

var PasswordService = /** @class */ (function () {
    function PasswordService() {
        this._observer = new rxjs__WEBPACK_IMPORTED_MODULE_0__["Subject"]();
        this._passChange = this._observer.asObservable();
    }
    Object.defineProperty(PasswordService.prototype, "passChange", {
        get: function () {
            return this._passChange;
        },
        enumerable: true,
        configurable: true
    });
    PasswordService.prototype.setPassword = function (pass) {
        this._observer.next(pass);
    };
    return PasswordService;
}());



/***/ }),

/***/ "../../libs/common-components/src/lib/pipes.ts":
/*!**********************************************************************************************************!*\
  !*** /Users/pavelegorov/Documents/repos/GroupDocs.Total-Angular/libs/common-components/src/lib/pipes.ts ***!
  \**********************************************************************************************************/
/*! exports provided: SanitizeHtmlPipe, SanitizeResourceHtmlPipe, SanitizeStylePipe, HighlightSearchPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SanitizeHtmlPipe", function() { return SanitizeHtmlPipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SanitizeResourceHtmlPipe", function() { return SanitizeResourceHtmlPipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SanitizeStylePipe", function() { return SanitizeStylePipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HighlightSearchPipe", function() { return HighlightSearchPipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "../../node_modules/@angular/platform-browser/fesm5/platform-browser.js");



var SanitizeHtmlPipe = /** @class */ (function () {
    function SanitizeHtmlPipe(sanitizer) {
        this.sanitizer = sanitizer;
    }
    SanitizeHtmlPipe.prototype.transform = function (html) {
        return this.sanitizer.bypassSecurityTrustHtml(html);
    };
    SanitizeHtmlPipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({ name: 'safeHtml' }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["DomSanitizer"]])
    ], SanitizeHtmlPipe);
    return SanitizeHtmlPipe;
}());

var SanitizeResourceHtmlPipe = /** @class */ (function () {
    function SanitizeResourceHtmlPipe(sanitizer) {
        this.sanitizer = sanitizer;
    }
    SanitizeResourceHtmlPipe.prototype.transform = function (html) {
        return this.sanitizer.bypassSecurityTrustResourceUrl(html);
    };
    SanitizeResourceHtmlPipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({ name: 'safeResourceHtml' }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["DomSanitizer"]])
    ], SanitizeResourceHtmlPipe);
    return SanitizeResourceHtmlPipe;
}());

var SanitizeStylePipe = /** @class */ (function () {
    function SanitizeStylePipe(sanitizer) {
        this.sanitizer = sanitizer;
    }
    SanitizeStylePipe.prototype.transform = function (html) {
        return this.sanitizer.bypassSecurityTrustStyle(html);
    };
    SanitizeStylePipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({ name: 'safeStyle' }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["DomSanitizer"]])
    ], SanitizeStylePipe);
    return SanitizeStylePipe;
}());

var HighlightSearchPipe = /** @class */ (function () {
    function HighlightSearchPipe() {
    }
    HighlightSearchPipe.prototype.transform = function (value, args) {
        if (!args) {
            return value;
        }
        var re = new RegExp(args, 'gi'); //'gi' for case insensitive and can use 'g' if you want the search to be case sensitive.
        return value.replace(re, "<span class='gd-highlight'>$&</span>");
    };
    HighlightSearchPipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({ name: 'highlight' })
    ], HighlightSearchPipe);
    return HighlightSearchPipe;
}());



/***/ }),

/***/ "../../libs/common-components/src/lib/render-print.directive.ts":
/*!***************************************************************************************************************************!*\
  !*** /Users/pavelegorov/Documents/repos/GroupDocs.Total-Angular/libs/common-components/src/lib/render-print.directive.ts ***!
  \***************************************************************************************************************************/
/*! exports provided: RenderPrintDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderPrintDirective", function() { return RenderPrintDirective; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _render_print_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./render-print.service */ "../../libs/common-components/src/lib/render-print.service.ts");



var RenderPrintDirective = /** @class */ (function () {
    function RenderPrintDirective(_renderService) {
        var _this = this;
        this._renderService = _renderService;
        _renderService.renderPrint.subscribe(function (pages) {
            _this.renderPrint(pages);
        });
        _renderService.renderPrintBlob.subscribe(function (file) {
            _this.renderPrintBlob(file);
        });
    }
    RenderPrintDirective.prototype.renderPrint = function (pages) {
        var pagesHtml = '';
        if (this.htmlMode) {
            for (var _i = 0, pages_1 = pages; _i < pages_1.length; _i++) {
                var page = pages_1[_i];
                pagesHtml += '<div id="gd-page-' + page.number + '" class="gd-page">' +
                    '<div class="gd-wrapper">' + page.data + '</div>' +
                    '</div>';
            }
        }
        else {
            for (var _a = 0, pages_2 = pages; _a < pages_2.length; _a++) {
                var page = pages_2[_a];
                pagesHtml += '<div id="gd-page-' + page.number + '" class="gd-page">' +
                    '<div class="gd-wrapper"><image style="width: inherit !important" class="gd-page-image" src="data:image/png;base64,' + page.data + '" alt></image></div>' +
                    '</div>';
            }
        }
        this.openWindow(pagesHtml, pages[0].width, pages[0].height);
    };
    RenderPrintDirective.prototype.openWindow = function (pagesHtml, width, height) {
        var a4Height = 842;
        var a4Width = 595;
        var imageA4Adjusted = '';
        if (width > a4Width && height > a4Height) {
            var zoom = Math.round(height / a4Height) / 100;
            imageA4Adjusted = '.gd-page img { width: 100%; margin: 0; padding: 0;}';
            if (navigator.userAgent.toLowerCase().indexOf('firefox') > -1) {
                imageA4Adjusted = '.gd-page img { transform: scale(' + zoom + ');}';
            }
        }
        var cssPrint = '<style>' +
            '.gd-page { display: block; page-break-after:always; page-break-inside: avoid; }' +
            ' .gd-page:last-child {page-break-after: auto;}' + imageA4Adjusted;
        cssPrint = cssPrint + '</style>';
        var windowObject = window.open('', "PrintWindow", "width=750,height=650,top=50,left=50,toolbars=yes,scrollbars=yes,status=yes,resizable=yes");
        windowObject.focus();
        windowObject.document.writeln(cssPrint);
        windowObject.document.writeln(pagesHtml);
        //windowObject.document.close();
        windowObject.focus();
        windowObject.print();
        // windowObject.close();
    };
    RenderPrintDirective.prototype.renderPrintBlob = function (file) {
        var fileURL = URL.createObjectURL(file);
        var windowObject = window.open(fileURL, "PrintWindow", "width=750,height=650,top=50,left=50,toolbars=yes,scrollbars=yes,status=yes,resizable=yes");
        windowObject.focus();
        windowObject.print();
        windowObject.close();
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)
    ], RenderPrintDirective.prototype, "htmlMode", void 0);
    RenderPrintDirective = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
            selector: '[gdRenderPrint]'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_render_print_service__WEBPACK_IMPORTED_MODULE_2__["RenderPrintService"]])
    ], RenderPrintDirective);
    return RenderPrintDirective;
}());



/***/ }),

/***/ "../../libs/common-components/src/lib/render-print.service.ts":
/*!*************************************************************************************************************************!*\
  !*** /Users/pavelegorov/Documents/repos/GroupDocs.Total-Angular/libs/common-components/src/lib/render-print.service.ts ***!
  \*************************************************************************************************************************/
/*! exports provided: RenderPrintService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderPrintService", function() { return RenderPrintService; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "../../node_modules/rxjs/_esm5/index.js");

var RenderPrintService = /** @class */ (function () {
    function RenderPrintService() {
        var _this = this;
        this._render = new rxjs__WEBPACK_IMPORTED_MODULE_0__["Observable"](function (observer) {
            return _this._observer = observer;
        });
        this._renderBlob = new rxjs__WEBPACK_IMPORTED_MODULE_0__["Observable"](function (observer) {
            return _this._observerBlob = observer;
        });
    }
    Object.defineProperty(RenderPrintService.prototype, "renderPrint", {
        get: function () {
            return this._render;
        },
        enumerable: true,
        configurable: true
    });
    RenderPrintService.prototype.changePages = function (pages) {
        this._observer.next(pages);
    };
    Object.defineProperty(RenderPrintService.prototype, "renderPrintBlob", {
        get: function () {
            return this._renderBlob;
        },
        enumerable: true,
        configurable: true
    });
    RenderPrintService.prototype.changeBlob = function (file) {
        this._observerBlob.next(file);
    };
    return RenderPrintService;
}());



/***/ }),

/***/ "../../libs/common-components/src/lib/rotation.directive.ts":
/*!***********************************************************************************************************************!*\
  !*** /Users/pavelegorov/Documents/repos/GroupDocs.Total-Angular/libs/common-components/src/lib/rotation.directive.ts ***!
  \***********************************************************************************************************************/
/*! exports provided: RotationDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RotationDirective", function() { return RotationDirective; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");


var RotationDirective = /** @class */ (function () {
    function RotationDirective() {
        this.withMargin = true;
    }
    RotationDirective.prototype.updateCursor = function () {
        if (this.angle) {
            this.animation = 'none';
            this.transition = 'none';
            this.transform = 'rotate(' + this.angle + 'deg)';
        }
        else if (this.angle === 0 && this.animation) {
            this.animation = null;
            this.transition = null;
            this.transform = null;
        }
        if (this.withMargin) {
            if (this.angle === 90 || this.angle === 270 || this.angle === -90 || this.angle === -270) {
                if (this.isHtmlMode) {
                    if (this.isLandscape()) {
                        this.margin = '164px 254px';
                    }
                    else {
                        this.margin = '-111px 254px';
                    }
                }
                else {
                    if (this.isLandscape()) {
                        this.margin = '129px 100px -79px';
                    }
                    else {
                        this.margin = '-72px 100px -79px';
                    }
                }
            }
            else if (this.angle === -180 || this.angle === 180) {
                this.margin = '280px';
            }
            else {
                this.margin = null;
            }
        }
    };
    RotationDirective.prototype.isLandscape = function () {
        return this.width > this.height;
    };
    RotationDirective.prototype.ngOnInit = function () {
        this.updateCursor();
    };
    RotationDirective.prototype.ngOnChanges = function (changes) {
        this.updateCursor();
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
    ], RotationDirective.prototype, "angle", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)
    ], RotationDirective.prototype, "isHtmlMode", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
    ], RotationDirective.prototype, "width", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
    ], RotationDirective.prototype, "height", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], RotationDirective.prototype, "withMargin", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"])('style.animation'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], RotationDirective.prototype, "animation", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"])('style.transition-property'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], RotationDirective.prototype, "transition", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"])('style.transform'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], RotationDirective.prototype, "transform", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"])('style.margin'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], RotationDirective.prototype, "margin", void 0);
    RotationDirective = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
            selector: '[gdRotation]'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], RotationDirective);
    return RotationDirective;
}());



/***/ }),

/***/ "../../libs/common-components/src/lib/scrollable.directive.ts":
/*!*************************************************************************************************************************!*\
  !*** /Users/pavelegorov/Documents/repos/GroupDocs.Total-Angular/libs/common-components/src/lib/scrollable.directive.ts ***!
  \*************************************************************************************************************************/
/*! exports provided: ScrollableDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScrollableDirective", function() { return ScrollableDirective; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _navigate_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./navigate.service */ "../../libs/common-components/src/lib/navigate.service.ts");
/* harmony import */ var _page_preload_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./page-preload.service */ "../../libs/common-components/src/lib/page-preload.service.ts");
/* harmony import */ var _zoom_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./zoom.service */ "../../libs/common-components/src/lib/zoom.service.ts");
/* harmony import */ var _window_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./window.service */ "../../libs/common-components/src/lib/window.service.ts");
/* harmony import */ var _viewport_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./viewport.service */ "../../libs/common-components/src/lib/viewport.service.ts");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! jquery */ "../../node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_7__);








var $ = jquery__WEBPACK_IMPORTED_MODULE_7__;
var ScrollableDirective = /** @class */ (function () {
    function ScrollableDirective(_elementRef, _navigateService, _pagePreloadService, _zoomService, _windowService, _viewportService) {
        var _this = this;
        this._elementRef = _elementRef;
        this._navigateService = _navigateService;
        this._pagePreloadService = _pagePreloadService;
        this._zoomService = _zoomService;
        this._windowService = _windowService;
        this._viewportService = _viewportService;
        this.zoom = 100;
        this.zoom = _zoomService.zoom ? _zoomService.zoom : this.zoom;
        _zoomService.zoomChange.subscribe(function (val) {
            _this.zoom = val ? val : _this.zoom;
            _this.refresh();
        });
    }
    ScrollableDirective.prototype.ngAfterViewInit = function () {
        var _this = this;
        this.zoom = this._zoomService.zoom ? this._zoomService.zoom : this.zoom;
        this._navigateService.navigate.subscribe((function (value) {
            _this.currentPage = value;
            _this.scrollToPage(value);
        }));
        this.refresh();
    };
    ScrollableDirective.prototype.scrolling = function () {
        this.refresh();
    };
    ScrollableDirective.prototype.resizing = function () {
        this.refresh();
    };
    ScrollableDirective.prototype.scrollToPage = function (pageNumber) {
        var el = this._elementRef.nativeElement;
        var page = this.getPage(pageNumber);
        var prev = pageNumber > 0 ? this.getPage(pageNumber - 1) : null;
        var isSameTop = (prev && $(prev).offset().top === $(page).offset().top);
        if (this._viewportService.checkInViewport(page, this.zoom) && isSameTop) {
            return;
        }
        var pagesHeight = this.calculateOffset(pageNumber);
        var options = {
            left: 0,
            top: pagesHeight
        };
        if (el) {
            el.scrollTo(options);
        }
    };
    ScrollableDirective.prototype.getChildren = function () {
        var el = this._elementRef ? this._elementRef.nativeElement : null;
        if (el) {
            return el.children.item(0).children;
        }
    };
    ScrollableDirective.prototype.getPage = function (pageNumber) {
        var el = this._elementRef ? this._elementRef.nativeElement : null;
        if (el) {
            return el.children.item(0).children.item(pageNumber - 1);
        }
    };
    ScrollableDirective.prototype.calculateOffset = function (pageNumber) {
        var count = this.ifFirefox() ? 1 : this.countPagesOnWidth();
        var margin = this._windowService.isDesktop() ? 40 : 10;
        var pagesHeight = 0;
        for (var i = 1; i < pageNumber / count; i++) {
            var item = this.getPage(i);
            var clientHeight = item ? item.clientHeight : 0;
            pagesHeight += clientHeight > 0 ? clientHeight * this.getZoom() + margin : 0;
        }
        return pagesHeight;
    };
    ScrollableDirective.prototype.countPagesOnWidth = function () {
        var pageEl = this.getPage(1);
        var offset = 150;
        var count = Math.floor((this.getWidth() - offset) / (pageEl.getBoundingClientRect().width * this.getZoom()));
        return count === 0 ? 1 : count;
    };
    ScrollableDirective.prototype.ifFirefox = function () {
        return navigator.userAgent.toLowerCase().indexOf('firefox') > -1;
    };
    ScrollableDirective.prototype.refresh = function () {
        var page;
        var currentPageSet = false;
        var pageElem = this.getPage(this.currentPage);
        var currentPageRect = this.currentPage && pageElem ? pageElem.getBoundingClientRect() : null;
        for (page = 1; page < this.getChildren().length + 1; page++) {
            var element = this.getPage(page);
            if (this._viewportService.checkInViewport(element, this.zoom)) {
                if (!currentPageSet) {
                    if (!this.currentPage || !pageElem || (this.currentPage && currentPageRect && element.getBoundingClientRect().top !== currentPageRect.top)) {
                        this.currentPage = page;
                        this._navigateService.currentPage = page;
                    }
                    currentPageSet = true;
                }
                this._pagePreloadService.changeLastPageInView(page);
            }
        }
    };
    ScrollableDirective.prototype.ngOnChanges = function (changes) {
        this.refresh();
    };
    ScrollableDirective.prototype.ngOnInit = function () {
        this.zoom = this._zoomService.zoom ? this._zoomService.zoom : this.zoom;
    };
    ScrollableDirective.prototype.getWidth = function () {
        return this._elementRef ? this._elementRef.nativeElement.offsetWidth : window.innerWidth;
    };
    ScrollableDirective.prototype.getZoom = function () {
        return this.zoom / 100;
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)
    ], ScrollableDirective.prototype, "onRefresh", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('scroll'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", []),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", void 0)
    ], ScrollableDirective.prototype, "scrolling", null);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('window:resize'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", []),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", void 0)
    ], ScrollableDirective.prototype, "resizing", null);
    ScrollableDirective = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
            selector: '[gdScrollable]'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"],
            _navigate_service__WEBPACK_IMPORTED_MODULE_2__["NavigateService"],
            _page_preload_service__WEBPACK_IMPORTED_MODULE_3__["PagePreloadService"],
            _zoom_service__WEBPACK_IMPORTED_MODULE_4__["ZoomService"],
            _window_service__WEBPACK_IMPORTED_MODULE_5__["WindowService"],
            _viewport_service__WEBPACK_IMPORTED_MODULE_6__["ViewportService"]])
    ], ScrollableDirective);
    return ScrollableDirective;
}());



/***/ }),

/***/ "../../libs/common-components/src/lib/search.service.ts":
/*!*******************************************************************************************************************!*\
  !*** /Users/pavelegorov/Documents/repos/GroupDocs.Total-Angular/libs/common-components/src/lib/search.service.ts ***!
  \*******************************************************************************************************************/
/*! exports provided: SearchService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchService", function() { return SearchService; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "../../node_modules/rxjs/_esm5/index.js");

var SearchService = /** @class */ (function () {
    function SearchService() {
        this._observer = new rxjs__WEBPACK_IMPORTED_MODULE_0__["Subject"]();
        this._textChange = this._observer.asObservable();
        this._observerCurrent = new rxjs__WEBPACK_IMPORTED_MODULE_0__["Subject"]();
        this._currentChange = this._observerCurrent.asObservable();
        this._observerTotal = new rxjs__WEBPACK_IMPORTED_MODULE_0__["Subject"]();
        this._totalChange = this._observerTotal.asObservable();
    }
    Object.defineProperty(SearchService.prototype, "textChange", {
        get: function () {
            return this._textChange;
        },
        enumerable: true,
        configurable: true
    });
    SearchService.prototype.setText = function (text) {
        this._observer.next(text);
    };
    Object.defineProperty(SearchService.prototype, "currentChange", {
        get: function () {
            return this._currentChange;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SearchService.prototype, "totalChange", {
        get: function () {
            return this._totalChange;
        },
        enumerable: true,
        configurable: true
    });
    SearchService.prototype.setCurrent = function (current) {
        this._observerCurrent.next(current);
    };
    SearchService.prototype.setTotal = function (total) {
        this._observerTotal.next(total);
    };
    return SearchService;
}());



/***/ }),

/***/ "../../libs/common-components/src/lib/search/search.component.html":
/*!******************************************************************************************************************************!*\
  !*** /Users/pavelegorov/Documents/repos/GroupDocs.Total-Angular/libs/common-components/src/lib/search/search.component.html ***!
  \******************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"gd-nav-search-container\">\n  <input type=\"text\" class=\"gd-search-input\" #text (input)=\"setText(text.value)\"/>\n  <div class=\"gd-search-count\">{{current}} of {{total}}</div>\n  <div class=\"gd-nav-search-btn\" (click)=\"prev()\"><i fa [name]=\"'chevron-left'\"></i></div>\n  <div class=\"gd-nav-search-btn\" (click)=\"next()\"><i fa [name]=\"'chevron-right'\"></i></div>\n  <div class=\"gd-nav-search-btn gd-nav-search-cancel\" (click)=\"hide()\"><i fa [name]=\"'times'\"></i></div>\n</div>\n"

/***/ }),

/***/ "../../libs/common-components/src/lib/search/search.component.less":
/*!******************************************************************************************************************************!*\
  !*** /Users/pavelegorov/Documents/repos/GroupDocs.Total-Angular/libs/common-components/src/lib/search/search.component.less ***!
  \******************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".gd-nav-search-btn {\n  float: left;\n  margin: 0px 10px;\n  padding: 3px 5px;\n  cursor: pointer;\n  color: #959da5;\n}\n.gd-nav-search-cancel {\n  font-size: 15px;\n  width: 10px;\n  margin-left: 1px;\n  margin-top: -2px;\n}\n.gd-search-count {\n  color: #959DA5;\n  font-size: 11px;\n  position: absolute;\n  left: 221px;\n  top: 13px;\n  text-align: right;\n  width: 62px;\n}\n.gd-nav-search-container {\n  background-color: #3e4e5a;\n  min-width: 330px;\n  padding: 8px 0px 7px 7px;\n  position: absolute;\n  left: 328px;\n  top: 49px;\n  z-index: 1;\n}\n.gd-search-input {\n  float: left;\n  height: 11px;\n  width: 215px;\n  padding: 5px 65px 5px 5px;\n}\n@media (max-width: 1025px) {\n  .gd-nav-search-container {\n    top: 70px;\n    left: 45%;\n  }\n  .gd-search-input {\n    width: auto;\n  }\n  .gd-search-count {\n    left: 48%;\n  }\n}\n@media (min-width: 401px) and (max-width: 700px) {\n  .gd-search-input {\n    width: 226px;\n  }\n  .gd-search-count {\n    left: 55%;\n  }\n}\n@media (max-width: 500px) {\n  .gd-nav-search-container {\n    width: 100%;\n    left: 0;\n  }\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9wYXZlbGVnb3Jvdi9Eb2N1bWVudHMvcmVwb3MvR3JvdXBEb2NzLlRvdGFsLUFuZ3VsYXIvbGlicy9jb21tb24tY29tcG9uZW50cy9zcmMvbGliL3NlYXJjaC9zZWFyY2guY29tcG9uZW50Lmxlc3MiLCIuLi8uLi9saWJzL2NvbW1vbi1jb21wb25lbnRzL3NyYy9saWIvc2VhcmNoL3NlYXJjaC5jb21wb25lbnQubGVzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7QUNDRjtBREVBO0VBQ0UsZUFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0FDQUY7QURHQTtFQUNFLGNBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsU0FBQTtFQUNBLGlCQUFBO0VBQ0EsV0FBQTtBQ0RGO0FESUE7RUFDQyx5QkFBQTtFQUNHLGdCQUFBO0VBQ0Esd0JBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtBQ0ZKO0FES0E7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDSCx5QkFBQTtBQ0hEO0FET0E7RUFDRTtJQUNFLFNBQUE7SUFDSCxTQUFBO0VDTEM7RURPQTtJQUNFLFdBQUE7RUNMRjtFRE9BO0lBQ0UsU0FBQTtFQ0xGO0FBQ0Y7QURPQTtFQUNFO0lBQ0UsWUFBQTtFQ0xGO0VET0E7SUFDRSxTQUFBO0VDTEY7QUFDRjtBRFFBO0VBQ0U7SUFDRCxXQUFBO0lBQ0EsT0FBQTtFQ05DO0FBQ0YiLCJmaWxlIjoiLi4vLi4vbGlicy9jb21tb24tY29tcG9uZW50cy9zcmMvbGliL3NlYXJjaC9zZWFyY2guY29tcG9uZW50Lmxlc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZ2QtbmF2LXNlYXJjaC1idG4ge1xuICBmbG9hdDogbGVmdDtcbiAgbWFyZ2luOiAwcHggMTBweDtcbiAgcGFkZGluZzogM3B4IDVweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBjb2xvcjogcmdiKDE0OSwgMTU3LCAxNjUpO1xufVxuXG4uZ2QtbmF2LXNlYXJjaC1jYW5jZWwge1xuICBmb250LXNpemU6IDE1cHg7XG4gIHdpZHRoOiAxMHB4O1xuICBtYXJnaW4tbGVmdDogMXB4O1xuICBtYXJnaW4tdG9wOiAtMnB4O1xufVxuXG4uZ2Qtc2VhcmNoLWNvdW50IHtcbiAgY29sb3I6ICM5NTlEQTU7XG4gIGZvbnQtc2l6ZTogMTFweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiAyMjFweDtcbiAgdG9wOiAxM3B4O1xuICB0ZXh0LWFsaWduOiByaWdodDtcbiAgd2lkdGg6IDYycHg7XG59XG5cbi5nZC1uYXYtc2VhcmNoLWNvbnRhaW5lciB7XG5cdGJhY2tncm91bmQtY29sb3I6ICMzZTRlNWE7XG4gICAgbWluLXdpZHRoOiAzMzBweDtcbiAgICBwYWRkaW5nOiA4cHggMHB4IDdweCA3cHg7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGxlZnQ6IDMyOHB4O1xuICAgIHRvcDogNDlweDtcbiAgICB6LWluZGV4OiAxO1xufVxuXG4uZ2Qtc2VhcmNoLWlucHV0IHtcbiAgICBmbG9hdDogbGVmdDtcbiAgICBoZWlnaHQ6IDExcHg7XG4gICAgd2lkdGg6IDIxNXB4O1xuXHRwYWRkaW5nOiA1cHggNjVweCA1cHggNXB4O1xufVxuXG5cbkBtZWRpYSAobWF4LXdpZHRoOiAxMDI1cHgpIHtcbiAgLmdkLW5hdi1zZWFyY2gtY29udGFpbmVyIHsgICBcbiAgICB0b3A6IDcwcHg7XG5cdGxlZnQ6IDQ1JTtcbiAgfVxuICAuZ2Qtc2VhcmNoLWlucHV0IHtcbiAgICB3aWR0aDogYXV0bztcbiAgfVxuICAuZ2Qtc2VhcmNoLWNvdW50IHtcbiAgICBsZWZ0OiA0OCU7XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiA0MDFweCkgYW5kIChtYXgtd2lkdGg6IDcwMHB4KSB7XG4gIC5nZC1zZWFyY2gtaW5wdXQge1xuICAgIHdpZHRoOiAyMjZweDtcbiAgfVxuICAuZ2Qtc2VhcmNoLWNvdW50IHtcbiAgICBsZWZ0OiA1NSU7XG4gIH1cbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDUwMHB4KSB7XG4gIC5nZC1uYXYtc2VhcmNoLWNvbnRhaW5lciB7XG5cdHdpZHRoOiAxMDAlO1xuXHRsZWZ0OiAwO1xuICB9XG59IiwiLmdkLW5hdi1zZWFyY2gtYnRuIHtcbiAgZmxvYXQ6IGxlZnQ7XG4gIG1hcmdpbjogMHB4IDEwcHg7XG4gIHBhZGRpbmc6IDNweCA1cHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgY29sb3I6ICM5NTlkYTU7XG59XG4uZ2QtbmF2LXNlYXJjaC1jYW5jZWwge1xuICBmb250LXNpemU6IDE1cHg7XG4gIHdpZHRoOiAxMHB4O1xuICBtYXJnaW4tbGVmdDogMXB4O1xuICBtYXJnaW4tdG9wOiAtMnB4O1xufVxuLmdkLXNlYXJjaC1jb3VudCB7XG4gIGNvbG9yOiAjOTU5REE1O1xuICBmb250LXNpemU6IDExcHg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogMjIxcHg7XG4gIHRvcDogMTNweDtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gIHdpZHRoOiA2MnB4O1xufVxuLmdkLW5hdi1zZWFyY2gtY29udGFpbmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzNlNGU1YTtcbiAgbWluLXdpZHRoOiAzMzBweDtcbiAgcGFkZGluZzogOHB4IDBweCA3cHggN3B4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDMyOHB4O1xuICB0b3A6IDQ5cHg7XG4gIHotaW5kZXg6IDE7XG59XG4uZ2Qtc2VhcmNoLWlucHV0IHtcbiAgZmxvYXQ6IGxlZnQ7XG4gIGhlaWdodDogMTFweDtcbiAgd2lkdGg6IDIxNXB4O1xuICBwYWRkaW5nOiA1cHggNjVweCA1cHggNXB4O1xufVxuQG1lZGlhIChtYXgtd2lkdGg6IDEwMjVweCkge1xuICAuZ2QtbmF2LXNlYXJjaC1jb250YWluZXIge1xuICAgIHRvcDogNzBweDtcbiAgICBsZWZ0OiA0NSU7XG4gIH1cbiAgLmdkLXNlYXJjaC1pbnB1dCB7XG4gICAgd2lkdGg6IGF1dG87XG4gIH1cbiAgLmdkLXNlYXJjaC1jb3VudCB7XG4gICAgbGVmdDogNDglO1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogNDAxcHgpIGFuZCAobWF4LXdpZHRoOiA3MDBweCkge1xuICAuZ2Qtc2VhcmNoLWlucHV0IHtcbiAgICB3aWR0aDogMjI2cHg7XG4gIH1cbiAgLmdkLXNlYXJjaC1jb3VudCB7XG4gICAgbGVmdDogNTUlO1xuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogNTAwcHgpIHtcbiAgLmdkLW5hdi1zZWFyY2gtY29udGFpbmVyIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBsZWZ0OiAwO1xuICB9XG59XG4iXX0= */"

/***/ }),

/***/ "../../libs/common-components/src/lib/search/search.component.ts":
/*!****************************************************************************************************************************!*\
  !*** /Users/pavelegorov/Documents/repos/GroupDocs.Total-Angular/libs/common-components/src/lib/search/search.component.ts ***!
  \****************************************************************************************************************************/
/*! exports provided: SearchComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchComponent", function() { return SearchComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _search_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../search.service */ "../../libs/common-components/src/lib/search.service.ts");



var SearchComponent = /** @class */ (function () {
    function SearchComponent(_searchService) {
        var _this = this;
        this._searchService = _searchService;
        this.hidePanel = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"](false);
        this.current = 0;
        this.total = 0;
        _searchService.totalChange.subscribe(function (total) {
            _this.total = total;
            if (total !== 0) {
                _this.current = 1;
            }
            else {
                _this.current = 0;
            }
            _this._searchService.setCurrent(_this.current);
        });
    }
    SearchComponent.prototype.ngOnInit = function () {
    };
    SearchComponent.prototype.setText = function (text) {
        this._searchService.setText(text);
    };
    SearchComponent.prototype.hide = function () {
        this.setText('');
        this.hidePanel.emit(true);
    };
    SearchComponent.prototype.prev = function () {
        if (this.current > 1) {
            this.current--;
            this._searchService.setCurrent(this.current);
        }
    };
    SearchComponent.prototype.next = function () {
        if (this.current < this.total) {
            this.current++;
            this._searchService.setCurrent(this.current);
        }
    };
    SearchComponent.prototype.ngAfterViewInit = function () {
        this.textElement.nativeElement.focus();
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], SearchComponent.prototype, "hidePanel", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('text'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], SearchComponent.prototype, "textElement", void 0);
    SearchComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'gd-search',
            template: __webpack_require__(/*! ./search.component.html */ "../../libs/common-components/src/lib/search/search.component.html"),
            styles: [__webpack_require__(/*! ./search.component.less */ "../../libs/common-components/src/lib/search/search.component.less")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_search_service__WEBPACK_IMPORTED_MODULE_2__["SearchService"]])
    ], SearchComponent);
    return SearchComponent;
}());



/***/ }),

/***/ "../../libs/common-components/src/lib/searchable.directive.ts":
/*!*************************************************************************************************************************!*\
  !*** /Users/pavelegorov/Documents/repos/GroupDocs.Total-Angular/libs/common-components/src/lib/searchable.directive.ts ***!
  \*************************************************************************************************************************/
/*! exports provided: SearchableDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchableDirective", function() { return SearchableDirective; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _search_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./search.service */ "../../libs/common-components/src/lib/search.service.ts");
/* harmony import */ var _pipes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pipes */ "../../libs/common-components/src/lib/pipes.ts");
/* harmony import */ var _zoom_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./zoom.service */ "../../libs/common-components/src/lib/zoom.service.ts");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! jquery */ "../../node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_5__);






var $ = jquery__WEBPACK_IMPORTED_MODULE_5__;
var SearchableDirective = /** @class */ (function () {
    function SearchableDirective(_elementRef, _searchService, _highlight, _zoomService) {
        var _this = this;
        this._elementRef = _elementRef;
        this._searchService = _searchService;
        this._highlight = _highlight;
        this._zoomService = _zoomService;
        this.current = 0;
        this.total = 0;
        this.zoom = 100;
        _searchService.currentChange.subscribe(function (current) {
            _this.current = current;
            if (_this.current !== 0) {
                _this.moveToCurrent();
            }
        });
        _searchService.textChange.subscribe(function (text) {
            _this.text = text;
            _this.highlightSearch();
        });
        this.zoom = _zoomService.zoom ? _zoomService.zoom : this.zoom;
        _zoomService.zoomChange.subscribe(function (val) {
            _this.zoom = val ? val : _this.zoom;
        });
    }
    SearchableDirective.prototype.highlightSearch = function () {
        var el = this._elementRef ? this._elementRef.nativeElement : null;
        if (el) {
            this.cleanHighlight(el);
            if (this.text) {
                this.highlightEl(el);
                var count = el.querySelectorAll('.gd-highlight').length;
                this.total = count;
            }
            else {
                this.total = 0;
            }
            this._searchService.setTotal(this.total);
        }
    };
    SearchableDirective.prototype.moveToCurrent = function () {
        if (this.current === 0) {
            return;
        }
        var currentZoom = this.getZoom();
        var el = this._elementRef ? this._elementRef.nativeElement : null;
        if (el) {
            el.querySelectorAll('.gd-highlight-select').forEach(function (value) {
                $(value).removeClass('gd-highlight-select');
            });
            var currentEl = el.querySelectorAll('.gd-highlight')[this.current - 1];
            $(currentEl).addClass('gd-highlight-select');
            if (currentEl) {
                var options = {
                    left: 0,
                    top: ($(currentEl).offset().top * currentZoom) + el.parentElement.scrollTop - 150,
                };
                el.parentElement.scrollTo(options);
            }
        }
    };
    SearchableDirective.prototype.highlightEl = function (el) {
        var textNodes = $(el).find('*').contents().filter(function () {
            var nodeName = this.parentElement.nodeName.toLowerCase();
            var checkClass = this.classList ? !this.classList.contains('gd-highlight') : true;
            return this.nodeType === 3 &&
                this.textContent.trim().length !== 0 &&
                nodeName !== 'style' &&
                nodeName !== 'title' &&
                nodeName !== 'body' &&
                nodeName !== 'script' &&
                checkClass;
        });
        var text = this.text;
        var highlight = this._highlight;
        textNodes.each(function () {
            var $this = $(this);
            var content = $this.text();
            content = highlight.transform(content, text);
            $this.replaceWith(content);
        });
        el.normalize();
    };
    SearchableDirective.prototype.cleanHighlight = function (el) {
        var nodeListOf = el.querySelectorAll('.gd-highlight');
        for (var i = 0; i < nodeListOf.length; i++) {
            var element = nodeListOf.item(i);
            element.replaceWith(element.innerText);
        }
        el.normalize();
    };
    SearchableDirective.prototype.getZoom = function () {
        return this.zoom / 100;
    };
    SearchableDirective = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
            selector: '[gdSearchable]'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"],
            _search_service__WEBPACK_IMPORTED_MODULE_2__["SearchService"],
            _pipes__WEBPACK_IMPORTED_MODULE_3__["HighlightSearchPipe"],
            _zoom_service__WEBPACK_IMPORTED_MODULE_4__["ZoomService"]])
    ], SearchableDirective);
    return SearchableDirective;
}());



/***/ }),

/***/ "../../libs/common-components/src/lib/select/select.component.html":
/*!******************************************************************************************************************************!*\
  !*** /Users/pavelegorov/Documents/repos/GroupDocs.Total-Angular/libs/common-components/src/lib/select/select.component.html ***!
  \******************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"select\">\n  <span class=\"selected-value\" gdDisabledCursor [dis]=\"disabled\" (click)=\"toggle()\">{{showSelected}}%</span>\n  <span class=\"nav-caret\" gdDisabledCursor [dis]=\"disabled\" (click)=\"toggle()\"></span>\n  <div class=\"dropdown-menu\" *ngIf=\"isOpen\">\n    <div *ngFor=\"let option of options\">\n      <div *ngIf=\"!option.separator\" (click)=\"select(option.value)\" class=\"option\">{{option.name}}</div>\n      <div *ngIf=\"option.separator\" role=\"separator\" class=\"dropdown-menu-separator\"></div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../libs/common-components/src/lib/select/select.component.less":
/*!******************************************************************************************************************************!*\
  !*** /Users/pavelegorov/Documents/repos/GroupDocs.Total-Angular/libs/common-components/src/lib/select/select.component.less ***!
  \******************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".select {\n  min-width: 50px;\n  color: #959da5;\n}\n.selected-value {\n  font-size: 14px;\n  cursor: pointer;\n}\n.nav-caret {\n  display: inline-block;\n  width: 0;\n  height: 0;\n  margin-left: 2px;\n  vertical-align: middle;\n  border-top: 4px dashed;\n  border-top: 4px solid \\9;\n  border-right: 4px solid transparent;\n  border-left: 4px solid transparent;\n  cursor: pointer;\n}\n.dropdown-menu {\n  position: absolute;\n  top: 49px;\n  z-index: 1000;\n  float: left;\n  min-width: 160px;\n  padding: 5px 0;\n  list-style: none;\n  font-size: 13px;\n  text-align: left;\n  background-color: #ffffff;\n  border: 1px solid #cccccc;\n  border: 1px solid rgba(0, 0, 0, 0.15);\n  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.175);\n  background-clip: padding-box;\n}\n.dropdown-menu .option {\n  display: block;\n  padding: 3px 20px;\n  clear: both;\n  font-weight: normal;\n  line-height: 1.42857143;\n  white-space: nowrap;\n  cursor: pointer;\n}\n.dropdown-menu-separator {\n  height: 1px;\n  margin: 8px 0;\n  overflow: hidden;\n  background-color: #e5e5e5;\n  padding: 0 !important;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9wYXZlbGVnb3Jvdi9Eb2N1bWVudHMvcmVwb3MvR3JvdXBEb2NzLlRvdGFsLUFuZ3VsYXIvbGlicy9jb21tb24tY29tcG9uZW50cy9zcmMvbGliL3NlbGVjdC9zZWxlY3QuY29tcG9uZW50Lmxlc3MiLCIuLi8uLi9saWJzL2NvbW1vbi1jb21wb25lbnRzL3NyYy9saWIvc2VsZWN0L3NlbGVjdC5jb21wb25lbnQubGVzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGVBQUE7RUFDQSxjQUFBO0FDQ0Y7QURFQTtFQUNFLGVBQUE7RUFDQSxlQUFBO0FDQUY7QURHQTtFQUNFLHFCQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSxnQkFBQTtFQUNBLHNCQUFBO0VBQ0Esc0JBQUE7RUFDQSx3QkFBQTtFQUNBLG1DQUFBO0VBQ0Esa0NBQUE7RUFDQSxlQUFBO0FDREY7QURJQTtFQUNFLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLGFBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSx5QkFBQTtFQUNBLHlCQUFBO0VBQ0EscUNBQUE7RUFFQSwyQ0FBQTtFQUNBLDRCQUFBO0FDRkY7QURLQTtFQUNFLGNBQUE7RUFDQSxpQkFBQTtFQUNBLFdBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0FDSEY7QURNQTtFQUNFLFdBQUE7RUFDQSxhQUFBO0VBQ0EsZ0JBQUE7RUFDQSx5QkFBQTtFQUNBLHFCQUFBO0FDSkYiLCJmaWxlIjoiLi4vLi4vbGlicy9jb21tb24tY29tcG9uZW50cy9zcmMvbGliL3NlbGVjdC9zZWxlY3QuY29tcG9uZW50Lmxlc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc2VsZWN0IHtcbiAgbWluLXdpZHRoOiA1MHB4O1xuICBjb2xvcjogIzk1OWRhNTtcbn1cblxuLnNlbGVjdGVkLXZhbHVlIHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5uYXYtY2FyZXQge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHdpZHRoOiAwO1xuICBoZWlnaHQ6IDA7XG4gIG1hcmdpbi1sZWZ0OiAycHg7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gIGJvcmRlci10b3A6IDRweCBkYXNoZWQ7XG4gIGJvcmRlci10b3A6IDRweCBzb2xpZCBcXDk7XG4gIGJvcmRlci1yaWdodDogNHB4IHNvbGlkIHRyYW5zcGFyZW50O1xuICBib3JkZXItbGVmdDogNHB4IHNvbGlkIHRyYW5zcGFyZW50O1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5kcm9wZG93bi1tZW51IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDQ5cHg7XG4gIHotaW5kZXg6IDEwMDA7XG4gIGZsb2F0OiBsZWZ0O1xuICBtaW4td2lkdGg6IDE2MHB4O1xuICBwYWRkaW5nOiA1cHggMDtcbiAgbGlzdC1zdHlsZTogbm9uZTtcbiAgZm9udC1zaXplOiAxM3B4O1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xuICBib3JkZXI6IDFweCBzb2xpZCAjY2NjY2NjO1xuICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMTUpO1xuICAtd2Via2l0LWJveC1zaGFkb3c6IDAgNnB4IDEycHggcmdiYSgwLCAwLCAwLCAwLjE3NSk7XG4gIGJveC1zaGFkb3c6IDAgNnB4IDEycHggcmdiYSgwLCAwLCAwLCAwLjE3NSk7XG4gIGJhY2tncm91bmQtY2xpcDogcGFkZGluZy1ib3g7XG59XG5cbi5kcm9wZG93bi1tZW51IC5vcHRpb24ge1xuICBkaXNwbGF5OiBibG9jaztcbiAgcGFkZGluZzogM3B4IDIwcHg7XG4gIGNsZWFyOiBib3RoO1xuICBmb250LXdlaWdodDogbm9ybWFsO1xuICBsaW5lLWhlaWdodDogMS40Mjg1NzE0MztcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4uZHJvcGRvd24tbWVudS1zZXBhcmF0b3Ige1xuICBoZWlnaHQ6IDFweDtcbiAgbWFyZ2luOiA4cHggMDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2U1ZTVlNTtcbiAgcGFkZGluZzogMCAhaW1wb3J0YW50O1xufVxuIiwiLnNlbGVjdCB7XG4gIG1pbi13aWR0aDogNTBweDtcbiAgY29sb3I6ICM5NTlkYTU7XG59XG4uc2VsZWN0ZWQtdmFsdWUge1xuICBmb250LXNpemU6IDE0cHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbi5uYXYtY2FyZXQge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHdpZHRoOiAwO1xuICBoZWlnaHQ6IDA7XG4gIG1hcmdpbi1sZWZ0OiAycHg7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gIGJvcmRlci10b3A6IDRweCBkYXNoZWQ7XG4gIGJvcmRlci10b3A6IDRweCBzb2xpZCBcXDk7XG4gIGJvcmRlci1yaWdodDogNHB4IHNvbGlkIHRyYW5zcGFyZW50O1xuICBib3JkZXItbGVmdDogNHB4IHNvbGlkIHRyYW5zcGFyZW50O1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG4uZHJvcGRvd24tbWVudSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiA0OXB4O1xuICB6LWluZGV4OiAxMDAwO1xuICBmbG9hdDogbGVmdDtcbiAgbWluLXdpZHRoOiAxNjBweDtcbiAgcGFkZGluZzogNXB4IDA7XG4gIGxpc3Qtc3R5bGU6IG5vbmU7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcbiAgYm9yZGVyOiAxcHggc29saWQgI2NjY2NjYztcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjE1KTtcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiAwIDZweCAxMnB4IHJnYmEoMCwgMCwgMCwgMC4xNzUpO1xuICBib3gtc2hhZG93OiAwIDZweCAxMnB4IHJnYmEoMCwgMCwgMCwgMC4xNzUpO1xuICBiYWNrZ3JvdW5kLWNsaXA6IHBhZGRpbmctYm94O1xufVxuLmRyb3Bkb3duLW1lbnUgLm9wdGlvbiB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBwYWRkaW5nOiAzcHggMjBweDtcbiAgY2xlYXI6IGJvdGg7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gIGxpbmUtaGVpZ2h0OiAxLjQyODU3MTQzO1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG4uZHJvcGRvd24tbWVudS1zZXBhcmF0b3Ige1xuICBoZWlnaHQ6IDFweDtcbiAgbWFyZ2luOiA4cHggMDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2U1ZTVlNTtcbiAgcGFkZGluZzogMCAhaW1wb3J0YW50O1xufVxuIl19 */"

/***/ }),

/***/ "../../libs/common-components/src/lib/select/select.component.ts":
/*!****************************************************************************************************************************!*\
  !*** /Users/pavelegorov/Documents/repos/GroupDocs.Total-Angular/libs/common-components/src/lib/select/select.component.ts ***!
  \****************************************************************************************************************************/
/*! exports provided: SelectComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelectComponent", function() { return SelectComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");


var SelectComponent = /** @class */ (function () {
    function SelectComponent() {
        this.disabled = false;
        this.selected = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.isOpen = false;
    }
    SelectComponent.prototype.open = function () {
        if (!this.disabled) {
            this.isOpen = true;
        }
    };
    SelectComponent.prototype.close = function () {
        this.isOpen = false;
    };
    SelectComponent.prototype.toggle = function () {
        if (!this.disabled) {
            this.isOpen = !this.isOpen;
        }
    };
    SelectComponent.prototype.select = function (value) {
        this.selected.emit(value);
        this.close();
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Array)
    ], SelectComponent.prototype, "options", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], SelectComponent.prototype, "disabled", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], SelectComponent.prototype, "showSelected", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
    ], SelectComponent.prototype, "selected", void 0);
    SelectComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'gd-select',
            template: __webpack_require__(/*! ./select.component.html */ "../../libs/common-components/src/lib/select/select.component.html"),
            styles: [__webpack_require__(/*! ./select.component.less */ "../../libs/common-components/src/lib/select/select.component.less")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], SelectComponent);
    return SelectComponent;
}());



/***/ }),

/***/ "../../libs/common-components/src/lib/tooltip/tooltip.component.html":
/*!********************************************************************************************************************************!*\
  !*** /Users/pavelegorov/Documents/repos/GroupDocs.Total-Angular/libs/common-components/src/lib/tooltip/tooltip.component.html ***!
  \********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<span class=\"tooltip\" [ngClass]=\"visibility\" [innerHTML]=\"text\"></span>\n"

/***/ }),

/***/ "../../libs/common-components/src/lib/tooltip/tooltip.component.less":
/*!********************************************************************************************************************************!*\
  !*** /Users/pavelegorov/Documents/repos/GroupDocs.Total-Angular/libs/common-components/src/lib/tooltip/tooltip.component.less ***!
  \********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".tooltip {\n  position: absolute;\n  margin-top: 37px;\n  width: 120px;\n  background-color: #000000;\n  color: #fff;\n  text-align: center;\n  border-radius: 0px;\n  padding: 5px 0;\n  z-index: 1;\n  margin-left: -66px;\n  font-size: 10px;\n}\n.tooltip.hidden {\n  visibility: hidden;\n}\n.tooltip.shown {\n  visibility: visible;\n}\n.shown:after {\n  content: \" \";\n  position: absolute;\n  bottom: 100%;\n  left: 50%;\n  margin-left: -5px;\n  border-width: 5px;\n  border-style: solid;\n  border-color: transparent transparent black transparent;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9wYXZlbGVnb3Jvdi9Eb2N1bWVudHMvcmVwb3MvR3JvdXBEb2NzLlRvdGFsLUFuZ3VsYXIvbGlicy9jb21tb24tY29tcG9uZW50cy9zcmMvbGliL3Rvb2x0aXAvdG9vbHRpcC5jb21wb25lbnQubGVzcyIsIi4uLy4uL2xpYnMvY29tbW9uLWNvbXBvbmVudHMvc3JjL2xpYi90b29sdGlwL3Rvb2x0aXAuY29tcG9uZW50Lmxlc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLHlCQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0VBQ0EsVUFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtBQ0NGO0FEQ0E7RUFDRSxrQkFBQTtBQ0NGO0FEQ0E7RUFDRSxtQkFBQTtBQ0NGO0FEQ0E7RUFDRSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EsU0FBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtFQUNBLHVEQUFBO0FDQ0YiLCJmaWxlIjoiLi4vLi4vbGlicy9jb21tb24tY29tcG9uZW50cy9zcmMvbGliL3Rvb2x0aXAvdG9vbHRpcC5jb21wb25lbnQubGVzcyIsInNvdXJjZXNDb250ZW50IjpbIi50b29sdGlwIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBtYXJnaW4tdG9wOiAzN3B4O1xuICB3aWR0aDogMTIwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDAwMDA7XG4gIGNvbG9yOiAjZmZmO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGJvcmRlci1yYWRpdXM6IDBweDtcbiAgcGFkZGluZzogNXB4IDA7XG4gIHotaW5kZXg6IDE7XG4gIG1hcmdpbi1sZWZ0OiAtNjZweDtcbiAgZm9udC1zaXplOiAxMHB4O1xufVxuLnRvb2x0aXAuaGlkZGVuIHtcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xufVxuLnRvb2x0aXAuc2hvd24ge1xuICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xufVxuLnNob3duOmFmdGVyIHtcbiAgY29udGVudDogXCIgXCI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm90dG9tOiAxMDAlO1xuICBsZWZ0OiA1MCU7XG4gIG1hcmdpbi1sZWZ0OiAtNXB4O1xuICBib3JkZXItd2lkdGg6IDVweDtcbiAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcbiAgYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudCB0cmFuc3BhcmVudCBibGFjayB0cmFuc3BhcmVudDtcbn1cbiIsIi50b29sdGlwIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBtYXJnaW4tdG9wOiAzN3B4O1xuICB3aWR0aDogMTIwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDAwMDA7XG4gIGNvbG9yOiAjZmZmO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGJvcmRlci1yYWRpdXM6IDBweDtcbiAgcGFkZGluZzogNXB4IDA7XG4gIHotaW5kZXg6IDE7XG4gIG1hcmdpbi1sZWZ0OiAtNjZweDtcbiAgZm9udC1zaXplOiAxMHB4O1xufVxuLnRvb2x0aXAuaGlkZGVuIHtcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xufVxuLnRvb2x0aXAuc2hvd24ge1xuICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xufVxuLnNob3duOmFmdGVyIHtcbiAgY29udGVudDogXCIgXCI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm90dG9tOiAxMDAlO1xuICBsZWZ0OiA1MCU7XG4gIG1hcmdpbi1sZWZ0OiAtNXB4O1xuICBib3JkZXItd2lkdGg6IDVweDtcbiAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcbiAgYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudCB0cmFuc3BhcmVudCBibGFjayB0cmFuc3BhcmVudDtcbn1cbiJdfQ== */"

/***/ }),

/***/ "../../libs/common-components/src/lib/tooltip/tooltip.component.ts":
/*!******************************************************************************************************************************!*\
  !*** /Users/pavelegorov/Documents/repos/GroupDocs.Total-Angular/libs/common-components/src/lib/tooltip/tooltip.component.ts ***!
  \******************************************************************************************************************************/
/*! exports provided: TooltipComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TooltipComponent", function() { return TooltipComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");


var TooltipComponent = /** @class */ (function () {
    function TooltipComponent() {
        this.visibility = 'hidden';
    }
    Object.defineProperty(TooltipComponent.prototype, "show", {
        set: function (value) {
            this.visibility = value ? 'shown' : 'hidden';
        },
        enumerable: true,
        configurable: true
    });
    TooltipComponent.prototype.ngOnInit = function () {
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], TooltipComponent.prototype, "text", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Boolean])
    ], TooltipComponent.prototype, "show", null);
    TooltipComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'gd-tooltip',
            template: __webpack_require__(/*! ./tooltip.component.html */ "../../libs/common-components/src/lib/tooltip/tooltip.component.html"),
            styles: [__webpack_require__(/*! ./tooltip.component.less */ "../../libs/common-components/src/lib/tooltip/tooltip.component.less")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], TooltipComponent);
    return TooltipComponent;
}());



/***/ }),

/***/ "../../libs/common-components/src/lib/top-toolbar/top-toolbar.component.html":
/*!****************************************************************************************************************************************!*\
  !*** /Users/pavelegorov/Documents/repos/GroupDocs.Total-Angular/libs/common-components/src/lib/top-toolbar/top-toolbar.component.html ***!
  \****************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"top-toolbar\">\n  <gd-button [className]=\"'arrow-button'\" class=\"arrow-left\" id=\"left\" [icon]=\"'caret-left'\" [tooltip]=\"'Scroll left'\"\n             (click)=\"moveLeft()\"\n             *ngIf=\"showLeft\"></gd-button>\n  <div id=\"tools\" class=\"tools\">\n    <ng-content></ng-content>\n  </div>\n  <gd-button [className]=\"'arrow-button'\" class=\"arrow-right\" id=\"right\" [icon]=\"'caret-right'\"\n             [tooltip]=\"'Scroll right'\" (click)=\"moveRight()\"\n             *ngIf=\"showRight\"></gd-button>\n</div>\n"

/***/ }),

/***/ "../../libs/common-components/src/lib/top-toolbar/top-toolbar.component.less":
/*!****************************************************************************************************************************************!*\
  !*** /Users/pavelegorov/Documents/repos/GroupDocs.Total-Angular/libs/common-components/src/lib/top-toolbar/top-toolbar.component.less ***!
  \****************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".top-toolbar {\n  width: 100%;\n  height: 50px;\n  z-index: 999;\n  display: flex;\n  align-items: center;\n}\n.tools {\n  width: 100%;\n  height: 100%;\n  display: flex;\n  align-items: center;\n}\n@media (max-width: 1025px) {\n  .top-toolbar {\n    height: 70px;\n  }\n  .arrow-right {\n    position: absolute;\n    right: 0px;\n  }\n  .tools {\n    width: calc(100% - 120px);\n    height: 100%;\n    overflow-x: auto;\n    overflow-scrolling: touch;\n    display: flex;\n    align-items: center;\n    transition: all 0.3s ease-in-out;\n    scroll-behavior: smooth;\n    -webkit-overflow-scrolling: touch;\n  }\n  .tools::-webkit-scrollbar {\n    width: 0px;\n    height: 0px;\n    background-color: #3e4e5a;\n  }\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9wYXZlbGVnb3Jvdi9Eb2N1bWVudHMvcmVwb3MvR3JvdXBEb2NzLlRvdGFsLUFuZ3VsYXIvbGlicy9jb21tb24tY29tcG9uZW50cy9zcmMvbGliL3RvcC10b29sYmFyL3RvcC10b29sYmFyLmNvbXBvbmVudC5sZXNzIiwiLi4vLi4vbGlicy9jb21tb24tY29tcG9uZW50cy9zcmMvbGliL3RvcC10b29sYmFyL3RvcC10b29sYmFyLmNvbXBvbmVudC5sZXNzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0FDQ0Y7QURFQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0FDQUY7QURHQTtFQUNFO0lBQ0UsWUFBQTtFQ0RGO0VESUE7SUFDRSxrQkFBQTtJQUNBLFVBQUE7RUNGRjtFRFFBO0lBQ0UseUJBQUE7SUFDQSxZQUFBO0lBQ0EsZ0JBQUE7SUFDQSx5QkFBQTtJQUNBLGFBQUE7SUFDQSxtQkFBQTtJQUNBLGdDQUFBO0lBQ0EsdUJBQUE7SUFDQSxpQ0FBQTtFQ05GO0VEU0E7SUFDRSxVQUFBO0lBQ0EsV0FBQTtJQUNBLHlCQUFBO0VDUEY7QUFDRiIsImZpbGUiOiIuLi8uLi9saWJzL2NvbW1vbi1jb21wb25lbnRzL3NyYy9saWIvdG9wLXRvb2xiYXIvdG9wLXRvb2xiYXIuY29tcG9uZW50Lmxlc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudG9wLXRvb2xiYXIge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiA1MHB4O1xuICB6LWluZGV4OiA5OTk7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi50b29scyB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiAxMDI1cHgpIHtcbiAgLnRvcC10b29sYmFyIHtcbiAgICBoZWlnaHQ6IDcwcHg7XG4gIH1cblxuICAuYXJyb3ctcmlnaHQge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICByaWdodDogMHB4O1xuICB9XG5cbiAgLmFycm93LWxlZnQge1xuICB9XG5cbiAgLnRvb2xzIHtcbiAgICB3aWR0aDogY2FsYygxMDAlIC0gMTIwcHgpO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBvdmVyZmxvdy14OiBhdXRvO1xuICAgIG92ZXJmbG93LXNjcm9sbGluZzogdG91Y2g7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UtaW4tb3V0O1xuICAgIHNjcm9sbC1iZWhhdmlvcjogc21vb3RoO1xuICAgIC13ZWJraXQtb3ZlcmZsb3ctc2Nyb2xsaW5nOiB0b3VjaDtcbiAgfVxuXG4gIC50b29sczo6LXdlYmtpdC1zY3JvbGxiYXIge1xuICAgIHdpZHRoOiAwcHg7XG4gICAgaGVpZ2h0OiAwcHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzNlNGU1YTtcbiAgfVxufVxuIiwiLnRvcC10b29sYmFyIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogNTBweDtcbiAgei1pbmRleDogOTk5O1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuLnRvb2xzIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbkBtZWRpYSAobWF4LXdpZHRoOiAxMDI1cHgpIHtcbiAgLnRvcC10b29sYmFyIHtcbiAgICBoZWlnaHQ6IDcwcHg7XG4gIH1cbiAgLmFycm93LXJpZ2h0IHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgcmlnaHQ6IDBweDtcbiAgfVxuICAudG9vbHMge1xuICAgIHdpZHRoOiBjYWxjKDEwMCUgLSAxMjBweCk7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIG92ZXJmbG93LXg6IGF1dG87XG4gICAgb3ZlcmZsb3ctc2Nyb2xsaW5nOiB0b3VjaDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1pbi1vdXQ7XG4gICAgc2Nyb2xsLWJlaGF2aW9yOiBzbW9vdGg7XG4gICAgLXdlYmtpdC1vdmVyZmxvdy1zY3JvbGxpbmc6IHRvdWNoO1xuICB9XG4gIC50b29sczo6LXdlYmtpdC1zY3JvbGxiYXIge1xuICAgIHdpZHRoOiAwcHg7XG4gICAgaGVpZ2h0OiAwcHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzNlNGU1YTtcbiAgfVxufVxuIl19 */"

/***/ }),

/***/ "../../libs/common-components/src/lib/top-toolbar/top-toolbar.component.ts":
/*!**************************************************************************************************************************************!*\
  !*** /Users/pavelegorov/Documents/repos/GroupDocs.Total-Angular/libs/common-components/src/lib/top-toolbar/top-toolbar.component.ts ***!
  \**************************************************************************************************************************************/
/*! exports provided: TopToolbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TopToolbarComponent", function() { return TopToolbarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _viewport_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../viewport.service */ "../../libs/common-components/src/lib/viewport.service.ts");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! jquery */ "../../node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_3__);




var $ = jquery__WEBPACK_IMPORTED_MODULE_3__;
var TopToolbarComponent = /** @class */ (function () {
    function TopToolbarComponent(_elementRef, _viewportService, _cdRef) {
        this._elementRef = _elementRef;
        this._viewportService = _viewportService;
        this._cdRef = _cdRef;
    }
    TopToolbarComponent.prototype.ngOnInit = function () {
        this.refresh();
        var el = this.getToolsElem();
        var $this = this;
        el.addEventListener('scroll', function () {
            $this.refresh();
        });
    };
    TopToolbarComponent.prototype.moveLeft = function () {
        var el = this.getToolsElem();
        if (el) {
            var elem = this.canMoveTo(true);
            if (elem) {
                var options = {
                    left: $(elem).offset().left + el.scrollLeft - this.getLeftOffset(),
                    top: 0,
                };
                el.scrollTo(options);
            }
        }
    };
    TopToolbarComponent.prototype.moveRight = function () {
        var el = this.getToolsElem();
        if (el) {
            var elem = this.canMoveTo(false);
            if (elem) {
                var options = {
                    left: $(elem).offset().left + el.scrollLeft - this.getLeftOffset(),
                    top: 0,
                };
                el.scrollTo(options);
            }
        }
    };
    TopToolbarComponent.prototype.getToolsElem = function () {
        return this._elementRef ? this._elementRef.nativeElement.children[0].querySelector('#tools') : null;
    };
    TopToolbarComponent.prototype.canMoveTo = function (left) {
        var elem;
        var children = this.getChildren();
        var countElem = children.length;
        for (elem = 0; elem < countElem; elem++) {
            var element = this.getElem(elem);
            if (this._viewportService.checkInViewport(element, 100, this.getLeftOffset())) {
                if (left) {
                    return elem > 0 ? children.item(elem - 1) : null;
                }
                else {
                    return elem + 1 < countElem ? children.item(elem + 1) : null;
                }
            }
        }
        return;
    };
    TopToolbarComponent.prototype.getElem = function (num) {
        var elems = this.getChildren();
        return elems.item(num !== null ? num : elems.length - 1);
    };
    TopToolbarComponent.prototype.getChildren = function () {
        var el = this.getToolsElem();
        if (!el) {
            return;
        }
        return el.children;
    };
    TopToolbarComponent.prototype.getLeftOffset = function () {
        var el = this._elementRef.nativeElement ? this._elementRef.nativeElement.parentElement.children[0] : null;
        if (!el) {
            return 0;
        }
        return el.clientWidth;
    };
    TopToolbarComponent.prototype.refresh = function () {
        this.showLeft = !this._viewportService.checkInViewport(this.getElem(0), 100, this.getLeftOffset(), 0.8);
        this.showRight = !this._viewportService.checkInViewport(this.getElem(null), 100, this.getLeftOffset(), 0.8);
    };
    TopToolbarComponent.prototype.ngAfterViewChecked = function () {
        var showLeft = !this._viewportService.checkInViewport(this.getElem(0), 100, this.getLeftOffset(), 0.8);
        var showRight = !this._viewportService.checkInViewport(this.getElem(null), 100, this.getLeftOffset(), 0.8);
        if (showLeft !== this.showLeft || showRight !== this.showRight) {
            this.showLeft = showLeft;
            this.showRight = showRight;
            this._cdRef.detectChanges();
        }
    };
    TopToolbarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'gd-top-toolbar',
            template: __webpack_require__(/*! ./top-toolbar.component.html */ "../../libs/common-components/src/lib/top-toolbar/top-toolbar.component.html"),
            styles: [__webpack_require__(/*! ./top-toolbar.component.less */ "../../libs/common-components/src/lib/top-toolbar/top-toolbar.component.less")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"],
            _viewport_service__WEBPACK_IMPORTED_MODULE_2__["ViewportService"],
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]])
    ], TopToolbarComponent);
    return TopToolbarComponent;
}());



/***/ }),

/***/ "../../libs/common-components/src/lib/upload-file-zone/upload-file-zone.component.html":
/*!**************************************************************************************************************************************************!*\
  !*** /Users/pavelegorov/Documents/repos/GroupDocs.Total-Angular/libs/common-components/src/lib/upload-file-zone/upload-file-zone.component.html ***!
  \**************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"gd-drag-n-drop-wrap\" id=\"gd-dropZone\" gdDnd (close)=\"onCloseUpload()\" (click)=\"close($event)\">\n  <div class=\"gd-drag-n-drop-icon\"><i class=\"fa fa-cloud-download-alt fa-5x\" aria-hidden=\"true\"></i></div>\n  <h2>Drag &amp; Drop your files here</h2> \n  <h4>OR</h4> \n  <div class=\"gd-drag-n-drop-buttons\"> \n    <label class=\"btn btn-primary\"> \n      <i class=\"fa fa-file\"></i> \n      SELECT FILE \n      <input id=\"gd-upload-input\" type=\"file\" multiple style=\"display: none;\" (change)=\"handleFileInput($event.target.files)\">\n      </label>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../libs/common-components/src/lib/upload-file-zone/upload-file-zone.component.less":
/*!**************************************************************************************************************************************************!*\
  !*** /Users/pavelegorov/Documents/repos/GroupDocs.Total-Angular/libs/common-components/src/lib/upload-file-zone/upload-file-zone.component.less ***!
  \**************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".gd-drag-n-drop-wrap {\n  border: 2px dashed #ccc;\n  background-color: #f8f8f8;\n  text-align: center;\n  cursor: default;\n  position: absolute;\n  width: 983px;\n  height: 626px;\n  left: 2px;\n  display: flex;\n  align-content: center;\n  flex-direction: column;\n  justify-content: center;\n  opacity: 0.9;\n  z-index: 1;\n}\n.gd-drag-n-drop-wrap h2 {\n  color: #959DA5;\n  margin: 5px 0;\n  font-size: 15px;\n  font-weight: 300;\n}\n.gd-drag-n-drop-wrap h4 {\n  color: #cacaca;\n  font-weight: 300;\n  font-size: 12px;\n  margin: 10px 0 15px;\n}\n.gd-drag-n-drop-icon .fa-cloud-download-alt {\n  color: #D1D1D1;\n  font-size: 110px;\n}\n.gd-drag-n-drop-buttons i {\n  margin-right: 5px;\n}\n.gd-drag-n-drop-buttons .btn {\n  width: 134px;\n  height: 35px;\n  margin: 0 10px;\n  font-size: 12px;\n  font-weight: 400;\n}\n.gd-drag-n-drop-wrap.hover {\n  background: #ddd;\n  border-color: #aaa;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9wYXZlbGVnb3Jvdi9Eb2N1bWVudHMvcmVwb3MvR3JvdXBEb2NzLlRvdGFsLUFuZ3VsYXIvbGlicy9jb21tb24tY29tcG9uZW50cy9zcmMvbGliL3VwbG9hZC1maWxlLXpvbmUvdXBsb2FkLWZpbGUtem9uZS5jb21wb25lbnQubGVzcyIsIi4uLy4uL2xpYnMvY29tbW9uLWNvbXBvbmVudHMvc3JjL2xpYi91cGxvYWQtZmlsZS16b25lL3VwbG9hZC1maWxlLXpvbmUuY29tcG9uZW50Lmxlc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSx1QkFBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLFNBQUE7RUFDQSxhQUFBO0VBQ0EscUJBQUE7RUFDQSxzQkFBQTtFQUNBLHVCQUFBO0VBQ0EsWUFBQTtFQUNBLFVBQUE7QUNDRjtBRENBO0VBQ0UsY0FBQTtFQUNBLGFBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QUNDRjtBRENBO0VBQ0UsY0FBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0FDQ0Y7QURHQTtFQUNFLGNBQUE7RUFDQSxnQkFBQTtBQ0RGO0FER0E7RUFDRSxpQkFBQTtBQ0RGO0FER0E7RUFDRSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QUNERjtBREdBO0VBQ0UsZ0JBQUE7RUFDQSxrQkFBQTtBQ0RGIiwiZmlsZSI6Ii4uLy4uL2xpYnMvY29tbW9uLWNvbXBvbmVudHMvc3JjL2xpYi91cGxvYWQtZmlsZS16b25lL3VwbG9hZC1maWxlLXpvbmUuY29tcG9uZW50Lmxlc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZ2QtZHJhZy1uLWRyb3Atd3JhcCB7XG4gIGJvcmRlcjogMnB4IGRhc2hlZCAjY2NjO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjhmOGY4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGN1cnNvcjogZGVmYXVsdDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogOTgzcHg7XG4gIGhlaWdodDogNjI2cHg7XG4gIGxlZnQ6IDJweDtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24tY29udGVudDogY2VudGVyO1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgb3BhY2l0eTogMC45O1xuICB6LWluZGV4OiAxO1xufVxuLmdkLWRyYWctbi1kcm9wLXdyYXAgaDIge1xuICBjb2xvcjogIzk1OURBNTtcbiAgbWFyZ2luOiA1cHggMDtcbiAgZm9udC1zaXplOiAxNXB4O1xuICBmb250LXdlaWdodDogMzAwO1xufVxuLmdkLWRyYWctbi1kcm9wLXdyYXAgaDQge1xuICBjb2xvcjogI2NhY2FjYTtcbiAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBtYXJnaW46IDEwcHggMCAxNXB4O1xufVxuLmdkLWRyYWctbi1kcm9wLWljb24ge1xufVxuLmdkLWRyYWctbi1kcm9wLWljb24gLmZhLWNsb3VkLWRvd25sb2FkLWFsdCB7XG4gIGNvbG9yOiAjRDFEMUQxO1xuICBmb250LXNpemU6IDExMHB4O1xufVxuLmdkLWRyYWctbi1kcm9wLWJ1dHRvbnMgaSB7XG4gIG1hcmdpbi1yaWdodDogNXB4O1xufVxuLmdkLWRyYWctbi1kcm9wLWJ1dHRvbnMgLmJ0biB7XG4gIHdpZHRoOiAxMzRweDtcbiAgaGVpZ2h0OiAzNXB4O1xuICBtYXJnaW46IDAgMTBweDtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBmb250LXdlaWdodDogNDAwO1xufVxuLmdkLWRyYWctbi1kcm9wLXdyYXAuaG92ZXIge1xuICBiYWNrZ3JvdW5kOiAjZGRkO1xuICBib3JkZXItY29sb3I6ICNhYWE7XG59XG4iLCIuZ2QtZHJhZy1uLWRyb3Atd3JhcCB7XG4gIGJvcmRlcjogMnB4IGRhc2hlZCAjY2NjO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjhmOGY4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGN1cnNvcjogZGVmYXVsdDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogOTgzcHg7XG4gIGhlaWdodDogNjI2cHg7XG4gIGxlZnQ6IDJweDtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24tY29udGVudDogY2VudGVyO1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgb3BhY2l0eTogMC45O1xuICB6LWluZGV4OiAxO1xufVxuLmdkLWRyYWctbi1kcm9wLXdyYXAgaDIge1xuICBjb2xvcjogIzk1OURBNTtcbiAgbWFyZ2luOiA1cHggMDtcbiAgZm9udC1zaXplOiAxNXB4O1xuICBmb250LXdlaWdodDogMzAwO1xufVxuLmdkLWRyYWctbi1kcm9wLXdyYXAgaDQge1xuICBjb2xvcjogI2NhY2FjYTtcbiAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBtYXJnaW46IDEwcHggMCAxNXB4O1xufVxuLmdkLWRyYWctbi1kcm9wLWljb24gLmZhLWNsb3VkLWRvd25sb2FkLWFsdCB7XG4gIGNvbG9yOiAjRDFEMUQxO1xuICBmb250LXNpemU6IDExMHB4O1xufVxuLmdkLWRyYWctbi1kcm9wLWJ1dHRvbnMgaSB7XG4gIG1hcmdpbi1yaWdodDogNXB4O1xufVxuLmdkLWRyYWctbi1kcm9wLWJ1dHRvbnMgLmJ0biB7XG4gIHdpZHRoOiAxMzRweDtcbiAgaGVpZ2h0OiAzNXB4O1xuICBtYXJnaW46IDAgMTBweDtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBmb250LXdlaWdodDogNDAwO1xufVxuLmdkLWRyYWctbi1kcm9wLXdyYXAuaG92ZXIge1xuICBiYWNrZ3JvdW5kOiAjZGRkO1xuICBib3JkZXItY29sb3I6ICNhYWE7XG59XG4iXX0= */"

/***/ }),

/***/ "../../libs/common-components/src/lib/upload-file-zone/upload-file-zone.component.ts":
/*!************************************************************************************************************************************************!*\
  !*** /Users/pavelegorov/Documents/repos/GroupDocs.Total-Angular/libs/common-components/src/lib/upload-file-zone/upload-file-zone.component.ts ***!
  \************************************************************************************************************************************************/
/*! exports provided: UploadFileZoneComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UploadFileZoneComponent", function() { return UploadFileZoneComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _upload_files_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../upload-files.service */ "../../libs/common-components/src/lib/upload-files.service.ts");



var UploadFileZoneComponent = /** @class */ (function () {
    function UploadFileZoneComponent(_uploadService) {
        this._uploadService = _uploadService;
        this.closeUpload = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    UploadFileZoneComponent.prototype.ngOnInit = function () {
    };
    UploadFileZoneComponent.prototype.handleFileInput = function (files) {
        this._uploadService.changeFilesList(files);
        this.onCloseUpload();
    };
    UploadFileZoneComponent.prototype.onCloseUpload = function () {
        this.closeUpload.emit(true);
    };
    UploadFileZoneComponent.prototype.close = function ($event) {
        if ($event.target.id === 'gd-dropZone') {
            this.onCloseUpload();
        }
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], UploadFileZoneComponent.prototype, "closeUpload", void 0);
    UploadFileZoneComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'gd-upload-file-zone',
            template: __webpack_require__(/*! ./upload-file-zone.component.html */ "../../libs/common-components/src/lib/upload-file-zone/upload-file-zone.component.html"),
            styles: [__webpack_require__(/*! ./upload-file-zone.component.less */ "../../libs/common-components/src/lib/upload-file-zone/upload-file-zone.component.less")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_upload_files_service__WEBPACK_IMPORTED_MODULE_2__["UploadFilesService"]])
    ], UploadFileZoneComponent);
    return UploadFileZoneComponent;
}());



/***/ }),

/***/ "../../libs/common-components/src/lib/upload-files.service.ts":
/*!*************************************************************************************************************************!*\
  !*** /Users/pavelegorov/Documents/repos/GroupDocs.Total-Angular/libs/common-components/src/lib/upload-files.service.ts ***!
  \*************************************************************************************************************************/
/*! exports provided: UploadFilesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UploadFilesService", function() { return UploadFilesService; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "../../node_modules/rxjs/_esm5/index.js");

var UploadFilesService = /** @class */ (function () {
    function UploadFilesService() {
        var _this = this;
        this._uploadsChange = new rxjs__WEBPACK_IMPORTED_MODULE_0__["Observable"](function (observer) {
            return _this._observer = observer;
        });
    }
    Object.defineProperty(UploadFilesService.prototype, "uploadsChange", {
        get: function () {
            return this._uploadsChange;
        },
        enumerable: true,
        configurable: true
    });
    UploadFilesService.prototype.changeFilesList = function (filesList) {
        this._observer.next(filesList);
    };
    return UploadFilesService;
}());



/***/ }),

/***/ "../../libs/common-components/src/lib/viewport.service.ts":
/*!*********************************************************************************************************************!*\
  !*** /Users/pavelegorov/Documents/repos/GroupDocs.Total-Angular/libs/common-components/src/lib/viewport.service.ts ***!
  \*********************************************************************************************************************/
/*! exports provided: ViewportService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewportService", function() { return ViewportService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jquery */ "../../node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_2__);



var $ = jquery__WEBPACK_IMPORTED_MODULE_2__;
var ViewportService = /** @class */ (function () {
    function ViewportService() {
    }
    ViewportService.prototype.checkInViewport = function (el, zoom, leftOffset, deltaX) {
        if (zoom === void 0) { zoom = 100; }
        if (leftOffset === void 0) { leftOffset = 0; }
        if (deltaX === void 0) { deltaX = 0.5; }
        if (!el) {
            return false;
        }
        var x = deltaX;
        var y = 0.5;
        var win = $(window);
        var viewport = {
            top: win.scrollTop(),
            left: win.scrollLeft() + leftOffset,
            right: win.scrollLeft() + win.width() - 10,
            bottom: win.scrollTop() + win.height()
        };
        if (isNaN(zoom)) {
            zoom = 100;
        }
        var zoomN = zoom / 100;
        var height = $(el).outerHeight() * (zoomN);
        var width = $(el).outerWidth() * (zoomN);
        if (!width || !height) {
            return false;
        }
        var bounds = $(el).offset();
        var right = (bounds.left * (zoomN)) + width;
        var bottom = (bounds.top * (zoomN)) + height;
        var visible = (!(viewport.right < (bounds.left * (zoomN)) || viewport.left > right || viewport.bottom < (bounds.top * (zoomN)) || viewport.top > bottom));
        if (!visible) {
            return false;
        }
        var deltas = {
            top: Math.min(1, (bottom - viewport.top) / height),
            bottom: Math.min(1, (viewport.bottom - (bounds.top * (zoomN))) / height),
            left: Math.min(1, (right - viewport.left) / width),
            right: Math.min(1, (viewport.right - (bounds.left * (zoomN))) / width)
        };
        return (deltas.left * deltas.right) >= x && (deltas.top * deltas.bottom) >= y;
    };
    ViewportService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ViewportService);
    return ViewportService;
}());



/***/ }),

/***/ "../../libs/common-components/src/lib/window.service.ts":
/*!*******************************************************************************************************************!*\
  !*** /Users/pavelegorov/Documents/repos/GroupDocs.Total-Angular/libs/common-components/src/lib/window.service.ts ***!
  \*******************************************************************************************************************/
/*! exports provided: WindowService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WindowService", function() { return WindowService; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "../../node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "../../node_modules/rxjs/_esm5/operators/index.js");


var MOBILE_MAX_WIDTH = 425;
var TABLET_MAX_WIDTH = 1024;
var WindowService = /** @class */ (function () {
    function WindowService() {
        var _this = this;
        this.resizeSubject = new rxjs__WEBPACK_IMPORTED_MODULE_0__["Subject"]();
        this.width = window.innerWidth;
        this.height = window.innerHeight;
        this._resize$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["fromEvent"])(window, 'resize')
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["debounceTime"])(200), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["distinctUntilChanged"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["startWith"])({ target: { innerWidth: window.innerWidth, innerHeight: window.innerHeight } }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["tap"])(function (event) {
            _this.resizeSubject.next(event.target);
            _this.width = event.target.innerWidth;
            _this.height = event.target.innerHeight;
        }));
        this._resize$.subscribe();
    }
    Object.defineProperty(WindowService.prototype, "onResize", {
        get: function () {
            return this.resizeSubject.asObservable();
        },
        enumerable: true,
        configurable: true
    });
    WindowService.prototype.isMobile = function () {
        return this.width <= MOBILE_MAX_WIDTH;
    };
    WindowService.prototype.isTablet = function () {
        return this.width <= TABLET_MAX_WIDTH;
    };
    WindowService.prototype.isDesktop = function () {
        return !this.isMobile() && !this.isTablet();
    };
    return WindowService;
}());



/***/ }),

/***/ "../../libs/common-components/src/lib/zoom.directive.ts":
/*!*******************************************************************************************************************!*\
  !*** /Users/pavelegorov/Documents/repos/GroupDocs.Total-Angular/libs/common-components/src/lib/zoom.directive.ts ***!
  \*******************************************************************************************************************/
/*! exports provided: ZoomDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ZoomDirective", function() { return ZoomDirective; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _zoom_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./zoom.service */ "../../libs/common-components/src/lib/zoom.service.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "../../node_modules/@angular/platform-browser/fesm5/platform-browser.js");




var ZoomDirective = /** @class */ (function () {
    function ZoomDirective(_zoomService, _sanitizer) {
        this._zoomService = _zoomService;
        this._sanitizer = _sanitizer;
        this.zoomActive = true;
    }
    ZoomDirective.prototype.ngOnDestroy = function () {
    };
    ZoomDirective.prototype.ngOnInit = function () {
        var _this = this;
        if (!this.zoomActive) {
            return;
        }
        this.setStyles(this._zoomService.zoom);
        this._zoomService.zoomChange.subscribe(function (zoom) {
            _this.setStyles(zoom);
        });
    };
    ZoomDirective.prototype.setStyles = function (zoom) {
        if (!this.zoomActive) {
            return;
        }
        this.zoomStr = Math.round(zoom) + '%';
        this.zoomInt = zoom === 100 ? 1 : zoom / 100;
        this.mozTransform = 'scale(' + this.zoomInt + ', ' + this.zoomInt + ')';
        this.mozTransformOrigin = 'top';
        var transform = this._sanitizer.bypassSecurityTrustStyle('(' + this.zoomInt + ', ' + this.zoomInt + ')');
        this.webkitTransform = transform;
        this.msTransform = transform;
        this.oTransform = transform;
    };
    ZoomDirective.prototype.ngAfterViewInit = function () {
        this.setStyles(this._zoomService.zoom);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], ZoomDirective.prototype, "zoomActive", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"])('style.zoom'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], ZoomDirective.prototype, "zoomStr", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"])('style.zoom'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
    ], ZoomDirective.prototype, "zoomInt", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"])('style.-moz-transform'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], ZoomDirective.prototype, "mozTransform", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"])('style.-moz-transform-origin'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], ZoomDirective.prototype, "mozTransformOrigin", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"])('style.-webkit-transform'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], ZoomDirective.prototype, "webkitTransform", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"])('style.-ms-transform'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], ZoomDirective.prototype, "msTransform", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"])('style.-o-transform'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], ZoomDirective.prototype, "oTransform", void 0);
    ZoomDirective = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
            selector: '[gdZoom]'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_zoom_service__WEBPACK_IMPORTED_MODULE_2__["ZoomService"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["DomSanitizer"]])
    ], ZoomDirective);
    return ZoomDirective;
}());



/***/ }),

/***/ "../../libs/common-components/src/lib/zoom.service.ts":
/*!*****************************************************************************************************************!*\
  !*** /Users/pavelegorov/Documents/repos/GroupDocs.Total-Angular/libs/common-components/src/lib/zoom.service.ts ***!
  \*****************************************************************************************************************/
/*! exports provided: ZoomService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ZoomService", function() { return ZoomService; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "../../node_modules/rxjs/_esm5/index.js");

var ZoomService = /** @class */ (function () {
    function ZoomService() {
        this._observer = new rxjs__WEBPACK_IMPORTED_MODULE_0__["Subject"]();
        this._zoomChange = this._observer.asObservable();
    }
    ZoomService.prototype.createZoomOption = function (val, name, sep) {
        if (sep === void 0) { sep = false; }
        return { value: val, name: name, separator: sep };
    };
    ZoomService.prototype.zoomOptions = function (width, height) {
        return [
            this.createZoomOption(25, '25%'),
            this.createZoomOption(50, '50%'),
            this.createZoomOption(100, '100%'),
            this.createZoomOption(150, '150%'),
            this.createZoomOption(200, '200%'),
            this.createZoomOption(300, '300%'),
            this.createZoomOption(0, '', true),
            this.createZoomOption(width, 'Fit Width'),
            this.createZoomOption(height, 'Fit Height')
        ];
    };
    Object.defineProperty(ZoomService.prototype, "zoom", {
        get: function () {
            return this._zoom;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ZoomService.prototype, "zoomChange", {
        get: function () {
            return this._zoomChange;
        },
        enumerable: true,
        configurable: true
    });
    ZoomService.prototype.changeZoom = function (zoom) {
        this._zoom = zoom;
        this._observer.next(zoom);
    };
    return ZoomService;
}());



/***/ }),

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/thumbnails/thumbnails.component.html":
/*!******************************************************!*\
  !*** ./src/app/thumbnails/thumbnails.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"gd-thumbnails\">\n  <div class=\"gd-thumbnails-panzoom\">\n    <div *ngFor=\"let page of pages\" id=\"gd-thumbnails-page-{{page.number}}\" class=\"gd-page\"\n         (click)=\"openPage(page.number)\" gdRotation [withMargin]=\"false\"\n         [angle]=\"page.angle\" [isHtmlMode]=\"mode\" [width]=\"page.width\" [height]=\"page.height\">\n      <div class=\"gd-wrapper\"\n           [style.width.pt]=\"page.width\"\n           [style.height.pt]=\"page.height\"\n           [ngStyle]=\"{'transform': 'translateX(-50%) translateY(-50%) scale('+getScale(page.width, page.height)+')'}\"\n           *ngIf=\"page.data && isHtmlMode\"\n           [innerHTML]=\"page.data | safeHtml\"></div>\n      <div class=\"gd-wrapper\" *ngIf=\"page.data && !isHtmlMode\">\n        <img style=\"width: inherit !important\" class=\"gd-page-image\" [attr.src]=\"imgData(page.data) | safeResourceHtml\"\n             alt/>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/thumbnails/thumbnails.component.less":
/*!******************************************************!*\
  !*** ./src/app/thumbnails/thumbnails.component.less ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".gd-thumbnails {\n  z-index: 9;\n  padding: 10pt;\n  width: 200pt;\n  background: #f5f5f5;\n  color: #ffffff;\n  overflow-y: auto;\n  display: block;\n  transition: margin-left 0.2s;\n  height: 100%;\n}\n.gd-page {\n  width: 190pt;\n  height: 190pt;\n  transition: all 0.3s;\n  padding: 5pt;\n  background-color: #efefef;\n  border-radius: 5px;\n  cursor: pointer;\n}\n.gd-page:hover {\n  background-color: #c0c0c0;\n}\n.gd-wrapper {\n  -webkit-transform: translate(-50%, -50%);\n          transform: translate(-50%, -50%);\n  left: 50%;\n  top: 50%;\n  position: relative;\n  background-color: #ffffff;\n  box-shadow: 0px 4px 12px -4px rgba(0, 0, 0, 0.38);\n}\n/* Make thumbnails sidebar scroll not visible */\n.gd-thumbnails::-webkit-scrollbar {\n  width: 0px;\n  background-color: #F5F5F5;\n}\n.gd-thumbnails-panzoom > .gd-thumbnails-landscape {\n  margin: -134px 0px -1px 12px;\n}\n.gd-thumbnails-panzoom .gd-wrapper > div > div > img {\n  width: inherit;\n}\n.gd-thumbnails .gd-wrapper > img {\n  width: -webkit-fill-available !important;\n  margin: 0 20px 0 0 !important;\n}\n.gd-thumbnails .gd-page-image {\n  height: inherit;\n  margin-left: 153px !important;\n}\n.gd-thumbnails-landscape-image {\n  margin: -90px 0 -23px !important;\n}\n.gd-thumbnails-landscape-image-rotated {\n  margin: 126px 0 -3px -104px !important;\n}\n.gd-thumbnails-panzoom .gd-wrapper table {\n  display: contents;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9wYXZlbGVnb3Jvdi9Eb2N1bWVudHMvcmVwb3MvR3JvdXBEb2NzLlRvdGFsLUFuZ3VsYXIvYXBwcy92aWV3ZXIvc3JjL2FwcC90aHVtYm5haWxzL3RodW1ibmFpbHMuY29tcG9uZW50Lmxlc3MiLCJzcmMvYXBwL3RodW1ibmFpbHMvdGh1bWJuYWlscy5jb21wb25lbnQubGVzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFVBQUE7RUFDQSxhQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLDRCQUFBO0VBQ0EsWUFBQTtBQ0NGO0FERUE7RUFDRSxZQUFBO0VBQ0EsYUFBQTtFQUNBLG9CQUFBO0VBQ0EsWUFBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0FDQUY7QURFQTtFQUNFLHlCQUFBO0FDQUY7QURFQTtFQUNFLHdDQUFBO1VBQUEsZ0NBQUE7RUFDQSxTQUFBO0VBQ0EsUUFBQTtFQUNBLGtCQUFBO0VBQ0EseUJBQUE7RUFHQSxpREFBQTtBQ0FGO0FBQ0EsK0NBQStDO0FERy9DO0VBQ0UsVUFBQTtFQUNBLHlCQUFBO0FDREY7QURJQTtFQUNFLDRCQUFBO0FDRkY7QURLQTtFQUNFLGNBQUE7QUNIRjtBRE1BO0VBQ0Usd0NBQUE7RUFDQSw2QkFBQTtBQ0pGO0FET0E7RUFDRSxlQUFBO0VBQ0EsNkJBQUE7QUNMRjtBRFFBO0VBQ0UsZ0NBQUE7QUNORjtBRFNBO0VBQ0Usc0NBQUE7QUNQRjtBRFVBO0VBQ0UsaUJBQUE7QUNSRiIsImZpbGUiOiJzcmMvYXBwL3RodW1ibmFpbHMvdGh1bWJuYWlscy5jb21wb25lbnQubGVzcyIsInNvdXJjZXNDb250ZW50IjpbIi5nZC10aHVtYm5haWxzIHtcbiAgei1pbmRleDogOTtcbiAgcGFkZGluZzogMTBwdDtcbiAgd2lkdGg6IDIwMHB0O1xuICBiYWNrZ3JvdW5kOiAjZjVmNWY1O1xuICBjb2xvcjogI2ZmZmZmZjtcbiAgb3ZlcmZsb3cteTogYXV0bztcbiAgZGlzcGxheTogYmxvY2s7XG4gIHRyYW5zaXRpb246IG1hcmdpbi1sZWZ0IDAuMnM7XG4gIGhlaWdodDogMTAwJTtcbn1cblxuLmdkLXBhZ2Uge1xuICB3aWR0aDogMTkwcHQ7XG4gIGhlaWdodDogMTkwcHQ7XG4gIHRyYW5zaXRpb246IGFsbCAwLjNzO1xuICBwYWRkaW5nOiA1cHQ7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlZmVmZWY7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuLmdkLXBhZ2U6aG92ZXJ7XG4gIGJhY2tncm91bmQtY29sb3I6ICNjMGMwYzA7XG59XG4uZ2Qtd3JhcHBlcntcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gIGxlZnQ6NTAlO1xuICB0b3A6NTAlO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XG4gIC13ZWJraXQtYm94LXNoYWRvdzogMHB4IDRweCAxMnB4IC00cHggcmdiYSgwLDAsMCwwLjM4KTtcbiAgLW1vei1ib3gtc2hhZG93OiAwcHggNHB4IDEycHggLTRweCByZ2JhKDAsMCwwLDAuMzgpO1xuICBib3gtc2hhZG93OiAwcHggNHB4IDEycHggLTRweCByZ2JhKDAsMCwwLDAuMzgpO1xufVxuXG4vKiBNYWtlIHRodW1ibmFpbHMgc2lkZWJhciBzY3JvbGwgbm90IHZpc2libGUgKi9cbi5nZC10aHVtYm5haWxzOjotd2Via2l0LXNjcm9sbGJhciB7XG4gIHdpZHRoOiAwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNGNUY1RjU7XG59XG5cbi5nZC10aHVtYm5haWxzLXBhbnpvb20gPiAuZ2QtdGh1bWJuYWlscy1sYW5kc2NhcGUge1xuICBtYXJnaW46IC0xMzRweCAwcHggLTFweCAxMnB4O1xufVxuXG4uZ2QtdGh1bWJuYWlscy1wYW56b29tIC5nZC13cmFwcGVyID4gZGl2ID4gZGl2ID4gaW1nIHtcbiAgd2lkdGg6IGluaGVyaXQ7XG59XG5cbi5nZC10aHVtYm5haWxzIC5nZC13cmFwcGVyID4gaW1nIHtcbiAgd2lkdGg6IC13ZWJraXQtZmlsbC1hdmFpbGFibGUgIWltcG9ydGFudDtcbiAgbWFyZ2luOiAwIDIwcHggMCAwICFpbXBvcnRhbnQ7XG59XG5cbi5nZC10aHVtYm5haWxzIC5nZC1wYWdlLWltYWdlIHtcbiAgaGVpZ2h0OiBpbmhlcml0O1xuICBtYXJnaW4tbGVmdDogMTUzcHggIWltcG9ydGFudDtcbn1cblxuLmdkLXRodW1ibmFpbHMtbGFuZHNjYXBlLWltYWdlIHtcbiAgbWFyZ2luOiAtOTBweCAwIC0yM3B4ICFpbXBvcnRhbnQ7XG59XG5cbi5nZC10aHVtYm5haWxzLWxhbmRzY2FwZS1pbWFnZS1yb3RhdGVkIHtcbiAgbWFyZ2luOiAxMjZweCAwIC0zcHggLTEwNHB4ICFpbXBvcnRhbnQ7XG59XG5cbi5nZC10aHVtYm5haWxzLXBhbnpvb20gLmdkLXdyYXBwZXIgdGFibGUge1xuICBkaXNwbGF5OiBjb250ZW50cztcbn1cbiIsIi5nZC10aHVtYm5haWxzIHtcbiAgei1pbmRleDogOTtcbiAgcGFkZGluZzogMTBwdDtcbiAgd2lkdGg6IDIwMHB0O1xuICBiYWNrZ3JvdW5kOiAjZjVmNWY1O1xuICBjb2xvcjogI2ZmZmZmZjtcbiAgb3ZlcmZsb3cteTogYXV0bztcbiAgZGlzcGxheTogYmxvY2s7XG4gIHRyYW5zaXRpb246IG1hcmdpbi1sZWZ0IDAuMnM7XG4gIGhlaWdodDogMTAwJTtcbn1cbi5nZC1wYWdlIHtcbiAgd2lkdGg6IDE5MHB0O1xuICBoZWlnaHQ6IDE5MHB0O1xuICB0cmFuc2l0aW9uOiBhbGwgMC4zcztcbiAgcGFkZGluZzogNXB0O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWZlZmVmO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbi5nZC1wYWdlOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2MwYzBjMDtcbn1cbi5nZC13cmFwcGVyIHtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gIGxlZnQ6IDUwJTtcbiAgdG9wOiA1MCU7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiAwcHggNHB4IDEycHggLTRweCByZ2JhKDAsIDAsIDAsIDAuMzgpO1xuICAtbW96LWJveC1zaGFkb3c6IDBweCA0cHggMTJweCAtNHB4IHJnYmEoMCwgMCwgMCwgMC4zOCk7XG4gIGJveC1zaGFkb3c6IDBweCA0cHggMTJweCAtNHB4IHJnYmEoMCwgMCwgMCwgMC4zOCk7XG59XG4vKiBNYWtlIHRodW1ibmFpbHMgc2lkZWJhciBzY3JvbGwgbm90IHZpc2libGUgKi9cbi5nZC10aHVtYm5haWxzOjotd2Via2l0LXNjcm9sbGJhciB7XG4gIHdpZHRoOiAwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNGNUY1RjU7XG59XG4uZ2QtdGh1bWJuYWlscy1wYW56b29tID4gLmdkLXRodW1ibmFpbHMtbGFuZHNjYXBlIHtcbiAgbWFyZ2luOiAtMTM0cHggMHB4IC0xcHggMTJweDtcbn1cbi5nZC10aHVtYm5haWxzLXBhbnpvb20gLmdkLXdyYXBwZXIgPiBkaXYgPiBkaXYgPiBpbWcge1xuICB3aWR0aDogaW5oZXJpdDtcbn1cbi5nZC10aHVtYm5haWxzIC5nZC13cmFwcGVyID4gaW1nIHtcbiAgd2lkdGg6IC13ZWJraXQtZmlsbC1hdmFpbGFibGUgIWltcG9ydGFudDtcbiAgbWFyZ2luOiAwIDIwcHggMCAwICFpbXBvcnRhbnQ7XG59XG4uZ2QtdGh1bWJuYWlscyAuZ2QtcGFnZS1pbWFnZSB7XG4gIGhlaWdodDogaW5oZXJpdDtcbiAgbWFyZ2luLWxlZnQ6IDE1M3B4ICFpbXBvcnRhbnQ7XG59XG4uZ2QtdGh1bWJuYWlscy1sYW5kc2NhcGUtaW1hZ2Uge1xuICBtYXJnaW46IC05MHB4IDAgLTIzcHggIWltcG9ydGFudDtcbn1cbi5nZC10aHVtYm5haWxzLWxhbmRzY2FwZS1pbWFnZS1yb3RhdGVkIHtcbiAgbWFyZ2luOiAxMjZweCAwIC0zcHggLTEwNHB4ICFpbXBvcnRhbnQ7XG59XG4uZ2QtdGh1bWJuYWlscy1wYW56b29tIC5nZC13cmFwcGVyIHRhYmxlIHtcbiAgZGlzcGxheTogY29udGVudHM7XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/thumbnails/thumbnails.component.ts":
/*!****************************************************!*\
  !*** ./src/app/thumbnails/thumbnails.component.ts ***!
  \****************************************************/
/*! exports provided: ThumbnailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ThumbnailsComponent", function() { return ThumbnailsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _groupdocs_total_angular_common_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @groupdocs-total-angular/common-components */ "../../libs/common-components/src/index.ts");



var ThumbnailsComponent = /** @class */ (function () {
    function ThumbnailsComponent(_navigateService) {
        this._navigateService = _navigateService;
    }
    ThumbnailsComponent.prototype.ngOnInit = function () {
    };
    ThumbnailsComponent.prototype.imgData = function (data) {
        var dataImagePngBase64 = 'data:image/png;base64,';
        if (!this.isHtmlMode) {
            return dataImagePngBase64 + data;
        }
        return dataImagePngBase64;
    };
    ThumbnailsComponent.prototype.getScale = function (x, y) {
        return Math.min(190 / x, 190 / y);
    };
    ThumbnailsComponent.prototype.openPage = function (pageNumber) {
        this._navigateService.navigateTo(pageNumber);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Array)
    ], ThumbnailsComponent.prototype, "pages", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], ThumbnailsComponent.prototype, "guid", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)
    ], ThumbnailsComponent.prototype, "mode", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)
    ], ThumbnailsComponent.prototype, "isHtmlMode", void 0);
    ThumbnailsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'gd-thumbnails',
            template: __webpack_require__(/*! ./thumbnails.component.html */ "./src/app/thumbnails/thumbnails.component.html"),
            styles: [__webpack_require__(/*! ./thumbnails.component.less */ "./src/app/thumbnails/thumbnails.component.less")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_groupdocs_total_angular_common_components__WEBPACK_IMPORTED_MODULE_2__["NavigateService"]])
    ], ThumbnailsComponent);
    return ThumbnailsComponent;
}());



/***/ }),

/***/ "./src/app/viewer-app.component.html":
/*!*******************************************!*\
  !*** ./src/app/viewer-app.component.html ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"wrapper\" (contextmenu)=\"onRightClick($event)\">\n  <div class=\"top-panel\">\n    <gd-logo [logo]=\"'viewer'\"></gd-logo>\n    <gd-top-toolbar class=\"toolbar-panel\">\n      <gd-button [icon]=\"'folder-open'\" [tooltip]=\"'Browse files'\" (click)=\"openModal(browseFilesModal)\"\n                 *ngIf=\"browseConfig\" ></gd-button>\n\n      <gd-select [disabled]=\"formatDisabled\" [options]=\"options\" (selected)=\"selectZoom($event)\"\n                 [showSelected]=\"zoom\" *ngIf=\"zoomConfig\" ></gd-select>\n      <gd-button [disabled]=\"formatDisabled\" [icon]=\"'search-plus'\" [tooltip]=\"'Zoom In'\" (click)=\"zoomIn()\"\n                 *ngIf=\"zoomConfig\" ></gd-button>\n      <gd-button [disabled]=\"formatDisabled\" [icon]=\"'search-minus'\" [tooltip]=\"'Zoom Out'\"\n                 (click)=\"zoomOut()\" *ngIf=\"zoomConfig\" ></gd-button>\n\n      <gd-button [disabled]=\"formatDisabled\" [icon]=\"'angle-double-left'\" [tooltip]=\"'First Page'\"\n                 (click)=\"toFirstPage()\" *ngIf=\"pageSelectorConfig\" ></gd-button>\n      <gd-button [disabled]=\"formatDisabled\" [icon]=\"'angle-left'\" [tooltip]=\"'Previous Page'\"\n                 (click)=\"prevPage()\" *ngIf=\"pageSelectorConfig\" ></gd-button>\n      <div class=\"current-page-number\">{{currentPage}}/{{countPages}}</div>\n      <gd-button [disabled]=\"formatDisabled\" [icon]=\"'angle-right'\" [tooltip]=\"'Next Page'\"\n                 (click)=\"nextPage()\" *ngIf=\"pageSelectorConfig\" ></gd-button>\n      <gd-button [disabled]=\"formatDisabled\" [icon]=\"'angle-double-right'\" [tooltip]=\"'Last Page'\"\n                 (click)=\"toLastPage()\" *ngIf=\"pageSelectorConfig\" ></gd-button>\n\n      <gd-button [disabled]=\"formatDisabled\" [icon]=\"'undo'\" [tooltip]=\"'Rotate CCW'\" (click)=\"rotate(-90)\"\n                 *ngIf=\"rotateConfig\" ></gd-button>\n      <gd-button [disabled]=\"formatDisabled\" [icon]=\"'redo'\" [tooltip]=\"'Rotate CW'\" (click)=\"rotate(90)\"\n                 *ngIf=\"rotateConfig\" ></gd-button>\n\n      <gd-button [disabled]=\"formatDisabled\" [icon]=\"'download'\" [tooltip]=\"'Download'\"\n                 (click)=\"downloadFile()\" *ngIf=\"downloadConfig\" ></gd-button>\n      <gd-button [disabled]=\"formatDisabled\" [icon]=\"'print'\" [tooltip]=\"'Print'\" (click)=\"printFile()\"\n                 *ngIf=\"printConfig\" ></gd-button>\n\n      <gd-button [disabled]=\"formatDisabled\" [icon]=\"'search'\" [tooltip]=\"'Search'\" (click)=\"openSearch()\"\n                 *ngIf=\"searchConfig\" ></gd-button>\n      <gd-search (hidePanel)=\"showSearch = !$event\" *ngIf=\"showSearch\" ></gd-search>\n\n      <gd-button class=\"thumbnails-button\" [disabled]=\"formatDisabled\" [icon]=\"'th-large'\" [tooltip]=\"'Thumbnails'\"\n                 (click)=\"openThumbnails()\" *ngIf=\"thumbnailsConfig && isDesktop\"></gd-button>\n    </gd-top-toolbar>\n  </div>\n  <div class=\"doc-panel\" *ngIf=\"file\">\n    <gd-thumbnails *ngIf=\"showThumbnails\" [pages]=\"file.pages\" [isHtmlMode]=\"htmlModeConfig\"\n                   [guid]=\"file.guid\" [mode]=\"htmlModeConfig\"></gd-thumbnails>\n\n    <gd-document class=\"gd-document\" *ngIf=\"file\" [file]=\"file\" [mode]=\"htmlModeConfig\"\n                 [preloadPageCount]=\"viewerConfig?.preloadPageCount\" gdRenderPrint [htmlMode]=\"htmlModeConfig\"></gd-document>\n  </div>\n\n  <gd-init-state [icon]=\"'eye'\" [text]=\"''\" *ngIf=\"!file\"></gd-init-state>\n\n  <gd-browse-files-modal (urlForUpload)=\"upload($event)\" [files]=\"files\" (selectedDirectory)=\"selectDir($event)\"\n                         (selectedFileGuid)=\"selectFile($event, null, browseFilesModal)\"\n                         [uploadConfig]=\"uploadConfig\"></gd-browse-files-modal>\n\n  <gd-error-modal></gd-error-modal>\n  <gd-password-required></gd-password-required>\n</div>\n"

/***/ }),

/***/ "./src/app/viewer-app.component.less":
/*!*******************************************!*\
  !*** ./src/app/viewer-app.component.less ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".current-page-number {\n  margin: 0px 15px;\n  font-size: 14px;\n  color: #959da5;\n}\n.wrapper {\n  align-items: stretch;\n  height: 100%;\n  width: 100%;\n  position: fixed;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n}\n.doc-panel {\n  display: flex;\n  height: inherit;\n}\n.thumbnails-button {\n  position: absolute;\n  right: 3px;\n}\n.gd-document {\n  width: 100%;\n  height: 100%;\n}\n.top-panel {\n  display: flex;\n  align-items: center;\n  width: 100%;\n}\n.toolbar-panel {\n  background-color: #3e4e5a;\n  width: 100%;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9wYXZlbGVnb3Jvdi9Eb2N1bWVudHMvcmVwb3MvR3JvdXBEb2NzLlRvdGFsLUFuZ3VsYXIvYXBwcy92aWV3ZXIvc3JjL2FwcC92aWV3ZXItYXBwLmNvbXBvbmVudC5sZXNzIiwic3JjL2FwcC92aWV3ZXItYXBwLmNvbXBvbmVudC5sZXNzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtBQ0NGO0FERUE7RUFDRSxvQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtFQUNBLE1BQUE7RUFDQSxTQUFBO0VBQ0EsT0FBQTtFQUNBLFFBQUE7QUNBRjtBREdBO0VBQ0UsYUFBQTtFQUNBLGVBQUE7QUNERjtBRElBO0VBQ0Usa0JBQUE7RUFDQSxVQUFBO0FDRkY7QURLQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0FDSEY7QURNQTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7QUNKRjtBRE9BO0VBQ0UseUJBQUE7RUFDQSxXQUFBO0FDTEYiLCJmaWxlIjoic3JjL2FwcC92aWV3ZXItYXBwLmNvbXBvbmVudC5sZXNzIiwic291cmNlc0NvbnRlbnQiOlsiLmN1cnJlbnQtcGFnZS1udW1iZXIge1xuICBtYXJnaW46IDBweCAxNXB4O1xuICBmb250LXNpemU6IDE0cHg7XG4gIGNvbG9yOiAjOTU5ZGE1O1xufVxuXG4ud3JhcHBlciB7XG4gIGFsaWduLWl0ZW1zOiBzdHJldGNoO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHdpZHRoOiAxMDAlO1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHRvcDogMDtcbiAgYm90dG9tOiAwO1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbn1cblxuLmRvYy1wYW5lbCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGhlaWdodDogaW5oZXJpdDtcbn1cblxuLnRodW1ibmFpbHMtYnV0dG9uIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogM3B4O1xufVxuXG4uZ2QtZG9jdW1lbnQge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuXG4udG9wLXBhbmVsIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi50b29sYmFyLXBhbmVsIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzNlNGU1YTtcbiAgd2lkdGg6IDEwMCU7XG59XG4iLCIuY3VycmVudC1wYWdlLW51bWJlciB7XG4gIG1hcmdpbjogMHB4IDE1cHg7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgY29sb3I6ICM5NTlkYTU7XG59XG4ud3JhcHBlciB7XG4gIGFsaWduLWl0ZW1zOiBzdHJldGNoO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHdpZHRoOiAxMDAlO1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHRvcDogMDtcbiAgYm90dG9tOiAwO1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbn1cbi5kb2MtcGFuZWwge1xuICBkaXNwbGF5OiBmbGV4O1xuICBoZWlnaHQ6IGluaGVyaXQ7XG59XG4udGh1bWJuYWlscy1idXR0b24ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiAzcHg7XG59XG4uZ2QtZG9jdW1lbnQge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuLnRvcC1wYW5lbCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHdpZHRoOiAxMDAlO1xufVxuLnRvb2xiYXItcGFuZWwge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjM2U0ZTVhO1xuICB3aWR0aDogMTAwJTtcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/viewer-app.component.ts":
/*!*****************************************!*\
  !*** ./src/app/viewer-app.component.ts ***!
  \*****************************************/
/*! exports provided: ViewerAppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewerAppComponent", function() { return ViewerAppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _viewer_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./viewer.service */ "./src/app/viewer.service.ts");
/* harmony import */ var _groupdocs_total_angular_common_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @groupdocs-total-angular/common-components */ "../../libs/common-components/src/index.ts");
/* harmony import */ var _viewer_config_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./viewer-config.service */ "./src/app/viewer-config.service.ts");






var ViewerAppComponent = /** @class */ (function () {
    function ViewerAppComponent(_viewerService, _modalService, configService, uploadFilesService, _navigateService, _zoomService, pagePreloadService, _renderPrintService, passwordService, _windowService) {
        var _this = this;
        this._viewerService = _viewerService;
        this._modalService = _modalService;
        this._navigateService = _navigateService;
        this._zoomService = _zoomService;
        this._renderPrintService = _renderPrintService;
        this._windowService = _windowService;
        this.title = 'viewer';
        this.files = [];
        this.countPages = 0;
        this.formatDisabled = !this.file;
        this.showThumbnails = false;
        this.browseFilesModal = _groupdocs_total_angular_common_components__WEBPACK_IMPORTED_MODULE_3__["CommonModals"].BrowseFiles;
        this.showSearch = false;
        this._zoom = 100;
        configService.updatedConfig.subscribe(function (viewerConfig) {
            _this.viewerConfig = viewerConfig;
        });
        uploadFilesService.uploadsChange.subscribe(function (uploads) {
            if (uploads) {
                var i = void 0;
                for (i = 0; i < uploads.length; i++) {
                    _this._viewerService.upload(uploads.item(i), '', _this.viewerConfig.rewrite).subscribe(function () {
                        _this.selectDir('');
                    });
                }
            }
        });
        pagePreloadService.checkPreload.subscribe(function (page) {
            if (_this.viewerConfig.preloadPageCount !== 0) {
                for (var i = page; i < page + 2; i++) {
                    if (i > 0 && i <= _this.countPages && !_this.file.pages[i - 1].data) {
                        _this.preloadPages(i, i);
                    }
                }
            }
        });
        passwordService.passChange.subscribe(function (pass) {
            _this.selectFile(_this.credentials.guid, pass, _groupdocs_total_angular_common_components__WEBPACK_IMPORTED_MODULE_3__["CommonModals"].PasswordRequired);
        });
        this.isDesktop = _windowService.isDesktop();
        _windowService.onResize.subscribe(function (w) {
            _this.isDesktop = _windowService.isDesktop();
            _this.refreshZoom();
        });
    }
    Object.defineProperty(ViewerAppComponent.prototype, "rewriteConfig", {
        get: function () {
            return this.viewerConfig ? this.viewerConfig.rewrite : true;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ViewerAppComponent.prototype, "zoomConfig", {
        get: function () {
            return this.viewerConfig ? this.viewerConfig.zoom : true;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ViewerAppComponent.prototype, "pageSelectorConfig", {
        get: function () {
            return this.viewerConfig ? this.viewerConfig.pageSelector : true;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ViewerAppComponent.prototype, "searchConfig", {
        get: function () {
            return this.viewerConfig ? this.viewerConfig.search : true;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ViewerAppComponent.prototype, "thumbnailsConfig", {
        get: function () {
            return this.viewerConfig ? this.viewerConfig.thumbnails : true;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ViewerAppComponent.prototype, "rotateConfig", {
        get: function () {
            return this.viewerConfig ? this.viewerConfig.rotate : true;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ViewerAppComponent.prototype, "downloadConfig", {
        get: function () {
            return this.viewerConfig ? this.viewerConfig.download : true;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ViewerAppComponent.prototype, "uploadConfig", {
        get: function () {
            return this.viewerConfig ? this.viewerConfig.upload : true;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ViewerAppComponent.prototype, "printConfig", {
        get: function () {
            return this.viewerConfig ? this.viewerConfig.print : true;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ViewerAppComponent.prototype, "browseConfig", {
        get: function () {
            return this.viewerConfig ? this.viewerConfig.browse : true;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ViewerAppComponent.prototype, "htmlModeConfig", {
        get: function () {
            return this.viewerConfig ? this.viewerConfig.htmlMode : true;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ViewerAppComponent.prototype, "saveRotateStateConfig", {
        get: function () {
            return this.viewerConfig ? this.viewerConfig.saveRotateState : true;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ViewerAppComponent.prototype, "enableRightClickConfig", {
        get: function () {
            return this.viewerConfig ? this.viewerConfig.enableRightClick : true;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ViewerAppComponent.prototype, "currentPage", {
        get: function () {
            return this._navigateService.currentPage;
        },
        enumerable: true,
        configurable: true
    });
    ViewerAppComponent.prototype.openModal = function (id) {
        this._modalService.open(id);
    };
    ViewerAppComponent.prototype.closeModal = function (id) {
        this._modalService.close(id);
    };
    ViewerAppComponent.prototype.selectDir = function ($event) {
        var _this = this;
        this._viewerService.loadFiles($event).subscribe(function (files) { return _this.files = files || []; });
    };
    ViewerAppComponent.prototype.selectFile = function ($event, password, modalId) {
        var _this = this;
        this.credentials = { guid: $event, password: password };
        this._viewerService.loadFile(this.credentials).subscribe(function (file) {
            _this.file = file;
            _this.formatDisabled = !_this.file;
            if (file) {
                if (file.pages && file.pages[0]) {
                    _this._pageHeight = file.pages[0].height;
                    _this._pageWidth = file.pages[0].width;
                    _this.options = _this.zoomOptions();
                    _this.refreshZoom();
                }
                var preloadPageCount = _this.viewerConfig.preloadPageCount;
                var countPages = file.pages ? file.pages.length : 0;
                if (preloadPageCount > 0) {
                    _this.preloadPages(1, preloadPageCount > countPages ? countPages : preloadPageCount);
                }
                _this._navigateService.countPages = countPages;
                _this._navigateService.currentPage = 1;
                _this.countPages = countPages;
            }
        });
        this._modalService.close(modalId);
        this.clearData();
    };
    ViewerAppComponent.prototype.preloadPages = function (start, end) {
        var _this = this;
        var _loop_1 = function (i) {
            this_1._viewerService.loadPage(this_1.credentials, i).subscribe(function (page) {
                _this.file.pages[i - 1] = page;
            });
        };
        var this_1 = this;
        for (var i = start; i <= end; i++) {
            _loop_1(i);
        }
    };
    ViewerAppComponent.prototype.upload = function ($event) {
        var _this = this;
        this._viewerService.upload(null, $event, this.rewriteConfig).subscribe(function () {
            _this.selectDir('');
        });
    };
    ViewerAppComponent.prototype.nextPage = function () {
        if (this.formatDisabled)
            return;
        this._navigateService.nextPage();
    };
    ViewerAppComponent.prototype.prevPage = function () {
        if (this.formatDisabled)
            return;
        this._navigateService.prevPage();
    };
    ViewerAppComponent.prototype.toLastPage = function () {
        if (this.formatDisabled)
            return;
        this._navigateService.toLastPage();
    };
    ViewerAppComponent.prototype.toFirstPage = function () {
        if (this.formatDisabled)
            return;
        this._navigateService.toFirstPage();
    };
    ViewerAppComponent.prototype.navigateToPage = function (page) {
        if (this.formatDisabled)
            return;
        this._navigateService.navigateTo(page);
    };
    ViewerAppComponent.prototype.zoomIn = function () {
        if (this.formatDisabled)
            return;
        if (this._zoom < 490) {
            this.zoom = this._zoom + 10;
        }
    };
    ViewerAppComponent.prototype.zoomOut = function () {
        if (this.formatDisabled)
            return;
        if (this._zoom > 30) {
            this.zoom = this._zoom - 10;
        }
    };
    ViewerAppComponent.prototype.ptToPx = function (pt) {
        //pt * 96 / 72 = px.
        return pt * 96 / 72;
    };
    ViewerAppComponent.prototype.getFitToWidth = function () {
        var pageWidth = this.ptToPx(this._pageWidth);
        var pageHeight = this.ptToPx(this._pageHeight);
        var offsetWidth = pageWidth ? pageWidth : window.innerWidth;
        return (pageHeight > pageWidth && Math.round(offsetWidth / window.innerWidth) < 2) ? 200 - Math.round(offsetWidth * 100 / window.innerWidth) : Math.round(window.innerWidth * 100 / offsetWidth);
    };
    ViewerAppComponent.prototype.getFitToHeight = function () {
        var pageWidth = this.ptToPx(this._pageWidth);
        var pageHeight = this.ptToPx(this._pageHeight);
        var windowHeight = (pageHeight > pageWidth) ? window.innerHeight - 100 : window.innerHeight + 100;
        var offsetHeight = pageHeight ? pageHeight : windowHeight;
        return (pageHeight > pageWidth) ? Math.round(windowHeight * 100 / offsetHeight) : Math.round(offsetHeight * 100 / windowHeight);
    };
    ViewerAppComponent.prototype.zoomOptions = function () {
        var width = this.getFitToWidth();
        var height = this.getFitToHeight();
        return this._zoomService.zoomOptions(width, height);
    };
    Object.defineProperty(ViewerAppComponent.prototype, "zoom", {
        get: function () {
            return this._zoom;
        },
        set: function (zoom) {
            this._zoom = zoom;
            this._zoomService.changeZoom(this._zoom);
        },
        enumerable: true,
        configurable: true
    });
    ViewerAppComponent.prototype.selectZoom = function ($event) {
        this.zoom = $event;
    };
    ViewerAppComponent.prototype.rotate = function (deg) {
        var _this = this;
        if (this.formatDisabled)
            return;
        var pageNumber = this._navigateService.currentPage;
        if (this.saveRotateStateConfig && this.file) {
            this._viewerService.rotate(this.credentials, deg, pageNumber).subscribe(function (data) {
                for (var _i = 0, data_1 = data; _i < data_1.length; _i++) {
                    var page = data_1[_i];
                    var pageModel = _this.file.pages[page.pageNumber - 1];
                    if (_this.file && _this.file.pages && pageModel) {
                        _this.changeAngle(pageModel, page.angle);
                    }
                }
            });
        }
        else {
            var pageModel = this.file.pages[pageNumber - 1];
            if (this.file && this.file.pages && pageModel) {
                var angle = pageModel.angle + deg;
                if (angle > 360) {
                    this.changeAngle(pageModel, 90);
                }
                else if (angle < -360) {
                    this.changeAngle(pageModel, -90);
                }
                else {
                    this.changeAngle(pageModel, angle);
                }
            }
        }
    };
    ViewerAppComponent.prototype.changeAngle = function (page, angle) {
        page.angle = angle;
    };
    ViewerAppComponent.prototype.downloadFile = function () {
        if (this.formatDisabled)
            return;
        window.location.assign(this._viewerService.getDownloadUrl(this.credentials));
    };
    ViewerAppComponent.prototype.printFile = function () {
        var _this = this;
        if (this.formatDisabled)
            return;
        if (this.viewerConfig.preloadPageCount !== 0) {
            if (_groupdocs_total_angular_common_components__WEBPACK_IMPORTED_MODULE_3__["FileUtil"].find(this.file.guid, false).format === "Portable Document Format") {
                this._viewerService.loadPrintPdf(this.credentials).subscribe(function (blob) {
                    var file = new Blob([blob], { type: 'application/pdf' });
                    _this._renderPrintService.changeBlob(file);
                });
            }
            else {
                this._viewerService.loadPrint(this.credentials).subscribe(function (data) {
                    _this.file.pages = data.pages;
                    _this._renderPrintService.changePages(_this.file.pages);
                });
            }
        }
        else {
            this._renderPrintService.changePages(this.file.pages);
        }
    };
    ViewerAppComponent.prototype.openThumbnails = function () {
        var _this = this;
        if (this.formatDisabled)
            return;
        if (this.showThumbnails) {
            this.showThumbnails = false;
            return;
        }
        if (this.viewerConfig.preloadPageCount === 0) {
            this.showThumbnails = true;
        }
        else {
            this._viewerService.loadThumbnails(this.credentials).subscribe(function (data) {
                _this.file.pages = data.pages;
                _this.showThumbnails = true;
            });
        }
    };
    ViewerAppComponent.prototype.clearData = function () {
        if (!this.file || !this.file.pages) {
            return;
        }
        for (var _i = 0, _a = this.file.pages; _i < _a.length; _i++) {
            var page = _a[_i];
            page.data = null;
        }
    };
    ViewerAppComponent.prototype.onRightClick = function ($event) {
        return this.enableRightClickConfig;
    };
    ViewerAppComponent.prototype.openSearch = function () {
        if (this.formatDisabled)
            return;
        this.showSearch = !this.showSearch;
    };
    ViewerAppComponent.prototype.ngAfterViewInit = function () {
        this.refreshZoom();
    };
    ViewerAppComponent.prototype.refreshZoom = function () {
        this.zoom = this._windowService.isDesktop() ? 100 : this.getFitToWidth();
    };
    ViewerAppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'gd-viewer-angular-root',
            template: __webpack_require__(/*! ./viewer-app.component.html */ "./src/app/viewer-app.component.html"),
            styles: [__webpack_require__(/*! ./viewer-app.component.less */ "./src/app/viewer-app.component.less")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_viewer_service__WEBPACK_IMPORTED_MODULE_2__["ViewerService"],
            _groupdocs_total_angular_common_components__WEBPACK_IMPORTED_MODULE_3__["ModalService"],
            _viewer_config_service__WEBPACK_IMPORTED_MODULE_4__["ViewerConfigService"],
            _groupdocs_total_angular_common_components__WEBPACK_IMPORTED_MODULE_3__["UploadFilesService"],
            _groupdocs_total_angular_common_components__WEBPACK_IMPORTED_MODULE_3__["NavigateService"],
            _groupdocs_total_angular_common_components__WEBPACK_IMPORTED_MODULE_3__["ZoomService"],
            _groupdocs_total_angular_common_components__WEBPACK_IMPORTED_MODULE_3__["PagePreloadService"],
            _groupdocs_total_angular_common_components__WEBPACK_IMPORTED_MODULE_3__["RenderPrintService"],
            _groupdocs_total_angular_common_components__WEBPACK_IMPORTED_MODULE_3__["PasswordService"],
            _groupdocs_total_angular_common_components__WEBPACK_IMPORTED_MODULE_3__["WindowService"]])
    ], ViewerAppComponent);
    return ViewerAppComponent;
}());



/***/ }),

/***/ "./src/app/viewer-config.service.ts":
/*!******************************************!*\
  !*** ./src/app/viewer-config.service.ts ***!
  \******************************************/
/*! exports provided: ViewerConfigService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewerConfigService", function() { return ViewerConfigService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _viewer_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./viewer-config */ "./src/app/viewer-config.ts");
/* harmony import */ var _groupdocs_total_angular_common_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @groupdocs-total-angular/common-components */ "../../libs/common-components/src/index.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "../../node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ "../../node_modules/rxjs/_esm5/index.js");







var ViewerConfigService = /** @class */ (function () {
    function ViewerConfigService(_http, _config) {
        this._http = _http;
        this._config = _config;
        this._viewerConfig = new rxjs__WEBPACK_IMPORTED_MODULE_6__["BehaviorSubject"](new _viewer_config__WEBPACK_IMPORTED_MODULE_2__["ViewerConfig"]());
        this._updatedConfig = this._viewerConfig.asObservable();
        _config.apiEndpoint = _environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].apiUrl;
    }
    Object.defineProperty(ViewerConfigService.prototype, "updatedConfig", {
        get: function () {
            return this._updatedConfig;
        },
        enumerable: true,
        configurable: true
    });
    ViewerConfigService.prototype.load = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var configEndpoint = _this._config.getConfigEndpoint(_groupdocs_total_angular_common_components__WEBPACK_IMPORTED_MODULE_3__["Api"].VIEWER_APP);
            _this._http.get(configEndpoint, _groupdocs_total_angular_common_components__WEBPACK_IMPORTED_MODULE_3__["Api"].httpOptionsJson).toPromise().then(function (response) {
                var viewerConfig = response;
                _this._viewerConfig.next(viewerConfig);
                resolve();
            }).catch(function (response) {
                reject("Could not load viewer config: " + JSON.stringify(response));
            });
        });
    };
    ViewerConfigService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"], _groupdocs_total_angular_common_components__WEBPACK_IMPORTED_MODULE_3__["ConfigService"]])
    ], ViewerConfigService);
    return ViewerConfigService;
}());



/***/ }),

/***/ "./src/app/viewer-config.ts":
/*!**********************************!*\
  !*** ./src/app/viewer-config.ts ***!
  \**********************************/
/*! exports provided: ViewerConfig */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewerConfig", function() { return ViewerConfig; });
var ViewerConfig = /** @class */ (function () {
    function ViewerConfig() {
    }
    return ViewerConfig;
}());



/***/ }),

/***/ "./src/app/viewer.module.ts":
/*!**********************************!*\
  !*** ./src/app/viewer.module.ts ***!
  \**********************************/
/*! exports provided: initializeApp, ViewerModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initializeApp", function() { return initializeApp; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewerModule", function() { return ViewerModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "../../node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "../../node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _viewer_app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./viewer-app.component */ "./src/app/viewer-app.component.ts");
/* harmony import */ var _groupdocs_total_angular_common_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @groupdocs-total-angular/common-components */ "../../libs/common-components/src/index.ts");
/* harmony import */ var angular2_fontawesome__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! angular2-fontawesome */ "../../node_modules/angular2-fontawesome/angular2-fontawesome.js");
/* harmony import */ var angular2_fontawesome__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(angular2_fontawesome__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _viewer_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./viewer.service */ "./src/app/viewer.service.ts");
/* harmony import */ var _viewer_config_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./viewer-config.service */ "./src/app/viewer-config.service.ts");
/* harmony import */ var _thumbnails_thumbnails_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./thumbnails/thumbnails.component */ "./src/app/thumbnails/thumbnails.component.ts");











function initializeApp(viewerConfigService) {
    return function () { return viewerConfigService.load(); };
}
var ViewerModule = /** @class */ (function () {
    function ViewerModule() {
    }
    ViewerModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [_viewer_app_component__WEBPACK_IMPORTED_MODULE_4__["ViewerAppComponent"], _thumbnails_thumbnails_component__WEBPACK_IMPORTED_MODULE_9__["ThumbnailsComponent"]],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _groupdocs_total_angular_common_components__WEBPACK_IMPORTED_MODULE_5__["CommonComponentsModule"].forRoot(),
                angular2_fontawesome__WEBPACK_IMPORTED_MODULE_6__["Angular2FontawesomeModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"]
            ],
            providers: [
                _viewer_service__WEBPACK_IMPORTED_MODULE_7__["ViewerService"],
                _groupdocs_total_angular_common_components__WEBPACK_IMPORTED_MODULE_5__["ConfigService"],
                _viewer_config_service__WEBPACK_IMPORTED_MODULE_8__["ViewerConfigService"],
                {
                    provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HTTP_INTERCEPTORS"],
                    useClass: _groupdocs_total_angular_common_components__WEBPACK_IMPORTED_MODULE_5__["ErrorInterceptorService"],
                    multi: true
                },
                {
                    provide: _angular_core__WEBPACK_IMPORTED_MODULE_2__["APP_INITIALIZER"],
                    useFactory: initializeApp,
                    deps: [_viewer_config_service__WEBPACK_IMPORTED_MODULE_8__["ViewerConfigService"]], multi: true
                }
            ],
            bootstrap: [_viewer_app_component__WEBPACK_IMPORTED_MODULE_4__["ViewerAppComponent"]]
        })
    ], ViewerModule);
    return ViewerModule;
}());



/***/ }),

/***/ "./src/app/viewer.service.ts":
/*!***********************************!*\
  !*** ./src/app/viewer.service.ts ***!
  \***********************************/
/*! exports provided: ViewerService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewerService", function() { return ViewerService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "../../node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _groupdocs_total_angular_common_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @groupdocs-total-angular/common-components */ "../../libs/common-components/src/index.ts");




var ViewerService = /** @class */ (function () {
    function ViewerService(_http, _config) {
        this._http = _http;
        this._config = _config;
    }
    ViewerService.prototype.loadFiles = function (path) {
        return this._http.post(this._config.getViewerApiEndpoint() + _groupdocs_total_angular_common_components__WEBPACK_IMPORTED_MODULE_3__["Api"].LOAD_FILE_TREE, { 'path': path }, _groupdocs_total_angular_common_components__WEBPACK_IMPORTED_MODULE_3__["Api"].httpOptionsJson);
    };
    ViewerService.prototype.loadFile = function (credentials) {
        return this._http.post(this._config.getViewerApiEndpoint() + _groupdocs_total_angular_common_components__WEBPACK_IMPORTED_MODULE_3__["Api"].LOAD_DOCUMENT_DESCRIPTION, credentials, _groupdocs_total_angular_common_components__WEBPACK_IMPORTED_MODULE_3__["Api"].httpOptionsJson);
    };
    ViewerService.prototype.upload = function (file, url, rewrite) {
        var formData = new FormData();
        formData.append("file", file);
        formData.append('rewrite', String(rewrite));
        if (url) {
            formData.append("url", url);
        }
        return this._http.post(this._config.getViewerApiEndpoint() + _groupdocs_total_angular_common_components__WEBPACK_IMPORTED_MODULE_3__["Api"].UPLOAD_DOCUMENTS, formData);
    };
    ViewerService.prototype.loadPage = function (credentials, page) {
        return this._http.post(this._config.getViewerApiEndpoint() + _groupdocs_total_angular_common_components__WEBPACK_IMPORTED_MODULE_3__["Api"].LOAD_DOCUMENT_PAGE, {
            'guid': credentials.guid,
            'password': credentials.password,
            'page': page
        }, _groupdocs_total_angular_common_components__WEBPACK_IMPORTED_MODULE_3__["Api"].httpOptionsJson);
    };
    ViewerService.prototype.rotate = function (credentials, angle, page) {
        return this._http.post(this._config.getViewerApiEndpoint() + _groupdocs_total_angular_common_components__WEBPACK_IMPORTED_MODULE_3__["Api"].ROTATE_DOCUMENT_PAGE, {
            'guid': credentials.guid,
            'password': credentials.password,
            'pages': [page],
            'angle': angle
        }, _groupdocs_total_angular_common_components__WEBPACK_IMPORTED_MODULE_3__["Api"].httpOptionsJson);
    };
    ViewerService.prototype.getDownloadUrl = function (credentials) {
        return this._config.getViewerApiEndpoint() + _groupdocs_total_angular_common_components__WEBPACK_IMPORTED_MODULE_3__["Api"].DOWNLOAD_DOCUMENTS + '/?path=' + credentials.guid;
    };
    ViewerService.prototype.loadPrint = function (credentials) {
        return this._http.post(this._config.getViewerApiEndpoint() + _groupdocs_total_angular_common_components__WEBPACK_IMPORTED_MODULE_3__["Api"].LOAD_PRINT, {
            'guid': credentials.guid,
            'password': credentials.password,
        }, _groupdocs_total_angular_common_components__WEBPACK_IMPORTED_MODULE_3__["Api"].httpOptionsJson);
    };
    ViewerService.prototype.loadPrintPdf = function (credentials) {
        return this._http.post(this._config.getViewerApiEndpoint() + _groupdocs_total_angular_common_components__WEBPACK_IMPORTED_MODULE_3__["Api"].LOAD_PRINT_PDF, {
            'guid': credentials.guid,
            'password': credentials.password,
        }, _groupdocs_total_angular_common_components__WEBPACK_IMPORTED_MODULE_3__["Api"].httpOptionsJsonResponseTypeBlob);
    };
    ViewerService.prototype.loadThumbnails = function (credentials) {
        return this._http.post(this._config.getViewerApiEndpoint() + _groupdocs_total_angular_common_components__WEBPACK_IMPORTED_MODULE_3__["Api"].LOAD_THUMBNAILS, {
            'guid': credentials.guid,
            'password': credentials.password,
        }, _groupdocs_total_angular_common_components__WEBPACK_IMPORTED_MODULE_3__["Api"].httpOptionsJson);
    };
    ViewerService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _groupdocs_total_angular_common_components__WEBPACK_IMPORTED_MODULE_3__["ConfigService"]])
    ], ViewerService);
    return ViewerService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false,
    name: 'dev',
    apiUrl: 'http://localhost:8080/',
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "../../node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_viewer_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/viewer.module */ "./src/app/viewer.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])()
    .bootstrapModule(_app_viewer_module__WEBPACK_IMPORTED_MODULE_2__["ViewerModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/pavelegorov/Documents/repos/GroupDocs.Total-Angular/apps/viewer/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map