import { async, TestBed, getTestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { CountryComponent } from '../country/country.component';
import { HttpClientModule } from '@angular/common/http';
import { CountryPipe } from '../country/country.pipe';
import { CountryService } from './country.service';
import CountryListJSON from '../assets/mockdata/countryList.json'

describe('CountryService', () => {
    let injector: TestBed;
    let service: CountryService;
    let httpMock: HttpTestingController;

    beforeEach(async(() => {

        TestBed.configureTestingModule({
            declarations: [
                CountryComponent,
                CountryPipe
            ],
            imports: [
                HttpClientModule
            ],
            providers: [
                CountryService,
                HttpTestingController
            ]
        });
    }));

    beforeEach(() => {
        injector = getTestBed();
        service = injector.get(CountryService);
        httpMock = injector.get(HttpTestingController);
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });

    it('getCountryList() should return data', () => {

        service.getCountryList().subscribe((res) => {
            expect(res).toEqual(CountryListJSON);
        });

    });

});
