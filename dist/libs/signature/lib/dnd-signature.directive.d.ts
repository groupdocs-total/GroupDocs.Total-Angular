import { EventEmitter } from '@angular/core';
import { DndDirective, UploadFilesService } from "@groupdocs.examples.angular/common-components";
export declare class DndSignatureDirective extends DndDirective {
    files: EventEmitter<{}>;
    constructor(_uploadFilesService: UploadFilesService);
    onDrop(evt: any): void;
}
