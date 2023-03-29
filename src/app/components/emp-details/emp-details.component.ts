import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { Location } from '@angular/common';
import {
  faLaptop,
  faMouse,
  faEdit,
  faTrash,
  faBackward,
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-emp-details',
  templateUrl: './emp-details.component.html',
  styleUrls: ['./emp-details.component.css']
})
export class EmpDetailsComponent implements OnInit {
  
  employees: any[] = [];
  faLapy = faLaptop;
  faMouse = faMouse;
  faEdit = faEdit;
  faTrash = faTrash;
  faBackward = faBackward;
  lapyAssigned = true;
  mouseAssigned = true;
  employee: any;
  devices: any[] = [];
  id: any;

  formValue!: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private route: Router,    
    private location: Location,
    private authService:AuthService,
    private activatedRoute:ActivatedRoute,
  ) {}

  ngOnInit(): void {
    this.formValue = this.formBuilder.group({
      firstName: ['', Validators.minLength(3)],
      lastName: ['', Validators.required],
      dob: ['', [Validators.required]],
      phoneNumber: ['', [Validators.required]],
    });
    
    if (localStorage.getItem('em_id') ){
      this.id = localStorage.getItem('em_id');
      this.getEmployeeDetails(this.id);   
      localStorage.removeItem('em_id');        
    }else{
      // this.id = this.activatedRoute.snapshot.paramMap.get('id');  
      this.id = localStorage.getItem('id');
      console.log(this.id);  
      this.getEmployeeDetails(this.id); 
      
    }    
  }

  getEmployeeDetails(id:number) {    
    this.authService.getEmpDetails(this.id).subscribe(
      (response) => {
        if (response) {
          this.employee = response;          
        } else {
          this.authService.onLogout().subscribe(() => {});
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
      this.authService.delete(this.id).subscribe(() => {});
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

    this.authService.updateEmpDetails(updatedData, id).subscribe(
      () => {
        this.closeModal();
      },
      (error) => {
        alert(error.message);
      }
    );
  }

  closeModal() {
    const modelDiv = document.getElementById('myModal');
    if (modelDiv != null) {
      modelDiv.style.display = 'none';
    }
  }
  
  refreshPage() {
    window.location.reload();
  }

}
