import { Component } from '@angular/core';
import {ActivationEnd, Router} from "@angular/router";
import {filter} from "rxjs/operators";

@Component({
  selector: 'groupdocs-total-angular-root',
  templateUrl: './total-app.component.html',
  styleUrls: ['./total-app.component.less']
})
export class TotalAppComponent {
  title = 'total';
  total: boolean = true;

  constructor(private router: Router) {
  }

  ngOnInit() {
    this.router.events.pipe(filter((event: any) => (event instanceof ActivationEnd)))
      .subscribe(event => {
          this.onNavigate("/" == this.router.url);
      });
  }

  onNavigate(home: boolean) {
    this.total = home;
  }
}
