import { HttpClient } from "@angular/common/http";
import { ConfigService } from "@groupdocs.examples.angular/common-components";
import { Observable } from "rxjs";
import { ConversionItemModel } from './models';
export declare class ConversionService {
    private _http;
    private _config;
    private _selectedFormat;
    private _selectFormats;
    private _itemToConvert;
    itemToConvert: Observable<ConversionItemModel>;
    private _itemToRemove;
    itemToRemove: Observable<ConversionItemModel>;
    constructor(_http: HttpClient, _config: ConfigService);
    readonly selectedItems: Observable<ConversionItemModel[]>;
    selectItems(filesToConvert: ConversionItemModel[]): void;
    loadFiles(path: string): Observable<Object>;
    upload(file: File, url: string, rewrite: boolean): Observable<Object>;
    convert(file: ConversionItemModel): Observable<Object>;
    getDownloadUrl(guid: string): string;
    selectedItemToConvert(item: ConversionItemModel): void;
    selectedItemToRemove(item: ConversionItemModel): void;
}
