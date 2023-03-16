import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// App Routing Module
import { AppRoutingModule } from './app-routing.module';


// Outer- main Components 
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { EmpDetailsComponent } from './components/emp-details/emp-details.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { LeftBarComponent } from './components/left-bar/left-bar.component';
import { NotfoundComponent } from './components/notfound/notfound.component';


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
    EmpDetailsComponent,
    HeaderComponent,
    FooterComponent,
    LeftBarComponent,
    NotfoundComponent,    
  ],  

  imports: [
    BrowserModule,    
    FontAwesomeModule,
    FormsModule,
    ReactiveFormsModule,

    EmpInventoryModule,
    EmpInventoryModule,
    DeviceModule,
    BrowserAnimationsModule,

    AppRoutingModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
