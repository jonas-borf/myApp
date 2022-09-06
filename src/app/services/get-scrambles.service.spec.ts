import { TestBed } from '@angular/core/testing';

import { GetScramblesService } from './get-scrambles.service';

describe('GetScramblesService', () => {
  let service: GetScramblesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetScramblesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
