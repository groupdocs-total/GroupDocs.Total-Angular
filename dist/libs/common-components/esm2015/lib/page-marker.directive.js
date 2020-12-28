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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZS1tYXJrZXIuZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdyb3VwZG9jcy5leGFtcGxlcy5hbmd1bGFyL2NvbW1vbi1jb21wb25lbnRzLyIsInNvdXJjZXMiOlsibGliL3BhZ2UtbWFya2VyLmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFnQixTQUFTLEVBQUUsVUFBVSxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQ25FLE9BQU8sRUFBQyxXQUFXLEVBQUMsTUFBTSxnQkFBZ0IsQ0FBQztBQUUzQyxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sa0JBQWtCLENBQUM7QUFLakQsTUFBTSxPQUFPLG1CQUFtQjs7Ozs7O0lBdUI5QixZQUFvQixZQUF5QixFQUFVLGNBQTZCLEVBQUUsRUFBYztRQUFoRixpQkFBWSxHQUFaLFlBQVksQ0FBYTtRQUFVLG1CQUFjLEdBQWQsY0FBYyxDQUFlO1FBckJ0RixXQUFNLEdBQUc7WUFDTCxlQUFlLEVBQUUsaUJBQWlCO1lBQ2xDLGNBQWMsRUFBRSxrQkFBa0I7WUFDbEMsY0FBYyxFQUFFLGVBQWU7WUFDL0IsZUFBZSxFQUFFLGlCQUFpQjtZQUNsQyxjQUFjLEVBQUUsZUFBZTtTQUNsQyxDQUFBOztRQUdELFdBQU0sR0FBRztZQUNMLFVBQVUsRUFBRSxJQUFJO1lBQ2hCLGlCQUFpQixFQUFFLElBQUk7WUFDdkIsU0FBUyxFQUFFLElBQUk7WUFDZixPQUFPLEVBQUUsSUFBSTtZQUNiLGFBQWEsRUFBRSxJQUFJO1lBQ25CLHFCQUFxQixFQUFFLElBQUk7WUFDM0IsZUFBZSxFQUFFLENBQUMsT0FBTyxFQUFFLE9BQU8sQ0FBQztTQUN0QyxDQUFDO1FBS0UsSUFBSSxDQUFDLEVBQUUsR0FBRyxFQUFFLENBQUM7SUFDZixDQUFDOzs7O0lBRUQsZUFBZTs7Y0FDUCxRQUFRLEdBQUcsUUFBUSxDQUFDLGdCQUFnQixDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsZUFBZSxDQUFD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QUMsZUFBZSxDQUFDOztjQUM1RCxNQUFNLEdBQUcsT0FBTyxDQUFDLHFCQUFxQixFQUFFLENBQUMsTUFBTTs7Y0FDL0MsT0FBTyxHQUFHLGdCQUFnQixDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUM7O2NBQ3pDLGFBQWEsR0FBRyxPQUFPLENBQUMsZ0JBQWdCLENBQUMsZ0JBQWdCLENBQUM7O2NBQzFELFVBQVUsR0FBRyxPQUFPLENBQUMsZ0JBQWdCLENBQUMsYUFBYSxDQUFDO1FBQzFELE9BQU8sTUFBTSxHQUFHLFVBQVUsQ0FBQyxhQUFhLENBQUMsR0FBRyxVQUFVLENBQUMsVUFBVSxDQUFDLENBQUE7SUFDdEUsQ0FBQztJQUFBLENBQUM7Ozs7OztJQUdGLGFBQWEsQ0FBQyxPQUFPOztjQUNYLE1BQU0sR0FBRyxPQUFPLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsY0FBYyxDQUFDO1FBQ2hFLE9BQU8sTUFBTSxDQUFDLHFCQUFxQixFQUFFLENBQUMsTUFBTSxDQUFDO0lBQ2pELENBQUM7SUFBQSxDQUFDOzs7Ozs7SUFHRixjQUFjLENBQUMsSUFBSTs7Y0FDVCxRQUFRLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxVQUFVLENBQUM7UUFDbkQsUUFBUSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUM7UUFDMUIsT0FBTyxRQUFRLENBQUMsT0FBTyxDQUFDLFVBQVUsQ0FBQztJQUN2QyxDQUFDOzs7WUFuSEosU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxnQkFBZ0I7YUFDM0I7Ozs7WUFOTyxXQUFXO1lBRVYsYUFBYTtZQUhZLFVBQVU7Ozs7SUFVNUMscUNBTUM7O0lBR0QscUNBUUU7O0lBRUEsaUNBQW9COzs7OztJQUVSLDJDQUFpQzs7Ozs7SUFBRSw2Q0FBcUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0FmdGVyVmlld0luaXQsIERpcmVjdGl2ZSwgRWxlbWVudFJlZn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7Wm9vbVNlcnZpY2V9IGZyb20gXCIuL3pvb20uc2VydmljZVwiO1xyXG5pbXBvcnQge0ZpbGVVdGlsfSBmcm9tIFwiLi9maWxlLnNlcnZpY2VcIjtcclxuaW1wb3J0IHsgV2luZG93U2VydmljZSB9IGZyb20gJy4vd2luZG93LnNlcnZpY2UnO1xyXG5cclxuQERpcmVjdGl2ZSh7XHJcbiAgc2VsZWN0b3I6ICdbZ2RQYWdlTWFya2VyXSdcclxufSlcclxuZXhwb3J0IGNsYXNzIFBhZ2VNYXJrZXJEaXJlY3RpdmUgaW1wbGVtZW50cyBBZnRlclZpZXdJbml0IHtcclxuXHJcbm5hbWluZyA9IHtcclxuICAgIHNlY3Rpb25TZWxlY3RvcjogXCJzZWN0aW9uLnNlY3Rpb25cIixcclxuICAgIG1hcmtlclNlbGVjdG9yOiBcInNwYW4ucGFnZThtYXJrZXJcIixcclxuICAgIGhlYWRlclNlbGVjdG9yOiBcImhlYWRlci5oZWFkZXJcIixcclxuICAgIGNvbnRlbnRTZWxlY3RvcjogXCJhcnRpY2xlLmNvbnRlbnRcIixcclxuICAgIGZvb3RlclNlbGVjdG9yOiBcImZvb3Rlci5mb290ZXJcIlxyXG59XHJcblxyXG4vLyBvYnNlcnZpbmcgY29uZmlndXJhdGlvbnMuXHJcbmNvbmZpZyA9IHtcclxuICAgIGF0dHJpYnV0ZXM6IHRydWUsXHJcbiAgICBhdHRyaWJ1dGVPbGRWYWx1ZTogdHJ1ZSxcclxuICAgIGNoaWxkTGlzdDogdHJ1ZSxcclxuICAgIHN1YnRyZWU6IHRydWUsXHJcbiAgICBjaGFyYWN0ZXJEYXRhOiB0cnVlLFxyXG4gICAgY2hhcmFjdGVyRGF0YU9sZFZhbHVlOiB0cnVlLFxyXG4gICAgYXR0cmlidXRlRmlsdGVyOiBbXCJzdHlsZVwiLCBcImNsYXNzXCJdXHJcbn07XHJcblxyXG4gIGVsOiBFbGVtZW50UmVmPGFueT47XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgX3pvb21TZXJ2aWNlOiBab29tU2VydmljZSwgcHJpdmF0ZSBfd2luZG93U2VydmljZTogV2luZG93U2VydmljZSwgZWw6IEVsZW1lbnRSZWYpIHtcclxuICAgIHRoaXMuZWwgPSBlbDtcclxuICB9XHJcblxyXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpOiB2b2lkIHtcclxuICAgIGNvbnN0IHNlY3Rpb25zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCh0aGlzLm5hbWluZy5zZWN0aW9uU2VsZWN0b3IpO1xyXG5cclxuICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCBzZWN0aW9ucy5sZW5ndGg7IGluZGV4KyspIHtcclxuICAgICAgICAvLyBnZXQgc2VjdGlvblxyXG4gICAgICAgIGNvbnN0IHNlY3Rpb24gPSBzZWN0aW9uc1tpbmRleF07XHJcbiAgICAgICAgLy8gcHJvY2VzcyBzZWN0aW9uLiBhZGQgbWFya2VycyB0byB0aGlzIG9uZS5cclxuICAgICAgICB0aGlzLnByb2Nlc3NTZWN0aW9uKHNlY3Rpb24pO1xyXG4gICAgICAgIC8vIENyZWF0ZSBhbiBvYnNlcnZlciBpbnN0YW5jZSBsaW5rZWQgdG8gdGhlIGNhbGxiYWNrIGZ1bmN0aW9uLlxyXG4gICAgICAgIGNvbnN0IG9ic2VydmVyID0gbmV3IE11dGF0aW9uT2JzZXJ2ZXIodGhpcy5jYWxsYmFjay5iaW5kKHRoaXMpKTtcclxuICAgICAgICAvLyBTdGFydCBvYnNlcnZpbmcgdGhlIHRhcmdldCBzZWN0aW9ucyBmb3IgY29uZmlndXJlZCBtdXRhdGlvbnMuXHJcbiAgICAgICAgb2JzZXJ2ZXIub2JzZXJ2ZShzZWN0aW9uLCB0aGlzLmNvbmZpZyk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvLyBDYWxsYmFjayBmdW5jdGlvbiB0byBleGVjdXRlIHdoZW4gbXV0YXRpb25zIGFyZSBvYnNlcnZlZC5cclxuY2FsbGJhY2sobXV0YXRpb25zTGlzdCwgb2JzZXJ2ZXIpIHtcclxuICAgIC8vIGdldCBmaXJzdCBNdXRhdGlvblJlY29yZCBmcm9tIGxpc3QuXHJcbiAgICBjb25zdCBtdXRhdGlvbkZpcnN0ID0gbXV0YXRpb25zTGlzdFswXTtcclxuICAgIC8vIGdldCBwYXJlbnQgc2VjdGlvbi5cclxuICAgIGNvbnN0IHBhcmVudE5vZGUgPSBtdXRhdGlvbkZpcnN0LnRhcmdldC5wYXJlbnROb2RlO1xyXG4gICAgaWYgKHBhcmVudE5vZGUpIHtcclxuICAgICAgICBjb25zdCB0YXJnZXQgPSBtdXRhdGlvbkZpcnN0LnRhcmdldC5wYXJlbnROb2RlLmNsb3Nlc3QodGhpcy5uYW1pbmcuc2VjdGlvblNlbGVjdG9yKTtcclxuICAgICAgICBpZiAodGFyZ2V0ID09PSBudWxsIHx8IHRhcmdldCA9PT0gXCJ1bmRlZmluZWRcIikge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIHJlbW92ZSBhbGwgbWFya2VycyBpbiB0aGUgY3VycmVudCBzZWN0aW9uLlxyXG4gICAgICAgIHRhcmdldC5xdWVyeVNlbGVjdG9yQWxsKHRoaXMubmFtaW5nLm1hcmtlclNlbGVjdG9yKS5mb3JFYWNoKGVsZW1lbnQgPT4ge1xyXG4gICAgICAgICAgICBlbGVtZW50LnJlbW92ZSgpO1xyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLy8gYWRkIG1hcmtlciB0byB0YXJnZXQgc2VjdGlvbnMuXHJcbiAgICAgICAgdGhpcy5wcm9jZXNzU2VjdGlvbih0YXJnZXQpO1xyXG4gICAgICAgIC8vIGEgbGlzdCBvZiBhbGwgbWF0Y2hpbmcgRE9NIGNoYW5nZXMgdGhhdCBoYXZlIGJlZW4gZGV0ZWN0ZWQgYnV0IG5vdCB5ZXQgcHJvY2Vzc2VkIGJ5IHRoZSBvYnNlcnZlcidzIGNhbGxiYWNrIGZ1bmN0aW9uLCBsZWF2aW5nIHRoZSBtdXRhdGlvbiBxdWV1ZSBlbXB0eS5cclxuICAgICAgICAvLyBNQUlOIFJFQVNPTiAtIGxlYXZpbmcgdGhlIG11dGF0aW9uIHF1ZXVlIGVtcHR5LiBcclxuICAgICAgICBjb25zdCBsZXN0ID0gb2JzZXJ2ZXIudGFrZVJlY29yZHMoKTtcclxuICAgIH1cclxufTtcclxuXHJcbiAgcHJvY2Vzc1NlY3Rpb24oc2VjdGlvbikge1xyXG4gICAgY29uc3QgaGVhZGVySGVpZ2h0ID0gdGhpcy5wcm9jZXNzSGVhZGVyKHNlY3Rpb24pO1xyXG4gICAgY29uc3QgZm9vdGVySGVpZ2h0ID0gdGhpcy5wcm9jZXNzRm9vdGVyKHNlY3Rpb24pO1xyXG4gICAgLy8gZ2V0IG1heCBwYWdlIGhlaWdodCAtIGZyb20gY3NzICdwYWdpbmFsLmNzcydcclxuICAgIGNvbnN0IHN0eWxpbmcgPSBnZXRDb21wdXRlZFN0eWxlKHNlY3Rpb24sIG51bGwpO1xyXG4gICAgY29uc3QgbWluSGVpZ2h0ID0gc3R5bGluZy5nZXRQcm9wZXJ0eVZhbHVlKCdtaW4taGVpZ2h0Jyk7XHJcbiAgICBjb25zdCBtaW5IZWlnaHROdW1iZXIgPSBwYXJzZUZsb2F0KG1pbkhlaWdodCk7XHJcbiAgICBjb25zdCBjb250ZW50SGVpZ2h0ID0gbWluSGVpZ2h0TnVtYmVyIC0gaGVhZGVySGVpZ2h0IC0gZm9vdGVySGVpZ2h0O1xyXG4gICAgY29uc3QgcmVhbEhlaWdodCA9IHRoaXMucHJvY2Vzc0NvbnRlbnQoc2VjdGlvbik7XHJcbiAgICBsZXQgZW5kUGFnZUNvb3JkaW5hdGUgPSBjb250ZW50SGVpZ2h0O1xyXG4gICAgd2hpbGUgKGVuZFBhZ2VDb29yZGluYXRlIDwgcmVhbEhlaWdodCkge1xyXG4gICAgICAgIGNvbnN0IG1hcmtlciA9IHRoaXMuaHRtbFRvRWxlbWVudHMoXCI8c3BhbiBjbGFzcz0ncGFnZThtYXJrZXInIHN0eWxlPSd0b3A6XCIgKyBNYXRoLmNlaWwoZW5kUGFnZUNvb3JkaW5hdGUpICtcclxuICAgICAgICAgICAgXCJweDsnPjwvc3Bhbj5cIik7XHJcbiAgICAgICAgbWFya2VyLmZvckVhY2goaXRlbSA9PiB7XHJcbiAgICAgICAgICAgIHNlY3Rpb24uYXBwZW5kQ2hpbGQoaXRlbSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgZW5kUGFnZUNvb3JkaW5hdGUgKz0gY29udGVudEhlaWdodDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8vIGNhbGN1bGF0ZSBoZWFkZXIncyBoZWlnaHQuXHJcbiAgICBwcm9jZXNzSGVhZGVyKHNlY3Rpb24pIHtcclxuICAgICAgICBjb25zdCBoZWFkZXIgPSBzZWN0aW9uLnF1ZXJ5U2VsZWN0b3IodGhpcy5uYW1pbmcuaGVhZGVyU2VsZWN0b3IpO1xyXG4gICAgICAgIHJldHVybiBoZWFkZXIuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkuaGVpZ2h0O1xyXG4gICAgfTtcclxuXHJcbiAgICAvLyBjYWxjdWxhdGUgcmVhbCBoZWlnaHQgb2YgdGhlIGNvbnRlbnQuIHdpdGhvdXQgcGFkZGluZy5cclxuICAgIHByb2Nlc3NDb250ZW50KHNlY3Rpb24pIHtcclxuICAgICAgICBjb25zdCBjb250ZW50ID0gc2VjdGlvbi5xdWVyeVNlbGVjdG9yKHRoaXMubmFtaW5nLmNvbnRlbnRTZWxlY3Rvcik7XHJcbiAgICAgICAgY29uc3QgaGVpZ2h0ID0gY29udGVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS5oZWlnaHQ7XHJcbiAgICAgICAgY29uc3Qgc3R5bGluZyA9IGdldENvbXB1dGVkU3R5bGUoY29udGVudCwgbnVsbCk7XHJcbiAgICAgICAgY29uc3QgcGFkZGluZ0JvdHRvbSA9IHN0eWxpbmcuZ2V0UHJvcGVydHlWYWx1ZSgncGFkZGluZy1ib3R0b20nKTtcclxuICAgICAgICBjb25zdCBwYWRkaW5nVG9wID0gc3R5bGluZy5nZXRQcm9wZXJ0eVZhbHVlKCdwYWRkaW5nLXRvcCcpO1xyXG4gICAgICAgIHJldHVybiBoZWlnaHQgLSBwYXJzZUZsb2F0KHBhZGRpbmdCb3R0b20pIC0gcGFyc2VGbG9hdChwYWRkaW5nVG9wKVxyXG4gICAgfTtcclxuXHJcbiAgICAvLyBjYWxjdWxhdGUgZm9vdGVyJ3MgaGVpZ2h0LlxyXG4gICAgcHJvY2Vzc0Zvb3RlcihzZWN0aW9uKSB7XHJcbiAgICAgICAgY29uc3QgZm9vdGVyID0gc2VjdGlvbi5xdWVyeVNlbGVjdG9yKHRoaXMubmFtaW5nLmZvb3RlclNlbGVjdG9yKTtcclxuICAgICAgICByZXR1cm4gZm9vdGVyLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLmhlaWdodDtcclxuICAgIH07XHJcblxyXG4gICAgLy8gY3JlYXRlIGRvbSBlbGVtZW50IGZyb20gc3RyaW5nLlxyXG4gICAgaHRtbFRvRWxlbWVudHMoaHRtbCkge1xyXG4gICAgICAgIGNvbnN0IHRlbXBsYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGVtcGxhdGUnKTtcclxuICAgICAgICB0ZW1wbGF0ZS5pbm5lckhUTUwgPSBodG1sO1xyXG4gICAgICAgIHJldHVybiB0ZW1wbGF0ZS5jb250ZW50LmNoaWxkTm9kZXM7XHJcbiAgICB9XHJcbn0iXX0=