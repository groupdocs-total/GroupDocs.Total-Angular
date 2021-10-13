import { Observable } from "rxjs";
import { CommentAnnotation, Comment } from "./annotation-models";
export declare class CommentAnnotationService {
    private _observer;
    private readonly _commentAnnotation;
    private _observerAddComment;
    private readonly _addCommentObserve;
    constructor();
    readonly commentAnnotation: Observable<CommentAnnotation>;
    comment(id: CommentAnnotation): void;
    readonly addCommentObserve: Observable<Comment>;
    addComment(comment: Comment): void;
}
