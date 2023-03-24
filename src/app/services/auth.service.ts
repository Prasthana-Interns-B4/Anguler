import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})


export class AuthService {

  baseUrl = 'http://18.142.36.157:3000/users'

  constructor( private http: HttpClient) { }

  onSignup(signupData:any):Observable<any> { 
    console.log(signupData)
    return this.http.post(this.baseUrl, signupData);
  } 

  onLogin(loginData:any):Observable<any> { 
    return this.http.post(this.baseUrl + '/sign_in', loginData);
  } 

  getEmpDetails(id:number):Observable<any> {    
    return this.http.get(this.baseUrl +'/'+ id);  
  }
}
