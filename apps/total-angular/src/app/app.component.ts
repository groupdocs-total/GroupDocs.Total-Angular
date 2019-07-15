import { Component } from '@angular/core';
import {ActivationEnd, Router} from "@angular/router";
import {filter} from "rxjs/operators";

@Component({
  selector: 'gd-total',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  title = 'total-angular';
  total = true;

  constructor(private router: Router) {
  }

  OnInit() {
    this.router.events.pipe(filter((event: any) => (event instanceof ActivationEnd)))
      .subscribe(event => {
          this.onNavigate("/" === this.router.url);
      });
  }

  onNavigate(home: boolean) {
    this.total = home;
  }
}
