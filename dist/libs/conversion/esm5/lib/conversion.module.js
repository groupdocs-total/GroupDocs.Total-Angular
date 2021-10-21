/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { APP_INITIALIZER, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Api, CommonComponentsModule, ConfigService, ErrorInterceptorService } from "@groupdocs.examples.angular/common-components";
import { HTTP_INTERCEPTORS, HttpClientModule } from "@angular/common/http";
import { ConversionService } from "./conversion.service";
import { ConversionConfigService } from "./conversion-config.service";
import { ConversionAppComponent } from "./conversion-app.component";
import { ConversionBrowseFilesModalComponent } from './conversion-browse-files-modal/conversion-browse-files-modal.component';
import { InformationModalComponent } from './information-modal/information-modal.component';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ConversionQueueComponent } from './conversion-queue/conversion-queue.component';
import { ConversionItemComponent } from './conversion-item/conversion-item.component';
import { TranslateModule } from '@ngx-translate/core';
/**
 * @param {?} conversionConfigService
 * @return {?}
 */
export function initializeApp(conversionConfigService) {
    /** @type {?} */
    var result = (/**
     * @return {?}
     */
    function () { return conversionConfigService.load(); });
    return result;
}
var ConversionModule = /** @class */ (function () {
    function ConversionModule() {
        library.add(fas, far);
    }
    /**
     * @param {?} apiEndpoint
     * @return {?}
     */
    ConversionModule.forRoot = /**
     * @param {?} apiEndpoint
     * @return {?}
     */
    function (apiEndpoint) {
        Api.DEFAULT_API_ENDPOINT = apiEndpoint;
        return {
            ngModule: ConversionModule
        };
    };
    ConversionModule.decorators = [
        { type: NgModule, args: [{
                    declarations: [ConversionAppComponent, ConversionBrowseFilesModalComponent, InformationModalComponent, ConversionQueueComponent, ConversionItemComponent],
                    exports: [ConversionAppComponent, ConversionBrowseFilesModalComponent, InformationModalComponent, ConversionQueueComponent],
                    imports: [CommonModule,
                        CommonComponentsModule,
                        HttpClientModule,
                        FontAwesomeModule,
                        TranslateModule.forRoot()
                    ],
                    providers: [
                        ConversionService,
                        ConfigService,
                        ConversionConfigService,
                        {
                            provide: HTTP_INTERCEPTORS,
                            useClass: ErrorInterceptorService,
                            multi: true
                        },
                        {
                            provide: APP_INITIALIZER,
                            useFactory: initializeApp,
                            deps: [ConversionConfigService], multi: true
                        }
                    ]
                },] }
    ];
    /** @nocollapse */
    ConversionModule.ctorParameters = function () { return []; };
    return ConversionModule;
}());
export { ConversionModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udmVyc2lvbi5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ3JvdXBkb2NzLmV4YW1wbGVzLmFuZ3VsYXIvY29udmVyc2lvbi8iLCJzb3VyY2VzIjpbImxpYi9jb252ZXJzaW9uLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFDLGVBQWUsRUFBdUIsUUFBUSxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQzdFLE9BQU8sRUFBQyxZQUFZLEVBQUMsTUFBTSxpQkFBaUIsQ0FBQztBQUM3QyxPQUFPLEVBQ0wsR0FBRyxFQUNILHNCQUFzQixFQUN0QixhQUFhLEVBQ2IsdUJBQXVCLEVBQ3hCLE1BQU0sK0NBQStDLENBQUM7QUFDdkQsT0FBTyxFQUFDLGlCQUFpQixFQUFFLGdCQUFnQixFQUFDLE1BQU0sc0JBQXNCLENBQUM7QUFDekUsT0FBTyxFQUFDLGlCQUFpQixFQUFDLE1BQU0sc0JBQXNCLENBQUM7QUFDdkQsT0FBTyxFQUFDLHVCQUF1QixFQUFDLE1BQU0sNkJBQTZCLENBQUM7QUFDcEUsT0FBTyxFQUFDLHNCQUFzQixFQUFDLE1BQU0sNEJBQTRCLENBQUM7QUFDbEUsT0FBTyxFQUFFLG1DQUFtQyxFQUFFLE1BQU0seUVBQXlFLENBQUM7QUFDOUgsT0FBTyxFQUFFLHlCQUF5QixFQUFFLE1BQU0saURBQWlELENBQUM7QUFDNUYsT0FBTyxFQUFDLE9BQU8sRUFBQyxNQUFNLG1DQUFtQyxDQUFDO0FBQzFELE9BQU8sRUFBQyxHQUFHLEVBQUMsTUFBTSxtQ0FBbUMsQ0FBQztBQUN0RCxPQUFPLEVBQUMsR0FBRyxFQUFDLE1BQU0scUNBQXFDLENBQUM7QUFDeEQsT0FBTyxFQUFDLGlCQUFpQixFQUFDLE1BQU0sa0NBQWtDLENBQUM7QUFDbkUsT0FBTyxFQUFDLHdCQUF3QixFQUFDLE1BQU0sK0NBQStDLENBQUM7QUFDdkYsT0FBTyxFQUFDLHVCQUF1QixFQUFDLE1BQU0sNkNBQTZDLENBQUM7QUFDcEYsT0FBTyxFQUFDLGVBQWUsRUFBQyxNQUFNLHFCQUFxQixDQUFDOzs7OztBQUVwRCxNQUFNLFVBQVUsYUFBYSxDQUFDLHVCQUFnRDs7UUFDdEUsTUFBTTs7O0lBQUcsY0FBTSxPQUFBLHVCQUF1QixDQUFDLElBQUksRUFBRSxFQUE5QixDQUE4QixDQUFBO0lBQ25ELE9BQU8sTUFBTSxDQUFDO0FBQ2hCLENBQUM7QUFFRDtJQTBCRTtRQUNFLE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQyxDQUFDO0lBQ3hCLENBQUM7Ozs7O0lBRU0sd0JBQU87Ozs7SUFBZCxVQUFlLFdBQW1CO1FBQ2hDLEdBQUcsQ0FBQyxvQkFBb0IsR0FBRyxXQUFXLENBQUM7UUFDdkMsT0FBTztZQUNMLFFBQVEsRUFBRSxnQkFBZ0I7U0FDM0IsQ0FBQztJQUNKLENBQUM7O2dCQW5DRixRQUFRLFNBQUM7b0JBQ1IsWUFBWSxFQUFFLENBQUMsc0JBQXNCLEVBQUUsbUNBQW1DLEVBQUUseUJBQXlCLEVBQUUsd0JBQXdCLEVBQUUsdUJBQXVCLENBQUM7b0JBQ3pKLE9BQU8sRUFBRSxDQUFDLHNCQUFzQixFQUFFLG1DQUFtQyxFQUFFLHlCQUF5QixFQUFFLHdCQUF3QixDQUFDO29CQUMzSCxPQUFPLEVBQUUsQ0FBQyxZQUFZO3dCQUNwQixzQkFBc0I7d0JBQ3RCLGdCQUFnQjt3QkFDaEIsaUJBQWlCO3dCQUNqQixlQUFlLENBQUMsT0FBTyxFQUFFO3FCQUMxQjtvQkFDRCxTQUFTLEVBQUU7d0JBQ1QsaUJBQWlCO3dCQUNqQixhQUFhO3dCQUNiLHVCQUF1Qjt3QkFDdkI7NEJBQ0UsT0FBTyxFQUFFLGlCQUFpQjs0QkFDMUIsUUFBUSxFQUFFLHVCQUF1Qjs0QkFDakMsS0FBSyxFQUFFLElBQUk7eUJBQ1o7d0JBQ0Q7NEJBQ0UsT0FBTyxFQUFFLGVBQWU7NEJBQ3hCLFVBQVUsRUFBRSxhQUFhOzRCQUN6QixJQUFJLEVBQUUsQ0FBQyx1QkFBdUIsQ0FBQyxFQUFFLEtBQUssRUFBRSxJQUFJO3lCQUM3QztxQkFDRjtpQkFDRjs7OztJQVlELHVCQUFDO0NBQUEsQUFwQ0QsSUFvQ0M7U0FYWSxnQkFBZ0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0FQUF9JTklUSUFMSVpFUiwgTW9kdWxlV2l0aFByb3ZpZGVycywgTmdNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQge0NvbW1vbk1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcclxuaW1wb3J0IHtcclxuICBBcGksXHJcbiAgQ29tbW9uQ29tcG9uZW50c01vZHVsZSxcclxuICBDb25maWdTZXJ2aWNlLFxyXG4gIEVycm9ySW50ZXJjZXB0b3JTZXJ2aWNlXHJcbn0gZnJvbSBcIkBncm91cGRvY3MuZXhhbXBsZXMuYW5ndWxhci9jb21tb24tY29tcG9uZW50c1wiO1xyXG5pbXBvcnQge0hUVFBfSU5URVJDRVBUT1JTLCBIdHRwQ2xpZW50TW9kdWxlfSBmcm9tIFwiQGFuZ3VsYXIvY29tbW9uL2h0dHBcIjtcclxuaW1wb3J0IHtDb252ZXJzaW9uU2VydmljZX0gZnJvbSBcIi4vY29udmVyc2lvbi5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7Q29udmVyc2lvbkNvbmZpZ1NlcnZpY2V9IGZyb20gXCIuL2NvbnZlcnNpb24tY29uZmlnLnNlcnZpY2VcIjtcclxuaW1wb3J0IHtDb252ZXJzaW9uQXBwQ29tcG9uZW50fSBmcm9tIFwiLi9jb252ZXJzaW9uLWFwcC5jb21wb25lbnRcIjtcclxuaW1wb3J0IHsgQ29udmVyc2lvbkJyb3dzZUZpbGVzTW9kYWxDb21wb25lbnQgfSBmcm9tICcuL2NvbnZlcnNpb24tYnJvd3NlLWZpbGVzLW1vZGFsL2NvbnZlcnNpb24tYnJvd3NlLWZpbGVzLW1vZGFsLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IEluZm9ybWF0aW9uTW9kYWxDb21wb25lbnQgfSBmcm9tICcuL2luZm9ybWF0aW9uLW1vZGFsL2luZm9ybWF0aW9uLW1vZGFsLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7bGlicmFyeX0gZnJvbSAnQGZvcnRhd2Vzb21lL2ZvbnRhd2Vzb21lLXN2Zy1jb3JlJztcclxuaW1wb3J0IHtmYXN9IGZyb20gJ0Bmb3J0YXdlc29tZS9mcmVlLXNvbGlkLXN2Zy1pY29ucyc7XHJcbmltcG9ydCB7ZmFyfSBmcm9tICdAZm9ydGF3ZXNvbWUvZnJlZS1yZWd1bGFyLXN2Zy1pY29ucyc7XHJcbmltcG9ydCB7Rm9udEF3ZXNvbWVNb2R1bGV9IGZyb20gJ0Bmb3J0YXdlc29tZS9hbmd1bGFyLWZvbnRhd2Vzb21lJztcclxuaW1wb3J0IHtDb252ZXJzaW9uUXVldWVDb21wb25lbnR9IGZyb20gJy4vY29udmVyc2lvbi1xdWV1ZS9jb252ZXJzaW9uLXF1ZXVlLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7Q29udmVyc2lvbkl0ZW1Db21wb25lbnR9IGZyb20gJy4vY29udmVyc2lvbi1pdGVtL2NvbnZlcnNpb24taXRlbS5jb21wb25lbnQnO1xyXG5pbXBvcnQge1RyYW5zbGF0ZU1vZHVsZX0gZnJvbSAnQG5neC10cmFuc2xhdGUvY29yZSc7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gaW5pdGlhbGl6ZUFwcChjb252ZXJzaW9uQ29uZmlnU2VydmljZTogQ29udmVyc2lvbkNvbmZpZ1NlcnZpY2UpIHtcclxuICBjb25zdCByZXN1bHQgPSAoKSA9PiBjb252ZXJzaW9uQ29uZmlnU2VydmljZS5sb2FkKCk7XHJcbiAgcmV0dXJuIHJlc3VsdDtcclxufVxyXG5cclxuQE5nTW9kdWxlKHtcclxuICBkZWNsYXJhdGlvbnM6IFtDb252ZXJzaW9uQXBwQ29tcG9uZW50LCBDb252ZXJzaW9uQnJvd3NlRmlsZXNNb2RhbENvbXBvbmVudCwgSW5mb3JtYXRpb25Nb2RhbENvbXBvbmVudCwgQ29udmVyc2lvblF1ZXVlQ29tcG9uZW50LCBDb252ZXJzaW9uSXRlbUNvbXBvbmVudF0sXHJcbiAgZXhwb3J0czogW0NvbnZlcnNpb25BcHBDb21wb25lbnQsIENvbnZlcnNpb25Ccm93c2VGaWxlc01vZGFsQ29tcG9uZW50LCBJbmZvcm1hdGlvbk1vZGFsQ29tcG9uZW50LCBDb252ZXJzaW9uUXVldWVDb21wb25lbnRdLFxyXG4gIGltcG9ydHM6IFtDb21tb25Nb2R1bGUsXHJcbiAgICBDb21tb25Db21wb25lbnRzTW9kdWxlLFxyXG4gICAgSHR0cENsaWVudE1vZHVsZSxcclxuICAgIEZvbnRBd2Vzb21lTW9kdWxlLFxyXG4gICAgVHJhbnNsYXRlTW9kdWxlLmZvclJvb3QoKVxyXG4gIF0sXHJcbiAgcHJvdmlkZXJzOiBbXHJcbiAgICBDb252ZXJzaW9uU2VydmljZSxcclxuICAgIENvbmZpZ1NlcnZpY2UsXHJcbiAgICBDb252ZXJzaW9uQ29uZmlnU2VydmljZSxcclxuICAgIHtcclxuICAgICAgcHJvdmlkZTogSFRUUF9JTlRFUkNFUFRPUlMsXHJcbiAgICAgIHVzZUNsYXNzOiBFcnJvckludGVyY2VwdG9yU2VydmljZSxcclxuICAgICAgbXVsdGk6IHRydWVcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIHByb3ZpZGU6IEFQUF9JTklUSUFMSVpFUixcclxuICAgICAgdXNlRmFjdG9yeTogaW5pdGlhbGl6ZUFwcCxcclxuICAgICAgZGVwczogW0NvbnZlcnNpb25Db25maWdTZXJ2aWNlXSwgbXVsdGk6IHRydWVcclxuICAgIH1cclxuICBdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBDb252ZXJzaW9uTW9kdWxlIHtcclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIGxpYnJhcnkuYWRkKGZhcywgZmFyKTtcclxuICB9XHJcblxyXG4gIHN0YXRpYyBmb3JSb290KGFwaUVuZHBvaW50OiBzdHJpbmcpOiBNb2R1bGVXaXRoUHJvdmlkZXJzIHtcclxuICAgIEFwaS5ERUZBVUxUX0FQSV9FTkRQT0lOVCA9IGFwaUVuZHBvaW50O1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgbmdNb2R1bGU6IENvbnZlcnNpb25Nb2R1bGVcclxuICAgIH07XHJcbiAgfVxyXG59XHJcbiJdfQ==