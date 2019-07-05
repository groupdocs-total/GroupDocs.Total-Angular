import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'gd-tooltip',
  templateUrl: './tooltip.component.html',
  styleUrls: ['./tooltip.component.less']
})
export class TooltipComponent implements OnInit {

  @Input() text:string;
  visibility = 'hidden';

  constructor() {
  }

  @Input()
  set show(value: boolean) {
    this.visibility = value ? 'shown' : 'hidden';
  }

  ngOnInit() {
  }

}
