import { Component } from '@angular/core';
import { CustomButtonComponent } from '../../../general/custom-button/custom-button.component';
import { BlogCardComponent } from '../../../general/blog-card/blog-card.component';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { News } from '../../../../shared/models/News';
import { BlognewsService } from '../../../../service/news/blognews.service';

@Component({
  selector: 'app-n-our-blog',
  standalone: true,
  imports: [CustomButtonComponent, BlogCardComponent, CommonModule, RouterLink],
  templateUrl: './n-our-blog.component.html',
  styleUrl: './n-our-blog.component.css'
})
export class NOurBlogComponent {
  customtext = 'See All Writings';

  news: News[] = [];

  constructor(private newService: BlognewsService) {}

  ngOnInit(): void {
    this.news = this.newService.getAll(); // it calls the getAll method of FoodService to populate the foods array.
  }
}
