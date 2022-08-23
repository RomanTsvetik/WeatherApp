import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  baseURL = 'https://api.openweathermap.org/data/2.5/weather';
  API_key = '971ff34f8cfbbbe6888b310781d39171'

  constructor(private http: HttpClient) { }

  public getData(city: string) {
    return this.http.get(`${this.baseURL}?q=${city}&appid=${this.API_key}&units=metric`)
  }
}
