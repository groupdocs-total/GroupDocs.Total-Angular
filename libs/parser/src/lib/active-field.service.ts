import {Observable, Subject} from "rxjs";

export class ActiveFieldService {
  private changeSubject: Subject<number> = new Subject();
  readonly changed: Observable<number> = this.changeSubject.asObservable();

  constructor() {
  }

  changeActive(id: number) {
    this.changeSubject.next(id);
  }
}