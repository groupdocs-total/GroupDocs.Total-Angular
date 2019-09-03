import {Component, Input, OnInit} from '@angular/core';
import {Position, AddedSignature, Utils, SignatureType, SignatureProps, RemoveSign} from "../signature-models";
import {DragSignatureService} from "../drag-signature.service";
import {Formatting} from "@groupdocs.examples.angular/common-components";
import {SignatureService} from "../signature.service";
import {RemoveSignatureService} from "../remove-signature.service";
import {ActiveSignatureService} from "../active-signature.service";
import * as jquery from 'jquery';

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

  constructor(private _dragSignatureService: DragSignatureService,
              private _signatureService: SignatureService,
              private _removeSignature: RemoveSignatureService,
              private _activeSignatureService: ActiveSignatureService) {

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
    this._dragSignatureService.id = this.id;
  }

  dragging($event) {
    $event.preventDefault();
    const position = Utils.getMousePosition($event);

    const currentPage = document.elementFromPoint(position.x, position.y);
    if (currentPage && $(currentPage).parent().parent() && $(currentPage).parent().parent().parent().hasClass("page")) {
      const documentPage = $(currentPage).parent().parent()[0];
      const left = position.x - $(documentPage).offset().left;
      const top = position.y - $(documentPage).offset().top;
      this.position.left = left;
      this.position.top = top;
    }
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
    this._removeSignature.remove(del);
  }

  activation() {
    this._activeSignatureService.changeActive(this.id);
  }

  isDigital() {
    return this.type === SignatureType.DIGITAL.id;
  }
}
