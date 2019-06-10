import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'gd-logo',
  templateUrl: './logo.component.html',
  styleUrls: ['./logo.component.less']
})
export class LogoComponent implements OnInit {

  @Input() logo;
  @Input() icon;

  constructor() { }

  ngOnInit() {
  }

}
