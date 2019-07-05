import { Observable } from "rxjs";
var RenderPrintService = /** @class */ (function () {
    function RenderPrintService() {
        var _this = this;
        this._render = new Observable(function (observer) {
            return _this._observer = observer;
        });
        this._renderBlob = new Observable(function (observer) {
            return _this._observerBlob = observer;
        });
    }
    Object.defineProperty(RenderPrintService.prototype, "renderPrint", {
        get: function () {
            return this._render;
        },
        enumerable: true,
        configurable: true
    });
    RenderPrintService.prototype.changePages = function (pages) {
        this._observer.next(pages);
    };
    Object.defineProperty(RenderPrintService.prototype, "renderPrintBlob", {
        get: function () {
            return this._renderBlob;
        },
        enumerable: true,
        configurable: true
    });
    RenderPrintService.prototype.changeBlob = function (file) {
        this._observerBlob.next(file);
    };
    return RenderPrintService;
}());
export { RenderPrintService };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVuZGVyLXByaW50LnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ3JvdXBkb2NzLmV4YW1wbGVzLmFuZ3VsYXIvY29tbW9uLWNvbXBvbmVudHMvIiwic291cmNlcyI6WyJsaWIvcmVuZGVyLXByaW50LnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFDLFVBQVUsRUFBVyxNQUFNLE1BQU0sQ0FBQztBQUcxQztJQU1FO1FBQUEsaUJBS0M7UUFKQyxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksVUFBVSxDQUFDLFVBQUEsUUFBUTtZQUNwQyxPQUFBLEtBQUksQ0FBQyxTQUFTLEdBQUcsUUFBUTtRQUF6QixDQUF5QixDQUFDLENBQUM7UUFDN0IsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLFVBQVUsQ0FBQyxVQUFBLFFBQVE7WUFDeEMsT0FBQSxLQUFJLENBQUMsYUFBYSxHQUFHLFFBQVE7UUFBN0IsQ0FBNkIsQ0FBQyxDQUFDO0lBQ25DLENBQUM7SUFFRCxzQkFBSSwyQ0FBVzthQUFmO1lBQ0UsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDO1FBQ3RCLENBQUM7OztPQUFBO0lBRUQsd0NBQVcsR0FBWCxVQUFZLEtBQWtCO1FBQzVCLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQzdCLENBQUM7SUFFRCxzQkFBSSwrQ0FBZTthQUFuQjtZQUNFLE9BQU8sSUFBSSxDQUFDLFdBQVcsQ0FBQztRQUMxQixDQUFDOzs7T0FBQTtJQUVELHVDQUFVLEdBQVYsVUFBVyxJQUFVO1FBQ25CLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ2hDLENBQUM7SUFDSCx5QkFBQztBQUFELENBQUMsQUE1QkQsSUE0QkMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge09ic2VydmFibGUsIE9ic2VydmVyfSBmcm9tIFwicnhqc1wiO1xuaW1wb3J0IHtQYWdlTW9kZWx9IGZyb20gXCIuL2ZpbGUuc2VydmljZVwiO1xuXG5leHBvcnQgY2xhc3MgUmVuZGVyUHJpbnRTZXJ2aWNlIHtcbiAgcHJpdmF0ZSBfcmVuZGVyOiBPYnNlcnZhYmxlPFBhZ2VNb2RlbFtdPjtcbiAgcHJpdmF0ZSBfb2JzZXJ2ZXI6IE9ic2VydmVyPFBhZ2VNb2RlbFtdPjtcbiAgcHJpdmF0ZSBfcmVuZGVyQmxvYjogT2JzZXJ2YWJsZTxCbG9iPjtcbiAgcHJpdmF0ZSBfb2JzZXJ2ZXJCbG9iOiBPYnNlcnZlcjxCbG9iPjtcblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLl9yZW5kZXIgPSBuZXcgT2JzZXJ2YWJsZShvYnNlcnZlciA9PlxuICAgICAgdGhpcy5fb2JzZXJ2ZXIgPSBvYnNlcnZlcik7XG4gICAgdGhpcy5fcmVuZGVyQmxvYiA9IG5ldyBPYnNlcnZhYmxlKG9ic2VydmVyID0+XG4gICAgICB0aGlzLl9vYnNlcnZlckJsb2IgPSBvYnNlcnZlcik7XG4gIH1cblxuICBnZXQgcmVuZGVyUHJpbnQoKTogT2JzZXJ2YWJsZTxQYWdlTW9kZWxbXT4ge1xuICAgIHJldHVybiB0aGlzLl9yZW5kZXI7XG4gIH1cblxuICBjaGFuZ2VQYWdlcyhwYWdlczogUGFnZU1vZGVsW10pIHtcbiAgICB0aGlzLl9vYnNlcnZlci5uZXh0KHBhZ2VzKTtcbiAgfVxuXG4gIGdldCByZW5kZXJQcmludEJsb2IoKTogT2JzZXJ2YWJsZTxCbG9iPiB7XG4gICAgcmV0dXJuIHRoaXMuX3JlbmRlckJsb2I7XG4gIH1cblxuICBjaGFuZ2VCbG9iKGZpbGU6IEJsb2IpIHtcbiAgICB0aGlzLl9vYnNlcnZlckJsb2IubmV4dChmaWxlKTtcbiAgfVxufVxuIl19