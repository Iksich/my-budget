import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class StatsService {

  private baseUrl = `${environment.apiUrl}api/stats`;

  constructor(private http: HttpClient) { }

  getStats(): Observable<any> {
    return this.http.get<any>(this.baseUrl);
  }

  getChart(): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/chart`);
  }
}

