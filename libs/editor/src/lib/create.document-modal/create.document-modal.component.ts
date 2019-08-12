import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {
  CommonModals,
  ExceptionMessageService,
  FileCredentials,
  ModalService
} from "@groupdocs.examples.angular/common-components";
import {EditorService} from "../editor.service";

@Component({
  selector: 'gd-create-document-modal',
  templateUrl: './create.document-modal.component.html',
  styleUrls: ['./create.document-modal.component.less']
})
export class CreateDocumentModalComponent implements OnInit {
  @Input() file: FileCredentials;
  @Output() savingFile: EventEmitter<FileCredentials> = new EventEmitter<FileCredentials>();
  @Output() closing = new EventEmitter<boolean>();
  private _format: string;
  formats;
  FILE_NAME_REGEX = /^.*[\\\/]/;

  constructor(private _editorService: EditorService,
              private _modalService: ModalService,
              private _excMessageService: ExceptionMessageService) {
  }

  get format() {
    return this._format;
  }

  ngOnInit() {
    this.loadFormats();
  }

  loadFormats() {
    this._editorService.getFormats().subscribe((formats: string[]) => {
        this.formats = this.formatOptions(formats);
        this._format = "Docx";
      }
    );
  }

  selectFormat($event: any) {
    this._format = $event.value;
  }

  createFormatOption(val: string) {
    return {value: val, name: val}
  }

  formatOptions(formats) {
    const allTypes = new Array();
    for (let i = 0; i < formats.length; i++) {
      allTypes.push(this.createFormatOption(formats[i]));
    }
    return allTypes;
  }

  save(name: string) {
    let fileName = "";
    if (name && name !== "") {
      fileName = name + "." + this._format;
    } else if (!this.file) {
      this._modalService.open(CommonModals.ErrorMessage);
      this._excMessageService.changeMessage("File name is empty");
    }
    this._modalService.close(CommonModals.CreateDocument);
    const guid = fileName !== "" ? fileName : this.file.guid;
    const password = this.file ? this.file.password : '';
    this.savingFile.emit(new FileCredentials(guid, password));
  }

  refresh($event: boolean) {
    if (!$event) {
      this.closing.emit(true);
    }
  }
}
