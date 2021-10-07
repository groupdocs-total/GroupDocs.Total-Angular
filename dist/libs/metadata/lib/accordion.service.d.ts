import { Observable } from "rxjs";
import { FilePropertyModel } from './metadata-models';
export declare class AccordionService {
    private _addingObserver;
    private _addedProperty;
    constructor();
    readonly addedProperty: Observable<FilePropertyModel>;
    addProperty(addedProperty: FilePropertyModel): void;
}
