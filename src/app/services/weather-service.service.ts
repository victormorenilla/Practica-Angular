import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable,forkJoin } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
  export class WeatherService { 
  private apiKey = '6b210742573911913016288891bb80a3'; // Coloca aquí tu clave API de OpenWeatherMap
  private apiUrl = `https://api.openweathermap.org/data/2.5/weather`;
  constructor(private http: HttpClient)  { }

  // Método para obtener el clima por ciudad
  getWeatherByCity(city: string): Observable<any> {
  const url =`${this.apiUrl}?q=${city}&appid=${this.apiKey}&units=metric`;
  return this.http.get(url);
  }
  // Método para obtener el clima de múltiples ciudades
  getWeatherForCities(cities: string[]): Observable<any[]> {
    const requests = cities.map(city => this.getWeatherByCity(city));
    return forkJoin(requests); // Espera hasta que todas las peticiones terminen
  }
}
