import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { EmpService } from '../emp-services/emp.service';
import { MatDialogRef } from '@angular/material/dialog';

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
  selector: 'app-emp-list',
  templateUrl: './emp-list.component.html',
  styleUrls: ['./emp-list.component.css'],
})
export class EmpListComponent implements OnInit {
  employees: any[] = [];
  filtered: any;
  filteredEmployees: any[] = [];
  searchInput: string = '';
  pendingRequests = 3;
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
  id: any;

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

  constructor(private empService: EmpService, private router: Router, private location:Location, private activatedRoute : ActivatedRoute ) {}

  ngOnInit(): void {
    this.getCall();
  }

  trackByFn(index: number, employee: any): number {
    return employee.id;
  }

  getCall(){
        this.empService.getEmployeeList().subscribe((response: any) => {
          this.employees = response;
          this.employeesToDisplay = this.employees;
          this.employeesToDisplay = this.employeesToDisplay.users;
        });
  }

  searchEmployees(searchInput: any) {
    this.empService.search(this.searchInput).subscribe((response) => {
      this.filtered = response;
      this.filteredEmployees = this.filtered.users;
      this.employeesToDisplay = this.filteredEmployees;
      console.log(this.filteredEmployees);
    });
  }
  
  removeEmployee(id: number) {
    if (confirm('Are you sure ? \n To delete this employee')) {
      this.empService.delete(id).subscribe(() => {
        this.getCall();
        // this.refreshPage();
      });
      this.router.navigate(['emp-inventory/emp-list']);
    }
  }

  randomColor() {
    let index = Math.floor(Math.random() * this.colors.length);
    return this.colors[index];
  }

  viewDetails(employee: any) {
    const em_id = employee.id;
    console.log(em_id);
    
    // this.router.navigate(['/employees/'+em_id+'/details']); 
    console.log(employee);
  }
  refreshPage() {
    window.location.reload();
  }
}
