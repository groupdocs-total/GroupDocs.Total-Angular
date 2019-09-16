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
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ConversionQueueComponent } from './conversion-queue/conversion-queue.component';
import { ConversionItemComponent } from './conversion-item/conversion-item.component';
import { DndInitStateComponent } from './dnd-init-state/dnd-init-state.component';
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
                declarations: [ConversionAppComponent, ConversionBrowseFilesModalComponent, ConversionQueueComponent, ConversionItemComponent, DndInitStateComponent],
                exports: [ConversionAppComponent, ConversionBrowseFilesModalComponent, ConversionQueueComponent],
                imports: [CommonModule,
                    CommonComponentsModule,
                    HttpClientModule,
                    FontAwesomeModule],
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udmVyc2lvbi5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ3JvdXBkb2NzLmV4YW1wbGVzLmFuZ3VsYXIvY29udmVyc2lvbi8iLCJzb3VyY2VzIjpbImxpYi9jb252ZXJzaW9uLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFDLGVBQWUsRUFBdUIsUUFBUSxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQzdFLE9BQU8sRUFBQyxZQUFZLEVBQUMsTUFBTSxpQkFBaUIsQ0FBQztBQUM3QyxPQUFPLEVBQ0wsR0FBRyxFQUNILHNCQUFzQixFQUN0QixhQUFhLEVBQ2IsdUJBQXVCLEVBQ3hCLE1BQU0sK0NBQStDLENBQUM7QUFDdkQsT0FBTyxFQUFDLGlCQUFpQixFQUFFLGdCQUFnQixFQUFDLE1BQU0sc0JBQXNCLENBQUM7QUFDekUsT0FBTyxFQUFDLGlCQUFpQixFQUFDLE1BQU0sc0JBQXNCLENBQUM7QUFDdkQsT0FBTyxFQUFDLHVCQUF1QixFQUFDLE1BQU0sNkJBQTZCLENBQUM7QUFDcEUsT0FBTyxFQUFDLHNCQUFzQixFQUFDLE1BQU0sNEJBQTRCLENBQUM7QUFDbEUsT0FBTyxFQUFFLG1DQUFtQyxFQUFFLE1BQU0seUVBQXlFLENBQUM7QUFDOUgsT0FBTyxFQUFDLE9BQU8sRUFBQyxNQUFNLG1DQUFtQyxDQUFDO0FBQzFELE9BQU8sRUFBQyxHQUFHLEVBQUMsTUFBTSxtQ0FBbUMsQ0FBQztBQUN0RCxPQUFPLEVBQUMsR0FBRyxFQUFDLE1BQU0scUNBQXFDLENBQUM7QUFDeEQsT0FBTyxFQUFDLGlCQUFpQixFQUFDLE1BQU0sa0NBQWtDLENBQUM7QUFDbkUsT0FBTyxFQUFDLHdCQUF3QixFQUFDLE1BQU0sK0NBQStDLENBQUM7QUFDdkYsT0FBTyxFQUFDLHVCQUF1QixFQUFDLE1BQU0sNkNBQTZDLENBQUM7QUFDcEYsT0FBTyxFQUFDLHFCQUFxQixFQUFDLE1BQU0sMkNBQTJDLENBQUM7Ozs7O0FBRWhGLE1BQU0sVUFBVSxhQUFhLENBQUMsdUJBQWdEOztVQUN0RSxNQUFNOzs7SUFBRyxHQUFHLEVBQUUsQ0FBQyx1QkFBdUIsQ0FBQyxJQUFJLEVBQUUsQ0FBQTtJQUNuRCxPQUFPLE1BQU0sQ0FBQztBQUNoQixDQUFDO0FBeUJELE1BQU0sT0FBTyxnQkFBZ0I7SUFDM0I7UUFDRSxPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUMsQ0FBQztJQUN4QixDQUFDOzs7OztJQUVELE1BQU0sQ0FBQyxPQUFPLENBQUMsV0FBbUI7UUFDaEMsR0FBRyxDQUFDLG9CQUFvQixHQUFHLFdBQVcsQ0FBQztRQUN2QyxPQUFPO1lBQ0wsUUFBUSxFQUFFLGdCQUFnQjtTQUMzQixDQUFDO0lBQ0osQ0FBQzs7O1lBakNGLFFBQVEsU0FBQztnQkFDUixZQUFZLEVBQUUsQ0FBQyxzQkFBc0IsRUFBRSxtQ0FBbUMsRUFBRSx3QkFBd0IsRUFBRSx1QkFBdUIsRUFBRSxxQkFBcUIsQ0FBQztnQkFDckosT0FBTyxFQUFFLENBQUMsc0JBQXNCLEVBQUUsbUNBQW1DLEVBQUUsd0JBQXdCLENBQUM7Z0JBQ2hHLE9BQU8sRUFBRSxDQUFDLFlBQVk7b0JBQ3BCLHNCQUFzQjtvQkFDdEIsZ0JBQWdCO29CQUNoQixpQkFBaUIsQ0FBQztnQkFDcEIsU0FBUyxFQUFFO29CQUNULGlCQUFpQjtvQkFDakIsYUFBYTtvQkFDYix1QkFBdUI7b0JBQ3ZCO3dCQUNFLE9BQU8sRUFBRSxpQkFBaUI7d0JBQzFCLFFBQVEsRUFBRSx1QkFBdUI7d0JBQ2pDLEtBQUssRUFBRSxJQUFJO3FCQUNaO29CQUNEO3dCQUNFLE9BQU8sRUFBRSxlQUFlO3dCQUN4QixVQUFVLEVBQUUsYUFBYTt3QkFDekIsSUFBSSxFQUFFLENBQUMsdUJBQXVCLENBQUMsRUFBRSxLQUFLLEVBQUUsSUFBSTtxQkFDN0M7aUJBQ0Y7YUFDRiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7QVBQX0lOSVRJQUxJWkVSLCBNb2R1bGVXaXRoUHJvdmlkZXJzLCBOZ01vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge0NvbW1vbk1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7XG4gIEFwaSxcbiAgQ29tbW9uQ29tcG9uZW50c01vZHVsZSxcbiAgQ29uZmlnU2VydmljZSxcbiAgRXJyb3JJbnRlcmNlcHRvclNlcnZpY2Vcbn0gZnJvbSBcIkBncm91cGRvY3MuZXhhbXBsZXMuYW5ndWxhci9jb21tb24tY29tcG9uZW50c1wiO1xuaW1wb3J0IHtIVFRQX0lOVEVSQ0VQVE9SUywgSHR0cENsaWVudE1vZHVsZX0gZnJvbSBcIkBhbmd1bGFyL2NvbW1vbi9odHRwXCI7XG5pbXBvcnQge0NvbnZlcnNpb25TZXJ2aWNlfSBmcm9tIFwiLi9jb252ZXJzaW9uLnNlcnZpY2VcIjtcbmltcG9ydCB7Q29udmVyc2lvbkNvbmZpZ1NlcnZpY2V9IGZyb20gXCIuL2NvbnZlcnNpb24tY29uZmlnLnNlcnZpY2VcIjtcbmltcG9ydCB7Q29udmVyc2lvbkFwcENvbXBvbmVudH0gZnJvbSBcIi4vY29udmVyc2lvbi1hcHAuY29tcG9uZW50XCI7XG5pbXBvcnQgeyBDb252ZXJzaW9uQnJvd3NlRmlsZXNNb2RhbENvbXBvbmVudCB9IGZyb20gJy4vY29udmVyc2lvbi1icm93c2UtZmlsZXMtbW9kYWwvY29udmVyc2lvbi1icm93c2UtZmlsZXMtbW9kYWwuY29tcG9uZW50JztcbmltcG9ydCB7bGlicmFyeX0gZnJvbSAnQGZvcnRhd2Vzb21lL2ZvbnRhd2Vzb21lLXN2Zy1jb3JlJztcbmltcG9ydCB7ZmFzfSBmcm9tICdAZm9ydGF3ZXNvbWUvZnJlZS1zb2xpZC1zdmctaWNvbnMnO1xuaW1wb3J0IHtmYXJ9IGZyb20gJ0Bmb3J0YXdlc29tZS9mcmVlLXJlZ3VsYXItc3ZnLWljb25zJztcbmltcG9ydCB7Rm9udEF3ZXNvbWVNb2R1bGV9IGZyb20gJ0Bmb3J0YXdlc29tZS9hbmd1bGFyLWZvbnRhd2Vzb21lJztcbmltcG9ydCB7Q29udmVyc2lvblF1ZXVlQ29tcG9uZW50fSBmcm9tICcuL2NvbnZlcnNpb24tcXVldWUvY29udmVyc2lvbi1xdWV1ZS5jb21wb25lbnQnO1xuaW1wb3J0IHtDb252ZXJzaW9uSXRlbUNvbXBvbmVudH0gZnJvbSAnLi9jb252ZXJzaW9uLWl0ZW0vY29udmVyc2lvbi1pdGVtLmNvbXBvbmVudCc7XG5pbXBvcnQge0RuZEluaXRTdGF0ZUNvbXBvbmVudH0gZnJvbSAnLi9kbmQtaW5pdC1zdGF0ZS9kbmQtaW5pdC1zdGF0ZS5jb21wb25lbnQnO1xuXG5leHBvcnQgZnVuY3Rpb24gaW5pdGlhbGl6ZUFwcChjb252ZXJzaW9uQ29uZmlnU2VydmljZTogQ29udmVyc2lvbkNvbmZpZ1NlcnZpY2UpIHtcbiAgY29uc3QgcmVzdWx0ID0gKCkgPT4gY29udmVyc2lvbkNvbmZpZ1NlcnZpY2UubG9hZCgpO1xuICByZXR1cm4gcmVzdWx0O1xufVxuXG5ATmdNb2R1bGUoe1xuICBkZWNsYXJhdGlvbnM6IFtDb252ZXJzaW9uQXBwQ29tcG9uZW50LCBDb252ZXJzaW9uQnJvd3NlRmlsZXNNb2RhbENvbXBvbmVudCwgQ29udmVyc2lvblF1ZXVlQ29tcG9uZW50LCBDb252ZXJzaW9uSXRlbUNvbXBvbmVudCwgRG5kSW5pdFN0YXRlQ29tcG9uZW50XSxcbiAgZXhwb3J0czogW0NvbnZlcnNpb25BcHBDb21wb25lbnQsIENvbnZlcnNpb25Ccm93c2VGaWxlc01vZGFsQ29tcG9uZW50LCBDb252ZXJzaW9uUXVldWVDb21wb25lbnRdLFxuICBpbXBvcnRzOiBbQ29tbW9uTW9kdWxlLFxuICAgIENvbW1vbkNvbXBvbmVudHNNb2R1bGUsXG4gICAgSHR0cENsaWVudE1vZHVsZSxcbiAgICBGb250QXdlc29tZU1vZHVsZV0sXG4gIHByb3ZpZGVyczogW1xuICAgIENvbnZlcnNpb25TZXJ2aWNlLFxuICAgIENvbmZpZ1NlcnZpY2UsXG4gICAgQ29udmVyc2lvbkNvbmZpZ1NlcnZpY2UsXG4gICAge1xuICAgICAgcHJvdmlkZTogSFRUUF9JTlRFUkNFUFRPUlMsXG4gICAgICB1c2VDbGFzczogRXJyb3JJbnRlcmNlcHRvclNlcnZpY2UsXG4gICAgICBtdWx0aTogdHJ1ZVxuICAgIH0sXG4gICAge1xuICAgICAgcHJvdmlkZTogQVBQX0lOSVRJQUxJWkVSLFxuICAgICAgdXNlRmFjdG9yeTogaW5pdGlhbGl6ZUFwcCxcbiAgICAgIGRlcHM6IFtDb252ZXJzaW9uQ29uZmlnU2VydmljZV0sIG11bHRpOiB0cnVlXG4gICAgfVxuICBdXG59KVxuZXhwb3J0IGNsYXNzIENvbnZlcnNpb25Nb2R1bGUge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBsaWJyYXJ5LmFkZChmYXMsIGZhcik7XG4gIH1cblxuICBzdGF0aWMgZm9yUm9vdChhcGlFbmRwb2ludDogc3RyaW5nKTogTW9kdWxlV2l0aFByb3ZpZGVycyB7XG4gICAgQXBpLkRFRkFVTFRfQVBJX0VORFBPSU5UID0gYXBpRW5kcG9pbnQ7XG4gICAgcmV0dXJuIHtcbiAgICAgIG5nTW9kdWxlOiBDb252ZXJzaW9uTW9kdWxlXG4gICAgfTtcbiAgfVxufVxuIl19