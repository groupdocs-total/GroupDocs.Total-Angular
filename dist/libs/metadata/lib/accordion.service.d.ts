import { Observable } from "rxjs";
import { FilePropertyModel } from '@groupdocs.examples.angular/common-components';
export declare class AccordionService {
    private _addingObserver;
    private _removingObserver;
    private _addedProperty;
    private _removedProperty;
    constructor();
    readonly addedProperty: Observable<FilePropertyModel>;
    readonly removedProperty: Observable<FilePropertyModel>;
    addProperty(addedProperty: FilePropertyModel): void;
    removeProperty(removedProperty: FilePropertyModel): void;
}
