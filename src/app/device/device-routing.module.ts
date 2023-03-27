import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateDeviceComponent } from './create-device/create-device.component';
import { DeviceDetailComponent } from './device-detail/device-detail.component';

import { DeviceListComponent } from './device-list/device-list.component';
import { FmprofileComponent } from './fmprofile/fmprofile.component';


const deviceRoutes: Routes = [
  // { path: '',redirectTo:'fm-details' ,pathMatch:'full' },
  { path: 'fm-details', component: FmprofileComponent },
  { path:'device-list',component:DeviceListComponent},
  
  { path: 'create-device', component: CreateDeviceComponent },

  { path: 'device-list/:id', component: DeviceDetailComponent },

];

@NgModule({
  imports: [RouterModule.forChild(deviceRoutes)],
  exports: [RouterModule],
})
export class DeviceRouteModule {


}
