import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// components
import { EmpViewComponent } from './emp-components/emp-view/emp-view.component';
import { HrDetailsComponent } from './emp-components/hr-details/hr-details.component';
import { EmpListComponent } from './emp-components/emp-list/emp-list.component';
import { AddEmployeeComponent } from './emp-components/add-employee/add-employee.component';
import { PendingRequestsComponent } from './emp-components/pending-requests/pending-requests.component';

const routes: Routes = [
  { path: 'emp-list', component: EmpListComponent },
  { path: 'hr-details', component: HrDetailsComponent },
  { path: 'emp-details/:', component: EmpViewComponent },
  { path: 'pending-requests', component: PendingRequestsComponent },
  { path: 'add-emp', component: AddEmployeeComponent },
];

  @NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })

  export class EmpInventoryRoutingModule {}
