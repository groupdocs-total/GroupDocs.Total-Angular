import {Observable, Observer} from "rxjs";

export class UploadFilesService {
  private _uploadsChange: Observable<FileList>;
  private _observer: Observer<FileList>;

  constructor() {
    this._uploadsChange = new Observable(observer =>
      this._observer = observer);
  }

  get uploadsChange(): Observable<FileList> {
    return this._uploadsChange;
  }

  changeFilesList(filesList: FileList) {
    this._observer.next(filesList);
  }
}
