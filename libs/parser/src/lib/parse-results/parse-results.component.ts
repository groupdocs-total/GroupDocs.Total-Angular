import { Component, Input, OnInit } from '@angular/core';
import { ParseResult, Template } from '../app-models';
import { ParserService } from '../parser.service';
import {
  ModalService,
  ExceptionMessageService
} from "@groupdocs.examples.angular/common-components";

@Component({
  selector: 'app-parse-results',
  templateUrl: './parse-results.component.html',
  styleUrls: ['./parse-results.component.less']
})
export class ParseResultsComponent implements OnInit {
  @Input() template: Template;
  @Input() guid: string;
  @Input() password: string;

  parseResults: Array<ParseResult>;

  constructor(
    private _modalService: ModalService,
    private _parserService: ParserService,
    private _messageService: ExceptionMessageService) { }

  isSpinnerVisible() {
    return !this.parseResults;
  }

  isFieldsVisible() {
    return this.parseResults;
  }

  ngOnInit() {
  }

  refresh($event) {
    if ($event) {
      this.parse();
    }
  }

  parse() {
    this.parseResults = null;
    this._parserService.parseByTemplate(this.guid, this.password, this.template).subscribe(
      (rr: ParseResult[]) => {
        this.parseResults = rr;
      },
      (ex: any) => {
        this._modalService.close("gd-parse-results-modal");
        this._messageService.changeMessage(ex.error.message);
      },
      () => {

      });
  }

}
