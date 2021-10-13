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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2lnbmF0dXJlLW1vZGVscy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bncm91cGRvY3MuZXhhbXBsZXMuYW5ndWxhci9zaWduYXR1cmUvIiwic291cmNlcyI6WyJsaWIvc2lnbmF0dXJlLW1vZGVscy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFDLFVBQVUsRUFBQyxNQUFNLCtDQUErQyxDQUFDO0FBRXpFLE1BQU0sT0FBTyxTQUFTO0NBTXJCOzs7SUFMQyx5QkFBYTs7SUFDYiwwQkFBYzs7SUFDZCx5QkFBYTs7SUFDYix5QkFBYTs7SUFDYiw4QkFBa0I7O0FBR3BCLE1BQU0sT0FBTyxhQUFhOzs7OztJQWNqQixNQUFNLENBQUMsZ0JBQWdCLENBQUMsRUFBVTtRQUN2QyxRQUFRLEVBQUUsRUFBRTtZQUNWLEtBQUssYUFBYSxDQUFDLElBQUksQ0FBQyxFQUFFO2dCQUN4QixPQUFPLGFBQWEsQ0FBQyxJQUFJLENBQUM7WUFDNUIsS0FBSyxhQUFhLENBQUMsS0FBSyxDQUFDLEVBQUU7Z0JBQ3pCLE9BQU8sYUFBYSxDQUFDLEtBQUssQ0FBQztZQUM3QixLQUFLLGFBQWEsQ0FBQyxPQUFPLENBQUMsRUFBRTtnQkFDM0IsT0FBTyxhQUFhLENBQUMsT0FBTyxDQUFDO1lBQy9CLEtBQUssYUFBYSxDQUFDLE9BQU8sQ0FBQyxFQUFFO2dCQUMzQixPQUFPLGFBQWEsQ0FBQyxPQUFPLENBQUM7WUFDL0IsS0FBSyxhQUFhLENBQUMsUUFBUSxDQUFDLEVBQUU7Z0JBQzVCLE9BQU8sYUFBYSxDQUFDLFFBQVEsQ0FBQztZQUNoQyxLQUFLLGFBQWEsQ0FBQyxLQUFLLENBQUMsRUFBRTtnQkFDekIsT0FBTyxhQUFhLENBQUMsS0FBSyxDQUFDO1lBQzdCLEtBQUssYUFBYSxDQUFDLElBQUksQ0FBQyxFQUFFO2dCQUN4QixPQUFPLGFBQWEsQ0FBQyxJQUFJLENBQUM7U0FDN0I7SUFDSCxDQUFDOztBQTlCYSxrQkFBSSxHQUFHLEVBQUMsRUFBRSxFQUFF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bEIsa0NBQWU7O0lBQ2YsZ0NBQWM7O0lBQ2Qsa0NBQWdCOztJQUNoQixxQ0FBbUI7O0lBQ25CLHlDQUFzQjs7SUFDdEIsc0NBQWU7O0FBd0JqQixNQUFNLE9BQU8sTUFBTTs7OztJQUNWLE1BQU0sQ0FBQyxZQUFZOztjQUNsQixHQUFHLEdBQUcsRUFBRTtRQUNkLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsSUFBSSxFQUFFLEVBQUUsQ0FBQyxFQUFFLEVBQUU7WUFDNUIsR0FBRyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7U0FDL0I7UUFDRCxPQUFPLEdBQUcsQ0FBQztJQUNiLENBQUM7Ozs7O0lBRU0sTUFBTSxDQUFDLFdBQVcsQ0FBQyxLQUFhO1FBQ3JDLE9BQU8sRUFBQyxLQUFLLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxLQUFLLEdBQUcsSUFBSSxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUMsQ0FBQTtJQUM3RCxDQUFDO0NBQ0Y7QUFFRCxNQUFNLE9BQU8sU0FBUzs7QUFDTixrQkFBUSxHQUFHLFVBQVUsQ0FBQztBQUN0QixnQkFBTSxHQUFHLFFBQVEsQ0FBQzs7O0lBRGhDLG1CQUFvQzs7SUFDcEMsaUJBQWdDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtGb3JtYXR0aW5nfSBmcm9tIFwiQGdyb3VwZG9jcy5leGFtcGxlcy5hbmd1bGFyL2NvbW1vbi1jb21wb25lbnRzXCI7XG5cbmV4cG9ydCBjbGFzcyBTaWduYXR1cmUge1xuICBndWlkOiBzdHJpbmc7XG4gIGltYWdlOiBzdHJpbmc7XG4gIG5hbWU6IHN0cmluZztcbiAgdGV4dDogc3RyaW5nO1xuICBmb250Q29sb3I6IHN0cmluZztcbn1cblxuZXhwb3J0IGNsYXNzIFNpZ25hdHVyZVR5cGUge1xuICBwdWJsaWMgc3RhdGljIFRFWFQgPSB7aWQ6ICd0ZXh0JywgbmFtZTogJ1RleHQgc2lnbmF0dXJlcycsIGljb246ICdmb250JywgdGl0bGU6ICcnfTtcbiAgcHVibGljIHN0YXRpYyBJTUFHRSA9IHtpZDogJ2ltYWdlJywgbmFtZTogJ1VwbG9hZGVkIEltYWdlcycsIGljb246ICdpbWFnZScsIHRpdGxlOiAnQWRkIGltYWdlIHNpZ25hdHVyZSd9O1xuICBwdWJsaWMgc3RhdGljIFFSX0NPREUgPSB7aWQ6ICdxckNvZGUnLCBuYW1lOiAnUVIgY29kZXMnLCBpY29uOiAncXJjb2RlJywgdGl0bGU6ICdOZXcgUVIgY29kZSd9O1xuICBwdWJsaWMgc3RhdGljIEJBUl9DT0RFID0ge2lkOiAnYmFyQ29kZScsIG5hbWU6ICdCYXIgY29kZXMnLCBpY29uOiAnYmFyY29kZScsIHRpdGxlOiAnTmV3IEJhciBjb2RlJ307XG4gIHB1YmxpYyBzdGF0aWMgRElHSVRBTCA9IHtcbiAgICBpZDogJ2RpZ2l0YWwnLFxuICAgIG5hbWU6ICdEaWdpdGFsIHNpZ25hdHVyZXMnLFxuICAgIGljb246ICdmaW5nZXJwcmludCcsXG4gICAgdGl0bGU6ICdOZXcgZGlnaXRhbCBzaWduYXR1cmUnXG4gIH07XG4gIHB1YmxpYyBzdGF0aWMgU1RBTVAgPSB7aWQ6ICdzdGFtcCcsIG5hbWU6ICdTdGFtcHMnLCBpY29uOiAnc3RhbXAnLCB0aXRsZTogJyd9O1xuICBwdWJsaWMgc3RhdGljIEhBTkQgPSB7aWQ6ICdoYW5kJywgbmFtZTogJ1NpZ25hdHVyZXMnLCBpY29uOiAnc2lnbmF0dXJlJywgdGl0bGU6ICcnfTtcblxuICBwdWJsaWMgc3RhdGljIGdldFNpZ25hdHVyZVR5cGUoaWQ6IHN0cmluZykge1xuICAgIHN3aXRjaCAoaWQpIHtcbiAgICAgIGNhc2UgU2lnbmF0dXJlVHlwZS5URVhULmlkOlxuICAgICAgICByZXR1cm4gU2lnbmF0dXJlVHlwZS5URVhUO1xuICAgICAgY2FzZSBTaWduYXR1cmVUeXBlLklNQUdFLmlkOlxuICAgICAgICByZXR1cm4gU2lnbmF0dXJlVHlwZS5JTUFHRTtcbiAgICAgIGNhc2UgU2lnbmF0dXJlVHlwZS5ESUdJVEFMLmlkOlxuICAgICAgICByZXR1cm4gU2lnbmF0dXJlVHlwZS5ESUdJVEFMO1xuICAgICAgY2FzZSBTaWduYXR1cmVUeXBlLlFSX0NPREUuaWQ6XG4gICAgICAgIHJldHVybiBTaWduYXR1cmVUeXBlLlFSX0NPREU7XG4gICAgICBjYXNlIFNpZ25hdHVyZVR5cGUuQkFSX0NPREUuaWQ6XG4gICAgICAgIHJldHVybiBTaWduYXR1cmVUeXBlLkJBUl9DT0RFO1xuICAgICAgY2FzZSBTaWduYXR1cmVUeXBlLlNUQU1QLmlkOlxuICAgICAgICByZXR1cm4gU2lnbmF0dXJlVHlwZS5TVEFNUDtcbiAgICAgIGNhc2UgU2lnbmF0dXJlVHlwZS5IQU5ELmlkOlxuICAgICAgICByZXR1cm4gU2lnbmF0dXJlVHlwZS5IQU5EO1xuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgRmlsZUxpc3RXaXRoUGFyYW1zIHtcbiAgZmlsZUxpc3Q6IEZpbGVMaXN0O1xuICBzaWduVHlwZTogc3RyaW5nO1xuXG4gIGNvbnN0cnVjdG9yKGZpbGVMaXN0OiBGaWxlTGlzdCwgc2lnblR5cGU6IHN0cmluZykge1xuICAgIHRoaXMuZmlsZUxpc3QgPSBmaWxlTGlzdDtcbiAgICB0aGlzLnNpZ25UeXBlID0gc2lnblR5cGU7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIE9wdGljYWxDb2RlTW9kZWwge1xuICBlbmNvZGVkSW1hZ2U6IHN0cmluZztcbiAgdGV4dDogc3RyaW5nO1xuICB0ZW1wOiBib29sZWFuO1xufVxuXG5leHBvcnQgY2xhc3MgRHJhZ2dhYmxlU2lnbmF0dXJlIHtcbiAgcHVibGljIHN0YXRpYyBURU1QID0gXCJ0ZW1wXCI7XG4gIGd1aWQ6IHN0cmluZztcbiAgdHlwZTogc3RyaW5nO1xuICBwb3NpdGlvbjogUG9zaXRpb247XG4gIHBhZ2VOdW1iZXI6IG51bWJlcjtcbiAgZGlnaXRhbFByb3BzOiBEaWdpdGFsU2lnbjtcbn1cblxuZXhwb3J0IGNsYXNzIFBvc2l0aW9uIHtcbiAgbGVmdDogbnVtYmVyO1xuICB0b3A6IG51bWJlcjtcblxuICBjb25zdHJ1Y3RvcihsZWZ0OiBudW1iZXIsIHRvcDogbnVtYmVyKSB7XG4gICAgdGhpcy5sZWZ0ID0gbGVmdDtcbiAgICB0aGlzLnRvcCA9IHRvcDtcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgU2lnbmF0dXJlRGF0YSB7XG4gIHJlYXNvbjogc3RyaW5nO1xuICBjb250YWN0OiBzdHJpbmc7XG4gIGFkZHJlc3M6IHN0cmluZztcbiAgZGF0ZTogc3RyaW5nO1xuICBzaWduYXR1cmVQYXNzd29yZDogc3RyaW5nO1xuICBzaWduYXR1cmVHdWlkOiBzdHJpbmc7XG4gIHNpZ25hdHVyZVR5cGU6IHN0cmluZztcbiAgcGFnZU51bWJlcjogbnVtYmVyO1xuICBsZWZ0OiBudW1iZXI7XG4gIHRvcDogbnVtYmVyO1xuICBpbWFnZVdpZHRoOiBudW1iZXI7XG4gIGltYWdlSGVpZ2h0OiBudW1iZXI7XG4gIGFuZ2xlOiBudW1iZXI7XG5cbiAgcHVibGljIHN0YXRpYyBtYXAoZGF0YTogQWRkZWRTaWduYXR1cmUsIHR5cGU6IHN0cmluZywgcG9zaXRpb246IFBvc2l0aW9uKSB7XG4gICAgY29uc3QgcmV0ID0gbmV3IFNpZ25hdHVyZURhdGEoKTtcbiAgICByZXQuc2lnbmF0dXJlVHlwZSA9IHR5cGU7XG4gICAgcmV0LnBhZ2VOdW1iZXIgPSBkYXRhLm51bWJlcjtcbiAgICByZXQubGVmdCA9IHBvc2l0aW9uLmxlZnQ7XG4gICAgcmV0LnRvcCA9IHBvc2l0aW9uLnRvcDtcbiAgICByZXQuc2lnbmF0dXJlR3VpZCA9IGRhdGEuZ3VpZDtcbiAgICByZXQuaW1hZ2VXaWR0aCA9IGRhdGEud2lkdGg7XG4gICAgcmV0LmltYWdlSGVpZ2h0ID0gZGF0YS5oZWlnaHQ7XG4gICAgaWYgKGRhdGEuZGlnaXRhbFByb3BzKSB7XG4gICAgICByZXQucmVhc29uID0gZGF0YS5kaWdpdGFsUHJvcHMucmVhc29uO1xuICAgICAgcmV0LmNvbnRhY3QgPSBkYXRhLmRpZ2l0YWxQcm9wcy5jb250YWN0O1xuICAgICAgcmV0LmFkZHJlc3MgPSBkYXRhLmRpZ2l0YWxQcm9wcy5hZGRyZXNzO1xuICAgICAgcmV0LnNpZ25hdHVyZVBhc3N3b3JkID0gZGF0YS5kaWdpdGFsUHJvcHMuc2lnbmF0dXJlUGFzc3dvcmQ7XG4gICAgICByZXQuZGF0ZSA9IGRhdGEuZGlnaXRhbFByb3BzLmRhdGU7XG4gICAgfVxuXG4gICAgcmV0dXJuIHJldDtcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgRGlnaXRhbFNpZ24ge1xuICByZWFzb246IHN0cmluZztcbiAgY29udGFjdDogc3RyaW5nO1xuICBhZGRyZXNzOiBzdHJpbmc7XG4gIGRhdGU6IHN0cmluZztcbiAgc2lnbmF0dXJlUGFzc3dvcmQ6IHN0cmluZztcbn1cblxuZXhwb3J0IGNsYXNzIEFkZGVkU2lnbmF0dXJlIHtcblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLmhlaWdodCA9IDA7XG4gICAgdGhpcy53aWR0aCA9IDA7XG4gIH1cblxuICBndWlkOiBzdHJpbmc7XG4gIHByb3BzOiBTaWduYXR1cmVQcm9wcztcbiAgZGF0YTogc3RyaW5nO1xuICB3aWR0aDogbnVtYmVyO1xuICBoZWlnaHQ6IG51bWJlcjtcbiAgbnVtYmVyOiBudW1iZXI7XG4gIGRpZ2l0YWxQcm9wczogRGlnaXRhbFNpZ247XG59XG5cbmV4cG9ydCBjbGFzcyBTaWduYXR1cmVQcm9wcyB7XG4gIGltYWdlR3VpZDogc3RyaW5nO1xuICB0ZXh0OiBzdHJpbmc7XG4gIHdpZHRoOiBudW1iZXI7XG4gIGhlaWdodDogbnVtYmVyO1xuICBib2xkOiBib29sZWFuO1xuICBpdGFsaWM6IGJvb2xlYW47XG4gIHVuZGVybGluZTogYm9vbGVhbjtcbiAgZm9udDogc3RyaW5nO1xuICBmb250U2l6ZTogbnVtYmVyO1xuICBmb250Q29sb3I6IHN0cmluZztcblxuICBwdWJsaWMgc3RhdGljIGdldERlZmF1bHQoKTogU2lnbmF0dXJlUHJvcHMge1xuICAgIGNvbnN0IHByb3BzID0gbmV3IFNpZ25hdHVyZVByb3BzKCk7XG4gICAgcHJvcHMudGV4dCA9IFwiXCI7XG4gICAgY29uc3QgZiA9IEZvcm1hdHRpbmcuZGVmYXVsdCgpO1xuICAgIHByb3BzLmZvbnRDb2xvciA9IGYuY29sb3I7XG4gICAgcHJvcHMuZm9udCA9IGYuZm9udDtcbiAgICBwcm9wcy5mb250U2l6ZSA9IGYuZm9udFNpemU7XG4gICAgcHJvcHMudW5kZXJsaW5lID0gZi51bmRlcmxpbmU7XG4gICAgcHJvcHMuYm9sZCA9IGYuYm9sZDtcbiAgICBwcm9wcy5pdGFsaWMgPSBmLml0YWxpYztcbiAgICByZXR1cm4gcHJvcHM7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIFJlbW92ZVNpZ24ge1xuICBndWlkOiBzdHJpbmc7XG4gIGlkOiBudW1iZXI7XG4gIHR5cGU6IHN0cmluZztcbn1cblxuZXhwb3J0IGNsYXNzIENvcHlTaWduIHtcbiAgZ3VpZDogc3RyaW5nO1xuICBpZDogbnVtYmVyO1xuICB0eXBlOiBzdHJpbmc7XG59XG5cbmV4cG9ydCBjbGFzcyBDb3B5Q2hhbmdlcyB7XG4gIGd1aWQ6IHN0cmluZztcbiAgaWQ6IG51bWJlcjtcbiAgd2lkdGg6IG51bWJlcjtcbiAgaGVpZ2h0OiBudW1iZXI7XG4gIHBvc2l0aW9uOiBQb3NpdGlvbjtcbiAgcHJvcHM6IFNpZ25hdHVyZVByb3BzO1xufVxuXG5leHBvcnQgY2xhc3MgU3RhbXBDYW52YXNQcm9wcyB7XG4gIGlkOiBudW1iZXI7XG4gIHRleHQ6IHN0cmluZztcbiAgd2lkdGg6IG51bWJlcjtcbiAgaGVpZ2h0OiBudW1iZXI7XG4gIHpJbmRleDogbnVtYmVyO1xuICBiYWNrZ3JvdW5kQ29sb3I6IHN0cmluZztcbiAgc3Ryb2tlQ29sb3I6IHN0cmluZztcbiAgc3Ryb2tlV2lkdGg6IG51bWJlcjtcbiAgZm9udFNpemU6IG51bWJlcjtcbiAgZm9udDogc3RyaW5nO1xuICB0ZXh0Q29sb3I6IHN0cmluZztcbiAgcmFkaXVzOiBudW1iZXI7XG4gIGJvbGQ6IGJvb2xlYW47XG4gIGl0YWxpYzogYm9vbGVhbjtcbiAgdW5kZXJsaW5lOiBib29sZWFuO1xuICB0ZXh0RXhwYW5zaW9uID0gMC4xNzM7XG4gIHRleHRSZXBlYXQgPSAxO1xuXG4gIGNvbnN0cnVjdG9yKCkge1xuICB9XG5cbiAgaW5pdChpc01vYmlsZSkge1xuICAgIHRoaXMudGV4dCA9IFwiXCI7XG4gICAgdGhpcy53aWR0aCA9IGlzTW9iaWxlID8gMTAzIDogMTUzO1xuICAgIHRoaXMuaGVpZ2h0ID0gaXNNb2JpbGUgPyAxMDMgOiAxNTM7XG4gICAgdGhpcy56SW5kZXggPSAxMDtcbiAgICB0aGlzLmJhY2tncm91bmRDb2xvciA9IFwicmdiKDI1NSwgMjU1LCAyNTUpXCI7XG4gICAgdGhpcy5zdHJva2VDb2xvciA9IFwicmdiKDUxLCA1MSwgNTEpXCI7XG4gICAgdGhpcy5zdHJva2VXaWR0aCA9IDE7XG4gICAgdGhpcy5mb250U2l6ZSA9IDE5O1xuICAgIHRoaXMuZm9udCA9IFwiQXJpYWxcIjtcbiAgICB0aGlzLnRleHRDb2xvciA9IFwicmdiKDUxLCA1MSwgNTEpXCI7XG4gICAgdGhpcy5yYWRpdXMgPSA3Ni41O1xuICAgIHRoaXMuYm9sZCA9IGZhbHNlO1xuICAgIHRoaXMuaXRhbGljID0gZmFsc2U7XG4gICAgdGhpcy51bmRlcmxpbmUgPSBmYWxzZTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgQm9yZGVyIHtcbiAgcHVibGljIHN0YXRpYyB3aWR0aE9wdGlvbnMoKSB7XG4gICAgY29uc3QgcmV0ID0gW11cbiAgICBmb3IgKGxldCBpID0gMTsgaSA8PSAxMDsgaSsrKSB7XG4gICAgICByZXQucHVzaCh0aGlzLndpZHRoT3B0aW9uKGkpKTtcbiAgICB9XG4gICAgcmV0dXJuIHJldDtcbiAgfVxuXG4gIHB1YmxpYyBzdGF0aWMgd2lkdGhPcHRpb24od2lkdGg6IG51bWJlcikge1xuICAgIHJldHVybiB7dmFsdWU6IHdpZHRoLCBuYW1lOiB3aWR0aCArICdweCcsIHNlcGFyYXRvcjogZmFsc2V9XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIERvd25sb2FkcyB7XG4gIHB1YmxpYyBzdGF0aWMgb3JpZ2luYWwgPSAnb3JpZ2luYWwnO1xuICBwdWJsaWMgc3RhdGljIHNpZ25lZCA9ICdzaWduZWQnO1xufVxuIl19