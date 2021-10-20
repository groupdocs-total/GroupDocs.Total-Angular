/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { DraggableSignature } from "./signature-models";
var SignaturesHolderService = /** @class */ (function () {
    function SignaturesHolderService() {
        this.map = new Map();
    }
    /**
     * @param {?} key
     * @return {?}
     */
    SignaturesHolderService.prototype.add = /**
     * @param {?} key
     * @return {?}
     */
    function (key) {
        this.map.set(key, []);
    };
    /**
     * @param {?} key
     * @param {?} id
     * @return {?}
     */
    SignaturesHolderService.prototype.addId = /**
     * @param {?} key
     * @param {?} id
     * @return {?}
     */
    function (key, id) {
        if (!this.map.has(key)) {
            this.add(key);
        }
        /** @type {?} */
        var item = this.map.get(key);
        item.push(id);
    };
    /**
     * @param {?} key
     * @return {?}
     */
    SignaturesHolderService.prototype.delete = /**
     * @param {?} key
     * @return {?}
     */
    function (key) {
        this.map.delete(key);
    };
    /**
     * @param {?} key
     * @return {?}
     */
    SignaturesHolderService.prototype.has = /**
     * @param {?} key
     * @return {?}
     */
    function (key) {
        return this.map.has(key);
    };
    /**
     * @return {?}
     */
    SignaturesHolderService.prototype.clear = /**
     * @return {?}
     */
    function () {
        this.map.clear();
    };
    /**
     * @return {?}
     */
    SignaturesHolderService.prototype.values = /**
     * @return {?}
     */
    function () {
        return this.map.values();
    };
    /**
     * @param {?} key
     * @return {?}
     */
    SignaturesHolderService.prototype.get = /**
     * @param {?} key
     * @return {?}
     */
    function (key) {
        return this.map.get(key);
    };
    /**
     * @param {?} key
     * @param {?} id
     * @return {?}
     */
    SignaturesHolderService.prototype.remove = /**
     * @param {?} key
     * @param {?} id
     * @return {?}
     */
    function (key, id) {
        var e_1, _a;
        /** @type {?} */
        var items = this.map.get(key);
        this.delete(key);
        if (items.length !== 1) {
            this.add(key);
            try {
                for (var items_1 = tslib_1.__values(items), items_1_1 = items_1.next(); !items_1_1.done; items_1_1 = items_1.next()) {
                    var elem = items_1_1.value;
                    if (elem !== id) {
                        this.map.get(key).push(elem);
                    }
                }
            }
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (items_1_1 && !items_1_1.done && (_a = items_1.return)) _a.call(items_1);
                }
                finally { if (e_1) throw e_1.error; }
            }
        }
    };
    /**
     * @param {?} imageGuid
     * @param {?} id
     * @return {?}
     */
    SignaturesHolderService.prototype.changeTemp = /**
     * @param {?} imageGuid
     * @param {?} id
     * @return {?}
     */
    function (imageGuid, id) {
        this.remove(DraggableSignature.TEMP, id);
        this.addId(imageGuid, id);
    };
    return SignaturesHolderService;
}());
export { SignaturesHolderService };
if (false) {
    /**
     * @type {?}
     * @private
     */
    SignaturesHolderService.prototype.map;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2lnbmF0dXJlcy1ob2xkZXIuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bncm91cGRvY3MuZXhhbXBsZXMuYW5ndWxhci9zaWduYXR1cmUvIiwic291cmNlcyI6WyJsaWIvc2lnbmF0dXJlcy1ob2xkZXIuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBQyxrQkFBa0IsRUFBQyxNQUFNLG9CQUFvQixDQUFDO0FBRXREO0lBSUU7UUFGUSxRQUFHLEdBQUcsSUFBSSxHQUFHLEVBQW9CLENBQUM7SUFHMUMsQ0FBQzs7Ozs7SUFFRCxxQ0FBRzs7OztJQUFILFVBQUksR0FBVztRQUNiLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsRUFBRSxFQUFFLENBQUMsQ0FBQztJQUN4QixDQUFDOzs7Ozs7SUFFRCx1Q0FBSzs7Ozs7SUFBTCxVQUFNLEdBQVcsRUFBRSxFQUFVO1FBQzNCLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsRUFBRTtZQUN0QixJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1NBQ2Y7O1lBQ0ssSUFBSSxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQztRQUM5QixJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDO0lBQ2hCLENBQUM7Ozs7O0lBRUQsd0NBQU07Ozs7SUFBTixVQUFPLEdBQVc7UUFDaEIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDdkIsQ0FBQzs7Ozs7SUFFRCxxQ0FBRzs7OztJQUFILFVBQUksR0FBVztRQUNiLE9BQU8sSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDM0IsQ0FBQzs7OztJQUVELHVDQUFLOzs7SUFBTDtRQUNFLElBQUksQ0FBQyxHQUFHLENBQUMsS0FBSyxFQUFFLENBQUM7SUFDbkIsQ0FBQzs7OztJQUVELHdDQUFNOzs7SUFBTjtRQUNFLE9BQU8sSUFBSSxDQUFDLEdBQUcsQ0FBQyxNQUFNLEVBQUUsQ0FBQztJQUMzQixDQUFDOzs7OztJQUVELHFDQUFHOzs7O0lBQUgsVUFBSSxHQUFXO1FBQ2IsT0FBTyxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUMzQixDQUFDOzs7Ozs7SUFFRCx3Q0FBTTs7Ozs7SUFBTixVQUFPLEdBQVcsRUFBRSxFQUFVOzs7WUFDdEIsS0FBSyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQztRQUMvQixJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ2pCLElBQUksS0FBSyxDQUFDLE1BQU0sS0FBSyxDQUFDLEVBQUU7WUFDdEIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQzs7Z0JBQ2QsS0FBbUIsSUFBQSxVQUFBLGlCQUFBLEtBQUssQ0FBQSw0QkFBQSwrQ0FBRTtvQkFBckIsSUFBTSxJQUFJLGtCQUFBO29CQUNiLElBQUksSUFBSSxLQUFLLEVBQUUsRUFBRTt3QkFDZixJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7cUJBQzlCO2lCQUNGOzs7Ozs7Ozs7U0FDRjtJQUNILENBQUM7Ozs7OztJQUVELDRDQUFVOzs7OztJQUFWLFVBQVcsU0FBaUIsRUFBRSxFQUFVO1FBQ3RDLElBQUksQ0FBQyxNQUFNLENBQUMsa0JBQWtCLENBQUMsSUFBSSxFQUFFLEVBQUUsQ0FBQyxDQUFDO1FBQ3pDLElBQUksQ0FBQyxLQUFLLENBQUMsU0FBUyxFQUFFLEVBQUUsQ0FBQyxDQUFDO0lBQzVCLENBQUM7SUFDSCw4QkFBQztBQUFELENBQUMsQUF4REQsSUF3REM7Ozs7Ozs7SUF0REMsc0NBQTBDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtEcmFnZ2FibGVTaWduYXR1cmV9IGZyb20gXCIuL3NpZ25hdHVyZS1tb2RlbHNcIjtcblxuZXhwb3J0IGNsYXNzIFNpZ25hdHVyZXNIb2xkZXJTZXJ2aWNlIHtcblxuICBwcml2YXRlIG1hcCA9IG5ldyBNYXA8c3RyaW5nLCBudW1iZXJbXT4oKTtcblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgfVxuXG4gIGFkZChrZXk6IHN0cmluZykge1xuICAgIHRoaXMubWFwLnNldChrZXksIFtdKTtcbiAgfVxuXG4gIGFkZElkKGtleTogc3RyaW5nLCBpZDogbnVtYmVyKSB7XG4gICAgaWYgKCF0aGlzLm1hcC5oYXMoa2V5KSkge1xuICAgICAgdGhpcy5hZGQoa2V5KTtcbiAgICB9XG4gICAgY29uc3QgaXRlbSA9IHRoaXMubWFwLmdldChrZXkpO1xuICAgIGl0ZW0ucHVzaChpZCk7XG4gIH1cblxuICBkZWxldGUoa2V5OiBzdHJpbmcpIHtcbiAgICB0aGlzLm1hcC5kZWxldGUoa2V5KTtcbiAgfVxuXG4gIGhhcyhrZXk6IHN0cmluZykge1xuICAgIHJldHVybiB0aGlzLm1hcC5oYXMoa2V5KTtcbiAgfVxuXG4gIGNsZWFyKCkge1xuICAgIHRoaXMubWFwLmNsZWFyKCk7XG4gIH1cblxuICB2YWx1ZXMoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwLnZhbHVlcygpO1xuICB9XG5cbiAgZ2V0KGtleTogc3RyaW5nKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwLmdldChrZXkpO1xuICB9XG5cbiAgcmVtb3ZlKGtleTogc3RyaW5nLCBpZDogbnVtYmVyKSB7XG4gICAgY29uc3QgaXRlbXMgPSB0aGlzLm1hcC5nZXQoa2V5KTtcbiAgICB0aGlzLmRlbGV0ZShrZXkpO1xuICAgIGlmIChpdGVtcy5sZW5ndGggIT09IDEpIHtcbiAgICAgIHRoaXMuYWRkKGtleSk7XG4gICAgICBmb3IgKGNvbnN0IGVsZW0gb2YgaXRlbXMpIHtcbiAgICAgICAgaWYgKGVsZW0gIT09IGlkKSB7XG4gICAgICAgICAgdGhpcy5tYXAuZ2V0KGtleSkucHVzaChlbGVtKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGNoYW5nZVRlbXAoaW1hZ2VHdWlkOiBzdHJpbmcsIGlkOiBudW1iZXIpIHtcbiAgICB0aGlzLnJlbW92ZShEcmFnZ2FibGVTaWduYXR1cmUuVEVNUCwgaWQpO1xuICAgIHRoaXMuYWRkSWQoaW1hZ2VHdWlkLCBpZCk7XG4gIH1cbn1cbiJdfQ==