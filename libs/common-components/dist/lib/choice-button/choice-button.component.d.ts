import { EventEmitter, OnInit } from '@angular/core';
export declare class ChoiceButtonComponent implements OnInit {
    name: string;
    icon: string;
    choices: any;
    selected: EventEmitter<string>;
    open: boolean;
    constructor();
    ngOnInit(): void;
    openChoices(): void;
    select(choice: string): void;
}
