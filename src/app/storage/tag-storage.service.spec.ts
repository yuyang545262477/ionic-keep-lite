import { TestBed } from '@angular/core/testing';

import { TagStorageService } from './tag-storage.service';

describe('TagStorageService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TagStorageService = TestBed.get(TagStorageService);
    expect(service).toBeTruthy();
  });
});
