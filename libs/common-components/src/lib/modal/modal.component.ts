import {Component, ElementRef, EventEmitter, Input, OnDestroy, OnInit, Output} from '@angular/core';
import {ModalService} from "../modal.service";

@Component({
  selector: 'gd-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.less']
})
export class ModalComponent implements OnInit, OnDestroy {
  @Input() id: string;
  @Input() title: string;
  @Output() visible = new EventEmitter<boolean>();
  visibility: boolean = false;
  private element: any;

  constructor(private modalService: ModalService, el: ElementRef) {
    this.element = el.nativeElement;
  }

  ngOnInit(): void {
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
    this.visible.emit(true);
  }

  close(): void {
    this.visibility = false;
    this.visible.emit(false);
  }

  onClose($event: MouseEvent) {
    if ($event && $event.target && (<Element>$event.target).id == 'modalDialog') {
      this.close();
    }
  }
}
