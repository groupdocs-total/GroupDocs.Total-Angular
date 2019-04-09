import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'gd-total-nav',
  templateUrl: './total-nav.component.html',
  styleUrls: ['./total-nav.component.css']
})
export class TotalNavComponent implements OnInit {

  @Output() navigated = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit() {
  }

  navigate() {
    this.navigated.emit(true);
  }
}
