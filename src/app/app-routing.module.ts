import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// app - components
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
<<<<<<< HEAD
import { DeviceComponent } from './device/device.component';
=======
import { EmpDetailsComponent } from './components/emp-details/emp-details.component';

// emp - inventory module components
// import { EmpInventoryComponent } from './emp-inventory/emp-inventory.component';
// import { HrDetailsComponent } from './emp-inventory/emp-components/hr-details/hr-details.component';
// import { EmpListComponent } from './emp-inventory/emp-components/emp-list/emp-list.component';
>>>>>>> f951761691582136fa02b84adebc14b5b432a6a1


const routes: Routes = [
  { path:'',component:LoginComponent }, { path:'signup',component:SignupComponent },
<<<<<<< HEAD
  { path: 'device-component', component: DeviceComponent }
=======
  { path:'emp-details',component:EmpDetailsComponent },   
  
>>>>>>> f951761691582136fa02b84adebc14b5b432a6a1
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
