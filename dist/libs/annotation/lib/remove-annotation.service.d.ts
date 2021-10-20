import { Observable } from "rxjs";
import { RemoveAnnotation } from "./annotation-models";
export declare class RemoveAnnotationService {
    private _observer;
    private readonly _removeAnnotation;
    constructor();
    readonly removeAnnotation: Observable<RemoveAnnotation>;
    remove(id: RemoveAnnotation): void;
}
