import { Subject } from "rxjs";
var SearchService = /** @class */ (function () {
    function SearchService() {
        this._observer = new Subject();
        this._textChange = this._observer.asObservable();
        this._observerCurrent = new Subject();
        this._currentChange = this._observerCurrent.asObservable();
        this._observerTotal = new Subject();
        this._totalChange = this._observerTotal.asObservable();
    }
    Object.defineProperty(SearchService.prototype, "textChange", {
        get: function () {
            return this._textChange;
        },
        enumerable: true,
        configurable: true
    });
    SearchService.prototype.setText = function (text) {
        this._observer.next(text);
    };
    Object.defineProperty(SearchService.prototype, "currentChange", {
        get: function () {
            return this._currentChange;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SearchService.prototype, "totalChange", {
        get: function () {
            return this._totalChange;
        },
        enumerable: true,
        configurable: true
    });
    SearchService.prototype.setCurrent = function (current) {
        this._observerCurrent.next(current);
    };
    SearchService.prototype.setTotal = function (total) {
        this._observerTotal.next(total);
    };
    return SearchService;
}());
export { SearchService };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VhcmNoLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ3JvdXBkb2NzLmV4YW1wbGVzLmFuZ3VsYXIvY29tbW9uLWNvbXBvbmVudHMvIiwic291cmNlcyI6WyJsaWIvc2VhcmNoLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFhLE9BQU8sRUFBQyxNQUFNLE1BQU0sQ0FBQztBQUV6QztJQVVFO1FBVFEsY0FBUyxHQUFvQixJQUFJLE9BQU8sRUFBRSxDQUFDO1FBQ2xDLGdCQUFXLEdBQXVCLElBQUksQ0FBQyxTQUFTLENBQUMsWUFBWSxFQUFFLENBQUM7UUFFekUscUJBQWdCLEdBQW9CLElBQUksT0FBTyxFQUFFLENBQUM7UUFDekMsbUJBQWMsR0FBdUIsSUFBSSxDQUFDLGdCQUFnQixDQUFDLFlBQVksRUFBRSxDQUFDO1FBRW5GLG1CQUFjLEdBQW9CLElBQUksT0FBTyxFQUFFLENBQUM7UUFDdkMsaUJBQVksR0FBdUIsSUFBSSxDQUFDLGNBQWMsQ0FBQyxZQUFZLEVBQUUsQ0FBQztJQUd2RixDQUFDO0lBRUQsc0JBQUkscUNBQVU7YUFBZDtZQUNFLE9BQU8sSUFBSSxDQUFDLFdBQVcsQ0FBQztRQUMxQixDQUFDOzs7T0FBQTtJQUVELCtCQUFPLEdBQVAsVUFBUSxJQUFZO1FBQ2xCLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQzVCLENBQUM7SUFFRCxzQkFBSSx3Q0FBYTthQUFqQjtZQUNFLE9BQU8sSUFBSSxDQUFDLGNBQWMsQ0FBQztRQUM3QixDQUFDOzs7T0FBQTtJQUVELHNCQUFJLHNDQUFXO2FBQWY7WUFDRSxPQUFPLElBQUksQ0FBQyxZQUFZLENBQUM7UUFDM0IsQ0FBQzs7O09BQUE7SUFFRCxrQ0FBVSxHQUFWLFVBQVcsT0FBZTtRQUN4QixJQUFJLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQ3RDLENBQUM7SUFFRCxnQ0FBUSxHQUFSLFVBQVMsS0FBYTtRQUNwQixJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUNsQyxDQUFDO0lBQ0gsb0JBQUM7QUFBRCxDQUFDLEFBcENELElBb0NDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtPYnNlcnZhYmxlLCBTdWJqZWN0fSBmcm9tIFwicnhqc1wiO1xuXG5leHBvcnQgY2xhc3MgU2VhcmNoU2VydmljZSB7XG4gIHByaXZhdGUgX29ic2VydmVyOiBTdWJqZWN0PHN0cmluZz4gPSBuZXcgU3ViamVjdCgpO1xuICBwcml2YXRlIHJlYWRvbmx5IF90ZXh0Q2hhbmdlOiBPYnNlcnZhYmxlPHN0cmluZz4gPSB0aGlzLl9vYnNlcnZlci5hc09ic2VydmFibGUoKTtcblxuICBwcml2YXRlIF9vYnNlcnZlckN1cnJlbnQ6IFN1YmplY3Q8bnVtYmVyPiA9IG5ldyBTdWJqZWN0KCk7XG4gIHByaXZhdGUgcmVhZG9ubHkgX2N1cnJlbnRDaGFuZ2U6IE9ic2VydmFibGU8bnVtYmVyPiA9IHRoaXMuX29ic2VydmVyQ3VycmVudC5hc09ic2VydmFibGUoKTtcblxuICBwcml2YXRlIF9vYnNlcnZlclRvdGFsOiBTdWJqZWN0PG51bWJlcj4gPSBuZXcgU3ViamVjdCgpO1xuICBwcml2YXRlIHJlYWRvbmx5IF90b3RhbENoYW5nZTogT2JzZXJ2YWJsZTxudW1iZXI+ID0gdGhpcy5fb2JzZXJ2ZXJUb3RhbC5hc09ic2VydmFibGUoKTtcblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgfVxuXG4gIGdldCB0ZXh0Q2hhbmdlKCk6IE9ic2VydmFibGU8c3RyaW5nPiB7XG4gICAgcmV0dXJuIHRoaXMuX3RleHRDaGFuZ2U7XG4gIH1cblxuICBzZXRUZXh0KHRleHQ6IHN0cmluZykge1xuICAgIHRoaXMuX29ic2VydmVyLm5leHQodGV4dCk7XG4gIH1cblxuICBnZXQgY3VycmVudENoYW5nZSgpOiBPYnNlcnZhYmxlPG51bWJlcj4ge1xuICAgIHJldHVybiB0aGlzLl9jdXJyZW50Q2hhbmdlO1xuICB9XG5cbiAgZ2V0IHRvdGFsQ2hhbmdlKCk6IE9ic2VydmFibGU8bnVtYmVyPiB7XG4gICAgcmV0dXJuIHRoaXMuX3RvdGFsQ2hhbmdlO1xuICB9XG5cbiAgc2V0Q3VycmVudChjdXJyZW50OiBudW1iZXIpIHtcbiAgICB0aGlzLl9vYnNlcnZlckN1cnJlbnQubmV4dChjdXJyZW50KTtcbiAgfVxuXG4gIHNldFRvdGFsKHRvdGFsOiBudW1iZXIpIHtcbiAgICB0aGlzLl9vYnNlcnZlclRvdGFsLm5leHQodG90YWwpO1xuICB9XG59XG4iXX0=