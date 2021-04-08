/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { BrowserModule } from '@angular/platform-browser';
import { APP_INITIALIZER, NgModule } from '@angular/core';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { ViewerAppComponent } from './viewer-app.component';
import { FormsModule } from '@angular/forms';
import { Api, CommonComponentsModule, LoadingMaskInterceptorService, LoadingMaskService } from '@groupdocs.examples.angular/common-components';
import { ViewerService } from "./viewer.service";
import { ConfigService } from "@groupdocs.examples.angular/common-components";
import { ViewerConfigService } from "./viewer-config.service";
import { ThumbnailsComponent } from './thumbnails/thumbnails.component';
import { ExcelDocumentComponent } from './excel-document/excel-document.component';
import { ExcelPageComponent } from './excel-page/excel-page.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { RunPresentationComponent } from './run-presentation/run-presentation.component';
import { ViewerErrorInterceptorService } from './ViewerErrorInterceptorService';
import { ErrorReportModalComponent } from './error-report-modal/error-report-modal.component';
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
/**
 * @return {?}
 */
export function endPoint() {
    /** @type {?} */
    var config = new ConfigService();
    config.apiEndpoint = "http://localhost:8080";
    return config;
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
                        ErrorReportModalComponent,
                        ExcelPageComponent
                    ],
                    imports: [
                        BrowserModule,
                        CommonComponentsModule,
                        HttpClientModule,
                        FontAwesomeModule,
                        FormsModule,
                    ],
                    exports: [
                        ViewerAppComponent,
                        ThumbnailsComponent,
                        RunPresentationComponent,
                        ExcelDocumentComponent,
                        ErrorReportModalComponent,
                        ExcelPageComponent,
                        CommonComponentsModule,
                    ],
                    providers: [
                        ViewerService,
                        {
                            provide: ConfigService,
                            useFactory: endPoint
                        },
                        ViewerConfigService,
                        {
                            provide: HTTP_INTERCEPTORS,
                            useClass: ViewerErrorInterceptorService,
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
    return ViewerModule;
}());
export { ViewerModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmlld2VyLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bncm91cGRvY3MuZXhhbXBsZXMuYW5ndWxhci92aWV3ZXIvIiwic291cmNlcyI6WyJsaWIvdmlld2VyLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFDLGFBQWEsRUFBQyxNQUFNLDJCQUEyQixDQUFDO0FBRXhELE9BQU8sRUFBRSxlQUFlLEVBQXVCLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMvRSxPQUFPLEVBQUMsaUJBQWlCLEVBQUUsZ0JBQWdCLEVBQUMsTUFBTSxzQkFBc0IsQ0FBQztBQUN6RSxPQUFPLEVBQUMsa0JBQWtCLEVBQUMsTUFBTSx3QkFBd0IsQ0FBQztBQUMxRCxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDN0MsT0FBTyxFQUNMLEdBQUcsRUFDSCxzQkFBc0IsRUFDRyw2QkFBNkIsRUFDdEQsa0JBQWtCLEVBQ25CLE1BQU0sK0NBQStDLENBQUM7QUFDdkQsT0FBTyxFQUFDLGFBQWEsRUFBQyxNQUFNLGtCQUFrQixDQUFDO0FBQy9DLE9BQU8sRUFBQyxhQUFhLEVBQUMsTUFBTSwrQ0FBK0MsQ0FBQztBQUM1RSxPQUFPLEVBQUMsbUJBQW1CLEVBQUMsTUFBTSx5QkFBeUIsQ0FBQztBQUM1RCxPQUFPLEVBQUMsbUJBQW1CLEVBQUMsTUFBTSxtQ0FBbUMsQ0FBQztBQUN0RSxPQUFPLEVBQUMsc0JBQXNCLEVBQUMsTUFBTSwyQ0FBMkMsQ0FBQztBQUNqRixPQUFPLEVBQUMsa0JBQWtCLEVBQUMsTUFBTSxtQ0FBbUMsQ0FBQztBQUNyRSxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxrQ0FBa0MsQ0FBQztBQUNyRSxPQUFPLEVBQUMsd0JBQXdCLEVBQUMsTUFBTSwrQ0FBK0MsQ0FBQztBQUN2RixPQUFPLEVBQUUsNkJBQTZCLEVBQUUsTUFBTSxpQ0FBaUMsQ0FBQztBQUNoRixPQUFPLEVBQUUseUJBQXlCLEVBQUUsTUFBTSxtREFBbUQsQ0FBQzs7Ozs7QUFFOUYsTUFBTSxVQUFVLGFBQWEsQ0FBQyxtQkFBd0M7O1FBQzlELE1BQU07OztJQUFJLGNBQU0sT0FBQSxtQkFBbUIsQ0FBQyxJQUFJLEVBQUUsRUFBMUIsQ0FBMEIsQ0FBQTtJQUNoRCxPQUFPLE1BQU0sQ0FBQztBQUNoQixDQUFDOzs7O0FBRUQsTUFBTSxVQUFVLFFBQVE7O1FBQ2hCLE1BQU0sR0FBRyxJQUFJLGFBQWEsRUFBRTtJQUNsQyxNQUFNLENBQUMsV0FBVyxHQUFHLHVCQUF1QixDQUFDO0lBQzdDLE9BQU8sTUFBTSxDQUFDO0FBQ2hCLENBQUM7Ozs7Ozs7QUFJRCxNQUFNLFVBQVUsdUJBQXVCLENBQUMsT0FBMkI7SUFDakUsT0FBTyxJQUFJLDZCQUE2QixDQUFDLE9BQU8sQ0FBQyxDQUFDO0FBQ3BELENBQUM7QUFFRDtJQUFBO0lBeURBLENBQUM7Ozs7O0lBTlEsb0JBQU87Ozs7SUFBZCxVQUFlLFdBQW9CO1FBQ2pDLEdBQUcsQ0FBQyxvQkFBb0IsR0FBRyxXQUFXLENBQUE7UUFDdEMsT0FBTztZQUNMLFFBQVEsRUFBRSxZQUFZO1NBQ3ZCLENBQUM7SUFDSixDQUFDOztnQkF4REYsUUFBUSxTQUFDO29CQUNSLFlBQVksRUFBRTt3QkFDWixrQkFBa0I7d0JBQ2xCLG1CQUFtQjt3QkFDbkIsd0JBQXdCO3dCQUN4QixzQkFBc0I7d0JBQ3RCLHlCQUF5Qjt3QkFDekIsa0JBQWtCO3FCQUFDO29CQUNyQixPQUFPLEVBQUU7d0JBQ1AsYUFBYTt3QkFDYixzQkFBc0I7d0JBQ3RCLGdCQUFnQjt3QkFDaEIsaUJBQWlCO3dCQUNqQixXQUFXO3FCQUNaO29CQUNELE9BQU8sRUFBRzt3QkFDUixrQkFBa0I7d0JBQ2xCLG1CQUFtQjt3QkFDbkIsd0JBQXdCO3dCQUN4QixzQkFBc0I7d0JBQ3RCLHlCQUF5Qjt3QkFDekIsa0JBQWtCO3dCQUNsQixzQkFBc0I7cUJBQ3ZCO29CQUNELFNBQVMsRUFBRTt3QkFDVCxhQUFhO3dCQUNiOzRCQUNFLE9BQU8sRUFBRSxhQUFhOzRCQUN0QixVQUFVLEVBQUUsUUFBUTt5QkFDckI7d0JBQ0QsbUJBQW1CO3dCQUNuQjs0QkFDRSxPQUFPLEVBQUUsaUJBQWlCOzRCQUMxQixRQUFRLEVBQUUsNkJBQTZCOzRCQUN2QyxLQUFLLEVBQUUsSUFBSTt5QkFDWjt3QkFDRDs0QkFDRSxPQUFPLEVBQUUsZUFBZTs0QkFDeEIsVUFBVSxFQUFFLGFBQWE7NEJBQ3pCLElBQUksRUFBRSxDQUFDLG1CQUFtQixDQUFDLEVBQUUsS0FBSyxFQUFFLElBQUk7eUJBQ3pDO3dCQUNELGtCQUFrQjt3QkFDbEI7NEJBQ0UsT0FBTyxFQUFFLGlCQUFpQjs0QkFDMUIsVUFBVSxFQUFFLHVCQUF1Qjs0QkFDbkMsS0FBSyxFQUFFLElBQUk7NEJBQ1gsSUFBSSxFQUFFLENBQUMsa0JBQWtCLENBQUM7eUJBQzNCO3FCQUNGO2lCQUNGOztJQVFELG1CQUFDO0NBQUEsQUF6REQsSUF5REM7U0FQWSxZQUFZIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtCcm93c2VyTW9kdWxlfSBmcm9tICdAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyJztcclxuXHJcbmltcG9ydCB7IEFQUF9JTklUSUFMSVpFUiwgTW9kdWxlV2l0aFByb3ZpZGVycywgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHtIVFRQX0lOVEVSQ0VQVE9SUywgSHR0cENsaWVudE1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xyXG5pbXBvcnQge1ZpZXdlckFwcENvbXBvbmVudH0gZnJvbSAnLi92aWV3ZXItYXBwLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IEZvcm1zTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnOyAgIFxyXG5pbXBvcnQge1xyXG4gIEFwaSxcclxuICBDb21tb25Db21wb25lbnRzTW9kdWxlLFxyXG4gIEVycm9ySW50ZXJjZXB0b3JTZXJ2aWNlLCBMb2FkaW5nTWFza0ludGVyY2VwdG9yU2VydmljZSxcclxuICBMb2FkaW5nTWFza1NlcnZpY2VcclxufSBmcm9tICdAZ3JvdXBkb2NzLmV4YW1wbGVzLmFuZ3VsYXIvY29tbW9uLWNvbXBvbmVudHMnO1xyXG5pbXBvcnQge1ZpZXdlclNlcnZpY2V9IGZyb20gXCIuL3ZpZXdlci5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7Q29uZmlnU2VydmljZX0gZnJvbSBcIkBncm91cGRvY3MuZXhhbXBsZXMuYW5ndWxhci9jb21tb24tY29tcG9uZW50c1wiO1xyXG5pbXBvcnQge1ZpZXdlckNvbmZpZ1NlcnZpY2V9IGZyb20gXCIuL3ZpZXdlci1jb25maWcuc2VydmljZVwiO1xyXG5pbXBvcnQge1RodW1ibmFpbHNDb21wb25lbnR9IGZyb20gJy4vdGh1bWJuYWlscy90aHVtYm5haWxzLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7RXhjZWxEb2N1bWVudENvbXBvbmVudH0gZnJvbSAnLi9leGNlbC1kb2N1bWVudC9leGNlbC1kb2N1bWVudC5jb21wb25lbnQnO1xyXG5pbXBvcnQge0V4Y2VsUGFnZUNvbXBvbmVudH0gZnJvbSAnLi9leGNlbC1wYWdlL2V4Y2VsLXBhZ2UuY29tcG9uZW50JztcclxuaW1wb3J0IHsgRm9udEF3ZXNvbWVNb2R1bGUgfSBmcm9tICdAZm9ydGF3ZXNvbWUvYW5ndWxhci1mb250YXdlc29tZSc7XHJcbmltcG9ydCB7UnVuUHJlc2VudGF0aW9uQ29tcG9uZW50fSBmcm9tICcuL3J1bi1wcmVzZW50YXRpb24vcnVuLXByZXNlbnRhdGlvbi5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBWaWV3ZXJFcnJvckludGVyY2VwdG9yU2VydmljZSB9IGZyb20gJy4vVmlld2VyRXJyb3JJbnRlcmNlcHRvclNlcnZpY2UnO1xyXG5pbXBvcnQgeyBFcnJvclJlcG9ydE1vZGFsQ29tcG9uZW50IH0gZnJvbSAnLi9lcnJvci1yZXBvcnQtbW9kYWwvZXJyb3ItcmVwb3J0LW1vZGFsLmNvbXBvbmVudCc7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gaW5pdGlhbGl6ZUFwcCh2aWV3ZXJDb25maWdTZXJ2aWNlOiBWaWV3ZXJDb25maWdTZXJ2aWNlKSB7XHJcbiAgY29uc3QgcmVzdWx0ID0gICgpID0+IHZpZXdlckNvbmZpZ1NlcnZpY2UubG9hZCgpO1xyXG4gIHJldHVybiByZXN1bHQ7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBlbmRQb2ludCgpIHtcclxuICBjb25zdCBjb25maWcgPSBuZXcgQ29uZmlnU2VydmljZSgpO1xyXG4gIGNvbmZpZy5hcGlFbmRwb2ludCA9IFwiaHR0cDovL2xvY2FsaG9zdDo4MDgwXCI7XHJcbiAgcmV0dXJuIGNvbmZpZztcclxufVxyXG5cclxuLy8gTk9URTogdGhpcyBpcyByZXF1aXJlZCBkdXJpbmcgbGlicmFyeSBjb21waWxhdGlvbiBzZWUgaHR0cHM6Ly9naXRodWIuY29tL2FuZ3VsYXIvYW5ndWxhci9pc3N1ZXMvMjM2MjkjaXNzdWVjb21tZW50LTQ0MDk0Mjk4MVxyXG4vLyBAZHluYW1pY1xyXG5leHBvcnQgZnVuY3Rpb24gc2V0dXBMb2FkaW5nSW50ZXJjZXB0b3Ioc2VydmljZTogTG9hZGluZ01hc2tTZXJ2aWNlKSB7XHJcbiAgcmV0dXJuIG5ldyBMb2FkaW5nTWFza0ludGVyY2VwdG9yU2VydmljZShzZXJ2aWNlKTtcclxufVxyXG5cclxuQE5nTW9kdWxlKHtcclxuICBkZWNsYXJhdGlvbnM6IFtcclxuICAgIFZpZXdlckFwcENvbXBvbmVudCxcclxuICAgIFRodW1ibmFpbHNDb21wb25lbnQsXHJcbiAgICBSdW5QcmVzZW50YXRpb25Db21wb25lbnQsXHJcbiAgICBFeGNlbERvY3VtZW50Q29tcG9uZW50LFxyXG4gICAgRXJyb3JSZXBvcnRNb2RhbENvbXBvbmVudCxcclxuICAgIEV4Y2VsUGFnZUNvbXBvbmVudF0sXHJcbiAgaW1wb3J0czogW1xyXG4gICAgQnJvd3Nlck1vZHVsZSxcclxuICAgIENvbW1vbkNvbXBvbmVudHNNb2R1bGUsXHJcbiAgICBIdHRwQ2xpZW50TW9kdWxlLFxyXG4gICAgRm9udEF3ZXNvbWVNb2R1bGUsXHJcbiAgICBGb3Jtc01vZHVsZSxcclxuICBdLFxyXG4gIGV4cG9ydHMgOiBbXHJcbiAgICBWaWV3ZXJBcHBDb21wb25lbnQsXHJcbiAgICBUaHVtYm5haWxzQ29tcG9uZW50LFxyXG4gICAgUnVuUHJlc2VudGF0aW9uQ29tcG9uZW50LFxyXG4gICAgRXhjZWxEb2N1bWVudENvbXBvbmVudCxcclxuICAgIEVycm9yUmVwb3J0TW9kYWxDb21wb25lbnQsXHJcbiAgICBFeGNlbFBhZ2VDb21wb25lbnQsXHJcbiAgICBDb21tb25Db21wb25lbnRzTW9kdWxlLFxyXG4gIF0sXHJcbiAgcHJvdmlkZXJzOiBbXHJcbiAgICBWaWV3ZXJTZXJ2aWNlLFxyXG4gICAge1xyXG4gICAgICBwcm92aWRlOiBDb25maWdTZXJ2aWNlLFxyXG4gICAgICB1c2VGYWN0b3J5OiBlbmRQb2ludFxyXG4gICAgfSxcclxuICAgIFZpZXdlckNvbmZpZ1NlcnZpY2UsXHJcbiAgICB7XHJcbiAgICAgIHByb3ZpZGU6IEhUVFBfSU5URVJDRVBUT1JTLFxyXG4gICAgICB1c2VDbGFzczogVmlld2VyRXJyb3JJbnRlcmNlcHRvclNlcnZpY2UsXHJcbiAgICAgIG11bHRpOiB0cnVlXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBwcm92aWRlOiBBUFBfSU5JVElBTElaRVIsXHJcbiAgICAgIHVzZUZhY3Rvcnk6IGluaXRpYWxpemVBcHAsXHJcbiAgICAgIGRlcHM6IFtWaWV3ZXJDb25maWdTZXJ2aWNlXSwgbXVsdGk6IHRydWVcclxuICAgIH0sXHJcbiAgICBMb2FkaW5nTWFza1NlcnZpY2UsXHJcbiAgICB7XHJcbiAgICAgIHByb3ZpZGU6IEhUVFBfSU5URVJDRVBUT1JTLFxyXG4gICAgICB1c2VGYWN0b3J5OiBzZXR1cExvYWRpbmdJbnRlcmNlcHRvcixcclxuICAgICAgbXVsdGk6IHRydWUsXHJcbiAgICAgIGRlcHM6IFtMb2FkaW5nTWFza1NlcnZpY2VdXHJcbiAgICB9XHJcbiAgXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgVmlld2VyTW9kdWxlIHtcclxuICBzdGF0aWMgZm9yUm9vdChhcGlFbmRwb2ludCA6IHN0cmluZyk6IE1vZHVsZVdpdGhQcm92aWRlcnMge1xyXG4gICAgQXBpLkRFRkFVTFRfQVBJX0VORFBPSU5UID0gYXBpRW5kcG9pbnRcclxuICAgIHJldHVybiB7XHJcbiAgICAgIG5nTW9kdWxlOiBWaWV3ZXJNb2R1bGVcclxuICAgIH07XHJcbiAgfVxyXG59XHJcbiJdfQ==