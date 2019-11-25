import {AfterViewInit, Component, Input, OnInit} from '@angular/core';
import {
  Position,
  AddedSignature,
  SignatureType,
  SignatureProps,
  RemoveSign,
  DraggableSignature,
  CopySign,
  CopyChanges
} from "../signature-models";
import {Formatting, Utils} from "@groupdocs.examples.angular/common-components";
import {SignatureService} from "../signature.service";
import {RemoveSignatureService} from "../remove-signature.service";
import {ActiveSignatureService} from "../active-signature.service";
import * as jquery from 'jquery';
import {SignaturesHolderService} from "../signatures-holder.service";
import {CopySignatureService} from "../copy-signature.service";
import {Subject} from "rxjs";
import {debounceTime} from "rxjs/operators";

const $ = jquery;

@Component({
  selector: 'gd-signature-component',
  templateUrl: './signature.component.html',
  styleUrls: ['./signature.component.less']
})
export class Signature implements OnInit, AfterViewInit {
  @Input() id: number;
  @Input() data: AddedSignature;
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

  constructor(private _signatureService: SignatureService,
              private _removeSignatureService: RemoveSignatureService,
              private _copySignatureService: CopySignatureService,
              private _activeSignatureService: ActiveSignatureService,
              private _signaturesHolderService: SignaturesHolderService) {

    this._activeSignatureService.activeChange.subscribe((id: number) => {
      if (this.id === id) {
        this.active = true;
      } else {
        this.active = false;
      }
    });

    this.subject.pipe(
      debounceTime(300)
    ).subscribe(text => {
      this.sendSaveText();
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
    return SignatureType.TEXT.id === this.type;
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

  saveTextSignature($event: Formatting) {
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
    const del = new RemoveSign();
    del.guid = this.data.guid;
    del.id = this.id;
    del.type = this.type;
    this._removeSignatureService.remove(del);
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
    this._copySignatureService.notifyChanges(changes);
  }

  drop($event: DragEvent) {
    $event.stopPropagation();
    $event.preventDefault();
  }

  isInit() {
    return this.data.width === 0 && this.data.height === 0;
  }

  onCopySign() {
    const copy = new CopySign();
    copy.guid = this.data.guid;
    copy.id = this.id;
    copy.type = this.type;
    this._copySignatureService.copy(copy);
  }

  ngAfterViewInit(): void {
    if (this.type === SignatureType.TEXT.id) {
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
    this._signatureService.saveTextSignature(this.data).subscribe((p: SignatureProps) => {
      if (DraggableSignature.TEMP === this.data.guid) {
        this._signaturesHolderService.changeTemp(p.imageGuid, this.id);
        this.data.guid = p.imageGuid;
      }
      this.data.props = p;
    });
  }

  hideMenu($event) {
    this._activeSignatureService.changeActive(null);
  }

  getMenuShift() {
    const menuWidth = this.type === SignatureType.TEXT.id ? 426 : 148;
    return this.data.width > menuWidth ? 0 : (this.data.width - menuWidth) * 0.5;
  }
}
