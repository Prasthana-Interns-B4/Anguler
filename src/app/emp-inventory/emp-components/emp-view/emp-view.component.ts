import { EmpService } from './../emp-services/emp.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {
  faLaptop,
  faMouse,
  faEdit,
  faTrash,
} from '@fortawesome/free-solid-svg-icons'; 

@Component({
  selector: 'app-emp-view',
  templateUrl: './emp-view.component.html',
  styleUrls: ['./emp-view.component.css'],
})
export class EmpViewComponent implements OnInit {
  employees: any[]=[]
  faLapy = faLaptop;
  faMouse = faMouse;
  faEdit = faEdit;
  faTrash = faTrash;
  lapyAssigned = true;
  mouseAssigned = true; 

  employee: any;
  devices: any[]=[]
  id:any;

  constructor(private route: Router,private empService : EmpService) {}

  ngOnInit(): void {   
    this.getEmployeeDetails();     
  }

  getEmployeeDetails(){
    this.id = localStorage.getItem('em_id');      
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

  removeEmployee() {
    if (confirm('Are you sure ? \n To delete this employee')) {
      this.id = localStorage.getItem('em_id')        
      this.empService.delete(this.id).subscribe(() => {});
      this.route.navigate(['emp-inventory/emp-list']);      
      
    }
  }

  openModal() {
    const modelDiv = document.getElementById('myModal');
    if (modelDiv != null) {
      modelDiv.style.display = 'block';
    }
  }
  closeModal() {
    const modelDiv = document.getElementById('myModal');
    if (modelDiv != null) {
      modelDiv.style.display = 'none';
    }
  }
}
