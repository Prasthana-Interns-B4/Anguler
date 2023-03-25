import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class AuthService {

  baseUrl = 'http://18.142.36.157:3000/users'

  constructor( private http: HttpClient,private route:Router) { }

  onSignup(signupData:any):Observable<any> {     
    return this.http.post(this.baseUrl, signupData);
  } 

  onLogin(loginData:any):Observable<any> { 
    return this.http.post(this.baseUrl + '/sign_in', loginData);
  } 

  onLogout():Observable<any> {       
    return this.http.delete(this.baseUrl + '/sign_out');   
    
  }

  getEmpDetails(id:number):Observable<any> {    
    return this.http.get(this.baseUrl +'/'+ id);  
  }

}
