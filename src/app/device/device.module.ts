import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//  Device Module component
import { DeviceComponent } from './device.component';
import { DeviceRouteModule } from './device-routing.module';

//  Device Components
import { DeviceListComponent } from './device-list/device-list.component';
import { DeviceDetailComponent } from './device-detail/device-detail.component';
import { CreateDeviceComponent } from './create-device/create-device.component';

import { EmpInventoryModule } from '../emp-inventory/emp-inventory.module';
import { DialogComponent } from './dialog/dialog.component';
import { UpdateDeviceComponent } from './update-device/update-device.component';

// fontawesome module
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

// angular material module
import { MatCardModule } from '@angular/material/card';
import { MaterialModule } from './material/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AssignEmployeeComponent } from './assign-employee/assign-employee.component';
@NgModule({
  declarations: [
    DeviceComponent,
    DeviceListComponent,
    DeviceDetailComponent,
    CreateDeviceComponent,
    DialogComponent,
    UpdateDeviceComponent,
    AssignEmployeeComponent,
    
  ],
  imports: [
    CommonModule,
    FontAwesomeModule,
    DeviceRouteModule,
    FormsModule,
    ReactiveFormsModule,
    MatCardModule,   
    MaterialModule,
    EmpInventoryModule
  ],
  exports: [DeviceComponent, DeviceListComponent, DeviceDetailComponent],
  entryComponents: [DialogComponent],
    
 
  
})
export class DeviceModule {}
