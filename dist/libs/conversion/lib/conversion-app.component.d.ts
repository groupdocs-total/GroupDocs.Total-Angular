import { ConversionConfigService } from "./conversion-config.service";
import { ConversionService } from "./conversion.service";
import { ModalService, UploadFilesService } from "@groupdocs.examples.angular/common-components";
import { ConversionConfig } from "./conversion-config";
import { ConversionItemModel, ExtendedFileModel } from "./models";
export declare class ConversionAppComponent {
    private _modalService;
    private _conversionService;
    title: string;
    files: ExtendedFileModel[];
    conversionItems: ConversionItemModel[];
    browseFilesModal: string;
    isDesktop: boolean;
    leftBarOpen: boolean;
    conversionConfig: ConversionConfig;
    result: any;
    selectedFormat: string;
    warningItems: number;
    constructor(_modalService: ModalService, _conversionService: ConversionService, configService: ConversionConfigService, uploadFilesService: UploadFilesService);
    readonly rewriteConfig: boolean;
    readonly browseConfig: boolean;
    readonly uploadConfig: boolean;
    fileDropped($event: any): void;
    openModal(id: string): void;
    closeModal(id: string): void;
    upload($event: string): void;
    selectDir($event: string): void;
    convertSingleItem(item: any): void;
    convertAll(): void;
    convertAllUnavailable(): boolean;
    removeItemFromQueue(item: ConversionItemModel): void;
    selectAllItems(checked: boolean): void;
    itemAlreadyAdded(selectedItem: ConversionItemModel): boolean;
    isLeftBarOpen(): boolean;
}
