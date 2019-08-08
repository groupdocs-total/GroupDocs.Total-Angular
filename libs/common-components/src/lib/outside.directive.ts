import { Directive, OnInit, OnDestroy, Output, EventEmitter, ElementRef, Input } from '@angular/core';
import { fromEvent, Observable } from 'rxjs';

@Directive({
  selector: '[gdOutside]'
})
export class OutsideDirective implements OnInit, OnDestroy {
  private globalClick:Observable<Event>;

  @Input() clickOutsideEnabled: boolean;
  @Output() clickOutside:EventEmitter<Object>;

  constructor(private _elRef:ElementRef) {
    this.clickOutside = new EventEmitter();
  }

  ngOnInit() {
    this.globalClick = fromEvent(document, 'click');
    this.globalClick.subscribe((event:Event) => {
        this.onGlobalClick(event);
      });
  }

  ngOnDestroy() {}

  onGlobalClick(event:Event) {
    if (event instanceof MouseEvent && this.clickOutsideEnabled  === true) {
      if(this.isDescendant(this._elRef.nativeElement, event.target) === true) {
        this.clickOutside.emit({
          target: (event.target || null),
          value: false
        });
      } else {
        this.clickOutside.emit({
          target: (event.target || null),
          value: true
        });
      }
    }
  }

  isDescendant(parent, child) {
    let node = child;
    while (node !== null) {
      if (node === parent) {
        return true;
      } else {
        node = node.parentNode;
      }
    }
    return false;
  }
}
