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
import { ExcelDocumentComponent } from './excel-document/excel-document.component';
import { ExcelPageComponent } from './excel-page/excel-page.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
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
                        ExcelDocumentComponent,
                        ExcelPageComponent
                    ],
                    imports: [
                        BrowserModule,
                        CommonComponentsModule,
                        HttpClientModule,
                        FontAwesomeModule
                    ],
                    exports: [
                        ViewerAppComponent,
                        ThumbnailsComponent,
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
                        }
                    ]
                },] }
    ];
    return ViewerModule;
}());
export { ViewerModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmlld2VyLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bncm91cGRvY3MuZXhhbXBsZXMuYW5ndWxhci92aWV3ZXIvIiwic291cmNlcyI6WyJsaWIvdmlld2VyLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFDLGFBQWEsRUFBQyxNQUFNLDJCQUEyQixDQUFDO0FBQ3hELE9BQU8sRUFBRSxlQUFlLEVBQXVCLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMvRSxPQUFPLEVBQUMsaUJBQWlCLEVBQUUsZ0JBQWdCLEVBQUMsTUFBTSxzQkFBc0IsQ0FBQztBQUN6RSxPQUFPLEVBQUMsa0JBQWtCLEVBQUMsTUFBTSx3QkFBd0IsQ0FBQztBQUMxRCxPQUFPLEVBQUUsR0FBRyxFQUFFLHNCQUFzQixFQUFFLHVCQUF1QixFQUFFLE1BQU0sK0NBQStDLENBQUM7QUFDckgsT0FBTyxFQUFDLGFBQWEsRUFBQyxNQUFNLGtCQUFrQixDQUFDO0FBQy9DLE9BQU8sRUFBQyxhQUFhLEVBQUMsTUFBTSwrQ0FBK0MsQ0FBQztBQUM1RSxPQUFPLEVBQUMsbUJBQW1CLEVBQUMsTUFBTSx5QkFBeUIsQ0FBQztBQUM1RCxPQUFPLEVBQUMsbUJBQW1CLEVBQUMsTUFBTSxtQ0FBbUMsQ0FBQztBQUN0RSxPQUFPLEVBQUMsc0JBQXNCLEVBQUMsTUFBTSwyQ0FBMkMsQ0FBQztBQUNqRixPQUFPLEVBQUMsa0JBQWtCLEVBQUMsTUFBTSxtQ0FBbUMsQ0FBQztBQUNyRSxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxrQ0FBa0MsQ0FBQzs7Ozs7QUFFckUsTUFBTSxVQUFVLGFBQWEsQ0FBQyxtQkFBd0M7O1FBQzlELE1BQU07OztJQUFJLGNBQU0sT0FBQSxtQkFBbUIsQ0FBQyxJQUFJLEVBQUUsRUFBMUIsQ0FBMEIsQ0FBQTtJQUNoRCxPQUFPLE1BQU0sQ0FBQztBQUNoQixDQUFDO0FBRUQ7SUFBQTtJQTBDQSxDQUFDOzs7OztJQU5RLG9CQUFPOzs7O0lBQWQsVUFBZSxXQUFvQjtRQUNqQyxHQUFHLENBQUMsb0JBQW9CLEdBQUcsV0FBVyxDQUFBO1FBQ3RDLE9BQU87WUFDTCxRQUFRLEVBQUUsWUFBWTtTQUN2QixDQUFDO0lBQ0osQ0FBQzs7Z0JBekNGLFFBQVEsU0FBQztvQkFDUixZQUFZLEVBQUU7d0JBQ1osa0JBQWtCO3dCQUNsQixtQkFBbUI7d0JBQ25CLHNCQUFzQjt3QkFDdEIsa0JBQWtCO3FCQUFDO29CQUNyQixPQUFPLEVBQUU7d0JBQ1AsYUFBYTt3QkFDYixzQkFBc0I7d0JBQ3RCLGdCQUFnQjt3QkFDaEIsaUJBQWlCO3FCQUNsQjtvQkFDRCxPQUFPLEVBQUc7d0JBQ1Isa0JBQWtCO3dCQUNsQixtQkFBbUI7d0JBQ25CLHNCQUFzQjt3QkFDdEIsa0JBQWtCO3dCQUNsQixzQkFBc0I7cUJBQ3ZCO29CQUNELFNBQVMsRUFBRTt3QkFDVCxhQUFhO3dCQUNiLGFBQWE7d0JBQ2IsbUJBQW1CO3dCQUNuQjs0QkFDRSxPQUFPLEVBQUUsaUJBQWlCOzRCQUMxQixRQUFRLEVBQUUsdUJBQXVCOzRCQUNqQyxLQUFLLEVBQUUsSUFBSTt5QkFDWjt3QkFDRDs0QkFDRSxPQUFPLEVBQUUsZUFBZTs0QkFDeEIsVUFBVSxFQUFFLGFBQWE7NEJBQ3pCLElBQUksRUFBRSxDQUFDLG1CQUFtQixDQUFDLEVBQUUsS0FBSyxFQUFFLElBQUk7eUJBQ3pDO3FCQUNGO2lCQUNGOztJQVFELG1CQUFDO0NBQUEsQUExQ0QsSUEwQ0M7U0FQWSxZQUFZIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtCcm93c2VyTW9kdWxlfSBmcm9tICdAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyJztcbmltcG9ydCB7IEFQUF9JTklUSUFMSVpFUiwgTW9kdWxlV2l0aFByb3ZpZGVycywgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7SFRUUF9JTlRFUkNFUFRPUlMsIEh0dHBDbGllbnRNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcbmltcG9ydCB7Vmlld2VyQXBwQ29tcG9uZW50fSBmcm9tICcuL3ZpZXdlci1hcHAuY29tcG9uZW50JztcbmltcG9ydCB7IEFwaSwgQ29tbW9uQ29tcG9uZW50c01vZHVsZSwgRXJyb3JJbnRlcmNlcHRvclNlcnZpY2UgfSBmcm9tICdAZ3JvdXBkb2NzLmV4YW1wbGVzLmFuZ3VsYXIvY29tbW9uLWNvbXBvbmVudHMnO1xuaW1wb3J0IHtWaWV3ZXJTZXJ2aWNlfSBmcm9tIFwiLi92aWV3ZXIuc2VydmljZVwiO1xuaW1wb3J0IHtDb25maWdTZXJ2aWNlfSBmcm9tIFwiQGdyb3VwZG9jcy5leGFtcGxlcy5hbmd1bGFyL2NvbW1vbi1jb21wb25lbnRzXCI7XG5pbXBvcnQge1ZpZXdlckNvbmZpZ1NlcnZpY2V9IGZyb20gXCIuL3ZpZXdlci1jb25maWcuc2VydmljZVwiO1xuaW1wb3J0IHtUaHVtYm5haWxzQ29tcG9uZW50fSBmcm9tICcuL3RodW1ibmFpbHMvdGh1bWJuYWlscy5jb21wb25lbnQnO1xuaW1wb3J0IHtFeGNlbERvY3VtZW50Q29tcG9uZW50fSBmcm9tICcuL2V4Y2VsLWRvY3VtZW50L2V4Y2VsLWRvY3VtZW50LmNvbXBvbmVudCc7XG5pbXBvcnQge0V4Y2VsUGFnZUNvbXBvbmVudH0gZnJvbSAnLi9leGNlbC1wYWdlL2V4Y2VsLXBhZ2UuY29tcG9uZW50JztcbmltcG9ydCB7IEZvbnRBd2Vzb21lTW9kdWxlIH0gZnJvbSAnQGZvcnRhd2Vzb21lL2FuZ3VsYXItZm9udGF3ZXNvbWUnO1xuXG5leHBvcnQgZnVuY3Rpb24gaW5pdGlhbGl6ZUFwcCh2aWV3ZXJDb25maWdTZXJ2aWNlOiBWaWV3ZXJDb25maWdTZXJ2aWNlKSB7XG4gIGNvbnN0IHJlc3VsdCA9ICAoKSA9PiB2aWV3ZXJDb25maWdTZXJ2aWNlLmxvYWQoKTtcbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuQE5nTW9kdWxlKHtcbiAgZGVjbGFyYXRpb25zOiBbXG4gICAgVmlld2VyQXBwQ29tcG9uZW50LFxuICAgIFRodW1ibmFpbHNDb21wb25lbnQsXG4gICAgRXhjZWxEb2N1bWVudENvbXBvbmVudCxcbiAgICBFeGNlbFBhZ2VDb21wb25lbnRdLFxuICBpbXBvcnRzOiBbXG4gICAgQnJvd3Nlck1vZHVsZSxcbiAgICBDb21tb25Db21wb25lbnRzTW9kdWxlLFxuICAgIEh0dHBDbGllbnRNb2R1bGUsXG4gICAgRm9udEF3ZXNvbWVNb2R1bGVcbiAgXSxcbiAgZXhwb3J0cyA6IFtcbiAgICBWaWV3ZXJBcHBDb21wb25lbnQsXG4gICAgVGh1bWJuYWlsc0NvbXBvbmVudCxcbiAgICBFeGNlbERvY3VtZW50Q29tcG9uZW50LFxuICAgIEV4Y2VsUGFnZUNvbXBvbmVudCxcbiAgICBDb21tb25Db21wb25lbnRzTW9kdWxlXG4gIF0sXG4gIHByb3ZpZGVyczogW1xuICAgIFZpZXdlclNlcnZpY2UsXG4gICAgQ29uZmlnU2VydmljZSxcbiAgICBWaWV3ZXJDb25maWdTZXJ2aWNlLFxuICAgIHtcbiAgICAgIHByb3ZpZGU6IEhUVFBfSU5URVJDRVBUT1JTLFxuICAgICAgdXNlQ2xhc3M6IEVycm9ySW50ZXJjZXB0b3JTZXJ2aWNlLFxuICAgICAgbXVsdGk6IHRydWVcbiAgICB9LFxuICAgIHtcbiAgICAgIHByb3ZpZGU6IEFQUF9JTklUSUFMSVpFUixcbiAgICAgIHVzZUZhY3Rvcnk6IGluaXRpYWxpemVBcHAsXG4gICAgICBkZXBzOiBbVmlld2VyQ29uZmlnU2VydmljZV0sIG11bHRpOiB0cnVlXG4gICAgfVxuICBdXG59KVxuZXhwb3J0IGNsYXNzIFZpZXdlck1vZHVsZSB7XG4gIHN0YXRpYyBmb3JSb290KGFwaUVuZHBvaW50IDogc3RyaW5nKTogTW9kdWxlV2l0aFByb3ZpZGVycyB7XG4gICAgQXBpLkRFRkFVTFRfQVBJX0VORFBPSU5UID0gYXBpRW5kcG9pbnRcbiAgICByZXR1cm4ge1xuICAgICAgbmdNb2R1bGU6IFZpZXdlck1vZHVsZVxuICAgIH07XG4gIH1cbn1cbiJdfQ==