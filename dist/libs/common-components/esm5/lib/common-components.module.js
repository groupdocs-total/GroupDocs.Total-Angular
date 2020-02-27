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
import { TopTabComponent } from './top-tab/top-tab.component';
import { TopTabActivatorService } from "./top-tab-activator.service";
import { TextMenuComponent } from './text-menu/text-menu.component';
import { ContextMenuComponent } from './context-menu/context-menu.component';
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
                        ContextMenuComponent
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
                        ResizingComponent,
                        TopTabComponent,
                        TextMenuComponent,
                        ContextMenuComponent
                    ],
                    providers: providers
                },] }
    ];
    /** @nocollapse */
    CommonComponentsModule.ctorParameters = function () { return []; };
    return CommonComponentsModule;
}());
export { CommonComponentsModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tbW9uLWNvbXBvbmVudHMubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdyb3VwZG9jcy5leGFtcGxlcy5hbmd1bGFyL2NvbW1vbi1jb21wb25lbnRzLyIsInNvdXJjZXMiOlsibGliL2NvbW1vbi1jb21wb25lbnRzLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFDLFFBQVEsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUN2QyxPQUFPLEVBQUMsWUFBWSxFQUFDLE1BQU0saUJBQWlCLENBQUM7QUFDN0MsT0FBTyxFQUFDLG1CQUFtQixFQUFDLE1BQU0scUNBQXFDLENBQUM7QUFDeEUsT0FBTyxFQUFDLGtCQUFrQixFQUFDLE1BQU0sbUNBQW1DLENBQUM7QUFDckUsT0FBTyxFQUFDLGVBQWUsRUFBQyxNQUFNLDJCQUEyQixDQUFDO0FBQzFELE9BQU8sRUFBQyxhQUFhLEVBQUMsTUFBTSx1QkFBdUIsQ0FBQztBQUNwRCxPQUFPLEVBQUMsZ0JBQWdCLEVBQUMsTUFBTSw2QkFBNkIsQ0FBQztBQUM3RCxPQUFPLEVBQUMsaUJBQWlCLEVBQUMsTUFBTSxrQ0FBa0MsQ0FBQztBQUNuRSxPQUFPLEVBQUMsT0FBTyxFQUFDLE1BQU0sbUNBQW1DLENBQUM7QUFDMUQsT0FBTyxFQUFDLEdBQUcsRUFBQyxNQUFNLG1DQUFtQyxDQUFDO0FBQ3RELE9BQU8sRUFBQyxHQUFHLEVBQUMsTUFBTSxxQ0FBcUMsQ0FBQztBQUN4RCxPQUFPLEVBQUMsR0FBRyxFQUFFLGFBQWEsR0FBRSxNQUFNLGtCQUFrQixDQUFDO0FBQ3JELE9BQU8sRUFBQyxZQUFZLEVBQUMsTUFBTSxpQkFBaUIsQ0FBQztBQUM3QyxPQUFPLEVBQUMsY0FBYyxFQUFDLE1BQU0seUJBQXlCLENBQUM7QUFDdkQsT0FBTyxFQUFDLHlCQUF5QixFQUFDLE1BQU0sbURBQW1ELENBQUM7QUFDNUYsT0FBTyxFQUFDLFNBQVMsRUFBRSxpQkFBaUIsRUFBd0IsV0FBVyxFQUFF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aUI7d0JBQ2pCLG9CQUFvQjtxQkFDckI7b0JBQ0QsT0FBTyxFQUFFO3dCQUNQLG1CQUFtQjt3QkFDbkIsa0JBQWtCO3dCQUNsQixlQUFlO3dCQUNmLGFBQWE7d0JBQ2IsZ0JBQWdCO3dCQUNoQixjQUFjO3dCQUNkLHlCQUF5Qjt3QkFDekIsaUJBQWlCO3dCQUNqQixhQUFhO3dCQUNiLHdCQUF3Qjt3QkFDeEIsaUJBQWlCO3dCQUNqQixtQkFBbUI7d0JBQ25CLGdCQUFnQjt3QkFDaEIsdUJBQXVCO3dCQUN2QixtQkFBbUI7d0JBQ25CLGVBQWU7d0JBQ2YsaUJBQWlCO3dCQUNqQixrQkFBa0I7d0JBQ2xCLG9CQUFvQjt3QkFDcEIsbUJBQW1CO3dCQUNuQix5QkFBeUI7d0JBQ3pCLGVBQWU7d0JBQ2YsbUJBQW1CO3dCQUNuQix1QkFBdUI7d0JBQ3ZCLFlBQVk7d0JBQ1osYUFBYTt3QkFDYixvQkFBb0I7d0JBQ3BCLG1CQUFtQjt3QkFDbkIscUJBQXFCO3dCQUNyQixvQkFBb0I7d0JBQ3BCLFlBQVk7d0JBQ1osaUJBQWlCO3dCQUNqQixxQkFBcUI7d0JBQ3JCLHNCQUFzQjt3QkFDdEIsdUJBQXVCO3dCQUN2QixhQUFhO3dCQUNiLHVCQUF1Qjt3QkFDdkIsb0JBQW9CO3dCQUNwQixnQkFBZ0I7d0JBQ2hCLG9CQUFvQjt3QkFDcEIsaUJBQWlCO3dCQUNqQixlQUFlO3dCQUNmLGlCQUFpQjt3QkFDakIsb0JBQW9CO3FCQUNyQjtvQkFDRCxTQUFTLEVBQUUsU0FBUztpQkFDckI7Ozs7SUFLRCw2QkFBQztDQUFBLEFBckdELElBcUdDO1NBSlksc0JBQXNCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtOZ01vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7Q29tbW9uTW9kdWxlfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xyXG5pbXBvcnQge1RvcFRvb2xiYXJDb21wb25lbnR9IGZyb20gJy4vdG9wLXRvb2xiYXIvdG9wLXRvb2xiYXIuY29tcG9uZW50JztcclxuaW1wb3J0IHtTaWRlUGFuZWxDb21wb25lbnR9IGZyb20gJy4vc2lkZS1wYW5lbC9zaWRlLXBhbmVsLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7QnV0dG9uQ29tcG9uZW50fSBmcm9tICcuL2J1dHRvbi9idXR0b24uY29tcG9uZW50JztcclxuaW1wb3J0IHtMb2dvQ29tcG9uZW50fSBmcm9tICcuL2xvZ28vbG9nby5jb21wb25lbnQnO1xyXG5pbXBvcnQge1Rvb2x0aXBDb21wb25lbnR9IGZyb20gJy4vdG9vbHRpcC90b29sdGlwLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7Rm9udEF3ZXNvbWVNb2R1bGV9IGZyb20gJ0Bmb3J0YXdlc29tZS9hbmd1bGFyLWZvbnRhd2Vzb21lJztcclxuaW1wb3J0IHtsaWJyYXJ5fSBmcm9tICdAZm9ydGF3ZXNvbWUvZm9udGF3ZXNvbWUtc3ZnLWNvcmUnO1xyXG5pbXBvcnQge2Zhc30gZnJvbSAnQGZvcnRhd2Vzb21lL2ZyZWUtc29saWQtc3ZnLWljb25zJztcclxuaW1wb3J0IHtmYXJ9IGZyb20gJ0Bmb3J0YXdlc29tZS9mcmVlLXJlZ3VsYXItc3ZnLWljb25zJztcclxuaW1wb3J0IHtBcGksIENvbmZpZ1NlcnZpY2UsfSBmcm9tIFwiLi9jb25maWcuc2VydmljZVwiO1xyXG5pbXBvcnQge01vZGFsU2VydmljZX0gZnJvbSBcIi4vbW9kYWwuc2VydmljZVwiO1xyXG5pbXBvcnQge01vZGFsQ29tcG9uZW50fSBmcm9tICcuL21vZGFsL21vZGFsLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7QnJvd3NlRmlsZXNNb2RhbENvbXBvbmVudH0gZnJvbSAnLi9icm93c2UtZmlsZXMtbW9kYWwvYnJvd3NlLWZpbGVzLW1vZGFsLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7RmlsZU1vZGVsLCBGaWxlUHJvcGVydHlNb2RlbCwgRmlsZVByb3BlcnR5Q2F0ZWdvcnksIEZpbGVTZXJ2aWNlLCBGaWxlVXRpbCwgVXRpbHN9IGZyb20gXCIuL2ZpbGUuc2VydmljZVwiO1xyXG5pbXBvcnQge0RvY3VtZW50Q29tcG9uZW50fSBmcm9tICcuL2RvY3VtZW50L2RvY3VtZW50LmNvbXBvbmVudCc7XHJcbmltcG9ydCB7UGFnZUNvbXBvbmVudH0gZnJvbSAnLi9wYWdlL3BhZ2UuY29tcG9uZW50JztcclxuaW1wb3J0IHtIaWdobGlnaHRTZWFyY2hQaXBlLCBTYW5pdGl6ZUh0bWxQaXBlLCBTYW5pdGl6ZVJlc291cmNlSHRtbFBpcGUsIFNhbml0aXplU3R5bGVQaXBlfSBmcm9tIFwiLi9waXBlc1wiO1xyXG5pbXBvcnQge1VwbG9hZEZpbGVab25lQ29tcG9uZW50fSBmcm9tICcuL3VwbG9hZC1maWxlLXpvbmUvdXBsb2FkLWZpbGUtem9uZS5jb21wb25lbnQnO1xyXG5pbXBvcnQge1VwbG9hZEZpbGVzU2VydmljZX0gZnJvbSBcIi4vdXBsb2FkLWZpbGVzLnNlcnZpY2VcIjtcclxuaW1wb3J0IHtEbmREaXJlY3RpdmV9IGZyb20gJy4vZG5kLmRpcmVjdGl2ZSc7XHJcbmltcG9ydCB7U2Nyb2xsYWJsZURpcmVjdGl2ZX0gZnJvbSAnLi9zY3JvbGxhYmxlLmRpcmVjdGl2ZSc7XHJcbmltcG9ydCB7TmF2aWdhdGVTZXJ2aWNlfSBmcm9tIFwiLi9uYXZpZ2F0ZS5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7UGFnZVByZWxvYWRTZXJ2aWNlfSBmcm9tIFwiLi9wYWdlLXByZWxvYWQuc2VydmljZVwiO1xyXG5pbXBvcnQge1pvb21EaXJlY3RpdmV9IGZyb20gJy4vem9vbS5kaXJlY3RpdmUnO1xyXG5pbXBvcnQge1pvb21TZXJ2aWNlfSBmcm9tIFwiLi96b29tLnNlcnZpY2VcIjtcclxuaW1wb3J0IHtTZWxlY3RDb21wb25lbnR9IGZyb20gJy4vc2VsZWN0L3NlbGVjdC5jb21wb25lbnQnO1xyXG5pbXBvcnQge0Rpc2FibGVkQ3Vyc29yRGlyZWN0aXZlfSBmcm9tICcuL2Rpc2FibGVkLWN1cnNvci5kaXJlY3RpdmUnO1xyXG5pbXBvcnQge1JvdGF0aW9uRGlyZWN0aXZlfSBmcm9tICcuL3JvdGF0aW9uLmRpcmVjdGl2ZSc7XHJcbmltcG9ydCB7SW5pdFN0YXRlQ29tcG9uZW50fSBmcm9tICcuL2luaXQtc3RhdGUvaW5pdC1zdGF0ZS5jb21wb25lbnQnO1xyXG5pbXBvcnQge1JlbmRlclByaW50U2VydmljZX0gZnJvbSBcIi4vcmVuZGVyLXByaW50LnNlcnZpY2VcIjtcclxuaW1wb3J0IHtSZW5kZXJQcmludERpcmVjdGl2ZX0gZnJvbSAnLi9yZW5kZXItcHJpbnQuZGlyZWN0aXZlJztcclxuaW1wb3J0IHtFcnJvck1vZGFsQ29tcG9uZW50fSBmcm9tICcuL2Vycm9yLW1vZGFsL2Vycm9yLW1vZGFsLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7UGFzc3dvcmRSZXF1aXJlZENvbXBvbmVudH0gZnJvbSAnLi9wYXNzd29yZC1yZXF1aXJlZC9wYXNzd29yZC1yZXF1aXJlZC5jb21wb25lbnQnO1xyXG5pbXBvcnQge0V4Y2VwdGlvbk1lc3NhZ2VTZXJ2aWNlfSBmcm9tIFwiLi9leGNlcHRpb24tbWVzc2FnZS5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7UGFzc3dvcmRTZXJ2aWNlfSBmcm9tIFwiLi9wYXNzd29yZC5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7RXJyb3JJbnRlcmNlcHRvclNlcnZpY2V9IGZyb20gXCIuL2Vycm9yLWludGVyY2VwdG9yLnNlcnZpY2VcIjtcclxuaW1wb3J0IHtTZWFyY2hDb21wb25lbnR9IGZyb20gJy4vc2VhcmNoL3NlYXJjaC5jb21wb25lbnQnO1xyXG5pbXBvcnQge1NlYXJjaGFibGVEaXJlY3RpdmV9IGZyb20gJy4vc2VhcmNoYWJsZS5kaXJlY3RpdmUnO1xyXG5pbXBvcnQge1NlYXJjaFNlcnZpY2V9IGZyb20gXCIuL3NlYXJjaC5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7V2luZG93U2VydmljZX0gZnJvbSBcIi4vd2luZG93LnNlcnZpY2VcIjtcclxuaW1wb3J0IHtWaWV3cG9ydFNlcnZpY2V9IGZyb20gXCIuL3ZpZXdwb3J0LnNlcnZpY2VcIjtcclxuaW1wb3J0IHtUYWJiZWRUb29sYmFyc0NvbXBvbmVudH0gZnJvbSAnLi90YWJiZWQtdG9vbGJhcnMvdGFiYmVkLXRvb2xiYXJzLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7VGFiQ29tcG9uZW50fSBmcm9tIFwiLi90YWIvdGFiLmNvbXBvbmVudFwiO1xyXG5pbXBvcnQge1RhYnNDb21wb25lbnR9IGZyb20gXCIuL3RhYnMvdGFicy5jb21wb25lbnRcIjtcclxuaW1wb3J0IHtGb3JtYXR0aW5nU2VydmljZX0gZnJvbSBcIi4vZm9ybWF0dGluZy5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7Q29sb3JQaWNrZXJDb21wb25lbnR9IGZyb20gJy4vY29sb3ItcGlja2VyL2NvbG9yLXBpY2tlci5jb21wb25lbnQnO1xyXG5pbXBvcnQge0Zvcm1hdHRpbmdEaXJlY3RpdmV9IGZyb20gJy4vZm9ybWF0dGluZy5kaXJlY3RpdmUnO1xyXG5pbXBvcnQge0JhY2tGb3JtYXR0aW5nU2VydmljZX0gZnJvbSBcIi4vYmFjay1mb3JtYXR0aW5nLnNlcnZpY2VcIjtcclxuaW1wb3J0IHtPbkNsb3NlU2VydmljZX0gZnJvbSBcIi4vb24tY2xvc2Uuc2VydmljZVwiO1xyXG5pbXBvcnQge1N1Y2Nlc3NNb2RhbENvbXBvbmVudH0gZnJvbSAnLi9zdWNjZXNzLW1vZGFsL3N1Y2Nlc3MtbW9kYWwuY29tcG9uZW50JztcclxuaW1wb3J0IHtFZGl0b3JEaXJlY3RpdmV9IGZyb20gJy4vZWRpdG9yLmRpcmVjdGl2ZSc7XHJcbmltcG9ydCB7TG9hZGluZ01hc2tDb21wb25lbnR9IGZyb20gJy4vbG9hZGluZy1tYXNrL2xvYWRpbmctbWFzay5jb21wb25lbnQnO1xyXG5pbXBvcnQge0xvYWRpbmdNYXNrU2VydmljZX0gZnJvbSAnLi9sb2FkaW5nLW1hc2suc2VydmljZSc7XHJcbmltcG9ydCB7TG9hZGluZ01hc2tJbnRlcmNlcHRvclNlcnZpY2V9IGZyb20gXCIuL2xvYWRpbmctbWFzay1pbnRlcmNlcHRvci5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7VGFiQWN0aXZhdG9yU2VydmljZX0gZnJvbSBcIi4vdGFiLWFjdGl2YXRvci5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7XHJcbiAgRHJvcERvd25Db21wb25lbnQsXHJcbiAgRHJvcERvd25JdGVtQ29tcG9uZW50LFxyXG4gIERyb3BEb3duSXRlbXNDb21wb25lbnQsXHJcbiAgRHJvcERvd25Ub2dnbGVDb21wb25lbnRcclxufSBmcm9tICcuL2Ryb3AtZG93bi9kcm9wLWRvd24uY29tcG9uZW50JztcclxuaW1wb3J0IHtDbGlja091dHNpZGVNb2R1bGV9IGZyb20gJ25nLWNsaWNrLW91dHNpZGUnO1xyXG5pbXBvcnQge0xlZnRTaWRlQmFyQ29tcG9uZW50fSBmcm9tICcuL2xlZnQtc2lkZS1iYXIvbGVmdC1zaWRlLWJhci5jb21wb25lbnQnO1xyXG5pbXBvcnQge1Rvb2x0aXBEaXJlY3RpdmV9IGZyb20gJy4vdG9vbHRpcC5kaXJlY3RpdmUnO1xyXG5pbXBvcnQge0FkZER5bmFtaWNDb21wb25lbnRTZXJ2aWNlfSBmcm9tIFwiLi9hZGQtZHluYW1pYy1jb21wb25lbnQuc2VydmljZVwiO1xyXG5pbXBvcnQge0hvc3REeW5hbWljRGlyZWN0aXZlfSBmcm9tICcuL2hvc3QtZHluYW1pYy5kaXJlY3RpdmUnO1xyXG5pbXBvcnQge0hvc3RpbmdEeW5hbWljQ29tcG9uZW50U2VydmljZX0gZnJvbSBcIi4vaG9zdGluZy1keW5hbWljLWNvbXBvbmVudC5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7UmVzaXppbmdDb21wb25lbnR9IGZyb20gJy4vcmVzaXppbmcvcmVzaXppbmcuY29tcG9uZW50JztcclxuaW1wb3J0IHtUb3BUYWJDb21wb25lbnR9IGZyb20gJy4vdG9wLXRhYi90b3AtdGFiLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7VG9wVGFiQWN0aXZhdG9yU2VydmljZX0gZnJvbSBcIi4vdG9wLXRhYi1hY3RpdmF0b3Iuc2VydmljZVwiO1xyXG5pbXBvcnQge1RleHRNZW51Q29tcG9uZW50fSBmcm9tICcuL3RleHQtbWVudS90ZXh0LW1lbnUuY29tcG9uZW50JztcclxuaW1wb3J0IHtDb250ZXh0TWVudUNvbXBvbmVudH0gZnJvbSAnLi9jb250ZXh0LW1lbnUvY29udGV4dC1tZW51LmNvbXBvbmVudCc7XHJcblxyXG5jb25zdCBwcm92aWRlcnMgPSBbQ29uZmlnU2VydmljZSxcclxuICBBcGksXHJcbiAgTW9kYWxTZXJ2aWNlLFxyXG4gIEZpbGVTZXJ2aWNlLFxyXG4gIEZpbGVNb2RlbCxcclxuICBGaWxlUHJvcGVydHlNb2RlbCxcclxuICBGaWxlVXRpbCxcclxuICBVdGlscyxcclxuICBTYW5pdGl6ZUh0bWxQaXBlLFxyXG4gIFNhbml0aXplUmVzb3VyY2VIdG1sUGlwZSxcclxuICBTYW5pdGl6ZVN0eWxlUGlwZSxcclxuICBIaWdobGlnaHRTZWFyY2hQaXBlLFxyXG4gIFVwbG9hZEZpbGVzU2VydmljZSxcclxuICBSZW5kZXJQcmludFNlcnZpY2UsXHJcbiAgTmF2aWdhdGVTZXJ2aWNlLFxyXG4gIFBhZ2VQcmVsb2FkU2VydmljZSxcclxuICBab29tU2VydmljZSxcclxuICBFeGNlcHRpb25NZXNzYWdlU2VydmljZSxcclxuICBQYXNzd29yZFNlcnZpY2UsXHJcbiAgRXJyb3JJbnRlcmNlcHRvclNlcnZpY2UsXHJcbiAgU2VhcmNoU2VydmljZSxcclxuICBXaW5kb3dTZXJ2aWNlLFxyXG4gIFZpZXdwb3J0U2VydmljZSxcclxuICBGb3JtYXR0aW5nU2VydmljZSxcclxuICBCYWNrRm9ybWF0dGluZ1NlcnZpY2UsXHJcbiAgT25DbG9zZVNlcnZpY2UsXHJcbiAgTG9hZGluZ01hc2tJbnRlcmNlcHRvclNlcnZpY2UsXHJcbiAgTG9hZGluZ01hc2tTZXJ2aWNlLFxyXG4gIFRhYkFjdGl2YXRvclNlcnZpY2UsXHJcbiAgQWRkRHluYW1pY0NvbXBvbmVudFNlcnZpY2UsXHJcbiAgSG9zdGluZ0R5bmFtaWNDb21wb25lbnRTZXJ2aWNlLFxyXG4gIFRvcFRhYkFjdGl2YXRvclNlcnZpY2VdO1xyXG5cclxuQE5nTW9kdWxlKHtcclxuICBpbXBvcnRzOiBbQ29tbW9uTW9kdWxlLCBGb250QXdlc29tZU1vZHVsZSwgQ2xpY2tPdXRzaWRlTW9kdWxlXSxcclxuICBkZWNsYXJhdGlvbnM6IFtcclxuICAgIFRvcFRvb2xiYXJDb21wb25lbnQsXHJcbiAgICBTaWRlUGFuZWxDb21wb25lbnQsXHJcbiAgICBCdXR0b25Db21wb25lbnQsXHJcbiAgICBMb2dvQ29tcG9uZW50LFxyXG4gICAgVG9vbHRpcENvbXBvbmVudCxcclxuICAgIE1vZGFsQ29tcG9uZW50LFxyXG4gICAgQnJvd3NlRmlsZXNNb2RhbENvbXBvbmVudCxcclxuICAgIERvY3VtZW50Q29tcG9uZW50LFxyXG4gICAgUGFnZUNvbXBvbmVudCxcclxuICAgIFNhbml0aXplSHRtbFBpcGUsXHJcbiAgICBTYW5pdGl6ZVJlc291cmNlSHRtbFBpcGUsXHJcbiAgICBTYW5pdGl6ZVN0eWxlUGlwZSxcclxuICAgIEhpZ2hsaWdodFNlYXJjaFBpcGUsXHJcbiAgICBVcGxvYWRGaWxlWm9uZUNvbXBvbmVudCxcclxuICAgIERuZERpcmVjdGl2ZSxcclxuICAgIFNjcm9sbGFibGVEaXJlY3RpdmUsXHJcbiAgICBab29tRGlyZWN0aXZlLFxyXG4gICAgU2VsZWN0Q29tcG9uZW50LFxyXG4gICAgRGlzYWJsZWRDdXJzb3JEaXJlY3RpdmUsXHJcbiAgICBSb3RhdGlvbkRpcmVjdGl2ZSxcclxuICAgIEluaXRTdGF0ZUNvbXBvbmVudCxcclxuICAgIFJlbmRlclByaW50RGlyZWN0aXZlLFxyXG4gICAgRXJyb3JNb2RhbENvbXBvbmVudCxcclxuICAgIFBhc3N3b3JkUmVxdWlyZWRDb21wb25lbnQsXHJcbiAgICBTZWFyY2hDb21wb25lbnQsXHJcbiAgICBTZWFyY2hhYmxlRGlyZWN0aXZlLFxyXG4gICAgVGFiYmVkVG9vbGJhcnNDb21wb25lbnQsXHJcbiAgICBUYWJDb21wb25lbnQsXHJcbiAgICBUYWJzQ29tcG9uZW50LFxyXG4gICAgQ29sb3JQaWNrZXJDb21wb25lbnQsXHJcbiAgICBGb3JtYXR0aW5nRGlyZWN0aXZlLFxyXG4gICAgU3VjY2Vzc01vZGFsQ29tcG9uZW50LFxyXG4gICAgRWRpdG9yRGlyZWN0aXZlLFxyXG4gICAgTG9hZGluZ01hc2tDb21wb25lbnQsXHJcbiAgICBEcm9wRG93bkNvbXBvbmVudCxcclxuICAgIERyb3BEb3duSXRlbUNvbXBvbmVudCxcclxuICAgIERyb3BEb3duSXRlbXNDb21wb25lbnQsXHJcbiAgICBEcm9wRG93blRvZ2dsZUNvbXBvbmVudCxcclxuICAgIExlZnRTaWRlQmFyQ29tcG9uZW50LFxyXG4gICAgVG9vbHRpcERpcmVjdGl2ZSxcclxuICAgIEhvc3REeW5hbWljRGlyZWN0aXZlLFxyXG4gICAgUmVzaXppbmdDb21wb25lbnQsXHJcbiAgICBUb3BUYWJDb21wb25lbnQsXHJcbiAgICBUZXh0TWVudUNvbXBvbmVudCxcclxuICAgIENvbnRleHRNZW51Q29tcG9uZW50XHJcbiAgXSxcclxuICBleHBvcnRzOiBbXHJcbiAgICBUb3BUb29sYmFyQ29tcG9uZW50LFxyXG4gICAgU2lkZVBhbmVsQ29tcG9uZW50LFxyXG4gICAgQnV0dG9uQ29tcG9uZW50LFxyXG4gICAgTG9nb0NvbXBvbmVudCxcclxuICAgIFRvb2x0aXBDb21wb25lbnQsXHJcbiAgICBNb2RhbENvbXBvbmVudCxcclxuICAgIEJyb3dzZUZpbGVzTW9kYWxDb21wb25lbnQsXHJcbiAgICBEb2N1bWVudENvbXBvbmVudCxcclxuICAgIFBhZ2VDb21wb25lbnQsXHJcbiAgICBTYW5pdGl6ZVJlc291cmNlSHRtbFBpcGUsXHJcbiAgICBTYW5pdGl6ZVN0eWxlUGlwZSxcclxuICAgIEhpZ2hsaWdodFNlYXJjaFBpcGUsXHJcbiAgICBTYW5pdGl6ZUh0bWxQaXBlLFxyXG4gICAgVXBsb2FkRmlsZVpvbmVDb21wb25lbnQsXHJcbiAgICBTY3JvbGxhYmxlRGlyZWN0aXZlLFxyXG4gICAgU2VsZWN0Q29tcG9uZW50LFxyXG4gICAgUm90YXRpb25EaXJlY3RpdmUsXHJcbiAgICBJbml0U3RhdGVDb21wb25lbnQsXHJcbiAgICBSZW5kZXJQcmludERpcmVjdGl2ZSxcclxuICAgIEVycm9yTW9kYWxDb21wb25lbnQsXHJcbiAgICBQYXNzd29yZFJlcXVpcmVkQ29tcG9uZW50LFxyXG4gICAgU2VhcmNoQ29tcG9uZW50LFxyXG4gICAgU2VhcmNoYWJsZURpcmVjdGl2ZSxcclxuICAgIFRhYmJlZFRvb2xiYXJzQ29tcG9uZW50LFxyXG4gICAgVGFiQ29tcG9uZW50LFxyXG4gICAgVGFic0NvbXBvbmVudCxcclxuICAgIENvbG9yUGlja2VyQ29tcG9uZW50LFxyXG4gICAgRm9ybWF0dGluZ0RpcmVjdGl2ZSxcclxuICAgIFN1Y2Nlc3NNb2RhbENvbXBvbmVudCxcclxuICAgIExvYWRpbmdNYXNrQ29tcG9uZW50LFxyXG4gICAgRG5kRGlyZWN0aXZlLFxyXG4gICAgRHJvcERvd25Db21wb25lbnQsXHJcbiAgICBEcm9wRG93bkl0ZW1Db21wb25lbnQsXHJcbiAgICBEcm9wRG93bkl0ZW1zQ29tcG9uZW50LFxyXG4gICAgRHJvcERvd25Ub2dnbGVDb21wb25lbnQsXHJcbiAgICBab29tRGlyZWN0aXZlLFxyXG4gICAgRHJvcERvd25Ub2dnbGVDb21wb25lbnQsXHJcbiAgICBMZWZ0U2lkZUJhckNvbXBvbmVudCxcclxuICAgIFRvb2x0aXBEaXJlY3RpdmUsXHJcbiAgICBIb3N0RHluYW1pY0RpcmVjdGl2ZSxcclxuICAgIFJlc2l6aW5nQ29tcG9uZW50LFxyXG4gICAgVG9wVGFiQ29tcG9uZW50LFxyXG4gICAgVGV4dE1lbnVDb21wb25lbnQsXHJcbiAgICBDb250ZXh0TWVudUNvbXBvbmVudFxyXG4gIF0sXHJcbiAgcHJvdmlkZXJzOiBwcm92aWRlcnNcclxufSlcclxuZXhwb3J0IGNsYXNzIENvbW1vbkNvbXBvbmVudHNNb2R1bGUge1xyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgbGlicmFyeS5hZGQoZmFzLCBmYXIpO1xyXG4gIH1cclxufVxyXG4iXX0=