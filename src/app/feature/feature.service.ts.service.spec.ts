import { TestBed } from '@angular/core/testing';

import { FeatureServiceTsService } from './feature.service.ts.service';

describe('FeatureServiceTsService', () => {
  let service: FeatureServiceTsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FeatureServiceTsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
