import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IndexedFileComponent } from './indexed-file.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HttpClientModule } from '@angular/common/http';
import { ConfigService } from '@groupdocs.examples.angular/common-components';

describe('IndexedFileComponent', () => {
  let component: IndexedFileComponent;
  let fixture: ComponentFixture<IndexedFileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IndexedFileComponent ],
      imports: [ FontAwesomeModule, HttpClientModule ],
      providers: [ ConfigService ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IndexedFileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
