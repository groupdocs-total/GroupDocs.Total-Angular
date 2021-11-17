import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { CharacterDescriptor, CharacterReplacement } from './search-models';

@Injectable()
export class CharacterSelectorService {
  readonly totalCount = 65536;
  readonly longStep = 16;
  readonly pageCapacity = 256;
  readonly pageCount = 256;

  private _characterReplacementUpdated: Subject<CharacterReplacement> = new Subject();

  characterReplacement: CharacterReplacement;
  pageIndex = 0;
  page: CharacterDescriptor[];
  visible = false;

  constructor() {
    this.page = new Array(this.pageCapacity);
    for (let i = 0; i < this.page.length; i++) {
      this.page[i] = CharacterDescriptor.create(i);
    }
  }

  get characterReplacementUpdated() {
    return this._characterReplacementUpdated;
  }

  open(characterReplacement: CharacterReplacement) {
    this.characterReplacement = characterReplacement;
    this.populatePage();
    this.visible = true;
  }

  cancel() {
    this.visible = false;
  }

  select(characterDescriptor: CharacterDescriptor) {
    this.visible = false;
    const cr = CharacterReplacement.create(this.characterReplacement.CharacterId, characterDescriptor.CharacterId);
    this._characterReplacementUpdated.next(cr);
  }

  firstPage() {
    this.pageIndex = 0;
    this.populatePage();
  }

  lastPage() {
    this.pageIndex = this.pageCount - 1;
    this.populatePage();
  }

  nextPage() {
    if (this.pageIndex < this.pageCount - 1) {
      this.pageIndex++;
      this.populatePage();
    }
  }

  previousPage() {
    if (this.pageIndex > 0) {
      this.pageIndex--;
      this.populatePage();
    }
  }

  forward() {
    let newIndex = this.pageIndex + this.longStep;
    if (newIndex >= this.pageCount) {
      newIndex = this.pageCount - 1;
    }
    this.pageIndex = newIndex;
    this.populatePage();
  }

  backward() {
    let newIndex = this.pageIndex - this.longStep;
    if (newIndex < 0) {
      newIndex = 0;
    }
    this.pageIndex = newIndex;
    this.populatePage();
  }

  private populatePage() {
    const page = new Array(this.pageCapacity);
    const baseIndex = this.pageIndex * this.pageCapacity;
    for (let i = 0; i < page.length; i++) {
      const cd = new CharacterDescriptor();
      const id = baseIndex + i;
      cd.CharacterId = id;
      cd.Character = String.fromCharCode(id);
      cd.CharacterCode = id.toString(16).toUpperCase().padStart(4, "0");
      page[i] = cd;
    }
    this.page = page;
  }
}
