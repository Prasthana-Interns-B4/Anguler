import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmpListComponent } from './emp-components/emp-list/emp-list.component';
import { EmpDetailsComponent } from './emp-components/emp-details/emp-details.component';



@NgModule({
  declarations: [
    EmpListComponent,
    EmpDetailsComponent
  ],
  imports: [
    CommonModule
  ]
})
export class EmpInventoryModule { }
