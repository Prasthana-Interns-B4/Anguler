import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateDeviceComponent } from './create-device/create-device.component';
import { DeleteDeviceComponent } from './delete-device/delete-device.component';
import { DeviceDetailComponent } from './device-detail/device-detail.component';

import { DeviceListComponent } from './device-list/device-list.component';

import { EditDeviceComponent } from './edit-device/edit-device.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ViewDeviceComponent } from './view-device/view-device.component';

const deviceRoutes: Routes = [
  { path: '', redirectTo: '/profile', pathMatch: 'full' },
  { path: 'create', component: CreateDeviceComponent },
  
  { path: 'devicelist', component: DeviceListComponent,
  children:[
    { path: 'view/:id', component: ViewDeviceComponent },
    { path: 'edit/:id', component: EditDeviceComponent },
    { path: 'delete/:id', component: DeleteDeviceComponent },
    { path: 'devicedetail', component: DeviceDetailComponent},
  ] },
  
  
  
  {path:'**',component:PageNotFoundComponent}
];
@NgModule({
  imports: [RouterModule.forChild(deviceRoutes)],
  exports: [RouterModule],
})
export class DeviceRouteModule {}
