import { QueryList, AfterViewInit, OnInit } from '@angular/core';
import { WindowService } from '@groupdocs.examples.angular/common-components';
import { FilePropertyModel, KnownPropertyModel, AccessLevels, MetadataPropertyType, IProperty } from '../../metadata-models';
import { IDatePickerConfig } from 'ng2-date-picker';
export declare class AccordionGroupComponent implements OnInit, AfterViewInit {
    private windowService;
    knownProperties: KnownPropertyModel[];
    opened: boolean;
    title: string;
    packageId: string;
    addDisabled: boolean;
    addHidden: boolean;
    properties: FilePropertyModel[];
    knownPropertyDictionary: {
        [key: string]: KnownPropertyModel;
    };
    notAddedProperties: KnownPropertyModel[];
    metadataPropertyType: typeof MetadataPropertyType;
    textinput: QueryList<any>;
    isDesktop: boolean;
    datePickerConfig: IDatePickerConfig;
    editableTypes: Set<MetadataPropertyType>;
    constructor(windowService: WindowService);
    ngOnInit(): void;
    ngAfterViewInit(): void;
    resetProperties(): void;
    toggle($event: Event): void;
    addProperty($event: Event): void;
    selectProperty(property: FilePropertyModel): void;
    editProperty(property: FilePropertyModel): void;
    delete($event: Event): void;
    isRemoveAvailable(): boolean;
    isAddAvailable(): boolean;
    selectPropName($event: any, property: FilePropertyModel): void;
    formatValue(property: FilePropertyModel): any;
    updateNotAddedProperties(): void;
    isEditable(property: FilePropertyModel): boolean;
    isRemovable(property: FilePropertyModel): boolean;
    hasAccessTo(property: FilePropertyModel, accessLevel: AccessLevels): boolean;
    dateToPicker(value: string): string;
    dateFromPicker(property: FilePropertyModel, value: string): void;
    getVisiblePoperties(): FilePropertyModel[];
    toDictionary<T extends IProperty>(array: T[]): {
        [id: string]: T;
    };
}
