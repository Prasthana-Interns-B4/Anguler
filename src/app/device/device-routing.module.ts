import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateDeviceComponent } from './create-device/create-device.component';
import { DeleteDeviceComponent } from './delete-device/delete-device.component';
import { DeviceDetailComponent } from './device-detail/device-detail.component';

import { DeviceListComponent } from './device-list/device-list.component';

import { EditDeviceComponent } from './edit-device/edit-device.component';

const deviceRoutes: Routes = [
  { path: '', redirectTo: 'device-list', pathMatch: 'full' },
  { path: 'create-device', component: CreateDeviceComponent },

  {
    path: 'device-list',
    component: DeviceListComponent,
    // children:[
    //   { path: 'devicelist/:tagNo', component: DeviceDetailComponent },
    //   { path: 'edit/:id', component: EditDeviceComponent },
    //   { path: 'delete/:id', component: DeleteDeviceComponent },

    // ]{path:'emp-list', component: EmpListComponent}, 
  },
];
@NgModule({
  imports: [RouterModule.forChild(deviceRoutes)],
  exports: [RouterModule],
})
export class DeviceRouteModule {}
