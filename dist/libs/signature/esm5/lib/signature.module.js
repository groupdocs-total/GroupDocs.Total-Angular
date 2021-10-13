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
/**
 * @param {?} signatureConfigService
 * @return {?}
 */
export function initializeApp(signatureConfigService) {
    /** @type {?} */
    var result = (/**
     * @return {?}
     */
    function () { return signatureConfigService.load(); });
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
var SignatureModule = /** @class */ (function () {
    function SignatureModule() {
        library.add(fas, far);
    }
    /**
     * @param {?} apiEndpoint
     * @return {?}
     */
    SignatureModule.forRoot = /**
     * @param {?} apiEndpoint
     * @return {?}
     */
    function (apiEndpoint) {
        Api.DEFAULT_API_ENDPOINT = apiEndpoint;
        return {
            ngModule: SignatureModule
        };
    };
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
                },] }
    ];
    /** @nocollapse */
    SignatureModule.ctorParameters = function () { return []; };
    return SignatureModule;
}());
export { SignatureModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2lnbmF0dXJlLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bncm91cGRvY3MuZXhhbXBsZXMuYW5ndWxhci9zaWduYXR1cmUvIiwic291cmNlcyI6WyJsaWIvc2lnbmF0dXJlLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFDLGVBQWUsRUFBdUIsUUFBUSxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQzdFLE9BQU8sRUFBQyxZQUFZLEVBQUUsUUFBUSxFQUFDLE1BQU0saUJBQWlCLENBQUM7QUFDdkQsT0FBTyxFQUNMLEdBQUcsRUFDSCxzQkFBc0IsRUFDdEIsYUFBYSxFQUNiLHVCQUF1QixFQUN2Qiw2QkFBNkIsRUFDN0Isa0JBQWtCLEVBQ25CLE1BQU0sK0NBQStDLENBQUM7QUFDdkQsT0FBTyxFQUFDLGlCQUFpQixFQUFFLGdCQUFnQixFQUFDLE1BQU0sc0JBQXNCLENBQUM7QUFDekUsT0FBTyxFQUFDLGdCQUFnQixFQUFDLE1BQU0scUJBQXFCLENBQUM7QUFDckQsT0FBTyxFQUFDLHNCQUFzQixFQUFDLE1BQU0sNEJBQTRCLENBQUM7QUFDbEUsT0FBTyxFQUFDLHFCQUFxQixFQUFDLE1BQU0sMkJBQTJCLENBQUM7QUFDaEUsT0FBTyxFQUFDLDJCQUEyQixFQUFDLE1BQU0sdURBQXVELENBQUM7QUFDbEcsT0FBTyxFQUFDLGlCQUFpQixFQUFDLE1BQU0sa0NBQWtDLENBQUM7QUFDbkUsT0FBTyxFQUFDLE9BQU8sRUFBQyxNQUFNLG1DQUFtQyxDQUFDO0FBQzFELE9BQU8sRUFBQyxHQUFHLEVBQUMsTUFBTSxtQ0FBbUMsQ0FBQztBQUN0RCxPQUFPLEVBQUMsR0FBRyxFQUFDLE1BQU0scUNBQXFDLENBQUM7QUFDeEQsT0FBTyxFQUFDLHFCQUFxQixFQUFDLE1BQU0sNkNBQTZDLENBQUM7QUFDbEYsT0FBTyxFQUFDLHdCQUF3QixFQUFDLE1BQU0sK0NBQStDLENBQUM7QUFDdkYsT0FBTyxFQUFDLHFCQUFxQixF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NUIsb0JBQW9CO3dCQUNwQjs0QkFDRSxPQUFPLEVBQUUsaUJBQWlCOzRCQUMxQixRQUFRLEVBQUUsdUJBQXVCOzRCQUNqQyxLQUFLLEVBQUUsSUFBSTt5QkFDWjt3QkFDRDs0QkFDRSxPQUFPLEVBQUUsZUFBZTs0QkFDeEIsVUFBVSxFQUFFLGFBQWE7NEJBQ3pCLElBQUksRUFBRSxDQUFDLHNCQUFzQixDQUFDLEVBQUUsS0FBSyxFQUFFLElBQUk7eUJBQzVDO3dCQUNELGtCQUFrQjt3QkFDbEI7NEJBQ0UsT0FBTyxFQUFFLGlCQUFpQjs0QkFDMUIsVUFBVSxFQUFFLHVCQUF1Qjs0QkFDbkMsS0FBSyxFQUFFLElBQUk7NEJBQ1gsSUFBSSxFQUFFLENBQUMsa0JBQWtCLENBQUM7eUJBQzNCO3FCQUNGO29CQUNELGVBQWUsRUFBRTt3QkFDZixTQUFTO3dCQUNULG9CQUFvQjtxQkFDckI7aUJBQ0Y7Ozs7SUFZRCxzQkFBQztDQUFBLEFBN0VELElBNkVDO1NBWFksZUFBZSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7QVBQX0lOSVRJQUxJWkVSLCBNb2R1bGVXaXRoUHJvdmlkZXJzLCBOZ01vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7Q29tbW9uTW9kdWxlLCBEYXRlUGlwZX0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcclxuaW1wb3J0IHtcclxuICBBcGksXHJcbiAgQ29tbW9uQ29tcG9uZW50c01vZHVsZSxcclxuICBDb25maWdTZXJ2aWNlLFxyXG4gIEVycm9ySW50ZXJjZXB0b3JTZXJ2aWNlLFxyXG4gIExvYWRpbmdNYXNrSW50ZXJjZXB0b3JTZXJ2aWNlLFxyXG4gIExvYWRpbmdNYXNrU2VydmljZVxyXG59IGZyb20gXCJAZ3JvdXBkb2NzLmV4YW1wbGVzLmFuZ3VsYXIvY29tbW9uLWNvbXBvbmVudHNcIjtcclxuaW1wb3J0IHtIVFRQX0lOVEVSQ0VQVE9SUywgSHR0cENsaWVudE1vZHVsZX0gZnJvbSBcIkBhbmd1bGFyL2NvbW1vbi9odHRwXCI7XHJcbmltcG9ydCB7U2lnbmF0dXJlU2VydmljZX0gZnJvbSBcIi4vc2lnbmF0dXJlLnNlcnZpY2VcIjtcclxuaW1wb3J0IHtTaWduYXR1cmVDb25maWdTZXJ2aWNlfSBmcm9tIFwiLi9zaWduYXR1cmUtY29uZmlnLnNlcnZpY2VcIjtcclxuaW1wb3J0IHtTaWduYXR1cmVBcHBDb21wb25lbnR9IGZyb20gXCIuL3NpZ25hdHVyZS1hcHAuY29tcG9uZW50XCI7XHJcbmltcG9ydCB7U2lnbmF0dXJlTGlzdFBhbmVsQ29tcG9uZW50fSBmcm9tICcuL3NpZ25hdHVyZS1saXN0LXBhbmVsL3NpZ25hdHVyZS1saXN0LXBhbmVsLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7Rm9udEF3ZXNvbWVNb2R1bGV9IGZyb20gJ0Bmb3J0YXdlc29tZS9hbmd1bGFyLWZvbnRhd2Vzb21lJztcclxuaW1wb3J0IHtsaWJyYXJ5fSBmcm9tICdAZm9ydGF3ZXNvbWUvZm9udGF3ZXNvbWUtc3ZnLWNvcmUnO1xyXG5pbXBvcnQge2Zhc30gZnJvbSAnQGZvcnRhd2Vzb21lL2ZyZWUtc29saWQtc3ZnLWljb25zJztcclxuaW1wb3J0IHtmYXJ9IGZyb20gJ0Bmb3J0YXdlc29tZS9mcmVlLXJlZ3VsYXItc3ZnLWljb25zJztcclxuaW1wb3J0IHtOZXdCYXJRckNvZGVDb21wb25lbnR9IGZyb20gJy4vbmV3LWJhci1xci1jb2RlL25ldy1iYXItcXItY29kZS5jb21wb25lbnQnO1xyXG5pbXBvcnQge1VwbG9hZFNpZ25hdHVyZUNvbXBvbmVudH0gZnJvbSAnLi91cGxvYWQtc2lnbmF0dXJlL3VwbG9hZC1zaWduYXR1cmUuY29tcG9uZW50JztcclxuaW1wb3J0IHtEbmRTaWduYXR1cmVEaXJlY3RpdmV9IGZyb20gJy4vZG5kLXNpZ25hdHVyZS5kaXJlY3RpdmUnO1xyXG5pbXBvcnQge1NpZ25hdHVyZX0gZnJvbSAnLi9zaWduYXR1cmUvc2lnbmF0dXJlLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7U2VsZWN0U2lnbmF0dXJlU2VydmljZX0gZnJvbSBcIi4vc2VsZWN0LXNpZ25hdHVyZS5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7RHJhZ1NpZ25hdHVyZVNlcnZpY2V9IGZyb20gXCIuL2RyYWctc2lnbmF0dXJlLnNlcnZpY2VcIjtcclxuaW1wb3J0IHtSZW1vdmVTaWduYXR1cmVTZXJ2aWNlfSBmcm9tIFwiLi9yZW1vdmUtc2lnbmF0dXJlLnNlcnZpY2VcIjtcclxuaW1wb3J0IHtBY3RpdmVTaWduYXR1cmVTZXJ2aWNlfSBmcm9tIFwiLi9hY3RpdmUtc2lnbmF0dXJlLnNlcnZpY2VcIjtcclxuaW1wb3J0IHtDYW52YXNDb21wb25lbnR9IGZyb20gJy4vY2FudmFzL2NhbnZhcy5jb21wb25lbnQnO1xyXG5pbXBvcnQge1N0YW1wQ2FudmFzQ29tcG9uZW50fSBmcm9tICcuL3N0YW1wLWNhbnZhcy9zdGFtcC1jYW52YXMuY29tcG9uZW50JztcclxuaW1wb3J0IHtBY3RpdmVDYW52YXNTZXJ2aWNlfSBmcm9tIFwiLi9hY3RpdmUtY2FudmFzLnNlcnZpY2VcIjtcclxuaW1wb3J0IHtSZW1vdmVDYW52YXNTZXJ2aWNlfSBmcm9tIFwiLi9yZW1vdmUtY2FudmFzLnNlcnZpY2VcIjtcclxuaW1wb3J0IHtTaWduYXR1cmVzSG9sZGVyU2VydmljZX0gZnJvbSBcIi4vc2lnbmF0dXJlcy1ob2xkZXIuc2VydmljZVwiO1xyXG5pbXBvcnQge1NpZ25hdHVyZVRhYkFjdGl2YXRvclNlcnZpY2V9IGZyb20gXCIuL3NpZ25hdHVyZS10YWItYWN0aXZhdG9yLnNlcnZpY2VcIjtcclxuaW1wb3J0IHtTaWduYXR1cmVMZWZ0UGFuZWxDb21wb25lbnR9IGZyb20gJy4vc2lnbmF0dXJlLWxlZnQtcGFuZWwvc2lnbmF0dXJlLWxlZnQtcGFuZWwuY29tcG9uZW50JztcclxuaW1wb3J0IHtIYW5kTW9kYWxDb21wb25lbnR9IGZyb20gJy4vaGFuZC1tb2RhbC9oYW5kLW1vZGFsLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7U3RhbXBNb2RhbENvbXBvbmVudH0gZnJvbSAnLi9zdGFtcC1tb2RhbC9zdGFtcC1tb2RhbC5jb21wb25lbnQnO1xyXG5pbXBvcnQge0NvcHlTaWduYXR1cmVTZXJ2aWNlfSBmcm9tIFwiLi9jb3B5LXNpZ25hdHVyZS5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7Q2xpY2tPdXRzaWRlTW9kdWxlfSBmcm9tICduZy1jbGljay1vdXRzaWRlJztcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBpbml0aWFsaXplQXBwKHNpZ25hdHVyZUNvbmZpZ1NlcnZpY2U6IFNpZ25hdHVyZUNvbmZpZ1NlcnZpY2UpIHtcclxuICBjb25zdCByZXN1bHQgPSAoKSA9PiBzaWduYXR1cmVDb25maWdTZXJ2aWNlLmxvYWQoKTtcclxuICByZXR1cm4gcmVzdWx0O1xyXG59XHJcblxyXG4vLyBOT1RFOiB0aGlzIGlzIHJlcXVpcmVkIGR1cmluZyBsaWJyYXJ5IGNvbXBpbGF0aW9uIHNlZSBodHRwczovL2dpdGh1Yi5jb20vYW5ndWxhci9hbmd1bGFyL2lzc3Vlcy8yMzYyOSNpc3N1ZWNvbW1lbnQtNDQwOTQyOTgxXHJcbi8vIEBkeW5hbWljXHJcbmV4cG9ydCBmdW5jdGlvbiBzZXR1cExvYWRpbmdJbnRlcmNlcHRvcihzZXJ2aWNlOiBMb2FkaW5nTWFza1NlcnZpY2UpIHtcclxuICByZXR1cm4gbmV3IExvYWRpbmdNYXNrSW50ZXJjZXB0b3JTZXJ2aWNlKHNlcnZpY2UpO1xyXG59XHJcblxyXG5ATmdNb2R1bGUoe1xyXG4gIGRlY2xhcmF0aW9uczogW1NpZ25hdHVyZUFwcENvbXBvbmVudCxcclxuICAgIFNpZ25hdHVyZUxpc3RQYW5lbENvbXBvbmVudCxcclxuICAgIE5ld0JhclFyQ29kZUNvbXBvbmVudCxcclxuICAgIFVwbG9hZFNpZ25hdHVyZUNvbXBvbmVudCxcclxuICAgIERuZFNpZ25hdHVyZURpcmVjdGl2ZSxcclxuICAgIFNpZ25hdHVyZSxcclxuICAgIENhbnZhc0NvbXBvbmVudCxcclxuICAgIFN0YW1wQ2FudmFzQ29tcG9uZW50LFxyXG4gICAgU2lnbmF0dXJlTGVmdFBhbmVsQ29tcG9uZW50LFxyXG4gICAgSGFuZE1vZGFsQ29tcG9uZW50LFxyXG4gICAgU3RhbXBNb2RhbENvbXBvbmVudF0sXHJcbiAgZXhwb3J0czogW1NpZ25hdHVyZUFwcENvbXBvbmVudCxcclxuICAgIFNpZ25hdHVyZUxpc3RQYW5lbENvbXBvbmVudCxcclxuICAgIE5ld0JhclFyQ29kZUNvbXBvbmVudCxcclxuICAgIFVwbG9hZFNpZ25hdHVyZUNvbXBvbmVudCxcclxuICAgIERuZFNpZ25hdHVyZURpcmVjdGl2ZSxcclxuICAgIFNpZ25hdHVyZSxcclxuICAgIENhbnZhc0NvbXBvbmVudCxcclxuICAgIFN0YW1wQ2FudmFzQ29tcG9uZW50LFxyXG4gICAgU2lnbmF0dXJlTGVmdFBhbmVsQ29tcG9uZW50LFxyXG4gICAgSGFuZE1vZGFsQ29tcG9uZW50LFxyXG4gICAgU3RhbXBNb2RhbENvbXBvbmVudCxcclxuICAgIENvbW1vbkNvbXBvbmVudHNNb2R1bGVdLFxyXG4gIGltcG9ydHM6IFtDb21tb25Nb2R1bGUsXHJcbiAgICBDb21tb25Db21wb25lbnRzTW9kdWxlLFxyXG4gICAgSHR0cENsaWVudE1vZHVsZSxcclxuICAgIEZvbnRBd2Vzb21lTW9kdWxlLFxyXG4gICAgQ2xpY2tPdXRzaWRlTW9kdWxlXSxcclxuICBwcm92aWRlcnM6IFtcclxuICAgIFNpZ25hdHVyZVNlcnZpY2UsXHJcbiAgICBDb25maWdTZXJ2aWNlLFxyXG4gICAgU2lnbmF0dXJlQ29uZmlnU2VydmljZSxcclxuICAgIFNlbGVjdFNpZ25hdHVyZVNlcnZpY2UsXHJcbiAgICBEcmFnU2lnbmF0dXJlU2VydmljZSxcclxuICAgIFJlbW92ZVNpZ25hdHVyZVNlcnZpY2UsXHJcbiAgICBBY3RpdmVTaWduYXR1cmVTZXJ2aWNlLFxyXG4gICAgQWN0aXZlQ2FudmFzU2VydmljZSxcclxuICAgIFJlbW92ZUNhbnZhc1NlcnZpY2UsXHJcbiAgICBEYXRlUGlwZSxcclxuICAgIFNpZ25hdHVyZXNIb2xkZXJTZXJ2aWNlLFxyXG4gICAgU2lnbmF0dXJlVGFiQWN0aXZhdG9yU2VydmljZSxcclxuICAgIENvcHlTaWduYXR1cmVTZXJ2aWNlLFxyXG4gICAge1xyXG4gICAgICBwcm92aWRlOiBIVFRQX0lOVEVSQ0VQVE9SUyxcclxuICAgICAgdXNlQ2xhc3M6IEVycm9ySW50ZXJjZXB0b3JTZXJ2aWNlLFxyXG4gICAgICBtdWx0aTogdHJ1ZVxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgcHJvdmlkZTogQVBQX0lOSVRJQUxJWkVSLFxyXG4gICAgICB1c2VGYWN0b3J5OiBpbml0aWFsaXplQXBwLFxyXG4gICAgICBkZXBzOiBbU2lnbmF0dXJlQ29uZmlnU2VydmljZV0sIG11bHRpOiB0cnVlXHJcbiAgICB9LFxyXG4gICAgTG9hZGluZ01hc2tTZXJ2aWNlLFxyXG4gICAge1xyXG4gICAgICBwcm92aWRlOiBIVFRQX0lOVEVSQ0VQVE9SUyxcclxuICAgICAgdXNlRmFjdG9yeTogc2V0dXBMb2FkaW5nSW50ZXJjZXB0b3IsXHJcbiAgICAgIG11bHRpOiB0cnVlLFxyXG4gICAgICBkZXBzOiBbTG9hZGluZ01hc2tTZXJ2aWNlXVxyXG4gICAgfVxyXG4gIF0sXHJcbiAgZW50cnlDb21wb25lbnRzOiBbXHJcbiAgICBTaWduYXR1cmUsXHJcbiAgICBTdGFtcENhbnZhc0NvbXBvbmVudFxyXG4gIF1cclxufSlcclxuZXhwb3J0IGNsYXNzIFNpZ25hdHVyZU1vZHVsZSB7XHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgICBsaWJyYXJ5LmFkZChmYXMsIGZhcik7XHJcbiAgfVxyXG5cclxuICBzdGF0aWMgZm9yUm9vdChhcGlFbmRwb2ludDogc3RyaW5nKTogTW9kdWxlV2l0aFByb3ZpZGVycyB7XHJcbiAgICBBcGkuREVGQVVMVF9BUElfRU5EUE9JTlQgPSBhcGlFbmRwb2ludDtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIG5nTW9kdWxlOiBTaWduYXR1cmVNb2R1bGVcclxuICAgIH07XHJcbiAgfVxyXG59XHJcbiJdfQ==