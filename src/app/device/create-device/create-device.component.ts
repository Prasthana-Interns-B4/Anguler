import { Component } from '@angular/core';
import { FormBuilder ,Validators} from '@angular/forms';
import { DeviceService } from '../services/device.service';

@Component({
  selector: 'app-create-device',
  templateUrl: './create-device.component.html',
  styleUrls: ['./create-device.component.css']
})
export class CreateDeviceComponent {
 
  
 constructor(private fb:FormBuilder,private deviceService:DeviceService){}
  addDeviceForm=this.fb.group({
    deviceName:['',[Validators.required,Validators.minLength(3)]],
    assignedTo:['',[Validators.required,Validators.minLength(3)]],
    deviceType:['',Validators.required],
    os:['',Validators.required]
  })

  onSubmit(){
    console.log(this.addDeviceForm.value)
    this.deviceService.addDevice(this.addDeviceForm.value)
    .subscribe(
       (val) => alert("Device added successfully"),
       
    )
  }
}
