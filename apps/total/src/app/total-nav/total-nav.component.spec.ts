import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TotalNavComponent } from './total-nav.component';

describe('TotalNavComponent', () => {
  let component: TotalNavComponent;
  let fixture: ComponentFixture<TotalNavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TotalNavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TotalNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
