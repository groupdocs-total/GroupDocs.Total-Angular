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
  files: FileList;
  names = '';
  addActive = false;

  constructor(private _signatureService: SignatureService) {
  }

  ngOnInit() {
    this.clean();
  }

  private clean() {
    this.files = null;
    this.names = '';
    this.addActive = false;
  }

  handleFileInput(files: FileList) {
    this.setFiles(files);
  }

  addFiles() {
    const data = new FileListWithParams(this.files, this.signatureType);
    this._signatureService.uploadSignature(data, this.rewrite).subscribe(() => {
      this.clean();
      this.closePanel.emit(true);
    });
  }

  setFiles(files: any) {
    this.files = files;
    for (let i = 0; i < files.length; i++) {
      const file = files.item(i);
      this.names += file.name + '\n';
    }
    this.names = this.names ? this.names.substring(0, this.names.length - 1) : this.names;
    this.addActive = true;
  }
}
