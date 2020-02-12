import {Observable, Subject} from "rxjs";
import {CommentAnnotation, Comment} from "./annotation-models";

export class CommentAnnotationService {
  private _observer: Subject<CommentAnnotation> = new Subject();
  private readonly _commentAnnotation: Observable<CommentAnnotation> = this._observer.asObservable();
  private _observerAddComment: Subject<Comment> = new Subject();
  private readonly _addCommentObserve: Observable<Comment> = this._observerAddComment.asObservable();

  constructor() {
  }

  get commentAnnotation(): Observable<CommentAnnotation> {
    return this._commentAnnotation;
  }

  comment(id: CommentAnnotation): void {
    this._observer.next(id);
  }

  get addCommentObserve(): Observable<Comment> {
    return this._addCommentObserve;
  }

  addComment(comment: Comment) {
    this._observerAddComment.next(comment);
  }

}
