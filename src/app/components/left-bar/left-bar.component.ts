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

  goBack(){
    this.location.back();
  }
  myProfile(){       
    this.route.navigate(['/emp-details']);
  }
  
  logout(){
    this.authService.onLogout().subscribe(() => {});
    this.route.navigate(['']);
    localStorage.clear();  
  }

}


