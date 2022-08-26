import { Component, Input, OnInit } from '@angular/core';
import { Weather } from '../../weather.inteface';
import { WeatherService } from '../../weather.service';

@Component({
  selector: 'app-week-forecast',
  templateUrl: './week-forecast.component.html',
  styleUrls: ['./week-forecast.component.css']
})
export class WeekForecastComponent implements OnInit {

  @Input()
  week!: any;
  ngOnInit(): void { }
}
