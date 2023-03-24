import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { EmpService } from '../emp-services/emp.service';

//fontawesome icons
import {
  faWhatsapp,
  faTwitter,
  faFacebookF,
  faInstagramSquare,
} from '@fortawesome/free-brands-svg-icons';
import {
  faAngleRight,
  faLaptop,
  faMouse,
  faTrash,
  faUsers,
  faPowerOff,
  faUser,
  faBell
} from '@fortawesome/free-solid-svg-icons';
EmpService

@Component({
  selector: 'app-emp-list',
  templateUrl: './emp-list.component.html',
  styleUrls: ['./emp-list.component.css'],
})
export class EmpListComponent {
  employees: any[] = [];
  filteredEmployees: any[] = [];
  searchInput: string = '';
  pendingRequests=3;
  employee: any;
  employeesToDisplay: any;
  faArrowRight = faAngleRight;
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

  constructor(private empService: EmpService, private router: Router) {}

  ngOnInit(): void {
    this.empService.getEmployeeList().subscribe((response: any) => {
      this.employees = response;
      this.employeesToDisplay = this.employees;
    });
  }
  trackByFn(index: number, employee: any): number {
    return employee.id;
  }
  searchEmployees(event: any) {
    this.filteredEmployees = this.employees.filter((employee) => {
      return (
        employee.name.toLowerCase().includes(this.searchInput.toLowerCase()) ||
        employee.username.toLowerCase().includes(this.searchInput.toLowerCase())
      );
      // employee.designation.toLowerCase().includes(this.searchInput.toLowerCase());
    });
    this.employeesToDisplay = this.filteredEmployees;
  }
  randomColor() {
    let index = Math.floor(Math.random() * this.colors.length);
    return this.colors[index];
  }

  viewDetails(employee: any) {
    this.router.navigate(['emp-inventory/emp-details', employee.id]);
    this.empService.setEmployee(employee);
  }
}
