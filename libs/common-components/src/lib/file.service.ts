export class PageModel {
  data: string;
  angle: number;
  width: number;
  height: number;
  number: number;
  editable: boolean;
}

export class RotatedPage {
  pageNumber: number;
  angle: number;
}

export class FileCredentials {
  guid: string;
  password: string;

  constructor(guid: string, password: string) {
    this.guid = guid;
    this.password = password;
  }
}

export class SaveFile extends FileCredentials {
  content: string;

  constructor(guid: string, password: string, content: string) {
    super(guid, password);
    this.content = content;
  }
}

export class FileDescription {
  guid: string;
  pages: PageModel[];
  printAllowed = true;
  showGridLines: boolean;
}

export class FileModel {
  guid: string;
  name: string;
  directory: boolean;
  size: number;
  isDirectory: boolean;
}

export enum FilePropertyCategory {
  BuildIn,
  Default
}

export class FilePropertyModel {
  category: FilePropertyCategory;
  name: string;
  value: any;
  type: number;
  original: boolean;
  selected: boolean;
  editing: boolean;
}

export class HttpError {
  static BadRequest = 400;
  static Unauthorized = 401;
  static Forbidden = 403;
  static NotFound = 404;
  static TimeOut = 408;
  static Conflict = 409;
  static InternalServerError = 500;
}

export class Utils {
  public static getMousePosition(event) {
    const mouse = {
      x: 0,
      y: 0
    };
    const wEvent: DragEvent = <DragEvent>window.event;
    const ev = event || wEvent; //Moz || IE
    if (ev.pageX || wEvent.pageX || wEvent.screenX || (ev.touches && ev.touches[0] && ev.touches[0].pageX)) { //Moz
      const pageX = typeof ev.pageX !== "undefined" && ev.pageX !== 0 ? ev.pageX : wEvent.pageX;
      const pageY = typeof ev.pageY !== "undefined" && ev.pageY !== 0 ? ev.pageY : wEvent.pageY;
      const screenX = typeof wEvent.screenX !== "undefined" && wEvent.screenY !== 0;
      const screenY = typeof wEvent.screenY !== "undefined" && wEvent.screenY !== 0;
      mouse.x = pageX ? pageX : (screenX ? wEvent.screenX : ev.touches[0].pageX);
      mouse.y = pageY ? pageY : (screenY ? wEvent.screenY : ev.touches[0].pageY);
    } else if (ev.clientX) { //IE
      mouse.x = ev.clientX + document.body.scrollLeft;
      mouse.y = ev.clientY + document.body.scrollTop;
    }
    return mouse;
  }
}

