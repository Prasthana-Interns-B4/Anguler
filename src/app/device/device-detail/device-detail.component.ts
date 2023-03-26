import { Component } from '@angular/core';
import { faPen ,faTrash,faEdit} from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-device-detail',
  templateUrl: './device-detail.component.html',
  styleUrls: ['./device-detail.component.css'],
})
export class DeviceDetailComponent {
openModal: any;
  constructor() {}
  ngOnInit() {}


faEdit=faEdit;
faTrash=faTrash;

}