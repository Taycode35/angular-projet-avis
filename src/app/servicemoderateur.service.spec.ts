import { TestBed } from '@angular/core/testing';

import { ServicemoderateurService } from './servicemoderateur.service';

describe('ServicemoderateurService', () => {
  let service: ServicemoderateurService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServicemoderateurService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
