import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { BrowseFilesModalComponent, UploadFilesService, ModalService, CommonModals } from '@groupdocs.examples.angular/common-components';
import { SearchService } from '../search.service';
import { AddToIndexRequest, ExtendedFileModel, FilesDeleteRequest, LicenseRestrictionResponse } from "../search-models";
import { MessageModalService } from '../message-modal.service';
import { IndexingOptionsService } from '../indexing-options.service';

export interface Option {
  name: string;
  value: any;
  warning: boolean;
}

@Component({
  selector: 'gd-search-browse-files-modal',
  templateUrl: './search-browse-files-modal.component.html',
  styleUrls: ['./search-browse-files-modal.component.less']
})

export class SearchBrowseFilesModalComponent extends BrowseFilesModalComponent implements OnInit {
  @Input() files: ExtendedFileModel[];
  @Input() folderName: string;
  @Output() selectAll = new EventEmitter<boolean>();
  @Output() filesAddedToIndex = new EventEmitter<boolean>();
  @Output() fileDropped = new EventEmitter<boolean>();
  @Output() filesDeleted = new EventEmitter<boolean>();

  constructor(
    _uploadService: UploadFilesService,
    private _messageModalService: MessageModalService,
    private _searchService: SearchService,
    private _modalService: ModalService,
    public indexingOptionsService: IndexingOptionsService) {
    super(_uploadService);
  }

  setIndexAfterUpload(value: boolean) {
    this.indexingOptionsService.indexAfterUpload = value;
  }

  setRecognizeTextInImages(value: boolean) {
    this.indexingOptionsService.recognizeTextInImages = value;
  }

  selectAllItems(checked: boolean) {
    this.selectAll.emit(checked);
  }

  selectSingleItem(checked: boolean, file: ExtendedFileModel){
    const selectedFiles = this.files.filter(f => f.guid === file.guid);
    if (selectedFiles.length === 1){
      selectedFiles[0].selected = checked;
    }
  }

  getAddLabelString() {
    const label = 'Index'
    if (this.files && this.files.length > 0) {
      const selectedCount = this.files.filter(file => file.selected).length;
      return selectedCount > 0 ? 'Index ' + selectedCount : label;
    }
    else
    {
      return label;
    }
  }

  getDeleteLabelString() {
    const label = 'Delete'
    if (this.files && this.files.length > 0) {
      const selectedCount = this.files.filter(file => file.selected).length;
      if (selectedCount === 1) {
        return 'Delete 1'
      }
      else {
        return selectedCount > 0 ? 'Delete ' + selectedCount : label;
      }
    }
    else
    {
      return label;
    }
  }

  anyItemSelected() {
    if (this.files && this.files.length > 0) {
      return this.files.filter(file => file.selected).length > 0;
    }
    else return false;
  }

  allItemsSelected() {
    if (this.files && this.files.filter(file => !file.isDirectory && !file.directory).length > 0 && this.files.length > 0) {
      return this.files.filter(file => !file.isDirectory && !file.directory && file.selected).length 
         === this.files.filter(file => !file.isDirectory && !file.directory).length;
    }
    else return false;
  }

  addSelectedToIndex() {
    const itemsToIndex = new Array<ExtendedFileModel>();

    this.files.forEach((f) => {
      if (f.selected && !f.isDirectory && !f.directory){
        itemsToIndex.push(f);
      }
    });

    const request = new AddToIndexRequest();
    request.FolderName = this.folderName;
    request.Files = itemsToIndex;
    request.RecognizeTextInImages = this.indexingOptionsService.recognizeTextInImages;
    this._searchService.addFilesToIndex(request).subscribe((response: LicenseRestrictionResponse) => {
      this.filesAddedToIndex.emit(true);
      if (response.isRestricted) {
        this._messageModalService.setDemoRestrictionsMessage(response.message);
      }
    });

    this._modalService.close(CommonModals.BrowseFiles);
  }

  deleteSelected() {
    const itemsToDelete = new Array<ExtendedFileModel>();

    this.files.forEach((f) => {
      if (f.selected && !f.isDirectory && !f.directory){
        itemsToDelete.push(f);
      }
    });

    const request = new FilesDeleteRequest();
    request.FolderName = this.folderName;
    request.Files = itemsToDelete;
    this._searchService.deleteFiles(request).subscribe(() => {
      this.filesDeleted.emit(true);
    });
  }

  dropped($event) {
    if ($event) {
      this.fileDropped.emit($event);
    }
  }
}
