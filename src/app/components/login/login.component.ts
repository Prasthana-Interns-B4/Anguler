import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

//forms Components
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

//AuthService Components
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup | any;
  submitted = false;
  users: any;

  constructor( private router: Router, private formBuilder: FormBuilder, private authService: AuthService ) {}

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      emp_id: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  get binds() {
    return this.loginForm.controls;
  }

  onLogin() {
    sessionStorage.clear();
    this.submitted = true;
    if (this.loginForm.invalid) {
      return;
    }
    this.users = {
      user: {
        emp_id: this.binds.emp_id.value,
        password: this.binds.password.value,
      },
    };
    const data = this.users; 
    this.authService.onLogin(data).subscribe((response) => {
        if (response) {                              
          const token = response.user.auth_token;  
          const id = response.user.id;
          const role = response.user.role.role;         
          sessionStorage.setItem('token', token);   
          sessionStorage.setItem('role', role);       
          sessionStorage.setItem('id', id);
          this.router.navigate(['/emp-details']);
        } else {
          alert(response.message);
        }
      },
      (error) => {
        alert('login failed');
      }
    );
    this.loginForm.reset();
    this.submitted = false;
  }

  onClickRegister() {
    this.router.navigate(['/signup']);
  }
}
