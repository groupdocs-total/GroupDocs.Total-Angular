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
    Constants.defaultShowToolBar = true;
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
        new Language("zh-hans", "zh", "中文(简体)"),
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
    Constants.defaultShowToolBar;
    /** @type {?} */
    Constants.defaultLanguage;
    /** @type {?} */
    Constants.defaultSupportedLanguages;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmlld2VyLmNvbnN0YW50cy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bncm91cGRvY3MuZXhhbXBsZXMuYW5ndWxhci92aWV3ZXIvIiwic291cmNlcyI6WyJsaWIvdmlld2VyLmNvbnN0YW50cy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUE7SUFLSSxrQkFBWSxJQUFZLEVBQUUsYUFBcUIsRUFBRSxJQUFZO1FBQ3pELElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO1FBQ2pCLElBQUksQ0FBQyxhQUFhLEdBQUcsYUFBYSxDQUFDO1FBQ25DLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO0lBQ3JCLENBQUM7Ozs7O0lBRUQscUJBQUU7Ozs7SUFBRixVQUFHLElBQUk7O1lBQ0csYUFBYSxHQUFHLElBQUksQ0FBQyxXQUFXLEVBQUU7UUFDeEMsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBRSxLQUFLLGFBQWE7ZUFDekMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxXQUFXLEVBQUUsS0FBSyxhQUFhLENBQUM7SUFDOUQsQ0FBQztJQUNMLGVBQUM7QUFBRCxDQUFDLEFBaEJELElBZ0JDOzs7O0lBZkcsd0JBQWE7O0lBQ2IsaUNBQXNCOztJQUN0Qix3QkFBYTs7QUFlakI7SUFBQTtJQXdDQSxDQUFDO0lBdkNtQix5QkFBZSxHQUFHLEdBQUcsQ0FBQztJQUN0QixxQkFBVyxHQUFHLEVBQUUsQ0FBQztJQUNqQixxQkFBVyxHQUFHLEVBQUUsQ0FBQztJQUNqQix3QkFBYyxHQUFHLEVBQUUsQ0FBQztJQUNwQixpQ0FBdUIsR0FBRyxJQUFJLENBQUM7SUFDL0IsNEJBQWtCLEdBQUcsSUFBSSxDQUFDO0lBQzFCLHlCQUFlLEdBQUcsSUFBSSxRQUFRLENBQUMsSUFBSSxFQUFFLE9BQU8sRUFBRSxTQUFTLENBQUMsQ0FBQztJQUN6RCxtQ0FBeUIsR0FBRztRQUN4QyxJQUFJLFFBQVEsQ0FBQyxJQUFJLEVBQUUsSUFBSSxFQUFFLFNBQVMsQ0FBQztRQUNuQyxJQUFJLFFBQVEsQ0FBQyxJQUFJLEVBQUUsT0FBTyxFQUFFLFFBQVEsQ0FBQztRQUNyQyxJQUFJLFFBQVEsQ0FBQyxJQUFJLEVBQUUsT0FBTyxFQUFFLFNBQVMsQ0FBQztRQUN0QyxJQUFJLFFBQVEsQ0FBQyxJQUFJLEVBQUUsT0FBTyxFQUFFLE9BQU8sQ0FBQztRQUNwQyxJQUFJLFFBQVEsQ0FBQyxJQUFJLEVBQUUsT0FBTyxFQUFFLFNBQVMsQ0FBQztRQUN0QyxJQUFJLFFBQVEsQ0FBQyxJQUFJLEVBQUUsT0FBTyxFQUFFLFVBQVUsQ0FBQztRQUN2QyxJQUFJLFFBQVEsQ0FBQyxJQUFJLEVBQUUsT0FBTyxFQUFFLFNBQVMsQ0FBQztRQUN0QyxJQUFJLFFBQVEsQ0FBQyxJQUFJLEVBQUUsT0FBTyxFQUFFLFNBQVMsQ0FBQztRQUN0QyxJQUFJLFFBQVEsQ0FBQyxLQUFLLEVBQUUsUUFBUSxFQUFFLFVBQVUsQ0FBQztRQUN6QyxJQUFJLFFBQVEsQ0FBQyxJQUFJLEVBQUUsT0FBTyxFQUFFLFVBQVUsQ0FBQztRQUN2QyxJQUFJLFFBQVEsQ0FBQyxJQUFJLEVBQUUsT0FBTyxFQUFFLE9BQU8sQ0FBQztRQUNwQyxJQUFJLFFBQVEsQ0FBQyxJQUFJLEVBQUUsT0FBTyxFQUFFLFFBQVEsQ0FBQztRQUNyQyxJQUFJLFFBQVEsQ0FBQyxJQUFJLEVBQUUsT0FBTyxFQUFFLFdBQVcsQ0FBQztRQUN4QyxJQUFJLFFBQVEsQ0FBQyxJQUFJLEVBQUUsT0FBTyxFQUFFLFVBQVUsQ0FBQztRQUN2QyxJQUFJLFFBQVEsQ0FBQyxJQUFJLEVBQUUsT0FBTyxFQUFFLEtBQUssQ0FBQztRQUNsQyxJQUFJLFFBQVEsQ0FBQyxJQUFJLEVBQUUsT0FBTyxFQUFFLFlBQVksQ0FBQztRQUN6QyxJQUFJLFFBQVEsQ0FBQyxJQUFJLEVBQUUsT0FBTyxFQUFFLEtBQUssQ0FBQztRQUNsQyxJQUFJLFFBQVEsQ0FBQyxJQUFJLEVBQUUsT0FBTyxFQUFFLFFBQVEsQ0FBQztRQUNyQyxJQUFJLFFBQVEsQ0FBQyxJQUFJLEVBQUUsT0FBTyxFQUFFLFlBQVksQ0FBQztRQUN6QyxJQUFJLFFBQVEsQ0FBQyxJQUFJLEVBQUUsT0FBTyxFQUFFLFFBQVEsQ0FBQztRQUNyQyxJQUFJLFFBQVEsQ0FBQyxJQUFJLEVBQUUsT0FBTyxFQUFFLFdBQVcsQ0FBQztRQUN4QyxJQUFJLFFBQVEsQ0FBQyxJQUFJLEVBQUUsT0FBTyxFQUFFLFFBQVEsQ0FBQztRQUNyQyxJQUFJLFFBQVEsQ0FBQyxJQUFJLEVBQUUsT0FBTyxFQUFFLFNBQVMsQ0FBQztRQUN0QyxJQUFJLFFBQVEsQ0FBQyxJQUFJLEVBQUUsT0FBTyxFQUFFLFNBQVMsQ0FBQztRQUN0QyxJQUFJLFFBQVEsQ0FBQyxJQUFJLEVBQUUsT0FBTyxFQUFFLFlBQVksQ0FBQztRQUN6QyxJQUFJLFFBQVEsQ0FBQyxJQUFJLEVBQUUsT0FBTyxFQUFFLEtBQUssQ0FBQztRQUNsQyxJQUFJLFFBQVEsQ0FBQyxJQUFJLEVBQUUsT0FBTyxFQUFFLFFBQVEsQ0FBQztRQUNyQyxJQUFJLFFBQVEsQ0FBQyxJQUFJLEVBQUUsT0FBTyxFQUFFLFlBQVksQ0FBQztRQUN6QyxJQUFJLFFBQVEsQ0FBQyxTQUFTLEVBQUUsSUFBSSxFQUFFLFFBQVEsQ0FBQztRQUN2QyxJQUFJLFFBQVEsQ0FBQyxTQUFTLEVBQUUsU0FBUyxFQUFFLFFBQVEsQ0FBQztLQUMvQyxDQUFDO0lBQ04sZ0JBQUM7Q0FBQSxBQXhDRCxJQXdDQztTQXhDWSxTQUFTOzs7SUFDbEIsMEJBQXNDOztJQUN0QyxzQkFBaUM7O0lBQ2pDLHNCQUFpQzs7SUFDakMseUJBQW9DOztJQUNwQyxrQ0FBK0M7O0lBQy9DLDZCQUEwQzs7SUFDMUMsMEJBQXlFOztJQUN6RSxvQ0ErQkUiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY2xhc3MgTGFuZ3VhZ2Uge1xuICAgIGNvZGU6IHN0cmluZztcbiAgICBhbHRlcm5hdGVDb2RlOiBzdHJpbmc7XG4gICAgbmFtZTogc3RyaW5nO1xuXG4gICAgY29uc3RydWN0b3IoY29kZTogc3RyaW5nLCBhbHRlcm5hdGVDb2RlOiBzdHJpbmcsIG5hbWU6IHN0cmluZykge1xuICAgICAgICB0aGlzLmNvZGUgPSBjb2RlO1xuICAgICAgICB0aGlzLmFsdGVybmF0ZUNvZGUgPSBhbHRlcm5hdGVDb2RlO1xuICAgICAgICB0aGlzLm5hbWUgPSBuYW1lOyBcbiAgICB9XG5cbiAgICBpcyhjb2RlKSB7XG4gICAgICAgIGNvbnN0IGNvZGVVcHBlckNhc2UgPSBjb2RlLnRvVXBwZXJDYXNlKCk7XG4gICAgICAgIHJldHVybiB0aGlzLmNvZGUudG9VcHBlckNhc2UoKSA9PT0gY29kZVVwcGVyQ2FzZSBcbiAgICAgICAgICAgIHx8IHRoaXMuYWx0ZXJuYXRlQ29kZS50b1VwcGVyQ2FzZSgpID09PSBjb2RlVXBwZXJDYXNlO1xuICAgIH1cbn1cblxuZXhwb3J0IGNsYXNzIENvbnN0YW50cyB7XG4gICAgc3RhdGljIHJlYWRvbmx5IHRodW1ibmFpbHNXaWR0aCA9IDMwMDtcbiAgICBzdGF0aWMgcmVhZG9ubHkgc2Nyb2xsV2lkdGggPSAxNztcbiAgICBzdGF0aWMgcmVhZG9ubHkgdG9wYmFyV2lkdGggPSA2MDtcbiAgICBzdGF0aWMgcmVhZG9ubHkgZG9jdW1lbnRNYXJnaW4gPSAyMDtcbiAgICBzdGF0aWMgcmVhZG9ubHkgZGVmYXVsdFNob3dMYW5ndWFnZU1lbnUgPSB0cnVlO1xuICAgIHN0YXRpYyByZWFkb25seSBkZWZhdWx0U2hvd1Rvb2xCYXIgPSB0cnVlO1xuICAgIHN0YXRpYyByZWFkb25seSBkZWZhdWx0TGFuZ3VhZ2UgPSBuZXcgTGFuZ3VhZ2UoXCJlblwiLCBcImVuLXVzXCIsIFwiRW5nbGlzaFwiKTtcbiAgICBzdGF0aWMgcmVhZG9ubHkgZGVmYXVsdFN1cHBvcnRlZExhbmd1YWdlcyA9IFtcbiAgICAgICAgbmV3IExhbmd1YWdlKFwiYXJcIiwgXCJhclwiLCBcItin2YTYudix2KjZitipXCIpLFxuICAgICAgICBuZXcgTGFuZ3VhZ2UoXCJjYVwiLCBcImNhLWVzXCIsIFwiQ2F0YWzDoFwiKSxcbiAgICAgICAgbmV3IExhbmd1YWdlKFwiY3NcIiwgXCJjcy1jelwiLCBcIsSMZcWhdGluYVwiKSxcbiAgICAgICAgbmV3IExhbmd1YWdlKFwiZGFcIiwgXCJkYS1ka1wiLCBcIkRhbnNrXCIpLFxuICAgICAgICBuZXcgTGFuZ3VhZ2UoXCJkZVwiLCBcImRlLWRlXCIsIFwiRGV1dHNjaFwiKSxcbiAgICAgICAgbmV3IExhbmd1YWdlKFwiZWxcIiwgXCJlbC1nclwiLCBcIs6VzrvOu863zr3Ouc66zqxcIiksXG4gICAgICAgIG5ldyBMYW5ndWFnZShcImVuXCIsIFwiZW4tdXNcIiwgXCJFbmdsaXNoXCIpLFxuICAgICAgICBuZXcgTGFuZ3VhZ2UoXCJlc1wiLCBcImVzLWVzXCIsIFwiRXNwYcOxb2xcIiksXG4gICAgICAgIG5ldyBMYW5ndWFnZShcImZpbFwiLCBcImZpbC1waFwiLCBcIkZpbGlwaW5vXCIpLFxuICAgICAgICBuZXcgTGFuZ3VhZ2UoXCJmclwiLCBcImZyLWZyXCIsIFwiRnJhbsOnYWlzXCIpLFxuICAgICAgICBuZXcgTGFuZ3VhZ2UoXCJoZVwiLCBcImhlLWlsXCIsIFwi16LXkdeo15nXqlwiKSxcbiAgICAgICAgbmV3IExhbmd1YWdlKFwiaGlcIiwgXCJoaS1pblwiLCBcIuCkueCkv+CkqOCljeCkpuClgFwiKSxcbiAgICAgICAgbmV3IExhbmd1YWdlKFwiaWRcIiwgXCJpZC1pZFwiLCBcIkluZG9uZXNpYVwiKSxcbiAgICAgICAgbmV3IExhbmd1YWdlKFwiaXRcIiwgXCJpdC1pdFwiLCBcIkl0YWxpYW5vXCIpLFxuICAgICAgICBuZXcgTGFuZ3VhZ2UoXCJqYVwiLCBcImphLWpwXCIsIFwi5pel5pys6KqeXCIpLFxuICAgICAgICBuZXcgTGFuZ3VhZ2UoXCJra1wiLCBcImtrLWt6XCIsIFwi0prQsNC30LDSmyDQotGW0LvRllwiKSxcbiAgICAgICAgbmV3IExhbmd1YWdlKFwia29cIiwgXCJrby1rclwiLCBcIu2VnOq1reyWtFwiKSxcbiAgICAgICAgbmV3IExhbmd1YWdlKFwibXNcIiwgXCJtcy1teVwiLCBcIk1lbGF5dVwiKSxcbiAgICAgICAgbmV3IExhbmd1YWdlKFwibmxcIiwgXCJubC1ubFwiLCBcIk5lZGVybGFuZHNcIiksXG4gICAgICAgIG5ldyBMYW5ndWFnZShcInBsXCIsIFwicGwtcGxcIiwgXCJQb2xza2lcIiksXG4gICAgICAgIG5ldyBMYW5ndWFnZShcInB0XCIsIFwicHQtcHRcIiwgXCJQb3J0dWd1w6pzXCIpLFxuICAgICAgICBuZXcgTGFuZ3VhZ2UoXCJyb1wiLCBcInJvLXJvXCIsIFwiUm9tw6JuxINcIiksXG4gICAgICAgIG5ldyBMYW5ndWFnZShcInJ1XCIsIFwicnUtcnVcIiwgXCLQoNGD0YHRgdC60LjQuVwiKSxcbiAgICAgICAgbmV3IExhbmd1YWdlKFwic3ZcIiwgXCJzdi1zZVwiLCBcIlN2ZW5za2FcIiksXG4gICAgICAgIG5ldyBMYW5ndWFnZShcInZpXCIsIFwidmktdm5cIiwgXCJUaeG6v25nIFZp4buHdFwiKSxcbiAgICAgICAgbmV3IExhbmd1YWdlKFwidGhcIiwgXCJ0aC10aFwiLCBcIuC5hOC4l+C4olwiKSxcbiAgICAgICAgbmV3IExhbmd1YWdlKFwidHJcIiwgXCJ0ci10clwiLCBcIlTDvHJrw6dlXCIpLFxuICAgICAgICBuZXcgTGFuZ3VhZ2UoXCJ1a1wiLCBcInVrLXVhXCIsIFwi0KPQutGA0LDRl9C90YHRjNC60LBcIiksXG4gICAgICAgIG5ldyBMYW5ndWFnZShcInpoLWhhbnNcIiwgXCJ6aFwiLCBcIuS4reaWhyjnroDkvZMpXCIpLFxuICAgICAgICBuZXcgTGFuZ3VhZ2UoXCJ6aC1oYW50XCIsIFwiemgtaGFudFwiLCBcIuS4reaWhyjnuYHpq5QpXCIpLFxuICAgIF07XG59Il19