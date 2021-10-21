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
        /** @type {?} */
        var codeUpperCase = code.toUpperCase();
        return this.code.toUpperCase() === codeUpperCase
            || this.alternateCode.toUpperCase() === codeUpperCase;
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
        new Language("zh-hans", "zh-hans", "中文(简体)"),
        new Language("zh-hant", "zh-hant", "中文(繁體)"),
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmlld2VyLmNvbnN0YW50cy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bncm91cGRvY3MuZXhhbXBsZXMuYW5ndWxhci92aWV3ZXIvIiwic291cmNlcyI6WyJsaWIvdmlld2VyLmNvbnN0YW50cy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUE7SUFLSSxrQkFBWSxJQUFZLEVBQUUsYUFBcUIsRUFBRSxJQUFZO1FBQ3pELElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO1FBQ2pCLElBQUksQ0FBQyxhQUFhLEdBQUcsYUFBYSxDQUFDO1FBQ25DLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO0lBQ3JCLENBQUM7Ozs7O0lBRUQscUJBQUU7Ozs7SUFBRixVQUFHLElBQUk7O1lBQ0csYUFBYSxHQUFHLElBQUksQ0FBQyxXQUFXLEVBQUU7UUFDeEMsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBRSxLQUFLLGFBQWE7ZUFDekMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxXQUFXLEVBQUUsS0FBSyxhQUFhLENBQUM7SUFDOUQsQ0FBQztJQUNMLGVBQUM7QUFBRCxDQUFDLEFBaEJELElBZ0JDOzs7O0lBZkcsd0JBQWE7O0lBQ2IsaUNBQXNCOztJQUN0Qix3QkFBYTs7QUFlakI7SUFBQTtJQXVDQSxDQUFDO0lBdENtQix5QkFBZSxHQUFHLEdBQUcsQ0FBQztJQUN0QixxQkFBVyxHQUFHLEVBQUUsQ0FBQztJQUNqQixxQkFBVyxHQUFHLEVBQUUsQ0FBQztJQUNqQix3QkFBYyxHQUFHLEVBQUUsQ0FBQztJQUNwQixpQ0FBdUIsR0FBRyxJQUFJLENBQUM7SUFDL0IseUJBQWUsR0FBRyxJQUFJLFFBQVEsQ0FBQyxJQUFJLEVBQUUsT0FBTyxFQUFFLFNBQVMsQ0FBQyxDQUFDO0lBQ3pELG1DQUF5QixHQUFHO1FBQ3hDLElBQUksUUFBUSxDQUFDLElBQUksRUFBRSxJQUFJLEVBQUUsU0FBUyxDQUFDO1FBQ25DLElBQUksUUFBUSxDQUFDLElBQUksRUFBRSxPQUFPLEVBQUUsUUFBUSxDQUFDO1FBQ3JDLElBQUksUUFBUSxDQUFDLElBQUksRUFBRSxPQUFPLEVBQUUsU0FBUyxDQUFDO1FBQ3RDLElBQUksUUFBUSxDQUFDLElBQUksRUFBRSxPQUFPLEVBQUUsT0FBTyxDQUFDO1FBQ3BDLElBQUksUUFBUSxDQUFDLElBQUksRUFBRSxPQUFPLEVBQUUsU0FBUyxDQUFDO1FBQ3RDLElBQUksUUFBUSxDQUFDLElBQUksRUFBRSxPQUFPLEVBQUUsVUFBVSxDQUFDO1FBQ3ZDLElBQUksUUFBUSxDQUFDLElBQUksRUFBRSxPQUFPLEVBQUUsU0FBUyxDQUFDO1FBQ3RDLElBQUksUUFBUSxDQUFDLElBQUksRUFBRSxPQUFPLEVBQUUsU0FBUyxDQUFDO1FBQ3RDLElBQUksUUFBUSxDQUFDLEtBQUssRUFBRSxRQUFRLEVBQUUsVUFBVSxDQUFDO1FBQ3pDLElBQUksUUFBUSxDQUFDLElBQUksRUFBRSxPQUFPLEVBQUUsVUFBVSxDQUFDO1FBQ3ZDLElBQUksUUFBUSxDQUFDLElBQUksRUFBRSxPQUFPLEVBQUUsT0FBTyxDQUFDO1FBQ3BDLElBQUksUUFBUSxDQUFDLElBQUksRUFBRSxPQUFPLEVBQUUsUUFBUSxDQUFDO1FBQ3JDLElBQUksUUFBUSxDQUFDLElBQUksRUFBRSxPQUFPLEVBQUUsV0FBVyxDQUFDO1FBQ3hDLElBQUksUUFBUSxDQUFDLElBQUksRUFBRSxPQUFPLEVBQUUsVUFBVSxDQUFDO1FBQ3ZDLElBQUksUUFBUSxDQUFDLElBQUksRUFBRSxPQUFPLEVBQUUsS0FBSyxDQUFDO1FBQ2xDLElBQUksUUFBUSxDQUFDLElBQUksRUFBRSxPQUFPLEVBQUUsWUFBWSxDQUFDO1FBQ3pDLElBQUksUUFBUSxDQUFDLElBQUksRUFBRSxPQUFPLEVBQUUsS0FBSyxDQUFDO1FBQ2xDLElBQUksUUFBUSxDQUFDLElBQUksRUFBRSxPQUFPLEVBQUUsUUFBUSxDQUFDO1FBQ3JDLElBQUksUUFBUSxDQUFDLElBQUksRUFBRSxPQUFPLEVBQUUsWUFBWSxDQUFDO1FBQ3pDLElBQUksUUFBUSxDQUFDLElBQUksRUFBRSxPQUFPLEVBQUUsUUFBUSxDQUFDO1FBQ3JDLElBQUksUUFBUSxDQUFDLElBQUksRUFBRSxPQUFPLEVBQUUsV0FBVyxDQUFDO1FBQ3hDLElBQUksUUFBUSxDQUFDLElBQUksRUFBRSxPQUFPLEVBQUUsUUFBUSxDQUFDO1FBQ3JDLElBQUksUUFBUSxDQUFDLElBQUksRUFBRSxPQUFPLEVBQUUsU0FBUyxDQUFDO1FBQ3RDLElBQUksUUFBUSxDQUFDLElBQUksRUFBRSxPQUFPLEVBQUUsU0FBUyxDQUFDO1FBQ3RDLElBQUksUUFBUSxDQUFDLElBQUksRUFBRSxPQUFPLEVBQUUsWUFBWSxDQUFDO1FBQ3pDLElBQUksUUFBUSxDQUFDLElBQUksRUFBRSxPQUFPLEVBQUUsS0FBSyxDQUFDO1FBQ2xDLElBQUksUUFBUSxDQUFDLElBQUksRUFBRSxPQUFPLEVBQUUsUUFBUSxDQUFDO1FBQ3JDLElBQUksUUFBUSxDQUFDLElBQUksRUFBRSxPQUFPLEVBQUUsWUFBWSxDQUFDO1FBQ3pDLElBQUksUUFBUSxDQUFDLFNBQVMsRUFBRSxTQUFTLEVBQUUsUUFBUSxDQUFDO1FBQzVDLElBQUksUUFBUSxDQUFDLFNBQVMsRUFBRSxTQUFTLEVBQUUsUUFBUSxDQUFDO0tBQy9DLENBQUM7SUFDTixnQkFBQztDQUFBLEFBdkNELElBdUNDO1NBdkNZLFNBQVM7OztJQUNsQiwwQkFBc0M7O0lBQ3RDLHNCQUFpQzs7SUFDakMsc0JBQWlDOztJQUNqQyx5QkFBb0M7O0lBQ3BDLGtDQUErQzs7SUFDL0MsMEJBQXlFOztJQUN6RSxvQ0ErQkUiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY2xhc3MgTGFuZ3VhZ2Uge1xyXG4gICAgY29kZTogc3RyaW5nO1xyXG4gICAgYWx0ZXJuYXRlQ29kZTogc3RyaW5nO1xyXG4gICAgbmFtZTogc3RyaW5nO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKGNvZGU6IHN0cmluZywgYWx0ZXJuYXRlQ29kZTogc3RyaW5nLCBuYW1lOiBzdHJpbmcpIHtcclxuICAgICAgICB0aGlzLmNvZGUgPSBjb2RlO1xyXG4gICAgICAgIHRoaXMuYWx0ZXJuYXRlQ29kZSA9IGFsdGVybmF0ZUNvZGU7XHJcbiAgICAgICAgdGhpcy5uYW1lID0gbmFtZTsgXHJcbiAgICB9XHJcblxyXG4gICAgaXMoY29kZSkge1xyXG4gICAgICAgIGNvbnN0IGNvZGVVcHBlckNhc2UgPSBjb2RlLnRvVXBwZXJDYXNlKCk7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuY29kZS50b1VwcGVyQ2FzZSgpID09PSBjb2RlVXBwZXJDYXNlIFxyXG4gICAgICAgICAgICB8fCB0aGlzLmFsdGVybmF0ZUNvZGUudG9VcHBlckNhc2UoKSA9PT0gY29kZVVwcGVyQ2FzZTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIENvbnN0YW50cyB7XHJcbiAgICBzdGF0aWMgcmVhZG9ubHkgdGh1bWJuYWlsc1dpZHRoID0gMzAwO1xyXG4gICAgc3RhdGljIHJlYWRvbmx5IHNjcm9sbFdpZHRoID0gMTc7XHJcbiAgICBzdGF0aWMgcmVhZG9ubHkgdG9wYmFyV2lkdGggPSA2MDtcclxuICAgIHN0YXRpYyByZWFkb25seSBkb2N1bWVudE1hcmdpbiA9IDIwO1xyXG4gICAgc3RhdGljIHJlYWRvbmx5IGRlZmF1bHRTaG93TGFuZ3VhZ2VNZW51ID0gdHJ1ZTtcclxuICAgIHN0YXRpYyByZWFkb25seSBkZWZhdWx0TGFuZ3VhZ2UgPSBuZXcgTGFuZ3VhZ2UoXCJlblwiLCBcImVuLXVzXCIsIFwiRW5nbGlzaFwiKTtcclxuICAgIHN0YXRpYyByZWFkb25seSBkZWZhdWx0U3VwcG9ydGVkTGFuZ3VhZ2VzID0gW1xyXG4gICAgICAgIG5ldyBMYW5ndWFnZShcImFyXCIsIFwiYXJcIiwgXCLYp9mE2LnYsdio2YrYqVwiKSxcclxuICAgICAgICBuZXcgTGFuZ3VhZ2UoXCJjYVwiLCBcImNhLWVzXCIsIFwiQ2F0YWzDoFwiKSxcclxuICAgICAgICBuZXcgTGFuZ3VhZ2UoXCJjc1wiLCBcImNzLWN6XCIsIFwixIxlxaF0aW5hXCIpLFxyXG4gICAgICAgIG5ldyBMYW5ndWFnZShcImRhXCIsIFwiZGEtZGtcIiwgXCJEYW5za1wiKSxcclxuICAgICAgICBuZXcgTGFuZ3VhZ2UoXCJkZVwiLCBcImRlLWRlXCIsIFwiRGV1dHNjaFwiKSxcclxuICAgICAgICBuZXcgTGFuZ3VhZ2UoXCJlbFwiLCBcImVsLWdyXCIsIFwizpXOu867zrfOvc65zrrOrFwiKSxcclxuICAgICAgICBuZXcgTGFuZ3VhZ2UoXCJlblwiLCBcImVuLXVzXCIsIFwiRW5nbGlzaFwiKSxcclxuICAgICAgICBuZXcgTGFuZ3VhZ2UoXCJlc1wiLCBcImVzLWVzXCIsIFwiRXNwYcOxb2xcIiksXHJcbiAgICAgICAgbmV3IExhbmd1YWdlKFwiZmlsXCIsIFwiZmlsLXBoXCIsIFwiRmlsaXBpbm9cIiksXHJcbiAgICAgICAgbmV3IExhbmd1YWdlKFwiZnJcIiwgXCJmci1mclwiLCBcIkZyYW7Dp2Fpc1wiKSxcclxuICAgICAgICBuZXcgTGFuZ3VhZ2UoXCJoZVwiLCBcImhlLWlsXCIsIFwi16LXkdeo15nXqlwiKSxcclxuICAgICAgICBuZXcgTGFuZ3VhZ2UoXCJoaVwiLCBcImhpLWluXCIsIFwi4KS54KS/4KSo4KWN4KSm4KWAXCIpLFxyXG4gICAgICAgIG5ldyBMYW5ndWFnZShcImlkXCIsIFwiaWQtaWRcIiwgXCJJbmRvbmVzaWFcIiksXHJcbiAgICAgICAgbmV3IExhbmd1YWdlKFwiaXRcIiwgXCJpdC1pdFwiLCBcIkl0YWxpYW5vXCIpLFxyXG4gICAgICAgIG5ldyBMYW5ndWFnZShcImphXCIsIFwiamEtanBcIiwgXCLml6XmnKzoqp5cIiksXHJcbiAgICAgICAgbmV3IExhbmd1YWdlKFwia2tcIiwgXCJray1relwiLCBcItKa0LDQt9Cw0psg0KLRltC70ZZcIiksXHJcbiAgICAgICAgbmV3IExhbmd1YWdlKFwia29cIiwgXCJrby1rclwiLCBcIu2VnOq1reyWtFwiKSxcclxuICAgICAgICBuZXcgTGFuZ3VhZ2UoXCJtc1wiLCBcIm1zLW15XCIsIFwiTWVsYXl1XCIpLFxyXG4gICAgICAgIG5ldyBMYW5ndWFnZShcIm5sXCIsIFwibmwtbmxcIiwgXCJOZWRlcmxhbmRzXCIpLFxyXG4gICAgICAgIG5ldyBMYW5ndWFnZShcInBsXCIsIFwicGwtcGxcIiwgXCJQb2xza2lcIiksXHJcbiAgICAgICAgbmV3IExhbmd1YWdlKFwicHRcIiwgXCJwdC1wdFwiLCBcIlBvcnR1Z3XDqnNcIiksXHJcbiAgICAgICAgbmV3IExhbmd1YWdlKFwicm9cIiwgXCJyby1yb1wiLCBcIlJvbcOibsSDXCIpLFxyXG4gICAgICAgIG5ldyBMYW5ndWFnZShcInJ1XCIsIFwicnUtcnVcIiwgXCLQoNGD0YHRgdC60LjQuVwiKSxcclxuICAgICAgICBuZXcgTGFuZ3VhZ2UoXCJzdlwiLCBcInN2LXNlXCIsIFwiU3ZlbnNrYVwiKSxcclxuICAgICAgICBuZXcgTGFuZ3VhZ2UoXCJ2aVwiLCBcInZpLXZuXCIsIFwiVGnhur9uZyBWaeG7h3RcIiksXHJcbiAgICAgICAgbmV3IExhbmd1YWdlKFwidGhcIiwgXCJ0aC10aFwiLCBcIuC5hOC4l+C4olwiKSxcclxuICAgICAgICBuZXcgTGFuZ3VhZ2UoXCJ0clwiLCBcInRyLXRyXCIsIFwiVMO8cmvDp2VcIiksXHJcbiAgICAgICAgbmV3IExhbmd1YWdlKFwidWtcIiwgXCJ1ay11YVwiLCBcItCj0LrRgNCw0ZfQvdGB0YzQutCwXCIpLFxyXG4gICAgICAgIG5ldyBMYW5ndWFnZShcInpoLWhhbnNcIiwgXCJ6aC1oYW5zXCIsIFwi5Lit5paHKOeugOS9kylcIiksXHJcbiAgICAgICAgbmV3IExhbmd1YWdlKFwiemgtaGFudFwiLCBcInpoLWhhbnRcIiwgXCLkuK3mloco57mB6auUKVwiKSxcclxuICAgIF07XHJcbn0iXX0=