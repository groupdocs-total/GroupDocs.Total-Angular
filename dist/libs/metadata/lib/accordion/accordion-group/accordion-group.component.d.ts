import { EventEmitter, QueryList, AfterViewInit } from '@angular/core';
import { FilePropertyModel } from '@groupdocs.examples.angular/common-components';
import { AccordionService } from './../../accordion.service';
import { DatePipe } from "@angular/common";
export declare class AccordionGroupComponent implements AfterViewInit {
    private _accordionService;
    private _datePipe;
    opened: boolean;
    title: string;
    disabled: boolean;
    properties: FilePropertyModel[];
    propertiesNames: string[];
    toggle: EventEmitter<any>;
    textinput: QueryList<any>;
    _selectedPropName: string;
    constructor(_accordionService: AccordionService, _datePipe: DatePipe);
    ngAfterViewInit(): void;
    readonly selectedPropName: string;
    resetProperties(onlyEditing?: boolean): void;
    addProperty($event: Event): void;
    selectProperty(property: FilePropertyModel): void;
    editProperty(property: FilePropertyModel): void;
    delete($event: Event): void;
    wasSelected(): boolean;
    selectPropName($event: any): void;
    formatDateTime(property: FilePropertyModel, value: string): void;
    formatValue(property: FilePropertyModel): any;
}
