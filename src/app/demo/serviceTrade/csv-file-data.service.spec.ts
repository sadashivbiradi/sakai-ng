import { TestBed } from '@angular/core/testing';

import { CsvFileDataService } from './csv-file-data.service';

describe('CsvFileDataService', () => {
  let service: CsvFileDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CsvFileDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
