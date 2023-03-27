import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { faAngleRight,faMagnifyingGlass,faTrashCan } from '@fortawesome/free-solid-svg-icons';
import { AssignService } from '../services/assign.service';
import { DataService } from '../services/data.service';
import { DialogService } from '../services/dialog.services';
@Component({
  selector: 'app-device-list',
  templateUrl: './device-list.component.html',
  styleUrls: ['./device-list.component.css'],
})
export class DeviceListComponent implements OnInit {

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private ds: DataService,
    private dialogService: DialogService,
    private as:AssignService
  ) {}
  ngOnInit(): void {
    this.getdevices();
    
   
  }
  faMagnifyingGlass= faMagnifyingGlass;

  faAngleRight= faAngleRight;
  faTrashCan = faTrashCan;
  selected: any;
  
  listDevices:any;
  devices:any[]=[];

  public searchObject:any;
  public deviceList:Array<any>=[];
  
  searchText: string='';

  getdevices() {
    this.ds.getDevices().subscribe({
      next: (res) => {
        this.listDevices = res;
        this.devices=this.listDevices.devices
      },
      error: (err) => {
        alert('error while fetching');
      },
    });
  }
  deletedevice(id: number) {
   
    this.dialogService
      .openConfirmDialog('Are you sure want to delete this device?')
      .afterClosed()
      .subscribe({
        next: (_res) => {
          if(_res){this.ds.deleteDevice(id)
            .subscribe({
            next:(res)=>{alert("Deleted Successfully!")
            this.getdevices();
            },
          error: () => {
                alert('error while deleting');
             },
        })      
            }
          },     
      });
    
  }
  navigateToDetail(id:number) {
    console.log(id);
    this.router.navigate([id], { relativeTo: this.activatedRoute });
  }

  assignDevice() {
    this.dialogService.openAssignEmpDialog() 
  // assignDevice(device: any, empname: any) {
  //   this.ds.editdevice(device, empname);
    }
  onSearchTextEntered(searchValue:string){
    this.searchText=searchValue;
    console.log(this.searchText)
    
  }

  /*serach*/


searchProduct(query:KeyboardEvent){

}

submitSearch(val:string){
  console.warn(val)
    this.router.navigate([`search/${val}`],{relativeTo:this.activatedRoute})
}

// unAssign(id :number){
//   this.as.Unassignservice
// }
  
}

