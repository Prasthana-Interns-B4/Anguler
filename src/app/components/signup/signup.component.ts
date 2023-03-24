import { Component, OnInit } from '@angular/core';

// forms Components
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

// passwordCheckerComponent
import {PasswordChecker} from './customValidators/passwordChecker'

// Auth Service Component
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})

export class SignupComponent implements OnInit  {

  signUpForm: FormGroup | any;
  submitted = false 

  users: any;

  constructor(private formBuilder: FormBuilder, private authService: AuthService, private router:Router){}

  ngOnInit(){
    this.signUpForm = this.formBuilder.group({
      first_name:["",[Validators.required,Validators.minLength(3)]],
      last_name:["",[Validators.required,Validators.minLength(2)]],
      designation:["",Validators.required],
      phone_number:["",Validators.required],
      email:["",[Validators.required,Validators.email,Validators.pattern("^([a-zA-Z_.])+\@([prasthana]{9})+\.([com]{3})+$")]],
      password:["",[Validators.required,Validators.minLength(6)]],
      confirm_password:["",Validators.required],
      date_of_birth: [Date,[Validators.required, this.validateAge]],
      role : 'employee',
    },{
        validators: PasswordChecker("password","confirm_password"),         
    });
    
  }

  validateAge = (control:any) => {    
    const currentDate = new Date();
    const selectedDate = new Date(control.value);
    const age = currentDate.getTime() - selectedDate.getTime();
    const difference = age / (1000 * 60 * 60 * 24);   

    if (difference >= 6570 ){
      return null
    }else if (difference <= 0){
      return { futureAge: true }
    }else{
      return { ageInvalid: true };
    }
    
  }

  get binds(){    
    return this.signUpForm.controls;
  }

  onSubmit(){
    this.submitted = true;
    if(this.signUpForm.invalid){
      return;
    }

    this.users = { 
      user : {
      email : this.binds.email.value,
      password : this.binds.password.value,  
      user_detail_attributes : {
        first_name : this.binds.first_name.value,
        last_name : this.binds.last_name.value,
        designation : this.binds.designation.value,
        phone_number : this.binds.phone_number.value,
        date_of_birth : this.binds.date_of_birth.value,
      },
      role_attributes : {
        role : this.signUpForm.value.role,
      }
    }
  }
    
    const data = this.users;     
    this.authService.onSignup(data).subscribe(response => {
      if (response){
        alert(response.message);
        this.router.navigate(['']);
      }else{
        alert(response.message);
      }
      
    }, error => { 
      alert(error.message);
    });

    this.signUpForm.reset();
    this.submitted = false;
  }

}
