import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {CanvasComponent} from "../canvas/canvas.component";
import {SignatureService} from "../signature.service";
import {SignatureType} from "../signature-models";
import {SignatureTabActivatorService} from "../signature-tab-activator.service";

@Component({
  selector: 'gd-hand-lightbox',
  templateUrl: './hand-lightbox.component.html',
  styleUrls: ['./hand-lightbox.component.less']
})
export class HandLightboxComponent implements OnInit {
  @Output() opening = new EventEmitter<boolean>();
  defaultColor = '#000000';
  selectedColor = this.defaultColor;
  colors = [
    '#000000', '#444444', '#999999', '#DDDDDD', '#6B0100', '#AD0200',
    '#6B5E00', '#FFE000', '#007A22', '#00E53F', '#000884', '#000FFF'
  ];

  constructor(private _signatureService: SignatureService,
              private _tabActivationService: SignatureTabActivatorService) {
  }

  ngOnInit() {
  }

  selectColor(color: string) {
    this.selectedColor = color;
  }

  saveSign(canvasComponent: CanvasComponent) {
    const img = canvasComponent.getImage();
    this._signatureService.saveImage(img).subscribe(() => {
      this._tabActivationService.changeActiveTab(SignatureType.HAND.id);
    });
    this.close();
  }

  private close() {
    this.opening.emit(false);
  }

  clear(canvasComponent: CanvasComponent, $event: boolean) {
    if (!$event) {
      canvasComponent.clear();
      this.close();
    }
  }
}
