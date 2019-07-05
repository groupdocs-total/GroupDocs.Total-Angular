import { Observable } from "rxjs";
var UploadFilesService = /** @class */ (function () {
    function UploadFilesService() {
        var _this = this;
        this._uploadsChange = new Observable(function (observer) {
            return _this._observer = observer;
        });
    }
    Object.defineProperty(UploadFilesService.prototype, "uploadsChange", {
        get: function () {
            return this._uploadsChange;
        },
        enumerable: true,
        configurable: true
    });
    UploadFilesService.prototype.changeFilesList = function (filesList) {
        this._observer.next(filesList);
    };
    return UploadFilesService;
}());
export { UploadFilesService };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXBsb2FkLWZpbGVzLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ3JvdXBkb2NzLmV4YW1wbGVzLmFuZ3VsYXIvY29tbW9uLWNvbXBvbmVudHMvIiwic291cmNlcyI6WyJsaWIvdXBsb2FkLWZpbGVzLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFDLFVBQVUsRUFBVyxNQUFNLE1BQU0sQ0FBQztBQUUxQztJQUlFO1FBQUEsaUJBR0M7UUFGQyxJQUFJLENBQUMsY0FBYyxHQUFHLElBQUksVUFBVSxDQUFDLFVBQUEsUUFBUTtZQUMzQyxPQUFBLEtBQUksQ0FBQyxTQUFTLEdBQUcsUUFBUTtRQUF6QixDQUF5QixDQUFDLENBQUM7SUFDL0IsQ0FBQztJQUVELHNCQUFJLDZDQUFhO2FBQWpCO1lBQ0UsT0FBTyxJQUFJLENBQUMsY0FBYyxDQUFDO1FBQzdCLENBQUM7OztPQUFBO0lBRUQsNENBQWUsR0FBZixVQUFnQixTQUFtQjtRQUNqQyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztJQUNqQyxDQUFDO0lBQ0gseUJBQUM7QUFBRCxDQUFDLEFBaEJELElBZ0JDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtPYnNlcnZhYmxlLCBPYnNlcnZlcn0gZnJvbSBcInJ4anNcIjtcblxuZXhwb3J0IGNsYXNzIFVwbG9hZEZpbGVzU2VydmljZSB7XG4gIHByaXZhdGUgX3VwbG9hZHNDaGFuZ2U6IE9ic2VydmFibGU8RmlsZUxpc3Q+O1xuICBwcml2YXRlIF9vYnNlcnZlcjogT2JzZXJ2ZXI8RmlsZUxpc3Q+O1xuXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMuX3VwbG9hZHNDaGFuZ2UgPSBuZXcgT2JzZXJ2YWJsZShvYnNlcnZlciA9PlxuICAgICAgdGhpcy5fb2JzZXJ2ZXIgPSBvYnNlcnZlcik7XG4gIH1cblxuICBnZXQgdXBsb2Fkc0NoYW5nZSgpOiBPYnNlcnZhYmxlPEZpbGVMaXN0PiB7XG4gICAgcmV0dXJuIHRoaXMuX3VwbG9hZHNDaGFuZ2U7XG4gIH1cblxuICBjaGFuZ2VGaWxlc0xpc3QoZmlsZXNMaXN0OiBGaWxlTGlzdCkge1xuICAgIHRoaXMuX29ic2VydmVyLm5leHQoZmlsZXNMaXN0KTtcbiAgfVxufVxuIl19