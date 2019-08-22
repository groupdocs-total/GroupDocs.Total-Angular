export class Signature {
  guid: string;
  image: string;
  name: string;
  text: string;
}

export class SignatureType {
  public static TEXT = {id: 'text', name: 'Texts', icon: 'font', title: ''};
  public static IMAGE = {id: 'image', name: 'Uploaded Images', icon: 'image', title: 'New image signature'};
  public static QR_CODE = {id: 'qrCode', name: 'QR codes', icon: 'qrcode', title: 'New QR code'};
  public static BAR_CODE = {id: 'barCode', name: 'Bar codes', icon: 'barcode', title: 'New Bar code'};
  public static DIGITAL = {
    id: 'digital',
    name: 'Digital signatures',
    icon: 'fingerprint',
    title: 'New digital signature'
  };
  public static STAMP = {id: 'stamp', name: 'Stamps', icon: 'stamp', title: ''};
  public static HAND = {id: 'hand', name: 'Signatures', icon: 'signature', title: ''};

  public static getSignatureType(id: string) {
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

export class FileListWithParams {
  fileList: FileList;
  signType: string;

  constructor(fileList: FileList, signType: string) {
    this.fileList = fileList;
    this.signType = signType;
  }
}

export class OpticalCodeModel {
  encodedImage: string;
  text: string;
  temp: boolean;
}

export class DraggableSignature {
  guid: string;
  type: string;
  position: Position;
  pageNumber: number;
}

export class Position {
  left: number;
  top: number;

  constructor(left: number, top: number) {
    this.left = left;
    this.top = top;
  }
}

export class AddedSignature {
  props: SignatureProps;
  data: string;
  width: number;
  height: number;
}

export class SignatureProps {
  imageGuid: string;
  text: string;
  width: number;
  height: number;
}

export class Utils {
  public static getMousePosition(event) {
    const mouse = {
      x: 0,
      y: 0
    };
    const ev = event || window.event; //Moz || IE
    if (ev.pageX || ev.touches[0].pageX) { //Moz
      mouse.x = (typeof ev.pageX !== "undefined" && ev.pageX !== 0) ? ev.pageX : ev.touches[0].pageX;
      mouse.y = (typeof ev.pageY !== "undefined" && ev.pageY !== 0) ? ev.pageY : ev.touches[0].pageY;
    } else if (ev.clientX) { //IE
      mouse.x = ev.clientX + document.body.scrollLeft;
      mouse.y = ev.clientY + document.body.scrollTop;
    }
    return mouse;
  }
}
