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
    /** @type {?} */
    FileDescription.prototype.showGridLines;
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
/** @enum {number} */
const FilePropertyCategory = {
    BuildIn: 0,
    Default: 1,
};
export { FilePropertyCategory };
FilePropertyCategory[FilePropertyCategory.BuildIn] = 'BuildIn';
FilePropertyCategory[FilePropertyCategory.Default] = 'Default';
export class FilePropertyModel {
}
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmlsZS5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdyb3VwZG9jcy5leGFtcGxlcy5hbmd1bGFyL2NvbW1vbi1jb21wb25lbnRzLyIsInNvdXJjZXMiOlsibGliL2ZpbGUuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsTUFBTSxPQUFPLFNBQVM7Q0FPckI7OztJQU5DLHlCQUFhOztJQUNiLDBCQUFjOztJQUNkLDBCQUFjOztJQUNkLDJCQUFlOztJQUNmLDJCQUFlOztJQUNmLDZCQUFrQjs7QUFHcEIsTUFBTSxPQUFPLFdBQVc7Q0FHdkI7OztJQUZDLGlDQUFtQjs7SUFDbkIsNEJBQWM7O0FBR2hCLE1BQU0sT0FBTyxlQUFlOzs7OztJQUkxQixZQUFZLElBQVksRUFBRSxRQUFnQjtRQUN4QyxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztRQUNqQixJQUFJLENBQUMsUUFBUSxHQUFHLFFBQVEsQ0FBQztJQUMzQixDQUFDO0NBQ0Y7OztJQVBDLCtCQUFhOztJQUNiLG1DQUFpQjs7QUFRbkIsTUFBTSxPQUFPLFFBQVMsU0FBUSxlQUFlOzs7Ozs7SUFHM0MsWUFBWSxJQUFZLEVBQUUsUUFBZ0IsRUFBRSxPQUFlO1FBQ3pELEtBQUssQ0FBQyxJQUFJLEVBQUUsUUFBUSxDQUFDLENBQUM7UUFDdEIsSUFBSSxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUM7SUFDekIsQ0FBQztDQUNGOzs7SUFOQywyQkFBZ0I7O0FBUWxCLE1BQU0sT0FBTyxlQUFlO0lBQTVCO1FBR0UsaUJBQVksR0FBRyxJQUFJLENBQUM7SUFFdEIsQ0FBQztDQUFBOzs7SUFKQywrQkFBYTs7SUFDYixnQ0FBbUI7O0lBQ25CLHVDQUFvQjs7SUFDcEIsd0NBQXVCOztBQUd6QixNQUFNLE9BQU8sU0FBUztDQU1yQjs7O0lBTEMseUJBQWE7O0lBQ2IseUJBQWE7O0lBQ2IsOEJBQW1COztJQUNuQix5QkFBYTs7SUFDYixnQ0FBcUI7Ozs7SUFJckIsVUFBTztJ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RSxNQUFNLEVBQUUsVUFBVSxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUM7SUFDNUUsTUFBTSxFQUFFLEVBQUMsUUFBUSxFQUFFLDBCQUEwQixFQUFFLE1BQU0sRUFBRSxVQUFVLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBQztJQUNoRixTQUFTLEVBQUUsRUFBQyxRQUFRLEVBQUUsOEJBQThCLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBQztDQUN0RSxDQUFDOzs7SUEzRUYsYUEyRUU7O0FBaUJKLE1BQU0sT0FBTyxXQUFXO0lBRXRCO0lBQ0EsQ0FBQztDQUNGIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNsYXNzIFBhZ2VNb2RlbCB7XHJcbiAgZGF0YTogc3RyaW5nO1xyXG4gIGFuZ2xlOiBudW1iZXI7XHJcbiAgd2lkdGg6IG51bWJlcjtcclxuICBoZWlnaHQ6IG51bWJlcjtcclxuICBudW1iZXI6IG51bWJlcjtcclxuICBlZGl0YWJsZTogYm9vbGVhbjtcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIFJvdGF0ZWRQYWdlIHtcclxuICBwYWdlTnVtYmVyOiBudW1iZXI7XHJcbiAgYW5nbGU6IG51bWJlcjtcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIEZpbGVDcmVkZW50aWFscyB7XHJcbiAgZ3VpZDogc3RyaW5nO1xyXG4gIHBhc3N3b3JkOiBzdHJpbmc7XHJcblxyXG4gIGNvbnN0cnVjdG9yKGd1aWQ6IHN0cmluZywgcGFzc3dvcmQ6IHN0cmluZykge1xyXG4gICAgdGhpcy5ndWlkID0gZ3VpZDtcclxuICAgIHRoaXMucGFzc3dvcmQgPSBwYXNzd29yZDtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBTYXZlRmlsZSBleHRlbmRzIEZpbGVDcmVkZW50aWFscyB7XHJcbiAgY29udGVudDogc3RyaW5nO1xyXG5cclxuICBjb25zdHJ1Y3RvcihndWlkOiBzdHJpbmcsIHBhc3N3b3JkOiBzdHJpbmcsIGNvbnRlbnQ6IHN0cmluZykge1xyXG4gICAgc3VwZXIoZ3VpZCwgcGFzc3dvcmQpO1xyXG4gICAgdGhpcy5jb250ZW50ID0gY29udGVudDtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBGaWxlRGVzY3JpcHRpb24ge1xyXG4gIGd1aWQ6IHN0cmluZztcclxuICBwYWdlczogUGFnZU1vZGVsW107XHJcbiAgcHJpbnRBbGxvd2VkID0gdHJ1ZTtcclxuICBzaG93R3JpZExpbmVzOiBib29sZWFuO1xyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgRmlsZU1vZGVsIHtcclxuICBndWlkOiBzdHJpbmc7XHJcbiAgbmFtZTogc3RyaW5nO1xyXG4gIGRpcmVjdG9yeTogYm9vbGVhbjtcclxuICBzaXplOiBudW1iZXI7XHJcbiAgaXNEaXJlY3Rvcnk6IGJvb2xlYW47XHJcbn1cclxuXHJcbmV4cG9ydCBlbnVtIEZpbGVQcm9wZXJ0eUNhdGVnb3J5IHtcclxuICBCdWlsZEluLFxyXG4gIERlZmF1bHRcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIEZpbGVQcm9wZXJ0eU1vZGVsIHtcclxuICBjYXRlZ29yeTogRmlsZVByb3BlcnR5Q2F0ZWdvcnk7XHJcbiAgbmFtZTogc3RyaW5nO1xyXG4gIHZhbHVlOiBhbnk7XHJcbiAgdHlwZTogbnVtYmVyO1xyXG4gIG9yaWdpbmFsOiBib29sZWFuO1xyXG4gIHNlbGVjdGVkOiBib29sZWFuO1xyXG4gIGVkaXRpbmc6IGJvb2xlYW47XHJcbiAgZGlzYWJsZWQ6IGJvb2xlYW47XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBIdHRwRXJyb3Ige1xyXG4gIHN0YXRpYyBCYWRSZXF1ZXN0ID0gNDAwO1xyXG4gIHN0YXRpYyBVbmF1dGhvcml6ZWQgPSA0MDE7XHJcbiAgc3RhdGljIEZvcmJpZGRlbiA9IDQwMztcclxuICBzdGF0aWMgTm90Rm91bmQgPSA0MDQ7XHJcbiAgc3RhdGljIFRpbWVPdXQgPSA0MDg7XHJcbiAgc3RhdGljIENvbmZsaWN0ID0gNDA5O1xyXG4gIHN0YXRpYyBJbnRlcm5hbFNlcnZlckVycm9yID0gNTAwO1xyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgVXRpbHMge1xyXG4gIHB1YmxpYyBzdGF0aWMgZ2V0TW91c2VQb3NpdGlvbihldmVudCkge1xyXG4gICAgY29uc3QgbW91c2UgPSB7XHJcbiAgICAgIHg6IDAsXHJcbiAgICAgIHk6IDBcclxuICAgIH07XHJcbiAgICBjb25zdCB3RXZlbnQ6IERyYWdFdmVudCA9IDxEcmFnRXZlbnQ+d2luZG93LmV2ZW50O1xyXG4gICAgY29uc3QgZXYgPSBldmVudCB8fCB3RXZlbnQ7IC8vTW96IHx8IElFXHJcbiAgICBpZiAoZXYucGFnZVggfHwgd0V2ZW50LnBhZ2VYIHx8IHdFdmVudC5zY3JlZW5YIHx8IChldi50b3VjaGVzICYmIGV2LnRvdWNoZXNbMF0gJiYgZXYudG91Y2hlc1swXS5wYWdlWCkpIHsgLy9Nb3pcclxuICAgICAgY29uc3QgcGFnZVggPSB0eXBlb2YgZXYucGFnZVggIT09IFwidW5kZWZpbmVkXCIgJiYgZXYucGFnZVggIT09IDAgPyBldi5wYWdlWCA6IHdFdmVudC5wYWdlWDtcclxuICAgICAgY29uc3QgcGFnZVkgPSB0eXBlb2YgZXYucGFnZVkgIT09IFwidW5kZWZpbmVkXCIgJiYgZXYucGFnZVkgIT09IDAgPyBldi5wYWdlWSA6IHdFdmVudC5wYWdlWTtcclxuICAgICAgY29uc3Qgc2NyZWVuWCA9IHR5cGVvZiB3RXZlbnQuc2NyZWVuWCAhPT0gXCJ1bmRlZmluZWRcIiAmJiB3RXZlbnQuc2NyZWVuWSAhPT0gMDtcclxuICAgICAgY29uc3Qgc2NyZWVuWSA9IHR5cGVvZiB3RXZlbnQuc2NyZWVuWSAhPT0gXCJ1bmRlZmluZWRcIiAmJiB3RXZlbnQuc2NyZWVuWSAhPT0gMDtcclxuICAgICAgbW91c2UueCA9IHBhZ2VYID8gcGFnZVggOiAoc2NyZWVuWCA/IHdFdmVudC5zY3JlZW5YIDogZXYudG91Y2hlc1swXS5wYWdlWCk7XHJcbiAgICAgIG1vdXNlLnkgPSBwYWdlWSA/IHBhZ2VZIDogKHNjcmVlblkgPyB3RXZlbnQuc2NyZWVuWSA6IGV2LnRvdWNoZXNbMF0ucGFnZVkpO1xyXG4gICAgfSBlbHNlIGlmIChldi5jbGllbnRYKSB7IC8vSUVcclxuICAgICAgbW91c2UueCA9IGV2LmNsaWVudFggKyBkb2N1bWVudC5ib2R5LnNjcm9sbExlZnQ7XHJcbiAgICAgIG1vdXNlLnkgPSBldi5jbGllbnRZICsgZG9jdW1lbnQuYm9keS5zY3JvbGxUb3A7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gbW91c2U7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgc3RhdGljIHRvUmdiKGNvbG9yOiBzdHJpbmcpIHtcclxuICAgIGNvbnN0IHJlc3VsdCA9IC9eIz8oW2EtZlxcZF17Mn0pKFthLWZcXGRdezJ9KShbYS1mXFxkXXsyfSkkL2kuZXhlYyhjb2xvcik7XHJcbiAgICBpZiAocmVzdWx0KSB7XHJcbiAgICAgIGNvbnN0IHIgPSBwYXJzZUludChyZXN1bHRbMV0sIDE2KTtcclxuICAgICAgY29uc3QgZyA9IHBhcnNlSW50KHJlc3VsdFsyXSwgMTYpO1xyXG4gICAgICBjb25zdCBiID0gcGFyc2VJbnQocmVzdWx0WzNdLCAxNik7XHJcbiAgICAgIHJldHVybiByZXN1bHQgPyAncmdiKCcgKyByICsgJywnICsgZyArICcsJyArIGIgKyAnKScgOiAnJztcclxuICAgIH1cclxuICAgIHJldHVybiBjb2xvcjtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBzdGF0aWMgdG9IZXgoY29sb3I6IHN0cmluZykge1xyXG4gICAgLy8gY2hlY2sgaWYgY29sb3IgaXMgc3RhbmRhcmQgaGV4IHZhbHVlXHJcbiAgICBpZiAoY29sb3IubWF0Y2goL1swLTlBLUZdezZ9fFswLTlBLUZdezN9JC9pKSkge1xyXG4gICAgICByZXR1cm4gKGNvbG9yLmNoYXJBdCgwKSA9PT0gXCIjXCIpID8gY29sb3IgOiAoXCIjXCIgKyBjb2xvcik7XHJcbiAgICAgIC8vIGNoZWNrIGlmIGNvbG9yIGlzIFJHQiB2YWx1ZSAtPiBjb252ZXJ0IHRvIGhleFxyXG4gICAgfSBlbHNlIGlmIChjb2xvci5tYXRjaCgvXnJnYlxcKFxccyooXFxkezEsM30pXFxzKixcXHMqKFxcZHsxLDN9KVxccyosXFxzKihcXGR7MSwzfSlcXHMqXFwpJC8pKSB7XHJcbiAgICAgIGNvbnN0IGMgPSAoW3BhcnNlSW50KFJlZ0V4cC4kMSwgMTApLCBwYXJzZUludChSZWdFeHAuJDIsIDEwKSwgcGFyc2VJbnQoUmVnRXhwLiQzLCAxMCldKSxcclxuICAgICAgICBwYWQgPSBmdW5jdGlvbiAoc3RyKSB7XHJcbiAgICAgICAgICBpZiAoc3RyLmxlbmd0aCA8IDIpIHtcclxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDAsIGxlbiA9IDIgLSBzdHIubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcclxuICAgICAgICAgICAgICBzdHIgPSAnMCcgKyBzdHI7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICAgIHJldHVybiBzdHI7XHJcbiAgICAgICAgfTtcclxuICAgICAgaWYgKGMubGVuZ3RoID09PSAzKSB7XHJcbiAgICAgICAgY29uc3QgciA9IHBhZChjWzBdLnRvU3RyaW5nKDE2KSksXHJcbiAgICAgICAgICBnID0gcGFkKGNbMV0udG9TdHJpbmcoMTYpKSxcclxuICAgICAgICAgIGIgPSBwYWQoY1syXS50b1N0cmluZygxNikpO1xyXG4gICAgICAgIHJldHVybiAnIycgKyByICsgZyArIGI7XHJcbiAgICAgIH1cclxuICAgICAgLy8gZWxzZSBkbyBub3RoaW5nXHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICByZXR1cm4gJyc7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgRmlsZVV0aWwge1xyXG4gIHB1YmxpYyBzdGF0aWMgbWFwID0ge1xyXG4gICAgJ2ZvbGRlcic6IHsnZm9ybWF0JzogJycsICdpY29uJzogJ2ZvbGRlcid9LFxyXG4gICAgJ3BkZic6IHsnZm9ybWF0JzogJ1BvcnRhYmxlIERvY3VtZW50IEZvcm1hdCcsICdpY29uJzogJ2ZpbGUtcGRmJywgJ3VuaXQnOiAncHQnfSxcclxuICAgICdkb2MnOiB7J2Zvcm1hdCc6ICdNaWNyb3NvZnQgV29yZCcsICdpY29uJzogJ2ZpbGUtd29yZCcsICd1bml0JzogJ3B0J30sXHJcbiAgICAnZG9jeCc6IHsnZm9ybWF0JzogJ01pY3Jvc29mdCBXb3JkJywgJ2ljb24nOiAnZmlsZS13b3JkJywgJ3VuaXQnOiAncHQnfSxcclxuICAgICdkb2NtJzogeydmb3JtYXQnOiAnTWljcm9zb2Z0IFdvcmQnLCAnaWNvbic6ICdmaWxlLXdvcmQnLCAndW5pdCc6ICdwdCd9LFxyXG4gICAgJ2RvdCc6IHsnZm9ybWF0JzogJ01pY3Jvc29mdCBXb3JkJywgJ2ljb24nOiAnZmlsZS13b3JkJywgJ3VuaXQnOiAncHQnfSxcclxuICAgICdkb3R4Jzogeydmb3JtYXQnOiAnTWljcm9zb2Z0IFdvcmQnLCAnaWNvbic6ICdmaWxlLXdvcmQnLCAndW5pdCc6ICdwdCd9LFxyXG4gICAgJ2RvdG0nOiB7J2Zvcm1hdCc6ICdNaWNyb3NvZnQgV29yZCcsICdpY29uJzogJ2ZpbGUtd29yZCcsICd1bml0JzogJ3B0J30sXHJcbiAgICAneGxzJzogeydmb3JtYXQnOiAnTWljcm9zb2Z0IEV4Y2VsJywgJ2ljb24nOiAnZmlsZS1leGNlbCcsICd1bml0JzogJ3B4J30sXHJcbiAgICAneGxzeCc6IHsnZm9ybWF0JzogJ01pY3Jvc29mdCBFeGNlbCcsICdpY29uJzogJ2ZpbGUtZXhjZWwnLCAndW5pdCc6ICdweCd9LFxyXG4gICAgJ3hsc20nOiB7J2Zvcm1hdCc6ICdNaWNyb3NvZnQgRXhjZWwnLCAnaWNvbic6ICdmaWxlLWV4Y2VsJywgJ3VuaXQnOiAncHgnfSxcclxuICAgICd4bHNiJzogeydmb3JtYXQnOiAnTWljcm9zb2Z0IEV4Y2VsJywgJ2ljb24nOiAnZmlsZS1leGNlbCcsICd1bml0JzogJ3B4J30sXHJcbiAgICAneGxzMjAwMyc6IHsnZm9ybWF0JzogJ01pY3Jvc29mdCBFeGNlbCcsICdpY29uJzogJ2ZpbGUtZXhjZWwnLCAndW5pdCc6ICdweCd9LFxyXG4gICAgJ3hsdHgnOiB7J2Zvcm1hdCc6ICdNaWNyb3NvZnQgRXhjZWwnLCAnaWNvbic6ICdmaWxlLWV4Y2VsJywgJ3VuaXQnOiAncHgnfSxcclxuICAgICd4bHRtJzogeydmb3JtYXQnOiAnTWljcm9zb2Z0IEV4Y2VsJywgJ2ljb24nOiAnZmlsZS1leGNlbCcsICd1bml0JzogJ3B4J30sXHJcbiAgICAncHB0Jzogeydmb3JtYXQnOiAnTWljcm9zb2Z0IFBvd2VyUG9pbnQnLCAnaWNvbic6ICdmaWxlLXBvd2VycG9pbnQnLCAndW5pdCc6ICdwdCd9LFxyXG4gICAgJ3BwdHgnOiB7J2Zvcm1hdCc6ICdNaWNyb3NvZnQgUG93ZXJQb2ludCcsICdpY29uJzogJ2ZpbGUtcG93ZXJwb2ludCcsICd1bml0JzogJ3B0J30sXHJcbiAgICAncHBzJzogeydmb3JtYXQnOiAnTWljcm9zb2Z0IFBvd2VyUG9pbnQnLCAnaWNvbic6ICdmaWxlLXBvd2VycG9pbnQnLCAndW5pdCc6ICdwdCd9LFxyXG4gICAgJ3Bwc3gnOiB7J2Zvcm1hdCc6ICdNaWNyb3NvZnQgUG93ZXJQb2ludCcsICdpY29uJzogJ2ZpbGUtcG93ZXJwb2ludCcsICd1bml0JzogJ3B0J30sXHJcbiAgICAndnNkJzogeydmb3JtYXQnOiAnTWljcm9zb2Z0IFZpc2lvJywgJ2ljb24nOiAnZmlsZS1jb2RlJywgJ3VuaXQnOiAncHgnfSxcclxuICAgICd2ZHgnOiB7J2Zvcm1hdCc6ICdNaWNyb3NvZnQgVmlzaW8nLCAnaWNvbic6ICdmaWxlLWNvZGUnLCAndW5pdCc6ICdweCd9LFxyXG4gICAgJ3Zzcyc6IHsnZm9ybWF0JzogJ01pY3Jvc29mdCBWaXNpbycsICdpY29uJzogJ2ZpbGUtY29kZScsICd1bml0JzogJ3B4J30sXHJcbiAgICAndnN4Jzogeydmb3JtYXQnOiAnTWljcm9zb2Z0IFZpc2lvJywgJ2ljb24nOiAnZmlsZS1jb2RlJywgJ3VuaXQnOiAncHgnfSxcclxuICAgICd2c3QnOiB7J2Zvcm1hdCc6ICdNaWNyb3NvZnQgVmlzaW8nLCAnaWNvbic6ICdmaWxlLWNvZGUnLCAndW5pdCc6ICdweCd9LFxyXG4gICAgJ3Z0eCc6IHsnZm9ybWF0JzogJ01pY3Jvc29mdCBWaXNpbycsICdpY29uJzogJ2ZpbGUtY29kZScsICd1bml0JzogJ3B4J30sXHJcbiAgICAndnNkeCc6IHsnZm9ybWF0JzogJ01pY3Jvc29mdCBWaXNpbycsICdpY29uJzogJ2ZpbGUtY29kZScsICd1bml0JzogJ3B4J30sXHJcbiAgICAndmR3Jzogeydmb3JtYXQnOiAnTWljcm9zb2Z0IFZpc2lvJywgJ2ljb24nOiAnZmlsZS1jb2RlJywgJ3VuaXQnOiAncHgnfSxcclxuICAgICd2c3R4Jzogeydmb3JtYXQnOiAnTWljcm9zb2Z0IFZpc2lvJywgJ2ljb24nOiAnZmlsZS1jb2RlJywgJ3VuaXQnOiAncHgnfSxcclxuICAgICd2c3N4Jzogeydmb3JtYXQnOiAnTWljcm9zb2Z0IFZpc2lvJywgJ2ljb24nOiAnZmlsZS1jb2RlJywgJ3VuaXQnOiAncHgnfSxcclxuICAgICdtcHAnOiB7J2Zvcm1hdCc6ICdNaWNyb3NvZnQgUHJvamVjdCcsICdpY29uJzogJ2ZpbGUtYWx0JywgJ3VuaXQnOiAncHQnfSxcclxuICAgICdtcHQnOiB7J2Zvcm1hdCc6ICdNaWNyb3NvZnQgUHJvamVjdCcsICdpY29uJzogJ2ZpbGUtYWx0JywgJ3VuaXQnOiAncHQnfSxcclxuICAgICdtc2cnOiB7J2Zvcm1hdCc6ICdNaWNyb3NvZnQgT3V0bG9vaycsICdpY29uJzogJ2ZpbGUtYWx0JywgJ3VuaXQnOiAncHQnfSxcclxuICAgICdlbWwnOiB7J2Zvcm1hdCc6ICdNaWNyb3NvZnQgT3V0bG9vaycsICdpY29uJzogJ2ZpbGUtYWx0JywgJ3VuaXQnOiAncHQnfSxcclxuICAgICdlbWx4Jzogeydmb3JtYXQnOiAnTWljcm9zb2Z0IE91dGxvb2snLCAnaWNvbic6ICdmaWxlLWFsdCcsICd1bml0JzogJ3B0J30sXHJcbiAgICAnb25lJzogeydmb3JtYXQnOiAnTWljcm9zb2Z0IE9uZU5vdGUnLCAnaWNvbic6ICdmaWxlLXdvcmQnLCAndW5pdCc6ICdwdCd9LFxyXG4gICAgJ29kdCc6IHsnZm9ybWF0JzogJ09wZW4gRG9jdW1lbnQgVGV4dCcsICdpY29uJzogJ2ZpbGUtd29yZCcsICd1bml0JzogJ3B0J30sXHJcbiAgICAnb3R0Jzogeydmb3JtYXQnOiAnT3BlbiBEb2N1bWVudCBUZXh0IFRlbXBsYXRlJywgJ2ljb24nOiAnZmlsZS13b3JkJywgJ3VuaXQnOiAncHQnfSxcclxuICAgICdvZHMnOiB7J2Zvcm1hdCc6ICdPcGVuIERvY3VtZW50IFNwcmVhZHNoZWV0JywgJ2ljb24nOiAnZmlsZS1leGNlbCcsICd1bml0JzogJ3B4J30sXHJcbiAgICAnb2RwJzogeydmb3JtYXQnOiAnT3BlbiBEb2N1bWVudCBQcmVzZW50YXRpb24nLCAnaWNvbic6ICdmaWxlLXBvd2VycG9pbnQnLCAndW5pdCc6ICdwdCd9LFxyXG4gICAgJ290cCc6IHsnZm9ybWF0JzogJ09wZW4gRG9jdW1lbnQgUHJlc2VudGF0aW9uJywgJ2ljb24nOiAnZmlsZS1wb3dlcnBvaW50JywgJ3VuaXQnOiAncHQnfSxcclxuICAgICdvdHMnOiB7J2Zvcm1hdCc6ICdPcGVuIERvY3VtZW50IFByZXNlbnRhdGlvbicsICdpY29uJzogJ2ZpbGUtcG93ZXJwb2ludCcsICd1bml0JzogJ3B0J30sXHJcbiAgICAncG90eCc6IHsnZm9ybWF0JzogJ09wZW4gRG9jdW1lbnQgUHJlc2VudGF0aW9uJywgJ2ljb24nOiAnZmlsZS1wb3dlcnBvaW50JywgJ3VuaXQnOiAncHQnfSxcclxuICAgICdwb3RtJzogeydmb3JtYXQnOiAnT3BlbiBEb2N1bWVudCBQcmVzZW50YXRpb24nLCAnaWNvbic6ICdmaWxlLXBvd2VycG9pbnQnLCAndW5pdCc6ICdwdCd9LFxyXG4gICAgJ3BwdG0nOiB7J2Zvcm1hdCc6ICdPcGVuIERvY3VtZW50IFByZXNlbnRhdGlvbicsICdpY29uJzogJ2ZpbGUtcG93ZXJwb2ludCcsICd1bml0JzogJ3B0J30sXHJcbiAgICAncHBzbSc6IHsnZm9ybWF0JzogJ09wZW4gRG9jdW1lbnQgUHJlc2VudGF0aW9uJywgJ2ljb24nOiAnZmlsZS1wb3dlcnBvaW50JywgJ3VuaXQnOiAncHQnfSxcclxuICAgICdydGYnOiB7J2Zvcm1hdCc6ICdSaWNoIFRleHQgRm9ybWF0JywgJ2ljb24nOiAnZmlsZS1hbHQnLCAndW5pdCc6ICdwdCd9LFxyXG4gICAgJ3R4dCc6IHsnZm9ybWF0JzogJ1BsYWluIFRleHQgRmlsZScsICdpY29uJzogJ2ZpbGUtYWx0JywgJ3VuaXQnOiAncHQnfSxcclxuICAgICdjc3YnOiB7J2Zvcm1hdCc6ICdDb21tYS1TZXBhcmF0ZWQgVmFsdWVzJywgJ2ljb24nOiAnZmlsZS1leGNlbCcsICd1bml0JzogJ3B4J30sXHJcbiAgICAnaHRtbCc6IHsnZm9ybWF0JzogJ0h5cGVyVGV4dCBNYXJrdXAgTGFuZ3VhZ2UnLCAnaWNvbic6ICdmaWxlLXdvcmQnLCAndW5pdCc6ICdwdCd9LFxyXG4gICAgJ21odCc6IHsnZm9ybWF0JzogJ0h5cGVyVGV4dCBNYXJrdXAgTGFuZ3VhZ2UnLCAnaWNvbic6ICdmaWxlLXdvcmQnLCAndW5pdCc6ICdwdCd9LFxyXG4gICAgJ21odG1sJzogeydmb3JtYXQnOiAnSHlwZXJUZXh0IE1hcmt1cCBMYW5ndWFnZScsICdpY29uJzogJ2ZpbGUtd29yZCcsICd1bml0JzogJ3B0J30sXHJcbiAgICAneG1sJzogeydmb3JtYXQnOiAnRXh0ZW5zaWJsZSBNYXJrdXAgTGFuZ3VhZ2UnLCAnaWNvbic6ICdmaWxlLXdvcmQnLCAndW5pdCc6ICdwdCd9LFxyXG4gICAgJ3hwcyc6IHsnZm9ybWF0JzogJ1hNTCBQYXBlciBTcGVjaWZpY2F0aW9uJywgJ2ljb24nOiAnZmlsZS13b3JkJywgJ3VuaXQnOiAncHQnfSxcclxuICAgICdkeGYnOiB7J2Zvcm1hdCc6ICdBdXRvQ0FEIERyYXdpbmcgRmlsZSBGb3JtYXQnLCAnaWNvbic6ICdmaWxlLWltYWdlJywgJ3VuaXQnOiAncHgnfSxcclxuICAgICdkd2cnOiB7J2Zvcm1hdCc6ICdBdXRvQ0FEIERyYXdpbmcgRmlsZSBGb3JtYXQnLCAnaWNvbic6ICdmaWxlLWltYWdlJywgJ3VuaXQnOiAncHgnfSxcclxuICAgICdibXAnOiB7J2Zvcm1hdCc6ICdCaXRtYXAgUGljdHVyZScsICdpY29uJzogJ2ZpbGUtaW1hZ2UnLCAndW5pdCc6ICdweCd9LFxyXG4gICAgJ2dpZic6IHsnZm9ybWF0JzogJ0dyYXBoaWNzIEludGVyY2hhbmdlIEZvcm1hdCcsICdpY29uJzogJ2ZpbGUtaW1hZ2UnLCAndW5pdCc6ICdweCd9LFxyXG4gICAgJ2pwZyc6IHsnZm9ybWF0JzogJ0pvaW50IFBob3RvZ3JhcGhpYyBFeHBlcnRzIEdyb3VwJywgJ2ljb24nOiAnZmlsZS1pbWFnZScsICd1bml0JzogJ3B4J30sXHJcbiAgICAnanBlJzogeydmb3JtYXQnOiAnSm9pbnQgUGhvdG9ncmFwaGljIEV4cGVydHMgR3JvdXAnLCAnaWNvbic6ICdmaWxlLWltYWdlJywgJ3VuaXQnOiAncHgnfSxcclxuICAgICdqcGVnJzogeydmb3JtYXQnOiAnSm9pbnQgUGhvdG9ncmFwaGljIEV4cGVydHMgR3JvdXAnLCAnaWNvbic6ICdmaWxlLWltYWdlJywgJ3VuaXQnOiAncHgnfSxcclxuICAgICdqZmlmJzogeydmb3JtYXQnOiAnSm9pbnQgUGhvdG9ncmFwaGljIEV4cGVydHMgR3JvdXAnLCAnaWNvbic6ICdmaWxlLWltYWdlJywgJ3VuaXQnOiAncHgnfSxcclxuICAgICdwbmcnOiB7J2Zvcm1hdCc6ICdQb3J0YWJsZSBOZXR3b3JrIEdyYXBoaWNzJywgJ2ljb24nOiAnZmlsZS1pbWFnZScsICd1bml0JzogJ3B4J30sXHJcbiAgICAndGlmZic6IHsnZm9ybWF0JzogJ1RhZ2dlZCBJbWFnZSBGaWxlIEZvcm1hdCcsICdpY29uJzogJ2ZpbGUtaW1hZ2UnLCAndW5pdCc6ICdweCd9LFxyXG4gICAgJ3RpZic6IHsnZm9ybWF0JzogJ1RhZ2dlZCBJbWFnZSBGaWxlIEZvcm1hdCcsICdpY29uJzogJ2ZpbGUtaW1hZ2UnLCAndW5pdCc6ICdweCd9LFxyXG4gICAgJ3BzZCc6IHsnZm9ybWF0JzogJ1RhZ2dlZCBJbWFnZSBGaWxlIEZvcm1hdCcsICdpY29uJzogJ2ZpbGUtaW1hZ2UnLCAndW5pdCc6ICdweCd9LFxyXG4gICAgJ3N2Zyc6IHsnZm9ybWF0JzogJ1RhZ2dlZCBJbWFnZSBGaWxlIEZvcm1hdCcsICdpY29uJzogJ2ZpbGUtaW1hZ2UnLCAndW5pdCc6ICdweCd9LFxyXG4gICAgJ2pwMic6IHsnZm9ybWF0JzogJ1RhZ2dlZCBJbWFnZSBGaWxlIEZvcm1hdCcsICdpY29uJzogJ2ZpbGUtaW1hZ2UnLCAndW5pdCc6ICdweCd9LFxyXG4gICAgJ2VwdWInOiB7J2Zvcm1hdCc6ICdFbGVjdHJvbmljIFB1YmxpY2F0aW9uJywgJ2ljb24nOiAnZmlsZS1wZGYnLCAndW5pdCc6ICdwdCd9LFxyXG4gICAgJ2ljbyc6IHsnZm9ybWF0JzogJ1dpbmRvd3MgSWNvbicsICdpY29uJzogJ2ZpbGUtaW1hZ2UnLCAndW5pdCc6ICdweCd9LFxyXG4gICAgJ3dlYnAnOiB7J2Zvcm1hdCc6ICdDb21wcmVzc2VkIEltYWdlJywgJ2ljb24nOiAnZmlsZS1pbWFnZScsICd1bml0JzogJ3B4J30sXHJcbiAgICAnbW9iaSc6IHsnZm9ybWF0JzogJ01vYmlwb2NrZXQgZUJvb2snLCAnaWNvbic6ICdmaWxlLXBkZicsICd1bml0JzogJ3B0J30sXHJcbiAgICAndGV4Jzogeydmb3JtYXQnOiAnTGFUZVggU291cmNlIERvY3VtZW50JywgJ2ljb24nOiAnZmlsZS1wZGYnLCAndW5pdCc6ICdwdCd9LFxyXG4gICAgJ2RqdnUnOiB7J2Zvcm1hdCc6ICdNdWx0aS1MYXllciBSYXN0ZXIgSW1hZ2UnLCAnaWNvbic6ICdmaWxlLWFsdCcsICd1bml0JzogJ3B0J30sXHJcbiAgICAndW5rbm93bic6IHsnZm9ybWF0JzogJ1RoaXMgZm9ybWF0IGlzIG5vdCBzdXBwb3J0ZWQnLCAnaWNvbic6ICdmaWxlJ30sXHJcbiAgfTtcclxuXHJcbiAgcHVibGljIHN0YXRpYyBmaW5kKGZpbGVuYW1lOiBzdHJpbmcsIGlzRGlyZWN0b3J5OiBib29sZWFuKSB7XHJcbiAgICBpZiAoZmlsZW5hbWUgJiYgIWlzRGlyZWN0b3J5KSB7XHJcbiAgICAgIGNvbnN0IHN0cmluZ3MgPSBmaWxlbmFtZS5zcGxpdCgnLicpO1xyXG4gICAgICBjb25zdCBuYW1lID0gc3RyaW5ncy5wb3AoKS50b0xvd2VyQ2FzZSgpO1xyXG4gICAgICBpZiAodHlwZW9mIEZpbGVVdGlsLm1hcFtuYW1lXSA9PT0gXCJ1bmRlZmluZWRcIikge1xyXG4gICAgICAgIHJldHVybiBzdHJpbmdzLmxlbmd0aCA+IDAgPyBGaWxlVXRpbC5tYXBbJ3Vua25vd24nXSA6IEZpbGVVdGlsLm1hcFsnZm9sZGVyJ107XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgcmV0dXJuIEZpbGVVdGlsLm1hcFtuYW1lXTtcclxuICAgICAgfVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgcmV0dXJuIEZpbGVVdGlsLm1hcFsnZm9sZGVyJ107XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgRmlsZVNlcnZpY2Uge1xyXG5cclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICB9XHJcbn1cclxuIl19