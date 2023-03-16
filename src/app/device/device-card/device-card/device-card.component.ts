import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-device-card',
  templateUrl: './device-card.component.html',
  styleUrls: ['./device-card.component.css']
})
export class DeviceCardComponent {
  @Input()
  name!: string;
  @Input()
  src!: string;
  @Input()
  deviceType!:string;
  @Input()
  tagNo!:string;
  @Input()
  build:string='macos'
  @Input()
  employeeName!:string;

  
}
