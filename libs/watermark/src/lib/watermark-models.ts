import {PageModel, Formatting} from "@groupdocs.examples.angular/common-components";

export class WatermarkType {
  public static TEXT = {id: 'text', name: 'Text', icon: 'font', title: 'Add text watermark'};
  public static IMAGE = {id: 'image', name: 'Image', icon: 'image', title: 'Add image watermark'};

  public static getWatermarkType(id: string) {
    switch (id) {
      case WatermarkType.TEXT.id:
        return WatermarkType.TEXT;
      case WatermarkType.IMAGE.id:
        return WatermarkType.IMAGE;
    }
  }
}

export class WatermarkData {
  reason: string;
  contact: string;
  address: string;
  date: string;
  watermarkPassword: string;
  watermarkGuid: string;
  watermarkType: string;
  pageNumber: number;
  left: number;
  top: number;
  width: number;
  height: number;
  angle: number;

  public static map(data: AddedWatermark, type: string, position: Position) {
    const ret = new WatermarkData();
    ret.watermarkType = type;
    ret.pageNumber = data.number;
    ret.left = position.left;
    ret.top = position.top;
    ret.watermarkGuid = data.guid;
    ret.width = data.width;
    ret.height = data.height;

    return ret;
  }
}

export class WatermarkModel {
  guid: string;
  image: string;
  name: string;
  text: string;
  fontColor: string;
}

export class DraggableWatermark {
  public static TEMP = "temp";
  guid: string;
  type: string;
  position: Position;
  pageNumber: number;
}

export class AddedWatermark {

  constructor() {
    this.height = 0;
    this.width = 0;
  }

  guid: string;
  props: WatermarkProps;
  data: string;
  width: number;
  height: number;
  number: number;
}

export class WatermarkProps {
  imageGuid: string;
  text: string;
  width: number;
  height: number;
  bold: boolean;
  italic: boolean;
  underline: boolean;
  font: string;
  fontSize: number;
  fontColor: string;

  public static getDefault(): WatermarkProps {
    const props = new WatermarkProps();
    props.text = "";
    const f = Formatting.default();
    props.fontColor = f.color;
    props.font = f.font;
    props.fontSize = f.fontSize;
    props.underline = f.underline;
    props.bold = f.bold;
    props.italic = f.italic;
    return props;
  }
}

export class FileListWithParams {
  fileList: FileList;
  watermarkType: string;

  constructor(fileList: FileList, watermarkType: string) {
    this.fileList = fileList;
    this.watermarkType = watermarkType;
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

export class RemoveWatermark {
  guid: string;
  id: number;
  type: string;
}

export class CopyWatermark {
  guid: string;
  id: number;
  type: string;
}

export class CopyChanges {
  guid: string;
  id: number;
  width: number;
  height: number;
  position: Position;
  props: WatermarkProps;
}
