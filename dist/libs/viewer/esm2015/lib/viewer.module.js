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
    const result = (/**
     * @return {?}
     */
    () => viewerConfigService.load());
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
export class ViewerModule {
    /**
     * @param {?} apiEndpoint
     * @return {?}
     */
    static forRoot(apiEndpoint) {
        Api.DEFAULT_API_ENDPOINT = apiEndpoint;
        return {
            ngModule: ViewerModule
        };
    }
}
ViewerModule.decorators = [
    { type: NgModule, args: [{
                declarations: [
                    ViewerAppComponent,
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
                    }
                ]
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmlld2VyLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bncm91cGRvY3MuZXhhbXBsZXMuYW5ndWxhci92aWV3ZXIvIiwic291cmNlcyI6WyJsaWIvdmlld2VyLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFDLGFBQWEsRUFBQyxNQUFNLDJCQUEyQixDQUFDO0FBQ3hELE9BQU8sRUFBQyxlQUFlLEVBQXVCLFFBQVEsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUM3RSxPQUFPLEVBQUMsaUJBQWlCLEVBQUUsZ0JBQWdCLEVBQUMsTUFBTSxzQkFBc0IsQ0FBQztBQUN6RSxPQUFPLEVBQUMsa0JBQWtCLEVBQUMsTUFBTSx3QkFBd0IsQ0FBQztBQUMxRCxPQUFPLEVBQ0wsR0FBRyxFQUNILHNCQUFzQixFQUN0Qix1QkFBdUIsRUFDdkIsNkJBQTZCLEVBQzdCLGtCQUFrQixFQUNuQixNQUFNLCtDQUErQyxDQUFDO0FBQ3ZELE9BQU8sRUFBQyxhQUFhLEVBQUMsTUFBTSxrQkFBa0IsQ0FBQztBQUMvQyxPQUFPLEVBQUMsYUFBYSxFQUFDLE1BQU0sK0NBQStDLENBQUM7QUFDNUUsT0FBTyxFQUFDLG1CQUFtQixFQUFDLE1BQU0seUJBQXlCLENBQUM7QUFDNUQsT0FBTyxFQUFDLHNCQUFzQixFQUFDLE1BQU0sMkNBQTJDLENBQUM7QUFDakYsT0FBTyxFQUFDLGtCQUFrQixFQUFDLE1BQU0sbUNBQW1DLENBQUM7QUFDckUsT0FBTyxFQUFDLGlCQUFpQixFQUFDLE1BQU0sa0NBQWtDLENBQUM7QUFDbkUsT0FBTyxFQUFDLHdCQUF3QixFQUFDLE1BQU0sK0NBQStDLENBQUM7QUFDdkYsT0FBTyxFQUFDLGVBQWUsRUFBRSxlQUFlLEVBQUMsTUFBTSxxQkFBcUIsQ0FBQztBQUNyRSxPQUFPLEVBQUMscUJBQXFCLEVBQUMsTUFBTSx1Q0FBdUMsQ0FBQzs7Ozs7QUFFNUUsTUFBTSxVQUFVLGFBQWEsQ0FBQyxtQkFBd0M7O1VBQzlELE1BQU07OztJQUFHLEdBQUcsRUFBRSxDQUFDLG1CQUFtQixDQUFDLElBQUksRUFBRSxDQUFBO0lBQy9DLE9BQU8sTUFBTSxDQUFDO0FBQ2hCLENBQUM7Ozs7Ozs7QUFJRCxNQUFNLFVBQVUsdUJBQXVCLENBQUMsT0FBMkI7SUFDakUsT0FBTyxJQUFJLDZCQUE2QixDQUFDLE9BQU8sQ0FBQyxDQUFDO0FBQ3BELENBQUM7Ozs7O0FBR0QsTUFBTSxVQUFVLHNCQUFzQjtJQUNwQyxPQUFPLElBQUkscUJBQXFCLEVBQUUsQ0FBQztBQUNyQyxDQUFDO0FBa0RELE1BQU0sT0FBTyxZQUFZOzs7OztJQUN2QixNQUFNLENBQUMsT0FBTyxDQUFDLFdBQW9CO1FBQ2pDLEdBQUcsQ0FBQyxvQkFBb0IsR0FBRyxXQUFXLENBQUE7UUFDdEMsT0FBTztZQUNMLFFBQVEsRUFBRSxZQUFZO1NBQ3ZCLENBQUM7SUFDSixDQUFDOzs7WUF0REYsUUFBUSxTQUFDO2dCQUNSLFlBQVksRUFBRTtvQkFDWixrQkFBa0I7b0JBQ2xCLHdCQUF3QjtvQkFDeEIsc0JBQXNCO29CQUN0QixrQkFBa0I7aUJBQUM7Z0JBQ3JCLE9BQU8sRUFBRTtvQkFDUCxhQUFhO29CQUNiLHNCQUFzQjtvQkFDdEIsZ0JBQWdCO29CQUNoQixpQkFBaUI7b0JBQ2pCLGVBQWUsQ0FBQyxPQUFPLENBQUM7d0JBQ3RCLE1BQU0sRUFBRTs0QkFDTixPQUFPLEVBQUUsZUFBZTs0QkFDeEIsVUFBVSxFQUFFLHNCQUFzQjt5QkFDbkM7cUJBQ0YsQ0FBQztpQkFDSDtnQkFDRCxPQUFPLEVBQUc7b0JBQ1Isa0JBQWtCO29CQUNsQix3QkFBd0I7b0JBQ3hCLHNCQUFzQjtvQkFDdEIsa0JBQWtCO29CQUNsQixzQkFBc0I7aUJBQ3ZCO2dCQUNELFNBQVMsRUFBRTtvQkFDVCxhQUFhO29CQUNiLGFBQWE7b0JBQ2IsbUJBQW1CO29CQUNuQjt3QkFDRSxPQUFPLEVBQUUsaUJBQWlCO3dCQUMxQixRQUFRLEVBQUUsdUJBQXVCO3dCQUNqQyxLQUFLLEVBQUUsSUFBSTtxQkFDWjtvQkFDRDt3QkFDRSxPQUFPLEVBQUUsZUFBZTt3QkFDeEIsVUFBVSxFQUFFLGFBQWE7d0JBQ3pCLElBQUksRUFBRSxDQUFDLG1CQUFtQixDQUFDLEVBQUUsS0FBSyxFQUFFLElBQUk7cUJBQ3pDO29CQUNELGtCQUFrQjtvQkFDbEI7d0JBQ0UsT0FBTyxFQUFFLGlCQUFpQjt3QkFDMUIsVUFBVSxFQUFFLHVCQUF1Qjt3QkFDbkMsS0FBSyxFQUFFLElBQUk7d0JBQ1gsSUFBSSxFQUFFLENBQUMsa0JBQWtCLENBQUM7cUJBQzNCO2lCQUNGO2FBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0Jyb3dzZXJNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXInO1xuaW1wb3J0IHtBUFBfSU5JVElBTElaRVIsIE1vZHVsZVdpdGhQcm92aWRlcnMsIE5nTW9kdWxlfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7SFRUUF9JTlRFUkNFUFRPUlMsIEh0dHBDbGllbnRNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcbmltcG9ydCB7Vmlld2VyQXBwQ29tcG9uZW50fSBmcm9tICcuL3ZpZXdlci1hcHAuY29tcG9uZW50JztcbmltcG9ydCB7XG4gIEFwaSxcbiAgQ29tbW9uQ29tcG9uZW50c01vZHVsZSxcbiAgRXJyb3JJbnRlcmNlcHRvclNlcnZpY2UsXG4gIExvYWRpbmdNYXNrSW50ZXJjZXB0b3JTZXJ2aWNlLFxuICBMb2FkaW5nTWFza1NlcnZpY2Vcbn0gZnJvbSAnQGdyb3VwZG9jcy5leGFtcGxlcy5hbmd1bGFyL2NvbW1vbi1jb21wb25lbnRzJztcbmltcG9ydCB7Vmlld2VyU2VydmljZX0gZnJvbSBcIi4vdmlld2VyLnNlcnZpY2VcIjtcbmltcG9ydCB7Q29uZmlnU2VydmljZX0gZnJvbSBcIkBncm91cGRvY3MuZXhhbXBsZXMuYW5ndWxhci9jb21tb24tY29tcG9uZW50c1wiO1xuaW1wb3J0IHtWaWV3ZXJDb25maWdTZXJ2aWNlfSBmcm9tIFwiLi92aWV3ZXItY29uZmlnLnNlcnZpY2VcIjtcbmltcG9ydCB7RXhjZWxEb2N1bWVudENvbXBvbmVudH0gZnJvbSAnLi9leGNlbC1kb2N1bWVudC9leGNlbC1kb2N1bWVudC5jb21wb25lbnQnO1xuaW1wb3J0IHtFeGNlbFBhZ2VDb21wb25lbnR9IGZyb20gJy4vZXhjZWwtcGFnZS9leGNlbC1wYWdlLmNvbXBvbmVudCc7XG5pbXBvcnQge0ZvbnRBd2Vzb21lTW9kdWxlfSBmcm9tICdAZm9ydGF3ZXNvbWUvYW5ndWxhci1mb250YXdlc29tZSc7XG5pbXBvcnQge1J1blByZXNlbnRhdGlvbkNvbXBvbmVudH0gZnJvbSAnLi9ydW4tcHJlc2VudGF0aW9uL3J1bi1wcmVzZW50YXRpb24uY29tcG9uZW50JztcbmltcG9ydCB7VHJhbnNsYXRlTW9kdWxlLCBUcmFuc2xhdGVMb2FkZXJ9IGZyb20gJ0BuZ3gtdHJhbnNsYXRlL2NvcmUnO1xuaW1wb3J0IHtWaWV3ZXJUcmFuc2xhdGVMb2FkZXJ9IGZyb20gJy4vdHJhbnNsYXRpb24vdmlld2VyLXRyYW5zbGF0ZS5sb2FkZXInO1xuXG5leHBvcnQgZnVuY3Rpb24gaW5pdGlhbGl6ZUFwcCh2aWV3ZXJDb25maWdTZXJ2aWNlOiBWaWV3ZXJDb25maWdTZXJ2aWNlKSB7XG4gIGNvbnN0IHJlc3VsdCA9ICgpID0+IHZpZXdlckNvbmZpZ1NlcnZpY2UubG9hZCgpO1xuICByZXR1cm4gcmVzdWx0O1xufVxuXG4vLyBOT1RFOiB0aGlzIGlzIHJlcXVpcmVkIGR1cmluZyBsaWJyYXJ5IGNvbXBpbGF0aW9uIHNlZSBodHRwczovL2dpdGh1Yi5jb20vYW5ndWxhci9hbmd1bGFyL2lzc3Vlcy8yMzYyOSNpc3N1ZWNvbW1lbnQtNDQwOTQyOTgxXG4vLyBAZHluYW1pY1xuZXhwb3J0IGZ1bmN0aW9uIHNldHVwTG9hZGluZ0ludGVyY2VwdG9yKHNlcnZpY2U6IExvYWRpbmdNYXNrU2VydmljZSkge1xuICByZXR1cm4gbmV3IExvYWRpbmdNYXNrSW50ZXJjZXB0b3JTZXJ2aWNlKHNlcnZpY2UpO1xufVxuXG4vLyBBb1QgcmVxdWlyZXMgYW4gZXhwb3J0ZWQgZnVuY3Rpb24gZm9yIGZhY3Rvcmllc1xuZXhwb3J0IGZ1bmN0aW9uIHRyYW5zbGF0ZUxvYWRlckZhY3RvcnkoKSB7XG4gIHJldHVybiBuZXcgVmlld2VyVHJhbnNsYXRlTG9hZGVyKCk7XG59XG5cbkBOZ01vZHVsZSh7XG4gIGRlY2xhcmF0aW9uczogW1xuICAgIFZpZXdlckFwcENvbXBvbmVudCxcbiAgICBSdW5QcmVzZW50YXRpb25Db21wb25lbnQsXG4gICAgRXhjZWxEb2N1bWVudENvbXBvbmVudCxcbiAgICBFeGNlbFBhZ2VDb21wb25lbnRdLFxuICBpbXBvcnRzOiBbXG4gICAgQnJvd3Nlck1vZHVsZSxcbiAgICBDb21tb25Db21wb25lbnRzTW9kdWxlLFxuICAgIEh0dHBDbGllbnRNb2R1bGUsXG4gICAgRm9udEF3ZXNvbWVNb2R1bGUsXG4gICAgVHJhbnNsYXRlTW9kdWxlLmZvclJvb3Qoe1xuICAgICAgbG9hZGVyOiB7XG4gICAgICAgIHByb3ZpZGU6IFRyYW5zbGF0ZUxvYWRlcixcbiAgICAgICAgdXNlRmFjdG9yeTogdHJhbnNsYXRlTG9hZGVyRmFjdG9yeVxuICAgICAgfVxuICAgIH0pXG4gIF0sXG4gIGV4cG9ydHMgOiBbXG4gICAgVmlld2VyQXBwQ29tcG9uZW50LFxuICAgIFJ1blByZXNlbnRhdGlvbkNvbXBvbmVudCxcbiAgICBFeGNlbERvY3VtZW50Q29tcG9uZW50LFxuICAgIEV4Y2VsUGFnZUNvbXBvbmVudCxcbiAgICBDb21tb25Db21wb25lbnRzTW9kdWxlXG4gIF0sXG4gIHByb3ZpZGVyczogW1xuICAgIFZpZXdlclNlcnZpY2UsXG4gICAgQ29uZmlnU2VydmljZSxcbiAgICBWaWV3ZXJDb25maWdTZXJ2aWNlLFxuICAgIHtcbiAgICAgIHByb3ZpZGU6IEhUVFBfSU5URVJDRVBUT1JTLFxuICAgICAgdXNlQ2xhc3M6IEVycm9ySW50ZXJjZXB0b3JTZXJ2aWNlLFxuICAgICAgbXVsdGk6IHRydWVcbiAgICB9LFxuICAgIHtcbiAgICAgIHByb3ZpZGU6IEFQUF9JTklUSUFMSVpFUixcbiAgICAgIHVzZUZhY3Rvcnk6IGluaXRpYWxpemVBcHAsXG4gICAgICBkZXBzOiBbVmlld2VyQ29uZmlnU2VydmljZV0sIG11bHRpOiB0cnVlXG4gICAgfSxcbiAgICBMb2FkaW5nTWFza1NlcnZpY2UsXG4gICAge1xuICAgICAgcHJvdmlkZTogSFRUUF9JTlRFUkNFUFRPUlMsXG4gICAgICB1c2VGYWN0b3J5OiBzZXR1cExvYWRpbmdJbnRlcmNlcHRvcixcbiAgICAgIG11bHRpOiB0cnVlLFxuICAgICAgZGVwczogW0xvYWRpbmdNYXNrU2VydmljZV1cbiAgICB9XG4gIF1cbn0pXG5leHBvcnQgY2xhc3MgVmlld2VyTW9kdWxlIHtcbiAgc3RhdGljIGZvclJvb3QoYXBpRW5kcG9pbnQgOiBzdHJpbmcpOiBNb2R1bGVXaXRoUHJvdmlkZXJzIHtcbiAgICBBcGkuREVGQVVMVF9BUElfRU5EUE9JTlQgPSBhcGlFbmRwb2ludFxuICAgIHJldHVybiB7XG4gICAgICBuZ01vZHVsZTogVmlld2VyTW9kdWxlXG4gICAgfTtcbiAgfVxufVxuIl19