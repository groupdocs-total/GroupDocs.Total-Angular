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

  textAnnotation: boolean;
  areaAnnotation: boolean;
  pointAnnotation: boolean;
  textStrikeoutAnnotation: boolean;
  polylineAnnotation: boolean;
  textFieldAnnotation: boolean;
  watermarkAnnotation: boolean;
  textReplacementAnnotation: boolean;
  arrowAnnotation: boolean;
  textRedactionAnnotation: boolean;
  textUnderlineAnnotation: boolean;
  distanceAnnotation: boolean;
  downloadOriginal: boolean;
  downloadAnnotated: boolean;

  zoom: boolean;
  fitWidth: boolean;
}
