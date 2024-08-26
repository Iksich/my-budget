import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class IncomeService {

  private baseUrl = `${environment.apiUrl}api/income`;

  constructor(private http: HttpClient) { }

  postIncome(incomeDTO: any): Observable<any> {
    return this.http.post(this.baseUrl, incomeDTO);
  }

  getAllIncomes(): Observable<any> {
    return this.http.get(`${this.baseUrl}/all`);
  }

  getIncomeById(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }

  updateIncome(id: number, incomeDTO: any): Observable<any> {
    return this.http.put(`${this.baseUrl}/${id}`, incomeDTO);
  }

  deleteIncome(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`);
  }
}
