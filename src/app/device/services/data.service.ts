import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  baseUrlUsers = "http://18.142.36.157:3000/users"
  baseurlDevices="http://18.142.36.157:3000/devices"
  
  constructor( private http:HttpClient) { }

  getEmployeeList() {
    return this.http.get(this.baseUrlUsers);
  }

  search(searchInput:any){
    return this.http.get(this.baseurlDevices + '?search='+searchInput);
  }

  getEmpDetails(id:number) {
    return this.http.get(this.baseUrlUsers +'/'+ id);
  }

  getDevices(){
    return this.http.get(this.baseurlDevices);
  }

  createDevice(data:any){
    return this.http.post(this.baseurlDevices,data)
  }

  deleteDevice(id:number) {
    return this.http.delete(this.baseurlDevices+'/'+id)
  }

  assignDevice(data:any, id:any) {
    return this.http.put(this.baseurlDevices + '/'+ id + '/assign',data)
  }

  unAssignDevice(data:any, id:any) {
    return this.http.put(this.baseurlDevices + '/'+ id + '/unassign',data)
  }

  editdevice(id:number,data:any){
    return this.http.put(this.baseurlDevices+id,data)
  }

  onLogout():Observable<any> { 
    return this.http.delete(this.baseUrlUsers + '/sign_out');   
  }
}
