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
import { MouseWheelDirective } from './mousewheel.directive';
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
import { TopTabComponent } from './top-tab/top-tab.component';
import { TopTabActivatorService } from "./top-tab-activator.service";
import { TextMenuComponent } from './text-menu/text-menu.component';
import { ContextMenuComponent } from './context-menu/context-menu.component';
import { PageMarkerDirective } from './page-marker.directive';
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
    HostingDynamicComponentService,
    TopTabActivatorService];
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
                        MouseWheelDirective,
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
                        ResizingComponent,
                        TopTabComponent,
                        TextMenuComponent,
                        ContextMenuComponent,
                        PageMarkerDirective
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
                        MouseWheelDirective,
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
                        ResizingComponent,
                        TopTabComponent,
                        TextMenuComponent,
                        ContextMenuComponent,
                        PageMarkerDirective
                    ],
                    providers: providers
                },] }
    ];
    /** @nocollapse */
    CommonComponentsModule.ctorParameters = function () { return []; };
    return CommonComponentsModule;
}());
export { CommonComponentsModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tbW9uLWNvbXBvbmVudHMubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdyb3VwZG9jcy5leGFtcGxlcy5hbmd1bGFyL2NvbW1vbi1jb21wb25lbnRzLyIsInNvdXJjZXMiOlsibGliL2NvbW1vbi1jb21wb25lbnRzLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFDLFFBQVEsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUN2QyxPQUFPLEVBQUMsWUFBWSxFQUFDLE1BQU0saUJBQWlCLENBQUM7QUFDN0MsT0FBTyxFQUFDLG1CQUFtQixFQUFDLE1BQU0scUNBQXFDLENBQUM7QUFDeEUsT0FBTyxFQUFDLGtCQUFrQixFQUFDLE1BQU0sbUNBQW1DLENBQUM7QUFDckUsT0FBTyxFQUFDLGVBQWUsRUFBQyxNQUFNLDJCQUEyQixDQUFDO0FBQzFELE9BQU8sRUFBQyxhQUFhLEVBQUMsTUFBTSx1QkFBdUIsQ0FBQztBQUNwRCxPQUFPLEVBQUMsZ0JBQWdCLEVBQUMsTUFBTSw2QkFBNkIsQ0FBQztBQUM3RCxPQUFPLEVBQUMsaUJBQWlCLEVBQUMsTUFBTSxrQ0FBa0MsQ0FBQztBQUNuRSxPQUFPLEVBQUMsT0FBTyxFQUFDLE1BQU0sbUNBQW1DLENBQUM7QUFDMUQsT0FBTyxFQUFDLEdBQUcsRUFBQyxNQUFNLG1DQUFtQyxDQUFDO0FBQ3RELE9BQU8sRUFBQyxHQUFHLEVBQUMsTUFBTSxxQ0FBcUMsQ0FBQztBQUN4RCxPQUFPLEVBQUMsR0FBRyxFQUFFLGFBQWEsR0FBRSxNQUFNLGtCQUFrQixDQUFDO0FBQ3JELE9BQU8sRUFBQyxZQUFZLEVBQUMsTUFBTSxpQkFBaUIsQ0FBQztBQUM3QyxPQUFPLEVBQUMsY0FBYyxFQUFDLE1BQU0seUJBQXlCLENBQUM7QUFDdkQsT0FBTyxFQUFDLHlCQUF5QixFQUFDLE1BQU0sbURBQW1ELENBQUM7QUFDNUYsT0FBTyxFQUFDLFNBQVMsRUFBRSxXQUFXLEVBQUUsUUFBUSxFQUFFLEtB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d0JBQ3ZCLG9CQUFvQjt3QkFDcEIsZ0JBQWdCO3dCQUNoQixvQkFBb0I7d0JBQ3BCLGlCQUFpQjt3QkFDakIsZUFBZTt3QkFDZixpQkFBaUI7d0JBQ2pCLG9CQUFvQjt3QkFDcEIsbUJBQW1CO3FCQUNwQjtvQkFDRCxPQUFPLEVBQUU7d0JBQ1AsbUJBQW1CO3dCQUNuQixrQkFBa0I7d0JBQ2xCLGVBQWU7d0JBQ2YsYUFBYTt3QkFDYixnQkFBZ0I7d0JBQ2hCLGNBQWM7d0JBQ2QseUJBQXlCO3dCQUN6QixpQkFBaUI7d0JBQ2pCLGFBQWE7d0JBQ2Isd0JBQXdCO3dCQUN4QixpQkFBaUI7d0JBQ2pCLG1CQUFtQjt3QkFDbkIsZ0JBQWdCO3dCQUNoQix1QkFBdUI7d0JBQ3ZCLG1CQUFtQjt3QkFDbkIsbUJBQW1CO3dCQUNuQixlQUFlO3dCQUNmLGlCQUFpQjt3QkFDakIsa0JBQWtCO3dCQUNsQixvQkFBb0I7d0JBQ3BCLG1CQUFtQjt3QkFDbkIseUJBQXlCO3dCQUN6QixlQUFlO3dCQUNmLG1CQUFtQjt3QkFDbkIsdUJBQXVCO3dCQUN2QixZQUFZO3dCQUNaLGFBQWE7d0JBQ2Isb0JBQW9CO3dCQUNwQixtQkFBbUI7d0JBQ25CLHFCQUFxQjt3QkFDckIsb0JBQW9CO3dCQUNwQixZQUFZO3dCQUNaLGlCQUFpQjt3QkFDakIscUJBQXFCO3dCQUNyQixzQkFBc0I7d0JBQ3RCLHVCQUF1Qjt3QkFDdkIsYUFBYTt3QkFDYix1QkFBdUI7d0JBQ3ZCLG9CQUFvQjt3QkFDcEIsZ0JBQWdCO3dCQUNoQixvQkFBb0I7d0JBQ3BCLGlCQUFpQjt3QkFDakIsZUFBZTt3QkFDZixpQkFBaUI7d0JBQ2pCLG9CQUFvQjt3QkFDcEIsbUJBQW1CO3FCQUNwQjtvQkFDRCxTQUFTLEVBQUUsU0FBUztpQkFDckI7Ozs7SUFLRCw2QkFBQztDQUFBLEFBekdELElBeUdDO1NBSlksc0JBQXNCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtOZ01vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7Q29tbW9uTW9kdWxlfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xyXG5pbXBvcnQge1RvcFRvb2xiYXJDb21wb25lbnR9IGZyb20gJy4vdG9wLXRvb2xiYXIvdG9wLXRvb2xiYXIuY29tcG9uZW50JztcclxuaW1wb3J0IHtTaWRlUGFuZWxDb21wb25lbnR9IGZyb20gJy4vc2lkZS1wYW5lbC9zaWRlLXBhbmVsLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7QnV0dG9uQ29tcG9uZW50fSBmcm9tICcuL2J1dHRvbi9idXR0b24uY29tcG9uZW50JztcclxuaW1wb3J0IHtMb2dvQ29tcG9uZW50fSBmcm9tICcuL2xvZ28vbG9nby5jb21wb25lbnQnO1xyXG5pbXBvcnQge1Rvb2x0aXBDb21wb25lbnR9IGZyb20gJy4vdG9vbHRpcC90b29sdGlwLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7Rm9udEF3ZXNvbWVNb2R1bGV9IGZyb20gJ0Bmb3J0YXdlc29tZS9hbmd1bGFyLWZvbnRhd2Vzb21lJztcclxuaW1wb3J0IHtsaWJyYXJ5fSBmcm9tICdAZm9ydGF3ZXNvbWUvZm9udGF3ZXNvbWUtc3ZnLWNvcmUnO1xyXG5pbXBvcnQge2Zhc30gZnJvbSAnQGZvcnRhd2Vzb21lL2ZyZWUtc29saWQtc3ZnLWljb25zJztcclxuaW1wb3J0IHtmYXJ9IGZyb20gJ0Bmb3J0YXdlc29tZS9mcmVlLXJlZ3VsYXItc3ZnLWljb25zJztcclxuaW1wb3J0IHtBcGksIENvbmZpZ1NlcnZpY2UsfSBmcm9tIFwiLi9jb25maWcuc2VydmljZVwiO1xyXG5pbXBvcnQge01vZGFsU2VydmljZX0gZnJvbSBcIi4vbW9kYWwuc2VydmljZVwiO1xyXG5pbXBvcnQge01vZGFsQ29tcG9uZW50fSBmcm9tICcuL21vZGFsL21vZGFsLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7QnJvd3NlRmlsZXNNb2RhbENvbXBvbmVudH0gZnJvbSAnLi9icm93c2UtZmlsZXMtbW9kYWwvYnJvd3NlLWZpbGVzLW1vZGFsLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7RmlsZU1vZGVsLCBGaWxlU2VydmljZSwgRmlsZVV0aWwsIFV0aWxzfSBmcm9tIFwiLi9maWxlLnNlcnZpY2VcIjtcclxuaW1wb3J0IHtEb2N1bWVudENvbXBvbmVudH0gZnJvbSAnLi9kb2N1bWVudC9kb2N1bWVudC5jb21wb25lbnQnO1xyXG5pbXBvcnQge1BhZ2VDb21wb25lbnR9IGZyb20gJy4vcGFnZS9wYWdlLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7SGlnaGxpZ2h0U2VhcmNoUGlwZSwgU2FuaXRpemVIdG1sUGlwZSwgU2FuaXRpemVSZXNvdXJjZUh0bWxQaXBlLCBTYW5pdGl6ZVN0eWxlUGlwZX0gZnJvbSBcIi4vcGlwZXNcIjtcclxuaW1wb3J0IHtVcGxvYWRGaWxlWm9uZUNvbXBvbmVudH0gZnJvbSAnLi91cGxvYWQtZmlsZS16b25lL3VwbG9hZC1maWxlLXpvbmUuY29tcG9uZW50JztcclxuaW1wb3J0IHtVcGxvYWRGaWxlc1NlcnZpY2V9IGZyb20gXCIuL3VwbG9hZC1maWxlcy5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7RG5kRGlyZWN0aXZlfSBmcm9tICcuL2RuZC5kaXJlY3RpdmUnO1xyXG5pbXBvcnQge1Njcm9sbGFibGVEaXJlY3RpdmV9IGZyb20gJy4vc2Nyb2xsYWJsZS5kaXJlY3RpdmUnO1xyXG5pbXBvcnQge01vdXNlV2hlZWxEaXJlY3RpdmV9IGZyb20gJy4vbW91c2V3aGVlbC5kaXJlY3RpdmUnO1xyXG5pbXBvcnQge05hdmlnYXRlU2VydmljZX0gZnJvbSBcIi4vbmF2aWdhdGUuc2VydmljZVwiO1xyXG5pbXBvcnQge1BhZ2VQcmVsb2FkU2VydmljZX0gZnJvbSBcIi4vcGFnZS1wcmVsb2FkLnNlcnZpY2VcIjtcclxuaW1wb3J0IHtab29tRGlyZWN0aXZlfSBmcm9tICcuL3pvb20uZGlyZWN0aXZlJztcclxuaW1wb3J0IHtab29tU2VydmljZX0gZnJvbSBcIi4vem9vbS5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7U2VsZWN0Q29tcG9uZW50fSBmcm9tICcuL3NlbGVjdC9zZWxlY3QuY29tcG9uZW50JztcclxuaW1wb3J0IHtEaXNhYmxlZEN1cnNvckRpcmVjdGl2ZX0gZnJvbSAnLi9kaXNhYmxlZC1jdXJzb3IuZGlyZWN0aXZlJztcclxuaW1wb3J0IHtSb3RhdGlvbkRpcmVjdGl2ZX0gZnJvbSAnLi9yb3RhdGlvbi5kaXJlY3RpdmUnO1xyXG5pbXBvcnQge0luaXRTdGF0ZUNvbXBvbmVudH0gZnJvbSAnLi9pbml0LXN0YXRlL2luaXQtc3RhdGUuY29tcG9uZW50JztcclxuaW1wb3J0IHtSZW5kZXJQcmludFNlcnZpY2V9IGZyb20gXCIuL3JlbmRlci1wcmludC5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7UmVuZGVyUHJpbnREaXJlY3RpdmV9IGZyb20gJy4vcmVuZGVyLXByaW50LmRpcmVjdGl2ZSc7XHJcbmltcG9ydCB7RXJyb3JNb2RhbENvbXBvbmVudH0gZnJvbSAnLi9lcnJvci1tb2RhbC9lcnJvci1tb2RhbC5jb21wb25lbnQnO1xyXG5pbXBvcnQge1Bhc3N3b3JkUmVxdWlyZWRDb21wb25lbnR9IGZyb20gJy4vcGFzc3dvcmQtcmVxdWlyZWQvcGFzc3dvcmQtcmVxdWlyZWQuY29tcG9uZW50JztcclxuaW1wb3J0IHtFeGNlcHRpb25NZXNzYWdlU2VydmljZX0gZnJvbSBcIi4vZXhjZXB0aW9uLW1lc3NhZ2Uuc2VydmljZVwiO1xyXG5pbXBvcnQge1Bhc3N3b3JkU2VydmljZX0gZnJvbSBcIi4vcGFzc3dvcmQuc2VydmljZVwiO1xyXG5pbXBvcnQge0Vycm9ySW50ZXJjZXB0b3JTZXJ2aWNlfSBmcm9tIFwiLi9lcnJvci1pbnRlcmNlcHRvci5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7U2VhcmNoQ29tcG9uZW50fSBmcm9tICcuL3NlYXJjaC9zZWFyY2guY29tcG9uZW50JztcclxuaW1wb3J0IHtTZWFyY2hhYmxlRGlyZWN0aXZlfSBmcm9tICcuL3NlYXJjaGFibGUuZGlyZWN0aXZlJztcclxuaW1wb3J0IHtTZWFyY2hTZXJ2aWNlfSBmcm9tIFwiLi9zZWFyY2guc2VydmljZVwiO1xyXG5pbXBvcnQge1dpbmRvd1NlcnZpY2V9IGZyb20gXCIuL3dpbmRvdy5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7Vmlld3BvcnRTZXJ2aWNlfSBmcm9tIFwiLi92aWV3cG9ydC5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7VGFiYmVkVG9vbGJhcnNDb21wb25lbnR9IGZyb20gJy4vdGFiYmVkLXRvb2xiYXJzL3RhYmJlZC10b29sYmFycy5jb21wb25lbnQnO1xyXG5pbXBvcnQge1RhYkNvbXBvbmVudH0gZnJvbSBcIi4vdGFiL3RhYi5jb21wb25lbnRcIjtcclxuaW1wb3J0IHtUYWJzQ29tcG9uZW50fSBmcm9tIFwiLi90YWJzL3RhYnMuY29tcG9uZW50XCI7XHJcbmltcG9ydCB7Rm9ybWF0dGluZ1NlcnZpY2V9IGZyb20gXCIuL2Zvcm1hdHRpbmcuc2VydmljZVwiO1xyXG5pbXBvcnQge0NvbG9yUGlja2VyQ29tcG9uZW50fSBmcm9tICcuL2NvbG9yLXBpY2tlci9jb2xvci1waWNrZXIuY29tcG9uZW50JztcclxuaW1wb3J0IHtGb3JtYXR0aW5nRGlyZWN0aXZlfSBmcm9tICcuL2Zvcm1hdHRpbmcuZGlyZWN0aXZlJztcclxuaW1wb3J0IHtCYWNrRm9ybWF0dGluZ1NlcnZpY2V9IGZyb20gXCIuL2JhY2stZm9ybWF0dGluZy5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7T25DbG9zZVNlcnZpY2V9IGZyb20gXCIuL29uLWNsb3NlLnNlcnZpY2VcIjtcclxuaW1wb3J0IHtTdWNjZXNzTW9kYWxDb21wb25lbnR9IGZyb20gJy4vc3VjY2Vzcy1tb2RhbC9zdWNjZXNzLW1vZGFsLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7RWRpdG9yRGlyZWN0aXZlfSBmcm9tICcuL2VkaXRvci5kaXJlY3RpdmUnO1xyXG5pbXBvcnQge0xvYWRpbmdNYXNrQ29tcG9uZW50fSBmcm9tICcuL2xvYWRpbmctbWFzay9sb2FkaW5nLW1hc2suY29tcG9uZW50JztcclxuaW1wb3J0IHtMb2FkaW5nTWFza1NlcnZpY2V9IGZyb20gJy4vbG9hZGluZy1tYXNrLnNlcnZpY2UnO1xyXG5pbXBvcnQge0xvYWRpbmdNYXNrSW50ZXJjZXB0b3JTZXJ2aWNlfSBmcm9tIFwiLi9sb2FkaW5nLW1hc2staW50ZXJjZXB0b3Iuc2VydmljZVwiO1xyXG5pbXBvcnQge1RhYkFjdGl2YXRvclNlcnZpY2V9IGZyb20gXCIuL3RhYi1hY3RpdmF0b3Iuc2VydmljZVwiO1xyXG5pbXBvcnQge1xyXG4gIERyb3BEb3duQ29tcG9uZW50LFxyXG4gIERyb3BEb3duSXRlbUNvbXBvbmVudCxcclxuICBEcm9wRG93bkl0ZW1zQ29tcG9uZW50LFxyXG4gIERyb3BEb3duVG9nZ2xlQ29tcG9uZW50XHJcbn0gZnJvbSAnLi9kcm9wLWRvd24vZHJvcC1kb3duLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7Q2xpY2tPdXRzaWRlTW9kdWxlfSBmcm9tICduZy1jbGljay1vdXRzaWRlJztcclxuaW1wb3J0IHtMZWZ0U2lkZUJhckNvbXBvbmVudH0gZnJvbSAnLi9sZWZ0LXNpZGUtYmFyL2xlZnQtc2lkZS1iYXIuY29tcG9uZW50JztcclxuaW1wb3J0IHtUb29sdGlwRGlyZWN0aXZlfSBmcm9tICcuL3Rvb2x0aXAuZGlyZWN0aXZlJztcclxuaW1wb3J0IHtBZGREeW5hbWljQ29tcG9uZW50U2VydmljZX0gZnJvbSBcIi4vYWRkLWR5bmFtaWMtY29tcG9uZW50LnNlcnZpY2VcIjtcclxuaW1wb3J0IHtIb3N0RHluYW1pY0RpcmVjdGl2ZX0gZnJvbSAnLi9ob3N0LWR5bmFtaWMuZGlyZWN0aXZlJztcclxuaW1wb3J0IHtIb3N0aW5nRHluYW1pY0NvbXBvbmVudFNlcnZpY2V9IGZyb20gXCIuL2hvc3RpbmctZHluYW1pYy1jb21wb25lbnQuc2VydmljZVwiO1xyXG5pbXBvcnQge1Jlc2l6aW5nQ29tcG9uZW50fSBmcm9tICcuL3Jlc2l6aW5nL3Jlc2l6aW5nLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7VG9wVGFiQ29tcG9uZW50fSBmcm9tICcuL3RvcC10YWIvdG9wLXRhYi5jb21wb25lbnQnO1xyXG5pbXBvcnQge1RvcFRhYkFjdGl2YXRvclNlcnZpY2V9IGZyb20gXCIuL3RvcC10YWItYWN0aXZhdG9yLnNlcnZpY2VcIjtcclxuaW1wb3J0IHtUZXh0TWVudUNvbXBvbmVudH0gZnJvbSAnLi90ZXh0LW1lbnUvdGV4dC1tZW51LmNvbXBvbmVudCc7XHJcbmltcG9ydCB7Q29udGV4dE1lbnVDb21wb25lbnR9IGZyb20gJy4vY29udGV4dC1tZW51L2NvbnRleHQtbWVudS5jb21wb25lbnQnO1xyXG5pbXBvcnQge1BhZ2VNYXJrZXJEaXJlY3RpdmV9IGZyb20gJy4vcGFnZS1tYXJrZXIuZGlyZWN0aXZlJztcclxuXHJcbmNvbnN0IHByb3ZpZGVycyA9IFtDb25maWdTZXJ2aWNlLFxyXG4gIEFwaSxcclxuICBNb2RhbFNlcnZpY2UsXHJcbiAgRmlsZVNlcnZpY2UsXHJcbiAgRmlsZU1vZGVsLFxyXG4gIEZpbGVVdGlsLFxyXG4gIFV0aWxzLFxyXG4gIFNhbml0aXplSHRtbFBpcGUsXHJcbiAgU2FuaXRpemVSZXNvdXJjZUh0bWxQaXBlLFxyXG4gIFNhbml0aXplU3R5bGVQaXBlLFxyXG4gIEhpZ2hsaWdodFNlYXJjaFBpcGUsXHJcbiAgVXBsb2FkRmlsZXNTZXJ2aWNlLFxyXG4gIFJlbmRlclByaW50U2VydmljZSxcclxuICBOYXZpZ2F0ZVNlcnZpY2UsXHJcbiAgUGFnZVByZWxvYWRTZXJ2aWNlLFxyXG4gIFpvb21TZXJ2aWNlLFxyXG4gIEV4Y2VwdGlvbk1lc3NhZ2VTZXJ2aWNlLFxyXG4gIFBhc3N3b3JkU2VydmljZSxcclxuICBFcnJvckludGVyY2VwdG9yU2VydmljZSxcclxuICBTZWFyY2hTZXJ2aWNlLFxyXG4gIFdpbmRvd1NlcnZpY2UsXHJcbiAgVmlld3BvcnRTZXJ2aWNlLFxyXG4gIEZvcm1hdHRpbmdTZXJ2aWNlLFxyXG4gIEJhY2tGb3JtYXR0aW5nU2VydmljZSxcclxuICBPbkNsb3NlU2VydmljZSxcclxuICBMb2FkaW5nTWFza0ludGVyY2VwdG9yU2VydmljZSxcclxuICBMb2FkaW5nTWFza1NlcnZpY2UsXHJcbiAgVGFiQWN0aXZhdG9yU2VydmljZSxcclxuICBBZGREeW5hbWljQ29tcG9uZW50U2VydmljZSxcclxuICBIb3N0aW5nRHluYW1pY0NvbXBvbmVudFNlcnZpY2UsXHJcbiAgVG9wVGFiQWN0aXZhdG9yU2VydmljZV07XHJcblxyXG5ATmdNb2R1bGUoe1xyXG4gIGltcG9ydHM6IFtDb21tb25Nb2R1bGUsIEZvbnRBd2Vzb21lTW9kdWxlLCBDbGlja091dHNpZGVNb2R1bGVdLFxyXG4gIGRlY2xhcmF0aW9uczogW1xyXG4gICAgVG9wVG9vbGJhckNvbXBvbmVudCxcclxuICAgIFNpZGVQYW5lbENvbXBvbmVudCxcclxuICAgIEJ1dHRvbkNvbXBvbmVudCxcclxuICAgIExvZ29Db21wb25lbnQsXHJcbiAgICBUb29sdGlwQ29tcG9uZW50LFxyXG4gICAgTW9kYWxDb21wb25lbnQsXHJcbiAgICBCcm93c2VGaWxlc01vZGFsQ29tcG9uZW50LFxyXG4gICAgRG9jdW1lbnRDb21wb25lbnQsXHJcbiAgICBQYWdlQ29tcG9uZW50LFxyXG4gICAgU2FuaXRpemVIdG1sUGlwZSxcclxuICAgIFNhbml0aXplUmVzb3VyY2VIdG1sUGlwZSxcclxuICAgIFNhbml0aXplU3R5bGVQaXBlLFxyXG4gICAgSGlnaGxpZ2h0U2VhcmNoUGlwZSxcclxuICAgIFVwbG9hZEZpbGVab25lQ29tcG9uZW50LFxyXG4gICAgRG5kRGlyZWN0aXZlLFxyXG4gICAgU2Nyb2xsYWJsZURpcmVjdGl2ZSxcclxuICAgIE1vdXNlV2hlZWxEaXJlY3RpdmUsXHJcbiAgICBab29tRGlyZWN0aXZlLFxyXG4gICAgU2VsZWN0Q29tcG9uZW50LFxyXG4gICAgRGlzYWJsZWRDdXJzb3JEaXJlY3RpdmUsXHJcbiAgICBSb3RhdGlvbkRpcmVjdGl2ZSxcclxuICAgIEluaXRTdGF0ZUNvbXBvbmVudCxcclxuICAgIFJlbmRlclByaW50RGlyZWN0aXZlLFxyXG4gICAgRXJyb3JNb2RhbENvbXBvbmVudCxcclxuICAgIFBhc3N3b3JkUmVxdWlyZWRDb21wb25lbnQsXHJcbiAgICBTZWFyY2hDb21wb25lbnQsXHJcbiAgICBTZWFyY2hhYmxlRGlyZWN0aXZlLFxyXG4gICAgVGFiYmVkVG9vbGJhcnNDb21wb25lbnQsXHJcbiAgICBUYWJDb21wb25lbnQsXHJcbiAgICBUYWJzQ29tcG9uZW50LFxyXG4gICAgQ29sb3JQaWNrZXJDb21wb25lbnQsXHJcbiAgICBGb3JtYXR0aW5nRGlyZWN0aXZlLFxyXG4gICAgU3VjY2Vzc01vZGFsQ29tcG9uZW50LFxyXG4gICAgRWRpdG9yRGlyZWN0aXZlLFxyXG4gICAgTG9hZGluZ01hc2tDb21wb25lbnQsXHJcbiAgICBEcm9wRG93bkNvbXBvbmVudCxcclxuICAgIERyb3BEb3duSXRlbUNvbXBvbmVudCxcclxuICAgIERyb3BEb3duSXRlbXNDb21wb25lbnQsXHJcbiAgICBEcm9wRG93blRvZ2dsZUNvbXBvbmVudCxcclxuICAgIExlZnRTaWRlQmFyQ29tcG9uZW50LFxyXG4gICAgVG9vbHRpcERpcmVjdGl2ZSxcclxuICAgIEhvc3REeW5hbWljRGlyZWN0aXZlLFxyXG4gICAgUmVzaXppbmdDb21wb25lbnQsXHJcbiAgICBUb3BUYWJDb21wb25lbnQsXHJcbiAgICBUZXh0TWVudUNvbXBvbmVudCxcclxuICAgIENvbnRleHRNZW51Q29tcG9uZW50LFxyXG4gICAgUGFnZU1hcmtlckRpcmVjdGl2ZVxyXG4gIF0sXHJcbiAgZXhwb3J0czogW1xyXG4gICAgVG9wVG9vbGJhckNvbXBvbmVudCxcclxuICAgIFNpZGVQYW5lbENvbXBvbmVudCxcclxuICAgIEJ1dHRvbkNvbXBvbmVudCxcclxuICAgIExvZ29Db21wb25lbnQsXHJcbiAgICBUb29sdGlwQ29tcG9uZW50LFxyXG4gICAgTW9kYWxDb21wb25lbnQsXHJcbiAgICBCcm93c2VGaWxlc01vZGFsQ29tcG9uZW50LFxyXG4gICAgRG9jdW1lbnRDb21wb25lbnQsXHJcbiAgICBQYWdlQ29tcG9uZW50LFxyXG4gICAgU2FuaXRpemVSZXNvdXJjZUh0bWxQaXBlLFxyXG4gICAgU2FuaXRpemVTdHlsZVBpcGUsXHJcbiAgICBIaWdobGlnaHRTZWFyY2hQaXBlLFxyXG4gICAgU2FuaXRpemVIdG1sUGlwZSxcclxuICAgIFVwbG9hZEZpbGVab25lQ29tcG9uZW50LFxyXG4gICAgU2Nyb2xsYWJsZURpcmVjdGl2ZSxcclxuICAgIE1vdXNlV2hlZWxEaXJlY3RpdmUsXHJcbiAgICBTZWxlY3RDb21wb25lbnQsXHJcbiAgICBSb3RhdGlvbkRpcmVjdGl2ZSxcclxuICAgIEluaXRTdGF0ZUNvbXBvbmVudCxcclxuICAgIFJlbmRlclByaW50RGlyZWN0aXZlLFxyXG4gICAgRXJyb3JNb2RhbENvbXBvbmVudCxcclxuICAgIFBhc3N3b3JkUmVxdWlyZWRDb21wb25lbnQsXHJcbiAgICBTZWFyY2hDb21wb25lbnQsXHJcbiAgICBTZWFyY2hhYmxlRGlyZWN0aXZlLFxyXG4gICAgVGFiYmVkVG9vbGJhcnNDb21wb25lbnQsXHJcbiAgICBUYWJDb21wb25lbnQsXHJcbiAgICBUYWJzQ29tcG9uZW50LFxyXG4gICAgQ29sb3JQaWNrZXJDb21wb25lbnQsXHJcbiAgICBGb3JtYXR0aW5nRGlyZWN0aXZlLFxyXG4gICAgU3VjY2Vzc01vZGFsQ29tcG9uZW50LFxyXG4gICAgTG9hZGluZ01hc2tDb21wb25lbnQsXHJcbiAgICBEbmREaXJlY3RpdmUsXHJcbiAgICBEcm9wRG93bkNvbXBvbmVudCxcclxuICAgIERyb3BEb3duSXRlbUNvbXBvbmVudCxcclxuICAgIERyb3BEb3duSXRlbXNDb21wb25lbnQsXHJcbiAgICBEcm9wRG93blRvZ2dsZUNvbXBvbmVudCxcclxuICAgIFpvb21EaXJlY3RpdmUsXHJcbiAgICBEcm9wRG93blRvZ2dsZUNvbXBvbmVudCxcclxuICAgIExlZnRTaWRlQmFyQ29tcG9uZW50LFxyXG4gICAgVG9vbHRpcERpcmVjdGl2ZSxcclxuICAgIEhvc3REeW5hbWljRGlyZWN0aXZlLFxyXG4gICAgUmVzaXppbmdDb21wb25lbnQsXHJcbiAgICBUb3BUYWJDb21wb25lbnQsXHJcbiAgICBUZXh0TWVudUNvbXBvbmVudCxcclxuICAgIENvbnRleHRNZW51Q29tcG9uZW50LFxyXG4gICAgUGFnZU1hcmtlckRpcmVjdGl2ZVxyXG4gIF0sXHJcbiAgcHJvdmlkZXJzOiBwcm92aWRlcnNcclxufSlcclxuZXhwb3J0IGNsYXNzIENvbW1vbkNvbXBvbmVudHNNb2R1bGUge1xyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgbGlicmFyeS5hZGQoZmFzLCBmYXIpO1xyXG4gIH1cclxufVxyXG4iXX0=