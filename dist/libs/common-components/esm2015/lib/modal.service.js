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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9kYWwuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bncm91cGRvY3MuZXhhbXBsZXMuYW5ndWxhci9jb21tb24tY29tcG9uZW50cy8iLCJzb3VyY2VzIjpbImxpYi9tb2RhbC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxNQUFNLE9BQU8sWUFBWTs7QUFDaEIsNkJBQWdCLEdBQUcsc0JBQXNCLENBQUM7QUFDMUMseUJBQVksR0FBRyxrQkFBa0IsQ0FBQztBQUNsQyx3QkFBVyxHQUFHLGlCQUFpQixDQUFDO0FBQ2hDLDJCQUFjLEdBQUcsb0JBQW9CLENBQUM7QUFDdEMsNkJBQWdCLEdBQUcsa0JBQWtCLENBQUM7QUFDdEMsOEJBQWlCLEdBQUcsd0JBQXdCLENBQUM7QUFDN0MsK0JBQWtCLEdBQUcseUJBQXlCLENBQUM7QUFDL0MsK0JBQWtCLEdBQUcsd0JBQXdCLENBQUM7OztJQVByRCw4QkFBaUQ7O0lBQ2pELDBCQUF5Qzs7SUFDekMseUJBQXVDOztJQUN2Qyw0QkFBNkM7O0lBQzdDLDhCQUE2Qzs7SUFDN0MsK0JBQW9EOztJQUNwRCxnQ0FBc0Q7O0lBQ3RELGdDQUFxRDs7QUFHdkQsTUFBTSxPQUFPLFlBQVk7SUFBekI7UUFDVSxXQUFNLEdBQVUsRUFBRSxDQUFDO0lBdUI3QixDQUFDOzs7OztJQXJCQyxHQUFHLENBQUMsS0FBVTtRQUNaLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQzFCLENBQUM7Ozs7O0lBRUQsTUFBTSxDQUFDLEVBQVU7UUFDZixJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTTs7OztRQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLEVBQUUsS0FBSyxFQUFFLEVBQUMsQ0FBQztJQUNyRCxDQUFDOzs7OztJQUVELElBQUksQ0FBQyxFQUFVOztjQUNQLEtBQUssR0FBUSxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU07Ozs7UUFBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxFQUFFLEtBQUssRUFBRSxFQUFDLENBQUMsQ0FBQyxDQUFDO1FBQzFELElBQUksS0FBSyxFQUFFO1lBQ1QsS0FBSyxDQUFDLElBQUksRUFBRSxDQUFDO1NBQ2Q7SUFDSCxDQUFDOzs7OztJQUVELEtBQUssQ0FBQyxFQUFVOztjQUNSLEtBQUssR0FBUSxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU07Ozs7UUFBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxFQUFFLEtBQUssRUFBRSxFQUFDLENBQUMsQ0FBQyxDQUFDO1FBQzFELElBQUksS0FBSyxFQUFFO1lBQ1QsS0FBSyxDQUFDLEtBQUssRUFBRSxDQUFDO1NBQ2Y7SUFDSCxDQUFDO0NBQ0Y7Ozs7OztJQXZCQyw4QkFBMkIiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY2xhc3MgQ29tbW9uTW9kYWxzIHtcclxuICBzdGF0aWMgUGFzc3dvcmRSZXF1aXJlZCA9IFwiZ2QtcGFzc3dvcmQtcmVxdWlyZWRcIjtcclxuICBzdGF0aWMgRXJyb3JNZXNzYWdlID0gXCJnZC1lcnJvci1tZXNzYWdlXCI7XHJcbiAgc3RhdGljIEJyb3dzZUZpbGVzID0gXCJnZC1icm93c2UtZmlsZXNcIjtcclxuICBzdGF0aWMgQ3JlYXRlRG9jdW1lbnQgPSBcImdkLWNyZWF0ZS1kb2N1bWVudFwiO1xyXG4gIHN0YXRpYyBPcGVyYXRpb25TdWNjZXNzID0gXCJnZC1zdWNjZXNzLW1vZGFsXCI7XHJcbiAgc3RhdGljIERyYXdIYW5kU2lnbmF0dXJlID0gXCJnZC1kcmF3LWhhbmQtc2lnbmF0dXJlXCI7XHJcbiAgc3RhdGljIERyYXdTdGFtcFNpZ25hdHVyZSA9IFwiZ2QtZHJhdy1zdGFtcC1zaWduYXR1cmVcIjtcclxuICBzdGF0aWMgSW5mb3JtYXRpb25NZXNzYWdlID0gXCJnZC1pbmZvcm1hdGlvbi1tZXNzYWdlXCI7XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBNb2RhbFNlcnZpY2Uge1xyXG4gIHByaXZhdGUgbW9kYWxzOiBhbnlbXSA9IFtdO1xyXG5cclxuICBhZGQobW9kYWw6IGFueSkge1xyXG4gICAgdGhpcy5tb2RhbHMucHVzaChtb2RhbCk7XHJcbiAgfVxyXG5cclxuICByZW1vdmUoaWQ6IHN0cmluZykge1xyXG4gICAgdGhpcy5tb2RhbHMgPSB0aGlzLm1vZGFscy5maWx0ZXIoeCA9PiB4LmlkICE9PSBpZCk7XHJcbiAgfVxyXG5cclxuICBvcGVuKGlkOiBzdHJpbmcpIHtcclxuICAgIGNvbnN0IG1vZGFsOiBhbnkgPSB0aGlzLm1vZGFscy5maWx0ZXIoeCA9PiB4LmlkID09PSBpZClbMF07XHJcbiAgICBpZiAobW9kYWwpIHtcclxuICAgICAgbW9kYWwub3BlbigpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgY2xvc2UoaWQ6IHN0cmluZykge1xyXG4gICAgY29uc3QgbW9kYWw6IGFueSA9IHRoaXMubW9kYWxzLmZpbHRlcih4ID0+IHguaWQgPT09IGlkKVswXTtcclxuICAgIGlmIChtb2RhbCkge1xyXG4gICAgICBtb2RhbC5jbG9zZSgpO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iXX0=