/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
export class PageModel {
}
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
export class RotatedPage {
}
if (false) {
    /** @type {?} */
    RotatedPage.prototype.pageNumber;
    /** @type {?} */
    RotatedPage.prototype.angle;
}
export class FileCredentials {
    /**
     * @param {?} guid
     * @param {?} password
     */
    constructor(guid, password) {
        this.guid = guid;
        this.password = password;
    }
}
if (false) {
    /** @type {?} */
    FileCredentials.prototype.guid;
    /** @type {?} */
    FileCredentials.prototype.password;
}
export class SaveFile extends FileCredentials {
    /**
     * @param {?} guid
     * @param {?} password
     * @param {?} content
     */
    constructor(guid, password, content) {
        super(guid, password);
        this.content = content;
    }
}
if (false) {
    /** @type {?} */
    SaveFile.prototype.content;
}
export class FileDescription {
    constructor() {
        this.printAllowed = true;
    }
}
if (false) {
    /** @type {?} */
    FileDescription.prototype.guid;
    /** @type {?} */
    FileDescription.prototype.pages;
    /** @type {?} */
    FileDescription.prototype.printAllowed;
}
export class FileModel {
}
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
export class HttpError {
}
HttpError.BadRequest = 400;
HttpError.Unauthorized = 401;
HttpError.Forbidden = 403;
HttpError.NotFound = 404;
HttpError.TimeOut = 408;
HttpError.Conflict = 409;
HttpError.InternalServerError = 500;
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
export class Utils {
    /**
     * @param {?} event
     * @return {?}
     */
    static getMousePosition(event) {
        /** @type {?} */
        const mouse = {
            x: 0,
            y: 0
        };
        /** @type {?} */
        const wEvent = (/** @type {?} */ (window.event));
        /** @type {?} */
        const ev = event || wEvent;
        if (ev.pageX || wEvent.pageX || wEvent.screenX || (ev.touches && ev.touches[0] && ev.touches[0].pageX)) { //Moz
            //Moz
            /** @type {?} */
            const pageX = typeof ev.pageX !== "undefined" && ev.pageX !== 0 ? ev.pageX : wEvent.pageX;
            /** @type {?} */
            const pageY = typeof ev.pageY !== "undefined" && ev.pageY !== 0 ? ev.pageY : wEvent.pageY;
            /** @type {?} */
            const screenX = typeof wEvent.screenX !== "undefined" && wEvent.screenY !== 0;
            /** @type {?} */
            const screenY = typeof wEvent.screenY !== "undefined" && wEvent.screenY !== 0;
            mouse.x = pageX ? pageX : (screenX ? wEvent.screenX : ev.touches[0].pageX);
            mouse.y = pageY ? pageY : (screenY ? wEvent.screenY : ev.touches[0].pageY);
        }
        else if (ev.clientX) { //IE
            mouse.x = ev.clientX + document.body.scrollLeft;
            mouse.y = ev.clientY + document.body.scrollTop;
        }
        return mouse;
    }
    /**
     * @param {?} color
     * @return {?}
     */
    static toRgb(color) {
        /** @type {?} */
        const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(color);
        if (result) {
            /** @type {?} */
            const r = parseInt(result[1], 16);
            /** @type {?} */
            const g = parseInt(result[2], 16);
            /** @type {?} */
            const b = parseInt(result[3], 16);
            return result ? 'rgb(' + r + ',' + g + ',' + b + ')' : '';
        }
        return color;
    }
    /**
     * @param {?} color
     * @return {?}
     */
    static toHex(color) {
        // check if color is standard hex value
        if (color.match(/[0-9A-F]{6}|[0-9A-F]{3}$/i)) {
            return (color.charAt(0) === "#") ? color : ("#" + color);
            // check if color is RGB value -> convert to hex
        }
        else if (color.match(/^rgb\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*\)$/)) {
            /** @type {?} */
            const c = ([parseInt(RegExp.$1, 10), parseInt(RegExp.$2, 10), parseInt(RegExp.$3, 10)]);
            /** @type {?} */
            const pad = (/**
             * @param {?} str
             * @return {?}
             */
            function (str) {
                if (str.length < 2) {
                    for (let i = 0, len = 2 - str.length; i < len; i++) {
                        str = '0' + str;
                    }
                }
                return str;
            });
            if (c.length === 3) {
                /** @type {?} */
                const r = pad(c[0].toString(16));
                /** @type {?} */
                const g = pad(c[1].toString(16));
                /** @type {?} */
                const b = pad(c[2].toString(16));
                return '#' + r + g + b;
            }
            // else do nothing
        }
        else {
            return '';
        }
    }
}
export class FileUtil {
    /**
     * @param {?} filename
     * @param {?} isDirectory
     * @return {?}
     */
    static find(filename, isDirectory) {
        if (filename && !isDirectory) {
            /** @type {?} */
            const strings = filename.split('.');
            /** @type {?} */
            const name = strings.pop().toLowerCase();
            if (typeof FileUtil.map[name] === "undefined") {
                return strings.length > 0 ? FileUtil.map['unknown'] : FileUtil.map['folder'];
            }
            else {
                return FileUtil.map[name];
            }
        }
        else {
            return FileUtil.map['folder'];
        }
    }
}
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
if (false) {
    /** @type {?} */
    FileUtil.map;
}
export class FileService {
    constructor() {
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmlsZS5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdyb3VwZG9jcy5leGFtcGxlcy5hbmd1bGFyL2NvbW1vbi1jb21wb25lbnRzLyIsInNvdXJjZXMiOlsibGliL2ZpbGUuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsTUFBTSxPQUFPLFNBQVM7Q0FPckI7OztJQU5DLHlCQUFhOztJQUNiLDBCQUFjOztJQUNkLDBCQUFjOztJQUNkLDJCQUFlOztJQUNmLDJCQUFlOztJQUNmLDZCQUFrQjs7QUFHcEIsTUFBTSxPQUFPLFdBQVc7Q0FHdkI7OztJQUZDLGlDQUFtQjs7SUFDbkIsNEJBQWM7O0FBR2hCLE1BQU0sT0FBTyxlQUFlOzs7OztJQUkxQixZQUFZLElBQVksRUFBRSxRQUFnQjtRQUN4QyxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztRQUNqQixJQUFJLENBQUMsUUFBUSxHQUFHLFFBQVEsQ0FBQztJQUMzQixDQUFDO0NBQ0Y7OztJQVBDLCtCQUFhOztJQUNiLG1DQUFpQjs7QUFRbkIsTUFBTSxPQUFPLFFBQVMsU0FBUSxlQUFlOzs7Ozs7SUFHM0MsWUFBWSxJQUFZLEVBQUUsUUFBZ0IsRUFBRSxPQUFlO1FBQ3pELEtBQUssQ0FBQyxJQUFJLEVBQUUsUUFBUSxDQUFDLENBQUM7UUFDdEIsSUFBSSxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUM7SUFDekIsQ0FBQztDQUNGOzs7SUFOQywyQkFBZ0I7O0FBUWxCLE1BQU0sT0FBTyxlQUFlO0lBQTVCO1FBR0UsaUJBQVksR0FBRyxJQUFJLENBQUM7SUFDdEIsQ0FBQztDQUFBOzs7SUFIQywrQkFBYTs7SUFDYixnQ0FBbUI7O0lBQ25CLHVDQUFvQjs7QUFHdEIsTUFBTSxPQUFPLFNBQVM7Q0FNckI7OztJQUxDLHlCQUFhOztJQUNiLHlCQUFhOztJQUNiLDhCQUFtQjs7SUFDbkIseUJBQWE7O0lBQ2IsZ0NBQXFCOztBQUd2QixNQUFNLE9BQU8sU0FBUzs7QUFDYixv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RSxNQUFNLEVBQUM7Q0FDdEUsQ0FBQzs7O0lBM0VGLGFBMkVFOztBQWlCSixNQUFNLE9BQU8sV0FBVztJQUV0QjtJQUNBLENBQUM7Q0FDRiIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjbGFzcyBQYWdlTW9kZWwge1xuICBkYXRhOiBzdHJpbmc7XG4gIGFuZ2xlOiBudW1iZXI7XG4gIHdpZHRoOiBudW1iZXI7XG4gIGhlaWdodDogbnVtYmVyO1xuICBudW1iZXI6IG51bWJlcjtcbiAgZWRpdGFibGU6IGJvb2xlYW47XG59XG5cbmV4cG9ydCBjbGFzcyBSb3RhdGVkUGFnZSB7XG4gIHBhZ2VOdW1iZXI6IG51bWJlcjtcbiAgYW5nbGU6IG51bWJlcjtcbn1cblxuZXhwb3J0IGNsYXNzIEZpbGVDcmVkZW50aWFscyB7XG4gIGd1aWQ6IHN0cmluZztcbiAgcGFzc3dvcmQ6IHN0cmluZztcblxuICBjb25zdHJ1Y3RvcihndWlkOiBzdHJpbmcsIHBhc3N3b3JkOiBzdHJpbmcpIHtcbiAgICB0aGlzLmd1aWQgPSBndWlkO1xuICAgIHRoaXMucGFzc3dvcmQgPSBwYXNzd29yZDtcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgU2F2ZUZpbGUgZXh0ZW5kcyBGaWxlQ3JlZGVudGlhbHMge1xuICBjb250ZW50OiBzdHJpbmc7XG5cbiAgY29uc3RydWN0b3IoZ3VpZDogc3RyaW5nLCBwYXNzd29yZDogc3RyaW5nLCBjb250ZW50OiBzdHJpbmcpIHtcbiAgICBzdXBlcihndWlkLCBwYXNzd29yZCk7XG4gICAgdGhpcy5jb250ZW50ID0gY29udGVudDtcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgRmlsZURlc2NyaXB0aW9uIHtcbiAgZ3VpZDogc3RyaW5nO1xuICBwYWdlczogUGFnZU1vZGVsW107XG4gIHByaW50QWxsb3dlZCA9IHRydWU7XG59XG5cbmV4cG9ydCBjbGFzcyBGaWxlTW9kZWwge1xuICBndWlkOiBzdHJpbmc7XG4gIG5hbWU6IHN0cmluZztcbiAgZGlyZWN0b3J5OiBib29sZWFuO1xuICBzaXplOiBudW1iZXI7XG4gIGlzRGlyZWN0b3J5OiBib29sZWFuO1xufVxuXG5leHBvcnQgY2xhc3MgSHR0cEVycm9yIHtcbiAgc3RhdGljIEJhZFJlcXVlc3QgPSA0MDA7XG4gIHN0YXRpYyBVbmF1dGhvcml6ZWQgPSA0MDE7XG4gIHN0YXRpYyBGb3JiaWRkZW4gPSA0MDM7XG4gIHN0YXRpYyBOb3RGb3VuZCA9IDQwNDtcbiAgc3RhdGljIFRpbWVPdXQgPSA0MDg7XG4gIHN0YXRpYyBDb25mbGljdCA9IDQwOTtcbiAgc3RhdGljIEludGVybmFsU2VydmVyRXJyb3IgPSA1MDA7XG59XG5cbmV4cG9ydCBjbGFzcyBVdGlscyB7XG4gIHB1YmxpYyBzdGF0aWMgZ2V0TW91c2VQb3NpdGlvbihldmVudCkge1xuICAgIGNvbnN0IG1vdXNlID0ge1xuICAgICAgeDogMCxcbiAgICAgIHk6IDBcbiAgICB9O1xuICAgIGNvbnN0IHdFdmVudDogRHJhZ0V2ZW50ID0gPERyYWdFdmVudD53aW5kb3cuZXZlbnQ7XG4gICAgY29uc3QgZXYgPSBldmVudCB8fCB3RXZlbnQ7IC8vTW96IHx8IElFXG4gICAgaWYgKGV2LnBhZ2VYIHx8IHdFdmVudC5wYWdlWCB8fCB3RXZlbnQuc2NyZWVuWCB8fCAoZXYudG91Y2hlcyAmJiBldi50b3VjaGVzWzBdICYmIGV2LnRvdWNoZXNbMF0ucGFnZVgpKSB7IC8vTW96XG4gICAgICBjb25zdCBwYWdlWCA9IHR5cGVvZiBldi5wYWdlWCAhPT0gXCJ1bmRlZmluZWRcIiAmJiBldi5wYWdlWCAhPT0gMCA/IGV2LnBhZ2VYIDogd0V2ZW50LnBhZ2VYO1xuICAgICAgY29uc3QgcGFnZVkgPSB0eXBlb2YgZXYucGFnZVkgIT09IFwidW5kZWZpbmVkXCIgJiYgZXYucGFnZVkgIT09IDAgPyBldi5wYWdlWSA6IHdFdmVudC5wYWdlWTtcbiAgICAgIGNvbnN0IHNjcmVlblggPSB0eXBlb2Ygd0V2ZW50LnNjcmVlblggIT09IFwidW5kZWZpbmVkXCIgJiYgd0V2ZW50LnNjcmVlblkgIT09IDA7XG4gICAgICBjb25zdCBzY3JlZW5ZID0gdHlwZW9mIHdFdmVudC5zY3JlZW5ZICE9PSBcInVuZGVmaW5lZFwiICYmIHdFdmVudC5zY3JlZW5ZICE9PSAwO1xuICAgICAgbW91c2UueCA9IHBhZ2VYID8gcGFnZVggOiAoc2NyZWVuWCA/IHdFdmVudC5zY3JlZW5YIDogZXYudG91Y2hlc1swXS5wYWdlWCk7XG4gICAgICBtb3VzZS55ID0gcGFnZVkgPyBwYWdlWSA6IChzY3JlZW5ZID8gd0V2ZW50LnNjcmVlblkgOiBldi50b3VjaGVzWzBdLnBhZ2VZKTtcbiAgICB9IGVsc2UgaWYgKGV2LmNsaWVudFgpIHsgLy9JRVxuICAgICAgbW91c2UueCA9IGV2LmNsaWVudFggKyBkb2N1bWVudC5ib2R5LnNjcm9sbExlZnQ7XG4gICAgICBtb3VzZS55ID0gZXYuY2xpZW50WSArIGRvY3VtZW50LmJvZHkuc2Nyb2xsVG9wO1xuICAgIH1cbiAgICByZXR1cm4gbW91c2U7XG4gIH1cblxuICBwdWJsaWMgc3RhdGljIHRvUmdiKGNvbG9yOiBzdHJpbmcpIHtcbiAgICBjb25zdCByZXN1bHQgPSAvXiM/KFthLWZcXGRdezJ9KShbYS1mXFxkXXsyfSkoW2EtZlxcZF17Mn0pJC9pLmV4ZWMoY29sb3IpO1xuICAgIGlmIChyZXN1bHQpIHtcbiAgICAgIGNvbnN0IHIgPSBwYXJzZUludChyZXN1bHRbMV0sIDE2KTtcbiAgICAgIGNvbnN0IGcgPSBwYXJzZUludChyZXN1bHRbMl0sIDE2KTtcbiAgICAgIGNvbnN0IGIgPSBwYXJzZUludChyZXN1bHRbM10sIDE2KTtcbiAgICAgIHJldHVybiByZXN1bHQgPyAncmdiKCcgKyByICsgJywnICsgZyArICcsJyArIGIgKyAnKScgOiAnJztcbiAgICB9XG4gICAgcmV0dXJuIGNvbG9yO1xuICB9XG5cbiAgcHVibGljIHN0YXRpYyB0b0hleChjb2xvcjogc3RyaW5nKSB7XG4gICAgLy8gY2hlY2sgaWYgY29sb3IgaXMgc3RhbmRhcmQgaGV4IHZhbHVlXG4gICAgaWYgKGNvbG9yLm1hdGNoKC9bMC05QS1GXXs2fXxbMC05QS1GXXszfSQvaSkpIHtcbiAgICAgIHJldHVybiAoY29sb3IuY2hhckF0KDApID09PSBcIiNcIikgPyBjb2xvciA6IChcIiNcIiArIGNvbG9yKTtcbiAgICAgIC8vIGNoZWNrIGlmIGNvbG9yIGlzIFJHQiB2YWx1ZSAtPiBjb252ZXJ0IHRvIGhleFxuICAgIH0gZWxzZSBpZiAoY29sb3IubWF0Y2goL15yZ2JcXChcXHMqKFxcZHsxLDN9KVxccyosXFxzKihcXGR7MSwzfSlcXHMqLFxccyooXFxkezEsM30pXFxzKlxcKSQvKSkge1xuICAgICAgY29uc3QgYyA9IChbcGFyc2VJbnQoUmVnRXhwLiQxLCAxMCksIHBhcnNlSW50KFJlZ0V4cC4kMiwgMTApLCBwYXJzZUludChSZWdFeHAuJDMsIDEwKV0pLFxuICAgICAgICBwYWQgPSBmdW5jdGlvbiAoc3RyKSB7XG4gICAgICAgICAgaWYgKHN0ci5sZW5ndGggPCAyKSB7XG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMCwgbGVuID0gMiAtIHN0ci5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xuICAgICAgICAgICAgICBzdHIgPSAnMCcgKyBzdHI7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiBzdHI7XG4gICAgICAgIH07XG4gICAgICBpZiAoYy5sZW5ndGggPT09IDMpIHtcbiAgICAgICAgY29uc3QgciA9IHBhZChjWzBdLnRvU3RyaW5nKDE2KSksXG4gICAgICAgICAgZyA9IHBhZChjWzFdLnRvU3RyaW5nKDE2KSksXG4gICAgICAgICAgYiA9IHBhZChjWzJdLnRvU3RyaW5nKDE2KSk7XG4gICAgICAgIHJldHVybiAnIycgKyByICsgZyArIGI7XG4gICAgICB9XG4gICAgICAvLyBlbHNlIGRvIG5vdGhpbmdcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuICcnO1xuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgRmlsZVV0aWwge1xuICBwdWJsaWMgc3RhdGljIG1hcCA9IHtcbiAgICAnZm9sZGVyJzogeydmb3JtYXQnOiAnJywgJ2ljb24nOiAnZm9sZGVyJ30sXG4gICAgJ3BkZic6IHsnZm9ybWF0JzogJ1BvcnRhYmxlIERvY3VtZW50IEZvcm1hdCcsICdpY29uJzogJ2ZpbGUtcGRmJywgJ3VuaXQnOiAncHQnfSxcbiAgICAnZG9jJzogeydmb3JtYXQnOiAnTWljcm9zb2Z0IFdvcmQnLCAnaWNvbic6ICdmaWxlLXdvcmQnLCAndW5pdCc6ICdwdCd9LFxuICAgICdkb2N4Jzogeydmb3JtYXQnOiAnTWljcm9zb2Z0IFdvcmQnLCAnaWNvbic6ICdmaWxlLXdvcmQnLCAndW5pdCc6ICdwdCd9LFxuICAgICdkb2NtJzogeydmb3JtYXQnOiAnTWljcm9zb2Z0IFdvcmQnLCAnaWNvbic6ICdmaWxlLXdvcmQnLCAndW5pdCc6ICdwdCd9LFxuICAgICdkb3QnOiB7J2Zvcm1hdCc6ICdNaWNyb3NvZnQgV29yZCcsICdpY29uJzogJ2ZpbGUtd29yZCcsICd1bml0JzogJ3B0J30sXG4gICAgJ2RvdHgnOiB7J2Zvcm1hdCc6ICdNaWNyb3NvZnQgV29yZCcsICdpY29uJzogJ2ZpbGUtd29yZCcsICd1bml0JzogJ3B0J30sXG4gICAgJ2RvdG0nOiB7J2Zvcm1hdCc6ICdNaWNyb3NvZnQgV29yZCcsICdpY29uJzogJ2ZpbGUtd29yZCcsICd1bml0JzogJ3B0J30sXG4gICAgJ3hscyc6IHsnZm9ybWF0JzogJ01pY3Jvc29mdCBFeGNlbCcsICdpY29uJzogJ2ZpbGUtZXhjZWwnLCAndW5pdCc6ICdweCd9LFxuICAgICd4bHN4Jzogeydmb3JtYXQnOiAnTWljcm9zb2Z0IEV4Y2VsJywgJ2ljb24nOiAnZmlsZS1leGNlbCcsICd1bml0JzogJ3B4J30sXG4gICAgJ3hsc20nOiB7J2Zvcm1hdCc6ICdNaWNyb3NvZnQgRXhjZWwnLCAnaWNvbic6ICdmaWxlLWV4Y2VsJywgJ3VuaXQnOiAncHgnfSxcbiAgICAneGxzYic6IHsnZm9ybWF0JzogJ01pY3Jvc29mdCBFeGNlbCcsICdpY29uJzogJ2ZpbGUtZXhjZWwnLCAndW5pdCc6ICdweCd9LFxuICAgICd4bHMyMDAzJzogeydmb3JtYXQnOiAnTWljcm9zb2Z0IEV4Y2VsJywgJ2ljb24nOiAnZmlsZS1leGNlbCcsICd1bml0JzogJ3B4J30sXG4gICAgJ3hsdHgnOiB7J2Zvcm1hdCc6ICdNaWNyb3NvZnQgRXhjZWwnLCAnaWNvbic6ICdmaWxlLWV4Y2VsJywgJ3VuaXQnOiAncHgnfSxcbiAgICAneGx0bSc6IHsnZm9ybWF0JzogJ01pY3Jvc29mdCBFeGNlbCcsICdpY29uJzogJ2ZpbGUtZXhjZWwnLCAndW5pdCc6ICdweCd9LFxuICAgICdwcHQnOiB7J2Zvcm1hdCc6ICdNaWNyb3NvZnQgUG93ZXJQb2ludCcsICdpY29uJzogJ2ZpbGUtcG93ZXJwb2ludCcsICd1bml0JzogJ3B0J30sXG4gICAgJ3BwdHgnOiB7J2Zvcm1hdCc6ICdNaWNyb3NvZnQgUG93ZXJQb2ludCcsICdpY29uJzogJ2ZpbGUtcG93ZXJwb2ludCcsICd1bml0JzogJ3B0J30sXG4gICAgJ3Bwcyc6IHsnZm9ybWF0JzogJ01pY3Jvc29mdCBQb3dlclBvaW50JywgJ2ljb24nOiAnZmlsZS1wb3dlcnBvaW50JywgJ3VuaXQnOiAncHQnfSxcbiAgICAncHBzeCc6IHsnZm9ybWF0JzogJ01pY3Jvc29mdCBQb3dlclBvaW50JywgJ2ljb24nOiAnZmlsZS1wb3dlcnBvaW50JywgJ3VuaXQnOiAncHQnfSxcbiAgICAndnNkJzogeydmb3JtYXQnOiAnTWljcm9zb2Z0IFZpc2lvJywgJ2ljb24nOiAnZmlsZS1jb2RlJywgJ3VuaXQnOiAncHgnfSxcbiAgICAndmR4Jzogeydmb3JtYXQnOiAnTWljcm9zb2Z0IFZpc2lvJywgJ2ljb24nOiAnZmlsZS1jb2RlJywgJ3VuaXQnOiAncHgnfSxcbiAgICAndnNzJzogeydmb3JtYXQnOiAnTWljcm9zb2Z0IFZpc2lvJywgJ2ljb24nOiAnZmlsZS1jb2RlJywgJ3VuaXQnOiAncHgnfSxcbiAgICAndnN4Jzogeydmb3JtYXQnOiAnTWljcm9zb2Z0IFZpc2lvJywgJ2ljb24nOiAnZmlsZS1jb2RlJywgJ3VuaXQnOiAncHgnfSxcbiAgICAndnN0Jzogeydmb3JtYXQnOiAnTWljcm9zb2Z0IFZpc2lvJywgJ2ljb24nOiAnZmlsZS1jb2RlJywgJ3VuaXQnOiAncHgnfSxcbiAgICAndnR4Jzogeydmb3JtYXQnOiAnTWljcm9zb2Z0IFZpc2lvJywgJ2ljb24nOiAnZmlsZS1jb2RlJywgJ3VuaXQnOiAncHgnfSxcbiAgICAndnNkeCc6IHsnZm9ybWF0JzogJ01pY3Jvc29mdCBWaXNpbycsICdpY29uJzogJ2ZpbGUtY29kZScsICd1bml0JzogJ3B4J30sXG4gICAgJ3Zkdyc6IHsnZm9ybWF0JzogJ01pY3Jvc29mdCBWaXNpbycsICdpY29uJzogJ2ZpbGUtY29kZScsICd1bml0JzogJ3B4J30sXG4gICAgJ3ZzdHgnOiB7J2Zvcm1hdCc6ICdNaWNyb3NvZnQgVmlzaW8nLCAnaWNvbic6ICdmaWxlLWNvZGUnLCAndW5pdCc6ICdweCd9LFxuICAgICd2c3N4Jzogeydmb3JtYXQnOiAnTWljcm9zb2Z0IFZpc2lvJywgJ2ljb24nOiAnZmlsZS1jb2RlJywgJ3VuaXQnOiAncHgnfSxcbiAgICAnbXBwJzogeydmb3JtYXQnOiAnTWljcm9zb2Z0IFByb2plY3QnLCAnaWNvbic6ICdmaWxlLWFsdCcsICd1bml0JzogJ3B0J30sXG4gICAgJ21wdCc6IHsnZm9ybWF0JzogJ01pY3Jvc29mdCBQcm9qZWN0JywgJ2ljb24nOiAnZmlsZS1hbHQnLCAndW5pdCc6ICdwdCd9LFxuICAgICdtc2cnOiB7J2Zvcm1hdCc6ICdNaWNyb3NvZnQgT3V0bG9vaycsICdpY29uJzogJ2ZpbGUtYWx0JywgJ3VuaXQnOiAncHQnfSxcbiAgICAnZW1sJzogeydmb3JtYXQnOiAnTWljcm9zb2Z0IE91dGxvb2snLCAnaWNvbic6ICdmaWxlLWFsdCcsICd1bml0JzogJ3B0J30sXG4gICAgJ2VtbHgnOiB7J2Zvcm1hdCc6ICdNaWNyb3NvZnQgT3V0bG9vaycsICdpY29uJzogJ2ZpbGUtYWx0JywgJ3VuaXQnOiAncHQnfSxcbiAgICAnb25lJzogeydmb3JtYXQnOiAnTWljcm9zb2Z0IE9uZU5vdGUnLCAnaWNvbic6ICdmaWxlLXdvcmQnLCAndW5pdCc6ICdwdCd9LFxuICAgICdvZHQnOiB7J2Zvcm1hdCc6ICdPcGVuIERvY3VtZW50IFRleHQnLCAnaWNvbic6ICdmaWxlLXdvcmQnLCAndW5pdCc6ICdwdCd9LFxuICAgICdvdHQnOiB7J2Zvcm1hdCc6ICdPcGVuIERvY3VtZW50IFRleHQgVGVtcGxhdGUnLCAnaWNvbic6ICdmaWxlLXdvcmQnLCAndW5pdCc6ICdwdCd9LFxuICAgICdvZHMnOiB7J2Zvcm1hdCc6ICdPcGVuIERvY3VtZW50IFNwcmVhZHNoZWV0JywgJ2ljb24nOiAnZmlsZS1leGNlbCcsICd1bml0JzogJ3B4J30sXG4gICAgJ29kcCc6IHsnZm9ybWF0JzogJ09wZW4gRG9jdW1lbnQgUHJlc2VudGF0aW9uJywgJ2ljb24nOiAnZmlsZS1wb3dlcnBvaW50JywgJ3VuaXQnOiAncHQnfSxcbiAgICAnb3RwJzogeydmb3JtYXQnOiAnT3BlbiBEb2N1bWVudCBQcmVzZW50YXRpb24nLCAnaWNvbic6ICdmaWxlLXBvd2VycG9pbnQnLCAndW5pdCc6ICdwdCd9LFxuICAgICdvdHMnOiB7J2Zvcm1hdCc6ICdPcGVuIERvY3VtZW50IFByZXNlbnRhdGlvbicsICdpY29uJzogJ2ZpbGUtcG93ZXJwb2ludCcsICd1bml0JzogJ3B0J30sXG4gICAgJ3BvdHgnOiB7J2Zvcm1hdCc6ICdPcGVuIERvY3VtZW50IFByZXNlbnRhdGlvbicsICdpY29uJzogJ2ZpbGUtcG93ZXJwb2ludCcsICd1bml0JzogJ3B0J30sXG4gICAgJ3BvdG0nOiB7J2Zvcm1hdCc6ICdPcGVuIERvY3VtZW50IFByZXNlbnRhdGlvbicsICdpY29uJzogJ2ZpbGUtcG93ZXJwb2ludCcsICd1bml0JzogJ3B0J30sXG4gICAgJ3BwdG0nOiB7J2Zvcm1hdCc6ICdPcGVuIERvY3VtZW50IFByZXNlbnRhdGlvbicsICdpY29uJzogJ2ZpbGUtcG93ZXJwb2ludCcsICd1bml0JzogJ3B0J30sXG4gICAgJ3Bwc20nOiB7J2Zvcm1hdCc6ICdPcGVuIERvY3VtZW50IFByZXNlbnRhdGlvbicsICdpY29uJzogJ2ZpbGUtcG93ZXJwb2ludCcsICd1bml0JzogJ3B0J30sXG4gICAgJ3J0Zic6IHsnZm9ybWF0JzogJ1JpY2ggVGV4dCBGb3JtYXQnLCAnaWNvbic6ICdmaWxlLWFsdCcsICd1bml0JzogJ3B0J30sXG4gICAgJ3R4dCc6IHsnZm9ybWF0JzogJ1BsYWluIFRleHQgRmlsZScsICdpY29uJzogJ2ZpbGUtYWx0JywgJ3VuaXQnOiAncHQnfSxcbiAgICAnY3N2Jzogeydmb3JtYXQnOiAnQ29tbWEtU2VwYXJhdGVkIFZhbHVlcycsICdpY29uJzogJ2ZpbGUtZXhjZWwnLCAndW5pdCc6ICdweCd9LFxuICAgICdodG1sJzogeydmb3JtYXQnOiAnSHlwZXJUZXh0IE1hcmt1cCBMYW5ndWFnZScsICdpY29uJzogJ2ZpbGUtd29yZCcsICd1bml0JzogJ3B0J30sXG4gICAgJ21odCc6IHsnZm9ybWF0JzogJ0h5cGVyVGV4dCBNYXJrdXAgTGFuZ3VhZ2UnLCAnaWNvbic6ICdmaWxlLXdvcmQnLCAndW5pdCc6ICdwdCd9LFxuICAgICdtaHRtbCc6IHsnZm9ybWF0JzogJ0h5cGVyVGV4dCBNYXJrdXAgTGFuZ3VhZ2UnLCAnaWNvbic6ICdmaWxlLXdvcmQnLCAndW5pdCc6ICdwdCd9LFxuICAgICd4bWwnOiB7J2Zvcm1hdCc6ICdFeHRlbnNpYmxlIE1hcmt1cCBMYW5ndWFnZScsICdpY29uJzogJ2ZpbGUtd29yZCcsICd1bml0JzogJ3B0J30sXG4gICAgJ3hwcyc6IHsnZm9ybWF0JzogJ1hNTCBQYXBlciBTcGVjaWZpY2F0aW9uJywgJ2ljb24nOiAnZmlsZS13b3JkJywgJ3VuaXQnOiAncHQnfSxcbiAgICAnZHhmJzogeydmb3JtYXQnOiAnQXV0b0NBRCBEcmF3aW5nIEZpbGUgRm9ybWF0JywgJ2ljb24nOiAnZmlsZS1pbWFnZScsICd1bml0JzogJ3B4J30sXG4gICAgJ2R3Zyc6IHsnZm9ybWF0JzogJ0F1dG9DQUQgRHJhd2luZyBGaWxlIEZvcm1hdCcsICdpY29uJzogJ2ZpbGUtaW1hZ2UnLCAndW5pdCc6ICdweCd9LFxuICAgICdibXAnOiB7J2Zvcm1hdCc6ICdCaXRtYXAgUGljdHVyZScsICdpY29uJzogJ2ZpbGUtaW1hZ2UnLCAndW5pdCc6ICdweCd9LFxuICAgICdnaWYnOiB7J2Zvcm1hdCc6ICdHcmFwaGljcyBJbnRlcmNoYW5nZSBGb3JtYXQnLCAnaWNvbic6ICdmaWxlLWltYWdlJywgJ3VuaXQnOiAncHgnfSxcbiAgICAnanBnJzogeydmb3JtYXQnOiAnSm9pbnQgUGhvdG9ncmFwaGljIEV4cGVydHMgR3JvdXAnLCAnaWNvbic6ICdmaWxlLWltYWdlJywgJ3VuaXQnOiAncHgnfSxcbiAgICAnanBlJzogeydmb3JtYXQnOiAnSm9pbnQgUGhvdG9ncmFwaGljIEV4cGVydHMgR3JvdXAnLCAnaWNvbic6ICdmaWxlLWltYWdlJywgJ3VuaXQnOiAncHgnfSxcbiAgICAnanBlZyc6IHsnZm9ybWF0JzogJ0pvaW50IFBob3RvZ3JhcGhpYyBFeHBlcnRzIEdyb3VwJywgJ2ljb24nOiAnZmlsZS1pbWFnZScsICd1bml0JzogJ3B4J30sXG4gICAgJ2pmaWYnOiB7J2Zvcm1hdCc6ICdKb2ludCBQaG90b2dyYXBoaWMgRXhwZXJ0cyBHcm91cCcsICdpY29uJzogJ2ZpbGUtaW1hZ2UnLCAndW5pdCc6ICdweCd9LFxuICAgICdwbmcnOiB7J2Zvcm1hdCc6ICdQb3J0YWJsZSBOZXR3b3JrIEdyYXBoaWNzJywgJ2ljb24nOiAnZmlsZS1pbWFnZScsICd1bml0JzogJ3B4J30sXG4gICAgJ3RpZmYnOiB7J2Zvcm1hdCc6ICdUYWdnZWQgSW1hZ2UgRmlsZSBGb3JtYXQnLCAnaWNvbic6ICdmaWxlLWltYWdlJywgJ3VuaXQnOiAncHgnfSxcbiAgICAndGlmJzogeydmb3JtYXQnOiAnVGFnZ2VkIEltYWdlIEZpbGUgRm9ybWF0JywgJ2ljb24nOiAnZmlsZS1pbWFnZScsICd1bml0JzogJ3B4J30sXG4gICAgJ3BzZCc6IHsnZm9ybWF0JzogJ1RhZ2dlZCBJbWFnZSBGaWxlIEZvcm1hdCcsICdpY29uJzogJ2ZpbGUtaW1hZ2UnLCAndW5pdCc6ICdweCd9LFxuICAgICdzdmcnOiB7J2Zvcm1hdCc6ICdUYWdnZWQgSW1hZ2UgRmlsZSBGb3JtYXQnLCAnaWNvbic6ICdmaWxlLWltYWdlJywgJ3VuaXQnOiAncHgnfSxcbiAgICAnanAyJzogeydmb3JtYXQnOiAnVGFnZ2VkIEltYWdlIEZpbGUgRm9ybWF0JywgJ2ljb24nOiAnZmlsZS1pbWFnZScsICd1bml0JzogJ3B4J30sXG4gICAgJ2VwdWInOiB7J2Zvcm1hdCc6ICdFbGVjdHJvbmljIFB1YmxpY2F0aW9uJywgJ2ljb24nOiAnZmlsZS1wZGYnLCAndW5pdCc6ICdwdCd9LFxuICAgICdpY28nOiB7J2Zvcm1hdCc6ICdXaW5kb3dzIEljb24nLCAnaWNvbic6ICdmaWxlLWltYWdlJywgJ3VuaXQnOiAncHgnfSxcbiAgICAnd2VicCc6IHsnZm9ybWF0JzogJ0NvbXByZXNzZWQgSW1hZ2UnLCAnaWNvbic6ICdmaWxlLWltYWdlJywgJ3VuaXQnOiAncHgnfSxcbiAgICAnbW9iaSc6IHsnZm9ybWF0JzogJ01vYmlwb2NrZXQgZUJvb2snLCAnaWNvbic6ICdmaWxlLXBkZicsICd1bml0JzogJ3B0J30sXG4gICAgJ3RleCc6IHsnZm9ybWF0JzogJ0xhVGVYIFNvdXJjZSBEb2N1bWVudCcsICdpY29uJzogJ2ZpbGUtcGRmJywgJ3VuaXQnOiAncHQnfSxcbiAgICAnZGp2dSc6IHsnZm9ybWF0JzogJ011bHRpLUxheWVyIFJhc3RlciBJbWFnZScsICdpY29uJzogJ2ZpbGUtYWx0JywgJ3VuaXQnOiAncHQnfSxcbiAgICAndW5rbm93bic6IHsnZm9ybWF0JzogJ1RoaXMgZm9ybWF0IGlzIG5vdCBzdXBwb3J0ZWQnLCAnaWNvbic6ICdmaWxlJ30sXG4gIH07XG5cbiAgcHVibGljIHN0YXRpYyBmaW5kKGZpbGVuYW1lOiBzdHJpbmcsIGlzRGlyZWN0b3J5OiBib29sZWFuKSB7XG4gICAgaWYgKGZpbGVuYW1lICYmICFpc0RpcmVjdG9yeSkge1xuICAgICAgY29uc3Qgc3RyaW5ncyA9IGZpbGVuYW1lLnNwbGl0KCcuJyk7XG4gICAgICBjb25zdCBuYW1lID0gc3RyaW5ncy5wb3AoKS50b0xvd2VyQ2FzZSgpO1xuICAgICAgaWYgKHR5cGVvZiBGaWxlVXRpbC5tYXBbbmFtZV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgcmV0dXJuIHN0cmluZ3MubGVuZ3RoID4gMCA/IEZpbGVVdGlsLm1hcFsndW5rbm93biddIDogRmlsZVV0aWwubWFwWydmb2xkZXInXTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBGaWxlVXRpbC5tYXBbbmFtZV07XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBGaWxlVXRpbC5tYXBbJ2ZvbGRlciddO1xuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgRmlsZVNlcnZpY2Uge1xuXG4gIGNvbnN0cnVjdG9yKCkge1xuICB9XG59XG4iXX0=