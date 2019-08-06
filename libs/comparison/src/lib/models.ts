import {PageModel} from "@groupdocs.examples.angular/common-components";

export class CompareResult {
  changes: ChangeInfo[];
  pages: PageModel[];
  guid: string;
}

export class ChangeInfo {
  pageInfo: PageInfo;
  text: string;
  type: number;
  box: Rectangle;
  id: string;
  styleChanges: StyleChange[]
}

export class StyleChange {
  changedProperty: string;
  newValue: string;
  oldValue: string;
}

export class Rectangle {
  x: number;
  y: number;
  width: number;
  height: number
}

export class PageInfo {
  id: number;
}
