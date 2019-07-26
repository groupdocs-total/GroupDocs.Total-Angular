import {Directive, EventEmitter, HostBinding, HostListener, Input, Output} from '@angular/core';
import {UploadFilesService} from "./upload-files.service";

@Directive({
  selector: '[gdDnd]'
})
export class DndDirective {

  @Output() closing = new EventEmitter<boolean>();
  @Output() opening = new EventEmitter<boolean>();
  @Output() dropped = new EventEmitter<boolean>();

  @HostBinding('class.active') active = false;

  constructor(private _uploadFilesService: UploadFilesService) {
  }

  @HostListener('dragover', ['$event'])
  public onDragOver(evt) {
    evt.preventDefault();
    evt.stopPropagation();
    this.active = true;
    this.opening.emit(true);
  }

  @HostListener('dragleave', ['$event'])
  public onDragLeave(evt) {
    evt.preventDefault();
    evt.stopPropagation();
    this.active = false;
    this.closeArea();
  }

  @HostListener('drop', ['$event'])
  public onDrop(evt) {
    evt.preventDefault();
    evt.stopPropagation();
    const files = evt.dataTransfer.files;
    if (files.length > 0) {
      this.active = false;
      this.dropped.emit(true);
      this._uploadFilesService.changeFilesList(files);
      this.closeArea();
    }
  }

  @HostListener('click', ['$event'])
  public onClick(event) {
    this.closeArea();
  }

  private closeArea() {
    this.closing.emit(true);
    this.opening.emit(false);
  }
}
