import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-our-services',
  standalone: true,
  imports: [MatIconModule, CommonModule, RouterLink],
  templateUrl: './our-services.component.html',
  styleUrl: './our-services.component.css',
})
export class OurServicesComponent {
  showBody1 = false;
  showBody2 = false;
  showBody3 = false;

  @Input() image = '';
  @Input() text = '';


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
