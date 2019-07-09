import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'gd-loading-mask',
    templateUrl: './loading-mask.component.html',
    styleUrls: ['./loading-mask.component.less']
})

export class LoadingMaskComponent implements OnInit {
    @Input() loadingMask = false;

    constructor () {}

    ngOnInit() {}
}