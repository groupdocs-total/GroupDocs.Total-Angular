/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
var PageModel = /** @class */ (function () {
    function PageModel() {
    }
    return PageModel;
}());
export { PageModel };
if (false) {
    /** @type {?} */
    PageModel.prototype.data;
    /** @type {?} */
    PageModel.prototype.angle;
    /** @type {?} */
    PageModel.prototype.width;
    /** @type {?} */
    PageModel.prototype.height;
    /** @type {?} */
    PageModel.prototype.number;
    /** @type {?} */
    PageModel.prototype.editable;
}
var RotatedPage = /** @class */ (function () {
    function RotatedPage() {
    }
    return RotatedPage;
}());
export { RotatedPage };
if (false) {
    /** @type {?} */
    RotatedPage.prototype.pageNumber;
    /** @type {?} */
    RotatedPage.prototype.angle;
}
var FileCredentials = /** @class */ (function () {
    function FileCredentials(guid, password) {
        this.guid = guid;
        this.password = password;
    }
    return FileCredentials;
}());
export { FileCredentials };
if (false) {
    /** @type {?} */
    FileCredentials.prototype.guid;
    /** @type {?} */
    FileCredentials.prototype.password;
}
var SaveFile = /** @class */ (function (_super) {
    tslib_1.__extends(SaveFile, _super);
    function SaveFile(guid, password, content) {
        var _this = _super.call(this, guid, password) || this;
        _this.content = content;
        return _this;
    }
    return SaveFile;
}(FileCredentials));
export { SaveFile };
if (false) {
    /** @type {?} */
    SaveFile.prototype.content;
}
var FileDescription = /** @class */ (function () {
    function FileDescription() {
        this.printAllowed = true;
    }
    return FileDescription;
}());
export { FileDescription };
if (false) {
    /** @type {?} */
    FileDescription.prototype.guid;
    /** @type {?} */
    FileDescription.prototype.pages;
    /** @type {?} */
    FileDescription.prototype.printAllowed;
}
var FileModel = /** @class */ (function () {
    function FileModel() {
    }
    return FileModel;
}());
export { FileModel };
if (false) {
    /** @type {?} */
    FileModel.prototype.guid;
    /** @type {?} */
    FileModel.prototype.name;
    /** @type {?} */
    FileModel.prototype.directory;
    /** @type {?} */
    FileModel.prototype.size;
    /** @type {?} */
    FileModel.prototype.isDirectory;
}
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
export { HttpError };
if (false) {
    /** @type {?} */
    HttpError.BadRequest;
    /** @type {?} */
    HttpError.Unauthorized;
    /** @type {?} */
    HttpError.Forbidden;
    /** @type {?} */
    HttpError.NotFound;
    /** @type {?} */
    HttpError.TimeOut;
    /** @type {?} */
    HttpError.Conflict;
    /** @type {?} */
    HttpError.InternalServerError;
}
var Utils = /** @class */ (function () {
    function Utils() {
    }
    /**
     * @param {?} event
     * @return {?}
     */
    Utils.getMousePosition = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        /** @type {?} */
        var mouse = {
            x: 0,
            y: 0
        };
        /** @type {?} */
        var wEvent = (/** @type {?} */ (window.event));
        /** @type {?} */
        var ev = event || wEvent;
        if (ev.pageX || wEvent.pageX || wEvent.screenX || (ev.touches && ev.touches[0] && ev.touches[0].pageX)) { //Moz
            //Moz
            /** @type {?} */
            var pageX = typeof ev.pageX !== "undefined" && ev.pageX !== 0 ? ev.pageX : wEvent.pageX;
            /** @type {?} */
            var pageY = typeof ev.pageY !== "undefined" && ev.pageY !== 0 ? ev.pageY : wEvent.pageY;
            /** @type {?} */
            var screenX_1 = typeof wEvent.screenX !== "undefined" && wEvent.screenY !== 0;
            /** @type {?} */
            var screenY_1 = typeof wEvent.screenY !== "undefined" && wEvent.screenY !== 0;
            mouse.x = pageX ? pageX : (screenX_1 ? wEvent.screenX : ev.touches[0].pageX);
            mouse.y = pageY ? pageY : (screenY_1 ? wEvent.screenY : ev.touches[0].pageY);
        }
        else if (ev.clientX) { //IE
            mouse.x = ev.clientX + document.body.scrollLeft;
            mouse.y = ev.clientY + document.body.scrollTop;
        }
        return mouse;
    };
    return Utils;
}());
export { Utils };
var FileUtil = /** @class */ (function () {
    function FileUtil() {
    }
    /**
     * @param {?} filename
     * @param {?} isDirectory
     * @return {?}
     */
    FileUtil.find = /**
     * @param {?} filename
     * @param {?} isDirectory
     * @return {?}
     */
    function (filename, isDirectory) {
        if (filename && !isDirectory) {
            /** @type {?} */
            var strings = filename.split('.');
            /** @type {?} */
            var name_1 = strings.pop().toLowerCase();
            if (typeof FileUtil.map[name_1] === "undefined") {
                return strings.length > 0 ? FileUtil.map['unknown'] : FileUtil.map['folder'];
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
        'xls2003': { 'format': 'Microsoft Excel', 'icon': 'file-excel' },
        'xltx': { 'format': 'Microsoft Excel', 'icon': 'file-excel' },
        'xltm': { 'format': 'Microsoft Excel', 'icon': 'file-excel' },
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
        'mpp': { 'format': 'Microsoft Project', 'icon': 'file-alt' },
        'mpt': { 'format': 'Microsoft Project', 'icon': 'file-alt' },
        'msg': { 'format': 'Microsoft Outlook', 'icon': 'file-alt' },
        'eml': { 'format': 'Microsoft Outlook', 'icon': 'file-alt' },
        'emlx': { 'format': 'Microsoft Outlook', 'icon': 'file-alt' },
        'one': { 'format': 'Microsoft OneNote', 'icon': 'file-word' },
        'odt': { 'format': 'Open Document Text', 'icon': 'file-word' },
        'ott': { 'format': 'Open Document Text Template', 'icon': 'file-word' },
        'ods': { 'format': 'Open Document Spreadsheet', 'icon': 'file-excel' },
        'odp': { 'format': 'Open Document Presentation', 'icon': 'file-powerpoint' },
        'otp': { 'format': 'Open Document Presentation', 'icon': 'file-powerpoint' },
        'ots': { 'format': 'Open Document Presentation', 'icon': 'file-powerpoint' },
        'potx': { 'format': 'Open Document Presentation', 'icon': 'file-powerpoint' },
        'potm': { 'format': 'Open Document Presentation', 'icon': 'file-powerpoint' },
        'pptm': { 'format': 'Open Document Presentation', 'icon': 'file-powerpoint' },
        'ppsm': { 'format': 'Open Document Presentation', 'icon': 'file-powerpoint' },
        'rtf': { 'format': 'Rich Text Format', 'icon': 'file-alt' },
        'txt': { 'format': 'Plain Text File', 'icon': 'file-alt' },
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
        'tiff': { 'format': 'Tagged Image File Format', 'icon': 'file-image' },
        'tif': { 'format': 'Tagged Image File Format', 'icon': 'file-image' },
        'psd': { 'format': 'Tagged Image File Format', 'icon': 'file-image' },
        'svg': { 'format': 'Tagged Image File Format', 'icon': 'file-image' },
        'jp2': { 'format': 'Tagged Image File Format', 'icon': 'file-image' },
        'epub': { 'format': 'Electronic Publication', 'icon': 'file-pdf' },
        'ico': { 'format': 'Windows Icon', 'icon': 'file-image' },
        'webp': { 'format': 'Compressed Image', 'icon': 'file-image' },
        'mobi': { 'format': 'Mobipocket eBook', 'icon': 'file-pdf' },
        'tex': { 'format': 'LaTeX Source Document', 'icon': 'file-pdf' },
        'djvu': { 'format': 'Multi-Layer Raster Image', 'icon': 'file-alt' },
        'unknown': { 'format': 'This format is not supported', 'icon': 'file' },
    };
    return FileUtil;
}());
export { FileUtil };
if (false) {
    /** @type {?} */
    FileUtil.map;
}
var FileService = /** @class */ (function () {
    function FileService() {
    }
    return FileService;
}());
export { FileService };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmlsZS5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdyb3VwZG9jcy5leGFtcGxlcy5hbmd1bGFyL2NvbW1vbi1jb21wb25lbnRzLyIsInNvdXJjZXMiOlsibGliL2ZpbGUuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBO0lBQUE7SUFPQSxDQUFDO0lBQUQsZ0JBQUM7QUFBRCxDQUFDLEFBUEQsSUFPQzs7OztJQU5DLHlCQUFhOztJQUNiLDBCQUFjOztJQUNkLDBCQUFjOztJQUNkLDJCQUFlOztJQUNmLDJCQUFlOztJQUNmLDZCQUFrQjs7QUFHcEI7SUFBQTtJQUdBLENBQUM7SUFBRCxrQkFBQztBQUFELENBQUMsQUFIRCxJQUdDOzs7O0lBRkMsaUNBQW1COztJQUNuQiw0QkFBYzs7QUFHaEI7SUFJRSx5QkFBWSxJQUFZLEVBQUUsUUFBZ0I7UUFDeEMsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7UUFDakIsSUFBSSxDQUFDLFFBQVEsR0FBRyxRQUFRLENBQUM7SUFDM0IsQ0FBQztJQUNILHNCQUFDO0FBQUQsQ0FBQyxBQVJELElBUUM7Ozs7SUFQQywrQkFBYTs7SUFDYixtQ0FBaUI7O0FBUW5CO0lBQThCLG9DQUFlO0lBRzNDLGtCQUFZLElBQVksRUFBRSxRQUFnQixFQUFFLE9BQWU7UUFBM0QsWUFDRSxrQkFBTSxJQUFJLEVBQUUsUUFBUSxDQUFDLFNBRXRCO1FBREMsS0FBSSxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUM7O0lBQ3pCLENBQUM7SUFDSCxlQUFDO0FBQUQsQ0FBQyxBQVBELENBQThCLGVBQWUsR0FPNUM7Ozs7SUFOQywyQkFBZ0I7O0FBUWxCO0lBQUE7UUFHRSxpQkFBWSxHQUFHLElBQUksQ0FBQztJQUN0QixDQUFDO0lBQUQsc0JBQUM7QUFBRCxDQUFDLEFBSkQsSUFJQzs7OztJQUhDLCtCQUFhOztJQUNiLGdDQUFtQjs7SUFDbkIsdUNBQW9COztBQUd0QjtJQUFBO0lBTUEsQ0FBQztJQUFE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Z0IsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFDO1FBQ3pELEtBQUssRUFBRSxFQUFDLFFBQVEsRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFDO1FBQ3hELE1BQU0sRUFBRSxFQUFDLFFBQVEsRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFDO1FBQ3pELE1BQU0sRUFBRSxFQUFDLFFBQVEsRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFDO1FBQ3pELEtBQUssRUFBRSxFQUFDLFFBQVEsRUFBRSxpQkFBaUIsRUFBRSxNQUFNLEVBQUUsWUFBWSxFQUFDO1FBQzFELE1BQU0sRUFBRSxFQUFDLFFBQVEsRUFBRSxpQkFBaUIsRUFBRSxNQUFNLEVBQUUsWUFBWSxFQUFDO1FBQzNELE1BQU0sRUFBRSxFQUFDLFFBQVEsRUFBRSxpQkFBaUIsRUFBRSxNQUFNLEVBQUUsWUFBWSxFQUFDO1FBQzNELE1BQU0sRUFBRSxFQUFDLFFBQVEsRUFBRSxpQkFBaUIsRUFBRSxNQUFNLEVBQUUsWUFBWSxFQUFDO1FBQzNELFNBQVMsRUFBRSxFQUFDLFFBQVEsRUFBRSxpQkFBaUIsRUFBRSxNQUFNLEVBQUUsWUFBWSxFQUFDO1FBQzlELE1BQU0sRUFBRSxFQUFDLFFBQVEsRUFBRSxpQkFBaUIsRUFBRSxNQUFNLEVBQUUsWUFBWSxFQUFDO1FBQzNELE1BQU0sRUFBRSxFQUFDLFFBQVEsRUFBRSxpQkFBaUIsRUFBRSxNQUFNLEVBQUUsWUFBWSxFQUFDO1FBQzNELEtBQUssRUFBRSxFQUFDLFFBQVEsRUFBRSxzQkFBc0IsRUFBRSxNQUFNLEVBQUUsaUJBQWlCLEVBQUM7UUFDcEUsTUFBTSxFQUFFLEVBQUMsUUFBUSxFQUFFLHNCQUFzQixFQUFFLE1BQU0sRUFBRSxpQkFBaUIsRUFBQztRQUNyRSxLQUFLLEVBQUUsRUFBQyxRQUFRLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSxFQUFFLGlCQUFpQixFQUFDO1FBQ3BFLE1BQU0sRUFBRSxFQUFDLFFBQVEsRUFBRSxzQkFBc0IsRUFBRSxNQUFNLEVBQUUsaUJBQWlCLEVBQUM7UUFDckUsS0FBSyxFQUFFLEVBQUMsUUFBUSxFQUFFLGlCQUFpQixFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUM7UUFDekQsS0FBSyxFQUFFLEVBQUMsUUFBUSxFQUFFLGlCQUFpQixFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUM7UUFDekQsS0FBSyxFQUFFLEVBQUMsUUFBUSxFQUFFLGlCQUFpQixFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUM7UUFDekQsS0FBSyxFQUFFLEVBQUMsUUFBUSxFQUFFLGlCQUFpQixFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUM7UUFDekQsS0FBSyxFQUFFLEVBQUMsUUFBUSxFQUFFLGlCQUFpQixFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUM7UUFDekQsS0FBSyxFQUFFLEVBQUMsUUFBUSxFQUFFLGlCQUFpQixFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUM7UUFDekQsTUFBTSxFQUFFLEVBQUMsUUFBUSxFQUFFLGlCQUFpQixFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUM7UUFDMUQsS0FBSyxFQUFFLEVBQUMsUUFBUSxFQUFFLGlCQUFpQixFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUM7UUFDekQsTUFBTSxFQUFFLEVBQUMsUUFBUSxFQUFFLGlCQUFpQixFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUM7UUFDMUQsTUFBTSxFQUFFLEVBQUMsUUFBUSxFQUFFLGlCQUFpQixFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUM7UUFDMUQsS0FBSyxFQUFFLEVBQUMsUUFBUSxFQUFFLG1CQUFtQixFQUFFLE1BQU0sRUFBRSxVQUFVLEVBQUM7UUFDMUQsS0FBSyxFQUFFLEVBQUMsUUFBUSxFQUFFLG1CQUFtQixFQUFFLE1BQU0sRUFBRSxVQUFVLEVBQUM7UUFDMUQsS0FBSyxFQUFFLEVBQUMsUUFBUSxFQUFFLG1CQUFtQixFQUFFLE1BQU0sRUFBRSxVQUFVLEVBQUM7UUFDMUQsS0FBSyxFQUFFLEVBQUMsUUFBUSxFQUFFLG1CQUFtQixFQUFFLE1BQU0sRUFBRSxVQUFVLEVBQUM7UUFDMUQsTUFBTSxFQUFFLEVBQUMsUUFBUSxFQUFFLG1CQUFtQixFQUFFLE1BQU0sRUFBRSxVQUFVLEVBQUM7UUFDM0QsS0FBSyxFQUFFLEVBQUMsUUFBUSxFQUFFLG1CQUFtQixFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUM7UUFDM0QsS0FBSyxFQUFFLEVBQUMsUUFBUSxFQUFFLG9CQUFvQixFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUM7UUFDNUQsS0FBSyxFQUFFLEVBQUMsUUFBUSxFQUFFLDZCQUE2QixFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUM7UUFDckUsS0FBSyxFQUFFLEVBQUMsUUFBUSxFQUFFLDJCQUEyQixFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQUM7UUFDcEUsS0FBSyxFQUFFLEVBQUMsUUFBUSxFQUFFLDRCQUE0QixFQUFFLE1BQU0sRUFBRSxpQkFBaUIsRUFBQztRQUMxRSxLQUFLLEVBQUUsRUFBQyxRQUFRLEVBQUUsNEJBQTRCLEVBQUUsTUFBTSxFQUFFLGlCQUFpQixFQUFDO1FBQzFFLEtBQUssRUFBRSxFQUFDLFFBQVEsRUFBRSw0QkFBNEIsRUFBRSxNQUFNLEVBQUUsaUJBQWlCLEVBQUM7UUFDMUUsTUFBTSxFQUFFLEVBQUMsUUFBUSxFQUFFLDRCQUE0QixFQUFFLE1BQU0sRUFBRSxpQkFBaUIsRUFBQztRQUMzRSxNQUFNLEVBQUUsRUFBQyxRQUFRLEVBQUUsNEJBQTRCLEVBQUUsTUFBTSxFQUFFLGlCQUFpQixFQUFDO1FBQzNFLE1BQU0sRUFBRSxFQUFDLFFBQVEsRUFBRSw0QkFBNEIsRUFBRSxNQUFNLEVBQUUsaUJBQWlCLEVBQUM7UUFDM0UsTUFBTSxFQUFFLEVBQUMsUUFBUSxFQUFFLDRCQUE0QixFQUFFLE1BQU0sRUFBRSxpQkFBaUIsRUFBQztRQUMzRSxLQUFLLEVBQUUsRUFBQyxRQUFRLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxFQUFFLFVBQVUsRUFBQztRQUN6RCxLQUFLLEVBQUUsRUFBQyxRQUFRLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxFQUFFLFVBQVUsRUFBQztRQUN4RCxLQUFLLEVBQUUsRUFBQyxRQUFRLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBQztRQUNqRSxNQUFNLEVBQUUsRUFBQyxRQUFRLEVBQUUsMkJBQTJCLEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBQztRQUNwRSxLQUFLLEVBQUUsRUFBQyxRQUFRLEVBQUUsMkJBQTJCLEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBQztRQUNuRSxPQUFPLEVBQUUsRUFBQyxRQUFRLEVBQUUsMkJBQTJCLEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBQztRQUNyRSxLQUFLLEVBQUUsRUFBQyxRQUFRLEVBQUUsNEJBQTRCLEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBQztRQUNwRSxLQUFLLEVBQUUsRUFBQyxRQUFRLEVBQUUseUJBQXlCLEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBQztRQUNqRSxLQUFLLEVBQUUsRUFBQyxRQUFRLEVBQUUsNkJBQTZCLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBQztRQUN0RSxLQUFLLEVBQUUsRUFBQyxRQUFRLEVBQUUsNkJBQTZCLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBQztRQUN0RSxLQUFLLEVBQUUsRUFBQyxRQUFRLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBQztRQUN6RCxLQUFLLEVBQUUsRUFBQyxRQUFRLEVBQUUsNkJBQTZCLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBQztRQUN0RSxLQUFLLEVBQUUsRUFBQyxRQUFRLEVBQUUsa0NBQWtDLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBQztRQUMzRSxLQUFLLEVBQUUsRUFBQyxRQUFRLEVBQUUsa0NBQWtDLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBQztRQUMzRSxNQUFNLEVBQUUsRUFBQyxRQUFRLEVBQUUsa0NBQWtDLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBQztRQUM1RSxNQUFNLEVBQUUsRUFBQyxRQUFRLEVBQUUsa0NBQWtDLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBQztRQUM1RSxLQUFLLEVBQUUsRUFBQyxRQUFRLEVBQUUsMkJBQTJCLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBQztRQUNwRSxNQUFNLEVBQUUsRUFBQyxRQUFRLEVBQUUsMEJBQTBCLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBQztRQUNwRSxLQUFLLEVBQUUsRUFBQyxRQUFRLEVBQUUsMEJBQTBCLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBQztRQUNuRSxLQUFLLEVBQUUsRUFBQyxRQUFRLEVBQUUsMEJBQTBCLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBQztRQUNuRSxLQUFLLEVBQUUsRUFBQyxRQUFRLEVBQUUsMEJBQTBCLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBQztRQUNuRSxLQUFLLEVBQUUsRUFBQyxRQUFRLEVBQUUsMEJBQTBCLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBQztRQUNuRSxNQUFNLEVBQUUsRUFBQyxRQUFRLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSxFQUFFLFVBQVUsRUFBQztRQUNoRSxLQUFLLEVBQUUsRUFBQyxRQUFRLEVBQUUsY0FBYyxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQUM7UUFDdkQsTUFBTSxFQUFFLEVBQUMsUUFBUSxFQUFFLGtCQUFrQixFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQUM7UUFDNUQsTUFBTSxFQUFFLEVBQUMsUUFBUSxFQUFFLGtCQUFrQixFQUFFLE1BQU0sRUFBRSxVQUFVLEVBQUM7UUFDMUQsS0FBSyxFQUFFLEVBQUMsUUFBUSxFQUFFLHVCQUF1QixFQUFFLE1BQU0sRUFBRSxVQUFVLEVBQUM7UUFDOUQsTUFBTSxFQUFFLEVBQUMsUUFBUSxFQUFFLDBCQUEwQixFQUFFLE1BQU0sRUFBRSxVQUFVLEVBQUM7UUFDbEUsU0FBUyxFQUFFLEVBQUMsUUFBUSxFQUFFLDhCQUE4QixFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUM7S0FDdEUsQ0FBQztJQWVKLGVBQUM7Q0FBQSxBQTNGRCxJQTJGQztTQTNGWSxRQUFROzs7SUFDbkIsYUEyRUU7O0FBaUJKO0lBRUU7SUFDQSxDQUFDO0lBQ0gsa0JBQUM7QUFBRCxDQUFDLEFBSkQsSUFJQyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjbGFzcyBQYWdlTW9kZWwge1xuICBkYXRhOiBzdHJpbmc7XG4gIGFuZ2xlOiBudW1iZXI7XG4gIHdpZHRoOiBudW1iZXI7XG4gIGhlaWdodDogbnVtYmVyO1xuICBudW1iZXI6IG51bWJlcjtcbiAgZWRpdGFibGU6IGJvb2xlYW47XG59XG5cbmV4cG9ydCBjbGFzcyBSb3RhdGVkUGFnZSB7XG4gIHBhZ2VOdW1iZXI6IG51bWJlcjtcbiAgYW5nbGU6IG51bWJlcjtcbn1cblxuZXhwb3J0IGNsYXNzIEZpbGVDcmVkZW50aWFscyB7XG4gIGd1aWQ6IHN0cmluZztcbiAgcGFzc3dvcmQ6IHN0cmluZztcblxuICBjb25zdHJ1Y3RvcihndWlkOiBzdHJpbmcsIHBhc3N3b3JkOiBzdHJpbmcpIHtcbiAgICB0aGlzLmd1aWQgPSBndWlkO1xuICAgIHRoaXMucGFzc3dvcmQgPSBwYXNzd29yZDtcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgU2F2ZUZpbGUgZXh0ZW5kcyBGaWxlQ3JlZGVudGlhbHMge1xuICBjb250ZW50OiBzdHJpbmc7XG5cbiAgY29uc3RydWN0b3IoZ3VpZDogc3RyaW5nLCBwYXNzd29yZDogc3RyaW5nLCBjb250ZW50OiBzdHJpbmcpIHtcbiAgICBzdXBlcihndWlkLCBwYXNzd29yZCk7XG4gICAgdGhpcy5jb250ZW50ID0gY29udGVudDtcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgRmlsZURlc2NyaXB0aW9uIHtcbiAgZ3VpZDogc3RyaW5nO1xuICBwYWdlczogUGFnZU1vZGVsW107XG4gIHByaW50QWxsb3dlZCA9IHRydWU7XG59XG5cbmV4cG9ydCBjbGFzcyBGaWxlTW9kZWwge1xuICBndWlkOiBzdHJpbmc7XG4gIG5hbWU6IHN0cmluZztcbiAgZGlyZWN0b3J5OiBib29sZWFuO1xuICBzaXplOiBudW1iZXI7XG4gIGlzRGlyZWN0b3J5OiBib29sZWFuO1xufVxuXG5leHBvcnQgY2xhc3MgSHR0cEVycm9yIHtcbiAgc3RhdGljIEJhZFJlcXVlc3QgPSA0MDA7XG4gIHN0YXRpYyBVbmF1dGhvcml6ZWQgPSA0MDE7XG4gIHN0YXRpYyBGb3JiaWRkZW4gPSA0MDM7XG4gIHN0YXRpYyBOb3RGb3VuZCA9IDQwNDtcbiAgc3RhdGljIFRpbWVPdXQgPSA0MDg7XG4gIHN0YXRpYyBDb25mbGljdCA9IDQwOTtcbiAgc3RhdGljIEludGVybmFsU2VydmVyRXJyb3IgPSA1MDA7XG59XG5cbmV4cG9ydCBjbGFzcyBVdGlscyB7XG4gIHB1YmxpYyBzdGF0aWMgZ2V0TW91c2VQb3NpdGlvbihldmVudCkge1xuICAgIGNvbnN0IG1vdXNlID0ge1xuICAgICAgeDogMCxcbiAgICAgIHk6IDBcbiAgICB9O1xuICAgIGNvbnN0IHdFdmVudDogRHJhZ0V2ZW50ID0gPERyYWdFdmVudD53aW5kb3cuZXZlbnQ7XG4gICAgY29uc3QgZXYgPSBldmVudCB8fCB3RXZlbnQ7IC8vTW96IHx8IElFXG4gICAgaWYgKGV2LnBhZ2VYIHx8IHdFdmVudC5wYWdlWCB8fCB3RXZlbnQuc2NyZWVuWCB8fCAoZXYudG91Y2hlcyAmJiBldi50b3VjaGVzWzBdICYmIGV2LnRvdWNoZXNbMF0ucGFnZVgpKSB7IC8vTW96XG4gICAgICBjb25zdCBwYWdlWCA9IHR5cGVvZiBldi5wYWdlWCAhPT0gXCJ1bmRlZmluZWRcIiAmJiBldi5wYWdlWCAhPT0gMCA/IGV2LnBhZ2VYIDogd0V2ZW50LnBhZ2VYO1xuICAgICAgY29uc3QgcGFnZVkgPSB0eXBlb2YgZXYucGFnZVkgIT09IFwidW5kZWZpbmVkXCIgJiYgZXYucGFnZVkgIT09IDAgPyBldi5wYWdlWSA6IHdFdmVudC5wYWdlWTtcbiAgICAgIGNvbnN0IHNjcmVlblggPSB0eXBlb2Ygd0V2ZW50LnNjcmVlblggIT09IFwidW5kZWZpbmVkXCIgJiYgd0V2ZW50LnNjcmVlblkgIT09IDA7XG4gICAgICBjb25zdCBzY3JlZW5ZID0gdHlwZW9mIHdFdmVudC5zY3JlZW5ZICE9PSBcInVuZGVmaW5lZFwiICYmIHdFdmVudC5zY3JlZW5ZICE9PSAwO1xuICAgICAgbW91c2UueCA9IHBhZ2VYID8gcGFnZVggOiAoc2NyZWVuWCA/IHdFdmVudC5zY3JlZW5YIDogZXYudG91Y2hlc1swXS5wYWdlWCk7XG4gICAgICBtb3VzZS55ID0gcGFnZVkgPyBwYWdlWSA6IChzY3JlZW5ZID8gd0V2ZW50LnNjcmVlblkgOiBldi50b3VjaGVzWzBdLnBhZ2VZKTtcbiAgICB9IGVsc2UgaWYgKGV2LmNsaWVudFgpIHsgLy9JRVxuICAgICAgbW91c2UueCA9IGV2LmNsaWVudFggKyBkb2N1bWVudC5ib2R5LnNjcm9sbExlZnQ7XG4gICAgICBtb3VzZS55ID0gZXYuY2xpZW50WSArIGRvY3VtZW50LmJvZHkuc2Nyb2xsVG9wO1xuICAgIH1cbiAgICByZXR1cm4gbW91c2U7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIEZpbGVVdGlsIHtcbiAgcHVibGljIHN0YXRpYyBtYXAgPSB7XG4gICAgJ2ZvbGRlcic6IHsnZm9ybWF0JzogJycsICdpY29uJzogJ2ZvbGRlcid9LFxuICAgICdwZGYnOiB7J2Zvcm1hdCc6ICdQb3J0YWJsZSBEb2N1bWVudCBGb3JtYXQnLCAnaWNvbic6ICdmaWxlLXBkZid9LFxuICAgICdkb2MnOiB7J2Zvcm1hdCc6ICdNaWNyb3NvZnQgV29yZCcsICdpY29uJzogJ2ZpbGUtd29yZCd9LFxuICAgICdkb2N4Jzogeydmb3JtYXQnOiAnTWljcm9zb2Z0IFdvcmQnLCAnaWNvbic6ICdmaWxlLXdvcmQnfSxcbiAgICAnZG9jbSc6IHsnZm9ybWF0JzogJ01pY3Jvc29mdCBXb3JkJywgJ2ljb24nOiAnZmlsZS13b3JkJ30sXG4gICAgJ2RvdCc6IHsnZm9ybWF0JzogJ01pY3Jvc29mdCBXb3JkJywgJ2ljb24nOiAnZmlsZS13b3JkJ30sXG4gICAgJ2RvdHgnOiB7J2Zvcm1hdCc6ICdNaWNyb3NvZnQgV29yZCcsICdpY29uJzogJ2ZpbGUtd29yZCd9LFxuICAgICdkb3RtJzogeydmb3JtYXQnOiAnTWljcm9zb2Z0IFdvcmQnLCAnaWNvbic6ICdmaWxlLXdvcmQnfSxcbiAgICAneGxzJzogeydmb3JtYXQnOiAnTWljcm9zb2Z0IEV4Y2VsJywgJ2ljb24nOiAnZmlsZS1leGNlbCd9LFxuICAgICd4bHN4Jzogeydmb3JtYXQnOiAnTWljcm9zb2Z0IEV4Y2VsJywgJ2ljb24nOiAnZmlsZS1leGNlbCd9LFxuICAgICd4bHNtJzogeydmb3JtYXQnOiAnTWljcm9zb2Z0IEV4Y2VsJywgJ2ljb24nOiAnZmlsZS1leGNlbCd9LFxuICAgICd4bHNiJzogeydmb3JtYXQnOiAnTWljcm9zb2Z0IEV4Y2VsJywgJ2ljb24nOiAnZmlsZS1leGNlbCd9LFxuICAgICd4bHMyMDAzJzogeydmb3JtYXQnOiAnTWljcm9zb2Z0IEV4Y2VsJywgJ2ljb24nOiAnZmlsZS1leGNlbCd9LFxuICAgICd4bHR4Jzogeydmb3JtYXQnOiAnTWljcm9zb2Z0IEV4Y2VsJywgJ2ljb24nOiAnZmlsZS1leGNlbCd9LFxuICAgICd4bHRtJzogeydmb3JtYXQnOiAnTWljcm9zb2Z0IEV4Y2VsJywgJ2ljb24nOiAnZmlsZS1leGNlbCd9LFxuICAgICdwcHQnOiB7J2Zvcm1hdCc6ICdNaWNyb3NvZnQgUG93ZXJQb2ludCcsICdpY29uJzogJ2ZpbGUtcG93ZXJwb2ludCd9LFxuICAgICdwcHR4Jzogeydmb3JtYXQnOiAnTWljcm9zb2Z0IFBvd2VyUG9pbnQnLCAnaWNvbic6ICdmaWxlLXBvd2VycG9pbnQnfSxcbiAgICAncHBzJzogeydmb3JtYXQnOiAnTWljcm9zb2Z0IFBvd2VyUG9pbnQnLCAnaWNvbic6ICdmaWxlLXBvd2VycG9pbnQnfSxcbiAgICAncHBzeCc6IHsnZm9ybWF0JzogJ01pY3Jvc29mdCBQb3dlclBvaW50JywgJ2ljb24nOiAnZmlsZS1wb3dlcnBvaW50J30sXG4gICAgJ3ZzZCc6IHsnZm9ybWF0JzogJ01pY3Jvc29mdCBWaXNpbycsICdpY29uJzogJ2ZpbGUtY29kZSd9LFxuICAgICd2ZHgnOiB7J2Zvcm1hdCc6ICdNaWNyb3NvZnQgVmlzaW8nLCAnaWNvbic6ICdmaWxlLWNvZGUnfSxcbiAgICAndnNzJzogeydmb3JtYXQnOiAnTWljcm9zb2Z0IFZpc2lvJywgJ2ljb24nOiAnZmlsZS1jb2RlJ30sXG4gICAgJ3ZzeCc6IHsnZm9ybWF0JzogJ01pY3Jvc29mdCBWaXNpbycsICdpY29uJzogJ2ZpbGUtY29kZSd9LFxuICAgICd2c3QnOiB7J2Zvcm1hdCc6ICdNaWNyb3NvZnQgVmlzaW8nLCAnaWNvbic6ICdmaWxlLWNvZGUnfSxcbiAgICAndnR4Jzogeydmb3JtYXQnOiAnTWljcm9zb2Z0IFZpc2lvJywgJ2ljb24nOiAnZmlsZS1jb2RlJ30sXG4gICAgJ3ZzZHgnOiB7J2Zvcm1hdCc6ICdNaWNyb3NvZnQgVmlzaW8nLCAnaWNvbic6ICdmaWxlLWNvZGUnfSxcbiAgICAndmR3Jzogeydmb3JtYXQnOiAnTWljcm9zb2Z0IFZpc2lvJywgJ2ljb24nOiAnZmlsZS1jb2RlJ30sXG4gICAgJ3ZzdHgnOiB7J2Zvcm1hdCc6ICdNaWNyb3NvZnQgVmlzaW8nLCAnaWNvbic6ICdmaWxlLWNvZGUnfSxcbiAgICAndnNzeCc6IHsnZm9ybWF0JzogJ01pY3Jvc29mdCBWaXNpbycsICdpY29uJzogJ2ZpbGUtY29kZSd9LFxuICAgICdtcHAnOiB7J2Zvcm1hdCc6ICdNaWNyb3NvZnQgUHJvamVjdCcsICdpY29uJzogJ2ZpbGUtYWx0J30sXG4gICAgJ21wdCc6IHsnZm9ybWF0JzogJ01pY3Jvc29mdCBQcm9qZWN0JywgJ2ljb24nOiAnZmlsZS1hbHQnfSxcbiAgICAnbXNnJzogeydmb3JtYXQnOiAnTWljcm9zb2Z0IE91dGxvb2snLCAnaWNvbic6ICdmaWxlLWFsdCd9LFxuICAgICdlbWwnOiB7J2Zvcm1hdCc6ICdNaWNyb3NvZnQgT3V0bG9vaycsICdpY29uJzogJ2ZpbGUtYWx0J30sXG4gICAgJ2VtbHgnOiB7J2Zvcm1hdCc6ICdNaWNyb3NvZnQgT3V0bG9vaycsICdpY29uJzogJ2ZpbGUtYWx0J30sXG4gICAgJ29uZSc6IHsnZm9ybWF0JzogJ01pY3Jvc29mdCBPbmVOb3RlJywgJ2ljb24nOiAnZmlsZS13b3JkJ30sXG4gICAgJ29kdCc6IHsnZm9ybWF0JzogJ09wZW4gRG9jdW1lbnQgVGV4dCcsICdpY29uJzogJ2ZpbGUtd29yZCd9LFxuICAgICdvdHQnOiB7J2Zvcm1hdCc6ICdPcGVuIERvY3VtZW50IFRleHQgVGVtcGxhdGUnLCAnaWNvbic6ICdmaWxlLXdvcmQnfSxcbiAgICAnb2RzJzogeydmb3JtYXQnOiAnT3BlbiBEb2N1bWVudCBTcHJlYWRzaGVldCcsICdpY29uJzogJ2ZpbGUtZXhjZWwnfSxcbiAgICAnb2RwJzogeydmb3JtYXQnOiAnT3BlbiBEb2N1bWVudCBQcmVzZW50YXRpb24nLCAnaWNvbic6ICdmaWxlLXBvd2VycG9pbnQnfSxcbiAgICAnb3RwJzogeydmb3JtYXQnOiAnT3BlbiBEb2N1bWVudCBQcmVzZW50YXRpb24nLCAnaWNvbic6ICdmaWxlLXBvd2VycG9pbnQnfSxcbiAgICAnb3RzJzogeydmb3JtYXQnOiAnT3BlbiBEb2N1bWVudCBQcmVzZW50YXRpb24nLCAnaWNvbic6ICdmaWxlLXBvd2VycG9pbnQnfSxcbiAgICAncG90eCc6IHsnZm9ybWF0JzogJ09wZW4gRG9jdW1lbnQgUHJlc2VudGF0aW9uJywgJ2ljb24nOiAnZmlsZS1wb3dlcnBvaW50J30sXG4gICAgJ3BvdG0nOiB7J2Zvcm1hdCc6ICdPcGVuIERvY3VtZW50IFByZXNlbnRhdGlvbicsICdpY29uJzogJ2ZpbGUtcG93ZXJwb2ludCd9LFxuICAgICdwcHRtJzogeydmb3JtYXQnOiAnT3BlbiBEb2N1bWVudCBQcmVzZW50YXRpb24nLCAnaWNvbic6ICdmaWxlLXBvd2VycG9pbnQnfSxcbiAgICAncHBzbSc6IHsnZm9ybWF0JzogJ09wZW4gRG9jdW1lbnQgUHJlc2VudGF0aW9uJywgJ2ljb24nOiAnZmlsZS1wb3dlcnBvaW50J30sXG4gICAgJ3J0Zic6IHsnZm9ybWF0JzogJ1JpY2ggVGV4dCBGb3JtYXQnLCAnaWNvbic6ICdmaWxlLWFsdCd9LFxuICAgICd0eHQnOiB7J2Zvcm1hdCc6ICdQbGFpbiBUZXh0IEZpbGUnLCAnaWNvbic6ICdmaWxlLWFsdCd9LFxuICAgICdjc3YnOiB7J2Zvcm1hdCc6ICdDb21tYS1TZXBhcmF0ZWQgVmFsdWVzJywgJ2ljb24nOiAnZmlsZS1leGNlbCd9LFxuICAgICdodG1sJzogeydmb3JtYXQnOiAnSHlwZXJUZXh0IE1hcmt1cCBMYW5ndWFnZScsICdpY29uJzogJ2ZpbGUtd29yZCd9LFxuICAgICdtaHQnOiB7J2Zvcm1hdCc6ICdIeXBlclRleHQgTWFya3VwIExhbmd1YWdlJywgJ2ljb24nOiAnZmlsZS13b3JkJ30sXG4gICAgJ21odG1sJzogeydmb3JtYXQnOiAnSHlwZXJUZXh0IE1hcmt1cCBMYW5ndWFnZScsICdpY29uJzogJ2ZpbGUtd29yZCd9LFxuICAgICd4bWwnOiB7J2Zvcm1hdCc6ICdFeHRlbnNpYmxlIE1hcmt1cCBMYW5ndWFnZScsICdpY29uJzogJ2ZpbGUtd29yZCd9LFxuICAgICd4cHMnOiB7J2Zvcm1hdCc6ICdYTUwgUGFwZXIgU3BlY2lmaWNhdGlvbicsICdpY29uJzogJ2ZpbGUtd29yZCd9LFxuICAgICdkeGYnOiB7J2Zvcm1hdCc6ICdBdXRvQ0FEIERyYXdpbmcgRmlsZSBGb3JtYXQnLCAnaWNvbic6ICdmaWxlLWltYWdlJ30sXG4gICAgJ2R3Zyc6IHsnZm9ybWF0JzogJ0F1dG9DQUQgRHJhd2luZyBGaWxlIEZvcm1hdCcsICdpY29uJzogJ2ZpbGUtaW1hZ2UnfSxcbiAgICAnYm1wJzogeydmb3JtYXQnOiAnQml0bWFwIFBpY3R1cmUnLCAnaWNvbic6ICdmaWxlLWltYWdlJ30sXG4gICAgJ2dpZic6IHsnZm9ybWF0JzogJ0dyYXBoaWNzIEludGVyY2hhbmdlIEZvcm1hdCcsICdpY29uJzogJ2ZpbGUtaW1hZ2UnfSxcbiAgICAnanBnJzogeydmb3JtYXQnOiAnSm9pbnQgUGhvdG9ncmFwaGljIEV4cGVydHMgR3JvdXAnLCAnaWNvbic6ICdmaWxlLWltYWdlJ30sXG4gICAgJ2pwZSc6IHsnZm9ybWF0JzogJ0pvaW50IFBob3RvZ3JhcGhpYyBFeHBlcnRzIEdyb3VwJywgJ2ljb24nOiAnZmlsZS1pbWFnZSd9LFxuICAgICdqcGVnJzogeydmb3JtYXQnOiAnSm9pbnQgUGhvdG9ncmFwaGljIEV4cGVydHMgR3JvdXAnLCAnaWNvbic6ICdmaWxlLWltYWdlJ30sXG4gICAgJ2pmaWYnOiB7J2Zvcm1hdCc6ICdKb2ludCBQaG90b2dyYXBoaWMgRXhwZXJ0cyBHcm91cCcsICdpY29uJzogJ2ZpbGUtaW1hZ2UnfSxcbiAgICAncG5nJzogeydmb3JtYXQnOiAnUG9ydGFibGUgTmV0d29yayBHcmFwaGljcycsICdpY29uJzogJ2ZpbGUtaW1hZ2UnfSxcbiAgICAndGlmZic6IHsnZm9ybWF0JzogJ1RhZ2dlZCBJbWFnZSBGaWxlIEZvcm1hdCcsICdpY29uJzogJ2ZpbGUtaW1hZ2UnfSxcbiAgICAndGlmJzogeydmb3JtYXQnOiAnVGFnZ2VkIEltYWdlIEZpbGUgRm9ybWF0JywgJ2ljb24nOiAnZmlsZS1pbWFnZSd9LFxuICAgICdwc2QnOiB7J2Zvcm1hdCc6ICdUYWdnZWQgSW1hZ2UgRmlsZSBGb3JtYXQnLCAnaWNvbic6ICdmaWxlLWltYWdlJ30sXG4gICAgJ3N2Zyc6IHsnZm9ybWF0JzogJ1RhZ2dlZCBJbWFnZSBGaWxlIEZvcm1hdCcsICdpY29uJzogJ2ZpbGUtaW1hZ2UnfSxcbiAgICAnanAyJzogeydmb3JtYXQnOiAnVGFnZ2VkIEltYWdlIEZpbGUgRm9ybWF0JywgJ2ljb24nOiAnZmlsZS1pbWFnZSd9LFxuICAgICdlcHViJzogeydmb3JtYXQnOiAnRWxlY3Ryb25pYyBQdWJsaWNhdGlvbicsICdpY29uJzogJ2ZpbGUtcGRmJ30sXG4gICAgJ2ljbyc6IHsnZm9ybWF0JzogJ1dpbmRvd3MgSWNvbicsICdpY29uJzogJ2ZpbGUtaW1hZ2UnfSxcbiAgICAnd2VicCc6IHsnZm9ybWF0JzogJ0NvbXByZXNzZWQgSW1hZ2UnLCAnaWNvbic6ICdmaWxlLWltYWdlJ30sXG4gICAgJ21vYmknOiB7J2Zvcm1hdCc6ICdNb2JpcG9ja2V0IGVCb29rJywgJ2ljb24nOiAnZmlsZS1wZGYnfSxcbiAgICAndGV4Jzogeydmb3JtYXQnOiAnTGFUZVggU291cmNlIERvY3VtZW50JywgJ2ljb24nOiAnZmlsZS1wZGYnfSxcbiAgICAnZGp2dSc6IHsnZm9ybWF0JzogJ011bHRpLUxheWVyIFJhc3RlciBJbWFnZScsICdpY29uJzogJ2ZpbGUtYWx0J30sXG4gICAgJ3Vua25vd24nOiB7J2Zvcm1hdCc6ICdUaGlzIGZvcm1hdCBpcyBub3Qgc3VwcG9ydGVkJywgJ2ljb24nOiAnZmlsZSd9LFxuICB9O1xuXG4gIHB1YmxpYyBzdGF0aWMgZmluZChmaWxlbmFtZTogc3RyaW5nLCBpc0RpcmVjdG9yeTogYm9vbGVhbikge1xuICAgIGlmIChmaWxlbmFtZSAmJiAhaXNEaXJlY3RvcnkpIHtcbiAgICAgIGNvbnN0IHN0cmluZ3MgPSBmaWxlbmFtZS5zcGxpdCgnLicpO1xuICAgICAgY29uc3QgbmFtZSA9IHN0cmluZ3MucG9wKCkudG9Mb3dlckNhc2UoKTtcbiAgICAgIGlmICh0eXBlb2YgRmlsZVV0aWwubWFwW25hbWVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIHJldHVybiBzdHJpbmdzLmxlbmd0aCA+IDAgPyBGaWxlVXRpbC5tYXBbJ3Vua25vd24nXSA6IEZpbGVVdGlsLm1hcFsnZm9sZGVyJ107XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gRmlsZVV0aWwubWFwW25hbWVdO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gRmlsZVV0aWwubWFwWydmb2xkZXInXTtcbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIEZpbGVTZXJ2aWNlIHtcblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgfVxufVxuIl19