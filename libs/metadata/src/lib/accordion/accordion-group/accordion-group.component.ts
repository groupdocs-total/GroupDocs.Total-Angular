import { ChangeDetectionStrategy, Component, Input, Output, EventEmitter } from '@angular/core';
import { FilePropertyModel } from '@groupdocs.examples.angular/common-components';
import { AccordionService } from './../../accordion.service';

@Component({
  selector: 'gd-accordion-group',
  templateUrl: './accordion-group.component.html',
  styleUrls: ['./accordion-group.component.less'],
  // changeDetection: ChangeDetectionStrategy.OnPush
})
export class AccordionGroupComponent {
  /**
   * If the panel is opened or closed
   */
  @Input() opened = false;

  /**
   * Text to display in the group title bar
   */
  @Input() title: string;
  @Input() disabled: boolean;
  @Input() properties: FilePropertyModel[];
  @Input() propertiesNames: string[];

  /**
   * Emitted when user clicks on group titlebar
   * @type {EventEmitter<any>}
   */
  @Output() toggle: EventEmitter<any> = new EventEmitter<any>();

   _selectedPropName = "Select property";

  constructor(private _accordionService: AccordionService) {
  }

  get selectedPropName() {
    return this._selectedPropName;
  }

  addProperty($event) {
    $event.preventDefault();
    $event.stopPropagation();
    this._selectedPropName = "Select property";

    // TODO: for the moment we are working only with a single property
    this.properties.forEach(p => p.selected = false);
    this.properties.forEach(p => p.editing = false);

    if (!this.disabled) {
      const addedProperty = new FilePropertyModel();
      addedProperty.original = false;
      this._accordionService.addProperty(addedProperty);
    }
  }

  selectProperty($event, property: FilePropertyModel){
    // TODO: for the moment we are working only with a single property
    this.properties.forEach(p => p.selected = false);
    this.properties.forEach(p => p.editing = false);

    const selectedProperty = this.properties.filter(p => p.name.toLocaleLowerCase() == property.name.toLocaleLowerCase())[0];
    selectedProperty.selected = !selectedProperty.selected;
    this.properties.filter(p => p.name == property.name)[0].selected = selectedProperty.selected;
  }

  editProperty($event, property: FilePropertyModel){
    // TODO: for the moment we are working only with a single property
    this.properties.forEach(p => p.selected = false);
    this.properties.forEach(p => p.editing = false);

    const selectedProperty = this.properties.filter(p => p.name.toLocaleLowerCase() == property.name.toLocaleLowerCase())[0];
    selectedProperty.editing = !selectedProperty.editing;
    this.properties.filter(p => p.name == property.name)[0].editing = selectedProperty.editing;
  }

  delete($event) {
    $event.preventDefault();
    $event.stopPropagation();
    const selectedProperty = this.properties.filter(p => p.selected)[0];
    this._accordionService.removeProperty(selectedProperty);
  }

  wasSelected() {
    if (this.properties && this.properties.length > 0) {
      return this.properties.filter(p => p.selected).length == 1;
    }
    else return false;
  }

  selectPropName($event) {
    this._selectedPropName = $event.name;

    this.properties.filter(p => p.name == "")[0].name = $event.name;
  }
}