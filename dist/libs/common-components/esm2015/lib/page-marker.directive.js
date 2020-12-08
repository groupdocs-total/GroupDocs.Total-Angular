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
        var sections = document.querySelectorAll(this.naming.sectionSelector);
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
        let target = mutationFirst.target.parentNode.closest(this.naming.sectionSelector);
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
        let minHeight = styling.getPropertyValue('min-height');
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
            let marker = this.htmlToElements("<span class='page8marker' style='top:" + Math.ceil(endPageCoordinate) +
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
        var styling = getComputedStyle(content, null);
        /** @type {?} */
        var paddingBottom = styling.getPropertyValue('padding-bottom');
        /** @type {?} */
        var paddingTop = styling.getPropertyValue('padding-top');
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
        var template = document.createElement('template');
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZS1tYXJrZXIuZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdyb3VwZG9jcy5leGFtcGxlcy5hbmd1bGFyL2NvbW1vbi1jb21wb25lbnRzLyIsInNvdXJjZXMiOlsibGliL3BhZ2UtbWFya2VyLmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFnQixTQUFTLEVBQUUsVUFBVSxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQ25FLE9BQU8sRUFBQyxXQUFXLEVBQUMsTUFBTSxnQkFBZ0IsQ0FBQztBQUUzQyxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sa0JBQWtCLENBQUM7QUFLakQsTUFBTSxPQUFPLG1CQUFtQjs7Ozs7O0lBdUI5QixZQUFvQixZQUF5QixFQUFVLGNBQTZCLEVBQUUsRUFBYztRQUFoRixpQkFBWSxHQUFaLFlBQVksQ0FBYTtRQUFVLG1CQUFjLEdBQWQsY0FBYyxDQUFlO1FBckJ0RixXQUFNLEdBQUc7WUFDTCxlQUFlLEVBQUUsaUJBQWlCO1lBQ2xDLGNBQWMsRUFBRSxrQkFBa0I7WUFDbEMsY0FBYyxFQUFFLGVBQWU7WUFDL0IsZUFBZSxFQUFFLGlCQUFpQjtZQUNsQyxjQUFjLEVBQUUsZUFBZTtTQUNsQyxDQUFBOztRQUdELFdBQU0sR0FBRztZQUNMLFVBQVUsRUFBRSxJQUFJO1lBQ2hCLGlCQUFpQixFQUFFLElBQUk7WUFDdkIsU0FBUyxFQUFFLElBQUk7WUFDZixPQUFPLEVBQUUsSUFBSTtZQUNiLGFBQWEsRUFBRSxJQUFJO1lBQ25CLHFCQUFxQixFQUFFLElBQUk7WUFDM0IsZUFBZSxFQUFFLENBQUMsT0FBTyxFQUFFLE9BQU8sQ0FBQztTQUN0QyxDQUFDO1FBS0UsSUFBSSxDQUFDLEVBQUUsR0FBRyxFQUFFLENBQUM7SUFDZixDQUFDOzs7O0lBRUQsZUFBZTs7WUFDVCxRQUFRLEdBQUcsUUFBUSxDQUFDLGdCQUFnQixDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsZUFBZSxDQUFD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QU8sR0FBRyxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDOztZQUN6QyxhQUFhLEdBQUcsT0FBTyxDQUFDLGdCQUFnQixDQUFDLGdCQUFnQixDQUFDOztZQUMxRCxVQUFVLEdBQUcsT0FBTyxDQUFDLGdCQUFnQixDQUFDLGFBQWEsQ0FBQztRQUN4RCxPQUFPLE1BQU0sR0FBRyxVQUFVLENBQUMsYUFBYSxDQUFDLEdBQUcsVUFBVSxDQUFDLFVBQVUsQ0FBQyxDQUFBO0lBQ3RFLENBQUM7SUFBQSxDQUFDOzs7Ozs7SUFHRixhQUFhLENBQUMsT0FBTzs7Y0FDWCxNQUFNLEdBQUcsT0FBTyxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLGNBQWMsQ0FBQztRQUNoRSxPQUFPLE1BQU0sQ0FBQyxxQkFBcUIsRUFBRSxDQUFDLE1BQU0sQ0FBQztJQUNqRCxDQUFDO0lBQUEsQ0FBQzs7Ozs7O0lBR0YsY0FBYyxDQUFDLElBQUk7O1lBQ1gsUUFBUSxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsVUFBVSxDQUFDO1FBQ2pELFFBQVEsQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDO1FBQzFCLE9BQU8sUUFBUSxDQUFDLE9BQU8sQ0FBQyxVQUFVLENBQUM7SUFDdkMsQ0FBQzs7O1lBaEhKLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsZ0JBQWdCO2FBQzNCOzs7O1lBTk8sV0FBVztZQUVWLGFBQWE7WUFIWSxVQUFVOzs7O0lBVTVDLHFDQU1DOztJQUdELHFDQVFFOztJQUVBLGlDQUFvQjs7Ozs7SUFFUiwyQ0FBaUM7Ozs7O0lBQUUsNkNBQXFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtBZnRlclZpZXdJbml0LCBEaXJlY3RpdmUsIEVsZW1lbnRSZWZ9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQge1pvb21TZXJ2aWNlfSBmcm9tIFwiLi96b29tLnNlcnZpY2VcIjtcclxuaW1wb3J0IHtGaWxlVXRpbH0gZnJvbSBcIi4vZmlsZS5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7IFdpbmRvd1NlcnZpY2UgfSBmcm9tICcuL3dpbmRvdy5zZXJ2aWNlJztcclxuXHJcbkBEaXJlY3RpdmUoe1xyXG4gIHNlbGVjdG9yOiAnW2dkUGFnZU1hcmtlcl0nXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBQYWdlTWFya2VyRGlyZWN0aXZlIGltcGxlbWVudHMgQWZ0ZXJWaWV3SW5pdCB7XHJcblxyXG5uYW1pbmcgPSB7XHJcbiAgICBzZWN0aW9uU2VsZWN0b3I6IFwic2VjdGlvbi5zZWN0aW9uXCIsXHJcbiAgICBtYXJrZXJTZWxlY3RvcjogXCJzcGFuLnBhZ2U4bWFya2VyXCIsXHJcbiAgICBoZWFkZXJTZWxlY3RvcjogXCJoZWFkZXIuaGVhZGVyXCIsXHJcbiAgICBjb250ZW50U2VsZWN0b3I6IFwiYXJ0aWNsZS5jb250ZW50XCIsXHJcbiAgICBmb290ZXJTZWxlY3RvcjogXCJmb290ZXIuZm9vdGVyXCJcclxufVxyXG5cclxuLy8gb2JzZXJ2aW5nIGNvbmZpZ3VyYXRpb25zLlxyXG5jb25maWcgPSB7XHJcbiAgICBhdHRyaWJ1dGVzOiB0cnVlLFxyXG4gICAgYXR0cmlidXRlT2xkVmFsdWU6IHRydWUsXHJcbiAgICBjaGlsZExpc3Q6IHRydWUsXHJcbiAgICBzdWJ0cmVlOiB0cnVlLFxyXG4gICAgY2hhcmFjdGVyRGF0YTogdHJ1ZSxcclxuICAgIGNoYXJhY3RlckRhdGFPbGRWYWx1ZTogdHJ1ZSxcclxuICAgIGF0dHJpYnV0ZUZpbHRlcjogW1wic3R5bGVcIiwgXCJjbGFzc1wiXVxyXG59O1xyXG5cclxuICBlbDogRWxlbWVudFJlZjxhbnk+O1xyXG5cclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIF96b29tU2VydmljZTogWm9vbVNlcnZpY2UsIHByaXZhdGUgX3dpbmRvd1NlcnZpY2U6IFdpbmRvd1NlcnZpY2UsIGVsOiBFbGVtZW50UmVmKSB7XHJcbiAgICB0aGlzLmVsID0gZWw7XHJcbiAgfVxyXG5cclxuICBuZ0FmdGVyVmlld0luaXQoKTogdm9pZCB7XHJcbiAgICB2YXIgc2VjdGlvbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKHRoaXMubmFtaW5nLnNlY3Rpb25TZWxlY3Rvcik7XHJcblxyXG4gICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IHNlY3Rpb25zLmxlbmd0aDsgaW5kZXgrKykge1xyXG4gICAgICAgIC8vIGdldCBzZWN0aW9uXHJcbiAgICAgICAgY29uc3Qgc2VjdGlvbiA9IHNlY3Rpb25zW2luZGV4XTtcclxuICAgICAgICAvLyBwcm9jZXNzIHNlY3Rpb24uIGFkZCBtYXJrZXJzIHRvIHRoaXMgb25lLlxyXG4gICAgICAgIHRoaXMucHJvY2Vzc1NlY3Rpb24oc2VjdGlvbik7XHJcbiAgICAgICAgLy8gQ3JlYXRlIGFuIG9ic2VydmVyIGluc3RhbmNlIGxpbmtlZCB0byB0aGUgY2FsbGJhY2sgZnVuY3Rpb24uXHJcbiAgICAgICAgY29uc3Qgb2JzZXJ2ZXIgPSBuZXcgTXV0YXRpb25PYnNlcnZlcih0aGlzLmNhbGxiYWNrLmJpbmQodGhpcykpO1xyXG4gICAgICAgIC8vIFN0YXJ0IG9ic2VydmluZyB0aGUgdGFyZ2V0IHNlY3Rpb25zIGZvciBjb25maWd1cmVkIG11dGF0aW9ucy5cclxuICAgICAgICBvYnNlcnZlci5vYnNlcnZlKHNlY3Rpb24sIHRoaXMuY29uZmlnKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8vIENhbGxiYWNrIGZ1bmN0aW9uIHRvIGV4ZWN1dGUgd2hlbiBtdXRhdGlvbnMgYXJlIG9ic2VydmVkLlxyXG5jYWxsYmFjayhtdXRhdGlvbnNMaXN0LCBvYnNlcnZlcikge1xyXG4gICAgLy8gZ2V0IGZpcnN0IE11dGF0aW9uUmVjb3JkIGZyb20gbGlzdC5cclxuICAgIGNvbnN0IG11dGF0aW9uRmlyc3QgPSBtdXRhdGlvbnNMaXN0WzBdO1xyXG4gICAgLy8gZ2V0IHBhcmVudCBzZWN0aW9uLlxyXG4gICAgbGV0IHRhcmdldCA9IG11dGF0aW9uRmlyc3QudGFyZ2V0LnBhcmVudE5vZGUuY2xvc2VzdCh0aGlzLm5hbWluZy5zZWN0aW9uU2VsZWN0b3IpO1xyXG4gICAgaWYgKHRhcmdldCA9PT0gbnVsbCB8fCB0YXJnZXQgPT09IFwidW5kZWZpbmVkXCIpIHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICAvLyByZW1vdmUgYWxsIG1hcmtlcnMgaW4gdGhlIGN1cnJlbnQgc2VjdGlvbi5cclxuICAgIHRhcmdldC5xdWVyeVNlbGVjdG9yQWxsKHRoaXMubmFtaW5nLm1hcmtlclNlbGVjdG9yKS5mb3JFYWNoKGVsZW1lbnQgPT4ge1xyXG4gICAgICAgIGVsZW1lbnQucmVtb3ZlKCk7XHJcbiAgICB9KVxyXG4gICAgLy8gYWRkIG1hcmtlciB0byB0YXJnZXQgc2VjdGlvbnMuXHJcbiAgICB0aGlzLnByb2Nlc3NTZWN0aW9uKHRhcmdldCk7XHJcbiAgICAvLyBhIGxpc3Qgb2YgYWxsIG1hdGNoaW5nIERPTSBjaGFuZ2VzIHRoYXQgaGF2ZSBiZWVuIGRldGVjdGVkIGJ1dCBub3QgeWV0IHByb2Nlc3NlZCBieSB0aGUgb2JzZXJ2ZXIncyBjYWxsYmFjayBmdW5jdGlvbiwgbGVhdmluZyB0aGUgbXV0YXRpb24gcXVldWUgZW1wdHkuXHJcbiAgICAvLyBNQUlOIFJFQVNPTiAtIGxlYXZpbmcgdGhlIG11dGF0aW9uIHF1ZXVlIGVtcHR5LiBcclxuICAgIGNvbnN0IGxlc3QgPSBvYnNlcnZlci50YWtlUmVjb3JkcygpO1xyXG59O1xyXG5cclxuICBwcm9jZXNzU2VjdGlvbihzZWN0aW9uKSB7XHJcbiAgICBjb25zdCBoZWFkZXJIZWlnaHQgPSB0aGlzLnByb2Nlc3NIZWFkZXIoc2VjdGlvbik7XHJcbiAgICBjb25zdCBmb290ZXJIZWlnaHQgPSB0aGlzLnByb2Nlc3NGb290ZXIoc2VjdGlvbik7XHJcbiAgICAvLyBnZXQgbWF4IHBhZ2UgaGVpZ2h0IC0gZnJvbSBjc3MgJ3BhZ2luYWwuY3NzJ1xyXG4gICAgY29uc3Qgc3R5bGluZyA9IGdldENvbXB1dGVkU3R5bGUoc2VjdGlvbiwgbnVsbCk7XHJcbiAgICBsZXQgbWluSGVpZ2h0ID0gc3R5bGluZy5nZXRQcm9wZXJ0eVZhbHVlKCdtaW4taGVpZ2h0Jyk7XHJcbiAgICBjb25zdCBtaW5IZWlnaHROdW1iZXIgPSBwYXJzZUZsb2F0KG1pbkhlaWdodCk7XHJcbiAgICBjb25zdCBjb250ZW50SGVpZ2h0ID0gbWluSGVpZ2h0TnVtYmVyIC0gaGVhZGVySGVpZ2h0IC0gZm9vdGVySGVpZ2h0O1xyXG4gICAgY29uc3QgcmVhbEhlaWdodCA9IHRoaXMucHJvY2Vzc0NvbnRlbnQoc2VjdGlvbik7XHJcbiAgICBsZXQgZW5kUGFnZUNvb3JkaW5hdGUgPSBjb250ZW50SGVpZ2h0O1xyXG4gICAgd2hpbGUgKGVuZFBhZ2VDb29yZGluYXRlIDwgcmVhbEhlaWdodCkge1xyXG4gICAgICAgIGxldCBtYXJrZXIgPSB0aGlzLmh0bWxUb0VsZW1lbnRzKFwiPHNwYW4gY2xhc3M9J3BhZ2U4bWFya2VyJyBzdHlsZT0ndG9wOlwiICsgTWF0aC5jZWlsKGVuZFBhZ2VDb29yZGluYXRlKSArXHJcbiAgICAgICAgICAgIFwicHg7Jz48L3NwYW4+XCIpO1xyXG4gICAgICAgIG1hcmtlci5mb3JFYWNoKGl0ZW0gPT4ge1xyXG4gICAgICAgICAgICBzZWN0aW9uLmFwcGVuZENoaWxkKGl0ZW0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGVuZFBhZ2VDb29yZGluYXRlICs9IGNvbnRlbnRIZWlnaHQ7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvLyBjYWxjdWxhdGUgaGVhZGVyJ3MgaGVpZ2h0LlxyXG4gICAgcHJvY2Vzc0hlYWRlcihzZWN0aW9uKSB7XHJcbiAgICAgICAgY29uc3QgaGVhZGVyID0gc2VjdGlvbi5xdWVyeVNlbGVjdG9yKHRoaXMubmFtaW5nLmhlYWRlclNlbGVjdG9yKTtcclxuICAgICAgICByZXR1cm4gaGVhZGVyLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLmhlaWdodDtcclxuICAgIH07XHJcblxyXG4gICAgLy8gY2FsY3VsYXRlIHJlYWwgaGVpZ2h0IG9mIHRoZSBjb250ZW50LiB3aXRob3V0IHBhZGRpbmcuXHJcbiAgICBwcm9jZXNzQ29udGVudChzZWN0aW9uKSB7XHJcbiAgICAgICAgY29uc3QgY29udGVudCA9IHNlY3Rpb24ucXVlcnlTZWxlY3Rvcih0aGlzLm5hbWluZy5jb250ZW50U2VsZWN0b3IpO1xyXG4gICAgICAgIGNvbnN0IGhlaWdodCA9IGNvbnRlbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkuaGVpZ2h0O1xyXG4gICAgICAgIHZhciBzdHlsaW5nID0gZ2V0Q29tcHV0ZWRTdHlsZShjb250ZW50LCBudWxsKTtcclxuICAgICAgICB2YXIgcGFkZGluZ0JvdHRvbSA9IHN0eWxpbmcuZ2V0UHJvcGVydHlWYWx1ZSgncGFkZGluZy1ib3R0b20nKTtcclxuICAgICAgICB2YXIgcGFkZGluZ1RvcCA9IHN0eWxpbmcuZ2V0UHJvcGVydHlWYWx1ZSgncGFkZGluZy10b3AnKTtcclxuICAgICAgICByZXR1cm4gaGVpZ2h0IC0gcGFyc2VGbG9hdChwYWRkaW5nQm90dG9tKSAtIHBhcnNlRmxvYXQocGFkZGluZ1RvcClcclxuICAgIH07XHJcblxyXG4gICAgLy8gY2FsY3VsYXRlIGZvb3RlcidzIGhlaWdodC5cclxuICAgIHByb2Nlc3NGb290ZXIoc2VjdGlvbikge1xyXG4gICAgICAgIGNvbnN0IGZvb3RlciA9IHNlY3Rpb24ucXVlcnlTZWxlY3Rvcih0aGlzLm5hbWluZy5mb290ZXJTZWxlY3Rvcik7XHJcbiAgICAgICAgcmV0dXJuIGZvb3Rlci5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS5oZWlnaHQ7XHJcbiAgICB9O1xyXG5cclxuICAgIC8vIGNyZWF0ZSBkb20gZWxlbWVudCBmcm9tIHN0cmluZy5cclxuICAgIGh0bWxUb0VsZW1lbnRzKGh0bWwpIHtcclxuICAgICAgICB2YXIgdGVtcGxhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZW1wbGF0ZScpO1xyXG4gICAgICAgIHRlbXBsYXRlLmlubmVySFRNTCA9IGh0bWw7XHJcbiAgICAgICAgcmV0dXJuIHRlbXBsYXRlLmNvbnRlbnQuY2hpbGROb2RlcztcclxuICAgIH1cclxufSJdfQ==