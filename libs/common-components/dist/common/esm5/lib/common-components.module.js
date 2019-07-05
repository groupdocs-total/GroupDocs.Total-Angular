import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopToolbarComponent } from './top-toolbar/top-toolbar.component';
import { ButtonComponent } from './button/button.component';
import { LogoComponent } from './logo/logo.component';
import { TooltipComponent } from './tooltip/tooltip.component';
import { Angular2FontawesomeModule } from 'angular2-fontawesome/angular2-fontawesome';
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
    }
    CommonComponentsModule_1 = CommonComponentsModule;
    CommonComponentsModule.forRoot = function () {
        return {
            ngModule: CommonComponentsModule_1,
            providers: providers
        };
    };
    var CommonComponentsModule_1;
    CommonComponentsModule = CommonComponentsModule_1 = tslib_1.__decorate([
        NgModule({
            imports: [CommonModule, Angular2FontawesomeModule],
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
        })
    ], CommonComponentsModule);
    return CommonComponentsModule;
}());
export { CommonComponentsModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tbW9uLWNvbXBvbmVudHMubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdyb3VwZG9jcy5leGFtcGxlcy5hbmd1bGFyL2NvbW1vbi1jb21wb25lbnRzLyIsInNvdXJjZXMiOlsibGliL2NvbW1vbi1jb21wb25lbnRzLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFzQixRQUFRLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDNUQsT0FBTyxFQUFDLFlBQVksRUFBQyxNQUFNLGlCQUFpQixDQUFDO0FBQzdDLE9BQU8sRUFBQyxtQkFBbUIsRUFBQyxNQUFNLHFDQUFxQyxDQUFDO0FBQ3hFLE9BQU8sRUFBQyxlQUFlLEVBQUMsTUFBTSwyQkFBMkIsQ0FBQztBQUMxRCxPQUFPLEVBQUMsYUFBYSxFQUFDLE1BQU0sdUJBQXVCLENBQUM7QUFDcEQsT0FBTyxFQUFDLGdCQUFnQixFQUFDLE1BQU0sNkJBQTZCLENBQUM7QUFDN0QsT0FBTyxFQUFDLHlCQUF5QixFQUFDLE1BQU0sMkNBQTJDLENBQUE7QUFDbkYsT0FBTyxFQUFDLEdBQUcsRUFBRSxhQUFhLEdBQUUsTUFBTSxrQkFBa0IsQ0FBQztBQUNyRCxPQUFPLEVBQUMsWUFBWSxFQUFDLE1BQU0saUJBQWlCLENBQUM7QUFDN0MsT0FBTyxFQUFDLGNBQWMsRUFBQyxNQUFNLHlCQUF5QixDQUFDO0FBQ3ZELE9BQU8sRUFBQyx5QkFBeUIsRUFBQyxNQUFNLG1EQUFtRCxDQUFDO0FBQzVGLE9BQU8sRUFBQyxTQUFTLEVBQUUsV0FBVyxFQUFFLFFBQVEsRUFBQyxNQUFNLGdCQUFnQixDQUFDO0FBQ2hFLE9BQU8sRUFBQyxpQkFBaUIsRUFBQyxNQUFNLCtCQUErQixDQUFDO0FBQ2hFLE9BQU8sRUFBQyxhQUFhLEVBQUMsTUFBTSx1QkFBdUIsQ0FBQztBQUNwRCxPQUFPLEVBQUMsbUJBQW1CLEVBQUUsZ0JBQWdCLEVBQUUsd0JBQXdCLEVBQUUsaUJBQWlCLEVBQUMsTUFBTSxTQUFT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QjtnQkFDbkIsYUFBYTtnQkFDYixlQUFlO2dCQUNmLHVCQUF1QjtnQkFDdkIsaUJBQWlCO2dCQUNqQixrQkFBa0I7Z0JBQ2xCLG9CQUFvQjtnQkFDcEIsbUJBQW1CO2dCQUNuQix5QkFBeUI7Z0JBQ3pCLGVBQWU7Z0JBQ2YsbUJBQW1CO2FBQ3BCO1lBQ0QsT0FBTyxFQUFFO2dCQUNQLG1CQUFtQjtnQkFDbkIsZUFBZTtnQkFDZixhQUFhO2dCQUNiLGdCQUFnQjtnQkFDaEIsY0FBYztnQkFDZCx5QkFBeUI7Z0JBQ3pCLGlCQUFpQjtnQkFDakIsYUFBYTtnQkFDYix3QkFBd0I7Z0JBQ3hCLGlCQUFpQjtnQkFDakIsbUJBQW1CO2dCQUNuQixnQkFBZ0I7Z0JBQ2hCLHFCQUFxQjtnQkFDckIsdUJBQXVCO2dCQUN2QixtQkFBbUI7Z0JBQ25CLGVBQWU7Z0JBQ2YsaUJBQWlCO2dCQUNqQixrQkFBa0I7Z0JBQ2xCLG9CQUFvQjtnQkFDcEIsbUJBQW1CO2dCQUNuQix5QkFBeUI7Z0JBQ3pCLGVBQWU7Z0JBQ2YsbUJBQW1CO2FBQ3BCO1lBQ0QsU0FBUyxFQUFFLFNBQVM7U0FDckIsQ0FBQztPQUNXLHNCQUFzQixDQU9sQztJQUFELDZCQUFDO0NBQUEsQUFQRCxJQU9DO1NBUFksc0JBQXNCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtNb2R1bGVXaXRoUHJvdmlkZXJzLCBOZ01vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge0NvbW1vbk1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7VG9wVG9vbGJhckNvbXBvbmVudH0gZnJvbSAnLi90b3AtdG9vbGJhci90b3AtdG9vbGJhci5jb21wb25lbnQnO1xuaW1wb3J0IHtCdXR0b25Db21wb25lbnR9IGZyb20gJy4vYnV0dG9uL2J1dHRvbi5jb21wb25lbnQnO1xuaW1wb3J0IHtMb2dvQ29tcG9uZW50fSBmcm9tICcuL2xvZ28vbG9nby5jb21wb25lbnQnO1xuaW1wb3J0IHtUb29sdGlwQ29tcG9uZW50fSBmcm9tICcuL3Rvb2x0aXAvdG9vbHRpcC5jb21wb25lbnQnO1xuaW1wb3J0IHtBbmd1bGFyMkZvbnRhd2Vzb21lTW9kdWxlfSBmcm9tICdhbmd1bGFyMi1mb250YXdlc29tZS9hbmd1bGFyMi1mb250YXdlc29tZSdcbmltcG9ydCB7QXBpLCBDb25maWdTZXJ2aWNlLH0gZnJvbSBcIi4vY29uZmlnLnNlcnZpY2VcIjtcbmltcG9ydCB7TW9kYWxTZXJ2aWNlfSBmcm9tIFwiLi9tb2RhbC5zZXJ2aWNlXCI7XG5pbXBvcnQge01vZGFsQ29tcG9uZW50fSBmcm9tICcuL21vZGFsL21vZGFsLmNvbXBvbmVudCc7XG5pbXBvcnQge0Jyb3dzZUZpbGVzTW9kYWxDb21wb25lbnR9IGZyb20gJy4vYnJvd3NlLWZpbGVzLW1vZGFsL2Jyb3dzZS1maWxlcy1tb2RhbC5jb21wb25lbnQnO1xuaW1wb3J0IHtGaWxlTW9kZWwsIEZpbGVTZXJ2aWNlLCBGaWxlVXRpbH0gZnJvbSBcIi4vZmlsZS5zZXJ2aWNlXCI7XG5pbXBvcnQge0RvY3VtZW50Q29tcG9uZW50fSBmcm9tICcuL2RvY3VtZW50L2RvY3VtZW50LmNvbXBvbmVudCc7XG5pbXBvcnQge1BhZ2VDb21wb25lbnR9IGZyb20gJy4vcGFnZS9wYWdlLmNvbXBvbmVudCc7XG5pbXBvcnQge0hpZ2hsaWdodFNlYXJjaFBpcGUsIFNhbml0aXplSHRtbFBpcGUsIFNhbml0aXplUmVzb3VyY2VIdG1sUGlwZSwgU2FuaXRpemVTdHlsZVBpcGV9IGZyb20gXCIuL3BpcGVzXCI7XG5pbXBvcnQge0Nob2ljZUJ1dHRvbkNvbXBvbmVudH0gZnJvbSAnLi9jaG9pY2UtYnV0dG9uL2Nob2ljZS1idXR0b24uY29tcG9uZW50JztcbmltcG9ydCB7VXBsb2FkRmlsZVpvbmVDb21wb25lbnR9IGZyb20gJy4vdXBsb2FkLWZpbGUtem9uZS91cGxvYWQtZmlsZS16b25lLmNvbXBvbmVudCc7XG5pbXBvcnQge1VwbG9hZEZpbGVzU2VydmljZX0gZnJvbSBcIi4vdXBsb2FkLWZpbGVzLnNlcnZpY2VcIjtcbmltcG9ydCB7RG5kRGlyZWN0aXZlfSBmcm9tICcuL2RuZC5kaXJlY3RpdmUnO1xuaW1wb3J0IHtTY3JvbGxhYmxlRGlyZWN0aXZlfSBmcm9tICcuL3Njcm9sbGFibGUuZGlyZWN0aXZlJztcbmltcG9ydCB7TmF2aWdhdGVTZXJ2aWNlfSBmcm9tIFwiLi9uYXZpZ2F0ZS5zZXJ2aWNlXCI7XG5pbXBvcnQge1BhZ2VQcmVsb2FkU2VydmljZX0gZnJvbSBcIi4vcGFnZS1wcmVsb2FkLnNlcnZpY2VcIjtcbmltcG9ydCB7Wm9vbURpcmVjdGl2ZX0gZnJvbSAnLi96b29tLmRpcmVjdGl2ZSc7XG5pbXBvcnQge1pvb21TZXJ2aWNlfSBmcm9tIFwiLi96b29tLnNlcnZpY2VcIjtcbmltcG9ydCB7U2VsZWN0Q29tcG9uZW50fSBmcm9tICcuL3NlbGVjdC9zZWxlY3QuY29tcG9uZW50JztcbmltcG9ydCB7RGlzYWJsZWRDdXJzb3JEaXJlY3RpdmV9IGZyb20gJy4vZGlzYWJsZWQtY3Vyc29yLmRpcmVjdGl2ZSc7XG5pbXBvcnQge1JvdGF0aW9uRGlyZWN0aXZlfSBmcm9tICcuL3JvdGF0aW9uLmRpcmVjdGl2ZSc7XG5pbXBvcnQge0luaXRTdGF0ZUNvbXBvbmVudH0gZnJvbSAnLi9pbml0LXN0YXRlL2luaXQtc3RhdGUuY29tcG9uZW50JztcbmltcG9ydCB7UmVuZGVyUHJpbnRTZXJ2aWNlfSBmcm9tIFwiLi9yZW5kZXItcHJpbnQuc2VydmljZVwiO1xuaW1wb3J0IHtSZW5kZXJQcmludERpcmVjdGl2ZX0gZnJvbSAnLi9yZW5kZXItcHJpbnQuZGlyZWN0aXZlJztcbmltcG9ydCB7RXJyb3JNb2RhbENvbXBvbmVudH0gZnJvbSAnLi9lcnJvci1tb2RhbC9lcnJvci1tb2RhbC5jb21wb25lbnQnO1xuaW1wb3J0IHtQYXNzd29yZFJlcXVpcmVkQ29tcG9uZW50fSBmcm9tICcuL3Bhc3N3b3JkLXJlcXVpcmVkL3Bhc3N3b3JkLXJlcXVpcmVkLmNvbXBvbmVudCc7XG5pbXBvcnQge0V4Y2VwdGlvbk1lc3NhZ2VTZXJ2aWNlfSBmcm9tIFwiLi9leGNlcHRpb24tbWVzc2FnZS5zZXJ2aWNlXCI7XG5pbXBvcnQge1Bhc3N3b3JkU2VydmljZX0gZnJvbSBcIi4vcGFzc3dvcmQuc2VydmljZVwiO1xuaW1wb3J0IHtFcnJvckludGVyY2VwdG9yU2VydmljZX0gZnJvbSBcIi4vZXJyb3ItaW50ZXJjZXB0b3Iuc2VydmljZVwiO1xuaW1wb3J0IHtTZWFyY2hDb21wb25lbnR9IGZyb20gJy4vc2VhcmNoL3NlYXJjaC5jb21wb25lbnQnO1xuaW1wb3J0IHtTZWFyY2hhYmxlRGlyZWN0aXZlfSBmcm9tICcuL3NlYXJjaGFibGUuZGlyZWN0aXZlJztcbmltcG9ydCB7U2VhcmNoU2VydmljZX0gZnJvbSBcIi4vc2VhcmNoLnNlcnZpY2VcIjtcbmltcG9ydCB7V2luZG93U2VydmljZX0gZnJvbSBcIi4vd2luZG93LnNlcnZpY2VcIjtcbmltcG9ydCB7Vmlld3BvcnRTZXJ2aWNlfSBmcm9tIFwiLi92aWV3cG9ydC5zZXJ2aWNlXCI7XG5cbmNvbnN0IHByb3ZpZGVycyA9IFtDb25maWdTZXJ2aWNlLFxuICBBcGksXG4gIE1vZGFsU2VydmljZSxcbiAgRmlsZVNlcnZpY2UsXG4gIEZpbGVNb2RlbCxcbiAgRmlsZVV0aWwsXG4gIFNhbml0aXplSHRtbFBpcGUsXG4gIFNhbml0aXplUmVzb3VyY2VIdG1sUGlwZSxcbiAgU2FuaXRpemVTdHlsZVBpcGUsXG4gIEhpZ2hsaWdodFNlYXJjaFBpcGUsXG4gIFVwbG9hZEZpbGVzU2VydmljZSxcbiAgUmVuZGVyUHJpbnRTZXJ2aWNlLFxuICBOYXZpZ2F0ZVNlcnZpY2UsXG4gIFBhZ2VQcmVsb2FkU2VydmljZSxcbiAgWm9vbVNlcnZpY2UsXG4gIEV4Y2VwdGlvbk1lc3NhZ2VTZXJ2aWNlLFxuICBQYXNzd29yZFNlcnZpY2UsXG4gIEVycm9ySW50ZXJjZXB0b3JTZXJ2aWNlLFxuICBTZWFyY2hTZXJ2aWNlLFxuICBXaW5kb3dTZXJ2aWNlLFxuICBWaWV3cG9ydFNlcnZpY2VdO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbQ29tbW9uTW9kdWxlLCBBbmd1bGFyMkZvbnRhd2Vzb21lTW9kdWxlXSxcbiAgZGVjbGFyYXRpb25zOiBbXG4gICAgVG9wVG9vbGJhckNvbXBvbmVudCxcbiAgICBCdXR0b25Db21wb25lbnQsXG4gICAgTG9nb0NvbXBvbmVudCxcbiAgICBUb29sdGlwQ29tcG9uZW50LFxuICAgIE1vZGFsQ29tcG9uZW50LFxuICAgIEJyb3dzZUZpbGVzTW9kYWxDb21wb25lbnQsXG4gICAgRG9jdW1lbnRDb21wb25lbnQsXG4gICAgUGFnZUNvbXBvbmVudCxcbiAgICBTYW5pdGl6ZUh0bWxQaXBlLFxuICAgIFNhbml0aXplUmVzb3VyY2VIdG1sUGlwZSxcbiAgICBTYW5pdGl6ZVN0eWxlUGlwZSxcbiAgICBIaWdobGlnaHRTZWFyY2hQaXBlLFxuICAgIENob2ljZUJ1dHRvbkNvbXBvbmVudCxcbiAgICBVcGxvYWRGaWxlWm9uZUNvbXBvbmVudCxcbiAgICBEbmREaXJlY3RpdmUsXG4gICAgU2Nyb2xsYWJsZURpcmVjdGl2ZSxcbiAgICBab29tRGlyZWN0aXZlLFxuICAgIFNlbGVjdENvbXBvbmVudCxcbiAgICBEaXNhYmxlZEN1cnNvckRpcmVjdGl2ZSxcbiAgICBSb3RhdGlvbkRpcmVjdGl2ZSxcbiAgICBJbml0U3RhdGVDb21wb25lbnQsXG4gICAgUmVuZGVyUHJpbnREaXJlY3RpdmUsXG4gICAgRXJyb3JNb2RhbENvbXBvbmVudCxcbiAgICBQYXNzd29yZFJlcXVpcmVkQ29tcG9uZW50LFxuICAgIFNlYXJjaENvbXBvbmVudCxcbiAgICBTZWFyY2hhYmxlRGlyZWN0aXZlLFxuICBdLFxuICBleHBvcnRzOiBbXG4gICAgVG9wVG9vbGJhckNvbXBvbmVudCxcbiAgICBCdXR0b25Db21wb25lbnQsXG4gICAgTG9nb0NvbXBvbmVudCxcbiAgICBUb29sdGlwQ29tcG9uZW50LFxuICAgIE1vZGFsQ29tcG9uZW50LFxuICAgIEJyb3dzZUZpbGVzTW9kYWxDb21wb25lbnQsXG4gICAgRG9jdW1lbnRDb21wb25lbnQsXG4gICAgUGFnZUNvbXBvbmVudCxcbiAgICBTYW5pdGl6ZVJlc291cmNlSHRtbFBpcGUsXG4gICAgU2FuaXRpemVTdHlsZVBpcGUsXG4gICAgSGlnaGxpZ2h0U2VhcmNoUGlwZSxcbiAgICBTYW5pdGl6ZUh0bWxQaXBlLFxuICAgIENob2ljZUJ1dHRvbkNvbXBvbmVudCxcbiAgICBVcGxvYWRGaWxlWm9uZUNvbXBvbmVudCxcbiAgICBTY3JvbGxhYmxlRGlyZWN0aXZlLFxuICAgIFNlbGVjdENvbXBvbmVudCxcbiAgICBSb3RhdGlvbkRpcmVjdGl2ZSxcbiAgICBJbml0U3RhdGVDb21wb25lbnQsXG4gICAgUmVuZGVyUHJpbnREaXJlY3RpdmUsXG4gICAgRXJyb3JNb2RhbENvbXBvbmVudCxcbiAgICBQYXNzd29yZFJlcXVpcmVkQ29tcG9uZW50LFxuICAgIFNlYXJjaENvbXBvbmVudCxcbiAgICBTZWFyY2hhYmxlRGlyZWN0aXZlLFxuICBdLFxuICBwcm92aWRlcnM6IHByb3ZpZGVyc1xufSlcbmV4cG9ydCBjbGFzcyBDb21tb25Db21wb25lbnRzTW9kdWxlIHtcbiAgc3RhdGljIGZvclJvb3QoKTogTW9kdWxlV2l0aFByb3ZpZGVycyB7XG4gICAgcmV0dXJuIHtcbiAgICAgIG5nTW9kdWxlOiBDb21tb25Db21wb25lbnRzTW9kdWxlLFxuICAgICAgcHJvdmlkZXJzOiBwcm92aWRlcnNcbiAgICB9O1xuICB9XG59XG4iXX0=