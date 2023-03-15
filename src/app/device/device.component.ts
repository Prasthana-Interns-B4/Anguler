import {
  AfterContentChecked,
  AfterViewInit,
  Component,
  ElementRef,
  ViewChild,
} from '@angular/core';
import { faWhatsapp, faTwitter,  faFacebookF, faInstagramSquare } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-device',
  templateUrl: './device.component.html',
  styleUrls: ['./device.component.css'],
})
export class DeviceComponent {
  title = 'devicecompo';
  faWhatsapp = faWhatsapp;
  faTwitter = faTwitter;
  faFacebookF = faFacebookF;
  faInstagramSquare = faInstagramSquare;

  
}
