import {Component, Input, OnInit} from '@angular/core';
import {Comment} from '../annotation-models'

@Component({
  selector: 'gd-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.less']
})
export class CommentComponent implements OnInit {

  @Input() comment: Comment;

  constructor() {
  }

  ngOnInit() {
  }

  getTime() {
    const time = Date.now() - this.comment.time;
    const hours = Math.round(time / (60 * 60 * 1000));
    if (hours > 1) {
      return 'about ' + hours + ' hours ago';
    }
    const min = Math.round(time / (60 * 1000));
    if (min > 1) {
      return 'about ' + min + ' minutes ago';
    }
    const sec = Math.round(time / 1000);
    if (sec > 1) {
      return 'about ' + sec + ' seconds ago';
    }
    return this.comment.time;
  }
}
