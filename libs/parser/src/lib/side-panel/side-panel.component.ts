import { Component, OnDestroy, OnInit, ViewChild, ElementRef, Input } from '@angular/core';
import { OperationState, ParseByTemplateResponse, ParseResult, TableValue, Template, TemplateId } from '../app-models';
import { RenameModalComponent } from '../rename-modal/rename-modal.component';
import { ConfirmationModalComponent } from '../confirmation-modal/confirmation-modal.component';

import {
  ModalService} from "@groupdocs.examples.angular/common-components";

import { ParserService } from '../parser.service';
import { TemplateService } from '../template.service';
import { Subscription } from 'rxjs';
import { SourceFileService } from '../source-file.service';
import { UtilsService } from '../utils.service';
import { PlaceholderService } from '../placeholder.service';
import { TableViewerComponent } from '../table-viewer/table-viewer.component';

@Component({
  selector: 'gd-parser-side-panel',
  templateUrl: './side-panel.component.html',
  styleUrls: ['./side-panel.component.less']
})
export class SidePanelComponent implements OnInit, OnDestroy {
  @Input() fileNameForCsv: string;
  @Input() guestName: string;
  
  private _currentTemplateChangedSubscription: Subscription;
  private _templateAddedSubscription: Subscription;
  private _templateRemovedSubscription: Subscription;

  private _currentTemplate: Template;
  private _currentTemplateModifiedSubscription: Subscription;
  private _parseState = new OperationState<ParseResult[]>();

  @ViewChild('templateNameModal', { static: true }) templateNameModal: RenameModalComponent;
  @ViewChild('templateRemoveModal', { static: true }) templateRemoveModal: ConfirmationModalComponent;
  @ViewChild('uploadTemplate', { static: true }) uploadTemplate: ElementRef;
  @ViewChild('tableViewer', { static: true }) tableViewer: TableViewerComponent;

  constructor(
    private _modalService: ModalService,
    private _parserService: ParserService,
    private _sourceFileService: SourceFileService,
    private _templateService: TemplateService,
    private _utilsService: UtilsService,
    private _placeholderService: PlaceholderService) {

    this.isDataMode = true;
    this.isTemplateMode = false;

    this._currentTemplateChangedSubscription = this._templateService.currentTemplateChanged
      .subscribe(template => this.currentTemplate = template);
    this._templateAddedSubscription = this._templateService.templateAddedSubject
      .subscribe(template => this.templateIds.push(template));
    this._templateRemovedSubscription = this._templateService.templateRemovedSubject
      .subscribe(templateId => this.removeTemplateId(templateId));

    this.currentTemplate = this._templateService.currentTemplate;
    this.templateIds = [];
    this._templateService.templateIds.forEach(element => {
      this.templateIds.push(element);
    });
  }

  templateIds: TemplateId[];
  isTemplateMode: boolean;
  isDataMode: boolean;

  get parseState() {
    return this._parseState;
  }

  get currentTemplate() {
    return this._currentTemplate;
  }

  set currentTemplate(template: Template) {
    if (this._currentTemplateModifiedSubscription) {
      this._currentTemplateModifiedSubscription.unsubscribe();
    }

    this._currentTemplate = template;
    this._currentTemplateModifiedSubscription = this._currentTemplate.modified
      .subscribe(t => this.parseState.prompt = "Template was changed. Please parse data again.");

    this.parseState.prompt = "Press Parser to extract data by this template";
  }

  ngOnDestroy() {
    if (this._currentTemplateChangedSubscription) {
      this._currentTemplateChangedSubscription.unsubscribe();
    }

    if (this._templateAddedSubscription) {
      this._templateAddedSubscription.unsubscribe();
    }

    if (this._templateRemovedSubscription) {
      this._templateRemovedSubscription.unsubscribe();
    }
  }

  ngOnInit() {
  }

  manageTemplates() {
    this.isDataMode = false;
    this.isTemplateMode = true;
  }

  isCurrentTemplate(templateId: TemplateId) {
    return this.currentTemplate && this.currentTemplate.id === templateId.id;
  }

