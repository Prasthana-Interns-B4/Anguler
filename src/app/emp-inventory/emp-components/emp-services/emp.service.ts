import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class EmpService {
  private baseUrl = 'https://jsonplaceholder.typicode.com/users';

  employee: any;

  constructor(private http: HttpClient) {}

  getEmployeeList() {
    return this.http.get(this.baseUrl);
  }

  setEmployee(data: any) {
    this.employee = data;
  }
  getEmployee() {
    return this.employee;
  }
}


