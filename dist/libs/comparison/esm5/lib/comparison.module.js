/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { BrowserModule } from '@angular/platform-browser';
import { APP_INITIALIZER, NgModule } from '@angular/core';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { ComparisonAppComponent } from './comparison-app.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
import { ComparisonService } from "./comparison.service";
import { CommonComponentsModule, ErrorInterceptorService, ConfigService, LoadingMaskService, LoadingMaskInterceptorService, Api } from "@groupdocs.examples.angular/common-components";
import { ComparisonConfigService } from "./comparison-config.service";
import { AddFilePanelComponent } from './add-file-panel/add-file-panel.component';
import { UploadFilePanelComponent } from './upload-file-panel/upload-file-panel.component';
import { DifferenceComponent } from './difference/difference.component';
import { DifferenceHighlightComponent } from './difference-highlight/difference-highlight.component';
import { ResultDocumentComponent } from './result-document/result-document.component';
import { DifferencesComponent } from './differences/differences.component';
import { DifferencesService } from './differences.service';
import { ClickOutsideModule } from 'ng-click-outside';
import { TranslateModule } from '@ngx-translate/core';
/**
 * @param {?} comparisonConfigService
 * @return {?}
 */
export function initializeApp(comparisonConfigService) {
    /** @type {?} */
    var result = (/**
     * @return {?}
     */
    function () { return comparisonConfigService.load(); });
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
var ComparisonModule = /** @class */ (function () {
    function ComparisonModule() {
        library.add(fas, far);
    }
    /**
     * @param {?} apiEndpoint
     * @return {?}
     */
    ComparisonModule.forRoot = /**
     * @param {?} apiEndpoint
     * @return {?}
     */
    function (apiEndpoint) {
        Api.DEFAULT_API_ENDPOINT = apiEndpoint;
        return {
            ngModule: ComparisonModule
        };
    };
    ComparisonModule.decorators = [
        { type: NgModule, args: [{
                    declarations: [ComparisonAppComponent, AddFilePanelComponent, UploadFilePanelComponent, DifferenceComponent, DifferenceHighlightComponent, ResultDocumentComponent, DifferencesComponent],
                    imports: [
                        BrowserModule,
                        CommonComponentsModule,
                        HttpClientModule,
                        FontAwesomeModule,
                        ClickOutsideModule,
                        TranslateModule.forRoot()
                    ],
                    exports: [
                        ComparisonAppComponent,
                        CommonComponentsModule,
                        ResultDocumentComponent,
                        DifferencesComponent
                    ],
                    providers: [
                        ComparisonService,
                        ConfigService,
                        DifferencesService,
                        ComparisonConfigService,
                        {
                            provide: APP_INITIALIZER,
                            useFactory: initializeApp,
                            deps: [ComparisonConfigService],
                            multi: true
                        },
                        {
                            provide: HTTP_INTERCEPTORS,
                            useClass: ErrorInterceptorService,
                            multi: true
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
    /** @nocollapse */
    ComparisonModule.ctorParameters = function () { return []; };
    return ComparisonModule;
}());
export { ComparisonModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tcGFyaXNvbi5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ3JvdXBkb2NzLmV4YW1wbGVzLmFuZ3VsYXIvY29tcGFyaXNvbi8iLCJzb3VyY2VzIjpbImxpYi9jb21wYXJpc29uLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFDLGFBQWEsRUFBQyxNQUFNLDJCQUEyQixDQUFDO0FBQ3hELE9BQU8sRUFBQyxlQUFlLEVBQXVCLFFBQVEsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUM3RSxPQUFPLEVBQUMsaUJBQWlCLEVBQUUsZ0JBQWdCLEVBQUMsTUFBTSxzQkFBc0IsQ0FBQztBQUN6RSxPQUFPLEVBQUMsc0JBQXNCLEVBQUMsTUFBTSw0QkFBNEIsQ0FBQztBQUNsRSxPQUFPLEVBQUMsaUJBQWlCLEVBQUMsTUFBTSxrQ0FBa0MsQ0FBQztBQUNuRSxPQUFPLEVBQUMsT0FBTyxFQUFDLE1BQU0sbUNBQW1DLENBQUM7QUFDMUQsT0FBTyxFQUFDLEdBQUcsRUFBQyxNQUFNLG1DQUFtQyxDQUFDO0FBQ3RELE9BQU8sRUFBQyxHQUFHLEVBQUMsTUFBTSxxQ0FBcUMsQ0FBQztBQUN4RCxPQUFPLEVBQUMsaUJBQWlCLEVBQUMsTUFBTSxzQkFBc0IsQ0FBQztBQUN2RCxPQUFPLEVBQ0wsc0JBQXNCLEVBQ3RCLHVCQUF1QixFQUN2QixhQUFhLEVBQ2Isa0JBQWtCLEVBQ2xCLDZCQUE2QixFQUM3QixHQUFHLEVBQ0osTUFBTSwrQ0FBK0MsQ0FBQztBQUN2RCxPQUFPLEVBQUMsdUJBQXVCLEVBQUMsTUFBTSw2QkFBNkIsQ0FBQztBQUNwRSxPQUFPLEVBQUMscUJBQXFCLEVBQUMsTUFBTSwyQ0FBMkMsQ0FBQztBQUNoRixPQUFPLEVBQUMsd0JBQXdCLEVBQUMsTUFBTSxpREFBaUQsQ0FBQztBQUN6RixPQUFPLEVBQUMsbUJBQW1CLEVBQUMsTUFBTSxtQ0FBbUMsQ0FBQztBQUN0RSxPQUFPLEVBQUMsNEJBQTRCLEVBQUMsTUFBTSx1REFBdUQsQ0FBQztBQUNuRyxPQUFPLEVBQUMsdUJBQXVCLEVBQUMsTUFBTSw2Q0FBNkMsQ0FBQztBQUNwRixPQUFPLEVBQUMsb0JBQW9CLEVBQUMsTUFBTSxxQ0FBcUMsQ0FBQztBQUN6RSxPQUFPLEVBQUMsa0JBQWtCLEVBQUMsTUFBTSx1QkFBdUIsQ0FBQztBQUN6RCxPQUFPLEVBQUMsa0JBQWtCLEVBQUMsTUFBTSxrQkFBa0IsQ0FBQztBQUNwRCxPQUFPLEVBQUMsZUFBZSxFQUFDLE1BQU0scUJBQXFCLENBQUM7Ozs7O0FBRXBELE1BQU0sVUFBVSxhQUFhLENBQUMsdUJBQWdEOztRQUN0RSxNQUFNOzs7SUFBRyxjQUFNLE9BQUEsdUJBQXVCLENBQUMsSUFBSSxFQUFFLEVBQTlCLENBQThCLENBQUE7SUFDbkQsT0FBTyxNQUFNLENBQUM7QUFDaEIsQ0FBQzs7Ozs7OztBQUlELE1BQU0sVUFBVSx1QkFBdUIsQ0FBQyxPQUEyQjtJQUNqRSxPQUFPLElBQUksNkJBQTZCLENBQUMsT0FBTyxDQUFDLENBQUM7QUFDcEQsQ0FBQztBQUVEO0lBMENFO1FBQ0UsT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDLENBQUM7SUFDeEIsQ0FBQzs7Ozs7SUFFTSx3QkFBTzs7OztJQUFkLFVBQWUsV0FBbUI7UUFDaEMsR0FBRyxDQUFDLG9CQUFvQixHQUFHLFdBQVcsQ0FBQztRQUN2QyxPQUFPO1lBQ0wsUUFBUSxFQUFFLGdCQUFnQjtTQUMzQixDQUFDO0lBQ0osQ0FBQzs7Z0JBbkRGLFFBQVEsU0FBQztvQkFDUixZQUFZLEVBQUUsQ0FBQyxzQkFBc0IsRUFBRSxxQkFBcUIsRUFBRSx3QkFBd0IsRUFBRSxtQkFBbUIsRUFBRSw0QkFBNEIsRUFBRSx1QkFBdUIsRUFBRSxvQkFBb0IsQ0FBQztvQkFDekwsT0FBTyxFQUFFO3dCQUNQLGFBQWE7d0JBQ2Isc0JBQXNCO3dCQUN0QixnQkFBZ0I7d0JBQ2hCLGlCQUFpQjt3QkFDakIsa0JBQWtCO3dCQUNsQixlQUFlLENBQUMsT0FBTyxFQUFFO3FCQUMxQjtvQkFDRCxPQUFPLEVBQUU7d0JBQ1Asc0JBQXNCO3dCQUN0QixzQkFBc0I7d0JBQ3RCLHVCQUF1Qjt3QkFDdkIsb0JBQW9CO3FCQUNyQjtvQkFDRCxTQUFTLEVBQUU7d0JBQ1QsaUJBQWlCO3dCQUNqQixhQUFhO3dCQUNiLGtCQUFrQjt3QkFDbEIsdUJBQXVCO3dCQUN2Qjs0QkFDRSxPQUFPLEVBQUUsZUFBZTs0QkFDeEIsVUFBVSxFQUFFLGFBQWE7NEJBQ3pCLElBQUksRUFBRSxDQUFDLHVCQUF1QixDQUFDOzRCQUMvQixLQUFLLEVBQUUsSUFBSTt5QkFDWjt3QkFDRDs0QkFDRSxPQUFPLEVBQUUsaUJBQWlCOzRCQUMxQixRQUFRLEVBQUUsdUJBQXVCOzRCQUNqQyxLQUFLLEVBQUUsSUFBSTt5QkFDWjt3QkFDRCxrQkFBa0I7d0JBQ2xCOzRCQUNFLE9BQU8sRUFBRSxpQkFBaUI7NEJBQzFCLFVBQVUsRUFBRSx1QkFBdUI7NEJBQ25DLEtBQUssRUFBRSxJQUFJOzRCQUNYLElBQUksRUFBRSxDQUFDLGtCQUFrQixDQUFDO3lCQUMzQjtxQkFDRjtpQkFDRjs7OztJQVlELHVCQUFDO0NBQUEsQUFwREQsSUFvREM7U0FYWSxnQkFBZ0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0Jyb3dzZXJNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXInO1xyXG5pbXBvcnQge0FQUF9JTklUSUFMSVpFUiwgTW9kdWxlV2l0aFByb3ZpZGVycywgTmdNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQge0hUVFBfSU5URVJDRVBUT1JTLCBIdHRwQ2xpZW50TW9kdWxlfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XHJcbmltcG9ydCB7Q29tcGFyaXNvbkFwcENvbXBvbmVudH0gZnJvbSAnLi9jb21wYXJpc29uLWFwcC5jb21wb25lbnQnO1xyXG5pbXBvcnQge0ZvbnRBd2Vzb21lTW9kdWxlfSBmcm9tICdAZm9ydGF3ZXNvbWUvYW5ndWxhci1mb250YXdlc29tZSc7XHJcbmltcG9ydCB7bGlicmFyeX0gZnJvbSAnQGZvcnRhd2Vzb21lL2ZvbnRhd2Vzb21lLXN2Zy1jb3JlJztcclxuaW1wb3J0IHtmYXN9IGZyb20gJ0Bmb3J0YXdlc29tZS9mcmVlLXNvbGlkLXN2Zy1pY29ucyc7XHJcbmltcG9ydCB7ZmFyfSBmcm9tICdAZm9ydGF3ZXNvbWUvZnJlZS1yZWd1bGFyLXN2Zy1pY29ucyc7XHJcbmltcG9ydCB7Q29tcGFyaXNvblNlcnZpY2V9IGZyb20gXCIuL2NvbXBhcmlzb24uc2VydmljZVwiO1xyXG5pbXBvcnQge1xyXG4gIENvbW1vbkNvbXBvbmVudHNNb2R1bGUsXHJcbiAgRXJyb3JJbnRlcmNlcHRvclNlcnZpY2UsXHJcbiAgQ29uZmlnU2VydmljZSxcclxuICBMb2FkaW5nTWFza1NlcnZpY2UsXHJcbiAgTG9hZGluZ01hc2tJbnRlcmNlcHRvclNlcnZpY2UsXHJcbiAgQXBpXHJcbn0gZnJvbSBcIkBncm91cGRvY3MuZXhhbXBsZXMuYW5ndWxhci9jb21tb24tY29tcG9uZW50c1wiO1xyXG5pbXBvcnQge0NvbXBhcmlzb25Db25maWdTZXJ2aWNlfSBmcm9tIFwiLi9jb21wYXJpc29uLWNvbmZpZy5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7QWRkRmlsZVBhbmVsQ29tcG9uZW50fSBmcm9tICcuL2FkZC1maWxlLXBhbmVsL2FkZC1maWxlLXBhbmVsLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7VXBsb2FkRmlsZVBhbmVsQ29tcG9uZW50fSBmcm9tICcuL3VwbG9hZC1maWxlLXBhbmVsL3VwbG9hZC1maWxlLXBhbmVsLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7RGlmZmVyZW5jZUNvbXBvbmVudH0gZnJvbSAnLi9kaWZmZXJlbmNlL2RpZmZlcmVuY2UuY29tcG9uZW50JztcclxuaW1wb3J0IHtEaWZmZXJlbmNlSGlnaGxpZ2h0Q29tcG9uZW50fSBmcm9tICcuL2RpZmZlcmVuY2UtaGlnaGxpZ2h0L2RpZmZlcmVuY2UtaGlnaGxpZ2h0LmNvbXBvbmVudCc7XHJcbmltcG9ydCB7UmVzdWx0RG9jdW1lbnRDb21wb25lbnR9IGZyb20gJy4vcmVzdWx0LWRvY3VtZW50L3Jlc3VsdC1kb2N1bWVudC5jb21wb25lbnQnO1xyXG5pbXBvcnQge0RpZmZlcmVuY2VzQ29tcG9uZW50fSBmcm9tICcuL2RpZmZlcmVuY2VzL2RpZmZlcmVuY2VzLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7RGlmZmVyZW5jZXNTZXJ2aWNlfSBmcm9tICcuL2RpZmZlcmVuY2VzLnNlcnZpY2UnO1xyXG5pbXBvcnQge0NsaWNrT3V0c2lkZU1vZHVsZX0gZnJvbSAnbmctY2xpY2stb3V0c2lkZSc7XHJcbmltcG9ydCB7VHJhbnNsYXRlTW9kdWxlfSBmcm9tICdAbmd4LXRyYW5zbGF0ZS9jb3JlJztcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBpbml0aWFsaXplQXBwKGNvbXBhcmlzb25Db25maWdTZXJ2aWNlOiBDb21wYXJpc29uQ29uZmlnU2VydmljZSkge1xyXG4gIGNvbnN0IHJlc3VsdCA9ICgpID0+IGNvbXBhcmlzb25Db25maWdTZXJ2aWNlLmxvYWQoKTtcclxuICByZXR1cm4gcmVzdWx0O1xyXG59XHJcblxyXG4vLyBOT1RFOiB0aGlzIGlzIHJlcXVpcmVkIGR1cmluZyBsaWJyYXJ5IGNvbXBpbGF0aW9uIHNlZSBodHRwczovL2dpdGh1Yi5jb20vYW5ndWxhci9hbmd1bGFyL2lzc3Vlcy8yMzYyOSNpc3N1ZWNvbW1lbnQtNDQwOTQyOTgxXHJcbi8vIEBkeW5hbWljXHJcbmV4cG9ydCBmdW5jdGlvbiBzZXR1cExvYWRpbmdJbnRlcmNlcHRvcihzZXJ2aWNlOiBMb2FkaW5nTWFza1NlcnZpY2UpIHtcclxuICByZXR1cm4gbmV3IExvYWRpbmdNYXNrSW50ZXJjZXB0b3JTZXJ2aWNlKHNlcnZpY2UpO1xyXG59XHJcblxyXG5ATmdNb2R1bGUoe1xyXG4gIGRlY2xhcmF0aW9uczogW0NvbXBhcmlzb25BcHBDb21wb25lbnQsIEFkZEZpbGVQYW5lbENvbXBvbmVudCwgVXBsb2FkRmlsZVBhbmVsQ29tcG9uZW50LCBEaWZmZXJlbmNlQ29tcG9uZW50LCBEaWZmZXJlbmNlSGlnaGxpZ2h0Q29tcG9uZW50LCBSZXN1bHREb2N1bWVudENvbXBvbmVudCwgRGlmZmVyZW5jZXNDb21wb25lbnRdLFxyXG4gIGltcG9ydHM6IFtcclxuICAgIEJyb3dzZXJNb2R1bGUsXHJcbiAgICBDb21tb25Db21wb25lbnRzTW9kdWxlLFxyXG4gICAgSHR0cENsaWVudE1vZHVsZSxcclxuICAgIEZvbnRBd2Vzb21lTW9kdWxlLFxyXG4gICAgQ2xpY2tPdXRzaWRlTW9kdWxlLFxyXG4gICAgVHJhbnNsYXRlTW9kdWxlLmZvclJvb3QoKVxyXG4gIF0sXHJcbiAgZXhwb3J0czogW1xyXG4gICAgQ29tcGFyaXNvbkFwcENvbXBvbmVudCxcclxuICAgIENvbW1vbkNvbXBvbmVudHNNb2R1bGUsXHJcbiAgICBSZXN1bHREb2N1bWVudENvbXBvbmVudCxcclxuICAgIERpZmZlcmVuY2VzQ29tcG9uZW50XHJcbiAgXSxcclxuICBwcm92aWRlcnM6IFtcclxuICAgIENvbXBhcmlzb25TZXJ2aWNlLFxyXG4gICAgQ29uZmlnU2VydmljZSxcclxuICAgIERpZmZlcmVuY2VzU2VydmljZSxcclxuICAgIENvbXBhcmlzb25Db25maWdTZXJ2aWNlLFxyXG4gICAge1xyXG4gICAgICBwcm92aWRlOiBBUFBfSU5JVElBTElaRVIsXHJcbiAgICAgIHVzZUZhY3Rvcnk6IGluaXRpYWxpemVBcHAsXHJcbiAgICAgIGRlcHM6IFtDb21wYXJpc29uQ29uZmlnU2VydmljZV0sXHJcbiAgICAgIG11bHRpOiB0cnVlXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBwcm92aWRlOiBIVFRQX0lOVEVSQ0VQVE9SUyxcclxuICAgICAgdXNlQ2xhc3M6IEVycm9ySW50ZXJjZXB0b3JTZXJ2aWNlLFxyXG4gICAgICBtdWx0aTogdHJ1ZVxyXG4gICAgfSxcclxuICAgIExvYWRpbmdNYXNrU2VydmljZSxcclxuICAgIHtcclxuICAgICAgcHJvdmlkZTogSFRUUF9JTlRFUkNFUFRPUlMsXHJcbiAgICAgIHVzZUZhY3Rvcnk6IHNldHVwTG9hZGluZ0ludGVyY2VwdG9yLFxyXG4gICAgICBtdWx0aTogdHJ1ZSxcclxuICAgICAgZGVwczogW0xvYWRpbmdNYXNrU2VydmljZV1cclxuICAgIH1cclxuICBdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBDb21wYXJpc29uTW9kdWxlIHtcclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIGxpYnJhcnkuYWRkKGZhcywgZmFyKTtcclxuICB9XHJcblxyXG4gIHN0YXRpYyBmb3JSb290KGFwaUVuZHBvaW50OiBzdHJpbmcpOiBNb2R1bGVXaXRoUHJvdmlkZXJzIHtcclxuICAgIEFwaS5ERUZBVUxUX0FQSV9FTkRQT0lOVCA9IGFwaUVuZHBvaW50O1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgbmdNb2R1bGU6IENvbXBhcmlzb25Nb2R1bGVcclxuICAgIH07XHJcbiAgfVxyXG59XHJcbiJdfQ==