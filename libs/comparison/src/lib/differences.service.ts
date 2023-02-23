import { Injectable } from '@angular/core';
import { BehaviorSubject} from 'rxjs';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DifferencesService {

  constructor() {
  }

  private _activeChange = new BehaviorSubject<string>(null);
  activeChange = this._activeChange.asObservable();

  private _comparisonActionsMap = new Map<string, number>(null);
  comparisonActionsMap = this._comparisonActionsMap;

  comparisonActionsList: number[];

  private subject = new Subject<any>();

  setActiveChange(id : string){
    this._activeChange.next(id);
  }

  addToComparisonActions(id: string, action: number){
    this._comparisonActionsMap.set(id, action);
  }

  sendClickEvent(){
    this.subject.next();
  }

  getClickEvent():Observable<any>{
     return this.subject.asObservable();
  }
}
