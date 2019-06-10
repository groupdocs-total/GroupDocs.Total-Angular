import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Create.DocumentModalComponent } from './create.document-modal.component';

describe('Create.DocumentModalComponent', () => {
  let component: Create.DocumentModalComponent;
  let fixture: ComponentFixture<Create.DocumentModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Create.DocumentModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Create.DocumentModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
