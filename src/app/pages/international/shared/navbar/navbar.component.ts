import { Component, HostListener, Input } from '@angular/core';
import { CustomButtonComponent } from '../../../../components/general/custom-button/custom-button.component';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CustomButtonComponent, RouterLink, RouterLinkActive],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
 customtext='Contact Us'


 isNavbarFixed = false;

 @HostListener('window:scroll', [])
 onScroll() {
   const scrollPosition = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
   this.isNavbarFixed = scrollPosition > 1; // Adjust the scroll position based on when you want the navbar to be fixed
 }
}
