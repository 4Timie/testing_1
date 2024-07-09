import { Component, Input } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { News } from '../../../../shared/models/News';
import { BlognewsService } from '../../../../service/news/blognews.service';
import { BlogCardComponent } from '../../blog-card/blog-card.component';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-blog-main',
  standalone: true,
  imports: [MatIconModule, BlogCardComponent, CommonModule, RouterModule],
  templateUrl: './blog-main.component.html',
  styleUrl: './blog-main.component.css',
})
export class BlogMainComponent {
  @Input() blog: any = [];

  news: News[] = [];

  constructor(private newService: BlognewsService, private router: Router) {}

  ngOnInit(): void {
    this.news = this.newService.getAll(); // it calls the getAll method of FoodService to populate the foods array.
  }

  goBack() {
    this.router.navigate(['/eProcess-International-S.A/blog']);
  }
}
