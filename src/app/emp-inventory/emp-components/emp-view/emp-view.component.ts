import { FormBuilder, FormGroup, Validators } from '@angular/forms';
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

  formValue!: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private route: Router,
    private empService: EmpService,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.formValue = this.formBuilder.group({
      firstName: ['', Validators.minLength(3)],
      lastName: ['', Validators.required],
      dob: ['', [Validators.required]],
      phoneNumber: ['', [Validators.required]],
    });
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

  onEdit(row: any) {
    this.formValue.controls['firstName'].setValue(
      row.user.user_detail.first_name
    );
    this.formValue.controls['lastName'].setValue(
      row.user.user_detail.last_name
    );
    this.formValue.controls['dob'].setValue(row.user.user_detail.date_of_birth);
    this.formValue.controls['phoneNumber'].setValue(
      row.user.user_detail.phone_number
    );
  }

  updateEmployee() {
    const updatedData = {
      user: {
        email: this.employee.user.email,
        user_detail_attributes: {
          first_name: this.formValue.value.firstName,
          last_name: this.formValue.value.lastName,
          phone_number: this.formValue.value.phoneNumber,
          date_of_birth: this.formValue.value.dob,
        },
      },
    };
    const id = this.employee.user.id;

    this.empService.updateEmpDetails(updatedData, id).subscribe(
      (res) => {
        // this.getEmployeeDetails();
        this.employee=res;
        this.closeModal();
      },
      (error) => {
        // alert(error.message);
        this.employee=this.employee;
      }
    );
  }

  closeModal() {
    const modelDiv = document.getElementById('myModal');
    if (modelDiv != null) {
      modelDiv.style.display = 'none';
      this.employee=this.employee;
    }
  }
}
