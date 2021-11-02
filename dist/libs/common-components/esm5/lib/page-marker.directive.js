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
        var parentNode = mutationFirst.target.parentNode;
        if (parentNode) {
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
        }
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZS1tYXJrZXIuZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdyb3VwZG9jcy5leGFtcGxlcy5hbmd1bGFyL2NvbW1vbi1jb21wb25lbnRzLyIsInNvdXJjZXMiOlsibGliL3BhZ2UtbWFya2VyLmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFnQixTQUFTLEVBQUUsVUFBVSxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQ25FLE9BQU8sRUFBQyxXQUFXLEVBQUMsTUFBTSxnQkFBZ0IsQ0FBQztBQUUzQyxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sa0JBQWtCLENBQUM7QUFFakQ7SUEwQkUsNkJBQW9CLFlBQXlCLEVBQVUsY0FBNkIsRUFBRSxFQUFjO1FBQWhGLGlCQUFZLEdBQVosWUFBWSxDQUFhO1FBQVUsbUJBQWMsR0FBZCxjQUFjLENBQWU7UUFyQnRGLFdBQU0sR0FBRztZQUNMLGVBQWUsRUFBRSxpQkFBaUI7WUFDbEMsY0FBYyxFQUFFLGtCQUFrQjtZQUNsQyxjQUFjLEVBQUUsZUFBZTtZQUMvQixlQUFlLEVBQUUsaUJBQWlCO1lBQ2xDLGNBQWMsRUFBRSxlQUFlO1NBQ2xDLENBQUE7O1FBR0QsV0FBTSxHQUFHO1lBQ0wsVUFBVSxFQUFFLElBQUk7WUFDaEIsaUJBQWlCLEVBQUUsSUFBSTtZQUN2QixTQUFTLEVBQUUsSUFBSTtZQUNmLE9BQU8sRUFBRSxJQUFJO1lBQ2IsYUFBYSxFQUFFLElBQUk7WUFDbkIscUJBQXFCLEVBQUUsSUFBSTtZQUMzQixlQUFlLEVBQUUsQ0FBQyxPQUFPLEVBQUUsT0FBTyxDQUFDO1NBQ3RDLENBQUM7UUFLRSxJQUFJLENBQUMsRUFBRSxHQUFHLEVBQUUsQ0FBQztJQUNmLENBQUM7Ozs7SUFFRCw2Q0FBZTs7O0lBQWY7O1lBQ1EsUUFBUSxHQUFHLFFBQVEsQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLGVBQWUsQ0FBQztRQUV2RSxLQUFLLElB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RVIsMkNBQWlDOzs7OztJQUFFLDZDQUFxQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7QWZ0ZXJWaWV3SW5pdCwgRGlyZWN0aXZlLCBFbGVtZW50UmVmfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7Wm9vbVNlcnZpY2V9IGZyb20gXCIuL3pvb20uc2VydmljZVwiO1xuaW1wb3J0IHtGaWxlVXRpbH0gZnJvbSBcIi4vZmlsZS5zZXJ2aWNlXCI7XG5pbXBvcnQgeyBXaW5kb3dTZXJ2aWNlIH0gZnJvbSAnLi93aW5kb3cuc2VydmljZSc7XG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ1tnZFBhZ2VNYXJrZXJdJ1xufSlcbmV4cG9ydCBjbGFzcyBQYWdlTWFya2VyRGlyZWN0aXZlIGltcGxlbWVudHMgQWZ0ZXJWaWV3SW5pdCB7XG5cbm5hbWluZyA9IHtcbiAgICBzZWN0aW9uU2VsZWN0b3I6IFwic2VjdGlvbi5zZWN0aW9uXCIsXG4gICAgbWFya2VyU2VsZWN0b3I6IFwic3Bhbi5wYWdlOG1hcmtlclwiLFxuICAgIGhlYWRlclNlbGVjdG9yOiBcImhlYWRlci5oZWFkZXJcIixcbiAgICBjb250ZW50U2VsZWN0b3I6IFwiYXJ0aWNsZS5jb250ZW50XCIsXG4gICAgZm9vdGVyU2VsZWN0b3I6IFwiZm9vdGVyLmZvb3RlclwiXG59XG5cbi8vIG9ic2VydmluZyBjb25maWd1cmF0aW9ucy5cbmNvbmZpZyA9IHtcbiAgICBhdHRyaWJ1dGVzOiB0cnVlLFxuICAgIGF0dHJpYnV0ZU9sZFZhbHVlOiB0cnVlLFxuICAgIGNoaWxkTGlzdDogdHJ1ZSxcbiAgICBzdWJ0cmVlOiB0cnVlLFxuICAgIGNoYXJhY3RlckRhdGE6IHRydWUsXG4gICAgY2hhcmFjdGVyRGF0YU9sZFZhbHVlOiB0cnVlLFxuICAgIGF0dHJpYnV0ZUZpbHRlcjogW1wic3R5bGVcIiwgXCJjbGFzc1wiXVxufTtcblxuICBlbDogRWxlbWVudFJlZjxhbnk+O1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgX3pvb21TZXJ2aWNlOiBab29tU2VydmljZSwgcHJpdmF0ZSBfd2luZG93U2VydmljZTogV2luZG93U2VydmljZSwgZWw6IEVsZW1lbnRSZWYpIHtcbiAgICB0aGlzLmVsID0gZWw7XG4gIH1cblxuICBuZ0FmdGVyVmlld0luaXQoKTogdm9pZCB7XG4gICAgY29uc3Qgc2VjdGlvbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKHRoaXMubmFtaW5nLnNlY3Rpb25TZWxlY3Rvcik7XG5cbiAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgc2VjdGlvbnMubGVuZ3RoOyBpbmRleCsrKSB7XG4gICAgICAgIC8vIGdldCBzZWN0aW9uXG4gICAgICAgIGNvbnN0IHNlY3Rpb24gPSBzZWN0aW9uc1tpbmRleF07XG4gICAgICAgIC8vIHByb2Nlc3Mgc2VjdGlvbi4gYWRkIG1hcmtlcnMgdG8gdGhpcyBvbmUuXG4gICAgICAgIHRoaXMucHJvY2Vzc1NlY3Rpb24oc2VjdGlvbik7XG4gICAgICAgIC8vIENyZWF0ZSBhbiBvYnNlcnZlciBpbnN0YW5jZSBsaW5rZWQgdG8gdGhlIGNhbGxiYWNrIGZ1bmN0aW9uLlxuICAgICAgICBjb25zdCBvYnNlcnZlciA9IG5ldyBNdXRhdGlvbk9ic2VydmVyKHRoaXMuY2FsbGJhY2suYmluZCh0aGlzKSk7XG4gICAgICAgIC8vIFN0YXJ0IG9ic2VydmluZyB0aGUgdGFyZ2V0IHNlY3Rpb25zIGZvciBjb25maWd1cmVkIG11dGF0aW9ucy5cbiAgICAgICAgb2JzZXJ2ZXIub2JzZXJ2ZShzZWN0aW9uLCB0aGlzLmNvbmZpZyk7XG4gICAgfVxuICB9XG5cbiAgLy8gQ2FsbGJhY2sgZnVuY3Rpb24gdG8gZXhlY3V0ZSB3aGVuIG11dGF0aW9ucyBhcmUgb2JzZXJ2ZWQuXG5jYWxsYmFjayhtdXRhdGlvbnNMaXN0LCBvYnNlcnZlcikge1xuICAgIC8vIGdldCBmaXJzdCBNdXRhdGlvblJlY29yZCBmcm9tIGxpc3QuXG4gICAgY29uc3QgbXV0YXRpb25GaXJzdCA9IG11dGF0aW9uc0xpc3RbMF07XG4gICAgLy8gZ2V0IHBhcmVudCBzZWN0aW9uLlxuICAgIGNvbnN0IHBhcmVudE5vZGUgPSBtdXRhdGlvbkZpcnN0LnRhcmdldC5wYXJlbnROb2RlO1xuICAgIGlmIChwYXJlbnROb2RlKSB7XG4gICAgICAgIGNvbnN0IHRhcmdldCA9IG11dGF0aW9uRmlyc3QudGFyZ2V0LnBhcmVudE5vZGUuY2xvc2VzdCh0aGlzLm5hbWluZy5zZWN0aW9uU2VsZWN0b3IpO1xuICAgICAgICBpZiAodGFyZ2V0ID09PSBudWxsIHx8IHRhcmdldCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIC8vIHJlbW92ZSBhbGwgbWFya2VycyBpbiB0aGUgY3VycmVudCBzZWN0aW9uLlxuICAgICAgICB0YXJnZXQucXVlcnlTZWxlY3RvckFsbCh0aGlzLm5hbWluZy5tYXJrZXJTZWxlY3RvcikuZm9yRWFjaChlbGVtZW50ID0+IHtcbiAgICAgICAgICAgIGVsZW1lbnQucmVtb3ZlKCk7XG4gICAgICAgIH0pXG4gICAgICAgIC8vIGFkZCBtYXJrZXIgdG8gdGFyZ2V0IHNlY3Rpb25zLlxuICAgICAgICB0aGlzLnByb2Nlc3NTZWN0aW9uKHRhcmdldCk7XG4gICAgICAgIC8vIGEgbGlzdCBvZiBhbGwgbWF0Y2hpbmcgRE9NIGNoYW5nZXMgdGhhdCBoYXZlIGJlZW4gZGV0ZWN0ZWQgYnV0IG5vdCB5ZXQgcHJvY2Vzc2VkIGJ5IHRoZSBvYnNlcnZlcidzIGNhbGxiYWNrIGZ1bmN0aW9uLCBsZWF2aW5nIHRoZSBtdXRhdGlvbiBxdWV1ZSBlbXB0eS5cbiAgICAgICAgLy8gTUFJTiBSRUFTT04gLSBsZWF2aW5nIHRoZSBtdXRhdGlvbiBxdWV1ZSBlbXB0eS4gXG4gICAgICAgIGNvbnN0IGxlc3QgPSBvYnNlcnZlci50YWtlUmVjb3JkcygpO1xuICAgIH1cbn07XG5cbiAgcHJvY2Vzc1NlY3Rpb24oc2VjdGlvbikge1xuICAgIGNvbnN0IGhlYWRlckhlaWdodCA9IHRoaXMucHJvY2Vzc0hlYWRlcihzZWN0aW9uKTtcbiAgICBjb25zdCBmb290ZXJIZWlnaHQgPSB0aGlzLnByb2Nlc3NGb290ZXIoc2VjdGlvbik7XG4gICAgLy8gZ2V0IG1heCBwYWdlIGhlaWdodCAtIGZyb20gY3NzICdwYWdpbmFsLmNzcydcbiAgICBjb25zdCBzdHlsaW5nID0gZ2V0Q29tcHV0ZWRTdHlsZShzZWN0aW9uLCBudWxsKTtcbiAgICBjb25zdCBtaW5IZWlnaHQgPSBzdHlsaW5nLmdldFByb3BlcnR5VmFsdWUoJ21pbi1oZWlnaHQnKTtcbiAgICBjb25zdCBtaW5IZWlnaHROdW1iZXIgPSBwYXJzZUZsb2F0KG1pbkhlaWdodCk7XG4gICAgY29uc3QgY29udGVudEhlaWdodCA9IG1pbkhlaWdodE51bWJlciAtIGhlYWRlckhlaWdodCAtIGZvb3RlckhlaWdodDtcbiAgICBjb25zdCByZWFsSGVpZ2h0ID0gdGhpcy5wcm9jZXNzQ29udGVudChzZWN0aW9uKTtcbiAgICBsZXQgZW5kUGFnZUNvb3JkaW5hdGUgPSBjb250ZW50SGVpZ2h0O1xuICAgIHdoaWxlIChlbmRQYWdlQ29vcmRpbmF0ZSA8IHJlYWxIZWlnaHQpIHtcbiAgICAgICAgY29uc3QgbWFya2VyID0gdGhpcy5odG1sVG9FbGVtZW50cyhcIjxzcGFuIGNsYXNzPSdwYWdlOG1hcmtlcicgc3R5bGU9J3RvcDpcIiArIE1hdGguY2VpbChlbmRQYWdlQ29vcmRpbmF0ZSkgK1xuICAgICAgICAgICAgXCJweDsnPjwvc3Bhbj5cIik7XG4gICAgICAgIG1hcmtlci5mb3JFYWNoKGl0ZW0gPT4ge1xuICAgICAgICAgICAgc2VjdGlvbi5hcHBlbmRDaGlsZChpdGVtKTtcbiAgICAgICAgfSk7XG4gICAgICAgIGVuZFBhZ2VDb29yZGluYXRlICs9IGNvbnRlbnRIZWlnaHQ7XG4gICAgfVxuICB9XG5cbiAgLy8gY2FsY3VsYXRlIGhlYWRlcidzIGhlaWdodC5cbiAgICBwcm9jZXNzSGVhZGVyKHNlY3Rpb24pIHtcbiAgICAgICAgY29uc3QgaGVhZGVyID0gc2VjdGlvbi5xdWVyeVNlbGVjdG9yKHRoaXMubmFtaW5nLmhlYWRlclNlbGVjdG9yKTtcbiAgICAgICAgcmV0dXJuIGhlYWRlci5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS5oZWlnaHQ7XG4gICAgfTtcblxuICAgIC8vIGNhbGN1bGF0ZSByZWFsIGhlaWdodCBvZiB0aGUgY29udGVudC4gd2l0aG91dCBwYWRkaW5nLlxuICAgIHByb2Nlc3NDb250ZW50KHNlY3Rpb24pIHtcbiAgICAgICAgY29uc3QgY29udGVudCA9IHNlY3Rpb24ucXVlcnlTZWxlY3Rvcih0aGlzLm5hbWluZy5jb250ZW50U2VsZWN0b3IpO1xuICAgICAgICBjb25zdCBoZWlnaHQgPSBjb250ZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLmhlaWdodDtcbiAgICAgICAgY29uc3Qgc3R5bGluZyA9IGdldENvbXB1dGVkU3R5bGUoY29udGVudCwgbnVsbCk7XG4gICAgICAgIGNvbnN0IHBhZGRpbmdCb3R0b20gPSBzdHlsaW5nLmdldFByb3BlcnR5VmFsdWUoJ3BhZGRpbmctYm90dG9tJyk7XG4gICAgICAgIGNvbnN0IHBhZGRpbmdUb3AgPSBzdHlsaW5nLmdldFByb3BlcnR5VmFsdWUoJ3BhZGRpbmctdG9wJyk7XG4gICAgICAgIHJldHVybiBoZWlnaHQgLSBwYXJzZUZsb2F0KHBhZGRpbmdCb3R0b20pIC0gcGFyc2VGbG9hdChwYWRkaW5nVG9wKVxuICAgIH07XG5cbiAgICAvLyBjYWxjdWxhdGUgZm9vdGVyJ3MgaGVpZ2h0LlxuICAgIHByb2Nlc3NGb290ZXIoc2VjdGlvbikge1xuICAgICAgICBjb25zdCBmb290ZXIgPSBzZWN0aW9uLnF1ZXJ5U2VsZWN0b3IodGhpcy5uYW1pbmcuZm9vdGVyU2VsZWN0b3IpO1xuICAgICAgICByZXR1cm4gZm9vdGVyLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLmhlaWdodDtcbiAgICB9O1xuXG4gICAgLy8gY3JlYXRlIGRvbSBlbGVtZW50IGZyb20gc3RyaW5nLlxuICAgIGh0bWxUb0VsZW1lbnRzKGh0bWwpIHtcbiAgICAgICAgY29uc3QgdGVtcGxhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZW1wbGF0ZScpO1xuICAgICAgICB0ZW1wbGF0ZS5pbm5lckhUTUwgPSBodG1sO1xuICAgICAgICByZXR1cm4gdGVtcGxhdGUuY29udGVudC5jaGlsZE5vZGVzO1xuICAgIH1cbn0iXX0=