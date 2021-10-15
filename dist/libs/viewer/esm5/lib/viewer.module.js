/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { BrowserModule } from '@angular/platform-browser';
import { APP_INITIALIZER, NgModule } from '@angular/core';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { ViewerAppComponent } from './viewer-app.component';
import { Api, CommonComponentsModule, ErrorInterceptorService, LoadingMaskInterceptorService, LoadingMaskService } from '@groupdocs.examples.angular/common-components';
import { ViewerService } from "./viewer.service";
import { ConfigService } from "@groupdocs.examples.angular/common-components";
import { ViewerConfigService } from "./viewer-config.service";
import { ThumbnailsComponent } from './thumbnails/thumbnails.component';
import { ExcelDocumentComponent } from './excel-document/excel-document.component';
import { ExcelPageComponent } from './excel-page/excel-page.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { RunPresentationComponent } from './run-presentation/run-presentation.component';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { ViewerTranslateLoader } from './translation/viewer-translate.loader';
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
// NOTE: this is required during library compilation see https://github.com/angular/angular/issues/23629#issuecomment-440942981
// @dynamic
/**
 * @param {?} service
 * @return {?}
 */
export function setupLoadingInterceptor(service) {
    return new LoadingMaskInterceptorService(service);
}
// AoT requires an exported function for factories
/**
 * @return {?}
 */
