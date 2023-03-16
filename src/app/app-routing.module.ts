import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// app - components
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';

import { DeviceComponent } from './device/device.component';

import { EmpDetailsComponent } from './components/emp-details/emp-details.component';
<<<<<<< HEAD
import { CreateDeviceComponent } from './device/create-device/create-device.component';

// emp - inventory module components
// import { EmpInventoryComponent } from './emp-inventory/emp-inventory.component';
// import { HrDetailsComponent } from './emp-inventory/emp-components/hr-details/hr-details.component';
// import { EmpListComponent } from './emp-inventory/emp-components/emp-list/emp-list.component';
=======
import { EmpInventoryComponent } from './emp-inventory/emp-inventory.component';
import { DeviceInventoryComponent } from './device-inventory/device-inventory.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
>>>>>>> 5cc2cd15cea4ba5687cc1d6ec723a840771eebe2


const routes: Routes = [
  
  { path:'',component:LoginComponent }, { path:'signup',component:SignupComponent },
<<<<<<< HEAD

  { path: 'create-device', component: CreateDeviceComponent},

  { path:'emp-details',component:EmpDetailsComponent },   
  
]

=======
  { path:'emp-details',component:EmpDetailsComponent },  

  { path: 'emp-inventory',component:EmpInventoryComponent,
    loadChildren: () => import('./emp-inventory/emp-inventory.module').then(res => res.EmpInventoryModule)
  },

  { path: 'device-inventory',component:DeviceInventoryComponent,
    loadChildren: () => import('./device-inventory/device-inventory.module').then(res => res.DeviceInventoryModule)
  },

  { path:'**',component:NotfoundComponent },
  
];
>>>>>>> 5cc2cd15cea4ba5687cc1d6ec723a840771eebe2
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
