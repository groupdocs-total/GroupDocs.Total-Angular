/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { FileModel } from "@groupdocs.examples.angular/common-components";
export class IndexedFileModel extends FileModel {
}
if (false) {
    /** @type {?} */
    IndexedFileModel.prototype.documentStatus;
    /** @type {?} */
    IndexedFileModel.prototype.password;
}
export class SearchResult {
}
if (false) {
    /** @type {?} */
    SearchResult.prototype.foundFiles;
    /** @type {?} */
    SearchResult.prototype.filePath;
    /** @type {?} */
    SearchResult.prototype.searchDuration;
    /** @type {?} */
    SearchResult.prototype.totalFiles;
    /** @type {?} */
    SearchResult.prototype.totalOccurences;
    /** @type {?} */
    SearchResult.prototype.indexedFiles;
}
export class SearchResultItemModel {
}
if (false) {
    /** @type {?} */
    SearchResultItemModel.prototype.directory;
    /** @type {?} */
    SearchResultItemModel.prototype.occurrences;
    /** @type {?} */
    SearchResultItemModel.prototype.size;
    /** @type {?} */
    SearchResultItemModel.prototype.guid;
    /** @type {?} */
    SearchResultItemModel.prototype.name;
    /** @type {?} */
    SearchResultItemModel.prototype.isDirectory;
    /** @type {?} */
    SearchResultItemModel.prototype.showPhrases;
    /** @type {?} */
    SearchResultItemModel.prototype.foundPhrases;
}
export class ExtendedFileModel {
}
if (false) {
    /** @type {?} */
    ExtendedFileModel.prototype.guid;
    /** @type {?} */
    ExtendedFileModel.prototype.directory;
    /** @type {?} */
    ExtendedFileModel.prototype.isDirectory;
    /** @type {?} */
    ExtendedFileModel.prototype.size;
    /** @type {?} */
    ExtendedFileModel.prototype.name;
    /** @type {?} */
    ExtendedFileModel.prototype.selected;
}
/** @enum {string} */
const FileIndexingStatus = {
    Indexing: "Indexing",
    SuccessfullyProcessed: "SuccessfullyProcessed",
    Skipped: "Skipped",
    ProcessedWithError: "ProcessedWithError",
    PasswordRequired: "PasswordRequired",
};
export { FileIndexingStatus };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VhcmNoLW1vZGVscy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bncm91cGRvY3MuZXhhbXBsZXMuYW5ndWxhci9zZWFyY2gvIiwic291cmNlcyI6WyJsaWIvc2VhcmNoLW1vZGVscy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLCtDQUErQyxDQUFDO0FBRTFFLE1BQU0sT0FBTyxnQkFBaUIsU0FBUSxTQUFTO0NBRzlDOzs7SUFGQywwQ0FBdUI7O0lBQ3ZCLG9DQUFpQjs7QUFHbkIsTUFBTSxPQUFPLFlBQVk7Q0FPeEI7OztJQU5DLGtDQUFvQzs7SUFDcEMsZ0NBQWlCOztJQUNqQixzQ0FBdUI7O0lBQ3ZCLGtDQUFtQjs7SUFDbkIsdUNBQXdCOztJQUN4QixvQ0FBcUI7O0FBR3ZCLE1BQU0sT0FBTyxxQkFBcUI7Q0FTakM7OztJQVJDLDBDQUFtQjs7SUFDbkIsNENBQW9COztJQUNwQixxQ0FBYTs7SUFDYixxQ0FBYTs7SUFDYixxQ0FBYTs7SUFDYiw0Q0FBcUI7O0lBQ3JCLDRDQUFxQjs7SUFDckIsNkNBQXFCOztBQUd2QixNQUFNLE9BQU8saUJBQWlCO0NBTzdCOzs7SUFOQyxpQ0FBYTs7SUFDYixzQ0FBbUI7O0lBQ25CLHdDQUFxQjs7SUFDckIsaUNBQWE7O0lBQ2IsaUNBQWE7O0lBQ2IscUNBQWtCOzs7O0lBSWxCLFVBQVcsVUFBVTtJQUNyQix1QkFBd0IsdUJBQXVCO0lBQy9DLFNBQVUsU0FBUztJQUNuQixvQkFBcUIsb0JBQW9CO0lBQ3pDLGtCQUFtQixrQkFBa0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBGaWxlTW9kZWwgfSBmcm9tIFwiQGdyb3VwZG9jcy5leGFtcGxlcy5hbmd1bGFyL2NvbW1vbi1jb21wb25lbnRzXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgSW5kZXhlZEZpbGVNb2RlbCBleHRlbmRzIEZpbGVNb2RlbCB7XHJcbiAgZG9jdW1lbnRTdGF0dXM6IHN0cmluZztcclxuICBwYXNzd29yZDogc3RyaW5nO1xyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgU2VhcmNoUmVzdWx0IHtcclxuICBmb3VuZEZpbGVzOiBTZWFyY2hSZXN1bHRJdGVtTW9kZWxbXTtcclxuICBmaWxlUGF0aDogc3RyaW5nO1xyXG4gIHNlYXJjaER1cmF0aW9uOiBzdHJpbmc7XHJcbiAgdG90YWxGaWxlczogbnVtYmVyO1xyXG4gIHRvdGFsT2NjdXJlbmNlczogbnVtYmVyO1xyXG4gIGluZGV4ZWRGaWxlczogbnVtYmVyO1xyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgU2VhcmNoUmVzdWx0SXRlbU1vZGVsIGltcGxlbWVudHMgRmlsZU1vZGVsIHtcclxuICBkaXJlY3Rvcnk6IGJvb2xlYW47XHJcbiAgb2NjdXJyZW5jZXM6IG51bWJlcjtcclxuICBzaXplOiBudW1iZXI7XHJcbiAgZ3VpZDogc3RyaW5nO1xyXG4gIG5hbWU6IHN0cmluZztcclxuICBpc0RpcmVjdG9yeTogYm9vbGVhbjtcclxuICBzaG93UGhyYXNlczogYm9vbGVhbjtcclxuICBmb3VuZFBocmFzZXM6IHN0cmluZztcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIEV4dGVuZGVkRmlsZU1vZGVsIGltcGxlbWVudHMgRmlsZU1vZGVsIHtcclxuICBndWlkOiBzdHJpbmc7XHJcbiAgZGlyZWN0b3J5OiBib29sZWFuO1xyXG4gIGlzRGlyZWN0b3J5OiBib29sZWFuO1xyXG4gIHNpemU6IG51bWJlcjtcclxuICBuYW1lOiBzdHJpbmc7XHJcbiAgc2VsZWN0ZWQ6IGJvb2xlYW47XHJcbn1cclxuXHJcbmV4cG9ydCBlbnVtIEZpbGVJbmRleGluZ1N0YXR1cyB7XHJcbiAgSW5kZXhpbmcgPSBcIkluZGV4aW5nXCIsXHJcbiAgU3VjY2Vzc2Z1bGx5UHJvY2Vzc2VkID0gXCJTdWNjZXNzZnVsbHlQcm9jZXNzZWRcIixcclxuICBTa2lwcGVkID0gXCJTa2lwcGVkXCIsXHJcbiAgUHJvY2Vzc2VkV2l0aEVycm9yID0gXCJQcm9jZXNzZWRXaXRoRXJyb3JcIixcclxuICBQYXNzd29yZFJlcXVpcmVkID0gXCJQYXNzd29yZFJlcXVpcmVkXCJcclxufSJdfQ==