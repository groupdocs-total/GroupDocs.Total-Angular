import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from "rxjs";
import { FilePropertyModel } from '@groupdocs.examples.angular/common-components';

@Injectable({
  providedIn: 'root'
})

export class AccordionService {
  private _addingObserver: BehaviorSubject<FilePropertyModel> = new BehaviorSubject(null);
  private _removingObserver: BehaviorSubject<FilePropertyModel> = new BehaviorSubject(null);
  private _addedProperty: Observable<FilePropertyModel> = this._addingObserver.asObservable();
  private _removedProperty: Observable<FilePropertyModel> = this._removingObserver.asObservable();

  constructor() {
  }

  get addedProperty(): Observable<FilePropertyModel> {
    return this._addedProperty;
  }

  get removedProperty(): Observable<FilePropertyModel> {
    return this._removedProperty;
  }

  addProperty(addedProperty: FilePropertyModel) {
    this._addingObserver.next(addedProperty);
  }

  removeProperty(removedProperty: FilePropertyModel) {
    this._removingObserver.next(removedProperty);
  }
}