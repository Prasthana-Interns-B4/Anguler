import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import {
  faLaptop,
  faMouse,
  faEdit,
  faTrash,
} from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-emp-details',
  templateUrl: './emp-details.component.html',
  styleUrls: ['./emp-details.component.css']
})
export class EmpDetailsComponent implements OnInit {
  faLapy = faLaptop;
  faMouse = faMouse;
  faEdit = faEdit;
  lapyAssigned = true;
  mouseAssigned = true;
  faTrash = faTrash;

  employee: any;
  devices: any[]=[]
  id:any;

  constructor(private authService:AuthService,private route: Router) {}

  ngOnInit(): void {   
    this.getEmployeeDetails(); 
    
  }

  getEmployeeDetails(){
    this.id = sessionStorage.getItem('id');    
    this.authService.getEmpDetails(this.id).subscribe(response => {
      if(response){
        this.employee = response;
        this.devices = this.employee.user.devices        
      }else{
        this.logout();
        this.route.navigate(['']);
      }
  },error => {
    alert(error.message);
  });

  }

  logout(){
    sessionStorage.clear();
    this.route.navigate(['']); 
  }
}
