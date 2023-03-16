import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// app - components
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';

import { DeviceComponent } from './device/device.component';

import { EmpDetailsComponent } from './components/emp-details/emp-details.component';
import { CreateDeviceComponent } from './device/create-device/create-device.component';

// emp - inventory module components
// import { EmpInventoryComponent } from './emp-inventory/emp-inventory.component';
// import { HrDetailsComponent } from './emp-inventory/emp-components/hr-details/hr-details.component';
// import { EmpListComponent } from './emp-inventory/emp-components/emp-list/emp-list.component';


const routes: Routes = [
  { path:'',component:LoginComponent }, { path:'signup',component:SignupComponent },

  { path: 'create-device', component: CreateDeviceComponent},

  { path:'emp-details',component:EmpDetailsComponent },   
  
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
