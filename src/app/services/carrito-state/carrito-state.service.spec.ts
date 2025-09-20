import { TestBed } from '@angular/core/testing';

import { CarritoStateService } from './carrito-state.service';

describe('CarritoStateService', () => {
  let service: CarritoStateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CarritoStateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
