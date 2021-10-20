export declare class Language {
    code: string;
    alternateCode: string;
    name: string;
    constructor(code: string, alternateCode: string, name: string);
    is(code: any): boolean;
}
export declare class Constants {
    static readonly thumbnailsWidth = 300;
    static readonly scrollWidth = 17;
    static readonly topbarWidth = 60;
    static readonly documentMargin = 20;
    static readonly defaultShowLanguageMenu = true;
    static readonly defaultLanguage: Language;
    static readonly defaultSupportedLanguages: Language[];
}
