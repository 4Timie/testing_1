import { Component } from '@angular/core';
import { BlogNewsletterComponent } from '../../../components/general/blog/blog-newsletter/blog-newsletter.component';
import { BlogOverviewComponent } from '../../../components/general/blog/blog-overview/blog-overview.component';
import { NNavbarComponent } from '../shared/n-navbar/n-navbar.component';
import { NFooterComponent } from '../shared/n-footer/n-footer.component';
import { NBlogDataComponent } from '../../../components/nigeria/blog/n-blog-data/n-blog-data.component';

@Component({
  selector: 'app-n-blog',
  standalone: true,
  imports: [
    NNavbarComponent,
    NFooterComponent,
    BlogNewsletterComponent,
    BlogOverviewComponent,
    NBlogDataComponent
  ],
  templateUrl: './n-blog.component.html',
  styleUrl: './n-blog.component.css',
})
export class NBlogComponent {}
