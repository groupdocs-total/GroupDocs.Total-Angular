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
import { TranslateModule } from '@ngx-translate/core';
import { ThumbnailsComponent } from './thumbnails/thumbnails.component';
import { ScrollableEditedDirective } from './scrollable-edited.directive';
/** @type {?} */
const providers = [ConfigService,
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
export class CommonComponentsModule {
    constructor() {
        library.add(fas, far);
    }
}
CommonComponentsModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    CommonModule,
                    FontAwesomeModule,
                    ClickOutsideModule,
                    TranslateModule
                ],
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
                    ScrollableEditedDirective,
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
                    PageMarkerDirective,
                    ThumbnailsComponent
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
                    ScrollableEditedDirective,
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
                    PageMarkerDirective,
                    ThumbnailsComponent
                ],
                providers: providers
            },] }
];
/** @nocollapse */
CommonComponentsModule.ctorParameters = () => [];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tbW9uLWNvbXBvbmVudHMubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdyb3VwZG9jcy5leGFtcGxlcy5hbmd1bGFyL2NvbW1vbi1jb21wb25lbnRzLyIsInNvdXJjZXMiOlsibGliL2NvbW1vbi1jb21wb25lbnRzLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFDLFFBQVEsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUN2QyxPQUFPLEVBQUMsWUFBWSxFQUFDLE1BQU0saUJBQWlCLENBQUM7QUFDN0MsT0FBTyxFQUFDLG1CQUFtQixFQUFDLE1BQU0scUNBQXFDLENBQUM7QUFDeEUsT0FBTyxFQUFDLGtCQUFrQixFQUFDLE1BQU0sbUNBQW1DLENBQUM7QUFDckUsT0FBTyxFQUFDLGVBQWUsRUFBQyxNQUFNLDJCQUEyQixDQUFDO0FBQzFELE9BQU8sRUFBQyxhQUFhLEVBQUMsTUFBTSx1QkFBdUIsQ0FBQztBQUNwRCxPQUFPLEVBQUMsZ0JBQWdCLEVBQUMsTUFBTSw2QkFBNkIsQ0FBQztBQUM3RCxPQUFPLEVBQUMsaUJBQWlCLEVBQUMsTUFBTSxrQ0FBa0MsQ0FBQztBQUNuRSxPQUFPLEVBQUMsT0FBTyxFQUFDLE1BQU0sbUNBQW1DLENBQUM7QUFDMUQsT0FBTyxFQUFDLEdBQUcsRUFBQyxNQUFNLG1DQUFtQyxDQUFDO0FBQ3RELE9BQU8sRUFBQyxHQUFHLEVBQUMsTUFBTSxxQ0FBcUMsQ0FBQztBQUN4RCxPQUFPLEVBQUMsR0FBRyxFQUFFLGFBQWEsR0FBRSxNQUFNLGtCQUFrQixDQUFDO0FBQ3JELE9BQU8sRUFBQyxZQUFZLEVBQUMsTUFBTSxpQkFBaUIsQ0FBQztBQUM3QyxPQUFPLEVBQUMsY0FBYyxFQUFDLE1BQU0seUJBQXlCLENBQUM7QUFDdkQsT0FBTyxFQUFDLHlCQUF5QixFQUFDLE1BQU0sbURBQW1ELENBQUM7QUFDNUYsT0FBTyxFQUFDLFNBQVMsRUFBRSxXQUFXLEVBQUUsUUFBUSxFQUFFLEtB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QkFDakIsZUFBZTtvQkFDZixpQkFBaUI7b0JBQ2pCLG9CQUFvQjtvQkFDcEIsbUJBQW1CO29CQUNuQixtQkFBbUI7aUJBQ3BCO2dCQUNELFNBQVMsRUFBRSxTQUFTO2FBQ3JCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtOZ01vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge0NvbW1vbk1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7VG9wVG9vbGJhckNvbXBvbmVudH0gZnJvbSAnLi90b3AtdG9vbGJhci90b3AtdG9vbGJhci5jb21wb25lbnQnO1xuaW1wb3J0IHtTaWRlUGFuZWxDb21wb25lbnR9IGZyb20gJy4vc2lkZS1wYW5lbC9zaWRlLXBhbmVsLmNvbXBvbmVudCc7XG5pbXBvcnQge0J1dHRvbkNvbXBvbmVudH0gZnJvbSAnLi9idXR0b24vYnV0dG9uLmNvbXBvbmVudCc7XG5pbXBvcnQge0xvZ29Db21wb25lbnR9IGZyb20gJy4vbG9nby9sb2dvLmNvbXBvbmVudCc7XG5pbXBvcnQge1Rvb2x0aXBDb21wb25lbnR9IGZyb20gJy4vdG9vbHRpcC90b29sdGlwLmNvbXBvbmVudCc7XG5pbXBvcnQge0ZvbnRBd2Vzb21lTW9kdWxlfSBmcm9tICdAZm9ydGF3ZXNvbWUvYW5ndWxhci1mb250YXdlc29tZSc7XG5pbXBvcnQge2xpYnJhcnl9IGZyb20gJ0Bmb3J0YXdlc29tZS9mb250YXdlc29tZS1zdmctY29yZSc7XG5pbXBvcnQge2Zhc30gZnJvbSAnQGZvcnRhd2Vzb21lL2ZyZWUtc29saWQtc3ZnLWljb25zJztcbmltcG9ydCB7ZmFyfSBmcm9tICdAZm9ydGF3ZXNvbWUvZnJlZS1yZWd1bGFyLXN2Zy1pY29ucyc7XG5pbXBvcnQge0FwaSwgQ29uZmlnU2VydmljZSx9IGZyb20gXCIuL2NvbmZpZy5zZXJ2aWNlXCI7XG5pbXBvcnQge01vZGFsU2VydmljZX0gZnJvbSBcIi4vbW9kYWwuc2VydmljZVwiO1xuaW1wb3J0IHtNb2RhbENvbXBvbmVudH0gZnJvbSAnLi9tb2RhbC9tb2RhbC5jb21wb25lbnQnO1xuaW1wb3J0IHtCcm93c2VGaWxlc01vZGFsQ29tcG9uZW50fSBmcm9tICcuL2Jyb3dzZS1maWxlcy1tb2RhbC9icm93c2UtZmlsZXMtbW9kYWwuY29tcG9uZW50JztcbmltcG9ydCB7RmlsZU1vZGVsLCBGaWxlU2VydmljZSwgRmlsZVV0aWwsIFV0aWxzfSBmcm9tIFwiLi9maWxlLnNlcnZpY2VcIjtcbmltcG9ydCB7RG9jdW1lbnRDb21wb25lbnR9IGZyb20gJy4vZG9jdW1lbnQvZG9jdW1lbnQuY29tcG9uZW50JztcbmltcG9ydCB7UGFnZUNvbXBvbmVudH0gZnJvbSAnLi9wYWdlL3BhZ2UuY29tcG9uZW50JztcbmltcG9ydCB7SGlnaGxpZ2h0U2VhcmNoUGlwZSwgU2FuaXRpemVIdG1sUGlwZSwgU2FuaXRpemVSZXNvdXJjZUh0bWxQaXBlLCBTYW5pdGl6ZVN0eWxlUGlwZX0gZnJvbSBcIi4vcGlwZXNcIjtcbmltcG9ydCB7VXBsb2FkRmlsZVpvbmVDb21wb25lbnR9IGZyb20gJy4vdXBsb2FkLWZpbGUtem9uZS91cGxvYWQtZmlsZS16b25lLmNvbXBvbmVudCc7XG5pbXBvcnQge1VwbG9hZEZpbGVzU2VydmljZX0gZnJvbSBcIi4vdXBsb2FkLWZpbGVzLnNlcnZpY2VcIjtcbmltcG9ydCB7RG5kRGlyZWN0aXZlfSBmcm9tICcuL2RuZC5kaXJlY3RpdmUnO1xuaW1wb3J0IHtTY3JvbGxhYmxlRGlyZWN0aXZlfSBmcm9tICcuL3Njcm9sbGFibGUuZGlyZWN0aXZlJztcbmltcG9ydCB7TW91c2VXaGVlbERpcmVjdGl2ZX0gZnJvbSAnLi9tb3VzZXdoZWVsLmRpcmVjdGl2ZSc7XG5pbXBvcnQge05hdmlnYXRlU2VydmljZX0gZnJvbSBcIi4vbmF2aWdhdGUuc2VydmljZVwiO1xuaW1wb3J0IHtQYWdlUHJlbG9hZFNlcnZpY2V9IGZyb20gXCIuL3BhZ2UtcHJlbG9hZC5zZXJ2aWNlXCI7XG5pbXBvcnQge1pvb21EaXJlY3RpdmV9IGZyb20gJy4vem9vbS5kaXJlY3RpdmUnO1xuaW1wb3J0IHtab29tU2VydmljZX0gZnJvbSBcIi4vem9vbS5zZXJ2aWNlXCI7XG5pbXBvcnQge1NlbGVjdENvbXBvbmVudH0gZnJvbSAnLi9zZWxlY3Qvc2VsZWN0LmNvbXBvbmVudCc7XG5pbXBvcnQge0Rpc2FibGVkQ3Vyc29yRGlyZWN0aXZlfSBmcm9tICcuL2Rpc2FibGVkLWN1cnNvci5kaXJlY3RpdmUnO1xuaW1wb3J0IHtSb3RhdGlvbkRpcmVjdGl2ZX0gZnJvbSAnLi9yb3RhdGlvbi5kaXJlY3RpdmUnO1xuaW1wb3J0IHtJbml0U3RhdGVDb21wb25lbnR9IGZyb20gJy4vaW5pdC1zdGF0ZS9pbml0LXN0YXRlLmNvbXBvbmVudCc7XG5pbXBvcnQge1JlbmRlclByaW50U2VydmljZX0gZnJvbSBcIi4vcmVuZGVyLXByaW50LnNlcnZpY2VcIjtcbmltcG9ydCB7UmVuZGVyUHJpbnREaXJlY3RpdmV9IGZyb20gJy4vcmVuZGVyLXByaW50LmRpcmVjdGl2ZSc7XG5pbXBvcnQge0Vycm9yTW9kYWxDb21wb25lbnR9IGZyb20gJy4vZXJyb3ItbW9kYWwvZXJyb3ItbW9kYWwuY29tcG9uZW50JztcbmltcG9ydCB7UGFzc3dvcmRSZXF1aXJlZENvbXBvbmVudH0gZnJvbSAnLi9wYXNzd29yZC1yZXF1aXJlZC9wYXNzd29yZC1yZXF1aXJlZC5jb21wb25lbnQnO1xuaW1wb3J0IHtFeGNlcHRpb25NZXNzYWdlU2VydmljZX0gZnJvbSBcIi4vZXhjZXB0aW9uLW1lc3NhZ2Uuc2VydmljZVwiO1xuaW1wb3J0IHtQYXNzd29yZFNlcnZpY2V9IGZyb20gXCIuL3Bhc3N3b3JkLnNlcnZpY2VcIjtcbmltcG9ydCB7RXJyb3JJbnRlcmNlcHRvclNlcnZpY2V9IGZyb20gXCIuL2Vycm9yLWludGVyY2VwdG9yLnNlcnZpY2VcIjtcbmltcG9ydCB7U2VhcmNoQ29tcG9uZW50fSBmcm9tICcuL3NlYXJjaC9zZWFyY2guY29tcG9uZW50JztcbmltcG9ydCB7U2VhcmNoYWJsZURpcmVjdGl2ZX0gZnJvbSAnLi9zZWFyY2hhYmxlLmRpcmVjdGl2ZSc7XG5pbXBvcnQge1NlYXJjaFNlcnZpY2V9IGZyb20gXCIuL3NlYXJjaC5zZXJ2aWNlXCI7XG5pbXBvcnQge1dpbmRvd1NlcnZpY2V9IGZyb20gXCIuL3dpbmRvdy5zZXJ2aWNlXCI7XG5pbXBvcnQge1ZpZXdwb3J0U2VydmljZX0gZnJvbSBcIi4vdmlld3BvcnQuc2VydmljZVwiO1xuaW1wb3J0IHtUYWJiZWRUb29sYmFyc0NvbXBvbmVudH0gZnJvbSAnLi90YWJiZWQtdG9vbGJhcnMvdGFiYmVkLXRvb2xiYXJzLmNvbXBvbmVudCc7XG5pbXBvcnQge1RhYkNvbXBvbmVudH0gZnJvbSBcIi4vdGFiL3RhYi5jb21wb25lbnRcIjtcbmltcG9ydCB7VGFic0NvbXBvbmVudH0gZnJvbSBcIi4vdGFicy90YWJzLmNvbXBvbmVudFwiO1xuaW1wb3J0IHtGb3JtYXR0aW5nU2VydmljZX0gZnJvbSBcIi4vZm9ybWF0dGluZy5zZXJ2aWNlXCI7XG5pbXBvcnQge0NvbG9yUGlja2VyQ29tcG9uZW50fSBmcm9tICcuL2NvbG9yLXBpY2tlci9jb2xvci1waWNrZXIuY29tcG9uZW50JztcbmltcG9ydCB7Rm9ybWF0dGluZ0RpcmVjdGl2ZX0gZnJvbSAnLi9mb3JtYXR0aW5nLmRpcmVjdGl2ZSc7XG5pbXBvcnQge0JhY2tGb3JtYXR0aW5nU2VydmljZX0gZnJvbSBcIi4vYmFjay1mb3JtYXR0aW5nLnNlcnZpY2VcIjtcbmltcG9ydCB7T25DbG9zZVNlcnZpY2V9IGZyb20gXCIuL29uLWNsb3NlLnNlcnZpY2VcIjtcbmltcG9ydCB7U3VjY2Vzc01vZGFsQ29tcG9uZW50fSBmcm9tICcuL3N1Y2Nlc3MtbW9kYWwvc3VjY2Vzcy1tb2RhbC5jb21wb25lbnQnO1xuaW1wb3J0IHtFZGl0b3JEaXJlY3RpdmV9IGZyb20gJy4vZWRpdG9yLmRpcmVjdGl2ZSc7XG5pbXBvcnQge0xvYWRpbmdNYXNrQ29tcG9uZW50fSBmcm9tICcuL2xvYWRpbmctbWFzay9sb2FkaW5nLW1hc2suY29tcG9uZW50JztcbmltcG9ydCB7TG9hZGluZ01hc2tTZXJ2aWNlfSBmcm9tICcuL2xvYWRpbmctbWFzay5zZXJ2aWNlJztcbmltcG9ydCB7TG9hZGluZ01hc2tJbnRlcmNlcHRvclNlcnZpY2V9IGZyb20gXCIuL2xvYWRpbmctbWFzay1pbnRlcmNlcHRvci5zZXJ2aWNlXCI7XG5pbXBvcnQge1RhYkFjdGl2YXRvclNlcnZpY2V9IGZyb20gXCIuL3RhYi1hY3RpdmF0b3Iuc2VydmljZVwiO1xuaW1wb3J0IHtcbiAgRHJvcERvd25Db21wb25lbnQsXG4gIERyb3BEb3duSXRlbUNvbXBvbmVudCxcbiAgRHJvcERvd25JdGVtc0NvbXBvbmVudCxcbiAgRHJvcERvd25Ub2dnbGVDb21wb25lbnRcbn0gZnJvbSAnLi9kcm9wLWRvd24vZHJvcC1kb3duLmNvbXBvbmVudCc7XG5pbXBvcnQge0NsaWNrT3V0c2lkZU1vZHVsZX0gZnJvbSAnbmctY2xpY2stb3V0c2lkZSc7XG5pbXBvcnQge0xlZnRTaWRlQmFyQ29tcG9uZW50fSBmcm9tICcuL2xlZnQtc2lkZS1iYXIvbGVmdC1zaWRlLWJhci5jb21wb25lbnQnO1xuaW1wb3J0IHtUb29sdGlwRGlyZWN0aXZlfSBmcm9tICcuL3Rvb2x0aXAuZGlyZWN0aXZlJztcbmltcG9ydCB7QWRkRHluYW1pY0NvbXBvbmVudFNlcnZpY2V9IGZyb20gXCIuL2FkZC1keW5hbWljLWNvbXBvbmVudC5zZXJ2aWNlXCI7XG5pbXBvcnQge0hvc3REeW5hbWljRGlyZWN0aXZlfSBmcm9tICcuL2hvc3QtZHluYW1pYy5kaXJlY3RpdmUnO1xuaW1wb3J0IHtIb3N0aW5nRHluYW1pY0NvbXBvbmVudFNlcnZpY2V9IGZyb20gXCIuL2hvc3RpbmctZHluYW1pYy1jb21wb25lbnQuc2VydmljZVwiO1xuaW1wb3J0IHtSZXNpemluZ0NvbXBvbmVudH0gZnJvbSAnLi9yZXNpemluZy9yZXNpemluZy5jb21wb25lbnQnO1xuaW1wb3J0IHtUb3BUYWJDb21wb25lbnR9IGZyb20gJy4vdG9wLXRhYi90b3AtdGFiLmNvbXBvbmVudCc7XG5pbXBvcnQge1RvcFRhYkFjdGl2YXRvclNlcnZpY2V9IGZyb20gXCIuL3RvcC10YWItYWN0aXZhdG9yLnNlcnZpY2VcIjtcbmltcG9ydCB7VGV4dE1lbnVDb21wb25lbnR9IGZyb20gJy4vdGV4dC1tZW51L3RleHQtbWVudS5jb21wb25lbnQnO1xuaW1wb3J0IHtDb250ZXh0TWVudUNvbXBvbmVudH0gZnJvbSAnLi9jb250ZXh0LW1lbnUvY29udGV4dC1tZW51LmNvbXBvbmVudCc7XG5pbXBvcnQge1BhZ2VNYXJrZXJEaXJlY3RpdmV9IGZyb20gJy4vcGFnZS1tYXJrZXIuZGlyZWN0aXZlJztcbmltcG9ydCB7VHJhbnNsYXRlTW9kdWxlfSBmcm9tICdAbmd4LXRyYW5zbGF0ZS9jb3JlJztcbmltcG9ydCB7VGh1bWJuYWlsc0NvbXBvbmVudH0gZnJvbSAnLi90aHVtYm5haWxzL3RodW1ibmFpbHMuY29tcG9uZW50JztcbmltcG9ydCB7IFNjcm9sbGFibGVFZGl0ZWREaXJlY3RpdmUgfSBmcm9tICcuL3Njcm9sbGFibGUtZWRpdGVkLmRpcmVjdGl2ZSc7XG5cbmNvbnN0IHByb3ZpZGVycyA9IFtDb25maWdTZXJ2aWNlLFxuICBBcGksXG4gIE1vZGFsU2VydmljZSxcbiAgRmlsZVNlcnZpY2UsXG4gIEZpbGVNb2RlbCxcbiAgRmlsZVV0aWwsXG4gIFV0aWxzLFxuICBTYW5pdGl6ZUh0bWxQaXBlLFxuICBTYW5pdGl6ZVJlc291cmNlSHRtbFBpcGUsXG4gIFNhbml0aXplU3R5bGVQaXBlLFxuICBIaWdobGlnaHRTZWFyY2hQaXBlLFxuICBVcGxvYWRGaWxlc1NlcnZpY2UsXG4gIFJlbmRlclByaW50U2VydmljZSxcbiAgTmF2aWdhdGVTZXJ2aWNlLFxuICBQYWdlUHJlbG9hZFNlcnZpY2UsXG4gIFpvb21TZXJ2aWNlLFxuICBFeGNlcHRpb25NZXNzYWdlU2VydmljZSxcbiAgUGFzc3dvcmRTZXJ2aWNlLFxuICBFcnJvckludGVyY2VwdG9yU2VydmljZSxcbiAgU2VhcmNoU2VydmljZSxcbiAgV2luZG93U2VydmljZSxcbiAgVmlld3BvcnRTZXJ2aWNlLFxuICBGb3JtYXR0aW5nU2VydmljZSxcbiAgQmFja0Zvcm1hdHRpbmdTZXJ2aWNlLFxuICBPbkNsb3NlU2VydmljZSxcbiAgTG9hZGluZ01hc2tJbnRlcmNlcHRvclNlcnZpY2UsXG4gIExvYWRpbmdNYXNrU2VydmljZSxcbiAgVGFiQWN0aXZhdG9yU2VydmljZSxcbiAgQWRkRHluYW1pY0NvbXBvbmVudFNlcnZpY2UsXG4gIEhvc3RpbmdEeW5hbWljQ29tcG9uZW50U2VydmljZSxcbiAgVG9wVGFiQWN0aXZhdG9yU2VydmljZV07XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtcbiAgICBDb21tb25Nb2R1bGUsXG4gICAgRm9udEF3ZXNvbWVNb2R1bGUsXG4gICAgQ2xpY2tPdXRzaWRlTW9kdWxlLFxuICAgIFRyYW5zbGF0ZU1vZHVsZVxuICBdLFxuICBkZWNsYXJhdGlvbnM6IFtcbiAgICBUb3BUb29sYmFyQ29tcG9uZW50LFxuICAgIFNpZGVQYW5lbENvbXBvbmVudCxcbiAgICBCdXR0b25Db21wb25lbnQsXG4gICAgTG9nb0NvbXBvbmVudCxcbiAgICBUb29sdGlwQ29tcG9uZW50LFxuICAgIE1vZGFsQ29tcG9uZW50LFxuICAgIEJyb3dzZUZpbGVzTW9kYWxDb21wb25lbnQsXG4gICAgRG9jdW1lbnRDb21wb25lbnQsXG4gICAgUGFnZUNvbXBvbmVudCxcbiAgICBTYW5pdGl6ZUh0bWxQaXBlLFxuICAgIFNhbml0aXplUmVzb3VyY2VIdG1sUGlwZSxcbiAgICBTYW5pdGl6ZVN0eWxlUGlwZSxcbiAgICBIaWdobGlnaHRTZWFyY2hQaXBlLFxuICAgIFVwbG9hZEZpbGVab25lQ29tcG9uZW50LFxuICAgIERuZERpcmVjdGl2ZSxcbiAgICBTY3JvbGxhYmxlRGlyZWN0aXZlLFxuICAgIFNjcm9sbGFibGVFZGl0ZWREaXJlY3RpdmUsXG4gICAgTW91c2VXaGVlbERpcmVjdGl2ZSxcbiAgICBab29tRGlyZWN0aXZlLFxuICAgIFNlbGVjdENvbXBvbmVudCxcbiAgICBEaXNhYmxlZEN1cnNvckRpcmVjdGl2ZSxcbiAgICBSb3RhdGlvbkRpcmVjdGl2ZSxcbiAgICBJbml0U3RhdGVDb21wb25lbnQsXG4gICAgUmVuZGVyUHJpbnREaXJlY3RpdmUsXG4gICAgRXJyb3JNb2RhbENvbXBvbmVudCxcbiAgICBQYXNzd29yZFJlcXVpcmVkQ29tcG9uZW50LFxuICAgIFNlYXJjaENvbXBvbmVudCxcbiAgICBTZWFyY2hhYmxlRGlyZWN0aXZlLFxuICAgIFRhYmJlZFRvb2xiYXJzQ29tcG9uZW50LFxuICAgIFRhYkNvbXBvbmVudCxcbiAgICBUYWJzQ29tcG9uZW50LFxuICAgIENvbG9yUGlja2VyQ29tcG9uZW50LFxuICAgIEZvcm1hdHRpbmdEaXJlY3RpdmUsXG4gICAgU3VjY2Vzc01vZGFsQ29tcG9uZW50LFxuICAgIEVkaXRvckRpcmVjdGl2ZSxcbiAgICBMb2FkaW5nTWFza0NvbXBvbmVudCxcbiAgICBEcm9wRG93bkNvbXBvbmVudCxcbiAgICBEcm9wRG93bkl0ZW1Db21wb25lbnQsXG4gICAgRHJvcERvd25JdGVtc0NvbXBvbmVudCxcbiAgICBEcm9wRG93blRvZ2dsZUNvbXBvbmVudCxcbiAgICBMZWZ0U2lkZUJhckNvbXBvbmVudCxcbiAgICBUb29sdGlwRGlyZWN0aXZlLFxuICAgIEhvc3REeW5hbWljRGlyZWN0aXZlLFxuICAgIFJlc2l6aW5nQ29tcG9uZW50LFxuICAgIFRvcFRhYkNvbXBvbmVudCxcbiAgICBUZXh0TWVudUNvbXBvbmVudCxcbiAgICBDb250ZXh0TWVudUNvbXBvbmVudCxcbiAgICBQYWdlTWFya2VyRGlyZWN0aXZlLFxuICAgIFRodW1ibmFpbHNDb21wb25lbnRcbiAgXSxcbiAgZXhwb3J0czogW1xuICAgIFRvcFRvb2xiYXJDb21wb25lbnQsXG4gICAgU2lkZVBhbmVsQ29tcG9uZW50LFxuICAgIEJ1dHRvbkNvbXBvbmVudCxcbiAgICBMb2dvQ29tcG9uZW50LFxuICAgIFRvb2x0aXBDb21wb25lbnQsXG4gICAgTW9kYWxDb21wb25lbnQsXG4gICAgQnJvd3NlRmlsZXNNb2RhbENvbXBvbmVudCxcbiAgICBEb2N1bWVudENvbXBvbmVudCxcbiAgICBQYWdlQ29tcG9uZW50LFxuICAgIFNhbml0aXplUmVzb3VyY2VIdG1sUGlwZSxcbiAgICBTYW5pdGl6ZVN0eWxlUGlwZSxcbiAgICBIaWdobGlnaHRTZWFyY2hQaXBlLFxuICAgIFNhbml0aXplSHRtbFBpcGUsXG4gICAgVXBsb2FkRmlsZVpvbmVDb21wb25lbnQsXG4gICAgU2Nyb2xsYWJsZURpcmVjdGl2ZSxcbiAgICBTY3JvbGxhYmxlRWRpdGVkRGlyZWN0aXZlLFxuICAgIE1vdXNlV2hlZWxEaXJlY3RpdmUsXG4gICAgU2VsZWN0Q29tcG9uZW50LFxuICAgIFJvdGF0aW9uRGlyZWN0aXZlLFxuICAgIEluaXRTdGF0ZUNvbXBvbmVudCxcbiAgICBSZW5kZXJQcmludERpcmVjdGl2ZSxcbiAgICBFcnJvck1vZGFsQ29tcG9uZW50LFxuICAgIFBhc3N3b3JkUmVxdWlyZWRDb21wb25lbnQsXG4gICAgU2VhcmNoQ29tcG9uZW50LFxuICAgIFNlYXJjaGFibGVEaXJlY3RpdmUsXG4gICAgVGFiYmVkVG9vbGJhcnNDb21wb25lbnQsXG4gICAgVGFiQ29tcG9uZW50LFxuICAgIFRhYnNDb21wb25lbnQsXG4gICAgQ29sb3JQaWNrZXJDb21wb25lbnQsXG4gICAgRm9ybWF0dGluZ0RpcmVjdGl2ZSxcbiAgICBTdWNjZXNzTW9kYWxDb21wb25lbnQsXG4gICAgTG9hZGluZ01hc2tDb21wb25lbnQsXG4gICAgRG5kRGlyZWN0aXZlLFxuICAgIERyb3BEb3duQ29tcG9uZW50LFxuICAgIERyb3BEb3duSXRlbUNvbXBvbmVudCxcbiAgICBEcm9wRG93bkl0ZW1zQ29tcG9uZW50LFxuICAgIERyb3BEb3duVG9nZ2xlQ29tcG9uZW50LFxuICAgIFpvb21EaXJlY3RpdmUsXG4gICAgRHJvcERvd25Ub2dnbGVDb21wb25lbnQsXG4gICAgTGVmdFNpZGVCYXJDb21wb25lbnQsXG4gICAgVG9vbHRpcERpcmVjdGl2ZSxcbiAgICBIb3N0RHluYW1pY0RpcmVjdGl2ZSxcbiAgICBSZXNpemluZ0NvbXBvbmVudCxcbiAgICBUb3BUYWJDb21wb25lbnQsXG4gICAgVGV4dE1lbnVDb21wb25lbnQsXG4gICAgQ29udGV4dE1lbnVDb21wb25lbnQsXG4gICAgUGFnZU1hcmtlckRpcmVjdGl2ZSxcbiAgICBUaHVtYm5haWxzQ29tcG9uZW50XG4gIF0sXG4gIHByb3ZpZGVyczogcHJvdmlkZXJzXG59KVxuZXhwb3J0IGNsYXNzIENvbW1vbkNvbXBvbmVudHNNb2R1bGUge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBsaWJyYXJ5LmFkZChmYXMsIGZhcik7XG4gIH1cbn1cbiJdfQ==