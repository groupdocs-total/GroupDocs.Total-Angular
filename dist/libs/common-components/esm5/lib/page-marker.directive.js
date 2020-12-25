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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZS1tYXJrZXIuZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdyb3VwZG9jcy5leGFtcGxlcy5hbmd1bGFyL2NvbW1vbi1jb21wb25lbnRzLyIsInNvdXJjZXMiOlsibGliL3BhZ2UtbWFya2VyLmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFnQixTQUFTLEVBQUUsVUFBVSxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQ25FLE9BQU8sRUFBQyxXQUFXLEVBQUMsTUFBTSxnQkFBZ0IsQ0FBQztBQUUzQyxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sa0JBQWtCLENBQUM7QUFFakQ7SUEwQkUsNkJBQW9CLFlBQXlCLEVBQVUsY0FBNkIsRUFBRSxFQUFjO1FBQWhGLGlCQUFZLEdBQVosWUFBWSxDQUFhO1FBQVUsbUJBQWMsR0FBZCxjQUFjLENBQWU7UUFyQnRGLFdBQU0sR0FBRztZQUNMLGVBQWUsRUFBRSxpQkFBaUI7WUFDbEMsY0FBYyxFQUFFLGtCQUFrQjtZQUNsQyxjQUFjLEVBQUUsZUFBZTtZQUMvQixlQUFlLEVBQUUsaUJBQWlCO1lBQ2xDLGNBQWMsRUFBRSxlQUFlO1NBQ2xDLENBQUE7O1FBR0QsV0FBTSxHQUFHO1lBQ0wsVUFBVSxFQUFFLElBQUk7WUFDaEIsaUJBQWlCLEVBQUUsSUFBSTtZQUN2QixTQUFTLEVBQUUsSUFBSTtZQUNmLE9BQU8sRUFBRSxJQUFJO1lBQ2IsYUFBYSxFQUFFLElBQUk7WUFDbkIscUJBQXFCLEVBQUUsSUFBSTtZQUMzQixlQUFlLEVBQUUsQ0FBQyxPQUFPLEVBQUUsT0FBTyxDQUFDO1NBQ3RDLENBQUM7UUFLRSxJQUFJLENBQUMsRUFBRSxHQUFHLEVBQUUsQ0FBQztJQUNmLENBQUM7Ozs7SUFFRCw2Q0FBZTs7O0lBQWY7O1lBQ1EsUUFBUSxHQUFHLFFBQVEsQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLGVBQWUsQ0FBQztRQUV2RSxLQUFLLElB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cmVjdGl2ZSwgRWxlbWVudFJlZn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7Wm9vbVNlcnZpY2V9IGZyb20gXCIuL3pvb20uc2VydmljZVwiO1xyXG5pbXBvcnQge0ZpbGVVdGlsfSBmcm9tIFwiLi9maWxlLnNlcnZpY2VcIjtcclxuaW1wb3J0IHsgV2luZG93U2VydmljZSB9IGZyb20gJy4vd2luZG93LnNlcnZpY2UnO1xyXG5cclxuQERpcmVjdGl2ZSh7XHJcbiAgc2VsZWN0b3I6ICdbZ2RQYWdlTWFya2VyXSdcclxufSlcclxuZXhwb3J0IGNsYXNzIFBhZ2VNYXJrZXJEaXJlY3RpdmUgaW1wbGVtZW50cyBBZnRlclZpZXdJbml0IHtcclxuXHJcbm5hbWluZyA9IHtcclxuICAgIHNlY3Rpb25TZWxlY3RvcjogXCJzZWN0aW9uLnNlY3Rpb25cIixcclxuICAgIG1hcmtlclNlbGVjdG9yOiBcInNwYW4ucGFnZThtYXJrZXJcIixcclxuICAgIGhlYWRlclNlbGVjdG9yOiBcImhlYWRlci5oZWFkZXJcIixcclxuICAgIGNvbnRlbnRTZWxlY3RvcjogXCJhcnRpY2xlLmNvbnRlbnRcIixcclxuICAgIGZvb3RlclNlbGVjdG9yOiBcImZvb3Rlci5mb290ZXJcIlxyXG59XHJcblxyXG4vLyBvYnNlcnZpbmcgY29uZmlndXJhdGlvbnMuXHJcbmNvbmZpZyA9IHtcclxuICAgIGF0dHJpYnV0ZXM6IHRydWUsXHJcbiAgICBhdHRyaWJ1dGVPbGRWYWx1ZTogdHJ1ZSxcclxuICAgIGNoaWxkTGlzdDogdHJ1ZSxcclxuICAgIHN1YnRyZWU6IHRydWUsXHJcbiAgICBjaGFyYWN0ZXJEYXRhOiB0cnVlLFxyXG4gICAgY2hhcmFjdGVyRGF0YU9sZFZhbHVlOiB0cnVlLFxyXG4gICAgYXR0cmlidXRlRmlsdGVyOiBbXCJzdHlsZVwiLCBcImNsYXNzXCJdXHJcbn07XHJcblxyXG4gIGVsOiBFbGVtZW50UmVmPGFueT47XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgX3pvb21TZXJ2aWNlOiBab29tU2VydmljZSwgcHJpdmF0ZSBfd2luZG93U2VydmljZTogV2luZG93U2VydmljZSwgZWw6IEVsZW1lbnRSZWYpIHtcclxuICAgIHRoaXMuZWwgPSBlbDtcclxuICB9XHJcblxyXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpOiB2b2lkIHtcclxuICAgIGNvbnN0IHNlY3Rpb25zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCh0aGlzLm5hbWluZy5zZWN0aW9uU2VsZWN0b3IpO1xyXG5cclxuICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCBzZWN0aW9ucy5sZW5ndGg7IGluZGV4KyspIHtcclxuICAgICAgICAvLyBnZXQgc2VjdGlvblxyXG4gICAgICAgIGNvbnN0IHNlY3Rpb24gPSBzZWN0aW9uc1tpbmRleF07XHJcbiAgICAgICAgLy8gcHJvY2VzcyBzZWN0aW9uLiBhZGQgbWFya2VycyB0byB0aGlzIG9uZS5cclxuICAgICAgICB0aGlzLnByb2Nlc3NTZWN0aW9uKHNlY3Rpb24pO1xyXG4gICAgICAgIC8vIENyZWF0ZSBhbiBvYnNlcnZlciBpbnN0YW5jZSBsaW5rZWQgdG8gdGhlIGNhbGxiYWNrIGZ1bmN0aW9uLlxyXG4gICAgICAgIGNvbnN0IG9ic2VydmVyID0gbmV3IE11dGF0aW9uT2JzZXJ2ZXIodGhpcy5jYWxsYmFjay5iaW5kKHRoaXMpKTtcclxuICAgICAgICAvLyBTdGFydCBvYnNlcnZpbmcgdGhlIHRhcmdldCBzZWN0aW9ucyBmb3IgY29uZmlndXJlZCBtdXRhdGlvbnMuXHJcbiAgICAgICAgb2JzZXJ2ZXIub2JzZXJ2ZShzZWN0aW9uLCB0aGlzLmNvbmZpZyk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvLyBDYWxsYmFjayBmdW5jdGlvbiB0byBleGVjdXRlIHdoZW4gbXV0YXRpb25zIGFyZSBvYnNlcnZlZC5cclxuY2FsbGJhY2sobXV0YXRpb25zTGlzdCwgb2JzZXJ2ZXIpIHtcclxuICAgIC8vIGdldCBmaXJzdCBNdXRhdGlvblJlY29yZCBmcm9tIGxpc3QuXHJcbiAgICBjb25zdCBtdXRhdGlvbkZpcnN0ID0gbXV0YXRpb25zTGlzdFswXTtcclxuICAgIC8vIGdldCBwYXJlbnQgc2VjdGlvbi5cclxuICAgIGNvbnN0IHRhcmdldCA9IG11dGF0aW9uRmlyc3QudGFyZ2V0LnBhcmVudE5vZGUuY2xvc2VzdCh0aGlzLm5hbWluZy5zZWN0aW9uU2VsZWN0b3IpO1xyXG4gICAgaWYgKHRhcmdldCA9PT0gbnVsbCB8fCB0YXJnZXQgPT09IFwidW5kZWZpbmVkXCIpIHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICAvLyByZW1vdmUgYWxsIG1hcmtlcnMgaW4gdGhlIGN1cnJlbnQgc2VjdGlvbi5cclxuICAgIHRhcmdldC5xdWVyeVNlbGVjdG9yQWxsKHRoaXMubmFtaW5nLm1hcmtlclNlbGVjdG9yKS5mb3JFYWNoKGVsZW1lbnQgPT4ge1xyXG4gICAgICAgIGVsZW1lbnQucmVtb3ZlKCk7XHJcbiAgICB9KVxyXG4gICAgLy8gYWRkIG1hcmtlciB0byB0YXJnZXQgc2VjdGlvbnMuXHJcbiAgICB0aGlzLnByb2Nlc3NTZWN0aW9uKHRhcmdldCk7XHJcbiAgICAvLyBhIGxpc3Qgb2YgYWxsIG1hdGNoaW5nIERPTSBjaGFuZ2VzIHRoYXQgaGF2ZSBiZWVuIGRldGVjdGVkIGJ1dCBub3QgeWV0IHByb2Nlc3NlZCBieSB0aGUgb2JzZXJ2ZXIncyBjYWxsYmFjayBmdW5jdGlvbiwgbGVhdmluZyB0aGUgbXV0YXRpb24gcXVldWUgZW1wdHkuXHJcbiAgICAvLyBNQUlOIFJFQVNPTiAtIGxlYXZpbmcgdGhlIG11dGF0aW9uIHF1ZXVlIGVtcHR5LiBcclxuICAgIGNvbnN0IGxlc3QgPSBvYnNlcnZlci50YWtlUmVjb3JkcygpO1xyXG59O1xyXG5cclxuICBwcm9jZXNzU2VjdGlvbihzZWN0aW9uKSB7XHJcbiAgICBjb25zdCBoZWFkZXJIZWlnaHQgPSB0aGlzLnByb2Nlc3NIZWFkZXIoc2VjdGlvbik7XHJcbiAgICBjb25zdCBmb290ZXJIZWlnaHQgPSB0aGlzLnByb2Nlc3NGb290ZXIoc2VjdGlvbik7XHJcbiAgICAvLyBnZXQgbWF4IHBhZ2UgaGVpZ2h0IC0gZnJvbSBjc3MgJ3BhZ2luYWwuY3NzJ1xyXG4gICAgY29uc3Qgc3R5bGluZyA9IGdldENvbXB1dGVkU3R5bGUoc2VjdGlvbiwgbnVsbCk7XHJcbiAgICBjb25zdCBtaW5IZWlnaHQgPSBzdHlsaW5nLmdldFByb3BlcnR5VmFsdWUoJ21pbi1oZWlnaHQnKTtcclxuICAgIGNvbnN0IG1pbkhlaWdodE51bWJlciA9IHBhcnNlRmxvYXQobWluSGVpZ2h0KTtcclxuICAgIGNvbnN0IGNvbnRlbnRIZWlnaHQgPSBtaW5IZWlnaHROdW1iZXIgLSBoZWFkZXJIZWlnaHQgLSBmb290ZXJIZWlnaHQ7XHJcbiAgICBjb25zdCByZWFsSGVpZ2h0ID0gdGhpcy5wcm9jZXNzQ29udGVudChzZWN0aW9uKTtcclxuICAgIGxldCBlbmRQYWdlQ29vcmRpbmF0ZSA9IGNvbnRlbnRIZWlnaHQ7XHJcbiAgICB3aGlsZSAoZW5kUGFnZUNvb3JkaW5hdGUgPCByZWFsSGVpZ2h0KSB7XHJcbiAgICAgICAgY29uc3QgbWFya2VyID0gdGhpcy5odG1sVG9FbGVtZW50cyhcIjxzcGFuIGNsYXNzPSdwYWdlOG1hcmtlcicgc3R5bGU9J3RvcDpcIiArIE1hdGguY2VpbChlbmRQYWdlQ29vcmRpbmF0ZSkgK1xyXG4gICAgICAgICAgICBcInB4Oyc+PC9zcGFuPlwiKTtcclxuICAgICAgICBtYXJrZXIuZm9yRWFjaChpdGVtID0+IHtcclxuICAgICAgICAgICAgc2VjdGlvbi5hcHBlbmRDaGlsZChpdGVtKTtcclxuICAgICAgICB9KTtcclxuICAgICAgICBlbmRQYWdlQ29vcmRpbmF0ZSArPSBjb250ZW50SGVpZ2h0O1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLy8gY2FsY3VsYXRlIGhlYWRlcidzIGhlaWdodC5cclxuICAgIHByb2Nlc3NIZWFkZXIoc2VjdGlvbikge1xyXG4gICAgICAgIGNvbnN0IGhlYWRlciA9IHNlY3Rpb24ucXVlcnlTZWxlY3Rvcih0aGlzLm5hbWluZy5oZWFkZXJTZWxlY3Rvcik7XHJcbiAgICAgICAgcmV0dXJuIGhlYWRlci5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS5oZWlnaHQ7XHJcbiAgICB9O1xyXG5cclxuICAgIC8vIGNhbGN1bGF0ZSByZWFsIGhlaWdodCBvZiB0aGUgY29udGVudC4gd2l0aG91dCBwYWRkaW5nLlxyXG4gICAgcHJvY2Vzc0NvbnRlbnQoc2VjdGlvbikge1xyXG4gICAgICAgIGNvbnN0IGNvbnRlbnQgPSBzZWN0aW9uLnF1ZXJ5U2VsZWN0b3IodGhpcy5uYW1pbmcuY29udGVudFNlbGVjdG9yKTtcclxuICAgICAgICBjb25zdCBoZWlnaHQgPSBjb250ZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLmhlaWdodDtcclxuICAgICAgICBjb25zdCBzdHlsaW5nID0gZ2V0Q29tcHV0ZWRTdHlsZShjb250ZW50LCBudWxsKTtcclxuICAgICAgICBjb25zdCBwYWRkaW5nQm90dG9tID0gc3R5bGluZy5nZXRQcm9wZXJ0eVZhbHVlKCdwYWRkaW5nLWJvdHRvbScpO1xyXG4gICAgICAgIGNvbnN0IHBhZGRpbmdUb3AgPSBzdHlsaW5nLmdldFByb3BlcnR5VmFsdWUoJ3BhZGRpbmctdG9wJyk7XHJcbiAgICAgICAgcmV0dXJuIGhlaWdodCAtIHBhcnNlRmxvYXQocGFkZGluZ0JvdHRvbSkgLSBwYXJzZUZsb2F0KHBhZGRpbmdUb3ApXHJcbiAgICB9O1xyXG5cclxuICAgIC8vIGNhbGN1bGF0ZSBmb290ZXIncyBoZWlnaHQuXHJcbiAgICBwcm9jZXNzRm9vdGVyKHNlY3Rpb24pIHtcclxuICAgICAgICBjb25zdCBmb290ZXIgPSBzZWN0aW9uLnF1ZXJ5U2VsZWN0b3IodGhpcy5uYW1pbmcuZm9vdGVyU2VsZWN0b3IpO1xyXG4gICAgICAgIHJldHVybiBmb290ZXIuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkuaGVpZ2h0O1xyXG4gICAgfTtcclxuXHJcbiAgICAvLyBjcmVhdGUgZG9tIGVsZW1lbnQgZnJvbSBzdHJpbmcuXHJcbiAgICBodG1sVG9FbGVtZW50cyhodG1sKSB7XHJcbiAgICAgICAgY29uc3QgdGVtcGxhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZW1wbGF0ZScpO1xyXG4gICAgICAgIHRlbXBsYXRlLmlubmVySFRNTCA9IGh0bWw7XHJcbiAgICAgICAgcmV0dXJuIHRlbXBsYXRlLmNvbnRlbnQuY2hpbGROb2RlcztcclxuICAgIH1cclxufSJdfQ==