export class Signature {
  guid: string;
  image: string;
  name: string;
  text: string;
  fontColor: string;
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

export class SignatureData {
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

  public static map(data: AddedSignature, type: string, position: Position) {
    const ret = new SignatureData();
    //ret.reason = data.
    //ret.contact = data.
    //ret.address = data.
    //ret.signaturePassword
    //ret.angle = data.props.
    //ret.date = new Date().toString();
    ret.signatureType = type;
    ret.pageNumber = data.number + 1;
    ret.left = position.left;
    ret.top = position.top;
    ret.signatureGuid = data.guid;
    if (data.props) {
      ret.imageWidth = data.props.width;
      ret.imageHeight = data.props.height;
    }

    return ret;
  }
}

export class AddedSignature {
  guid: string
  props: SignatureProps;
  data: string;
  width: number;
  height: number;
  number: number;
}

export class SignatureProps {
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
}

export class Utils {
  public static getMousePosition(event) {
    const mouse = {
      x: 0,
      y: 0
    };
    const ev = event || window.event; //Moz || IE
    if (ev.pageX || (ev.touches && ev.touches[0] && ev.touches[0].pageX)) { //Moz
      mouse.x = (typeof ev.pageX !== "undefined" && ev.pageX !== 0) ? ev.pageX : ev.touches[0].pageX;
      mouse.y = (typeof ev.pageY !== "undefined" && ev.pageY !== 0) ? ev.pageY : ev.touches[0].pageY;
    } else if (ev.clientX) { //IE
      mouse.x = ev.clientX + document.body.scrollLeft;
      mouse.y = ev.clientY + document.body.scrollTop;
    }
    return mouse;
  }
}

export class StampCanvasProps {
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
  textExpansion = 0.173;
  textRepeat = 1;

  constructor() {
  }

  init(isMobile) {
    this.text = "";
    this.width = isMobile ? 103 : 153;
    this.height = isMobile ? 103 : 153;
    this.zIndex = 10;
    this.backgroundColor = "rgb(255, 255, 255)";
    this.strokeColor = "rgb(51, 51, 51)";
    this.strokeWidth = 1;
    this.fontSize = 19;
    this.font = "Arial";
    this.textColor = "rgb(51, 51, 51)";
    this.radius = 76.5;
    this.bold = false;
    this.italic = false;
    this.underline = false;
  }
}

export class Border {
  public static widthOptions() {
    const ret = []
    for (let i = 1; i <= 10; i++) {
      ret.push(this.widthOption(i));
    }
    return ret;
  }

  public static widthOption(width: number) {
    return {value: width, name: width + 'px', separator: false}
  }
}

export class Downloads {
  public static original = 'original';
  public static signed = 'signed';
}
