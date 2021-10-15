import { Observable } from "rxjs";
export declare class UploadFilesService {
    private _uploadsChange;
    private _observer;
    constructor();
    readonly uploadsChange: Observable<FileList>;
    changeFilesList(filesList: FileList): void;
}
