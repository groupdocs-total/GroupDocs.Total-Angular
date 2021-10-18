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
    const result = (/**
     * @return {?}
     */
    () => viewerConfigService.load());
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
    return new ViewerTranslateLoader();
}
export class ViewerModule {
    /**
     * @param {?} apiEndpoint
     * @return {?}
     */
    static forRoot(apiEndpoint) {
        Api.DEFAULT_API_ENDPOINT = apiEndpoint;
        return {
            ngModule: ViewerModule
        };
    }
}
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
                    }
                ]
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmlld2VyLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bncm91cGRvY3MuZXhhbXBsZXMuYW5ndWxhci92aWV3ZXIvIiwic291cmNlcyI6WyJsaWIvdmlld2VyLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFDLGFBQWEsRUFBQyxNQUFNLDJCQUEyQixDQUFDO0FBQ3hELE9BQU8sRUFBQyxlQUFlLEVBQXVCLFFBQVEsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUM3RSxPQUFPLEVBQUMsaUJBQWlCLEVBQUUsZ0JBQWdCLEVBQUMsTUFBTSxzQkFBc0IsQ0FBQztBQUN6RSxPQUFPLEVBQUMsa0JBQWtCLEVBQUMsTUFBTSx3QkFBd0IsQ0FBQztBQUMxRCxPQUFPLEVBQ0wsR0FBRyxFQUNILHNCQUFzQixFQUN0Qix1QkFBdUIsRUFDdkIsNkJBQTZCLEVBQzdCLGtCQUFrQixFQUNuQixNQUFNLCtDQUErQyxDQUFDO0FBQ3ZELE9BQU8sRUFBQyxhQUFhLEVBQUMsTUFBTSxrQkFBa0IsQ0FBQztBQUMvQyxPQUFPLEVBQUMsYUFBYSxFQUFDLE1BQU0sK0NBQStDLENBQUM7QUFDNUUsT0FBTyxFQUFDLG1CQUFtQixFQUFDLE1BQU0seUJBQXlCLENBQUM7QUFDNUQsT0FBTyxFQUFDLG1CQUFtQixFQUFDLE1BQU0sbUNBQW1DLENBQUM7QUFDdEUsT0FBTyxFQUFDLHNCQUFzQixFQUFDLE1BQU0sMkNBQTJDLENBQUM7QUFDakYsT0FBTyxFQUFDLGtCQUFrQixFQUFDLE1BQU0sbUNBQW1DLENBQUM7QUFDckUsT0FBTyxFQUFDLGlCQUFpQixFQUFDLE1BQU0sa0NBQWtDLENBQUM7QUFDbkUsT0FBTyxFQUFDLHdCQUF3QixFQUFDLE1BQU0sK0NBQStDLENBQUM7QUFDdkYsT0FBTyxFQUFDLGVBQWUsRUFBRSxlQUFlLEVBQUMsTUFBTSxxQkFBcUIsQ0FBQztBQUNyRSxPQUFPLEVBQUMscUJBQXFCLEVBQUMsTUFBTSx1Q0FBdUMsQ0FBQzs7Ozs7QUFFNUUsTUFBTSxVQUFVLGFBQWEsQ0FBQyxtQkFBd0M7O1VBQzlELE1BQU07OztJQUFHLEdBQUcsRUFBRSxDQUFDLG1CQUFtQixDQUFDLElBQUksRUFBRSxDQUFBO0lBQy9DLE9BQU8sTUFBTSxDQUFDO0FBQ2hCLENBQUM7Ozs7Ozs7QUFJRCxNQUFNLFVBQVUsdUJBQXVCLENBQUMsT0FBMkI7SUFDakUsT0FBTyxJQUFJLDZCQUE2QixDQUFDLE9BQU8sQ0FBQyxDQUFDO0FBQ3BELENBQUM7Ozs7O0FBR0QsTUFBTSxVQUFVLHNCQUFzQjtJQUNwQyxPQUFPLElBQUkscUJBQXFCLEVBQUUsQ0FBQztBQUNyQyxDQUFDO0FBb0RELE1BQU0sT0FBTyxZQUFZOzs7OztJQUN2QixNQUFNLENBQUMsT0FBTyxDQUFDLFdBQW9CO1FBQ2pDLEdBQUcsQ0FBQyxvQkFBb0IsR0FBRyxXQUFXLENBQUE7UUFDdEMsT0FBTztZQUNMLFFBQVEsRUFBRSxZQUFZO1NBQ3ZCLENBQUM7SUFDSixDQUFDOzs7WUF4REYsUUFBUSxTQUFDO2dCQUNSLFlBQVksRUFBRTtvQkFDWixrQkFBa0I7b0JBQ2xCLG1CQUFtQjtvQkFDbkIsd0JBQXdCO29CQUN4QixzQkFBc0I7b0JBQ3RCLGtCQUFrQjtpQkFBQztnQkFDckIsT0FBTyxFQUFFO29CQUNQLGFBQWE7b0JBQ2Isc0JBQXNCO29CQUN0QixnQkFBZ0I7b0JBQ2hCLGlCQUFpQjtvQkFDakIsZUFBZSxDQUFDLE9BQU8sQ0FBQzt3QkFDdEIsTUFBTSxFQUFFOzRCQUNOLE9BQU8sRUFBRSxlQUFlOzRCQUN4QixVQUFVLEVBQUUsc0JBQXNCO3lCQUNuQztxQkFDRixDQUFDO2lCQUNIO2dCQUNELE9BQU8sRUFBRztvQkFDUixrQkFBa0I7b0JBQ2xCLG1CQUFtQjtvQkFDbkIsd0JBQXdCO29CQUN4QixzQkFBc0I7b0JBQ3RCLGtCQUFrQjtvQkFDbEIsc0JBQXNCO2lCQUN2QjtnQkFDRCxTQUFTLEVBQUU7b0JBQ1QsYUFBYTtvQkFDYixhQUFhO29CQUNiLG1CQUFtQjtvQkFDbkI7d0JBQ0UsT0FBTyxFQUFFLGlCQUFpQjt3QkFDMUIsUUFBUSxFQUFFLHVCQUF1Qjt3QkFDakMsS0FBSyxFQUFFLElBQUk7cUJBQ1o7b0JBQ0Q7d0JBQ0UsT0FBTyxFQUFFLGVBQWU7d0JBQ3hCLFVBQVUsRUFBRSxhQUFhO3dCQUN6QixJQUFJLEVBQUUsQ0FBQyxtQkFBbUIsQ0FBQyxFQUFFLEtBQUssRUFBRSxJQUFJO3FCQUN6QztvQkFDRCxrQkFBa0I7b0JBQ2xCO3dCQUNFLE9BQU8sRUFBRSxpQkFBaUI7d0JBQzFCLFVBQVUsRUFBRSx1QkFBdUI7d0JBQ25DLEtBQUssRUFBRSxJQUFJO3dCQUNYLElBQUksRUFBRSxDQUFDLGtCQUFrQixDQUFDO3FCQUMzQjtpQkFDRjthQUNGIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtCcm93c2VyTW9kdWxlfSBmcm9tICdAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyJztcbmltcG9ydCB7QVBQX0lOSVRJQUxJWkVSLCBNb2R1bGVXaXRoUHJvdmlkZXJzLCBOZ01vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge0hUVFBfSU5URVJDRVBUT1JTLCBIdHRwQ2xpZW50TW9kdWxlfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XG5pbXBvcnQge1ZpZXdlckFwcENvbXBvbmVudH0gZnJvbSAnLi92aWV3ZXItYXBwLmNvbXBvbmVudCc7XG5pbXBvcnQge1xuICBBcGksXG4gIENvbW1vbkNvbXBvbmVudHNNb2R1bGUsXG4gIEVycm9ySW50ZXJjZXB0b3JTZXJ2aWNlLCBcbiAgTG9hZGluZ01hc2tJbnRlcmNlcHRvclNlcnZpY2UsXG4gIExvYWRpbmdNYXNrU2VydmljZVxufSBmcm9tICdAZ3JvdXBkb2NzLmV4YW1wbGVzLmFuZ3VsYXIvY29tbW9uLWNvbXBvbmVudHMnO1xuaW1wb3J0IHtWaWV3ZXJTZXJ2aWNlfSBmcm9tIFwiLi92aWV3ZXIuc2VydmljZVwiO1xuaW1wb3J0IHtDb25maWdTZXJ2aWNlfSBmcm9tIFwiQGdyb3VwZG9jcy5leGFtcGxlcy5hbmd1bGFyL2NvbW1vbi1jb21wb25lbnRzXCI7XG5pbXBvcnQge1ZpZXdlckNvbmZpZ1NlcnZpY2V9IGZyb20gXCIuL3ZpZXdlci1jb25maWcuc2VydmljZVwiO1xuaW1wb3J0IHtUaHVtYm5haWxzQ29tcG9uZW50fSBmcm9tICcuL3RodW1ibmFpbHMvdGh1bWJuYWlscy5jb21wb25lbnQnO1xuaW1wb3J0IHtFeGNlbERvY3VtZW50Q29tcG9uZW50fSBmcm9tICcuL2V4Y2VsLWRvY3VtZW50L2V4Y2VsLWRvY3VtZW50LmNvbXBvbmVudCc7XG5pbXBvcnQge0V4Y2VsUGFnZUNvbXBvbmVudH0gZnJvbSAnLi9leGNlbC1wYWdlL2V4Y2VsLXBhZ2UuY29tcG9uZW50JztcbmltcG9ydCB7Rm9udEF3ZXNvbWVNb2R1bGV9IGZyb20gJ0Bmb3J0YXdlc29tZS9hbmd1bGFyLWZvbnRhd2Vzb21lJztcbmltcG9ydCB7UnVuUHJlc2VudGF0aW9uQ29tcG9uZW50fSBmcm9tICcuL3J1bi1wcmVzZW50YXRpb24vcnVuLXByZXNlbnRhdGlvbi5jb21wb25lbnQnO1xuaW1wb3J0IHtUcmFuc2xhdGVNb2R1bGUsIFRyYW5zbGF0ZUxvYWRlcn0gZnJvbSAnQG5neC10cmFuc2xhdGUvY29yZSc7XG5pbXBvcnQge1ZpZXdlclRyYW5zbGF0ZUxvYWRlcn0gZnJvbSAnLi90cmFuc2xhdGlvbi92aWV3ZXItdHJhbnNsYXRlLmxvYWRlcic7XG5cbmV4cG9ydCBmdW5jdGlvbiBpbml0aWFsaXplQXBwKHZpZXdlckNvbmZpZ1NlcnZpY2U6IFZpZXdlckNvbmZpZ1NlcnZpY2UpIHtcbiAgY29uc3QgcmVzdWx0ID0gKCkgPT4gdmlld2VyQ29uZmlnU2VydmljZS5sb2FkKCk7XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbi8vIE5PVEU6IHRoaXMgaXMgcmVxdWlyZWQgZHVyaW5nIGxpYnJhcnkgY29tcGlsYXRpb24gc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9hbmd1bGFyL2FuZ3VsYXIvaXNzdWVzLzIzNjI5I2lzc3VlY29tbWVudC00NDA5NDI5ODFcbi8vIEBkeW5hbWljXG5leHBvcnQgZnVuY3Rpb24gc2V0dXBMb2FkaW5nSW50ZXJjZXB0b3Ioc2VydmljZTogTG9hZGluZ01hc2tTZXJ2aWNlKSB7XG4gIHJldHVybiBuZXcgTG9hZGluZ01hc2tJbnRlcmNlcHRvclNlcnZpY2Uoc2VydmljZSk7XG59XG5cbi8vIEFvVCByZXF1aXJlcyBhbiBleHBvcnRlZCBmdW5jdGlvbiBmb3IgZmFjdG9yaWVzXG5leHBvcnQgZnVuY3Rpb24gdHJhbnNsYXRlTG9hZGVyRmFjdG9yeSgpIHtcbiAgcmV0dXJuIG5ldyBWaWV3ZXJUcmFuc2xhdGVMb2FkZXIoKTtcbn1cblxuQE5nTW9kdWxlKHtcbiAgZGVjbGFyYXRpb25zOiBbXG4gICAgVmlld2VyQXBwQ29tcG9uZW50LFxuICAgIFRodW1ibmFpbHNDb21wb25lbnQsXG4gICAgUnVuUHJlc2VudGF0aW9uQ29tcG9uZW50LFxuICAgIEV4Y2VsRG9jdW1lbnRDb21wb25lbnQsXG4gICAgRXhjZWxQYWdlQ29tcG9uZW50XSxcbiAgaW1wb3J0czogW1xuICAgIEJyb3dzZXJNb2R1bGUsXG4gICAgQ29tbW9uQ29tcG9uZW50c01vZHVsZSxcbiAgICBIdHRwQ2xpZW50TW9kdWxlLFxuICAgIEZvbnRBd2Vzb21lTW9kdWxlLFxuICAgIFRyYW5zbGF0ZU1vZHVsZS5mb3JSb290KHtcbiAgICAgIGxvYWRlcjoge1xuICAgICAgICBwcm92aWRlOiBUcmFuc2xhdGVMb2FkZXIsXG4gICAgICAgIHVzZUZhY3Rvcnk6IHRyYW5zbGF0ZUxvYWRlckZhY3RvcnlcbiAgICAgIH1cbiAgICB9KVxuICBdLFxuICBleHBvcnRzIDogW1xuICAgIFZpZXdlckFwcENvbXBvbmVudCxcbiAgICBUaHVtYm5haWxzQ29tcG9uZW50LFxuICAgIFJ1blByZXNlbnRhdGlvbkNvbXBvbmVudCxcbiAgICBFeGNlbERvY3VtZW50Q29tcG9uZW50LFxuICAgIEV4Y2VsUGFnZUNvbXBvbmVudCxcbiAgICBDb21tb25Db21wb25lbnRzTW9kdWxlXG4gIF0sXG4gIHByb3ZpZGVyczogW1xuICAgIFZpZXdlclNlcnZpY2UsXG4gICAgQ29uZmlnU2VydmljZSxcbiAgICBWaWV3ZXJDb25maWdTZXJ2aWNlLFxuICAgIHtcbiAgICAgIHByb3ZpZGU6IEhUVFBfSU5URVJDRVBUT1JTLFxuICAgICAgdXNlQ2xhc3M6IEVycm9ySW50ZXJjZXB0b3JTZXJ2aWNlLFxuICAgICAgbXVsdGk6IHRydWVcbiAgICB9LFxuICAgIHtcbiAgICAgIHByb3ZpZGU6IEFQUF9JTklUSUFMSVpFUixcbiAgICAgIHVzZUZhY3Rvcnk6IGluaXRpYWxpemVBcHAsXG4gICAgICBkZXBzOiBbVmlld2VyQ29uZmlnU2VydmljZV0sIG11bHRpOiB0cnVlXG4gICAgfSxcbiAgICBMb2FkaW5nTWFza1NlcnZpY2UsXG4gICAge1xuICAgICAgcHJvdmlkZTogSFRUUF9JTlRFUkNFUFRPUlMsXG4gICAgICB1c2VGYWN0b3J5OiBzZXR1cExvYWRpbmdJbnRlcmNlcHRvcixcbiAgICAgIG11bHRpOiB0cnVlLFxuICAgICAgZGVwczogW0xvYWRpbmdNYXNrU2VydmljZV1cbiAgICB9XG4gIF1cbn0pXG5leHBvcnQgY2xhc3MgVmlld2VyTW9kdWxlIHtcbiAgc3RhdGljIGZvclJvb3QoYXBpRW5kcG9pbnQgOiBzdHJpbmcpOiBNb2R1bGVXaXRoUHJvdmlkZXJzIHtcbiAgICBBcGkuREVGQVVMVF9BUElfRU5EUE9JTlQgPSBhcGlFbmRwb2ludFxuICAgIHJldHVybiB7XG4gICAgICBuZ01vZHVsZTogVmlld2VyTW9kdWxlXG4gICAgfTtcbiAgfVxufVxuIl19