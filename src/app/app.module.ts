import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// App Routing Module
import { AppRoutingModule } from './app-routing.module';


// Outer- main Components 
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { EmpDetailsComponent } from './components/emp-details/emp-details.component';

// Inner modules
import { EmpInventoryModule } from './emp-inventory/emp-inventory.module';
//forms module and reactive forms module
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// fontawesome module
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';


// modules

import { DeviceModule } from './device/device.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,

  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    FormsModule,
    ReactiveFormsModule,
    EmpInventoryModule,
    EmpInventoryModule,
    DeviceModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
