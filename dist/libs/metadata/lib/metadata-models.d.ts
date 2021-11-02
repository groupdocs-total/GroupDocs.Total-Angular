import { FileDescription } from "@groupdocs.examples.angular/common-components";
export declare enum AccessLevels {
    Read = 0,
    Update = 1,
    Remove = 2,
    Add = 4,
    AddOrUpdate = 5,
    Full = 7
}
export declare enum MetadataPropertyType {
    Empty = 0,
    String = 1,
    Boolean = 2,
    DateTime = 3,
    TimeSpan = 4,
    Integer = 5,
    Long = 6,
    Double = 7,
    StringArray = 8,
    ByteArray = 9,
    DoubleArray = 10,
    IntegerArray = 11,
    LongArray = 12,
    Metadata = 13,
    MetadataArray = 14,
    Guid = 15,
    PropertyValueArray = 16
}
export declare enum MetadataType {
    Undefined = 0,
    Root = 1,
    Xmp = 2,
    Exif = 3,
    Iptc = 4,
    DublinCore = 5,
    ImageResourceBlock = 6,
    FileFormat = 7,
    DigitalSignature = 8,
    Presentation = 9,
    Spreadsheet = 10,
    WordProcessing = 11,
    Diagram = 12,
    Note = 13,
    ProjectManagement = 14,
    Pdf = 15,
    DocumentStatistics = 16,
    Psd = 17,
    Jpeg2000 = 18,
    Dicom = 19,
    Bmp = 20,
    Wav = 21,
    ID3V1 = 22,
    ID3V2 = 23,
    MpegAudio = 24,
    Lyrics3 = 25,
    ApeV2 = 26,
    Avi = 27,
    Flv = 28,
    Asf = 29,
    Mov = 30,
    Matroska = 31,
    Zip = 32,
    VCard = 33,
    Epub = 34,
    OpenType = 35,
    Cad = 36,
    Eml = 37,
    Msg = 38,
    Torrent = 39
}
export declare class FilePropertyModel {
    name: string;
    value: any;
    type: number;
    added: boolean;
    selected: boolean;
    editing: boolean;
    edited: boolean;
}
export declare class KnownPropertyModel {
    name: string;
    type: number;
    accessLevel: number;
}
export declare class PackageModel {
    id: string;
    name: string;
    index: number;
    type: number;
    properties: FilePropertyModel[];
    knownProperties: KnownPropertyModel[];
}
export declare class RemovePropertyModel {
    packageId: string;
    property: FilePropertyModel;
}
export declare class ChangedPackageModel {
    id: string;
    properties: FilePropertyModel[];
}
export declare class FilePreview extends FileDescription {
    timeLimitExceeded: boolean;
}
export declare const PackageNameByMetadataType: {
    [id in MetadataType]?: string;
};
export declare const PackageNameByOriginalName: {
    [key: string]: string;
};
