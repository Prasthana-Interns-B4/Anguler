import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-create-device',
  templateUrl: './create-device.component.html',
  styleUrls: ['./create-device.component.css'],
})
export class CreateDeviceComponent implements OnInit {
  constructor(
    private fb: FormBuilder,
    private ds: DataService,
    private route: Router
  ) {}
  addDeviceForm!: FormGroup;
  ngOnInit(): void {
    this.addDeviceForm = this.fb.group({
      name: ['', [Validators.required]],
      device_type: ['', Validators.required],
      os: [''],
      category: ['', Validators.required],
    });
  }

  onSubmit() {
    if (this.addDeviceForm.valid) {
      this.ds.createDevice(this.addDeviceForm.value).subscribe({
        next: (res) => {
          this.addDeviceForm.reset();
          this.route.navigate(['device/device-list']);
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
