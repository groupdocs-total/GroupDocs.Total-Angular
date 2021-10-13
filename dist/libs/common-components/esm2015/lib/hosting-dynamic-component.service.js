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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9zdGluZy1keW5hbWljLWNvbXBvbmVudC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdyb3VwZG9jcy5leGFtcGxlcy5hbmd1bGFyL2NvbW1vbi1jb21wb25lbnRzLyIsInNvdXJjZXMiOlsibGliL2hvc3RpbmctZHluYW1pYy1jb21wb25lbnQuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBRUEsTUFBTSxPQUFPLDhCQUE4QjtJQUd6QztRQUNFLElBQUksQ0FBQyxLQUFLLEdBQUcsRUFBRSxDQUFDO0lBQ2xCLENBQUM7Ozs7O0lBRUQsR0FBRyxDQUFDLElBQTBCO1FBQzVCLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNOzs7O1FBQUMsVUFBVSxDQUFDO1lBQ3hDLE9BQU8sQ0FBQyxDQUFDLEtBQUssS0FBSyxJQUFJLENBQUMsS0FBSyxDQUFDO1FBQ2hDLENBQUMsRUFBQyxDQUFDO1FBQ0gsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDeEIsQ0FBQzs7Ozs7SUFFRCxNQUFNLENBQUMsSUFBMEI7UUFDL0IsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU07Ozs7UUFBQyxVQUFVLENBQUM7WUFDeEMsT0FBTyxDQUFDLENBQUMsS0FBSyxLQUFLLElBQUksQ0FBQyxLQUFLLENBQUM7UUFDaEMsQ0FBQyxFQUFDLENBQUM7SUFDTCxDQUFDOzs7OztJQUVELElBQUksQ0FBQyxLQUFhO1FBQ2hCLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJOzs7O1FBQUMsVUFBVSxDQUFDO1lBQ2hDLE9BQU8sQ0FBQyxDQUFDLEtBQUssS0FBSyxLQUFLLENBQUM7UUFDM0IsQ0FBQyxFQUFDLENBQUM7SUFDTCxDQUFDO0NBQ0Y7Ozs7OztJQXhCQywrQ0FBc0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0hvc3REeW5hbWljRGlyZWN0aXZlfSBmcm9tIFwiLi9ob3N0LWR5bmFtaWMuZGlyZWN0aXZlXCI7XG5cbmV4cG9ydCBjbGFzcyBIb3N0aW5nRHluYW1pY0NvbXBvbmVudFNlcnZpY2Uge1xuICBwcml2YXRlIGhvc3RzOiBIb3N0RHluYW1pY0RpcmVjdGl2ZVtdO1xuXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMuaG9zdHMgPSBbXTtcbiAgfVxuXG4gIGFkZChob3N0OiBIb3N0RHluYW1pY0RpcmVjdGl2ZSkge1xuICAgIHRoaXMuaG9zdHMgPSB0aGlzLmhvc3RzLmZpbHRlcihmdW5jdGlvbiAoaCkge1xuICAgICAgcmV0dXJuIGguaWRlbnQgIT09IGhvc3QuaWRlbnQ7XG4gICAgfSk7XG4gICAgdGhpcy5ob3N0cy5wdXNoKGhvc3QpO1xuICB9XG5cbiAgcmVtb3ZlKGhvc3Q6IEhvc3REeW5hbWljRGlyZWN0aXZlKSB7XG4gICAgdGhpcy5ob3N0cyA9IHRoaXMuaG9zdHMuZmlsdGVyKGZ1bmN0aW9uIChoKSB7XG4gICAgICByZXR1cm4gaC5pZGVudCAhPT0gaG9zdC5pZGVudDtcbiAgICB9KTtcbiAgfVxuXG4gIGZpbmQoaWRlbnQ6IG51bWJlcikge1xuICAgIHJldHVybiB0aGlzLmhvc3RzLmZpbmQoZnVuY3Rpb24gKGgpIHtcbiAgICAgIHJldHVybiBoLmlkZW50ID09PSBpZGVudDtcbiAgICB9KTtcbiAgfVxufVxuIl19