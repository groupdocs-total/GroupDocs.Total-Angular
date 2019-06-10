import { Injectable } from '@angular/core';
import {Observable, Subject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class FontsService {
  private _observer: Subject<string> = new Subject();
  private readonly _fontChange: Observable<string> = this._observer.asObservable();
  private _font: string;

  constructor() { }

  get font(): string {
    return this._font;
  }

  get fontChange(): Observable<string> {
    return this._fontChange;
  }

  changeFont(font: string) {
    this._font = font;
    this._observer.next(font);
  }

  static createFontOption(val: string) {
    return {value: val, name: val}
  }

  static fontOptions() {
    return [this.createFontOption("Times New Roman"),
      this.createFontOption("Arial")];
  }
}
