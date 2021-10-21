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
    new Language("zh-hans", "zh-Hans", "中文"),
    new Language("zh-hant", "zh-Hant", "中文"),
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmlld2VyLmNvbnN0YW50cy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bncm91cGRvY3MuZXhhbXBsZXMuYW5ndWxhci92aWV3ZXIvIiwic291cmNlcyI6WyJsaWIvdmlld2VyLmNvbnN0YW50cy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsTUFBTSxPQUFPLFFBQVE7Ozs7OztJQUtqQixZQUFZLElBQVksRUFBRSxhQUFxQixFQUFFLElBQVk7UUFDekQsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7UUFDakIsSUFBSSxDQUFDLGFBQWEsR0FBRyxhQUFhLENBQUM7UUFDbkMsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7SUFDckIsQ0FBQzs7Ozs7SUFFRCxFQUFFLENBQUMsSUFBSTtRQUNILE9BQU8sSUFBSSxDQUFDLElBQUksS0FBSyxJQUFJLElBQUksSUFBSSxDQUFDLGFBQWEsS0FBSyxJQUFJLENBQUM7SUFDN0QsQ0FBQztDQUNKOzs7SUFiRyx3QkFBYTs7SUFDYixpQ0FBc0I7O0lBQ3RCLHdCQUFhOztBQWFqQixNQUFNLE9BQU8sU0FBUzs7QUFDRix5QkFBZSxHQUFHLEdBQUcsQ0FBQztBQUN0QixxQkFBVyxHQUFHLEVBQUUsQ0FBQztBQUNqQixxQkFBVyxHQUFHLEVBQUUsQ0FBQztBQUNqQix3QkFBYyxHQUFHLEVBQUUsQ0FBQztBQUNwQixpQ0FBdUIsR0FBRyxJQUFJLENBQUM7QUFDL0IseUJBQWUsR0FBRyxJQUFJLFFBQVEsQ0FBQyxJQUFJLEVBQUUsT0FBTyxFQUFFLFNBQVMsQ0FBQyxDQUFDO0FBQ3pELG1DQUF5QixHQUFHO0lBQ3hDLElBQUksUUFBUSxDQUFDLElBQUksRUFBRSxJQUFJLEVBQUUsU0FBUyxDQUFDO0lBQ25DLElBQUksUUFBUSxDQUFDLElBQUksRUFBRSxPQUFPLEVBQUUsUUFBUSxDQUFDO0lBQ3JDLElBQUksUUFBUSxDQUFDLElBQUksRUFBRSxPQUFPLEVBQUUsU0FBUyxDQUFDO0lBQ3RDLElBQUksUUFBUSxDQUFDLElBQUksRUFBRSxPQUFPLEVBQUUsT0FBTyxDQUFDO0lBQ3BDLElBQUksUUFBUSxDQUFDLElBQUksRUFBRSxPQUFPLEVBQUUsU0FBUyxDQUFDO0lBQ3RDLElBQUksUUFBUSxDQUFDLElBQUksRUFBRSxPQUFPLEVBQUUsVUFBVSxDQUFDO0lBQ3ZDLElBQUksUUFBUSxDQUFDLElBQUksRUFBRSxPQUFPLEVBQUUsU0FBUyxDQUFDO0lBQ3RDLElBQUksUUFBUSxDQUFDLElBQUksRUFBRSxPQUFPLEVBQUUsU0FBUyxDQUFDO0lBQ3RDLElBQUksUUFBUSxDQUFDLEtBQUssRUFBRSxRQUFRLEVBQUUsVUFBVSxDQUFDO0lBQ3pDLElBQUksUUFBUSxDQUFDLElBQUksRUFBRSxPQUFPLEVBQUUsVUFBVSxDQUFDO0lBQ3ZDLElBQUksUUFBUSxDQUFDLElBQUksRUFBRSxPQUFPLEVBQUUsT0FBTyxDQUFDO0lBQ3BDLElBQUksUUFBUSxDQUFDLElBQUksRUFBRSxPQUFPLEVBQUUsUUFBUSxDQUFDO0lBQ3JDLElBQUksUUFBUSxDQUFDLElBQUksRUFBRSxPQUFPLEVBQUUsV0FBVyxDQUFDO0lBQ3hDLElBQUksUUFBUSxDQUFDLElBQUksRUFBRSxPQUFPLEVBQUUsVUFBVSxDQUFDO0lBQ3ZDLElBQUksUUFBUSxDQUFDLElBQUksRUFBRSxPQUFPLEVBQUUsS0FBSyxDQUFDO0lBQ2xDLElBQUksUUFBUSxDQUFDLElBQUksRUFBRSxPQUFPLEVBQUUsWUFBWSxDQUFDO0lBQ3pDLElBQUksUUFBUSxDQUFDLElBQUksRUFBRSxPQUFPLEVBQUUsS0FBSyxDQUFDO0lBQ2xDLElBQUksUUFBUSxDQUFDLElBQUksRUFBRSxPQUFPLEVBQUUsUUFBUSxDQUFDO0lBQ3JDLElBQUksUUFBUSxDQUFDLElBQUksRUFBRSxPQUFPLEVBQUUsWUFBWSxDQUFDO0lBQ3pDLElBQUksUUFBUSxDQUFDLElBQUksRUFBRSxPQUFPLEVBQUUsUUFBUSxDQUFDO0lBQ3JDLElBQUksUUFBUSxDQUFDLElBQUksRUFBRSxPQUFPLEVBQUUsV0FBVyxDQUFDO0lBQ3hDLElBQUksUUFBUSxDQUFDLElBQUksRUFBRSxPQUFPLEVBQUUsUUFBUSxDQUFDO0lBQ3JDLElBQUksUUFBUSxDQUFDLElBQUksRUFBRSxPQUFPLEVBQUUsU0FBUyxDQUFDO0lBQ3RDLElBQUksUUFBUSxDQUFDLElBQUksRUFBRSxPQUFPLEVBQUUsU0FBUyxDQUFDO0lBQ3RDLElBQUksUUFBUSxDQUFDLElBQUksRUFBRSxPQUFPLEVBQUUsWUFBWSxDQUFDO0lBQ3pDLElBQUksUUFBUSxDQUFDLElBQUksRUFBRSxPQUFPLEVBQUUsS0FBSyxDQUFDO0lBQ2xDLElBQUksUUFBUSxDQUFDLElBQUksRUFBRSxPQUFPLEVBQUUsUUFBUSxDQUFDO0lBQ3JDLElBQUksUUFBUSxDQUFDLElBQUksRUFBRSxPQUFPLEVBQUUsWUFBWSxDQUFDO0lBQ3pDLElBQUksUUFBUSxDQUFDLFNBQVMsRUFBRSxTQUFTLEVBQUUsSUFBSSxDQUFDO0lBQ3hDLElBQUksUUFBUSxDQUFDLFNBQVMsRUFBRSxTQUFTLEVBQUUsSUFBSSxDQUFDO0NBQzNDLENBQUM7OztJQXJDRiwwQkFBc0M7O0lBQ3RDLHNCQUFpQzs7SUFDakMsc0JBQWlDOztJQUNqQyx5QkFBb0M7O0lBQ3BDLGtDQUErQzs7SUFDL0MsMEJBQXlFOztJQUN6RSxvQ0ErQkUiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY2xhc3MgTGFuZ3VhZ2Uge1xyXG4gICAgY29kZTogc3RyaW5nO1xyXG4gICAgYWx0ZXJuYXRlQ29kZTogc3RyaW5nO1xyXG4gICAgbmFtZTogc3RyaW5nO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKGNvZGU6IHN0cmluZywgYWx0ZXJuYXRlQ29kZTogc3RyaW5nLCBuYW1lOiBzdHJpbmcpIHtcclxuICAgICAgICB0aGlzLmNvZGUgPSBjb2RlO1xyXG4gICAgICAgIHRoaXMuYWx0ZXJuYXRlQ29kZSA9IGFsdGVybmF0ZUNvZGU7XHJcbiAgICAgICAgdGhpcy5uYW1lID0gbmFtZTsgXHJcbiAgICB9XHJcblxyXG4gICAgaXMoY29kZSkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmNvZGUgPT09IGNvZGUgfHwgdGhpcy5hbHRlcm5hdGVDb2RlID09PSBjb2RlO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgQ29uc3RhbnRzIHtcclxuICAgIHN0YXRpYyByZWFkb25seSB0aHVtYm5haWxzV2lkdGggPSAzMDA7XHJcbiAgICBzdGF0aWMgcmVhZG9ubHkgc2Nyb2xsV2lkdGggPSAxNztcclxuICAgIHN0YXRpYyByZWFkb25seSB0b3BiYXJXaWR0aCA9IDYwO1xyXG4gICAgc3RhdGljIHJlYWRvbmx5IGRvY3VtZW50TWFyZ2luID0gMjA7XHJcbiAgICBzdGF0aWMgcmVhZG9ubHkgZGVmYXVsdFNob3dMYW5ndWFnZU1lbnUgPSB0cnVlO1xyXG4gICAgc3RhdGljIHJlYWRvbmx5IGRlZmF1bHRMYW5ndWFnZSA9IG5ldyBMYW5ndWFnZShcImVuXCIsIFwiZW4tdXNcIiwgXCJFbmdsaXNoXCIpO1xyXG4gICAgc3RhdGljIHJlYWRvbmx5IGRlZmF1bHRTdXBwb3J0ZWRMYW5ndWFnZXMgPSBbXHJcbiAgICAgICAgbmV3IExhbmd1YWdlKFwiYXJcIiwgXCJhclwiLCBcItin2YTYudix2KjZitipXCIpLFxyXG4gICAgICAgIG5ldyBMYW5ndWFnZShcImNhXCIsIFwiY2EtRVNcIiwgXCJDYXRhbMOgXCIpLFxyXG4gICAgICAgIG5ldyBMYW5ndWFnZShcImNzXCIsIFwiY3MtQ1pcIiwgXCLEjGXFoXRpbmFcIiksXHJcbiAgICAgICAgbmV3IExhbmd1YWdlKFwiZGFcIiwgXCJkYS1ES1wiLCBcIkRhbnNrXCIpLFxyXG4gICAgICAgIG5ldyBMYW5ndWFnZShcImRlXCIsIFwiZGUtREVcIiwgXCJEZXV0c2NoXCIpLFxyXG4gICAgICAgIG5ldyBMYW5ndWFnZShcImVsXCIsIFwiZWwtR1JcIiwgXCLOlc67zrvOt869zrnOus6sXCIpLFxyXG4gICAgICAgIG5ldyBMYW5ndWFnZShcImVuXCIsIFwiZW4tVVNcIiwgXCJFbmdsaXNoXCIpLFxyXG4gICAgICAgIG5ldyBMYW5ndWFnZShcImVzXCIsIFwiZXMtRVNcIiwgXCJFc3Bhw7FvbFwiKSxcclxuICAgICAgICBuZXcgTGFuZ3VhZ2UoXCJmaWxcIiwgXCJmaWwtUEhcIiwgXCJGaWxpcGlub1wiKSxcclxuICAgICAgICBuZXcgTGFuZ3VhZ2UoXCJmclwiLCBcImZyLUZSXCIsIFwiRnJhbsOnYWlzXCIpLFxyXG4gICAgICAgIG5ldyBMYW5ndWFnZShcImhlXCIsIFwiaGUtSUxcIiwgXCLXoteR16jXmdeqXCIpLFxyXG4gICAgICAgIG5ldyBMYW5ndWFnZShcImhpXCIsIFwiaGktSU5cIiwgXCLgpLngpL/gpKjgpY3gpKbgpYBcIiksXHJcbiAgICAgICAgbmV3IExhbmd1YWdlKFwiaWRcIiwgXCJpZC1JRFwiLCBcIkluZG9uZXNpYVwiKSxcclxuICAgICAgICBuZXcgTGFuZ3VhZ2UoXCJpdFwiLCBcIml0LUlUXCIsIFwiSXRhbGlhbm9cIiksXHJcbiAgICAgICAgbmV3IExhbmd1YWdlKFwiamFcIiwgXCJqYS1KUFwiLCBcIuaXpeacrOiqnlwiKSxcclxuICAgICAgICBuZXcgTGFuZ3VhZ2UoXCJra1wiLCBcImtrLUtaXCIsIFwi0prQsNC30LDSmyDQotGW0LvRllwiKSxcclxuICAgICAgICBuZXcgTGFuZ3VhZ2UoXCJrb1wiLCBcImtvLUtSXCIsIFwi7ZWc6rWt7Ja0XCIpLFxyXG4gICAgICAgIG5ldyBMYW5ndWFnZShcIm1zXCIsIFwibXMtTVlcIiwgXCJNZWxheXVcIiksXHJcbiAgICAgICAgbmV3IExhbmd1YWdlKFwibmxcIiwgXCJubC1OTFwiLCBcIk5lZGVybGFuZHNcIiksXHJcbiAgICAgICAgbmV3IExhbmd1YWdlKFwicGxcIiwgXCJwbC1QTFwiLCBcIlBvbHNraVwiKSxcclxuICAgICAgICBuZXcgTGFuZ3VhZ2UoXCJwdFwiLCBcInB0LVBUXCIsIFwiUG9ydHVndcOqc1wiKSxcclxuICAgICAgICBuZXcgTGFuZ3VhZ2UoXCJyb1wiLCBcInJvLVJPXCIsIFwiUm9tw6JuxINcIiksXHJcbiAgICAgICAgbmV3IExhbmd1YWdlKFwicnVcIiwgXCJydS1SVVwiLCBcItCg0YPRgdGB0LrQuNC5XCIpLFxyXG4gICAgICAgIG5ldyBMYW5ndWFnZShcInN2XCIsIFwic3YtU0VcIiwgXCJTdmVuc2thXCIpLFxyXG4gICAgICAgIG5ldyBMYW5ndWFnZShcInZpXCIsIFwidmktVk5cIiwgXCJUaeG6v25nIFZp4buHdFwiKSxcclxuICAgICAgICBuZXcgTGFuZ3VhZ2UoXCJ0aFwiLCBcInRoLVRIXCIsIFwi4LmE4LiX4LiiXCIpLFxyXG4gICAgICAgIG5ldyBMYW5ndWFnZShcInRyXCIsIFwidHItVFJcIiwgXCJUw7xya8OnZVwiKSxcclxuICAgICAgICBuZXcgTGFuZ3VhZ2UoXCJ1a1wiLCBcInVrLVVBXCIsIFwi0KPQutGA0LDRl9C90YHRjNC60LBcIiksXHJcbiAgICAgICAgbmV3IExhbmd1YWdlKFwiemgtaGFuc1wiLCBcInpoLUhhbnNcIiwgXCLkuK3mlodcIiksXHJcbiAgICAgICAgbmV3IExhbmd1YWdlKFwiemgtaGFudFwiLCBcInpoLUhhbnRcIiwgXCLkuK3mlodcIiksXHJcbiAgICBdO1xyXG59Il19