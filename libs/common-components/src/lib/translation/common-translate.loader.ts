import {TranslateLoader} from "@ngx-translate/core";
import {Observable} from "rxjs";
import {AR, CA, CS, DA, DE, EL, EN, ES, FIL, FR, HE, HI, ID, IT, JA, KK, KO, MS, NL, PL, PT, RO, RU, SV, TH, TR, UK, VI, ZHHANS, ZHHANT} from "./translations";

export class CommonTranslateLoader implements TranslateLoader {
  translations: { [id: string] : any; } = {
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
  defaultLanguage: "en";

  constructor(translations: { [id: string] : any; } = { }) {
    for(const key in translations) {
      if(this.translations[key]) {
        this.translations[key] = {...this.translations[key], ...translations[key]};
      }
    }
  }

  getTranslation(lang: string): Observable<any> {
    const translation = this.translations[lang]
        ? this.translations[lang]
        : this.translations[this.defaultLanguage];

    return new Observable(subscriber => {
        subscriber.next(translation);
    });
  }
}
