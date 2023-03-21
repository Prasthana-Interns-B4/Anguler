import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DeviceListComponent } from './device-list/device-list.component';
import { DeviceDetailComponent } from './device-detail/device-detail.component';
import { DeviceComponent } from './device.component';
import { DeviceRouteModule } from './device-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CreateDeviceComponent } from './create-device/create-device.component';
import { EditDeviceComponent } from './edit-device/edit-device.component';
import { HttpClientModule } from '@angular/common/http';
import { MatCardModule } from '@angular/material/card';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { RouterModule } from '@angular/router';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { MaterialModule } from './material/material.module';
import { FmprofileComponent } from './fmprofile/fmprofile.component';
import { DialogComponent } from './dialog/dialog.component';
import { AssignEmployeeComponent } from './assign-employee/assign-employee.component';

@NgModule({
  declarations: [
    DeviceComponent,
    DeviceListComponent,
    DeviceDetailComponent,
    CreateDeviceComponent,
    EditDeviceComponent,
    FmprofileComponent,
    DialogComponent,
    AssignEmployeeComponent,
  ],
  imports: [
    CommonModule,
    MatCardModule,
    DeviceRouteModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    FontAwesomeModule,
    RouterModule,
    DeviceRouteModule,
    Ng2SearchPipeModule,
    MaterialModule,
  ],
  exports: [DeviceComponent, DeviceListComponent, DeviceDetailComponent],
  entryComponents:[DialogComponent]
})
export class DeviceModule {}
