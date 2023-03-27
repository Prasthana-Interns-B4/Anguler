import { EmpService } from './../emp-services/emp.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
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
  employees: any[] = [];
  faLapy = faLaptop;
  faMouse = faMouse;
  faEdit = faEdit;
  faTrash = faTrash;
  lapyAssigned = true;
  mouseAssigned = true;
  employee: any;
  devices: any[] = [];
  id: any;

  constructor(
    private route: Router,
    private empService: EmpService,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.getEmployeeDetails();
  }

  getEmployeeDetails() {
    this.id = localStorage.getItem('em_id');
    this.empService.getEmpDetails(this.id).subscribe(
      (response) => {
        if (response) {
          this.employee = response;
          this.devices = this.employee.user.devices;
        } else {
          this.empService.onLogout().subscribe(() => {});
          this.route.navigate(['']);
          localStorage.clear();
        }
      },
      (error) => {
        alert(error.message);
      }
    );
  }

  removeEmployee() {
    if (confirm('Are you sure ? \n To delete this employee')) {
      this.id = localStorage.getItem('em_id');
      this.empService.delete(this.id).subscribe(() => {});
      this.route.navigate(['/emp-inventory/emp-list']);
    }
  }

  openModal() {
    const modelDiv = document.getElementById('myModal');
    if (modelDiv != null) {
      modelDiv.style.display = 'block';
    }
  }
  updateEmployee(data: any, id: number) {
    console.log(id);
    console.log(data);
    const users = (data = {
      user: {
        email: data.user?.email.value,
        user_detail_attributes: {
          first_name: data?.user.user_detail.first_name,
          last_name: data?.user.user_detail.last_name,
          phone_number: data?.user.user_detail.phone_number,
          date_of_birth: data?.user.user_detail.date_of_birth,
        },
      },
    });
    console.log(users);


    this.empService.updateEmpDetails(users, id).subscribe(() => {
      // this.refresh();
    });
  }

  closeModal() {
    const modelDiv = document.getElementById('myModal');
    if (modelDiv != null) {
      modelDiv.style.display = 'none';
    }
  }
  refresh() {
    window.location.reload();
  }
}
