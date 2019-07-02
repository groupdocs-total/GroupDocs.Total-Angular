import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {
  CommonModals,
  ExceptionMessageService,
  FileCredentials,
  ModalService,
  SaveFile,
  SelectionService,
  GetHtmlServiceService
} from "@groupdocs-total-angular/common-components";
import {EditorService} from "../editor.service";

@Component({
  selector: 'gd-create-document-modal',
  templateUrl: './create.document-modal.component.html',
  styleUrls: ['./create.document-modal.component.less']
})
export class CreateDocumentModalComponent implements OnInit {
  @Input() file: FileCredentials;
  @Output() savingFile: EventEmitter<SaveFile> = new EventEmitter<SaveFile>();
  private _format: string;
  formats;

  constructor(private _editorService: EditorService,
              private _selectionService: SelectionService,
              private _htmlService: GetHtmlServiceService,
              private _modalService: ModalService,
              private _excMessageService: ExceptionMessageService) {
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
    this._format = $event;
  }

  createFormatOption(val: string) {
    return {value: val, name: val}
  }

  formatOptions(formats) {
    var allTypes = new Array();
    for (var i = 0; i < formats.length; i++) {
      allTypes.push(this.createFormatOption(formats[i]));
    }
    return allTypes;
  }

  save(name: string) {
    let fileName = "";
    if (name && name != "") {
      fileName = name + "." + this._format;
    } else if (!this.file) {
      this._modalService.open(CommonModals.ErrorMessage);
      this._excMessageService.changeMessage("File name is empty");
    }
    this._modalService.close(CommonModals.CreateDocument);
    let guid = fileName != "" ? fileName : this.file.guid;
    let password = this.file ? this.file.password : '';
    let saveFile = new SaveFile(guid, password, this._htmlService.htmlContent);
    this._selectionService.restoreSelection();
    this.savingFile.emit(saveFile);
  }
}
