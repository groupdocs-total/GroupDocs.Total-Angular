import {APP_INITIALIZER, ModuleWithProviders, NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {
  Api,
  CommonComponentsModule,
  ConfigService,
  ErrorInterceptorService
} from "@groupdocs.examples.angular/common-components";
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {SignatureService} from "./signature.service";
import {SignatureConfigService} from "./signature-config.service";
import {SignatureAppComponent} from "./signature-app.component";
import {SignatureListPanelComponent} from './signature-list-panel/signature-list-panel.component';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import {library} from '@fortawesome/fontawesome-svg-core';
import {fas} from '@fortawesome/free-solid-svg-icons';
import {far} from '@fortawesome/free-regular-svg-icons';
import {SignatureTabComponent} from './signature-tab/signature-tab.component';
import {NewBarQrCodeComponent} from './new-bar-qr-code/new-bar-qr-code.component';
import {UploadSignatureComponent} from './upload-signature/upload-signature.component';
import {DndSignatureDirective} from './dnd-signature.directive';
import {Signature} from './signature/signature.component';
import {ContextMenuComponent} from './context-menu/context-menu.component';
import {SelectSignatureService} from "./select-signature.service";
import {DragSignatureService} from "./drag-signature.service";
import {RemoveSignatureService} from "./remove-signature.service";
import {ActiveSignatureService} from "./active-signature.service";
import {HandLightboxComponent} from './hand-lightbox/hand-lightbox.component';
import {CanvasComponent} from './canvas/canvas.component';
import {StampLightboxComponent} from './stamp-lightbox/stamp-lightbox.component';
import {StampCanvasComponent} from './stamp-canvas/stamp-canvas.component';
import {ActiveCanvasService} from "./active-canvas.service";
import {RemoveCanvasService} from "./remove-canvas.service";
import {TextMenuComponent} from './text-menu/text-menu.component';

export function initializeApp(signatureConfigService: SignatureConfigService) {
  const result = () => signatureConfigService.load();
  return result;
}

@NgModule({
  declarations: [SignatureAppComponent,
    SignatureListPanelComponent,
    SignatureTabComponent,
    NewBarQrCodeComponent,
    UploadSignatureComponent,
    DndSignatureDirective,
    Signature,
    ContextMenuComponent,
    HandLightboxComponent,
    CanvasComponent,
    StampLightboxComponent,
    StampCanvasComponent,
    TextMenuComponent],
  exports: [SignatureAppComponent,
    SignatureListPanelComponent,
    SignatureTabComponent,
    NewBarQrCodeComponent,
    UploadSignatureComponent,
    DndSignatureDirective,
    Signature,
    ContextMenuComponent,
    HandLightboxComponent,
    CanvasComponent,
    StampLightboxComponent,
    StampCanvasComponent,
    TextMenuComponent],
  imports: [CommonModule,
    CommonComponentsModule,
    HttpClientModule,
    FontAwesomeModule],
  providers: [
    SignatureService,
    ConfigService,
    SignatureConfigService,
    SelectSignatureService,
    DragSignatureService,
    RemoveSignatureService,
    ActiveSignatureService,
    ActiveCanvasService,
    RemoveCanvasService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ErrorInterceptorService,
      multi: true
    },
    {
      provide: APP_INITIALIZER,
      useFactory: initializeApp,
      deps: [SignatureConfigService], multi: true
    }
  ],
  entryComponents: [
    Signature,
    StampCanvasComponent
  ]
})
export class SignatureModule {
  constructor() {
    library.add(fas, far);
  }

  static forRoot(apiEndpoint: string): ModuleWithProviders {
    Api.DEFAULT_API_ENDPOINT = apiEndpoint;
    return {
      ngModule: SignatureModule
    };
  }
}
