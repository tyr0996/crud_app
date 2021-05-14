import { TestBed } from '@angular/core/testing';

import { ElsoSeviceService } from './elso-sevice.service';

describe('ElsoSeviceService', () => {
  let service: ElsoSeviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ElsoSeviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
