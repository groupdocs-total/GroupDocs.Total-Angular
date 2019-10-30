import {Observable, Subject} from "rxjs";

export class RotationService {
  private _observerRotationAngle: Subject<number> = new Subject();
  private readonly _rotationAngleChange: Observable<number> = this._observerRotationAngle.asObservable();

  constructor() {
  }

  get rotationAngleChange(): Observable<number> {
    return this._rotationAngleChange;
  }

  setRotationAngle(angle: number) {
    this._observerRotationAngle.next(angle);
  }
}
