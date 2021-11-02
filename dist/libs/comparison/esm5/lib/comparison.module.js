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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tcGFyaXNvbi5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ3JvdXBkb2NzLmV4YW1wbGVzLmFuZ3VsYXIvY29tcGFyaXNvbi8iLCJzb3VyY2VzIjpbImxpYi9jb21wYXJpc29uLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFDLGFBQWEsRUFBQyxNQUFNLDJCQUEyQixDQUFDO0FBQ3hELE9BQU8sRUFBQyxlQUFlLEVBQXVCLFFBQVEsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUM3RSxPQUFPLEVBQUMsaUJBQWlCLEVBQUUsZ0JBQWdCLEVBQUMsTUFBTSxzQkFBc0IsQ0FBQztBQUN6RSxPQUFPLEVBQUMsc0JBQXNCLEVBQUMsTUFBTSw0QkFBNEIsQ0FBQztBQUNsRSxPQUFPLEVBQUMsaUJBQWlCLEVBQUMsTUFBTSxrQ0FBa0MsQ0FBQztBQUNuRSxPQUFPLEVBQUMsT0FBTyxFQUFDLE1BQU0sbUNBQW1DLENBQUM7QUFDMUQsT0FBTyxFQUFDLEdBQUcsRUFBQyxNQUFNLG1DQUFtQyxDQUFDO0FBQ3RELE9BQU8sRUFBQyxHQUFHLEVBQUMsTUFBTSxxQ0FBcUMsQ0FBQztBQUN4RCxPQUFPLEVBQUMsaUJBQWlCLEVBQUMsTUFBTSxzQkFBc0IsQ0FBQztBQUN2RCxPQUFPLEVBQ0wsc0JBQXNCLEVBQ3RCLHVCQUF1QixFQUN2QixhQUFhLEVBQ2Isa0JBQWtCLEVBQ2xCLDZCQUE2QixFQUM3QixHQUFHLEVBQ0osTUFBTSwrQ0FBK0MsQ0FBQztBQUN2RCxPQUFPLEVBQUMsdUJBQXVCLEVBQUMsTUFBTSw2QkFBNkIsQ0FBQztBQUNwRSxPQUFPLEVBQUMscUJBQXFCLEVBQUMsTUFBTSwyQ0FBMkMsQ0FBQztBQUNoRixPQUFPLEVBQUMsd0JBQXdCLEVBQUMsTUFBTSxpREFBaUQsQ0FBQztBQUN6RixPQUFPLEVBQUMsbUJBQW1CLEVBQUMsTUFBTSxtQ0FBbUMsQ0FBQztBQUN0RSxPQUFPLEVBQUMsNEJBQTRCLEVBQUMsTUFBTSx1REFBdUQsQ0FBQztBQUNuRyxPQUFPLEVBQUMsdUJBQXVCLEVBQUMsTUFBTSw2Q0FBNkMsQ0FBQztBQUNwRixPQUFPLEVBQUMsb0JBQW9CLEVBQUMsTUFBTSxxQ0FBcUMsQ0FBQztBQUN6RSxPQUFPLEVBQUMsa0JBQWtCLEVBQUMsTUFBTSx1QkFBdUIsQ0FBQztBQUN6RCxPQUFPLEVBQUMsa0JBQWtCLEVBQUMsTUFBTSxrQkFBa0IsQ0FBQztBQUNwRCxPQUFPLEVBQUMsZUFBZSxFQUFDLE1BQU0scUJBQXFCLENBQUM7Ozs7O0FBRXBELE1BQU0sVUFBVSxhQUFhLENBQUMsdUJBQWdEOztRQUN0RSxNQUFNOzs7SUFBRyxjQUFNLE9BQUEsdUJBQXVCLENBQUMsSUFBSSxFQUFFLEVBQTlCLENBQThCLENBQUE7SUFDbkQsT0FBTyxNQUFNLENBQUM7QUFDaEIsQ0FBQzs7Ozs7OztBQUlELE1BQU0sVUFBVSx1QkFBdUIsQ0FBQyxPQUEyQjtJQUNqRSxPQUFPLElBQUksNkJBQTZCLENBQUMsT0FBTyxDQUFDLENBQUM7QUFDcEQsQ0FBQztBQUVEO0lBMENFO1FBQ0UsT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDLENBQUM7SUFDeEIsQ0FBQzs7Ozs7SUFFTSx3QkFBTzs7OztJQUFkLFVBQWUsV0FBbUI7UUFDaEMsR0FBRyxDQUFDLG9CQUFvQixHQUFHLFdBQVcsQ0FBQztRQUN2QyxPQUFPO1lBQ0wsUUFBUSxFQUFFLGdCQUFnQjtTQUMzQixDQUFDO0lBQ0osQ0FBQzs7Z0JBbkRGLFFBQVEsU0FBQztvQkFDUixZQUFZLEVBQUUsQ0FBQyxzQkFBc0IsRUFBRSxxQkFBcUIsRUFBRSx3QkFBd0IsRUFBRSxtQkFBbUIsRUFBRSw0QkFBNEIsRUFBRSx1QkFBdUIsRUFBRSxvQkFBb0IsQ0FBQztvQkFDekwsT0FBTyxFQUFFO3dCQUNQLGFBQWE7d0JBQ2Isc0JBQXNCO3dCQUN0QixnQkFBZ0I7d0JBQ2hCLGlCQUFpQjt3QkFDakIsa0JBQWtCO3dCQUNsQixlQUFlLENBQUMsT0FBTyxFQUFFO3FCQUMxQjtvQkFDRCxPQUFPLEVBQUU7d0JBQ1Asc0JBQXNCO3dCQUN0QixzQkFBc0I7d0JBQ3RCLHVCQUF1Qjt3QkFDdkIsb0JBQW9CO3FCQUNyQjtvQkFDRCxTQUFTLEVBQUU7d0JBQ1QsaUJBQWlCO3dCQUNqQixhQUFhO3dCQUNiLGtCQUFrQjt3QkFDbEIsdUJBQXVCO3dCQUN2Qjs0QkFDRSxPQUFPLEVBQUUsZUFBZTs0QkFDeEIsVUFBVSxFQUFFLGFBQWE7NEJBQ3pCLElBQUksRUFBRSxDQUFDLHVCQUF1QixDQUFDOzRCQUMvQixLQUFLLEVBQUUsSUFBSTt5QkFDWjt3QkFDRDs0QkFDRSxPQUFPLEVBQUUsaUJBQWlCOzRCQUMxQixRQUFRLEVBQUUsdUJBQXVCOzRCQUNqQyxLQUFLLEVBQUUsSUFBSTt5QkFDWjt3QkFDRCxrQkFBa0I7d0JBQ2xCOzRCQUNFLE9BQU8sRUFBRSxpQkFBaUI7NEJBQzFCLFVBQVUsRUFBRSx1QkFBdUI7NEJBQ25DLEtBQUssRUFBRSxJQUFJOzRCQUNYLElBQUksRUFBRSxDQUFDLGtCQUFrQixDQUFDO3lCQUMzQjtxQkFDRjtpQkFDRjs7OztJQVlELHVCQUFDO0NBQUEsQUFwREQsSUFvREM7U0FYWSxnQkFBZ0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0Jyb3dzZXJNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXInO1xuaW1wb3J0IHtBUFBfSU5JVElBTElaRVIsIE1vZHVsZVdpdGhQcm92aWRlcnMsIE5nTW9kdWxlfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7SFRUUF9JTlRFUkNFUFRPUlMsIEh0dHBDbGllbnRNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcbmltcG9ydCB7Q29tcGFyaXNvbkFwcENvbXBvbmVudH0gZnJvbSAnLi9jb21wYXJpc29uLWFwcC5jb21wb25lbnQnO1xuaW1wb3J0IHtGb250QXdlc29tZU1vZHVsZX0gZnJvbSAnQGZvcnRhd2Vzb21lL2FuZ3VsYXItZm9udGF3ZXNvbWUnO1xuaW1wb3J0IHtsaWJyYXJ5fSBmcm9tICdAZm9ydGF3ZXNvbWUvZm9udGF3ZXNvbWUtc3ZnLWNvcmUnO1xuaW1wb3J0IHtmYXN9IGZyb20gJ0Bmb3J0YXdlc29tZS9mcmVlLXNvbGlkLXN2Zy1pY29ucyc7XG5pbXBvcnQge2Zhcn0gZnJvbSAnQGZvcnRhd2Vzb21lL2ZyZWUtcmVndWxhci1zdmctaWNvbnMnO1xuaW1wb3J0IHtDb21wYXJpc29uU2VydmljZX0gZnJvbSBcIi4vY29tcGFyaXNvbi5zZXJ2aWNlXCI7XG5pbXBvcnQge1xuICBDb21tb25Db21wb25lbnRzTW9kdWxlLFxuICBFcnJvckludGVyY2VwdG9yU2VydmljZSxcbiAgQ29uZmlnU2VydmljZSxcbiAgTG9hZGluZ01hc2tTZXJ2aWNlLFxuICBMb2FkaW5nTWFza0ludGVyY2VwdG9yU2VydmljZSxcbiAgQXBpXG59IGZyb20gXCJAZ3JvdXBkb2NzLmV4YW1wbGVzLmFuZ3VsYXIvY29tbW9uLWNvbXBvbmVudHNcIjtcbmltcG9ydCB7Q29tcGFyaXNvbkNvbmZpZ1NlcnZpY2V9IGZyb20gXCIuL2NvbXBhcmlzb24tY29uZmlnLnNlcnZpY2VcIjtcbmltcG9ydCB7QWRkRmlsZVBhbmVsQ29tcG9uZW50fSBmcm9tICcuL2FkZC1maWxlLXBhbmVsL2FkZC1maWxlLXBhbmVsLmNvbXBvbmVudCc7XG5pbXBvcnQge1VwbG9hZEZpbGVQYW5lbENvbXBvbmVudH0gZnJvbSAnLi91cGxvYWQtZmlsZS1wYW5lbC91cGxvYWQtZmlsZS1wYW5lbC5jb21wb25lbnQnO1xuaW1wb3J0IHtEaWZmZXJlbmNlQ29tcG9uZW50fSBmcm9tICcuL2RpZmZlcmVuY2UvZGlmZmVyZW5jZS5jb21wb25lbnQnO1xuaW1wb3J0IHtEaWZmZXJlbmNlSGlnaGxpZ2h0Q29tcG9uZW50fSBmcm9tICcuL2RpZmZlcmVuY2UtaGlnaGxpZ2h0L2RpZmZlcmVuY2UtaGlnaGxpZ2h0LmNvbXBvbmVudCc7XG5pbXBvcnQge1Jlc3VsdERvY3VtZW50Q29tcG9uZW50fSBmcm9tICcuL3Jlc3VsdC1kb2N1bWVudC9yZXN1bHQtZG9jdW1lbnQuY29tcG9uZW50JztcbmltcG9ydCB7RGlmZmVyZW5jZXNDb21wb25lbnR9IGZyb20gJy4vZGlmZmVyZW5jZXMvZGlmZmVyZW5jZXMuY29tcG9uZW50JztcbmltcG9ydCB7RGlmZmVyZW5jZXNTZXJ2aWNlfSBmcm9tICcuL2RpZmZlcmVuY2VzLnNlcnZpY2UnO1xuaW1wb3J0IHtDbGlja091dHNpZGVNb2R1bGV9IGZyb20gJ25nLWNsaWNrLW91dHNpZGUnO1xuaW1wb3J0IHtUcmFuc2xhdGVNb2R1bGV9IGZyb20gJ0BuZ3gtdHJhbnNsYXRlL2NvcmUnO1xuXG5leHBvcnQgZnVuY3Rpb24gaW5pdGlhbGl6ZUFwcChjb21wYXJpc29uQ29uZmlnU2VydmljZTogQ29tcGFyaXNvbkNvbmZpZ1NlcnZpY2UpIHtcbiAgY29uc3QgcmVzdWx0ID0gKCkgPT4gY29tcGFyaXNvbkNvbmZpZ1NlcnZpY2UubG9hZCgpO1xuICByZXR1cm4gcmVzdWx0O1xufVxuXG4vLyBOT1RFOiB0aGlzIGlzIHJlcXVpcmVkIGR1cmluZyBsaWJyYXJ5IGNvbXBpbGF0aW9uIHNlZSBodHRwczovL2dpdGh1Yi5jb20vYW5ndWxhci9hbmd1bGFyL2lzc3Vlcy8yMzYyOSNpc3N1ZWNvbW1lbnQtNDQwOTQyOTgxXG4vLyBAZHluYW1pY1xuZXhwb3J0IGZ1bmN0aW9uIHNldHVwTG9hZGluZ0ludGVyY2VwdG9yKHNlcnZpY2U6IExvYWRpbmdNYXNrU2VydmljZSkge1xuICByZXR1cm4gbmV3IExvYWRpbmdNYXNrSW50ZXJjZXB0b3JTZXJ2aWNlKHNlcnZpY2UpO1xufVxuXG5ATmdNb2R1bGUoe1xuICBkZWNsYXJhdGlvbnM6IFtDb21wYXJpc29uQXBwQ29tcG9uZW50LCBBZGRGaWxlUGFuZWxDb21wb25lbnQsIFVwbG9hZEZpbGVQYW5lbENvbXBvbmVudCwgRGlmZmVyZW5jZUNvbXBvbmVudCwgRGlmZmVyZW5jZUhpZ2hsaWdodENvbXBvbmVudCwgUmVzdWx0RG9jdW1lbnRDb21wb25lbnQsIERpZmZlcmVuY2VzQ29tcG9uZW50XSxcbiAgaW1wb3J0czogW1xuICAgIEJyb3dzZXJNb2R1bGUsXG4gICAgQ29tbW9uQ29tcG9uZW50c01vZHVsZSxcbiAgICBIdHRwQ2xpZW50TW9kdWxlLFxuICAgIEZvbnRBd2Vzb21lTW9kdWxlLFxuICAgIENsaWNrT3V0c2lkZU1vZHVsZSxcbiAgICBUcmFuc2xhdGVNb2R1bGUuZm9yUm9vdCgpXG4gIF0sXG4gIGV4cG9ydHM6IFtcbiAgICBDb21wYXJpc29uQXBwQ29tcG9uZW50LFxuICAgIENvbW1vbkNvbXBvbmVudHNNb2R1bGUsXG4gICAgUmVzdWx0RG9jdW1lbnRDb21wb25lbnQsXG4gICAgRGlmZmVyZW5jZXNDb21wb25lbnRcbiAgXSxcbiAgcHJvdmlkZXJzOiBbXG4gICAgQ29tcGFyaXNvblNlcnZpY2UsXG4gICAgQ29uZmlnU2VydmljZSxcbiAgICBEaWZmZXJlbmNlc1NlcnZpY2UsXG4gICAgQ29tcGFyaXNvbkNvbmZpZ1NlcnZpY2UsXG4gICAge1xuICAgICAgcHJvdmlkZTogQVBQX0lOSVRJQUxJWkVSLFxuICAgICAgdXNlRmFjdG9yeTogaW5pdGlhbGl6ZUFwcCxcbiAgICAgIGRlcHM6IFtDb21wYXJpc29uQ29uZmlnU2VydmljZV0sXG4gICAgICBtdWx0aTogdHJ1ZVxuICAgIH0sXG4gICAge1xuICAgICAgcHJvdmlkZTogSFRUUF9JTlRFUkNFUFRPUlMsXG4gICAgICB1c2VDbGFzczogRXJyb3JJbnRlcmNlcHRvclNlcnZpY2UsXG4gICAgICBtdWx0aTogdHJ1ZVxuICAgIH0sXG4gICAgTG9hZGluZ01hc2tTZXJ2aWNlLFxuICAgIHtcbiAgICAgIHByb3ZpZGU6IEhUVFBfSU5URVJDRVBUT1JTLFxuICAgICAgdXNlRmFjdG9yeTogc2V0dXBMb2FkaW5nSW50ZXJjZXB0b3IsXG4gICAgICBtdWx0aTogdHJ1ZSxcbiAgICAgIGRlcHM6IFtMb2FkaW5nTWFza1NlcnZpY2VdXG4gICAgfVxuICBdXG59KVxuZXhwb3J0IGNsYXNzIENvbXBhcmlzb25Nb2R1bGUge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBsaWJyYXJ5LmFkZChmYXMsIGZhcik7XG4gIH1cblxuICBzdGF0aWMgZm9yUm9vdChhcGlFbmRwb2ludDogc3RyaW5nKTogTW9kdWxlV2l0aFByb3ZpZGVycyB7XG4gICAgQXBpLkRFRkFVTFRfQVBJX0VORFBPSU5UID0gYXBpRW5kcG9pbnQ7XG4gICAgcmV0dXJuIHtcbiAgICAgIG5nTW9kdWxlOiBDb21wYXJpc29uTW9kdWxlXG4gICAgfTtcbiAgfVxufVxuIl19