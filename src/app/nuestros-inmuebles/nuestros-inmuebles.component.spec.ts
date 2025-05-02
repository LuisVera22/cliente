import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NuestrosInmueblesComponent } from './nuestros-inmuebles.component';

describe('NuestrosInmueblesComponent', () => {
  let component: NuestrosInmueblesComponent;
  let fixture: ComponentFixture<NuestrosInmueblesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NuestrosInmueblesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NuestrosInmueblesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
