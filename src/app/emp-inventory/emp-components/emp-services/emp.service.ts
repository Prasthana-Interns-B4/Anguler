import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class EmpService {
  private baseUrl = 'http://18.142.36.157:3000/users/';

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


