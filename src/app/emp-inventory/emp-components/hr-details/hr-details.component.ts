import { EmpService } from './../emp-services/emp.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {
  faLaptop,
  faMouse,
  faEdit,
} from '@fortawesome/free-solid-svg-icons';
 


@Component({
  selector: 'app-hr-details',
  templateUrl: './hr-details.component.html',
  styleUrls: ['./hr-details.component.css'],
})
export class HrDetailsComponent implements OnInit  {
  faLapy = faLaptop;
  faMouse = faMouse;
  faEdit = faEdit;
  lapyAssigned = true;
  mouseAssigned = true; 

  employee: any;
  devices: any[]=[]
  id:any;

  constructor(private route: Router,private empService:EmpService) {}

  ngOnInit(): void {   
    this.getEmployeeDetails(); 
    
  }

  getEmployeeDetails(){
    this.id = localStorage.getItem('id');    
    this.empService.getEmpDetails(this.id).subscribe(response => {
      if(response){
        this.employee = response;
        this.devices = this.employee.user.devices        
      }else{
        this.empService.onLogout().subscribe(() => {});     
        this.route.navigate(['']);
        localStorage.clear();     
      }
  },error => {
    alert(error.message);
  });
  }
}
