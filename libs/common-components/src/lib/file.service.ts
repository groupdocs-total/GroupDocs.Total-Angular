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
}

export class FileModel {
  guid: string;
  name: string;
  directory: boolean;
  size: number;
  isDirectory: boolean;
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

export class FileUtil {
  public static map = {
    'folder': {'format': '', 'icon': 'folder'},
    'pdf': {'format': 'Portable Document Format', 'icon': 'file-pdf'},
    'doc': {'format': 'Microsoft Word', 'icon': 'file-word'},
    'docx': {'format': 'Microsoft Word', 'icon': 'file-word'},
    'docm': {'format': 'Microsoft Word', 'icon': 'file-word'},
    'dot': {'format': 'Microsoft Word', 'icon': 'file-word'},
    'dotx': {'format': 'Microsoft Word', 'icon': 'file-word'},
    'dotm': {'format': 'Microsoft Word', 'icon': 'file-word'},
    'xls': {'format': 'Microsoft Excel', 'icon': 'file-excel'},
    'xlsx': {'format': 'Microsoft Excel', 'icon': 'file-excel'},
    'xlsm': {'format': 'Microsoft Excel', 'icon': 'file-excel'},
    'xlsb': {'format': 'Microsoft Excel', 'icon': 'file-excel'},
    'xls2003': {'format': 'Microsoft Excel', 'icon': 'file-excel'},
    'xltx': {'format': 'Microsoft Excel', 'icon': 'file-excel'},
    'xltm': {'format': 'Microsoft Excel', 'icon': 'file-excel'},
    'ppt': {'format': 'Microsoft PowerPoint', 'icon': 'file-powerpoint'},
    'pptx': {'format': 'Microsoft PowerPoint', 'icon': 'file-powerpoint'},
    'pps': {'format': 'Microsoft PowerPoint', 'icon': 'file-powerpoint'},
    'ppsx': {'format': 'Microsoft PowerPoint', 'icon': 'file-powerpoint'},
    'vsd': {'format': 'Microsoft Visio', 'icon': 'file-code'},
    'vdx': {'format': 'Microsoft Visio', 'icon': 'file-code'},
    'vss': {'format': 'Microsoft Visio', 'icon': 'file-code'},
    'vsx': {'format': 'Microsoft Visio', 'icon': 'file-code'},
    'vst': {'format': 'Microsoft Visio', 'icon': 'file-code'},
    'vtx': {'format': 'Microsoft Visio', 'icon': 'file-code'},
    'vsdx': {'format': 'Microsoft Visio', 'icon': 'file-code'},
    'vdw': {'format': 'Microsoft Visio', 'icon': 'file-code'},
    'vstx': {'format': 'Microsoft Visio', 'icon': 'file-code'},
    'vssx': {'format': 'Microsoft Visio', 'icon': 'file-code'},
    'mpp': {'format': 'Microsoft Project', 'icon': 'file-alt'},
    'mpt': {'format': 'Microsoft Project', 'icon': 'file-alt'},
    'msg': {'format': 'Microsoft Outlook', 'icon': 'file-alt'},
    'eml': {'format': 'Microsoft Outlook', 'icon': 'file-alt'},
    'emlx': {'format': 'Microsoft Outlook', 'icon': 'file-alt'},
    'one': {'format': 'Microsoft OneNote', 'icon': 'file-word'},
    'odt': {'format': 'Open Document Text', 'icon': 'file-word'},
    'ott': {'format': 'Open Document Text Template', 'icon': 'file-word'},
    'ods': {'format': 'Open Document Spreadsheet', 'icon': 'file-excel'},
    'odp': {'format': 'Open Document Presentation', 'icon': 'file-powerpoint'},
    'otp': {'format': 'Open Document Presentation', 'icon': 'file-powerpoint'},
    'ots': {'format': 'Open Document Presentation', 'icon': 'file-powerpoint'},
    'potx': {'format': 'Open Document Presentation', 'icon': 'file-powerpoint'},
    'potm': {'format': 'Open Document Presentation', 'icon': 'file-powerpoint'},
    'pptm': {'format': 'Open Document Presentation', 'icon': 'file-powerpoint'},
    'ppsm': {'format': 'Open Document Presentation', 'icon': 'file-powerpoint'},
    'rtf': {'format': 'Rich Text Format', 'icon': 'file-alt'},
    'txt': {'format': 'Plain Text File', 'icon': 'file-alt'},
    'csv': {'format': 'Comma-Separated Values', 'icon': 'file-excel'},
    'html': {'format': 'HyperText Markup Language', 'icon': 'file-word'},
    'mht': {'format': 'HyperText Markup Language', 'icon': 'file-word'},
    'mhtml': {'format': 'HyperText Markup Language', 'icon': 'file-word'},
    'xml': {'format': 'Extensible Markup Language', 'icon': 'file-word'},
    'xps': {'format': 'XML Paper Specification', 'icon': 'file-word'},
    'dxf': {'format': 'AutoCAD Drawing File Format', 'icon': 'file-image'},
    'dwg': {'format': 'AutoCAD Drawing File Format', 'icon': 'file-image'},
    'bmp': {'format': 'Bitmap Picture', 'icon': 'file-image'},
    'gif': {'format': 'Graphics Interchange Format', 'icon': 'file-image'},
    'jpg': {'format': 'Joint Photographic Experts Group', 'icon': 'file-image'},
    'jpe': {'format': 'Joint Photographic Experts Group', 'icon': 'file-image'},
    'jpeg': {'format': 'Joint Photographic Experts Group', 'icon': 'file-image'},
    'jfif': {'format': 'Joint Photographic Experts Group', 'icon': 'file-image'},
    'png': {'format': 'Portable Network Graphics', 'icon': 'file-image'},
    'tiff': {'format': 'Tagged Image File Format', 'icon': 'file-image'},
    'tif': {'format': 'Tagged Image File Format', 'icon': 'file-image'},
    'psd': {'format': 'Tagged Image File Format', 'icon': 'file-image'},
    'svg': {'format': 'Tagged Image File Format', 'icon': 'file-image'},
    'jp2': {'format': 'Tagged Image File Format', 'icon': 'file-image'},
    'epub': {'format': 'Electronic Publication', 'icon': 'file-pdf'},
    'ico': {'format': 'Windows Icon', 'icon': 'file-image'},
    'webp': {'format': 'Compressed Image', 'icon': 'file-image'},
    'mobi': {'format': 'Mobipocket eBook', 'icon': 'file-pdf'},
    'tex': {'format': 'LaTeX Source Document', 'icon': 'file-pdf'},
    'djvu': {'format': 'Multi-Layer Raster Image', 'icon': 'file-alt'},
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
