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
import { TabActivatorService } from "./tab-activator.service";
import { DropDownComponent, DropDownItemComponent, DropDownItemsComponent, DropDownToggleComponent } from './drop-down/drop-down.component';
import { ClickOutsideModule } from 'ng-click-outside';
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
    LoadingMaskService,
    TabActivatorService];
export class CommonComponentsModule {
    constructor() {
        library.add(fas, far);
    }
}
CommonComponentsModule.decorators = [
    { type: NgModule, args: [{
                imports: [CommonModule, FontAwesomeModule, ClickOutsideModule],
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
                    LoadingMaskComponent,
                    DropDownComponent,
                    DropDownItemComponent,
                    DropDownItemsComponent,
                    DropDownToggleComponent
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
                    DndDirective,
                    DropDownComponent,
                    DropDownItemComponent,
                    DropDownItemsComponent,
                    DropDownToggleComponent
                ],
                providers: providers
            },] }
];
/** @nocollapse */
CommonComponentsModule.ctorParameters = () => [];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tbW9uLWNvbXBvbmVudHMubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdyb3VwZG9jcy5leGFtcGxlcy5hbmd1bGFyL2NvbW1vbi1jb21wb25lbnRzLyIsInNvdXJjZXMiOlsibGliL2NvbW1vbi1jb21wb25lbnRzLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFzQixRQUFRLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDNUQsT0FBTyxFQUFDLFlBQVksRUFBQyxNQUFNLGlCQUFpQixDQUFDO0FBQzdDLE9BQU8sRUFBQyxtQkFBbUIsRUFBQyxNQUFNLHFDQUFxQyxDQUFDO0FBQ3hFLE9BQU8sRUFBQyxrQkFBa0IsRUFBQyxNQUFNLG1DQUFtQyxDQUFDO0FBQ3JFLE9BQU8sRUFBQyxlQUFlLEVBQUMsTUFBTSwyQkFBMkIsQ0FBQztBQUMxRCxPQUFPLEVBQUMsYUFBYSxFQUFDLE1BQU0sdUJBQXVCLENBQUM7QUFDcEQsT0FBTyxFQUFDLGdCQUFnQixFQUFDLE1BQU0sNkJBQTZCLENBQUM7QUFDN0QsT0FBTyxFQUFDLGlCQUFpQixFQUFDLE1BQU0sa0NBQWtDLENBQUM7QUFDbkUsT0FBTyxFQUFDLE9BQU8sRUFBQyxNQUFNLG1DQUFtQyxDQUFDO0FBQzFELE9BQU8sRUFBQyxHQUFHLEVBQUMsTUFBTSxtQ0FBbUMsQ0FBQztBQUN0RCxPQUFPLEVBQUMsR0FBRyxFQUFDLE1BQU0scUNBQXFDLENBQUM7QUFDeEQsT0FBTyxFQUFDLEdBQUcsRUFBRSxhQUFhLEdBQUUsTUFBTSxrQkFBa0IsQ0FBQztBQUNyRCxPQUFPLEVBQUMsWUFBWSxFQUFDLE1BQU0saUJBQWlCLENBQUM7QUFDN0MsT0FBTyxFQUFDLGNBQWMsRUFBQyxNQUFNLHlCQUF5QixDQUFDO0FBQ3ZELE9BQU8sRUFBQyx5QkFBeUIsRUFBQyxNQUFNLG1EQUFtRCxDQUFDO0FBQzVGLE9BQU8sRUFBQyxTQUFTLEVBQUUsV0FBVyxFQUFFLFFBQVEsRUFBQyxN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O29CQUNaLG1CQUFtQjtvQkFDbkIsYUFBYTtvQkFDYixlQUFlO29CQUNmLHVCQUF1QjtvQkFDdkIsaUJBQWlCO29CQUNqQixrQkFBa0I7b0JBQ2xCLG9CQUFvQjtvQkFDcEIsbUJBQW1CO29CQUNuQix5QkFBeUI7b0JBQ3pCLGVBQWU7b0JBQ2YsbUJBQW1CO29CQUNuQix1QkFBdUI7b0JBQ3ZCLFlBQVk7b0JBQ1osYUFBYTtvQkFDYixvQkFBb0I7b0JBQ3BCLG1CQUFtQjtvQkFDbkIscUJBQXFCO29CQUNyQixlQUFlO29CQUNmLG9CQUFvQjtvQkFDcEIsaUJBQWlCO29CQUNqQixxQkFBcUI7b0JBQ3JCLHNCQUFzQjtvQkFDdEIsdUJBQXVCO2lCQUN4QjtnQkFDRCxPQUFPLEVBQUU7b0JBQ1AsbUJBQW1CO29CQUNuQixrQkFBa0I7b0JBQ2xCLGVBQWU7b0JBQ2YsYUFBYTtvQkFDYixnQkFBZ0I7b0JBQ2hCLGNBQWM7b0JBQ2QseUJBQXlCO29CQUN6QixpQkFBaUI7b0JBQ2pCLGFBQWE7b0JBQ2Isd0JBQXdCO29CQUN4QixpQkFBaUI7b0JBQ2pCLG1CQUFtQjtvQkFDbkIsZ0JBQWdCO29CQUNoQix1QkFBdUI7b0JBQ3ZCLG1CQUFtQjtvQkFDbkIsZUFBZTtvQkFDZixpQkFBaUI7b0JBQ2pCLGtCQUFrQjtvQkFDbEIsb0JBQW9CO29CQUNwQixtQkFBbUI7b0JBQ25CLHlCQUF5QjtvQkFDekIsZUFBZTtvQkFDZixtQkFBbUI7b0JBQ25CLHVCQUF1QjtvQkFDdkIsWUFBWTtvQkFDWixhQUFhO29CQUNiLG9CQUFvQjtvQkFDcEIsbUJBQW1CO29CQUNuQixxQkFBcUI7b0JBQ3JCLG9CQUFvQjtvQkFDcEIsWUFBWTtvQkFDWixpQkFBaUI7b0JBQ2pCLHFCQUFxQjtvQkFDckIsc0JBQXNCO29CQUN0Qix1QkFBdUI7aUJBQ3hCO2dCQUNELFNBQVMsRUFBRSxTQUFTO2FBQ3JCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtNb2R1bGVXaXRoUHJvdmlkZXJzLCBOZ01vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge0NvbW1vbk1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7VG9wVG9vbGJhckNvbXBvbmVudH0gZnJvbSAnLi90b3AtdG9vbGJhci90b3AtdG9vbGJhci5jb21wb25lbnQnO1xuaW1wb3J0IHtTaWRlUGFuZWxDb21wb25lbnR9IGZyb20gJy4vc2lkZS1wYW5lbC9zaWRlLXBhbmVsLmNvbXBvbmVudCc7XG5pbXBvcnQge0J1dHRvbkNvbXBvbmVudH0gZnJvbSAnLi9idXR0b24vYnV0dG9uLmNvbXBvbmVudCc7XG5pbXBvcnQge0xvZ29Db21wb25lbnR9IGZyb20gJy4vbG9nby9sb2dvLmNvbXBvbmVudCc7XG5pbXBvcnQge1Rvb2x0aXBDb21wb25lbnR9IGZyb20gJy4vdG9vbHRpcC90b29sdGlwLmNvbXBvbmVudCc7XG5pbXBvcnQge0ZvbnRBd2Vzb21lTW9kdWxlfSBmcm9tICdAZm9ydGF3ZXNvbWUvYW5ndWxhci1mb250YXdlc29tZSc7XG5pbXBvcnQge2xpYnJhcnl9IGZyb20gJ0Bmb3J0YXdlc29tZS9mb250YXdlc29tZS1zdmctY29yZSc7XG5pbXBvcnQge2Zhc30gZnJvbSAnQGZvcnRhd2Vzb21lL2ZyZWUtc29saWQtc3ZnLWljb25zJztcbmltcG9ydCB7ZmFyfSBmcm9tICdAZm9ydGF3ZXNvbWUvZnJlZS1yZWd1bGFyLXN2Zy1pY29ucyc7XG5pbXBvcnQge0FwaSwgQ29uZmlnU2VydmljZSx9IGZyb20gXCIuL2NvbmZpZy5zZXJ2aWNlXCI7XG5pbXBvcnQge01vZGFsU2VydmljZX0gZnJvbSBcIi4vbW9kYWwuc2VydmljZVwiO1xuaW1wb3J0IHtNb2RhbENvbXBvbmVudH0gZnJvbSAnLi9tb2RhbC9tb2RhbC5jb21wb25lbnQnO1xuaW1wb3J0IHtCcm93c2VGaWxlc01vZGFsQ29tcG9uZW50fSBmcm9tICcuL2Jyb3dzZS1maWxlcy1tb2RhbC9icm93c2UtZmlsZXMtbW9kYWwuY29tcG9uZW50JztcbmltcG9ydCB7RmlsZU1vZGVsLCBGaWxlU2VydmljZSwgRmlsZVV0aWx9IGZyb20gXCIuL2ZpbGUuc2VydmljZVwiO1xuaW1wb3J0IHtEb2N1bWVudENvbXBvbmVudH0gZnJvbSAnLi9kb2N1bWVudC9kb2N1bWVudC5jb21wb25lbnQnO1xuaW1wb3J0IHtQYWdlQ29tcG9uZW50fSBmcm9tICcuL3BhZ2UvcGFnZS5jb21wb25lbnQnO1xuaW1wb3J0IHtIaWdobGlnaHRTZWFyY2hQaXBlLCBTYW5pdGl6ZUh0bWxQaXBlLCBTYW5pdGl6ZVJlc291cmNlSHRtbFBpcGUsIFNhbml0aXplU3R5bGVQaXBlfSBmcm9tIFwiLi9waXBlc1wiO1xuaW1wb3J0IHtVcGxvYWRGaWxlWm9uZUNvbXBvbmVudH0gZnJvbSAnLi91cGxvYWQtZmlsZS16b25lL3VwbG9hZC1maWxlLXpvbmUuY29tcG9uZW50JztcbmltcG9ydCB7VXBsb2FkRmlsZXNTZXJ2aWNlfSBmcm9tIFwiLi91cGxvYWQtZmlsZXMuc2VydmljZVwiO1xuaW1wb3J0IHtEbmREaXJlY3RpdmV9IGZyb20gJy4vZG5kLmRpcmVjdGl2ZSc7XG5pbXBvcnQge1Njcm9sbGFibGVEaXJlY3RpdmV9IGZyb20gJy4vc2Nyb2xsYWJsZS5kaXJlY3RpdmUnO1xuaW1wb3J0IHtOYXZpZ2F0ZVNlcnZpY2V9IGZyb20gXCIuL25hdmlnYXRlLnNlcnZpY2VcIjtcbmltcG9ydCB7UGFnZVByZWxvYWRTZXJ2aWNlfSBmcm9tIFwiLi9wYWdlLXByZWxvYWQuc2VydmljZVwiO1xuaW1wb3J0IHtab29tRGlyZWN0aXZlfSBmcm9tICcuL3pvb20uZGlyZWN0aXZlJztcbmltcG9ydCB7Wm9vbVNlcnZpY2V9IGZyb20gXCIuL3pvb20uc2VydmljZVwiO1xuaW1wb3J0IHtTZWxlY3RDb21wb25lbnR9IGZyb20gJy4vc2VsZWN0L3NlbGVjdC5jb21wb25lbnQnO1xuaW1wb3J0IHtEaXNhYmxlZEN1cnNvckRpcmVjdGl2ZX0gZnJvbSAnLi9kaXNhYmxlZC1jdXJzb3IuZGlyZWN0aXZlJztcbmltcG9ydCB7Um90YXRpb25EaXJlY3RpdmV9IGZyb20gJy4vcm90YXRpb24uZGlyZWN0aXZlJztcbmltcG9ydCB7SW5pdFN0YXRlQ29tcG9uZW50fSBmcm9tICcuL2luaXQtc3RhdGUvaW5pdC1zdGF0ZS5jb21wb25lbnQnO1xuaW1wb3J0IHtSZW5kZXJQcmludFNlcnZpY2V9IGZyb20gXCIuL3JlbmRlci1wcmludC5zZXJ2aWNlXCI7XG5pbXBvcnQge1JlbmRlclByaW50RGlyZWN0aXZlfSBmcm9tICcuL3JlbmRlci1wcmludC5kaXJlY3RpdmUnO1xuaW1wb3J0IHtFcnJvck1vZGFsQ29tcG9uZW50fSBmcm9tICcuL2Vycm9yLW1vZGFsL2Vycm9yLW1vZGFsLmNvbXBvbmVudCc7XG5pbXBvcnQge1Bhc3N3b3JkUmVxdWlyZWRDb21wb25lbnR9IGZyb20gJy4vcGFzc3dvcmQtcmVxdWlyZWQvcGFzc3dvcmQtcmVxdWlyZWQuY29tcG9uZW50JztcbmltcG9ydCB7RXhjZXB0aW9uTWVzc2FnZVNlcnZpY2V9IGZyb20gXCIuL2V4Y2VwdGlvbi1tZXNzYWdlLnNlcnZpY2VcIjtcbmltcG9ydCB7UGFzc3dvcmRTZXJ2aWNlfSBmcm9tIFwiLi9wYXNzd29yZC5zZXJ2aWNlXCI7XG5pbXBvcnQge0Vycm9ySW50ZXJjZXB0b3JTZXJ2aWNlfSBmcm9tIFwiLi9lcnJvci1pbnRlcmNlcHRvci5zZXJ2aWNlXCI7XG5pbXBvcnQge1NlYXJjaENvbXBvbmVudH0gZnJvbSAnLi9zZWFyY2gvc2VhcmNoLmNvbXBvbmVudCc7XG5pbXBvcnQge1NlYXJjaGFibGVEaXJlY3RpdmV9IGZyb20gJy4vc2VhcmNoYWJsZS5kaXJlY3RpdmUnO1xuaW1wb3J0IHtTZWFyY2hTZXJ2aWNlfSBmcm9tIFwiLi9zZWFyY2guc2VydmljZVwiO1xuaW1wb3J0IHtXaW5kb3dTZXJ2aWNlfSBmcm9tIFwiLi93aW5kb3cuc2VydmljZVwiO1xuaW1wb3J0IHtWaWV3cG9ydFNlcnZpY2V9IGZyb20gXCIuL3ZpZXdwb3J0LnNlcnZpY2VcIjtcbmltcG9ydCB7VGFiYmVkVG9vbGJhcnNDb21wb25lbnR9IGZyb20gJy4vdGFiYmVkLXRvb2xiYXJzL3RhYmJlZC10b29sYmFycy5jb21wb25lbnQnO1xuaW1wb3J0IHtUYWJDb21wb25lbnR9IGZyb20gXCIuL3RhYi90YWIuY29tcG9uZW50XCI7XG5pbXBvcnQge1RhYnNDb21wb25lbnR9IGZyb20gXCIuL3RhYnMvdGFicy5jb21wb25lbnRcIjtcbmltcG9ydCB7Rm9ybWF0dGluZ1NlcnZpY2V9IGZyb20gXCIuL2Zvcm1hdHRpbmcuc2VydmljZVwiO1xuaW1wb3J0IHtDb2xvclBpY2tlckNvbXBvbmVudH0gZnJvbSAnLi9jb2xvci1waWNrZXIvY29sb3ItcGlja2VyLmNvbXBvbmVudCc7XG5pbXBvcnQge0Zvcm1hdHRpbmdEaXJlY3RpdmV9IGZyb20gJy4vZm9ybWF0dGluZy5kaXJlY3RpdmUnO1xuaW1wb3J0IHtCYWNrRm9ybWF0dGluZ1NlcnZpY2V9IGZyb20gXCIuL2JhY2stZm9ybWF0dGluZy5zZXJ2aWNlXCI7XG5pbXBvcnQge09uQ2xvc2VTZXJ2aWNlfSBmcm9tIFwiLi9vbi1jbG9zZS5zZXJ2aWNlXCI7XG5pbXBvcnQge1N1Y2Nlc3NNb2RhbENvbXBvbmVudH0gZnJvbSAnLi9zdWNjZXNzLW1vZGFsL3N1Y2Nlc3MtbW9kYWwuY29tcG9uZW50JztcbmltcG9ydCB7RWRpdG9yRGlyZWN0aXZlfSBmcm9tICcuL2VkaXRvci5kaXJlY3RpdmUnO1xuaW1wb3J0IHtMb2FkaW5nTWFza0NvbXBvbmVudH0gZnJvbSAnLi9sb2FkaW5nLW1hc2svbG9hZGluZy1tYXNrLmNvbXBvbmVudCc7XG5pbXBvcnQge0xvYWRpbmdNYXNrU2VydmljZX0gZnJvbSAnLi9sb2FkaW5nLW1hc2suc2VydmljZSc7XG5pbXBvcnQge0xvYWRpbmdNYXNrSW50ZXJjZXB0b3JTZXJ2aWNlfSBmcm9tIFwiLi9sb2FkaW5nLW1hc2staW50ZXJjZXB0b3Iuc2VydmljZVwiO1xuaW1wb3J0IHtUYWJBY3RpdmF0b3JTZXJ2aWNlfSBmcm9tIFwiLi90YWItYWN0aXZhdG9yLnNlcnZpY2VcIjtcbmltcG9ydCB7IERyb3BEb3duQ29tcG9uZW50LERyb3BEb3duSXRlbUNvbXBvbmVudCxEcm9wRG93bkl0ZW1zQ29tcG9uZW50LERyb3BEb3duVG9nZ2xlQ29tcG9uZW50IH0gZnJvbSAnLi9kcm9wLWRvd24vZHJvcC1kb3duLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBDbGlja091dHNpZGVNb2R1bGUgfSBmcm9tICduZy1jbGljay1vdXRzaWRlJztcblxuY29uc3QgcHJvdmlkZXJzID0gW0NvbmZpZ1NlcnZpY2UsXG4gIEFwaSxcbiAgTW9kYWxTZXJ2aWNlLFxuICBGaWxlU2VydmljZSxcbiAgRmlsZU1vZGVsLFxuICBGaWxlVXRpbCxcbiAgU2FuaXRpemVIdG1sUGlwZSxcbiAgU2FuaXRpemVSZXNvdXJjZUh0bWxQaXBlLFxuICBTYW5pdGl6ZVN0eWxlUGlwZSxcbiAgSGlnaGxpZ2h0U2VhcmNoUGlwZSxcbiAgVXBsb2FkRmlsZXNTZXJ2aWNlLFxuICBSZW5kZXJQcmludFNlcnZpY2UsXG4gIE5hdmlnYXRlU2VydmljZSxcbiAgUGFnZVByZWxvYWRTZXJ2aWNlLFxuICBab29tU2VydmljZSxcbiAgRXhjZXB0aW9uTWVzc2FnZVNlcnZpY2UsXG4gIFBhc3N3b3JkU2VydmljZSxcbiAgRXJyb3JJbnRlcmNlcHRvclNlcnZpY2UsXG4gIFNlYXJjaFNlcnZpY2UsXG4gIFdpbmRvd1NlcnZpY2UsXG4gIFZpZXdwb3J0U2VydmljZSxcbiAgRm9ybWF0dGluZ1NlcnZpY2UsXG4gIEJhY2tGb3JtYXR0aW5nU2VydmljZSxcbiAgT25DbG9zZVNlcnZpY2UsXG4gIExvYWRpbmdNYXNrSW50ZXJjZXB0b3JTZXJ2aWNlLFxuICBMb2FkaW5nTWFza1NlcnZpY2UsXG4gIFRhYkFjdGl2YXRvclNlcnZpY2VdO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbQ29tbW9uTW9kdWxlLCBGb250QXdlc29tZU1vZHVsZSwgQ2xpY2tPdXRzaWRlTW9kdWxlXSxcbiAgZGVjbGFyYXRpb25zOiBbXG4gICAgVG9wVG9vbGJhckNvbXBvbmVudCxcbiAgICBTaWRlUGFuZWxDb21wb25lbnQsXG4gICAgQnV0dG9uQ29tcG9uZW50LFxuICAgIExvZ29Db21wb25lbnQsXG4gICAgVG9vbHRpcENvbXBvbmVudCxcbiAgICBNb2RhbENvbXBvbmVudCxcbiAgICBCcm93c2VGaWxlc01vZGFsQ29tcG9uZW50LFxuICAgIERvY3VtZW50Q29tcG9uZW50LFxuICAgIFBhZ2VDb21wb25lbnQsXG4gICAgU2FuaXRpemVIdG1sUGlwZSxcbiAgICBTYW5pdGl6ZVJlc291cmNlSHRtbFBpcGUsXG4gICAgU2FuaXRpemVTdHlsZVBpcGUsXG4gICAgSGlnaGxpZ2h0U2VhcmNoUGlwZSxcbiAgICBVcGxvYWRGaWxlWm9uZUNvbXBvbmVudCxcbiAgICBEbmREaXJlY3RpdmUsXG4gICAgU2Nyb2xsYWJsZURpcmVjdGl2ZSxcbiAgICBab29tRGlyZWN0aXZlLFxuICAgIFNlbGVjdENvbXBvbmVudCxcbiAgICBEaXNhYmxlZEN1cnNvckRpcmVjdGl2ZSxcbiAgICBSb3RhdGlvbkRpcmVjdGl2ZSxcbiAgICBJbml0U3RhdGVDb21wb25lbnQsXG4gICAgUmVuZGVyUHJpbnREaXJlY3RpdmUsXG4gICAgRXJyb3JNb2RhbENvbXBvbmVudCxcbiAgICBQYXNzd29yZFJlcXVpcmVkQ29tcG9uZW50LFxuICAgIFNlYXJjaENvbXBvbmVudCxcbiAgICBTZWFyY2hhYmxlRGlyZWN0aXZlLFxuICAgIFRhYmJlZFRvb2xiYXJzQ29tcG9uZW50LFxuICAgIFRhYkNvbXBvbmVudCxcbiAgICBUYWJzQ29tcG9uZW50LFxuICAgIENvbG9yUGlja2VyQ29tcG9uZW50LFxuICAgIEZvcm1hdHRpbmdEaXJlY3RpdmUsXG4gICAgU3VjY2Vzc01vZGFsQ29tcG9uZW50LFxuICAgIEVkaXRvckRpcmVjdGl2ZSxcbiAgICBMb2FkaW5nTWFza0NvbXBvbmVudCxcbiAgICBEcm9wRG93bkNvbXBvbmVudCxcbiAgICBEcm9wRG93bkl0ZW1Db21wb25lbnQsXG4gICAgRHJvcERvd25JdGVtc0NvbXBvbmVudCxcbiAgICBEcm9wRG93blRvZ2dsZUNvbXBvbmVudFxuICBdLFxuICBleHBvcnRzOiBbXG4gICAgVG9wVG9vbGJhckNvbXBvbmVudCxcbiAgICBTaWRlUGFuZWxDb21wb25lbnQsXG4gICAgQnV0dG9uQ29tcG9uZW50LFxuICAgIExvZ29Db21wb25lbnQsXG4gICAgVG9vbHRpcENvbXBvbmVudCxcbiAgICBNb2RhbENvbXBvbmVudCxcbiAgICBCcm93c2VGaWxlc01vZGFsQ29tcG9uZW50LFxuICAgIERvY3VtZW50Q29tcG9uZW50LFxuICAgIFBhZ2VDb21wb25lbnQsXG4gICAgU2FuaXRpemVSZXNvdXJjZUh0bWxQaXBlLFxuICAgIFNhbml0aXplU3R5bGVQaXBlLFxuICAgIEhpZ2hsaWdodFNlYXJjaFBpcGUsXG4gICAgU2FuaXRpemVIdG1sUGlwZSxcbiAgICBVcGxvYWRGaWxlWm9uZUNvbXBvbmVudCxcbiAgICBTY3JvbGxhYmxlRGlyZWN0aXZlLFxuICAgIFNlbGVjdENvbXBvbmVudCxcbiAgICBSb3RhdGlvbkRpcmVjdGl2ZSxcbiAgICBJbml0U3RhdGVDb21wb25lbnQsXG4gICAgUmVuZGVyUHJpbnREaXJlY3RpdmUsXG4gICAgRXJyb3JNb2RhbENvbXBvbmVudCxcbiAgICBQYXNzd29yZFJlcXVpcmVkQ29tcG9uZW50LFxuICAgIFNlYXJjaENvbXBvbmVudCxcbiAgICBTZWFyY2hhYmxlRGlyZWN0aXZlLFxuICAgIFRhYmJlZFRvb2xiYXJzQ29tcG9uZW50LFxuICAgIFRhYkNvbXBvbmVudCxcbiAgICBUYWJzQ29tcG9uZW50LFxuICAgIENvbG9yUGlja2VyQ29tcG9uZW50LFxuICAgIEZvcm1hdHRpbmdEaXJlY3RpdmUsXG4gICAgU3VjY2Vzc01vZGFsQ29tcG9uZW50LFxuICAgIExvYWRpbmdNYXNrQ29tcG9uZW50LFxuICAgIERuZERpcmVjdGl2ZSxcbiAgICBEcm9wRG93bkNvbXBvbmVudCxcbiAgICBEcm9wRG93bkl0ZW1Db21wb25lbnQsXG4gICAgRHJvcERvd25JdGVtc0NvbXBvbmVudCxcbiAgICBEcm9wRG93blRvZ2dsZUNvbXBvbmVudFxuICBdLFxuICBwcm92aWRlcnM6IHByb3ZpZGVyc1xufSlcbmV4cG9ydCBjbGFzcyBDb21tb25Db21wb25lbnRzTW9kdWxlIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgbGlicmFyeS5hZGQoZmFzLCBmYXIpO1xuICB9XG59XG4iXX0=