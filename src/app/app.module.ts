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

<<<<<<< HEAD
// Inner modules
import { EmpInventoryModule } from './emp-inventory/emp-inventory.module';
=======

>>>>>>> 5cc2cd15cea4ba5687cc1d6ec723a840771eebe2
//forms module and reactive forms module
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// fontawesome module
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';


<<<<<<< HEAD
// modules

import { DeviceModule } from './device/device.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';



=======
>>>>>>> 5cc2cd15cea4ba5687cc1d6ec723a840771eebe2
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
<<<<<<< HEAD

  
  ],
=======
    EmpDetailsComponent,
    HeaderComponent,
    FooterComponent,
    LeftBarComponent,
    NotfoundComponent,    
  ],  
>>>>>>> 5cc2cd15cea4ba5687cc1d6ec723a840771eebe2
  imports: [
    BrowserModule,    
    FontAwesomeModule,
    FormsModule,
    ReactiveFormsModule,
<<<<<<< HEAD
    EmpInventoryModule,
    EmpInventoryModule,
    DeviceModule,
    BrowserAnimationsModule
=======
    AppRoutingModule,
>>>>>>> 5cc2cd15cea4ba5687cc1d6ec723a840771eebe2
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
