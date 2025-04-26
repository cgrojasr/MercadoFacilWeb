import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CatalogoPrincipalComponent } from './catalogo-principal.component';

describe('CatalogoPrincipalComponent', () => {
  let component: CatalogoPrincipalComponent;
  let fixture: ComponentFixture<CatalogoPrincipalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CatalogoPrincipalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CatalogoPrincipalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
