import { TestBed, async } from '@angular/core/testing';
import { TotalAppComponent } from './total-app.component';

describe('ViewerAppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TotalAppComponent]
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(TotalAppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'total'`, () => {
    const fixture = TestBed.createComponent(TotalAppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('total');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(TotalAppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain(
      'Welcome to total!'
    );
  });
});
