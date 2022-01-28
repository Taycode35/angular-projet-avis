import { TestBed } from '@angular/core/testing';

import { ServicejoueurService } from './servicejoueur.service';

describe('ServicejoueurService', () => {
  let service: ServicejoueurService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServicejoueurService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
