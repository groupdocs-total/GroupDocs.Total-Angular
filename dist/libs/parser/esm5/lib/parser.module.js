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
    ParserModule.ctorParameters = function () { return []; };
    return ParserModule;
}());
export { ParserModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFyc2VyLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bncm91cGRvY3MuZXhhbXBsZXMuYW5ndWxhci9wYXJzZXIvIiwic291cmNlcyI6WyJsaWIvcGFyc2VyLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUF1QyxRQUFRLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFFN0UsT0FBTyxFQUNMLHNCQUFzQixFQUFFLHVCQUF1QixFQUUvQyxHQUFHLEVBQUUsYUFBYSxFQUNuQixNQUFNLCtDQUErQyxDQUFDO0FBRXZELE9BQU8sRUFBQyxpQkFBaUIsRUFBQyxNQUFNLGtDQUFrQyxDQUFDO0FBQ25FLE9BQU8sRUFBQyxPQUFPLEVBQUMsTUFBTSxtQ0FBbUMsQ0FBQztBQUMxRCxPQUFPLEVBQUMsR0FBRyxFQUFDLE1BQU0sbUNBQW1DLENBQUM7QUFDdEQsT0FBTyxFQUFDLEdBQUcsRUFBQyxNQUFNLHFDQUFxQyxDQUFDO0FBQ3hELE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUMxRCxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQztBQUN0RCxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUM1RCxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQztBQUMvRCxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFDekQsT0FBTyxFQUFFLDBCQUEwQixFQUFFLE1BQU0sbURBQW1ELENBQUM7QUFDL0YsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sbUNBQW1DLENBQUM7QUFDdkUsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sdUNBQXVDLENBQUM7QUFDN0UsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0scUNBQXFDLENBQUM7QUFDM0UsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sdUNBQXVDLENBQUM7QUFFN0U7SUE0QkU7UUFDRSxPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUMsQ0FBQztJQUN4QixDQUFDOzs7OztJQUVNLG9CQUFPOzs7O0lBQWQsVUFBZSxXQUFtQjtRQUNoQyxHQUFHLENBQUMsb0JBQW9CLEdBQUcsV0FBVyxDQUFDO1FBQ3ZDLE9BQU87WUFDTCxRQUFRLEVBQUUsWUFBWTtTQUN2QixDQUFDO0lBQ0osQ0FBQzs7Z0JBckNGLFFBQVEsU0FBQztvQkFDUixZQUFZLEVBQUU7d0JBQ1osa0JBQWtCO3dCQUNsQixnQkFBZ0I7d0JBQ2hCLGNBQWM7d0JBQ2QsMEJBQTBCO3dCQUMxQixrQkFBa0I7d0JBQ2xCLG9CQUFvQjt3QkFDcEIsb0JBQW9CO3dCQUNwQixvQkFBb0I7cUJBQ3JCO29CQUNELE9BQU8sRUFBRTt3QkFDUCxhQUFhO3dCQUNiLHNCQUFzQjt3QkFDdEIsa0JBQWtCO3dCQUNsQixpQkFBaUI7cUJBQ2xCO29CQUNELFNBQVMsRUFBRTt3QkFDVCxhQUFhO3dCQUNiLHVCQUF1QjtxQkFDeEI7b0JBQ0QsT0FBTyxFQUFFO3dCQUNQLGtCQUFrQjt3QkFDbEIsY0FBYztxQkFDZjtvQkFDRCxlQUFlLEVBQUUsQ0FBRSxjQUFjLENBQUU7aUJBQ3BDOzs7O0lBYUQsbUJBQUM7Q0FBQSxBQXZDRCxJQXVDQztTQVpZLFlBQVkiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0FQUF9JTklUSUFMSVpFUiwgTW9kdWxlV2l0aFByb3ZpZGVycywgTmdNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQge0NvbW1vbk1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcclxuaW1wb3J0IHtcclxuICBDb21tb25Db21wb25lbnRzTW9kdWxlLCBFeGNlcHRpb25NZXNzYWdlU2VydmljZSxcclxuICBFcnJvckludGVyY2VwdG9yU2VydmljZSwgTG9hZGluZ01hc2tJbnRlcmNlcHRvclNlcnZpY2UsIExvYWRpbmdNYXNrU2VydmljZSxcclxuICBBcGksIENvbmZpZ1NlcnZpY2UgXHJcbn0gZnJvbSBcIkBncm91cGRvY3MuZXhhbXBsZXMuYW5ndWxhci9jb21tb24tY29tcG9uZW50c1wiO1xyXG5cclxuaW1wb3J0IHtGb250QXdlc29tZU1vZHVsZX0gZnJvbSAnQGZvcnRhd2Vzb21lL2FuZ3VsYXItZm9udGF3ZXNvbWUnO1xyXG5pbXBvcnQge2xpYnJhcnl9IGZyb20gXCJAZm9ydGF3ZXNvbWUvZm9udGF3ZXNvbWUtc3ZnLWNvcmVcIjtcclxuaW1wb3J0IHtmYXN9IGZyb20gXCJAZm9ydGF3ZXNvbWUvZnJlZS1zb2xpZC1zdmctaWNvbnNcIjtcclxuaW1wb3J0IHtmYXJ9IGZyb20gXCJAZm9ydGF3ZXNvbWUvZnJlZS1yZWd1bGFyLXN2Zy1pY29uc1wiO1xyXG5pbXBvcnQgeyBCcm93c2VyTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3Nlcic7XHJcbmltcG9ydCB7IENsaWNrT3V0c2lkZU1vZHVsZSB9IGZyb20gXCJuZy1jbGljay1vdXRzaWRlXCI7XHJcbmltcG9ydCB7IFBhcnNlckFwcENvbXBvbmVudCB9IGZyb20gJy4vcGFyc2VyLWFwcC5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBTdXJmYWNlQ29tcG9uZW50IH0gZnJvbSAnLi9zdXJmYWNlL3N1cmZhY2UuY29tcG9uZW50JztcclxuaW1wb3J0IHsgRmllbGRDb21wb25lbnQgfSBmcm9tICcuL2ZpZWxkL2ZpZWxkLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IENvbmZpcm1hdGlvbk1vZGFsQ29tcG9uZW50IH0gZnJvbSAnLi9jb25maXJtYXRpb24tbW9kYWwvY29uZmlybWF0aW9uLW1vZGFsLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IFNpZGVQYW5lbENvbXBvbmVudCB9IGZyb20gJy4vc2lkZS1wYW5lbC9zaWRlLXBhbmVsLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IFJlbmFtZU1vZGFsQ29tcG9uZW50IH0gZnJvbSAnLi9yZW5hbWUtbW9kYWwvcmVuYW1lLW1vZGFsLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IFBsYWNlaG9sZGVyQ29tcG9uZW50IH0gZnJvbSAnLi9wbGFjZWhvbGRlci9wbGFjZWhvbGRlci5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBUYWJsZVZpZXdlckNvbXBvbmVudCB9IGZyb20gJy4vdGFibGUtdmlld2VyL3RhYmxlLXZpZXdlci5jb21wb25lbnQnO1xyXG5cclxuQE5nTW9kdWxlKHtcclxuICBkZWNsYXJhdGlvbnM6IFtcclxuICAgIFBhcnNlckFwcENvbXBvbmVudCxcclxuICAgIFN1cmZhY2VDb21wb25lbnQsXHJcbiAgICBGaWVsZENvbXBvbmVudCxcclxuICAgIENvbmZpcm1hdGlvbk1vZGFsQ29tcG9uZW50LFxyXG4gICAgU2lkZVBhbmVsQ29tcG9uZW50LFxyXG4gICAgUmVuYW1lTW9kYWxDb21wb25lbnQsXHJcbiAgICBQbGFjZWhvbGRlckNvbXBvbmVudCxcclxuICAgIFRhYmxlVmlld2VyQ29tcG9uZW50ICBcclxuICBdLFxyXG4gIGltcG9ydHM6IFtcclxuICAgIEJyb3dzZXJNb2R1bGUsXHJcbiAgICBDb21tb25Db21wb25lbnRzTW9kdWxlLCBcclxuICAgIENsaWNrT3V0c2lkZU1vZHVsZSxcclxuICAgIEZvbnRBd2Vzb21lTW9kdWxlXHJcbiAgXSxcclxuICBwcm92aWRlcnM6IFsgXHJcbiAgICBDb25maWdTZXJ2aWNlLFxyXG4gICAgRXhjZXB0aW9uTWVzc2FnZVNlcnZpY2VcclxuICBdLFxyXG4gIGV4cG9ydHM6IFsgXHJcbiAgICBQYXJzZXJBcHBDb21wb25lbnQsXHJcbiAgICBGaWVsZENvbXBvbmVudFxyXG4gIF0sXHJcbiAgZW50cnlDb21wb25lbnRzOiBbIEZpZWxkQ29tcG9uZW50IF0sXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBQYXJzZXJNb2R1bGUgeyBcclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIGxpYnJhcnkuYWRkKGZhcywgZmFyKTtcclxuICB9XHJcblxyXG4gIHN0YXRpYyBmb3JSb290KGFwaUVuZHBvaW50OiBzdHJpbmcpOiBNb2R1bGVXaXRoUHJvdmlkZXJzIHtcclxuICAgIEFwaS5ERUZBVUxUX0FQSV9FTkRQT0lOVCA9IGFwaUVuZHBvaW50O1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgbmdNb2R1bGU6IFBhcnNlck1vZHVsZVxyXG4gICAgfTtcclxuICB9XHJcblxyXG59XHJcbiJdfQ==