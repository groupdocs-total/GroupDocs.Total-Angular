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
    /** @type {?} */
    FileDescription.prototype.thumbnails;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmlsZS5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdyb3VwZG9jcy5leGFtcGxlcy5hbmd1bGFyL2NvbW1vbi1jb21wb25lbnRzLyIsInNvdXJjZXMiOlsibGliL2ZpbGUuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsTUFBTSxPQUFPLFNBQVM7Q0FPckI7OztJQU5DLHlCQUFhOztJQUNiLDBCQUFjOztJQUNkLDBCQUFjOztJQUNkLDJCQUFlOztJQUNmLDJCQUFlOztJQUNmLDZCQUFrQjs7QUFHcEIsTUFBTSxPQUFPLFdBQVc7Q0FHdkI7OztJQUZDLGlDQUFtQjs7SUFDbkIsNEJBQWM7O0FBR2hCLE1BQU0sT0FBTyxlQUFlOzs7OztJQUkxQixZQUFZLElBQVksRUFBRSxRQUFnQjtRQUN4QyxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztRQUNqQixJQUFJLENBQUMsUUFBUSxHQUFHLFFBQVEsQ0FBQztJQUMzQixDQUFDO0NBQ0Y7OztJQVBDLCtCQUFhOztJQUNiLG1DQUFpQjs7QUFRbkIsTUFBTSxPQUFPLFFBQVMsU0FBUSxlQUFlOzs7Ozs7SUFHM0MsWUFBWSxJQUFZLEVBQUUsUUFBZ0IsRUFBRSxPQUFlO1FBQ3pELEtBQUssQ0FBQyxJQUFJLEVBQUUsUUFBUSxDQUFDLENBQUM7UUFDdEIsSUFBSSxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUM7SUFDekIsQ0FBQztDQUNGOzs7SUFOQywyQkFBZ0I7O0FBUWxCLE1BQU0sT0FBTyxlQUFlO0lBQTVCO1FBR0UsaUJBQVksR0FBRyxJQUFJLENBQUM7SUFHdEIsQ0FBQztDQUFBOzs7SUFMQywrQkFBYTs7SUFDYixnQ0FBbUI7O0lBQ25CLHVDQUFvQjs7SUFDcEIsd0NBQXVCOztJQUN2QixxQ0FBd0I7O0FBRzFCLE1BQU0sT0FBTyxTQUFTO0NBTXJCOzs7SUFMQyx5QkFBYTs7SUFDYix5QkFBYTs7SUFDYiw4QkFBbUI7O0lBQ25CLHlCQUFhOztJQUNiLGdDQUFxQjs7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QVEsRUFBRSw4QkFBOEIsRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFDO0NBQ3RFLENBQUM7OztJQTNFRixhQTJFRTs7QUFpQkosTUFBTSxPQUFPLFdBQVc7SUFFdEI7SUFDQSxDQUFDO0NBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY2xhc3MgUGFnZU1vZGVsIHtcbiAgZGF0YTogc3RyaW5nO1xuICBhbmdsZTogbnVtYmVyO1xuICB3aWR0aDogbnVtYmVyO1xuICBoZWlnaHQ6IG51bWJlcjtcbiAgbnVtYmVyOiBudW1iZXI7XG4gIGVkaXRhYmxlOiBib29sZWFuO1xufVxuXG5leHBvcnQgY2xhc3MgUm90YXRlZFBhZ2Uge1xuICBwYWdlTnVtYmVyOiBudW1iZXI7XG4gIGFuZ2xlOiBudW1iZXI7XG59XG5cbmV4cG9ydCBjbGFzcyBGaWxlQ3JlZGVudGlhbHMge1xuICBndWlkOiBzdHJpbmc7XG4gIHBhc3N3b3JkOiBzdHJpbmc7XG5cbiAgY29uc3RydWN0b3IoZ3VpZDogc3RyaW5nLCBwYXNzd29yZDogc3RyaW5nKSB7XG4gICAgdGhpcy5ndWlkID0gZ3VpZDtcbiAgICB0aGlzLnBhc3N3b3JkID0gcGFzc3dvcmQ7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIFNhdmVGaWxlIGV4dGVuZHMgRmlsZUNyZWRlbnRpYWxzIHtcbiAgY29udGVudDogc3RyaW5nO1xuXG4gIGNvbnN0cnVjdG9yKGd1aWQ6IHN0cmluZywgcGFzc3dvcmQ6IHN0cmluZywgY29udGVudDogc3RyaW5nKSB7XG4gICAgc3VwZXIoZ3VpZCwgcGFzc3dvcmQpO1xuICAgIHRoaXMuY29udGVudCA9IGNvbnRlbnQ7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIEZpbGVEZXNjcmlwdGlvbiB7XG4gIGd1aWQ6IHN0cmluZztcbiAgcGFnZXM6IFBhZ2VNb2RlbFtdO1xuICBwcmludEFsbG93ZWQgPSB0cnVlO1xuICBzaG93R3JpZExpbmVzOiBib29sZWFuO1xuICB0aHVtYm5haWxzOiBQYWdlTW9kZWxbXTtcbn1cblxuZXhwb3J0IGNsYXNzIEZpbGVNb2RlbCB7XG4gIGd1aWQ6IHN0cmluZztcbiAgbmFtZTogc3RyaW5nO1xuICBkaXJlY3Rvcnk6IGJvb2xlYW47XG4gIHNpemU6IG51bWJlcjtcbiAgaXNEaXJlY3Rvcnk6IGJvb2xlYW47XG59XG5cbmV4cG9ydCBjbGFzcyBIdHRwRXJyb3Ige1xuICBzdGF0aWMgQmFkUmVxdWVzdCA9IDQwMDtcbiAgc3RhdGljIFVuYXV0aG9yaXplZCA9IDQwMTtcbiAgc3RhdGljIEZvcmJpZGRlbiA9IDQwMztcbiAgc3RhdGljIE5vdEZvdW5kID0gNDA0O1xuICBzdGF0aWMgVGltZU91dCA9IDQwODtcbiAgc3RhdGljIENvbmZsaWN0ID0gNDA5O1xuICBzdGF0aWMgSW50ZXJuYWxTZXJ2ZXJFcnJvciA9IDUwMDtcbn1cblxuZXhwb3J0IGNsYXNzIFV0aWxzIHtcbiAgcHVibGljIHN0YXRpYyBnZXRNb3VzZVBvc2l0aW9uKGV2ZW50KSB7XG4gICAgY29uc3QgbW91c2UgPSB7XG4gICAgICB4OiAwLFxuICAgICAgeTogMFxuICAgIH07XG4gICAgY29uc3Qgd0V2ZW50OiBEcmFnRXZlbnQgPSA8RHJhZ0V2ZW50PndpbmRvdy5ldmVudDtcbiAgICBjb25zdCBldiA9IGV2ZW50IHx8IHdFdmVudDsgLy9Nb3ogfHwgSUVcbiAgICBpZiAoZXYucGFnZVggfHwgd0V2ZW50LnBhZ2VYIHx8IHdFdmVudC5zY3JlZW5YIHx8IChldi50b3VjaGVzICYmIGV2LnRvdWNoZXNbMF0gJiYgZXYudG91Y2hlc1swXS5wYWdlWCkpIHsgLy9Nb3pcbiAgICAgIGNvbnN0IHBhZ2VYID0gdHlwZW9mIGV2LnBhZ2VYICE9PSBcInVuZGVmaW5lZFwiICYmIGV2LnBhZ2VYICE9PSAwID8gZXYucGFnZVggOiB3RXZlbnQucGFnZVg7XG4gICAgICBjb25zdCBwYWdlWSA9IHR5cGVvZiBldi5wYWdlWSAhPT0gXCJ1bmRlZmluZWRcIiAmJiBldi5wYWdlWSAhPT0gMCA/IGV2LnBhZ2VZIDogd0V2ZW50LnBhZ2VZO1xuICAgICAgY29uc3Qgc2NyZWVuWCA9IHR5cGVvZiB3RXZlbnQuc2NyZWVuWCAhPT0gXCJ1bmRlZmluZWRcIiAmJiB3RXZlbnQuc2NyZWVuWSAhPT0gMDtcbiAgICAgIGNvbnN0IHNjcmVlblkgPSB0eXBlb2Ygd0V2ZW50LnNjcmVlblkgIT09IFwidW5kZWZpbmVkXCIgJiYgd0V2ZW50LnNjcmVlblkgIT09IDA7XG4gICAgICBtb3VzZS54ID0gcGFnZVggPyBwYWdlWCA6IChzY3JlZW5YID8gd0V2ZW50LnNjcmVlblggOiBldi50b3VjaGVzWzBdLnBhZ2VYKTtcbiAgICAgIG1vdXNlLnkgPSBwYWdlWSA/IHBhZ2VZIDogKHNjcmVlblkgPyB3RXZlbnQuc2NyZWVuWSA6IGV2LnRvdWNoZXNbMF0ucGFnZVkpO1xuICAgIH0gZWxzZSBpZiAoZXYuY2xpZW50WCkgeyAvL0lFXG4gICAgICBtb3VzZS54ID0gZXYuY2xpZW50WCArIGRvY3VtZW50LmJvZHkuc2Nyb2xsTGVmdDtcbiAgICAgIG1vdXNlLnkgPSBldi5jbGllbnRZICsgZG9jdW1lbnQuYm9keS5zY3JvbGxUb3A7XG4gICAgfVxuICAgIHJldHVybiBtb3VzZTtcbiAgfVxuXG4gIHB1YmxpYyBzdGF0aWMgdG9SZ2IoY29sb3I6IHN0cmluZykge1xuICAgIGNvbnN0IHJlc3VsdCA9IC9eIz8oW2EtZlxcZF17Mn0pKFthLWZcXGRdezJ9KShbYS1mXFxkXXsyfSkkL2kuZXhlYyhjb2xvcik7XG4gICAgaWYgKHJlc3VsdCkge1xuICAgICAgY29uc3QgciA9IHBhcnNlSW50KHJlc3VsdFsxXSwgMTYpO1xuICAgICAgY29uc3QgZyA9IHBhcnNlSW50KHJlc3VsdFsyXSwgMTYpO1xuICAgICAgY29uc3QgYiA9IHBhcnNlSW50KHJlc3VsdFszXSwgMTYpO1xuICAgICAgcmV0dXJuIHJlc3VsdCA/ICdyZ2IoJyArIHIgKyAnLCcgKyBnICsgJywnICsgYiArICcpJyA6ICcnO1xuICAgIH1cbiAgICByZXR1cm4gY29sb3I7XG4gIH1cblxuICBwdWJsaWMgc3RhdGljIHRvSGV4KGNvbG9yOiBzdHJpbmcpIHtcbiAgICAvLyBjaGVjayBpZiBjb2xvciBpcyBzdGFuZGFyZCBoZXggdmFsdWVcbiAgICBpZiAoY29sb3IubWF0Y2goL1swLTlBLUZdezZ9fFswLTlBLUZdezN9JC9pKSkge1xuICAgICAgcmV0dXJuIChjb2xvci5jaGFyQXQoMCkgPT09IFwiI1wiKSA/IGNvbG9yIDogKFwiI1wiICsgY29sb3IpO1xuICAgICAgLy8gY2hlY2sgaWYgY29sb3IgaXMgUkdCIHZhbHVlIC0+IGNvbnZlcnQgdG8gaGV4XG4gICAgfSBlbHNlIGlmIChjb2xvci5tYXRjaCgvXnJnYlxcKFxccyooXFxkezEsM30pXFxzKixcXHMqKFxcZHsxLDN9KVxccyosXFxzKihcXGR7MSwzfSlcXHMqXFwpJC8pKSB7XG4gICAgICBjb25zdCBjID0gKFtwYXJzZUludChSZWdFeHAuJDEsIDEwKSwgcGFyc2VJbnQoUmVnRXhwLiQyLCAxMCksIHBhcnNlSW50KFJlZ0V4cC4kMywgMTApXSksXG4gICAgICAgIHBhZCA9IGZ1bmN0aW9uIChzdHIpIHtcbiAgICAgICAgICBpZiAoc3RyLmxlbmd0aCA8IDIpIHtcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwLCBsZW4gPSAyIC0gc3RyLmxlbmd0aDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICAgICAgICAgIHN0ciA9ICcwJyArIHN0cjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIHN0cjtcbiAgICAgICAgfTtcbiAgICAgIGlmIChjLmxlbmd0aCA9PT0gMykge1xuICAgICAgICBjb25zdCByID0gcGFkKGNbMF0udG9TdHJpbmcoMTYpKSxcbiAgICAgICAgICBnID0gcGFkKGNbMV0udG9TdHJpbmcoMTYpKSxcbiAgICAgICAgICBiID0gcGFkKGNbMl0udG9TdHJpbmcoMTYpKTtcbiAgICAgICAgcmV0dXJuICcjJyArIHIgKyBnICsgYjtcbiAgICAgIH1cbiAgICAgIC8vIGVsc2UgZG8gbm90aGluZ1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gJyc7XG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBGaWxlVXRpbCB7XG4gIHB1YmxpYyBzdGF0aWMgbWFwID0ge1xuICAgICdmb2xkZXInOiB7J2Zvcm1hdCc6ICcnLCAnaWNvbic6ICdmb2xkZXInfSxcbiAgICAncGRmJzogeydmb3JtYXQnOiAnUG9ydGFibGUgRG9jdW1lbnQgRm9ybWF0JywgJ2ljb24nOiAnZmlsZS1wZGYnLCAndW5pdCc6ICdwdCd9LFxuICAgICdkb2MnOiB7J2Zvcm1hdCc6ICdNaWNyb3NvZnQgV29yZCcsICdpY29uJzogJ2ZpbGUtd29yZCcsICd1bml0JzogJ3B0J30sXG4gICAgJ2RvY3gnOiB7J2Zvcm1hdCc6ICdNaWNyb3NvZnQgV29yZCcsICdpY29uJzogJ2ZpbGUtd29yZCcsICd1bml0JzogJ3B0J30sXG4gICAgJ2RvY20nOiB7J2Zvcm1hdCc6ICdNaWNyb3NvZnQgV29yZCcsICdpY29uJzogJ2ZpbGUtd29yZCcsICd1bml0JzogJ3B0J30sXG4gICAgJ2RvdCc6IHsnZm9ybWF0JzogJ01pY3Jvc29mdCBXb3JkJywgJ2ljb24nOiAnZmlsZS13b3JkJywgJ3VuaXQnOiAncHQnfSxcbiAgICAnZG90eCc6IHsnZm9ybWF0JzogJ01pY3Jvc29mdCBXb3JkJywgJ2ljb24nOiAnZmlsZS13b3JkJywgJ3VuaXQnOiAncHQnfSxcbiAgICAnZG90bSc6IHsnZm9ybWF0JzogJ01pY3Jvc29mdCBXb3JkJywgJ2ljb24nOiAnZmlsZS13b3JkJywgJ3VuaXQnOiAncHQnfSxcbiAgICAneGxzJzogeydmb3JtYXQnOiAnTWljcm9zb2Z0IEV4Y2VsJywgJ2ljb24nOiAnZmlsZS1leGNlbCcsICd1bml0JzogJ3B4J30sXG4gICAgJ3hsc3gnOiB7J2Zvcm1hdCc6ICdNaWNyb3NvZnQgRXhjZWwnLCAnaWNvbic6ICdmaWxlLWV4Y2VsJywgJ3VuaXQnOiAncHgnfSxcbiAgICAneGxzbSc6IHsnZm9ybWF0JzogJ01pY3Jvc29mdCBFeGNlbCcsICdpY29uJzogJ2ZpbGUtZXhjZWwnLCAndW5pdCc6ICdweCd9LFxuICAgICd4bHNiJzogeydmb3JtYXQnOiAnTWljcm9zb2Z0IEV4Y2VsJywgJ2ljb24nOiAnZmlsZS1leGNlbCcsICd1bml0JzogJ3B4J30sXG4gICAgJ3hsczIwMDMnOiB7J2Zvcm1hdCc6ICdNaWNyb3NvZnQgRXhjZWwnLCAnaWNvbic6ICdmaWxlLWV4Y2VsJywgJ3VuaXQnOiAncHgnfSxcbiAgICAneGx0eCc6IHsnZm9ybWF0JzogJ01pY3Jvc29mdCBFeGNlbCcsICdpY29uJzogJ2ZpbGUtZXhjZWwnLCAndW5pdCc6ICdweCd9LFxuICAgICd4bHRtJzogeydmb3JtYXQnOiAnTWljcm9zb2Z0IEV4Y2VsJywgJ2ljb24nOiAnZmlsZS1leGNlbCcsICd1bml0JzogJ3B4J30sXG4gICAgJ3BwdCc6IHsnZm9ybWF0JzogJ01pY3Jvc29mdCBQb3dlclBvaW50JywgJ2ljb24nOiAnZmlsZS1wb3dlcnBvaW50JywgJ3VuaXQnOiAncHQnfSxcbiAgICAncHB0eCc6IHsnZm9ybWF0JzogJ01pY3Jvc29mdCBQb3dlclBvaW50JywgJ2ljb24nOiAnZmlsZS1wb3dlcnBvaW50JywgJ3VuaXQnOiAncHQnfSxcbiAgICAncHBzJzogeydmb3JtYXQnOiAnTWljcm9zb2Z0IFBvd2VyUG9pbnQnLCAnaWNvbic6ICdmaWxlLXBvd2VycG9pbnQnLCAndW5pdCc6ICdwdCd9LFxuICAgICdwcHN4Jzogeydmb3JtYXQnOiAnTWljcm9zb2Z0IFBvd2VyUG9pbnQnLCAnaWNvbic6ICdmaWxlLXBvd2VycG9pbnQnLCAndW5pdCc6ICdwdCd9LFxuICAgICd2c2QnOiB7J2Zvcm1hdCc6ICdNaWNyb3NvZnQgVmlzaW8nLCAnaWNvbic6ICdmaWxlLWNvZGUnLCAndW5pdCc6ICdweCd9LFxuICAgICd2ZHgnOiB7J2Zvcm1hdCc6ICdNaWNyb3NvZnQgVmlzaW8nLCAnaWNvbic6ICdmaWxlLWNvZGUnLCAndW5pdCc6ICdweCd9LFxuICAgICd2c3MnOiB7J2Zvcm1hdCc6ICdNaWNyb3NvZnQgVmlzaW8nLCAnaWNvbic6ICdmaWxlLWNvZGUnLCAndW5pdCc6ICdweCd9LFxuICAgICd2c3gnOiB7J2Zvcm1hdCc6ICdNaWNyb3NvZnQgVmlzaW8nLCAnaWNvbic6ICdmaWxlLWNvZGUnLCAndW5pdCc6ICdweCd9LFxuICAgICd2c3QnOiB7J2Zvcm1hdCc6ICdNaWNyb3NvZnQgVmlzaW8nLCAnaWNvbic6ICdmaWxlLWNvZGUnLCAndW5pdCc6ICdweCd9LFxuICAgICd2dHgnOiB7J2Zvcm1hdCc6ICdNaWNyb3NvZnQgVmlzaW8nLCAnaWNvbic6ICdmaWxlLWNvZGUnLCAndW5pdCc6ICdweCd9LFxuICAgICd2c2R4Jzogeydmb3JtYXQnOiAnTWljcm9zb2Z0IFZpc2lvJywgJ2ljb24nOiAnZmlsZS1jb2RlJywgJ3VuaXQnOiAncHgnfSxcbiAgICAndmR3Jzogeydmb3JtYXQnOiAnTWljcm9zb2Z0IFZpc2lvJywgJ2ljb24nOiAnZmlsZS1jb2RlJywgJ3VuaXQnOiAncHgnfSxcbiAgICAndnN0eCc6IHsnZm9ybWF0JzogJ01pY3Jvc29mdCBWaXNpbycsICdpY29uJzogJ2ZpbGUtY29kZScsICd1bml0JzogJ3B4J30sXG4gICAgJ3Zzc3gnOiB7J2Zvcm1hdCc6ICdNaWNyb3NvZnQgVmlzaW8nLCAnaWNvbic6ICdmaWxlLWNvZGUnLCAndW5pdCc6ICdweCd9LFxuICAgICdtcHAnOiB7J2Zvcm1hdCc6ICdNaWNyb3NvZnQgUHJvamVjdCcsICdpY29uJzogJ2ZpbGUtYWx0JywgJ3VuaXQnOiAncHQnfSxcbiAgICAnbXB0Jzogeydmb3JtYXQnOiAnTWljcm9zb2Z0IFByb2plY3QnLCAnaWNvbic6ICdmaWxlLWFsdCcsICd1bml0JzogJ3B0J30sXG4gICAgJ21zZyc6IHsnZm9ybWF0JzogJ01pY3Jvc29mdCBPdXRsb29rJywgJ2ljb24nOiAnZmlsZS1hbHQnLCAndW5pdCc6ICdwdCd9LFxuICAgICdlbWwnOiB7J2Zvcm1hdCc6ICdNaWNyb3NvZnQgT3V0bG9vaycsICdpY29uJzogJ2ZpbGUtYWx0JywgJ3VuaXQnOiAncHQnfSxcbiAgICAnZW1seCc6IHsnZm9ybWF0JzogJ01pY3Jvc29mdCBPdXRsb29rJywgJ2ljb24nOiAnZmlsZS1hbHQnLCAndW5pdCc6ICdwdCd9LFxuICAgICdvbmUnOiB7J2Zvcm1hdCc6ICdNaWNyb3NvZnQgT25lTm90ZScsICdpY29uJzogJ2ZpbGUtd29yZCcsICd1bml0JzogJ3B0J30sXG4gICAgJ29kdCc6IHsnZm9ybWF0JzogJ09wZW4gRG9jdW1lbnQgVGV4dCcsICdpY29uJzogJ2ZpbGUtd29yZCcsICd1bml0JzogJ3B0J30sXG4gICAgJ290dCc6IHsnZm9ybWF0JzogJ09wZW4gRG9jdW1lbnQgVGV4dCBUZW1wbGF0ZScsICdpY29uJzogJ2ZpbGUtd29yZCcsICd1bml0JzogJ3B0J30sXG4gICAgJ29kcyc6IHsnZm9ybWF0JzogJ09wZW4gRG9jdW1lbnQgU3ByZWFkc2hlZXQnLCAnaWNvbic6ICdmaWxlLWV4Y2VsJywgJ3VuaXQnOiAncHgnfSxcbiAgICAnb2RwJzogeydmb3JtYXQnOiAnT3BlbiBEb2N1bWVudCBQcmVzZW50YXRpb24nLCAnaWNvbic6ICdmaWxlLXBvd2VycG9pbnQnLCAndW5pdCc6ICdwdCd9LFxuICAgICdvdHAnOiB7J2Zvcm1hdCc6ICdPcGVuIERvY3VtZW50IFByZXNlbnRhdGlvbicsICdpY29uJzogJ2ZpbGUtcG93ZXJwb2ludCcsICd1bml0JzogJ3B0J30sXG4gICAgJ290cyc6IHsnZm9ybWF0JzogJ09wZW4gRG9jdW1lbnQgUHJlc2VudGF0aW9uJywgJ2ljb24nOiAnZmlsZS1wb3dlcnBvaW50JywgJ3VuaXQnOiAncHQnfSxcbiAgICAncG90eCc6IHsnZm9ybWF0JzogJ09wZW4gRG9jdW1lbnQgUHJlc2VudGF0aW9uJywgJ2ljb24nOiAnZmlsZS1wb3dlcnBvaW50JywgJ3VuaXQnOiAncHQnfSxcbiAgICAncG90bSc6IHsnZm9ybWF0JzogJ09wZW4gRG9jdW1lbnQgUHJlc2VudGF0aW9uJywgJ2ljb24nOiAnZmlsZS1wb3dlcnBvaW50JywgJ3VuaXQnOiAncHQnfSxcbiAgICAncHB0bSc6IHsnZm9ybWF0JzogJ09wZW4gRG9jdW1lbnQgUHJlc2VudGF0aW9uJywgJ2ljb24nOiAnZmlsZS1wb3dlcnBvaW50JywgJ3VuaXQnOiAncHQnfSxcbiAgICAncHBzbSc6IHsnZm9ybWF0JzogJ09wZW4gRG9jdW1lbnQgUHJlc2VudGF0aW9uJywgJ2ljb24nOiAnZmlsZS1wb3dlcnBvaW50JywgJ3VuaXQnOiAncHQnfSxcbiAgICAncnRmJzogeydmb3JtYXQnOiAnUmljaCBUZXh0IEZvcm1hdCcsICdpY29uJzogJ2ZpbGUtYWx0JywgJ3VuaXQnOiAncHQnfSxcbiAgICAndHh0Jzogeydmb3JtYXQnOiAnUGxhaW4gVGV4dCBGaWxlJywgJ2ljb24nOiAnZmlsZS1hbHQnLCAndW5pdCc6ICdwdCd9LFxuICAgICdjc3YnOiB7J2Zvcm1hdCc6ICdDb21tYS1TZXBhcmF0ZWQgVmFsdWVzJywgJ2ljb24nOiAnZmlsZS1leGNlbCcsICd1bml0JzogJ3B4J30sXG4gICAgJ2h0bWwnOiB7J2Zvcm1hdCc6ICdIeXBlclRleHQgTWFya3VwIExhbmd1YWdlJywgJ2ljb24nOiAnZmlsZS13b3JkJywgJ3VuaXQnOiAncHQnfSxcbiAgICAnbWh0Jzogeydmb3JtYXQnOiAnSHlwZXJUZXh0IE1hcmt1cCBMYW5ndWFnZScsICdpY29uJzogJ2ZpbGUtd29yZCcsICd1bml0JzogJ3B0J30sXG4gICAgJ21odG1sJzogeydmb3JtYXQnOiAnSHlwZXJUZXh0IE1hcmt1cCBMYW5ndWFnZScsICdpY29uJzogJ2ZpbGUtd29yZCcsICd1bml0JzogJ3B0J30sXG4gICAgJ3htbCc6IHsnZm9ybWF0JzogJ0V4dGVuc2libGUgTWFya3VwIExhbmd1YWdlJywgJ2ljb24nOiAnZmlsZS13b3JkJywgJ3VuaXQnOiAncHQnfSxcbiAgICAneHBzJzogeydmb3JtYXQnOiAnWE1MIFBhcGVyIFNwZWNpZmljYXRpb24nLCAnaWNvbic6ICdmaWxlLXdvcmQnLCAndW5pdCc6ICdwdCd9LFxuICAgICdkeGYnOiB7J2Zvcm1hdCc6ICdBdXRvQ0FEIERyYXdpbmcgRmlsZSBGb3JtYXQnLCAnaWNvbic6ICdmaWxlLWltYWdlJywgJ3VuaXQnOiAncHgnfSxcbiAgICAnZHdnJzogeydmb3JtYXQnOiAnQXV0b0NBRCBEcmF3aW5nIEZpbGUgRm9ybWF0JywgJ2ljb24nOiAnZmlsZS1pbWFnZScsICd1bml0JzogJ3B4J30sXG4gICAgJ2JtcCc6IHsnZm9ybWF0JzogJ0JpdG1hcCBQaWN0dXJlJywgJ2ljb24nOiAnZmlsZS1pbWFnZScsICd1bml0JzogJ3B4J30sXG4gICAgJ2dpZic6IHsnZm9ybWF0JzogJ0dyYXBoaWNzIEludGVyY2hhbmdlIEZvcm1hdCcsICdpY29uJzogJ2ZpbGUtaW1hZ2UnLCAndW5pdCc6ICdweCd9LFxuICAgICdqcGcnOiB7J2Zvcm1hdCc6ICdKb2ludCBQaG90b2dyYXBoaWMgRXhwZXJ0cyBHcm91cCcsICdpY29uJzogJ2ZpbGUtaW1hZ2UnLCAndW5pdCc6ICdweCd9LFxuICAgICdqcGUnOiB7J2Zvcm1hdCc6ICdKb2ludCBQaG90b2dyYXBoaWMgRXhwZXJ0cyBHcm91cCcsICdpY29uJzogJ2ZpbGUtaW1hZ2UnLCAndW5pdCc6ICdweCd9LFxuICAgICdqcGVnJzogeydmb3JtYXQnOiAnSm9pbnQgUGhvdG9ncmFwaGljIEV4cGVydHMgR3JvdXAnLCAnaWNvbic6ICdmaWxlLWltYWdlJywgJ3VuaXQnOiAncHgnfSxcbiAgICAnamZpZic6IHsnZm9ybWF0JzogJ0pvaW50IFBob3RvZ3JhcGhpYyBFeHBlcnRzIEdyb3VwJywgJ2ljb24nOiAnZmlsZS1pbWFnZScsICd1bml0JzogJ3B4J30sXG4gICAgJ3BuZyc6IHsnZm9ybWF0JzogJ1BvcnRhYmxlIE5ldHdvcmsgR3JhcGhpY3MnLCAnaWNvbic6ICdmaWxlLWltYWdlJywgJ3VuaXQnOiAncHgnfSxcbiAgICAndGlmZic6IHsnZm9ybWF0JzogJ1RhZ2dlZCBJbWFnZSBGaWxlIEZvcm1hdCcsICdpY29uJzogJ2ZpbGUtaW1hZ2UnLCAndW5pdCc6ICdweCd9LFxuICAgICd0aWYnOiB7J2Zvcm1hdCc6ICdUYWdnZWQgSW1hZ2UgRmlsZSBGb3JtYXQnLCAnaWNvbic6ICdmaWxlLWltYWdlJywgJ3VuaXQnOiAncHgnfSxcbiAgICAncHNkJzogeydmb3JtYXQnOiAnVGFnZ2VkIEltYWdlIEZpbGUgRm9ybWF0JywgJ2ljb24nOiAnZmlsZS1pbWFnZScsICd1bml0JzogJ3B4J30sXG4gICAgJ3N2Zyc6IHsnZm9ybWF0JzogJ1RhZ2dlZCBJbWFnZSBGaWxlIEZvcm1hdCcsICdpY29uJzogJ2ZpbGUtaW1hZ2UnLCAndW5pdCc6ICdweCd9LFxuICAgICdqcDInOiB7J2Zvcm1hdCc6ICdUYWdnZWQgSW1hZ2UgRmlsZSBGb3JtYXQnLCAnaWNvbic6ICdmaWxlLWltYWdlJywgJ3VuaXQnOiAncHgnfSxcbiAgICAnZXB1Yic6IHsnZm9ybWF0JzogJ0VsZWN0cm9uaWMgUHVibGljYXRpb24nLCAnaWNvbic6ICdmaWxlLXBkZicsICd1bml0JzogJ3B0J30sXG4gICAgJ2ljbyc6IHsnZm9ybWF0JzogJ1dpbmRvd3MgSWNvbicsICdpY29uJzogJ2ZpbGUtaW1hZ2UnLCAndW5pdCc6ICdweCd9LFxuICAgICd3ZWJwJzogeydmb3JtYXQnOiAnQ29tcHJlc3NlZCBJbWFnZScsICdpY29uJzogJ2ZpbGUtaW1hZ2UnLCAndW5pdCc6ICdweCd9LFxuICAgICdtb2JpJzogeydmb3JtYXQnOiAnTW9iaXBvY2tldCBlQm9vaycsICdpY29uJzogJ2ZpbGUtcGRmJywgJ3VuaXQnOiAncHQnfSxcbiAgICAndGV4Jzogeydmb3JtYXQnOiAnTGFUZVggU291cmNlIERvY3VtZW50JywgJ2ljb24nOiAnZmlsZS1wZGYnLCAndW5pdCc6ICdwdCd9LFxuICAgICdkanZ1Jzogeydmb3JtYXQnOiAnTXVsdGktTGF5ZXIgUmFzdGVyIEltYWdlJywgJ2ljb24nOiAnZmlsZS1hbHQnLCAndW5pdCc6ICdwdCd9LFxuICAgICd1bmtub3duJzogeydmb3JtYXQnOiAnVGhpcyBmb3JtYXQgaXMgbm90IHN1cHBvcnRlZCcsICdpY29uJzogJ2ZpbGUnfSxcbiAgfTtcblxuICBwdWJsaWMgc3RhdGljIGZpbmQoZmlsZW5hbWU6IHN0cmluZywgaXNEaXJlY3Rvcnk6IGJvb2xlYW4pIHtcbiAgICBpZiAoZmlsZW5hbWUgJiYgIWlzRGlyZWN0b3J5KSB7XG4gICAgICBjb25zdCBzdHJpbmdzID0gZmlsZW5hbWUuc3BsaXQoJy4nKTtcbiAgICAgIGNvbnN0IG5hbWUgPSBzdHJpbmdzLnBvcCgpLnRvTG93ZXJDYXNlKCk7XG4gICAgICBpZiAodHlwZW9mIEZpbGVVdGlsLm1hcFtuYW1lXSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICByZXR1cm4gc3RyaW5ncy5sZW5ndGggPiAwID8gRmlsZVV0aWwubWFwWyd1bmtub3duJ10gOiBGaWxlVXRpbC5tYXBbJ2ZvbGRlciddO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIEZpbGVVdGlsLm1hcFtuYW1lXTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIEZpbGVVdGlsLm1hcFsnZm9sZGVyJ107XG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBGaWxlU2VydmljZSB7XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gIH1cbn1cbiJdfQ==