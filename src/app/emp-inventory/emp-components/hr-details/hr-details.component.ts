import { Component } from '@angular/core';
import { Router } from '@angular/router';

//fontawesome icons
import { faWhatsapp, faTwitter,  faFacebookF, faInstagramSquare } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'

@Component({
  selector: 'app-hr-details',
  templateUrl: './hr-details.component.html',
  styleUrls: ['./hr-details.component.css']
})
export class HrDetailsComponent {
  
  faWhatsapp = faWhatsapp;
  faTwitter = faTwitter;
  faFacebookF = faFacebookF;
  faInstagramSquare = faInstagramSquare;
  faEnvelope = faEnvelope;
  
  constructor( private router:Router){}

  viewEmployees(){       
    this.router.navigate(['emp-inventory/emp-list']);
  }
}
