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
import { FileModel, FilePropertyModel, FileService, FileUtil, Utils } from "./file.service";
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
    FilePropertyModel,
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tbW9uLWNvbXBvbmVudHMubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdyb3VwZG9jcy5leGFtcGxlcy5hbmd1bGFyL2NvbW1vbi1jb21wb25lbnRzLyIsInNvdXJjZXMiOlsibGliL2NvbW1vbi1jb21wb25lbnRzLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFDLFFBQVEsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUN2QyxPQUFPLEVBQUMsWUFBWSxFQUFDLE1BQU0saUJBQWlCLENBQUM7QUFDN0MsT0FBTyxFQUFDLG1CQUFtQixFQUFDLE1BQU0scUNBQXFDLENBQUM7QUFDeEUsT0FBTyxFQUFDLGtCQUFrQixFQUFDLE1BQU0sbUNBQW1DLENBQUM7QUFDckUsT0FBTyxFQUFDLGVBQWUsRUFBQyxNQUFNLDJCQUEyQixDQUFDO0FBQzFELE9BQU8sRUFBQyxhQUFhLEVBQUMsTUFBTSx1QkFBdUIsQ0FBQztBQUNwRCxPQUFPLEVBQUMsZ0JBQWdCLEVBQUMsTUFBTSw2QkFBNkIsQ0FBQztBQUM3RCxPQUFPLEVBQUMsaUJBQWlCLEVBQUMsTUFBTSxrQ0FBa0MsQ0FBQztBQUNuRSxPQUFPLEVBQUMsT0FBTyxFQUFDLE1BQU0sbUNBQW1DLENBQUM7QUFDMUQsT0FBTyxFQUFDLEdBQUcsRUFBQyxNQUFNLG1DQUFtQyxDQUFDO0FBQ3RELE9BQU8sRUFBQyxHQUFHLEVBQUMsTUFBTSxxQ0FBcUMsQ0FBQztBQUN4RCxPQUFPLEVBQUMsR0FBRyxFQUFFLGFBQWEsR0FBRSxNQUFNLGtCQUFrQixDQUFDO0FBQ3JELE9BQU8sRUFBQyxZQUFZLEVBQUMsTUFBTSxpQkFBaUIsQ0FBQztBQUM3QyxPQUFPLEVBQUMsY0FBYyxFQUFDLE1BQU0seUJBQXlCLENBQUM7QUFDdkQsT0FBTyxFQUFDLHlCQUF5QixFQUFDLE1BQU0sbURBQW1ELENBQUM7QUFDNUYsT0FBTyxFQUFDLFNBQVMsRUFBRSxpQkFBaUIsRUFBd0IsV0FBVyxFQUFF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bUJBQW1CO3dCQUNuQixlQUFlO3dCQUNmLGlCQUFpQjt3QkFDakIsa0JBQWtCO3dCQUNsQixvQkFBb0I7d0JBQ3BCLG1CQUFtQjt3QkFDbkIseUJBQXlCO3dCQUN6QixlQUFlO3dCQUNmLG1CQUFtQjt3QkFDbkIsdUJBQXVCO3dCQUN2QixZQUFZO3dCQUNaLGFBQWE7d0JBQ2Isb0JBQW9CO3dCQUNwQixtQkFBbUI7d0JBQ25CLHFCQUFxQjt3QkFDckIsb0JBQW9CO3dCQUNwQixZQUFZO3dCQUNaLGlCQUFpQjt3QkFDakIscUJBQXFCO3dCQUNyQixzQkFBc0I7d0JBQ3RCLHVCQUF1Qjt3QkFDdkIsYUFBYTt3QkFDYix1QkFBdUI7d0JBQ3ZCLG9CQUFvQjt3QkFDcEIsZ0JBQWdCO3dCQUNoQixvQkFBb0I7d0JBQ3BCLGlCQUFpQjtxQkFDbEI7b0JBQ0QsU0FBUyxFQUFFLFNBQVM7aUJBQ3JCOzs7O0lBS0QsNkJBQUM7Q0FBQSxBQS9GRCxJQStGQztTQUpZLHNCQUFzQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7TmdNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQge0NvbW1vbk1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcclxuaW1wb3J0IHtUb3BUb29sYmFyQ29tcG9uZW50fSBmcm9tICcuL3RvcC10b29sYmFyL3RvcC10b29sYmFyLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7U2lkZVBhbmVsQ29tcG9uZW50fSBmcm9tICcuL3NpZGUtcGFuZWwvc2lkZS1wYW5lbC5jb21wb25lbnQnO1xyXG5pbXBvcnQge0J1dHRvbkNvbXBvbmVudH0gZnJvbSAnLi9idXR0b24vYnV0dG9uLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7TG9nb0NvbXBvbmVudH0gZnJvbSAnLi9sb2dvL2xvZ28uY29tcG9uZW50JztcclxuaW1wb3J0IHtUb29sdGlwQ29tcG9uZW50fSBmcm9tICcuL3Rvb2x0aXAvdG9vbHRpcC5jb21wb25lbnQnO1xyXG5pbXBvcnQge0ZvbnRBd2Vzb21lTW9kdWxlfSBmcm9tICdAZm9ydGF3ZXNvbWUvYW5ndWxhci1mb250YXdlc29tZSc7XHJcbmltcG9ydCB7bGlicmFyeX0gZnJvbSAnQGZvcnRhd2Vzb21lL2ZvbnRhd2Vzb21lLXN2Zy1jb3JlJztcclxuaW1wb3J0IHtmYXN9IGZyb20gJ0Bmb3J0YXdlc29tZS9mcmVlLXNvbGlkLXN2Zy1pY29ucyc7XHJcbmltcG9ydCB7ZmFyfSBmcm9tICdAZm9ydGF3ZXNvbWUvZnJlZS1yZWd1bGFyLXN2Zy1pY29ucyc7XHJcbmltcG9ydCB7QXBpLCBDb25maWdTZXJ2aWNlLH0gZnJvbSBcIi4vY29uZmlnLnNlcnZpY2VcIjtcclxuaW1wb3J0IHtNb2RhbFNlcnZpY2V9IGZyb20gXCIuL21vZGFsLnNlcnZpY2VcIjtcclxuaW1wb3J0IHtNb2RhbENvbXBvbmVudH0gZnJvbSAnLi9tb2RhbC9tb2RhbC5jb21wb25lbnQnO1xyXG5pbXBvcnQge0Jyb3dzZUZpbGVzTW9kYWxDb21wb25lbnR9IGZyb20gJy4vYnJvd3NlLWZpbGVzLW1vZGFsL2Jyb3dzZS1maWxlcy1tb2RhbC5jb21wb25lbnQnO1xyXG5pbXBvcnQge0ZpbGVNb2RlbCwgRmlsZVByb3BlcnR5TW9kZWwsIEZpbGVQcm9wZXJ0eUNhdGVnb3J5LCBGaWxlU2VydmljZSwgRmlsZVV0aWwsIFV0aWxzfSBmcm9tIFwiLi9maWxlLnNlcnZpY2VcIjtcclxuaW1wb3J0IHtEb2N1bWVudENvbXBvbmVudH0gZnJvbSAnLi9kb2N1bWVudC9kb2N1bWVudC5jb21wb25lbnQnO1xyXG5pbXBvcnQge1BhZ2VDb21wb25lbnR9IGZyb20gJy4vcGFnZS9wYWdlLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7SGlnaGxpZ2h0U2VhcmNoUGlwZSwgU2FuaXRpemVIdG1sUGlwZSwgU2FuaXRpemVSZXNvdXJjZUh0bWxQaXBlLCBTYW5pdGl6ZVN0eWxlUGlwZX0gZnJvbSBcIi4vcGlwZXNcIjtcclxuaW1wb3J0IHtVcGxvYWRGaWxlWm9uZUNvbXBvbmVudH0gZnJvbSAnLi91cGxvYWQtZmlsZS16b25lL3VwbG9hZC1maWxlLXpvbmUuY29tcG9uZW50JztcclxuaW1wb3J0IHtVcGxvYWRGaWxlc1NlcnZpY2V9IGZyb20gXCIuL3VwbG9hZC1maWxlcy5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7RG5kRGlyZWN0aXZlfSBmcm9tICcuL2RuZC5kaXJlY3RpdmUnO1xyXG5pbXBvcnQge1Njcm9sbGFibGVEaXJlY3RpdmV9IGZyb20gJy4vc2Nyb2xsYWJsZS5kaXJlY3RpdmUnO1xyXG5pbXBvcnQge05hdmlnYXRlU2VydmljZX0gZnJvbSBcIi4vbmF2aWdhdGUuc2VydmljZVwiO1xyXG5pbXBvcnQge1BhZ2VQcmVsb2FkU2VydmljZX0gZnJvbSBcIi4vcGFnZS1wcmVsb2FkLnNlcnZpY2VcIjtcclxuaW1wb3J0IHtab29tRGlyZWN0aXZlfSBmcm9tICcuL3pvb20uZGlyZWN0aXZlJztcclxuaW1wb3J0IHtab29tU2VydmljZX0gZnJvbSBcIi4vem9vbS5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7U2VsZWN0Q29tcG9uZW50fSBmcm9tICcuL3NlbGVjdC9zZWxlY3QuY29tcG9uZW50JztcclxuaW1wb3J0IHtEaXNhYmxlZEN1cnNvckRpcmVjdGl2ZX0gZnJvbSAnLi9kaXNhYmxlZC1jdXJzb3IuZGlyZWN0aXZlJztcclxuaW1wb3J0IHtSb3RhdGlvbkRpcmVjdGl2ZX0gZnJvbSAnLi9yb3RhdGlvbi5kaXJlY3RpdmUnO1xyXG5pbXBvcnQge0luaXRTdGF0ZUNvbXBvbmVudH0gZnJvbSAnLi9pbml0LXN0YXRlL2luaXQtc3RhdGUuY29tcG9uZW50JztcclxuaW1wb3J0IHtSZW5kZXJQcmludFNlcnZpY2V9IGZyb20gXCIuL3JlbmRlci1wcmludC5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7UmVuZGVyUHJpbnREaXJlY3RpdmV9IGZyb20gJy4vcmVuZGVyLXByaW50LmRpcmVjdGl2ZSc7XHJcbmltcG9ydCB7RXJyb3JNb2RhbENvbXBvbmVudH0gZnJvbSAnLi9lcnJvci1tb2RhbC9lcnJvci1tb2RhbC5jb21wb25lbnQnO1xyXG5pbXBvcnQge1Bhc3N3b3JkUmVxdWlyZWRDb21wb25lbnR9IGZyb20gJy4vcGFzc3dvcmQtcmVxdWlyZWQvcGFzc3dvcmQtcmVxdWlyZWQuY29tcG9uZW50JztcclxuaW1wb3J0IHtFeGNlcHRpb25NZXNzYWdlU2VydmljZX0gZnJvbSBcIi4vZXhjZXB0aW9uLW1lc3NhZ2Uuc2VydmljZVwiO1xyXG5pbXBvcnQge1Bhc3N3b3JkU2VydmljZX0gZnJvbSBcIi4vcGFzc3dvcmQuc2VydmljZVwiO1xyXG5pbXBvcnQge0Vycm9ySW50ZXJjZXB0b3JTZXJ2aWNlfSBmcm9tIFwiLi9lcnJvci1pbnRlcmNlcHRvci5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7U2VhcmNoQ29tcG9uZW50fSBmcm9tICcuL3NlYXJjaC9zZWFyY2guY29tcG9uZW50JztcclxuaW1wb3J0IHtTZWFyY2hhYmxlRGlyZWN0aXZlfSBmcm9tICcuL3NlYXJjaGFibGUuZGlyZWN0aXZlJztcclxuaW1wb3J0IHtTZWFyY2hTZXJ2aWNlfSBmcm9tIFwiLi9zZWFyY2guc2VydmljZVwiO1xyXG5pbXBvcnQge1dpbmRvd1NlcnZpY2V9IGZyb20gXCIuL3dpbmRvdy5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7Vmlld3BvcnRTZXJ2aWNlfSBmcm9tIFwiLi92aWV3cG9ydC5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7VGFiYmVkVG9vbGJhcnNDb21wb25lbnR9IGZyb20gJy4vdGFiYmVkLXRvb2xiYXJzL3RhYmJlZC10b29sYmFycy5jb21wb25lbnQnO1xyXG5pbXBvcnQge1RhYkNvbXBvbmVudH0gZnJvbSBcIi4vdGFiL3RhYi5jb21wb25lbnRcIjtcclxuaW1wb3J0IHtUYWJzQ29tcG9uZW50fSBmcm9tIFwiLi90YWJzL3RhYnMuY29tcG9uZW50XCI7XHJcbmltcG9ydCB7Rm9ybWF0dGluZ1NlcnZpY2V9IGZyb20gXCIuL2Zvcm1hdHRpbmcuc2VydmljZVwiO1xyXG5pbXBvcnQge0NvbG9yUGlja2VyQ29tcG9uZW50fSBmcm9tICcuL2NvbG9yLXBpY2tlci9jb2xvci1waWNrZXIuY29tcG9uZW50JztcclxuaW1wb3J0IHtGb3JtYXR0aW5nRGlyZWN0aXZlfSBmcm9tICcuL2Zvcm1hdHRpbmcuZGlyZWN0aXZlJztcclxuaW1wb3J0IHtCYWNrRm9ybWF0dGluZ1NlcnZpY2V9IGZyb20gXCIuL2JhY2stZm9ybWF0dGluZy5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7T25DbG9zZVNlcnZpY2V9IGZyb20gXCIuL29uLWNsb3NlLnNlcnZpY2VcIjtcclxuaW1wb3J0IHtTdWNjZXNzTW9kYWxDb21wb25lbnR9IGZyb20gJy4vc3VjY2Vzcy1tb2RhbC9zdWNjZXNzLW1vZGFsLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7RWRpdG9yRGlyZWN0aXZlfSBmcm9tICcuL2VkaXRvci5kaXJlY3RpdmUnO1xyXG5pbXBvcnQge0xvYWRpbmdNYXNrQ29tcG9uZW50fSBmcm9tICcuL2xvYWRpbmctbWFzay9sb2FkaW5nLW1hc2suY29tcG9uZW50JztcclxuaW1wb3J0IHtMb2FkaW5nTWFza1NlcnZpY2V9IGZyb20gJy4vbG9hZGluZy1tYXNrLnNlcnZpY2UnO1xyXG5pbXBvcnQge0xvYWRpbmdNYXNrSW50ZXJjZXB0b3JTZXJ2aWNlfSBmcm9tIFwiLi9sb2FkaW5nLW1hc2staW50ZXJjZXB0b3Iuc2VydmljZVwiO1xyXG5pbXBvcnQge1RhYkFjdGl2YXRvclNlcnZpY2V9IGZyb20gXCIuL3RhYi1hY3RpdmF0b3Iuc2VydmljZVwiO1xyXG5pbXBvcnQge1xyXG4gIERyb3BEb3duQ29tcG9uZW50LFxyXG4gIERyb3BEb3duSXRlbUNvbXBvbmVudCxcclxuICBEcm9wRG93bkl0ZW1zQ29tcG9uZW50LFxyXG4gIERyb3BEb3duVG9nZ2xlQ29tcG9uZW50XHJcbn0gZnJvbSAnLi9kcm9wLWRvd24vZHJvcC1kb3duLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7Q2xpY2tPdXRzaWRlTW9kdWxlfSBmcm9tICduZy1jbGljay1vdXRzaWRlJztcclxuaW1wb3J0IHtMZWZ0U2lkZUJhckNvbXBvbmVudH0gZnJvbSAnLi9sZWZ0LXNpZGUtYmFyL2xlZnQtc2lkZS1iYXIuY29tcG9uZW50JztcclxuaW1wb3J0IHtUb29sdGlwRGlyZWN0aXZlfSBmcm9tICcuL3Rvb2x0aXAuZGlyZWN0aXZlJztcclxuaW1wb3J0IHtBZGREeW5hbWljQ29tcG9uZW50U2VydmljZX0gZnJvbSBcIi4vYWRkLWR5bmFtaWMtY29tcG9uZW50LnNlcnZpY2VcIjtcclxuaW1wb3J0IHtIb3N0RHluYW1pY0RpcmVjdGl2ZX0gZnJvbSAnLi9ob3N0LWR5bmFtaWMuZGlyZWN0aXZlJztcclxuaW1wb3J0IHtIb3N0aW5nRHluYW1pY0NvbXBvbmVudFNlcnZpY2V9IGZyb20gXCIuL2hvc3RpbmctZHluYW1pYy1jb21wb25lbnQuc2VydmljZVwiO1xyXG5pbXBvcnQge1Jlc2l6aW5nQ29tcG9uZW50fSBmcm9tICcuL3Jlc2l6aW5nL3Jlc2l6aW5nLmNvbXBvbmVudCc7XHJcblxyXG5jb25zdCBwcm92aWRlcnMgPSBbQ29uZmlnU2VydmljZSxcclxuICBBcGksXHJcbiAgTW9kYWxTZXJ2aWNlLFxyXG4gIEZpbGVTZXJ2aWNlLFxyXG4gIEZpbGVNb2RlbCxcclxuICBGaWxlUHJvcGVydHlNb2RlbCxcclxuICBGaWxlVXRpbCxcclxuICBVdGlscyxcclxuICBTYW5pdGl6ZUh0bWxQaXBlLFxyXG4gIFNhbml0aXplUmVzb3VyY2VIdG1sUGlwZSxcclxuICBTYW5pdGl6ZVN0eWxlUGlwZSxcclxuICBIaWdobGlnaHRTZWFyY2hQaXBlLFxyXG4gIFVwbG9hZEZpbGVzU2VydmljZSxcclxuICBSZW5kZXJQcmludFNlcnZpY2UsXHJcbiAgTmF2aWdhdGVTZXJ2aWNlLFxyXG4gIFBhZ2VQcmVsb2FkU2VydmljZSxcclxuICBab29tU2VydmljZSxcclxuICBFeGNlcHRpb25NZXNzYWdlU2VydmljZSxcclxuICBQYXNzd29yZFNlcnZpY2UsXHJcbiAgRXJyb3JJbnRlcmNlcHRvclNlcnZpY2UsXHJcbiAgU2VhcmNoU2VydmljZSxcclxuICBXaW5kb3dTZXJ2aWNlLFxyXG4gIFZpZXdwb3J0U2VydmljZSxcclxuICBGb3JtYXR0aW5nU2VydmljZSxcclxuICBCYWNrRm9ybWF0dGluZ1NlcnZpY2UsXHJcbiAgT25DbG9zZVNlcnZpY2UsXHJcbiAgTG9hZGluZ01hc2tJbnRlcmNlcHRvclNlcnZpY2UsXHJcbiAgTG9hZGluZ01hc2tTZXJ2aWNlLFxyXG4gIFRhYkFjdGl2YXRvclNlcnZpY2UsXHJcbiAgQWRkRHluYW1pY0NvbXBvbmVudFNlcnZpY2UsXHJcbiAgSG9zdGluZ0R5bmFtaWNDb21wb25lbnRTZXJ2aWNlXTtcclxuXHJcbkBOZ01vZHVsZSh7XHJcbiAgaW1wb3J0czogW0NvbW1vbk1vZHVsZSwgRm9udEF3ZXNvbWVNb2R1bGUsIENsaWNrT3V0c2lkZU1vZHVsZV0sXHJcbiAgZGVjbGFyYXRpb25zOiBbXHJcbiAgICBUb3BUb29sYmFyQ29tcG9uZW50LFxyXG4gICAgU2lkZVBhbmVsQ29tcG9uZW50LFxyXG4gICAgQnV0dG9uQ29tcG9uZW50LFxyXG4gICAgTG9nb0NvbXBvbmVudCxcclxuICAgIFRvb2x0aXBDb21wb25lbnQsXHJcbiAgICBNb2RhbENvbXBvbmVudCxcclxuICAgIEJyb3dzZUZpbGVzTW9kYWxDb21wb25lbnQsXHJcbiAgICBEb2N1bWVudENvbXBvbmVudCxcclxuICAgIFBhZ2VDb21wb25lbnQsXHJcbiAgICBTYW5pdGl6ZUh0bWxQaXBlLFxyXG4gICAgU2FuaXRpemVSZXNvdXJjZUh0bWxQaXBlLFxyXG4gICAgU2FuaXRpemVTdHlsZVBpcGUsXHJcbiAgICBIaWdobGlnaHRTZWFyY2hQaXBlLFxyXG4gICAgVXBsb2FkRmlsZVpvbmVDb21wb25lbnQsXHJcbiAgICBEbmREaXJlY3RpdmUsXHJcbiAgICBTY3JvbGxhYmxlRGlyZWN0aXZlLFxyXG4gICAgWm9vbURpcmVjdGl2ZSxcclxuICAgIFNlbGVjdENvbXBvbmVudCxcclxuICAgIERpc2FibGVkQ3Vyc29yRGlyZWN0aXZlLFxyXG4gICAgUm90YXRpb25EaXJlY3RpdmUsXHJcbiAgICBJbml0U3RhdGVDb21wb25lbnQsXHJcbiAgICBSZW5kZXJQcmludERpcmVjdGl2ZSxcclxuICAgIEVycm9yTW9kYWxDb21wb25lbnQsXHJcbiAgICBQYXNzd29yZFJlcXVpcmVkQ29tcG9uZW50LFxyXG4gICAgU2VhcmNoQ29tcG9uZW50LFxyXG4gICAgU2VhcmNoYWJsZURpcmVjdGl2ZSxcclxuICAgIFRhYmJlZFRvb2xiYXJzQ29tcG9uZW50LFxyXG4gICAgVGFiQ29tcG9uZW50LFxyXG4gICAgVGFic0NvbXBvbmVudCxcclxuICAgIENvbG9yUGlja2VyQ29tcG9uZW50LFxyXG4gICAgRm9ybWF0dGluZ0RpcmVjdGl2ZSxcclxuICAgIFN1Y2Nlc3NNb2RhbENvbXBvbmVudCxcclxuICAgIEVkaXRvckRpcmVjdGl2ZSxcclxuICAgIExvYWRpbmdNYXNrQ29tcG9uZW50LFxyXG4gICAgRHJvcERvd25Db21wb25lbnQsXHJcbiAgICBEcm9wRG93bkl0ZW1Db21wb25lbnQsXHJcbiAgICBEcm9wRG93bkl0ZW1zQ29tcG9uZW50LFxyXG4gICAgRHJvcERvd25Ub2dnbGVDb21wb25lbnQsXHJcbiAgICBMZWZ0U2lkZUJhckNvbXBvbmVudCxcclxuICAgIFRvb2x0aXBEaXJlY3RpdmUsXHJcbiAgICBIb3N0RHluYW1pY0RpcmVjdGl2ZSxcclxuICAgIFJlc2l6aW5nQ29tcG9uZW50XHJcbiAgXSxcclxuICBleHBvcnRzOiBbXHJcbiAgICBUb3BUb29sYmFyQ29tcG9uZW50LFxyXG4gICAgU2lkZVBhbmVsQ29tcG9uZW50LFxyXG4gICAgQnV0dG9uQ29tcG9uZW50LFxyXG4gICAgTG9nb0NvbXBvbmVudCxcclxuICAgIFRvb2x0aXBDb21wb25lbnQsXHJcbiAgICBNb2RhbENvbXBvbmVudCxcclxuICAgIEJyb3dzZUZpbGVzTW9kYWxDb21wb25lbnQsXHJcbiAgICBEb2N1bWVudENvbXBvbmVudCxcclxuICAgIFBhZ2VDb21wb25lbnQsXHJcbiAgICBTYW5pdGl6ZVJlc291cmNlSHRtbFBpcGUsXHJcbiAgICBTYW5pdGl6ZVN0eWxlUGlwZSxcclxuICAgIEhpZ2hsaWdodFNlYXJjaFBpcGUsXHJcbiAgICBTYW5pdGl6ZUh0bWxQaXBlLFxyXG4gICAgVXBsb2FkRmlsZVpvbmVDb21wb25lbnQsXHJcbiAgICBTY3JvbGxhYmxlRGlyZWN0aXZlLFxyXG4gICAgU2VsZWN0Q29tcG9uZW50LFxyXG4gICAgUm90YXRpb25EaXJlY3RpdmUsXHJcbiAgICBJbml0U3RhdGVDb21wb25lbnQsXHJcbiAgICBSZW5kZXJQcmludERpcmVjdGl2ZSxcclxuICAgIEVycm9yTW9kYWxDb21wb25lbnQsXHJcbiAgICBQYXNzd29yZFJlcXVpcmVkQ29tcG9uZW50LFxyXG4gICAgU2VhcmNoQ29tcG9uZW50LFxyXG4gICAgU2VhcmNoYWJsZURpcmVjdGl2ZSxcclxuICAgIFRhYmJlZFRvb2xiYXJzQ29tcG9uZW50LFxyXG4gICAgVGFiQ29tcG9uZW50LFxyXG4gICAgVGFic0NvbXBvbmVudCxcclxuICAgIENvbG9yUGlja2VyQ29tcG9uZW50LFxyXG4gICAgRm9ybWF0dGluZ0RpcmVjdGl2ZSxcclxuICAgIFN1Y2Nlc3NNb2RhbENvbXBvbmVudCxcclxuICAgIExvYWRpbmdNYXNrQ29tcG9uZW50LFxyXG4gICAgRG5kRGlyZWN0aXZlLFxyXG4gICAgRHJvcERvd25Db21wb25lbnQsXHJcbiAgICBEcm9wRG93bkl0ZW1Db21wb25lbnQsXHJcbiAgICBEcm9wRG93bkl0ZW1zQ29tcG9uZW50LFxyXG4gICAgRHJvcERvd25Ub2dnbGVDb21wb25lbnQsXHJcbiAgICBab29tRGlyZWN0aXZlLFxyXG4gICAgRHJvcERvd25Ub2dnbGVDb21wb25lbnQsXHJcbiAgICBMZWZ0U2lkZUJhckNvbXBvbmVudCxcclxuICAgIFRvb2x0aXBEaXJlY3RpdmUsXHJcbiAgICBIb3N0RHluYW1pY0RpcmVjdGl2ZSxcclxuICAgIFJlc2l6aW5nQ29tcG9uZW50XHJcbiAgXSxcclxuICBwcm92aWRlcnM6IHByb3ZpZGVyc1xyXG59KVxyXG5leHBvcnQgY2xhc3MgQ29tbW9uQ29tcG9uZW50c01vZHVsZSB7XHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgICBsaWJyYXJ5LmFkZChmYXMsIGZhcik7XHJcbiAgfVxyXG59XHJcbiJdfQ==