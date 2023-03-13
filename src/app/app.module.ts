import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DeviceDetailComponent } from './device/device-detail/device-detail.component';
import { DeviceListComponent } from './device/device-list/device-list.component';

@NgModule({
  declarations: [AppComponent, DeviceDetailComponent, DeviceListComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
