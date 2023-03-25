import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateDeviceComponent } from './create-device/create-device.component';
import { DeviceDetailComponent } from './device-detail/device-detail.component';

import { DeviceListComponent } from './device-list/device-list.component';
import { DeviceComponent } from './device.component';

import { FmprofileComponent } from './fmprofile/fmprofile.component';

const deviceRoutes: Routes = [
  { path: '', component: DeviceListComponent },//canActivate:[FMGuard]
  
  { path: 'create-device', component: CreateDeviceComponent },//canActivate:[FMGuard]

  { path: ':id', component: DeviceDetailComponent },//canActivate:[FMGuard]
];

@NgModule({
  imports: [RouterModule.forChild(deviceRoutes)],
  exports: [RouterModule],
})
export class DeviceRouteModule {}
