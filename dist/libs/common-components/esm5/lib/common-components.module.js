/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopToolbarComponent } from './top-toolbar/top-toolbar.component';
import { ButtonComponent } from './button/button.component';
import { LogoComponent } from './logo/logo.component';
import { TooltipComponent } from './tooltip/tooltip.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
import { Api, ConfigService, } from "./config.service";
import { ModalService } from "./modal.service";
import { ModalComponent } from './modal/modal.component';
import { BrowseFilesModalComponent } from './browse-files-modal/browse-files-modal.component';
import { FileModel, FileService, FileUtil } from "./file.service";
import { DocumentComponent } from './document/document.component';
import { PageComponent } from './page/page.component';
import { HighlightSearchPipe, SanitizeHtmlPipe, SanitizeResourceHtmlPipe, SanitizeStylePipe } from "./pipes";
import { ChoiceButtonComponent } from './choice-button/choice-button.component';
import { UploadFileZoneComponent } from './upload-file-zone/upload-file-zone.component';
import { UploadFilesService } from "./upload-files.service";
import { DndDirective } from './dnd.directive';
import { ScrollableDirective } from './scrollable.directive';
import { NavigateService } from "./navigate.service";
import { PagePreloadService } from "./page-preload.service";
import { ZoomDirective } from './zoom.directive';
import { ZoomService } from "./zoom.service";
import { SelectComponent } from './select/select.component';
import { DisabledCursorDirective } from './disabled-cursor.directive';
import { RotationDirective } from './rotation.directive';
import { InitStateComponent } from './init-state/init-state.component';
import { RenderPrintService } from "./render-print.service";
import { RenderPrintDirective } from './render-print.directive';
import { ErrorModalComponent } from './error-modal/error-modal.component';
import { PasswordRequiredComponent } from './password-required/password-required.component';
import { ExceptionMessageService } from "./exception-message.service";
import { PasswordService } from "./password.service";
import { ErrorInterceptorService } from "./error-interceptor.service";
import { SearchComponent } from './search/search.component';
import { SearchableDirective } from './searchable.directive';
import { SearchService } from "./search.service";
import { WindowService } from "./window.service";
import { ViewportService } from "./viewport.service";
/** @type {?} */
var providers = [ConfigService,
    Api,
    ModalService,
    FileService,
    FileModel,
    FileUtil,
    SanitizeHtmlPipe,
    SanitizeResourceHtmlPipe,
    SanitizeStylePipe,
    HighlightSearchPipe,
    UploadFilesService,
    RenderPrintService,
    NavigateService,
    PagePreloadService,
    ZoomService,
    ExceptionMessageService,
    PasswordService,
    ErrorInterceptorService,
    SearchService,
    WindowService,
    ViewportService];
