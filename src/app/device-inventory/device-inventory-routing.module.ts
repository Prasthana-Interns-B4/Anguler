import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DeviceDetailsComponent } from './device-components/device-details/device-details.component';
import { DeviceListComponent } from './device-components/device-list/device-list.component';


const routes: Routes = [

  {path:'device-details', component: DeviceDetailsComponent}, 
  {path:'device-list',component: DeviceListComponent },
    
  ];

  @NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
export class DeviceInventoryRoutingModule { }
