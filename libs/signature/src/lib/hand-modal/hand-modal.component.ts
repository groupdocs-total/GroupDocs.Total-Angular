import {Component, OnInit} from '@angular/core';
import {SignatureService} from "../signature.service";
import {SignatureTabActivatorService} from "../signature-tab-activator.service"
import {CanvasComponent} from "../canvas/canvas.component";
import {SignatureType} from "../signature-models";
import {CommonModals, ModalService} from "@groupdocs.examples.angular/common-components";

@Component({
  selector: 'gd-hand-modal',
  templateUrl: './hand-modal.component.html',
  styleUrls: ['./hand-modal.component.less']
})
export class HandModalComponent implements OnInit {
  defaultColor = '#000000';
  selectedColor = this.defaultColor;
  colorPickerShow = false;

  constructor(private _signatureService: SignatureService,
              private _tabActivationService: SignatureTabActivatorService,
              private _modalService: ModalService) {
  }

  ngOnInit() {
  }

  selectColor(color: string) {
    this.selectedColor = color;
    this.colorPickerShow = false;
  }

  saveSign(canvasComponent: CanvasComponent) {
    const img = canvasComponent.getImage();
    this._signatureService.saveImage(img).subscribe(() => {
      this._tabActivationService.changeActiveTab(SignatureType.HAND.id);
    });
    this.close();
  }

  private close() {
    this._modalService.close(CommonModals.DrawHandSignature);
  }

  toggleColorPicker($event) {
    $event.preventDefault();
    $event.stopPropagation();
    this.colorPickerShow = !this.colorPickerShow;
  }

  closePicker($event) {
    this.colorPickerShow = !$event;
  }
}
