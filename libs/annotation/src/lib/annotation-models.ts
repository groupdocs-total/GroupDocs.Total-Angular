import {PageModel} from "@groupdocs.examples.angular/common-components";

export class AnnotationType {
  public static TEXT = {id: 'text', name: 'Text', icon: 'highlighter'};
  public static AREA = {id: 'area', name: 'Area', icon: 'vector-square'};
  public static POINT = {id: 'point', name: 'Point', icon: 'thumbtack'};
  public static TEXT_STRIKEOUT = {id: 'textStrikeout', name: 'Text strikeout', icon: 'strikethrough',};
  public static POLYLINE = {id: 'polyline', name: 'Polyline', icon: 'signature'};
  public static TEXT_FIELD = {id: 'textField', name: 'Text field', icon: 'i-cursor'};
  public static WATERMARK = {id: 'watermark', name: 'Watermark', icon: 'tint'};
  public static TEXT_REPLACEMENT = {id: 'textReplacement', name: 'Text replacement', icon: 'edit'};
  public static ARROW = {id: 'arrow', name: 'Arrow', icon: 'mouse-pointer'};
  public static TEXT_REDACTION = {id: 'textRedaction', name: 'Text redaction', icon: 'brush'};
  public static TEXT_UNDERLINE = {id: 'textUnderline', name: 'Text underline', icon: 'underline'};
  public static DISTANCE = {id: 'distance', name: 'Distance', icon: 'ruler'};

  public static getAnnotationType(id: string) {
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

export class FileAnnotationDescription {
  guid: string;
  pages: PageAnnotationModel[];
  supportedAnnotations: string[];
}

export class PageAnnotationModel extends PageModel {
  annotations: AnnotationData[];
}

export class Position {
  left: number;
  top: number;

  constructor(left: number, top: number) {
    this.left = left;
    this.top = top;
  }

  static clone(position: Position) {
    return new Position(position.left, position.top);
  }
}

export class Dimension {
  width: number;
  height: number;

  constructor(width: number, height: number) {
    this.width = width;
    this.height = height;
  }

  isNone() {
    return this.width === 0 && this.height === 0;
  }
}

export class AnnotationData {

  constructor() {
    this.text = "";
    this.fontColor = 8421375;
  }

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

export class CommentAnnotation {
  constructor(id: number) {
    this.id = id;
  }

  id: number;
}

export class Comment {

  id: number;
  text: string;
  userName: string;
  time: number;

  constructor(id: number) {
    this.id = id;
    this.time = Date.now();
    this.text = "";
    this.userName = "";
  }

  static create(comment) {
    const ret = new Comment(comment.id);
    ret.text = comment.text;
    ret.userName = comment.userName;
    ret.time = comment.time;
    return ret;
  }
}

export class RemoveAnnotation {
  constructor(id: number) {
    this.id = id;
  }

  id: number;
}
