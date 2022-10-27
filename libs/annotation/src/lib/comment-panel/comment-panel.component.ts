import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {CommentAnnotationService} from "../comment-annotation.service";
import {Comment} from '../annotation-models'

@Component({
  selector: 'gd-comment-panel',
  templateUrl: './comment-panel.component.html',
  styleUrls: ['./comment-panel.component.less']
})
export class CommentPanelComponent implements OnInit {
  @Input() comments: [];
  @Input() annotationId: number;
  @Input() commentator: string;

  @Output() closeComments = new EventEmitter<boolean>();

  currentComment: Comment;

  constructor(private _commentAnnotationService: CommentAnnotationService) {
  }

  ngOnInit() {
  }

  closePanel() {
    this.closeComments.emit(true);
  }

  newComment() {
    this.currentComment = new Comment(this.annotationId, this.commentator);
  }

  clearComment() {
    this.currentComment = null;
  }

  addComment() {
    this._commentAnnotationService.addComment(Comment.create(this.currentComment));
    this.currentComment = null;
  }
}
