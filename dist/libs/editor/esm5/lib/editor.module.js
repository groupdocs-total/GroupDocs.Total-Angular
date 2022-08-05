/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { BrowserModule } from '@angular/platform-browser';
import { APP_INITIALIZER, NgModule } from '@angular/core';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { EditorAppComponent } from './editor-app.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
import { CreateDocumentModalComponent } from './create.document-modal/create.document-modal.component';
import { EditorService } from "./editor.service";
import { CommonComponentsModule, ErrorInterceptorService, ConfigService, LoadingMaskService, LoadingMaskInterceptorService, Api } from '@groupdocs.examples.angular/common-components';
import { EditorConfigService } from "./editor-config.service";
import { TranslateModule } from '@ngx-translate/core';
/**
 * @param {?} editorConfigService
 * @return {?}
 */
export function initializeApp(editorConfigService) {
    /** @type {?} */
    var result = (/**
     * @return {?}
     */
    function () { return editorConfigService.load(); });
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
var EditorModule = /** @class */ (function () {
    function EditorModule() {
        library.add(fas, far);
    }
    /**
     * @param {?} apiEndpoint
     * @return {?}
     */
    EditorModule.forRoot = /**
     * @param {?} apiEndpoint
     * @return {?}
     */
    function (apiEndpoint) {
        Api.DEFAULT_API_ENDPOINT = apiEndpoint;
        return {
            ngModule: EditorModule
        };
    };
    EditorModule.decorators = [
        { type: NgModule, args: [{
                    declarations: [EditorAppComponent,
                        CreateDocumentModalComponent],
                    imports: [
                        BrowserModule,
                        CommonComponentsModule,
                        HttpClientModule,
                        FontAwesomeModule,
                        TranslateModule.forRoot(),
                    ],
                    exports: [
                        CreateDocumentModalComponent,
                        EditorAppComponent,
                        CommonComponentsModule
                    ],
                    providers: [
                        EditorService,
                        ConfigService,
                        EditorConfigService,
                        {
                            provide: APP_INITIALIZER,
                            useFactory: initializeApp,
                            deps: [EditorConfigService],
                            multi: true
                        },
                        {
                            provide: HTTP_INTERCEPTORS,
                            useClass: ErrorInterceptorService,
                            multi: true
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
    /** @nocollapse */
    EditorModule.ctorParameters = function () { return []; };
    return EditorModule;
}());
export { EditorModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZWRpdG9yLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bncm91cGRvY3MuZXhhbXBsZXMuYW5ndWxhci9lZGl0b3IvIiwic291cmNlcyI6WyJsaWIvZWRpdG9yLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFDLGFBQWEsRUFBQyxNQUFNLDJCQUEyQixDQUFDO0FBQ3hELE9BQU8sRUFBRSxlQUFlLEVBQXVCLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMvRSxPQUFPLEVBQUMsaUJBQWlCLEVBQUUsZ0JBQWdCLEVBQUMsTUFBTSxzQkFBc0IsQ0FBQztBQUN6RSxPQUFPLEVBQUMsa0JBQWtCLEVBQUMsTUFBTSx3QkFBd0IsQ0FBQztBQUMxRCxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxrQ0FBa0MsQ0FBQztBQUNyRSxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sbUNBQW1DLENBQUM7QUFDNUQsT0FBTyxFQUFFLEdBQUcsRUFBRSxNQUFNLG1DQUFtQyxDQUFDO0FBQ3hELE9BQU8sRUFBRSxHQUFHLEVBQUUsTUFBTSxxQ0FBcUMsQ0FBQztBQUMxRCxPQUFPLEVBQUMsNEJBQTRCLEVBQUMsTUFBTSx5REFBeUQsQ0FBQztBQUNyRyxPQUFPLEVBQUMsYUFBYSxFQUFDLE1BQU0sa0JBQWtCLENBQUM7QUFDL0MsT0FBTyxFQUNMLHNCQUFzQixFQUN0Qix1QkFBdUIsRUFDdkIsYUFBYSxFQUNiLGtCQUFrQixFQUNsQiw2QkFBNkIsRUFDN0IsR0FBRyxFQUNKLE1BQU0sK0NBQStDLENBQUM7QUFDdkQsT0FBTyxFQUFDLG1CQUFtQixFQUFDLE1BQU0seUJBQXlCLENBQUM7QUFDNUQsT0FBTyxFQUFDLGVBQWUsRUFBQyxNQUFNLHFCQUFxQixDQUFDOzs7OztBQUVwRCxNQUFNLFVBQVUsYUFBYSxDQUFDLG1CQUF3Qzs7UUFDOUQsTUFBTTs7O0lBQUksY0FBTSxPQUFBLG1CQUFtQixDQUFDLElBQUksRUFBRSxFQUExQixDQUEwQixDQUFBO0lBQ2hELE9BQU8sTUFBTSxDQUFDO0FBQ2hCLENBQUM7Ozs7Ozs7QUFJRCxNQUFNLFVBQVUsdUJBQXVCLENBQUMsT0FBMkI7SUFDakUsT0FBTyxJQUFJLDZCQUE2QixDQUFDLE9BQU8sQ0FBQyxDQUFDO0FBQ3BELENBQUM7QUFFRDtJQXdDRTtRQUNFLE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxFQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQ3ZCLENBQUM7Ozs7O0lBQ00sb0JBQU87Ozs7SUFBZCxVQUFlLFdBQW9CO1FBQ2pDLEdBQUcsQ0FBQyxvQkFBb0IsR0FBRyxXQUFXLENBQUE7UUFDdEMsT0FBTztZQUNMLFFBQVEsRUFBRSxZQUFZO1NBQ3ZCLENBQUM7SUFDSixDQUFDOztnQkFoREYsUUFBUSxTQUFDO29CQUNSLFlBQVksRUFBRSxDQUFDLGtCQUFrQjt3QkFDL0IsNEJBQTRCLENBQUM7b0JBQy9CLE9BQU8sRUFBRTt3QkFDUCxhQUFhO3dCQUNiLHNCQUFzQjt3QkFDdEIsZ0JBQWdCO3dCQUNoQixpQkFBaUI7d0JBQ2pCLGVBQWUsQ0FBQyxPQUFPLEVBQUU7cUJBQzFCO29CQUNELE9BQU8sRUFBRzt3QkFDUiw0QkFBNEI7d0JBQzVCLGtCQUFrQjt3QkFDbEIsc0JBQXNCO3FCQUN2QjtvQkFDRCxTQUFTLEVBQUU7d0JBQ1QsYUFBYTt3QkFDYixhQUFhO3dCQUNiLG1CQUFtQjt3QkFDbkI7NEJBQ0UsT0FBTyxFQUFFLGVBQWU7NEJBQ3hCLFVBQVUsRUFBRSxhQUFhOzRCQUN6QixJQUFJLEVBQUUsQ0FBQyxtQkFBbUIsQ0FBQzs0QkFDM0IsS0FBSyxFQUFFLElBQUk7eUJBQ1o7d0JBQ0Q7NEJBQ0UsT0FBTyxFQUFFLGlCQUFpQjs0QkFDMUIsUUFBUSxFQUFFLHVCQUF1Qjs0QkFDakMsS0FBSyxFQUFFLElBQUk7eUJBQ1o7d0JBQ0Qsa0JBQWtCO3dCQUNsQjs0QkFDRSxPQUFPLEVBQUUsaUJBQWlCOzRCQUMxQixVQUFVLEVBQUUsdUJBQXVCOzRCQUNuQyxLQUFLLEVBQUUsSUFBSTs0QkFDWCxJQUFJLEVBQUUsQ0FBQyxrQkFBa0IsQ0FBQzt5QkFDM0I7cUJBQ0Y7aUJBQ0Y7Ozs7SUFXRCxtQkFBQztDQUFBLEFBakRELElBaURDO1NBVlksWUFBWSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7QnJvd3Nlck1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3Nlcic7XG5pbXBvcnQgeyBBUFBfSU5JVElBTElaRVIsIE1vZHVsZVdpdGhQcm92aWRlcnMsIE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge0hUVFBfSU5URVJDRVBUT1JTLCBIdHRwQ2xpZW50TW9kdWxlfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XG5pbXBvcnQge0VkaXRvckFwcENvbXBvbmVudH0gZnJvbSAnLi9lZGl0b3ItYXBwLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBGb250QXdlc29tZU1vZHVsZSB9IGZyb20gJ0Bmb3J0YXdlc29tZS9hbmd1bGFyLWZvbnRhd2Vzb21lJztcbmltcG9ydCB7IGxpYnJhcnkgfSBmcm9tICdAZm9ydGF3ZXNvbWUvZm9udGF3ZXNvbWUtc3ZnLWNvcmUnO1xuaW1wb3J0IHsgZmFzIH0gZnJvbSAnQGZvcnRhd2Vzb21lL2ZyZWUtc29saWQtc3ZnLWljb25zJztcbmltcG9ydCB7IGZhciB9IGZyb20gJ0Bmb3J0YXdlc29tZS9mcmVlLXJlZ3VsYXItc3ZnLWljb25zJztcbmltcG9ydCB7Q3JlYXRlRG9jdW1lbnRNb2RhbENvbXBvbmVudH0gZnJvbSAnLi9jcmVhdGUuZG9jdW1lbnQtbW9kYWwvY3JlYXRlLmRvY3VtZW50LW1vZGFsLmNvbXBvbmVudCc7XG5pbXBvcnQge0VkaXRvclNlcnZpY2V9IGZyb20gXCIuL2VkaXRvci5zZXJ2aWNlXCI7XG5pbXBvcnQge1xuICBDb21tb25Db21wb25lbnRzTW9kdWxlLFxuICBFcnJvckludGVyY2VwdG9yU2VydmljZSxcbiAgQ29uZmlnU2VydmljZSxcbiAgTG9hZGluZ01hc2tTZXJ2aWNlLFxuICBMb2FkaW5nTWFza0ludGVyY2VwdG9yU2VydmljZSwgXG4gIEFwaVxufSBmcm9tICdAZ3JvdXBkb2NzLmV4YW1wbGVzLmFuZ3VsYXIvY29tbW9uLWNvbXBvbmVudHMnO1xuaW1wb3J0IHtFZGl0b3JDb25maWdTZXJ2aWNlfSBmcm9tIFwiLi9lZGl0b3ItY29uZmlnLnNlcnZpY2VcIjtcbmltcG9ydCB7VHJhbnNsYXRlTW9kdWxlfSBmcm9tICdAbmd4LXRyYW5zbGF0ZS9jb3JlJztcblxuZXhwb3J0IGZ1bmN0aW9uIGluaXRpYWxpemVBcHAoZWRpdG9yQ29uZmlnU2VydmljZTogRWRpdG9yQ29uZmlnU2VydmljZSkge1xuICBjb25zdCByZXN1bHQgPSAgKCkgPT4gZWRpdG9yQ29uZmlnU2VydmljZS5sb2FkKCk7XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbi8vIE5PVEU6IHRoaXMgaXMgcmVxdWlyZWQgZHVyaW5nIGxpYnJhcnkgY29tcGlsYXRpb24gc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9hbmd1bGFyL2FuZ3VsYXIvaXNzdWVzLzIzNjI5I2lzc3VlY29tbWVudC00NDA5NDI5ODFcbi8vIEBkeW5hbWljXG5leHBvcnQgZnVuY3Rpb24gc2V0dXBMb2FkaW5nSW50ZXJjZXB0b3Ioc2VydmljZTogTG9hZGluZ01hc2tTZXJ2aWNlKSB7XG4gIHJldHVybiBuZXcgTG9hZGluZ01hc2tJbnRlcmNlcHRvclNlcnZpY2Uoc2VydmljZSk7XG59XG5cbkBOZ01vZHVsZSh7XG4gIGRlY2xhcmF0aW9ucyA6W0VkaXRvckFwcENvbXBvbmVudCxcbiAgICBDcmVhdGVEb2N1bWVudE1vZGFsQ29tcG9uZW50XSxcbiAgaW1wb3J0czogW1xuICAgIEJyb3dzZXJNb2R1bGUsXG4gICAgQ29tbW9uQ29tcG9uZW50c01vZHVsZSxcbiAgICBIdHRwQ2xpZW50TW9kdWxlLFxuICAgIEZvbnRBd2Vzb21lTW9kdWxlLFxuICAgIFRyYW5zbGF0ZU1vZHVsZS5mb3JSb290KCksXG4gIF0sXG4gIGV4cG9ydHMgOiBbXG4gICAgQ3JlYXRlRG9jdW1lbnRNb2RhbENvbXBvbmVudCxcbiAgICBFZGl0b3JBcHBDb21wb25lbnQsXG4gICAgQ29tbW9uQ29tcG9uZW50c01vZHVsZVxuICBdLFxuICBwcm92aWRlcnM6IFtcbiAgICBFZGl0b3JTZXJ2aWNlLFxuICAgIENvbmZpZ1NlcnZpY2UsXG4gICAgRWRpdG9yQ29uZmlnU2VydmljZSxcbiAgICB7XG4gICAgICBwcm92aWRlOiBBUFBfSU5JVElBTElaRVIsXG4gICAgICB1c2VGYWN0b3J5OiBpbml0aWFsaXplQXBwLFxuICAgICAgZGVwczogW0VkaXRvckNvbmZpZ1NlcnZpY2VdLFxuICAgICAgbXVsdGk6IHRydWVcbiAgICB9LFxuICAgIHtcbiAgICAgIHByb3ZpZGU6IEhUVFBfSU5URVJDRVBUT1JTLFxuICAgICAgdXNlQ2xhc3M6IEVycm9ySW50ZXJjZXB0b3JTZXJ2aWNlLFxuICAgICAgbXVsdGk6IHRydWVcbiAgICB9LFxuICAgIExvYWRpbmdNYXNrU2VydmljZSxcbiAgICB7XG4gICAgICBwcm92aWRlOiBIVFRQX0lOVEVSQ0VQVE9SUyxcbiAgICAgIHVzZUZhY3Rvcnk6IHNldHVwTG9hZGluZ0ludGVyY2VwdG9yLFxuICAgICAgbXVsdGk6IHRydWUsXG4gICAgICBkZXBzOiBbTG9hZGluZ01hc2tTZXJ2aWNlXVxuICAgIH1cbiAgXVxufSlcbmV4cG9ydCBjbGFzcyBFZGl0b3JNb2R1bGUge1xuICBjb25zdHJ1Y3Rvcigpe1xuICAgIGxpYnJhcnkuYWRkKGZhcyxmYXIpO1xuICB9XG4gIHN0YXRpYyBmb3JSb290KGFwaUVuZHBvaW50IDogc3RyaW5nKTogTW9kdWxlV2l0aFByb3ZpZGVycyB7XG4gICAgQXBpLkRFRkFVTFRfQVBJX0VORFBPSU5UID0gYXBpRW5kcG9pbnRcbiAgICByZXR1cm4ge1xuICAgICAgbmdNb2R1bGU6IEVkaXRvck1vZHVsZVxuICAgIH07XG4gIH1cbn1cbiJdfQ==