/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { APP_INITIALIZER, NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { Api, CommonComponentsModule, ConfigService, ErrorInterceptorService, LoadingMaskInterceptorService, LoadingMaskService } from "@groupdocs.examples.angular/common-components";
import { HTTP_INTERCEPTORS, HttpClientModule } from "@angular/common/http";
import { SignatureService } from "./signature.service";
import { SignatureConfigService } from "./signature-config.service";
import { SignatureAppComponent } from "./signature-app.component";
import { SignatureListPanelComponent } from './signature-list-panel/signature-list-panel.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
import { NewBarQrCodeComponent } from './new-bar-qr-code/new-bar-qr-code.component';
import { UploadSignatureComponent } from './upload-signature/upload-signature.component';
import { DndSignatureDirective } from './dnd-signature.directive';
import { Signature } from './signature/signature.component';
import { SelectSignatureService } from "./select-signature.service";
import { DragSignatureService } from "./drag-signature.service";
import { RemoveSignatureService } from "./remove-signature.service";
import { ActiveSignatureService } from "./active-signature.service";
import { CanvasComponent } from './canvas/canvas.component';
import { StampCanvasComponent } from './stamp-canvas/stamp-canvas.component';
import { ActiveCanvasService } from "./active-canvas.service";
import { RemoveCanvasService } from "./remove-canvas.service";
import { SignaturesHolderService } from "./signatures-holder.service";
import { SignatureTabActivatorService } from "./signature-tab-activator.service";
import { SignatureLeftPanelComponent } from './signature-left-panel/signature-left-panel.component';
import { HandModalComponent } from './hand-modal/hand-modal.component';
import { StampModalComponent } from './stamp-modal/stamp-modal.component';
import { CopySignatureService } from "./copy-signature.service";
import { ClickOutsideModule } from 'ng-click-outside';
import { TranslateModule } from '@ngx-translate/core';
/**
 * @param {?} signatureConfigService
 * @return {?}
 */
export function initializeApp(signatureConfigService) {
    /** @type {?} */
    const result = (/**
     * @return {?}
     */
    () => signatureConfigService.load());
    return result;
}
// NOTE: this is required during library compilation see https://github.com/angular/angular/issues/23629#issuecomment-440942981
// @dynamic
/**
 * @param {?} service
 * @return {?}
 */
export function setupLoadingInterceptor(service) {
    return new LoadingMaskInterceptorService(service);
}
export class SignatureModule {
    constructor() {
        library.add(fas, far);
    }
    /**
     * @param {?} apiEndpoint
     * @return {?}
     */
    static forRoot(apiEndpoint) {
        Api.DEFAULT_API_ENDPOINT = apiEndpoint;
        return {
            ngModule: SignatureModule
        };
    }
}
SignatureModule.decorators = [
    { type: NgModule, args: [{
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
                    StampModalComponent
                ],
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
                    CommonComponentsModule
                ],
                imports: [CommonModule,
                    CommonComponentsModule,
                    HttpClientModule,
                    FontAwesomeModule,
                    ClickOutsideModule,
                    TranslateModule.forRoot()
                ],
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
            },] }
];
/** @nocollapse */
SignatureModule.ctorParameters = () => [];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2lnbmF0dXJlLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bncm91cGRvY3MuZXhhbXBsZXMuYW5ndWxhci9zaWduYXR1cmUvIiwic291cmNlcyI6WyJsaWIvc2lnbmF0dXJlLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFDLGVBQWUsRUFBdUIsUUFBUSxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQzdFLE9BQU8sRUFBQyxZQUFZLEVBQUUsUUFBUSxFQUFDLE1BQU0saUJBQWlCLENBQUM7QUFDdkQsT0FBTyxFQUNMLEdBQUcsRUFDSCxzQkFBc0IsRUFDdEIsYUFBYSxFQUNiLHVCQUF1QixFQUN2Qiw2QkFBNkIsRUFDN0Isa0JBQWtCLEVBQ25CLE1BQU0sK0NBQStDLENBQUM7QUFDdkQsT0FBTyxFQUFDLGlCQUFpQixFQUFFLGdCQUFnQixFQUFDLE1BQU0sc0JBQXNCLENBQUM7QUFDekUsT0FBTyxFQUFDLGdCQUFnQixFQUFDLE1BQU0scUJBQXFCLENBQUM7QUFDckQsT0FBTyxFQUFDLHNCQUFzQixFQUFDLE1BQU0sNEJBQTRCLENBQUM7QUFDbEUsT0FBTyxFQUFDLHFCQUFxQixFQUFDLE1BQU0sMkJBQTJCLENBQUM7QUFDaEUsT0FBTyxFQUFDLDJCQUEyQixFQUFDLE1BQU0sdURBQXVELENBQUM7QUFDbEcsT0FBTyxFQUFDLGlCQUFpQixFQUFDLE1BQU0sa0NBQWtDLENBQUM7QUFDbkUsT0FBTyxFQUFDLE9BQU8sRUFBQyxNQUFNLG1DQUFtQyxDQUFDO0FBQzFELE9BQU8sRUFBQyxHQUFHLEVBQUMsTUFBTSxtQ0FBbUMsQ0FBQztBQUN0RCxPQUFPLEVBQUMsR0FBRyxFQUFDLE1BQU0scUNBQXFDLENBQUM7QUFDeEQsT0FBTyxFQUFDLHFCQUFxQixFQUFDLE1BQU0sNkNBQTZDLENBQUM7QUFDbEYsT0FBTyxFQUFDLHdCQUF3QixFQUFDLE1BQU0sK0NBQStDLENBQUM7QUFDdkYsT0FBTyxFQUFDLHFCQUFxQixF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QUN0QixzQkFBc0I7b0JBQ3RCLG1CQUFtQjtvQkFDbkIsbUJBQW1CO29CQUNuQixRQUFRO29CQUNSLHVCQUF1QjtvQkFDdkIsNEJBQTRCO29CQUM1QixvQkFBb0I7b0JBQ3BCO3dCQUNFLE9BQU8sRUFBRSxpQkFBaUI7d0JBQzFCLFFBQVEsRUFBRSx1QkFBdUI7d0JBQ2pDLEtBQUssRUFBRSxJQUFJO3FCQUNaO29CQUNEO3dCQUNFLE9BQU8sRUFBRSxlQUFlO3dCQUN4QixVQUFVLEVBQUUsYUFBYTt3QkFDekIsSUFBSSxFQUFFLENBQUMsc0JBQXNCLENBQUMsRUFBRSxLQUFLLEVBQUUsSUFBSTtxQkFDNUM7b0JBQ0Qsa0JBQWtCO29CQUNsQjt3QkFDRSxPQUFPLEVBQUUsaUJBQWlCO3dCQUMxQixVQUFVLEVBQUUsdUJBQXVCO3dCQUNuQyxLQUFLLEVBQUUsSUFBSTt3QkFDWCxJQUFJLEVBQUUsQ0FBQyxrQkFBa0IsQ0FBQztxQkFDM0I7aUJBQ0Y7Z0JBQ0QsZUFBZSxFQUFFO29CQUNmLFNBQVM7b0JBQ1Qsb0JBQW9CO2lCQUNyQjthQUNGIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtBUFBfSU5JVElBTElaRVIsIE1vZHVsZVdpdGhQcm92aWRlcnMsIE5nTW9kdWxlfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7Q29tbW9uTW9kdWxlLCBEYXRlUGlwZX0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7XG4gIEFwaSxcbiAgQ29tbW9uQ29tcG9uZW50c01vZHVsZSxcbiAgQ29uZmlnU2VydmljZSxcbiAgRXJyb3JJbnRlcmNlcHRvclNlcnZpY2UsXG4gIExvYWRpbmdNYXNrSW50ZXJjZXB0b3JTZXJ2aWNlLFxuICBMb2FkaW5nTWFza1NlcnZpY2Vcbn0gZnJvbSBcIkBncm91cGRvY3MuZXhhbXBsZXMuYW5ndWxhci9jb21tb24tY29tcG9uZW50c1wiO1xuaW1wb3J0IHtIVFRQX0lOVEVSQ0VQVE9SUywgSHR0cENsaWVudE1vZHVsZX0gZnJvbSBcIkBhbmd1bGFyL2NvbW1vbi9odHRwXCI7XG5pbXBvcnQge1NpZ25hdHVyZVNlcnZpY2V9IGZyb20gXCIuL3NpZ25hdHVyZS5zZXJ2aWNlXCI7XG5pbXBvcnQge1NpZ25hdHVyZUNvbmZpZ1NlcnZpY2V9IGZyb20gXCIuL3NpZ25hdHVyZS1jb25maWcuc2VydmljZVwiO1xuaW1wb3J0IHtTaWduYXR1cmVBcHBDb21wb25lbnR9IGZyb20gXCIuL3NpZ25hdHVyZS1hcHAuY29tcG9uZW50XCI7XG5pbXBvcnQge1NpZ25hdHVyZUxpc3RQYW5lbENvbXBvbmVudH0gZnJvbSAnLi9zaWduYXR1cmUtbGlzdC1wYW5lbC9zaWduYXR1cmUtbGlzdC1wYW5lbC5jb21wb25lbnQnO1xuaW1wb3J0IHtGb250QXdlc29tZU1vZHVsZX0gZnJvbSAnQGZvcnRhd2Vzb21lL2FuZ3VsYXItZm9udGF3ZXNvbWUnO1xuaW1wb3J0IHtsaWJyYXJ5fSBmcm9tICdAZm9ydGF3ZXNvbWUvZm9udGF3ZXNvbWUtc3ZnLWNvcmUnO1xuaW1wb3J0IHtmYXN9IGZyb20gJ0Bmb3J0YXdlc29tZS9mcmVlLXNvbGlkLXN2Zy1pY29ucyc7XG5pbXBvcnQge2Zhcn0gZnJvbSAnQGZvcnRhd2Vzb21lL2ZyZWUtcmVndWxhci1zdmctaWNvbnMnO1xuaW1wb3J0IHtOZXdCYXJRckNvZGVDb21wb25lbnR9IGZyb20gJy4vbmV3LWJhci1xci1jb2RlL25ldy1iYXItcXItY29kZS5jb21wb25lbnQnO1xuaW1wb3J0IHtVcGxvYWRTaWduYXR1cmVDb21wb25lbnR9IGZyb20gJy4vdXBsb2FkLXNpZ25hdHVyZS91cGxvYWQtc2lnbmF0dXJlLmNvbXBvbmVudCc7XG5pbXBvcnQge0RuZFNpZ25hdHVyZURpcmVjdGl2ZX0gZnJvbSAnLi9kbmQtc2lnbmF0dXJlLmRpcmVjdGl2ZSc7XG5pbXBvcnQge1NpZ25hdHVyZX0gZnJvbSAnLi9zaWduYXR1cmUvc2lnbmF0dXJlLmNvbXBvbmVudCc7XG5pbXBvcnQge1NlbGVjdFNpZ25hdHVyZVNlcnZpY2V9IGZyb20gXCIuL3NlbGVjdC1zaWduYXR1cmUuc2VydmljZVwiO1xuaW1wb3J0IHtEcmFnU2lnbmF0dXJlU2VydmljZX0gZnJvbSBcIi4vZHJhZy1zaWduYXR1cmUuc2VydmljZVwiO1xuaW1wb3J0IHtSZW1vdmVTaWduYXR1cmVTZXJ2aWNlfSBmcm9tIFwiLi9yZW1vdmUtc2lnbmF0dXJlLnNlcnZpY2VcIjtcbmltcG9ydCB7QWN0aXZlU2lnbmF0dXJlU2VydmljZX0gZnJvbSBcIi4vYWN0aXZlLXNpZ25hdHVyZS5zZXJ2aWNlXCI7XG5pbXBvcnQge0NhbnZhc0NvbXBvbmVudH0gZnJvbSAnLi9jYW52YXMvY2FudmFzLmNvbXBvbmVudCc7XG5pbXBvcnQge1N0YW1wQ2FudmFzQ29tcG9uZW50fSBmcm9tICcuL3N0YW1wLWNhbnZhcy9zdGFtcC1jYW52YXMuY29tcG9uZW50JztcbmltcG9ydCB7QWN0aXZlQ2FudmFzU2VydmljZX0gZnJvbSBcIi4vYWN0aXZlLWNhbnZhcy5zZXJ2aWNlXCI7XG5pbXBvcnQge1JlbW92ZUNhbnZhc1NlcnZpY2V9IGZyb20gXCIuL3JlbW92ZS1jYW52YXMuc2VydmljZVwiO1xuaW1wb3J0IHtTaWduYXR1cmVzSG9sZGVyU2VydmljZX0gZnJvbSBcIi4vc2lnbmF0dXJlcy1ob2xkZXIuc2VydmljZVwiO1xuaW1wb3J0IHtTaWduYXR1cmVUYWJBY3RpdmF0b3JTZXJ2aWNlfSBmcm9tIFwiLi9zaWduYXR1cmUtdGFiLWFjdGl2YXRvci5zZXJ2aWNlXCI7XG5pbXBvcnQge1NpZ25hdHVyZUxlZnRQYW5lbENvbXBvbmVudH0gZnJvbSAnLi9zaWduYXR1cmUtbGVmdC1wYW5lbC9zaWduYXR1cmUtbGVmdC1wYW5lbC5jb21wb25lbnQnO1xuaW1wb3J0IHtIYW5kTW9kYWxDb21wb25lbnR9IGZyb20gJy4vaGFuZC1tb2RhbC9oYW5kLW1vZGFsLmNvbXBvbmVudCc7XG5pbXBvcnQge1N0YW1wTW9kYWxDb21wb25lbnR9IGZyb20gJy4vc3RhbXAtbW9kYWwvc3RhbXAtbW9kYWwuY29tcG9uZW50JztcbmltcG9ydCB7Q29weVNpZ25hdHVyZVNlcnZpY2V9IGZyb20gXCIuL2NvcHktc2lnbmF0dXJlLnNlcnZpY2VcIjtcbmltcG9ydCB7Q2xpY2tPdXRzaWRlTW9kdWxlfSBmcm9tICduZy1jbGljay1vdXRzaWRlJztcbmltcG9ydCB7VHJhbnNsYXRlTW9kdWxlfSBmcm9tICdAbmd4LXRyYW5zbGF0ZS9jb3JlJztcblxuZXhwb3J0IGZ1bmN0aW9uIGluaXRpYWxpemVBcHAoc2lnbmF0dXJlQ29uZmlnU2VydmljZTogU2lnbmF0dXJlQ29uZmlnU2VydmljZSkge1xuICBjb25zdCByZXN1bHQgPSAoKSA9PiBzaWduYXR1cmVDb25maWdTZXJ2aWNlLmxvYWQoKTtcbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuLy8gTk9URTogdGhpcyBpcyByZXF1aXJlZCBkdXJpbmcgbGlicmFyeSBjb21waWxhdGlvbiBzZWUgaHR0cHM6Ly9naXRodWIuY29tL2FuZ3VsYXIvYW5ndWxhci9pc3N1ZXMvMjM2MjkjaXNzdWVjb21tZW50LTQ0MDk0Mjk4MVxuLy8gQGR5bmFtaWNcbmV4cG9ydCBmdW5jdGlvbiBzZXR1cExvYWRpbmdJbnRlcmNlcHRvcihzZXJ2aWNlOiBMb2FkaW5nTWFza1NlcnZpY2UpIHtcbiAgcmV0dXJuIG5ldyBMb2FkaW5nTWFza0ludGVyY2VwdG9yU2VydmljZShzZXJ2aWNlKTtcbn1cblxuQE5nTW9kdWxlKHtcbiAgZGVjbGFyYXRpb25zOiBbU2lnbmF0dXJlQXBwQ29tcG9uZW50LFxuICAgIFNpZ25hdHVyZUxpc3RQYW5lbENvbXBvbmVudCxcbiAgICBOZXdCYXJRckNvZGVDb21wb25lbnQsXG4gICAgVXBsb2FkU2lnbmF0dXJlQ29tcG9uZW50LFxuICAgIERuZFNpZ25hdHVyZURpcmVjdGl2ZSxcbiAgICBTaWduYXR1cmUsXG4gICAgQ2FudmFzQ29tcG9uZW50LFxuICAgIFN0YW1wQ2FudmFzQ29tcG9uZW50LFxuICAgIFNpZ25hdHVyZUxlZnRQYW5lbENvbXBvbmVudCxcbiAgICBIYW5kTW9kYWxDb21wb25lbnQsXG4gICAgU3RhbXBNb2RhbENvbXBvbmVudFxuICBdLFxuICBleHBvcnRzOiBbU2lnbmF0dXJlQXBwQ29tcG9uZW50LFxuICAgIFNpZ25hdHVyZUxpc3RQYW5lbENvbXBvbmVudCxcbiAgICBOZXdCYXJRckNvZGVDb21wb25lbnQsXG4gICAgVXBsb2FkU2lnbmF0dXJlQ29tcG9uZW50LFxuICAgIERuZFNpZ25hdHVyZURpcmVjdGl2ZSxcbiAgICBTaWduYXR1cmUsXG4gICAgQ2FudmFzQ29tcG9uZW50LFxuICAgIFN0YW1wQ2FudmFzQ29tcG9uZW50LFxuICAgIFNpZ25hdHVyZUxlZnRQYW5lbENvbXBvbmVudCxcbiAgICBIYW5kTW9kYWxDb21wb25lbnQsXG4gICAgU3RhbXBNb2RhbENvbXBvbmVudCxcbiAgICBDb21tb25Db21wb25lbnRzTW9kdWxlXG4gIF0sXG4gIGltcG9ydHM6IFtDb21tb25Nb2R1bGUsXG4gICAgQ29tbW9uQ29tcG9uZW50c01vZHVsZSxcbiAgICBIdHRwQ2xpZW50TW9kdWxlLFxuICAgIEZvbnRBd2Vzb21lTW9kdWxlLFxuICAgIENsaWNrT3V0c2lkZU1vZHVsZSxcbiAgICBUcmFuc2xhdGVNb2R1bGUuZm9yUm9vdCgpXG4gIF0sXG4gIHByb3ZpZGVyczogW1xuICAgIFNpZ25hdHVyZVNlcnZpY2UsXG4gICAgQ29uZmlnU2VydmljZSxcbiAgICBTaWduYXR1cmVDb25maWdTZXJ2aWNlLFxuICAgIFNlbGVjdFNpZ25hdHVyZVNlcnZpY2UsXG4gICAgRHJhZ1NpZ25hdHVyZVNlcnZpY2UsXG4gICAgUmVtb3ZlU2lnbmF0dXJlU2VydmljZSxcbiAgICBBY3RpdmVTaWduYXR1cmVTZXJ2aWNlLFxuICAgIEFjdGl2ZUNhbnZhc1NlcnZpY2UsXG4gICAgUmVtb3ZlQ2FudmFzU2VydmljZSxcbiAgICBEYXRlUGlwZSxcbiAgICBTaWduYXR1cmVzSG9sZGVyU2VydmljZSxcbiAgICBTaWduYXR1cmVUYWJBY3RpdmF0b3JTZXJ2aWNlLFxuICAgIENvcHlTaWduYXR1cmVTZXJ2aWNlLFxuICAgIHtcbiAgICAgIHByb3ZpZGU6IEhUVFBfSU5URVJDRVBUT1JTLFxuICAgICAgdXNlQ2xhc3M6IEVycm9ySW50ZXJjZXB0b3JTZXJ2aWNlLFxuICAgICAgbXVsdGk6IHRydWVcbiAgICB9LFxuICAgIHtcbiAgICAgIHByb3ZpZGU6IEFQUF9JTklUSUFMSVpFUixcbiAgICAgIHVzZUZhY3Rvcnk6IGluaXRpYWxpemVBcHAsXG4gICAgICBkZXBzOiBbU2lnbmF0dXJlQ29uZmlnU2VydmljZV0sIG11bHRpOiB0cnVlXG4gICAgfSxcbiAgICBMb2FkaW5nTWFza1NlcnZpY2UsXG4gICAge1xuICAgICAgcHJvdmlkZTogSFRUUF9JTlRFUkNFUFRPUlMsXG4gICAgICB1c2VGYWN0b3J5OiBzZXR1cExvYWRpbmdJbnRlcmNlcHRvcixcbiAgICAgIG11bHRpOiB0cnVlLFxuICAgICAgZGVwczogW0xvYWRpbmdNYXNrU2VydmljZV1cbiAgICB9XG4gIF0sXG4gIGVudHJ5Q29tcG9uZW50czogW1xuICAgIFNpZ25hdHVyZSxcbiAgICBTdGFtcENhbnZhc0NvbXBvbmVudFxuICBdXG59KVxuZXhwb3J0IGNsYXNzIFNpZ25hdHVyZU1vZHVsZSB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIGxpYnJhcnkuYWRkKGZhcywgZmFyKTtcbiAgfVxuXG4gIHN0YXRpYyBmb3JSb290KGFwaUVuZHBvaW50OiBzdHJpbmcpOiBNb2R1bGVXaXRoUHJvdmlkZXJzIHtcbiAgICBBcGkuREVGQVVMVF9BUElfRU5EUE9JTlQgPSBhcGlFbmRwb2ludDtcbiAgICByZXR1cm4ge1xuICAgICAgbmdNb2R1bGU6IFNpZ25hdHVyZU1vZHVsZVxuICAgIH07XG4gIH1cbn1cbiJdfQ==