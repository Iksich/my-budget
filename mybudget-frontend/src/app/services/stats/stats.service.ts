import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const BASIC_URL = 'https://my-budget-backend.onrender.com/';

@Injectable({
  providedIn: 'root'
})
export class StatsService {

  constructor(private http: HttpClient) { }

  getStats(): Observable<any> {
    return this.http.get<any>(BASIC_URL+"api/stats");
  }

  getChart(): Observable<any> {
    return this.http.get<any>(BASIC_URL+"api/stats/chart");
  }
}

