import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {
  Formatting,
  WindowService
} from "@groupdocs.examples.angular/common-components";

@Component({
  selector: 'gd-context-menu',
  templateUrl: './context-menu.component.html',
  styleUrls: ['./context-menu.component.less']
})
export class ContextMenuComponent implements OnInit {
  @Input() formatting: Formatting = Formatting.default();
  @Input() textMenu: boolean;
  @Input() topPosition: number;
  @Input() lock = false;
  @Output() changeFormatting = new EventEmitter<Formatting>();
  @Output() removeSign = new EventEmitter<boolean>();
  @Output() copySign = new EventEmitter<boolean>();
  @Output() lockOut = new EventEmitter<boolean>();

  isMobile: boolean;

  constructor(private _windowService: WindowService) {
    this.isMobile = _windowService.isMobile();
    _windowService.onResize.subscribe((w) => {
      this.isMobile = _windowService.isMobile();
    });
  }

  ngOnInit() {
  }

  saveChanges() {
    this.changeFormatting.emit(this.formatting);
  }

  selectFontSize($event: number) {
    this.formatting.fontSize = $event;
    this.saveChanges();
  }

  selectFont($event: string) {
    this.formatting.font = $event;
    this.saveChanges();
  }

  selectColor($event: string) {
    this.formatting.color = $event;
    this.saveChanges();
  }

  toggleBold($event) {
    this.formatting.bold = $event;
    this.saveChanges();
  }

  toggleItalic($event) {
    this.formatting.italic = $event;
    this.saveChanges();
  }

  toggleUnderline($event) {
    this.formatting.underline = $event;
    this.saveChanges();
  }

  deleteSign() {
    this.removeSign.emit(true);
  }

  toggleLock() {
    this.lock = !this.lock;
    this.lockOut.emit(this.lock);
  }

  onCopySign() {
    this.copySign.emit(true);
  }
}
