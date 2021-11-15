import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject, Subscription } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { PlaceholderService } from '../placeholder.service';

@Component({
  selector: 'gd-placeholder',
  templateUrl: './placeholder.component.html',
  styleUrls: ['./placeholder.component.less']
})
export class PlaceholderComponent implements OnInit, OnDestroy {
  private _destroy = new Subject();

  constructor(placeholderService: PlaceholderService) {
    placeholderService.descriptionChanged
      .pipe(takeUntil(this._destroy))
      .subscribe(d => {
        this.description = d;
        this.progress = null;
        this.isVisible = true;
      });

    let stateSubscription: Subscription;
    placeholderService.stateChanged
      .pipe(takeUntil(this._destroy))
      .subscribe(state => {
        if (stateSubscription) {
          stateSubscription.unsubscribe();
        }

        const observer = {
          next: progress => this.progress = progress,
          error: err => this.isVisible = false,
          complete: () => this.isVisible = false
        };

        stateSubscription = state.subscribe(observer);
      });
  }

  description: string;
  progress: number = null;
  isVisible: boolean;

  ngOnInit() {
  }

  ngOnDestroy(): void {
    this._destroy.next();
    this._destroy.complete();
  }

}
