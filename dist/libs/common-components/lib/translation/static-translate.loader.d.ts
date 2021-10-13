import { TranslateLoader } from "@ngx-translate/core";
import { Observable } from "rxjs";
export declare class StaticTranslateLoader implements TranslateLoader {
    translations: {
        [id: string]: any;
    };
    defaultLanguage: "en";
    constructor(translations: {
        [id: string]: any;
    });
    getTranslation(lang: string): Observable<any>;
}
