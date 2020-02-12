import { PageModel } from "@groupdocs.examples.angular/common-components";
export declare class AnnotationType {
    static TEXT: {
        id: string;
        name: string;
        icon: string;
    };
    static AREA: {
        id: string;
        name: string;
        icon: string;
    };
    static POINT: {
        id: string;
        name: string;
        icon: string;
    };
    static TEXT_STRIKEOUT: {
        id: string;
        name: string;
        icon: string;
    };
    static POLYLINE: {
        id: string;
        name: string;
        icon: string;
    };
    static TEXT_FIELD: {
        id: string;
        name: string;
        icon: string;
    };
    static WATERMARK: {
        id: string;
        name: string;
        icon: string;
    };
    static TEXT_REPLACEMENT: {
        id: string;
        name: string;
        icon: string;
    };
    static ARROW: {
        id: string;
        name: string;
        icon: string;
    };
    static TEXT_REDACTION: {
        id: string;
        name: string;
        icon: string;
    };
    static TEXT_UNDERLINE: {
        id: string;
        name: string;
        icon: string;
    };
    static DISTANCE: {
        id: string;
        name: string;
        icon: string;
    };
    static getAnnotationType(id: string): {
        id: string;
        name: string;
        icon: string;
    };
}
export declare class FileAnnotationDescription {
    guid: string;
    pages: PageAnnotationModel[];
    supportedAnnotations: string[];
}
export declare class PageAnnotationModel extends PageModel {
    annotations: AnnotationData[];
}
export declare class Position {
    left: number;
    top: number;
    constructor(left: number, top: number);
    static clone(position: Position): Position;
}
export declare class Dimension {
    width: number;
    height: number;
    constructor(width: number, height: number);
    isNone(): boolean;
}
export declare class AnnotationData {
    constructor();
    id: number;
    comments: Comment[];
    text: string;
    font: string;
    fontSize: number;
    fontColor: number;
    height: number;
    width: number;
    left: number;
    top: number;
    pageNumber: number;
    svgPath: string;
    type: string;
}
export declare class CommentAnnotation {
    constructor(id: number);
    id: number;
}
export declare class Comment {
    id: number;
    text: string;
    userName: string;
    time: number;
    constructor(id: number);
    static create(comment: any): Comment;
}
export declare class RemoveAnnotation {
    constructor(id: number);
    id: number;
}
