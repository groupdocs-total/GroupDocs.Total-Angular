import {Directive, EventEmitter, HostListener, Output} from '@angular/core';
import {DndDirective, UploadFilesService} from "@groupdocs.examples.angular/common-components";

@Directive({
  selector: '[gdDndSignature]'
})
export class DndSignatureDirective extends DndDirective {
  @Output() files = new EventEmitter();

  constructor(_uploadFilesService: UploadFilesService) {
    super(_uploadFilesService);
  }

  @HostListener('drop', ['$event'])
  public onDrop(evt) {
    evt.preventDefault();
    evt.stopPropagation();
    const files = evt.dataTransfer.files;
    if (files.length > 0) {
      this.active = false;
      this.files.emit(files);
    }
  }

}
