import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FileListWithParams} from "../signature-models";
import {SignatureService} from "../signature.service";

@Component({
  selector: 'gd-upload-signature',
  templateUrl: './upload-signature.component.html',
  styleUrls: ['./upload-signature.component.less']
})
export class UploadSignatureComponent implements OnInit {
  @Input() signatureType: string;
  @Input() rewrite: boolean;
  @Output() closePanel = new EventEmitter<boolean>();

  constructor(private _signatureService: SignatureService) {
  }

  ngOnInit() {
  }

  handleFileInput(files: FileList) {
    this.addFiles(files);
  }

  addFiles(files) {
    const data = new FileListWithParams(files, this.signatureType);
    this._signatureService.uploadSignature(data, this.rewrite).subscribe(() => {
      this.closePanel.emit(true);
    });
  }

  uploadFiles($event: any) {
    this.addFiles($event);
  }
}
