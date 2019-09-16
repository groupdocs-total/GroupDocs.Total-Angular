import { TestBed } from '@angular/core/testing';
import { ConversionConfigService } from './conversion-config.service';
import { HttpClientModule } from '@angular/common/http';
import { ConfigService } from '@groupdocs.examples.angular/common-components';

describe('ConversionConfigService', () => {
  beforeEach(() => TestBed.configureTestingModule({
     providers: [ ConfigService ],
     imports: [ HttpClientModule ]
  }));

  it('should be created', () => {
    const service: ConversionConfigService = TestBed.get(ConversionConfigService);
    expect(service).toBeTruthy();
  });
});
