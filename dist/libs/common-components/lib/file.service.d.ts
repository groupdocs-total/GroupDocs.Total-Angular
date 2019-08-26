export declare class PageModel {
    data: string;
    angle: number;
    width: number;
    height: number;
    number: number;
    editable: boolean;
}
export declare class RotatedPage {
    pageNumber: number;
    angle: number;
}
export declare class FileCredentials {
    guid: string;
    password: string;
    constructor(guid: string, password: string);
}
export declare class SaveFile extends FileCredentials {
    content: string;
    constructor(guid: string, password: string, content: string);
}
export declare class FileDescription {
    guid: string;
    pages: PageModel[];
    printAllowed: boolean;
}
export declare class FileModel {
    guid: string;
    name: string;
    directory: boolean;
    size: number;
}
export declare class HttpError {
    static BadRequest: number;
    static Unauthorized: number;
    static Forbidden: number;
    static NotFound: number;
    static TimeOut: number;
    static Conflict: number;
    static InternalServerError: number;
}
export declare class FileUtil {
    static map: {
        'folder': {
            'format': string;
            'icon': string;
        };
        'pdf': {
            'format': string;
            'icon': string;
        };
        'doc': {
            'format': string;
            'icon': string;
        };
        'docx': {
            'format': string;
            'icon': string;
        };
        'docm': {
            'format': string;
            'icon': string;
        };
        'dot': {
            'format': string;
            'icon': string;
        };
        'dotx': {
            'format': string;
            'icon': string;
        };
        'dotm': {
            'format': string;
            'icon': string;
        };
        'xls': {
            'format': string;
            'icon': string;
        };
        'xlsx': {
            'format': string;
            'icon': string;
        };
        'xlsm': {
            'format': string;
            'icon': string;
        };
        'xlsb': {
            'format': string;
            'icon': string;
        };
        'xls2003': {
            'format': string;
            'icon': string;
        };
        'xltx': {
            'format': string;
            'icon': string;
        };
        'xltm': {
            'format': string;
            'icon': string;
        };
        'ppt': {
            'format': string;
            'icon': string;
        };
        'pptx': {
            'format': string;
            'icon': string;
        };
        'pps': {
            'format': string;
            'icon': string;
        };
        'ppsx': {
            'format': string;
            'icon': string;
        };
        'vsd': {
            'format': string;
            'icon': string;
        };
        'vdx': {
            'format': string;
            'icon': string;
        };
        'vss': {
            'format': string;
            'icon': string;
        };
        'vsx': {
            'format': string;
            'icon': string;
        };
        'vst': {
            'format': string;
            'icon': string;
        };
        'vtx': {
            'format': string;
            'icon': string;
        };
        'vsdx': {
            'format': string;
            'icon': string;
        };
        'vdw': {
            'format': string;
            'icon': string;
        };
        'vstx': {
            'format': string;
            'icon': string;
        };
        'vssx': {
            'format': string;
            'icon': string;
        };
        'mpp': {
            'format': string;
            'icon': string;
        };
        'mpt': {
            'format': string;
            'icon': string;
        };
        'msg': {
            'format': string;
            'icon': string;
        };
        'eml': {
            'format': string;
            'icon': string;
        };
        'emlx': {
            'format': string;
            'icon': string;
        };
        'one': {
            'format': string;
            'icon': string;
        };
        'odt': {
            'format': string;
            'icon': string;
        };
        'ott': {
            'format': string;
            'icon': string;
        };
        'ods': {
            'format': string;
            'icon': string;
        };
        'odp': {
            'format': string;
            'icon': string;
        };
        'otp': {
            'format': string;
            'icon': string;
        };
        'ots': {
            'format': string;
            'icon': string;
        };
        'potx': {
            'format': string;
            'icon': string;
        };
        'potm': {
            'format': string;
            'icon': string;
        };
        'pptm': {
            'format': string;
            'icon': string;
        };
        'ppsm': {
            'format': string;
            'icon': string;
        };
        'rtf': {
            'format': string;
            'icon': string;
        };
        'txt': {
            'format': string;
            'icon': string;
        };
        'csv': {
            'format': string;
            'icon': string;
        };
        'html': {
            'format': string;
            'icon': string;
        };
        'mht': {
            'format': string;
            'icon': string;
        };
        'mhtml': {
            'format': string;
            'icon': string;
        };
        'xml': {
            'format': string;
            'icon': string;
        };
        'xps': {
            'format': string;
            'icon': string;
        };
        'dxf': {
            'format': string;
            'icon': string;
        };
        'dwg': {
            'format': string;
            'icon': string;
        };
        'bmp': {
            'format': string;
            'icon': string;
        };
        'gif': {
            'format': string;
            'icon': string;
        };
        'jpg': {
            'format': string;
            'icon': string;
        };
        'jpe': {
            'format': string;
            'icon': string;
        };
        'jpeg': {
            'format': string;
            'icon': string;
        };
        'jfif': {
            'format': string;
            'icon': string;
        };
        'png': {
            'format': string;
            'icon': string;
        };
        'tiff': {
            'format': string;
            'icon': string;
        };
        'tif': {
            'format': string;
            'icon': string;
        };
        'psd': {
            'format': string;
            'icon': string;
        };
        'svg': {
            'format': string;
            'icon': string;
        };
        'jp2': {
            'format': string;
            'icon': string;
        };
        'epub': {
            'format': string;
            'icon': string;
        };
        'ico': {
            'format': string;
            'icon': string;
        };
        'webp': {
            'format': string;
            'icon': string;
        };
        'mobi': {
            'format': string;
            'icon': string;
        };
        'tex': {
            'format': string;
            'icon': string;
        };
        'djvu': {
            'format': string;
            'icon': string;
        };
        'unknown': {
            'format': string;
            'icon': string;
        };
    };
    static find(filename: string, isDirectory: boolean): any;
}
export declare class FileService {
    constructor();
}
