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
                template: "<div id=\"gd-search-result-summary\">\n  <div class=\"gd-search-result-summary-status\">\n    <fa-icon [icon]=\"['fas','search']\" [class]=\"'ng-fa-icon icon'\"></fa-icon>\n    <div class=\"gd-total-occurrences\" [innerHTML]=\"getTotalOccurrencesMessage()\"></div>\n    <fa-icon [icon]=\"['fas','clock']\" [class]=\"'ng-fa-icon icon'\"></fa-icon>\n    <div class=\"gd-search-duration\">{{getSearchDuration()}} sec</div>\n    <div class=\"gd-indexed-files\" [innerHTML]=\"getIndexedFilesMessage()\"></div>\n  </div>\n  <div *ngIf=\"searchResult?.totalOccurences > 0\" class=\"gd-search-result-summary-header\">\n    <div>File</div>\n    <div>Occurrences</div>\n    <div>Size</div>\n  </div>\n  <div *ngIf=\"searchResult?.foundFiles\" class=\"gd-search-result-summary-body\">\n    <div *ngFor=\"let item of searchResult.foundFiles\">\n        <gd-search-result-item [item]=\"item\"></gd-search-result-item>\n    </div>\n  </div>\n</div>",
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VhcmNoLXJlc3VsdC1zdW1tYXJ5LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bncm91cGRvY3MuZXhhbXBsZXMuYW5ndWxhci9zZWFyY2gvIiwic291cmNlcyI6WyJsaWIvc2VhcmNoLXJlc3VsdC1zdW1tYXJ5L3NlYXJjaC1yZXN1bHQtc3VtbWFyeS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQWdCLEtBQUssRUFBa0IsTUFBTSxlQUFlLENBQUM7QUFDL0UsT0FBTyxFQUF5QixZQUFZLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQztBQVF2RSxNQUFNLE9BQU8sNEJBQTRCO0lBR3ZDO0lBQ0EsQ0FBQzs7OztJQUVELFFBQVE7SUFDUixDQUFDOzs7O0lBRUQsMEJBQTBCOztjQUNsQixPQUFPLEdBQUcsZUFBZTtRQUUvQixJQUFJLElBQUksQ0FBQyxZQUFZLEVBQUU7WUFDckIsSUFBSSxJQUFJLENBQUMsWUFBWSxDQUFDLGVBQWUsS0FBSyxDQUFDLEVBQzNDO2dCQUNFLE9BQU8sT0FBTyxDQUFDO2FBQ2hCO1lBRUQsT0FBTyxXQUFXLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxlQUFlLEdBQUcsc0JBQXNCLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxVQUFVLEdBQUcsWUFBWSxDQUFDO1NBQy9IO1FBRUQsT0FBTyxPQUFPLENBQUM7SUFDakIsQ0FBQzs7OztJQUVELHNCQUFzQjtRQUNwQixJQUFJLElBQUksQ0FBQyxZQUFZLEVBQUU7WUFDckIsT0FBTyxLQUFLLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxZQUFZLEdBQUcsb0JBQW9CLENBQUM7U0FDdEU7SUFDSCxDQUFDOzs7O0lBRUQsaUJBQWlCO1FBQ2YsSUFBSSxJQUFJLENBQUMsWUFBWSxFQUFFO1lBQ3JCLE9BQU8sSUFBSSxDQUFDLFlBQVksQ0FBQyxjQUFjLENBQUM7U0FDekM7SUFDSCxDQUFDOzs7WUF4Q0YsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSwwQkFBMEI7Z0JBQ3BDLGs3QkFBcUQ7O2FBRXREOzs7OzsyQkFHRSxLQUFLOzs7O0lBQU4sb0RBQW9DIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBFdmVudEVtaXR0ZXIsIElucHV0LCBPdXRwdXQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgU2VhcmNoUmVzdWx0SXRlbU1vZGVsLCBTZWFyY2hSZXN1bHQgfSBmcm9tICcuLi9zZWFyY2gtbW9kZWxzJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnZ2Qtc2VhcmNoLXJlc3VsdC1zdW1tYXJ5JyxcbiAgdGVtcGxhdGVVcmw6ICcuL3NlYXJjaC1yZXN1bHQtc3VtbWFyeS5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL3NlYXJjaC1yZXN1bHQtc3VtbWFyeS5jb21wb25lbnQubGVzcyddXG59KVxuXG5leHBvcnQgY2xhc3MgU2VhcmNoUmVzdWx0U3VtbWFyeUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIEBJbnB1dCgpIHNlYXJjaFJlc3VsdDogU2VhcmNoUmVzdWx0O1xuXG4gIGNvbnN0cnVjdG9yKCkge1xuICB9XG4gIFxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgfVxuXG4gIGdldFRvdGFsT2NjdXJyZW5jZXNNZXNzYWdlKCkge1xuICAgIGNvbnN0IG1lc3NhZ2UgPSBcIk5vdGhpbmcgZm91bmRcIjtcblxuICAgIGlmICh0aGlzLnNlYXJjaFJlc3VsdCkge1xuICAgICAgaWYgKHRoaXMuc2VhcmNoUmVzdWx0LnRvdGFsT2NjdXJlbmNlcyA9PT0gMClcbiAgICAgIHtcbiAgICAgICAgcmV0dXJuIG1lc3NhZ2U7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBcIkZvdW5kIDxiPlwiICsgdGhpcy5zZWFyY2hSZXN1bHQudG90YWxPY2N1cmVuY2VzICsgXCI8L2I+IG9jY3VycmVuY2VzIDxiPlwiICsgdGhpcy5zZWFyY2hSZXN1bHQudG90YWxGaWxlcyArIFwiPC9iPiBmaWxlc1wiO1xuICAgIH1cblxuICAgIHJldHVybiBtZXNzYWdlO1xuICB9XG5cbiAgZ2V0SW5kZXhlZEZpbGVzTWVzc2FnZSgpIHtcbiAgICBpZiAodGhpcy5zZWFyY2hSZXN1bHQpIHtcbiAgICAgIHJldHVybiBcIjxiPlwiICsgdGhpcy5zZWFyY2hSZXN1bHQuaW5kZXhlZEZpbGVzICsgXCI8L2I+IGZpbGVzIGluZGV4ZWRcIjtcbiAgICB9XG4gIH1cblxuICBnZXRTZWFyY2hEdXJhdGlvbigpIHtcbiAgICBpZiAodGhpcy5zZWFyY2hSZXN1bHQpIHtcbiAgICAgIHJldHVybiB0aGlzLnNlYXJjaFJlc3VsdC5zZWFyY2hEdXJhdGlvbjtcbiAgICB9XG4gIH1cbn1cbiJdfQ==