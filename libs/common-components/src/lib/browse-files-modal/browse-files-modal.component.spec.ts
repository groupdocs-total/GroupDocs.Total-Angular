import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BrowseFilesModalComponent } from './browse-files-modal.component';

describe('BrowseFilesModalComponent', () => {
  let component: BrowseFilesModalComponent;
  let fixture: ComponentFixture<BrowseFilesModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BrowseFilesModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BrowseFilesModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
