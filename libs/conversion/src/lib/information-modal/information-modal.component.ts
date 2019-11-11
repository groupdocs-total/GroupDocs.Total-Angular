import {Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'gd-information-modal',
  templateUrl: './information-modal.component.html',
  styleUrls: ['./information-modal.component.less']
})
export class InformationModalComponent implements OnInit {

  @Input() formatName: string;
  @Input() warningCount: number;

  constructor() {
  }

  ngOnInit() {
  }
}
