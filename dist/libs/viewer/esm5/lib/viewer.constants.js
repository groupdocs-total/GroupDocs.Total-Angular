/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var Language = /** @class */ (function () {
    function Language(code, alternateCode, name) {
        this.code = code;
        this.alternateCode = alternateCode;
        this.name = name;
    }
    /**
     * @param {?} code
     * @return {?}
     */
    Language.prototype.is = /**
     * @param {?} code
     * @return {?}
     */
    function (code) {
        return this.code === code || this.alternateCode === code;
    };
    return Language;
}());
export { Language };
if (false) {
    /** @type {?} */
    Language.prototype.code;
    /** @type {?} */
    Language.prototype.alternateCode;
    /** @type {?} */
    Language.prototype.name;
}
var Constants = /** @class */ (function () {
    function Constants() {
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
        new Language("zh-hans", "zh-Hans", "中文"),
        new Language("zh-hant", "zh-Hant", "中文"),
    ];
    return Constants;
}());
export { Constants };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmlld2VyLmNvbnN0YW50cy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bncm91cGRvY3MuZXhhbXBsZXMuYW5ndWxhci92aWV3ZXIvIiwic291cmNlcyI6WyJsaWIvdmlld2VyLmNvbnN0YW50cy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUE7SUFLSSxrQkFBWSxJQUFZLEVBQUUsYUFBcUIsRUFBRSxJQUFZO1FBQ3pELElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO1FBQ2pCLElBQUksQ0FBQyxhQUFhLEdBQUcsYUFBYSxDQUFDO1FBQ25DLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO0lBQ3JCLENBQUM7Ozs7O0lBRUQscUJBQUU7Ozs7SUFBRixVQUFHLElBQUk7UUFDSCxPQUFPLElBQUksQ0FBQyxJQUFJLEtBQUssSUFBSSxJQUFJLElBQUksQ0FBQyxhQUFhLEtBQUssSUFBSSxDQUFDO0lBQzdELENBQUM7SUFDTCxlQUFDO0FBQUQsQ0FBQyxBQWRELElBY0M7Ozs7SUFiRyx3QkFBYTs7SUFDYixpQ0FBc0I7O0lBQ3RCLHdCQUFhOztBQWFqQjtJQUFBO0lBdUNBLENBQUM7SUF0Q21CLHlCQUFlLEdBQUcsR0FBRyxDQUFDO0lBQ3RCLHFCQUFXLEdBQUcsRUFBRSxDQUFDO0lBQ2pCLHFCQUFXLEdBQUcsRUFBRSxDQUFDO0lBQ2pCLHdCQUFjLEdBQUcsRUFBRSxDQUFDO0lBQ3BCLGlDQUF1QixHQUFHLElBQUksQ0FBQztJQUMvQix5QkFBZSxHQUFHLElBQUksUUFBUSxDQUFDLElBQUksRUFBRSxPQUFPLEVBQUUsU0FBUyxDQUFDLENBQUM7SUFDekQsbUNBQXlCLEdBQUc7UUFDeEMsSUFBSSxRQUFRLENBQUMsSUFBSSxFQUFFLElBQUksRUFBRSxTQUFTLENBQUM7UUFDbkMsSUFBSSxRQUFRLENBQUMsSUFBSSxFQUFFLE9BQU8sRUFBRSxRQUFRLENBQUM7UUFDckMsSUFBSSxRQUFRLENBQUMsSUFBSSxFQUFFLE9BQU8sRUFBRSxTQUFTLENBQUM7UUFDdEMsSUFBSSxRQUFRLENBQUMsSUFBSSxFQUFFLE9BQU8sRUFBRSxPQUFPLENBQUM7UUFDcEMsSUFBSSxRQUFRLENBQUMsSUFBSSxFQUFFLE9BQU8sRUFBRSxTQUFTLENBQUM7UUFDdEMsSUFBSSxRQUFRLENBQUMsSUFBSSxFQUFFLE9BQU8sRUFBRSxVQUFVLENBQUM7UUFDdkMsSUFBSSxRQUFRLENBQUMsSUFBSSxFQUFFLE9BQU8sRUFBRSxTQUFTLENBQUM7UUFDdEMsSUFBSSxRQUFRLENBQUMsSUFBSSxFQUFFLE9BQU8sRUFBRSxTQUFTLENBQUM7UUFDdEMsSUFBSSxRQUFRLENBQUMsS0FBSyxFQUFFLFFBQVEsRUFBRSxVQUFVLENBQUM7UUFDekMsSUFBSSxRQUFRLENBQUMsSUFBSSxFQUFFLE9BQU8sRUFBRSxVQUFVLENBQUM7UUFDdkMsSUFBSSxRQUFRLENBQUMsSUFBSSxFQUFFLE9BQU8sRUFBRSxPQUFPLENBQUM7UUFDcEMsSUFBSSxRQUFRLENBQUMsSUFBSSxFQUFFLE9BQU8sRUFBRSxRQUFRLENBQUM7UUFDckMsSUFBSSxRQUFRLENBQUMsSUFBSSxFQUFFLE9BQU8sRUFBRSxXQUFXLENBQUM7UUFDeEMsSUFBSSxRQUFRLENBQUMsSUFBSSxFQUFFLE9BQU8sRUFBRSxVQUFVLENBQUM7UUFDdkMsSUFBSSxRQUFRLENBQUMsSUFBSSxFQUFFLE9BQU8sRUFBRSxLQUFLLENBQUM7UUFDbEMsSUFBSSxRQUFRLENBQUMsSUFBSSxFQUFFLE9BQU8sRUFBRSxZQUFZLENBQUM7UUFDekMsSUFBSSxRQUFRLENBQUMsSUFBSSxFQUFFLE9BQU8sRUFBRSxLQUFLLENBQUM7UUFDbEMsSUFBSSxRQUFRLENBQUMsSUFBSSxFQUFFLE9BQU8sRUFBRSxRQUFRLENBQUM7UUFDckMsSUFBSSxRQUFRLENBQUMsSUFBSSxFQUFFLE9BQU8sRUFBRSxZQUFZLENBQUM7UUFDekMsSUFBSSxRQUFRLENBQUMsSUFBSSxFQUFFLE9BQU8sRUFBRSxRQUFRLENBQUM7UUFDckMsSUFBSSxRQUFRLENBQUMsSUFBSSxFQUFFLE9BQU8sRUFBRSxXQUFXLENBQUM7UUFDeEMsSUFBSSxRQUFRLENBQUMsSUFBSSxFQUFFLE9BQU8sRUFBRSxRQUFRLENBQUM7UUFDckMsSUFBSSxRQUFRLENBQUMsSUFBSSxFQUFFLE9BQU8sRUFBRSxTQUFTLENBQUM7UUFDdEMsSUFBSSxRQUFRLENBQUMsSUFBSSxFQUFFLE9BQU8sRUFBRSxTQUFTLENBQUM7UUFDdEMsSUFBSSxRQUFRLENBQUMsSUFBSSxFQUFFLE9BQU8sRUFBRSxZQUFZLENBQUM7UUFDekMsSUFBSSxRQUFRLENBQUMsSUFBSSxFQUFFLE9BQU8sRUFBRSxLQUFLLENBQUM7UUFDbEMsSUFBSSxRQUFRLENBQUMsSUFBSSxFQUFFLE9BQU8sRUFBRSxRQUFRLENBQUM7UUFDckMsSUFBSSxRQUFRLENBQUMsSUFBSSxFQUFFLE9BQU8sRUFBRSxZQUFZLENBQUM7UUFDekMsSUFBSSxRQUFRLENBQUMsU0FBUyxFQUFFLFNBQVMsRUFBRSxJQUFJLENBQUM7UUFDeEMsSUFBSSxRQUFRLENBQUMsU0FBUyxFQUFFLFNBQVMsRUFBRSxJQUFJLENBQUM7S0FDM0MsQ0FBQztJQUNOLGdCQUFDO0NBQUEsQUF2Q0QsSUF1Q0M7U0F2Q1ksU0FBUzs7O0lBQ2xCLDBCQUFzQzs7SUFDdEMsc0JBQWlDOztJQUNqQyxzQkFBaUM7O0lBQ2pDLHlCQUFvQzs7SUFDcEMsa0NBQStDOztJQUMvQywwQkFBeUU7O0lBQ3pFLG9DQStCRSIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjbGFzcyBMYW5ndWFnZSB7XHJcbiAgICBjb2RlOiBzdHJpbmc7XHJcbiAgICBhbHRlcm5hdGVDb2RlOiBzdHJpbmc7XHJcbiAgICBuYW1lOiBzdHJpbmc7XHJcblxyXG4gICAgY29uc3RydWN0b3IoY29kZTogc3RyaW5nLCBhbHRlcm5hdGVDb2RlOiBzdHJpbmcsIG5hbWU6IHN0cmluZykge1xyXG4gICAgICAgIHRoaXMuY29kZSA9IGNvZGU7XHJcbiAgICAgICAgdGhpcy5hbHRlcm5hdGVDb2RlID0gYWx0ZXJuYXRlQ29kZTtcclxuICAgICAgICB0aGlzLm5hbWUgPSBuYW1lOyBcclxuICAgIH1cclxuXHJcbiAgICBpcyhjb2RlKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuY29kZSA9PT0gY29kZSB8fCB0aGlzLmFsdGVybmF0ZUNvZGUgPT09IGNvZGU7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBDb25zdGFudHMge1xyXG4gICAgc3RhdGljIHJlYWRvbmx5IHRodW1ibmFpbHNXaWR0aCA9IDMwMDtcclxuICAgIHN0YXRpYyByZWFkb25seSBzY3JvbGxXaWR0aCA9IDE3O1xyXG4gICAgc3RhdGljIHJlYWRvbmx5IHRvcGJhcldpZHRoID0gNjA7XHJcbiAgICBzdGF0aWMgcmVhZG9ubHkgZG9jdW1lbnRNYXJnaW4gPSAyMDtcclxuICAgIHN0YXRpYyByZWFkb25seSBkZWZhdWx0U2hvd0xhbmd1YWdlTWVudSA9IHRydWU7XHJcbiAgICBzdGF0aWMgcmVhZG9ubHkgZGVmYXVsdExhbmd1YWdlID0gbmV3IExhbmd1YWdlKFwiZW5cIiwgXCJlbi11c1wiLCBcIkVuZ2xpc2hcIik7XHJcbiAgICBzdGF0aWMgcmVhZG9ubHkgZGVmYXVsdFN1cHBvcnRlZExhbmd1YWdlcyA9IFtcclxuICAgICAgICBuZXcgTGFuZ3VhZ2UoXCJhclwiLCBcImFyXCIsIFwi2KfZhNi52LHYqNmK2KlcIiksXHJcbiAgICAgICAgbmV3IExhbmd1YWdlKFwiY2FcIiwgXCJjYS1FU1wiLCBcIkNhdGFsw6BcIiksXHJcbiAgICAgICAgbmV3IExhbmd1YWdlKFwiY3NcIiwgXCJjcy1DWlwiLCBcIsSMZcWhdGluYVwiKSxcclxuICAgICAgICBuZXcgTGFuZ3VhZ2UoXCJkYVwiLCBcImRhLURLXCIsIFwiRGFuc2tcIiksXHJcbiAgICAgICAgbmV3IExhbmd1YWdlKFwiZGVcIiwgXCJkZS1ERVwiLCBcIkRldXRzY2hcIiksXHJcbiAgICAgICAgbmV3IExhbmd1YWdlKFwiZWxcIiwgXCJlbC1HUlwiLCBcIs6VzrvOu863zr3Ouc66zqxcIiksXHJcbiAgICAgICAgbmV3IExhbmd1YWdlKFwiZW5cIiwgXCJlbi1VU1wiLCBcIkVuZ2xpc2hcIiksXHJcbiAgICAgICAgbmV3IExhbmd1YWdlKFwiZXNcIiwgXCJlcy1FU1wiLCBcIkVzcGHDsW9sXCIpLFxyXG4gICAgICAgIG5ldyBMYW5ndWFnZShcImZpbFwiLCBcImZpbC1QSFwiLCBcIkZpbGlwaW5vXCIpLFxyXG4gICAgICAgIG5ldyBMYW5ndWFnZShcImZyXCIsIFwiZnItRlJcIiwgXCJGcmFuw6dhaXNcIiksXHJcbiAgICAgICAgbmV3IExhbmd1YWdlKFwiaGVcIiwgXCJoZS1JTFwiLCBcItei15HXqNeZ16pcIiksXHJcbiAgICAgICAgbmV3IExhbmd1YWdlKFwiaGlcIiwgXCJoaS1JTlwiLCBcIuCkueCkv+CkqOCljeCkpuClgFwiKSxcclxuICAgICAgICBuZXcgTGFuZ3VhZ2UoXCJpZFwiLCBcImlkLUlEXCIsIFwiSW5kb25lc2lhXCIpLFxyXG4gICAgICAgIG5ldyBMYW5ndWFnZShcIml0XCIsIFwiaXQtSVRcIiwgXCJJdGFsaWFub1wiKSxcclxuICAgICAgICBuZXcgTGFuZ3VhZ2UoXCJqYVwiLCBcImphLUpQXCIsIFwi5pel5pys6KqeXCIpLFxyXG4gICAgICAgIG5ldyBMYW5ndWFnZShcImtrXCIsIFwia2stS1pcIiwgXCLSmtCw0LfQsNKbINCi0ZbQu9GWXCIpLFxyXG4gICAgICAgIG5ldyBMYW5ndWFnZShcImtvXCIsIFwia28tS1JcIiwgXCLtlZzqta3slrRcIiksXHJcbiAgICAgICAgbmV3IExhbmd1YWdlKFwibXNcIiwgXCJtcy1NWVwiLCBcIk1lbGF5dVwiKSxcclxuICAgICAgICBuZXcgTGFuZ3VhZ2UoXCJubFwiLCBcIm5sLU5MXCIsIFwiTmVkZXJsYW5kc1wiKSxcclxuICAgICAgICBuZXcgTGFuZ3VhZ2UoXCJwbFwiLCBcInBsLVBMXCIsIFwiUG9sc2tpXCIpLFxyXG4gICAgICAgIG5ldyBMYW5ndWFnZShcInB0XCIsIFwicHQtUFRcIiwgXCJQb3J0dWd1w6pzXCIpLFxyXG4gICAgICAgIG5ldyBMYW5ndWFnZShcInJvXCIsIFwicm8tUk9cIiwgXCJSb23Dom7Eg1wiKSxcclxuICAgICAgICBuZXcgTGFuZ3VhZ2UoXCJydVwiLCBcInJ1LVJVXCIsIFwi0KDRg9GB0YHQutC40LlcIiksXHJcbiAgICAgICAgbmV3IExhbmd1YWdlKFwic3ZcIiwgXCJzdi1TRVwiLCBcIlN2ZW5za2FcIiksXHJcbiAgICAgICAgbmV3IExhbmd1YWdlKFwidmlcIiwgXCJ2aS1WTlwiLCBcIlRp4bq/bmcgVmnhu4d0XCIpLFxyXG4gICAgICAgIG5ldyBMYW5ndWFnZShcInRoXCIsIFwidGgtVEhcIiwgXCLguYTguJfguKJcIiksXHJcbiAgICAgICAgbmV3IExhbmd1YWdlKFwidHJcIiwgXCJ0ci1UUlwiLCBcIlTDvHJrw6dlXCIpLFxyXG4gICAgICAgIG5ldyBMYW5ndWFnZShcInVrXCIsIFwidWstVUFcIiwgXCLQo9C60YDQsNGX0L3RgdGM0LrQsFwiKSxcclxuICAgICAgICBuZXcgTGFuZ3VhZ2UoXCJ6aC1oYW5zXCIsIFwiemgtSGFuc1wiLCBcIuS4reaWh1wiKSxcclxuICAgICAgICBuZXcgTGFuZ3VhZ2UoXCJ6aC1oYW50XCIsIFwiemgtSGFudFwiLCBcIuS4reaWh1wiKSxcclxuICAgIF07XHJcbn0iXX0=