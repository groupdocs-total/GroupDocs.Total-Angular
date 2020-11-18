import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { SearchBrowseFilesModalComponent } from './search-browse-files-modal.component';
import { CommonComponentsModule } from '@groupdocs.examples.angular/common-components';
import { HttpClientModule } from '@angular/common/http';

describe('SearchBrowseFilesModalComponent', () => {
  let component: SearchBrowseFilesModalComponent;
  let fixture: ComponentFixture<SearchBrowseFilesModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchBrowseFilesModalComponent ],
      imports: [ FontAwesomeModule, CommonComponentsModule, HttpClientModule ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchBrowseFilesModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
