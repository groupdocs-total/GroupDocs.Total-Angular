import {AfterViewInit, Component, Input, OnInit} from '@angular/core';
import {LoadingMaskService} from "../loading-mask.service";

@Component({
  selector: 'gd-loading-mask',
  templateUrl: './loading-mask.component.html',
  styleUrls: ['./loading-mask.component.less']
})

export class LoadingMaskComponent implements OnInit, AfterViewInit {
  @Input() loadingMask = false;

  constructor(private _loadingMaskService: LoadingMaskService) {
  }

  ngOnInit() {
  }

  ngAfterViewInit() {
    this._loadingMaskService
      .onLoadingChanged
      .subscribe((loading: boolean) => this.loadingMask = loading);
  }
}
