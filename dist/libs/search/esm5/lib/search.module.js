/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { BrowserModule } from '@angular/platform-browser';
import { APP_INITIALIZER, NgModule } from '@angular/core';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { SearchAppComponent } from './search-app.component';
import { Api, CommonComponentsModule, ErrorInterceptorService, LoadingMaskInterceptorService, LoadingMaskService } from '@groupdocs.examples.angular/common-components';
import { SearchService } from "./search.service";
import { ConfigService } from "@groupdocs.examples.angular/common-components";
import { SearchConfigService } from "./search-config.service";
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { SearchPanelComponent } from './search-panel/search-panel.component';
import { SearchResultSummaryComponent } from './search-result-summary/search-result-summary.component';
import { SearchResultItemComponent } from './search-result-item/search-result-item.component';
import { IndexedFilesListComponent } from './indexed-files-list/indexed-files-list.component';
import { IndexedFileComponent } from './indexed-file/indexed-file.component';
import { SearchBrowseFilesModalComponent } from './search-browse-files-modal/search-browse-files-modal.component';
import { TranslateModule } from '@ngx-translate/core';
/**
 * @param {?} searchConfigService
 * @return {?}
 */
export function initializeApp(searchConfigService) {
    /** @type {?} */
    var result = (/**
     * @return {?}
     */
    function () { return searchConfigService.load(); });
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
var SearchModule = /** @class */ (function () {
    function SearchModule() {
    }
    /**
     * @param {?} apiEndpoint
     * @return {?}
     */
    SearchModule.forRoot = /**
     * @param {?} apiEndpoint
     * @return {?}
     */
    function (apiEndpoint) {
        Api.DEFAULT_API_ENDPOINT = apiEndpoint;
        return {
            ngModule: SearchModule
        };
    };
    SearchModule.decorators = [
        { type: NgModule, args: [{
                    declarations: [
                        SearchAppComponent,
                        SearchPanelComponent,
                        SearchResultSummaryComponent,
                        SearchResultItemComponent,
                        IndexedFilesListComponent,
                        IndexedFileComponent,
                        SearchBrowseFilesModalComponent
                    ],
                    imports: [
                        BrowserModule,
                        CommonComponentsModule,
                        HttpClientModule,
                        FontAwesomeModule,
                        TranslateModule.forRoot()
                    ],
                    exports: [
                        SearchAppComponent,
                        CommonComponentsModule,
                        SearchPanelComponent,
                        SearchResultSummaryComponent,
                        SearchResultItemComponent,
                        IndexedFilesListComponent,
                        IndexedFileComponent,
                        SearchBrowseFilesModalComponent
                    ],
                    providers: [
                        SearchService,
                        ConfigService,
                        SearchConfigService,
                        {
                            provide: HTTP_INTERCEPTORS,
                            useClass: ErrorInterceptorService,
                            multi: true
                        },
                        {
                            provide: APP_INITIALIZER,
                            useFactory: initializeApp,
                            deps: [SearchConfigService], multi: true
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
    return SearchModule;
}());
export { SearchModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VhcmNoLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bncm91cGRvY3MuZXhhbXBsZXMuYW5ndWxhci9zZWFyY2gvIiwic291cmNlcyI6WyJsaWIvc2VhcmNoLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFDLGFBQWEsRUFBQyxNQUFNLDJCQUEyQixDQUFDO0FBQ3hELE9BQU8sRUFBQyxlQUFlLEVBQXVCLFFBQVEsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUM3RSxPQUFPLEVBQUMsaUJBQWlCLEVBQUUsZ0JBQWdCLEVBQUMsTUFBTSxzQkFBc0IsQ0FBQztBQUN6RSxPQUFPLEVBQUMsa0JBQWtCLEVBQUMsTUFBTSx3QkFBd0IsQ0FBQztBQUMxRCxPQUFPLEVBQ0wsR0FBRyxFQUNILHNCQUFzQixFQUN0Qix1QkFBdUIsRUFBRSw2QkFBNkIsRUFDdEQsa0JBQWtCLEVBQ25CLE1BQU0sK0NBQStDLENBQUM7QUFDdkQsT0FBTyxFQUFDLGFBQWEsRUFBQyxNQUFNLGtCQUFrQixDQUFDO0FBQy9DLE9BQU8sRUFBQyxhQUFhLEVBQUMsTUFBTSwrQ0FBK0MsQ0FBQztBQUM1RSxPQUFPLEVBQUMsbUJBQW1CLEVBQUMsTUFBTSx5QkFBeUIsQ0FBQztBQUM1RCxPQUFPLEVBQUMsaUJBQWlCLEVBQUMsTUFBTSxrQ0FBa0MsQ0FBQztBQUNuRSxPQUFPLEVBQUMsb0JBQW9CLEVBQUMsTUFBTSx1Q0FBdUMsQ0FBQztBQUMzRSxPQUFPLEVBQUMsNEJBQTRCLEVBQUMsTUFBTSx5REFBeUQsQ0FBQztBQUNyRyxPQUFPLEVBQUMseUJBQXlCLEVBQUMsTUFBTSxtREFBbUQsQ0FBQztBQUM1RixPQUFPLEVBQUMseUJBQXlCLEVBQUMsTUFBTSxtREFBbUQsQ0FBQztBQUM1RixPQUFPLEVBQUMsb0JBQW9CLEVBQUMsTUFBTSx1Q0FBdUMsQ0FBQztBQUMzRSxPQUFPLEVBQUMsK0JBQStCLEVBQUMsTUFBTSxpRUFBaUUsQ0FBQztBQUNoSCxPQUFPLEVBQUMsZUFBZSxFQUFDLE1BQU0scUJBQXFCLENBQUM7Ozs7O0FBRXBELE1BQU0sVUFBVSxhQUFhLENBQUMsbUJBQXdDOztRQUM5RCxNQUFNOzs7SUFBRyxjQUFNLE9BQUEsbUJBQW1CLENBQUMsSUFBSSxFQUFFLEVBQTFCLENBQTBCLENBQUE7SUFDL0MsT0FBTyxNQUFNLENBQUM7QUFDaEIsQ0FBQzs7Ozs7OztBQUlELE1BQU0sVUFBVSx1QkFBdUIsQ0FBQyxPQUEyQjtJQUNqRSxPQUFPLElBQUksNkJBQTZCLENBQUMsT0FBTyxDQUFDLENBQUM7QUFDcEQsQ0FBQztBQUVEO0lBQUE7SUF5REEsQ0FBQzs7Ozs7SUFOUSxvQkFBTzs7OztJQUFkLFVBQWUsV0FBbUI7UUFDaEMsR0FBRyxDQUFDLG9CQUFvQixHQUFHLFdBQVcsQ0FBQztRQUN2QyxPQUFPO1lBQ0wsUUFBUSxFQUFFLFlBQVk7U0FDdkIsQ0FBQztJQUNKLENBQUM7O2dCQXhERixRQUFRLFNBQUM7b0JBQ1IsWUFBWSxFQUFFO3dCQUNaLGtCQUFrQjt3QkFDbEIsb0JBQW9CO3dCQUNwQiw0QkFBNEI7d0JBQzVCLHlCQUF5Qjt3QkFDekIseUJBQXlCO3dCQUN6QixvQkFBb0I7d0JBQ3BCLCtCQUErQjtxQkFDaEM7b0JBQ0QsT0FBTyxFQUFFO3dCQUNQLGFBQWE7d0JBQ2Isc0JBQXNCO3dCQUN0QixnQkFBZ0I7d0JBQ2hCLGlCQUFpQjt3QkFDakIsZUFBZSxDQUFDLE9BQU8sRUFBRTtxQkFDMUI7b0JBQ0QsT0FBTyxFQUFFO3dCQUNQLGtCQUFrQjt3QkFDbEIsc0JBQXNCO3dCQUN0QixvQkFBb0I7d0JBQ3BCLDRCQUE0Qjt3QkFDNUIseUJBQXlCO3dCQUN6Qix5QkFBeUI7d0JBQ3pCLG9CQUFvQjt3QkFDcEIsK0JBQStCO3FCQUNoQztvQkFDRCxTQUFTLEVBQUU7d0JBQ1QsYUFBYTt3QkFDYixhQUFhO3dCQUNiLG1CQUFtQjt3QkFDbkI7NEJBQ0UsT0FBTyxFQUFFLGlCQUFpQjs0QkFDMUIsUUFBUSxFQUFFLHVCQUF1Qjs0QkFDakMsS0FBSyxFQUFFLElBQUk7eUJBQ1o7d0JBQ0Q7NEJBQ0UsT0FBTyxFQUFFLGVBQWU7NEJBQ3hCLFVBQVUsRUFBRSxhQUFhOzRCQUN6QixJQUFJLEVBQUUsQ0FBQyxtQkFBbUIsQ0FBQyxFQUFFLEtBQUssRUFBRSxJQUFJO3lCQUN6Qzt3QkFDRCxrQkFBa0I7d0JBQ2xCOzRCQUNFLE9BQU8sRUFBRSxpQkFBaUI7NEJBQzFCLFVBQVUsRUFBRSx1QkFBdUI7NEJBQ25DLEtBQUssRUFBRSxJQUFJOzRCQUNYLElBQUksRUFBRSxDQUFDLGtCQUFrQixDQUFDO3lCQUMzQjtxQkFDRjtpQkFDRjs7SUFRRCxtQkFBQztDQUFBLEFBekRELElBeURDO1NBUFksWUFBWSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7QnJvd3Nlck1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3Nlcic7XHJcbmltcG9ydCB7QVBQX0lOSVRJQUxJWkVSLCBNb2R1bGVXaXRoUHJvdmlkZXJzLCBOZ01vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7SFRUUF9JTlRFUkNFUFRPUlMsIEh0dHBDbGllbnRNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcclxuaW1wb3J0IHtTZWFyY2hBcHBDb21wb25lbnR9IGZyb20gJy4vc2VhcmNoLWFwcC5jb21wb25lbnQnO1xyXG5pbXBvcnQge1xyXG4gIEFwaSxcclxuICBDb21tb25Db21wb25lbnRzTW9kdWxlLFxyXG4gIEVycm9ySW50ZXJjZXB0b3JTZXJ2aWNlLCBMb2FkaW5nTWFza0ludGVyY2VwdG9yU2VydmljZSxcclxuICBMb2FkaW5nTWFza1NlcnZpY2VcclxufSBmcm9tICdAZ3JvdXBkb2NzLmV4YW1wbGVzLmFuZ3VsYXIvY29tbW9uLWNvbXBvbmVudHMnO1xyXG5pbXBvcnQge1NlYXJjaFNlcnZpY2V9IGZyb20gXCIuL3NlYXJjaC5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7Q29uZmlnU2VydmljZX0gZnJvbSBcIkBncm91cGRvY3MuZXhhbXBsZXMuYW5ndWxhci9jb21tb24tY29tcG9uZW50c1wiO1xyXG5pbXBvcnQge1NlYXJjaENvbmZpZ1NlcnZpY2V9IGZyb20gXCIuL3NlYXJjaC1jb25maWcuc2VydmljZVwiO1xyXG5pbXBvcnQge0ZvbnRBd2Vzb21lTW9kdWxlfSBmcm9tICdAZm9ydGF3ZXNvbWUvYW5ndWxhci1mb250YXdlc29tZSc7XHJcbmltcG9ydCB7U2VhcmNoUGFuZWxDb21wb25lbnR9IGZyb20gJy4vc2VhcmNoLXBhbmVsL3NlYXJjaC1wYW5lbC5jb21wb25lbnQnO1xyXG5pbXBvcnQge1NlYXJjaFJlc3VsdFN1bW1hcnlDb21wb25lbnR9IGZyb20gJy4vc2VhcmNoLXJlc3VsdC1zdW1tYXJ5L3NlYXJjaC1yZXN1bHQtc3VtbWFyeS5jb21wb25lbnQnO1xyXG5pbXBvcnQge1NlYXJjaFJlc3VsdEl0ZW1Db21wb25lbnR9IGZyb20gJy4vc2VhcmNoLXJlc3VsdC1pdGVtL3NlYXJjaC1yZXN1bHQtaXRlbS5jb21wb25lbnQnO1xyXG5pbXBvcnQge0luZGV4ZWRGaWxlc0xpc3RDb21wb25lbnR9IGZyb20gJy4vaW5kZXhlZC1maWxlcy1saXN0L2luZGV4ZWQtZmlsZXMtbGlzdC5jb21wb25lbnQnO1xyXG5pbXBvcnQge0luZGV4ZWRGaWxlQ29tcG9uZW50fSBmcm9tICcuL2luZGV4ZWQtZmlsZS9pbmRleGVkLWZpbGUuY29tcG9uZW50JztcclxuaW1wb3J0IHtTZWFyY2hCcm93c2VGaWxlc01vZGFsQ29tcG9uZW50fSBmcm9tICcuL3NlYXJjaC1icm93c2UtZmlsZXMtbW9kYWwvc2VhcmNoLWJyb3dzZS1maWxlcy1tb2RhbC5jb21wb25lbnQnO1xyXG5pbXBvcnQge1RyYW5zbGF0ZU1vZHVsZX0gZnJvbSAnQG5neC10cmFuc2xhdGUvY29yZSc7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gaW5pdGlhbGl6ZUFwcChzZWFyY2hDb25maWdTZXJ2aWNlOiBTZWFyY2hDb25maWdTZXJ2aWNlKSB7XHJcbiAgY29uc3QgcmVzdWx0ID0gKCkgPT4gc2VhcmNoQ29uZmlnU2VydmljZS5sb2FkKCk7XHJcbiAgcmV0dXJuIHJlc3VsdDtcclxufVxyXG5cclxuLy8gTk9URTogdGhpcyBpcyByZXF1aXJlZCBkdXJpbmcgbGlicmFyeSBjb21waWxhdGlvbiBzZWUgaHR0cHM6Ly9naXRodWIuY29tL2FuZ3VsYXIvYW5ndWxhci9pc3N1ZXMvMjM2MjkjaXNzdWVjb21tZW50LTQ0MDk0Mjk4MVxyXG4vLyBAZHluYW1pY1xyXG5leHBvcnQgZnVuY3Rpb24gc2V0dXBMb2FkaW5nSW50ZXJjZXB0b3Ioc2VydmljZTogTG9hZGluZ01hc2tTZXJ2aWNlKSB7XHJcbiAgcmV0dXJuIG5ldyBMb2FkaW5nTWFza0ludGVyY2VwdG9yU2VydmljZShzZXJ2aWNlKTtcclxufVxyXG5cclxuQE5nTW9kdWxlKHtcclxuICBkZWNsYXJhdGlvbnM6IFtcclxuICAgIFNlYXJjaEFwcENvbXBvbmVudCxcclxuICAgIFNlYXJjaFBhbmVsQ29tcG9uZW50LFxyXG4gICAgU2VhcmNoUmVzdWx0U3VtbWFyeUNvbXBvbmVudCxcclxuICAgIFNlYXJjaFJlc3VsdEl0ZW1Db21wb25lbnQsXHJcbiAgICBJbmRleGVkRmlsZXNMaXN0Q29tcG9uZW50LFxyXG4gICAgSW5kZXhlZEZpbGVDb21wb25lbnQsXHJcbiAgICBTZWFyY2hCcm93c2VGaWxlc01vZGFsQ29tcG9uZW50XHJcbiAgXSxcclxuICBpbXBvcnRzOiBbXHJcbiAgICBCcm93c2VyTW9kdWxlLFxyXG4gICAgQ29tbW9uQ29tcG9uZW50c01vZHVsZSxcclxuICAgIEh0dHBDbGllbnRNb2R1bGUsXHJcbiAgICBGb250QXdlc29tZU1vZHVsZSxcclxuICAgIFRyYW5zbGF0ZU1vZHVsZS5mb3JSb290KClcclxuICBdLFxyXG4gIGV4cG9ydHM6IFtcclxuICAgIFNlYXJjaEFwcENvbXBvbmVudCxcclxuICAgIENvbW1vbkNvbXBvbmVudHNNb2R1bGUsXHJcbiAgICBTZWFyY2hQYW5lbENvbXBvbmVudCxcclxuICAgIFNlYXJjaFJlc3VsdFN1bW1hcnlDb21wb25lbnQsXHJcbiAgICBTZWFyY2hSZXN1bHRJdGVtQ29tcG9uZW50LFxyXG4gICAgSW5kZXhlZEZpbGVzTGlzdENvbXBvbmVudCxcclxuICAgIEluZGV4ZWRGaWxlQ29tcG9uZW50LFxyXG4gICAgU2VhcmNoQnJvd3NlRmlsZXNNb2RhbENvbXBvbmVudFxyXG4gIF0sXHJcbiAgcHJvdmlkZXJzOiBbXHJcbiAgICBTZWFyY2hTZXJ2aWNlLFxyXG4gICAgQ29uZmlnU2VydmljZSxcclxuICAgIFNlYXJjaENvbmZpZ1NlcnZpY2UsXHJcbiAgICB7XHJcbiAgICAgIHByb3ZpZGU6IEhUVFBfSU5URVJDRVBUT1JTLFxyXG4gICAgICB1c2VDbGFzczogRXJyb3JJbnRlcmNlcHRvclNlcnZpY2UsXHJcbiAgICAgIG11bHRpOiB0cnVlXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBwcm92aWRlOiBBUFBfSU5JVElBTElaRVIsXHJcbiAgICAgIHVzZUZhY3Rvcnk6IGluaXRpYWxpemVBcHAsXHJcbiAgICAgIGRlcHM6IFtTZWFyY2hDb25maWdTZXJ2aWNlXSwgbXVsdGk6IHRydWVcclxuICAgIH0sXHJcbiAgICBMb2FkaW5nTWFza1NlcnZpY2UsXHJcbiAgICB7XHJcbiAgICAgIHByb3ZpZGU6IEhUVFBfSU5URVJDRVBUT1JTLFxyXG4gICAgICB1c2VGYWN0b3J5OiBzZXR1cExvYWRpbmdJbnRlcmNlcHRvcixcclxuICAgICAgbXVsdGk6IHRydWUsXHJcbiAgICAgIGRlcHM6IFtMb2FkaW5nTWFza1NlcnZpY2VdXHJcbiAgICB9XHJcbiAgXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgU2VhcmNoTW9kdWxlIHtcclxuICBzdGF0aWMgZm9yUm9vdChhcGlFbmRwb2ludDogc3RyaW5nKTogTW9kdWxlV2l0aFByb3ZpZGVycyB7XHJcbiAgICBBcGkuREVGQVVMVF9BUElfRU5EUE9JTlQgPSBhcGlFbmRwb2ludDtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIG5nTW9kdWxlOiBTZWFyY2hNb2R1bGVcclxuICAgIH07XHJcbiAgfVxyXG59XHJcbiJdfQ==