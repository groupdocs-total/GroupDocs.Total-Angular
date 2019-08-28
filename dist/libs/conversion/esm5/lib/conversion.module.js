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
    var result = (/**
     * @return {?}
     */
    function () { return conversionConfigService.load(); });
    return result;
}
var СonversionModule = /** @class */ (function () {
    function СonversionModule() {
        library.add(fas, far);
    }
    /**
     * @param {?} apiEndpoint
     * @return {?}
     */
    СonversionModule.forRoot = /**
     * @param {?} apiEndpoint
     * @return {?}
     */
    function (apiEndpoint) {
        Api.DEFAULT_API_ENDPOINT = apiEndpoint;
        return {
            ngModule: СonversionModule
        };
    };
    СonversionModule.decorators = [
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
    СonversionModule.ctorParameters = function () { return []; };
    return СonversionModule;
}());
export { СonversionModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udmVyc2lvbi5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ3JvdXBkb2NzLmV4YW1wbGVzLmFuZ3VsYXIvY29udmVyc2lvbi8iLCJzb3VyY2VzIjpbImxpYi9jb252ZXJzaW9uLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFDLGVBQWUsRUFBdUIsUUFBUSxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQzdFLE9BQU8sRUFBQyxZQUFZLEVBQUMsTUFBTSxpQkFBaUIsQ0FBQztBQUM3QyxPQUFPLEVBQ0wsR0FBRyxFQUNILHNCQUFzQixFQUN0QixhQUFhLEVBQ2IsdUJBQXVCLEVBQ3hCLE1BQU0sK0NBQStDLENBQUM7QUFDdkQsT0FBTyxFQUFDLGlCQUFpQixFQUFFLGdCQUFnQixFQUFDLE1BQU0sc0JBQXNCLENBQUM7QUFDekUsT0FBTyxFQUFDLGlCQUFpQixFQUFDLE1BQU0sc0JBQXNCLENBQUM7QUFDdkQsT0FBTyxFQUFDLHVCQUF1QixFQUFDLE1BQU0sNkJBQTZCLENBQUM7QUFDcEUsT0FBTyxFQUFDLHNCQUFzQixFQUFDLE1BQU0sNEJBQTRCLENBQUM7QUFDbEUsT0FBTyxFQUFFLG1DQUFtQyxFQUFFLE1BQU0seUVBQXlFLENBQUM7QUFDOUgsT0FBTyxFQUFDLE9BQU8sRUFBQyxNQUFNLG1DQUFtQyxDQUFDO0FBQzFELE9BQU8sRUFBQyxHQUFHLEVBQUMsTUFBTSxtQ0FBbUMsQ0FBQztBQUN0RCxPQUFPLEVBQUMsR0FBRyxFQUFDLE1BQU0scUNBQXFDLENBQUM7QUFDeEQsT0FBTyxFQUFDLGlCQUFpQixFQUFDLE1BQU0sa0NBQWtDLENBQUM7QUFDbkUsT0FBTyxFQUFDLHdCQUF3QixFQUFDLE1BQU0sK0NBQStDLENBQUM7QUFDdkYsT0FBTyxFQUFDLHVCQUF1QixFQUFDLE1BQU0sNkNBQTZDLENBQUM7QUFDcEYsT0FBTyxFQUFDLHFCQUFxQixFQUFDLE1BQU0sMkNBQTJDLENBQUM7Ozs7O0FBRWhGLE1BQU0sVUFBVSxhQUFhLENBQUMsdUJBQWdEOztRQUN0RSxNQUFNOzs7SUFBRyxjQUFNLE9BQUEsdUJBQXVCLENBQUMsSUFBSSxFQUFFLEVBQTlCLENBQThCLENBQUE7SUFDbkQsT0FBTyxNQUFNLENBQUM7QUFDaEIsQ0FBQztBQUVEO0lBd0JFO1FBQ0UsT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDLENBQUM7SUFDeEIsQ0FBQzs7Ozs7SUFFTSx3QkFBTzs7OztJQUFkLFVBQWUsV0FBbUI7UUFDaEMsR0FBRyxDQUFDLG9CQUFvQixHQUFHLFdBQVcsQ0FBQztRQUN2QyxPQUFPO1lBQ0wsUUFBUSxFQUFFLGdCQUFnQjtTQUMzQixDQUFDO0lBQ0osQ0FBQzs7Z0JBakNGLFFBQVEsU0FBQztvQkFDUixZQUFZLEVBQUUsQ0FBQyxzQkFBc0IsRUFBRSxtQ0FBbUMsRUFBRSx3QkFBd0IsRUFBRSx1QkFBdUIsRUFBRSxxQkFBcUIsQ0FBQztvQkFDckosT0FBTyxFQUFFLENBQUMsc0JBQXNCLEVBQUUsbUNBQW1DLEVBQUUsd0JBQXdCLENBQUM7b0JBQ2hHLE9BQU8sRUFBRSxDQUFDLFlBQVk7d0JBQ3BCLHNCQUFzQjt3QkFDdEIsZ0JBQWdCO3dCQUNoQixpQkFBaUIsQ0FBQztvQkFDcEIsU0FBUyxFQUFFO3dCQUNULGlCQUFpQjt3QkFDakIsYUFBYTt3QkFDYix1QkFBdUI7d0JBQ3ZCOzRCQUNFLE9BQU8sRUFBRSxpQkFBaUI7NEJBQzFCLFFBQVEsRUFBRSx1QkFBdUI7NEJBQ2pDLEtBQUssRUFBRSxJQUFJO3lCQUNaO3dCQUNEOzRCQUNFLE9BQU8sRUFBRSxlQUFlOzRCQUN4QixVQUFVLEVBQUUsYUFBYTs0QkFDekIsSUFBSSxFQUFFLENBQUMsdUJBQXVCLENBQUMsRUFBRSxLQUFLLEVBQUUsSUFBSTt5QkFDN0M7cUJBQ0Y7aUJBQ0Y7Ozs7SUFZRCx1QkFBQztDQUFBLEFBbENELElBa0NDO1NBWFksZ0JBQWdCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtBUFBfSU5JVElBTElaRVIsIE1vZHVsZVdpdGhQcm92aWRlcnMsIE5nTW9kdWxlfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7Q29tbW9uTW9kdWxlfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHtcbiAgQXBpLFxuICBDb21tb25Db21wb25lbnRzTW9kdWxlLFxuICBDb25maWdTZXJ2aWNlLFxuICBFcnJvckludGVyY2VwdG9yU2VydmljZVxufSBmcm9tIFwiQGdyb3VwZG9jcy5leGFtcGxlcy5hbmd1bGFyL2NvbW1vbi1jb21wb25lbnRzXCI7XG5pbXBvcnQge0hUVFBfSU5URVJDRVBUT1JTLCBIdHRwQ2xpZW50TW9kdWxlfSBmcm9tIFwiQGFuZ3VsYXIvY29tbW9uL2h0dHBcIjtcbmltcG9ydCB7Q29udmVyc2lvblNlcnZpY2V9IGZyb20gXCIuL2NvbnZlcnNpb24uc2VydmljZVwiO1xuaW1wb3J0IHtDb252ZXJzaW9uQ29uZmlnU2VydmljZX0gZnJvbSBcIi4vY29udmVyc2lvbi1jb25maWcuc2VydmljZVwiO1xuaW1wb3J0IHtDb252ZXJzaW9uQXBwQ29tcG9uZW50fSBmcm9tIFwiLi9jb252ZXJzaW9uLWFwcC5jb21wb25lbnRcIjtcbmltcG9ydCB7IENvbnZlcnNpb25Ccm93c2VGaWxlc01vZGFsQ29tcG9uZW50IH0gZnJvbSAnLi9jb252ZXJzaW9uLWJyb3dzZS1maWxlcy1tb2RhbC9jb252ZXJzaW9uLWJyb3dzZS1maWxlcy1tb2RhbC5jb21wb25lbnQnO1xuaW1wb3J0IHtsaWJyYXJ5fSBmcm9tICdAZm9ydGF3ZXNvbWUvZm9udGF3ZXNvbWUtc3ZnLWNvcmUnO1xuaW1wb3J0IHtmYXN9IGZyb20gJ0Bmb3J0YXdlc29tZS9mcmVlLXNvbGlkLXN2Zy1pY29ucyc7XG5pbXBvcnQge2Zhcn0gZnJvbSAnQGZvcnRhd2Vzb21lL2ZyZWUtcmVndWxhci1zdmctaWNvbnMnO1xuaW1wb3J0IHtGb250QXdlc29tZU1vZHVsZX0gZnJvbSAnQGZvcnRhd2Vzb21lL2FuZ3VsYXItZm9udGF3ZXNvbWUnO1xuaW1wb3J0IHtDb252ZXJzaW9uUXVldWVDb21wb25lbnR9IGZyb20gJy4vY29udmVyc2lvbi1xdWV1ZS9jb252ZXJzaW9uLXF1ZXVlLmNvbXBvbmVudCc7XG5pbXBvcnQge0NvbnZlcnNpb25JdGVtQ29tcG9uZW50fSBmcm9tICcuL2NvbnZlcnNpb24taXRlbS9jb252ZXJzaW9uLWl0ZW0uY29tcG9uZW50JztcbmltcG9ydCB7RG5kSW5pdFN0YXRlQ29tcG9uZW50fSBmcm9tICcuL2RuZC1pbml0LXN0YXRlL2RuZC1pbml0LXN0YXRlLmNvbXBvbmVudCc7XG5cbmV4cG9ydCBmdW5jdGlvbiBpbml0aWFsaXplQXBwKGNvbnZlcnNpb25Db25maWdTZXJ2aWNlOiBDb252ZXJzaW9uQ29uZmlnU2VydmljZSkge1xuICBjb25zdCByZXN1bHQgPSAoKSA9PiBjb252ZXJzaW9uQ29uZmlnU2VydmljZS5sb2FkKCk7XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbkBOZ01vZHVsZSh7XG4gIGRlY2xhcmF0aW9uczogW0NvbnZlcnNpb25BcHBDb21wb25lbnQsIENvbnZlcnNpb25Ccm93c2VGaWxlc01vZGFsQ29tcG9uZW50LCBDb252ZXJzaW9uUXVldWVDb21wb25lbnQsIENvbnZlcnNpb25JdGVtQ29tcG9uZW50LCBEbmRJbml0U3RhdGVDb21wb25lbnRdLFxuICBleHBvcnRzOiBbQ29udmVyc2lvbkFwcENvbXBvbmVudCwgQ29udmVyc2lvbkJyb3dzZUZpbGVzTW9kYWxDb21wb25lbnQsIENvbnZlcnNpb25RdWV1ZUNvbXBvbmVudF0sXG4gIGltcG9ydHM6IFtDb21tb25Nb2R1bGUsXG4gICAgQ29tbW9uQ29tcG9uZW50c01vZHVsZSxcbiAgICBIdHRwQ2xpZW50TW9kdWxlLFxuICAgIEZvbnRBd2Vzb21lTW9kdWxlXSxcbiAgcHJvdmlkZXJzOiBbXG4gICAgQ29udmVyc2lvblNlcnZpY2UsXG4gICAgQ29uZmlnU2VydmljZSxcbiAgICBDb252ZXJzaW9uQ29uZmlnU2VydmljZSxcbiAgICB7XG4gICAgICBwcm92aWRlOiBIVFRQX0lOVEVSQ0VQVE9SUyxcbiAgICAgIHVzZUNsYXNzOiBFcnJvckludGVyY2VwdG9yU2VydmljZSxcbiAgICAgIG11bHRpOiB0cnVlXG4gICAgfSxcbiAgICB7XG4gICAgICBwcm92aWRlOiBBUFBfSU5JVElBTElaRVIsXG4gICAgICB1c2VGYWN0b3J5OiBpbml0aWFsaXplQXBwLFxuICAgICAgZGVwczogW0NvbnZlcnNpb25Db25maWdTZXJ2aWNlXSwgbXVsdGk6IHRydWVcbiAgICB9XG4gIF1cbn0pXG5leHBvcnQgY2xhc3Mg0KFvbnZlcnNpb25Nb2R1bGUge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBsaWJyYXJ5LmFkZChmYXMsIGZhcik7XG4gIH1cblxuICBzdGF0aWMgZm9yUm9vdChhcGlFbmRwb2ludDogc3RyaW5nKTogTW9kdWxlV2l0aFByb3ZpZGVycyB7XG4gICAgQXBpLkRFRkFVTFRfQVBJX0VORFBPSU5UID0gYXBpRW5kcG9pbnQ7XG4gICAgcmV0dXJuIHtcbiAgICAgIG5nTW9kdWxlOiDQoW9udmVyc2lvbk1vZHVsZVxuICAgIH07XG4gIH1cbn1cbiJdfQ==