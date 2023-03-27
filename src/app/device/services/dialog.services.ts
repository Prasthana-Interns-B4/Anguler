import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { EmpListComponent } from 'src/app/emp-inventory/emp-components/emp-list/emp-list.component';
import { CreateDeviceComponent } from '../create-device/create-device.component';
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
    this.dialog.open(EmpListComponent,{
        width:'800px',
        panelClass: 'assign-employee-component',
        disableClose:true,
        position:{left:'38vw',
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
