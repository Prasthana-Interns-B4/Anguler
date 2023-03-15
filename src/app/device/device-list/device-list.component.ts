import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { DeviceService } from '../services/device.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
@Component({
  selector: 'app-device-list',
  templateUrl: './device-list.component.html',
  styleUrls: ['./device-list.component.css'],
})
export class DeviceListComponent {
  constructor(private _deviceService: DeviceService,private router:Router, private activatedRoute:ActivatedRoute) {}
  listDevices = [
    {
      employeeName:'Rahul Nurup',
      tagNo:'dev001',
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTo-dSXGisiHYCquxAoPx9QKLZ97nxfobHviXAxl-0k0Pu320UwQkoM6S9AhzoEuRmbgNA&usqp=CAU',
      deviceName: 'laptop',
      deviceCategory: 'electronic',
      deviceType:'Laptop',
      build:'macOS'
    },
    {
      employeeName:'Rahul Nurup',
      tagNo:'dev002',
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREtlZ2oUOEbbvSenpuBWHope9vcA9JusWcda5tuM2lGMck5elDbdim_COW2wxk3gcbB2g&usqp=CAU',
      deviceName: 'laptop',
      deviceCategory: 'electronic',
      deviceType:'Laptop',
      build:'macOS'
    },
    {
      employeeName:'Rahul Nurup',
      tagNo:'dev003',
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTo-dSXGisiHYCquxAoPx9QKLZ97nxfobHviXAxl-0k0Pu320UwQkoM6S9AhzoEuRmbgNA&usqp=CAU',
      deviceName: 'laptop',
      deviceCategory: 'electronic',
      deviceType:'Laptop',
      build:'macOS'
    },
    {
      employeeName:'Rahul Nurup',
      tagNo:'dev004',
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREtlZ2oUOEbbvSenpuBWHope9vcA9JusWcda5tuM2lGMck5elDbdim_COW2wxk3gcbB2g&usqp=CAU',
      deviceName: 'laptop',
      deviceCategory: 'electronic',
      deviceType:'Laptop',
      build:'macOS'
    },
    {
      
      employeeName:'Rahul Nurup',
      tagNo:'dev005',
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQezXAK_ZKMh4I9qPu5fj7juaG8kPMy4S0WKA&usqp=CAU',
      deviceName: 'backpack ',
      deviceCategory: 'electronic',
      deviceType:'Laptop',
      build:'macOS'
    },
    {
      employeeName:'Rahul Nurup',
      tagNo:'dev006',
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREtlZ2oUOEbbvSenpuBWHope9vcA9JusWcda5tuM2lGMck5elDbdim_COW2wxk3gcbB2g&usqp=CAU',
      deviceName: 'laptop',
      deviceCategory: 'electronic',
      deviceType:'Laptop',
      build:'macOS'
    },
    {
      employeeName:'Rahul Nurup',
      tagNo:'dev007',
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQezXAK_ZKMh4I9qPu5fj7juaG8kPMy4S0WKA&usqp=CAU',
      deviceName: 'backpack',
      deviceCategory: 'electronic',
      deviceType:'Laptop',
      build:'macOS'
    },
  ];


  
}
