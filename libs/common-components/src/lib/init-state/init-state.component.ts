import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'gd-init-state',
  templateUrl: './init-state.component.html',
  styleUrls: ['./init-state.component.less']
})
export class InitStateComponent implements OnInit {
  @Input() icon: string;
  @Input() text: string;

  constructor() {
  }

  ngOnInit() {
  }

}
