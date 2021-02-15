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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tbW9uLWNvbXBvbmVudHMubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdyb3VwZG9jcy5leGFtcGxlcy5hbmd1bGFyL2NvbW1vbi1jb21wb25lbnRzLyIsInNvdXJjZXMiOlsibGliL2NvbW1vbi1jb21wb25lbnRzLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFDLFFBQVEsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUN2QyxPQUFPLEVBQUMsWUFBWSxFQUFDLE1BQU0saUJBQWlCLENBQUM7QUFDN0MsT0FBTyxFQUFDLG1CQUFtQixFQUFDLE1BQU0scUNBQXFDLENBQUM7QUFDeEUsT0FBTyxFQUFDLGtCQUFrQixFQUFDLE1BQU0sbUNBQW1DLENBQUM7QUFDckUsT0FBTyxFQUFDLGVBQWUsRUFBQyxNQUFNLDJCQUEyQixDQUFDO0FBQzFELE9BQU8sRUFBQyxhQUFhLEVBQUMsTUFBTSx1QkFBdUIsQ0FBQztBQUNwRCxPQUFPLEVBQUMsZ0JBQWdCLEVBQUMsTUFBTSw2QkFBNkIsQ0FBQztBQUM3RCxPQUFPLEVBQUMsaUJBQWlCLEVBQUMsTUFBTSxrQ0FBa0MsQ0FBQztBQUNuRSxPQUFPLEVBQUMsT0FBTyxFQUFDLE1BQU0sbUNBQW1DLENBQUM7QUFDMUQsT0FBTyxFQUFDLEdBQUcsRUFBQyxNQUFNLG1DQUFtQyxDQUFDO0FBQ3RELE9BQU8sRUFBQyxHQUFHLEVBQUMsTUFBTSxxQ0FBcUMsQ0FBQztBQUN4RCxPQUFPLEVBQUMsR0FBRyxFQUFFLGFBQWEsR0FBRSxNQUFNLGtCQUFrQixDQUFDO0FBQ3JELE9BQU8sRUFBQyxZQUFZLEVBQUMsTUFBTSxpQkFBaUIsQ0FBQztBQUM3QyxPQUFPLEVBQUMsY0FBYyxFQUFDLE1BQU0seUJBQXlCLENBQUM7QUFDdkQsT0FBTyxFQUFDLHlCQUF5QixFQUFDLE1BQU0sbURBQW1ELENBQUM7QUFDNUYsT0FBTyxFQUFDLFNBQVMsRUFBRSxXQUFXLEVBQUUsUUFBUSxFQUFFLEtB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Q3BCLGlCQUFpQjt3QkFDakIsZUFBZTt3QkFDZixpQkFBaUI7d0JBQ2pCLG9CQUFvQjtxQkFDckI7b0JBQ0QsT0FBTyxFQUFFO3dCQUNQLG1CQUFtQjt3QkFDbkIsa0JBQWtCO3dCQUNsQixlQUFlO3dCQUNmLGFBQWE7d0JBQ2IsZ0JBQWdCO3dCQUNoQixjQUFjO3dCQUNkLHlCQUF5Qjt3QkFDekIsaUJBQWlCO3dCQUNqQixhQUFhO3dCQUNiLHdCQUF3Qjt3QkFDeEIsaUJBQWlCO3dCQUNqQixtQkFBbUI7d0JBQ25CLGdCQUFnQjt3QkFDaEIsdUJBQXVCO3dCQUN2QixtQkFBbUI7d0JBQ25CLG1CQUFtQjt3QkFDbkIsZUFBZTt3QkFDZixpQkFBaUI7d0JBQ2pCLGtCQUFrQjt3QkFDbEIsb0JBQW9CO3dCQUNwQixtQkFBbUI7d0JBQ25CLHlCQUF5Qjt3QkFDekIsZUFBZTt3QkFDZixtQkFBbUI7d0JBQ25CLHVCQUF1Qjt3QkFDdkIsWUFBWTt3QkFDWixhQUFhO3dCQUNiLG9CQUFvQjt3QkFDcEIsbUJBQW1CO3dCQUNuQixxQkFBcUI7d0JBQ3JCLG9CQUFvQjt3QkFDcEIsWUFBWTt3QkFDWixpQkFBaUI7d0JBQ2pCLHFCQUFxQjt3QkFDckIsc0JBQXNCO3dCQUN0Qix1QkFBdUI7d0JBQ3ZCLGFBQWE7d0JBQ2IsdUJBQXVCO3dCQUN2QixvQkFBb0I7d0JBQ3BCLGdCQUFnQjt3QkFDaEIsb0JBQW9CO3dCQUNwQixpQkFBaUI7d0JBQ2pCLGVBQWU7d0JBQ2YsaUJBQWlCO3dCQUNqQixvQkFBb0I7cUJBQ3JCO29CQUNELFNBQVMsRUFBRSxTQUFTO2lCQUNyQjs7OztJQUtELDZCQUFDO0NBQUEsQUF2R0QsSUF1R0M7U0FKWSxzQkFBc0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge05nTW9kdWxlfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7Q29tbW9uTW9kdWxlfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHtUb3BUb29sYmFyQ29tcG9uZW50fSBmcm9tICcuL3RvcC10b29sYmFyL3RvcC10b29sYmFyLmNvbXBvbmVudCc7XG5pbXBvcnQge1NpZGVQYW5lbENvbXBvbmVudH0gZnJvbSAnLi9zaWRlLXBhbmVsL3NpZGUtcGFuZWwuY29tcG9uZW50JztcbmltcG9ydCB7QnV0dG9uQ29tcG9uZW50fSBmcm9tICcuL2J1dHRvbi9idXR0b24uY29tcG9uZW50JztcbmltcG9ydCB7TG9nb0NvbXBvbmVudH0gZnJvbSAnLi9sb2dvL2xvZ28uY29tcG9uZW50JztcbmltcG9ydCB7VG9vbHRpcENvbXBvbmVudH0gZnJvbSAnLi90b29sdGlwL3Rvb2x0aXAuY29tcG9uZW50JztcbmltcG9ydCB7Rm9udEF3ZXNvbWVNb2R1bGV9IGZyb20gJ0Bmb3J0YXdlc29tZS9hbmd1bGFyLWZvbnRhd2Vzb21lJztcbmltcG9ydCB7bGlicmFyeX0gZnJvbSAnQGZvcnRhd2Vzb21lL2ZvbnRhd2Vzb21lLXN2Zy1jb3JlJztcbmltcG9ydCB7ZmFzfSBmcm9tICdAZm9ydGF3ZXNvbWUvZnJlZS1zb2xpZC1zdmctaWNvbnMnO1xuaW1wb3J0IHtmYXJ9IGZyb20gJ0Bmb3J0YXdlc29tZS9mcmVlLXJlZ3VsYXItc3ZnLWljb25zJztcbmltcG9ydCB7QXBpLCBDb25maWdTZXJ2aWNlLH0gZnJvbSBcIi4vY29uZmlnLnNlcnZpY2VcIjtcbmltcG9ydCB7TW9kYWxTZXJ2aWNlfSBmcm9tIFwiLi9tb2RhbC5zZXJ2aWNlXCI7XG5pbXBvcnQge01vZGFsQ29tcG9uZW50fSBmcm9tICcuL21vZGFsL21vZGFsLmNvbXBvbmVudCc7XG5pbXBvcnQge0Jyb3dzZUZpbGVzTW9kYWxDb21wb25lbnR9IGZyb20gJy4vYnJvd3NlLWZpbGVzLW1vZGFsL2Jyb3dzZS1maWxlcy1tb2RhbC5jb21wb25lbnQnO1xuaW1wb3J0IHtGaWxlTW9kZWwsIEZpbGVTZXJ2aWNlLCBGaWxlVXRpbCwgVXRpbHN9IGZyb20gXCIuL2ZpbGUuc2VydmljZVwiO1xuaW1wb3J0IHtEb2N1bWVudENvbXBvbmVudH0gZnJvbSAnLi9kb2N1bWVudC9kb2N1bWVudC5jb21wb25lbnQnO1xuaW1wb3J0IHtQYWdlQ29tcG9uZW50fSBmcm9tICcuL3BhZ2UvcGFnZS5jb21wb25lbnQnO1xuaW1wb3J0IHtIaWdobGlnaHRTZWFyY2hQaXBlLCBTYW5pdGl6ZUh0bWxQaXBlLCBTYW5pdGl6ZVJlc291cmNlSHRtbFBpcGUsIFNhbml0aXplU3R5bGVQaXBlfSBmcm9tIFwiLi9waXBlc1wiO1xuaW1wb3J0IHtVcGxvYWRGaWxlWm9uZUNvbXBvbmVudH0gZnJvbSAnLi91cGxvYWQtZmlsZS16b25lL3VwbG9hZC1maWxlLXpvbmUuY29tcG9uZW50JztcbmltcG9ydCB7VXBsb2FkRmlsZXNTZXJ2aWNlfSBmcm9tIFwiLi91cGxvYWQtZmlsZXMuc2VydmljZVwiO1xuaW1wb3J0IHtEbmREaXJlY3RpdmV9IGZyb20gJy4vZG5kLmRpcmVjdGl2ZSc7XG5pbXBvcnQge1Njcm9sbGFibGVEaXJlY3RpdmV9IGZyb20gJy4vc2Nyb2xsYWJsZS5kaXJlY3RpdmUnO1xuaW1wb3J0IHtNb3VzZVdoZWVsRGlyZWN0aXZlfSBmcm9tICcuL21vdXNld2hlZWwuZGlyZWN0aXZlJztcbmltcG9ydCB7TmF2aWdhdGVTZXJ2aWNlfSBmcm9tIFwiLi9uYXZpZ2F0ZS5zZXJ2aWNlXCI7XG5pbXBvcnQge1BhZ2VQcmVsb2FkU2VydmljZX0gZnJvbSBcIi4vcGFnZS1wcmVsb2FkLnNlcnZpY2VcIjtcbmltcG9ydCB7Wm9vbURpcmVjdGl2ZX0gZnJvbSAnLi96b29tLmRpcmVjdGl2ZSc7XG5pbXBvcnQge1pvb21TZXJ2aWNlfSBmcm9tIFwiLi96b29tLnNlcnZpY2VcIjtcbmltcG9ydCB7U2VsZWN0Q29tcG9uZW50fSBmcm9tICcuL3NlbGVjdC9zZWxlY3QuY29tcG9uZW50JztcbmltcG9ydCB7RGlzYWJsZWRDdXJzb3JEaXJlY3RpdmV9IGZyb20gJy4vZGlzYWJsZWQtY3Vyc29yLmRpcmVjdGl2ZSc7XG5pbXBvcnQge1JvdGF0aW9uRGlyZWN0aXZlfSBmcm9tICcuL3JvdGF0aW9uLmRpcmVjdGl2ZSc7XG5pbXBvcnQge0luaXRTdGF0ZUNvbXBvbmVudH0gZnJvbSAnLi9pbml0LXN0YXRlL2luaXQtc3RhdGUuY29tcG9uZW50JztcbmltcG9ydCB7UmVuZGVyUHJpbnRTZXJ2aWNlfSBmcm9tIFwiLi9yZW5kZXItcHJpbnQuc2VydmljZVwiO1xuaW1wb3J0IHtSZW5kZXJQcmludERpcmVjdGl2ZX0gZnJvbSAnLi9yZW5kZXItcHJpbnQuZGlyZWN0aXZlJztcbmltcG9ydCB7RXJyb3JNb2RhbENvbXBvbmVudH0gZnJvbSAnLi9lcnJvci1tb2RhbC9lcnJvci1tb2RhbC5jb21wb25lbnQnO1xuaW1wb3J0IHtQYXNzd29yZFJlcXVpcmVkQ29tcG9uZW50fSBmcm9tICcuL3Bhc3N3b3JkLXJlcXVpcmVkL3Bhc3N3b3JkLXJlcXVpcmVkLmNvbXBvbmVudCc7XG5pbXBvcnQge0V4Y2VwdGlvbk1lc3NhZ2VTZXJ2aWNlfSBmcm9tIFwiLi9leGNlcHRpb24tbWVzc2FnZS5zZXJ2aWNlXCI7XG5pbXBvcnQge1Bhc3N3b3JkU2VydmljZX0gZnJvbSBcIi4vcGFzc3dvcmQuc2VydmljZVwiO1xuaW1wb3J0IHtFcnJvckludGVyY2VwdG9yU2VydmljZX0gZnJvbSBcIi4vZXJyb3ItaW50ZXJjZXB0b3Iuc2VydmljZVwiO1xuaW1wb3J0IHtTZWFyY2hDb21wb25lbnR9IGZyb20gJy4vc2VhcmNoL3NlYXJjaC5jb21wb25lbnQnO1xuaW1wb3J0IHtTZWFyY2hhYmxlRGlyZWN0aXZlfSBmcm9tICcuL3NlYXJjaGFibGUuZGlyZWN0aXZlJztcbmltcG9ydCB7U2VhcmNoU2VydmljZX0gZnJvbSBcIi4vc2VhcmNoLnNlcnZpY2VcIjtcbmltcG9ydCB7V2luZG93U2VydmljZX0gZnJvbSBcIi4vd2luZG93LnNlcnZpY2VcIjtcbmltcG9ydCB7Vmlld3BvcnRTZXJ2aWNlfSBmcm9tIFwiLi92aWV3cG9ydC5zZXJ2aWNlXCI7XG5pbXBvcnQge1RhYmJlZFRvb2xiYXJzQ29tcG9uZW50fSBmcm9tICcuL3RhYmJlZC10b29sYmFycy90YWJiZWQtdG9vbGJhcnMuY29tcG9uZW50JztcbmltcG9ydCB7VGFiQ29tcG9uZW50fSBmcm9tIFwiLi90YWIvdGFiLmNvbXBvbmVudFwiO1xuaW1wb3J0IHtUYWJzQ29tcG9uZW50fSBmcm9tIFwiLi90YWJzL3RhYnMuY29tcG9uZW50XCI7XG5pbXBvcnQge0Zvcm1hdHRpbmdTZXJ2aWNlfSBmcm9tIFwiLi9mb3JtYXR0aW5nLnNlcnZpY2VcIjtcbmltcG9ydCB7Q29sb3JQaWNrZXJDb21wb25lbnR9IGZyb20gJy4vY29sb3ItcGlja2VyL2NvbG9yLXBpY2tlci5jb21wb25lbnQnO1xuaW1wb3J0IHtGb3JtYXR0aW5nRGlyZWN0aXZlfSBmcm9tICcuL2Zvcm1hdHRpbmcuZGlyZWN0aXZlJztcbmltcG9ydCB7QmFja0Zvcm1hdHRpbmdTZXJ2aWNlfSBmcm9tIFwiLi9iYWNrLWZvcm1hdHRpbmcuc2VydmljZVwiO1xuaW1wb3J0IHtPbkNsb3NlU2VydmljZX0gZnJvbSBcIi4vb24tY2xvc2Uuc2VydmljZVwiO1xuaW1wb3J0IHtTdWNjZXNzTW9kYWxDb21wb25lbnR9IGZyb20gJy4vc3VjY2Vzcy1tb2RhbC9zdWNjZXNzLW1vZGFsLmNvbXBvbmVudCc7XG5pbXBvcnQge0VkaXRvckRpcmVjdGl2ZX0gZnJvbSAnLi9lZGl0b3IuZGlyZWN0aXZlJztcbmltcG9ydCB7TG9hZGluZ01hc2tDb21wb25lbnR9IGZyb20gJy4vbG9hZGluZy1tYXNrL2xvYWRpbmctbWFzay5jb21wb25lbnQnO1xuaW1wb3J0IHtMb2FkaW5nTWFza1NlcnZpY2V9IGZyb20gJy4vbG9hZGluZy1tYXNrLnNlcnZpY2UnO1xuaW1wb3J0IHtMb2FkaW5nTWFza0ludGVyY2VwdG9yU2VydmljZX0gZnJvbSBcIi4vbG9hZGluZy1tYXNrLWludGVyY2VwdG9yLnNlcnZpY2VcIjtcbmltcG9ydCB7VGFiQWN0aXZhdG9yU2VydmljZX0gZnJvbSBcIi4vdGFiLWFjdGl2YXRvci5zZXJ2aWNlXCI7XG5pbXBvcnQge1xuICBEcm9wRG93bkNvbXBvbmVudCxcbiAgRHJvcERvd25JdGVtQ29tcG9uZW50LFxuICBEcm9wRG93bkl0ZW1zQ29tcG9uZW50LFxuICBEcm9wRG93blRvZ2dsZUNvbXBvbmVudFxufSBmcm9tICcuL2Ryb3AtZG93bi9kcm9wLWRvd24uY29tcG9uZW50JztcbmltcG9ydCB7Q2xpY2tPdXRzaWRlTW9kdWxlfSBmcm9tICduZy1jbGljay1vdXRzaWRlJztcbmltcG9ydCB7TGVmdFNpZGVCYXJDb21wb25lbnR9IGZyb20gJy4vbGVmdC1zaWRlLWJhci9sZWZ0LXNpZGUtYmFyLmNvbXBvbmVudCc7XG5pbXBvcnQge1Rvb2x0aXBEaXJlY3RpdmV9IGZyb20gJy4vdG9vbHRpcC5kaXJlY3RpdmUnO1xuaW1wb3J0IHtBZGREeW5hbWljQ29tcG9uZW50U2VydmljZX0gZnJvbSBcIi4vYWRkLWR5bmFtaWMtY29tcG9uZW50LnNlcnZpY2VcIjtcbmltcG9ydCB7SG9zdER5bmFtaWNEaXJlY3RpdmV9IGZyb20gJy4vaG9zdC1keW5hbWljLmRpcmVjdGl2ZSc7XG5pbXBvcnQge0hvc3RpbmdEeW5hbWljQ29tcG9uZW50U2VydmljZX0gZnJvbSBcIi4vaG9zdGluZy1keW5hbWljLWNvbXBvbmVudC5zZXJ2aWNlXCI7XG5pbXBvcnQge1Jlc2l6aW5nQ29tcG9uZW50fSBmcm9tICcuL3Jlc2l6aW5nL3Jlc2l6aW5nLmNvbXBvbmVudCc7XG5pbXBvcnQge1RvcFRhYkNvbXBvbmVudH0gZnJvbSAnLi90b3AtdGFiL3RvcC10YWIuY29tcG9uZW50JztcbmltcG9ydCB7VG9wVGFiQWN0aXZhdG9yU2VydmljZX0gZnJvbSBcIi4vdG9wLXRhYi1hY3RpdmF0b3Iuc2VydmljZVwiO1xuaW1wb3J0IHtUZXh0TWVudUNvbXBvbmVudH0gZnJvbSAnLi90ZXh0LW1lbnUvdGV4dC1tZW51LmNvbXBvbmVudCc7XG5pbXBvcnQge0NvbnRleHRNZW51Q29tcG9uZW50fSBmcm9tICcuL2NvbnRleHQtbWVudS9jb250ZXh0LW1lbnUuY29tcG9uZW50JztcblxuY29uc3QgcHJvdmlkZXJzID0gW0NvbmZpZ1NlcnZpY2UsXG4gIEFwaSxcbiAgTW9kYWxTZXJ2aWNlLFxuICBGaWxlU2VydmljZSxcbiAgRmlsZU1vZGVsLFxuICBGaWxlVXRpbCxcbiAgVXRpbHMsXG4gIFNhbml0aXplSHRtbFBpcGUsXG4gIFNhbml0aXplUmVzb3VyY2VIdG1sUGlwZSxcbiAgU2FuaXRpemVTdHlsZVBpcGUsXG4gIEhpZ2hsaWdodFNlYXJjaFBpcGUsXG4gIFVwbG9hZEZpbGVzU2VydmljZSxcbiAgUmVuZGVyUHJpbnRTZXJ2aWNlLFxuICBOYXZpZ2F0ZVNlcnZpY2UsXG4gIFBhZ2VQcmVsb2FkU2VydmljZSxcbiAgWm9vbVNlcnZpY2UsXG4gIEV4Y2VwdGlvbk1lc3NhZ2VTZXJ2aWNlLFxuICBQYXNzd29yZFNlcnZpY2UsXG4gIEVycm9ySW50ZXJjZXB0b3JTZXJ2aWNlLFxuICBTZWFyY2hTZXJ2aWNlLFxuICBXaW5kb3dTZXJ2aWNlLFxuICBWaWV3cG9ydFNlcnZpY2UsXG4gIEZvcm1hdHRpbmdTZXJ2aWNlLFxuICBCYWNrRm9ybWF0dGluZ1NlcnZpY2UsXG4gIE9uQ2xvc2VTZXJ2aWNlLFxuICBMb2FkaW5nTWFza0ludGVyY2VwdG9yU2VydmljZSxcbiAgTG9hZGluZ01hc2tTZXJ2aWNlLFxuICBUYWJBY3RpdmF0b3JTZXJ2aWNlLFxuICBBZGREeW5hbWljQ29tcG9uZW50U2VydmljZSxcbiAgSG9zdGluZ0R5bmFtaWNDb21wb25lbnRTZXJ2aWNlLFxuICBUb3BUYWJBY3RpdmF0b3JTZXJ2aWNlXTtcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW0NvbW1vbk1vZHVsZSwgRm9udEF3ZXNvbWVNb2R1bGUsIENsaWNrT3V0c2lkZU1vZHVsZV0sXG4gIGRlY2xhcmF0aW9uczogW1xuICAgIFRvcFRvb2xiYXJDb21wb25lbnQsXG4gICAgU2lkZVBhbmVsQ29tcG9uZW50LFxuICAgIEJ1dHRvbkNvbXBvbmVudCxcbiAgICBMb2dvQ29tcG9uZW50LFxuICAgIFRvb2x0aXBDb21wb25lbnQsXG4gICAgTW9kYWxDb21wb25lbnQsXG4gICAgQnJvd3NlRmlsZXNNb2RhbENvbXBvbmVudCxcbiAgICBEb2N1bWVudENvbXBvbmVudCxcbiAgICBQYWdlQ29tcG9uZW50LFxuICAgIFNhbml0aXplSHRtbFBpcGUsXG4gICAgU2FuaXRpemVSZXNvdXJjZUh0bWxQaXBlLFxuICAgIFNhbml0aXplU3R5bGVQaXBlLFxuICAgIEhpZ2hsaWdodFNlYXJjaFBpcGUsXG4gICAgVXBsb2FkRmlsZVpvbmVDb21wb25lbnQsXG4gICAgRG5kRGlyZWN0aXZlLFxuICAgIFNjcm9sbGFibGVEaXJlY3RpdmUsXG4gICAgTW91c2VXaGVlbERpcmVjdGl2ZSxcbiAgICBab29tRGlyZWN0aXZlLFxuICAgIFNlbGVjdENvbXBvbmVudCxcbiAgICBEaXNhYmxlZEN1cnNvckRpcmVjdGl2ZSxcbiAgICBSb3RhdGlvbkRpcmVjdGl2ZSxcbiAgICBJbml0U3RhdGVDb21wb25lbnQsXG4gICAgUmVuZGVyUHJpbnREaXJlY3RpdmUsXG4gICAgRXJyb3JNb2RhbENvbXBvbmVudCxcbiAgICBQYXNzd29yZFJlcXVpcmVkQ29tcG9uZW50LFxuICAgIFNlYXJjaENvbXBvbmVudCxcbiAgICBTZWFyY2hhYmxlRGlyZWN0aXZlLFxuICAgIFRhYmJlZFRvb2xiYXJzQ29tcG9uZW50LFxuICAgIFRhYkNvbXBvbmVudCxcbiAgICBUYWJzQ29tcG9uZW50LFxuICAgIENvbG9yUGlja2VyQ29tcG9uZW50LFxuICAgIEZvcm1hdHRpbmdEaXJlY3RpdmUsXG4gICAgU3VjY2Vzc01vZGFsQ29tcG9uZW50LFxuICAgIEVkaXRvckRpcmVjdGl2ZSxcbiAgICBMb2FkaW5nTWFza0NvbXBvbmVudCxcbiAgICBEcm9wRG93bkNvbXBvbmVudCxcbiAgICBEcm9wRG93bkl0ZW1Db21wb25lbnQsXG4gICAgRHJvcERvd25JdGVtc0NvbXBvbmVudCxcbiAgICBEcm9wRG93blRvZ2dsZUNvbXBvbmVudCxcbiAgICBMZWZ0U2lkZUJhckNvbXBvbmVudCxcbiAgICBUb29sdGlwRGlyZWN0aXZlLFxuICAgIEhvc3REeW5hbWljRGlyZWN0aXZlLFxuICAgIFJlc2l6aW5nQ29tcG9uZW50LFxuICAgIFRvcFRhYkNvbXBvbmVudCxcbiAgICBUZXh0TWVudUNvbXBvbmVudCxcbiAgICBDb250ZXh0TWVudUNvbXBvbmVudFxuICBdLFxuICBleHBvcnRzOiBbXG4gICAgVG9wVG9vbGJhckNvbXBvbmVudCxcbiAgICBTaWRlUGFuZWxDb21wb25lbnQsXG4gICAgQnV0dG9uQ29tcG9uZW50LFxuICAgIExvZ29Db21wb25lbnQsXG4gICAgVG9vbHRpcENvbXBvbmVudCxcbiAgICBNb2RhbENvbXBvbmVudCxcbiAgICBCcm93c2VGaWxlc01vZGFsQ29tcG9uZW50LFxuICAgIERvY3VtZW50Q29tcG9uZW50LFxuICAgIFBhZ2VDb21wb25lbnQsXG4gICAgU2FuaXRpemVSZXNvdXJjZUh0bWxQaXBlLFxuICAgIFNhbml0aXplU3R5bGVQaXBlLFxuICAgIEhpZ2hsaWdodFNlYXJjaFBpcGUsXG4gICAgU2FuaXRpemVIdG1sUGlwZSxcbiAgICBVcGxvYWRGaWxlWm9uZUNvbXBvbmVudCxcbiAgICBTY3JvbGxhYmxlRGlyZWN0aXZlLFxuICAgIE1vdXNlV2hlZWxEaXJlY3RpdmUsXG4gICAgU2VsZWN0Q29tcG9uZW50LFxuICAgIFJvdGF0aW9uRGlyZWN0aXZlLFxuICAgIEluaXRTdGF0ZUNvbXBvbmVudCxcbiAgICBSZW5kZXJQcmludERpcmVjdGl2ZSxcbiAgICBFcnJvck1vZGFsQ29tcG9uZW50LFxuICAgIFBhc3N3b3JkUmVxdWlyZWRDb21wb25lbnQsXG4gICAgU2VhcmNoQ29tcG9uZW50LFxuICAgIFNlYXJjaGFibGVEaXJlY3RpdmUsXG4gICAgVGFiYmVkVG9vbGJhcnNDb21wb25lbnQsXG4gICAgVGFiQ29tcG9uZW50LFxuICAgIFRhYnNDb21wb25lbnQsXG4gICAgQ29sb3JQaWNrZXJDb21wb25lbnQsXG4gICAgRm9ybWF0dGluZ0RpcmVjdGl2ZSxcbiAgICBTdWNjZXNzTW9kYWxDb21wb25lbnQsXG4gICAgTG9hZGluZ01hc2tDb21wb25lbnQsXG4gICAgRG5kRGlyZWN0aXZlLFxuICAgIERyb3BEb3duQ29tcG9uZW50LFxuICAgIERyb3BEb3duSXRlbUNvbXBvbmVudCxcbiAgICBEcm9wRG93bkl0ZW1zQ29tcG9uZW50LFxuICAgIERyb3BEb3duVG9nZ2xlQ29tcG9uZW50LFxuICAgIFpvb21EaXJlY3RpdmUsXG4gICAgRHJvcERvd25Ub2dnbGVDb21wb25lbnQsXG4gICAgTGVmdFNpZGVCYXJDb21wb25lbnQsXG4gICAgVG9vbHRpcERpcmVjdGl2ZSxcbiAgICBIb3N0RHluYW1pY0RpcmVjdGl2ZSxcbiAgICBSZXNpemluZ0NvbXBvbmVudCxcbiAgICBUb3BUYWJDb21wb25lbnQsXG4gICAgVGV4dE1lbnVDb21wb25lbnQsXG4gICAgQ29udGV4dE1lbnVDb21wb25lbnRcbiAgXSxcbiAgcHJvdmlkZXJzOiBwcm92aWRlcnNcbn0pXG5leHBvcnQgY2xhc3MgQ29tbW9uQ29tcG9uZW50c01vZHVsZSB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIGxpYnJhcnkuYWRkKGZhcywgZmFyKTtcbiAgfVxufVxuIl19