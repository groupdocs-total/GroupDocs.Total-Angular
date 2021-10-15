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
        new Language("zh-hans", "zh-Hans", "中文(简体)"),
        new Language("zh-hant", "zh-Hant", "中文(繁體)"),
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmlld2VyLmNvbnN0YW50cy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bncm91cGRvY3MuZXhhbXBsZXMuYW5ndWxhci92aWV3ZXIvIiwic291cmNlcyI6WyJsaWIvdmlld2VyLmNvbnN0YW50cy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUE7SUFLSSxrQkFBWSxJQUFZLEVBQUUsYUFBcUIsRUFBRSxJQUFZO1FBQ3pELElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO1FBQ2pCLElBQUksQ0FBQyxhQUFhLEdBQUcsYUFBYSxDQUFDO1FBQ25DLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO0lBQ3JCLENBQUM7Ozs7O0lBRUQscUJBQUU7Ozs7SUFBRixVQUFHLElBQUk7UUFDSCxPQUFPLElBQUksQ0FBQyxJQUFJLEtBQUssSUFBSSxJQUFJLElBQUksQ0FBQyxhQUFhLEtBQUssSUFBSSxDQUFDO0lBQzdELENBQUM7SUFDTCxlQUFDO0FBQUQsQ0FBQyxBQWRELElBY0M7Ozs7SUFiRyx3QkFBYTs7SUFDYixpQ0FBc0I7O0lBQ3RCLHdCQUFhOztBQWFqQjtJQUFBO0lBdUNBLENBQUM7SUF0Q21CLHlCQUFlLEdBQUcsR0FBRyxDQUFDO0lBQ3RCLHFCQUFXLEdBQUcsRUFBRSxDQUFDO0lBQ2pCLHFCQUFXLEdBQUcsRUFBRSxDQUFDO0lBQ2pCLHdCQUFjLEdBQUcsRUFBRSxDQUFDO0lBQ3BCLGlDQUF1QixHQUFHLElBQUksQ0FBQztJQUMvQix5QkFBZSxHQUFHLElBQUksUUFBUSxDQUFDLElBQUksRUFBRSxPQUFPLEVBQUUsU0FBUyxDQUFDLENBQUM7SUFDekQsbUNBQXlCLEdBQUc7UUFDeEMsSUFBSSxRQUFRLENBQUMsSUFBSSxFQUFFLElBQUksRUFBRSxTQUFTLENBQUM7UUFDbkMsSUFBSSxRQUFRLENBQUMsSUFBSSxFQUFFLE9BQU8sRUFBRSxRQUFRLENBQUM7UUFDckMsSUFBSSxRQUFRLENBQUMsSUFBSSxFQUFFLE9BQU8sRUFBRSxTQUFTLENBQUM7UUFDdEMsSUFBSSxRQUFRLENBQUMsSUFBSSxFQUFFLE9BQU8sRUFBRSxPQUFPLENBQUM7UUFDcEMsSUFBSSxRQUFRLENBQUMsSUFBSSxFQUFFLE9BQU8sRUFBRSxTQUFTLENBQUM7UUFDdEMsSUFBSSxRQUFRLENBQUMsSUFBSSxFQUFFLE9BQU8sRUFBRSxVQUFVLENBQUM7UUFDdkMsSUFBSSxRQUFRLENBQUMsSUFBSSxFQUFFLE9BQU8sRUFBRSxTQUFTLENBQUM7UUFDdEMsSUFBSSxRQUFRLENBQUMsSUFBSSxFQUFFLE9BQU8sRUFBRSxTQUFTLENBQUM7UUFDdEMsSUFBSSxRQUFRLENBQUMsS0FBSyxFQUFFLFFBQVEsRUFBRSxVQUFVLENBQUM7UUFDekMsSUFBSSxRQUFRLENBQUMsSUFBSSxFQUFFLE9BQU8sRUFBRSxVQUFVLENBQUM7UUFDdkMsSUFBSSxRQUFRLENBQUMsSUFBSSxFQUFFLE9BQU8sRUFBRSxPQUFPLENBQUM7UUFDcEMsSUFBSSxRQUFRLENBQUMsSUFBSSxFQUFFLE9BQU8sRUFBRSxRQUFRLENBQUM7UUFDckMsSUFBSSxRQUFRLENBQUMsSUFBSSxFQUFFLE9BQU8sRUFBRSxXQUFXLENBQUM7UUFDeEMsSUFBSSxRQUFRLENBQUMsSUFBSSxFQUFFLE9BQU8sRUFBRSxVQUFVLENBQUM7UUFDdkMsSUFBSSxRQUFRLENBQUMsSUFBSSxFQUFFLE9BQU8sRUFBRSxLQUFLLENBQUM7UUFDbEMsSUFBSSxRQUFRLENBQUMsSUFBSSxFQUFFLE9BQU8sRUFBRSxZQUFZLENBQUM7UUFDekMsSUFBSSxRQUFRLENBQUMsSUFBSSxFQUFFLE9BQU8sRUFBRSxLQUFLLENBQUM7UUFDbEMsSUFBSSxRQUFRLENBQUMsSUFBSSxFQUFFLE9BQU8sRUFBRSxRQUFRLENBQUM7UUFDckMsSUFBSSxRQUFRLENBQUMsSUFBSSxFQUFFLE9BQU8sRUFBRSxZQUFZLENBQUM7UUFDekMsSUFBSSxRQUFRLENBQUMsSUFBSSxFQUFFLE9BQU8sRUFBRSxRQUFRLENBQUM7UUFDckMsSUFBSSxRQUFRLENBQUMsSUFBSSxFQUFFLE9BQU8sRUFBRSxXQUFXLENBQUM7UUFDeEMsSUFBSSxRQUFRLENBQUMsSUFBSSxFQUFFLE9BQU8sRUFBRSxRQUFRLENBQUM7UUFDckMsSUFBSSxRQUFRLENBQUMsSUFBSSxFQUFFLE9BQU8sRUFBRSxTQUFTLENBQUM7UUFDdEMsSUFBSSxRQUFRLENBQUMsSUFBSSxFQUFFLE9BQU8sRUFBRSxTQUFTLENBQUM7UUFDdEMsSUFBSSxRQUFRLENBQUMsSUFBSSxFQUFFLE9BQU8sRUFBRSxZQUFZLENBQUM7UUFDekMsSUFBSSxRQUFRLENBQUMsSUFBSSxFQUFFLE9BQU8sRUFBRSxLQUFLLENBQUM7UUFDbEMsSUFBSSxRQUFRLENBQUMsSUFBSSxFQUFFLE9BQU8sRUFBRSxRQUFRLENBQUM7UUFDckMsSUFBSSxRQUFRLENBQUMsSUFBSSxFQUFFLE9BQU8sRUFBRSxZQUFZLENBQUM7UUFDekMsSUFBSSxRQUFRLENBQUMsU0FBUyxFQUFFLFNBQVMsRUFBRSxRQUFRLENBQUM7UUFDNUMsSUFBSSxRQUFRLENBQUMsU0FBUyxFQUFFLFNBQVMsRUFBRSxRQUFRLENBQUM7S0FDL0MsQ0FBQztJQUNOLGdCQUFDO0NBQUEsQUF2Q0QsSUF1Q0M7U0F2Q1ksU0FBUzs7O0lBQ2xCLDBCQUFzQzs7SUFDdEMsc0JBQWlDOztJQUNqQyxzQkFBaUM7O0lBQ2pDLHlCQUFvQzs7SUFDcEMsa0NBQStDOztJQUMvQywwQkFBeUU7O0lBQ3pFLG9DQStCRSIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjbGFzcyBMYW5ndWFnZSB7XG4gICAgY29kZTogc3RyaW5nO1xuICAgIGFsdGVybmF0ZUNvZGU6IHN0cmluZztcbiAgICBuYW1lOiBzdHJpbmc7XG5cbiAgICBjb25zdHJ1Y3Rvcihjb2RlOiBzdHJpbmcsIGFsdGVybmF0ZUNvZGU6IHN0cmluZywgbmFtZTogc3RyaW5nKSB7XG4gICAgICAgIHRoaXMuY29kZSA9IGNvZGU7XG4gICAgICAgIHRoaXMuYWx0ZXJuYXRlQ29kZSA9IGFsdGVybmF0ZUNvZGU7XG4gICAgICAgIHRoaXMubmFtZSA9IG5hbWU7IFxuICAgIH1cblxuICAgIGlzKGNvZGUpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuY29kZSA9PT0gY29kZSB8fCB0aGlzLmFsdGVybmF0ZUNvZGUgPT09IGNvZGU7XG4gICAgfVxufVxuXG5leHBvcnQgY2xhc3MgQ29uc3RhbnRzIHtcbiAgICBzdGF0aWMgcmVhZG9ubHkgdGh1bWJuYWlsc1dpZHRoID0gMzAwO1xuICAgIHN0YXRpYyByZWFkb25seSBzY3JvbGxXaWR0aCA9IDE3O1xuICAgIHN0YXRpYyByZWFkb25seSB0b3BiYXJXaWR0aCA9IDYwO1xuICAgIHN0YXRpYyByZWFkb25seSBkb2N1bWVudE1hcmdpbiA9IDIwO1xuICAgIHN0YXRpYyByZWFkb25seSBkZWZhdWx0U2hvd0xhbmd1YWdlTWVudSA9IHRydWU7XG4gICAgc3RhdGljIHJlYWRvbmx5IGRlZmF1bHRMYW5ndWFnZSA9IG5ldyBMYW5ndWFnZShcImVuXCIsIFwiZW4tdXNcIiwgXCJFbmdsaXNoXCIpO1xuICAgIHN0YXRpYyByZWFkb25seSBkZWZhdWx0U3VwcG9ydGVkTGFuZ3VhZ2VzID0gW1xuICAgICAgICBuZXcgTGFuZ3VhZ2UoXCJhclwiLCBcImFyXCIsIFwi2KfZhNi52LHYqNmK2KlcIiksXG4gICAgICAgIG5ldyBMYW5ndWFnZShcImNhXCIsIFwiY2EtRVNcIiwgXCJDYXRhbMOgXCIpLFxuICAgICAgICBuZXcgTGFuZ3VhZ2UoXCJjc1wiLCBcImNzLUNaXCIsIFwixIxlxaF0aW5hXCIpLFxuICAgICAgICBuZXcgTGFuZ3VhZ2UoXCJkYVwiLCBcImRhLURLXCIsIFwiRGFuc2tcIiksXG4gICAgICAgIG5ldyBMYW5ndWFnZShcImRlXCIsIFwiZGUtREVcIiwgXCJEZXV0c2NoXCIpLFxuICAgICAgICBuZXcgTGFuZ3VhZ2UoXCJlbFwiLCBcImVsLUdSXCIsIFwizpXOu867zrfOvc65zrrOrFwiKSxcbiAgICAgICAgbmV3IExhbmd1YWdlKFwiZW5cIiwgXCJlbi1VU1wiLCBcIkVuZ2xpc2hcIiksXG4gICAgICAgIG5ldyBMYW5ndWFnZShcImVzXCIsIFwiZXMtRVNcIiwgXCJFc3Bhw7FvbFwiKSxcbiAgICAgICAgbmV3IExhbmd1YWdlKFwiZmlsXCIsIFwiZmlsLVBIXCIsIFwiRmlsaXBpbm9cIiksXG4gICAgICAgIG5ldyBMYW5ndWFnZShcImZyXCIsIFwiZnItRlJcIiwgXCJGcmFuw6dhaXNcIiksXG4gICAgICAgIG5ldyBMYW5ndWFnZShcImhlXCIsIFwiaGUtSUxcIiwgXCLXoteR16jXmdeqXCIpLFxuICAgICAgICBuZXcgTGFuZ3VhZ2UoXCJoaVwiLCBcImhpLUlOXCIsIFwi4KS54KS/4KSo4KWN4KSm4KWAXCIpLFxuICAgICAgICBuZXcgTGFuZ3VhZ2UoXCJpZFwiLCBcImlkLUlEXCIsIFwiSW5kb25lc2lhXCIpLFxuICAgICAgICBuZXcgTGFuZ3VhZ2UoXCJpdFwiLCBcIml0LUlUXCIsIFwiSXRhbGlhbm9cIiksXG4gICAgICAgIG5ldyBMYW5ndWFnZShcImphXCIsIFwiamEtSlBcIiwgXCLml6XmnKzoqp5cIiksXG4gICAgICAgIG5ldyBMYW5ndWFnZShcImtrXCIsIFwia2stS1pcIiwgXCLSmtCw0LfQsNKbINCi0ZbQu9GWXCIpLFxuICAgICAgICBuZXcgTGFuZ3VhZ2UoXCJrb1wiLCBcImtvLUtSXCIsIFwi7ZWc6rWt7Ja0XCIpLFxuICAgICAgICBuZXcgTGFuZ3VhZ2UoXCJtc1wiLCBcIm1zLU1ZXCIsIFwiTWVsYXl1XCIpLFxuICAgICAgICBuZXcgTGFuZ3VhZ2UoXCJubFwiLCBcIm5sLU5MXCIsIFwiTmVkZXJsYW5kc1wiKSxcbiAgICAgICAgbmV3IExhbmd1YWdlKFwicGxcIiwgXCJwbC1QTFwiLCBcIlBvbHNraVwiKSxcbiAgICAgICAgbmV3IExhbmd1YWdlKFwicHRcIiwgXCJwdC1QVFwiLCBcIlBvcnR1Z3XDqnNcIiksXG4gICAgICAgIG5ldyBMYW5ndWFnZShcInJvXCIsIFwicm8tUk9cIiwgXCJSb23Dom7Eg1wiKSxcbiAgICAgICAgbmV3IExhbmd1YWdlKFwicnVcIiwgXCJydS1SVVwiLCBcItCg0YPRgdGB0LrQuNC5XCIpLFxuICAgICAgICBuZXcgTGFuZ3VhZ2UoXCJzdlwiLCBcInN2LVNFXCIsIFwiU3ZlbnNrYVwiKSxcbiAgICAgICAgbmV3IExhbmd1YWdlKFwidmlcIiwgXCJ2aS1WTlwiLCBcIlRp4bq/bmcgVmnhu4d0XCIpLFxuICAgICAgICBuZXcgTGFuZ3VhZ2UoXCJ0aFwiLCBcInRoLVRIXCIsIFwi4LmE4LiX4LiiXCIpLFxuICAgICAgICBuZXcgTGFuZ3VhZ2UoXCJ0clwiLCBcInRyLVRSXCIsIFwiVMO8cmvDp2VcIiksXG4gICAgICAgIG5ldyBMYW5ndWFnZShcInVrXCIsIFwidWstVUFcIiwgXCLQo9C60YDQsNGX0L3RgdGM0LrQsFwiKSxcbiAgICAgICAgbmV3IExhbmd1YWdlKFwiemgtaGFuc1wiLCBcInpoLUhhbnNcIiwgXCLkuK3mloco566A5L2TKVwiKSxcbiAgICAgICAgbmV3IExhbmd1YWdlKFwiemgtaGFudFwiLCBcInpoLUhhbnRcIiwgXCLkuK3mloco57mB6auUKVwiKSxcbiAgICBdO1xufSJdfQ==