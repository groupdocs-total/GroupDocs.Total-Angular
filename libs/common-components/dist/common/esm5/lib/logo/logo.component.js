import * as tslib_1 from "tslib";
import { Component, Input } from '@angular/core';
var LogoComponent = /** @class */ (function () {
    function LogoComponent() {
    }
    LogoComponent.prototype.ngOnInit = function () {
    };
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Object)
    ], LogoComponent.prototype, "logo", void 0);
    LogoComponent = tslib_1.__decorate([
        Component({
            selector: 'gd-logo',
            template: "<div id=\"gd-header-logo\" class=\"logo\">\n  <span class=\"logo-text\" [innerHTML]=\"logo\"></span>\n</div>\n\n",
            styles: [".logo{background-color:#25c2d4;height:50px;display:flex;align-items:center}.logo-text{color:#fff;font-size:15px;text-transform:uppercase;margin:0 14px}@media (max-width:1025px){.logo{height:70px}}"]
        }),
        tslib_1.__metadata("design:paramtypes", [])
    ], LogoComponent);
    return LogoComponent;
}());
export { LogoComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9nby5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ3JvdXBkb2NzLmV4YW1wbGVzLmFuZ3VsYXIvY29tbW9uLWNvbXBvbmVudHMvIiwic291cmNlcyI6WyJsaWIvbG9nby9sb2dvLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFDLFNBQVMsRUFBRSxLQUFLLEVBQVMsTUFBTSxlQUFlLENBQUM7QUFPdkQ7SUFJRTtJQUFnQixDQUFDO0lBRWpCLGdDQUFRLEdBQVI7SUFDQSxDQUFDO0lBTFE7UUFBUixLQUFLLEVBQUU7OytDQUFNO0lBRkgsYUFBYTtRQUx6QixTQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsU0FBUztZQUNuQiw0SEFBb0M7O1NBRXJDLENBQUM7O09BQ1csYUFBYSxDQVN6QjtJQUFELG9CQUFDO0NBQUEsQUFURCxJQVNDO1NBVFksYUFBYSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBJbnB1dCwgT25Jbml0fSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnZ2QtbG9nbycsXG4gIHRlbXBsYXRlVXJsOiAnLi9sb2dvLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vbG9nby5jb21wb25lbnQubGVzcyddXG59KVxuZXhwb3J0IGNsYXNzIExvZ29Db21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gIEBJbnB1dCgpIGxvZ287XG5cbiAgY29uc3RydWN0b3IoKSB7IH1cblxuICBuZ09uSW5pdCgpIHtcbiAgfVxuXG59XG4iXX0=