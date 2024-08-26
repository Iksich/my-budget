import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ExpenseService {

  private baseUrl = `${environment.apiUrl}api/expense`;

  constructor(private http: HttpClient) { }

  postExpense(expenseDTO: any): Observable<any> { 
    return this.http.post(this.baseUrl, expenseDTO);
  }

  getAllExpenses(): Observable<any> { 
    return this.http.get(`${this.baseUrl}/all`);
  }

  deleteExpense(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`);
  }

  getExpenseById(id: number): Observable<any> { 
    return this.http.get(`${this.baseUrl}/${id}`);
  }

  updateExpense(id: number, expenseDTO: any): Observable<any> { 
    return this.http.put(`${this.baseUrl}/${id}`, expenseDTO);
  }
}

