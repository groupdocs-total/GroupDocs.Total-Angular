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
        if (ev.pageX || wEvent.screenX || (ev.touches && ev.touches[0] && ev.touches[0].pageX)) { //Moz
            //Moz
            /** @type {?} */
            var pageX = typeof ev.pageX !== "undefined" && ev.pageX !== 0;
            /** @type {?} */
            var pageY = typeof ev.pageY !== "undefined" && ev.pageY !== 0;
            /** @type {?} */
            var screenX_1 = typeof wEvent.screenX !== "undefined" && wEvent.screenY !== 0;
            /** @type {?} */
            var screenY_1 = typeof wEvent.screenY !== "undefined" && wEvent.screenY !== 0;
            mouse.x = pageX ? ev.pageX : (screenX_1 ? wEvent.screenX : ev.touches[0].pageX);
            mouse.y = pageY ? ev.pageY : (screenY_1 ? wEvent.screenY : ev.touches[0].pageY);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmlsZS5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdyb3VwZG9jcy5leGFtcGxlcy5hbmd1bGFyL2NvbW1vbi1jb21wb25lbnRzLyIsInNvdXJjZXMiOlsibGliL2ZpbGUuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBO0lBQUE7SUFPQSxDQUFDO0lBQUQsZ0JBQUM7QUFBRCxDQUFDLEFBUEQsSUFPQzs7OztJQU5DLHlCQUFhOztJQUNiLDBCQUFjOztJQUNkLDBCQUFjOztJQUNkLDJCQUFlOztJQUNmLDJCQUFlOztJQUNmLDZCQUFrQjs7QUFHcEI7SUFBQTtJQUdBLENBQUM7SUFBRCxrQkFBQztBQUFELENBQUMsQUFIRCxJQUdDOzs7O0lBRkMsaUNBQW1COztJQUNuQiw0QkFBYzs7QUFHaEI7SUFJRSx5QkFBWSxJQUFZLEVBQUUsUUFBZ0I7UUFDeEMsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7UUFDakIsSUFBSSxDQUFDLFFBQVEsR0FBRyxRQUFRLENBQUM7SUFDM0IsQ0FBQztJQUNILHNCQUFDO0FBQUQsQ0FBQyxBQVJELElBUUM7Ozs7SUFQQywrQkFBYTs7SUFDYixtQ0FBaUI7O0FBUW5CO0lBQThCLG9DQUFlO0lBRzNDLGtCQUFZLElBQVksRUFBRSxRQUFnQixFQUFFLE9BQWU7UUFBM0QsWUFDRSxrQkFBTSxJQUFJLEVBQUUsUUFBUSxDQUFDLFNBRXRCO1FBREMsS0FBSSxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUM7O0lBQ3pCLENBQUM7SUFDSCxlQUFDO0FBQUQsQ0FBQyxBQVBELENBQThCLGVBQWUsR0FPNUM7Ozs7SUFOQywyQkFBZ0I7O0FBUWxCO0lBQUE7UUFHRSxpQkFBWSxHQUFHLElBQUksQ0FBQztJQUN0QixDQUFDO0lBQUQsc0JBQUM7QUFBRCxDQUFDLEFBSkQsSUFJQzs7OztJQUhDLCtCQUFhOztJQUNiLGdDQUFtQjs7SUFDbkIsdUNBQW9COztBQUd0QjtJQUFBO0lBS0EsQ0FBQztJQUFE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V0FBVyxFQUFDO1FBQ3pELEtBQUssRUFBRSxFQUFDLFFBQVEsRUFBRSxpQkFBaUIsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFDO1FBQ3pELE1BQU0sRUFBRSxFQUFDLFFBQVEsRUFBRSxpQkFBaUIsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFDO1FBQzFELEtBQUssRUFBRSxFQUFDLFFBQVEsRUFBRSxpQkFBaUIsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFDO1FBQ3pELE1BQU0sRUFBRSxFQUFDLFFBQVEsRUFBRSxpQkFBaUIsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFDO1FBQzFELE1BQU0sRUFBRSxFQUFDLFFBQVEsRUFBRSxpQkFBaUIsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFDO1FBQzFELEtBQUssRUFBRSxFQUFDLFFBQVEsRUFBRSxtQkFBbUIsRUFBRSxNQUFNLEVBQUUsVUFBVSxFQUFDO1FBQzFELEtBQUssRUFBRSxFQUFDLFFBQVEsRUFBRSxtQkFBbUIsRUFBRSxNQUFNLEVBQUUsVUFBVSxFQUFDO1FBQzFELEtBQUssRUFBRSxFQUFDLFFBQVEsRUFBRSxtQkFBbUIsRUFBRSxNQUFNLEVBQUUsVUFBVSxFQUFDO1FBQzFELEtBQUssRUFBRSxFQUFDLFFBQVEsRUFBRSxtQkFBbUIsRUFBRSxNQUFNLEVBQUUsVUFBVSxFQUFDO1FBQzFELE1BQU0sRUFBRSxFQUFDLFFBQVEsRUFBRSxtQkFBbUIsRUFBRSxNQUFNLEVBQUUsVUFBVSxFQUFDO1FBQzNELEtBQUssRUFBRSxFQUFDLFFBQVEsRUFBRSxtQkFBbUIsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFDO1FBQzNELEtBQUssRUFBRSxFQUFDLFFBQVEsRUFBRSxvQkFBb0IsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFDO1FBQzVELEtBQUssRUFBRSxFQUFDLFFBQVEsRUFBRSw2QkFBNkIsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFDO1FBQ3JFLEtBQUssRUFBRSxFQUFDLFFBQVEsRUFBRSwyQkFBMkIsRUFBRSxNQUFNLEVBQUUsWUFBWSxFQUFDO1FBQ3BFLEtBQUssRUFBRSxFQUFDLFFBQVEsRUFBRSw0QkFBNEIsRUFBRSxNQUFNLEVBQUUsaUJBQWlCLEVBQUM7UUFDMUUsS0FBSyxFQUFFLEVBQUMsUUFBUSxFQUFFLDRCQUE0QixFQUFFLE1BQU0sRUFBRSxpQkFBaUIsRUFBQztRQUMxRSxLQUFLLEVBQUUsRUFBQyxRQUFRLEVBQUUsNEJBQTRCLEVBQUUsTUFBTSxFQUFFLGlCQUFpQixFQUFDO1FBQzFFLEtBQUssRUFBRSxFQUFDLFFBQVEsRUFBRSxrQkFBa0IsRUFBRSxNQUFNLEVBQUUsVUFBVSxFQUFDO1FBQ3pELEtBQUssRUFBRSxFQUFDLFFBQVEsRUFBRSxpQkFBaUIsRUFBRSxNQUFNLEVBQUUsVUFBVSxFQUFDO1FBQ3hELEtBQUssRUFBRSxFQUFDLFFBQVEsRUFBRSx3QkFBd0IsRUFBRSxNQUFNLEVBQUUsWUFBWSxFQUFDO1FBQ2pFLE1BQU0sRUFBRSxFQUFDLFFBQVEsRUFBRSwyQkFBMkIsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFDO1FBQ3BFLEtBQUssRUFBRSxFQUFDLFFBQVEsRUFBRSwyQkFBMkIsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFDO1FBQ25FLE9BQU8sRUFBRSxFQUFDLFFBQVEsRUFBRSwyQkFBMkIsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFDO1FBQ3JFLEtBQUssRUFBRSxFQUFDLFFBQVEsRUFBRSw0QkFBNEIsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFDO1FBQ3BFLEtBQUssRUFBRSxFQUFDLFFBQVEsRUFBRSx5QkFBeUIsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFDO1FBQ2pFLEtBQUssRUFBRSxFQUFDLFFBQVEsRUFBRSw2QkFBNkIsRUFBRSxNQUFNLEVBQUUsWUFBWSxFQUFDO1FBQ3RFLEtBQUssRUFBRSxFQUFDLFFBQVEsRUFBRSw2QkFBNkIsRUFBRSxNQUFNLEVBQUUsWUFBWSxFQUFDO1FBQ3RFLEtBQUssRUFBRSxFQUFDLFFBQVEsRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLEVBQUUsWUFBWSxFQUFDO1FBQ3pELEtBQUssRUFBRSxFQUFDLFFBQVEsRUFBRSw2QkFBNkIsRUFBRSxNQUFNLEVBQUUsWUFBWSxFQUFDO1FBQ3RFLEtBQUssRUFBRSxFQUFDLFFBQVEsRUFBRSxrQ0FBa0MsRUFBRSxNQUFNLEVBQUUsWUFBWSxFQUFDO1FBQzNFLEtBQUssRUFBRSxFQUFDLFFBQVEsRUFBRSxrQ0FBa0MsRUFBRSxNQUFNLEVBQUUsWUFBWSxFQUFDO1FBQzNFLE1BQU0sRUFBRSxFQUFDLFFBQVEsRUFBRSxrQ0FBa0MsRUFBRSxNQUFNLEVBQUUsWUFBWSxFQUFDO1FBQzVFLE1BQU0sRUFBRSxFQUFDLFFBQVEsRUFBRSxrQ0FBa0MsRUFBRSxNQUFNLEVBQUUsWUFBWSxFQUFDO1FBQzVFLEtBQUssRUFBRSxFQUFDLFFBQVEsRUFBRSwyQkFBMkIsRUFBRSxNQUFNLEVBQUUsWUFBWSxFQUFDO1FBQ3BFLE1BQU0sRUFBRSxFQUFDLFFBQVEsRUFBRSwwQkFBMEIsRUFBRSxNQUFNLEVBQUUsWUFBWSxFQUFDO1FBQ3BFLEtBQUssRUFBRSxFQUFDLFFBQVEsRUFBRSwwQkFBMEIsRUFBRSxNQUFNLEVBQUUsWUFBWSxFQUFDO1FBQ25FLE1BQU0sRUFBRSxFQUFDLFFBQVEsRUFBRSx3QkFBd0IsRUFBRSxNQUFNLEVBQUUsVUFBVSxFQUFDO1FBQ2hFLEtBQUssRUFBRSxFQUFDLFFBQVEsRUFBRSxjQUFjLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBQztRQUN2RCxNQUFNLEVBQUUsRUFBQyxRQUFRLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBQztRQUM1RCxNQUFNLEVBQUUsRUFBQyxRQUFRLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxFQUFFLFVBQVUsRUFBQztRQUMxRCxLQUFLLEVBQUUsRUFBQyxRQUFRLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSxFQUFFLFVBQVUsRUFBQztRQUM5RCxNQUFNLEVBQUUsRUFBQyxRQUFRLEVBQUUsMEJBQTBCLEVBQUUsTUFBTSxFQUFFLFVBQVUsRUFBQztRQUNsRSxTQUFTLEVBQUUsRUFBQyxRQUFRLEVBQUUsOEJBQThCLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBQztLQUN0RSxDQUFDO0lBZUosZUFBQztDQUFBLEFBakZELElBaUZDO1NBakZZLFFBQVE7OztJQUNuQixhQWlFRTs7QUFpQko7SUFFRTtJQUNBLENBQUM7SUFDSCxrQkFBQztBQUFELENBQUMsQUFKRCxJQUlDIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNsYXNzIFBhZ2VNb2RlbCB7XG4gIGRhdGE6IHN0cmluZztcbiAgYW5nbGU6IG51bWJlcjtcbiAgd2lkdGg6IG51bWJlcjtcbiAgaGVpZ2h0OiBudW1iZXI7XG4gIG51bWJlcjogbnVtYmVyO1xuICBlZGl0YWJsZTogYm9vbGVhbjtcbn1cblxuZXhwb3J0IGNsYXNzIFJvdGF0ZWRQYWdlIHtcbiAgcGFnZU51bWJlcjogbnVtYmVyO1xuICBhbmdsZTogbnVtYmVyO1xufVxuXG5leHBvcnQgY2xhc3MgRmlsZUNyZWRlbnRpYWxzIHtcbiAgZ3VpZDogc3RyaW5nO1xuICBwYXNzd29yZDogc3RyaW5nO1xuXG4gIGNvbnN0cnVjdG9yKGd1aWQ6IHN0cmluZywgcGFzc3dvcmQ6IHN0cmluZykge1xuICAgIHRoaXMuZ3VpZCA9IGd1aWQ7XG4gICAgdGhpcy5wYXNzd29yZCA9IHBhc3N3b3JkO1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBTYXZlRmlsZSBleHRlbmRzIEZpbGVDcmVkZW50aWFscyB7XG4gIGNvbnRlbnQ6IHN0cmluZztcblxuICBjb25zdHJ1Y3RvcihndWlkOiBzdHJpbmcsIHBhc3N3b3JkOiBzdHJpbmcsIGNvbnRlbnQ6IHN0cmluZykge1xuICAgIHN1cGVyKGd1aWQsIHBhc3N3b3JkKTtcbiAgICB0aGlzLmNvbnRlbnQgPSBjb250ZW50O1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBGaWxlRGVzY3JpcHRpb24ge1xuICBndWlkOiBzdHJpbmc7XG4gIHBhZ2VzOiBQYWdlTW9kZWxbXTtcbiAgcHJpbnRBbGxvd2VkID0gdHJ1ZTtcbn1cblxuZXhwb3J0IGNsYXNzIEZpbGVNb2RlbCB7XG4gIGd1aWQ6IHN0cmluZztcbiAgbmFtZTogc3RyaW5nO1xuICBkaXJlY3Rvcnk6IGJvb2xlYW47XG4gIHNpemU6IG51bWJlcjtcbn1cblxuZXhwb3J0IGNsYXNzIEh0dHBFcnJvciB7XG4gIHN0YXRpYyBCYWRSZXF1ZXN0ID0gNDAwO1xuICBzdGF0aWMgVW5hdXRob3JpemVkID0gNDAxO1xuICBzdGF0aWMgRm9yYmlkZGVuID0gNDAzO1xuICBzdGF0aWMgTm90Rm91bmQgPSA0MDQ7XG4gIHN0YXRpYyBUaW1lT3V0ID0gNDA4O1xuICBzdGF0aWMgQ29uZmxpY3QgPSA0MDk7XG4gIHN0YXRpYyBJbnRlcm5hbFNlcnZlckVycm9yID0gNTAwO1xufVxuXG5leHBvcnQgY2xhc3MgVXRpbHMge1xuICBwdWJsaWMgc3RhdGljIGdldE1vdXNlUG9zaXRpb24oZXZlbnQpIHtcbiAgICBjb25zdCBtb3VzZSA9IHtcbiAgICAgIHg6IDAsXG4gICAgICB5OiAwXG4gICAgfTtcbiAgICBjb25zdCB3RXZlbnQ6IERyYWdFdmVudCA9IDxEcmFnRXZlbnQ+d2luZG93LmV2ZW50O1xuICAgIGNvbnN0IGV2ID0gZXZlbnQgfHwgd0V2ZW50OyAvL01veiB8fCBJRVxuICAgIGlmIChldi5wYWdlWCB8fCB3RXZlbnQuc2NyZWVuWCB8fCAoZXYudG91Y2hlcyAmJiBldi50b3VjaGVzWzBdICYmIGV2LnRvdWNoZXNbMF0ucGFnZVgpKSB7IC8vTW96XG4gICAgICBjb25zdCBwYWdlWCA9IHR5cGVvZiBldi5wYWdlWCAhPT0gXCJ1bmRlZmluZWRcIiAmJiBldi5wYWdlWCAhPT0gMDtcbiAgICAgIGNvbnN0IHBhZ2VZID0gdHlwZW9mIGV2LnBhZ2VZICE9PSBcInVuZGVmaW5lZFwiICYmIGV2LnBhZ2VZICE9PSAwO1xuICAgICAgY29uc3Qgc2NyZWVuWCA9IHR5cGVvZiB3RXZlbnQuc2NyZWVuWCAhPT0gXCJ1bmRlZmluZWRcIiAmJiB3RXZlbnQuc2NyZWVuWSAhPT0gMDtcbiAgICAgIGNvbnN0IHNjcmVlblkgPSB0eXBlb2Ygd0V2ZW50LnNjcmVlblkgIT09IFwidW5kZWZpbmVkXCIgJiYgd0V2ZW50LnNjcmVlblkgIT09IDA7XG4gICAgICBtb3VzZS54ID0gcGFnZVggPyBldi5wYWdlWCA6IChzY3JlZW5YID8gd0V2ZW50LnNjcmVlblggOiBldi50b3VjaGVzWzBdLnBhZ2VYKTtcbiAgICAgIG1vdXNlLnkgPSBwYWdlWSA/IGV2LnBhZ2VZIDogKHNjcmVlblkgPyB3RXZlbnQuc2NyZWVuWSA6IGV2LnRvdWNoZXNbMF0ucGFnZVkpO1xuICAgIH0gZWxzZSBpZiAoZXYuY2xpZW50WCkgeyAvL0lFXG4gICAgICBtb3VzZS54ID0gZXYuY2xpZW50WCArIGRvY3VtZW50LmJvZHkuc2Nyb2xsTGVmdDtcbiAgICAgIG1vdXNlLnkgPSBldi5jbGllbnRZICsgZG9jdW1lbnQuYm9keS5zY3JvbGxUb3A7XG4gICAgfVxuICAgIHJldHVybiBtb3VzZTtcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgRmlsZVV0aWwge1xuICBwdWJsaWMgc3RhdGljIG1hcCA9IHtcbiAgICAnZm9sZGVyJzogeydmb3JtYXQnOiAnJywgJ2ljb24nOiAnZm9sZGVyJ30sXG4gICAgJ3BkZic6IHsnZm9ybWF0JzogJ1BvcnRhYmxlIERvY3VtZW50IEZvcm1hdCcsICdpY29uJzogJ2ZpbGUtcGRmJ30sXG4gICAgJ2RvYyc6IHsnZm9ybWF0JzogJ01pY3Jvc29mdCBXb3JkJywgJ2ljb24nOiAnZmlsZS13b3JkJ30sXG4gICAgJ2RvY3gnOiB7J2Zvcm1hdCc6ICdNaWNyb3NvZnQgV29yZCcsICdpY29uJzogJ2ZpbGUtd29yZCd9LFxuICAgICdkb2NtJzogeydmb3JtYXQnOiAnTWljcm9zb2Z0IFdvcmQnLCAnaWNvbic6ICdmaWxlLXdvcmQnfSxcbiAgICAnZG90Jzogeydmb3JtYXQnOiAnTWljcm9zb2Z0IFdvcmQnLCAnaWNvbic6ICdmaWxlLXdvcmQnfSxcbiAgICAnZG90eCc6IHsnZm9ybWF0JzogJ01pY3Jvc29mdCBXb3JkJywgJ2ljb24nOiAnZmlsZS13b3JkJ30sXG4gICAgJ2RvdG0nOiB7J2Zvcm1hdCc6ICdNaWNyb3NvZnQgV29yZCcsICdpY29uJzogJ2ZpbGUtd29yZCd9LFxuICAgICd4bHMnOiB7J2Zvcm1hdCc6ICdNaWNyb3NvZnQgRXhjZWwnLCAnaWNvbic6ICdmaWxlLWV4Y2VsJ30sXG4gICAgJ3hsc3gnOiB7J2Zvcm1hdCc6ICdNaWNyb3NvZnQgRXhjZWwnLCAnaWNvbic6ICdmaWxlLWV4Y2VsJ30sXG4gICAgJ3hsc20nOiB7J2Zvcm1hdCc6ICdNaWNyb3NvZnQgRXhjZWwnLCAnaWNvbic6ICdmaWxlLWV4Y2VsJ30sXG4gICAgJ3hsc2InOiB7J2Zvcm1hdCc6ICdNaWNyb3NvZnQgRXhjZWwnLCAnaWNvbic6ICdmaWxlLWV4Y2VsJ30sXG4gICAgJ3BwdCc6IHsnZm9ybWF0JzogJ01pY3Jvc29mdCBQb3dlclBvaW50JywgJ2ljb24nOiAnZmlsZS1wb3dlcnBvaW50J30sXG4gICAgJ3BwdHgnOiB7J2Zvcm1hdCc6ICdNaWNyb3NvZnQgUG93ZXJQb2ludCcsICdpY29uJzogJ2ZpbGUtcG93ZXJwb2ludCd9LFxuICAgICdwcHMnOiB7J2Zvcm1hdCc6ICdNaWNyb3NvZnQgUG93ZXJQb2ludCcsICdpY29uJzogJ2ZpbGUtcG93ZXJwb2ludCd9LFxuICAgICdwcHN4Jzogeydmb3JtYXQnOiAnTWljcm9zb2Z0IFBvd2VyUG9pbnQnLCAnaWNvbic6ICdmaWxlLXBvd2VycG9pbnQnfSxcbiAgICAndnNkJzogeydmb3JtYXQnOiAnTWljcm9zb2Z0IFZpc2lvJywgJ2ljb24nOiAnZmlsZS1jb2RlJ30sXG4gICAgJ3ZkeCc6IHsnZm9ybWF0JzogJ01pY3Jvc29mdCBWaXNpbycsICdpY29uJzogJ2ZpbGUtY29kZSd9LFxuICAgICd2c3MnOiB7J2Zvcm1hdCc6ICdNaWNyb3NvZnQgVmlzaW8nLCAnaWNvbic6ICdmaWxlLWNvZGUnfSxcbiAgICAndnN4Jzogeydmb3JtYXQnOiAnTWljcm9zb2Z0IFZpc2lvJywgJ2ljb24nOiAnZmlsZS1jb2RlJ30sXG4gICAgJ3ZzdCc6IHsnZm9ybWF0JzogJ01pY3Jvc29mdCBWaXNpbycsICdpY29uJzogJ2ZpbGUtY29kZSd9LFxuICAgICd2dHgnOiB7J2Zvcm1hdCc6ICdNaWNyb3NvZnQgVmlzaW8nLCAnaWNvbic6ICdmaWxlLWNvZGUnfSxcbiAgICAndnNkeCc6IHsnZm9ybWF0JzogJ01pY3Jvc29mdCBWaXNpbycsICdpY29uJzogJ2ZpbGUtY29kZSd9LFxuICAgICd2ZHcnOiB7J2Zvcm1hdCc6ICdNaWNyb3NvZnQgVmlzaW8nLCAnaWNvbic6ICdmaWxlLWNvZGUnfSxcbiAgICAndnN0eCc6IHsnZm9ybWF0JzogJ01pY3Jvc29mdCBWaXNpbycsICdpY29uJzogJ2ZpbGUtY29kZSd9LFxuICAgICd2c3N4Jzogeydmb3JtYXQnOiAnTWljcm9zb2Z0IFZpc2lvJywgJ2ljb24nOiAnZmlsZS1jb2RlJ30sXG4gICAgJ21wcCc6IHsnZm9ybWF0JzogJ01pY3Jvc29mdCBQcm9qZWN0JywgJ2ljb24nOiAnZmlsZS1hbHQnfSxcbiAgICAnbXB0Jzogeydmb3JtYXQnOiAnTWljcm9zb2Z0IFByb2plY3QnLCAnaWNvbic6ICdmaWxlLWFsdCd9LFxuICAgICdtc2cnOiB7J2Zvcm1hdCc6ICdNaWNyb3NvZnQgT3V0bG9vaycsICdpY29uJzogJ2ZpbGUtYWx0J30sXG4gICAgJ2VtbCc6IHsnZm9ybWF0JzogJ01pY3Jvc29mdCBPdXRsb29rJywgJ2ljb24nOiAnZmlsZS1hbHQnfSxcbiAgICAnZW1seCc6IHsnZm9ybWF0JzogJ01pY3Jvc29mdCBPdXRsb29rJywgJ2ljb24nOiAnZmlsZS1hbHQnfSxcbiAgICAnb25lJzogeydmb3JtYXQnOiAnTWljcm9zb2Z0IE9uZU5vdGUnLCAnaWNvbic6ICdmaWxlLXdvcmQnfSxcbiAgICAnb2R0Jzogeydmb3JtYXQnOiAnT3BlbiBEb2N1bWVudCBUZXh0JywgJ2ljb24nOiAnZmlsZS13b3JkJ30sXG4gICAgJ290dCc6IHsnZm9ybWF0JzogJ09wZW4gRG9jdW1lbnQgVGV4dCBUZW1wbGF0ZScsICdpY29uJzogJ2ZpbGUtd29yZCd9LFxuICAgICdvZHMnOiB7J2Zvcm1hdCc6ICdPcGVuIERvY3VtZW50IFNwcmVhZHNoZWV0JywgJ2ljb24nOiAnZmlsZS1leGNlbCd9LFxuICAgICdvZHAnOiB7J2Zvcm1hdCc6ICdPcGVuIERvY3VtZW50IFByZXNlbnRhdGlvbicsICdpY29uJzogJ2ZpbGUtcG93ZXJwb2ludCd9LFxuICAgICdvdHAnOiB7J2Zvcm1hdCc6ICdPcGVuIERvY3VtZW50IFByZXNlbnRhdGlvbicsICdpY29uJzogJ2ZpbGUtcG93ZXJwb2ludCd9LFxuICAgICdvdHMnOiB7J2Zvcm1hdCc6ICdPcGVuIERvY3VtZW50IFByZXNlbnRhdGlvbicsICdpY29uJzogJ2ZpbGUtcG93ZXJwb2ludCd9LFxuICAgICdydGYnOiB7J2Zvcm1hdCc6ICdSaWNoIFRleHQgRm9ybWF0JywgJ2ljb24nOiAnZmlsZS1hbHQnfSxcbiAgICAndHh0Jzogeydmb3JtYXQnOiAnUGxhaW4gVGV4dCBGaWxlJywgJ2ljb24nOiAnZmlsZS1hbHQnfSxcbiAgICAnY3N2Jzogeydmb3JtYXQnOiAnQ29tbWEtU2VwYXJhdGVkIFZhbHVlcycsICdpY29uJzogJ2ZpbGUtZXhjZWwnfSxcbiAgICAnaHRtbCc6IHsnZm9ybWF0JzogJ0h5cGVyVGV4dCBNYXJrdXAgTGFuZ3VhZ2UnLCAnaWNvbic6ICdmaWxlLXdvcmQnfSxcbiAgICAnbWh0Jzogeydmb3JtYXQnOiAnSHlwZXJUZXh0IE1hcmt1cCBMYW5ndWFnZScsICdpY29uJzogJ2ZpbGUtd29yZCd9LFxuICAgICdtaHRtbCc6IHsnZm9ybWF0JzogJ0h5cGVyVGV4dCBNYXJrdXAgTGFuZ3VhZ2UnLCAnaWNvbic6ICdmaWxlLXdvcmQnfSxcbiAgICAneG1sJzogeydmb3JtYXQnOiAnRXh0ZW5zaWJsZSBNYXJrdXAgTGFuZ3VhZ2UnLCAnaWNvbic6ICdmaWxlLXdvcmQnfSxcbiAgICAneHBzJzogeydmb3JtYXQnOiAnWE1MIFBhcGVyIFNwZWNpZmljYXRpb24nLCAnaWNvbic6ICdmaWxlLXdvcmQnfSxcbiAgICAnZHhmJzogeydmb3JtYXQnOiAnQXV0b0NBRCBEcmF3aW5nIEZpbGUgRm9ybWF0JywgJ2ljb24nOiAnZmlsZS1pbWFnZSd9LFxuICAgICdkd2cnOiB7J2Zvcm1hdCc6ICdBdXRvQ0FEIERyYXdpbmcgRmlsZSBGb3JtYXQnLCAnaWNvbic6ICdmaWxlLWltYWdlJ30sXG4gICAgJ2JtcCc6IHsnZm9ybWF0JzogJ0JpdG1hcCBQaWN0dXJlJywgJ2ljb24nOiAnZmlsZS1pbWFnZSd9LFxuICAgICdnaWYnOiB7J2Zvcm1hdCc6ICdHcmFwaGljcyBJbnRlcmNoYW5nZSBGb3JtYXQnLCAnaWNvbic6ICdmaWxlLWltYWdlJ30sXG4gICAgJ2pwZyc6IHsnZm9ybWF0JzogJ0pvaW50IFBob3RvZ3JhcGhpYyBFeHBlcnRzIEdyb3VwJywgJ2ljb24nOiAnZmlsZS1pbWFnZSd9LFxuICAgICdqcGUnOiB7J2Zvcm1hdCc6ICdKb2ludCBQaG90b2dyYXBoaWMgRXhwZXJ0cyBHcm91cCcsICdpY29uJzogJ2ZpbGUtaW1hZ2UnfSxcbiAgICAnanBlZyc6IHsnZm9ybWF0JzogJ0pvaW50IFBob3RvZ3JhcGhpYyBFeHBlcnRzIEdyb3VwJywgJ2ljb24nOiAnZmlsZS1pbWFnZSd9LFxuICAgICdqZmlmJzogeydmb3JtYXQnOiAnSm9pbnQgUGhvdG9ncmFwaGljIEV4cGVydHMgR3JvdXAnLCAnaWNvbic6ICdmaWxlLWltYWdlJ30sXG4gICAgJ3BuZyc6IHsnZm9ybWF0JzogJ1BvcnRhYmxlIE5ldHdvcmsgR3JhcGhpY3MnLCAnaWNvbic6ICdmaWxlLWltYWdlJ30sXG4gICAgJ3RpZmYnOiB7J2Zvcm1hdCc6ICdUYWdnZWQgSW1hZ2UgRmlsZSBGb3JtYXQnLCAnaWNvbic6ICdmaWxlLXBob3RvJ30sXG4gICAgJ3RpZic6IHsnZm9ybWF0JzogJ1RhZ2dlZCBJbWFnZSBGaWxlIEZvcm1hdCcsICdpY29uJzogJ2ZpbGUtcGhvdG8nfSxcbiAgICAnZXB1Yic6IHsnZm9ybWF0JzogJ0VsZWN0cm9uaWMgUHVibGljYXRpb24nLCAnaWNvbic6ICdmaWxlLXBkZid9LFxuICAgICdpY28nOiB7J2Zvcm1hdCc6ICdXaW5kb3dzIEljb24nLCAnaWNvbic6ICdmaWxlLWltYWdlJ30sXG4gICAgJ3dlYnAnOiB7J2Zvcm1hdCc6ICdDb21wcmVzc2VkIEltYWdlJywgJ2ljb24nOiAnZmlsZS1pbWFnZSd9LFxuICAgICdtb2JpJzogeydmb3JtYXQnOiAnTW9iaXBvY2tldCBlQm9vaycsICdpY29uJzogJ2ZpbGUtcGRmJ30sXG4gICAgJ3RleCc6IHsnZm9ybWF0JzogJ0xhVGVYIFNvdXJjZSBEb2N1bWVudCcsICdpY29uJzogJ2ZpbGUtcGRmJ30sXG4gICAgJ2RqdnUnOiB7J2Zvcm1hdCc6ICdNdWx0aS1MYXllciBSYXN0ZXIgSW1hZ2UnLCAnaWNvbic6ICdmaWxlLWFsdCd9LFxuICAgICd1bmtub3duJzogeydmb3JtYXQnOiAnVGhpcyBmb3JtYXQgaXMgbm90IHN1cHBvcnRlZCcsICdpY29uJzogJ2ZpbGUnfSxcbiAgfTtcblxuICBwdWJsaWMgc3RhdGljIGZpbmQoZmlsZW5hbWU6IHN0cmluZywgaXNEaXJlY3Rvcnk6IGJvb2xlYW4pIHtcbiAgICBpZiAoZmlsZW5hbWUgJiYgIWlzRGlyZWN0b3J5KSB7XG4gICAgICBjb25zdCBzdHJpbmdzID0gZmlsZW5hbWUuc3BsaXQoJy4nKTtcbiAgICAgIGNvbnN0IG5hbWUgPSBzdHJpbmdzLnBvcCgpLnRvTG93ZXJDYXNlKCk7XG4gICAgICBpZiAodHlwZW9mIEZpbGVVdGlsLm1hcFtuYW1lXSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICByZXR1cm4gc3RyaW5ncy5sZW5ndGggPiAxID8gRmlsZVV0aWwubWFwWyd1bmtub3duJ10gOiBGaWxlVXRpbC5tYXBbJ2ZvbGRlciddO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIEZpbGVVdGlsLm1hcFtuYW1lXTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIEZpbGVVdGlsLm1hcFsnZm9sZGVyJ107XG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBGaWxlU2VydmljZSB7XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gIH1cbn1cbiJdfQ==
