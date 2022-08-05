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
var TypedFileCredentials = /** @class */ (function () {
    function TypedFileCredentials(guid, fileType, password) {
        this.guid = guid;
        this.fileType = fileType;
        this.password = password;
    }
    return TypedFileCredentials;
}());
export { TypedFileCredentials };
if (false) {
    /** @type {?} */
    TypedFileCredentials.prototype.guid;
    /** @type {?} */
    TypedFileCredentials.prototype.password;
    /** @type {?} */
    TypedFileCredentials.prototype.fileType;
}
var SaveFile = /** @class */ (function (_super) {
    tslib_1.__extends(SaveFile, _super);
    function SaveFile(guid, password, content, pageNumber) {
        var _this = _super.call(this, guid, password) || this;
        _this.content = content;
        _this.pageNumber = pageNumber;
        return _this;
    }
    return SaveFile;
}(FileCredentials));
export { SaveFile };
if (false) {
    /** @type {?} */
    SaveFile.prototype.content;
    /** @type {?} */
    SaveFile.prototype.pageNumber;
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
    FileDescription.prototype.fileType;
    /** @type {?} */
    FileDescription.prototype.pages;
    /** @type {?} */
    FileDescription.prototype.printAllowed;
    /** @type {?} */
    FileDescription.prototype.showGridLines;
    /** @type {?} */
    FileDescription.prototype.thumbnails;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmlsZS5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdyb3VwZG9jcy5leGFtcGxlcy5hbmd1bGFyL2NvbW1vbi1jb21wb25lbnRzLyIsInNvdXJjZXMiOlsibGliL2ZpbGUuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBO0lBQUE7SUFPQSxDQUFDO0lBQUQsZ0JBQUM7QUFBRCxDQUFDLEFBUEQsSUFPQzs7OztJQU5DLHlCQUFhOztJQUNiLDBCQUFjOztJQUNkLDBCQUFjOztJQUNkLDJCQUFlOztJQUNmLDJCQUFlOztJQUNmLDZCQUFrQjs7QUFHcEI7SUFBQTtJQUdBLENBQUM7SUFBRCxrQkFBQztBQUFELENBQUMsQUFIRCxJQUdDOzs7O0lBRkMsaUNBQW1COztJQUNuQiw0QkFBYzs7QUFHaEI7SUFJRSx5QkFBWSxJQUFZLEVBQUUsUUFBZ0I7UUFDeEMsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7UUFDakIsSUFBSSxDQUFDLFFBQVEsR0FBRyxRQUFRLENBQUM7SUFDM0IsQ0FBQztJQUNILHNCQUFDO0FBQUQsQ0FBQyxBQVJELElBUUM7Ozs7SUFQQywrQkFBYTs7SUFDYixtQ0FBaUI7O0FBUW5CO0lBS0UsOEJBQVksSUFBWSxFQUFFLFFBQWdCLEVBQUUsUUFBZ0I7UUFDMUQsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7UUFDakIsSUFBSSxDQUFDLFFBQVEsR0FBRyxRQUFRLENBQUM7UUFDekIsSUFBSSxDQUFDLFFBQVEsR0FBRyxRQUFRLENBQUM7SUFDM0IsQ0FBQztJQUNILDJCQUFDO0FBQUQsQ0FBQyxBQVZELElBVUM7Ozs7SUFUQyxvQ0FBYTs7SUFDYix3Q0FBaUI7O0lBQ2pCLHdDQUFpQjs7QUFVbkI7SUFBOEIsb0NBQWU7SUFJM0Msa0JBQVksSUFBWSxFQUFFLFFBQWdCLEVBQUUsT0FBZSxFQUFFLFVBQWtCO1FBQS9FLFlBQ0Usa0JBQU0sSUFBSSxFQUFFLFFBQVEsQ0FBQyxTQUd0QjtRQUZDLEtBQUksQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDO1FBQ3ZCLEtBQUksQ0FBQyxVQUFVLEdBQUcsVUFBVSxDQUFDOztJQUMvQixDQUFDO0lBQ0gsZUFBQztBQUFELENBQUMsQUFURCxDQUE4QixlQUFlLEdBUzVDOzs7O0lBUkMsMkJBQWdCOztJQUNoQiw4QkFBbUI7O0FBU3JCO0lBQUE7UUFJRSxpQkFBWSxHQUFHLElBQUksQ0FBQztJQUd0QixDQUFDO0lBQUQsc0JBQUM7QUFBRCxDQUFDLEFBUEQsSUFPQzs7OztJQU5DLCtCQUFhOztJQUNiLG1DQUFpQjs7SUFDakIsZ0NBQW1COztJQUNuQix1Q0FBb0I7O0lBQ3BCLHdDQUF1Qjs7SUFDdkIscUNBQXdCOztBQUcxQjtJQUFBO0lBTUEsQ0FBQztJQUFELGdCQUFDO0FBQUQsQ0FBQyxBQU5ELElBTUM7Ozs7SUFMQyx5QkFBYTs7SUFDYix5QkFBYTs7SUFDYiw4QkFBbUI7O0lBQ25CLHlCQUFhOztJQUNiLGdDQUFxQjs7QUFHdkI7SUFBQTtJQVFBLENBQUM7SUFQUSxvQkFBVSxHQUFHLEdBQUcsQ0FBQztJQUNqQixzQkFBWSxHQUFHLEdBQUcsQ0FBQztJQUNuQixtQkFBUyxHQUFHLEdBQUcsQ0FBQztJQUNoQixrQkFBUSxHQUFHLEdBQUcsQ0FBQztJQUNmLGlCQUFPLEdBQUcsR0FBRyxDQUFDO0lBQ2Qsa0JBQVEsR0FBRyxHQUFHLENBQUM7SUFDZiw2QkFBbUIsR0FBRyxHQUFHLENBQUM7SUFDbkMsZ0JBQUM7Q0FBQSxBQVJELElBUUM7U0FSWSxTQUFTOzs7SUFDcEIscUJBQXdCOztJQUN4Qix1QkFBMEI7O0lBQzFCLG9CQUF1Qjs7SUFDdkIsbUJBQXNCOztJQUN0QixrQkFBcUI7O0lBQ3JCLG1CQUFzQjs7SUFDdEIsOEJBQWlDOztBQUduQztJQUFBO0lBMkRBLENBQUM7Ozs7O0lBMURlLHNCQUFnQjs7OztJQUE5QixVQUErQixLQUFLOztZQUM1QixLQUFLLEdBQUc7WUFDWixDQUFDLEVBQUUsQ0FBQztZQUNKLENBQUMsRUFBRSxDQUFDO1NBQ0w7O1lBQ0ssTUFBTSxHQUFjLG1CQUFXLE1BQU0sQ0FBQyxLQUFLLEVBQUE7O1lBQzNDLEVBQUUsR0FBRyxLQUFLLElBQUksTUFBTTtRQUMxQixJQUFJLEVBQUUsQ0FBQyxLQUFLLElBQUksTUFBTSxDQUFDLEtBQUssSUFBSSxNQUFNLENBQUMsT0FBTyxJQUFJLENBQUMsRUFBRSxDQUFDLE9BQU8sSUFBSSxFQUFFLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLEVBQUUsRUFBRSxLQUFLOzs7Z0JBQ3ZHLEtBQUssR0FBRyxPQUFPLEVBQUUsQ0FBQyxLQUFLLEtBQUssV0FBVyxJQUFJLEVBQUUsQ0FBQyxLQUFLLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsS0FBSzs7Z0JBQ25GLEtBQUssR0FBRyxPQUFPLEVBQUUsQ0FBQyxLQUFLLEtBQUssV0FBVyxJQUFJLEVBQUUsQ0FBQyxLQUFLLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsS0FBSzs7Z0JBQ25GLFNBQU8sR0FBRyxPQUFPLE1BQU0sQ0FBQyxPQUFPLEtBQUssV0FBVyxJQUFJLE1BQU0sQ0FBQyxPQUFPLEtBQUssQ0FBQzs7Z0JBQ3ZFLFNBQU8sR0FBRyxPQUFPLE1BQU0sQ0FBQyxPQUFPLEtBQUssV0FBVyxJQUFJLE1BQU0sQ0FBQyxPQUFPLEtBQUssQ0FBQztZQUM3RSxLQUFLLENBQUMsQ0FBQyxHQUFHLEtBQUssQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQU8sQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUMzRSxLQUFLLENBQUMsQ0FBQyxHQUFHLEtBQUssQ0FB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UUFBUSxFQUFFLHdCQUF3QixFQUFFLE1BQU0sRUFBRSxVQUFVLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBQztRQUM5RSxLQUFLLEVBQUUsRUFBQyxRQUFRLEVBQUUsY0FBYyxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBQztRQUNyRSxNQUFNLEVBQUUsRUFBQyxRQUFRLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFDO1FBQzFFLE1BQU0sRUFBRSxFQUFDLFFBQVEsRUFBRSxrQkFBa0IsRUFBRSxNQUFNLEVBQUUsVUFBVSxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUM7UUFDeEUsS0FBSyxFQUFFLEVBQUMsUUFBUSxFQUFFLHVCQUF1QixFQUFFLE1BQU0sRUFBRSxVQUFVLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBQztRQUM1RSxNQUFNLEVBQUUsRUFBQyxRQUFRLEVBQUUsMEJBQTBCLEVBQUUsTUFBTSxFQUFFLFVBQVUsRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFDO1FBQ2hGLFNBQVMsRUFBRSxFQUFDLFFBQVEsRUFBRSw4QkFBOEIsRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFDO0tBQ3RFLENBQUM7SUFlSixlQUFDO0NBQUEsQUEzRkQsSUEyRkM7U0EzRlksUUFBUTs7O0lBQ25CLGFBMkVFOztBQWlCSjtJQUVFO0lBQ0EsQ0FBQztJQUNILGtCQUFDO0FBQUQsQ0FBQyxBQUpELElBSUMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY2xhc3MgUGFnZU1vZGVsIHtcbiAgZGF0YTogc3RyaW5nO1xuICBhbmdsZTogbnVtYmVyO1xuICB3aWR0aDogbnVtYmVyO1xuICBoZWlnaHQ6IG51bWJlcjtcbiAgbnVtYmVyOiBudW1iZXI7XG4gIGVkaXRhYmxlOiBib29sZWFuO1xufVxuXG5leHBvcnQgY2xhc3MgUm90YXRlZFBhZ2Uge1xuICBwYWdlTnVtYmVyOiBudW1iZXI7XG4gIGFuZ2xlOiBudW1iZXI7XG59XG5cbmV4cG9ydCBjbGFzcyBGaWxlQ3JlZGVudGlhbHMge1xuICBndWlkOiBzdHJpbmc7XG4gIHBhc3N3b3JkOiBzdHJpbmc7XG5cbiAgY29uc3RydWN0b3IoZ3VpZDogc3RyaW5nLCBwYXNzd29yZDogc3RyaW5nKSB7XG4gICAgdGhpcy5ndWlkID0gZ3VpZDtcbiAgICB0aGlzLnBhc3N3b3JkID0gcGFzc3dvcmQ7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIFR5cGVkRmlsZUNyZWRlbnRpYWxzIHtcbiAgZ3VpZDogc3RyaW5nO1xuICBwYXNzd29yZDogc3RyaW5nO1xuICBmaWxlVHlwZTogc3RyaW5nO1xuXG4gIGNvbnN0cnVjdG9yKGd1aWQ6IHN0cmluZywgZmlsZVR5cGU6IHN0cmluZywgcGFzc3dvcmQ6IHN0cmluZykge1xuICAgIHRoaXMuZ3VpZCA9IGd1aWQ7XG4gICAgdGhpcy5maWxlVHlwZSA9IGZpbGVUeXBlO1xuICAgIHRoaXMucGFzc3dvcmQgPSBwYXNzd29yZDtcbiAgfVxufVxuXG5cbmV4cG9ydCBjbGFzcyBTYXZlRmlsZSBleHRlbmRzIEZpbGVDcmVkZW50aWFscyB7XG4gIGNvbnRlbnQ6IHN0cmluZztcbiAgcGFnZU51bWJlcjogbnVtYmVyO1xuXG4gIGNvbnN0cnVjdG9yKGd1aWQ6IHN0cmluZywgcGFzc3dvcmQ6IHN0cmluZywgY29udGVudDogc3RyaW5nLCBwYWdlTnVtYmVyOiBudW1iZXIpIHtcbiAgICBzdXBlcihndWlkLCBwYXNzd29yZCk7XG4gICAgdGhpcy5jb250ZW50ID0gY29udGVudDtcbiAgICB0aGlzLnBhZ2VOdW1iZXIgPSBwYWdlTnVtYmVyO1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBGaWxlRGVzY3JpcHRpb24ge1xuICBndWlkOiBzdHJpbmc7XG4gIGZpbGVUeXBlOiBzdHJpbmc7XG4gIHBhZ2VzOiBQYWdlTW9kZWxbXTtcbiAgcHJpbnRBbGxvd2VkID0gdHJ1ZTtcbiAgc2hvd0dyaWRMaW5lczogYm9vbGVhbjtcbiAgdGh1bWJuYWlsczogUGFnZU1vZGVsW107XG59XG5cbmV4cG9ydCBjbGFzcyBGaWxlTW9kZWwge1xuICBndWlkOiBzdHJpbmc7XG4gIG5hbWU6IHN0cmluZztcbiAgZGlyZWN0b3J5OiBib29sZWFuO1xuICBzaXplOiBudW1iZXI7XG4gIGlzRGlyZWN0b3J5OiBib29sZWFuO1xufVxuXG5leHBvcnQgY2xhc3MgSHR0cEVycm9yIHtcbiAgc3RhdGljIEJhZFJlcXVlc3QgPSA0MDA7XG4gIHN0YXRpYyBVbmF1dGhvcml6ZWQgPSA0MDE7XG4gIHN0YXRpYyBGb3JiaWRkZW4gPSA0MDM7XG4gIHN0YXRpYyBOb3RGb3VuZCA9IDQwNDtcbiAgc3RhdGljIFRpbWVPdXQgPSA0MDg7XG4gIHN0YXRpYyBDb25mbGljdCA9IDQwOTtcbiAgc3RhdGljIEludGVybmFsU2VydmVyRXJyb3IgPSA1MDA7XG59XG5cbmV4cG9ydCBjbGFzcyBVdGlscyB7XG4gIHB1YmxpYyBzdGF0aWMgZ2V0TW91c2VQb3NpdGlvbihldmVudCkge1xuICAgIGNvbnN0IG1vdXNlID0ge1xuICAgICAgeDogMCxcbiAgICAgIHk6IDBcbiAgICB9O1xuICAgIGNvbnN0IHdFdmVudDogRHJhZ0V2ZW50ID0gPERyYWdFdmVudD53aW5kb3cuZXZlbnQ7XG4gICAgY29uc3QgZXYgPSBldmVudCB8fCB3RXZlbnQ7IC8vTW96IHx8IElFXG4gICAgaWYgKGV2LnBhZ2VYIHx8IHdFdmVudC5wYWdlWCB8fCB3RXZlbnQuc2NyZWVuWCB8fCAoZXYudG91Y2hlcyAmJiBldi50b3VjaGVzWzBdICYmIGV2LnRvdWNoZXNbMF0ucGFnZVgpKSB7IC8vTW96XG4gICAgICBjb25zdCBwYWdlWCA9IHR5cGVvZiBldi5wYWdlWCAhPT0gXCJ1bmRlZmluZWRcIiAmJiBldi5wYWdlWCAhPT0gMCA/IGV2LnBhZ2VYIDogd0V2ZW50LnBhZ2VYO1xuICAgICAgY29uc3QgcGFnZVkgPSB0eXBlb2YgZXYucGFnZVkgIT09IFwidW5kZWZpbmVkXCIgJiYgZXYucGFnZVkgIT09IDAgPyBldi5wYWdlWSA6IHdFdmVudC5wYWdlWTtcbiAgICAgIGNvbnN0IHNjcmVlblggPSB0eXBlb2Ygd0V2ZW50LnNjcmVlblggIT09IFwidW5kZWZpbmVkXCIgJiYgd0V2ZW50LnNjcmVlblkgIT09IDA7XG4gICAgICBjb25zdCBzY3JlZW5ZID0gdHlwZW9mIHdFdmVudC5zY3JlZW5ZICE9PSBcInVuZGVmaW5lZFwiICYmIHdFdmVudC5zY3JlZW5ZICE9PSAwO1xuICAgICAgbW91c2UueCA9IHBhZ2VYID8gcGFnZVggOiAoc2NyZWVuWCA/IHdFdmVudC5zY3JlZW5YIDogZXYudG91Y2hlc1swXS5wYWdlWCk7XG4gICAgICBtb3VzZS55ID0gcGFnZVkgPyBwYWdlWSA6IChzY3JlZW5ZID8gd0V2ZW50LnNjcmVlblkgOiBldi50b3VjaGVzWzBdLnBhZ2VZKTtcbiAgICB9IGVsc2UgaWYgKGV2LmNsaWVudFgpIHsgLy9JRVxuICAgICAgbW91c2UueCA9IGV2LmNsaWVudFggKyBkb2N1bWVudC5ib2R5LnNjcm9sbExlZnQ7XG4gICAgICBtb3VzZS55ID0gZXYuY2xpZW50WSArIGRvY3VtZW50LmJvZHkuc2Nyb2xsVG9wO1xuICAgIH1cbiAgICByZXR1cm4gbW91c2U7XG4gIH1cblxuICBwdWJsaWMgc3RhdGljIHRvUmdiKGNvbG9yOiBzdHJpbmcpIHtcbiAgICBjb25zdCByZXN1bHQgPSAvXiM/KFthLWZcXGRdezJ9KShbYS1mXFxkXXsyfSkoW2EtZlxcZF17Mn0pJC9pLmV4ZWMoY29sb3IpO1xuICAgIGlmIChyZXN1bHQpIHtcbiAgICAgIGNvbnN0IHIgPSBwYXJzZUludChyZXN1bHRbMV0sIDE2KTtcbiAgICAgIGNvbnN0IGcgPSBwYXJzZUludChyZXN1bHRbMl0sIDE2KTtcbiAgICAgIGNvbnN0IGIgPSBwYXJzZUludChyZXN1bHRbM10sIDE2KTtcbiAgICAgIHJldHVybiByZXN1bHQgPyAncmdiKCcgKyByICsgJywnICsgZyArICcsJyArIGIgKyAnKScgOiAnJztcbiAgICB9XG4gICAgcmV0dXJuIGNvbG9yO1xuICB9XG5cbiAgcHVibGljIHN0YXRpYyB0b0hleChjb2xvcjogc3RyaW5nKSB7XG4gICAgLy8gY2hlY2sgaWYgY29sb3IgaXMgc3RhbmRhcmQgaGV4IHZhbHVlXG4gICAgaWYgKGNvbG9yLm1hdGNoKC9bMC05QS1GXXs2fXxbMC05QS1GXXszfSQvaSkpIHtcbiAgICAgIHJldHVybiAoY29sb3IuY2hhckF0KDApID09PSBcIiNcIikgPyBjb2xvciA6IChcIiNcIiArIGNvbG9yKTtcbiAgICAgIC8vIGNoZWNrIGlmIGNvbG9yIGlzIFJHQiB2YWx1ZSAtPiBjb252ZXJ0IHRvIGhleFxuICAgIH0gZWxzZSBpZiAoY29sb3IubWF0Y2goL15yZ2JcXChcXHMqKFxcZHsxLDN9KVxccyosXFxzKihcXGR7MSwzfSlcXHMqLFxccyooXFxkezEsM30pXFxzKlxcKSQvKSkge1xuICAgICAgY29uc3QgYyA9IChbcGFyc2VJbnQoUmVnRXhwLiQxLCAxMCksIHBhcnNlSW50KFJlZ0V4cC4kMiwgMTApLCBwYXJzZUludChSZWdFeHAuJDMsIDEwKV0pLFxuICAgICAgICBwYWQgPSBmdW5jdGlvbiAoc3RyKSB7XG4gICAgICAgICAgaWYgKHN0ci5sZW5ndGggPCAyKSB7XG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMCwgbGVuID0gMiAtIHN0ci5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xuICAgICAgICAgICAgICBzdHIgPSAnMCcgKyBzdHI7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiBzdHI7XG4gICAgICAgIH07XG4gICAgICBpZiAoYy5sZW5ndGggPT09IDMpIHtcbiAgICAgICAgY29uc3QgciA9IHBhZChjWzBdLnRvU3RyaW5nKDE2KSksXG4gICAgICAgICAgZyA9IHBhZChjWzFdLnRvU3RyaW5nKDE2KSksXG4gICAgICAgICAgYiA9IHBhZChjWzJdLnRvU3RyaW5nKDE2KSk7XG4gICAgICAgIHJldHVybiAnIycgKyByICsgZyArIGI7XG4gICAgICB9XG4gICAgICAvLyBlbHNlIGRvIG5vdGhpbmdcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuICcnO1xuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgRmlsZVV0aWwge1xuICBwdWJsaWMgc3RhdGljIG1hcCA9IHtcbiAgICAnZm9sZGVyJzogeydmb3JtYXQnOiAnJywgJ2ljb24nOiAnZm9sZGVyJ30sXG4gICAgJ3BkZic6IHsnZm9ybWF0JzogJ1BvcnRhYmxlIERvY3VtZW50IEZvcm1hdCcsICdpY29uJzogJ2ZpbGUtcGRmJywgJ3VuaXQnOiAncHQnfSxcbiAgICAnZG9jJzogeydmb3JtYXQnOiAnTWljcm9zb2Z0IFdvcmQnLCAnaWNvbic6ICdmaWxlLXdvcmQnLCAndW5pdCc6ICdwdCd9LFxuICAgICdkb2N4Jzogeydmb3JtYXQnOiAnTWljcm9zb2Z0IFdvcmQnLCAnaWNvbic6ICdmaWxlLXdvcmQnLCAndW5pdCc6ICdwdCd9LFxuICAgICdkb2NtJzogeydmb3JtYXQnOiAnTWljcm9zb2Z0IFdvcmQnLCAnaWNvbic6ICdmaWxlLXdvcmQnLCAndW5pdCc6ICdwdCd9LFxuICAgICdkb3QnOiB7J2Zvcm1hdCc6ICdNaWNyb3NvZnQgV29yZCcsICdpY29uJzogJ2ZpbGUtd29yZCcsICd1bml0JzogJ3B0J30sXG4gICAgJ2RvdHgnOiB7J2Zvcm1hdCc6ICdNaWNyb3NvZnQgV29yZCcsICdpY29uJzogJ2ZpbGUtd29yZCcsICd1bml0JzogJ3B0J30sXG4gICAgJ2RvdG0nOiB7J2Zvcm1hdCc6ICdNaWNyb3NvZnQgV29yZCcsICdpY29uJzogJ2ZpbGUtd29yZCcsICd1bml0JzogJ3B0J30sXG4gICAgJ3hscyc6IHsnZm9ybWF0JzogJ01pY3Jvc29mdCBFeGNlbCcsICdpY29uJzogJ2ZpbGUtZXhjZWwnLCAndW5pdCc6ICdweCd9LFxuICAgICd4bHN4Jzogeydmb3JtYXQnOiAnTWljcm9zb2Z0IEV4Y2VsJywgJ2ljb24nOiAnZmlsZS1leGNlbCcsICd1bml0JzogJ3B4J30sXG4gICAgJ3hsc20nOiB7J2Zvcm1hdCc6ICdNaWNyb3NvZnQgRXhjZWwnLCAnaWNvbic6ICdmaWxlLWV4Y2VsJywgJ3VuaXQnOiAncHgnfSxcbiAgICAneGxzYic6IHsnZm9ybWF0JzogJ01pY3Jvc29mdCBFeGNlbCcsICdpY29uJzogJ2ZpbGUtZXhjZWwnLCAndW5pdCc6ICdweCd9LFxuICAgICd4bHMyMDAzJzogeydmb3JtYXQnOiAnTWljcm9zb2Z0IEV4Y2VsJywgJ2ljb24nOiAnZmlsZS1leGNlbCcsICd1bml0JzogJ3B4J30sXG4gICAgJ3hsdHgnOiB7J2Zvcm1hdCc6ICdNaWNyb3NvZnQgRXhjZWwnLCAnaWNvbic6ICdmaWxlLWV4Y2VsJywgJ3VuaXQnOiAncHgnfSxcbiAgICAneGx0bSc6IHsnZm9ybWF0JzogJ01pY3Jvc29mdCBFeGNlbCcsICdpY29uJzogJ2ZpbGUtZXhjZWwnLCAndW5pdCc6ICdweCd9LFxuICAgICdwcHQnOiB7J2Zvcm1hdCc6ICdNaWNyb3NvZnQgUG93ZXJQb2ludCcsICdpY29uJzogJ2ZpbGUtcG93ZXJwb2ludCcsICd1bml0JzogJ3B0J30sXG4gICAgJ3BwdHgnOiB7J2Zvcm1hdCc6ICdNaWNyb3NvZnQgUG93ZXJQb2ludCcsICdpY29uJzogJ2ZpbGUtcG93ZXJwb2ludCcsICd1bml0JzogJ3B0J30sXG4gICAgJ3Bwcyc6IHsnZm9ybWF0JzogJ01pY3Jvc29mdCBQb3dlclBvaW50JywgJ2ljb24nOiAnZmlsZS1wb3dlcnBvaW50JywgJ3VuaXQnOiAncHQnfSxcbiAgICAncHBzeCc6IHsnZm9ybWF0JzogJ01pY3Jvc29mdCBQb3dlclBvaW50JywgJ2ljb24nOiAnZmlsZS1wb3dlcnBvaW50JywgJ3VuaXQnOiAncHQnfSxcbiAgICAndnNkJzogeydmb3JtYXQnOiAnTWljcm9zb2Z0IFZpc2lvJywgJ2ljb24nOiAnZmlsZS1jb2RlJywgJ3VuaXQnOiAncHgnfSxcbiAgICAndmR4Jzogeydmb3JtYXQnOiAnTWljcm9zb2Z0IFZpc2lvJywgJ2ljb24nOiAnZmlsZS1jb2RlJywgJ3VuaXQnOiAncHgnfSxcbiAgICAndnNzJzogeydmb3JtYXQnOiAnTWljcm9zb2Z0IFZpc2lvJywgJ2ljb24nOiAnZmlsZS1jb2RlJywgJ3VuaXQnOiAncHgnfSxcbiAgICAndnN4Jzogeydmb3JtYXQnOiAnTWljcm9zb2Z0IFZpc2lvJywgJ2ljb24nOiAnZmlsZS1jb2RlJywgJ3VuaXQnOiAncHgnfSxcbiAgICAndnN0Jzogeydmb3JtYXQnOiAnTWljcm9zb2Z0IFZpc2lvJywgJ2ljb24nOiAnZmlsZS1jb2RlJywgJ3VuaXQnOiAncHgnfSxcbiAgICAndnR4Jzogeydmb3JtYXQnOiAnTWljcm9zb2Z0IFZpc2lvJywgJ2ljb24nOiAnZmlsZS1jb2RlJywgJ3VuaXQnOiAncHgnfSxcbiAgICAndnNkeCc6IHsnZm9ybWF0JzogJ01pY3Jvc29mdCBWaXNpbycsICdpY29uJzogJ2ZpbGUtY29kZScsICd1bml0JzogJ3B4J30sXG4gICAgJ3Zkdyc6IHsnZm9ybWF0JzogJ01pY3Jvc29mdCBWaXNpbycsICdpY29uJzogJ2ZpbGUtY29kZScsICd1bml0JzogJ3B4J30sXG4gICAgJ3ZzdHgnOiB7J2Zvcm1hdCc6ICdNaWNyb3NvZnQgVmlzaW8nLCAnaWNvbic6ICdmaWxlLWNvZGUnLCAndW5pdCc6ICdweCd9LFxuICAgICd2c3N4Jzogeydmb3JtYXQnOiAnTWljcm9zb2Z0IFZpc2lvJywgJ2ljb24nOiAnZmlsZS1jb2RlJywgJ3VuaXQnOiAncHgnfSxcbiAgICAnbXBwJzogeydmb3JtYXQnOiAnTWljcm9zb2Z0IFByb2plY3QnLCAnaWNvbic6ICdmaWxlLWFsdCcsICd1bml0JzogJ3B0J30sXG4gICAgJ21wdCc6IHsnZm9ybWF0JzogJ01pY3Jvc29mdCBQcm9qZWN0JywgJ2ljb24nOiAnZmlsZS1hbHQnLCAndW5pdCc6ICdwdCd9LFxuICAgICdtc2cnOiB7J2Zvcm1hdCc6ICdNaWNyb3NvZnQgT3V0bG9vaycsICdpY29uJzogJ2ZpbGUtYWx0JywgJ3VuaXQnOiAncHQnfSxcbiAgICAnZW1sJzogeydmb3JtYXQnOiAnTWljcm9zb2Z0IE91dGxvb2snLCAnaWNvbic6ICdmaWxlLWFsdCcsICd1bml0JzogJ3B0J30sXG4gICAgJ2VtbHgnOiB7J2Zvcm1hdCc6ICdNaWNyb3NvZnQgT3V0bG9vaycsICdpY29uJzogJ2ZpbGUtYWx0JywgJ3VuaXQnOiAncHQnfSxcbiAgICAnb25lJzogeydmb3JtYXQnOiAnTWljcm9zb2Z0IE9uZU5vdGUnLCAnaWNvbic6ICdmaWxlLXdvcmQnLCAndW5pdCc6ICdwdCd9LFxuICAgICdvZHQnOiB7J2Zvcm1hdCc6ICdPcGVuIERvY3VtZW50IFRleHQnLCAnaWNvbic6ICdmaWxlLXdvcmQnLCAndW5pdCc6ICdwdCd9LFxuICAgICdvdHQnOiB7J2Zvcm1hdCc6ICdPcGVuIERvY3VtZW50IFRleHQgVGVtcGxhdGUnLCAnaWNvbic6ICdmaWxlLXdvcmQnLCAndW5pdCc6ICdwdCd9LFxuICAgICdvZHMnOiB7J2Zvcm1hdCc6ICdPcGVuIERvY3VtZW50IFNwcmVhZHNoZWV0JywgJ2ljb24nOiAnZmlsZS1leGNlbCcsICd1bml0JzogJ3B4J30sXG4gICAgJ29kcCc6IHsnZm9ybWF0JzogJ09wZW4gRG9jdW1lbnQgUHJlc2VudGF0aW9uJywgJ2ljb24nOiAnZmlsZS1wb3dlcnBvaW50JywgJ3VuaXQnOiAncHQnfSxcbiAgICAnb3RwJzogeydmb3JtYXQnOiAnT3BlbiBEb2N1bWVudCBQcmVzZW50YXRpb24nLCAnaWNvbic6ICdmaWxlLXBvd2VycG9pbnQnLCAndW5pdCc6ICdwdCd9LFxuICAgICdvdHMnOiB7J2Zvcm1hdCc6ICdPcGVuIERvY3VtZW50IFByZXNlbnRhdGlvbicsICdpY29uJzogJ2ZpbGUtcG93ZXJwb2ludCcsICd1bml0JzogJ3B0J30sXG4gICAgJ3BvdHgnOiB7J2Zvcm1hdCc6ICdPcGVuIERvY3VtZW50IFByZXNlbnRhdGlvbicsICdpY29uJzogJ2ZpbGUtcG93ZXJwb2ludCcsICd1bml0JzogJ3B0J30sXG4gICAgJ3BvdG0nOiB7J2Zvcm1hdCc6ICdPcGVuIERvY3VtZW50IFByZXNlbnRhdGlvbicsICdpY29uJzogJ2ZpbGUtcG93ZXJwb2ludCcsICd1bml0JzogJ3B0J30sXG4gICAgJ3BwdG0nOiB7J2Zvcm1hdCc6ICdPcGVuIERvY3VtZW50IFByZXNlbnRhdGlvbicsICdpY29uJzogJ2ZpbGUtcG93ZXJwb2ludCcsICd1bml0JzogJ3B0J30sXG4gICAgJ3Bwc20nOiB7J2Zvcm1hdCc6ICdPcGVuIERvY3VtZW50IFByZXNlbnRhdGlvbicsICdpY29uJzogJ2ZpbGUtcG93ZXJwb2ludCcsICd1bml0JzogJ3B0J30sXG4gICAgJ3J0Zic6IHsnZm9ybWF0JzogJ1JpY2ggVGV4dCBGb3JtYXQnLCAnaWNvbic6ICdmaWxlLWFsdCcsICd1bml0JzogJ3B0J30sXG4gICAgJ3R4dCc6IHsnZm9ybWF0JzogJ1BsYWluIFRleHQgRmlsZScsICdpY29uJzogJ2ZpbGUtYWx0JywgJ3VuaXQnOiAncHQnfSxcbiAgICAnY3N2Jzogeydmb3JtYXQnOiAnQ29tbWEtU2VwYXJhdGVkIFZhbHVlcycsICdpY29uJzogJ2ZpbGUtZXhjZWwnLCAndW5pdCc6ICdweCd9LFxuICAgICdodG1sJzogeydmb3JtYXQnOiAnSHlwZXJUZXh0IE1hcmt1cCBMYW5ndWFnZScsICdpY29uJzogJ2ZpbGUtd29yZCcsICd1bml0JzogJ3B0J30sXG4gICAgJ21odCc6IHsnZm9ybWF0JzogJ0h5cGVyVGV4dCBNYXJrdXAgTGFuZ3VhZ2UnLCAnaWNvbic6ICdmaWxlLXdvcmQnLCAndW5pdCc6ICdwdCd9LFxuICAgICdtaHRtbCc6IHsnZm9ybWF0JzogJ0h5cGVyVGV4dCBNYXJrdXAgTGFuZ3VhZ2UnLCAnaWNvbic6ICdmaWxlLXdvcmQnLCAndW5pdCc6ICdwdCd9LFxuICAgICd4bWwnOiB7J2Zvcm1hdCc6ICdFeHRlbnNpYmxlIE1hcmt1cCBMYW5ndWFnZScsICdpY29uJzogJ2ZpbGUtd29yZCcsICd1bml0JzogJ3B0J30sXG4gICAgJ3hwcyc6IHsnZm9ybWF0JzogJ1hNTCBQYXBlciBTcGVjaWZpY2F0aW9uJywgJ2ljb24nOiAnZmlsZS13b3JkJywgJ3VuaXQnOiAncHQnfSxcbiAgICAnZHhmJzogeydmb3JtYXQnOiAnQXV0b0NBRCBEcmF3aW5nIEZpbGUgRm9ybWF0JywgJ2ljb24nOiAnZmlsZS1pbWFnZScsICd1bml0JzogJ3B4J30sXG4gICAgJ2R3Zyc6IHsnZm9ybWF0JzogJ0F1dG9DQUQgRHJhd2luZyBGaWxlIEZvcm1hdCcsICdpY29uJzogJ2ZpbGUtaW1hZ2UnLCAndW5pdCc6ICdweCd9LFxuICAgICdibXAnOiB7J2Zvcm1hdCc6ICdCaXRtYXAgUGljdHVyZScsICdpY29uJzogJ2ZpbGUtaW1hZ2UnLCAndW5pdCc6ICdweCd9LFxuICAgICdnaWYnOiB7J2Zvcm1hdCc6ICdHcmFwaGljcyBJbnRlcmNoYW5nZSBGb3JtYXQnLCAnaWNvbic6ICdmaWxlLWltYWdlJywgJ3VuaXQnOiAncHgnfSxcbiAgICAnanBnJzogeydmb3JtYXQnOiAnSm9pbnQgUGhvdG9ncmFwaGljIEV4cGVydHMgR3JvdXAnLCAnaWNvbic6ICdmaWxlLWltYWdlJywgJ3VuaXQnOiAncHgnfSxcbiAgICAnanBlJzogeydmb3JtYXQnOiAnSm9pbnQgUGhvdG9ncmFwaGljIEV4cGVydHMgR3JvdXAnLCAnaWNvbic6ICdmaWxlLWltYWdlJywgJ3VuaXQnOiAncHgnfSxcbiAgICAnanBlZyc6IHsnZm9ybWF0JzogJ0pvaW50IFBob3RvZ3JhcGhpYyBFeHBlcnRzIEdyb3VwJywgJ2ljb24nOiAnZmlsZS1pbWFnZScsICd1bml0JzogJ3B4J30sXG4gICAgJ2pmaWYnOiB7J2Zvcm1hdCc6ICdKb2ludCBQaG90b2dyYXBoaWMgRXhwZXJ0cyBHcm91cCcsICdpY29uJzogJ2ZpbGUtaW1hZ2UnLCAndW5pdCc6ICdweCd9LFxuICAgICdwbmcnOiB7J2Zvcm1hdCc6ICdQb3J0YWJsZSBOZXR3b3JrIEdyYXBoaWNzJywgJ2ljb24nOiAnZmlsZS1pbWFnZScsICd1bml0JzogJ3B4J30sXG4gICAgJ3RpZmYnOiB7J2Zvcm1hdCc6ICdUYWdnZWQgSW1hZ2UgRmlsZSBGb3JtYXQnLCAnaWNvbic6ICdmaWxlLWltYWdlJywgJ3VuaXQnOiAncHgnfSxcbiAgICAndGlmJzogeydmb3JtYXQnOiAnVGFnZ2VkIEltYWdlIEZpbGUgRm9ybWF0JywgJ2ljb24nOiAnZmlsZS1pbWFnZScsICd1bml0JzogJ3B4J30sXG4gICAgJ3BzZCc6IHsnZm9ybWF0JzogJ1RhZ2dlZCBJbWFnZSBGaWxlIEZvcm1hdCcsICdpY29uJzogJ2ZpbGUtaW1hZ2UnLCAndW5pdCc6ICdweCd9LFxuICAgICdzdmcnOiB7J2Zvcm1hdCc6ICdUYWdnZWQgSW1hZ2UgRmlsZSBGb3JtYXQnLCAnaWNvbic6ICdmaWxlLWltYWdlJywgJ3VuaXQnOiAncHgnfSxcbiAgICAnanAyJzogeydmb3JtYXQnOiAnVGFnZ2VkIEltYWdlIEZpbGUgRm9ybWF0JywgJ2ljb24nOiAnZmlsZS1pbWFnZScsICd1bml0JzogJ3B4J30sXG4gICAgJ2VwdWInOiB7J2Zvcm1hdCc6ICdFbGVjdHJvbmljIFB1YmxpY2F0aW9uJywgJ2ljb24nOiAnZmlsZS1wZGYnLCAndW5pdCc6ICdwdCd9LFxuICAgICdpY28nOiB7J2Zvcm1hdCc6ICdXaW5kb3dzIEljb24nLCAnaWNvbic6ICdmaWxlLWltYWdlJywgJ3VuaXQnOiAncHgnfSxcbiAgICAnd2VicCc6IHsnZm9ybWF0JzogJ0NvbXByZXNzZWQgSW1hZ2UnLCAnaWNvbic6ICdmaWxlLWltYWdlJywgJ3VuaXQnOiAncHgnfSxcbiAgICAnbW9iaSc6IHsnZm9ybWF0JzogJ01vYmlwb2NrZXQgZUJvb2snLCAnaWNvbic6ICdmaWxlLXBkZicsICd1bml0JzogJ3B0J30sXG4gICAgJ3RleCc6IHsnZm9ybWF0JzogJ0xhVGVYIFNvdXJjZSBEb2N1bWVudCcsICdpY29uJzogJ2ZpbGUtcGRmJywgJ3VuaXQnOiAncHQnfSxcbiAgICAnZGp2dSc6IHsnZm9ybWF0JzogJ011bHRpLUxheWVyIFJhc3RlciBJbWFnZScsICdpY29uJzogJ2ZpbGUtYWx0JywgJ3VuaXQnOiAncHQnfSxcbiAgICAndW5rbm93bic6IHsnZm9ybWF0JzogJ1RoaXMgZm9ybWF0IGlzIG5vdCBzdXBwb3J0ZWQnLCAnaWNvbic6ICdmaWxlJ30sXG4gIH07XG5cbiAgcHVibGljIHN0YXRpYyBmaW5kKGZpbGVuYW1lOiBzdHJpbmcsIGlzRGlyZWN0b3J5OiBib29sZWFuKSB7XG4gICAgaWYgKGZpbGVuYW1lICYmICFpc0RpcmVjdG9yeSkge1xuICAgICAgY29uc3Qgc3RyaW5ncyA9IGZpbGVuYW1lLnNwbGl0KCcuJyk7XG4gICAgICBjb25zdCBuYW1lID0gc3RyaW5ncy5wb3AoKS50b0xvd2VyQ2FzZSgpO1xuICAgICAgaWYgKHR5cGVvZiBGaWxlVXRpbC5tYXBbbmFtZV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgcmV0dXJuIHN0cmluZ3MubGVuZ3RoID4gMCA/IEZpbGVVdGlsLm1hcFsndW5rbm93biddIDogRmlsZVV0aWwubWFwWydmb2xkZXInXTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBGaWxlVXRpbC5tYXBbbmFtZV07XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBGaWxlVXRpbC5tYXBbJ2ZvbGRlciddO1xuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgRmlsZVNlcnZpY2Uge1xuXG4gIGNvbnN0cnVjdG9yKCkge1xuICB9XG59XG4iXX0=