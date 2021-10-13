import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SettingsService {
  private readonly SHOW_HELP = "parser.show-help";
  private readonly RETURN_URL = "parser.return-url";

  constructor() { }

  get returnUrl(): string {
    return localStorage.getItem(this.RETURN_URL);
  }

  get showHelpAtStart(): boolean {
    return localStorage.getItem(this.SHOW_HELP) != false.toString();
  }

  set showHelpAtStart(value: boolean) {
    if (!value) {
      localStorage.setItem(this.SHOW_HELP, false.toString());
    }
    else {
      localStorage.removeItem(this.SHOW_HELP);
    }
  }
}
