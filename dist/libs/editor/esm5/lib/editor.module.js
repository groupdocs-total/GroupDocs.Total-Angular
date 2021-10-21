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
                    declarations: [EditorAppComponent, CreateDocumentModalComponent],
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZWRpdG9yLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bncm91cGRvY3MuZXhhbXBsZXMuYW5ndWxhci9lZGl0b3IvIiwic291cmNlcyI6WyJsaWIvZWRpdG9yLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFDLGFBQWEsRUFBQyxNQUFNLDJCQUEyQixDQUFDO0FBQ3hELE9BQU8sRUFBRSxlQUFlLEVBQXVCLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMvRSxPQUFPLEVBQUMsaUJBQWlCLEVBQUUsZ0JBQWdCLEVBQUMsTUFBTSxzQkFBc0IsQ0FBQztBQUN6RSxPQUFPLEVBQUMsa0JBQWtCLEVBQUMsTUFBTSx3QkFBd0IsQ0FBQztBQUMxRCxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxrQ0FBa0MsQ0FBQztBQUNyRSxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sbUNBQW1DLENBQUM7QUFDNUQsT0FBTyxFQUFFLEdBQUcsRUFBRSxNQUFNLG1DQUFtQyxDQUFDO0FBQ3hELE9BQU8sRUFBRSxHQUFHLEVBQUUsTUFBTSxxQ0FBcUMsQ0FBQztBQUMxRCxPQUFPLEVBQUMsNEJBQTRCLEVBQUMsTUFBTSx5REFBeUQsQ0FBQztBQUNyRyxPQUFPLEVBQUMsYUFBYSxFQUFDLE1BQU0sa0JBQWtCLENBQUM7QUFDL0MsT0FBTyxFQUNMLHNCQUFzQixFQUN0Qix1QkFBdUIsRUFDdkIsYUFBYSxFQUNiLGtCQUFrQixFQUNsQiw2QkFBNkIsRUFBRSxHQUFHLEVBQ25DLE1BQU0sK0NBQStDLENBQUM7QUFDdkQsT0FBTyxFQUFDLG1CQUFtQixFQUFDLE1BQU0seUJBQXlCLENBQUM7QUFDNUQsT0FBTyxFQUFDLGVBQWUsRUFBQyxNQUFNLHFCQUFxQixDQUFDOzs7OztBQUVwRCxNQUFNLFVBQVUsYUFBYSxDQUFDLG1CQUF3Qzs7UUFDOUQsTUFBTTs7O0lBQUksY0FBTSxPQUFBLG1CQUFtQixDQUFDLElBQUksRUFBRSxFQUExQixDQUEwQixDQUFBO0lBQ2hELE9BQU8sTUFBTSxDQUFDO0FBQ2hCLENBQUM7Ozs7Ozs7QUFJRCxNQUFNLFVBQVUsdUJBQXVCLENBQUMsT0FBMkI7SUFDakUsT0FBTyxJQUFJLDZCQUE2QixDQUFDLE9BQU8sQ0FBQyxDQUFDO0FBQ3BELENBQUM7QUFFRDtJQXVDRTtRQUNFLE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxFQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQ3ZCLENBQUM7Ozs7O0lBQ00sb0JBQU87Ozs7SUFBZCxVQUFlLFdBQW9CO1FBQ2pDLEdBQUcsQ0FBQyxvQkFBb0IsR0FBRyxXQUFXLENBQUE7UUFDdEMsT0FBTztZQUNMLFFBQVEsRUFBRSxZQUFZO1NBQ3ZCLENBQUM7SUFDSixDQUFDOztnQkEvQ0YsUUFBUSxTQUFDO29CQUNSLFlBQVksRUFBRSxDQUFDLGtCQUFrQixFQUFDLDRCQUE0QixDQUFDO29CQUMvRCxPQUFPLEVBQUU7d0JBQ1AsYUFBYTt3QkFDYixzQkFBc0I7d0JBQ3RCLGdCQUFnQjt3QkFDaEIsaUJBQWlCO3dCQUNqQixlQUFlLENBQUMsT0FBTyxFQUFFO3FCQUMxQjtvQkFDRCxPQUFPLEVBQUc7d0JBQ1IsNEJBQTRCO3dCQUM1QixrQkFBa0I7d0JBQ2xCLHNCQUFzQjtxQkFDdkI7b0JBQ0QsU0FBUyxFQUFFO3dCQUNULGFBQWE7d0JBQ2IsYUFBYTt3QkFDYixtQkFBbUI7d0JBQ25COzRCQUNFLE9BQU8sRUFBRSxlQUFlOzRCQUN4QixVQUFVLEVBQUUsYUFBYTs0QkFDekIsSUFBSSxFQUFFLENBQUMsbUJBQW1CLENBQUM7NEJBQzNCLEtBQUssRUFBRSxJQUFJO3lCQUNaO3dCQUNEOzRCQUNFLE9BQU8sRUFBRSxpQkFBaUI7NEJBQzFCLFFBQVEsRUFBRSx1QkFBdUI7NEJBQ2pDLEtBQUssRUFBRSxJQUFJO3lCQUNaO3dCQUNELGtCQUFrQjt3QkFDbEI7NEJBQ0UsT0FBTyxFQUFFLGlCQUFpQjs0QkFDMUIsVUFBVSxFQUFFLHVCQUF1Qjs0QkFDbkMsS0FBSyxFQUFFLElBQUk7NEJBQ1gsSUFBSSxFQUFFLENBQUMsa0JBQWtCLENBQUM7eUJBQzNCO3FCQUNGO2lCQUNGOzs7O0lBV0QsbUJBQUM7Q0FBQSxBQWhERCxJQWdEQztTQVZZLFlBQVkiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0Jyb3dzZXJNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXInO1xuaW1wb3J0IHsgQVBQX0lOSVRJQUxJWkVSLCBNb2R1bGVXaXRoUHJvdmlkZXJzLCBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtIVFRQX0lOVEVSQ0VQVE9SUywgSHR0cENsaWVudE1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuaW1wb3J0IHtFZGl0b3JBcHBDb21wb25lbnR9IGZyb20gJy4vZWRpdG9yLWFwcC5jb21wb25lbnQnO1xuaW1wb3J0IHsgRm9udEF3ZXNvbWVNb2R1bGUgfSBmcm9tICdAZm9ydGF3ZXNvbWUvYW5ndWxhci1mb250YXdlc29tZSc7XG5pbXBvcnQgeyBsaWJyYXJ5IH0gZnJvbSAnQGZvcnRhd2Vzb21lL2ZvbnRhd2Vzb21lLXN2Zy1jb3JlJztcbmltcG9ydCB7IGZhcyB9IGZyb20gJ0Bmb3J0YXdlc29tZS9mcmVlLXNvbGlkLXN2Zy1pY29ucyc7XG5pbXBvcnQgeyBmYXIgfSBmcm9tICdAZm9ydGF3ZXNvbWUvZnJlZS1yZWd1bGFyLXN2Zy1pY29ucyc7XG5pbXBvcnQge0NyZWF0ZURvY3VtZW50TW9kYWxDb21wb25lbnR9IGZyb20gJy4vY3JlYXRlLmRvY3VtZW50LW1vZGFsL2NyZWF0ZS5kb2N1bWVudC1tb2RhbC5jb21wb25lbnQnO1xuaW1wb3J0IHtFZGl0b3JTZXJ2aWNlfSBmcm9tIFwiLi9lZGl0b3Iuc2VydmljZVwiO1xuaW1wb3J0IHtcbiAgQ29tbW9uQ29tcG9uZW50c01vZHVsZSxcbiAgRXJyb3JJbnRlcmNlcHRvclNlcnZpY2UsXG4gIENvbmZpZ1NlcnZpY2UsXG4gIExvYWRpbmdNYXNrU2VydmljZSxcbiAgTG9hZGluZ01hc2tJbnRlcmNlcHRvclNlcnZpY2UsIEFwaVxufSBmcm9tICdAZ3JvdXBkb2NzLmV4YW1wbGVzLmFuZ3VsYXIvY29tbW9uLWNvbXBvbmVudHMnO1xuaW1wb3J0IHtFZGl0b3JDb25maWdTZXJ2aWNlfSBmcm9tIFwiLi9lZGl0b3ItY29uZmlnLnNlcnZpY2VcIjtcbmltcG9ydCB7VHJhbnNsYXRlTW9kdWxlfSBmcm9tICdAbmd4LXRyYW5zbGF0ZS9jb3JlJztcblxuZXhwb3J0IGZ1bmN0aW9uIGluaXRpYWxpemVBcHAoZWRpdG9yQ29uZmlnU2VydmljZTogRWRpdG9yQ29uZmlnU2VydmljZSkge1xuICBjb25zdCByZXN1bHQgPSAgKCkgPT4gZWRpdG9yQ29uZmlnU2VydmljZS5sb2FkKCk7XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbi8vIE5PVEU6IHRoaXMgaXMgcmVxdWlyZWQgZHVyaW5nIGxpYnJhcnkgY29tcGlsYXRpb24gc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9hbmd1bGFyL2FuZ3VsYXIvaXNzdWVzLzIzNjI5I2lzc3VlY29tbWVudC00NDA5NDI5ODFcbi8vIEBkeW5hbWljXG5leHBvcnQgZnVuY3Rpb24gc2V0dXBMb2FkaW5nSW50ZXJjZXB0b3Ioc2VydmljZTogTG9hZGluZ01hc2tTZXJ2aWNlKSB7XG4gIHJldHVybiBuZXcgTG9hZGluZ01hc2tJbnRlcmNlcHRvclNlcnZpY2Uoc2VydmljZSk7XG59XG5cbkBOZ01vZHVsZSh7XG4gIGRlY2xhcmF0aW9ucyA6W0VkaXRvckFwcENvbXBvbmVudCxDcmVhdGVEb2N1bWVudE1vZGFsQ29tcG9uZW50XSxcbiAgaW1wb3J0czogW1xuICAgIEJyb3dzZXJNb2R1bGUsXG4gICAgQ29tbW9uQ29tcG9uZW50c01vZHVsZSxcbiAgICBIdHRwQ2xpZW50TW9kdWxlLFxuICAgIEZvbnRBd2Vzb21lTW9kdWxlLFxuICAgIFRyYW5zbGF0ZU1vZHVsZS5mb3JSb290KCksXG4gIF0sXG4gIGV4cG9ydHMgOiBbXG4gICAgQ3JlYXRlRG9jdW1lbnRNb2RhbENvbXBvbmVudCxcbiAgICBFZGl0b3JBcHBDb21wb25lbnQsXG4gICAgQ29tbW9uQ29tcG9uZW50c01vZHVsZVxuICBdLFxuICBwcm92aWRlcnM6IFtcbiAgICBFZGl0b3JTZXJ2aWNlLFxuICAgIENvbmZpZ1NlcnZpY2UsXG4gICAgRWRpdG9yQ29uZmlnU2VydmljZSxcbiAgICB7XG4gICAgICBwcm92aWRlOiBBUFBfSU5JVElBTElaRVIsXG4gICAgICB1c2VGYWN0b3J5OiBpbml0aWFsaXplQXBwLFxuICAgICAgZGVwczogW0VkaXRvckNvbmZpZ1NlcnZpY2VdLFxuICAgICAgbXVsdGk6IHRydWVcbiAgICB9LFxuICAgIHtcbiAgICAgIHByb3ZpZGU6IEhUVFBfSU5URVJDRVBUT1JTLFxuICAgICAgdXNlQ2xhc3M6IEVycm9ySW50ZXJjZXB0b3JTZXJ2aWNlLFxuICAgICAgbXVsdGk6IHRydWVcbiAgICB9LFxuICAgIExvYWRpbmdNYXNrU2VydmljZSxcbiAgICB7XG4gICAgICBwcm92aWRlOiBIVFRQX0lOVEVSQ0VQVE9SUyxcbiAgICAgIHVzZUZhY3Rvcnk6IHNldHVwTG9hZGluZ0ludGVyY2VwdG9yLFxuICAgICAgbXVsdGk6IHRydWUsXG4gICAgICBkZXBzOiBbTG9hZGluZ01hc2tTZXJ2aWNlXVxuICAgIH1cbiAgXVxufSlcbmV4cG9ydCBjbGFzcyBFZGl0b3JNb2R1bGUge1xuICBjb25zdHJ1Y3Rvcigpe1xuICAgIGxpYnJhcnkuYWRkKGZhcyxmYXIpO1xuICB9XG4gIHN0YXRpYyBmb3JSb290KGFwaUVuZHBvaW50IDogc3RyaW5nKTogTW9kdWxlV2l0aFByb3ZpZGVycyB7XG4gICAgQXBpLkRFRkFVTFRfQVBJX0VORFBPSU5UID0gYXBpRW5kcG9pbnRcbiAgICByZXR1cm4ge1xuICAgICAgbmdNb2R1bGU6IEVkaXRvck1vZHVsZVxuICAgIH07XG4gIH1cbn1cbiJdfQ==