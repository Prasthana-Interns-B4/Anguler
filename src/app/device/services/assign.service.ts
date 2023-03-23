import { Injectable } from '@angular/core';
import { DeviceType } from '../model/device-type';
import { DataService } from './data.service';

@Injectable({
  providedIn: 'root'
})
export class AssignService {

  device1!: DeviceType;
  constructor(private ds:DataService) { }

  assignservice(device: DeviceType,empname: any){
    device.assigned=empname
    this.device1=device;
    this.ds.editdevice(this.device1.id,this.device1)
  }

  Unassignservice(device: DeviceType){
    device.assigned=null,
    this.ds.editdevice(device.id,device)
  }

}
