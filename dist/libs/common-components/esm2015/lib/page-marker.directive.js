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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZS1tYXJrZXIuZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdyb3VwZG9jcy5leGFtcGxlcy5hbmd1bGFyL2NvbW1vbi1jb21wb25lbnRzLyIsInNvdXJjZXMiOlsibGliL3BhZ2UtbWFya2VyLmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFnQixTQUFTLEVBQUUsVUFBVSxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQ25FLE9BQU8sRUFBQyxXQUFXLEVBQUMsTUFBTSxnQkFBZ0IsQ0FBQztBQUUzQyxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sa0JBQWtCLENBQUM7QUFLakQsTUFBTSxPQUFPLG1CQUFtQjs7Ozs7O0lBdUI5QixZQUFvQixZQUF5QixFQUFVLGNBQTZCLEVBQUUsRUFBYztRQUFoRixpQkFBWSxHQUFaLFlBQVksQ0FBYTtRQUFVLG1CQUFjLEdBQWQsY0FBYyxDQUFlO1FBckJ0RixXQUFNLEdBQUc7WUFDTCxlQUFlLEVBQUUsaUJBQWlCO1lBQ2xDLGNBQWMsRUFBRSxrQkFBa0I7WUFDbEMsY0FBYyxFQUFFLGVBQWU7WUFDL0IsZUFBZSxFQUFFLGlCQUFpQjtZQUNsQyxjQUFjLEVBQUUsZUFBZTtTQUNsQyxDQUFBOztRQUdELFdBQU0sR0FBRztZQUNMLFVBQVUsRUFBRSxJQUFJO1lBQ2hCLGlCQUFpQixFQUFFLElBQUk7WUFDdkIsU0FBUyxFQUFFLElBQUk7WUFDZixPQUFPLEVBQUUsSUFBSTtZQUNiLGFBQWEsRUFBRSxJQUFJO1lBQ25CLHFCQUFxQixFQUFFLElBQUk7WUFDM0IsZUFBZSxFQUFFLENBQUMsT0FBTyxFQUFFLE9BQU8sQ0FBQztTQUN0QyxDQUFDO1FBS0UsSUFBSSxDQUFDLEVBQUUsR0FBRyxFQUFFLENBQUM7SUFDZixDQUFDOzs7O0lBRUQsZUFBZTs7Y0FDUCxRQUFRLEdBQUcsUUFBUSxDQUFDLGdCQUFnQixDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsZUFBZSxDQUFD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QU8sR0FBRyxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDOztjQUN6QyxhQUFhLEdBQUcsT0FBTyxDQUFDLGdCQUFnQixDQUFDLGdCQUFnQixDQUFDOztjQUMxRCxVQUFVLEdBQUcsT0FBTyxDQUFDLGdCQUFnQixDQUFDLGFBQWEsQ0FBQztRQUMxRCxPQUFPLE1BQU0sR0FBRyxVQUFVLENBQUMsYUFBYSxDQUFDLEdBQUcsVUFBVSxDQUFDLFVBQVUsQ0FBQyxDQUFBO0lBQ3RFLENBQUM7SUFBQSxDQUFDOzs7Ozs7SUFHRixhQUFhLENBQUMsT0FBTzs7Y0FDWCxNQUFNLEdBQUcsT0FBTyxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLGNBQWMsQ0FBQztRQUNoRSxPQUFPLE1BQU0sQ0FBQyxxQkFBcUIsRUFBRSxDQUFDLE1BQU0sQ0FBQztJQUNqRCxDQUFDO0lBQUEsQ0FBQzs7Ozs7O0lBR0YsY0FBYyxDQUFDLElBQUk7O2NBQ1QsUUFBUSxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsVUFBVSxDQUFDO1FBQ25ELFFBQVEsQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDO1FBQzFCLE9BQU8sUUFBUSxDQUFDLE9BQU8sQ0FBQyxVQUFVLENBQUM7SUFDdkMsQ0FBQzs7O1lBaEhKLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsZ0JBQWdCO2FBQzNCOzs7O1lBTk8sV0FBVztZQUVWLGFBQWE7WUFIWSxVQUFVOzs7O0lBVTVDLHFDQU1DOztJQUdELHFDQVFFOztJQUVBLGlDQUFvQjs7Ozs7SUFFUiwyQ0FBaUM7Ozs7O0lBQUUsNkNBQXFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtBZnRlclZpZXdJbml0LCBEaXJlY3RpdmUsIEVsZW1lbnRSZWZ9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQge1pvb21TZXJ2aWNlfSBmcm9tIFwiLi96b29tLnNlcnZpY2VcIjtcclxuaW1wb3J0IHtGaWxlVXRpbH0gZnJvbSBcIi4vZmlsZS5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7IFdpbmRvd1NlcnZpY2UgfSBmcm9tICcuL3dpbmRvdy5zZXJ2aWNlJztcclxuXHJcbkBEaXJlY3RpdmUoe1xyXG4gIHNlbGVjdG9yOiAnW2dkUGFnZU1hcmtlcl0nXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBQYWdlTWFya2VyRGlyZWN0aXZlIGltcGxlbWVudHMgQWZ0ZXJWaWV3SW5pdCB7XHJcblxyXG5uYW1pbmcgPSB7XHJcbiAgICBzZWN0aW9uU2VsZWN0b3I6IFwic2VjdGlvbi5zZWN0aW9uXCIsXHJcbiAgICBtYXJrZXJTZWxlY3RvcjogXCJzcGFuLnBhZ2U4bWFya2VyXCIsXHJcbiAgICBoZWFkZXJTZWxlY3RvcjogXCJoZWFkZXIuaGVhZGVyXCIsXHJcbiAgICBjb250ZW50U2VsZWN0b3I6IFwiYXJ0aWNsZS5jb250ZW50XCIsXHJcbiAgICBmb290ZXJTZWxlY3RvcjogXCJmb290ZXIuZm9vdGVyXCJcclxufVxyXG5cclxuLy8gb2JzZXJ2aW5nIGNvbmZpZ3VyYXRpb25zLlxyXG5jb25maWcgPSB7XHJcbiAgICBhdHRyaWJ1dGVzOiB0cnVlLFxyXG4gICAgYXR0cmlidXRlT2xkVmFsdWU6IHRydWUsXHJcbiAgICBjaGlsZExpc3Q6IHRydWUsXHJcbiAgICBzdWJ0cmVlOiB0cnVlLFxyXG4gICAgY2hhcmFjdGVyRGF0YTogdHJ1ZSxcclxuICAgIGNoYXJhY3RlckRhdGFPbGRWYWx1ZTogdHJ1ZSxcclxuICAgIGF0dHJpYnV0ZUZpbHRlcjogW1wic3R5bGVcIiwgXCJjbGFzc1wiXVxyXG59O1xyXG5cclxuICBlbDogRWxlbWVudFJlZjxhbnk+O1xyXG5cclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIF96b29tU2VydmljZTogWm9vbVNlcnZpY2UsIHByaXZhdGUgX3dpbmRvd1NlcnZpY2U6IFdpbmRvd1NlcnZpY2UsIGVsOiBFbGVtZW50UmVmKSB7XHJcbiAgICB0aGlzLmVsID0gZWw7XHJcbiAgfVxyXG5cclxuICBuZ0FmdGVyVmlld0luaXQoKTogdm9pZCB7XHJcbiAgICBjb25zdCBzZWN0aW9ucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwodGhpcy5uYW1pbmcuc2VjdGlvblNlbGVjdG9yKTtcclxuXHJcbiAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgc2VjdGlvbnMubGVuZ3RoOyBpbmRleCsrKSB7XHJcbiAgICAgICAgLy8gZ2V0IHNlY3Rpb25cclxuICAgICAgICBjb25zdCBzZWN0aW9uID0gc2VjdGlvbnNbaW5kZXhdO1xyXG4gICAgICAgIC8vIHByb2Nlc3Mgc2VjdGlvbi4gYWRkIG1hcmtlcnMgdG8gdGhpcyBvbmUuXHJcbiAgICAgICAgdGhpcy5wcm9jZXNzU2VjdGlvbihzZWN0aW9uKTtcclxuICAgICAgICAvLyBDcmVhdGUgYW4gb2JzZXJ2ZXIgaW5zdGFuY2UgbGlua2VkIHRvIHRoZSBjYWxsYmFjayBmdW5jdGlvbi5cclxuICAgICAgICBjb25zdCBvYnNlcnZlciA9IG5ldyBNdXRhdGlvbk9ic2VydmVyKHRoaXMuY2FsbGJhY2suYmluZCh0aGlzKSk7XHJcbiAgICAgICAgLy8gU3RhcnQgb2JzZXJ2aW5nIHRoZSB0YXJnZXQgc2VjdGlvbnMgZm9yIGNvbmZpZ3VyZWQgbXV0YXRpb25zLlxyXG4gICAgICAgIG9ic2VydmVyLm9ic2VydmUoc2VjdGlvbiwgdGhpcy5jb25maWcpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLy8gQ2FsbGJhY2sgZnVuY3Rpb24gdG8gZXhlY3V0ZSB3aGVuIG11dGF0aW9ucyBhcmUgb2JzZXJ2ZWQuXHJcbmNhbGxiYWNrKG11dGF0aW9uc0xpc3QsIG9ic2VydmVyKSB7XHJcbiAgICAvLyBnZXQgZmlyc3QgTXV0YXRpb25SZWNvcmQgZnJvbSBsaXN0LlxyXG4gICAgY29uc3QgbXV0YXRpb25GaXJzdCA9IG11dGF0aW9uc0xpc3RbMF07XHJcbiAgICAvLyBnZXQgcGFyZW50IHNlY3Rpb24uXHJcbiAgICBjb25zdCB0YXJnZXQgPSBtdXRhdGlvbkZpcnN0LnRhcmdldC5wYXJlbnROb2RlLmNsb3Nlc3QodGhpcy5uYW1pbmcuc2VjdGlvblNlbGVjdG9yKTtcclxuICAgIGlmICh0YXJnZXQgPT09IG51bGwgfHwgdGFyZ2V0ID09PSBcInVuZGVmaW5lZFwiKSB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgLy8gcmVtb3ZlIGFsbCBtYXJrZXJzIGluIHRoZSBjdXJyZW50IHNlY3Rpb24uXHJcbiAgICB0YXJnZXQucXVlcnlTZWxlY3RvckFsbCh0aGlzLm5hbWluZy5tYXJrZXJTZWxlY3RvcikuZm9yRWFjaChlbGVtZW50ID0+IHtcclxuICAgICAgICBlbGVtZW50LnJlbW92ZSgpO1xyXG4gICAgfSlcclxuICAgIC8vIGFkZCBtYXJrZXIgdG8gdGFyZ2V0IHNlY3Rpb25zLlxyXG4gICAgdGhpcy5wcm9jZXNzU2VjdGlvbih0YXJnZXQpO1xyXG4gICAgLy8gYSBsaXN0IG9mIGFsbCBtYXRjaGluZyBET00gY2hhbmdlcyB0aGF0IGhhdmUgYmVlbiBkZXRlY3RlZCBidXQgbm90IHlldCBwcm9jZXNzZWQgYnkgdGhlIG9ic2VydmVyJ3MgY2FsbGJhY2sgZnVuY3Rpb24sIGxlYXZpbmcgdGhlIG11dGF0aW9uIHF1ZXVlIGVtcHR5LlxyXG4gICAgLy8gTUFJTiBSRUFTT04gLSBsZWF2aW5nIHRoZSBtdXRhdGlvbiBxdWV1ZSBlbXB0eS4gXHJcbiAgICBjb25zdCBsZXN0ID0gb2JzZXJ2ZXIudGFrZVJlY29yZHMoKTtcclxufTtcclxuXHJcbiAgcHJvY2Vzc1NlY3Rpb24oc2VjdGlvbikge1xyXG4gICAgY29uc3QgaGVhZGVySGVpZ2h0ID0gdGhpcy5wcm9jZXNzSGVhZGVyKHNlY3Rpb24pO1xyXG4gICAgY29uc3QgZm9vdGVySGVpZ2h0ID0gdGhpcy5wcm9jZXNzRm9vdGVyKHNlY3Rpb24pO1xyXG4gICAgLy8gZ2V0IG1heCBwYWdlIGhlaWdodCAtIGZyb20gY3NzICdwYWdpbmFsLmNzcydcclxuICAgIGNvbnN0IHN0eWxpbmcgPSBnZXRDb21wdXRlZFN0eWxlKHNlY3Rpb24sIG51bGwpO1xyXG4gICAgY29uc3QgbWluSGVpZ2h0ID0gc3R5bGluZy5nZXRQcm9wZXJ0eVZhbHVlKCdtaW4taGVpZ2h0Jyk7XHJcbiAgICBjb25zdCBtaW5IZWlnaHROdW1iZXIgPSBwYXJzZUZsb2F0KG1pbkhlaWdodCk7XHJcbiAgICBjb25zdCBjb250ZW50SGVpZ2h0ID0gbWluSGVpZ2h0TnVtYmVyIC0gaGVhZGVySGVpZ2h0IC0gZm9vdGVySGVpZ2h0O1xyXG4gICAgY29uc3QgcmVhbEhlaWdodCA9IHRoaXMucHJvY2Vzc0NvbnRlbnQoc2VjdGlvbik7XHJcbiAgICBsZXQgZW5kUGFnZUNvb3JkaW5hdGUgPSBjb250ZW50SGVpZ2h0O1xyXG4gICAgd2hpbGUgKGVuZFBhZ2VDb29yZGluYXRlIDwgcmVhbEhlaWdodCkge1xyXG4gICAgICAgIGNvbnN0IG1hcmtlciA9IHRoaXMuaHRtbFRvRWxlbWVudHMoXCI8c3BhbiBjbGFzcz0ncGFnZThtYXJrZXInIHN0eWxlPSd0b3A6XCIgKyBNYXRoLmNlaWwoZW5kUGFnZUNvb3JkaW5hdGUpICtcclxuICAgICAgICAgICAgXCJweDsnPjwvc3Bhbj5cIik7XHJcbiAgICAgICAgbWFya2VyLmZvckVhY2goaXRlbSA9PiB7XHJcbiAgICAgICAgICAgIHNlY3Rpb24uYXBwZW5kQ2hpbGQoaXRlbSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgZW5kUGFnZUNvb3JkaW5hdGUgKz0gY29udGVudEhlaWdodDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8vIGNhbGN1bGF0ZSBoZWFkZXIncyBoZWlnaHQuXHJcbiAgICBwcm9jZXNzSGVhZGVyKHNlY3Rpb24pIHtcclxuICAgICAgICBjb25zdCBoZWFkZXIgPSBzZWN0aW9uLnF1ZXJ5U2VsZWN0b3IodGhpcy5uYW1pbmcuaGVhZGVyU2VsZWN0b3IpO1xyXG4gICAgICAgIHJldHVybiBoZWFkZXIuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkuaGVpZ2h0O1xyXG4gICAgfTtcclxuXHJcbiAgICAvLyBjYWxjdWxhdGUgcmVhbCBoZWlnaHQgb2YgdGhlIGNvbnRlbnQuIHdpdGhvdXQgcGFkZGluZy5cclxuICAgIHByb2Nlc3NDb250ZW50KHNlY3Rpb24pIHtcclxuICAgICAgICBjb25zdCBjb250ZW50ID0gc2VjdGlvbi5xdWVyeVNlbGVjdG9yKHRoaXMubmFtaW5nLmNvbnRlbnRTZWxlY3Rvcik7XHJcbiAgICAgICAgY29uc3QgaGVpZ2h0ID0gY29udGVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS5oZWlnaHQ7XHJcbiAgICAgICAgY29uc3Qgc3R5bGluZyA9IGdldENvbXB1dGVkU3R5bGUoY29udGVudCwgbnVsbCk7XHJcbiAgICAgICAgY29uc3QgcGFkZGluZ0JvdHRvbSA9IHN0eWxpbmcuZ2V0UHJvcGVydHlWYWx1ZSgncGFkZGluZy1ib3R0b20nKTtcclxuICAgICAgICBjb25zdCBwYWRkaW5nVG9wID0gc3R5bGluZy5nZXRQcm9wZXJ0eVZhbHVlKCdwYWRkaW5nLXRvcCcpO1xyXG4gICAgICAgIHJldHVybiBoZWlnaHQgLSBwYXJzZUZsb2F0KHBhZGRpbmdCb3R0b20pIC0gcGFyc2VGbG9hdChwYWRkaW5nVG9wKVxyXG4gICAgfTtcclxuXHJcbiAgICAvLyBjYWxjdWxhdGUgZm9vdGVyJ3MgaGVpZ2h0LlxyXG4gICAgcHJvY2Vzc0Zvb3RlcihzZWN0aW9uKSB7XHJcbiAgICAgICAgY29uc3QgZm9vdGVyID0gc2VjdGlvbi5xdWVyeVNlbGVjdG9yKHRoaXMubmFtaW5nLmZvb3RlclNlbGVjdG9yKTtcclxuICAgICAgICByZXR1cm4gZm9vdGVyLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLmhlaWdodDtcclxuICAgIH07XHJcblxyXG4gICAgLy8gY3JlYXRlIGRvbSBlbGVtZW50IGZyb20gc3RyaW5nLlxyXG4gICAgaHRtbFRvRWxlbWVudHMoaHRtbCkge1xyXG4gICAgICAgIGNvbnN0IHRlbXBsYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGVtcGxhdGUnKTtcclxuICAgICAgICB0ZW1wbGF0ZS5pbm5lckhUTUwgPSBodG1sO1xyXG4gICAgICAgIHJldHVybiB0ZW1wbGF0ZS5jb250ZW50LmNoaWxkTm9kZXM7XHJcbiAgICB9XHJcbn0iXX0=