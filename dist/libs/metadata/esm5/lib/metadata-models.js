import * as tslib_1 from "tslib";
var _a;
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { FileDescription } from "@groupdocs.examples.angular/common-components";
/** @enum {number} */
var AccessLevels = {
    Read: 0,
    Update: 1,
    Remove: 2,
    Add: 4,
    AddOrUpdate: 5,
    Full: 7,
};
export { AccessLevels };
AccessLevels[AccessLevels.Read] = 'Read';
AccessLevels[AccessLevels.Update] = 'Update';
AccessLevels[AccessLevels.Remove] = 'Remove';
AccessLevels[AccessLevels.Add] = 'Add';
AccessLevels[AccessLevels.AddOrUpdate] = 'AddOrUpdate';
AccessLevels[AccessLevels.Full] = 'Full';
/** @enum {number} */
var MetadataPropertyType = {
    Empty: 0,
    String: 1,
    Boolean: 2,
    DateTime: 3,
    TimeSpan: 4,
    Integer: 5,
    Long: 6,
    Double: 7,
    StringArray: 8,
    ByteArray: 9,
    DoubleArray: 10,
    IntegerArray: 11,
    LongArray: 12,
    Metadata: 13,
    MetadataArray: 14,
    Guid: 15,
    PropertyValueArray: 16,
};
export { MetadataPropertyType };
MetadataPropertyType[MetadataPropertyType.Empty] = 'Empty';
MetadataPropertyType[MetadataPropertyType.String] = 'String';
MetadataPropertyType[MetadataPropertyType.Boolean] = 'Boolean';
MetadataPropertyType[MetadataPropertyType.DateTime] = 'DateTime';
MetadataPropertyType[MetadataPropertyType.TimeSpan] = 'TimeSpan';
MetadataPropertyType[MetadataPropertyType.Integer] = 'Integer';
MetadataPropertyType[MetadataPropertyType.Long] = 'Long';
MetadataPropertyType[MetadataPropertyType.Double] = 'Double';
MetadataPropertyType[MetadataPropertyType.StringArray] = 'StringArray';
MetadataPropertyType[MetadataPropertyType.ByteArray] = 'ByteArray';
MetadataPropertyType[MetadataPropertyType.DoubleArray] = 'DoubleArray';
MetadataPropertyType[MetadataPropertyType.IntegerArray] = 'IntegerArray';
MetadataPropertyType[MetadataPropertyType.LongArray] = 'LongArray';
MetadataPropertyType[MetadataPropertyType.Metadata] = 'Metadata';
MetadataPropertyType[MetadataPropertyType.MetadataArray] = 'MetadataArray';
MetadataPropertyType[MetadataPropertyType.Guid] = 'Guid';
MetadataPropertyType[MetadataPropertyType.PropertyValueArray] = 'PropertyValueArray';
/** @enum {number} */
var MetadataType = {
    Undefined: 0,
    Root: 1,
    Xmp: 2,
    Exif: 3,
    Iptc: 4,
    DublinCore: 5,
    ImageResourceBlock: 6,
    FileFormat: 7,
    DigitalSignature: 8,
    Presentation: 9,
    Spreadsheet: 10,
    WordProcessing: 11,
    Diagram: 12,
    Note: 13,
    ProjectManagement: 14,
    Pdf: 15,
    DocumentStatistics: 16,
    Psd: 17,
    Jpeg2000: 18,
    Dicom: 19,
    Bmp: 20,
    Wav: 21,
    ID3V1: 22,
    ID3V2: 23,
    MpegAudio: 24,
    Lyrics3: 25,
    ApeV2: 26,
    Avi: 27,
    Flv: 28,
    Asf: 29,
    Mov: 30,
    Matroska: 31,
    Zip: 32,
    VCard: 33,
    Epub: 34,
    OpenType: 35,
    Cad: 36,
    Eml: 37,
    Msg: 38,
    Torrent: 39,
};
export { MetadataType };
MetadataType[MetadataType.Undefined] = 'Undefined';
MetadataType[MetadataType.Root] = 'Root';
MetadataType[MetadataType.Xmp] = 'Xmp';
MetadataType[MetadataType.Exif] = 'Exif';
MetadataType[MetadataType.Iptc] = 'Iptc';
MetadataType[MetadataType.DublinCore] = 'DublinCore';
MetadataType[MetadataType.ImageResourceBlock] = 'ImageResourceBlock';
MetadataType[MetadataType.FileFormat] = 'FileFormat';
MetadataType[MetadataType.DigitalSignature] = 'DigitalSignature';
MetadataType[MetadataType.Presentation] = 'Presentation';
MetadataType[MetadataType.Spreadsheet] = 'Spreadsheet';
MetadataType[MetadataType.WordProcessing] = 'WordProcessing';
MetadataType[MetadataType.Diagram] = 'Diagram';
MetadataType[MetadataType.Note] = 'Note';
MetadataType[MetadataType.ProjectManagement] = 'ProjectManagement';
MetadataType[MetadataType.Pdf] = 'Pdf';
MetadataType[MetadataType.DocumentStatistics] = 'DocumentStatistics';
MetadataType[MetadataType.Psd] = 'Psd';
MetadataType[MetadataType.Jpeg2000] = 'Jpeg2000';
MetadataType[MetadataType.Dicom] = 'Dicom';
MetadataType[MetadataType.Bmp] = 'Bmp';
MetadataType[MetadataType.Wav] = 'Wav';
MetadataType[MetadataType.ID3V1] = 'ID3V1';
MetadataType[MetadataType.ID3V2] = 'ID3V2';
MetadataType[MetadataType.MpegAudio] = 'MpegAudio';
MetadataType[MetadataType.Lyrics3] = 'Lyrics3';
MetadataType[MetadataType.ApeV2] = 'ApeV2';
MetadataType[MetadataType.Avi] = 'Avi';
MetadataType[MetadataType.Flv] = 'Flv';
MetadataType[MetadataType.Asf] = 'Asf';
MetadataType[MetadataType.Mov] = 'Mov';
MetadataType[MetadataType.Matroska] = 'Matroska';
MetadataType[MetadataType.Zip] = 'Zip';
MetadataType[MetadataType.VCard] = 'VCard';
MetadataType[MetadataType.Epub] = 'Epub';
MetadataType[MetadataType.OpenType] = 'OpenType';
MetadataType[MetadataType.Cad] = 'Cad';
MetadataType[MetadataType.Eml] = 'Eml';
MetadataType[MetadataType.Msg] = 'Msg';
MetadataType[MetadataType.Torrent] = 'Torrent';
/** @enum {number} */
var PropertyState = {
    Unchanged: 0,
    Added: 1,
    Edited: 2,
    Deleted: 3,
};
export { PropertyState };
PropertyState[PropertyState.Unchanged] = 'Unchanged';
PropertyState[PropertyState.Added] = 'Added';
PropertyState[PropertyState.Edited] = 'Edited';
PropertyState[PropertyState.Deleted] = 'Deleted';
/**
 * @record
 */
