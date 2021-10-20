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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYW5ub3RhdGlvbi5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ3JvdXBkb2NzLmV4YW1wbGVzLmFuZ3VsYXIvYW5ub3RhdGlvbi8iLCJzb3VyY2VzIjpbImxpYi9hbm5vdGF0aW9uLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFDLGVBQWUsRUFBdUIsUUFBUSxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQzdFLE9BQU8sRUFBQyxZQUFZLEVBQUMsTUFBTSxpQkFBaUIsQ0FBQztBQUM3QyxPQUFPLEVBQ0wsR0FBRyxFQUNILHNCQUFzQixFQUN0QixhQUFhLEVBQ2IsdUJBQXVCLEVBQUUsNkJBQTZCLEVBQUUsa0JBQWtCLEVBQzNFLE1BQU0sK0NBQStDLENBQUM7QUFDdkQsT0FBTyxFQUFDLHVCQUF1QixFQUFDLE1BQU0sNkJBQTZCLENBQUM7QUFDcEUsT0FBTyxFQUFDLGlCQUFpQixFQUFFLGdCQUFnQixFQUFDLE1BQU0sc0JBQXNCLENBQUM7QUFDekUsT0FBTyxFQUFDLGlCQUFpQixFQUFDLE1BQU0sa0NBQWtDLENBQUM7QUFDbkUsT0FBTyxFQUFDLGtCQUFrQixFQUFDLE1BQU0sa0JBQWtCLENBQUM7QUFDcEQsT0FBTyxFQUFDLHNCQUFzQixFQUFDLE1BQU0sNEJBQTRCLENBQUM7QUFDbEUsT0FBTyxFQUFDLE9BQU8sRUFBQyxNQUFNLG1DQUFtQyxDQUFDO0FBQzFELE9BQU8sRUFBQyxHQUFHLEVBQUMsTUFBTSxtQ0FBbUMsQ0FBQztBQUN0RCxPQUFPLEVBQUMsR0FBRyxFQUFDLE1BQU0scUNBQXFDLENBQUM7QUFDeEQsT0FBTyxFQUFDLG1CQUFtQixFQUFDLE1BQU0sbUNBQW1DLENBQUM7QUFDdEUsT0FBTyxFQUFDLHVCQUF1QixFQUFDLE1BQU0sNkJBQTZCLENBQUM7QUFDcEUsT0FBTyxFQUFDLHVCQUF1QixFQUFDLE1BQU0sNkJBQTZCLENBQUM7QUFDcEUsT0FBTyxFQUFDLHdCQUF3QixFQUFDLE1BQU0sOEJBQThCLENBQUM7QUFDdEUsT0FBTyxFQUFDLHFCQUFxQixFQUFDLE1BQU0seUNBQXlDLENBQUM7QUFDOUUsT0FBTyxFQUFDLGdCQUFnQixFQUFDLE1BQU0sNkJBQTZCLENBQUM7QUFDN0QsT0FBTyxFQUFDLHNCQUFzQixFQUFDLE1BQU0sMkNBQTJDLENBQUM7QUFDakYsT0FBTyxFQUFDLGVBQWUsRUFBQyxNQUFNLHFCQUFxQixDQUFDOzs7OztBQUVwRCxNQUFNLFVBQVUsYUFBYSxDQUFDLHVCQUFnRDs7UUFDdEUsTUFBTTs7O0lBQUcsY0FBTSxPQUFBLHVCQUF1QixDQUFDLElBQUksRUFBRSxFQUE5QixDQUE4QixDQUFBO0lBQ25ELE9BQU8sTUFBTSxDQUFDO0FBQ2hCLENBQUM7Ozs7Ozs7QUFJRCxNQUFNLFVBQVUsdUJBQXVCLENBQUMsT0FBMkI7SUFDakUsT0FBTyxJQUFJLDZCQUE2QixDQUFDLE9BQU8sQ0FBQyxDQUFDO0FBQ3BELENBQUM7QUFFRDtJQXlDRTtRQUNFLE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQyxDQUFDO0lBQ3hCLENBQUM7Ozs7O0lBRU0sd0JBQU87Ozs7SUFBZCxVQUFlLFdBQW1CO1FBQ2hDLEdBQUcsQ0FBQyxvQkFBb0IsR0FBRyxXQUFXLENBQUM7UUFDdkMsT0FBTztZQUNMLFFBQVEsRUFBRSxnQkFBZ0I7U0FDM0IsQ0FBQztJQUNKLENBQUM7O2dCQWxERixRQUFRLFNBQUM7b0JBQ1IsWUFBWSxFQUFFLENBQUMsc0JBQXNCLEVBQUUsbUJBQW1CLEVBQUUscUJBQXFCLEVBQUUsZ0JBQWdCLEVBQUUsc0JBQXNCO3FCQUMxSDtvQkFDRCxPQUFPLEVBQUUsQ0FBQyxzQkFBc0IsRUFBRSxzQkFBc0IsRUFBRSxtQkFBbUIsRUFBRSxxQkFBcUIsRUFBRSxnQkFBZ0IsRUFBRSxzQkFBc0IsQ0FBQztvQkFDL0ksT0FBTyxFQUNMLENBQUMsWUFBWTt3QkFDWCxzQkFBc0I7d0JBQ3RCLGdCQUFnQjt3QkFDaEIsaUJBQWlCO3dCQUNqQixrQkFBa0I7d0JBQ2xCLGVBQWUsQ0FBQyxPQUFPLEVBQUU7cUJBQzFCO29CQUNILFNBQVMsRUFDUDt3QkFDRSxhQUFhO3dCQUNiLHVCQUF1Qjt3QkFDdkIsdUJBQXVCO3dCQUN2Qix1QkFBdUI7d0JBQ3ZCLHdCQUF3Qjt3QkFDeEI7NEJBQ0UsT0FBTyxFQUFFLGlCQUFpQjs0QkFDMUIsUUFBUSxFQUFFLHVCQUF1Qjs0QkFDakMsS0FBSyxFQUFFLElBQUk7eUJBQ1o7d0JBQ0Q7NEJBQ0UsT0FBTyxFQUFFLGVBQWU7NEJBQ3hCLFVBQVUsRUFBRSxhQUFhOzRCQUN6QixJQUFJLEVBQUUsQ0FBQyx1QkFBdUIsQ0FBQyxFQUFFLEtBQUssRUFBRSxJQUFJO3lCQUM3Qzt3QkFDRCxrQkFBa0I7d0JBQ2xCOzRCQUNFLE9BQU8sRUFBRSxpQkFBaUI7NEJBQzFCLFVBQVUsRUFBRSx1QkFBdUI7NEJBQ25DLEtBQUssRUFBRSxJQUFJOzRCQUNYLElBQUksRUFBRSxDQUFDLGtCQUFrQixDQUFDO3lCQUMzQjtxQkFDRjtvQkFDSCxlQUFlLEVBQUUsQ0FBQyxtQkFBbUIsQ0FBQztpQkFDdkM7Ozs7SUFhRCx1QkFBQztDQUFBLEFBbkRELElBbURDO1NBWFksZ0JBQWdCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtBUFBfSU5JVElBTElaRVIsIE1vZHVsZVdpdGhQcm92aWRlcnMsIE5nTW9kdWxlfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7Q29tbW9uTW9kdWxlfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHtcbiAgQXBpLFxuICBDb21tb25Db21wb25lbnRzTW9kdWxlLFxuICBDb25maWdTZXJ2aWNlLFxuICBFcnJvckludGVyY2VwdG9yU2VydmljZSwgTG9hZGluZ01hc2tJbnRlcmNlcHRvclNlcnZpY2UsIExvYWRpbmdNYXNrU2VydmljZVxufSBmcm9tIFwiQGdyb3VwZG9jcy5leGFtcGxlcy5hbmd1bGFyL2NvbW1vbi1jb21wb25lbnRzXCI7XG5pbXBvcnQge0Fubm90YXRpb25Db25maWdTZXJ2aWNlfSBmcm9tIFwiLi9hbm5vdGF0aW9uLWNvbmZpZy5zZXJ2aWNlXCI7XG5pbXBvcnQge0hUVFBfSU5URVJDRVBUT1JTLCBIdHRwQ2xpZW50TW9kdWxlfSBmcm9tIFwiQGFuZ3VsYXIvY29tbW9uL2h0dHBcIjtcbmltcG9ydCB7Rm9udEF3ZXNvbWVNb2R1bGV9IGZyb20gXCJAZm9ydGF3ZXNvbWUvYW5ndWxhci1mb250YXdlc29tZVwiO1xuaW1wb3J0IHtDbGlja091dHNpZGVNb2R1bGV9IGZyb20gXCJuZy1jbGljay1vdXRzaWRlXCI7XG5pbXBvcnQge0Fubm90YXRpb25BcHBDb21wb25lbnR9IGZyb20gJy4vYW5ub3RhdGlvbi1hcHAuY29tcG9uZW50JztcbmltcG9ydCB7bGlicmFyeX0gZnJvbSBcIkBmb3J0YXdlc29tZS9mb250YXdlc29tZS1zdmctY29yZVwiO1xuaW1wb3J0IHtmYXN9IGZyb20gXCJAZm9ydGF3ZXNvbWUvZnJlZS1zb2xpZC1zdmctaWNvbnNcIjtcbmltcG9ydCB7ZmFyfSBmcm9tIFwiQGZvcnRhd2Vzb21lL2ZyZWUtcmVndWxhci1zdmctaWNvbnNcIjtcbmltcG9ydCB7QW5ub3RhdGlvbkNvbXBvbmVudH0gZnJvbSAnLi9hbm5vdGF0aW9uL2Fubm90YXRpb24uY29tcG9uZW50JztcbmltcG9ydCB7QWN0aXZlQW5ub3RhdGlvblNlcnZpY2V9IGZyb20gXCIuL2FjdGl2ZS1hbm5vdGF0aW9uLnNlcnZpY2VcIjtcbmltcG9ydCB7UmVtb3ZlQW5ub3RhdGlvblNlcnZpY2V9IGZyb20gXCIuL3JlbW92ZS1hbm5vdGF0aW9uLnNlcnZpY2VcIjtcbmltcG9ydCB7Q29tbWVudEFubm90YXRpb25TZXJ2aWNlfSBmcm9tIFwiLi9jb21tZW50LWFubm90YXRpb24uc2VydmljZVwiO1xuaW1wb3J0IHtDb21tZW50UGFuZWxDb21wb25lbnR9IGZyb20gJy4vY29tbWVudC1wYW5lbC9jb21tZW50LXBhbmVsLmNvbXBvbmVudCc7XG5pbXBvcnQge0NvbW1lbnRDb21wb25lbnR9IGZyb20gJy4vY29tbWVudC9jb21tZW50LmNvbXBvbmVudCc7XG5pbXBvcnQge0NyZWF0ZUNvbW1lbnRDb21wb25lbnR9IGZyb20gJy4vY3JlYXRlLWNvbW1lbnQvY3JlYXRlLWNvbW1lbnQuY29tcG9uZW50JztcbmltcG9ydCB7VHJhbnNsYXRlTW9kdWxlfSBmcm9tICdAbmd4LXRyYW5zbGF0ZS9jb3JlJztcblxuZXhwb3J0IGZ1bmN0aW9uIGluaXRpYWxpemVBcHAoYW5ub3RhdGlvbkNvbmZpZ1NlcnZpY2U6IEFubm90YXRpb25Db25maWdTZXJ2aWNlKSB7XG4gIGNvbnN0IHJlc3VsdCA9ICgpID0+IGFubm90YXRpb25Db25maWdTZXJ2aWNlLmxvYWQoKTtcbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuLy8gTk9URTogdGhpcyBpcyByZXF1aXJlZCBkdXJpbmcgbGlicmFyeSBjb21waWxhdGlvbiBzZWUgaHR0cHM6Ly9naXRodWIuY29tL2FuZ3VsYXIvYW5ndWxhci9pc3N1ZXMvMjM2MjkjaXNzdWVjb21tZW50LTQ0MDk0Mjk4MVxuLy8gQGR5bmFtaWNcbmV4cG9ydCBmdW5jdGlvbiBzZXR1cExvYWRpbmdJbnRlcmNlcHRvcihzZXJ2aWNlOiBMb2FkaW5nTWFza1NlcnZpY2UpIHtcbiAgcmV0dXJuIG5ldyBMb2FkaW5nTWFza0ludGVyY2VwdG9yU2VydmljZShzZXJ2aWNlKTtcbn1cblxuQE5nTW9kdWxlKHtcbiAgZGVjbGFyYXRpb25zOiBbQW5ub3RhdGlvbkFwcENvbXBvbmVudCwgQW5ub3RhdGlvbkNvbXBvbmVudCwgQ29tbWVudFBhbmVsQ29tcG9uZW50LCBDb21tZW50Q29tcG9uZW50LCBDcmVhdGVDb21tZW50Q29tcG9uZW50LFxuICBdLFxuICBleHBvcnRzOiBbQ29tbW9uQ29tcG9uZW50c01vZHVsZSwgQW5ub3RhdGlvbkFwcENvbXBvbmVudCwgQW5ub3RhdGlvbkNvbXBvbmVudCwgQ29tbWVudFBhbmVsQ29tcG9uZW50LCBDb21tZW50Q29tcG9uZW50LCBDcmVhdGVDb21tZW50Q29tcG9uZW50XSxcbiAgaW1wb3J0czpcbiAgICBbQ29tbW9uTW9kdWxlLFxuICAgICAgQ29tbW9uQ29tcG9uZW50c01vZHVsZSxcbiAgICAgIEh0dHBDbGllbnRNb2R1bGUsXG4gICAgICBGb250QXdlc29tZU1vZHVsZSxcbiAgICAgIENsaWNrT3V0c2lkZU1vZHVsZSxcbiAgICAgIFRyYW5zbGF0ZU1vZHVsZS5mb3JSb290KClcbiAgICBdLFxuICBwcm92aWRlcnM6XG4gICAgW1xuICAgICAgQ29uZmlnU2VydmljZSxcbiAgICAgIEFubm90YXRpb25Db25maWdTZXJ2aWNlLFxuICAgICAgQWN0aXZlQW5ub3RhdGlvblNlcnZpY2UsXG4gICAgICBSZW1vdmVBbm5vdGF0aW9uU2VydmljZSxcbiAgICAgIENvbW1lbnRBbm5vdGF0aW9uU2VydmljZSxcbiAgICAgIHtcbiAgICAgICAgcHJvdmlkZTogSFRUUF9JTlRFUkNFUFRPUlMsXG4gICAgICAgIHVzZUNsYXNzOiBFcnJvckludGVyY2VwdG9yU2VydmljZSxcbiAgICAgICAgbXVsdGk6IHRydWVcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHByb3ZpZGU6IEFQUF9JTklUSUFMSVpFUixcbiAgICAgICAgdXNlRmFjdG9yeTogaW5pdGlhbGl6ZUFwcCxcbiAgICAgICAgZGVwczogW0Fubm90YXRpb25Db25maWdTZXJ2aWNlXSwgbXVsdGk6IHRydWVcbiAgICAgIH0sXG4gICAgICBMb2FkaW5nTWFza1NlcnZpY2UsXG4gICAgICB7XG4gICAgICAgIHByb3ZpZGU6IEhUVFBfSU5URVJDRVBUT1JTLFxuICAgICAgICB1c2VGYWN0b3J5OiBzZXR1cExvYWRpbmdJbnRlcmNlcHRvcixcbiAgICAgICAgbXVsdGk6IHRydWUsXG4gICAgICAgIGRlcHM6IFtMb2FkaW5nTWFza1NlcnZpY2VdXG4gICAgICB9XG4gICAgXSxcbiAgZW50cnlDb21wb25lbnRzOiBbQW5ub3RhdGlvbkNvbXBvbmVudF0sXG59KVxuXG5leHBvcnQgY2xhc3MgQW5ub3RhdGlvbk1vZHVsZSB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIGxpYnJhcnkuYWRkKGZhcywgZmFyKTtcbiAgfVxuXG4gIHN0YXRpYyBmb3JSb290KGFwaUVuZHBvaW50OiBzdHJpbmcpOiBNb2R1bGVXaXRoUHJvdmlkZXJzIHtcbiAgICBBcGkuREVGQVVMVF9BUElfRU5EUE9JTlQgPSBhcGlFbmRwb2ludDtcbiAgICByZXR1cm4ge1xuICAgICAgbmdNb2R1bGU6IEFubm90YXRpb25Nb2R1bGVcbiAgICB9O1xuICB9XG59XG4iXX0=