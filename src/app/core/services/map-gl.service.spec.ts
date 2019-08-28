import { TestBed } from '@angular/core/testing';

import { MapGlService } from './map-gl.service';

describe('MapGlService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MapGlService = TestBed.get(MapGlService);
    expect(service).toBeTruthy();
  });
});
