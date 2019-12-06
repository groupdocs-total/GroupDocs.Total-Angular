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

    const resultData = new XMLSerializer().serializeToString(doc)
    // work-around for FF which is adds a0 namespace during serialization
    return resultData.replace(/a0:/g,"").replace(/:a0/g,"");
  }

  createHeader(numCols, table){
    const header = document.createElement('thead');
    header.append(document.createElement('tr'));

    for(let i = 0; i < numCols; ++i){
      const th = document.createElement('th');
      th.innerText = this.colName(i);
      header.querySelector("tr").append(th);
    }
    
    const colgroup = table.querySelector('colgroup');
    const col = document.createElement('col');
    col.width = '80px';
    colgroup.prepend(col);
    
    table.prepend(header);

    let cnt = 0;
    table.querySelectorAll('tr').forEach(row => {
      const div = document.createElement('div');
      if (cnt !== 0) {
        const td = document.createElement('td');
        td.className = "excel"
        td.append(div);
        div.innerText = cnt.toString();
        row.prepend(td);
      }
      else {
        const th = document.createElement('th');
        th.append(div);
        row.prepend(th);
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
