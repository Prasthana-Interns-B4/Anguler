import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {
  faWhatsapp,
  faTwitter,
  faFacebookF,
  faInstagramSquare,
} from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-device',
  templateUrl: './device.component.html',
  styleUrls: ['./device.component.css'],
})
export class DeviceComponent implements OnInit {
  title = 'devicecompo';
  faWhatsapp = faWhatsapp;
  faTwitter = faTwitter;
  faFacebookF = faFacebookF;
  faInstagramSquare = faInstagramSquare;
  showFiller = false;

  constructor(private route: Router, private router: ActivatedRoute) {}
  ngOnInit(): void {}

  navigateCreate() {
    this.route.navigate(['create-device'], { relativeTo: this.router });
  }
  
  navigateDevicelist() {
    this.route.navigate(['device']);
  }
}
