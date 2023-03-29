import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// components
import { EmpListComponent } from './emp-components/emp-list/emp-list.component';
import { AddEmployeeComponent } from './emp-components/add-employee/add-employee.component';
import { PendingRequestsComponent } from './emp-components/pending-requests/pending-requests.component';

const routes: Routes = [
  { path: 'list', component: EmpListComponent },
  { path: 'pending-requests', component: PendingRequestsComponent },
  { path: 'add-employee', component: AddEmployeeComponent },
];

  @NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })

  export class EmpInventoryRoutingModule {}
