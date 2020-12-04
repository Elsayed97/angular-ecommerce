import { TestBed } from '@angular/core/testing';

import { Luv2ShopFormService } from './luv2shopform.service';

describe('Luv2shopformService', () => {
  let service: Luv2ShopFormService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Luv2ShopFormService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
