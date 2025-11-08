import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CotizacionPrincipalComponent } from './cotizacion-principal.component';

describe('CotizacionPrincipalComponent', () => {
  let component: CotizacionPrincipalComponent;
  let fixture: ComponentFixture<CotizacionPrincipalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CotizacionPrincipalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CotizacionPrincipalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
