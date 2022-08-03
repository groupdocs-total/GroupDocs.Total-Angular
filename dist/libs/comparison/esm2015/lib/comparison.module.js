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
    const result = (/**
     * @return {?}
     */
    () => comparisonConfigService.load());
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
export class ComparisonModule {
    constructor() {
        library.add(fas, far);
    }
    /**
     * @param {?} apiEndpoint
     * @return {?}
     */
    static forRoot(apiEndpoint) {
        Api.DEFAULT_API_ENDPOINT = apiEndpoint;
        return {
            ngModule: ComparisonModule
        };
    }
}
ComparisonModule.decorators = [
    { type: NgModule, args: [{
                declarations: [
                    ComparisonAppComponent,
                    AddFilePanelComponent,
                    UploadFilePanelComponent,
                    DifferenceComponent,
                    DifferenceHighlightComponent,
                    ResultDocumentComponent,
                    DifferencesComponent
                ],
                imports: [
                    BrowserModule,
                    CommonComponentsModule,
                    HttpClientModule,
                    FontAwesomeModule,
                    ClickOutsideModule,
                    TranslateModule.forRoot()
                ],
                exports: [
                    CommonComponentsModule,
                    ComparisonAppComponent,
                    AddFilePanelComponent,
                    UploadFilePanelComponent,
                    DifferenceComponent,
                    DifferencesComponent,
                    DifferenceHighlightComponent,
                    ResultDocumentComponent
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
ComparisonModule.ctorParameters = () => [];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tcGFyaXNvbi5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ3JvdXBkb2NzLmV4YW1wbGVzLmFuZ3VsYXIvY29tcGFyaXNvbi8iLCJzb3VyY2VzIjpbImxpYi9jb21wYXJpc29uLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFDLGFBQWEsRUFBQyxNQUFNLDJCQUEyQixDQUFDO0FBQ3hELE9BQU8sRUFBQyxlQUFlLEVBQXVCLFFBQVEsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUM3RSxPQUFPLEVBQUMsaUJBQWlCLEVBQUUsZ0JBQWdCLEVBQUMsTUFBTSxzQkFBc0IsQ0FBQztBQUN6RSxPQUFPLEVBQUMsc0JBQXNCLEVBQUMsTUFBTSw0QkFBNEIsQ0FBQztBQUNsRSxPQUFPLEVBQUMsaUJBQWlCLEVBQUMsTUFBTSxrQ0FBa0MsQ0FBQztBQUNuRSxPQUFPLEVBQUMsT0FBTyxFQUFDLE1BQU0sbUNBQW1DLENBQUM7QUFDMUQsT0FBTyxFQUFDLEdBQUcsRUFBQyxNQUFNLG1DQUFtQyxDQUFDO0FBQ3RELE9BQU8sRUFBQyxHQUFHLEVBQUMsTUFBTSxxQ0FBcUMsQ0FBQztBQUN4RCxPQUFPLEVBQUMsaUJBQWlCLEVBQUMsTUFBTSxzQkFBc0IsQ0FBQztBQUN2RCxPQUFPLEVBQ0wsc0JBQXNCLEVBQ3RCLHVCQUF1QixFQUN2QixhQUFhLEVBQ2Isa0JBQWtCLEVBQ2xCLDZCQUE2QixFQUM3QixHQUFHLEVBQ0osTUFBTSwrQ0FBK0MsQ0FBQztBQUN2RCxPQUFPLEVBQUMsdUJBQXVCLEVBQUMsTUFBTSw2QkFBNkIsQ0FBQztBQUNwRSxPQUFPLEVBQUMscUJBQXFCLEVBQUMsTUFBTSwyQ0FBMkMsQ0FBQztBQUNoRixPQUFPLEVBQUMsd0JBQXdCLEVBQUMsTUFBTSxpREFBaUQsQ0FBQztBQUN6RixPQUFPLEVBQUMsbUJBQW1CLEVBQUMsTUFBTSxtQ0FBbUMsQ0FBQztBQUN0RSxPQUFPLEVBQUMsNEJBQTRCLEVBQUMsTUFBTSx1REFBdUQsQ0FBQztBQUNuRyxPQUFPLEVBQUMsdUJBQXVCLEVBQUMsTUFBTSw2Q0FBNkMsQ0FBQztBQUNwRixPQUFPLEVBQUMsb0JBQW9CLEVBQUMsTUFBTSxxQ0FBcUMsQ0FBQztBQUN6RSxPQUFPLEVBQUMsa0JBQWtCLEVBQUMsTUFBTSx1QkFBdUIsQ0FBQztBQUN6RCxPQUFPLEVBQUMsa0JBQWtCLEVBQUMsTUFBTSxrQkFBa0IsQ0FBQztBQUNwRCxPQUFPLEVBQUMsZUFBZSxFQUFDLE1BQU0scUJBQXFCLENBQUM7Ozs7O0FBRXBELE1BQU0sVUFBVSxhQUFhLENBQUMsdUJBQWdEOztVQUN0RSxNQUFNOzs7SUFBRyxHQUFHLEVBQUUsQ0FBQyx1QkFBdUIsQ0FBQyxJQUFJLEVBQUUsQ0FBQTtJQUNuRCxPQUFPLE1BQU0sQ0FBQztBQUNoQixDQUFDOzs7Ozs7O0FBSUQsTUFBTSxVQUFVLHVCQUF1QixDQUFDLE9BQTJCO0lBQ2pFLE9BQU8sSUFBSSw2QkFBNkIsQ0FBQyxPQUFPLENBQUMsQ0FBQztBQUNwRCxDQUFDO0FBdURELE1BQU0sT0FBTyxnQkFBZ0I7SUFDM0I7UUFDRSxPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUMsQ0FBQztJQUN4QixDQUFDOzs7OztJQUVELE1BQU0sQ0FBQyxPQUFPLENBQUMsV0FBbUI7UUFDaEMsR0FBRyxDQUFDLG9CQUFvQixHQUFHLFdBQVcsQ0FBQztRQUN2QyxPQUFPO1lBQ0wsUUFBUSxFQUFFLGdCQUFnQjtTQUMzQixDQUFDO0lBQ0osQ0FBQzs7O1lBL0RGLFFBQVEsU0FBQztnQkFDUixZQUFZLEVBQUU7b0JBQ1osc0JBQXNCO29CQUN0QixxQkFBcUI7b0JBQ3JCLHdCQUF3QjtvQkFDeEIsbUJBQW1CO29CQUNuQiw0QkFBNEI7b0JBQzVCLHVCQUF1QjtvQkFDdkIsb0JBQW9CO2lCQUNyQjtnQkFDRCxPQUFPLEVBQUU7b0JBQ1AsYUFBYTtvQkFDYixzQkFBc0I7b0JBQ3RCLGdCQUFnQjtvQkFDaEIsaUJBQWlCO29CQUNqQixrQkFBa0I7b0JBQ2xCLGVBQWUsQ0FBQyxPQUFPLEVBQUU7aUJBQzFCO2dCQUNELE9BQU8sRUFBRTtvQkFDUCxzQkFBc0I7b0JBQ3RCLHNCQUFzQjtvQkFDdEIscUJBQXFCO29CQUNyQix3QkFBd0I7b0JBQ3hCLG1CQUFtQjtvQkFDbkIsb0JBQW9CO29CQUNwQiw0QkFBNEI7b0JBQzVCLHVCQUF1QjtpQkFDeEI7Z0JBQ0QsU0FBUyxFQUFFO29CQUNULGlCQUFpQjtvQkFDakIsYUFBYTtvQkFDYixrQkFBa0I7b0JBQ2xCLHVCQUF1QjtvQkFDdkI7d0JBQ0UsT0FBTyxFQUFFLGVBQWU7d0JBQ3hCLFVBQVUsRUFBRSxhQUFhO3dCQUN6QixJQUFJLEVBQUUsQ0FBQyx1QkFBdUIsQ0FBQzt3QkFDL0IsS0FBSyxFQUFFLElBQUk7cUJBQ1o7b0JBQ0Q7d0JBQ0UsT0FBTyxFQUFFLGlCQUFpQjt3QkFDMUIsUUFBUSxFQUFFLHVCQUF1Qjt3QkFDakMsS0FBSyxFQUFFLElBQUk7cUJBQ1o7b0JBQ0Qsa0JBQWtCO29CQUNsQjt3QkFDRSxPQUFPLEVBQUUsaUJBQWlCO3dCQUMxQixVQUFVLEVBQUUsdUJBQXVCO3dCQUNuQyxLQUFLLEVBQUUsSUFBSTt3QkFDWCxJQUFJLEVBQUUsQ0FBQyxrQkFBa0IsQ0FBQztxQkFDM0I7aUJBQ0Y7YUFDRiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7QnJvd3Nlck1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3Nlcic7XG5pbXBvcnQge0FQUF9JTklUSUFMSVpFUiwgTW9kdWxlV2l0aFByb3ZpZGVycywgTmdNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtIVFRQX0lOVEVSQ0VQVE9SUywgSHR0cENsaWVudE1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuaW1wb3J0IHtDb21wYXJpc29uQXBwQ29tcG9uZW50fSBmcm9tICcuL2NvbXBhcmlzb24tYXBwLmNvbXBvbmVudCc7XG5pbXBvcnQge0ZvbnRBd2Vzb21lTW9kdWxlfSBmcm9tICdAZm9ydGF3ZXNvbWUvYW5ndWxhci1mb250YXdlc29tZSc7XG5pbXBvcnQge2xpYnJhcnl9IGZyb20gJ0Bmb3J0YXdlc29tZS9mb250YXdlc29tZS1zdmctY29yZSc7XG5pbXBvcnQge2Zhc30gZnJvbSAnQGZvcnRhd2Vzb21lL2ZyZWUtc29saWQtc3ZnLWljb25zJztcbmltcG9ydCB7ZmFyfSBmcm9tICdAZm9ydGF3ZXNvbWUvZnJlZS1yZWd1bGFyLXN2Zy1pY29ucyc7XG5pbXBvcnQge0NvbXBhcmlzb25TZXJ2aWNlfSBmcm9tIFwiLi9jb21wYXJpc29uLnNlcnZpY2VcIjtcbmltcG9ydCB7XG4gIENvbW1vbkNvbXBvbmVudHNNb2R1bGUsXG4gIEVycm9ySW50ZXJjZXB0b3JTZXJ2aWNlLFxuICBDb25maWdTZXJ2aWNlLFxuICBMb2FkaW5nTWFza1NlcnZpY2UsXG4gIExvYWRpbmdNYXNrSW50ZXJjZXB0b3JTZXJ2aWNlLFxuICBBcGlcbn0gZnJvbSBcIkBncm91cGRvY3MuZXhhbXBsZXMuYW5ndWxhci9jb21tb24tY29tcG9uZW50c1wiO1xuaW1wb3J0IHtDb21wYXJpc29uQ29uZmlnU2VydmljZX0gZnJvbSBcIi4vY29tcGFyaXNvbi1jb25maWcuc2VydmljZVwiO1xuaW1wb3J0IHtBZGRGaWxlUGFuZWxDb21wb25lbnR9IGZyb20gJy4vYWRkLWZpbGUtcGFuZWwvYWRkLWZpbGUtcGFuZWwuY29tcG9uZW50JztcbmltcG9ydCB7VXBsb2FkRmlsZVBhbmVsQ29tcG9uZW50fSBmcm9tICcuL3VwbG9hZC1maWxlLXBhbmVsL3VwbG9hZC1maWxlLXBhbmVsLmNvbXBvbmVudCc7XG5pbXBvcnQge0RpZmZlcmVuY2VDb21wb25lbnR9IGZyb20gJy4vZGlmZmVyZW5jZS9kaWZmZXJlbmNlLmNvbXBvbmVudCc7XG5pbXBvcnQge0RpZmZlcmVuY2VIaWdobGlnaHRDb21wb25lbnR9IGZyb20gJy4vZGlmZmVyZW5jZS1oaWdobGlnaHQvZGlmZmVyZW5jZS1oaWdobGlnaHQuY29tcG9uZW50JztcbmltcG9ydCB7UmVzdWx0RG9jdW1lbnRDb21wb25lbnR9IGZyb20gJy4vcmVzdWx0LWRvY3VtZW50L3Jlc3VsdC1kb2N1bWVudC5jb21wb25lbnQnO1xuaW1wb3J0IHtEaWZmZXJlbmNlc0NvbXBvbmVudH0gZnJvbSAnLi9kaWZmZXJlbmNlcy9kaWZmZXJlbmNlcy5jb21wb25lbnQnO1xuaW1wb3J0IHtEaWZmZXJlbmNlc1NlcnZpY2V9IGZyb20gJy4vZGlmZmVyZW5jZXMuc2VydmljZSc7XG5pbXBvcnQge0NsaWNrT3V0c2lkZU1vZHVsZX0gZnJvbSAnbmctY2xpY2stb3V0c2lkZSc7XG5pbXBvcnQge1RyYW5zbGF0ZU1vZHVsZX0gZnJvbSAnQG5neC10cmFuc2xhdGUvY29yZSc7XG5cbmV4cG9ydCBmdW5jdGlvbiBpbml0aWFsaXplQXBwKGNvbXBhcmlzb25Db25maWdTZXJ2aWNlOiBDb21wYXJpc29uQ29uZmlnU2VydmljZSkge1xuICBjb25zdCByZXN1bHQgPSAoKSA9PiBjb21wYXJpc29uQ29uZmlnU2VydmljZS5sb2FkKCk7XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbi8vIE5PVEU6IHRoaXMgaXMgcmVxdWlyZWQgZHVyaW5nIGxpYnJhcnkgY29tcGlsYXRpb24gc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9hbmd1bGFyL2FuZ3VsYXIvaXNzdWVzLzIzNjI5I2lzc3VlY29tbWVudC00NDA5NDI5ODFcbi8vIEBkeW5hbWljXG5leHBvcnQgZnVuY3Rpb24gc2V0dXBMb2FkaW5nSW50ZXJjZXB0b3Ioc2VydmljZTogTG9hZGluZ01hc2tTZXJ2aWNlKSB7XG4gIHJldHVybiBuZXcgTG9hZGluZ01hc2tJbnRlcmNlcHRvclNlcnZpY2Uoc2VydmljZSk7XG59XG5cbkBOZ01vZHVsZSh7XG4gIGRlY2xhcmF0aW9uczogW1xuICAgIENvbXBhcmlzb25BcHBDb21wb25lbnQsXG4gICAgQWRkRmlsZVBhbmVsQ29tcG9uZW50LFxuICAgIFVwbG9hZEZpbGVQYW5lbENvbXBvbmVudCxcbiAgICBEaWZmZXJlbmNlQ29tcG9uZW50LFxuICAgIERpZmZlcmVuY2VIaWdobGlnaHRDb21wb25lbnQsXG4gICAgUmVzdWx0RG9jdW1lbnRDb21wb25lbnQsXG4gICAgRGlmZmVyZW5jZXNDb21wb25lbnRcbiAgXSxcbiAgaW1wb3J0czogW1xuICAgIEJyb3dzZXJNb2R1bGUsXG4gICAgQ29tbW9uQ29tcG9uZW50c01vZHVsZSxcbiAgICBIdHRwQ2xpZW50TW9kdWxlLFxuICAgIEZvbnRBd2Vzb21lTW9kdWxlLFxuICAgIENsaWNrT3V0c2lkZU1vZHVsZSxcbiAgICBUcmFuc2xhdGVNb2R1bGUuZm9yUm9vdCgpXG4gIF0sXG4gIGV4cG9ydHM6IFtcbiAgICBDb21tb25Db21wb25lbnRzTW9kdWxlLFxuICAgIENvbXBhcmlzb25BcHBDb21wb25lbnQsXG4gICAgQWRkRmlsZVBhbmVsQ29tcG9uZW50LFxuICAgIFVwbG9hZEZpbGVQYW5lbENvbXBvbmVudCxcbiAgICBEaWZmZXJlbmNlQ29tcG9uZW50LFxuICAgIERpZmZlcmVuY2VzQ29tcG9uZW50LFxuICAgIERpZmZlcmVuY2VIaWdobGlnaHRDb21wb25lbnQsXG4gICAgUmVzdWx0RG9jdW1lbnRDb21wb25lbnRcbiAgXSxcbiAgcHJvdmlkZXJzOiBbXG4gICAgQ29tcGFyaXNvblNlcnZpY2UsXG4gICAgQ29uZmlnU2VydmljZSxcbiAgICBEaWZmZXJlbmNlc1NlcnZpY2UsXG4gICAgQ29tcGFyaXNvbkNvbmZpZ1NlcnZpY2UsXG4gICAge1xuICAgICAgcHJvdmlkZTogQVBQX0lOSVRJQUxJWkVSLFxuICAgICAgdXNlRmFjdG9yeTogaW5pdGlhbGl6ZUFwcCxcbiAgICAgIGRlcHM6IFtDb21wYXJpc29uQ29uZmlnU2VydmljZV0sXG4gICAgICBtdWx0aTogdHJ1ZVxuICAgIH0sXG4gICAge1xuICAgICAgcHJvdmlkZTogSFRUUF9JTlRFUkNFUFRPUlMsXG4gICAgICB1c2VDbGFzczogRXJyb3JJbnRlcmNlcHRvclNlcnZpY2UsXG4gICAgICBtdWx0aTogdHJ1ZVxuICAgIH0sXG4gICAgTG9hZGluZ01hc2tTZXJ2aWNlLFxuICAgIHtcbiAgICAgIHByb3ZpZGU6IEhUVFBfSU5URVJDRVBUT1JTLFxuICAgICAgdXNlRmFjdG9yeTogc2V0dXBMb2FkaW5nSW50ZXJjZXB0b3IsXG4gICAgICBtdWx0aTogdHJ1ZSxcbiAgICAgIGRlcHM6IFtMb2FkaW5nTWFza1NlcnZpY2VdXG4gICAgfVxuICBdXG59KVxuZXhwb3J0IGNsYXNzIENvbXBhcmlzb25Nb2R1bGUge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBsaWJyYXJ5LmFkZChmYXMsIGZhcik7XG4gIH1cblxuICBzdGF0aWMgZm9yUm9vdChhcGlFbmRwb2ludDogc3RyaW5nKTogTW9kdWxlV2l0aFByb3ZpZGVycyB7XG4gICAgQXBpLkRFRkFVTFRfQVBJX0VORFBPSU5UID0gYXBpRW5kcG9pbnQ7XG4gICAgcmV0dXJuIHtcbiAgICAgIG5nTW9kdWxlOiBDb21wYXJpc29uTW9kdWxlXG4gICAgfTtcbiAgfVxufVxuIl19