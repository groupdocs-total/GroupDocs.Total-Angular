import {fromEvent, Observable, Subject} from "rxjs";
import {debounceTime, distinctUntilChanged, startWith, tap} from "rxjs/operators";

const MOBILE_MAX_WIDTH = 425;
const MOBILE_MAX_HEIGHT = 1000;
const TABLET_MAX_WIDTH = 1024;

export class WindowService {

  private resizeSubject: Subject<Window> = new Subject();
  private _resize$;
  private width: number;
  private height: number;

  constructor() {
    this.width = window.innerWidth;
    this.height = window.innerHeight;

    this._resize$ = fromEvent(window, 'resize')
      .pipe(
        debounceTime(200),
        distinctUntilChanged(),
        startWith({target: {innerWidth: window.innerWidth, innerHeight: window.innerHeight}}),
        tap(event => {
          this.resizeSubject.next(<Window>event.target);
          this.width = (event.target as Window).innerWidth;
          this.height = (event.target as Window).innerHeight;
        }),
      );
    this._resize$.subscribe();
  }

  get onResize(): Observable<Window> {
    return this.resizeSubject.asObservable();
  }

  isMobile() {
    return this.width <= MOBILE_MAX_WIDTH || this.height < MOBILE_MAX_HEIGHT;
  }

  isTablet() {
    return this.width <= TABLET_MAX_WIDTH;
  }

  isDesktop() {
    return !this.isMobile() && !this.isTablet();
  }

  getWidth() {
    return this.width;
  }

  getHeight() {
    return this.height;
  }
}
