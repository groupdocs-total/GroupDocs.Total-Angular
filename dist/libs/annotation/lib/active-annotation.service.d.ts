import { Observable } from "rxjs";
export declare class ActiveAnnotationService {
    private _observer;
    private readonly _activeChange;
    constructor();
    readonly activeChange: Observable<number>;
    changeActive(annId: number): void;
}
