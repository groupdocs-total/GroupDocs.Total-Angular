import {AfterViewInit, Component, ElementRef, Input, OnInit, ViewChild} from '@angular/core';
import {Border, StampCanvasProps} from "../signature-models";
import {ActiveCanvasService} from "../active-canvas.service";
import {RemoveCanvasService} from "../remove-canvas.service";
import {OnCloseService} from "@groupdocs.examples.angular/common-components";

@Component({
  selector: 'gd-stamp-canvas',
  templateUrl: './stamp-canvas.component.html',
  styleUrls: ['./stamp-canvas.component.less']
})
export class StampCanvasComponent implements OnInit, AfterViewInit {
  @Input() id: number;
  @Input() theFirst: boolean;
  @Input() active: boolean;
  @Input() props: StampCanvasProps;
  @Input() width: number;
  @Input() height: number;

  _ctx: CanvasRenderingContext2D;
  @ViewChild('canvas', {static: true}) canvas: ElementRef;
  colorPickerBG = false;
  colorPickerC = false;
  borderWidth = Border.widthOptions();

  constructor(private _activeCanvasService: ActiveCanvasService,
              private _removeCanvas: RemoveCanvasService,
              private _onCloseService: OnCloseService) {

    this._onCloseService.onClose.subscribe((c) => {
      this.colorPickerC = false;
      this.colorPickerBG = false;
    });

    this._activeCanvasService.activeChange.subscribe((id: number) => {
      if (this.id === id) {
        this.active = true;
      } else {
        this.active = false;
      }
    });
  }

  get ctx(): CanvasRenderingContext2D {
    return this._ctx;
  }

  activation() {
    this._activeCanvasService.changeActive(this.id);
  }

  ngOnInit() {
  }

  ngAfterViewInit(): void {
    this._ctx = this.canvas.nativeElement.getContext('2d');
    this.redrawCanvas();
  }

  redrawCanvas() {
    this.refreshRadius();
    this.drawCircle();
    if (this.props.text) {
      if (this.theFirst) {
        this._ctx.fillStyle = this.props.textColor;
        this._ctx.font = this.fontDecoration() + " " + this.props.fontSize + 'px ' + this.props.font;
        this._ctx.textAlign = 'center';
        this._ctx.fillText(this.props.text, this.props.width / 2, this.props.height / 2 + this.props.fontSize / 2);
        if (this.props.underline) {
          this.makeTextUnderline();
        }
      } else {
        this.drawTextCircle();
      }
    }
  }

  private fontDecoration(): string {
    const bold = (this.props.bold) ? "bold" : "";
    const italic = (this.props.italic) ? "italic" : "";
    return bold + " " + italic;
  }

  private makeTextUnderline() {
    const x = this.props.width / 2;
    const y = this.props.height / 2;
    const textWidth = this._ctx.measureText(this.props.text).width;
    const startY = y + this.props.fontSize;
    const endY = startY;
    let underlineHeight = this.props.fontSize / 15;
    if (underlineHeight < 1) {
      underlineHeight = 1;
    }
    this._ctx.beginPath();
    const startX = x - (textWidth / 2);
    const endX = x + (textWidth / 2);
    this._ctx.strokeStyle = this.props.textColor;
    this._ctx.lineWidth = underlineHeight;
    this._ctx.moveTo(startX, startY);
    this._ctx.lineTo(endX, endY);
    this._ctx.strokeStyle = 'blue';
    this._ctx.stroke();
  }

  private drawCircle() {
    const backgroundColor = (this.props.backgroundColor === "") ? "rgb(255, 255, 255)" : this.props.backgroundColor;
    const x = this.props.width / 2;
    const y = this.props.height / 2;
    this._ctx.beginPath();
    this._ctx.arc(x, y, this.props.radius, 0, 2 * Math.PI);
    this._ctx.lineWidth = this.props.strokeWidth;
    this._ctx.strokeStyle = this.props.strokeColor;
    this._ctx.stroke();
    this._ctx.fillStyle = backgroundColor;
    this._ctx.fill();
    this._ctx.closePath();
  };

  private drawTextCircle() {
    const x = this.props.width / 2;
    const y = this.props.height / 2;
    this._ctx.save();
    this._ctx.translate(x, y);
    this._ctx.rotate(Math.PI / 2);
    this._ctx.fillStyle = this.props.textColor;
    this._ctx.font = this.fontDecoration() + " " + this.props.fontSize + 'px ' + this.props.font;

    const num = this.props.textExpansion + (this.props.fontSize / 100);
    const rad = this.props.radius - (this.props.fontSize / 2);
    for (let i = 0; i < this.props.textRepeat; i++) {
      for (let j = 0; j < this.props.text.length; j++) {
        this._ctx.save();
        this._ctx.rotate(j * num + num * this.props.text.length * i);
        this._ctx.fillText(this.props.text[j], 0, -(rad));
        this._ctx.restore();
      }
    }
    this._ctx.restore();
  };

  private refreshRadius() {
    if (this.props.strokeWidth > 1) {
      this.props.radius = (this.props.width / 2) - (this.props.strokeWidth / 2);
    } else {
      this.props.radius = (this.props.width / 2);
    }
  }

  toggleColorPicker($event, bg: boolean) {
    $event.preventDefault();
    $event.stopPropagation();
    if (bg) {
      this.colorPickerBG = !this.colorPickerBG;
    } else {
      this.colorPickerC = !this.colorPickerC;
    }
  }

  selectColor(bg: boolean, $event) {
    if (bg) {
      this.props.backgroundColor = $event;
      this.colorPickerBG = false;
    } else {
      this.props.strokeColor = $event;
      this.colorPickerC = false;
    }
    this.redrawCanvas();
  }

  selectBorderWidth($event) {
    this.props.strokeWidth = $event.value;
    this.redrawCanvas();
  }

  deleteCanvas() {
    this._removeCanvas.remove(this.id);
    this.redrawCanvas();
  }

  getLeft() {
    return (this.width - this.props.width) / 2;
  }

  getTop() {
    return ((this.height - this.props.height) / 2 - (this.active ? 34 : 0));
  }

  resize($event) {
    this.props.width += $event;
    this.props.height += $event;
  }
}
