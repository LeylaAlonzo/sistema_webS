import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeguimientoCotizacionComponent } from './seguimiento-cotizacion.component';

describe('SeguimientoCotizacionComponent', () => {
  let component: SeguimientoCotizacionComponent;
  let fixture: ComponentFixture<SeguimientoCotizacionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SeguimientoCotizacionComponent]
    });
    fixture = TestBed.createComponent(SeguimientoCotizacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
