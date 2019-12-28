import { ChangeDetectionStrategy, Component, Input, Output, EventEmitter } from '@angular/core';
import { FilePropertyModel } from '@groupdocs.examples.angular/common-components';

@Component({
  selector: 'group',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.less'],
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

  @Input() properties: FilePropertyModel[];

  /**
   * Emitted when user clicks on group titlebar
   * @type {EventEmitter<any>}
   */
  @Output() toggle: EventEmitter<any> = new EventEmitter<any>();
}