import { Injectable } from '@angular/core';
import { BehaviorSubject} from 'rxjs';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DifferencesService {

  private _activeChange = new BehaviorSubject<string>(null);
  activeChange = this._activeChange.asObservable();

  private _comparisonActionsMap = new Map<string, number>(null);
  comparisonActionsMap = this._comparisonActionsMap;

  comparisonActionsList: number[];

  constructor() {
  }

  setActiveChange(id : string){
    this._activeChange.next(id);
  }

  addToComparisonActions(id: string, action: number){
    this._comparisonActionsMap.set(id, action);
  }
}
