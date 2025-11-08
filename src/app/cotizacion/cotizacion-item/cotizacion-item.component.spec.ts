import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CotizacionItemComponent } from './cotizacion-item.component';

describe('CotizacionItemComponent', () => {
  let component: CotizacionItemComponent;
  let fixture: ComponentFixture<CotizacionItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CotizacionItemComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CotizacionItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
