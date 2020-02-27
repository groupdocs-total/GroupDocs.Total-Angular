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
/**
 * @param {?} metadataConfigService
 * @return {?}
 */
export function initializeApp(metadataConfigService) {
    /** @type {?} */
    const result = (/**
     * @return {?}
     */
    () => metadataConfigService.load());
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
export class MetadataModule {
    /**
     * @param {?} apiEndpoint
     * @return {?}
     */
    static forRoot(apiEndpoint) {
        Api.DEFAULT_API_ENDPOINT = apiEndpoint;
        return {
            ngModule: MetadataModule
        };
    }
}
MetadataModule.decorators = [
    { type: NgModule, args: [{
                declarations: [
                    MetadataAppComponent,
                    AccordionComponent,
                    AccordionGroupComponent
                ],
                imports: [
                    BrowserModule,
                    CommonComponentsModule,
                    HttpClientModule,
                    FontAwesomeModule,
                    FormsModule
                ],
                exports: [
                    MetadataAppComponent,
                    CommonComponentsModule
                ],
                providers: [
                    MetadataService,
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWV0YWRhdGEubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdyb3VwZG9jcy5leGFtcGxlcy5hbmd1bGFyL21ldGFkYXRhLyIsInNvdXJjZXMiOlsibGliL21ldGFkYXRhLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFDLGFBQWEsRUFBQyxNQUFNLDJCQUEyQixDQUFDO0FBQ3hELE9BQU8sRUFBRSxlQUFlLEVBQXVCLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMvRSxPQUFPLEVBQUMsUUFBUSxFQUFDLE1BQU0saUJBQWlCLENBQUM7QUFDekMsT0FBTyxFQUFDLGlCQUFpQixFQUFFLGdCQUFnQixFQUFDLE1BQU0sc0JBQXNCLENBQUM7QUFDekUsT0FBTyxFQUFDLG9CQUFvQixFQUFDLE1BQU0sMEJBQTBCLENBQUM7QUFDOUQsT0FBTyxFQUNMLEdBQUcsRUFDSCxzQkFBc0IsRUFDdEIsdUJBQXVCLEVBQUUsNkJBQTZCLEVBQ3RELGtCQUFrQixFQUNuQixNQUFNLCtDQUErQyxDQUFDO0FBQ3ZELE9BQU8sRUFBQyxlQUFlLEVBQUMsTUFBTSxvQkFBb0IsQ0FBQztBQUNuRCxPQUFPLEVBQUMsYUFBYSxFQUFDLE1BQU0sK0NBQStDLENBQUM7QUFDNUUsT0FBTyxFQUFDLHFCQUFxQixFQUFDLE1BQU0sMkJBQTJCLENBQUM7QUFDaEUsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sa0NBQWtDLENBQUM7QUFDckUsT0FBTyxFQUFFLGtCQUFrQixFQUFDLE1BQU0saUNBQWlDLENBQUM7QUFDcEUsT0FBTyxFQUFFLHVCQUF1QixFQUFDLE1BQU0sdURBQXVELENBQUM7QUFDL0YsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLGdCQUFnQixDQUFDOzs7OztBQUU3QyxNQUFNLFVBQVUsYUFBYSxDQUFDLHFCQUE0Qzs7VUFDbEUsTUFBTTs7O0lBQUksR0FBRyxFQUFFLENBQUMscUJBQXFCLENBQUMsSUFBSSxFQUFFLENBQUE7SUFDbEQsT0FBTyxNQUFNLENBQUM7QUFDaEIsQ0FBQzs7Ozs7OztBQUlELE1BQU0sVUFBVSx1QkFBdUIsQ0FBQyxPQUEyQjtJQUNqRSxPQUFPLElBQUksNkJBQTZCLENBQUMsT0FBTyxDQUFDLENBQUM7QUFDcEQsQ0FBQztBQTBDRCxNQUFNLE9BQU8sY0FBYzs7Ozs7SUFDekIsTUFBTSxDQUFDLE9BQU8sQ0FBQyxXQUFvQjtRQUNqQyxHQUFHLENBQUMsb0JBQW9CLEdBQUcsV0FBVyxDQUFBO1FBQ3RDLE9BQU87WUFDTCxRQUFRLEVBQUUsY0FBYztTQUN6QixDQUFDO0lBQ0osQ0FBQzs7O1lBOUNGLFFBQVEsU0FBQztnQkFDUixZQUFZLEVBQUU7b0JBQ1osb0JBQW9CO29CQUNwQixrQkFBa0I7b0JBQ2xCLHVCQUF1QjtpQkFBQztnQkFDMUIsT0FBTyxFQUFFO29CQUNQLGFBQWE7b0JBQ2Isc0JBQXNCO29CQUN0QixnQkFBZ0I7b0JBQ2hCLGlCQUFpQjtvQkFDakIsV0FBVztpQkFDWjtnQkFDRCxPQUFPLEVBQUc7b0JBQ1Isb0JBQW9CO29CQUNwQixzQkFBc0I7aUJBQ3ZCO2dCQUNELFNBQVMsRUFBRTtvQkFDVCxlQUFlO29CQUNmLGFBQWE7b0JBQ2IsUUFBUTtvQkFDUixxQkFBcUI7b0JBQ3JCO3dCQUNFLE9BQU8sRUFBRSxpQkFBaUI7d0JBQzFCLFFBQVEsRUFBRSx1QkFBdUI7d0JBQ2pDLEtBQUssRUFBRSxJQUFJO3FCQUNaO29CQUNEO3dCQUNFLE9BQU8sRUFBRSxlQUFlO3dCQUN4QixVQUFVLEVBQUUsYUFBYTt3QkFDekIsSUFBSSxFQUFFLENBQUMscUJBQXFCLENBQUMsRUFBRSxLQUFLLEVBQUUsSUFBSTtxQkFDM0M7b0JBQ0Qsa0JBQWtCO29CQUNsQjt3QkFDRSxPQUFPLEVBQUUsaUJBQWlCO3dCQUMxQixVQUFVLEVBQUUsdUJBQXVCO3dCQUNuQyxLQUFLLEVBQUUsSUFBSTt3QkFDWCxJQUFJLEVBQUUsQ0FBQyxrQkFBa0IsQ0FBQztxQkFDM0I7aUJBQ0Y7YUFDRiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7QnJvd3Nlck1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3Nlcic7XG5pbXBvcnQgeyBBUFBfSU5JVElBTElaRVIsIE1vZHVsZVdpdGhQcm92aWRlcnMsIE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge0RhdGVQaXBlfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHtIVFRQX0lOVEVSQ0VQVE9SUywgSHR0cENsaWVudE1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuaW1wb3J0IHtNZXRhZGF0YUFwcENvbXBvbmVudH0gZnJvbSAnLi9tZXRhZGF0YS1hcHAuY29tcG9uZW50JztcbmltcG9ydCB7XG4gIEFwaSxcbiAgQ29tbW9uQ29tcG9uZW50c01vZHVsZSxcbiAgRXJyb3JJbnRlcmNlcHRvclNlcnZpY2UsIExvYWRpbmdNYXNrSW50ZXJjZXB0b3JTZXJ2aWNlLFxuICBMb2FkaW5nTWFza1NlcnZpY2Vcbn0gZnJvbSAnQGdyb3VwZG9jcy5leGFtcGxlcy5hbmd1bGFyL2NvbW1vbi1jb21wb25lbnRzJztcbmltcG9ydCB7TWV0YWRhdGFTZXJ2aWNlfSBmcm9tIFwiLi9tZXRhZGF0YS5zZXJ2aWNlXCI7XG5pbXBvcnQge0NvbmZpZ1NlcnZpY2V9IGZyb20gXCJAZ3JvdXBkb2NzLmV4YW1wbGVzLmFuZ3VsYXIvY29tbW9uLWNvbXBvbmVudHNcIjtcbmltcG9ydCB7TWV0YWRhdGFDb25maWdTZXJ2aWNlfSBmcm9tIFwiLi9tZXRhZGF0YS1jb25maWcuc2VydmljZVwiO1xuaW1wb3J0IHsgRm9udEF3ZXNvbWVNb2R1bGUgfSBmcm9tICdAZm9ydGF3ZXNvbWUvYW5ndWxhci1mb250YXdlc29tZSc7XG5pbXBvcnQgeyBBY2NvcmRpb25Db21wb25lbnR9IGZyb20gXCIuL2FjY29yZGlvbi9hY2NvcmRpb24uY29tcG9uZW50XCI7XG5pbXBvcnQgeyBBY2NvcmRpb25Hcm91cENvbXBvbmVudH0gZnJvbSBcIi4vYWNjb3JkaW9uL2FjY29yZGlvbi1ncm91cC9hY2NvcmRpb24tZ3JvdXAuY29tcG9uZW50XCI7XG5pbXBvcnQgeyBGb3Jtc01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcblxuZXhwb3J0IGZ1bmN0aW9uIGluaXRpYWxpemVBcHAobWV0YWRhdGFDb25maWdTZXJ2aWNlOiBNZXRhZGF0YUNvbmZpZ1NlcnZpY2UpIHtcbiAgY29uc3QgcmVzdWx0ID0gICgpID0+IG1ldGFkYXRhQ29uZmlnU2VydmljZS5sb2FkKCk7XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbi8vIE5PVEU6IHRoaXMgaXMgcmVxdWlyZWQgZHVyaW5nIGxpYnJhcnkgY29tcGlsYXRpb24gc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9hbmd1bGFyL2FuZ3VsYXIvaXNzdWVzLzIzNjI5I2lzc3VlY29tbWVudC00NDA5NDI5ODFcbi8vIEBkeW5hbWljXG5leHBvcnQgZnVuY3Rpb24gc2V0dXBMb2FkaW5nSW50ZXJjZXB0b3Ioc2VydmljZTogTG9hZGluZ01hc2tTZXJ2aWNlKSB7XG4gIHJldHVybiBuZXcgTG9hZGluZ01hc2tJbnRlcmNlcHRvclNlcnZpY2Uoc2VydmljZSk7XG59XG5cbkBOZ01vZHVsZSh7XG4gIGRlY2xhcmF0aW9uczogW1xuICAgIE1ldGFkYXRhQXBwQ29tcG9uZW50LFxuICAgIEFjY29yZGlvbkNvbXBvbmVudCxcbiAgICBBY2NvcmRpb25Hcm91cENvbXBvbmVudF0sXG4gIGltcG9ydHM6IFtcbiAgICBCcm93c2VyTW9kdWxlLFxuICAgIENvbW1vbkNvbXBvbmVudHNNb2R1bGUsXG4gICAgSHR0cENsaWVudE1vZHVsZSxcbiAgICBGb250QXdlc29tZU1vZHVsZSxcbiAgICBGb3Jtc01vZHVsZVxuICBdLFxuICBleHBvcnRzIDogW1xuICAgIE1ldGFkYXRhQXBwQ29tcG9uZW50LFxuICAgIENvbW1vbkNvbXBvbmVudHNNb2R1bGVcbiAgXSxcbiAgcHJvdmlkZXJzOiBbXG4gICAgTWV0YWRhdGFTZXJ2aWNlLFxuICAgIENvbmZpZ1NlcnZpY2UsXG4gICAgRGF0ZVBpcGUsXG4gICAgTWV0YWRhdGFDb25maWdTZXJ2aWNlLFxuICAgIHtcbiAgICAgIHByb3ZpZGU6IEhUVFBfSU5URVJDRVBUT1JTLFxuICAgICAgdXNlQ2xhc3M6IEVycm9ySW50ZXJjZXB0b3JTZXJ2aWNlLFxuICAgICAgbXVsdGk6IHRydWVcbiAgICB9LFxuICAgIHtcbiAgICAgIHByb3ZpZGU6IEFQUF9JTklUSUFMSVpFUixcbiAgICAgIHVzZUZhY3Rvcnk6IGluaXRpYWxpemVBcHAsXG4gICAgICBkZXBzOiBbTWV0YWRhdGFDb25maWdTZXJ2aWNlXSwgbXVsdGk6IHRydWVcbiAgICB9LFxuICAgIExvYWRpbmdNYXNrU2VydmljZSxcbiAgICB7XG4gICAgICBwcm92aWRlOiBIVFRQX0lOVEVSQ0VQVE9SUyxcbiAgICAgIHVzZUZhY3Rvcnk6IHNldHVwTG9hZGluZ0ludGVyY2VwdG9yLFxuICAgICAgbXVsdGk6IHRydWUsXG4gICAgICBkZXBzOiBbTG9hZGluZ01hc2tTZXJ2aWNlXVxuICAgIH1cbiAgXVxufSlcbmV4cG9ydCBjbGFzcyBNZXRhZGF0YU1vZHVsZSB7XG4gIHN0YXRpYyBmb3JSb290KGFwaUVuZHBvaW50IDogc3RyaW5nKTogTW9kdWxlV2l0aFByb3ZpZGVycyB7XG4gICAgQXBpLkRFRkFVTFRfQVBJX0VORFBPSU5UID0gYXBpRW5kcG9pbnRcbiAgICByZXR1cm4ge1xuICAgICAgbmdNb2R1bGU6IE1ldGFkYXRhTW9kdWxlXG4gICAgfTtcbiAgfVxufVxuIl19