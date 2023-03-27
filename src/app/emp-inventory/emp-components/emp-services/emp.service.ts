import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class EmpService {
  baseUrl = 'http://18.142.36.157:3000/users'
  employee: any;

  constructor(private http: HttpClient, private route:Router) {}

  onEdit(editData:any,id:any):Observable<any> {     
    return this.http.post(this.baseUrl+'/:'+id+'/approve', editData);
  } 

  getEmployeeList() {
    return this.http.get(this.baseUrl);
  }

  getEmpDetails(id:number) {
    return this.http.get(this.baseUrl +'/'+ id);
  }
  
  onLogout():Observable<any> { 
    return this.http.delete(this.baseUrl + '/sign_out');   
  }

  delete(id:number){    
    return this.http.delete(this.baseUrl +'/'+ id);
  }

  search(searchInput:any){
    return this.http.get(this.baseUrl + '?search='+searchInput);
  }


}


