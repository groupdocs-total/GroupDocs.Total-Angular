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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWV0YWRhdGEtbW9kZWxzLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdyb3VwZG9jcy5leGFtcGxlcy5hbmd1bGFyL21ldGFkYXRhLyIsInNvdXJjZXMiOlsibGliL21ldGFkYXRhLW1vZGVscy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7O0lBRUksT0FBUTtJQUNSLFNBQVU7SUFDVixTQUFVO0lBQ1YsTUFBTztJQUNQLGNBQWU7SUFDZixPQUFROzs7Ozs7Ozs7OztJQUlSLFFBQVM7SUFDVCxTQUFVO0lBQ1YsVUFBVztJQUNYLFdBQVk7SUFDWixXQUFZO0lBQ1osVUFBVztJQUNYLE9BQVE7SUFDUixTQUFVO0lBQ1YsY0FBZTtJQUNmLFlBQWE7SUFDYixlQUFnQjtJQUNoQixnQkFBaUI7SUFDakIsYUFBYztJQUNkLFlBQWE7SUFDYixpQkFBa0I7SUFDbEIsUUFBUztJQUNULHNCQUF1Qjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQUl2QixZQUFhO0lBQ2IsT0FBUTtJQUNSLE1BQU87SUFDUCxPQUFRO0lBQ1IsT0FBUTtJQUNSLGFBQWM7SUFDZCxxQkFBc0I7SUFDdEIsYUFBYztJQUNkLG1CQUFvQjtJQUNwQixlQUFnQjtJQUNoQixlQUFnQjtJQUNoQixrQkFBbUI7SUFDbkIsV0FBWTtJQUNaLFFBQVM7SUFDVCxxQkFBc0I7SUFDdEIsT0FBUTtJQUNSLHNCQUF1QjtJQUN2QixPQUFRO0lBQ1IsWUFBYTtJQUNiLFNBQVU7SUFDVixPQUFRO0lBQ1IsT0FBUTtJQUNSLFNBQVU7SUFDVixTQUFVO0lBQ1YsYUFBYztJQUNkLFdBQVk7SUFDWixTQUFVO0lBQ1YsT0FBUTtJQUNSLE9BQVE7SUFDUixPQUFRO0lBQ1IsT0FBUTtJQUNSLFlBQWE7SUFDYixPQUFRO0lBQ1IsU0FBVTtJQUNWLFFBQVM7SUFDVCxZQUFhO0lBQ2IsT0FBUTtJQUNSLE9BQVE7SUFDUixPQUFRO0lBQ1IsV0FBWTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUdkO0lBQUE7SUFRQSxDQUFDO0lBQUQsd0JBQUM7QUFBRCxDQUFDLEFBUkQsSUFRQzs7OztJQVBDLGlDQUFhOztJQUNiLGtDQUFXOztJQUNYLGlDQUFhOztJQUNiLGtDQUFlOztJQUNmLHFDQUFrQjs7SUFDbEIsb0NBQWlCOztJQUNqQixtQ0FBZ0I7O0FBR2xCO0lBQUE7SUFJQSxDQUFDO0lBQUQseUJBQUM7QUFBRCxDQUFDLEFBSkQsSUFJQzs7OztJQUhDLGtDQUFhOztJQUNiLGtDQUFhOztJQUNiLHlDQUFvQjs7QUFHdEI7SUFBQTtJQU9BLENBQUM7SUFBRCxtQkFBQztBQUFELENBQUMsQUFQRCxJQU9DOzs7O0lBTkMsMEJBQVc7O0lBQ1gsNEJBQWE7O0lBQ2IsNkJBQWM7O0lBQ2QsNEJBQWE7O0lBQ2Isa0NBQWdDOztJQUNoQyx1Q0FBc0M7O0FBR3hDO0lBQUE7SUFHQSxDQUFDO0lBQUQsMEJBQUM7QUFBRCxDQUFDLEFBSEQsSUFHQzs7OztJQUZDLHdDQUFrQjs7SUFDbEIsdUNBQTJCOztBQUc3QjtJQUFBO0lBR0EsQ0FBQztJQUFELDBCQUFDO0FBQUQsQ0FBQyxBQUhELElBR0M7Ozs7SUFGQyxpQ0FBVzs7SUFDWCx5Q0FBZ0M7OztBQUdsQyxNQUFNLEtBQU8seUJBQXlCO0lBQ3BDLEdBQUMsWUFBWSxDQUFDLGNBQWMsSUFBRyxxQkFBcUI7SUFDcEQsR0FBQyxZQUFZLENBQUMsV0FBVyxJQUFHLHFCQUFxQjtJQUNqRCxHQUFDLFlBQVksQ0FBQyxZQUFZLElBQUcseUJBQXlCO0lBQ3RELEdBQUMsWUFBWSxDQUFDLGlCQUFpQixJQUFHLG9CQUFvQjtJQUN0RCxHQUFDLFlBQVksQ0FBQyxPQUFPLElBQUcsb0JBQW9CO0lBQzVDLEdBQUMsWUFBWSxDQUFDLElBQUksSUFBRyxpQkFBaUI7SUFDdEMsR0FBQyxZQUFZLENBQUMsR0FBRyxJQUFHLGdCQUFnQjtJQUNwQyxHQUFDLFlBQVksQ0FBQyxVQUFVLElBQUcsa0JBQWtCO0lBQzdDLEdBQUMsWUFBWSxDQUFDLGtCQUFrQixJQUFHLHFCQUFxQjtJQUN4RCxHQUFDLFlBQVksQ0FBQyxVQUFVLElBQUcsd0JBQXdCO0lBQ25ELEdBQUMsWUFBWSxDQUFDLGtCQUFrQixJQUFHLGlCQUFpQjtJQUNwRCxHQUFDLFlBQVksQ0FBQyxTQUFTLElBQUcsdUJBQXVCO0lBQ2pELEdBQUMsWUFBWSxDQUFDLGdCQUFnQixJQUFHLDhCQUE4QjtPQUNoRTs7QUFFRCxNQUFNLEtBQU8seUJBQXlCLEdBQWdDO0lBQ3BFLFVBQVUsRUFBRSxNQUFNO0lBQ2xCLFNBQVMsRUFBRSxlQUFlO0lBQzFCLDBCQUEwQixFQUFFLGFBQWE7SUFDekMsU0FBUyxFQUFFLE1BQU07SUFDakIsdUJBQXVCLEVBQUUsaUJBQWlCO0lBQzFDLHVCQUF1QixFQUFFLGlCQUFpQjtJQUMxQywyQkFBMkIsRUFBRSxxQkFBcUI7SUFDbEQsc0JBQXNCLEVBQUUsZ0JBQWdCO0lBQ3hDLGlCQUFpQixFQUFFLFNBQVM7SUFDNUIsb0JBQW9CLEVBQUUsT0FBTztJQUM3Qix1QkFBdUIsRUFBRSxPQUFPO0lBQ2hDLG9CQUFvQixFQUFFLE9BQU87SUFDN0IsZUFBZSxFQUFFLE9BQU87SUFDeEIsYUFBYSxFQUFFLEtBQUs7SUFDcEIsb0JBQW9CLEVBQUUsUUFBUTtJQUM5QixXQUFXLEVBQUUsTUFBTTtJQUNuQixVQUFVLEVBQUUsT0FBTztJQUNuQix1QkFBdUIsRUFBRSxRQUFRO0lBQ2pDLHdCQUF3QixFQUFFLFFBQVE7SUFDbEMsd0JBQXdCLEVBQUUsUUFBUTtJQUNsQyxpQ0FBaUMsRUFBRSxhQUFhO0lBQ2hELGNBQWMsRUFBRSxNQUFNO0NBQ3ZCIiwic291cmNlc0NvbnRlbnQiOlsiIFxyXG4gIGV4cG9ydCBlbnVtIEFjY2Vzc0xldmVscyB7XHJcbiAgICBSZWFkID0gMCxcclxuICAgIFVwZGF0ZSA9IDEsXHJcbiAgICBSZW1vdmUgPSAyLFxyXG4gICAgQWRkID0gNCxcclxuICAgIEFkZE9yVXBkYXRlID0gNSxcclxuICAgIEZ1bGwgPSA3XHJcbiAgfVxyXG5cclxuICBleHBvcnQgZW51bSBNZXRhZGF0YVByb3BlcnR5VHlwZSB7XHJcbiAgICBFbXB0eSA9IDAsXHJcbiAgICBTdHJpbmcgPSAxLFxyXG4gICAgQm9vbGVhbiA9IDIsXHJcbiAgICBEYXRlVGltZSA9IDMsXHJcbiAgICBUaW1lU3BhbiA9IDQsXHJcbiAgICBJbnRlZ2VyID0gNSxcclxuICAgIExvbmcgPSA2LFxyXG4gICAgRG91YmxlID0gNyxcclxuICAgIFN0cmluZ0FycmF5ID0gOCxcclxuICAgIEJ5dGVBcnJheSA9IDksXHJcbiAgICBEb3VibGVBcnJheSA9IDEwLFxyXG4gICAgSW50ZWdlckFycmF5ID0gMTEsXHJcbiAgICBMb25nQXJyYXkgPSAxMixcclxuICAgIE1ldGFkYXRhID0gMTMsXHJcbiAgICBNZXRhZGF0YUFycmF5ID0gMTQsXHJcbiAgICBHdWlkID0gMTUsXHJcbiAgICBQcm9wZXJ0eVZhbHVlQXJyYXkgPSAxNlxyXG4gIH1cclxuXHJcbiAgZXhwb3J0IGVudW0gTWV0YWRhdGFUeXBlIHtcclxuICAgIFVuZGVmaW5lZCA9IDAsXHJcbiAgICBSb290ID0gMSxcclxuICAgIFhtcCA9IDIsXHJcbiAgICBFeGlmID0gMyxcclxuICAgIElwdGMgPSA0LFxyXG4gICAgRHVibGluQ29yZSA9IDUsXHJcbiAgICBJbWFnZVJlc291cmNlQmxvY2sgPSA2LFxyXG4gICAgRmlsZUZvcm1hdCA9IDcsXHJcbiAgICBEaWdpdGFsU2lnbmF0dXJlID0gOCxcclxuICAgIFByZXNlbnRhdGlvbiA9IDksXHJcbiAgICBTcHJlYWRzaGVldCA9IDEwLFxyXG4gICAgV29yZFByb2Nlc3NpbmcgPSAxMSxcclxuICAgIERpYWdyYW0gPSAxMixcclxuICAgIE5vdGUgPSAxMyxcclxuICAgIFByb2plY3RNYW5hZ2VtZW50ID0gMTQsXHJcbiAgICBQZGYgPSAxNSxcclxuICAgIERvY3VtZW50U3RhdGlzdGljcyA9IDE2LFxyXG4gICAgUHNkID0gMTcsXHJcbiAgICBKcGVnMjAwMCA9IDE4LFxyXG4gICAgRGljb20gPSAxOSxcclxuICAgIEJtcCA9IDIwLFxyXG4gICAgV2F2ID0gMjEsXHJcbiAgICBJRDNWMSA9IDIyLFxyXG4gICAgSUQzVjIgPSAyMyxcclxuICAgIE1wZWdBdWRpbyA9IDI0LFxyXG4gICAgTHlyaWNzMyA9IDI1LFxyXG4gICAgQXBlVjIgPSAyNixcclxuICAgIEF2aSA9IDI3LFxyXG4gICAgRmx2ID0gMjgsXHJcbiAgICBBc2YgPSAyOSxcclxuICAgIE1vdiA9IDMwLFxyXG4gICAgTWF0cm9za2EgPSAzMSxcclxuICAgIFppcCA9IDMyLFxyXG4gICAgVkNhcmQgPSAzMyxcclxuICAgIEVwdWIgPSAzNCxcclxuICAgIE9wZW5UeXBlID0gMzUsXHJcbiAgICBDYWQgPSAzNixcclxuICAgIEVtbCA9IDM3LFxyXG4gICAgTXNnID0gMzgsXHJcbiAgICBUb3JyZW50ID0gMzlcclxuICB9XHJcbiAgXHJcbiAgZXhwb3J0IGNsYXNzIEZpbGVQcm9wZXJ0eU1vZGVsIHtcclxuICAgIG5hbWU6IHN0cmluZztcclxuICAgIHZhbHVlOiBhbnk7XHJcbiAgICB0eXBlOiBudW1iZXI7XHJcbiAgICBhZGRlZDogYm9vbGVhbjtcclxuICAgIHNlbGVjdGVkOiBib29sZWFuO1xyXG4gICAgZWRpdGluZzogYm9vbGVhbjtcclxuICAgIGVkaXRlZDogYm9vbGVhbjtcclxuICB9XHJcblxyXG4gIGV4cG9ydCBjbGFzcyBLbm93blByb3BlcnR5TW9kZWwge1xyXG4gICAgbmFtZTogc3RyaW5nO1xyXG4gICAgdHlwZTogbnVtYmVyO1xyXG4gICAgYWNjZXNzTGV2ZWw6IG51bWJlcjtcclxuICB9XHJcblxyXG4gIGV4cG9ydCBjbGFzcyBQYWNrYWdlTW9kZWwge1xyXG4gICAgaWQ6IHN0cmluZztcclxuICAgIG5hbWU6IHN0cmluZztcclxuICAgIGluZGV4OiBudW1iZXI7XHJcbiAgICB0eXBlOiBudW1iZXI7XHJcbiAgICBwcm9wZXJ0aWVzOiBGaWxlUHJvcGVydHlNb2RlbFtdO1xyXG4gICAga25vd25Qcm9wZXJ0aWVzOiBLbm93blByb3BlcnR5TW9kZWxbXTtcclxuICB9XHJcblxyXG4gIGV4cG9ydCBjbGFzcyBSZW1vdmVQcm9wZXJ0eU1vZGVsIHtcclxuICAgIHBhY2thZ2VJZDogc3RyaW5nO1xyXG4gICAgcHJvcGVydHk6IEZpbGVQcm9wZXJ0eU1vZGVsXHJcbiAgfVxyXG5cclxuICBleHBvcnQgY2xhc3MgQ2hhbmdlZFBhY2thZ2VNb2RlbCB7XHJcbiAgICBpZDogc3RyaW5nO1xyXG4gICAgcHJvcGVydGllczogRmlsZVByb3BlcnR5TW9kZWxbXTtcclxuICB9XHJcblxyXG4gIGV4cG9ydCBjb25zdCBQYWNrYWdlTmFtZUJ5TWV0YWRhdGFUeXBlOiB7IFtpZCBpbiBNZXRhZGF0YVR5cGVdPyA6IHN0cmluZzsgfSA9IHtcclxuICAgIFtNZXRhZGF0YVR5cGUuV29yZFByb2Nlc3NpbmddOiBcIkRvY3VtZW50IFByb3BlcnRpZXNcIixcclxuICAgIFtNZXRhZGF0YVR5cGUuU3ByZWFkc2hlZXRdOiBcIldvcmtib29rIFByb3BlcnRpZXNcIixcclxuICAgIFtNZXRhZGF0YVR5cGUuUHJlc2VudGF0aW9uXTogXCJQcmVzZW50YXRpb24gUHJvcGVydGllc1wiLFxyXG4gICAgW01ldGFkYXRhVHlwZS5Qcm9qZWN0TWFuYWdlbWVudF06IFwiUHJvamVjdCBQcm9wZXJ0aWVzXCIsXHJcbiAgICBbTWV0YWRhdGFUeXBlLkRpYWdyYW1dOiBcIkRpYWdyYW0gUHJvcGVydGllc1wiLFxyXG4gICAgW01ldGFkYXRhVHlwZS5Ob3RlXTogXCJOb3RlIFByb3BlcnRpZXNcIixcclxuICAgIFtNZXRhZGF0YVR5cGUuUGRmXTogXCJQREYgUHJvcGVydGllc1wiLFxyXG4gICAgW01ldGFkYXRhVHlwZS5GaWxlRm9ybWF0XTogXCJGaWxlIEZvcm1hdCBJbmZvXCIsXHJcbiAgICBbTWV0YWRhdGFUeXBlLkRvY3VtZW50U3RhdGlzdGljc106IFwiRG9jdW1lbnQgU3RhdGlzdGljc1wiLFxyXG4gICAgW01ldGFkYXRhVHlwZS5EdWJsaW5Db3JlXTogXCJEdWJsaW4gQ29yZSBQcm9wZXJ0aWVzXCIsXHJcbiAgICBbTWV0YWRhdGFUeXBlLkltYWdlUmVzb3VyY2VCbG9ja106IFwiSW1hZ2UgUmVzb3VyY2VzXCIsXHJcbiAgICBbTWV0YWRhdGFUeXBlLk1wZWdBdWRpb106IFwiTXBlZyBBdWRpbyBQcm9wZXJ0aWVzXCIsXHJcbiAgICBbTWV0YWRhdGFUeXBlLkRpZ2l0YWxTaWduYXR1cmVdOiBcIkRpZ2l0YWwgU2lnbmF0dXJlIFByb3BlcnRpZXNcIixcclxuICB9O1xyXG5cclxuICBleHBvcnQgY29uc3QgUGFja2FnZU5hbWVCeU9yaWdpbmFsTmFtZTogeyBba2V5OiBzdHJpbmddIDogc3RyaW5nOyB9ID0ge1xyXG4gICAgXCJOb3RlUGFnZVwiOiBcIlBhZ2VcIixcclxuICAgIFwiWmlwRmlsZVwiOiBcIkFyY2hpdmVkIEZpbGVcIixcclxuICAgIFwiVG9ycmVudFNoYXJlZEZpbGVQYWNrYWdlXCI6IFwiU2hhcmVkIEZpbGVcIixcclxuICAgIFwiTW92QXRvbVwiOiBcIkF0b21cIixcclxuICAgIFwiQ2Fub25NYWtlck5vdGVQYWNrYWdlXCI6IFwiQ2Fub24gTWFrZXJub3RlXCIsXHJcbiAgICBcIk5pa29uTWFrZXJOb3RlUGFja2FnZVwiOiBcIk5pa29uIE1ha2Vybm90ZVwiLFxyXG4gICAgXCJQYW5hc29uaWNNYWtlck5vdGVQYWNrYWdlXCI6IFwiUGFuYXNvbmljIE1ha2Vybm90ZVwiLFxyXG4gICAgXCJTb255TWFrZXJOb3RlUGFja2FnZVwiOiBcIlNvbnkgTWFrZXJub3RlXCIsXHJcbiAgICBcIk1hdHJvc2thU2VnbWVudFwiOiBcIlNlZ21lbnRcIixcclxuICAgIFwiTWF0cm9za2FBdWRpb1RyYWNrXCI6IFwiVHJhY2tcIixcclxuICAgIFwiTWF0cm9za2FTdWJ0aXRsZVRyYWNrXCI6IFwiVHJhY2tcIixcclxuICAgIFwiTWF0cm9za2FWaWRlb1RyYWNrXCI6IFwiVHJhY2tcIixcclxuICAgIFwiTWF0cm9za2FUcmFja1wiOiBcIlRyYWNrXCIsXHJcbiAgICBcIk1hdHJvc2thVGFnXCI6IFwiVGFnXCIsXHJcbiAgICBcIk1hdHJvc2thRWJtbEhlYWRlclwiOiBcIkhlYWRlclwiLFxyXG4gICAgXCJWQ2FyZENhcmRcIjogXCJDYXJkXCIsXHJcbiAgICBcIkFzZkNvZGVjXCI6IFwiQ29kZWNcIixcclxuICAgIFwiQXNmQmFzZVN0cmVhbVByb3BlcnR5XCI6IFwiU3RyZWFtXCIsXHJcbiAgICBcIkFzZkF1ZGlvU3RyZWFtUHJvcGVydHlcIjogXCJTdHJlYW1cIixcclxuICAgIFwiQXNmVmlkZW9TdHJlYW1Qcm9wZXJ0eVwiOiBcIlN0cmVhbVwiLFxyXG4gICAgXCJBc2ZNZXRhZGF0YURlc2NyaXB0b3JDb2xsZWN0aW9uXCI6IFwiRGVzY3JpcHRvcnNcIixcclxuICAgIFwiT3BlblR5cGVGb250XCI6IFwiRm9udFwiLFxyXG4gIH07Il19