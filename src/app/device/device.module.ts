import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DeviceListComponent } from './device-list/device-list.component';
import { DeviceDetailComponent } from './device-detail/device-detail.component';
import { DeviceComponent } from './device.component';
import { DeviceRouteModule } from './device-routing.module';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CreateDeviceComponent } from './create-device/create-device.component';
import { ViewDeviceComponent } from './view-device/view-device.component';
import { DeleteDeviceComponent } from './delete-device/delete-device.component';
import { EditDeviceComponent } from './edit-device/edit-device.component';
import { HttpClientModule } from '@angular/common/http';
import { DeviceCardComponent } from './device-card/device-card/device-card.component';
import { MatCardModule } from '@angular/material/card';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FilterPipe } from './device-list/filter pipe/filter.pipe';
@NgModule({
  declarations: [
    DeviceComponent,
    DeviceComponent,
    DeviceListComponent,
    DeviceDetailComponent,
    CreateDeviceComponent,
    ViewDeviceComponent,
    DeleteDeviceComponent,
    EditDeviceComponent,
    DeviceCardComponent,
    PageNotFoundComponent,
    FilterPipe,
  ],
  imports: [
    CommonModule,
    MatCardModule,
    DeviceRouteModule,
    MatToolbarModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatButtonModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    FontAwesomeModule,
  ],
  exports: [
    DeviceComponent,
    DeviceComponent,
    DeviceListComponent,
    DeviceDetailComponent,
  ],
})
export class DeviceModule {}
