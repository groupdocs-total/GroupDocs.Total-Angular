import * as tslib_1 from "tslib";
var CommonComponentsModule_1;
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
const providers = [ConfigService,
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
let CommonComponentsModule = CommonComponentsModule_1 = class CommonComponentsModule {
    static forRoot() {
        return {
            ngModule: CommonComponentsModule_1,
            providers: providers
        };
    }
};
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
export { CommonComponentsModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tbW9uLWNvbXBvbmVudHMubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdyb3VwZG9jcy5leGFtcGxlcy5hbmd1bGFyL2NvbW1vbi1jb21wb25lbnRzLyIsInNvdXJjZXMiOlsibGliL2NvbW1vbi1jb21wb25lbnRzLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLE9BQU8sRUFBc0IsUUFBUSxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQzVELE9BQU8sRUFBQyxZQUFZLEVBQUMsTUFBTSxpQkFBaUIsQ0FBQztBQUM3QyxPQUFPLEVBQUMsbUJBQW1CLEVBQUMsTUFBTSxxQ0FBcUMsQ0FBQztBQUN4RSxPQUFPLEVBQUMsZUFBZSxFQUFDLE1BQU0sMkJBQTJCLENBQUM7QUFDMUQsT0FBTyxFQUFDLGFBQWEsRUFBQyxNQUFNLHVCQUF1QixDQUFDO0FBQ3BELE9BQU8sRUFBQyxnQkFBZ0IsRUFBQyxNQUFNLDZCQUE2QixDQUFDO0FBQzdELE9BQU8sRUFBQyx5QkFBeUIsRUFBQyxNQUFNLDJDQUEyQyxDQUFBO0FBQ25GLE9BQU8sRUFBQyxHQUFHLEVBQUUsYUFBYSxHQUFFLE1BQU0sa0JBQWtCLENBQUM7QUFDckQsT0FBTyxFQUFDLFlBQVksRUFBQyxNQUFNLGlCQUFpQixDQUFDO0FBQzdDLE9BQU8sRUFBQyxjQUFjLEVBQUMsTUFBTSx5QkFBeUIsQ0FBQztBQUN2RCxPQUFPLEVBQUMseUJBQXlCLEVBQUMsTUFBTSxtREFBbUQsQ0FBQztBQUM1RixPQUFPLEVBQUMsU0FBUyxFQUFFLFdBQVcsRUFBRSxRQUFRLEVBQUMsTUFBTSxnQkFBZ0IsQ0FBQztBQUNoRSxPQUFPLEVBQUMsaUJBQWlCLEVBQUMsTUFBTSwrQkFBK0IsQ0FBQztBQUNoRSxPQUFPLEVBQUMsYUFBYSxFQUFDLE1BQU0sdUJBQXVCLENBQUM7QUFDcEQsT0FBTyxFQUFDLG1CQUFtQixFQUFFLGdCQUFnQixFQUFFLHdCQUF3QixFQUFFLGlCQUFpQixFQUFDLE1BQU0sU0FB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bUI7WUFDbkIsYUFBYTtZQUNiLGVBQWU7WUFDZix1QkFBdUI7WUFDdkIsaUJBQWlCO1lBQ2pCLGtCQUFrQjtZQUNsQixvQkFBb0I7WUFDcEIsbUJBQW1CO1lBQ25CLHlCQUF5QjtZQUN6QixlQUFlO1lBQ2YsbUJBQW1CO1NBQ3BCO1FBQ0QsT0FBTyxFQUFFO1lBQ1AsbUJBQW1CO1lBQ25CLGVBQWU7WUFDZixhQUFhO1lBQ2IsZ0JBQWdCO1lBQ2hCLGNBQWM7WUFDZCx5QkFBeUI7WUFDekIsaUJBQWlCO1lBQ2pCLGFBQWE7WUFDYix3QkFBd0I7WUFDeEIsaUJBQWlCO1lBQ2pCLG1CQUFtQjtZQUNuQixnQkFBZ0I7WUFDaEIscUJBQXFCO1lBQ3JCLHVCQUF1QjtZQUN2QixtQkFBbUI7WUFDbkIsZUFBZTtZQUNmLGlCQUFpQjtZQUNqQixrQkFBa0I7WUFDbEIsb0JBQW9CO1lBQ3BCLG1CQUFtQjtZQUNuQix5QkFBeUI7WUFDekIsZUFBZTtZQUNmLG1CQUFtQjtTQUNwQjtRQUNELFNBQVMsRUFBRSxTQUFTO0tBQ3JCLENBQUM7R0FDVyxzQkFBc0IsQ0FPbEM7U0FQWSxzQkFBc0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge01vZHVsZVdpdGhQcm92aWRlcnMsIE5nTW9kdWxlfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7Q29tbW9uTW9kdWxlfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHtUb3BUb29sYmFyQ29tcG9uZW50fSBmcm9tICcuL3RvcC10b29sYmFyL3RvcC10b29sYmFyLmNvbXBvbmVudCc7XG5pbXBvcnQge0J1dHRvbkNvbXBvbmVudH0gZnJvbSAnLi9idXR0b24vYnV0dG9uLmNvbXBvbmVudCc7XG5pbXBvcnQge0xvZ29Db21wb25lbnR9IGZyb20gJy4vbG9nby9sb2dvLmNvbXBvbmVudCc7XG5pbXBvcnQge1Rvb2x0aXBDb21wb25lbnR9IGZyb20gJy4vdG9vbHRpcC90b29sdGlwLmNvbXBvbmVudCc7XG5pbXBvcnQge0FuZ3VsYXIyRm9udGF3ZXNvbWVNb2R1bGV9IGZyb20gJ2FuZ3VsYXIyLWZvbnRhd2Vzb21lL2FuZ3VsYXIyLWZvbnRhd2Vzb21lJ1xuaW1wb3J0IHtBcGksIENvbmZpZ1NlcnZpY2UsfSBmcm9tIFwiLi9jb25maWcuc2VydmljZVwiO1xuaW1wb3J0IHtNb2RhbFNlcnZpY2V9IGZyb20gXCIuL21vZGFsLnNlcnZpY2VcIjtcbmltcG9ydCB7TW9kYWxDb21wb25lbnR9IGZyb20gJy4vbW9kYWwvbW9kYWwuY29tcG9uZW50JztcbmltcG9ydCB7QnJvd3NlRmlsZXNNb2RhbENvbXBvbmVudH0gZnJvbSAnLi9icm93c2UtZmlsZXMtbW9kYWwvYnJvd3NlLWZpbGVzLW1vZGFsLmNvbXBvbmVudCc7XG5pbXBvcnQge0ZpbGVNb2RlbCwgRmlsZVNlcnZpY2UsIEZpbGVVdGlsfSBmcm9tIFwiLi9maWxlLnNlcnZpY2VcIjtcbmltcG9ydCB7RG9jdW1lbnRDb21wb25lbnR9IGZyb20gJy4vZG9jdW1lbnQvZG9jdW1lbnQuY29tcG9uZW50JztcbmltcG9ydCB7UGFnZUNvbXBvbmVudH0gZnJvbSAnLi9wYWdlL3BhZ2UuY29tcG9uZW50JztcbmltcG9ydCB7SGlnaGxpZ2h0U2VhcmNoUGlwZSwgU2FuaXRpemVIdG1sUGlwZSwgU2FuaXRpemVSZXNvdXJjZUh0bWxQaXBlLCBTYW5pdGl6ZVN0eWxlUGlwZX0gZnJvbSBcIi4vcGlwZXNcIjtcbmltcG9ydCB7Q2hvaWNlQnV0dG9uQ29tcG9uZW50fSBmcm9tICcuL2Nob2ljZS1idXR0b24vY2hvaWNlLWJ1dHRvbi5jb21wb25lbnQnO1xuaW1wb3J0IHtVcGxvYWRGaWxlWm9uZUNvbXBvbmVudH0gZnJvbSAnLi91cGxvYWQtZmlsZS16b25lL3VwbG9hZC1maWxlLXpvbmUuY29tcG9uZW50JztcbmltcG9ydCB7VXBsb2FkRmlsZXNTZXJ2aWNlfSBmcm9tIFwiLi91cGxvYWQtZmlsZXMuc2VydmljZVwiO1xuaW1wb3J0IHtEbmREaXJlY3RpdmV9IGZyb20gJy4vZG5kLmRpcmVjdGl2ZSc7XG5pbXBvcnQge1Njcm9sbGFibGVEaXJlY3RpdmV9IGZyb20gJy4vc2Nyb2xsYWJsZS5kaXJlY3RpdmUnO1xuaW1wb3J0IHtOYXZpZ2F0ZVNlcnZpY2V9IGZyb20gXCIuL25hdmlnYXRlLnNlcnZpY2VcIjtcbmltcG9ydCB7UGFnZVByZWxvYWRTZXJ2aWNlfSBmcm9tIFwiLi9wYWdlLXByZWxvYWQuc2VydmljZVwiO1xuaW1wb3J0IHtab29tRGlyZWN0aXZlfSBmcm9tICcuL3pvb20uZGlyZWN0aXZlJztcbmltcG9ydCB7Wm9vbVNlcnZpY2V9IGZyb20gXCIuL3pvb20uc2VydmljZVwiO1xuaW1wb3J0IHtTZWxlY3RDb21wb25lbnR9IGZyb20gJy4vc2VsZWN0L3NlbGVjdC5jb21wb25lbnQnO1xuaW1wb3J0IHtEaXNhYmxlZEN1cnNvckRpcmVjdGl2ZX0gZnJvbSAnLi9kaXNhYmxlZC1jdXJzb3IuZGlyZWN0aXZlJztcbmltcG9ydCB7Um90YXRpb25EaXJlY3RpdmV9IGZyb20gJy4vcm90YXRpb24uZGlyZWN0aXZlJztcbmltcG9ydCB7SW5pdFN0YXRlQ29tcG9uZW50fSBmcm9tICcuL2luaXQtc3RhdGUvaW5pdC1zdGF0ZS5jb21wb25lbnQnO1xuaW1wb3J0IHtSZW5kZXJQcmludFNlcnZpY2V9IGZyb20gXCIuL3JlbmRlci1wcmludC5zZXJ2aWNlXCI7XG5pbXBvcnQge1JlbmRlclByaW50RGlyZWN0aXZlfSBmcm9tICcuL3JlbmRlci1wcmludC5kaXJlY3RpdmUnO1xuaW1wb3J0IHtFcnJvck1vZGFsQ29tcG9uZW50fSBmcm9tICcuL2Vycm9yLW1vZGFsL2Vycm9yLW1vZGFsLmNvbXBvbmVudCc7XG5pbXBvcnQge1Bhc3N3b3JkUmVxdWlyZWRDb21wb25lbnR9IGZyb20gJy4vcGFzc3dvcmQtcmVxdWlyZWQvcGFzc3dvcmQtcmVxdWlyZWQuY29tcG9uZW50JztcbmltcG9ydCB7RXhjZXB0aW9uTWVzc2FnZVNlcnZpY2V9IGZyb20gXCIuL2V4Y2VwdGlvbi1tZXNzYWdlLnNlcnZpY2VcIjtcbmltcG9ydCB7UGFzc3dvcmRTZXJ2aWNlfSBmcm9tIFwiLi9wYXNzd29yZC5zZXJ2aWNlXCI7XG5pbXBvcnQge0Vycm9ySW50ZXJjZXB0b3JTZXJ2aWNlfSBmcm9tIFwiLi9lcnJvci1pbnRlcmNlcHRvci5zZXJ2aWNlXCI7XG5pbXBvcnQge1NlYXJjaENvbXBvbmVudH0gZnJvbSAnLi9zZWFyY2gvc2VhcmNoLmNvbXBvbmVudCc7XG5pbXBvcnQge1NlYXJjaGFibGVEaXJlY3RpdmV9IGZyb20gJy4vc2VhcmNoYWJsZS5kaXJlY3RpdmUnO1xuaW1wb3J0IHtTZWFyY2hTZXJ2aWNlfSBmcm9tIFwiLi9zZWFyY2guc2VydmljZVwiO1xuaW1wb3J0IHtXaW5kb3dTZXJ2aWNlfSBmcm9tIFwiLi93aW5kb3cuc2VydmljZVwiO1xuaW1wb3J0IHtWaWV3cG9ydFNlcnZpY2V9IGZyb20gXCIuL3ZpZXdwb3J0LnNlcnZpY2VcIjtcblxuY29uc3QgcHJvdmlkZXJzID0gW0NvbmZpZ1NlcnZpY2UsXG4gIEFwaSxcbiAgTW9kYWxTZXJ2aWNlLFxuICBGaWxlU2VydmljZSxcbiAgRmlsZU1vZGVsLFxuICBGaWxlVXRpbCxcbiAgU2FuaXRpemVIdG1sUGlwZSxcbiAgU2FuaXRpemVSZXNvdXJjZUh0bWxQaXBlLFxuICBTYW5pdGl6ZVN0eWxlUGlwZSxcbiAgSGlnaGxpZ2h0U2VhcmNoUGlwZSxcbiAgVXBsb2FkRmlsZXNTZXJ2aWNlLFxuICBSZW5kZXJQcmludFNlcnZpY2UsXG4gIE5hdmlnYXRlU2VydmljZSxcbiAgUGFnZVByZWxvYWRTZXJ2aWNlLFxuICBab29tU2VydmljZSxcbiAgRXhjZXB0aW9uTWVzc2FnZVNlcnZpY2UsXG4gIFBhc3N3b3JkU2VydmljZSxcbiAgRXJyb3JJbnRlcmNlcHRvclNlcnZpY2UsXG4gIFNlYXJjaFNlcnZpY2UsXG4gIFdpbmRvd1NlcnZpY2UsXG4gIFZpZXdwb3J0U2VydmljZV07XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtDb21tb25Nb2R1bGUsIEFuZ3VsYXIyRm9udGF3ZXNvbWVNb2R1bGVdLFxuICBkZWNsYXJhdGlvbnM6IFtcbiAgICBUb3BUb29sYmFyQ29tcG9uZW50LFxuICAgIEJ1dHRvbkNvbXBvbmVudCxcbiAgICBMb2dvQ29tcG9uZW50LFxuICAgIFRvb2x0aXBDb21wb25lbnQsXG4gICAgTW9kYWxDb21wb25lbnQsXG4gICAgQnJvd3NlRmlsZXNNb2RhbENvbXBvbmVudCxcbiAgICBEb2N1bWVudENvbXBvbmVudCxcbiAgICBQYWdlQ29tcG9uZW50LFxuICAgIFNhbml0aXplSHRtbFBpcGUsXG4gICAgU2FuaXRpemVSZXNvdXJjZUh0bWxQaXBlLFxuICAgIFNhbml0aXplU3R5bGVQaXBlLFxuICAgIEhpZ2hsaWdodFNlYXJjaFBpcGUsXG4gICAgQ2hvaWNlQnV0dG9uQ29tcG9uZW50LFxuICAgIFVwbG9hZEZpbGVab25lQ29tcG9uZW50LFxuICAgIERuZERpcmVjdGl2ZSxcbiAgICBTY3JvbGxhYmxlRGlyZWN0aXZlLFxuICAgIFpvb21EaXJlY3RpdmUsXG4gICAgU2VsZWN0Q29tcG9uZW50LFxuICAgIERpc2FibGVkQ3Vyc29yRGlyZWN0aXZlLFxuICAgIFJvdGF0aW9uRGlyZWN0aXZlLFxuICAgIEluaXRTdGF0ZUNvbXBvbmVudCxcbiAgICBSZW5kZXJQcmludERpcmVjdGl2ZSxcbiAgICBFcnJvck1vZGFsQ29tcG9uZW50LFxuICAgIFBhc3N3b3JkUmVxdWlyZWRDb21wb25lbnQsXG4gICAgU2VhcmNoQ29tcG9uZW50LFxuICAgIFNlYXJjaGFibGVEaXJlY3RpdmUsXG4gIF0sXG4gIGV4cG9ydHM6IFtcbiAgICBUb3BUb29sYmFyQ29tcG9uZW50LFxuICAgIEJ1dHRvbkNvbXBvbmVudCxcbiAgICBMb2dvQ29tcG9uZW50LFxuICAgIFRvb2x0aXBDb21wb25lbnQsXG4gICAgTW9kYWxDb21wb25lbnQsXG4gICAgQnJvd3NlRmlsZXNNb2RhbENvbXBvbmVudCxcbiAgICBEb2N1bWVudENvbXBvbmVudCxcbiAgICBQYWdlQ29tcG9uZW50LFxuICAgIFNhbml0aXplUmVzb3VyY2VIdG1sUGlwZSxcbiAgICBTYW5pdGl6ZVN0eWxlUGlwZSxcbiAgICBIaWdobGlnaHRTZWFyY2hQaXBlLFxuICAgIFNhbml0aXplSHRtbFBpcGUsXG4gICAgQ2hvaWNlQnV0dG9uQ29tcG9uZW50LFxuICAgIFVwbG9hZEZpbGVab25lQ29tcG9uZW50LFxuICAgIFNjcm9sbGFibGVEaXJlY3RpdmUsXG4gICAgU2VsZWN0Q29tcG9uZW50LFxuICAgIFJvdGF0aW9uRGlyZWN0aXZlLFxuICAgIEluaXRTdGF0ZUNvbXBvbmVudCxcbiAgICBSZW5kZXJQcmludERpcmVjdGl2ZSxcbiAgICBFcnJvck1vZGFsQ29tcG9uZW50LFxuICAgIFBhc3N3b3JkUmVxdWlyZWRDb21wb25lbnQsXG4gICAgU2VhcmNoQ29tcG9uZW50LFxuICAgIFNlYXJjaGFibGVEaXJlY3RpdmUsXG4gIF0sXG4gIHByb3ZpZGVyczogcHJvdmlkZXJzXG59KVxuZXhwb3J0IGNsYXNzIENvbW1vbkNvbXBvbmVudHNNb2R1bGUge1xuICBzdGF0aWMgZm9yUm9vdCgpOiBNb2R1bGVXaXRoUHJvdmlkZXJzIHtcbiAgICByZXR1cm4ge1xuICAgICAgbmdNb2R1bGU6IENvbW1vbkNvbXBvbmVudHNNb2R1bGUsXG4gICAgICBwcm92aWRlcnM6IHByb3ZpZGVyc1xuICAgIH07XG4gIH1cbn1cbiJdfQ==