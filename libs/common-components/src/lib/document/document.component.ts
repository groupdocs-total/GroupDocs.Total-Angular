import {Component, ElementRef, Input, OnInit} from '@angular/core';
import {FileDescription} from "../file.service";
import {NavigateService} from "../navigate.service";

@Component({
  selector: 'gd-document',
  templateUrl: './document.component.html',
  styleUrls: ['./document.component.less']
})
export class DocumentComponent implements OnInit {

  @Input() mode: boolean;
  @Input() preloadPageCount: number;
  @Input() file: FileDescription;
  wait: boolean = false;
  private docElement;

  constructor(private elementRef: ElementRef<HTMLElement>, private _navigateService: NavigateService) {
  }

  ngOnInit() {
    this.docElement = this.elementRef.nativeElement.children.item(0);

    this._navigateService.navigate.subscribe((value => {
      if (this.file.pages[value - 1].data) {
        this.scrollToPage(value);
      } else {
        this.wait = true;
        let timer = setInterval(() => {
          if (this.file.pages[value - 1].data) {
            this.wait = false;
            this.scrollToPage(value);
            clearInterval(timer);
          }
        }, 5000);
      }
    }));
  }

  scrollToPage(pageNumber: number) {
    const margin = 20;
    let pagesHeight = 0;
    for (let i = 1; i < pageNumber; i++) {
      const item = this.docElement.children.item(i - 1);
      const clientHeight = item ? item.clientHeight : 0;
      pagesHeight += clientHeight > 0 ? clientHeight + margin : 0;
    }
    let options = {
      left: 0,
      top: pagesHeight
    };
    this.docElement.scrollTo(options);
  }

}
