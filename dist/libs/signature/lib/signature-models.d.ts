export declare class Signature {
    guid: string;
    image: string;
    name: string;
    text: string;
    fontColor: string;
}
export declare class SignatureType {
    static TEXT: {
        id: string;
        name: string;
        icon: string;
        title: string;
    };
    static IMAGE: {
        id: string;
        name: string;
        icon: string;
        title: string;
    };
    static QR_CODE: {
        id: string;
        name: string;
        icon: string;
        title: string;
    };
    static BAR_CODE: {
        id: string;
        name: string;
        icon: string;
        title: string;
    };
    static DIGITAL: {
        id: string;
        name: string;
        icon: string;
        title: string;
    };
    static STAMP: {
        id: string;
        name: string;
        icon: string;
        title: string;
    };
    static HAND: {
        id: string;
        name: string;
        icon: string;
        title: string;
    };
    static getSignatureType(id: string): {
        id: string;
        name: string;
        icon: string;
        title: string;
    };
}
export declare class FileListWithParams {
    fileList: FileList;
    signType: string;
    constructor(fileList: FileList, signType: string);
}
export declare class OpticalCodeModel {
    encodedImage: string;
    text: string;
    temp: boolean;
}
export declare class DraggableSignature {
    static TEMP: string;
    guid: string;
    type: string;
    position: Position;
    pageNumber: number;
    digitalProps: DigitalSign;
}
export declare class Position {
    left: number;
    top: number;
    constructor(left: number, top: number);
}
export declare class SignatureData {
    reason: string;
    contact: string;
    address: string;
    date: string;
    signaturePassword: string;
    signatureGuid: string;
    signatureType: string;
    pageNumber: number;
    left: number;
    top: number;
    imageWidth: number;
    imageHeight: number;
    angle: number;
    static map(data: AddedSignature, type: string, position: Position): SignatureData;
}
export declare class DigitalSign {
    reason: string;
    contact: string;
    address: string;
    date: string;
    signaturePassword: string;
}
export declare class AddedSignature {
    constructor();
    guid: string;
    props: SignatureProps;
    data: string;
    width: number;
    height: number;
    number: number;
    digitalProps: DigitalSign;
}
export declare class SignatureProps {
    imageGuid: string;
    text: string;
    width: number;
    height: number;
    bold: boolean;
    italic: boolean;
    underline: boolean;
    font: string;
    fontSize: number;
    fontColor: string;
    static getDefault(): SignatureProps;
}
export declare class RemoveSign {
    guid: string;
    id: number;
    type: string;
}
export declare class CopySign {
    guid: string;
    id: number;
    type: string;
}
export declare class CopyChanges {
    guid: string;
    id: number;
    width: number;
    height: number;
    position: Position;
    props: SignatureProps;
}
export declare class StampCanvasProps {
    id: number;
    text: string;
    width: number;
    height: number;
    zIndex: number;
    backgroundColor: string;
    strokeColor: string;
    strokeWidth: number;
    fontSize: number;
    font: string;
    textColor: string;
    radius: number;
    bold: boolean;
    italic: boolean;
    underline: boolean;
    textExpansion: number;
    textRepeat: number;
    constructor();
    init(isMobile: any): this;
}
export declare class Border {
    static widthOptions(): any[];
    static widthOption(width: number): {
        value: number;
        name: string;
        separator: boolean;
    };
}
export declare class Downloads {
    static original: string;
    static signed: string;
}
