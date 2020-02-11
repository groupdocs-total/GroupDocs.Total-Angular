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
import { SignatureTabComponent } from './signature-tab/signature-tab.component';
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
                    SignatureTabComponent,
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
                    SignatureTabComponent,
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
            },] }
];
/** @nocollapse */
SignatureModule.ctorParameters = () => [];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2lnbmF0dXJlLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bncm91cGRvY3MuZXhhbXBsZXMuYW5ndWxhci9zaWduYXR1cmUvIiwic291cmNlcyI6WyJsaWIvc2lnbmF0dXJlLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFDLGVBQWUsRUFBdUIsUUFBUSxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQzdFLE9BQU8sRUFBQyxZQUFZLEVBQUUsUUFBUSxFQUFDLE1BQU0saUJBQWlCLENBQUM7QUFDdkQsT0FBTyxFQUNMLEdBQUcsRUFDSCxzQkFBc0IsRUFDdEIsYUFBYSxFQUNiLHVCQUF1QixFQUN2Qiw2QkFBNkIsRUFDN0Isa0JBQWtCLEVBQ25CLE1BQU0sK0NBQStDLENBQUM7QUFDdkQsT0FBTyxFQUFDLGlCQUFpQixFQUFFLGdCQUFnQixFQUFDLE1BQU0sc0JBQXNCLENBQUM7QUFDekUsT0FBTyxFQUFDLGdCQUFnQixFQUFDLE1BQU0scUJBQXFCLENBQUM7QUFDckQsT0FBTyxFQUFDLHNCQUFzQixFQUFDLE1BQU0sNEJBQTRCLENBQUM7QUFDbEUsT0FBTyxFQUFDLHFCQUFxQixFQUFDLE1BQU0sMkJBQTJCLENBQUM7QUFDaEUsT0FBTyxFQUFDLDJCQUEyQixFQUFDLE1BQU0sdURBQXVELENBQUM7QUFDbEcsT0FBTyxFQUFDLGlCQUFpQixFQUFDLE1BQU0sa0NBQWtDLENBQUM7QUFDbkUsT0FBTyxFQUFDLE9BQU8sRUFBQyxNQUFNLG1DQUFtQyxDQUFDO0FBQzFELE9BQU8sRUFBQyxHQUFHLEVBQUMsTUFBTSxtQ0FBbUMsQ0FBQztBQUN0RCxPQUFPLEVBQUMsR0FBRyxFQUFDLE1BQU0scUNBQXFDLENBQUM7QUFDeEQsT0FBTyxFQUFDLHFCQUFxQixFQUFDLE1BQU0seUNBQXlDLENBQUM7QUFDOUUsT0FBTyxFQUFDLHFCQUFxQixFQUFDLE1BQU0sNkNBQTZDLENBQUM7QUFDbEYsT0FBTyxFQUFDLHdCQUF3QixF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QUN0QixzQkFBc0I7b0JBQ3RCLG1CQUFtQjtvQkFDbkIsbUJBQW1CO29CQUNuQixRQUFRO29CQUNSLHVCQUF1QjtvQkFDdkIsNEJBQTRCO29CQUM1QixvQkFBb0I7b0JBQ3BCO3dCQUNFLE9BQU8sRUFBRSxpQkFBaUI7d0JBQzFCLFFBQVEsRUFBRSx1QkFBdUI7d0JBQ2pDLEtBQUssRUFBRSxJQUFJO3FCQUNaO29CQUNEO3dCQUNFLE9BQU8sRUFBRSxlQUFlO3dCQUN4QixVQUFVLEVBQUUsYUFBYTt3QkFDekIsSUFBSSxFQUFFLENBQUMsc0JBQXNCLENBQUMsRUFBRSxLQUFLLEVBQUUsSUFBSTtxQkFDNUM7b0JBQ0Qsa0JBQWtCO29CQUNsQjt3QkFDRSxPQUFPLEVBQUUsaUJBQWlCO3dCQUMxQixVQUFVLEVBQUUsdUJBQXVCO3dCQUNuQyxLQUFLLEVBQUUsSUFBSTt3QkFDWCxJQUFJLEVBQUUsQ0FBQyxrQkFBa0IsQ0FBQztxQkFDM0I7aUJBQ0Y7Z0JBQ0QsZUFBZSxFQUFFO29CQUNmLFNBQVM7b0JBQ1Qsb0JBQW9CO2lCQUNyQjthQUNGIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtBUFBfSU5JVElBTElaRVIsIE1vZHVsZVdpdGhQcm92aWRlcnMsIE5nTW9kdWxlfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7Q29tbW9uTW9kdWxlLCBEYXRlUGlwZX0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7XG4gIEFwaSxcbiAgQ29tbW9uQ29tcG9uZW50c01vZHVsZSxcbiAgQ29uZmlnU2VydmljZSxcbiAgRXJyb3JJbnRlcmNlcHRvclNlcnZpY2UsXG4gIExvYWRpbmdNYXNrSW50ZXJjZXB0b3JTZXJ2aWNlLFxuICBMb2FkaW5nTWFza1NlcnZpY2Vcbn0gZnJvbSBcIkBncm91cGRvY3MuZXhhbXBsZXMuYW5ndWxhci9jb21tb24tY29tcG9uZW50c1wiO1xuaW1wb3J0IHtIVFRQX0lOVEVSQ0VQVE9SUywgSHR0cENsaWVudE1vZHVsZX0gZnJvbSBcIkBhbmd1bGFyL2NvbW1vbi9odHRwXCI7XG5pbXBvcnQge1NpZ25hdHVyZVNlcnZpY2V9IGZyb20gXCIuL3NpZ25hdHVyZS5zZXJ2aWNlXCI7XG5pbXBvcnQge1NpZ25hdHVyZUNvbmZpZ1NlcnZpY2V9IGZyb20gXCIuL3NpZ25hdHVyZS1jb25maWcuc2VydmljZVwiO1xuaW1wb3J0IHtTaWduYXR1cmVBcHBDb21wb25lbnR9IGZyb20gXCIuL3NpZ25hdHVyZS1hcHAuY29tcG9uZW50XCI7XG5pbXBvcnQge1NpZ25hdHVyZUxpc3RQYW5lbENvbXBvbmVudH0gZnJvbSAnLi9zaWduYXR1cmUtbGlzdC1wYW5lbC9zaWduYXR1cmUtbGlzdC1wYW5lbC5jb21wb25lbnQnO1xuaW1wb3J0IHtGb250QXdlc29tZU1vZHVsZX0gZnJvbSAnQGZvcnRhd2Vzb21lL2FuZ3VsYXItZm9udGF3ZXNvbWUnO1xuaW1wb3J0IHtsaWJyYXJ5fSBmcm9tICdAZm9ydGF3ZXNvbWUvZm9udGF3ZXNvbWUtc3ZnLWNvcmUnO1xuaW1wb3J0IHtmYXN9IGZyb20gJ0Bmb3J0YXdlc29tZS9mcmVlLXNvbGlkLXN2Zy1pY29ucyc7XG5pbXBvcnQge2Zhcn0gZnJvbSAnQGZvcnRhd2Vzb21lL2ZyZWUtcmVndWxhci1zdmctaWNvbnMnO1xuaW1wb3J0IHtTaWduYXR1cmVUYWJDb21wb25lbnR9IGZyb20gJy4vc2lnbmF0dXJlLXRhYi9zaWduYXR1cmUtdGFiLmNvbXBvbmVudCc7XG5pbXBvcnQge05ld0JhclFyQ29kZUNvbXBvbmVudH0gZnJvbSAnLi9uZXctYmFyLXFyLWNvZGUvbmV3LWJhci1xci1jb2RlLmNvbXBvbmVudCc7XG5pbXBvcnQge1VwbG9hZFNpZ25hdHVyZUNvbXBvbmVudH0gZnJvbSAnLi91cGxvYWQtc2lnbmF0dXJlL3VwbG9hZC1zaWduYXR1cmUuY29tcG9uZW50JztcbmltcG9ydCB7RG5kU2lnbmF0dXJlRGlyZWN0aXZlfSBmcm9tICcuL2RuZC1zaWduYXR1cmUuZGlyZWN0aXZlJztcbmltcG9ydCB7U2lnbmF0dXJlfSBmcm9tICcuL3NpZ25hdHVyZS9zaWduYXR1cmUuY29tcG9uZW50JztcbmltcG9ydCB7U2VsZWN0U2lnbmF0dXJlU2VydmljZX0gZnJvbSBcIi4vc2VsZWN0LXNpZ25hdHVyZS5zZXJ2aWNlXCI7XG5pbXBvcnQge0RyYWdTaWduYXR1cmVTZXJ2aWNlfSBmcm9tIFwiLi9kcmFnLXNpZ25hdHVyZS5zZXJ2aWNlXCI7XG5pbXBvcnQge1JlbW92ZVNpZ25hdHVyZVNlcnZpY2V9IGZyb20gXCIuL3JlbW92ZS1zaWduYXR1cmUuc2VydmljZVwiO1xuaW1wb3J0IHtBY3RpdmVTaWduYXR1cmVTZXJ2aWNlfSBmcm9tIFwiLi9hY3RpdmUtc2lnbmF0dXJlLnNlcnZpY2VcIjtcbmltcG9ydCB7Q2FudmFzQ29tcG9uZW50fSBmcm9tICcuL2NhbnZhcy9jYW52YXMuY29tcG9uZW50JztcbmltcG9ydCB7U3RhbXBDYW52YXNDb21wb25lbnR9IGZyb20gJy4vc3RhbXAtY2FudmFzL3N0YW1wLWNhbnZhcy5jb21wb25lbnQnO1xuaW1wb3J0IHtBY3RpdmVDYW52YXNTZXJ2aWNlfSBmcm9tIFwiLi9hY3RpdmUtY2FudmFzLnNlcnZpY2VcIjtcbmltcG9ydCB7UmVtb3ZlQ2FudmFzU2VydmljZX0gZnJvbSBcIi4vcmVtb3ZlLWNhbnZhcy5zZXJ2aWNlXCI7XG5pbXBvcnQge1NpZ25hdHVyZXNIb2xkZXJTZXJ2aWNlfSBmcm9tIFwiLi9zaWduYXR1cmVzLWhvbGRlci5zZXJ2aWNlXCI7XG5pbXBvcnQge1NpZ25hdHVyZVRhYkFjdGl2YXRvclNlcnZpY2V9IGZyb20gXCIuL3NpZ25hdHVyZS10YWItYWN0aXZhdG9yLnNlcnZpY2VcIjtcbmltcG9ydCB7U2lnbmF0dXJlTGVmdFBhbmVsQ29tcG9uZW50fSBmcm9tICcuL3NpZ25hdHVyZS1sZWZ0LXBhbmVsL3NpZ25hdHVyZS1sZWZ0LXBhbmVsLmNvbXBvbmVudCc7XG5pbXBvcnQge0hhbmRNb2RhbENvbXBvbmVudH0gZnJvbSAnLi9oYW5kLW1vZGFsL2hhbmQtbW9kYWwuY29tcG9uZW50JztcbmltcG9ydCB7U3RhbXBNb2RhbENvbXBvbmVudH0gZnJvbSAnLi9zdGFtcC1tb2RhbC9zdGFtcC1tb2RhbC5jb21wb25lbnQnO1xuaW1wb3J0IHtDb3B5U2lnbmF0dXJlU2VydmljZX0gZnJvbSBcIi4vY29weS1zaWduYXR1cmUuc2VydmljZVwiO1xuaW1wb3J0IHtDbGlja091dHNpZGVNb2R1bGV9IGZyb20gJ25nLWNsaWNrLW91dHNpZGUnO1xuXG5leHBvcnQgZnVuY3Rpb24gaW5pdGlhbGl6ZUFwcChzaWduYXR1cmVDb25maWdTZXJ2aWNlOiBTaWduYXR1cmVDb25maWdTZXJ2aWNlKSB7XG4gIGNvbnN0IHJlc3VsdCA9ICgpID0+IHNpZ25hdHVyZUNvbmZpZ1NlcnZpY2UubG9hZCgpO1xuICByZXR1cm4gcmVzdWx0O1xufVxuXG4vLyBOT1RFOiB0aGlzIGlzIHJlcXVpcmVkIGR1cmluZyBsaWJyYXJ5IGNvbXBpbGF0aW9uIHNlZSBodHRwczovL2dpdGh1Yi5jb20vYW5ndWxhci9hbmd1bGFyL2lzc3Vlcy8yMzYyOSNpc3N1ZWNvbW1lbnQtNDQwOTQyOTgxXG4vLyBAZHluYW1pY1xuZXhwb3J0IGZ1bmN0aW9uIHNldHVwTG9hZGluZ0ludGVyY2VwdG9yKHNlcnZpY2U6IExvYWRpbmdNYXNrU2VydmljZSkge1xuICByZXR1cm4gbmV3IExvYWRpbmdNYXNrSW50ZXJjZXB0b3JTZXJ2aWNlKHNlcnZpY2UpO1xufVxuXG5ATmdNb2R1bGUoe1xuICBkZWNsYXJhdGlvbnM6IFtTaWduYXR1cmVBcHBDb21wb25lbnQsXG4gICAgU2lnbmF0dXJlTGlzdFBhbmVsQ29tcG9uZW50LFxuICAgIFNpZ25hdHVyZVRhYkNvbXBvbmVudCxcbiAgICBOZXdCYXJRckNvZGVDb21wb25lbnQsXG4gICAgVXBsb2FkU2lnbmF0dXJlQ29tcG9uZW50LFxuICAgIERuZFNpZ25hdHVyZURpcmVjdGl2ZSxcbiAgICBTaWduYXR1cmUsXG4gICAgQ2FudmFzQ29tcG9uZW50LFxuICAgIFN0YW1wQ2FudmFzQ29tcG9uZW50LFxuICAgIFNpZ25hdHVyZUxlZnRQYW5lbENvbXBvbmVudCxcbiAgICBIYW5kTW9kYWxDb21wb25lbnQsXG4gICAgU3RhbXBNb2RhbENvbXBvbmVudF0sXG4gIGV4cG9ydHM6IFtTaWduYXR1cmVBcHBDb21wb25lbnQsXG4gICAgU2lnbmF0dXJlTGlzdFBhbmVsQ29tcG9uZW50LFxuICAgIFNpZ25hdHVyZVRhYkNvbXBvbmVudCxcbiAgICBOZXdCYXJRckNvZGVDb21wb25lbnQsXG4gICAgVXBsb2FkU2lnbmF0dXJlQ29tcG9uZW50LFxuICAgIERuZFNpZ25hdHVyZURpcmVjdGl2ZSxcbiAgICBTaWduYXR1cmUsXG4gICAgQ2FudmFzQ29tcG9uZW50LFxuICAgIFN0YW1wQ2FudmFzQ29tcG9uZW50LFxuICAgIFNpZ25hdHVyZUxlZnRQYW5lbENvbXBvbmVudCxcbiAgICBIYW5kTW9kYWxDb21wb25lbnQsXG4gICAgU3RhbXBNb2RhbENvbXBvbmVudCxcbiAgICBDb21tb25Db21wb25lbnRzTW9kdWxlXSxcbiAgaW1wb3J0czogW0NvbW1vbk1vZHVsZSxcbiAgICBDb21tb25Db21wb25lbnRzTW9kdWxlLFxuICAgIEh0dHBDbGllbnRNb2R1bGUsXG4gICAgRm9udEF3ZXNvbWVNb2R1bGUsXG4gICAgQ2xpY2tPdXRzaWRlTW9kdWxlXSxcbiAgcHJvdmlkZXJzOiBbXG4gICAgU2lnbmF0dXJlU2VydmljZSxcbiAgICBDb25maWdTZXJ2aWNlLFxuICAgIFNpZ25hdHVyZUNvbmZpZ1NlcnZpY2UsXG4gICAgU2VsZWN0U2lnbmF0dXJlU2VydmljZSxcbiAgICBEcmFnU2lnbmF0dXJlU2VydmljZSxcbiAgICBSZW1vdmVTaWduYXR1cmVTZXJ2aWNlLFxuICAgIEFjdGl2ZVNpZ25hdHVyZVNlcnZpY2UsXG4gICAgQWN0aXZlQ2FudmFzU2VydmljZSxcbiAgICBSZW1vdmVDYW52YXNTZXJ2aWNlLFxuICAgIERhdGVQaXBlLFxuICAgIFNpZ25hdHVyZXNIb2xkZXJTZXJ2aWNlLFxuICAgIFNpZ25hdHVyZVRhYkFjdGl2YXRvclNlcnZpY2UsXG4gICAgQ29weVNpZ25hdHVyZVNlcnZpY2UsXG4gICAge1xuICAgICAgcHJvdmlkZTogSFRUUF9JTlRFUkNFUFRPUlMsXG4gICAgICB1c2VDbGFzczogRXJyb3JJbnRlcmNlcHRvclNlcnZpY2UsXG4gICAgICBtdWx0aTogdHJ1ZVxuICAgIH0sXG4gICAge1xuICAgICAgcHJvdmlkZTogQVBQX0lOSVRJQUxJWkVSLFxuICAgICAgdXNlRmFjdG9yeTogaW5pdGlhbGl6ZUFwcCxcbiAgICAgIGRlcHM6IFtTaWduYXR1cmVDb25maWdTZXJ2aWNlXSwgbXVsdGk6IHRydWVcbiAgICB9LFxuICAgIExvYWRpbmdNYXNrU2VydmljZSxcbiAgICB7XG4gICAgICBwcm92aWRlOiBIVFRQX0lOVEVSQ0VQVE9SUyxcbiAgICAgIHVzZUZhY3Rvcnk6IHNldHVwTG9hZGluZ0ludGVyY2VwdG9yLFxuICAgICAgbXVsdGk6IHRydWUsXG4gICAgICBkZXBzOiBbTG9hZGluZ01hc2tTZXJ2aWNlXVxuICAgIH1cbiAgXSxcbiAgZW50cnlDb21wb25lbnRzOiBbXG4gICAgU2lnbmF0dXJlLFxuICAgIFN0YW1wQ2FudmFzQ29tcG9uZW50XG4gIF1cbn0pXG5leHBvcnQgY2xhc3MgU2lnbmF0dXJlTW9kdWxlIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgbGlicmFyeS5hZGQoZmFzLCBmYXIpO1xuICB9XG5cbiAgc3RhdGljIGZvclJvb3QoYXBpRW5kcG9pbnQ6IHN0cmluZyk6IE1vZHVsZVdpdGhQcm92aWRlcnMge1xuICAgIEFwaS5ERUZBVUxUX0FQSV9FTkRQT0lOVCA9IGFwaUVuZHBvaW50O1xuICAgIHJldHVybiB7XG4gICAgICBuZ01vZHVsZTogU2lnbmF0dXJlTW9kdWxlXG4gICAgfTtcbiAgfVxufVxuIl19