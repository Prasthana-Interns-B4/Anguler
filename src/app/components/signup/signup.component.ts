import { Component, OnInit } from '@angular/core';


// fontawesome icons
import { faWhatsapp, faTwitter,  faFacebookF, faInstagramSquare} from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'

// forms Components
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

// passwordCheckerComponent
import {PasswordChecker} from './customValidators/passwordChecker'

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit  {
  faWhatsapp = faWhatsapp
  faTwitter = faTwitter;
  faFacebookF = faFacebookF;
  faInstagramSquare = faInstagramSquare;
  faEnvelope = faEnvelope;

  signUpForm: FormGroup | any;
  submitted = false 
  constructor(private formBuilder: FormBuilder){}

  ngOnInit(){
    this.signUpForm = this.formBuilder.group({
      firstName:["",[Validators.required,Validators.minLength(3)]],
      lastName:["",[Validators.required,Validators.minLength(2)]],
      designation:["",Validators.required],
      phoneNumber:["",Validators.required],
      emailAddress:["",[Validators.required,Validators.email,Validators.pattern("^([a-zA-Z_.])+\@([prasthana]{9})+\.([com]{3})+$")]],
      password:["",[Validators.required,Validators.minLength(6)]],
      confirmPassword:["",Validators.required],
      birthDate: [Date,[Validators.required, this.validateAge]],      
    },{
        validators: PasswordChecker("password","confirmPassword"),         
    });
  }

  validateAge = (control:any) => {
    console.log(control)
    const currentDate = new Date();
    const selectedDate = new Date(control.value);
    const age = currentDate.getFullYear() - selectedDate.getFullYear();
    console.log(age)
    return age >= 18 ? null : { ageInvalid: true };
  }

  get binds(){    
    return this.signUpForm.controls;
  }

  onSubmit(){
    this.submitted = true;
    if(this.signUpForm.invalid){
      return;
    }

    console.table(this.signUpForm.value);
    console.log(this.signUpForm);

    alert("Signup successful\n" + JSON.stringify(this.signUpForm.value));

    this.signUpForm.reset();
    this.submitted = false;
  }

  // onReset(){
  //   this.submitted = false;
  //   this.signUpForm.reset();
  // }
}
