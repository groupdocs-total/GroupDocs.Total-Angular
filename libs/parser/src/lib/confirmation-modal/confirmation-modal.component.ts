import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-confirmation-modal',
  templateUrl: './confirmation-modal.component.html',
  styleUrls: ['./confirmation-modal.component.less']
})
export class ConfirmationModalComponent implements OnInit {
  @Input() modalId : string;
  @Input() id : any;
  @Input() title : string = "Confirmation";
  @Input() text : string;
  @Input() actionText : string = "Ok";
  @Input() actionIcon : string = "";
  @Output() confirmEvent = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  confirmClick() {
    this.confirmEvent.emit(this.id);
  }

}
