import { BehaviorSubject } from "rxjs";
var ExceptionMessageService = /** @class */ (function () {
    function ExceptionMessageService() {
        this._observer = new BehaviorSubject('Server is not available');
        this._messageChange = this._observer.asObservable();
    }
    Object.defineProperty(ExceptionMessageService.prototype, "messageChange", {
        get: function () {
            return this._messageChange;
        },
        enumerable: true,
        configurable: true
    });
    ExceptionMessageService.prototype.changeMessage = function (message) {
        this._observer.next(message);
    };
    return ExceptionMessageService;
}());
export { ExceptionMessageService };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXhjZXB0aW9uLW1lc3NhZ2Uuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bncm91cGRvY3MuZXhhbXBsZXMuYW5ndWxhci9jb21tb24tY29tcG9uZW50cy8iLCJzb3VyY2VzIjpbImxpYi9leGNlcHRpb24tbWVzc2FnZS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBQyxlQUFlLEVBQWEsTUFBTSxNQUFNLENBQUM7QUFFakQ7SUFJRTtRQUhRLGNBQVMsR0FBNEIsSUFBSSxlQUFlLENBQUMseUJBQXlCLENBQUMsQ0FBQztRQUNwRixtQkFBYyxHQUF1QixJQUFJLENBQUMsU0FBUyxDQUFDLFlBQVksRUFBRSxDQUFDO0lBRzNFLENBQUM7SUFFRCxzQkFBSSxrREFBYTthQUFqQjtZQUNFLE9BQU8sSUFBSSxDQUFDLGNBQWMsQ0FBQztRQUM3QixDQUFDOzs7T0FBQTtJQUVELCtDQUFhLEdBQWIsVUFBYyxPQUFlO1FBQzNCLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQy9CLENBQUM7SUFDSCw4QkFBQztBQUFELENBQUMsQUFkRCxJQWNDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtCZWhhdmlvclN1YmplY3QsIE9ic2VydmFibGV9IGZyb20gXCJyeGpzXCI7XG5cbmV4cG9ydCBjbGFzcyBFeGNlcHRpb25NZXNzYWdlU2VydmljZSB7XG4gIHByaXZhdGUgX29ic2VydmVyOiBCZWhhdmlvclN1YmplY3Q8c3RyaW5nPiA9IG5ldyBCZWhhdmlvclN1YmplY3QoJ1NlcnZlciBpcyBub3QgYXZhaWxhYmxlJyk7XG4gIHByaXZhdGUgX21lc3NhZ2VDaGFuZ2U6IE9ic2VydmFibGU8c3RyaW5nPiA9IHRoaXMuX29ic2VydmVyLmFzT2JzZXJ2YWJsZSgpO1xuXG4gIGNvbnN0cnVjdG9yKCkge1xuICB9XG5cbiAgZ2V0IG1lc3NhZ2VDaGFuZ2UoKTogT2JzZXJ2YWJsZTxzdHJpbmc+IHtcbiAgICByZXR1cm4gdGhpcy5fbWVzc2FnZUNoYW5nZTtcbiAgfVxuXG4gIGNoYW5nZU1lc3NhZ2UobWVzc2FnZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fb2JzZXJ2ZXIubmV4dChtZXNzYWdlKTtcbiAgfVxufVxuIl19