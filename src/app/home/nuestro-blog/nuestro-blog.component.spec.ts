import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NuestroBlogComponent } from './nuestro-blog.component';

describe('NuestroBlogComponent', () => {
  let component: NuestroBlogComponent;
  let fixture: ComponentFixture<NuestroBlogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NuestroBlogComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NuestroBlogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
