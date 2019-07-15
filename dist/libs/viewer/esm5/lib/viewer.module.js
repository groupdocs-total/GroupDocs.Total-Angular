/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { BrowserModule } from '@angular/platform-browser';
import { APP_INITIALIZER, NgModule } from '@angular/core';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { ViewerAppComponent } from './viewer-app.component';
import { CommonComponentsModule, ErrorInterceptorService } from "@groupdocs.examples.angular/common-components";
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
    var result = (/**
     * @return {?}
     */
    function () { return viewerConfigService.load(); });
    return result;
}
var ViewerModule = /** @class */ (function () {
    function ViewerModule() {
    }
    ViewerModule.decorators = [
        { type: NgModule, args: [{
                    declarations: [ViewerAppComponent, ThumbnailsComponent],
                    imports: [
                        BrowserModule,
                        CommonComponentsModule,
                        HttpClientModule
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
    return ViewerModule;
}());
export { ViewerModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmlld2VyLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bncm91cGRvY3MuZXhhbXBsZXMuYW5ndWxhci92aWV3ZXIvIiwic291cmNlcyI6WyJsaWIvdmlld2VyLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFDLGFBQWEsRUFBQyxNQUFNLDJCQUEyQixDQUFDO0FBQ3hELE9BQU8sRUFBQyxlQUFlLEVBQUUsUUFBUSxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQ3hELE9BQU8sRUFBQyxpQkFBaUIsRUFBRSxnQkFBZ0IsRUFBQyxNQUFNLHNCQUFzQixDQUFDO0FBQ3pFLE9BQU8sRUFBQyxrQkFBa0IsRUFBQyxNQUFNLHdCQUF3QixDQUFDO0FBQzFELE9BQU8sRUFBQyxzQkFBc0IsRUFBRSx1QkFBdUIsRUFBQyxNQUFNLCtDQUErQyxDQUFDO0FBQzlHLE9BQU8sRUFBQyxhQUFhLEVBQUMsTUFBTSxrQkFBa0IsQ0FBQztBQUMvQyxPQUFPLEVBQUMsYUFBYSxFQUFDLE1BQU0sK0NBQStDLENBQUM7QUFDNUUsT0FBTyxFQUFDLG1CQUFtQixFQUFDLE1BQU0seUJBQXlCLENBQUM7QUFDNUQsT0FBTyxFQUFDLG1CQUFtQixFQUFDLE1BQU0sbUNBQW1DLENBQUM7Ozs7O0FBRXRFLE1BQU0sVUFBVSxhQUFhLENBQUMsbUJBQXdDOztRQUM5RCxNQUFNOzs7SUFBSSxjQUFNLE9BQUEsbUJBQW1CLENBQUMsSUFBSSxFQUFFLEVBQTFCLENBQTBCLENBQUE7SUFDaEQsT0FBTyxNQUFNLENBQUM7QUFDaEIsQ0FBQztBQUVEO0lBQUE7SUF3QkEsQ0FBQzs7Z0JBeEJBLFFBQVEsU0FBQztvQkFDUixZQUFZLEVBQUUsQ0FBQyxrQkFBa0IsRUFBRSxtQkFBbUIsQ0FBQztvQkFDdkQsT0FBTyxFQUFFO3dCQUNQLGFBQWE7d0JBQ2Isc0JBQXNCO3dCQUN0QixnQkFBZ0I7cUJBQ2pCO29CQUNELFNBQVMsRUFBRTt3QkFDVCxhQUFhO3dCQUNiLGFBQWE7d0JBQ2IsbUJBQW1CO3dCQUNuQjs0QkFDRSxPQUFPLEVBQUUsaUJBQWlCOzRCQUMxQixRQUFRLEVBQUUsdUJBQXVCOzRCQUNqQyxLQUFLLEVBQUUsSUFBSTt5QkFDWjt3QkFDRDs0QkFDRSxPQUFPLEVBQUUsZUFBZTs0QkFDeEIsVUFBVSxFQUFFLGFBQWE7NEJBQ3pCLElBQUksRUFBRSxDQUFDLG1CQUFtQixDQUFDLEVBQUUsS0FBSyxFQUFFLElBQUk7eUJBQ3pDO3FCQUNGO2lCQUNGOztJQUVELG1CQUFDO0NBQUEsQUF4QkQsSUF3QkM7U0FEWSxZQUFZIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtCcm93c2VyTW9kdWxlfSBmcm9tICdAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyJztcbmltcG9ydCB7QVBQX0lOSVRJQUxJWkVSLCBOZ01vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge0hUVFBfSU5URVJDRVBUT1JTLCBIdHRwQ2xpZW50TW9kdWxlfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XG5pbXBvcnQge1ZpZXdlckFwcENvbXBvbmVudH0gZnJvbSAnLi92aWV3ZXItYXBwLmNvbXBvbmVudCc7XG5pbXBvcnQge0NvbW1vbkNvbXBvbmVudHNNb2R1bGUsIEVycm9ySW50ZXJjZXB0b3JTZXJ2aWNlfSBmcm9tIFwiQGdyb3VwZG9jcy5leGFtcGxlcy5hbmd1bGFyL2NvbW1vbi1jb21wb25lbnRzXCI7XG5pbXBvcnQge1ZpZXdlclNlcnZpY2V9IGZyb20gXCIuL3ZpZXdlci5zZXJ2aWNlXCI7XG5pbXBvcnQge0NvbmZpZ1NlcnZpY2V9IGZyb20gXCJAZ3JvdXBkb2NzLmV4YW1wbGVzLmFuZ3VsYXIvY29tbW9uLWNvbXBvbmVudHNcIjtcbmltcG9ydCB7Vmlld2VyQ29uZmlnU2VydmljZX0gZnJvbSBcIi4vdmlld2VyLWNvbmZpZy5zZXJ2aWNlXCI7XG5pbXBvcnQge1RodW1ibmFpbHNDb21wb25lbnR9IGZyb20gJy4vdGh1bWJuYWlscy90aHVtYm5haWxzLmNvbXBvbmVudCc7XG5cbmV4cG9ydCBmdW5jdGlvbiBpbml0aWFsaXplQXBwKHZpZXdlckNvbmZpZ1NlcnZpY2U6IFZpZXdlckNvbmZpZ1NlcnZpY2UpIHtcbiAgY29uc3QgcmVzdWx0ID0gICgpID0+IHZpZXdlckNvbmZpZ1NlcnZpY2UubG9hZCgpO1xuICByZXR1cm4gcmVzdWx0O1xufVxuXG5ATmdNb2R1bGUoe1xuICBkZWNsYXJhdGlvbnM6IFtWaWV3ZXJBcHBDb21wb25lbnQsIFRodW1ibmFpbHNDb21wb25lbnRdLFxuICBpbXBvcnRzOiBbXG4gICAgQnJvd3Nlck1vZHVsZSxcbiAgICBDb21tb25Db21wb25lbnRzTW9kdWxlLFxuICAgIEh0dHBDbGllbnRNb2R1bGVcbiAgXSxcbiAgcHJvdmlkZXJzOiBbXG4gICAgVmlld2VyU2VydmljZSxcbiAgICBDb25maWdTZXJ2aWNlLFxuICAgIFZpZXdlckNvbmZpZ1NlcnZpY2UsXG4gICAge1xuICAgICAgcHJvdmlkZTogSFRUUF9JTlRFUkNFUFRPUlMsXG4gICAgICB1c2VDbGFzczogRXJyb3JJbnRlcmNlcHRvclNlcnZpY2UsXG4gICAgICBtdWx0aTogdHJ1ZVxuICAgIH0sXG4gICAge1xuICAgICAgcHJvdmlkZTogQVBQX0lOSVRJQUxJWkVSLFxuICAgICAgdXNlRmFjdG9yeTogaW5pdGlhbGl6ZUFwcCxcbiAgICAgIGRlcHM6IFtWaWV3ZXJDb25maWdTZXJ2aWNlXSwgbXVsdGk6IHRydWVcbiAgICB9XG4gIF1cbn0pXG5leHBvcnQgY2xhc3MgVmlld2VyTW9kdWxlIHtcbn1cbiJdfQ==