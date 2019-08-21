import {Component, Input, OnInit} from '@angular/core';
import {Position, AddedSignature} from "../signature-models";

@Component({
  selector: 'gd-signature-component',
  templateUrl: './signature.component.html',
  styleUrls: ['./signature.component.less']
})
export class Signature implements OnInit {
  @Input() data: AddedSignature;
  @Input() position: Position;

  constructor() {
  }

  ngOnInit() {
  }

  getData() {
    return 'data:image/png;base64,' + this.data.data;
  }
}
