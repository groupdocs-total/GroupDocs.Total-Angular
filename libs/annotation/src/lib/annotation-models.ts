export class AnnotationType {
  public static TEXT = {id: 'text', name: 'Text annotations', icon: 'highlighter', title: ''};
  public static AREA = {id: 'area', name: 'Uploaded Images', icon: 'vector-square', title: 'Add area annotation'};
  public static POINT = {id: 'point', name: 'Point annotation', icon: 'thumbtack', title: 'New point annotation'};
  public static TEXT_STRIKEOUT = {
    id: 'text strikeout',
    name: 'Text strikeout',
    icon: 'strikethrough',
    title: 'New text strike annotation'
  };
  public static POLYLINE = {
    id: 'polyline',
    name: 'Polyline annotations',
    icon: 'signature',
    title: 'New polyline annotation'
  };
  public static TEXT_FIELD = {id: 'Text field', name: 'Text field', icon: 'i-cursor', title: ''};
  public static WATERMARK = {id: 'Watermark', name: 'Watermark', icon: 'tint', title: ''};
  public static TEXT_REPLACEMENT = {id: 'Text replacement', name: 'Text replacement', icon: 'edit', title: ''};
  public static ARROW = {id: 'arrow', name: 'Arrow annotation', icon: 'mouse-pointer', title: ''};
  public static TEXT_REDACTION = {id: 'Text redaction', name: 'Text redaction', icon: 'brush', title: ''};
  public static TEXT_UNDERLINE = {id: 'Text underline', name: 'Text underline', icon: 'underline', title: ''};
  public static DISTANCE = {id: 'Distance', name: 'Distance annotation', icon: 'ruler', title: ''};

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
