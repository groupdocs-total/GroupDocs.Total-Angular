import { Component, Input, Output, EventEmitter, QueryList, ViewChildren, AfterViewInit } from '@angular/core';
import { FilePropertyModel, WindowService } from '@groupdocs.examples.angular/common-components';
import { AccordionService } from './../../accordion.service';
import {DatePipe} from "@angular/common";

@Component({
  selector: 'gd-accordion-group',
  templateUrl: './accordion-group.component.html',
  styleUrls: ['./accordion-group.component.less']
})

export class AccordionGroupComponent implements AfterViewInit {
  @Input() opened = false;
  @Input() title: string;
  @Input() disabled: boolean;
  @Input() properties: FilePropertyModel[];
  @Input() propertiesNames: string[];
  @Output() toggle: EventEmitter<any> = new EventEmitter<any>();
  @ViewChildren('textinput') textinput: QueryList<any>; 
   _selectedPropName = "Select property";
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

  get selectedPropName() {
    return this._selectedPropName;
  }

  resetProperties(onlyEditing: boolean = false) {
    // for the moment we are working only with a single property
    if (!onlyEditing) {
      this.properties.forEach(p => p.selected = false);
    }
    this.properties.forEach(p => p.editing = false);
  }

  addProperty($event: Event) {
    $event.preventDefault();
    $event.stopPropagation();

    this._selectedPropName = "Select property";
    this.resetProperties();

    if (!this.disabled) {
      const addedProperty = new FilePropertyModel();
      addedProperty.original = false;
      this._accordionService.addProperty(addedProperty);
    }
  }

  selectProperty(property: FilePropertyModel){
    if (property.category === 0) {
      this.resetProperties(true);

      const selectedProperty = this.properties.filter(p => p.name.toLocaleLowerCase() === property.name.toLocaleLowerCase())[0];
      selectedProperty.selected = !selectedProperty.selected;
      this.properties.filter(p => p.name === property.name)[0].selected = selectedProperty.selected;
    }
  }

  editProperty(property: FilePropertyModel){
    // we can edit only first group props
    if (property.category === 0) {
      this.resetProperties();

      const selectedProperty = this.properties.filter(p => p.name.toLocaleLowerCase() === property.name.toLocaleLowerCase())[0];
      selectedProperty.editing = !selectedProperty.editing;
      this.properties.filter(p => p.name === property.name)[0].editing = selectedProperty.editing;
    }
  }

  delete($event: Event) {
    $event.preventDefault();
    $event.stopPropagation();
    const selectedProperty = this.properties.filter(p => p.selected)[0];
    this._accordionService.removeProperty(selectedProperty);
  }

  wasSelected() {
    if (this.properties && this.properties.length > 0) {
      return this.properties.filter(p => p.selected).length === 1;
    }
    else return false;
  }

  selectPropName($event: any) {
    this._selectedPropName = $event.name;
    const editingProperty = this.properties.filter(p => !p.original)[0];
    editingProperty.type = $event.type;
    editingProperty.name = $event.name;
    if ($event.type === 3) {
      editingProperty.value = new Date().toISOString().slice(0, 19);
    }
    else {
      editingProperty.value = "";
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
      case 1:
        return property.value;
      case 3:
        return this.isDesktop ? this._datePipe.transform(new Date(property.value), 'M/dd/yy, h:mm:ss a')
                              : this._datePipe.transform(new Date(property.value), 'M/dd/yy, h:mm a');
      case 5:
        return property.value;
    }
  }
}