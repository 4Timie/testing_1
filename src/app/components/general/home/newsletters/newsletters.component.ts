import { Component, Input } from '@angular/core';
import { CustomButtonComponent } from '../../custom-button/custom-button.component';

@Component({
  selector: 'app-newsletters',
  standalone: true,
  imports: [CustomButtonComponent],
  templateUrl: './newsletters.component.html',
  styleUrl: './newsletters.component.css'
})
export class NewslettersComponent {
 customtext='Send me newsletters'

 @Input() text=''
}
