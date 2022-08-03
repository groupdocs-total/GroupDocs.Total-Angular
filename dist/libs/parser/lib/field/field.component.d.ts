import { OnDestroy, OnInit } from '@angular/core';
import { ZoomService } from '@groupdocs.examples.angular/common-components';
import { Size, TemplateField, TemplateFieldTableSeparator } from '../app-models';
import { FieldService } from '../field.service';
import { EventEmitter } from '@angular/core';
export declare class FieldContextMenuClick {
    fieldName: string;
    action: string;
    constructor(fieldName: string, action: string);
}
export declare class FieldComponent implements OnInit, OnDestroy {
    private _fieldService;
    private _zoomService;
    pageSize: Size;
    private _left;
    private _top;
    private _right;
    private _bottom;
    private _field;
    private _destroy;
    isActive: boolean;
    contextMenuClick: EventEmitter<FieldContextMenuClick>;
    constructor(_fieldService: FieldService, _zoomService: ZoomService);
    ngOnInit(): void;
    ngOnDestroy(): void;
    readonly isFixed: boolean;
    readonly isTable: boolean;
    left: number;
    top: number;
    right: number;
    bottom: number;
    readonly width: number;
    readonly height: number;
    readonly scale: number;
    renameFieldClick(): void;
    deleteFieldClick(): void;
    addColumnLeft(): void;
    addColumnRight(): void;
    removeColumn(column: TemplateFieldTableSeparator): void;
    field: TemplateField;
    mouseDown($event: MouseEvent, mode: string): void;
    rightClick($event: any): void;
}
