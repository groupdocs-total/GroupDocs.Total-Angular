/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Observable } from "rxjs";
export class UploadFilesService {
    constructor() {
        this._uploadsChange = new Observable((/**
         * @param {?} observer
         * @return {?}
         */
        observer => this._observer = observer));
    }
    /**
     * @return {?}
     */
    get uploadsChange() {
        return this._uploadsChange;
    }
    /**
     * @param {?} filesList
     * @return {?}
     */
    changeFilesList(filesList) {
        this._observer.next(filesList);
    }
}
if (false) {
    /**
     * @type {?}
     * @private
     */
    UploadFilesService.prototype._uploadsChange;
    /**
     * @type {?}
     * @private
     */
    UploadFilesService.prototype._observer;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXBsb2FkLWZpbGVzLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ3JvdXBkb2NzLmV4YW1wbGVzLmFuZ3VsYXIvY29tbW9uLWNvbXBvbmVudHMvIiwic291cmNlcyI6WyJsaWIvdXBsb2FkLWZpbGVzLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBQyxVQUFVLEVBQVcsTUFBTSxNQUFNLENBQUM7QUFFMUMsTUFBTSxPQUFPLGtCQUFrQjtJQUk3QjtRQUNFLElBQUksQ0FBQyxjQUFjLEdBQUcsSUFBSSxVQUFVOzs7O1FBQUMsUUFBUSxDQUFDLEVBQUUsQ0FDOUMsSUFBSSxDQUFDLFNBQVMsR0FBRyxRQUFRLEVBQUMsQ0FBQztJQUMvQixDQUFDOzs7O0lBRUQsSUFBSSxhQUFhO1FBQ2YsT0FBTyxJQUFJLENBQUMsY0FBYyxDQUFDO0lBQzdCLENBQUM7Ozs7O0lBRUQsZUFBZSxDQUFDLFNBQW1CO1FBQ2pDLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO0lBQ2pDLENBQUM7Q0FDRjs7Ozs7O0lBZkMsNENBQTZDOzs7OztJQUM3Qyx1Q0FBc0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge09ic2VydmFibGUsIE9ic2VydmVyfSBmcm9tIFwicnhqc1wiO1xyXG5cclxuZXhwb3J0IGNsYXNzIFVwbG9hZEZpbGVzU2VydmljZSB7XHJcbiAgcHJpdmF0ZSBfdXBsb2Fkc0NoYW5nZTogT2JzZXJ2YWJsZTxGaWxlTGlzdD47XHJcbiAgcHJpdmF0ZSBfb2JzZXJ2ZXI6IE9ic2VydmVyPEZpbGVMaXN0PjtcclxuXHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgICB0aGlzLl91cGxvYWRzQ2hhbmdlID0gbmV3IE9ic2VydmFibGUob2JzZXJ2ZXIgPT5cclxuICAgICAgdGhpcy5fb2JzZXJ2ZXIgPSBvYnNlcnZlcik7XHJcbiAgfVxyXG5cclxuICBnZXQgdXBsb2Fkc0NoYW5nZSgpOiBPYnNlcnZhYmxlPEZpbGVMaXN0PiB7XHJcbiAgICByZXR1cm4gdGhpcy5fdXBsb2Fkc0NoYW5nZTtcclxuICB9XHJcblxyXG4gIGNoYW5nZUZpbGVzTGlzdChmaWxlc0xpc3Q6IEZpbGVMaXN0KSB7XHJcbiAgICB0aGlzLl9vYnNlcnZlci5uZXh0KGZpbGVzTGlzdCk7XHJcbiAgfVxyXG59XHJcbiJdfQ==