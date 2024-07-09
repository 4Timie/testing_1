import { Component, Input } from '@angular/core';
import { CustomButtonComponent } from '../../../general/custom-button/custom-button.component';
import { RouterLink } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-the-team',
  standalone: true,
  imports: [CustomButtonComponent, RouterLink, MatIconModule, CommonModule],
  templateUrl: './the-team.component.html',
  styleUrl: './the-team.component.css',
})
export class TheTeamComponent {
  customtext = 'Learn more about us';
  customModal = 'Done';

  isOpen = false;
  isChange = true;
  activeColorOpacity = '0.3';

  openModal() {
    this.isOpen = !this.isOpen;
    document.body.style.overflow = 'hidden'; // Disable scrolling in the background

  }

  close() {
    this.isOpen = !this.isOpen;
    document.body.style.overflow = ''; // Enable scrolling in the background

  }

  closeModal(event: Event) {
    // Check if the target is the overlay and not the content
    if (event.target === event.currentTarget) {
      this.isOpen = !this.isOpen;
      document.body.style.overflow = ''; // Enable scrolling in the background

    }
  }

  next() {
    this.isChange = !this.isChange;
  }
}
