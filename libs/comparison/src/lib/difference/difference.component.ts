import { Component, Input, OnInit } from '@angular/core';
import {ChangeInfo} from "../models";

@Component({
  selector: 'gd-comparison-difference',
  templateUrl: './difference.component.html',
  styleUrls: ['./difference.component.less']
})
export class DifferenceComponent implements OnInit {
  @Input() change: ChangeInfo;

  constructor() { }

  ngOnInit() {
  }

  getChangeText(change: ChangeInfo) {
    let comment = "";
    if (change.type == 0) {
      return;
    }
    if (change.styleChanges && change.styleChanges.length > 0) {
      change.styleChanges.forEach(styleChange => {
        comment = "Changed style: " + styleChange.changedProperty;
        comment = comment + " From: " + styleChange.oldValue;
        comment = comment + " To: " + styleChange.newValue;
      });
    } else {
      comment = change.text;
    }
    return comment;
  }
}
