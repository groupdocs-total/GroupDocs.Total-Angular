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
ComparisonModule.ctorParameters = () => [];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tcGFyaXNvbi5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ3JvdXBkb2NzLmV4YW1wbGVzLmFuZ3VsYXIvY29tcGFyaXNvbi8iLCJzb3VyY2VzIjpbImxpYi9jb21wYXJpc29uLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFDLGFBQWEsRUFBQyxNQUFNLDJCQUEyQixDQUFDO0FBQ3hELE9BQU8sRUFBQyxlQUFlLEVBQXVCLFFBQVEsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUM3RSxPQUFPLEVBQUMsaUJBQWlCLEVBQUUsZ0JBQWdCLEVBQUMsTUFBTSxzQkFBc0IsQ0FBQztBQUN6RSxPQUFPLEVBQUMsc0JBQXNCLEVBQUMsTUFBTSw0QkFBNEIsQ0FBQztBQUNsRSxPQUFPLEVBQUMsaUJBQWlCLEVBQUMsTUFBTSxrQ0FBa0MsQ0FBQztBQUNuRSxPQUFPLEVBQUMsT0FBTyxFQUFDLE1BQU0sbUNBQW1DLENBQUM7QUFDMUQsT0FBTyxFQUFDLEdBQUcsRUFBQyxNQUFNLG1DQUFtQyxDQUFDO0FBQ3RELE9BQU8sRUFBQyxHQUFHLEVBQUMsTUFBTSxxQ0FBcUMsQ0FBQztBQUN4RCxPQUFPLEVBQUMsaUJBQWlCLEVBQUMsTUFBTSxzQkFBc0IsQ0FBQztBQUN2RCxPQUFPLEVBQ0wsc0JBQXNCLEVBQ3RCLHVCQUF1QixFQUN2QixhQUFhLEVBQ2Isa0JBQWtCLEVBQ2xCLDZCQUE2QixFQUM3QixHQUFHLEVBQ0osTUFBTSwrQ0FBK0MsQ0FBQztBQUN2RCxPQUFPLEVBQUMsdUJBQXVCLEVBQUMsTUFBTSw2QkFBNkIsQ0FBQztBQUNwRSxPQUFPLEVBQUMscUJBQXFCLEVBQUMsTUFBTSwyQ0FBMkMsQ0FBQztBQUNoRixPQUFPLEVBQUMsd0JBQXdCLEVBQUMsTUFBTSxpREFBaUQsQ0FBQztBQUN6RixPQUFPLEVBQUMsbUJBQW1CLEVBQUMsTUFBTSxtQ0FBbUMsQ0FBQztBQUN0RSxPQUFPLEVBQUMsNEJBQTRCLEVBQUMsTUFBTSx1REFBdUQsQ0FBQztBQUNuRyxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSw2Q0FBNkMsQ0FBQztBQUN0RixPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSxxQ0FBcUMsQ0FBQztBQUMzRSxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUMzRCxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQzs7Ozs7QUFFdEQsTUFBTSxVQUFVLGFBQWEsQ0FBQyx1QkFBZ0Q7O1VBQ3RFLE1BQU07OztJQUFHLEdBQUcsRUFBRSxDQUFDLHVCQUF1QixDQUFDLElBQUksRUFBRSxDQUFBO0lBQ25ELE9BQU8sTUFBTSxDQUFDO0FBQ2hCLENBQUM7Ozs7Ozs7QUFJRCxNQUFNLFVBQVUsdUJBQXVCLENBQUMsT0FBMkI7SUFDakUsT0FBTyxJQUFJLDZCQUE2QixDQUFDLE9BQU8sQ0FBQyxDQUFDO0FBQ3BELENBQUM7QUEwQ0QsTUFBTSxPQUFPLGdCQUFnQjtJQUMzQjtRQUNFLE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQyxDQUFDO0lBQ3hCLENBQUM7Ozs7O0lBRUQsTUFBTSxDQUFDLE9BQU8sQ0FBQyxXQUFtQjtRQUNoQyxHQUFHLENBQUMsb0JBQW9CLEdBQUcsV0FBVyxDQUFDO1FBQ3ZDLE9BQU87WUFDTCxRQUFRLEVBQUUsZ0JBQWdCO1NBQzNCLENBQUM7SUFDSixDQUFDOzs7WUFsREYsUUFBUSxTQUFDO2dCQUNSLFlBQVksRUFBRSxDQUFDLHNCQUFzQixFQUFFLHFCQUFxQixFQUFFLHdCQUF3QixFQUFFLG1CQUFtQixFQUFFLDRCQUE0QixFQUFFLHVCQUF1QixFQUFFLG9CQUFvQixDQUFDO2dCQUN6TCxPQUFPLEVBQUU7b0JBQ1AsYUFBYTtvQkFDYixzQkFBc0I7b0JBQ3RCLGdCQUFnQjtvQkFDaEIsaUJBQWlCO29CQUNqQixrQkFBa0I7aUJBQ25CO2dCQUNELE9BQU8sRUFBRTtvQkFDUCxzQkFBc0I7b0JBQ3RCLHNCQUFzQjtvQkFDdEIsdUJBQXVCO29CQUN2QixvQkFBb0I7aUJBQ3JCO2dCQUNELFNBQVMsRUFBRTtvQkFDVCxpQkFBaUI7b0JBQ2pCLGFBQWE7b0JBQ2Isa0JBQWtCO29CQUNsQix1QkFBdUI7b0JBQ3ZCO3dCQUNFLE9BQU8sRUFBRSxlQUFlO3dCQUN4QixVQUFVLEVBQUUsYUFBYTt3QkFDekIsSUFBSSxFQUFFLENBQUMsdUJBQXVCLENBQUM7d0JBQy9CLEtBQUssRUFBRSxJQUFJO3FCQUNaO29CQUNEO3dCQUNFLE9BQU8sRUFBRSxpQkFBaUI7d0JBQzFCLFFBQVEsRUFBRSx1QkFBdUI7d0JBQ2pDLEtBQUssRUFBRSxJQUFJO3FCQUNaO29CQUNELGtCQUFrQjtvQkFDbEI7d0JBQ0UsT0FBTyxFQUFFLGlCQUFpQjt3QkFDMUIsVUFBVSxFQUFFLHVCQUF1Qjt3QkFDbkMsS0FBSyxFQUFFLElBQUk7d0JBQ1gsSUFBSSxFQUFFLENBQUMsa0JBQWtCLENBQUM7cUJBQzNCO2lCQUNGO2FBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0Jyb3dzZXJNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXInO1xuaW1wb3J0IHtBUFBfSU5JVElBTElaRVIsIE1vZHVsZVdpdGhQcm92aWRlcnMsIE5nTW9kdWxlfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7SFRUUF9JTlRFUkNFUFRPUlMsIEh0dHBDbGllbnRNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcbmltcG9ydCB7Q29tcGFyaXNvbkFwcENvbXBvbmVudH0gZnJvbSAnLi9jb21wYXJpc29uLWFwcC5jb21wb25lbnQnO1xuaW1wb3J0IHtGb250QXdlc29tZU1vZHVsZX0gZnJvbSAnQGZvcnRhd2Vzb21lL2FuZ3VsYXItZm9udGF3ZXNvbWUnO1xuaW1wb3J0IHtsaWJyYXJ5fSBmcm9tICdAZm9ydGF3ZXNvbWUvZm9udGF3ZXNvbWUtc3ZnLWNvcmUnO1xuaW1wb3J0IHtmYXN9IGZyb20gJ0Bmb3J0YXdlc29tZS9mcmVlLXNvbGlkLXN2Zy1pY29ucyc7XG5pbXBvcnQge2Zhcn0gZnJvbSAnQGZvcnRhd2Vzb21lL2ZyZWUtcmVndWxhci1zdmctaWNvbnMnO1xuaW1wb3J0IHtDb21wYXJpc29uU2VydmljZX0gZnJvbSBcIi4vY29tcGFyaXNvbi5zZXJ2aWNlXCI7XG5pbXBvcnQge1xuICBDb21tb25Db21wb25lbnRzTW9kdWxlLFxuICBFcnJvckludGVyY2VwdG9yU2VydmljZSxcbiAgQ29uZmlnU2VydmljZSxcbiAgTG9hZGluZ01hc2tTZXJ2aWNlLFxuICBMb2FkaW5nTWFza0ludGVyY2VwdG9yU2VydmljZSxcbiAgQXBpXG59IGZyb20gXCJAZ3JvdXBkb2NzLmV4YW1wbGVzLmFuZ3VsYXIvY29tbW9uLWNvbXBvbmVudHNcIjtcbmltcG9ydCB7Q29tcGFyaXNvbkNvbmZpZ1NlcnZpY2V9IGZyb20gXCIuL2NvbXBhcmlzb24tY29uZmlnLnNlcnZpY2VcIjtcbmltcG9ydCB7QWRkRmlsZVBhbmVsQ29tcG9uZW50fSBmcm9tICcuL2FkZC1maWxlLXBhbmVsL2FkZC1maWxlLXBhbmVsLmNvbXBvbmVudCc7XG5pbXBvcnQge1VwbG9hZEZpbGVQYW5lbENvbXBvbmVudH0gZnJvbSAnLi91cGxvYWQtZmlsZS1wYW5lbC91cGxvYWQtZmlsZS1wYW5lbC5jb21wb25lbnQnO1xuaW1wb3J0IHtEaWZmZXJlbmNlQ29tcG9uZW50fSBmcm9tICcuL2RpZmZlcmVuY2UvZGlmZmVyZW5jZS5jb21wb25lbnQnO1xuaW1wb3J0IHtEaWZmZXJlbmNlSGlnaGxpZ2h0Q29tcG9uZW50fSBmcm9tICcuL2RpZmZlcmVuY2UtaGlnaGxpZ2h0L2RpZmZlcmVuY2UtaGlnaGxpZ2h0LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBSZXN1bHREb2N1bWVudENvbXBvbmVudCB9IGZyb20gJy4vcmVzdWx0LWRvY3VtZW50L3Jlc3VsdC1kb2N1bWVudC5jb21wb25lbnQnO1xuaW1wb3J0IHsgRGlmZmVyZW5jZXNDb21wb25lbnQgfSBmcm9tICcuL2RpZmZlcmVuY2VzL2RpZmZlcmVuY2VzLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBEaWZmZXJlbmNlc1NlcnZpY2UgfSBmcm9tICcuL2RpZmZlcmVuY2VzLnNlcnZpY2UnO1xuaW1wb3J0IHsgQ2xpY2tPdXRzaWRlTW9kdWxlIH0gZnJvbSAnbmctY2xpY2stb3V0c2lkZSc7XG5cbmV4cG9ydCBmdW5jdGlvbiBpbml0aWFsaXplQXBwKGNvbXBhcmlzb25Db25maWdTZXJ2aWNlOiBDb21wYXJpc29uQ29uZmlnU2VydmljZSkge1xuICBjb25zdCByZXN1bHQgPSAoKSA9PiBjb21wYXJpc29uQ29uZmlnU2VydmljZS5sb2FkKCk7XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbi8vIE5PVEU6IHRoaXMgaXMgcmVxdWlyZWQgZHVyaW5nIGxpYnJhcnkgY29tcGlsYXRpb24gc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9hbmd1bGFyL2FuZ3VsYXIvaXNzdWVzLzIzNjI5I2lzc3VlY29tbWVudC00NDA5NDI5ODFcbi8vIEBkeW5hbWljXG5leHBvcnQgZnVuY3Rpb24gc2V0dXBMb2FkaW5nSW50ZXJjZXB0b3Ioc2VydmljZTogTG9hZGluZ01hc2tTZXJ2aWNlKSB7XG4gIHJldHVybiBuZXcgTG9hZGluZ01hc2tJbnRlcmNlcHRvclNlcnZpY2Uoc2VydmljZSk7XG59XG5cbkBOZ01vZHVsZSh7XG4gIGRlY2xhcmF0aW9uczogW0NvbXBhcmlzb25BcHBDb21wb25lbnQsIEFkZEZpbGVQYW5lbENvbXBvbmVudCwgVXBsb2FkRmlsZVBhbmVsQ29tcG9uZW50LCBEaWZmZXJlbmNlQ29tcG9uZW50LCBEaWZmZXJlbmNlSGlnaGxpZ2h0Q29tcG9uZW50LCBSZXN1bHREb2N1bWVudENvbXBvbmVudCwgRGlmZmVyZW5jZXNDb21wb25lbnRdLFxuICBpbXBvcnRzOiBbXG4gICAgQnJvd3Nlck1vZHVsZSxcbiAgICBDb21tb25Db21wb25lbnRzTW9kdWxlLFxuICAgIEh0dHBDbGllbnRNb2R1bGUsXG4gICAgRm9udEF3ZXNvbWVNb2R1bGUsXG4gICAgQ2xpY2tPdXRzaWRlTW9kdWxlXG4gIF0sXG4gIGV4cG9ydHM6IFtcbiAgICBDb21wYXJpc29uQXBwQ29tcG9uZW50LFxuICAgIENvbW1vbkNvbXBvbmVudHNNb2R1bGUsXG4gICAgUmVzdWx0RG9jdW1lbnRDb21wb25lbnQsXG4gICAgRGlmZmVyZW5jZXNDb21wb25lbnRcbiAgXSxcbiAgcHJvdmlkZXJzOiBbXG4gICAgQ29tcGFyaXNvblNlcnZpY2UsXG4gICAgQ29uZmlnU2VydmljZSxcbiAgICBEaWZmZXJlbmNlc1NlcnZpY2UsXG4gICAgQ29tcGFyaXNvbkNvbmZpZ1NlcnZpY2UsXG4gICAge1xuICAgICAgcHJvdmlkZTogQVBQX0lOSVRJQUxJWkVSLFxuICAgICAgdXNlRmFjdG9yeTogaW5pdGlhbGl6ZUFwcCxcbiAgICAgIGRlcHM6IFtDb21wYXJpc29uQ29uZmlnU2VydmljZV0sXG4gICAgICBtdWx0aTogdHJ1ZVxuICAgIH0sXG4gICAge1xuICAgICAgcHJvdmlkZTogSFRUUF9JTlRFUkNFUFRPUlMsXG4gICAgICB1c2VDbGFzczogRXJyb3JJbnRlcmNlcHRvclNlcnZpY2UsXG4gICAgICBtdWx0aTogdHJ1ZVxuICAgIH0sXG4gICAgTG9hZGluZ01hc2tTZXJ2aWNlLFxuICAgIHtcbiAgICAgIHByb3ZpZGU6IEhUVFBfSU5URVJDRVBUT1JTLFxuICAgICAgdXNlRmFjdG9yeTogc2V0dXBMb2FkaW5nSW50ZXJjZXB0b3IsXG4gICAgICBtdWx0aTogdHJ1ZSxcbiAgICAgIGRlcHM6IFtMb2FkaW5nTWFza1NlcnZpY2VdXG4gICAgfVxuICBdXG59KVxuZXhwb3J0IGNsYXNzIENvbXBhcmlzb25Nb2R1bGUge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBsaWJyYXJ5LmFkZChmYXMsIGZhcik7XG4gIH1cblxuICBzdGF0aWMgZm9yUm9vdChhcGlFbmRwb2ludDogc3RyaW5nKTogTW9kdWxlV2l0aFByb3ZpZGVycyB7XG4gICAgQXBpLkRFRkFVTFRfQVBJX0VORFBPSU5UID0gYXBpRW5kcG9pbnQ7XG4gICAgcmV0dXJuIHtcbiAgICAgIG5nTW9kdWxlOiBDb21wYXJpc29uTW9kdWxlXG4gICAgfTtcbiAgfVxufVxuIl19