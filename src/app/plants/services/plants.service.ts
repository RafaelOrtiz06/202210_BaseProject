import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Plant } from '../models/plant';

@Injectable({
  providedIn: 'root'
})
export class PlantsService {
  #baseUrl: string = environment.baseUrl;

  constructor(private _http: HttpClient) { }

  getAllPlants(): Observable<Plant[]> {
    return this._http.get<Plant[]>(this.#baseUrl);
  }
  
}
