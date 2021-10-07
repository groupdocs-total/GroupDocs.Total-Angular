import { OnInit } from '@angular/core';
import { ChangeInfo } from '../models';
import { DifferencesService } from '../differences.service';
export declare class DifferenceComponent implements OnInit {
    change: ChangeInfo;
    active: boolean;
    private changesService;
    constructor(changeService: DifferencesService);
    ngOnInit(): void;
    getRgbaColor(value: any): string;
}
