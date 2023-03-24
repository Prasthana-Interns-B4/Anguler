import { Component,OnInit } from '@angular/core';
import {
 
  faUsers,
  faPowerOff,
  faUser,
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-emp-inventory',
  templateUrl: './emp-inventory.component.html',
  styleUrls: ['./emp-inventory.component.css'],
})
export class EmpInventoryComponent implements OnInit {
  faUsers = faUsers;
  faUser = faUser;
  faPowerOff = faPowerOff;

  ngOnInit(): void {}
}
