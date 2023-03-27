import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// components
import { FmprofileComponent } from './fmprofile/fmprofile.component';
import { CreateDeviceComponent } from './create-device/create-device.component';
import { DeviceListComponent } from './device-list/device-list.component';
import { DeviceDetailComponent } from './device-detail/device-detail.component';

const routes: Routes = [
  { path: 'fm-details', component: FmprofileComponent },
  { path: 'add-device', component: CreateDeviceComponent },
  { path: 'device-list', component: DeviceListComponent },      
  { path: 'device-details', component: DeviceDetailComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})

export class DeviceRouteModule {}
