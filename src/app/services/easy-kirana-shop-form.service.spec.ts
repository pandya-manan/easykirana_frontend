import { TestBed } from '@angular/core/testing';

import { EasyKiranaShopFormService } from './easy-kirana-shop-form.service';

describe('EasyKiranaShopFormService', () => {
  let service: EasyKiranaShopFormService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EasyKiranaShopFormService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
