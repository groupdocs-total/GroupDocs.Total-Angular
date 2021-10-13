import { Observable, Observer } from 'rxjs';
export declare class PlaceholderService {
    private _descriptionSubject;
    private _stateSubject;
    constructor();
    readonly descriptionChanged: Observable<string>;
    readonly stateChanged: Observable<Observable<number>>;
    startOperation(description: string): Observer<number>;
}
