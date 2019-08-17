import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConversionQueueComponent } from './conversion-queue.component';

describe('ConversionItemComponent', () => {
  let component: ConversionQueueComponent;
  let fixture: ComponentFixture<ConversionQueueComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConversionQueueComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConversionQueueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
