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
  selector: 'app-hr-details',
  templateUrl: './hr-details.component.html',
  styleUrls: ['./hr-details.component.css'],
})
export class HrDetailsComponent {
  employees: any[] = [];
  faLapy = faLaptop;
  faMouse = faMouse;
  faEdit = faEdit;
  lapyAssigned = true;
  mouseAssigned = true;
  employeeName: any;
  jobTitle: any;
  employee = this.empList.getEmployee();
  // canEdit = true;
  // canDelete = true;
  faTrash = faTrash;

  constructor(private empList: EmpService, private router: Router) {}

  ngOnInit(): void {
    this.empList.getEmployeeList().subscribe((response: any) => {
      this.employees = response;
    });
  }
  editEmployee() {}
  removeEmployee(employee: any) {
    if (confirm('Are you sure??')) {
      const index = this.employees.findIndex((emp) => emp.id === employee.id);
      if (index !== -1) {
        this.employees.splice(index, 1);
        this.router.navigate(['emp-inventory/emp-list']);
        console.log(this.employees);
      }
    }
  }
}
