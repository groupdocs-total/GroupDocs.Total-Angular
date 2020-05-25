import {PageModel} from "@groupdocs.examples.angular/common-components";

export class WatermarkType {
  public static TEXT = {id: 'text', name: 'Text', icon: 'highlighter'};

  public static getWatermarkType(id: string) {
    switch (id) {
      case WatermarkType.TEXT.id:
        return WatermarkType.TEXT;
    }
  }
}

export class FileWatermarkDescription {
  guid: string;
  pages: PageWatermarkModel[];
}

export class PageWatermarkModel extends PageModel {
  watermarks: WatermarkData[];
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

export class WatermarkData {

  constructor() {
    this.text = "";
    this.fontColor = 8421375;
  }

  id: number;
  text: string;
  font: string;
  fontSize: number;
  fontColor: number;
  height: number;
  width: number;
  left: number;
  top: number;
  pageNumber: number;
  type: string;
}

export class CommentWatermark {
  constructor(id: number) {
    this.id = id;
  }

  id: number;
}

export class RemoveWatermark {
  constructor(id: number) {
    this.id = id;
  }

  id: number;
}
