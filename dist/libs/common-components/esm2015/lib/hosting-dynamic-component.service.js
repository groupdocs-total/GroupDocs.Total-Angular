/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
export class HostingDynamicComponentService {
    constructor() {
        this.hosts = [];
    }
    /**
     * @param {?} host
     * @return {?}
     */
    add(host) {
        this.hosts = this.hosts.filter((/**
         * @param {?} h
         * @return {?}
         */
        function (h) {
            return h.ident !== host.ident;
        }));
        this.hosts.push(host);
    }
    /**
     * @param {?} host
     * @return {?}
     */
    remove(host) {
        this.hosts = this.hosts.filter((/**
         * @param {?} h
         * @return {?}
         */
        function (h) {
            return h.ident !== host.ident;
        }));
    }
    /**
     * @param {?} ident
     * @return {?}
     */
    find(ident) {
        return this.hosts.find((/**
         * @param {?} h
         * @return {?}
         */
        function (h) {
            return h.ident === ident;
        }));
    }
}
if (false) {
    /**
     * @type {?}
     * @private
     */
    HostingDynamicComponentService.prototype.hosts;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9zdGluZy1keW5hbWljLWNvbXBvbmVudC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdyb3VwZG9jcy5leGFtcGxlcy5hbmd1bGFyL2NvbW1vbi1jb21wb25lbnRzLyIsInNvdXJjZXMiOlsibGliL2hvc3RpbmctZHluYW1pYy1jb21wb25lbnQuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBRUEsTUFBTSxPQUFPLDhCQUE4QjtJQUd6QztRQUNFLElBQUksQ0FBQyxLQUFLLEdBQUcsRUFBRSxDQUFDO0lBQ2xCLENBQUM7Ozs7O0lBRUQsR0FBRyxDQUFDLElBQTBCO1FBQzVCLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNOzs7O1FBQUMsVUFBVSxDQUFDO1lBQ3hDLE9BQU8sQ0FBQyxDQUFDLEtBQUssS0FBSyxJQUFJLENBQUMsS0FBSyxDQUFDO1FBQ2hDLENBQUMsRUFBQyxDQUFDO1FBQ0gsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDeEIsQ0FBQzs7Ozs7SUFFRCxNQUFNLENBQUMsSUFBMEI7UUFDL0IsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU07Ozs7UUFBQyxVQUFVLENBQUM7WUFDeEMsT0FBTyxDQUFDLENBQUMsS0FBSyxLQUFLLElBQUksQ0FBQyxLQUFLLENBQUM7UUFDaEMsQ0FBQyxFQUFDLENBQUM7SUFDTCxDQUFDOzs7OztJQUVELElBQUksQ0FBQyxLQUFhO1FBQ2hCLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJOzs7O1FBQUMsVUFBVSxDQUFDO1lBQ2hDLE9BQU8sQ0FBQyxDQUFDLEtBQUssS0FBSyxLQUFLLENBQUM7UUFDM0IsQ0FBQyxFQUFDLENBQUM7SUFDTCxDQUFDO0NBQ0Y7Ozs7OztJQXhCQywrQ0FBc0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0hvc3REeW5hbWljRGlyZWN0aXZlfSBmcm9tIFwiLi9ob3N0LWR5bmFtaWMuZGlyZWN0aXZlXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgSG9zdGluZ0R5bmFtaWNDb21wb25lbnRTZXJ2aWNlIHtcclxuICBwcml2YXRlIGhvc3RzOiBIb3N0RHluYW1pY0RpcmVjdGl2ZVtdO1xyXG5cclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIHRoaXMuaG9zdHMgPSBbXTtcclxuICB9XHJcblxyXG4gIGFkZChob3N0OiBIb3N0RHluYW1pY0RpcmVjdGl2ZSkge1xyXG4gICAgdGhpcy5ob3N0cyA9IHRoaXMuaG9zdHMuZmlsdGVyKGZ1bmN0aW9uIChoKSB7XHJcbiAgICAgIHJldHVybiBoLmlkZW50ICE9PSBob3N0LmlkZW50O1xyXG4gICAgfSk7XHJcbiAgICB0aGlzLmhvc3RzLnB1c2goaG9zdCk7XHJcbiAgfVxyXG5cclxuICByZW1vdmUoaG9zdDogSG9zdER5bmFtaWNEaXJlY3RpdmUpIHtcclxuICAgIHRoaXMuaG9zdHMgPSB0aGlzLmhvc3RzLmZpbHRlcihmdW5jdGlvbiAoaCkge1xyXG4gICAgICByZXR1cm4gaC5pZGVudCAhPT0gaG9zdC5pZGVudDtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgZmluZChpZGVudDogbnVtYmVyKSB7XHJcbiAgICByZXR1cm4gdGhpcy5ob3N0cy5maW5kKGZ1bmN0aW9uIChoKSB7XHJcbiAgICAgIHJldHVybiBoLmlkZW50ID09PSBpZGVudDtcclxuICAgIH0pO1xyXG4gIH1cclxufVxyXG4iXX0=