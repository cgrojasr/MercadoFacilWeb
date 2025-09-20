import { TestBed } from '@angular/core/testing';

import { ProductoCategoriaService } from './producto-categoria.service';

describe('ProductoCategoriaService', () => {
  let service: ProductoCategoriaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProductoCategoriaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
