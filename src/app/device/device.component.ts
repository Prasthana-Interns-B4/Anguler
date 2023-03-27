import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { AuthService } from '../services/auth.service';
import {
  faUsers,
  faPowerOff,
  faUser,
  faBackward
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
  constructor( private route: Router, private authService:AuthService,private location: Location ) {}

  ngOnInit(): void {}

  goBack(){
    this.location.back();
  }

  myProfile(){       
    this.route.navigate(['device/fm-details']);
  }

  addDevice(){
    this.route.navigate(['device/create-device']);
  }

  DeviceList(){
    this.route.navigate(['device/device-list']);
  }

  logout(){
    this.authService.onLogout().subscribe(() => {});   
    this.route.navigate(['']);
    localStorage.clear();  
  }
}
