import { Component } from '@angular/core';
import { CustomButtonComponent } from '../../../general/custom-button/custom-button.component';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-n-about-the-team',
  standalone: true,
  imports: [CustomButtonComponent, MatIconModule, CommonModule],
  templateUrl: './n-about-the-team.component.html',
  styleUrl: './n-about-the-team.component.css',
})
export class NAboutTheTeamComponent {
  customModal = 'Done';
  customtext = 'Load More';
  customStyles = {
    'background-color': '#0282AD1A',
    border: '1px solid #0282AD',
    color: '#0282AD',
  };

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
