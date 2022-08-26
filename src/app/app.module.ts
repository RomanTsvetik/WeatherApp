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
import { WeekForecastItemComponent } from './weather/week-forecast/week-forecast-item/week-forecast-item.component';
import { DataTransform } from './dateTransform.pipe';

@NgModule({
  declarations: [
    AppComponent,
    TodayComponent,
    WeekForecastComponent,
    WeatherComponent,
    WeekForecastItemComponent,
    DataTransform
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
