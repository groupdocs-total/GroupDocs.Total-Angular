
import { FileDescription } from "@groupdocs.examples.angular/common-components";

  export enum AccessLevels {
    Read = 0,
    Update = 1,
    Remove = 2,
    Add = 4,
    AddOrUpdate = 5,
    Full = 7
  }

  export enum MetadataPropertyType {
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

  export enum MetadataType {
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
  
  export enum PropertyState {
    Unchanged = 0,
    Added = 1,
    Edited = 2,
    Deleted = 3
  }

  export interface IProperty {
    name:string;
  }

  export class FilePropertyModel implements IProperty {
    name: string;
    value: any;
    type: number;
    state: PropertyState;
    selected: boolean;
    editing: boolean;
    adding: boolean;
  }

  export class KnownPropertyModel implements IProperty {
    name: string;
    type: number;
    accessLevel: number;
  }

  export class PackageModel {
    id: string;
    name: string;
    index: number;
    type: number;
    properties: FilePropertyModel[];
    knownProperties: KnownPropertyModel[];
  }

  export class ChangedFileModel {
    guid: string;
    password: string;
    packages: ChangedPackageModel[];
  }
  
  export class ChangedPackageModel {
    id: string;
    properties: FilePropertyModel[];
  }

  export class FilePreview extends FileDescription {
    timeLimitExceeded: boolean
  }

  export const PackageNameByMetadataType: { [id in MetadataType]? : string; } = {
    [MetadataType.WordProcessing]: "Document Properties",
    [MetadataType.Spreadsheet]: "Workbook Properties",
    [MetadataType.Presentation]: "Presentation Properties",
    [MetadataType.ProjectManagement]: "Project Properties",
    [MetadataType.Diagram]: "Diagram Properties",
    [MetadataType.Note]: "Note Properties",
    [MetadataType.Pdf]: "PDF Properties",
    [MetadataType.FileFormat]: "File Format Info",
    [MetadataType.DocumentStatistics]: "Document Statistics",
    [MetadataType.DublinCore]: "Dublin Core Properties",
    [MetadataType.ImageResourceBlock]: "Image Resources",
    [MetadataType.MpegAudio]: "Mpeg Audio Properties",
    [MetadataType.DigitalSignature]: "Digital Signature Properties",
  };

  export const PackageNameByOriginalName: { [key: string] : string; } = {
    "NotePage": "Page",
    "ZipFile": "Archived File",
    "TorrentSharedFilePackage": "Shared File",
    "MovAtom": "Atom",
    "CanonMakerNotePackage": "Canon Makernote",
    "NikonMakerNotePackage": "Nikon Makernote",
    "PanasonicMakerNotePackage": "Panasonic Makernote",
    "SonyMakerNotePackage": "Sony Makernote",
    "MatroskaSegment": "Segment",
    "MatroskaAudioTrack": "Track",
    "MatroskaSubtitleTrack": "Track",
    "MatroskaVideoTrack": "Track",
    "MatroskaTrack": "Track",
    "MatroskaTag": "Tag",
    "MatroskaEbmlHeader": "Header",
    "VCardCard": "Card",
    "AsfCodec": "Codec",
    "AsfBaseStreamProperty": "Stream",
    "AsfAudioStreamProperty": "Stream",
    "AsfVideoStreamProperty": "Stream",
    "AsfMetadataDescriptorCollection": "Descriptors",
    "OpenTypeFont": "Font",
  };