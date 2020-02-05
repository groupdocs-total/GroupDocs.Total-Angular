import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'gd-tooltip',
  templateUrl: './tooltip.component.html',
  styleUrls: ['./tooltip.component.less']
})
export class TooltipComponent implements OnInit {

  @Input() text: string;
  @Input() first = false;
  visibility = 'hidden';

  constructor() {
  }

  getClass() {
    return this.first ? 'tooltip first-element' : 'tooltip'
  }

  @Input()
  set show(value: boolean) {
    setTimeout(() => {
      this.visibility = value ? 'shown' : 'hidden';
    }, 1000);
  }

  ngOnInit() {
  }

}
