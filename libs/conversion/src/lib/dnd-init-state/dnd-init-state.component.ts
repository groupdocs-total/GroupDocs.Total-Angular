import {Component, Input, OnInit} from '@angular/core';
import {CommonModals, ModalService} from "@groupdocs.examples.angular/common-components";

@Component({
  selector: 'gd-dnd-init-state',
  templateUrl: './dnd-init-state.component.html',
  styleUrls: ['./dnd-init-state.component.less']
})
export class DndInitStateComponent implements OnInit {
  @Input() icon: string;
  @Input() text: string;

  constructor(private _modalService: ModalService) {
  }

  ngOnInit() {
  }

  dropped($event) {
    if ($event) {
      this._modalService.open(CommonModals.BrowseFiles);
    }
  }

}
