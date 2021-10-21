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
    const result = (/**
     * @return {?}
     */
    () => conversionConfigService.load());
    return result;
}
export class ConversionModule {
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
            ngModule: ConversionModule
        };
    }
}
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
ConversionModule.ctorParameters = () => [];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udmVyc2lvbi5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ3JvdXBkb2NzLmV4YW1wbGVzLmFuZ3VsYXIvY29udmVyc2lvbi8iLCJzb3VyY2VzIjpbImxpYi9jb252ZXJzaW9uLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFDLGVBQWUsRUFBdUIsUUFBUSxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQzdFLE9BQU8sRUFBQyxZQUFZLEVBQUMsTUFBTSxpQkFBaUIsQ0FBQztBQUM3QyxPQUFPLEVBQ0wsR0FBRyxFQUNILHNCQUFzQixFQUN0QixhQUFhLEVBQ2IsdUJBQXVCLEVBQ3hCLE1BQU0sK0NBQStDLENBQUM7QUFDdkQsT0FBTyxFQUFDLGlCQUFpQixFQUFFLGdCQUFnQixFQUFDLE1BQU0sc0JBQXNCLENBQUM7QUFDekUsT0FBTyxFQUFDLGlCQUFpQixFQUFDLE1BQU0sc0JBQXNCLENBQUM7QUFDdkQsT0FBTyxFQUFDLHVCQUF1QixFQUFDLE1BQU0sNkJBQTZCLENBQUM7QUFDcEUsT0FBTyxFQUFDLHNCQUFzQixFQUFDLE1BQU0sNEJBQTRCLENBQUM7QUFDbEUsT0FBTyxFQUFFLG1DQUFtQyxFQUFFLE1BQU0seUVBQXlFLENBQUM7QUFDOUgsT0FBTyxFQUFFLHlCQUF5QixFQUFFLE1BQU0saURBQWlELENBQUM7QUFDNUYsT0FBTyxFQUFDLE9BQU8sRUFBQyxNQUFNLG1DQUFtQyxDQUFDO0FBQzFELE9BQU8sRUFBQyxHQUFHLEVBQUMsTUFBTSxtQ0FBbUMsQ0FBQztBQUN0RCxPQUFPLEVBQUMsR0FBRyxFQUFDLE1BQU0scUNBQXFDLENBQUM7QUFDeEQsT0FBTyxFQUFDLGlCQUFpQixFQUFDLE1BQU0sa0NBQWtDLENBQUM7QUFDbkUsT0FBTyxFQUFDLHdCQUF3QixFQUFDLE1BQU0sK0NBQStDLENBQUM7QUFDdkYsT0FBTyxFQUFDLHVCQUF1QixFQUFDLE1BQU0sNkNBQTZDLENBQUM7QUFDcEYsT0FBTyxFQUFDLGVBQWUsRUFBQyxNQUFNLHFCQUFxQixDQUFDOzs7OztBQUVwRCxNQUFNLFVBQVUsYUFBYSxDQUFDLHVCQUFnRDs7VUFDdEUsTUFBTTs7O0lBQUcsR0FBRyxFQUFFLENBQUMsdUJBQXVCLENBQUMsSUFBSSxFQUFFLENBQUE7SUFDbkQsT0FBTyxNQUFNLENBQUM7QUFDaEIsQ0FBQztBQTJCRCxNQUFNLE9BQU8sZ0JBQWdCO0lBQzNCO1FBQ0UsT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDLENBQUM7SUFDeEIsQ0FBQzs7Ozs7SUFFRCxNQUFNLENBQUMsT0FBTyxDQUFDLFdBQW1CO1FBQ2hDLEdBQUcsQ0FBQyxvQkFBb0IsR0FBRyxXQUFXLENBQUM7UUFDdkMsT0FBTztZQUNMLFFBQVEsRUFBRSxnQkFBZ0I7U0FDM0IsQ0FBQztJQUNKLENBQUM7OztZQW5DRixRQUFRLFNBQUM7Z0JBQ1IsWUFBWSxFQUFFLENBQUMsc0JBQXNCLEVBQUUsbUNBQW1DLEVBQUUseUJBQXlCLEVBQUUsd0JBQXdCLEVBQUUsdUJBQXVCLENBQUM7Z0JBQ3pKLE9BQU8sRUFBRSxDQUFDLHNCQUFzQixFQUFFLG1DQUFtQyxFQUFFLHlCQUF5QixFQUFFLHdCQUF3QixDQUFDO2dCQUMzSCxPQUFPLEVBQUUsQ0FBQyxZQUFZO29CQUNwQixzQkFBc0I7b0JBQ3RCLGdCQUFnQjtvQkFDaEIsaUJBQWlCO29CQUNqQixlQUFlLENBQUMsT0FBTyxFQUFFO2lCQUMxQjtnQkFDRCxTQUFTLEVBQUU7b0JBQ1QsaUJBQWlCO29CQUNqQixhQUFhO29CQUNiLHVCQUF1QjtvQkFDdkI7d0JBQ0UsT0FBTyxFQUFFLGlCQUFpQjt3QkFDMUIsUUFBUSxFQUFFLHVCQUF1Qjt3QkFDakMsS0FBSyxFQUFFLElBQUk7cUJBQ1o7b0JBQ0Q7d0JBQ0UsT0FBTyxFQUFFLGVBQWU7d0JBQ3hCLFVBQVUsRUFBRSxhQUFhO3dCQUN6QixJQUFJLEVBQUUsQ0FBQyx1QkFBdUIsQ0FBQyxFQUFFLEtBQUssRUFBRSxJQUFJO3FCQUM3QztpQkFDRjthQUNGIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtBUFBfSU5JVElBTElaRVIsIE1vZHVsZVdpdGhQcm92aWRlcnMsIE5nTW9kdWxlfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHtDb21tb25Nb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XHJcbmltcG9ydCB7XHJcbiAgQXBpLFxyXG4gIENvbW1vbkNvbXBvbmVudHNNb2R1bGUsXHJcbiAgQ29uZmlnU2VydmljZSxcclxuICBFcnJvckludGVyY2VwdG9yU2VydmljZVxyXG59IGZyb20gXCJAZ3JvdXBkb2NzLmV4YW1wbGVzLmFuZ3VsYXIvY29tbW9uLWNvbXBvbmVudHNcIjtcclxuaW1wb3J0IHtIVFRQX0lOVEVSQ0VQVE9SUywgSHR0cENsaWVudE1vZHVsZX0gZnJvbSBcIkBhbmd1bGFyL2NvbW1vbi9odHRwXCI7XHJcbmltcG9ydCB7Q29udmVyc2lvblNlcnZpY2V9IGZyb20gXCIuL2NvbnZlcnNpb24uc2VydmljZVwiO1xyXG5pbXBvcnQge0NvbnZlcnNpb25Db25maWdTZXJ2aWNlfSBmcm9tIFwiLi9jb252ZXJzaW9uLWNvbmZpZy5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7Q29udmVyc2lvbkFwcENvbXBvbmVudH0gZnJvbSBcIi4vY29udmVyc2lvbi1hcHAuY29tcG9uZW50XCI7XHJcbmltcG9ydCB7IENvbnZlcnNpb25Ccm93c2VGaWxlc01vZGFsQ29tcG9uZW50IH0gZnJvbSAnLi9jb252ZXJzaW9uLWJyb3dzZS1maWxlcy1tb2RhbC9jb252ZXJzaW9uLWJyb3dzZS1maWxlcy1tb2RhbC5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBJbmZvcm1hdGlvbk1vZGFsQ29tcG9uZW50IH0gZnJvbSAnLi9pbmZvcm1hdGlvbi1tb2RhbC9pbmZvcm1hdGlvbi1tb2RhbC5jb21wb25lbnQnO1xyXG5pbXBvcnQge2xpYnJhcnl9IGZyb20gJ0Bmb3J0YXdlc29tZS9mb250YXdlc29tZS1zdmctY29yZSc7XHJcbmltcG9ydCB7ZmFzfSBmcm9tICdAZm9ydGF3ZXNvbWUvZnJlZS1zb2xpZC1zdmctaWNvbnMnO1xyXG5pbXBvcnQge2Zhcn0gZnJvbSAnQGZvcnRhd2Vzb21lL2ZyZWUtcmVndWxhci1zdmctaWNvbnMnO1xyXG5pbXBvcnQge0ZvbnRBd2Vzb21lTW9kdWxlfSBmcm9tICdAZm9ydGF3ZXNvbWUvYW5ndWxhci1mb250YXdlc29tZSc7XHJcbmltcG9ydCB7Q29udmVyc2lvblF1ZXVlQ29tcG9uZW50fSBmcm9tICcuL2NvbnZlcnNpb24tcXVldWUvY29udmVyc2lvbi1xdWV1ZS5jb21wb25lbnQnO1xyXG5pbXBvcnQge0NvbnZlcnNpb25JdGVtQ29tcG9uZW50fSBmcm9tICcuL2NvbnZlcnNpb24taXRlbS9jb252ZXJzaW9uLWl0ZW0uY29tcG9uZW50JztcclxuaW1wb3J0IHtUcmFuc2xhdGVNb2R1bGV9IGZyb20gJ0BuZ3gtdHJhbnNsYXRlL2NvcmUnO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGluaXRpYWxpemVBcHAoY29udmVyc2lvbkNvbmZpZ1NlcnZpY2U6IENvbnZlcnNpb25Db25maWdTZXJ2aWNlKSB7XHJcbiAgY29uc3QgcmVzdWx0ID0gKCkgPT4gY29udmVyc2lvbkNvbmZpZ1NlcnZpY2UubG9hZCgpO1xyXG4gIHJldHVybiByZXN1bHQ7XHJcbn1cclxuXHJcbkBOZ01vZHVsZSh7XHJcbiAgZGVjbGFyYXRpb25zOiBbQ29udmVyc2lvbkFwcENvbXBvbmVudCwgQ29udmVyc2lvbkJyb3dzZUZpbGVzTW9kYWxDb21wb25lbnQsIEluZm9ybWF0aW9uTW9kYWxDb21wb25lbnQsIENvbnZlcnNpb25RdWV1ZUNvbXBvbmVudCwgQ29udmVyc2lvbkl0ZW1Db21wb25lbnRdLFxyXG4gIGV4cG9ydHM6IFtDb252ZXJzaW9uQXBwQ29tcG9uZW50LCBDb252ZXJzaW9uQnJvd3NlRmlsZXNNb2RhbENvbXBvbmVudCwgSW5mb3JtYXRpb25Nb2RhbENvbXBvbmVudCwgQ29udmVyc2lvblF1ZXVlQ29tcG9uZW50XSxcclxuICBpbXBvcnRzOiBbQ29tbW9uTW9kdWxlLFxyXG4gICAgQ29tbW9uQ29tcG9uZW50c01vZHVsZSxcclxuICAgIEh0dHBDbGllbnRNb2R1bGUsXHJcbiAgICBGb250QXdlc29tZU1vZHVsZSxcclxuICAgIFRyYW5zbGF0ZU1vZHVsZS5mb3JSb290KClcclxuICBdLFxyXG4gIHByb3ZpZGVyczogW1xyXG4gICAgQ29udmVyc2lvblNlcnZpY2UsXHJcbiAgICBDb25maWdTZXJ2aWNlLFxyXG4gICAgQ29udmVyc2lvbkNvbmZpZ1NlcnZpY2UsXHJcbiAgICB7XHJcbiAgICAgIHByb3ZpZGU6IEhUVFBfSU5URVJDRVBUT1JTLFxyXG4gICAgICB1c2VDbGFzczogRXJyb3JJbnRlcmNlcHRvclNlcnZpY2UsXHJcbiAgICAgIG11bHRpOiB0cnVlXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBwcm92aWRlOiBBUFBfSU5JVElBTElaRVIsXHJcbiAgICAgIHVzZUZhY3Rvcnk6IGluaXRpYWxpemVBcHAsXHJcbiAgICAgIGRlcHM6IFtDb252ZXJzaW9uQ29uZmlnU2VydmljZV0sIG11bHRpOiB0cnVlXHJcbiAgICB9XHJcbiAgXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgQ29udmVyc2lvbk1vZHVsZSB7XHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgICBsaWJyYXJ5LmFkZChmYXMsIGZhcik7XHJcbiAgfVxyXG5cclxuICBzdGF0aWMgZm9yUm9vdChhcGlFbmRwb2ludDogc3RyaW5nKTogTW9kdWxlV2l0aFByb3ZpZGVycyB7XHJcbiAgICBBcGkuREVGQVVMVF9BUElfRU5EUE9JTlQgPSBhcGlFbmRwb2ludDtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIG5nTW9kdWxlOiBDb252ZXJzaW9uTW9kdWxlXHJcbiAgICB9O1xyXG4gIH1cclxufVxyXG4iXX0=