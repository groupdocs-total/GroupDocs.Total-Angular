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
    SignatureModule.ctorParameters = function () { return []; };
    return SignatureModule;
}());
export { SignatureModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2lnbmF0dXJlLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bncm91cGRvY3MuZXhhbXBsZXMuYW5ndWxhci9zaWduYXR1cmUvIiwic291cmNlcyI6WyJsaWIvc2lnbmF0dXJlLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFDLGVBQWUsRUFBdUIsUUFBUSxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQzdFLE9BQU8sRUFBQyxZQUFZLEVBQUUsUUFBUSxFQUFDLE1BQU0saUJBQWlCLENBQUM7QUFDdkQsT0FBTyxFQUNMLEdBQUcsRUFDSCxzQkFBc0IsRUFDdEIsYUFBYSxFQUNiLHVCQUF1QixFQUN2Qiw2QkFBNkIsRUFDN0Isa0JBQWtCLEVBQ25CLE1BQU0sK0NBQStDLENBQUM7QUFDdkQsT0FBTyxFQUFDLGlCQUFpQixFQUFFLGdCQUFnQixFQUFDLE1BQU0sc0JBQXNCLENBQUM7QUFDekUsT0FBTyxFQUFDLGdCQUFnQixFQUFDLE1BQU0scUJBQXFCLENBQUM7QUFDckQsT0FBTyxFQUFDLHNCQUFzQixFQUFDLE1BQU0sNEJBQTRCLENBQUM7QUFDbEUsT0FBTyxFQUFDLHFCQUFxQixFQUFDLE1BQU0sMkJBQTJCLENBQUM7QUFDaEUsT0FBTyxFQUFDLDJCQUEyQixFQUFDLE1BQU0sdURBQXVELENBQUM7QUFDbEcsT0FBTyxFQUFDLGlCQUFpQixFQUFDLE1BQU0sa0NBQWtDLENBQUM7QUFDbkUsT0FBTyxFQUFDLE9BQU8sRUFBQyxNQUFNLG1DQUFtQyxDQUFDO0FBQzFELE9BQU8sRUFBQyxHQUFHLEVBQUMsTUFBTSxtQ0FBbUMsQ0FBQztBQUN0RCxPQUFPLEVBQUMsR0FBRyxFQUFDLE1BQU0scUNBQXFDLENBQUM7QUFDeEQsT0FBTyxFQUFDLHFCQUFxQixFQUFDLE1BQU0sNkNBQTZDLENBQUM7QUFDbEYsT0FBTyxFQUFDLHdCQUF3QixFQUFDLE1BQU0sK0NBQStDLENBQUM7QUFDdkYsT0FBTyxFQUFDLHFCQUFxQixFQUFDLE1BQU0sMkJBQTJCLENBQUM7QUFDaEUsT0FBTyxFQUFDLFNBQVMsRUFBQyxNQUFNLGlDQUFpQyxDQUFDO0FBQzFELE9BQU8sRUFBQyxzQkFBc0IsRUFBQyxNQUFNLDRCQUE0QixDQUFDO0FBQ2xFLE9BQU8sRUFBQyxvQkFBb0IsRUFBQyxNQUFNLDBCQUEwQixDQUFDO0FBQzlELE9BQU8sRUFBQyxzQkFBc0IsRUFBQyxNQUFNLDRCQUE0QixDQUFDO0FBQ2xFLE9BQU8sRUFBQyxzQkFBc0IsRUFBQyxNQUFNLDRCQUE0QixDQUFDO0FBQ2xFLE9BQU8sRUFBQyxlQUFlLEVBQUMsTUFBTSwyQkFBMkIsQ0FBQztBQUMxRCxPQUFPLEVBQUMsb0JBQW9CLEVBQUMsTUFBTSx1Q0FBdUMsQ0FBQztBQUMzRSxPQUFPLEVBQUMsbUJBQW1CLEVBQUMsTUFBTSx5QkFBeUIsQ0FBQztBQUM1RCxPQUFPLEVBQUMsbUJBQW1CLEVBQUMsTUFBTSx5QkFBeUIsQ0FBQztBQUM1RCxPQUFPLEVBQUMsdUJBQXVCLEVBQUMsTUFBTSw2QkFBNkIsQ0FBQztBQUNwRSxPQUFPLEVBQUMsNEJBQTRCLEVBQUMsTUFBTSxtQ0FBbUMsQ0FBQztBQUMvRSxPQUFPLEVBQUMsMkJBQTJCLEVBQUMsTUFBTSx1REFBdUQsQ0FBQztBQUNsRyxPQUFPLEVBQUMsa0JBQWtCLEVBQUMsTUFBTSxtQ0FBbUMsQ0FBQztBQUNyRSxPQUFPLEVBQUMsbUJBQW1CLEVBQUMsTUFBTSxxQ0FBcUMsQ0FBQztBQUN4RSxPQUFPLEVBQUMsb0JBQW9CLEVBQUMsTUFBTSwwQkFBMEIsQ0FBQztBQUM5RCxPQUFPLEVBQUMsa0JBQWtCLEVBQUMsTUFBTSxrQkFBa0IsQ0FBQztBQUNwRCxPQUFPLEVBQUMsZUFBZSxFQUFDLE1BQU0scUJBQXFCLENBQUM7Ozs7O0FBRXBELE1BQU0sVUFBVSxhQUFhLENBQUMsc0JBQThDOztRQUNwRSxNQUFNOzs7SUFBRyxjQUFNLE9BQUEsc0JBQXNCLENBQUMsSUFBSSxFQUFFLEVBQTdCLENBQTZCLENBQUE7SUFDbEQsT0FBTyxNQUFNLENBQUM7QUFDaEIsQ0FBQzs7Ozs7OztBQUlELE1BQU0sVUFBVSx1QkFBdUIsQ0FBQyxPQUEyQjtJQUNqRSxPQUFPLElBQUksNkJBQTZCLENBQUMsT0FBTyxDQUFDLENBQUM7QUFDcEQsQ0FBQztBQUVEO0lBdUVFO1FBQ0UsT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDLENBQUM7SUFDeEIsQ0FBQzs7Ozs7SUFFTSx1QkFBTzs7OztJQUFkLFVBQWUsV0FBbUI7UUFDaEMsR0FBRyxDQUFDLG9CQUFvQixHQUFHLFdBQVcsQ0FBQztRQUN2QyxPQUFPO1lBQ0wsUUFBUSxFQUFFLGVBQWU7U0FDMUIsQ0FBQztJQUNKLENBQUM7O2dCQWhGRixRQUFRLFNBQUM7b0JBQ1IsWUFBWSxFQUFFLENBQUMscUJBQXFCO3dCQUNsQywyQkFBMkI7d0JBQzNCLHFCQUFxQjt3QkFDckIsd0JBQXdCO3dCQUN4QixxQkFBcUI7d0JBQ3JCLFNBQVM7d0JBQ1QsZUFBZTt3QkFDZixvQkFBb0I7d0JBQ3BCLDJCQUEyQjt3QkFDM0Isa0JBQWtCO3dCQUNsQixtQkFBbUI7cUJBQ3BCO29CQUNELE9BQU8sRUFBRSxDQUFDLHFCQUFxQjt3QkFDN0IsMkJBQTJCO3dCQUMzQixxQkFBcUI7d0JBQ3JCLHdCQUF3Qjt3QkFDeEIscUJBQXFCO3dCQUNyQixTQUFTO3dCQUNULGVBQWU7d0JBQ2Ysb0JBQW9CO3dCQUNwQiwyQkFBMkI7d0JBQzNCLGtCQUFrQjt3QkFDbEIsbUJBQW1CO3dCQUNuQixzQkFBc0I7cUJBQ3ZCO29CQUNELE9BQU8sRUFBRSxDQUFDLFlBQVk7d0JBQ3BCLHNCQUFzQjt3QkFDdEIsZ0JBQWdCO3dCQUNoQixpQkFBaUI7d0JBQ2pCLGtCQUFrQjt3QkFDbEIsZUFBZSxDQUFDLE9BQU8sRUFBRTtxQkFDMUI7b0JBQ0QsU0FBUyxFQUFFO3dCQUNULGdCQUFnQjt3QkFDaEIsYUFBYTt3QkFDYixzQkFBc0I7d0JBQ3RCLHNCQUFzQjt3QkFDdEIsb0JBQW9CO3dCQUNwQixzQkFBc0I7d0JBQ3RCLHNCQUFzQjt3QkFDdEIsbUJBQW1CO3dCQUNuQixtQkFBbUI7d0JBQ25CLFFBQVE7d0JBQ1IsdUJBQXVCO3dCQUN2Qiw0QkFBNEI7d0JBQzVCLG9CQUFvQjt3QkFDcEI7NEJBQ0UsT0FBTyxFQUFFLGlCQUFpQjs0QkFDMUIsUUFBUSxFQUFFLHVCQUF1Qjs0QkFDakMsS0FBSyxFQUFFLElBQUk7eUJBQ1o7d0JBQ0Q7NEJBQ0UsT0FBTyxFQUFFLGVBQWU7NEJBQ3hCLFVBQVUsRUFBRSxhQUFhOzRCQUN6QixJQUFJLEVBQUUsQ0FBQyxzQkFBc0IsQ0FBQyxFQUFFLEtBQUssRUFBRSxJQUFJO3lCQUM1Qzt3QkFDRCxrQkFBa0I7d0JBQ2xCOzRCQUNFLE9BQU8sRUFBRSxpQkFBaUI7NEJBQzFCLFVBQVUsRUFBRSx1QkFBdUI7NEJBQ25DLEtBQUssRUFBRSxJQUFJOzRCQUNYLElBQUksRUFBRSxDQUFDLGtCQUFrQixDQUFDO3lCQUMzQjtxQkFDRjtvQkFDRCxlQUFlLEVBQUU7d0JBQ2YsU0FBUzt3QkFDVCxvQkFBb0I7cUJBQ3JCO2lCQUNGOzs7O0lBWUQsc0JBQUM7Q0FBQSxBQWpGRCxJQWlGQztTQVhZLGVBQWUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0FQUF9JTklUSUFMSVpFUiwgTW9kdWxlV2l0aFByb3ZpZGVycywgTmdNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQge0NvbW1vbk1vZHVsZSwgRGF0ZVBpcGV9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XHJcbmltcG9ydCB7XHJcbiAgQXBpLFxyXG4gIENvbW1vbkNvbXBvbmVudHNNb2R1bGUsXHJcbiAgQ29uZmlnU2VydmljZSxcclxuICBFcnJvckludGVyY2VwdG9yU2VydmljZSxcclxuICBMb2FkaW5nTWFza0ludGVyY2VwdG9yU2VydmljZSxcclxuICBMb2FkaW5nTWFza1NlcnZpY2VcclxufSBmcm9tIFwiQGdyb3VwZG9jcy5leGFtcGxlcy5hbmd1bGFyL2NvbW1vbi1jb21wb25lbnRzXCI7XHJcbmltcG9ydCB7SFRUUF9JTlRFUkNFUFRPUlMsIEh0dHBDbGllbnRNb2R1bGV9IGZyb20gXCJAYW5ndWxhci9jb21tb24vaHR0cFwiO1xyXG5pbXBvcnQge1NpZ25hdHVyZVNlcnZpY2V9IGZyb20gXCIuL3NpZ25hdHVyZS5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7U2lnbmF0dXJlQ29uZmlnU2VydmljZX0gZnJvbSBcIi4vc2lnbmF0dXJlLWNvbmZpZy5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7U2lnbmF0dXJlQXBwQ29tcG9uZW50fSBmcm9tIFwiLi9zaWduYXR1cmUtYXBwLmNvbXBvbmVudFwiO1xyXG5pbXBvcnQge1NpZ25hdHVyZUxpc3RQYW5lbENvbXBvbmVudH0gZnJvbSAnLi9zaWduYXR1cmUtbGlzdC1wYW5lbC9zaWduYXR1cmUtbGlzdC1wYW5lbC5jb21wb25lbnQnO1xyXG5pbXBvcnQge0ZvbnRBd2Vzb21lTW9kdWxlfSBmcm9tICdAZm9ydGF3ZXNvbWUvYW5ndWxhci1mb250YXdlc29tZSc7XHJcbmltcG9ydCB7bGlicmFyeX0gZnJvbSAnQGZvcnRhd2Vzb21lL2ZvbnRhd2Vzb21lLXN2Zy1jb3JlJztcclxuaW1wb3J0IHtmYXN9IGZyb20gJ0Bmb3J0YXdlc29tZS9mcmVlLXNvbGlkLXN2Zy1pY29ucyc7XHJcbmltcG9ydCB7ZmFyfSBmcm9tICdAZm9ydGF3ZXNvbWUvZnJlZS1yZWd1bGFyLXN2Zy1pY29ucyc7XHJcbmltcG9ydCB7TmV3QmFyUXJDb2RlQ29tcG9uZW50fSBmcm9tICcuL25ldy1iYXItcXItY29kZS9uZXctYmFyLXFyLWNvZGUuY29tcG9uZW50JztcclxuaW1wb3J0IHtVcGxvYWRTaWduYXR1cmVDb21wb25lbnR9IGZyb20gJy4vdXBsb2FkLXNpZ25hdHVyZS91cGxvYWQtc2lnbmF0dXJlLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7RG5kU2lnbmF0dXJlRGlyZWN0aXZlfSBmcm9tICcuL2RuZC1zaWduYXR1cmUuZGlyZWN0aXZlJztcclxuaW1wb3J0IHtTaWduYXR1cmV9IGZyb20gJy4vc2lnbmF0dXJlL3NpZ25hdHVyZS5jb21wb25lbnQnO1xyXG5pbXBvcnQge1NlbGVjdFNpZ25hdHVyZVNlcnZpY2V9IGZyb20gXCIuL3NlbGVjdC1zaWduYXR1cmUuc2VydmljZVwiO1xyXG5pbXBvcnQge0RyYWdTaWduYXR1cmVTZXJ2aWNlfSBmcm9tIFwiLi9kcmFnLXNpZ25hdHVyZS5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7UmVtb3ZlU2lnbmF0dXJlU2VydmljZX0gZnJvbSBcIi4vcmVtb3ZlLXNpZ25hdHVyZS5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7QWN0aXZlU2lnbmF0dXJlU2VydmljZX0gZnJvbSBcIi4vYWN0aXZlLXNpZ25hdHVyZS5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7Q2FudmFzQ29tcG9uZW50fSBmcm9tICcuL2NhbnZhcy9jYW52YXMuY29tcG9uZW50JztcclxuaW1wb3J0IHtTdGFtcENhbnZhc0NvbXBvbmVudH0gZnJvbSAnLi9zdGFtcC1jYW52YXMvc3RhbXAtY2FudmFzLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7QWN0aXZlQ2FudmFzU2VydmljZX0gZnJvbSBcIi4vYWN0aXZlLWNhbnZhcy5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7UmVtb3ZlQ2FudmFzU2VydmljZX0gZnJvbSBcIi4vcmVtb3ZlLWNhbnZhcy5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7U2lnbmF0dXJlc0hvbGRlclNlcnZpY2V9IGZyb20gXCIuL3NpZ25hdHVyZXMtaG9sZGVyLnNlcnZpY2VcIjtcclxuaW1wb3J0IHtTaWduYXR1cmVUYWJBY3RpdmF0b3JTZXJ2aWNlfSBmcm9tIFwiLi9zaWduYXR1cmUtdGFiLWFjdGl2YXRvci5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7U2lnbmF0dXJlTGVmdFBhbmVsQ29tcG9uZW50fSBmcm9tICcuL3NpZ25hdHVyZS1sZWZ0LXBhbmVsL3NpZ25hdHVyZS1sZWZ0LXBhbmVsLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7SGFuZE1vZGFsQ29tcG9uZW50fSBmcm9tICcuL2hhbmQtbW9kYWwvaGFuZC1tb2RhbC5jb21wb25lbnQnO1xyXG5pbXBvcnQge1N0YW1wTW9kYWxDb21wb25lbnR9IGZyb20gJy4vc3RhbXAtbW9kYWwvc3RhbXAtbW9kYWwuY29tcG9uZW50JztcclxuaW1wb3J0IHtDb3B5U2lnbmF0dXJlU2VydmljZX0gZnJvbSBcIi4vY29weS1zaWduYXR1cmUuc2VydmljZVwiO1xyXG5pbXBvcnQge0NsaWNrT3V0c2lkZU1vZHVsZX0gZnJvbSAnbmctY2xpY2stb3V0c2lkZSc7XHJcbmltcG9ydCB7VHJhbnNsYXRlTW9kdWxlfSBmcm9tICdAbmd4LXRyYW5zbGF0ZS9jb3JlJztcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBpbml0aWFsaXplQXBwKHNpZ25hdHVyZUNvbmZpZ1NlcnZpY2U6IFNpZ25hdHVyZUNvbmZpZ1NlcnZpY2UpIHtcclxuICBjb25zdCByZXN1bHQgPSAoKSA9PiBzaWduYXR1cmVDb25maWdTZXJ2aWNlLmxvYWQoKTtcclxuICByZXR1cm4gcmVzdWx0O1xyXG59XHJcblxyXG4vLyBOT1RFOiB0aGlzIGlzIHJlcXVpcmVkIGR1cmluZyBsaWJyYXJ5IGNvbXBpbGF0aW9uIHNlZSBodHRwczovL2dpdGh1Yi5jb20vYW5ndWxhci9hbmd1bGFyL2lzc3Vlcy8yMzYyOSNpc3N1ZWNvbW1lbnQtNDQwOTQyOTgxXHJcbi8vIEBkeW5hbWljXHJcbmV4cG9ydCBmdW5jdGlvbiBzZXR1cExvYWRpbmdJbnRlcmNlcHRvcihzZXJ2aWNlOiBMb2FkaW5nTWFza1NlcnZpY2UpIHtcclxuICByZXR1cm4gbmV3IExvYWRpbmdNYXNrSW50ZXJjZXB0b3JTZXJ2aWNlKHNlcnZpY2UpO1xyXG59XHJcblxyXG5ATmdNb2R1bGUoe1xyXG4gIGRlY2xhcmF0aW9uczogW1NpZ25hdHVyZUFwcENvbXBvbmVudCxcclxuICAgIFNpZ25hdHVyZUxpc3RQYW5lbENvbXBvbmVudCxcclxuICAgIE5ld0JhclFyQ29kZUNvbXBvbmVudCxcclxuICAgIFVwbG9hZFNpZ25hdHVyZUNvbXBvbmVudCxcclxuICAgIERuZFNpZ25hdHVyZURpcmVjdGl2ZSxcclxuICAgIFNpZ25hdHVyZSxcclxuICAgIENhbnZhc0NvbXBvbmVudCxcclxuICAgIFN0YW1wQ2FudmFzQ29tcG9uZW50LFxyXG4gICAgU2lnbmF0dXJlTGVmdFBhbmVsQ29tcG9uZW50LFxyXG4gICAgSGFuZE1vZGFsQ29tcG9uZW50LFxyXG4gICAgU3RhbXBNb2RhbENvbXBvbmVudFxyXG4gIF0sXHJcbiAgZXhwb3J0czogW1NpZ25hdHVyZUFwcENvbXBvbmVudCxcclxuICAgIFNpZ25hdHVyZUxpc3RQYW5lbENvbXBvbmVudCxcclxuICAgIE5ld0JhclFyQ29kZUNvbXBvbmVudCxcclxuICAgIFVwbG9hZFNpZ25hdHVyZUNvbXBvbmVudCxcclxuICAgIERuZFNpZ25hdHVyZURpcmVjdGl2ZSxcclxuICAgIFNpZ25hdHVyZSxcclxuICAgIENhbnZhc0NvbXBvbmVudCxcclxuICAgIFN0YW1wQ2FudmFzQ29tcG9uZW50LFxyXG4gICAgU2lnbmF0dXJlTGVmdFBhbmVsQ29tcG9uZW50LFxyXG4gICAgSGFuZE1vZGFsQ29tcG9uZW50LFxyXG4gICAgU3RhbXBNb2RhbENvbXBvbmVudCxcclxuICAgIENvbW1vbkNvbXBvbmVudHNNb2R1bGVcclxuICBdLFxyXG4gIGltcG9ydHM6IFtDb21tb25Nb2R1bGUsXHJcbiAgICBDb21tb25Db21wb25lbnRzTW9kdWxlLFxyXG4gICAgSHR0cENsaWVudE1vZHVsZSxcclxuICAgIEZvbnRBd2Vzb21lTW9kdWxlLFxyXG4gICAgQ2xpY2tPdXRzaWRlTW9kdWxlLFxyXG4gICAgVHJhbnNsYXRlTW9kdWxlLmZvclJvb3QoKVxyXG4gIF0sXHJcbiAgcHJvdmlkZXJzOiBbXHJcbiAgICBTaWduYXR1cmVTZXJ2aWNlLFxyXG4gICAgQ29uZmlnU2VydmljZSxcclxuICAgIFNpZ25hdHVyZUNvbmZpZ1NlcnZpY2UsXHJcbiAgICBTZWxlY3RTaWduYXR1cmVTZXJ2aWNlLFxyXG4gICAgRHJhZ1NpZ25hdHVyZVNlcnZpY2UsXHJcbiAgICBSZW1vdmVTaWduYXR1cmVTZXJ2aWNlLFxyXG4gICAgQWN0aXZlU2lnbmF0dXJlU2VydmljZSxcclxuICAgIEFjdGl2ZUNhbnZhc1NlcnZpY2UsXHJcbiAgICBSZW1vdmVDYW52YXNTZXJ2aWNlLFxyXG4gICAgRGF0ZVBpcGUsXHJcbiAgICBTaWduYXR1cmVzSG9sZGVyU2VydmljZSxcclxuICAgIFNpZ25hdHVyZVRhYkFjdGl2YXRvclNlcnZpY2UsXHJcbiAgICBDb3B5U2lnbmF0dXJlU2VydmljZSxcclxuICAgIHtcclxuICAgICAgcHJvdmlkZTogSFRUUF9JTlRFUkNFUFRPUlMsXHJcbiAgICAgIHVzZUNsYXNzOiBFcnJvckludGVyY2VwdG9yU2VydmljZSxcclxuICAgICAgbXVsdGk6IHRydWVcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIHByb3ZpZGU6IEFQUF9JTklUSUFMSVpFUixcclxuICAgICAgdXNlRmFjdG9yeTogaW5pdGlhbGl6ZUFwcCxcclxuICAgICAgZGVwczogW1NpZ25hdHVyZUNvbmZpZ1NlcnZpY2VdLCBtdWx0aTogdHJ1ZVxyXG4gICAgfSxcclxuICAgIExvYWRpbmdNYXNrU2VydmljZSxcclxuICAgIHtcclxuICAgICAgcHJvdmlkZTogSFRUUF9JTlRFUkNFUFRPUlMsXHJcbiAgICAgIHVzZUZhY3Rvcnk6IHNldHVwTG9hZGluZ0ludGVyY2VwdG9yLFxyXG4gICAgICBtdWx0aTogdHJ1ZSxcclxuICAgICAgZGVwczogW0xvYWRpbmdNYXNrU2VydmljZV1cclxuICAgIH1cclxuICBdLFxyXG4gIGVudHJ5Q29tcG9uZW50czogW1xyXG4gICAgU2lnbmF0dXJlLFxyXG4gICAgU3RhbXBDYW52YXNDb21wb25lbnRcclxuICBdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBTaWduYXR1cmVNb2R1bGUge1xyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgbGlicmFyeS5hZGQoZmFzLCBmYXIpO1xyXG4gIH1cclxuXHJcbiAgc3RhdGljIGZvclJvb3QoYXBpRW5kcG9pbnQ6IHN0cmluZyk6IE1vZHVsZVdpdGhQcm92aWRlcnMge1xyXG4gICAgQXBpLkRFRkFVTFRfQVBJX0VORFBPSU5UID0gYXBpRW5kcG9pbnQ7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBuZ01vZHVsZTogU2lnbmF0dXJlTW9kdWxlXHJcbiAgICB9O1xyXG4gIH1cclxufVxyXG4iXX0=