import { Component } from '@angular/core';
import { Router } from '@angular/router';
import {
 
  faUsers,
  faPowerOff,
  faUser,
} from '@fortawesome/free-solid-svg-icons';

import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-left-bar',
  templateUrl: './left-bar.component.html',
  styleUrls: ['./left-bar.component.css']
})
export class LeftBarComponent {

  faUsers = faUsers;
  faUser = faUser;
  faPowerOff = faPowerOff;
  
  constructor (private route: Router, private authService:AuthService ){}

  myProfile(){       
    this.route.navigate(['/emp-details']);
  }
  
  logout(){
    this.authService.onLogout().subscribe(() => {});
    this.route.navigate(['']);
    localStorage.clear();  
  }

}


