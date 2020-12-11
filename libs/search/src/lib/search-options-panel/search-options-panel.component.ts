import { Component, OnInit } from '@angular/core';
import { SearchOptionsService } from '../search-options.service';

@Component({
  selector: 'gd-search-options-panel',
  templateUrl: './search-options-panel.component.html',
  styleUrls: ['./search-options-panel.component.less']
})
export class SearchOptionsPanelComponent implements OnInit {

  constructor(public options: SearchOptionsService) {
  }

  ngOnInit() {
  }

  changeSearchType(e: any) {
    this.options.SearchType = e.target.value;
  }

  toggleOptionsVisibility() {
    if (this.options.isOptionsVisible) {
      this.options.isOptionsVisible = false;
    } else {
      this.options.isOptionsVisible = true;
    }
  }

  increaseFuzzySearchMistakeCount() {
    if (this.options.FuzzySearchMistakeCount < 9) {
      this.options.FuzzySearchMistakeCount++;
    }
  }

  decreaseFuzzySearchMistakeCount() {
    if (this.options.FuzzySearchMistakeCount > 1) {
      this.options.FuzzySearchMistakeCount--;
    }
  }

  increaseSpellingCorrectionMistakeCount() {
    if (this.options.SpellingCorrectionMistakeCount < 9) {
      this.options.SpellingCorrectionMistakeCount++;
    }
  }

  decreaseSpellingCorrectionMistakeCount() {
    if (this.options.SpellingCorrectionMistakeCount > 1) {
      this.options.SpellingCorrectionMistakeCount--;
    }
  }
}