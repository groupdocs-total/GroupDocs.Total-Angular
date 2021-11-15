import { Injectable } from '@angular/core';
import { ParseResult, TableValue } from './app-models';

@Injectable({
  providedIn: 'root'
})
export class UtilsService {

  constructor() { }

  generateCsvForParseResults(results: ParseResult[]): string {
    let r = "field, value";

    for (let i = 0; i < results.length; i++) {
      r += "\r\n";

      if (Array.isArray(results[i].value)) {
        const table = new TableValue(results[i].value);
        for (let row = 0; row < table.rows.length; row++) {
          r += this.prepareCsvItem(results[i].name) + ",";
          for (let col = 0; col < table.rows[row].length; col++) {
            if (col > 0) {
              r += ",";
            }

            r += this.prepareCsvItem(table.rows[row][col]);
          }

          if (row < table.rows.length - 1) {
            r += "\r\n";
          }
        }
      }
      else {
        r += this.prepareCsvItem(results[i].name) + "," + this.prepareCsvItem(results[i].value);
      }
    }

    return r;
  }

  prepareCsvItem(item: string) {
    if (!item) {
      return "";
    }

    const ci = item.replace(/"/g, '""');

    if (ci.indexOf(',') > -1
      || ci.indexOf('\r') > -1
      || ci.indexOf('"') > -1
      || ci.indexOf("'") > -1
    ) {
      return '"' + ci + '"';
    }
    else {
      return ci;
    }
  }
}
