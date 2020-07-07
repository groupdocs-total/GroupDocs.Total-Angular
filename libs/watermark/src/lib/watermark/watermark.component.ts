import {AfterViewInit, Component, OnInit, Input, AfterViewChecked} from '@angular/core';
import {
  WatermarkData,
  WatermarkType,
  Dimension,
  Position,
  RemoveWatermark,
  AddedWatermark,
  DraggableWatermark,
  WatermarkProps,
  CopyChanges,
  CopyWatermark
} from "../watermark-models";
import {ActiveWatermarkService} from "../active-watermark.service";
import {Formatting, Utils, MenuType, ZoomService} from "@groupdocs.examples.angular/common-components";
import {RemoveWatermarkService} from "../remove-watermark.service";
import * as jquery from 'jquery';
import { Subject } from 'rxjs';
import { WatermarksHolderService } from '../watermarks-holder.service';
import { WatermarkService } from '../watermark.service';
import { CopyWatermarkService } from '../copy-watermark.service';
import { debounceTime } from 'rxjs/operators';

const $ = jquery;

@Component({
  selector: 'gd-watermark',
  templateUrl: './watermark.component.html',
  styleUrls: ['./watermark.component.less']
})
export class WatermarkComponent implements OnInit, AfterViewInit, AfterViewChecked {
  @Input() id: number;
  @Input() data: AddedWatermark;
  @Input() position: Position;
  @Input() type: string;
  @Input() pageWidth: number;
  @Input() pageHeight: number;
  active = true;
  unlock = true;
  copied = false;
  baseCopied = false;
  private oldPosition: { x: number; y: number };

  private subject: Subject<string> = new Subject();

  constructor(private _watermarkService: WatermarkService,
              private _removeWatermarkService: RemoveWatermarkService,
              private _copyWatermarkService: CopyWatermarkService,
              private _activeWatermarkService: ActiveWatermarkService,
              private _watermarksHolderService: WatermarksHolderService,
              private _zoomService: ZoomService) {

    this._activeWatermarkService.activeChange.subscribe((id: number) => {
      if (this.id === id) {
        this.active = true;
      } else {
        this.active = false;
      }
    });

    this.subject.pipe(
      debounceTime(300)
    ).subscribe(text => {
      this.notifyChanges();
      this.sendSaveText();
    });
  }

  ngOnInit() {
  }

  ngAfterViewChecked() {
    this._zoomService.changeZoom(this._zoomService.zoom);
  }

  getData() {
    return 'data:image/png;base64,' + this.data.data;
  }

  dragOver($event: DragEvent) {
    $event.preventDefault();
    $event.stopPropagation();
  }

  dragStart($event: DragEvent) {
    $event.preventDefault();
    this.oldPosition = Utils.getMousePosition($event);
    if ($event.dataTransfer) {
      $event.dataTransfer.setData('text', 'foo');
    }
  }

  dragging($event) {
    $event.preventDefault();
    const position = Utils.getMousePosition($event);
    if (position.x && position.y && this.isOnPage(position)) {
      const left = position.x - this.oldPosition.x;
      const top = position.y - this.oldPosition.y;
      this.position.left += left;
      this.position.top += top;
      this.correctPosition();
      this.oldPosition = position;
    }
  }

  isOnPage(position) {
    const currentPage = document.elementFromPoint(position.x, position.y);
    return currentPage && $(currentPage).parent().parent() &&
      ($(currentPage).parent().parent().parent().hasClass("page") ||
        $(currentPage).parent().parent().parent().parent().parent().hasClass("page"));
  }

  isText() {
    return WatermarkType.TEXT.id === this.type;
  }

  getFormatting() {
    const f = this.data.props;
    const formatting = Formatting.default();
    if (f) {
      formatting.fontSize = f.fontSize;
      formatting.font = f.font;
      formatting.color = f.fontColor;
      formatting.bold = f.bold;
      formatting.underline = f.underline;
      formatting.italic = f.italic;
    }
    return formatting;
  }

