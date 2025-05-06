import { TestBed } from '@angular/core/testing';

import { CaracteristicaSalonService } from './caracteristica-salon.service';

describe('CaracteristicaSalonService', () => {
  let service: CaracteristicaSalonService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CaracteristicaSalonService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
