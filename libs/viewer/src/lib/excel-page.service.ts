import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ExcelPageService {
  constructor() {
  }

  getUpdatedPage(data) {
    let doc = new DOMParser().parseFromString(data, "text/html");
    let table = doc.querySelector('table');
    let numCellsInFirstRow = 0;
    let cellsFromFirstRow = doc.querySelectorAll('table > tbody > tr:first-child td');

    cellsFromFirstRow.forEach(elm => {
      numCellsInFirstRow += elm.attributes['colspan'] ? parseInt(elm.attributes['colspan'].value, 10) : 1;
    });
 
    let newTable = this.createHeader(numCellsInFirstRow, table);
    doc.querySelector('table').replaceWith(newTable);

    return new XMLSerializer().serializeToString(doc);
  }

  createHeader(numCols, table){
    let header = document.createElement('thead');
    header.append(document.createElement('tr'));

    for(var i = 0; i < numCols; ++i){
      let th = document.createElement('th');
      th.innerText = this.colName(i);
      header.querySelector("tr").append(th);
    }
    
    table.prepend(header);

    let cnt = 0;
    table.querySelectorAll('tr').forEach(row => {
      let td = document.createElement('td');
      if (cnt !== 0) {
        td.innerText = cnt.toString();
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
    let ordA = 'a'.charCodeAt(0);
    let ordZ = 'z'.charCodeAt(0);
    let len = ordZ - ordA + 1;

    let s = "";
    while(n >= 0) {
      s = String.fromCharCode(n % len + ordA) + s;
      n = Math.floor(n / len) - 1;
    }
    return s;
  }
}
