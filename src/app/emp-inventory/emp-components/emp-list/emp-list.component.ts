import { Component } from '@angular/core';

//fontawesome icons
import { faWhatsapp, faTwitter, faFacebookF, faInstagramSquare } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-emp-list',
  templateUrl: './emp-list.component.html',
  styleUrls: ['./emp-list.component.css']
})


export class EmpListComponent {

  faWhatsapp = faWhatsapp;
  faTwitter = faTwitter;
  faFacebookF = faFacebookF;
  faInstagramSquare = faInstagramSquare;
  faEnvelope = faEnvelope;

  ngOnInit(): void {
  }
}
