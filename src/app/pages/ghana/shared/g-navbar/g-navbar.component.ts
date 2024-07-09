import { Component } from '@angular/core';
import { CustomButtonComponent } from '../../../../components/general/custom-button/custom-button.component';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-g-navbar',
  standalone: true,
  imports: [CustomButtonComponent, RouterLink, RouterLinkActive],
  templateUrl: './g-navbar.component.html',
  styleUrl: './g-navbar.component.css'
})
export class GNavbarComponent { 
  customtext='Contact Us'

}
