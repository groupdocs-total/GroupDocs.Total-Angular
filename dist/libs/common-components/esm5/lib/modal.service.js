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
    CommonModals.CreateDocument = "gd-create-document";
    CommonModals.OperationSuccess = "gd-success-modal";
    CommonModals.InformationMessage = "gd-information-message";
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
    /** @type {?} */
    CommonModals.CreateDocument;
    /** @type {?} */
    CommonModals.OperationSuccess;
    /** @type {?} */
    CommonModals.InformationMessage;
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
        if (modal) {
            modal.open();
        }
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
        if (modal) {
            modal.close();
        }
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9kYWwuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bncm91cGRvY3MuZXhhbXBsZXMuYW5ndWxhci9jb21tb24tY29tcG9uZW50cy8iLCJzb3VyY2VzIjpbImxpYi9tb2RhbC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQTtJQUFBO0lBT0EsQ0FBQztJQU5RLDZCQUFnQixHQUFHLHNCQUFzQixDQUFDO0lBQzFDLHlCQUFZLEdBQUcsa0JBQWtCLENBQUM7SUFDbEMsd0JBQVcsR0FBRyxpQkFBaUIsQ0FBQztJQUNoQywyQkFBYyxHQUFHLG9CQUFvQixDQUFDO0lBQ3RDLDZCQUFnQixHQUFHLGtCQUFrQixDQUFDO0lBQ3RDLCtCQUFrQixHQUFHLHdCQUF3QixDQUFDO0lBQ3ZELG1CQUFDO0NBQUEsQUFQRCxJQU9DO1NBUFksWUFBWTs7O0lBQ3ZCLDhCQUFpRDs7SUFDakQsMEJBQXlDOztJQUN6Qyx5QkFBdUM7O0lBQ3ZDLDRCQUE2Qzs7SUFDN0MsOEJBQTZDOztJQUM3QyxnQ0FBcUQ7O0FBR3ZEO0lBQUE7UUFDVSxXQUFNLEdBQVUsRUFBRSxDQUFDO0lBdUI3QixDQUFDOzs7OztJQXJCQywwQkFBRzs7OztJQUFILFVBQUksS0FBVTtRQUNaLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQzFCLENBQUM7Ozs7O0lBRUQsNkJBQU07Ozs7SUFBTixVQUFPLEVBQVU7UUFDZixJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTTs7OztRQUFDLFVBQUEsQ0FBQyxJQUFJLE9BQUEsQ0FBQyxDQUFDLEVBQUUsS0FBSyxFQUFFLEVBQVgsQ0FBVyxFQUFDLENBQUM7SUFDckQsQ0FBQzs7Ozs7SUFFRCwyQkFBSTs7OztJQUFKLFVBQUssRUFBVTs7WUFDUCxLQUFLLEdBQVEsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNOzs7O1FBQUMsVUFBQSxDQUFDLElBQUksT0FBQSxDQUFDLENBQUMsRUFBRSxLQUFLLEVBQUUsRUFBWCxDQUFXLEVBQUMsQ0FBQyxDQUFDLENBQUM7UUFDMUQsSUFBSSxLQUFLLEVBQUU7WUFDVCxLQUFLLENBQUMsSUFBSSxFQUFFLENBQUM7U0FDZDtJQUNILENBQUM7Ozs7O0lBRUQsNEJBQUs7Ozs7SUFBTCxVQUFNLEVBQVU7O1lBQ1IsS0FBSyxHQUFRLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTTs7OztRQUFDLFVBQUEsQ0FBQyxJQUFJLE9BQUEsQ0FBQyxDQUFDLEVBQUUsS0FBSyxFQUFFLEVBQVgsQ0FBVyxFQUFDLENBQUMsQ0FBQyxDQUFDO1FBQzFELElBQUksS0FBSyxFQUFFO1lBQ1QsS0FBSyxDQUFDLEtBQUssRUFBRSxDQUFDO1NBQ2Y7SUFDSCxDQUFDO0lBQ0gsbUJBQUM7QUFBRCxDQUFDLEFBeEJELElBd0JDOzs7Ozs7O0lBdkJDLDhCQUEyQiIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjbGFzcyBDb21tb25Nb2RhbHMge1xuICBzdGF0aWMgUGFzc3dvcmRSZXF1aXJlZCA9IFwiZ2QtcGFzc3dvcmQtcmVxdWlyZWRcIjtcbiAgc3RhdGljIEVycm9yTWVzc2FnZSA9IFwiZ2QtZXJyb3ItbWVzc2FnZVwiO1xuICBzdGF0aWMgQnJvd3NlRmlsZXMgPSBcImdkLWJyb3dzZS1maWxlc1wiO1xuICBzdGF0aWMgQ3JlYXRlRG9jdW1lbnQgPSBcImdkLWNyZWF0ZS1kb2N1bWVudFwiO1xuICBzdGF0aWMgT3BlcmF0aW9uU3VjY2VzcyA9IFwiZ2Qtc3VjY2Vzcy1tb2RhbFwiO1xuICBzdGF0aWMgSW5mb3JtYXRpb25NZXNzYWdlID0gXCJnZC1pbmZvcm1hdGlvbi1tZXNzYWdlXCI7XG59XG5cbmV4cG9ydCBjbGFzcyBNb2RhbFNlcnZpY2Uge1xuICBwcml2YXRlIG1vZGFsczogYW55W10gPSBbXTtcblxuICBhZGQobW9kYWw6IGFueSkge1xuICAgIHRoaXMubW9kYWxzLnB1c2gobW9kYWwpO1xuICB9XG5cbiAgcmVtb3ZlKGlkOiBzdHJpbmcpIHtcbiAgICB0aGlzLm1vZGFscyA9IHRoaXMubW9kYWxzLmZpbHRlcih4ID0+IHguaWQgIT09IGlkKTtcbiAgfVxuXG4gIG9wZW4oaWQ6IHN0cmluZykge1xuICAgIGNvbnN0IG1vZGFsOiBhbnkgPSB0aGlzLm1vZGFscy5maWx0ZXIoeCA9PiB4LmlkID09PSBpZClbMF07XG4gICAgaWYgKG1vZGFsKSB7XG4gICAgICBtb2RhbC5vcGVuKCk7XG4gICAgfVxuICB9XG5cbiAgY2xvc2UoaWQ6IHN0cmluZykge1xuICAgIGNvbnN0IG1vZGFsOiBhbnkgPSB0aGlzLm1vZGFscy5maWx0ZXIoeCA9PiB4LmlkID09PSBpZClbMF07XG4gICAgaWYgKG1vZGFsKSB7XG4gICAgICBtb2RhbC5jbG9zZSgpO1xuICAgIH1cbiAgfVxufVxuIl19