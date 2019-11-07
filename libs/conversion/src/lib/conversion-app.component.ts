import {Component} from '@angular/core';
import {ConversionConfigService} from "./conversion-config.service";
import {ConversionService} from "./conversion.service";
import { ModalService,
  CommonModals,
  UploadFilesService
} from "@groupdocs.examples.angular/common-components";
import {ConversionConfig} from "./conversion-config";
import {ConversionItemModel, ExtendedFileModel} from "./models"

@Component({
  selector: 'gd-conversion',
  templateUrl: './conversion-app.component.html',
  styleUrls: ['./conversion-app.component.less']
})
export class ConversionAppComponent {
  title = 'conversion';
  files: ExtendedFileModel[] = [];
  conversionItems: ConversionItemModel[] = [];
  browseFilesModal = CommonModals.BrowseFiles;
  isDesktop: boolean;
  leftBarOpen = false;
  conversionConfig: ConversionConfig;
  result: any;

  constructor(private _modalService: ModalService,
              private _conversionService: ConversionService,
              configService: ConversionConfigService,
              uploadFilesService: UploadFilesService) {

    configService.updatedConfig.subscribe((config) => {
      this.conversionConfig = config;
    });

    uploadFilesService.uploadsChange.subscribe((uploads) => {
      if (uploads) {
        let i: number;
        for (i = 0; i < uploads.length; i++) {
          this._conversionService.upload(uploads.item(i), '', this.conversionConfig.rewrite).subscribe(() => {
            this.selectDir('');
          });
        }
      }
    });

    _conversionService.selectedItems.subscribe((selectedFormats) => {
      selectedFormats.forEach((selectedFormat) => {
        if (Object.keys(selectedFormat).length > 0 && !this.itemAlreadyAdded(selectedFormat)) {
          this.conversionItems.push(selectedFormat as ConversionItemModel);
        }
      });
    });

    _conversionService.itemToConvert.subscribe(item => {
      if (item) this.convertSingleItem(item);
    });

    _conversionService.itemToRemove.subscribe(item => {
        if (item) this.removeItemFromQueue(item);
    });
  }

  get rewriteConfig(): boolean {
    return this.conversionConfig ? this.conversionConfig.rewrite : true;
  }

  get browseConfig(): boolean {
    return this.conversionConfig ? this.conversionConfig.browse : true;
  }

  get uploadConfig(): boolean {
    return this.conversionConfig ? this.conversionConfig.upload : true;
  }

  fileDropped($event) {
    if ($event) {
      this._modalService.open(CommonModals.BrowseFiles);
    }
  }

  openModal(id: string) {
    this._modalService.open(id);
  }

  closeModal(id: string) {
    this._modalService.close(id);
  }

  upload($event: string) {
    this._conversionService.upload(null, $event, this.rewriteConfig).subscribe(() => {
      this.selectDir('');
    });
  }

  selectDir($event: string) {
    this._conversionService.loadFiles($event).subscribe((files: ExtendedFileModel[]) => this.files = files || []);
  }

  convertSingleItem(item) {
    const workItem = this.conversionItems.find(x => x.guid === item.guid);
    workItem.converting = true;
    this._conversionService.convert(item).subscribe(() => {
      workItem.converting = false;
      workItem.converted = true;
    }, (() => {
      // TODO: add error handling?
      workItem.converting = false;
    }));
  }

  convertAll(){
      this.conversionItems.forEach((item) => {
        this.convertSingleItem(item);
      });
  }

  convertAllUnavailable(){
    return this.conversionItems.length === 0 || this.conversionItems.filter(ci => ci.converted !== true).length === 0;
  }

  removeItemFromQueue(item: ConversionItemModel): void {
    if (this.conversionItems.length > 0) {
      this.conversionItems.forEach( (ci, index) => {
        if(ci.guid === item.guid && ci.destinationType === item.destinationType) this.conversionItems.splice(index, 1);
      });
    }
  }

  selectAllItems(checked: boolean) {
    this.files.forEach( (f) => {
      if (!f.isDirectory && !f.directory) f.selected = checked;
    });
  }

  itemAlreadyAdded(selectedFormat: ConversionItemModel) : boolean {
    return this.conversionItems.filter(ci => ci.destinationType === selectedFormat.destinationType 
      && ci.guid === selectedFormat.guid).length === 1;
  }

  isLeftBarOpen() {
    return this.isDesktop ? true : this.leftBarOpen;
  }
}
