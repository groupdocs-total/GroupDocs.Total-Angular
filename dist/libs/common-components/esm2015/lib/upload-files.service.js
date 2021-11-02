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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXBsb2FkLWZpbGVzLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ3JvdXBkb2NzLmV4YW1wbGVzLmFuZ3VsYXIvY29tbW9uLWNvbXBvbmVudHMvIiwic291cmNlcyI6WyJsaWIvdXBsb2FkLWZpbGVzLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBQyxVQUFVLEVBQVcsTUFBTSxNQUFNLENBQUM7QUFFMUMsTUFBTSxPQUFPLGtCQUFrQjtJQUk3QjtRQUNFLElBQUksQ0FBQyxjQUFjLEdBQUcsSUFBSSxVQUFVOzs7O1FBQUMsUUFBUSxDQUFDLEVBQUUsQ0FDOUMsSUFBSSxDQUFDLFNBQVMsR0FBRyxRQUFRLEVBQUMsQ0FBQztJQUMvQixDQUFDOzs7O0lBRUQsSUFBSSxhQUFhO1FBQ2YsT0FBTyxJQUFJLENBQUMsY0FBYyxDQUFDO0lBQzdCLENBQUM7Ozs7O0lBRUQsZUFBZSxDQUFDLFNBQW1CO1FBQ2pDLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO0lBQ2pDLENBQUM7Q0FDRjs7Ozs7O0lBZkMsNENBQTZDOzs7OztJQUM3Qyx1Q0FBc0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge09ic2VydmFibGUsIE9ic2VydmVyfSBmcm9tIFwicnhqc1wiO1xuXG5leHBvcnQgY2xhc3MgVXBsb2FkRmlsZXNTZXJ2aWNlIHtcbiAgcHJpdmF0ZSBfdXBsb2Fkc0NoYW5nZTogT2JzZXJ2YWJsZTxGaWxlTGlzdD47XG4gIHByaXZhdGUgX29ic2VydmVyOiBPYnNlcnZlcjxGaWxlTGlzdD47XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5fdXBsb2Fkc0NoYW5nZSA9IG5ldyBPYnNlcnZhYmxlKG9ic2VydmVyID0+XG4gICAgICB0aGlzLl9vYnNlcnZlciA9IG9ic2VydmVyKTtcbiAgfVxuXG4gIGdldCB1cGxvYWRzQ2hhbmdlKCk6IE9ic2VydmFibGU8RmlsZUxpc3Q+IHtcbiAgICByZXR1cm4gdGhpcy5fdXBsb2Fkc0NoYW5nZTtcbiAgfVxuXG4gIGNoYW5nZUZpbGVzTGlzdChmaWxlc0xpc3Q6IEZpbGVMaXN0KSB7XG4gICAgdGhpcy5fb2JzZXJ2ZXIubmV4dChmaWxlc0xpc3QpO1xuICB9XG59XG4iXX0=