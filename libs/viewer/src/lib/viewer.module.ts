import {BrowserModule} from '@angular/platform-browser';
import {APP_INITIALIZER, ModuleWithProviders, NgModule} from '@angular/core';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {ViewerAppComponent} from './viewer-app.component';
import {
  Api,
  CommonComponentsModule,
  ErrorInterceptorService, 
  LoadingMaskInterceptorService,
  LoadingMaskService,
  StaticTranslateLoader
} from '@groupdocs.examples.angular/common-components';
import {ViewerService} from "./viewer.service";
import {ConfigService} from "@groupdocs.examples.angular/common-components";
import {ViewerConfigService} from "./viewer-config.service";
import {ThumbnailsComponent} from './thumbnails/thumbnails.component';
import {ExcelDocumentComponent} from './excel-document/excel-document.component';
import {ExcelPageComponent} from './excel-page/excel-page.component';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import {RunPresentationComponent} from './run-presentation/run-presentation.component';
import {TranslateModule, TranslateLoader} from '@ngx-translate/core';
import {AR, CA, CS, DA, DE, EL, EN, ES, FIL, FR, HE, HI, ID, IT, JA, KK, KO, MS, NL, PL, PT, RO, RU, SV, TH, TR, UK, VI, ZHHANS, ZHHANT} from "./translations";

export function initializeApp(viewerConfigService: ViewerConfigService) {
  const result = () => viewerConfigService.load();
  return result;
}

// NOTE: this is required during library compilation see https://github.com/angular/angular/issues/23629#issuecomment-440942981
// @dynamic
export function setupLoadingInterceptor(service: LoadingMaskService) {
  return new LoadingMaskInterceptorService(service);
}

// AoT requires an exported function for factories
export function StaticTranslateLoaderFactory() {
  const translations: { [id: string] : any; } = {};
  translations['ar'] = AR;
  translations['ca'] = CA;
  translations['cs'] = CS;
  translations['da'] = DA;
  translations['de'] = DE;
  translations['el'] = EL;
  translations['en'] = EN;
  translations['es'] = ES;
  translations['fil'] = FIL;
  translations['fr'] = FR;
  translations['he'] = HE;
  translations['hi'] = HI;
  translations['id'] = ID;
  translations['it'] = IT;
  translations['ja'] = JA;
  translations['kk'] = KK;
  translations['ko'] = KO;
  translations['ms'] = MS;
  translations['nl'] = NL;
  translations['pl'] = PL;
  translations['pt'] = PT;
  translations['ro'] = RO;
  translations['ru'] = RU;
  translations['sv'] = SV;
  translations['th'] = TH;
  translations['tr'] = TR;
  translations['uk'] = UK;
  translations['vi'] = VI;
  translations['zh-hans'] = ZHHANS;
  translations['zh-hant'] = ZHHANT;

  return new StaticTranslateLoader(translations);
}

@NgModule({
  declarations: [
    ViewerAppComponent,
    ThumbnailsComponent,
    RunPresentationComponent,
    ExcelDocumentComponent,
    ExcelPageComponent],
  imports: [
    BrowserModule,
    CommonComponentsModule,
    HttpClientModule,
    FontAwesomeModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: StaticTranslateLoaderFactory
      }
    })
  ],
  exports : [
    ViewerAppComponent,
    ThumbnailsComponent,
    RunPresentationComponent,
    ExcelDocumentComponent,
    ExcelPageComponent,
    CommonComponentsModule
  ],
  providers: [
    ViewerService,
    ConfigService,
    ViewerConfigService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ErrorInterceptorService,
      multi: true
    },
    {
      provide: APP_INITIALIZER,
      useFactory: initializeApp,
      deps: [ViewerConfigService], multi: true
    },
    LoadingMaskService,
    {
      provide: HTTP_INTERCEPTORS,
      useFactory: setupLoadingInterceptor,
      multi: true,
      deps: [LoadingMaskService]
    },
    { provide: Window, useValue: window },
  ]
})
export class ViewerModule {
  static forRoot(apiEndpoint : string): ModuleWithProviders {
    Api.DEFAULT_API_ENDPOINT = apiEndpoint
    return {
      ngModule: ViewerModule
    };
  }
}
