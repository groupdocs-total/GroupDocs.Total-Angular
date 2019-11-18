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
        if (data.props && data.props.width && data.props.height) {
            ret.imageWidth = data.props.width;
            ret.imageHeight = data.props.height;
        }
        else {
            ret.imageWidth = data.width;
            ret.imageHeight = data.height;
        }
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2lnbmF0dXJlLW1vZGVscy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bncm91cGRvY3MuZXhhbXBsZXMuYW5ndWxhci9zaWduYXR1cmUvIiwic291cmNlcyI6WyJsaWIvc2lnbmF0dXJlLW1vZGVscy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFDLFVBQVUsRUFBQyxNQUFNLCtDQUErQyxDQUFDO0FBRXpFLE1BQU0sT0FBTyxTQUFTO0NBTXJCOzs7SUFMQyx5QkFBYTs7SUFDYiwwQkFBYzs7SUFDZCx5QkFBYTs7SUFDYix5QkFBYTs7SUFDYiw4QkFBa0I7O0FBR3BCLE1BQU0sT0FBTyxhQUFhOzs7OztJQWNqQixNQUFNLENBQUMsZ0JBQWdCLENBQUMsRUFBVTtRQUN2QyxRQUFRLEVBQUUsRUFBRTtZQUNWLEtBQUssYUFBYSxDQUFDLElBQUksQ0FBQyxFQUFFO2dCQUN4QixPQUFPLGFBQWEsQ0FBQyxJQUFJLENBQUM7WUFDNUIsS0FBSyxhQUFhLENBQUMsS0FBSyxDQUFDLEVBQUU7Z0JBQ3pCLE9BQU8sYUFBYSxDQUFDLEtBQUssQ0FBQztZQUM3QixLQUFLLGFBQWEsQ0FBQyxPQUFPLENBQUMsRUFBRTtnQkFDM0IsT0FBTyxhQUFhLENBQUMsT0FBTyxDQUFDO1lBQy9CLEtBQUssYUFBYSxDQUFDLE9BQU8sQ0FBQyxFQUFFO2dCQUMzQixPQUFPLGFBQWEsQ0FBQyxPQUFPLENBQUM7WUFDL0IsS0FBSyxhQUFhLENBQUMsUUFBUSxDQUFDLEVBQUU7Z0JBQzVCLE9BQU8sYUFBYSxDQUFDLFFBQVEsQ0FBQztZQUNoQyxLQUFLLGFBQWEsQ0FBQyxLQUFLLENBQUMsRUFBRTtnQkFDekIsT0FBTyxhQUFhLENBQUMsS0FBSyxDQUFDO1lBQzdCLEtBQUssYUFBYSxDQUFDLElBQUksQ0FBQyxFQUFFO2dCQUN4QixPQUFPLGFBQWEsQ0FBQyxJQUFJLENBQUM7U0FDN0I7SUFDSCxDQUFDOztBQTlCYSxrQkFBSSxHQUFHLEVBQUMsRUFBRSxFQUFF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S0FBSyxDQUFDO1FBQ3ZCLE9BQU8sbUJBQUEsSUFBSSxFQUFBLENBQUM7SUFDZCxDQUFDO0NBQ0Y7OztJQXRDQyw4QkFBVzs7SUFDWCxnQ0FBYTs7SUFDYixpQ0FBYzs7SUFDZCxrQ0FBZTs7SUFDZixrQ0FBZTs7SUFDZiwyQ0FBd0I7O0lBQ3hCLHVDQUFvQjs7SUFDcEIsdUNBQW9COztJQUNwQixvQ0FBaUI7O0lBQ2pCLGdDQUFhOztJQUNiLHFDQUFrQjs7SUFDbEIsa0NBQWU7O0lBQ2YsZ0NBQWM7O0lBQ2Qsa0NBQWdCOztJQUNoQixxQ0FBbUI7O0lBQ25CLHlDQUFzQjs7SUFDdEIsc0NBQWU7O0FBd0JqQixNQUFNLE9BQU8sTUFBTTs7OztJQUNWLE1BQU0sQ0FBQyxZQUFZOztjQUNsQixHQUFHLEdBQUcsRUFBRTtRQUNkLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsSUFBSSxFQUFFLEVBQUUsQ0FBQyxFQUFFLEVBQUU7WUFDNUIsR0FBRyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7U0FDL0I7UUFDRCxPQUFPLEdBQUcsQ0FBQztJQUNiLENBQUM7Ozs7O0lBRU0sTUFBTSxDQUFDLFdBQVcsQ0FBQyxLQUFhO1FBQ3JDLE9BQU8sRUFBQyxLQUFLLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxLQUFLLEdBQUcsSUFBSSxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUMsQ0FBQTtJQUM3RCxDQUFDO0NBQ0Y7QUFFRCxNQUFNLE9BQU8sU0FBUzs7QUFDTixrQkFBUSxHQUFHLFVBQVUsQ0FBQztBQUN0QixnQkFBTSxHQUFHLFFBQVEsQ0FBQzs7O0lBRGhDLG1CQUFvQzs7SUFDcEMsaUJBQWdDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtGb3JtYXR0aW5nfSBmcm9tIFwiQGdyb3VwZG9jcy5leGFtcGxlcy5hbmd1bGFyL2NvbW1vbi1jb21wb25lbnRzXCI7XG5cbmV4cG9ydCBjbGFzcyBTaWduYXR1cmUge1xuICBndWlkOiBzdHJpbmc7XG4gIGltYWdlOiBzdHJpbmc7XG4gIG5hbWU6IHN0cmluZztcbiAgdGV4dDogc3RyaW5nO1xuICBmb250Q29sb3I6IHN0cmluZztcbn1cblxuZXhwb3J0IGNsYXNzIFNpZ25hdHVyZVR5cGUge1xuICBwdWJsaWMgc3RhdGljIFRFWFQgPSB7aWQ6ICd0ZXh0JywgbmFtZTogJ1RleHQgc2lnbmF0dXJlcycsIGljb246ICdmb250JywgdGl0bGU6ICcnfTtcbiAgcHVibGljIHN0YXRpYyBJTUFHRSA9IHtpZDogJ2ltYWdlJywgbmFtZTogJ1VwbG9hZGVkIEltYWdlcycsIGljb246ICdpbWFnZScsIHRpdGxlOiAnQWRkIGltYWdlIHNpZ25hdHVyZSd9O1xuICBwdWJsaWMgc3RhdGljIFFSX0NPREUgPSB7aWQ6ICdxckNvZGUnLCBuYW1lOiAnUVIgY29kZXMnLCBpY29uOiAncXJjb2RlJywgdGl0bGU6ICdOZXcgUVIgY29kZSd9O1xuICBwdWJsaWMgc3RhdGljIEJBUl9DT0RFID0ge2lkOiAnYmFyQ29kZScsIG5hbWU6ICdCYXIgY29kZXMnLCBpY29uOiAnYmFyY29kZScsIHRpdGxlOiAnTmV3IEJhciBjb2RlJ307XG4gIHB1YmxpYyBzdGF0aWMgRElHSVRBTCA9IHtcbiAgICBpZDogJ2RpZ2l0YWwnLFxuICAgIG5hbWU6ICdEaWdpdGFsIHNpZ25hdHVyZXMnLFxuICAgIGljb246ICdmaW5nZXJwcmludCcsXG4gICAgdGl0bGU6ICdOZXcgZGlnaXRhbCBzaWduYXR1cmUnXG4gIH07XG4gIHB1YmxpYyBzdGF0aWMgU1RBTVAgPSB7aWQ6ICdzdGFtcCcsIG5hbWU6ICdTdGFtcHMnLCBpY29uOiAnc3RhbXAnLCB0aXRsZTogJyd9O1xuICBwdWJsaWMgc3RhdGljIEhBTkQgPSB7aWQ6ICdoYW5kJywgbmFtZTogJ1NpZ25hdHVyZXMnLCBpY29uOiAnc2lnbmF0dXJlJywgdGl0bGU6ICcnfTtcblxuICBwdWJsaWMgc3RhdGljIGdldFNpZ25hdHVyZVR5cGUoaWQ6IHN0cmluZykge1xuICAgIHN3aXRjaCAoaWQpIHtcbiAgICAgIGNhc2UgU2lnbmF0dXJlVHlwZS5URVhULmlkOlxuICAgICAgICByZXR1cm4gU2lnbmF0dXJlVHlwZS5URVhUO1xuICAgICAgY2FzZSBTaWduYXR1cmVUeXBlLklNQUdFLmlkOlxuICAgICAgICByZXR1cm4gU2lnbmF0dXJlVHlwZS5JTUFHRTtcbiAgICAgIGNhc2UgU2lnbmF0dXJlVHlwZS5ESUdJVEFMLmlkOlxuICAgICAgICByZXR1cm4gU2lnbmF0dXJlVHlwZS5ESUdJVEFMO1xuICAgICAgY2FzZSBTaWduYXR1cmVUeXBlLlFSX0NPREUuaWQ6XG4gICAgICAgIHJldHVybiBTaWduYXR1cmVUeXBlLlFSX0NPREU7XG4gICAgICBjYXNlIFNpZ25hdHVyZVR5cGUuQkFSX0NPREUuaWQ6XG4gICAgICAgIHJldHVybiBTaWduYXR1cmVUeXBlLkJBUl9DT0RFO1xuICAgICAgY2FzZSBTaWduYXR1cmVUeXBlLlNUQU1QLmlkOlxuICAgICAgICByZXR1cm4gU2lnbmF0dXJlVHlwZS5TVEFNUDtcbiAgICAgIGNhc2UgU2lnbmF0dXJlVHlwZS5IQU5ELmlkOlxuICAgICAgICByZXR1cm4gU2lnbmF0dXJlVHlwZS5IQU5EO1xuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgRmlsZUxpc3RXaXRoUGFyYW1zIHtcbiAgZmlsZUxpc3Q6IEZpbGVMaXN0O1xuICBzaWduVHlwZTogc3RyaW5nO1xuXG4gIGNvbnN0cnVjdG9yKGZpbGVMaXN0OiBGaWxlTGlzdCwgc2lnblR5cGU6IHN0cmluZykge1xuICAgIHRoaXMuZmlsZUxpc3QgPSBmaWxlTGlzdDtcbiAgICB0aGlzLnNpZ25UeXBlID0gc2lnblR5cGU7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIE9wdGljYWxDb2RlTW9kZWwge1xuICBlbmNvZGVkSW1hZ2U6IHN0cmluZztcbiAgdGV4dDogc3RyaW5nO1xuICB0ZW1wOiBib29sZWFuO1xufVxuXG5leHBvcnQgY2xhc3MgRHJhZ2dhYmxlU2lnbmF0dXJlIHtcbiAgcHVibGljIHN0YXRpYyBURU1QID0gXCJ0ZW1wXCI7XG4gIGd1aWQ6IHN0cmluZztcbiAgdHlwZTogc3RyaW5nO1xuICBwb3NpdGlvbjogUG9zaXRpb247XG4gIHBhZ2VOdW1iZXI6IG51bWJlcjtcbiAgZGlnaXRhbFByb3BzOiBEaWdpdGFsU2lnbjtcbn1cblxuZXhwb3J0IGNsYXNzIFBvc2l0aW9uIHtcbiAgbGVmdDogbnVtYmVyO1xuICB0b3A6IG51bWJlcjtcblxuICBjb25zdHJ1Y3RvcihsZWZ0OiBudW1iZXIsIHRvcDogbnVtYmVyKSB7XG4gICAgdGhpcy5sZWZ0ID0gbGVmdDtcbiAgICB0aGlzLnRvcCA9IHRvcDtcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgU2lnbmF0dXJlRGF0YSB7XG4gIHJlYXNvbjogc3RyaW5nO1xuICBjb250YWN0OiBzdHJpbmc7XG4gIGFkZHJlc3M6IHN0cmluZztcbiAgZGF0ZTogc3RyaW5nO1xuICBzaWduYXR1cmVQYXNzd29yZDogc3RyaW5nO1xuICBzaWduYXR1cmVHdWlkOiBzdHJpbmc7XG4gIHNpZ25hdHVyZVR5cGU6IHN0cmluZztcbiAgcGFnZU51bWJlcjogbnVtYmVyO1xuICBsZWZ0OiBudW1iZXI7XG4gIHRvcDogbnVtYmVyO1xuICBpbWFnZVdpZHRoOiBudW1iZXI7XG4gIGltYWdlSGVpZ2h0OiBudW1iZXI7XG4gIGFuZ2xlOiBudW1iZXI7XG5cbiAgcHVibGljIHN0YXRpYyBtYXAoZGF0YTogQWRkZWRTaWduYXR1cmUsIHR5cGU6IHN0cmluZywgcG9zaXRpb246IFBvc2l0aW9uKSB7XG4gICAgY29uc3QgcmV0ID0gbmV3IFNpZ25hdHVyZURhdGEoKTtcbiAgICByZXQuc2lnbmF0dXJlVHlwZSA9IHR5cGU7XG4gICAgcmV0LnBhZ2VOdW1iZXIgPSBkYXRhLm51bWJlcjtcbiAgICByZXQubGVmdCA9IHBvc2l0aW9uLmxlZnQ7XG4gICAgcmV0LnRvcCA9IHBvc2l0aW9uLnRvcDtcbiAgICByZXQuc2lnbmF0dXJlR3VpZCA9IGRhdGEuZ3VpZDtcbiAgICBpZiAoZGF0YS5wcm9wcyAmJiBkYXRhLnByb3BzLndpZHRoICYmIGRhdGEucHJvcHMuaGVpZ2h0KSB7XG4gICAgICByZXQuaW1hZ2VXaWR0aCA9IGRhdGEucHJvcHMud2lkdGg7XG4gICAgICByZXQuaW1hZ2VIZWlnaHQgPSBkYXRhLnByb3BzLmhlaWdodDtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0LmltYWdlV2lkdGggPSBkYXRhLndpZHRoO1xuICAgICAgcmV0LmltYWdlSGVpZ2h0ID0gZGF0YS5oZWlnaHQ7XG4gICAgfVxuICAgIGlmIChkYXRhLmRpZ2l0YWxQcm9wcykge1xuICAgICAgcmV0LnJlYXNvbiA9IGRhdGEuZGlnaXRhbFByb3BzLnJlYXNvbjtcbiAgICAgIHJldC5jb250YWN0ID0gZGF0YS5kaWdpdGFsUHJvcHMuY29udGFjdDtcbiAgICAgIHJldC5hZGRyZXNzID0gZGF0YS5kaWdpdGFsUHJvcHMuYWRkcmVzcztcbiAgICAgIHJldC5zaWduYXR1cmVQYXNzd29yZCA9IGRhdGEuZGlnaXRhbFByb3BzLnNpZ25hdHVyZVBhc3N3b3JkO1xuICAgICAgcmV0LmRhdGUgPSBkYXRhLmRpZ2l0YWxQcm9wcy5kYXRlO1xuICAgIH1cblxuICAgIHJldHVybiByZXQ7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIERpZ2l0YWxTaWduIHtcbiAgcmVhc29uOiBzdHJpbmc7XG4gIGNvbnRhY3Q6IHN0cmluZztcbiAgYWRkcmVzczogc3RyaW5nO1xuICBkYXRlOiBzdHJpbmc7XG4gIHNpZ25hdHVyZVBhc3N3b3JkOiBzdHJpbmc7XG59XG5cbmV4cG9ydCBjbGFzcyBBZGRlZFNpZ25hdHVyZSB7XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5oZWlnaHQgPSAwO1xuICAgIHRoaXMud2lkdGggPSAwO1xuICB9XG5cbiAgZ3VpZDogc3RyaW5nO1xuICBwcm9wczogU2lnbmF0dXJlUHJvcHM7XG4gIGRhdGE6IHN0cmluZztcbiAgd2lkdGg6IG51bWJlcjtcbiAgaGVpZ2h0OiBudW1iZXI7XG4gIG51bWJlcjogbnVtYmVyO1xuICBkaWdpdGFsUHJvcHM6IERpZ2l0YWxTaWduO1xufVxuXG5leHBvcnQgY2xhc3MgU2lnbmF0dXJlUHJvcHMge1xuICBpbWFnZUd1aWQ6IHN0cmluZztcbiAgdGV4dDogc3RyaW5nO1xuICB3aWR0aDogbnVtYmVyO1xuICBoZWlnaHQ6IG51bWJlcjtcbiAgYm9sZDogYm9vbGVhbjtcbiAgaXRhbGljOiBib29sZWFuO1xuICB1bmRlcmxpbmU6IGJvb2xlYW47XG4gIGZvbnQ6IHN0cmluZztcbiAgZm9udFNpemU6IG51bWJlcjtcbiAgZm9udENvbG9yOiBzdHJpbmc7XG5cbiAgcHVibGljIHN0YXRpYyBnZXREZWZhdWx0KCk6IFNpZ25hdHVyZVByb3BzIHtcbiAgICBjb25zdCBwcm9wcyA9IG5ldyBTaWduYXR1cmVQcm9wcygpO1xuICAgIHByb3BzLnRleHQgPSBcIlwiO1xuICAgIGNvbnN0IGYgPSBGb3JtYXR0aW5nLmRlZmF1bHQoKTtcbiAgICBwcm9wcy5mb250Q29sb3IgPSBmLmNvbG9yO1xuICAgIHByb3BzLmZvbnQgPSBmLmZvbnQ7XG4gICAgcHJvcHMuZm9udFNpemUgPSBmLmZvbnRTaXplO1xuICAgIHByb3BzLnVuZGVybGluZSA9IGYudW5kZXJsaW5lO1xuICAgIHByb3BzLmJvbGQgPSBmLmJvbGQ7XG4gICAgcHJvcHMuaXRhbGljID0gZi5pdGFsaWM7XG4gICAgcmV0dXJuIHByb3BzO1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBSZW1vdmVTaWduIHtcbiAgZ3VpZDogc3RyaW5nO1xuICBpZDogbnVtYmVyO1xuICB0eXBlOiBzdHJpbmc7XG59XG5cbmV4cG9ydCBjbGFzcyBDb3B5U2lnbiB7XG4gIGd1aWQ6IHN0cmluZztcbiAgaWQ6IG51bWJlcjtcbiAgdHlwZTogc3RyaW5nO1xufVxuXG5leHBvcnQgY2xhc3MgQ29weUNoYW5nZXMge1xuICBndWlkOiBzdHJpbmc7XG4gIGlkOiBudW1iZXI7XG4gIHdpZHRoOiBudW1iZXI7XG4gIGhlaWdodDogbnVtYmVyO1xuICBwb3NpdGlvbjogUG9zaXRpb247XG59XG5cbmV4cG9ydCBjbGFzcyBTdGFtcENhbnZhc1Byb3BzIHtcbiAgaWQ6IG51bWJlcjtcbiAgdGV4dDogc3RyaW5nO1xuICB3aWR0aDogbnVtYmVyO1xuICBoZWlnaHQ6IG51bWJlcjtcbiAgekluZGV4OiBudW1iZXI7XG4gIGJhY2tncm91bmRDb2xvcjogc3RyaW5nO1xuICBzdHJva2VDb2xvcjogc3RyaW5nO1xuICBzdHJva2VXaWR0aDogbnVtYmVyO1xuICBmb250U2l6ZTogbnVtYmVyO1xuICBmb250OiBzdHJpbmc7XG4gIHRleHRDb2xvcjogc3RyaW5nO1xuICByYWRpdXM6IG51bWJlcjtcbiAgYm9sZDogYm9vbGVhbjtcbiAgaXRhbGljOiBib29sZWFuO1xuICB1bmRlcmxpbmU6IGJvb2xlYW47XG4gIHRleHRFeHBhbnNpb24gPSAwLjE3MztcbiAgdGV4dFJlcGVhdCA9IDE7XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gIH1cblxuICBpbml0KGlzTW9iaWxlKSB7XG4gICAgdGhpcy50ZXh0ID0gXCJcIjtcbiAgICB0aGlzLndpZHRoID0gaXNNb2JpbGUgPyAxMDMgOiAxNTM7XG4gICAgdGhpcy5oZWlnaHQgPSBpc01vYmlsZSA/IDEwMyA6IDE1MztcbiAgICB0aGlzLnpJbmRleCA9IDEwO1xuICAgIHRoaXMuYmFja2dyb3VuZENvbG9yID0gXCJyZ2IoMjU1LCAyNTUsIDI1NSlcIjtcbiAgICB0aGlzLnN0cm9rZUNvbG9yID0gXCJyZ2IoNTEsIDUxLCA1MSlcIjtcbiAgICB0aGlzLnN0cm9rZVdpZHRoID0gMTtcbiAgICB0aGlzLmZvbnRTaXplID0gMTk7XG4gICAgdGhpcy5mb250ID0gXCJBcmlhbFwiO1xuICAgIHRoaXMudGV4dENvbG9yID0gXCJyZ2IoNTEsIDUxLCA1MSlcIjtcbiAgICB0aGlzLnJhZGl1cyA9IDc2LjU7XG4gICAgdGhpcy5ib2xkID0gZmFsc2U7XG4gICAgdGhpcy5pdGFsaWMgPSBmYWxzZTtcbiAgICB0aGlzLnVuZGVybGluZSA9IGZhbHNlO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBCb3JkZXIge1xuICBwdWJsaWMgc3RhdGljIHdpZHRoT3B0aW9ucygpIHtcbiAgICBjb25zdCByZXQgPSBbXVxuICAgIGZvciAobGV0IGkgPSAxOyBpIDw9IDEwOyBpKyspIHtcbiAgICAgIHJldC5wdXNoKHRoaXMud2lkdGhPcHRpb24oaSkpO1xuICAgIH1cbiAgICByZXR1cm4gcmV0O1xuICB9XG5cbiAgcHVibGljIHN0YXRpYyB3aWR0aE9wdGlvbih3aWR0aDogbnVtYmVyKSB7XG4gICAgcmV0dXJuIHt2YWx1ZTogd2lkdGgsIG5hbWU6IHdpZHRoICsgJ3B4Jywgc2VwYXJhdG9yOiBmYWxzZX1cbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgRG93bmxvYWRzIHtcbiAgcHVibGljIHN0YXRpYyBvcmlnaW5hbCA9ICdvcmlnaW5hbCc7XG4gIHB1YmxpYyBzdGF0aWMgc2lnbmVkID0gJ3NpZ25lZCc7XG59XG4iXX0=