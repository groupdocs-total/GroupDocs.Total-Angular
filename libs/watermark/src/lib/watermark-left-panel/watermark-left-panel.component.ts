import {Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges} from '@angular/core';
import {WatermarkModel, WatermarkType} from "../watermark-models";
import {WatermarkService} from "../watermark.service";

@Component({
  selector: 'gd-watermark-left-panel',
  templateUrl: './watermark-left-panel.component.html',
  styleUrls: ['./watermark-left-panel.component.less']
})
export class WatermarkLeftPanelComponent implements OnInit, OnChanges {
  @Input() rewrite: boolean;
  @Input() isPdf: boolean;
  @Input() id: string;
  @Output() newWatermarkEvent = new EventEmitter<string>();
  public showNewCode = false;
  public showUpload = false;
  watermarks: WatermarkModel[];
  loading = false;

  constructor(private _watermarkService: WatermarkService) {
    _watermarkService.getRefreshWatermarks.subscribe(() => {
      this.getWatermarks(this.id);
    });
  }

  getWatermarks(tabId: string) {
    if (!this.loading) {
      this.loading = true;
      this._watermarkService.getWatermarks('', tabId).subscribe((watermarks: WatermarkModel[]) => {
        this.watermarks = watermarks || [];
        this.loading = false;
      });
    }
  }

  ngOnInit() {
    this.init();
  }

  private init() {
    this.watermarks = [];
    this.getWatermarks(this.id);
    this.showUpload = false;
  }

  getTitleIcon() {
    return this.showUpload ? 'times' : 'plus';
  }

  getTitle() {
    if (!this.id) {
      return "";
    }
    const watermarkType = WatermarkType.getWatermarkType(this.id);
    return (this.showUpload) ? watermarkType.title : watermarkType.name;
  }

  getName() {
    if (!this.id) {
      return "";
    }
    const watermarkType = WatermarkType.getWatermarkType(this.id);
    return watermarkType.name;
  }

  removeWatermark($event: string, type: string) {
    this._watermarkService.removeWatermarks($event, type).subscribe(() => this.getWatermarks(type));
  }

  closeUploadPanel($event: boolean) {
    this.showUpload = !$event;
    this.getWatermarks(this.id);
  }

  closeCodePanel($event: boolean) {
    this.showNewCode = !$event;
    this.getWatermarks(this.id);
  }

  icon() {
    if (!this.id) {
      return "";
    }
    return WatermarkType.getWatermarkType(this.id).icon;
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.init();
  }

  closeNewWatermark() {
    if (WatermarkType.IMAGE.id === this.id) {
      this.showUpload = false;
    }
  }

  openNewWatermark() {
    if (this.showUpload || this.showNewCode) {
      return;
    }
    if (WatermarkType.IMAGE.id === this.id) {
      this.showUpload = true;
    } else {
      this.newWatermarkEvent.emit(this.id);
    }
  }
}
