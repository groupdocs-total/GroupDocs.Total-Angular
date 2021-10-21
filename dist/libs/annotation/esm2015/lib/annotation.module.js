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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYW5ub3RhdGlvbi5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ3JvdXBkb2NzLmV4YW1wbGVzLmFuZ3VsYXIvYW5ub3RhdGlvbi8iLCJzb3VyY2VzIjpbImxpYi9hbm5vdGF0aW9uLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFDLGVBQWUsRUFBdUIsUUFBUSxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQzdFLE9BQU8sRUFBQyxZQUFZLEVBQUMsTUFBTSxpQkFBaUIsQ0FBQztBQUM3QyxPQUFPLEVBQ0wsR0FBRyxFQUNILHNCQUFzQixFQUN0QixhQUFhLEVBQ2IsdUJBQXVCLEVBQUUsNkJBQTZCLEVBQUUsa0JBQWtCLEVBQzNFLE1BQU0sK0NBQStDLENBQUM7QUFDdkQsT0FBTyxFQUFDLHVCQUF1QixFQUFDLE1BQU0sNkJBQTZCLENBQUM7QUFDcEUsT0FBTyxFQUFDLGlCQUFpQixFQUFFLGdCQUFnQixFQUFDLE1BQU0sc0JBQXNCLENBQUM7QUFDekUsT0FBTyxFQUFDLGlCQUFpQixFQUFDLE1BQU0sa0NBQWtDLENBQUM7QUFDbkUsT0FBTyxFQUFDLGtCQUFrQixFQUFDLE1BQU0sa0JBQWtCLENBQUM7QUFDcEQsT0FBTyxFQUFDLHNCQUFzQixFQUFDLE1BQU0sNEJBQTRCLENBQUM7QUFDbEUsT0FBTyxFQUFDLE9BQU8sRUFBQyxNQUFNLG1DQUFtQyxDQUFDO0FBQzFELE9BQU8sRUFBQyxHQUFHLEVBQUMsTUFBTSxtQ0FBbUMsQ0FBQztBQUN0RCxPQUFPLEVBQUMsR0FBRyxFQUFDLE1BQU0scUNBQXFDLENBQUM7QUFDeEQsT0FBTyxFQUFDLG1CQUFtQixFQUFDLE1BQU0sbUNBQW1DLENBQUM7QUFDdEUsT0FBTyxFQUFDLHVCQUF1QixFQUFDLE1BQU0sNkJBQTZCLENBQUM7QUFDcEUsT0FBTyxFQUFDLHVCQUF1QixFQUFDLE1BQU0sNkJBQTZCLENBQUM7QUFDcEUsT0FBTyxFQUFDLHdCQUF3QixFQUFDLE1BQU0sOEJBQThCLENBQUM7QUFDdEUsT0FBTyxFQUFDLHFCQUFxQixFQUFDLE1BQU0seUNBQXlDLENBQUM7QUFDOUUsT0FBTyxFQUFDLGdCQUFnQixFQUFDLE1BQU0sNkJBQTZCLENBQUM7QUFDN0QsT0FBTyxFQUFDLHNCQUFzQixFQUFDLE1BQU0sMkNBQTJDLENBQUM7QUFDakYsT0FBTyxFQUFDLGVBQWUsRUFBQyxNQUFNLHFCQUFxQixDQUFDOzs7OztBQUVwRCxNQUFNLFVBQVUsYUFBYSxDQUFDLHVCQUFnRDs7VUFDdEUsTUFBTTs7O0lBQUcsR0FBRyxFQUFFLENBQUMsdUJBQXVCLENBQUMsSUFBSSxFQUFFLENBQUE7SUFDbkQsT0FBTyxNQUFNLENBQUM7QUFDaEIsQ0FBQzs7Ozs7OztBQUlELE1BQU0sVUFBVSx1QkFBdUIsQ0FBQyxPQUEyQjtJQUNqRSxPQUFPLElBQUksNkJBQTZCLENBQUMsT0FBTyxDQUFDLENBQUM7QUFDcEQsQ0FBQztBQTBDRCxNQUFNLE9BQU8sZ0JBQWdCO0lBQzNCO1FBQ0UsT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDLENBQUM7SUFDeEIsQ0FBQzs7Ozs7SUFFRCxNQUFNLENBQUMsT0FBTyxDQUFDLFdBQW1CO1FBQ2hDLEdBQUcsQ0FBQyxvQkFBb0IsR0FBRyxXQUFXLENBQUM7UUFDdkMsT0FBTztZQUNMLFFBQVEsRUFBRSxnQkFBZ0I7U0FDM0IsQ0FBQztJQUNKLENBQUM7OztZQWxERixRQUFRLFNBQUM7Z0JBQ1IsWUFBWSxFQUFFLENBQUMsc0JBQXNCLEVBQUUsbUJBQW1CLEVBQUUscUJBQXFCLEVBQUUsZ0JBQWdCLEVBQUUsc0JBQXNCO2lCQUMxSDtnQkFDRCxPQUFPLEVBQUUsQ0FBQyxzQkFBc0IsRUFBRSxzQkFBc0IsRUFBRSxtQkFBbUIsRUFBRSxxQkFBcUIsRUFBRSxnQkFBZ0IsRUFBRSxzQkFBc0IsQ0FBQztnQkFDL0ksT0FBTyxFQUNMLENBQUMsWUFBWTtvQkFDWCxzQkFBc0I7b0JBQ3RCLGdCQUFnQjtvQkFDaEIsaUJBQWlCO29CQUNqQixrQkFBa0I7b0JBQ2xCLGVBQWUsQ0FBQyxPQUFPLEVBQUU7aUJBQzFCO2dCQUNILFNBQVMsRUFDUDtvQkFDRSxhQUFhO29CQUNiLHVCQUF1QjtvQkFDdkIsdUJBQXVCO29CQUN2Qix1QkFBdUI7b0JBQ3ZCLHdCQUF3QjtvQkFDeEI7d0JBQ0UsT0FBTyxFQUFFLGlCQUFpQjt3QkFDMUIsUUFBUSxFQUFFLHVCQUF1Qjt3QkFDakMsS0FBSyxFQUFFLElBQUk7cUJBQ1o7b0JBQ0Q7d0JBQ0UsT0FBTyxFQUFFLGVBQWU7d0JBQ3hCLFVBQVUsRUFBRSxhQUFhO3dCQUN6QixJQUFJLEVBQUUsQ0FBQyx1QkFBdUIsQ0FBQyxFQUFFLEtBQUssRUFBRSxJQUFJO3FCQUM3QztvQkFDRCxrQkFBa0I7b0JBQ2xCO3dCQUNFLE9BQU8sRUFBRSxpQkFBaUI7d0JBQzFCLFVBQVUsRUFBRSx1QkFBdUI7d0JBQ25DLEtBQUssRUFBRSxJQUFJO3dCQUNYLElBQUksRUFBRSxDQUFDLGtCQUFrQixDQUFDO3FCQUMzQjtpQkFDRjtnQkFDSCxlQUFlLEVBQUUsQ0FBQyxtQkFBbUIsQ0FBQzthQUN2QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7QVBQX0lOSVRJQUxJWkVSLCBNb2R1bGVXaXRoUHJvdmlkZXJzLCBOZ01vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7Q29tbW9uTW9kdWxlfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xyXG5pbXBvcnQge1xyXG4gIEFwaSxcclxuICBDb21tb25Db21wb25lbnRzTW9kdWxlLFxyXG4gIENvbmZpZ1NlcnZpY2UsXHJcbiAgRXJyb3JJbnRlcmNlcHRvclNlcnZpY2UsIExvYWRpbmdNYXNrSW50ZXJjZXB0b3JTZXJ2aWNlLCBMb2FkaW5nTWFza1NlcnZpY2VcclxufSBmcm9tIFwiQGdyb3VwZG9jcy5leGFtcGxlcy5hbmd1bGFyL2NvbW1vbi1jb21wb25lbnRzXCI7XHJcbmltcG9ydCB7QW5ub3RhdGlvbkNvbmZpZ1NlcnZpY2V9IGZyb20gXCIuL2Fubm90YXRpb24tY29uZmlnLnNlcnZpY2VcIjtcclxuaW1wb3J0IHtIVFRQX0lOVEVSQ0VQVE9SUywgSHR0cENsaWVudE1vZHVsZX0gZnJvbSBcIkBhbmd1bGFyL2NvbW1vbi9odHRwXCI7XHJcbmltcG9ydCB7Rm9udEF3ZXNvbWVNb2R1bGV9IGZyb20gXCJAZm9ydGF3ZXNvbWUvYW5ndWxhci1mb250YXdlc29tZVwiO1xyXG5pbXBvcnQge0NsaWNrT3V0c2lkZU1vZHVsZX0gZnJvbSBcIm5nLWNsaWNrLW91dHNpZGVcIjtcclxuaW1wb3J0IHtBbm5vdGF0aW9uQXBwQ29tcG9uZW50fSBmcm9tICcuL2Fubm90YXRpb24tYXBwLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7bGlicmFyeX0gZnJvbSBcIkBmb3J0YXdlc29tZS9mb250YXdlc29tZS1zdmctY29yZVwiO1xyXG5pbXBvcnQge2Zhc30gZnJvbSBcIkBmb3J0YXdlc29tZS9mcmVlLXNvbGlkLXN2Zy1pY29uc1wiO1xyXG5pbXBvcnQge2Zhcn0gZnJvbSBcIkBmb3J0YXdlc29tZS9mcmVlLXJlZ3VsYXItc3ZnLWljb25zXCI7XHJcbmltcG9ydCB7QW5ub3RhdGlvbkNvbXBvbmVudH0gZnJvbSAnLi9hbm5vdGF0aW9uL2Fubm90YXRpb24uY29tcG9uZW50JztcclxuaW1wb3J0IHtBY3RpdmVBbm5vdGF0aW9uU2VydmljZX0gZnJvbSBcIi4vYWN0aXZlLWFubm90YXRpb24uc2VydmljZVwiO1xyXG5pbXBvcnQge1JlbW92ZUFubm90YXRpb25TZXJ2aWNlfSBmcm9tIFwiLi9yZW1vdmUtYW5ub3RhdGlvbi5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7Q29tbWVudEFubm90YXRpb25TZXJ2aWNlfSBmcm9tIFwiLi9jb21tZW50LWFubm90YXRpb24uc2VydmljZVwiO1xyXG5pbXBvcnQge0NvbW1lbnRQYW5lbENvbXBvbmVudH0gZnJvbSAnLi9jb21tZW50LXBhbmVsL2NvbW1lbnQtcGFuZWwuY29tcG9uZW50JztcclxuaW1wb3J0IHtDb21tZW50Q29tcG9uZW50fSBmcm9tICcuL2NvbW1lbnQvY29tbWVudC5jb21wb25lbnQnO1xyXG5pbXBvcnQge0NyZWF0ZUNvbW1lbnRDb21wb25lbnR9IGZyb20gJy4vY3JlYXRlLWNvbW1lbnQvY3JlYXRlLWNvbW1lbnQuY29tcG9uZW50JztcclxuaW1wb3J0IHtUcmFuc2xhdGVNb2R1bGV9IGZyb20gJ0BuZ3gtdHJhbnNsYXRlL2NvcmUnO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGluaXRpYWxpemVBcHAoYW5ub3RhdGlvbkNvbmZpZ1NlcnZpY2U6IEFubm90YXRpb25Db25maWdTZXJ2aWNlKSB7XHJcbiAgY29uc3QgcmVzdWx0ID0gKCkgPT4gYW5ub3RhdGlvbkNvbmZpZ1NlcnZpY2UubG9hZCgpO1xyXG4gIHJldHVybiByZXN1bHQ7XHJcbn1cclxuXHJcbi8vIE5PVEU6IHRoaXMgaXMgcmVxdWlyZWQgZHVyaW5nIGxpYnJhcnkgY29tcGlsYXRpb24gc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9hbmd1bGFyL2FuZ3VsYXIvaXNzdWVzLzIzNjI5I2lzc3VlY29tbWVudC00NDA5NDI5ODFcclxuLy8gQGR5bmFtaWNcclxuZXhwb3J0IGZ1bmN0aW9uIHNldHVwTG9hZGluZ0ludGVyY2VwdG9yKHNlcnZpY2U6IExvYWRpbmdNYXNrU2VydmljZSkge1xyXG4gIHJldHVybiBuZXcgTG9hZGluZ01hc2tJbnRlcmNlcHRvclNlcnZpY2Uoc2VydmljZSk7XHJcbn1cclxuXHJcbkBOZ01vZHVsZSh7XHJcbiAgZGVjbGFyYXRpb25zOiBbQW5ub3RhdGlvbkFwcENvbXBvbmVudCwgQW5ub3RhdGlvbkNvbXBvbmVudCwgQ29tbWVudFBhbmVsQ29tcG9uZW50LCBDb21tZW50Q29tcG9uZW50LCBDcmVhdGVDb21tZW50Q29tcG9uZW50LFxyXG4gIF0sXHJcbiAgZXhwb3J0czogW0NvbW1vbkNvbXBvbmVudHNNb2R1bGUsIEFubm90YXRpb25BcHBDb21wb25lbnQsIEFubm90YXRpb25Db21wb25lbnQsIENvbW1lbnRQYW5lbENvbXBvbmVudCwgQ29tbWVudENvbXBvbmVudCwgQ3JlYXRlQ29tbWVudENvbXBvbmVudF0sXHJcbiAgaW1wb3J0czpcclxuICAgIFtDb21tb25Nb2R1bGUsXHJcbiAgICAgIENvbW1vbkNvbXBvbmVudHNNb2R1bGUsXHJcbiAgICAgIEh0dHBDbGllbnRNb2R1bGUsXHJcbiAgICAgIEZvbnRBd2Vzb21lTW9kdWxlLFxyXG4gICAgICBDbGlja091dHNpZGVNb2R1bGUsXHJcbiAgICAgIFRyYW5zbGF0ZU1vZHVsZS5mb3JSb290KClcclxuICAgIF0sXHJcbiAgcHJvdmlkZXJzOlxyXG4gICAgW1xyXG4gICAgICBDb25maWdTZXJ2aWNlLFxyXG4gICAgICBBbm5vdGF0aW9uQ29uZmlnU2VydmljZSxcclxuICAgICAgQWN0aXZlQW5ub3RhdGlvblNlcnZpY2UsXHJcbiAgICAgIFJlbW92ZUFubm90YXRpb25TZXJ2aWNlLFxyXG4gICAgICBDb21tZW50QW5ub3RhdGlvblNlcnZpY2UsXHJcbiAgICAgIHtcclxuICAgICAgICBwcm92aWRlOiBIVFRQX0lOVEVSQ0VQVE9SUyxcclxuICAgICAgICB1c2VDbGFzczogRXJyb3JJbnRlcmNlcHRvclNlcnZpY2UsXHJcbiAgICAgICAgbXVsdGk6IHRydWVcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIHByb3ZpZGU6IEFQUF9JTklUSUFMSVpFUixcclxuICAgICAgICB1c2VGYWN0b3J5OiBpbml0aWFsaXplQXBwLFxyXG4gICAgICAgIGRlcHM6IFtBbm5vdGF0aW9uQ29uZmlnU2VydmljZV0sIG11bHRpOiB0cnVlXHJcbiAgICAgIH0sXHJcbiAgICAgIExvYWRpbmdNYXNrU2VydmljZSxcclxuICAgICAge1xyXG4gICAgICAgIHByb3ZpZGU6IEhUVFBfSU5URVJDRVBUT1JTLFxyXG4gICAgICAgIHVzZUZhY3Rvcnk6IHNldHVwTG9hZGluZ0ludGVyY2VwdG9yLFxyXG4gICAgICAgIG11bHRpOiB0cnVlLFxyXG4gICAgICAgIGRlcHM6IFtMb2FkaW5nTWFza1NlcnZpY2VdXHJcbiAgICAgIH1cclxuICAgIF0sXHJcbiAgZW50cnlDb21wb25lbnRzOiBbQW5ub3RhdGlvbkNvbXBvbmVudF0sXHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgQW5ub3RhdGlvbk1vZHVsZSB7XHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgICBsaWJyYXJ5LmFkZChmYXMsIGZhcik7XHJcbiAgfVxyXG5cclxuICBzdGF0aWMgZm9yUm9vdChhcGlFbmRwb2ludDogc3RyaW5nKTogTW9kdWxlV2l0aFByb3ZpZGVycyB7XHJcbiAgICBBcGkuREVGQVVMVF9BUElfRU5EUE9JTlQgPSBhcGlFbmRwb2ludDtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIG5nTW9kdWxlOiBBbm5vdGF0aW9uTW9kdWxlXHJcbiAgICB9O1xyXG4gIH1cclxufVxyXG4iXX0=