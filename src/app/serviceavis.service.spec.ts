import { TestBed } from '@angular/core/testing';

import { ServiceavisService } from './serviceavis.service';

describe('ServiceavisService', () => {
  let service: ServiceavisService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiceavisService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
