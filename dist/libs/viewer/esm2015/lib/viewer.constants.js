/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
export class Language {
    /**
     * @param {?} code
     * @param {?} alternateCode
     * @param {?} name
     */
    constructor(code, alternateCode, name) {
        this.code = code;
        this.alternateCode = alternateCode;
        this.name = name;
    }
    /**
     * @param {?} code
     * @return {?}
     */
    is(code) {
        return this.code === code || this.alternateCode === code;
    }
}
if (false) {
    /** @type {?} */
    Language.prototype.code;
    /** @type {?} */
    Language.prototype.alternateCode;
    /** @type {?} */
    Language.prototype.name;
}
export class Constants {
}
Constants.thumbnailsWidth = 300;
Constants.scrollWidth = 17;
Constants.topbarWidth = 60;
Constants.documentMargin = 20;
Constants.defaultShowLanguageMenu = true;
Constants.defaultLanguage = new Language("en", "en-us", "English");
Constants.defaultSupportedLanguages = [
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
    new Language("zh-hans", "zh-Hans", "中文(简体)"),
    new Language("zh-hant", "zh-Hant", "中文(繁體)"),
];
if (false) {
    /** @type {?} */
    Constants.thumbnailsWidth;
    /** @type {?} */
    Constants.scrollWidth;
    /** @type {?} */
    Constants.topbarWidth;
    /** @type {?} */
    Constants.documentMargin;
    /** @type {?} */
    Constants.defaultShowLanguageMenu;
    /** @type {?} */
    Constants.defaultLanguage;
    /** @type {?} */
    Constants.defaultSupportedLanguages;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmlld2VyLmNvbnN0YW50cy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bncm91cGRvY3MuZXhhbXBsZXMuYW5ndWxhci92aWV3ZXIvIiwic291cmNlcyI6WyJsaWIvdmlld2VyLmNvbnN0YW50cy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsTUFBTSxPQUFPLFFBQVE7Ozs7OztJQUtqQixZQUFZLElBQVksRUFBRSxhQUFxQixFQUFFLElBQVk7UUFDekQsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7UUFDakIsSUFBSSxDQUFDLGFBQWEsR0FBRyxhQUFhLENBQUM7UUFDbkMsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7SUFDckIsQ0FBQzs7Ozs7SUFFRCxFQUFFLENBQUMsSUFBSTtRQUNILE9BQU8sSUFBSSxDQUFDLElBQUksS0FBSyxJQUFJLElBQUksSUFBSSxDQUFDLGFBQWEsS0FBSyxJQUFJLENBQUM7SUFDN0QsQ0FBQztDQUNKOzs7SUFiRyx3QkFBYTs7SUFDYixpQ0FBc0I7O0lBQ3RCLHdCQUFhOztBQWFqQixNQUFNLE9BQU8sU0FBUzs7QUFDRix5QkFBZSxHQUFHLEdBQUcsQ0FBQztBQUN0QixxQkFBVyxHQUFHLEVBQUUsQ0FBQztBQUNqQixxQkFBVyxHQUFHLEVBQUUsQ0FBQztBQUNqQix3QkFBYyxHQUFHLEVBQUUsQ0FBQztBQUNwQixpQ0FBdUIsR0FBRyxJQUFJLENBQUM7QUFDL0IseUJBQWUsR0FBRyxJQUFJLFFBQVEsQ0FBQyxJQUFJLEVBQUUsT0FBTyxFQUFFLFNBQVMsQ0FBQyxDQUFDO0FBQ3pELG1DQUF5QixHQUFHO0lBQ3hDLElBQUksUUFBUSxDQUFDLElBQUksRUFBRSxJQUFJLEVBQUUsU0FBUyxDQUFDO0lBQ25DLElBQUksUUFBUSxDQUFDLElBQUksRUFBRSxPQUFPLEVBQUUsUUFBUSxDQUFDO0lBQ3JDLElBQUksUUFBUSxDQUFDLElBQUksRUFBRSxPQUFPLEVBQUUsU0FBUyxDQUFDO0lBQ3RDLElBQUksUUFBUSxDQUFDLElBQUksRUFBRSxPQUFPLEVBQUUsT0FBTyxDQUFDO0lBQ3BDLElBQUksUUFBUSxDQUFDLElBQUksRUFBRSxPQUFPLEVBQUUsU0FBUyxDQUFDO0lBQ3RDLElBQUksUUFBUSxDQUFDLElBQUksRUFBRSxPQUFPLEVBQUUsVUFBVSxDQUFDO0lBQ3ZDLElBQUksUUFBUSxDQUFDLElBQUksRUFBRSxPQUFPLEVBQUUsU0FBUyxDQUFDO0lBQ3RDLElBQUksUUFBUSxDQUFDLElBQUksRUFBRSxPQUFPLEVBQUUsU0FBUyxDQUFDO0lBQ3RDLElBQUksUUFBUSxDQUFDLEtBQUssRUFBRSxRQUFRLEVBQUUsVUFBVSxDQUFDO0lBQ3pDLElBQUksUUFBUSxDQUFDLElBQUksRUFBRSxPQUFPLEVBQUUsVUFBVSxDQUFDO0lBQ3ZDLElBQUksUUFBUSxDQUFDLElBQUksRUFBRSxPQUFPLEVBQUUsT0FBTyxDQUFDO0lBQ3BDLElBQUksUUFBUSxDQUFDLElBQUksRUFBRSxPQUFPLEVBQUUsUUFBUSxDQUFDO0lBQ3JDLElBQUksUUFBUSxDQUFDLElBQUksRUFBRSxPQUFPLEVBQUUsV0FBVyxDQUFDO0lBQ3hDLElBQUksUUFBUSxDQUFDLElBQUksRUFBRSxPQUFPLEVBQUUsVUFBVSxDQUFDO0lBQ3ZDLElBQUksUUFBUSxDQUFDLElBQUksRUFBRSxPQUFPLEVBQUUsS0FBSyxDQUFDO0lBQ2xDLElBQUksUUFBUSxDQUFDLElBQUksRUFBRSxPQUFPLEVBQUUsWUFBWSxDQUFDO0lBQ3pDLElBQUksUUFBUSxDQUFDLElBQUksRUFBRSxPQUFPLEVBQUUsS0FBSyxDQUFDO0lBQ2xDLElBQUksUUFBUSxDQUFDLElBQUksRUFBRSxPQUFPLEVBQUUsUUFBUSxDQUFDO0lBQ3JDLElBQUksUUFBUSxDQUFDLElBQUksRUFBRSxPQUFPLEVBQUUsWUFBWSxDQUFDO0lBQ3pDLElBQUksUUFBUSxDQUFDLElBQUksRUFBRSxPQUFPLEVBQUUsUUFBUSxDQUFDO0lBQ3JDLElBQUksUUFBUSxDQUFDLElBQUksRUFBRSxPQUFPLEVBQUUsV0FBVyxDQUFDO0lBQ3hDLElBQUksUUFBUSxDQUFDLElBQUksRUFBRSxPQUFPLEVBQUUsUUFBUSxDQUFDO0lBQ3JDLElBQUksUUFBUSxDQUFDLElBQUksRUFBRSxPQUFPLEVBQUUsU0FBUyxDQUFDO0lBQ3RDLElBQUksUUFBUSxDQUFDLElBQUksRUFBRSxPQUFPLEVBQUUsU0FBUyxDQUFDO0lBQ3RDLElBQUksUUFBUSxDQUFDLElBQUksRUFBRSxPQUFPLEVBQUUsWUFBWSxDQUFDO0lBQ3pDLElBQUksUUFBUSxDQUFDLElBQUksRUFBRSxPQUFPLEVBQUUsS0FBSyxDQUFDO0lBQ2xDLElBQUksUUFBUSxDQUFDLElBQUksRUFBRSxPQUFPLEVBQUUsUUFBUSxDQUFDO0lBQ3JDLElBQUksUUFBUSxDQUFDLElBQUksRUFBRSxPQUFPLEVBQUUsWUFBWSxDQUFDO0lBQ3pDLElBQUksUUFBUSxDQUFDLFNBQVMsRUFBRSxTQUFTLEVBQUUsUUFBUSxDQUFDO0lBQzVDLElBQUksUUFBUSxDQUFDLFNBQVMsRUFBRSxTQUFTLEVBQUUsUUFBUSxDQUFDO0NBQy9DLENBQUM7OztJQXJDRiwwQkFBc0M7O0lBQ3RDLHNCQUFpQzs7SUFDakMsc0JBQWlDOztJQUNqQyx5QkFBb0M7O0lBQ3BDLGtDQUErQzs7SUFDL0MsMEJBQXlFOztJQUN6RSxvQ0ErQkUiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY2xhc3MgTGFuZ3VhZ2Uge1xuICAgIGNvZGU6IHN0cmluZztcbiAgICBhbHRlcm5hdGVDb2RlOiBzdHJpbmc7XG4gICAgbmFtZTogc3RyaW5nO1xuXG4gICAgY29uc3RydWN0b3IoY29kZTogc3RyaW5nLCBhbHRlcm5hdGVDb2RlOiBzdHJpbmcsIG5hbWU6IHN0cmluZykge1xuICAgICAgICB0aGlzLmNvZGUgPSBjb2RlO1xuICAgICAgICB0aGlzLmFsdGVybmF0ZUNvZGUgPSBhbHRlcm5hdGVDb2RlO1xuICAgICAgICB0aGlzLm5hbWUgPSBuYW1lOyBcbiAgICB9XG5cbiAgICBpcyhjb2RlKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmNvZGUgPT09IGNvZGUgfHwgdGhpcy5hbHRlcm5hdGVDb2RlID09PSBjb2RlO1xuICAgIH1cbn1cblxuZXhwb3J0IGNsYXNzIENvbnN0YW50cyB7XG4gICAgc3RhdGljIHJlYWRvbmx5IHRodW1ibmFpbHNXaWR0aCA9IDMwMDtcbiAgICBzdGF0aWMgcmVhZG9ubHkgc2Nyb2xsV2lkdGggPSAxNztcbiAgICBzdGF0aWMgcmVhZG9ubHkgdG9wYmFyV2lkdGggPSA2MDtcbiAgICBzdGF0aWMgcmVhZG9ubHkgZG9jdW1lbnRNYXJnaW4gPSAyMDtcbiAgICBzdGF0aWMgcmVhZG9ubHkgZGVmYXVsdFNob3dMYW5ndWFnZU1lbnUgPSB0cnVlO1xuICAgIHN0YXRpYyByZWFkb25seSBkZWZhdWx0TGFuZ3VhZ2UgPSBuZXcgTGFuZ3VhZ2UoXCJlblwiLCBcImVuLXVzXCIsIFwiRW5nbGlzaFwiKTtcbiAgICBzdGF0aWMgcmVhZG9ubHkgZGVmYXVsdFN1cHBvcnRlZExhbmd1YWdlcyA9IFtcbiAgICAgICAgbmV3IExhbmd1YWdlKFwiYXJcIiwgXCJhclwiLCBcItin2YTYudix2KjZitipXCIpLFxuICAgICAgICBuZXcgTGFuZ3VhZ2UoXCJjYVwiLCBcImNhLUVTXCIsIFwiQ2F0YWzDoFwiKSxcbiAgICAgICAgbmV3IExhbmd1YWdlKFwiY3NcIiwgXCJjcy1DWlwiLCBcIsSMZcWhdGluYVwiKSxcbiAgICAgICAgbmV3IExhbmd1YWdlKFwiZGFcIiwgXCJkYS1ES1wiLCBcIkRhbnNrXCIpLFxuICAgICAgICBuZXcgTGFuZ3VhZ2UoXCJkZVwiLCBcImRlLURFXCIsIFwiRGV1dHNjaFwiKSxcbiAgICAgICAgbmV3IExhbmd1YWdlKFwiZWxcIiwgXCJlbC1HUlwiLCBcIs6VzrvOu863zr3Ouc66zqxcIiksXG4gICAgICAgIG5ldyBMYW5ndWFnZShcImVuXCIsIFwiZW4tVVNcIiwgXCJFbmdsaXNoXCIpLFxuICAgICAgICBuZXcgTGFuZ3VhZ2UoXCJlc1wiLCBcImVzLUVTXCIsIFwiRXNwYcOxb2xcIiksXG4gICAgICAgIG5ldyBMYW5ndWFnZShcImZpbFwiLCBcImZpbC1QSFwiLCBcIkZpbGlwaW5vXCIpLFxuICAgICAgICBuZXcgTGFuZ3VhZ2UoXCJmclwiLCBcImZyLUZSXCIsIFwiRnJhbsOnYWlzXCIpLFxuICAgICAgICBuZXcgTGFuZ3VhZ2UoXCJoZVwiLCBcImhlLUlMXCIsIFwi16LXkdeo15nXqlwiKSxcbiAgICAgICAgbmV3IExhbmd1YWdlKFwiaGlcIiwgXCJoaS1JTlwiLCBcIuCkueCkv+CkqOCljeCkpuClgFwiKSxcbiAgICAgICAgbmV3IExhbmd1YWdlKFwiaWRcIiwgXCJpZC1JRFwiLCBcIkluZG9uZXNpYVwiKSxcbiAgICAgICAgbmV3IExhbmd1YWdlKFwiaXRcIiwgXCJpdC1JVFwiLCBcIkl0YWxpYW5vXCIpLFxuICAgICAgICBuZXcgTGFuZ3VhZ2UoXCJqYVwiLCBcImphLUpQXCIsIFwi5pel5pys6KqeXCIpLFxuICAgICAgICBuZXcgTGFuZ3VhZ2UoXCJra1wiLCBcImtrLUtaXCIsIFwi0prQsNC30LDSmyDQotGW0LvRllwiKSxcbiAgICAgICAgbmV3IExhbmd1YWdlKFwia29cIiwgXCJrby1LUlwiLCBcIu2VnOq1reyWtFwiKSxcbiAgICAgICAgbmV3IExhbmd1YWdlKFwibXNcIiwgXCJtcy1NWVwiLCBcIk1lbGF5dVwiKSxcbiAgICAgICAgbmV3IExhbmd1YWdlKFwibmxcIiwgXCJubC1OTFwiLCBcIk5lZGVybGFuZHNcIiksXG4gICAgICAgIG5ldyBMYW5ndWFnZShcInBsXCIsIFwicGwtUExcIiwgXCJQb2xza2lcIiksXG4gICAgICAgIG5ldyBMYW5ndWFnZShcInB0XCIsIFwicHQtUFRcIiwgXCJQb3J0dWd1w6pzXCIpLFxuICAgICAgICBuZXcgTGFuZ3VhZ2UoXCJyb1wiLCBcInJvLVJPXCIsIFwiUm9tw6JuxINcIiksXG4gICAgICAgIG5ldyBMYW5ndWFnZShcInJ1XCIsIFwicnUtUlVcIiwgXCLQoNGD0YHRgdC60LjQuVwiKSxcbiAgICAgICAgbmV3IExhbmd1YWdlKFwic3ZcIiwgXCJzdi1TRVwiLCBcIlN2ZW5za2FcIiksXG4gICAgICAgIG5ldyBMYW5ndWFnZShcInZpXCIsIFwidmktVk5cIiwgXCJUaeG6v25nIFZp4buHdFwiKSxcbiAgICAgICAgbmV3IExhbmd1YWdlKFwidGhcIiwgXCJ0aC1USFwiLCBcIuC5hOC4l+C4olwiKSxcbiAgICAgICAgbmV3IExhbmd1YWdlKFwidHJcIiwgXCJ0ci1UUlwiLCBcIlTDvHJrw6dlXCIpLFxuICAgICAgICBuZXcgTGFuZ3VhZ2UoXCJ1a1wiLCBcInVrLVVBXCIsIFwi0KPQutGA0LDRl9C90YHRjNC60LBcIiksXG4gICAgICAgIG5ldyBMYW5ndWFnZShcInpoLWhhbnNcIiwgXCJ6aC1IYW5zXCIsIFwi5Lit5paHKOeugOS9kylcIiksXG4gICAgICAgIG5ldyBMYW5ndWFnZShcInpoLWhhbnRcIiwgXCJ6aC1IYW50XCIsIFwi5Lit5paHKOe5gemrlClcIiksXG4gICAgXTtcbn0iXX0=