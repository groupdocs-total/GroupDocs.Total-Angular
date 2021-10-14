import { ComponentFactoryResolver, OnDestroy, Renderer2 } from '@angular/core';
import { RendererFactory2 } from '@angular/core';
import { Injectable, HostListener } from '@angular/core';
import { Utils } from '@groupdocs.examples.angular/common-components';
import { fromEventPattern, Observable, Subject } from 'rxjs';
import { takeUntil, map } from 'rxjs/operators';
import { Point } from './app-models';

@Injectable({
  providedIn: 'root'
})
export class FieldService implements OnDestroy {

  private _destroy = new Subject();
  private _isMoving = false;

  private _mouseMoveSubject = new Subject<Point>();
  private _mouseUpSubject = new Subject<Point>();
  private _activeChangedSubject = new Subject<string>();

  readonly mouseMove = this._mouseMoveSubject.asObservable();
  readonly mouseUp = this._mouseUpSubject.asObservable();
  readonly activeChanged = this._activeChangedSubject.asObservable();

  constructor(private rendererFactory2: RendererFactory2) {
    const renderer = this.rendererFactory2.createRenderer(null, null);

    this.createMouseObservables(renderer);
  }

  private createMouseObservables(renderer: Renderer2) {
    // MOUSE

    let removeMouseMoveListener: () => void;
    const createMouseMoveListener = (handler: (e: Event) => boolean | void) => {
      removeMouseMoveListener = renderer.listen("document", "mousemove", handler);
    };

    fromEventPattern<MouseEvent>(createMouseMoveListener, () => removeMouseMoveListener())
      .pipe(takeUntil(this._destroy))
      .subscribe(event => this.onMouseMove(event));

    let removeMouseUpListener: () => void;
    const createMouseUpListener = (handler: (e: Event) => boolean | void) => {
      removeMouseUpListener = renderer.listen("document", "mouseup", handler);
    };

    fromEventPattern<MouseEvent>(createMouseUpListener, () => removeMouseUpListener())
      .pipe(takeUntil(this._destroy))
      .subscribe(event => this.onMouseUp(event));

    // TOUCH

    let removePanMoveListener: () => void;
    const createPanMoveListener = (handler: (e: Event) => boolean | void) => {
      removePanMoveListener = renderer.listen("document", "panmove", handler);
    };

    fromEventPattern<MouseEvent>(createPanMoveListener, () => removePanMoveListener())
      .pipe(takeUntil(this._destroy))
      .subscribe(event => this.onMouseMove(event));

    let removePanEndListener: () => void;
    const createPanEndListener = (handler: (e: Event) => boolean | void) => {
      removePanEndListener = renderer.listen("document", "panend", handler);
    };

    fromEventPattern<MouseEvent>(createPanEndListener, () => removePanEndListener())
      .pipe(takeUntil(this._destroy))
      .subscribe(event => this.onMouseUp(event));
  }

  ngOnDestroy() {
    this._destroy.next();
    this._destroy.complete();
  }

  get isMoving() {
    return this._isMoving;
  }

  setActive(fieldName: string) {
    this._activeChangedSubject.next(fieldName);
  }

  beginMove($event: MouseEvent): Point {
    const mousePosition = Utils.getMousePosition($event);
    this._isMoving = true;

    return mousePosition;
  }

  private onMouseMove($event: MouseEvent) {
    if (!this.isMoving) {
      return;
    }

    const mousePosition = Utils.getMousePosition($event);
    this._mouseMoveSubject.next(mousePosition);
  }

  private onMouseUp($event: MouseEvent) {
    if (!this.isMoving) {
      return;
    }

    const mousePosition = Utils.getMousePosition($event);
    this._mouseUpSubject.next(mousePosition);
    this._isMoving = false;
  }
}
