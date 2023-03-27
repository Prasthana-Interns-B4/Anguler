import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';
import { MatDialogRef  } from '@angular/material/dialog';
import { Location } from'@angular/common';

//fontawesome icons
import {
  faAngleRight,
  faLaptop,
  faMouse,
  faTrash,
  faUsers,
  faPowerOff,
  faUser,
  faBell,
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-assign-employee',
  templateUrl: './assign-employee.component.html',
  styleUrls: ['./assign-employee.component.css']
})
export class AssignEmployeeComponent implements OnInit  {
  employees: any[] = [];
  filtered:any;
  filteredEmployees: any[] = [];
  searchInput: string = '';
  pendingRequests=3;
  employee: any;
  employeesToDisplay: any;
  faAngleRight = faAngleRight;
  faLapy = faLaptop;
  faMouse = faMouse;
  faUsers = faUsers;
  faUser = faUser;
  faBell = faBell;
  faPowerOff = faPowerOff;
  faTrash = faTrash;
  lapyAssigned = true;
  mouseAssigned = true;
  

  colors = [
    '#FF9A9E',
    '#2F5CFF',
    '#00B4DB',
    '#4B6CB7',
    '#ACB6E5',
    '#5236FF',
    '#06BEB6',
    '#9796F0',
  ];

  constructor(private dataService: DataService, private router: Router, private matDialogRef: MatDialogRef<AssignEmployeeComponent>,
    private location :Location) {}

  ngOnInit(): void {
    this.dataService.getEmployeeList().subscribe((response: any) => {
      this.employees = response;
      this.employeesToDisplay  = this.employees;
      this.employeesToDisplay = this.employeesToDisplay.users;
    });
  }

  trackByFn(index: number, employee: any): number {
    return employee.id;
  }


  searchEmployees(searchInput:any) {
    this.dataService.search(this.searchInput).subscribe(response => {
      this.filtered = response;
      this.filteredEmployees = this.filtered.users      
      this.employeesToDisplay  = this.filteredEmployees;
      console.log(this.filteredEmployees);
    });
  }

  randomColor() {
    let index = Math.floor(Math.random() * this.colors.length);
    return this.colors[index];
  }

  assign(employee: any) {
    const id = employee.id  
    const device_id = localStorage.getItem('device_id')  
    const data = { 
      device : {
        user_id : id
      }
    }    
    this.dataService.assignDevice(data,device_id).subscribe(() => {
      this.refreshPage();     
    });
  
  }

  closeDialog() {
    this.matDialogRef.close(); 
  }
  refreshPage() {
    window.location.reload();
  }
}
