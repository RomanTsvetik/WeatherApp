import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError, Observable, throwError } from 'rxjs';
import { Weather } from './weather.inteface';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  private readonly currentURL = 'https://api.openweathermap.org/data/2.5/';
  // private readonly API_key = '971ff34f8cfbbbe6888b310781d39171'
  private readonly API_key = '0f3fb9fa31ad3d41f1bb2bd0841c3f2f'

  constructor(private http: HttpClient) { }

  public getData(city: string): Observable<Weather> {
    return this.http.get<Weather>(`${this.currentURL}weather?q=${city}&units=metric&appid=${this.API_key}`)
      .pipe(catchError(this.handleError));
  }

  public getDataForWeek(city: string): Observable<Weather[]> {
    return this.http.get<Weather[]>(`${this.currentURL}forecast/daily?q=${city}&units=metric&cnt=7&appid=${this.API_key}`)
      .pipe(catchError(this.handleError));
  }

  private handleError(error: HttpErrorResponse) {
    return throwError(() => new Error(error.error.message))
  }





}
