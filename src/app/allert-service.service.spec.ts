import { TestBed } from '@angular/core/testing';

import { AllertServiceService } from './allert-service.service';

describe('AllertServiceService', () => {
  let service: AllertServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AllertServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
