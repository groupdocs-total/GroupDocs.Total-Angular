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
/**
 * @param {?} searchConfigService
 * @return {?}
 */
export function initializeApp(searchConfigService) {
    /** @type {?} */
    const result = (/**
     * @return {?}
     */
    () => searchConfigService.load());
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
export class SearchModule {
    /**
     * @param {?} apiEndpoint
     * @return {?}
     */
    static forRoot(apiEndpoint) {
        Api.DEFAULT_API_ENDPOINT = apiEndpoint;
        return {
            ngModule: SearchModule
        };
    }
}
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
                    FontAwesomeModule
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VhcmNoLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bncm91cGRvY3MuZXhhbXBsZXMuYW5ndWxhci9zZWFyY2gvIiwic291cmNlcyI6WyJsaWIvc2VhcmNoLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFDLGFBQWEsRUFBQyxNQUFNLDJCQUEyQixDQUFDO0FBQ3hELE9BQU8sRUFBQyxlQUFlLEVBQXVCLFFBQVEsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUM3RSxPQUFPLEVBQUMsaUJBQWlCLEVBQUUsZ0JBQWdCLEVBQUMsTUFBTSxzQkFBc0IsQ0FBQztBQUN6RSxPQUFPLEVBQUMsa0JBQWtCLEVBQUMsTUFBTSx3QkFBd0IsQ0FBQztBQUMxRCxPQUFPLEVBQ0wsR0FBRyxFQUNILHNCQUFzQixFQUN0Qix1QkFBdUIsRUFBRSw2QkFBNkIsRUFDdEQsa0JBQWtCLEVBQ25CLE1BQU0sK0NBQStDLENBQUM7QUFDdkQsT0FBTyxFQUFDLGFBQWEsRUFBQyxNQUFNLGtCQUFrQixDQUFDO0FBQy9DLE9BQU8sRUFBQyxhQUFhLEVBQUMsTUFBTSwrQ0FBK0MsQ0FBQztBQUM1RSxPQUFPLEVBQUMsbUJBQW1CLEVBQUMsTUFBTSx5QkFBeUIsQ0FBQztBQUM1RCxPQUFPLEVBQUMsaUJBQWlCLEVBQUMsTUFBTSxrQ0FBa0MsQ0FBQztBQUNuRSxPQUFPLEVBQUMsb0JBQW9CLEVBQUMsTUFBTSx1Q0FBdUMsQ0FBQztBQUMzRSxPQUFPLEVBQUMsNEJBQTRCLEVBQUMsTUFBTSx5REFBeUQsQ0FBQztBQUNyRyxPQUFPLEVBQUMseUJBQXlCLEVBQUMsTUFBTSxtREFBbUQsQ0FBQztBQUM1RixPQUFPLEVBQUMseUJBQXlCLEVBQUMsTUFBTSxtREFBbUQsQ0FBQztBQUM1RixPQUFPLEVBQUMsb0JBQW9CLEVBQUMsTUFBTSx1Q0FBdUMsQ0FBQztBQUMzRSxPQUFPLEVBQUMsK0JBQStCLEVBQUMsTUFBTSxpRUFBaUUsQ0FBQzs7Ozs7QUFFaEgsTUFBTSxVQUFVLGFBQWEsQ0FBQyxtQkFBd0M7O1VBQzlELE1BQU07OztJQUFHLEdBQUcsRUFBRSxDQUFDLG1CQUFtQixDQUFDLElBQUksRUFBRSxDQUFBO0lBQy9DLE9BQU8sTUFBTSxDQUFDO0FBQ2hCLENBQUM7Ozs7Ozs7QUFJRCxNQUFNLFVBQVUsdUJBQXVCLENBQUMsT0FBMkI7SUFDakUsT0FBTyxJQUFJLDZCQUE2QixDQUFDLE9BQU8sQ0FBQyxDQUFDO0FBQ3BELENBQUM7QUFtREQsTUFBTSxPQUFPLFlBQVk7Ozs7O0lBQ3ZCLE1BQU0sQ0FBQyxPQUFPLENBQUMsV0FBbUI7UUFDaEMsR0FBRyxDQUFDLG9CQUFvQixHQUFHLFdBQVcsQ0FBQztRQUN2QyxPQUFPO1lBQ0wsUUFBUSxFQUFFLFlBQVk7U0FDdkIsQ0FBQztJQUNKLENBQUM7OztZQXZERixRQUFRLFNBQUM7Z0JBQ1IsWUFBWSxFQUFFO29CQUNaLGtCQUFrQjtvQkFDbEIsb0JBQW9CO29CQUNwQiw0QkFBNEI7b0JBQzVCLHlCQUF5QjtvQkFDekIseUJBQXlCO29CQUN6QixvQkFBb0I7b0JBQ3BCLCtCQUErQjtpQkFDaEM7Z0JBQ0QsT0FBTyxFQUFFO29CQUNQLGFBQWE7b0JBQ2Isc0JBQXNCO29CQUN0QixnQkFBZ0I7b0JBQ2hCLGlCQUFpQjtpQkFDbEI7Z0JBQ0QsT0FBTyxFQUFFO29CQUNQLGtCQUFrQjtvQkFDbEIsc0JBQXNCO29CQUN0QixvQkFBb0I7b0JBQ3BCLDRCQUE0QjtvQkFDNUIseUJBQXlCO29CQUN6Qix5QkFBeUI7b0JBQ3pCLG9CQUFvQjtvQkFDcEIsK0JBQStCO2lCQUNoQztnQkFDRCxTQUFTLEVBQUU7b0JBQ1QsYUFBYTtvQkFDYixhQUFhO29CQUNiLG1CQUFtQjtvQkFDbkI7d0JBQ0UsT0FBTyxFQUFFLGlCQUFpQjt3QkFDMUIsUUFBUSxFQUFFLHVCQUF1Qjt3QkFDakMsS0FBSyxFQUFFLElBQUk7cUJBQ1o7b0JBQ0Q7d0JBQ0UsT0FBTyxFQUFFLGVBQWU7d0JBQ3hCLFVBQVUsRUFBRSxhQUFhO3dCQUN6QixJQUFJLEVBQUUsQ0FBQyxtQkFBbUIsQ0FBQyxFQUFFLEtBQUssRUFBRSxJQUFJO3FCQUN6QztvQkFDRCxrQkFBa0I7b0JBQ2xCO3dCQUNFLE9BQU8sRUFBRSxpQkFBaUI7d0JBQzFCLFVBQVUsRUFBRSx1QkFBdUI7d0JBQ25DLEtBQUssRUFBRSxJQUFJO3dCQUNYLElBQUksRUFBRSxDQUFDLGtCQUFrQixDQUFDO3FCQUMzQjtpQkFDRjthQUNGIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtCcm93c2VyTW9kdWxlfSBmcm9tICdAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyJztcclxuaW1wb3J0IHtBUFBfSU5JVElBTElaRVIsIE1vZHVsZVdpdGhQcm92aWRlcnMsIE5nTW9kdWxlfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHtIVFRQX0lOVEVSQ0VQVE9SUywgSHR0cENsaWVudE1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xyXG5pbXBvcnQge1NlYXJjaEFwcENvbXBvbmVudH0gZnJvbSAnLi9zZWFyY2gtYXBwLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7XHJcbiAgQXBpLFxyXG4gIENvbW1vbkNvbXBvbmVudHNNb2R1bGUsXHJcbiAgRXJyb3JJbnRlcmNlcHRvclNlcnZpY2UsIExvYWRpbmdNYXNrSW50ZXJjZXB0b3JTZXJ2aWNlLFxyXG4gIExvYWRpbmdNYXNrU2VydmljZVxyXG59IGZyb20gJ0Bncm91cGRvY3MuZXhhbXBsZXMuYW5ndWxhci9jb21tb24tY29tcG9uZW50cyc7XHJcbmltcG9ydCB7U2VhcmNoU2VydmljZX0gZnJvbSBcIi4vc2VhcmNoLnNlcnZpY2VcIjtcclxuaW1wb3J0IHtDb25maWdTZXJ2aWNlfSBmcm9tIFwiQGdyb3VwZG9jcy5leGFtcGxlcy5hbmd1bGFyL2NvbW1vbi1jb21wb25lbnRzXCI7XHJcbmltcG9ydCB7U2VhcmNoQ29uZmlnU2VydmljZX0gZnJvbSBcIi4vc2VhcmNoLWNvbmZpZy5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7Rm9udEF3ZXNvbWVNb2R1bGV9IGZyb20gJ0Bmb3J0YXdlc29tZS9hbmd1bGFyLWZvbnRhd2Vzb21lJztcclxuaW1wb3J0IHtTZWFyY2hQYW5lbENvbXBvbmVudH0gZnJvbSAnLi9zZWFyY2gtcGFuZWwvc2VhcmNoLXBhbmVsLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7U2VhcmNoUmVzdWx0U3VtbWFyeUNvbXBvbmVudH0gZnJvbSAnLi9zZWFyY2gtcmVzdWx0LXN1bW1hcnkvc2VhcmNoLXJlc3VsdC1zdW1tYXJ5LmNvbXBvbmVudCc7XHJcbmltcG9ydCB7U2VhcmNoUmVzdWx0SXRlbUNvbXBvbmVudH0gZnJvbSAnLi9zZWFyY2gtcmVzdWx0LWl0ZW0vc2VhcmNoLXJlc3VsdC1pdGVtLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7SW5kZXhlZEZpbGVzTGlzdENvbXBvbmVudH0gZnJvbSAnLi9pbmRleGVkLWZpbGVzLWxpc3QvaW5kZXhlZC1maWxlcy1saXN0LmNvbXBvbmVudCc7XHJcbmltcG9ydCB7SW5kZXhlZEZpbGVDb21wb25lbnR9IGZyb20gJy4vaW5kZXhlZC1maWxlL2luZGV4ZWQtZmlsZS5jb21wb25lbnQnO1xyXG5pbXBvcnQge1NlYXJjaEJyb3dzZUZpbGVzTW9kYWxDb21wb25lbnR9IGZyb20gJy4vc2VhcmNoLWJyb3dzZS1maWxlcy1tb2RhbC9zZWFyY2gtYnJvd3NlLWZpbGVzLW1vZGFsLmNvbXBvbmVudCc7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gaW5pdGlhbGl6ZUFwcChzZWFyY2hDb25maWdTZXJ2aWNlOiBTZWFyY2hDb25maWdTZXJ2aWNlKSB7XHJcbiAgY29uc3QgcmVzdWx0ID0gKCkgPT4gc2VhcmNoQ29uZmlnU2VydmljZS5sb2FkKCk7XHJcbiAgcmV0dXJuIHJlc3VsdDtcclxufVxyXG5cclxuLy8gTk9URTogdGhpcyBpcyByZXF1aXJlZCBkdXJpbmcgbGlicmFyeSBjb21waWxhdGlvbiBzZWUgaHR0cHM6Ly9naXRodWIuY29tL2FuZ3VsYXIvYW5ndWxhci9pc3N1ZXMvMjM2MjkjaXNzdWVjb21tZW50LTQ0MDk0Mjk4MVxyXG4vLyBAZHluYW1pY1xyXG5leHBvcnQgZnVuY3Rpb24gc2V0dXBMb2FkaW5nSW50ZXJjZXB0b3Ioc2VydmljZTogTG9hZGluZ01hc2tTZXJ2aWNlKSB7XHJcbiAgcmV0dXJuIG5ldyBMb2FkaW5nTWFza0ludGVyY2VwdG9yU2VydmljZShzZXJ2aWNlKTtcclxufVxyXG5cclxuQE5nTW9kdWxlKHtcclxuICBkZWNsYXJhdGlvbnM6IFtcclxuICAgIFNlYXJjaEFwcENvbXBvbmVudCxcclxuICAgIFNlYXJjaFBhbmVsQ29tcG9uZW50LFxyXG4gICAgU2VhcmNoUmVzdWx0U3VtbWFyeUNvbXBvbmVudCxcclxuICAgIFNlYXJjaFJlc3VsdEl0ZW1Db21wb25lbnQsXHJcbiAgICBJbmRleGVkRmlsZXNMaXN0Q29tcG9uZW50LFxyXG4gICAgSW5kZXhlZEZpbGVDb21wb25lbnQsXHJcbiAgICBTZWFyY2hCcm93c2VGaWxlc01vZGFsQ29tcG9uZW50XHJcbiAgXSxcclxuICBpbXBvcnRzOiBbXHJcbiAgICBCcm93c2VyTW9kdWxlLFxyXG4gICAgQ29tbW9uQ29tcG9uZW50c01vZHVsZSxcclxuICAgIEh0dHBDbGllbnRNb2R1bGUsXHJcbiAgICBGb250QXdlc29tZU1vZHVsZVxyXG4gIF0sXHJcbiAgZXhwb3J0czogW1xyXG4gICAgU2VhcmNoQXBwQ29tcG9uZW50LFxyXG4gICAgQ29tbW9uQ29tcG9uZW50c01vZHVsZSxcclxuICAgIFNlYXJjaFBhbmVsQ29tcG9uZW50LFxyXG4gICAgU2VhcmNoUmVzdWx0U3VtbWFyeUNvbXBvbmVudCxcclxuICAgIFNlYXJjaFJlc3VsdEl0ZW1Db21wb25lbnQsXHJcbiAgICBJbmRleGVkRmlsZXNMaXN0Q29tcG9uZW50LFxyXG4gICAgSW5kZXhlZEZpbGVDb21wb25lbnQsXHJcbiAgICBTZWFyY2hCcm93c2VGaWxlc01vZGFsQ29tcG9uZW50XHJcbiAgXSxcclxuICBwcm92aWRlcnM6IFtcclxuICAgIFNlYXJjaFNlcnZpY2UsXHJcbiAgICBDb25maWdTZXJ2aWNlLFxyXG4gICAgU2VhcmNoQ29uZmlnU2VydmljZSxcclxuICAgIHtcclxuICAgICAgcHJvdmlkZTogSFRUUF9JTlRFUkNFUFRPUlMsXHJcbiAgICAgIHVzZUNsYXNzOiBFcnJvckludGVyY2VwdG9yU2VydmljZSxcclxuICAgICAgbXVsdGk6IHRydWVcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIHByb3ZpZGU6IEFQUF9JTklUSUFMSVpFUixcclxuICAgICAgdXNlRmFjdG9yeTogaW5pdGlhbGl6ZUFwcCxcclxuICAgICAgZGVwczogW1NlYXJjaENvbmZpZ1NlcnZpY2VdLCBtdWx0aTogdHJ1ZVxyXG4gICAgfSxcclxuICAgIExvYWRpbmdNYXNrU2VydmljZSxcclxuICAgIHtcclxuICAgICAgcHJvdmlkZTogSFRUUF9JTlRFUkNFUFRPUlMsXHJcbiAgICAgIHVzZUZhY3Rvcnk6IHNldHVwTG9hZGluZ0ludGVyY2VwdG9yLFxyXG4gICAgICBtdWx0aTogdHJ1ZSxcclxuICAgICAgZGVwczogW0xvYWRpbmdNYXNrU2VydmljZV1cclxuICAgIH1cclxuICBdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBTZWFyY2hNb2R1bGUge1xyXG4gIHN0YXRpYyBmb3JSb290KGFwaUVuZHBvaW50OiBzdHJpbmcpOiBNb2R1bGVXaXRoUHJvdmlkZXJzIHtcclxuICAgIEFwaS5ERUZBVUxUX0FQSV9FTkRQT0lOVCA9IGFwaUVuZHBvaW50O1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgbmdNb2R1bGU6IFNlYXJjaE1vZHVsZVxyXG4gICAgfTtcclxuICB9XHJcbn1cclxuIl19