export class FileUtil {
  public static map = {
    'folder': {'format': '', 'icon': 'folder'},
    'pdf': {'format': 'Portable Document Format', 'icon': 'file-pdf', 'unit': 'pt'},
    'doc': {'format': 'Microsoft Word', 'icon': 'file-word', 'unit': 'pt'},
    'docx': {'format': 'Microsoft Word', 'icon': 'file-word', 'unit': 'pt'},
    'docm': {'format': 'Microsoft Word', 'icon': 'file-word', 'unit': 'pt'},
    'dot': {'format': 'Microsoft Word', 'icon': 'file-word', 'unit': 'pt'},
    'dotx': {'format': 'Microsoft Word', 'icon': 'file-word', 'unit': 'pt'},
    'dotm': {'format': 'Microsoft Word', 'icon': 'file-word', 'unit': 'pt'},
    'xls': {'format': 'Microsoft Excel', 'icon': 'file-excel', 'unit': 'px'},
    'xlsx': {'format': 'Microsoft Excel', 'icon': 'file-excel', 'unit': 'px'},
    'xlsm': {'format': 'Microsoft Excel', 'icon': 'file-excel', 'unit': 'px'},
    'xlsb': {'format': 'Microsoft Excel', 'icon': 'file-excel', 'unit': 'px'},
    'xls2003': {'format': 'Microsoft Excel', 'icon': 'file-excel', 'unit': 'px'},
    'xltx': {'format': 'Microsoft Excel', 'icon': 'file-excel', 'unit': 'px'},
    'xltm': {'format': 'Microsoft Excel', 'icon': 'file-excel', 'unit': 'px'},
    'ppt': {'format': 'Microsoft PowerPoint', 'icon': 'file-powerpoint', 'unit': 'pt'},
    'pptx': {'format': 'Microsoft PowerPoint', 'icon': 'file-powerpoint', 'unit': 'pt'},
    'pps': {'format': 'Microsoft PowerPoint', 'icon': 'file-powerpoint', 'unit': 'pt'},
    'ppsx': {'format': 'Microsoft PowerPoint', 'icon': 'file-powerpoint', 'unit': 'pt'},
    'vsd': {'format': 'Microsoft Visio', 'icon': 'file-code', 'unit': 'px'},
    'vdx': {'format': 'Microsoft Visio', 'icon': 'file-code', 'unit': 'px'},
    'vss': {'format': 'Microsoft Visio', 'icon': 'file-code', 'unit': 'px'},
    'vsx': {'format': 'Microsoft Visio', 'icon': 'file-code', 'unit': 'px'},
    'vst': {'format': 'Microsoft Visio', 'icon': 'file-code', 'unit': 'px'},
    'vtx': {'format': 'Microsoft Visio', 'icon': 'file-code', 'unit': 'px'},
    'vsdx': {'format': 'Microsoft Visio', 'icon': 'file-code', 'unit': 'px'},
    'vdw': {'format': 'Microsoft Visio', 'icon': 'file-code', 'unit': 'px'},
    'vstx': {'format': 'Microsoft Visio', 'icon': 'file-code', 'unit': 'px'},
    'vssx': {'format': 'Microsoft Visio', 'icon': 'file-code', 'unit': 'px'},
    'mpp': {'format': 'Microsoft Project', 'icon': 'file-alt', 'unit': 'pt'},
    'mpt': {'format': 'Microsoft Project', 'icon': 'file-alt', 'unit': 'pt'},
    'msg': {'format': 'Microsoft Outlook', 'icon': 'file-alt', 'unit': 'pt'},
    'eml': {'format': 'Microsoft Outlook', 'icon': 'file-alt', 'unit': 'pt'},
    'emlx': {'format': 'Microsoft Outlook', 'icon': 'file-alt', 'unit': 'pt'},
    'one': {'format': 'Microsoft OneNote', 'icon': 'file-word', 'unit': 'pt'},
    'odt': {'format': 'Open Document Text', 'icon': 'file-word', 'unit': 'pt'},
    'ott': {'format': 'Open Document Text Template', 'icon': 'file-word', 'unit': 'pt'},
    'ods': {'format': 'Open Document Spreadsheet', 'icon': 'file-excel', 'unit': 'px'},
    'odp': {'format': 'Open Document Presentation', 'icon': 'file-powerpoint', 'unit': 'pt'},
    'otp': {'format': 'Open Document Presentation', 'icon': 'file-powerpoint', 'unit': 'pt'},
    'ots': {'format': 'Open Document Presentation', 'icon': 'file-powerpoint', 'unit': 'pt'},
    'potx': {'format': 'Open Document Presentation', 'icon': 'file-powerpoint', 'unit': 'pt'},
    'potm': {'format': 'Open Document Presentation', 'icon': 'file-powerpoint', 'unit': 'pt'},
    'pptm': {'format': 'Open Document Presentation', 'icon': 'file-powerpoint', 'unit': 'pt'},
    'ppsm': {'format': 'Open Document Presentation', 'icon': 'file-powerpoint', 'unit': 'pt'},
    'rtf': {'format': 'Rich Text Format', 'icon': 'file-alt', 'unit': 'pt'},
    'txt': {'format': 'Plain Text File', 'icon': 'file-alt', 'unit': 'pt'},
    'csv': {'format': 'Comma-Separated Values', 'icon': 'file-excel', 'unit': 'px'},
    'html': {'format': 'HyperText Markup Language', 'icon': 'file-word', 'unit': 'pt'},
    'mht': {'format': 'HyperText Markup Language', 'icon': 'file-word', 'unit': 'pt'},
    'mhtml': {'format': 'HyperText Markup Language', 'icon': 'file-word', 'unit': 'pt'},
    'xml': {'format': 'Extensible Markup Language', 'icon': 'file-word', 'unit': 'pt'},
    'xps': {'format': 'XML Paper Specification', 'icon': 'file-word', 'unit': 'pt'},
    'dxf': {'format': 'AutoCAD Drawing File Format', 'icon': 'file-image', 'unit': 'px'},
    'dwg': {'format': 'AutoCAD Drawing File Format', 'icon': 'file-image', 'unit': 'px'},
    'bmp': {'format': 'Bitmap Picture', 'icon': 'file-image', 'unit': 'px'},
    'gif': {'format': 'Graphics Interchange Format', 'icon': 'file-image', 'unit': 'px'},
    'jpg': {'format': 'Joint Photographic Experts Group', 'icon': 'file-image', 'unit': 'px'},
    'jpe': {'format': 'Joint Photographic Experts Group', 'icon': 'file-image', 'unit': 'px'},
    'jpeg': {'format': 'Joint Photographic Experts Group', 'icon': 'file-image', 'unit': 'px'},
    'jfif': {'format': 'Joint Photographic Experts Group', 'icon': 'file-image', 'unit': 'px'},
    'png': {'format': 'Portable Network Graphics', 'icon': 'file-image', 'unit': 'px'},
    'tiff': {'format': 'Tagged Image File Format', 'icon': 'file-image', 'unit': 'px'},
    'tif': {'format': 'Tagged Image File Format', 'icon': 'file-image', 'unit': 'px'},
    'psd': {'format': 'Tagged Image File Format', 'icon': 'file-image', 'unit': 'px'},
    'svg': {'format': 'Tagged Image File Format', 'icon': 'file-image', 'unit': 'px'},
    'jp2': {'format': 'Tagged Image File Format', 'icon': 'file-image', 'unit': 'px'},
    'epub': {'format': 'Electronic Publication', 'icon': 'file-pdf', 'unit': 'pt'},
    'ico': {'format': 'Windows Icon', 'icon': 'file-image', 'unit': 'px'},
    'webp': {'format': 'Compressed Image', 'icon': 'file-image', 'unit': 'px'},
    'mobi': {'format': 'Mobipocket eBook', 'icon': 'file-pdf', 'unit': 'pt'},
    'tex': {'format': 'LaTeX Source Document', 'icon': 'file-pdf', 'unit': 'pt'},
    'djvu': {'format': 'Multi-Layer Raster Image', 'icon': 'file-alt', 'unit': 'pt'},
    'unknown': {'format': 'This format is not supported', 'icon': 'file'},
  };

  public static find(filename: string, isDirectory: boolean) {
    if (filename && !isDirectory) {
      const strings = filename.split('.');
      const name = strings.pop().toLowerCase();
      if (typeof FileUtil.map[name] === "undefined") {
        return strings.length > 0 ? FileUtil.map['unknown'] : FileUtil.map['folder'];
      } else {
        return FileUtil.map[name];
      }
    } else {
      return FileUtil.map['folder'];
    }
  }
}

export class FileService {

  constructor() {
  }
}
