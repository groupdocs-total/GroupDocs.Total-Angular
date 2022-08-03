import { OnDestroy, OnInit } from '@angular/core';
import { PlaceholderService } from '../placeholder.service';
export declare class PlaceholderComponent implements OnInit, OnDestroy {
    private _destroy;
    constructor(placeholderService: PlaceholderService);
    description: string;
    progress: number;
    isVisible: boolean;
    ngOnInit(): void;
    ngOnDestroy(): void;
}
