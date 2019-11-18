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
import { ContextMenuComponent } from './context-menu/context-menu.component';
import { SelectSignatureService } from "./select-signature.service";
import { DragSignatureService } from "./drag-signature.service";
import { RemoveSignatureService } from "./remove-signature.service";
import { ActiveSignatureService } from "./active-signature.service";
import { CanvasComponent } from './canvas/canvas.component';
import { StampCanvasComponent } from './stamp-canvas/stamp-canvas.component';
import { ActiveCanvasService } from "./active-canvas.service";
import { RemoveCanvasService } from "./remove-canvas.service";
import { TextMenuComponent } from './text-menu/text-menu.component';
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
                    ContextMenuComponent,
                    CanvasComponent,
                    StampCanvasComponent,
                    TextMenuComponent,
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
                    ContextMenuComponent,
                    CanvasComponent,
                    StampCanvasComponent,
                    TextMenuComponent,
                    SignatureLeftPanelComponent,
                    HandModalComponent,
                    StampModalComponent],
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2lnbmF0dXJlLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bncm91cGRvY3MuZXhhbXBsZXMuYW5ndWxhci9zaWduYXR1cmUvIiwic291cmNlcyI6WyJsaWIvc2lnbmF0dXJlLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFDLGVBQWUsRUFBdUIsUUFBUSxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQzdFLE9BQU8sRUFBQyxZQUFZLEVBQUUsUUFBUSxFQUFDLE1BQU0saUJBQWlCLENBQUM7QUFDdkQsT0FBTyxFQUNMLEdBQUcsRUFDSCxzQkFBc0IsRUFDdEIsYUFBYSxFQUNiLHVCQUF1QixFQUN2Qiw2QkFBNkIsRUFDN0Isa0JBQWtCLEVBQ25CLE1BQU0sK0NBQStDLENBQUM7QUFDdkQsT0FBTyxFQUFDLGlCQUFpQixFQUFFLGdCQUFnQixFQUFDLE1BQU0sc0JBQXNCLENBQUM7QUFDekUsT0FBTyxFQUFDLGdCQUFnQixFQUFDLE1BQU0scUJBQXFCLENBQUM7QUFDckQsT0FBTyxFQUFDLHNCQUFzQixFQUFDLE1BQU0sNEJBQTRCLENBQUM7QUFDbEUsT0FBTyxFQUFDLHFCQUFxQixFQUFDLE1BQU0sMkJBQTJCLENBQUM7QUFDaEUsT0FBTyxFQUFDLDJCQUEyQixFQUFDLE1BQU0sdURBQXVELENBQUM7QUFDbEcsT0FBTyxFQUFDLGlCQUFpQixFQUFDLE1BQU0sa0NBQWtDLENBQUM7QUFDbkUsT0FBTyxFQUFDLE9BQU8sRUFBQyxNQUFNLG1DQUFtQyxDQUFDO0FBQzFELE9BQU8sRUFBQyxHQUFHLEVBQUMsTUFBTSxtQ0FBbUMsQ0FBQztBQUN0RCxPQUFPLEVBQUMsR0FBRyxFQUFDLE1BQU0scUNBQXFDLENBQUM7QUFDeEQsT0FBTyxFQUFDLHFCQUFxQixFQUFDLE1BQU0seUNBQXlDLENBQUM7QUFDOUUsT0FBTyxFQUFDLHFCQUFxQixFQUFDLE1BQU0sNkNBQTZDLENBQUM7QUFDbEYsT0FBTyxFQUFDLHdCQUF3QixF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b0JBQ2hCLGlCQUFpQjtvQkFDakIsa0JBQWtCLENBQUM7Z0JBQ3JCLFNBQVMsRUFBRTtvQkFDVCxnQkFBZ0I7b0JBQ2hCLGFBQWE7b0JBQ2Isc0JBQXNCO29CQUN0QixzQkFBc0I7b0JBQ3RCLG9CQUFvQjtvQkFDcEIsc0JBQXNCO29CQUN0QixzQkFBc0I7b0JBQ3RCLG1CQUFtQjtvQkFDbkIsbUJBQW1CO29CQUNuQixRQUFRO29CQUNSLHVCQUF1QjtvQkFDdkIsNEJBQTRCO29CQUM1QixvQkFBb0I7b0JBQ3BCO3dCQUNFLE9BQU8sRUFBRSxpQkFBaUI7d0JBQzFCLFFBQVEsRUFBRSx1QkFBdUI7d0JBQ2pDLEtBQUssRUFBRSxJQUFJO3FCQUNaO29CQUNEO3dCQUNFLE9BQU8sRUFBRSxlQUFlO3dCQUN4QixVQUFVLEVBQUUsYUFBYTt3QkFDekIsSUFBSSxFQUFFLENBQUMsc0JBQXNCLENBQUMsRUFBRSxLQUFLLEVBQUUsSUFBSTtxQkFDNUM7b0JBQ0Qsa0JBQWtCO29CQUNsQjt3QkFDRSxPQUFPLEVBQUUsaUJBQWlCO3dCQUMxQixVQUFVLEVBQUUsdUJBQXVCO3dCQUNuQyxLQUFLLEVBQUUsSUFBSTt3QkFDWCxJQUFJLEVBQUUsQ0FBQyxrQkFBa0IsQ0FBQztxQkFDM0I7aUJBQ0Y7Z0JBQ0QsZUFBZSxFQUFFO29CQUNmLFNBQVM7b0JBQ1Qsb0JBQW9CO2lCQUNyQjthQUNGIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtBUFBfSU5JVElBTElaRVIsIE1vZHVsZVdpdGhQcm92aWRlcnMsIE5nTW9kdWxlfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7Q29tbW9uTW9kdWxlLCBEYXRlUGlwZX0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7XG4gIEFwaSxcbiAgQ29tbW9uQ29tcG9uZW50c01vZHVsZSxcbiAgQ29uZmlnU2VydmljZSxcbiAgRXJyb3JJbnRlcmNlcHRvclNlcnZpY2UsXG4gIExvYWRpbmdNYXNrSW50ZXJjZXB0b3JTZXJ2aWNlLFxuICBMb2FkaW5nTWFza1NlcnZpY2Vcbn0gZnJvbSBcIkBncm91cGRvY3MuZXhhbXBsZXMuYW5ndWxhci9jb21tb24tY29tcG9uZW50c1wiO1xuaW1wb3J0IHtIVFRQX0lOVEVSQ0VQVE9SUywgSHR0cENsaWVudE1vZHVsZX0gZnJvbSBcIkBhbmd1bGFyL2NvbW1vbi9odHRwXCI7XG5pbXBvcnQge1NpZ25hdHVyZVNlcnZpY2V9IGZyb20gXCIuL3NpZ25hdHVyZS5zZXJ2aWNlXCI7XG5pbXBvcnQge1NpZ25hdHVyZUNvbmZpZ1NlcnZpY2V9IGZyb20gXCIuL3NpZ25hdHVyZS1jb25maWcuc2VydmljZVwiO1xuaW1wb3J0IHtTaWduYXR1cmVBcHBDb21wb25lbnR9IGZyb20gXCIuL3NpZ25hdHVyZS1hcHAuY29tcG9uZW50XCI7XG5pbXBvcnQge1NpZ25hdHVyZUxpc3RQYW5lbENvbXBvbmVudH0gZnJvbSAnLi9zaWduYXR1cmUtbGlzdC1wYW5lbC9zaWduYXR1cmUtbGlzdC1wYW5lbC5jb21wb25lbnQnO1xuaW1wb3J0IHtGb250QXdlc29tZU1vZHVsZX0gZnJvbSAnQGZvcnRhd2Vzb21lL2FuZ3VsYXItZm9udGF3ZXNvbWUnO1xuaW1wb3J0IHtsaWJyYXJ5fSBmcm9tICdAZm9ydGF3ZXNvbWUvZm9udGF3ZXNvbWUtc3ZnLWNvcmUnO1xuaW1wb3J0IHtmYXN9IGZyb20gJ0Bmb3J0YXdlc29tZS9mcmVlLXNvbGlkLXN2Zy1pY29ucyc7XG5pbXBvcnQge2Zhcn0gZnJvbSAnQGZvcnRhd2Vzb21lL2ZyZWUtcmVndWxhci1zdmctaWNvbnMnO1xuaW1wb3J0IHtTaWduYXR1cmVUYWJDb21wb25lbnR9IGZyb20gJy4vc2lnbmF0dXJlLXRhYi9zaWduYXR1cmUtdGFiLmNvbXBvbmVudCc7XG5pbXBvcnQge05ld0JhclFyQ29kZUNvbXBvbmVudH0gZnJvbSAnLi9uZXctYmFyLXFyLWNvZGUvbmV3LWJhci1xci1jb2RlLmNvbXBvbmVudCc7XG5pbXBvcnQge1VwbG9hZFNpZ25hdHVyZUNvbXBvbmVudH0gZnJvbSAnLi91cGxvYWQtc2lnbmF0dXJlL3VwbG9hZC1zaWduYXR1cmUuY29tcG9uZW50JztcbmltcG9ydCB7RG5kU2lnbmF0dXJlRGlyZWN0aXZlfSBmcm9tICcuL2RuZC1zaWduYXR1cmUuZGlyZWN0aXZlJztcbmltcG9ydCB7U2lnbmF0dXJlfSBmcm9tICcuL3NpZ25hdHVyZS9zaWduYXR1cmUuY29tcG9uZW50JztcbmltcG9ydCB7Q29udGV4dE1lbnVDb21wb25lbnR9IGZyb20gJy4vY29udGV4dC1tZW51L2NvbnRleHQtbWVudS5jb21wb25lbnQnO1xuaW1wb3J0IHtTZWxlY3RTaWduYXR1cmVTZXJ2aWNlfSBmcm9tIFwiLi9zZWxlY3Qtc2lnbmF0dXJlLnNlcnZpY2VcIjtcbmltcG9ydCB7RHJhZ1NpZ25hdHVyZVNlcnZpY2V9IGZyb20gXCIuL2RyYWctc2lnbmF0dXJlLnNlcnZpY2VcIjtcbmltcG9ydCB7UmVtb3ZlU2lnbmF0dXJlU2VydmljZX0gZnJvbSBcIi4vcmVtb3ZlLXNpZ25hdHVyZS5zZXJ2aWNlXCI7XG5pbXBvcnQge0FjdGl2ZVNpZ25hdHVyZVNlcnZpY2V9IGZyb20gXCIuL2FjdGl2ZS1zaWduYXR1cmUuc2VydmljZVwiO1xuaW1wb3J0IHtDYW52YXNDb21wb25lbnR9IGZyb20gJy4vY2FudmFzL2NhbnZhcy5jb21wb25lbnQnO1xuaW1wb3J0IHtTdGFtcENhbnZhc0NvbXBvbmVudH0gZnJvbSAnLi9zdGFtcC1jYW52YXMvc3RhbXAtY2FudmFzLmNvbXBvbmVudCc7XG5pbXBvcnQge0FjdGl2ZUNhbnZhc1NlcnZpY2V9IGZyb20gXCIuL2FjdGl2ZS1jYW52YXMuc2VydmljZVwiO1xuaW1wb3J0IHtSZW1vdmVDYW52YXNTZXJ2aWNlfSBmcm9tIFwiLi9yZW1vdmUtY2FudmFzLnNlcnZpY2VcIjtcbmltcG9ydCB7VGV4dE1lbnVDb21wb25lbnR9IGZyb20gJy4vdGV4dC1tZW51L3RleHQtbWVudS5jb21wb25lbnQnO1xuaW1wb3J0IHtTaWduYXR1cmVzSG9sZGVyU2VydmljZX0gZnJvbSBcIi4vc2lnbmF0dXJlcy1ob2xkZXIuc2VydmljZVwiO1xuaW1wb3J0IHtTaWduYXR1cmVUYWJBY3RpdmF0b3JTZXJ2aWNlfSBmcm9tIFwiLi9zaWduYXR1cmUtdGFiLWFjdGl2YXRvci5zZXJ2aWNlXCI7XG5pbXBvcnQge1NpZ25hdHVyZUxlZnRQYW5lbENvbXBvbmVudH0gZnJvbSAnLi9zaWduYXR1cmUtbGVmdC1wYW5lbC9zaWduYXR1cmUtbGVmdC1wYW5lbC5jb21wb25lbnQnO1xuaW1wb3J0IHtIYW5kTW9kYWxDb21wb25lbnR9IGZyb20gJy4vaGFuZC1tb2RhbC9oYW5kLW1vZGFsLmNvbXBvbmVudCc7XG5pbXBvcnQge1N0YW1wTW9kYWxDb21wb25lbnR9IGZyb20gJy4vc3RhbXAtbW9kYWwvc3RhbXAtbW9kYWwuY29tcG9uZW50JztcbmltcG9ydCB7Q29weVNpZ25hdHVyZVNlcnZpY2V9IGZyb20gXCIuL2NvcHktc2lnbmF0dXJlLnNlcnZpY2VcIjtcbmltcG9ydCB7Q2xpY2tPdXRzaWRlTW9kdWxlfSBmcm9tICduZy1jbGljay1vdXRzaWRlJztcblxuZXhwb3J0IGZ1bmN0aW9uIGluaXRpYWxpemVBcHAoc2lnbmF0dXJlQ29uZmlnU2VydmljZTogU2lnbmF0dXJlQ29uZmlnU2VydmljZSkge1xuICBjb25zdCByZXN1bHQgPSAoKSA9PiBzaWduYXR1cmVDb25maWdTZXJ2aWNlLmxvYWQoKTtcbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuLy8gTk9URTogdGhpcyBpcyByZXF1aXJlZCBkdXJpbmcgbGlicmFyeSBjb21waWxhdGlvbiBzZWUgaHR0cHM6Ly9naXRodWIuY29tL2FuZ3VsYXIvYW5ndWxhci9pc3N1ZXMvMjM2MjkjaXNzdWVjb21tZW50LTQ0MDk0Mjk4MVxuLy8gQGR5bmFtaWNcbmV4cG9ydCBmdW5jdGlvbiBzZXR1cExvYWRpbmdJbnRlcmNlcHRvcihzZXJ2aWNlOiBMb2FkaW5nTWFza1NlcnZpY2UpIHtcbiAgcmV0dXJuIG5ldyBMb2FkaW5nTWFza0ludGVyY2VwdG9yU2VydmljZShzZXJ2aWNlKTtcbn1cblxuQE5nTW9kdWxlKHtcbiAgZGVjbGFyYXRpb25zOiBbU2lnbmF0dXJlQXBwQ29tcG9uZW50LFxuICAgIFNpZ25hdHVyZUxpc3RQYW5lbENvbXBvbmVudCxcbiAgICBTaWduYXR1cmVUYWJDb21wb25lbnQsXG4gICAgTmV3QmFyUXJDb2RlQ29tcG9uZW50LFxuICAgIFVwbG9hZFNpZ25hdHVyZUNvbXBvbmVudCxcbiAgICBEbmRTaWduYXR1cmVEaXJlY3RpdmUsXG4gICAgU2lnbmF0dXJlLFxuICAgIENvbnRleHRNZW51Q29tcG9uZW50LFxuICAgIENhbnZhc0NvbXBvbmVudCxcbiAgICBTdGFtcENhbnZhc0NvbXBvbmVudCxcbiAgICBUZXh0TWVudUNvbXBvbmVudCxcbiAgICBTaWduYXR1cmVMZWZ0UGFuZWxDb21wb25lbnQsXG4gICAgSGFuZE1vZGFsQ29tcG9uZW50LFxuICAgIFN0YW1wTW9kYWxDb21wb25lbnRdLFxuICBleHBvcnRzOiBbU2lnbmF0dXJlQXBwQ29tcG9uZW50LFxuICAgIFNpZ25hdHVyZUxpc3RQYW5lbENvbXBvbmVudCxcbiAgICBTaWduYXR1cmVUYWJDb21wb25lbnQsXG4gICAgTmV3QmFyUXJDb2RlQ29tcG9uZW50LFxuICAgIFVwbG9hZFNpZ25hdHVyZUNvbXBvbmVudCxcbiAgICBEbmRTaWduYXR1cmVEaXJlY3RpdmUsXG4gICAgU2lnbmF0dXJlLFxuICAgIENvbnRleHRNZW51Q29tcG9uZW50LFxuICAgIENhbnZhc0NvbXBvbmVudCxcbiAgICBTdGFtcENhbnZhc0NvbXBvbmVudCxcbiAgICBUZXh0TWVudUNvbXBvbmVudCxcbiAgICBTaWduYXR1cmVMZWZ0UGFuZWxDb21wb25lbnQsXG4gICAgSGFuZE1vZGFsQ29tcG9uZW50LFxuICAgIFN0YW1wTW9kYWxDb21wb25lbnRdLFxuICBpbXBvcnRzOiBbQ29tbW9uTW9kdWxlLFxuICAgIENvbW1vbkNvbXBvbmVudHNNb2R1bGUsXG4gICAgSHR0cENsaWVudE1vZHVsZSxcbiAgICBGb250QXdlc29tZU1vZHVsZSxcbiAgICBDbGlja091dHNpZGVNb2R1bGVdLFxuICBwcm92aWRlcnM6IFtcbiAgICBTaWduYXR1cmVTZXJ2aWNlLFxuICAgIENvbmZpZ1NlcnZpY2UsXG4gICAgU2lnbmF0dXJlQ29uZmlnU2VydmljZSxcbiAgICBTZWxlY3RTaWduYXR1cmVTZXJ2aWNlLFxuICAgIERyYWdTaWduYXR1cmVTZXJ2aWNlLFxuICAgIFJlbW92ZVNpZ25hdHVyZVNlcnZpY2UsXG4gICAgQWN0aXZlU2lnbmF0dXJlU2VydmljZSxcbiAgICBBY3RpdmVDYW52YXNTZXJ2aWNlLFxuICAgIFJlbW92ZUNhbnZhc1NlcnZpY2UsXG4gICAgRGF0ZVBpcGUsXG4gICAgU2lnbmF0dXJlc0hvbGRlclNlcnZpY2UsXG4gICAgU2lnbmF0dXJlVGFiQWN0aXZhdG9yU2VydmljZSxcbiAgICBDb3B5U2lnbmF0dXJlU2VydmljZSxcbiAgICB7XG4gICAgICBwcm92aWRlOiBIVFRQX0lOVEVSQ0VQVE9SUyxcbiAgICAgIHVzZUNsYXNzOiBFcnJvckludGVyY2VwdG9yU2VydmljZSxcbiAgICAgIG11bHRpOiB0cnVlXG4gICAgfSxcbiAgICB7XG4gICAgICBwcm92aWRlOiBBUFBfSU5JVElBTElaRVIsXG4gICAgICB1c2VGYWN0b3J5OiBpbml0aWFsaXplQXBwLFxuICAgICAgZGVwczogW1NpZ25hdHVyZUNvbmZpZ1NlcnZpY2VdLCBtdWx0aTogdHJ1ZVxuICAgIH0sXG4gICAgTG9hZGluZ01hc2tTZXJ2aWNlLFxuICAgIHtcbiAgICAgIHByb3ZpZGU6IEhUVFBfSU5URVJDRVBUT1JTLFxuICAgICAgdXNlRmFjdG9yeTogc2V0dXBMb2FkaW5nSW50ZXJjZXB0b3IsXG4gICAgICBtdWx0aTogdHJ1ZSxcbiAgICAgIGRlcHM6IFtMb2FkaW5nTWFza1NlcnZpY2VdXG4gICAgfVxuICBdLFxuICBlbnRyeUNvbXBvbmVudHM6IFtcbiAgICBTaWduYXR1cmUsXG4gICAgU3RhbXBDYW52YXNDb21wb25lbnRcbiAgXVxufSlcbmV4cG9ydCBjbGFzcyBTaWduYXR1cmVNb2R1bGUge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBsaWJyYXJ5LmFkZChmYXMsIGZhcik7XG4gIH1cblxuICBzdGF0aWMgZm9yUm9vdChhcGlFbmRwb2ludDogc3RyaW5nKTogTW9kdWxlV2l0aFByb3ZpZGVycyB7XG4gICAgQXBpLkRFRkFVTFRfQVBJX0VORFBPSU5UID0gYXBpRW5kcG9pbnQ7XG4gICAgcmV0dXJuIHtcbiAgICAgIG5nTW9kdWxlOiBTaWduYXR1cmVNb2R1bGVcbiAgICB9O1xuICB9XG59XG4iXX0=