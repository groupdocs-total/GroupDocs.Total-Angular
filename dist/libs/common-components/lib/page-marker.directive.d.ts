import { AfterViewInit, ElementRef } from '@angular/core';
import { ZoomService } from "./zoom.service";
import { WindowService } from './window.service';
export declare class PageMarkerDirective implements AfterViewInit {
    private _zoomService;
    private _windowService;
    naming: {
        sectionSelector: string;
        markerSelector: string;
        headerSelector: string;
        contentSelector: string;
        footerSelector: string;
    };
    config: {
        attributes: boolean;
        attributeOldValue: boolean;
        childList: boolean;
        subtree: boolean;
        characterData: boolean;
        characterDataOldValue: boolean;
        attributeFilter: string[];
    };
    el: ElementRef<any>;
    constructor(_zoomService: ZoomService, _windowService: WindowService, el: ElementRef);
    ngAfterViewInit(): void;
    callback(mutationsList: any, observer: any): void;
    processSection(section: any): void;
    processHeader(section: any): any;
    processContent(section: any): number;
    processFooter(section: any): any;
    htmlToElements(html: any): NodeListOf<ChildNode>;
}
