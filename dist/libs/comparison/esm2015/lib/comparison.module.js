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
                    FontAwesomeModule
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tcGFyaXNvbi5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ3JvdXBkb2NzLmV4YW1wbGVzLmFuZ3VsYXIvY29tcGFyaXNvbi8iLCJzb3VyY2VzIjpbImxpYi9jb21wYXJpc29uLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFDLGFBQWEsRUFBQyxNQUFNLDJCQUEyQixDQUFDO0FBQ3hELE9BQU8sRUFBQyxlQUFlLEVBQXVCLFFBQVEsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUM3RSxPQUFPLEVBQUMsaUJBQWlCLEVBQUUsZ0JBQWdCLEVBQUMsTUFBTSxzQkFBc0IsQ0FBQztBQUN6RSxPQUFPLEVBQUMsc0JBQXNCLEVBQUMsTUFBTSw0QkFBNEIsQ0FBQztBQUNsRSxPQUFPLEVBQUMsaUJBQWlCLEVBQUMsTUFBTSxrQ0FBa0MsQ0FBQztBQUNuRSxPQUFPLEVBQUMsT0FBTyxFQUFDLE1BQU0sbUNBQW1DLENBQUM7QUFDMUQsT0FBTyxFQUFDLEdBQUcsRUFBQyxNQUFNLG1DQUFtQyxDQUFDO0FBQ3RELE9BQU8sRUFBQyxHQUFHLEVBQUMsTUFBTSxxQ0FBcUMsQ0FBQztBQUN4RCxPQUFPLEVBQUMsaUJBQWlCLEVBQUMsTUFBTSxzQkFBc0IsQ0FBQztBQUN2RCxPQUFPLEVBQ0wsc0JBQXNCLEVBQ3RCLHVCQUF1QixFQUN2QixhQUFhLEVBQ2Isa0JBQWtCLEVBQ2xCLDZCQUE2QixFQUM3QixHQUFHLEVBQ0osTUFBTSwrQ0FBK0MsQ0FBQztBQUN2RCxPQUFPLEVBQUMsdUJBQXVCLEVBQUMsTUFBTSw2QkFBNkIsQ0FBQztBQUNwRSxPQUFPLEVBQUMscUJBQXFCLEVBQUMsTUFBTSwyQ0FBMkMsQ0FBQztBQUNoRixPQUFPLEVBQUMsd0JBQXdCLEVBQUMsTUFBTSxpREFBaUQsQ0FBQztBQUN6RixPQUFPLEVBQUMsbUJBQW1CLEVBQUMsTUFBTSxtQ0FBbUMsQ0FBQztBQUN0RSxPQUFPLEVBQUMsNEJBQTRCLEVBQUMsTUFBTSx1REFBdUQsQ0FBQztBQUNuRyxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSw2Q0FBNkMsQ0FBQztBQUN0RixPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSxxQ0FBcUMsQ0FBQztBQUMzRSxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQzs7Ozs7QUFFM0QsTUFBTSxVQUFVLGFBQWEsQ0FBQyx1QkFBZ0Q7O1VBQ3RFLE1BQU07OztJQUFHLEdBQUcsRUFBRSxDQUFDLHVCQUF1QixDQUFDLElBQUksRUFBRSxDQUFBO0lBQ25ELE9BQU8sTUFBTSxDQUFDO0FBQ2hCLENBQUM7Ozs7Ozs7QUFJRCxNQUFNLFVBQVUsdUJBQXVCLENBQUMsT0FBMkI7SUFDakUsT0FBTyxJQUFJLDZCQUE2QixDQUFDLE9BQU8sQ0FBQyxDQUFDO0FBQ3BELENBQUM7QUF5Q0QsTUFBTSxPQUFPLGdCQUFnQjtJQUMzQjtRQUNFLE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQyxDQUFDO0lBQ3hCLENBQUM7Ozs7O0lBRUQsTUFBTSxDQUFDLE9BQU8sQ0FBQyxXQUFtQjtRQUNoQyxHQUFHLENBQUMsb0JBQW9CLEdBQUcsV0FBVyxDQUFDO1FBQ3ZDLE9BQU87WUFDTCxRQUFRLEVBQUUsZ0JBQWdCO1NBQzNCLENBQUM7SUFDSixDQUFDOzs7WUFqREYsUUFBUSxTQUFDO2dCQUNSLFlBQVksRUFBRSxDQUFDLHNCQUFzQixFQUFFLHFCQUFxQixFQUFFLHdCQUF3QixFQUFFLG1CQUFtQixFQUFFLDRCQUE0QixFQUFFLHVCQUF1QixFQUFFLG9CQUFvQixDQUFDO2dCQUN6TCxPQUFPLEVBQUU7b0JBQ1AsYUFBYTtvQkFDYixzQkFBc0I7b0JBQ3RCLGdCQUFnQjtvQkFDaEIsaUJBQWlCO2lCQUNsQjtnQkFDRCxPQUFPLEVBQUU7b0JBQ1Asc0JBQXNCO29CQUN0QixzQkFBc0I7b0JBQ3RCLHVCQUF1QjtvQkFDdkIsb0JBQW9CO2lCQUNyQjtnQkFDRCxTQUFTLEVBQUU7b0JBQ1QsaUJBQWlCO29CQUNqQixhQUFhO29CQUNiLGtCQUFrQjtvQkFDbEIsdUJBQXVCO29CQUN2Qjt3QkFDRSxPQUFPLEVBQUUsZUFBZTt3QkFDeEIsVUFBVSxFQUFFLGFBQWE7d0JBQ3pCLElBQUksRUFBRSxDQUFDLHVCQUF1QixDQUFDO3dCQUMvQixLQUFLLEVBQUUsSUFBSTtxQkFDWjtvQkFDRDt3QkFDRSxPQUFPLEVBQUUsaUJBQWlCO3dCQUMxQixRQUFRLEVBQUUsdUJBQXVCO3dCQUNqQyxLQUFLLEVBQUUsSUFBSTtxQkFDWjtvQkFDRCxrQkFBa0I7b0JBQ2xCO3dCQUNFLE9BQU8sRUFBRSxpQkFBaUI7d0JBQzFCLFVBQVUsRUFBRSx1QkFBdUI7d0JBQ25DLEtBQUssRUFBRSxJQUFJO3dCQUNYLElBQUksRUFBRSxDQUFDLGtCQUFrQixDQUFDO3FCQUMzQjtpQkFDRjthQUNGIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtCcm93c2VyTW9kdWxlfSBmcm9tICdAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyJztcbmltcG9ydCB7QVBQX0lOSVRJQUxJWkVSLCBNb2R1bGVXaXRoUHJvdmlkZXJzLCBOZ01vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge0hUVFBfSU5URVJDRVBUT1JTLCBIdHRwQ2xpZW50TW9kdWxlfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XG5pbXBvcnQge0NvbXBhcmlzb25BcHBDb21wb25lbnR9IGZyb20gJy4vY29tcGFyaXNvbi1hcHAuY29tcG9uZW50JztcbmltcG9ydCB7Rm9udEF3ZXNvbWVNb2R1bGV9IGZyb20gJ0Bmb3J0YXdlc29tZS9hbmd1bGFyLWZvbnRhd2Vzb21lJztcbmltcG9ydCB7bGlicmFyeX0gZnJvbSAnQGZvcnRhd2Vzb21lL2ZvbnRhd2Vzb21lLXN2Zy1jb3JlJztcbmltcG9ydCB7ZmFzfSBmcm9tICdAZm9ydGF3ZXNvbWUvZnJlZS1zb2xpZC1zdmctaWNvbnMnO1xuaW1wb3J0IHtmYXJ9IGZyb20gJ0Bmb3J0YXdlc29tZS9mcmVlLXJlZ3VsYXItc3ZnLWljb25zJztcbmltcG9ydCB7Q29tcGFyaXNvblNlcnZpY2V9IGZyb20gXCIuL2NvbXBhcmlzb24uc2VydmljZVwiO1xuaW1wb3J0IHtcbiAgQ29tbW9uQ29tcG9uZW50c01vZHVsZSxcbiAgRXJyb3JJbnRlcmNlcHRvclNlcnZpY2UsXG4gIENvbmZpZ1NlcnZpY2UsXG4gIExvYWRpbmdNYXNrU2VydmljZSxcbiAgTG9hZGluZ01hc2tJbnRlcmNlcHRvclNlcnZpY2UsXG4gIEFwaVxufSBmcm9tIFwiQGdyb3VwZG9jcy5leGFtcGxlcy5hbmd1bGFyL2NvbW1vbi1jb21wb25lbnRzXCI7XG5pbXBvcnQge0NvbXBhcmlzb25Db25maWdTZXJ2aWNlfSBmcm9tIFwiLi9jb21wYXJpc29uLWNvbmZpZy5zZXJ2aWNlXCI7XG5pbXBvcnQge0FkZEZpbGVQYW5lbENvbXBvbmVudH0gZnJvbSAnLi9hZGQtZmlsZS1wYW5lbC9hZGQtZmlsZS1wYW5lbC5jb21wb25lbnQnO1xuaW1wb3J0IHtVcGxvYWRGaWxlUGFuZWxDb21wb25lbnR9IGZyb20gJy4vdXBsb2FkLWZpbGUtcGFuZWwvdXBsb2FkLWZpbGUtcGFuZWwuY29tcG9uZW50JztcbmltcG9ydCB7RGlmZmVyZW5jZUNvbXBvbmVudH0gZnJvbSAnLi9kaWZmZXJlbmNlL2RpZmZlcmVuY2UuY29tcG9uZW50JztcbmltcG9ydCB7RGlmZmVyZW5jZUhpZ2hsaWdodENvbXBvbmVudH0gZnJvbSAnLi9kaWZmZXJlbmNlLWhpZ2hsaWdodC9kaWZmZXJlbmNlLWhpZ2hsaWdodC5jb21wb25lbnQnO1xuaW1wb3J0IHsgUmVzdWx0RG9jdW1lbnRDb21wb25lbnQgfSBmcm9tICcuL3Jlc3VsdC1kb2N1bWVudC9yZXN1bHQtZG9jdW1lbnQuY29tcG9uZW50JztcbmltcG9ydCB7IERpZmZlcmVuY2VzQ29tcG9uZW50IH0gZnJvbSAnLi9kaWZmZXJlbmNlcy9kaWZmZXJlbmNlcy5jb21wb25lbnQnO1xuaW1wb3J0IHsgRGlmZmVyZW5jZXNTZXJ2aWNlIH0gZnJvbSAnLi9kaWZmZXJlbmNlcy5zZXJ2aWNlJztcblxuZXhwb3J0IGZ1bmN0aW9uIGluaXRpYWxpemVBcHAoY29tcGFyaXNvbkNvbmZpZ1NlcnZpY2U6IENvbXBhcmlzb25Db25maWdTZXJ2aWNlKSB7XG4gIGNvbnN0IHJlc3VsdCA9ICgpID0+IGNvbXBhcmlzb25Db25maWdTZXJ2aWNlLmxvYWQoKTtcbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuLy8gTk9URTogdGhpcyBpcyByZXF1aXJlZCBkdXJpbmcgbGlicmFyeSBjb21waWxhdGlvbiBzZWUgaHR0cHM6Ly9naXRodWIuY29tL2FuZ3VsYXIvYW5ndWxhci9pc3N1ZXMvMjM2MjkjaXNzdWVjb21tZW50LTQ0MDk0Mjk4MVxuLy8gQGR5bmFtaWNcbmV4cG9ydCBmdW5jdGlvbiBzZXR1cExvYWRpbmdJbnRlcmNlcHRvcihzZXJ2aWNlOiBMb2FkaW5nTWFza1NlcnZpY2UpIHtcbiAgcmV0dXJuIG5ldyBMb2FkaW5nTWFza0ludGVyY2VwdG9yU2VydmljZShzZXJ2aWNlKTtcbn1cblxuQE5nTW9kdWxlKHtcbiAgZGVjbGFyYXRpb25zOiBbQ29tcGFyaXNvbkFwcENvbXBvbmVudCwgQWRkRmlsZVBhbmVsQ29tcG9uZW50LCBVcGxvYWRGaWxlUGFuZWxDb21wb25lbnQsIERpZmZlcmVuY2VDb21wb25lbnQsIERpZmZlcmVuY2VIaWdobGlnaHRDb21wb25lbnQsIFJlc3VsdERvY3VtZW50Q29tcG9uZW50LCBEaWZmZXJlbmNlc0NvbXBvbmVudF0sXG4gIGltcG9ydHM6IFtcbiAgICBCcm93c2VyTW9kdWxlLFxuICAgIENvbW1vbkNvbXBvbmVudHNNb2R1bGUsXG4gICAgSHR0cENsaWVudE1vZHVsZSxcbiAgICBGb250QXdlc29tZU1vZHVsZVxuICBdLFxuICBleHBvcnRzOiBbXG4gICAgQ29tcGFyaXNvbkFwcENvbXBvbmVudCxcbiAgICBDb21tb25Db21wb25lbnRzTW9kdWxlLFxuICAgIFJlc3VsdERvY3VtZW50Q29tcG9uZW50LFxuICAgIERpZmZlcmVuY2VzQ29tcG9uZW50XG4gIF0sXG4gIHByb3ZpZGVyczogW1xuICAgIENvbXBhcmlzb25TZXJ2aWNlLFxuICAgIENvbmZpZ1NlcnZpY2UsXG4gICAgRGlmZmVyZW5jZXNTZXJ2aWNlLFxuICAgIENvbXBhcmlzb25Db25maWdTZXJ2aWNlLFxuICAgIHtcbiAgICAgIHByb3ZpZGU6IEFQUF9JTklUSUFMSVpFUixcbiAgICAgIHVzZUZhY3Rvcnk6IGluaXRpYWxpemVBcHAsXG4gICAgICBkZXBzOiBbQ29tcGFyaXNvbkNvbmZpZ1NlcnZpY2VdLFxuICAgICAgbXVsdGk6IHRydWVcbiAgICB9LFxuICAgIHtcbiAgICAgIHByb3ZpZGU6IEhUVFBfSU5URVJDRVBUT1JTLFxuICAgICAgdXNlQ2xhc3M6IEVycm9ySW50ZXJjZXB0b3JTZXJ2aWNlLFxuICAgICAgbXVsdGk6IHRydWVcbiAgICB9LFxuICAgIExvYWRpbmdNYXNrU2VydmljZSxcbiAgICB7XG4gICAgICBwcm92aWRlOiBIVFRQX0lOVEVSQ0VQVE9SUyxcbiAgICAgIHVzZUZhY3Rvcnk6IHNldHVwTG9hZGluZ0ludGVyY2VwdG9yLFxuICAgICAgbXVsdGk6IHRydWUsXG4gICAgICBkZXBzOiBbTG9hZGluZ01hc2tTZXJ2aWNlXVxuICAgIH1cbiAgXVxufSlcbmV4cG9ydCBjbGFzcyBDb21wYXJpc29uTW9kdWxlIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgbGlicmFyeS5hZGQoZmFzLCBmYXIpO1xuICB9XG5cbiAgc3RhdGljIGZvclJvb3QoYXBpRW5kcG9pbnQ6IHN0cmluZyk6IE1vZHVsZVdpdGhQcm92aWRlcnMge1xuICAgIEFwaS5ERUZBVUxUX0FQSV9FTkRQT0lOVCA9IGFwaUVuZHBvaW50O1xuICAgIHJldHVybiB7XG4gICAgICBuZ01vZHVsZTogQ29tcGFyaXNvbk1vZHVsZVxuICAgIH07XG4gIH1cbn1cbiJdfQ==