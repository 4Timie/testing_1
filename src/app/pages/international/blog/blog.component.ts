import { Component } from '@angular/core';
import { NavbarComponent } from '../shared/navbar/navbar.component';
import { BlogOverviewComponent } from '../../../components/general/blog/blog-overview/blog-overview.component';
import { FooterComponent } from '../shared/footer/footer.component';
import { BlogNewsletterComponent } from '../../../components/general/blog/blog-newsletter/blog-newsletter.component';
import { BlogDataComponent } from '../../../components/international/blog/blog-data/blog-data.component';

@Component({
  selector: 'app-blog',
  standalone: true,
  imports: [NavbarComponent, BlogOverviewComponent, FooterComponent,BlogNewsletterComponent,BlogDataComponent],
  templateUrl: './blog.component.html',
  styleUrl: './blog.component.css',
})
export class BlogComponent {
}
