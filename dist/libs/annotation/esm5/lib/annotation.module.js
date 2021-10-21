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
    var result = (/**
     * @return {?}
     */
    function () { return annotationConfigService.load(); });
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
var AnnotationModule = /** @class */ (function () {
    function AnnotationModule() {
        library.add(fas, far);
    }
    /**
     * @param {?} apiEndpoint
     * @return {?}
     */
    AnnotationModule.forRoot = /**
     * @param {?} apiEndpoint
     * @return {?}
     */
    function (apiEndpoint) {
        Api.DEFAULT_API_ENDPOINT = apiEndpoint;
        return {
            ngModule: AnnotationModule
        };
    };
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
    AnnotationModule.ctorParameters = function () { return []; };
    return AnnotationModule;
}());
export { AnnotationModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYW5ub3RhdGlvbi5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ3JvdXBkb2NzLmV4YW1wbGVzLmFuZ3VsYXIvYW5ub3RhdGlvbi8iLCJzb3VyY2VzIjpbImxpYi9hbm5vdGF0aW9uLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFDLGVBQWUsRUFBdUIsUUFBUSxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQzdFLE9BQU8sRUFBQyxZQUFZLEVBQUMsTUFBTSxpQkFBaUIsQ0FBQztBQUM3QyxPQUFPLEVBQ0wsR0FBRyxFQUNILHNCQUFzQixFQUN0QixhQUFhLEVBQ2IsdUJBQXVCLEVBQUUsNkJBQTZCLEVBQUUsa0JBQWtCLEVBQzNFLE1BQU0sK0NBQStDLENBQUM7QUFDdkQsT0FBTyxFQUFDLHVCQUF1QixFQUFDLE1BQU0sNkJBQTZCLENBQUM7QUFDcEUsT0FBTyxFQUFDLGlCQUFpQixFQUFFLGdCQUFnQixFQUFDLE1BQU0sc0JBQXNCLENBQUM7QUFDekUsT0FBTyxFQUFDLGlCQUFpQixFQUFDLE1BQU0sa0NBQWtDLENBQUM7QUFDbkUsT0FBTyxFQUFDLGtCQUFrQixFQUFDLE1BQU0sa0JBQWtCLENBQUM7QUFDcEQsT0FBTyxFQUFDLHNCQUFzQixFQUFDLE1BQU0sNEJBQTRCLENBQUM7QUFDbEUsT0FBTyxFQUFDLE9BQU8sRUFBQyxNQUFNLG1DQUFtQyxDQUFDO0FBQzFELE9BQU8sRUFBQyxHQUFHLEVBQUMsTUFBTSxtQ0FBbUMsQ0FBQztBQUN0RCxPQUFPLEVBQUMsR0FBRyxFQUFDLE1BQU0scUNBQXFDLENBQUM7QUFDeEQsT0FBTyxFQUFDLG1CQUFtQixFQUFDLE1BQU0sbUNBQW1DLENBQUM7QUFDdEUsT0FBTyxFQUFDLHVCQUF1QixFQUFDLE1BQU0sNkJBQTZCLENBQUM7QUFDcEUsT0FBTyxFQUFDLHVCQUF1QixFQUFDLE1BQU0sNkJBQTZCLENBQUM7QUFDcEUsT0FBTyxFQUFDLHdCQUF3QixFQUFDLE1BQU0sOEJBQThCLENBQUM7QUFDdEUsT0FBTyxFQUFDLHFCQUFxQixFQUFDLE1BQU0seUNBQXlDLENBQUM7QUFDOUUsT0FBTyxFQUFDLGdCQUFnQixFQUFDLE1BQU0sNkJBQTZCLENBQUM7QUFDN0QsT0FBTyxFQUFDLHNCQUFzQixFQUFDLE1BQU0sMkNBQTJDLENBQUM7QUFDakYsT0FBTyxFQUFDLGVBQWUsRUFBQyxNQUFNLHFCQUFxQixDQUFDOzs7OztBQUVwRCxNQUFNLFVBQVUsYUFBYSxDQUFDLHVCQUFnRDs7UUFDdEUsTUFBTTs7O0lBQUcsY0FBTSxPQUFBLHVCQUF1QixDQUFDLElBQUksRUFBRSxFQUE5QixDQUE4QixDQUFBO0lBQ25ELE9BQU8sTUFBTSxDQUFDO0FBQ2hCLENBQUM7Ozs7Ozs7QUFJRCxNQUFNLFVBQVUsdUJBQXVCLENBQUMsT0FBMkI7SUFDakUsT0FBTyxJQUFJLDZCQUE2QixDQUFDLE9BQU8sQ0FBQyxDQUFDO0FBQ3BELENBQUM7QUFFRDtJQXlDRTtRQUNFLE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQyxDQUFDO0lBQ3hCLENBQUM7Ozs7O0lBRU0sd0JBQU87Ozs7SUFBZCxVQUFlLFdBQW1CO1FBQ2hDLEdBQUcsQ0FBQyxvQkFBb0IsR0FBRyxXQUFXLENBQUM7UUFDdkMsT0FBTztZQUNMLFFBQVEsRUFBRSxnQkFBZ0I7U0FDM0IsQ0FBQztJQUNKLENBQUM7O2dCQWxERixRQUFRLFNBQUM7b0JBQ1IsWUFBWSxFQUFFLENBQUMsc0JBQXNCLEVBQUUsbUJBQW1CLEVBQUUscUJBQXFCLEVBQUUsZ0JBQWdCLEVBQUUsc0JBQXNCO3FCQUMxSDtvQkFDRCxPQUFPLEVBQUUsQ0FBQyxzQkFBc0IsRUFBRSxzQkFBc0IsRUFBRSxtQkFBbUIsRUFBRSxxQkFBcUIsRUFBRSxnQkFBZ0IsRUFBRSxzQkFBc0IsQ0FBQztvQkFDL0ksT0FBTyxFQUNMLENBQUMsWUFBWTt3QkFDWCxzQkFBc0I7d0JBQ3RCLGdCQUFnQjt3QkFDaEIsaUJBQWlCO3dCQUNqQixrQkFBa0I7d0JBQ2xCLGVBQWUsQ0FBQyxPQUFPLEVBQUU7cUJBQzFCO29CQUNILFNBQVMsRUFDUDt3QkFDRSxhQUFhO3dCQUNiLHVCQUF1Qjt3QkFDdkIsdUJBQXVCO3dCQUN2Qix1QkFBdUI7d0JBQ3ZCLHdCQUF3Qjt3QkFDeEI7NEJBQ0UsT0FBTyxFQUFFLGlCQUFpQjs0QkFDMUIsUUFBUSxFQUFFLHVCQUF1Qjs0QkFDakMsS0FBSyxFQUFFLElBQUk7eUJBQ1o7d0JBQ0Q7NEJBQ0UsT0FBTyxFQUFFLGVBQWU7NEJBQ3hCLFVBQVUsRUFBRSxhQUFhOzRCQUN6QixJQUFJLEVBQUUsQ0FBQyx1QkFBdUIsQ0FBQyxFQUFFLEtBQUssRUFBRSxJQUFJO3lCQUM3Qzt3QkFDRCxrQkFBa0I7d0JBQ2xCOzRCQUNFLE9BQU8sRUFBRSxpQkFBaUI7NEJBQzFCLFVBQVUsRUFBRSx1QkFBdUI7NEJBQ25DLEtBQUssRUFBRSxJQUFJOzRCQUNYLElBQUksRUFBRSxDQUFDLGtCQUFrQixDQUFDO3lCQUMzQjtxQkFDRjtvQkFDSCxlQUFlLEVBQUUsQ0FBQyxtQkFBbUIsQ0FBQztpQkFDdkM7Ozs7SUFhRCx1QkFBQztDQUFBLEFBbkRELElBbURDO1NBWFksZ0JBQWdCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtBUFBfSU5JVElBTElaRVIsIE1vZHVsZVdpdGhQcm92aWRlcnMsIE5nTW9kdWxlfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHtDb21tb25Nb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XHJcbmltcG9ydCB7XHJcbiAgQXBpLFxyXG4gIENvbW1vbkNvbXBvbmVudHNNb2R1bGUsXHJcbiAgQ29uZmlnU2VydmljZSxcclxuICBFcnJvckludGVyY2VwdG9yU2VydmljZSwgTG9hZGluZ01hc2tJbnRlcmNlcHRvclNlcnZpY2UsIExvYWRpbmdNYXNrU2VydmljZVxyXG59IGZyb20gXCJAZ3JvdXBkb2NzLmV4YW1wbGVzLmFuZ3VsYXIvY29tbW9uLWNvbXBvbmVudHNcIjtcclxuaW1wb3J0IHtBbm5vdGF0aW9uQ29uZmlnU2VydmljZX0gZnJvbSBcIi4vYW5ub3RhdGlvbi1jb25maWcuc2VydmljZVwiO1xyXG5pbXBvcnQge0hUVFBfSU5URVJDRVBUT1JTLCBIdHRwQ2xpZW50TW9kdWxlfSBmcm9tIFwiQGFuZ3VsYXIvY29tbW9uL2h0dHBcIjtcclxuaW1wb3J0IHtGb250QXdlc29tZU1vZHVsZX0gZnJvbSBcIkBmb3J0YXdlc29tZS9hbmd1bGFyLWZvbnRhd2Vzb21lXCI7XHJcbmltcG9ydCB7Q2xpY2tPdXRzaWRlTW9kdWxlfSBmcm9tIFwibmctY2xpY2stb3V0c2lkZVwiO1xyXG5pbXBvcnQge0Fubm90YXRpb25BcHBDb21wb25lbnR9IGZyb20gJy4vYW5ub3RhdGlvbi1hcHAuY29tcG9uZW50JztcclxuaW1wb3J0IHtsaWJyYXJ5fSBmcm9tIFwiQGZvcnRhd2Vzb21lL2ZvbnRhd2Vzb21lLXN2Zy1jb3JlXCI7XHJcbmltcG9ydCB7ZmFzfSBmcm9tIFwiQGZvcnRhd2Vzb21lL2ZyZWUtc29saWQtc3ZnLWljb25zXCI7XHJcbmltcG9ydCB7ZmFyfSBmcm9tIFwiQGZvcnRhd2Vzb21lL2ZyZWUtcmVndWxhci1zdmctaWNvbnNcIjtcclxuaW1wb3J0IHtBbm5vdGF0aW9uQ29tcG9uZW50fSBmcm9tICcuL2Fubm90YXRpb24vYW5ub3RhdGlvbi5jb21wb25lbnQnO1xyXG5pbXBvcnQge0FjdGl2ZUFubm90YXRpb25TZXJ2aWNlfSBmcm9tIFwiLi9hY3RpdmUtYW5ub3RhdGlvbi5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7UmVtb3ZlQW5ub3RhdGlvblNlcnZpY2V9IGZyb20gXCIuL3JlbW92ZS1hbm5vdGF0aW9uLnNlcnZpY2VcIjtcclxuaW1wb3J0IHtDb21tZW50QW5ub3RhdGlvblNlcnZpY2V9IGZyb20gXCIuL2NvbW1lbnQtYW5ub3RhdGlvbi5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7Q29tbWVudFBhbmVsQ29tcG9uZW50fSBmcm9tICcuL2NvbW1lbnQtcGFuZWwvY29tbWVudC1wYW5lbC5jb21wb25lbnQnO1xyXG5pbXBvcnQge0NvbW1lbnRDb21wb25lbnR9IGZyb20gJy4vY29tbWVudC9jb21tZW50LmNvbXBvbmVudCc7XHJcbmltcG9ydCB7Q3JlYXRlQ29tbWVudENvbXBvbmVudH0gZnJvbSAnLi9jcmVhdGUtY29tbWVudC9jcmVhdGUtY29tbWVudC5jb21wb25lbnQnO1xyXG5pbXBvcnQge1RyYW5zbGF0ZU1vZHVsZX0gZnJvbSAnQG5neC10cmFuc2xhdGUvY29yZSc7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gaW5pdGlhbGl6ZUFwcChhbm5vdGF0aW9uQ29uZmlnU2VydmljZTogQW5ub3RhdGlvbkNvbmZpZ1NlcnZpY2UpIHtcclxuICBjb25zdCByZXN1bHQgPSAoKSA9PiBhbm5vdGF0aW9uQ29uZmlnU2VydmljZS5sb2FkKCk7XHJcbiAgcmV0dXJuIHJlc3VsdDtcclxufVxyXG5cclxuLy8gTk9URTogdGhpcyBpcyByZXF1aXJlZCBkdXJpbmcgbGlicmFyeSBjb21waWxhdGlvbiBzZWUgaHR0cHM6Ly9naXRodWIuY29tL2FuZ3VsYXIvYW5ndWxhci9pc3N1ZXMvMjM2MjkjaXNzdWVjb21tZW50LTQ0MDk0Mjk4MVxyXG4vLyBAZHluYW1pY1xyXG5leHBvcnQgZnVuY3Rpb24gc2V0dXBMb2FkaW5nSW50ZXJjZXB0b3Ioc2VydmljZTogTG9hZGluZ01hc2tTZXJ2aWNlKSB7XHJcbiAgcmV0dXJuIG5ldyBMb2FkaW5nTWFza0ludGVyY2VwdG9yU2VydmljZShzZXJ2aWNlKTtcclxufVxyXG5cclxuQE5nTW9kdWxlKHtcclxuICBkZWNsYXJhdGlvbnM6IFtBbm5vdGF0aW9uQXBwQ29tcG9uZW50LCBBbm5vdGF0aW9uQ29tcG9uZW50LCBDb21tZW50UGFuZWxDb21wb25lbnQsIENvbW1lbnRDb21wb25lbnQsIENyZWF0ZUNvbW1lbnRDb21wb25lbnQsXHJcbiAgXSxcclxuICBleHBvcnRzOiBbQ29tbW9uQ29tcG9uZW50c01vZHVsZSwgQW5ub3RhdGlvbkFwcENvbXBvbmVudCwgQW5ub3RhdGlvbkNvbXBvbmVudCwgQ29tbWVudFBhbmVsQ29tcG9uZW50LCBDb21tZW50Q29tcG9uZW50LCBDcmVhdGVDb21tZW50Q29tcG9uZW50XSxcclxuICBpbXBvcnRzOlxyXG4gICAgW0NvbW1vbk1vZHVsZSxcclxuICAgICAgQ29tbW9uQ29tcG9uZW50c01vZHVsZSxcclxuICAgICAgSHR0cENsaWVudE1vZHVsZSxcclxuICAgICAgRm9udEF3ZXNvbWVNb2R1bGUsXHJcbiAgICAgIENsaWNrT3V0c2lkZU1vZHVsZSxcclxuICAgICAgVHJhbnNsYXRlTW9kdWxlLmZvclJvb3QoKVxyXG4gICAgXSxcclxuICBwcm92aWRlcnM6XHJcbiAgICBbXHJcbiAgICAgIENvbmZpZ1NlcnZpY2UsXHJcbiAgICAgIEFubm90YXRpb25Db25maWdTZXJ2aWNlLFxyXG4gICAgICBBY3RpdmVBbm5vdGF0aW9uU2VydmljZSxcclxuICAgICAgUmVtb3ZlQW5ub3RhdGlvblNlcnZpY2UsXHJcbiAgICAgIENvbW1lbnRBbm5vdGF0aW9uU2VydmljZSxcclxuICAgICAge1xyXG4gICAgICAgIHByb3ZpZGU6IEhUVFBfSU5URVJDRVBUT1JTLFxyXG4gICAgICAgIHVzZUNsYXNzOiBFcnJvckludGVyY2VwdG9yU2VydmljZSxcclxuICAgICAgICBtdWx0aTogdHJ1ZVxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgcHJvdmlkZTogQVBQX0lOSVRJQUxJWkVSLFxyXG4gICAgICAgIHVzZUZhY3Rvcnk6IGluaXRpYWxpemVBcHAsXHJcbiAgICAgICAgZGVwczogW0Fubm90YXRpb25Db25maWdTZXJ2aWNlXSwgbXVsdGk6IHRydWVcclxuICAgICAgfSxcclxuICAgICAgTG9hZGluZ01hc2tTZXJ2aWNlLFxyXG4gICAgICB7XHJcbiAgICAgICAgcHJvdmlkZTogSFRUUF9JTlRFUkNFUFRPUlMsXHJcbiAgICAgICAgdXNlRmFjdG9yeTogc2V0dXBMb2FkaW5nSW50ZXJjZXB0b3IsXHJcbiAgICAgICAgbXVsdGk6IHRydWUsXHJcbiAgICAgICAgZGVwczogW0xvYWRpbmdNYXNrU2VydmljZV1cclxuICAgICAgfVxyXG4gICAgXSxcclxuICBlbnRyeUNvbXBvbmVudHM6IFtBbm5vdGF0aW9uQ29tcG9uZW50XSxcclxufSlcclxuXHJcbmV4cG9ydCBjbGFzcyBBbm5vdGF0aW9uTW9kdWxlIHtcclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIGxpYnJhcnkuYWRkKGZhcywgZmFyKTtcclxuICB9XHJcblxyXG4gIHN0YXRpYyBmb3JSb290KGFwaUVuZHBvaW50OiBzdHJpbmcpOiBNb2R1bGVXaXRoUHJvdmlkZXJzIHtcclxuICAgIEFwaS5ERUZBVUxUX0FQSV9FTkRQT0lOVCA9IGFwaUVuZHBvaW50O1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgbmdNb2R1bGU6IEFubm90YXRpb25Nb2R1bGVcclxuICAgIH07XHJcbiAgfVxyXG59XHJcbiJdfQ==