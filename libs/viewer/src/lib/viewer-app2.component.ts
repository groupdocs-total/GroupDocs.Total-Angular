import {AfterViewInit, Component, ElementRef, ViewChildren, QueryList, OnInit} from '@angular/core';
import {ViewerService} from "./viewer.service";
import {
  FileDescription,
  FileModel,
  ModalService,
  UploadFilesService,
  NavigateService,
  PagePreloadService,
  PageModel,
  ZoomService,
  RotatedPage,
  RenderPrintService,
  FileUtil,
  PasswordService,
  FileCredentials, CommonModals, LoadingMaskService
} from "@groupdocs.examples.angular/common-components";
import {ViewerConfig} from "./viewer-config";
import {ViewerConfigService} from "./viewer-config.service";
import {WindowService} from "@groupdocs.examples.angular/common-components";
import { ViewerAppComponent } from './viewer-app.component';
//import * as Hammer from 'hammerjs';

@Component({
  selector: 'gd-viewer2',
  templateUrl: './viewer-app2.component.html',
  styleUrls: ['./viewer-app2.component.less']
})
export class ViewerApp2Component extends ViewerAppComponent implements OnInit, AfterViewInit {
  title = 'viewer2';
  files: FileModel[] = [];
  file: FileDescription;
  viewerConfig: ViewerConfig;
  countPages = 0;
  formatDisabled = !this.file;
  showThumbnails = false;
  credentials: FileCredentials;
  browseFilesModal = CommonModals.BrowseFiles;
  showSearch = false;
  isDesktop: boolean;
  isLoading: boolean;

  _zoom = 100;
  _pageWidth: number;
  _pageHeight: number;
  options;
  //@ViewChildren('docPanel') docPanelComponent: QueryList<ElementRef>;
  fileWasDropped = false;
  formatIcon: string;

  constructor(_viewerService: ViewerService,
              _modalService: ModalService,
              configService: ViewerConfigService,
              uploadFilesService: UploadFilesService,
              _navigateService: NavigateService,
              _zoomService: ZoomService,
              pagePreloadService: PagePreloadService,
              _renderPrintService: RenderPrintService,
              passwordService: PasswordService,
              _windowService: WindowService,
              _loadingMaskService: LoadingMaskService) {

     

    super(_viewerService,
      _modalService,
      configService,
      uploadFilesService,
      _navigateService,
      _zoomService,
      pagePreloadService,
      _renderPrintService,
      passwordService,
      _windowService,
      _loadingMaskService);

      console.log('VewerApp2Component constructor');
  }
}
