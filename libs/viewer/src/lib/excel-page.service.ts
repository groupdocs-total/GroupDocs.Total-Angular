import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ExcelPageService {
  constructor() {
  }

  getUpdatedPage(data) {
    const doc = new DOMParser().parseFromString(data, "text/html");
    const table = doc.querySelector('table');
    let numCellsInFirstRow = 0;
    const cellsFromFirstRow = doc.querySelectorAll('table > tbody > tr:first-child td');

    cellsFromFirstRow.forEach(elm => {
      numCellsInFirstRow += elm.attributes['colspan'] ? parseInt(elm.attributes['colspan'].value, 10) : 1;
    });
 
    const newTable = this.createHeader(numCellsInFirstRow, table);
    doc.querySelector('table').replaceWith(newTable);

    return new XMLSerializer().serializeToString(doc);
  }

  createHeader(numCols, table){
    const header = document.createElement('thead');
    header.append(document.createElement('tr'));

    for(let i = 0; i < numCols; ++i){
      const th = document.createElement('th');
      th.innerText = this.colName(i);
      header.querySelector("tr").append(th);
    }
    
    table.prepend(header);

    let cnt = 0;
    table.querySelectorAll('tr').forEach(row => {
      const td = document.createElement('td');
      const div = document.createElement('div');
      td.className = "excel"
      td.append(div);
      if (cnt !== 0) {
        div.innerText = cnt.toString();
        row.prepend(td);
      }
      else {
        row.prepend(td);
      }
      cnt++;
    });

    return table;
  }

  colName(n) {
    const ordA = 'a'.charCodeAt(0);
    const ordZ = 'z'.charCodeAt(0);
    const len = ordZ - ordA + 1;

    let s = "";
    while(n >= 0) {
      s = String.fromCharCode(n % len + ordA) + s;
      n = Math.floor(n / len) - 1;
    }
    return s;
  }
}
