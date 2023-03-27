import { Component,OnInit } from '@angular/core';
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
  selector: 'app-emp-inventory',
  templateUrl: './emp-inventory.component.html',
  styleUrls: ['./emp-inventory.component.css'],
})

export class EmpInventoryComponent implements OnInit {

  faUsers = faUsers;
  faUser = faUser;
  faPowerOff = faPowerOff;
  faBackward = faBackward;

  ngOnInit(): void {}

  constructor (private route: Router, private authService:AuthService, private location: Location ){}

  goBack(){
    this.location.back();
  }
  

  myProfile(){       
    this.route.navigate(['/emp-inventory/hr-details']);
  }

  employeesList(){
    this.route.navigate(['/emp-inventory/emp-list']);
  }

  addEmployee(){
    
  }

  pendingRequest(){
    
  }
  
  logout(){
    this.authService.onLogout().subscribe(() => {});   
    this.route.navigate(['']);
    localStorage.clear();  
  }
}
