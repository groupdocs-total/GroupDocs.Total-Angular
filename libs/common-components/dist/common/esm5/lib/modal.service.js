var CommonModals = /** @class */ (function () {
    function CommonModals() {
    }
    CommonModals.PasswordRequired = "gd-password-required";
    CommonModals.ErrorMessage = "gd-error-message";
    CommonModals.BrowseFiles = "gd-browse-files";
    return CommonModals;
}());
export { CommonModals };
var ModalService = /** @class */ (function () {
    function ModalService() {
        this.modals = [];
    }
    ModalService.prototype.add = function (modal) {
        this.modals.push(modal);
    };
    ModalService.prototype.remove = function (id) {
        this.modals = this.modals.filter(function (x) { return x.id !== id; });
    };
    ModalService.prototype.open = function (id) {
        var modal = this.modals.filter(function (x) { return x.id === id; })[0];
        modal.open();
    };
    ModalService.prototype.close = function (id) {
        var modal = this.modals.filter(function (x) { return x.id === id; })[0];
        modal.close();
    };
    return ModalService;
}());
export { ModalService };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9kYWwuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bncm91cGRvY3MuZXhhbXBsZXMuYW5ndWxhci9jb21tb24tY29tcG9uZW50cy8iLCJzb3VyY2VzIjpbImxpYi9tb2RhbC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQUE7SUFJQSxDQUFDO0lBSFEsNkJBQWdCLEdBQUcsc0JBQXNCLENBQUM7SUFDMUMseUJBQVksR0FBRyxrQkFBa0IsQ0FBQztJQUNsQyx3QkFBVyxHQUFHLGlCQUFpQixDQUFDO0lBQ3pDLG1CQUFDO0NBQUEsQUFKRCxJQUlDO1NBSlksWUFBWTtBQU16QjtJQUFBO1FBQ1UsV0FBTSxHQUFVLEVBQUUsQ0FBQztJQW1CN0IsQ0FBQztJQWpCQywwQkFBRyxHQUFILFVBQUksS0FBVTtRQUNaLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQzFCLENBQUM7SUFFRCw2QkFBTSxHQUFOLFVBQU8sRUFBVTtRQUNmLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsVUFBQSxDQUFDLElBQUksT0FBQSxDQUFDLENBQUMsRUFBRSxLQUFLLEVBQUUsRUFBWCxDQUFXLENBQUMsQ0FBQztJQUNyRCxDQUFDO0lBRUQsMkJBQUksR0FBSixVQUFLLEVBQVU7UUFDYixJQUFNLEtBQUssR0FBUSxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxVQUFBLENBQUMsSUFBSSxPQUFBLENBQUMsQ0FBQyxFQUFFLEtBQUssRUFBRSxFQUFYLENBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQzNELEtBQUssQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUNmLENBQUM7SUFFRCw0QkFBSyxHQUFMLFVBQU0sRUFBVTtRQUNkLElBQU0sS0FBSyxHQUFRLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLFVBQUEsQ0FBQyxJQUFJLE9BQUEsQ0FBQyxDQUFDLEVBQUUsS0FBSyxFQUFFLEVBQVgsQ0FBVyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDM0QsS0FBSyxDQUFDLEtBQUssRUFBRSxDQUFDO0lBQ2hCLENBQUM7SUFDSCxtQkFBQztBQUFELENBQUMsQUFwQkQsSUFvQkMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY2xhc3MgQ29tbW9uTW9kYWxzIHtcbiAgc3RhdGljIFBhc3N3b3JkUmVxdWlyZWQgPSBcImdkLXBhc3N3b3JkLXJlcXVpcmVkXCI7XG4gIHN0YXRpYyBFcnJvck1lc3NhZ2UgPSBcImdkLWVycm9yLW1lc3NhZ2VcIjtcbiAgc3RhdGljIEJyb3dzZUZpbGVzID0gXCJnZC1icm93c2UtZmlsZXNcIjtcbn1cblxuZXhwb3J0IGNsYXNzIE1vZGFsU2VydmljZSB7XG4gIHByaXZhdGUgbW9kYWxzOiBhbnlbXSA9IFtdO1xuXG4gIGFkZChtb2RhbDogYW55KSB7XG4gICAgdGhpcy5tb2RhbHMucHVzaChtb2RhbCk7XG4gIH1cblxuICByZW1vdmUoaWQ6IHN0cmluZykge1xuICAgIHRoaXMubW9kYWxzID0gdGhpcy5tb2RhbHMuZmlsdGVyKHggPT4geC5pZCAhPT0gaWQpO1xuICB9XG5cbiAgb3BlbihpZDogc3RyaW5nKSB7XG4gICAgY29uc3QgbW9kYWw6IGFueSA9IHRoaXMubW9kYWxzLmZpbHRlcih4ID0+IHguaWQgPT09IGlkKVswXTtcbiAgICBtb2RhbC5vcGVuKCk7XG4gIH1cblxuICBjbG9zZShpZDogc3RyaW5nKSB7XG4gICAgY29uc3QgbW9kYWw6IGFueSA9IHRoaXMubW9kYWxzLmZpbHRlcih4ID0+IHguaWQgPT09IGlkKVswXTtcbiAgICBtb2RhbC5jbG9zZSgpO1xuICB9XG59XG4iXX0=