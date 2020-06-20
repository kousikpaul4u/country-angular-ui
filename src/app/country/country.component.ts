import { Component } from '@angular/core';
import { CountryService } from '../service/country.service';
import { Country } from '../model/response/Country';

@Component({
  selector: 'app-country',
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.css']
})
export class CountryComponent {

  countries: Country[] = [];
  query: string = "";

  constructor(countryService: CountryService) {
    countryService.getCountryList().subscribe(countries => { this.countries = countries; });
  }

}
