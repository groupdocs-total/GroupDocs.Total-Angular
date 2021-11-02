import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'gd-total-nav',
  templateUrl: './total-nav.component.html',
  styleUrls: ['./total-nav.component.css']
})
export class TotalNavComponent implements OnInit {

  constructor() { 
    localStorage.setItem("returnUrl", window.location.href);
  }

  ngOnInit() {
  }

}
