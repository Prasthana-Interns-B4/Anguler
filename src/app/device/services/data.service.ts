import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  baseurl="http://18.142.36.157:3000/devices/"
  

  constructor( private http:HttpClient) { }

  createDevice(data:any){
    return this.http.post(this.baseurl,data)
  }
  getDevices(){
    return this.http.get(this.baseurl);
  }
  deleteDevice(id:number) {
    return this.http.delete(this.baseurl+id)
  }
  putDevice(id:number,data:any){
    return this.http.put(this.baseurl+id,data)
  }
  

  getDeviceDetails(id:number):Observable<any> {    
    return this.http.get(this.baseurl+ id);  
  }
}
