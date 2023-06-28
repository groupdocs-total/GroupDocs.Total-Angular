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
        /** @type {?} */
        const codeUpperCase = code.toUpperCase();
        return this.code.toUpperCase() === codeUpperCase
            || this.alternateCode.toUpperCase() === codeUpperCase;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmlld2VyLmNvbnN0YW50cy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bncm91cGRvY3MuZXhhbXBsZXMuYW5ndWxhci92aWV3ZXIvIiwic291cmNlcyI6WyJsaWIvdmlld2VyLmNvbnN0YW50cy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsTUFBTSxPQUFPLFFBQVE7Ozs7OztJQUtqQixZQUFZLElBQVksRUFBRSxhQUFxQixFQUFFLElBQVk7UUFDekQsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7UUFDakIsSUFBSSxDQUFDLGFBQWEsR0FBRyxhQUFhLENBQUM7UUFDbkMsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7SUFDckIsQ0FBQzs7Ozs7SUFFRCxFQUFFLENBQUMsSUFBSTs7Y0FDRyxhQUFhLEdBQUcsSUFBSSxDQUFDLFdBQVcsRUFBRTtRQUN4QyxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFFLEtBQUssYUFBYTtlQUN6QyxJQUFJLENBQUMsYUFBYSxDQUFDLFdBQVcsRUFBRSxLQUFLLGFBQWEsQ0FBQztJQUM5RCxDQUFDO0NBQ0o7OztJQWZHLHdCQUFhOztJQUNiLGlDQUFzQjs7SUFDdEIsd0JBQWE7O0FBZWpCLE1BQU0sT0FBTyxTQUFTOztBQUNGLHlCQUFlLEdBQUcsR0FBRyxDQUFDO0FBQ3RCLHFCQUFXLEdBQUcsRUFBRSxDQUFDO0FBQ2pCLHFCQUFXLEdBQUcsRUFBRSxDQUFDO0FBQ2pCLHdCQUFjLEdBQUcsRUFBRSxDQUFDO0FBQ3BCLGlDQUF1QixHQUFHLElBQUksQ0FBQztBQUMvQiw0QkFBa0IsR0FBRyxJQUFJLENBQUM7QUFDMUIseUJBQWUsR0FBRyxJQUFJLFFBQVEsQ0FBQyxJQUFJLEVBQUUsT0FBTyxFQUFFLFNBQVMsQ0FBQyxDQUFDO0FBQ3pELG1DQUF5QixHQUFHO0lBQ3hDLElBQUksUUFBUSxDQUFDLElBQUksRUFBRSxJQUFJLEVBQUUsU0FBUyxDQUFDO0lBQ25DLElBQUksUUFBUSxDQUFDLElBQUksRUFBRSxPQUFPLEVBQUUsUUFBUSxDQUFDO0lBQ3JDLElBQUksUUFBUSxDQUFDLElBQUksRUFBRSxPQUFPLEVBQUUsU0FBUyxDQUFDO0lBQ3RDLElBQUksUUFBUSxDQUFDLElBQUksRUFBRSxPQUFPLEVBQUUsT0FBTyxDQUFDO0lBQ3BDLElBQUksUUFBUSxDQUFDLElBQUksRUFBRSxPQUFPLEVBQUUsU0FBUyxDQUFDO0lBQ3RDLElBQUksUUFBUSxDQUFDLElBQUksRUFBRSxPQUFPLEVBQUUsVUFBVSxDQUFDO0lBQ3ZDLElBQUksUUFBUSxDQUFDLElBQUksRUFBRSxPQUFPLEVBQUUsU0FBUyxDQUFDO0lBQ3RDLElBQUksUUFBUSxDQUFDLElBQUksRUFBRSxPQUFPLEVBQUUsU0FBUyxDQUFDO0lBQ3RDLElBQUksUUFBUSxDQUFDLEtBQUssRUFBRSxRQUFRLEVBQUUsVUFBVSxDQUFDO0lBQ3pDLElBQUksUUFBUSxDQUFDLElBQUksRUFBRSxPQUFPLEVBQUUsVUFBVSxDQUFDO0lBQ3ZDLElBQUksUUFBUSxDQUFDLElBQUksRUFBRSxPQUFPLEVBQUUsT0FBTyxDQUFDO0lBQ3BDLElBQUksUUFBUSxDQUFDLElBQUksRUFBRSxPQUFPLEVBQUUsUUFBUSxDQUFDO0lBQ3JDLElBQUksUUFBUSxDQUFDLElBQUksRUFBRSxPQUFPLEVBQUUsV0FBVyxDQUFDO0lBQ3hDLElBQUksUUFBUSxDQUFDLElBQUksRUFBRSxPQUFPLEVBQUUsVUFBVSxDQUFDO0lBQ3ZDLElBQUksUUFBUSxDQUFDLElBQUksRUFBRSxPQUFPLEVBQUUsS0FBSyxDQUFDO0lBQ2xDLElBQUksUUFBUSxDQUFDLElBQUksRUFBRSxPQUFPLEVBQUUsWUFBWSxDQUFDO0lBQ3pDLElBQUksUUFBUSxDQUFDLElBQUksRUFBRSxPQUFPLEVBQUUsS0FBSyxDQUFDO0lBQ2xDLElBQUksUUFBUSxDQUFDLElBQUksRUFBRSxPQUFPLEVBQUUsUUFBUSxDQUFDO0lBQ3JDLElBQUksUUFBUSxDQUFDLElBQUksRUFBRSxPQUFPLEVBQUUsWUFBWSxDQUFDO0lBQ3pDLElBQUksUUFBUSxDQUFDLElBQUksRUFBRSxPQUFPLEVBQUUsUUFBUSxDQUFDO0lBQ3JDLElBQUksUUFBUSxDQUFDLElBQUksRUFBRSxPQUFPLEVBQUUsV0FBVyxDQUFDO0lBQ3hDLElBQUksUUFBUSxDQUFDLElBQUksRUFBRSxPQUFPLEVBQUUsUUFBUSxDQUFDO0lBQ3JDLElBQUksUUFBUSxDQUFDLElBQUksRUFBRSxPQUFPLEVBQUUsU0FBUyxDQUFDO0lBQ3RDLElBQUksUUFBUSxDQUFDLElBQUksRUFBRSxPQUFPLEVBQUUsU0FBUyxDQUFDO0lBQ3RDLElBQUksUUFBUSxDQUFDLElBQUksRUFBRSxPQUFPLEVBQUUsWUFBWSxDQUFDO0lBQ3pDLElBQUksUUFBUSxDQUFDLElBQUksRUFBRSxPQUFPLEVBQUUsS0FBSyxDQUFDO0lBQ2xDLElBQUksUUFBUSxDQUFDLElBQUksRUFBRSxPQUFPLEVBQUUsUUFBUSxDQUFDO0lBQ3JDLElBQUksUUFBUSxDQUFDLElBQUksRUFBRSxPQUFPLEVBQUUsWUFBWSxDQUFDO0lBQ3pDLElBQUksUUFBUSxDQUFDLFNBQVMsRUFBRSxJQUFJLEVBQUUsUUFBUSxDQUFDO0lBQ3ZDLElBQUksUUFBUSxDQUFDLFNBQVMsRUFBRSxTQUFTLEVBQUUsUUFBUSxDQUFDO0NBQy9DLENBQUM7OztJQXRDRiwwQkFBc0M7O0lBQ3RDLHNCQUFpQzs7SUFDakMsc0JBQWlDOztJQUNqQyx5QkFBb0M7O0lBQ3BDLGtDQUErQzs7SUFDL0MsNkJBQTBDOztJQUMxQywwQkFBeUU7O0lBQ3pFLG9DQStCRSIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjbGFzcyBMYW5ndWFnZSB7XG4gICAgY29kZTogc3RyaW5nO1xuICAgIGFsdGVybmF0ZUNvZGU6IHN0cmluZztcbiAgICBuYW1lOiBzdHJpbmc7XG5cbiAgICBjb25zdHJ1Y3Rvcihjb2RlOiBzdHJpbmcsIGFsdGVybmF0ZUNvZGU6IHN0cmluZywgbmFtZTogc3RyaW5nKSB7XG4gICAgICAgIHRoaXMuY29kZSA9IGNvZGU7XG4gICAgICAgIHRoaXMuYWx0ZXJuYXRlQ29kZSA9IGFsdGVybmF0ZUNvZGU7XG4gICAgICAgIHRoaXMubmFtZSA9IG5hbWU7IFxuICAgIH1cblxuICAgIGlzKGNvZGUpIHtcbiAgICAgICAgY29uc3QgY29kZVVwcGVyQ2FzZSA9IGNvZGUudG9VcHBlckNhc2UoKTtcbiAgICAgICAgcmV0dXJuIHRoaXMuY29kZS50b1VwcGVyQ2FzZSgpID09PSBjb2RlVXBwZXJDYXNlIFxuICAgICAgICAgICAgfHwgdGhpcy5hbHRlcm5hdGVDb2RlLnRvVXBwZXJDYXNlKCkgPT09IGNvZGVVcHBlckNhc2U7XG4gICAgfVxufVxuXG5leHBvcnQgY2xhc3MgQ29uc3RhbnRzIHtcbiAgICBzdGF0aWMgcmVhZG9ubHkgdGh1bWJuYWlsc1dpZHRoID0gMzAwO1xuICAgIHN0YXRpYyByZWFkb25seSBzY3JvbGxXaWR0aCA9IDE3O1xuICAgIHN0YXRpYyByZWFkb25seSB0b3BiYXJXaWR0aCA9IDYwO1xuICAgIHN0YXRpYyByZWFkb25seSBkb2N1bWVudE1hcmdpbiA9IDIwO1xuICAgIHN0YXRpYyByZWFkb25seSBkZWZhdWx0U2hvd0xhbmd1YWdlTWVudSA9IHRydWU7XG4gICAgc3RhdGljIHJlYWRvbmx5IGRlZmF1bHRTaG93VG9vbEJhciA9IHRydWU7XG4gICAgc3RhdGljIHJlYWRvbmx5IGRlZmF1bHRMYW5ndWFnZSA9IG5ldyBMYW5ndWFnZShcImVuXCIsIFwiZW4tdXNcIiwgXCJFbmdsaXNoXCIpO1xuICAgIHN0YXRpYyByZWFkb25seSBkZWZhdWx0U3VwcG9ydGVkTGFuZ3VhZ2VzID0gW1xuICAgICAgICBuZXcgTGFuZ3VhZ2UoXCJhclwiLCBcImFyXCIsIFwi2KfZhNi52LHYqNmK2KlcIiksXG4gICAgICAgIG5ldyBMYW5ndWFnZShcImNhXCIsIFwiY2EtZXNcIiwgXCJDYXRhbMOgXCIpLFxuICAgICAgICBuZXcgTGFuZ3VhZ2UoXCJjc1wiLCBcImNzLWN6XCIsIFwixIxlxaF0aW5hXCIpLFxuICAgICAgICBuZXcgTGFuZ3VhZ2UoXCJkYVwiLCBcImRhLWRrXCIsIFwiRGFuc2tcIiksXG4gICAgICAgIG5ldyBMYW5ndWFnZShcImRlXCIsIFwiZGUtZGVcIiwgXCJEZXV0c2NoXCIpLFxuICAgICAgICBuZXcgTGFuZ3VhZ2UoXCJlbFwiLCBcImVsLWdyXCIsIFwizpXOu867zrfOvc65zrrOrFwiKSxcbiAgICAgICAgbmV3IExhbmd1YWdlKFwiZW5cIiwgXCJlbi11c1wiLCBcIkVuZ2xpc2hcIiksXG4gICAgICAgIG5ldyBMYW5ndWFnZShcImVzXCIsIFwiZXMtZXNcIiwgXCJFc3Bhw7FvbFwiKSxcbiAgICAgICAgbmV3IExhbmd1YWdlKFwiZmlsXCIsIFwiZmlsLXBoXCIsIFwiRmlsaXBpbm9cIiksXG4gICAgICAgIG5ldyBMYW5ndWFnZShcImZyXCIsIFwiZnItZnJcIiwgXCJGcmFuw6dhaXNcIiksXG4gICAgICAgIG5ldyBMYW5ndWFnZShcImhlXCIsIFwiaGUtaWxcIiwgXCLXoteR16jXmdeqXCIpLFxuICAgICAgICBuZXcgTGFuZ3VhZ2UoXCJoaVwiLCBcImhpLWluXCIsIFwi4KS54KS/4KSo4KWN4KSm4KWAXCIpLFxuICAgICAgICBuZXcgTGFuZ3VhZ2UoXCJpZFwiLCBcImlkLWlkXCIsIFwiSW5kb25lc2lhXCIpLFxuICAgICAgICBuZXcgTGFuZ3VhZ2UoXCJpdFwiLCBcIml0LWl0XCIsIFwiSXRhbGlhbm9cIiksXG4gICAgICAgIG5ldyBMYW5ndWFnZShcImphXCIsIFwiamEtanBcIiwgXCLml6XmnKzoqp5cIiksXG4gICAgICAgIG5ldyBMYW5ndWFnZShcImtrXCIsIFwia2sta3pcIiwgXCLSmtCw0LfQsNKbINCi0ZbQu9GWXCIpLFxuICAgICAgICBuZXcgTGFuZ3VhZ2UoXCJrb1wiLCBcImtvLWtyXCIsIFwi7ZWc6rWt7Ja0XCIpLFxuICAgICAgICBuZXcgTGFuZ3VhZ2UoXCJtc1wiLCBcIm1zLW15XCIsIFwiTWVsYXl1XCIpLFxuICAgICAgICBuZXcgTGFuZ3VhZ2UoXCJubFwiLCBcIm5sLW5sXCIsIFwiTmVkZXJsYW5kc1wiKSxcbiAgICAgICAgbmV3IExhbmd1YWdlKFwicGxcIiwgXCJwbC1wbFwiLCBcIlBvbHNraVwiKSxcbiAgICAgICAgbmV3IExhbmd1YWdlKFwicHRcIiwgXCJwdC1wdFwiLCBcIlBvcnR1Z3XDqnNcIiksXG4gICAgICAgIG5ldyBMYW5ndWFnZShcInJvXCIsIFwicm8tcm9cIiwgXCJSb23Dom7Eg1wiKSxcbiAgICAgICAgbmV3IExhbmd1YWdlKFwicnVcIiwgXCJydS1ydVwiLCBcItCg0YPRgdGB0LrQuNC5XCIpLFxuICAgICAgICBuZXcgTGFuZ3VhZ2UoXCJzdlwiLCBcInN2LXNlXCIsIFwiU3ZlbnNrYVwiKSxcbiAgICAgICAgbmV3IExhbmd1YWdlKFwidmlcIiwgXCJ2aS12blwiLCBcIlRp4bq/bmcgVmnhu4d0XCIpLFxuICAgICAgICBuZXcgTGFuZ3VhZ2UoXCJ0aFwiLCBcInRoLXRoXCIsIFwi4LmE4LiX4LiiXCIpLFxuICAgICAgICBuZXcgTGFuZ3VhZ2UoXCJ0clwiLCBcInRyLXRyXCIsIFwiVMO8cmvDp2VcIiksXG4gICAgICAgIG5ldyBMYW5ndWFnZShcInVrXCIsIFwidWstdWFcIiwgXCLQo9C60YDQsNGX0L3RgdGM0LrQsFwiKSxcbiAgICAgICAgbmV3IExhbmd1YWdlKFwiemgtaGFuc1wiLCBcInpoXCIsIFwi5Lit5paHKOeugOS9kylcIiksXG4gICAgICAgIG5ldyBMYW5ndWFnZShcInpoLWhhbnRcIiwgXCJ6aC1oYW50XCIsIFwi5Lit5paHKOe5gemrlClcIiksXG4gICAgXTtcbn0iXX0=