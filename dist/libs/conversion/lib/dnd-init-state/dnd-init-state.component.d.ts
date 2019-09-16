import { OnInit } from '@angular/core';
import { ModalService } from "@groupdocs.examples.angular/common-components";
export declare class DndInitStateComponent implements OnInit {
    private _modalService;
    icon: string;
    text: string;
    constructor(_modalService: ModalService);
    ngOnInit(): void;
    dropped($event: any): void;
}
