import { OnInit } from '@angular/core';
import { ChangeInfo } from '../models';
import { DifferencesService } from '../differences.service';
export declare class DifferenceComponent implements OnInit {
    change: ChangeInfo;
    active: boolean;
    private changesService;
    actions: {
        value: number;
        id: string;
    }[];
    changeAction: string;
    constructor(changeService: DifferencesService);
    addAction(id: any, action: any): void;
    ngOnInit(): void;
    getRgbaColor(value: any): string;
}
