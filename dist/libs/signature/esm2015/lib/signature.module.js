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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2lnbmF0dXJlLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bncm91cGRvY3MuZXhhbXBsZXMuYW5ndWxhci9zaWduYXR1cmUvIiwic291cmNlcyI6WyJsaWIvc2lnbmF0dXJlLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFDLGVBQWUsRUFBdUIsUUFBUSxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQzdFLE9BQU8sRUFBQyxZQUFZLEVBQUUsUUFBUSxFQUFDLE1BQU0saUJBQWlCLENBQUM7QUFDdkQsT0FBTyxFQUNMLEdBQUcsRUFDSCxzQkFBc0IsRUFDdEIsYUFBYSxFQUNiLHVCQUF1QixFQUN2Qiw2QkFBNkIsRUFDN0Isa0JBQWtCLEVBQ25CLE1BQU0sK0NBQStDLENBQUM7QUFDdkQsT0FBTyxFQUFDLGlCQUFpQixFQUFFLGdCQUFnQixFQUFDLE1BQU0sc0JBQXNCLENBQUM7QUFDekUsT0FBTyxFQUFDLGdCQUFnQixFQUFDLE1BQU0scUJBQXFCLENBQUM7QUFDckQsT0FBTyxFQUFDLHNCQUFzQixFQUFDLE1BQU0sNEJBQTRCLENBQUM7QUFDbEUsT0FBTyxFQUFDLHFCQUFxQixFQUFDLE1BQU0sMkJBQTJCLENBQUM7QUFDaEUsT0FBTyxFQUFDLDJCQUEyQixFQUFDLE1BQU0sdURBQXVELENBQUM7QUFDbEcsT0FBTyxFQUFDLGlCQUFpQixFQUFDLE1BQU0sa0NBQWtDLENBQUM7QUFDbkUsT0FBTyxFQUFDLE9BQU8sRUFBQyxNQUFNLG1DQUFtQyxDQUFDO0FBQzFELE9BQU8sRUFBQyxHQUFHLEVBQUMsTUFBTSxtQ0FBbUMsQ0FBQztBQUN0RCxPQUFPLEVBQUMsR0FBRyxFQUFDLE1BQU0scUNBQXFDLENBQUM7QUFDeEQsT0FBTyxFQUFDLHFCQUFxQixFQUFDLE1BQU0sNkNBQTZDLENBQUM7QUFDbEYsT0FBTyxFQUFDLHdCQUF3QixFQUFDLE1BQU0sK0NBQStDLENBQUM7QUFDdkYsT0FBTyxFQUFDLHFCQUFxQixF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QUN0QixzQkFBc0I7b0JBQ3RCLG1CQUFtQjtvQkFDbkIsbUJBQW1CO29CQUNuQixRQUFRO29CQUNSLHVCQUF1QjtvQkFDdkIsNEJBQTRCO29CQUM1QixvQkFBb0I7b0JBQ3BCO3dCQUNFLE9BQU8sRUFBRSxpQkFBaUI7d0JBQzFCLFFBQVEsRUFBRSx1QkFBdUI7d0JBQ2pDLEtBQUssRUFBRSxJQUFJO3FCQUNaO29CQUNEO3dCQUNFLE9BQU8sRUFBRSxlQUFlO3dCQUN4QixVQUFVLEVBQUUsYUFBYTt3QkFDekIsSUFBSSxFQUFFLENBQUMsc0JBQXNCLENBQUMsRUFBRSxLQUFLLEVBQUUsSUFBSTtxQkFDNUM7b0JBQ0Qsa0JBQWtCO29CQUNsQjt3QkFDRSxPQUFPLEVBQUUsaUJBQWlCO3dCQUMxQixVQUFVLEVBQUUsdUJBQXVCO3dCQUNuQyxLQUFLLEVBQUUsSUFBSTt3QkFDWCxJQUFJLEVBQUUsQ0FBQyxrQkFBa0IsQ0FBQztxQkFDM0I7aUJBQ0Y7Z0JBQ0QsZUFBZSxFQUFFO29CQUNmLFNBQVM7b0JBQ1Qsb0JBQW9CO2lCQUNyQjthQUNGIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtBUFBfSU5JVElBTElaRVIsIE1vZHVsZVdpdGhQcm92aWRlcnMsIE5nTW9kdWxlfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHtDb21tb25Nb2R1bGUsIERhdGVQaXBlfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xyXG5pbXBvcnQge1xyXG4gIEFwaSxcclxuICBDb21tb25Db21wb25lbnRzTW9kdWxlLFxyXG4gIENvbmZpZ1NlcnZpY2UsXHJcbiAgRXJyb3JJbnRlcmNlcHRvclNlcnZpY2UsXHJcbiAgTG9hZGluZ01hc2tJbnRlcmNlcHRvclNlcnZpY2UsXHJcbiAgTG9hZGluZ01hc2tTZXJ2aWNlXHJcbn0gZnJvbSBcIkBncm91cGRvY3MuZXhhbXBsZXMuYW5ndWxhci9jb21tb24tY29tcG9uZW50c1wiO1xyXG5pbXBvcnQge0hUVFBfSU5URVJDRVBUT1JTLCBIdHRwQ2xpZW50TW9kdWxlfSBmcm9tIFwiQGFuZ3VsYXIvY29tbW9uL2h0dHBcIjtcclxuaW1wb3J0IHtTaWduYXR1cmVTZXJ2aWNlfSBmcm9tIFwiLi9zaWduYXR1cmUuc2VydmljZVwiO1xyXG5pbXBvcnQge1NpZ25hdHVyZUNvbmZpZ1NlcnZpY2V9IGZyb20gXCIuL3NpZ25hdHVyZS1jb25maWcuc2VydmljZVwiO1xyXG5pbXBvcnQge1NpZ25hdHVyZUFwcENvbXBvbmVudH0gZnJvbSBcIi4vc2lnbmF0dXJlLWFwcC5jb21wb25lbnRcIjtcclxuaW1wb3J0IHtTaWduYXR1cmVMaXN0UGFuZWxDb21wb25lbnR9IGZyb20gJy4vc2lnbmF0dXJlLWxpc3QtcGFuZWwvc2lnbmF0dXJlLWxpc3QtcGFuZWwuY29tcG9uZW50JztcclxuaW1wb3J0IHtGb250QXdlc29tZU1vZHVsZX0gZnJvbSAnQGZvcnRhd2Vzb21lL2FuZ3VsYXItZm9udGF3ZXNvbWUnO1xyXG5pbXBvcnQge2xpYnJhcnl9IGZyb20gJ0Bmb3J0YXdlc29tZS9mb250YXdlc29tZS1zdmctY29yZSc7XHJcbmltcG9ydCB7ZmFzfSBmcm9tICdAZm9ydGF3ZXNvbWUvZnJlZS1zb2xpZC1zdmctaWNvbnMnO1xyXG5pbXBvcnQge2Zhcn0gZnJvbSAnQGZvcnRhd2Vzb21lL2ZyZWUtcmVndWxhci1zdmctaWNvbnMnO1xyXG5pbXBvcnQge05ld0JhclFyQ29kZUNvbXBvbmVudH0gZnJvbSAnLi9uZXctYmFyLXFyLWNvZGUvbmV3LWJhci1xci1jb2RlLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7VXBsb2FkU2lnbmF0dXJlQ29tcG9uZW50fSBmcm9tICcuL3VwbG9hZC1zaWduYXR1cmUvdXBsb2FkLXNpZ25hdHVyZS5jb21wb25lbnQnO1xyXG5pbXBvcnQge0RuZFNpZ25hdHVyZURpcmVjdGl2ZX0gZnJvbSAnLi9kbmQtc2lnbmF0dXJlLmRpcmVjdGl2ZSc7XHJcbmltcG9ydCB7U2lnbmF0dXJlfSBmcm9tICcuL3NpZ25hdHVyZS9zaWduYXR1cmUuY29tcG9uZW50JztcclxuaW1wb3J0IHtTZWxlY3RTaWduYXR1cmVTZXJ2aWNlfSBmcm9tIFwiLi9zZWxlY3Qtc2lnbmF0dXJlLnNlcnZpY2VcIjtcclxuaW1wb3J0IHtEcmFnU2lnbmF0dXJlU2VydmljZX0gZnJvbSBcIi4vZHJhZy1zaWduYXR1cmUuc2VydmljZVwiO1xyXG5pbXBvcnQge1JlbW92ZVNpZ25hdHVyZVNlcnZpY2V9IGZyb20gXCIuL3JlbW92ZS1zaWduYXR1cmUuc2VydmljZVwiO1xyXG5pbXBvcnQge0FjdGl2ZVNpZ25hdHVyZVNlcnZpY2V9IGZyb20gXCIuL2FjdGl2ZS1zaWduYXR1cmUuc2VydmljZVwiO1xyXG5pbXBvcnQge0NhbnZhc0NvbXBvbmVudH0gZnJvbSAnLi9jYW52YXMvY2FudmFzLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7U3RhbXBDYW52YXNDb21wb25lbnR9IGZyb20gJy4vc3RhbXAtY2FudmFzL3N0YW1wLWNhbnZhcy5jb21wb25lbnQnO1xyXG5pbXBvcnQge0FjdGl2ZUNhbnZhc1NlcnZpY2V9IGZyb20gXCIuL2FjdGl2ZS1jYW52YXMuc2VydmljZVwiO1xyXG5pbXBvcnQge1JlbW92ZUNhbnZhc1NlcnZpY2V9IGZyb20gXCIuL3JlbW92ZS1jYW52YXMuc2VydmljZVwiO1xyXG5pbXBvcnQge1NpZ25hdHVyZXNIb2xkZXJTZXJ2aWNlfSBmcm9tIFwiLi9zaWduYXR1cmVzLWhvbGRlci5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7U2lnbmF0dXJlVGFiQWN0aXZhdG9yU2VydmljZX0gZnJvbSBcIi4vc2lnbmF0dXJlLXRhYi1hY3RpdmF0b3Iuc2VydmljZVwiO1xyXG5pbXBvcnQge1NpZ25hdHVyZUxlZnRQYW5lbENvbXBvbmVudH0gZnJvbSAnLi9zaWduYXR1cmUtbGVmdC1wYW5lbC9zaWduYXR1cmUtbGVmdC1wYW5lbC5jb21wb25lbnQnO1xyXG5pbXBvcnQge0hhbmRNb2RhbENvbXBvbmVudH0gZnJvbSAnLi9oYW5kLW1vZGFsL2hhbmQtbW9kYWwuY29tcG9uZW50JztcclxuaW1wb3J0IHtTdGFtcE1vZGFsQ29tcG9uZW50fSBmcm9tICcuL3N0YW1wLW1vZGFsL3N0YW1wLW1vZGFsLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7Q29weVNpZ25hdHVyZVNlcnZpY2V9IGZyb20gXCIuL2NvcHktc2lnbmF0dXJlLnNlcnZpY2VcIjtcclxuaW1wb3J0IHtDbGlja091dHNpZGVNb2R1bGV9IGZyb20gJ25nLWNsaWNrLW91dHNpZGUnO1xyXG5pbXBvcnQge1RyYW5zbGF0ZU1vZHVsZX0gZnJvbSAnQG5neC10cmFuc2xhdGUvY29yZSc7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gaW5pdGlhbGl6ZUFwcChzaWduYXR1cmVDb25maWdTZXJ2aWNlOiBTaWduYXR1cmVDb25maWdTZXJ2aWNlKSB7XHJcbiAgY29uc3QgcmVzdWx0ID0gKCkgPT4gc2lnbmF0dXJlQ29uZmlnU2VydmljZS5sb2FkKCk7XHJcbiAgcmV0dXJuIHJlc3VsdDtcclxufVxyXG5cclxuLy8gTk9URTogdGhpcyBpcyByZXF1aXJlZCBkdXJpbmcgbGlicmFyeSBjb21waWxhdGlvbiBzZWUgaHR0cHM6Ly9naXRodWIuY29tL2FuZ3VsYXIvYW5ndWxhci9pc3N1ZXMvMjM2MjkjaXNzdWVjb21tZW50LTQ0MDk0Mjk4MVxyXG4vLyBAZHluYW1pY1xyXG5leHBvcnQgZnVuY3Rpb24gc2V0dXBMb2FkaW5nSW50ZXJjZXB0b3Ioc2VydmljZTogTG9hZGluZ01hc2tTZXJ2aWNlKSB7XHJcbiAgcmV0dXJuIG5ldyBMb2FkaW5nTWFza0ludGVyY2VwdG9yU2VydmljZShzZXJ2aWNlKTtcclxufVxyXG5cclxuQE5nTW9kdWxlKHtcclxuICBkZWNsYXJhdGlvbnM6IFtTaWduYXR1cmVBcHBDb21wb25lbnQsXHJcbiAgICBTaWduYXR1cmVMaXN0UGFuZWxDb21wb25lbnQsXHJcbiAgICBOZXdCYXJRckNvZGVDb21wb25lbnQsXHJcbiAgICBVcGxvYWRTaWduYXR1cmVDb21wb25lbnQsXHJcbiAgICBEbmRTaWduYXR1cmVEaXJlY3RpdmUsXHJcbiAgICBTaWduYXR1cmUsXHJcbiAgICBDYW52YXNDb21wb25lbnQsXHJcbiAgICBTdGFtcENhbnZhc0NvbXBvbmVudCxcclxuICAgIFNpZ25hdHVyZUxlZnRQYW5lbENvbXBvbmVudCxcclxuICAgIEhhbmRNb2RhbENvbXBvbmVudCxcclxuICAgIFN0YW1wTW9kYWxDb21wb25lbnRcclxuICBdLFxyXG4gIGV4cG9ydHM6IFtTaWduYXR1cmVBcHBDb21wb25lbnQsXHJcbiAgICBTaWduYXR1cmVMaXN0UGFuZWxDb21wb25lbnQsXHJcbiAgICBOZXdCYXJRckNvZGVDb21wb25lbnQsXHJcbiAgICBVcGxvYWRTaWduYXR1cmVDb21wb25lbnQsXHJcbiAgICBEbmRTaWduYXR1cmVEaXJlY3RpdmUsXHJcbiAgICBTaWduYXR1cmUsXHJcbiAgICBDYW52YXNDb21wb25lbnQsXHJcbiAgICBTdGFtcENhbnZhc0NvbXBvbmVudCxcclxuICAgIFNpZ25hdHVyZUxlZnRQYW5lbENvbXBvbmVudCxcclxuICAgIEhhbmRNb2RhbENvbXBvbmVudCxcclxuICAgIFN0YW1wTW9kYWxDb21wb25lbnQsXHJcbiAgICBDb21tb25Db21wb25lbnRzTW9kdWxlXHJcbiAgXSxcclxuICBpbXBvcnRzOiBbQ29tbW9uTW9kdWxlLFxyXG4gICAgQ29tbW9uQ29tcG9uZW50c01vZHVsZSxcclxuICAgIEh0dHBDbGllbnRNb2R1bGUsXHJcbiAgICBGb250QXdlc29tZU1vZHVsZSxcclxuICAgIENsaWNrT3V0c2lkZU1vZHVsZSxcclxuICAgIFRyYW5zbGF0ZU1vZHVsZS5mb3JSb290KClcclxuICBdLFxyXG4gIHByb3ZpZGVyczogW1xyXG4gICAgU2lnbmF0dXJlU2VydmljZSxcclxuICAgIENvbmZpZ1NlcnZpY2UsXHJcbiAgICBTaWduYXR1cmVDb25maWdTZXJ2aWNlLFxyXG4gICAgU2VsZWN0U2lnbmF0dXJlU2VydmljZSxcclxuICAgIERyYWdTaWduYXR1cmVTZXJ2aWNlLFxyXG4gICAgUmVtb3ZlU2lnbmF0dXJlU2VydmljZSxcclxuICAgIEFjdGl2ZVNpZ25hdHVyZVNlcnZpY2UsXHJcbiAgICBBY3RpdmVDYW52YXNTZXJ2aWNlLFxyXG4gICAgUmVtb3ZlQ2FudmFzU2VydmljZSxcclxuICAgIERhdGVQaXBlLFxyXG4gICAgU2lnbmF0dXJlc0hvbGRlclNlcnZpY2UsXHJcbiAgICBTaWduYXR1cmVUYWJBY3RpdmF0b3JTZXJ2aWNlLFxyXG4gICAgQ29weVNpZ25hdHVyZVNlcnZpY2UsXHJcbiAgICB7XHJcbiAgICAgIHByb3ZpZGU6IEhUVFBfSU5URVJDRVBUT1JTLFxyXG4gICAgICB1c2VDbGFzczogRXJyb3JJbnRlcmNlcHRvclNlcnZpY2UsXHJcbiAgICAgIG11bHRpOiB0cnVlXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBwcm92aWRlOiBBUFBfSU5JVElBTElaRVIsXHJcbiAgICAgIHVzZUZhY3Rvcnk6IGluaXRpYWxpemVBcHAsXHJcbiAgICAgIGRlcHM6IFtTaWduYXR1cmVDb25maWdTZXJ2aWNlXSwgbXVsdGk6IHRydWVcclxuICAgIH0sXHJcbiAgICBMb2FkaW5nTWFza1NlcnZpY2UsXHJcbiAgICB7XHJcbiAgICAgIHByb3ZpZGU6IEhUVFBfSU5URVJDRVBUT1JTLFxyXG4gICAgICB1c2VGYWN0b3J5OiBzZXR1cExvYWRpbmdJbnRlcmNlcHRvcixcclxuICAgICAgbXVsdGk6IHRydWUsXHJcbiAgICAgIGRlcHM6IFtMb2FkaW5nTWFza1NlcnZpY2VdXHJcbiAgICB9XHJcbiAgXSxcclxuICBlbnRyeUNvbXBvbmVudHM6IFtcclxuICAgIFNpZ25hdHVyZSxcclxuICAgIFN0YW1wQ2FudmFzQ29tcG9uZW50XHJcbiAgXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgU2lnbmF0dXJlTW9kdWxlIHtcclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIGxpYnJhcnkuYWRkKGZhcywgZmFyKTtcclxuICB9XHJcblxyXG4gIHN0YXRpYyBmb3JSb290KGFwaUVuZHBvaW50OiBzdHJpbmcpOiBNb2R1bGVXaXRoUHJvdmlkZXJzIHtcclxuICAgIEFwaS5ERUZBVUxUX0FQSV9FTkRQT0lOVCA9IGFwaUVuZHBvaW50O1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgbmdNb2R1bGU6IFNpZ25hdHVyZU1vZHVsZVxyXG4gICAgfTtcclxuICB9XHJcbn1cclxuIl19