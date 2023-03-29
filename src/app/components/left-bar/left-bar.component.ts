import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { AuthService } from 'src/app/services/auth.service';

import { 
  faUsers,
  faPowerOff,
  faUser,
  faBackward,
} from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-left-bar',
  templateUrl: './left-bar.component.html',
  styleUrls: ['./left-bar.component.css']
})
export class LeftBarComponent {

  faUsers = faUsers;
  faUser = faUser;
  faPowerOff = faPowerOff;
  faBackward = faBackward
  
  constructor (private route: Router, private authService:AuthService, private location: Location){}
 
  role = localStorage.getItem('role')

  goBack(){
    this.location.back();
  }

  myProfile(){  
    const id = localStorage.getItem('id');     
    this.route.navigate(['/employees/'+id+'/details']); 
  }

  employeesList(){
    this.route.navigate(['/employees/list']);
  }

  addEmployee(){    
    this.route.navigate(['/employees/add-employee']);
  }

  pendingRequest(){
    this.route.navigate(['/employees/pending-requests']);
  }

  addDevice(){
    this.route.navigate(['device/create-device']);
  }

  deviceList(){
    this.route.navigate(['device/device-list']);
  }
  
  logout(){
    this.authService.onLogout().subscribe(() => {});
    this.route.navigate(['/login']);
    localStorage.clear();  
  }
  refreshPage() {
    window.location.reload();
  }

}


