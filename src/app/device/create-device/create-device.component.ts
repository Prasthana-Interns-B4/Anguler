import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-create-device',
  templateUrl: './create-device.component.html',
  styleUrls: ['./create-device.component.css'],
})
export class CreateDeviceComponent {
  constructor(private fb: FormBuilder, private ds:DataService) {}
  addDeviceForm = this.fb.group({
    deviceName: ['', [Validators.required]],
    deviceType: ['', Validators.required],
    os: ['', Validators.required],
    assigned:[null]
  });

  onSubmit() {
    this.ds.createDevice(this.addDeviceForm.value).subscribe({
      
      next: (res)=> {alert('device added successfully')
    this.addDeviceForm.reset();}, 
    error: (e) => {alert("error while adding")},
    complete: () =>{ console.info('complete')} }
      
      )
  }
}
