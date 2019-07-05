import * as tslib_1 from "tslib";
import { Directive, ElementRef } from '@angular/core';
import { SearchService } from "./search.service";
import { HighlightSearchPipe } from "./pipes";
import { ZoomService } from "./zoom.service";
import * as jquery from "jquery";
var $ = jquery;
var SearchableDirective = /** @class */ (function () {
    function SearchableDirective(_elementRef, _searchService, _highlight, _zoomService) {
        var _this = this;
        this._elementRef = _elementRef;
        this._searchService = _searchService;
        this._highlight = _highlight;
        this._zoomService = _zoomService;
        this.current = 0;
        this.total = 0;
        this.zoom = 100;
        _searchService.currentChange.subscribe(function (current) {
            _this.current = current;
            if (_this.current !== 0) {
                _this.moveToCurrent();
            }
        });
        _searchService.textChange.subscribe(function (text) {
            _this.text = text;
            _this.highlightSearch();
        });
        this.zoom = _zoomService.zoom ? _zoomService.zoom : this.zoom;
        _zoomService.zoomChange.subscribe(function (val) {
            _this.zoom = val ? val : _this.zoom;
        });
    }
    SearchableDirective.prototype.highlightSearch = function () {
        var el = this._elementRef ? this._elementRef.nativeElement : null;
        if (el) {
            this.cleanHighlight(el);
            if (this.text) {
                this.highlightEl(el);
                var count = el.querySelectorAll('.gd-highlight').length;
                this.total = count;
            }
            else {
                this.total = 0;
            }
            this._searchService.setTotal(this.total);
        }
    };
    SearchableDirective.prototype.moveToCurrent = function () {
        if (this.current === 0) {
            return;
        }
        var currentZoom = this.getZoom();
        var el = this._elementRef ? this._elementRef.nativeElement : null;
        if (el) {
            el.querySelectorAll('.gd-highlight-select').forEach(function (value) {
                $(value).removeClass('gd-highlight-select');
            });
            var currentEl = el.querySelectorAll('.gd-highlight')[this.current - 1];
            $(currentEl).addClass('gd-highlight-select');
            if (currentEl) {
                var options = {
                    left: 0,
                    top: ($(currentEl).offset().top * currentZoom) + el.parentElement.scrollTop - 150,
                };
                el.parentElement.scrollTo(options);
            }
        }
    };
    SearchableDirective.prototype.highlightEl = function (el) {
        var textNodes = $(el).find('*').contents().filter(function () {
            var nodeName = this.parentElement.nodeName.toLowerCase();
            var checkClass = this.classList ? !this.classList.contains('gd-highlight') : true;
            return this.nodeType === 3 &&
                this.textContent.trim().length !== 0 &&
                nodeName !== 'style' &&
                nodeName !== 'title' &&
                nodeName !== 'body' &&
                nodeName !== 'script' &&
                checkClass;
        });
        var text = this.text;
        var highlight = this._highlight;
        textNodes.each(function () {
            var $this = $(this);
            var content = $this.text();
            content = highlight.transform(content, text);
            $this.replaceWith(content);
        });
        el.normalize();
    };
    SearchableDirective.prototype.cleanHighlight = function (el) {
        var nodeListOf = el.querySelectorAll('.gd-highlight');
        for (var i = 0; i < nodeListOf.length; i++) {
            var element = nodeListOf.item(i);
            element.replaceWith(element.innerText);
        }
        el.normalize();
    };
    SearchableDirective.prototype.getZoom = function () {
        return this.zoom / 100;
    };
    SearchableDirective = tslib_1.__decorate([
        Directive({
            selector: '[gdSearchable]'
        }),
        tslib_1.__metadata("design:paramtypes", [ElementRef,
            SearchService,
            HighlightSearchPipe,
            ZoomService])
    ], SearchableDirective);
    return SearchableDirective;
}());
export { SearchableDirective };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VhcmNoYWJsZS5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ3JvdXBkb2NzLmV4YW1wbGVzLmFuZ3VsYXIvY29tbW9uLWNvbXBvbmVudHMvIiwic291cmNlcyI6WyJsaWIvc2VhcmNoYWJsZS5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBQyxTQUFTLEVBQUUsVUFBVSxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQ3BELE9BQU8sRUFBQyxhQUFhLEVBQUMsTUFBTSxrQkFBa0IsQ0FBQztBQUMvQyxPQUFPLEVBQUMsbUJBQW1CLEVBQUMsTUFBTSxTQUFTLENBQUM7QUFDNUMsT0FBTyxFQUFDLFdBQVcsRUFBQyxNQUFNLGdCQUFnQixDQUFDO0FBQzNDLE9BQU8sS0FBSyxNQUFNLE1BQU0sUUFBUSxDQUFDO0FBQ2pDLElBQU0sQ0FBQyxHQUFHLE1BQU0sQ0FBQztBQUtqQjtJQU9FLDZCQUFvQixXQUFvQyxFQUNwQyxjQUE2QixFQUM3QixVQUErQixFQUMvQixZQUF5QjtRQUg3QyxpQkFvQkM7UUFwQm1CLGdCQUFXLEdBQVgsV0FBVyxDQUF5QjtRQUNwQyxtQkFBYyxHQUFkLGNBQWMsQ0FBZTtRQUM3QixlQUFVLEdBQVYsVUFBVSxDQUFxQjtRQUMvQixpQkFBWSxHQUFaLFlBQVksQ0FBYTtRQVA3QyxZQUFPLEdBQUcsQ0FBQyxDQUFDO1FBQ1osVUFBSyxHQUFHLENBQUMsQ0FBQztRQUNGLFNBQUksR0FBRyxHQUFHLENBQUM7UUFNakIsY0FBYyxDQUFDLGFBQWEsQ0FBQyxTQUFTLENBQUMsVUFBQyxPQUFlO1lBQ3JELEtBQUksQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDO1lBQ3ZCLElBQUksS0FBSSxDQUFDLE9BQU8sS0FBSyxDQUFDLEVBQUU7Z0JBQ3RCLEtBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQzthQUN0QjtRQUNILENBQUMsQ0FBQyxDQUFDO1FBRUgsY0FBYyxDQUFDLFVBQVUsQ0FBQyxTQUFTLENBQUMs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QyxFQUFFLEVBQUU7WUFDMUMsSUFBTSxPQUFPLEdBQUcsVUFBVSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUNuQyxPQUFPLENBQUMsV0FBVyxDQUFlLE9BQVEsQ0FBQyxTQUFTLENBQUMsQ0FBQztTQUN2RDtRQUNELEVBQUUsQ0FBQyxTQUFTLEVBQUUsQ0FBQztJQUNqQixDQUFDO0lBRU8scUNBQU8sR0FBZjtRQUNFLE9BQU8sSUFBSSxDQUFDLElBQUksR0FBRyxHQUFHLENBQUM7SUFDekIsQ0FBQztJQXBHVSxtQkFBbUI7UUFIL0IsU0FBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLGdCQUFnQjtTQUMzQixDQUFDO2lEQVFpQyxVQUFVO1lBQ1AsYUFBYTtZQUNqQixtQkFBbUI7WUFDakIsV0FBVztPQVZsQyxtQkFBbUIsQ0FxRy9CO0lBQUQsMEJBQUM7Q0FBQSxBQXJHRCxJQXFHQztTQXJHWSxtQkFBbUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0RpcmVjdGl2ZSwgRWxlbWVudFJlZn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge1NlYXJjaFNlcnZpY2V9IGZyb20gXCIuL3NlYXJjaC5zZXJ2aWNlXCI7XG5pbXBvcnQge0hpZ2hsaWdodFNlYXJjaFBpcGV9IGZyb20gXCIuL3BpcGVzXCI7XG5pbXBvcnQge1pvb21TZXJ2aWNlfSBmcm9tIFwiLi96b29tLnNlcnZpY2VcIjtcbmltcG9ydCAqIGFzIGpxdWVyeSBmcm9tIFwianF1ZXJ5XCI7XG5jb25zdCAkID0ganF1ZXJ5O1xuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdbZ2RTZWFyY2hhYmxlXSdcbn0pXG5leHBvcnQgY2xhc3MgU2VhcmNoYWJsZURpcmVjdGl2ZSB7XG5cbiAgdGV4dDogc3RyaW5nO1xuICBjdXJyZW50ID0gMDtcbiAgdG90YWwgPSAwO1xuICBwcml2YXRlIHpvb20gPSAxMDA7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBfZWxlbWVudFJlZjogRWxlbWVudFJlZjxIVE1MRWxlbWVudD4sXG4gICAgICAgICAgICAgIHByaXZhdGUgX3NlYXJjaFNlcnZpY2U6IFNlYXJjaFNlcnZpY2UsXG4gICAgICAgICAgICAgIHByaXZhdGUgX2hpZ2hsaWdodDogSGlnaGxpZ2h0U2VhcmNoUGlwZSxcbiAgICAgICAgICAgICAgcHJpdmF0ZSBfem9vbVNlcnZpY2U6IFpvb21TZXJ2aWNlKSB7XG4gICAgX3NlYXJjaFNlcnZpY2UuY3VycmVudENoYW5nZS5zdWJzY3JpYmUoKGN1cnJlbnQ6IG51bWJlcikgPT4ge1xuICAgICAgdGhpcy5jdXJyZW50ID0gY3VycmVudDtcbiAgICAgIGlmICh0aGlzLmN1cnJlbnQgIT09IDApIHtcbiAgICAgICAgdGhpcy5tb3ZlVG9DdXJyZW50KCk7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBfc2VhcmNoU2VydmljZS50ZXh0Q2hhbmdlLnN1YnNjcmliZSgodGV4dDogc3RyaW5nKSA9PiB7XG4gICAgICB0aGlzLnRleHQgPSB0ZXh0O1xuICAgICAgdGhpcy5oaWdobGlnaHRTZWFyY2goKTtcbiAgICB9KTtcblxuICAgIHRoaXMuem9vbSA9IF96b29tU2VydmljZS56b29tID8gX3pvb21TZXJ2aWNlLnpvb20gOiB0aGlzLnpvb207XG4gICAgX3pvb21TZXJ2aWNlLnpvb21DaGFuZ2Uuc3Vic2NyaWJlKCh2YWw6IG51bWJlcikgPT4ge1xuICAgICAgdGhpcy56b29tID0gdmFsID8gdmFsIDogdGhpcy56b29tO1xuICAgIH0pO1xuICB9XG5cbiAgcHJpdmF0ZSBoaWdobGlnaHRTZWFyY2goKSB7XG4gICAgY29uc3QgZWwgPSB0aGlzLl9lbGVtZW50UmVmID8gdGhpcy5fZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50IDogbnVsbDtcbiAgICBpZiAoZWwpIHtcbiAgICAgIHRoaXMuY2xlYW5IaWdobGlnaHQoZWwpO1xuICAgICAgaWYgKHRoaXMudGV4dCkge1xuICAgICAgICB0aGlzLmhpZ2hsaWdodEVsKGVsKTtcbiAgICAgICAgY29uc3QgY291bnQgPSBlbC5xdWVyeVNlbGVjdG9yQWxsKCcuZ2QtaGlnaGxpZ2h0JykubGVuZ3RoO1xuICAgICAgICB0aGlzLnRvdGFsID0gY291bnQ7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLnRvdGFsID0gMDtcbiAgICAgIH1cbiAgICAgIHRoaXMuX3NlYXJjaFNlcnZpY2Uuc2V0VG90YWwodGhpcy50b3RhbCk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBtb3ZlVG9DdXJyZW50KCkge1xuICAgIGlmICh0aGlzLmN1cnJlbnQgPT09IDApIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgY29uc3QgY3VycmVudFpvb20gPSB0aGlzLmdldFpvb20oKTtcbiAgICBjb25zdCBlbCA9IHRoaXMuX2VsZW1lbnRSZWYgPyB0aGlzLl9lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQgOiBudWxsO1xuICAgIGlmIChlbCkge1xuICAgICAgZWwucXVlcnlTZWxlY3RvckFsbCgnLmdkLWhpZ2hsaWdodC1zZWxlY3QnKS5mb3JFYWNoKGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICAkKHZhbHVlKS5yZW1vdmVDbGFzcygnZ2QtaGlnaGxpZ2h0LXNlbGVjdCcpO1xuICAgICAgfSk7XG4gICAgICBjb25zdCBjdXJyZW50RWwgPSBlbC5xdWVyeVNlbGVjdG9yQWxsKCcuZ2QtaGlnaGxpZ2h0JylbdGhpcy5jdXJyZW50IC0gMV07XG4gICAgICAkKGN1cnJlbnRFbCkuYWRkQ2xhc3MoJ2dkLWhpZ2hsaWdodC1zZWxlY3QnKTtcbiAgICAgIGlmIChjdXJyZW50RWwpIHtcbiAgICAgICAgY29uc3Qgb3B0aW9ucyA9IHtcbiAgICAgICAgICBsZWZ0OiAwLFxuICAgICAgICAgIHRvcDogKCQoY3VycmVudEVsKS5vZmZzZXQoKS50b3AgKiBjdXJyZW50Wm9vbSkgKyBlbC5wYXJlbnRFbGVtZW50LnNjcm9sbFRvcCAtIDE1MCxcbiAgICAgICAgfTtcbiAgICAgICAgZWwucGFyZW50RWxlbWVudC5zY3JvbGxUbyhvcHRpb25zKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBwcml2YXRlIGhpZ2hsaWdodEVsKGVsOiBFbGVtZW50KSB7XG4gICAgY29uc3QgdGV4dE5vZGVzID0gJChlbCkuZmluZCgnKicpLmNvbnRlbnRzKCkuZmlsdGVyKGZ1bmN0aW9uICgpIHtcbiAgICAgIGNvbnN0IG5vZGVOYW1lID0gdGhpcy5wYXJlbnRFbGVtZW50Lm5vZGVOYW1lLnRvTG93ZXJDYXNlKCk7XG4gICAgICBjb25zdCBjaGVja0NsYXNzID0gKDxFbGVtZW50PnRoaXMpLmNsYXNzTGlzdCA/ICEoPEVsZW1lbnQ+dGhpcykuY2xhc3NMaXN0LmNvbnRhaW5zKCdnZC1oaWdobGlnaHQnKSA6IHRydWU7XG4gICAgICByZXR1cm4gdGhpcy5ub2RlVHlwZSA9PT0gMyAmJlxuICAgICAgICB0aGlzLnRleHRDb250ZW50LnRyaW0oKS5sZW5ndGggIT09IDAgJiZcbiAgICAgICAgbm9kZU5hbWUgIT09ICdzdHlsZScgJiZcbiAgICAgICAgbm9kZU5hbWUgIT09ICd0aXRsZScgJiZcbiAgICAgICAgbm9kZU5hbWUgIT09ICdib2R5JyAmJlxuICAgICAgICBub2RlTmFtZSAhPT0gJ3NjcmlwdCcgJiZcbiAgICAgICAgY2hlY2tDbGFzcztcbiAgICB9KTtcbiAgICBjb25zdCB0ZXh0ID0gdGhpcy50ZXh0O1xuICAgIGNvbnN0IGhpZ2hsaWdodCA9IHRoaXMuX2hpZ2hsaWdodDtcbiAgICB0ZXh0Tm9kZXMuZWFjaChmdW5jdGlvbiAoKSB7XG4gICAgICBjb25zdCAkdGhpcyA9ICQodGhpcyk7XG4gICAgICBsZXQgY29udGVudCA9ICR0aGlzLnRleHQoKTtcbiAgICAgIGNvbnRlbnQgPSBoaWdobGlnaHQudHJhbnNmb3JtKGNvbnRlbnQsIHRleHQpO1xuICAgICAgJHRoaXMucmVwbGFjZVdpdGgoY29udGVudCk7XG4gICAgfSk7XG4gICAgZWwubm9ybWFsaXplKCk7XG4gIH1cblxuICBwcml2YXRlIGNsZWFuSGlnaGxpZ2h0KGVsOiBIVE1MRWxlbWVudCkge1xuICAgIGNvbnN0IG5vZGVMaXN0T2YgPSBlbC5xdWVyeVNlbGVjdG9yQWxsKCcuZ2QtaGlnaGxpZ2h0Jyk7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBub2RlTGlzdE9mLmxlbmd0aDsgaSsrKSB7XG4gICAgICBjb25zdCBlbGVtZW50ID0gbm9kZUxpc3RPZi5pdGVtKGkpO1xuICAgICAgZWxlbWVudC5yZXBsYWNlV2l0aCgoPEhUTUxFbGVtZW50PmVsZW1lbnQpLmlubmVyVGV4dCk7XG4gICAgfVxuICAgIGVsLm5vcm1hbGl6ZSgpO1xuICB9XG5cbiAgcHJpdmF0ZSBnZXRab29tKCkge1xuICAgIHJldHVybiB0aGlzLnpvb20gLyAxMDA7XG4gIH1cbn1cbiJdfQ==