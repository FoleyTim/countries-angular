import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';

import { CountriesService } from './countries.service';
import { Country } from '@app/models/country';
describe('CountriesService', () => {
  let service: CountriesService;
  let httpMock: HttpTestingController

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CountriesService],
      imports: [HttpClientTestingModule]
    });
    service = TestBed.inject(CountriesService);
    httpMock = TestBed.inject(HttpTestingController);

  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('getCountries', () => {
    const mockResponse: Country[] = [{
      name: 'mockName',
      capital: 'mockCapital',
      population: 0,
      flag: 'flag',
      currencies: [{
        code: 'MCK', name: 'MOCK', symbol: '#'
      }]
    }];

    it('should return data when the http call is successful', () => {
      service.getCountries('test').subscribe(data => {
        expect(data.length).toBe(1);
        expect(data).toEqual(mockResponse);
      });
      const request = httpMock.expectOne(`https://restcountries.eu/rest/v2/region/test`);
      expect(request.request.method).toBe('GET');
      request.flush(mockResponse);
    });
  });
});
