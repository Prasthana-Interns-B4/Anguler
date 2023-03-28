import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import {
  faAngleRight,
  faMagnifyingGlass,
  faTrashCan,
} from '@fortawesome/free-solid-svg-icons';
import { AssignService } from '../services/assign.service';
import { DataService } from '../services/data.service';
import { DialogService } from '../services/dialog.services';
import { Location } from '@angular/common';
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
    private as: AssignService,
    private dataService: DataService,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.getdevices();
  }

  faMagnifyingGlass = faMagnifyingGlass;

  faAngleRight = faAngleRight;
  faTrashCan = faTrashCan;
  selected: any;
  searchInput: any;
  filtered: any;
  filteredDevices: any;
  devicesToDisplay: any;

  listDevices: any;
  devices: any[] = [];

  public searchObject: any;
  public deviceList: Array<any> = [];

  searchText: string = '';

  getdevices() {
    this.ds.getDevices().subscribe({
      next: (res) => {
        this.listDevices = res;
        this.devices = this.listDevices.devices;
      },
      error: (err) => {
        alert('error while fetching');
        alert(err);
      },
    });
  }

  searchDevices(searchInput: any) {
    this.dataService.search(this.searchInput).subscribe((response) => {
      this.filtered = response;
      this.filteredDevices = this.filtered.devices;
      this.devices = this.filteredDevices;
      console.log(this.devicesToDisplay);
    });
  }

  deletedevice(id: number) {
    this.dialogService
      .openConfirmDialog('Are you sure want to delete this device?')
      .afterClosed()
      .subscribe({
        next: (_res) => {
          console.log(_res);
          if (_res) {
            this.ds.deleteDevice(id).subscribe({
              next: (res) => {
                
                this.getdevices();
              },
              error: () => {
                alert('error while deleting');
              },
            });
          }
        },
      });
  }
  navigateToDetail(id: number) {
    console.log(id);
    this.router.navigate([id], { relativeTo: this.activatedRoute });
  }

  assignDevice(id: any) {
    localStorage.setItem('device_id', id);
    this.dialogService.openAssignEmpDialog().afterClosed().subscribe(res=>{
      if(res){this.getdevices();}
     
    });
  }

  unAssignDevice(id: any) {
    const data = {
      device: {
        user_id: null,
      },
    };
    this.dataService.unAssignDevice(data, id).subscribe(() => {
      this.getdevices();
      
    });
  }

  refreshPage() {
    window.location.reload();
  }
}
