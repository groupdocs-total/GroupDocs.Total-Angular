export class PageModel {
  data: string;
  angle: number;
  width: number;
  height: number;
  number: number;
}

export class FileDescription {
  guid: string;
  pages: PageModel[];
  printAllowed: boolean = true;
}

export class FileModel {
  guid: string;
  name: string;
  directory: boolean;
  size: number;
}

export class FileUtil {
  public static map = {
    'folder': {'format': '', 'icon': 'folder'},
    'pdf': {'format': 'Portable Document Format', 'icon': 'file-pdf-o'},
    'doc': {'format': 'Microsoft Word', 'icon': 'file-word-o'},
    'docx': {'format': 'Microsoft Word', 'icon': 'file-word-o'},
    'docm': {'format': 'Microsoft Word', 'icon': 'file-word-o'},
    'dot': {'format': 'Microsoft Word', 'icon': 'file-word-o'},
    'dotx': {'format': 'Microsoft Word', 'icon': 'file-word-o'},
    'dotm': {'format': 'Microsoft Word', 'icon': 'file-word-o'},
    'xls': {'format': 'Microsoft Excel', 'icon': 'file-excel-o'},
    'xlsx': {'format': 'Microsoft Excel', 'icon': 'file-excel-o'},
    'xlsm': {'format': 'Microsoft Excel', 'icon': 'file-excel-o'},
    'xlsb': {'format': 'Microsoft Excel', 'icon': 'file-excel-o'},
    'ppt': {'format': 'Microsoft PowerPoint', 'icon': 'file-powerpoint-o'},
    'pptx': {'format': 'Microsoft PowerPoint', 'icon': 'file-powerpoint-o'},
    'pps': {'format': 'Microsoft PowerPoint', 'icon': 'file-powerpoint-o'},
    'ppsx': {'format': 'Microsoft PowerPoint', 'icon': 'file-powerpoint-o'},
    'vsd': {'format': 'Microsoft Visio', 'icon': 'file-code-o'},
    'vdx': {'format': 'Microsoft Visio', 'icon': 'file-code-o'},
    'vss': {'format': 'Microsoft Visio', 'icon': 'file-code-o'},
    'vsx': {'format': 'Microsoft Visio', 'icon': 'file-code-o'},
    'vst': {'format': 'Microsoft Visio', 'icon': 'file-code-o'},
    'vtx': {'format': 'Microsoft Visio', 'icon': 'file-code-o'},
    'vsdx': {'format': 'Microsoft Visio', 'icon': 'file-code-o'},
    'vdw': {'format': 'Microsoft Visio', 'icon': 'file-code-o'},
    'vstx': {'format': 'Microsoft Visio', 'icon': 'file-code-o'},
    'vssx': {'format': 'Microsoft Visio', 'icon': 'file-code-o'},
    'mpp': {'format': 'Microsoft Project', 'icon': 'file-text'},
    'mpt': {'format': 'Microsoft Project', 'icon': 'file-text'},
    'msg': {'format': 'Microsoft Outlook', 'icon': 'file-text-o'},
    'eml': {'format': 'Microsoft Outlook', 'icon': 'file-text-o'},
    'emlx': {'format': 'Microsoft Outlook', 'icon': 'file-text-o'},
    'one': {'format': 'Microsoft OneNote', 'icon': 'file-word-o'},
    'odt': {'format': 'Open Document Text', 'icon': 'file-word-o'},
    'ott': {'format': 'Open Document Text Template', 'icon': 'file-word-o'},
    'ods': {'format': 'Open Document Spreadsheet', 'icon': 'file-excel-o'},
    'odp': {'format': 'Open Document Presentation', 'icon': 'file-powerpoint-o'},
    'otp': {'format': 'Open Document Presentation', 'icon': 'file-powerpoint-o'},
    'ots': {'format': 'Open Document Presentation', 'icon': 'file-powerpoint-o'},
    'rtf': {'format': 'Rich Text Format', 'icon': 'file-text-o'},
    'txt': {'format': 'Plain Text File', 'icon': 'file-text-o'},
    'csv': {'format': 'Comma-Separated Values', 'icon': 'file-excel-o'},
    'html': {'format': 'HyperText Markup Language', 'icon': 'file-word-o'},
    'mht': {'format': 'HyperText Markup Language', 'icon': 'file-word-o'},
    'mhtml': {'format': 'HyperText Markup Language', 'icon': 'file-word-o'},
    'xml': {'format': 'Extensible Markup Language', 'icon': 'file-word-o'},
    'xps': {'format': 'XML Paper Specification', 'icon': 'file-word-o'},
    'dxf': {'format': 'AutoCAD Drawing File Format', 'icon': 'file-image-o'},
    'dwg': {'format': 'AutoCAD Drawing File Format', 'icon': 'file-image-o'},
    'bmp': {'format': 'Bitmap Picture', 'icon': 'file-image-o'},
    'gif': {'format': 'Graphics Interchange Format', 'icon': 'file-image-o'},
    'jpg': {'format': 'Joint Photographic Experts Group', 'icon': 'file-image-o'},
    'jpe': {'format': 'Joint Photographic Experts Group', 'icon': 'file-image-o'},
    'jpeg': {'format': 'Joint Photographic Experts Group', 'icon': 'file-image-o'},
    'jfif': {'format': 'Joint Photographic Experts Group', 'icon': 'file-image-o'},
    'png': {'format': 'Portable Network Graphics', 'icon': 'file-image-o'},
    'tiff': {'format': 'Tagged Image File Format', 'icon': 'file-photo-o'},
    'tif': {'format': 'Tagged Image File Format', 'icon': 'file-photo-o'},
    'epub': {'format': 'Electronic Publication', 'icon': 'file-pdf-o'},
    'ico': {'format': 'Windows Icon', 'icon': 'file-image-o'},
    'webp': {'format': 'Compressed Image', 'icon': 'file-image-o'},
    'mobi': {'format': 'Mobipocket eBook', 'icon': 'file-pdf-o'},
    'tex': {'format': 'LaTeX Source Document', 'icon': 'file-pdf-o'},
    'djvu': {'format': 'Multi-Layer Raster Image', 'icon': 'file-text'},
    'unknown': {'format': 'This format is not supported', 'icon': 'file-o'},
  };

  public static find(file: FileModel) {
    if (file && !file.directory) {
      const strings = file.name.split('.');
      const name = strings.pop().toLowerCase();
      if (typeof FileUtil.map[name] == "undefined") {
        return strings.length > 1 ? FileUtil.map['unknown'] : FileUtil.map['folder'];
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
