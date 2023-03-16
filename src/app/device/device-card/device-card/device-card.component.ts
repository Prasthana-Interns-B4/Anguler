import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-device-card',
  templateUrl: './device-card.component.html',
  styleUrls: ['./device-card.component.css']
})
export class DeviceCardComponent {
  constructor(private router :Router){}
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
  @Output() clicked = new EventEmitter<void>();
 
  
  onClick() {
    this.clicked.emit();
  }
  
}
