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
    CommonModals.DrawHandSignature = "gd-draw-hand-signature";
    CommonModals.DrawStampSignature = "gd-draw-stamp-signature";
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
    CommonModals.DrawHandSignature;
    /** @type {?} */
    CommonModals.DrawStampSignature;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9kYWwuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bncm91cGRvY3MuZXhhbXBsZXMuYW5ndWxhci9jb21tb24tY29tcG9uZW50cy8iLCJzb3VyY2VzIjpbImxpYi9tb2RhbC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQTtJQUFBO0lBU0EsQ0FBQztJQVJRLDZCQUFnQixHQUFHLHNCQUFzQixDQUFDO0lBQzFDLHlCQUFZLEdBQUcsa0JBQWtCLENBQUM7SUFDbEMsd0JBQVcsR0FBRyxpQkFBaUIsQ0FBQztJQUNoQywyQkFBYyxHQUFHLG9CQUFvQixDQUFDO0lBQ3RDLDZCQUFnQixHQUFHLGtCQUFrQixDQUFDO0lBQ3RDLDhCQUFpQixHQUFHLHdCQUF3QixDQUFDO0lBQzdDLCtCQUFrQixHQUFHLHlCQUF5QixDQUFDO0lBQy9DLCtCQUFrQixHQUFHLHdCQUF3QixDQUFDO0lBQ3ZELG1CQUFDO0NBQUEsQUFURCxJQVNDO1NBVFksWUFBWTs7O0lBQ3ZCLDhCQUFpRDs7SUFDakQsMEJBQXlDOztJQUN6Qyx5QkFBdUM7O0lBQ3ZDLDRCQUE2Qzs7SUFDN0MsOEJBQTZDOztJQUM3QywrQkFBb0Q7O0lBQ3BELGdDQUFzRDs7SUFDdEQsZ0NBQXFEOztBQUd2RDtJQUFBO1FBQ1UsV0FBTSxHQUFVLEVBQUUsQ0FBQztJQXVCN0IsQ0FBQzs7Ozs7SUFyQkMsMEJBQUc7Ozs7SUFBSCxVQUFJLEtBQVU7UUFDWixJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUMxQixDQUFDOzs7OztJQUVELDZCQUFNOzs7O0lBQU4sVUFBTyxFQUFVO1FBQ2YsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU07Ozs7UUFBQyxVQUFBLENBQUMsSUFBSSxPQUFBLENBQUMsQ0FBQyxFQUFFLEtBQUssRUFBRSxFQUFYLENBQVcsRUFBQyxDQUFDO0lBQ3JELENBQUM7Ozs7O0lBRUQsMkJBQUk7Ozs7SUFBSixVQUFLLEVBQVU7O1lBQ1AsS0FBSyxHQUFRLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTTs7OztRQUFDLFVBQUEsQ0FBQyxJQUFJLE9BQUEsQ0FBQyxDQUFDLEVBQUUsS0FBSyxFQUFFLEVBQVgsQ0FBVyxFQUFDLENBQUMsQ0FBQyxDQUFDO1FBQzFELElBQUksS0FBSyxFQUFFO1lBQ1QsS0FBSyxDQUFDLElBQUksRUFBRSxDQUFDO1NBQ2Q7SUFDSCxDQUFDOzs7OztJQUVELDRCQUFLOzs7O0lBQUwsVUFBTSxFQUFVOztZQUNSLEtBQUssR0FBUSxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU07Ozs7UUFBQyxVQUFBLENBQUMsSUFBSSxPQUFBLENBQUMsQ0FBQyxFQUFFLEtBQUssRUFBRSxFQUFYLENBQVcsRUFBQyxDQUFDLENBQUMsQ0FBQztRQUMxRCxJQUFJLEtBQUssRUFBRTtZQUNULEtBQUssQ0FBQyxLQUFLLEVBQUUsQ0FBQztTQUNmO0lBQ0gsQ0FBQztJQUNILG1CQUFDO0FBQUQsQ0FBQyxBQXhCRCxJQXdCQzs7Ozs7OztJQXZCQyw4QkFBMkIiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY2xhc3MgQ29tbW9uTW9kYWxzIHtcbiAgc3RhdGljIFBhc3N3b3JkUmVxdWlyZWQgPSBcImdkLXBhc3N3b3JkLXJlcXVpcmVkXCI7XG4gIHN0YXRpYyBFcnJvck1lc3NhZ2UgPSBcImdkLWVycm9yLW1lc3NhZ2VcIjtcbiAgc3RhdGljIEJyb3dzZUZpbGVzID0gXCJnZC1icm93c2UtZmlsZXNcIjtcbiAgc3RhdGljIENyZWF0ZURvY3VtZW50ID0gXCJnZC1jcmVhdGUtZG9jdW1lbnRcIjtcbiAgc3RhdGljIE9wZXJhdGlvblN1Y2Nlc3MgPSBcImdkLXN1Y2Nlc3MtbW9kYWxcIjtcbiAgc3RhdGljIERyYXdIYW5kU2lnbmF0dXJlID0gXCJnZC1kcmF3LWhhbmQtc2lnbmF0dXJlXCI7XG4gIHN0YXRpYyBEcmF3U3RhbXBTaWduYXR1cmUgPSBcImdkLWRyYXctc3RhbXAtc2lnbmF0dXJlXCI7XG4gIHN0YXRpYyBJbmZvcm1hdGlvbk1lc3NhZ2UgPSBcImdkLWluZm9ybWF0aW9uLW1lc3NhZ2VcIjtcbn1cblxuZXhwb3J0IGNsYXNzIE1vZGFsU2VydmljZSB7XG4gIHByaXZhdGUgbW9kYWxzOiBhbnlbXSA9IFtdO1xuXG4gIGFkZChtb2RhbDogYW55KSB7XG4gICAgdGhpcy5tb2RhbHMucHVzaChtb2RhbCk7XG4gIH1cblxuICByZW1vdmUoaWQ6IHN0cmluZykge1xuICAgIHRoaXMubW9kYWxzID0gdGhpcy5tb2RhbHMuZmlsdGVyKHggPT4geC5pZCAhPT0gaWQpO1xuICB9XG5cbiAgb3BlbihpZDogc3RyaW5nKSB7XG4gICAgY29uc3QgbW9kYWw6IGFueSA9IHRoaXMubW9kYWxzLmZpbHRlcih4ID0+IHguaWQgPT09IGlkKVswXTtcbiAgICBpZiAobW9kYWwpIHtcbiAgICAgIG1vZGFsLm9wZW4oKTtcbiAgICB9XG4gIH1cblxuICBjbG9zZShpZDogc3RyaW5nKSB7XG4gICAgY29uc3QgbW9kYWw6IGFueSA9IHRoaXMubW9kYWxzLmZpbHRlcih4ID0+IHguaWQgPT09IGlkKVswXTtcbiAgICBpZiAobW9kYWwpIHtcbiAgICAgIG1vZGFsLmNsb3NlKCk7XG4gICAgfVxuICB9XG59XG4iXX0=