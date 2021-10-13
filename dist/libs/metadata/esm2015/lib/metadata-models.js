/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { FileDescription } from "@groupdocs.examples.angular/common-components";
/** @enum {number} */
const AccessLevels = {
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
const MetadataPropertyType = {
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
const MetadataType = {
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
export class FilePropertyModel {
}
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
export class KnownPropertyModel {
}
if (false) {
    /** @type {?} */
    KnownPropertyModel.prototype.name;
    /** @type {?} */
    KnownPropertyModel.prototype.type;
    /** @type {?} */
    KnownPropertyModel.prototype.accessLevel;
}
export class PackageModel {
}
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
export class RemovePropertyModel {
}
if (false) {
    /** @type {?} */
    RemovePropertyModel.prototype.packageId;
    /** @type {?} */
    RemovePropertyModel.prototype.property;
}
export class ChangedPackageModel {
}
if (false) {
    /** @type {?} */
    ChangedPackageModel.prototype.id;
    /** @type {?} */
    ChangedPackageModel.prototype.properties;
}
export class FilePreview extends FileDescription {
}
if (false) {
    /** @type {?} */
    FilePreview.prototype.timeLimitExceeded;
}
/** @type {?} */
export const PackageNameByMetadataType = {
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
/** @type {?} */
export const PackageNameByOriginalName = {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWV0YWRhdGEtbW9kZWxzLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdyb3VwZG9jcy5leGFtcGxlcy5hbmd1bGFyL21ldGFkYXRhLyIsInNvdXJjZXMiOlsibGliL21ldGFkYXRhLW1vZGVscy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQ0EsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLCtDQUErQyxDQUFDOzs7SUFHNUUsT0FBUTtJQUNSLFNBQVU7SUFDVixTQUFVO0lBQ1YsTUFBTztJQUNQLGNBQWU7SUFDZixPQUFROzs7Ozs7Ozs7OztJQUlSLFFBQVM7SUFDVCxTQUFVO0lBQ1YsVUFBVztJQUNYLFdBQVk7SUFDWixXQUFZO0lBQ1osVUFBVztJQUNYLE9BQVE7SUFDUixTQUFVO0lBQ1YsY0FBZTtJQUNmLFlBQWE7SUFDYixlQUFnQjtJQUNoQixnQkFBaUI7SUFDakIsYUFBYztJQUNkLFlBQWE7SUFDYixpQkFBa0I7SUFDbEIsUUFBUztJQUNULHNCQUF1Qjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQUl2QixZQUFhO0lBQ2IsT0FBUTtJQUNSLE1BQU87SUFDUCxPQUFRO0lBQ1IsT0FBUTtJQUNSLGFBQWM7SUFDZCxxQkFBc0I7SUFDdEIsYUFBYztJQUNkLG1CQUFvQjtJQUNwQixlQUFnQjtJQUNoQixlQUFnQjtJQUNoQixrQkFBbUI7SUFDbkIsV0FBWTtJQUNaLFFBQVM7SUFDVCxxQkFBc0I7SUFDdEIsT0FBUTtJQUNSLHNCQUF1QjtJQUN2QixPQUFRO0lBQ1IsWUFBYTtJQUNiLFNBQVU7SUFDVixPQUFRO0lBQ1IsT0FBUTtJQUNSLFNBQVU7SUFDVixTQUFVO0lBQ1YsYUFBYztJQUNkLFdBQVk7SUFDWixTQUFVO0lBQ1YsT0FBUTtJQUNSLE9BQVE7SUFDUixPQUFRO0lBQ1IsT0FBUTtJQUNSLFlBQWE7SUFDYixPQUFRO0lBQ1IsU0FBVTtJQUNWLFFBQVM7SUFDVCxZQUFhO0lBQ2IsT0FBUTtJQUNSLE9BQVE7SUFDUixPQUFRO0lBQ1IsV0FBWTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUdkLE1BQU0sT0FBTyxpQkFBaUI7Q0FRN0I7OztJQVBDLGlDQUFhOztJQUNiLGtDQUFXOztJQUNYLGlDQUFhOztJQUNiLGtDQUFlOztJQUNmLHFDQUFrQjs7SUFDbEIsb0NBQWlCOztJQUNqQixtQ0FBZ0I7O0FBR2xCLE1BQU0sT0FBTyxrQkFBa0I7Q0FJOUI7OztJQUhDLGtDQUFhOztJQUNiLGtDQUFhOztJQUNiLHlDQUFvQjs7QUFHdEIsTUFBTSxPQUFPLFlBQVk7Q0FPeEI7OztJQU5DLDBCQUFXOztJQUNYLDRCQUFhOztJQUNiLDZCQUFjOztJQUNkLDRCQUFhOztJQUNiLGtDQUFnQzs7SUFDaEMsdUNBQXNDOztBQUd4QyxNQUFNLE9BQU8sbUJBQW1CO0NBRy9COzs7SUFGQyx3Q0FBa0I7O0lBQ2xCLHVDQUEyQjs7QUFHN0IsTUFBTSxPQUFPLG1CQUFtQjtDQUcvQjs7O0lBRkMsaUNBQVc7O0lBQ1gseUNBQWdDOztBQUdsQyxNQUFNLE9BQU8sV0FBWSxTQUFRLGVBQWU7Q0FFL0M7OztJQURDLHdDQUEwQjs7O0FBRzVCLE1BQU0sT0FBTyx5QkFBeUIsR0FBd0M7SUFDNUUsQ0FBQyxZQUFZLENBQUMsY0FBYyxDQUFDLEVBQUUscUJBQXFCO0lBQ3BELENBQUMsWUFBWSxDQUFDLFdBQVcsQ0FBQyxFQUFFLHFCQUFxQjtJQUNqRCxDQUFDLFlBQVksQ0FBQyxZQUFZLENBQUMsRUFBRSx5QkFBeUI7SUFDdEQsQ0FBQyxZQUFZLENBQUMsaUJBQWlCLENBQUMsRUFBRSxvQkFBb0I7SUFDdEQsQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLEVBQUUsb0JBQW9CO0lBQzVDLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxFQUFFLGlCQUFpQjtJQUN0QyxDQUFDLFlBQVksQ0FBQyxHQUFHLENBQUMsRUFBRSxnQkFBZ0I7SUFDcEMsQ0FBQyxZQUFZLENBQUMsVUFBVSxDQUFDLEVBQUUsa0JBQWtCO0lBQzdDLENBQUMsWUFBWSxDQUFDLGtCQUFrQixDQUFDLEVBQUUscUJBQXFCO0lBQ3hELENBQUMsWUFBWSxDQUFDLFVBQVUsQ0FBQyxFQUFFLHdCQUF3QjtJQUNuRCxDQUFDLFlBQVksQ0FBQyxrQkFBa0IsQ0FBQyxFQUFFLGlCQUFpQjtJQUNwRCxDQUFDLFlBQVksQ0FBQyxTQUFTLENBQUMsRUFBRSx1QkFBdUI7SUFDakQsQ0FBQyxZQUFZLENBQUMsZ0JBQWdCLENBQUMsRUFBRSw4QkFBOEI7Q0FDaEU7O0FBRUQsTUFBTSxPQUFPLHlCQUF5QixHQUFnQztJQUNwRSxVQUFVLEVBQUUsTUFBTTtJQUNsQixTQUFTLEVBQUUsZUFBZTtJQUMxQiwwQkFBMEIsRUFBRSxhQUFhO0lBQ3pDLFNBQVMsRUFBRSxNQUFNO0lBQ2pCLHVCQUF1QixFQUFFLGlCQUFpQjtJQUMxQyx1QkFBdUIsRUFBRSxpQkFBaUI7SUFDMUMsMkJBQTJCLEVBQUUscUJBQXFCO0lBQ2xELHNCQUFzQixFQUFFLGdCQUFnQjtJQUN4QyxpQkFBaUIsRUFBRSxTQUFTO0lBQzVCLG9CQUFvQixFQUFFLE9BQU87SUFDN0IsdUJBQXVCLEVBQUUsT0FBTztJQUNoQyxvQkFBb0IsRUFBRSxPQUFPO0lBQzdCLGVBQWUsRUFBRSxPQUFPO0lBQ3hCLGFBQWEsRUFBRSxLQUFLO0lBQ3BCLG9CQUFvQixFQUFFLFFBQVE7SUFDOUIsV0FBVyxFQUFFLE1BQU07SUFDbkIsVUFBVSxFQUFFLE9BQU87SUFDbkIsdUJBQXVCLEVBQUUsUUFBUTtJQUNqQyx3QkFBd0IsRUFBRSxRQUFRO0lBQ2xDLHdCQUF3QixFQUFFLFFBQVE7SUFDbEMsaUNBQWlDLEVBQUUsYUFBYTtJQUNoRCxjQUFjLEVBQUUsTUFBTTtDQUN2QiIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHsgRmlsZURlc2NyaXB0aW9uIH0gZnJvbSBcIkBncm91cGRvY3MuZXhhbXBsZXMuYW5ndWxhci9jb21tb24tY29tcG9uZW50c1wiO1xuXG4gIGV4cG9ydCBlbnVtIEFjY2Vzc0xldmVscyB7XG4gICAgUmVhZCA9IDAsXG4gICAgVXBkYXRlID0gMSxcbiAgICBSZW1vdmUgPSAyLFxuICAgIEFkZCA9IDQsXG4gICAgQWRkT3JVcGRhdGUgPSA1LFxuICAgIEZ1bGwgPSA3XG4gIH1cblxuICBleHBvcnQgZW51bSBNZXRhZGF0YVByb3BlcnR5VHlwZSB7XG4gICAgRW1wdHkgPSAwLFxuICAgIFN0cmluZyA9IDEsXG4gICAgQm9vbGVhbiA9IDIsXG4gICAgRGF0ZVRpbWUgPSAzLFxuICAgIFRpbWVTcGFuID0gNCxcbiAgICBJbnRlZ2VyID0gNSxcbiAgICBMb25nID0gNixcbiAgICBEb3VibGUgPSA3LFxuICAgIFN0cmluZ0FycmF5ID0gOCxcbiAgICBCeXRlQXJyYXkgPSA5LFxuICAgIERvdWJsZUFycmF5ID0gMTAsXG4gICAgSW50ZWdlckFycmF5ID0gMTEsXG4gICAgTG9uZ0FycmF5ID0gMTIsXG4gICAgTWV0YWRhdGEgPSAxMyxcbiAgICBNZXRhZGF0YUFycmF5ID0gMTQsXG4gICAgR3VpZCA9IDE1LFxuICAgIFByb3BlcnR5VmFsdWVBcnJheSA9IDE2XG4gIH1cblxuICBleHBvcnQgZW51bSBNZXRhZGF0YVR5cGUge1xuICAgIFVuZGVmaW5lZCA9IDAsXG4gICAgUm9vdCA9IDEsXG4gICAgWG1wID0gMixcbiAgICBFeGlmID0gMyxcbiAgICBJcHRjID0gNCxcbiAgICBEdWJsaW5Db3JlID0gNSxcbiAgICBJbWFnZVJlc291cmNlQmxvY2sgPSA2LFxuICAgIEZpbGVGb3JtYXQgPSA3LFxuICAgIERpZ2l0YWxTaWduYXR1cmUgPSA4LFxuICAgIFByZXNlbnRhdGlvbiA9IDksXG4gICAgU3ByZWFkc2hlZXQgPSAxMCxcbiAgICBXb3JkUHJvY2Vzc2luZyA9IDExLFxuICAgIERpYWdyYW0gPSAxMixcbiAgICBOb3RlID0gMTMsXG4gICAgUHJvamVjdE1hbmFnZW1lbnQgPSAxNCxcbiAgICBQZGYgPSAxNSxcbiAgICBEb2N1bWVudFN0YXRpc3RpY3MgPSAxNixcbiAgICBQc2QgPSAxNyxcbiAgICBKcGVnMjAwMCA9IDE4LFxuICAgIERpY29tID0gMTksXG4gICAgQm1wID0gMjAsXG4gICAgV2F2ID0gMjEsXG4gICAgSUQzVjEgPSAyMixcbiAgICBJRDNWMiA9IDIzLFxuICAgIE1wZWdBdWRpbyA9IDI0LFxuICAgIEx5cmljczMgPSAyNSxcbiAgICBBcGVWMiA9IDI2LFxuICAgIEF2aSA9IDI3LFxuICAgIEZsdiA9IDI4LFxuICAgIEFzZiA9IDI5LFxuICAgIE1vdiA9IDMwLFxuICAgIE1hdHJvc2thID0gMzEsXG4gICAgWmlwID0gMzIsXG4gICAgVkNhcmQgPSAzMyxcbiAgICBFcHViID0gMzQsXG4gICAgT3BlblR5cGUgPSAzNSxcbiAgICBDYWQgPSAzNixcbiAgICBFbWwgPSAzNyxcbiAgICBNc2cgPSAzOCxcbiAgICBUb3JyZW50ID0gMzlcbiAgfVxuICBcbiAgZXhwb3J0IGNsYXNzIEZpbGVQcm9wZXJ0eU1vZGVsIHtcbiAgICBuYW1lOiBzdHJpbmc7XG4gICAgdmFsdWU6IGFueTtcbiAgICB0eXBlOiBudW1iZXI7XG4gICAgYWRkZWQ6IGJvb2xlYW47XG4gICAgc2VsZWN0ZWQ6IGJvb2xlYW47XG4gICAgZWRpdGluZzogYm9vbGVhbjtcbiAgICBlZGl0ZWQ6IGJvb2xlYW47XG4gIH1cblxuICBleHBvcnQgY2xhc3MgS25vd25Qcm9wZXJ0eU1vZGVsIHtcbiAgICBuYW1lOiBzdHJpbmc7XG4gICAgdHlwZTogbnVtYmVyO1xuICAgIGFjY2Vzc0xldmVsOiBudW1iZXI7XG4gIH1cblxuICBleHBvcnQgY2xhc3MgUGFja2FnZU1vZGVsIHtcbiAgICBpZDogc3RyaW5nO1xuICAgIG5hbWU6IHN0cmluZztcbiAgICBpbmRleDogbnVtYmVyO1xuICAgIHR5cGU6IG51bWJlcjtcbiAgICBwcm9wZXJ0aWVzOiBGaWxlUHJvcGVydHlNb2RlbFtdO1xuICAgIGtub3duUHJvcGVydGllczogS25vd25Qcm9wZXJ0eU1vZGVsW107XG4gIH1cblxuICBleHBvcnQgY2xhc3MgUmVtb3ZlUHJvcGVydHlNb2RlbCB7XG4gICAgcGFja2FnZUlkOiBzdHJpbmc7XG4gICAgcHJvcGVydHk6IEZpbGVQcm9wZXJ0eU1vZGVsXG4gIH1cblxuICBleHBvcnQgY2xhc3MgQ2hhbmdlZFBhY2thZ2VNb2RlbCB7XG4gICAgaWQ6IHN0cmluZztcbiAgICBwcm9wZXJ0aWVzOiBGaWxlUHJvcGVydHlNb2RlbFtdO1xuICB9XG5cbiAgZXhwb3J0IGNsYXNzIEZpbGVQcmV2aWV3IGV4dGVuZHMgRmlsZURlc2NyaXB0aW9uIHtcbiAgICB0aW1lTGltaXRFeGNlZWRlZDogYm9vbGVhblxuICB9XG5cbiAgZXhwb3J0IGNvbnN0IFBhY2thZ2VOYW1lQnlNZXRhZGF0YVR5cGU6IHsgW2lkIGluIE1ldGFkYXRhVHlwZV0/IDogc3RyaW5nOyB9ID0ge1xuICAgIFtNZXRhZGF0YVR5cGUuV29yZFByb2Nlc3NpbmddOiBcIkRvY3VtZW50IFByb3BlcnRpZXNcIixcbiAgICBbTWV0YWRhdGFUeXBlLlNwcmVhZHNoZWV0XTogXCJXb3JrYm9vayBQcm9wZXJ0aWVzXCIsXG4gICAgW01ldGFkYXRhVHlwZS5QcmVzZW50YXRpb25dOiBcIlByZXNlbnRhdGlvbiBQcm9wZXJ0aWVzXCIsXG4gICAgW01ldGFkYXRhVHlwZS5Qcm9qZWN0TWFuYWdlbWVudF06IFwiUHJvamVjdCBQcm9wZXJ0aWVzXCIsXG4gICAgW01ldGFkYXRhVHlwZS5EaWFncmFtXTogXCJEaWFncmFtIFByb3BlcnRpZXNcIixcbiAgICBbTWV0YWRhdGFUeXBlLk5vdGVdOiBcIk5vdGUgUHJvcGVydGllc1wiLFxuICAgIFtNZXRhZGF0YVR5cGUuUGRmXTogXCJQREYgUHJvcGVydGllc1wiLFxuICAgIFtNZXRhZGF0YVR5cGUuRmlsZUZvcm1hdF06IFwiRmlsZSBGb3JtYXQgSW5mb1wiLFxuICAgIFtNZXRhZGF0YVR5cGUuRG9jdW1lbnRTdGF0aXN0aWNzXTogXCJEb2N1bWVudCBTdGF0aXN0aWNzXCIsXG4gICAgW01ldGFkYXRhVHlwZS5EdWJsaW5Db3JlXTogXCJEdWJsaW4gQ29yZSBQcm9wZXJ0aWVzXCIsXG4gICAgW01ldGFkYXRhVHlwZS5JbWFnZVJlc291cmNlQmxvY2tdOiBcIkltYWdlIFJlc291cmNlc1wiLFxuICAgIFtNZXRhZGF0YVR5cGUuTXBlZ0F1ZGlvXTogXCJNcGVnIEF1ZGlvIFByb3BlcnRpZXNcIixcbiAgICBbTWV0YWRhdGFUeXBlLkRpZ2l0YWxTaWduYXR1cmVdOiBcIkRpZ2l0YWwgU2lnbmF0dXJlIFByb3BlcnRpZXNcIixcbiAgfTtcblxuICBleHBvcnQgY29uc3QgUGFja2FnZU5hbWVCeU9yaWdpbmFsTmFtZTogeyBba2V5OiBzdHJpbmddIDogc3RyaW5nOyB9ID0ge1xuICAgIFwiTm90ZVBhZ2VcIjogXCJQYWdlXCIsXG4gICAgXCJaaXBGaWxlXCI6IFwiQXJjaGl2ZWQgRmlsZVwiLFxuICAgIFwiVG9ycmVudFNoYXJlZEZpbGVQYWNrYWdlXCI6IFwiU2hhcmVkIEZpbGVcIixcbiAgICBcIk1vdkF0b21cIjogXCJBdG9tXCIsXG4gICAgXCJDYW5vbk1ha2VyTm90ZVBhY2thZ2VcIjogXCJDYW5vbiBNYWtlcm5vdGVcIixcbiAgICBcIk5pa29uTWFrZXJOb3RlUGFja2FnZVwiOiBcIk5pa29uIE1ha2Vybm90ZVwiLFxuICAgIFwiUGFuYXNvbmljTWFrZXJOb3RlUGFja2FnZVwiOiBcIlBhbmFzb25pYyBNYWtlcm5vdGVcIixcbiAgICBcIlNvbnlNYWtlck5vdGVQYWNrYWdlXCI6IFwiU29ueSBNYWtlcm5vdGVcIixcbiAgICBcIk1hdHJvc2thU2VnbWVudFwiOiBcIlNlZ21lbnRcIixcbiAgICBcIk1hdHJvc2thQXVkaW9UcmFja1wiOiBcIlRyYWNrXCIsXG4gICAgXCJNYXRyb3NrYVN1YnRpdGxlVHJhY2tcIjogXCJUcmFja1wiLFxuICAgIFwiTWF0cm9za2FWaWRlb1RyYWNrXCI6IFwiVHJhY2tcIixcbiAgICBcIk1hdHJvc2thVHJhY2tcIjogXCJUcmFja1wiLFxuICAgIFwiTWF0cm9za2FUYWdcIjogXCJUYWdcIixcbiAgICBcIk1hdHJvc2thRWJtbEhlYWRlclwiOiBcIkhlYWRlclwiLFxuICAgIFwiVkNhcmRDYXJkXCI6IFwiQ2FyZFwiLFxuICAgIFwiQXNmQ29kZWNcIjogXCJDb2RlY1wiLFxuICAgIFwiQXNmQmFzZVN0cmVhbVByb3BlcnR5XCI6IFwiU3RyZWFtXCIsXG4gICAgXCJBc2ZBdWRpb1N0cmVhbVByb3BlcnR5XCI6IFwiU3RyZWFtXCIsXG4gICAgXCJBc2ZWaWRlb1N0cmVhbVByb3BlcnR5XCI6IFwiU3RyZWFtXCIsXG4gICAgXCJBc2ZNZXRhZGF0YURlc2NyaXB0b3JDb2xsZWN0aW9uXCI6IFwiRGVzY3JpcHRvcnNcIixcbiAgICBcIk9wZW5UeXBlRm9udFwiOiBcIkZvbnRcIixcbiAgfTsiXX0=