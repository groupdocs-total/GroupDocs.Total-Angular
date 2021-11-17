import { Component, OnInit } from '@angular/core';
import { CharacterSelectorService } from '../character-selector.service';
import { CharacterDescriptor } from '../search-models';

@Component({
  selector: 'gd-character-selector',
  templateUrl: './character-selector.component.html',
  styleUrls: ['./character-selector.component.less']
})
export class CharacterSelectorComponent implements OnInit {

  constructor(public selector: CharacterSelectorService) { }

  ngOnInit() {
  }

  select(characterDescriptor: CharacterDescriptor) {
    this.selector.select(characterDescriptor);
  }

  nextPage() {
    this.selector.nextPage();
  }

  previousPage() {
    this.selector.previousPage();
  }

  forward() {
    this.selector.forward();
  }

  backward() {
    this.selector.backward();
  }
}
