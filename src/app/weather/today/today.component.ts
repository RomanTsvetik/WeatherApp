import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm } from '@angular/forms';
import { Weather } from '../../weather.inteface';
import { WeatherService } from '../../weather.service';

@Component({
  selector: 'app-today',
  templateUrl: './today.component.html',
  styleUrls: ['./today.component.css']
})
export class TodayComponent implements OnInit {

  weatherSearch!: FormGroup;
  weatherInfo!: any;
  weekWeather: any;

  currentWeather: Weather = {
    city: '',
    country: '',
    time: '',
    temp: '',
    temp_min: '',
    temp_max: '',
    description: '',
    show: false
  }

  display = false;

  constructor(private fb: FormBuilder, private http: HttpClient, private weatherService: WeatherService) { }

  ngOnInit(): void {
    this.weatherSearch = this.fb.group({
      city: ['']
    })
  }

  public getWeather(inputValues: { city: string; }) {
    this.weatherService.getData(inputValues.city)
      .subscribe((data: Weather) => {
        this.weatherInfo = { ...data };
        console.log(this.weatherInfo)
        this.currentWeather.city = this.weatherInfo.name;
        this.currentWeather.country = this.weatherInfo.sys.country;
        this.currentWeather.time = new Date(this.weatherInfo.dt * 1000).toLocaleDateString()
        this.currentWeather.temp = this.weatherInfo.main.temp;
        this.currentWeather.temp_min = this.weatherInfo.main.temp_min;
        this.currentWeather.temp_max = this.weatherInfo.main.temp_max;
        this.currentWeather.description = this.weatherInfo.weather[0].description;
        this.currentWeather.show = true;
      })
    this.weatherSearch.reset();
    this.getWeekForecast(inputValues.city)
  }

  public getWeekForecast(city: string) {
    this.weatherService.getDataForWeek(city)
      .subscribe((data) => {
        this.weekWeather = { ...data };
      })
    this.display = true;
  }
}


