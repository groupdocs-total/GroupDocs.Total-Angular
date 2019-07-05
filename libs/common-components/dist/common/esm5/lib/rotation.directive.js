import * as tslib_1 from "tslib";
import { Directive, HostBinding, Input } from '@angular/core';
var RotationDirective = /** @class */ (function () {
    function RotationDirective() {
        this.withMargin = true;
    }
    RotationDirective.prototype.updateCursor = function () {
        if (this.angle) {
            this.animation = 'none';
            this.transition = 'none';
            this.transform = 'rotate(' + this.angle + 'deg)';
        }
        else if (this.angle === 0 && this.animation) {
            this.animation = null;
            this.transition = null;
            this.transform = null;
        }
        if (this.withMargin) {
            if (this.angle === 90 || this.angle === 270 || this.angle === -90 || this.angle === -270) {
                if (this.isHtmlMode) {
                    if (this.isLandscape()) {
                        this.margin = '164px 254px';
                    }
                    else {
                        this.margin = '-111px 254px';
                    }
                }
                else {
                    if (this.isLandscape()) {
                        this.margin = '129px 100px -79px';
                    }
                    else {
                        this.margin = '-72px 100px -79px';
                    }
                }
            }
            else if (this.angle === -180 || this.angle === 180) {
                this.margin = '280px';
            }
            else {
                this.margin = null;
            }
        }
    };
    RotationDirective.prototype.isLandscape = function () {
        return this.width > this.height;
    };
    RotationDirective.prototype.ngOnInit = function () {
        this.updateCursor();
    };
    RotationDirective.prototype.ngOnChanges = function (changes) {
        this.updateCursor();
    };
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Number)
    ], RotationDirective.prototype, "angle", void 0);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Boolean)
    ], RotationDirective.prototype, "isHtmlMode", void 0);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Number)
    ], RotationDirective.prototype, "width", void 0);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Number)
    ], RotationDirective.prototype, "height", void 0);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Object)
    ], RotationDirective.prototype, "withMargin", void 0);
    tslib_1.__decorate([
        HostBinding('style.animation'),
        tslib_1.__metadata("design:type", String)
    ], RotationDirective.prototype, "animation", void 0);
    tslib_1.__decorate([
        HostBinding('style.transition-property'),
        tslib_1.__metadata("design:type", String)
    ], RotationDirective.prototype, "transition", void 0);
    tslib_1.__decorate([
        HostBinding('style.transform'),
        tslib_1.__metadata("design:type", String)
    ], RotationDirective.prototype, "transform", void 0);
    tslib_1.__decorate([
        HostBinding('style.margin'),
        tslib_1.__metadata("design:type", String)
    ], RotationDirective.prototype, "margin", void 0);
    RotationDirective = tslib_1.__decorate([
        Directive({
            selector: '[gdRotation]'
        }),
        tslib_1.__metadata("design:paramtypes", [])
    ], RotationDirective);
    return RotationDirective;
}());
export { RotationDirective };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm90YXRpb24uZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdyb3VwZG9jcy5leGFtcGxlcy5hbmd1bGFyL2NvbW1vbi1jb21wb25lbnRzLyIsInNvdXJjZXMiOlsibGliL3JvdGF0aW9uLmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFDLFNBQVMsRUFBRSxXQUFXLEVBQUUsS0FBSyxFQUFtQyxNQUFNLGVBQWUsQ0FBQztBQUs5RjtJQWNFO1FBUlMsZUFBVSxHQUFHLElBQUksQ0FBQztJQVMzQixDQUFDO0lBRU8sd0NBQVksR0FBcEI7UUFDRSxJQUFJLElBQUksQ0FBQyxLQUFLLEVBQUU7WUFDZCxJQUFJLENBQUMsU0FBUyxHQUFHLE1BQU0sQ0FBQztZQUN4QixJQUFJLENBQUMsVUFBVSxHQUFHLE1BQU0sQ0FBQztZQUN6QixJQUFJLENBQUMsU0FBUyxHQUFHLFNBQVMsR0FBRyxJQUFJLENBQUMsS0FBSyxHQUFHLE1BQU0sQ0FBQztTQUNsRDthQUFNLElBQUksSUFBSSxDQUFDLEtBQUssS0FBSyxDQUFDLElBQUksSUFBSSxDQUFDLFNBQVMsRUFBRTtZQUM3QyxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQztZQUN0QixJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQztZQUN2QixJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQztTQUN2QjtRQUVELElBQUksSUFBSSxDQUFDLFVBQVUsRUFBRTtZQUNuQixJQUFJLElBQUksQ0FBQyxLQUFLLEtBQUssRUFBRSxJQUFJLElBQUksQ0FBQyxLQUFLLEtBQUssR0FBRyxJQUFJLElBQUksQ0FBQyxLQUFLLEtBQUssQ0FBQyxFQUFFLElBQUksSUFBSSxDQUFDLEtBQUssS0FBSyxDQUFDLEdBQUcsRUFBRTtnQkFDeEYsSUFBSSxJQUFJLENBQUMsVUFBVSxFQUFFO29CQUNuQixJQUFJLElBQUksQ0FBQyxXQUFXLEVBQUUsRUFBRTt3QkFDdEIsSUFBSSxDQUFDLE1BQU0sR0FBRyxhQUFhLENBQUM7cUJBQzdCO3lCQUFNO3dCQUNMLElBQUksQ0FBQyxNQUFNLEdBQUcsY0FBYyxDQUFDO3FCQUM5QjtpQkFDRjtxQkFBTTtvQkFDTCxJQUFJLElBQUksQ0FBQyxXQUFXLEVBQUUsRUFBRTt3QkFDdEIsSUFBSSxDQUFDLE1BQU0sR0FBRyxtQkFBbUIsQ0FBQztxQkFDbkM7eUJBQU07d0JBQ0wsSUFBSSxDQUFDLE1BQU0sR0FBRyxtQkFBbUIsQ0FBQztxQkFDbkM7aUJBQ0Y7YUFDRjtpQkFBTSxJQUFJLElBQUksQ0FBQyxLQUFLLEtBQUssQ0FBQyxHQUFHLElBQUksSUFBSSxDQUFDLEtBQUssS0FBSyxHQUFHLEVBQUU7Z0JBQ3BELElBQUksQ0FBQyxNQUFNLEdBQUcsT0FBTyxDQUFDO2FBQ3ZCO2lCQUFNO2dCQUNMLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO2FBQ3BCO1NBQ0Y7SUFFSCxDQUFDO0lBRUQsdUNBQVcsR0FBWDtRQUNFLE9BQU8sSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDO0lBQ2xDLENBQUM7SUFFRCxvQ0FBUSxHQUFSO1FBQ0UsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDO0lBQ3RCLENBQUM7SUFFRCx1Q0FBVyxHQUFYLFVBQVksT0FBc0I7UUFDaEMsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFBO0lBQ3JCLENBQUM7SUE1RFE7UUFBUixLQUFLLEVBQUU7O29EQUFlO0lBQ2Q7UUFBUixLQUFLLEVBQUU7O3lEQUFxQjtJQUNwQjtRQUFSLEtBQUssRUFBRTs7b0RBQWU7SUFDZDtRQUFSLEtBQUssRUFBRTs7cURBQWdCO0lBQ2Y7UUFBUixLQUFLLEVBQUU7O3lEQUFtQjtJQUVLO1FBQS9CLFdBQVcsQ0FBQyxpQkFBaUIsQ0FBQzs7d0RBQW1CO0lBQ1I7UUFBekMsV0FBVyxDQUFDLDJCQUEyQixDQUFDOzt5REFBb0I7SUFDN0I7UUFBL0IsV0FBVyxDQUFDLGlCQUFpQixDQUFDOzt3REFBbUI7SUFFckI7UUFBNUIsV0FBVyxDQUFDLGNBQWMsQ0FBQzs7cURBQWdCO0lBWmpDLGlCQUFpQjtRQUg3QixTQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsY0FBYztTQUN6QixDQUFDOztPQUNXLGlCQUFpQixDQWdFN0I7SUFBRCx3QkFBQztDQUFBLEFBaEVELElBZ0VDO1NBaEVZLGlCQUFpQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7RGlyZWN0aXZlLCBIb3N0QmluZGluZywgSW5wdXQsIE9uQ2hhbmdlcywgT25Jbml0LCBTaW1wbGVDaGFuZ2VzfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnW2dkUm90YXRpb25dJ1xufSlcbmV4cG9ydCBjbGFzcyBSb3RhdGlvbkRpcmVjdGl2ZSBpbXBsZW1lbnRzIE9uSW5pdCwgT25DaGFuZ2VzIHtcblxuICBASW5wdXQoKSBhbmdsZTogbnVtYmVyO1xuICBASW5wdXQoKSBpc0h0bWxNb2RlOiBib29sZWFuO1xuICBASW5wdXQoKSB3aWR0aDogbnVtYmVyO1xuICBASW5wdXQoKSBoZWlnaHQ6IG51bWJlcjtcbiAgQElucHV0KCkgd2l0aE1hcmdpbiA9IHRydWU7XG5cbiAgQEhvc3RCaW5kaW5nKCdzdHlsZS5hbmltYXRpb24nKSBhbmltYXRpb246IHN0cmluZztcbiAgQEhvc3RCaW5kaW5nKCdzdHlsZS50cmFuc2l0aW9uLXByb3BlcnR5JykgdHJhbnNpdGlvbjogc3RyaW5nO1xuICBASG9zdEJpbmRpbmcoJ3N0eWxlLnRyYW5zZm9ybScpIHRyYW5zZm9ybTogc3RyaW5nO1xuXG4gIEBIb3N0QmluZGluZygnc3R5bGUubWFyZ2luJykgbWFyZ2luOiBzdHJpbmc7XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gIH1cblxuICBwcml2YXRlIHVwZGF0ZUN1cnNvcigpIHtcbiAgICBpZiAodGhpcy5hbmdsZSkge1xuICAgICAgdGhpcy5hbmltYXRpb24gPSAnbm9uZSc7XG4gICAgICB0aGlzLnRyYW5zaXRpb24gPSAnbm9uZSc7XG4gICAgICB0aGlzLnRyYW5zZm9ybSA9ICdyb3RhdGUoJyArIHRoaXMuYW5nbGUgKyAnZGVnKSc7XG4gICAgfSBlbHNlIGlmICh0aGlzLmFuZ2xlID09PSAwICYmIHRoaXMuYW5pbWF0aW9uKSB7XG4gICAgICB0aGlzLmFuaW1hdGlvbiA9IG51bGw7XG4gICAgICB0aGlzLnRyYW5zaXRpb24gPSBudWxsO1xuICAgICAgdGhpcy50cmFuc2Zvcm0gPSBudWxsO1xuICAgIH1cblxuICAgIGlmICh0aGlzLndpdGhNYXJnaW4pIHtcbiAgICAgIGlmICh0aGlzLmFuZ2xlID09PSA5MCB8fCB0aGlzLmFuZ2xlID09PSAyNzAgfHwgdGhpcy5hbmdsZSA9PT0gLTkwIHx8IHRoaXMuYW5nbGUgPT09IC0yNzApIHtcbiAgICAgICAgaWYgKHRoaXMuaXNIdG1sTW9kZSkge1xuICAgICAgICAgIGlmICh0aGlzLmlzTGFuZHNjYXBlKCkpIHtcbiAgICAgICAgICAgIHRoaXMubWFyZ2luID0gJzE2NHB4IDI1NHB4JztcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5tYXJnaW4gPSAnLTExMXB4IDI1NHB4JztcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaWYgKHRoaXMuaXNMYW5kc2NhcGUoKSkge1xuICAgICAgICAgICAgdGhpcy5tYXJnaW4gPSAnMTI5cHggMTAwcHggLTc5cHgnO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLm1hcmdpbiA9ICctNzJweCAxMDBweCAtNzlweCc7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKHRoaXMuYW5nbGUgPT09IC0xODAgfHwgdGhpcy5hbmdsZSA9PT0gMTgwKSB7XG4gICAgICAgIHRoaXMubWFyZ2luID0gJzI4MHB4JztcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMubWFyZ2luID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgfVxuXG4gIGlzTGFuZHNjYXBlKCkge1xuICAgIHJldHVybiB0aGlzLndpZHRoID4gdGhpcy5oZWlnaHQ7XG4gIH1cblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLnVwZGF0ZUN1cnNvcigpO1xuICB9XG5cbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcyk6IHZvaWQge1xuICAgIHRoaXMudXBkYXRlQ3Vyc29yKClcbiAgfVxuXG59XG4iXX0=