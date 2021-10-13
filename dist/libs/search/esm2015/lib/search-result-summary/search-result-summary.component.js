/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input } from '@angular/core';
import { SearchResult } from '../search-models';
export class SearchResultSummaryComponent {
    constructor() {
    }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
    /**
     * @return {?}
     */
    getTotalOccurrencesMessage() {
        /** @type {?} */
        const message = "Nothing found";
        if (this.searchResult) {
            if (this.searchResult.totalOccurences === 0) {
                return message;
            }
            return "Found <b>" + this.searchResult.totalOccurences + "</b> occurrences <b>" + this.searchResult.totalFiles + "</b> files";
        }
        return message;
    }
    /**
     * @return {?}
     */
    getIndexedFilesMessage() {
        if (this.searchResult) {
            return "<b>" + this.searchResult.indexedFiles + "</b> files indexed";
        }
    }
    /**
     * @return {?}
     */
    getSearchDuration() {
        if (this.searchResult) {
            return this.searchResult.searchDuration;
        }
    }
}
SearchResultSummaryComponent.decorators = [
    { type: Component, args: [{
                selector: 'gd-search-result-summary',
                template: "<div id=\"gd-search-result-summary\">\r\n  <div class=\"gd-search-result-summary-status\">\r\n    <fa-icon [icon]=\"['fas','search']\" [class]=\"'ng-fa-icon icon'\"></fa-icon>\r\n    <div class=\"gd-total-occurrences\" [innerHTML]=\"getTotalOccurrencesMessage()\"></div>\r\n    <fa-icon [icon]=\"['fas','clock']\" [class]=\"'ng-fa-icon icon'\"></fa-icon>\r\n    <div class=\"gd-search-duration\">{{getSearchDuration()}} sec</div>\r\n    <div class=\"gd-indexed-files\" [innerHTML]=\"getIndexedFilesMessage()\"></div>\r\n  </div>\r\n  <div *ngIf=\"searchResult?.totalOccurences > 0\" class=\"gd-search-result-summary-header\">\r\n    <div>File</div>\r\n    <div>Occurrences</div>\r\n    <div>Size</div>\r\n  </div>\r\n  <div *ngIf=\"searchResult?.foundFiles\" class=\"gd-search-result-summary-body\">\r\n    <div *ngFor=\"let item of searchResult.foundFiles\">\r\n        <gd-search-result-item [item]=\"item\"></gd-search-result-item>\r\n    </div>\r\n  </div>\r\n</div>",
                styles: ["#gd-search-result-summary{-webkit-box-orient:vertical;-webkit-box-direction:normal;flex-direction:column;height:100%;background-color:#e7e7e7;top:120px;position:absolute;width:100%}.gd-search-result-summary-header{display:-webkit-box;display:flex;font-size:13px;text-transform:uppercase;color:#6e6e6e;width:100%;height:60px;background-color:#f4f4f4;font-weight:700;-webkit-box-align:center;align-items:center}.gd-search-result-summary-status{display:-webkit-box;display:flex;font-size:12px;color:#fff;width:100%;height:30px;background-color:#25c2d4;-webkit-box-align:center;align-items:center;padding-left:17px}.gd-total-occurrences{padding-left:8px;padding-right:17px}.gd-search-duration{padding-left:8px}.gd-indexed-files{right:18px;position:absolute}.gd-search-result-summary-header div:nth-child(1){width:253px;text-align:left;display:-webkit-box;display:flex;padding-left:17px}.gd-search-result-summary-header div:nth-child(2){text-align:left;display:-webkit-box;display:flex}.gd-search-result-summary-header div:nth-child(3){width:30px;position:fixed;right:111px;text-align:left}.gd-search-result-summary-body{overflow-y:scroll;height:calc(100% - 210px)}.gd-search-result-last-placeholder{margin:0 52px}@media (max-width:1037px){.gd-indexed-files,.gd-search-result-header,.gd-search-result-summary-header div:nth-child(3){display:none}.gd-search-result-summary-header div:nth-child(2){position:absolute;right:18px}}"]
            }] }
];
/** @nocollapse */
SearchResultSummaryComponent.ctorParameters = () => [];
SearchResultSummaryComponent.propDecorators = {
    searchResult: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    SearchResultSummaryComponent.prototype.searchResult;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VhcmNoLXJlc3VsdC1zdW1tYXJ5LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bncm91cGRvY3MuZXhhbXBsZXMuYW5ndWxhci9zZWFyY2gvIiwic291cmNlcyI6WyJsaWIvc2VhcmNoLXJlc3VsdC1zdW1tYXJ5L3NlYXJjaC1yZXN1bHQtc3VtbWFyeS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQWdCLEtBQUssRUFBa0IsTUFBTSxlQUFlLENBQUM7QUFDL0UsT0FBTyxFQUF5QixZQUFZLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQztBQVF2RSxNQUFNLE9BQU8sNEJBQTRCO0lBR3ZDO0lBQ0EsQ0FBQzs7OztJQUVELFFBQVE7SUFDUixDQUFDOzs7O0lBRUQsMEJBQTBCOztjQUNsQixPQUFPLEdBQUcsZUFBZTtRQUUvQixJQUFJLElBQUksQ0FBQyxZQUFZLEVBQUU7WUFDckIsSUFBSSxJQUFJLENBQUMsWUFBWSxDQUFDLGVBQWUsS0FBSyxDQUFDLEVBQzNDO2dCQUNFLE9BQU8sT0FBTyxDQUFDO2FBQ2hCO1lBRUQsT0FBTyxXQUFXLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxlQUFlLEdBQUcsc0JBQXNCLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxVQUFVLEdBQUcsWUFBWSxDQUFDO1NBQy9IO1FBRUQsT0FBTyxPQUFPLENBQUM7SUFDakIsQ0FBQzs7OztJQUVELHNCQUFzQjtRQUNwQixJQUFJLElBQUksQ0FBQyxZQUFZLEVBQUU7WUFDckIsT0FBTyxLQUFLLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxZQUFZLEdBQUcsb0JBQW9CLENBQUM7U0FDdEU7SUFDSCxDQUFDOzs7O0lBRUQsaUJBQWlCO1FBQ2YsSUFBSSxJQUFJLENBQUMsWUFBWSxFQUFFO1lBQ3JCLE9BQU8sSUFBSSxDQUFDLFlBQVksQ0FBQyxjQUFjLENBQUM7U0FDekM7SUFDSCxDQUFDOzs7WUF4Q0YsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSwwQkFBMEI7Z0JBQ3BDLHM5QkFBcUQ7O2FBRXREOzs7OzsyQkFHRSxLQUFLOzs7O0lBQU4sb0RBQW9DIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBFdmVudEVtaXR0ZXIsIElucHV0LCBPdXRwdXQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBTZWFyY2hSZXN1bHRJdGVtTW9kZWwsIFNlYXJjaFJlc3VsdCB9IGZyb20gJy4uL3NlYXJjaC1tb2RlbHMnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdnZC1zZWFyY2gtcmVzdWx0LXN1bW1hcnknLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9zZWFyY2gtcmVzdWx0LXN1bW1hcnkuY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlVXJsczogWycuL3NlYXJjaC1yZXN1bHQtc3VtbWFyeS5jb21wb25lbnQubGVzcyddXHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgU2VhcmNoUmVzdWx0U3VtbWFyeUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcbiAgQElucHV0KCkgc2VhcmNoUmVzdWx0OiBTZWFyY2hSZXN1bHQ7XHJcblxyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gIH1cclxuICBcclxuICBuZ09uSW5pdCgpOiB2b2lkIHtcclxuICB9XHJcblxyXG4gIGdldFRvdGFsT2NjdXJyZW5jZXNNZXNzYWdlKCkge1xyXG4gICAgY29uc3QgbWVzc2FnZSA9IFwiTm90aGluZyBmb3VuZFwiO1xyXG5cclxuICAgIGlmICh0aGlzLnNlYXJjaFJlc3VsdCkge1xyXG4gICAgICBpZiAodGhpcy5zZWFyY2hSZXN1bHQudG90YWxPY2N1cmVuY2VzID09PSAwKVxyXG4gICAgICB7XHJcbiAgICAgICAgcmV0dXJuIG1lc3NhZ2U7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHJldHVybiBcIkZvdW5kIDxiPlwiICsgdGhpcy5zZWFyY2hSZXN1bHQudG90YWxPY2N1cmVuY2VzICsgXCI8L2I+IG9jY3VycmVuY2VzIDxiPlwiICsgdGhpcy5zZWFyY2hSZXN1bHQudG90YWxGaWxlcyArIFwiPC9iPiBmaWxlc1wiO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBtZXNzYWdlO1xyXG4gIH1cclxuXHJcbiAgZ2V0SW5kZXhlZEZpbGVzTWVzc2FnZSgpIHtcclxuICAgIGlmICh0aGlzLnNlYXJjaFJlc3VsdCkge1xyXG4gICAgICByZXR1cm4gXCI8Yj5cIiArIHRoaXMuc2VhcmNoUmVzdWx0LmluZGV4ZWRGaWxlcyArIFwiPC9iPiBmaWxlcyBpbmRleGVkXCI7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBnZXRTZWFyY2hEdXJhdGlvbigpIHtcclxuICAgIGlmICh0aGlzLnNlYXJjaFJlc3VsdCkge1xyXG4gICAgICByZXR1cm4gdGhpcy5zZWFyY2hSZXN1bHQuc2VhcmNoRHVyYXRpb247XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiJdfQ==