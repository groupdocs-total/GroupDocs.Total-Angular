/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { BrowserModule } from '@angular/platform-browser';
import { APP_INITIALIZER, NgModule } from '@angular/core';
import { DatePipe } from '@angular/common';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { MetadataAppComponent } from './metadata-app.component';
import { Api, CommonComponentsModule, ErrorInterceptorService, LoadingMaskInterceptorService, LoadingMaskService } from '@groupdocs.examples.angular/common-components';
import { MetadataService } from "./metadata.service";
import { ConfigService } from "@groupdocs.examples.angular/common-components";
import { MetadataConfigService } from "./metadata-config.service";
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AccordionComponent } from "./accordion/accordion.component";
import { AccordionGroupComponent } from "./accordion/accordion-group/accordion-group.component";
import { FormsModule } from '@angular/forms';
import { AccordionService } from './accordion.service';
import { GdIntegerDirective } from "./directives/gd-integer.directive";
import { DpDatePickerModule } from 'ng2-date-picker';
import { ConfirmModalComponent } from "./confirm-modal/confirm-modal.component";
import { PreviewStatusComponent } from "./preview-status/preview-status.component";
import { TranslateModule } from '@ngx-translate/core';
/**
 * @param {?} metadataConfigService
 * @return {?}
 */
export function initializeApp(metadataConfigService) {
    /** @type {?} */
    var result = (/**
     * @return {?}
     */
    function () { return metadataConfigService.load(); });
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
var MetadataModule = /** @class */ (function () {
    function MetadataModule() {
    }
    /**
     * @param {?} apiEndpoint
     * @return {?}
     */
    MetadataModule.forRoot = /**
     * @param {?} apiEndpoint
     * @return {?}
     */
    function (apiEndpoint) {
        Api.DEFAULT_API_ENDPOINT = apiEndpoint;
        return {
            ngModule: MetadataModule
        };
    };
    MetadataModule.decorators = [
        { type: NgModule, args: [{
                    declarations: [
                        MetadataAppComponent,
                        AccordionComponent,
                        AccordionGroupComponent,
                        GdIntegerDirective,
                        ConfirmModalComponent,
                        PreviewStatusComponent
                    ],
                    imports: [
                        BrowserModule,
                        CommonComponentsModule,
                        HttpClientModule,
                        FontAwesomeModule,
                        FormsModule,
                        DpDatePickerModule,
                        TranslateModule.forRoot()
                    ],
                    exports: [
                        MetadataAppComponent,
                        CommonComponentsModule,
                        AccordionComponent,
                        AccordionGroupComponent
                    ],
                    providers: [
                        MetadataService,
                        AccordionService,
                        ConfigService,
                        DatePipe,
                        MetadataConfigService,
                        {
                            provide: HTTP_INTERCEPTORS,
                            useClass: ErrorInterceptorService,
                            multi: true
                        },
                        {
                            provide: APP_INITIALIZER,
                            useFactory: initializeApp,
                            deps: [MetadataConfigService], multi: true
                        },
                        LoadingMaskService,
                        {
                            provide: HTTP_INTERCEPTORS,
                            useFactory: setupLoadingInterceptor,
                            multi: true,
                            deps: [LoadingMaskService]
                        }
                    ]
                },] }
    ];
    return MetadataModule;
}());
export { MetadataModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWV0YWRhdGEubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdyb3VwZG9jcy5leGFtcGxlcy5hbmd1bGFyL21ldGFkYXRhLyIsInNvdXJjZXMiOlsibGliL21ldGFkYXRhLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBQzFELE9BQU8sRUFBRSxlQUFlLEVBQXVCLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMvRSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDM0MsT0FBTyxFQUFFLGlCQUFpQixFQUFFLGdCQUFnQixFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDM0UsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFDaEUsT0FBTyxFQUNMLEdBQUcsRUFDSCxzQkFBc0IsRUFDdEIsdUJBQXVCLEVBQUUsNkJBQTZCLEVBQ3RELGtCQUFrQixFQUNuQixNQUFNLCtDQUErQyxDQUFDO0FBQ3ZELE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUNyRCxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sK0NBQStDLENBQUM7QUFDOUUsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFDbEUsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sa0NBQWtDLENBQUM7QUFDckUsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0saUNBQWlDLENBQUM7QUFDckUsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sdURBQXVELENBQUM7QUFDaEcsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQzdDLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBQ3ZELE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLG1DQUFtQyxDQUFDO0FBQ3ZFLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQ3JELE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLHlDQUF5QyxDQUFDO0FBQ2hGLE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLDJDQUEyQyxDQUFDO0FBQ25GLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQzs7Ozs7QUFFdEQsTUFBTSxVQUFVLGFBQWEsQ0FBQyxxQkFBNEM7O1FBQ2xFLE1BQU07OztJQUFJLGNBQU0sT0FBQSxxQkFBcUIsQ0FBQyxJQUFJLEVBQUUsRUFBNUIsQ0FBNEIsQ0FBQTtJQUNsRCxPQUFPLE1BQU0sQ0FBQztBQUNoQixDQUFDOzs7Ozs7O0FBSUQsTUFBTSxVQUFVLHVCQUF1QixDQUFDLE9BQTJCO0lBQ2pFLE9BQU8sSUFBSSw2QkFBNkIsQ0FBQyxPQUFPLENBQUMsQ0FBQztBQUNwRCxDQUFDO0FBRUQ7SUFBQTtJQXdEQSxDQUFDOzs7OztJQU5RLHNCQUFPOzs7O0lBQWQsVUFBZSxXQUFvQjtRQUNqQyxHQUFHLENBQUMsb0JBQW9CLEdBQUcsV0FBVyxDQUFBO1FBQ3RDLE9BQU87WUFDTCxRQUFRLEVBQUUsY0FBYztTQUN6QixDQUFDO0lBQ0osQ0FBQzs7Z0JBdkRGLFFBQVEsU0FBQztvQkFDUixZQUFZLEVBQUU7d0JBQ1osb0JBQW9CO3dCQUNwQixrQkFBa0I7d0JBQ2xCLHVCQUF1Qjt3QkFDdkIsa0JBQWtCO3dCQUNsQixxQkFBcUI7d0JBQ3JCLHNCQUFzQjtxQkFDdkI7b0JBQ0QsT0FBTyxFQUFFO3dCQUNQLGFBQWE7d0JBQ2Isc0JBQXNCO3dCQUN0QixnQkFBZ0I7d0JBQ2hCLGlCQUFpQjt3QkFDakIsV0FBVzt3QkFDWCxrQkFBa0I7d0JBQ2xCLGVBQWUsQ0FBQyxPQUFPLEVBQUU7cUJBQzFCO29CQUNELE9BQU8sRUFBRzt3QkFDUixvQkFBb0I7d0JBQ3BCLHNCQUFzQjt3QkFDdEIsa0JBQWtCO3dCQUNsQix1QkFBdUI7cUJBQ3hCO29CQUNELFNBQVMsRUFBRTt3QkFDVCxlQUFlO3dCQUNmLGdCQUFnQjt3QkFDaEIsYUFBYTt3QkFDYixRQUFRO3dCQUNSLHFCQUFxQjt3QkFDckI7NEJBQ0UsT0FBTyxFQUFFLGlCQUFpQjs0QkFDMUIsUUFBUSxFQUFFLHVCQUF1Qjs0QkFDakMsS0FBSyxFQUFFLElBQUk7eUJBQ1o7d0JBQ0Q7NEJBQ0UsT0FBTyxFQUFFLGVBQWU7NEJBQ3hCLFVBQVUsRUFBRSxhQUFhOzRCQUN6QixJQUFJLEVBQUUsQ0FBQyxxQkFBcUIsQ0FBQyxFQUFFLEtBQUssRUFBRSxJQUFJO3lCQUMzQzt3QkFDRCxrQkFBa0I7d0JBQ2xCOzRCQUNFLE9BQU8sRUFBRSxpQkFBaUI7NEJBQzFCLFVBQVUsRUFBRSx1QkFBdUI7NEJBQ25DLEtBQUssRUFBRSxJQUFJOzRCQUNYLElBQUksRUFBRSxDQUFDLGtCQUFrQixDQUFDO3lCQUMzQjtxQkFDRjtpQkFDRjs7SUFRRCxxQkFBQztDQUFBLEFBeERELElBd0RDO1NBUFksY0FBYyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEJyb3dzZXJNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyJztcclxuaW1wb3J0IHsgQVBQX0lOSVRJQUxJWkVSLCBNb2R1bGVXaXRoUHJvdmlkZXJzLCBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBEYXRlUGlwZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XHJcbmltcG9ydCB7IEhUVFBfSU5URVJDRVBUT1JTLCBIdHRwQ2xpZW50TW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xyXG5pbXBvcnQgeyBNZXRhZGF0YUFwcENvbXBvbmVudCB9IGZyb20gJy4vbWV0YWRhdGEtYXBwLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7XHJcbiAgQXBpLFxyXG4gIENvbW1vbkNvbXBvbmVudHNNb2R1bGUsXHJcbiAgRXJyb3JJbnRlcmNlcHRvclNlcnZpY2UsIExvYWRpbmdNYXNrSW50ZXJjZXB0b3JTZXJ2aWNlLFxyXG4gIExvYWRpbmdNYXNrU2VydmljZVxyXG59IGZyb20gJ0Bncm91cGRvY3MuZXhhbXBsZXMuYW5ndWxhci9jb21tb24tY29tcG9uZW50cyc7XHJcbmltcG9ydCB7IE1ldGFkYXRhU2VydmljZSB9IGZyb20gXCIuL21ldGFkYXRhLnNlcnZpY2VcIjtcclxuaW1wb3J0IHsgQ29uZmlnU2VydmljZSB9IGZyb20gXCJAZ3JvdXBkb2NzLmV4YW1wbGVzLmFuZ3VsYXIvY29tbW9uLWNvbXBvbmVudHNcIjtcclxuaW1wb3J0IHsgTWV0YWRhdGFDb25maWdTZXJ2aWNlIH0gZnJvbSBcIi4vbWV0YWRhdGEtY29uZmlnLnNlcnZpY2VcIjtcclxuaW1wb3J0IHsgRm9udEF3ZXNvbWVNb2R1bGUgfSBmcm9tICdAZm9ydGF3ZXNvbWUvYW5ndWxhci1mb250YXdlc29tZSc7XHJcbmltcG9ydCB7IEFjY29yZGlvbkNvbXBvbmVudCB9IGZyb20gXCIuL2FjY29yZGlvbi9hY2NvcmRpb24uY29tcG9uZW50XCI7XHJcbmltcG9ydCB7IEFjY29yZGlvbkdyb3VwQ29tcG9uZW50IH0gZnJvbSBcIi4vYWNjb3JkaW9uL2FjY29yZGlvbi1ncm91cC9hY2NvcmRpb24tZ3JvdXAuY29tcG9uZW50XCI7XHJcbmltcG9ydCB7IEZvcm1zTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xyXG5pbXBvcnQgeyBBY2NvcmRpb25TZXJ2aWNlIH0gZnJvbSAnLi9hY2NvcmRpb24uc2VydmljZSc7XHJcbmltcG9ydCB7IEdkSW50ZWdlckRpcmVjdGl2ZSB9IGZyb20gXCIuL2RpcmVjdGl2ZXMvZ2QtaW50ZWdlci5kaXJlY3RpdmVcIjtcclxuaW1wb3J0IHsgRHBEYXRlUGlja2VyTW9kdWxlIH0gZnJvbSAnbmcyLWRhdGUtcGlja2VyJztcclxuaW1wb3J0IHsgQ29uZmlybU1vZGFsQ29tcG9uZW50IH0gZnJvbSBcIi4vY29uZmlybS1tb2RhbC9jb25maXJtLW1vZGFsLmNvbXBvbmVudFwiO1xyXG5pbXBvcnQgeyBQcmV2aWV3U3RhdHVzQ29tcG9uZW50IH0gZnJvbSBcIi4vcHJldmlldy1zdGF0dXMvcHJldmlldy1zdGF0dXMuY29tcG9uZW50XCI7XHJcbmltcG9ydCB7IFRyYW5zbGF0ZU1vZHVsZSB9IGZyb20gJ0BuZ3gtdHJhbnNsYXRlL2NvcmUnO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGluaXRpYWxpemVBcHAobWV0YWRhdGFDb25maWdTZXJ2aWNlOiBNZXRhZGF0YUNvbmZpZ1NlcnZpY2UpIHtcclxuICBjb25zdCByZXN1bHQgPSAgKCkgPT4gbWV0YWRhdGFDb25maWdTZXJ2aWNlLmxvYWQoKTtcclxuICByZXR1cm4gcmVzdWx0O1xyXG59XHJcblxyXG4vLyBOT1RFOiB0aGlzIGlzIHJlcXVpcmVkIGR1cmluZyBsaWJyYXJ5IGNvbXBpbGF0aW9uIHNlZSBodHRwczovL2dpdGh1Yi5jb20vYW5ndWxhci9hbmd1bGFyL2lzc3Vlcy8yMzYyOSNpc3N1ZWNvbW1lbnQtNDQwOTQyOTgxXHJcbi8vIEBkeW5hbWljXHJcbmV4cG9ydCBmdW5jdGlvbiBzZXR1cExvYWRpbmdJbnRlcmNlcHRvcihzZXJ2aWNlOiBMb2FkaW5nTWFza1NlcnZpY2UpIHtcclxuICByZXR1cm4gbmV3IExvYWRpbmdNYXNrSW50ZXJjZXB0b3JTZXJ2aWNlKHNlcnZpY2UpO1xyXG59XHJcblxyXG5ATmdNb2R1bGUoe1xyXG4gIGRlY2xhcmF0aW9uczogW1xyXG4gICAgTWV0YWRhdGFBcHBDb21wb25lbnQsXHJcbiAgICBBY2NvcmRpb25Db21wb25lbnQsXHJcbiAgICBBY2NvcmRpb25Hcm91cENvbXBvbmVudCxcclxuICAgIEdkSW50ZWdlckRpcmVjdGl2ZSxcclxuICAgIENvbmZpcm1Nb2RhbENvbXBvbmVudCxcclxuICAgIFByZXZpZXdTdGF0dXNDb21wb25lbnRcclxuICBdLFxyXG4gIGltcG9ydHM6IFtcclxuICAgIEJyb3dzZXJNb2R1bGUsXHJcbiAgICBDb21tb25Db21wb25lbnRzTW9kdWxlLFxyXG4gICAgSHR0cENsaWVudE1vZHVsZSxcclxuICAgIEZvbnRBd2Vzb21lTW9kdWxlLFxyXG4gICAgRm9ybXNNb2R1bGUsXHJcbiAgICBEcERhdGVQaWNrZXJNb2R1bGUsXHJcbiAgICBUcmFuc2xhdGVNb2R1bGUuZm9yUm9vdCgpXHJcbiAgXSxcclxuICBleHBvcnRzIDogW1xyXG4gICAgTWV0YWRhdGFBcHBDb21wb25lbnQsXHJcbiAgICBDb21tb25Db21wb25lbnRzTW9kdWxlLFxyXG4gICAgQWNjb3JkaW9uQ29tcG9uZW50LFxyXG4gICAgQWNjb3JkaW9uR3JvdXBDb21wb25lbnRcclxuICBdLFxyXG4gIHByb3ZpZGVyczogW1xyXG4gICAgTWV0YWRhdGFTZXJ2aWNlLFxyXG4gICAgQWNjb3JkaW9uU2VydmljZSxcclxuICAgIENvbmZpZ1NlcnZpY2UsXHJcbiAgICBEYXRlUGlwZSxcclxuICAgIE1ldGFkYXRhQ29uZmlnU2VydmljZSxcclxuICAgIHtcclxuICAgICAgcHJvdmlkZTogSFRUUF9JTlRFUkNFUFRPUlMsXHJcbiAgICAgIHVzZUNsYXNzOiBFcnJvckludGVyY2VwdG9yU2VydmljZSxcclxuICAgICAgbXVsdGk6IHRydWVcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIHByb3ZpZGU6IEFQUF9JTklUSUFMSVpFUixcclxuICAgICAgdXNlRmFjdG9yeTogaW5pdGlhbGl6ZUFwcCxcclxuICAgICAgZGVwczogW01ldGFkYXRhQ29uZmlnU2VydmljZV0sIG11bHRpOiB0cnVlXHJcbiAgICB9LFxyXG4gICAgTG9hZGluZ01hc2tTZXJ2aWNlLFxyXG4gICAge1xyXG4gICAgICBwcm92aWRlOiBIVFRQX0lOVEVSQ0VQVE9SUyxcclxuICAgICAgdXNlRmFjdG9yeTogc2V0dXBMb2FkaW5nSW50ZXJjZXB0b3IsXHJcbiAgICAgIG11bHRpOiB0cnVlLFxyXG4gICAgICBkZXBzOiBbTG9hZGluZ01hc2tTZXJ2aWNlXVxyXG4gICAgfVxyXG4gIF1cclxufSlcclxuZXhwb3J0IGNsYXNzIE1ldGFkYXRhTW9kdWxlIHtcclxuICBzdGF0aWMgZm9yUm9vdChhcGlFbmRwb2ludCA6IHN0cmluZyk6IE1vZHVsZVdpdGhQcm92aWRlcnMge1xyXG4gICAgQXBpLkRFRkFVTFRfQVBJX0VORFBPSU5UID0gYXBpRW5kcG9pbnRcclxuICAgIHJldHVybiB7XHJcbiAgICAgIG5nTW9kdWxlOiBNZXRhZGF0YU1vZHVsZVxyXG4gICAgfTtcclxuICB9XHJcbn1cclxuIl19