  selectTemplateClick(templateId: TemplateId) {
    if (!templateId) {
      return;
    }

    this._templateService.selectTemplate(templateId);
    this.showData();
  }

  createTemplateClick() {
    this._templateService.createTemplate();
  }

  renameTemplateClick(templateId: TemplateId, $event) {
    $event.stopPropagation();
    $event.preventDefault();
    if (templateId && this.templateNameModal) {
      this.templateNameModal.operationId = templateId.id;
      this.templateNameModal.initialValue = templateId.name;

      this._modalService.open("TemplateNameModal");
    }
  }

  templateNameModalAccept(event) {
    const templateId = event.id;
    const templateName = event.newValue;

    try {
      this._templateService.renameTemplate({ id: templateId, name: templateName });
    } catch (error) {
      this.templateNameModal.error = error;
      return;
    }

    this._modalService.close("TemplateNameModal");
  }

  removeTemplateClick(templateId: TemplateId, $event) {
    $event.stopPropagation();
    $event.preventDefault();
    if (this.templateRemoveModal) {
      this.templateRemoveModal.operationId = templateId.id;
      this.templateRemoveModal.promptText = "Remove template <b>" + templateId.name + "</b>?";

      this._modalService.open("TemplateRemoveModal");
    }
  }

  templateRemoveModalAccept(operationId: string) {
    this._modalService.close("TemplateRemoveModal");
    this._templateService.removeTemplate({ id: operationId, name: "" });
  }

  downloadTemplateClick(templateId: TemplateId, $event) {
    $event.stopPropagation();
    $event.preventDefault();
    const templateJson = this._templateService.serialize(templateId);

    const f = new File([templateJson], templateId.name + ".json", {
      type: "text/plain"
    });

    const fileUrl = window.URL.createObjectURL(f);

    const fileLink = document.createElement('a');
    fileLink.href = fileUrl;
    fileLink.download = f.name;
    fileLink.click();

    URL.revokeObjectURL(fileUrl);
  }

  onFileSelected(event) {
    const file: File = event.target.files[0];

    if (file) {
      const reader = new FileReader();

      reader.readAsText(file);
      reader.onload = x => {
        this._templateService.deserialize(reader.result.toString());
        this.uploadTemplate.nativeElement.value = null;
      };
    }
  }

  showData() {
    this.isTemplateMode = false;
    this.isDataMode = true;
  }

  parse() {
    this.parseState.execute();

    const state = this._placeholderService.startOperation("Parsing data...");

    const observer = {
      next: (response: ParseByTemplateResponse) => {
        this.parseState.result = response.data;
      },
      error: (err: any) => {        
        this.parseState.error = this._parserService.getErrorMessage(err);
        state.error(err);
      },
      complete: () => state.complete()
    };

    this._parserService.parseByTemplate(
      this._sourceFileService.sourceFile,
      null,
      this._templateService.currentTemplate,
      this.guestName
    ).subscribe(observer);
  }

  downloadResultsAsCsv() {
    if (!this.parseState.isCompleted || this.parseState.result.length === 0) {
      return;
    }

    const csv = this._utilsService.generateCsvForParseResults(this.parseState.result);

    const f = new File([csv], this.fileNameForCsv ? this.fileNameForCsv + " - data.csv" : this._sourceFileService.sourceFile.guid + " - data.csv", {
      type: "text/plain"
    });

    const fileUrl = window.URL.createObjectURL(f);

    const fileLink = document.createElement('a');
    fileLink.href = fileUrl;
    fileLink.download = f.name;
    fileLink.click();

    URL.revokeObjectURL(fileUrl);
  }

  isArray(obj: any) {
    return Array.isArray(obj)
  }

  showTableValue(value: any) {
    const table = new TableValue(value);

    this.tableViewer.table = table;
    this._modalService.open("TableViewer");
  }

  private removeTemplateId(templateId: TemplateId) {
    for (let i = 0; i < this.templateIds.length; i++) {
      if (this.templateIds[i].id === templateId.id) {
        this.templateIds.splice(i, 1);
        return;
      }
    }
  }
}