import { TestBed, inject } from '@angular/core/testing';

import { WasteRequestService } from './waste-request.service';

describe('WasteRequestService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [WasteRequestService]
    });
  });

  it('should be created', inject([WasteRequestService], (service: WasteRequestService) => {
    expect(service).toBeTruthy();
  }));
});
