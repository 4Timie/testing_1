import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-our-objectives',
  standalone: true,
  imports: [],
  templateUrl: './our-objectives.component.html',
  styleUrl: './our-objectives.component.css'
})
export class OurObjectivesComponent {
@Input() imageobj=''
}
