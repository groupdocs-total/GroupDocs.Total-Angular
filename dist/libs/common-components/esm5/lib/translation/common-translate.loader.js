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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tbW9uLXRyYW5zbGF0ZS5sb2FkZXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ3JvdXBkb2NzLmV4YW1wbGVzLmFuZ3VsYXIvY29tbW9uLWNvbXBvbmVudHMvIiwic291cmNlcyI6WyJsaWIvdHJhbnNsYXRpb24vY29tbW9uLXRyYW5zbGF0ZS5sb2FkZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFDQSxPQUFPLEVBQUMsVUFBVSxFQUFDLE1BQU0sTUFBTSxDQUFDO0FBQ2hDLE9BQU8sRUFBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEdBQUcsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBQyxNQUFNLGdCQUFnQixDQUFDO0FBRS9KO0lBbUNFLCtCQUFZLFlBQTJDO1FBQTNDLDZCQUFBLEVBQUEsaUJBQTJDO1FBbEN2RCxpQkFBWSxHQUE0QjtZQUN0QyxJQUFJLEVBQUUsRUFBRTtZQUNSLElBQUksRUFBRSxFQUFFO1lBQ1IsSUFBSSxFQUFFLEVBQUU7WUFDUixJQUFJLEVBQUUsRUFBRTtZQUNSLElBQUksRUFBRSxFQUFFO1lBQ1IsSUFBSSxFQUFFLEVBQUU7WUFDUixJQUFJLEVBQUUsRUFBRTtZQUNSLElBQUksRUFBRSxFQUFFO1lBQ1IsS0FBSyxFQUFFLEdBQUc7WUFDVixJQUFJLEVBQUUsRUFBRTtZQUNSLElBQUksRUFBRSxFQUFFO1lBQ1IsSUFBSSxFQUFFLEVBQUU7WUFDUixJQUFJLEVBQUUsRUFBRTtZQUNSLElBQUksRUFBRSxFQUFFO1lBQ1IsSUFBSSxFQUFFLEVBQUU7WUFDUixJQUFJLEVBQUUsRUFBRTtZQUNSLElBQUksRUFBRSxFQUFFO1lBQ1IsSUFBSSxFQUFFLEVBQUU7WUFDUixJQUFJLEVBQUUsRUFBRTtZQUNSLElBQUksRUFBRSxFQUFFO1lBQ1IsSUFBSSxFQUFFLEVBQUU7WUFDUixJQUFJLEVBQUUsRUFBRTtZQUNSLElBQUksRUFBRSxFQUFFO1lBQ1IsSUFBSSxFQUFFLEVBQUU7WUFDUixJQUFJLEVBQUUsRUFBRTtZQUNSLElBQUksRUFBRSxFQUFFO1lBQ1IsSUFBSSxFQUFFLEVBQUU7WUFDUixJQUFJLEVBQUUsRUFBRTtZQUNSLFNBQVMsRUFBRSxNQUFNO1lBQ2pCLFNBQVMsRUFBRSxNQUFNO1NBQ2xCLENBQUM7UUFJQSxLQUFJLElBQU0sR0FBRyxJQUFJLFlBQVksRUFBRTtZQUM3QixJQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsR0FBRyxDQUFDLEVBQUU7Z0JBQ3pCLElBQUksQ0FBQyxZQUFZLENBQUMsR0FBRyxDQUFDLHdCQUFPLElBQUksQ0FBQyxZQUFZLENBQUMsR0FBRyxDQUFDLEVBQUssWUFBWSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7YUFDNUU7U0FDRjtJQUNILENBQUM7Ozs7O0lBRUQsOENBQWM7Ozs7SUFBZCxVQUFlLElBQVk7O1lBQ25CLFdBQVcsR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQztZQUN2QyxDQUFDLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUM7WUFDekIsQ0FBQyxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQztRQUU3QyxPQUFPLElBQUksVUFBVTs7OztRQUFDLFVBQUEsVUFBVTtZQUM1QixVQUFVLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO1FBQ2pDLENBQUMsRUFBQyxDQUFDO0lBQ0wsQ0FBQztJQUNILDRCQUFDO0FBQUQsQ0FBQyxBQXBERCxJQW9EQzs7OztJQW5EQyw2Q0ErQkU7O0lBQ0YsZ0RBQXNCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtUcmFuc2xhdGVMb2FkZXJ9IGZyb20gXCJAbmd4LXRyYW5zbGF0ZS9jb3JlXCI7XHJcbmltcG9ydCB7T2JzZXJ2YWJsZX0gZnJvbSBcInJ4anNcIjtcclxuaW1wb3J0IHtBUiwgQ0EsIENTLCBEQSwgREUsIEVMLCBFTiwgRVMsIEZJTCwgRlIsIEhFLCBISSwgSUQsIElULCBKQSwgS0ssIEtPLCBNUywgTkwsIFBMLCBQVCwgUk8sIFJVLCBTViwgVEgsIFRSLCBVSywgVkksIFpISEFOUywgWkhIQU5UfSBmcm9tIFwiLi90cmFuc2xhdGlvbnNcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBDb21tb25UcmFuc2xhdGVMb2FkZXIgaW1wbGVtZW50cyBUcmFuc2xhdGVMb2FkZXIge1xyXG4gIHRyYW5zbGF0aW9uczogeyBbaWQ6IHN0cmluZ10gOiBhbnk7IH0gPSB7XHJcbiAgICAnYXInOiBBUixcclxuICAgICdjYSc6IENBLFxyXG4gICAgJ2NzJzogQ1MsXHJcbiAgICAnZGEnOiBEQSxcclxuICAgICdkZSc6IERFLFxyXG4gICAgJ2VsJzogRUwsXHJcbiAgICAnZW4nOiBFTixcclxuICAgICdlcyc6IEVTLFxyXG4gICAgJ2ZpbCc6IEZJTCxcclxuICAgICdmcic6IEZSLFxyXG4gICAgJ2hlJzogSEUsXHJcbiAgICAnaGknOiBISSxcclxuICAgICdpZCc6IElELFxyXG4gICAgJ2l0JzogSVQsXHJcbiAgICAnamEnOiBKQSxcclxuICAgICdrayc6IEtLLFxyXG4gICAgJ2tvJzogS08sXHJcbiAgICAnbXMnOiBNUyxcclxuICAgICdubCc6IE5MLFxyXG4gICAgJ3BsJzogUEwsXHJcbiAgICAncHQnOiBQVCxcclxuICAgICdybyc6IFJPLFxyXG4gICAgJ3J1JzogUlUsXHJcbiAgICAnc3YnOiBTVixcclxuICAgICd0aCc6IFRILFxyXG4gICAgJ3RyJzogVFIsXHJcbiAgICAndWsnOiBVSyxcclxuICAgICd2aSc6IFZJLFxyXG4gICAgJ3poLWhhbnMnOiBaSEhBTlMsXHJcbiAgICAnemgtaGFudCc6IFpISEFOVCxcclxuICB9O1xyXG4gIGRlZmF1bHRMYW5ndWFnZTogXCJlblwiO1xyXG5cclxuICBjb25zdHJ1Y3Rvcih0cmFuc2xhdGlvbnM6IHsgW2lkOiBzdHJpbmddIDogYW55OyB9ID0geyB9KSB7XHJcbiAgICBmb3IoY29uc3Qga2V5IGluIHRyYW5zbGF0aW9ucykge1xyXG4gICAgICBpZih0aGlzLnRyYW5zbGF0aW9uc1trZXldKSB7XHJcbiAgICAgICAgdGhpcy50cmFuc2xhdGlvbnNba2V5XSA9IHsuLi50aGlzLnRyYW5zbGF0aW9uc1trZXldLCAuLi50cmFuc2xhdGlvbnNba2V5XX07XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIGdldFRyYW5zbGF0aW9uKGxhbmc6IHN0cmluZyk6IE9ic2VydmFibGU8YW55PiB7XHJcbiAgICBjb25zdCB0cmFuc2xhdGlvbiA9IHRoaXMudHJhbnNsYXRpb25zW2xhbmddXHJcbiAgICAgICAgPyB0aGlzLnRyYW5zbGF0aW9uc1tsYW5nXVxyXG4gICAgICAgIDogdGhpcy50cmFuc2xhdGlvbnNbdGhpcy5kZWZhdWx0TGFuZ3VhZ2VdO1xyXG5cclxuICAgIHJldHVybiBuZXcgT2JzZXJ2YWJsZShzdWJzY3JpYmVyID0+IHtcclxuICAgICAgICBzdWJzY3JpYmVyLm5leHQodHJhbnNsYXRpb24pO1xyXG4gICAgfSk7XHJcbiAgfVxyXG59XHJcbiJdfQ==