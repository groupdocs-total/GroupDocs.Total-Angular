import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { SearchResultSummaryComponent as SearchResultSummaryComponent } from './search-result-summary.component';
import { SearchResultItemComponent } from '../search-result-item/search-result-item.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CommonComponentsModule } from '@groupdocs.examples.angular/common-components';

describe('SearchResultSummaryComponent', () => {
  let component: SearchResultSummaryComponent;
  let fixture: ComponentFixture<SearchResultSummaryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchResultSummaryComponent, SearchResultItemComponent ],
      imports: [ FontAwesomeModule, CommonComponentsModule ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchResultSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
