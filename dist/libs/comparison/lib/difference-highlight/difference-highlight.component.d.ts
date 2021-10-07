import { OnInit } from '@angular/core';
import { ChangeInfo } from "../models";
import { DifferencesService } from '../differences.service';
export declare class DifferenceHighlightComponent implements OnInit {
    change: ChangeInfo;
    active: boolean;
    private changesService;
    constructor(changeService: DifferencesService);
    ngOnInit(): void;
    close(event: Event): void;
    highlight(id: string): void;
}
