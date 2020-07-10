import {Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges} from '@angular/core';
import {DraggableWatermark, Position, WatermarkModel, WatermarkType} from "../watermark-models";
import {NavigateService} from "@groupdocs.examples.angular/common-components";
import {SelectWatermarkService} from "../select-watermark.service";
import {DragWatermarkService} from "../drag-watermark.service";
import {WatermarksHolderService} from "../watermarks-holder.service";


@Component({
  selector: 'gd-watermark-list-panel',
  templateUrl: './watermark-list-panel.component.html',
  styleUrls: ['./watermark-list-panel.component.less']
})
export class WatermarkListPanelComponent implements OnInit, OnChanges {

  @Input() watermarks: WatermarkModel[];
  @Input() icon: string;
  @Input() watermarkType: string;
  @Input() isPdf: boolean;
  @Input() loading: boolean;
  @Output() removeWatermarkEvent = new EventEmitter<string>();

  constructor(private _navigateService: NavigateService,
              private _selectWatermarkService: SelectWatermarkService,
              private _dragWatermarkService: DragWatermarkService,
              private _watermarksHolderService: WatermarksHolderService) {
  }

  ngOnInit() {
  }

  getImage(data: string) {
    const dataImagePngBase64 = 'data:image/png;base64,';
    return dataImagePngBase64 + data;
  }

  deleteWatermark(guid: string) {
    this.removeWatermarkEvent.emit(guid);
  }

  private selectWatermark(watermark: DraggableWatermark) {
    this._selectWatermarkService.select(watermark);
  }

  private getWatermark(guid: string): DraggableWatermark {
    const watermark = new DraggableWatermark();
    watermark.type = this.watermarkType;
    watermark.guid = guid;
    watermark.position = new Position(0, 0);
    watermark.pageNumber = this._navigateService.currentPage;
    return watermark;
  }

  select(guid: string) {
    const watermark = this.getWatermark(guid);
    this.selectWatermark(watermark);
  }

  dragOver($event: DragEvent) {
    $event.preventDefault();
    $event.stopPropagation();
  }

  dragLeave($event: DragEvent, guid: string) {
    this._dragWatermarkService.watermark = this.getWatermark(guid);
  }

  isActive(guid: string) {
    return !this._watermarksHolderService.has(guid);
  }

  dragStart($event: DragEvent) { // for ff
    $event.dataTransfer.setData('text', 'foo');
  }

  empty() {
    return !this.loading && (!this.watermarks || this.watermarks.length === 0);
  }

  ngOnChanges(changes: SimpleChanges): void {
  }

  drop($event: DragEvent) {
    $event.preventDefault();
    $event.stopPropagation();
  }
}
