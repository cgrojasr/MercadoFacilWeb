import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarritoPrincipalComponent } from './carrito-principal.component';

describe('CarritoPrincipalComponent', () => {
  let component: CarritoPrincipalComponent;
  let fixture: ComponentFixture<CarritoPrincipalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CarritoPrincipalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarritoPrincipalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
