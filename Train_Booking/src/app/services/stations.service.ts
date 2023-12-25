import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment'; // Import the environment file


@Injectable({
  providedIn: 'root'
})
export class StationsService {
  apiEndPoint: string = '';

  constructor(private http: HttpClient) { 
   this.apiEndPoint = environment.ApiEndPoint;
  }
}
