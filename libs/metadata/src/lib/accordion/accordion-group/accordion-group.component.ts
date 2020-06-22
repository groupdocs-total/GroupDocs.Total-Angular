import { Component, Input, Output, EventEmitter, QueryList, ViewChildren, AfterViewInit } from '@angular/core';
import { WindowService } from '@groupdocs.examples.angular/common-components';
import { AccordionService } from './../../accordion.service';
import {DatePipe} from "@angular/common";
import { FilePropertyModel } from '../../metadata-models';

@Component({
  selector: 'gd-accordion-group',
  templateUrl: './accordion-group.component.html',
  styleUrls: ['./accordion-group.component.less']
})

export class AccordionGroupComponent implements AfterViewInit {
  @Input() opened = false;
  @Input() title: string;
  @Input() addDisabled: boolean;
  @Input() addHidden: boolean;
  @Input() properties: FilePropertyModel[];
  @Input() propertiesNames: string[];
  @Output() toggle: EventEmitter<any> = new EventEmitter<any>();
  @Output() removeProperty = new EventEmitter<FilePropertyModel>();
  @ViewChildren('textinput') textinput: QueryList<any>;
  isDesktop: boolean;

  constructor(private _accordionService: AccordionService,
              private _datePipe: DatePipe,
              private _windowService: WindowService) {
    this.isDesktop = _windowService.isDesktop();
    _windowService.onResize.subscribe((w) => {
      this.isDesktop = _windowService.isDesktop();
    });
  }

  ngAfterViewInit() {
    this.textinput.changes.subscribe((i: QueryList<any>)=>{
      if (i.length) {
        i.first.nativeElement.focus();
      }
  });
  }

  resetProperties(onlyEditing: boolean = false) {
    if (!onlyEditing) {
      this.properties.forEach(p => p.selected = false);
    }
    this.properties.forEach(p => p.editing = false);
  }

  addProperty($event: Event) {
    $event.preventDefault();
    $event.stopPropagation();

    this.resetProperties();

    if (!this.addDisabled) {
      const addedProperty = new FilePropertyModel();
      addedProperty.original = false;
      this._accordionService.addProperty(addedProperty);
    }
  }

  selectProperty(property: FilePropertyModel){
    if (property.category === 0 && !property.disabled) {
      this.resetProperties(true);

      const selectedProperty = this.properties.filter(p => p.name.toLocaleLowerCase() === property.name.toLocaleLowerCase())[0];
      selectedProperty.selected = !selectedProperty.selected;
      this.properties.filter(p => p.name === property.name)[0].selected = selectedProperty.selected;
    }
  }

  editProperty(property: FilePropertyModel){
    // we can edit only first group props
    if (property.category === 0 && !property.disabled) {
      this.resetProperties();

      const selectedProperty = this.properties.filter(p => p.name.toLocaleLowerCase() === property.name.toLocaleLowerCase())[0];
      selectedProperty.editing = !selectedProperty.editing;
      this.properties.filter(p => p.name === property.name)[0].editing = selectedProperty.editing;
      this.properties.filter(p => p.name === property.name)[0].edited = true;
    }
  }

  delete($event: Event) {
    $event.preventDefault();
    $event.stopPropagation();
    const selectedProperty = this.properties.filter(p => p.selected)[0];
    this.removeProperty.emit(selectedProperty);
  }

  wasSelected() {
    if (this.properties && this.properties.length > 0) {
      return this.properties.filter(p => p.selected).length === 1;
    }
    else return false;
  }

  selectPropName($event: any, property: FilePropertyModel) {
    property.type = $event.type;
    property.name = $event.name;
    if ($event.type === 3) {
      property.value = new Date().toISOString().slice(0, 19);
    }
    else {
      property.value = "";
    }
  }

  formatDateTime(property: FilePropertyModel, value: string){
    if (value) {
      const dateTime = new Date(value);
      property.value = dateTime.toISOString().slice(0, 19);
    }
  }

  formatValue(property: FilePropertyModel){
    switch (property.type) {
      case 3:
        return this.isDesktop ? this._datePipe.transform(new Date(property.value), 'MM/dd/yy, h:mm:ss a')
                              : this._datePipe.transform(new Date(property.value), 'MM/dd/yy, h:mm a');
      default:
        return property.value;
    }
  }
}