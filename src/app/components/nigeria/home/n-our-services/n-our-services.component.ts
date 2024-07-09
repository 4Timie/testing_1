import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-n-our-services',
  standalone: true,
  imports: [MatIconModule, CommonModule, RouterLink],
  templateUrl: './n-our-services.component.html',
  styleUrl: './n-our-services.component.css'
})
export class NOurServicesComponent {
  showBody1 = false;
  showBody2 = false;
  showBody3 = false;

  toggle1() {
    this.showBody1 = !this.showBody1;
  }

  toggle2() {
    this.showBody2 = !this.showBody2;
  }

  toggle3() {
    this.showBody3 = !this.showBody3;
  }
}
