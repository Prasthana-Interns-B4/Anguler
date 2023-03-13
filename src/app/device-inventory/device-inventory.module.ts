import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DeviceListComponent } from './device-components/device-list/device-list.component';
import { DeviceDetailsComponent } from './device-components/device-details/device-details.component';



@NgModule({
  declarations: [
    DeviceListComponent,
    DeviceDetailsComponent
  ],
  imports: [
    CommonModule
  ]
})
export class DeviceInventoryModule { }
