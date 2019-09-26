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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9kYWwuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bncm91cGRvY3MuZXhhbXBsZXMuYW5ndWxhci9jb21tb24tY29tcG9uZW50cy8iLCJzb3VyY2VzIjpbImxpYi9tb2RhbC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQTtJQUFBO0lBUUEsQ0FBQztJQVBRLDZCQUFnQixHQUFHLHNCQUFzQixDQUFDO0lBQzFDLHlCQUFZLEdBQUcsa0JBQWtCLENBQUM7SUFDbEMsd0JBQVcsR0FBRyxpQkFBaUIsQ0FBQztJQUNoQywyQkFBYyxHQUFHLG9CQUFvQixDQUFDO0lBQ3RDLDZCQUFnQixHQUFHLGtCQUFrQixDQUFDO0lBQ3RDLDhCQUFpQixHQUFHLHdCQUF3QixDQUFDO0lBQzdDLCtCQUFrQixHQUFHLHlCQUF5QixDQUFDO0lBQ3hELG1CQUFDO0NBQUEsQUFSRCxJQVFDO1NBUlksWUFBWTs7O0lBQ3ZCLDhCQUFpRDs7SUFDakQsMEJBQXlDOztJQUN6Qyx5QkFBdUM7O0lBQ3ZDLDRCQUE2Qzs7SUFDN0MsOEJBQTZDOztJQUM3QywrQkFBb0Q7O0lBQ3BELGdDQUFzRDs7QUFHeEQ7SUFBQTtRQUNVLFdBQU0sR0FBVSxFQUFFLENBQUM7SUF1QjdCLENBQUM7Ozs7O0lBckJDLDBCQUFHOzs7O0lBQUgsVUFBSSxLQUFVO1FBQ1osSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDMUIsQ0FBQzs7Ozs7SUFFRCw2QkFBTTs7OztJQUFOLFVBQU8sRUFBVTtRQUNmLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNOzs7O1FBQUMsVUFBQSxDQUFDLElBQUksT0FBQSxDQUFDLENBQUMsRUFBRSxLQUFLLEVBQUUsRUFBWCxDQUFXLEVBQUMsQ0FBQztJQUNyRCxDQUFDOzs7OztJQUVELDJCQUFJOzs7O0lBQUosVUFBSyxFQUFVOztZQUNQLEtBQUssR0FBUSxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU07Ozs7UUFBQyxVQUFBLENBQUMsSUFBSSxPQUFBLENBQUMsQ0FBQyxFQUFFLEtBQUssRUFBRSxFQUFYLENBQVcsRUFBQyxDQUFDLENBQUMsQ0FBQztRQUMxRCxJQUFJLEtBQUssRUFBRTtZQUNULEtBQUssQ0FBQyxJQUFJLEVBQUUsQ0FBQztTQUNkO0lBQ0gsQ0FBQzs7Ozs7SUFFRCw0QkFBSzs7OztJQUFMLFVBQU0sRUFBVTs7WUFDUixLQUFLLEdBQVEsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNOzs7O1FBQUMsVUFBQSxDQUFDLElBQUksT0FBQSxDQUFDLENBQUMsRUFBRSxLQUFLLEVBQUUsRUFBWCxDQUFXLEVBQUMsQ0FBQyxDQUFDLENBQUM7UUFDMUQsSUFBSSxLQUFLLEVBQUU7WUFDVCxLQUFLLENBQUMsS0FBSyxFQUFFLENBQUM7U0FDZjtJQUNILENBQUM7SUFDSCxtQkFBQztBQUFELENBQUMsQUF4QkQsSUF3QkM7Ozs7Ozs7SUF2QkMsOEJBQTJCIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNsYXNzIENvbW1vbk1vZGFscyB7XG4gIHN0YXRpYyBQYXNzd29yZFJlcXVpcmVkID0gXCJnZC1wYXNzd29yZC1yZXF1aXJlZFwiO1xuICBzdGF0aWMgRXJyb3JNZXNzYWdlID0gXCJnZC1lcnJvci1tZXNzYWdlXCI7XG4gIHN0YXRpYyBCcm93c2VGaWxlcyA9IFwiZ2QtYnJvd3NlLWZpbGVzXCI7XG4gIHN0YXRpYyBDcmVhdGVEb2N1bWVudCA9IFwiZ2QtY3JlYXRlLWRvY3VtZW50XCI7XG4gIHN0YXRpYyBPcGVyYXRpb25TdWNjZXNzID0gXCJnZC1zdWNjZXNzLW1vZGFsXCI7XG4gIHN0YXRpYyBEcmF3SGFuZFNpZ25hdHVyZSA9IFwiZ2QtZHJhdy1oYW5kLXNpZ25hdHVyZVwiO1xuICBzdGF0aWMgRHJhd1N0YW1wU2lnbmF0dXJlID0gXCJnZC1kcmF3LXN0YW1wLXNpZ25hdHVyZVwiO1xufVxuXG5leHBvcnQgY2xhc3MgTW9kYWxTZXJ2aWNlIHtcbiAgcHJpdmF0ZSBtb2RhbHM6IGFueVtdID0gW107XG5cbiAgYWRkKG1vZGFsOiBhbnkpIHtcbiAgICB0aGlzLm1vZGFscy5wdXNoKG1vZGFsKTtcbiAgfVxuXG4gIHJlbW92ZShpZDogc3RyaW5nKSB7XG4gICAgdGhpcy5tb2RhbHMgPSB0aGlzLm1vZGFscy5maWx0ZXIoeCA9PiB4LmlkICE9PSBpZCk7XG4gIH1cblxuICBvcGVuKGlkOiBzdHJpbmcpIHtcbiAgICBjb25zdCBtb2RhbDogYW55ID0gdGhpcy5tb2RhbHMuZmlsdGVyKHggPT4geC5pZCA9PT0gaWQpWzBdO1xuICAgIGlmIChtb2RhbCkge1xuICAgICAgbW9kYWwub3BlbigpO1xuICAgIH1cbiAgfVxuXG4gIGNsb3NlKGlkOiBzdHJpbmcpIHtcbiAgICBjb25zdCBtb2RhbDogYW55ID0gdGhpcy5tb2RhbHMuZmlsdGVyKHggPT4geC5pZCA9PT0gaWQpWzBdO1xuICAgIGlmIChtb2RhbCkge1xuICAgICAgbW9kYWwuY2xvc2UoKTtcbiAgICB9XG4gIH1cbn1cbiJdfQ==