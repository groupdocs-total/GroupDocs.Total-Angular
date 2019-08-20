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
