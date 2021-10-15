import { CommonTranslateLoader } from "@groupdocs.examples.angular/common-components";
import { AR, CA, CS, DA, DE, EL, EN, ES, FIL, FR, HE, HI, ID, IT, JA, KK, KO, MS, NL, PL, PT, RO, RU, SV, TH, TR, UK, VI, ZHHANS, ZHHANT } from "./translations";

export class ViewerTranslateLoader extends CommonTranslateLoader {
    constructor(translations: { [id: string] : any; } = { }) {
        super({
            'ar': {...AR, ...translations['ar']},
            'ca': {...CA, ...translations['ca']},
            'cs': {...CS, ...translations['cs']},
            'da': {...DA, ...translations['da']},
            'de': {...DE, ...translations['de']},
            'el': {...EL, ...translations['el']},
            'en': {...EN, ...translations['en']},
            'es': {...ES, ...translations['es']},
            'fil': {...FIL, ...translations['fil']},
            'fr': {...FR, ...translations['fr']},
            'he': {...HE, ...translations['he']},
            'hi': {...HI, ...translations['hi']},
            'id': {...ID, ...translations['id']},
            'it': {...IT, ...translations['it']},
            'ja': {...JA, ...translations['ja']},
            'kk': {...KK, ...translations['kk']},
            'ko': {...KO, ...translations['ko']},
            'ms': {...MS, ...translations['ms']},
            'nl': {...NL, ...translations['nl']},
            'pl': {...PL, ...translations['pl']},
            'pt': {...PT, ...translations['pt']},
            'ro': {...RO, ...translations['ro']},
            'ru': {...RU, ...translations['ru']},
            'sv': {...SV, ...translations['sv']},
            'th': {...TH, ...translations['th']},
            'tr': {...TR, ...translations['tr']},
            'uk': {...UK, ...translations['uk']},
            'vi': {...VI, ...translations['vi']},
            'zh-hans': {...ZHHANS, ...translations['zh-hans']},
            'zh-hant': {...ZHHANT, ...translations['zh-hant']},
        });
    }
}