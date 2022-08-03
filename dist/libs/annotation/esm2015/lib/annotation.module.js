/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { APP_INITIALIZER, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Api, CommonComponentsModule, ConfigService, ErrorInterceptorService, LoadingMaskInterceptorService, LoadingMaskService } from "@groupdocs.examples.angular/common-components";
import { AnnotationConfigService } from "./annotation-config.service";
import { HTTP_INTERCEPTORS, HttpClientModule } from "@angular/common/http";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import { ClickOutsideModule } from "ng-click-outside";
import { AnnotationAppComponent } from './annotation-app.component';
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";
import { AnnotationComponent } from './annotation/annotation.component';
import { ActiveAnnotationService } from "./active-annotation.service";
import { RemoveAnnotationService } from "./remove-annotation.service";
import { CommentAnnotationService } from "./comment-annotation.service";
import { CommentPanelComponent } from './comment-panel/comment-panel.component';
import { CommentComponent } from './comment/comment.component';
import { CreateCommentComponent } from './create-comment/create-comment.component';
import { TranslateModule } from '@ngx-translate/core';
/**
 * @param {?} annotationConfigService
 * @return {?}
 */
export function initializeApp(annotationConfigService) {
    /** @type {?} */
    const result = (/**
     * @return {?}
     */
    () => annotationConfigService.load());
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
export class AnnotationModule {
    constructor() {
        library.add(fas, far);
    }
    /**
     * @param {?} apiEndpoint
     * @return {?}
     */
    static forRoot(apiEndpoint) {
        Api.DEFAULT_API_ENDPOINT = apiEndpoint;
        return {
            ngModule: AnnotationModule
        };
    }
}
AnnotationModule.decorators = [
    { type: NgModule, args: [{
                declarations: [AnnotationAppComponent, AnnotationComponent, CommentPanelComponent, CommentComponent, CreateCommentComponent,
                ],
                exports: [CommonComponentsModule, AnnotationAppComponent, AnnotationComponent, CommentPanelComponent, CommentComponent, CreateCommentComponent],
                imports: [CommonModule,
                    CommonComponentsModule,
                    HttpClientModule,
                    FontAwesomeModule,
                    ClickOutsideModule,
                    TranslateModule.forRoot()
                ],
                providers: [
                    ConfigService,
                    AnnotationConfigService,
                    ActiveAnnotationService,
                    RemoveAnnotationService,
                    CommentAnnotationService,
                    {
                        provide: HTTP_INTERCEPTORS,
                        useClass: ErrorInterceptorService,
                        multi: true
                    },
                    {
                        provide: APP_INITIALIZER,
                        useFactory: initializeApp,
                        deps: [AnnotationConfigService], multi: true
                    },
                    LoadingMaskService,
                    {
                        provide: HTTP_INTERCEPTORS,
                        useFactory: setupLoadingInterceptor,
                        multi: true,
                        deps: [LoadingMaskService]
                    }
                ],
                entryComponents: [AnnotationComponent],
            },] }
];
/** @nocollapse */
AnnotationModule.ctorParameters = () => [];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYW5ub3RhdGlvbi5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ3JvdXBkb2NzLmV4YW1wbGVzLmFuZ3VsYXIvYW5ub3RhdGlvbi8iLCJzb3VyY2VzIjpbImxpYi9hbm5vdGF0aW9uLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFDLGVBQWUsRUFBdUIsUUFBUSxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQzdFLE9BQU8sRUFBQyxZQUFZLEVBQUMsTUFBTSxpQkFBaUIsQ0FBQztBQUM3QyxPQUFPLEVBQ0wsR0FBRyxFQUNILHNCQUFzQixFQUN0QixhQUFhLEVBQ2IsdUJBQXVCLEVBQUUsNkJBQTZCLEVBQUUsa0JBQWtCLEVBQzNFLE1BQU0sK0NBQStDLENBQUM7QUFDdkQsT0FBTyxFQUFDLHVCQUF1QixFQUFDLE1BQU0sNkJBQTZCLENBQUM7QUFDcEUsT0FBTyxFQUFDLGlCQUFpQixFQUFFLGdCQUFnQixFQUFDLE1BQU0sc0JBQXNCLENBQUM7QUFDekUsT0FBTyxFQUFDLGlCQUFpQixFQUFDLE1BQU0sa0NBQWtDLENBQUM7QUFDbkUsT0FBTyxFQUFDLGtCQUFrQixFQUFDLE1BQU0sa0JBQWtCLENBQUM7QUFDcEQsT0FBTyxFQUFDLHNCQUFzQixFQUFDLE1BQU0sNEJBQTRCLENBQUM7QUFDbEUsT0FBTyxFQUFDLE9BQU8sRUFBQyxNQUFNLG1DQUFtQyxDQUFDO0FBQzFELE9BQU8sRUFBQyxHQUFHLEVBQUMsTUFBTSxtQ0FBbUMsQ0FBQztBQUN0RCxPQUFPLEVBQUMsR0FBRyxFQUFDLE1BQU0scUNBQXFDLENBQUM7QUFDeEQsT0FBTyxFQUFDLG1CQUFtQixFQUFDLE1BQU0sbUNBQW1DLENBQUM7QUFDdEUsT0FBTyxFQUFDLHVCQUF1QixFQUFDLE1BQU0sNkJBQTZCLENBQUM7QUFDcEUsT0FBTyxFQUFDLHVCQUF1QixFQUFDLE1BQU0sNkJBQTZCLENBQUM7QUFDcEUsT0FBTyxFQUFDLHdCQUF3QixFQUFDLE1BQU0sOEJBQThCLENBQUM7QUFDdEUsT0FBTyxFQUFDLHFCQUFxQixFQUFDLE1BQU0seUNBQXlDLENBQUM7QUFDOUUsT0FBTyxFQUFDLGdCQUFnQixFQUFDLE1BQU0sNkJBQTZCLENBQUM7QUFDN0QsT0FBTyxFQUFDLHNCQUFzQixFQUFDLE1BQU0sMkNBQTJDLENBQUM7QUFDakYsT0FBTyxFQUFDLGVBQWUsRUFBQyxNQUFNLHFCQUFxQixDQUFDOzs7OztBQUVwRCxNQUFNLFVBQVUsYUFBYSxDQUFDLHVCQUFnRDs7VUFDdEUsTUFBTTs7O0lBQUcsR0FBRyxFQUFFLENBQUMsdUJBQXVCLENBQUMsSUFBSSxFQUFFLENBQUE7SUFDbkQsT0FBTyxNQUFNLENBQUM7QUFDaEIsQ0FBQzs7Ozs7OztBQUlELE1BQU0sVUFBVSx1QkFBdUIsQ0FBQyxPQUEyQjtJQUNqRSxPQUFPLElBQUksNkJBQTZCLENBQUMsT0FBTyxDQUFDLENBQUM7QUFDcEQsQ0FBQztBQTBDRCxNQUFNLE9BQU8sZ0JBQWdCO0lBQzNCO1FBQ0UsT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDLENBQUM7SUFDeEIsQ0FBQzs7Ozs7SUFFRCxNQUFNLENBQUMsT0FBTyxDQUFDLFdBQW1CO1FBQ2hDLEdBQUcsQ0FBQyxvQkFBb0IsR0FBRyxXQUFXLENBQUM7UUFDdkMsT0FBTztZQUNMLFFBQVEsRUFBRSxnQkFBZ0I7U0FDM0IsQ0FBQztJQUNKLENBQUM7OztZQWxERixRQUFRLFNBQUM7Z0JBQ1IsWUFBWSxFQUFFLENBQUMsc0JBQXNCLEVBQUUsbUJBQW1CLEVBQUUscUJBQXFCLEVBQUUsZ0JBQWdCLEVBQUUsc0JBQXNCO2lCQUMxSDtnQkFDRCxPQUFPLEVBQUUsQ0FBQyxzQkFBc0IsRUFBRSxzQkFBc0IsRUFBRSxtQkFBbUIsRUFBRSxxQkFBcUIsRUFBRSxnQkFBZ0IsRUFBRSxzQkFBc0IsQ0FBQztnQkFDL0ksT0FBTyxFQUNMLENBQUMsWUFBWTtvQkFDWCxzQkFBc0I7b0JBQ3RCLGdCQUFnQjtvQkFDaEIsaUJBQWlCO29CQUNqQixrQkFBa0I7b0JBQ2xCLGVBQWUsQ0FBQyxPQUFPLEVBQUU7aUJBQzFCO2dCQUNILFNBQVMsRUFDUDtvQkFDRSxhQUFhO29CQUNiLHVCQUF1QjtvQkFDdkIsdUJBQXVCO29CQUN2Qix1QkFBdUI7b0JBQ3ZCLHdCQUF3QjtvQkFDeEI7d0JBQ0UsT0FBTyxFQUFFLGlCQUFpQjt3QkFDMUIsUUFBUSxFQUFFLHVCQUF1Qjt3QkFDakMsS0FBSyxFQUFFLElBQUk7cUJBQ1o7b0JBQ0Q7d0JBQ0UsT0FBTyxFQUFFLGVBQWU7d0JBQ3hCLFVBQVUsRUFBRSxhQUFhO3dCQUN6QixJQUFJLEVBQUUsQ0FBQyx1QkFBdUIsQ0FBQyxFQUFFLEtBQUssRUFBRSxJQUFJO3FCQUM3QztvQkFDRCxrQkFBa0I7b0JBQ2xCO3dCQUNFLE9BQU8sRUFBRSxpQkFBaUI7d0JBQzFCLFVBQVUsRUFBRSx1QkFBdUI7d0JBQ25DLEtBQUssRUFBRSxJQUFJO3dCQUNYLElBQUksRUFBRSxDQUFDLGtCQUFrQixDQUFDO3FCQUMzQjtpQkFDRjtnQkFDSCxlQUFlLEVBQUUsQ0FBQyxtQkFBbUIsQ0FBQzthQUN2QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7QVBQX0lOSVRJQUxJWkVSLCBNb2R1bGVXaXRoUHJvdmlkZXJzLCBOZ01vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge0NvbW1vbk1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7XG4gIEFwaSxcbiAgQ29tbW9uQ29tcG9uZW50c01vZHVsZSxcbiAgQ29uZmlnU2VydmljZSxcbiAgRXJyb3JJbnRlcmNlcHRvclNlcnZpY2UsIExvYWRpbmdNYXNrSW50ZXJjZXB0b3JTZXJ2aWNlLCBMb2FkaW5nTWFza1NlcnZpY2Vcbn0gZnJvbSBcIkBncm91cGRvY3MuZXhhbXBsZXMuYW5ndWxhci9jb21tb24tY29tcG9uZW50c1wiO1xuaW1wb3J0IHtBbm5vdGF0aW9uQ29uZmlnU2VydmljZX0gZnJvbSBcIi4vYW5ub3RhdGlvbi1jb25maWcuc2VydmljZVwiO1xuaW1wb3J0IHtIVFRQX0lOVEVSQ0VQVE9SUywgSHR0cENsaWVudE1vZHVsZX0gZnJvbSBcIkBhbmd1bGFyL2NvbW1vbi9odHRwXCI7XG5pbXBvcnQge0ZvbnRBd2Vzb21lTW9kdWxlfSBmcm9tIFwiQGZvcnRhd2Vzb21lL2FuZ3VsYXItZm9udGF3ZXNvbWVcIjtcbmltcG9ydCB7Q2xpY2tPdXRzaWRlTW9kdWxlfSBmcm9tIFwibmctY2xpY2stb3V0c2lkZVwiO1xuaW1wb3J0IHtBbm5vdGF0aW9uQXBwQ29tcG9uZW50fSBmcm9tICcuL2Fubm90YXRpb24tYXBwLmNvbXBvbmVudCc7XG5pbXBvcnQge2xpYnJhcnl9IGZyb20gXCJAZm9ydGF3ZXNvbWUvZm9udGF3ZXNvbWUtc3ZnLWNvcmVcIjtcbmltcG9ydCB7ZmFzfSBmcm9tIFwiQGZvcnRhd2Vzb21lL2ZyZWUtc29saWQtc3ZnLWljb25zXCI7XG5pbXBvcnQge2Zhcn0gZnJvbSBcIkBmb3J0YXdlc29tZS9mcmVlLXJlZ3VsYXItc3ZnLWljb25zXCI7XG5pbXBvcnQge0Fubm90YXRpb25Db21wb25lbnR9IGZyb20gJy4vYW5ub3RhdGlvbi9hbm5vdGF0aW9uLmNvbXBvbmVudCc7XG5pbXBvcnQge0FjdGl2ZUFubm90YXRpb25TZXJ2aWNlfSBmcm9tIFwiLi9hY3RpdmUtYW5ub3RhdGlvbi5zZXJ2aWNlXCI7XG5pbXBvcnQge1JlbW92ZUFubm90YXRpb25TZXJ2aWNlfSBmcm9tIFwiLi9yZW1vdmUtYW5ub3RhdGlvbi5zZXJ2aWNlXCI7XG5pbXBvcnQge0NvbW1lbnRBbm5vdGF0aW9uU2VydmljZX0gZnJvbSBcIi4vY29tbWVudC1hbm5vdGF0aW9uLnNlcnZpY2VcIjtcbmltcG9ydCB7Q29tbWVudFBhbmVsQ29tcG9uZW50fSBmcm9tICcuL2NvbW1lbnQtcGFuZWwvY29tbWVudC1wYW5lbC5jb21wb25lbnQnO1xuaW1wb3J0IHtDb21tZW50Q29tcG9uZW50fSBmcm9tICcuL2NvbW1lbnQvY29tbWVudC5jb21wb25lbnQnO1xuaW1wb3J0IHtDcmVhdGVDb21tZW50Q29tcG9uZW50fSBmcm9tICcuL2NyZWF0ZS1jb21tZW50L2NyZWF0ZS1jb21tZW50LmNvbXBvbmVudCc7XG5pbXBvcnQge1RyYW5zbGF0ZU1vZHVsZX0gZnJvbSAnQG5neC10cmFuc2xhdGUvY29yZSc7XG5cbmV4cG9ydCBmdW5jdGlvbiBpbml0aWFsaXplQXBwKGFubm90YXRpb25Db25maWdTZXJ2aWNlOiBBbm5vdGF0aW9uQ29uZmlnU2VydmljZSkge1xuICBjb25zdCByZXN1bHQgPSAoKSA9PiBhbm5vdGF0aW9uQ29uZmlnU2VydmljZS5sb2FkKCk7XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbi8vIE5PVEU6IHRoaXMgaXMgcmVxdWlyZWQgZHVyaW5nIGxpYnJhcnkgY29tcGlsYXRpb24gc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9hbmd1bGFyL2FuZ3VsYXIvaXNzdWVzLzIzNjI5I2lzc3VlY29tbWVudC00NDA5NDI5ODFcbi8vIEBkeW5hbWljXG5leHBvcnQgZnVuY3Rpb24gc2V0dXBMb2FkaW5nSW50ZXJjZXB0b3Ioc2VydmljZTogTG9hZGluZ01hc2tTZXJ2aWNlKSB7XG4gIHJldHVybiBuZXcgTG9hZGluZ01hc2tJbnRlcmNlcHRvclNlcnZpY2Uoc2VydmljZSk7XG59XG5cbkBOZ01vZHVsZSh7XG4gIGRlY2xhcmF0aW9uczogW0Fubm90YXRpb25BcHBDb21wb25lbnQsIEFubm90YXRpb25Db21wb25lbnQsIENvbW1lbnRQYW5lbENvbXBvbmVudCwgQ29tbWVudENvbXBvbmVudCwgQ3JlYXRlQ29tbWVudENvbXBvbmVudCxcbiAgXSxcbiAgZXhwb3J0czogW0NvbW1vbkNvbXBvbmVudHNNb2R1bGUsIEFubm90YXRpb25BcHBDb21wb25lbnQsIEFubm90YXRpb25Db21wb25lbnQsIENvbW1lbnRQYW5lbENvbXBvbmVudCwgQ29tbWVudENvbXBvbmVudCwgQ3JlYXRlQ29tbWVudENvbXBvbmVudF0sXG4gIGltcG9ydHM6XG4gICAgW0NvbW1vbk1vZHVsZSxcbiAgICAgIENvbW1vbkNvbXBvbmVudHNNb2R1bGUsXG4gICAgICBIdHRwQ2xpZW50TW9kdWxlLFxuICAgICAgRm9udEF3ZXNvbWVNb2R1bGUsXG4gICAgICBDbGlja091dHNpZGVNb2R1bGUsXG4gICAgICBUcmFuc2xhdGVNb2R1bGUuZm9yUm9vdCgpXG4gICAgXSxcbiAgcHJvdmlkZXJzOlxuICAgIFtcbiAgICAgIENvbmZpZ1NlcnZpY2UsXG4gICAgICBBbm5vdGF0aW9uQ29uZmlnU2VydmljZSxcbiAgICAgIEFjdGl2ZUFubm90YXRpb25TZXJ2aWNlLFxuICAgICAgUmVtb3ZlQW5ub3RhdGlvblNlcnZpY2UsXG4gICAgICBDb21tZW50QW5ub3RhdGlvblNlcnZpY2UsXG4gICAgICB7XG4gICAgICAgIHByb3ZpZGU6IEhUVFBfSU5URVJDRVBUT1JTLFxuICAgICAgICB1c2VDbGFzczogRXJyb3JJbnRlcmNlcHRvclNlcnZpY2UsXG4gICAgICAgIG11bHRpOiB0cnVlXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBwcm92aWRlOiBBUFBfSU5JVElBTElaRVIsXG4gICAgICAgIHVzZUZhY3Rvcnk6IGluaXRpYWxpemVBcHAsXG4gICAgICAgIGRlcHM6IFtBbm5vdGF0aW9uQ29uZmlnU2VydmljZV0sIG11bHRpOiB0cnVlXG4gICAgICB9LFxuICAgICAgTG9hZGluZ01hc2tTZXJ2aWNlLFxuICAgICAge1xuICAgICAgICBwcm92aWRlOiBIVFRQX0lOVEVSQ0VQVE9SUyxcbiAgICAgICAgdXNlRmFjdG9yeTogc2V0dXBMb2FkaW5nSW50ZXJjZXB0b3IsXG4gICAgICAgIG11bHRpOiB0cnVlLFxuICAgICAgICBkZXBzOiBbTG9hZGluZ01hc2tTZXJ2aWNlXVxuICAgICAgfVxuICAgIF0sXG4gIGVudHJ5Q29tcG9uZW50czogW0Fubm90YXRpb25Db21wb25lbnRdLFxufSlcblxuZXhwb3J0IGNsYXNzIEFubm90YXRpb25Nb2R1bGUge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBsaWJyYXJ5LmFkZChmYXMsIGZhcik7XG4gIH1cblxuICBzdGF0aWMgZm9yUm9vdChhcGlFbmRwb2ludDogc3RyaW5nKTogTW9kdWxlV2l0aFByb3ZpZGVycyB7XG4gICAgQXBpLkRFRkFVTFRfQVBJX0VORFBPSU5UID0gYXBpRW5kcG9pbnQ7XG4gICAgcmV0dXJuIHtcbiAgICAgIG5nTW9kdWxlOiBBbm5vdGF0aW9uTW9kdWxlXG4gICAgfTtcbiAgfVxufVxuIl19