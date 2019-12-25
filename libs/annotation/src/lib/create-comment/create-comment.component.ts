import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Comment} from '../annotation-models'

@Component({
  selector: 'gd-create-comment',
  templateUrl: './create-comment.component.html',
  styleUrls: ['./create-comment.component.less']
})
export class CreateCommentComponent implements OnInit {
  @Input() comment: Comment;

  @Output() addComment = new EventEmitter<Comment>();
  @Output() removeComment = new EventEmitter<boolean>();

  constructor() {
  }

  ngOnInit() {
  }

  onAddComment() {
    this.addComment.emit(this.comment);
  }

  clearComment() {
    this.removeComment.emit(true);
  }

  saveText(value: string) {
    this.comment.text = value;
  }

  saveName(value: string) {
    this.comment.name = value;
  }
}
