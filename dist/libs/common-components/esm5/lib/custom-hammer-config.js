/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { HammerGestureConfig } from '@angular/platform-browser';
import * as Hammer from 'hammerjs';
var CustomHammerConfig = /** @class */ (function (_super) {
    tslib_1.__extends(CustomHammerConfig, _super);
    function CustomHammerConfig() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.overrides = (/** @type {?} */ ({
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
        return _this;
    }
    return CustomHammerConfig;
}(HammerGestureConfig));
export { CustomHammerConfig };
if (false) {
    /** @type {?} */
    CustomHammerConfig.prototype.overrides;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3VzdG9tLWhhbW1lci1jb25maWcuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ3JvdXBkb2NzLmV4YW1wbGVzLmFuZ3VsYXIvY29tbW9uLWNvbXBvbmVudHMvIiwic291cmNlcyI6WyJsaWIvY3VzdG9tLWhhbW1lci1jb25maWcudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUNoRSxPQUFPLEtBQUssTUFBTSxNQUFNLFVBQVUsQ0FBQztBQUVuQztJQUF3Qyw4Q0FBbUI7SUFBM0Q7UUFBQSxxRUFjQztRQWJHLGVBQVMsR0FBRyxtQkFBSzs7WUFFYixPQUFPLEVBQUU7Z0JBQ0wsU0FBUyxFQUFFLE1BQU0sQ0FBQyxhQUFhO2dCQUMvQixNQUFNLEVBQUUsSUFBSTtnQkFDWixpQkFBaUIsRUFBRSxRQUFRO2FBQzlCO1lBQ0QsUUFBUSxFQUFFO2dCQUNOLFNBQVMsRUFBRSxNQUFNLENBQUMsYUFBYTtnQkFDL0IsTUFBTSxFQUFFLElBQUk7Z0JBQ1osY0FBYyxFQUFFLE9BQU87YUFDMUI7U0FDSixFQUFBLENBQUM7O0lBQ04sQ0FBQztJQUFELHlCQUFDO0FBQUQsQ0FBQyxBQWRELENBQXdDLG1CQUFtQixHQWMxRDs7OztJQWJHLHVDQVlFIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSGFtbWVyR2VzdHVyZUNvbmZpZyB9IGZyb20gJ0Bhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXInO1xyXG5pbXBvcnQgKiBhcyBIYW1tZXIgZnJvbSAnaGFtbWVyanMnO1xyXG5cclxuZXhwb3J0IGNsYXNzIEN1c3RvbUhhbW1lckNvbmZpZyBleHRlbmRzIEhhbW1lckdlc3R1cmVDb25maWcge1xyXG4gICAgb3ZlcnJpZGVzID0gPGFueT57XHJcbiAgICAgICAgIC8vIG92ZXJyaWRlIGRlZmF1bHQgc2V0dGluZ3NcclxuICAgICAgICAncGluY2gnOiB7XHJcbiAgICAgICAgICAgIGRpcmVjdGlvbjogSGFtbWVyLkRJUkVDVElPTl9BTEwsXHJcbiAgICAgICAgICAgIGVuYWJsZTogdHJ1ZSxcclxuICAgICAgICAgICAgZHJvcFJlY29nbml6ZVdpdGg6ICdyb3RhdGUnXHJcbiAgICAgICAgfSxcclxuICAgICAgICAncm90YXRlJzoge1xyXG4gICAgICAgICAgICBkaXJlY3Rpb246IEhhbW1lci5ESVJFQ1RJT05fQUxMLFxyXG4gICAgICAgICAgICBlbmFibGU6IHRydWUsXHJcbiAgICAgICAgICAgIHJlcXVpcmVGYWlsdXJlOiAncGluY2gnXHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxufSJdfQ==