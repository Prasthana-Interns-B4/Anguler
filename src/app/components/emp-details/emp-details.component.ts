import { Component } from '@angular/core';

import { Router } from '@angular/router';

//fontawesome icons
import { faWhatsapp, faTwitter,  faFacebookF, faInstagramSquare } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'

@Component({
  selector: 'app-emp-details',
  templateUrl: './emp-details.component.html',
  styleUrls: ['./emp-details.component.css']
})
export class EmpDetailsComponent {

  faWhatsapp = faWhatsapp;
  faTwitter = faTwitter;
  faFacebookF = faFacebookF;
  faInstagramSquare = faInstagramSquare;
  faEnvelope = faEnvelope;

  constructor(private router:Router){}

  viewHrPage(){
    this.router.navigate(['emp-inventory/hr-details']);
  }
}
