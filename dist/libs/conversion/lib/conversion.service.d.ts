import { HttpClient } from "@angular/common/http";
import { ConfigService } from "@groupdocs.examples.angular/common-components";
import { Observable } from "rxjs";
import { ConversionItemModel } from './models';
export declare class ConversionService {
    private _http;
    private _config;
    private _selectedItems;
    private _selectItems;
    private _selectedFormat;
    private _selectFormat;
    private _itemToConvert;
    itemToConvert: Observable<ConversionItemModel>;
    private _itemToRemove;
    itemToRemove: Observable<ConversionItemModel>;
    constructor(_http: HttpClient, _config: ConfigService);
    readonly selectedItems: Observable<ConversionItemModel[]>;
    readonly selectedFormat: Observable<string>;
    selectItems(filesToConvert: ConversionItemModel[]): void;
    selectFormat(selectedFormat: string): void;
    loadFiles(path: string): Observable<Object>;
    upload(file: File, url: string, rewrite: boolean): Observable<Object>;
    convert(file: ConversionItemModel): Observable<Object>;
    getDownloadUrl(guid: string): string;
    selectedItemToConvert(item: ConversionItemModel): void;
    selectedItemToRemove(item: ConversionItemModel): void;
}
