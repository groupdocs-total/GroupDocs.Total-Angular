import { EventEmitter, OnInit } from '@angular/core';
import { WindowService } from "../window.service";
export declare class LightboxComponent implements OnInit {
    private _windowService;
    opening: EventEmitter<boolean>;
    title: string;
    isMobile: boolean;
    constructor(_windowService: WindowService);
    ngOnInit(): void;
    close(): void;
}
