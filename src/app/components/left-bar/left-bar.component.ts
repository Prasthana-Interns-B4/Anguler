import { Component } from '@angular/core';
import { Router } from '@angular/router';
import {
 
  faUsers,
  faPowerOff,
  faUser,
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

  constructor (private route: Router ){}

  myProfile(){       
    this.route.navigate(['/emp-details']);
  }
  logout(){
    sessionStorage.clear();
    this.route.navigate(['']); 
  }

}
