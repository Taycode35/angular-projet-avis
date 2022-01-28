import { TestBed } from '@angular/core/testing';

import { ServicejeuService } from './servicejeu.service';

describe('ServicejeuService', () => {
  let service: ServicejeuService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServicejeuService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
