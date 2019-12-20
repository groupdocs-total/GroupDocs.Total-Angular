import {Observable, Subject} from "rxjs";
import {CommentAnnotation} from "./annotation-models";

export class CommentAnnotationService {
  private _observer: Subject<CommentAnnotation> = new Subject();
  private readonly _commentAnnotation: Observable<CommentAnnotation> = this._observer.asObservable();

  constructor() {
  }

  get commentAnnotation(): Observable<CommentAnnotation> {
    return this._commentAnnotation;
  }

  comment(id: CommentAnnotation): void {
    this._observer.next(id);
  }
}