var CommonComponentsModule = /** @class */ (function () {
    function CommonComponentsModule() {
        library.add(fas, far);
    }
    CommonComponentsModule.decorators = [
        { type: NgModule, args: [{
                    imports: [CommonModule, FontAwesomeModule],
                    declarations: [
                        TopToolbarComponent,
                        ButtonComponent,
                        LogoComponent,
                        TooltipComponent,
                        ModalComponent,
                        BrowseFilesModalComponent,
                        DocumentComponent,
                        PageComponent,
                        SanitizeHtmlPipe,
                        SanitizeResourceHtmlPipe,
                        SanitizeStylePipe,
                        HighlightSearchPipe,
                        ChoiceButtonComponent,
                        UploadFileZoneComponent,
                        DndDirective,
                        ScrollableDirective,
                        ZoomDirective,
                        SelectComponent,
                        DisabledCursorDirective,
                        RotationDirective,
                        InitStateComponent,
                        RenderPrintDirective,
                        ErrorModalComponent,
                        PasswordRequiredComponent,
                        SearchComponent,
                        SearchableDirective,
                    ],
                    exports: [
                        TopToolbarComponent,
                        ButtonComponent,
                        LogoComponent,
                        TooltipComponent,
                        ModalComponent,
                        BrowseFilesModalComponent,
                        DocumentComponent,
                        PageComponent,
                        SanitizeResourceHtmlPipe,
                        SanitizeStylePipe,
                        HighlightSearchPipe,
                        SanitizeHtmlPipe,
                        ChoiceButtonComponent,
                        UploadFileZoneComponent,
                        ScrollableDirective,
                        SelectComponent,
                        RotationDirective,
                        InitStateComponent,
                        RenderPrintDirective,
                        ErrorModalComponent,
                        PasswordRequiredComponent,
                        SearchComponent,
                        SearchableDirective,
                    ],
                    providers: providers
                },] }
    ];
    /** @nocollapse */
    CommonComponentsModule.ctorParameters = function () { return []; };
    return CommonComponentsModule;
}());
export { CommonComponentsModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tbW9uLWNvbXBvbmVudHMubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdyb3VwZG9jcy5leGFtcGxlcy5hbmd1bGFyL2NvbW1vbi1jb21wb25lbnRzLyIsInNvdXJjZXMiOlsibGliL2NvbW1vbi1jb21wb25lbnRzLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFzQixRQUFRLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDNUQsT0FBTyxFQUFDLFlBQVksRUFBQyxNQUFNLGlCQUFpQixDQUFDO0FBQzdDLE9BQU8sRUFBQyxtQkFBbUIsRUFBQyxNQUFNLHFDQUFxQyxDQUFDO0FBQ3hFLE9BQU8sRUFBQyxlQUFlLEVBQUMsTUFBTSwyQkFBMkIsQ0FBQztBQUMxRCxPQUFPLEVBQUMsYUFBYSxFQUFDLE1BQU0sdUJBQXVCLENBQUM7QUFDcEQsT0FBTyxFQUFDLGdCQUFnQixFQUFDLE1BQU0sNkJBQTZCLENBQUM7QUFDN0QsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sa0NBQWtDLENBQUM7QUFDckUsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLG1DQUFtQyxDQUFDO0FBQzVELE9BQU8sRUFBRSxHQUFHLEVBQUUsTUFBTSxtQ0FBbUMsQ0FBQztBQUN4RCxPQUFPLEVBQUUsR0FBRyxFQUFFLE1BQU0scUNBQXFDLENBQUM7QUFDMUQsT0FBTyxFQUFDLEdBQUcsRUFBRSxhQUFhLEdBQUUsTUFBTSxrQkFBa0IsQ0FBQztBQUNyRCxPQUFPLEVBQUMsWUFBWSxFQUFDLE1BQU0saUJBQWlCLENBQUM7QUFDN0MsT0FBTyxFQUFDLGNBQWMsRUFBQyxNQUFNLHlCQUF5QixDQUFDO0FBQ3ZELE9BQU8sRUFBQyx5QkFBeUIsRUFBQyxNQUFNLG1EQUFtRCxDQUFDO0FBQzVGLE9BQU8sRUFBQyxTQUFTLEVBQUUsV0FBVyxFQUFFLFFBQVEsRUFBQyxNQUFNLGdCQUFnQixDQUFDO0FBQ2hFLE9BQU8sRUFBQyxpQkFBaUIsRUFBQyxN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QixtQkFBbUI7d0JBQ25CLHFCQUFxQjt3QkFDckIsdUJBQXVCO3dCQUN2QixZQUFZO3dCQUNaLG1CQUFtQjt3QkFDbkIsYUFBYTt3QkFDYixlQUFlO3dCQUNmLHVCQUF1Qjt3QkFDdkIsaUJBQWlCO3dCQUNqQixrQkFBa0I7d0JBQ2xCLG9CQUFvQjt3QkFDcEIsbUJBQW1CO3dCQUNuQix5QkFBeUI7d0JBQ3pCLGVBQWU7d0JBQ2YsbUJBQW1CO3FCQUNwQjtvQkFDRCxPQUFPLEVBQUU7d0JBQ1AsbUJBQW1CO3dCQUNuQixlQUFlO3dCQUNmLGFBQWE7d0JBQ2IsZ0JBQWdCO3dCQUNoQixjQUFjO3dCQUNkLHlCQUF5Qjt3QkFDekIsaUJBQWlCO3dCQUNqQixhQUFhO3dCQUNiLHdCQUF3Qjt3QkFDeEIsaUJBQWlCO3dCQUNqQixtQkFBbUI7d0JBQ25CLGdCQUFnQjt3QkFDaEIscUJBQXFCO3dCQUNyQix1QkFBdUI7d0JBQ3ZCLG1CQUFtQjt3QkFDbkIsZUFBZTt3QkFDZixpQkFBaUI7d0JBQ2pCLGtCQUFrQjt3QkFDbEIsb0JBQW9CO3dCQUNwQixtQkFBbUI7d0JBQ25CLHlCQUF5Qjt3QkFDekIsZUFBZTt3QkFDZixtQkFBbUI7cUJBQ3BCO29CQUNELFNBQVMsRUFBRSxTQUFTO2lCQUNyQjs7OztJQUtELDZCQUFDO0NBQUEsQUE3REQsSUE2REM7U0FKWSxzQkFBc0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge01vZHVsZVdpdGhQcm92aWRlcnMsIE5nTW9kdWxlfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7Q29tbW9uTW9kdWxlfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHtUb3BUb29sYmFyQ29tcG9uZW50fSBmcm9tICcuL3RvcC10b29sYmFyL3RvcC10b29sYmFyLmNvbXBvbmVudCc7XG5pbXBvcnQge0J1dHRvbkNvbXBvbmVudH0gZnJvbSAnLi9idXR0b24vYnV0dG9uLmNvbXBvbmVudCc7XG5pbXBvcnQge0xvZ29Db21wb25lbnR9IGZyb20gJy4vbG9nby9sb2dvLmNvbXBvbmVudCc7XG5pbXBvcnQge1Rvb2x0aXBDb21wb25lbnR9IGZyb20gJy4vdG9vbHRpcC90b29sdGlwLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBGb250QXdlc29tZU1vZHVsZSB9IGZyb20gJ0Bmb3J0YXdlc29tZS9hbmd1bGFyLWZvbnRhd2Vzb21lJztcbmltcG9ydCB7IGxpYnJhcnkgfSBmcm9tICdAZm9ydGF3ZXNvbWUvZm9udGF3ZXNvbWUtc3ZnLWNvcmUnO1xuaW1wb3J0IHsgZmFzIH0gZnJvbSAnQGZvcnRhd2Vzb21lL2ZyZWUtc29saWQtc3ZnLWljb25zJztcbmltcG9ydCB7IGZhciB9IGZyb20gJ0Bmb3J0YXdlc29tZS9mcmVlLXJlZ3VsYXItc3ZnLWljb25zJztcbmltcG9ydCB7QXBpLCBDb25maWdTZXJ2aWNlLH0gZnJvbSBcIi4vY29uZmlnLnNlcnZpY2VcIjtcbmltcG9ydCB7TW9kYWxTZXJ2aWNlfSBmcm9tIFwiLi9tb2RhbC5zZXJ2aWNlXCI7XG5pbXBvcnQge01vZGFsQ29tcG9uZW50fSBmcm9tICcuL21vZGFsL21vZGFsLmNvbXBvbmVudCc7XG5pbXBvcnQge0Jyb3dzZUZpbGVzTW9kYWxDb21wb25lbnR9IGZyb20gJy4vYnJvd3NlLWZpbGVzLW1vZGFsL2Jyb3dzZS1maWxlcy1tb2RhbC5jb21wb25lbnQnO1xuaW1wb3J0IHtGaWxlTW9kZWwsIEZpbGVTZXJ2aWNlLCBGaWxlVXRpbH0gZnJvbSBcIi4vZmlsZS5zZXJ2aWNlXCI7XG5pbXBvcnQge0RvY3VtZW50Q29tcG9uZW50fSBmcm9tICcuL2RvY3VtZW50L2RvY3VtZW50LmNvbXBvbmVudCc7XG5pbXBvcnQge1BhZ2VDb21wb25lbnR9IGZyb20gJy4vcGFnZS9wYWdlLmNvbXBvbmVudCc7XG5pbXBvcnQge0hpZ2hsaWdodFNlYXJjaFBpcGUsIFNhbml0aXplSHRtbFBpcGUsIFNhbml0aXplUmVzb3VyY2VIdG1sUGlwZSwgU2FuaXRpemVTdHlsZVBpcGV9IGZyb20gXCIuL3BpcGVzXCI7XG5pbXBvcnQge0Nob2ljZUJ1dHRvbkNvbXBvbmVudH0gZnJvbSAnLi9jaG9pY2UtYnV0dG9uL2Nob2ljZS1idXR0b24uY29tcG9uZW50JztcbmltcG9ydCB7VXBsb2FkRmlsZVpvbmVDb21wb25lbnR9IGZyb20gJy4vdXBsb2FkLWZpbGUtem9uZS91cGxvYWQtZmlsZS16b25lLmNvbXBvbmVudCc7XG5pbXBvcnQge1VwbG9hZEZpbGVzU2VydmljZX0gZnJvbSBcIi4vdXBsb2FkLWZpbGVzLnNlcnZpY2VcIjtcbmltcG9ydCB7RG5kRGlyZWN0aXZlfSBmcm9tICcuL2RuZC5kaXJlY3RpdmUnO1xuaW1wb3J0IHtTY3JvbGxhYmxlRGlyZWN0aXZlfSBmcm9tICcuL3Njcm9sbGFibGUuZGlyZWN0aXZlJztcbmltcG9ydCB7TmF2aWdhdGVTZXJ2aWNlfSBmcm9tIFwiLi9uYXZpZ2F0ZS5zZXJ2aWNlXCI7XG5pbXBvcnQge1BhZ2VQcmVsb2FkU2VydmljZX0gZnJvbSBcIi4vcGFnZS1wcmVsb2FkLnNlcnZpY2VcIjtcbmltcG9ydCB7Wm9vbURpcmVjdGl2ZX0gZnJvbSAnLi96b29tLmRpcmVjdGl2ZSc7XG5pbXBvcnQge1pvb21TZXJ2aWNlfSBmcm9tIFwiLi96b29tLnNlcnZpY2VcIjtcbmltcG9ydCB7U2VsZWN0Q29tcG9uZW50fSBmcm9tICcuL3NlbGVjdC9zZWxlY3QuY29tcG9uZW50JztcbmltcG9ydCB7RGlzYWJsZWRDdXJzb3JEaXJlY3RpdmV9IGZyb20gJy4vZGlzYWJsZWQtY3Vyc29yLmRpcmVjdGl2ZSc7XG5pbXBvcnQge1JvdGF0aW9uRGlyZWN0aXZlfSBmcm9tICcuL3JvdGF0aW9uLmRpcmVjdGl2ZSc7XG5pbXBvcnQge0luaXRTdGF0ZUNvbXBvbmVudH0gZnJvbSAnLi9pbml0LXN0YXRlL2luaXQtc3RhdGUuY29tcG9uZW50JztcbmltcG9ydCB7UmVuZGVyUHJpbnRTZXJ2aWNlfSBmcm9tIFwiLi9yZW5kZXItcHJpbnQuc2VydmljZVwiO1xuaW1wb3J0IHtSZW5kZXJQcmludERpcmVjdGl2ZX0gZnJvbSAnLi9yZW5kZXItcHJpbnQuZGlyZWN0aXZlJztcbmltcG9ydCB7RXJyb3JNb2RhbENvbXBvbmVudH0gZnJvbSAnLi9lcnJvci1tb2RhbC9lcnJvci1tb2RhbC5jb21wb25lbnQnO1xuaW1wb3J0IHtQYXNzd29yZFJlcXVpcmVkQ29tcG9uZW50fSBmcm9tICcuL3Bhc3N3b3JkLXJlcXVpcmVkL3Bhc3N3b3JkLXJlcXVpcmVkLmNvbXBvbmVudCc7XG5pbXBvcnQge0V4Y2VwdGlvbk1lc3NhZ2VTZXJ2aWNlfSBmcm9tIFwiLi9leGNlcHRpb24tbWVzc2FnZS5zZXJ2aWNlXCI7XG5pbXBvcnQge1Bhc3N3b3JkU2VydmljZX0gZnJvbSBcIi4vcGFzc3dvcmQuc2VydmljZVwiO1xuaW1wb3J0IHtFcnJvckludGVyY2VwdG9yU2VydmljZX0gZnJvbSBcIi4vZXJyb3ItaW50ZXJjZXB0b3Iuc2VydmljZVwiO1xuaW1wb3J0IHtTZWFyY2hDb21wb25lbnR9IGZyb20gJy4vc2VhcmNoL3NlYXJjaC5jb21wb25lbnQnO1xuaW1wb3J0IHtTZWFyY2hhYmxlRGlyZWN0aXZlfSBmcm9tICcuL3NlYXJjaGFibGUuZGlyZWN0aXZlJztcbmltcG9ydCB7U2VhcmNoU2VydmljZX0gZnJvbSBcIi4vc2VhcmNoLnNlcnZpY2VcIjtcbmltcG9ydCB7V2luZG93U2VydmljZX0gZnJvbSBcIi4vd2luZG93LnNlcnZpY2VcIjtcbmltcG9ydCB7Vmlld3BvcnRTZXJ2aWNlfSBmcm9tIFwiLi92aWV3cG9ydC5zZXJ2aWNlXCI7XG5cbmNvbnN0IHByb3ZpZGVycyA9IFtDb25maWdTZXJ2aWNlLFxuICBBcGksXG4gIE1vZGFsU2VydmljZSxcbiAgRmlsZVNlcnZpY2UsXG4gIEZpbGVNb2RlbCxcbiAgRmlsZVV0aWwsXG4gIFNhbml0aXplSHRtbFBpcGUsXG4gIFNhbml0aXplUmVzb3VyY2VIdG1sUGlwZSxcbiAgU2FuaXRpemVTdHlsZVBpcGUsXG4gIEhpZ2hsaWdodFNlYXJjaFBpcGUsXG4gIFVwbG9hZEZpbGVzU2VydmljZSxcbiAgUmVuZGVyUHJpbnRTZXJ2aWNlLFxuICBOYXZpZ2F0ZVNlcnZpY2UsXG4gIFBhZ2VQcmVsb2FkU2VydmljZSxcbiAgWm9vbVNlcnZpY2UsXG4gIEV4Y2VwdGlvbk1lc3NhZ2VTZXJ2aWNlLFxuICBQYXNzd29yZFNlcnZpY2UsXG4gIEVycm9ySW50ZXJjZXB0b3JTZXJ2aWNlLFxuICBTZWFyY2hTZXJ2aWNlLFxuICBXaW5kb3dTZXJ2aWNlLFxuICBWaWV3cG9ydFNlcnZpY2VdO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbQ29tbW9uTW9kdWxlLCBGb250QXdlc29tZU1vZHVsZV0sXG4gIGRlY2xhcmF0aW9uczogW1xuICAgIFRvcFRvb2xiYXJDb21wb25lbnQsXG4gICAgQnV0dG9uQ29tcG9uZW50LFxuICAgIExvZ29Db21wb25lbnQsXG4gICAgVG9vbHRpcENvbXBvbmVudCxcbiAgICBNb2RhbENvbXBvbmVudCxcbiAgICBCcm93c2VGaWxlc01vZGFsQ29tcG9uZW50LFxuICAgIERvY3VtZW50Q29tcG9uZW50LFxuICAgIFBhZ2VDb21wb25lbnQsXG4gICAgU2FuaXRpemVIdG1sUGlwZSxcbiAgICBTYW5pdGl6ZVJlc291cmNlSHRtbFBpcGUsXG4gICAgU2FuaXRpemVTdHlsZVBpcGUsXG4gICAgSGlnaGxpZ2h0U2VhcmNoUGlwZSxcbiAgICBDaG9pY2VCdXR0b25Db21wb25lbnQsXG4gICAgVXBsb2FkRmlsZVpvbmVDb21wb25lbnQsXG4gICAgRG5kRGlyZWN0aXZlLFxuICAgIFNjcm9sbGFibGVEaXJlY3RpdmUsXG4gICAgWm9vbURpcmVjdGl2ZSxcbiAgICBTZWxlY3RDb21wb25lbnQsXG4gICAgRGlzYWJsZWRDdXJzb3JEaXJlY3RpdmUsXG4gICAgUm90YXRpb25EaXJlY3RpdmUsXG4gICAgSW5pdFN0YXRlQ29tcG9uZW50LFxuICAgIFJlbmRlclByaW50RGlyZWN0aXZlLFxuICAgIEVycm9yTW9kYWxDb21wb25lbnQsXG4gICAgUGFzc3dvcmRSZXF1aXJlZENvbXBvbmVudCxcbiAgICBTZWFyY2hDb21wb25lbnQsXG4gICAgU2VhcmNoYWJsZURpcmVjdGl2ZSxcbiAgXSxcbiAgZXhwb3J0czogW1xuICAgIFRvcFRvb2xiYXJDb21wb25lbnQsXG4gICAgQnV0dG9uQ29tcG9uZW50LFxuICAgIExvZ29Db21wb25lbnQsXG4gICAgVG9vbHRpcENvbXBvbmVudCxcbiAgICBNb2RhbENvbXBvbmVudCxcbiAgICBCcm93c2VGaWxlc01vZGFsQ29tcG9uZW50LFxuICAgIERvY3VtZW50Q29tcG9uZW50LFxuICAgIFBhZ2VDb21wb25lbnQsXG4gICAgU2FuaXRpemVSZXNvdXJjZUh0bWxQaXBlLFxuICAgIFNhbml0aXplU3R5bGVQaXBlLFxuICAgIEhpZ2hsaWdodFNlYXJjaFBpcGUsXG4gICAgU2FuaXRpemVIdG1sUGlwZSxcbiAgICBDaG9pY2VCdXR0b25Db21wb25lbnQsXG4gICAgVXBsb2FkRmlsZVpvbmVDb21wb25lbnQsXG4gICAgU2Nyb2xsYWJsZURpcmVjdGl2ZSxcbiAgICBTZWxlY3RDb21wb25lbnQsXG4gICAgUm90YXRpb25EaXJlY3RpdmUsXG4gICAgSW5pdFN0YXRlQ29tcG9uZW50LFxuICAgIFJlbmRlclByaW50RGlyZWN0aXZlLFxuICAgIEVycm9yTW9kYWxDb21wb25lbnQsXG4gICAgUGFzc3dvcmRSZXF1aXJlZENvbXBvbmVudCxcbiAgICBTZWFyY2hDb21wb25lbnQsXG4gICAgU2VhcmNoYWJsZURpcmVjdGl2ZSxcbiAgXSxcbiAgcHJvdmlkZXJzOiBwcm92aWRlcnNcbn0pXG5leHBvcnQgY2xhc3MgQ29tbW9uQ29tcG9uZW50c01vZHVsZSB7XG4gIGNvbnN0cnVjdG9yKCl7XG4gICAgbGlicmFyeS5hZGQoZmFzLGZhcik7XG4gIH1cbn1cbiJdfQ==