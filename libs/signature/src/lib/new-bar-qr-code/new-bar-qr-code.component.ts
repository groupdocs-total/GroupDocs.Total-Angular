import {Component, ElementRef, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {SignatureService} from "../signature.service";
import {OpticalCodeModel} from "../signature-models";
import {Subject} from "rxjs";
import {debounceTime} from "rxjs/operators";

@Component({
  selector: 'gd-new-bar-qr-code',
  templateUrl: './new-bar-qr-code.component.html',
  styleUrls: ['./new-bar-qr-code.component.less']
})
export class NewBarQrCodeComponent implements OnInit {
  @Input() type: string;
  @Input() icon: string;
  @Input() name: string;
  @Output() closePanel = new EventEmitter<boolean>();
  encodedImage: string;

  private subject: Subject<string> = new Subject();

  constructor(private _signatureService: SignatureService,
              private _elementRef: ElementRef) {
    this.subject.pipe(
      debounceTime(500)
    ).subscribe(text => {
      this.saveCode(text, true);
    });
  }

  private saveCode(text: string, temp: boolean) {
    if (text) {
      this._signatureService.getCode(text, temp, this.type).subscribe((data: OpticalCodeModel) => {
        this.encodedImage = data.encodedImage;
        if (!temp) {
          this.closePanel.emit(true);
        }
      });
    } else {
      this.clean();
    }
  }

  private clean() {
    this.encodedImage = null;
  }

  ngOnInit() {
    this.clean();
    setTimeout(() => {
      const element = this._elementRef.nativeElement.querySelector("#text-input");
      element.focus();
    }, 100);
  }

  addSign(text: string) {
    this.saveCode(text, false);
  }

  saveTemp(text: string) {
    this.subject.next(text);
  }

  getData() {
    return 'data:image/png;base64,' + this.encodedImage;
  }
}
