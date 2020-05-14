import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { SearchResultItemComponent } from './search-result-item.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HttpClientModule } from '@angular/common/http';
import { ConfigService } from '@groupdocs.examples.angular/common-components';

describe('ConversionItemComponent', () => {
  let component: SearchResultItemComponent;
  let fixture: ComponentFixture<SearchResultItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchResultItemComponent ],
      imports: [ FontAwesomeModule, HttpClientModule ],
      providers: [ ConfigService ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchResultItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
