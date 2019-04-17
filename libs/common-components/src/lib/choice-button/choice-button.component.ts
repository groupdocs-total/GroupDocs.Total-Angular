import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'gd-choice-button',
  templateUrl: './choice-button.component.html',
  styleUrls: ['./choice-button.component.less']
})
export class ChoiceButtonComponent implements OnInit {
  @Input() name: string;
  @Input() icon: string;
  @Input() choices;
  @Output() selected: EventEmitter<string> = new EventEmitter<string>();
  open: boolean = false;

  constructor() { }

  ngOnInit() {
  }

  openChoices() {
    this.open = !this.open;
  }

  select(choice: string) {
    this.selected.emit(choice);
    this.open = false;
  }
}
