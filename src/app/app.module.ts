import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WeatherComponent } from './weather/weather.component'
import { TodayComponent } from './weather/today/today.component';
import { WeatherService } from './weather.service';
import { WeekForecastComponent } from './weather/week-forecast/week-forecast.component';
import { DataTransform } from './pipes/dateTransform.pipe';
import { Captilized } from './pipes/captilized.pipe';

@NgModule({
  declarations: [
    AppComponent,
    TodayComponent,
    WeekForecastComponent,
    WeatherComponent,
    DataTransform,
    Captilized
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [WeatherService],
  bootstrap: [AppComponent]
})
export class AppModule { }
