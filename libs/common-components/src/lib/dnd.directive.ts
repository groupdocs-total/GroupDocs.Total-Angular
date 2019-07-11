import {Directive, EventEmitter, HostBinding, HostListener, Input, Output} from '@angular/core';
import {UploadFilesService} from "./upload-files.service";
import {isBlockScopeBoundary} from "tslint";

@Directive({
  selector: '[gdDnd]'
})
export class DndDirective {

  @Output() close = new EventEmitter<boolean>();
  @Output() open = new EventEmitter<boolean>();
  @Input() isBackground = true;

  @HostBinding('style.background') background = 'transparent';

  constructor(private _uploadFilesService: UploadFilesService) {
  }

  @HostListener('dragover', ['$event'])
  public onDragOver(evt) {
    evt.preventDefault();
    evt.stopPropagation();
    if (this.isBackground) {
      this.background = '#999';
    } else {
      this.open.emit(true);
    }
  }

  @HostListener('dragleave', ['$event'])
  public onDragLeave(evt) {
    evt.preventDefault();
    evt.stopPropagation();
    if (this.isBackground) {
      this.background = '#f8f8f8';
    } else {
      // TODO: fix blinking
      //this.open.emit(false);
    }
  }

  @HostListener('drop', ['$event'])
  public onDrop(evt) {
    evt.preventDefault();
    evt.stopPropagation();
    const files = evt.dataTransfer.files;
    if (files.length > 0) {
      this.background = '#f8f8f8';
      this._uploadFilesService.changeFilesList(files);
      this.close.emit(true);
      this.open.emit(false);
    }
  }
}
