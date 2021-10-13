/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Formatting } from "@groupdocs.examples.angular/common-components";
var Signature = /** @class */ (function () {
    function Signature() {
    }
    return Signature;
}());
export { Signature };
if (false) {
    /** @type {?} */
    Signature.prototype.guid;
    /** @type {?} */
    Signature.prototype.image;
    /** @type {?} */
    Signature.prototype.name;
    /** @type {?} */
    Signature.prototype.text;
    /** @type {?} */
    Signature.prototype.fontColor;
}
var SignatureType = /** @class */ (function () {
    function SignatureType() {
    }
    /**
     * @param {?} id
     * @return {?}
     */
    SignatureType.getSignatureType = /**
     * @param {?} id
     * @return {?}
     */
    function (id) {
        switch (id) {
            case SignatureType.TEXT.id:
                return SignatureType.TEXT;
            case SignatureType.IMAGE.id:
                return SignatureType.IMAGE;
            case SignatureType.DIGITAL.id:
                return SignatureType.DIGITAL;
            case SignatureType.QR_CODE.id:
                return SignatureType.QR_CODE;
            case SignatureType.BAR_CODE.id:
                return SignatureType.BAR_CODE;
            case SignatureType.STAMP.id:
                return SignatureType.STAMP;
            case SignatureType.HAND.id:
                return SignatureType.HAND;
        }
    };
    SignatureType.TEXT = { id: 'text', name: 'Text signatures', icon: 'font', title: '' };
    SignatureType.IMAGE = { id: 'image', name: 'Uploaded Images', icon: 'image', title: 'Add image signature' };
    SignatureType.QR_CODE = { id: 'qrCode', name: 'QR codes', icon: 'qrcode', title: 'New QR code' };
    SignatureType.BAR_CODE = { id: 'barCode', name: 'Bar codes', icon: 'barcode', title: 'New Bar code' };
    SignatureType.DIGITAL = {
        id: 'digital',
        name: 'Digital signatures',
        icon: 'fingerprint',
        title: 'New digital signature'
    };
    SignatureType.STAMP = { id: 'stamp', name: 'Stamps', icon: 'stamp', title: '' };
    SignatureType.HAND = { id: 'hand', name: 'Signatures', icon: 'signature', title: '' };
    return SignatureType;
}());
export { SignatureType };
if (false) {
    /** @type {?} */
    SignatureType.TEXT;
    /** @type {?} */
    SignatureType.IMAGE;
    /** @type {?} */
    SignatureType.QR_CODE;
    /** @type {?} */
    SignatureType.BAR_CODE;
    /** @type {?} */
    SignatureType.DIGITAL;
    /** @type {?} */
    SignatureType.STAMP;
    /** @type {?} */
    SignatureType.HAND;
}
var FileListWithParams = /** @class */ (function () {
    function FileListWithParams(fileList, signType) {
        this.fileList = fileList;
        this.signType = signType;
    }
    return FileListWithParams;
}());
export { FileListWithParams };
if (false) {
    /** @type {?} */
    FileListWithParams.prototype.fileList;
    /** @type {?} */
    FileListWithParams.prototype.signType;
}
var OpticalCodeModel = /** @class */ (function () {
    function OpticalCodeModel() {
    }
    return OpticalCodeModel;
}());
export { OpticalCodeModel };
if (false) {
    /** @type {?} */
    OpticalCodeModel.prototype.encodedImage;
    /** @type {?} */
    OpticalCodeModel.prototype.text;
    /** @type {?} */
    OpticalCodeModel.prototype.temp;
}
var DraggableSignature = /** @class */ (function () {
    function DraggableSignature() {
    }
    DraggableSignature.TEMP = "temp";
    return DraggableSignature;
}());
export { DraggableSignature };
if (false) {
    /** @type {?} */
    DraggableSignature.TEMP;
    /** @type {?} */
    DraggableSignature.prototype.guid;
    /** @type {?} */
    DraggableSignature.prototype.type;
    /** @type {?} */
    DraggableSignature.prototype.position;
    /** @type {?} */
    DraggableSignature.prototype.pageNumber;
    /** @type {?} */
    DraggableSignature.prototype.digitalProps;
}
var Position = /** @class */ (function () {
    function Position(left, top) {
        this.left = left;
        this.top = top;
    }
    return Position;
}());
export { Position };
if (false) {
    /** @type {?} */
    Position.prototype.left;
    /** @type {?} */
    Position.prototype.top;
}
var SignatureData = /** @class */ (function () {
    function SignatureData() {
    }
    /**
     * @param {?} data
     * @param {?} type
     * @param {?} position
     * @return {?}
     */
    SignatureData.map = /**
     * @param {?} data
     * @param {?} type
     * @param {?} position
     * @return {?}
     */
    function (data, type, position) {
        /** @type {?} */
        var ret = new SignatureData();
        ret.signatureType = type;
        ret.pageNumber = data.number;
        ret.left = position.left;
        ret.top = position.top;
        ret.signatureGuid = data.guid;
        ret.imageWidth = data.width;
        ret.imageHeight = data.height;
        if (data.digitalProps) {
            ret.reason = data.digitalProps.reason;
            ret.contact = data.digitalProps.contact;
            ret.address = data.digitalProps.address;
            ret.signaturePassword = data.digitalProps.signaturePassword;
            ret.date = data.digitalProps.date;
        }
        return ret;
    };
    return SignatureData;
}());
export { SignatureData };
if (false) {
    /** @type {?} */
    SignatureData.prototype.reason;
    /** @type {?} */
    SignatureData.prototype.contact;
    /** @type {?} */
    SignatureData.prototype.address;
    /** @type {?} */
    SignatureData.prototype.date;
    /** @type {?} */
    SignatureData.prototype.signaturePassword;
    /** @type {?} */
    SignatureData.prototype.signatureGuid;
    /** @type {?} */
    SignatureData.prototype.signatureType;
    /** @type {?} */
    SignatureData.prototype.pageNumber;
    /** @type {?} */
    SignatureData.prototype.left;
    /** @type {?} */
    SignatureData.prototype.top;
    /** @type {?} */
    SignatureData.prototype.imageWidth;
    /** @type {?} */
    SignatureData.prototype.imageHeight;
    /** @type {?} */
    SignatureData.prototype.angle;
}
var DigitalSign = /** @class */ (function () {
    function DigitalSign() {
    }
    return DigitalSign;
}());
export { DigitalSign };
if (false) {
    /** @type {?} */
    DigitalSign.prototype.reason;
    /** @type {?} */
    DigitalSign.prototype.contact;
    /** @type {?} */
    DigitalSign.prototype.address;
    /** @type {?} */
    DigitalSign.prototype.date;
    /** @type {?} */
    DigitalSign.prototype.signaturePassword;
}
var AddedSignature = /** @class */ (function () {
    function AddedSignature() {
        this.height = 0;
        this.width = 0;
    }
    return AddedSignature;
}());
export { AddedSignature };
if (false) {
    /** @type {?} */
    AddedSignature.prototype.guid;
    /** @type {?} */
    AddedSignature.prototype.props;
    /** @type {?} */
    AddedSignature.prototype.data;
    /** @type {?} */
    AddedSignature.prototype.width;
    /** @type {?} */
    AddedSignature.prototype.height;
    /** @type {?} */
    AddedSignature.prototype.number;
    /** @type {?} */
    AddedSignature.prototype.digitalProps;
}
var SignatureProps = /** @class */ (function () {
    function SignatureProps() {
    }
    /**
     * @return {?}
     */
    SignatureProps.getDefault = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var props = new SignatureProps();
        props.text = "";
        /** @type {?} */
        var f = Formatting.default();
        props.fontColor = f.color;
        props.font = f.font;
        props.fontSize = f.fontSize;
        props.underline = f.underline;
        props.bold = f.bold;
        props.italic = f.italic;
        return props;
    };
    return SignatureProps;
}());
export { SignatureProps };
if (false) {
    /** @type {?} */
    SignatureProps.prototype.imageGuid;
    /** @type {?} */
    SignatureProps.prototype.text;
    /** @type {?} */
    SignatureProps.prototype.width;
    /** @type {?} */
    SignatureProps.prototype.height;
    /** @type {?} */
    SignatureProps.prototype.bold;
    /** @type {?} */
    SignatureProps.prototype.italic;
    /** @type {?} */
    SignatureProps.prototype.underline;
    /** @type {?} */
    SignatureProps.prototype.font;
    /** @type {?} */
    SignatureProps.prototype.fontSize;
    /** @type {?} */
    SignatureProps.prototype.fontColor;
}
var RemoveSign = /** @class */ (function () {
    function RemoveSign() {
    }
    return RemoveSign;
}());
export { RemoveSign };
if (false) {
    /** @type {?} */
    RemoveSign.prototype.guid;
    /** @type {?} */
    RemoveSign.prototype.id;
    /** @type {?} */
    RemoveSign.prototype.type;
}
var CopySign = /** @class */ (function () {
    function CopySign() {
    }
    return CopySign;
}());
export { CopySign };
if (false) {
    /** @type {?} */
    CopySign.prototype.guid;
    /** @type {?} */
    CopySign.prototype.id;
    /** @type {?} */
    CopySign.prototype.type;
}
var CopyChanges = /** @class */ (function () {
    function CopyChanges() {
    }
    return CopyChanges;
}());
export { CopyChanges };
if (false) {
    /** @type {?} */
    CopyChanges.prototype.guid;
    /** @type {?} */
    CopyChanges.prototype.id;
    /** @type {?} */
    CopyChanges.prototype.width;
    /** @type {?} */
    CopyChanges.prototype.height;
    /** @type {?} */
    CopyChanges.prototype.position;
    /** @type {?} */
    CopyChanges.prototype.props;
}
var StampCanvasProps = /** @class */ (function () {
    function StampCanvasProps() {
        this.textExpansion = 0.173;
        this.textRepeat = 1;
    }
    /**
     * @template THIS
     * @this {THIS}
     * @param {?} isMobile
     * @return {THIS}
     */
    StampCanvasProps.prototype.init = /**
     * @template THIS
     * @this {THIS}
     * @param {?} isMobile
     * @return {THIS}
     */
    function (isMobile) {
        (/** @type {?} */ (this)).text = "";
        (/** @type {?} */ (this)).width = isMobile ? 103 : 153;
        (/** @type {?} */ (this)).height = isMobile ? 103 : 153;
        (/** @type {?} */ (this)).zIndex = 10;
        (/** @type {?} */ (this)).backgroundColor = "rgb(255, 255, 255)";
        (/** @type {?} */ (this)).strokeColor = "rgb(51, 51, 51)";
        (/** @type {?} */ (this)).strokeWidth = 1;
        (/** @type {?} */ (this)).fontSize = 19;
        (/** @type {?} */ (this)).font = "Arial";
        (/** @type {?} */ (this)).textColor = "rgb(51, 51, 51)";
        (/** @type {?} */ (this)).radius = 76.5;
        (/** @type {?} */ (this)).bold = false;
        (/** @type {?} */ (this)).italic = false;
        (/** @type {?} */ (this)).underline = false;
        return (/** @type {?} */ (this));
    };
    return StampCanvasProps;
}());
export { StampCanvasProps };
if (false) {
    /** @type {?} */
    StampCanvasProps.prototype.id;
    /** @type {?} */
    StampCanvasProps.prototype.text;
    /** @type {?} */
    StampCanvasProps.prototype.width;
    /** @type {?} */
    StampCanvasProps.prototype.height;
    /** @type {?} */
    StampCanvasProps.prototype.zIndex;
    /** @type {?} */
    StampCanvasProps.prototype.backgroundColor;
    /** @type {?} */
    StampCanvasProps.prototype.strokeColor;
    /** @type {?} */
    StampCanvasProps.prototype.strokeWidth;
    /** @type {?} */
    StampCanvasProps.prototype.fontSize;
    /** @type {?} */
    StampCanvasProps.prototype.font;
    /** @type {?} */
    StampCanvasProps.prototype.textColor;
    /** @type {?} */
    StampCanvasProps.prototype.radius;
    /** @type {?} */
    StampCanvasProps.prototype.bold;
    /** @type {?} */
    StampCanvasProps.prototype.italic;
    /** @type {?} */
    StampCanvasProps.prototype.underline;
    /** @type {?} */
    StampCanvasProps.prototype.textExpansion;
    /** @type {?} */
    StampCanvasProps.prototype.textRepeat;
}
var Border = /** @class */ (function () {
    function Border() {
    }
    /**
     * @return {?}
     */
    Border.widthOptions = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var ret = [];
        for (var i = 1; i <= 10; i++) {
            ret.push(this.widthOption(i));
        }
        return ret;
    };
    /**
     * @param {?} width
     * @return {?}
     */
    Border.widthOption = /**
     * @param {?} width
     * @return {?}
     */
    function (width) {
        return { value: width, name: width + 'px', separator: false };
    };
    return Border;
}());
export { Border };
var Downloads = /** @class */ (function () {
    function Downloads() {
    }
    Downloads.original = 'original';
    Downloads.signed = 'signed';
    return Downloads;
}());
export { Downloads };
if (false) {
    /** @type {?} */
    Downloads.original;
    /** @type {?} */
    Downloads.signed;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2lnbmF0dXJlLW1vZGVscy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bncm91cGRvY3MuZXhhbXBsZXMuYW5ndWxhci9zaWduYXR1cmUvIiwic291cmNlcyI6WyJsaWIvc2lnbmF0dXJlLW1vZGVscy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFDLFVBQVUsRUFBQyxNQUFNLCtDQUErQyxDQUFDO0FBRXpFO0lBQUE7SUFNQSxDQUFDO0lBQUQsZ0JBQUM7QUFBRCxDQUFDLEFBTkQsSUFNQzs7OztJQUxDLHlCQUFhOztJQUNiLDBCQUFjOztJQUNkLHlCQUFhOztJQUNiLHlCQUFhOztJQUNiLDhCQUFrQjs7QUFHcEI7SUFBQTtJQWdDQSxDQUFDOzs7OztJQWxCZSw4QkFBZ0I7Ozs7SUFBOUIsVUFBK0IsRUFBVTtRQUN2QyxRQUFRLEVBQUUsRUFBRTtZQUNWLEtBQUssYUFBYSxDQUFDLElBQUksQ0FBQyxFQUFFO2dCQUN4QixPQUFPLGFBQWEsQ0FBQyxJQUFJLENBQUM7WUFDNUIsS0FBSyxhQUFhLENBQUMsS0FBSyxDQUFDLEVBQUU7Z0JBQ3pCLE9BQU8sYUFBYSxDQUFDLEtBQUssQ0FBQztZQUM3QixLQUFLLGFBQWEsQ0FBQyxPQUFPLENBQUMsRUFBRTtnQkFDM0IsT0FBTyxhQUFhLENBQUMsT0FBTyxDQUFDO1lBQy9CLEtBQUssYUFBYSxDQUFDLE9BQU8sQ0FBQyxFQUFFO2dCQUMzQixPQUFPLGFBQWEsQ0FBQyxPQUFPLENBQUM7WUFDL0IsS0FBSyxhQUFhLENBQUMsUUFBUSxDQUFDLEVBQUU7Z0JBQzVCLE9BQU8sYUFBYSxDQUFDLFFBQVEsQ0FBQztZQUNoQyxLQUFLLGFBQWEsQ0FBQyxLQUFLLENBQUMsRUFBRTtnQkFDekIsT0FBTyxhQUFhLENBQUMsS0FBSyxDQUFDO1lBQzdCLEtBQUssYUFBYSxDQUFDLElBQUksQ0FBQyxFQUFFO2dCQUN4QixPQUFPLGFBQWEsQ0FBQyxJQUFJLENBQUM7U0FDN0I7SUFDSCxDQUFDO0lBOUJh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QztDQUFBLEFBSEQsSUFHQztTQUhZLFNBQVM7OztJQUNwQixtQkFBb0M7O0lBQ3BDLGlCQUFnQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Rm9ybWF0dGluZ30gZnJvbSBcIkBncm91cGRvY3MuZXhhbXBsZXMuYW5ndWxhci9jb21tb24tY29tcG9uZW50c1wiO1xyXG5cclxuZXhwb3J0IGNsYXNzIFNpZ25hdHVyZSB7XHJcbiAgZ3VpZDogc3RyaW5nO1xyXG4gIGltYWdlOiBzdHJpbmc7XHJcbiAgbmFtZTogc3RyaW5nO1xyXG4gIHRleHQ6IHN0cmluZztcclxuICBmb250Q29sb3I6IHN0cmluZztcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIFNpZ25hdHVyZVR5cGUge1xyXG4gIHB1YmxpYyBzdGF0aWMgVEVYVCA9IHtpZDogJ3RleHQnLCBuYW1lOiAnVGV4dCBzaWduYXR1cmVzJywgaWNvbjogJ2ZvbnQnLCB0aXRsZTogJyd9O1xyXG4gIHB1YmxpYyBzdGF0aWMgSU1BR0UgPSB7aWQ6ICdpbWFnZScsIG5hbWU6ICdVcGxvYWRlZCBJbWFnZXMnLCBpY29uOiAnaW1hZ2UnLCB0aXRsZTogJ0FkZCBpbWFnZSBzaWduYXR1cmUnfTtcclxuICBwdWJsaWMgc3RhdGljIFFSX0NPREUgPSB7aWQ6ICdxckNvZGUnLCBuYW1lOiAnUVIgY29kZXMnLCBpY29uOiAncXJjb2RlJywgdGl0bGU6ICdOZXcgUVIgY29kZSd9O1xyXG4gIHB1YmxpYyBzdGF0aWMgQkFSX0NPREUgPSB7aWQ6ICdiYXJDb2RlJywgbmFtZTogJ0JhciBjb2RlcycsIGljb246ICdiYXJjb2RlJywgdGl0bGU6ICdOZXcgQmFyIGNvZGUnfTtcclxuICBwdWJsaWMgc3RhdGljIERJR0lUQUwgPSB7XHJcbiAgICBpZDogJ2RpZ2l0YWwnLFxyXG4gICAgbmFtZTogJ0RpZ2l0YWwgc2lnbmF0dXJlcycsXHJcbiAgICBpY29uOiAnZmluZ2VycHJpbnQnLFxyXG4gICAgdGl0bGU6ICdOZXcgZGlnaXRhbCBzaWduYXR1cmUnXHJcbiAgfTtcclxuICBwdWJsaWMgc3RhdGljIFNUQU1QID0ge2lkOiAnc3RhbXAnLCBuYW1lOiAnU3RhbXBzJywgaWNvbjogJ3N0YW1wJywgdGl0bGU6ICcnfTtcclxuICBwdWJsaWMgc3RhdGljIEhBTkQgPSB7aWQ6ICdoYW5kJywgbmFtZTogJ1NpZ25hdHVyZXMnLCBpY29uOiAnc2lnbmF0dXJlJywgdGl0bGU6ICcnfTtcclxuXHJcbiAgcHVibGljIHN0YXRpYyBnZXRTaWduYXR1cmVUeXBlKGlkOiBzdHJpbmcpIHtcclxuICAgIHN3aXRjaCAoaWQpIHtcclxuICAgICAgY2FzZSBTaWduYXR1cmVUeXBlLlRFWFQuaWQ6XHJcbiAgICAgICAgcmV0dXJuIFNpZ25hdHVyZVR5cGUuVEVYVDtcclxuICAgICAgY2FzZSBTaWduYXR1cmVUeXBlLklNQUdFLmlkOlxyXG4gICAgICAgIHJldHVybiBTaWduYXR1cmVUeXBlLklNQUdFO1xyXG4gICAgICBjYXNlIFNpZ25hdHVyZVR5cGUuRElHSVRBTC5pZDpcclxuICAgICAgICByZXR1cm4gU2lnbmF0dXJlVHlwZS5ESUdJVEFMO1xyXG4gICAgICBjYXNlIFNpZ25hdHVyZVR5cGUuUVJfQ09ERS5pZDpcclxuICAgICAgICByZXR1cm4gU2lnbmF0dXJlVHlwZS5RUl9DT0RFO1xyXG4gICAgICBjYXNlIFNpZ25hdHVyZVR5cGUuQkFSX0NPREUuaWQ6XHJcbiAgICAgICAgcmV0dXJuIFNpZ25hdHVyZVR5cGUuQkFSX0NPREU7XHJcbiAgICAgIGNhc2UgU2lnbmF0dXJlVHlwZS5TVEFNUC5pZDpcclxuICAgICAgICByZXR1cm4gU2lnbmF0dXJlVHlwZS5TVEFNUDtcclxuICAgICAgY2FzZSBTaWduYXR1cmVUeXBlLkhBTkQuaWQ6XHJcbiAgICAgICAgcmV0dXJuIFNpZ25hdHVyZVR5cGUuSEFORDtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBGaWxlTGlzdFdpdGhQYXJhbXMge1xyXG4gIGZpbGVMaXN0OiBGaWxlTGlzdDtcclxuICBzaWduVHlwZTogc3RyaW5nO1xyXG5cclxuICBjb25zdHJ1Y3RvcihmaWxlTGlzdDogRmlsZUxpc3QsIHNpZ25UeXBlOiBzdHJpbmcpIHtcclxuICAgIHRoaXMuZmlsZUxpc3QgPSBmaWxlTGlzdDtcclxuICAgIHRoaXMuc2lnblR5cGUgPSBzaWduVHlwZTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBPcHRpY2FsQ29kZU1vZGVsIHtcclxuICBlbmNvZGVkSW1hZ2U6IHN0cmluZztcclxuICB0ZXh0OiBzdHJpbmc7XHJcbiAgdGVtcDogYm9vbGVhbjtcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIERyYWdnYWJsZVNpZ25hdHVyZSB7XHJcbiAgcHVibGljIHN0YXRpYyBURU1QID0gXCJ0ZW1wXCI7XHJcbiAgZ3VpZDogc3RyaW5nO1xyXG4gIHR5cGU6IHN0cmluZztcclxuICBwb3NpdGlvbjogUG9zaXRpb247XHJcbiAgcGFnZU51bWJlcjogbnVtYmVyO1xyXG4gIGRpZ2l0YWxQcm9wczogRGlnaXRhbFNpZ247XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBQb3NpdGlvbiB7XHJcbiAgbGVmdDogbnVtYmVyO1xyXG4gIHRvcDogbnVtYmVyO1xyXG5cclxuICBjb25zdHJ1Y3RvcihsZWZ0OiBudW1iZXIsIHRvcDogbnVtYmVyKSB7XHJcbiAgICB0aGlzLmxlZnQgPSBsZWZ0O1xyXG4gICAgdGhpcy50b3AgPSB0b3A7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgU2lnbmF0dXJlRGF0YSB7XHJcbiAgcmVhc29uOiBzdHJpbmc7XHJcbiAgY29udGFjdDogc3RyaW5nO1xyXG4gIGFkZHJlc3M6IHN0cmluZztcclxuICBkYXRlOiBzdHJpbmc7XHJcbiAgc2lnbmF0dXJlUGFzc3dvcmQ6IHN0cmluZztcclxuICBzaWduYXR1cmVHdWlkOiBzdHJpbmc7XHJcbiAgc2lnbmF0dXJlVHlwZTogc3RyaW5nO1xyXG4gIHBhZ2VOdW1iZXI6IG51bWJlcjtcclxuICBsZWZ0OiBudW1iZXI7XHJcbiAgdG9wOiBudW1iZXI7XHJcbiAgaW1hZ2VXaWR0aDogbnVtYmVyO1xyXG4gIGltYWdlSGVpZ2h0OiBudW1iZXI7XHJcbiAgYW5nbGU6IG51bWJlcjtcclxuXHJcbiAgcHVibGljIHN0YXRpYyBtYXAoZGF0YTogQWRkZWRTaWduYXR1cmUsIHR5cGU6IHN0cmluZywgcG9zaXRpb246IFBvc2l0aW9uKSB7XHJcbiAgICBjb25zdCByZXQgPSBuZXcgU2lnbmF0dXJlRGF0YSgpO1xyXG4gICAgcmV0LnNpZ25hdHVyZVR5cGUgPSB0eXBlO1xyXG4gICAgcmV0LnBhZ2VOdW1iZXIgPSBkYXRhLm51bWJlcjtcclxuICAgIHJldC5sZWZ0ID0gcG9zaXRpb24ubGVmdDtcclxuICAgIHJldC50b3AgPSBwb3NpdGlvbi50b3A7XHJcbiAgICByZXQuc2lnbmF0dXJlR3VpZCA9IGRhdGEuZ3VpZDtcclxuICAgIHJldC5pbWFnZVdpZHRoID0gZGF0YS53aWR0aDtcclxuICAgIHJldC5pbWFnZUhlaWdodCA9IGRhdGEuaGVpZ2h0O1xyXG4gICAgaWYgKGRhdGEuZGlnaXRhbFByb3BzKSB7XHJcbiAgICAgIHJldC5yZWFzb24gPSBkYXRhLmRpZ2l0YWxQcm9wcy5yZWFzb247XHJcbiAgICAgIHJldC5jb250YWN0ID0gZGF0YS5kaWdpdGFsUHJvcHMuY29udGFjdDtcclxuICAgICAgcmV0LmFkZHJlc3MgPSBkYXRhLmRpZ2l0YWxQcm9wcy5hZGRyZXNzO1xyXG4gICAgICByZXQuc2lnbmF0dXJlUGFzc3dvcmQgPSBkYXRhLmRpZ2l0YWxQcm9wcy5zaWduYXR1cmVQYXNzd29yZDtcclxuICAgICAgcmV0LmRhdGUgPSBkYXRhLmRpZ2l0YWxQcm9wcy5kYXRlO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiByZXQ7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgRGlnaXRhbFNpZ24ge1xyXG4gIHJlYXNvbjogc3RyaW5nO1xyXG4gIGNvbnRhY3Q6IHN0cmluZztcclxuICBhZGRyZXNzOiBzdHJpbmc7XHJcbiAgZGF0ZTogc3RyaW5nO1xyXG4gIHNpZ25hdHVyZVBhc3N3b3JkOiBzdHJpbmc7XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBBZGRlZFNpZ25hdHVyZSB7XHJcblxyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgdGhpcy5oZWlnaHQgPSAwO1xyXG4gICAgdGhpcy53aWR0aCA9IDA7XHJcbiAgfVxyXG5cclxuICBndWlkOiBzdHJpbmc7XHJcbiAgcHJvcHM6IFNpZ25hdHVyZVByb3BzO1xyXG4gIGRhdGE6IHN0cmluZztcclxuICB3aWR0aDogbnVtYmVyO1xyXG4gIGhlaWdodDogbnVtYmVyO1xyXG4gIG51bWJlcjogbnVtYmVyO1xyXG4gIGRpZ2l0YWxQcm9wczogRGlnaXRhbFNpZ247XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBTaWduYXR1cmVQcm9wcyB7XHJcbiAgaW1hZ2VHdWlkOiBzdHJpbmc7XHJcbiAgdGV4dDogc3RyaW5nO1xyXG4gIHdpZHRoOiBudW1iZXI7XHJcbiAgaGVpZ2h0OiBudW1iZXI7XHJcbiAgYm9sZDogYm9vbGVhbjtcclxuICBpdGFsaWM6IGJvb2xlYW47XHJcbiAgdW5kZXJsaW5lOiBib29sZWFuO1xyXG4gIGZvbnQ6IHN0cmluZztcclxuICBmb250U2l6ZTogbnVtYmVyO1xyXG4gIGZvbnRDb2xvcjogc3RyaW5nO1xyXG5cclxuICBwdWJsaWMgc3RhdGljIGdldERlZmF1bHQoKTogU2lnbmF0dXJlUHJvcHMge1xyXG4gICAgY29uc3QgcHJvcHMgPSBuZXcgU2lnbmF0dXJlUHJvcHMoKTtcclxuICAgIHByb3BzLnRleHQgPSBcIlwiO1xyXG4gICAgY29uc3QgZiA9IEZvcm1hdHRpbmcuZGVmYXVsdCgpO1xyXG4gICAgcHJvcHMuZm9udENvbG9yID0gZi5jb2xvcjtcclxuICAgIHByb3BzLmZvbnQgPSBmLmZvbnQ7XHJcbiAgICBwcm9wcy5mb250U2l6ZSA9IGYuZm9udFNpemU7XHJcbiAgICBwcm9wcy51bmRlcmxpbmUgPSBmLnVuZGVybGluZTtcclxuICAgIHByb3BzLmJvbGQgPSBmLmJvbGQ7XHJcbiAgICBwcm9wcy5pdGFsaWMgPSBmLml0YWxpYztcclxuICAgIHJldHVybiBwcm9wcztcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBSZW1vdmVTaWduIHtcclxuICBndWlkOiBzdHJpbmc7XHJcbiAgaWQ6IG51bWJlcjtcclxuICB0eXBlOiBzdHJpbmc7XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBDb3B5U2lnbiB7XHJcbiAgZ3VpZDogc3RyaW5nO1xyXG4gIGlkOiBudW1iZXI7XHJcbiAgdHlwZTogc3RyaW5nO1xyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgQ29weUNoYW5nZXMge1xyXG4gIGd1aWQ6IHN0cmluZztcclxuICBpZDogbnVtYmVyO1xyXG4gIHdpZHRoOiBudW1iZXI7XHJcbiAgaGVpZ2h0OiBudW1iZXI7XHJcbiAgcG9zaXRpb246IFBvc2l0aW9uO1xyXG4gIHByb3BzOiBTaWduYXR1cmVQcm9wcztcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIFN0YW1wQ2FudmFzUHJvcHMge1xyXG4gIGlkOiBudW1iZXI7XHJcbiAgdGV4dDogc3RyaW5nO1xyXG4gIHdpZHRoOiBudW1iZXI7XHJcbiAgaGVpZ2h0OiBudW1iZXI7XHJcbiAgekluZGV4OiBudW1iZXI7XHJcbiAgYmFja2dyb3VuZENvbG9yOiBzdHJpbmc7XHJcbiAgc3Ryb2tlQ29sb3I6IHN0cmluZztcclxuICBzdHJva2VXaWR0aDogbnVtYmVyO1xyXG4gIGZvbnRTaXplOiBudW1iZXI7XHJcbiAgZm9udDogc3RyaW5nO1xyXG4gIHRleHRDb2xvcjogc3RyaW5nO1xyXG4gIHJhZGl1czogbnVtYmVyO1xyXG4gIGJvbGQ6IGJvb2xlYW47XHJcbiAgaXRhbGljOiBib29sZWFuO1xyXG4gIHVuZGVybGluZTogYm9vbGVhbjtcclxuICB0ZXh0RXhwYW5zaW9uID0gMC4xNzM7XHJcbiAgdGV4dFJlcGVhdCA9IDE7XHJcblxyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gIH1cclxuXHJcbiAgaW5pdChpc01vYmlsZSkge1xyXG4gICAgdGhpcy50ZXh0ID0gXCJcIjtcclxuICAgIHRoaXMud2lkdGggPSBpc01vYmlsZSA/IDEwMyA6IDE1MztcclxuICAgIHRoaXMuaGVpZ2h0ID0gaXNNb2JpbGUgPyAxMDMgOiAxNTM7XHJcbiAgICB0aGlzLnpJbmRleCA9IDEwO1xyXG4gICAgdGhpcy5iYWNrZ3JvdW5kQ29sb3IgPSBcInJnYigyNTUsIDI1NSwgMjU1KVwiO1xyXG4gICAgdGhpcy5zdHJva2VDb2xvciA9IFwicmdiKDUxLCA1MSwgNTEpXCI7XHJcbiAgICB0aGlzLnN0cm9rZVdpZHRoID0gMTtcclxuICAgIHRoaXMuZm9udFNpemUgPSAxOTtcclxuICAgIHRoaXMuZm9udCA9IFwiQXJpYWxcIjtcclxuICAgIHRoaXMudGV4dENvbG9yID0gXCJyZ2IoNTEsIDUxLCA1MSlcIjtcclxuICAgIHRoaXMucmFkaXVzID0gNzYuNTtcclxuICAgIHRoaXMuYm9sZCA9IGZhbHNlO1xyXG4gICAgdGhpcy5pdGFsaWMgPSBmYWxzZTtcclxuICAgIHRoaXMudW5kZXJsaW5lID0gZmFsc2U7XHJcbiAgICByZXR1cm4gdGhpcztcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBCb3JkZXIge1xyXG4gIHB1YmxpYyBzdGF0aWMgd2lkdGhPcHRpb25zKCkge1xyXG4gICAgY29uc3QgcmV0ID0gW11cclxuICAgIGZvciAobGV0IGkgPSAxOyBpIDw9IDEwOyBpKyspIHtcclxuICAgICAgcmV0LnB1c2godGhpcy53aWR0aE9wdGlvbihpKSk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gcmV0O1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHN0YXRpYyB3aWR0aE9wdGlvbih3aWR0aDogbnVtYmVyKSB7XHJcbiAgICByZXR1cm4ge3ZhbHVlOiB3aWR0aCwgbmFtZTogd2lkdGggKyAncHgnLCBzZXBhcmF0b3I6IGZhbHNlfVxyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIERvd25sb2FkcyB7XHJcbiAgcHVibGljIHN0YXRpYyBvcmlnaW5hbCA9ICdvcmlnaW5hbCc7XHJcbiAgcHVibGljIHN0YXRpYyBzaWduZWQgPSAnc2lnbmVkJztcclxufVxyXG4iXX0=