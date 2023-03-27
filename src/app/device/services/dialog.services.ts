import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AssignEmployeeComponent } from '../assign-employee/assign-employee.component';
import { DialogComponent } from '../dialog/dialog.component';
import { UpdateDeviceComponent } from '../update-device/update-device.component';
@Injectable({
  providedIn: 'root',
})
export class DialogService {
  constructor(private dialog: MatDialog) {}

  openConfirmDialog(msg:string) {
    return this.dialog.open(DialogComponent, {
      width: '390px',
      panelClass: 'confirm-dialog-container',
      disableClose: true,
      position: { top: '80px' },
      data: {msg },
    });

    
  }
  

  openAssignEmpDialog(){
    this.dialog.open(AssignEmployeeComponent,{
        width:'70%',       
        disableClose:true,
        position:{
      top:'100px'}
    })
  }


  openUpdateDevice(device:string){
    return this.dialog.open(UpdateDeviceComponent,{
      width:'30%',
      panelClass: 'confirm-dialog-container',
      disableClose:true,
      data:device 
      
    })
  }
}
