import { HammerGestureConfig } from '@angular/platform-browser';
import * as Hammer from 'hammerjs';

export class CustomHammerConfig extends HammerGestureConfig {
    overrides = <any>{
         // override default settings
        'pinch': {
            direction: Hammer.DIRECTION_ALL,
            enable: true,
            dropRecognizeWith: 'rotate'
        },
        'rotate': {
            direction: Hammer.DIRECTION_ALL,
            enable: true,
            requireFailure: 'pinch'
        }
    };
}