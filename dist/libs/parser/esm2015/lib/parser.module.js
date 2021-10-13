/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { NgModule } from '@angular/core';
import { CommonComponentsModule, ExceptionMessageService, Api, ConfigService } from "@groupdocs.examples.angular/common-components";
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
export class ParserModule {
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
            ngModule: ParserModule
        };
    }
}
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
                    ClickOutsideModule,
                    FontAwesomeModule
                ],
                providers: [
                    ConfigService,
                    ExceptionMessageService
                ],
                exports: [
                    ParserAppComponent,
                    FieldComponent
                ],
                entryComponents: [FieldComponent],
            },] }
];
/** @nocollapse */
ParserModule.ctorParameters = () => [];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFyc2VyLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bncm91cGRvY3MuZXhhbXBsZXMuYW5ndWxhci9wYXJzZXIvIiwic291cmNlcyI6WyJsaWIvcGFyc2VyLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUF1QyxRQUFRLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFFN0UsT0FBTyxFQUNMLHNCQUFzQixFQUFFLHVCQUF1QixFQUUvQyxHQUFHLEVBQUUsYUFBYSxFQUNuQixNQUFNLCtDQUErQyxDQUFDO0FBRXZELE9BQU8sRUFBQyxpQkFBaUIsRUFBQyxNQUFNLGtDQUFrQyxDQUFDO0FBQ25FLE9BQU8sRUFBQyxPQUFPLEVBQUMsTUFBTSxtQ0FBbUMsQ0FBQztBQUMxRCxPQUFPLEVBQUMsR0FBRyxFQUFDLE1BQU0sbUNBQW1DLENBQUM7QUFDdEQsT0FBTyxFQUFDLEdBQUcsRUFBQyxNQUFNLHFDQUFxQyxDQUFDO0FBQ3hELE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUMxRCxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQztBQUN0RCxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUM1RCxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQztBQUMvRCxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFDekQsT0FBTyxFQUFFLDBCQUEwQixFQUFFLE1BQU0sbURBQW1ELENBQUM7QUFDL0YsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sbUNBQW1DLENBQUM7QUFDdkUsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sdUNBQXVDLENBQUM7QUFDN0UsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0scUNBQXFDLENBQUM7QUFDM0UsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sdUNBQXVDLENBQUM7QUE2QjdFLE1BQU0sT0FBTyxZQUFZO0lBQ3ZCO1FBQ0UsT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDLENBQUM7SUFDeEIsQ0FBQzs7Ozs7SUFFRCxNQUFNLENBQUMsT0FBTyxDQUFDLFdBQW1CO1FBQ2hDLEdBQUcsQ0FBQyxvQkFBb0IsR0FBRyxXQUFXLENBQUM7UUFDdkMsT0FBTztZQUNMLFFBQVEsRUFBRSxZQUFZO1NBQ3ZCLENBQUM7SUFDSixDQUFDOzs7WUFyQ0YsUUFBUSxTQUFDO2dCQUNSLFlBQVksRUFBRTtvQkFDWixrQkFBa0I7b0JBQ2xCLGdCQUFnQjtvQkFDaEIsY0FBYztvQkFDZCwwQkFBMEI7b0JBQzFCLGtCQUFrQjtvQkFDbEIsb0JBQW9CO29CQUNwQixvQkFBb0I7b0JBQ3BCLG9CQUFvQjtpQkFDckI7Z0JBQ0QsT0FBTyxFQUFFO29CQUNQLGFBQWE7b0JBQ2Isc0JBQXNCO29CQUN0QixrQkFBa0I7b0JBQ2xCLGlCQUFpQjtpQkFDbEI7Z0JBQ0QsU0FBUyxFQUFFO29CQUNULGFBQWE7b0JBQ2IsdUJBQXVCO2lCQUN4QjtnQkFDRCxPQUFPLEVBQUU7b0JBQ1Asa0JBQWtCO29CQUNsQixjQUFjO2lCQUNmO2dCQUNELGVBQWUsRUFBRSxDQUFFLGNBQWMsQ0FBRTthQUNwQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7QVBQX0lOSVRJQUxJWkVSLCBNb2R1bGVXaXRoUHJvdmlkZXJzLCBOZ01vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7Q29tbW9uTW9kdWxlfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xyXG5pbXBvcnQge1xyXG4gIENvbW1vbkNvbXBvbmVudHNNb2R1bGUsIEV4Y2VwdGlvbk1lc3NhZ2VTZXJ2aWNlLFxyXG4gIEVycm9ySW50ZXJjZXB0b3JTZXJ2aWNlLCBMb2FkaW5nTWFza0ludGVyY2VwdG9yU2VydmljZSwgTG9hZGluZ01hc2tTZXJ2aWNlLFxyXG4gIEFwaSwgQ29uZmlnU2VydmljZSBcclxufSBmcm9tIFwiQGdyb3VwZG9jcy5leGFtcGxlcy5hbmd1bGFyL2NvbW1vbi1jb21wb25lbnRzXCI7XHJcblxyXG5pbXBvcnQge0ZvbnRBd2Vzb21lTW9kdWxlfSBmcm9tICdAZm9ydGF3ZXNvbWUvYW5ndWxhci1mb250YXdlc29tZSc7XHJcbmltcG9ydCB7bGlicmFyeX0gZnJvbSBcIkBmb3J0YXdlc29tZS9mb250YXdlc29tZS1zdmctY29yZVwiO1xyXG5pbXBvcnQge2Zhc30gZnJvbSBcIkBmb3J0YXdlc29tZS9mcmVlLXNvbGlkLXN2Zy1pY29uc1wiO1xyXG5pbXBvcnQge2Zhcn0gZnJvbSBcIkBmb3J0YXdlc29tZS9mcmVlLXJlZ3VsYXItc3ZnLWljb25zXCI7XHJcbmltcG9ydCB7IEJyb3dzZXJNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyJztcclxuaW1wb3J0IHsgQ2xpY2tPdXRzaWRlTW9kdWxlIH0gZnJvbSBcIm5nLWNsaWNrLW91dHNpZGVcIjtcclxuaW1wb3J0IHsgUGFyc2VyQXBwQ29tcG9uZW50IH0gZnJvbSAnLi9wYXJzZXItYXBwLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IFN1cmZhY2VDb21wb25lbnQgfSBmcm9tICcuL3N1cmZhY2Uvc3VyZmFjZS5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBGaWVsZENvbXBvbmVudCB9IGZyb20gJy4vZmllbGQvZmllbGQuY29tcG9uZW50JztcclxuaW1wb3J0IHsgQ29uZmlybWF0aW9uTW9kYWxDb21wb25lbnQgfSBmcm9tICcuL2NvbmZpcm1hdGlvbi1tb2RhbC9jb25maXJtYXRpb24tbW9kYWwuY29tcG9uZW50JztcclxuaW1wb3J0IHsgU2lkZVBhbmVsQ29tcG9uZW50IH0gZnJvbSAnLi9zaWRlLXBhbmVsL3NpZGUtcGFuZWwuY29tcG9uZW50JztcclxuaW1wb3J0IHsgUmVuYW1lTW9kYWxDb21wb25lbnQgfSBmcm9tICcuL3JlbmFtZS1tb2RhbC9yZW5hbWUtbW9kYWwuY29tcG9uZW50JztcclxuaW1wb3J0IHsgUGxhY2Vob2xkZXJDb21wb25lbnQgfSBmcm9tICcuL3BsYWNlaG9sZGVyL3BsYWNlaG9sZGVyLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IFRhYmxlVmlld2VyQ29tcG9uZW50IH0gZnJvbSAnLi90YWJsZS12aWV3ZXIvdGFibGUtdmlld2VyLmNvbXBvbmVudCc7XHJcblxyXG5ATmdNb2R1bGUoe1xyXG4gIGRlY2xhcmF0aW9uczogW1xyXG4gICAgUGFyc2VyQXBwQ29tcG9uZW50LFxyXG4gICAgU3VyZmFjZUNvbXBvbmVudCxcclxuICAgIEZpZWxkQ29tcG9uZW50LFxyXG4gICAgQ29uZmlybWF0aW9uTW9kYWxDb21wb25lbnQsXHJcbiAgICBTaWRlUGFuZWxDb21wb25lbnQsXHJcbiAgICBSZW5hbWVNb2RhbENvbXBvbmVudCxcclxuICAgIFBsYWNlaG9sZGVyQ29tcG9uZW50LFxyXG4gICAgVGFibGVWaWV3ZXJDb21wb25lbnQgIFxyXG4gIF0sXHJcbiAgaW1wb3J0czogW1xyXG4gICAgQnJvd3Nlck1vZHVsZSxcclxuICAgIENvbW1vbkNvbXBvbmVudHNNb2R1bGUsIFxyXG4gICAgQ2xpY2tPdXRzaWRlTW9kdWxlLFxyXG4gICAgRm9udEF3ZXNvbWVNb2R1bGVcclxuICBdLFxyXG4gIHByb3ZpZGVyczogWyBcclxuICAgIENvbmZpZ1NlcnZpY2UsXHJcbiAgICBFeGNlcHRpb25NZXNzYWdlU2VydmljZVxyXG4gIF0sXHJcbiAgZXhwb3J0czogWyBcclxuICAgIFBhcnNlckFwcENvbXBvbmVudCxcclxuICAgIEZpZWxkQ29tcG9uZW50XHJcbiAgXSxcclxuICBlbnRyeUNvbXBvbmVudHM6IFsgRmllbGRDb21wb25lbnQgXSxcclxufSlcclxuZXhwb3J0IGNsYXNzIFBhcnNlck1vZHVsZSB7IFxyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgbGlicmFyeS5hZGQoZmFzLCBmYXIpO1xyXG4gIH1cclxuXHJcbiAgc3RhdGljIGZvclJvb3QoYXBpRW5kcG9pbnQ6IHN0cmluZyk6IE1vZHVsZVdpdGhQcm92aWRlcnMge1xyXG4gICAgQXBpLkRFRkFVTFRfQVBJX0VORFBPSU5UID0gYXBpRW5kcG9pbnQ7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBuZ01vZHVsZTogUGFyc2VyTW9kdWxlXHJcbiAgICB9O1xyXG4gIH1cclxuXHJcbn1cclxuIl19