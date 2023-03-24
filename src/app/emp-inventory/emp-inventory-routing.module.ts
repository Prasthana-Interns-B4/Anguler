import { EmpViewComponent } from './emp-components/emp-view/emp-view.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { HrDetailsComponent } from './emp-components/hr-details/hr-details.component';
import { EmpListComponent } from './emp-components/emp-list/emp-list.component';


const routes: Routes = [
  { path: 'emp-list', component: EmpListComponent },
  { path: 'hr-details', component: HrDetailsComponent },
  { path: 'emp-details/:', component: EmpViewComponent },
];

  @NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })

  export class EmpInventoryRoutingModule { }
