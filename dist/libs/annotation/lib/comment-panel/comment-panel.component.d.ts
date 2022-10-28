import { EventEmitter, OnInit } from '@angular/core';
import { CommentAnnotationService } from "../comment-annotation.service";
import { Comment } from '../annotation-models';
export declare class CommentPanelComponent implements OnInit {
    private _commentAnnotationService;
    comments: [];
    annotationId: number;
    commentator: string;
    closeComments: EventEmitter<boolean>;
    currentComment: Comment;
    constructor(_commentAnnotationService: CommentAnnotationService);
    ngOnInit(): void;
    closePanel(): void;
    newComment(): void;
    clearComment(): void;
    addComment(): void;
}
