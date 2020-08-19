import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'gd-tooltip',
  templateUrl: './tooltip.component.html',
  styleUrls: ['./tooltip.component.less']
})
export class TooltipComponent implements OnInit {

  @Input() text: string;
  @Input() position = 0;
  visibility = 'hidden';

  constructor() {
  }

  getClass() {
    if (this.position === 0) {
      return 'tooltip';
    }
    return 'tooltip ' + (this.position > 0 ? 'last-element' : 'first-element');
  }

  @Input()
  set show(value: boolean) {
    this.visibility = value ? 'shown' : 'hidden';
  }

  ngOnInit() {
  }

}
