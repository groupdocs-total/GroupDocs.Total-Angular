import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IndexedFilesListComponent } from './indexed-files-list.component';
import { IndexedFileComponent } from '../indexed-file/indexed-file.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

describe('IndexedFilesListComponent', () => {
  let component: IndexedFilesListComponent;
  let fixture: ComponentFixture<IndexedFilesListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IndexedFilesListComponent, IndexedFileComponent ],
      imports: [ FontAwesomeModule ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IndexedFilesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
