import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { Subject } from "rxjs";
import * as i0 from "@angular/core";
var OnCloseService = /** @class */ (function () {
    function OnCloseService() {
        this._observer = new Subject();
        this._onClose = this._observer.asObservable();
    }
    Object.defineProperty(OnCloseService.prototype, "onClose", {
        get: function () {
            return this._onClose;
        },
        enumerable: true,
        configurable: true
    });
    OnCloseService.prototype.close = function (close) {
        this._observer.next(close);
    };
    OnCloseService.ngInjectableDef = i0.defineInjectable({ factory: function OnCloseService_Factory() { return new OnCloseService(); }, token: OnCloseService, providedIn: "root" });
    OnCloseService = tslib_1.__decorate([
        Injectable({
            providedIn: 'root'
        }),
        tslib_1.__metadata("design:paramtypes", [])
    ], OnCloseService);
    return OnCloseService;
}());
export { OnCloseService };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib24tY2xvc2Uuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bncm91cGRvY3MuZXhhbXBsZXMuYW5ndWxhci9jb21tb24tY29tcG9uZW50cy8iLCJzb3VyY2VzIjpbImxpYi9vbi1jbG9zZS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUMsVUFBVSxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBYSxPQUFPLEVBQUMsTUFBTSxNQUFNLENBQUM7O0FBS3pDO0lBSUU7UUFIUSxjQUFTLEdBQXFCLElBQUksT0FBTyxFQUFFLENBQUM7UUFDbkMsYUFBUSxHQUF3QixJQUFJLENBQUMsU0FBUyxDQUFDLFlBQVksRUFBRSxDQUFDO0lBRy9FLENBQUM7SUFFRCxzQkFBSSxtQ0FBTzthQUFYO1lBQ0UsT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDO1FBQ3ZCLENBQUM7OztPQUFBO0lBRUQsOEJBQUssR0FBTCxVQUFNLEtBQWM7UUFDbEIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUE7SUFDNUIsQ0FBQzs7SUFiVSxjQUFjO1FBSDFCLFVBQVUsQ0FBQztZQUNWLFVBQVUsRUFBRSxNQUFNO1NBQ25CLENBQUM7O09BQ1csY0FBYyxDQWMxQjt5QkFwQkQ7Q0FvQkMsQUFkRCxJQWNDO1NBZFksY0FBYyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7SW5qZWN0YWJsZX0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge09ic2VydmFibGUsIFN1YmplY3R9IGZyb20gXCJyeGpzXCI7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIE9uQ2xvc2VTZXJ2aWNlIHtcbiAgcHJpdmF0ZSBfb2JzZXJ2ZXI6IFN1YmplY3Q8Ym9vbGVhbj4gPSBuZXcgU3ViamVjdCgpO1xuICBwcml2YXRlIHJlYWRvbmx5IF9vbkNsb3NlOiBPYnNlcnZhYmxlPGJvb2xlYW4+ID0gdGhpcy5fb2JzZXJ2ZXIuYXNPYnNlcnZhYmxlKCk7XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gIH1cblxuICBnZXQgb25DbG9zZSgpIHtcbiAgICByZXR1cm4gdGhpcy5fb25DbG9zZTtcbiAgfVxuXG4gIGNsb3NlKGNsb3NlOiBib29sZWFuKSB7XG4gICAgdGhpcy5fb2JzZXJ2ZXIubmV4dChjbG9zZSlcbiAgfVxufVxuIl19