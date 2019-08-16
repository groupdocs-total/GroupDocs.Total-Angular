export class Signature {
  guid: string;
  image: string;
  name: string;
  text: string;
}

export class SignatureType {
  public static TEXT = {id: 'text', name: 'Texts', icon: 'font'};
  public static IMAGE = {id: 'image', name: 'Uploaded Images', icon: 'image'};
  public static QR_CODE = {id: 'qrCode', name: 'QR codes', icon: 'qrcode'};
  public static BAR_CODE = {id: 'barCode', name: 'Bar codes', icon: 'barcode'};
  public static DIGITAL = {id: 'digital', name: 'Digital signatures', icon: 'fingerprint'};
  public static STAMP = {id: 'stamp', name: 'Stamps', icon: 'stamp'};
  public static HAND = {id: 'hand', name: 'Signatures', icon: 'signature'};
}
