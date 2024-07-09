import { Component } from '@angular/core';
import { NNavbarComponent } from '../shared/n-navbar/n-navbar.component';
import { NFooterComponent } from '../shared/n-footer/n-footer.component';
import { GalleryOverviewComponent } from '../../../components/gallery/gallery-overview/gallery-overview.component';
import { GalleryImagesComponent } from '../../../components/gallery/gallery-images/gallery-images.component';

@Component({
  selector: 'app-n-gallery',
  standalone: true,
  imports: [NNavbarComponent, NFooterComponent, GalleryOverviewComponent, GalleryImagesComponent],
  templateUrl: './n-gallery.component.html',
  styleUrl: './n-gallery.component.css'
})
export class NGalleryComponent {
  name = 'eprocess nigeria';

  logostate = true;
}
