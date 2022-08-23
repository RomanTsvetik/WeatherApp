import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { WeatherService } from '../weather.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {

  weatherSearch!: FormGroup;
  weatherInfo!: any;

  constructor(private fb: FormBuilder, private http: HttpClient, private weatherService: WeatherService) { }

  ngOnInit(): void {
    this.weatherSearch = this.fb.group({
      city: ['']
    })
  }

  public getData(inputValues: { city: string; }) {  
    this.weatherService.getData(inputValues.city)
    .subscribe(data => {
      this.weatherInfo = data;   
    })
  }
}
