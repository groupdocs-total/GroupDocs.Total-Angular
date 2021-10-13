/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { FileModel } from "@groupdocs.examples.angular/common-components";
var IndexedFileModel = /** @class */ (function (_super) {
    tslib_1.__extends(IndexedFileModel, _super);
    function IndexedFileModel() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return IndexedFileModel;
}(FileModel));
export { IndexedFileModel };
if (false) {
    /** @type {?} */
    IndexedFileModel.prototype.documentStatus;
    /** @type {?} */
    IndexedFileModel.prototype.password;
}
var SearchResult = /** @class */ (function () {
    function SearchResult() {
    }
    return SearchResult;
}());
export { SearchResult };
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
var SearchResultItemModel = /** @class */ (function () {
    function SearchResultItemModel() {
    }
    return SearchResultItemModel;
}());
export { SearchResultItemModel };
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
var ExtendedFileModel = /** @class */ (function () {
    function ExtendedFileModel() {
    }
    return ExtendedFileModel;
}());
export { ExtendedFileModel };
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
var FileIndexingStatus = {
    Indexing: "Indexing",
    SuccessfullyProcessed: "SuccessfullyProcessed",
    Skipped: "Skipped",
    ProcessedWithError: "ProcessedWithError",
    PasswordRequired: "PasswordRequired",
};
export { FileIndexingStatus };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VhcmNoLW1vZGVscy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bncm91cGRvY3MuZXhhbXBsZXMuYW5ndWxhci9zZWFyY2gvIiwic291cmNlcyI6WyJsaWIvc2VhcmNoLW1vZGVscy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSwrQ0FBK0MsQ0FBQztBQUUxRTtJQUFzQyw0Q0FBUztJQUEvQzs7SUFHQSxDQUFDO0lBQUQsdUJBQUM7QUFBRCxDQUFDLEFBSEQsQ0FBc0MsU0FBUyxHQUc5Qzs7OztJQUZDLDBDQUF1Qjs7SUFDdkIsb0NBQWlCOztBQUduQjtJQUFBO0lBT0EsQ0FBQztJQUFELG1CQUFDO0FBQUQsQ0FBQyxBQVBELElBT0M7Ozs7SUFOQyxrQ0FBb0M7O0lBQ3BDLGdDQUFpQjs7SUFDakIsc0NBQXVCOztJQUN2QixrQ0FBbUI7O0lBQ25CLHVDQUF3Qjs7SUFDeEIsb0NBQXFCOztBQUd2QjtJQUFBO0lBU0EsQ0FBQztJQUFELDRCQUFDO0FBQUQsQ0FBQyxBQVRELElBU0M7Ozs7SUFSQywwQ0FBbUI7O0lBQ25CLDRDQUFvQjs7SUFDcEIscUNBQWE7O0lBQ2IscUNBQWE7O0lBQ2IscUNBQWE7O0lBQ2IsNENBQXFCOztJQUNyQiw0Q0FBcUI7O0lBQ3JCLDZDQUFxQjs7QUFHdkI7SUFBQTtJQU9BLENBQUM7SUFBRCx3QkFBQztBQUFELENBQUMsQUFQRCxJQU9DOzs7O0lBTkMsaUNBQWE7O0lBQ2Isc0NBQW1COztJQUNuQix3Q0FBcUI7O0lBQ3JCLGlDQUFhOztJQUNiLGlDQUFhOztJQUNiLHFDQUFrQjs7OztJQUlsQixVQUFXLFVBQVU7SUFDckIsdUJBQXdCLHVCQUF1QjtJQUMvQyxTQUFVLFNBQVM7SUFDbkIsb0JBQXFCLG9CQUFvQjtJQUN6QyxrQkFBbUIsa0JBQWtCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRmlsZU1vZGVsIH0gZnJvbSBcIkBncm91cGRvY3MuZXhhbXBsZXMuYW5ndWxhci9jb21tb24tY29tcG9uZW50c1wiO1xyXG5cclxuZXhwb3J0IGNsYXNzIEluZGV4ZWRGaWxlTW9kZWwgZXh0ZW5kcyBGaWxlTW9kZWwge1xyXG4gIGRvY3VtZW50U3RhdHVzOiBzdHJpbmc7XHJcbiAgcGFzc3dvcmQ6IHN0cmluZztcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIFNlYXJjaFJlc3VsdCB7XHJcbiAgZm91bmRGaWxlczogU2VhcmNoUmVzdWx0SXRlbU1vZGVsW107XHJcbiAgZmlsZVBhdGg6IHN0cmluZztcclxuICBzZWFyY2hEdXJhdGlvbjogc3RyaW5nO1xyXG4gIHRvdGFsRmlsZXM6IG51bWJlcjtcclxuICB0b3RhbE9jY3VyZW5jZXM6IG51bWJlcjtcclxuICBpbmRleGVkRmlsZXM6IG51bWJlcjtcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIFNlYXJjaFJlc3VsdEl0ZW1Nb2RlbCBpbXBsZW1lbnRzIEZpbGVNb2RlbCB7XHJcbiAgZGlyZWN0b3J5OiBib29sZWFuO1xyXG4gIG9jY3VycmVuY2VzOiBudW1iZXI7XHJcbiAgc2l6ZTogbnVtYmVyO1xyXG4gIGd1aWQ6IHN0cmluZztcclxuICBuYW1lOiBzdHJpbmc7XHJcbiAgaXNEaXJlY3Rvcnk6IGJvb2xlYW47XHJcbiAgc2hvd1BocmFzZXM6IGJvb2xlYW47XHJcbiAgZm91bmRQaHJhc2VzOiBzdHJpbmc7XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBFeHRlbmRlZEZpbGVNb2RlbCBpbXBsZW1lbnRzIEZpbGVNb2RlbCB7XHJcbiAgZ3VpZDogc3RyaW5nO1xyXG4gIGRpcmVjdG9yeTogYm9vbGVhbjtcclxuICBpc0RpcmVjdG9yeTogYm9vbGVhbjtcclxuICBzaXplOiBudW1iZXI7XHJcbiAgbmFtZTogc3RyaW5nO1xyXG4gIHNlbGVjdGVkOiBib29sZWFuO1xyXG59XHJcblxyXG5leHBvcnQgZW51bSBGaWxlSW5kZXhpbmdTdGF0dXMge1xyXG4gIEluZGV4aW5nID0gXCJJbmRleGluZ1wiLFxyXG4gIFN1Y2Nlc3NmdWxseVByb2Nlc3NlZCA9IFwiU3VjY2Vzc2Z1bGx5UHJvY2Vzc2VkXCIsXHJcbiAgU2tpcHBlZCA9IFwiU2tpcHBlZFwiLFxyXG4gIFByb2Nlc3NlZFdpdGhFcnJvciA9IFwiUHJvY2Vzc2VkV2l0aEVycm9yXCIsXHJcbiAgUGFzc3dvcmRSZXF1aXJlZCA9IFwiUGFzc3dvcmRSZXF1aXJlZFwiXHJcbn0iXX0=