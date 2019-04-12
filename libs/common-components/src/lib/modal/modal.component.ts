import {Component, ElementRef, Input, OnDestroy, OnInit} from '@angular/core';
import {ModalService} from "../modal.service";

@Component({
  selector: 'gd-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.less']
})
export class ModalComponent implements OnInit, OnDestroy {
  @Input() id: string;
  @Input() title: string;
  visibility: boolean = false;
  private element: any;

  constructor(private modalService: ModalService, private el: ElementRef) {
    this.element = el.nativeElement;
  }

  ngOnInit(): void {
    let modal = this;

    if (!this.id) {
      console.error('modal must have an id');
      return;
    }

    document.body.appendChild(this.element);

    this.modalService.add(this);
  }

  ngOnDestroy(): void {
    this.modalService.remove(this.id);
    this.element.remove();
  }

  open(): void {
    this.visibility = true;
  }

  close(): void {
    this.visibility = false;
  }

  onClose($event: MouseEvent) {
    if ($event && $event.target && (<Element>$event.target).id == 'modalDialog') {
      this.close();
    }
  }
}
