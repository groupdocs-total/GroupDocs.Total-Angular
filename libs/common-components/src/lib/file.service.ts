export class FileModel {
  name: string;
  isDirectory: boolean;
  size: number;
}

export class FileUtil {
  public static map = {
    'folder': {'format': '', 'icon': 'fa-folder'},
    'pdf': {'format': 'Portable Document Format', 'icon': 'fa-file-pdf-o'},
    'doc': {'format': 'Microsoft Word', 'icon': 'fa-file-word-o'},
    'docx': {'format': 'Microsoft Word', 'icon': 'fa-file-word-o'},
    'docm': {'format': 'Microsoft Word', 'icon': 'fa-file-word-o'},
    'dot': {'format': 'Microsoft Word', 'icon': 'fa-file-word-o'},
    'dotx': {'format': 'Microsoft Word', 'icon': 'fa-file-word-o'},
    'dotm': {'format': 'Microsoft Word', 'icon': 'fa-file-word-o'},
    'xls': {'format': 'Microsoft Excel', 'icon': 'fa-file-excel-o'},
    'xlsx': {'format': 'Microsoft Excel', 'icon': 'fa-file-excel-o'},
    'xlsm': {'format': 'Microsoft Excel', 'icon': 'fa-file-excel-o'},
    'xlsb': {'format': 'Microsoft Excel', 'icon': 'fa-file-excel-o'},
    'ppt': {'format': 'Microsoft PowerPoint', 'icon': 'fa-file-powerpoint-o'},
    'pptx': {'format': 'Microsoft PowerPoint', 'icon': 'fa-file-powerpoint-o'},
    'pps': {'format': 'Microsoft PowerPoint', 'icon': 'fa-file-powerpoint-o'},
    'ppsx': {'format': 'Microsoft PowerPoint', 'icon': 'fa-file-powerpoint-o'},
    'vsd': {'format': 'Microsoft Visio', 'icon': 'fa-file-code-o'},
    'vdx': {'format': 'Microsoft Visio', 'icon': 'fa-file-code-o'},
    'vss': {'format': 'Microsoft Visio', 'icon': 'fa-file-code-o'},
    'vsx': {'format': 'Microsoft Visio', 'icon': 'fa-file-code-o'},
    'vst': {'format': 'Microsoft Visio', 'icon': 'fa-file-code-o'},
    'vtx': {'format': 'Microsoft Visio', 'icon': 'fa-file-code-o'},
    'vsdx': {'format': 'Microsoft Visio', 'icon': 'fa-file-code-o'},
    'vdw': {'format': 'Microsoft Visio', 'icon': 'fa-file-code-o'},
    'vstx': {'format': 'Microsoft Visio', 'icon': 'fa-file-code-o'},
    'vssx': {'format': 'Microsoft Visio', 'icon': 'fa-file-code-o'},
    'mpp': {'format': 'Microsoft Project', 'icon': 'fa-file-text'},
    'mpt': {'format': 'Microsoft Project', 'icon': 'fa-file-text'},
    'msg': {'format': 'Microsoft Outlook', 'icon': 'fa-file-text-o'},
    'eml': {'format': 'Microsoft Outlook', 'icon': 'fa-file-text-o'},
    'emlx': {'format': 'Microsoft Outlook', 'icon': 'fa-file-text-o'},
    'one': {'format': 'Microsoft OneNote', 'icon': 'fa-file-word-o'},
    'odt': {'format': 'Open Document Text', 'icon': 'fa-file-word-o'},
    'ott': {'format': 'Open Document Text Template', 'icon': 'fa-file-word-o'},
    'ods': {'format': 'Open Document Spreadsheet', 'icon': 'fa-file-excel-o'},
    'odp': {'format': 'Open Document Presentation', 'icon': 'fa-file-powerpoint-o'},
    'otp': {'format': 'Open Document Presentation', 'icon': 'fa-file-powerpoint-o'},
    'ots': {'format': 'Open Document Presentation', 'icon': 'fa-file-powerpoint-o'},
    'rtf': {'format': 'Rich Text Format', 'icon': 'fa-file-text-o'},
    'txt': {'format': 'Plain Text File', 'icon': 'fa-file-text-o'},
    'csv': {'format': 'Comma-Separated Values', 'icon': 'fa-file-excel-o'},
    'html': {'format': 'HyperText Markup Language', 'icon': 'fa-file-word-o'},
    'mht': {'format': 'HyperText Markup Language', 'icon': 'fa-file-word-o'},
    'mhtml': {'format': 'HyperText Markup Language', 'icon': 'fa-file-word-o'},
    'xml': {'format': 'Extensible Markup Language', 'icon': 'fa-file-word-o'},
    'xps': {'format': 'XML Paper Specification', 'icon': 'fa-file-word-o'},
    'dxf': {'format': 'AutoCAD Drawing File Format', 'icon': 'fa-file-image-o'},
    'dwg': {'format': 'AutoCAD Drawing File Format', 'icon': 'fa-file-image-o'},
    'bmp': {'format': 'Bitmap Picture', 'icon': 'fa-file-image-o'},
    'gif': {'format': 'Graphics Interchange Format', 'icon': 'fa-file-image-o'},
    'jpg': {'format': 'Joint Photographic Experts Group', 'icon': 'fa-file-image-o'},
    'jpe': {'format': 'Joint Photographic Experts Group', 'icon': 'fa-file-image-o'},
    'jpeg': {'format': 'Joint Photographic Experts Group', 'icon': 'fa-file-image-o'},
    'jfif': {'format': 'Joint Photographic Experts Group', 'icon': 'fa-file-image-o'},
    'png': {'format': 'Portable Network Graphics', 'icon': 'fa-file-image-o'},
    'tiff': {'format': 'Tagged Image File Format', 'icon': 'fa-file-photo-o'},
    'tif': {'format': 'Tagged Image File Format', 'icon': 'fa-file-photo-o'},
    'epub': {'format': 'Electronic Publication', 'icon': 'fa-file-pdf-o'},
    'ico': {'format': 'Windows Icon', 'icon': 'fa-file-image-o'},
    'webp': {'format': 'Compressed Image', 'icon': 'fa-file-image-o'},
    'mobi': {'format': 'Mobipocket eBook', 'icon': 'fa-file-pdf-o'},
    'tex': {'format': 'LaTeX Source Document', 'icon': 'fa-file-pdf-o'},
    'djvu': {'format': 'Multi-Layer Raster Image', 'icon': 'fa-file-text'},
    'unknown': {'format': 'This format is not supported', 'icon': 'fa-file-o'},
  };

  public static find(file: FileModel) {
    if (file && !file.isDirectory) {
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
