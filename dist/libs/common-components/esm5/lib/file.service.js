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
    /** @type {?} */
    FileDescription.prototype.showGridLines;
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
/** @enum {number} */
var FilePropertyCategory = {
    BuildIn: 0,
    Default: 1,
};
export { FilePropertyCategory };
FilePropertyCategory[FilePropertyCategory.BuildIn] = 'BuildIn';
FilePropertyCategory[FilePropertyCategory.Default] = 'Default';
var FilePropertyModel = /** @class */ (function () {
    function FilePropertyModel() {
    }
    return FilePropertyModel;
}());
export { FilePropertyModel };
if (false) {
    /** @type {?} */
    FilePropertyModel.prototype.category;
    /** @type {?} */
    FilePropertyModel.prototype.name;
    /** @type {?} */
    FilePropertyModel.prototype.value;
    /** @type {?} */
    FilePropertyModel.prototype.type;
    /** @type {?} */
    FilePropertyModel.prototype.original;
    /** @type {?} */
    FilePropertyModel.prototype.selected;
    /** @type {?} */
    FilePropertyModel.prototype.editing;
    /** @type {?} */
    FilePropertyModel.prototype.disabled;
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
    /**
     * @param {?} color
     * @return {?}
     */
    Utils.toRgb = /**
     * @param {?} color
     * @return {?}
     */
    function (color) {
        /** @type {?} */
        var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(color);
        if (result) {
            /** @type {?} */
            var r = parseInt(result[1], 16);
            /** @type {?} */
            var g = parseInt(result[2], 16);
            /** @type {?} */
            var b = parseInt(result[3], 16);
            return result ? 'rgb(' + r + ',' + g + ',' + b + ')' : '';
        }
        return color;
    };
    /**
     * @param {?} color
     * @return {?}
     */
    Utils.toHex = /**
     * @param {?} color
     * @return {?}
     */
    function (color) {
        // check if color is standard hex value
        if (color.match(/[0-9A-F]{6}|[0-9A-F]{3}$/i)) {
            return (color.charAt(0) === "#") ? color : ("#" + color);
            // check if color is RGB value -> convert to hex
        }
        else if (color.match(/^rgb\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*\)$/)) {
            /** @type {?} */
            var c = ([parseInt(RegExp.$1, 10), parseInt(RegExp.$2, 10), parseInt(RegExp.$3, 10)]);
            /** @type {?} */
            var pad = (/**
             * @param {?} str
             * @return {?}
             */
            function (str) {
                if (str.length < 2) {
                    for (var i = 0, len = 2 - str.length; i < len; i++) {
                        str = '0' + str;
                    }
                }
                return str;
            });
            if (c.length === 3) {
                /** @type {?} */
                var r = pad(c[0].toString(16));
                /** @type {?} */
                var g = pad(c[1].toString(16));
                /** @type {?} */
                var b = pad(c[2].toString(16));
                return '#' + r + g + b;
            }
            // else do nothing
        }
        else {
            return '';
        }
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
        'pdf': { 'format': 'Portable Document Format', 'icon': 'file-pdf', 'unit': 'pt' },
        'doc': { 'format': 'Microsoft Word', 'icon': 'file-word', 'unit': 'pt' },
        'docx': { 'format': 'Microsoft Word', 'icon': 'file-word', 'unit': 'pt' },
        'docm': { 'format': 'Microsoft Word', 'icon': 'file-word', 'unit': 'pt' },
        'dot': { 'format': 'Microsoft Word', 'icon': 'file-word', 'unit': 'pt' },
        'dotx': { 'format': 'Microsoft Word', 'icon': 'file-word', 'unit': 'pt' },
        'dotm': { 'format': 'Microsoft Word', 'icon': 'file-word', 'unit': 'pt' },
        'xls': { 'format': 'Microsoft Excel', 'icon': 'file-excel', 'unit': 'px' },
        'xlsx': { 'format': 'Microsoft Excel', 'icon': 'file-excel', 'unit': 'px' },
        'xlsm': { 'format': 'Microsoft Excel', 'icon': 'file-excel', 'unit': 'px' },
        'xlsb': { 'format': 'Microsoft Excel', 'icon': 'file-excel', 'unit': 'px' },
        'xls2003': { 'format': 'Microsoft Excel', 'icon': 'file-excel', 'unit': 'px' },
        'xltx': { 'format': 'Microsoft Excel', 'icon': 'file-excel', 'unit': 'px' },
        'xltm': { 'format': 'Microsoft Excel', 'icon': 'file-excel', 'unit': 'px' },
        'ppt': { 'format': 'Microsoft PowerPoint', 'icon': 'file-powerpoint', 'unit': 'pt' },
        'pptx': { 'format': 'Microsoft PowerPoint', 'icon': 'file-powerpoint', 'unit': 'pt' },
        'pps': { 'format': 'Microsoft PowerPoint', 'icon': 'file-powerpoint', 'unit': 'pt' },
        'ppsx': { 'format': 'Microsoft PowerPoint', 'icon': 'file-powerpoint', 'unit': 'pt' },
        'vsd': { 'format': 'Microsoft Visio', 'icon': 'file-code', 'unit': 'px' },
        'vdx': { 'format': 'Microsoft Visio', 'icon': 'file-code', 'unit': 'px' },
        'vss': { 'format': 'Microsoft Visio', 'icon': 'file-code', 'unit': 'px' },
        'vsx': { 'format': 'Microsoft Visio', 'icon': 'file-code', 'unit': 'px' },
        'vst': { 'format': 'Microsoft Visio', 'icon': 'file-code', 'unit': 'px' },
        'vtx': { 'format': 'Microsoft Visio', 'icon': 'file-code', 'unit': 'px' },
        'vsdx': { 'format': 'Microsoft Visio', 'icon': 'file-code', 'unit': 'px' },
        'vdw': { 'format': 'Microsoft Visio', 'icon': 'file-code', 'unit': 'px' },
        'vstx': { 'format': 'Microsoft Visio', 'icon': 'file-code', 'unit': 'px' },
        'vssx': { 'format': 'Microsoft Visio', 'icon': 'file-code', 'unit': 'px' },
        'mpp': { 'format': 'Microsoft Project', 'icon': 'file-alt', 'unit': 'pt' },
        'mpt': { 'format': 'Microsoft Project', 'icon': 'file-alt', 'unit': 'pt' },
        'msg': { 'format': 'Microsoft Outlook', 'icon': 'file-alt', 'unit': 'pt' },
        'eml': { 'format': 'Microsoft Outlook', 'icon': 'file-alt', 'unit': 'pt' },
        'emlx': { 'format': 'Microsoft Outlook', 'icon': 'file-alt', 'unit': 'pt' },
        'one': { 'format': 'Microsoft OneNote', 'icon': 'file-word', 'unit': 'pt' },
        'odt': { 'format': 'Open Document Text', 'icon': 'file-word', 'unit': 'pt' },
        'ott': { 'format': 'Open Document Text Template', 'icon': 'file-word', 'unit': 'pt' },
        'ods': { 'format': 'Open Document Spreadsheet', 'icon': 'file-excel', 'unit': 'px' },
        'odp': { 'format': 'Open Document Presentation', 'icon': 'file-powerpoint', 'unit': 'pt' },
        'otp': { 'format': 'Open Document Presentation', 'icon': 'file-powerpoint', 'unit': 'pt' },
        'ots': { 'format': 'Open Document Presentation', 'icon': 'file-powerpoint', 'unit': 'pt' },
        'potx': { 'format': 'Open Document Presentation', 'icon': 'file-powerpoint', 'unit': 'pt' },
        'potm': { 'format': 'Open Document Presentation', 'icon': 'file-powerpoint', 'unit': 'pt' },
        'pptm': { 'format': 'Open Document Presentation', 'icon': 'file-powerpoint', 'unit': 'pt' },
        'ppsm': { 'format': 'Open Document Presentation', 'icon': 'file-powerpoint', 'unit': 'pt' },
        'rtf': { 'format': 'Rich Text Format', 'icon': 'file-alt', 'unit': 'pt' },
        'txt': { 'format': 'Plain Text File', 'icon': 'file-alt', 'unit': 'pt' },
        'csv': { 'format': 'Comma-Separated Values', 'icon': 'file-excel', 'unit': 'px' },
        'html': { 'format': 'HyperText Markup Language', 'icon': 'file-word', 'unit': 'pt' },
        'mht': { 'format': 'HyperText Markup Language', 'icon': 'file-word', 'unit': 'pt' },
        'mhtml': { 'format': 'HyperText Markup Language', 'icon': 'file-word', 'unit': 'pt' },
        'xml': { 'format': 'Extensible Markup Language', 'icon': 'file-word', 'unit': 'pt' },
        'xps': { 'format': 'XML Paper Specification', 'icon': 'file-word', 'unit': 'pt' },
        'dxf': { 'format': 'AutoCAD Drawing File Format', 'icon': 'file-image', 'unit': 'px' },
        'dwg': { 'format': 'AutoCAD Drawing File Format', 'icon': 'file-image', 'unit': 'px' },
        'bmp': { 'format': 'Bitmap Picture', 'icon': 'file-image', 'unit': 'px' },
        'gif': { 'format': 'Graphics Interchange Format', 'icon': 'file-image', 'unit': 'px' },
        'jpg': { 'format': 'Joint Photographic Experts Group', 'icon': 'file-image', 'unit': 'px' },
        'jpe': { 'format': 'Joint Photographic Experts Group', 'icon': 'file-image', 'unit': 'px' },
        'jpeg': { 'format': 'Joint Photographic Experts Group', 'icon': 'file-image', 'unit': 'px' },
        'jfif': { 'format': 'Joint Photographic Experts Group', 'icon': 'file-image', 'unit': 'px' },
        'png': { 'format': 'Portable Network Graphics', 'icon': 'file-image', 'unit': 'px' },
        'tiff': { 'format': 'Tagged Image File Format', 'icon': 'file-image', 'unit': 'px' },
        'tif': { 'format': 'Tagged Image File Format', 'icon': 'file-image', 'unit': 'px' },
        'psd': { 'format': 'Tagged Image File Format', 'icon': 'file-image', 'unit': 'px' },
        'svg': { 'format': 'Tagged Image File Format', 'icon': 'file-image', 'unit': 'px' },
        'jp2': { 'format': 'Tagged Image File Format', 'icon': 'file-image', 'unit': 'px' },
        'epub': { 'format': 'Electronic Publication', 'icon': 'file-pdf', 'unit': 'pt' },
        'ico': { 'format': 'Windows Icon', 'icon': 'file-image', 'unit': 'px' },
        'webp': { 'format': 'Compressed Image', 'icon': 'file-image', 'unit': 'px' },
        'mobi': { 'format': 'Mobipocket eBook', 'icon': 'file-pdf', 'unit': 'pt' },
        'tex': { 'format': 'LaTeX Source Document', 'icon': 'file-pdf', 'unit': 'pt' },
        'djvu': { 'format': 'Multi-Layer Raster Image', 'icon': 'file-alt', 'unit': 'pt' },
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmlsZS5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdyb3VwZG9jcy5leGFtcGxlcy5hbmd1bGFyL2NvbW1vbi1jb21wb25lbnRzLyIsInNvdXJjZXMiOlsibGliL2ZpbGUuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBO0lBQUE7SUFPQSxDQUFDO0lBQUQsZ0JBQUM7QUFBRCxDQUFDLEFBUEQsSUFPQzs7OztJQU5DLHlCQUFhOztJQUNiLDBCQUFjOztJQUNkLDBCQUFjOztJQUNkLDJCQUFlOztJQUNmLDJCQUFlOztJQUNmLDZCQUFrQjs7QUFHcEI7SUFBQTtJQUdBLENBQUM7SUFBRCxrQkFBQztBQUFELENBQUMsQUFIRCxJQUdDOzs7O0lBRkMsaUNBQW1COztJQUNuQiw0QkFBYzs7QUFHaEI7SUFJRSx5QkFBWSxJQUFZLEVBQUUsUUFBZ0I7UUFDeEMsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7UUFDakIsSUFBSSxDQUFDLFFBQVEsR0FBRyxRQUFRLENBQUM7SUFDM0IsQ0FBQztJQUNILHNCQUFDO0FBQUQsQ0FBQyxBQVJELElBUUM7Ozs7SUFQQywrQkFBYTs7SUFDYixtQ0FBaUI7O0FBUW5CO0lBQThCLG9DQUFlO0lBRzNDLGtCQUFZLElBQVksRUFBRSxRQUFnQixFQUFFLE9BQWU7UUFBM0QsWUFDRSxrQkFBTSxJQUFJLEVBQUUsUUFBUSxDQUFDLFNBRXRCO1FBREMsS0FBSSxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUM7O0lBQ3pCLENBQUM7SUFDSCxlQUFDO0FBQUQsQ0FBQyxBQVBELENBQThCLGVBQWUsR0FPNUM7Ozs7SUFOQywyQkFBZ0I7O0FBUWxCO0lBQUE7UUFHRSxpQkFBWSxHQUFHLElBQUksQ0FBQztJQUV0QixDQUFDO0lBQUQsc0JBQUM7QUFBRCxDQUFDLEFBTEQsSUFLQzs7OztJQUpDLCtCQUFhOztJQUNiLGdDQUFtQjs7SUFDbkIsdUNBQW9COztJQUNwQix3Q0FBdUI7O0FBR3pCO0lBQUE7SUFNQSxDQUFDO0lBQUQsZ0JBQUM7QUFBRCxDQUFDLEFBTkQsSUFNQzs7OztJQUxDLHlCQUFhOztJQUNiLHlCQUFhOztJQUNiLDhCQUFtQjs7SUFDbkIseUJBQWE7O0lBQ2IsZ0NBQXFCOzs7O0lBSXJCLFVBQU87SUFDUCxVQUFPOzs7OztBQUdUO0lBQUE7SUFTQSxDQUFDO0lBQUQsd0JBQUM7QUFBRCxDQUFDLEFBVEQsSUFTQzs7OztJQVJDLHFDQUErQjs7SUFDL0IsaUNBQWE7O0lBQ2Isa0NBQVc7O0lBQ1gsaUNBQWE7O0lBQ2IscUNBQWtCOztJQUNsQixxQ0FBa0I7O0lBQ2xCLG9DQUFpQjs7SUFDakIscUNBQWtCOztBQUdwQjtJQUFBO0lBUUEsQ0FBQztJQVBRLG9CQUFVLEdBQUcsR0FBRyxDQUFDO0lBQ2pCLHNCQUFZLEdBQUcsR0FBRyxDQUFDO0lBQ25CLG1CQUFTLEdBQUcsR0FBRyxDQUFDO0lBQ2hCLGtCQUFRLEdBQUcsR0FBRyxDQUFDO0lBQ2YsaUJBQU8sR0FBRyxHQUFHLENBQUM7SUFDZCxrQkFBUSxHQUFHLEdBQUcsQ0FBQztJQUNmLDZCQUFtQixHQUFHLEdBQUcsQ0FBQztJQUNuQyxnQkFBQztDQUFBLEFBUkQsSUFRQztTQVJZLFNBQVM7OztJQUNwQixxQkFBd0I7O0lBQ3hCLHVCQUEwQjs7SUFDMUIsb0JBQXVCOztJQUN2QixtQkFBc0I7O0lBQ3RCLGtCQUFxQjs7SUFDckIsbUJBQXNCOztJQUN0Qiw4QkFBaUM7O0FBR25DO0lBQUE7SUEyREEsQ0FBQzs7Ozs7SUExRGUsc0JBQWdCOzs7O0lBQTlCLFVBQStCLEtBQUs7O1lBQzVCLEtBQUssR0FBRztZQUNaLENBQUMsRUFBRSxDQUFDO1lBQ0osQ0FBQyxFQUFFLENBQUM7U0FDTDs7WUFDSyxNQUFNLEdBQWMsbUJBQVcsTUFBTSxDQUFDLEtBQUssRUFBQTs7WUFDM0MsRUFBRSxHQUFHLEtBQUssSUFBSSxNQUFNO1FBQzFCLElBQUksRUFBRSxDQUFDLEtBQUssSUFBSSxNQUFNLENBQUMsS0FBSyxJQUFJLE1BQU0sQ0FBQyxPQUFPLElBQUksQ0FBQyxFQUFFLENBQUMsT0FBTyxJQUFJLEVBQUUsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsRUFBRSxFQUFFLEtBQUs7OztnQkFDdkcsS0FBSyxHQUFHLE9BQU8sRUFBRSxDQUFDLEtBQUssS0FBSyxXQUFXLElBQUksRUFBRSxDQUFDLEtBQUssS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxLQUFLOztnQkFDbkYsS0FBSyxHQUFHLE9BQU8sRUFBRSxDQUFDLEtBQUssS0FBSyxXQUFXLElBQUksRUFBRSxDQUFDLEtBQUssS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxLQUFLOztnQkFDbkYsU0FBTyxHQUFHLE9BQU8sTUFBTSxDQUFDLE9BQU8sS0FBSyxXQUFXLElBQUksTUFBTSxDQUFDLE9BQU8sS0FBSyxDQUFDOztnQkFDdkUsU0FBTyxHQUFHLE9BQU8sTUFBTSxDQUFDLE9BQU8sS0FBSyxXQUFXLElBQUksTUFBTSxDQUFDLE9BQU8sS0FBSyxDQUFDO1lBQzdFLEtBQUssQ0FBQyxDQUFDLEdBQUcsS0FBSyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBTyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQzNFLEtBQUssQ0FBQyxDQUFDLEdBQUcsS0FBSyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBTyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDO1NB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QUFDO1FBQ3JFLE1BQU0sRUFBRSxFQUFDLFFBQVEsRUFBRSxrQkFBa0IsRUFBRSxNQUFNLEVBQUUsWUFBWSxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUM7UUFDMUUsTUFBTSxFQUFFLEVBQUMsUUFBUSxFQUFFLGtCQUFrQixFQUFFLE1BQU0sRUFBRSxVQUFVLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBQztRQUN4RSxLQUFLLEVBQUUsRUFBQyxRQUFRLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSxFQUFFLFVBQVUsRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFDO1FBQzVFLE1BQU0sRUFBRSxFQUFDLFFBQVEsRUFBRSwwQkFBMEIsRUFBRSxNQUFNLEVBQUUsVUFBVSxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUM7UUFDaEYsU0FBUyxFQUFFLEVBQUMsUUFBUSxFQUFFLDhCQUE4QixFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUM7S0FDdEUsQ0FBQztJQWVKLGVBQUM7Q0FBQSxBQTNGRCxJQTJGQztTQTNGWSxRQUFROzs7SUFDbkIsYUEyRUU7O0FBaUJKO0lBRUU7SUFDQSxDQUFDO0lBQ0gsa0JBQUM7QUFBRCxDQUFDLEFBSkQsSUFJQyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjbGFzcyBQYWdlTW9kZWwge1xyXG4gIGRhdGE6IHN0cmluZztcclxuICBhbmdsZTogbnVtYmVyO1xyXG4gIHdpZHRoOiBudW1iZXI7XHJcbiAgaGVpZ2h0OiBudW1iZXI7XHJcbiAgbnVtYmVyOiBudW1iZXI7XHJcbiAgZWRpdGFibGU6IGJvb2xlYW47XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBSb3RhdGVkUGFnZSB7XHJcbiAgcGFnZU51bWJlcjogbnVtYmVyO1xyXG4gIGFuZ2xlOiBudW1iZXI7XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBGaWxlQ3JlZGVudGlhbHMge1xyXG4gIGd1aWQ6IHN0cmluZztcclxuICBwYXNzd29yZDogc3RyaW5nO1xyXG5cclxuICBjb25zdHJ1Y3RvcihndWlkOiBzdHJpbmcsIHBhc3N3b3JkOiBzdHJpbmcpIHtcclxuICAgIHRoaXMuZ3VpZCA9IGd1aWQ7XHJcbiAgICB0aGlzLnBhc3N3b3JkID0gcGFzc3dvcmQ7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgU2F2ZUZpbGUgZXh0ZW5kcyBGaWxlQ3JlZGVudGlhbHMge1xyXG4gIGNvbnRlbnQ6IHN0cmluZztcclxuXHJcbiAgY29uc3RydWN0b3IoZ3VpZDogc3RyaW5nLCBwYXNzd29yZDogc3RyaW5nLCBjb250ZW50OiBzdHJpbmcpIHtcclxuICAgIHN1cGVyKGd1aWQsIHBhc3N3b3JkKTtcclxuICAgIHRoaXMuY29udGVudCA9IGNvbnRlbnQ7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgRmlsZURlc2NyaXB0aW9uIHtcclxuICBndWlkOiBzdHJpbmc7XHJcbiAgcGFnZXM6IFBhZ2VNb2RlbFtdO1xyXG4gIHByaW50QWxsb3dlZCA9IHRydWU7XHJcbiAgc2hvd0dyaWRMaW5lczogYm9vbGVhbjtcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIEZpbGVNb2RlbCB7XHJcbiAgZ3VpZDogc3RyaW5nO1xyXG4gIG5hbWU6IHN0cmluZztcclxuICBkaXJlY3Rvcnk6IGJvb2xlYW47XHJcbiAgc2l6ZTogbnVtYmVyO1xyXG4gIGlzRGlyZWN0b3J5OiBib29sZWFuO1xyXG59XHJcblxyXG5leHBvcnQgZW51bSBGaWxlUHJvcGVydHlDYXRlZ29yeSB7XHJcbiAgQnVpbGRJbixcclxuICBEZWZhdWx0XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBGaWxlUHJvcGVydHlNb2RlbCB7XHJcbiAgY2F0ZWdvcnk6IEZpbGVQcm9wZXJ0eUNhdGVnb3J5O1xyXG4gIG5hbWU6IHN0cmluZztcclxuICB2YWx1ZTogYW55O1xyXG4gIHR5cGU6IG51bWJlcjtcclxuICBvcmlnaW5hbDogYm9vbGVhbjtcclxuICBzZWxlY3RlZDogYm9vbGVhbjtcclxuICBlZGl0aW5nOiBib29sZWFuO1xyXG4gIGRpc2FibGVkOiBib29sZWFuO1xyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgSHR0cEVycm9yIHtcclxuICBzdGF0aWMgQmFkUmVxdWVzdCA9IDQwMDtcclxuICBzdGF0aWMgVW5hdXRob3JpemVkID0gNDAxO1xyXG4gIHN0YXRpYyBGb3JiaWRkZW4gPSA0MDM7XHJcbiAgc3RhdGljIE5vdEZvdW5kID0gNDA0O1xyXG4gIHN0YXRpYyBUaW1lT3V0ID0gNDA4O1xyXG4gIHN0YXRpYyBDb25mbGljdCA9IDQwOTtcclxuICBzdGF0aWMgSW50ZXJuYWxTZXJ2ZXJFcnJvciA9IDUwMDtcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIFV0aWxzIHtcclxuICBwdWJsaWMgc3RhdGljIGdldE1vdXNlUG9zaXRpb24oZXZlbnQpIHtcclxuICAgIGNvbnN0IG1vdXNlID0ge1xyXG4gICAgICB4OiAwLFxyXG4gICAgICB5OiAwXHJcbiAgICB9O1xyXG4gICAgY29uc3Qgd0V2ZW50OiBEcmFnRXZlbnQgPSA8RHJhZ0V2ZW50PndpbmRvdy5ldmVudDtcclxuICAgIGNvbnN0IGV2ID0gZXZlbnQgfHwgd0V2ZW50OyAvL01veiB8fCBJRVxyXG4gICAgaWYgKGV2LnBhZ2VYIHx8IHdFdmVudC5wYWdlWCB8fCB3RXZlbnQuc2NyZWVuWCB8fCAoZXYudG91Y2hlcyAmJiBldi50b3VjaGVzWzBdICYmIGV2LnRvdWNoZXNbMF0ucGFnZVgpKSB7IC8vTW96XHJcbiAgICAgIGNvbnN0IHBhZ2VYID0gdHlwZW9mIGV2LnBhZ2VYICE9PSBcInVuZGVmaW5lZFwiICYmIGV2LnBhZ2VYICE9PSAwID8gZXYucGFnZVggOiB3RXZlbnQucGFnZVg7XHJcbiAgICAgIGNvbnN0IHBhZ2VZID0gdHlwZW9mIGV2LnBhZ2VZICE9PSBcInVuZGVmaW5lZFwiICYmIGV2LnBhZ2VZICE9PSAwID8gZXYucGFnZVkgOiB3RXZlbnQucGFnZVk7XHJcbiAgICAgIGNvbnN0IHNjcmVlblggPSB0eXBlb2Ygd0V2ZW50LnNjcmVlblggIT09IFwidW5kZWZpbmVkXCIgJiYgd0V2ZW50LnNjcmVlblkgIT09IDA7XHJcbiAgICAgIGNvbnN0IHNjcmVlblkgPSB0eXBlb2Ygd0V2ZW50LnNjcmVlblkgIT09IFwidW5kZWZpbmVkXCIgJiYgd0V2ZW50LnNjcmVlblkgIT09IDA7XHJcbiAgICAgIG1vdXNlLnggPSBwYWdlWCA/IHBhZ2VYIDogKHNjcmVlblggPyB3RXZlbnQuc2NyZWVuWCA6IGV2LnRvdWNoZXNbMF0ucGFnZVgpO1xyXG4gICAgICBtb3VzZS55ID0gcGFnZVkgPyBwYWdlWSA6IChzY3JlZW5ZID8gd0V2ZW50LnNjcmVlblkgOiBldi50b3VjaGVzWzBdLnBhZ2VZKTtcclxuICAgIH0gZWxzZSBpZiAoZXYuY2xpZW50WCkgeyAvL0lFXHJcbiAgICAgIG1vdXNlLnggPSBldi5jbGllbnRYICsgZG9jdW1lbnQuYm9keS5zY3JvbGxMZWZ0O1xyXG4gICAgICBtb3VzZS55ID0gZXYuY2xpZW50WSArIGRvY3VtZW50LmJvZHkuc2Nyb2xsVG9wO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIG1vdXNlO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHN0YXRpYyB0b1JnYihjb2xvcjogc3RyaW5nKSB7XHJcbiAgICBjb25zdCByZXN1bHQgPSAvXiM/KFthLWZcXGRdezJ9KShbYS1mXFxkXXsyfSkoW2EtZlxcZF17Mn0pJC9pLmV4ZWMoY29sb3IpO1xyXG4gICAgaWYgKHJlc3VsdCkge1xyXG4gICAgICBjb25zdCByID0gcGFyc2VJbnQocmVzdWx0WzFdLCAxNik7XHJcbiAgICAgIGNvbnN0IGcgPSBwYXJzZUludChyZXN1bHRbMl0sIDE2KTtcclxuICAgICAgY29uc3QgYiA9IHBhcnNlSW50KHJlc3VsdFszXSwgMTYpO1xyXG4gICAgICByZXR1cm4gcmVzdWx0ID8gJ3JnYignICsgciArICcsJyArIGcgKyAnLCcgKyBiICsgJyknIDogJyc7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gY29sb3I7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgc3RhdGljIHRvSGV4KGNvbG9yOiBzdHJpbmcpIHtcclxuICAgIC8vIGNoZWNrIGlmIGNvbG9yIGlzIHN0YW5kYXJkIGhleCB2YWx1ZVxyXG4gICAgaWYgKGNvbG9yLm1hdGNoKC9bMC05QS1GXXs2fXxbMC05QS1GXXszfSQvaSkpIHtcclxuICAgICAgcmV0dXJuIChjb2xvci5jaGFyQXQoMCkgPT09IFwiI1wiKSA/IGNvbG9yIDogKFwiI1wiICsgY29sb3IpO1xyXG4gICAgICAvLyBjaGVjayBpZiBjb2xvciBpcyBSR0IgdmFsdWUgLT4gY29udmVydCB0byBoZXhcclxuICAgIH0gZWxzZSBpZiAoY29sb3IubWF0Y2goL15yZ2JcXChcXHMqKFxcZHsxLDN9KVxccyosXFxzKihcXGR7MSwzfSlcXHMqLFxccyooXFxkezEsM30pXFxzKlxcKSQvKSkge1xyXG4gICAgICBjb25zdCBjID0gKFtwYXJzZUludChSZWdFeHAuJDEsIDEwKSwgcGFyc2VJbnQoUmVnRXhwLiQyLCAxMCksIHBhcnNlSW50KFJlZ0V4cC4kMywgMTApXSksXHJcbiAgICAgICAgcGFkID0gZnVuY3Rpb24gKHN0cikge1xyXG4gICAgICAgICAgaWYgKHN0ci5sZW5ndGggPCAyKSB7XHJcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwLCBsZW4gPSAyIC0gc3RyLmxlbmd0aDsgaSA8IGxlbjsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgc3RyID0gJzAnICsgc3RyO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICByZXR1cm4gc3RyO1xyXG4gICAgICAgIH07XHJcbiAgICAgIGlmIChjLmxlbmd0aCA9PT0gMykge1xyXG4gICAgICAgIGNvbnN0IHIgPSBwYWQoY1swXS50b1N0cmluZygxNikpLFxyXG4gICAgICAgICAgZyA9IHBhZChjWzFdLnRvU3RyaW5nKDE2KSksXHJcbiAgICAgICAgICBiID0gcGFkKGNbMl0udG9TdHJpbmcoMTYpKTtcclxuICAgICAgICByZXR1cm4gJyMnICsgciArIGcgKyBiO1xyXG4gICAgICB9XHJcbiAgICAgIC8vIGVsc2UgZG8gbm90aGluZ1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgcmV0dXJuICcnO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIEZpbGVVdGlsIHtcclxuICBwdWJsaWMgc3RhdGljIG1hcCA9IHtcclxuICAgICdmb2xkZXInOiB7J2Zvcm1hdCc6ICcnLCAnaWNvbic6ICdmb2xkZXInfSxcclxuICAgICdwZGYnOiB7J2Zvcm1hdCc6ICdQb3J0YWJsZSBEb2N1bWVudCBGb3JtYXQnLCAnaWNvbic6ICdmaWxlLXBkZicsICd1bml0JzogJ3B0J30sXHJcbiAgICAnZG9jJzogeydmb3JtYXQnOiAnTWljcm9zb2Z0IFdvcmQnLCAnaWNvbic6ICdmaWxlLXdvcmQnLCAndW5pdCc6ICdwdCd9LFxyXG4gICAgJ2RvY3gnOiB7J2Zvcm1hdCc6ICdNaWNyb3NvZnQgV29yZCcsICdpY29uJzogJ2ZpbGUtd29yZCcsICd1bml0JzogJ3B0J30sXHJcbiAgICAnZG9jbSc6IHsnZm9ybWF0JzogJ01pY3Jvc29mdCBXb3JkJywgJ2ljb24nOiAnZmlsZS13b3JkJywgJ3VuaXQnOiAncHQnfSxcclxuICAgICdkb3QnOiB7J2Zvcm1hdCc6ICdNaWNyb3NvZnQgV29yZCcsICdpY29uJzogJ2ZpbGUtd29yZCcsICd1bml0JzogJ3B0J30sXHJcbiAgICAnZG90eCc6IHsnZm9ybWF0JzogJ01pY3Jvc29mdCBXb3JkJywgJ2ljb24nOiAnZmlsZS13b3JkJywgJ3VuaXQnOiAncHQnfSxcclxuICAgICdkb3RtJzogeydmb3JtYXQnOiAnTWljcm9zb2Z0IFdvcmQnLCAnaWNvbic6ICdmaWxlLXdvcmQnLCAndW5pdCc6ICdwdCd9LFxyXG4gICAgJ3hscyc6IHsnZm9ybWF0JzogJ01pY3Jvc29mdCBFeGNlbCcsICdpY29uJzogJ2ZpbGUtZXhjZWwnLCAndW5pdCc6ICdweCd9LFxyXG4gICAgJ3hsc3gnOiB7J2Zvcm1hdCc6ICdNaWNyb3NvZnQgRXhjZWwnLCAnaWNvbic6ICdmaWxlLWV4Y2VsJywgJ3VuaXQnOiAncHgnfSxcclxuICAgICd4bHNtJzogeydmb3JtYXQnOiAnTWljcm9zb2Z0IEV4Y2VsJywgJ2ljb24nOiAnZmlsZS1leGNlbCcsICd1bml0JzogJ3B4J30sXHJcbiAgICAneGxzYic6IHsnZm9ybWF0JzogJ01pY3Jvc29mdCBFeGNlbCcsICdpY29uJzogJ2ZpbGUtZXhjZWwnLCAndW5pdCc6ICdweCd9LFxyXG4gICAgJ3hsczIwMDMnOiB7J2Zvcm1hdCc6ICdNaWNyb3NvZnQgRXhjZWwnLCAnaWNvbic6ICdmaWxlLWV4Y2VsJywgJ3VuaXQnOiAncHgnfSxcclxuICAgICd4bHR4Jzogeydmb3JtYXQnOiAnTWljcm9zb2Z0IEV4Y2VsJywgJ2ljb24nOiAnZmlsZS1leGNlbCcsICd1bml0JzogJ3B4J30sXHJcbiAgICAneGx0bSc6IHsnZm9ybWF0JzogJ01pY3Jvc29mdCBFeGNlbCcsICdpY29uJzogJ2ZpbGUtZXhjZWwnLCAndW5pdCc6ICdweCd9LFxyXG4gICAgJ3BwdCc6IHsnZm9ybWF0JzogJ01pY3Jvc29mdCBQb3dlclBvaW50JywgJ2ljb24nOiAnZmlsZS1wb3dlcnBvaW50JywgJ3VuaXQnOiAncHQnfSxcclxuICAgICdwcHR4Jzogeydmb3JtYXQnOiAnTWljcm9zb2Z0IFBvd2VyUG9pbnQnLCAnaWNvbic6ICdmaWxlLXBvd2VycG9pbnQnLCAndW5pdCc6ICdwdCd9LFxyXG4gICAgJ3Bwcyc6IHsnZm9ybWF0JzogJ01pY3Jvc29mdCBQb3dlclBvaW50JywgJ2ljb24nOiAnZmlsZS1wb3dlcnBvaW50JywgJ3VuaXQnOiAncHQnfSxcclxuICAgICdwcHN4Jzogeydmb3JtYXQnOiAnTWljcm9zb2Z0IFBvd2VyUG9pbnQnLCAnaWNvbic6ICdmaWxlLXBvd2VycG9pbnQnLCAndW5pdCc6ICdwdCd9LFxyXG4gICAgJ3ZzZCc6IHsnZm9ybWF0JzogJ01pY3Jvc29mdCBWaXNpbycsICdpY29uJzogJ2ZpbGUtY29kZScsICd1bml0JzogJ3B4J30sXHJcbiAgICAndmR4Jzogeydmb3JtYXQnOiAnTWljcm9zb2Z0IFZpc2lvJywgJ2ljb24nOiAnZmlsZS1jb2RlJywgJ3VuaXQnOiAncHgnfSxcclxuICAgICd2c3MnOiB7J2Zvcm1hdCc6ICdNaWNyb3NvZnQgVmlzaW8nLCAnaWNvbic6ICdmaWxlLWNvZGUnLCAndW5pdCc6ICdweCd9LFxyXG4gICAgJ3ZzeCc6IHsnZm9ybWF0JzogJ01pY3Jvc29mdCBWaXNpbycsICdpY29uJzogJ2ZpbGUtY29kZScsICd1bml0JzogJ3B4J30sXHJcbiAgICAndnN0Jzogeydmb3JtYXQnOiAnTWljcm9zb2Z0IFZpc2lvJywgJ2ljb24nOiAnZmlsZS1jb2RlJywgJ3VuaXQnOiAncHgnfSxcclxuICAgICd2dHgnOiB7J2Zvcm1hdCc6ICdNaWNyb3NvZnQgVmlzaW8nLCAnaWNvbic6ICdmaWxlLWNvZGUnLCAndW5pdCc6ICdweCd9LFxyXG4gICAgJ3ZzZHgnOiB7J2Zvcm1hdCc6ICdNaWNyb3NvZnQgVmlzaW8nLCAnaWNvbic6ICdmaWxlLWNvZGUnLCAndW5pdCc6ICdweCd9LFxyXG4gICAgJ3Zkdyc6IHsnZm9ybWF0JzogJ01pY3Jvc29mdCBWaXNpbycsICdpY29uJzogJ2ZpbGUtY29kZScsICd1bml0JzogJ3B4J30sXHJcbiAgICAndnN0eCc6IHsnZm9ybWF0JzogJ01pY3Jvc29mdCBWaXNpbycsICdpY29uJzogJ2ZpbGUtY29kZScsICd1bml0JzogJ3B4J30sXHJcbiAgICAndnNzeCc6IHsnZm9ybWF0JzogJ01pY3Jvc29mdCBWaXNpbycsICdpY29uJzogJ2ZpbGUtY29kZScsICd1bml0JzogJ3B4J30sXHJcbiAgICAnbXBwJzogeydmb3JtYXQnOiAnTWljcm9zb2Z0IFByb2plY3QnLCAnaWNvbic6ICdmaWxlLWFsdCcsICd1bml0JzogJ3B0J30sXHJcbiAgICAnbXB0Jzogeydmb3JtYXQnOiAnTWljcm9zb2Z0IFByb2plY3QnLCAnaWNvbic6ICdmaWxlLWFsdCcsICd1bml0JzogJ3B0J30sXHJcbiAgICAnbXNnJzogeydmb3JtYXQnOiAnTWljcm9zb2Z0IE91dGxvb2snLCAnaWNvbic6ICdmaWxlLWFsdCcsICd1bml0JzogJ3B0J30sXHJcbiAgICAnZW1sJzogeydmb3JtYXQnOiAnTWljcm9zb2Z0IE91dGxvb2snLCAnaWNvbic6ICdmaWxlLWFsdCcsICd1bml0JzogJ3B0J30sXHJcbiAgICAnZW1seCc6IHsnZm9ybWF0JzogJ01pY3Jvc29mdCBPdXRsb29rJywgJ2ljb24nOiAnZmlsZS1hbHQnLCAndW5pdCc6ICdwdCd9LFxyXG4gICAgJ29uZSc6IHsnZm9ybWF0JzogJ01pY3Jvc29mdCBPbmVOb3RlJywgJ2ljb24nOiAnZmlsZS13b3JkJywgJ3VuaXQnOiAncHQnfSxcclxuICAgICdvZHQnOiB7J2Zvcm1hdCc6ICdPcGVuIERvY3VtZW50IFRleHQnLCAnaWNvbic6ICdmaWxlLXdvcmQnLCAndW5pdCc6ICdwdCd9LFxyXG4gICAgJ290dCc6IHsnZm9ybWF0JzogJ09wZW4gRG9jdW1lbnQgVGV4dCBUZW1wbGF0ZScsICdpY29uJzogJ2ZpbGUtd29yZCcsICd1bml0JzogJ3B0J30sXHJcbiAgICAnb2RzJzogeydmb3JtYXQnOiAnT3BlbiBEb2N1bWVudCBTcHJlYWRzaGVldCcsICdpY29uJzogJ2ZpbGUtZXhjZWwnLCAndW5pdCc6ICdweCd9LFxyXG4gICAgJ29kcCc6IHsnZm9ybWF0JzogJ09wZW4gRG9jdW1lbnQgUHJlc2VudGF0aW9uJywgJ2ljb24nOiAnZmlsZS1wb3dlcnBvaW50JywgJ3VuaXQnOiAncHQnfSxcclxuICAgICdvdHAnOiB7J2Zvcm1hdCc6ICdPcGVuIERvY3VtZW50IFByZXNlbnRhdGlvbicsICdpY29uJzogJ2ZpbGUtcG93ZXJwb2ludCcsICd1bml0JzogJ3B0J30sXHJcbiAgICAnb3RzJzogeydmb3JtYXQnOiAnT3BlbiBEb2N1bWVudCBQcmVzZW50YXRpb24nLCAnaWNvbic6ICdmaWxlLXBvd2VycG9pbnQnLCAndW5pdCc6ICdwdCd9LFxyXG4gICAgJ3BvdHgnOiB7J2Zvcm1hdCc6ICdPcGVuIERvY3VtZW50IFByZXNlbnRhdGlvbicsICdpY29uJzogJ2ZpbGUtcG93ZXJwb2ludCcsICd1bml0JzogJ3B0J30sXHJcbiAgICAncG90bSc6IHsnZm9ybWF0JzogJ09wZW4gRG9jdW1lbnQgUHJlc2VudGF0aW9uJywgJ2ljb24nOiAnZmlsZS1wb3dlcnBvaW50JywgJ3VuaXQnOiAncHQnfSxcclxuICAgICdwcHRtJzogeydmb3JtYXQnOiAnT3BlbiBEb2N1bWVudCBQcmVzZW50YXRpb24nLCAnaWNvbic6ICdmaWxlLXBvd2VycG9pbnQnLCAndW5pdCc6ICdwdCd9LFxyXG4gICAgJ3Bwc20nOiB7J2Zvcm1hdCc6ICdPcGVuIERvY3VtZW50IFByZXNlbnRhdGlvbicsICdpY29uJzogJ2ZpbGUtcG93ZXJwb2ludCcsICd1bml0JzogJ3B0J30sXHJcbiAgICAncnRmJzogeydmb3JtYXQnOiAnUmljaCBUZXh0IEZvcm1hdCcsICdpY29uJzogJ2ZpbGUtYWx0JywgJ3VuaXQnOiAncHQnfSxcclxuICAgICd0eHQnOiB7J2Zvcm1hdCc6ICdQbGFpbiBUZXh0IEZpbGUnLCAnaWNvbic6ICdmaWxlLWFsdCcsICd1bml0JzogJ3B0J30sXHJcbiAgICAnY3N2Jzogeydmb3JtYXQnOiAnQ29tbWEtU2VwYXJhdGVkIFZhbHVlcycsICdpY29uJzogJ2ZpbGUtZXhjZWwnLCAndW5pdCc6ICdweCd9LFxyXG4gICAgJ2h0bWwnOiB7J2Zvcm1hdCc6ICdIeXBlclRleHQgTWFya3VwIExhbmd1YWdlJywgJ2ljb24nOiAnZmlsZS13b3JkJywgJ3VuaXQnOiAncHQnfSxcclxuICAgICdtaHQnOiB7J2Zvcm1hdCc6ICdIeXBlclRleHQgTWFya3VwIExhbmd1YWdlJywgJ2ljb24nOiAnZmlsZS13b3JkJywgJ3VuaXQnOiAncHQnfSxcclxuICAgICdtaHRtbCc6IHsnZm9ybWF0JzogJ0h5cGVyVGV4dCBNYXJrdXAgTGFuZ3VhZ2UnLCAnaWNvbic6ICdmaWxlLXdvcmQnLCAndW5pdCc6ICdwdCd9LFxyXG4gICAgJ3htbCc6IHsnZm9ybWF0JzogJ0V4dGVuc2libGUgTWFya3VwIExhbmd1YWdlJywgJ2ljb24nOiAnZmlsZS13b3JkJywgJ3VuaXQnOiAncHQnfSxcclxuICAgICd4cHMnOiB7J2Zvcm1hdCc6ICdYTUwgUGFwZXIgU3BlY2lmaWNhdGlvbicsICdpY29uJzogJ2ZpbGUtd29yZCcsICd1bml0JzogJ3B0J30sXHJcbiAgICAnZHhmJzogeydmb3JtYXQnOiAnQXV0b0NBRCBEcmF3aW5nIEZpbGUgRm9ybWF0JywgJ2ljb24nOiAnZmlsZS1pbWFnZScsICd1bml0JzogJ3B4J30sXHJcbiAgICAnZHdnJzogeydmb3JtYXQnOiAnQXV0b0NBRCBEcmF3aW5nIEZpbGUgRm9ybWF0JywgJ2ljb24nOiAnZmlsZS1pbWFnZScsICd1bml0JzogJ3B4J30sXHJcbiAgICAnYm1wJzogeydmb3JtYXQnOiAnQml0bWFwIFBpY3R1cmUnLCAnaWNvbic6ICdmaWxlLWltYWdlJywgJ3VuaXQnOiAncHgnfSxcclxuICAgICdnaWYnOiB7J2Zvcm1hdCc6ICdHcmFwaGljcyBJbnRlcmNoYW5nZSBGb3JtYXQnLCAnaWNvbic6ICdmaWxlLWltYWdlJywgJ3VuaXQnOiAncHgnfSxcclxuICAgICdqcGcnOiB7J2Zvcm1hdCc6ICdKb2ludCBQaG90b2dyYXBoaWMgRXhwZXJ0cyBHcm91cCcsICdpY29uJzogJ2ZpbGUtaW1hZ2UnLCAndW5pdCc6ICdweCd9LFxyXG4gICAgJ2pwZSc6IHsnZm9ybWF0JzogJ0pvaW50IFBob3RvZ3JhcGhpYyBFeHBlcnRzIEdyb3VwJywgJ2ljb24nOiAnZmlsZS1pbWFnZScsICd1bml0JzogJ3B4J30sXHJcbiAgICAnanBlZyc6IHsnZm9ybWF0JzogJ0pvaW50IFBob3RvZ3JhcGhpYyBFeHBlcnRzIEdyb3VwJywgJ2ljb24nOiAnZmlsZS1pbWFnZScsICd1bml0JzogJ3B4J30sXHJcbiAgICAnamZpZic6IHsnZm9ybWF0JzogJ0pvaW50IFBob3RvZ3JhcGhpYyBFeHBlcnRzIEdyb3VwJywgJ2ljb24nOiAnZmlsZS1pbWFnZScsICd1bml0JzogJ3B4J30sXHJcbiAgICAncG5nJzogeydmb3JtYXQnOiAnUG9ydGFibGUgTmV0d29yayBHcmFwaGljcycsICdpY29uJzogJ2ZpbGUtaW1hZ2UnLCAndW5pdCc6ICdweCd9LFxyXG4gICAgJ3RpZmYnOiB7J2Zvcm1hdCc6ICdUYWdnZWQgSW1hZ2UgRmlsZSBGb3JtYXQnLCAnaWNvbic6ICdmaWxlLWltYWdlJywgJ3VuaXQnOiAncHgnfSxcclxuICAgICd0aWYnOiB7J2Zvcm1hdCc6ICdUYWdnZWQgSW1hZ2UgRmlsZSBGb3JtYXQnLCAnaWNvbic6ICdmaWxlLWltYWdlJywgJ3VuaXQnOiAncHgnfSxcclxuICAgICdwc2QnOiB7J2Zvcm1hdCc6ICdUYWdnZWQgSW1hZ2UgRmlsZSBGb3JtYXQnLCAnaWNvbic6ICdmaWxlLWltYWdlJywgJ3VuaXQnOiAncHgnfSxcclxuICAgICdzdmcnOiB7J2Zvcm1hdCc6ICdUYWdnZWQgSW1hZ2UgRmlsZSBGb3JtYXQnLCAnaWNvbic6ICdmaWxlLWltYWdlJywgJ3VuaXQnOiAncHgnfSxcclxuICAgICdqcDInOiB7J2Zvcm1hdCc6ICdUYWdnZWQgSW1hZ2UgRmlsZSBGb3JtYXQnLCAnaWNvbic6ICdmaWxlLWltYWdlJywgJ3VuaXQnOiAncHgnfSxcclxuICAgICdlcHViJzogeydmb3JtYXQnOiAnRWxlY3Ryb25pYyBQdWJsaWNhdGlvbicsICdpY29uJzogJ2ZpbGUtcGRmJywgJ3VuaXQnOiAncHQnfSxcclxuICAgICdpY28nOiB7J2Zvcm1hdCc6ICdXaW5kb3dzIEljb24nLCAnaWNvbic6ICdmaWxlLWltYWdlJywgJ3VuaXQnOiAncHgnfSxcclxuICAgICd3ZWJwJzogeydmb3JtYXQnOiAnQ29tcHJlc3NlZCBJbWFnZScsICdpY29uJzogJ2ZpbGUtaW1hZ2UnLCAndW5pdCc6ICdweCd9LFxyXG4gICAgJ21vYmknOiB7J2Zvcm1hdCc6ICdNb2JpcG9ja2V0IGVCb29rJywgJ2ljb24nOiAnZmlsZS1wZGYnLCAndW5pdCc6ICdwdCd9LFxyXG4gICAgJ3RleCc6IHsnZm9ybWF0JzogJ0xhVGVYIFNvdXJjZSBEb2N1bWVudCcsICdpY29uJzogJ2ZpbGUtcGRmJywgJ3VuaXQnOiAncHQnfSxcclxuICAgICdkanZ1Jzogeydmb3JtYXQnOiAnTXVsdGktTGF5ZXIgUmFzdGVyIEltYWdlJywgJ2ljb24nOiAnZmlsZS1hbHQnLCAndW5pdCc6ICdwdCd9LFxyXG4gICAgJ3Vua25vd24nOiB7J2Zvcm1hdCc6ICdUaGlzIGZvcm1hdCBpcyBub3Qgc3VwcG9ydGVkJywgJ2ljb24nOiAnZmlsZSd9LFxyXG4gIH07XHJcblxyXG4gIHB1YmxpYyBzdGF0aWMgZmluZChmaWxlbmFtZTogc3RyaW5nLCBpc0RpcmVjdG9yeTogYm9vbGVhbikge1xyXG4gICAgaWYgKGZpbGVuYW1lICYmICFpc0RpcmVjdG9yeSkge1xyXG4gICAgICBjb25zdCBzdHJpbmdzID0gZmlsZW5hbWUuc3BsaXQoJy4nKTtcclxuICAgICAgY29uc3QgbmFtZSA9IHN0cmluZ3MucG9wKCkudG9Mb3dlckNhc2UoKTtcclxuICAgICAgaWYgKHR5cGVvZiBGaWxlVXRpbC5tYXBbbmFtZV0gPT09IFwidW5kZWZpbmVkXCIpIHtcclxuICAgICAgICByZXR1cm4gc3RyaW5ncy5sZW5ndGggPiAwID8gRmlsZVV0aWwubWFwWyd1bmtub3duJ10gOiBGaWxlVXRpbC5tYXBbJ2ZvbGRlciddO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHJldHVybiBGaWxlVXRpbC5tYXBbbmFtZV07XHJcbiAgICAgIH1cclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHJldHVybiBGaWxlVXRpbC5tYXBbJ2ZvbGRlciddO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIEZpbGVTZXJ2aWNlIHtcclxuXHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgfVxyXG59XHJcbiJdfQ==