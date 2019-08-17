import {FileModel} from "@groupdocs.examples.angular/common-components";

export class ConversionItemModel implements FileModel {
    guid: string;
    directory: boolean;
    size: number;
    name: string;
    format: string;
    sizeString: string;
    destinationFileName: string;
    destinationFormatName: string;
    sourceIcon: string;
    sourceFormatName: string;
    destinationIcon: string;
  }