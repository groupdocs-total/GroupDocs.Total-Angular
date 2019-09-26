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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9kYWwuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bncm91cGRvY3MuZXhhbXBsZXMuYW5ndWxhci9jb21tb24tY29tcG9uZW50cy8iLCJzb3VyY2VzIjpbImxpYi9tb2RhbC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxNQUFNLE9BQU8sWUFBWTs7QUFDaEIsNkJBQWdCLEdBQUcsc0JBQXNCLENBQUM7QUFDMUMseUJBQVksR0FBRyxrQkFBa0IsQ0FBQztBQUNsQyx3QkFBVyxHQUFHLGlCQUFpQixDQUFDO0FBQ2hDLDJCQUFjLEdBQUcsb0JBQW9CLENBQUM7QUFDdEMsNkJBQWdCLEdBQUcsa0JBQWtCLENBQUM7QUFDdEMsOEJBQWlCLEdBQUcsd0JBQXdCLENBQUM7QUFDN0MsK0JBQWtCLEdBQUcseUJBQXlCLENBQUM7OztJQU50RCw4QkFBaUQ7O0lBQ2pELDBCQUF5Qzs7SUFDekMseUJBQXVDOztJQUN2Qyw0QkFBNkM7O0lBQzdDLDhCQUE2Qzs7SUFDN0MsK0JBQW9EOztJQUNwRCxnQ0FBc0Q7O0FBR3hELE1BQU0sT0FBTyxZQUFZO0lBQXpCO1FBQ1UsV0FBTSxHQUFVLEVBQUUsQ0FBQztJQXVCN0IsQ0FBQzs7Ozs7SUFyQkMsR0FBRyxDQUFDLEtBQVU7UUFDWixJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUMxQixDQUFDOzs7OztJQUVELE1BQU0sQ0FBQyxFQUFVO1FBQ2YsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU07Ozs7UUFBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxFQUFFLEtBQUssRUFBRSxFQUFDLENBQUM7SUFDckQsQ0FBQzs7Ozs7SUFFRCxJQUFJLENBQUMsRUFBVTs7Y0FDUCxLQUFLLEdBQVEsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNOzs7O1FBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsRUFBRSxLQUFLLEVBQUUsRUFBQyxDQUFDLENBQUMsQ0FBQztRQUMxRCxJQUFJLEtBQUssRUFBRTtZQUNULEtBQUssQ0FBQyxJQUFJLEVBQUUsQ0FBQztTQUNkO0lBQ0gsQ0FBQzs7Ozs7SUFFRCxLQUFLLENBQUMsRUFBVTs7Y0FDUixLQUFLLEdBQVEsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNOzs7O1FBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsRUFBRSxLQUFLLEVBQUUsRUFBQyxDQUFDLENBQUMsQ0FBQztRQUMxRCxJQUFJLEtBQUssRUFBRTtZQUNULEtBQUssQ0FBQyxLQUFLLEVBQUUsQ0FBQztTQUNmO0lBQ0gsQ0FBQztDQUNGOzs7Ozs7SUF2QkMsOEJBQTJCIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNsYXNzIENvbW1vbk1vZGFscyB7XG4gIHN0YXRpYyBQYXNzd29yZFJlcXVpcmVkID0gXCJnZC1wYXNzd29yZC1yZXF1aXJlZFwiO1xuICBzdGF0aWMgRXJyb3JNZXNzYWdlID0gXCJnZC1lcnJvci1tZXNzYWdlXCI7XG4gIHN0YXRpYyBCcm93c2VGaWxlcyA9IFwiZ2QtYnJvd3NlLWZpbGVzXCI7XG4gIHN0YXRpYyBDcmVhdGVEb2N1bWVudCA9IFwiZ2QtY3JlYXRlLWRvY3VtZW50XCI7XG4gIHN0YXRpYyBPcGVyYXRpb25TdWNjZXNzID0gXCJnZC1zdWNjZXNzLW1vZGFsXCI7XG4gIHN0YXRpYyBEcmF3SGFuZFNpZ25hdHVyZSA9IFwiZ2QtZHJhdy1oYW5kLXNpZ25hdHVyZVwiO1xuICBzdGF0aWMgRHJhd1N0YW1wU2lnbmF0dXJlID0gXCJnZC1kcmF3LXN0YW1wLXNpZ25hdHVyZVwiO1xufVxuXG5leHBvcnQgY2xhc3MgTW9kYWxTZXJ2aWNlIHtcbiAgcHJpdmF0ZSBtb2RhbHM6IGFueVtdID0gW107XG5cbiAgYWRkKG1vZGFsOiBhbnkpIHtcbiAgICB0aGlzLm1vZGFscy5wdXNoKG1vZGFsKTtcbiAgfVxuXG4gIHJlbW92ZShpZDogc3RyaW5nKSB7XG4gICAgdGhpcy5tb2RhbHMgPSB0aGlzLm1vZGFscy5maWx0ZXIoeCA9PiB4LmlkICE9PSBpZCk7XG4gIH1cblxuICBvcGVuKGlkOiBzdHJpbmcpIHtcbiAgICBjb25zdCBtb2RhbDogYW55ID0gdGhpcy5tb2RhbHMuZmlsdGVyKHggPT4geC5pZCA9PT0gaWQpWzBdO1xuICAgIGlmIChtb2RhbCkge1xuICAgICAgbW9kYWwub3BlbigpO1xuICAgIH1cbiAgfVxuXG4gIGNsb3NlKGlkOiBzdHJpbmcpIHtcbiAgICBjb25zdCBtb2RhbDogYW55ID0gdGhpcy5tb2RhbHMuZmlsdGVyKHggPT4geC5pZCA9PT0gaWQpWzBdO1xuICAgIGlmIChtb2RhbCkge1xuICAgICAgbW9kYWwuY2xvc2UoKTtcbiAgICB9XG4gIH1cbn1cbiJdfQ==