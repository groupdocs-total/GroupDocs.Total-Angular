/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { BrowserModule } from '@angular/platform-browser';
import { APP_INITIALIZER, NgModule } from '@angular/core';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { ViewerAppComponent } from './viewer-app.component';
import { CommonComponentsModule, ErrorInterceptorService } from "@groupdocs.examples.angular/common-components";
import { ViewerService } from "./viewer.service";
import { ConfigService } from "@groupdocs.examples.angular/common-components";
import { ViewerConfigService } from "./viewer-config.service";
import { ThumbnailsComponent } from './thumbnails/thumbnails.component';
/**
 * @param {?} viewerConfigService
 * @return {?}
 */
export function initializeApp(viewerConfigService) {
    /** @type {?} */
    var result = (/**
     * @return {?}
     */
    function () { return viewerConfigService.load(); });
    return result;
}
var ViewerModule = /** @class */ (function () {
    function ViewerModule() {
    }
    ViewerModule.decorators = [
        { type: NgModule, args: [{
                    declarations: [
                        ViewerAppComponent,
                        ThumbnailsComponent
                    ],
                    imports: [
                        BrowserModule,
                        CommonComponentsModule,
                        HttpClientModule
                    ],
                    exports: [
                        ViewerAppComponent,
                        ThumbnailsComponent,
                        CommonComponentsModule
                    ],
                    providers: [
                        ViewerService,
                        ConfigService,
                        ViewerConfigService,
                        {
                            provide: HTTP_INTERCEPTORS,
                            useClass: ErrorInterceptorService,
                            multi: true
                        },
                        {
                            provide: APP_INITIALIZER,
                            useFactory: initializeApp,
                            deps: [ViewerConfigService], multi: true
                        }
                    ]
                },] }
    ];
    return ViewerModule;
}());
export { ViewerModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmlld2VyLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bncm91cGRvY3MuZXhhbXBsZXMuYW5ndWxhci92aWV3ZXIvIiwic291cmNlcyI6WyJsaWIvdmlld2VyLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFDLGFBQWEsRUFBQyxNQUFNLDJCQUEyQixDQUFDO0FBQ3hELE9BQU8sRUFBQyxlQUFlLEVBQUUsUUFBUSxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQ3hELE9BQU8sRUFBQyxpQkFBaUIsRUFBRSxnQkFBZ0IsRUFBQyxNQUFNLHNCQUFzQixDQUFDO0FBQ3pFLE9BQU8sRUFBQyxrQkFBa0IsRUFBQyxNQUFNLHdCQUF3QixDQUFDO0FBQzFELE9BQU8sRUFBQyxzQkFBc0IsRUFBRSx1QkFBdUIsRUFBQyxNQUFNLCtDQUErQyxDQUFDO0FBQzlHLE9BQU8sRUFBQyxhQUFhLEVBQUMsTUFBTSxrQkFBa0IsQ0FBQztBQUMvQyxPQUFPLEVBQUMsYUFBYSxFQUFDLE1BQU0sK0NBQStDLENBQUM7QUFDNUUsT0FBTyxFQUFDLG1CQUFtQixFQUFDLE1BQU0seUJBQXlCLENBQUM7QUFDNUQsT0FBTyxFQUFDLG1CQUFtQixFQUFDLE1BQU0sbUNBQW1DLENBQUM7Ozs7O0FBRXRFLE1BQU0sVUFBVSxhQUFhLENBQUMsbUJBQXdDOztRQUM5RCxNQUFNOzs7SUFBSSxjQUFNLE9BQUEsbUJBQW1CLENBQUMsSUFBSSxFQUFFLEVBQTFCLENBQTBCLENBQUE7SUFDaEQsT0FBTyxNQUFNLENBQUM7QUFDaEIsQ0FBQztBQUVEO0lBQUE7SUErQkEsQ0FBQzs7Z0JBL0JBLFFBQVEsU0FBQztvQkFDUixZQUFZLEVBQUU7d0JBQ1osa0JBQWtCO3dCQUNsQixtQkFBbUI7cUJBQUM7b0JBQ3RCLE9BQU8sRUFBRTt3QkFDUCxhQUFhO3dCQUNiLHNCQUFzQjt3QkFDdEIsZ0JBQWdCO3FCQUNqQjtvQkFDRCxPQUFPLEVBQUc7d0JBQ1Isa0JBQWtCO3dCQUNsQixtQkFBbUI7d0JBQ25CLHNCQUFzQjtxQkFDdkI7b0JBQ0QsU0FBUyxFQUFFO3dCQUNULGFBQWE7d0JBQ2IsYUFBYTt3QkFDYixtQkFBbUI7d0JBQ25COzRCQUNFLE9BQU8sRUFBRSxpQkFBaUI7NEJBQzFCLFFBQVEsRUFBRSx1QkFBdUI7NEJBQ2pDLEtBQUssRUFBRSxJQUFJO3lCQUNaO3dCQUNEOzRCQUNFLE9BQU8sRUFBRSxlQUFlOzRCQUN4QixVQUFVLEVBQUUsYUFBYTs0QkFDekIsSUFBSSxFQUFFLENBQUMsbUJBQW1CLENBQUMsRUFBRSxLQUFLLEVBQUUsSUFBSTt5QkFDekM7cUJBQ0Y7aUJBQ0Y7O0lBRUQsbUJBQUM7Q0FBQSxBQS9CRCxJQStCQztTQURZLFlBQVkiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0Jyb3dzZXJNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXInO1xuaW1wb3J0IHtBUFBfSU5JVElBTElaRVIsIE5nTW9kdWxlfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7SFRUUF9JTlRFUkNFUFRPUlMsIEh0dHBDbGllbnRNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcbmltcG9ydCB7Vmlld2VyQXBwQ29tcG9uZW50fSBmcm9tICcuL3ZpZXdlci1hcHAuY29tcG9uZW50JztcbmltcG9ydCB7Q29tbW9uQ29tcG9uZW50c01vZHVsZSwgRXJyb3JJbnRlcmNlcHRvclNlcnZpY2V9IGZyb20gXCJAZ3JvdXBkb2NzLmV4YW1wbGVzLmFuZ3VsYXIvY29tbW9uLWNvbXBvbmVudHNcIjtcbmltcG9ydCB7Vmlld2VyU2VydmljZX0gZnJvbSBcIi4vdmlld2VyLnNlcnZpY2VcIjtcbmltcG9ydCB7Q29uZmlnU2VydmljZX0gZnJvbSBcIkBncm91cGRvY3MuZXhhbXBsZXMuYW5ndWxhci9jb21tb24tY29tcG9uZW50c1wiO1xuaW1wb3J0IHtWaWV3ZXJDb25maWdTZXJ2aWNlfSBmcm9tIFwiLi92aWV3ZXItY29uZmlnLnNlcnZpY2VcIjtcbmltcG9ydCB7VGh1bWJuYWlsc0NvbXBvbmVudH0gZnJvbSAnLi90aHVtYm5haWxzL3RodW1ibmFpbHMuY29tcG9uZW50JztcblxuZXhwb3J0IGZ1bmN0aW9uIGluaXRpYWxpemVBcHAodmlld2VyQ29uZmlnU2VydmljZTogVmlld2VyQ29uZmlnU2VydmljZSkge1xuICBjb25zdCByZXN1bHQgPSAgKCkgPT4gdmlld2VyQ29uZmlnU2VydmljZS5sb2FkKCk7XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbkBOZ01vZHVsZSh7XG4gIGRlY2xhcmF0aW9uczogW1xuICAgIFZpZXdlckFwcENvbXBvbmVudCxcbiAgICBUaHVtYm5haWxzQ29tcG9uZW50XSxcbiAgaW1wb3J0czogW1xuICAgIEJyb3dzZXJNb2R1bGUsXG4gICAgQ29tbW9uQ29tcG9uZW50c01vZHVsZSxcbiAgICBIdHRwQ2xpZW50TW9kdWxlXG4gIF0sXG4gIGV4cG9ydHMgOiBbXG4gICAgVmlld2VyQXBwQ29tcG9uZW50LFxuICAgIFRodW1ibmFpbHNDb21wb25lbnQsXG4gICAgQ29tbW9uQ29tcG9uZW50c01vZHVsZVxuICBdLFxuICBwcm92aWRlcnM6IFtcbiAgICBWaWV3ZXJTZXJ2aWNlLFxuICAgIENvbmZpZ1NlcnZpY2UsXG4gICAgVmlld2VyQ29uZmlnU2VydmljZSxcbiAgICB7XG4gICAgICBwcm92aWRlOiBIVFRQX0lOVEVSQ0VQVE9SUyxcbiAgICAgIHVzZUNsYXNzOiBFcnJvckludGVyY2VwdG9yU2VydmljZSxcbiAgICAgIG11bHRpOiB0cnVlXG4gICAgfSxcbiAgICB7XG4gICAgICBwcm92aWRlOiBBUFBfSU5JVElBTElaRVIsXG4gICAgICB1c2VGYWN0b3J5OiBpbml0aWFsaXplQXBwLFxuICAgICAgZGVwczogW1ZpZXdlckNvbmZpZ1NlcnZpY2VdLCBtdWx0aTogdHJ1ZVxuICAgIH1cbiAgXVxufSlcbmV4cG9ydCBjbGFzcyBWaWV3ZXJNb2R1bGUge1xufVxuIl19