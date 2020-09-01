import { Component, Input, Output, EventEmitter, QueryList, ViewChildren, AfterViewInit, OnInit } from '@angular/core';
import { WindowService } from '@groupdocs.examples.angular/common-components';
import { DatePipe } from "@angular/common";
import { FilePropertyModel, KnownPropertyModel, AccessLevels, RemovePropertyModel, MetadataPropertyType } from '../../metadata-models';

@Component({
  selector: 'gd-accordion-group',
  templateUrl: './accordion-group.component.html',
  styleUrls: ['./accordion-group.component.less']
})

export class AccordionGroupComponent implements OnInit, AfterViewInit {
  @Input() knownProperties: KnownPropertyModel[]
  @Input() opened = true;
  @Input() title: string;
  @Input() packageId: string;
  @Input() addDisabled: boolean;
  @Input() addHidden: boolean;
  @Input() properties: FilePropertyModel[];
  @Output() removeProperty = new EventEmitter<RemovePropertyModel>();
  knownPropertyDictionary: { [Key: string]: KnownPropertyModel };
  notAddedProperties: KnownPropertyModel[];
  metadataPropertyType: typeof MetadataPropertyType
  @ViewChildren('textinput') textinput: QueryList<any>;
  isDesktop: boolean;

  constructor(private _datePipe: DatePipe,
              private windowService: WindowService) {
  }

  ngOnInit() {
    this.isDesktop = this.windowService.isDesktop();
    this.windowService.onResize.subscribe((w) => {
      this.isDesktop = this.windowService.isDesktop();
    });
    this.knownPropertyDictionary = this.toDictionary(this.knownProperties);
    this.updateNotAddedProperties();
    this.metadataPropertyType = MetadataPropertyType;
  }

  ngAfterViewInit() {
    this.textinput.changes.subscribe((i: QueryList<any>)=>{
      if (i.length) {
        i.first.nativeElement.focus();
      }
    });
  }

  resetProperties() {
      this.properties.forEach(p => { p.selected = false; p.editing = false; });
  }

  toggle($event: Event) {
    this.opened = !this.opened;
  }

  addProperty($event: Event) {
    $event.preventDefault();
    $event.stopPropagation();
    this.resetProperties();
    if (this.isAddAvailable()) {
      const addedProperty = new FilePropertyModel();
      addedProperty.added = true;
      addedProperty.name = "Select property";
      addedProperty.type = 1;
      this.properties.push(addedProperty);
    }
  }

  selectProperty(property: FilePropertyModel) {
      this.resetProperties();
      property.selected = !property.selected;
  }

  editProperty(property: FilePropertyModel){
    if (this.isEditable(property)) {
      this.resetProperties();
      property.editing = !property.editing;
      property.edited = true;
    }
  }

  delete($event: Event) {
    $event.preventDefault();
    $event.stopPropagation();
    const selectedProperty = this.properties.filter(p => p.selected)[0];
    this.removeProperty.emit({ packageId: this.packageId, property: selectedProperty });
  }

  isRemoveAvailable() {
    return this.properties && this.properties.filter(p => p.selected && this.isRemovable(p)).length === 1;
  }

  isAddAvailable() {
    return !this.addDisabled && this.notAddedProperties.length > 0;
  }

  selectPropName($event: any, property: FilePropertyModel) {
    property.type = $event.type;
    property.name = $event.name;
    if ($event.type === MetadataPropertyType.DateTime) {
      property.value = new Date().toISOString().slice(0, 19);
    }
    else {
      property.value = "";
    }
    this.updateNotAddedProperties();
  }

  formatDateTime(property: FilePropertyModel, value: string){
    if (value) {
      const dateTime = new Date(value);
      property.value = dateTime.toISOString().slice(0, 19);
    }
  }

  formatValue(property: FilePropertyModel){
    switch (property.type) {
      case MetadataPropertyType.DateTime:
        return this.isDesktop ? this._datePipe.transform(new Date(property.value), 'MM/dd/yy, h:mm:ss a')
                              : this._datePipe.transform(new Date(property.value), 'MM/dd/yy, h:mm a');
      default:
        return property.value;
    }
  }

  updateNotAddedProperties() {
    const propertyDictionary = this.toDictionary(this.properties);
    this.notAddedProperties = this.knownProperties.filter(p => (p.accessLevel & AccessLevels.Add) != 0 && !(p.name in propertyDictionary));
  }

  isEditable(property: FilePropertyModel) {
    return this.hasAccessTo(property, AccessLevels.Update);
  }

  isRemovable(property: FilePropertyModel) {
    return this.hasAccessTo(property, AccessLevels.Remove);
  }

  hasAccessTo(property: FilePropertyModel, accessLevel: AccessLevels) {
    return property.name in this.knownPropertyDictionary && (this.knownPropertyDictionary[property.name].accessLevel & accessLevel) != 0;
  }

  toDictionary(array: any[]) {
    return array.reduce((obj, item) => {
      obj[item.name] = item;
      return obj;
    }, {});
  }
}