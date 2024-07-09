import { Component } from '@angular/core';
import { GFooterComponent } from '../shared/g-footer/g-footer.component';
import { GNavbarComponent } from '../shared/g-navbar/g-navbar.component';
import { BlogNewsletterComponent } from '../../../components/general/blog/blog-newsletter/blog-newsletter.component';
import { BlogOverviewComponent } from '../../../components/general/blog/blog-overview/blog-overview.component';
import { GBlogDataComponent } from '../../../components/ghana/blog/g-blog-data/g-blog-data.component';

@Component({
  selector: 'app-g-blog',
  standalone: true,
  imports: [GNavbarComponent, GFooterComponent,BlogNewsletterComponent,GBlogDataComponent,BlogOverviewComponent],
  templateUrl: './g-blog.component.html',
  styleUrl: './g-blog.component.css'
})
export class GBlogComponent {

}
