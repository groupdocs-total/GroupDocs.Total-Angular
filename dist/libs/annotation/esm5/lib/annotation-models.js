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
    AnnotationType.TEXT = { id: 'textHighlight', name: 'Text', icon: 'highlighter' };
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
    function Comment(id, userName) {
        this.id = id;
        this.time = Date.now();
        this.text = "";
        this.userName = userName || "";
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYW5ub3RhdGlvbi1tb2RlbHMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ3JvdXBkb2NzLmV4YW1wbGVzLmFuZ3VsYXIvYW5ub3RhdGlvbi8iLCJzb3VyY2VzIjpbImxpYi9hbm5vdGF0aW9uLW1vZGVscy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBQyxTQUFTLEVBQUMsTUFBTSwrQ0FBK0MsQ0FBQztBQUV4RTtJQUFBO0lBMENBLENBQUM7Ozs7O0lBNUJlLGdDQUFpQjs7OztJQUEvQixVQUFnQyxFQUFVO1FBQ3hDLFFBQVEsRUFBRSxFQUFFO1lBQ1YsS0FBSyxjQUFjLENBQUMsSUFBSSxDQUFDLEVBQUU7Z0JBQ3pCLE9BQU8sY0FBYyxDQUFDLElBQUksQ0FBQztZQUM3QixLQUFLLGNBQWMsQ0FBQyxJQUFJLENBQUMsRUFBRTtnQkFDekIsT0FBTyxjQUFjLENBQUMsSUFBSSxDQUFDO1lBQzdCLEtBQUssY0FBYyxDQUFDLEtBQUssQ0FBQyxFQUFFO2dCQUMxQixPQUFPLGNBQWMsQ0FBQyxLQUFLLENBQUM7WUFDOUIsS0FBSyxjQUFjLENBQUMsY0FBYyxDQUFDLEVBQUU7Z0JBQ25DLE9BQU8sY0FBYyxDQUFDLGNBQWMsQ0FBQztZQUN2QyxLQUFLLGNBQWMsQ0FBQyxRQUFRLENBQUMsRUFBRTtnQkFDN0IsT0FBTyxjQUFjLENBQUMsUUFBUSxDQUFDO1lBQ2pDLEtBQUssY0FBYyxDQUFDLFVBQVUsQ0FBQyxFQUFFO2dCQUMvQixPQUFPLGNBQWMsQ0FBQyxVQUFVLENBQUM7WUFDbkMsS0FBSyxjQUFjLENBQUMsU0FBUyxDQUFDLEVBQUU7Z0JBQzlCLE9BQU8sY0FBYyxDQUFDLFNBQVMsQ0FBQztZQUNsQyxLQUFLLGNBQWMsQ0FBQyxnQkFBZ0IsQ0FBQyxFQUFFO2dCQUNyQyxPQUFPLGNBQWMsQ0FBQyxnQkFBZ0IsQ0FBQztZQUN6QyxLQUFLLGNBQWMsQ0FBQyxLQUFLLENBQUMsRUFBRTtnQkFDMUIsT0FBTyxjQUFjLENBQUMsS0FB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QUUsR0FBRyxFQUFFLENBQUM7UUFDYixJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxHQUFHLEVBQUUsQ0FBQztRQUN2QixJQUFJLENBQUMsSUFBSSxHQUFHLEVBQUUsQ0FBQztRQUNmLElBQUksQ0FBQyxRQUFRLEdBQUcsUUFBUSxJQUFJLEVBQUUsQ0FBQztJQUNqQyxDQUFDOzs7OztJQUVNLGNBQU07Ozs7SUFBYixVQUFjLE9BQWdCOztZQUN0QixHQUFHLEdBQUcsSUFBSSxPQUFPLENBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQztRQUNuQyxHQUFHLENBQUMsSUFBSSxHQUFHLE9BQU8sQ0FBQyxJQUFJLENBQUM7UUFDeEIsR0FBRyxDQUFDLFFBQVEsR0FBRyxPQUFPLENBQUMsUUFBUSxDQUFDO1FBQ2hDLEdBQUcsQ0FBQyxJQUFJLEdBQUcsT0FBTyxDQUFDLElBQUksQ0FBQztRQUN4QixPQUFPLEdBQUcsQ0FBQztJQUNiLENBQUM7SUFDSCxjQUFDO0FBQUQsQ0FBQyxBQXJCRCxJQXFCQzs7OztJQW5CQyxxQkFBVzs7SUFDWCx1QkFBYTs7SUFDYiwyQkFBaUI7O0lBQ2pCLHVCQUFhOztBQWtCZjtJQUNFLDBCQUFZLEVBQVU7UUFDcEIsSUFBSSxDQUFDLEVBQUUsR0FBRyxFQUFFLENBQUM7SUFDZixDQUFDO0lBR0gsdUJBQUM7QUFBRCxDQUFDLEFBTkQsSUFNQzs7OztJQURDLDhCQUFXIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtQYWdlTW9kZWx9IGZyb20gXCJAZ3JvdXBkb2NzLmV4YW1wbGVzLmFuZ3VsYXIvY29tbW9uLWNvbXBvbmVudHNcIjtcblxuZXhwb3J0IGNsYXNzIEFubm90YXRpb25UeXBlIHtcbiAgcHVibGljIHN0YXRpYyBURVhUID0ge2lkOiAndGV4dEhpZ2hsaWdodCcsIG5hbWU6ICdUZXh0JywgaWNvbjogJ2hpZ2hsaWdodGVyJ307XG4gIHB1YmxpYyBzdGF0aWMgQVJFQSA9IHtpZDogJ2FyZWEnLCBuYW1lOiAnQXJlYScsIGljb246ICd2ZWN0b3Itc3F1YXJlJ307XG4gIHB1YmxpYyBzdGF0aWMgUE9JTlQgPSB7aWQ6ICdwb2ludCcsIG5hbWU6ICdQb2ludCcsIGljb246ICd0aHVtYnRhY2snfTtcbiAgcHVibGljIHN0YXRpYyBURVhUX1NUUklLRU9VVCA9IHtpZDogJ3RleHRTdHJpa2VvdXQnLCBuYW1lOiAnVGV4dCBzdHJpa2VvdXQnLCBpY29uOiAnc3RyaWtldGhyb3VnaCcsfTtcbiAgcHVibGljIHN0YXRpYyBQT0xZTElORSA9IHtpZDogJ3BvbHlsaW5lJywgbmFtZTogJ1BvbHlsaW5lJywgaWNvbjogJ3NpZ25hdHVyZSd9O1xuICBwdWJsaWMgc3RhdGljIFRFWFRfRklFTEQgPSB7aWQ6ICd0ZXh0RmllbGQnLCBuYW1lOiAnVGV4dCBmaWVsZCcsIGljb246ICdpLWN1cnNvcid9O1xuICBwdWJsaWMgc3RhdGljIFdBVEVSTUFSSyA9IHtpZDogJ3dhdGVybWFyaycsIG5hbWU6ICdXYXRlcm1hcmsnLCBpY29uOiAndGludCd9O1xuICBwdWJsaWMgc3RhdGljIFRFWFRfUkVQTEFDRU1FTlQgPSB7aWQ6ICd0ZXh0UmVwbGFjZW1lbnQnLCBuYW1lOiAnVGV4dCByZXBsYWNlbWVudCcsIGljb246ICdlZGl0J307XG4gIHB1YmxpYyBzdGF0aWMgQVJST1cgPSB7aWQ6ICdhcnJvdycsIG5hbWU6ICdBcnJvdycsIGljb246ICdtb3VzZS1wb2ludGVyJ307XG4gIHB1YmxpYyBzdGF0aWMgVEVYVF9SRURBQ1RJT04gPSB7aWQ6ICd0ZXh0UmVkYWN0aW9uJywgbmFtZTogJ1RleHQgcmVkYWN0aW9uJywgaWNvbjogJ2JydXNoJ307XG4gIHB1YmxpYyBzdGF0aWMgVEVYVF9VTkRFUkxJTkUgPSB7aWQ6ICd0ZXh0VW5kZXJsaW5lJywgbmFtZTogJ1RleHQgdW5kZXJsaW5lJywgaWNvbjogJ3VuZGVybGluZSd9O1xuICBwdWJsaWMgc3RhdGljIERJU1RBTkNFID0ge2lkOiAnZGlzdGFuY2UnLCBuYW1lOiAnRGlzdGFuY2UnLCBpY29uOiAncnVsZXInfTtcblxuICBwdWJsaWMgc3RhdGljIGdldEFubm90YXRpb25UeXBlKGlkOiBzdHJpbmcpIHtcbiAgICBzd2l0Y2ggKGlkKSB7XG4gICAgICBjYXNlIEFubm90YXRpb25UeXBlLlRFWFQuaWQ6XG4gICAgICAgIHJldHVybiBBbm5vdGF0aW9uVHlwZS5URVhUO1xuICAgICAgY2FzZSBBbm5vdGF0aW9uVHlwZS5BUkVBLmlkOlxuICAgICAgICByZXR1cm4gQW5ub3RhdGlvblR5cGUuQVJFQTtcbiAgICAgIGNhc2UgQW5ub3RhdGlvblR5cGUuUE9JTlQuaWQ6XG4gICAgICAgIHJldHVybiBBbm5vdGF0aW9uVHlwZS5QT0lOVDtcbiAgICAgIGNhc2UgQW5ub3RhdGlvblR5cGUuVEVYVF9TVFJJS0VPVVQuaWQ6XG4gICAgICAgIHJldHVybiBBbm5vdGF0aW9uVHlwZS5URVhUX1NUUklLRU9VVDtcbiAgICAgIGNhc2UgQW5ub3RhdGlvblR5cGUuUE9MWUxJTkUuaWQ6XG4gICAgICAgIHJldHVybiBBbm5vdGF0aW9uVHlwZS5QT0xZTElORTtcbiAgICAgIGNhc2UgQW5ub3RhdGlvblR5cGUuVEVYVF9GSUVMRC5pZDpcbiAgICAgICAgcmV0dXJuIEFubm90YXRpb25UeXBlLlRFWFRfRklFTEQ7XG4gICAgICBjYXNlIEFubm90YXRpb25UeXBlLldBVEVSTUFSSy5pZDpcbiAgICAgICAgcmV0dXJuIEFubm90YXRpb25UeXBlLldBVEVSTUFSSztcbiAgICAgIGNhc2UgQW5ub3RhdGlvblR5cGUuVEVYVF9SRVBMQUNFTUVOVC5pZDpcbiAgICAgICAgcmV0dXJuIEFubm90YXRpb25UeXBlLlRFWFRfUkVQTEFDRU1FTlQ7XG4gICAgICBjYXNlIEFubm90YXRpb25UeXBlLkFSUk9XLmlkOlxuICAgICAgICByZXR1cm4gQW5ub3RhdGlvblR5cGUuQVJST1c7XG4gICAgICBjYXNlIEFubm90YXRpb25UeXBlLlRFWFRfUkVEQUNUSU9OLmlkOlxuICAgICAgICByZXR1cm4gQW5ub3RhdGlvblR5cGUuVEVYVF9SRURBQ1RJT047XG4gICAgICBjYXNlIEFubm90YXRpb25UeXBlLlRFWFRfVU5ERVJMSU5FLmlkOlxuICAgICAgICByZXR1cm4gQW5ub3RhdGlvblR5cGUuVEVYVF9VTkRFUkxJTkU7XG4gICAgICBjYXNlIEFubm90YXRpb25UeXBlLkRJU1RBTkNFLmlkOlxuICAgICAgICByZXR1cm4gQW5ub3RhdGlvblR5cGUuRElTVEFOQ0U7XG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBGaWxlQW5ub3RhdGlvbkRlc2NyaXB0aW9uIHtcbiAgZ3VpZDogc3RyaW5nO1xuICBwYWdlczogUGFnZUFubm90YXRpb25Nb2RlbFtdO1xuICBzdXBwb3J0ZWRBbm5vdGF0aW9uczogc3RyaW5nW107XG59XG5cbmV4cG9ydCBjbGFzcyBQYWdlQW5ub3RhdGlvbk1vZGVsIGV4dGVuZHMgUGFnZU1vZGVsIHtcbiAgYW5ub3RhdGlvbnM6IEFubm90YXRpb25EYXRhW107XG59XG5cbmV4cG9ydCBjbGFzcyBQb3NpdGlvbiB7XG4gIGxlZnQ6IG51bWJlcjtcbiAgdG9wOiBudW1iZXI7XG5cbiAgY29uc3RydWN0b3IobGVmdDogbnVtYmVyLCB0b3A6IG51bWJlcikge1xuICAgIHRoaXMubGVmdCA9IGxlZnQ7XG4gICAgdGhpcy50b3AgPSB0b3A7XG4gIH1cblxuICBzdGF0aWMgY2xvbmUocG9zaXRpb246IFBvc2l0aW9uKSB7XG4gICAgcmV0dXJuIG5ldyBQb3NpdGlvbihwb3NpdGlvbi5sZWZ0LCBwb3NpdGlvbi50b3ApO1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBEaW1lbnNpb24ge1xuICB3aWR0aDogbnVtYmVyO1xuICBoZWlnaHQ6IG51bWJlcjtcblxuICBjb25zdHJ1Y3Rvcih3aWR0aDogbnVtYmVyLCBoZWlnaHQ6IG51bWJlcikge1xuICAgIHRoaXMud2lkdGggPSB3aWR0aDtcbiAgICB0aGlzLmhlaWdodCA9IGhlaWdodDtcbiAgfVxuXG4gIGlzTm9uZSgpIHtcbiAgICByZXR1cm4gdGhpcy53aWR0aCA9PT0gMCAmJiB0aGlzLmhlaWdodCA9PT0gMDtcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgQW5ub3RhdGlvbkRhdGEge1xuXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMudGV4dCA9IFwiXCI7XG4gICAgdGhpcy5mb250Q29sb3IgPSA4NDIxMzc1O1xuICB9XG5cbiAgaWQ6IG51bWJlcjtcbiAgY29tbWVudHM6IENvbW1lbnRbXTtcbiAgdGV4dDogc3RyaW5nO1xuICBmb250OiBzdHJpbmc7XG4gIGZvbnRTaXplOiBudW1iZXI7XG4gIGZvbnRDb2xvcjogbnVtYmVyO1xuICBoZWlnaHQ6IG51bWJlcjtcbiAgd2lkdGg6IG51bWJlcjtcbiAgbGVmdDogbnVtYmVyO1xuICB0b3A6IG51bWJlcjtcbiAgcGFnZU51bWJlcjogbnVtYmVyO1xuICBzdmdQYXRoOiBzdHJpbmc7XG4gIHR5cGU6IHN0cmluZztcbn1cblxuZXhwb3J0IGNsYXNzIENvbW1lbnRBbm5vdGF0aW9uIHtcbiAgY29uc3RydWN0b3IoaWQ6IG51bWJlcikge1xuICAgIHRoaXMuaWQgPSBpZDtcbiAgfVxuXG4gIGlkOiBudW1iZXI7XG59XG5cbmV4cG9ydCBjbGFzcyBDb21tZW50IHtcblxuICBpZDogbnVtYmVyO1xuICB0ZXh0OiBzdHJpbmc7XG4gIHVzZXJOYW1lOiBzdHJpbmc7XG4gIHRpbWU6IG51bWJlcjtcblxuICBjb25zdHJ1Y3RvcihpZDogbnVtYmVyLCB1c2VyTmFtZT86IHN0cmluZykge1xuICAgIHRoaXMuaWQgPSBpZDtcbiAgICB0aGlzLnRpbWUgPSBEYXRlLm5vdygpO1xuICAgIHRoaXMudGV4dCA9IFwiXCI7XG4gICAgdGhpcy51c2VyTmFtZSA9IHVzZXJOYW1lIHx8IFwiXCI7XG4gIH1cblxuICBzdGF0aWMgY3JlYXRlKGNvbW1lbnQ6IENvbW1lbnQpIHtcbiAgICBjb25zdCByZXQgPSBuZXcgQ29tbWVudChjb21tZW50LmlkKTtcbiAgICByZXQudGV4dCA9IGNvbW1lbnQudGV4dDtcbiAgICByZXQudXNlck5hbWUgPSBjb21tZW50LnVzZXJOYW1lO1xuICAgIHJldC50aW1lID0gY29tbWVudC50aW1lO1xuICAgIHJldHVybiByZXQ7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIFJlbW92ZUFubm90YXRpb24ge1xuICBjb25zdHJ1Y3RvcihpZDogbnVtYmVyKSB7XG4gICAgdGhpcy5pZCA9IGlkO1xuICB9XG5cbiAgaWQ6IG51bWJlcjtcbn1cbiJdfQ==