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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmlsZS5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdyb3VwZG9jcy5leGFtcGxlcy5hbmd1bGFyL2NvbW1vbi1jb21wb25lbnRzLyIsInNvdXJjZXMiOlsibGliL2ZpbGUuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBO0lBQUE7SUFPQSxDQUFDO0lBQUQsZ0JBQUM7QUFBRCxDQUFDLEFBUEQsSUFPQzs7OztJQU5DLHlCQUFhOztJQUNiLDBCQUFjOztJQUNkLDBCQUFjOztJQUNkLDJCQUFlOztJQUNmLDJCQUFlOztJQUNmLDZCQUFrQjs7QUFHcEI7SUFBQTtJQUdBLENBQUM7SUFBRCxrQkFBQztBQUFELENBQUMsQUFIRCxJQUdDOzs7O0lBRkMsaUNBQW1COztJQUNuQiw0QkFBYzs7QUFHaEI7SUFJRSx5QkFBWSxJQUFZLEVBQUUsUUFBZ0I7UUFDeEMsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7UUFDakIsSUFBSSxDQUFDLFFBQVEsR0FBRyxRQUFRLENBQUM7SUFDM0IsQ0FBQztJQUNILHNCQUFDO0FBQUQsQ0FBQyxBQVJELElBUUM7Ozs7SUFQQywrQkFBYTs7SUFDYixtQ0FBaUI7O0FBUW5CO0lBQThCLG9DQUFlO0lBSTNDLGtCQUFZLElBQVksRUFBRSxRQUFnQixFQUFFLE9BQWUsRUFBRSxVQUFrQjtRQUEvRSxZQUNFLGtCQUFNLElBQUksRUFBRSxRQUFRLENBQUMsU0FHdEI7UUFGQyxLQUFJLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQztRQUN2QixLQUFJLENBQUMsVUFBVSxHQUFHLFVBQVUsQ0FBQzs7SUFDL0IsQ0FBQztJQUNILGVBQUM7QUFBRCxDQUFDLEFBVEQsQ0FBOEIsZUFBZSxHQVM1Qzs7OztJQVJDLDJCQUFnQjs7SUFDaEIsOEJBQW1COztBQVNyQjtJQUFBO1FBR0UsaUJBQVksR0FBRyxJQUFJLENBQUM7SUFHdEIsQ0FBQztJQUFELHNCQUFDO0FBQUQsQ0FBQyxBQU5ELElBTUM7Ozs7SUFMQywrQkFBYTs7SUFDYixnQ0FBbUI7O0lBQ25CLHVDQUFvQjs7SUFDcEIsd0NBQXVCOztJQUN2QixxQ0FBd0I7O0FBRzFCO0lBQUE7SUFNQSxDQUFDO0lBQUQsZ0JBQUM7QUFBRCxDQUFDLEFBTkQsSUFNQzs7OztJQUxDLHlCQUFhOztJQUNiLHlCQUFhOztJQUNiLDhCQUFtQjs7SUFDbkIseUJBQWE7O0lBQ2IsZ0NBQXFCOztBQUd2QjtJQUFBO0lBUUEsQ0FBQztJQVBRLG9CQUFVLEdBQUcsR0FBRyxDQUFDO0lBQ2pCLHNCQUFZLEdBQUcsR0FBRyxDQUFDO0lBQ25CLG1CQUFTLEdBQUcsR0FBRyxDQUFDO0lBQ2hCLGtCQUFRLEdBQUcsR0FBRyxDQUFDO0lBQ2YsaUJBQU8sR0FBRyxHQUFHLENBQUM7SUFDZCxrQkFBUSxHQUFHLEdBQUcsQ0FBQztJQUNmLDZCQUFtQixHQUFHLEdBQUcsQ0FBQztJQUNuQyxnQkFBQztDQUFBLEFBUkQsSUFRQztTQVJZLFNBQVM7OztJQUNwQixxQkFBd0I7O0lBQ3hCLHVCQUEwQjs7SUFDMUIsb0JBQXVCOztJQUN2QixtQkFBc0I7O0lBQ3RCLGtCQUFxQjs7SUFDckIsbUJBQXNCOztJQUN0Qiw4QkFBaUM7O0FBR25DO0lBQUE7SUEyREEsQ0FBQzs7Ozs7SUExRGUsc0JBQWdCOzs7O0lBQTlCLFVBQStCLEtBQUs7O1lBQzVCLEtBQUssR0FBRztZQUNaLENBQUMsRUFBRSxDQUFDO1lBQ0osQ0FBQyxFQUFFLENBQUM7U0FDTDs7WUFDSyxNQUFNLEdBQWMsbUJBQVcsTUFBTSxDQUFDLEtBQUssRUFBQTs7WUFDM0MsRUFBRSxHQUFHLEtBQUssSUFBSSxNQUFNO1FBQzFCLElBQUksRUFBRSxDQUFDLEtBQUssSUFBSSxNQUFNLENBQUMsS0FBSyxJQUFJLE1BQU0sQ0FBQyxPQUFPLElBQUksQ0FBQyxFQUFFLENBQUMsT0FBTyxJQUFJLEVBQUUsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsRUFBRSxFQUFFLEtBQUs7OztnQkFDdkcsS0FBSyxHQUFHLE9BQU8sRUFBRSxDQUFDLEtBQUssS0FBSyxXQUFXLElBQUksRUFBRSxDQUFDLEtBQUssS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxLQUFLOztnQkFDbkYsS0FBSyxHQUFHLE9BQU8sRUFBRSxDQUFDLEtBQUssS0FBSyxXQUFXLElBQUksRUFBRSxDQUFDLEtBQUssS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxLQUFLOztnQkFDbkYsU0FBTyxHQUFHLE9BQU8sTUFBTSxDQUFDLE9BQU8sS0FBSyxXQUFXLElBQUksTUFBTSxDQUFDLE9BQU8sS0FBSyxDQUFDOztnQkFDdkUsU0FBTyxHQUFHLE9BQU8sTUFBTSxDQUFDLE9BQU8sS0FBSyxXQUFXLElBQUksTUFBTSxDQUFDLE9BQU8sS0FBSyxDQUFDO1lBQzdFLEtBQUssQ0FBQyxDQUFDLEdBQUcsS0FBSyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBTyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQzNFLEtBQUssQ0FBQyxDQUFDLEdBQUcsS0FBSyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBTyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDO1NBQzVFO2FBQU0sSUFBSSxFQUFFLENBQUMsT0FBTyxFQUFFLEVBQUUsSUFBSTtZQUMzQixLQUFLLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxPQUFPLEdBQUcsUUFBUSxDQUFDLElBQUksQ0FBQyxV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USxFQUFFLGtCQUFrQixFQUFFLE1BQU0sRUFBRSxVQUFVLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBQztRQUN4RSxLQUFLLEVBQUUsRUFBQyxRQUFRLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSxFQUFFLFVBQVUsRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFDO1FBQzVFLE1BQU0sRUFBRSxFQUFDLFFBQVEsRUFBRSwwQkFBMEIsRUFBRSxNQUFNLEVBQUUsVUFBVSxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUM7UUFDaEYsU0FBUyxFQUFFLEVBQUMsUUFBUSxFQUFFLDhCQUE4QixFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUM7S0FDdEUsQ0FBQztJQWVKLGVBQUM7Q0FBQSxBQTNGRCxJQTJGQztTQTNGWSxRQUFROzs7SUFDbkIsYUEyRUU7O0FBaUJKO0lBRUU7SUFDQSxDQUFDO0lBQ0gsa0JBQUM7QUFBRCxDQUFDLEFBSkQsSUFJQyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjbGFzcyBQYWdlTW9kZWwge1xyXG4gIGRhdGE6IHN0cmluZztcclxuICBhbmdsZTogbnVtYmVyO1xyXG4gIHdpZHRoOiBudW1iZXI7XHJcbiAgaGVpZ2h0OiBudW1iZXI7XHJcbiAgbnVtYmVyOiBudW1iZXI7XHJcbiAgZWRpdGFibGU6IGJvb2xlYW47XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBSb3RhdGVkUGFnZSB7XHJcbiAgcGFnZU51bWJlcjogbnVtYmVyO1xyXG4gIGFuZ2xlOiBudW1iZXI7XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBGaWxlQ3JlZGVudGlhbHMge1xyXG4gIGd1aWQ6IHN0cmluZztcclxuICBwYXNzd29yZDogc3RyaW5nO1xyXG5cclxuICBjb25zdHJ1Y3RvcihndWlkOiBzdHJpbmcsIHBhc3N3b3JkOiBzdHJpbmcpIHtcclxuICAgIHRoaXMuZ3VpZCA9IGd1aWQ7XHJcbiAgICB0aGlzLnBhc3N3b3JkID0gcGFzc3dvcmQ7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgU2F2ZUZpbGUgZXh0ZW5kcyBGaWxlQ3JlZGVudGlhbHMge1xyXG4gIGNvbnRlbnQ6IHN0cmluZztcclxuICBwYWdlTnVtYmVyOiBudW1iZXI7XHJcblxyXG4gIGNvbnN0cnVjdG9yKGd1aWQ6IHN0cmluZywgcGFzc3dvcmQ6IHN0cmluZywgY29udGVudDogc3RyaW5nLCBwYWdlTnVtYmVyOiBudW1iZXIpIHtcclxuICAgIHN1cGVyKGd1aWQsIHBhc3N3b3JkKTtcclxuICAgIHRoaXMuY29udGVudCA9IGNvbnRlbnQ7XHJcbiAgICB0aGlzLnBhZ2VOdW1iZXIgPSBwYWdlTnVtYmVyO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIEZpbGVEZXNjcmlwdGlvbiB7XHJcbiAgZ3VpZDogc3RyaW5nO1xyXG4gIHBhZ2VzOiBQYWdlTW9kZWxbXTtcclxuICBwcmludEFsbG93ZWQgPSB0cnVlO1xyXG4gIHNob3dHcmlkTGluZXM6IGJvb2xlYW47XHJcbiAgdGh1bWJuYWlsczogUGFnZU1vZGVsW107XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBGaWxlTW9kZWwge1xyXG4gIGd1aWQ6IHN0cmluZztcclxuICBuYW1lOiBzdHJpbmc7XHJcbiAgZGlyZWN0b3J5OiBib29sZWFuO1xyXG4gIHNpemU6IG51bWJlcjtcclxuICBpc0RpcmVjdG9yeTogYm9vbGVhbjtcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIEh0dHBFcnJvciB7XHJcbiAgc3RhdGljIEJhZFJlcXVlc3QgPSA0MDA7XHJcbiAgc3RhdGljIFVuYXV0aG9yaXplZCA9IDQwMTtcclxuICBzdGF0aWMgRm9yYmlkZGVuID0gNDAzO1xyXG4gIHN0YXRpYyBOb3RGb3VuZCA9IDQwNDtcclxuICBzdGF0aWMgVGltZU91dCA9IDQwODtcclxuICBzdGF0aWMgQ29uZmxpY3QgPSA0MDk7XHJcbiAgc3RhdGljIEludGVybmFsU2VydmVyRXJyb3IgPSA1MDA7XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBVdGlscyB7XHJcbiAgcHVibGljIHN0YXRpYyBnZXRNb3VzZVBvc2l0aW9uKGV2ZW50KSB7XHJcbiAgICBjb25zdCBtb3VzZSA9IHtcclxuICAgICAgeDogMCxcclxuICAgICAgeTogMFxyXG4gICAgfTtcclxuICAgIGNvbnN0IHdFdmVudDogRHJhZ0V2ZW50ID0gPERyYWdFdmVudD53aW5kb3cuZXZlbnQ7XHJcbiAgICBjb25zdCBldiA9IGV2ZW50IHx8IHdFdmVudDsgLy9Nb3ogfHwgSUVcclxuICAgIGlmIChldi5wYWdlWCB8fCB3RXZlbnQucGFnZVggfHwgd0V2ZW50LnNjcmVlblggfHwgKGV2LnRvdWNoZXMgJiYgZXYudG91Y2hlc1swXSAmJiBldi50b3VjaGVzWzBdLnBhZ2VYKSkgeyAvL01velxyXG4gICAgICBjb25zdCBwYWdlWCA9IHR5cGVvZiBldi5wYWdlWCAhPT0gXCJ1bmRlZmluZWRcIiAmJiBldi5wYWdlWCAhPT0gMCA/IGV2LnBhZ2VYIDogd0V2ZW50LnBhZ2VYO1xyXG4gICAgICBjb25zdCBwYWdlWSA9IHR5cGVvZiBldi5wYWdlWSAhPT0gXCJ1bmRlZmluZWRcIiAmJiBldi5wYWdlWSAhPT0gMCA/IGV2LnBhZ2VZIDogd0V2ZW50LnBhZ2VZO1xyXG4gICAgICBjb25zdCBzY3JlZW5YID0gdHlwZW9mIHdFdmVudC5zY3JlZW5YICE9PSBcInVuZGVmaW5lZFwiICYmIHdFdmVudC5zY3JlZW5ZICE9PSAwO1xyXG4gICAgICBjb25zdCBzY3JlZW5ZID0gdHlwZW9mIHdFdmVudC5zY3JlZW5ZICE9PSBcInVuZGVmaW5lZFwiICYmIHdFdmVudC5zY3JlZW5ZICE9PSAwO1xyXG4gICAgICBtb3VzZS54ID0gcGFnZVggPyBwYWdlWCA6IChzY3JlZW5YID8gd0V2ZW50LnNjcmVlblggOiBldi50b3VjaGVzWzBdLnBhZ2VYKTtcclxuICAgICAgbW91c2UueSA9IHBhZ2VZID8gcGFnZVkgOiAoc2NyZWVuWSA/IHdFdmVudC5zY3JlZW5ZIDogZXYudG91Y2hlc1swXS5wYWdlWSk7XHJcbiAgICB9IGVsc2UgaWYgKGV2LmNsaWVudFgpIHsgLy9JRVxyXG4gICAgICBtb3VzZS54ID0gZXYuY2xpZW50WCArIGRvY3VtZW50LmJvZHkuc2Nyb2xsTGVmdDtcclxuICAgICAgbW91c2UueSA9IGV2LmNsaWVudFkgKyBkb2N1bWVudC5ib2R5LnNjcm9sbFRvcDtcclxuICAgIH1cclxuICAgIHJldHVybiBtb3VzZTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBzdGF0aWMgdG9SZ2IoY29sb3I6IHN0cmluZykge1xyXG4gICAgY29uc3QgcmVzdWx0ID0gL14jPyhbYS1mXFxkXXsyfSkoW2EtZlxcZF17Mn0pKFthLWZcXGRdezJ9KSQvaS5leGVjKGNvbG9yKTtcclxuICAgIGlmIChyZXN1bHQpIHtcclxuICAgICAgY29uc3QgciA9IHBhcnNlSW50KHJlc3VsdFsxXSwgMTYpO1xyXG4gICAgICBjb25zdCBnID0gcGFyc2VJbnQocmVzdWx0WzJdLCAxNik7XHJcbiAgICAgIGNvbnN0IGIgPSBwYXJzZUludChyZXN1bHRbM10sIDE2KTtcclxuICAgICAgcmV0dXJuIHJlc3VsdCA/ICdyZ2IoJyArIHIgKyAnLCcgKyBnICsgJywnICsgYiArICcpJyA6ICcnO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIGNvbG9yO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHN0YXRpYyB0b0hleChjb2xvcjogc3RyaW5nKSB7XHJcbiAgICAvLyBjaGVjayBpZiBjb2xvciBpcyBzdGFuZGFyZCBoZXggdmFsdWVcclxuICAgIGlmIChjb2xvci5tYXRjaCgvWzAtOUEtRl17Nn18WzAtOUEtRl17M30kL2kpKSB7XHJcbiAgICAgIHJldHVybiAoY29sb3IuY2hhckF0KDApID09PSBcIiNcIikgPyBjb2xvciA6IChcIiNcIiArIGNvbG9yKTtcclxuICAgICAgLy8gY2hlY2sgaWYgY29sb3IgaXMgUkdCIHZhbHVlIC0+IGNvbnZlcnQgdG8gaGV4XHJcbiAgICB9IGVsc2UgaWYgKGNvbG9yLm1hdGNoKC9ecmdiXFwoXFxzKihcXGR7MSwzfSlcXHMqLFxccyooXFxkezEsM30pXFxzKixcXHMqKFxcZHsxLDN9KVxccypcXCkkLykpIHtcclxuICAgICAgY29uc3QgYyA9IChbcGFyc2VJbnQoUmVnRXhwLiQxLCAxMCksIHBhcnNlSW50KFJlZ0V4cC4kMiwgMTApLCBwYXJzZUludChSZWdFeHAuJDMsIDEwKV0pLFxyXG4gICAgICAgIHBhZCA9IGZ1bmN0aW9uIChzdHIpIHtcclxuICAgICAgICAgIGlmIChzdHIubGVuZ3RoIDwgMikge1xyXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMCwgbGVuID0gMiAtIHN0ci5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xyXG4gICAgICAgICAgICAgIHN0ciA9ICcwJyArIHN0cjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgcmV0dXJuIHN0cjtcclxuICAgICAgICB9O1xyXG4gICAgICBpZiAoYy5sZW5ndGggPT09IDMpIHtcclxuICAgICAgICBjb25zdCByID0gcGFkKGNbMF0udG9TdHJpbmcoMTYpKSxcclxuICAgICAgICAgIGcgPSBwYWQoY1sxXS50b1N0cmluZygxNikpLFxyXG4gICAgICAgICAgYiA9IHBhZChjWzJdLnRvU3RyaW5nKDE2KSk7XHJcbiAgICAgICAgcmV0dXJuICcjJyArIHIgKyBnICsgYjtcclxuICAgICAgfVxyXG4gICAgICAvLyBlbHNlIGRvIG5vdGhpbmdcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHJldHVybiAnJztcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBGaWxlVXRpbCB7XHJcbiAgcHVibGljIHN0YXRpYyBtYXAgPSB7XHJcbiAgICAnZm9sZGVyJzogeydmb3JtYXQnOiAnJywgJ2ljb24nOiAnZm9sZGVyJ30sXHJcbiAgICAncGRmJzogeydmb3JtYXQnOiAnUG9ydGFibGUgRG9jdW1lbnQgRm9ybWF0JywgJ2ljb24nOiAnZmlsZS1wZGYnLCAndW5pdCc6ICdwdCd9LFxyXG4gICAgJ2RvYyc6IHsnZm9ybWF0JzogJ01pY3Jvc29mdCBXb3JkJywgJ2ljb24nOiAnZmlsZS13b3JkJywgJ3VuaXQnOiAncHQnfSxcclxuICAgICdkb2N4Jzogeydmb3JtYXQnOiAnTWljcm9zb2Z0IFdvcmQnLCAnaWNvbic6ICdmaWxlLXdvcmQnLCAndW5pdCc6ICdwdCd9LFxyXG4gICAgJ2RvY20nOiB7J2Zvcm1hdCc6ICdNaWNyb3NvZnQgV29yZCcsICdpY29uJzogJ2ZpbGUtd29yZCcsICd1bml0JzogJ3B0J30sXHJcbiAgICAnZG90Jzogeydmb3JtYXQnOiAnTWljcm9zb2Z0IFdvcmQnLCAnaWNvbic6ICdmaWxlLXdvcmQnLCAndW5pdCc6ICdwdCd9LFxyXG4gICAgJ2RvdHgnOiB7J2Zvcm1hdCc6ICdNaWNyb3NvZnQgV29yZCcsICdpY29uJzogJ2ZpbGUtd29yZCcsICd1bml0JzogJ3B0J30sXHJcbiAgICAnZG90bSc6IHsnZm9ybWF0JzogJ01pY3Jvc29mdCBXb3JkJywgJ2ljb24nOiAnZmlsZS13b3JkJywgJ3VuaXQnOiAncHQnfSxcclxuICAgICd4bHMnOiB7J2Zvcm1hdCc6ICdNaWNyb3NvZnQgRXhjZWwnLCAnaWNvbic6ICdmaWxlLWV4Y2VsJywgJ3VuaXQnOiAncHgnfSxcclxuICAgICd4bHN4Jzogeydmb3JtYXQnOiAnTWljcm9zb2Z0IEV4Y2VsJywgJ2ljb24nOiAnZmlsZS1leGNlbCcsICd1bml0JzogJ3B4J30sXHJcbiAgICAneGxzbSc6IHsnZm9ybWF0JzogJ01pY3Jvc29mdCBFeGNlbCcsICdpY29uJzogJ2ZpbGUtZXhjZWwnLCAndW5pdCc6ICdweCd9LFxyXG4gICAgJ3hsc2InOiB7J2Zvcm1hdCc6ICdNaWNyb3NvZnQgRXhjZWwnLCAnaWNvbic6ICdmaWxlLWV4Y2VsJywgJ3VuaXQnOiAncHgnfSxcclxuICAgICd4bHMyMDAzJzogeydmb3JtYXQnOiAnTWljcm9zb2Z0IEV4Y2VsJywgJ2ljb24nOiAnZmlsZS1leGNlbCcsICd1bml0JzogJ3B4J30sXHJcbiAgICAneGx0eCc6IHsnZm9ybWF0JzogJ01pY3Jvc29mdCBFeGNlbCcsICdpY29uJzogJ2ZpbGUtZXhjZWwnLCAndW5pdCc6ICdweCd9LFxyXG4gICAgJ3hsdG0nOiB7J2Zvcm1hdCc6ICdNaWNyb3NvZnQgRXhjZWwnLCAnaWNvbic6ICdmaWxlLWV4Y2VsJywgJ3VuaXQnOiAncHgnfSxcclxuICAgICdwcHQnOiB7J2Zvcm1hdCc6ICdNaWNyb3NvZnQgUG93ZXJQb2ludCcsICdpY29uJzogJ2ZpbGUtcG93ZXJwb2ludCcsICd1bml0JzogJ3B0J30sXHJcbiAgICAncHB0eCc6IHsnZm9ybWF0JzogJ01pY3Jvc29mdCBQb3dlclBvaW50JywgJ2ljb24nOiAnZmlsZS1wb3dlcnBvaW50JywgJ3VuaXQnOiAncHQnfSxcclxuICAgICdwcHMnOiB7J2Zvcm1hdCc6ICdNaWNyb3NvZnQgUG93ZXJQb2ludCcsICdpY29uJzogJ2ZpbGUtcG93ZXJwb2ludCcsICd1bml0JzogJ3B0J30sXHJcbiAgICAncHBzeCc6IHsnZm9ybWF0JzogJ01pY3Jvc29mdCBQb3dlclBvaW50JywgJ2ljb24nOiAnZmlsZS1wb3dlcnBvaW50JywgJ3VuaXQnOiAncHQnfSxcclxuICAgICd2c2QnOiB7J2Zvcm1hdCc6ICdNaWNyb3NvZnQgVmlzaW8nLCAnaWNvbic6ICdmaWxlLWNvZGUnLCAndW5pdCc6ICdweCd9LFxyXG4gICAgJ3ZkeCc6IHsnZm9ybWF0JzogJ01pY3Jvc29mdCBWaXNpbycsICdpY29uJzogJ2ZpbGUtY29kZScsICd1bml0JzogJ3B4J30sXHJcbiAgICAndnNzJzogeydmb3JtYXQnOiAnTWljcm9zb2Z0IFZpc2lvJywgJ2ljb24nOiAnZmlsZS1jb2RlJywgJ3VuaXQnOiAncHgnfSxcclxuICAgICd2c3gnOiB7J2Zvcm1hdCc6ICdNaWNyb3NvZnQgVmlzaW8nLCAnaWNvbic6ICdmaWxlLWNvZGUnLCAndW5pdCc6ICdweCd9LFxyXG4gICAgJ3ZzdCc6IHsnZm9ybWF0JzogJ01pY3Jvc29mdCBWaXNpbycsICdpY29uJzogJ2ZpbGUtY29kZScsICd1bml0JzogJ3B4J30sXHJcbiAgICAndnR4Jzogeydmb3JtYXQnOiAnTWljcm9zb2Z0IFZpc2lvJywgJ2ljb24nOiAnZmlsZS1jb2RlJywgJ3VuaXQnOiAncHgnfSxcclxuICAgICd2c2R4Jzogeydmb3JtYXQnOiAnTWljcm9zb2Z0IFZpc2lvJywgJ2ljb24nOiAnZmlsZS1jb2RlJywgJ3VuaXQnOiAncHgnfSxcclxuICAgICd2ZHcnOiB7J2Zvcm1hdCc6ICdNaWNyb3NvZnQgVmlzaW8nLCAnaWNvbic6ICdmaWxlLWNvZGUnLCAndW5pdCc6ICdweCd9LFxyXG4gICAgJ3ZzdHgnOiB7J2Zvcm1hdCc6ICdNaWNyb3NvZnQgVmlzaW8nLCAnaWNvbic6ICdmaWxlLWNvZGUnLCAndW5pdCc6ICdweCd9LFxyXG4gICAgJ3Zzc3gnOiB7J2Zvcm1hdCc6ICdNaWNyb3NvZnQgVmlzaW8nLCAnaWNvbic6ICdmaWxlLWNvZGUnLCAndW5pdCc6ICdweCd9LFxyXG4gICAgJ21wcCc6IHsnZm9ybWF0JzogJ01pY3Jvc29mdCBQcm9qZWN0JywgJ2ljb24nOiAnZmlsZS1hbHQnLCAndW5pdCc6ICdwdCd9LFxyXG4gICAgJ21wdCc6IHsnZm9ybWF0JzogJ01pY3Jvc29mdCBQcm9qZWN0JywgJ2ljb24nOiAnZmlsZS1hbHQnLCAndW5pdCc6ICdwdCd9LFxyXG4gICAgJ21zZyc6IHsnZm9ybWF0JzogJ01pY3Jvc29mdCBPdXRsb29rJywgJ2ljb24nOiAnZmlsZS1hbHQnLCAndW5pdCc6ICdwdCd9LFxyXG4gICAgJ2VtbCc6IHsnZm9ybWF0JzogJ01pY3Jvc29mdCBPdXRsb29rJywgJ2ljb24nOiAnZmlsZS1hbHQnLCAndW5pdCc6ICdwdCd9LFxyXG4gICAgJ2VtbHgnOiB7J2Zvcm1hdCc6ICdNaWNyb3NvZnQgT3V0bG9vaycsICdpY29uJzogJ2ZpbGUtYWx0JywgJ3VuaXQnOiAncHQnfSxcclxuICAgICdvbmUnOiB7J2Zvcm1hdCc6ICdNaWNyb3NvZnQgT25lTm90ZScsICdpY29uJzogJ2ZpbGUtd29yZCcsICd1bml0JzogJ3B0J30sXHJcbiAgICAnb2R0Jzogeydmb3JtYXQnOiAnT3BlbiBEb2N1bWVudCBUZXh0JywgJ2ljb24nOiAnZmlsZS13b3JkJywgJ3VuaXQnOiAncHQnfSxcclxuICAgICdvdHQnOiB7J2Zvcm1hdCc6ICdPcGVuIERvY3VtZW50IFRleHQgVGVtcGxhdGUnLCAnaWNvbic6ICdmaWxlLXdvcmQnLCAndW5pdCc6ICdwdCd9LFxyXG4gICAgJ29kcyc6IHsnZm9ybWF0JzogJ09wZW4gRG9jdW1lbnQgU3ByZWFkc2hlZXQnLCAnaWNvbic6ICdmaWxlLWV4Y2VsJywgJ3VuaXQnOiAncHgnfSxcclxuICAgICdvZHAnOiB7J2Zvcm1hdCc6ICdPcGVuIERvY3VtZW50IFByZXNlbnRhdGlvbicsICdpY29uJzogJ2ZpbGUtcG93ZXJwb2ludCcsICd1bml0JzogJ3B0J30sXHJcbiAgICAnb3RwJzogeydmb3JtYXQnOiAnT3BlbiBEb2N1bWVudCBQcmVzZW50YXRpb24nLCAnaWNvbic6ICdmaWxlLXBvd2VycG9pbnQnLCAndW5pdCc6ICdwdCd9LFxyXG4gICAgJ290cyc6IHsnZm9ybWF0JzogJ09wZW4gRG9jdW1lbnQgUHJlc2VudGF0aW9uJywgJ2ljb24nOiAnZmlsZS1wb3dlcnBvaW50JywgJ3VuaXQnOiAncHQnfSxcclxuICAgICdwb3R4Jzogeydmb3JtYXQnOiAnT3BlbiBEb2N1bWVudCBQcmVzZW50YXRpb24nLCAnaWNvbic6ICdmaWxlLXBvd2VycG9pbnQnLCAndW5pdCc6ICdwdCd9LFxyXG4gICAgJ3BvdG0nOiB7J2Zvcm1hdCc6ICdPcGVuIERvY3VtZW50IFByZXNlbnRhdGlvbicsICdpY29uJzogJ2ZpbGUtcG93ZXJwb2ludCcsICd1bml0JzogJ3B0J30sXHJcbiAgICAncHB0bSc6IHsnZm9ybWF0JzogJ09wZW4gRG9jdW1lbnQgUHJlc2VudGF0aW9uJywgJ2ljb24nOiAnZmlsZS1wb3dlcnBvaW50JywgJ3VuaXQnOiAncHQnfSxcclxuICAgICdwcHNtJzogeydmb3JtYXQnOiAnT3BlbiBEb2N1bWVudCBQcmVzZW50YXRpb24nLCAnaWNvbic6ICdmaWxlLXBvd2VycG9pbnQnLCAndW5pdCc6ICdwdCd9LFxyXG4gICAgJ3J0Zic6IHsnZm9ybWF0JzogJ1JpY2ggVGV4dCBGb3JtYXQnLCAnaWNvbic6ICdmaWxlLWFsdCcsICd1bml0JzogJ3B0J30sXHJcbiAgICAndHh0Jzogeydmb3JtYXQnOiAnUGxhaW4gVGV4dCBGaWxlJywgJ2ljb24nOiAnZmlsZS1hbHQnLCAndW5pdCc6ICdwdCd9LFxyXG4gICAgJ2Nzdic6IHsnZm9ybWF0JzogJ0NvbW1hLVNlcGFyYXRlZCBWYWx1ZXMnLCAnaWNvbic6ICdmaWxlLWV4Y2VsJywgJ3VuaXQnOiAncHgnfSxcclxuICAgICdodG1sJzogeydmb3JtYXQnOiAnSHlwZXJUZXh0IE1hcmt1cCBMYW5ndWFnZScsICdpY29uJzogJ2ZpbGUtd29yZCcsICd1bml0JzogJ3B0J30sXHJcbiAgICAnbWh0Jzogeydmb3JtYXQnOiAnSHlwZXJUZXh0IE1hcmt1cCBMYW5ndWFnZScsICdpY29uJzogJ2ZpbGUtd29yZCcsICd1bml0JzogJ3B0J30sXHJcbiAgICAnbWh0bWwnOiB7J2Zvcm1hdCc6ICdIeXBlclRleHQgTWFya3VwIExhbmd1YWdlJywgJ2ljb24nOiAnZmlsZS13b3JkJywgJ3VuaXQnOiAncHQnfSxcclxuICAgICd4bWwnOiB7J2Zvcm1hdCc6ICdFeHRlbnNpYmxlIE1hcmt1cCBMYW5ndWFnZScsICdpY29uJzogJ2ZpbGUtd29yZCcsICd1bml0JzogJ3B0J30sXHJcbiAgICAneHBzJzogeydmb3JtYXQnOiAnWE1MIFBhcGVyIFNwZWNpZmljYXRpb24nLCAnaWNvbic6ICdmaWxlLXdvcmQnLCAndW5pdCc6ICdwdCd9LFxyXG4gICAgJ2R4Zic6IHsnZm9ybWF0JzogJ0F1dG9DQUQgRHJhd2luZyBGaWxlIEZvcm1hdCcsICdpY29uJzogJ2ZpbGUtaW1hZ2UnLCAndW5pdCc6ICdweCd9LFxyXG4gICAgJ2R3Zyc6IHsnZm9ybWF0JzogJ0F1dG9DQUQgRHJhd2luZyBGaWxlIEZvcm1hdCcsICdpY29uJzogJ2ZpbGUtaW1hZ2UnLCAndW5pdCc6ICdweCd9LFxyXG4gICAgJ2JtcCc6IHsnZm9ybWF0JzogJ0JpdG1hcCBQaWN0dXJlJywgJ2ljb24nOiAnZmlsZS1pbWFnZScsICd1bml0JzogJ3B4J30sXHJcbiAgICAnZ2lmJzogeydmb3JtYXQnOiAnR3JhcGhpY3MgSW50ZXJjaGFuZ2UgRm9ybWF0JywgJ2ljb24nOiAnZmlsZS1pbWFnZScsICd1bml0JzogJ3B4J30sXHJcbiAgICAnanBnJzogeydmb3JtYXQnOiAnSm9pbnQgUGhvdG9ncmFwaGljIEV4cGVydHMgR3JvdXAnLCAnaWNvbic6ICdmaWxlLWltYWdlJywgJ3VuaXQnOiAncHgnfSxcclxuICAgICdqcGUnOiB7J2Zvcm1hdCc6ICdKb2ludCBQaG90b2dyYXBoaWMgRXhwZXJ0cyBHcm91cCcsICdpY29uJzogJ2ZpbGUtaW1hZ2UnLCAndW5pdCc6ICdweCd9LFxyXG4gICAgJ2pwZWcnOiB7J2Zvcm1hdCc6ICdKb2ludCBQaG90b2dyYXBoaWMgRXhwZXJ0cyBHcm91cCcsICdpY29uJzogJ2ZpbGUtaW1hZ2UnLCAndW5pdCc6ICdweCd9LFxyXG4gICAgJ2pmaWYnOiB7J2Zvcm1hdCc6ICdKb2ludCBQaG90b2dyYXBoaWMgRXhwZXJ0cyBHcm91cCcsICdpY29uJzogJ2ZpbGUtaW1hZ2UnLCAndW5pdCc6ICdweCd9LFxyXG4gICAgJ3BuZyc6IHsnZm9ybWF0JzogJ1BvcnRhYmxlIE5ldHdvcmsgR3JhcGhpY3MnLCAnaWNvbic6ICdmaWxlLWltYWdlJywgJ3VuaXQnOiAncHgnfSxcclxuICAgICd0aWZmJzogeydmb3JtYXQnOiAnVGFnZ2VkIEltYWdlIEZpbGUgRm9ybWF0JywgJ2ljb24nOiAnZmlsZS1pbWFnZScsICd1bml0JzogJ3B4J30sXHJcbiAgICAndGlmJzogeydmb3JtYXQnOiAnVGFnZ2VkIEltYWdlIEZpbGUgRm9ybWF0JywgJ2ljb24nOiAnZmlsZS1pbWFnZScsICd1bml0JzogJ3B4J30sXHJcbiAgICAncHNkJzogeydmb3JtYXQnOiAnVGFnZ2VkIEltYWdlIEZpbGUgRm9ybWF0JywgJ2ljb24nOiAnZmlsZS1pbWFnZScsICd1bml0JzogJ3B4J30sXHJcbiAgICAnc3ZnJzogeydmb3JtYXQnOiAnVGFnZ2VkIEltYWdlIEZpbGUgRm9ybWF0JywgJ2ljb24nOiAnZmlsZS1pbWFnZScsICd1bml0JzogJ3B4J30sXHJcbiAgICAnanAyJzogeydmb3JtYXQnOiAnVGFnZ2VkIEltYWdlIEZpbGUgRm9ybWF0JywgJ2ljb24nOiAnZmlsZS1pbWFnZScsICd1bml0JzogJ3B4J30sXHJcbiAgICAnZXB1Yic6IHsnZm9ybWF0JzogJ0VsZWN0cm9uaWMgUHVibGljYXRpb24nLCAnaWNvbic6ICdmaWxlLXBkZicsICd1bml0JzogJ3B0J30sXHJcbiAgICAnaWNvJzogeydmb3JtYXQnOiAnV2luZG93cyBJY29uJywgJ2ljb24nOiAnZmlsZS1pbWFnZScsICd1bml0JzogJ3B4J30sXHJcbiAgICAnd2VicCc6IHsnZm9ybWF0JzogJ0NvbXByZXNzZWQgSW1hZ2UnLCAnaWNvbic6ICdmaWxlLWltYWdlJywgJ3VuaXQnOiAncHgnfSxcclxuICAgICdtb2JpJzogeydmb3JtYXQnOiAnTW9iaXBvY2tldCBlQm9vaycsICdpY29uJzogJ2ZpbGUtcGRmJywgJ3VuaXQnOiAncHQnfSxcclxuICAgICd0ZXgnOiB7J2Zvcm1hdCc6ICdMYVRlWCBTb3VyY2UgRG9jdW1lbnQnLCAnaWNvbic6ICdmaWxlLXBkZicsICd1bml0JzogJ3B0J30sXHJcbiAgICAnZGp2dSc6IHsnZm9ybWF0JzogJ011bHRpLUxheWVyIFJhc3RlciBJbWFnZScsICdpY29uJzogJ2ZpbGUtYWx0JywgJ3VuaXQnOiAncHQnfSxcclxuICAgICd1bmtub3duJzogeydmb3JtYXQnOiAnVGhpcyBmb3JtYXQgaXMgbm90IHN1cHBvcnRlZCcsICdpY29uJzogJ2ZpbGUnfSxcclxuICB9O1xyXG5cclxuICBwdWJsaWMgc3RhdGljIGZpbmQoZmlsZW5hbWU6IHN0cmluZywgaXNEaXJlY3Rvcnk6IGJvb2xlYW4pIHtcclxuICAgIGlmIChmaWxlbmFtZSAmJiAhaXNEaXJlY3RvcnkpIHtcclxuICAgICAgY29uc3Qgc3RyaW5ncyA9IGZpbGVuYW1lLnNwbGl0KCcuJyk7XHJcbiAgICAgIGNvbnN0IG5hbWUgPSBzdHJpbmdzLnBvcCgpLnRvTG93ZXJDYXNlKCk7XHJcbiAgICAgIGlmICh0eXBlb2YgRmlsZVV0aWwubWFwW25hbWVdID09PSBcInVuZGVmaW5lZFwiKSB7XHJcbiAgICAgICAgcmV0dXJuIHN0cmluZ3MubGVuZ3RoID4gMCA/IEZpbGVVdGlsLm1hcFsndW5rbm93biddIDogRmlsZVV0aWwubWFwWydmb2xkZXInXTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICByZXR1cm4gRmlsZVV0aWwubWFwW25hbWVdO1xyXG4gICAgICB9XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICByZXR1cm4gRmlsZVV0aWwubWFwWydmb2xkZXInXTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBGaWxlU2VydmljZSB7XHJcblxyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gIH1cclxufVxyXG4iXX0=