  saveTextWatermark($event: Formatting) {
    if (this.data.props) {
      this.fillFormatting($event);
      this.notifyChanges();
      this.sendSaveText();
    }
  }

  private fillFormatting(formatting: Formatting) {
    this.data.props.fontSize = formatting.fontSize;
    this.data.props.font = formatting.font;
    this.data.props.bold = formatting.bold;
    this.data.props.italic = formatting.italic;
    this.data.props.underline = formatting.underline;
    this.data.props.fontColor = formatting.color;
  }

  remove() {
    const del = new RemoveWatermark();
    del.guid = this.data.guid;
    del.id = this.id;
    del.type = this.type;
    this._removeWatermarkService.remove(del);
  }

  activation() {
    this._activeWatermarkService.changeActive(this.id);
  }

  width($event) {
    this.data.width += $event;
    if (!this.unlock) {
      this.data.height += $event;
    }
    this.correctPosition();
    this.notifyChanges();
  }

  height($event) {
    this.data.height += $event;
    if (!this.unlock) {
      this.data.width += $event;
    }
    this.correctPosition();
    this.notifyChanges();
  }

  left($event) {
    if (this.unlock) {
      this.position.left += $event;
    }
    this.correctPosition();
    this.notifyChanges();
  }

  top($event) {
    if (this.unlock) {
      this.position.top += $event;
    }
    this.correctPosition();
    this.notifyChanges();
  }

  notifyChanges() {
    const changes = new CopyChanges();
    changes.guid = this.data.guid;
    changes.id = this.id;
    changes.position = this.position;
    changes.width = this.data.width;
    changes.height = this.data.height;
    changes.props = this.data.props;
    this._copyWatermarkService.notifyChanges(changes);
  }

  drop($event: DragEvent) {
    $event.stopPropagation();
    $event.preventDefault();
  }

  isInit() {
    return this.data.width === 0 && this.data.height === 0;
  }

  onCopyWatermark() {
    const copy = new CopyWatermark();
    copy.guid = this.data.guid;
    copy.id = this.id;
    copy.type = this.type;
    this._copyWatermarkService.copy(copy);
  }

  ngAfterViewInit(): void {
    if (this.type === WatermarkType.TEXT.id) {
      setTimeout(() => {
        const element = $("#text");
        if (element) {
          element.focus();
        }
      }, 100);
    }
  }

  private correctPosition() {
    if (this.position.left < 0) {
      this.position.left = 0;
    }
    if (this.position.top < 0) {
      this.position.top = 0;
    }
    if (this.position.top + this.data.height > this.pageHeight) {
      this.position.top = this.pageHeight - this.data.height;
    }
    if (this.position.left + this.data.width > this.pageWidth) {
      this.position.left = this.pageWidth - this.data.width;
    }
  }

  saveText(value: string) {
    this.data.props.text = value;
    this.subject.next(value);
  }

  private sendSaveText() {
    // this._watermarkService.saveTextWatermark(this.data).subscribe((p: WatermarkProps) => {
    //   if (DraggableWatermark.TEMP === this.data.guid) {
    //     this._watermarksHolderService.changeTemp(p.imageGuid, this.id);
    //     this.data.guid = p.imageGuid;
    //   }
    //   this.data.props = p;
    // });
  }

  hideMenu($event) {
    this._activeWatermarkService.changeActive(null);
  }

  getMenuShift() {
    const menuWidth = this.type === WatermarkType.TEXT.id ? 426 : 148;
    let shift = this.data.width > menuWidth ? 0 : (this.data.width - menuWidth) * 0.5;
    if (this.position.left - (menuWidth - this.data.width) / 2 < 0) {
      shift -= (this.position.left - (menuWidth - this.data.width) / 2);
    }
    if (this.position.left + (menuWidth + this.data.width) / 2 > this.pageWidth) {
      shift -= (this.position.left + (menuWidth + this.data.width) / 2 - this.pageWidth);
    }
    return shift;
  }

  getMenuType() {
    return MenuType.FOR_SIGNATURE;
  }
}
