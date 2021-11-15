import { OnDestroy } from '@angular/core';
import { RendererFactory2 } from '@angular/core';
import { Observable } from 'rxjs';
import { Point } from './app-models';
export declare class FieldService implements OnDestroy {
    private rendererFactory2;
    private _destroy;
    private _isMoving;
    private _mouseMoveSubject;
    private _mouseUpSubject;
    private _activeChangedSubject;
    readonly mouseMove: Observable<Point>;
    readonly mouseUp: Observable<Point>;
    readonly activeChanged: Observable<string>;
    constructor(rendererFactory2: RendererFactory2);
    private createMouseObservables;
    ngOnDestroy(): void;
    readonly isMoving: boolean;
    setActive(fieldName: string): void;
    beginMove($event: MouseEvent): Point;
    private onMouseMove;
    private onMouseUp;
}
