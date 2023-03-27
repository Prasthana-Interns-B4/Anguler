import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-create-device',
  templateUrl: './create-device.component.html',
  styleUrls: ['./create-device.component.css'],
})
export class CreateDeviceComponent implements OnInit{
  constructor(private fb: FormBuilder, private ds: DataService) { }
  addDeviceForm!:FormGroup;
  ngOnInit(): void {
    this.addDeviceForm = this.fb.group({
      name: ['', [Validators.required]],
      device_type: ['', Validators.required],
      os: [''],
      category: ['', Validators.required],
    });
  }
 

  onSubmit() {
    if(this.addDeviceForm.valid){this.ds.createDevice(this.addDeviceForm.value).subscribe({
      next: (res) => {
        alert('device added successfully');
        this.addDeviceForm.reset();
        console.log(res)
      },
      error: (e) => {
        alert('error while adding');
      },
      complete: () => {
        console.info('complete');
      },
    });
  }
}
}
