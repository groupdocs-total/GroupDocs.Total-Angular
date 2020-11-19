var _a;
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWV0YWRhdGEtbW9kZWxzLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdyb3VwZG9jcy5leGFtcGxlcy5hbmd1bGFyL21ldGFkYXRhLyIsInNvdXJjZXMiOlsibGliL21ldGFkYXRhLW1vZGVscy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7O0lBRUksT0FBUTtJQUNSLFNBQVU7SUFDVixTQUFVO0lBQ1YsTUFBTztJQUNQLGNBQWU7SUFDZixPQUFROzs7Ozs7Ozs7OztJQUlSLFFBQVM7SUFDVCxTQUFVO0lBQ1YsVUFBVztJQUNYLFdBQVk7SUFDWixXQUFZO0lBQ1osVUFBVztJQUNYLE9BQVE7SUFDUixTQUFVO0lBQ1YsY0FBZTtJQUNmLFlBQWE7SUFDYixlQUFnQjtJQUNoQixnQkFBaUI7SUFDakIsYUFBYztJQUNkLFlBQWE7SUFDYixpQkFBa0I7SUFDbEIsUUFBUztJQUNULHNCQUF1Qjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQUl2QixZQUFhO0lBQ2IsT0FBUTtJQUNSLE1BQU87SUFDUCxPQUFRO0lBQ1IsT0FBUTtJQUNSLGFBQWM7SUFDZCxxQkFBc0I7SUFDdEIsYUFBYztJQUNkLG1CQUFvQjtJQUNwQixlQUFnQjtJQUNoQixlQUFnQjtJQUNoQixrQkFBbUI7SUFDbkIsV0FBWTtJQUNaLFFBQVM7SUFDVCxxQkFBc0I7SUFDdEIsT0FBUTtJQUNSLHNCQUF1QjtJQUN2QixPQUFRO0lBQ1IsWUFBYTtJQUNiLFNBQVU7SUFDVixPQUFRO0lBQ1IsT0FBUTtJQUNSLFNBQVU7SUFDVixTQUFVO0lBQ1YsYUFBYztJQUNkLFdBQVk7SUFDWixTQUFVO0lBQ1YsT0FBUTtJQUNSLE9BQVE7SUFDUixPQUFRO0lBQ1IsT0FBUTtJQUNSLFlBQWE7SUFDYixPQUFRO0lBQ1IsU0FBVTtJQUNWLFFBQVM7SUFDVCxZQUFhO0lBQ2IsT0FBUTtJQUNSLE9BQVE7SUFDUixPQUFRO0lBQ1IsV0FBWTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUdkO0lBQUE7SUFRQSxDQUFDO0lBQUQsd0JBQUM7QUFBRCxDQUFDLEFBUkQsSUFRQzs7OztJQVBDLGlDQUFhOztJQUNiLGtDQUFXOztJQUNYLGlDQUFhOztJQUNiLGtDQUFlOztJQUNmLHFDQUFrQjs7SUFDbEIsb0NBQWlCOztJQUNqQixtQ0FBZ0I7O0FBR2xCO0lBQUE7SUFJQSxDQUFDO0lBQUQseUJBQUM7QUFBRCxDQUFDLEFBSkQsSUFJQzs7OztJQUhDLGtDQUFhOztJQUNiLGtDQUFhOztJQUNiLHlDQUFvQjs7QUFHdEI7SUFBQTtJQU9BLENBQUM7SUFBRCxtQkFBQztBQUFELENBQUMsQUFQRCxJQU9DOzs7O0lBTkMsMEJBQVc7O0lBQ1gsNEJBQWE7O0lBQ2IsNkJBQWM7O0lBQ2QsNEJBQWE7O0lBQ2Isa0NBQWdDOztJQUNoQyx1Q0FBc0M7O0FBR3hDO0lBQUE7SUFHQSxDQUFDO0lBQUQsMEJBQUM7QUFBRCxDQUFDLEFBSEQsSUFHQzs7OztJQUZDLHdDQUFrQjs7SUFDbEIsdUNBQTJCOztBQUc3QjtJQUFBO0lBR0EsQ0FBQztJQUFELDBCQUFDO0FBQUQsQ0FBQyxBQUhELElBR0M7Ozs7SUFGQyxpQ0FBVzs7SUFDWCx5Q0FBZ0M7OztBQUdsQyxNQUFNLEtBQU8seUJBQXlCO0lBQ3BDLEdBQUMsWUFBWSxDQUFDLGNBQWMsSUFBRyxxQkFBcUI7SUFDcEQsR0FBQyxZQUFZLENBQUMsV0FBVyxJQUFHLHFCQUFxQjtJQUNqRCxHQUFDLFlBQVksQ0FBQyxZQUFZLElBQUcseUJBQXlCO0lBQ3RELEdBQUMsWUFBWSxDQUFDLGlCQUFpQixJQUFHLG9CQUFvQjtJQUN0RCxHQUFDLFlBQVksQ0FBQyxPQUFPLElBQUcsb0JBQW9CO0lBQzVDLEdBQUMsWUFBWSxDQUFDLElBQUksSUFBRyxpQkFBaUI7SUFDdEMsR0FBQyxZQUFZLENBQUMsR0FBRyxJQUFHLGdCQUFnQjtJQUNwQyxHQUFDLFlBQVksQ0FBQyxVQUFVLElBQUcsa0JBQWtCO0lBQzdDLEdBQUMsWUFBWSxDQUFDLGtCQUFrQixJQUFHLHFCQUFxQjtJQUN4RCxHQUFDLFlBQVksQ0FBQyxVQUFVLElBQUcsd0JBQXdCO0lBQ25ELEdBQUMsWUFBWSxDQUFDLGtCQUFrQixJQUFHLGlCQUFpQjtJQUNwRCxHQUFDLFlBQVksQ0FBQyxTQUFTLElBQUcsdUJBQXVCO0lBQ2pELEdBQUMsWUFBWSxDQUFDLGdCQUFnQixJQUFHLDhCQUE4QjtPQUNoRTs7QUFFRCxNQUFNLEtBQU8seUJBQXlCLEdBQWdDO0lBQ3BFLFVBQVUsRUFBRSxNQUFNO0lBQ2xCLFNBQVMsRUFBRSxlQUFlO0lBQzFCLDBCQUEwQixFQUFFLGFBQWE7SUFDekMsU0FBUyxFQUFFLE1BQU07SUFDakIsdUJBQXVCLEVBQUUsaUJBQWlCO0lBQzFDLHVCQUF1QixFQUFFLGlCQUFpQjtJQUMxQywyQkFBMkIsRUFBRSxxQkFBcUI7SUFDbEQsc0JBQXNCLEVBQUUsZ0JBQWdCO0lBQ3hDLGlCQUFpQixFQUFFLFNBQVM7SUFDNUIsb0JBQW9CLEVBQUUsT0FBTztJQUM3Qix1QkFBdUIsRUFBRSxPQUFPO0lBQ2hDLG9CQUFvQixFQUFFLE9BQU87SUFDN0IsZUFBZSxFQUFFLE9BQU87SUFDeEIsYUFBYSxFQUFFLEtBQUs7SUFDcEIsb0JBQW9CLEVBQUUsUUFBUTtJQUM5QixXQUFXLEVBQUUsTUFBTTtJQUNuQixVQUFVLEVBQUUsT0FBTztJQUNuQix1QkFBdUIsRUFBRSxRQUFRO0lBQ2pDLHdCQUF3QixFQUFFLFFBQVE7SUFDbEMsd0JBQXdCLEVBQUUsUUFBUTtJQUNsQyxpQ0FBaUMsRUFBRSxhQUFhO0lBQ2hELGNBQWMsRUFBRSxNQUFNO0NBQ3ZCIiwic291cmNlc0NvbnRlbnQiOlsiIFxuICBleHBvcnQgZW51bSBBY2Nlc3NMZXZlbHMge1xuICAgIFJlYWQgPSAwLFxuICAgIFVwZGF0ZSA9IDEsXG4gICAgUmVtb3ZlID0gMixcbiAgICBBZGQgPSA0LFxuICAgIEFkZE9yVXBkYXRlID0gNSxcbiAgICBGdWxsID0gN1xuICB9XG5cbiAgZXhwb3J0IGVudW0gTWV0YWRhdGFQcm9wZXJ0eVR5cGUge1xuICAgIEVtcHR5ID0gMCxcbiAgICBTdHJpbmcgPSAxLFxuICAgIEJvb2xlYW4gPSAyLFxuICAgIERhdGVUaW1lID0gMyxcbiAgICBUaW1lU3BhbiA9IDQsXG4gICAgSW50ZWdlciA9IDUsXG4gICAgTG9uZyA9IDYsXG4gICAgRG91YmxlID0gNyxcbiAgICBTdHJpbmdBcnJheSA9IDgsXG4gICAgQnl0ZUFycmF5ID0gOSxcbiAgICBEb3VibGVBcnJheSA9IDEwLFxuICAgIEludGVnZXJBcnJheSA9IDExLFxuICAgIExvbmdBcnJheSA9IDEyLFxuICAgIE1ldGFkYXRhID0gMTMsXG4gICAgTWV0YWRhdGFBcnJheSA9IDE0LFxuICAgIEd1aWQgPSAxNSxcbiAgICBQcm9wZXJ0eVZhbHVlQXJyYXkgPSAxNlxuICB9XG5cbiAgZXhwb3J0IGVudW0gTWV0YWRhdGFUeXBlIHtcbiAgICBVbmRlZmluZWQgPSAwLFxuICAgIFJvb3QgPSAxLFxuICAgIFhtcCA9IDIsXG4gICAgRXhpZiA9IDMsXG4gICAgSXB0YyA9IDQsXG4gICAgRHVibGluQ29yZSA9IDUsXG4gICAgSW1hZ2VSZXNvdXJjZUJsb2NrID0gNixcbiAgICBGaWxlRm9ybWF0ID0gNyxcbiAgICBEaWdpdGFsU2lnbmF0dXJlID0gOCxcbiAgICBQcmVzZW50YXRpb24gPSA5LFxuICAgIFNwcmVhZHNoZWV0ID0gMTAsXG4gICAgV29yZFByb2Nlc3NpbmcgPSAxMSxcbiAgICBEaWFncmFtID0gMTIsXG4gICAgTm90ZSA9IDEzLFxuICAgIFByb2plY3RNYW5hZ2VtZW50ID0gMTQsXG4gICAgUGRmID0gMTUsXG4gICAgRG9jdW1lbnRTdGF0aXN0aWNzID0gMTYsXG4gICAgUHNkID0gMTcsXG4gICAgSnBlZzIwMDAgPSAxOCxcbiAgICBEaWNvbSA9IDE5LFxuICAgIEJtcCA9IDIwLFxuICAgIFdhdiA9IDIxLFxuICAgIElEM1YxID0gMjIsXG4gICAgSUQzVjIgPSAyMyxcbiAgICBNcGVnQXVkaW8gPSAyNCxcbiAgICBMeXJpY3MzID0gMjUsXG4gICAgQXBlVjIgPSAyNixcbiAgICBBdmkgPSAyNyxcbiAgICBGbHYgPSAyOCxcbiAgICBBc2YgPSAyOSxcbiAgICBNb3YgPSAzMCxcbiAgICBNYXRyb3NrYSA9IDMxLFxuICAgIFppcCA9IDMyLFxuICAgIFZDYXJkID0gMzMsXG4gICAgRXB1YiA9IDM0LFxuICAgIE9wZW5UeXBlID0gMzUsXG4gICAgQ2FkID0gMzYsXG4gICAgRW1sID0gMzcsXG4gICAgTXNnID0gMzgsXG4gICAgVG9ycmVudCA9IDM5XG4gIH1cbiAgXG4gIGV4cG9ydCBjbGFzcyBGaWxlUHJvcGVydHlNb2RlbCB7XG4gICAgbmFtZTogc3RyaW5nO1xuICAgIHZhbHVlOiBhbnk7XG4gICAgdHlwZTogbnVtYmVyO1xuICAgIGFkZGVkOiBib29sZWFuO1xuICAgIHNlbGVjdGVkOiBib29sZWFuO1xuICAgIGVkaXRpbmc6IGJvb2xlYW47XG4gICAgZWRpdGVkOiBib29sZWFuO1xuICB9XG5cbiAgZXhwb3J0IGNsYXNzIEtub3duUHJvcGVydHlNb2RlbCB7XG4gICAgbmFtZTogc3RyaW5nO1xuICAgIHR5cGU6IG51bWJlcjtcbiAgICBhY2Nlc3NMZXZlbDogbnVtYmVyO1xuICB9XG5cbiAgZXhwb3J0IGNsYXNzIFBhY2thZ2VNb2RlbCB7XG4gICAgaWQ6IHN0cmluZztcbiAgICBuYW1lOiBzdHJpbmc7XG4gICAgaW5kZXg6IG51bWJlcjtcbiAgICB0eXBlOiBudW1iZXI7XG4gICAgcHJvcGVydGllczogRmlsZVByb3BlcnR5TW9kZWxbXTtcbiAgICBrbm93blByb3BlcnRpZXM6IEtub3duUHJvcGVydHlNb2RlbFtdO1xuICB9XG5cbiAgZXhwb3J0IGNsYXNzIFJlbW92ZVByb3BlcnR5TW9kZWwge1xuICAgIHBhY2thZ2VJZDogc3RyaW5nO1xuICAgIHByb3BlcnR5OiBGaWxlUHJvcGVydHlNb2RlbFxuICB9XG5cbiAgZXhwb3J0IGNsYXNzIENoYW5nZWRQYWNrYWdlTW9kZWwge1xuICAgIGlkOiBzdHJpbmc7XG4gICAgcHJvcGVydGllczogRmlsZVByb3BlcnR5TW9kZWxbXTtcbiAgfVxuXG4gIGV4cG9ydCBjb25zdCBQYWNrYWdlTmFtZUJ5TWV0YWRhdGFUeXBlOiB7IFtpZCBpbiBNZXRhZGF0YVR5cGVdPyA6IHN0cmluZzsgfSA9IHtcbiAgICBbTWV0YWRhdGFUeXBlLldvcmRQcm9jZXNzaW5nXTogXCJEb2N1bWVudCBQcm9wZXJ0aWVzXCIsXG4gICAgW01ldGFkYXRhVHlwZS5TcHJlYWRzaGVldF06IFwiV29ya2Jvb2sgUHJvcGVydGllc1wiLFxuICAgIFtNZXRhZGF0YVR5cGUuUHJlc2VudGF0aW9uXTogXCJQcmVzZW50YXRpb24gUHJvcGVydGllc1wiLFxuICAgIFtNZXRhZGF0YVR5cGUuUHJvamVjdE1hbmFnZW1lbnRdOiBcIlByb2plY3QgUHJvcGVydGllc1wiLFxuICAgIFtNZXRhZGF0YVR5cGUuRGlhZ3JhbV06IFwiRGlhZ3JhbSBQcm9wZXJ0aWVzXCIsXG4gICAgW01ldGFkYXRhVHlwZS5Ob3RlXTogXCJOb3RlIFByb3BlcnRpZXNcIixcbiAgICBbTWV0YWRhdGFUeXBlLlBkZl06IFwiUERGIFByb3BlcnRpZXNcIixcbiAgICBbTWV0YWRhdGFUeXBlLkZpbGVGb3JtYXRdOiBcIkZpbGUgRm9ybWF0IEluZm9cIixcbiAgICBbTWV0YWRhdGFUeXBlLkRvY3VtZW50U3RhdGlzdGljc106IFwiRG9jdW1lbnQgU3RhdGlzdGljc1wiLFxuICAgIFtNZXRhZGF0YVR5cGUuRHVibGluQ29yZV06IFwiRHVibGluIENvcmUgUHJvcGVydGllc1wiLFxuICAgIFtNZXRhZGF0YVR5cGUuSW1hZ2VSZXNvdXJjZUJsb2NrXTogXCJJbWFnZSBSZXNvdXJjZXNcIixcbiAgICBbTWV0YWRhdGFUeXBlLk1wZWdBdWRpb106IFwiTXBlZyBBdWRpbyBQcm9wZXJ0aWVzXCIsXG4gICAgW01ldGFkYXRhVHlwZS5EaWdpdGFsU2lnbmF0dXJlXTogXCJEaWdpdGFsIFNpZ25hdHVyZSBQcm9wZXJ0aWVzXCIsXG4gIH07XG5cbiAgZXhwb3J0IGNvbnN0IFBhY2thZ2VOYW1lQnlPcmlnaW5hbE5hbWU6IHsgW2tleTogc3RyaW5nXSA6IHN0cmluZzsgfSA9IHtcbiAgICBcIk5vdGVQYWdlXCI6IFwiUGFnZVwiLFxuICAgIFwiWmlwRmlsZVwiOiBcIkFyY2hpdmVkIEZpbGVcIixcbiAgICBcIlRvcnJlbnRTaGFyZWRGaWxlUGFja2FnZVwiOiBcIlNoYXJlZCBGaWxlXCIsXG4gICAgXCJNb3ZBdG9tXCI6IFwiQXRvbVwiLFxuICAgIFwiQ2Fub25NYWtlck5vdGVQYWNrYWdlXCI6IFwiQ2Fub24gTWFrZXJub3RlXCIsXG4gICAgXCJOaWtvbk1ha2VyTm90ZVBhY2thZ2VcIjogXCJOaWtvbiBNYWtlcm5vdGVcIixcbiAgICBcIlBhbmFzb25pY01ha2VyTm90ZVBhY2thZ2VcIjogXCJQYW5hc29uaWMgTWFrZXJub3RlXCIsXG4gICAgXCJTb255TWFrZXJOb3RlUGFja2FnZVwiOiBcIlNvbnkgTWFrZXJub3RlXCIsXG4gICAgXCJNYXRyb3NrYVNlZ21lbnRcIjogXCJTZWdtZW50XCIsXG4gICAgXCJNYXRyb3NrYUF1ZGlvVHJhY2tcIjogXCJUcmFja1wiLFxuICAgIFwiTWF0cm9za2FTdWJ0aXRsZVRyYWNrXCI6IFwiVHJhY2tcIixcbiAgICBcIk1hdHJvc2thVmlkZW9UcmFja1wiOiBcIlRyYWNrXCIsXG4gICAgXCJNYXRyb3NrYVRyYWNrXCI6IFwiVHJhY2tcIixcbiAgICBcIk1hdHJvc2thVGFnXCI6IFwiVGFnXCIsXG4gICAgXCJNYXRyb3NrYUVibWxIZWFkZXJcIjogXCJIZWFkZXJcIixcbiAgICBcIlZDYXJkQ2FyZFwiOiBcIkNhcmRcIixcbiAgICBcIkFzZkNvZGVjXCI6IFwiQ29kZWNcIixcbiAgICBcIkFzZkJhc2VTdHJlYW1Qcm9wZXJ0eVwiOiBcIlN0cmVhbVwiLFxuICAgIFwiQXNmQXVkaW9TdHJlYW1Qcm9wZXJ0eVwiOiBcIlN0cmVhbVwiLFxuICAgIFwiQXNmVmlkZW9TdHJlYW1Qcm9wZXJ0eVwiOiBcIlN0cmVhbVwiLFxuICAgIFwiQXNmTWV0YWRhdGFEZXNjcmlwdG9yQ29sbGVjdGlvblwiOiBcIkRlc2NyaXB0b3JzXCIsXG4gICAgXCJPcGVuVHlwZUZvbnRcIjogXCJGb250XCIsXG4gIH07Il19