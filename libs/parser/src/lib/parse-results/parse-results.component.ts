import { Component, Input, OnInit } from '@angular/core';
import { ParseResult, Template } from '../app-models';
import { ParserService } from '../parser.service';

@Component({
  selector: 'app-parse-results',
  templateUrl: './parse-results.component.html',
  styleUrls: ['./parse-results.component.less']
})
export class ParseResultsComponent implements OnInit {
  @Input() template: Template;
  @Input() guid: string;

  parseResults: Array<ParseResult>;

  constructor(private _parserService: ParserService) { }

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
    this._parserService.parseByTemplate(this.guid, this.template).subscribe((rr: ParseResult[]) => {
      this.parseResults = rr;
    });
  }

}
