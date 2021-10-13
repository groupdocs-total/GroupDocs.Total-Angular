/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Formatting } from "@groupdocs.examples.angular/common-components";
export class Signature {
}
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
export class SignatureType {
    /**
     * @param {?} id
     * @return {?}
     */
    static getSignatureType(id) {
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
    }
}
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
export class FileListWithParams {
    /**
     * @param {?} fileList
     * @param {?} signType
     */
    constructor(fileList, signType) {
        this.fileList = fileList;
        this.signType = signType;
    }
}
if (false) {
    /** @type {?} */
    FileListWithParams.prototype.fileList;
    /** @type {?} */
    FileListWithParams.prototype.signType;
}
export class OpticalCodeModel {
}
if (false) {
    /** @type {?} */
    OpticalCodeModel.prototype.encodedImage;
    /** @type {?} */
    OpticalCodeModel.prototype.text;
    /** @type {?} */
    OpticalCodeModel.prototype.temp;
}
export class DraggableSignature {
}
DraggableSignature.TEMP = "temp";
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
export class Position {
    /**
     * @param {?} left
     * @param {?} top
     */
    constructor(left, top) {
        this.left = left;
        this.top = top;
    }
}
if (false) {
    /** @type {?} */
    Position.prototype.left;
    /** @type {?} */
    Position.prototype.top;
}
export class SignatureData {
    /**
     * @param {?} data
     * @param {?} type
     * @param {?} position
     * @return {?}
     */
    static map(data, type, position) {
        /** @type {?} */
        const ret = new SignatureData();
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
    }
}
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
export class DigitalSign {
}
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
export class AddedSignature {
    constructor() {
        this.height = 0;
        this.width = 0;
    }
}
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
export class SignatureProps {
    /**
     * @return {?}
     */
    static getDefault() {
        /** @type {?} */
        const props = new SignatureProps();
        props.text = "";
        /** @type {?} */
        const f = Formatting.default();
        props.fontColor = f.color;
        props.font = f.font;
        props.fontSize = f.fontSize;
        props.underline = f.underline;
        props.bold = f.bold;
        props.italic = f.italic;
        return props;
    }
}
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
export class RemoveSign {
}
if (false) {
    /** @type {?} */
    RemoveSign.prototype.guid;
    /** @type {?} */
    RemoveSign.prototype.id;
    /** @type {?} */
    RemoveSign.prototype.type;
}
export class CopySign {
}
if (false) {
    /** @type {?} */
    CopySign.prototype.guid;
    /** @type {?} */
    CopySign.prototype.id;
    /** @type {?} */
    CopySign.prototype.type;
}
export class CopyChanges {
}
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
export class StampCanvasProps {
    constructor() {
        this.textExpansion = 0.173;
        this.textRepeat = 1;
    }
    /**
     * @template THIS
     * @this {THIS}
     * @param {?} isMobile
     * @return {THIS}
     */
    init(isMobile) {
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
    }
}
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
export class Border {
    /**
     * @return {?}
     */
    static widthOptions() {
        /** @type {?} */
        const ret = [];
        for (let i = 1; i <= 10; i++) {
            ret.push(this.widthOption(i));
        }
        return ret;
    }
    /**
     * @param {?} width
     * @return {?}
     */
    static widthOption(width) {
        return { value: width, name: width + 'px', separator: false };
    }
}
export class Downloads {
}
Downloads.original = 'original';
Downloads.signed = 'signed';
if (false) {
    /** @type {?} */
    Downloads.original;
    /** @type {?} */
    Downloads.signed;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2lnbmF0dXJlLW1vZGVscy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bncm91cGRvY3MuZXhhbXBsZXMuYW5ndWxhci9zaWduYXR1cmUvIiwic291cmNlcyI6WyJsaWIvc2lnbmF0dXJlLW1vZGVscy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFDLFVBQVUsRUFBQyxNQUFNLCtDQUErQyxDQUFDO0FBRXpFLE1BQU0sT0FBTyxTQUFTO0NBTXJCOzs7SUFMQyx5QkFBYTs7SUFDYiwwQkFBYzs7SUFDZCx5QkFBYTs7SUFDYix5QkFBYTs7SUFDYiw4QkFBa0I7O0FBR3BCLE1BQU0sT0FBTyxhQUFhOzs7OztJQWNqQixNQUFNLENBQUMsZ0JBQWdCLENBQUMsRUFBVTtRQUN2QyxRQUFRLEVBQUUsRUFBRTtZQUNWLEtBQUssYUFBYSxDQUFDLElBQUksQ0FBQyxFQUFFO2dCQUN4QixPQUFPLGFBQWEsQ0FBQyxJQUFJLENBQUM7WUFDNUIsS0FBSyxhQUFhLENBQUMsS0FBSyxDQUFDLEVBQUU7Z0JBQ3pCLE9BQU8sYUFBYSxDQUFDLEtBQUssQ0FBQztZQUM3QixLQUFLLGFBQWEsQ0FBQyxPQUFPLENBQUMsRUFBRTtnQkFDM0IsT0FBTyxhQUFhLENBQUMsT0FBTyxDQUFDO1lBQy9CLEtBQUssYUFBYSxDQUFDLE9BQU8sQ0FBQyxFQUFFO2dCQUMzQixPQUFPLGFBQWEsQ0FBQyxPQUFPLENBQUM7WUFDL0IsS0FBSyxhQUFhLENBQUMsUUFBUSxDQUFDLEVBQUU7Z0JBQzVCLE9BQU8sYUFBYSxDQUFDLFFBQVEsQ0FBQztZQUNoQyxLQUFLLGFBQWEsQ0FBQyxLQUFLLENBQUMsRUFBRTtnQkFDekIsT0FBTyxhQUFhLENBQUMsS0FBSyxDQUFDO1lBQzdCLEtBQUssYUFBYSxDQUFDLElBQUksQ0FBQyxFQUFFO2dCQUN4QixPQUFPLGFBQWEsQ0FBQyxJQUFJLENBQUM7U0FDN0I7SUFDSCxDQUFDOztBQTlCYSxrQkFBSSxHQUFHLEVBQUMsRUFBRSxFQUFF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bEIsa0NBQWU7O0lBQ2YsZ0NBQWM7O0lBQ2Qsa0NBQWdCOztJQUNoQixxQ0FBbUI7O0lBQ25CLHlDQUFzQjs7SUFDdEIsc0NBQWU7O0FBd0JqQixNQUFNLE9BQU8sTUFBTTs7OztJQUNWLE1BQU0sQ0FBQyxZQUFZOztjQUNsQixHQUFHLEdBQUcsRUFBRTtRQUNkLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsSUFBSSxFQUFFLEVBQUUsQ0FBQyxFQUFFLEVBQUU7WUFDNUIsR0FBRyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7U0FDL0I7UUFDRCxPQUFPLEdBQUcsQ0FBQztJQUNiLENBQUM7Ozs7O0lBRU0sTUFBTSxDQUFDLFdBQVcsQ0FBQyxLQUFhO1FBQ3JDLE9BQU8sRUFBQyxLQUFLLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxLQUFLLEdBQUcsSUFBSSxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUMsQ0FBQTtJQUM3RCxDQUFDO0NBQ0Y7QUFFRCxNQUFNLE9BQU8sU0FBUzs7QUFDTixrQkFBUSxHQUFHLFVBQVUsQ0FBQztBQUN0QixnQkFBTSxHQUFHLFFBQVEsQ0FBQzs7O0lBRGhDLG1CQUFvQzs7SUFDcEMsaUJBQWdDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtGb3JtYXR0aW5nfSBmcm9tIFwiQGdyb3VwZG9jcy5leGFtcGxlcy5hbmd1bGFyL2NvbW1vbi1jb21wb25lbnRzXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgU2lnbmF0dXJlIHtcclxuICBndWlkOiBzdHJpbmc7XHJcbiAgaW1hZ2U6IHN0cmluZztcclxuICBuYW1lOiBzdHJpbmc7XHJcbiAgdGV4dDogc3RyaW5nO1xyXG4gIGZvbnRDb2xvcjogc3RyaW5nO1xyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgU2lnbmF0dXJlVHlwZSB7XHJcbiAgcHVibGljIHN0YXRpYyBURVhUID0ge2lkOiAndGV4dCcsIG5hbWU6ICdUZXh0IHNpZ25hdHVyZXMnLCBpY29uOiAnZm9udCcsIHRpdGxlOiAnJ307XHJcbiAgcHVibGljIHN0YXRpYyBJTUFHRSA9IHtpZDogJ2ltYWdlJywgbmFtZTogJ1VwbG9hZGVkIEltYWdlcycsIGljb246ICdpbWFnZScsIHRpdGxlOiAnQWRkIGltYWdlIHNpZ25hdHVyZSd9O1xyXG4gIHB1YmxpYyBzdGF0aWMgUVJfQ09ERSA9IHtpZDogJ3FyQ29kZScsIG5hbWU6ICdRUiBjb2RlcycsIGljb246ICdxcmNvZGUnLCB0aXRsZTogJ05ldyBRUiBjb2RlJ307XHJcbiAgcHVibGljIHN0YXRpYyBCQVJfQ09ERSA9IHtpZDogJ2JhckNvZGUnLCBuYW1lOiAnQmFyIGNvZGVzJywgaWNvbjogJ2JhcmNvZGUnLCB0aXRsZTogJ05ldyBCYXIgY29kZSd9O1xyXG4gIHB1YmxpYyBzdGF0aWMgRElHSVRBTCA9IHtcclxuICAgIGlkOiAnZGlnaXRhbCcsXHJcbiAgICBuYW1lOiAnRGlnaXRhbCBzaWduYXR1cmVzJyxcclxuICAgIGljb246ICdmaW5nZXJwcmludCcsXHJcbiAgICB0aXRsZTogJ05ldyBkaWdpdGFsIHNpZ25hdHVyZSdcclxuICB9O1xyXG4gIHB1YmxpYyBzdGF0aWMgU1RBTVAgPSB7aWQ6ICdzdGFtcCcsIG5hbWU6ICdTdGFtcHMnLCBpY29uOiAnc3RhbXAnLCB0aXRsZTogJyd9O1xyXG4gIHB1YmxpYyBzdGF0aWMgSEFORCA9IHtpZDogJ2hhbmQnLCBuYW1lOiAnU2lnbmF0dXJlcycsIGljb246ICdzaWduYXR1cmUnLCB0aXRsZTogJyd9O1xyXG5cclxuICBwdWJsaWMgc3RhdGljIGdldFNpZ25hdHVyZVR5cGUoaWQ6IHN0cmluZykge1xyXG4gICAgc3dpdGNoIChpZCkge1xyXG4gICAgICBjYXNlIFNpZ25hdHVyZVR5cGUuVEVYVC5pZDpcclxuICAgICAgICByZXR1cm4gU2lnbmF0dXJlVHlwZS5URVhUO1xyXG4gICAgICBjYXNlIFNpZ25hdHVyZVR5cGUuSU1BR0UuaWQ6XHJcbiAgICAgICAgcmV0dXJuIFNpZ25hdHVyZVR5cGUuSU1BR0U7XHJcbiAgICAgIGNhc2UgU2lnbmF0dXJlVHlwZS5ESUdJVEFMLmlkOlxyXG4gICAgICAgIHJldHVybiBTaWduYXR1cmVUeXBlLkRJR0lUQUw7XHJcbiAgICAgIGNhc2UgU2lnbmF0dXJlVHlwZS5RUl9DT0RFLmlkOlxyXG4gICAgICAgIHJldHVybiBTaWduYXR1cmVUeXBlLlFSX0NPREU7XHJcbiAgICAgIGNhc2UgU2lnbmF0dXJlVHlwZS5CQVJfQ09ERS5pZDpcclxuICAgICAgICByZXR1cm4gU2lnbmF0dXJlVHlwZS5CQVJfQ09ERTtcclxuICAgICAgY2FzZSBTaWduYXR1cmVUeXBlLlNUQU1QLmlkOlxyXG4gICAgICAgIHJldHVybiBTaWduYXR1cmVUeXBlLlNUQU1QO1xyXG4gICAgICBjYXNlIFNpZ25hdHVyZVR5cGUuSEFORC5pZDpcclxuICAgICAgICByZXR1cm4gU2lnbmF0dXJlVHlwZS5IQU5EO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIEZpbGVMaXN0V2l0aFBhcmFtcyB7XHJcbiAgZmlsZUxpc3Q6IEZpbGVMaXN0O1xyXG4gIHNpZ25UeXBlOiBzdHJpbmc7XHJcblxyXG4gIGNvbnN0cnVjdG9yKGZpbGVMaXN0OiBGaWxlTGlzdCwgc2lnblR5cGU6IHN0cmluZykge1xyXG4gICAgdGhpcy5maWxlTGlzdCA9IGZpbGVMaXN0O1xyXG4gICAgdGhpcy5zaWduVHlwZSA9IHNpZ25UeXBlO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIE9wdGljYWxDb2RlTW9kZWwge1xyXG4gIGVuY29kZWRJbWFnZTogc3RyaW5nO1xyXG4gIHRleHQ6IHN0cmluZztcclxuICB0ZW1wOiBib29sZWFuO1xyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgRHJhZ2dhYmxlU2lnbmF0dXJlIHtcclxuICBwdWJsaWMgc3RhdGljIFRFTVAgPSBcInRlbXBcIjtcclxuICBndWlkOiBzdHJpbmc7XHJcbiAgdHlwZTogc3RyaW5nO1xyXG4gIHBvc2l0aW9uOiBQb3NpdGlvbjtcclxuICBwYWdlTnVtYmVyOiBudW1iZXI7XHJcbiAgZGlnaXRhbFByb3BzOiBEaWdpdGFsU2lnbjtcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIFBvc2l0aW9uIHtcclxuICBsZWZ0OiBudW1iZXI7XHJcbiAgdG9wOiBudW1iZXI7XHJcblxyXG4gIGNvbnN0cnVjdG9yKGxlZnQ6IG51bWJlciwgdG9wOiBudW1iZXIpIHtcclxuICAgIHRoaXMubGVmdCA9IGxlZnQ7XHJcbiAgICB0aGlzLnRvcCA9IHRvcDtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBTaWduYXR1cmVEYXRhIHtcclxuICByZWFzb246IHN0cmluZztcclxuICBjb250YWN0OiBzdHJpbmc7XHJcbiAgYWRkcmVzczogc3RyaW5nO1xyXG4gIGRhdGU6IHN0cmluZztcclxuICBzaWduYXR1cmVQYXNzd29yZDogc3RyaW5nO1xyXG4gIHNpZ25hdHVyZUd1aWQ6IHN0cmluZztcclxuICBzaWduYXR1cmVUeXBlOiBzdHJpbmc7XHJcbiAgcGFnZU51bWJlcjogbnVtYmVyO1xyXG4gIGxlZnQ6IG51bWJlcjtcclxuICB0b3A6IG51bWJlcjtcclxuICBpbWFnZVdpZHRoOiBudW1iZXI7XHJcbiAgaW1hZ2VIZWlnaHQ6IG51bWJlcjtcclxuICBhbmdsZTogbnVtYmVyO1xyXG5cclxuICBwdWJsaWMgc3RhdGljIG1hcChkYXRhOiBBZGRlZFNpZ25hdHVyZSwgdHlwZTogc3RyaW5nLCBwb3NpdGlvbjogUG9zaXRpb24pIHtcclxuICAgIGNvbnN0IHJldCA9IG5ldyBTaWduYXR1cmVEYXRhKCk7XHJcbiAgICByZXQuc2lnbmF0dXJlVHlwZSA9IHR5cGU7XHJcbiAgICByZXQucGFnZU51bWJlciA9IGRhdGEubnVtYmVyO1xyXG4gICAgcmV0LmxlZnQgPSBwb3NpdGlvbi5sZWZ0O1xyXG4gICAgcmV0LnRvcCA9IHBvc2l0aW9uLnRvcDtcclxuICAgIHJldC5zaWduYXR1cmVHdWlkID0gZGF0YS5ndWlkO1xyXG4gICAgcmV0LmltYWdlV2lkdGggPSBkYXRhLndpZHRoO1xyXG4gICAgcmV0LmltYWdlSGVpZ2h0ID0gZGF0YS5oZWlnaHQ7XHJcbiAgICBpZiAoZGF0YS5kaWdpdGFsUHJvcHMpIHtcclxuICAgICAgcmV0LnJlYXNvbiA9IGRhdGEuZGlnaXRhbFByb3BzLnJlYXNvbjtcclxuICAgICAgcmV0LmNvbnRhY3QgPSBkYXRhLmRpZ2l0YWxQcm9wcy5jb250YWN0O1xyXG4gICAgICByZXQuYWRkcmVzcyA9IGRhdGEuZGlnaXRhbFByb3BzLmFkZHJlc3M7XHJcbiAgICAgIHJldC5zaWduYXR1cmVQYXNzd29yZCA9IGRhdGEuZGlnaXRhbFByb3BzLnNpZ25hdHVyZVBhc3N3b3JkO1xyXG4gICAgICByZXQuZGF0ZSA9IGRhdGEuZGlnaXRhbFByb3BzLmRhdGU7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHJldDtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBEaWdpdGFsU2lnbiB7XHJcbiAgcmVhc29uOiBzdHJpbmc7XHJcbiAgY29udGFjdDogc3RyaW5nO1xyXG4gIGFkZHJlc3M6IHN0cmluZztcclxuICBkYXRlOiBzdHJpbmc7XHJcbiAgc2lnbmF0dXJlUGFzc3dvcmQ6IHN0cmluZztcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIEFkZGVkU2lnbmF0dXJlIHtcclxuXHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgICB0aGlzLmhlaWdodCA9IDA7XHJcbiAgICB0aGlzLndpZHRoID0gMDtcclxuICB9XHJcblxyXG4gIGd1aWQ6IHN0cmluZztcclxuICBwcm9wczogU2lnbmF0dXJlUHJvcHM7XHJcbiAgZGF0YTogc3RyaW5nO1xyXG4gIHdpZHRoOiBudW1iZXI7XHJcbiAgaGVpZ2h0OiBudW1iZXI7XHJcbiAgbnVtYmVyOiBudW1iZXI7XHJcbiAgZGlnaXRhbFByb3BzOiBEaWdpdGFsU2lnbjtcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIFNpZ25hdHVyZVByb3BzIHtcclxuICBpbWFnZUd1aWQ6IHN0cmluZztcclxuICB0ZXh0OiBzdHJpbmc7XHJcbiAgd2lkdGg6IG51bWJlcjtcclxuICBoZWlnaHQ6IG51bWJlcjtcclxuICBib2xkOiBib29sZWFuO1xyXG4gIGl0YWxpYzogYm9vbGVhbjtcclxuICB1bmRlcmxpbmU6IGJvb2xlYW47XHJcbiAgZm9udDogc3RyaW5nO1xyXG4gIGZvbnRTaXplOiBudW1iZXI7XHJcbiAgZm9udENvbG9yOiBzdHJpbmc7XHJcblxyXG4gIHB1YmxpYyBzdGF0aWMgZ2V0RGVmYXVsdCgpOiBTaWduYXR1cmVQcm9wcyB7XHJcbiAgICBjb25zdCBwcm9wcyA9IG5ldyBTaWduYXR1cmVQcm9wcygpO1xyXG4gICAgcHJvcHMudGV4dCA9IFwiXCI7XHJcbiAgICBjb25zdCBmID0gRm9ybWF0dGluZy5kZWZhdWx0KCk7XHJcbiAgICBwcm9wcy5mb250Q29sb3IgPSBmLmNvbG9yO1xyXG4gICAgcHJvcHMuZm9udCA9IGYuZm9udDtcclxuICAgIHByb3BzLmZvbnRTaXplID0gZi5mb250U2l6ZTtcclxuICAgIHByb3BzLnVuZGVybGluZSA9IGYudW5kZXJsaW5lO1xyXG4gICAgcHJvcHMuYm9sZCA9IGYuYm9sZDtcclxuICAgIHByb3BzLml0YWxpYyA9IGYuaXRhbGljO1xyXG4gICAgcmV0dXJuIHByb3BzO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIFJlbW92ZVNpZ24ge1xyXG4gIGd1aWQ6IHN0cmluZztcclxuICBpZDogbnVtYmVyO1xyXG4gIHR5cGU6IHN0cmluZztcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIENvcHlTaWduIHtcclxuICBndWlkOiBzdHJpbmc7XHJcbiAgaWQ6IG51bWJlcjtcclxuICB0eXBlOiBzdHJpbmc7XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBDb3B5Q2hhbmdlcyB7XHJcbiAgZ3VpZDogc3RyaW5nO1xyXG4gIGlkOiBudW1iZXI7XHJcbiAgd2lkdGg6IG51bWJlcjtcclxuICBoZWlnaHQ6IG51bWJlcjtcclxuICBwb3NpdGlvbjogUG9zaXRpb247XHJcbiAgcHJvcHM6IFNpZ25hdHVyZVByb3BzO1xyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgU3RhbXBDYW52YXNQcm9wcyB7XHJcbiAgaWQ6IG51bWJlcjtcclxuICB0ZXh0OiBzdHJpbmc7XHJcbiAgd2lkdGg6IG51bWJlcjtcclxuICBoZWlnaHQ6IG51bWJlcjtcclxuICB6SW5kZXg6IG51bWJlcjtcclxuICBiYWNrZ3JvdW5kQ29sb3I6IHN0cmluZztcclxuICBzdHJva2VDb2xvcjogc3RyaW5nO1xyXG4gIHN0cm9rZVdpZHRoOiBudW1iZXI7XHJcbiAgZm9udFNpemU6IG51bWJlcjtcclxuICBmb250OiBzdHJpbmc7XHJcbiAgdGV4dENvbG9yOiBzdHJpbmc7XHJcbiAgcmFkaXVzOiBudW1iZXI7XHJcbiAgYm9sZDogYm9vbGVhbjtcclxuICBpdGFsaWM6IGJvb2xlYW47XHJcbiAgdW5kZXJsaW5lOiBib29sZWFuO1xyXG4gIHRleHRFeHBhbnNpb24gPSAwLjE3MztcclxuICB0ZXh0UmVwZWF0ID0gMTtcclxuXHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgfVxyXG5cclxuICBpbml0KGlzTW9iaWxlKSB7XHJcbiAgICB0aGlzLnRleHQgPSBcIlwiO1xyXG4gICAgdGhpcy53aWR0aCA9IGlzTW9iaWxlID8gMTAzIDogMTUzO1xyXG4gICAgdGhpcy5oZWlnaHQgPSBpc01vYmlsZSA/IDEwMyA6IDE1MztcclxuICAgIHRoaXMuekluZGV4ID0gMTA7XHJcbiAgICB0aGlzLmJhY2tncm91bmRDb2xvciA9IFwicmdiKDI1NSwgMjU1LCAyNTUpXCI7XHJcbiAgICB0aGlzLnN0cm9rZUNvbG9yID0gXCJyZ2IoNTEsIDUxLCA1MSlcIjtcclxuICAgIHRoaXMuc3Ryb2tlV2lkdGggPSAxO1xyXG4gICAgdGhpcy5mb250U2l6ZSA9IDE5O1xyXG4gICAgdGhpcy5mb250ID0gXCJBcmlhbFwiO1xyXG4gICAgdGhpcy50ZXh0Q29sb3IgPSBcInJnYig1MSwgNTEsIDUxKVwiO1xyXG4gICAgdGhpcy5yYWRpdXMgPSA3Ni41O1xyXG4gICAgdGhpcy5ib2xkID0gZmFsc2U7XHJcbiAgICB0aGlzLml0YWxpYyA9IGZhbHNlO1xyXG4gICAgdGhpcy51bmRlcmxpbmUgPSBmYWxzZTtcclxuICAgIHJldHVybiB0aGlzO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIEJvcmRlciB7XHJcbiAgcHVibGljIHN0YXRpYyB3aWR0aE9wdGlvbnMoKSB7XHJcbiAgICBjb25zdCByZXQgPSBbXVxyXG4gICAgZm9yIChsZXQgaSA9IDE7IGkgPD0gMTA7IGkrKykge1xyXG4gICAgICByZXQucHVzaCh0aGlzLndpZHRoT3B0aW9uKGkpKTtcclxuICAgIH1cclxuICAgIHJldHVybiByZXQ7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgc3RhdGljIHdpZHRoT3B0aW9uKHdpZHRoOiBudW1iZXIpIHtcclxuICAgIHJldHVybiB7dmFsdWU6IHdpZHRoLCBuYW1lOiB3aWR0aCArICdweCcsIHNlcGFyYXRvcjogZmFsc2V9XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgRG93bmxvYWRzIHtcclxuICBwdWJsaWMgc3RhdGljIG9yaWdpbmFsID0gJ29yaWdpbmFsJztcclxuICBwdWJsaWMgc3RhdGljIHNpZ25lZCA9ICdzaWduZWQnO1xyXG59XHJcbiJdfQ==