/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Observable } from "rxjs";
import { AR, CA, CS, DA, DE, EL, EN, ES, FIL, FR, HE, HI, ID, IT, JA, KK, KO, MS, NL, PL, PT, RO, RU, SV, TH, TR, UK, VI, ZHHANS, ZHHANT } from "./translations";
export class StaticTranslateLoader {
    /**
     * @param {?} translations
     */
    constructor(translations) {
        this.translations = {};
        this.translations['ar'] = Object.assign({}, AR, translations['ar']);
        this.translations['ca'] = Object.assign({}, CA, translations['ca']);
        this.translations['cs'] = Object.assign({}, CS, translations['cs']);
        this.translations['da'] = Object.assign({}, DA, translations['da']);
        this.translations['de'] = Object.assign({}, DE, translations['de']);
        this.translations['el'] = Object.assign({}, EL, translations['el']);
        this.translations['en'] = Object.assign({}, EN, translations['en']);
        this.translations['es'] = Object.assign({}, ES, translations['es']);
        this.translations['fil'] = Object.assign({}, FIL, translations['fil']);
        this.translations['fr'] = Object.assign({}, FR, translations['fr']);
        this.translations['he'] = Object.assign({}, HE, translations['he']);
        this.translations['hi'] = Object.assign({}, HI, translations['hi']);
        this.translations['id'] = Object.assign({}, ID, translations['id']);
        this.translations['it'] = Object.assign({}, IT, translations['it']);
        this.translations['ja'] = Object.assign({}, JA, translations['ja']);
        this.translations['kk'] = Object.assign({}, KK, translations['kk']);
        this.translations['ko'] = Object.assign({}, KO, translations['ko']);
        this.translations['ms'] = Object.assign({}, MS, translations['ms']);
        this.translations['nl'] = Object.assign({}, NL, translations['nl']);
        this.translations['pl'] = Object.assign({}, PL, translations['pl']);
        this.translations['pt'] = Object.assign({}, PT, translations['pt']);
        this.translations['ro'] = Object.assign({}, RO, translations['ro']);
        this.translations['ru'] = Object.assign({}, RU, translations['ru']);
        this.translations['sv'] = Object.assign({}, SV, translations['sv']);
        this.translations['th'] = Object.assign({}, TH, translations['th']);
        this.translations['tr'] = Object.assign({}, TR, translations['tr']);
        this.translations['uk'] = Object.assign({}, UK, translations['uk']);
        this.translations['vi'] = Object.assign({}, VI, translations['vi']);
        this.translations['zh-hans'] = Object.assign({}, ZHHANS, translations['zh-hans']);
        this.translations['zh-hant'] = Object.assign({}, ZHHANT, translations['zh-hant']);
    }
    /**
     * @param {?} lang
     * @return {?}
     */
    getTranslation(lang) {
        /** @type {?} */
        const translation = this.translations[lang]
            ? this.translations[lang]
            : this.translations[this.defaultLanguage];
        return new Observable((/**
         * @param {?} subscriber
         * @return {?}
         */
        subscriber => {
            subscriber.next(translation);
        }));
    }
}
if (false) {
    /** @type {?} */
    StaticTranslateLoader.prototype.translations;
    /** @type {?} */
    StaticTranslateLoader.prototype.defaultLanguage;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljLXRyYW5zbGF0ZS5sb2FkZXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ3JvdXBkb2NzLmV4YW1wbGVzLmFuZ3VsYXIvY29tbW9uLWNvbXBvbmVudHMvIiwic291cmNlcyI6WyJsaWIvdHJhbnNsYXRpb24vc3RhdGljLXRyYW5zbGF0ZS5sb2FkZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUNBLE9BQU8sRUFBQyxVQUFVLEVBQUMsTUFBTSxNQUFNLENBQUM7QUFDaEMsT0FBTyxFQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsR0FBRyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFDLE1BQU0sZ0JBQWdCLENBQUM7QUFFL0osTUFBTSxPQUFPLHFCQUFxQjs7OztJQUloQyxZQUFZLFlBQXFDO1FBSGpELGlCQUFZLEdBQTRCLEVBQUUsQ0FBQztRQUl6QyxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxxQkFBTyxFQUFFLEVBQUssWUFBWSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7UUFDekQsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMscUJBQU8sRUFBRSxFQUFLLFlBQVksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO1FBQ3pELElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLHFCQUFPLEVBQUUsRUFBSyxZQUFZLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztRQUN6RCxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxxQkFBTyxFQUFFLEVBQUssWUFBWSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7UUFDekQsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMscUJBQU8sRUFBRSxFQUFLLFlBQVksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO1FBQ3pELElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLHFCQUFPLEVBQUUsRUFBSyxZQUFZLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztRQUN6RCxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxxQkFBTyxFQUFFLEVBQUssWUFBWSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7UUFDekQsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMscUJBQU8sRUFBRSxFQUFLLFlBQVksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO1FBQ3pELElBQUksQ0FBQyxZQUFZLENBQUMsS0FBSyxDQUFDLHFCQUFPLEdBQUcsRUFBSyxZQUFZLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztRQUM1RCxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxxQkFBTyxFQUFFLEVBQUssWUFBWSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7UUFDekQsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMscUJBQU8sRUFBRSxFQUFLLFlBQVksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO1FBQ3pELElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLHFCQUFPLEVBQUUsRUFBSyxZQUFZLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztRQUN6RCxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxxQkFBTyxFQUFFLEVBQUssWUFBWSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7UUFDekQsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMscUJBQU8sRUFBRSxFQUFLLFlBQVksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO1FBQ3pELElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLHFCQUFPLEVBQUUsRUFBSyxZQUFZLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztRQUN6RCxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxxQkFBTyxFQUFFLEVBQUssWUFBWSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7UUFDekQsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMscUJBQU8sRUFBRSxFQUFLLFlBQVksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO1FBQ3pELElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLHFCQUFPLEVBQUUsRUFBSyxZQUFZLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztRQUN6RCxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxxQkFBTyxFQUFFLEVBQUssWUFBWSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7UUFDekQsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMscUJBQU8sRUFBRSxFQUFLLFlBQVksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO1FBQ3pELElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLHFCQUFPLEVBQUUsRUFBSyxZQUFZLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztRQUN6RCxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxxQkFBTyxFQUFFLEVBQUssWUFBWSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7UUFDekQsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMscUJBQU8sRUFBRSxFQUFLLFlBQVksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO1FBQ3pELElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLHFCQUFPLEVBQUUsRUFBSyxZQUFZLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztRQUN6RCxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxxQkFBTyxFQUFFLEVBQUssWUFBWSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7UUFDekQsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMscUJBQU8sRUFBRSxFQUFLLFlBQVksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO1FBQ3pELElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLHFCQUFPLEVBQUUsRUFBSyxZQUFZLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztRQUN6RCxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxxQkFBTyxFQUFFLEVBQUssWUFBWSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7UUFDekQsSUFBSSxDQUFDLFlBQVksQ0FBQyxTQUFTLENBQUMscUJBQU8sTUFBTSxFQUFLLFlBQVksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDO1FBQ3ZFLElBQUksQ0FBQyxZQUFZLENBQUMsU0FBUyxDQUFDLHFCQUFPLE1BQU0sRUFBSyxZQUFZLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQztJQUN6RSxDQUFDOzs7OztJQUVELGNBQWMsQ0FBQyxJQUFZOztjQUNuQixXQUFXLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUM7WUFDdkMsQ0FBQyxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDO1lBQ3pCLENBQUMsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxlQUFlLENBQUM7UUFFN0MsT0FBTyxJQUFJLFVBQVU7Ozs7UUFBQyxVQUFVLENBQUMsRUFBRTtZQUMvQixVQUFVLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO1FBQ2pDLENBQUMsRUFBQyxDQUFDO0lBQ0wsQ0FBQztDQUNGOzs7SUE3Q0MsNkNBQTJDOztJQUMzQyxnREFBc0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1RyYW5zbGF0ZUxvYWRlcn0gZnJvbSBcIkBuZ3gtdHJhbnNsYXRlL2NvcmVcIjtcbmltcG9ydCB7T2JzZXJ2YWJsZX0gZnJvbSBcInJ4anNcIjtcbmltcG9ydCB7QVIsIENBLCBDUywgREEsIERFLCBFTCwgRU4sIEVTLCBGSUwsIEZSLCBIRSwgSEksIElELCBJVCwgSkEsIEtLLCBLTywgTVMsIE5MLCBQTCwgUFQsIFJPLCBSVSwgU1YsIFRILCBUUiwgVUssIFZJLCBaSEhBTlMsIFpISEFOVH0gZnJvbSBcIi4vdHJhbnNsYXRpb25zXCI7XG5cbmV4cG9ydCBjbGFzcyBTdGF0aWNUcmFuc2xhdGVMb2FkZXIgaW1wbGVtZW50cyBUcmFuc2xhdGVMb2FkZXIge1xuICB0cmFuc2xhdGlvbnM6IHsgW2lkOiBzdHJpbmddIDogYW55OyB9ID0ge307XG4gIGRlZmF1bHRMYW5ndWFnZTogXCJlblwiO1xuXG4gIGNvbnN0cnVjdG9yKHRyYW5zbGF0aW9uczogeyBbaWQ6IHN0cmluZ10gOiBhbnk7IH0pIHtcbiAgICB0aGlzLnRyYW5zbGF0aW9uc1snYXInXSA9IHsuLi5BUiwgLi4udHJhbnNsYXRpb25zWydhciddfTtcbiAgICB0aGlzLnRyYW5zbGF0aW9uc1snY2EnXSA9IHsuLi5DQSwgLi4udHJhbnNsYXRpb25zWydjYSddfTtcbiAgICB0aGlzLnRyYW5zbGF0aW9uc1snY3MnXSA9IHsuLi5DUywgLi4udHJhbnNsYXRpb25zWydjcyddfTtcbiAgICB0aGlzLnRyYW5zbGF0aW9uc1snZGEnXSA9IHsuLi5EQSwgLi4udHJhbnNsYXRpb25zWydkYSddfTtcbiAgICB0aGlzLnRyYW5zbGF0aW9uc1snZGUnXSA9IHsuLi5ERSwgLi4udHJhbnNsYXRpb25zWydkZSddfTtcbiAgICB0aGlzLnRyYW5zbGF0aW9uc1snZWwnXSA9IHsuLi5FTCwgLi4udHJhbnNsYXRpb25zWydlbCddfTtcbiAgICB0aGlzLnRyYW5zbGF0aW9uc1snZW4nXSA9IHsuLi5FTiwgLi4udHJhbnNsYXRpb25zWydlbiddfTtcbiAgICB0aGlzLnRyYW5zbGF0aW9uc1snZXMnXSA9IHsuLi5FUywgLi4udHJhbnNsYXRpb25zWydlcyddfTtcbiAgICB0aGlzLnRyYW5zbGF0aW9uc1snZmlsJ10gPSB7Li4uRklMLCAuLi50cmFuc2xhdGlvbnNbJ2ZpbCddfTtcbiAgICB0aGlzLnRyYW5zbGF0aW9uc1snZnInXSA9IHsuLi5GUiwgLi4udHJhbnNsYXRpb25zWydmciddfTtcbiAgICB0aGlzLnRyYW5zbGF0aW9uc1snaGUnXSA9IHsuLi5IRSwgLi4udHJhbnNsYXRpb25zWydoZSddfTtcbiAgICB0aGlzLnRyYW5zbGF0aW9uc1snaGknXSA9IHsuLi5ISSwgLi4udHJhbnNsYXRpb25zWydoaSddfTtcbiAgICB0aGlzLnRyYW5zbGF0aW9uc1snaWQnXSA9IHsuLi5JRCwgLi4udHJhbnNsYXRpb25zWydpZCddfTtcbiAgICB0aGlzLnRyYW5zbGF0aW9uc1snaXQnXSA9IHsuLi5JVCwgLi4udHJhbnNsYXRpb25zWydpdCddfTtcbiAgICB0aGlzLnRyYW5zbGF0aW9uc1snamEnXSA9IHsuLi5KQSwgLi4udHJhbnNsYXRpb25zWydqYSddfTtcbiAgICB0aGlzLnRyYW5zbGF0aW9uc1sna2snXSA9IHsuLi5LSywgLi4udHJhbnNsYXRpb25zWydrayddfTtcbiAgICB0aGlzLnRyYW5zbGF0aW9uc1sna28nXSA9IHsuLi5LTywgLi4udHJhbnNsYXRpb25zWydrbyddfTtcbiAgICB0aGlzLnRyYW5zbGF0aW9uc1snbXMnXSA9IHsuLi5NUywgLi4udHJhbnNsYXRpb25zWydtcyddfTtcbiAgICB0aGlzLnRyYW5zbGF0aW9uc1snbmwnXSA9IHsuLi5OTCwgLi4udHJhbnNsYXRpb25zWydubCddfTtcbiAgICB0aGlzLnRyYW5zbGF0aW9uc1sncGwnXSA9IHsuLi5QTCwgLi4udHJhbnNsYXRpb25zWydwbCddfTtcbiAgICB0aGlzLnRyYW5zbGF0aW9uc1sncHQnXSA9IHsuLi5QVCwgLi4udHJhbnNsYXRpb25zWydwdCddfTtcbiAgICB0aGlzLnRyYW5zbGF0aW9uc1sncm8nXSA9IHsuLi5STywgLi4udHJhbnNsYXRpb25zWydybyddfTtcbiAgICB0aGlzLnRyYW5zbGF0aW9uc1sncnUnXSA9IHsuLi5SVSwgLi4udHJhbnNsYXRpb25zWydydSddfTtcbiAgICB0aGlzLnRyYW5zbGF0aW9uc1snc3YnXSA9IHsuLi5TViwgLi4udHJhbnNsYXRpb25zWydzdiddfTtcbiAgICB0aGlzLnRyYW5zbGF0aW9uc1sndGgnXSA9IHsuLi5USCwgLi4udHJhbnNsYXRpb25zWyd0aCddfTtcbiAgICB0aGlzLnRyYW5zbGF0aW9uc1sndHInXSA9IHsuLi5UUiwgLi4udHJhbnNsYXRpb25zWyd0ciddfTtcbiAgICB0aGlzLnRyYW5zbGF0aW9uc1sndWsnXSA9IHsuLi5VSywgLi4udHJhbnNsYXRpb25zWyd1ayddfTtcbiAgICB0aGlzLnRyYW5zbGF0aW9uc1sndmknXSA9IHsuLi5WSSwgLi4udHJhbnNsYXRpb25zWyd2aSddfTtcbiAgICB0aGlzLnRyYW5zbGF0aW9uc1snemgtaGFucyddID0gey4uLlpISEFOUywgLi4udHJhbnNsYXRpb25zWyd6aC1oYW5zJ119O1xuICAgIHRoaXMudHJhbnNsYXRpb25zWyd6aC1oYW50J10gPSB7Li4uWkhIQU5ULCAuLi50cmFuc2xhdGlvbnNbJ3poLWhhbnQnXX07XG4gIH1cblxuICBnZXRUcmFuc2xhdGlvbihsYW5nOiBzdHJpbmcpOiBPYnNlcnZhYmxlPGFueT4ge1xuICAgIGNvbnN0IHRyYW5zbGF0aW9uID0gdGhpcy50cmFuc2xhdGlvbnNbbGFuZ10gXG4gICAgICAgID8gdGhpcy50cmFuc2xhdGlvbnNbbGFuZ10gXG4gICAgICAgIDogdGhpcy50cmFuc2xhdGlvbnNbdGhpcy5kZWZhdWx0TGFuZ3VhZ2VdO1xuXG4gICAgcmV0dXJuIG5ldyBPYnNlcnZhYmxlKHN1YnNjcmliZXIgPT4ge1xuICAgICAgICBzdWJzY3JpYmVyLm5leHQodHJhbnNsYXRpb24pO1xuICAgIH0pO1xuICB9XG59XG4iXX0=