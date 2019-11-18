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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9kYWwuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bncm91cGRvY3MuZXhhbXBsZXMuYW5ndWxhci9jb21tb24tY29tcG9uZW50cy8iLCJzb3VyY2VzIjpbImxpYi9tb2RhbC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxNQUFNLE9BQU8sWUFBWTs7QUFDaEIsNkJBQWdCLEdBQUcsc0JBQXNCLENBQUM7QUFDMUMseUJBQVksR0FBRyxrQkFBa0IsQ0FBQztBQUNsQyx3QkFBVyxHQUFHLGlCQUFpQixDQUFDO0FBQ2hDLDJCQUFjLEdBQUcsb0JBQW9CLENBQUM7QUFDdEMsNkJBQWdCLEdBQUcsa0JBQWtCLENBQUM7QUFDdEMsK0JBQWtCLEdBQUcsd0JBQXdCLENBQUM7OztJQUxyRCw4QkFBaUQ7O0lBQ2pELDBCQUF5Qzs7SUFDekMseUJBQXVDOztJQUN2Qyw0QkFBNkM7O0lBQzdDLDhCQUE2Qzs7SUFDN0MsZ0NBQXFEOztBQUd2RCxNQUFNLE9BQU8sWUFBWTtJQUF6QjtRQUNVLFdBQU0sR0FBVSxFQUFFLENBQUM7SUF1QjdCLENBQUM7Ozs7O0lBckJDLEdBQUcsQ0FBQyxLQUFVO1FBQ1osSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDMUIsQ0FBQzs7Ozs7SUFFRCxNQUFNLENBQUMsRUFBVTtRQUNmLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNOzs7O1FBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsRUFBRSxLQUFLLEVBQUUsRUFBQyxDQUFDO0lBQ3JELENBQUM7Ozs7O0lBRUQsSUFBSSxDQUFDLEVBQVU7O2NBQ1AsS0FBSyxHQUFRLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTTs7OztRQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLEVBQUUsS0FBSyxFQUFFLEVBQUMsQ0FBQyxDQUFDLENBQUM7UUFDMUQsSUFBSSxLQUFLLEVBQUU7WUFDVCxLQUFLLENBQUMsSUFBSSxFQUFFLENBQUM7U0FDZDtJQUNILENBQUM7Ozs7O0lBRUQsS0FBSyxDQUFDLEVBQVU7O2NBQ1IsS0FBSyxHQUFRLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTTs7OztRQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLEVBQUUsS0FBSyxFQUFFLEVBQUMsQ0FBQyxDQUFDLENBQUM7UUFDMUQsSUFBSSxLQUFLLEVBQUU7WUFDVCxLQUFLLENBQUMsS0FBSyxFQUFFLENBQUM7U0FDZjtJQUNILENBQUM7Q0FDRjs7Ozs7O0lBdkJDLDhCQUEyQiIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjbGFzcyBDb21tb25Nb2RhbHMge1xuICBzdGF0aWMgUGFzc3dvcmRSZXF1aXJlZCA9IFwiZ2QtcGFzc3dvcmQtcmVxdWlyZWRcIjtcbiAgc3RhdGljIEVycm9yTWVzc2FnZSA9IFwiZ2QtZXJyb3ItbWVzc2FnZVwiO1xuICBzdGF0aWMgQnJvd3NlRmlsZXMgPSBcImdkLWJyb3dzZS1maWxlc1wiO1xuICBzdGF0aWMgQ3JlYXRlRG9jdW1lbnQgPSBcImdkLWNyZWF0ZS1kb2N1bWVudFwiO1xuICBzdGF0aWMgT3BlcmF0aW9uU3VjY2VzcyA9IFwiZ2Qtc3VjY2Vzcy1tb2RhbFwiO1xuICBzdGF0aWMgSW5mb3JtYXRpb25NZXNzYWdlID0gXCJnZC1pbmZvcm1hdGlvbi1tZXNzYWdlXCI7XG59XG5cbmV4cG9ydCBjbGFzcyBNb2RhbFNlcnZpY2Uge1xuICBwcml2YXRlIG1vZGFsczogYW55W10gPSBbXTtcblxuICBhZGQobW9kYWw6IGFueSkge1xuICAgIHRoaXMubW9kYWxzLnB1c2gobW9kYWwpO1xuICB9XG5cbiAgcmVtb3ZlKGlkOiBzdHJpbmcpIHtcbiAgICB0aGlzLm1vZGFscyA9IHRoaXMubW9kYWxzLmZpbHRlcih4ID0+IHguaWQgIT09IGlkKTtcbiAgfVxuXG4gIG9wZW4oaWQ6IHN0cmluZykge1xuICAgIGNvbnN0IG1vZGFsOiBhbnkgPSB0aGlzLm1vZGFscy5maWx0ZXIoeCA9PiB4LmlkID09PSBpZClbMF07XG4gICAgaWYgKG1vZGFsKSB7XG4gICAgICBtb2RhbC5vcGVuKCk7XG4gICAgfVxuICB9XG5cbiAgY2xvc2UoaWQ6IHN0cmluZykge1xuICAgIGNvbnN0IG1vZGFsOiBhbnkgPSB0aGlzLm1vZGFscy5maWx0ZXIoeCA9PiB4LmlkID09PSBpZClbMF07XG4gICAgaWYgKG1vZGFsKSB7XG4gICAgICBtb2RhbC5jbG9zZSgpO1xuICAgIH1cbiAgfVxufVxuIl19