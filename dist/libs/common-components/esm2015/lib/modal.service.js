/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
export class CommonModals {
}
CommonModals.PasswordRequired = "gd-password-required";
CommonModals.ErrorMessage = "gd-error-message";
CommonModals.BrowseFiles = "gd-browse-files";
CommonModals.CreateDocument = "gd-create-document";
CommonModals.OperationSuccess = "gd-success-modal";
CommonModals.DrawHandSignature = "gd-draw-hand-signature";
CommonModals.DrawStampSignature = "gd-draw-stamp-signature";
CommonModals.InformationMessage = "gd-information-message";
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
export class ModalService {
    constructor() {
        this.modals = [];
    }
    /**
     * @param {?} modal
     * @return {?}
     */
    add(modal) {
        this.modals.push(modal);
    }
    /**
     * @param {?} id
     * @return {?}
     */
    remove(id) {
        this.modals = this.modals.filter((/**
         * @param {?} x
         * @return {?}
         */
        x => x.id !== id));
    }
    /**
     * @param {?} id
     * @return {?}
     */
    open(id) {
        /** @type {?} */
        const modal = this.modals.filter((/**
         * @param {?} x
         * @return {?}
         */
        x => x.id === id))[0];
        if (modal) {
            modal.open();
        }
    }
    /**
     * @param {?} id
     * @return {?}
     */
    close(id) {
        /** @type {?} */
        const modal = this.modals.filter((/**
         * @param {?} x
         * @return {?}
         */
        x => x.id === id))[0];
        if (modal) {
            modal.close();
        }
    }
}
if (false) {
    /**
     * @type {?}
     * @private
     */
    ModalService.prototype.modals;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9kYWwuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bncm91cGRvY3MuZXhhbXBsZXMuYW5ndWxhci9jb21tb24tY29tcG9uZW50cy8iLCJzb3VyY2VzIjpbImxpYi9tb2RhbC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxNQUFNLE9BQU8sWUFBWTs7QUFDaEIsNkJBQWdCLEdBQUcsc0JBQXNCLENBQUM7QUFDMUMseUJBQVksR0FBRyxrQkFBa0IsQ0FBQztBQUNsQyx3QkFBVyxHQUFHLGlCQUFpQixDQUFDO0FBQ2hDLDJCQUFjLEdBQUcsb0JBQW9CLENBQUM7QUFDdEMsNkJBQWdCLEdBQUcsa0JBQWtCLENBQUM7QUFDdEMsOEJBQWlCLEdBQUcsd0JBQXdCLENBQUM7QUFDN0MsK0JBQWtCLEdBQUcseUJBQXlCLENBQUM7QUFDL0MsK0JBQWtCLEdBQUcsd0JBQXdCLENBQUM7OztJQVByRCw4QkFBaUQ7O0lBQ2pELDBCQUF5Qzs7SUFDekMseUJBQXVDOztJQUN2Qyw0QkFBNkM7O0lBQzdDLDhCQUE2Qzs7SUFDN0MsK0JBQW9EOztJQUNwRCxnQ0FBc0Q7O0lBQ3RELGdDQUFxRDs7QUFHdkQsTUFBTSxPQUFPLFlBQVk7SUFBekI7UUFDVSxXQUFNLEdBQVUsRUFBRSxDQUFDO0lBdUI3QixDQUFDOzs7OztJQXJCQyxHQUFHLENBQUMsS0FBVTtRQUNaLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQzFCLENBQUM7Ozs7O0lBRUQsTUFBTSxDQUFDLEVBQVU7UUFDZixJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTTs7OztRQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLEVBQUUsS0FBSyxFQUFFLEVBQUMsQ0FBQztJQUNyRCxDQUFDOzs7OztJQUVELElBQUksQ0FBQyxFQUFVOztjQUNQLEtBQUssR0FBUSxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU07Ozs7UUFBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxFQUFFLEtBQUssRUFBRSxFQUFDLENBQUMsQ0FBQyxDQUFDO1FBQzFELElBQUksS0FBSyxFQUFFO1lBQ1QsS0FBSyxDQUFDLElBQUksRUFBRSxDQUFDO1NBQ2Q7SUFDSCxDQUFDOzs7OztJQUVELEtBQUssQ0FBQyxFQUFVOztjQUNSLEtBQUssR0FBUSxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU07Ozs7UUFBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxFQUFFLEtBQUssRUFBRSxFQUFDLENBQUMsQ0FBQyxDQUFDO1FBQzFELElBQUksS0FBSyxFQUFFO1lBQ1QsS0FBSyxDQUFDLEtBQUssRUFBRSxDQUFDO1NBQ2Y7SUFDSCxDQUFDO0NBQ0Y7Ozs7OztJQXZCQyw4QkFBMkIiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY2xhc3MgQ29tbW9uTW9kYWxzIHtcbiAgc3RhdGljIFBhc3N3b3JkUmVxdWlyZWQgPSBcImdkLXBhc3N3b3JkLXJlcXVpcmVkXCI7XG4gIHN0YXRpYyBFcnJvck1lc3NhZ2UgPSBcImdkLWVycm9yLW1lc3NhZ2VcIjtcbiAgc3RhdGljIEJyb3dzZUZpbGVzID0gXCJnZC1icm93c2UtZmlsZXNcIjtcbiAgc3RhdGljIENyZWF0ZURvY3VtZW50ID0gXCJnZC1jcmVhdGUtZG9jdW1lbnRcIjtcbiAgc3RhdGljIE9wZXJhdGlvblN1Y2Nlc3MgPSBcImdkLXN1Y2Nlc3MtbW9kYWxcIjtcbiAgc3RhdGljIERyYXdIYW5kU2lnbmF0dXJlID0gXCJnZC1kcmF3LWhhbmQtc2lnbmF0dXJlXCI7XG4gIHN0YXRpYyBEcmF3U3RhbXBTaWduYXR1cmUgPSBcImdkLWRyYXctc3RhbXAtc2lnbmF0dXJlXCI7XG4gIHN0YXRpYyBJbmZvcm1hdGlvbk1lc3NhZ2UgPSBcImdkLWluZm9ybWF0aW9uLW1lc3NhZ2VcIjtcbn1cblxuZXhwb3J0IGNsYXNzIE1vZGFsU2VydmljZSB7XG4gIHByaXZhdGUgbW9kYWxzOiBhbnlbXSA9IFtdO1xuXG4gIGFkZChtb2RhbDogYW55KSB7XG4gICAgdGhpcy5tb2RhbHMucHVzaChtb2RhbCk7XG4gIH1cblxuICByZW1vdmUoaWQ6IHN0cmluZykge1xuICAgIHRoaXMubW9kYWxzID0gdGhpcy5tb2RhbHMuZmlsdGVyKHggPT4geC5pZCAhPT0gaWQpO1xuICB9XG5cbiAgb3BlbihpZDogc3RyaW5nKSB7XG4gICAgY29uc3QgbW9kYWw6IGFueSA9IHRoaXMubW9kYWxzLmZpbHRlcih4ID0+IHguaWQgPT09IGlkKVswXTtcbiAgICBpZiAobW9kYWwpIHtcbiAgICAgIG1vZGFsLm9wZW4oKTtcbiAgICB9XG4gIH1cblxuICBjbG9zZShpZDogc3RyaW5nKSB7XG4gICAgY29uc3QgbW9kYWw6IGFueSA9IHRoaXMubW9kYWxzLmZpbHRlcih4ID0+IHguaWQgPT09IGlkKVswXTtcbiAgICBpZiAobW9kYWwpIHtcbiAgICAgIG1vZGFsLmNsb3NlKCk7XG4gICAgfVxuICB9XG59XG4iXX0=