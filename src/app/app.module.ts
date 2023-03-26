import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// App Routing Module
import { AppRoutingModule } from './app-routing.module';

// Http Client Module
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';

// Outer- main Components
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { EmpDetailsComponent } from './components/emp-details/emp-details.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { LeftBarComponent } from './components/left-bar/left-bar.component';
import { NotfoundComponent } from './components/notfound/notfound.component';

// fontawesome module
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

//forms module and reactive forms module
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// AuthInterceptor component
import { AuthInterceptor } from './services/auth.interceptor';

// AuthGuard component
import { AuthGuard } from './services/auth.guard';

// AuthInterceptor component
import { DeviceModule } from './device/device.module';
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
    BrowserAnimationsModule,
    FontAwesomeModule,    
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,    
    AppRoutingModule,
    DeviceModule,
    BrowserAnimationsModule,
    AppRoutingModule    
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor,
    multi: true
  },AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
