import { Component, OnInit } from '@angular/core';
import { MessageModalService } from '../message-modal.service';

@Component({
  selector: 'gd-message-modal',
  templateUrl: './message-modal.component.html',
  styleUrls: ['./message-modal.component.less']
})
export class MessageModalComponent implements OnInit {

  constructor(public messageModalService: MessageModalService) {
  }

  ngOnInit() {
  }
}
