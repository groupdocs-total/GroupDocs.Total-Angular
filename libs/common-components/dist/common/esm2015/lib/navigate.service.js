import * as tslib_1 from "tslib";
import { Observable } from "rxjs";
import { PagePreloadService } from "./page-preload.service";
import { Injectable } from "@angular/core";
import * as i0 from "@angular/core";
import * as i1 from "./page-preload.service";
let NavigateService = class NavigateService {
    constructor(_pagePreloadService) {
        this._pagePreloadService = _pagePreloadService;
        this._currentPage = 0;
        this._countPages = 0;
        this._navigate = new Observable(observer => this._observer = observer);
    }
    get navigate() {
        return this._navigate;
    }
    get countPages() {
        return this._countPages;
    }
    set countPages(value) {
        this._countPages = value;
    }
    get currentPage() {
        return this._currentPage;
    }
    set currentPage(value) {
        this._currentPage = value;
    }
    nextPage() {
        if (this._currentPage < this._countPages) {
            this._currentPage++;
            this.navigateTo(this._currentPage);
        }
    }
    prevPage() {
        if (this._currentPage > 1) {
            this._currentPage--;
            this.navigateTo(this._currentPage);
        }
    }
    toLastPage() {
        this._currentPage = this._countPages;
        this.navigateTo(this._currentPage);
    }
    toFirstPage() {
        this._currentPage = 1;
        this.navigateTo(this._currentPage);
    }
    navigateTo(page) {
        this.currentPage = page;
        this._pagePreloadService.changeLastPageInView(page);
        this._observer.next(page);
    }
};
NavigateService.ngInjectableDef = i0.defineInjectable({ factory: function NavigateService_Factory() { return new NavigateService(i0.inject(i1.PagePreloadService)); }, token: NavigateService, providedIn: "root" });
NavigateService = tslib_1.__decorate([
    Injectable({
        providedIn: 'root'
    }),
    tslib_1.__metadata("design:paramtypes", [PagePreloadService])
], NavigateService);
export { NavigateService };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmF2aWdhdGUuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bncm91cGRvY3MuZXhhbXBsZXMuYW5ndWxhci9jb21tb24tY29tcG9uZW50cy8iLCJzb3VyY2VzIjpbImxpYi9uYXZpZ2F0ZS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUMsVUFBVSxFQUFXLE1BQU0sTUFBTSxDQUFDO0FBQzFDLE9BQU8sRUFBQyxrQkFBa0IsRUFBQyxNQUFNLHdCQUF3QixDQUFDO0FBQzFELE9BQU8sRUFBQyxVQUFVLEVBQUMsTUFBTSxlQUFlLENBQUM7OztBQUt6QyxJQUFhLGVBQWUsR0FBNUIsTUFBYSxlQUFlO0lBTTFCLFlBQW9CLG1CQUF1QztRQUF2Qyx3QkFBbUIsR0FBbkIsbUJBQW1CLENBQW9CO1FBTG5ELGlCQUFZLEdBQUcsQ0FBQyxDQUFDO1FBQ2pCLGdCQUFXLEdBQUcsQ0FBQyxDQUFDO1FBS3RCLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxVQUFVLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FDekMsSUFBSSxDQUFDLFNBQVMsR0FBRyxRQUFRLENBQUMsQ0FBQztJQUMvQixDQUFDO0lBRUQsSUFBSSxRQUFRO1FBQ1YsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDO0lBQ3hCLENBQUM7SUFFRCxJQUFJLFVBQVU7UUFDWixPQUFPLElBQUksQ0FBQyxXQUFXLENBQUM7SUFDMUIsQ0FBQztJQUVELElBQUksVUFBVSxDQUFDLEtBQWE7UUFDMUIsSUFBSSxDQUFDLFdBQVcsR0FBRyxLQUFLLENBQUM7SUFDM0IsQ0FBQztJQUVELElBQUksV0FBVztRQUNiLE9BQU8sSUFBSSxDQUFDLFlBQVksQ0FBQztJQUMzQixDQUFDO0lBRUQsSUFBSSxXQUFXLENBQUMsS0FBYTtRQUMzQixJQUFJLENBQUMsWUFBWSxHQUFHLEtBQUssQ0FBQztJQUM1QixDQUFDO0lBRUQsUUFBUTtRQUNOLElBQUksSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUMsV0FBVyxFQUFFO1lBQ3hDLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQztZQUNwQixJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQztTQUNwQztJQUNILENBQUM7SUFFRCxRQUFRO1FBQ04sSUFBSSxJQUFJLENBQUMsWUFBWSxHQUFHLENBQUMsRUFBRTtZQUN6QixJQUFJLENBQUMsWUFBWSxFQUFFLENBQUM7WUFDcEIsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUM7U0FDcEM7SUFDSCxDQUFDO0lBRUQsVUFBVTtRQUNSLElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQztRQUNyQyxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQztJQUNyQyxDQUFDO0lBRUQsV0FBVztRQUNULElBQUksQ0FBQyxZQUFZLEdBQUcsQ0FBQyxDQUFDO1FBQ3RCLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDO0lBQ3JDLENBQUM7SUFFRCxVQUFVLENBQUMsSUFBWTtRQUNyQixJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQztRQUN4QixJQUFJLENBQUMsbUJBQW1CLENBQUMsb0JBQW9CLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDcEQsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDNUIsQ0FBQztDQUNGLENBQUE7O0FBNURZLGVBQWU7SUFIM0IsVUFBVSxDQUFDO1FBQ1YsVUFBVSxFQUFFLE1BQU07S0FDbkIsQ0FBQzs2Q0FPeUMsa0JBQWtCO0dBTmhELGVBQWUsQ0E0RDNCO1NBNURZLGVBQWUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge09ic2VydmFibGUsIE9ic2VydmVyfSBmcm9tIFwicnhqc1wiO1xuaW1wb3J0IHtQYWdlUHJlbG9hZFNlcnZpY2V9IGZyb20gXCIuL3BhZ2UtcHJlbG9hZC5zZXJ2aWNlXCI7XG5pbXBvcnQge0luamVjdGFibGV9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIE5hdmlnYXRlU2VydmljZSB7XG4gIHByaXZhdGUgX2N1cnJlbnRQYWdlID0gMDtcbiAgcHJpdmF0ZSBfY291bnRQYWdlcyA9IDA7XG4gIHByaXZhdGUgcmVhZG9ubHkgX25hdmlnYXRlOiBPYnNlcnZhYmxlPG51bWJlcj47XG4gIHByaXZhdGUgX29ic2VydmVyOiBPYnNlcnZlcjxudW1iZXI+O1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgX3BhZ2VQcmVsb2FkU2VydmljZTogUGFnZVByZWxvYWRTZXJ2aWNlKSB7XG4gICAgdGhpcy5fbmF2aWdhdGUgPSBuZXcgT2JzZXJ2YWJsZShvYnNlcnZlciA9PlxuICAgICAgdGhpcy5fb2JzZXJ2ZXIgPSBvYnNlcnZlcik7XG4gIH1cblxuICBnZXQgbmF2aWdhdGUoKTogT2JzZXJ2YWJsZTxudW1iZXI+IHtcbiAgICByZXR1cm4gdGhpcy5fbmF2aWdhdGU7XG4gIH1cblxuICBnZXQgY291bnRQYWdlcygpOiBudW1iZXIge1xuICAgIHJldHVybiB0aGlzLl9jb3VudFBhZ2VzO1xuICB9XG5cbiAgc2V0IGNvdW50UGFnZXModmFsdWU6IG51bWJlcikge1xuICAgIHRoaXMuX2NvdW50UGFnZXMgPSB2YWx1ZTtcbiAgfVxuXG4gIGdldCBjdXJyZW50UGFnZSgpOiBudW1iZXIge1xuICAgIHJldHVybiB0aGlzLl9jdXJyZW50UGFnZTtcbiAgfVxuXG4gIHNldCBjdXJyZW50UGFnZSh2YWx1ZTogbnVtYmVyKSB7XG4gICAgdGhpcy5fY3VycmVudFBhZ2UgPSB2YWx1ZTtcbiAgfVxuXG4gIG5leHRQYWdlKCkge1xuICAgIGlmICh0aGlzLl9jdXJyZW50UGFnZSA8IHRoaXMuX2NvdW50UGFnZXMpIHtcbiAgICAgIHRoaXMuX2N1cnJlbnRQYWdlKys7XG4gICAgICB0aGlzLm5hdmlnYXRlVG8odGhpcy5fY3VycmVudFBhZ2UpO1xuICAgIH1cbiAgfVxuXG4gIHByZXZQYWdlKCkge1xuICAgIGlmICh0aGlzLl9jdXJyZW50UGFnZSA+IDEpIHtcbiAgICAgIHRoaXMuX2N1cnJlbnRQYWdlLS07XG4gICAgICB0aGlzLm5hdmlnYXRlVG8odGhpcy5fY3VycmVudFBhZ2UpO1xuICAgIH1cbiAgfVxuXG4gIHRvTGFzdFBhZ2UoKSB7XG4gICAgdGhpcy5fY3VycmVudFBhZ2UgPSB0aGlzLl9jb3VudFBhZ2VzO1xuICAgIHRoaXMubmF2aWdhdGVUbyh0aGlzLl9jdXJyZW50UGFnZSk7XG4gIH1cblxuICB0b0ZpcnN0UGFnZSgpIHtcbiAgICB0aGlzLl9jdXJyZW50UGFnZSA9IDE7XG4gICAgdGhpcy5uYXZpZ2F0ZVRvKHRoaXMuX2N1cnJlbnRQYWdlKTtcbiAgfVxuXG4gIG5hdmlnYXRlVG8ocGFnZTogbnVtYmVyKSB7XG4gICAgdGhpcy5jdXJyZW50UGFnZSA9IHBhZ2U7XG4gICAgdGhpcy5fcGFnZVByZWxvYWRTZXJ2aWNlLmNoYW5nZUxhc3RQYWdlSW5WaWV3KHBhZ2UpO1xuICAgIHRoaXMuX29ic2VydmVyLm5leHQocGFnZSk7XG4gIH1cbn1cbiJdfQ==