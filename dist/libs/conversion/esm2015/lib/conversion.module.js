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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udmVyc2lvbi5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ3JvdXBkb2NzLmV4YW1wbGVzLmFuZ3VsYXIvY29udmVyc2lvbi8iLCJzb3VyY2VzIjpbImxpYi9jb252ZXJzaW9uLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFDLGVBQWUsRUFBdUIsUUFBUSxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQzdFLE9BQU8sRUFBQyxZQUFZLEVBQUMsTUFBTSxpQkFBaUIsQ0FBQztBQUM3QyxPQUFPLEVBQ0wsR0FBRyxFQUNILHNCQUFzQixFQUN0QixhQUFhLEVBQ2IsdUJBQXVCLEVBQ3hCLE1BQU0sK0NBQStDLENBQUM7QUFDdkQsT0FBTyxFQUFDLGlCQUFpQixFQUFFLGdCQUFnQixFQUFDLE1BQU0sc0JBQXNCLENBQUM7QUFDekUsT0FBTyxFQUFDLGlCQUFpQixFQUFDLE1BQU0sc0JBQXNCLENBQUM7QUFDdkQsT0FBTyxFQUFDLHVCQUF1QixFQUFDLE1BQU0sNkJBQTZCLENBQUM7QUFDcEUsT0FBTyxFQUFDLHNCQUFzQixFQUFDLE1BQU0sNEJBQTRCLENBQUM7QUFDbEUsT0FBTyxFQUFFLG1DQUFtQyxFQUFFLE1BQU0seUVBQXlFLENBQUM7QUFDOUgsT0FBTyxFQUFFLHlCQUF5QixFQUFFLE1BQU0saURBQWlELENBQUM7QUFDNUYsT0FBTyxFQUFDLE9BQU8sRUFBQyxNQUFNLG1DQUFtQyxDQUFDO0FBQzFELE9BQU8sRUFBQyxHQUFHLEVBQUMsTUFBTSxtQ0FBbUMsQ0FBQztBQUN0RCxPQUFPLEVBQUMsR0FBRyxFQUFDLE1BQU0scUNBQXFDLENBQUM7QUFDeEQsT0FBTyxFQUFDLGlCQUFpQixFQUFDLE1BQU0sa0NBQWtDLENBQUM7QUFDbkUsT0FBTyxFQUFDLHdCQUF3QixFQUFDLE1BQU0sK0NBQStDLENBQUM7QUFDdkYsT0FBTyxFQUFDLHVCQUF1QixFQUFDLE1BQU0sNkNBQTZDLENBQUM7QUFDcEYsT0FBTyxFQUFDLGVBQWUsRUFBQyxNQUFNLHFCQUFxQixDQUFDOzs7OztBQUVwRCxNQUFNLFVBQVUsYUFBYSxDQUFDLHVCQUFnRDs7VUFDdEUsTUFBTTs7O0lBQUcsR0FBRyxFQUFFLENBQUMsdUJBQXVCLENBQUMsSUFBSSxFQUFFLENBQUE7SUFDbkQsT0FBTyxNQUFNLENBQUM7QUFDaEIsQ0FBQztBQTJCRCxNQUFNLE9BQU8sZ0JBQWdCO0lBQzNCO1FBQ0UsT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDLENBQUM7SUFDeEIsQ0FBQzs7Ozs7SUFFRCxNQUFNLENBQUMsT0FBTyxDQUFDLFdBQW1CO1FBQ2hDLEdBQUcsQ0FBQyxvQkFBb0IsR0FBRyxXQUFXLENBQUM7UUFDdkMsT0FBTztZQUNMLFFBQVEsRUFBRSxnQkFBZ0I7U0FDM0IsQ0FBQztJQUNKLENBQUM7OztZQW5DRixRQUFRLFNBQUM7Z0JBQ1IsWUFBWSxFQUFFLENBQUMsc0JBQXNCLEVBQUUsbUNBQW1DLEVBQUUseUJBQXlCLEVBQUUsd0JBQXdCLEVBQUUsdUJBQXVCLENBQUM7Z0JBQ3pKLE9BQU8sRUFBRSxDQUFDLHNCQUFzQixFQUFFLG1DQUFtQyxFQUFFLHlCQUF5QixFQUFFLHdCQUF3QixDQUFDO2dCQUMzSCxPQUFPLEVBQUUsQ0FBQyxZQUFZO29CQUNwQixzQkFBc0I7b0JBQ3RCLGdCQUFnQjtvQkFDaEIsaUJBQWlCO29CQUNqQixlQUFlLENBQUMsT0FBTyxFQUFFO2lCQUMxQjtnQkFDRCxTQUFTLEVBQUU7b0JBQ1QsaUJBQWlCO29CQUNqQixhQUFhO29CQUNiLHVCQUF1QjtvQkFDdkI7d0JBQ0UsT0FBTyxFQUFFLGlCQUFpQjt3QkFDMUIsUUFBUSxFQUFFLHVCQUF1Qjt3QkFDakMsS0FBSyxFQUFFLElBQUk7cUJBQ1o7b0JBQ0Q7d0JBQ0UsT0FBTyxFQUFFLGVBQWU7d0JBQ3hCLFVBQVUsRUFBRSxhQUFhO3dCQUN6QixJQUFJLEVBQUUsQ0FBQyx1QkFBdUIsQ0FBQyxFQUFFLEtBQUssRUFBRSxJQUFJO3FCQUM3QztpQkFDRjthQUNGIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtBUFBfSU5JVElBTElaRVIsIE1vZHVsZVdpdGhQcm92aWRlcnMsIE5nTW9kdWxlfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7Q29tbW9uTW9kdWxlfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHtcbiAgQXBpLFxuICBDb21tb25Db21wb25lbnRzTW9kdWxlLFxuICBDb25maWdTZXJ2aWNlLFxuICBFcnJvckludGVyY2VwdG9yU2VydmljZVxufSBmcm9tIFwiQGdyb3VwZG9jcy5leGFtcGxlcy5hbmd1bGFyL2NvbW1vbi1jb21wb25lbnRzXCI7XG5pbXBvcnQge0hUVFBfSU5URVJDRVBUT1JTLCBIdHRwQ2xpZW50TW9kdWxlfSBmcm9tIFwiQGFuZ3VsYXIvY29tbW9uL2h0dHBcIjtcbmltcG9ydCB7Q29udmVyc2lvblNlcnZpY2V9IGZyb20gXCIuL2NvbnZlcnNpb24uc2VydmljZVwiO1xuaW1wb3J0IHtDb252ZXJzaW9uQ29uZmlnU2VydmljZX0gZnJvbSBcIi4vY29udmVyc2lvbi1jb25maWcuc2VydmljZVwiO1xuaW1wb3J0IHtDb252ZXJzaW9uQXBwQ29tcG9uZW50fSBmcm9tIFwiLi9jb252ZXJzaW9uLWFwcC5jb21wb25lbnRcIjtcbmltcG9ydCB7IENvbnZlcnNpb25Ccm93c2VGaWxlc01vZGFsQ29tcG9uZW50IH0gZnJvbSAnLi9jb252ZXJzaW9uLWJyb3dzZS1maWxlcy1tb2RhbC9jb252ZXJzaW9uLWJyb3dzZS1maWxlcy1tb2RhbC5jb21wb25lbnQnO1xuaW1wb3J0IHsgSW5mb3JtYXRpb25Nb2RhbENvbXBvbmVudCB9IGZyb20gJy4vaW5mb3JtYXRpb24tbW9kYWwvaW5mb3JtYXRpb24tbW9kYWwuY29tcG9uZW50JztcbmltcG9ydCB7bGlicmFyeX0gZnJvbSAnQGZvcnRhd2Vzb21lL2ZvbnRhd2Vzb21lLXN2Zy1jb3JlJztcbmltcG9ydCB7ZmFzfSBmcm9tICdAZm9ydGF3ZXNvbWUvZnJlZS1zb2xpZC1zdmctaWNvbnMnO1xuaW1wb3J0IHtmYXJ9IGZyb20gJ0Bmb3J0YXdlc29tZS9mcmVlLXJlZ3VsYXItc3ZnLWljb25zJztcbmltcG9ydCB7Rm9udEF3ZXNvbWVNb2R1bGV9IGZyb20gJ0Bmb3J0YXdlc29tZS9hbmd1bGFyLWZvbnRhd2Vzb21lJztcbmltcG9ydCB7Q29udmVyc2lvblF1ZXVlQ29tcG9uZW50fSBmcm9tICcuL2NvbnZlcnNpb24tcXVldWUvY29udmVyc2lvbi1xdWV1ZS5jb21wb25lbnQnO1xuaW1wb3J0IHtDb252ZXJzaW9uSXRlbUNvbXBvbmVudH0gZnJvbSAnLi9jb252ZXJzaW9uLWl0ZW0vY29udmVyc2lvbi1pdGVtLmNvbXBvbmVudCc7XG5pbXBvcnQge1RyYW5zbGF0ZU1vZHVsZX0gZnJvbSAnQG5neC10cmFuc2xhdGUvY29yZSc7XG5cbmV4cG9ydCBmdW5jdGlvbiBpbml0aWFsaXplQXBwKGNvbnZlcnNpb25Db25maWdTZXJ2aWNlOiBDb252ZXJzaW9uQ29uZmlnU2VydmljZSkge1xuICBjb25zdCByZXN1bHQgPSAoKSA9PiBjb252ZXJzaW9uQ29uZmlnU2VydmljZS5sb2FkKCk7XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbkBOZ01vZHVsZSh7XG4gIGRlY2xhcmF0aW9uczogW0NvbnZlcnNpb25BcHBDb21wb25lbnQsIENvbnZlcnNpb25Ccm93c2VGaWxlc01vZGFsQ29tcG9uZW50LCBJbmZvcm1hdGlvbk1vZGFsQ29tcG9uZW50LCBDb252ZXJzaW9uUXVldWVDb21wb25lbnQsIENvbnZlcnNpb25JdGVtQ29tcG9uZW50XSxcbiAgZXhwb3J0czogW0NvbnZlcnNpb25BcHBDb21wb25lbnQsIENvbnZlcnNpb25Ccm93c2VGaWxlc01vZGFsQ29tcG9uZW50LCBJbmZvcm1hdGlvbk1vZGFsQ29tcG9uZW50LCBDb252ZXJzaW9uUXVldWVDb21wb25lbnRdLFxuICBpbXBvcnRzOiBbQ29tbW9uTW9kdWxlLFxuICAgIENvbW1vbkNvbXBvbmVudHNNb2R1bGUsXG4gICAgSHR0cENsaWVudE1vZHVsZSxcbiAgICBGb250QXdlc29tZU1vZHVsZSxcbiAgICBUcmFuc2xhdGVNb2R1bGUuZm9yUm9vdCgpXG4gIF0sXG4gIHByb3ZpZGVyczogW1xuICAgIENvbnZlcnNpb25TZXJ2aWNlLFxuICAgIENvbmZpZ1NlcnZpY2UsXG4gICAgQ29udmVyc2lvbkNvbmZpZ1NlcnZpY2UsXG4gICAge1xuICAgICAgcHJvdmlkZTogSFRUUF9JTlRFUkNFUFRPUlMsXG4gICAgICB1c2VDbGFzczogRXJyb3JJbnRlcmNlcHRvclNlcnZpY2UsXG4gICAgICBtdWx0aTogdHJ1ZVxuICAgIH0sXG4gICAge1xuICAgICAgcHJvdmlkZTogQVBQX0lOSVRJQUxJWkVSLFxuICAgICAgdXNlRmFjdG9yeTogaW5pdGlhbGl6ZUFwcCxcbiAgICAgIGRlcHM6IFtDb252ZXJzaW9uQ29uZmlnU2VydmljZV0sIG11bHRpOiB0cnVlXG4gICAgfVxuICBdXG59KVxuZXhwb3J0IGNsYXNzIENvbnZlcnNpb25Nb2R1bGUge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBsaWJyYXJ5LmFkZChmYXMsIGZhcik7XG4gIH1cblxuICBzdGF0aWMgZm9yUm9vdChhcGlFbmRwb2ludDogc3RyaW5nKTogTW9kdWxlV2l0aFByb3ZpZGVycyB7XG4gICAgQXBpLkRFRkFVTFRfQVBJX0VORFBPSU5UID0gYXBpRW5kcG9pbnQ7XG4gICAgcmV0dXJuIHtcbiAgICAgIG5nTW9kdWxlOiBDb252ZXJzaW9uTW9kdWxlXG4gICAgfTtcbiAgfVxufVxuIl19