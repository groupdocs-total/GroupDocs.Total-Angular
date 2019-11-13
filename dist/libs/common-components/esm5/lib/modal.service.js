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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9kYWwuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bncm91cGRvY3MuZXhhbXBsZXMuYW5ndWxhci9jb21tb24tY29tcG9uZW50cy8iLCJzb3VyY2VzIjpbImxpYi9tb2RhbC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQTtJQUFBO0lBT0EsQ0FBQztJQU5RLDZCQUFnQixHQUFHLHNCQUFzQixDQUFDO0lBQzFDLHlCQUFZLEdBQUcsa0JBQWtCLENBQUM7SUFDbEMsd0JBQVcsR0FBRyxpQkFBaUIsQ0FBQztJQUNoQywyQkFBYyxHQUFHLG9CQUFvQixDQUFDO0lBQ3RDLDZCQUFnQixHQUFHLGtCQUFrQixDQUFDO0lBQ3RDLCtCQUFrQixHQUFHLHdCQUF3QixDQUFDO0lBQ3ZELG1CQUFDO0NBQUEsQUFQRCxJQU9DO1NBUFksWUFBWTs7O0lBQ3ZCLDhCQUFpRDs7SUFDakQsMEJBQXlDOztJQUN6Qyx5QkFBdUM7O0lBQ3ZDLDRCQUE2Qzs7SUFDN0MsOEJBQTZDOztJQUM3QyxnQ0FBcUQ7O0FBR3ZEO0lBQUE7UUFDVSxXQUFNLEdBQVUsRUFBRSxDQUFDO0lBdUI3QixDQUFDOzs7OztJQXJCQywwQkFBRzs7OztJQUFILFVBQUksS0FBVTtRQUNaLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQzFCLENBQUM7Ozs7O0lBRUQsNkJBQU07Ozs7SUFBTixVQUFPLEVBQVU7UUFDZixJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTTs7OztRQUFDLFVBQUEsQ0FBQyxJQUFJLE9BQUEsQ0FBQyxDQUFDLEVBQUUsS0FBSyxFQUFFLEVBQVgsQ0FBVyxFQUFDLENBQUM7SUFDckQsQ0FBQzs7Ozs7SUFFRCwyQkFBSTs7OztJQUFKLFVBQUssRUFBVTs7WUFDUCxLQUFLLEdBQVEsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNOzs7O1FBQUMsVUFBQSxDQUFDLElBQUksT0FBQSxDQUFDLENBQUMsRUFBRSxLQUFLLEVBQUUsRUFBWCxDQUFXLEVBQUMsQ0FBQyxDQUFDLENBQUM7UUFDMUQsSUFBSSxLQUFLLEVBQUU7WUFDVCxLQUFLLENBQUMsSUFBSSxFQUFFLENBQUM7U0FDZDtJQUNILENBQUM7Ozs7O0lBRUQsNEJBQUs7Ozs7SUFBTCxVQUFNLEVBQVU7O1lBQ1IsS0FBSyxHQUFRLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTTs7OztRQUFDLFVBQUEsQ0FBQyxJQUFJLE9BQUEsQ0FBQyxDQUFDLEVBQUUsS0FBSyxFQUFFLEVBQVgsQ0FBVyxFQUFDLENBQUMsQ0FBQyxDQUFDO1FBQzFELElBQUksS0FBSyxFQUFFO1lBQ1QsS0FBSyxDQUFDLEtBQUssRUFBRSxDQUFDO1NBQ2Y7SUFDSCxDQUFDO0lBQ0gsbUJBQUM7QUFBRCxDQUFDLEFBeEJELElBd0JDOzs7Ozs7O0lBdkJDLDhCQUEyQiIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjbGFzcyBDb21tb25Nb2RhbHMge1xyXG4gIHN0YXRpYyBQYXNzd29yZFJlcXVpcmVkID0gXCJnZC1wYXNzd29yZC1yZXF1aXJlZFwiO1xyXG4gIHN0YXRpYyBFcnJvck1lc3NhZ2UgPSBcImdkLWVycm9yLW1lc3NhZ2VcIjtcclxuICBzdGF0aWMgQnJvd3NlRmlsZXMgPSBcImdkLWJyb3dzZS1maWxlc1wiO1xyXG4gIHN0YXRpYyBDcmVhdGVEb2N1bWVudCA9IFwiZ2QtY3JlYXRlLWRvY3VtZW50XCI7XHJcbiAgc3RhdGljIE9wZXJhdGlvblN1Y2Nlc3MgPSBcImdkLXN1Y2Nlc3MtbW9kYWxcIjtcclxuICBzdGF0aWMgSW5mb3JtYXRpb25NZXNzYWdlID0gXCJnZC1pbmZvcm1hdGlvbi1tZXNzYWdlXCI7XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBNb2RhbFNlcnZpY2Uge1xyXG4gIHByaXZhdGUgbW9kYWxzOiBhbnlbXSA9IFtdO1xyXG5cclxuICBhZGQobW9kYWw6IGFueSkge1xyXG4gICAgdGhpcy5tb2RhbHMucHVzaChtb2RhbCk7XHJcbiAgfVxyXG5cclxuICByZW1vdmUoaWQ6IHN0cmluZykge1xyXG4gICAgdGhpcy5tb2RhbHMgPSB0aGlzLm1vZGFscy5maWx0ZXIoeCA9PiB4LmlkICE9PSBpZCk7XHJcbiAgfVxyXG5cclxuICBvcGVuKGlkOiBzdHJpbmcpIHtcclxuICAgIGNvbnN0IG1vZGFsOiBhbnkgPSB0aGlzLm1vZGFscy5maWx0ZXIoeCA9PiB4LmlkID09PSBpZClbMF07XHJcbiAgICBpZiAobW9kYWwpIHtcclxuICAgICAgbW9kYWwub3BlbigpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgY2xvc2UoaWQ6IHN0cmluZykge1xyXG4gICAgY29uc3QgbW9kYWw6IGFueSA9IHRoaXMubW9kYWxzLmZpbHRlcih4ID0+IHguaWQgPT09IGlkKVswXTtcclxuICAgIGlmIChtb2RhbCkge1xyXG4gICAgICBtb2RhbC5jbG9zZSgpO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iXX0=