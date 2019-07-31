/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopToolbarComponent } from './top-toolbar/top-toolbar.component';
import { SidePanelComponent } from './side-panel/side-panel.component';
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
import { TabbedToolbarsComponent } from './tabbed-toolbars/tabbed-toolbars.component';
import { TabComponent } from "./tab/tab.component";
import { TabsComponent } from "./tabs/tabs.component";
import { FormattingService } from "./formatting.service";
import { ColorPickerComponent } from './color-picker/color-picker.component';
import { FormattingDirective } from './formatting.directive';
import { BackFormattingService } from "./back-formatting.service";
import { OnCloseService } from "./on-close.service";
import { SuccessModalComponent } from './success-modal/success-modal.component';
import { EditorDirective } from './editor.directive';
import { LoadingMaskComponent } from './loading-mask/loading-mask.component';
import { LoadingMaskService } from './loading-mask.service';
import { LoadingMaskInterceptorService } from "./loading-mask-interceptor.service";
/** @type {?} */
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
    ViewportService,
    FormattingService,
    BackFormattingService,
    OnCloseService,
    LoadingMaskInterceptorService,
    LoadingMaskService];
export class CommonComponentsModule {
    constructor() {
        library.add(fas, far);
    }
}
CommonComponentsModule.decorators = [
    { type: NgModule, args: [{
                imports: [CommonModule, FontAwesomeModule],
                declarations: [
                    TopToolbarComponent,
                    SidePanelComponent,
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
                    TabbedToolbarsComponent,
                    TabComponent,
                    TabsComponent,
                    ColorPickerComponent,
                    FormattingDirective,
                    SuccessModalComponent,
                    EditorDirective,
                    LoadingMaskComponent
                ],
                exports: [
                    TopToolbarComponent,
                    SidePanelComponent,
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
                    TabbedToolbarsComponent,
                    TabComponent,
                    TabsComponent,
                    ColorPickerComponent,
                    FormattingDirective,
                    SuccessModalComponent,
                    LoadingMaskComponent,
                    DndDirective
                ],
                providers: providers
            },] }
];
/** @nocollapse */
CommonComponentsModule.ctorParameters = () => [];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tbW9uLWNvbXBvbmVudHMubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdyb3VwZG9jcy5leGFtcGxlcy5hbmd1bGFyL2NvbW1vbi1jb21wb25lbnRzLyIsInNvdXJjZXMiOlsibGliL2NvbW1vbi1jb21wb25lbnRzLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFzQixRQUFRLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDNUQsT0FBTyxFQUFDLFlBQVksRUFBQyxNQUFNLGlCQUFpQixDQUFDO0FBQzdDLE9BQU8sRUFBQyxtQkFBbUIsRUFBQyxNQUFNLHFDQUFxQyxDQUFDO0FBQ3hFLE9BQU8sRUFBQyxrQkFBa0IsRUFBQyxNQUFNLG1DQUFtQyxDQUFDO0FBQ3JFLE9BQU8sRUFBQyxlQUFlLEVBQUMsTUFBTSwyQkFBMkIsQ0FBQztBQUMxRCxPQUFPLEVBQUMsYUFBYSxFQUFDLE1BQU0sdUJBQXVCLENBQUM7QUFDcEQsT0FBTyxFQUFDLGdCQUFnQixFQUFDLE1BQU0sNkJBQTZCLENBQUM7QUFDN0QsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sa0NBQWtDLENBQUM7QUFDckUsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLG1DQUFtQyxDQUFDO0FBQzVELE9BQU8sRUFBRSxHQUFHLEVBQUUsTUFBTSxtQ0FBbUMsQ0FBQztBQUN4RCxPQUFPLEVBQUUsR0FBRyxFQUFFLE1BQU0scUNBQXFDLENBQUM7QUFDMUQsT0FBTyxFQUFDLEdBQUcsRUFBRSxhQUFhLEdBQUUsTUFBTSxrQkFBa0IsQ0FBQztBQUNyRCxPQUFPLEVBQUMsWUFBWSxFQUFDLE1BQU0saUJBQWlCLENBQUM7QUFDN0MsT0FBTyxFQUFDLGNBQWMsRUFBQyxNQUFNLHlCQUF5QixDQUFDO0FBQ3ZELE9BQU8sRUFBQyx5QkFBeUIsRUFBQyxNQUFNLG1EQUFtRCxDQUFDO0FBQzVGLE9BQU8sRUFBQyxTQUFTLEVBQUUsV0FBVyxFQUFFLFFBQVEsRUFBQyxN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LG1CQUFtQjtvQkFDbkIsdUJBQXVCO29CQUN2QixZQUFZO29CQUNaLGFBQWE7b0JBQ2Isb0JBQW9CO29CQUNwQixtQkFBbUI7b0JBQ25CLHFCQUFxQjtvQkFDckIsZUFBZTtvQkFDZixvQkFBb0I7aUJBQ3JCO2dCQUNELE9BQU8sRUFBRTtvQkFDUCxtQkFBbUI7b0JBQ25CLGtCQUFrQjtvQkFDbEIsZUFBZTtvQkFDZixhQUFhO29CQUNiLGdCQUFnQjtvQkFDaEIsY0FBYztvQkFDZCx5QkFBeUI7b0JBQ3pCLGlCQUFpQjtvQkFDakIsYUFBYTtvQkFDYix3QkFBd0I7b0JBQ3hCLGlCQUFpQjtvQkFDakIsbUJBQW1CO29CQUNuQixnQkFBZ0I7b0JBQ2hCLHFCQUFxQjtvQkFDckIsdUJBQXVCO29CQUN2QixtQkFBbUI7b0JBQ25CLGVBQWU7b0JBQ2YsaUJBQWlCO29CQUNqQixrQkFBa0I7b0JBQ2xCLG9CQUFvQjtvQkFDcEIsbUJBQW1CO29CQUNuQix5QkFBeUI7b0JBQ3pCLGVBQWU7b0JBQ2YsbUJBQW1CO29CQUNuQix1QkFBdUI7b0JBQ3ZCLFlBQVk7b0JBQ1osYUFBYTtvQkFDYixvQkFBb0I7b0JBQ3BCLG1CQUFtQjtvQkFDbkIscUJBQXFCO29CQUNyQixvQkFBb0I7b0JBQ3BCLFlBQVk7aUJBQ2I7Z0JBQ0QsU0FBUyxFQUFFLFNBQVM7YUFDckIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge01vZHVsZVdpdGhQcm92aWRlcnMsIE5nTW9kdWxlfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7Q29tbW9uTW9kdWxlfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHtUb3BUb29sYmFyQ29tcG9uZW50fSBmcm9tICcuL3RvcC10b29sYmFyL3RvcC10b29sYmFyLmNvbXBvbmVudCc7XG5pbXBvcnQge1NpZGVQYW5lbENvbXBvbmVudH0gZnJvbSAnLi9zaWRlLXBhbmVsL3NpZGUtcGFuZWwuY29tcG9uZW50JztcbmltcG9ydCB7QnV0dG9uQ29tcG9uZW50fSBmcm9tICcuL2J1dHRvbi9idXR0b24uY29tcG9uZW50JztcbmltcG9ydCB7TG9nb0NvbXBvbmVudH0gZnJvbSAnLi9sb2dvL2xvZ28uY29tcG9uZW50JztcbmltcG9ydCB7VG9vbHRpcENvbXBvbmVudH0gZnJvbSAnLi90b29sdGlwL3Rvb2x0aXAuY29tcG9uZW50JztcbmltcG9ydCB7IEZvbnRBd2Vzb21lTW9kdWxlIH0gZnJvbSAnQGZvcnRhd2Vzb21lL2FuZ3VsYXItZm9udGF3ZXNvbWUnO1xuaW1wb3J0IHsgbGlicmFyeSB9IGZyb20gJ0Bmb3J0YXdlc29tZS9mb250YXdlc29tZS1zdmctY29yZSc7XG5pbXBvcnQgeyBmYXMgfSBmcm9tICdAZm9ydGF3ZXNvbWUvZnJlZS1zb2xpZC1zdmctaWNvbnMnO1xuaW1wb3J0IHsgZmFyIH0gZnJvbSAnQGZvcnRhd2Vzb21lL2ZyZWUtcmVndWxhci1zdmctaWNvbnMnO1xuaW1wb3J0IHtBcGksIENvbmZpZ1NlcnZpY2UsfSBmcm9tIFwiLi9jb25maWcuc2VydmljZVwiO1xuaW1wb3J0IHtNb2RhbFNlcnZpY2V9IGZyb20gXCIuL21vZGFsLnNlcnZpY2VcIjtcbmltcG9ydCB7TW9kYWxDb21wb25lbnR9IGZyb20gJy4vbW9kYWwvbW9kYWwuY29tcG9uZW50JztcbmltcG9ydCB7QnJvd3NlRmlsZXNNb2RhbENvbXBvbmVudH0gZnJvbSAnLi9icm93c2UtZmlsZXMtbW9kYWwvYnJvd3NlLWZpbGVzLW1vZGFsLmNvbXBvbmVudCc7XG5pbXBvcnQge0ZpbGVNb2RlbCwgRmlsZVNlcnZpY2UsIEZpbGVVdGlsfSBmcm9tIFwiLi9maWxlLnNlcnZpY2VcIjtcbmltcG9ydCB7RG9jdW1lbnRDb21wb25lbnR9IGZyb20gJy4vZG9jdW1lbnQvZG9jdW1lbnQuY29tcG9uZW50JztcbmltcG9ydCB7UGFnZUNvbXBvbmVudH0gZnJvbSAnLi9wYWdlL3BhZ2UuY29tcG9uZW50JztcbmltcG9ydCB7SGlnaGxpZ2h0U2VhcmNoUGlwZSwgU2FuaXRpemVIdG1sUGlwZSwgU2FuaXRpemVSZXNvdXJjZUh0bWxQaXBlLCBTYW5pdGl6ZVN0eWxlUGlwZX0gZnJvbSBcIi4vcGlwZXNcIjtcbmltcG9ydCB7Q2hvaWNlQnV0dG9uQ29tcG9uZW50fSBmcm9tICcuL2Nob2ljZS1idXR0b24vY2hvaWNlLWJ1dHRvbi5jb21wb25lbnQnO1xuaW1wb3J0IHtVcGxvYWRGaWxlWm9uZUNvbXBvbmVudH0gZnJvbSAnLi91cGxvYWQtZmlsZS16b25lL3VwbG9hZC1maWxlLXpvbmUuY29tcG9uZW50JztcbmltcG9ydCB7VXBsb2FkRmlsZXNTZXJ2aWNlfSBmcm9tIFwiLi91cGxvYWQtZmlsZXMuc2VydmljZVwiO1xuaW1wb3J0IHtEbmREaXJlY3RpdmV9IGZyb20gJy4vZG5kLmRpcmVjdGl2ZSc7XG5pbXBvcnQge1Njcm9sbGFibGVEaXJlY3RpdmV9IGZyb20gJy4vc2Nyb2xsYWJsZS5kaXJlY3RpdmUnO1xuaW1wb3J0IHtOYXZpZ2F0ZVNlcnZpY2V9IGZyb20gXCIuL25hdmlnYXRlLnNlcnZpY2VcIjtcbmltcG9ydCB7UGFnZVByZWxvYWRTZXJ2aWNlfSBmcm9tIFwiLi9wYWdlLXByZWxvYWQuc2VydmljZVwiO1xuaW1wb3J0IHtab29tRGlyZWN0aXZlfSBmcm9tICcuL3pvb20uZGlyZWN0aXZlJztcbmltcG9ydCB7Wm9vbVNlcnZpY2V9IGZyb20gXCIuL3pvb20uc2VydmljZVwiO1xuaW1wb3J0IHtTZWxlY3RDb21wb25lbnR9IGZyb20gJy4vc2VsZWN0L3NlbGVjdC5jb21wb25lbnQnO1xuaW1wb3J0IHtEaXNhYmxlZEN1cnNvckRpcmVjdGl2ZX0gZnJvbSAnLi9kaXNhYmxlZC1jdXJzb3IuZGlyZWN0aXZlJztcbmltcG9ydCB7Um90YXRpb25EaXJlY3RpdmV9IGZyb20gJy4vcm90YXRpb24uZGlyZWN0aXZlJztcbmltcG9ydCB7SW5pdFN0YXRlQ29tcG9uZW50fSBmcm9tICcuL2luaXQtc3RhdGUvaW5pdC1zdGF0ZS5jb21wb25lbnQnO1xuaW1wb3J0IHtSZW5kZXJQcmludFNlcnZpY2V9IGZyb20gXCIuL3JlbmRlci1wcmludC5zZXJ2aWNlXCI7XG5pbXBvcnQge1JlbmRlclByaW50RGlyZWN0aXZlfSBmcm9tICcuL3JlbmRlci1wcmludC5kaXJlY3RpdmUnO1xuaW1wb3J0IHtFcnJvck1vZGFsQ29tcG9uZW50fSBmcm9tICcuL2Vycm9yLW1vZGFsL2Vycm9yLW1vZGFsLmNvbXBvbmVudCc7XG5pbXBvcnQge1Bhc3N3b3JkUmVxdWlyZWRDb21wb25lbnR9IGZyb20gJy4vcGFzc3dvcmQtcmVxdWlyZWQvcGFzc3dvcmQtcmVxdWlyZWQuY29tcG9uZW50JztcbmltcG9ydCB7RXhjZXB0aW9uTWVzc2FnZVNlcnZpY2V9IGZyb20gXCIuL2V4Y2VwdGlvbi1tZXNzYWdlLnNlcnZpY2VcIjtcbmltcG9ydCB7UGFzc3dvcmRTZXJ2aWNlfSBmcm9tIFwiLi9wYXNzd29yZC5zZXJ2aWNlXCI7XG5pbXBvcnQge0Vycm9ySW50ZXJjZXB0b3JTZXJ2aWNlfSBmcm9tIFwiLi9lcnJvci1pbnRlcmNlcHRvci5zZXJ2aWNlXCI7XG5pbXBvcnQge1NlYXJjaENvbXBvbmVudH0gZnJvbSAnLi9zZWFyY2gvc2VhcmNoLmNvbXBvbmVudCc7XG5pbXBvcnQge1NlYXJjaGFibGVEaXJlY3RpdmV9IGZyb20gJy4vc2VhcmNoYWJsZS5kaXJlY3RpdmUnO1xuaW1wb3J0IHtTZWFyY2hTZXJ2aWNlfSBmcm9tIFwiLi9zZWFyY2guc2VydmljZVwiO1xuaW1wb3J0IHtXaW5kb3dTZXJ2aWNlfSBmcm9tIFwiLi93aW5kb3cuc2VydmljZVwiO1xuaW1wb3J0IHtWaWV3cG9ydFNlcnZpY2V9IGZyb20gXCIuL3ZpZXdwb3J0LnNlcnZpY2VcIjtcbmltcG9ydCB7VGFiYmVkVG9vbGJhcnNDb21wb25lbnR9IGZyb20gJy4vdGFiYmVkLXRvb2xiYXJzL3RhYmJlZC10b29sYmFycy5jb21wb25lbnQnO1xuaW1wb3J0IHtUYWJDb21wb25lbnR9IGZyb20gXCIuL3RhYi90YWIuY29tcG9uZW50XCI7XG5pbXBvcnQge1RhYnNDb21wb25lbnR9IGZyb20gXCIuL3RhYnMvdGFicy5jb21wb25lbnRcIjtcbmltcG9ydCB7Rm9ybWF0dGluZ1NlcnZpY2V9IGZyb20gXCIuL2Zvcm1hdHRpbmcuc2VydmljZVwiO1xuaW1wb3J0IHtDb2xvclBpY2tlckNvbXBvbmVudH0gZnJvbSAnLi9jb2xvci1waWNrZXIvY29sb3ItcGlja2VyLmNvbXBvbmVudCc7XG5pbXBvcnQge0Zvcm1hdHRpbmdEaXJlY3RpdmV9IGZyb20gJy4vZm9ybWF0dGluZy5kaXJlY3RpdmUnO1xuaW1wb3J0IHtCYWNrRm9ybWF0dGluZ1NlcnZpY2V9IGZyb20gXCIuL2JhY2stZm9ybWF0dGluZy5zZXJ2aWNlXCI7XG5pbXBvcnQge09uQ2xvc2VTZXJ2aWNlfSBmcm9tIFwiLi9vbi1jbG9zZS5zZXJ2aWNlXCI7XG5pbXBvcnQge1N1Y2Nlc3NNb2RhbENvbXBvbmVudH0gZnJvbSAnLi9zdWNjZXNzLW1vZGFsL3N1Y2Nlc3MtbW9kYWwuY29tcG9uZW50JztcbmltcG9ydCB7RWRpdG9yRGlyZWN0aXZlfSBmcm9tICcuL2VkaXRvci5kaXJlY3RpdmUnO1xuaW1wb3J0IHtMb2FkaW5nTWFza0NvbXBvbmVudH0gZnJvbSAnLi9sb2FkaW5nLW1hc2svbG9hZGluZy1tYXNrLmNvbXBvbmVudCc7XG5pbXBvcnQge0xvYWRpbmdNYXNrU2VydmljZX0gZnJvbSAnLi9sb2FkaW5nLW1hc2suc2VydmljZSc7XG5pbXBvcnQge0xvYWRpbmdNYXNrSW50ZXJjZXB0b3JTZXJ2aWNlfSBmcm9tIFwiLi9sb2FkaW5nLW1hc2staW50ZXJjZXB0b3Iuc2VydmljZVwiO1xuXG5jb25zdCBwcm92aWRlcnMgPSBbQ29uZmlnU2VydmljZSxcbiAgQXBpLFxuICBNb2RhbFNlcnZpY2UsXG4gIEZpbGVTZXJ2aWNlLFxuICBGaWxlTW9kZWwsXG4gIEZpbGVVdGlsLFxuICBTYW5pdGl6ZUh0bWxQaXBlLFxuICBTYW5pdGl6ZVJlc291cmNlSHRtbFBpcGUsXG4gIFNhbml0aXplU3R5bGVQaXBlLFxuICBIaWdobGlnaHRTZWFyY2hQaXBlLFxuICBVcGxvYWRGaWxlc1NlcnZpY2UsXG4gIFJlbmRlclByaW50U2VydmljZSxcbiAgTmF2aWdhdGVTZXJ2aWNlLFxuICBQYWdlUHJlbG9hZFNlcnZpY2UsXG4gIFpvb21TZXJ2aWNlLFxuICBFeGNlcHRpb25NZXNzYWdlU2VydmljZSxcbiAgUGFzc3dvcmRTZXJ2aWNlLFxuICBFcnJvckludGVyY2VwdG9yU2VydmljZSxcbiAgU2VhcmNoU2VydmljZSxcbiAgV2luZG93U2VydmljZSxcbiAgVmlld3BvcnRTZXJ2aWNlLFxuICBGb3JtYXR0aW5nU2VydmljZSxcbiAgQmFja0Zvcm1hdHRpbmdTZXJ2aWNlLFxuICBPbkNsb3NlU2VydmljZSxcbiAgTG9hZGluZ01hc2tJbnRlcmNlcHRvclNlcnZpY2UsXG4gIExvYWRpbmdNYXNrU2VydmljZV07XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtDb21tb25Nb2R1bGUsIEZvbnRBd2Vzb21lTW9kdWxlXSxcbiAgZGVjbGFyYXRpb25zOiBbXG4gICAgVG9wVG9vbGJhckNvbXBvbmVudCxcbiAgICBTaWRlUGFuZWxDb21wb25lbnQsXG4gICAgQnV0dG9uQ29tcG9uZW50LFxuICAgIExvZ29Db21wb25lbnQsXG4gICAgVG9vbHRpcENvbXBvbmVudCxcbiAgICBNb2RhbENvbXBvbmVudCxcbiAgICBCcm93c2VGaWxlc01vZGFsQ29tcG9uZW50LFxuICAgIERvY3VtZW50Q29tcG9uZW50LFxuICAgIFBhZ2VDb21wb25lbnQsXG4gICAgU2FuaXRpemVIdG1sUGlwZSxcbiAgICBTYW5pdGl6ZVJlc291cmNlSHRtbFBpcGUsXG4gICAgU2FuaXRpemVTdHlsZVBpcGUsXG4gICAgSGlnaGxpZ2h0U2VhcmNoUGlwZSxcbiAgICBDaG9pY2VCdXR0b25Db21wb25lbnQsXG4gICAgVXBsb2FkRmlsZVpvbmVDb21wb25lbnQsXG4gICAgRG5kRGlyZWN0aXZlLFxuICAgIFNjcm9sbGFibGVEaXJlY3RpdmUsXG4gICAgWm9vbURpcmVjdGl2ZSxcbiAgICBTZWxlY3RDb21wb25lbnQsXG4gICAgRGlzYWJsZWRDdXJzb3JEaXJlY3RpdmUsXG4gICAgUm90YXRpb25EaXJlY3RpdmUsXG4gICAgSW5pdFN0YXRlQ29tcG9uZW50LFxuICAgIFJlbmRlclByaW50RGlyZWN0aXZlLFxuICAgIEVycm9yTW9kYWxDb21wb25lbnQsXG4gICAgUGFzc3dvcmRSZXF1aXJlZENvbXBvbmVudCxcbiAgICBTZWFyY2hDb21wb25lbnQsXG4gICAgU2VhcmNoYWJsZURpcmVjdGl2ZSxcbiAgICBUYWJiZWRUb29sYmFyc0NvbXBvbmVudCxcbiAgICBUYWJDb21wb25lbnQsXG4gICAgVGFic0NvbXBvbmVudCxcbiAgICBDb2xvclBpY2tlckNvbXBvbmVudCxcbiAgICBGb3JtYXR0aW5nRGlyZWN0aXZlLFxuICAgIFN1Y2Nlc3NNb2RhbENvbXBvbmVudCxcbiAgICBFZGl0b3JEaXJlY3RpdmUsXG4gICAgTG9hZGluZ01hc2tDb21wb25lbnRcbiAgXSxcbiAgZXhwb3J0czogW1xuICAgIFRvcFRvb2xiYXJDb21wb25lbnQsXG4gICAgU2lkZVBhbmVsQ29tcG9uZW50LFxuICAgIEJ1dHRvbkNvbXBvbmVudCxcbiAgICBMb2dvQ29tcG9uZW50LFxuICAgIFRvb2x0aXBDb21wb25lbnQsXG4gICAgTW9kYWxDb21wb25lbnQsXG4gICAgQnJvd3NlRmlsZXNNb2RhbENvbXBvbmVudCxcbiAgICBEb2N1bWVudENvbXBvbmVudCxcbiAgICBQYWdlQ29tcG9uZW50LFxuICAgIFNhbml0aXplUmVzb3VyY2VIdG1sUGlwZSxcbiAgICBTYW5pdGl6ZVN0eWxlUGlwZSxcbiAgICBIaWdobGlnaHRTZWFyY2hQaXBlLFxuICAgIFNhbml0aXplSHRtbFBpcGUsXG4gICAgQ2hvaWNlQnV0dG9uQ29tcG9uZW50LFxuICAgIFVwbG9hZEZpbGVab25lQ29tcG9uZW50LFxuICAgIFNjcm9sbGFibGVEaXJlY3RpdmUsXG4gICAgU2VsZWN0Q29tcG9uZW50LFxuICAgIFJvdGF0aW9uRGlyZWN0aXZlLFxuICAgIEluaXRTdGF0ZUNvbXBvbmVudCxcbiAgICBSZW5kZXJQcmludERpcmVjdGl2ZSxcbiAgICBFcnJvck1vZGFsQ29tcG9uZW50LFxuICAgIFBhc3N3b3JkUmVxdWlyZWRDb21wb25lbnQsXG4gICAgU2VhcmNoQ29tcG9uZW50LFxuICAgIFNlYXJjaGFibGVEaXJlY3RpdmUsXG4gICAgVGFiYmVkVG9vbGJhcnNDb21wb25lbnQsXG4gICAgVGFiQ29tcG9uZW50LFxuICAgIFRhYnNDb21wb25lbnQsXG4gICAgQ29sb3JQaWNrZXJDb21wb25lbnQsXG4gICAgRm9ybWF0dGluZ0RpcmVjdGl2ZSxcbiAgICBTdWNjZXNzTW9kYWxDb21wb25lbnQsXG4gICAgTG9hZGluZ01hc2tDb21wb25lbnQsXG4gICAgRG5kRGlyZWN0aXZlXG4gIF0sXG4gIHByb3ZpZGVyczogcHJvdmlkZXJzXG59KVxuZXhwb3J0IGNsYXNzIENvbW1vbkNvbXBvbmVudHNNb2R1bGUge1xuICBjb25zdHJ1Y3Rvcigpe1xuICAgIGxpYnJhcnkuYWRkKGZhcyxmYXIpO1xuICB9XG59XG4iXX0=