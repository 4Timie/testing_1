import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-gallery-overview',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './gallery-overview.component.html',
  styleUrl: './gallery-overview.component.css',
})
export class GalleryOverviewComponent {
  @Input() name = '';

  @Input() logostate = false;

}
