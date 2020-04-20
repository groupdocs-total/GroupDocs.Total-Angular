export class AnnotationConfig {
  rewrite: boolean;
  pageSelector: boolean;
  download: boolean;
  upload: boolean;
  print: boolean;
  browse: boolean;
  enableRightClick: boolean;

  filesDirectory: string;
  fontsDirectory: string;
  defaultDocument: string;
  preloadPageCount: 0;

  isTextAnnotation: boolean;
  isAreaAnnotation: boolean;
  isPointAnnotation: boolean;
  isTextStrikeoutAnnotation: boolean;
  isPolylineAnnotation: boolean;
  isTextFieldAnnotation: boolean;
  isWatermarkAnnotation: boolean;
  isTextReplacementAnnotation: boolean;
  isArrowAnnotation: boolean;
  isTextRedactionAnnotation: boolean;
  isTextUnderlineAnnotation: boolean;
  isDistanceAnnotation: boolean;
  isDownloadOriginal: boolean;
  isDownloadAnnotated: boolean;

  zoom: boolean;
  fitWidth: boolean;
}
