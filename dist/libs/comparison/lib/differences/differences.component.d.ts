import { OnInit } from '@angular/core';
import { ChangeInfo } from './../models';
import { DifferencesService } from '../differences.service';
import { NavigateService } from '@groupdocs.examples.angular/common-components';
export declare class DifferencesComponent implements OnInit {
    changes: ChangeInfo[];
    private changesService;
    private navigateService;
    constructor(changeService: DifferencesService, navigateService: NavigateService);
    ngOnInit(): void;
    highlightDifference(id: string, page: number, event: MouseEvent): void;
}
