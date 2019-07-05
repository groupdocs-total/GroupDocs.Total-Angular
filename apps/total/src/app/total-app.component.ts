import { Component } from '@angular/core';
import {ActivationEnd, Router} from "@angular/router";
import {filter} from "rxjs/operators";

@Component({
  selector: 'gd-groupdocs-total-angular-root',
  templateUrl: './total-app.component.html',
  styleUrls: ['./total-app.component.less']
})
export class TotalAppComponent {
  title = 'total';
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
