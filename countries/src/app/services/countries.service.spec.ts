import { HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';

import { CountriesService } from './countries.service';

describe('CountriesService', () => {
  let service: CountriesService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule]
    });
    service = TestBed.inject(CountriesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  // describe('getCountries', () => {


  //   it('should return data when the http call is successful', () => {
  //     expect(service).toBeTruthy();
  //   });
  // });
});
