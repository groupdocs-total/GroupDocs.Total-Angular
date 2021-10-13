/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { PageModel } from "@groupdocs.examples.angular/common-components";
export class AnnotationType {
    /**
     * @param {?} id
     * @return {?}
     */
    static getAnnotationType(id) {
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
    }
}
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
export class FileAnnotationDescription {
}
if (false) {
    /** @type {?} */
    FileAnnotationDescription.prototype.guid;
    /** @type {?} */
    FileAnnotationDescription.prototype.pages;
    /** @type {?} */
    FileAnnotationDescription.prototype.supportedAnnotations;
}
export class PageAnnotationModel extends PageModel {
}
if (false) {
    /** @type {?} */
    PageAnnotationModel.prototype.annotations;
}
export class Position {
    /**
     * @param {?} left
     * @param {?} top
     */
    constructor(left, top) {
        this.left = left;
        this.top = top;
    }
    /**
     * @param {?} position
     * @return {?}
     */
    static clone(position) {
        return new Position(position.left, position.top);
    }
}
if (false) {
    /** @type {?} */
    Position.prototype.left;
    /** @type {?} */
    Position.prototype.top;
}
export class Dimension {
    /**
     * @param {?} width
     * @param {?} height
     */
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }
    /**
     * @return {?}
     */
    isNone() {
        return this.width === 0 && this.height === 0;
    }
}
if (false) {
    /** @type {?} */
    Dimension.prototype.width;
    /** @type {?} */
    Dimension.prototype.height;
}
export class AnnotationData {
    constructor() {
        this.text = "";
        this.fontColor = 8421375;
    }
}
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
export class CommentAnnotation {
    /**
     * @param {?} id
     */
    constructor(id) {
        this.id = id;
    }
}
if (false) {
    /** @type {?} */
    CommentAnnotation.prototype.id;
}
export class Comment {
    /**
     * @param {?} id
     */
    constructor(id) {
        this.id = id;
        this.time = Date.now();
        this.text = "";
        this.userName = "";
    }
    /**
     * @param {?} comment
     * @return {?}
     */
    static create(comment) {
        /** @type {?} */
        const ret = new Comment(comment.id);
        ret.text = comment.text;
        ret.userName = comment.userName;
        ret.time = comment.time;
        return ret;
    }
}
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
export class RemoveAnnotation {
    /**
     * @param {?} id
     */
    constructor(id) {
        this.id = id;
    }
}
if (false) {
    /** @type {?} */
    RemoveAnnotation.prototype.id;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYW5ub3RhdGlvbi1tb2RlbHMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ3JvdXBkb2NzLmV4YW1wbGVzLmFuZ3VsYXIvYW5ub3RhdGlvbi8iLCJzb3VyY2VzIjpbImxpYi9hbm5vdGF0aW9uLW1vZGVscy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFDLFNBQVMsRUFBQyxNQUFNLCtDQUErQyxDQUFDO0FBRXhFLE1BQU0sT0FBTyxjQUFjOzs7OztJQWNsQixNQUFNLENBQUMsaUJBQWlCLENBQUMsRUFBVTtRQUN4QyxRQUFRLEVBQUUsRUFBRTtZQUNWLEtBQUssY0FBYyxDQUFDLElBQUksQ0FBQyxFQUFFO2dCQUN6QixPQUFPLGNBQWMsQ0FBQyxJQUFJLENBQUM7WUFDN0IsS0FBSyxjQUFjLENBQUMsSUFBSSxDQUFDLEVBQUU7Z0JBQ3pCLE9BQU8sY0FBYyxDQUFDLElBQUksQ0FBQztZQUM3QixLQUFLLGNBQWMsQ0FBQyxLQUFLLENBQUMsRUFBRTtnQkFDMUIsT0FBTyxjQUFjLENBQUMsS0FBSyxDQUFDO1lBQzlCLEtBQUssY0FBYyxDQUFDLGNBQWMsQ0FBQyxFQUFFO2dCQUNuQyxPQUFPLGNBQWMsQ0FBQyxjQUFjLENBQUM7WUFDdkMsS0FBSyxjQUFjLENBQUMsUUFBUSxDQUFDLEVBQUU7Z0JBQzdCLE9BQU8sY0FBYyxDQUFDLFFBQVEsQ0FBQztZQUNqQyxLQUFLLGNBQWMsQ0FBQyxVQUFVLENBQUMsRUFBRTtnQkFDL0IsT0FBTyxjQUFjLENBQUMsVUFBVSxDQUFDO1lBQ25DLEtBQUssY0FBYyxDQUFDLFNBQVMsQ0FBQyxFQUFFO2dCQUM5QixPQUFPLGNBQWMsQ0FBQyxTQUFTLENBQUM7WUFDbEMsS0FBSyxjQUFjLENBQUMsZ0JBQWdCLENBQUMsRUFBRTtnQkFDckMsT0FBTyxjQUFjLENBQUMsZ0JBQWdCLENBQUM7WUFDekMsS0FBSyxjQUFjLENBQUMsS0FBSyxDQUFDLEVBQUU7Z0JBQzFCLE9BQU8sY0FBYyxDQUFDLEtBQUss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QUNyQixDQUFDOzs7OztJQUVELE1BQU0sQ0FBQyxNQUFNLENBQUMsT0FBTzs7Y0FDYixHQUFHLEdBQUcsSUFBSSxPQUFPLENBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQztRQUNuQyxHQUFHLENBQUMsSUFBSSxHQUFHLE9BQU8sQ0FBQyxJQUFJLENBQUM7UUFDeEIsR0FBRyxDQUFDLFFBQVEsR0FBRyxPQUFPLENBQUMsUUFBUSxDQUFDO1FBQ2hDLEdBQUcsQ0FBQyxJQUFJLEdBQUcsT0FBTyxDQUFDLElBQUksQ0FBQztRQUN4QixPQUFPLEdBQUcsQ0FBQztJQUNiLENBQUM7Q0FDRjs7O0lBbkJDLHFCQUFXOztJQUNYLHVCQUFhOztJQUNiLDJCQUFpQjs7SUFDakIsdUJBQWE7O0FBa0JmLE1BQU0sT0FBTyxnQkFBZ0I7Ozs7SUFDM0IsWUFBWSxFQUFVO1FBQ3BCLElBQUksQ0FBQyxFQUFFLEdBQUcsRUFBRSxDQUFDO0lBQ2YsQ0FBQztDQUdGOzs7SUFEQyw4QkFBVyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7UGFnZU1vZGVsfSBmcm9tIFwiQGdyb3VwZG9jcy5leGFtcGxlcy5hbmd1bGFyL2NvbW1vbi1jb21wb25lbnRzXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgQW5ub3RhdGlvblR5cGUge1xyXG4gIHB1YmxpYyBzdGF0aWMgVEVYVCA9IHtpZDogJ3RleHRIaWdobGlnaHQnLCBuYW1lOiAnVGV4dCcsIGljb246ICdoaWdobGlnaHRlcid9O1xyXG4gIHB1YmxpYyBzdGF0aWMgQVJFQSA9IHtpZDogJ2FyZWEnLCBuYW1lOiAnQXJlYScsIGljb246ICd2ZWN0b3Itc3F1YXJlJ307XHJcbiAgcHVibGljIHN0YXRpYyBQT0lOVCA9IHtpZDogJ3BvaW50JywgbmFtZTogJ1BvaW50JywgaWNvbjogJ3RodW1idGFjayd9O1xyXG4gIHB1YmxpYyBzdGF0aWMgVEVYVF9TVFJJS0VPVVQgPSB7aWQ6ICd0ZXh0U3RyaWtlb3V0JywgbmFtZTogJ1RleHQgc3RyaWtlb3V0JywgaWNvbjogJ3N0cmlrZXRocm91Z2gnLH07XHJcbiAgcHVibGljIHN0YXRpYyBQT0xZTElORSA9IHtpZDogJ3BvbHlsaW5lJywgbmFtZTogJ1BvbHlsaW5lJywgaWNvbjogJ3NpZ25hdHVyZSd9O1xyXG4gIHB1YmxpYyBzdGF0aWMgVEVYVF9GSUVMRCA9IHtpZDogJ3RleHRGaWVsZCcsIG5hbWU6ICdUZXh0IGZpZWxkJywgaWNvbjogJ2ktY3Vyc29yJ307XHJcbiAgcHVibGljIHN0YXRpYyBXQVRFUk1BUksgPSB7aWQ6ICd3YXRlcm1hcmsnLCBuYW1lOiAnV2F0ZXJtYXJrJywgaWNvbjogJ3RpbnQnfTtcclxuICBwdWJsaWMgc3RhdGljIFRFWFRfUkVQTEFDRU1FTlQgPSB7aWQ6ICd0ZXh0UmVwbGFjZW1lbnQnLCBuYW1lOiAnVGV4dCByZXBsYWNlbWVudCcsIGljb246ICdlZGl0J307XHJcbiAgcHVibGljIHN0YXRpYyBBUlJPVyA9IHtpZDogJ2Fycm93JywgbmFtZTogJ0Fycm93JywgaWNvbjogJ21vdXNlLXBvaW50ZXInfTtcclxuICBwdWJsaWMgc3RhdGljIFRFWFRfUkVEQUNUSU9OID0ge2lkOiAndGV4dFJlZGFjdGlvbicsIG5hbWU6ICdUZXh0IHJlZGFjdGlvbicsIGljb246ICdicnVzaCd9O1xyXG4gIHB1YmxpYyBzdGF0aWMgVEVYVF9VTkRFUkxJTkUgPSB7aWQ6ICd0ZXh0VW5kZXJsaW5lJywgbmFtZTogJ1RleHQgdW5kZXJsaW5lJywgaWNvbjogJ3VuZGVybGluZSd9O1xyXG4gIHB1YmxpYyBzdGF0aWMgRElTVEFOQ0UgPSB7aWQ6ICdkaXN0YW5jZScsIG5hbWU6ICdEaXN0YW5jZScsIGljb246ICdydWxlcid9O1xyXG5cclxuICBwdWJsaWMgc3RhdGljIGdldEFubm90YXRpb25UeXBlKGlkOiBzdHJpbmcpIHtcclxuICAgIHN3aXRjaCAoaWQpIHtcclxuICAgICAgY2FzZSBBbm5vdGF0aW9uVHlwZS5URVhULmlkOlxyXG4gICAgICAgIHJldHVybiBBbm5vdGF0aW9uVHlwZS5URVhUO1xyXG4gICAgICBjYXNlIEFubm90YXRpb25UeXBlLkFSRUEuaWQ6XHJcbiAgICAgICAgcmV0dXJuIEFubm90YXRpb25UeXBlLkFSRUE7XHJcbiAgICAgIGNhc2UgQW5ub3RhdGlvblR5cGUuUE9JTlQuaWQ6XHJcbiAgICAgICAgcmV0dXJuIEFubm90YXRpb25UeXBlLlBPSU5UO1xyXG4gICAgICBjYXNlIEFubm90YXRpb25UeXBlLlRFWFRfU1RSSUtFT1VULmlkOlxyXG4gICAgICAgIHJldHVybiBBbm5vdGF0aW9uVHlwZS5URVhUX1NUUklLRU9VVDtcclxuICAgICAgY2FzZSBBbm5vdGF0aW9uVHlwZS5QT0xZTElORS5pZDpcclxuICAgICAgICByZXR1cm4gQW5ub3RhdGlvblR5cGUuUE9MWUxJTkU7XHJcbiAgICAgIGNhc2UgQW5ub3RhdGlvblR5cGUuVEVYVF9GSUVMRC5pZDpcclxuICAgICAgICByZXR1cm4gQW5ub3RhdGlvblR5cGUuVEVYVF9GSUVMRDtcclxuICAgICAgY2FzZSBBbm5vdGF0aW9uVHlwZS5XQVRFUk1BUksuaWQ6XHJcbiAgICAgICAgcmV0dXJuIEFubm90YXRpb25UeXBlLldBVEVSTUFSSztcclxuICAgICAgY2FzZSBBbm5vdGF0aW9uVHlwZS5URVhUX1JFUExBQ0VNRU5ULmlkOlxyXG4gICAgICAgIHJldHVybiBBbm5vdGF0aW9uVHlwZS5URVhUX1JFUExBQ0VNRU5UO1xyXG4gICAgICBjYXNlIEFubm90YXRpb25UeXBlLkFSUk9XLmlkOlxyXG4gICAgICAgIHJldHVybiBBbm5vdGF0aW9uVHlwZS5BUlJPVztcclxuICAgICAgY2FzZSBBbm5vdGF0aW9uVHlwZS5URVhUX1JFREFDVElPTi5pZDpcclxuICAgICAgICByZXR1cm4gQW5ub3RhdGlvblR5cGUuVEVYVF9SRURBQ1RJT047XHJcbiAgICAgIGNhc2UgQW5ub3RhdGlvblR5cGUuVEVYVF9VTkRFUkxJTkUuaWQ6XHJcbiAgICAgICAgcmV0dXJuIEFubm90YXRpb25UeXBlLlRFWFRfVU5ERVJMSU5FO1xyXG4gICAgICBjYXNlIEFubm90YXRpb25UeXBlLkRJU1RBTkNFLmlkOlxyXG4gICAgICAgIHJldHVybiBBbm5vdGF0aW9uVHlwZS5ESVNUQU5DRTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBGaWxlQW5ub3RhdGlvbkRlc2NyaXB0aW9uIHtcclxuICBndWlkOiBzdHJpbmc7XHJcbiAgcGFnZXM6IFBhZ2VBbm5vdGF0aW9uTW9kZWxbXTtcclxuICBzdXBwb3J0ZWRBbm5vdGF0aW9uczogc3RyaW5nW107XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBQYWdlQW5ub3RhdGlvbk1vZGVsIGV4dGVuZHMgUGFnZU1vZGVsIHtcclxuICBhbm5vdGF0aW9uczogQW5ub3RhdGlvbkRhdGFbXTtcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIFBvc2l0aW9uIHtcclxuICBsZWZ0OiBudW1iZXI7XHJcbiAgdG9wOiBudW1iZXI7XHJcblxyXG4gIGNvbnN0cnVjdG9yKGxlZnQ6IG51bWJlciwgdG9wOiBudW1iZXIpIHtcclxuICAgIHRoaXMubGVmdCA9IGxlZnQ7XHJcbiAgICB0aGlzLnRvcCA9IHRvcDtcclxuICB9XHJcblxyXG4gIHN0YXRpYyBjbG9uZShwb3NpdGlvbjogUG9zaXRpb24pIHtcclxuICAgIHJldHVybiBuZXcgUG9zaXRpb24ocG9zaXRpb24ubGVmdCwgcG9zaXRpb24udG9wKTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBEaW1lbnNpb24ge1xyXG4gIHdpZHRoOiBudW1iZXI7XHJcbiAgaGVpZ2h0OiBudW1iZXI7XHJcblxyXG4gIGNvbnN0cnVjdG9yKHdpZHRoOiBudW1iZXIsIGhlaWdodDogbnVtYmVyKSB7XHJcbiAgICB0aGlzLndpZHRoID0gd2lkdGg7XHJcbiAgICB0aGlzLmhlaWdodCA9IGhlaWdodDtcclxuICB9XHJcblxyXG4gIGlzTm9uZSgpIHtcclxuICAgIHJldHVybiB0aGlzLndpZHRoID09PSAwICYmIHRoaXMuaGVpZ2h0ID09PSAwO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIEFubm90YXRpb25EYXRhIHtcclxuXHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgICB0aGlzLnRleHQgPSBcIlwiO1xyXG4gICAgdGhpcy5mb250Q29sb3IgPSA4NDIxMzc1O1xyXG4gIH1cclxuXHJcbiAgaWQ6IG51bWJlcjtcclxuICBjb21tZW50czogQ29tbWVudFtdO1xyXG4gIHRleHQ6IHN0cmluZztcclxuICBmb250OiBzdHJpbmc7XHJcbiAgZm9udFNpemU6IG51bWJlcjtcclxuICBmb250Q29sb3I6IG51bWJlcjtcclxuICBoZWlnaHQ6IG51bWJlcjtcclxuICB3aWR0aDogbnVtYmVyO1xyXG4gIGxlZnQ6IG51bWJlcjtcclxuICB0b3A6IG51bWJlcjtcclxuICBwYWdlTnVtYmVyOiBudW1iZXI7XHJcbiAgc3ZnUGF0aDogc3RyaW5nO1xyXG4gIHR5cGU6IHN0cmluZztcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIENvbW1lbnRBbm5vdGF0aW9uIHtcclxuICBjb25zdHJ1Y3RvcihpZDogbnVtYmVyKSB7XHJcbiAgICB0aGlzLmlkID0gaWQ7XHJcbiAgfVxyXG5cclxuICBpZDogbnVtYmVyO1xyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgQ29tbWVudCB7XHJcblxyXG4gIGlkOiBudW1iZXI7XHJcbiAgdGV4dDogc3RyaW5nO1xyXG4gIHVzZXJOYW1lOiBzdHJpbmc7XHJcbiAgdGltZTogbnVtYmVyO1xyXG5cclxuICBjb25zdHJ1Y3RvcihpZDogbnVtYmVyKSB7XHJcbiAgICB0aGlzLmlkID0gaWQ7XHJcbiAgICB0aGlzLnRpbWUgPSBEYXRlLm5vdygpO1xyXG4gICAgdGhpcy50ZXh0ID0gXCJcIjtcclxuICAgIHRoaXMudXNlck5hbWUgPSBcIlwiO1xyXG4gIH1cclxuXHJcbiAgc3RhdGljIGNyZWF0ZShjb21tZW50KSB7XHJcbiAgICBjb25zdCByZXQgPSBuZXcgQ29tbWVudChjb21tZW50LmlkKTtcclxuICAgIHJldC50ZXh0ID0gY29tbWVudC50ZXh0O1xyXG4gICAgcmV0LnVzZXJOYW1lID0gY29tbWVudC51c2VyTmFtZTtcclxuICAgIHJldC50aW1lID0gY29tbWVudC50aW1lO1xyXG4gICAgcmV0dXJuIHJldDtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBSZW1vdmVBbm5vdGF0aW9uIHtcclxuICBjb25zdHJ1Y3RvcihpZDogbnVtYmVyKSB7XHJcbiAgICB0aGlzLmlkID0gaWQ7XHJcbiAgfVxyXG5cclxuICBpZDogbnVtYmVyO1xyXG59XHJcbiJdfQ==