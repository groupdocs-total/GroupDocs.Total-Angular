import {Directive, EventEmitter, HostBinding, HostListener, Output} from '@angular/core';
import {UploadFilesService} from "./upload-files.service";

@Directive({
  selector: '[gdDnd]'
})
export class DndDirective {

  @Output() close = new EventEmitter<boolean>();

  @HostBinding('style.background') private background = '#f8f8f8';

  constructor(private _uploadFilesService: UploadFilesService) {
  }

  @HostListener('dragover', ['$event'])
  public onDragOver(evt) {
    evt.preventDefault();
    evt.stopPropagation();
    this.background = '#999';
  }

  @HostListener('dragleave', ['$event'])
  public onDragLeave(evt) {
    evt.preventDefault();
    evt.stopPropagation();
    this.background = '#f8f8f8'
  }

  @HostListener('drop', ['$event'])
  public onDrop(evt) {
    evt.preventDefault();
    evt.stopPropagation();
    let files = evt.dataTransfer.files;
    if (files.length > 0) {
      this.background = '#f8f8f8';
      this._uploadFilesService.changeFilesList(files);
      this.close.emit(true);
    }
  }
}
