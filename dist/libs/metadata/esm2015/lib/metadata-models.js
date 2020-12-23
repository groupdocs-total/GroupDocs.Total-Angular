/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWV0YWRhdGEtbW9kZWxzLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdyb3VwZG9jcy5leGFtcGxlcy5hbmd1bGFyL21ldGFkYXRhLyIsInNvdXJjZXMiOlsibGliL21ldGFkYXRhLW1vZGVscy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7SUFFSSxPQUFRO0lBQ1IsU0FBVTtJQUNWLFNBQVU7SUFDVixNQUFPO0lBQ1AsY0FBZTtJQUNmLE9BQVE7Ozs7Ozs7Ozs7O0lBSVIsUUFBUztJQUNULFNBQVU7SUFDVixVQUFXO0lBQ1gsV0FBWTtJQUNaLFdBQVk7SUFDWixVQUFXO0lBQ1gsT0FBUTtJQUNSLFNBQVU7SUFDVixjQUFlO0lBQ2YsWUFBYTtJQUNiLGVBQWdCO0lBQ2hCLGdCQUFpQjtJQUNqQixhQUFjO0lBQ2QsWUFBYTtJQUNiLGlCQUFrQjtJQUNsQixRQUFTO0lBQ1Qsc0JBQXVCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBSXZCLFlBQWE7SUFDYixPQUFRO0lBQ1IsTUFBTztJQUNQLE9BQVE7SUFDUixPQUFRO0lBQ1IsYUFBYztJQUNkLHFCQUFzQjtJQUN0QixhQUFjO0lBQ2QsbUJBQW9CO0lBQ3BCLGVBQWdCO0lBQ2hCLGVBQWdCO0lBQ2hCLGtCQUFtQjtJQUNuQixXQUFZO0lBQ1osUUFBUztJQUNULHFCQUFzQjtJQUN0QixPQUFRO0lBQ1Isc0JBQXVCO0lBQ3ZCLE9BQVE7SUFDUixZQUFhO0lBQ2IsU0FBVTtJQUNWLE9BQVE7SUFDUixPQUFRO0lBQ1IsU0FBVTtJQUNWLFNBQVU7SUFDVixhQUFjO0lBQ2QsV0FBWTtJQUNaLFNBQVU7SUFDVixPQUFRO0lBQ1IsT0FBUTtJQUNSLE9BQVE7SUFDUixPQUFRO0lBQ1IsWUFBYTtJQUNiLE9BQVE7SUFDUixTQUFVO0lBQ1YsUUFBUztJQUNULFlBQWE7SUFDYixPQUFRO0lBQ1IsT0FBUTtJQUNSLE9BQVE7SUFDUixXQUFZOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBR2QsTUFBTSxPQUFPLGlCQUFpQjtDQVE3Qjs7O0lBUEMsaUNBQWE7O0lBQ2Isa0NBQVc7O0lBQ1gsaUNBQWE7O0lBQ2Isa0NBQWU7O0lBQ2YscUNBQWtCOztJQUNsQixvQ0FBaUI7O0lBQ2pCLG1DQUFnQjs7QUFHbEIsTUFBTSxPQUFPLGtCQUFrQjtDQUk5Qjs7O0lBSEMsa0NBQWE7O0lBQ2Isa0NBQWE7O0lBQ2IseUNBQW9COztBQUd0QixNQUFNLE9BQU8sWUFBWTtDQU94Qjs7O0lBTkMsMEJBQVc7O0lBQ1gsNEJBQWE7O0lBQ2IsNkJBQWM7O0lBQ2QsNEJBQWE7O0lBQ2Isa0NBQWdDOztJQUNoQyx1Q0FBc0M7O0FBR3hDLE1BQU0sT0FBTyxtQkFBbUI7Q0FHL0I7OztJQUZDLHdDQUFrQjs7SUFDbEIsdUNBQTJCOztBQUc3QixNQUFNLE9BQU8sbUJBQW1CO0NBRy9COzs7SUFGQyxpQ0FBVzs7SUFDWCx5Q0FBZ0M7OztBQUdsQyxNQUFNLE9BQU8seUJBQXlCLEdBQXdDO0lBQzVFLENBQUMsWUFBWSxDQUFDLGNBQWMsQ0FBQyxFQUFFLHFCQUFxQjtJQUNwRCxDQUFDLFlBQVksQ0FBQyxXQUFXLENBQUMsRUFBRSxxQkFBcUI7SUFDakQsQ0FBQyxZQUFZLENBQUMsWUFBWSxDQUFDLEVBQUUseUJBQXlCO0lBQ3RELENBQUMsWUFBWSxDQUFDLGlCQUFpQixDQUFDLEVBQUUsb0JBQW9CO0lBQ3RELENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxFQUFFLG9CQUFvQjtJQUM1QyxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsRUFBRSxpQkFBaUI7SUFDdEMsQ0FBQyxZQUFZLENBQUMsR0FBRyxDQUFDLEVBQUUsZ0JBQWdCO0lBQ3BDLENBQUMsWUFBWSxDQUFDLFVBQVUsQ0FBQyxFQUFFLGtCQUFrQjtJQUM3QyxDQUFDLFlBQVksQ0FBQyxrQkFBa0IsQ0FBQyxFQUFFLHFCQUFxQjtJQUN4RCxDQUFDLFlBQVksQ0FBQyxVQUFVLENBQUMsRUFBRSx3QkFBd0I7SUFDbkQsQ0FBQyxZQUFZLENBQUMsa0JBQWtCLENBQUMsRUFBRSxpQkFBaUI7SUFDcEQsQ0FBQyxZQUFZLENBQUMsU0FBUyxDQUFDLEVBQUUsdUJBQXVCO0lBQ2pELENBQUMsWUFBWSxDQUFDLGdCQUFnQixDQUFDLEVBQUUsOEJBQThCO0NBQ2hFOztBQUVELE1BQU0sT0FBTyx5QkFBeUIsR0FBZ0M7SUFDcEUsVUFBVSxFQUFFLE1BQU07SUFDbEIsU0FBUyxFQUFFLGVBQWU7SUFDMUIsMEJBQTBCLEVBQUUsYUFBYTtJQUN6QyxTQUFTLEVBQUUsTUFBTTtJQUNqQix1QkFBdUIsRUFBRSxpQkFBaUI7SUFDMUMsdUJBQXVCLEVBQUUsaUJBQWlCO0lBQzFDLDJCQUEyQixFQUFFLHFCQUFxQjtJQUNsRCxzQkFBc0IsRUFBRSxnQkFBZ0I7SUFDeEMsaUJBQWlCLEVBQUUsU0FBUztJQUM1QixvQkFBb0IsRUFBRSxPQUFPO0lBQzdCLHVCQUF1QixFQUFFLE9BQU87SUFDaEMsb0JBQW9CLEVBQUUsT0FBTztJQUM3QixlQUFlLEVBQUUsT0FBTztJQUN4QixhQUFhLEVBQUUsS0FBSztJQUNwQixvQkFBb0IsRUFBRSxRQUFRO0lBQzlCLFdBQVcsRUFBRSxNQUFNO0lBQ25CLFVBQVUsRUFBRSxPQUFPO0lBQ25CLHVCQUF1QixFQUFFLFFBQVE7SUFDakMsd0JBQXdCLEVBQUUsUUFBUTtJQUNsQyx3QkFBd0IsRUFBRSxRQUFRO0lBQ2xDLGlDQUFpQyxFQUFFLGFBQWE7SUFDaEQsY0FBYyxFQUFFLE1BQU07Q0FDdkIiLCJzb3VyY2VzQ29udGVudCI6WyIgXG4gIGV4cG9ydCBlbnVtIEFjY2Vzc0xldmVscyB7XG4gICAgUmVhZCA9IDAsXG4gICAgVXBkYXRlID0gMSxcbiAgICBSZW1vdmUgPSAyLFxuICAgIEFkZCA9IDQsXG4gICAgQWRkT3JVcGRhdGUgPSA1LFxuICAgIEZ1bGwgPSA3XG4gIH1cblxuICBleHBvcnQgZW51bSBNZXRhZGF0YVByb3BlcnR5VHlwZSB7XG4gICAgRW1wdHkgPSAwLFxuICAgIFN0cmluZyA9IDEsXG4gICAgQm9vbGVhbiA9IDIsXG4gICAgRGF0ZVRpbWUgPSAzLFxuICAgIFRpbWVTcGFuID0gNCxcbiAgICBJbnRlZ2VyID0gNSxcbiAgICBMb25nID0gNixcbiAgICBEb3VibGUgPSA3LFxuICAgIFN0cmluZ0FycmF5ID0gOCxcbiAgICBCeXRlQXJyYXkgPSA5LFxuICAgIERvdWJsZUFycmF5ID0gMTAsXG4gICAgSW50ZWdlckFycmF5ID0gMTEsXG4gICAgTG9uZ0FycmF5ID0gMTIsXG4gICAgTWV0YWRhdGEgPSAxMyxcbiAgICBNZXRhZGF0YUFycmF5ID0gMTQsXG4gICAgR3VpZCA9IDE1LFxuICAgIFByb3BlcnR5VmFsdWVBcnJheSA9IDE2XG4gIH1cblxuICBleHBvcnQgZW51bSBNZXRhZGF0YVR5cGUge1xuICAgIFVuZGVmaW5lZCA9IDAsXG4gICAgUm9vdCA9IDEsXG4gICAgWG1wID0gMixcbiAgICBFeGlmID0gMyxcbiAgICBJcHRjID0gNCxcbiAgICBEdWJsaW5Db3JlID0gNSxcbiAgICBJbWFnZVJlc291cmNlQmxvY2sgPSA2LFxuICAgIEZpbGVGb3JtYXQgPSA3LFxuICAgIERpZ2l0YWxTaWduYXR1cmUgPSA4LFxuICAgIFByZXNlbnRhdGlvbiA9IDksXG4gICAgU3ByZWFkc2hlZXQgPSAxMCxcbiAgICBXb3JkUHJvY2Vzc2luZyA9IDExLFxuICAgIERpYWdyYW0gPSAxMixcbiAgICBOb3RlID0gMTMsXG4gICAgUHJvamVjdE1hbmFnZW1lbnQgPSAxNCxcbiAgICBQZGYgPSAxNSxcbiAgICBEb2N1bWVudFN0YXRpc3RpY3MgPSAxNixcbiAgICBQc2QgPSAxNyxcbiAgICBKcGVnMjAwMCA9IDE4LFxuICAgIERpY29tID0gMTksXG4gICAgQm1wID0gMjAsXG4gICAgV2F2ID0gMjEsXG4gICAgSUQzVjEgPSAyMixcbiAgICBJRDNWMiA9IDIzLFxuICAgIE1wZWdBdWRpbyA9IDI0LFxuICAgIEx5cmljczMgPSAyNSxcbiAgICBBcGVWMiA9IDI2LFxuICAgIEF2aSA9IDI3LFxuICAgIEZsdiA9IDI4LFxuICAgIEFzZiA9IDI5LFxuICAgIE1vdiA9IDMwLFxuICAgIE1hdHJvc2thID0gMzEsXG4gICAgWmlwID0gMzIsXG4gICAgVkNhcmQgPSAzMyxcbiAgICBFcHViID0gMzQsXG4gICAgT3BlblR5cGUgPSAzNSxcbiAgICBDYWQgPSAzNixcbiAgICBFbWwgPSAzNyxcbiAgICBNc2cgPSAzOCxcbiAgICBUb3JyZW50ID0gMzlcbiAgfVxuICBcbiAgZXhwb3J0IGNsYXNzIEZpbGVQcm9wZXJ0eU1vZGVsIHtcbiAgICBuYW1lOiBzdHJpbmc7XG4gICAgdmFsdWU6IGFueTtcbiAgICB0eXBlOiBudW1iZXI7XG4gICAgYWRkZWQ6IGJvb2xlYW47XG4gICAgc2VsZWN0ZWQ6IGJvb2xlYW47XG4gICAgZWRpdGluZzogYm9vbGVhbjtcbiAgICBlZGl0ZWQ6IGJvb2xlYW47XG4gIH1cblxuICBleHBvcnQgY2xhc3MgS25vd25Qcm9wZXJ0eU1vZGVsIHtcbiAgICBuYW1lOiBzdHJpbmc7XG4gICAgdHlwZTogbnVtYmVyO1xuICAgIGFjY2Vzc0xldmVsOiBudW1iZXI7XG4gIH1cblxuICBleHBvcnQgY2xhc3MgUGFja2FnZU1vZGVsIHtcbiAgICBpZDogc3RyaW5nO1xuICAgIG5hbWU6IHN0cmluZztcbiAgICBpbmRleDogbnVtYmVyO1xuICAgIHR5cGU6IG51bWJlcjtcbiAgICBwcm9wZXJ0aWVzOiBGaWxlUHJvcGVydHlNb2RlbFtdO1xuICAgIGtub3duUHJvcGVydGllczogS25vd25Qcm9wZXJ0eU1vZGVsW107XG4gIH1cblxuICBleHBvcnQgY2xhc3MgUmVtb3ZlUHJvcGVydHlNb2RlbCB7XG4gICAgcGFja2FnZUlkOiBzdHJpbmc7XG4gICAgcHJvcGVydHk6IEZpbGVQcm9wZXJ0eU1vZGVsXG4gIH1cblxuICBleHBvcnQgY2xhc3MgQ2hhbmdlZFBhY2thZ2VNb2RlbCB7XG4gICAgaWQ6IHN0cmluZztcbiAgICBwcm9wZXJ0aWVzOiBGaWxlUHJvcGVydHlNb2RlbFtdO1xuICB9XG5cbiAgZXhwb3J0IGNvbnN0IFBhY2thZ2VOYW1lQnlNZXRhZGF0YVR5cGU6IHsgW2lkIGluIE1ldGFkYXRhVHlwZV0/IDogc3RyaW5nOyB9ID0ge1xuICAgIFtNZXRhZGF0YVR5cGUuV29yZFByb2Nlc3NpbmddOiBcIkRvY3VtZW50IFByb3BlcnRpZXNcIixcbiAgICBbTWV0YWRhdGFUeXBlLlNwcmVhZHNoZWV0XTogXCJXb3JrYm9vayBQcm9wZXJ0aWVzXCIsXG4gICAgW01ldGFkYXRhVHlwZS5QcmVzZW50YXRpb25dOiBcIlByZXNlbnRhdGlvbiBQcm9wZXJ0aWVzXCIsXG4gICAgW01ldGFkYXRhVHlwZS5Qcm9qZWN0TWFuYWdlbWVudF06IFwiUHJvamVjdCBQcm9wZXJ0aWVzXCIsXG4gICAgW01ldGFkYXRhVHlwZS5EaWFncmFtXTogXCJEaWFncmFtIFByb3BlcnRpZXNcIixcbiAgICBbTWV0YWRhdGFUeXBlLk5vdGVdOiBcIk5vdGUgUHJvcGVydGllc1wiLFxuICAgIFtNZXRhZGF0YVR5cGUuUGRmXTogXCJQREYgUHJvcGVydGllc1wiLFxuICAgIFtNZXRhZGF0YVR5cGUuRmlsZUZvcm1hdF06IFwiRmlsZSBGb3JtYXQgSW5mb1wiLFxuICAgIFtNZXRhZGF0YVR5cGUuRG9jdW1lbnRTdGF0aXN0aWNzXTogXCJEb2N1bWVudCBTdGF0aXN0aWNzXCIsXG4gICAgW01ldGFkYXRhVHlwZS5EdWJsaW5Db3JlXTogXCJEdWJsaW4gQ29yZSBQcm9wZXJ0aWVzXCIsXG4gICAgW01ldGFkYXRhVHlwZS5JbWFnZVJlc291cmNlQmxvY2tdOiBcIkltYWdlIFJlc291cmNlc1wiLFxuICAgIFtNZXRhZGF0YVR5cGUuTXBlZ0F1ZGlvXTogXCJNcGVnIEF1ZGlvIFByb3BlcnRpZXNcIixcbiAgICBbTWV0YWRhdGFUeXBlLkRpZ2l0YWxTaWduYXR1cmVdOiBcIkRpZ2l0YWwgU2lnbmF0dXJlIFByb3BlcnRpZXNcIixcbiAgfTtcblxuICBleHBvcnQgY29uc3QgUGFja2FnZU5hbWVCeU9yaWdpbmFsTmFtZTogeyBba2V5OiBzdHJpbmddIDogc3RyaW5nOyB9ID0ge1xuICAgIFwiTm90ZVBhZ2VcIjogXCJQYWdlXCIsXG4gICAgXCJaaXBGaWxlXCI6IFwiQXJjaGl2ZWQgRmlsZVwiLFxuICAgIFwiVG9ycmVudFNoYXJlZEZpbGVQYWNrYWdlXCI6IFwiU2hhcmVkIEZpbGVcIixcbiAgICBcIk1vdkF0b21cIjogXCJBdG9tXCIsXG4gICAgXCJDYW5vbk1ha2VyTm90ZVBhY2thZ2VcIjogXCJDYW5vbiBNYWtlcm5vdGVcIixcbiAgICBcIk5pa29uTWFrZXJOb3RlUGFja2FnZVwiOiBcIk5pa29uIE1ha2Vybm90ZVwiLFxuICAgIFwiUGFuYXNvbmljTWFrZXJOb3RlUGFja2FnZVwiOiBcIlBhbmFzb25pYyBNYWtlcm5vdGVcIixcbiAgICBcIlNvbnlNYWtlck5vdGVQYWNrYWdlXCI6IFwiU29ueSBNYWtlcm5vdGVcIixcbiAgICBcIk1hdHJvc2thU2VnbWVudFwiOiBcIlNlZ21lbnRcIixcbiAgICBcIk1hdHJvc2thQXVkaW9UcmFja1wiOiBcIlRyYWNrXCIsXG4gICAgXCJNYXRyb3NrYVN1YnRpdGxlVHJhY2tcIjogXCJUcmFja1wiLFxuICAgIFwiTWF0cm9za2FWaWRlb1RyYWNrXCI6IFwiVHJhY2tcIixcbiAgICBcIk1hdHJvc2thVHJhY2tcIjogXCJUcmFja1wiLFxuICAgIFwiTWF0cm9za2FUYWdcIjogXCJUYWdcIixcbiAgICBcIk1hdHJvc2thRWJtbEhlYWRlclwiOiBcIkhlYWRlclwiLFxuICAgIFwiVkNhcmRDYXJkXCI6IFwiQ2FyZFwiLFxuICAgIFwiQXNmQ29kZWNcIjogXCJDb2RlY1wiLFxuICAgIFwiQXNmQmFzZVN0cmVhbVByb3BlcnR5XCI6IFwiU3RyZWFtXCIsXG4gICAgXCJBc2ZBdWRpb1N0cmVhbVByb3BlcnR5XCI6IFwiU3RyZWFtXCIsXG4gICAgXCJBc2ZWaWRlb1N0cmVhbVByb3BlcnR5XCI6IFwiU3RyZWFtXCIsXG4gICAgXCJBc2ZNZXRhZGF0YURlc2NyaXB0b3JDb2xsZWN0aW9uXCI6IFwiRGVzY3JpcHRvcnNcIixcbiAgICBcIk9wZW5UeXBlRm9udFwiOiBcIkZvbnRcIixcbiAgfTsiXX0=