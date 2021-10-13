import {TranslateLoader} from "@ngx-translate/core";
import {Observable} from "rxjs";
import {AR, CA, CS, DA, DE, EL, EN, ES, FIL, FR, HE, HI, ID, IT, JA, KK, KO, MS, NL, PL, PT, RO, RU, SV, TH, TR, UK, VI, ZHHANS, ZHHANT} from "./translations";

export class StaticTranslateLoader implements TranslateLoader {
  translations: { [id: string] : any; } = {};
  defaultLanguage: "en";

  constructor(translations: { [id: string] : any; }) {
    this.translations['ar'] = {...AR, ...translations['ar']};
    this.translations['ca'] = {...CA, ...translations['ca']};
    this.translations['cs'] = {...CS, ...translations['cs']};
    this.translations['da'] = {...DA, ...translations['da']};
    this.translations['de'] = {...DE, ...translations['de']};
    this.translations['el'] = {...EL, ...translations['el']};
    this.translations['en'] = {...EN, ...translations['en']};
    this.translations['es'] = {...ES, ...translations['es']};
    this.translations['fil'] = {...FIL, ...translations['fil']};
    this.translations['fr'] = {...FR, ...translations['fr']};
    this.translations['he'] = {...HE, ...translations['he']};
    this.translations['hi'] = {...HI, ...translations['hi']};
    this.translations['id'] = {...ID, ...translations['id']};
    this.translations['it'] = {...IT, ...translations['it']};
    this.translations['ja'] = {...JA, ...translations['ja']};
    this.translations['kk'] = {...KK, ...translations['kk']};
    this.translations['ko'] = {...KO, ...translations['ko']};
    this.translations['ms'] = {...MS, ...translations['ms']};
    this.translations['nl'] = {...NL, ...translations['nl']};
    this.translations['pl'] = {...PL, ...translations['pl']};
    this.translations['pt'] = {...PT, ...translations['pt']};
    this.translations['ro'] = {...RO, ...translations['ro']};
    this.translations['ru'] = {...RU, ...translations['ru']};
    this.translations['sv'] = {...SV, ...translations['sv']};
    this.translations['th'] = {...TH, ...translations['th']};
    this.translations['tr'] = {...TR, ...translations['tr']};
    this.translations['uk'] = {...UK, ...translations['uk']};
    this.translations['vi'] = {...VI, ...translations['vi']};
    this.translations['zh-hans'] = {...ZHHANS, ...translations['zh-hans']};
    this.translations['zh-hant'] = {...ZHHANT, ...translations['zh-hant']};
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
