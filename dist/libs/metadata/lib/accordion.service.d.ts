import { Observable } from "rxjs";
import { FilePropertyModel } from '@groupdocs.examples.angular/common-components';
export declare class AccordionService {
    private _addingObserver;
    private _addedProperty;
    constructor();
    readonly addedProperty: Observable<FilePropertyModel>;
    addProperty(addedProperty: FilePropertyModel): void;
}
