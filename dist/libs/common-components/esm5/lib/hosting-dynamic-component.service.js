/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var HostingDynamicComponentService = /** @class */ (function () {
    function HostingDynamicComponentService() {
        this.hosts = [];
    }
    /**
     * @param {?} host
     * @return {?}
     */
    HostingDynamicComponentService.prototype.add = /**
     * @param {?} host
     * @return {?}
     */
    function (host) {
        this.hosts = this.hosts.filter((/**
         * @param {?} h
         * @return {?}
         */
        function (h) {
            return h.ident !== host.ident;
        }));
        this.hosts.push(host);
    };
    /**
     * @param {?} host
     * @return {?}
     */
    HostingDynamicComponentService.prototype.remove = /**
     * @param {?} host
     * @return {?}
     */
    function (host) {
        this.hosts = this.hosts.filter((/**
         * @param {?} h
         * @return {?}
         */
        function (h) {
            return h.ident !== host.ident;
        }));
    };
    /**
     * @param {?} ident
     * @return {?}
     */
    HostingDynamicComponentService.prototype.find = /**
     * @param {?} ident
     * @return {?}
     */
    function (ident) {
        return this.hosts.find((/**
         * @param {?} h
         * @return {?}
         */
        function (h) {
            return h.ident === ident;
        }));
    };
    return HostingDynamicComponentService;
}());
export { HostingDynamicComponentService };
if (false) {
    /**
     * @type {?}
     * @private
     */
    HostingDynamicComponentService.prototype.hosts;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9zdGluZy1keW5hbWljLWNvbXBvbmVudC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdyb3VwZG9jcy5leGFtcGxlcy5hbmd1bGFyL2NvbW1vbi1jb21wb25lbnRzLyIsInNvdXJjZXMiOlsibGliL2hvc3RpbmctZHluYW1pYy1jb21wb25lbnQuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBRUE7SUFHRTtRQUNFLElBQUksQ0FBQyxLQUFLLEdBQUcsRUFBRSxDQUFDO0lBQ2xCLENBQUM7Ozs7O0lBRUQsNENBQUc7Ozs7SUFBSCxVQUFJLElBQTBCO1FBQzVCLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNOzs7O1FBQUMsVUFBVSxDQUFDO1lBQ3hDLE9BQU8sQ0FBQyxDQUFDLEtBQUssS0FBSyxJQUFJLENBQUMsS0FBSyxDQUFDO1FBQ2hDLENBQUMsRUFBQyxDQUFDO1FBQ0gsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDeEIsQ0FBQzs7Ozs7SUFFRCwrQ0FBTTs7OztJQUFOLFVBQU8sSUFBMEI7UUFDL0IsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU07Ozs7UUFBQyxVQUFVLENBQUM7WUFDeEMsT0FBTyxDQUFDLENBQUMsS0FBSyxLQUFLLElBQUksQ0FBQyxLQUFLLENBQUM7UUFDaEMsQ0FBQyxFQUFDLENBQUM7SUFDTCxDQUFDOzs7OztJQUVELDZDQUFJOzs7O0lBQUosVUFBSyxLQUFhO1FBQ2hCLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJOzs7O1FBQUMsVUFBVSxDQUFDO1lBQ2hDLE9BQU8sQ0FBQyxDQUFDLEtBQUssS0FBSyxLQUFLLENBQUM7UUFDM0IsQ0FBQyxFQUFDLENBQUM7SUFDTCxDQUFDO0lBQ0gscUNBQUM7QUFBRCxDQUFDLEFBekJELElBeUJDOzs7Ozs7O0lBeEJDLCtDQUFzQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7SG9zdER5bmFtaWNEaXJlY3RpdmV9IGZyb20gXCIuL2hvc3QtZHluYW1pYy5kaXJlY3RpdmVcIjtcblxuZXhwb3J0IGNsYXNzIEhvc3RpbmdEeW5hbWljQ29tcG9uZW50U2VydmljZSB7XG4gIHByaXZhdGUgaG9zdHM6IEhvc3REeW5hbWljRGlyZWN0aXZlW107XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5ob3N0cyA9IFtdO1xuICB9XG5cbiAgYWRkKGhvc3Q6IEhvc3REeW5hbWljRGlyZWN0aXZlKSB7XG4gICAgdGhpcy5ob3N0cyA9IHRoaXMuaG9zdHMuZmlsdGVyKGZ1bmN0aW9uIChoKSB7XG4gICAgICByZXR1cm4gaC5pZGVudCAhPT0gaG9zdC5pZGVudDtcbiAgICB9KTtcbiAgICB0aGlzLmhvc3RzLnB1c2goaG9zdCk7XG4gIH1cblxuICByZW1vdmUoaG9zdDogSG9zdER5bmFtaWNEaXJlY3RpdmUpIHtcbiAgICB0aGlzLmhvc3RzID0gdGhpcy5ob3N0cy5maWx0ZXIoZnVuY3Rpb24gKGgpIHtcbiAgICAgIHJldHVybiBoLmlkZW50ICE9PSBob3N0LmlkZW50O1xuICAgIH0pO1xuICB9XG5cbiAgZmluZChpZGVudDogbnVtYmVyKSB7XG4gICAgcmV0dXJuIHRoaXMuaG9zdHMuZmluZChmdW5jdGlvbiAoaCkge1xuICAgICAgcmV0dXJuIGguaWRlbnQgPT09IGlkZW50O1xuICAgIH0pO1xuICB9XG59XG4iXX0=