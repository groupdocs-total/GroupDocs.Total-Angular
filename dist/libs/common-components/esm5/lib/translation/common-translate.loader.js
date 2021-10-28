/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Observable } from "rxjs";
import { AR, CA, CS, DA, DE, EL, EN, ES, FIL, FR, HE, HI, ID, IT, JA, KK, KO, MS, NL, PL, PT, RO, RU, SV, TH, TR, UK, VI, ZHHANS, ZHHANT } from "./translations";
var CommonTranslateLoader = /** @class */ (function () {
    function CommonTranslateLoader(translations) {
        if (translations === void 0) { translations = {}; }
        this.translations = {
            'ar': AR,
            'ca': CA,
            'cs': CS,
            'da': DA,
            'de': DE,
            'el': EL,
            'en': EN,
            'es': ES,
            'fil': FIL,
            'fr': FR,
            'he': HE,
            'hi': HI,
            'id': ID,
            'it': IT,
            'ja': JA,
            'kk': KK,
            'ko': KO,
            'ms': MS,
            'nl': NL,
            'pl': PL,
            'pt': PT,
            'ro': RO,
            'ru': RU,
            'sv': SV,
            'th': TH,
            'tr': TR,
            'uk': UK,
            'vi': VI,
            'zh-hans': ZHHANS,
            'zh-hant': ZHHANT,
        };
        for (var key in translations) {
            if (this.translations[key]) {
                this.translations[key] = tslib_1.__assign({}, this.translations[key], translations[key]);
            }
        }
    }
    /**
     * @param {?} lang
     * @return {?}
     */
    CommonTranslateLoader.prototype.getTranslation = /**
     * @param {?} lang
     * @return {?}
     */
    function (lang) {
        /** @type {?} */
        var translation = this.translations[lang]
            ? this.translations[lang]
            : this.translations[this.defaultLanguage];
        return new Observable((/**
         * @param {?} subscriber
         * @return {?}
         */
        function (subscriber) {
            subscriber.next(translation);
        }));
    };
    return CommonTranslateLoader;
}());
export { CommonTranslateLoader };
if (false) {
    /** @type {?} */
    CommonTranslateLoader.prototype.translations;
    /** @type {?} */
    CommonTranslateLoader.prototype.defaultLanguage;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tbW9uLXRyYW5zbGF0ZS5sb2FkZXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ3JvdXBkb2NzLmV4YW1wbGVzLmFuZ3VsYXIvY29tbW9uLWNvbXBvbmVudHMvIiwic291cmNlcyI6WyJsaWIvdHJhbnNsYXRpb24vY29tbW9uLXRyYW5zbGF0ZS5sb2FkZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFDQSxPQUFPLEVBQUMsVUFBVSxFQUFDLE1BQU0sTUFBTSxDQUFDO0FBQ2hDLE9BQU8sRUFBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEdBQUcsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBQyxNQUFNLGdCQUFnQixDQUFDO0FBRS9KO0lBbUNFLCtCQUFZLFlBQTJDO1FBQTNDLDZCQUFBLEVBQUEsaUJBQTJDO1FBbEN2RCxpQkFBWSxHQUE0QjtZQUN0QyxJQUFJLEVBQUUsRUFBRTtZQUNSLElBQUksRUFBRSxFQUFFO1lBQ1IsSUFBSSxFQUFFLEVBQUU7WUFDUixJQUFJLEVBQUUsRUFBRTtZQUNSLElBQUksRUFBRSxFQUFFO1lBQ1IsSUFBSSxFQUFFLEVBQUU7WUFDUixJQUFJLEVBQUUsRUFBRTtZQUNSLElBQUksRUFBRSxFQUFFO1lBQ1IsS0FBSyxFQUFFLEdBQUc7WUFDVixJQUFJLEVBQUUsRUFBRTtZQUNSLElBQUksRUFBRSxFQUFFO1lBQ1IsSUFBSSxFQUFFLEVBQUU7WUFDUixJQUFJLEVBQUUsRUFBRTtZQUNSLElBQUksRUFBRSxFQUFFO1lBQ1IsSUFBSSxFQUFFLEVBQUU7WUFDUixJQUFJLEVBQUUsRUFBRTtZQUNSLElBQUksRUFBRSxFQUFFO1lBQ1IsSUFBSSxFQUFFLEVBQUU7WUFDUixJQUFJLEVBQUUsRUFBRTtZQUNSLElBQUksRUFBRSxFQUFFO1lBQ1IsSUFBSSxFQUFFLEVBQUU7WUFDUixJQUFJLEVBQUUsRUFBRTtZQUNSLElBQUksRUFBRSxFQUFFO1lBQ1IsSUFBSSxFQUFFLEVBQUU7WUFDUixJQUFJLEVBQUUsRUFBRTtZQUNSLElBQUksRUFBRSxFQUFFO1lBQ1IsSUFBSSxFQUFFLEVBQUU7WUFDUixJQUFJLEVBQUUsRUFBRTtZQUNSLFNBQVMsRUFBRSxNQUFNO1lBQ2pCLFNBQVMsRUFBRSxNQUFNO1NBQ2xCLENBQUM7UUFJQSxLQUFJLElBQU0sR0FBRyxJQUFJLFlBQVksRUFBRTtZQUM3QixJQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsR0FBRyxDQUFDLEVBQUU7Z0JBQ3pCLElBQUksQ0FBQyxZQUFZLENBQUMsR0FBRyxDQUFDLHdCQUFPLElBQUksQ0FBQyxZQUFZLENBQUMsR0FBRyxDQUFDLEVBQUssWUFBWSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7YUFDNUU7U0FDRjtJQUNILENBQUM7Ozs7O0lBRUQsOENBQWM7Ozs7SUFBZCxVQUFlLElBQVk7O1lBQ25CLFdBQVcsR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQztZQUN2QyxDQUFDLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUM7WUFDekIsQ0FBQyxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQztRQUU3QyxPQUFPLElBQUksVUFBVTs7OztRQUFDLFVBQUEsVUFBVTtZQUM1QixVQUFVLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO1FBQ2pDLENBQUMsRUFBQyxDQUFDO0lBQ0wsQ0FBQztJQUNILDRCQUFDO0FBQUQsQ0FBQyxBQXBERCxJQW9EQzs7OztJQW5EQyw2Q0ErQkU7O0lBQ0YsZ0RBQXNCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtUcmFuc2xhdGVMb2FkZXJ9IGZyb20gXCJAbmd4LXRyYW5zbGF0ZS9jb3JlXCI7XG5pbXBvcnQge09ic2VydmFibGV9IGZyb20gXCJyeGpzXCI7XG5pbXBvcnQge0FSLCBDQSwgQ1MsIERBLCBERSwgRUwsIEVOLCBFUywgRklMLCBGUiwgSEUsIEhJLCBJRCwgSVQsIEpBLCBLSywgS08sIE1TLCBOTCwgUEwsIFBULCBSTywgUlUsIFNWLCBUSCwgVFIsIFVLLCBWSSwgWkhIQU5TLCBaSEhBTlR9IGZyb20gXCIuL3RyYW5zbGF0aW9uc1wiO1xuXG5leHBvcnQgY2xhc3MgQ29tbW9uVHJhbnNsYXRlTG9hZGVyIGltcGxlbWVudHMgVHJhbnNsYXRlTG9hZGVyIHtcbiAgdHJhbnNsYXRpb25zOiB7IFtpZDogc3RyaW5nXSA6IGFueTsgfSA9IHtcbiAgICAnYXInOiBBUixcbiAgICAnY2EnOiBDQSxcbiAgICAnY3MnOiBDUyxcbiAgICAnZGEnOiBEQSxcbiAgICAnZGUnOiBERSxcbiAgICAnZWwnOiBFTCxcbiAgICAnZW4nOiBFTixcbiAgICAnZXMnOiBFUyxcbiAgICAnZmlsJzogRklMLFxuICAgICdmcic6IEZSLFxuICAgICdoZSc6IEhFLFxuICAgICdoaSc6IEhJLFxuICAgICdpZCc6IElELFxuICAgICdpdCc6IElULFxuICAgICdqYSc6IEpBLFxuICAgICdrayc6IEtLLFxuICAgICdrbyc6IEtPLFxuICAgICdtcyc6IE1TLFxuICAgICdubCc6IE5MLFxuICAgICdwbCc6IFBMLFxuICAgICdwdCc6IFBULFxuICAgICdybyc6IFJPLFxuICAgICdydSc6IFJVLFxuICAgICdzdic6IFNWLFxuICAgICd0aCc6IFRILFxuICAgICd0cic6IFRSLFxuICAgICd1ayc6IFVLLFxuICAgICd2aSc6IFZJLFxuICAgICd6aC1oYW5zJzogWkhIQU5TLFxuICAgICd6aC1oYW50JzogWkhIQU5ULFxuICB9O1xuICBkZWZhdWx0TGFuZ3VhZ2U6IFwiZW5cIjtcblxuICBjb25zdHJ1Y3Rvcih0cmFuc2xhdGlvbnM6IHsgW2lkOiBzdHJpbmddIDogYW55OyB9ID0geyB9KSB7XG4gICAgZm9yKGNvbnN0IGtleSBpbiB0cmFuc2xhdGlvbnMpIHtcbiAgICAgIGlmKHRoaXMudHJhbnNsYXRpb25zW2tleV0pIHtcbiAgICAgICAgdGhpcy50cmFuc2xhdGlvbnNba2V5XSA9IHsuLi50aGlzLnRyYW5zbGF0aW9uc1trZXldLCAuLi50cmFuc2xhdGlvbnNba2V5XX07XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgZ2V0VHJhbnNsYXRpb24obGFuZzogc3RyaW5nKTogT2JzZXJ2YWJsZTxhbnk+IHtcbiAgICBjb25zdCB0cmFuc2xhdGlvbiA9IHRoaXMudHJhbnNsYXRpb25zW2xhbmddXG4gICAgICAgID8gdGhpcy50cmFuc2xhdGlvbnNbbGFuZ11cbiAgICAgICAgOiB0aGlzLnRyYW5zbGF0aW9uc1t0aGlzLmRlZmF1bHRMYW5ndWFnZV07XG5cbiAgICByZXR1cm4gbmV3IE9ic2VydmFibGUoc3Vic2NyaWJlciA9PiB7XG4gICAgICAgIHN1YnNjcmliZXIubmV4dCh0cmFuc2xhdGlvbik7XG4gICAgfSk7XG4gIH1cbn1cbiJdfQ==