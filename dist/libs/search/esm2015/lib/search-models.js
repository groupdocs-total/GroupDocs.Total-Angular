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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VhcmNoLW1vZGVscy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bncm91cGRvY3MuZXhhbXBsZXMuYW5ndWxhci9zZWFyY2gvIiwic291cmNlcyI6WyJsaWIvc2VhcmNoLW1vZGVscy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLCtDQUErQyxDQUFDO0FBRTFFLE1BQU0sT0FBTyxnQkFBaUIsU0FBUSxTQUFTO0NBRzlDOzs7SUFGQywwQ0FBdUI7O0lBQ3ZCLG9DQUFpQjs7QUFHbkIsTUFBTSxPQUFPLFlBQVk7Q0FPeEI7OztJQU5DLGtDQUFvQzs7SUFDcEMsZ0NBQWlCOztJQUNqQixzQ0FBdUI7O0lBQ3ZCLGtDQUFtQjs7SUFDbkIsdUNBQXdCOztJQUN4QixvQ0FBcUI7O0FBR3ZCLE1BQU0sT0FBTyxxQkFBcUI7Q0FTakM7OztJQVJDLDBDQUFtQjs7SUFDbkIsNENBQW9COztJQUNwQixxQ0FBYTs7SUFDYixxQ0FBYTs7SUFDYixxQ0FBYTs7SUFDYiw0Q0FBcUI7O0lBQ3JCLDRDQUFxQjs7SUFDckIsNkNBQXFCOztBQUd2QixNQUFNLE9BQU8saUJBQWlCO0NBTzdCOzs7SUFOQyxpQ0FBYTs7SUFDYixzQ0FBbUI7O0lBQ25CLHdDQUFxQjs7SUFDckIsaUNBQWE7O0lBQ2IsaUNBQWE7O0lBQ2IscUNBQWtCOzs7O0lBSWxCLFVBQVcsVUFBVTtJQUNyQix1QkFBd0IsdUJBQXVCO0lBQy9DLFNBQVUsU0FBUztJQUNuQixvQkFBcUIsb0JBQW9CO0lBQ3pDLGtCQUFtQixrQkFBa0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBGaWxlTW9kZWwgfSBmcm9tIFwiQGdyb3VwZG9jcy5leGFtcGxlcy5hbmd1bGFyL2NvbW1vbi1jb21wb25lbnRzXCI7XG5cbmV4cG9ydCBjbGFzcyBJbmRleGVkRmlsZU1vZGVsIGV4dGVuZHMgRmlsZU1vZGVsIHtcbiAgZG9jdW1lbnRTdGF0dXM6IHN0cmluZztcbiAgcGFzc3dvcmQ6IHN0cmluZztcbn1cblxuZXhwb3J0IGNsYXNzIFNlYXJjaFJlc3VsdCB7XG4gIGZvdW5kRmlsZXM6IFNlYXJjaFJlc3VsdEl0ZW1Nb2RlbFtdO1xuICBmaWxlUGF0aDogc3RyaW5nO1xuICBzZWFyY2hEdXJhdGlvbjogc3RyaW5nO1xuICB0b3RhbEZpbGVzOiBudW1iZXI7XG4gIHRvdGFsT2NjdXJlbmNlczogbnVtYmVyO1xuICBpbmRleGVkRmlsZXM6IG51bWJlcjtcbn1cblxuZXhwb3J0IGNsYXNzIFNlYXJjaFJlc3VsdEl0ZW1Nb2RlbCBpbXBsZW1lbnRzIEZpbGVNb2RlbCB7XG4gIGRpcmVjdG9yeTogYm9vbGVhbjtcbiAgb2NjdXJyZW5jZXM6IG51bWJlcjtcbiAgc2l6ZTogbnVtYmVyO1xuICBndWlkOiBzdHJpbmc7XG4gIG5hbWU6IHN0cmluZztcbiAgaXNEaXJlY3Rvcnk6IGJvb2xlYW47XG4gIHNob3dQaHJhc2VzOiBib29sZWFuO1xuICBmb3VuZFBocmFzZXM6IHN0cmluZztcbn1cblxuZXhwb3J0IGNsYXNzIEV4dGVuZGVkRmlsZU1vZGVsIGltcGxlbWVudHMgRmlsZU1vZGVsIHtcbiAgZ3VpZDogc3RyaW5nO1xuICBkaXJlY3Rvcnk6IGJvb2xlYW47XG4gIGlzRGlyZWN0b3J5OiBib29sZWFuO1xuICBzaXplOiBudW1iZXI7XG4gIG5hbWU6IHN0cmluZztcbiAgc2VsZWN0ZWQ6IGJvb2xlYW47XG59XG5cbmV4cG9ydCBlbnVtIEZpbGVJbmRleGluZ1N0YXR1cyB7XG4gIEluZGV4aW5nID0gXCJJbmRleGluZ1wiLFxuICBTdWNjZXNzZnVsbHlQcm9jZXNzZWQgPSBcIlN1Y2Nlc3NmdWxseVByb2Nlc3NlZFwiLFxuICBTa2lwcGVkID0gXCJTa2lwcGVkXCIsXG4gIFByb2Nlc3NlZFdpdGhFcnJvciA9IFwiUHJvY2Vzc2VkV2l0aEVycm9yXCIsXG4gIFBhc3N3b3JkUmVxdWlyZWQgPSBcIlBhc3N3b3JkUmVxdWlyZWRcIlxufSJdfQ==