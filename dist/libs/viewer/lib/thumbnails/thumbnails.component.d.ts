import { OnInit } from '@angular/core';
import { NavigateService, PageModel } from "@groupdocs.examples.angular/common-components";
export declare class ThumbnailsComponent implements OnInit {
    private _navigateService;
    pages: PageModel[];
    guid: string;
    mode: boolean;
    isHtmlMode: boolean;
    constructor(_navigateService: NavigateService);
    ngOnInit(): void;
    imgData(data: string): string;
    getScale(x: number, y: number): number;
    openPage(pageNumber: number): void;
}
