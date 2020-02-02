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
    SignatureModule.ctorParameters = function () { return []; };
    return SignatureModule;
}());
export { SignatureModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2lnbmF0dXJlLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bncm91cGRvY3MuZXhhbXBsZXMuYW5ndWxhci9zaWduYXR1cmUvIiwic291cmNlcyI6WyJsaWIvc2lnbmF0dXJlLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFDLGVBQWUsRUFBdUIsUUFBUSxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQzdFLE9BQU8sRUFBQyxZQUFZLEVBQUUsUUFBUSxFQUFDLE1BQU0saUJBQWlCLENBQUM7QUFDdkQsT0FBTyxFQUNMLEdBQUcsRUFDSCxzQkFBc0IsRUFDdEIsYUFBYSxFQUNiLHVCQUF1QixFQUN2Qiw2QkFBNkIsRUFDN0Isa0JBQWtCLEVBQ25CLE1BQU0sK0NBQStDLENBQUM7QUFDdkQsT0FBTyxFQUFDLGlCQUFpQixFQUFFLGdCQUFnQixFQUFDLE1BQU0sc0JBQXNCLENBQUM7QUFDekUsT0FBTyxFQUFDLGdCQUFnQixFQUFDLE1BQU0scUJBQXFCLENBQUM7QUFDckQsT0FBTyxFQUFDLHNCQUFzQixFQUFDLE1BQU0sNEJBQTRCLENBQUM7QUFDbEUsT0FBTyxFQUFDLHFCQUFxQixFQUFDLE1BQU0sMkJBQTJCLENBQUM7QUFDaEUsT0FBTyxFQUFDLDJCQUEyQixFQUFDLE1BQU0sdURBQXVELENBQUM7QUFDbEcsT0FBTyxFQUFDLGlCQUFpQixFQUFDLE1BQU0sa0NBQWtDLENBQUM7QUFDbkUsT0FBTyxFQUFDLE9BQU8sRUFBQyxNQUFNLG1DQUFtQyxDQUFDO0FBQzFELE9BQU8sRUFBQyxHQUFHLEVBQUMsTUFBTSxtQ0FBbUMsQ0FBQztBQUN0RCxPQUFPLEVBQUMsR0FBRyxFQUFDLE1BQU0scUNBQXFDLENBQUM7QUFDeEQsT0FBTyxFQUFDLHFCQUFxQixFQUFDLE1BQU0seUNBQXlDLENBQUM7QUFDOUUsT0FBTyxFQUFDLHFCQUFxQixFQUFDLE1BQU0sNkNBQTZDLENBQUM7QUFDbEYsT0FBTyxFQUFDLHdCQUF3QixF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Qjt3QkFDdEIsbUJBQW1CO3dCQUNuQixtQkFBbUI7d0JBQ25CLFFBQVE7d0JBQ1IsdUJBQXVCO3dCQUN2Qiw0QkFBNEI7d0JBQzVCLG9CQUFvQjt3QkFDcEI7NEJBQ0UsT0FBTyxFQUFFLGlCQUFpQjs0QkFDMUIsUUFBUSxFQUFFLHVCQUF1Qjs0QkFDakMsS0FBSyxFQUFFLElBQUk7eUJBQ1o7d0JBQ0Q7NEJBQ0UsT0FBTyxFQUFFLGVBQWU7NEJBQ3hCLFVBQVUsRUFBRSxhQUFhOzRCQUN6QixJQUFJLEVBQUUsQ0FBQyxzQkFBc0IsQ0FBQyxFQUFFLEtBQUssRUFBRSxJQUFJO3lCQUM1Qzt3QkFDRCxrQkFBa0I7d0JBQ2xCOzRCQUNFLE9BQU8sRUFBRSxpQkFBaUI7NEJBQzFCLFVBQVUsRUFBRSx1QkFBdUI7NEJBQ25DLEtBQUssRUFBRSxJQUFJOzRCQUNYLElBQUksRUFBRSxDQUFDLGtCQUFrQixDQUFDO3lCQUMzQjtxQkFDRjtvQkFDRCxlQUFlLEVBQUU7d0JBQ2YsU0FBUzt3QkFDVCxvQkFBb0I7cUJBQ3JCO2lCQUNGOzs7O0lBWUQsc0JBQUM7Q0FBQSxBQS9FRCxJQStFQztTQVhZLGVBQWUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0FQUF9JTklUSUFMSVpFUiwgTW9kdWxlV2l0aFByb3ZpZGVycywgTmdNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtDb21tb25Nb2R1bGUsIERhdGVQaXBlfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHtcbiAgQXBpLFxuICBDb21tb25Db21wb25lbnRzTW9kdWxlLFxuICBDb25maWdTZXJ2aWNlLFxuICBFcnJvckludGVyY2VwdG9yU2VydmljZSxcbiAgTG9hZGluZ01hc2tJbnRlcmNlcHRvclNlcnZpY2UsXG4gIExvYWRpbmdNYXNrU2VydmljZVxufSBmcm9tIFwiQGdyb3VwZG9jcy5leGFtcGxlcy5hbmd1bGFyL2NvbW1vbi1jb21wb25lbnRzXCI7XG5pbXBvcnQge0hUVFBfSU5URVJDRVBUT1JTLCBIdHRwQ2xpZW50TW9kdWxlfSBmcm9tIFwiQGFuZ3VsYXIvY29tbW9uL2h0dHBcIjtcbmltcG9ydCB7U2lnbmF0dXJlU2VydmljZX0gZnJvbSBcIi4vc2lnbmF0dXJlLnNlcnZpY2VcIjtcbmltcG9ydCB7U2lnbmF0dXJlQ29uZmlnU2VydmljZX0gZnJvbSBcIi4vc2lnbmF0dXJlLWNvbmZpZy5zZXJ2aWNlXCI7XG5pbXBvcnQge1NpZ25hdHVyZUFwcENvbXBvbmVudH0gZnJvbSBcIi4vc2lnbmF0dXJlLWFwcC5jb21wb25lbnRcIjtcbmltcG9ydCB7U2lnbmF0dXJlTGlzdFBhbmVsQ29tcG9uZW50fSBmcm9tICcuL3NpZ25hdHVyZS1saXN0LXBhbmVsL3NpZ25hdHVyZS1saXN0LXBhbmVsLmNvbXBvbmVudCc7XG5pbXBvcnQge0ZvbnRBd2Vzb21lTW9kdWxlfSBmcm9tICdAZm9ydGF3ZXNvbWUvYW5ndWxhci1mb250YXdlc29tZSc7XG5pbXBvcnQge2xpYnJhcnl9IGZyb20gJ0Bmb3J0YXdlc29tZS9mb250YXdlc29tZS1zdmctY29yZSc7XG5pbXBvcnQge2Zhc30gZnJvbSAnQGZvcnRhd2Vzb21lL2ZyZWUtc29saWQtc3ZnLWljb25zJztcbmltcG9ydCB7ZmFyfSBmcm9tICdAZm9ydGF3ZXNvbWUvZnJlZS1yZWd1bGFyLXN2Zy1pY29ucyc7XG5pbXBvcnQge1NpZ25hdHVyZVRhYkNvbXBvbmVudH0gZnJvbSAnLi9zaWduYXR1cmUtdGFiL3NpZ25hdHVyZS10YWIuY29tcG9uZW50JztcbmltcG9ydCB7TmV3QmFyUXJDb2RlQ29tcG9uZW50fSBmcm9tICcuL25ldy1iYXItcXItY29kZS9uZXctYmFyLXFyLWNvZGUuY29tcG9uZW50JztcbmltcG9ydCB7VXBsb2FkU2lnbmF0dXJlQ29tcG9uZW50fSBmcm9tICcuL3VwbG9hZC1zaWduYXR1cmUvdXBsb2FkLXNpZ25hdHVyZS5jb21wb25lbnQnO1xuaW1wb3J0IHtEbmRTaWduYXR1cmVEaXJlY3RpdmV9IGZyb20gJy4vZG5kLXNpZ25hdHVyZS5kaXJlY3RpdmUnO1xuaW1wb3J0IHtTaWduYXR1cmV9IGZyb20gJy4vc2lnbmF0dXJlL3NpZ25hdHVyZS5jb21wb25lbnQnO1xuaW1wb3J0IHtTZWxlY3RTaWduYXR1cmVTZXJ2aWNlfSBmcm9tIFwiLi9zZWxlY3Qtc2lnbmF0dXJlLnNlcnZpY2VcIjtcbmltcG9ydCB7RHJhZ1NpZ25hdHVyZVNlcnZpY2V9IGZyb20gXCIuL2RyYWctc2lnbmF0dXJlLnNlcnZpY2VcIjtcbmltcG9ydCB7UmVtb3ZlU2lnbmF0dXJlU2VydmljZX0gZnJvbSBcIi4vcmVtb3ZlLXNpZ25hdHVyZS5zZXJ2aWNlXCI7XG5pbXBvcnQge0FjdGl2ZVNpZ25hdHVyZVNlcnZpY2V9IGZyb20gXCIuL2FjdGl2ZS1zaWduYXR1cmUuc2VydmljZVwiO1xuaW1wb3J0IHtDYW52YXNDb21wb25lbnR9IGZyb20gJy4vY2FudmFzL2NhbnZhcy5jb21wb25lbnQnO1xuaW1wb3J0IHtTdGFtcENhbnZhc0NvbXBvbmVudH0gZnJvbSAnLi9zdGFtcC1jYW52YXMvc3RhbXAtY2FudmFzLmNvbXBvbmVudCc7XG5pbXBvcnQge0FjdGl2ZUNhbnZhc1NlcnZpY2V9IGZyb20gXCIuL2FjdGl2ZS1jYW52YXMuc2VydmljZVwiO1xuaW1wb3J0IHtSZW1vdmVDYW52YXNTZXJ2aWNlfSBmcm9tIFwiLi9yZW1vdmUtY2FudmFzLnNlcnZpY2VcIjtcbmltcG9ydCB7U2lnbmF0dXJlc0hvbGRlclNlcnZpY2V9IGZyb20gXCIuL3NpZ25hdHVyZXMtaG9sZGVyLnNlcnZpY2VcIjtcbmltcG9ydCB7U2lnbmF0dXJlVGFiQWN0aXZhdG9yU2VydmljZX0gZnJvbSBcIi4vc2lnbmF0dXJlLXRhYi1hY3RpdmF0b3Iuc2VydmljZVwiO1xuaW1wb3J0IHtTaWduYXR1cmVMZWZ0UGFuZWxDb21wb25lbnR9IGZyb20gJy4vc2lnbmF0dXJlLWxlZnQtcGFuZWwvc2lnbmF0dXJlLWxlZnQtcGFuZWwuY29tcG9uZW50JztcbmltcG9ydCB7SGFuZE1vZGFsQ29tcG9uZW50fSBmcm9tICcuL2hhbmQtbW9kYWwvaGFuZC1tb2RhbC5jb21wb25lbnQnO1xuaW1wb3J0IHtTdGFtcE1vZGFsQ29tcG9uZW50fSBmcm9tICcuL3N0YW1wLW1vZGFsL3N0YW1wLW1vZGFsLmNvbXBvbmVudCc7XG5pbXBvcnQge0NvcHlTaWduYXR1cmVTZXJ2aWNlfSBmcm9tIFwiLi9jb3B5LXNpZ25hdHVyZS5zZXJ2aWNlXCI7XG5pbXBvcnQge0NsaWNrT3V0c2lkZU1vZHVsZX0gZnJvbSAnbmctY2xpY2stb3V0c2lkZSc7XG5cbmV4cG9ydCBmdW5jdGlvbiBpbml0aWFsaXplQXBwKHNpZ25hdHVyZUNvbmZpZ1NlcnZpY2U6IFNpZ25hdHVyZUNvbmZpZ1NlcnZpY2UpIHtcbiAgY29uc3QgcmVzdWx0ID0gKCkgPT4gc2lnbmF0dXJlQ29uZmlnU2VydmljZS5sb2FkKCk7XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbi8vIE5PVEU6IHRoaXMgaXMgcmVxdWlyZWQgZHVyaW5nIGxpYnJhcnkgY29tcGlsYXRpb24gc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9hbmd1bGFyL2FuZ3VsYXIvaXNzdWVzLzIzNjI5I2lzc3VlY29tbWVudC00NDA5NDI5ODFcbi8vIEBkeW5hbWljXG5leHBvcnQgZnVuY3Rpb24gc2V0dXBMb2FkaW5nSW50ZXJjZXB0b3Ioc2VydmljZTogTG9hZGluZ01hc2tTZXJ2aWNlKSB7XG4gIHJldHVybiBuZXcgTG9hZGluZ01hc2tJbnRlcmNlcHRvclNlcnZpY2Uoc2VydmljZSk7XG59XG5cbkBOZ01vZHVsZSh7XG4gIGRlY2xhcmF0aW9uczogW1NpZ25hdHVyZUFwcENvbXBvbmVudCxcbiAgICBTaWduYXR1cmVMaXN0UGFuZWxDb21wb25lbnQsXG4gICAgU2lnbmF0dXJlVGFiQ29tcG9uZW50LFxuICAgIE5ld0JhclFyQ29kZUNvbXBvbmVudCxcbiAgICBVcGxvYWRTaWduYXR1cmVDb21wb25lbnQsXG4gICAgRG5kU2lnbmF0dXJlRGlyZWN0aXZlLFxuICAgIFNpZ25hdHVyZSxcbiAgICBDYW52YXNDb21wb25lbnQsXG4gICAgU3RhbXBDYW52YXNDb21wb25lbnQsXG4gICAgU2lnbmF0dXJlTGVmdFBhbmVsQ29tcG9uZW50LFxuICAgIEhhbmRNb2RhbENvbXBvbmVudCxcbiAgICBTdGFtcE1vZGFsQ29tcG9uZW50XSxcbiAgZXhwb3J0czogW1NpZ25hdHVyZUFwcENvbXBvbmVudCxcbiAgICBTaWduYXR1cmVMaXN0UGFuZWxDb21wb25lbnQsXG4gICAgU2lnbmF0dXJlVGFiQ29tcG9uZW50LFxuICAgIE5ld0JhclFyQ29kZUNvbXBvbmVudCxcbiAgICBVcGxvYWRTaWduYXR1cmVDb21wb25lbnQsXG4gICAgRG5kU2lnbmF0dXJlRGlyZWN0aXZlLFxuICAgIFNpZ25hdHVyZSxcbiAgICBDYW52YXNDb21wb25lbnQsXG4gICAgU3RhbXBDYW52YXNDb21wb25lbnQsXG4gICAgU2lnbmF0dXJlTGVmdFBhbmVsQ29tcG9uZW50LFxuICAgIEhhbmRNb2RhbENvbXBvbmVudCxcbiAgICBTdGFtcE1vZGFsQ29tcG9uZW50LFxuICAgIENvbW1vbkNvbXBvbmVudHNNb2R1bGVdLFxuICBpbXBvcnRzOiBbQ29tbW9uTW9kdWxlLFxuICAgIENvbW1vbkNvbXBvbmVudHNNb2R1bGUsXG4gICAgSHR0cENsaWVudE1vZHVsZSxcbiAgICBGb250QXdlc29tZU1vZHVsZSxcbiAgICBDbGlja091dHNpZGVNb2R1bGVdLFxuICBwcm92aWRlcnM6IFtcbiAgICBTaWduYXR1cmVTZXJ2aWNlLFxuICAgIENvbmZpZ1NlcnZpY2UsXG4gICAgU2lnbmF0dXJlQ29uZmlnU2VydmljZSxcbiAgICBTZWxlY3RTaWduYXR1cmVTZXJ2aWNlLFxuICAgIERyYWdTaWduYXR1cmVTZXJ2aWNlLFxuICAgIFJlbW92ZVNpZ25hdHVyZVNlcnZpY2UsXG4gICAgQWN0aXZlU2lnbmF0dXJlU2VydmljZSxcbiAgICBBY3RpdmVDYW52YXNTZXJ2aWNlLFxuICAgIFJlbW92ZUNhbnZhc1NlcnZpY2UsXG4gICAgRGF0ZVBpcGUsXG4gICAgU2lnbmF0dXJlc0hvbGRlclNlcnZpY2UsXG4gICAgU2lnbmF0dXJlVGFiQWN0aXZhdG9yU2VydmljZSxcbiAgICBDb3B5U2lnbmF0dXJlU2VydmljZSxcbiAgICB7XG4gICAgICBwcm92aWRlOiBIVFRQX0lOVEVSQ0VQVE9SUyxcbiAgICAgIHVzZUNsYXNzOiBFcnJvckludGVyY2VwdG9yU2VydmljZSxcbiAgICAgIG11bHRpOiB0cnVlXG4gICAgfSxcbiAgICB7XG4gICAgICBwcm92aWRlOiBBUFBfSU5JVElBTElaRVIsXG4gICAgICB1c2VGYWN0b3J5OiBpbml0aWFsaXplQXBwLFxuICAgICAgZGVwczogW1NpZ25hdHVyZUNvbmZpZ1NlcnZpY2VdLCBtdWx0aTogdHJ1ZVxuICAgIH0sXG4gICAgTG9hZGluZ01hc2tTZXJ2aWNlLFxuICAgIHtcbiAgICAgIHByb3ZpZGU6IEhUVFBfSU5URVJDRVBUT1JTLFxuICAgICAgdXNlRmFjdG9yeTogc2V0dXBMb2FkaW5nSW50ZXJjZXB0b3IsXG4gICAgICBtdWx0aTogdHJ1ZSxcbiAgICAgIGRlcHM6IFtMb2FkaW5nTWFza1NlcnZpY2VdXG4gICAgfVxuICBdLFxuICBlbnRyeUNvbXBvbmVudHM6IFtcbiAgICBTaWduYXR1cmUsXG4gICAgU3RhbXBDYW52YXNDb21wb25lbnRcbiAgXVxufSlcbmV4cG9ydCBjbGFzcyBTaWduYXR1cmVNb2R1bGUge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBsaWJyYXJ5LmFkZChmYXMsIGZhcik7XG4gIH1cblxuICBzdGF0aWMgZm9yUm9vdChhcGlFbmRwb2ludDogc3RyaW5nKTogTW9kdWxlV2l0aFByb3ZpZGVycyB7XG4gICAgQXBpLkRFRkFVTFRfQVBJX0VORFBPSU5UID0gYXBpRW5kcG9pbnQ7XG4gICAgcmV0dXJuIHtcbiAgICAgIG5nTW9kdWxlOiBTaWduYXR1cmVNb2R1bGVcbiAgICB9O1xuICB9XG59XG4iXX0=