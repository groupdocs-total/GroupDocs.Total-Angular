import {FileModel} from "@groupdocs.examples.angular/common-components";

export class FileFormatModel implements FileModel {
    guid: string;
    directory: boolean;
    size: number;
    name: string;
    format: string;
  }
  