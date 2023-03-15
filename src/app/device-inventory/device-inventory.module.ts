import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DeviceListComponent } from './device-components/device-list/device-list.component';
import { DeviceDetailsComponent } from './device-components/device-details/device-details.component';

import { DeviceInventoryComponent } from './device-inventory.component';

import { DeviceInventoryRoutingModule } from './device-inventory-routing.module';


@NgModule({
  declarations: [
    DeviceListComponent,
    DeviceDetailsComponent,
    DeviceInventoryComponent
  ],
  imports: [
    CommonModule,
    DeviceInventoryRoutingModule
  ]
})
export class DeviceInventoryModule { }
