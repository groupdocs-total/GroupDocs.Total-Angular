/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var CommonModals = /** @class */ (function () {
    function CommonModals() {
    }
    CommonModals.PasswordRequired = "gd-password-required";
    CommonModals.ErrorMessage = "gd-error-message";
    CommonModals.BrowseFiles = "gd-browse-files";
    return CommonModals;
}());
export { CommonModals };
if (false) {
    /** @type {?} */
    CommonModals.PasswordRequired;
    /** @type {?} */
    CommonModals.ErrorMessage;
    /** @type {?} */
    CommonModals.BrowseFiles;
}
var ModalService = /** @class */ (function () {
    function ModalService() {
        this.modals = [];
    }
    /**
     * @param {?} modal
     * @return {?}
     */
    ModalService.prototype.add = /**
     * @param {?} modal
     * @return {?}
     */
    function (modal) {
        this.modals.push(modal);
    };
    /**
     * @param {?} id
     * @return {?}
     */
    ModalService.prototype.remove = /**
     * @param {?} id
     * @return {?}
     */
    function (id) {
        this.modals = this.modals.filter((/**
         * @param {?} x
         * @return {?}
         */
        function (x) { return x.id !== id; }));
    };
    /**
     * @param {?} id
     * @return {?}
     */
    ModalService.prototype.open = /**
     * @param {?} id
     * @return {?}
     */
    function (id) {
        /** @type {?} */
        var modal = this.modals.filter((/**
         * @param {?} x
         * @return {?}
         */
        function (x) { return x.id === id; }))[0];
        modal.open();
    };
    /**
     * @param {?} id
     * @return {?}
     */
    ModalService.prototype.close = /**
     * @param {?} id
     * @return {?}
     */
    function (id) {
        /** @type {?} */
        var modal = this.modals.filter((/**
         * @param {?} x
         * @return {?}
         */
        function (x) { return x.id === id; }))[0];
        modal.close();
    };
    return ModalService;
}());
export { ModalService };
if (false) {
    /**
     * @type {?}
     * @private
     */
    ModalService.prototype.modals;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9kYWwuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bncm91cGRvY3MuZXhhbXBsZXMuYW5ndWxhci9jb21tb24tY29tcG9uZW50cy8iLCJzb3VyY2VzIjpbImxpYi9tb2RhbC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQTtJQUFBO0lBSUEsQ0FBQztJQUhRLDZCQUFnQixHQUFHLHNCQUFzQixDQUFDO0lBQzFDLHlCQUFZLEdBQUcsa0JBQWtCLENBQUM7SUFDbEMsd0JBQVcsR0FBRyxpQkFBaUIsQ0FBQztJQUN6QyxtQkFBQztDQUFBLEFBSkQsSUFJQztTQUpZLFlBQVk7OztJQUN2Qiw4QkFBaUQ7O0lBQ2pELDBCQUF5Qzs7SUFDekMseUJBQXVDOztBQUd6QztJQUFBO1FBQ1UsV0FBTSxHQUFVLEVBQUUsQ0FBQztJQW1CN0IsQ0FBQzs7Ozs7SUFqQkMsMEJBQUc7Ozs7SUFBSCxVQUFJLEtBQVU7UUFDWixJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUMxQixDQUFDOzs7OztJQUVELDZCQUFNOzs7O0lBQU4sVUFBTyxFQUFVO1FBQ2YsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU07Ozs7UUFBQyxVQUFBLENBQUMsSUFBSSxPQUFBLENBQUMsQ0FBQyxFQUFFLEtBQUssRUFBRSxFQUFYLENBQVcsRUFBQyxDQUFDO0lBQ3JELENBQUM7Ozs7O0lBRUQsMkJBQUk7Ozs7SUFBSixVQUFLLEVBQVU7O1lBQ1AsS0FBSyxHQUFRLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTTs7OztRQUFDLFVBQUEsQ0FBQyxJQUFJLE9BQUEsQ0FBQyxDQUFDLEVBQUUsS0FBSyxFQUFFLEVBQVgsQ0FBVyxFQUFDLENBQUMsQ0FBQyxDQUFDO1FBQzFELEtBQUssQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUNmLENBQUM7Ozs7O0lBRUQsNEJBQUs7Ozs7SUFBTCxVQUFNLEVBQVU7O1lBQ1IsS0FBSyxHQUFRLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTTs7OztRQUFDLFVBQUEsQ0FBQyxJQUFJLE9BQUEsQ0FBQyxDQUFDLEVBQUUsS0FBSyxFQUFFLEVBQVgsQ0FBVyxFQUFDLENBQUMsQ0FBQyxDQUFDO1FBQzFELEtBQUssQ0FBQyxLQUFLLEVBQUUsQ0FBQztJQUNoQixDQUFDO0lBQ0gsbUJBQUM7QUFBRCxDQUFDLEFBcEJELElBb0JDOzs7Ozs7O0lBbkJDLDhCQUEyQiIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjbGFzcyBDb21tb25Nb2RhbHMge1xuICBzdGF0aWMgUGFzc3dvcmRSZXF1aXJlZCA9IFwiZ2QtcGFzc3dvcmQtcmVxdWlyZWRcIjtcbiAgc3RhdGljIEVycm9yTWVzc2FnZSA9IFwiZ2QtZXJyb3ItbWVzc2FnZVwiO1xuICBzdGF0aWMgQnJvd3NlRmlsZXMgPSBcImdkLWJyb3dzZS1maWxlc1wiO1xufVxuXG5leHBvcnQgY2xhc3MgTW9kYWxTZXJ2aWNlIHtcbiAgcHJpdmF0ZSBtb2RhbHM6IGFueVtdID0gW107XG5cbiAgYWRkKG1vZGFsOiBhbnkpIHtcbiAgICB0aGlzLm1vZGFscy5wdXNoKG1vZGFsKTtcbiAgfVxuXG4gIHJlbW92ZShpZDogc3RyaW5nKSB7XG4gICAgdGhpcy5tb2RhbHMgPSB0aGlzLm1vZGFscy5maWx0ZXIoeCA9PiB4LmlkICE9PSBpZCk7XG4gIH1cblxuICBvcGVuKGlkOiBzdHJpbmcpIHtcbiAgICBjb25zdCBtb2RhbDogYW55ID0gdGhpcy5tb2RhbHMuZmlsdGVyKHggPT4geC5pZCA9PT0gaWQpWzBdO1xuICAgIG1vZGFsLm9wZW4oKTtcbiAgfVxuXG4gIGNsb3NlKGlkOiBzdHJpbmcpIHtcbiAgICBjb25zdCBtb2RhbDogYW55ID0gdGhpcy5tb2RhbHMuZmlsdGVyKHggPT4geC5pZCA9PT0gaWQpWzBdO1xuICAgIG1vZGFsLmNsb3NlKCk7XG4gIH1cbn1cbiJdfQ==