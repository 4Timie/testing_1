import { Component } from '@angular/core';
import { News } from '../../../../shared/models/News';
import { BlognewsService } from '../../../../service/news/blognews.service';
import { BlogCardComponent } from '../../../general/blog-card/blog-card.component';
import { CommonModule } from '@angular/common';
import { CustomButtonComponent } from '../../../general/custom-button/custom-button.component';

@Component({
  selector: 'app-blog-data',
  standalone: true,
  imports: [BlogCardComponent, CommonModule, CustomButtonComponent],
  templateUrl: './blog-data.component.html',
  styleUrl: './blog-data.component.css',
})
export class BlogDataComponent {
  customtext = 'Load More Articles';
  customStyles = {
    'background-color': '#0282AD1A',
    border: '1px solid #0282AD',
    color: '#0282AD',
  };
  news: News[] = [];

  constructor(private newService: BlognewsService) {}

  ngOnInit(): void {
    this.news = this.newService.getAll(); // it calls the getAll method of FoodService to populate the foods array.
  }
}
