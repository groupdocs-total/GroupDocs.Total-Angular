import { Injectable } from '@angular/core';
import { Observable, Observer, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PlaceholderService {
  private _descriptionSubject = new Subject<string>();
  private _stateSubject = new Subject<Observable<number>>();

  constructor() { }

  readonly descriptionChanged = this._descriptionSubject.asObservable();
  readonly stateChanged = this._stateSubject.asObservable();

  startOperation(description : string) : Observer<number> {
    const subject = new Subject<number>();
    
    this._descriptionSubject.next(description);
    this._stateSubject.next(subject);

    return subject;
  }
}
