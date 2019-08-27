import {
  Component,
  EventEmitter,
  forwardRef,
  HostBinding,
  HostListener,
  Inject,
  Input,
  Output,
  ViewEncapsulation
} from '@angular/core';


const horizontalAlignment = {
  center : {
    right: 'auto'
  },
  left : {
    right: '100%'
  },
  right : {
    right: '-100%'
  }
};

const verticalAlignment = {
  center : {
    top : '0px',
  },
  top : {
    top : '-100%',
    right: '100%'
  },
  bottom : {
    top: 'autos'
  }
};

/**
 *  DropDownToggleComponent
 */
@Component({
  selector: 'gd-drop-down-toggle',
  template: '<ng-content></ng-content>',
  styleUrls: ['./drop-down.component.less'],
  encapsulation : ViewEncapsulation.None
})
export class DropDownToggleComponent{
  @HostListener('click',['$event'])
  click = (event: any) => this.dropdown.toggle(event);
  constructor(@Inject(forwardRef(() => DropDownComponent)) public dropdown) {}
}

/**
 *  DropDownItemsComponent
 */
@Component({
  selector: 'gd-drop-down-items',
  template: '<div class="drop-down-items" gdOutside [clickOutsideEnabled]="isOpen" (clickOutside)="onClickOutside($event)" [style.right]="horizontalAlign" [style.top]="verticalAlign"><ng-content></ng-content></div>',
  styleUrls: ['./drop-down.component.less'],
  encapsulation : ViewEncapsulation.None
})
export class DropDownItemsComponent{

  get horizontalAlign(){
    return horizontalAlignment[this.dropdown.getPlacement().h].right;
  }

  get verticalAlign(){
    return verticalAlignment[this.dropdown.getPlacement().v].top;
  }

  get isOpen(){
    return this.dropdown._open;
  }

  constructor(@Inject(forwardRef(() => DropDownComponent)) public dropdown) {}

  onClickOutside(event : Event  ){
    if(event && event['value'] === true) {
      this.dropdown.close();
    }
  }
}

/**
 *  DropDownItemComponent
 */
@Component({
  selector: 'gd-drop-down-item',
  template: '<div class="drop-down-item"><ng-content></ng-content></div>',
  styleUrls: ['./drop-down.component.less'],
  encapsulation : ViewEncapsulation.None
})
export class DropDownItemComponent{
  @HostBinding('class')
  class = 'drop-down-item';

  @Output()
  select = new EventEmitter();

  @HostListener('click')
  click = () => this.selectEntry();

  constructor(@Inject(forwardRef(() => DropDownComponent)) public dropdown) {}

  selectEntry(){
    this.select.next();
    this.dropdown.close();
  }
}

/**
 *  DropDownComponent
 */
@Component({
  selector: 'gd-drop-down',
  template: '<div class="drop-down"><ng-content></ng-content></div>',
  styleUrls: ['./drop-down.component.less'],
  encapsulation : ViewEncapsulation.None
})
export class DropDownComponent{
  @Input()
  placement = {
    h: "center",
    v: "bottom"
  };


  @Input('open')
  @HostBinding('class.show')
  _open = false;

  @HostBinding('class')
  class = 'drop-down';

  close(){
    this._open = false;
  }

  toggle(event : MouseEvent){
    event.stopPropagation();
    this._open = !this._open;
    document.body.click();
  }

  getPlacement(){
    return this.placement;
  }
}
