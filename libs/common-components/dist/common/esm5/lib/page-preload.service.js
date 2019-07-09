import { Observable } from "rxjs";
var PagePreloadService = /** @class */ (function () {
    function PagePreloadService() {
        var _this = this;
        this._checkPreload = new Observable(function (observer) {
            return _this._observer = observer;
        });
    }
    Object.defineProperty(PagePreloadService.prototype, "checkPreload", {
        get: function () {
            return this._checkPreload;
        },
        enumerable: true,
        configurable: true
    });
    PagePreloadService.prototype.changeLastPageInView = function (page) {
        if (this._observer) {
            this._observer.next(page);
        }
    };
    return PagePreloadService;
}());
export { PagePreloadService };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZS1wcmVsb2FkLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ3JvdXBkb2NzLmV4YW1wbGVzLmFuZ3VsYXIvY29tbW9uLWNvbXBvbmVudHMvIiwic291cmNlcyI6WyJsaWIvcGFnZS1wcmVsb2FkLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFDLFVBQVUsRUFBVyxNQUFNLE1BQU0sQ0FBQztBQUUxQztJQUlFO1FBQUEsaUJBR0M7UUFGQyxJQUFJLENBQUMsYUFBYSxHQUFHLElBQUksVUFBVSxDQUFDLFVBQUEsUUFBUTtZQUMxQyxPQUFBLEtBQUksQ0FBQyxTQUFTLEdBQUcsUUFBUTtRQUF6QixDQUF5QixDQUFDLENBQUM7SUFDL0IsQ0FBQztJQUVELHNCQUFJLDRDQUFZO2FBQWhCO1lBQ0UsT0FBTyxJQUFJLENBQUMsYUFBYSxDQUFDO1FBQzVCLENBQUM7OztPQUFBO0lBRUQsaURBQW9CLEdBQXBCLFVBQXFCLElBQVk7UUFDL0IsSUFBRyxJQUFJLENBQUMsU0FBUyxFQUFFO1lBQ2pCLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1NBQzNCO0lBQ0gsQ0FBQztJQUNILHlCQUFDO0FBQUQsQ0FBQyxBQWxCRCxJQWtCQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7T2JzZXJ2YWJsZSwgT2JzZXJ2ZXJ9IGZyb20gXCJyeGpzXCI7XG5cbmV4cG9ydCBjbGFzcyBQYWdlUHJlbG9hZFNlcnZpY2Uge1xuICBwcml2YXRlIHJlYWRvbmx5IF9jaGVja1ByZWxvYWQ6IE9ic2VydmFibGU8bnVtYmVyPjtcbiAgcHJpdmF0ZSBfb2JzZXJ2ZXI6IE9ic2VydmVyPG51bWJlcj47XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5fY2hlY2tQcmVsb2FkID0gbmV3IE9ic2VydmFibGUob2JzZXJ2ZXIgPT5cbiAgICAgIHRoaXMuX29ic2VydmVyID0gb2JzZXJ2ZXIpO1xuICB9XG5cbiAgZ2V0IGNoZWNrUHJlbG9hZCgpOiBPYnNlcnZhYmxlPG51bWJlcj4ge1xuICAgIHJldHVybiB0aGlzLl9jaGVja1ByZWxvYWQ7XG4gIH1cblxuICBjaGFuZ2VMYXN0UGFnZUluVmlldyhwYWdlOiBudW1iZXIpIHtcbiAgICBpZih0aGlzLl9vYnNlcnZlcikge1xuICAgICAgdGhpcy5fb2JzZXJ2ZXIubmV4dChwYWdlKTtcbiAgICB9XG4gIH1cbn1cbiJdfQ==