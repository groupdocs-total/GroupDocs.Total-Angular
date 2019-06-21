import {Component, Input, OnInit} from '@angular/core';
import {
  CommonModals, ConfigService, FileDescription, ModalService
} from "@groupdocs-total-angular/common-components";
import {environment} from "../../environments/environment";
import {EditorService} from "../editor.service";
import {SelectionService} from "../../../../../libs/common-components/src/lib/selection.service";
import {GetHtmlServiceService} from "../../../../../libs/common-components/src/lib/get-html.service.service";

@Component({
  selector: 'gd-create-document-modal',
  templateUrl: './create.document-modal.component.html',
  styleUrls: ['./create.document-modal.component.less']
})
export class CreateDocumentModalComponent implements OnInit {
  @Input() file: FileDescription;
  private _format: string;
  formats;

  constructor(private _config: ConfigService,
              private _editorService: EditorService,
              private _selectionService: SelectionService,
              private _htmlService: GetHtmlServiceService,
              private _modalService: ModalService) {
    _config.apiEndpoint = environment.apiUrl;
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
    for(var i = 0; i < formats.length; i++){
      allTypes.push(this.createFormatOption(formats[i]));
    }
    return allTypes;
  }

  save(name: string){
    let fileName = "";
    if(name && name != ""){
      fileName = name + "." + this._format;
    }
    name = "";
    this._modalService.close(CommonModals.CreateDocument);
    this.file.pages[0].editable = true;
    this.file.pages[0].data = this._htmlService.GetContent();
    if(fileName != "") {
      this.file.guid = fileName;
    }
    this._selectionService.restoreSelection();
    this.saveFile(this.file);
  }

  saveFile(file: FileDescription){
    this._editorService.save(file).subscribe(() => {
      this._modalService.open(CommonModals.OperationSuccess);
    });
  }
}
