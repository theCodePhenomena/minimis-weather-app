import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
const apiKey: string = environment.apiKey;
 
@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor( private http: HttpClient ) { }

  getCurrentWeather(loc: string) {
    return this.http.get(`${environment.apiUrl}/weather?q=${loc}&appid=${apiKey}`)
  }

  getForecast(loc: string) {
    return this.http.get(`${environment.apiUrl}/forecast?q=${loc}&appid=${apiKey}`)
  }
}