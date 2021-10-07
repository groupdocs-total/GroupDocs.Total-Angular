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
        return this.code === code || this.alternateCode === code;
    }
}

export class Constants {
    static readonly thumbnailsWidth = 300;
    static readonly scrollWidth = 17;
    static readonly topbarWidth = 60;
    static readonly documentMargin = 20;
    static readonly defaultShowLanguageMenu = true;
    static readonly defaultLanguage = new Language("en", "en-us", "English");
    static readonly defaultSupportedLanguages = [
        new Language("ar", "ar", "العربية"),
        new Language("ca", "ca-ES", "Català"),
        new Language("cs", "cs-CZ", "Čeština"),
        new Language("da", "da-DK", "Dansk"),
        new Language("de", "de-DE", "Deutsch"),
        new Language("el", "el-GR", "Ελληνικά"),
        new Language("en", "en-US", "English"),
        new Language("es", "es-ES", "Español"),
        new Language("fil", "fil-PH", "Filipino"),
        new Language("fr", "fr-FR", "Français"),
        new Language("he", "he-IL", "עברית"),
        new Language("hi", "hi-IN", "हिन्दी"),
        new Language("id", "id-ID", "Indonesia"),
        new Language("it", "it-IT", "Italiano"),
        new Language("ja", "ja-JP", "日本語"),
        new Language("kk", "kk-KZ", "Қазақ Тілі"),
        new Language("ko", "ko-KR", "한국어"),
        new Language("ms", "ms-MY", "Melayu"),
        new Language("nl", "nl-NL", "Nederlands"),
        new Language("pl", "pl-PL", "Polski"),
        new Language("pt", "pt-PT", "Português"),
        new Language("ro", "ro-RO", "Română"),
        new Language("ru", "ru-RU", "Русский"),
        new Language("sv", "sv-SE", "Svenska"),
        new Language("vi", "vi-VN", "Tiếng Việt"),
        new Language("th", "th-TH", "ไทย"),
        new Language("tr", "tr-TR", "Türkçe"),
        new Language("uk", "uk-UA", "Українська"),
        new Language("zh", "zh-Hans", "中文"),
        new Language("zh", "zh-Hant", "中文"),
    ];
}