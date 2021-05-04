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
import { ExcelDocumentComponent } from './excel-document/excel-document.component';
import { PageComponent } from './page/page.component';
import { ExcelPageComponent } from './excel-page/excel-page.component';
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
import { ExcelPageService } from "./excel-page.service";
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
    TopTabActivatorService,
    ExcelPageService];
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
                        ExcelDocumentComponent,
                        PageComponent,
                        ExcelPageComponent,
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
                        ExcelDocumentComponent,
                        PageComponent,
                        ExcelPageComponent,
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
                        EditorDirective,
                        FormattingDirective
                    ],
                    providers: providers
                },] }
    ];
    /** @nocollapse */
    CommonComponentsModule.ctorParameters = function () { return []; };
    return CommonComponentsModule;
}());
export { CommonComponentsModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tbW9uLWNvbXBvbmVudHMubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdyb3VwZG9jcy5leGFtcGxlcy5hbmd1bGFyL2NvbW1vbi1jb21wb25lbnRzLyIsInNvdXJjZXMiOlsibGliL2NvbW1vbi1jb21wb25lbnRzLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFDLFFBQVEsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUN2QyxPQUFPLEVBQUMsWUFBWSxFQUFDLE1BQU0saUJBQWlCLENBQUM7QUFDN0MsT0FBTyxFQUFDLG1CQUFtQixFQUFDLE1BQU0scUNBQXFDLENBQUM7QUFDeEUsT0FBTyxFQUFDLGtCQUFrQixFQUFDLE1BQU0sbUNBQW1DLENBQUM7QUFDckUsT0FBTyxFQUFDLGVBQWUsRUFBQyxNQUFNLDJCQUEyQixDQUFDO0FBQzFELE9BQU8sRUFBQyxhQUFhLEVBQUMsTUFBTSx1QkFBdUIsQ0FBQztBQUNwRCxPQUFPLEVBQUMsZ0JBQWdCLEVBQUMsTUFBTSw2QkFBNkIsQ0FBQztBQUM3RCxPQUFPLEVBQUMsaUJBQWlCLEVBQUMsTUFBTSxrQ0FBa0MsQ0FBQztBQUNuRSxPQUFPLEVBQUMsT0FBTyxFQUFDLE1BQU0sbUNBQW1DLENBQUM7QUFDMUQsT0FBTyxFQUFDLEdBQUcsRUFBQyxNQUFNLG1DQUFtQyxDQUFDO0FBQ3RELE9BQU8sRUFBQyxHQUFHLEVBQUMsTUFBTSxxQ0FBcUMsQ0FBQztBQUN4RCxPQUFPLEVBQUMsR0FBRyxFQUFFLGFBQWEsR0FBRSxNQUFNLGtCQUFrQixDQUFDO0FBQ3JELE9BQU8sRUFBQyxZQUFZLEVBQUMsTUFBTSxpQkFBaUIsQ0FBQztBQUM3QyxPQUFPLEVBQUMsY0FBYyxFQUFDLE1BQU0seUJBQXlCLENBQUM7QUFDdkQsT0FBTyxFQUFDLHlCQUF5QixFQUFDLE1BQU0sbURBQW1ELENBQUM7QUFDNUYsT0FBTyxFQUFDLFNBQVMsRUFBRSxXQUFXLEVBQUUsUUFBUSxFQUFFLEtBQUssRUFBQyxNQUFNLGdCQUFnQixDQUFDO0FBQ3ZFLE9BQU8sRUFBQyxpQkFBaUIsRUFBQyxNQUFNLCtCQUErQixDQUFDO0FBQ2hFLE9BQU8sRUFBQyxzQkFBc0IsRUFBQyxNQUFNLDJDQUEyQyxDQUFDO0FBQ2pGLE9BQU8sRUFBQyxhQUFhLEVBQUMsTUFBTSx1QkFBdUIsQ0FBQztBQUNwRCxPQUFPLEVBQUMsa0JBQWtCLEVBQUMsTUFBTSxtQ0FBbUMsQ0FBQztBQUNyRSxPQUFPLEVBQUMsbUJBQW1CLEVBQUUsZ0JBQWdCLEVBQUUsd0JBQXdCLEVBQUUsaUJBQWlCLEVBQUMsTUFBTSxTQUFTLENBQUM7QUFDM0csT0FBTyxFQUFDLHVCQUF1QixFQUFDLE1BQU0sK0NBQStDLENBQUM7QUFDdEYsT0FBTyxFQUFDLGtCQUFrQixFQUFDLE1BQU0sd0JBQXdCLENBQUM7QUFDMUQsT0FBTyxFQUFDLFlBQVksRUFBQyxNQUFNLGlCQUFpQixDQUFDO0FBQzdDLE9BQU8sRUFBQyxtQkFBbUIsRUFBQyxNQUFNLHdCQUF3QixDQUFDO0FBQzNELE9BQU8sRUFBQyxtQkFBbUIsRUFBQyxNQUFNLHdCQUF3QixDQUFDO0FBQzNELE9BQU8sRUFBQyxlQUFlLEVBQUMsTUFBTSxvQkFBb0IsQ0FBQztBQUNuRCxPQUFPLEVBQUMsa0JBQWtCLEVBQUMsTUFBTSx3QkFBd0IsQ0FBQztBQUMxRCxPQUFPLEVBQUMsYUFBYSxFQUFDLE1BQU0sa0JBQWtCLENBQUM7QUFDL0MsT0FBTyxFQUFDLFdBQVcsRUFBQyxNQUFNLGdCQUFnQixDQUFDO0FBQzNDLE9BQU8sRUFBQyxlQUFlLEVBQUMsTUFBTSwyQkFBMkIsQ0FBQztBQUMxRCxPQUFPLEVBQUMsdUJBQXVCLEVBQUMsTUFBTSw2QkFBNkIsQ0FBQztBQUNwRSxPQUFPLEVBQUMsaUJBQWlCLEVBQUMsTUFBTSxzQkFBc0IsQ0FBQztBQUN2RCxPQUFPLEVBQUMsa0JBQWtCLEVBQUMsTUFBTSxtQ0FBbUMsQ0FBQztBQUNyRSxPQUFPLEVBQUMsa0JBQWtCLEVBQUMsTUFBTSx3QkFBd0IsQ0FBQztBQUMxRCxPQUFPLEVBQUMsb0JBQW9CLEVBQUMsTUFBTSwwQkFBMEIsQ0FBQztBQUM5RCxPQUFPLEVBQUMsbUJBQW1CLEVBQUMsTUFBTSxxQ0FBcUMsQ0FBQztBQUN4RSxPQUFPLEVBQUMseUJBQXlCLEVBQUMsTUFBTSxpREFBaUQsQ0FBQztBQUMxRixPQUFPLEVBQUMsdUJBQXVCLEVBQUMsTUFBTSw2QkFBNkIsQ0FBQztBQUNwRSxPQUFPLEVBQUMsZUFBZSxFQUFDLE1BQU0sb0JBQW9CLENBQUM7QUFDbkQsT0FBTyxFQUFDLHVCQUF1QixFQUFDLE1BQU0sNkJBQTZCLENBQUM7QUFDcEUsT0FBTyxFQUFDLGVBQWUsRUFBQyxNQUFNLDJCQUEyQixDQUFDO0FBQzFELE9BQU8sRUFBQyxtQkFBbUIsRUFBQyxNQUFNLHdCQUF3QixDQUFDO0FBQzNELE9BQU8sRUFBQyxhQUFhLEVBQUMsTUFBTSxrQkFBa0IsQ0FBQztBQUMvQyxPQUFPLEVBQUMsYUFBYSxFQUFDLE1BQU0sa0JBQWtCLENBQUM7QUFDL0MsT0FBTyxFQUFDLGVBQWUsRUFBQyxNQUFNLG9CQUFvQixDQUFDO0FBQ25ELE9BQU8sRUFBQyx1QkFBdUIsRUFBQyxNQUFNLDZDQUE2QyxDQUFDO0FBQ3BGLE9BQU8sRUFBQyxZQUFZLEVBQUMsTUFBTSxxQkFBcUIsQ0FBQztBQUNqRCxPQUFPLEVBQUMsYUFBYSxFQUFDLE1BQU0sdUJBQXVCLENBQUM7QUFDcEQsT0FBTyxFQUFDLGlCQUFpQixFQUFDLE1BQU0sc0JBQXNCLENBQUM7QUFDdkQsT0FBTyxFQUFDLG9CQUFvQixFQUFDLE1BQU0sdUNBQXVDLENBQUM7QUFDM0UsT0FBTyxFQUFDLG1CQUFtQixFQUFDLE1BQU0sd0JBQXdCLENBQUM7QUFDM0QsT0FBTyxFQUFDLHFCQUFxQixFQUFDLE1BQU0sMkJBQTJCLENBQUM7QUFDaEUsT0FBTyxFQUFDLGNBQWMsRUFBQyxNQUFNLG9CQUFvQixDQUFDO0FBQ2xELE9BQU8sRUFBQyxxQkFBcUIsRUFBQyxNQUFNLHlDQUF5QyxDQUFDO0FBQzlFLE9BQU8sRUFBQyxlQUFlLEVBQUMsTUFBTSxvQkFBb0IsQ0FBQztBQUNuRCxPQUFPLEVBQUMsb0JBQW9CLEVBQUMsTUFBTSx1Q0FBdUMsQ0FBQztBQUMzRSxPQUFPLEVBQUMsa0JBQWtCLEVBQUMsTUFBTSx3QkFBd0IsQ0FBQztBQUMxRCxPQUFPLEVBQUMsNkJBQTZCLEVBQUMsTUFBTSxvQ0FBb0MsQ0FBQztBQUNqRixPQUFPLEVBQUMsbUJBQW1CLEVBQUMsTUFBTSx5QkFBeUIsQ0FBQztBQUM1RCxPQUFPLEVBQ0wsaUJBQWlCLEVBQ2pCLHFCQUFxQixFQUNyQixzQkFBc0IsRUFDdEIsdUJBQXVCLEVBQ3hCLE1BQU0saUNBQWlDLENBQUM7QUFDekMsT0FBTyxFQUFDLGtCQUFrQixFQUFDLE1BQU0sa0JBQWtCLENBQUM7QUFDcEQsT0FBTyxFQUFDLG9CQUFvQixFQUFDLE1BQU0seUNBQXlDLENBQUM7QUFDN0UsT0FBTyxFQUFDLGdCQUFnQixFQUFDLE1BQU0scUJBQXFCLENBQUM7QUFDckQsT0FBTyxFQUFDLDBCQUEwQixFQUFDLE1BQU0saUNBQWlDLENBQUM7QUFDM0UsT0FBTyxFQUFDLG9CQUFvQixFQUFDLE1BQU0sMEJBQTBCLENBQUM7QUFDOUQsT0FBTyxFQUFDLDhCQUE4QixFQUFDLE1BQU0scUNBQXFDLENBQUM7QUFDbkYsT0FBTyxFQUFDLGlCQUFpQixFQUFDLE1BQU0sK0JBQStCLENBQUM7QUFDaEUsT0FBTyxFQUFDLGVBQWUsRUFBQyxNQUFNLDZCQUE2QixDQUFDO0FBQzVELE9BQU8sRUFBQyxnQkFBZ0IsRUFBQyxNQUFNLHNCQUFzQixDQUFDO0FBQ3RELE9BQU8sRUFBQyxzQkFBc0IsRUFBQyxNQUFNLDZCQUE2QixDQUFDO0FBQ25FLE9BQU8sRUFBQyxpQkFBaUIsRUFBQyxNQUFNLGlDQUFpQyxDQUFDO0FBQ2xFLE9BQU8sRUFBQyxvQkFBb0IsRUFBQyxNQUFNLHVDQUF1QyxDQUFDOztJQUVyRSxTQUFTLEdBQUcsQ0FBQyxhQUFhO0lBQzlCLEdBQUc7SUFDSCxZQUFZO0lBQ1osV0FBVztJQUNYLFNBQVM7SUFDVCxRQUFRO0lBQ1IsS0FBSztJQUNMLGdCQUFnQjtJQUNoQix3QkFBd0I7SUFDeEIsaUJBQWlCO0lBQ2pCLG1CQUFtQjtJQUNuQixrQkFBa0I7SUFDbEIsa0JBQWtCO0lBQ2xCLGVBQWU7SUFDZixrQkFBa0I7SUFDbEIsV0FBVztJQUNYLHVCQUF1QjtJQUN2QixlQUFlO0lBQ2YsdUJBQXVCO0lBQ3ZCLGFBQWE7SUFDYixhQUFhO0lBQ2IsZUFBZTtJQUNmLGlCQUFpQjtJQUNqQixxQkFBcUI7SUFDckIsY0FBYztJQUNkLDZCQUE2QjtJQUM3QixrQkFBa0I7SUFDbEIsbUJBQW1CO0lBQ25CLDBCQUEwQjtJQUMxQiw4QkFBOEI7SUFDOUIsc0JBQXNCO0lBQ3RCLGdCQUFnQixDQUFDO0FBRW5CO0lBeUdFO1FBQ0UsT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDLENBQUM7SUFDeEIsQ0FBQzs7Z0JBM0dGLFFBQVEsU0FBQztvQkFDUixPQUFPLEVBQUUsQ0FBQyxZQUFZLEVBQUUsaUJBQWlCLEVBQUUsa0JBQWtCLENBQUM7b0JBQzlELFlBQVksRUFBRTt3QkFDWixtQkFBbUI7d0JBQ25CLGtCQUFrQjt3QkFDbEIsZUFBZTt3QkFDZixhQUFhO3dCQUNiLGdCQUFnQjt3QkFDaEIsY0FBYzt3QkFDZCx5QkFBeUI7d0JBQ3pCLGlCQUFpQjt3QkFDakIsc0JBQXNCO3dCQUN0QixhQUFhO3dCQUNiLGtCQUFrQjt3QkFDbEIsZ0JBQWdCO3dCQUNoQix3QkFBd0I7d0JBQ3hCLGlCQUFpQjt3QkFDakIsbUJBQW1CO3dCQUNuQix1QkFBdUI7d0JBQ3ZCLFlBQVk7d0JBQ1osbUJBQW1CO3dCQUNuQixtQkFBbUI7d0JBQ25CLGFBQWE7d0JBQ2IsZUFBZTt3QkFDZix1QkFBdUI7d0JBQ3ZCLGlCQUFpQjt3QkFDakIsa0JBQWtCO3dCQUNsQixvQkFBb0I7d0JBQ3BCLG1CQUFtQjt3QkFDbkIseUJBQXlCO3dCQUN6QixlQUFlO3dCQUNmLG1CQUFtQjt3QkFDbkIsdUJBQXVCO3dCQUN2QixZQUFZO3dCQUNaLGFBQWE7d0JBQ2Isb0JBQW9CO3dCQUNwQixtQkFBbUI7d0JBQ25CLHFCQUFxQjt3QkFDckIsZUFBZTt3QkFDZixvQkFBb0I7d0JBQ3BCLGlCQUFpQjt3QkFDakIscUJBQXFCO3dCQUNyQixzQkFBc0I7d0JBQ3RCLHVCQUF1Qjt3QkFDdkIsb0JBQW9CO3dCQUNwQixnQkFBZ0I7d0JBQ2hCLG9CQUFvQjt3QkFDcEIsaUJBQWlCO3dCQUNqQixlQUFlO3dCQUNmLGlCQUFpQjt3QkFDakIsb0JBQW9CO3FCQUNyQjtvQkFDRCxPQUFPLEVBQUU7d0JBQ1AsbUJBQW1CO3dCQUNuQixrQkFBa0I7d0JBQ2xCLGVBQWU7d0JBQ2YsYUFBYTt3QkFDYixnQkFBZ0I7d0JBQ2hCLGNBQWM7d0JBQ2QseUJBQXlCO3dCQUN6QixpQkFBaUI7d0JBQ2pCLHNCQUFzQjt3QkFDdEIsYUFBYTt3QkFDYixrQkFBa0I7d0JBQ2xCLHdCQUF3Qjt3QkFDeEIsaUJBQWlCO3dCQUNqQixtQkFBbUI7d0JBQ25CLGdCQUFnQjt3QkFDaEIsdUJBQXVCO3dCQUN2QixtQkFBbUI7d0JBQ25CLG1CQUFtQjt3QkFDbkIsZUFBZTt3QkFDZixpQkFBaUI7d0JBQ2pCLGtCQUFrQjt3QkFDbEIsb0JBQW9CO3dCQUNwQixtQkFBbUI7d0JBQ25CLHlCQUF5Qjt3QkFDekIsZUFBZTt3QkFDZixtQkFBbUI7d0JBQ25CLHVCQUF1Qjt3QkFDdkIsWUFBWTt3QkFDWixhQUFhO3dCQUNiLG9CQUFvQjt3QkFDcEIsbUJBQW1CO3dCQUNuQixxQkFBcUI7d0JBQ3JCLG9CQUFvQjt3QkFDcEIsWUFBWTt3QkFDWixpQkFBaUI7d0JBQ2pCLHFCQUFxQjt3QkFDckIsc0JBQXNCO3dCQUN0Qix1QkFBdUI7d0JBQ3ZCLGFBQWE7d0JBQ2IsdUJBQXVCO3dCQUN2QixvQkFBb0I7d0JBQ3BCLGdCQUFnQjt3QkFDaEIsb0JBQW9CO3dCQUNwQixpQkFBaUI7d0JBQ2pCLGVBQWU7d0JBQ2YsaUJBQWlCO3dCQUNqQixvQkFBb0I7d0JBQ3BCLGVBQWU7d0JBQ2YsbUJBQW1CO3FCQUFHO29CQUN4QixTQUFTLEVBQUUsU0FBUztpQkFDckI7Ozs7SUFLRCw2QkFBQztDQUFBLEFBNUdELElBNEdDO1NBSlksc0JBQXNCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtOZ01vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7Q29tbW9uTW9kdWxlfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xyXG5pbXBvcnQge1RvcFRvb2xiYXJDb21wb25lbnR9IGZyb20gJy4vdG9wLXRvb2xiYXIvdG9wLXRvb2xiYXIuY29tcG9uZW50JztcclxuaW1wb3J0IHtTaWRlUGFuZWxDb21wb25lbnR9IGZyb20gJy4vc2lkZS1wYW5lbC9zaWRlLXBhbmVsLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7QnV0dG9uQ29tcG9uZW50fSBmcm9tICcuL2J1dHRvbi9idXR0b24uY29tcG9uZW50JztcclxuaW1wb3J0IHtMb2dvQ29tcG9uZW50fSBmcm9tICcuL2xvZ28vbG9nby5jb21wb25lbnQnO1xyXG5pbXBvcnQge1Rvb2x0aXBDb21wb25lbnR9IGZyb20gJy4vdG9vbHRpcC90b29sdGlwLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7Rm9udEF3ZXNvbWVNb2R1bGV9IGZyb20gJ0Bmb3J0YXdlc29tZS9hbmd1bGFyLWZvbnRhd2Vzb21lJztcclxuaW1wb3J0IHtsaWJyYXJ5fSBmcm9tICdAZm9ydGF3ZXNvbWUvZm9udGF3ZXNvbWUtc3ZnLWNvcmUnO1xyXG5pbXBvcnQge2Zhc30gZnJvbSAnQGZvcnRhd2Vzb21lL2ZyZWUtc29saWQtc3ZnLWljb25zJztcclxuaW1wb3J0IHtmYXJ9IGZyb20gJ0Bmb3J0YXdlc29tZS9mcmVlLXJlZ3VsYXItc3ZnLWljb25zJztcclxuaW1wb3J0IHtBcGksIENvbmZpZ1NlcnZpY2UsfSBmcm9tIFwiLi9jb25maWcuc2VydmljZVwiO1xyXG5pbXBvcnQge01vZGFsU2VydmljZX0gZnJvbSBcIi4vbW9kYWwuc2VydmljZVwiO1xyXG5pbXBvcnQge01vZGFsQ29tcG9uZW50fSBmcm9tICcuL21vZGFsL21vZGFsLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7QnJvd3NlRmlsZXNNb2RhbENvbXBvbmVudH0gZnJvbSAnLi9icm93c2UtZmlsZXMtbW9kYWwvYnJvd3NlLWZpbGVzLW1vZGFsLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7RmlsZU1vZGVsLCBGaWxlU2VydmljZSwgRmlsZVV0aWwsIFV0aWxzfSBmcm9tIFwiLi9maWxlLnNlcnZpY2VcIjtcclxuaW1wb3J0IHtEb2N1bWVudENvbXBvbmVudH0gZnJvbSAnLi9kb2N1bWVudC9kb2N1bWVudC5jb21wb25lbnQnO1xyXG5pbXBvcnQge0V4Y2VsRG9jdW1lbnRDb21wb25lbnR9IGZyb20gJy4vZXhjZWwtZG9jdW1lbnQvZXhjZWwtZG9jdW1lbnQuY29tcG9uZW50JztcclxuaW1wb3J0IHtQYWdlQ29tcG9uZW50fSBmcm9tICcuL3BhZ2UvcGFnZS5jb21wb25lbnQnO1xyXG5pbXBvcnQge0V4Y2VsUGFnZUNvbXBvbmVudH0gZnJvbSAnLi9leGNlbC1wYWdlL2V4Y2VsLXBhZ2UuY29tcG9uZW50JztcclxuaW1wb3J0IHtIaWdobGlnaHRTZWFyY2hQaXBlLCBTYW5pdGl6ZUh0bWxQaXBlLCBTYW5pdGl6ZVJlc291cmNlSHRtbFBpcGUsIFNhbml0aXplU3R5bGVQaXBlfSBmcm9tIFwiLi9waXBlc1wiO1xyXG5pbXBvcnQge1VwbG9hZEZpbGVab25lQ29tcG9uZW50fSBmcm9tICcuL3VwbG9hZC1maWxlLXpvbmUvdXBsb2FkLWZpbGUtem9uZS5jb21wb25lbnQnO1xyXG5pbXBvcnQge1VwbG9hZEZpbGVzU2VydmljZX0gZnJvbSBcIi4vdXBsb2FkLWZpbGVzLnNlcnZpY2VcIjtcclxuaW1wb3J0IHtEbmREaXJlY3RpdmV9IGZyb20gJy4vZG5kLmRpcmVjdGl2ZSc7XHJcbmltcG9ydCB7U2Nyb2xsYWJsZURpcmVjdGl2ZX0gZnJvbSAnLi9zY3JvbGxhYmxlLmRpcmVjdGl2ZSc7XHJcbmltcG9ydCB7TW91c2VXaGVlbERpcmVjdGl2ZX0gZnJvbSAnLi9tb3VzZXdoZWVsLmRpcmVjdGl2ZSc7XHJcbmltcG9ydCB7TmF2aWdhdGVTZXJ2aWNlfSBmcm9tIFwiLi9uYXZpZ2F0ZS5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7UGFnZVByZWxvYWRTZXJ2aWNlfSBmcm9tIFwiLi9wYWdlLXByZWxvYWQuc2VydmljZVwiO1xyXG5pbXBvcnQge1pvb21EaXJlY3RpdmV9IGZyb20gJy4vem9vbS5kaXJlY3RpdmUnO1xyXG5pbXBvcnQge1pvb21TZXJ2aWNlfSBmcm9tIFwiLi96b29tLnNlcnZpY2VcIjtcclxuaW1wb3J0IHtTZWxlY3RDb21wb25lbnR9IGZyb20gJy4vc2VsZWN0L3NlbGVjdC5jb21wb25lbnQnO1xyXG5pbXBvcnQge0Rpc2FibGVkQ3Vyc29yRGlyZWN0aXZlfSBmcm9tICcuL2Rpc2FibGVkLWN1cnNvci5kaXJlY3RpdmUnO1xyXG5pbXBvcnQge1JvdGF0aW9uRGlyZWN0aXZlfSBmcm9tICcuL3JvdGF0aW9uLmRpcmVjdGl2ZSc7XHJcbmltcG9ydCB7SW5pdFN0YXRlQ29tcG9uZW50fSBmcm9tICcuL2luaXQtc3RhdGUvaW5pdC1zdGF0ZS5jb21wb25lbnQnO1xyXG5pbXBvcnQge1JlbmRlclByaW50U2VydmljZX0gZnJvbSBcIi4vcmVuZGVyLXByaW50LnNlcnZpY2VcIjtcclxuaW1wb3J0IHtSZW5kZXJQcmludERpcmVjdGl2ZX0gZnJvbSAnLi9yZW5kZXItcHJpbnQuZGlyZWN0aXZlJztcclxuaW1wb3J0IHtFcnJvck1vZGFsQ29tcG9uZW50fSBmcm9tICcuL2Vycm9yLW1vZGFsL2Vycm9yLW1vZGFsLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7UGFzc3dvcmRSZXF1aXJlZENvbXBvbmVudH0gZnJvbSAnLi9wYXNzd29yZC1yZXF1aXJlZC9wYXNzd29yZC1yZXF1aXJlZC5jb21wb25lbnQnO1xyXG5pbXBvcnQge0V4Y2VwdGlvbk1lc3NhZ2VTZXJ2aWNlfSBmcm9tIFwiLi9leGNlcHRpb24tbWVzc2FnZS5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7UGFzc3dvcmRTZXJ2aWNlfSBmcm9tIFwiLi9wYXNzd29yZC5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7RXJyb3JJbnRlcmNlcHRvclNlcnZpY2V9IGZyb20gXCIuL2Vycm9yLWludGVyY2VwdG9yLnNlcnZpY2VcIjtcclxuaW1wb3J0IHtTZWFyY2hDb21wb25lbnR9IGZyb20gJy4vc2VhcmNoL3NlYXJjaC5jb21wb25lbnQnO1xyXG5pbXBvcnQge1NlYXJjaGFibGVEaXJlY3RpdmV9IGZyb20gJy4vc2VhcmNoYWJsZS5kaXJlY3RpdmUnO1xyXG5pbXBvcnQge1NlYXJjaFNlcnZpY2V9IGZyb20gXCIuL3NlYXJjaC5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7V2luZG93U2VydmljZX0gZnJvbSBcIi4vd2luZG93LnNlcnZpY2VcIjtcclxuaW1wb3J0IHtWaWV3cG9ydFNlcnZpY2V9IGZyb20gXCIuL3ZpZXdwb3J0LnNlcnZpY2VcIjtcclxuaW1wb3J0IHtUYWJiZWRUb29sYmFyc0NvbXBvbmVudH0gZnJvbSAnLi90YWJiZWQtdG9vbGJhcnMvdGFiYmVkLXRvb2xiYXJzLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7VGFiQ29tcG9uZW50fSBmcm9tIFwiLi90YWIvdGFiLmNvbXBvbmVudFwiO1xyXG5pbXBvcnQge1RhYnNDb21wb25lbnR9IGZyb20gXCIuL3RhYnMvdGFicy5jb21wb25lbnRcIjtcclxuaW1wb3J0IHtGb3JtYXR0aW5nU2VydmljZX0gZnJvbSBcIi4vZm9ybWF0dGluZy5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7Q29sb3JQaWNrZXJDb21wb25lbnR9IGZyb20gJy4vY29sb3ItcGlja2VyL2NvbG9yLXBpY2tlci5jb21wb25lbnQnO1xyXG5pbXBvcnQge0Zvcm1hdHRpbmdEaXJlY3RpdmV9IGZyb20gJy4vZm9ybWF0dGluZy5kaXJlY3RpdmUnO1xyXG5pbXBvcnQge0JhY2tGb3JtYXR0aW5nU2VydmljZX0gZnJvbSBcIi4vYmFjay1mb3JtYXR0aW5nLnNlcnZpY2VcIjtcclxuaW1wb3J0IHtPbkNsb3NlU2VydmljZX0gZnJvbSBcIi4vb24tY2xvc2Uuc2VydmljZVwiO1xyXG5pbXBvcnQge1N1Y2Nlc3NNb2RhbENvbXBvbmVudH0gZnJvbSAnLi9zdWNjZXNzLW1vZGFsL3N1Y2Nlc3MtbW9kYWwuY29tcG9uZW50JztcclxuaW1wb3J0IHtFZGl0b3JEaXJlY3RpdmV9IGZyb20gJy4vZWRpdG9yLmRpcmVjdGl2ZSc7XHJcbmltcG9ydCB7TG9hZGluZ01hc2tDb21wb25lbnR9IGZyb20gJy4vbG9hZGluZy1tYXNrL2xvYWRpbmctbWFzay5jb21wb25lbnQnO1xyXG5pbXBvcnQge0xvYWRpbmdNYXNrU2VydmljZX0gZnJvbSAnLi9sb2FkaW5nLW1hc2suc2VydmljZSc7XHJcbmltcG9ydCB7TG9hZGluZ01hc2tJbnRlcmNlcHRvclNlcnZpY2V9IGZyb20gXCIuL2xvYWRpbmctbWFzay1pbnRlcmNlcHRvci5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7VGFiQWN0aXZhdG9yU2VydmljZX0gZnJvbSBcIi4vdGFiLWFjdGl2YXRvci5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7XHJcbiAgRHJvcERvd25Db21wb25lbnQsXHJcbiAgRHJvcERvd25JdGVtQ29tcG9uZW50LFxyXG4gIERyb3BEb3duSXRlbXNDb21wb25lbnQsXHJcbiAgRHJvcERvd25Ub2dnbGVDb21wb25lbnRcclxufSBmcm9tICcuL2Ryb3AtZG93bi9kcm9wLWRvd24uY29tcG9uZW50JztcclxuaW1wb3J0IHtDbGlja091dHNpZGVNb2R1bGV9IGZyb20gJ25nLWNsaWNrLW91dHNpZGUnO1xyXG5pbXBvcnQge0xlZnRTaWRlQmFyQ29tcG9uZW50fSBmcm9tICcuL2xlZnQtc2lkZS1iYXIvbGVmdC1zaWRlLWJhci5jb21wb25lbnQnO1xyXG5pbXBvcnQge1Rvb2x0aXBEaXJlY3RpdmV9IGZyb20gJy4vdG9vbHRpcC5kaXJlY3RpdmUnO1xyXG5pbXBvcnQge0FkZER5bmFtaWNDb21wb25lbnRTZXJ2aWNlfSBmcm9tIFwiLi9hZGQtZHluYW1pYy1jb21wb25lbnQuc2VydmljZVwiO1xyXG5pbXBvcnQge0hvc3REeW5hbWljRGlyZWN0aXZlfSBmcm9tICcuL2hvc3QtZHluYW1pYy5kaXJlY3RpdmUnO1xyXG5pbXBvcnQge0hvc3RpbmdEeW5hbWljQ29tcG9uZW50U2VydmljZX0gZnJvbSBcIi4vaG9zdGluZy1keW5hbWljLWNvbXBvbmVudC5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7UmVzaXppbmdDb21wb25lbnR9IGZyb20gJy4vcmVzaXppbmcvcmVzaXppbmcuY29tcG9uZW50JztcclxuaW1wb3J0IHtUb3BUYWJDb21wb25lbnR9IGZyb20gJy4vdG9wLXRhYi90b3AtdGFiLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7RXhjZWxQYWdlU2VydmljZX0gZnJvbSBcIi4vZXhjZWwtcGFnZS5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7VG9wVGFiQWN0aXZhdG9yU2VydmljZX0gZnJvbSBcIi4vdG9wLXRhYi1hY3RpdmF0b3Iuc2VydmljZVwiO1xyXG5pbXBvcnQge1RleHRNZW51Q29tcG9uZW50fSBmcm9tICcuL3RleHQtbWVudS90ZXh0LW1lbnUuY29tcG9uZW50JztcclxuaW1wb3J0IHtDb250ZXh0TWVudUNvbXBvbmVudH0gZnJvbSAnLi9jb250ZXh0LW1lbnUvY29udGV4dC1tZW51LmNvbXBvbmVudCc7XHJcblxyXG5jb25zdCBwcm92aWRlcnMgPSBbQ29uZmlnU2VydmljZSxcclxuICBBcGksXHJcbiAgTW9kYWxTZXJ2aWNlLFxyXG4gIEZpbGVTZXJ2aWNlLFxyXG4gIEZpbGVNb2RlbCxcclxuICBGaWxlVXRpbCxcclxuICBVdGlscyxcclxuICBTYW5pdGl6ZUh0bWxQaXBlLFxyXG4gIFNhbml0aXplUmVzb3VyY2VIdG1sUGlwZSxcclxuICBTYW5pdGl6ZVN0eWxlUGlwZSxcclxuICBIaWdobGlnaHRTZWFyY2hQaXBlLFxyXG4gIFVwbG9hZEZpbGVzU2VydmljZSxcclxuICBSZW5kZXJQcmludFNlcnZpY2UsXHJcbiAgTmF2aWdhdGVTZXJ2aWNlLFxyXG4gIFBhZ2VQcmVsb2FkU2VydmljZSxcclxuICBab29tU2VydmljZSxcclxuICBFeGNlcHRpb25NZXNzYWdlU2VydmljZSxcclxuICBQYXNzd29yZFNlcnZpY2UsXHJcbiAgRXJyb3JJbnRlcmNlcHRvclNlcnZpY2UsXHJcbiAgU2VhcmNoU2VydmljZSxcclxuICBXaW5kb3dTZXJ2aWNlLFxyXG4gIFZpZXdwb3J0U2VydmljZSxcclxuICBGb3JtYXR0aW5nU2VydmljZSxcclxuICBCYWNrRm9ybWF0dGluZ1NlcnZpY2UsXHJcbiAgT25DbG9zZVNlcnZpY2UsXHJcbiAgTG9hZGluZ01hc2tJbnRlcmNlcHRvclNlcnZpY2UsXHJcbiAgTG9hZGluZ01hc2tTZXJ2aWNlLFxyXG4gIFRhYkFjdGl2YXRvclNlcnZpY2UsXHJcbiAgQWRkRHluYW1pY0NvbXBvbmVudFNlcnZpY2UsXHJcbiAgSG9zdGluZ0R5bmFtaWNDb21wb25lbnRTZXJ2aWNlLFxyXG4gIFRvcFRhYkFjdGl2YXRvclNlcnZpY2UsXHJcbiAgRXhjZWxQYWdlU2VydmljZV07XHJcblxyXG5ATmdNb2R1bGUoe1xyXG4gIGltcG9ydHM6IFtDb21tb25Nb2R1bGUsIEZvbnRBd2Vzb21lTW9kdWxlLCBDbGlja091dHNpZGVNb2R1bGVdLFxyXG4gIGRlY2xhcmF0aW9uczogW1xyXG4gICAgVG9wVG9vbGJhckNvbXBvbmVudCxcclxuICAgIFNpZGVQYW5lbENvbXBvbmVudCxcclxuICAgIEJ1dHRvbkNvbXBvbmVudCxcclxuICAgIExvZ29Db21wb25lbnQsXHJcbiAgICBUb29sdGlwQ29tcG9uZW50LFxyXG4gICAgTW9kYWxDb21wb25lbnQsXHJcbiAgICBCcm93c2VGaWxlc01vZGFsQ29tcG9uZW50LFxyXG4gICAgRG9jdW1lbnRDb21wb25lbnQsXHJcbiAgICBFeGNlbERvY3VtZW50Q29tcG9uZW50LFxyXG4gICAgUGFnZUNvbXBvbmVudCxcclxuICAgIEV4Y2VsUGFnZUNvbXBvbmVudCxcclxuICAgIFNhbml0aXplSHRtbFBpcGUsXHJcbiAgICBTYW5pdGl6ZVJlc291cmNlSHRtbFBpcGUsXHJcbiAgICBTYW5pdGl6ZVN0eWxlUGlwZSxcclxuICAgIEhpZ2hsaWdodFNlYXJjaFBpcGUsXHJcbiAgICBVcGxvYWRGaWxlWm9uZUNvbXBvbmVudCxcclxuICAgIERuZERpcmVjdGl2ZSxcclxuICAgIFNjcm9sbGFibGVEaXJlY3RpdmUsXHJcbiAgICBNb3VzZVdoZWVsRGlyZWN0aXZlLFxyXG4gICAgWm9vbURpcmVjdGl2ZSxcclxuICAgIFNlbGVjdENvbXBvbmVudCxcclxuICAgIERpc2FibGVkQ3Vyc29yRGlyZWN0aXZlLFxyXG4gICAgUm90YXRpb25EaXJlY3RpdmUsXHJcbiAgICBJbml0U3RhdGVDb21wb25lbnQsXHJcbiAgICBSZW5kZXJQcmludERpcmVjdGl2ZSxcclxuICAgIEVycm9yTW9kYWxDb21wb25lbnQsXHJcbiAgICBQYXNzd29yZFJlcXVpcmVkQ29tcG9uZW50LFxyXG4gICAgU2VhcmNoQ29tcG9uZW50LFxyXG4gICAgU2VhcmNoYWJsZURpcmVjdGl2ZSxcclxuICAgIFRhYmJlZFRvb2xiYXJzQ29tcG9uZW50LFxyXG4gICAgVGFiQ29tcG9uZW50LFxyXG4gICAgVGFic0NvbXBvbmVudCxcclxuICAgIENvbG9yUGlja2VyQ29tcG9uZW50LFxyXG4gICAgRm9ybWF0dGluZ0RpcmVjdGl2ZSxcclxuICAgIFN1Y2Nlc3NNb2RhbENvbXBvbmVudCxcclxuICAgIEVkaXRvckRpcmVjdGl2ZSxcclxuICAgIExvYWRpbmdNYXNrQ29tcG9uZW50LFxyXG4gICAgRHJvcERvd25Db21wb25lbnQsXHJcbiAgICBEcm9wRG93bkl0ZW1Db21wb25lbnQsXHJcbiAgICBEcm9wRG93bkl0ZW1zQ29tcG9uZW50LFxyXG4gICAgRHJvcERvd25Ub2dnbGVDb21wb25lbnQsXHJcbiAgICBMZWZ0U2lkZUJhckNvbXBvbmVudCxcclxuICAgIFRvb2x0aXBEaXJlY3RpdmUsXHJcbiAgICBIb3N0RHluYW1pY0RpcmVjdGl2ZSxcclxuICAgIFJlc2l6aW5nQ29tcG9uZW50LFxyXG4gICAgVG9wVGFiQ29tcG9uZW50LFxyXG4gICAgVGV4dE1lbnVDb21wb25lbnQsXHJcbiAgICBDb250ZXh0TWVudUNvbXBvbmVudFxyXG4gIF0sXHJcbiAgZXhwb3J0czogW1xyXG4gICAgVG9wVG9vbGJhckNvbXBvbmVudCxcclxuICAgIFNpZGVQYW5lbENvbXBvbmVudCxcclxuICAgIEJ1dHRvbkNvbXBvbmVudCxcclxuICAgIExvZ29Db21wb25lbnQsXHJcbiAgICBUb29sdGlwQ29tcG9uZW50LFxyXG4gICAgTW9kYWxDb21wb25lbnQsXHJcbiAgICBCcm93c2VGaWxlc01vZGFsQ29tcG9uZW50LFxyXG4gICAgRG9jdW1lbnRDb21wb25lbnQsXHJcbiAgICBFeGNlbERvY3VtZW50Q29tcG9uZW50LFxyXG4gICAgUGFnZUNvbXBvbmVudCxcclxuICAgIEV4Y2VsUGFnZUNvbXBvbmVudCxcclxuICAgIFNhbml0aXplUmVzb3VyY2VIdG1sUGlwZSxcclxuICAgIFNhbml0aXplU3R5bGVQaXBlLFxyXG4gICAgSGlnaGxpZ2h0U2VhcmNoUGlwZSxcclxuICAgIFNhbml0aXplSHRtbFBpcGUsXHJcbiAgICBVcGxvYWRGaWxlWm9uZUNvbXBvbmVudCxcclxuICAgIFNjcm9sbGFibGVEaXJlY3RpdmUsXHJcbiAgICBNb3VzZVdoZWVsRGlyZWN0aXZlLFxyXG4gICAgU2VsZWN0Q29tcG9uZW50LFxyXG4gICAgUm90YXRpb25EaXJlY3RpdmUsXHJcbiAgICBJbml0U3RhdGVDb21wb25lbnQsXHJcbiAgICBSZW5kZXJQcmludERpcmVjdGl2ZSxcclxuICAgIEVycm9yTW9kYWxDb21wb25lbnQsXHJcbiAgICBQYXNzd29yZFJlcXVpcmVkQ29tcG9uZW50LFxyXG4gICAgU2VhcmNoQ29tcG9uZW50LFxyXG4gICAgU2VhcmNoYWJsZURpcmVjdGl2ZSxcclxuICAgIFRhYmJlZFRvb2xiYXJzQ29tcG9uZW50LFxyXG4gICAgVGFiQ29tcG9uZW50LFxyXG4gICAgVGFic0NvbXBvbmVudCxcclxuICAgIENvbG9yUGlja2VyQ29tcG9uZW50LFxyXG4gICAgRm9ybWF0dGluZ0RpcmVjdGl2ZSxcclxuICAgIFN1Y2Nlc3NNb2RhbENvbXBvbmVudCxcclxuICAgIExvYWRpbmdNYXNrQ29tcG9uZW50LFxyXG4gICAgRG5kRGlyZWN0aXZlLFxyXG4gICAgRHJvcERvd25Db21wb25lbnQsXHJcbiAgICBEcm9wRG93bkl0ZW1Db21wb25lbnQsXHJcbiAgICBEcm9wRG93bkl0ZW1zQ29tcG9uZW50LFxyXG4gICAgRHJvcERvd25Ub2dnbGVDb21wb25lbnQsXHJcbiAgICBab29tRGlyZWN0aXZlLFxyXG4gICAgRHJvcERvd25Ub2dnbGVDb21wb25lbnQsXHJcbiAgICBMZWZ0U2lkZUJhckNvbXBvbmVudCxcclxuICAgIFRvb2x0aXBEaXJlY3RpdmUsXHJcbiAgICBIb3N0RHluYW1pY0RpcmVjdGl2ZSxcclxuICAgIFJlc2l6aW5nQ29tcG9uZW50LFxyXG4gICAgVG9wVGFiQ29tcG9uZW50LFxyXG4gICAgVGV4dE1lbnVDb21wb25lbnQsXHJcbiAgICBDb250ZXh0TWVudUNvbXBvbmVudCxcclxuICAgIEVkaXRvckRpcmVjdGl2ZSxcclxuICAgIEZvcm1hdHRpbmdEaXJlY3RpdmUgIF0sXHJcbiAgcHJvdmlkZXJzOiBwcm92aWRlcnNcclxufSlcclxuZXhwb3J0IGNsYXNzIENvbW1vbkNvbXBvbmVudHNNb2R1bGUge1xyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgbGlicmFyeS5hZGQoZmFzLCBmYXIpO1xyXG4gIH1cclxufVxyXG4iXX0=