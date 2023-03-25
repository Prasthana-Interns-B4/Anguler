import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import {
  faLaptop,
  faMouse,
  faEdit,
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

  employee: any;
  devices: any[]=[]
  id:any;

  constructor(private authService:AuthService,private route: Router) {}

  ngOnInit(): void {   
    this.getEmployeeDetails();     
  }

  getEmployeeDetails(){
    this.id = localStorage.getItem('id');       
    this.authService.getEmpDetails(this.id).subscribe(response => {      
      if(response.user){
        this.employee = response;
        this.devices = this.employee.user.devices        
      }else{
        this.authService.onLogout().subscribe(() => {}); 
        this.route.navigate(['']);
        localStorage.clear();   

      }
  },error => {
    alert(error.message);
  });
  }
}
