import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ConversionQueueComponent } from './conversion-queue.component';
import { ConversionItemComponent } from '../conversion-item/conversion-item.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

describe('ConversionQueueComponent', () => {
  let component: ConversionQueueComponent;
  let fixture: ComponentFixture<ConversionQueueComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConversionQueueComponent, ConversionItemComponent ],
      imports: [ FontAwesomeModule ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConversionQueueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
