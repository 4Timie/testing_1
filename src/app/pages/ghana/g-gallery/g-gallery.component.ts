import { Component } from '@angular/core';
import { GNavbarComponent } from '../shared/g-navbar/g-navbar.component';
import { GFooterComponent } from '../shared/g-footer/g-footer.component';
import { GalleryOverviewComponent } from '../../../components/gallery/gallery-overview/gallery-overview.component';
import { GalleryImagesComponent } from '../../../components/gallery/gallery-images/gallery-images.component';

@Component({
  selector: 'app-g-gallery',
  standalone: true,
  imports: [GNavbarComponent, GFooterComponent,GalleryOverviewComponent, GalleryImagesComponent],
  templateUrl: './g-gallery.component.html',
  styleUrl: './g-gallery.component.css'
})
export class GGalleryComponent {
  name = 'eprocess ghana';

}
