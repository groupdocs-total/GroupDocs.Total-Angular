import { Observable } from "rxjs";
export declare class RotationService {
    private _observerRotationAngle;
    private readonly _rotationAngleChange;
    constructor();
    readonly rotationAngleChange: Observable<number>;
    setRotationAngle(angle: number): void;
}
