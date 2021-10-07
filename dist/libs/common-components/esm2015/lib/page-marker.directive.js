/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Directive, ElementRef } from '@angular/core';
import { ZoomService } from "./zoom.service";
import { WindowService } from './window.service';
export class PageMarkerDirective {
    /**
     * @param {?} _zoomService
     * @param {?} _windowService
     * @param {?} el
     */
    constructor(_zoomService, _windowService, el) {
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
    ngAfterViewInit() {
        /** @type {?} */
        const sections = document.querySelectorAll(this.naming.sectionSelector);
        for (let index = 0; index < sections.length; index++) {
            // get section
            /** @type {?} */
            const section = sections[index];
            // process section. add markers to this one.
            this.processSection(section);
            // Create an observer instance linked to the callback function.
            /** @type {?} */
            const observer = new MutationObserver(this.callback.bind(this));
            // Start observing the target sections for configured mutations.
            observer.observe(section, this.config);
        }
    }
    // Callback function to execute when mutations are observed.
    /**
     * @param {?} mutationsList
     * @param {?} observer
     * @return {?}
     */
    callback(mutationsList, observer) {
        // get first MutationRecord from list.
        /** @type {?} */
        const mutationFirst = mutationsList[0];
        // get parent section.
        /** @type {?} */
        const parentNode = mutationFirst.target.parentNode;
        if (parentNode) {
            /** @type {?} */
            const target = mutationFirst.target.parentNode.closest(this.naming.sectionSelector);
            if (target === null || target === "undefined") {
                return;
            }
            // remove all markers in the current section.
            target.querySelectorAll(this.naming.markerSelector).forEach((/**
             * @param {?} element
             * @return {?}
             */
            element => {
                element.remove();
            }));
            // add marker to target sections.
            this.processSection(target);
            // a list of all matching DOM changes that have been detected but not yet processed by the observer's callback function, leaving the mutation queue empty.
            // MAIN REASON - leaving the mutation queue empty. 
            /** @type {?} */
            const lest = observer.takeRecords();
        }
    }
    ;
    /**
     * @param {?} section
     * @return {?}
     */
    processSection(section) {
        /** @type {?} */
        const headerHeight = this.processHeader(section);
        /** @type {?} */
        const footerHeight = this.processFooter(section);
        // get max page height - from css 'paginal.css'
        /** @type {?} */
        const styling = getComputedStyle(section, null);
        /** @type {?} */
        const minHeight = styling.getPropertyValue('min-height');
        /** @type {?} */
        const minHeightNumber = parseFloat(minHeight);
        /** @type {?} */
        const contentHeight = minHeightNumber - headerHeight - footerHeight;
        /** @type {?} */
        const realHeight = this.processContent(section);
        /** @type {?} */
        let endPageCoordinate = contentHeight;
        while (endPageCoordinate < realHeight) {
            /** @type {?} */
            const marker = this.htmlToElements("<span class='page8marker' style='top:" + Math.ceil(endPageCoordinate) +
                "px;'></span>");
            marker.forEach((/**
             * @param {?} item
             * @return {?}
             */
            item => {
                section.appendChild(item);
            }));
            endPageCoordinate += contentHeight;
        }
    }
    // calculate header's height.
    /**
     * @param {?} section
     * @return {?}
     */
    processHeader(section) {
        /** @type {?} */
        const header = section.querySelector(this.naming.headerSelector);
        return header.getBoundingClientRect().height;
    }
    ;
    // calculate real height of the content. without padding.
    /**
     * @param {?} section
     * @return {?}
     */
    processContent(section) {
        /** @type {?} */
        const content = section.querySelector(this.naming.contentSelector);
        /** @type {?} */
        const height = content.getBoundingClientRect().height;
        /** @type {?} */
        const styling = getComputedStyle(content, null);
        /** @type {?} */
        const paddingBottom = styling.getPropertyValue('padding-bottom');
        /** @type {?} */
        const paddingTop = styling.getPropertyValue('padding-top');
        return height - parseFloat(paddingBottom) - parseFloat(paddingTop);
    }
    ;
    // calculate footer's height.
    /**
     * @param {?} section
     * @return {?}
     */
    processFooter(section) {
        /** @type {?} */
        const footer = section.querySelector(this.naming.footerSelector);
        return footer.getBoundingClientRect().height;
    }
    ;
    // create dom element from string.
    /**
     * @param {?} html
     * @return {?}
     */
    htmlToElements(html) {
        /** @type {?} */
        const template = document.createElement('template');
        template.innerHTML = html;
        return template.content.childNodes;
    }
}
PageMarkerDirective.decorators = [
    { type: Directive, args: [{
                selector: '[gdPageMarker]'
            },] }
];
/** @nocollapse */
PageMarkerDirective.ctorParameters = () => [
    { type: ZoomService },
    { type: WindowService },
    { type: ElementRef }
];
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZS1tYXJrZXIuZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdyb3VwZG9jcy5leGFtcGxlcy5hbmd1bGFyL2NvbW1vbi1jb21wb25lbnRzLyIsInNvdXJjZXMiOlsibGliL3BhZ2UtbWFya2VyLmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFnQixTQUFTLEVBQUUsVUFBVSxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQ25FLE9BQU8sRUFBQyxXQUFXLEVBQUMsTUFBTSxnQkFBZ0IsQ0FBQztBQUUzQyxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sa0JBQWtCLENBQUM7QUFLakQsTUFBTSxPQUFPLG1CQUFtQjs7Ozs7O0lBdUI5QixZQUFvQixZQUF5QixFQUFVLGNBQTZCLEVBQUUsRUFBYztRQUFoRixpQkFBWSxHQUFaLFlBQVksQ0FBYTtRQUFVLG1CQUFjLEdBQWQsY0FBYyxDQUFlO1FBckJ0RixXQUFNLEdBQUc7WUFDTCxlQUFlLEVBQUUsaUJBQWlCO1lBQ2xDLGNBQWMsRUFBRSxrQkFBa0I7WUFDbEMsY0FBYyxFQUFFLGVBQWU7WUFDL0IsZUFBZSxFQUFFLGlCQUFpQjtZQUNsQyxjQUFjLEVBQUUsZUFBZTtTQUNsQyxDQUFBOztRQUdELFdBQU0sR0FBRztZQUNMLFVBQVUsRUFBRSxJQUFJO1lBQ2hCLGlCQUFpQixFQUFFLElBQUk7WUFDdkIsU0FBUyxFQUFFLElBQUk7WUFDZixPQUFPLEVBQUUsSUFBSTtZQUNiLGFBQWEsRUFBRSxJQUFJO1lBQ25CLHFCQUFxQixFQUFFLElBQUk7WUFDM0IsZUFBZSxFQUFFLENBQUMsT0FBTyxFQUFFLE9BQU8sQ0FBQztTQUN0QyxDQUFDO1FBS0UsSUFBSSxDQUFDLEVBQUUsR0FBRyxFQUFFLENBQUM7SUFDZixDQUFDOzs7O0lBRUQsZUFBZTs7Y0FDUCxRQUFRLEdBQUcsUUFBUSxDQUFDLGdCQUFnQixDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsZUFBZSxDQUFDO1FBRXZFLEtBQUssSUFBSSxLQUFLLEdBQUcsQ0FBQyxFQUFFLEtBQUssR0FBRyxRQUFRLENBQUMsTUFBTSxFQUFFLEtBQUssRUFBRSxFQUFFOzs7a0JBRTVDLE9BQU8sR0FBRyxRQUFRLENBQUMsS0FBSyxDQUFDO1lBQy9CLDRDQUE0QztZQUM1QyxJQUFJLENBQUMsY0FBYyxDQUFDLE9BQU8sQ0FBQyxDQUFDOzs7a0JBRXZCLFFBQVEsR0FBRyxJQUFJLGdCQUFnQixDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQy9ELGdFQUFnRTtZQUNoRSxRQUFRLENBQUMsT0FBTyxDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7U0FDMUM7SUFDSCxDQUFDOzs7Ozs7O0lBR0gsUUFBUSxDQUFDLGFBQWEsRUFBRSxRQUFROzs7Y0FFdEIsYUFBYSxHQUFHLGFBQWEsQ0FBQyxDQUFDLENBQUM7OztjQUVoQyxVQUFVLEdBQUcsYUFBYSxDQUFDLE1BQU0sQ0FBQyxVQUFVO1FBQ2xELElBQUksVUFBVSxFQUFFOztrQkFDTixNQUFNLEdBQUcsYUFBYSxDQUFDLE1BQU0sQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsZUFBZSxDQUFDO1lBQ25GLElBQUksTUFBTSxLQUFLLElBQUksSUFBSSxNQUFNLEtBQUssV0FBVyxFQUFFO2dCQUMzQyxPQUFPO2FBQ1Y7WUFDRCw2Q0FBNkM7WUFDN0MsTUFBTSxDQUFDLGdCQUFnQixDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsY0FBYyxDQUFDLENBQUMsT0FBTzs7OztZQUFDLE9BQU8sQ0FBQyxFQUFFO2dCQUNsRSxPQUFPLENBQUMsTUFBTSxFQUFFLENBQUM7WUFDckIsQ0FBQyxFQUFDLENBQUE7WUFDRixpQ0FBaUM7WUFDakMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxNQUFNLENBQUMsQ0FBQzs7OztrQkFHdEIsSUFBSSxHQUFHLFFBQVEsQ0FBQyxXQUFXLEVBQUU7U0FDdEM7SUFDTCxDQUFDO0lBQUEsQ0FBQzs7Ozs7SUFFQSxjQUFjLENBQUMsT0FBTzs7Y0FDZCxZQUFZLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQUM7O2NBQzFDLFlBQVksR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FBQzs7O2NBRTFDLE9BQU8sR0FBRyxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDOztjQUN6QyxTQUFTLEdBQUcsT0FBTyxDQUFDLGdCQUFnQixDQUFDLFlBQVksQ0FBQzs7Y0FDbEQsZUFBZSxHQUFHLFVBQVUsQ0FBQyxTQUFTLENBQUM7O2NBQ3ZDLGFBQWEsR0FBRyxlQUFlLEdBQUcsWUFBWSxHQUFHLFlBQVk7O2NBQzdELFVBQVUsR0FBRyxJQUFJLENBQUMsY0FBYyxDQUFDLE9BQU8sQ0FBQzs7WUFDM0MsaUJBQWlCLEdBQUcsYUFBYTtRQUNyQyxPQUFPLGlCQUFpQixHQUFHLFVBQVUsRUFBRTs7a0JBQzdCLE1BQU0sR0FBRyxJQUFJLENBQUMsY0FBYyxDQUFDLHVDQUF1QyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsaUJBQWlCLENBQUM7Z0JBQ3JHLGNBQWMsQ0FBQztZQUNuQixNQUFNLENBQUMsT0FBTzs7OztZQUFDLElBQUksQ0FBQyxFQUFFO2dCQUNsQixPQUFPLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQzlCLENBQUMsRUFBQyxDQUFDO1lBQ0gsaUJBQWlCLElBQUksYUFBYSxDQUFDO1NBQ3RDO0lBQ0gsQ0FBQzs7Ozs7O0lBR0MsYUFBYSxDQUFDLE9BQU87O2NBQ1gsTUFBTSxHQUFHLE9BQU8sQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxjQUFjLENBQUM7UUFDaEUsT0FBTyxNQUFNLENBQUMscUJBQXFCLEVBQUUsQ0FBQyxNQUFNLENBQUM7SUFDakQsQ0FBQztJQUFBLENBQUM7Ozs7OztJQUdGLGNBQWMsQ0FBQyxPQUFPOztjQUNaLE9BQU8sR0FBRyxPQUFPLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsZUFBZSxDQUFDOztjQUM1RCxNQUFNLEdBQUcsT0FBTyxDQUFDLHFCQUFxQixFQUFFLENBQUMsTUFBTTs7Y0FDL0MsT0FBTyxHQUFHLGdCQUFnQixDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUM7O2NBQ3pDLGFBQWEsR0FBRyxPQUFPLENBQUMsZ0JBQWdCLENBQUMsZ0JBQWdCLENBQUM7O2NBQzFELFVBQVUsR0FBRyxPQUFPLENBQUMsZ0JBQWdCLENBQUMsYUFBYSxDQUFDO1FBQzFELE9BQU8sTUFBTSxHQUFHLFVBQVUsQ0FBQyxhQUFhLENBQUMsR0FBRyxVQUFVLENBQUMsVUFBVSxDQUFDLENBQUE7SUFDdEUsQ0FBQztJQUFBLENBQUM7Ozs7OztJQUdGLGFBQWEsQ0FBQyxPQUFPOztjQUNYLE1BQU0sR0FBRyxPQUFPLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsY0FBYyxDQUFDO1FBQ2hFLE9BQU8sTUFBTSxDQUFDLHFCQUFxQixFQUFFLENBQUMsTUFBTSxDQUFDO0lBQ2pELENBQUM7SUFBQSxDQUFDOzs7Ozs7SUFHRixjQUFjLENBQUMsSUFBSTs7Y0FDVCxRQUFRLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxVQUFVLENBQUM7UUFDbkQsUUFBUSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUM7UUFDMUIsT0FBTyxRQUFRLENBQUMsT0FBTyxDQUFDLFVBQVUsQ0FBQztJQUN2QyxDQUFDOzs7WUFuSEosU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxnQkFBZ0I7YUFDM0I7Ozs7WUFOTyxXQUFXO1lBRVYsYUFBYTtZQUhZLFVBQVU7Ozs7SUFVNUMscUNBTUM7O0lBR0QscUNBUUU7O0lBRUEsaUNBQW9COzs7OztJQUVSLDJDQUFpQzs7Ozs7SUFBRSw2Q0FBcUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0FmdGVyVmlld0luaXQsIERpcmVjdGl2ZSwgRWxlbWVudFJlZn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge1pvb21TZXJ2aWNlfSBmcm9tIFwiLi96b29tLnNlcnZpY2VcIjtcbmltcG9ydCB7RmlsZVV0aWx9IGZyb20gXCIuL2ZpbGUuc2VydmljZVwiO1xuaW1wb3J0IHsgV2luZG93U2VydmljZSB9IGZyb20gJy4vd2luZG93LnNlcnZpY2UnO1xuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdbZ2RQYWdlTWFya2VyXSdcbn0pXG5leHBvcnQgY2xhc3MgUGFnZU1hcmtlckRpcmVjdGl2ZSBpbXBsZW1lbnRzIEFmdGVyVmlld0luaXQge1xuXG5uYW1pbmcgPSB7XG4gICAgc2VjdGlvblNlbGVjdG9yOiBcInNlY3Rpb24uc2VjdGlvblwiLFxuICAgIG1hcmtlclNlbGVjdG9yOiBcInNwYW4ucGFnZThtYXJrZXJcIixcbiAgICBoZWFkZXJTZWxlY3RvcjogXCJoZWFkZXIuaGVhZGVyXCIsXG4gICAgY29udGVudFNlbGVjdG9yOiBcImFydGljbGUuY29udGVudFwiLFxuICAgIGZvb3RlclNlbGVjdG9yOiBcImZvb3Rlci5mb290ZXJcIlxufVxuXG4vLyBvYnNlcnZpbmcgY29uZmlndXJhdGlvbnMuXG5jb25maWcgPSB7XG4gICAgYXR0cmlidXRlczogdHJ1ZSxcbiAgICBhdHRyaWJ1dGVPbGRWYWx1ZTogdHJ1ZSxcbiAgICBjaGlsZExpc3Q6IHRydWUsXG4gICAgc3VidHJlZTogdHJ1ZSxcbiAgICBjaGFyYWN0ZXJEYXRhOiB0cnVlLFxuICAgIGNoYXJhY3RlckRhdGFPbGRWYWx1ZTogdHJ1ZSxcbiAgICBhdHRyaWJ1dGVGaWx0ZXI6IFtcInN0eWxlXCIsIFwiY2xhc3NcIl1cbn07XG5cbiAgZWw6IEVsZW1lbnRSZWY8YW55PjtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIF96b29tU2VydmljZTogWm9vbVNlcnZpY2UsIHByaXZhdGUgX3dpbmRvd1NlcnZpY2U6IFdpbmRvd1NlcnZpY2UsIGVsOiBFbGVtZW50UmVmKSB7XG4gICAgdGhpcy5lbCA9IGVsO1xuICB9XG5cbiAgbmdBZnRlclZpZXdJbml0KCk6IHZvaWQge1xuICAgIGNvbnN0IHNlY3Rpb25zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCh0aGlzLm5hbWluZy5zZWN0aW9uU2VsZWN0b3IpO1xuXG4gICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IHNlY3Rpb25zLmxlbmd0aDsgaW5kZXgrKykge1xuICAgICAgICAvLyBnZXQgc2VjdGlvblxuICAgICAgICBjb25zdCBzZWN0aW9uID0gc2VjdGlvbnNbaW5kZXhdO1xuICAgICAgICAvLyBwcm9jZXNzIHNlY3Rpb24uIGFkZCBtYXJrZXJzIHRvIHRoaXMgb25lLlxuICAgICAgICB0aGlzLnByb2Nlc3NTZWN0aW9uKHNlY3Rpb24pO1xuICAgICAgICAvLyBDcmVhdGUgYW4gb2JzZXJ2ZXIgaW5zdGFuY2UgbGlua2VkIHRvIHRoZSBjYWxsYmFjayBmdW5jdGlvbi5cbiAgICAgICAgY29uc3Qgb2JzZXJ2ZXIgPSBuZXcgTXV0YXRpb25PYnNlcnZlcih0aGlzLmNhbGxiYWNrLmJpbmQodGhpcykpO1xuICAgICAgICAvLyBTdGFydCBvYnNlcnZpbmcgdGhlIHRhcmdldCBzZWN0aW9ucyBmb3IgY29uZmlndXJlZCBtdXRhdGlvbnMuXG4gICAgICAgIG9ic2VydmVyLm9ic2VydmUoc2VjdGlvbiwgdGhpcy5jb25maWcpO1xuICAgIH1cbiAgfVxuXG4gIC8vIENhbGxiYWNrIGZ1bmN0aW9uIHRvIGV4ZWN1dGUgd2hlbiBtdXRhdGlvbnMgYXJlIG9ic2VydmVkLlxuY2FsbGJhY2sobXV0YXRpb25zTGlzdCwgb2JzZXJ2ZXIpIHtcbiAgICAvLyBnZXQgZmlyc3QgTXV0YXRpb25SZWNvcmQgZnJvbSBsaXN0LlxuICAgIGNvbnN0IG11dGF0aW9uRmlyc3QgPSBtdXRhdGlvbnNMaXN0WzBdO1xuICAgIC8vIGdldCBwYXJlbnQgc2VjdGlvbi5cbiAgICBjb25zdCBwYXJlbnROb2RlID0gbXV0YXRpb25GaXJzdC50YXJnZXQucGFyZW50Tm9kZTtcbiAgICBpZiAocGFyZW50Tm9kZSkge1xuICAgICAgICBjb25zdCB0YXJnZXQgPSBtdXRhdGlvbkZpcnN0LnRhcmdldC5wYXJlbnROb2RlLmNsb3Nlc3QodGhpcy5uYW1pbmcuc2VjdGlvblNlbGVjdG9yKTtcbiAgICAgICAgaWYgKHRhcmdldCA9PT0gbnVsbCB8fCB0YXJnZXQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICAvLyByZW1vdmUgYWxsIG1hcmtlcnMgaW4gdGhlIGN1cnJlbnQgc2VjdGlvbi5cbiAgICAgICAgdGFyZ2V0LnF1ZXJ5U2VsZWN0b3JBbGwodGhpcy5uYW1pbmcubWFya2VyU2VsZWN0b3IpLmZvckVhY2goZWxlbWVudCA9PiB7XG4gICAgICAgICAgICBlbGVtZW50LnJlbW92ZSgpO1xuICAgICAgICB9KVxuICAgICAgICAvLyBhZGQgbWFya2VyIHRvIHRhcmdldCBzZWN0aW9ucy5cbiAgICAgICAgdGhpcy5wcm9jZXNzU2VjdGlvbih0YXJnZXQpO1xuICAgICAgICAvLyBhIGxpc3Qgb2YgYWxsIG1hdGNoaW5nIERPTSBjaGFuZ2VzIHRoYXQgaGF2ZSBiZWVuIGRldGVjdGVkIGJ1dCBub3QgeWV0IHByb2Nlc3NlZCBieSB0aGUgb2JzZXJ2ZXIncyBjYWxsYmFjayBmdW5jdGlvbiwgbGVhdmluZyB0aGUgbXV0YXRpb24gcXVldWUgZW1wdHkuXG4gICAgICAgIC8vIE1BSU4gUkVBU09OIC0gbGVhdmluZyB0aGUgbXV0YXRpb24gcXVldWUgZW1wdHkuIFxuICAgICAgICBjb25zdCBsZXN0ID0gb2JzZXJ2ZXIudGFrZVJlY29yZHMoKTtcbiAgICB9XG59O1xuXG4gIHByb2Nlc3NTZWN0aW9uKHNlY3Rpb24pIHtcbiAgICBjb25zdCBoZWFkZXJIZWlnaHQgPSB0aGlzLnByb2Nlc3NIZWFkZXIoc2VjdGlvbik7XG4gICAgY29uc3QgZm9vdGVySGVpZ2h0ID0gdGhpcy5wcm9jZXNzRm9vdGVyKHNlY3Rpb24pO1xuICAgIC8vIGdldCBtYXggcGFnZSBoZWlnaHQgLSBmcm9tIGNzcyAncGFnaW5hbC5jc3MnXG4gICAgY29uc3Qgc3R5bGluZyA9IGdldENvbXB1dGVkU3R5bGUoc2VjdGlvbiwgbnVsbCk7XG4gICAgY29uc3QgbWluSGVpZ2h0ID0gc3R5bGluZy5nZXRQcm9wZXJ0eVZhbHVlKCdtaW4taGVpZ2h0Jyk7XG4gICAgY29uc3QgbWluSGVpZ2h0TnVtYmVyID0gcGFyc2VGbG9hdChtaW5IZWlnaHQpO1xuICAgIGNvbnN0IGNvbnRlbnRIZWlnaHQgPSBtaW5IZWlnaHROdW1iZXIgLSBoZWFkZXJIZWlnaHQgLSBmb290ZXJIZWlnaHQ7XG4gICAgY29uc3QgcmVhbEhlaWdodCA9IHRoaXMucHJvY2Vzc0NvbnRlbnQoc2VjdGlvbik7XG4gICAgbGV0IGVuZFBhZ2VDb29yZGluYXRlID0gY29udGVudEhlaWdodDtcbiAgICB3aGlsZSAoZW5kUGFnZUNvb3JkaW5hdGUgPCByZWFsSGVpZ2h0KSB7XG4gICAgICAgIGNvbnN0IG1hcmtlciA9IHRoaXMuaHRtbFRvRWxlbWVudHMoXCI8c3BhbiBjbGFzcz0ncGFnZThtYXJrZXInIHN0eWxlPSd0b3A6XCIgKyBNYXRoLmNlaWwoZW5kUGFnZUNvb3JkaW5hdGUpICtcbiAgICAgICAgICAgIFwicHg7Jz48L3NwYW4+XCIpO1xuICAgICAgICBtYXJrZXIuZm9yRWFjaChpdGVtID0+IHtcbiAgICAgICAgICAgIHNlY3Rpb24uYXBwZW5kQ2hpbGQoaXRlbSk7XG4gICAgICAgIH0pO1xuICAgICAgICBlbmRQYWdlQ29vcmRpbmF0ZSArPSBjb250ZW50SGVpZ2h0O1xuICAgIH1cbiAgfVxuXG4gIC8vIGNhbGN1bGF0ZSBoZWFkZXIncyBoZWlnaHQuXG4gICAgcHJvY2Vzc0hlYWRlcihzZWN0aW9uKSB7XG4gICAgICAgIGNvbnN0IGhlYWRlciA9IHNlY3Rpb24ucXVlcnlTZWxlY3Rvcih0aGlzLm5hbWluZy5oZWFkZXJTZWxlY3Rvcik7XG4gICAgICAgIHJldHVybiBoZWFkZXIuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkuaGVpZ2h0O1xuICAgIH07XG5cbiAgICAvLyBjYWxjdWxhdGUgcmVhbCBoZWlnaHQgb2YgdGhlIGNvbnRlbnQuIHdpdGhvdXQgcGFkZGluZy5cbiAgICBwcm9jZXNzQ29udGVudChzZWN0aW9uKSB7XG4gICAgICAgIGNvbnN0IGNvbnRlbnQgPSBzZWN0aW9uLnF1ZXJ5U2VsZWN0b3IodGhpcy5uYW1pbmcuY29udGVudFNlbGVjdG9yKTtcbiAgICAgICAgY29uc3QgaGVpZ2h0ID0gY29udGVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS5oZWlnaHQ7XG4gICAgICAgIGNvbnN0IHN0eWxpbmcgPSBnZXRDb21wdXRlZFN0eWxlKGNvbnRlbnQsIG51bGwpO1xuICAgICAgICBjb25zdCBwYWRkaW5nQm90dG9tID0gc3R5bGluZy5nZXRQcm9wZXJ0eVZhbHVlKCdwYWRkaW5nLWJvdHRvbScpO1xuICAgICAgICBjb25zdCBwYWRkaW5nVG9wID0gc3R5bGluZy5nZXRQcm9wZXJ0eVZhbHVlKCdwYWRkaW5nLXRvcCcpO1xuICAgICAgICByZXR1cm4gaGVpZ2h0IC0gcGFyc2VGbG9hdChwYWRkaW5nQm90dG9tKSAtIHBhcnNlRmxvYXQocGFkZGluZ1RvcClcbiAgICB9O1xuXG4gICAgLy8gY2FsY3VsYXRlIGZvb3RlcidzIGhlaWdodC5cbiAgICBwcm9jZXNzRm9vdGVyKHNlY3Rpb24pIHtcbiAgICAgICAgY29uc3QgZm9vdGVyID0gc2VjdGlvbi5xdWVyeVNlbGVjdG9yKHRoaXMubmFtaW5nLmZvb3RlclNlbGVjdG9yKTtcbiAgICAgICAgcmV0dXJuIGZvb3Rlci5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS5oZWlnaHQ7XG4gICAgfTtcblxuICAgIC8vIGNyZWF0ZSBkb20gZWxlbWVudCBmcm9tIHN0cmluZy5cbiAgICBodG1sVG9FbGVtZW50cyhodG1sKSB7XG4gICAgICAgIGNvbnN0IHRlbXBsYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGVtcGxhdGUnKTtcbiAgICAgICAgdGVtcGxhdGUuaW5uZXJIVE1MID0gaHRtbDtcbiAgICAgICAgcmV0dXJuIHRlbXBsYXRlLmNvbnRlbnQuY2hpbGROb2RlcztcbiAgICB9XG59Il19