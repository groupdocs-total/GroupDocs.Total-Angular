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
                        ClickOutsideModule
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tcGFyaXNvbi5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ3JvdXBkb2NzLmV4YW1wbGVzLmFuZ3VsYXIvY29tcGFyaXNvbi8iLCJzb3VyY2VzIjpbImxpYi9jb21wYXJpc29uLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFDLGFBQWEsRUFBQyxNQUFNLDJCQUEyQixDQUFDO0FBQ3hELE9BQU8sRUFBQyxlQUFlLEVBQXVCLFFBQVEsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUM3RSxPQUFPLEVBQUMsaUJBQWlCLEVBQUUsZ0JBQWdCLEVBQUMsTUFBTSxzQkFBc0IsQ0FBQztBQUN6RSxPQUFPLEVBQUMsc0JBQXNCLEVBQUMsTUFBTSw0QkFBNEIsQ0FBQztBQUNsRSxPQUFPLEVBQUMsaUJBQWlCLEVBQUMsTUFBTSxrQ0FBa0MsQ0FBQztBQUNuRSxPQUFPLEVBQUMsT0FBTyxFQUFDLE1BQU0sbUNBQW1DLENBQUM7QUFDMUQsT0FBTyxFQUFDLEdBQUcsRUFBQyxNQUFNLG1DQUFtQyxDQUFDO0FBQ3RELE9BQU8sRUFBQyxHQUFHLEVBQUMsTUFBTSxxQ0FBcUMsQ0FBQztBQUN4RCxPQUFPLEVBQUMsaUJBQWlCLEVBQUMsTUFBTSxzQkFBc0IsQ0FBQztBQUN2RCxPQUFPLEVBQ0wsc0JBQXNCLEVBQ3RCLHVCQUF1QixFQUN2QixhQUFhLEVBQ2Isa0JBQWtCLEVBQ2xCLDZCQUE2QixFQUM3QixHQUFHLEVBQ0osTUFBTSwrQ0FBK0MsQ0FBQztBQUN2RCxPQUFPLEVBQUMsdUJBQXVCLEVBQUMsTUFBTSw2QkFBNkIsQ0FBQztBQUNwRSxPQUFPLEVBQUMscUJBQXFCLEVBQUMsTUFBTSwyQ0FBMkMsQ0FBQztBQUNoRixPQUFPLEVBQUMsd0JBQXdCLEVBQUMsTUFBTSxpREFBaUQsQ0FBQztBQUN6RixPQUFPLEVBQUMsbUJBQW1CLEVBQUMsTUFBTSxtQ0FBbUMsQ0FBQztBQUN0RSxPQUFPLEVBQUMsNEJBQTRCLEVBQUMsTUFBTSx1REFBdUQsQ0FBQztBQUNuRyxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSw2Q0FBNkMsQ0FBQztBQUN0RixPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSxxQ0FBcUMsQ0FBQztBQUMzRSxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUMzRCxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQzs7Ozs7QUFFdEQsTUFBTSxVQUFVLGFBQWEsQ0FBQyx1QkFBZ0Q7O1FBQ3RFLE1BQU07OztJQUFHLGNBQU0sT0FBQSx1QkFBdUIsQ0FBQyxJQUFJLEVBQUUsRUFBOUIsQ0FBOEIsQ0FBQTtJQUNuRCxPQUFPLE1BQU0sQ0FBQztBQUNoQixDQUFDOzs7Ozs7O0FBSUQsTUFBTSxVQUFVLHVCQUF1QixDQUFDLE9BQTJCO0lBQ2pFLE9BQU8sSUFBSSw2QkFBNkIsQ0FBQyxPQUFPLENBQUMsQ0FBQztBQUNwRCxDQUFDO0FBRUQ7SUF5Q0U7UUFDRSxPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUMsQ0FBQztJQUN4QixDQUFDOzs7OztJQUVNLHdCQUFPOzs7O0lBQWQsVUFBZSxXQUFtQjtRQUNoQyxHQUFHLENBQUMsb0JBQW9CLEdBQUcsV0FBVyxDQUFDO1FBQ3ZDLE9BQU87WUFDTCxRQUFRLEVBQUUsZ0JBQWdCO1NBQzNCLENBQUM7SUFDSixDQUFDOztnQkFsREYsUUFBUSxTQUFDO29CQUNSLFlBQVksRUFBRSxDQUFDLHNCQUFzQixFQUFFLHFCQUFxQixFQUFFLHdCQUF3QixFQUFFLG1CQUFtQixFQUFFLDRCQUE0QixFQUFFLHVCQUF1QixFQUFFLG9CQUFvQixDQUFDO29CQUN6TCxPQUFPLEVBQUU7d0JBQ1AsYUFBYTt3QkFDYixzQkFBc0I7d0JBQ3RCLGdCQUFnQjt3QkFDaEIsaUJBQWlCO3dCQUNqQixrQkFBa0I7cUJBQ25CO29CQUNELE9BQU8sRUFBRTt3QkFDUCxzQkFBc0I7d0JBQ3RCLHNCQUFzQjt3QkFDdEIsdUJBQXVCO3dCQUN2QixvQkFBb0I7cUJBQ3JCO29CQUNELFNBQVMsRUFBRTt3QkFDVCxpQkFBaUI7d0JBQ2pCLGFBQWE7d0JBQ2Isa0JBQWtCO3dCQUNsQix1QkFBdUI7d0JBQ3ZCOzRCQUNFLE9BQU8sRUFBRSxlQUFlOzRCQUN4QixVQUFVLEVBQUUsYUFBYTs0QkFDekIsSUFBSSxFQUFFLENBQUMsdUJBQXVCLENBQUM7NEJBQy9CLEtBQUssRUFBRSxJQUFJO3lCQUNaO3dCQUNEOzRCQUNFLE9BQU8sRUFBRSxpQkFBaUI7NEJBQzFCLFFBQVEsRUFBRSx1QkFBdUI7NEJBQ2pDLEtBQUssRUFBRSxJQUFJO3lCQUNaO3dCQUNELGtCQUFrQjt3QkFDbEI7NEJBQ0UsT0FBTyxFQUFFLGlCQUFpQjs0QkFDMUIsVUFBVSxFQUFFLHVCQUF1Qjs0QkFDbkMsS0FBSyxFQUFFLElBQUk7NEJBQ1gsSUFBSSxFQUFFLENBQUMsa0JBQWtCLENBQUM7eUJBQzNCO3FCQUNGO2lCQUNGOzs7O0lBWUQsdUJBQUM7Q0FBQSxBQW5ERCxJQW1EQztTQVhZLGdCQUFnQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7QnJvd3Nlck1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3Nlcic7XG5pbXBvcnQge0FQUF9JTklUSUFMSVpFUiwgTW9kdWxlV2l0aFByb3ZpZGVycywgTmdNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtIVFRQX0lOVEVSQ0VQVE9SUywgSHR0cENsaWVudE1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuaW1wb3J0IHtDb21wYXJpc29uQXBwQ29tcG9uZW50fSBmcm9tICcuL2NvbXBhcmlzb24tYXBwLmNvbXBvbmVudCc7XG5pbXBvcnQge0ZvbnRBd2Vzb21lTW9kdWxlfSBmcm9tICdAZm9ydGF3ZXNvbWUvYW5ndWxhci1mb250YXdlc29tZSc7XG5pbXBvcnQge2xpYnJhcnl9IGZyb20gJ0Bmb3J0YXdlc29tZS9mb250YXdlc29tZS1zdmctY29yZSc7XG5pbXBvcnQge2Zhc30gZnJvbSAnQGZvcnRhd2Vzb21lL2ZyZWUtc29saWQtc3ZnLWljb25zJztcbmltcG9ydCB7ZmFyfSBmcm9tICdAZm9ydGF3ZXNvbWUvZnJlZS1yZWd1bGFyLXN2Zy1pY29ucyc7XG5pbXBvcnQge0NvbXBhcmlzb25TZXJ2aWNlfSBmcm9tIFwiLi9jb21wYXJpc29uLnNlcnZpY2VcIjtcbmltcG9ydCB7XG4gIENvbW1vbkNvbXBvbmVudHNNb2R1bGUsXG4gIEVycm9ySW50ZXJjZXB0b3JTZXJ2aWNlLFxuICBDb25maWdTZXJ2aWNlLFxuICBMb2FkaW5nTWFza1NlcnZpY2UsXG4gIExvYWRpbmdNYXNrSW50ZXJjZXB0b3JTZXJ2aWNlLFxuICBBcGlcbn0gZnJvbSBcIkBncm91cGRvY3MuZXhhbXBsZXMuYW5ndWxhci9jb21tb24tY29tcG9uZW50c1wiO1xuaW1wb3J0IHtDb21wYXJpc29uQ29uZmlnU2VydmljZX0gZnJvbSBcIi4vY29tcGFyaXNvbi1jb25maWcuc2VydmljZVwiO1xuaW1wb3J0IHtBZGRGaWxlUGFuZWxDb21wb25lbnR9IGZyb20gJy4vYWRkLWZpbGUtcGFuZWwvYWRkLWZpbGUtcGFuZWwuY29tcG9uZW50JztcbmltcG9ydCB7VXBsb2FkRmlsZVBhbmVsQ29tcG9uZW50fSBmcm9tICcuL3VwbG9hZC1maWxlLXBhbmVsL3VwbG9hZC1maWxlLXBhbmVsLmNvbXBvbmVudCc7XG5pbXBvcnQge0RpZmZlcmVuY2VDb21wb25lbnR9IGZyb20gJy4vZGlmZmVyZW5jZS9kaWZmZXJlbmNlLmNvbXBvbmVudCc7XG5pbXBvcnQge0RpZmZlcmVuY2VIaWdobGlnaHRDb21wb25lbnR9IGZyb20gJy4vZGlmZmVyZW5jZS1oaWdobGlnaHQvZGlmZmVyZW5jZS1oaWdobGlnaHQuY29tcG9uZW50JztcbmltcG9ydCB7IFJlc3VsdERvY3VtZW50Q29tcG9uZW50IH0gZnJvbSAnLi9yZXN1bHQtZG9jdW1lbnQvcmVzdWx0LWRvY3VtZW50LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBEaWZmZXJlbmNlc0NvbXBvbmVudCB9IGZyb20gJy4vZGlmZmVyZW5jZXMvZGlmZmVyZW5jZXMuY29tcG9uZW50JztcbmltcG9ydCB7IERpZmZlcmVuY2VzU2VydmljZSB9IGZyb20gJy4vZGlmZmVyZW5jZXMuc2VydmljZSc7XG5pbXBvcnQgeyBDbGlja091dHNpZGVNb2R1bGUgfSBmcm9tICduZy1jbGljay1vdXRzaWRlJztcblxuZXhwb3J0IGZ1bmN0aW9uIGluaXRpYWxpemVBcHAoY29tcGFyaXNvbkNvbmZpZ1NlcnZpY2U6IENvbXBhcmlzb25Db25maWdTZXJ2aWNlKSB7XG4gIGNvbnN0IHJlc3VsdCA9ICgpID0+IGNvbXBhcmlzb25Db25maWdTZXJ2aWNlLmxvYWQoKTtcbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuLy8gTk9URTogdGhpcyBpcyByZXF1aXJlZCBkdXJpbmcgbGlicmFyeSBjb21waWxhdGlvbiBzZWUgaHR0cHM6Ly9naXRodWIuY29tL2FuZ3VsYXIvYW5ndWxhci9pc3N1ZXMvMjM2MjkjaXNzdWVjb21tZW50LTQ0MDk0Mjk4MVxuLy8gQGR5bmFtaWNcbmV4cG9ydCBmdW5jdGlvbiBzZXR1cExvYWRpbmdJbnRlcmNlcHRvcihzZXJ2aWNlOiBMb2FkaW5nTWFza1NlcnZpY2UpIHtcbiAgcmV0dXJuIG5ldyBMb2FkaW5nTWFza0ludGVyY2VwdG9yU2VydmljZShzZXJ2aWNlKTtcbn1cblxuQE5nTW9kdWxlKHtcbiAgZGVjbGFyYXRpb25zOiBbQ29tcGFyaXNvbkFwcENvbXBvbmVudCwgQWRkRmlsZVBhbmVsQ29tcG9uZW50LCBVcGxvYWRGaWxlUGFuZWxDb21wb25lbnQsIERpZmZlcmVuY2VDb21wb25lbnQsIERpZmZlcmVuY2VIaWdobGlnaHRDb21wb25lbnQsIFJlc3VsdERvY3VtZW50Q29tcG9uZW50LCBEaWZmZXJlbmNlc0NvbXBvbmVudF0sXG4gIGltcG9ydHM6IFtcbiAgICBCcm93c2VyTW9kdWxlLFxuICAgIENvbW1vbkNvbXBvbmVudHNNb2R1bGUsXG4gICAgSHR0cENsaWVudE1vZHVsZSxcbiAgICBGb250QXdlc29tZU1vZHVsZSxcbiAgICBDbGlja091dHNpZGVNb2R1bGVcbiAgXSxcbiAgZXhwb3J0czogW1xuICAgIENvbXBhcmlzb25BcHBDb21wb25lbnQsXG4gICAgQ29tbW9uQ29tcG9uZW50c01vZHVsZSxcbiAgICBSZXN1bHREb2N1bWVudENvbXBvbmVudCxcbiAgICBEaWZmZXJlbmNlc0NvbXBvbmVudFxuICBdLFxuICBwcm92aWRlcnM6IFtcbiAgICBDb21wYXJpc29uU2VydmljZSxcbiAgICBDb25maWdTZXJ2aWNlLFxuICAgIERpZmZlcmVuY2VzU2VydmljZSxcbiAgICBDb21wYXJpc29uQ29uZmlnU2VydmljZSxcbiAgICB7XG4gICAgICBwcm92aWRlOiBBUFBfSU5JVElBTElaRVIsXG4gICAgICB1c2VGYWN0b3J5OiBpbml0aWFsaXplQXBwLFxuICAgICAgZGVwczogW0NvbXBhcmlzb25Db25maWdTZXJ2aWNlXSxcbiAgICAgIG11bHRpOiB0cnVlXG4gICAgfSxcbiAgICB7XG4gICAgICBwcm92aWRlOiBIVFRQX0lOVEVSQ0VQVE9SUyxcbiAgICAgIHVzZUNsYXNzOiBFcnJvckludGVyY2VwdG9yU2VydmljZSxcbiAgICAgIG11bHRpOiB0cnVlXG4gICAgfSxcbiAgICBMb2FkaW5nTWFza1NlcnZpY2UsXG4gICAge1xuICAgICAgcHJvdmlkZTogSFRUUF9JTlRFUkNFUFRPUlMsXG4gICAgICB1c2VGYWN0b3J5OiBzZXR1cExvYWRpbmdJbnRlcmNlcHRvcixcbiAgICAgIG11bHRpOiB0cnVlLFxuICAgICAgZGVwczogW0xvYWRpbmdNYXNrU2VydmljZV1cbiAgICB9XG4gIF1cbn0pXG5leHBvcnQgY2xhc3MgQ29tcGFyaXNvbk1vZHVsZSB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIGxpYnJhcnkuYWRkKGZhcywgZmFyKTtcbiAgfVxuXG4gIHN0YXRpYyBmb3JSb290KGFwaUVuZHBvaW50OiBzdHJpbmcpOiBNb2R1bGVXaXRoUHJvdmlkZXJzIHtcbiAgICBBcGkuREVGQVVMVF9BUElfRU5EUE9JTlQgPSBhcGlFbmRwb2ludDtcbiAgICByZXR1cm4ge1xuICAgICAgbmdNb2R1bGU6IENvbXBhcmlzb25Nb2R1bGVcbiAgICB9O1xuICB9XG59XG4iXX0=