export function IProperty() { }
if (false) {
    /** @type {?} */
    IProperty.prototype.name;
}
var FilePropertyModel = /** @class */ (function () {
    function FilePropertyModel() {
    }
    return FilePropertyModel;
}());
export { FilePropertyModel };
if (false) {
    /** @type {?} */
    FilePropertyModel.prototype.name;
    /** @type {?} */
    FilePropertyModel.prototype.value;
    /** @type {?} */
    FilePropertyModel.prototype.type;
    /** @type {?} */
    FilePropertyModel.prototype.state;
    /** @type {?} */
    FilePropertyModel.prototype.selected;
    /** @type {?} */
    FilePropertyModel.prototype.editing;
    /** @type {?} */
    FilePropertyModel.prototype.adding;
}
var KnownPropertyModel = /** @class */ (function () {
    function KnownPropertyModel() {
    }
    return KnownPropertyModel;
}());
export { KnownPropertyModel };
if (false) {
    /** @type {?} */
    KnownPropertyModel.prototype.name;
    /** @type {?} */
    KnownPropertyModel.prototype.type;
    /** @type {?} */
    KnownPropertyModel.prototype.accessLevel;
}
var PackageModel = /** @class */ (function () {
    function PackageModel() {
    }
    return PackageModel;
}());
export { PackageModel };
if (false) {
    /** @type {?} */
    PackageModel.prototype.id;
    /** @type {?} */
    PackageModel.prototype.name;
    /** @type {?} */
    PackageModel.prototype.index;
    /** @type {?} */
    PackageModel.prototype.type;
    /** @type {?} */
    PackageModel.prototype.properties;
    /** @type {?} */
    PackageModel.prototype.knownProperties;
}
var ChangedFileModel = /** @class */ (function () {
    function ChangedFileModel() {
    }
    return ChangedFileModel;
}());
export { ChangedFileModel };
if (false) {
    /** @type {?} */
    ChangedFileModel.prototype.guid;
    /** @type {?} */
    ChangedFileModel.prototype.password;
    /** @type {?} */
    ChangedFileModel.prototype.packages;
}
var ChangedPackageModel = /** @class */ (function () {
    function ChangedPackageModel() {
    }
    return ChangedPackageModel;
}());
export { ChangedPackageModel };
if (false) {
    /** @type {?} */
    ChangedPackageModel.prototype.id;
    /** @type {?} */
    ChangedPackageModel.prototype.properties;
}
var FilePreview = /** @class */ (function (_super) {
    tslib_1.__extends(FilePreview, _super);
    function FilePreview() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return FilePreview;
}(FileDescription));
export { FilePreview };
if (false) {
    /** @type {?} */
    FilePreview.prototype.timeLimitExceeded;
}
/** @type {?} */
export var PackageNameByMetadataType = (_a = {},
    _a[MetadataType.WordProcessing] = "Document Properties",
    _a[MetadataType.Spreadsheet] = "Workbook Properties",
    _a[MetadataType.Presentation] = "Presentation Properties",
    _a[MetadataType.ProjectManagement] = "Project Properties",
    _a[MetadataType.Diagram] = "Diagram Properties",
    _a[MetadataType.Note] = "Note Properties",
    _a[MetadataType.Pdf] = "PDF Properties",
    _a[MetadataType.FileFormat] = "File Format Info",
    _a[MetadataType.DocumentStatistics] = "Document Statistics",
    _a[MetadataType.DublinCore] = "Dublin Core Properties",
    _a[MetadataType.ImageResourceBlock] = "Image Resources",
    _a[MetadataType.MpegAudio] = "Mpeg Audio Properties",
    _a[MetadataType.DigitalSignature] = "Digital Signature Properties",
    _a);
