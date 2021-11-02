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
    FilePropertyModel.prototype.added;
    /** @type {?} */
    FilePropertyModel.prototype.selected;
    /** @type {?} */
    FilePropertyModel.prototype.editing;
    /** @type {?} */
    FilePropertyModel.prototype.edited;
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
var RemovePropertyModel = /** @class */ (function () {
    function RemovePropertyModel() {
    }
    return RemovePropertyModel;
}());
export { RemovePropertyModel };
if (false) {
    /** @type {?} */
    RemovePropertyModel.prototype.packageId;
    /** @type {?} */
    RemovePropertyModel.prototype.property;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWV0YWRhdGEtbW9kZWxzLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdyb3VwZG9jcy5leGFtcGxlcy5hbmd1bGFyL21ldGFkYXRhLyIsInNvdXJjZXMiOlsibGliL21ldGFkYXRhLW1vZGVscy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFDQSxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sK0NBQStDLENBQUM7OztJQUc1RSxPQUFRO0lBQ1IsU0FBVTtJQUNWLFNBQVU7SUFDVixNQUFPO0lBQ1AsY0FBZTtJQUNmLE9BQVE7Ozs7Ozs7Ozs7O0lBSVIsUUFBUztJQUNULFNBQVU7SUFDVixVQUFXO0lBQ1gsV0FBWTtJQUNaLFdBQVk7SUFDWixVQUFXO0lBQ1gsT0FBUTtJQUNSLFNBQVU7SUFDVixjQUFlO0lBQ2YsWUFBYTtJQUNiLGVBQWdCO0lBQ2hCLGdCQUFpQjtJQUNqQixhQUFjO0lBQ2QsWUFBYTtJQUNiLGlCQUFrQjtJQUNsQixRQUFTO0lBQ1Qsc0JBQXVCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBSXZCLFlBQWE7SUFDYixPQUFRO0lBQ1IsTUFBTztJQUNQLE9BQVE7SUFDUixPQUFRO0lBQ1IsYUFBYztJQUNkLHFCQUFzQjtJQUN0QixhQUFjO0lBQ2QsbUJBQW9CO0lBQ3BCLGVBQWdCO0lBQ2hCLGVBQWdCO0lBQ2hCLGtCQUFtQjtJQUNuQixXQUFZO0lBQ1osUUFBUztJQUNULHFCQUFzQjtJQUN0QixPQUFRO0lBQ1Isc0JBQXVCO0lBQ3ZCLE9BQVE7SUFDUixZQUFhO0lBQ2IsU0FBVTtJQUNWLE9BQVE7SUFDUixPQUFRO0lBQ1IsU0FBVTtJQUNWLFNBQVU7SUFDVixhQUFjO0lBQ2QsV0FBWTtJQUNaLFNBQVU7SUFDVixPQUFRO0lBQ1IsT0FBUTtJQUNSLE9BQVE7SUFDUixPQUFRO0lBQ1IsWUFBYTtJQUNiLE9BQVE7SUFDUixTQUFVO0lBQ1YsUUFBUztJQUNULFlBQWE7SUFDYixPQUFRO0lBQ1IsT0FBUTtJQUNSLE9BQVE7SUFDUixXQUFZOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBR2Q7SUFBQTtJQVFBLENBQUM7SUFBRCx3QkFBQztBQUFELENBQUMsQUFSRCxJQVFDOzs7O0lBUEMsaUNBQWE7O0lBQ2Isa0NBQVc7O0lBQ1gsaUNBQWE7O0lBQ2Isa0NBQWU7O0lBQ2YscUNBQWtCOztJQUNsQixvQ0FBaUI7O0lBQ2pCLG1DQUFnQjs7QUFHbEI7SUFBQTtJQUlBLENBQUM7SUFBRCx5QkFBQztBQUFELENBQUMsQUFKRCxJQUlDOzs7O0lBSEMsa0NBQWE7O0lBQ2Isa0NBQWE7O0lBQ2IseUNBQW9COztBQUd0QjtJQUFBO0lBT0EsQ0FBQztJQUFELG1CQUFDO0FBQUQsQ0FBQyxBQVBELElBT0M7Ozs7SUFOQywwQkFBVzs7SUFDWCw0QkFBYTs7SUFDYiw2QkFBYzs7SUFDZCw0QkFBYTs7SUFDYixrQ0FBZ0M7O0lBQ2hDLHVDQUFzQzs7QUFHeEM7SUFBQTtJQUdBLENBQUM7SUFBRCwwQkFBQztBQUFELENBQUMsQUFIRCxJQUdDOzs7O0lBRkMsd0NBQWtCOztJQUNsQix1Q0FBMkI7O0FBRzdCO0lBQUE7SUFHQSxDQUFDO0lBQUQsMEJBQUM7QUFBRCxDQUFDLEFBSEQsSUFHQzs7OztJQUZDLGlDQUFXOztJQUNYLHlDQUFnQzs7QUFHbEM7SUFBaUMsdUNBQWU7SUFBaEQ7O0lBRUEsQ0FBQztJQUFELGtCQUFDO0FBQUQsQ0FBQyxBQUZELENBQWlDLGVBQWUsR0FFL0M7Ozs7SUFEQyx3Q0FBMEI7OztBQUc1QixNQUFNLEtBQU8seUJBQXlCO0lBQ3BDLEdBQUMsWUFBWSxDQUFDLGNBQWMsSUFBRyxxQkFBcUI7SUFDcEQsR0FBQyxZQUFZLENBQUMsV0FBVyxJQUFHLHFCQUFxQjtJQUNqRCxHQUFDLFlBQVksQ0FBQyxZQUFZLElBQUcseUJBQXlCO0lBQ3RELEdBQUMsWUFBWSxDQUFDLGlCQUFpQixJQUFHLG9CQUFvQjtJQUN0RCxHQUFDLFlBQVksQ0FBQyxPQUFPLElBQUcsb0JBQW9CO0lBQzVDLEdBQUMsWUFBWSxDQUFDLElBQUksSUFBRyxpQkFBaUI7SUFDdEMsR0FBQyxZQUFZLENBQUMsR0FBRyxJQUFHLGdCQUFnQjtJQUNwQyxHQUFDLFlBQVksQ0FBQyxVQUFVLElBQUcsa0JBQWtCO0lBQzdDLEdBQUMsWUFBWSxDQUFDLGtCQUFrQixJQUFHLHFCQUFxQjtJQUN4RCxHQUFDLFlBQVksQ0FBQyxVQUFVLElBQUcsd0JBQXdCO0lBQ25ELEdBQUMsWUFBWSxDQUFDLGtCQUFrQixJQUFHLGlCQUFpQjtJQUNwRCxHQUFDLFlBQVksQ0FBQyxTQUFTLElBQUcsdUJBQXVCO0lBQ2pELEdBQUMsWUFBWSxDQUFDLGdCQUFnQixJQUFHLDhCQUE4QjtPQUNoRTs7QUFFRCxNQUFNLEtBQU8seUJBQXlCLEdBQWdDO0lBQ3BFLFVBQVUsRUFBRSxNQUFNO0lBQ2xCLFNBQVMsRUFBRSxlQUFlO0lBQzFCLDBCQUEwQixFQUFFLGFBQWE7SUFDekMsU0FBUyxFQUFFLE1BQU07SUFDakIsdUJBQXVCLEVBQUUsaUJBQWlCO0lBQzFDLHVCQUF1QixFQUFFLGlCQUFpQjtJQUMxQywyQkFBMkIsRUFBRSxxQkFBcUI7SUFDbEQsc0JBQXNCLEVBQUUsZ0JBQWdCO0lBQ3hDLGlCQUFpQixFQUFFLFNBQVM7SUFDNUIsb0JBQW9CLEVBQUUsT0FBTztJQUM3Qix1QkFBdUIsRUFBRSxPQUFPO0lBQ2hDLG9CQUFvQixFQUFFLE9BQU87SUFDN0IsZUFBZSxFQUFFLE9BQU87SUFDeEIsYUFBYSxFQUFFLEtBQUs7SUFDcEIsb0JBQW9CLEVBQUUsUUFBUTtJQUM5QixXQUFXLEVBQUUsTUFBTTtJQUNuQixVQUFVLEVBQUUsT0FBTztJQUNuQix1QkFBdUIsRUFBRSxRQUFRO0lBQ2pDLHdCQUF3QixFQUFFLFFBQVE7SUFDbEMsd0JBQXdCLEVBQUUsUUFBUTtJQUNsQyxpQ0FBaUMsRUFBRSxhQUFhO0lBQ2hELGNBQWMsRUFBRSxNQUFNO0NBQ3ZCIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgeyBGaWxlRGVzY3JpcHRpb24gfSBmcm9tIFwiQGdyb3VwZG9jcy5leGFtcGxlcy5hbmd1bGFyL2NvbW1vbi1jb21wb25lbnRzXCI7XG5cbiAgZXhwb3J0IGVudW0gQWNjZXNzTGV2ZWxzIHtcbiAgICBSZWFkID0gMCxcbiAgICBVcGRhdGUgPSAxLFxuICAgIFJlbW92ZSA9IDIsXG4gICAgQWRkID0gNCxcbiAgICBBZGRPclVwZGF0ZSA9IDUsXG4gICAgRnVsbCA9IDdcbiAgfVxuXG4gIGV4cG9ydCBlbnVtIE1ldGFkYXRhUHJvcGVydHlUeXBlIHtcbiAgICBFbXB0eSA9IDAsXG4gICAgU3RyaW5nID0gMSxcbiAgICBCb29sZWFuID0gMixcbiAgICBEYXRlVGltZSA9IDMsXG4gICAgVGltZVNwYW4gPSA0LFxuICAgIEludGVnZXIgPSA1LFxuICAgIExvbmcgPSA2LFxuICAgIERvdWJsZSA9IDcsXG4gICAgU3RyaW5nQXJyYXkgPSA4LFxuICAgIEJ5dGVBcnJheSA9IDksXG4gICAgRG91YmxlQXJyYXkgPSAxMCxcbiAgICBJbnRlZ2VyQXJyYXkgPSAxMSxcbiAgICBMb25nQXJyYXkgPSAxMixcbiAgICBNZXRhZGF0YSA9IDEzLFxuICAgIE1ldGFkYXRhQXJyYXkgPSAxNCxcbiAgICBHdWlkID0gMTUsXG4gICAgUHJvcGVydHlWYWx1ZUFycmF5ID0gMTZcbiAgfVxuXG4gIGV4cG9ydCBlbnVtIE1ldGFkYXRhVHlwZSB7XG4gICAgVW5kZWZpbmVkID0gMCxcbiAgICBSb290ID0gMSxcbiAgICBYbXAgPSAyLFxuICAgIEV4aWYgPSAzLFxuICAgIElwdGMgPSA0LFxuICAgIER1YmxpbkNvcmUgPSA1LFxuICAgIEltYWdlUmVzb3VyY2VCbG9jayA9IDYsXG4gICAgRmlsZUZvcm1hdCA9IDcsXG4gICAgRGlnaXRhbFNpZ25hdHVyZSA9IDgsXG4gICAgUHJlc2VudGF0aW9uID0gOSxcbiAgICBTcHJlYWRzaGVldCA9IDEwLFxuICAgIFdvcmRQcm9jZXNzaW5nID0gMTEsXG4gICAgRGlhZ3JhbSA9IDEyLFxuICAgIE5vdGUgPSAxMyxcbiAgICBQcm9qZWN0TWFuYWdlbWVudCA9IDE0LFxuICAgIFBkZiA9IDE1LFxuICAgIERvY3VtZW50U3RhdGlzdGljcyA9IDE2LFxuICAgIFBzZCA9IDE3LFxuICAgIEpwZWcyMDAwID0gMTgsXG4gICAgRGljb20gPSAxOSxcbiAgICBCbXAgPSAyMCxcbiAgICBXYXYgPSAyMSxcbiAgICBJRDNWMSA9IDIyLFxuICAgIElEM1YyID0gMjMsXG4gICAgTXBlZ0F1ZGlvID0gMjQsXG4gICAgTHlyaWNzMyA9IDI1LFxuICAgIEFwZVYyID0gMjYsXG4gICAgQXZpID0gMjcsXG4gICAgRmx2ID0gMjgsXG4gICAgQXNmID0gMjksXG4gICAgTW92ID0gMzAsXG4gICAgTWF0cm9za2EgPSAzMSxcbiAgICBaaXAgPSAzMixcbiAgICBWQ2FyZCA9IDMzLFxuICAgIEVwdWIgPSAzNCxcbiAgICBPcGVuVHlwZSA9IDM1LFxuICAgIENhZCA9IDM2LFxuICAgIEVtbCA9IDM3LFxuICAgIE1zZyA9IDM4LFxuICAgIFRvcnJlbnQgPSAzOVxuICB9XG4gIFxuICBleHBvcnQgY2xhc3MgRmlsZVByb3BlcnR5TW9kZWwge1xuICAgIG5hbWU6IHN0cmluZztcbiAgICB2YWx1ZTogYW55O1xuICAgIHR5cGU6IG51bWJlcjtcbiAgICBhZGRlZDogYm9vbGVhbjtcbiAgICBzZWxlY3RlZDogYm9vbGVhbjtcbiAgICBlZGl0aW5nOiBib29sZWFuO1xuICAgIGVkaXRlZDogYm9vbGVhbjtcbiAgfVxuXG4gIGV4cG9ydCBjbGFzcyBLbm93blByb3BlcnR5TW9kZWwge1xuICAgIG5hbWU6IHN0cmluZztcbiAgICB0eXBlOiBudW1iZXI7XG4gICAgYWNjZXNzTGV2ZWw6IG51bWJlcjtcbiAgfVxuXG4gIGV4cG9ydCBjbGFzcyBQYWNrYWdlTW9kZWwge1xuICAgIGlkOiBzdHJpbmc7XG4gICAgbmFtZTogc3RyaW5nO1xuICAgIGluZGV4OiBudW1iZXI7XG4gICAgdHlwZTogbnVtYmVyO1xuICAgIHByb3BlcnRpZXM6IEZpbGVQcm9wZXJ0eU1vZGVsW107XG4gICAga25vd25Qcm9wZXJ0aWVzOiBLbm93blByb3BlcnR5TW9kZWxbXTtcbiAgfVxuXG4gIGV4cG9ydCBjbGFzcyBSZW1vdmVQcm9wZXJ0eU1vZGVsIHtcbiAgICBwYWNrYWdlSWQ6IHN0cmluZztcbiAgICBwcm9wZXJ0eTogRmlsZVByb3BlcnR5TW9kZWxcbiAgfVxuXG4gIGV4cG9ydCBjbGFzcyBDaGFuZ2VkUGFja2FnZU1vZGVsIHtcbiAgICBpZDogc3RyaW5nO1xuICAgIHByb3BlcnRpZXM6IEZpbGVQcm9wZXJ0eU1vZGVsW107XG4gIH1cblxuICBleHBvcnQgY2xhc3MgRmlsZVByZXZpZXcgZXh0ZW5kcyBGaWxlRGVzY3JpcHRpb24ge1xuICAgIHRpbWVMaW1pdEV4Y2VlZGVkOiBib29sZWFuXG4gIH1cblxuICBleHBvcnQgY29uc3QgUGFja2FnZU5hbWVCeU1ldGFkYXRhVHlwZTogeyBbaWQgaW4gTWV0YWRhdGFUeXBlXT8gOiBzdHJpbmc7IH0gPSB7XG4gICAgW01ldGFkYXRhVHlwZS5Xb3JkUHJvY2Vzc2luZ106IFwiRG9jdW1lbnQgUHJvcGVydGllc1wiLFxuICAgIFtNZXRhZGF0YVR5cGUuU3ByZWFkc2hlZXRdOiBcIldvcmtib29rIFByb3BlcnRpZXNcIixcbiAgICBbTWV0YWRhdGFUeXBlLlByZXNlbnRhdGlvbl06IFwiUHJlc2VudGF0aW9uIFByb3BlcnRpZXNcIixcbiAgICBbTWV0YWRhdGFUeXBlLlByb2plY3RNYW5hZ2VtZW50XTogXCJQcm9qZWN0IFByb3BlcnRpZXNcIixcbiAgICBbTWV0YWRhdGFUeXBlLkRpYWdyYW1dOiBcIkRpYWdyYW0gUHJvcGVydGllc1wiLFxuICAgIFtNZXRhZGF0YVR5cGUuTm90ZV06IFwiTm90ZSBQcm9wZXJ0aWVzXCIsXG4gICAgW01ldGFkYXRhVHlwZS5QZGZdOiBcIlBERiBQcm9wZXJ0aWVzXCIsXG4gICAgW01ldGFkYXRhVHlwZS5GaWxlRm9ybWF0XTogXCJGaWxlIEZvcm1hdCBJbmZvXCIsXG4gICAgW01ldGFkYXRhVHlwZS5Eb2N1bWVudFN0YXRpc3RpY3NdOiBcIkRvY3VtZW50IFN0YXRpc3RpY3NcIixcbiAgICBbTWV0YWRhdGFUeXBlLkR1YmxpbkNvcmVdOiBcIkR1YmxpbiBDb3JlIFByb3BlcnRpZXNcIixcbiAgICBbTWV0YWRhdGFUeXBlLkltYWdlUmVzb3VyY2VCbG9ja106IFwiSW1hZ2UgUmVzb3VyY2VzXCIsXG4gICAgW01ldGFkYXRhVHlwZS5NcGVnQXVkaW9dOiBcIk1wZWcgQXVkaW8gUHJvcGVydGllc1wiLFxuICAgIFtNZXRhZGF0YVR5cGUuRGlnaXRhbFNpZ25hdHVyZV06IFwiRGlnaXRhbCBTaWduYXR1cmUgUHJvcGVydGllc1wiLFxuICB9O1xuXG4gIGV4cG9ydCBjb25zdCBQYWNrYWdlTmFtZUJ5T3JpZ2luYWxOYW1lOiB7IFtrZXk6IHN0cmluZ10gOiBzdHJpbmc7IH0gPSB7XG4gICAgXCJOb3RlUGFnZVwiOiBcIlBhZ2VcIixcbiAgICBcIlppcEZpbGVcIjogXCJBcmNoaXZlZCBGaWxlXCIsXG4gICAgXCJUb3JyZW50U2hhcmVkRmlsZVBhY2thZ2VcIjogXCJTaGFyZWQgRmlsZVwiLFxuICAgIFwiTW92QXRvbVwiOiBcIkF0b21cIixcbiAgICBcIkNhbm9uTWFrZXJOb3RlUGFja2FnZVwiOiBcIkNhbm9uIE1ha2Vybm90ZVwiLFxuICAgIFwiTmlrb25NYWtlck5vdGVQYWNrYWdlXCI6IFwiTmlrb24gTWFrZXJub3RlXCIsXG4gICAgXCJQYW5hc29uaWNNYWtlck5vdGVQYWNrYWdlXCI6IFwiUGFuYXNvbmljIE1ha2Vybm90ZVwiLFxuICAgIFwiU29ueU1ha2VyTm90ZVBhY2thZ2VcIjogXCJTb255IE1ha2Vybm90ZVwiLFxuICAgIFwiTWF0cm9za2FTZWdtZW50XCI6IFwiU2VnbWVudFwiLFxuICAgIFwiTWF0cm9za2FBdWRpb1RyYWNrXCI6IFwiVHJhY2tcIixcbiAgICBcIk1hdHJvc2thU3VidGl0bGVUcmFja1wiOiBcIlRyYWNrXCIsXG4gICAgXCJNYXRyb3NrYVZpZGVvVHJhY2tcIjogXCJUcmFja1wiLFxuICAgIFwiTWF0cm9za2FUcmFja1wiOiBcIlRyYWNrXCIsXG4gICAgXCJNYXRyb3NrYVRhZ1wiOiBcIlRhZ1wiLFxuICAgIFwiTWF0cm9za2FFYm1sSGVhZGVyXCI6IFwiSGVhZGVyXCIsXG4gICAgXCJWQ2FyZENhcmRcIjogXCJDYXJkXCIsXG4gICAgXCJBc2ZDb2RlY1wiOiBcIkNvZGVjXCIsXG4gICAgXCJBc2ZCYXNlU3RyZWFtUHJvcGVydHlcIjogXCJTdHJlYW1cIixcbiAgICBcIkFzZkF1ZGlvU3RyZWFtUHJvcGVydHlcIjogXCJTdHJlYW1cIixcbiAgICBcIkFzZlZpZGVvU3RyZWFtUHJvcGVydHlcIjogXCJTdHJlYW1cIixcbiAgICBcIkFzZk1ldGFkYXRhRGVzY3JpcHRvckNvbGxlY3Rpb25cIjogXCJEZXNjcmlwdG9yc1wiLFxuICAgIFwiT3BlblR5cGVGb250XCI6IFwiRm9udFwiLFxuICB9OyJdfQ==