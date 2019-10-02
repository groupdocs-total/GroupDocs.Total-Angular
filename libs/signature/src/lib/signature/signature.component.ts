import {Component, Input, OnInit} from '@angular/core';
import {
  Position,
  AddedSignature,
  SignatureType,
  SignatureProps,
  RemoveSign,
  DraggableSignature
} from "../signature-models";
import {Formatting, Utils} from "@groupdocs.examples.angular/common-components";
import {SignatureService} from "../signature.service";
import {RemoveSignatureService} from "../remove-signature.service";
import {ActiveSignatureService} from "../active-signature.service";
import * as jquery from 'jquery';
import {SignaturesHolderService} from "../signatures-holder.service";

const $ = jquery;

@Component({
  selector: 'gd-signature-component',
  templateUrl: './signature.component.html',
  styleUrls: ['./signature.component.less']
})
export class Signature implements OnInit {
  @Input() id: number;
  @Input() data: AddedSignature;
  @Input() position: Position;
  @Input() type: string;
  active = true;
  private oldPosition: { x: number; y: number };
  private unlock = true;

  constructor(private _signatureService: SignatureService,
              private _removeSignature: RemoveSignatureService,
              private _activeSignatureService: ActiveSignatureService,
              private _signaturesHolderService: SignaturesHolderService) {

    this._activeSignatureService.activeChange.subscribe((id: number) => {
      if (this.id === id) {
        this.active = true;
      } else {
        this.active = false;
      }
    });
  }

  ngOnInit() {
  }

  getData() {
    return 'data:image/png;base64,' + this.data.data;
  }

  dragOver($event: DragEvent) {
    $event.preventDefault();
    $event.stopPropagation();
  }

  dragStart($event: DragEvent) {
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
      this.oldPosition = position;
    }
  }

  isOnPage(position) {
    const currentPage = document.elementFromPoint(position.x, position.y);
    return currentPage && $(currentPage).parent().parent() && $(currentPage).parent().parent().parent().hasClass("page");
  }

  isText() {
    return SignatureType.TEXT.id === this.type;
  }

  getFormatting() {
    const f = this.data.props;
    const formatting = Formatting.DEFAULT;
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

  saveTextSignature($event: Formatting) {
    if (this.data.props) {
      this.fillFormatting($event);
      this._signatureService.saveTextSignature(this.data).subscribe((p: SignatureProps) => {
        if (DraggableSignature.TEMP === this.data.guid) {
          this._signaturesHolderService.changeTemp(p.imageGuid, this.id);
          this.data.guid = p.imageGuid;
        }
        this.data.props = p;
      });
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
    const del = new RemoveSign();
    del.guid = this.data.guid;
    del.id = this.id;
    del.type = this.type;
    this._removeSignature.remove(del);
  }

  activation() {
    this._activeSignatureService.changeActive(this.id);
  }

  isDigital() {
    return this.type === SignatureType.DIGITAL.id;
  }

  width($event) {
    this.data.width += $event;
    if (!this.unlock) {
      this.data.height += $event;
    }
  }

  height($event) {
    this.data.height += $event;
    if (!this.unlock) {
      this.data.width += $event;
    }
  }

  left($event) {
    if (this.unlock) {
      this.position.left += $event;
    }
  }

  top($event) {
    if (this.unlock) {
      this.position.top += $event;
    }
  }

  drop($event: DragEvent) {
    $event.stopPropagation();
    $event.preventDefault();
  }

  isInit() {
    return this.data.width === 0 && this.data.height === 0;
  }
}
