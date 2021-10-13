/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { DraggableSignature } from "./signature-models";
export class SignaturesHolderService {
    constructor() {
        this.map = new Map();
    }
    /**
     * @param {?} key
     * @return {?}
     */
    add(key) {
        this.map.set(key, []);
    }
    /**
     * @param {?} key
     * @param {?} id
     * @return {?}
     */
    addId(key, id) {
        if (!this.map.has(key)) {
            this.add(key);
        }
        /** @type {?} */
        const item = this.map.get(key);
        item.push(id);
    }
    /**
     * @param {?} key
     * @return {?}
     */
    delete(key) {
        this.map.delete(key);
    }
    /**
     * @param {?} key
     * @return {?}
     */
    has(key) {
        return this.map.has(key);
    }
    /**
     * @return {?}
     */
    clear() {
        this.map.clear();
    }
    /**
     * @return {?}
     */
    values() {
        return this.map.values();
    }
    /**
     * @param {?} key
     * @return {?}
     */
    get(key) {
        return this.map.get(key);
    }
    /**
     * @param {?} key
     * @param {?} id
     * @return {?}
     */
    remove(key, id) {
        /** @type {?} */
        const items = this.map.get(key);
        this.delete(key);
        if (items.length !== 1) {
            this.add(key);
            for (const elem of items) {
                if (elem !== id) {
                    this.map.get(key).push(elem);
                }
            }
        }
    }
    /**
     * @param {?} imageGuid
     * @param {?} id
     * @return {?}
     */
    changeTemp(imageGuid, id) {
        this.remove(DraggableSignature.TEMP, id);
        this.addId(imageGuid, id);
    }
}
if (false) {
    /**
     * @type {?}
     * @private
     */
    SignaturesHolderService.prototype.map;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2lnbmF0dXJlcy1ob2xkZXIuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bncm91cGRvY3MuZXhhbXBsZXMuYW5ndWxhci9zaWduYXR1cmUvIiwic291cmNlcyI6WyJsaWIvc2lnbmF0dXJlcy1ob2xkZXIuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFDLGtCQUFrQixFQUFDLE1BQU0sb0JBQW9CLENBQUM7QUFFdEQsTUFBTSxPQUFPLHVCQUF1QjtJQUlsQztRQUZRLFFBQUcsR0FBRyxJQUFJLEdBQUcsRUFBb0IsQ0FBQztJQUcxQyxDQUFDOzs7OztJQUVELEdBQUcsQ0FBQyxHQUFXO1FBQ2IsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxFQUFFLEVBQUUsQ0FBQyxDQUFDO0lBQ3hCLENBQUM7Ozs7OztJQUVELEtBQUssQ0FBQyxHQUFXLEVBQUUsRUFBVTtRQUMzQixJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLEVBQUU7WUFDdEIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQztTQUNmOztjQUNLLElBQUksR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUM7UUFDOUIsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQztJQUNoQixDQUFDOzs7OztJQUVELE1BQU0sQ0FBQyxHQUFXO1FBQ2hCLElBQUksQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQ3ZCLENBQUM7Ozs7O0lBRUQsR0FBRyxDQUFDLEdBQVc7UUFDYixPQUFPLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQzNCLENBQUM7Ozs7SUFFRCxLQUFLO1FBQ0gsSUFBSSxDQUFDLEdBQUcsQ0FBQyxLQUFLLEVBQUUsQ0FBQztJQUNuQixDQUFDOzs7O0lBRUQsTUFBTTtRQUNKLE9BQU8sSUFBSSxDQUFDLEdBQUcsQ0FBQyxNQUFNLEVBQUUsQ0FBQztJQUMzQixDQUFDOzs7OztJQUVELEdBQUcsQ0FBQyxHQUFXO1FBQ2IsT0FBTyxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUMzQixDQUFDOzs7Ozs7SUFFRCxNQUFNLENBQUMsR0FBVyxFQUFFLEVBQVU7O2NBQ3RCLEtBQUssR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUM7UUFDL0IsSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNqQixJQUFJLEtBQUssQ0FBQyxNQUFNLEtBQUssQ0FBQyxFQUFFO1lBQ3RCLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7WUFDZCxLQUFLLE1BQU0sSUFBSSxJQUFJLEtBQUssRUFBRTtnQkFDeEIsSUFBSSxJQUFJLEtBQUssRUFBRSxFQUFFO29CQUNmLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztpQkFDOUI7YUFDRjtTQUNGO0lBQ0gsQ0FBQzs7Ozs7O0lBRUQsVUFBVSxDQUFDLFNBQWlCLEVBQUUsRUFBVTtRQUN0QyxJQUFJLENBQUMsTUFBTSxDQUFDLGtCQUFrQixDQUFDLElBQUksRUFBRSxFQUFFLENBQUMsQ0FBQztRQUN6QyxJQUFJLENBQUMsS0FBSyxDQUFDLFNBQVMsRUFBRSxFQUFFLENBQUMsQ0FBQztJQUM1QixDQUFDO0NBQ0Y7Ozs7OztJQXREQyxzQ0FBMEMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0RyYWdnYWJsZVNpZ25hdHVyZX0gZnJvbSBcIi4vc2lnbmF0dXJlLW1vZGVsc1wiO1xyXG5cclxuZXhwb3J0IGNsYXNzIFNpZ25hdHVyZXNIb2xkZXJTZXJ2aWNlIHtcclxuXHJcbiAgcHJpdmF0ZSBtYXAgPSBuZXcgTWFwPHN0cmluZywgbnVtYmVyW10+KCk7XHJcblxyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gIH1cclxuXHJcbiAgYWRkKGtleTogc3RyaW5nKSB7XHJcbiAgICB0aGlzLm1hcC5zZXQoa2V5LCBbXSk7XHJcbiAgfVxyXG5cclxuICBhZGRJZChrZXk6IHN0cmluZywgaWQ6IG51bWJlcikge1xyXG4gICAgaWYgKCF0aGlzLm1hcC5oYXMoa2V5KSkge1xyXG4gICAgICB0aGlzLmFkZChrZXkpO1xyXG4gICAgfVxyXG4gICAgY29uc3QgaXRlbSA9IHRoaXMubWFwLmdldChrZXkpO1xyXG4gICAgaXRlbS5wdXNoKGlkKTtcclxuICB9XHJcblxyXG4gIGRlbGV0ZShrZXk6IHN0cmluZykge1xyXG4gICAgdGhpcy5tYXAuZGVsZXRlKGtleSk7XHJcbiAgfVxyXG5cclxuICBoYXMoa2V5OiBzdHJpbmcpIHtcclxuICAgIHJldHVybiB0aGlzLm1hcC5oYXMoa2V5KTtcclxuICB9XHJcblxyXG4gIGNsZWFyKCkge1xyXG4gICAgdGhpcy5tYXAuY2xlYXIoKTtcclxuICB9XHJcblxyXG4gIHZhbHVlcygpIHtcclxuICAgIHJldHVybiB0aGlzLm1hcC52YWx1ZXMoKTtcclxuICB9XHJcblxyXG4gIGdldChrZXk6IHN0cmluZykge1xyXG4gICAgcmV0dXJuIHRoaXMubWFwLmdldChrZXkpO1xyXG4gIH1cclxuXHJcbiAgcmVtb3ZlKGtleTogc3RyaW5nLCBpZDogbnVtYmVyKSB7XHJcbiAgICBjb25zdCBpdGVtcyA9IHRoaXMubWFwLmdldChrZXkpO1xyXG4gICAgdGhpcy5kZWxldGUoa2V5KTtcclxuICAgIGlmIChpdGVtcy5sZW5ndGggIT09IDEpIHtcclxuICAgICAgdGhpcy5hZGQoa2V5KTtcclxuICAgICAgZm9yIChjb25zdCBlbGVtIG9mIGl0ZW1zKSB7XHJcbiAgICAgICAgaWYgKGVsZW0gIT09IGlkKSB7XHJcbiAgICAgICAgICB0aGlzLm1hcC5nZXQoa2V5KS5wdXNoKGVsZW0pO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgY2hhbmdlVGVtcChpbWFnZUd1aWQ6IHN0cmluZywgaWQ6IG51bWJlcikge1xyXG4gICAgdGhpcy5yZW1vdmUoRHJhZ2dhYmxlU2lnbmF0dXJlLlRFTVAsIGlkKTtcclxuICAgIHRoaXMuYWRkSWQoaW1hZ2VHdWlkLCBpZCk7XHJcbiAgfVxyXG59XHJcbiJdfQ==