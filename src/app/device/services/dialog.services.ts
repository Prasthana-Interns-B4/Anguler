import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AssignEmployeeComponent } from '../assign-employee/assign-employee.component';
import { DeviceListComponent } from '../device-list/device-list.component';
import { DialogComponent } from '../dialog/dialog.component';
@Injectable({
  providedIn: 'root',
})
export class DialogService {
  constructor(private dialog: MatDialog) {}

  openConfirmDialog(msg: string) {
    return this.dialog.open(DialogComponent, {
      width: '390px',
      panelClass: 'confirm-dialog-container',
      disableClose: true,
      position: { top: '80px' },
      data: { msg },
    });

    
  }
  

  openAssignEmpDialog(){
    this.dialog.open(AssignEmployeeComponent,{
        width:'800px',
        panelClass: 'assign-employee-component',
        disableClose:true,
        position:{left:'38vw',
      top:'100px'}


    })
  }
}
