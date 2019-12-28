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
    isDirectory: boolean;
}
export declare class FilePropertyModel {
    name: string;
    value: string;
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
export declare class Utils {
    static getMousePosition(event: any): {
        x: number;
        y: number;
    };
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
            'unit': string;
        };
        'doc': {
            'format': string;
            'icon': string;
            'unit': string;
        };
        'docx': {
            'format': string;
            'icon': string;
            'unit': string;
        };
        'docm': {
            'format': string;
            'icon': string;
            'unit': string;
        };
        'dot': {
            'format': string;
            'icon': string;
            'unit': string;
        };
        'dotx': {
            'format': string;
            'icon': string;
            'unit': string;
        };
        'dotm': {
            'format': string;
            'icon': string;
            'unit': string;
        };
        'xls': {
            'format': string;
            'icon': string;
            'unit': string;
        };
        'xlsx': {
            'format': string;
            'icon': string;
            'unit': string;
        };
        'xlsm': {
            'format': string;
            'icon': string;
            'unit': string;
        };
        'xlsb': {
            'format': string;
            'icon': string;
            'unit': string;
        };
        'xls2003': {
            'format': string;
            'icon': string;
            'unit': string;
        };
        'xltx': {
            'format': string;
            'icon': string;
            'unit': string;
        };
        'xltm': {
            'format': string;
            'icon': string;
            'unit': string;
        };
        'ppt': {
            'format': string;
            'icon': string;
            'unit': string;
        };
        'pptx': {
            'format': string;
            'icon': string;
            'unit': string;
        };
        'pps': {
            'format': string;
            'icon': string;
            'unit': string;
        };
        'ppsx': {
            'format': string;
            'icon': string;
            'unit': string;
        };
        'vsd': {
            'format': string;
            'icon': string;
            'unit': string;
        };
        'vdx': {
            'format': string;
            'icon': string;
            'unit': string;
        };
        'vss': {
            'format': string;
            'icon': string;
            'unit': string;
        };
        'vsx': {
            'format': string;
            'icon': string;
            'unit': string;
        };
        'vst': {
            'format': string;
            'icon': string;
            'unit': string;
        };
        'vtx': {
            'format': string;
            'icon': string;
            'unit': string;
        };
        'vsdx': {
            'format': string;
            'icon': string;
            'unit': string;
        };
        'vdw': {
            'format': string;
            'icon': string;
            'unit': string;
        };
        'vstx': {
            'format': string;
            'icon': string;
            'unit': string;
        };
        'vssx': {
            'format': string;
            'icon': string;
            'unit': string;
        };
        'mpp': {
            'format': string;
            'icon': string;
            'unit': string;
        };
        'mpt': {
            'format': string;
            'icon': string;
            'unit': string;
        };
        'msg': {
            'format': string;
            'icon': string;
            'unit': string;
        };
        'eml': {
            'format': string;
            'icon': string;
            'unit': string;
        };
        'emlx': {
            'format': string;
            'icon': string;
            'unit': string;
        };
        'one': {
            'format': string;
            'icon': string;
            'unit': string;
        };
        'odt': {
            'format': string;
            'icon': string;
            'unit': string;
        };
        'ott': {
            'format': string;
            'icon': string;
            'unit': string;
        };
        'ods': {
            'format': string;
            'icon': string;
            'unit': string;
        };
        'odp': {
            'format': string;
            'icon': string;
            'unit': string;
        };
        'otp': {
            'format': string;
            'icon': string;
            'unit': string;
        };
        'ots': {
            'format': string;
            'icon': string;
            'unit': string;
        };
        'potx': {
            'format': string;
            'icon': string;
            'unit': string;
        };
        'potm': {
            'format': string;
            'icon': string;
            'unit': string;
        };
        'pptm': {
            'format': string;
            'icon': string;
            'unit': string;
        };
        'ppsm': {
            'format': string;
            'icon': string;
            'unit': string;
        };
        'rtf': {
            'format': string;
            'icon': string;
            'unit': string;
        };
        'txt': {
            'format': string;
            'icon': string;
            'unit': string;
        };
        'csv': {
            'format': string;
            'icon': string;
            'unit': string;
        };
        'html': {
            'format': string;
            'icon': string;
            'unit': string;
        };
        'mht': {
            'format': string;
            'icon': string;
            'unit': string;
        };
        'mhtml': {
            'format': string;
            'icon': string;
            'unit': string;
        };
        'xml': {
            'format': string;
            'icon': string;
            'unit': string;
        };
        'xps': {
            'format': string;
            'icon': string;
            'unit': string;
        };
        'dxf': {
            'format': string;
            'icon': string;
            'unit': string;
        };
        'dwg': {
            'format': string;
            'icon': string;
            'unit': string;
        };
        'bmp': {
            'format': string;
            'icon': string;
            'unit': string;
        };
        'gif': {
            'format': string;
            'icon': string;
            'unit': string;
        };
        'jpg': {
            'format': string;
            'icon': string;
            'unit': string;
        };
        'jpe': {
            'format': string;
            'icon': string;
            'unit': string;
        };
        'jpeg': {
            'format': string;
            'icon': string;
            'unit': string;
        };
        'jfif': {
            'format': string;
            'icon': string;
            'unit': string;
        };
        'png': {
            'format': string;
            'icon': string;
            'unit': string;
        };
        'tiff': {
            'format': string;
            'icon': string;
            'unit': string;
        };
        'tif': {
            'format': string;
            'icon': string;
            'unit': string;
        };
        'psd': {
            'format': string;
            'icon': string;
            'unit': string;
        };
        'svg': {
            'format': string;
            'icon': string;
            'unit': string;
        };
        'jp2': {
            'format': string;
            'icon': string;
            'unit': string;
        };
        'epub': {
            'format': string;
            'icon': string;
            'unit': string;
        };
        'ico': {
            'format': string;
            'icon': string;
            'unit': string;
        };
        'webp': {
            'format': string;
            'icon': string;
            'unit': string;
        };
        'mobi': {
            'format': string;
            'icon': string;
            'unit': string;
        };
        'tex': {
            'format': string;
            'icon': string;
            'unit': string;
        };
        'djvu': {
            'format': string;
            'icon': string;
            'unit': string;
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
