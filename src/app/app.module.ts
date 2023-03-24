import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

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

//forms module and reactive forms module
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// fontawesome module
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

// AuthInterceptor component
import { AuthInterceptor } from './services/auth.interceptor';


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
    HttpClientModule,
    ReactiveFormsModule,    
    AppRoutingModule,
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
