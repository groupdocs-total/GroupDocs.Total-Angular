/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { PageModel } from "@groupdocs.examples.angular/common-components";
var AnnotationType = /** @class */ (function () {
    function AnnotationType() {
    }
    /**
     * @param {?} id
     * @return {?}
     */
    AnnotationType.getAnnotationType = /**
     * @param {?} id
     * @return {?}
     */
    function (id) {
        switch (id) {
            case AnnotationType.TEXT.id:
                return AnnotationType.TEXT;
            case AnnotationType.AREA.id:
                return AnnotationType.AREA;
            case AnnotationType.POINT.id:
                return AnnotationType.POINT;
            case AnnotationType.TEXT_STRIKEOUT.id:
                return AnnotationType.TEXT_STRIKEOUT;
            case AnnotationType.POLYLINE.id:
                return AnnotationType.POLYLINE;
            case AnnotationType.TEXT_FIELD.id:
                return AnnotationType.TEXT_FIELD;
            case AnnotationType.WATERMARK.id:
                return AnnotationType.WATERMARK;
            case AnnotationType.TEXT_REPLACEMENT.id:
                return AnnotationType.TEXT_REPLACEMENT;
            case AnnotationType.ARROW.id:
                return AnnotationType.ARROW;
            case AnnotationType.TEXT_REDACTION.id:
                return AnnotationType.TEXT_REDACTION;
            case AnnotationType.TEXT_UNDERLINE.id:
                return AnnotationType.TEXT_UNDERLINE;
            case AnnotationType.DISTANCE.id:
                return AnnotationType.DISTANCE;
        }
    };
    AnnotationType.TEXT = { id: 'text', name: 'Text', icon: 'highlighter' };
    AnnotationType.AREA = { id: 'area', name: 'Area', icon: 'vector-square' };
    AnnotationType.POINT = { id: 'point', name: 'Point', icon: 'thumbtack' };
    AnnotationType.TEXT_STRIKEOUT = { id: 'textStrikeout', name: 'Text strikeout', icon: 'strikethrough', };
    AnnotationType.POLYLINE = { id: 'polyline', name: 'Polyline', icon: 'signature' };
    AnnotationType.TEXT_FIELD = { id: 'textField', name: 'Text field', icon: 'i-cursor' };
    AnnotationType.WATERMARK = { id: 'watermark', name: 'Watermark', icon: 'tint' };
    AnnotationType.TEXT_REPLACEMENT = { id: 'textReplacement', name: 'Text replacement', icon: 'edit' };
    AnnotationType.ARROW = { id: 'arrow', name: 'Arrow', icon: 'mouse-pointer' };
    AnnotationType.TEXT_REDACTION = { id: 'textRedaction', name: 'Text redaction', icon: 'brush' };
    AnnotationType.TEXT_UNDERLINE = { id: 'textUnderline', name: 'Text underline', icon: 'underline' };
    AnnotationType.DISTANCE = { id: 'distance', name: 'Distance', icon: 'ruler' };
    return AnnotationType;
}());
export { AnnotationType };
if (false) {
    /** @type {?} */
    AnnotationType.TEXT;
    /** @type {?} */
    AnnotationType.AREA;
    /** @type {?} */
    AnnotationType.POINT;
    /** @type {?} */
    AnnotationType.TEXT_STRIKEOUT;
    /** @type {?} */
    AnnotationType.POLYLINE;
    /** @type {?} */
    AnnotationType.TEXT_FIELD;
    /** @type {?} */
    AnnotationType.WATERMARK;
    /** @type {?} */
    AnnotationType.TEXT_REPLACEMENT;
    /** @type {?} */
    AnnotationType.ARROW;
    /** @type {?} */
    AnnotationType.TEXT_REDACTION;
    /** @type {?} */
    AnnotationType.TEXT_UNDERLINE;
    /** @type {?} */
    AnnotationType.DISTANCE;
}
var FileAnnotationDescription = /** @class */ (function () {
    function FileAnnotationDescription() {
    }
    return FileAnnotationDescription;
}());
export { FileAnnotationDescription };
if (false) {
    /** @type {?} */
    FileAnnotationDescription.prototype.guid;
    /** @type {?} */
    FileAnnotationDescription.prototype.pages;
    /** @type {?} */
    FileAnnotationDescription.prototype.supportedAnnotations;
}
var PageAnnotationModel = /** @class */ (function (_super) {
    tslib_1.__extends(PageAnnotationModel, _super);
    function PageAnnotationModel() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return PageAnnotationModel;
}(PageModel));
export { PageAnnotationModel };
if (false) {
    /** @type {?} */
    PageAnnotationModel.prototype.annotations;
}
var Position = /** @class */ (function () {
    function Position(left, top) {
        this.left = left;
        this.top = top;
    }
    /**
     * @param {?} position
     * @return {?}
     */
    Position.clone = /**
     * @param {?} position
     * @return {?}
     */
    function (position) {
        return new Position(position.left, position.top);
    };
    return Position;
}());
export { Position };
if (false) {
    /** @type {?} */
    Position.prototype.left;
    /** @type {?} */
    Position.prototype.top;
}
var Dimension = /** @class */ (function () {
    function Dimension(width, height) {
        this.width = width;
        this.height = height;
    }
    /**
     * @return {?}
     */
    Dimension.prototype.isNone = /**
     * @return {?}
     */
    function () {
        return this.width === 0 && this.height === 0;
    };
    return Dimension;
}());
export { Dimension };
if (false) {
    /** @type {?} */
    Dimension.prototype.width;
    /** @type {?} */
    Dimension.prototype.height;
}
var AnnotationData = /** @class */ (function () {
    function AnnotationData() {
        this.text = "";
        this.fontColor = 8421375;
    }
    return AnnotationData;
}());
export { AnnotationData };
if (false) {
    /** @type {?} */
    AnnotationData.prototype.id;
    /** @type {?} */
    AnnotationData.prototype.comments;
    /** @type {?} */
    AnnotationData.prototype.text;
    /** @type {?} */
    AnnotationData.prototype.font;
    /** @type {?} */
    AnnotationData.prototype.fontSize;
    /** @type {?} */
    AnnotationData.prototype.fontColor;
    /** @type {?} */
    AnnotationData.prototype.height;
    /** @type {?} */
    AnnotationData.prototype.width;
    /** @type {?} */
    AnnotationData.prototype.left;
    /** @type {?} */
    AnnotationData.prototype.top;
    /** @type {?} */
    AnnotationData.prototype.pageNumber;
    /** @type {?} */
    AnnotationData.prototype.svgPath;
    /** @type {?} */
    AnnotationData.prototype.type;
}
var CommentAnnotation = /** @class */ (function () {
    function CommentAnnotation(id) {
        this.id = id;
    }
    return CommentAnnotation;
}());
export { CommentAnnotation };
if (false) {
    /** @type {?} */
    CommentAnnotation.prototype.id;
}
var Comment = /** @class */ (function () {
    function Comment(id) {
        this.id = id;
        this.time = Date.now();
        this.text = "";
        this.userName = "";
    }
    /**
     * @param {?} comment
     * @return {?}
     */
    Comment.create = /**
     * @param {?} comment
     * @return {?}
     */
    function (comment) {
        /** @type {?} */
        var ret = new Comment(comment.id);
        ret.text = comment.text;
        ret.userName = comment.userName;
        ret.time = comment.time;
        return ret;
    };
    return Comment;
}());
export { Comment };
if (false) {
    /** @type {?} */
    Comment.prototype.id;
    /** @type {?} */
    Comment.prototype.text;
    /** @type {?} */
    Comment.prototype.userName;
    /** @type {?} */
    Comment.prototype.time;
}
var RemoveAnnotation = /** @class */ (function () {
    function RemoveAnnotation(id) {
        this.id = id;
    }
    return RemoveAnnotation;
}());
export { RemoveAnnotation };
if (false) {
    /** @type {?} */
    RemoveAnnotation.prototype.id;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYW5ub3RhdGlvbi1tb2RlbHMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ3JvdXBkb2NzLmV4YW1wbGVzLmFuZ3VsYXIvYW5ub3RhdGlvbi8iLCJzb3VyY2VzIjpbImxpYi9hbm5vdGF0aW9uLW1vZGVscy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBQyxTQUFTLEVBQUMsTUFBTSwrQ0FBK0MsQ0FBQztBQUV4RTtJQUFBO0lBMENBLENBQUM7Ozs7O0lBNUJlLGdDQUFpQjs7OztJQUEvQixVQUFnQyxFQUFVO1FBQ3hDLFFBQVEsRUFBRSxFQUFFO1lBQ1YsS0FBSyxjQUFjLENBQUMsSUFBSSxDQUFDLEVBQUU7Z0JBQ3pCLE9BQU8sY0FBYyxDQUFDLElBQUksQ0FBQztZQUM3QixLQUFLLGNBQWMsQ0FBQyxJQUFJLENBQUMsRUFBRTtnQkFDekIsT0FBTyxjQUFjLENBQUMsSUFBSSxDQUFDO1lBQzdCLEtBQUssY0FBYyxDQUFDLEtBQUssQ0FBQyxFQUFFO2dCQUMxQixPQUFPLGNBQWMsQ0FBQyxLQUFLLENBQUM7WUFDOUIsS0FBSyxjQUFjLENBQUMsY0FBYyxDQUFDLEVBQUU7Z0JBQ25DLE9BQU8sY0FBYyxDQUFDLGNBQWMsQ0FBQztZQUN2QyxLQUFLLGNBQWMsQ0FBQyxRQUFRLENBQUMsRUFBRTtnQkFDN0IsT0FBTyxjQUFjLENBQUMsUUFBUSxDQUFDO1lBQ2pDLEtBQUssY0FBYyxDQUFDLFVBQVUsQ0FBQyxFQUFFO2dCQUMvQixPQUFPLGNBQWMsQ0FBQyxVQUFVLENBQUM7WUFDbkMsS0FBSyxjQUFjLENBQUMsU0FBUyxDQUFDLEVBQUU7Z0JBQzlCLE9BQU8sY0FBYyxDQUFDLFNBQVMsQ0FBQztZQUNsQyxLQUFLLGNBQWMsQ0FBQyxnQkFBZ0IsQ0FBQyxFQUFFO2dCQUNyQyxPQUFPLGNBQWMsQ0FBQyxnQkFBZ0IsQ0FBQztZQUN6QyxLQUFLLGNBQWMsQ0FBQyxLQUFLLENBQUMsRUFBRTtnQkFDMUIsT0FBTyxjQUFjLENBQUMsS0FB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RSxDQUFDO1FBQ2IsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsR0FBRyxFQUFFLENBQUM7UUFDdkIsSUFBSSxDQUFDLElBQUksR0FBRyxFQUFFLENBQUM7UUFDZixJQUFJLENBQUMsUUFBUSxHQUFHLEVBQUUsQ0FBQztJQUNyQixDQUFDOzs7OztJQUVNLGNBQU07Ozs7SUFBYixVQUFjLE9BQU87O1lBQ2IsR0FBRyxHQUFHLElBQUksT0FBTyxDQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUM7UUFDbkMsR0FBRyxDQUFDLElBQUksR0FBRyxPQUFPLENBQUMsSUFBSSxDQUFDO1FBQ3hCLEdBQUcsQ0FBQyxRQUFRLEdBQUcsT0FBTyxDQUFDLFFBQVEsQ0FBQztRQUNoQyxHQUFHLENBQUMsSUFBSSxHQUFHLE9BQU8sQ0FBQyxJQUFJLENBQUM7UUFDeEIsT0FBTyxHQUFHLENBQUM7SUFDYixDQUFDO0lBQ0gsY0FBQztBQUFELENBQUMsQUFyQkQsSUFxQkM7Ozs7SUFuQkMscUJBQVc7O0lBQ1gsdUJBQWE7O0lBQ2IsMkJBQWlCOztJQUNqQix1QkFBYTs7QUFrQmY7SUFDRSwwQkFBWSxFQUFVO1FBQ3BCLElBQUksQ0FBQyxFQUFFLEdBQUcsRUFBRSxDQUFDO0lBQ2YsQ0FBQztJQUdILHVCQUFDO0FBQUQsQ0FBQyxBQU5ELElBTUM7Ozs7SUFEQyw4QkFBVyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7UGFnZU1vZGVsfSBmcm9tIFwiQGdyb3VwZG9jcy5leGFtcGxlcy5hbmd1bGFyL2NvbW1vbi1jb21wb25lbnRzXCI7XG5cbmV4cG9ydCBjbGFzcyBBbm5vdGF0aW9uVHlwZSB7XG4gIHB1YmxpYyBzdGF0aWMgVEVYVCA9IHtpZDogJ3RleHQnLCBuYW1lOiAnVGV4dCcsIGljb246ICdoaWdobGlnaHRlcid9O1xuICBwdWJsaWMgc3RhdGljIEFSRUEgPSB7aWQ6ICdhcmVhJywgbmFtZTogJ0FyZWEnLCBpY29uOiAndmVjdG9yLXNxdWFyZSd9O1xuICBwdWJsaWMgc3RhdGljIFBPSU5UID0ge2lkOiAncG9pbnQnLCBuYW1lOiAnUG9pbnQnLCBpY29uOiAndGh1bWJ0YWNrJ307XG4gIHB1YmxpYyBzdGF0aWMgVEVYVF9TVFJJS0VPVVQgPSB7aWQ6ICd0ZXh0U3RyaWtlb3V0JywgbmFtZTogJ1RleHQgc3RyaWtlb3V0JywgaWNvbjogJ3N0cmlrZXRocm91Z2gnLH07XG4gIHB1YmxpYyBzdGF0aWMgUE9MWUxJTkUgPSB7aWQ6ICdwb2x5bGluZScsIG5hbWU6ICdQb2x5bGluZScsIGljb246ICdzaWduYXR1cmUnfTtcbiAgcHVibGljIHN0YXRpYyBURVhUX0ZJRUxEID0ge2lkOiAndGV4dEZpZWxkJywgbmFtZTogJ1RleHQgZmllbGQnLCBpY29uOiAnaS1jdXJzb3InfTtcbiAgcHVibGljIHN0YXRpYyBXQVRFUk1BUksgPSB7aWQ6ICd3YXRlcm1hcmsnLCBuYW1lOiAnV2F0ZXJtYXJrJywgaWNvbjogJ3RpbnQnfTtcbiAgcHVibGljIHN0YXRpYyBURVhUX1JFUExBQ0VNRU5UID0ge2lkOiAndGV4dFJlcGxhY2VtZW50JywgbmFtZTogJ1RleHQgcmVwbGFjZW1lbnQnLCBpY29uOiAnZWRpdCd9O1xuICBwdWJsaWMgc3RhdGljIEFSUk9XID0ge2lkOiAnYXJyb3cnLCBuYW1lOiAnQXJyb3cnLCBpY29uOiAnbW91c2UtcG9pbnRlcid9O1xuICBwdWJsaWMgc3RhdGljIFRFWFRfUkVEQUNUSU9OID0ge2lkOiAndGV4dFJlZGFjdGlvbicsIG5hbWU6ICdUZXh0IHJlZGFjdGlvbicsIGljb246ICdicnVzaCd9O1xuICBwdWJsaWMgc3RhdGljIFRFWFRfVU5ERVJMSU5FID0ge2lkOiAndGV4dFVuZGVybGluZScsIG5hbWU6ICdUZXh0IHVuZGVybGluZScsIGljb246ICd1bmRlcmxpbmUnfTtcbiAgcHVibGljIHN0YXRpYyBESVNUQU5DRSA9IHtpZDogJ2Rpc3RhbmNlJywgbmFtZTogJ0Rpc3RhbmNlJywgaWNvbjogJ3J1bGVyJ307XG5cbiAgcHVibGljIHN0YXRpYyBnZXRBbm5vdGF0aW9uVHlwZShpZDogc3RyaW5nKSB7XG4gICAgc3dpdGNoIChpZCkge1xuICAgICAgY2FzZSBBbm5vdGF0aW9uVHlwZS5URVhULmlkOlxuICAgICAgICByZXR1cm4gQW5ub3RhdGlvblR5cGUuVEVYVDtcbiAgICAgIGNhc2UgQW5ub3RhdGlvblR5cGUuQVJFQS5pZDpcbiAgICAgICAgcmV0dXJuIEFubm90YXRpb25UeXBlLkFSRUE7XG4gICAgICBjYXNlIEFubm90YXRpb25UeXBlLlBPSU5ULmlkOlxuICAgICAgICByZXR1cm4gQW5ub3RhdGlvblR5cGUuUE9JTlQ7XG4gICAgICBjYXNlIEFubm90YXRpb25UeXBlLlRFWFRfU1RSSUtFT1VULmlkOlxuICAgICAgICByZXR1cm4gQW5ub3RhdGlvblR5cGUuVEVYVF9TVFJJS0VPVVQ7XG4gICAgICBjYXNlIEFubm90YXRpb25UeXBlLlBPTFlMSU5FLmlkOlxuICAgICAgICByZXR1cm4gQW5ub3RhdGlvblR5cGUuUE9MWUxJTkU7XG4gICAgICBjYXNlIEFubm90YXRpb25UeXBlLlRFWFRfRklFTEQuaWQ6XG4gICAgICAgIHJldHVybiBBbm5vdGF0aW9uVHlwZS5URVhUX0ZJRUxEO1xuICAgICAgY2FzZSBBbm5vdGF0aW9uVHlwZS5XQVRFUk1BUksuaWQ6XG4gICAgICAgIHJldHVybiBBbm5vdGF0aW9uVHlwZS5XQVRFUk1BUks7XG4gICAgICBjYXNlIEFubm90YXRpb25UeXBlLlRFWFRfUkVQTEFDRU1FTlQuaWQ6XG4gICAgICAgIHJldHVybiBBbm5vdGF0aW9uVHlwZS5URVhUX1JFUExBQ0VNRU5UO1xuICAgICAgY2FzZSBBbm5vdGF0aW9uVHlwZS5BUlJPVy5pZDpcbiAgICAgICAgcmV0dXJuIEFubm90YXRpb25UeXBlLkFSUk9XO1xuICAgICAgY2FzZSBBbm5vdGF0aW9uVHlwZS5URVhUX1JFREFDVElPTi5pZDpcbiAgICAgICAgcmV0dXJuIEFubm90YXRpb25UeXBlLlRFWFRfUkVEQUNUSU9OO1xuICAgICAgY2FzZSBBbm5vdGF0aW9uVHlwZS5URVhUX1VOREVSTElORS5pZDpcbiAgICAgICAgcmV0dXJuIEFubm90YXRpb25UeXBlLlRFWFRfVU5ERVJMSU5FO1xuICAgICAgY2FzZSBBbm5vdGF0aW9uVHlwZS5ESVNUQU5DRS5pZDpcbiAgICAgICAgcmV0dXJuIEFubm90YXRpb25UeXBlLkRJU1RBTkNFO1xuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgRmlsZUFubm90YXRpb25EZXNjcmlwdGlvbiB7XG4gIGd1aWQ6IHN0cmluZztcbiAgcGFnZXM6IFBhZ2VBbm5vdGF0aW9uTW9kZWxbXTtcbiAgc3VwcG9ydGVkQW5ub3RhdGlvbnM6IHN0cmluZ1tdO1xufVxuXG5leHBvcnQgY2xhc3MgUGFnZUFubm90YXRpb25Nb2RlbCBleHRlbmRzIFBhZ2VNb2RlbCB7XG4gIGFubm90YXRpb25zOiBBbm5vdGF0aW9uRGF0YVtdO1xufVxuXG5leHBvcnQgY2xhc3MgUG9zaXRpb24ge1xuICBsZWZ0OiBudW1iZXI7XG4gIHRvcDogbnVtYmVyO1xuXG4gIGNvbnN0cnVjdG9yKGxlZnQ6IG51bWJlciwgdG9wOiBudW1iZXIpIHtcbiAgICB0aGlzLmxlZnQgPSBsZWZ0O1xuICAgIHRoaXMudG9wID0gdG9wO1xuICB9XG5cbiAgc3RhdGljIGNsb25lKHBvc2l0aW9uOiBQb3NpdGlvbikge1xuICAgIHJldHVybiBuZXcgUG9zaXRpb24ocG9zaXRpb24ubGVmdCwgcG9zaXRpb24udG9wKTtcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgRGltZW5zaW9uIHtcbiAgd2lkdGg6IG51bWJlcjtcbiAgaGVpZ2h0OiBudW1iZXI7XG5cbiAgY29uc3RydWN0b3Iod2lkdGg6IG51bWJlciwgaGVpZ2h0OiBudW1iZXIpIHtcbiAgICB0aGlzLndpZHRoID0gd2lkdGg7XG4gICAgdGhpcy5oZWlnaHQgPSBoZWlnaHQ7XG4gIH1cblxuICBpc05vbmUoKSB7XG4gICAgcmV0dXJuIHRoaXMud2lkdGggPT09IDAgJiYgdGhpcy5oZWlnaHQgPT09IDA7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIEFubm90YXRpb25EYXRhIHtcblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLnRleHQgPSBcIlwiO1xuICAgIHRoaXMuZm9udENvbG9yID0gODQyMTM3NTtcbiAgfVxuXG4gIGlkOiBudW1iZXI7XG4gIGNvbW1lbnRzOiBDb21tZW50W107XG4gIHRleHQ6IHN0cmluZztcbiAgZm9udDogc3RyaW5nO1xuICBmb250U2l6ZTogbnVtYmVyO1xuICBmb250Q29sb3I6IG51bWJlcjtcbiAgaGVpZ2h0OiBudW1iZXI7XG4gIHdpZHRoOiBudW1iZXI7XG4gIGxlZnQ6IG51bWJlcjtcbiAgdG9wOiBudW1iZXI7XG4gIHBhZ2VOdW1iZXI6IG51bWJlcjtcbiAgc3ZnUGF0aDogc3RyaW5nO1xuICB0eXBlOiBzdHJpbmc7XG59XG5cbmV4cG9ydCBjbGFzcyBDb21tZW50QW5ub3RhdGlvbiB7XG4gIGNvbnN0cnVjdG9yKGlkOiBudW1iZXIpIHtcbiAgICB0aGlzLmlkID0gaWQ7XG4gIH1cblxuICBpZDogbnVtYmVyO1xufVxuXG5leHBvcnQgY2xhc3MgQ29tbWVudCB7XG5cbiAgaWQ6IG51bWJlcjtcbiAgdGV4dDogc3RyaW5nO1xuICB1c2VyTmFtZTogc3RyaW5nO1xuICB0aW1lOiBudW1iZXI7XG5cbiAgY29uc3RydWN0b3IoaWQ6IG51bWJlcikge1xuICAgIHRoaXMuaWQgPSBpZDtcbiAgICB0aGlzLnRpbWUgPSBEYXRlLm5vdygpO1xuICAgIHRoaXMudGV4dCA9IFwiXCI7XG4gICAgdGhpcy51c2VyTmFtZSA9IFwiXCI7XG4gIH1cblxuICBzdGF0aWMgY3JlYXRlKGNvbW1lbnQpIHtcbiAgICBjb25zdCByZXQgPSBuZXcgQ29tbWVudChjb21tZW50LmlkKTtcbiAgICByZXQudGV4dCA9IGNvbW1lbnQudGV4dDtcbiAgICByZXQudXNlck5hbWUgPSBjb21tZW50LnVzZXJOYW1lO1xuICAgIHJldC50aW1lID0gY29tbWVudC50aW1lO1xuICAgIHJldHVybiByZXQ7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIFJlbW92ZUFubm90YXRpb24ge1xuICBjb25zdHJ1Y3RvcihpZDogbnVtYmVyKSB7XG4gICAgdGhpcy5pZCA9IGlkO1xuICB9XG5cbiAgaWQ6IG51bWJlcjtcbn1cbiJdfQ==