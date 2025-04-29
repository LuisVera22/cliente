import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PropiedadesRecientesComponent } from './propiedades-recientes.component';

describe('PropiedadesRecientesComponent', () => {
  let component: PropiedadesRecientesComponent;
  let fixture: ComponentFixture<PropiedadesRecientesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PropiedadesRecientesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PropiedadesRecientesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
