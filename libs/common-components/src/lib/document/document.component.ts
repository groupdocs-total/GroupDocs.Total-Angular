import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {FileDescription, FileUtil} from "../file.service";
import {ZoomService} from "../zoom.service";

@Component({
  selector: 'gd-document',
  templateUrl: './document.component.html',
  styleUrls: ['./document.component.less']
})
export class DocumentComponent implements OnInit, OnChanges {

  @Input() mode: boolean;
  @Input() preloadPageCount: number;
  @Input() file: FileDescription;
  wait: boolean = false;
  refreshView: boolean;
  private zoom: number;

  constructor(zoomService: ZoomService) {

    zoomService.zoomChange.subscribe((val: number) => {
      this.zoom = val;
    });
  }

  ngOnInit() {
  }

  ifPdf() {
    return FileUtil.find(this.file.guid, false).format == "Portable Document Format";
  }

  ifImage() {
    return FileUtil.find(this.file.guid, false).format == "Joint Photographic Experts Group";
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.refreshView = !this.refreshView;
  }

  ifChromeOrFirefox() {
    return navigator.userAgent.toLowerCase().indexOf('chrome') > -1 || this.ifFirefox();
  }

  ifFirefox() {
    return navigator.userAgent.toLowerCase().indexOf('firefox') > -1;
  }
}
