import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment'; // Import the environment file
import { CONSTANT } from '../constant/constant';
import {  IStationResponse } from '../models/Station';
import { Observable } from 'rxjs/internal/Observable';


@Injectable({
  providedIn: 'root'
})
export class StationsService {
  apiEndPoint: string = '';

  constructor(private http: HttpClient) { 
   this.apiEndPoint = environment.ApiEndPoint;
  }

  getAllStations(): Observable<IStationResponse>{
    return this.http.get<IStationResponse>(this.apiEndPoint + CONSTANT.ENDPOINTS.GET_ALL_STATION)
  }
}
