import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {ConfigService, FileDescription} from "@groupdocs-total-angular/common-components";
import {environment} from "../../environments/environment";
import {EditorService} from "../editor.service";

@Component({
  selector: 'gd-create-document-modal',
  templateUrl: './create.document-modal.component.html',
  styleUrls: ['./create.document-modal.component.less']
})
export class CreateDocumentModalComponent implements OnInit {
  private _format: string;
  formats;

  constructor(private _http: HttpClient,
              private _config: ConfigService,
              private _editorService: EditorService) {
    _config.apiEndpoint = environment.apiUrl;
  }

  ngOnInit() {
    this.loadFormats();
  }

  loadFormats() {
    this._editorService.getFormats().subscribe((formats: string[]) => {
        this.formats = this.formatOptions(formats);
        this._format = "docx";
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
}
