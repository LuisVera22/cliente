import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BannerFiltroComponent } from './banner-filtro.component';

describe('BannerFiltroComponent', () => {
  let component: BannerFiltroComponent;
  let fixture: ComponentFixture<BannerFiltroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BannerFiltroComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BannerFiltroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
