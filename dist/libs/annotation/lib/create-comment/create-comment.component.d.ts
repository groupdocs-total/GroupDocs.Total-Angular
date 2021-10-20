import { EventEmitter, OnInit } from '@angular/core';
import { Comment } from '../annotation-models';
export declare class CreateCommentComponent implements OnInit {
    comment: Comment;
    addComment: EventEmitter<Comment>;
    removeComment: EventEmitter<boolean>;
    constructor();
    ngOnInit(): void;
    onAddComment(): void;
    clearComment(): void;
    saveText(value: string): void;
    saveName(value: string): void;
}
