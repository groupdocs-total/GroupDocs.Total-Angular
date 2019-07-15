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
        modal.open();
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
        modal.close();
    }
}
if (false) {
    /**
     * @type {?}
     * @private
     */
    ModalService.prototype.modals;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9kYWwuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bncm91cGRvY3MuZXhhbXBsZXMuYW5ndWxhci9jb21tb24tY29tcG9uZW50cy8iLCJzb3VyY2VzIjpbImxpYi9tb2RhbC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxNQUFNLE9BQU8sWUFBWTs7QUFDaEIsNkJBQWdCLEdBQUcsc0JBQXNCLENBQUM7QUFDMUMseUJBQVksR0FBRyxrQkFBa0IsQ0FBQztBQUNsQyx3QkFBVyxHQUFHLGlCQUFpQixDQUFDO0FBQ2hDLDJCQUFjLEdBQUcsb0JBQW9CLENBQUM7QUFDdEMsNkJBQWdCLEdBQUcsa0JBQWtCLENBQUM7OztJQUo3Qyw4QkFBaUQ7O0lBQ2pELDBCQUF5Qzs7SUFDekMseUJBQXVDOztJQUN2Qyw0QkFBNkM7O0lBQzdDLDhCQUE2Qzs7QUFHL0MsTUFBTSxPQUFPLFlBQVk7SUFBekI7UUFDVSxXQUFNLEdBQVUsRUFBRSxDQUFDO0lBbUI3QixDQUFDOzs7OztJQWpCQyxHQUFHLENBQUMsS0FBVTtRQUNaLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQzFCLENBQUM7Ozs7O0lBRUQsTUFBTSxDQUFDLEVBQVU7UUFDZixJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTTs7OztRQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLEVBQUUsS0FBSyxFQUFFLEVBQUMsQ0FBQztJQUNyRCxDQUFDOzs7OztJQUVELElBQUksQ0FBQyxFQUFVOztjQUNQLEtBQUssR0FBUSxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU07Ozs7UUFBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxFQUFFLEtBQUssRUFBRSxFQUFDLENBQUMsQ0FBQyxDQUFDO1FBQzFELEtBQUssQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUNmLENBQUM7Ozs7O0lBRUQsS0FBSyxDQUFDLEVBQVU7O2NBQ1IsS0FBSyxHQUFRLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTTs7OztRQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLEVBQUUsS0FBSyxFQUFFLEVBQUMsQ0FBQyxDQUFDLENBQUM7UUFDMUQsS0FBSyxDQUFDLEtBQUssRUFBRSxDQUFDO0lBQ2hCLENBQUM7Q0FDRjs7Ozs7O0lBbkJDLDhCQUEyQiIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjbGFzcyBDb21tb25Nb2RhbHMge1xuICBzdGF0aWMgUGFzc3dvcmRSZXF1aXJlZCA9IFwiZ2QtcGFzc3dvcmQtcmVxdWlyZWRcIjtcbiAgc3RhdGljIEVycm9yTWVzc2FnZSA9IFwiZ2QtZXJyb3ItbWVzc2FnZVwiO1xuICBzdGF0aWMgQnJvd3NlRmlsZXMgPSBcImdkLWJyb3dzZS1maWxlc1wiO1xuICBzdGF0aWMgQ3JlYXRlRG9jdW1lbnQgPSBcImdkLWNyZWF0ZS1kb2N1bWVudFwiO1xuICBzdGF0aWMgT3BlcmF0aW9uU3VjY2VzcyA9IFwiZ2Qtc3VjY2Vzcy1tb2RhbFwiO1xufVxuXG5leHBvcnQgY2xhc3MgTW9kYWxTZXJ2aWNlIHtcbiAgcHJpdmF0ZSBtb2RhbHM6IGFueVtdID0gW107XG5cbiAgYWRkKG1vZGFsOiBhbnkpIHtcbiAgICB0aGlzLm1vZGFscy5wdXNoKG1vZGFsKTtcbiAgfVxuXG4gIHJlbW92ZShpZDogc3RyaW5nKSB7XG4gICAgdGhpcy5tb2RhbHMgPSB0aGlzLm1vZGFscy5maWx0ZXIoeCA9PiB4LmlkICE9PSBpZCk7XG4gIH1cblxuICBvcGVuKGlkOiBzdHJpbmcpIHtcbiAgICBjb25zdCBtb2RhbDogYW55ID0gdGhpcy5tb2RhbHMuZmlsdGVyKHggPT4geC5pZCA9PT0gaWQpWzBdO1xuICAgIG1vZGFsLm9wZW4oKTtcbiAgfVxuXG4gIGNsb3NlKGlkOiBzdHJpbmcpIHtcbiAgICBjb25zdCBtb2RhbDogYW55ID0gdGhpcy5tb2RhbHMuZmlsdGVyKHggPT4geC5pZCA9PT0gaWQpWzBdO1xuICAgIG1vZGFsLmNsb3NlKCk7XG4gIH1cbn1cbiJdfQ==