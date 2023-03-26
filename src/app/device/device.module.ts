import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

//  Device Module component
import { DeviceComponent } from './device.component';
import { DeviceRouteModule } from './device-routing.module';

//  Device Components
import { DeviceListComponent } from './device-list/device-list.component';
import { DeviceDetailComponent } from './device-detail/device-detail.component';
import { CreateDeviceComponent } from './create-device/create-device.component';
import { EditDeviceComponent } from './edit-device/edit-device.component';
import { AssignEmployeeComponent } from './assign-employee/assign-employee.component';
import { DialogComponent } from './dialog/dialog.component';

// forms module
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// fontawesome module
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

// angular material module
import { MatCardModule } from '@angular/material/card';
import { MaterialModule } from './material/material.module';
@NgModule({
  declarations: [
    DeviceComponent,
    DeviceListComponent,
    DeviceDetailComponent,
    CreateDeviceComponent,
    EditDeviceComponent,
    AssignEmployeeComponent,
    DialogComponent,    
  ],
  imports: [
    CommonModule,
    FontAwesomeModule,
    DeviceRouteModule,
    FormsModule,
    ReactiveFormsModule,
    MatCardModule,   
    MaterialModule,
    RouterModule,
  ], 
  entryComponents:[DialogComponent],
  
})
export class DeviceModule {}
