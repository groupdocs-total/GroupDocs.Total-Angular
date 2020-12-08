/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Directive, ElementRef } from '@angular/core';
import { ZoomService } from "./zoom.service";
import { WindowService } from './window.service';
var PageMarkerDirective = /** @class */ (function () {
    function PageMarkerDirective(_zoomService, _windowService, el) {
        this._zoomService = _zoomService;
        this._windowService = _windowService;
        this.naming = {
            sectionSelector: "section.section",
            markerSelector: "span.page8marker",
            headerSelector: "header.header",
            contentSelector: "article.content",
            footerSelector: "footer.footer"
        };
        // observing configurations.
        this.config = {
            attributes: true,
            attributeOldValue: true,
            childList: true,
            subtree: true,
            characterData: true,
            characterDataOldValue: true,
            attributeFilter: ["style", "class"]
        };
        this.el = el;
    }
    /**
     * @return {?}
     */
    PageMarkerDirective.prototype.ngAfterViewInit = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var sections = document.querySelectorAll(this.naming.sectionSelector);
        for (var index = 0; index < sections.length; index++) {
            // get section
            /** @type {?} */
            var section = sections[index];
            // process section. add markers to this one.
            this.processSection(section);
            // Create an observer instance linked to the callback function.
            /** @type {?} */
            var observer = new MutationObserver(this.callback.bind(this));
            // Start observing the target sections for configured mutations.
            observer.observe(section, this.config);
        }
    };
    // Callback function to execute when mutations are observed.
    // Callback function to execute when mutations are observed.
    /**
     * @param {?} mutationsList
     * @param {?} observer
     * @return {?}
     */
    PageMarkerDirective.prototype.callback = 
    // Callback function to execute when mutations are observed.
    /**
     * @param {?} mutationsList
     * @param {?} observer
     * @return {?}
     */
    function (mutationsList, observer) {
        // get first MutationRecord from list.
        /** @type {?} */
        var mutationFirst = mutationsList[0];
        // get parent section.
        /** @type {?} */
        var target = mutationFirst.target.parentNode.closest(this.naming.sectionSelector);
        if (target === null || target === "undefined") {
            return;
        }
        // remove all markers in the current section.
        target.querySelectorAll(this.naming.markerSelector).forEach((/**
         * @param {?} element
         * @return {?}
         */
        function (element) {
            element.remove();
        }));
        // add marker to target sections.
        this.processSection(target);
        // a list of all matching DOM changes that have been detected but not yet processed by the observer's callback function, leaving the mutation queue empty.
        // MAIN REASON - leaving the mutation queue empty. 
        /** @type {?} */
        var lest = observer.takeRecords();
    };
    ;
    /**
     * @param {?} section
     * @return {?}
     */
    PageMarkerDirective.prototype.processSection = /**
     * @param {?} section
     * @return {?}
     */
    function (section) {
        /** @type {?} */
        var headerHeight = this.processHeader(section);
        /** @type {?} */
        var footerHeight = this.processFooter(section);
        // get max page height - from css 'paginal.css'
        /** @type {?} */
        var styling = getComputedStyle(section, null);
        /** @type {?} */
        var minHeight = styling.getPropertyValue('min-height');
        /** @type {?} */
        var minHeightNumber = parseFloat(minHeight);
        /** @type {?} */
        var contentHeight = minHeightNumber - headerHeight - footerHeight;
        /** @type {?} */
        var realHeight = this.processContent(section);
        /** @type {?} */
        var endPageCoordinate = contentHeight;
        while (endPageCoordinate < realHeight) {
            /** @type {?} */
            var marker = this.htmlToElements("<span class='page8marker' style='top:" + Math.ceil(endPageCoordinate) +
                "px;'></span>");
            marker.forEach((/**
             * @param {?} item
             * @return {?}
             */
            function (item) {
                section.appendChild(item);
            }));
            endPageCoordinate += contentHeight;
        }
    };
    // calculate header's height.
    // calculate header's height.
    /**
     * @param {?} section
     * @return {?}
     */
    PageMarkerDirective.prototype.processHeader = 
    // calculate header's height.
    /**
     * @param {?} section
     * @return {?}
     */
    function (section) {
        /** @type {?} */
        var header = section.querySelector(this.naming.headerSelector);
        return header.getBoundingClientRect().height;
    };
    ;
    // calculate real height of the content. without padding.
    // calculate real height of the content. without padding.
    /**
     * @param {?} section
     * @return {?}
     */
    PageMarkerDirective.prototype.processContent = 
    // calculate real height of the content. without padding.
    /**
     * @param {?} section
     * @return {?}
     */
    function (section) {
        /** @type {?} */
        var content = section.querySelector(this.naming.contentSelector);
        /** @type {?} */
        var height = content.getBoundingClientRect().height;
        /** @type {?} */
        var styling = getComputedStyle(content, null);
        /** @type {?} */
        var paddingBottom = styling.getPropertyValue('padding-bottom');
        /** @type {?} */
        var paddingTop = styling.getPropertyValue('padding-top');
        return height - parseFloat(paddingBottom) - parseFloat(paddingTop);
    };
    ;
    // calculate footer's height.
    // calculate footer's height.
    /**
     * @param {?} section
     * @return {?}
     */
    PageMarkerDirective.prototype.processFooter = 
    // calculate footer's height.
    /**
     * @param {?} section
     * @return {?}
     */
    function (section) {
        /** @type {?} */
        var footer = section.querySelector(this.naming.footerSelector);
        return footer.getBoundingClientRect().height;
    };
    ;
    // create dom element from string.
    // create dom element from string.
    /**
     * @param {?} html
     * @return {?}
     */
    PageMarkerDirective.prototype.htmlToElements = 
    // create dom element from string.
    /**
     * @param {?} html
     * @return {?}
     */
    function (html) {
        /** @type {?} */
        var template = document.createElement('template');
        template.innerHTML = html;
        return template.content.childNodes;
    };
    PageMarkerDirective.decorators = [
        { type: Directive, args: [{
                    selector: '[gdPageMarker]'
                },] }
    ];
    /** @nocollapse */
    PageMarkerDirective.ctorParameters = function () { return [
        { type: ZoomService },
        { type: WindowService },
        { type: ElementRef }
    ]; };
    return PageMarkerDirective;
}());
export { PageMarkerDirective };
if (false) {
    /** @type {?} */
    PageMarkerDirective.prototype.naming;
    /** @type {?} */
    PageMarkerDirective.prototype.config;
    /** @type {?} */
    PageMarkerDirective.prototype.el;
    /**
     * @type {?}
     * @private
     */
    PageMarkerDirective.prototype._zoomService;
    /**
     * @type {?}
     * @private
     */
    PageMarkerDirective.prototype._windowService;
    /* Skipping unhandled member: ;*/
    /* Skipping unhandled member: ;*/
    /* Skipping unhandled member: ;*/
    /* Skipping unhandled member: ;*/
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZS1tYXJrZXIuZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdyb3VwZG9jcy5leGFtcGxlcy5hbmd1bGFyL2NvbW1vbi1jb21wb25lbnRzLyIsInNvdXJjZXMiOlsibGliL3BhZ2UtbWFya2VyLmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFnQixTQUFTLEVBQUUsVUFBVSxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQ25FLE9BQU8sRUFBQyxXQUFXLEVBQUMsTUFBTSxnQkFBZ0IsQ0FBQztBQUUzQyxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sa0JBQWtCLENBQUM7QUFFakQ7SUEwQkUsNkJBQW9CLFlBQXlCLEVBQVUsY0FBNkIsRUFBRSxFQUFjO1FBQWhGLGlCQUFZLEdBQVosWUFBWSxDQUFhO1FBQVUsbUJBQWMsR0FBZCxjQUFjLENBQWU7UUFyQnRGLFdBQU0sR0FBRztZQUNMLGVBQWUsRUFBRSxpQkFBaUI7WUFDbEMsY0FBYyxFQUFFLGtCQUFrQjtZQUNsQyxjQUFjLEVBQUUsZUFBZTtZQUMvQixlQUFlLEVBQUUsaUJBQWlCO1lBQ2xDLGNBQWMsRUFBRSxlQUFlO1NBQ2xDLENBQUE7O1FBR0QsV0FBTSxHQUFHO1lBQ0wsVUFBVSxFQUFFLElBQUk7WUFDaEIsaUJBQWlCLEVBQUUsSUFBSTtZQUN2QixTQUFTLEVBQUUsSUFBSTtZQUNmLE9BQU8sRUFBRSxJQUFJO1lBQ2IsYUFBYSxFQUFFLElBQUk7WUFDbkIscUJBQXFCLEVBQUUsSUFBSTtZQUMzQixlQUFlLEVBQUUsQ0FBQyxPQUFPLEVBQUUsT0FBTyxDQUFDO1NBQ3RDLENBQUM7UUFLRSxJQUFJLENBQUMsRUFBRSxHQUFHLEVBQUUsQ0FBQztJQUNmLENBQUM7Ozs7SUFFRCw2Q0FBZTs7O0lBQWY7O1lBQ00sUUFBUSxHQUFHLFFBQVEsQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLGVBQWUsQ0FBQztRQUVyRSxLQUFLLElBQUksS0FBSyxHQUFHLENBQUMsRUFBRSxLQUFLLEdBQUcsUUFBUSxDQUFDLE1BQU0sRUFBRSxLQUFLLEVBQUUsRUFBRTs7O2dCQUU1QyxPQUFPLEdBQUcsUUFBUSxDQUFDLEtBQUssQ0FBQztZQUMvQiw0Q0FBNEM7WUFDNUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxPQUFPLENBQUMsQ0FBQzs7O2dCQUV2QixRQUFRLEdBQUcsSUFBSSxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUMvRCxnRUFBZ0U7WUFDaEUsUUFBUSxDQUFDLE9BQU8sQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1NBQzFDO0lBQ0gsQ0FBQztJQUVELDREQUE0RDs7Ozs7OztJQUM5RCxzQ0FBUTs7Ozs7OztJQUFSLFVBQVMsYUFBYSxFQUFFLFFBQVE7OztZQUV0QixhQUFhLEdBQUcsYUFBYSxDQUFDLENBQUMsQ0FBQzs7O1lBRWxDLE1BQU0sR0FBRyxhQUFhLENBQUMsTUFBTSxDQUFDLFVBQVUsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxlQUFlLENBQUM7UUFDakYsSUFBSSxNQUFNLEtBQUssSUFBSSxJQUFJLE1BQU0sS0FBSyxXQUFXLEVBQUU7WUFDM0MsT0FBTztTQUNWO1FBQ0QsNkNBQTZDO1FBQzdDLE1BQU0sQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLGNBQWMsQ0FBQyxDQUFDLE9BQU87Ozs7UUFBQyxVQUFBLE9BQU87WUFDL0QsT0FBTyxDQUFDLE1BQU0sRUFBRSxDQUFDO1FBQ3JCLENBQUMsRUFBQyxDQUFBO1FBQ0YsaUNBQWlDO1FBQ2pDLElBQUksQ0FBQyxjQUFjLENBQUMsTUFBTSxDQUFDLENBQUM7Ozs7WUFHdEIsSUFBSSxHQUFHLFFBQVEsQ0FBQyxXQUFXLEVBQUU7SUFDdkMsQ0FBQztJQUFBLENBQUM7Ozs7O0lBRUEsNENBQWM7Ozs7SUFBZCxVQUFlLE9BQU87O1lBQ2QsWUFBWSxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFDOztZQUMxQyxZQUFZLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQUM7OztZQUUxQyxPQUFPLEdBQUcsZ0JBQWdCLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQzs7WUFDM0MsU0FBUyxHQUFHLE9BQU8sQ0FBQyxnQkFBZ0IsQ0FBQyxZQUFZLENBQUM7O1lBQ2hELGVBQWUsR0FBRyxVQUFVLENBQUMsU0FBUyxDQUFDOztZQUN2QyxhQUFhLEdBQUcsZUFBZSxHQUFHLFlBQVksR0FBRyxZQUFZOztZQUM3RCxVQUFVLEdBQUcsSUFBSSxDQUFDLGNBQWMsQ0FBQyxPQUFPLENBQUM7O1lBQzNDLGlCQUFpQixHQUFHLGFBQWE7UUFDckMsT0FBTyxpQkFBaUIsR0FBRyxVQUFVLEVBQUU7O2dCQUMvQixNQUFNLEdBQUcsSUFBSSxDQUFDLGNBQWMsQ0FBQyx1Q0FBdUMsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLGlCQUFpQixDQUFDO2dCQUNuRyxjQUFjLENBQUM7WUFDbkIsTUFBTSxDQUFDLE9BQU87Ozs7WUFBQyxVQUFBLElBQUk7Z0JBQ2YsT0FBTyxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUM5QixDQUFDLEVBQUMsQ0FBQztZQUNILGlCQUFpQixJQUFJLGFBQWEsQ0FBQztTQUN0QztJQUNILENBQUM7SUFFRCw2QkFBNkI7Ozs7OztJQUMzQiwyQ0FBYTs7Ozs7O0lBQWIsVUFBYyxPQUFPOztZQUNYLE1BQU0sR0FBRyxPQUFPLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsY0FBYyxDQUFDO1FBQ2hFLE9BQU8sTUFBTSxDQUFDLHFCQUFxQixFQUFFLENBQUMsTUFBTSxDQUFDO0lBQ2pELENBQUM7SUFBQSxDQUFDO0lBRUYseURBQXlEOzs7Ozs7SUFDekQsNENBQWM7Ozs7OztJQUFkLFVBQWUsT0FBTzs7WUFDWixPQUFPLEdBQUcsT0FBTyxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLGVBQWUsQ0FBQzs7WUFDNUQsTUFBTSxHQUFHLE9BQU8sQ0FBQyxxQkFBcUIsRUFBRSxDQUFDLE1BQU07O1lBQ2pELE9BQU8sR0FBRyxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDOztZQUN6QyxhQUFhLEdBQUcsT0FBTyxDQUFDLGdCQUFnQixDQUFDLGdCQUFnQixDQUFDOztZQUMxRCxVQUFVLEdBQUcsT0FBTyxDQUFDLGdCQUFnQixDQUFDLGFBQWEsQ0FBQztRQUN4RCxPQUFPLE1BQU0sR0FBRyxVQUFVLENBQUMsYUFBYSxDQUFDLEdBQUcsVUFBVSxDQUFDLFVBQVUsQ0FBQyxDQUFBO0lBQ3RFLENBQUM7SUFBQSxDQUFDO0lBRUYsNkJBQTZCOzs7Ozs7SUFDN0IsMkNBQWE7Ozs7OztJQUFiLFVBQWMsT0FBTzs7WUFDWCxNQUFNLEdBQUcsT0FBTyxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLGNBQWMsQ0FBQztRQUNoRSxPQUFPLE1BQU0sQ0FBQyxxQkFBcUIsRUFBRSxDQUFDLE1BQU0sQ0FBQztJQUNqRCxDQUFDO0lBQUEsQ0FBQztJQUVGLGtDQUFrQzs7Ozs7O0lBQ2xDLDRDQUFjOzs7Ozs7SUFBZCxVQUFlLElBQUk7O1lBQ1gsUUFBUSxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsVUFBVSxDQUFDO1FBQ2pELFFBQVEsQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDO1FBQzFCLE9BQU8sUUFBUSxDQUFDLE9BQU8sQ0FBQyxVQUFVLENBQUM7SUFDdkMsQ0FBQzs7Z0JBaEhKLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsZ0JBQWdCO2lCQUMzQjs7OztnQkFOTyxXQUFXO2dCQUVWLGFBQWE7Z0JBSFksVUFBVTs7SUFzSDVDLDBCQUFDO0NBQUEsQUFqSEQsSUFpSEM7U0E5R1ksbUJBQW1COzs7SUFFaEMscUNBTUM7O0lBR0QscUNBUUU7O0lBRUEsaUNBQW9COzs7OztJQUVSLDJDQUFpQzs7Ozs7SUFBRSw2Q0FBcUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0FmdGVyVmlld0luaXQsIERpcmVjdGl2ZSwgRWxlbWVudFJlZn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7Wm9vbVNlcnZpY2V9IGZyb20gXCIuL3pvb20uc2VydmljZVwiO1xyXG5pbXBvcnQge0ZpbGVVdGlsfSBmcm9tIFwiLi9maWxlLnNlcnZpY2VcIjtcclxuaW1wb3J0IHsgV2luZG93U2VydmljZSB9IGZyb20gJy4vd2luZG93LnNlcnZpY2UnO1xyXG5cclxuQERpcmVjdGl2ZSh7XHJcbiAgc2VsZWN0b3I6ICdbZ2RQYWdlTWFya2VyXSdcclxufSlcclxuZXhwb3J0IGNsYXNzIFBhZ2VNYXJrZXJEaXJlY3RpdmUgaW1wbGVtZW50cyBBZnRlclZpZXdJbml0IHtcclxuXHJcbm5hbWluZyA9IHtcclxuICAgIHNlY3Rpb25TZWxlY3RvcjogXCJzZWN0aW9uLnNlY3Rpb25cIixcclxuICAgIG1hcmtlclNlbGVjdG9yOiBcInNwYW4ucGFnZThtYXJrZXJcIixcclxuICAgIGhlYWRlclNlbGVjdG9yOiBcImhlYWRlci5oZWFkZXJcIixcclxuICAgIGNvbnRlbnRTZWxlY3RvcjogXCJhcnRpY2xlLmNvbnRlbnRcIixcclxuICAgIGZvb3RlclNlbGVjdG9yOiBcImZvb3Rlci5mb290ZXJcIlxyXG59XHJcblxyXG4vLyBvYnNlcnZpbmcgY29uZmlndXJhdGlvbnMuXHJcbmNvbmZpZyA9IHtcclxuICAgIGF0dHJpYnV0ZXM6IHRydWUsXHJcbiAgICBhdHRyaWJ1dGVPbGRWYWx1ZTogdHJ1ZSxcclxuICAgIGNoaWxkTGlzdDogdHJ1ZSxcclxuICAgIHN1YnRyZWU6IHRydWUsXHJcbiAgICBjaGFyYWN0ZXJEYXRhOiB0cnVlLFxyXG4gICAgY2hhcmFjdGVyRGF0YU9sZFZhbHVlOiB0cnVlLFxyXG4gICAgYXR0cmlidXRlRmlsdGVyOiBbXCJzdHlsZVwiLCBcImNsYXNzXCJdXHJcbn07XHJcblxyXG4gIGVsOiBFbGVtZW50UmVmPGFueT47XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgX3pvb21TZXJ2aWNlOiBab29tU2VydmljZSwgcHJpdmF0ZSBfd2luZG93U2VydmljZTogV2luZG93U2VydmljZSwgZWw6IEVsZW1lbnRSZWYpIHtcclxuICAgIHRoaXMuZWwgPSBlbDtcclxuICB9XHJcblxyXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpOiB2b2lkIHtcclxuICAgIHZhciBzZWN0aW9ucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwodGhpcy5uYW1pbmcuc2VjdGlvblNlbGVjdG9yKTtcclxuXHJcbiAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgc2VjdGlvbnMubGVuZ3RoOyBpbmRleCsrKSB7XHJcbiAgICAgICAgLy8gZ2V0IHNlY3Rpb25cclxuICAgICAgICBjb25zdCBzZWN0aW9uID0gc2VjdGlvbnNbaW5kZXhdO1xyXG4gICAgICAgIC8vIHByb2Nlc3Mgc2VjdGlvbi4gYWRkIG1hcmtlcnMgdG8gdGhpcyBvbmUuXHJcbiAgICAgICAgdGhpcy5wcm9jZXNzU2VjdGlvbihzZWN0aW9uKTtcclxuICAgICAgICAvLyBDcmVhdGUgYW4gb2JzZXJ2ZXIgaW5zdGFuY2UgbGlua2VkIHRvIHRoZSBjYWxsYmFjayBmdW5jdGlvbi5cclxuICAgICAgICBjb25zdCBvYnNlcnZlciA9IG5ldyBNdXRhdGlvbk9ic2VydmVyKHRoaXMuY2FsbGJhY2suYmluZCh0aGlzKSk7XHJcbiAgICAgICAgLy8gU3RhcnQgb2JzZXJ2aW5nIHRoZSB0YXJnZXQgc2VjdGlvbnMgZm9yIGNvbmZpZ3VyZWQgbXV0YXRpb25zLlxyXG4gICAgICAgIG9ic2VydmVyLm9ic2VydmUoc2VjdGlvbiwgdGhpcy5jb25maWcpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLy8gQ2FsbGJhY2sgZnVuY3Rpb24gdG8gZXhlY3V0ZSB3aGVuIG11dGF0aW9ucyBhcmUgb2JzZXJ2ZWQuXHJcbmNhbGxiYWNrKG11dGF0aW9uc0xpc3QsIG9ic2VydmVyKSB7XHJcbiAgICAvLyBnZXQgZmlyc3QgTXV0YXRpb25SZWNvcmQgZnJvbSBsaXN0LlxyXG4gICAgY29uc3QgbXV0YXRpb25GaXJzdCA9IG11dGF0aW9uc0xpc3RbMF07XHJcbiAgICAvLyBnZXQgcGFyZW50IHNlY3Rpb24uXHJcbiAgICBsZXQgdGFyZ2V0ID0gbXV0YXRpb25GaXJzdC50YXJnZXQucGFyZW50Tm9kZS5jbG9zZXN0KHRoaXMubmFtaW5nLnNlY3Rpb25TZWxlY3Rvcik7XHJcbiAgICBpZiAodGFyZ2V0ID09PSBudWxsIHx8IHRhcmdldCA9PT0gXCJ1bmRlZmluZWRcIikge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIC8vIHJlbW92ZSBhbGwgbWFya2VycyBpbiB0aGUgY3VycmVudCBzZWN0aW9uLlxyXG4gICAgdGFyZ2V0LnF1ZXJ5U2VsZWN0b3JBbGwodGhpcy5uYW1pbmcubWFya2VyU2VsZWN0b3IpLmZvckVhY2goZWxlbWVudCA9PiB7XHJcbiAgICAgICAgZWxlbWVudC5yZW1vdmUoKTtcclxuICAgIH0pXHJcbiAgICAvLyBhZGQgbWFya2VyIHRvIHRhcmdldCBzZWN0aW9ucy5cclxuICAgIHRoaXMucHJvY2Vzc1NlY3Rpb24odGFyZ2V0KTtcclxuICAgIC8vIGEgbGlzdCBvZiBhbGwgbWF0Y2hpbmcgRE9NIGNoYW5nZXMgdGhhdCBoYXZlIGJlZW4gZGV0ZWN0ZWQgYnV0IG5vdCB5ZXQgcHJvY2Vzc2VkIGJ5IHRoZSBvYnNlcnZlcidzIGNhbGxiYWNrIGZ1bmN0aW9uLCBsZWF2aW5nIHRoZSBtdXRhdGlvbiBxdWV1ZSBlbXB0eS5cclxuICAgIC8vIE1BSU4gUkVBU09OIC0gbGVhdmluZyB0aGUgbXV0YXRpb24gcXVldWUgZW1wdHkuIFxyXG4gICAgY29uc3QgbGVzdCA9IG9ic2VydmVyLnRha2VSZWNvcmRzKCk7XHJcbn07XHJcblxyXG4gIHByb2Nlc3NTZWN0aW9uKHNlY3Rpb24pIHtcclxuICAgIGNvbnN0IGhlYWRlckhlaWdodCA9IHRoaXMucHJvY2Vzc0hlYWRlcihzZWN0aW9uKTtcclxuICAgIGNvbnN0IGZvb3RlckhlaWdodCA9IHRoaXMucHJvY2Vzc0Zvb3RlcihzZWN0aW9uKTtcclxuICAgIC8vIGdldCBtYXggcGFnZSBoZWlnaHQgLSBmcm9tIGNzcyAncGFnaW5hbC5jc3MnXHJcbiAgICBjb25zdCBzdHlsaW5nID0gZ2V0Q29tcHV0ZWRTdHlsZShzZWN0aW9uLCBudWxsKTtcclxuICAgIGxldCBtaW5IZWlnaHQgPSBzdHlsaW5nLmdldFByb3BlcnR5VmFsdWUoJ21pbi1oZWlnaHQnKTtcclxuICAgIGNvbnN0IG1pbkhlaWdodE51bWJlciA9IHBhcnNlRmxvYXQobWluSGVpZ2h0KTtcclxuICAgIGNvbnN0IGNvbnRlbnRIZWlnaHQgPSBtaW5IZWlnaHROdW1iZXIgLSBoZWFkZXJIZWlnaHQgLSBmb290ZXJIZWlnaHQ7XHJcbiAgICBjb25zdCByZWFsSGVpZ2h0ID0gdGhpcy5wcm9jZXNzQ29udGVudChzZWN0aW9uKTtcclxuICAgIGxldCBlbmRQYWdlQ29vcmRpbmF0ZSA9IGNvbnRlbnRIZWlnaHQ7XHJcbiAgICB3aGlsZSAoZW5kUGFnZUNvb3JkaW5hdGUgPCByZWFsSGVpZ2h0KSB7XHJcbiAgICAgICAgbGV0IG1hcmtlciA9IHRoaXMuaHRtbFRvRWxlbWVudHMoXCI8c3BhbiBjbGFzcz0ncGFnZThtYXJrZXInIHN0eWxlPSd0b3A6XCIgKyBNYXRoLmNlaWwoZW5kUGFnZUNvb3JkaW5hdGUpICtcclxuICAgICAgICAgICAgXCJweDsnPjwvc3Bhbj5cIik7XHJcbiAgICAgICAgbWFya2VyLmZvckVhY2goaXRlbSA9PiB7XHJcbiAgICAgICAgICAgIHNlY3Rpb24uYXBwZW5kQ2hpbGQoaXRlbSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgZW5kUGFnZUNvb3JkaW5hdGUgKz0gY29udGVudEhlaWdodDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8vIGNhbGN1bGF0ZSBoZWFkZXIncyBoZWlnaHQuXHJcbiAgICBwcm9jZXNzSGVhZGVyKHNlY3Rpb24pIHtcclxuICAgICAgICBjb25zdCBoZWFkZXIgPSBzZWN0aW9uLnF1ZXJ5U2VsZWN0b3IodGhpcy5uYW1pbmcuaGVhZGVyU2VsZWN0b3IpO1xyXG4gICAgICAgIHJldHVybiBoZWFkZXIuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkuaGVpZ2h0O1xyXG4gICAgfTtcclxuXHJcbiAgICAvLyBjYWxjdWxhdGUgcmVhbCBoZWlnaHQgb2YgdGhlIGNvbnRlbnQuIHdpdGhvdXQgcGFkZGluZy5cclxuICAgIHByb2Nlc3NDb250ZW50KHNlY3Rpb24pIHtcclxuICAgICAgICBjb25zdCBjb250ZW50ID0gc2VjdGlvbi5xdWVyeVNlbGVjdG9yKHRoaXMubmFtaW5nLmNvbnRlbnRTZWxlY3Rvcik7XHJcbiAgICAgICAgY29uc3QgaGVpZ2h0ID0gY29udGVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS5oZWlnaHQ7XHJcbiAgICAgICAgdmFyIHN0eWxpbmcgPSBnZXRDb21wdXRlZFN0eWxlKGNvbnRlbnQsIG51bGwpO1xyXG4gICAgICAgIHZhciBwYWRkaW5nQm90dG9tID0gc3R5bGluZy5nZXRQcm9wZXJ0eVZhbHVlKCdwYWRkaW5nLWJvdHRvbScpO1xyXG4gICAgICAgIHZhciBwYWRkaW5nVG9wID0gc3R5bGluZy5nZXRQcm9wZXJ0eVZhbHVlKCdwYWRkaW5nLXRvcCcpO1xyXG4gICAgICAgIHJldHVybiBoZWlnaHQgLSBwYXJzZUZsb2F0KHBhZGRpbmdCb3R0b20pIC0gcGFyc2VGbG9hdChwYWRkaW5nVG9wKVxyXG4gICAgfTtcclxuXHJcbiAgICAvLyBjYWxjdWxhdGUgZm9vdGVyJ3MgaGVpZ2h0LlxyXG4gICAgcHJvY2Vzc0Zvb3RlcihzZWN0aW9uKSB7XHJcbiAgICAgICAgY29uc3QgZm9vdGVyID0gc2VjdGlvbi5xdWVyeVNlbGVjdG9yKHRoaXMubmFtaW5nLmZvb3RlclNlbGVjdG9yKTtcclxuICAgICAgICByZXR1cm4gZm9vdGVyLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLmhlaWdodDtcclxuICAgIH07XHJcblxyXG4gICAgLy8gY3JlYXRlIGRvbSBlbGVtZW50IGZyb20gc3RyaW5nLlxyXG4gICAgaHRtbFRvRWxlbWVudHMoaHRtbCkge1xyXG4gICAgICAgIHZhciB0ZW1wbGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RlbXBsYXRlJyk7XHJcbiAgICAgICAgdGVtcGxhdGUuaW5uZXJIVE1MID0gaHRtbDtcclxuICAgICAgICByZXR1cm4gdGVtcGxhdGUuY29udGVudC5jaGlsZE5vZGVzO1xyXG4gICAgfVxyXG59Il19