import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PagoPrincipalComponent } from './pago-principal.component';

describe('PagoPrincipalComponent', () => {
  let component: PagoPrincipalComponent;
  let fixture: ComponentFixture<PagoPrincipalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PagoPrincipalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PagoPrincipalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
