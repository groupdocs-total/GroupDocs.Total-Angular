import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ConversionItemComponent } from './conversion-item.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HttpClientModule } from '@angular/common/http';
import { ConfigService } from '@groupdocs.examples.angular/common-components';

describe('ConversionItemComponent', () => {
  let component: ConversionItemComponent;
  let fixture: ComponentFixture<ConversionItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConversionItemComponent ],
      imports: [ FontAwesomeModule, HttpClientModule ],
      providers: [ ConfigService ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConversionItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
