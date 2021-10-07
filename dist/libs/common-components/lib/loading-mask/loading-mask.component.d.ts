import { AfterViewInit, OnInit } from '@angular/core';
import { LoadingMaskService } from "../loading-mask.service";
export declare class LoadingMaskComponent implements OnInit, AfterViewInit {
    private _loadingMaskService;
    loadingMask: boolean;
    constructor(_loadingMaskService: LoadingMaskService);
    ngOnInit(): void;
    ngAfterViewInit(): void;
}
