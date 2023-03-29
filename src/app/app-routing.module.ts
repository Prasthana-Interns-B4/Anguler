import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// app - components
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { EmpDetailsComponent } from './components/emp-details/emp-details.component';
import { NotfoundComponent } from './components/notfound/notfound.component';

// Modules Components
import { EmpInventoryComponent } from './emp-inventory/emp-inventory.component';
import { DeviceComponent } from './device/device.component';

// AuthGuard components
import { AuthGuard } from './services/auth.guard';
import { HrGuard } from './services/hr.guard';
import { FmGuard } from './services/fm.guard';

const routes: Routes = [  

  { path:'login',component:LoginComponent, }, 
  { path:'signup',component:SignupComponent },
  { path:'',component:EmpDetailsComponent,  canActivate: [AuthGuard] },  
  { path:'employees/:id/details',component:EmpDetailsComponent,  canActivate: [AuthGuard] },  


  { path: 'employees',component:EmpInventoryComponent, 
  // canActivateChild: [HrGuard,FmGuard],
    loadChildren: () => import('./emp-inventory/emp-inventory.module').then(res => res.EmpInventoryModule)
  },

  { path: 'device',component:DeviceComponent, canActivateChild: [FmGuard], 
    loadChildren: () => import('./device/device.module').then(res => res.DeviceModule)
  },

  { path:'**',component:NotfoundComponent },
  
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
