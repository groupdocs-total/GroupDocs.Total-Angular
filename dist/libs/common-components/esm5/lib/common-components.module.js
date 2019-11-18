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
import { FileModel, FileService, FileUtil, Utils } from "./file.service";
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
import { LeftSideBarComponent } from './left-side-bar/left-side-bar.component';
import { TooltipDirective } from './tooltip.directive';
import { AddDynamicComponentService } from "./add-dynamic-component.service";
import { HostDynamicDirective } from './host-dynamic.directive';
import { HostingDynamicComponentService } from "./hosting-dynamic-component.service";
import { ResizingComponent } from './resizing/resizing.component';
/** @type {?} */
var providers = [ConfigService,
    Api,
    ModalService,
    FileService,
    FileModel,
    FileUtil,
    Utils,
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
    TabActivatorService,
    AddDynamicComponentService,
    HostingDynamicComponentService];
var CommonComponentsModule = /** @class */ (function () {
    function CommonComponentsModule() {
        library.add(fas, far);
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
                        DropDownToggleComponent,
                        LeftSideBarComponent,
                        TooltipDirective,
                        HostDynamicDirective,
                        ResizingComponent
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
                        DropDownToggleComponent,
                        ZoomDirective,
                        DropDownToggleComponent,
                        LeftSideBarComponent,
                        TooltipDirective,
                        HostDynamicDirective,
                        ResizingComponent
                    ],
                    providers: providers
                },] }
    ];
    /** @nocollapse */
    CommonComponentsModule.ctorParameters = function () { return []; };
    return CommonComponentsModule;
}());
export { CommonComponentsModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tbW9uLWNvbXBvbmVudHMubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdyb3VwZG9jcy5leGFtcGxlcy5hbmd1bGFyL2NvbW1vbi1jb21wb25lbnRzLyIsInNvdXJjZXMiOlsibGliL2NvbW1vbi1jb21wb25lbnRzLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFDLFFBQVEsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUN2QyxPQUFPLEVBQUMsWUFBWSxFQUFDLE1BQU0saUJBQWlCLENBQUM7QUFDN0MsT0FBTyxFQUFDLG1CQUFtQixFQUFDLE1BQU0scUNBQXFDLENBQUM7QUFDeEUsT0FBTyxFQUFDLGtCQUFrQixFQUFDLE1BQU0sbUNBQW1DLENBQUM7QUFDckUsT0FBTyxFQUFDLGVBQWUsRUFBQyxNQUFNLDJCQUEyQixDQUFDO0FBQzFELE9BQU8sRUFBQyxhQUFhLEVBQUMsTUFBTSx1QkFBdUIsQ0FBQztBQUNwRCxPQUFPLEVBQUMsZ0JBQWdCLEVBQUMsTUFBTSw2QkFBNkIsQ0FBQztBQUM3RCxPQUFPLEVBQUMsaUJBQWlCLEVBQUMsTUFBTSxrQ0FBa0MsQ0FBQztBQUNuRSxPQUFPLEVBQUMsT0FBTyxFQUFDLE1BQU0sbUNBQW1DLENBQUM7QUFDMUQsT0FBTyxFQUFDLEdBQUcsRUFBQyxNQUFNLG1DQUFtQyxDQUFDO0FBQ3RELE9BQU8sRUFBQyxHQUFHLEVBQUMsTUFBTSxxQ0FBcUMsQ0FBQztBQUN4RCxPQUFPLEVBQUMsR0FBRyxFQUFFLGFBQWEsR0FBRSxNQUFNLGtCQUFrQixDQUFDO0FBQ3JELE9BQU8sRUFBQyxZQUFZLEVBQUMsTUFBTSxpQkFBaUIsQ0FBQztBQUM3QyxPQUFPLEVBQUMsY0FBYyxFQUFDLE1BQU0seUJBQXlCLENBQUM7QUFDdkQsT0FBTyxFQUFDLHlCQUF5QixFQUFDLE1BQU0sbURBQW1ELENBQUM7QUFDNUYsT0FBTyxFQUFDLFNBQVMsRUFBRSxXQUFXLEVBQUUsUUFBUSxFQUFFLEtB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QkFBaUI7d0JBQ2pCLGtCQUFrQjt3QkFDbEIsb0JBQW9CO3dCQUNwQixtQkFBbUI7d0JBQ25CLHlCQUF5Qjt3QkFDekIsZUFBZTt3QkFDZixtQkFBbUI7d0JBQ25CLHVCQUF1Qjt3QkFDdkIsWUFBWTt3QkFDWixhQUFhO3dCQUNiLG9CQUFvQjt3QkFDcEIsbUJBQW1CO3dCQUNuQixxQkFBcUI7d0JBQ3JCLG9CQUFvQjt3QkFDcEIsWUFBWTt3QkFDWixpQkFBaUI7d0JBQ2pCLHFCQUFxQjt3QkFDckIsc0JBQXNCO3dCQUN0Qix1QkFBdUI7d0JBQ3ZCLGFBQWE7d0JBQ2IsdUJBQXVCO3dCQUN2QixvQkFBb0I7d0JBQ3BCLGdCQUFnQjt3QkFDaEIsb0JBQW9CO3dCQUNwQixpQkFBaUI7cUJBQ2xCO29CQUNELFNBQVMsRUFBRSxTQUFTO2lCQUNyQjs7OztJQUtELDZCQUFDO0NBQUEsQUEvRkQsSUErRkM7U0FKWSxzQkFBc0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge05nTW9kdWxlfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7Q29tbW9uTW9kdWxlfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHtUb3BUb29sYmFyQ29tcG9uZW50fSBmcm9tICcuL3RvcC10b29sYmFyL3RvcC10b29sYmFyLmNvbXBvbmVudCc7XG5pbXBvcnQge1NpZGVQYW5lbENvbXBvbmVudH0gZnJvbSAnLi9zaWRlLXBhbmVsL3NpZGUtcGFuZWwuY29tcG9uZW50JztcbmltcG9ydCB7QnV0dG9uQ29tcG9uZW50fSBmcm9tICcuL2J1dHRvbi9idXR0b24uY29tcG9uZW50JztcbmltcG9ydCB7TG9nb0NvbXBvbmVudH0gZnJvbSAnLi9sb2dvL2xvZ28uY29tcG9uZW50JztcbmltcG9ydCB7VG9vbHRpcENvbXBvbmVudH0gZnJvbSAnLi90b29sdGlwL3Rvb2x0aXAuY29tcG9uZW50JztcbmltcG9ydCB7Rm9udEF3ZXNvbWVNb2R1bGV9IGZyb20gJ0Bmb3J0YXdlc29tZS9hbmd1bGFyLWZvbnRhd2Vzb21lJztcbmltcG9ydCB7bGlicmFyeX0gZnJvbSAnQGZvcnRhd2Vzb21lL2ZvbnRhd2Vzb21lLXN2Zy1jb3JlJztcbmltcG9ydCB7ZmFzfSBmcm9tICdAZm9ydGF3ZXNvbWUvZnJlZS1zb2xpZC1zdmctaWNvbnMnO1xuaW1wb3J0IHtmYXJ9IGZyb20gJ0Bmb3J0YXdlc29tZS9mcmVlLXJlZ3VsYXItc3ZnLWljb25zJztcbmltcG9ydCB7QXBpLCBDb25maWdTZXJ2aWNlLH0gZnJvbSBcIi4vY29uZmlnLnNlcnZpY2VcIjtcbmltcG9ydCB7TW9kYWxTZXJ2aWNlfSBmcm9tIFwiLi9tb2RhbC5zZXJ2aWNlXCI7XG5pbXBvcnQge01vZGFsQ29tcG9uZW50fSBmcm9tICcuL21vZGFsL21vZGFsLmNvbXBvbmVudCc7XG5pbXBvcnQge0Jyb3dzZUZpbGVzTW9kYWxDb21wb25lbnR9IGZyb20gJy4vYnJvd3NlLWZpbGVzLW1vZGFsL2Jyb3dzZS1maWxlcy1tb2RhbC5jb21wb25lbnQnO1xuaW1wb3J0IHtGaWxlTW9kZWwsIEZpbGVTZXJ2aWNlLCBGaWxlVXRpbCwgVXRpbHN9IGZyb20gXCIuL2ZpbGUuc2VydmljZVwiO1xuaW1wb3J0IHtEb2N1bWVudENvbXBvbmVudH0gZnJvbSAnLi9kb2N1bWVudC9kb2N1bWVudC5jb21wb25lbnQnO1xuaW1wb3J0IHtQYWdlQ29tcG9uZW50fSBmcm9tICcuL3BhZ2UvcGFnZS5jb21wb25lbnQnO1xuaW1wb3J0IHtIaWdobGlnaHRTZWFyY2hQaXBlLCBTYW5pdGl6ZUh0bWxQaXBlLCBTYW5pdGl6ZVJlc291cmNlSHRtbFBpcGUsIFNhbml0aXplU3R5bGVQaXBlfSBmcm9tIFwiLi9waXBlc1wiO1xuaW1wb3J0IHtVcGxvYWRGaWxlWm9uZUNvbXBvbmVudH0gZnJvbSAnLi91cGxvYWQtZmlsZS16b25lL3VwbG9hZC1maWxlLXpvbmUuY29tcG9uZW50JztcbmltcG9ydCB7VXBsb2FkRmlsZXNTZXJ2aWNlfSBmcm9tIFwiLi91cGxvYWQtZmlsZXMuc2VydmljZVwiO1xuaW1wb3J0IHtEbmREaXJlY3RpdmV9IGZyb20gJy4vZG5kLmRpcmVjdGl2ZSc7XG5pbXBvcnQge1Njcm9sbGFibGVEaXJlY3RpdmV9IGZyb20gJy4vc2Nyb2xsYWJsZS5kaXJlY3RpdmUnO1xuaW1wb3J0IHtOYXZpZ2F0ZVNlcnZpY2V9IGZyb20gXCIuL25hdmlnYXRlLnNlcnZpY2VcIjtcbmltcG9ydCB7UGFnZVByZWxvYWRTZXJ2aWNlfSBmcm9tIFwiLi9wYWdlLXByZWxvYWQuc2VydmljZVwiO1xuaW1wb3J0IHtab29tRGlyZWN0aXZlfSBmcm9tICcuL3pvb20uZGlyZWN0aXZlJztcbmltcG9ydCB7Wm9vbVNlcnZpY2V9IGZyb20gXCIuL3pvb20uc2VydmljZVwiO1xuaW1wb3J0IHtTZWxlY3RDb21wb25lbnR9IGZyb20gJy4vc2VsZWN0L3NlbGVjdC5jb21wb25lbnQnO1xuaW1wb3J0IHtEaXNhYmxlZEN1cnNvckRpcmVjdGl2ZX0gZnJvbSAnLi9kaXNhYmxlZC1jdXJzb3IuZGlyZWN0aXZlJztcbmltcG9ydCB7Um90YXRpb25EaXJlY3RpdmV9IGZyb20gJy4vcm90YXRpb24uZGlyZWN0aXZlJztcbmltcG9ydCB7SW5pdFN0YXRlQ29tcG9uZW50fSBmcm9tICcuL2luaXQtc3RhdGUvaW5pdC1zdGF0ZS5jb21wb25lbnQnO1xuaW1wb3J0IHtSZW5kZXJQcmludFNlcnZpY2V9IGZyb20gXCIuL3JlbmRlci1wcmludC5zZXJ2aWNlXCI7XG5pbXBvcnQge1JlbmRlclByaW50RGlyZWN0aXZlfSBmcm9tICcuL3JlbmRlci1wcmludC5kaXJlY3RpdmUnO1xuaW1wb3J0IHtFcnJvck1vZGFsQ29tcG9uZW50fSBmcm9tICcuL2Vycm9yLW1vZGFsL2Vycm9yLW1vZGFsLmNvbXBvbmVudCc7XG5pbXBvcnQge1Bhc3N3b3JkUmVxdWlyZWRDb21wb25lbnR9IGZyb20gJy4vcGFzc3dvcmQtcmVxdWlyZWQvcGFzc3dvcmQtcmVxdWlyZWQuY29tcG9uZW50JztcbmltcG9ydCB7RXhjZXB0aW9uTWVzc2FnZVNlcnZpY2V9IGZyb20gXCIuL2V4Y2VwdGlvbi1tZXNzYWdlLnNlcnZpY2VcIjtcbmltcG9ydCB7UGFzc3dvcmRTZXJ2aWNlfSBmcm9tIFwiLi9wYXNzd29yZC5zZXJ2aWNlXCI7XG5pbXBvcnQge0Vycm9ySW50ZXJjZXB0b3JTZXJ2aWNlfSBmcm9tIFwiLi9lcnJvci1pbnRlcmNlcHRvci5zZXJ2aWNlXCI7XG5pbXBvcnQge1NlYXJjaENvbXBvbmVudH0gZnJvbSAnLi9zZWFyY2gvc2VhcmNoLmNvbXBvbmVudCc7XG5pbXBvcnQge1NlYXJjaGFibGVEaXJlY3RpdmV9IGZyb20gJy4vc2VhcmNoYWJsZS5kaXJlY3RpdmUnO1xuaW1wb3J0IHtTZWFyY2hTZXJ2aWNlfSBmcm9tIFwiLi9zZWFyY2guc2VydmljZVwiO1xuaW1wb3J0IHtXaW5kb3dTZXJ2aWNlfSBmcm9tIFwiLi93aW5kb3cuc2VydmljZVwiO1xuaW1wb3J0IHtWaWV3cG9ydFNlcnZpY2V9IGZyb20gXCIuL3ZpZXdwb3J0LnNlcnZpY2VcIjtcbmltcG9ydCB7VGFiYmVkVG9vbGJhcnNDb21wb25lbnR9IGZyb20gJy4vdGFiYmVkLXRvb2xiYXJzL3RhYmJlZC10b29sYmFycy5jb21wb25lbnQnO1xuaW1wb3J0IHtUYWJDb21wb25lbnR9IGZyb20gXCIuL3RhYi90YWIuY29tcG9uZW50XCI7XG5pbXBvcnQge1RhYnNDb21wb25lbnR9IGZyb20gXCIuL3RhYnMvdGFicy5jb21wb25lbnRcIjtcbmltcG9ydCB7Rm9ybWF0dGluZ1NlcnZpY2V9IGZyb20gXCIuL2Zvcm1hdHRpbmcuc2VydmljZVwiO1xuaW1wb3J0IHtDb2xvclBpY2tlckNvbXBvbmVudH0gZnJvbSAnLi9jb2xvci1waWNrZXIvY29sb3ItcGlja2VyLmNvbXBvbmVudCc7XG5pbXBvcnQge0Zvcm1hdHRpbmdEaXJlY3RpdmV9IGZyb20gJy4vZm9ybWF0dGluZy5kaXJlY3RpdmUnO1xuaW1wb3J0IHtCYWNrRm9ybWF0dGluZ1NlcnZpY2V9IGZyb20gXCIuL2JhY2stZm9ybWF0dGluZy5zZXJ2aWNlXCI7XG5pbXBvcnQge09uQ2xvc2VTZXJ2aWNlfSBmcm9tIFwiLi9vbi1jbG9zZS5zZXJ2aWNlXCI7XG5pbXBvcnQge1N1Y2Nlc3NNb2RhbENvbXBvbmVudH0gZnJvbSAnLi9zdWNjZXNzLW1vZGFsL3N1Y2Nlc3MtbW9kYWwuY29tcG9uZW50JztcbmltcG9ydCB7RWRpdG9yRGlyZWN0aXZlfSBmcm9tICcuL2VkaXRvci5kaXJlY3RpdmUnO1xuaW1wb3J0IHtMb2FkaW5nTWFza0NvbXBvbmVudH0gZnJvbSAnLi9sb2FkaW5nLW1hc2svbG9hZGluZy1tYXNrLmNvbXBvbmVudCc7XG5pbXBvcnQge0xvYWRpbmdNYXNrU2VydmljZX0gZnJvbSAnLi9sb2FkaW5nLW1hc2suc2VydmljZSc7XG5pbXBvcnQge0xvYWRpbmdNYXNrSW50ZXJjZXB0b3JTZXJ2aWNlfSBmcm9tIFwiLi9sb2FkaW5nLW1hc2staW50ZXJjZXB0b3Iuc2VydmljZVwiO1xuaW1wb3J0IHtUYWJBY3RpdmF0b3JTZXJ2aWNlfSBmcm9tIFwiLi90YWItYWN0aXZhdG9yLnNlcnZpY2VcIjtcbmltcG9ydCB7XG4gIERyb3BEb3duQ29tcG9uZW50LFxuICBEcm9wRG93bkl0ZW1Db21wb25lbnQsXG4gIERyb3BEb3duSXRlbXNDb21wb25lbnQsXG4gIERyb3BEb3duVG9nZ2xlQ29tcG9uZW50XG59IGZyb20gJy4vZHJvcC1kb3duL2Ryb3AtZG93bi5jb21wb25lbnQnO1xuaW1wb3J0IHtDbGlja091dHNpZGVNb2R1bGV9IGZyb20gJ25nLWNsaWNrLW91dHNpZGUnO1xuaW1wb3J0IHtMZWZ0U2lkZUJhckNvbXBvbmVudH0gZnJvbSAnLi9sZWZ0LXNpZGUtYmFyL2xlZnQtc2lkZS1iYXIuY29tcG9uZW50JztcbmltcG9ydCB7VG9vbHRpcERpcmVjdGl2ZX0gZnJvbSAnLi90b29sdGlwLmRpcmVjdGl2ZSc7XG5pbXBvcnQge0FkZER5bmFtaWNDb21wb25lbnRTZXJ2aWNlfSBmcm9tIFwiLi9hZGQtZHluYW1pYy1jb21wb25lbnQuc2VydmljZVwiO1xuaW1wb3J0IHtIb3N0RHluYW1pY0RpcmVjdGl2ZX0gZnJvbSAnLi9ob3N0LWR5bmFtaWMuZGlyZWN0aXZlJztcbmltcG9ydCB7SG9zdGluZ0R5bmFtaWNDb21wb25lbnRTZXJ2aWNlfSBmcm9tIFwiLi9ob3N0aW5nLWR5bmFtaWMtY29tcG9uZW50LnNlcnZpY2VcIjtcbmltcG9ydCB7UmVzaXppbmdDb21wb25lbnR9IGZyb20gJy4vcmVzaXppbmcvcmVzaXppbmcuY29tcG9uZW50JztcblxuY29uc3QgcHJvdmlkZXJzID0gW0NvbmZpZ1NlcnZpY2UsXG4gIEFwaSxcbiAgTW9kYWxTZXJ2aWNlLFxuICBGaWxlU2VydmljZSxcbiAgRmlsZU1vZGVsLFxuICBGaWxlVXRpbCxcbiAgVXRpbHMsXG4gIFNhbml0aXplSHRtbFBpcGUsXG4gIFNhbml0aXplUmVzb3VyY2VIdG1sUGlwZSxcbiAgU2FuaXRpemVTdHlsZVBpcGUsXG4gIEhpZ2hsaWdodFNlYXJjaFBpcGUsXG4gIFVwbG9hZEZpbGVzU2VydmljZSxcbiAgUmVuZGVyUHJpbnRTZXJ2aWNlLFxuICBOYXZpZ2F0ZVNlcnZpY2UsXG4gIFBhZ2VQcmVsb2FkU2VydmljZSxcbiAgWm9vbVNlcnZpY2UsXG4gIEV4Y2VwdGlvbk1lc3NhZ2VTZXJ2aWNlLFxuICBQYXNzd29yZFNlcnZpY2UsXG4gIEVycm9ySW50ZXJjZXB0b3JTZXJ2aWNlLFxuICBTZWFyY2hTZXJ2aWNlLFxuICBXaW5kb3dTZXJ2aWNlLFxuICBWaWV3cG9ydFNlcnZpY2UsXG4gIEZvcm1hdHRpbmdTZXJ2aWNlLFxuICBCYWNrRm9ybWF0dGluZ1NlcnZpY2UsXG4gIE9uQ2xvc2VTZXJ2aWNlLFxuICBMb2FkaW5nTWFza0ludGVyY2VwdG9yU2VydmljZSxcbiAgTG9hZGluZ01hc2tTZXJ2aWNlLFxuICBUYWJBY3RpdmF0b3JTZXJ2aWNlLFxuICBBZGREeW5hbWljQ29tcG9uZW50U2VydmljZSxcbiAgSG9zdGluZ0R5bmFtaWNDb21wb25lbnRTZXJ2aWNlXTtcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW0NvbW1vbk1vZHVsZSwgRm9udEF3ZXNvbWVNb2R1bGUsIENsaWNrT3V0c2lkZU1vZHVsZV0sXG4gIGRlY2xhcmF0aW9uczogW1xuICAgIFRvcFRvb2xiYXJDb21wb25lbnQsXG4gICAgU2lkZVBhbmVsQ29tcG9uZW50LFxuICAgIEJ1dHRvbkNvbXBvbmVudCxcbiAgICBMb2dvQ29tcG9uZW50LFxuICAgIFRvb2x0aXBDb21wb25lbnQsXG4gICAgTW9kYWxDb21wb25lbnQsXG4gICAgQnJvd3NlRmlsZXNNb2RhbENvbXBvbmVudCxcbiAgICBEb2N1bWVudENvbXBvbmVudCxcbiAgICBQYWdlQ29tcG9uZW50LFxuICAgIFNhbml0aXplSHRtbFBpcGUsXG4gICAgU2FuaXRpemVSZXNvdXJjZUh0bWxQaXBlLFxuICAgIFNhbml0aXplU3R5bGVQaXBlLFxuICAgIEhpZ2hsaWdodFNlYXJjaFBpcGUsXG4gICAgVXBsb2FkRmlsZVpvbmVDb21wb25lbnQsXG4gICAgRG5kRGlyZWN0aXZlLFxuICAgIFNjcm9sbGFibGVEaXJlY3RpdmUsXG4gICAgWm9vbURpcmVjdGl2ZSxcbiAgICBTZWxlY3RDb21wb25lbnQsXG4gICAgRGlzYWJsZWRDdXJzb3JEaXJlY3RpdmUsXG4gICAgUm90YXRpb25EaXJlY3RpdmUsXG4gICAgSW5pdFN0YXRlQ29tcG9uZW50LFxuICAgIFJlbmRlclByaW50RGlyZWN0aXZlLFxuICAgIEVycm9yTW9kYWxDb21wb25lbnQsXG4gICAgUGFzc3dvcmRSZXF1aXJlZENvbXBvbmVudCxcbiAgICBTZWFyY2hDb21wb25lbnQsXG4gICAgU2VhcmNoYWJsZURpcmVjdGl2ZSxcbiAgICBUYWJiZWRUb29sYmFyc0NvbXBvbmVudCxcbiAgICBUYWJDb21wb25lbnQsXG4gICAgVGFic0NvbXBvbmVudCxcbiAgICBDb2xvclBpY2tlckNvbXBvbmVudCxcbiAgICBGb3JtYXR0aW5nRGlyZWN0aXZlLFxuICAgIFN1Y2Nlc3NNb2RhbENvbXBvbmVudCxcbiAgICBFZGl0b3JEaXJlY3RpdmUsXG4gICAgTG9hZGluZ01hc2tDb21wb25lbnQsXG4gICAgRHJvcERvd25Db21wb25lbnQsXG4gICAgRHJvcERvd25JdGVtQ29tcG9uZW50LFxuICAgIERyb3BEb3duSXRlbXNDb21wb25lbnQsXG4gICAgRHJvcERvd25Ub2dnbGVDb21wb25lbnQsXG4gICAgTGVmdFNpZGVCYXJDb21wb25lbnQsXG4gICAgVG9vbHRpcERpcmVjdGl2ZSxcbiAgICBIb3N0RHluYW1pY0RpcmVjdGl2ZSxcbiAgICBSZXNpemluZ0NvbXBvbmVudFxuICBdLFxuICBleHBvcnRzOiBbXG4gICAgVG9wVG9vbGJhckNvbXBvbmVudCxcbiAgICBTaWRlUGFuZWxDb21wb25lbnQsXG4gICAgQnV0dG9uQ29tcG9uZW50LFxuICAgIExvZ29Db21wb25lbnQsXG4gICAgVG9vbHRpcENvbXBvbmVudCxcbiAgICBNb2RhbENvbXBvbmVudCxcbiAgICBCcm93c2VGaWxlc01vZGFsQ29tcG9uZW50LFxuICAgIERvY3VtZW50Q29tcG9uZW50LFxuICAgIFBhZ2VDb21wb25lbnQsXG4gICAgU2FuaXRpemVSZXNvdXJjZUh0bWxQaXBlLFxuICAgIFNhbml0aXplU3R5bGVQaXBlLFxuICAgIEhpZ2hsaWdodFNlYXJjaFBpcGUsXG4gICAgU2FuaXRpemVIdG1sUGlwZSxcbiAgICBVcGxvYWRGaWxlWm9uZUNvbXBvbmVudCxcbiAgICBTY3JvbGxhYmxlRGlyZWN0aXZlLFxuICAgIFNlbGVjdENvbXBvbmVudCxcbiAgICBSb3RhdGlvbkRpcmVjdGl2ZSxcbiAgICBJbml0U3RhdGVDb21wb25lbnQsXG4gICAgUmVuZGVyUHJpbnREaXJlY3RpdmUsXG4gICAgRXJyb3JNb2RhbENvbXBvbmVudCxcbiAgICBQYXNzd29yZFJlcXVpcmVkQ29tcG9uZW50LFxuICAgIFNlYXJjaENvbXBvbmVudCxcbiAgICBTZWFyY2hhYmxlRGlyZWN0aXZlLFxuICAgIFRhYmJlZFRvb2xiYXJzQ29tcG9uZW50LFxuICAgIFRhYkNvbXBvbmVudCxcbiAgICBUYWJzQ29tcG9uZW50LFxuICAgIENvbG9yUGlja2VyQ29tcG9uZW50LFxuICAgIEZvcm1hdHRpbmdEaXJlY3RpdmUsXG4gICAgU3VjY2Vzc01vZGFsQ29tcG9uZW50LFxuICAgIExvYWRpbmdNYXNrQ29tcG9uZW50LFxuICAgIERuZERpcmVjdGl2ZSxcbiAgICBEcm9wRG93bkNvbXBvbmVudCxcbiAgICBEcm9wRG93bkl0ZW1Db21wb25lbnQsXG4gICAgRHJvcERvd25JdGVtc0NvbXBvbmVudCxcbiAgICBEcm9wRG93blRvZ2dsZUNvbXBvbmVudCxcbiAgICBab29tRGlyZWN0aXZlLFxuICAgIERyb3BEb3duVG9nZ2xlQ29tcG9uZW50LFxuICAgIExlZnRTaWRlQmFyQ29tcG9uZW50LFxuICAgIFRvb2x0aXBEaXJlY3RpdmUsXG4gICAgSG9zdER5bmFtaWNEaXJlY3RpdmUsXG4gICAgUmVzaXppbmdDb21wb25lbnRcbiAgXSxcbiAgcHJvdmlkZXJzOiBwcm92aWRlcnNcbn0pXG5leHBvcnQgY2xhc3MgQ29tbW9uQ29tcG9uZW50c01vZHVsZSB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIGxpYnJhcnkuYWRkKGZhcywgZmFyKTtcbiAgfVxufVxuIl19