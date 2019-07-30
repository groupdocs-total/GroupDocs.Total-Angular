import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddFilePanelComponent } from './add-file-panel.component';

describe('AddFilePanelComponent', () => {
  let component: AddFilePanelComponent;
  let fixture: ComponentFixture<AddFilePanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddFilePanelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddFilePanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
