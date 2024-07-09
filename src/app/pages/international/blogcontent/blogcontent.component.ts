import { Component } from '@angular/core';
import { NavbarComponent } from '../shared/navbar/navbar.component';
import { FooterComponent } from '../shared/footer/footer.component';
import { BlogNewsletterComponent } from '../../../components/general/blog/blog-newsletter/blog-newsletter.component';
import { News } from '../../../shared/models/News';
import { ActivatedRoute } from '@angular/router';
import { BlognewsService } from '../../../service/news/blognews.service';
import { BlogMainComponent } from '../../../components/general/blogContent/blog-main/blog-main.component';

@Component({
  selector: 'app-blogcontent',
  standalone: true,
  imports: [
    NavbarComponent,
    FooterComponent,
    BlogNewsletterComponent,
    BlogMainComponent,
  ],
  templateUrl: './blogcontent.component.html',
  styleUrl: './blogcontent.component.css',
})
export class BlogcontentComponent {
  blog: News | undefined;

  constructor(
    private route: ActivatedRoute,
    private blogService: BlognewsService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      const blogId = +params['id']; // '+' is used to convert the string to a number
      this.blog = this.blogService.getNewsById(blogId);
      console.log(this.blog);
    });
  }
}
