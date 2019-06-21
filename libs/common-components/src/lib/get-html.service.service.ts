import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GetHtmlServiceService {
 private htmlContent: string;

  constructor() { }

  GetContent(){
    return this.htmlContent;
  }

  SetContent(content: string){
    this.htmlContent = content;
  }
}
