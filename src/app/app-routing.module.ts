import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// app - components
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { EmpDetailsComponent } from './components/emp-details/emp-details.component';
import { EmpInventoryComponent } from './emp-inventory/emp-inventory.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { DeviceComponent } from './device/device.component';


const routes: Routes = [
  
  { path:'',component:LoginComponent }, { path:'signup',component:SignupComponent },
  { path:'emp-details',component:EmpDetailsComponent },  
  { path:'device-list',component:DeviceComponent }, 
  { path: 'emp-inventory',component:EmpInventoryComponent,
    loadChildren: () => import('./emp-inventory/emp-inventory.module').then(res => res.EmpInventoryModule)
  },

  { path: 'device',component:DeviceComponent,
    loadChildren: () => import('./device/device.module').then(res => res.DeviceModule)
  },

  { path:'**',component:NotfoundComponent },
  
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
