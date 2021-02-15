import { Component, Input } from '@angular/core';
import { PreviewStatus } from './preview-models';

@Component({
  selector: 'gd-preview-status',
  templateUrl: './preview-status.component.html',
  styleUrls: ['./preview-status.component.less']
})
export class PreviewStatusComponent {
  @Input() status: PreviewStatus;  
  previewStatus: typeof PreviewStatus;

  constructor() {
      this.previewStatus = PreviewStatus;
  }  
}
