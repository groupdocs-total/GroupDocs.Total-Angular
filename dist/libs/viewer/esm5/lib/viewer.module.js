/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { BrowserModule } from '@angular/platform-browser';
import { APP_INITIALIZER, NgModule } from '@angular/core';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { ViewerAppComponent } from './viewer-app.component';
import { Api, CommonComponentsModule, ErrorInterceptorService, LoadingMaskInterceptorService, LoadingMaskService } from '@groupdocs.examples.angular/common-components';
import { ViewerService } from "./viewer.service";
import { ConfigService } from "@groupdocs.examples.angular/common-components";
import { ViewerConfigService } from "./viewer-config.service";
import { ThumbnailsComponent } from './thumbnails/thumbnails.component';
import { ExcelDocumentComponent } from './excel-document/excel-document.component';
import { ExcelPageComponent } from './excel-page/excel-page.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { RunPresentationComponent } from './run-presentation/run-presentation.component';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { ViewerTranslateLoader } from './translation/viewer-translate.loader';
/**
 * @param {?} viewerConfigService
 * @return {?}
 */
export function initializeApp(viewerConfigService) {
    /** @type {?} */
    var result = (/**
     * @return {?}
     */
    function () { return viewerConfigService.load(); });
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
// AoT requires an exported function for factories
/**
 * @return {?}
 */
export function translateLoaderFactory() {
    /** @type {?} */
    var translations = {
        'uk': {
            'TEST': 'IT WORKS'
        }
    };
    return new ViewerTranslateLoader(translations);
}
var ɵ0 = window;
var ViewerModule = /** @class */ (function () {
    function ViewerModule() {
    }
    /**
     * @param {?} apiEndpoint
     * @return {?}
     */
    ViewerModule.forRoot = /**
     * @param {?} apiEndpoint
     * @return {?}
     */
    function (apiEndpoint) {
        Api.DEFAULT_API_ENDPOINT = apiEndpoint;
        return {
            ngModule: ViewerModule
        };
    };
    ViewerModule.decorators = [
        { type: NgModule, args: [{
                    declarations: [
                        ViewerAppComponent,
                        ThumbnailsComponent,
                        RunPresentationComponent,
                        ExcelDocumentComponent,
                        ExcelPageComponent
                    ],
                    imports: [
                        BrowserModule,
                        CommonComponentsModule,
                        HttpClientModule,
                        FontAwesomeModule,
                        TranslateModule.forRoot({
                            loader: {
                                provide: TranslateLoader,
                                useFactory: translateLoaderFactory
                            }
                        })
                    ],
                    exports: [
                        ViewerAppComponent,
                        ThumbnailsComponent,
                        RunPresentationComponent,
                        ExcelDocumentComponent,
                        ExcelPageComponent,
                        CommonComponentsModule
                    ],
                    providers: [
                        ViewerService,
                        ConfigService,
                        ViewerConfigService,
                        {
                            provide: HTTP_INTERCEPTORS,
                            useClass: ErrorInterceptorService,
                            multi: true
                        },
                        {
                            provide: APP_INITIALIZER,
                            useFactory: initializeApp,
                            deps: [ViewerConfigService], multi: true
                        },
                        LoadingMaskService,
                        {
                            provide: HTTP_INTERCEPTORS,
                            useFactory: setupLoadingInterceptor,
                            multi: true,
                            deps: [LoadingMaskService]
                        },
                        { provide: Window, useValue: ɵ0 },
                    ]
                },] }
    ];
    return ViewerModule;
}());
export { ViewerModule };
export { ɵ0 };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmlld2VyLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bncm91cGRvY3MuZXhhbXBsZXMuYW5ndWxhci92aWV3ZXIvIiwic291cmNlcyI6WyJsaWIvdmlld2VyLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFDLGFBQWEsRUFBQyxNQUFNLDJCQUEyQixDQUFDO0FBQ3hELE9BQU8sRUFBQyxlQUFlLEVBQXVCLFFBQVEsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUM3RSxPQUFPLEVBQUMsaUJBQWlCLEVBQUUsZ0JBQWdCLEVBQUMsTUFBTSxzQkFBc0IsQ0FBQztBQUN6RSxPQUFPLEVBQUMsa0JBQWtCLEVBQUMsTUFBTSx3QkFBd0IsQ0FBQztBQUMxRCxPQUFPLEVBQ0wsR0FBRyxFQUNILHNCQUFzQixFQUN0Qix1QkFBdUIsRUFDdkIsNkJBQTZCLEVBQzdCLGtCQUFrQixFQUNuQixNQUFNLCtDQUErQyxDQUFDO0FBQ3ZELE9BQU8sRUFBQyxhQUFhLEVBQUMsTUFBTSxrQkFBa0IsQ0FBQztBQUMvQyxPQUFPLEVBQUMsYUFBYSxFQUFDLE1BQU0sK0NBQStDLENBQUM7QUFDNUUsT0FBTyxFQUFDLG1CQUFtQixFQUFDLE1BQU0seUJBQXlCLENBQUM7QUFDNUQsT0FBTyxFQUFDLG1CQUFtQixFQUFDLE1BQU0sbUNBQW1DLENBQUM7QUFDdEUsT0FBTyxFQUFDLHNCQUFzQixFQUFDLE1BQU0sMkNBQTJDLENBQUM7QUFDakYsT0FBTyxFQUFDLGtCQUFrQixFQUFDLE1BQU0sbUNBQW1DLENBQUM7QUFDckUsT0FBTyxFQUFDLGlCQUFpQixFQUFDLE1BQU0sa0NBQWtDLENBQUM7QUFDbkUsT0FBTyxFQUFDLHdCQUF3QixFQUFDLE1BQU0sK0NBQStDLENBQUM7QUFDdkYsT0FBTyxFQUFDLGVBQWUsRUFBRSxlQUFlLEVBQUMsTUFBTSxxQkFBcUIsQ0FBQztBQUNyRSxPQUFPLEVBQUMscUJBQXFCLEVBQUMsTUFBTSx1Q0FBdUMsQ0FBQzs7Ozs7QUFFNUUsTUFBTSxVQUFVLGFBQWEsQ0FBQyxtQkFBd0M7O1FBQzlELE1BQU07OztJQUFHLGNBQU0sT0FBQSxtQkFBbUIsQ0FBQyxJQUFJLEVBQUUsRUFBMUIsQ0FBMEIsQ0FBQTtJQUMvQyxPQUFPLE1BQU0sQ0FBQztBQUNoQixDQUFDOzs7Ozs7O0FBSUQsTUFBTSxVQUFVLHVCQUF1QixDQUFDLE9BQTJCO0lBQ2pFLE9BQU8sSUFBSSw2QkFBNkIsQ0FBQyxPQUFPLENBQUMsQ0FBQztBQUNwRCxDQUFDOzs7OztBQUdELE1BQU0sVUFBVSxzQkFBc0I7O1FBQzlCLFlBQVksR0FBNEI7UUFDNUMsSUFBSSxFQUFFO1lBQ0osTUFBTSxFQUFFLFVBQVU7U0FDbkI7S0FDRjtJQUNELE9BQU8sSUFBSSxxQkFBcUIsQ0FBQyxZQUFZLENBQUMsQ0FBQztBQUNqRCxDQUFDO1NBa0RnQyxNQUFNO0FBaER2QztJQUFBO0lBMERBLENBQUM7Ozs7O0lBTlEsb0JBQU87Ozs7SUFBZCxVQUFlLFdBQW9CO1FBQ2pDLEdBQUcsQ0FBQyxvQkFBb0IsR0FBRyxXQUFXLENBQUE7UUFDdEMsT0FBTztZQUNMLFFBQVEsRUFBRSxZQUFZO1NBQ3ZCLENBQUM7SUFDSixDQUFDOztnQkF6REYsUUFBUSxTQUFDO29CQUNSLFlBQVksRUFBRTt3QkFDWixrQkFBa0I7d0JBQ2xCLG1CQUFtQjt3QkFDbkIsd0JBQXdCO3dCQUN4QixzQkFBc0I7d0JBQ3RCLGtCQUFrQjtxQkFBQztvQkFDckIsT0FBTyxFQUFFO3dCQUNQLGFBQWE7d0JBQ2Isc0JBQXNCO3dCQUN0QixnQkFBZ0I7d0JBQ2hCLGlCQUFpQjt3QkFDakIsZUFBZSxDQUFDLE9BQU8sQ0FBQzs0QkFDdEIsTUFBTSxFQUFFO2dDQUNOLE9BQU8sRUFBRSxlQUFlO2dDQUN4QixVQUFVLEVBQUUsc0JBQXNCOzZCQUNuQzt5QkFDRixDQUFDO3FCQUNIO29CQUNELE9BQU8sRUFBRzt3QkFDUixrQkFBa0I7d0JBQ2xCLG1CQUFtQjt3QkFDbkIsd0JBQXdCO3dCQUN4QixzQkFBc0I7d0JBQ3RCLGtCQUFrQjt3QkFDbEIsc0JBQXNCO3FCQUN2QjtvQkFDRCxTQUFTLEVBQUU7d0JBQ1QsYUFBYTt3QkFDYixhQUFhO3dCQUNiLG1CQUFtQjt3QkFDbkI7NEJBQ0UsT0FBTyxFQUFFLGlCQUFpQjs0QkFDMUIsUUFBUSxFQUFFLHVCQUF1Qjs0QkFDakMsS0FBSyxFQUFFLElBQUk7eUJBQ1o7d0JBQ0Q7NEJBQ0UsT0FBTyxFQUFFLGVBQWU7NEJBQ3hCLFVBQVUsRUFBRSxhQUFhOzRCQUN6QixJQUFJLEVBQUUsQ0FBQyxtQkFBbUIsQ0FBQyxFQUFFLEtBQUssRUFBRSxJQUFJO3lCQUN6Qzt3QkFDRCxrQkFBa0I7d0JBQ2xCOzRCQUNFLE9BQU8sRUFBRSxpQkFBaUI7NEJBQzFCLFVBQVUsRUFBRSx1QkFBdUI7NEJBQ25DLEtBQUssRUFBRSxJQUFJOzRCQUNYLElBQUksRUFBRSxDQUFDLGtCQUFrQixDQUFDO3lCQUMzQjt3QkFDRCxFQUFFLE9BQU8sRUFBRSxNQUFNLEVBQUUsUUFBUSxJQUFRLEVBQUU7cUJBQ3RDO2lCQUNGOztJQVFELG1CQUFDO0NBQUEsQUExREQsSUEwREM7U0FQWSxZQUFZIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtCcm93c2VyTW9kdWxlfSBmcm9tICdAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyJztcbmltcG9ydCB7QVBQX0lOSVRJQUxJWkVSLCBNb2R1bGVXaXRoUHJvdmlkZXJzLCBOZ01vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge0hUVFBfSU5URVJDRVBUT1JTLCBIdHRwQ2xpZW50TW9kdWxlfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XG5pbXBvcnQge1ZpZXdlckFwcENvbXBvbmVudH0gZnJvbSAnLi92aWV3ZXItYXBwLmNvbXBvbmVudCc7XG5pbXBvcnQge1xuICBBcGksXG4gIENvbW1vbkNvbXBvbmVudHNNb2R1bGUsXG4gIEVycm9ySW50ZXJjZXB0b3JTZXJ2aWNlLCBcbiAgTG9hZGluZ01hc2tJbnRlcmNlcHRvclNlcnZpY2UsXG4gIExvYWRpbmdNYXNrU2VydmljZVxufSBmcm9tICdAZ3JvdXBkb2NzLmV4YW1wbGVzLmFuZ3VsYXIvY29tbW9uLWNvbXBvbmVudHMnO1xuaW1wb3J0IHtWaWV3ZXJTZXJ2aWNlfSBmcm9tIFwiLi92aWV3ZXIuc2VydmljZVwiO1xuaW1wb3J0IHtDb25maWdTZXJ2aWNlfSBmcm9tIFwiQGdyb3VwZG9jcy5leGFtcGxlcy5hbmd1bGFyL2NvbW1vbi1jb21wb25lbnRzXCI7XG5pbXBvcnQge1ZpZXdlckNvbmZpZ1NlcnZpY2V9IGZyb20gXCIuL3ZpZXdlci1jb25maWcuc2VydmljZVwiO1xuaW1wb3J0IHtUaHVtYm5haWxzQ29tcG9uZW50fSBmcm9tICcuL3RodW1ibmFpbHMvdGh1bWJuYWlscy5jb21wb25lbnQnO1xuaW1wb3J0IHtFeGNlbERvY3VtZW50Q29tcG9uZW50fSBmcm9tICcuL2V4Y2VsLWRvY3VtZW50L2V4Y2VsLWRvY3VtZW50LmNvbXBvbmVudCc7XG5pbXBvcnQge0V4Y2VsUGFnZUNvbXBvbmVudH0gZnJvbSAnLi9leGNlbC1wYWdlL2V4Y2VsLXBhZ2UuY29tcG9uZW50JztcbmltcG9ydCB7Rm9udEF3ZXNvbWVNb2R1bGV9IGZyb20gJ0Bmb3J0YXdlc29tZS9hbmd1bGFyLWZvbnRhd2Vzb21lJztcbmltcG9ydCB7UnVuUHJlc2VudGF0aW9uQ29tcG9uZW50fSBmcm9tICcuL3J1bi1wcmVzZW50YXRpb24vcnVuLXByZXNlbnRhdGlvbi5jb21wb25lbnQnO1xuaW1wb3J0IHtUcmFuc2xhdGVNb2R1bGUsIFRyYW5zbGF0ZUxvYWRlcn0gZnJvbSAnQG5neC10cmFuc2xhdGUvY29yZSc7XG5pbXBvcnQge1ZpZXdlclRyYW5zbGF0ZUxvYWRlcn0gZnJvbSAnLi90cmFuc2xhdGlvbi92aWV3ZXItdHJhbnNsYXRlLmxvYWRlcic7XG5cbmV4cG9ydCBmdW5jdGlvbiBpbml0aWFsaXplQXBwKHZpZXdlckNvbmZpZ1NlcnZpY2U6IFZpZXdlckNvbmZpZ1NlcnZpY2UpIHtcbiAgY29uc3QgcmVzdWx0ID0gKCkgPT4gdmlld2VyQ29uZmlnU2VydmljZS5sb2FkKCk7XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbi8vIE5PVEU6IHRoaXMgaXMgcmVxdWlyZWQgZHVyaW5nIGxpYnJhcnkgY29tcGlsYXRpb24gc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9hbmd1bGFyL2FuZ3VsYXIvaXNzdWVzLzIzNjI5I2lzc3VlY29tbWVudC00NDA5NDI5ODFcbi8vIEBkeW5hbWljXG5leHBvcnQgZnVuY3Rpb24gc2V0dXBMb2FkaW5nSW50ZXJjZXB0b3Ioc2VydmljZTogTG9hZGluZ01hc2tTZXJ2aWNlKSB7XG4gIHJldHVybiBuZXcgTG9hZGluZ01hc2tJbnRlcmNlcHRvclNlcnZpY2Uoc2VydmljZSk7XG59XG5cbi8vIEFvVCByZXF1aXJlcyBhbiBleHBvcnRlZCBmdW5jdGlvbiBmb3IgZmFjdG9yaWVzXG5leHBvcnQgZnVuY3Rpb24gdHJhbnNsYXRlTG9hZGVyRmFjdG9yeSgpIHtcbiAgY29uc3QgdHJhbnNsYXRpb25zOiB7IFtpZDogc3RyaW5nXSA6IGFueTsgfSA9IHsgXG4gICAgJ3VrJzoge1xuICAgICAgJ1RFU1QnOiAnSVQgV09SS1MnXG4gICAgfVxuICB9XG4gIHJldHVybiBuZXcgVmlld2VyVHJhbnNsYXRlTG9hZGVyKHRyYW5zbGF0aW9ucyk7XG59XG5cbkBOZ01vZHVsZSh7XG4gIGRlY2xhcmF0aW9uczogW1xuICAgIFZpZXdlckFwcENvbXBvbmVudCxcbiAgICBUaHVtYm5haWxzQ29tcG9uZW50LFxuICAgIFJ1blByZXNlbnRhdGlvbkNvbXBvbmVudCxcbiAgICBFeGNlbERvY3VtZW50Q29tcG9uZW50LFxuICAgIEV4Y2VsUGFnZUNvbXBvbmVudF0sXG4gIGltcG9ydHM6IFtcbiAgICBCcm93c2VyTW9kdWxlLFxuICAgIENvbW1vbkNvbXBvbmVudHNNb2R1bGUsXG4gICAgSHR0cENsaWVudE1vZHVsZSxcbiAgICBGb250QXdlc29tZU1vZHVsZSxcbiAgICBUcmFuc2xhdGVNb2R1bGUuZm9yUm9vdCh7XG4gICAgICBsb2FkZXI6IHtcbiAgICAgICAgcHJvdmlkZTogVHJhbnNsYXRlTG9hZGVyLFxuICAgICAgICB1c2VGYWN0b3J5OiB0cmFuc2xhdGVMb2FkZXJGYWN0b3J5XG4gICAgICB9XG4gICAgfSlcbiAgXSxcbiAgZXhwb3J0cyA6IFtcbiAgICBWaWV3ZXJBcHBDb21wb25lbnQsXG4gICAgVGh1bWJuYWlsc0NvbXBvbmVudCxcbiAgICBSdW5QcmVzZW50YXRpb25Db21wb25lbnQsXG4gICAgRXhjZWxEb2N1bWVudENvbXBvbmVudCxcbiAgICBFeGNlbFBhZ2VDb21wb25lbnQsXG4gICAgQ29tbW9uQ29tcG9uZW50c01vZHVsZVxuICBdLFxuICBwcm92aWRlcnM6IFtcbiAgICBWaWV3ZXJTZXJ2aWNlLFxuICAgIENvbmZpZ1NlcnZpY2UsXG4gICAgVmlld2VyQ29uZmlnU2VydmljZSxcbiAgICB7XG4gICAgICBwcm92aWRlOiBIVFRQX0lOVEVSQ0VQVE9SUyxcbiAgICAgIHVzZUNsYXNzOiBFcnJvckludGVyY2VwdG9yU2VydmljZSxcbiAgICAgIG11bHRpOiB0cnVlXG4gICAgfSxcbiAgICB7XG4gICAgICBwcm92aWRlOiBBUFBfSU5JVElBTElaRVIsXG4gICAgICB1c2VGYWN0b3J5OiBpbml0aWFsaXplQXBwLFxuICAgICAgZGVwczogW1ZpZXdlckNvbmZpZ1NlcnZpY2VdLCBtdWx0aTogdHJ1ZVxuICAgIH0sXG4gICAgTG9hZGluZ01hc2tTZXJ2aWNlLFxuICAgIHtcbiAgICAgIHByb3ZpZGU6IEhUVFBfSU5URVJDRVBUT1JTLFxuICAgICAgdXNlRmFjdG9yeTogc2V0dXBMb2FkaW5nSW50ZXJjZXB0b3IsXG4gICAgICBtdWx0aTogdHJ1ZSxcbiAgICAgIGRlcHM6IFtMb2FkaW5nTWFza1NlcnZpY2VdXG4gICAgfSxcbiAgICB7IHByb3ZpZGU6IFdpbmRvdywgdXNlVmFsdWU6IHdpbmRvdyB9LFxuICBdXG59KVxuZXhwb3J0IGNsYXNzIFZpZXdlck1vZHVsZSB7XG4gIHN0YXRpYyBmb3JSb290KGFwaUVuZHBvaW50IDogc3RyaW5nKTogTW9kdWxlV2l0aFByb3ZpZGVycyB7XG4gICAgQXBpLkRFRkFVTFRfQVBJX0VORFBPSU5UID0gYXBpRW5kcG9pbnRcbiAgICByZXR1cm4ge1xuICAgICAgbmdNb2R1bGU6IFZpZXdlck1vZHVsZVxuICAgIH07XG4gIH1cbn1cbiJdfQ==