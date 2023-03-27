import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {

  faUsers,
  faPowerOff,
  faUser,
} from '@fortawesome/free-solid-svg-icons';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-emp-inventory',
  templateUrl: './emp-inventory.component.html',
  styleUrls: ['./emp-inventory.component.css'],
})
export class EmpInventoryComponent implements OnInit {
  faUsers = faUsers;
  faUser = faUser;
  faPowerOff = faPowerOff;

  ngOnInit(): void {}

  constructor (private route: Router, private authService:AuthService ){}

  myProfile(){
    this.route.navigate(['/emp-inventory/hr-details']);
  }

  employeesList(){
    this.route.navigate(['/emp-inventory/emp-list']);
  }

  addEmployee(){
    this.route.navigate(['/emp-inventory/add-emp']);
  }

  pendingRequest(){
    this.route.navigate(['/emp-inventory/pending-requests']);
  }

  logout(){
    this.authService.onLogout().subscribe(() => {});
    this.route.navigate(['']);
    localStorage.clear();
  }
}
