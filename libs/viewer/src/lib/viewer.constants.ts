export class Language {
    code: string;
    alternateCode: string;
    name: string;

    constructor(code: string, alternateCode: string, name: string) {
        this.code = code;
        this.alternateCode = alternateCode;
        this.name = name; 
    }

    is(code) {
        const codeUpperCase = code.toUpperCase();
        return this.code.toUpperCase() === codeUpperCase 
            || this.alternateCode.toUpperCase() === codeUpperCase;
    }
}

export class Constants {
    static readonly thumbnailsWidth = 300;
    static readonly scrollWidth = 17;
    static readonly topbarWidth = 60;
    static readonly documentMargin = 20;
    static readonly defaultShowLanguageMenu = true;
    static readonly defaultShowToolBar = true;
    static readonly defaultLanguage = new Language("en", "en-us", "English");
    static readonly defaultSupportedLanguages = [
        new Language("ar", "ar", "العربية"),
        new Language("ca", "ca-es", "Català"),
        new Language("cs", "cs-cz", "Čeština"),
        new Language("da", "da-dk", "Dansk"),
        new Language("de", "de-de", "Deutsch"),
        new Language("el", "el-gr", "Ελληνικά"),
        new Language("en", "en-us", "English"),
        new Language("es", "es-es", "Español"),
        new Language("fil", "fil-ph", "Filipino"),
        new Language("fr", "fr-fr", "Français"),
        new Language("he", "he-il", "עברית"),
        new Language("hi", "hi-in", "हिन्दी"),
        new Language("id", "id-id", "Indonesia"),
        new Language("it", "it-it", "Italiano"),
        new Language("ja", "ja-jp", "日本語"),
        new Language("kk", "kk-kz", "Қазақ Тілі"),
        new Language("ko", "ko-kr", "한국어"),
        new Language("ms", "ms-my", "Melayu"),
        new Language("nl", "nl-nl", "Nederlands"),
        new Language("pl", "pl-pl", "Polski"),
        new Language("pt", "pt-pt", "Português"),
        new Language("ro", "ro-ro", "Română"),
        new Language("ru", "ru-ru", "Русский"),
        new Language("sv", "sv-se", "Svenska"),
        new Language("vi", "vi-vn", "Tiếng Việt"),
        new Language("th", "th-th", "ไทย"),
        new Language("tr", "tr-tr", "Türkçe"),
        new Language("uk", "uk-ua", "Українська"),
        new Language("zh-hans", "zh", "中文(简体)"),
        new Language("zh-hant", "zh-hant", "中文(繁體)"),
    ];
}