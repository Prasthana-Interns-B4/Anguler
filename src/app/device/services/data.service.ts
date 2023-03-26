import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';

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
  editDevice(id:number,data:any){
    return this.http.put(this.baseurl+id,data)
  }
  searchDevice(query:string){
    return this.http.get(`{this.baseUrl}/search?q=${query}`)
  }
}