/** @type {?} */
export var PackageNameByOriginalName = {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWV0YWRhdGEtbW9kZWxzLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdyb3VwZG9jcy5leGFtcGxlcy5hbmd1bGFyL21ldGFkYXRhLyIsInNvdXJjZXMiOlsibGliL21ldGFkYXRhLW1vZGVscy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFDQSxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sK0NBQStDLENBQUM7OztJQUc1RSxPQUFRO0lBQ1IsU0FBVTtJQUNWLFNBQVU7SUFDVixNQUFPO0lBQ1AsY0FBZTtJQUNmLE9BQVE7Ozs7Ozs7Ozs7O0lBSVIsUUFBUztJQUNULFNBQVU7SUFDVixVQUFXO0lBQ1gsV0FBWTtJQUNaLFdBQVk7SUFDWixVQUFXO0lBQ1gsT0FBUTtJQUNSLFNBQVU7SUFDVixjQUFlO0lBQ2YsWUFBYTtJQUNiLGVBQWdCO0lBQ2hCLGdCQUFpQjtJQUNqQixhQUFjO0lBQ2QsWUFBYTtJQUNiLGlCQUFrQjtJQUNsQixRQUFTO0lBQ1Qsc0JBQXVCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBSXZCLFlBQWE7SUFDYixPQUFRO0lBQ1IsTUFBTztJQUNQLE9BQVE7SUFDUixPQUFRO0lBQ1IsYUFBYztJQUNkLHFCQUFzQjtJQUN0QixhQUFjO0lBQ2QsbUJBQW9CO0lBQ3BCLGVBQWdCO0lBQ2hCLGVBQWdCO0lBQ2hCLGtCQUFtQjtJQUNuQixXQUFZO0lBQ1osUUFBUztJQUNULHFCQUFzQjtJQUN0QixPQUFRO0lBQ1Isc0JBQXVCO0lBQ3ZCLE9BQVE7SUFDUixZQUFhO0lBQ2IsU0FBVTtJQUNWLE9BQVE7SUFDUixPQUFRO0lBQ1IsU0FBVTtJQUNWLFNBQVU7SUFDVixhQUFjO0lBQ2QsV0FBWTtJQUNaLFNBQVU7SUFDVixPQUFRO0lBQ1IsT0FBUTtJQUNSLE9BQVE7SUFDUixPQUFRO0lBQ1IsWUFBYTtJQUNiLE9BQVE7SUFDUixTQUFVO0lBQ1YsUUFBUztJQUNULFlBQWE7SUFDYixPQUFRO0lBQ1IsT0FBUTtJQUNSLE9BQVE7SUFDUixXQUFZ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QWMsRUFBRSxNQUFNO0NBQ3ZCIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbmltcG9ydCB7IEZpbGVEZXNjcmlwdGlvbiB9IGZyb20gXCJAZ3JvdXBkb2NzLmV4YW1wbGVzLmFuZ3VsYXIvY29tbW9uLWNvbXBvbmVudHNcIjtcclxuXHJcbiAgZXhwb3J0IGVudW0gQWNjZXNzTGV2ZWxzIHtcclxuICAgIFJlYWQgPSAwLFxyXG4gICAgVXBkYXRlID0gMSxcclxuICAgIFJlbW92ZSA9IDIsXHJcbiAgICBBZGQgPSA0LFxyXG4gICAgQWRkT3JVcGRhdGUgPSA1LFxyXG4gICAgRnVsbCA9IDdcclxuICB9XHJcblxyXG4gIGV4cG9ydCBlbnVtIE1ldGFkYXRhUHJvcGVydHlUeXBlIHtcclxuICAgIEVtcHR5ID0gMCxcclxuICAgIFN0cmluZyA9IDEsXHJcbiAgICBCb29sZWFuID0gMixcclxuICAgIERhdGVUaW1lID0gMyxcclxuICAgIFRpbWVTcGFuID0gNCxcclxuICAgIEludGVnZXIgPSA1LFxyXG4gICAgTG9uZyA9IDYsXHJcbiAgICBEb3VibGUgPSA3LFxyXG4gICAgU3RyaW5nQXJyYXkgPSA4LFxyXG4gICAgQnl0ZUFycmF5ID0gOSxcclxuICAgIERvdWJsZUFycmF5ID0gMTAsXHJcbiAgICBJbnRlZ2VyQXJyYXkgPSAxMSxcclxuICAgIExvbmdBcnJheSA9IDEyLFxyXG4gICAgTWV0YWRhdGEgPSAxMyxcclxuICAgIE1ldGFkYXRhQXJyYXkgPSAxNCxcclxuICAgIEd1aWQgPSAxNSxcclxuICAgIFByb3BlcnR5VmFsdWVBcnJheSA9IDE2XHJcbiAgfVxyXG5cclxuICBleHBvcnQgZW51bSBNZXRhZGF0YVR5cGUge1xyXG4gICAgVW5kZWZpbmVkID0gMCxcclxuICAgIFJvb3QgPSAxLFxyXG4gICAgWG1wID0gMixcclxuICAgIEV4aWYgPSAzLFxyXG4gICAgSXB0YyA9IDQsXHJcbiAgICBEdWJsaW5Db3JlID0gNSxcclxuICAgIEltYWdlUmVzb3VyY2VCbG9jayA9IDYsXHJcbiAgICBGaWxlRm9ybWF0ID0gNyxcclxuICAgIERpZ2l0YWxTaWduYXR1cmUgPSA4LFxyXG4gICAgUHJlc2VudGF0aW9uID0gOSxcclxuICAgIFNwcmVhZHNoZWV0ID0gMTAsXHJcbiAgICBXb3JkUHJvY2Vzc2luZyA9IDExLFxyXG4gICAgRGlhZ3JhbSA9IDEyLFxyXG4gICAgTm90ZSA9IDEzLFxyXG4gICAgUHJvamVjdE1hbmFnZW1lbnQgPSAxNCxcclxuICAgIFBkZiA9IDE1LFxyXG4gICAgRG9jdW1lbnRTdGF0aXN0aWNzID0gMTYsXHJcbiAgICBQc2QgPSAxNyxcclxuICAgIEpwZWcyMDAwID0gMTgsXHJcbiAgICBEaWNvbSA9IDE5LFxyXG4gICAgQm1wID0gMjAsXHJcbiAgICBXYXYgPSAyMSxcclxuICAgIElEM1YxID0gMjIsXHJcbiAgICBJRDNWMiA9IDIzLFxyXG4gICAgTXBlZ0F1ZGlvID0gMjQsXHJcbiAgICBMeXJpY3MzID0gMjUsXHJcbiAgICBBcGVWMiA9IDI2LFxyXG4gICAgQXZpID0gMjcsXHJcbiAgICBGbHYgPSAyOCxcclxuICAgIEFzZiA9IDI5LFxyXG4gICAgTW92ID0gMzAsXHJcbiAgICBNYXRyb3NrYSA9IDMxLFxyXG4gICAgWmlwID0gMzIsXHJcbiAgICBWQ2FyZCA9IDMzLFxyXG4gICAgRXB1YiA9IDM0LFxyXG4gICAgT3BlblR5cGUgPSAzNSxcclxuICAgIENhZCA9IDM2LFxyXG4gICAgRW1sID0gMzcsXHJcbiAgICBNc2cgPSAzOCxcclxuICAgIFRvcnJlbnQgPSAzOVxyXG4gIH1cclxuICBcclxuICBleHBvcnQgZW51bSBQcm9wZXJ0eVN0YXRlIHtcclxuICAgIFVuY2hhbmdlZCA9IDAsXHJcbiAgICBBZGRlZCA9IDEsXHJcbiAgICBFZGl0ZWQgPSAyLFxyXG4gICAgRGVsZXRlZCA9IDNcclxuICB9XHJcblxyXG4gIGV4cG9ydCBpbnRlcmZhY2UgSVByb3BlcnR5IHtcclxuICAgIG5hbWU6c3RyaW5nO1xyXG4gIH1cclxuXHJcbiAgZXhwb3J0IGNsYXNzIEZpbGVQcm9wZXJ0eU1vZGVsIGltcGxlbWVudHMgSVByb3BlcnR5IHtcclxuICAgIG5hbWU6IHN0cmluZztcclxuICAgIHZhbHVlOiBhbnk7XHJcbiAgICB0eXBlOiBudW1iZXI7XHJcbiAgICBzdGF0ZTogUHJvcGVydHlTdGF0ZTtcclxuICAgIHNlbGVjdGVkOiBib29sZWFuO1xyXG4gICAgZWRpdGluZzogYm9vbGVhbjtcclxuICAgIGFkZGluZzogYm9vbGVhbjtcclxuICB9XHJcblxyXG4gIGV4cG9ydCBjbGFzcyBLbm93blByb3BlcnR5TW9kZWwgaW1wbGVtZW50cyBJUHJvcGVydHkge1xyXG4gICAgbmFtZTogc3RyaW5nO1xyXG4gICAgdHlwZTogbnVtYmVyO1xyXG4gICAgYWNjZXNzTGV2ZWw6IG51bWJlcjtcclxuICB9XHJcblxyXG4gIGV4cG9ydCBjbGFzcyBQYWNrYWdlTW9kZWwge1xyXG4gICAgaWQ6IHN0cmluZztcclxuICAgIG5hbWU6IHN0cmluZztcclxuICAgIGluZGV4OiBudW1iZXI7XHJcbiAgICB0eXBlOiBudW1iZXI7XHJcbiAgICBwcm9wZXJ0aWVzOiBGaWxlUHJvcGVydHlNb2RlbFtdO1xyXG4gICAga25vd25Qcm9wZXJ0aWVzOiBLbm93blByb3BlcnR5TW9kZWxbXTtcclxuICB9XHJcblxyXG4gIGV4cG9ydCBjbGFzcyBDaGFuZ2VkRmlsZU1vZGVsIHtcclxuICAgIGd1aWQ6IHN0cmluZztcclxuICAgIHBhc3N3b3JkOiBzdHJpbmc7XHJcbiAgICBwYWNrYWdlczogQ2hhbmdlZFBhY2thZ2VNb2RlbFtdO1xyXG4gIH1cclxuICBcclxuICBleHBvcnQgY2xhc3MgQ2hhbmdlZFBhY2thZ2VNb2RlbCB7XHJcbiAgICBpZDogc3RyaW5nO1xyXG4gICAgcHJvcGVydGllczogRmlsZVByb3BlcnR5TW9kZWxbXTtcclxuICB9XHJcblxyXG4gIGV4cG9ydCBjbGFzcyBGaWxlUHJldmlldyBleHRlbmRzIEZpbGVEZXNjcmlwdGlvbiB7XHJcbiAgICB0aW1lTGltaXRFeGNlZWRlZDogYm9vbGVhblxyXG4gIH1cclxuXHJcbiAgZXhwb3J0IGNvbnN0IFBhY2thZ2VOYW1lQnlNZXRhZGF0YVR5cGU6IHsgW2lkIGluIE1ldGFkYXRhVHlwZV0/IDogc3RyaW5nOyB9ID0ge1xyXG4gICAgW01ldGFkYXRhVHlwZS5Xb3JkUHJvY2Vzc2luZ106IFwiRG9jdW1lbnQgUHJvcGVydGllc1wiLFxyXG4gICAgW01ldGFkYXRhVHlwZS5TcHJlYWRzaGVldF06IFwiV29ya2Jvb2sgUHJvcGVydGllc1wiLFxyXG4gICAgW01ldGFkYXRhVHlwZS5QcmVzZW50YXRpb25dOiBcIlByZXNlbnRhdGlvbiBQcm9wZXJ0aWVzXCIsXHJcbiAgICBbTWV0YWRhdGFUeXBlLlByb2plY3RNYW5hZ2VtZW50XTogXCJQcm9qZWN0IFByb3BlcnRpZXNcIixcclxuICAgIFtNZXRhZGF0YVR5cGUuRGlhZ3JhbV06IFwiRGlhZ3JhbSBQcm9wZXJ0aWVzXCIsXHJcbiAgICBbTWV0YWRhdGFUeXBlLk5vdGVdOiBcIk5vdGUgUHJvcGVydGllc1wiLFxyXG4gICAgW01ldGFkYXRhVHlwZS5QZGZdOiBcIlBERiBQcm9wZXJ0aWVzXCIsXHJcbiAgICBbTWV0YWRhdGFUeXBlLkZpbGVGb3JtYXRdOiBcIkZpbGUgRm9ybWF0IEluZm9cIixcclxuICAgIFtNZXRhZGF0YVR5cGUuRG9jdW1lbnRTdGF0aXN0aWNzXTogXCJEb2N1bWVudCBTdGF0aXN0aWNzXCIsXHJcbiAgICBbTWV0YWRhdGFUeXBlLkR1YmxpbkNvcmVdOiBcIkR1YmxpbiBDb3JlIFByb3BlcnRpZXNcIixcclxuICAgIFtNZXRhZGF0YVR5cGUuSW1hZ2VSZXNvdXJjZUJsb2NrXTogXCJJbWFnZSBSZXNvdXJjZXNcIixcclxuICAgIFtNZXRhZGF0YVR5cGUuTXBlZ0F1ZGlvXTogXCJNcGVnIEF1ZGlvIFByb3BlcnRpZXNcIixcclxuICAgIFtNZXRhZGF0YVR5cGUuRGlnaXRhbFNpZ25hdHVyZV06IFwiRGlnaXRhbCBTaWduYXR1cmUgUHJvcGVydGllc1wiLFxyXG4gIH07XHJcblxyXG4gIGV4cG9ydCBjb25zdCBQYWNrYWdlTmFtZUJ5T3JpZ2luYWxOYW1lOiB7IFtrZXk6IHN0cmluZ10gOiBzdHJpbmc7IH0gPSB7XHJcbiAgICBcIk5vdGVQYWdlXCI6IFwiUGFnZVwiLFxyXG4gICAgXCJaaXBGaWxlXCI6IFwiQXJjaGl2ZWQgRmlsZVwiLFxyXG4gICAgXCJUb3JyZW50U2hhcmVkRmlsZVBhY2thZ2VcIjogXCJTaGFyZWQgRmlsZVwiLFxyXG4gICAgXCJNb3ZBdG9tXCI6IFwiQXRvbVwiLFxyXG4gICAgXCJDYW5vbk1ha2VyTm90ZVBhY2thZ2VcIjogXCJDYW5vbiBNYWtlcm5vdGVcIixcclxuICAgIFwiTmlrb25NYWtlck5vdGVQYWNrYWdlXCI6IFwiTmlrb24gTWFrZXJub3RlXCIsXHJcbiAgICBcIlBhbmFzb25pY01ha2VyTm90ZVBhY2thZ2VcIjogXCJQYW5hc29uaWMgTWFrZXJub3RlXCIsXHJcbiAgICBcIlNvbnlNYWtlck5vdGVQYWNrYWdlXCI6IFwiU29ueSBNYWtlcm5vdGVcIixcclxuICAgIFwiTWF0cm9za2FTZWdtZW50XCI6IFwiU2VnbWVudFwiLFxyXG4gICAgXCJNYXRyb3NrYUF1ZGlvVHJhY2tcIjogXCJUcmFja1wiLFxyXG4gICAgXCJNYXRyb3NrYVN1YnRpdGxlVHJhY2tcIjogXCJUcmFja1wiLFxyXG4gICAgXCJNYXRyb3NrYVZpZGVvVHJhY2tcIjogXCJUcmFja1wiLFxyXG4gICAgXCJNYXRyb3NrYVRyYWNrXCI6IFwiVHJhY2tcIixcclxuICAgIFwiTWF0cm9za2FUYWdcIjogXCJUYWdcIixcclxuICAgIFwiTWF0cm9za2FFYm1sSGVhZGVyXCI6IFwiSGVhZGVyXCIsXHJcbiAgICBcIlZDYXJkQ2FyZFwiOiBcIkNhcmRcIixcclxuICAgIFwiQXNmQ29kZWNcIjogXCJDb2RlY1wiLFxyXG4gICAgXCJBc2ZCYXNlU3RyZWFtUHJvcGVydHlcIjogXCJTdHJlYW1cIixcclxuICAgIFwiQXNmQXVkaW9TdHJlYW1Qcm9wZXJ0eVwiOiBcIlN0cmVhbVwiLFxyXG4gICAgXCJBc2ZWaWRlb1N0cmVhbVByb3BlcnR5XCI6IFwiU3RyZWFtXCIsXHJcbiAgICBcIkFzZk1ldGFkYXRhRGVzY3JpcHRvckNvbGxlY3Rpb25cIjogXCJEZXNjcmlwdG9yc1wiLFxyXG4gICAgXCJPcGVuVHlwZUZvbnRcIjogXCJGb250XCIsXHJcbiAgfTsiXX0=