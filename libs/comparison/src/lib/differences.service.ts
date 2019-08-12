import { Injectable } from '@angular/core';
import { BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DifferencesService {

  private _activeChange = new BehaviorSubject<string>(null);
  activeChange = this._activeChange.asObservable();

  constructor() {
  }

  setActiveChange(id : string){
    this._activeChange.next(id);
  }
}
