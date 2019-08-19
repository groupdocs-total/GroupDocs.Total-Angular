import {FileModel} from "@groupdocs.examples.angular/common-components";

export class ConversionItemModel implements FileModel {
    guid: string;
    directory: boolean;
    size: number;
    name: string;
    destinationType: string;
    sizeString: string;
    destinationFileName: string;
    destinationFormatName: string;
    sourceIcon: string;
    sourceFormatName: string;
    destinationIcon: string;
    converted: boolean;
    //converting: boolean;
  }