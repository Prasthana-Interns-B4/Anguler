import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-update-device',
  templateUrl: './update-device.component.html',
  styleUrls: ['./update-device.component.css']
})
export class UpdateDeviceComponent implements OnInit{
  constructor(private fb: FormBuilder, private ds: DataService,@Inject(MAT_DIALOG_DATA) public editData:any, public dialogRef:MatDialogRef<UpdateDeviceComponent>) {}
updateDeviceForm!:FormGroup;

ifnotnull=this.editData.os!=="";
  ngOnInit(){

   this.updateDeviceForm = this.fb.group({
      name: ['', [Validators.required]],
      device_type: ['', Validators.required],
      os: ['', ],
      category: ['', Validators.required],
    });
console.log(this.editData.os)

if(this.editData){
  this.updateDeviceForm.controls['name'].setValue(this.editData.name);
  this.updateDeviceForm.controls['device_type'].setValue(this.editData.device_type);
  this.updateDeviceForm.controls['os'].setValue(this.editData.os);
  this.updateDeviceForm.controls['category'].setValue(this.editData.category);

}
}
 
  onSubmit(){
  this.ds.putDevice(this.editData.id,this.updateDeviceForm.value).subscribe({
    next:(res)=>{alert('updated Successfully');
    this.updateDeviceForm.reset()
    this.closeDialog();
  },
  error:()=>{alert('error while editing the data')}})
  }

  closeDialog() {
    this.dialogRef.close(false); 
      }
}
