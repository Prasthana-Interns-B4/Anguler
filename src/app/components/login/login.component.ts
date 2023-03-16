import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';

//forms Components
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup | any;
  submitted = false;

constructor(private router:Router,private formBuilder: FormBuilder){}


ngOnInit(){
  this.loginForm = this.formBuilder.group({
    emailAddress:["",[Validators.required,Validators.email,Validators.pattern("^([a-zA-Z_.])+\@([prasthana]{9})+\.([com]{3})+$")]],
    password:["",[Validators.required,Validators.minLength(6)]],
  });
}

get binds(){
  return this.loginForm.controls;
}

onLogin(){
  this.submitted = true;
  if(this.loginForm.invalid){
    return;
  }

  console.table(this.loginForm.value);
  console.log(this.loginForm);

  alert("Login successful\n" + JSON.stringify(this.loginForm.value));

  this.router.navigate(['/emp-details']);
  
  this.loginForm.reset();
  this.submitted = false;
}


  onClickRegister(){
    this.router.navigate(['/signup']);
  }
}
