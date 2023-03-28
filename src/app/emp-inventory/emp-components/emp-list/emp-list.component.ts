import { Component, NgZone, OnInit, ChangeDetectorRef } from '@angular/core';
import { Router } from '@angular/router';
import { EmpService } from '../emp-services/emp.service';

// fontawesome icons
import {
  faAngleRight,
  faLaptop,
  faMouse,
  faTrash,
  faUsers,
  faPowerOff,
  faUser,
  faBell,
  faUserPlus
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-emp-list',
  templateUrl: './emp-list.component.html',
  styleUrls: ['./emp-list.component.css'],
})
export class EmpListComponent implements OnInit {
  employees: any;
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
  faUserPlus = faUserPlus;
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
    '#F7A9E6',
    '#7DCFB6',
    '#FFB6C1',
    '#FFDAB9',
    '#F0E68C',
    '#87CEFA',
    '#FFE4C4',
    '#E6E6FA',
  ];

  constructor(
    private empService: EmpService,
    private router: Router,
    private ngZone: NgZone,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.getCall();
    console.log(this.employee);
    
  }

  trackByFn(index: number, employee: any): number {
    return employee.id;
  }

  getCall() {
    this.empService.getEmployeeList().subscribe((response: any) => {
      this.employees = response;
      this.employeesToDisplay = this.employees.users;
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
    if (confirm('Are you sure?\nTo delete this employee')) {
      this.empService.delete(id).subscribe(() => {
        this.getCall();
      });
      this.router.navigate(['emp-inventory/emp-list']);
    }
  }

  randomColor() {
    let index = Math.floor(Math.random() * this.colors.length);
    return this.colors[index];
  }

  viewDetails(employee: any) {
    const id = employee.id;
    localStorage.setItem('em_id', id);
    this.router.navigate(['emp-inventory/emp-details', id]);
    console.log(employee);
  }

  refreshPage() {
    window.location.reload();
  }
}
