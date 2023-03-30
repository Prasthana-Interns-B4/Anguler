import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { AuthService } from '../services/auth.service';
import {
  faUsers,
  faPowerOff,
  faUser,
  faBackward,
  faAdd, 
  faListSquares
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-device',
  templateUrl: './device.component.html',
  styleUrls: ['./device.component.css'],
})
export class DeviceComponent implements OnInit {
  faUsers = faUsers;
  faUser = faUser;
  faPowerOff = faPowerOff;
  faBackward =faBackward;
  faAdd = faAdd;
  faListSquares =   faListSquares;
  constructor( private route: Router, private authService:AuthService,private location: Location ) {}

  ngOnInit(): void {}

  goBack(){
    this.location.back();
  }

  myProfile(){       
    const id = localStorage.getItem('id');     
    this.route.navigate(['/employees/'+id+'/details']); 
  }

  addDevice(){
    this.route.navigate(['device/create-device']);
  }

  deviceList(){
    this.route.navigate(['device/device-list']);
  }
  
  employeesList(){
    this.route.navigate(['/employees/list']);
  }

  logout(){
    this.authService.onLogout().subscribe(() => {});   
    this.route.navigate(['/login']);
    localStorage.clear();  
  }
}
