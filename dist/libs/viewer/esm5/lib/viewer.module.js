/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { BrowserModule } from '@angular/platform-browser';
import { APP_INITIALIZER, NgModule } from '@angular/core';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { ViewerAppComponent } from './viewer-app.component';
import { CommonComponentsModule, ErrorInterceptorService } from "@groupdocs.examples.angular/common-components";
import { Angular2FontawesomeModule } from "angular2-fontawesome";
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
                    declarations: [ViewerAppComponent, ThumbnailsComponent],
                    imports: [
                        BrowserModule,
                        CommonComponentsModule,
                        Angular2FontawesomeModule,
                        HttpClientModule
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmlld2VyLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bncm91cGRvY3MuZXhhbXBsZXMuYW5ndWxhci92aWV3ZXIvIiwic291cmNlcyI6WyJsaWIvdmlld2VyLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFDLGFBQWEsRUFBQyxNQUFNLDJCQUEyQixDQUFDO0FBQ3hELE9BQU8sRUFBQyxlQUFlLEVBQUUsUUFBUSxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQ3hELE9BQU8sRUFBQyxpQkFBaUIsRUFBRSxnQkFBZ0IsRUFBQyxNQUFNLHNCQUFzQixDQUFDO0FBRXpFLE9BQU8sRUFBQyxrQkFBa0IsRUFBQyxNQUFNLHdCQUF3QixDQUFDO0FBQzFELE9BQU8sRUFBQyxzQkFBc0IsRUFBRSx1QkFBdUIsRUFBQyxNQUFNLCtDQUErQyxDQUFDO0FBQzlHLE9BQU8sRUFBQyx5QkFBeUIsRUFBQyxNQUFNLHNCQUFzQixDQUFDO0FBQy9ELE9BQU8sRUFBQyxhQUFhLEVBQUMsTUFBTSxrQkFBa0IsQ0FBQztBQUMvQyxPQUFPLEVBQUMsYUFBYSxFQUFDLE1BQU0sK0NBQStDLENBQUM7QUFDNUUsT0FBTyxFQUFDLG1CQUFtQixFQUFDLE1BQU0seUJBQXlCLENBQUM7QUFDNUQsT0FBTyxFQUFDLG1CQUFtQixFQUFDLE1BQU0sbUNBQW1DLENBQUM7Ozs7O0FBRXRFLE1BQU0sVUFBVSxhQUFhLENBQUMsbUJBQXdDOztRQUM5RCxNQUFNOzs7SUFBSSxjQUFNLE9BQUEsbUJBQW1CLENBQUMsSUFBSSxFQUFFLEVBQTFCLENBQTBCLENBQUE7SUFDaEQsT0FBTyxNQUFNLENBQUM7QUFDaEIsQ0FBQztBQUVEO0lBQUE7SUF5QkEsQ0FBQzs7Z0JBekJBLFFBQVEsU0FBQztvQkFDUixZQUFZLEVBQUUsQ0FBQyxrQkFBa0IsRUFBRSxtQkFBbUIsQ0FBQztvQkFDdkQsT0FBTyxFQUFFO3dCQUNQLGFBQWE7d0JBQ2Isc0JBQXNCO3dCQUN0Qix5QkFBeUI7d0JBQ3pCLGdCQUFnQjtxQkFDakI7b0JBQ0QsU0FBUyxFQUFFO3dCQUNULGFBQWE7d0JBQ2IsYUFBYTt3QkFDYixtQkFBbUI7d0JBQ25COzRCQUNFLE9BQU8sRUFBRSxpQkFBaUI7NEJBQzFCLFFBQVEsRUFBRSx1QkFBdUI7NEJBQ2pDLEtBQUssRUFBRSxJQUFJO3lCQUNaO3dCQUNEOzRCQUNFLE9BQU8sRUFBRSxlQUFlOzRCQUN4QixVQUFVLEVBQUUsYUFBYTs0QkFDekIsSUFBSSxFQUFFLENBQUMsbUJBQW1CLENBQUMsRUFBRSxLQUFLLEVBQUUsSUFBSTt5QkFDekM7cUJBQ0Y7aUJBQ0Y7O0lBRUQsbUJBQUM7Q0FBQSxBQXpCRCxJQXlCQztTQURZLFlBQVkiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0Jyb3dzZXJNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXInO1xuaW1wb3J0IHtBUFBfSU5JVElBTElaRVIsIE5nTW9kdWxlfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7SFRUUF9JTlRFUkNFUFRPUlMsIEh0dHBDbGllbnRNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcblxuaW1wb3J0IHtWaWV3ZXJBcHBDb21wb25lbnR9IGZyb20gJy4vdmlld2VyLWFwcC5jb21wb25lbnQnO1xuaW1wb3J0IHtDb21tb25Db21wb25lbnRzTW9kdWxlLCBFcnJvckludGVyY2VwdG9yU2VydmljZX0gZnJvbSBcIkBncm91cGRvY3MuZXhhbXBsZXMuYW5ndWxhci9jb21tb24tY29tcG9uZW50c1wiO1xuaW1wb3J0IHtBbmd1bGFyMkZvbnRhd2Vzb21lTW9kdWxlfSBmcm9tIFwiYW5ndWxhcjItZm9udGF3ZXNvbWVcIjtcbmltcG9ydCB7Vmlld2VyU2VydmljZX0gZnJvbSBcIi4vdmlld2VyLnNlcnZpY2VcIjtcbmltcG9ydCB7Q29uZmlnU2VydmljZX0gZnJvbSBcIkBncm91cGRvY3MuZXhhbXBsZXMuYW5ndWxhci9jb21tb24tY29tcG9uZW50c1wiO1xuaW1wb3J0IHtWaWV3ZXJDb25maWdTZXJ2aWNlfSBmcm9tIFwiLi92aWV3ZXItY29uZmlnLnNlcnZpY2VcIjtcbmltcG9ydCB7VGh1bWJuYWlsc0NvbXBvbmVudH0gZnJvbSAnLi90aHVtYm5haWxzL3RodW1ibmFpbHMuY29tcG9uZW50JztcblxuZXhwb3J0IGZ1bmN0aW9uIGluaXRpYWxpemVBcHAodmlld2VyQ29uZmlnU2VydmljZTogVmlld2VyQ29uZmlnU2VydmljZSkge1xuICBjb25zdCByZXN1bHQgPSAgKCkgPT4gdmlld2VyQ29uZmlnU2VydmljZS5sb2FkKCk7XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbkBOZ01vZHVsZSh7XG4gIGRlY2xhcmF0aW9uczogW1ZpZXdlckFwcENvbXBvbmVudCwgVGh1bWJuYWlsc0NvbXBvbmVudF0sXG4gIGltcG9ydHM6IFtcbiAgICBCcm93c2VyTW9kdWxlLFxuICAgIENvbW1vbkNvbXBvbmVudHNNb2R1bGUsXG4gICAgQW5ndWxhcjJGb250YXdlc29tZU1vZHVsZSxcbiAgICBIdHRwQ2xpZW50TW9kdWxlXG4gIF0sXG4gIHByb3ZpZGVyczogW1xuICAgIFZpZXdlclNlcnZpY2UsXG4gICAgQ29uZmlnU2VydmljZSxcbiAgICBWaWV3ZXJDb25maWdTZXJ2aWNlLFxuICAgIHtcbiAgICAgIHByb3ZpZGU6IEhUVFBfSU5URVJDRVBUT1JTLFxuICAgICAgdXNlQ2xhc3M6IEVycm9ySW50ZXJjZXB0b3JTZXJ2aWNlLFxuICAgICAgbXVsdGk6IHRydWVcbiAgICB9LFxuICAgIHtcbiAgICAgIHByb3ZpZGU6IEFQUF9JTklUSUFMSVpFUixcbiAgICAgIHVzZUZhY3Rvcnk6IGluaXRpYWxpemVBcHAsXG4gICAgICBkZXBzOiBbVmlld2VyQ29uZmlnU2VydmljZV0sIG11bHRpOiB0cnVlXG4gICAgfVxuICBdXG59KVxuZXhwb3J0IGNsYXNzIFZpZXdlck1vZHVsZSB7XG59XG4iXX0=