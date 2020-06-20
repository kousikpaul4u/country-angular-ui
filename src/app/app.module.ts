import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CountryComponent } from './country/country.component';
import { CountryService } from './service/country.service';
import { CountryPipe } from './country/country.pipe';

@NgModule({
  declarations: [
    AppComponent,
    CountryComponent,
    CountryPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    CountryService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
