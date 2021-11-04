/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { APP_INITIALIZER, NgModule } from '@angular/core';
import { CommonComponentsModule, ExceptionMessageService, ErrorInterceptorService, LoadingMaskInterceptorService, LoadingMaskService, Api, ConfigService } from "@groupdocs.examples.angular/common-components";
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";
import { BrowserModule } from '@angular/platform-browser';
import { ClickOutsideModule } from "ng-click-outside";
import { ParserAppComponent } from './parser-app.component';
import { SurfaceComponent } from './surface/surface.component';
import { FieldComponent } from './field/field.component';
import { ConfirmationModalComponent } from './confirmation-modal/confirmation-modal.component';
import { SidePanelComponent } from './side-panel/side-panel.component';
import { RenameModalComponent } from './rename-modal/rename-modal.component';
import { PlaceholderComponent } from './placeholder/placeholder.component';
import { TableViewerComponent } from './table-viewer/table-viewer.component';
import { ParserConfigService } from './parser-config.service';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ParserService } from './parser.service';
/**
 * @param {?} parserConfigService
 * @return {?}
 */
export function initializeApp(parserConfigService) {
    /** @type {?} */
    var result = (/**
     * @return {?}
     */
    function () { return parserConfigService.load(); });
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
var ParserModule = /** @class */ (function () {
    function ParserModule() {
        library.add(fas, far);
    }
    /**
     * @param {?} apiEndpoint
     * @return {?}
     */
    ParserModule.forRoot = /**
     * @param {?} apiEndpoint
     * @return {?}
     */
    function (apiEndpoint) {
        Api.DEFAULT_API_ENDPOINT = apiEndpoint;
        return {
            ngModule: ParserModule
        };
    };
    ParserModule.decorators = [
        { type: NgModule, args: [{
                    declarations: [
                        ParserAppComponent,
                        SurfaceComponent,
                        FieldComponent,
                        ConfirmationModalComponent,
                        SidePanelComponent,
                        RenameModalComponent,
                        PlaceholderComponent,
                        TableViewerComponent
                    ],
                    imports: [
                        BrowserModule,
                        CommonComponentsModule,
                        HttpClientModule,
                        ClickOutsideModule,
                        FontAwesomeModule
                    ],
                    exports: [
                        ParserAppComponent,
                        FieldComponent,
                        CommonComponentsModule
                    ],
                    providers: [
                        ParserService,
                        ConfigService,
                        ExceptionMessageService,
                        ParserConfigService,
                        {
                            provide: HTTP_INTERCEPTORS,
                            useClass: ErrorInterceptorService,
                            multi: true
                        },
                        {
                            provide: APP_INITIALIZER,
                            useFactory: initializeApp,
                            deps: [ParserConfigService], multi: true
                        },
                        LoadingMaskService,
                        {
                            provide: HTTP_INTERCEPTORS,
                            useFactory: setupLoadingInterceptor,
                            multi: true,
                            deps: [LoadingMaskService]
                        }
                    ],
                    entryComponents: [FieldComponent],
                },] }
    ];
    /** @nocollapse */
    ParserModule.ctorParameters = function () { return []; };
    return ParserModule;
}());
export { ParserModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFyc2VyLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bncm91cGRvY3MuZXhhbXBsZXMuYW5ndWxhci9wYXJzZXIvIiwic291cmNlcyI6WyJsaWIvcGFyc2VyLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFDLGVBQWUsRUFBdUIsUUFBUSxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBRTdFLE9BQU8sRUFDTCxzQkFBc0IsRUFBRSx1QkFBdUIsRUFDL0MsdUJBQXVCLEVBQUUsNkJBQTZCLEVBQUUsa0JBQWtCLEVBQzFFLEdBQUcsRUFBRSxhQUFhLEVBQ25CLE1BQU0sK0NBQStDLENBQUM7QUFFdkQsT0FBTyxFQUFDLGlCQUFpQixFQUFDLE1BQU0sa0NBQWtDLENBQUM7QUFDbkUsT0FBTyxFQUFDLE9BQU8sRUFBQyxNQUFNLG1DQUFtQyxDQUFDO0FBQzFELE9BQU8sRUFBQyxHQUFHLEVBQUMsTUFBTSxtQ0FBbUMsQ0FBQztBQUN0RCxPQUFPLEVBQUMsR0FBRyxFQUFDLE1BQU0scUNBQXFDLENBQUM7QUFDeEQsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBQzFELE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLGtCQUFrQixDQUFDO0FBQ3RELE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQzVELE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLDZCQUE2QixDQUFDO0FBQy9ELE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUN6RCxPQUFPLEVBQUUsMEJBQTBCLEVBQUUsTUFBTSxtREFBbUQsQ0FBQztBQUMvRixPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxtQ0FBbUMsQ0FBQztBQUN2RSxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSx1Q0FBdUMsQ0FBQztBQUM3RSxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSxxQ0FBcUMsQ0FBQztBQUMzRSxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSx1Q0FBdUMsQ0FBQztBQUM3RSxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUM5RCxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUMzRSxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sa0JBQWtCLENBQUM7Ozs7O0FBRWpELE1BQU0sVUFBVSxhQUFhLENBQUMsbUJBQXdDOztRQUM5RCxNQUFNOzs7SUFBRyxjQUFNLE9BQUEsbUJBQW1CLENBQUMsSUFBSSxFQUFFLEVBQTFCLENBQTBCLENBQUE7SUFDL0MsT0FBTyxNQUFNLENBQUM7QUFDaEIsQ0FBQzs7Ozs7OztBQUlELE1BQU0sVUFBVSx1QkFBdUIsQ0FBQyxPQUEyQjtJQUNqRSxPQUFPLElBQUksNkJBQTZCLENBQUMsT0FBTyxDQUFDLENBQUM7QUFDcEQsQ0FBQztBQUVEO0lBa0RFO1FBQ0UsT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDLENBQUM7SUFDeEIsQ0FBQzs7Ozs7SUFFTSxvQkFBTzs7OztJQUFkLFVBQWUsV0FBbUI7UUFDaEMsR0FBRyxDQUFDLG9CQUFvQixHQUFHLFdBQVcsQ0FBQztRQUN2QyxPQUFPO1lBQ0wsUUFBUSxFQUFFLFlBQVk7U0FDdkIsQ0FBQztJQUNKLENBQUM7O2dCQTNERixRQUFRLFNBQUM7b0JBQ1IsWUFBWSxFQUFFO3dCQUNaLGtCQUFrQjt3QkFDbEIsZ0JBQWdCO3dCQUNoQixjQUFjO3dCQUNkLDBCQUEwQjt3QkFDMUIsa0JBQWtCO3dCQUNsQixvQkFBb0I7d0JBQ3BCLG9CQUFvQjt3QkFDcEIsb0JBQW9CO3FCQUNyQjtvQkFDRCxPQUFPLEVBQUU7d0JBQ1AsYUFBYTt3QkFDYixzQkFBc0I7d0JBQ3RCLGdCQUFnQjt3QkFDaEIsa0JBQWtCO3dCQUNsQixpQkFBaUI7cUJBQ2xCO29CQUNELE9BQU8sRUFBRTt3QkFDUCxrQkFBa0I7d0JBQ2xCLGNBQWM7d0JBQ2Qsc0JBQXNCO3FCQUN2QjtvQkFDRCxTQUFTLEVBQUU7d0JBQ1QsYUFBYTt3QkFDYixhQUFhO3dCQUNiLHVCQUF1Qjt3QkFDdkIsbUJBQW1CO3dCQUNuQjs0QkFDRSxPQUFPLEVBQUUsaUJBQWlCOzRCQUMxQixRQUFRLEVBQUUsdUJBQXVCOzRCQUNqQyxLQUFLLEVBQUUsSUFBSTt5QkFDWjt3QkFDRDs0QkFDRSxPQUFPLEVBQUUsZUFBZTs0QkFDeEIsVUFBVSxFQUFFLGFBQWE7NEJBQ3pCLElBQUksRUFBRSxDQUFDLG1CQUFtQixDQUFDLEVBQUUsS0FBSyxFQUFFLElBQUk7eUJBQ3pDO3dCQUNELGtCQUFrQjt3QkFDbEI7NEJBQ0UsT0FBTyxFQUFFLGlCQUFpQjs0QkFDMUIsVUFBVSxFQUFFLHVCQUF1Qjs0QkFDbkMsS0FBSyxFQUFFLElBQUk7NEJBQ1gsSUFBSSxFQUFFLENBQUMsa0JBQWtCLENBQUM7eUJBQzNCO3FCQUNGO29CQUVELGVBQWUsRUFBRSxDQUFFLGNBQWMsQ0FBRTtpQkFDcEM7Ozs7SUFhRCxtQkFBQztDQUFBLEFBN0RELElBNkRDO1NBWlksWUFBWSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7QVBQX0lOSVRJQUxJWkVSLCBNb2R1bGVXaXRoUHJvdmlkZXJzLCBOZ01vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge0NvbW1vbk1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7XG4gIENvbW1vbkNvbXBvbmVudHNNb2R1bGUsIEV4Y2VwdGlvbk1lc3NhZ2VTZXJ2aWNlLFxuICBFcnJvckludGVyY2VwdG9yU2VydmljZSwgTG9hZGluZ01hc2tJbnRlcmNlcHRvclNlcnZpY2UsIExvYWRpbmdNYXNrU2VydmljZSxcbiAgQXBpLCBDb25maWdTZXJ2aWNlIFxufSBmcm9tIFwiQGdyb3VwZG9jcy5leGFtcGxlcy5hbmd1bGFyL2NvbW1vbi1jb21wb25lbnRzXCI7XG5cbmltcG9ydCB7Rm9udEF3ZXNvbWVNb2R1bGV9IGZyb20gJ0Bmb3J0YXdlc29tZS9hbmd1bGFyLWZvbnRhd2Vzb21lJztcbmltcG9ydCB7bGlicmFyeX0gZnJvbSBcIkBmb3J0YXdlc29tZS9mb250YXdlc29tZS1zdmctY29yZVwiO1xuaW1wb3J0IHtmYXN9IGZyb20gXCJAZm9ydGF3ZXNvbWUvZnJlZS1zb2xpZC1zdmctaWNvbnNcIjtcbmltcG9ydCB7ZmFyfSBmcm9tIFwiQGZvcnRhd2Vzb21lL2ZyZWUtcmVndWxhci1zdmctaWNvbnNcIjtcbmltcG9ydCB7IEJyb3dzZXJNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyJztcbmltcG9ydCB7IENsaWNrT3V0c2lkZU1vZHVsZSB9IGZyb20gXCJuZy1jbGljay1vdXRzaWRlXCI7XG5pbXBvcnQgeyBQYXJzZXJBcHBDb21wb25lbnQgfSBmcm9tICcuL3BhcnNlci1hcHAuY29tcG9uZW50JztcbmltcG9ydCB7IFN1cmZhY2VDb21wb25lbnQgfSBmcm9tICcuL3N1cmZhY2Uvc3VyZmFjZS5jb21wb25lbnQnO1xuaW1wb3J0IHsgRmllbGRDb21wb25lbnQgfSBmcm9tICcuL2ZpZWxkL2ZpZWxkLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBDb25maXJtYXRpb25Nb2RhbENvbXBvbmVudCB9IGZyb20gJy4vY29uZmlybWF0aW9uLW1vZGFsL2NvbmZpcm1hdGlvbi1tb2RhbC5jb21wb25lbnQnO1xuaW1wb3J0IHsgU2lkZVBhbmVsQ29tcG9uZW50IH0gZnJvbSAnLi9zaWRlLXBhbmVsL3NpZGUtcGFuZWwuY29tcG9uZW50JztcbmltcG9ydCB7IFJlbmFtZU1vZGFsQ29tcG9uZW50IH0gZnJvbSAnLi9yZW5hbWUtbW9kYWwvcmVuYW1lLW1vZGFsLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBQbGFjZWhvbGRlckNvbXBvbmVudCB9IGZyb20gJy4vcGxhY2Vob2xkZXIvcGxhY2Vob2xkZXIuY29tcG9uZW50JztcbmltcG9ydCB7IFRhYmxlVmlld2VyQ29tcG9uZW50IH0gZnJvbSAnLi90YWJsZS12aWV3ZXIvdGFibGUtdmlld2VyLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBQYXJzZXJDb25maWdTZXJ2aWNlIH0gZnJvbSAnLi9wYXJzZXItY29uZmlnLnNlcnZpY2UnO1xuaW1wb3J0IHsgSHR0cENsaWVudE1vZHVsZSwgSFRUUF9JTlRFUkNFUFRPUlMgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XG5pbXBvcnQgeyBQYXJzZXJTZXJ2aWNlIH0gZnJvbSAnLi9wYXJzZXIuc2VydmljZSc7XG5cbmV4cG9ydCBmdW5jdGlvbiBpbml0aWFsaXplQXBwKHBhcnNlckNvbmZpZ1NlcnZpY2U6IFBhcnNlckNvbmZpZ1NlcnZpY2UpIHtcbiAgY29uc3QgcmVzdWx0ID0gKCkgPT4gcGFyc2VyQ29uZmlnU2VydmljZS5sb2FkKCk7XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbi8vIE5PVEU6IHRoaXMgaXMgcmVxdWlyZWQgZHVyaW5nIGxpYnJhcnkgY29tcGlsYXRpb24gc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9hbmd1bGFyL2FuZ3VsYXIvaXNzdWVzLzIzNjI5I2lzc3VlY29tbWVudC00NDA5NDI5ODFcbi8vIEBkeW5hbWljXG5leHBvcnQgZnVuY3Rpb24gc2V0dXBMb2FkaW5nSW50ZXJjZXB0b3Ioc2VydmljZTogTG9hZGluZ01hc2tTZXJ2aWNlKSB7XG4gIHJldHVybiBuZXcgTG9hZGluZ01hc2tJbnRlcmNlcHRvclNlcnZpY2Uoc2VydmljZSk7XG59XG5cbkBOZ01vZHVsZSh7XG4gIGRlY2xhcmF0aW9uczogW1xuICAgIFBhcnNlckFwcENvbXBvbmVudCxcbiAgICBTdXJmYWNlQ29tcG9uZW50LFxuICAgIEZpZWxkQ29tcG9uZW50LFxuICAgIENvbmZpcm1hdGlvbk1vZGFsQ29tcG9uZW50LFxuICAgIFNpZGVQYW5lbENvbXBvbmVudCxcbiAgICBSZW5hbWVNb2RhbENvbXBvbmVudCxcbiAgICBQbGFjZWhvbGRlckNvbXBvbmVudCxcbiAgICBUYWJsZVZpZXdlckNvbXBvbmVudCAgXG4gIF0sXG4gIGltcG9ydHM6IFtcbiAgICBCcm93c2VyTW9kdWxlLFxuICAgIENvbW1vbkNvbXBvbmVudHNNb2R1bGUsIFxuICAgIEh0dHBDbGllbnRNb2R1bGUsXG4gICAgQ2xpY2tPdXRzaWRlTW9kdWxlLFxuICAgIEZvbnRBd2Vzb21lTW9kdWxlXG4gIF0sICBcbiAgZXhwb3J0czogWyBcbiAgICBQYXJzZXJBcHBDb21wb25lbnQsXG4gICAgRmllbGRDb21wb25lbnQsXG4gICAgQ29tbW9uQ29tcG9uZW50c01vZHVsZVxuICBdLFxuICBwcm92aWRlcnM6IFsgXG4gICAgUGFyc2VyU2VydmljZSxcbiAgICBDb25maWdTZXJ2aWNlLFxuICAgIEV4Y2VwdGlvbk1lc3NhZ2VTZXJ2aWNlLFxuICAgIFBhcnNlckNvbmZpZ1NlcnZpY2UsXG4gICAge1xuICAgICAgcHJvdmlkZTogSFRUUF9JTlRFUkNFUFRPUlMsXG4gICAgICB1c2VDbGFzczogRXJyb3JJbnRlcmNlcHRvclNlcnZpY2UsXG4gICAgICBtdWx0aTogdHJ1ZVxuICAgIH0sXG4gICAge1xuICAgICAgcHJvdmlkZTogQVBQX0lOSVRJQUxJWkVSLFxuICAgICAgdXNlRmFjdG9yeTogaW5pdGlhbGl6ZUFwcCxcbiAgICAgIGRlcHM6IFtQYXJzZXJDb25maWdTZXJ2aWNlXSwgbXVsdGk6IHRydWVcbiAgICB9LFxuICAgIExvYWRpbmdNYXNrU2VydmljZSxcbiAgICB7XG4gICAgICBwcm92aWRlOiBIVFRQX0lOVEVSQ0VQVE9SUyxcbiAgICAgIHVzZUZhY3Rvcnk6IHNldHVwTG9hZGluZ0ludGVyY2VwdG9yLFxuICAgICAgbXVsdGk6IHRydWUsXG4gICAgICBkZXBzOiBbTG9hZGluZ01hc2tTZXJ2aWNlXVxuICAgIH1cbiAgXSxcblxuICBlbnRyeUNvbXBvbmVudHM6IFsgRmllbGRDb21wb25lbnQgXSxcbn0pXG5leHBvcnQgY2xhc3MgUGFyc2VyTW9kdWxlIHsgXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIGxpYnJhcnkuYWRkKGZhcywgZmFyKTtcbiAgfVxuXG4gIHN0YXRpYyBmb3JSb290KGFwaUVuZHBvaW50OiBzdHJpbmcpOiBNb2R1bGVXaXRoUHJvdmlkZXJzIHtcbiAgICBBcGkuREVGQVVMVF9BUElfRU5EUE9JTlQgPSBhcGlFbmRwb2ludDtcbiAgICByZXR1cm4ge1xuICAgICAgbmdNb2R1bGU6IFBhcnNlck1vZHVsZVxuICAgIH07XG4gIH1cblxufVxuIl19