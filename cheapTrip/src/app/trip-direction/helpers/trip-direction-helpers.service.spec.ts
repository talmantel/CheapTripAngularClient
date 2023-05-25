import { TestBed } from '@angular/core/testing';

import { TripDirectionHelpersService } from './trip-direction-helpers.service';

describe('TripDirectionHelpersService', () => {
  let service: TripDirectionHelpersService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TripDirectionHelpersService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('deepObjectClone', () => {
    const firstTestCase = { a: '1' };

    it(`On obj = ${JSON.stringify(
      firstTestCase
    )} should return object ${JSON.stringify(
      firstTestCase
    )} and on change output object input object should not be changed`, () => {
      const result = service.deepObjectClone(firstTestCase);

      expect(result).not.toBe(firstTestCase);

      result.a = '2';

      expect(firstTestCase.a).not.toBe(result.a);
    });
  });
});
