import { TestBed, inject } from '@angular/core/testing';

import { AvamDataGridService } from './avam-data-grid.service';

describe('AvamDataGridService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AvamDataGridService]
    });
  });

  it('should be created', inject([AvamDataGridService], (service: AvamDataGridService) => {
    expect(service).toBeTruthy();
  }));
});
