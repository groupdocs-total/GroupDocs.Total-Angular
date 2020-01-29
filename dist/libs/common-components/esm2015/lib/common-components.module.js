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
const providers = [ConfigService,
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
CommonComponentsModule.ctorParameters = () => [];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tbW9uLWNvbXBvbmVudHMubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdyb3VwZG9jcy5leGFtcGxlcy5hbmd1bGFyL2NvbW1vbi1jb21wb25lbnRzLyIsInNvdXJjZXMiOlsibGliL2NvbW1vbi1jb21wb25lbnRzLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFDLFFBQVEsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUN2QyxPQUFPLEVBQUMsWUFBWSxFQUFDLE1BQU0saUJBQWlCLENBQUM7QUFDN0MsT0FBTyxFQUFDLG1CQUFtQixFQUFDLE1BQU0scUNBQXFDLENBQUM7QUFDeEUsT0FBTyxFQUFDLGtCQUFrQixFQUFDLE1BQU0sbUNBQW1DLENBQUM7QUFDckUsT0FBTyxFQUFDLGVBQWUsRUFBQyxNQUFNLDJCQUEyQixDQUFDO0FBQzFELE9BQU8sRUFBQyxhQUFhLEVBQUMsTUFBTSx1QkFBdUIsQ0FBQztBQUNwRCxPQUFPLEVBQUMsZ0JBQWdCLEVBQUMsTUFBTSw2QkFBNkIsQ0FBQztBQUM3RCxPQUFPLEVBQUMsaUJBQWlCLEVBQUMsTUFBTSxrQ0FBa0MsQ0FBQztBQUNuRSxPQUFPLEVBQUMsT0FBTyxFQUFDLE1BQU0sbUNBQW1DLENBQUM7QUFDMUQsT0FBTyxFQUFDLEdBQUcsRUFBQyxNQUFNLG1DQUFtQyxDQUFDO0FBQ3RELE9BQU8sRUFBQyxHQUFHLEVBQUMsTUFBTSxxQ0FBcUMsQ0FBQztBQUN4RCxPQUFPLEVBQUMsR0FBRyxFQUFFLGFBQWEsR0FBRSxNQUFNLGtCQUFrQixDQUFDO0FBQ3JELE9BQU8sRUFBQyxZQUFZLEVBQUMsTUFBTSxpQkFBaUIsQ0FBQztBQUM3QyxPQUFPLEVBQUMsY0FBYyxFQUFDLE1BQU0seUJBQXlCLENBQUM7QUFDdkQsT0FBTyxFQUFDLHlCQUF5QixFQUFDLE1BQU0sbURBQW1ELENBQUM7QUFDNUYsT0FBTyxFQUFDLFNBQVMsRUFBRSxpQkFBaUIsRUFBd0IsV0FBVyxFQUFF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Q2hCLHVCQUF1QjtvQkFDdkIsbUJBQW1CO29CQUNuQixlQUFlO29CQUNmLGlCQUFpQjtvQkFDakIsa0JBQWtCO29CQUNsQixvQkFBb0I7b0JBQ3BCLG1CQUFtQjtvQkFDbkIseUJBQXlCO29CQUN6QixlQUFlO29CQUNmLG1CQUFtQjtvQkFDbkIsdUJBQXVCO29CQUN2QixZQUFZO29CQUNaLGFBQWE7b0JBQ2Isb0JBQW9CO29CQUNwQixtQkFBbUI7b0JBQ25CLHFCQUFxQjtvQkFDckIsb0JBQW9CO29CQUNwQixZQUFZO29CQUNaLGlCQUFpQjtvQkFDakIscUJBQXFCO29CQUNyQixzQkFBc0I7b0JBQ3RCLHVCQUF1QjtvQkFDdkIsYUFBYTtvQkFDYix1QkFBdUI7b0JBQ3ZCLG9CQUFvQjtvQkFDcEIsZ0JBQWdCO29CQUNoQixvQkFBb0I7b0JBQ3BCLGlCQUFpQjtpQkFDbEI7Z0JBQ0QsU0FBUyxFQUFFLFNBQVM7YUFDckIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge05nTW9kdWxlfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHtDb21tb25Nb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XHJcbmltcG9ydCB7VG9wVG9vbGJhckNvbXBvbmVudH0gZnJvbSAnLi90b3AtdG9vbGJhci90b3AtdG9vbGJhci5jb21wb25lbnQnO1xyXG5pbXBvcnQge1NpZGVQYW5lbENvbXBvbmVudH0gZnJvbSAnLi9zaWRlLXBhbmVsL3NpZGUtcGFuZWwuY29tcG9uZW50JztcclxuaW1wb3J0IHtCdXR0b25Db21wb25lbnR9IGZyb20gJy4vYnV0dG9uL2J1dHRvbi5jb21wb25lbnQnO1xyXG5pbXBvcnQge0xvZ29Db21wb25lbnR9IGZyb20gJy4vbG9nby9sb2dvLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7VG9vbHRpcENvbXBvbmVudH0gZnJvbSAnLi90b29sdGlwL3Rvb2x0aXAuY29tcG9uZW50JztcclxuaW1wb3J0IHtGb250QXdlc29tZU1vZHVsZX0gZnJvbSAnQGZvcnRhd2Vzb21lL2FuZ3VsYXItZm9udGF3ZXNvbWUnO1xyXG5pbXBvcnQge2xpYnJhcnl9IGZyb20gJ0Bmb3J0YXdlc29tZS9mb250YXdlc29tZS1zdmctY29yZSc7XHJcbmltcG9ydCB7ZmFzfSBmcm9tICdAZm9ydGF3ZXNvbWUvZnJlZS1zb2xpZC1zdmctaWNvbnMnO1xyXG5pbXBvcnQge2Zhcn0gZnJvbSAnQGZvcnRhd2Vzb21lL2ZyZWUtcmVndWxhci1zdmctaWNvbnMnO1xyXG5pbXBvcnQge0FwaSwgQ29uZmlnU2VydmljZSx9IGZyb20gXCIuL2NvbmZpZy5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7TW9kYWxTZXJ2aWNlfSBmcm9tIFwiLi9tb2RhbC5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7TW9kYWxDb21wb25lbnR9IGZyb20gJy4vbW9kYWwvbW9kYWwuY29tcG9uZW50JztcclxuaW1wb3J0IHtCcm93c2VGaWxlc01vZGFsQ29tcG9uZW50fSBmcm9tICcuL2Jyb3dzZS1maWxlcy1tb2RhbC9icm93c2UtZmlsZXMtbW9kYWwuY29tcG9uZW50JztcclxuaW1wb3J0IHtGaWxlTW9kZWwsIEZpbGVQcm9wZXJ0eU1vZGVsLCBGaWxlUHJvcGVydHlDYXRlZ29yeSwgRmlsZVNlcnZpY2UsIEZpbGVVdGlsLCBVdGlsc30gZnJvbSBcIi4vZmlsZS5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7RG9jdW1lbnRDb21wb25lbnR9IGZyb20gJy4vZG9jdW1lbnQvZG9jdW1lbnQuY29tcG9uZW50JztcclxuaW1wb3J0IHtQYWdlQ29tcG9uZW50fSBmcm9tICcuL3BhZ2UvcGFnZS5jb21wb25lbnQnO1xyXG5pbXBvcnQge0hpZ2hsaWdodFNlYXJjaFBpcGUsIFNhbml0aXplSHRtbFBpcGUsIFNhbml0aXplUmVzb3VyY2VIdG1sUGlwZSwgU2FuaXRpemVTdHlsZVBpcGV9IGZyb20gXCIuL3BpcGVzXCI7XHJcbmltcG9ydCB7VXBsb2FkRmlsZVpvbmVDb21wb25lbnR9IGZyb20gJy4vdXBsb2FkLWZpbGUtem9uZS91cGxvYWQtZmlsZS16b25lLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7VXBsb2FkRmlsZXNTZXJ2aWNlfSBmcm9tIFwiLi91cGxvYWQtZmlsZXMuc2VydmljZVwiO1xyXG5pbXBvcnQge0RuZERpcmVjdGl2ZX0gZnJvbSAnLi9kbmQuZGlyZWN0aXZlJztcclxuaW1wb3J0IHtTY3JvbGxhYmxlRGlyZWN0aXZlfSBmcm9tICcuL3Njcm9sbGFibGUuZGlyZWN0aXZlJztcclxuaW1wb3J0IHtOYXZpZ2F0ZVNlcnZpY2V9IGZyb20gXCIuL25hdmlnYXRlLnNlcnZpY2VcIjtcclxuaW1wb3J0IHtQYWdlUHJlbG9hZFNlcnZpY2V9IGZyb20gXCIuL3BhZ2UtcHJlbG9hZC5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7Wm9vbURpcmVjdGl2ZX0gZnJvbSAnLi96b29tLmRpcmVjdGl2ZSc7XHJcbmltcG9ydCB7Wm9vbVNlcnZpY2V9IGZyb20gXCIuL3pvb20uc2VydmljZVwiO1xyXG5pbXBvcnQge1NlbGVjdENvbXBvbmVudH0gZnJvbSAnLi9zZWxlY3Qvc2VsZWN0LmNvbXBvbmVudCc7XHJcbmltcG9ydCB7RGlzYWJsZWRDdXJzb3JEaXJlY3RpdmV9IGZyb20gJy4vZGlzYWJsZWQtY3Vyc29yLmRpcmVjdGl2ZSc7XHJcbmltcG9ydCB7Um90YXRpb25EaXJlY3RpdmV9IGZyb20gJy4vcm90YXRpb24uZGlyZWN0aXZlJztcclxuaW1wb3J0IHtJbml0U3RhdGVDb21wb25lbnR9IGZyb20gJy4vaW5pdC1zdGF0ZS9pbml0LXN0YXRlLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7UmVuZGVyUHJpbnRTZXJ2aWNlfSBmcm9tIFwiLi9yZW5kZXItcHJpbnQuc2VydmljZVwiO1xyXG5pbXBvcnQge1JlbmRlclByaW50RGlyZWN0aXZlfSBmcm9tICcuL3JlbmRlci1wcmludC5kaXJlY3RpdmUnO1xyXG5pbXBvcnQge0Vycm9yTW9kYWxDb21wb25lbnR9IGZyb20gJy4vZXJyb3ItbW9kYWwvZXJyb3ItbW9kYWwuY29tcG9uZW50JztcclxuaW1wb3J0IHtQYXNzd29yZFJlcXVpcmVkQ29tcG9uZW50fSBmcm9tICcuL3Bhc3N3b3JkLXJlcXVpcmVkL3Bhc3N3b3JkLXJlcXVpcmVkLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7RXhjZXB0aW9uTWVzc2FnZVNlcnZpY2V9IGZyb20gXCIuL2V4Y2VwdGlvbi1tZXNzYWdlLnNlcnZpY2VcIjtcclxuaW1wb3J0IHtQYXNzd29yZFNlcnZpY2V9IGZyb20gXCIuL3Bhc3N3b3JkLnNlcnZpY2VcIjtcclxuaW1wb3J0IHtFcnJvckludGVyY2VwdG9yU2VydmljZX0gZnJvbSBcIi4vZXJyb3ItaW50ZXJjZXB0b3Iuc2VydmljZVwiO1xyXG5pbXBvcnQge1NlYXJjaENvbXBvbmVudH0gZnJvbSAnLi9zZWFyY2gvc2VhcmNoLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7U2VhcmNoYWJsZURpcmVjdGl2ZX0gZnJvbSAnLi9zZWFyY2hhYmxlLmRpcmVjdGl2ZSc7XHJcbmltcG9ydCB7U2VhcmNoU2VydmljZX0gZnJvbSBcIi4vc2VhcmNoLnNlcnZpY2VcIjtcclxuaW1wb3J0IHtXaW5kb3dTZXJ2aWNlfSBmcm9tIFwiLi93aW5kb3cuc2VydmljZVwiO1xyXG5pbXBvcnQge1ZpZXdwb3J0U2VydmljZX0gZnJvbSBcIi4vdmlld3BvcnQuc2VydmljZVwiO1xyXG5pbXBvcnQge1RhYmJlZFRvb2xiYXJzQ29tcG9uZW50fSBmcm9tICcuL3RhYmJlZC10b29sYmFycy90YWJiZWQtdG9vbGJhcnMuY29tcG9uZW50JztcclxuaW1wb3J0IHtUYWJDb21wb25lbnR9IGZyb20gXCIuL3RhYi90YWIuY29tcG9uZW50XCI7XHJcbmltcG9ydCB7VGFic0NvbXBvbmVudH0gZnJvbSBcIi4vdGFicy90YWJzLmNvbXBvbmVudFwiO1xyXG5pbXBvcnQge0Zvcm1hdHRpbmdTZXJ2aWNlfSBmcm9tIFwiLi9mb3JtYXR0aW5nLnNlcnZpY2VcIjtcclxuaW1wb3J0IHtDb2xvclBpY2tlckNvbXBvbmVudH0gZnJvbSAnLi9jb2xvci1waWNrZXIvY29sb3ItcGlja2VyLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7Rm9ybWF0dGluZ0RpcmVjdGl2ZX0gZnJvbSAnLi9mb3JtYXR0aW5nLmRpcmVjdGl2ZSc7XHJcbmltcG9ydCB7QmFja0Zvcm1hdHRpbmdTZXJ2aWNlfSBmcm9tIFwiLi9iYWNrLWZvcm1hdHRpbmcuc2VydmljZVwiO1xyXG5pbXBvcnQge09uQ2xvc2VTZXJ2aWNlfSBmcm9tIFwiLi9vbi1jbG9zZS5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7U3VjY2Vzc01vZGFsQ29tcG9uZW50fSBmcm9tICcuL3N1Y2Nlc3MtbW9kYWwvc3VjY2Vzcy1tb2RhbC5jb21wb25lbnQnO1xyXG5pbXBvcnQge0VkaXRvckRpcmVjdGl2ZX0gZnJvbSAnLi9lZGl0b3IuZGlyZWN0aXZlJztcclxuaW1wb3J0IHtMb2FkaW5nTWFza0NvbXBvbmVudH0gZnJvbSAnLi9sb2FkaW5nLW1hc2svbG9hZGluZy1tYXNrLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7TG9hZGluZ01hc2tTZXJ2aWNlfSBmcm9tICcuL2xvYWRpbmctbWFzay5zZXJ2aWNlJztcclxuaW1wb3J0IHtMb2FkaW5nTWFza0ludGVyY2VwdG9yU2VydmljZX0gZnJvbSBcIi4vbG9hZGluZy1tYXNrLWludGVyY2VwdG9yLnNlcnZpY2VcIjtcclxuaW1wb3J0IHtUYWJBY3RpdmF0b3JTZXJ2aWNlfSBmcm9tIFwiLi90YWItYWN0aXZhdG9yLnNlcnZpY2VcIjtcclxuaW1wb3J0IHtcclxuICBEcm9wRG93bkNvbXBvbmVudCxcclxuICBEcm9wRG93bkl0ZW1Db21wb25lbnQsXHJcbiAgRHJvcERvd25JdGVtc0NvbXBvbmVudCxcclxuICBEcm9wRG93blRvZ2dsZUNvbXBvbmVudFxyXG59IGZyb20gJy4vZHJvcC1kb3duL2Ryb3AtZG93bi5jb21wb25lbnQnO1xyXG5pbXBvcnQge0NsaWNrT3V0c2lkZU1vZHVsZX0gZnJvbSAnbmctY2xpY2stb3V0c2lkZSc7XHJcbmltcG9ydCB7TGVmdFNpZGVCYXJDb21wb25lbnR9IGZyb20gJy4vbGVmdC1zaWRlLWJhci9sZWZ0LXNpZGUtYmFyLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7VG9vbHRpcERpcmVjdGl2ZX0gZnJvbSAnLi90b29sdGlwLmRpcmVjdGl2ZSc7XHJcbmltcG9ydCB7QWRkRHluYW1pY0NvbXBvbmVudFNlcnZpY2V9IGZyb20gXCIuL2FkZC1keW5hbWljLWNvbXBvbmVudC5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7SG9zdER5bmFtaWNEaXJlY3RpdmV9IGZyb20gJy4vaG9zdC1keW5hbWljLmRpcmVjdGl2ZSc7XHJcbmltcG9ydCB7SG9zdGluZ0R5bmFtaWNDb21wb25lbnRTZXJ2aWNlfSBmcm9tIFwiLi9ob3N0aW5nLWR5bmFtaWMtY29tcG9uZW50LnNlcnZpY2VcIjtcclxuaW1wb3J0IHtSZXNpemluZ0NvbXBvbmVudH0gZnJvbSAnLi9yZXNpemluZy9yZXNpemluZy5jb21wb25lbnQnO1xyXG5cclxuY29uc3QgcHJvdmlkZXJzID0gW0NvbmZpZ1NlcnZpY2UsXHJcbiAgQXBpLFxyXG4gIE1vZGFsU2VydmljZSxcclxuICBGaWxlU2VydmljZSxcclxuICBGaWxlTW9kZWwsXHJcbiAgRmlsZVByb3BlcnR5TW9kZWwsXHJcbiAgRmlsZVV0aWwsXHJcbiAgVXRpbHMsXHJcbiAgU2FuaXRpemVIdG1sUGlwZSxcclxuICBTYW5pdGl6ZVJlc291cmNlSHRtbFBpcGUsXHJcbiAgU2FuaXRpemVTdHlsZVBpcGUsXHJcbiAgSGlnaGxpZ2h0U2VhcmNoUGlwZSxcclxuICBVcGxvYWRGaWxlc1NlcnZpY2UsXHJcbiAgUmVuZGVyUHJpbnRTZXJ2aWNlLFxyXG4gIE5hdmlnYXRlU2VydmljZSxcclxuICBQYWdlUHJlbG9hZFNlcnZpY2UsXHJcbiAgWm9vbVNlcnZpY2UsXHJcbiAgRXhjZXB0aW9uTWVzc2FnZVNlcnZpY2UsXHJcbiAgUGFzc3dvcmRTZXJ2aWNlLFxyXG4gIEVycm9ySW50ZXJjZXB0b3JTZXJ2aWNlLFxyXG4gIFNlYXJjaFNlcnZpY2UsXHJcbiAgV2luZG93U2VydmljZSxcclxuICBWaWV3cG9ydFNlcnZpY2UsXHJcbiAgRm9ybWF0dGluZ1NlcnZpY2UsXHJcbiAgQmFja0Zvcm1hdHRpbmdTZXJ2aWNlLFxyXG4gIE9uQ2xvc2VTZXJ2aWNlLFxyXG4gIExvYWRpbmdNYXNrSW50ZXJjZXB0b3JTZXJ2aWNlLFxyXG4gIExvYWRpbmdNYXNrU2VydmljZSxcclxuICBUYWJBY3RpdmF0b3JTZXJ2aWNlLFxyXG4gIEFkZER5bmFtaWNDb21wb25lbnRTZXJ2aWNlLFxyXG4gIEhvc3RpbmdEeW5hbWljQ29tcG9uZW50U2VydmljZV07XHJcblxyXG5ATmdNb2R1bGUoe1xyXG4gIGltcG9ydHM6IFtDb21tb25Nb2R1bGUsIEZvbnRBd2Vzb21lTW9kdWxlLCBDbGlja091dHNpZGVNb2R1bGVdLFxyXG4gIGRlY2xhcmF0aW9uczogW1xyXG4gICAgVG9wVG9vbGJhckNvbXBvbmVudCxcclxuICAgIFNpZGVQYW5lbENvbXBvbmVudCxcclxuICAgIEJ1dHRvbkNvbXBvbmVudCxcclxuICAgIExvZ29Db21wb25lbnQsXHJcbiAgICBUb29sdGlwQ29tcG9uZW50LFxyXG4gICAgTW9kYWxDb21wb25lbnQsXHJcbiAgICBCcm93c2VGaWxlc01vZGFsQ29tcG9uZW50LFxyXG4gICAgRG9jdW1lbnRDb21wb25lbnQsXHJcbiAgICBQYWdlQ29tcG9uZW50LFxyXG4gICAgU2FuaXRpemVIdG1sUGlwZSxcclxuICAgIFNhbml0aXplUmVzb3VyY2VIdG1sUGlwZSxcclxuICAgIFNhbml0aXplU3R5bGVQaXBlLFxyXG4gICAgSGlnaGxpZ2h0U2VhcmNoUGlwZSxcclxuICAgIFVwbG9hZEZpbGVab25lQ29tcG9uZW50LFxyXG4gICAgRG5kRGlyZWN0aXZlLFxyXG4gICAgU2Nyb2xsYWJsZURpcmVjdGl2ZSxcclxuICAgIFpvb21EaXJlY3RpdmUsXHJcbiAgICBTZWxlY3RDb21wb25lbnQsXHJcbiAgICBEaXNhYmxlZEN1cnNvckRpcmVjdGl2ZSxcclxuICAgIFJvdGF0aW9uRGlyZWN0aXZlLFxyXG4gICAgSW5pdFN0YXRlQ29tcG9uZW50LFxyXG4gICAgUmVuZGVyUHJpbnREaXJlY3RpdmUsXHJcbiAgICBFcnJvck1vZGFsQ29tcG9uZW50LFxyXG4gICAgUGFzc3dvcmRSZXF1aXJlZENvbXBvbmVudCxcclxuICAgIFNlYXJjaENvbXBvbmVudCxcclxuICAgIFNlYXJjaGFibGVEaXJlY3RpdmUsXHJcbiAgICBUYWJiZWRUb29sYmFyc0NvbXBvbmVudCxcclxuICAgIFRhYkNvbXBvbmVudCxcclxuICAgIFRhYnNDb21wb25lbnQsXHJcbiAgICBDb2xvclBpY2tlckNvbXBvbmVudCxcclxuICAgIEZvcm1hdHRpbmdEaXJlY3RpdmUsXHJcbiAgICBTdWNjZXNzTW9kYWxDb21wb25lbnQsXHJcbiAgICBFZGl0b3JEaXJlY3RpdmUsXHJcbiAgICBMb2FkaW5nTWFza0NvbXBvbmVudCxcclxuICAgIERyb3BEb3duQ29tcG9uZW50LFxyXG4gICAgRHJvcERvd25JdGVtQ29tcG9uZW50LFxyXG4gICAgRHJvcERvd25JdGVtc0NvbXBvbmVudCxcclxuICAgIERyb3BEb3duVG9nZ2xlQ29tcG9uZW50LFxyXG4gICAgTGVmdFNpZGVCYXJDb21wb25lbnQsXHJcbiAgICBUb29sdGlwRGlyZWN0aXZlLFxyXG4gICAgSG9zdER5bmFtaWNEaXJlY3RpdmUsXHJcbiAgICBSZXNpemluZ0NvbXBvbmVudFxyXG4gIF0sXHJcbiAgZXhwb3J0czogW1xyXG4gICAgVG9wVG9vbGJhckNvbXBvbmVudCxcclxuICAgIFNpZGVQYW5lbENvbXBvbmVudCxcclxuICAgIEJ1dHRvbkNvbXBvbmVudCxcclxuICAgIExvZ29Db21wb25lbnQsXHJcbiAgICBUb29sdGlwQ29tcG9uZW50LFxyXG4gICAgTW9kYWxDb21wb25lbnQsXHJcbiAgICBCcm93c2VGaWxlc01vZGFsQ29tcG9uZW50LFxyXG4gICAgRG9jdW1lbnRDb21wb25lbnQsXHJcbiAgICBQYWdlQ29tcG9uZW50LFxyXG4gICAgU2FuaXRpemVSZXNvdXJjZUh0bWxQaXBlLFxyXG4gICAgU2FuaXRpemVTdHlsZVBpcGUsXHJcbiAgICBIaWdobGlnaHRTZWFyY2hQaXBlLFxyXG4gICAgU2FuaXRpemVIdG1sUGlwZSxcclxuICAgIFVwbG9hZEZpbGVab25lQ29tcG9uZW50LFxyXG4gICAgU2Nyb2xsYWJsZURpcmVjdGl2ZSxcclxuICAgIFNlbGVjdENvbXBvbmVudCxcclxuICAgIFJvdGF0aW9uRGlyZWN0aXZlLFxyXG4gICAgSW5pdFN0YXRlQ29tcG9uZW50LFxyXG4gICAgUmVuZGVyUHJpbnREaXJlY3RpdmUsXHJcbiAgICBFcnJvck1vZGFsQ29tcG9uZW50LFxyXG4gICAgUGFzc3dvcmRSZXF1aXJlZENvbXBvbmVudCxcclxuICAgIFNlYXJjaENvbXBvbmVudCxcclxuICAgIFNlYXJjaGFibGVEaXJlY3RpdmUsXHJcbiAgICBUYWJiZWRUb29sYmFyc0NvbXBvbmVudCxcclxuICAgIFRhYkNvbXBvbmVudCxcclxuICAgIFRhYnNDb21wb25lbnQsXHJcbiAgICBDb2xvclBpY2tlckNvbXBvbmVudCxcclxuICAgIEZvcm1hdHRpbmdEaXJlY3RpdmUsXHJcbiAgICBTdWNjZXNzTW9kYWxDb21wb25lbnQsXHJcbiAgICBMb2FkaW5nTWFza0NvbXBvbmVudCxcclxuICAgIERuZERpcmVjdGl2ZSxcclxuICAgIERyb3BEb3duQ29tcG9uZW50LFxyXG4gICAgRHJvcERvd25JdGVtQ29tcG9uZW50LFxyXG4gICAgRHJvcERvd25JdGVtc0NvbXBvbmVudCxcclxuICAgIERyb3BEb3duVG9nZ2xlQ29tcG9uZW50LFxyXG4gICAgWm9vbURpcmVjdGl2ZSxcclxuICAgIERyb3BEb3duVG9nZ2xlQ29tcG9uZW50LFxyXG4gICAgTGVmdFNpZGVCYXJDb21wb25lbnQsXHJcbiAgICBUb29sdGlwRGlyZWN0aXZlLFxyXG4gICAgSG9zdER5bmFtaWNEaXJlY3RpdmUsXHJcbiAgICBSZXNpemluZ0NvbXBvbmVudFxyXG4gIF0sXHJcbiAgcHJvdmlkZXJzOiBwcm92aWRlcnNcclxufSlcclxuZXhwb3J0IGNsYXNzIENvbW1vbkNvbXBvbmVudHNNb2R1bGUge1xyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgbGlicmFyeS5hZGQoZmFzLCBmYXIpO1xyXG4gIH1cclxufVxyXG4iXX0=