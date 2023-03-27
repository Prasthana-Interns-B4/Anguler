import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateDeviceComponent } from './create-device/create-device.component';
import { DeviceDetailComponent } from './device-detail/device-detail.component';

import { DeviceListComponent } from './device-list/device-list.component';


const deviceRoutes: Routes = [
  { path: '',redirectTo:'devicelist' ,pathMatch:'full' },
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
