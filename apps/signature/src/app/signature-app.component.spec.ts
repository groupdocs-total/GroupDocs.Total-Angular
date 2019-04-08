import { TestBed, async } from '@angular/core/testing';
import { SignatureAppComponent } from './signature-app.component';

describe('SignatureAppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SignatureAppComponent]
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(SignatureAppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'signature'`, () => {
    const fixture = TestBed.createComponent(SignatureAppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('signature');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(SignatureAppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain(
      'Welcome to signature!'
    );
  });
});
