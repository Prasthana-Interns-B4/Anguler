import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DeviceListComponent } from './device-list/device-list.component';
import { DeviceDetailComponent } from './device-detail/device-detail.component';
import { DeviceComponent } from './device.component';
import { DeviceRouteModule } from './device-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CreateDeviceComponent } from './create-device/create-device.component';
import { HttpClientModule } from '@angular/common/http';
import { MatCardModule } from '@angular/material/card';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { RouterModule } from '@angular/router';
import { MaterialModule } from './material/material.module';
import { DialogComponent } from './dialog/dialog.component';
import { SearchComponent } from './search/search.component';
import { EmpInventoryModule } from '../emp-inventory/emp-inventory.module';

@NgModule({
  declarations: [
    DeviceComponent,
    DeviceListComponent,
    DeviceDetailComponent,
    CreateDeviceComponent,
    DialogComponent,
    SearchComponent,
    
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
    MaterialModule,
    EmpInventoryModule,
    
    
  ],
  exports: [DeviceComponent, DeviceListComponent, DeviceDetailComponent],
  entryComponents: [DialogComponent],
})
export class DeviceModule {}
