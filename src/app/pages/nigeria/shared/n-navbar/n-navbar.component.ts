import { Component } from '@angular/core';
import { CustomButtonComponent } from '../../../../components/general/custom-button/custom-button.component';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-n-navbar',
  standalone: true,
  imports: [CustomButtonComponent, RouterLink, RouterLinkActive],
  templateUrl: './n-navbar.component.html',
  styleUrl: './n-navbar.component.css'
})
export class NNavbarComponent {
  customtext='Contact Us'

}
