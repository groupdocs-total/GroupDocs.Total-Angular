import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GetHtmlServiceService {
  private _htmlContent: string;

  constructor() {
  }


  get htmlContent(): string {
    return this._htmlContent;
  }

  set htmlContent(value: string) {
    this._htmlContent = value;
  }

}
