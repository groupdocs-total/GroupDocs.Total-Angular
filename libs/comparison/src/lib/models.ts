import {PageModel} from "@groupdocs.examples.angular/common-components";

export class ComparedPageModel extends PageModel{
  changes: ChangeInfo[]
}

export class CompareResult {
  changes: ChangeInfo[];
  pages: ComparedPageModel[];
  guid: string;
}

export class ChangeInfo {
  pageInfo: PageInfo;
  text: string;
  type: number;
  box: Rectangle;
  id: string;
  styleChanges: StyleChange[];
  normalized: Rectangle;
  active: boolean;
  comparisonAction: number;
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
  width: number;
  height: number;
  changes: ChangeInfo[];
  pageNumber: number;
}

