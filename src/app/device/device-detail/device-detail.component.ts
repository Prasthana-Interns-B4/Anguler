import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { faTrash, faEdit } from '@fortawesome/free-solid-svg-icons';
import { DataService } from '../services/data.service';
import { DialogService } from '../services/dialog.services';

@Component({
  selector: 'app-device-detail',
  templateUrl: './device-detail.component.html',
  styleUrls: ['./device-detail.component.css'],
})
export class DeviceDetailComponent implements OnInit {
  openModal: any;
  ifEmployee: string = 'No Employee Assigned';
  constructor(
    private activatedRoute: ActivatedRoute,
    private ds: DataService,
    private dialogService: DialogService,
    private route: Router
  ) {}

  id!: any;
  device!: any;
  ngOnInit() {
    this.id = this.activatedRoute.snapshot.paramMap.get('id');

    this.getDeviceDetail();
  }

  faEdit = faEdit;
  faTrash = faTrash;

  getDeviceDetail() {
    this.ds.getDeviceDetails(this.id).subscribe({
      next: (res) => {
        this.device = res.device;
        console.log(res);
      },
      error: () => {
        alert('error');
      },
    });
  }

  openUpdateDevice(device: string) {
    const dialog = this.dialogService
      .openUpdateDevice(device)
      .afterClosed()
      .subscribe({
        next: (res) => {
          console.log(res);
          if (res) {
            this.ds.updateDevice(res).subscribe({
              next: (res: any) => {
                if (res && res?.device) this.device = res?.device;
              },
              error: () => {
                alert('error');
              },
            });
          }
        },
      });
  }

  deletedevice(id: number) {
    this.dialogService
      .openConfirmDialog('Are you sure want to delete this device?')
      .afterClosed()
      .subscribe({
        next: (_res) => {
          if (_res) {
            this.ds.deleteDevice(id)
            .subscribe({
              next: (res) => {
                console.log(res);
                this.route.navigate(['device/device-list']);
              },
              error: (err) => {
                console.log(err);
              },
            });
          }
        },
      });
  }

  unAssignDevice(id: any) {
    const data = {
      device: {
        user_id: null,
      },
    };
    this.ds.unAssignDevice(data, id).subscribe((res) => {
      this.getDeviceDetail()
      
    });
  }
}
