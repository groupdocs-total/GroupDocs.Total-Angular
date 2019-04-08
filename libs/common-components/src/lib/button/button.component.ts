import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'gd-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.less']
})
export class ButtonComponent implements OnInit {

  @Input() icon:string;
  @Input() tooltip:string;
  showToolTip:boolean = false;

  constructor() { }

  ngOnInit() {
  }

  onHovering() {
    this.showToolTip = true;
  }

  onUnhovering() {
    this.showToolTip = false;
  }
}
