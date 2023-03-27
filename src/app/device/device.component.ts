import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {
  faWhatsapp,
  faTwitter,
  faFacebookF,
  faInstagramSquare,
} from '@fortawesome/free-brands-svg-icons';
import {
 
  faUsers,
  faPowerOff,
  faUser,
} from '@fortawesome/free-solid-svg-icons';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-device',
  templateUrl: './device.component.html',
  styleUrls: ['./device.component.css'],
})
export class DeviceComponent implements OnInit {
  faUsers = faUsers;
  faUser = faUser;
  faPowerOff = faPowerOff;

  constructor( private route: Router, private authService:AuthService) {}
  ngOnInit(): void {}

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
