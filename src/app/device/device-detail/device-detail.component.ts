import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-device-detail',
  templateUrl: './device-detail.component.html',
  styleUrls: ['./device-detail.component.css'],
})
export class DeviceDetailComponent {

  constructor(private activatedroute:ActivatedRoute) {}
  ngOnInit() {}

  // getDeviceDtails(id: number) {
  //   this.deviceservice.deleteddevice(id).subscribe((data) => {});
  // }
}
