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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZS1tYXJrZXIuZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdyb3VwZG9jcy5leGFtcGxlcy5hbmd1bGFyL2NvbW1vbi1jb21wb25lbnRzLyIsInNvdXJjZXMiOlsibGliL3BhZ2UtbWFya2VyLmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFnQixTQUFTLEVBQUUsVUFBVSxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQ25FLE9BQU8sRUFBQyxXQUFXLEVBQUMsTUFBTSxnQkFBZ0IsQ0FBQztBQUUzQyxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sa0JBQWtCLENBQUM7QUFFakQ7SUEwQkUsNkJBQW9CLFlBQXlCLEVBQVUsY0FBNkIsRUFBRSxFQUFjO1FBQWhGLGlCQUFZLEdBQVosWUFBWSxDQUFhO1FBQVUsbUJBQWMsR0FBZCxjQUFjLENBQWU7UUFyQnRGLFdBQU0sR0FBRztZQUNMLGVBQWUsRUFBRSxpQkFBaUI7WUFDbEMsY0FBYyxFQUFFLGtCQUFrQjtZQUNsQyxjQUFjLEVBQUUsZUFBZTtZQUMvQixlQUFlLEVBQUUsaUJBQWlCO1lBQ2xDLGNBQWMsRUFBRSxlQUFlO1NBQ2xDLENBQUE7O1FBR0QsV0FBTSxHQUFHO1lBQ0wsVUFBVSxFQUFFLElBQUk7WUFDaEIsaUJBQWlCLEVBQUUsSUFBSTtZQUN2QixTQUFTLEVBQUUsSUFBSTtZQUNmLE9BQU8sRUFBRSxJQUFJO1lBQ2IsYUFBYSxFQUFFLElBQUk7WUFDbkIscUJBQXFCLEVBQUUsSUFBSTtZQUMzQixlQUFlLEVBQUUsQ0FBQyxPQUFPLEVBQUUsT0FBTyxDQUFDO1NBQ3RDLENBQUM7UUFLRSxJQUFJLENBQUMsRUFBRSxHQUFHLEVBQUUsQ0FBQztJQUNmLENBQUM7Ozs7SUFFRCw2Q0FBZTs7O0lBQWY7O1lBQ1EsUUFBUSxHQUFHLFFBQVEsQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLGVBQWUsQ0FBQztRQUV2RSxLQUFLLElB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RVIsMkNBQWlDOzs7OztJQUFFLDZDQUFxQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7QWZ0ZXJWaWV3SW5pdCwgRGlyZWN0aXZlLCBFbGVtZW50UmVmfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHtab29tU2VydmljZX0gZnJvbSBcIi4vem9vbS5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7RmlsZVV0aWx9IGZyb20gXCIuL2ZpbGUuc2VydmljZVwiO1xyXG5pbXBvcnQgeyBXaW5kb3dTZXJ2aWNlIH0gZnJvbSAnLi93aW5kb3cuc2VydmljZSc7XHJcblxyXG5ARGlyZWN0aXZlKHtcclxuICBzZWxlY3RvcjogJ1tnZFBhZ2VNYXJrZXJdJ1xyXG59KVxyXG5leHBvcnQgY2xhc3MgUGFnZU1hcmtlckRpcmVjdGl2ZSBpbXBsZW1lbnRzIEFmdGVyVmlld0luaXQge1xyXG5cclxubmFtaW5nID0ge1xyXG4gICAgc2VjdGlvblNlbGVjdG9yOiBcInNlY3Rpb24uc2VjdGlvblwiLFxyXG4gICAgbWFya2VyU2VsZWN0b3I6IFwic3Bhbi5wYWdlOG1hcmtlclwiLFxyXG4gICAgaGVhZGVyU2VsZWN0b3I6IFwiaGVhZGVyLmhlYWRlclwiLFxyXG4gICAgY29udGVudFNlbGVjdG9yOiBcImFydGljbGUuY29udGVudFwiLFxyXG4gICAgZm9vdGVyU2VsZWN0b3I6IFwiZm9vdGVyLmZvb3RlclwiXHJcbn1cclxuXHJcbi8vIG9ic2VydmluZyBjb25maWd1cmF0aW9ucy5cclxuY29uZmlnID0ge1xyXG4gICAgYXR0cmlidXRlczogdHJ1ZSxcclxuICAgIGF0dHJpYnV0ZU9sZFZhbHVlOiB0cnVlLFxyXG4gICAgY2hpbGRMaXN0OiB0cnVlLFxyXG4gICAgc3VidHJlZTogdHJ1ZSxcclxuICAgIGNoYXJhY3RlckRhdGE6IHRydWUsXHJcbiAgICBjaGFyYWN0ZXJEYXRhT2xkVmFsdWU6IHRydWUsXHJcbiAgICBhdHRyaWJ1dGVGaWx0ZXI6IFtcInN0eWxlXCIsIFwiY2xhc3NcIl1cclxufTtcclxuXHJcbiAgZWw6IEVsZW1lbnRSZWY8YW55PjtcclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBfem9vbVNlcnZpY2U6IFpvb21TZXJ2aWNlLCBwcml2YXRlIF93aW5kb3dTZXJ2aWNlOiBXaW5kb3dTZXJ2aWNlLCBlbDogRWxlbWVudFJlZikge1xyXG4gICAgdGhpcy5lbCA9IGVsO1xyXG4gIH1cclxuXHJcbiAgbmdBZnRlclZpZXdJbml0KCk6IHZvaWQge1xyXG4gICAgY29uc3Qgc2VjdGlvbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKHRoaXMubmFtaW5nLnNlY3Rpb25TZWxlY3Rvcik7XHJcblxyXG4gICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IHNlY3Rpb25zLmxlbmd0aDsgaW5kZXgrKykge1xyXG4gICAgICAgIC8vIGdldCBzZWN0aW9uXHJcbiAgICAgICAgY29uc3Qgc2VjdGlvbiA9IHNlY3Rpb25zW2luZGV4XTtcclxuICAgICAgICAvLyBwcm9jZXNzIHNlY3Rpb24uIGFkZCBtYXJrZXJzIHRvIHRoaXMgb25lLlxyXG4gICAgICAgIHRoaXMucHJvY2Vzc1NlY3Rpb24oc2VjdGlvbik7XHJcbiAgICAgICAgLy8gQ3JlYXRlIGFuIG9ic2VydmVyIGluc3RhbmNlIGxpbmtlZCB0byB0aGUgY2FsbGJhY2sgZnVuY3Rpb24uXHJcbiAgICAgICAgY29uc3Qgb2JzZXJ2ZXIgPSBuZXcgTXV0YXRpb25PYnNlcnZlcih0aGlzLmNhbGxiYWNrLmJpbmQodGhpcykpO1xyXG4gICAgICAgIC8vIFN0YXJ0IG9ic2VydmluZyB0aGUgdGFyZ2V0IHNlY3Rpb25zIGZvciBjb25maWd1cmVkIG11dGF0aW9ucy5cclxuICAgICAgICBvYnNlcnZlci5vYnNlcnZlKHNlY3Rpb24sIHRoaXMuY29uZmlnKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8vIENhbGxiYWNrIGZ1bmN0aW9uIHRvIGV4ZWN1dGUgd2hlbiBtdXRhdGlvbnMgYXJlIG9ic2VydmVkLlxyXG5jYWxsYmFjayhtdXRhdGlvbnNMaXN0LCBvYnNlcnZlcikge1xyXG4gICAgLy8gZ2V0IGZpcnN0IE11dGF0aW9uUmVjb3JkIGZyb20gbGlzdC5cclxuICAgIGNvbnN0IG11dGF0aW9uRmlyc3QgPSBtdXRhdGlvbnNMaXN0WzBdO1xyXG4gICAgLy8gZ2V0IHBhcmVudCBzZWN0aW9uLlxyXG4gICAgY29uc3QgcGFyZW50Tm9kZSA9IG11dGF0aW9uRmlyc3QudGFyZ2V0LnBhcmVudE5vZGU7XHJcbiAgICBpZiAocGFyZW50Tm9kZSkge1xyXG4gICAgICAgIGNvbnN0IHRhcmdldCA9IG11dGF0aW9uRmlyc3QudGFyZ2V0LnBhcmVudE5vZGUuY2xvc2VzdCh0aGlzLm5hbWluZy5zZWN0aW9uU2VsZWN0b3IpO1xyXG4gICAgICAgIGlmICh0YXJnZXQgPT09IG51bGwgfHwgdGFyZ2V0ID09PSBcInVuZGVmaW5lZFwiKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gcmVtb3ZlIGFsbCBtYXJrZXJzIGluIHRoZSBjdXJyZW50IHNlY3Rpb24uXHJcbiAgICAgICAgdGFyZ2V0LnF1ZXJ5U2VsZWN0b3JBbGwodGhpcy5uYW1pbmcubWFya2VyU2VsZWN0b3IpLmZvckVhY2goZWxlbWVudCA9PiB7XHJcbiAgICAgICAgICAgIGVsZW1lbnQucmVtb3ZlKCk7XHJcbiAgICAgICAgfSlcclxuICAgICAgICAvLyBhZGQgbWFya2VyIHRvIHRhcmdldCBzZWN0aW9ucy5cclxuICAgICAgICB0aGlzLnByb2Nlc3NTZWN0aW9uKHRhcmdldCk7XHJcbiAgICAgICAgLy8gYSBsaXN0IG9mIGFsbCBtYXRjaGluZyBET00gY2hhbmdlcyB0aGF0IGhhdmUgYmVlbiBkZXRlY3RlZCBidXQgbm90IHlldCBwcm9jZXNzZWQgYnkgdGhlIG9ic2VydmVyJ3MgY2FsbGJhY2sgZnVuY3Rpb24sIGxlYXZpbmcgdGhlIG11dGF0aW9uIHF1ZXVlIGVtcHR5LlxyXG4gICAgICAgIC8vIE1BSU4gUkVBU09OIC0gbGVhdmluZyB0aGUgbXV0YXRpb24gcXVldWUgZW1wdHkuIFxyXG4gICAgICAgIGNvbnN0IGxlc3QgPSBvYnNlcnZlci50YWtlUmVjb3JkcygpO1xyXG4gICAgfVxyXG59O1xyXG5cclxuICBwcm9jZXNzU2VjdGlvbihzZWN0aW9uKSB7XHJcbiAgICBjb25zdCBoZWFkZXJIZWlnaHQgPSB0aGlzLnByb2Nlc3NIZWFkZXIoc2VjdGlvbik7XHJcbiAgICBjb25zdCBmb290ZXJIZWlnaHQgPSB0aGlzLnByb2Nlc3NGb290ZXIoc2VjdGlvbik7XHJcbiAgICAvLyBnZXQgbWF4IHBhZ2UgaGVpZ2h0IC0gZnJvbSBjc3MgJ3BhZ2luYWwuY3NzJ1xyXG4gICAgY29uc3Qgc3R5bGluZyA9IGdldENvbXB1dGVkU3R5bGUoc2VjdGlvbiwgbnVsbCk7XHJcbiAgICBjb25zdCBtaW5IZWlnaHQgPSBzdHlsaW5nLmdldFByb3BlcnR5VmFsdWUoJ21pbi1oZWlnaHQnKTtcclxuICAgIGNvbnN0IG1pbkhlaWdodE51bWJlciA9IHBhcnNlRmxvYXQobWluSGVpZ2h0KTtcclxuICAgIGNvbnN0IGNvbnRlbnRIZWlnaHQgPSBtaW5IZWlnaHROdW1iZXIgLSBoZWFkZXJIZWlnaHQgLSBmb290ZXJIZWlnaHQ7XHJcbiAgICBjb25zdCByZWFsSGVpZ2h0ID0gdGhpcy5wcm9jZXNzQ29udGVudChzZWN0aW9uKTtcclxuICAgIGxldCBlbmRQYWdlQ29vcmRpbmF0ZSA9IGNvbnRlbnRIZWlnaHQ7XHJcbiAgICB3aGlsZSAoZW5kUGFnZUNvb3JkaW5hdGUgPCByZWFsSGVpZ2h0KSB7XHJcbiAgICAgICAgY29uc3QgbWFya2VyID0gdGhpcy5odG1sVG9FbGVtZW50cyhcIjxzcGFuIGNsYXNzPSdwYWdlOG1hcmtlcicgc3R5bGU9J3RvcDpcIiArIE1hdGguY2VpbChlbmRQYWdlQ29vcmRpbmF0ZSkgK1xyXG4gICAgICAgICAgICBcInB4Oyc+PC9zcGFuPlwiKTtcclxuICAgICAgICBtYXJrZXIuZm9yRWFjaChpdGVtID0+IHtcclxuICAgICAgICAgICAgc2VjdGlvbi5hcHBlbmRDaGlsZChpdGVtKTtcclxuICAgICAgICB9KTtcclxuICAgICAgICBlbmRQYWdlQ29vcmRpbmF0ZSArPSBjb250ZW50SGVpZ2h0O1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLy8gY2FsY3VsYXRlIGhlYWRlcidzIGhlaWdodC5cclxuICAgIHByb2Nlc3NIZWFkZXIoc2VjdGlvbikge1xyXG4gICAgICAgIGNvbnN0IGhlYWRlciA9IHNlY3Rpb24ucXVlcnlTZWxlY3Rvcih0aGlzLm5hbWluZy5oZWFkZXJTZWxlY3Rvcik7XHJcbiAgICAgICAgcmV0dXJuIGhlYWRlci5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS5oZWlnaHQ7XHJcbiAgICB9O1xyXG5cclxuICAgIC8vIGNhbGN1bGF0ZSByZWFsIGhlaWdodCBvZiB0aGUgY29udGVudC4gd2l0aG91dCBwYWRkaW5nLlxyXG4gICAgcHJvY2Vzc0NvbnRlbnQoc2VjdGlvbikge1xyXG4gICAgICAgIGNvbnN0IGNvbnRlbnQgPSBzZWN0aW9uLnF1ZXJ5U2VsZWN0b3IodGhpcy5uYW1pbmcuY29udGVudFNlbGVjdG9yKTtcclxuICAgICAgICBjb25zdCBoZWlnaHQgPSBjb250ZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLmhlaWdodDtcclxuICAgICAgICBjb25zdCBzdHlsaW5nID0gZ2V0Q29tcHV0ZWRTdHlsZShjb250ZW50LCBudWxsKTtcclxuICAgICAgICBjb25zdCBwYWRkaW5nQm90dG9tID0gc3R5bGluZy5nZXRQcm9wZXJ0eVZhbHVlKCdwYWRkaW5nLWJvdHRvbScpO1xyXG4gICAgICAgIGNvbnN0IHBhZGRpbmdUb3AgPSBzdHlsaW5nLmdldFByb3BlcnR5VmFsdWUoJ3BhZGRpbmctdG9wJyk7XHJcbiAgICAgICAgcmV0dXJuIGhlaWdodCAtIHBhcnNlRmxvYXQocGFkZGluZ0JvdHRvbSkgLSBwYXJzZUZsb2F0KHBhZGRpbmdUb3ApXHJcbiAgICB9O1xyXG5cclxuICAgIC8vIGNhbGN1bGF0ZSBmb290ZXIncyBoZWlnaHQuXHJcbiAgICBwcm9jZXNzRm9vdGVyKHNlY3Rpb24pIHtcclxuICAgICAgICBjb25zdCBmb290ZXIgPSBzZWN0aW9uLnF1ZXJ5U2VsZWN0b3IodGhpcy5uYW1pbmcuZm9vdGVyU2VsZWN0b3IpO1xyXG4gICAgICAgIHJldHVybiBmb290ZXIuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkuaGVpZ2h0O1xyXG4gICAgfTtcclxuXHJcbiAgICAvLyBjcmVhdGUgZG9tIGVsZW1lbnQgZnJvbSBzdHJpbmcuXHJcbiAgICBodG1sVG9FbGVtZW50cyhodG1sKSB7XHJcbiAgICAgICAgY29uc3QgdGVtcGxhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZW1wbGF0ZScpO1xyXG4gICAgICAgIHRlbXBsYXRlLmlubmVySFRNTCA9IGh0bWw7XHJcbiAgICAgICAgcmV0dXJuIHRlbXBsYXRlLmNvbnRlbnQuY2hpbGROb2RlcztcclxuICAgIH1cclxufSJdfQ==