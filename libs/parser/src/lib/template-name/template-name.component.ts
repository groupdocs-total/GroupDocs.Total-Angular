import { Component, Input, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-template-name',
  templateUrl: './template-name.component.html',
  styleUrls: ['./template-name.component.less']
})
export class TemplateNameComponent implements OnInit {

  private _name = "";
  private editorMode = false;

  @Output() nameChanged = new EventEmitter();

  showToolTip = false;

  constructor() { }

  ngOnInit() {
  }

  @Input() set name(name: string) {
    this.setName(name);
  }

  setName(name: string) {
    this._name = name;
  }

  getName() {
    return this._name;
  }

  isEditorMode() {
    return this.editorMode;
  }

  openEditor() {
    this.editorMode = true;
  }

  closeEditor() {
    this.editorMode = false;
    this.confirmNameChanged();
  }

  confirmNameChanged() {
    this.nameChanged.emit(this._name);
  }

  keyUp($event: KeyboardEvent) {
    if ($event.key == "Enter" && this.isEditorMode()) {
      this.closeEditor();
    }
  }
}
