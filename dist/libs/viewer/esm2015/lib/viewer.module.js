/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { BrowserModule } from '@angular/platform-browser';
import { APP_INITIALIZER, NgModule } from '@angular/core';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { ViewerAppComponent } from './viewer-app.component';
import { Api, CommonComponentsModule, ErrorInterceptorService } from '@groupdocs.examples.angular/common-components';
import { ViewerService } from "./viewer.service";
import { ConfigService } from "@groupdocs.examples.angular/common-components";
import { ViewerConfigService } from "./viewer-config.service";
import { ThumbnailsComponent } from './thumbnails/thumbnails.component';
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
                    ThumbnailsComponent
                ],
                imports: [
                    BrowserModule,
                    CommonComponentsModule,
                    HttpClientModule
                ],
                exports: [
                    ViewerAppComponent,
                    ThumbnailsComponent,
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
                    }
                ]
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmlld2VyLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bncm91cGRvY3MuZXhhbXBsZXMuYW5ndWxhci92aWV3ZXIvIiwic291cmNlcyI6WyJsaWIvdmlld2VyLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFDLGFBQWEsRUFBQyxNQUFNLDJCQUEyQixDQUFDO0FBQ3hELE9BQU8sRUFBRSxlQUFlLEVBQXVCLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMvRSxPQUFPLEVBQUMsaUJBQWlCLEVBQUUsZ0JBQWdCLEVBQUMsTUFBTSxzQkFBc0IsQ0FBQztBQUN6RSxPQUFPLEVBQUMsa0JBQWtCLEVBQUMsTUFBTSx3QkFBd0IsQ0FBQztBQUMxRCxPQUFPLEVBQUUsR0FBRyxFQUFFLHNCQUFzQixFQUFFLHVCQUF1QixFQUFFLE1BQU0sK0NBQStDLENBQUM7QUFDckgsT0FBTyxFQUFDLGFBQWEsRUFBQyxNQUFNLGtCQUFrQixDQUFDO0FBQy9DLE9BQU8sRUFBQyxhQUFhLEVBQUMsTUFBTSwrQ0FBK0MsQ0FBQztBQUM1RSxPQUFPLEVBQUMsbUJBQW1CLEVBQUMsTUFBTSx5QkFBeUIsQ0FBQztBQUM1RCxPQUFPLEVBQUMsbUJBQW1CLEVBQUMsTUFBTSxtQ0FBbUMsQ0FBQzs7Ozs7QUFFdEUsTUFBTSxVQUFVLGFBQWEsQ0FBQyxtQkFBd0M7O1VBQzlELE1BQU07OztJQUFJLEdBQUcsRUFBRSxDQUFDLG1CQUFtQixDQUFDLElBQUksRUFBRSxDQUFBO0lBQ2hELE9BQU8sTUFBTSxDQUFDO0FBQ2hCLENBQUM7QUFnQ0QsTUFBTSxPQUFPLFlBQVk7Ozs7O0lBQ3ZCLE1BQU0sQ0FBQyxPQUFPLENBQUMsV0FBb0I7UUFDakMsR0FBRyxDQUFDLG9CQUFvQixHQUFHLFdBQVcsQ0FBQTtRQUN0QyxPQUFPO1lBQ0wsUUFBUSxFQUFFLFlBQVk7U0FDdkIsQ0FBQztJQUNKLENBQUM7OztZQXBDRixRQUFRLFNBQUM7Z0JBQ1IsWUFBWSxFQUFFO29CQUNaLGtCQUFrQjtvQkFDbEIsbUJBQW1CO2lCQUFDO2dCQUN0QixPQUFPLEVBQUU7b0JBQ1AsYUFBYTtvQkFDYixzQkFBc0I7b0JBQ3RCLGdCQUFnQjtpQkFDakI7Z0JBQ0QsT0FBTyxFQUFHO29CQUNSLGtCQUFrQjtvQkFDbEIsbUJBQW1CO29CQUNuQixzQkFBc0I7aUJBQ3ZCO2dCQUNELFNBQVMsRUFBRTtvQkFDVCxhQUFhO29CQUNiLGFBQWE7b0JBQ2IsbUJBQW1CO29CQUNuQjt3QkFDRSxPQUFPLEVBQUUsaUJBQWlCO3dCQUMxQixRQUFRLEVBQUUsdUJBQXVCO3dCQUNqQyxLQUFLLEVBQUUsSUFBSTtxQkFDWjtvQkFDRDt3QkFDRSxPQUFPLEVBQUUsZUFBZTt3QkFDeEIsVUFBVSxFQUFFLGFBQWE7d0JBQ3pCLElBQUksRUFBRSxDQUFDLG1CQUFtQixDQUFDLEVBQUUsS0FBSyxFQUFFLElBQUk7cUJBQ3pDO2lCQUNGO2FBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0Jyb3dzZXJNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXInO1xuaW1wb3J0IHsgQVBQX0lOSVRJQUxJWkVSLCBNb2R1bGVXaXRoUHJvdmlkZXJzLCBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtIVFRQX0lOVEVSQ0VQVE9SUywgSHR0cENsaWVudE1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuaW1wb3J0IHtWaWV3ZXJBcHBDb21wb25lbnR9IGZyb20gJy4vdmlld2VyLWFwcC5jb21wb25lbnQnO1xuaW1wb3J0IHsgQXBpLCBDb21tb25Db21wb25lbnRzTW9kdWxlLCBFcnJvckludGVyY2VwdG9yU2VydmljZSB9IGZyb20gJ0Bncm91cGRvY3MuZXhhbXBsZXMuYW5ndWxhci9jb21tb24tY29tcG9uZW50cyc7XG5pbXBvcnQge1ZpZXdlclNlcnZpY2V9IGZyb20gXCIuL3ZpZXdlci5zZXJ2aWNlXCI7XG5pbXBvcnQge0NvbmZpZ1NlcnZpY2V9IGZyb20gXCJAZ3JvdXBkb2NzLmV4YW1wbGVzLmFuZ3VsYXIvY29tbW9uLWNvbXBvbmVudHNcIjtcbmltcG9ydCB7Vmlld2VyQ29uZmlnU2VydmljZX0gZnJvbSBcIi4vdmlld2VyLWNvbmZpZy5zZXJ2aWNlXCI7XG5pbXBvcnQge1RodW1ibmFpbHNDb21wb25lbnR9IGZyb20gJy4vdGh1bWJuYWlscy90aHVtYm5haWxzLmNvbXBvbmVudCc7XG5cbmV4cG9ydCBmdW5jdGlvbiBpbml0aWFsaXplQXBwKHZpZXdlckNvbmZpZ1NlcnZpY2U6IFZpZXdlckNvbmZpZ1NlcnZpY2UpIHtcbiAgY29uc3QgcmVzdWx0ID0gICgpID0+IHZpZXdlckNvbmZpZ1NlcnZpY2UubG9hZCgpO1xuICByZXR1cm4gcmVzdWx0O1xufVxuXG5ATmdNb2R1bGUoe1xuICBkZWNsYXJhdGlvbnM6IFtcbiAgICBWaWV3ZXJBcHBDb21wb25lbnQsXG4gICAgVGh1bWJuYWlsc0NvbXBvbmVudF0sXG4gIGltcG9ydHM6IFtcbiAgICBCcm93c2VyTW9kdWxlLFxuICAgIENvbW1vbkNvbXBvbmVudHNNb2R1bGUsXG4gICAgSHR0cENsaWVudE1vZHVsZVxuICBdLFxuICBleHBvcnRzIDogW1xuICAgIFZpZXdlckFwcENvbXBvbmVudCxcbiAgICBUaHVtYm5haWxzQ29tcG9uZW50LFxuICAgIENvbW1vbkNvbXBvbmVudHNNb2R1bGVcbiAgXSxcbiAgcHJvdmlkZXJzOiBbXG4gICAgVmlld2VyU2VydmljZSxcbiAgICBDb25maWdTZXJ2aWNlLFxuICAgIFZpZXdlckNvbmZpZ1NlcnZpY2UsXG4gICAge1xuICAgICAgcHJvdmlkZTogSFRUUF9JTlRFUkNFUFRPUlMsXG4gICAgICB1c2VDbGFzczogRXJyb3JJbnRlcmNlcHRvclNlcnZpY2UsXG4gICAgICBtdWx0aTogdHJ1ZVxuICAgIH0sXG4gICAge1xuICAgICAgcHJvdmlkZTogQVBQX0lOSVRJQUxJWkVSLFxuICAgICAgdXNlRmFjdG9yeTogaW5pdGlhbGl6ZUFwcCxcbiAgICAgIGRlcHM6IFtWaWV3ZXJDb25maWdTZXJ2aWNlXSwgbXVsdGk6IHRydWVcbiAgICB9XG4gIF1cbn0pXG5leHBvcnQgY2xhc3MgVmlld2VyTW9kdWxlIHtcbiAgc3RhdGljIGZvclJvb3QoYXBpRW5kcG9pbnQgOiBzdHJpbmcpOiBNb2R1bGVXaXRoUHJvdmlkZXJzIHtcbiAgICBBcGkuREVGQVVMVF9BUElfRU5EUE9JTlQgPSBhcGlFbmRwb2ludFxuICAgIHJldHVybiB7XG4gICAgICBuZ01vZHVsZTogVmlld2VyTW9kdWxlXG4gICAgfTtcbiAgfVxufVxuIl19