import {Injectable} from '@angular/core';
import {FormattingService} from "./formatting.service";

@Injectable({
  providedIn: 'root'
})
export class BackFormattingService extends FormattingService {

  constructor() {
    super();
  }
}
