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
if (false) {
    /** @type {?} */
    FileUtil.map;
}
export class FileService {
    constructor() {
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmlsZS5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdyb3VwZG9jcy5leGFtcGxlcy5hbmd1bGFyL2NvbW1vbi1jb21wb25lbnRzLyIsInNvdXJjZXMiOlsibGliL2ZpbGUuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsTUFBTSxPQUFPLFNBQVM7Q0FPckI7OztJQU5DLHlCQUFhOztJQUNiLDBCQUFjOztJQUNkLDBCQUFjOztJQUNkLDJCQUFlOztJQUNmLDJCQUFlOztJQUNmLDZCQUFrQjs7QUFHcEIsTUFBTSxPQUFPLFdBQVc7Q0FHdkI7OztJQUZDLGlDQUFtQjs7SUFDbkIsNEJBQWM7O0FBR2hCLE1BQU0sT0FBTyxlQUFlOzs7OztJQUkxQixZQUFZLElBQVksRUFBRSxRQUFnQjtRQUN4QyxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztRQUNqQixJQUFJLENBQUMsUUFBUSxHQUFHLFFBQVEsQ0FBQztJQUMzQixDQUFDO0NBQ0Y7OztJQVBDLCtCQUFhOztJQUNiLG1DQUFpQjs7QUFRbkIsTUFBTSxPQUFPLFFBQVMsU0FBUSxlQUFlOzs7Ozs7SUFHM0MsWUFBWSxJQUFZLEVBQUUsUUFBZ0IsRUFBRSxPQUFlO1FBQ3pELEtBQUssQ0FBQyxJQUFJLEVBQUUsUUFBUSxDQUFDLENBQUM7UUFDdEIsSUFBSSxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUM7SUFDekIsQ0FBQztDQUNGOzs7SUFOQywyQkFBZ0I7O0FBUWxCLE1BQU0sT0FBTyxlQUFlO0lBQTVCO1FBR0UsaUJBQVksR0FBRyxJQUFJLENBQUM7SUFDdEIsQ0FBQztDQUFBOzs7SUFIQywrQkFBYTs7SUFDYixnQ0FBbUI7O0lBQ25CLHVDQUFvQjs7QUFHdEIsTUFBTSxPQUFPLFNBQVM7Q0FNckI7OztJQUxDLHlCQUFhOztJQUNiLHlCQUFhOztJQUNiLDhCQUFtQjs7SUFDbkIseUJBQWE7O0lBQ2IsZ0NBQXFCOztBQUd2QixNQUFNLE9BQU8sU0FBUzs7QUFDYixv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TUFBTSxFQUFFLFdBQVcsRUFBQztJQUN6RCxLQUFLLEVBQUUsRUFBQyxRQUFRLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBQztJQUN6RCxLQUFLLEVBQUUsRUFBQyxRQUFRLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBQztJQUN6RCxLQUFLLEVBQUUsRUFBQyxRQUFRLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBQztJQUN6RCxNQUFNLEVBQUUsRUFBQyxRQUFRLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBQztJQUMxRCxLQUFLLEVBQUUsRUFBQyxRQUFRLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBQztJQUN6RCxNQUFNLEVBQUUsRUFBQyxRQUFRLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBQztJQUMxRCxNQUFNLEVBQUUsRUFBQyxRQUFRLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBQztJQUMxRCxLQUFLLEVBQUUsRUFBQyxRQUFRLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxFQUFFLFVBQVUsRUFBQztJQUMxRCxLQUFLLEVBQUUsRUFBQyxRQUFRLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxFQUFFLFVBQVUsRUFBQztJQUMxRCxLQUFLLEVBQUUsRUFBQyxRQUFRLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxFQUFFLFVBQVUsRUFBQztJQUMxRCxLQUFLLEVBQUUsRUFBQyxRQUFRLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxFQUFFLFVBQVUsRUFBQztJQUMxRCxNQUFNLEVBQUUsRUFBQyxRQUFRLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxFQUFFLFVBQVUsRUFBQztJQUMzRCxLQUFLLEVBQUUsRUFBQyxRQUFRLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBQztJQUMzRCxLQUFLLEVBQUUsRUFBQyxRQUFRLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBQztJQUM1RCxLQUFLLEVBQUUsRUFBQyxRQUFRLEVBQUUsNkJBQTZCLEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBQztJQUNyRSxLQUFLLEVBQUUsRUFBQyxRQUFRLEVBQUUsMkJBQTJCLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBQztJQUNwRSxLQUFLLEVBQUUsRUFBQyxRQUFRLEVBQUUsNEJBQTRCLEVBQUUsTUFBTSxFQUFFLGlCQUFpQixFQUFDO0lBQzFFLEtBQUssRUFBRSxFQUFDLFFBQVEsRUFBRSw0QkFBNEIsRUFBRSxNQUFNLEVBQUUsaUJBQWlCLEVBQUM7SUFDMUUsS0FBSyxFQUFFLEVBQUMsUUFBUSxFQUFFLDRCQUE0QixFQUFFLE1BQU0sRUFBRSxpQkFBaUIsRUFBQztJQUMxRSxNQUFNLEVBQUUsRUFBQyxRQUFRLEVBQUUsNEJBQTRCLEVBQUUsTUFBTSxFQUFFLGlCQUFpQixFQUFDO0lBQzNFLE1BQU0sRUFBRSxFQUFDLFFBQVEsRUFBRSw0QkFBNEIsRUFBRSxNQUFNLEVBQUUsaUJBQWlCLEVBQUM7SUFDM0UsTUFBTSxFQUFFLEVBQUMsUUFBUSxFQUFFLDRCQUE0QixFQUFFLE1BQU0sRUFBRSxpQkFBaUIsRUFBQztJQUMzRSxNQUFNLEVBQUUsRUFBQyxRQUFRLEVBQUUsNEJBQTRCLEVBQUUsTUFBTSxFQUFFLGlCQUFpQixFQUFDO0lBQzNFLEtBQUssRUFBRSxFQUFDLFFBQVEsRUFBRSxrQkFBa0IsRUFBRSxNQUFNLEVBQUUsVUFBVSxFQUFDO0lBQ3pELEtBQUssRUFBRSxFQUFDLFFBQVEsRUFBRSxpQkFBaUIsRUFBRSxNQUFNLEVBQUUsVUFBVSxFQUFDO0lBQ3hELEtBQUssRUFBRSxFQUFDLFFBQVEsRUFBRSx3QkFBd0IsRUFBRSxNQUFNLEVBQUUsWUFBWSxFQUFDO0lBQ2pFLE1BQU0sRUFBRSxFQUFDLFFBQVEsRUFBRSwyQkFBMkIsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFDO0lBQ3BFLEtBQUssRUFBRSxFQUFDLFFBQVEsRUFBRSwyQkFBMkIsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFDO0lBQ25FLE9BQU8sRUFBRSxFQUFDLFFBQVEsRUFBRSwyQkFBMkIsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFDO0lBQ3JFLEtBQUssRUFBRSxFQUFDLFFBQVEsRUFBRSw0QkFBNEIsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFDO0lBQ3BFLEtBQUssRUFBRSxFQUFDLFFBQVEsRUFBRSx5QkFBeUIsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFDO0lBQ2pFLEtBQUssRUFBRSxFQUFDLFFBQVEsRUFBRSw2QkFBNkIsRUFBRSxNQUFNLEVBQUUsWUFBWSxFQUFDO0lBQ3RFLEtBQUssRUFBRSxFQUFDLFFBQVEsRUFBRSw2QkFBNkIsRUFBRSxNQUFNLEVBQUUsWUFBWSxFQUFDO0lBQ3RFLEtBQUssRUFBRSxFQUFDLFFBQVEsRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLEVBQUUsWUFBWSxFQUFDO0lBQ3pELEtBQUssRUFBRSxFQUFDLFFBQVEsRUFBRSw2QkFBNkIsRUFBRSxNQUFNLEVBQUUsWUFBWSxFQUFDO0lBQ3RFLEtBQUssRUFBRSxFQUFDLFFBQVEsRUFBRSxrQ0FBa0MsRUFBRSxNQUFNLEVBQUUsWUFBWSxFQUFDO0lBQzNFLEtBQUssRUFBRSxFQUFDLFFBQVEsRUFBRSxrQ0FBa0MsRUFBRSxNQUFNLEVBQUUsWUFBWSxFQUFDO0lBQzNFLE1BQU0sRUFBRSxFQUFDLFFBQVEsRUFBRSxrQ0FBa0MsRUFBRSxNQUFNLEVBQUUsWUFBWSxFQUFDO0lBQzVFLE1BQU0sRUFBRSxFQUFDLFFBQVEsRUFBRSxrQ0FBa0MsRUFBRSxNQUFNLEVBQUUsWUFBWSxFQUFDO0lBQzVFLEtBQUssRUFBRSxFQUFDLFFBQVEsRUFBRSwyQkFBMkIsRUFBRSxNQUFNLEVBQUUsWUFBWSxFQUFDO0lBQ3BFLE1BQU0sRUFBRSxFQUFDLFFBQVEsRUFBRSwwQkFBMEIsRUFBRSxNQUFNLEVBQUUsWUFBWSxFQUFDO0lBQ3BFLEtBQUssRUFBRSxFQUFDLFFBQVEsRUFBRSwwQkFBMEIsRUFBRSxNQUFNLEVBQUUsWUFBWSxFQUFDO0lBQ25FLEtBQUssRUFBRSxFQUFDLFFBQVEsRUFBRSwwQkFBMEIsRUFBRSxNQUFNLEVBQUUsWUFBWSxFQUFDO0lBQ25FLEtBQUssRUFBRSxFQUFDLFFBQVEsRUFBRSwwQkFBMEIsRUFBRSxNQUFNLEVBQUUsWUFBWSxFQUFDO0lBQ25FLEtBQUssRUFBRSxFQUFDLFFBQVEsRUFBRSwwQkFBMEIsRUFBRSxNQUFNLEVBQUUsWUFBWSxFQUFDO0lBQ25FLE1BQU0sRUFBRSxFQUFDLFFBQVEsRUFBRSx3QkFBd0IsRUFBRSxNQUFNLEVBQUUsVUFBVSxFQUFDO0lBQ2hFLEtBQUssRUFBRSxFQUFDLFFBQVEsRUFBRSxjQUFjLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBQztJQUN2RCxNQUFNLEVBQUUsRUFBQyxRQUFRLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBQztJQUM1RCxNQUFNLEVBQUUsRUFBQyxRQUFRLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxFQUFFLFVBQVUsRUFBQztJQUMxRCxLQUFLLEVBQUUsRUFBQyxRQUFRLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSxFQUFFLFVBQVUsRUFBQztJQUM5RCxNQUFNLEVBQUUsRUFBQyxRQUFRLEVBQUUsMEJBQTBCLEVBQUUsTUFBTSxFQUFFLFVBQVUsRUFBQztJQUNsRSxTQUFTLEVBQUUsRUFBQyxRQUFRLEVBQUUsOEJBQThCLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBQztDQUN0RSxDQUFDOzs7SUEzRUYsYUEyRUU7O0FBaUJKLE1BQU0sT0FBTyxXQUFXO0lBRXRCO0lBQ0EsQ0FBQztDQUNGIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNsYXNzIFBhZ2VNb2RlbCB7XG4gIGRhdGE6IHN0cmluZztcbiAgYW5nbGU6IG51bWJlcjtcbiAgd2lkdGg6IG51bWJlcjtcbiAgaGVpZ2h0OiBudW1iZXI7XG4gIG51bWJlcjogbnVtYmVyO1xuICBlZGl0YWJsZTogYm9vbGVhbjtcbn1cblxuZXhwb3J0IGNsYXNzIFJvdGF0ZWRQYWdlIHtcbiAgcGFnZU51bWJlcjogbnVtYmVyO1xuICBhbmdsZTogbnVtYmVyO1xufVxuXG5leHBvcnQgY2xhc3MgRmlsZUNyZWRlbnRpYWxzIHtcbiAgZ3VpZDogc3RyaW5nO1xuICBwYXNzd29yZDogc3RyaW5nO1xuXG4gIGNvbnN0cnVjdG9yKGd1aWQ6IHN0cmluZywgcGFzc3dvcmQ6IHN0cmluZykge1xuICAgIHRoaXMuZ3VpZCA9IGd1aWQ7XG4gICAgdGhpcy5wYXNzd29yZCA9IHBhc3N3b3JkO1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBTYXZlRmlsZSBleHRlbmRzIEZpbGVDcmVkZW50aWFscyB7XG4gIGNvbnRlbnQ6IHN0cmluZztcblxuICBjb25zdHJ1Y3RvcihndWlkOiBzdHJpbmcsIHBhc3N3b3JkOiBzdHJpbmcsIGNvbnRlbnQ6IHN0cmluZykge1xuICAgIHN1cGVyKGd1aWQsIHBhc3N3b3JkKTtcbiAgICB0aGlzLmNvbnRlbnQgPSBjb250ZW50O1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBGaWxlRGVzY3JpcHRpb24ge1xuICBndWlkOiBzdHJpbmc7XG4gIHBhZ2VzOiBQYWdlTW9kZWxbXTtcbiAgcHJpbnRBbGxvd2VkID0gdHJ1ZTtcbn1cblxuZXhwb3J0IGNsYXNzIEZpbGVNb2RlbCB7XG4gIGd1aWQ6IHN0cmluZztcbiAgbmFtZTogc3RyaW5nO1xuICBkaXJlY3Rvcnk6IGJvb2xlYW47XG4gIHNpemU6IG51bWJlcjtcbiAgaXNEaXJlY3Rvcnk6IGJvb2xlYW47XG59XG5cbmV4cG9ydCBjbGFzcyBIdHRwRXJyb3Ige1xuICBzdGF0aWMgQmFkUmVxdWVzdCA9IDQwMDtcbiAgc3RhdGljIFVuYXV0aG9yaXplZCA9IDQwMTtcbiAgc3RhdGljIEZvcmJpZGRlbiA9IDQwMztcbiAgc3RhdGljIE5vdEZvdW5kID0gNDA0O1xuICBzdGF0aWMgVGltZU91dCA9IDQwODtcbiAgc3RhdGljIENvbmZsaWN0ID0gNDA5O1xuICBzdGF0aWMgSW50ZXJuYWxTZXJ2ZXJFcnJvciA9IDUwMDtcbn1cblxuZXhwb3J0IGNsYXNzIFV0aWxzIHtcbiAgcHVibGljIHN0YXRpYyBnZXRNb3VzZVBvc2l0aW9uKGV2ZW50KSB7XG4gICAgY29uc3QgbW91c2UgPSB7XG4gICAgICB4OiAwLFxuICAgICAgeTogMFxuICAgIH07XG4gICAgY29uc3Qgd0V2ZW50OiBEcmFnRXZlbnQgPSA8RHJhZ0V2ZW50PndpbmRvdy5ldmVudDtcbiAgICBjb25zdCBldiA9IGV2ZW50IHx8IHdFdmVudDsgLy9Nb3ogfHwgSUVcbiAgICBpZiAoZXYucGFnZVggfHwgd0V2ZW50LnBhZ2VYIHx8IHdFdmVudC5zY3JlZW5YIHx8IChldi50b3VjaGVzICYmIGV2LnRvdWNoZXNbMF0gJiYgZXYudG91Y2hlc1swXS5wYWdlWCkpIHsgLy9Nb3pcbiAgICAgIGNvbnN0IHBhZ2VYID0gdHlwZW9mIGV2LnBhZ2VYICE9PSBcInVuZGVmaW5lZFwiICYmIGV2LnBhZ2VYICE9PSAwID8gZXYucGFnZVggOiB3RXZlbnQucGFnZVg7XG4gICAgICBjb25zdCBwYWdlWSA9IHR5cGVvZiBldi5wYWdlWSAhPT0gXCJ1bmRlZmluZWRcIiAmJiBldi5wYWdlWSAhPT0gMCA/IGV2LnBhZ2VZIDogd0V2ZW50LnBhZ2VZO1xuICAgICAgY29uc3Qgc2NyZWVuWCA9IHR5cGVvZiB3RXZlbnQuc2NyZWVuWCAhPT0gXCJ1bmRlZmluZWRcIiAmJiB3RXZlbnQuc2NyZWVuWSAhPT0gMDtcbiAgICAgIGNvbnN0IHNjcmVlblkgPSB0eXBlb2Ygd0V2ZW50LnNjcmVlblkgIT09IFwidW5kZWZpbmVkXCIgJiYgd0V2ZW50LnNjcmVlblkgIT09IDA7XG4gICAgICBtb3VzZS54ID0gcGFnZVggPyBwYWdlWCA6IChzY3JlZW5YID8gd0V2ZW50LnNjcmVlblggOiBldi50b3VjaGVzWzBdLnBhZ2VYKTtcbiAgICAgIG1vdXNlLnkgPSBwYWdlWSA/IHBhZ2VZIDogKHNjcmVlblkgPyB3RXZlbnQuc2NyZWVuWSA6IGV2LnRvdWNoZXNbMF0ucGFnZVkpO1xuICAgIH0gZWxzZSBpZiAoZXYuY2xpZW50WCkgeyAvL0lFXG4gICAgICBtb3VzZS54ID0gZXYuY2xpZW50WCArIGRvY3VtZW50LmJvZHkuc2Nyb2xsTGVmdDtcbiAgICAgIG1vdXNlLnkgPSBldi5jbGllbnRZICsgZG9jdW1lbnQuYm9keS5zY3JvbGxUb3A7XG4gICAgfVxuICAgIHJldHVybiBtb3VzZTtcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgRmlsZVV0aWwge1xuICBwdWJsaWMgc3RhdGljIG1hcCA9IHtcbiAgICAnZm9sZGVyJzogeydmb3JtYXQnOiAnJywgJ2ljb24nOiAnZm9sZGVyJ30sXG4gICAgJ3BkZic6IHsnZm9ybWF0JzogJ1BvcnRhYmxlIERvY3VtZW50IEZvcm1hdCcsICdpY29uJzogJ2ZpbGUtcGRmJ30sXG4gICAgJ2RvYyc6IHsnZm9ybWF0JzogJ01pY3Jvc29mdCBXb3JkJywgJ2ljb24nOiAnZmlsZS13b3JkJ30sXG4gICAgJ2RvY3gnOiB7J2Zvcm1hdCc6ICdNaWNyb3NvZnQgV29yZCcsICdpY29uJzogJ2ZpbGUtd29yZCd9LFxuICAgICdkb2NtJzogeydmb3JtYXQnOiAnTWljcm9zb2Z0IFdvcmQnLCAnaWNvbic6ICdmaWxlLXdvcmQnfSxcbiAgICAnZG90Jzogeydmb3JtYXQnOiAnTWljcm9zb2Z0IFdvcmQnLCAnaWNvbic6ICdmaWxlLXdvcmQnfSxcbiAgICAnZG90eCc6IHsnZm9ybWF0JzogJ01pY3Jvc29mdCBXb3JkJywgJ2ljb24nOiAnZmlsZS13b3JkJ30sXG4gICAgJ2RvdG0nOiB7J2Zvcm1hdCc6ICdNaWNyb3NvZnQgV29yZCcsICdpY29uJzogJ2ZpbGUtd29yZCd9LFxuICAgICd4bHMnOiB7J2Zvcm1hdCc6ICdNaWNyb3NvZnQgRXhjZWwnLCAnaWNvbic6ICdmaWxlLWV4Y2VsJ30sXG4gICAgJ3hsc3gnOiB7J2Zvcm1hdCc6ICdNaWNyb3NvZnQgRXhjZWwnLCAnaWNvbic6ICdmaWxlLWV4Y2VsJ30sXG4gICAgJ3hsc20nOiB7J2Zvcm1hdCc6ICdNaWNyb3NvZnQgRXhjZWwnLCAnaWNvbic6ICdmaWxlLWV4Y2VsJ30sXG4gICAgJ3hsc2InOiB7J2Zvcm1hdCc6ICdNaWNyb3NvZnQgRXhjZWwnLCAnaWNvbic6ICdmaWxlLWV4Y2VsJ30sXG4gICAgJ3hsczIwMDMnOiB7J2Zvcm1hdCc6ICdNaWNyb3NvZnQgRXhjZWwnLCAnaWNvbic6ICdmaWxlLWV4Y2VsJ30sXG4gICAgJ3hsdHgnOiB7J2Zvcm1hdCc6ICdNaWNyb3NvZnQgRXhjZWwnLCAnaWNvbic6ICdmaWxlLWV4Y2VsJ30sXG4gICAgJ3hsdG0nOiB7J2Zvcm1hdCc6ICdNaWNyb3NvZnQgRXhjZWwnLCAnaWNvbic6ICdmaWxlLWV4Y2VsJ30sXG4gICAgJ3BwdCc6IHsnZm9ybWF0JzogJ01pY3Jvc29mdCBQb3dlclBvaW50JywgJ2ljb24nOiAnZmlsZS1wb3dlcnBvaW50J30sXG4gICAgJ3BwdHgnOiB7J2Zvcm1hdCc6ICdNaWNyb3NvZnQgUG93ZXJQb2ludCcsICdpY29uJzogJ2ZpbGUtcG93ZXJwb2ludCd9LFxuICAgICdwcHMnOiB7J2Zvcm1hdCc6ICdNaWNyb3NvZnQgUG93ZXJQb2ludCcsICdpY29uJzogJ2ZpbGUtcG93ZXJwb2ludCd9LFxuICAgICdwcHN4Jzogeydmb3JtYXQnOiAnTWljcm9zb2Z0IFBvd2VyUG9pbnQnLCAnaWNvbic6ICdmaWxlLXBvd2VycG9pbnQnfSxcbiAgICAndnNkJzogeydmb3JtYXQnOiAnTWljcm9zb2Z0IFZpc2lvJywgJ2ljb24nOiAnZmlsZS1jb2RlJ30sXG4gICAgJ3ZkeCc6IHsnZm9ybWF0JzogJ01pY3Jvc29mdCBWaXNpbycsICdpY29uJzogJ2ZpbGUtY29kZSd9LFxuICAgICd2c3MnOiB7J2Zvcm1hdCc6ICdNaWNyb3NvZnQgVmlzaW8nLCAnaWNvbic6ICdmaWxlLWNvZGUnfSxcbiAgICAndnN4Jzogeydmb3JtYXQnOiAnTWljcm9zb2Z0IFZpc2lvJywgJ2ljb24nOiAnZmlsZS1jb2RlJ30sXG4gICAgJ3ZzdCc6IHsnZm9ybWF0JzogJ01pY3Jvc29mdCBWaXNpbycsICdpY29uJzogJ2ZpbGUtY29kZSd9LFxuICAgICd2dHgnOiB7J2Zvcm1hdCc6ICdNaWNyb3NvZnQgVmlzaW8nLCAnaWNvbic6ICdmaWxlLWNvZGUnfSxcbiAgICAndnNkeCc6IHsnZm9ybWF0JzogJ01pY3Jvc29mdCBWaXNpbycsICdpY29uJzogJ2ZpbGUtY29kZSd9LFxuICAgICd2ZHcnOiB7J2Zvcm1hdCc6ICdNaWNyb3NvZnQgVmlzaW8nLCAnaWNvbic6ICdmaWxlLWNvZGUnfSxcbiAgICAndnN0eCc6IHsnZm9ybWF0JzogJ01pY3Jvc29mdCBWaXNpbycsICdpY29uJzogJ2ZpbGUtY29kZSd9LFxuICAgICd2c3N4Jzogeydmb3JtYXQnOiAnTWljcm9zb2Z0IFZpc2lvJywgJ2ljb24nOiAnZmlsZS1jb2RlJ30sXG4gICAgJ21wcCc6IHsnZm9ybWF0JzogJ01pY3Jvc29mdCBQcm9qZWN0JywgJ2ljb24nOiAnZmlsZS1hbHQnfSxcbiAgICAnbXB0Jzogeydmb3JtYXQnOiAnTWljcm9zb2Z0IFByb2plY3QnLCAnaWNvbic6ICdmaWxlLWFsdCd9LFxuICAgICdtc2cnOiB7J2Zvcm1hdCc6ICdNaWNyb3NvZnQgT3V0bG9vaycsICdpY29uJzogJ2ZpbGUtYWx0J30sXG4gICAgJ2VtbCc6IHsnZm9ybWF0JzogJ01pY3Jvc29mdCBPdXRsb29rJywgJ2ljb24nOiAnZmlsZS1hbHQnfSxcbiAgICAnZW1seCc6IHsnZm9ybWF0JzogJ01pY3Jvc29mdCBPdXRsb29rJywgJ2ljb24nOiAnZmlsZS1hbHQnfSxcbiAgICAnb25lJzogeydmb3JtYXQnOiAnTWljcm9zb2Z0IE9uZU5vdGUnLCAnaWNvbic6ICdmaWxlLXdvcmQnfSxcbiAgICAnb2R0Jzogeydmb3JtYXQnOiAnT3BlbiBEb2N1bWVudCBUZXh0JywgJ2ljb24nOiAnZmlsZS13b3JkJ30sXG4gICAgJ290dCc6IHsnZm9ybWF0JzogJ09wZW4gRG9jdW1lbnQgVGV4dCBUZW1wbGF0ZScsICdpY29uJzogJ2ZpbGUtd29yZCd9LFxuICAgICdvZHMnOiB7J2Zvcm1hdCc6ICdPcGVuIERvY3VtZW50IFNwcmVhZHNoZWV0JywgJ2ljb24nOiAnZmlsZS1leGNlbCd9LFxuICAgICdvZHAnOiB7J2Zvcm1hdCc6ICdPcGVuIERvY3VtZW50IFByZXNlbnRhdGlvbicsICdpY29uJzogJ2ZpbGUtcG93ZXJwb2ludCd9LFxuICAgICdvdHAnOiB7J2Zvcm1hdCc6ICdPcGVuIERvY3VtZW50IFByZXNlbnRhdGlvbicsICdpY29uJzogJ2ZpbGUtcG93ZXJwb2ludCd9LFxuICAgICdvdHMnOiB7J2Zvcm1hdCc6ICdPcGVuIERvY3VtZW50IFByZXNlbnRhdGlvbicsICdpY29uJzogJ2ZpbGUtcG93ZXJwb2ludCd9LFxuICAgICdwb3R4Jzogeydmb3JtYXQnOiAnT3BlbiBEb2N1bWVudCBQcmVzZW50YXRpb24nLCAnaWNvbic6ICdmaWxlLXBvd2VycG9pbnQnfSxcbiAgICAncG90bSc6IHsnZm9ybWF0JzogJ09wZW4gRG9jdW1lbnQgUHJlc2VudGF0aW9uJywgJ2ljb24nOiAnZmlsZS1wb3dlcnBvaW50J30sXG4gICAgJ3BwdG0nOiB7J2Zvcm1hdCc6ICdPcGVuIERvY3VtZW50IFByZXNlbnRhdGlvbicsICdpY29uJzogJ2ZpbGUtcG93ZXJwb2ludCd9LFxuICAgICdwcHNtJzogeydmb3JtYXQnOiAnT3BlbiBEb2N1bWVudCBQcmVzZW50YXRpb24nLCAnaWNvbic6ICdmaWxlLXBvd2VycG9pbnQnfSxcbiAgICAncnRmJzogeydmb3JtYXQnOiAnUmljaCBUZXh0IEZvcm1hdCcsICdpY29uJzogJ2ZpbGUtYWx0J30sXG4gICAgJ3R4dCc6IHsnZm9ybWF0JzogJ1BsYWluIFRleHQgRmlsZScsICdpY29uJzogJ2ZpbGUtYWx0J30sXG4gICAgJ2Nzdic6IHsnZm9ybWF0JzogJ0NvbW1hLVNlcGFyYXRlZCBWYWx1ZXMnLCAnaWNvbic6ICdmaWxlLWV4Y2VsJ30sXG4gICAgJ2h0bWwnOiB7J2Zvcm1hdCc6ICdIeXBlclRleHQgTWFya3VwIExhbmd1YWdlJywgJ2ljb24nOiAnZmlsZS13b3JkJ30sXG4gICAgJ21odCc6IHsnZm9ybWF0JzogJ0h5cGVyVGV4dCBNYXJrdXAgTGFuZ3VhZ2UnLCAnaWNvbic6ICdmaWxlLXdvcmQnfSxcbiAgICAnbWh0bWwnOiB7J2Zvcm1hdCc6ICdIeXBlclRleHQgTWFya3VwIExhbmd1YWdlJywgJ2ljb24nOiAnZmlsZS13b3JkJ30sXG4gICAgJ3htbCc6IHsnZm9ybWF0JzogJ0V4dGVuc2libGUgTWFya3VwIExhbmd1YWdlJywgJ2ljb24nOiAnZmlsZS13b3JkJ30sXG4gICAgJ3hwcyc6IHsnZm9ybWF0JzogJ1hNTCBQYXBlciBTcGVjaWZpY2F0aW9uJywgJ2ljb24nOiAnZmlsZS13b3JkJ30sXG4gICAgJ2R4Zic6IHsnZm9ybWF0JzogJ0F1dG9DQUQgRHJhd2luZyBGaWxlIEZvcm1hdCcsICdpY29uJzogJ2ZpbGUtaW1hZ2UnfSxcbiAgICAnZHdnJzogeydmb3JtYXQnOiAnQXV0b0NBRCBEcmF3aW5nIEZpbGUgRm9ybWF0JywgJ2ljb24nOiAnZmlsZS1pbWFnZSd9LFxuICAgICdibXAnOiB7J2Zvcm1hdCc6ICdCaXRtYXAgUGljdHVyZScsICdpY29uJzogJ2ZpbGUtaW1hZ2UnfSxcbiAgICAnZ2lmJzogeydmb3JtYXQnOiAnR3JhcGhpY3MgSW50ZXJjaGFuZ2UgRm9ybWF0JywgJ2ljb24nOiAnZmlsZS1pbWFnZSd9LFxuICAgICdqcGcnOiB7J2Zvcm1hdCc6ICdKb2ludCBQaG90b2dyYXBoaWMgRXhwZXJ0cyBHcm91cCcsICdpY29uJzogJ2ZpbGUtaW1hZ2UnfSxcbiAgICAnanBlJzogeydmb3JtYXQnOiAnSm9pbnQgUGhvdG9ncmFwaGljIEV4cGVydHMgR3JvdXAnLCAnaWNvbic6ICdmaWxlLWltYWdlJ30sXG4gICAgJ2pwZWcnOiB7J2Zvcm1hdCc6ICdKb2ludCBQaG90b2dyYXBoaWMgRXhwZXJ0cyBHcm91cCcsICdpY29uJzogJ2ZpbGUtaW1hZ2UnfSxcbiAgICAnamZpZic6IHsnZm9ybWF0JzogJ0pvaW50IFBob3RvZ3JhcGhpYyBFeHBlcnRzIEdyb3VwJywgJ2ljb24nOiAnZmlsZS1pbWFnZSd9LFxuICAgICdwbmcnOiB7J2Zvcm1hdCc6ICdQb3J0YWJsZSBOZXR3b3JrIEdyYXBoaWNzJywgJ2ljb24nOiAnZmlsZS1pbWFnZSd9LFxuICAgICd0aWZmJzogeydmb3JtYXQnOiAnVGFnZ2VkIEltYWdlIEZpbGUgRm9ybWF0JywgJ2ljb24nOiAnZmlsZS1pbWFnZSd9LFxuICAgICd0aWYnOiB7J2Zvcm1hdCc6ICdUYWdnZWQgSW1hZ2UgRmlsZSBGb3JtYXQnLCAnaWNvbic6ICdmaWxlLWltYWdlJ30sXG4gICAgJ3BzZCc6IHsnZm9ybWF0JzogJ1RhZ2dlZCBJbWFnZSBGaWxlIEZvcm1hdCcsICdpY29uJzogJ2ZpbGUtaW1hZ2UnfSxcbiAgICAnc3ZnJzogeydmb3JtYXQnOiAnVGFnZ2VkIEltYWdlIEZpbGUgRm9ybWF0JywgJ2ljb24nOiAnZmlsZS1pbWFnZSd9LFxuICAgICdqcDInOiB7J2Zvcm1hdCc6ICdUYWdnZWQgSW1hZ2UgRmlsZSBGb3JtYXQnLCAnaWNvbic6ICdmaWxlLWltYWdlJ30sXG4gICAgJ2VwdWInOiB7J2Zvcm1hdCc6ICdFbGVjdHJvbmljIFB1YmxpY2F0aW9uJywgJ2ljb24nOiAnZmlsZS1wZGYnfSxcbiAgICAnaWNvJzogeydmb3JtYXQnOiAnV2luZG93cyBJY29uJywgJ2ljb24nOiAnZmlsZS1pbWFnZSd9LFxuICAgICd3ZWJwJzogeydmb3JtYXQnOiAnQ29tcHJlc3NlZCBJbWFnZScsICdpY29uJzogJ2ZpbGUtaW1hZ2UnfSxcbiAgICAnbW9iaSc6IHsnZm9ybWF0JzogJ01vYmlwb2NrZXQgZUJvb2snLCAnaWNvbic6ICdmaWxlLXBkZid9LFxuICAgICd0ZXgnOiB7J2Zvcm1hdCc6ICdMYVRlWCBTb3VyY2UgRG9jdW1lbnQnLCAnaWNvbic6ICdmaWxlLXBkZid9LFxuICAgICdkanZ1Jzogeydmb3JtYXQnOiAnTXVsdGktTGF5ZXIgUmFzdGVyIEltYWdlJywgJ2ljb24nOiAnZmlsZS1hbHQnfSxcbiAgICAndW5rbm93bic6IHsnZm9ybWF0JzogJ1RoaXMgZm9ybWF0IGlzIG5vdCBzdXBwb3J0ZWQnLCAnaWNvbic6ICdmaWxlJ30sXG4gIH07XG5cbiAgcHVibGljIHN0YXRpYyBmaW5kKGZpbGVuYW1lOiBzdHJpbmcsIGlzRGlyZWN0b3J5OiBib29sZWFuKSB7XG4gICAgaWYgKGZpbGVuYW1lICYmICFpc0RpcmVjdG9yeSkge1xuICAgICAgY29uc3Qgc3RyaW5ncyA9IGZpbGVuYW1lLnNwbGl0KCcuJyk7XG4gICAgICBjb25zdCBuYW1lID0gc3RyaW5ncy5wb3AoKS50b0xvd2VyQ2FzZSgpO1xuICAgICAgaWYgKHR5cGVvZiBGaWxlVXRpbC5tYXBbbmFtZV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgcmV0dXJuIHN0cmluZ3MubGVuZ3RoID4gMCA/IEZpbGVVdGlsLm1hcFsndW5rbm93biddIDogRmlsZVV0aWwubWFwWydmb2xkZXInXTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBGaWxlVXRpbC5tYXBbbmFtZV07XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBGaWxlVXRpbC5tYXBbJ2ZvbGRlciddO1xuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgRmlsZVNlcnZpY2Uge1xuXG4gIGNvbnN0cnVjdG9yKCkge1xuICB9XG59XG4iXX0=