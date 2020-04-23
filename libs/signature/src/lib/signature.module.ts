import {APP_INITIALIZER, ModuleWithProviders, NgModule} from '@angular/core';
import {CommonModule, DatePipe} from '@angular/common';
import {
  Api,
  CommonComponentsModule,
  ConfigService,
  ErrorInterceptorService,
  LoadingMaskInterceptorService,
  LoadingMaskService
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
import {NewBarQrCodeComponent} from './new-bar-qr-code/new-bar-qr-code.component';
import {UploadSignatureComponent} from './upload-signature/upload-signature.component';
import {DndSignatureDirective} from './dnd-signature.directive';
import {Signature} from './signature/signature.component';
import {SelectSignatureService} from "./select-signature.service";
import {DragSignatureService} from "./drag-signature.service";
import {RemoveSignatureService} from "./remove-signature.service";
import {ActiveSignatureService} from "./active-signature.service";
import {CanvasComponent} from './canvas/canvas.component';
import {StampCanvasComponent} from './stamp-canvas/stamp-canvas.component';
import {ActiveCanvasService} from "./active-canvas.service";
import {RemoveCanvasService} from "./remove-canvas.service";
import {SignaturesHolderService} from "./signatures-holder.service";
import {SignatureTabActivatorService} from "./signature-tab-activator.service";
import {SignatureLeftPanelComponent} from './signature-left-panel/signature-left-panel.component';
import {HandModalComponent} from './hand-modal/hand-modal.component';
import {StampModalComponent} from './stamp-modal/stamp-modal.component';
import {CopySignatureService} from "./copy-signature.service";
import {ClickOutsideModule} from 'ng-click-outside';

export function initializeApp(signatureConfigService: SignatureConfigService) {
  const result = () => signatureConfigService.load();
  return result;
}

// NOTE: this is required during library compilation see https://github.com/angular/angular/issues/23629#issuecomment-440942981
// @dynamic
export function setupLoadingInterceptor(service: LoadingMaskService) {
  return new LoadingMaskInterceptorService(service);
}

@NgModule({
  declarations: [SignatureAppComponent,
    SignatureListPanelComponent,
    NewBarQrCodeComponent,
    UploadSignatureComponent,
    DndSignatureDirective,
    Signature,
    CanvasComponent,
    StampCanvasComponent,
    SignatureLeftPanelComponent,
    HandModalComponent,
    StampModalComponent],
  exports: [SignatureAppComponent,
    SignatureListPanelComponent,
    NewBarQrCodeComponent,
    UploadSignatureComponent,
    DndSignatureDirective,
    Signature,
    CanvasComponent,
    StampCanvasComponent,
    SignatureLeftPanelComponent,
    HandModalComponent,
    StampModalComponent,
    CommonComponentsModule],
  imports: [CommonModule,
    CommonComponentsModule,
    HttpClientModule,
    FontAwesomeModule,
    ClickOutsideModule],
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
    DatePipe,
    SignaturesHolderService,
    SignatureTabActivatorService,
    CopySignatureService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ErrorInterceptorService,
      multi: true
    },
    {
      provide: APP_INITIALIZER,
      useFactory: initializeApp,
      deps: [SignatureConfigService], multi: true
    },
    LoadingMaskService,
    {
      provide: HTTP_INTERCEPTORS,
      useFactory: setupLoadingInterceptor,
      multi: true,
      deps: [LoadingMaskService]
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
