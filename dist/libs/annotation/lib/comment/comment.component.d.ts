import { OnInit } from '@angular/core';
import { Comment } from '../annotation-models';
export declare class CommentComponent implements OnInit {
    comment: Comment;
    constructor();
    ngOnInit(): void;
    getTime(): string | number;
}
