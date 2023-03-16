import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class DeviceService {
   url:string='https://jsonplaceholder.typicode.com/photos';
  constructor(private _http:HttpClient) { }

  listDevices(){
    return this._http.get(this.url+ 'photos' )
  }

  addDevice(deviceData:any){
    return this._http.post<any>(this.url,deviceData)

  }
}