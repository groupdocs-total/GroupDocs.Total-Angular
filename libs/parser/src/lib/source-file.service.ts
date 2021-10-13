import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { SourceFile } from './app-models';

@Injectable({
  providedIn: 'root'
})
export class SourceFileService {
  private _sourceFile : SourceFile;
  private _sourceFileChangedSubject = new Subject<SourceFile>();
  
  constructor() { }

  readonly sourceFileChanged : Observable<SourceFile> = this._sourceFileChangedSubject.asObservable();

  get sourceFile() {
    return this._sourceFile;
  }

  set sourceFile(sourceFile: SourceFile) {
    this._sourceFile = sourceFile;
    this._sourceFileChangedSubject.next(sourceFile);
  }
}
