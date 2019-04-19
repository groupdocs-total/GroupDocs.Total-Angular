import {Observable, Observer} from "rxjs";

export class UploadFilesService {
  uploadsChange$: Observable<FileList>;
  private _observer: Observer<FileList>;

  constructor() {
    this.uploadsChange$ = new Observable(observer =>
      this._observer = observer);
  }

  changeFilesList(filesList: FileList) {
    this._observer.next(filesList);
  }
}
