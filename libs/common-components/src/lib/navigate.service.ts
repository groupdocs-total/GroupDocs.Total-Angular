import {BehaviorSubject, Observable, Subject} from "rxjs";
import {PagePreloadService} from "./page-preload.service";
import {Injectable} from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export class NavigateService {
  private _currentPage = 0;
  private _countPages = 0;
  private _observer: Subject<number> = new Subject<number>();
  private _navigate: Observable<number> = this._observer;

  constructor(private _pagePreloadService: PagePreloadService) {
  }

  get navigate(): Observable<number> {
    return this._navigate;
  }

  get countPages(): number {
    return this._countPages;
  }

  set countPages(value: number) {
    this._countPages = value;
  }

  get currentPage(): number {
    return this._currentPage;
  }

  set currentPage(value: number) {
    this._currentPage = value;
  }

  nextPage() {
    if (this._currentPage < this._countPages) {
      this._currentPage++;
      this.navigateTo(this._currentPage);
    }
  }

  prevPage() {
    if (this._currentPage > 1) {
      this._currentPage--;
      this.navigateTo(this._currentPage);
    }
  }

  toLastPage() {
    this._currentPage = this._countPages;
    this.navigateTo(this._currentPage);
  }

  toFirstPage() {
    this._currentPage = 1;
    this.navigateTo(this._currentPage);
  }

  navigateTo(page: number) {
    this.currentPage = page;
    this._pagePreloadService.changeLastPageInView(page);
    this._observer.next(page);
  }
}
