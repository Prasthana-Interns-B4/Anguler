import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-create-device',
  templateUrl: './create-device.component.html',
  styleUrls: ['./create-device.component.css'],
})
export class CreateDeviceComponent {
  constructor(private fb: FormBuilder, private ds: DataService) {}
  addDeviceForm = this.fb.group({
    name: ['', [Validators.required]],
    device_type: ['', Validators.required],
    os: ['', Validators.required],
    category: ['', Validators.required],
  });

  onSubmit() {
    this.ds.createDevice(this.addDeviceForm.value).subscribe({
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
