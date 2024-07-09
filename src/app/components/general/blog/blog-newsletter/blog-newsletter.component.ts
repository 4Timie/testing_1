import { Component } from '@angular/core';
import { CustomButtonComponent } from '../../custom-button/custom-button.component';

@Component({
  selector: 'app-blog-newsletter',
  standalone: true,
  imports: [CustomButtonComponent],
  templateUrl: './blog-newsletter.component.html',
  styleUrl: './blog-newsletter.component.css'
})
export class BlogNewsletterComponent {
  customtext='Send me newsletters'
}
