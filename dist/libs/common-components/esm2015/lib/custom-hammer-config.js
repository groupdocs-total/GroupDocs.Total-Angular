/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { HammerGestureConfig } from '@angular/platform-browser';
import * as Hammer from 'hammerjs';
export class CustomHammerConfig extends HammerGestureConfig {
    constructor() {
        super(...arguments);
        this.overrides = (/** @type {?} */ ({
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
        }));
    }
}
if (false) {
    /** @type {?} */
    CustomHammerConfig.prototype.overrides;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3VzdG9tLWhhbW1lci1jb25maWcuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ3JvdXBkb2NzLmV4YW1wbGVzLmFuZ3VsYXIvY29tbW9uLWNvbXBvbmVudHMvIiwic291cmNlcyI6WyJsaWIvY3VzdG9tLWhhbW1lci1jb25maWcudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBQ2hFLE9BQU8sS0FBSyxNQUFNLE1BQU0sVUFBVSxDQUFDO0FBRW5DLE1BQU0sT0FBTyxrQkFBbUIsU0FBUSxtQkFBbUI7SUFBM0Q7O1FBQ0ksY0FBUyxHQUFHLG1CQUFLOztZQUViLE9BQU8sRUFBRTtnQkFDTCxTQUFTLEVBQUUsTUFBTSxDQUFDLGFBQWE7Z0JBQy9CLE1BQU0sRUFBRSxJQUFJO2dCQUNaLGlCQUFpQixFQUFFLFFBQVE7YUFDOUI7WUFDRCxRQUFRLEVBQUU7Z0JBQ04sU0FBUyxFQUFFLE1BQU0sQ0FBQyxhQUFhO2dCQUMvQixNQUFNLEVBQUUsSUFBSTtnQkFDWixjQUFjLEVBQUUsT0FBTzthQUMxQjtTQUNKLEVBQUEsQ0FBQztJQUNOLENBQUM7Q0FBQTs7O0lBYkcsdUNBWUUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBIYW1tZXJHZXN0dXJlQ29uZmlnIH0gZnJvbSAnQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3Nlcic7XHJcbmltcG9ydCAqIGFzIEhhbW1lciBmcm9tICdoYW1tZXJqcyc7XHJcblxyXG5leHBvcnQgY2xhc3MgQ3VzdG9tSGFtbWVyQ29uZmlnIGV4dGVuZHMgSGFtbWVyR2VzdHVyZUNvbmZpZyB7XHJcbiAgICBvdmVycmlkZXMgPSA8YW55PntcclxuICAgICAgICAgLy8gb3ZlcnJpZGUgZGVmYXVsdCBzZXR0aW5nc1xyXG4gICAgICAgICdwaW5jaCc6IHtcclxuICAgICAgICAgICAgZGlyZWN0aW9uOiBIYW1tZXIuRElSRUNUSU9OX0FMTCxcclxuICAgICAgICAgICAgZW5hYmxlOiB0cnVlLFxyXG4gICAgICAgICAgICBkcm9wUmVjb2duaXplV2l0aDogJ3JvdGF0ZSdcclxuICAgICAgICB9LFxyXG4gICAgICAgICdyb3RhdGUnOiB7XHJcbiAgICAgICAgICAgIGRpcmVjdGlvbjogSGFtbWVyLkRJUkVDVElPTl9BTEwsXHJcbiAgICAgICAgICAgIGVuYWJsZTogdHJ1ZSxcclxuICAgICAgICAgICAgcmVxdWlyZUZhaWx1cmU6ICdwaW5jaCdcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG59Il19