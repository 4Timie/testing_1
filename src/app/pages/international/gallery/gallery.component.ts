import { Component } from '@angular/core';
import { NavbarComponent } from '../shared/navbar/navbar.component';
import { GalleryOverviewComponent } from '../../../components/gallery/gallery-overview/gallery-overview.component';
import { FooterComponent } from '../shared/footer/footer.component';
import { GalleryImagesComponent } from '../../../components/gallery/gallery-images/gallery-images.component';

@Component({
  selector: 'app-gallery',
  standalone: true,
  imports: [NavbarComponent, GalleryOverviewComponent, FooterComponent, GalleryImagesComponent],
  templateUrl: './gallery.component.html',
  styleUrl: './gallery.component.css',
})
export class GalleryComponent {
  name = 'eprocess international';

}
