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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmlsZS5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdyb3VwZG9jcy5leGFtcGxlcy5hbmd1bGFyL2NvbW1vbi1jb21wb25lbnRzLyIsInNvdXJjZXMiOlsibGliL2ZpbGUuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsTUFBTSxPQUFPLFNBQVM7Q0FPckI7OztJQU5DLHlCQUFhOztJQUNiLDBCQUFjOztJQUNkLDBCQUFjOztJQUNkLDJCQUFlOztJQUNmLDJCQUFlOztJQUNmLDZCQUFrQjs7QUFHcEIsTUFBTSxPQUFPLFdBQVc7Q0FHdkI7OztJQUZDLGlDQUFtQjs7SUFDbkIsNEJBQWM7O0FBR2hCLE1BQU0sT0FBTyxlQUFlOzs7OztJQUkxQixZQUFZLElBQVksRUFBRSxRQUFnQjtRQUN4QyxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztRQUNqQixJQUFJLENBQUMsUUFBUSxHQUFHLFFBQVEsQ0FBQztJQUMzQixDQUFDO0NBQ0Y7OztJQVBDLCtCQUFhOztJQUNiLG1DQUFpQjs7QUFRbkIsTUFBTSxPQUFPLFFBQVMsU0FBUSxlQUFlOzs7Ozs7SUFHM0MsWUFBWSxJQUFZLEVBQUUsUUFBZ0IsRUFBRSxPQUFlO1FBQ3pELEtBQUssQ0FBQyxJQUFJLEVBQUUsUUFBUSxDQUFDLENBQUM7UUFDdEIsSUFBSSxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUM7SUFDekIsQ0FBQztDQUNGOzs7SUFOQywyQkFBZ0I7O0FBUWxCLE1BQU0sT0FBTyxlQUFlO0lBQTVCO1FBR0UsaUJBQVksR0FBRyxJQUFJLENBQUM7SUFDdEIsQ0FBQztDQUFBOzs7SUFIQywrQkFBYTs7SUFDYixnQ0FBbUI7O0lBQ25CLHVDQUFvQjs7QUFHdEIsTUFBTSxPQUFPLFNBQVM7Q0FLckI7OztJQUpDLHlCQUFhOztJQUNiLHlCQUFhOztJQUNiLDhCQUFtQjs7SUFDbkIseUJBQWE7O0FBR2YsTUFBTSxPQUFPLFNBQVM7O0FBQ2Isb0JBQVUsR0FBRyxHQUFHLENBQUM7QUFDakIsc0JBQVksR0FBRyxHQUFHLENBQUM7QUFDbkIsbUJBQVMsR0FBRyxHQUFHLENBQUM7QUFDaEIsa0JBQVEsR0FBRyxHQUFHLENBQUM7QUFDZixpQkFBTyxHQUFHLEdBQUcsQ0FBQztBQUNkLGtCQUFRLEdBQUcsR0FBRyxDQUFDO0FBQ2YsNkJBQW1CLEdBQUcsR0FBRyxDQUFDOzs7SUFOakMscUJBQXdCOztJQUN4Qix1QkFBMEI7O0lBQzFCLG9CQUF1Qjs7SUFDdkIsbUJBQXNCOztJQUN0QixrQkFBcUI7O0lBQ3JCLG1CQUFzQjs7SUFDdEIsOEJBQWlDOztBQUduQyxNQUFNLE9BQU8sUUFBUTs7Ozs7O0lBOEVaLE1BQU0sQ0FBQyxJQUFJLENBQUMsUUFBZ0IsRUFBRSxXQUFvQjtRQUN2RCxJQUFJLFFBQVEsSUFBSSxDQUFDLFdBQVcsRUFBRTs7a0JBQ3RCLE9BQU8sR0FBRyxRQUFRLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQzs7a0JBQzdCLElBQUksR0FBRyxPQUFPLENBQUMsR0FBRyxFQUFFLENBQUMsV0FBVyxFQUFFO1lBQ3hDLElBQUksT0FBTyxRQUFRLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxLQUFLLFdBQVcsRUFBRTtnQkFDN0MsT0FBTyxPQUFPLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsQ0FBQzthQUM5RTtpQkFBTTtnQkFDTCxPQUFPLFFBQVEsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUM7YUFDM0I7U0FDRjthQUFNO1lBQ0wsT0FBTyxRQUFRLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxDQUFDO1NBQy9CO0lBQ0gsQ0FBQzs7QUF6RmEsWUFBRyxHQUFHO0lBQ2xCLFFBQVEsRUFBRSxFQUFDLFFBQVEsRUFBRSxFQUFFLEVBQUUsTUFBTSxFQUFFLFFBQVEsRUFBQztJQUMxQyxLQUFLLEVBQUUsRUFBQyxRQUFRLEVBQUUsMEJBQTBCLEVBQUUsTUFBTSxFQUFFLFVBQVUsRUFBQztJQUNqRSxLQUFLLEVBQUUsRUFBQyxRQUFRLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBQztJQUN4RCxNQUFNLEVBQUUsRUFBQyxRQUFRLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBQztJQUN6RCxNQUFNLEVBQUUsRUFBQyxRQUFRLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBQztJQUN6RCxLQUFLLEVBQUUsRUFBQyxRQUFRLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBQztJQUN4RCxNQUFNLEVBQUUsRUFBQyxRQUFRLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBQztJQUN6RCxNQUFNLEVBQUUsRUFBQyxRQUFRLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBQztJQUN6RCxLQUFLLEVBQUUsRUFBQyxRQUFRLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBQztJQUMxRCxNQUFNLEVBQUUsRUFBQyxRQUFRLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBQztJQUMzRCxNQUFNLEVBQUUsRUFBQyxRQUFRLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBQztJQUMzRCxNQUFNLEVBQUUsRUFBQyxRQUFRLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBQztJQUMzRCxTQUFTLEVBQUUsRUFBQyxRQUFRLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBQztJQUM5RCxNQUFNLEVBQUUsRUFBQyxRQUFRLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBQztJQUMzRCxNQUFNLEVBQUUsRUFBQyxRQUFRLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBQztJQUMzRCxLQUFLLEVBQUUsRUFBQyxRQUFRLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSxFQUFFLGlCQUFpQixFQUFDO0lBQ3BFLE1BQU0sRUFBRSxFQUFDLFFBQVEsRUFBRSxzQkFBc0IsRUFBRSxNQUFNLEVBQUUsaUJBQWlCLEVBQUM7SUFDckUsS0FBSyxFQUFFLEVBQUMsUUFBUSxFQUFFLHNCQUFzQixFQUFFLE1BQU0sRUFBRSxpQkFBaUIsRUFBQztJQUNwRSxNQUFNLEVBQUUsRUFBQyxRQUFRLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSxFQUFFLGlCQUFpQixFQUFDO0lBQ3JFLEtBQUssRUFBRSxFQUFDLFFBQVEsRUFBRSxpQkFBaUIsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFDO0lBQ3pELEtBQUssRUFBRSxFQUFDLFFBQVEsRUFBRSxpQkFBaUIsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFDO0lBQ3pELEtBQUssRUFBRSxFQUFDLFFBQVEsRUFBRSxpQkFBaUIsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFDO0lBQ3pELEtBQUssRUFBRSxFQUFDLFFBQVEsRUFBRSxpQkFBaUIsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFDO0lBQ3pELEtBQUssRUFBRSxFQUFDLFFBQVEsRUFBRSxpQkFBaUIsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFDO0lBQ3pELEtBQUssRUFBRSxFQUFDLFFBQVEsRUFBRSxpQkFBaUIsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFDO0lBQ3pELE1BQU0sRUFBRSxFQUFDLFFBQVEsRUFBRSxpQkFBaUIsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFDO0lBQzFELEtBQUssRUFBRSxFQUFDLFFBQVEsRUFBRSxpQkFBaUIsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFDO0lBQ3pELE1BQU0sRUFBRSxFQUFDLFFBQVEsRUFBRSxpQkFBaUIsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFDO0lBQzFELE1BQU0sRUFBRSxFQUFDLFFBQVEsRUFBRSxpQkFBaUIsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFDO0lBQzFELEtBQUssRUFBRSxFQUFDLFFBQVEsRUFBRSxtQkFBbUIsRUFBRSxNQUFNLEVBQUUsVUFBVSxFQUFDO0lBQzFELEtBQUssRUFBRSxFQUFDLFFBQVEsRUFBRSxtQkFBbUIsRUFBRSxNQUFNLEVBQUUsVUFBVSxFQUFDO0lBQzFELEtBQUssRUFBRSxFQUFDLFFBQVEsRUFBRSxtQkFBbUIsRUFBRSxNQUFNLEVBQUUsVUFBVSxFQUFDO0lBQzFELEtBQUssRUFBRSxFQUFDLFFBQVEsRUFBRSxtQkFBbUIsRUFBRSxNQUFNLEVBQUUsVUFBVSxFQUFDO0lBQzFELE1BQU0sRUFBRSxFQUFDLFFBQVEsRUFBRSxtQkFBbUIsRUFBRSxNQUFNLEVBQUUsVUFBVSxFQUFDO0lBQzNELEtBQUssRUFBRSxFQUFDLFFBQVEsRUFBRSxtQkFBbUIsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFDO0lBQzNELEtBQUssRUFBRSxFQUFDLFFBQVEsRUFBRSxvQkFBb0IsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFDO0lBQzVELEtBQUssRUFBRSxFQUFDLFFBQVEsRUFBRSw2QkFBNkIsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFDO0lBQ3JFLEtBQUssRUFBRSxFQUFDLFFBQVEsRUFBRSwyQkFBMkIsRUFBRSxNQUFNLEVBQUUsWUFBWSxFQUFDO0lBQ3BFLEtBQUssRUFBRSxFQUFDLFFBQVEsRUFBRSw0QkFBNEIsRUFBRSxNQUFNLEVBQUUsaUJBQWlCLEVBQUM7SUFDMUUsS0FBSyxFQUFFLEVBQUMsUUFBUSxFQUFFLDRCQUE0QixFQUFFLE1BQU0sRUFBRSxpQkFBaUIsRUFBQztJQUMxRSxLQUFLLEVBQUUsRUFBQyxRQUFRLEVBQUUsNEJBQTRCLEVBQUUsTUFBTSxFQUFFLGlCQUFpQixFQUFDO0lBQzFFLE1BQU0sRUFBRSxFQUFDLFFBQVEsRUFBRSw0QkFBNEIsRUFBRSxNQUFNLEVBQUUsaUJBQWlCLEVBQUM7SUFDM0UsTUFBTSxFQUFFLEVBQUMsUUFBUSxFQUFFLDRCQUE0QixFQUFFLE1BQU0sRUFBRSxpQkFBaUIsRUFBQztJQUMzRSxNQUFNLEVBQUUsRUFBQyxRQUFRLEVBQUUsNEJBQTRCLEVBQUUsTUFBTSxFQUFFLGlCQUFpQixFQUFDO0lBQzNFLE1BQU0sRUFBRSxFQUFDLFFBQVEsRUFBRSw0QkFBNEIsRUFBRSxNQUFNLEVBQUUsaUJBQWlCLEVBQUM7SUFDM0UsS0FBSyxFQUFFLEVBQUMsUUFBUSxFQUFFLGtCQUFrQixFQUFFLE1BQU0sRUFBRSxVQUFVLEVBQUM7SUFDekQsS0FBSyxFQUFFLEVBQUMsUUFBUSxFQUFFLGlCQUFpQixFQUFFLE1BQU0sRUFBRSxVQUFVLEVBQUM7SUFDeEQsS0FBSyxFQUFFLEVBQUMsUUFBUSxFQUFFLHdCQUF3QixFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQUM7SUFDakUsTUFBTSxFQUFFLEVBQUMsUUFBUSxFQUFFLDJCQUEyQixFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUM7SUFDcEUsS0FBSyxFQUFFLEVBQUMsUUFBUSxFQUFFLDJCQUEyQixFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUM7SUFDbkUsT0FBTyxFQUFFLEVBQUMsUUFBUSxFQUFFLDJCQUEyQixFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUM7SUFDckUsS0FBSyxFQUFFLEVBQUMsUUFBUSxFQUFFLDRCQUE0QixFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUM7SUFDcEUsS0FBSyxFQUFFLEVBQUMsUUFBUSxFQUFFLHlCQUF5QixFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUM7SUFDakUsS0FBSyxFQUFFLEVBQUMsUUFBUSxFQUFFLDZCQUE2QixFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQUM7SUFDdEUsS0FBSyxFQUFFLEVBQUMsUUFBUSxFQUFFLDZCQUE2QixFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQUM7SUFDdEUsS0FBSyxFQUFFLEVBQUMsUUFBUSxFQUFFLGdCQUFnQixFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQUM7SUFDekQsS0FBSyxFQUFFLEVBQUMsUUFBUSxFQUFFLDZCQUE2QixFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQUM7SUFDdEUsS0FBSyxFQUFFLEVBQUMsUUFBUSxFQUFFLGtDQUFrQyxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQUM7SUFDM0UsS0FBSyxFQUFFLEVBQUMsUUFBUSxFQUFFLGtDQUFrQyxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQUM7SUFDM0UsTUFBTSxFQUFFLEVBQUMsUUFBUSxFQUFFLGtDQUFrQyxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQUM7SUFDNUUsTUFBTSxFQUFFLEVBQUMsUUFBUSxFQUFFLGtDQUFrQyxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQUM7SUFDNUUsS0FBSyxFQUFFLEVBQUMsUUFBUSxFQUFFLDJCQUEyQixFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQUM7SUFDcEUsTUFBTSxFQUFFLEVBQUMsUUFBUSxFQUFFLDBCQUEwQixFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQUM7SUFDcEUsS0FBSyxFQUFFLEVBQUMsUUFBUSxFQUFFLDBCQUEwQixFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQUM7SUFDbkUsS0FBSyxFQUFFLEVBQUMsUUFBUSxFQUFFLDBCQUEwQixFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQUM7SUFDbkUsS0FBSyxFQUFFLEVBQUMsUUFBUSxFQUFFLDBCQUEwQixFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQUM7SUFDbkUsS0FBSyxFQUFFLEVBQUMsUUFBUSxFQUFFLDBCQUEwQixFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQUM7SUFDbkUsTUFBTSxFQUFFLEVBQUMsUUFBUSxFQUFFLHdCQUF3QixFQUFFLE1BQU0sRUFBRSxVQUFVLEVBQUM7SUFDaEUsS0FBSyxFQUFFLEVBQUMsUUFBUSxFQUFFLGNBQWMsRUFBRSxNQUFNLEVBQUUsWUFBWSxFQUFDO0lBQ3ZELE1BQU0sRUFBRSxFQUFDLFFBQVEsRUFBRSxrQkFBa0IsRUFBRSxNQUFNLEVBQUUsWUFBWSxFQUFDO0lBQzVELE1BQU0sRUFBRSxFQUFDLFFBQVEsRUFBRSxrQkFBa0IsRUFBRSxNQUFNLEVBQUUsVUFBVSxFQUFDO0lBQzFELEtBQUssRUFBRSxFQUFDLFFBQVEsRUFBRSx1QkFBdUIsRUFBRSxNQUFNLEVBQUUsVUFBVSxFQUFDO0lBQzlELE1BQU0sRUFBRSxFQUFDLFFBQVEsRUFBRSwwQkFBMEIsRUFBRSxNQUFNLEVBQUUsVUFBVSxFQUFDO0lBQ2xFLFNBQVMsRUFBRSxFQUFDLFFBQVEsRUFBRSw4QkFBOEIsRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFDO0NBQ3RFLENBQUM7OztJQTNFRixhQTJFRTs7QUFpQkosTUFBTSxPQUFPLFdBQVc7SUFFdEI7SUFDQSxDQUFDO0NBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY2xhc3MgUGFnZU1vZGVsIHtcclxuICBkYXRhOiBzdHJpbmc7XHJcbiAgYW5nbGU6IG51bWJlcjtcclxuICB3aWR0aDogbnVtYmVyO1xyXG4gIGhlaWdodDogbnVtYmVyO1xyXG4gIG51bWJlcjogbnVtYmVyO1xyXG4gIGVkaXRhYmxlOiBib29sZWFuO1xyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgUm90YXRlZFBhZ2Uge1xyXG4gIHBhZ2VOdW1iZXI6IG51bWJlcjtcclxuICBhbmdsZTogbnVtYmVyO1xyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgRmlsZUNyZWRlbnRpYWxzIHtcclxuICBndWlkOiBzdHJpbmc7XHJcbiAgcGFzc3dvcmQ6IHN0cmluZztcclxuXHJcbiAgY29uc3RydWN0b3IoZ3VpZDogc3RyaW5nLCBwYXNzd29yZDogc3RyaW5nKSB7XHJcbiAgICB0aGlzLmd1aWQgPSBndWlkO1xyXG4gICAgdGhpcy5wYXNzd29yZCA9IHBhc3N3b3JkO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIFNhdmVGaWxlIGV4dGVuZHMgRmlsZUNyZWRlbnRpYWxzIHtcclxuICBjb250ZW50OiBzdHJpbmc7XHJcblxyXG4gIGNvbnN0cnVjdG9yKGd1aWQ6IHN0cmluZywgcGFzc3dvcmQ6IHN0cmluZywgY29udGVudDogc3RyaW5nKSB7XHJcbiAgICBzdXBlcihndWlkLCBwYXNzd29yZCk7XHJcbiAgICB0aGlzLmNvbnRlbnQgPSBjb250ZW50O1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIEZpbGVEZXNjcmlwdGlvbiB7XHJcbiAgZ3VpZDogc3RyaW5nO1xyXG4gIHBhZ2VzOiBQYWdlTW9kZWxbXTtcclxuICBwcmludEFsbG93ZWQgPSB0cnVlO1xyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgRmlsZU1vZGVsIHtcclxuICBndWlkOiBzdHJpbmc7XHJcbiAgbmFtZTogc3RyaW5nO1xyXG4gIGRpcmVjdG9yeTogYm9vbGVhbjtcclxuICBzaXplOiBudW1iZXI7XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBIdHRwRXJyb3Ige1xyXG4gIHN0YXRpYyBCYWRSZXF1ZXN0ID0gNDAwO1xyXG4gIHN0YXRpYyBVbmF1dGhvcml6ZWQgPSA0MDE7XHJcbiAgc3RhdGljIEZvcmJpZGRlbiA9IDQwMztcclxuICBzdGF0aWMgTm90Rm91bmQgPSA0MDQ7XHJcbiAgc3RhdGljIFRpbWVPdXQgPSA0MDg7XHJcbiAgc3RhdGljIENvbmZsaWN0ID0gNDA5O1xyXG4gIHN0YXRpYyBJbnRlcm5hbFNlcnZlckVycm9yID0gNTAwO1xyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgRmlsZVV0aWwge1xyXG4gIHB1YmxpYyBzdGF0aWMgbWFwID0ge1xyXG4gICAgJ2ZvbGRlcic6IHsnZm9ybWF0JzogJycsICdpY29uJzogJ2ZvbGRlcid9LFxyXG4gICAgJ3BkZic6IHsnZm9ybWF0JzogJ1BvcnRhYmxlIERvY3VtZW50IEZvcm1hdCcsICdpY29uJzogJ2ZpbGUtcGRmJ30sXHJcbiAgICAnZG9jJzogeydmb3JtYXQnOiAnTWljcm9zb2Z0IFdvcmQnLCAnaWNvbic6ICdmaWxlLXdvcmQnfSxcclxuICAgICdkb2N4Jzogeydmb3JtYXQnOiAnTWljcm9zb2Z0IFdvcmQnLCAnaWNvbic6ICdmaWxlLXdvcmQnfSxcclxuICAgICdkb2NtJzogeydmb3JtYXQnOiAnTWljcm9zb2Z0IFdvcmQnLCAnaWNvbic6ICdmaWxlLXdvcmQnfSxcclxuICAgICdkb3QnOiB7J2Zvcm1hdCc6ICdNaWNyb3NvZnQgV29yZCcsICdpY29uJzogJ2ZpbGUtd29yZCd9LFxyXG4gICAgJ2RvdHgnOiB7J2Zvcm1hdCc6ICdNaWNyb3NvZnQgV29yZCcsICdpY29uJzogJ2ZpbGUtd29yZCd9LFxyXG4gICAgJ2RvdG0nOiB7J2Zvcm1hdCc6ICdNaWNyb3NvZnQgV29yZCcsICdpY29uJzogJ2ZpbGUtd29yZCd9LFxyXG4gICAgJ3hscyc6IHsnZm9ybWF0JzogJ01pY3Jvc29mdCBFeGNlbCcsICdpY29uJzogJ2ZpbGUtZXhjZWwnfSxcclxuICAgICd4bHN4Jzogeydmb3JtYXQnOiAnTWljcm9zb2Z0IEV4Y2VsJywgJ2ljb24nOiAnZmlsZS1leGNlbCd9LFxyXG4gICAgJ3hsc20nOiB7J2Zvcm1hdCc6ICdNaWNyb3NvZnQgRXhjZWwnLCAnaWNvbic6ICdmaWxlLWV4Y2VsJ30sXHJcbiAgICAneGxzYic6IHsnZm9ybWF0JzogJ01pY3Jvc29mdCBFeGNlbCcsICdpY29uJzogJ2ZpbGUtZXhjZWwnfSxcclxuICAgICd4bHMyMDAzJzogeydmb3JtYXQnOiAnTWljcm9zb2Z0IEV4Y2VsJywgJ2ljb24nOiAnZmlsZS1leGNlbCd9LFxyXG4gICAgJ3hsdHgnOiB7J2Zvcm1hdCc6ICdNaWNyb3NvZnQgRXhjZWwnLCAnaWNvbic6ICdmaWxlLWV4Y2VsJ30sXHJcbiAgICAneGx0bSc6IHsnZm9ybWF0JzogJ01pY3Jvc29mdCBFeGNlbCcsICdpY29uJzogJ2ZpbGUtZXhjZWwnfSxcclxuICAgICdwcHQnOiB7J2Zvcm1hdCc6ICdNaWNyb3NvZnQgUG93ZXJQb2ludCcsICdpY29uJzogJ2ZpbGUtcG93ZXJwb2ludCd9LFxyXG4gICAgJ3BwdHgnOiB7J2Zvcm1hdCc6ICdNaWNyb3NvZnQgUG93ZXJQb2ludCcsICdpY29uJzogJ2ZpbGUtcG93ZXJwb2ludCd9LFxyXG4gICAgJ3Bwcyc6IHsnZm9ybWF0JzogJ01pY3Jvc29mdCBQb3dlclBvaW50JywgJ2ljb24nOiAnZmlsZS1wb3dlcnBvaW50J30sXHJcbiAgICAncHBzeCc6IHsnZm9ybWF0JzogJ01pY3Jvc29mdCBQb3dlclBvaW50JywgJ2ljb24nOiAnZmlsZS1wb3dlcnBvaW50J30sXHJcbiAgICAndnNkJzogeydmb3JtYXQnOiAnTWljcm9zb2Z0IFZpc2lvJywgJ2ljb24nOiAnZmlsZS1jb2RlJ30sXHJcbiAgICAndmR4Jzogeydmb3JtYXQnOiAnTWljcm9zb2Z0IFZpc2lvJywgJ2ljb24nOiAnZmlsZS1jb2RlJ30sXHJcbiAgICAndnNzJzogeydmb3JtYXQnOiAnTWljcm9zb2Z0IFZpc2lvJywgJ2ljb24nOiAnZmlsZS1jb2RlJ30sXHJcbiAgICAndnN4Jzogeydmb3JtYXQnOiAnTWljcm9zb2Z0IFZpc2lvJywgJ2ljb24nOiAnZmlsZS1jb2RlJ30sXHJcbiAgICAndnN0Jzogeydmb3JtYXQnOiAnTWljcm9zb2Z0IFZpc2lvJywgJ2ljb24nOiAnZmlsZS1jb2RlJ30sXHJcbiAgICAndnR4Jzogeydmb3JtYXQnOiAnTWljcm9zb2Z0IFZpc2lvJywgJ2ljb24nOiAnZmlsZS1jb2RlJ30sXHJcbiAgICAndnNkeCc6IHsnZm9ybWF0JzogJ01pY3Jvc29mdCBWaXNpbycsICdpY29uJzogJ2ZpbGUtY29kZSd9LFxyXG4gICAgJ3Zkdyc6IHsnZm9ybWF0JzogJ01pY3Jvc29mdCBWaXNpbycsICdpY29uJzogJ2ZpbGUtY29kZSd9LFxyXG4gICAgJ3ZzdHgnOiB7J2Zvcm1hdCc6ICdNaWNyb3NvZnQgVmlzaW8nLCAnaWNvbic6ICdmaWxlLWNvZGUnfSxcclxuICAgICd2c3N4Jzogeydmb3JtYXQnOiAnTWljcm9zb2Z0IFZpc2lvJywgJ2ljb24nOiAnZmlsZS1jb2RlJ30sXHJcbiAgICAnbXBwJzogeydmb3JtYXQnOiAnTWljcm9zb2Z0IFByb2plY3QnLCAnaWNvbic6ICdmaWxlLWFsdCd9LFxyXG4gICAgJ21wdCc6IHsnZm9ybWF0JzogJ01pY3Jvc29mdCBQcm9qZWN0JywgJ2ljb24nOiAnZmlsZS1hbHQnfSxcclxuICAgICdtc2cnOiB7J2Zvcm1hdCc6ICdNaWNyb3NvZnQgT3V0bG9vaycsICdpY29uJzogJ2ZpbGUtYWx0J30sXHJcbiAgICAnZW1sJzogeydmb3JtYXQnOiAnTWljcm9zb2Z0IE91dGxvb2snLCAnaWNvbic6ICdmaWxlLWFsdCd9LFxyXG4gICAgJ2VtbHgnOiB7J2Zvcm1hdCc6ICdNaWNyb3NvZnQgT3V0bG9vaycsICdpY29uJzogJ2ZpbGUtYWx0J30sXHJcbiAgICAnb25lJzogeydmb3JtYXQnOiAnTWljcm9zb2Z0IE9uZU5vdGUnLCAnaWNvbic6ICdmaWxlLXdvcmQnfSxcclxuICAgICdvZHQnOiB7J2Zvcm1hdCc6ICdPcGVuIERvY3VtZW50IFRleHQnLCAnaWNvbic6ICdmaWxlLXdvcmQnfSxcclxuICAgICdvdHQnOiB7J2Zvcm1hdCc6ICdPcGVuIERvY3VtZW50IFRleHQgVGVtcGxhdGUnLCAnaWNvbic6ICdmaWxlLXdvcmQnfSxcclxuICAgICdvZHMnOiB7J2Zvcm1hdCc6ICdPcGVuIERvY3VtZW50IFNwcmVhZHNoZWV0JywgJ2ljb24nOiAnZmlsZS1leGNlbCd9LFxyXG4gICAgJ29kcCc6IHsnZm9ybWF0JzogJ09wZW4gRG9jdW1lbnQgUHJlc2VudGF0aW9uJywgJ2ljb24nOiAnZmlsZS1wb3dlcnBvaW50J30sXHJcbiAgICAnb3RwJzogeydmb3JtYXQnOiAnT3BlbiBEb2N1bWVudCBQcmVzZW50YXRpb24nLCAnaWNvbic6ICdmaWxlLXBvd2VycG9pbnQnfSxcclxuICAgICdvdHMnOiB7J2Zvcm1hdCc6ICdPcGVuIERvY3VtZW50IFByZXNlbnRhdGlvbicsICdpY29uJzogJ2ZpbGUtcG93ZXJwb2ludCd9LFxyXG4gICAgJ3BvdHgnOiB7J2Zvcm1hdCc6ICdPcGVuIERvY3VtZW50IFByZXNlbnRhdGlvbicsICdpY29uJzogJ2ZpbGUtcG93ZXJwb2ludCd9LFxyXG4gICAgJ3BvdG0nOiB7J2Zvcm1hdCc6ICdPcGVuIERvY3VtZW50IFByZXNlbnRhdGlvbicsICdpY29uJzogJ2ZpbGUtcG93ZXJwb2ludCd9LFxyXG4gICAgJ3BwdG0nOiB7J2Zvcm1hdCc6ICdPcGVuIERvY3VtZW50IFByZXNlbnRhdGlvbicsICdpY29uJzogJ2ZpbGUtcG93ZXJwb2ludCd9LFxyXG4gICAgJ3Bwc20nOiB7J2Zvcm1hdCc6ICdPcGVuIERvY3VtZW50IFByZXNlbnRhdGlvbicsICdpY29uJzogJ2ZpbGUtcG93ZXJwb2ludCd9LFxyXG4gICAgJ3J0Zic6IHsnZm9ybWF0JzogJ1JpY2ggVGV4dCBGb3JtYXQnLCAnaWNvbic6ICdmaWxlLWFsdCd9LFxyXG4gICAgJ3R4dCc6IHsnZm9ybWF0JzogJ1BsYWluIFRleHQgRmlsZScsICdpY29uJzogJ2ZpbGUtYWx0J30sXHJcbiAgICAnY3N2Jzogeydmb3JtYXQnOiAnQ29tbWEtU2VwYXJhdGVkIFZhbHVlcycsICdpY29uJzogJ2ZpbGUtZXhjZWwnfSxcclxuICAgICdodG1sJzogeydmb3JtYXQnOiAnSHlwZXJUZXh0IE1hcmt1cCBMYW5ndWFnZScsICdpY29uJzogJ2ZpbGUtd29yZCd9LFxyXG4gICAgJ21odCc6IHsnZm9ybWF0JzogJ0h5cGVyVGV4dCBNYXJrdXAgTGFuZ3VhZ2UnLCAnaWNvbic6ICdmaWxlLXdvcmQnfSxcclxuICAgICdtaHRtbCc6IHsnZm9ybWF0JzogJ0h5cGVyVGV4dCBNYXJrdXAgTGFuZ3VhZ2UnLCAnaWNvbic6ICdmaWxlLXdvcmQnfSxcclxuICAgICd4bWwnOiB7J2Zvcm1hdCc6ICdFeHRlbnNpYmxlIE1hcmt1cCBMYW5ndWFnZScsICdpY29uJzogJ2ZpbGUtd29yZCd9LFxyXG4gICAgJ3hwcyc6IHsnZm9ybWF0JzogJ1hNTCBQYXBlciBTcGVjaWZpY2F0aW9uJywgJ2ljb24nOiAnZmlsZS13b3JkJ30sXHJcbiAgICAnZHhmJzogeydmb3JtYXQnOiAnQXV0b0NBRCBEcmF3aW5nIEZpbGUgRm9ybWF0JywgJ2ljb24nOiAnZmlsZS1pbWFnZSd9LFxyXG4gICAgJ2R3Zyc6IHsnZm9ybWF0JzogJ0F1dG9DQUQgRHJhd2luZyBGaWxlIEZvcm1hdCcsICdpY29uJzogJ2ZpbGUtaW1hZ2UnfSxcclxuICAgICdibXAnOiB7J2Zvcm1hdCc6ICdCaXRtYXAgUGljdHVyZScsICdpY29uJzogJ2ZpbGUtaW1hZ2UnfSxcclxuICAgICdnaWYnOiB7J2Zvcm1hdCc6ICdHcmFwaGljcyBJbnRlcmNoYW5nZSBGb3JtYXQnLCAnaWNvbic6ICdmaWxlLWltYWdlJ30sXHJcbiAgICAnanBnJzogeydmb3JtYXQnOiAnSm9pbnQgUGhvdG9ncmFwaGljIEV4cGVydHMgR3JvdXAnLCAnaWNvbic6ICdmaWxlLWltYWdlJ30sXHJcbiAgICAnanBlJzogeydmb3JtYXQnOiAnSm9pbnQgUGhvdG9ncmFwaGljIEV4cGVydHMgR3JvdXAnLCAnaWNvbic6ICdmaWxlLWltYWdlJ30sXHJcbiAgICAnanBlZyc6IHsnZm9ybWF0JzogJ0pvaW50IFBob3RvZ3JhcGhpYyBFeHBlcnRzIEdyb3VwJywgJ2ljb24nOiAnZmlsZS1pbWFnZSd9LFxyXG4gICAgJ2pmaWYnOiB7J2Zvcm1hdCc6ICdKb2ludCBQaG90b2dyYXBoaWMgRXhwZXJ0cyBHcm91cCcsICdpY29uJzogJ2ZpbGUtaW1hZ2UnfSxcclxuICAgICdwbmcnOiB7J2Zvcm1hdCc6ICdQb3J0YWJsZSBOZXR3b3JrIEdyYXBoaWNzJywgJ2ljb24nOiAnZmlsZS1pbWFnZSd9LFxyXG4gICAgJ3RpZmYnOiB7J2Zvcm1hdCc6ICdUYWdnZWQgSW1hZ2UgRmlsZSBGb3JtYXQnLCAnaWNvbic6ICdmaWxlLWltYWdlJ30sXHJcbiAgICAndGlmJzogeydmb3JtYXQnOiAnVGFnZ2VkIEltYWdlIEZpbGUgRm9ybWF0JywgJ2ljb24nOiAnZmlsZS1pbWFnZSd9LFxyXG4gICAgJ3BzZCc6IHsnZm9ybWF0JzogJ1RhZ2dlZCBJbWFnZSBGaWxlIEZvcm1hdCcsICdpY29uJzogJ2ZpbGUtaW1hZ2UnfSxcclxuICAgICdzdmcnOiB7J2Zvcm1hdCc6ICdUYWdnZWQgSW1hZ2UgRmlsZSBGb3JtYXQnLCAnaWNvbic6ICdmaWxlLWltYWdlJ30sXHJcbiAgICAnanAyJzogeydmb3JtYXQnOiAnVGFnZ2VkIEltYWdlIEZpbGUgRm9ybWF0JywgJ2ljb24nOiAnZmlsZS1pbWFnZSd9LFxyXG4gICAgJ2VwdWInOiB7J2Zvcm1hdCc6ICdFbGVjdHJvbmljIFB1YmxpY2F0aW9uJywgJ2ljb24nOiAnZmlsZS1wZGYnfSxcclxuICAgICdpY28nOiB7J2Zvcm1hdCc6ICdXaW5kb3dzIEljb24nLCAnaWNvbic6ICdmaWxlLWltYWdlJ30sXHJcbiAgICAnd2VicCc6IHsnZm9ybWF0JzogJ0NvbXByZXNzZWQgSW1hZ2UnLCAnaWNvbic6ICdmaWxlLWltYWdlJ30sXHJcbiAgICAnbW9iaSc6IHsnZm9ybWF0JzogJ01vYmlwb2NrZXQgZUJvb2snLCAnaWNvbic6ICdmaWxlLXBkZid9LFxyXG4gICAgJ3RleCc6IHsnZm9ybWF0JzogJ0xhVGVYIFNvdXJjZSBEb2N1bWVudCcsICdpY29uJzogJ2ZpbGUtcGRmJ30sXHJcbiAgICAnZGp2dSc6IHsnZm9ybWF0JzogJ011bHRpLUxheWVyIFJhc3RlciBJbWFnZScsICdpY29uJzogJ2ZpbGUtYWx0J30sXHJcbiAgICAndW5rbm93bic6IHsnZm9ybWF0JzogJ1RoaXMgZm9ybWF0IGlzIG5vdCBzdXBwb3J0ZWQnLCAnaWNvbic6ICdmaWxlJ30sXHJcbiAgfTtcclxuXHJcbiAgcHVibGljIHN0YXRpYyBmaW5kKGZpbGVuYW1lOiBzdHJpbmcsIGlzRGlyZWN0b3J5OiBib29sZWFuKSB7XHJcbiAgICBpZiAoZmlsZW5hbWUgJiYgIWlzRGlyZWN0b3J5KSB7XHJcbiAgICAgIGNvbnN0IHN0cmluZ3MgPSBmaWxlbmFtZS5zcGxpdCgnLicpO1xyXG4gICAgICBjb25zdCBuYW1lID0gc3RyaW5ncy5wb3AoKS50b0xvd2VyQ2FzZSgpO1xyXG4gICAgICBpZiAodHlwZW9mIEZpbGVVdGlsLm1hcFtuYW1lXSA9PT0gXCJ1bmRlZmluZWRcIikge1xyXG4gICAgICAgIHJldHVybiBzdHJpbmdzLmxlbmd0aCA+IDAgPyBGaWxlVXRpbC5tYXBbJ3Vua25vd24nXSA6IEZpbGVVdGlsLm1hcFsnZm9sZGVyJ107XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgcmV0dXJuIEZpbGVVdGlsLm1hcFtuYW1lXTtcclxuICAgICAgfVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgcmV0dXJuIEZpbGVVdGlsLm1hcFsnZm9sZGVyJ107XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgRmlsZVNlcnZpY2Uge1xyXG5cclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICB9XHJcbn1cclxuIl19