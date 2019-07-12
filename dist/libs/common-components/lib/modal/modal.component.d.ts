import { ElementRef, EventEmitter, OnDestroy, OnInit } from '@angular/core';
import { ModalService } from "../modal.service";
export declare class ModalComponent implements OnInit, OnDestroy {
    private modalService;
    id: string;
    title: string;
    visible: EventEmitter<boolean>;
    visibility: boolean;
    private element;
    constructor(modalService: ModalService, el: ElementRef);
    ngOnInit(): void;
    ngOnDestroy(): void;
    open(): void;
    close(): void;
    onClose($event: MouseEvent): void;
}
