import * as tslib_1 from "tslib";
var PageModel = /** @class */ (function () {
    function PageModel() {
    }
    return PageModel;
}());
export { PageModel };
var RotatedPage = /** @class */ (function () {
    function RotatedPage() {
    }
    return RotatedPage;
}());
export { RotatedPage };
var FileCredentials = /** @class */ (function () {
    function FileCredentials(guid, password) {
        this.guid = guid;
        this.password = password;
    }
    return FileCredentials;
}());
export { FileCredentials };
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
var FileDescription = /** @class */ (function () {
    function FileDescription() {
        this.printAllowed = true;
    }
    return FileDescription;
}());
export { FileDescription };
var FileModel = /** @class */ (function () {
    function FileModel() {
    }
    return FileModel;
}());
export { FileModel };
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
var FileUtil = /** @class */ (function () {
    function FileUtil() {
    }
    FileUtil.find = function (filename, isDirectory) {
        if (filename && !isDirectory) {
            var strings = filename.split('.');
            var name_1 = strings.pop().toLowerCase();
            if (typeof FileUtil.map[name_1] === "undefined") {
                return strings.length > 1 ? FileUtil.map['unknown'] : FileUtil.map['folder'];
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
        'mpp': { 'format': 'Microsoft Project', 'icon': 'file-text' },
        'mpt': { 'format': 'Microsoft Project', 'icon': 'file-text' },
        'msg': { 'format': 'Microsoft Outlook', 'icon': 'file-text' },
        'eml': { 'format': 'Microsoft Outlook', 'icon': 'file-text' },
        'emlx': { 'format': 'Microsoft Outlook', 'icon': 'file-text' },
        'one': { 'format': 'Microsoft OneNote', 'icon': 'file-word' },
        'odt': { 'format': 'Open Document Text', 'icon': 'file-word' },
        'ott': { 'format': 'Open Document Text Template', 'icon': 'file-word' },
        'ods': { 'format': 'Open Document Spreadsheet', 'icon': 'file-excel' },
        'odp': { 'format': 'Open Document Presentation', 'icon': 'file-powerpoint' },
        'otp': { 'format': 'Open Document Presentation', 'icon': 'file-powerpoint' },
        'ots': { 'format': 'Open Document Presentation', 'icon': 'file-powerpoint' },
        'rtf': { 'format': 'Rich Text Format', 'icon': 'file-text' },
        'txt': { 'format': 'Plain Text File', 'icon': 'file-text' },
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
        'tiff': { 'format': 'Tagged Image File Format', 'icon': 'file-photo' },
        'tif': { 'format': 'Tagged Image File Format', 'icon': 'file-photo' },
        'epub': { 'format': 'Electronic Publication', 'icon': 'file-pdf' },
        'ico': { 'format': 'Windows Icon', 'icon': 'file-image' },
        'webp': { 'format': 'Compressed Image', 'icon': 'file-image' },
        'mobi': { 'format': 'Mobipocket eBook', 'icon': 'file-pdf' },
        'tex': { 'format': 'LaTeX Source Document', 'icon': 'file-pdf' },
        'djvu': { 'format': 'Multi-Layer Raster Image', 'icon': 'file-text' },
        'unknown': { 'format': 'This format is not supported', 'icon': 'file' },
    };
    return FileUtil;
}());
export { FileUtil };
var FileService = /** @class */ (function () {
    function FileService() {
    }
    return FileService;
}());
export { FileService };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmlsZS5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdyb3VwZG9jcy5leGFtcGxlcy5hbmd1bGFyL2NvbW1vbi1jb21wb25lbnRzLyIsInNvdXJjZXMiOlsibGliL2ZpbGUuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7SUFBQTtJQU9BLENBQUM7SUFBRCxnQkFBQztBQUFELENBQUMsQUFQRCxJQU9DOztBQUVEO0lBQUE7SUFHQSxDQUFDO0lBQUQsa0JBQUM7QUFBRCxDQUFDLEFBSEQsSUFHQzs7QUFFRDtJQUlFLHlCQUFZLElBQVksRUFBRSxRQUFnQjtRQUN4QyxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztRQUNqQixJQUFJLENBQUMsUUFBUSxHQUFHLFFBQVEsQ0FBQztJQUMzQixDQUFDO0lBQ0gsc0JBQUM7QUFBRCxDQUFDLEFBUkQsSUFRQzs7QUFFRDtJQUE4QixvQ0FBZTtJQUczQyxrQkFBWSxJQUFZLEVBQUUsUUFBZ0IsRUFBRSxPQUFlO1FBQTNELFlBQ0Usa0JBQU0sSUFBSSxFQUFFLFFBQVEsQ0FBQyxTQUV0QjtRQURDLEtBQUksQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDOztJQUN6QixDQUFDO0lBQ0gsZUFBQztBQUFELENBQUMsQUFQRCxDQUE4QixlQUFlLEdBTzVDOztBQUVEO0lBQUE7UUFHRSxpQkFBWSxHQUFHLElBQUksQ0FBQztJQUN0QixDQUFDO0lBQUQsc0JBQUM7QUFBRCxDQUFDLEFBSkQsSUFJQzs7QUFFRDtJQUFBO0lBS0EsQ0FBQztJQUFELGdCQUFDO0FBQUQsQ0FBQyxBQUxELElBS0M7O0FBRUQ7SUFBQTtJQVFBLENBQUM7SUFQUSxvQkFBVSxHQUFHLEdBQUcsQ0FBQztJQUNqQixzQkFBWSxHQUFHLEdBQUcsQ0FBQztJQUNuQixtQkFBUyxHQUFHLEdBQUcsQ0FBQztJQUNoQixrQkFBUSxHQUFHLEdBQUcsQ0FBQztJQUNmLGlCQUFPLEdBQUcsR0FBRyxDQUFDO0lBQ2Qsa0JBQVEsR0FB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RUFBRSxpQkFBaUIsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFDO1FBQ3pELEtBQUssRUFBRSxFQUFDLFFBQVEsRUFBRSxpQkFBaUIsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFDO1FBQ3pELEtBQUssRUFBRSxFQUFDLFFBQVEsRUFBRSxpQkFBaUIsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFDO1FBQ3pELEtBQUssRUFBRSxFQUFDLFFBQVEsRUFBRSxpQkFBaUIsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFDO1FBQ3pELE1BQU0sRUFBRSxFQUFDLFFBQVEsRUFBRSxpQkFBaUIsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFDO1FBQzFELEtBQUssRUFBRSxFQUFDLFFBQVEsRUFBRSxpQkFBaUIsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFDO1FBQ3pELE1BQU0sRUFBRSxFQUFDLFFBQVEsRUFBRSxpQkFBaUIsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFDO1FBQzFELE1BQU0sRUFBRSxFQUFDLFFBQVEsRUFBRSxpQkFBaUIsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFDO1FBQzFELEtBQUssRUFBRSxFQUFDLFFBQVEsRUFBRSxtQkFBbUIsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFDO1FBQzNELEtBQUssRUFBRSxFQUFDLFFBQVEsRUFBRSxtQkFBbUIsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFDO1FBQzNELEtBQUssRUFBRSxFQUFDLFFBQVEsRUFBRSxtQkFBbUIsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFDO1FBQzNELEtBQUssRUFBRSxFQUFDLFFBQVEsRUFBRSxtQkFBbUIsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFDO1FBQzNELE1BQU0sRUFBRSxFQUFDLFFBQVEsRUFBRSxtQkFBbUIsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFDO1FBQzVELEtBQUssRUFBRSxFQUFDLFFBQVEsRUFBRSxtQkFBbUIsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFDO1FBQzNELEtBQUssRUFBRSxFQUFDLFFBQVEsRUFBRSxvQkFBb0IsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFDO1FBQzVELEtBQUssRUFBRSxFQUFDLFFBQVEsRUFBRSw2QkFBNkIsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFDO1FBQ3JFLEtBQUssRUFBRSxFQUFDLFFBQVEsRUFBRSwyQkFBMkIsRUFBRSxNQUFNLEVBQUUsWUFBWSxFQUFDO1FBQ3BFLEtBQUssRUFBRSxFQUFDLFFBQVEsRUFBRSw0QkFBNEIsRUFBRSxNQUFNLEVBQUUsaUJBQWlCLEVBQUM7UUFDMUUsS0FBSyxFQUFFLEVBQUMsUUFBUSxFQUFFLDRCQUE0QixFQUFFLE1BQU0sRUFBRSxpQkFBaUIsRUFBQztRQUMxRSxLQUFLLEVBQUUsRUFBQyxRQUFRLEVBQUUsNEJBQTRCLEVBQUUsTUFBTSxFQUFFLGlCQUFpQixFQUFDO1FBQzFFLEtBQUssRUFBRSxFQUFDLFFBQVEsRUFBRSxrQkFBa0IsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFDO1FBQzFELEtBQUssRUFBRSxFQUFDLFFBQVEsRUFBRSxpQkFBaUIsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFDO1FBQ3pELEtBQUssRUFBRSxFQUFDLFFBQVEsRUFBRSx3QkFBd0IsRUFBRSxNQUFNLEVBQUUsWUFBWSxFQUFDO1FBQ2pFLE1BQU0sRUFBRSxFQUFDLFFBQVEsRUFBRSwyQkFBMkIsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFDO1FBQ3BFLEtBQUssRUFBRSxFQUFDLFFBQVEsRUFBRSwyQkFBMkIsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFDO1FBQ25FLE9BQU8sRUFBRSxFQUFDLFFBQVEsRUFBRSwyQkFBMkIsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFDO1FBQ3JFLEtBQUssRUFBRSxFQUFDLFFBQVEsRUFBRSw0QkFBNEIsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFDO1FBQ3BFLEtBQUssRUFBRSxFQUFDLFFBQVEsRUFBRSx5QkFBeUIsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFDO1FBQ2pFLEtBQUssRUFBRSxFQUFDLFFBQVEsRUFBRSw2QkFBNkIsRUFBRSxNQUFNLEVBQUUsWUFBWSxFQUFDO1FBQ3RFLEtBQUssRUFBRSxFQUFDLFFBQVEsRUFBRSw2QkFBNkIsRUFBRSxNQUFNLEVBQUUsWUFBWSxFQUFDO1FBQ3RFLEtBQUssRUFBRSxFQUFDLFFBQVEsRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLEVBQUUsWUFBWSxFQUFDO1FBQ3pELEtBQUssRUFBRSxFQUFDLFFBQVEsRUFBRSw2QkFBNkIsRUFBRSxNQUFNLEVBQUUsWUFBWSxFQUFDO1FBQ3RFLEtBQUssRUFBRSxFQUFDLFFBQVEsRUFBRSxrQ0FBa0MsRUFBRSxNQUFNLEVBQUUsWUFBWSxFQUFDO1FBQzNFLEtBQUssRUFBRSxFQUFDLFFBQVEsRUFBRSxrQ0FBa0MsRUFBRSxNQUFNLEVBQUUsWUFBWSxFQUFDO1FBQzNFLE1BQU0sRUFBRSxFQUFDLFFBQVEsRUFBRSxrQ0FBa0MsRUFBRSxNQUFNLEVBQUUsWUFBWSxFQUFDO1FBQzVFLE1BQU0sRUFBRSxFQUFDLFFBQVEsRUFBRSxrQ0FBa0MsRUFBRSxNQUFNLEVBQUUsWUFBWSxFQUFDO1FBQzVFLEtBQUssRUFBRSxFQUFDLFFBQVEsRUFBRSwyQkFBMkIsRUFBRSxNQUFNLEVBQUUsWUFBWSxFQUFDO1FBQ3BFLE1BQU0sRUFBRSxFQUFDLFFBQVEsRUFBRSwwQkFBMEIsRUFBRSxNQUFNLEVBQUUsWUFBWSxFQUFDO1FBQ3BFLEtBQUssRUFBRSxFQUFDLFFBQVEsRUFBRSwwQkFBMEIsRUFBRSxNQUFNLEVBQUUsWUFBWSxFQUFDO1FBQ25FLE1BQU0sRUFBRSxFQUFDLFFBQVEsRUFBRSx3QkFBd0IsRUFBRSxNQUFNLEVBQUUsVUFBVSxFQUFDO1FBQ2hFLEtBQUssRUFBRSxFQUFDLFFBQVEsRUFBRSxjQUFjLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBQztRQUN2RCxNQUFNLEVBQUUsRUFBQyxRQUFRLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBQztRQUM1RCxNQUFNLEVBQUUsRUFBQyxRQUFRLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxFQUFFLFVBQVUsRUFBQztRQUMxRCxLQUFLLEVBQUUsRUFBQyxRQUFRLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSxFQUFFLFVBQVUsRUFBQztRQUM5RCxNQUFNLEVBQUUsRUFBQyxRQUFRLEVBQUUsMEJBQTBCLEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBQztRQUNuRSxTQUFTLEVBQUUsRUFBQyxRQUFRLEVBQUUsOEJBQThCLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBQztLQUN0RSxDQUFDO0lBZUosZUFBQztDQUFBLEFBakZELElBaUZDO1NBakZZLFFBQVE7QUFtRnJCO0lBRUU7SUFDQSxDQUFDO0lBQ0gsa0JBQUM7QUFBRCxDQUFDLEFBSkQsSUFJQyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjbGFzcyBQYWdlTW9kZWwge1xuICBkYXRhOiBzdHJpbmc7XG4gIGFuZ2xlOiBudW1iZXI7XG4gIHdpZHRoOiBudW1iZXI7XG4gIGhlaWdodDogbnVtYmVyO1xuICBudW1iZXI6IG51bWJlcjtcbiAgZWRpdGFibGU6IGJvb2xlYW47XG59XG5cbmV4cG9ydCBjbGFzcyBSb3RhdGVkUGFnZSB7XG4gIHBhZ2VOdW1iZXI6IG51bWJlcjtcbiAgYW5nbGU6IG51bWJlcjtcbn1cblxuZXhwb3J0IGNsYXNzIEZpbGVDcmVkZW50aWFscyB7XG4gIGd1aWQ6IHN0cmluZztcbiAgcGFzc3dvcmQ6IHN0cmluZztcblxuICBjb25zdHJ1Y3RvcihndWlkOiBzdHJpbmcsIHBhc3N3b3JkOiBzdHJpbmcpIHtcbiAgICB0aGlzLmd1aWQgPSBndWlkO1xuICAgIHRoaXMucGFzc3dvcmQgPSBwYXNzd29yZDtcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgU2F2ZUZpbGUgZXh0ZW5kcyBGaWxlQ3JlZGVudGlhbHMge1xuICBjb250ZW50OiBzdHJpbmc7XG5cbiAgY29uc3RydWN0b3IoZ3VpZDogc3RyaW5nLCBwYXNzd29yZDogc3RyaW5nLCBjb250ZW50OiBzdHJpbmcpIHtcbiAgICBzdXBlcihndWlkLCBwYXNzd29yZCk7XG4gICAgdGhpcy5jb250ZW50ID0gY29udGVudDtcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgRmlsZURlc2NyaXB0aW9uIHtcbiAgZ3VpZDogc3RyaW5nO1xuICBwYWdlczogUGFnZU1vZGVsW107XG4gIHByaW50QWxsb3dlZCA9IHRydWU7XG59XG5cbmV4cG9ydCBjbGFzcyBGaWxlTW9kZWwge1xuICBndWlkOiBzdHJpbmc7XG4gIG5hbWU6IHN0cmluZztcbiAgZGlyZWN0b3J5OiBib29sZWFuO1xuICBzaXplOiBudW1iZXI7XG59XG5cbmV4cG9ydCBjbGFzcyBIdHRwRXJyb3Ige1xuICBzdGF0aWMgQmFkUmVxdWVzdCA9IDQwMDtcbiAgc3RhdGljIFVuYXV0aG9yaXplZCA9IDQwMTtcbiAgc3RhdGljIEZvcmJpZGRlbiA9IDQwMztcbiAgc3RhdGljIE5vdEZvdW5kID0gNDA0O1xuICBzdGF0aWMgVGltZU91dCA9IDQwODtcbiAgc3RhdGljIENvbmZsaWN0ID0gNDA5O1xuICBzdGF0aWMgSW50ZXJuYWxTZXJ2ZXJFcnJvciA9IDUwMDtcbn1cblxuZXhwb3J0IGNsYXNzIEZpbGVVdGlsIHtcbiAgcHVibGljIHN0YXRpYyBtYXAgPSB7XG4gICAgJ2ZvbGRlcic6IHsnZm9ybWF0JzogJycsICdpY29uJzogJ2ZvbGRlcid9LFxuICAgICdwZGYnOiB7J2Zvcm1hdCc6ICdQb3J0YWJsZSBEb2N1bWVudCBGb3JtYXQnLCAnaWNvbic6ICdmaWxlLXBkZid9LFxuICAgICdkb2MnOiB7J2Zvcm1hdCc6ICdNaWNyb3NvZnQgV29yZCcsICdpY29uJzogJ2ZpbGUtd29yZCd9LFxuICAgICdkb2N4Jzogeydmb3JtYXQnOiAnTWljcm9zb2Z0IFdvcmQnLCAnaWNvbic6ICdmaWxlLXdvcmQnfSxcbiAgICAnZG9jbSc6IHsnZm9ybWF0JzogJ01pY3Jvc29mdCBXb3JkJywgJ2ljb24nOiAnZmlsZS13b3JkJ30sXG4gICAgJ2RvdCc6IHsnZm9ybWF0JzogJ01pY3Jvc29mdCBXb3JkJywgJ2ljb24nOiAnZmlsZS13b3JkJ30sXG4gICAgJ2RvdHgnOiB7J2Zvcm1hdCc6ICdNaWNyb3NvZnQgV29yZCcsICdpY29uJzogJ2ZpbGUtd29yZCd9LFxuICAgICdkb3RtJzogeydmb3JtYXQnOiAnTWljcm9zb2Z0IFdvcmQnLCAnaWNvbic6ICdmaWxlLXdvcmQnfSxcbiAgICAneGxzJzogeydmb3JtYXQnOiAnTWljcm9zb2Z0IEV4Y2VsJywgJ2ljb24nOiAnZmlsZS1leGNlbCd9LFxuICAgICd4bHN4Jzogeydmb3JtYXQnOiAnTWljcm9zb2Z0IEV4Y2VsJywgJ2ljb24nOiAnZmlsZS1leGNlbCd9LFxuICAgICd4bHNtJzogeydmb3JtYXQnOiAnTWljcm9zb2Z0IEV4Y2VsJywgJ2ljb24nOiAnZmlsZS1leGNlbCd9LFxuICAgICd4bHNiJzogeydmb3JtYXQnOiAnTWljcm9zb2Z0IEV4Y2VsJywgJ2ljb24nOiAnZmlsZS1leGNlbCd9LFxuICAgICdwcHQnOiB7J2Zvcm1hdCc6ICdNaWNyb3NvZnQgUG93ZXJQb2ludCcsICdpY29uJzogJ2ZpbGUtcG93ZXJwb2ludCd9LFxuICAgICdwcHR4Jzogeydmb3JtYXQnOiAnTWljcm9zb2Z0IFBvd2VyUG9pbnQnLCAnaWNvbic6ICdmaWxlLXBvd2VycG9pbnQnfSxcbiAgICAncHBzJzogeydmb3JtYXQnOiAnTWljcm9zb2Z0IFBvd2VyUG9pbnQnLCAnaWNvbic6ICdmaWxlLXBvd2VycG9pbnQnfSxcbiAgICAncHBzeCc6IHsnZm9ybWF0JzogJ01pY3Jvc29mdCBQb3dlclBvaW50JywgJ2ljb24nOiAnZmlsZS1wb3dlcnBvaW50J30sXG4gICAgJ3ZzZCc6IHsnZm9ybWF0JzogJ01pY3Jvc29mdCBWaXNpbycsICdpY29uJzogJ2ZpbGUtY29kZSd9LFxuICAgICd2ZHgnOiB7J2Zvcm1hdCc6ICdNaWNyb3NvZnQgVmlzaW8nLCAnaWNvbic6ICdmaWxlLWNvZGUnfSxcbiAgICAndnNzJzogeydmb3JtYXQnOiAnTWljcm9zb2Z0IFZpc2lvJywgJ2ljb24nOiAnZmlsZS1jb2RlJ30sXG4gICAgJ3ZzeCc6IHsnZm9ybWF0JzogJ01pY3Jvc29mdCBWaXNpbycsICdpY29uJzogJ2ZpbGUtY29kZSd9LFxuICAgICd2c3QnOiB7J2Zvcm1hdCc6ICdNaWNyb3NvZnQgVmlzaW8nLCAnaWNvbic6ICdmaWxlLWNvZGUnfSxcbiAgICAndnR4Jzogeydmb3JtYXQnOiAnTWljcm9zb2Z0IFZpc2lvJywgJ2ljb24nOiAnZmlsZS1jb2RlJ30sXG4gICAgJ3ZzZHgnOiB7J2Zvcm1hdCc6ICdNaWNyb3NvZnQgVmlzaW8nLCAnaWNvbic6ICdmaWxlLWNvZGUnfSxcbiAgICAndmR3Jzogeydmb3JtYXQnOiAnTWljcm9zb2Z0IFZpc2lvJywgJ2ljb24nOiAnZmlsZS1jb2RlJ30sXG4gICAgJ3ZzdHgnOiB7J2Zvcm1hdCc6ICdNaWNyb3NvZnQgVmlzaW8nLCAnaWNvbic6ICdmaWxlLWNvZGUnfSxcbiAgICAndnNzeCc6IHsnZm9ybWF0JzogJ01pY3Jvc29mdCBWaXNpbycsICdpY29uJzogJ2ZpbGUtY29kZSd9LFxuICAgICdtcHAnOiB7J2Zvcm1hdCc6ICdNaWNyb3NvZnQgUHJvamVjdCcsICdpY29uJzogJ2ZpbGUtdGV4dCd9LFxuICAgICdtcHQnOiB7J2Zvcm1hdCc6ICdNaWNyb3NvZnQgUHJvamVjdCcsICdpY29uJzogJ2ZpbGUtdGV4dCd9LFxuICAgICdtc2cnOiB7J2Zvcm1hdCc6ICdNaWNyb3NvZnQgT3V0bG9vaycsICdpY29uJzogJ2ZpbGUtdGV4dCd9LFxuICAgICdlbWwnOiB7J2Zvcm1hdCc6ICdNaWNyb3NvZnQgT3V0bG9vaycsICdpY29uJzogJ2ZpbGUtdGV4dCd9LFxuICAgICdlbWx4Jzogeydmb3JtYXQnOiAnTWljcm9zb2Z0IE91dGxvb2snLCAnaWNvbic6ICdmaWxlLXRleHQnfSxcbiAgICAnb25lJzogeydmb3JtYXQnOiAnTWljcm9zb2Z0IE9uZU5vdGUnLCAnaWNvbic6ICdmaWxlLXdvcmQnfSxcbiAgICAnb2R0Jzogeydmb3JtYXQnOiAnT3BlbiBEb2N1bWVudCBUZXh0JywgJ2ljb24nOiAnZmlsZS13b3JkJ30sXG4gICAgJ290dCc6IHsnZm9ybWF0JzogJ09wZW4gRG9jdW1lbnQgVGV4dCBUZW1wbGF0ZScsICdpY29uJzogJ2ZpbGUtd29yZCd9LFxuICAgICdvZHMnOiB7J2Zvcm1hdCc6ICdPcGVuIERvY3VtZW50IFNwcmVhZHNoZWV0JywgJ2ljb24nOiAnZmlsZS1leGNlbCd9LFxuICAgICdvZHAnOiB7J2Zvcm1hdCc6ICdPcGVuIERvY3VtZW50IFByZXNlbnRhdGlvbicsICdpY29uJzogJ2ZpbGUtcG93ZXJwb2ludCd9LFxuICAgICdvdHAnOiB7J2Zvcm1hdCc6ICdPcGVuIERvY3VtZW50IFByZXNlbnRhdGlvbicsICdpY29uJzogJ2ZpbGUtcG93ZXJwb2ludCd9LFxuICAgICdvdHMnOiB7J2Zvcm1hdCc6ICdPcGVuIERvY3VtZW50IFByZXNlbnRhdGlvbicsICdpY29uJzogJ2ZpbGUtcG93ZXJwb2ludCd9LFxuICAgICdydGYnOiB7J2Zvcm1hdCc6ICdSaWNoIFRleHQgRm9ybWF0JywgJ2ljb24nOiAnZmlsZS10ZXh0J30sXG4gICAgJ3R4dCc6IHsnZm9ybWF0JzogJ1BsYWluIFRleHQgRmlsZScsICdpY29uJzogJ2ZpbGUtdGV4dCd9LFxuICAgICdjc3YnOiB7J2Zvcm1hdCc6ICdDb21tYS1TZXBhcmF0ZWQgVmFsdWVzJywgJ2ljb24nOiAnZmlsZS1leGNlbCd9LFxuICAgICdodG1sJzogeydmb3JtYXQnOiAnSHlwZXJUZXh0IE1hcmt1cCBMYW5ndWFnZScsICdpY29uJzogJ2ZpbGUtd29yZCd9LFxuICAgICdtaHQnOiB7J2Zvcm1hdCc6ICdIeXBlclRleHQgTWFya3VwIExhbmd1YWdlJywgJ2ljb24nOiAnZmlsZS13b3JkJ30sXG4gICAgJ21odG1sJzogeydmb3JtYXQnOiAnSHlwZXJUZXh0IE1hcmt1cCBMYW5ndWFnZScsICdpY29uJzogJ2ZpbGUtd29yZCd9LFxuICAgICd4bWwnOiB7J2Zvcm1hdCc6ICdFeHRlbnNpYmxlIE1hcmt1cCBMYW5ndWFnZScsICdpY29uJzogJ2ZpbGUtd29yZCd9LFxuICAgICd4cHMnOiB7J2Zvcm1hdCc6ICdYTUwgUGFwZXIgU3BlY2lmaWNhdGlvbicsICdpY29uJzogJ2ZpbGUtd29yZCd9LFxuICAgICdkeGYnOiB7J2Zvcm1hdCc6ICdBdXRvQ0FEIERyYXdpbmcgRmlsZSBGb3JtYXQnLCAnaWNvbic6ICdmaWxlLWltYWdlJ30sXG4gICAgJ2R3Zyc6IHsnZm9ybWF0JzogJ0F1dG9DQUQgRHJhd2luZyBGaWxlIEZvcm1hdCcsICdpY29uJzogJ2ZpbGUtaW1hZ2UnfSxcbiAgICAnYm1wJzogeydmb3JtYXQnOiAnQml0bWFwIFBpY3R1cmUnLCAnaWNvbic6ICdmaWxlLWltYWdlJ30sXG4gICAgJ2dpZic6IHsnZm9ybWF0JzogJ0dyYXBoaWNzIEludGVyY2hhbmdlIEZvcm1hdCcsICdpY29uJzogJ2ZpbGUtaW1hZ2UnfSxcbiAgICAnanBnJzogeydmb3JtYXQnOiAnSm9pbnQgUGhvdG9ncmFwaGljIEV4cGVydHMgR3JvdXAnLCAnaWNvbic6ICdmaWxlLWltYWdlJ30sXG4gICAgJ2pwZSc6IHsnZm9ybWF0JzogJ0pvaW50IFBob3RvZ3JhcGhpYyBFeHBlcnRzIEdyb3VwJywgJ2ljb24nOiAnZmlsZS1pbWFnZSd9LFxuICAgICdqcGVnJzogeydmb3JtYXQnOiAnSm9pbnQgUGhvdG9ncmFwaGljIEV4cGVydHMgR3JvdXAnLCAnaWNvbic6ICdmaWxlLWltYWdlJ30sXG4gICAgJ2pmaWYnOiB7J2Zvcm1hdCc6ICdKb2ludCBQaG90b2dyYXBoaWMgRXhwZXJ0cyBHcm91cCcsICdpY29uJzogJ2ZpbGUtaW1hZ2UnfSxcbiAgICAncG5nJzogeydmb3JtYXQnOiAnUG9ydGFibGUgTmV0d29yayBHcmFwaGljcycsICdpY29uJzogJ2ZpbGUtaW1hZ2UnfSxcbiAgICAndGlmZic6IHsnZm9ybWF0JzogJ1RhZ2dlZCBJbWFnZSBGaWxlIEZvcm1hdCcsICdpY29uJzogJ2ZpbGUtcGhvdG8nfSxcbiAgICAndGlmJzogeydmb3JtYXQnOiAnVGFnZ2VkIEltYWdlIEZpbGUgRm9ybWF0JywgJ2ljb24nOiAnZmlsZS1waG90byd9LFxuICAgICdlcHViJzogeydmb3JtYXQnOiAnRWxlY3Ryb25pYyBQdWJsaWNhdGlvbicsICdpY29uJzogJ2ZpbGUtcGRmJ30sXG4gICAgJ2ljbyc6IHsnZm9ybWF0JzogJ1dpbmRvd3MgSWNvbicsICdpY29uJzogJ2ZpbGUtaW1hZ2UnfSxcbiAgICAnd2VicCc6IHsnZm9ybWF0JzogJ0NvbXByZXNzZWQgSW1hZ2UnLCAnaWNvbic6ICdmaWxlLWltYWdlJ30sXG4gICAgJ21vYmknOiB7J2Zvcm1hdCc6ICdNb2JpcG9ja2V0IGVCb29rJywgJ2ljb24nOiAnZmlsZS1wZGYnfSxcbiAgICAndGV4Jzogeydmb3JtYXQnOiAnTGFUZVggU291cmNlIERvY3VtZW50JywgJ2ljb24nOiAnZmlsZS1wZGYnfSxcbiAgICAnZGp2dSc6IHsnZm9ybWF0JzogJ011bHRpLUxheWVyIFJhc3RlciBJbWFnZScsICdpY29uJzogJ2ZpbGUtdGV4dCd9LFxuICAgICd1bmtub3duJzogeydmb3JtYXQnOiAnVGhpcyBmb3JtYXQgaXMgbm90IHN1cHBvcnRlZCcsICdpY29uJzogJ2ZpbGUnfSxcbiAgfTtcblxuICBwdWJsaWMgc3RhdGljIGZpbmQoZmlsZW5hbWU6IHN0cmluZywgaXNEaXJlY3Rvcnk6IGJvb2xlYW4pIHtcbiAgICBpZiAoZmlsZW5hbWUgJiYgIWlzRGlyZWN0b3J5KSB7XG4gICAgICBjb25zdCBzdHJpbmdzID0gZmlsZW5hbWUuc3BsaXQoJy4nKTtcbiAgICAgIGNvbnN0IG5hbWUgPSBzdHJpbmdzLnBvcCgpLnRvTG93ZXJDYXNlKCk7XG4gICAgICBpZiAodHlwZW9mIEZpbGVVdGlsLm1hcFtuYW1lXSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICByZXR1cm4gc3RyaW5ncy5sZW5ndGggPiAxID8gRmlsZVV0aWwubWFwWyd1bmtub3duJ10gOiBGaWxlVXRpbC5tYXBbJ2ZvbGRlciddO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIEZpbGVVdGlsLm1hcFtuYW1lXTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIEZpbGVVdGlsLm1hcFsnZm9sZGVyJ107XG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBGaWxlU2VydmljZSB7XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gIH1cbn1cbiJdfQ==