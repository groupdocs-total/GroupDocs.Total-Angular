import { PageModel } from "@groupdocs.examples.angular/common-components";
export declare class ComparedPageModel extends PageModel {
    changes: ChangeInfo[];
}
export declare class CompareResult {
    changes: ChangeInfo[];
    pages: ComparedPageModel[];
    guid: string;
}
export declare class ChangeInfo {
    pageInfo: PageInfo;
    text: string;
    type: number;
    box: Rectangle;
    id: string;
    styleChanges: StyleChange[];
    normalized: Rectangle;
    active: boolean;
}
export declare class StyleChange {
    changedProperty: string;
    newValue: string;
    oldValue: string;
}
export declare class Rectangle {
    x: number;
    y: number;
    width: number;
    height: number;
}
export declare class PageInfo {
    width: number;
    height: number;
    changes: ChangeInfo[];
    pageNumber: number;
}
