import { Observable } from 'rxjs';
export declare class DifferencesService {
    constructor();
    private _activeChange;
    activeChange: Observable<string>;
    private _comparisonActionsMap;
    comparisonActionsMap: Map<string, number>;
    comparisonActionsList: number[];
    private subject;
    setActiveChange(id: string): void;
    addToComparisonActions(id: string, action: number): void;
    sendClickEvent(): void;
    getClickEvent(): Observable<any>;
}
