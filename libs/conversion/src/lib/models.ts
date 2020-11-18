import {FileModel} from "@groupdocs.examples.angular/common-components";

export class ConversionRequestModel{
  added: boolean;
  destinationType: string;
  guid: string;
  size: number;
  destDocumentType: number;
}

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
    converting: boolean;
    isDirectory: boolean;
    warning: boolean;
  }

  export class ExtendedFileModel implements FileModel {
    guid: string;
    // TODO: fix dublicates below (question)
    directory: boolean;
    isDirectory: boolean;
    size: number;
    name: string;
    selected: boolean;
    conversionTypes: any;
  }
