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
     * @param {?=} userName
     */
    constructor(id, userName) {
        this.id = id;
        this.time = Date.now();
        this.text = "";
        this.userName = userName || "";
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYW5ub3RhdGlvbi1tb2RlbHMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ3JvdXBkb2NzLmV4YW1wbGVzLmFuZ3VsYXIvYW5ub3RhdGlvbi8iLCJzb3VyY2VzIjpbImxpYi9hbm5vdGF0aW9uLW1vZGVscy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFDLFNBQVMsRUFBQyxNQUFNLCtDQUErQyxDQUFDO0FBRXhFLE1BQU0sT0FBTyxjQUFjOzs7OztJQWNsQixNQUFNLENBQUMsaUJBQWlCLENBQUMsRUFBVTtRQUN4QyxRQUFRLEVBQUUsRUFBRTtZQUNWLEtBQUssY0FBYyxDQUFDLElBQUksQ0FBQyxFQUFFO2dCQUN6QixPQUFPLGNBQWMsQ0FBQyxJQUFJLENBQUM7WUFDN0IsS0FBSyxjQUFjLENBQUMsSUFBSSxDQUFDLEVBQUU7Z0JBQ3pCLE9BQU8sY0FBYyxDQUFDLElBQUksQ0FBQztZQUM3QixLQUFLLGNBQWMsQ0FBQyxLQUFLLENBQUMsRUFBRTtnQkFDMUIsT0FBTyxjQUFjLENBQUMsS0FBSyxDQUFDO1lBQzlCLEtBQUssY0FBYyxDQUFDLGNBQWMsQ0FBQyxFQUFFO2dCQUNuQyxPQUFPLGNBQWMsQ0FBQyxjQUFjLENBQUM7WUFDdkMsS0FBSyxjQUFjLENBQUMsUUFBUSxDQUFDLEVBQUU7Z0JBQzdCLE9BQU8sY0FBYyxDQUFDLFFBQVEsQ0FBQztZQUNqQyxLQUFLLGNBQWMsQ0FBQyxVQUFVLENBQUMsRUFBRTtnQkFDL0IsT0FBTyxjQUFjLENBQUMsVUFBVSxDQUFDO1lBQ25DLEtBQUssY0FBYyxDQUFDLFNBQVMsQ0FBQyxFQUFFO2dCQUM5QixPQUFPLGNBQWMsQ0FBQyxTQUFTLENBQUM7WUFDbEMsS0FBSyxjQUFjLENBQUMsZ0JBQWdCLENBQUMsRUFBRTtnQkFDckMsT0FBTyxjQUFjLENBQUMsZ0JBQWdCLENBQUM7WUFDekMsS0FBSyxjQUFjLENBQUMsS0FBSyxDQUFDLEVBQUU7Z0JBQzFCLE9BQU8sY0FBYyxDQUFDLEtBQUss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LFFBQVEsSUFBSSxFQUFFLENBQUM7SUFDakMsQ0FBQzs7Ozs7SUFFRCxNQUFNLENBQUMsTUFBTSxDQUFDLE9BQWdCOztjQUN0QixHQUFHLEdBQUcsSUFBSSxPQUFPLENBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQztRQUNuQyxHQUFHLENBQUMsSUFBSSxHQUFHLE9BQU8sQ0FBQyxJQUFJLENBQUM7UUFDeEIsR0FBRyxDQUFDLFFBQVEsR0FBRyxPQUFPLENBQUMsUUFBUSxDQUFDO1FBQ2hDLEdBQUcsQ0FBQyxJQUFJLEdBQUcsT0FBTyxDQUFDLElBQUksQ0FBQztRQUN4QixPQUFPLEdBQUcsQ0FBQztJQUNiLENBQUM7Q0FDRjs7O0lBbkJDLHFCQUFXOztJQUNYLHVCQUFhOztJQUNiLDJCQUFpQjs7SUFDakIsdUJBQWE7O0FBa0JmLE1BQU0sT0FBTyxnQkFBZ0I7Ozs7SUFDM0IsWUFBWSxFQUFVO1FBQ3BCLElBQUksQ0FBQyxFQUFFLEdBQUcsRUFBRSxDQUFDO0lBQ2YsQ0FBQztDQUdGOzs7SUFEQyw4QkFBVyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7UGFnZU1vZGVsfSBmcm9tIFwiQGdyb3VwZG9jcy5leGFtcGxlcy5hbmd1bGFyL2NvbW1vbi1jb21wb25lbnRzXCI7XG5cbmV4cG9ydCBjbGFzcyBBbm5vdGF0aW9uVHlwZSB7XG4gIHB1YmxpYyBzdGF0aWMgVEVYVCA9IHtpZDogJ3RleHRIaWdobGlnaHQnLCBuYW1lOiAnVGV4dCcsIGljb246ICdoaWdobGlnaHRlcid9O1xuICBwdWJsaWMgc3RhdGljIEFSRUEgPSB7aWQ6ICdhcmVhJywgbmFtZTogJ0FyZWEnLCBpY29uOiAndmVjdG9yLXNxdWFyZSd9O1xuICBwdWJsaWMgc3RhdGljIFBPSU5UID0ge2lkOiAncG9pbnQnLCBuYW1lOiAnUG9pbnQnLCBpY29uOiAndGh1bWJ0YWNrJ307XG4gIHB1YmxpYyBzdGF0aWMgVEVYVF9TVFJJS0VPVVQgPSB7aWQ6ICd0ZXh0U3RyaWtlb3V0JywgbmFtZTogJ1RleHQgc3RyaWtlb3V0JywgaWNvbjogJ3N0cmlrZXRocm91Z2gnLH07XG4gIHB1YmxpYyBzdGF0aWMgUE9MWUxJTkUgPSB7aWQ6ICdwb2x5bGluZScsIG5hbWU6ICdQb2x5bGluZScsIGljb246ICdzaWduYXR1cmUnfTtcbiAgcHVibGljIHN0YXRpYyBURVhUX0ZJRUxEID0ge2lkOiAndGV4dEZpZWxkJywgbmFtZTogJ1RleHQgZmllbGQnLCBpY29uOiAnaS1jdXJzb3InfTtcbiAgcHVibGljIHN0YXRpYyBXQVRFUk1BUksgPSB7aWQ6ICd3YXRlcm1hcmsnLCBuYW1lOiAnV2F0ZXJtYXJrJywgaWNvbjogJ3RpbnQnfTtcbiAgcHVibGljIHN0YXRpYyBURVhUX1JFUExBQ0VNRU5UID0ge2lkOiAndGV4dFJlcGxhY2VtZW50JywgbmFtZTogJ1RleHQgcmVwbGFjZW1lbnQnLCBpY29uOiAnZWRpdCd9O1xuICBwdWJsaWMgc3RhdGljIEFSUk9XID0ge2lkOiAnYXJyb3cnLCBuYW1lOiAnQXJyb3cnLCBpY29uOiAnbW91c2UtcG9pbnRlcid9O1xuICBwdWJsaWMgc3RhdGljIFRFWFRfUkVEQUNUSU9OID0ge2lkOiAndGV4dFJlZGFjdGlvbicsIG5hbWU6ICdUZXh0IHJlZGFjdGlvbicsIGljb246ICdicnVzaCd9O1xuICBwdWJsaWMgc3RhdGljIFRFWFRfVU5ERVJMSU5FID0ge2lkOiAndGV4dFVuZGVybGluZScsIG5hbWU6ICdUZXh0IHVuZGVybGluZScsIGljb246ICd1bmRlcmxpbmUnfTtcbiAgcHVibGljIHN0YXRpYyBESVNUQU5DRSA9IHtpZDogJ2Rpc3RhbmNlJywgbmFtZTogJ0Rpc3RhbmNlJywgaWNvbjogJ3J1bGVyJ307XG5cbiAgcHVibGljIHN0YXRpYyBnZXRBbm5vdGF0aW9uVHlwZShpZDogc3RyaW5nKSB7XG4gICAgc3dpdGNoIChpZCkge1xuICAgICAgY2FzZSBBbm5vdGF0aW9uVHlwZS5URVhULmlkOlxuICAgICAgICByZXR1cm4gQW5ub3RhdGlvblR5cGUuVEVYVDtcbiAgICAgIGNhc2UgQW5ub3RhdGlvblR5cGUuQVJFQS5pZDpcbiAgICAgICAgcmV0dXJuIEFubm90YXRpb25UeXBlLkFSRUE7XG4gICAgICBjYXNlIEFubm90YXRpb25UeXBlLlBPSU5ULmlkOlxuICAgICAgICByZXR1cm4gQW5ub3RhdGlvblR5cGUuUE9JTlQ7XG4gICAgICBjYXNlIEFubm90YXRpb25UeXBlLlRFWFRfU1RSSUtFT1VULmlkOlxuICAgICAgICByZXR1cm4gQW5ub3RhdGlvblR5cGUuVEVYVF9TVFJJS0VPVVQ7XG4gICAgICBjYXNlIEFubm90YXRpb25UeXBlLlBPTFlMSU5FLmlkOlxuICAgICAgICByZXR1cm4gQW5ub3RhdGlvblR5cGUuUE9MWUxJTkU7XG4gICAgICBjYXNlIEFubm90YXRpb25UeXBlLlRFWFRfRklFTEQuaWQ6XG4gICAgICAgIHJldHVybiBBbm5vdGF0aW9uVHlwZS5URVhUX0ZJRUxEO1xuICAgICAgY2FzZSBBbm5vdGF0aW9uVHlwZS5XQVRFUk1BUksuaWQ6XG4gICAgICAgIHJldHVybiBBbm5vdGF0aW9uVHlwZS5XQVRFUk1BUks7XG4gICAgICBjYXNlIEFubm90YXRpb25UeXBlLlRFWFRfUkVQTEFDRU1FTlQuaWQ6XG4gICAgICAgIHJldHVybiBBbm5vdGF0aW9uVHlwZS5URVhUX1JFUExBQ0VNRU5UO1xuICAgICAgY2FzZSBBbm5vdGF0aW9uVHlwZS5BUlJPVy5pZDpcbiAgICAgICAgcmV0dXJuIEFubm90YXRpb25UeXBlLkFSUk9XO1xuICAgICAgY2FzZSBBbm5vdGF0aW9uVHlwZS5URVhUX1JFREFDVElPTi5pZDpcbiAgICAgICAgcmV0dXJuIEFubm90YXRpb25UeXBlLlRFWFRfUkVEQUNUSU9OO1xuICAgICAgY2FzZSBBbm5vdGF0aW9uVHlwZS5URVhUX1VOREVSTElORS5pZDpcbiAgICAgICAgcmV0dXJuIEFubm90YXRpb25UeXBlLlRFWFRfVU5ERVJMSU5FO1xuICAgICAgY2FzZSBBbm5vdGF0aW9uVHlwZS5ESVNUQU5DRS5pZDpcbiAgICAgICAgcmV0dXJuIEFubm90YXRpb25UeXBlLkRJU1RBTkNFO1xuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgRmlsZUFubm90YXRpb25EZXNjcmlwdGlvbiB7XG4gIGd1aWQ6IHN0cmluZztcbiAgcGFnZXM6IFBhZ2VBbm5vdGF0aW9uTW9kZWxbXTtcbiAgc3VwcG9ydGVkQW5ub3RhdGlvbnM6IHN0cmluZ1tdO1xufVxuXG5leHBvcnQgY2xhc3MgUGFnZUFubm90YXRpb25Nb2RlbCBleHRlbmRzIFBhZ2VNb2RlbCB7XG4gIGFubm90YXRpb25zOiBBbm5vdGF0aW9uRGF0YVtdO1xufVxuXG5leHBvcnQgY2xhc3MgUG9zaXRpb24ge1xuICBsZWZ0OiBudW1iZXI7XG4gIHRvcDogbnVtYmVyO1xuXG4gIGNvbnN0cnVjdG9yKGxlZnQ6IG51bWJlciwgdG9wOiBudW1iZXIpIHtcbiAgICB0aGlzLmxlZnQgPSBsZWZ0O1xuICAgIHRoaXMudG9wID0gdG9wO1xuICB9XG5cbiAgc3RhdGljIGNsb25lKHBvc2l0aW9uOiBQb3NpdGlvbikge1xuICAgIHJldHVybiBuZXcgUG9zaXRpb24ocG9zaXRpb24ubGVmdCwgcG9zaXRpb24udG9wKTtcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgRGltZW5zaW9uIHtcbiAgd2lkdGg6IG51bWJlcjtcbiAgaGVpZ2h0OiBudW1iZXI7XG5cbiAgY29uc3RydWN0b3Iod2lkdGg6IG51bWJlciwgaGVpZ2h0OiBudW1iZXIpIHtcbiAgICB0aGlzLndpZHRoID0gd2lkdGg7XG4gICAgdGhpcy5oZWlnaHQgPSBoZWlnaHQ7XG4gIH1cblxuICBpc05vbmUoKSB7XG4gICAgcmV0dXJuIHRoaXMud2lkdGggPT09IDAgJiYgdGhpcy5oZWlnaHQgPT09IDA7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIEFubm90YXRpb25EYXRhIHtcblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLnRleHQgPSBcIlwiO1xuICAgIHRoaXMuZm9udENvbG9yID0gODQyMTM3NTtcbiAgfVxuXG4gIGlkOiBudW1iZXI7XG4gIGNvbW1lbnRzOiBDb21tZW50W107XG4gIHRleHQ6IHN0cmluZztcbiAgZm9udDogc3RyaW5nO1xuICBmb250U2l6ZTogbnVtYmVyO1xuICBmb250Q29sb3I6IG51bWJlcjtcbiAgaGVpZ2h0OiBudW1iZXI7XG4gIHdpZHRoOiBudW1iZXI7XG4gIGxlZnQ6IG51bWJlcjtcbiAgdG9wOiBudW1iZXI7XG4gIHBhZ2VOdW1iZXI6IG51bWJlcjtcbiAgc3ZnUGF0aDogc3RyaW5nO1xuICB0eXBlOiBzdHJpbmc7XG59XG5cbmV4cG9ydCBjbGFzcyBDb21tZW50QW5ub3RhdGlvbiB7XG4gIGNvbnN0cnVjdG9yKGlkOiBudW1iZXIpIHtcbiAgICB0aGlzLmlkID0gaWQ7XG4gIH1cblxuICBpZDogbnVtYmVyO1xufVxuXG5leHBvcnQgY2xhc3MgQ29tbWVudCB7XG5cbiAgaWQ6IG51bWJlcjtcbiAgdGV4dDogc3RyaW5nO1xuICB1c2VyTmFtZTogc3RyaW5nO1xuICB0aW1lOiBudW1iZXI7XG5cbiAgY29uc3RydWN0b3IoaWQ6IG51bWJlciwgdXNlck5hbWU/OiBzdHJpbmcpIHtcbiAgICB0aGlzLmlkID0gaWQ7XG4gICAgdGhpcy50aW1lID0gRGF0ZS5ub3coKTtcbiAgICB0aGlzLnRleHQgPSBcIlwiO1xuICAgIHRoaXMudXNlck5hbWUgPSB1c2VyTmFtZSB8fCBcIlwiO1xuICB9XG5cbiAgc3RhdGljIGNyZWF0ZShjb21tZW50OiBDb21tZW50KSB7XG4gICAgY29uc3QgcmV0ID0gbmV3IENvbW1lbnQoY29tbWVudC5pZCk7XG4gICAgcmV0LnRleHQgPSBjb21tZW50LnRleHQ7XG4gICAgcmV0LnVzZXJOYW1lID0gY29tbWVudC51c2VyTmFtZTtcbiAgICByZXQudGltZSA9IGNvbW1lbnQudGltZTtcbiAgICByZXR1cm4gcmV0O1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBSZW1vdmVBbm5vdGF0aW9uIHtcbiAgY29uc3RydWN0b3IoaWQ6IG51bWJlcikge1xuICAgIHRoaXMuaWQgPSBpZDtcbiAgfVxuXG4gIGlkOiBudW1iZXI7XG59XG4iXX0=