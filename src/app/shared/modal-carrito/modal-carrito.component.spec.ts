import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalCarritoComponent } from './modal-carrito.component';

describe('ModalCarritoComponent', () => {
  let component: ModalCarritoComponent;
  let fixture: ComponentFixture<ModalCarritoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModalCarritoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalCarritoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
