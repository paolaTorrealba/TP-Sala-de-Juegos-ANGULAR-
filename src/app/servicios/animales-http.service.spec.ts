import { TestBed, inject } from '@angular/core/testing';

import { AnimalesHttpService } from './animales-http.service';

describe('AnimalesHttpService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AnimalesHttpService]
    });
  });

  it('should be created', inject([AnimalesHttpService], (service: AnimalesHttpService) => {
    expect(service).toBeTruthy();
  }));
});
