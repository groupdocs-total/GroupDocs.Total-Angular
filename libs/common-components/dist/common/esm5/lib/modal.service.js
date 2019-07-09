var CommonModals = /** @class */ (function () {
    function CommonModals() {
    }
    CommonModals.PasswordRequired = "gd-password-required";
    CommonModals.ErrorMessage = "gd-error-message";
    CommonModals.BrowseFiles = "gd-browse-files";
    CommonModals.CreateDocument = "gd-create-document";
    CommonModals.OperationSuccess = "gd-success-modal";
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9kYWwuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bncm91cGRvY3MuZXhhbXBsZXMuYW5ndWxhci9jb21tb24tY29tcG9uZW50cy8iLCJzb3VyY2VzIjpbImxpYi9tb2RhbC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQUE7SUFNQSxDQUFDO0lBTFEsNkJBQWdCLEdBQUcsc0JBQXNCLENBQUM7SUFDMUMseUJBQVksR0FBRyxrQkFBa0IsQ0FBQztJQUNsQyx3QkFBVyxHQUFHLGlCQUFpQixDQUFDO0lBQ2hDLDJCQUFjLEdBQUcsb0JBQW9CLENBQUM7SUFDdEMsNkJBQWdCLEdBQUcsa0JBQWtCLENBQUM7SUFDL0MsbUJBQUM7Q0FBQSxBQU5ELElBTUM7U0FOWSxZQUFZO0FBUXpCO0lBQUE7UUFDVSxXQUFNLEdBQVUsRUFBRSxDQUFDO0lBbUI3QixDQUFDO0lBakJDLDBCQUFHLEdBQUgsVUFBSSxLQUFVO1FBQ1osSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDMUIsQ0FBQztJQUVELDZCQUFNLEdBQU4sVUFBTyxFQUFVO1FBQ2YsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxVQUFBLENBQUMsSUFBSSxPQUFBLENBQUMsQ0FBQyxFQUFFLEtBQUssRUFBRSxFQUFYLENBQVcsQ0FBQyxDQUFDO0lBQ3JELENBQUM7SUFFRCwyQkFBSSxHQUFKLFVBQUssRUFBVTtRQUNiLElBQU0sS0FBSyxHQUFRLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLFVBQUEsQ0FBQyxJQUFJLE9BQUEsQ0FBQyxDQUFDLEVBQUUsS0FBSyxFQUFFLEVBQVgsQ0FBVyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDM0QsS0FBSyxDQUFDLElBQUksRUFBRSxDQUFDO0lBQ2YsQ0FBQztJQUVELDRCQUFLLEdBQUwsVUFBTSxFQUFVO1FBQ2QsSUFBTSxLQUFLLEdBQVEsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsVUFBQSxDQUFDLElBQUksT0FBQSxDQUFDLENBQUMsRUFBRSxLQUFLLEVBQUUsRUFBWCxDQUFXLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUMzRCxLQUFLLENBQUMsS0FBSyxFQUFFLENBQUM7SUFDaEIsQ0FBQztJQUNILG1CQUFDO0FBQUQsQ0FBQyxBQXBCRCxJQW9CQyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjbGFzcyBDb21tb25Nb2RhbHMge1xuICBzdGF0aWMgUGFzc3dvcmRSZXF1aXJlZCA9IFwiZ2QtcGFzc3dvcmQtcmVxdWlyZWRcIjtcbiAgc3RhdGljIEVycm9yTWVzc2FnZSA9IFwiZ2QtZXJyb3ItbWVzc2FnZVwiO1xuICBzdGF0aWMgQnJvd3NlRmlsZXMgPSBcImdkLWJyb3dzZS1maWxlc1wiO1xuICBzdGF0aWMgQ3JlYXRlRG9jdW1lbnQgPSBcImdkLWNyZWF0ZS1kb2N1bWVudFwiO1xuICBzdGF0aWMgT3BlcmF0aW9uU3VjY2VzcyA9IFwiZ2Qtc3VjY2Vzcy1tb2RhbFwiO1xufVxuXG5leHBvcnQgY2xhc3MgTW9kYWxTZXJ2aWNlIHtcbiAgcHJpdmF0ZSBtb2RhbHM6IGFueVtdID0gW107XG5cbiAgYWRkKG1vZGFsOiBhbnkpIHtcbiAgICB0aGlzLm1vZGFscy5wdXNoKG1vZGFsKTtcbiAgfVxuXG4gIHJlbW92ZShpZDogc3RyaW5nKSB7XG4gICAgdGhpcy5tb2RhbHMgPSB0aGlzLm1vZGFscy5maWx0ZXIoeCA9PiB4LmlkICE9PSBpZCk7XG4gIH1cblxuICBvcGVuKGlkOiBzdHJpbmcpIHtcbiAgICBjb25zdCBtb2RhbDogYW55ID0gdGhpcy5tb2RhbHMuZmlsdGVyKHggPT4geC5pZCA9PT0gaWQpWzBdO1xuICAgIG1vZGFsLm9wZW4oKTtcbiAgfVxuXG4gIGNsb3NlKGlkOiBzdHJpbmcpIHtcbiAgICBjb25zdCBtb2RhbDogYW55ID0gdGhpcy5tb2RhbHMuZmlsdGVyKHggPT4geC5pZCA9PT0gaWQpWzBdO1xuICAgIG1vZGFsLmNsb3NlKCk7XG4gIH1cbn1cbiJdfQ==