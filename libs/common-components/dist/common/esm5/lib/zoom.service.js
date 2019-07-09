import { Subject } from "rxjs";
var ZoomService = /** @class */ (function () {
    function ZoomService() {
        this._observer = new Subject();
        this._zoomChange = this._observer.asObservable();
    }
    Object.defineProperty(ZoomService.prototype, "zoom", {
        get: function () {
            return this._zoom;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ZoomService.prototype, "zoomChange", {
        get: function () {
            return this._zoomChange;
        },
        enumerable: true,
        configurable: true
    });
    ZoomService.prototype.changeZoom = function (zoom) {
        this._zoom = zoom;
        this._observer.next(zoom);
    };
    ZoomService.prototype.createZoomOption = function (val, name, sep) {
        if (name === void 0) { name = val + '%'; }
        if (sep === void 0) { sep = false; }
        return { value: val, name: name, separator: sep, prefix: "%" };
    };
    ZoomService.prototype.zoomOptions = function (width, height) {
        return [this.createZoomOption(25),
            this.createZoomOption(50),
            this.createZoomOption(100),
            this.createZoomOption(150),
            this.createZoomOption(200),
            this.createZoomOption(300),
            this.createZoomOption(0, '', true),
            this.createZoomOption(width, 'Fit Width'),
            this.createZoomOption(height, 'Fit Height')];
    };
    return ZoomService;
}());
export { ZoomService };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiem9vbS5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdyb3VwZG9jcy5leGFtcGxlcy5hbmd1bGFyL2NvbW1vbi1jb21wb25lbnRzLyIsInNvdXJjZXMiOlsibGliL3pvb20uc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQWEsT0FBTyxFQUFDLE1BQU0sTUFBTSxDQUFDO0FBRXpDO0lBS0U7UUFKUSxjQUFTLEdBQW9CLElBQUksT0FBTyxFQUFFLENBQUM7UUFDbEMsZ0JBQVcsR0FBdUIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxZQUFZLEVBQUUsQ0FBQztJQUlqRixDQUFDO0lBRUQsc0JBQUksNkJBQUk7YUFBUjtZQUNFLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQztRQUNwQixDQUFDOzs7T0FBQTtJQUVELHNCQUFJLG1DQUFVO2FBQWQ7WUFDRSxPQUFPLElBQUksQ0FBQyxXQUFXLENBQUM7UUFDMUIsQ0FBQzs7O09BQUE7SUFFRCxnQ0FBVSxHQUFWLFVBQVcsSUFBWTtRQUNyQixJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQztRQUNsQixJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUM1QixDQUFDO0lBRU8sc0NBQWdCLEdBQXhCLFVBQXlCLEdBQVcsRUFBRSxJQUF3QixFQUFFLEdBQW9CO1FBQTlDLHFCQUFBLEVBQUEsT0FBZSxHQUFHLEdBQUcsR0FBRztRQUFFLG9CQUFBLEVBQUEsV0FBb0I7UUFDbEYsT0FBTyxFQUFDLEtBQUssRUFBRSxHQUFHLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxTQUFTLEVBQUUsR0FBRyxFQUFFLE1BQU0sRUFBRSxHQUFHLEVBQUMsQ0FBQTtJQUM5RCxDQUFDO0lBRUQsaUNBQVcsR0FBWCxVQUFZLEtBQUssRUFBRSxNQUFNO1FBQ3ZCLE9BQU8sQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsRUFBRSxDQUFDO1lBQy9CLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxFQUFFLENBQUM7WUFDekIsSUFBSSxDQUFDLGdCQUFnQixDQUFDLEdBQUcsQ0FBQztZQUMxQixJQUFJLENBQUMsZ0JBQWdCLENBQUMsR0FBRyxDQUFDO1lBQzFCLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxHQUFHLENBQUM7WUFDMUIsSUFBSSxDQUFDLGdCQUFnQixDQUFDLEdBQUcsQ0FBQztZQUMxQixJQUFJLENBQUMsZ0JBQWdCLENBQUMsQ0FBQyxFQUFFLEVBQUUsRUFBRSxJQUFJLENBQUM7WUFDbEMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLEtBQUssRUFBRSxXQUFXLENBQUM7WUFDekMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLE1BQU0sRUFBRSxZQUFZLENBQUMsQ0FBQyxDQUFDO0lBQ2pELENBQUM7SUFDSCxrQkFBQztBQUFELENBQUMsQUFwQ0QsSUFvQ0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge09ic2VydmFibGUsIFN1YmplY3R9IGZyb20gXCJyeGpzXCI7XG5cbmV4cG9ydCBjbGFzcyBab29tU2VydmljZSB7XG4gIHByaXZhdGUgX29ic2VydmVyOiBTdWJqZWN0PG51bWJlcj4gPSBuZXcgU3ViamVjdCgpO1xuICBwcml2YXRlIHJlYWRvbmx5IF96b29tQ2hhbmdlOiBPYnNlcnZhYmxlPG51bWJlcj4gPSB0aGlzLl9vYnNlcnZlci5hc09ic2VydmFibGUoKTtcbiAgcHJpdmF0ZSBfem9vbTogbnVtYmVyO1xuXG4gIGNvbnN0cnVjdG9yKCkge1xuICB9XG5cbiAgZ2V0IHpvb20oKTogbnVtYmVyIHtcbiAgICByZXR1cm4gdGhpcy5fem9vbTtcbiAgfVxuXG4gIGdldCB6b29tQ2hhbmdlKCk6IE9ic2VydmFibGU8bnVtYmVyPiB7XG4gICAgcmV0dXJuIHRoaXMuX3pvb21DaGFuZ2U7XG4gIH1cblxuICBjaGFuZ2Vab29tKHpvb206IG51bWJlcikge1xuICAgIHRoaXMuX3pvb20gPSB6b29tO1xuICAgIHRoaXMuX29ic2VydmVyLm5leHQoem9vbSk7XG4gIH1cblxuICBwcml2YXRlIGNyZWF0ZVpvb21PcHRpb24odmFsOiBudW1iZXIsIG5hbWU6IHN0cmluZyA9IHZhbCArICclJywgc2VwOiBib29sZWFuID0gZmFsc2UpIHtcbiAgICByZXR1cm4ge3ZhbHVlOiB2YWwsIG5hbWU6IG5hbWUsIHNlcGFyYXRvcjogc2VwLCBwcmVmaXg6IFwiJVwifVxuICB9XG5cbiAgem9vbU9wdGlvbnMod2lkdGgsIGhlaWdodCkge1xuICAgIHJldHVybiBbdGhpcy5jcmVhdGVab29tT3B0aW9uKDI1KSxcbiAgICAgIHRoaXMuY3JlYXRlWm9vbU9wdGlvbig1MCksXG4gICAgICB0aGlzLmNyZWF0ZVpvb21PcHRpb24oMTAwKSxcbiAgICAgIHRoaXMuY3JlYXRlWm9vbU9wdGlvbigxNTApLFxuICAgICAgdGhpcy5jcmVhdGVab29tT3B0aW9uKDIwMCksXG4gICAgICB0aGlzLmNyZWF0ZVpvb21PcHRpb24oMzAwKSxcbiAgICAgIHRoaXMuY3JlYXRlWm9vbU9wdGlvbigwLCAnJywgdHJ1ZSksXG4gICAgICB0aGlzLmNyZWF0ZVpvb21PcHRpb24od2lkdGgsICdGaXQgV2lkdGgnKSxcbiAgICAgIHRoaXMuY3JlYXRlWm9vbU9wdGlvbihoZWlnaHQsICdGaXQgSGVpZ2h0JyldO1xuICB9XG59XG4iXX0=