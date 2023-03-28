import { DataService } from '../services/data.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {
  faLaptop,
  faMouse,
  faEdit,
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-fmprofile',
  templateUrl: './fmprofile.component.html',
  styleUrls: ['./fmprofile.component.css']
})
export class FmprofileComponent implements OnInit  {
  faLapy = faLaptop;
  faMouse = faMouse;
  faEdit = faEdit;
  lapyAssigned = true;
  mouseAssigned = true; 

  employee: any;
  devices: any[]=[];
  id:any;

  constructor(private route: Router,private dataService:DataService) {}

  ngOnInit(): void {   
    this.getEmployeeDetails(); 
    
  }
  getEmployeeDetails(){
    this.id = localStorage.getItem('id');    
    this.dataService.getEmpDetails(this.id).subscribe(response => {
      if(response){
        this.employee = response;        
        this.devices = this.employee?.user.devices 
        console.log(this.devices)       
      }else{
        this.dataService.onLogout().subscribe(() => {});     
        this.route.navigate(['']);
        localStorage.clear();     
      }
  },error => {
    alert(error.message);
  });
  }

}