export function translateLoaderFactory() {
    return new ViewerTranslateLoader();
}
var ɵ0 = window;
var ViewerModule = /** @class */ (function () {
    function ViewerModule() {
    }
    /**
     * @param {?} apiEndpoint
     * @return {?}
     */
    ViewerModule.forRoot = /**
     * @param {?} apiEndpoint
     * @return {?}
     */
    function (apiEndpoint) {
        Api.DEFAULT_API_ENDPOINT = apiEndpoint;
        return {
            ngModule: ViewerModule
        };
    };
    ViewerModule.decorators = [
        { type: NgModule, args: [{
                    declarations: [
                        ViewerAppComponent,
                        ThumbnailsComponent,
                        RunPresentationComponent,
                        ExcelDocumentComponent,
                        ExcelPageComponent
                    ],
                    imports: [
                        BrowserModule,
                        CommonComponentsModule,
                        HttpClientModule,
                        FontAwesomeModule,
                        TranslateModule.forRoot({
                            loader: {
                                provide: TranslateLoader,
                                useFactory: translateLoaderFactory
                            }
                        })
                    ],
                    exports: [
                        ViewerAppComponent,
                        ThumbnailsComponent,
                        RunPresentationComponent,
                        ExcelDocumentComponent,
                        ExcelPageComponent,
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
                        },
                        LoadingMaskService,
                        {
                            provide: HTTP_INTERCEPTORS,
                            useFactory: setupLoadingInterceptor,
                            multi: true,
                            deps: [LoadingMaskService]
                        },
                        { provide: Window, useValue: ɵ0 },
                    ]
                },] }
    ];
    return ViewerModule;
}());
export { ViewerModule };
export { ɵ0 };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmlld2VyLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bncm91cGRvY3MuZXhhbXBsZXMuYW5ndWxhci92aWV3ZXIvIiwic291cmNlcyI6WyJsaWIvdmlld2VyLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFDLGFBQWEsRUFBQyxNQUFNLDJCQUEyQixDQUFDO0FBQ3hELE9BQU8sRUFBQyxlQUFlLEVBQXVCLFFBQVEsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUM3RSxPQUFPLEVBQUMsaUJBQWlCLEVBQUUsZ0JBQWdCLEVBQUMsTUFBTSxzQkFBc0IsQ0FBQztBQUN6RSxPQUFPLEVBQUMsa0JBQWtCLEVBQUMsTUFBTSx3QkFBd0IsQ0FBQztBQUMxRCxPQUFPLEVBQ0wsR0FBRyxFQUNILHNCQUFzQixFQUN0Qix1QkFBdUIsRUFDdkIsNkJBQTZCLEVBQzdCLGtCQUFrQixFQUNuQixNQUFNLCtDQUErQyxDQUFDO0FBQ3ZELE9BQU8sRUFBQyxhQUFhLEVBQUMsTUFBTSxrQkFBa0IsQ0FBQztBQUMvQyxPQUFPLEVBQUMsYUFBYSxFQUFDLE1BQU0sK0NBQStDLENBQUM7QUFDNUUsT0FBTyxFQUFDLG1CQUFtQixFQUFDLE1BQU0seUJBQXlCLENBQUM7QUFDNUQsT0FBTyxFQUFDLG1CQUFtQixFQUFDLE1BQU0sbUNBQW1DLENBQUM7QUFDdEUsT0FBTyxFQUFDLHNCQUFzQixFQUFDLE1BQU0sMkNBQTJDLENBQUM7QUFDakYsT0FBTyxFQUFDLGtCQUFrQixFQUFDLE1BQU0sbUNBQW1DLENBQUM7QUFDckUsT0FBTyxFQUFDLGlCQUFpQixFQUFDLE1BQU0sa0NBQWtDLENBQUM7QUFDbkUsT0FBTyxFQUFDLHdCQUF3QixFQUFDLE1BQU0sK0NBQStDLENBQUM7QUFDdkYsT0FBTyxFQUFDLGVBQWUsRUFBRSxlQUFlLEVBQUMsTUFBTSxxQkFBcUIsQ0FBQztBQUNyRSxPQUFPLEVBQUMscUJBQXFCLEVBQUMsTUFBTSx1Q0FBdUMsQ0FBQzs7Ozs7QUFFNUUsTUFBTSxVQUFVLGFBQWEsQ0FBQyxtQkFBd0M7O1FBQzlELE1BQU07OztJQUFHLGNBQU0sT0FBQSxtQkFBbUIsQ0FBQyxJQUFJLEVBQUUsRUFBMUIsQ0FBMEIsQ0FBQTtJQUMvQyxPQUFPLE1BQU0sQ0FBQztBQUNoQixDQUFDOzs7Ozs7O0FBSUQsTUFBTSxVQUFVLHVCQUF1QixDQUFDLE9BQTJCO0lBQ2pFLE9BQU8sSUFBSSw2QkFBNkIsQ0FBQyxPQUFPLENBQUMsQ0FBQztBQUNwRCxDQUFDOzs7OztBQUdELE1BQU0sVUFBVSxzQkFBc0I7SUFDcEMsT0FBTyxJQUFJLHFCQUFxQixFQUFFLENBQUM7QUFDckMsQ0FBQztTQWtEZ0MsTUFBTTtBQWhEdkM7SUFBQTtJQTBEQSxDQUFDOzs7OztJQU5RLG9CQUFPOzs7O0lBQWQsVUFBZSxXQUFvQjtRQUNqQyxHQUFHLENBQUMsb0JBQW9CLEdBQUcsV0FBVyxDQUFBO1FBQ3RDLE9BQU87WUFDTCxRQUFRLEVBQUUsWUFBWTtTQUN2QixDQUFDO0lBQ0osQ0FBQzs7Z0JBekRGLFFBQVEsU0FBQztvQkFDUixZQUFZLEVBQUU7d0JBQ1osa0JBQWtCO3dCQUNsQixtQkFBbUI7d0JBQ25CLHdCQUF3Qjt3QkFDeEIsc0JBQXNCO3dCQUN0QixrQkFBa0I7cUJBQUM7b0JBQ3JCLE9BQU8sRUFBRTt3QkFDUCxhQUFhO3dCQUNiLHNCQUFzQjt3QkFDdEIsZ0JBQWdCO3dCQUNoQixpQkFBaUI7d0JBQ2pCLGVBQWUsQ0FBQyxPQUFPLENBQUM7NEJBQ3RCLE1BQU0sRUFBRTtnQ0FDTixPQUFPLEVBQUUsZUFBZTtnQ0FDeEIsVUFBVSxFQUFFLHNCQUFzQjs2QkFDbkM7eUJBQ0YsQ0FBQztxQkFDSDtvQkFDRCxPQUFPLEVBQUc7d0JBQ1Isa0JBQWtCO3dCQUNsQixtQkFBbUI7d0JBQ25CLHdCQUF3Qjt3QkFDeEIsc0JBQXNCO3dCQUN0QixrQkFBa0I7d0JBQ2xCLHNCQUFzQjtxQkFDdkI7b0JBQ0QsU0FBUyxFQUFFO3dCQUNULGFBQWE7d0JBQ2IsYUFBYTt3QkFDYixtQkFBbUI7d0JBQ25COzRCQUNFLE9BQU8sRUFBRSxpQkFBaUI7NEJBQzFCLFFBQVEsRUFBRSx1QkFBdUI7NEJBQ2pDLEtBQUssRUFBRSxJQUFJO3lCQUNaO3dCQUNEOzRCQUNFLE9BQU8sRUFBRSxlQUFlOzRCQUN4QixVQUFVLEVBQUUsYUFBYTs0QkFDekIsSUFBSSxFQUFFLENBQUMsbUJBQW1CLENBQUMsRUFBRSxLQUFLLEVBQUUsSUFBSTt5QkFDekM7d0JBQ0Qsa0JBQWtCO3dCQUNsQjs0QkFDRSxPQUFPLEVBQUUsaUJBQWlCOzRCQUMxQixVQUFVLEVBQUUsdUJBQXVCOzRCQUNuQyxLQUFLLEVBQUUsSUFBSTs0QkFDWCxJQUFJLEVBQUUsQ0FBQyxrQkFBa0IsQ0FBQzt5QkFDM0I7d0JBQ0QsRUFBRSxPQUFPLEVBQUUsTUFBTSxFQUFFLFFBQVEsSUFBUSxFQUFFO3FCQUN0QztpQkFDRjs7SUFRRCxtQkFBQztDQUFBLEFBMURELElBMERDO1NBUFksWUFBWSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7QnJvd3Nlck1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3Nlcic7XG5pbXBvcnQge0FQUF9JTklUSUFMSVpFUiwgTW9kdWxlV2l0aFByb3ZpZGVycywgTmdNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtIVFRQX0lOVEVSQ0VQVE9SUywgSHR0cENsaWVudE1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuaW1wb3J0IHtWaWV3ZXJBcHBDb21wb25lbnR9IGZyb20gJy4vdmlld2VyLWFwcC5jb21wb25lbnQnO1xuaW1wb3J0IHtcbiAgQXBpLFxuICBDb21tb25Db21wb25lbnRzTW9kdWxlLFxuICBFcnJvckludGVyY2VwdG9yU2VydmljZSwgXG4gIExvYWRpbmdNYXNrSW50ZXJjZXB0b3JTZXJ2aWNlLFxuICBMb2FkaW5nTWFza1NlcnZpY2Vcbn0gZnJvbSAnQGdyb3VwZG9jcy5leGFtcGxlcy5hbmd1bGFyL2NvbW1vbi1jb21wb25lbnRzJztcbmltcG9ydCB7Vmlld2VyU2VydmljZX0gZnJvbSBcIi4vdmlld2VyLnNlcnZpY2VcIjtcbmltcG9ydCB7Q29uZmlnU2VydmljZX0gZnJvbSBcIkBncm91cGRvY3MuZXhhbXBsZXMuYW5ndWxhci9jb21tb24tY29tcG9uZW50c1wiO1xuaW1wb3J0IHtWaWV3ZXJDb25maWdTZXJ2aWNlfSBmcm9tIFwiLi92aWV3ZXItY29uZmlnLnNlcnZpY2VcIjtcbmltcG9ydCB7VGh1bWJuYWlsc0NvbXBvbmVudH0gZnJvbSAnLi90aHVtYm5haWxzL3RodW1ibmFpbHMuY29tcG9uZW50JztcbmltcG9ydCB7RXhjZWxEb2N1bWVudENvbXBvbmVudH0gZnJvbSAnLi9leGNlbC1kb2N1bWVudC9leGNlbC1kb2N1bWVudC5jb21wb25lbnQnO1xuaW1wb3J0IHtFeGNlbFBhZ2VDb21wb25lbnR9IGZyb20gJy4vZXhjZWwtcGFnZS9leGNlbC1wYWdlLmNvbXBvbmVudCc7XG5pbXBvcnQge0ZvbnRBd2Vzb21lTW9kdWxlfSBmcm9tICdAZm9ydGF3ZXNvbWUvYW5ndWxhci1mb250YXdlc29tZSc7XG5pbXBvcnQge1J1blByZXNlbnRhdGlvbkNvbXBvbmVudH0gZnJvbSAnLi9ydW4tcHJlc2VudGF0aW9uL3J1bi1wcmVzZW50YXRpb24uY29tcG9uZW50JztcbmltcG9ydCB7VHJhbnNsYXRlTW9kdWxlLCBUcmFuc2xhdGVMb2FkZXJ9IGZyb20gJ0BuZ3gtdHJhbnNsYXRlL2NvcmUnO1xuaW1wb3J0IHtWaWV3ZXJUcmFuc2xhdGVMb2FkZXJ9IGZyb20gJy4vdHJhbnNsYXRpb24vdmlld2VyLXRyYW5zbGF0ZS5sb2FkZXInO1xuXG5leHBvcnQgZnVuY3Rpb24gaW5pdGlhbGl6ZUFwcCh2aWV3ZXJDb25maWdTZXJ2aWNlOiBWaWV3ZXJDb25maWdTZXJ2aWNlKSB7XG4gIGNvbnN0IHJlc3VsdCA9ICgpID0+IHZpZXdlckNvbmZpZ1NlcnZpY2UubG9hZCgpO1xuICByZXR1cm4gcmVzdWx0O1xufVxuXG4vLyBOT1RFOiB0aGlzIGlzIHJlcXVpcmVkIGR1cmluZyBsaWJyYXJ5IGNvbXBpbGF0aW9uIHNlZSBodHRwczovL2dpdGh1Yi5jb20vYW5ndWxhci9hbmd1bGFyL2lzc3Vlcy8yMzYyOSNpc3N1ZWNvbW1lbnQtNDQwOTQyOTgxXG4vLyBAZHluYW1pY1xuZXhwb3J0IGZ1bmN0aW9uIHNldHVwTG9hZGluZ0ludGVyY2VwdG9yKHNlcnZpY2U6IExvYWRpbmdNYXNrU2VydmljZSkge1xuICByZXR1cm4gbmV3IExvYWRpbmdNYXNrSW50ZXJjZXB0b3JTZXJ2aWNlKHNlcnZpY2UpO1xufVxuXG4vLyBBb1QgcmVxdWlyZXMgYW4gZXhwb3J0ZWQgZnVuY3Rpb24gZm9yIGZhY3Rvcmllc1xuZXhwb3J0IGZ1bmN0aW9uIHRyYW5zbGF0ZUxvYWRlckZhY3RvcnkoKSB7XG4gIHJldHVybiBuZXcgVmlld2VyVHJhbnNsYXRlTG9hZGVyKCk7XG59XG5cbkBOZ01vZHVsZSh7XG4gIGRlY2xhcmF0aW9uczogW1xuICAgIFZpZXdlckFwcENvbXBvbmVudCxcbiAgICBUaHVtYm5haWxzQ29tcG9uZW50LFxuICAgIFJ1blByZXNlbnRhdGlvbkNvbXBvbmVudCxcbiAgICBFeGNlbERvY3VtZW50Q29tcG9uZW50LFxuICAgIEV4Y2VsUGFnZUNvbXBvbmVudF0sXG4gIGltcG9ydHM6IFtcbiAgICBCcm93c2VyTW9kdWxlLFxuICAgIENvbW1vbkNvbXBvbmVudHNNb2R1bGUsXG4gICAgSHR0cENsaWVudE1vZHVsZSxcbiAgICBGb250QXdlc29tZU1vZHVsZSxcbiAgICBUcmFuc2xhdGVNb2R1bGUuZm9yUm9vdCh7XG4gICAgICBsb2FkZXI6IHtcbiAgICAgICAgcHJvdmlkZTogVHJhbnNsYXRlTG9hZGVyLFxuICAgICAgICB1c2VGYWN0b3J5OiB0cmFuc2xhdGVMb2FkZXJGYWN0b3J5XG4gICAgICB9XG4gICAgfSlcbiAgXSxcbiAgZXhwb3J0cyA6IFtcbiAgICBWaWV3ZXJBcHBDb21wb25lbnQsXG4gICAgVGh1bWJuYWlsc0NvbXBvbmVudCxcbiAgICBSdW5QcmVzZW50YXRpb25Db21wb25lbnQsXG4gICAgRXhjZWxEb2N1bWVudENvbXBvbmVudCxcbiAgICBFeGNlbFBhZ2VDb21wb25lbnQsXG4gICAgQ29tbW9uQ29tcG9uZW50c01vZHVsZVxuICBdLFxuICBwcm92aWRlcnM6IFtcbiAgICBWaWV3ZXJTZXJ2aWNlLFxuICAgIENvbmZpZ1NlcnZpY2UsXG4gICAgVmlld2VyQ29uZmlnU2VydmljZSxcbiAgICB7XG4gICAgICBwcm92aWRlOiBIVFRQX0lOVEVSQ0VQVE9SUyxcbiAgICAgIHVzZUNsYXNzOiBFcnJvckludGVyY2VwdG9yU2VydmljZSxcbiAgICAgIG11bHRpOiB0cnVlXG4gICAgfSxcbiAgICB7XG4gICAgICBwcm92aWRlOiBBUFBfSU5JVElBTElaRVIsXG4gICAgICB1c2VGYWN0b3J5OiBpbml0aWFsaXplQXBwLFxuICAgICAgZGVwczogW1ZpZXdlckNvbmZpZ1NlcnZpY2VdLCBtdWx0aTogdHJ1ZVxuICAgIH0sXG4gICAgTG9hZGluZ01hc2tTZXJ2aWNlLFxuICAgIHtcbiAgICAgIHByb3ZpZGU6IEhUVFBfSU5URVJDRVBUT1JTLFxuICAgICAgdXNlRmFjdG9yeTogc2V0dXBMb2FkaW5nSW50ZXJjZXB0b3IsXG4gICAgICBtdWx0aTogdHJ1ZSxcbiAgICAgIGRlcHM6IFtMb2FkaW5nTWFza1NlcnZpY2VdXG4gICAgfSxcbiAgICB7IHByb3ZpZGU6IFdpbmRvdywgdXNlVmFsdWU6IHdpbmRvdyB9LFxuICBdXG59KVxuZXhwb3J0IGNsYXNzIFZpZXdlck1vZHVsZSB7XG4gIHN0YXRpYyBmb3JSb290KGFwaUVuZHBvaW50IDogc3RyaW5nKTogTW9kdWxlV2l0aFByb3ZpZGVycyB7XG4gICAgQXBpLkRFRkFVTFRfQVBJX0VORFBPSU5UID0gYXBpRW5kcG9pbnRcbiAgICByZXR1cm4ge1xuICAgICAgbmdNb2R1bGU6IFZpZXdlck1vZHVsZVxuICAgIH07XG4gIH1cbn1cbiJdfQ==