import { Component, Input } from '@angular/core';
import { BlognewsService } from '../../../service/news/blognews.service';
import { News } from '../../../shared/models/News';
import { CommonModule } from '@angular/common';
import { Router, RouterLink, RouterModule } from '@angular/router';

@Component({
  selector: 'app-blog-card',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterModule],
  templateUrl: './blog-card.component.html',
  styleUrl: './blog-card.component.css',
})
export class BlogCardComponent {
  // news: News[] = [];

  constructor(private router: Router) {}

  // ngOnInit(): void {
  //       this.news = this.newService.getAll();     // it calls the getAll method of FoodService to populate the foods array.
  // }

  @Input() new: any = [];

  toBlogContent(blog: News) {
    this.router.navigate(['/eProcess-International-S.A/blog/', blog.id]);
  }
}
