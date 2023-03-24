import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  userType(type:any){
    if(type=="E"){
      sessionStorage.setItem("usertype","E");
    }
    else if(type=="F"){
      sessionStorage.setItem("usertype","F");
    }
    else{
      sessionStorage.setItem("usertype","H");
    }
    
  }

}
