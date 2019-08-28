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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmlsZS5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdyb3VwZG9jcy5leGFtcGxlcy5hbmd1bGFyL2NvbW1vbi1jb21wb25lbnRzLyIsInNvdXJjZXMiOlsibGliL2ZpbGUuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBO0lBQUE7SUFPQSxDQUFDO0lBQUQsZ0JBQUM7QUFBRCxDQUFDLEFBUEQsSUFPQzs7OztJQU5DLHlCQUFhOztJQUNiLDBCQUFjOztJQUNkLDBCQUFjOztJQUNkLDJCQUFlOztJQUNmLDJCQUFlOztJQUNmLDZCQUFrQjs7QUFHcEI7SUFBQTtJQUdBLENBQUM7SUFBRCxrQkFBQztBQUFELENBQUMsQUFIRCxJQUdDOzs7O0lBRkMsaUNBQW1COztJQUNuQiw0QkFBYzs7QUFHaEI7SUFJRSx5QkFBWSxJQUFZLEVBQUUsUUFBZ0I7UUFDeEMsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7UUFDakIsSUFBSSxDQUFDLFFBQVEsR0FBRyxRQUFRLENBQUM7SUFDM0IsQ0FBQztJQUNILHNCQUFDO0FBQUQsQ0FBQyxBQVJELElBUUM7Ozs7SUFQQywrQkFBYTs7SUFDYixtQ0FBaUI7O0FBUW5CO0lBQThCLG9DQUFlO0lBRzNDLGtCQUFZLElBQVksRUFBRSxRQUFnQixFQUFFLE9BQWU7UUFBM0QsWUFDRSxrQkFBTSxJQUFJLEVBQUUsUUFBUSxDQUFDLFNBRXRCO1FBREMsS0FBSSxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUM7O0lBQ3pCLENBQUM7SUFDSCxlQUFDO0FBQUQsQ0FBQyxBQVBELENBQThCLGVBQWUsR0FPNUM7Ozs7SUFOQywyQkFBZ0I7O0FBUWxCO0lBQUE7UUFHRSxpQkFBWSxHQUFHLElBQUksQ0FBQztJQUN0QixDQUFDO0lBQUQsc0JBQUM7QUFBRCxDQUFDLEFBSkQsSUFJQzs7OztJQUhDLCtCQUFhOztJQUNiLGdDQUFtQjs7SUFDbkIsdUNBQW9COztBQUd0QjtJQUFBO0lBTUEsQ0FBQztJQUFE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RUFBQztRQUM5RCxNQUFNLEVBQUUsRUFBQyxRQUFRLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBQztRQUMzRCxNQUFNLEVBQUUsRUFBQyxRQUFRLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBQztRQUMzRCxLQUFLLEVBQUUsRUFBQyxRQUFRLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSxFQUFFLGlCQUFpQixFQUFDO1FBQ3BFLE1BQU0sRUFBRSxFQUFDLFFBQVEsRUFBRSxzQkFBc0IsRUFBRSxNQUFNLEVBQUUsaUJBQWlCLEVBQUM7UUFDckUsS0FBSyxFQUFFLEVBQUMsUUFBUSxFQUFFLHNCQUFzQixFQUFFLE1BQU0sRUFBRSxpQkFBaUIsRUFBQztRQUNwRSxNQUFNLEVBQUUsRUFBQyxRQUFRLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSxFQUFFLGlCQUFpQixFQUFDO1FBQ3JFLEtBQUssRUFBRSxFQUFDLFFBQVEsRUFBRSxpQkFBaUIsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFDO1FBQ3pELEtBQUssRUFBRSxFQUFDLFFBQVEsRUFBRSxpQkFBaUIsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFDO1FBQ3pELEtBQUssRUFBRSxFQUFDLFFBQVEsRUFBRSxpQkFBaUIsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFDO1FBQ3pELEtBQUssRUFBRSxFQUFDLFFBQVEsRUFBRSxpQkFBaUIsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFDO1FBQ3pELEtBQUssRUFBRSxFQUFDLFFBQVEsRUFBRSxpQkFBaUIsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFDO1FBQ3pELEtBQUssRUFBRSxFQUFDLFFBQVEsRUFBRSxpQkFBaUIsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFDO1FBQ3pELE1BQU0sRUFBRSxFQUFDLFFBQVEsRUFBRSxpQkFBaUIsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFDO1FBQzFELEtBQUssRUFBRSxFQUFDLFFBQVEsRUFBRSxpQkFBaUIsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFDO1FBQ3pELE1BQU0sRUFBRSxFQUFDLFFBQVEsRUFBRSxpQkFBaUIsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFDO1FBQzFELE1BQU0sRUFBRSxFQUFDLFFBQVEsRUFBRSxpQkFBaUIsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFDO1FBQzFELEtBQUssRUFBRSxFQUFDLFFBQVEsRUFBRSxtQkFBbUIsRUFBRSxNQUFNLEVBQUUsVUFBVSxFQUFDO1FBQzFELEtBQUssRUFBRSxFQUFDLFFBQVEsRUFBRSxtQkFBbUIsRUFBRSxNQUFNLEVBQUUsVUFBVSxFQUFDO1FBQzFELEtBQUssRUFBRSxFQUFDLFFBQVEsRUFBRSxtQkFBbUIsRUFBRSxNQUFNLEVBQUUsVUFBVSxFQUFDO1FBQzFELEtBQUssRUFBRSxFQUFDLFFBQVEsRUFBRSxtQkFBbUIsRUFBRSxNQUFNLEVBQUUsVUFBVSxFQUFDO1FBQzFELE1BQU0sRUFBRSxFQUFDLFFBQVEsRUFBRSxtQkFBbUIsRUFBRSxNQUFNLEVBQUUsVUFBVSxFQUFDO1FBQzNELEtBQUssRUFBRSxFQUFDLFFBQVEsRUFBRSxtQkFBbUIsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFDO1FBQzNELEtBQUssRUFBRSxFQUFDLFFBQVEsRUFBRSxvQkFBb0IsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFDO1FBQzVELEtBQUssRUFBRSxFQUFDLFFBQVEsRUFBRSw2QkFBNkIsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFDO1FBQ3JFLEtBQUssRUFBRSxFQUFDLFFBQVEsRUFBRSwyQkFBMkIsRUFBRSxNQUFNLEVBQUUsWUFBWSxFQUFDO1FBQ3BFLEtBQUssRUFBRSxFQUFDLFFBQVEsRUFBRSw0QkFBNEIsRUFBRSxNQUFNLEVBQUUsaUJBQWlCLEVBQUM7UUFDMUUsS0FBSyxFQUFFLEVBQUMsUUFBUSxFQUFFLDRCQUE0QixFQUFFLE1BQU0sRUFBRSxpQkFBaUIsRUFBQztRQUMxRSxLQUFLLEVBQUUsRUFBQyxRQUFRLEVBQUUsNEJBQTRCLEVBQUUsTUFBTSxFQUFFLGlCQUFpQixFQUFDO1FBQzFFLE1BQU0sRUFBRSxF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LEVBQUUsWUFBWSxFQUFDO1FBQzVELE1BQU0sRUFBRSxFQUFDLFFBQVEsRUFBRSxrQkFBa0IsRUFBRSxNQUFNLEVBQUUsVUFBVSxFQUFDO1FBQzFELEtBQUssRUFBRSxFQUFDLFFBQVEsRUFBRSx1QkFBdUIsRUFBRSxNQUFNLEVBQUUsVUFBVSxFQUFDO1FBQzlELE1BQU0sRUFBRSxFQUFDLFFBQVEsRUFBRSwwQkFBMEIsRUFBRSxNQUFNLEVBQUUsVUFBVSxFQUFDO1FBQ2xFLFNBQVMsRUFBRSxFQUFDLFFBQVEsRUFBRSw4QkFBOEIsRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFDO0tBQ3RFLENBQUM7SUFlSixlQUFDO0NBQUEsQUEzRkQsSUEyRkM7U0EzRlksUUFBUTs7O0lBQ25CLGFBMkVFOztBQWlCSjtJQUVFO0lBQ0EsQ0FBQztJQUNILGtCQUFDO0FBQUQsQ0FBQyxBQUpELElBSUMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY2xhc3MgUGFnZU1vZGVsIHtcbiAgZGF0YTogc3RyaW5nO1xuICBhbmdsZTogbnVtYmVyO1xuICB3aWR0aDogbnVtYmVyO1xuICBoZWlnaHQ6IG51bWJlcjtcbiAgbnVtYmVyOiBudW1iZXI7XG4gIGVkaXRhYmxlOiBib29sZWFuO1xufVxuXG5leHBvcnQgY2xhc3MgUm90YXRlZFBhZ2Uge1xuICBwYWdlTnVtYmVyOiBudW1iZXI7XG4gIGFuZ2xlOiBudW1iZXI7XG59XG5cbmV4cG9ydCBjbGFzcyBGaWxlQ3JlZGVudGlhbHMge1xuICBndWlkOiBzdHJpbmc7XG4gIHBhc3N3b3JkOiBzdHJpbmc7XG5cbiAgY29uc3RydWN0b3IoZ3VpZDogc3RyaW5nLCBwYXNzd29yZDogc3RyaW5nKSB7XG4gICAgdGhpcy5ndWlkID0gZ3VpZDtcbiAgICB0aGlzLnBhc3N3b3JkID0gcGFzc3dvcmQ7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIFNhdmVGaWxlIGV4dGVuZHMgRmlsZUNyZWRlbnRpYWxzIHtcbiAgY29udGVudDogc3RyaW5nO1xuXG4gIGNvbnN0cnVjdG9yKGd1aWQ6IHN0cmluZywgcGFzc3dvcmQ6IHN0cmluZywgY29udGVudDogc3RyaW5nKSB7XG4gICAgc3VwZXIoZ3VpZCwgcGFzc3dvcmQpO1xuICAgIHRoaXMuY29udGVudCA9IGNvbnRlbnQ7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIEZpbGVEZXNjcmlwdGlvbiB7XG4gIGd1aWQ6IHN0cmluZztcbiAgcGFnZXM6IFBhZ2VNb2RlbFtdO1xuICBwcmludEFsbG93ZWQgPSB0cnVlO1xufVxuXG5leHBvcnQgY2xhc3MgRmlsZU1vZGVsIHtcbiAgZ3VpZDogc3RyaW5nO1xuICBuYW1lOiBzdHJpbmc7XG4gIGRpcmVjdG9yeTogYm9vbGVhbjtcbiAgc2l6ZTogbnVtYmVyO1xuICBpc0RpcmVjdG9yeTogYm9vbGVhbjtcbn1cblxuZXhwb3J0IGNsYXNzIEh0dHBFcnJvciB7XG4gIHN0YXRpYyBCYWRSZXF1ZXN0ID0gNDAwO1xuICBzdGF0aWMgVW5hdXRob3JpemVkID0gNDAxO1xuICBzdGF0aWMgRm9yYmlkZGVuID0gNDAzO1xuICBzdGF0aWMgTm90Rm91bmQgPSA0MDQ7XG4gIHN0YXRpYyBUaW1lT3V0ID0gNDA4O1xuICBzdGF0aWMgQ29uZmxpY3QgPSA0MDk7XG4gIHN0YXRpYyBJbnRlcm5hbFNlcnZlckVycm9yID0gNTAwO1xufVxuXG5leHBvcnQgY2xhc3MgRmlsZVV0aWwge1xuICBwdWJsaWMgc3RhdGljIG1hcCA9IHtcbiAgICAnZm9sZGVyJzogeydmb3JtYXQnOiAnJywgJ2ljb24nOiAnZm9sZGVyJ30sXG4gICAgJ3BkZic6IHsnZm9ybWF0JzogJ1BvcnRhYmxlIERvY3VtZW50IEZvcm1hdCcsICdpY29uJzogJ2ZpbGUtcGRmJ30sXG4gICAgJ2RvYyc6IHsnZm9ybWF0JzogJ01pY3Jvc29mdCBXb3JkJywgJ2ljb24nOiAnZmlsZS13b3JkJ30sXG4gICAgJ2RvY3gnOiB7J2Zvcm1hdCc6ICdNaWNyb3NvZnQgV29yZCcsICdpY29uJzogJ2ZpbGUtd29yZCd9LFxuICAgICdkb2NtJzogeydmb3JtYXQnOiAnTWljcm9zb2Z0IFdvcmQnLCAnaWNvbic6ICdmaWxlLXdvcmQnfSxcbiAgICAnZG90Jzogeydmb3JtYXQnOiAnTWljcm9zb2Z0IFdvcmQnLCAnaWNvbic6ICdmaWxlLXdvcmQnfSxcbiAgICAnZG90eCc6IHsnZm9ybWF0JzogJ01pY3Jvc29mdCBXb3JkJywgJ2ljb24nOiAnZmlsZS13b3JkJ30sXG4gICAgJ2RvdG0nOiB7J2Zvcm1hdCc6ICdNaWNyb3NvZnQgV29yZCcsICdpY29uJzogJ2ZpbGUtd29yZCd9LFxuICAgICd4bHMnOiB7J2Zvcm1hdCc6ICdNaWNyb3NvZnQgRXhjZWwnLCAnaWNvbic6ICdmaWxlLWV4Y2VsJ30sXG4gICAgJ3hsc3gnOiB7J2Zvcm1hdCc6ICdNaWNyb3NvZnQgRXhjZWwnLCAnaWNvbic6ICdmaWxlLWV4Y2VsJ30sXG4gICAgJ3hsc20nOiB7J2Zvcm1hdCc6ICdNaWNyb3NvZnQgRXhjZWwnLCAnaWNvbic6ICdmaWxlLWV4Y2VsJ30sXG4gICAgJ3hsc2InOiB7J2Zvcm1hdCc6ICdNaWNyb3NvZnQgRXhjZWwnLCAnaWNvbic6ICdmaWxlLWV4Y2VsJ30sXG4gICAgJ3hsczIwMDMnOiB7J2Zvcm1hdCc6ICdNaWNyb3NvZnQgRXhjZWwnLCAnaWNvbic6ICdmaWxlLWV4Y2VsJ30sXG4gICAgJ3hsdHgnOiB7J2Zvcm1hdCc6ICdNaWNyb3NvZnQgRXhjZWwnLCAnaWNvbic6ICdmaWxlLWV4Y2VsJ30sXG4gICAgJ3hsdG0nOiB7J2Zvcm1hdCc6ICdNaWNyb3NvZnQgRXhjZWwnLCAnaWNvbic6ICdmaWxlLWV4Y2VsJ30sXG4gICAgJ3BwdCc6IHsnZm9ybWF0JzogJ01pY3Jvc29mdCBQb3dlclBvaW50JywgJ2ljb24nOiAnZmlsZS1wb3dlcnBvaW50J30sXG4gICAgJ3BwdHgnOiB7J2Zvcm1hdCc6ICdNaWNyb3NvZnQgUG93ZXJQb2ludCcsICdpY29uJzogJ2ZpbGUtcG93ZXJwb2ludCd9LFxuICAgICdwcHMnOiB7J2Zvcm1hdCc6ICdNaWNyb3NvZnQgUG93ZXJQb2ludCcsICdpY29uJzogJ2ZpbGUtcG93ZXJwb2ludCd9LFxuICAgICdwcHN4Jzogeydmb3JtYXQnOiAnTWljcm9zb2Z0IFBvd2VyUG9pbnQnLCAnaWNvbic6ICdmaWxlLXBvd2VycG9pbnQnfSxcbiAgICAndnNkJzogeydmb3JtYXQnOiAnTWljcm9zb2Z0IFZpc2lvJywgJ2ljb24nOiAnZmlsZS1jb2RlJ30sXG4gICAgJ3ZkeCc6IHsnZm9ybWF0JzogJ01pY3Jvc29mdCBWaXNpbycsICdpY29uJzogJ2ZpbGUtY29kZSd9LFxuICAgICd2c3MnOiB7J2Zvcm1hdCc6ICdNaWNyb3NvZnQgVmlzaW8nLCAnaWNvbic6ICdmaWxlLWNvZGUnfSxcbiAgICAndnN4Jzogeydmb3JtYXQnOiAnTWljcm9zb2Z0IFZpc2lvJywgJ2ljb24nOiAnZmlsZS1jb2RlJ30sXG4gICAgJ3ZzdCc6IHsnZm9ybWF0JzogJ01pY3Jvc29mdCBWaXNpbycsICdpY29uJzogJ2ZpbGUtY29kZSd9LFxuICAgICd2dHgnOiB7J2Zvcm1hdCc6ICdNaWNyb3NvZnQgVmlzaW8nLCAnaWNvbic6ICdmaWxlLWNvZGUnfSxcbiAgICAndnNkeCc6IHsnZm9ybWF0JzogJ01pY3Jvc29mdCBWaXNpbycsICdpY29uJzogJ2ZpbGUtY29kZSd9LFxuICAgICd2ZHcnOiB7J2Zvcm1hdCc6ICdNaWNyb3NvZnQgVmlzaW8nLCAnaWNvbic6ICdmaWxlLWNvZGUnfSxcbiAgICAndnN0eCc6IHsnZm9ybWF0JzogJ01pY3Jvc29mdCBWaXNpbycsICdpY29uJzogJ2ZpbGUtY29kZSd9LFxuICAgICd2c3N4Jzogeydmb3JtYXQnOiAnTWljcm9zb2Z0IFZpc2lvJywgJ2ljb24nOiAnZmlsZS1jb2RlJ30sXG4gICAgJ21wcCc6IHsnZm9ybWF0JzogJ01pY3Jvc29mdCBQcm9qZWN0JywgJ2ljb24nOiAnZmlsZS1hbHQnfSxcbiAgICAnbXB0Jzogeydmb3JtYXQnOiAnTWljcm9zb2Z0IFByb2plY3QnLCAnaWNvbic6ICdmaWxlLWFsdCd9LFxuICAgICdtc2cnOiB7J2Zvcm1hdCc6ICdNaWNyb3NvZnQgT3V0bG9vaycsICdpY29uJzogJ2ZpbGUtYWx0J30sXG4gICAgJ2VtbCc6IHsnZm9ybWF0JzogJ01pY3Jvc29mdCBPdXRsb29rJywgJ2ljb24nOiAnZmlsZS1hbHQnfSxcbiAgICAnZW1seCc6IHsnZm9ybWF0JzogJ01pY3Jvc29mdCBPdXRsb29rJywgJ2ljb24nOiAnZmlsZS1hbHQnfSxcbiAgICAnb25lJzogeydmb3JtYXQnOiAnTWljcm9zb2Z0IE9uZU5vdGUnLCAnaWNvbic6ICdmaWxlLXdvcmQnfSxcbiAgICAnb2R0Jzogeydmb3JtYXQnOiAnT3BlbiBEb2N1bWVudCBUZXh0JywgJ2ljb24nOiAnZmlsZS13b3JkJ30sXG4gICAgJ290dCc6IHsnZm9ybWF0JzogJ09wZW4gRG9jdW1lbnQgVGV4dCBUZW1wbGF0ZScsICdpY29uJzogJ2ZpbGUtd29yZCd9LFxuICAgICdvZHMnOiB7J2Zvcm1hdCc6ICdPcGVuIERvY3VtZW50IFNwcmVhZHNoZWV0JywgJ2ljb24nOiAnZmlsZS1leGNlbCd9LFxuICAgICdvZHAnOiB7J2Zvcm1hdCc6ICdPcGVuIERvY3VtZW50IFByZXNlbnRhdGlvbicsICdpY29uJzogJ2ZpbGUtcG93ZXJwb2ludCd9LFxuICAgICdvdHAnOiB7J2Zvcm1hdCc6ICdPcGVuIERvY3VtZW50IFByZXNlbnRhdGlvbicsICdpY29uJzogJ2ZpbGUtcG93ZXJwb2ludCd9LFxuICAgICdvdHMnOiB7J2Zvcm1hdCc6ICdPcGVuIERvY3VtZW50IFByZXNlbnRhdGlvbicsICdpY29uJzogJ2ZpbGUtcG93ZXJwb2ludCd9LFxuICAgICdwb3R4Jzogeydmb3JtYXQnOiAnT3BlbiBEb2N1bWVudCBQcmVzZW50YXRpb24nLCAnaWNvbic6ICdmaWxlLXBvd2VycG9pbnQnfSxcbiAgICAncG90bSc6IHsnZm9ybWF0JzogJ09wZW4gRG9jdW1lbnQgUHJlc2VudGF0aW9uJywgJ2ljb24nOiAnZmlsZS1wb3dlcnBvaW50J30sXG4gICAgJ3BwdG0nOiB7J2Zvcm1hdCc6ICdPcGVuIERvY3VtZW50IFByZXNlbnRhdGlvbicsICdpY29uJzogJ2ZpbGUtcG93ZXJwb2ludCd9LFxuICAgICdwcHNtJzogeydmb3JtYXQnOiAnT3BlbiBEb2N1bWVudCBQcmVzZW50YXRpb24nLCAnaWNvbic6ICdmaWxlLXBvd2VycG9pbnQnfSxcbiAgICAncnRmJzogeydmb3JtYXQnOiAnUmljaCBUZXh0IEZvcm1hdCcsICdpY29uJzogJ2ZpbGUtYWx0J30sXG4gICAgJ3R4dCc6IHsnZm9ybWF0JzogJ1BsYWluIFRleHQgRmlsZScsICdpY29uJzogJ2ZpbGUtYWx0J30sXG4gICAgJ2Nzdic6IHsnZm9ybWF0JzogJ0NvbW1hLVNlcGFyYXRlZCBWYWx1ZXMnLCAnaWNvbic6ICdmaWxlLWV4Y2VsJ30sXG4gICAgJ2h0bWwnOiB7J2Zvcm1hdCc6ICdIeXBlclRleHQgTWFya3VwIExhbmd1YWdlJywgJ2ljb24nOiAnZmlsZS13b3JkJ30sXG4gICAgJ21odCc6IHsnZm9ybWF0JzogJ0h5cGVyVGV4dCBNYXJrdXAgTGFuZ3VhZ2UnLCAnaWNvbic6ICdmaWxlLXdvcmQnfSxcbiAgICAnbWh0bWwnOiB7J2Zvcm1hdCc6ICdIeXBlclRleHQgTWFya3VwIExhbmd1YWdlJywgJ2ljb24nOiAnZmlsZS13b3JkJ30sXG4gICAgJ3htbCc6IHsnZm9ybWF0JzogJ0V4dGVuc2libGUgTWFya3VwIExhbmd1YWdlJywgJ2ljb24nOiAnZmlsZS13b3JkJ30sXG4gICAgJ3hwcyc6IHsnZm9ybWF0JzogJ1hNTCBQYXBlciBTcGVjaWZpY2F0aW9uJywgJ2ljb24nOiAnZmlsZS13b3JkJ30sXG4gICAgJ2R4Zic6IHsnZm9ybWF0JzogJ0F1dG9DQUQgRHJhd2luZyBGaWxlIEZvcm1hdCcsICdpY29uJzogJ2ZpbGUtaW1hZ2UnfSxcbiAgICAnZHdnJzogeydmb3JtYXQnOiAnQXV0b0NBRCBEcmF3aW5nIEZpbGUgRm9ybWF0JywgJ2ljb24nOiAnZmlsZS1pbWFnZSd9LFxuICAgICdibXAnOiB7J2Zvcm1hdCc6ICdCaXRtYXAgUGljdHVyZScsICdpY29uJzogJ2ZpbGUtaW1hZ2UnfSxcbiAgICAnZ2lmJzogeydmb3JtYXQnOiAnR3JhcGhpY3MgSW50ZXJjaGFuZ2UgRm9ybWF0JywgJ2ljb24nOiAnZmlsZS1pbWFnZSd9LFxuICAgICdqcGcnOiB7J2Zvcm1hdCc6ICdKb2ludCBQaG90b2dyYXBoaWMgRXhwZXJ0cyBHcm91cCcsICdpY29uJzogJ2ZpbGUtaW1hZ2UnfSxcbiAgICAnanBlJzogeydmb3JtYXQnOiAnSm9pbnQgUGhvdG9ncmFwaGljIEV4cGVydHMgR3JvdXAnLCAnaWNvbic6ICdmaWxlLWltYWdlJ30sXG4gICAgJ2pwZWcnOiB7J2Zvcm1hdCc6ICdKb2ludCBQaG90b2dyYXBoaWMgRXhwZXJ0cyBHcm91cCcsICdpY29uJzogJ2ZpbGUtaW1hZ2UnfSxcbiAgICAnamZpZic6IHsnZm9ybWF0JzogJ0pvaW50IFBob3RvZ3JhcGhpYyBFeHBlcnRzIEdyb3VwJywgJ2ljb24nOiAnZmlsZS1pbWFnZSd9LFxuICAgICdwbmcnOiB7J2Zvcm1hdCc6ICdQb3J0YWJsZSBOZXR3b3JrIEdyYXBoaWNzJywgJ2ljb24nOiAnZmlsZS1pbWFnZSd9LFxuICAgICd0aWZmJzogeydmb3JtYXQnOiAnVGFnZ2VkIEltYWdlIEZpbGUgRm9ybWF0JywgJ2ljb24nOiAnZmlsZS1pbWFnZSd9LFxuICAgICd0aWYnOiB7J2Zvcm1hdCc6ICdUYWdnZWQgSW1hZ2UgRmlsZSBGb3JtYXQnLCAnaWNvbic6ICdmaWxlLWltYWdlJ30sXG4gICAgJ3BzZCc6IHsnZm9ybWF0JzogJ1RhZ2dlZCBJbWFnZSBGaWxlIEZvcm1hdCcsICdpY29uJzogJ2ZpbGUtaW1hZ2UnfSxcbiAgICAnc3ZnJzogeydmb3JtYXQnOiAnVGFnZ2VkIEltYWdlIEZpbGUgRm9ybWF0JywgJ2ljb24nOiAnZmlsZS1pbWFnZSd9LFxuICAgICdqcDInOiB7J2Zvcm1hdCc6ICdUYWdnZWQgSW1hZ2UgRmlsZSBGb3JtYXQnLCAnaWNvbic6ICdmaWxlLWltYWdlJ30sXG4gICAgJ2VwdWInOiB7J2Zvcm1hdCc6ICdFbGVjdHJvbmljIFB1YmxpY2F0aW9uJywgJ2ljb24nOiAnZmlsZS1wZGYnfSxcbiAgICAnaWNvJzogeydmb3JtYXQnOiAnV2luZG93cyBJY29uJywgJ2ljb24nOiAnZmlsZS1pbWFnZSd9LFxuICAgICd3ZWJwJzogeydmb3JtYXQnOiAnQ29tcHJlc3NlZCBJbWFnZScsICdpY29uJzogJ2ZpbGUtaW1hZ2UnfSxcbiAgICAnbW9iaSc6IHsnZm9ybWF0JzogJ01vYmlwb2NrZXQgZUJvb2snLCAnaWNvbic6ICdmaWxlLXBkZid9LFxuICAgICd0ZXgnOiB7J2Zvcm1hdCc6ICdMYVRlWCBTb3VyY2UgRG9jdW1lbnQnLCAnaWNvbic6ICdmaWxlLXBkZid9LFxuICAgICdkanZ1Jzogeydmb3JtYXQnOiAnTXVsdGktTGF5ZXIgUmFzdGVyIEltYWdlJywgJ2ljb24nOiAnZmlsZS1hbHQnfSxcbiAgICAndW5rbm93bic6IHsnZm9ybWF0JzogJ1RoaXMgZm9ybWF0IGlzIG5vdCBzdXBwb3J0ZWQnLCAnaWNvbic6ICdmaWxlJ30sXG4gIH07XG5cbiAgcHVibGljIHN0YXRpYyBmaW5kKGZpbGVuYW1lOiBzdHJpbmcsIGlzRGlyZWN0b3J5OiBib29sZWFuKSB7XG4gICAgaWYgKGZpbGVuYW1lICYmICFpc0RpcmVjdG9yeSkge1xuICAgICAgY29uc3Qgc3RyaW5ncyA9IGZpbGVuYW1lLnNwbGl0KCcuJyk7XG4gICAgICBjb25zdCBuYW1lID0gc3RyaW5ncy5wb3AoKS50b0xvd2VyQ2FzZSgpO1xuICAgICAgaWYgKHR5cGVvZiBGaWxlVXRpbC5tYXBbbmFtZV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgcmV0dXJuIHN0cmluZ3MubGVuZ3RoID4gMCA/IEZpbGVVdGlsLm1hcFsndW5rbm93biddIDogRmlsZVV0aWwubWFwWydmb2xkZXInXTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBGaWxlVXRpbC5tYXBbbmFtZV07XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBGaWxlVXRpbC5tYXBbJ2ZvbGRlciddO1xuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgRmlsZVNlcnZpY2Uge1xuXG4gIGNvbnN0cnVjdG9yKCkge1xuICB9XG59XG4iXX0=