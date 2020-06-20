import { HttpClient } from '@angular/common/http';
import * as _ from 'lodash';
import { Country } from '../model/response/Country';
import { Injectable } from '@angular/core';
import config from '../assets/config.json';

@Injectable()
export class CountryService {

    constructor(private http: HttpClient) { }

    public getCountryList() {
        return this.http.get<Country[]>(config.GET_COUNTRY_LIST);
    }
}